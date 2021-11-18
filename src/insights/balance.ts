import { TokenBalance } from "@carbon-sdk/codec";
import { Coin } from "@carbon-sdk/codec/cosmos/base/v1beta1/coin";
import { Interval, PageMeta, QueryByPageRequest } from ".";

export interface Balance {
  denom: string
  balance: string
}

export interface BalanceDetails {
  id: string
  denom: string
  address: string
  location: string
  balance: string
  lastSyncHeight: number
}

export interface BalanceHistory {
  amount: string
  time: string
}

export interface QueryGetTotalBalanceRequest {
  denom?: string
}

export interface QueryGetTotalBalanceResponse {
  entries: Balance[]
}

export interface QueryGetBalanceListRequest extends QueryByPageRequest {
  denom?: string
  location?: string
  address?: string
}

export interface QueryGetBalanceListResponse {
  models: BalanceDetails[]
  meta: PageMeta
}

export interface QueryGetBalanceChangeRequest {
  address: string
}

export interface QueryGetBalanceChangeResponse {
  entries: Coin[]
}

export interface QueryGetBalanceHistoryRequest {
  address: string
  denom: string
  interval: Interval
  limit: number
}

export interface QueryGetBalanceHistoryResponse {
  entries: BalanceHistory[]
}

export interface QueryGetBalanceSupplyResponse {
  entries: TokenBalance[]
}