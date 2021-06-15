/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { MarketParams } from "../market/market";

export const protobufPackage = "Switcheo.carbon.market";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateMarket {
  creator: string;
  marketParams?: MarketParams;
}

export interface MsgCreateMarketResponse {
  name: string;
}

export interface MsgUpdateMarket {
  creator: string;
  marketParams?: MarketParams;
}

export interface MsgUpdateMarketResponse {}

const baseMsgCreateMarket: object = { creator: "" };

export const MsgCreateMarket = {
  encode(
    message: MsgCreateMarket,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.marketParams !== undefined) {
      MarketParams.encode(
        message.marketParams,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateMarket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateMarket } as MsgCreateMarket;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.marketParams = MarketParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateMarket {
    const message = { ...baseMsgCreateMarket } as MsgCreateMarket;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.marketParams !== undefined && object.marketParams !== null) {
      message.marketParams = MarketParams.fromJSON(object.marketParams);
    } else {
      message.marketParams = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateMarket): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.marketParams !== undefined &&
      (obj.marketParams = message.marketParams
        ? MarketParams.toJSON(message.marketParams)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateMarket>): MsgCreateMarket {
    const message = { ...baseMsgCreateMarket } as MsgCreateMarket;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.marketParams !== undefined && object.marketParams !== null) {
      message.marketParams = MarketParams.fromPartial(object.marketParams);
    } else {
      message.marketParams = undefined;
    }
    return message;
  },
};

const baseMsgCreateMarketResponse: object = { name: "" };

export const MsgCreateMarketResponse = {
  encode(
    message: MsgCreateMarketResponse,
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
  ): MsgCreateMarketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateMarketResponse,
    } as MsgCreateMarketResponse;
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

  fromJSON(object: any): MsgCreateMarketResponse {
    const message = {
      ...baseMsgCreateMarketResponse,
    } as MsgCreateMarketResponse;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: MsgCreateMarketResponse): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateMarketResponse>
  ): MsgCreateMarketResponse {
    const message = {
      ...baseMsgCreateMarketResponse,
    } as MsgCreateMarketResponse;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseMsgUpdateMarket: object = { creator: "" };

export const MsgUpdateMarket = {
  encode(
    message: MsgUpdateMarket,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.marketParams !== undefined) {
      MarketParams.encode(
        message.marketParams,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMarket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateMarket } as MsgUpdateMarket;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.marketParams = MarketParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateMarket {
    const message = { ...baseMsgUpdateMarket } as MsgUpdateMarket;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.marketParams !== undefined && object.marketParams !== null) {
      message.marketParams = MarketParams.fromJSON(object.marketParams);
    } else {
      message.marketParams = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateMarket): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.marketParams !== undefined &&
      (obj.marketParams = message.marketParams
        ? MarketParams.toJSON(message.marketParams)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateMarket>): MsgUpdateMarket {
    const message = { ...baseMsgUpdateMarket } as MsgUpdateMarket;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.marketParams !== undefined && object.marketParams !== null) {
      message.marketParams = MarketParams.fromPartial(object.marketParams);
    } else {
      message.marketParams = undefined;
    }
    return message;
  },
};

const baseMsgUpdateMarketResponse: object = {};

export const MsgUpdateMarketResponse = {
  encode(
    _: MsgUpdateMarketResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateMarketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateMarketResponse,
    } as MsgUpdateMarketResponse;
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

  fromJSON(_: any): MsgUpdateMarketResponse {
    const message = {
      ...baseMsgUpdateMarketResponse,
    } as MsgUpdateMarketResponse;
    return message;
  },

  toJSON(_: MsgUpdateMarketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateMarketResponse>
  ): MsgUpdateMarketResponse {
    const message = {
      ...baseMsgUpdateMarketResponse,
    } as MsgUpdateMarketResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateMarket(request: MsgCreateMarket): Promise<MsgCreateMarketResponse>;
  UpdateMarket(request: MsgUpdateMarket): Promise<MsgUpdateMarketResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateMarket = this.CreateMarket.bind(this);
    this.UpdateMarket = this.UpdateMarket.bind(this);
  }
  CreateMarket(request: MsgCreateMarket): Promise<MsgCreateMarketResponse> {
    const data = MsgCreateMarket.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.market.Msg",
      "CreateMarket",
      data
    );
    return promise.then((data) =>
      MsgCreateMarketResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateMarket(request: MsgUpdateMarket): Promise<MsgUpdateMarketResponse> {
    const data = MsgUpdateMarket.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.market.Msg",
      "UpdateMarket",
      data
    );
    return promise.then((data) =>
      MsgUpdateMarketResponse.decode(new _m0.Reader(data))
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
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
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
