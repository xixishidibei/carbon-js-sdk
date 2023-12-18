import {
  CarbonChainIDs,
  CarbonEvmChainIDs,
  DEFAULT_NETWORK,
  DenomPrefix,
  Network,
  NetworkConfig,
  NetworkConfigs,
  Network as _Network,
} from "@carbon-sdk/constant";
import { GenericUtils, NetworkUtils } from "@carbon-sdk/util";
import { Tendermint37Client } from "@cosmjs/tendermint-rpc";
import { NodeHttpTransport } from "@improbable-eng/grpc-web-node-http-transport";
import * as clients from "./clients";
import { CarbonQueryClient, ETHClient, HydrogenClient, InsightsQueryClient, NEOClient, TokenClient, ZILClient } from "./clients";
import GrpcQueryClient from "./clients/GrpcQueryClient";
import N3Client from "./clients/N3Client";
import {
  AdminModule,
  AllianceModule,
  BankModule,
  BrokerModule,
  CDPModule,
  CoinModule,
  ERC20Module,
  EvmMergeModule,
  EvmModule,
  FeeModule,
  GovModule,
  IBCModule,
  LeverageModule,
  LiquidityPoolModule,
  MarketModule,
  OracleModule,
  OrderModule,
  PerpspoolModule,
  PositionModule,
  ProfileModule,
  SubAccountModule,
  XChainModule,
} from "./modules";
import { StakingModule } from "./modules/staking";
import { CosmosLedger, Keplr, KeplrAccount, LeapAccount, LeapExtended } from "./provider";
import { MetaMask } from "./provider/metamask/MetaMask";
import { SWTHAddressOptions } from "./util/address";
import { Blockchain } from "./util/blockchain";
import { CarbonWallet, CarbonWalletGenericOpts, CarbonSigner, MetaMaskWalletOpts, CarbonLedgerSigner } from "./wallet";
import { bnOrZero } from "./util/number";
import { SimpleMap } from "./util/type";
import BigNumber from "bignumber.js";
import GasFee from "./clients/GasFee";
import { PageRequest } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
export { CarbonSigner, CarbonSignerTypes, CarbonWallet, CarbonWalletGenericOpts, CarbonWalletInitOpts } from "@carbon-sdk/wallet";
export { CarbonTx } from "@carbon-sdk/util";
export { DenomPrefix } from "./constant";
export * as Carbon from "./codec/carbon-models";
import Long from "long";

export interface CarbonSDKOpts {
  network: Network;
  tmClient: Tendermint37Client;
  wallet?: CarbonWallet;
  chainId?: string;
  evmChainId?: string;
  token?: TokenClient;
  query?: CarbonQueryClient;
  hydrogen?: HydrogenClient;
  insights?: InsightsQueryClient;
  config?: Partial<NetworkConfig>;
  grpcQueryClient?: GrpcQueryClient;
  useTmAbciQuery?: boolean;
  defaultTimeoutBlocks?: number; // tx mempool ttl (timeoutHeight)
  gasFee?: GasFee;
}
export interface CarbonSDKInitOpts {
  network: Network;
  tmClient?: Tendermint37Client;
  config?: Partial<NetworkConfig>;
  wallet?: CarbonWallet;

  skipInit?: boolean;
  defaultTimeoutBlocks?: number;

  /**
   * temporary flag to disable GRPC Query client service when required
   * TODO: Deprecate when grpc query client is implemented across all networks
   */
  useTmAbciQuery?: boolean;
}

const DEFAULT_SDK_INIT_OPTS: CarbonSDKInitOpts = {
  network: DEFAULT_NETWORK,
};

/**
 * Carbon SDK
 *
 *
 */
class CarbonSDK {
  public static DEFAULT_NETWORK = DEFAULT_NETWORK;
  public static DenomPrefix = DenomPrefix;

  public readonly query: CarbonQueryClient;
  public readonly useTmAbciQuery: boolean;
  insights: InsightsQueryClient;
  hydrogen: HydrogenClient;

  wallet?: CarbonWallet;

  network: Network;
  configOverride: Partial<NetworkConfig>;
  networkConfig: NetworkConfig;
  tmClient: Tendermint37Client;
  token: TokenClient;
  
