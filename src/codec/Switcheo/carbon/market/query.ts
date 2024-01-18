/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Market, Params, ControlledParams } from "./market";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { TradingFees, FeeTier, StakeEquivalence, FeeStructure } from "./fee";

export const protobufPackage = "Switcheo.carbon.market";

/** this line is used by starport scaffolding # 3 */
export interface QueryGetMarketRequest {
  name: string;
}

export interface QueryGetMarketResponse {
  market?: Market;
}

export interface QueryAllMarketRequest {
  pagination?: PageRequest;
}

export interface QueryAllMarketResponse {
  markets: Market[];
  pagination?: PageResponse;
}

export interface QueryGetTradingFeesRequest {
  marketName: string;
  userAddress: string;
}

export interface QueryGetTradingFeesResponse {
  fees?: TradingFees;
}

export interface QueryGetFeeTiersRequest {
  marketType: string;
  marketName: string;
  userAddress: string;
}

export interface QueryGetFeeTiersResponse {
  feeTiers: FeeTier[];
}

export interface QueryAllStakeEquivalenceRequest {}

export interface QueryAllStakeEquivalenceResponse {
  stakeEquivalence: StakeEquivalence[];
}

export interface QueryAllFeeStructuresRequest {}

export interface QueryAllFeeStructuresResponse {
  feeStructures: FeeStructure[];
}

export interface QueryUserFeeStructuresRequest {
  userAddress: string;
}

