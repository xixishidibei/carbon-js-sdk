import { Dayjs } from "dayjs";
import { ParsedTimeMeta, QueryByTimeRequest, TimeMeta } from "./common";
import BigNumber from "bignumber.js";

export interface ActiveAccounts {
  date: string;
  last1DCount: number;
  last1WCount: number;
  last2WCount: number;
  last1MCount: number;
  last3MCount: number;
  last6MCount: number;
  last1YCount: number;
}

export interface Profile {
  address: string;
  firstSeenBlock: number;
  lastSeenBlock: number;
  lastSeen: string;
  firstSeen: string;
  username: string;
  twitter: string;
}

export interface UserGrowth {
  t: string;
  minHeight: number;
  maxHeight: number;
  users: string;
}

export interface TotalUser {
  count: number;
  total: number;
  date: string;
}

export interface RawUserVolume {
  time: string;
  lastHeight: number;
  volumeValue: string;
}

export interface UserVolume {
  time: Dayjs;
  lastHeight: number;
  volumeValue: BigNumber;
}

export interface QueryGetUserProfileRequest {
  username?: string;
  address?: string;
}

export interface QueryGetUserProfileResponse {
  entries: Profile;
}

export interface QueryGetActiveAccountsRequest extends QueryByTimeRequest { }

export interface QueryGetActiveAccountsResponse {
  entries: ActiveAccounts[];
  meta: TimeMeta;
}

export interface QueryGetUserGrowthRequest extends QueryByTimeRequest { }

export interface QueryGetUserGrowthResponse {
  entries: UserGrowth[];
  meta: TimeMeta;
}

export interface QueryGetTotalUsersRequest extends QueryByTimeRequest { }

export interface QueryGetTotalUsersResponse {
  entries: TotalUser[];
  meta: TimeMeta;
}

export interface QueryGetUserVolumePathParams {
  address: string;
}

export interface QueryGetUserVolumeQueryParams extends QueryByTimeRequest { }

export interface QueryGetUserVolumeResponse {
  entries: UserVolume[]
  meta: ParsedTimeMeta
}

export interface ConnectedWalletParams {
  address: string,
  walletType: string,
}

export interface ConnectedWalletResponse {
  status: string
}