  admin: AdminModule;
  alliance: AllianceModule;
  order: OrderModule;
  lp: LiquidityPoolModule;
  erc20: ERC20Module;
  perpspool: PerpspoolModule;
  subaccount: SubAccountModule;
  profile: ProfileModule;
  cdp: CDPModule;
  leverage: LeverageModule;
  market: MarketModule;
  broker: BrokerModule;
  position: PositionModule;
  coin: CoinModule;
  oracle: OracleModule;
  gov: GovModule;
  staking: StakingModule;
  bank: BankModule;
  fee: FeeModule;
  ibc: IBCModule;
  xchain: XChainModule;
  evm: EvmModule;
  evmmerge: EvmMergeModule;

  neo: NEOClient;
  eth: ETHClient;
  bsc: ETHClient;
  arbitrum: ETHClient;
  polygon: ETHClient;
  okc: ETHClient;
  zil: ZILClient;
  n3: N3Client;
  chainId: string;
  evmChainId: string;
  gasFee: GasFee;
  constructor(opts: CarbonSDKOpts) {
    this.network = opts.network ?? DEFAULT_NETWORK;
    this.configOverride = opts.config ?? {};
    this.networkConfig = GenericUtils.overrideConfig(NetworkConfigs[this.network], this.configOverride);
    this.useTmAbciQuery = opts.useTmAbciQuery ?? false;
    this.gasFee = opts.gasFee ?? GasFee.instance()

    this.tmClient = opts.tmClient;
    this.wallet = opts.wallet;
    this.chainId = opts.chainId ?? CarbonChainIDs[this.network] ?? CarbonChainIDs[Network.MainNet];
    this.evmChainId = opts.evmChainId ?? CarbonEvmChainIDs[this.network] ?? CarbonEvmChainIDs[Network.MainNet];

    let carbonQueryClient: CarbonQueryClient | undefined;
    if (!opts.query) {
      let grpcClient: GrpcQueryClient | undefined;
      if (opts.useTmAbciQuery !== true && this.networkConfig.grpcUrl) {
        const transport = typeof window === "undefined" ? NodeHttpTransport() : undefined;

        grpcClient = opts.grpcQueryClient ?? new GrpcQueryClient(this.networkConfig.grpcWebUrl, {
          transport,
        });
      }
      carbonQueryClient = new CarbonQueryClient({
        tmClient: this.tmClient,
        grpcClient,
      });
    }

    this.query = (opts.query ?? carbonQueryClient)!
    this.insights = opts.insights ?? new InsightsQueryClient(this.networkConfig);
    this.token = opts.token ?? TokenClient.instance(this.query, this);
    this.hydrogen = opts.hydrogen ?? new HydrogenClient(this.networkConfig, this.token);

    this.admin = new AdminModule(this);
    this.alliance = new AllianceModule(this);
    this.order = new OrderModule(this);
    this.lp = new LiquidityPoolModule(this);
    this.erc20 = new ERC20Module(this);
    this.perpspool = new PerpspoolModule(this);
    this.subaccount = new SubAccountModule(this);
    this.profile = new ProfileModule(this);
    this.cdp = new CDPModule(this);
    this.leverage = new LeverageModule(this);
    this.market = new MarketModule(this);
    this.broker = new BrokerModule(this);
    this.position = new PositionModule(this);
    this.coin = new CoinModule(this);
    this.oracle = new OracleModule(this);
    this.gov = new GovModule(this);
    this.staking = new StakingModule(this);
    this.bank = new BankModule(this);
    this.fee = new FeeModule(this);
    this.ibc = new IBCModule(this);
    this.xchain = new XChainModule(this);
    this.evm = new EvmModule(this);
    this.evmmerge = new EvmMergeModule(this);

    this.neo = NEOClient.instance({
      configProvider: this,
      blockchain: Blockchain.Neo,
    });

    this.n3 = N3Client.instance({
      configProvider: this,
      blockchain: Blockchain.Neo3,
    });

    this.eth = ETHClient.instance({
      configProvider: this,
      blockchain: Blockchain.Ethereum,
      tokenClient: this.token,
    });

    this.bsc = ETHClient.instance({
      configProvider: this,
      blockchain: Blockchain.BinanceSmartChain,
      tokenClient: this.token,
    });

    this.zil = ZILClient.instance({
      configProvider: this,
      blockchain: Blockchain.Zilliqa,
    });

    this.arbitrum = ETHClient.instance({
      configProvider: this,
      blockchain: Blockchain.Arbitrum,
      tokenClient: this.token,
    });

    this.polygon = ETHClient.instance({
      configProvider: this,
      blockchain: Blockchain.Polygon,
      tokenClient: this.token,
    });

    this.okc = ETHClient.instance({
      configProvider: this,
      blockchain: Blockchain.Okc,
      tokenClient: this.token,
    });
  }

