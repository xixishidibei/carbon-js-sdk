import { AminoTypes } from "@cosmjs/stargate";
import {
  AdminAmino,
  BankAmino,
  BrokerAmino,
  CdpAmino,
  CoinAmino,
  EvmAmino,
  EvmMergeAmino,
  FeeMarketAmino,
  GovAmino,
  IbcAmino,
  LeverageAmino,
  LiquidityPoolAmino,
  MarketAmino,
  OracleAmino,
  OrderAmino,
  PositionAmino,
  ProfileAmino,
  StakingAmino,
  SubAccountAmino,
  PerpspoolAmino,
  ERC20Amino,
} from "./types";

const AminoTypesMap = new AminoTypes({
  ...AdminAmino,
  ...BankAmino,
  ...BrokerAmino,
  ...CdpAmino,
  ...CoinAmino,
  ...GovAmino,
  ...IbcAmino,
  ...LeverageAmino,
  ...LiquidityPoolAmino,
  ...MarketAmino,
  ...OracleAmino,
  ...OrderAmino,
  ...PositionAmino,
  ...ProfileAmino,
  ...StakingAmino,
  ...SubAccountAmino,
  ...EvmAmino,
  ...EvmMergeAmino,
  ...FeeMarketAmino,
  ...PerpspoolAmino,
  ...ERC20Amino,
});

export default AminoTypesMap;
