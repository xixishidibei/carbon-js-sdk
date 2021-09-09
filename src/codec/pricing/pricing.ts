/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../google/protobuf/timestamp";

export const protobufPackage = "Switcheo.carbon.pricing";

export interface PriceSet {
  last: string;
  index: string;
  fair: string;
  mark: string;
  markAvg: string;
  settlement: string;
  fairIndexDeltaAvg: string;
  market: string;
  markingStrategy: string;
  indexUpdatedAt?: Date;
  settlementCounter: string;
}

const basePriceSet: object = {
  last: "",
  index: "",
  fair: "",
  mark: "",
  markAvg: "",
  settlement: "",
  fairIndexDeltaAvg: "",
  market: "",
  markingStrategy: "",
  settlementCounter: "",
};

export const PriceSet = {
  encode(
    message: PriceSet,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.last !== "") {
      writer.uint32(10).string(message.last);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.fair !== "") {
      writer.uint32(26).string(message.fair);
    }
    if (message.mark !== "") {
      writer.uint32(34).string(message.mark);
    }
    if (message.markAvg !== "") {
      writer.uint32(42).string(message.markAvg);
    }
    if (message.settlement !== "") {
      writer.uint32(50).string(message.settlement);
    }
    if (message.fairIndexDeltaAvg !== "") {
      writer.uint32(58).string(message.fairIndexDeltaAvg);
    }
    if (message.market !== "") {
      writer.uint32(66).string(message.market);
    }
    if (message.markingStrategy !== "") {
      writer.uint32(74).string(message.markingStrategy);
    }
    if (message.indexUpdatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.indexUpdatedAt),
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.settlementCounter !== "") {
      writer.uint32(98).string(message.settlementCounter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PriceSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePriceSet } as PriceSet;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.last = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.fair = reader.string();
          break;
        case 4:
          message.mark = reader.string();
          break;
        case 5:
          message.markAvg = reader.string();
          break;
        case 6:
          message.settlement = reader.string();
          break;
        case 7:
          message.fairIndexDeltaAvg = reader.string();
          break;
        case 8:
          message.market = reader.string();
          break;
        case 9:
          message.markingStrategy = reader.string();
          break;
        case 10:
          message.indexUpdatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.settlementCounter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PriceSet {
    const message = { ...basePriceSet } as PriceSet;
    if (object.last !== undefined && object.last !== null) {
      message.last = String(object.last);
    } else {
      message.last = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.fair !== undefined && object.fair !== null) {
      message.fair = String(object.fair);
    } else {
      message.fair = "";
    }
    if (object.mark !== undefined && object.mark !== null) {
      message.mark = String(object.mark);
    } else {
      message.mark = "";
    }
    if (object.markAvg !== undefined && object.markAvg !== null) {
      message.markAvg = String(object.markAvg);
    } else {
      message.markAvg = "";
    }
    if (object.settlement !== undefined && object.settlement !== null) {
      message.settlement = String(object.settlement);
    } else {
      message.settlement = "";
    }
    if (
      object.fairIndexDeltaAvg !== undefined &&
      object.fairIndexDeltaAvg !== null
    ) {
      message.fairIndexDeltaAvg = String(object.fairIndexDeltaAvg);
    } else {
      message.fairIndexDeltaAvg = "";
    }
    if (object.market !== undefined && object.market !== null) {
      message.market = String(object.market);
    } else {
      message.market = "";
    }
    if (
      object.markingStrategy !== undefined &&
      object.markingStrategy !== null
    ) {
      message.markingStrategy = String(object.markingStrategy);
    } else {
      message.markingStrategy = "";
    }
    if (object.indexUpdatedAt !== undefined && object.indexUpdatedAt !== null) {
      message.indexUpdatedAt = fromJsonTimestamp(object.indexUpdatedAt);
    } else {
      message.indexUpdatedAt = undefined;
    }
    if (
      object.settlementCounter !== undefined &&
      object.settlementCounter !== null
    ) {
      message.settlementCounter = String(object.settlementCounter);
    } else {
      message.settlementCounter = "";
    }
    return message;
  },

  toJSON(message: PriceSet): unknown {
    const obj: any = {};
    message.last !== undefined && (obj.last = message.last);
    message.index !== undefined && (obj.index = message.index);
    message.fair !== undefined && (obj.fair = message.fair);
    message.mark !== undefined && (obj.mark = message.mark);
    message.markAvg !== undefined && (obj.markAvg = message.markAvg);
    message.settlement !== undefined && (obj.settlement = message.settlement);
    message.fairIndexDeltaAvg !== undefined &&
      (obj.fairIndexDeltaAvg = message.fairIndexDeltaAvg);
    message.market !== undefined && (obj.market = message.market);
    message.markingStrategy !== undefined &&
      (obj.markingStrategy = message.markingStrategy);
    message.indexUpdatedAt !== undefined &&
      (obj.indexUpdatedAt = message.indexUpdatedAt.toISOString());
    message.settlementCounter !== undefined &&
      (obj.settlementCounter = message.settlementCounter);
    return obj;
  },

  fromPartial(object: DeepPartial<PriceSet>): PriceSet {
    const message = { ...basePriceSet } as PriceSet;
    if (object.last !== undefined && object.last !== null) {
      message.last = object.last;
    } else {
      message.last = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.fair !== undefined && object.fair !== null) {
      message.fair = object.fair;
    } else {
      message.fair = "";
    }
    if (object.mark !== undefined && object.mark !== null) {
      message.mark = object.mark;
    } else {
      message.mark = "";
    }
    if (object.markAvg !== undefined && object.markAvg !== null) {
      message.markAvg = object.markAvg;
    } else {
      message.markAvg = "";
    }
    if (object.settlement !== undefined && object.settlement !== null) {
      message.settlement = object.settlement;
    } else {
      message.settlement = "";
    }
    if (
      object.fairIndexDeltaAvg !== undefined &&
      object.fairIndexDeltaAvg !== null
    ) {
      message.fairIndexDeltaAvg = object.fairIndexDeltaAvg;
    } else {
      message.fairIndexDeltaAvg = "";
    }
    if (object.market !== undefined && object.market !== null) {
      message.market = object.market;
    } else {
      message.market = "";
    }
    if (
      object.markingStrategy !== undefined &&
      object.markingStrategy !== null
    ) {
      message.markingStrategy = object.markingStrategy;
    } else {
      message.markingStrategy = "";
    }
    if (object.indexUpdatedAt !== undefined && object.indexUpdatedAt !== null) {
      message.indexUpdatedAt = object.indexUpdatedAt;
    } else {
      message.indexUpdatedAt = undefined;
    }
    if (
      object.settlementCounter !== undefined &&
      object.settlementCounter !== null
    ) {
      message.settlementCounter = object.settlementCounter;
    } else {
      message.settlementCounter = "";
    }
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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
