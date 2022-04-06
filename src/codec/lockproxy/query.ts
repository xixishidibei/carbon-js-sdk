/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.lockproxy";

/** this line is used by starport scaffolding # 3 */
export interface QueryGetProxyRequest {
  operatorAddress: string;
}

export interface QueryGetProxyResponse {
  proxyHash: Uint8Array;
}

const baseQueryGetProxyRequest: object = { operatorAddress: "" };

export const QueryGetProxyRequest = {
  encode(
    message: QueryGetProxyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetProxyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetProxyRequest } as QueryGetProxyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetProxyRequest {
    const message = { ...baseQueryGetProxyRequest } as QueryGetProxyRequest;
    message.operatorAddress =
      object.operatorAddress !== undefined && object.operatorAddress !== null
        ? String(object.operatorAddress)
        : "";
    return message;
  },

  toJSON(message: QueryGetProxyRequest): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined &&
      (obj.operatorAddress = message.operatorAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetProxyRequest>): QueryGetProxyRequest {
    const message = { ...baseQueryGetProxyRequest } as QueryGetProxyRequest;
    message.operatorAddress = object.operatorAddress ?? "";
    return message;
  },
};

const baseQueryGetProxyResponse: object = {};

export const QueryGetProxyResponse = {
  encode(
    message: QueryGetProxyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.proxyHash.length !== 0) {
      writer.uint32(10).bytes(message.proxyHash);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetProxyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetProxyResponse } as QueryGetProxyResponse;
    message.proxyHash = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proxyHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetProxyResponse {
    const message = { ...baseQueryGetProxyResponse } as QueryGetProxyResponse;
    message.proxyHash =
      object.proxyHash !== undefined && object.proxyHash !== null
        ? bytesFromBase64(object.proxyHash)
        : new Uint8Array();
    return message;
  },

  toJSON(message: QueryGetProxyResponse): unknown {
    const obj: any = {};
    message.proxyHash !== undefined &&
      (obj.proxyHash = base64FromBytes(
        message.proxyHash !== undefined ? message.proxyHash : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetProxyResponse>
  ): QueryGetProxyResponse {
    const message = { ...baseQueryGetProxyResponse } as QueryGetProxyResponse;
    message.proxyHash = object.proxyHash ?? new Uint8Array();
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  Proxy(request: QueryGetProxyRequest): Promise<QueryGetProxyResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Proxy = this.Proxy.bind(this);
  }
  Proxy(request: QueryGetProxyRequest): Promise<QueryGetProxyResponse> {
    const data = QueryGetProxyRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.lockproxy.Query",
      "Proxy",
      data
    );
    return promise.then((data) =>
      QueryGetProxyResponse.decode(new _m0.Reader(data))
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