export interface QueryUserFeeStructuresResponse {
  feeStructures: FeeStructure[];
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

/** QueryControlledParamsRequest is request type for the Query/ControlledParams RPC method. */
export interface QueryControlledParamsRequest {}

/** QueryControlledParamsResponse is response type for the Query/ControlledParams RPC method. */
export interface QueryControlledParamsResponse {
  /** params holds all the parameters of this module. */
  controlledParams?: ControlledParams;
}

const baseQueryGetMarketRequest: object = { name: "" };

export const QueryGetMarketRequest = {
  encode(
    message: QueryGetMarketRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetMarketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetMarketRequest } as QueryGetMarketRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMarketRequest {
    const message = { ...baseQueryGetMarketRequest } as QueryGetMarketRequest;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    return message;
  },

  toJSON(message: QueryGetMarketRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMarketRequest>
  ): QueryGetMarketRequest {
    const message = { ...baseQueryGetMarketRequest } as QueryGetMarketRequest;
    message.name = object.name ?? "";
    return message;
  },
};

const baseQueryGetMarketResponse: object = {};

export const QueryGetMarketResponse = {
  encode(
    message: QueryGetMarketResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.market !== undefined) {
      Market.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetMarketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetMarketResponse } as QueryGetMarketResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.market = Market.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMarketResponse {
    const message = { ...baseQueryGetMarketResponse } as QueryGetMarketResponse;
    message.market =
      object.market !== undefined && object.market !== null
        ? Market.fromJSON(object.market)
        : undefined;
    return message;
  },

  toJSON(message: QueryGetMarketResponse): unknown {
    const obj: any = {};
    message.market !== undefined &&
      (obj.market = message.market ? Market.toJSON(message.market) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMarketResponse>
  ): QueryGetMarketResponse {
    const message = { ...baseQueryGetMarketResponse } as QueryGetMarketResponse;
    message.market =
      object.market !== undefined && object.market !== null
        ? Market.fromPartial(object.market)
        : undefined;
    return message;
  },
};

const baseQueryAllMarketRequest: object = {};

export const QueryAllMarketRequest = {
  encode(
    message: QueryAllMarketRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllMarketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllMarketRequest } as QueryAllMarketRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMarketRequest {
    const message = { ...baseQueryAllMarketRequest } as QueryAllMarketRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllMarketRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMarketRequest>
  ): QueryAllMarketRequest {
    const message = { ...baseQueryAllMarketRequest } as QueryAllMarketRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllMarketResponse: object = {};

export const QueryAllMarketResponse = {
  encode(
    message: QueryAllMarketResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.markets) {
      Market.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllMarketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllMarketResponse } as QueryAllMarketResponse;
    message.markets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.markets.push(Market.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMarketResponse {
    const message = { ...baseQueryAllMarketResponse } as QueryAllMarketResponse;
    message.markets = (object.markets ?? []).map((e: any) =>
      Market.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllMarketResponse): unknown {
    const obj: any = {};
    if (message.markets) {
      obj.markets = message.markets.map((e) =>
        e ? Market.toJSON(e) : undefined
      );
    } else {
      obj.markets = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMarketResponse>
  ): QueryAllMarketResponse {
    const message = { ...baseQueryAllMarketResponse } as QueryAllMarketResponse;
    message.markets = (object.markets ?? []).map((e) => Market.fromPartial(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryGetTradingFeesRequest: object = {
  marketName: "",
  userAddress: "",
};

export const QueryGetTradingFeesRequest = {
  encode(
    message: QueryGetTradingFeesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketName !== "") {
      writer.uint32(10).string(message.marketName);
    }
    if (message.userAddress !== "") {
      writer.uint32(18).string(message.userAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetTradingFeesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetTradingFeesRequest,
    } as QueryGetTradingFeesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketName = reader.string();
          break;
        case 2:
          message.userAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTradingFeesRequest {
    const message = {
      ...baseQueryGetTradingFeesRequest,
    } as QueryGetTradingFeesRequest;
    message.marketName =
      object.marketName !== undefined && object.marketName !== null
        ? String(object.marketName)
        : "";
    message.userAddress =
      object.userAddress !== undefined && object.userAddress !== null
        ? String(object.userAddress)
        : "";
    return message;
  },

  toJSON(message: QueryGetTradingFeesRequest): unknown {
    const obj: any = {};
    message.marketName !== undefined && (obj.marketName = message.marketName);
    message.userAddress !== undefined &&
      (obj.userAddress = message.userAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTradingFeesRequest>
  ): QueryGetTradingFeesRequest {
    const message = {
      ...baseQueryGetTradingFeesRequest,
    } as QueryGetTradingFeesRequest;
    message.marketName = object.marketName ?? "";
    message.userAddress = object.userAddress ?? "";
    return message;
  },
};

const baseQueryGetTradingFeesResponse: object = {};

export const QueryGetTradingFeesResponse = {
  encode(
    message: QueryGetTradingFeesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fees !== undefined) {
      TradingFees.encode(message.fees, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetTradingFeesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetTradingFeesResponse,
    } as QueryGetTradingFeesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fees = TradingFees.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTradingFeesResponse {
    const message = {
      ...baseQueryGetTradingFeesResponse,
    } as QueryGetTradingFeesResponse;
    message.fees =
      object.fees !== undefined && object.fees !== null
        ? TradingFees.fromJSON(object.fees)
        : undefined;
    return message;
  },

  toJSON(message: QueryGetTradingFeesResponse): unknown {
    const obj: any = {};
    message.fees !== undefined &&
      (obj.fees = message.fees ? TradingFees.toJSON(message.fees) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTradingFeesResponse>
  ): QueryGetTradingFeesResponse {
    const message = {
      ...baseQueryGetTradingFeesResponse,
    } as QueryGetTradingFeesResponse;
    message.fees =
      object.fees !== undefined && object.fees !== null
        ? TradingFees.fromPartial(object.fees)
        : undefined;
    return message;
  },
};

const baseQueryGetFeeTiersRequest: object = {
  marketType: "",
  marketName: "",
  userAddress: "",
};

export const QueryGetFeeTiersRequest = {
  encode(
    message: QueryGetFeeTiersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketType !== "") {
      writer.uint32(10).string(message.marketType);
    }
    if (message.marketName !== "") {
      writer.uint32(18).string(message.marketName);
    }
    if (message.userAddress !== "") {
      writer.uint32(26).string(message.userAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetFeeTiersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetFeeTiersRequest,
    } as QueryGetFeeTiersRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketType = reader.string();
          break;
        case 2:
          message.marketName = reader.string();
          break;
        case 3:
          message.userAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetFeeTiersRequest {
    const message = {
      ...baseQueryGetFeeTiersRequest,
    } as QueryGetFeeTiersRequest;
    message.marketType =
      object.marketType !== undefined && object.marketType !== null
        ? String(object.marketType)
        : "";
    message.marketName =
      object.marketName !== undefined && object.marketName !== null
        ? String(object.marketName)
        : "";
    message.userAddress =
      object.userAddress !== undefined && object.userAddress !== null
        ? String(object.userAddress)
        : "";
    return message;
  },

  toJSON(message: QueryGetFeeTiersRequest): unknown {
    const obj: any = {};
    message.marketType !== undefined && (obj.marketType = message.marketType);
    message.marketName !== undefined && (obj.marketName = message.marketName);
    message.userAddress !== undefined &&
      (obj.userAddress = message.userAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetFeeTiersRequest>
  ): QueryGetFeeTiersRequest {
    const message = {
      ...baseQueryGetFeeTiersRequest,
    } as QueryGetFeeTiersRequest;
    message.marketType = object.marketType ?? "";
    message.marketName = object.marketName ?? "";
    message.userAddress = object.userAddress ?? "";
    return message;
  },
};

const baseQueryGetFeeTiersResponse: object = {};

export const QueryGetFeeTiersResponse = {
  encode(
    message: QueryGetFeeTiersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.feeTiers) {
      FeeTier.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetFeeTiersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetFeeTiersResponse,
    } as QueryGetFeeTiersResponse;
    message.feeTiers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeTiers.push(FeeTier.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetFeeTiersResponse {
    const message = {
      ...baseQueryGetFeeTiersResponse,
    } as QueryGetFeeTiersResponse;
    message.feeTiers = (object.feeTiers ?? []).map((e: any) =>
      FeeTier.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryGetFeeTiersResponse): unknown {
    const obj: any = {};
    if (message.feeTiers) {
      obj.feeTiers = message.feeTiers.map((e) =>
        e ? FeeTier.toJSON(e) : undefined
      );
    } else {
      obj.feeTiers = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetFeeTiersResponse>
  ): QueryGetFeeTiersResponse {
    const message = {
      ...baseQueryGetFeeTiersResponse,
    } as QueryGetFeeTiersResponse;
    message.feeTiers = (object.feeTiers ?? []).map((e) =>
      FeeTier.fromPartial(e)
    );
    return message;
  },
};

const baseQueryAllStakeEquivalenceRequest: object = {};

export const QueryAllStakeEquivalenceRequest = {
  encode(
    _: QueryAllStakeEquivalenceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllStakeEquivalenceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllStakeEquivalenceRequest,
    } as QueryAllStakeEquivalenceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryAllStakeEquivalenceRequest {
    const message = {
      ...baseQueryAllStakeEquivalenceRequest,
    } as QueryAllStakeEquivalenceRequest;
    return message;
  },

  toJSON(_: QueryAllStakeEquivalenceRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryAllStakeEquivalenceRequest>
  ): QueryAllStakeEquivalenceRequest {
    const message = {
      ...baseQueryAllStakeEquivalenceRequest,
    } as QueryAllStakeEquivalenceRequest;
    return message;
  },
};

const baseQueryAllStakeEquivalenceResponse: object = {};

export const QueryAllStakeEquivalenceResponse = {
  encode(
    message: QueryAllStakeEquivalenceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.stakeEquivalence) {
      StakeEquivalence.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllStakeEquivalenceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllStakeEquivalenceResponse,
    } as QueryAllStakeEquivalenceResponse;
    message.stakeEquivalence = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakeEquivalence.push(
            StakeEquivalence.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllStakeEquivalenceResponse {
    const message = {
      ...baseQueryAllStakeEquivalenceResponse,
    } as QueryAllStakeEquivalenceResponse;
    message.stakeEquivalence = (object.stakeEquivalence ?? []).map((e: any) =>
      StakeEquivalence.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryAllStakeEquivalenceResponse): unknown {
    const obj: any = {};
    if (message.stakeEquivalence) {
      obj.stakeEquivalence = message.stakeEquivalence.map((e) =>
        e ? StakeEquivalence.toJSON(e) : undefined
      );
    } else {
      obj.stakeEquivalence = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllStakeEquivalenceResponse>
  ): QueryAllStakeEquivalenceResponse {
    const message = {
      ...baseQueryAllStakeEquivalenceResponse,
    } as QueryAllStakeEquivalenceResponse;
    message.stakeEquivalence = (object.stakeEquivalence ?? []).map((e) =>
      StakeEquivalence.fromPartial(e)
    );
    return message;
  },
};

const baseQueryAllFeeStructuresRequest: object = {};

export const QueryAllFeeStructuresRequest = {
  encode(
    _: QueryAllFeeStructuresRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllFeeStructuresRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllFeeStructuresRequest,
    } as QueryAllFeeStructuresRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryAllFeeStructuresRequest {
    const message = {
      ...baseQueryAllFeeStructuresRequest,
    } as QueryAllFeeStructuresRequest;
    return message;
  },

  toJSON(_: QueryAllFeeStructuresRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryAllFeeStructuresRequest>
  ): QueryAllFeeStructuresRequest {
    const message = {
      ...baseQueryAllFeeStructuresRequest,
    } as QueryAllFeeStructuresRequest;
    return message;
  },
};

const baseQueryAllFeeStructuresResponse: object = {};

export const QueryAllFeeStructuresResponse = {
  encode(
    message: QueryAllFeeStructuresResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.feeStructures) {
      FeeStructure.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllFeeStructuresResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllFeeStructuresResponse,
    } as QueryAllFeeStructuresResponse;
    message.feeStructures = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeStructures.push(
            FeeStructure.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllFeeStructuresResponse {
    const message = {
      ...baseQueryAllFeeStructuresResponse,
    } as QueryAllFeeStructuresResponse;
    message.feeStructures = (object.feeStructures ?? []).map((e: any) =>
      FeeStructure.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryAllFeeStructuresResponse): unknown {
    const obj: any = {};
    if (message.feeStructures) {
      obj.feeStructures = message.feeStructures.map((e) =>
        e ? FeeStructure.toJSON(e) : undefined
      );
    } else {
      obj.feeStructures = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllFeeStructuresResponse>
  ): QueryAllFeeStructuresResponse {
    const message = {
      ...baseQueryAllFeeStructuresResponse,
    } as QueryAllFeeStructuresResponse;
    message.feeStructures = (object.feeStructures ?? []).map((e) =>
      FeeStructure.fromPartial(e)
    );
    return message;
  },
};

const baseQueryUserFeeStructuresRequest: object = { userAddress: "" };

export const QueryUserFeeStructuresRequest = {
  encode(
    message: QueryUserFeeStructuresRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUserFeeStructuresRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryUserFeeStructuresRequest,
    } as QueryUserFeeStructuresRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUserFeeStructuresRequest {
    const message = {
      ...baseQueryUserFeeStructuresRequest,
    } as QueryUserFeeStructuresRequest;
    message.userAddress =
      object.userAddress !== undefined && object.userAddress !== null
        ? String(object.userAddress)
        : "";
    return message;
  },

  toJSON(message: QueryUserFeeStructuresRequest): unknown {
    const obj: any = {};
    message.userAddress !== undefined &&
      (obj.userAddress = message.userAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryUserFeeStructuresRequest>
  ): QueryUserFeeStructuresRequest {
    const message = {
      ...baseQueryUserFeeStructuresRequest,
    } as QueryUserFeeStructuresRequest;
    message.userAddress = object.userAddress ?? "";
    return message;
  },
};

const baseQueryUserFeeStructuresResponse: object = {};

export const QueryUserFeeStructuresResponse = {
  encode(
    message: QueryUserFeeStructuresResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.feeStructures) {
      FeeStructure.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUserFeeStructuresResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryUserFeeStructuresResponse,
    } as QueryUserFeeStructuresResponse;
    message.feeStructures = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeStructures.push(
            FeeStructure.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUserFeeStructuresResponse {
    const message = {
      ...baseQueryUserFeeStructuresResponse,
    } as QueryUserFeeStructuresResponse;
    message.feeStructures = (object.feeStructures ?? []).map((e: any) =>
      FeeStructure.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryUserFeeStructuresResponse): unknown {
    const obj: any = {};
    if (message.feeStructures) {
      obj.feeStructures = message.feeStructures.map((e) =>
        e ? FeeStructure.toJSON(e) : undefined
      );
    } else {
      obj.feeStructures = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryUserFeeStructuresResponse>
  ): QueryUserFeeStructuresResponse {
    const message = {
      ...baseQueryUserFeeStructuresResponse,
    } as QueryUserFeeStructuresResponse;
    message.feeStructures = (object.feeStructures ?? []).map((e) =>
      FeeStructure.fromPartial(e)
    );
    return message;
  },
};

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(
    _: QueryParamsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromJSON(object.params)
        : undefined;
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

const baseQueryControlledParamsRequest: object = {};

export const QueryControlledParamsRequest = {
  encode(
    _: QueryControlledParamsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryControlledParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryControlledParamsRequest,
    } as QueryControlledParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryControlledParamsRequest {
    const message = {
      ...baseQueryControlledParamsRequest,
    } as QueryControlledParamsRequest;
    return message;
  },

  toJSON(_: QueryControlledParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryControlledParamsRequest>
  ): QueryControlledParamsRequest {
    const message = {
      ...baseQueryControlledParamsRequest,
    } as QueryControlledParamsRequest;
    return message;
  },
};

const baseQueryControlledParamsResponse: object = {};

export const QueryControlledParamsResponse = {
  encode(
    message: QueryControlledParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.controlledParams !== undefined) {
      ControlledParams.encode(
        message.controlledParams,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryControlledParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryControlledParamsResponse,
    } as QueryControlledParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.controlledParams = ControlledParams.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryControlledParamsResponse {
    const message = {
      ...baseQueryControlledParamsResponse,
    } as QueryControlledParamsResponse;
    message.controlledParams =
      object.controlledParams !== undefined && object.controlledParams !== null
        ? ControlledParams.fromJSON(object.controlledParams)
        : undefined;
    return message;
  },

  toJSON(message: QueryControlledParamsResponse): unknown {
    const obj: any = {};
    message.controlledParams !== undefined &&
      (obj.controlledParams = message.controlledParams
        ? ControlledParams.toJSON(message.controlledParams)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryControlledParamsResponse>
  ): QueryControlledParamsResponse {
    const message = {
      ...baseQueryControlledParamsResponse,
    } as QueryControlledParamsResponse;
    message.controlledParams =
      object.controlledParams !== undefined && object.controlledParams !== null
        ? ControlledParams.fromPartial(object.controlledParams)
        : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Get details for a market */
  Market(request: QueryGetMarketRequest): Promise<QueryGetMarketResponse>;
  /** Get details for all markets */
  MarketAll(request: QueryAllMarketRequest): Promise<QueryAllMarketResponse>;
  /** Get the trading fees for market and user */
  TradingFees(
    request: QueryGetTradingFeesRequest
  ): Promise<QueryGetTradingFeesResponse>;
  /** Get Fee structure of the market */
  FeeTiers(request: QueryGetFeeTiersRequest): Promise<QueryGetFeeTiersResponse>;
  /** Get all stake equivalences as an array */
  StakeEquivalenceAll(
    request: QueryAllStakeEquivalenceRequest
  ): Promise<QueryAllStakeEquivalenceResponse>;
  FeeStructuresAll(
    request: QueryAllFeeStructuresRequest
  ): Promise<QueryAllFeeStructuresResponse>;
  UserFeeStructures(
    request: QueryUserFeeStructuresRequest
  ): Promise<QueryUserFeeStructuresResponse>;
  /** Parameters queries the staking parameters. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Get the controlled parameters for all markets */
  ControlledParams(
    request: QueryControlledParamsRequest
  ): Promise<QueryControlledParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Market = this.Market.bind(this);
    this.MarketAll = this.MarketAll.bind(this);
    this.TradingFees = this.TradingFees.bind(this);
    this.FeeTiers = this.FeeTiers.bind(this);
    this.StakeEquivalenceAll = this.StakeEquivalenceAll.bind(this);
    this.FeeStructuresAll = this.FeeStructuresAll.bind(this);
    this.UserFeeStructures = this.UserFeeStructures.bind(this);
    this.Params = this.Params.bind(this);
    this.ControlledParams = this.ControlledParams.bind(this);
  }
  Market(request: QueryGetMarketRequest): Promise<QueryGetMarketResponse> {
    const data = QueryGetMarketRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.market.Query",
      "Market",
      data
    );
    return promise.then((data) =>
      QueryGetMarketResponse.decode(new _m0.Reader(data))
    );
  }

  MarketAll(request: QueryAllMarketRequest): Promise<QueryAllMarketResponse> {
    const data = QueryAllMarketRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.market.Query",
      "MarketAll",
      data
    );
    return promise.then((data) =>
      QueryAllMarketResponse.decode(new _m0.Reader(data))
    );
  }

  TradingFees(
    request: QueryGetTradingFeesRequest
  ): Promise<QueryGetTradingFeesResponse> {
    const data = QueryGetTradingFeesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.market.Query",
      "TradingFees",
      data
    );
    return promise.then((data) =>
      QueryGetTradingFeesResponse.decode(new _m0.Reader(data))
    );
  }

  FeeTiers(
    request: QueryGetFeeTiersRequest
  ): Promise<QueryGetFeeTiersResponse> {
    const data = QueryGetFeeTiersRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.market.Query",
      "FeeTiers",
      data
    );
    return promise.then((data) =>
      QueryGetFeeTiersResponse.decode(new _m0.Reader(data))
    );
  }

  StakeEquivalenceAll(
    request: QueryAllStakeEquivalenceRequest
  ): Promise<QueryAllStakeEquivalenceResponse> {
    const data = QueryAllStakeEquivalenceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.market.Query",
      "StakeEquivalenceAll",
      data
    );
    return promise.then((data) =>
      QueryAllStakeEquivalenceResponse.decode(new _m0.Reader(data))
    );
  }

  FeeStructuresAll(
    request: QueryAllFeeStructuresRequest
  ): Promise<QueryAllFeeStructuresResponse> {
    const data = QueryAllFeeStructuresRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.market.Query",
      "FeeStructuresAll",
      data
    );
    return promise.then((data) =>
      QueryAllFeeStructuresResponse.decode(new _m0.Reader(data))
    );
  }

  UserFeeStructures(
    request: QueryUserFeeStructuresRequest
  ): Promise<QueryUserFeeStructuresResponse> {
    const data = QueryUserFeeStructuresRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.market.Query",
      "UserFeeStructures",
      data
    );
    return promise.then((data) =>
      QueryUserFeeStructuresResponse.decode(new _m0.Reader(data))
    );
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.market.Query",
      "Params",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  ControlledParams(
    request: QueryControlledParamsRequest
  ): Promise<QueryControlledParamsResponse> {
    const data = QueryControlledParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.market.Query",
      "ControlledParams",
      data
    );
    return promise.then((data) =>
      QueryControlledParamsResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
