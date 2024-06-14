/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "ibc.applications.transfer.v1";

/** Allocation defines the spend limit for a particular port and channel */
export interface Allocation {
  /** the port on which the packet will be sent */
  sourcePort: string;
  /** the channel by which the packet will be sent */
  sourceChannel: string;
  /** spend limitation on the channel */
  spendLimit: Coin[];
  /** allow list of receivers, an empty allow list permits any receiver address */
  allowList: string[];
  /**
   * allow list of packet data keys, an empty list prohibits all packet data keys;
   * a list only with "*" permits any packet data key
   */
  allowedPacketData: string[];
}

/**
 * TransferAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account for ibc transfer on a specific channel
 */
export interface TransferAuthorization {
  /** port and channel amounts */
  allocations: Allocation[];
}

const baseAllocation: object = {
  sourcePort: "",
  sourceChannel: "",
  allowList: "",
  allowedPacketData: "",
};

export const Allocation = {
  encode(
    message: Allocation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sourcePort !== "") {
      writer.uint32(10).string(message.sourcePort);
    }
    if (message.sourceChannel !== "") {
      writer.uint32(18).string(message.sourceChannel);
    }
    for (const v of message.spendLimit) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.allowList) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.allowedPacketData) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Allocation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAllocation } as Allocation;
    message.spendLimit = [];
    message.allowList = [];
    message.allowedPacketData = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourcePort = reader.string();
          break;
        case 2:
          message.sourceChannel = reader.string();
          break;
        case 3:
          message.spendLimit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.allowList.push(reader.string());
          break;
        case 5:
          message.allowedPacketData.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Allocation {
    const message = { ...baseAllocation } as Allocation;
    message.sourcePort =
      object.sourcePort !== undefined && object.sourcePort !== null
        ? String(object.sourcePort)
        : "";
    message.sourceChannel =
      object.sourceChannel !== undefined && object.sourceChannel !== null
        ? String(object.sourceChannel)
        : "";
    message.spendLimit = (object.spendLimit ?? []).map((e: any) =>
      Coin.fromJSON(e)
    );
    message.allowList = (object.allowList ?? []).map((e: any) => String(e));
    message.allowedPacketData = (object.allowedPacketData ?? []).map((e: any) =>
      String(e)
    );
    return message;
  },

  toJSON(message: Allocation): unknown {
    const obj: any = {};
    message.sourcePort !== undefined && (obj.sourcePort = message.sourcePort);
    message.sourceChannel !== undefined &&
      (obj.sourceChannel = message.sourceChannel);
    if (message.spendLimit) {
      obj.spendLimit = message.spendLimit.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.spendLimit = [];
    }
    if (message.allowList) {
      obj.allowList = message.allowList.map((e) => e);
    } else {
      obj.allowList = [];
    }
    if (message.allowedPacketData) {
      obj.allowedPacketData = message.allowedPacketData.map((e) => e);
    } else {
      obj.allowedPacketData = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Allocation>): Allocation {
    const message = { ...baseAllocation } as Allocation;
    message.sourcePort = object.sourcePort ?? "";
    message.sourceChannel = object.sourceChannel ?? "";
    message.spendLimit = (object.spendLimit ?? []).map((e) =>
      Coin.fromPartial(e)
    );
    message.allowList = (object.allowList ?? []).map((e) => e);
    message.allowedPacketData = (object.allowedPacketData ?? []).map((e) => e);
    return message;
  },
};

const baseTransferAuthorization: object = {};

export const TransferAuthorization = {
  encode(
    message: TransferAuthorization,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.allocations) {
      Allocation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TransferAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTransferAuthorization } as TransferAuthorization;
    message.allocations = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allocations.push(Allocation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransferAuthorization {
    const message = { ...baseTransferAuthorization } as TransferAuthorization;
    message.allocations = (object.allocations ?? []).map((e: any) =>
      Allocation.fromJSON(e)
    );
    return message;
  },

  toJSON(message: TransferAuthorization): unknown {
    const obj: any = {};
    if (message.allocations) {
      obj.allocations = message.allocations.map((e) =>
        e ? Allocation.toJSON(e) : undefined
      );
    } else {
      obj.allocations = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<TransferAuthorization>
  ): TransferAuthorization {
    const message = { ...baseTransferAuthorization } as TransferAuthorization;
    message.allocations = (object.allocations ?? []).map((e) =>
      Allocation.fromPartial(e)
    );
    return message;
  },
};

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