  public static async instance(opts: CarbonSDKInitOpts = DEFAULT_SDK_INIT_OPTS) {
    const network = opts.network ?? DEFAULT_NETWORK;
    const configOverride = opts.config ?? {};
    const defaultTimeoutBlocks = opts.defaultTimeoutBlocks;
    const networkConfig = GenericUtils.overrideConfig(NetworkConfigs[network], configOverride);
    const tmClient: Tendermint37Client = opts.tmClient ?? new (Tendermint37Client as any)(new clients.BatchQueryClient(networkConfig.tmRpcUrl)); // fallback tmClient

    let chainId = networkConfig.chainId; // fallback chain ID
    let normalInit = true;

    try {
      chainId = (await tmClient.status())?.nodeInfo.network;
    } catch (error) {
      console.warn("tm client init failed");
      console.error(error);
      normalInit = false;
    }

    const sdk = new CarbonSDK({ network, config: configOverride, tmClient, defaultTimeoutBlocks, chainId, useTmAbciQuery: opts.useTmAbciQuery });

    if (!normalInit) return sdk;

    if (opts.wallet) {
      await sdk.connect(opts.wallet);
    }

    if (opts.skipInit !== true) {
      await sdk.initialize();
    }

    return sdk;
  }

  public static async instanceWithWallet(wallet: CarbonWallet, sdkOpts: CarbonSDKInitOpts = DEFAULT_SDK_INIT_OPTS) {
    const sdk = await CarbonSDK.instance(sdkOpts);
    return sdk.connect(wallet);
  }

  public static async instanceWithPrivateKey(
    privateKey: string | Buffer,
    sdkOpts: CarbonSDKInitOpts = DEFAULT_SDK_INIT_OPTS,
    walletOpts?: CarbonWalletGenericOpts
  ) {
    const sdk = await CarbonSDK.instance(sdkOpts);
    return sdk.connectWithPrivateKey(privateKey, walletOpts);
  }

  public static async instanceWithMnemonic(
    mnemonic: string,
    sdkOpts: CarbonSDKInitOpts = DEFAULT_SDK_INIT_OPTS,
    walletOpts?: CarbonWalletGenericOpts
  ) {
    const sdk = await CarbonSDK.instance(sdkOpts);
    return sdk.connectWithMnemonic(mnemonic, walletOpts);
  }

  public static async instanceWithSigner(
    signer: CarbonSigner,
    publicKeyBase64: string,
    sdkOpts: CarbonSDKInitOpts = DEFAULT_SDK_INIT_OPTS,
    walletOpts?: CarbonWalletGenericOpts
  ) {
    const sdk = await CarbonSDK.instance(sdkOpts);
    return sdk.connectWithSigner(signer, publicKeyBase64, walletOpts);
  }

  public static async instanceWithLedger(
    ledger: CosmosLedger,
    sdkOpts: CarbonSDKInitOpts = DEFAULT_SDK_INIT_OPTS,
    walletOpts?: CarbonWalletGenericOpts
  ) {
    const sdk = await CarbonSDK.instance(sdkOpts);
    return sdk.connectWithLedger(ledger, walletOpts);
  }

  public static async instanceWithKeplr(
    keplr: Keplr,
    sdkOpts: CarbonSDKInitOpts = DEFAULT_SDK_INIT_OPTS,
    walletOpts?: CarbonWalletGenericOpts
  ) {
    const sdk = await CarbonSDK.instance(sdkOpts);
    return sdk.connectWithKeplr(keplr, walletOpts);
  }

  public static async instanceWithLeap(
    leap: LeapExtended,
    sdkOpts: CarbonSDKInitOpts = DEFAULT_SDK_INIT_OPTS,
    walletOpts?: CarbonWalletGenericOpts
  ) {
    const sdk = await CarbonSDK.instance(sdkOpts);
    return sdk.connectWithLeap(leap, walletOpts);
  }

