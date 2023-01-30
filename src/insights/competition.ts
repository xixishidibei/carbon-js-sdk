import { TimeMeta, PageMeta } from "./common";

export interface CompetitionItem {
  id: string;
  competitionId: string;
  market: string;
  start: string; // string representation of timestamp
  end: string; // string representation of timestamp
  enablePNL: boolean;
  minBalance: number;
  enableVolume: boolean;
  makerIncentive: boolean;
}

export interface QueryGetCompetitionListResponse {
  models: CompetitionItem[];
  meta: PageMeta;
}

export interface QueryGetCompetitionListRequest {
  limit?: number;
  offset?: number;
}

// Volume Rankings
export interface VolumeLeaderboardEntry {
  competitionId: string;
  address: string;
  market: string;
  totalVolume: string;
  rank: string;
  username: string | null;
  twitter: string | null;
}

export interface QueryGetVolumeCompetitionLeaderboardResponse {
  entries: VolumeLeaderboardEntry[];
  meta: TimeMeta;
}

export interface QueryGetVolumeCompetitionLeaderboardRequest {
  competitionId: string;
  market?: string;
  from?: string;
  until?: string;
}

// PNL Rankings
export interface PNLLeaderboardEntry {
  competitionId: string;
  address: string;
  market: string;
  realizedPnl: string;
  unrealizedPnl: string;
  initialBalance: string;
  totalPnl: string;
  PnlPercent: string;
  rank: string;
  username: string | null;
  twitter: string | null;
}

export interface QueryGetPNLCompetitionLeaderboardResponse {
  entries: PNLLeaderboardEntry[];
  meta: TimeMeta;
}

export interface QueryGetPNLCompetitionLeaderboardRequest {
  competitionId: string;
  market?: string;
}
