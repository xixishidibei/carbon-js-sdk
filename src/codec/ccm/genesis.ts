/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.ccm";

/** GenesisState defines the ccm module's genesis state. */
export interface GenesisState {
  /** An auto-incrementing count of x-chain txs generated by this chain. Used as a nonce / ID unique to this chain. */
  createdTxCount: string;
  /** Details of cross chain tx generated by this chain. */
  createdTxDetails: { [key: string]: Uint8Array };
  /** The cross chain tx IDs (issued by a sending chain) that has been processed by this chain. */
  receivedTxIds: { [key: string]: Uint8Array };
  /** Denom to creator mapping. */
  denomCreators: { [key: string]: string };
}

export interface GenesisState_CreatedTxDetailsEntry {
  key: string;
  value: Uint8Array;
}

export interface GenesisState_ReceivedTxIdsEntry {
  key: string;
  value: Uint8Array;
}

export interface GenesisState_DenomCreatorsEntry {
  key: string;
  value: string;
}

const baseGenesisState: object = { createdTxCount: "" };

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.createdTxCount !== "") {
      writer.uint32(10).string(message.createdTxCount);
    }
    Object.entries(message.createdTxDetails).forEach(([key, value]) => {
      GenesisState_CreatedTxDetailsEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork()
      ).ldelim();
    });
    Object.entries(message.receivedTxIds).forEach(([key, value]) => {
      GenesisState_ReceivedTxIdsEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork()
      ).ldelim();
    });
    Object.entries(message.denomCreators).forEach(([key, value]) => {
      GenesisState_DenomCreatorsEntry.encode(
        { key: key as any, value },
        writer.uint32(34).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.createdTxDetails = {};
    message.receivedTxIds = {};
    message.denomCreators = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.createdTxCount = reader.string();
          break;
        case 2:
          const entry2 = GenesisState_CreatedTxDetailsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry2.value !== undefined) {
            message.createdTxDetails[entry2.key] = entry2.value;
          }
          break;
        case 3:
          const entry3 = GenesisState_ReceivedTxIdsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.receivedTxIds[entry3.key] = entry3.value;
          }
          break;
        case 4:
          const entry4 = GenesisState_DenomCreatorsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.denomCreators[entry4.key] = entry4.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.createdTxCount =
      object.createdTxCount !== undefined && object.createdTxCount !== null
        ? String(object.createdTxCount)
        : "";
    message.createdTxDetails = Object.entries(
      object.createdTxDetails ?? {}
    ).reduce<{ [key: string]: Uint8Array }>((acc, [key, value]) => {
      acc[key] = bytesFromBase64(value as string);
      return acc;
    }, {});
    message.receivedTxIds = Object.entries(object.receivedTxIds ?? {}).reduce<{
      [key: string]: Uint8Array;
    }>((acc, [key, value]) => {
      acc[key] = bytesFromBase64(value as string);
      return acc;
    }, {});
    message.denomCreators = Object.entries(object.denomCreators ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.createdTxCount !== undefined &&
      (obj.createdTxCount = message.createdTxCount);
    obj.createdTxDetails = {};
    if (message.createdTxDetails) {
      Object.entries(message.createdTxDetails).forEach(([k, v]) => {
        obj.createdTxDetails[k] = base64FromBytes(v);
      });
    }
    obj.receivedTxIds = {};
    if (message.receivedTxIds) {
      Object.entries(message.receivedTxIds).forEach(([k, v]) => {
        obj.receivedTxIds[k] = base64FromBytes(v);
      });
    }
    obj.denomCreators = {};
    if (message.denomCreators) {
      Object.entries(message.denomCreators).forEach(([k, v]) => {
        obj.denomCreators[k] = v;
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.createdTxCount = object.createdTxCount ?? "";
    message.createdTxDetails = Object.entries(
      object.createdTxDetails ?? {}
    ).reduce<{ [key: string]: Uint8Array }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});
    message.receivedTxIds = Object.entries(object.receivedTxIds ?? {}).reduce<{
      [key: string]: Uint8Array;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});
    message.denomCreators = Object.entries(object.denomCreators ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

const baseGenesisState_CreatedTxDetailsEntry: object = { key: "" };

export const GenesisState_CreatedTxDetailsEntry = {
  encode(
    message: GenesisState_CreatedTxDetailsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GenesisState_CreatedTxDetailsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGenesisState_CreatedTxDetailsEntry,
    } as GenesisState_CreatedTxDetailsEntry;
    message.value = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState_CreatedTxDetailsEntry {
    const message = {
      ...baseGenesisState_CreatedTxDetailsEntry,
    } as GenesisState_CreatedTxDetailsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? bytesFromBase64(object.value)
        : new Uint8Array();
    return message;
  },

  toJSON(message: GenesisState_CreatedTxDetailsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<GenesisState_CreatedTxDetailsEntry>
  ): GenesisState_CreatedTxDetailsEntry {
    const message = {
      ...baseGenesisState_CreatedTxDetailsEntry,
    } as GenesisState_CreatedTxDetailsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

const baseGenesisState_ReceivedTxIdsEntry: object = { key: "" };

export const GenesisState_ReceivedTxIdsEntry = {
  encode(
    message: GenesisState_ReceivedTxIdsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GenesisState_ReceivedTxIdsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGenesisState_ReceivedTxIdsEntry,
    } as GenesisState_ReceivedTxIdsEntry;
    message.value = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState_ReceivedTxIdsEntry {
    const message = {
      ...baseGenesisState_ReceivedTxIdsEntry,
    } as GenesisState_ReceivedTxIdsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? bytesFromBase64(object.value)
        : new Uint8Array();
    return message;
  },

  toJSON(message: GenesisState_ReceivedTxIdsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<GenesisState_ReceivedTxIdsEntry>
  ): GenesisState_ReceivedTxIdsEntry {
    const message = {
      ...baseGenesisState_ReceivedTxIdsEntry,
    } as GenesisState_ReceivedTxIdsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

const baseGenesisState_DenomCreatorsEntry: object = { key: "", value: "" };

export const GenesisState_DenomCreatorsEntry = {
  encode(
    message: GenesisState_DenomCreatorsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GenesisState_DenomCreatorsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGenesisState_DenomCreatorsEntry,
    } as GenesisState_DenomCreatorsEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState_DenomCreatorsEntry {
    const message = {
      ...baseGenesisState_DenomCreatorsEntry,
    } as GenesisState_DenomCreatorsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: GenesisState_DenomCreatorsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GenesisState_DenomCreatorsEntry>
  ): GenesisState_DenomCreatorsEntry {
    const message = {
      ...baseGenesisState_DenomCreatorsEntry,
    } as GenesisState_DenomCreatorsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
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