  public static async instanceWithMetamask(
    metamask: MetaMask,
    sdkOpts: CarbonSDKInitOpts = DEFAULT_SDK_INIT_OPTS,
    walletOpts?: CarbonWalletGenericOpts,
    metamaskWalletOpts?: MetaMaskWalletOpts
  ) {
    const sdk = await CarbonSDK.instance(sdkOpts);
    return sdk.connectWithMetamask(metamask, walletOpts, metamaskWalletOpts);
  }

  public static async instanceViewOnly(
    bech32Address: string,
    sdkOpts: CarbonSDKInitOpts = DEFAULT_SDK_INIT_OPTS,
    walletOpts?: CarbonWalletGenericOpts
  ) {
    const sdk = await CarbonSDK.instance(sdkOpts);
    return sdk.connectViewOnly(bech32Address, walletOpts);
  }

  public async initialize(): Promise<CarbonSDK> {
    const fees = await this.getGasFee();
    const chainId = await this.query.chain.getChainId();
    this.chainId = chainId;
    this.gasFee = fees
    await this.token.initialize();
    if (this.wallet) {
      await this.wallet.initialize(this.query, fees);
    }

    return this;
  }

  private async getGasFee(){
    const queryClient = this.query
    const { msgGasCosts } = await queryClient.fee.MsgGasCostAll({
      pagination: PageRequest.fromPartial({
        limit: new Long(10000),
      }),
    });

    const txGasCosts = msgGasCosts.reduce((result, item) => {
      result[item.msgType] = bnOrZero(item.gasCost);
      return result;
    }, {} as SimpleMap<BigNumber>);

    const { minGasPrices } = await queryClient.fee.MinGasPriceAll({
      pagination: PageRequest.fromPartial({
        limit: new Long(10000),
      }),
    });

    const txGasPrices = minGasPrices.reduce((result, item) => {
      result[item.denom] = bnOrZero(item.gasPrice).shiftedBy(-18); // sdk.Dec shifting
      return result;
    }, {} as SimpleMap<BigNumber>);

    const fees = new GasFee(txGasCosts, txGasPrices)
    return fees
  }

  public clone(): CarbonSDK {
    return new CarbonSDK(this.generateOpts());
  }

  public generateOpts(): CarbonSDKOpts {
    return {
      network: this.network,
      config: this.configOverride,
      chainId: this.chainId,
      evmChainId: this.evmChainId,
      useTmAbciQuery: this.useTmAbciQuery,

      gasFee: this.gasFee,
      wallet: this.wallet,
      tmClient: this.tmClient,
      token: this.token,
      query: this.query,
      hydrogen: this.hydrogen,
      insights: this.insights,
    };
  }

  public async connect(wallet: CarbonWallet): Promise<ConnectedCarbonSDK> {
    if (!wallet.initialized) {
      try {
        // Perform initialize function as per normal, but add try-catch statement to check err message
        const fees = await this.getGasFee();
        await wallet.initialize(this.query, fees);
      } catch (err) {
        const errorTyped = err as Error;
        // In the case where account does not exist on chain, still allow wallet connection.
        // Else, throw an error as per normal
        if (!errorTyped.message.includes("Account does not exist on chain. Send some tokens there before trying to query sequence.")) {
          throw new Error(errorTyped.message);
        }
      }
    }
    this.wallet = wallet;
    return this as ConnectedCarbonSDK;
  }

  public disconnect(): CarbonSDK {
    if (this.wallet?.isLedgerSigner()) {
      (this.wallet.signer as CarbonLedgerSigner).ledger.disconnect();
    }
    const opts = this.generateOpts();
    delete opts.wallet;
    return new CarbonSDK(opts);
  }

  public async connectWithPrivateKey(privateKey: string | Buffer, opts?: CarbonWalletGenericOpts) {
    const wallet = CarbonWallet.withPrivateKey(privateKey, {
      ...opts,
      network: this.network,
      config: this.configOverride,
    });
    return this.connect(wallet);
  }

  public async connectWithMnemonic(mnemonic: string, opts?: CarbonWalletGenericOpts) {
    const wallet = CarbonWallet.withMnemonic(mnemonic, {
      ...opts,
      network: this.network,
      config: this.configOverride,
    });
    return this.connect(wallet);
  }

  public async connectWithSigner(signer: CarbonSigner, publicKeyBase64: string, opts?: CarbonWalletGenericOpts) {
    const wallet = CarbonWallet.withSigner(signer, publicKeyBase64, {
      ...opts,
      network: this.network,
      config: this.configOverride,
    });
    return this.connect(wallet);
  }

