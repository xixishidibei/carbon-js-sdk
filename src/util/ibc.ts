import { ChainInfoExplorerTmRpc, ChainIds, EmbedChainInfosInit, ibcWhitelist, totalAssetObj } from "@carbon-sdk/constant";
import { KeplrAccount } from "@carbon-sdk/provider";
import { Hash } from "@keplr-wallet/crypto";
import { AppCurrency } from "@keplr-wallet/types";
import { Blockchain } from "./blockchain";
import { SimpleMap } from "./type";

// Create IBC minimal denom
export function makeIBCMinimalDenom(sourceChannelId: string, coinMinimalDenom: string): string {
	return (
		'ibc/' +
		Buffer.from(Hash.sha256(Buffer.from(`transfer/${sourceChannelId}/${coinMinimalDenom}`)))
			.toString('hex')
			.toUpperCase()
	);
};

export const EmbedChainInfos = Object.values(EmbedChainInfosInit).reduce((prev: SimpleMap<ChainInfoExplorerTmRpc>, chainInfo: ChainInfoExplorerTmRpc) => {
  if (ibcWhitelist.includes(chainInfo.chainId)) {
    const swthIbc = totalAssetObj[chainInfo.chainId].swth;
    chainInfo.currencies.push({
      ...KeplrAccount.SWTH_CURRENCY,
      coinMinimalDenom: makeIBCMinimalDenom(swthIbc?.ibc?.dst_channel ?? '', KeplrAccount.SWTH_CURRENCY.coinMinimalDenom),
    });
  }
	prev[chainInfo.chainId] = chainInfo;
	return prev;
}, {});

export const ChainIdBlockchainMap: SimpleMap<Blockchain> = {
	[ChainIds.Osmosis]: Blockchain.Osmosis,
};

export const BlockchainMap = Object.values(EmbedChainInfos).reduce((prev: SimpleMap<Blockchain | undefined>, chainInfo: ChainInfoExplorerTmRpc) => {
	if (!ibcWhitelist.includes(chainInfo.chainId)) {
		return prev;
	}
	const newPrev = prev;
	chainInfo.currencies.forEach((currency: AppCurrency) => {
		if (currency.coinDenom.toLowerCase() === "swth") {
			newPrev[currency.coinMinimalDenom] = ChainIdBlockchainMap[chainInfo.chainId];
		} else {
			const ibcAddr = makeIBCMinimalDenom("channel-0", currency.coinMinimalDenom);
			newPrev[ibcAddr] = ChainIdBlockchainMap[chainInfo.chainId];
		}
	});
	return newPrev;
}, {});