  public async connectWithLedger(ledger: CosmosLedger, opts?: CarbonWalletGenericOpts) {
    const publicKeyBuffer = await ledger.getPubKey();
    const publicKeyBase64 = publicKeyBuffer.toString("base64");

    const wallet = CarbonWallet.withLedger(ledger, publicKeyBase64, {
      ...opts,
      network: this.network,
      config: this.configOverride,
    });
    return this.connect(wallet);
  }

  public async connectWithKeplr(keplr: Keplr, opts?: CarbonWalletGenericOpts) {
    const chainInfo = await KeplrAccount.getChainInfo(this);
    const chainId = chainInfo.chainId;
    await keplr.experimentalSuggestChain(chainInfo);

    const keplrKey = await keplr.getKey(chainId);
    await keplr.enable(chainId);

    const wallet = CarbonWallet.withKeplr(keplr, chainInfo, keplrKey, {
      ...opts,
      network: this.network,
      config: this.configOverride,
    });
    return this.connect(wallet);
  }

  public async connectWithLeap(leap: LeapExtended, opts?: CarbonWalletGenericOpts) {
    const chainId = this.chainId;
    const chainInfo = await LeapAccount.getChainInfo(this);
    await leap.experimentalSuggestChain(chainInfo);

    const leapKey = await leap.getKey(chainId);
    await leap.enable(chainId);

    const wallet = CarbonWallet.withLeap(leap, chainId, leapKey, {
      ...opts,
      network: this.network,
      config: this.configOverride,
    });
    return this.connect(wallet);
  }

  public async connectWithMetamask(metamask: MetaMask, opts?: CarbonWalletGenericOpts, metamaskWalletOpts?: MetaMaskWalletOpts) {
    const evmChainId = this.evmChainId;
    const addressOptions: SWTHAddressOptions = {
      network: this.networkConfig.network,
      bech32Prefix: this.networkConfig.Bech32Prefix,
    };
    let publicKeyBase64: string
    const address = await metamask.defaultAccount()
    if (metamaskWalletOpts?.publicKeyBase64) {
      publicKeyBase64 = metamaskWalletOpts?.publicKeyBase64
    } else {
      const publicKeyHex = await metamask.getPublicKey(address, metamaskWalletOpts?.publicKeyMessage)
      publicKeyBase64 = Buffer.from(publicKeyHex, 'hex').toString('base64')
    }
    const wallet = CarbonWallet.withMetamask(metamask, evmChainId, publicKeyBase64, addressOptions, {
      ...opts,
      network: this.network,
      config: this.configOverride,
    });
    return this.connect(wallet);
  }

  public async connectViewOnly(bech32Address: string, opts?: CarbonWalletGenericOpts) {
    const wallet = CarbonWallet.withAddress(bech32Address, {
      ...opts,
      network: this.network,
      config: this.configOverride,
    });
    return this.connect(wallet);
  }

  public getConfig(): NetworkConfig {
    return this.networkConfig;
  }

  public getTokenClient(): TokenClient {
    return this.token;
  }

  public getConnectedWallet(): CarbonWallet {
    return this.checkWallet();
  }

  public log(...args: any[]) {
    console.log.apply(console.log, [this.constructor.name, ...args]);
  }

  private checkWallet(): CarbonWallet {
    if (!this.wallet) {
      throw new Error("wallet not connected");
    }

    return this.wallet;
  }

  public static parseNetwork = NetworkUtils.parseNetwork;
}

export class ConnectedCarbonSDK extends CarbonSDK {
  wallet: CarbonWallet;

  constructor(wallet: CarbonWallet, opts: CarbonSDKOpts) {
    super(opts);
    this.wallet = wallet;
  }

  public clone(): ConnectedCarbonSDK {
    return new ConnectedCarbonSDK(this.wallet, this.generateOpts());
  }
}

namespace CarbonSDK {
  export import Network = _Network;
  export import CarbonQueryClient = clients.CarbonQueryClient;
  export import ETHClient = clients.ETHClient;
  export import HydrogenClient = clients.HydrogenClient;
  export import InsightsQueryClient = clients.InsightsQueryClient;
  export import NEOClient = clients.NEOClient;
  export import TokenClient = clients.TokenClient;
  export import ZILClient = clients.ZILClient;
}

export default CarbonSDK;
