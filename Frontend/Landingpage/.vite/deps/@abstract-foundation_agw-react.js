import "./chunk-DH3AC7EP.js";
import {
  abstract,
  abstractTestnet,
  hashBytecode,
  zksync,
  zksyncSepoliaTestnet
} from "./chunk-VRNGNMZM.js";
import {
  ChainNotConfiguredError,
  ProviderNotFoundError,
  QueryClient,
  QueryClientProvider,
  WagmiProvider,
  createConfig,
  createConnector,
  getConnectorClient,
  useAccount,
  useChains,
  useConfig,
  useConnect,
  useDisconnect,
  useMutation,
  useQuery,
  useWalletClient,
  useWriteContract,
  writeContract as writeContract2
} from "./chunk-DMZWUFI4.js";
import "./chunk-EEADHRRE.js";
import {
  toAccount
} from "./chunk-KPEJVMTQ.js";
import "./chunk-QQJYXMPP.js";
import "./chunk-NVRT77TK.js";
import "./chunk-4VIOXLJU.js";
import {
  require_react
} from "./chunk-HRGSACKM.js";
import {
  assertCurrentChain,
  createClient,
  createPublicClient,
  createWalletClient,
  custom,
  estimateGas,
  fromRlp,
  getAction,
  getBalance,
  getChainId,
  getCode,
  getContractError,
  getGasPrice,
  getTransactionCount,
  getTransactionError,
  getTransactionReceipt,
  hashMessage,
  hashTypedData,
  http,
  readContract,
  sendRawTransaction,
  sendTransaction,
  serializeErc6492Signature,
  signTypedData,
  writeContract,
  zeroAddress,
  zeroHash
} from "./chunk-RIOOC62C.js";
import "./chunk-HN4V2DDD.js";
import {
  AbiConstructorNotFoundError,
  AbiConstructorParamsNotFoundError,
  BaseError,
  ExecutionRevertedError,
  InvalidAddressError,
  InvalidParameterError,
  ProviderRpcError,
  RpcRequestError,
  SwitchChainError,
  TransactionReceiptNotFoundError,
  UnsupportedChainIdError,
  UnsupportedNonOptionalCapabilityError,
  assertRequest,
  bytesToString,
  concat,
  concatHex,
  decodeAbiParameters,
  decodeFunctionData,
  encodeAbiParameters,
  encodeFunctionData,
  fromHex,
  getAbiItem,
  getAddress,
  hexToBigInt,
  hexToNumber,
  isAddress,
  isHex,
  keccak256,
  parseAbiParameters,
  parseAccount,
  toBytes,
  toFunctionSelector,
  toHex
} from "./chunk-RYUROAPE.js";
import "./chunk-PN6W2LRQ.js";
import {
  __commonJS,
  __toESM
} from "./chunk-5JRVV4XU.js";

// node_modules/base64-js/index.js
var require_base64_js = __commonJS({
  "node_modules/base64-js/index.js"(exports) {
    "use strict";
    exports.byteLength = byteLength;
    exports.toByteArray = toByteArray;
    exports.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (i3 = 0, len = code.length; i3 < len; ++i3) {
      lookup[i3] = code[i3];
      revLookup[code.charCodeAt(i3)] = i3;
    }
    var i3;
    var len;
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
      var len2 = b64.length;
      if (len2 % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
      }
      var validLen = b64.indexOf("=");
      if (validLen === -1) validLen = len2;
      var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
      return [validLen, placeHoldersLen];
    }
    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function _byteLength(b64, validLen, placeHoldersLen) {
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function toByteArray(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i4;
      for (i4 = 0; i4 < len2; i4 += 4) {
        tmp = revLookup[b64.charCodeAt(i4)] << 18 | revLookup[b64.charCodeAt(i4 + 1)] << 12 | revLookup[b64.charCodeAt(i4 + 2)] << 6 | revLookup[b64.charCodeAt(i4 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i4)] << 2 | revLookup[b64.charCodeAt(i4 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i4)] << 10 | revLookup[b64.charCodeAt(i4 + 1)] << 4 | revLookup[b64.charCodeAt(i4 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      return arr;
    }
    function tripletToBase64(num2) {
      return lookup[num2 >> 18 & 63] + lookup[num2 >> 12 & 63] + lookup[num2 >> 6 & 63] + lookup[num2 & 63];
    }
    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];
      for (var i4 = start; i4 < end; i4 += 3) {
        tmp = (uint8[i4] << 16 & 16711680) + (uint8[i4 + 1] << 8 & 65280) + (uint8[i4 + 2] & 255);
        output.push(tripletToBase64(tmp));
      }
      return output.join("");
    }
    function fromByteArray(uint8) {
      var tmp;
      var len2 = uint8.length;
      var extraBytes = len2 % 3;
      var parts = [];
      var maxChunkLength = 16383;
      for (var i4 = 0, len22 = len2 - extraBytes; i4 < len22; i4 += maxChunkLength) {
        parts.push(encodeChunk(uint8, i4, i4 + maxChunkLength > len22 ? len22 : i4 + maxChunkLength));
      }
      if (extraBytes === 1) {
        tmp = uint8[len2 - 1];
        parts.push(
          lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "=="
        );
      } else if (extraBytes === 2) {
        tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
        parts.push(
          lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
        );
      }
      return parts.join("");
    }
  }
});

// node_modules/ieee754/index.js
var require_ieee754 = __commonJS({
  "node_modules/ieee754/index.js"(exports) {
    exports.read = function(buffer, offset, isLE2, mLen, nBytes) {
      var e3, m;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i3 = isLE2 ? nBytes - 1 : 0;
      var d2 = isLE2 ? -1 : 1;
      var s5 = buffer[offset + i3];
      i3 += d2;
      e3 = s5 & (1 << -nBits) - 1;
      s5 >>= -nBits;
      nBits += eLen;
      for (; nBits > 0; e3 = e3 * 256 + buffer[offset + i3], i3 += d2, nBits -= 8) {
      }
      m = e3 & (1 << -nBits) - 1;
      e3 >>= -nBits;
      nBits += mLen;
      for (; nBits > 0; m = m * 256 + buffer[offset + i3], i3 += d2, nBits -= 8) {
      }
      if (e3 === 0) {
        e3 = 1 - eBias;
      } else if (e3 === eMax) {
        return m ? NaN : (s5 ? -1 : 1) * Infinity;
      } else {
        m = m + Math.pow(2, mLen);
        e3 = e3 - eBias;
      }
      return (s5 ? -1 : 1) * m * Math.pow(2, e3 - mLen);
    };
    exports.write = function(buffer, value, offset, isLE2, mLen, nBytes) {
      var e3, m, c2;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i3 = isLE2 ? 0 : nBytes - 1;
      var d2 = isLE2 ? 1 : -1;
      var s5 = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      value = Math.abs(value);
      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e3 = eMax;
      } else {
        e3 = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c2 = Math.pow(2, -e3)) < 1) {
          e3--;
          c2 *= 2;
        }
        if (e3 + eBias >= 1) {
          value += rt / c2;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c2 >= 2) {
          e3++;
          c2 /= 2;
        }
        if (e3 + eBias >= eMax) {
          m = 0;
          e3 = eMax;
        } else if (e3 + eBias >= 1) {
          m = (value * c2 - 1) * Math.pow(2, mLen);
          e3 = e3 + eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e3 = 0;
        }
      }
      for (; mLen >= 8; buffer[offset + i3] = m & 255, i3 += d2, m /= 256, mLen -= 8) {
      }
      e3 = e3 << mLen | m;
      eLen += mLen;
      for (; eLen > 0; buffer[offset + i3] = e3 & 255, i3 += d2, e3 /= 256, eLen -= 8) {
      }
      buffer[offset + i3 - d2] |= s5 * 128;
    };
  }
});

// node_modules/buffer/index.js
var require_buffer = __commonJS({
  "node_modules/buffer/index.js"(exports) {
    "use strict";
    var base642 = require_base64_js();
    var ieee754 = require_ieee754();
    var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
    exports.Buffer = Buffer;
    exports.SlowBuffer = SlowBuffer;
    exports.INSPECT_MAX_BYTES = 50;
    var K_MAX_LENGTH = 2147483647;
    exports.kMaxLength = K_MAX_LENGTH;
    Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
    if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
      console.error(
        "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
      );
    }
    function typedArraySupport() {
      try {
        const arr = new Uint8Array(1);
        const proto = { foo: function() {
          return 42;
        } };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
      } catch (e3) {
        return false;
      }
    }
    Object.defineProperty(Buffer.prototype, "parent", {
      enumerable: true,
      get: function() {
        if (!Buffer.isBuffer(this)) return void 0;
        return this.buffer;
      }
    });
    Object.defineProperty(Buffer.prototype, "offset", {
      enumerable: true,
      get: function() {
        if (!Buffer.isBuffer(this)) return void 0;
        return this.byteOffset;
      }
    });
    function createBuffer(length) {
      if (length > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length + '" is invalid for option "size"');
      }
      const buf = new Uint8Array(length);
      Object.setPrototypeOf(buf, Buffer.prototype);
      return buf;
    }
    function Buffer(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        }
        return allocUnsafe(arg);
      }
      return from(arg, encodingOrOffset, length);
    }
    Buffer.poolSize = 8192;
    function from(value, encodingOrOffset, length) {
      if (typeof value === "string") {
        return fromString(value, encodingOrOffset);
      }
      if (ArrayBuffer.isView(value)) {
        return fromArrayView(value);
      }
      if (value == null) {
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
        );
      }
      if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof value === "number") {
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      }
      const valueOf = value.valueOf && value.valueOf();
      if (valueOf != null && valueOf !== value) {
        return Buffer.from(valueOf, encodingOrOffset, length);
      }
      const b = fromObject(value);
      if (b) return b;
      if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
        return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
      }
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
      );
    }
    Buffer.from = function(value, encodingOrOffset, length) {
      return from(value, encodingOrOffset, length);
    };
    Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer, Uint8Array);
    function assertSize(size) {
      if (typeof size !== "number") {
        throw new TypeError('"size" argument must be of type number');
      } else if (size < 0) {
        throw new RangeError('The value "' + size + '" is invalid for option "size"');
      }
    }
    function alloc(size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(size);
      }
      if (fill !== void 0) {
        return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
      }
      return createBuffer(size);
    }
    Buffer.alloc = function(size, fill, encoding) {
      return alloc(size, fill, encoding);
    };
    function allocUnsafe(size) {
      assertSize(size);
      return createBuffer(size < 0 ? 0 : checked(size) | 0);
    }
    Buffer.allocUnsafe = function(size) {
      return allocUnsafe(size);
    };
    Buffer.allocUnsafeSlow = function(size) {
      return allocUnsafe(size);
    };
    function fromString(string, encoding) {
      if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8";
      }
      if (!Buffer.isEncoding(encoding)) {
        throw new TypeError("Unknown encoding: " + encoding);
      }
      const length = byteLength(string, encoding) | 0;
      let buf = createBuffer(length);
      const actual = buf.write(string, encoding);
      if (actual !== length) {
        buf = buf.slice(0, actual);
      }
      return buf;
    }
    function fromArrayLike(array) {
      const length = array.length < 0 ? 0 : checked(array.length) | 0;
      const buf = createBuffer(length);
      for (let i3 = 0; i3 < length; i3 += 1) {
        buf[i3] = array[i3] & 255;
      }
      return buf;
    }
    function fromArrayView(arrayView) {
      if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
      }
      return fromArrayLike(arrayView);
    }
    function fromArrayBuffer(array, byteOffset, length) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds');
      }
      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('"length" is outside of buffer bounds');
      }
      let buf;
      if (byteOffset === void 0 && length === void 0) {
        buf = new Uint8Array(array);
      } else if (length === void 0) {
        buf = new Uint8Array(array, byteOffset);
      } else {
        buf = new Uint8Array(array, byteOffset, length);
      }
      Object.setPrototypeOf(buf, Buffer.prototype);
      return buf;
    }
    function fromObject(obj) {
      if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) {
          return buf;
        }
        obj.copy(buf, 0, 0, len);
        return buf;
      }
      if (obj.length !== void 0) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
          return createBuffer(0);
        }
        return fromArrayLike(obj);
      }
      if (obj.type === "Buffer" && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
      }
    }
    function checked(length) {
      if (length >= K_MAX_LENGTH) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
      }
      return length | 0;
    }
    function SlowBuffer(length) {
      if (+length != length) {
        length = 0;
      }
      return Buffer.alloc(+length);
    }
    Buffer.isBuffer = function isBuffer(b) {
      return b != null && b._isBuffer === true && b !== Buffer.prototype;
    };
    Buffer.compare = function compare(a4, b) {
      if (isInstance(a4, Uint8Array)) a4 = Buffer.from(a4, a4.offset, a4.byteLength);
      if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
      if (!Buffer.isBuffer(a4) || !Buffer.isBuffer(b)) {
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      }
      if (a4 === b) return 0;
      let x = a4.length;
      let y = b.length;
      for (let i3 = 0, len = Math.min(x, y); i3 < len; ++i3) {
        if (a4[i3] !== b[i3]) {
          x = a4[i3];
          y = b[i3];
          break;
        }
      }
      if (x < y) return -1;
      if (y < x) return 1;
      return 0;
    };
    Buffer.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    Buffer.concat = function concat2(list, length) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer.alloc(0);
      }
      let i3;
      if (length === void 0) {
        length = 0;
        for (i3 = 0; i3 < list.length; ++i3) {
          length += list[i3].length;
        }
      }
      const buffer = Buffer.allocUnsafe(length);
      let pos = 0;
      for (i3 = 0; i3 < list.length; ++i3) {
        let buf = list[i3];
        if (isInstance(buf, Uint8Array)) {
          if (pos + buf.length > buffer.length) {
            if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
            buf.copy(buffer, pos);
          } else {
            Uint8Array.prototype.set.call(
              buffer,
              buf,
              pos
            );
          }
        } else if (!Buffer.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        } else {
          buf.copy(buffer, pos);
        }
        pos += buf.length;
      }
      return buffer;
    };
    function byteLength(string, encoding) {
      if (Buffer.isBuffer(string)) {
        return string.length;
      }
      if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
        return string.byteLength;
      }
      if (typeof string !== "string") {
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string
        );
      }
      const len = string.length;
      const mustMatch = arguments.length > 2 && arguments[2] === true;
      if (!mustMatch && len === 0) return 0;
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "ascii":
          case "latin1":
          case "binary":
            return len;
          case "utf8":
          case "utf-8":
            return utf8ToBytes2(string).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return len * 2;
          case "hex":
            return len >>> 1;
          case "base64":
            return base64ToBytes(string).length;
          default:
            if (loweredCase) {
              return mustMatch ? -1 : utf8ToBytes2(string).length;
            }
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer.byteLength = byteLength;
    function slowToString(encoding, start, end) {
      let loweredCase = false;
      if (start === void 0 || start < 0) {
        start = 0;
      }
      if (start > this.length) {
        return "";
      }
      if (end === void 0 || end > this.length) {
        end = this.length;
      }
      if (end <= 0) {
        return "";
      }
      end >>>= 0;
      start >>>= 0;
      if (end <= start) {
        return "";
      }
      if (!encoding) encoding = "utf8";
      while (true) {
        switch (encoding) {
          case "hex":
            return hexSlice(this, start, end);
          case "utf8":
          case "utf-8":
            return utf8Slice(this, start, end);
          case "ascii":
            return asciiSlice(this, start, end);
          case "latin1":
          case "binary":
            return latin1Slice(this, start, end);
          case "base64":
            return base64Slice(this, start, end);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return utf16leSlice(this, start, end);
          default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer.prototype._isBuffer = true;
    function swap(b, n, m) {
      const i3 = b[n];
      b[n] = b[m];
      b[m] = i3;
    }
    Buffer.prototype.swap16 = function swap16() {
      const len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (let i3 = 0; i3 < len; i3 += 2) {
        swap(this, i3, i3 + 1);
      }
      return this;
    };
    Buffer.prototype.swap32 = function swap32() {
      const len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (let i3 = 0; i3 < len; i3 += 4) {
        swap(this, i3, i3 + 3);
        swap(this, i3 + 1, i3 + 2);
      }
      return this;
    };
    Buffer.prototype.swap64 = function swap64() {
      const len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (let i3 = 0; i3 < len; i3 += 8) {
        swap(this, i3, i3 + 7);
        swap(this, i3 + 1, i3 + 6);
        swap(this, i3 + 2, i3 + 5);
        swap(this, i3 + 3, i3 + 4);
      }
      return this;
    };
    Buffer.prototype.toString = function toString() {
      const length = this.length;
      if (length === 0) return "";
      if (arguments.length === 0) return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    };
    Buffer.prototype.toLocaleString = Buffer.prototype.toString;
    Buffer.prototype.equals = function equals(b) {
      if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
      if (this === b) return true;
      return Buffer.compare(this, b) === 0;
    };
    Buffer.prototype.inspect = function inspect() {
      let str = "";
      const max2 = exports.INSPECT_MAX_BYTES;
      str = this.toString("hex", 0, max2).replace(/(.{2})/g, "$1 ").trim();
      if (this.length > max2) str += " ... ";
      return "<Buffer " + str + ">";
    };
    if (customInspectSymbol) {
      Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
    }
    Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer.from(target, target.offset, target.byteLength);
      }
      if (!Buffer.isBuffer(target)) {
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target
        );
      }
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target) return 0;
      let x = thisEnd - thisStart;
      let y = end - start;
      const len = Math.min(x, y);
      const thisCopy = this.slice(thisStart, thisEnd);
      const targetCopy = target.slice(start, end);
      for (let i3 = 0; i3 < len; ++i3) {
        if (thisCopy[i3] !== targetCopy[i3]) {
          x = thisCopy[i3];
          y = targetCopy[i3];
          break;
        }
      }
      if (x < y) return -1;
      if (y < x) return 1;
      return 0;
    };
    function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
      if (buffer.length === 0) return -1;
      if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 2147483647) {
        byteOffset = 2147483647;
      } else if (byteOffset < -2147483648) {
        byteOffset = -2147483648;
      }
      byteOffset = +byteOffset;
      if (numberIsNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer.length - 1;
      }
      if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
      if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
      } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
      }
      if (typeof val === "string") {
        val = Buffer.from(val, encoding);
      }
      if (Buffer.isBuffer(val)) {
        if (val.length === 0) {
          return -1;
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
      } else if (typeof val === "number") {
        val = val & 255;
        if (typeof Uint8Array.prototype.indexOf === "function") {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
          }
        }
        return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      let indexSize = 1;
      let arrLength = arr.length;
      let valLength = val.length;
      if (encoding !== void 0) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }
      function read(buf, i4) {
        if (indexSize === 1) {
          return buf[i4];
        } else {
          return buf.readUInt16BE(i4 * indexSize);
        }
      }
      let i3;
      if (dir) {
        let foundIndex = -1;
        for (i3 = byteOffset; i3 < arrLength; i3++) {
          if (read(arr, i3) === read(val, foundIndex === -1 ? 0 : i3 - foundIndex)) {
            if (foundIndex === -1) foundIndex = i3;
            if (i3 - foundIndex + 1 === valLength) return foundIndex * indexSize;
          } else {
            if (foundIndex !== -1) i3 -= i3 - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for (i3 = byteOffset; i3 >= 0; i3--) {
          let found = true;
          for (let j = 0; j < valLength; j++) {
            if (read(arr, i3 + j) !== read(val, j)) {
              found = false;
              break;
            }
          }
          if (found) return i3;
        }
      }
      return -1;
    }
    Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };
    function hexWrite(buf, string, offset, length) {
      offset = Number(offset) || 0;
      const remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }
      const strLen = string.length;
      if (length > strLen / 2) {
        length = strLen / 2;
      }
      let i3;
      for (i3 = 0; i3 < length; ++i3) {
        const parsed = parseInt(string.substr(i3 * 2, 2), 16);
        if (numberIsNaN(parsed)) return i3;
        buf[offset + i3] = parsed;
      }
      return i3;
    }
    function utf8Write(buf, string, offset, length) {
      return blitBuffer(utf8ToBytes2(string, buf.length - offset), buf, offset, length);
    }
    function asciiWrite(buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length);
    }
    function base64Write(buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length);
    }
    function ucs2Write(buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
    }
    Buffer.prototype.write = function write(string, offset, length, encoding) {
      if (offset === void 0) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
      } else if (length === void 0 && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
          length = length >>> 0;
          if (encoding === void 0) encoding = "utf8";
        } else {
          encoding = length;
          length = void 0;
        }
      } else {
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      }
      const remaining = this.length - offset;
      if (length === void 0 || length > remaining) length = remaining;
      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding) encoding = "utf8";
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "hex":
            return hexWrite(this, string, offset, length);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string, offset, length);
          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, string, offset, length);
          case "base64":
            return base64Write(this, string, offset, length);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string, offset, length);
          default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };
    Buffer.prototype.toJSON = function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base642.fromByteArray(buf);
      } else {
        return base642.fromByteArray(buf.slice(start, end));
      }
    }
    function utf8Slice(buf, start, end) {
      end = Math.min(buf.length, end);
      const res = [];
      let i3 = start;
      while (i3 < end) {
        const firstByte = buf[i3];
        let codePoint = null;
        let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i3 + bytesPerSequence <= end) {
          let secondByte, thirdByte, fourthByte, tempCodePoint;
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 128) {
                codePoint = firstByte;
              }
              break;
            case 2:
              secondByte = buf[i3 + 1];
              if ((secondByte & 192) === 128) {
                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                if (tempCodePoint > 127) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 3:
              secondByte = buf[i3 + 1];
              thirdByte = buf[i3 + 2];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 4:
              secondByte = buf[i3 + 1];
              thirdByte = buf[i3 + 2];
              fourthByte = buf[i3 + 3];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }
        if (codePoint === null) {
          codePoint = 65533;
          bytesPerSequence = 1;
        } else if (codePoint > 65535) {
          codePoint -= 65536;
          res.push(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i3 += bytesPerSequence;
      }
      return decodeCodePointsArray(res);
    }
    var MAX_ARGUMENTS_LENGTH = 4096;
    function decodeCodePointsArray(codePoints) {
      const len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
      }
      let res = "";
      let i3 = 0;
      while (i3 < len) {
        res += String.fromCharCode.apply(
          String,
          codePoints.slice(i3, i3 += MAX_ARGUMENTS_LENGTH)
        );
      }
      return res;
    }
    function asciiSlice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i3 = start; i3 < end; ++i3) {
        ret += String.fromCharCode(buf[i3] & 127);
      }
      return ret;
    }
    function latin1Slice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i3 = start; i3 < end; ++i3) {
        ret += String.fromCharCode(buf[i3]);
      }
      return ret;
    }
    function hexSlice(buf, start, end) {
      const len = buf.length;
      if (!start || start < 0) start = 0;
      if (!end || end < 0 || end > len) end = len;
      let out = "";
      for (let i3 = start; i3 < end; ++i3) {
        out += hexSliceLookupTable[buf[i3]];
      }
      return out;
    }
    function utf16leSlice(buf, start, end) {
      const bytes = buf.slice(start, end);
      let res = "";
      for (let i3 = 0; i3 < bytes.length - 1; i3 += 2) {
        res += String.fromCharCode(bytes[i3] + bytes[i3 + 1] * 256);
      }
      return res;
    }
    Buffer.prototype.slice = function slice2(start, end) {
      const len = this.length;
      start = ~~start;
      end = end === void 0 ? len : ~~end;
      if (start < 0) {
        start += len;
        if (start < 0) start = 0;
      } else if (start > len) {
        start = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0) end = 0;
      } else if (end > len) {
        end = len;
      }
      if (end < start) end = start;
      const newBuf = this.subarray(start, end);
      Object.setPrototypeOf(newBuf, Buffer.prototype);
      return newBuf;
    };
    function checkOffset(offset, ext, length) {
      if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
      if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
    }
    Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i3 = 0;
      while (++i3 < byteLength2 && (mul *= 256)) {
        val += this[offset + i3] * mul;
      }
      return val;
    };
    Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }
      let val = this[offset + --byteLength2];
      let mul = 1;
      while (byteLength2 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength2] * mul;
      }
      return val;
    };
    Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 1, this.length);
      return this[offset];
    };
    Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };
    Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };
    Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
      const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
      return BigInt(lo) + (BigInt(hi) << BigInt(32));
    });
    Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
      return (BigInt(hi) << BigInt(32)) + BigInt(lo);
    });
    Buffer.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i3 = 0;
      while (++i3 < byteLength2 && (mul *= 256)) {
        val += this[offset + i3] * mul;
      }
      mul *= 128;
      if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      let i3 = byteLength2;
      let mul = 1;
      let val = this[offset + --i3];
      while (i3 > 0 && (mul *= 256)) {
        val += this[offset + --i3] * mul;
      }
      mul *= 128;
      if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128)) return this[offset];
      return (255 - this[offset] + 1) * -1;
    };
    Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      const val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      const val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
      return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
    });
    Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = (first << 24) + // Overflow
      this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
    });
    Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, true, 23, 4);
    };
    Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, false, 23, 4);
    };
    Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, true, 52, 8);
    };
    Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, false, 52, 8);
    };
    function checkInt(buf, value, offset, ext, max2, min) {
      if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value > max2 || value < min) throw new RangeError('"value" argument is out of bounds');
      if (offset + ext > buf.length) throw new RangeError("Index out of range");
    }
    Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let mul = 1;
      let i3 = 0;
      this[offset] = value & 255;
      while (++i3 < byteLength2 && (mul *= 256)) {
        this[offset + i3] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let i3 = byteLength2 - 1;
      let mul = 1;
      this[offset + i3] = value & 255;
      while (--i3 >= 0 && (mul *= 256)) {
        this[offset + i3] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset + 3] = value >>> 24;
      this[offset + 2] = value >>> 16;
      this[offset + 1] = value >>> 8;
      this[offset] = value & 255;
      return offset + 4;
    };
    Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    function wrtBigUInt64LE(buf, value, offset, min, max2) {
      checkIntBI(value, min, max2, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      return offset;
    }
    function wrtBigUInt64BE(buf, value, offset, min, max2) {
      checkIntBI(value, min, max2, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset + 7] = lo;
      lo = lo >> 8;
      buf[offset + 6] = lo;
      lo = lo >> 8;
      buf[offset + 5] = lo;
      lo = lo >> 8;
      buf[offset + 4] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset + 3] = hi;
      hi = hi >> 8;
      buf[offset + 2] = hi;
      hi = hi >> 8;
      buf[offset + 1] = hi;
      hi = hi >> 8;
      buf[offset] = hi;
      return offset + 8;
    }
    Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i3 = 0;
      let mul = 1;
      let sub = 0;
      this[offset] = value & 255;
      while (++i3 < byteLength2 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i3 - 1] !== 0) {
          sub = 1;
        }
        this[offset + i3] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i3 = byteLength2 - 1;
      let mul = 1;
      let sub = 0;
      this[offset + i3] = value & 255;
      while (--i3 >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i3 + 1] !== 0) {
          sub = 1;
        }
        this[offset + i3] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
      if (value < 0) value = 255 + value + 1;
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      this[offset + 2] = value >>> 16;
      this[offset + 3] = value >>> 24;
      return offset + 4;
    };
    Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (value < 0) value = 4294967295 + value + 1;
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function checkIEEE754(buf, value, offset, ext, max2, min) {
      if (offset + ext > buf.length) throw new RangeError("Index out of range");
      if (offset < 0) throw new RangeError("Index out of range");
    }
    function writeFloat(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
      }
      ieee754.write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4;
    }
    Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    };
    Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    };
    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
      }
      ieee754.write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8;
    }
    Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    };
    Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    };
    Buffer.prototype.copy = function copy(target, targetStart, start, end) {
      if (!Buffer.isBuffer(target)) throw new TypeError("argument should be a Buffer");
      if (!start) start = 0;
      if (!end && end !== 0) end = this.length;
      if (targetStart >= target.length) targetStart = target.length;
      if (!targetStart) targetStart = 0;
      if (end > 0 && end < start) end = start;
      if (end === start) return 0;
      if (target.length === 0 || this.length === 0) return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
      if (end < 0) throw new RangeError("sourceEnd out of bounds");
      if (end > this.length) end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      const len = end - start;
      if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
        this.copyWithin(targetStart, start, end);
      } else {
        Uint8Array.prototype.set.call(
          target,
          this.subarray(start, end),
          targetStart
        );
      }
      return len;
    };
    Buffer.prototype.fill = function fill(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        if (val.length === 1) {
          const code = val.charCodeAt(0);
          if (encoding === "utf8" && code < 128 || encoding === "latin1") {
            val = code;
          }
        }
      } else if (typeof val === "number") {
        val = val & 255;
      } else if (typeof val === "boolean") {
        val = Number(val);
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val) val = 0;
      let i3;
      if (typeof val === "number") {
        for (i3 = start; i3 < end; ++i3) {
          this[i3] = val;
        }
      } else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) {
          throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        }
        for (i3 = 0; i3 < end - start; ++i3) {
          this[i3 + start] = bytes[i3 % len];
        }
      }
      return this;
    };
    var errors = {};
    function E(sym, getMessage, Base) {
      errors[sym] = class NodeError extends Base {
        constructor() {
          super();
          Object.defineProperty(this, "message", {
            value: getMessage.apply(this, arguments),
            writable: true,
            configurable: true
          });
          this.name = `${this.name} [${sym}]`;
          this.stack;
          delete this.name;
        }
        get code() {
          return sym;
        }
        set code(value) {
          Object.defineProperty(this, "code", {
            configurable: true,
            enumerable: true,
            value,
            writable: true
          });
        }
        toString() {
          return `${this.name} [${sym}]: ${this.message}`;
        }
      };
    }
    E(
      "ERR_BUFFER_OUT_OF_BOUNDS",
      function(name) {
        if (name) {
          return `${name} is outside of buffer bounds`;
        }
        return "Attempt to access memory outside buffer bounds";
      },
      RangeError
    );
    E(
      "ERR_INVALID_ARG_TYPE",
      function(name, actual) {
        return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
      },
      TypeError
    );
    E(
      "ERR_OUT_OF_RANGE",
      function(str, range, input) {
        let msg = `The value of "${str}" is out of range.`;
        let received = input;
        if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
          received = addNumericalSeparator(String(input));
        } else if (typeof input === "bigint") {
          received = String(input);
          if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
            received = addNumericalSeparator(received);
          }
          received += "n";
        }
        msg += ` It must be ${range}. Received ${received}`;
        return msg;
      },
      RangeError
    );
    function addNumericalSeparator(val) {
      let res = "";
      let i3 = val.length;
      const start = val[0] === "-" ? 1 : 0;
      for (; i3 >= start + 4; i3 -= 3) {
        res = `_${val.slice(i3 - 3, i3)}${res}`;
      }
      return `${val.slice(0, i3)}${res}`;
    }
    function checkBounds(buf, offset, byteLength2) {
      validateNumber(offset, "offset");
      if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
        boundsError(offset, buf.length - (byteLength2 + 1));
      }
    }
    function checkIntBI(value, min, max2, buf, offset, byteLength2) {
      if (value > max2 || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength2 > 3) {
          if (min === 0 || min === BigInt(0)) {
            range = `>= 0${n} and < 2${n} ** ${(byteLength2 + 1) * 8}${n}`;
          } else {
            range = `>= -(2${n} ** ${(byteLength2 + 1) * 8 - 1}${n}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n}`;
          }
        } else {
          range = `>= ${min}${n} and <= ${max2}${n}`;
        }
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
      }
      checkBounds(buf, offset, byteLength2);
    }
    function validateNumber(value, name) {
      if (typeof value !== "number") {
        throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
      }
    }
    function boundsError(value, length, type) {
      if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
      }
      if (length < 0) {
        throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
      }
      throw new errors.ERR_OUT_OF_RANGE(
        type || "offset",
        `>= ${type ? 1 : 0} and <= ${length}`,
        value
      );
    }
    var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
    function base64clean(str) {
      str = str.split("=")[0];
      str = str.trim().replace(INVALID_BASE64_RE, "");
      if (str.length < 2) return "";
      while (str.length % 4 !== 0) {
        str = str + "=";
      }
      return str;
    }
    function utf8ToBytes2(string, units) {
      units = units || Infinity;
      let codePoint;
      const length = string.length;
      let leadSurrogate = null;
      const bytes = [];
      for (let i3 = 0; i3 < length; ++i3) {
        codePoint = string.charCodeAt(i3);
        if (codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              continue;
            } else if (i3 + 1 === length) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              continue;
            }
            leadSurrogate = codePoint;
            continue;
          }
          if (codePoint < 56320) {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
            leadSurrogate = codePoint;
            continue;
          }
          codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
          if ((units -= 3) > -1) bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
          if ((units -= 1) < 0) break;
          bytes.push(codePoint);
        } else if (codePoint < 2048) {
          if ((units -= 2) < 0) break;
          bytes.push(
            codePoint >> 6 | 192,
            codePoint & 63 | 128
          );
        } else if (codePoint < 65536) {
          if ((units -= 3) < 0) break;
          bytes.push(
            codePoint >> 12 | 224,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else if (codePoint < 1114112) {
          if ((units -= 4) < 0) break;
          bytes.push(
            codePoint >> 18 | 240,
            codePoint >> 12 & 63 | 128,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else {
          throw new Error("Invalid code point");
        }
      }
      return bytes;
    }
    function asciiToBytes(str) {
      const byteArray = [];
      for (let i3 = 0; i3 < str.length; ++i3) {
        byteArray.push(str.charCodeAt(i3) & 255);
      }
      return byteArray;
    }
    function utf16leToBytes(str, units) {
      let c2, hi, lo;
      const byteArray = [];
      for (let i3 = 0; i3 < str.length; ++i3) {
        if ((units -= 2) < 0) break;
        c2 = str.charCodeAt(i3);
        hi = c2 >> 8;
        lo = c2 % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }
      return byteArray;
    }
    function base64ToBytes(str) {
      return base642.toByteArray(base64clean(str));
    }
    function blitBuffer(src, dst, offset, length) {
      let i3;
      for (i3 = 0; i3 < length; ++i3) {
        if (i3 + offset >= dst.length || i3 >= src.length) break;
        dst[i3 + offset] = src[i3];
      }
      return i3;
    }
    function isInstance(obj, type) {
      return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
    }
    function numberIsNaN(obj) {
      return obj !== obj;
    }
    var hexSliceLookupTable = function() {
      const alphabet2 = "0123456789abcdef";
      const table = new Array(256);
      for (let i3 = 0; i3 < 16; ++i3) {
        const i16 = i3 * 16;
        for (let j = 0; j < 16; ++j) {
          table[i16 + j] = alphabet2[i3] + alphabet2[j];
        }
      }
      return table;
    }();
    function defineBigIntMethod(fn) {
      return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
    }
    function BufferBigIntNotDefined() {
      throw new Error("BigInt not supported");
    }
  }
});

// node_modules/@abstract-foundation/agw-client/dist/esm/abis/AccountFactory.js
var AccountFactoryAbi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_implementation",
        type: "address"
      },
      {
        internalType: "bytes4",
        name: "_initializerSelector",
        type: "bytes4"
      },
      {
        internalType: "address",
        name: "_registry",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "_proxyBytecodeHash",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "_deployer",
        type: "address"
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "ALREADY_CREATED",
    type: "error"
  },
  {
    inputs: [],
    name: "DEPLOYMENT_FAILED",
    type: "error"
  },
  {
    inputs: [],
    name: "INVALID_INITIALIZER",
    type: "error"
  },
  {
    inputs: [],
    name: "NOT_FROM_DEPLOYER",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "OwnableInvalidOwner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "accountAddress",
        type: "address"
      }
    ],
    name: "AGWAccountCreated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "accountAddress",
        type: "address"
      }
    ],
    name: "AGWAccountDeployed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "deployer",
        type: "address"
      },
      {
        indexed: true,
        internalType: "bool",
        name: "authorized",
        type: "bool"
      }
    ],
    name: "DeployerAuthorized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newImplementation",
        type: "address"
      }
    ],
    name: "ImplementationChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferStarted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newRegistry",
        type: "address"
      }
    ],
    name: "RegistryChanged",
    type: "event"
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "accountToDeployer",
    outputs: [
      {
        internalType: "address",
        name: "deployer",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "accountAddress",
        type: "address"
      }
    ],
    name: "agwAccountCreated",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "deployer",
        type: "address"
      }
    ],
    name: "authorizedDeployers",
    outputs: [
      {
        internalType: "bool",
        name: "authorized",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address"
      },
      {
        internalType: "bytes4",
        name: "newInitializerSelector",
        type: "bytes4"
      }
    ],
    name: "changeImplementation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newRegistry",
        type: "address"
      }
    ],
    name: "changeRegistry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32"
      },
      {
        internalType: "bytes",
        name: "initializer",
        type: "bytes"
      }
    ],
    name: "deployAccount",
    outputs: [
      {
        internalType: "address",
        name: "accountAddress",
        type: "address"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32"
      }
    ],
    name: "getAddressForSalt",
    outputs: [
      {
        internalType: "address",
        name: "accountAddress",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "_implementation",
        type: "address"
      }
    ],
    name: "getAddressForSaltAndImplementation",
    outputs: [
      {
        internalType: "address",
        name: "accountAddress",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "implementationAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "initializerSelector",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "proxyBytecodeHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "registry",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32"
      }
    ],
    name: "saltToAccount",
    outputs: [
      {
        internalType: "address",
        name: "accountAddress",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "deployer",
        type: "address"
      },
      {
        internalType: "bool",
        name: "authorized",
        type: "bool"
      }
    ],
    name: "setDeployer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var AccountFactory_default = AccountFactoryAbi;

// node_modules/@abstract-foundation/agw-client/dist/esm/constants.js
var SMART_ACCOUNT_FACTORY_ADDRESS = "0x9B947df68D35281C972511B3E7BC875926f26C1A";
var EOA_VALIDATOR_ADDRESS = "0x74b9ae28EC45E3FA11533c7954752597C3De3e7A";
var SESSION_KEY_VALIDATOR_ADDRESS = "0x34ca1501FAE231cC2ebc995CE013Dbe882d7d081";
var CONTRACT_DEPLOYER_ADDRESS = "0x0000000000000000000000000000000000008006";
var ADD_MODULE_SELECTOR = "0xd3bdf4b5";
var CREATE_SESSION_SELECTOR = "0x5a0694d2";
var BATCH_CALL_SELECTOR = "0x8f0273a9";
var INSUFFICIENT_BALANCE_SELECTOR = "0xe7931438";
var CANONICAL_EXCLUSIVE_DELEGATE_RESOLVER_ADDRESS = "0x0000000078CC4Cc1C14E27c0fa35ED6E5E58825D";
var AGW_LINK_DELEGATION_RIGHTS = "0xc10dcfe266c1f71ef476efbd3223555750dc271e4115626b";
var NON_EXPIRING_DELEGATION_RIGHTS = `${AGW_LINK_DELEGATION_RIGHTS}000000ffffffffff`;
var BRIDGEHUB_ADDRESS = {
  [abstractTestnet.id]: "0x35A54c8C757806eB6820629bc82d90E056394C92",
  [abstract.id]: "0x303a465b659cbb0ab36ee643ea362c509eeb5213"
};
var SESSION_KEY_POLICY_REGISTRY_ADDRESS = "0xfD20b9d7A406e2C4f5D6Df71ABE3Ee48B2EccC9F";

// node_modules/viem/_esm/zksync/constants/address.js
var addressModulo = 2n ** 160n;

// node_modules/viem/_esm/zksync/constants/abis.js
var contractDeployerAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "accountAddress",
        type: "address"
      },
      {
        indexed: false,
        internalType: "enum IContractDeployer.AccountNonceOrdering",
        name: "nonceOrdering",
        type: "uint8"
      }
    ],
    name: "AccountNonceOrderingUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "accountAddress",
        type: "address"
      },
      {
        indexed: false,
        internalType: "enum IContractDeployer.AccountAbstractionVersion",
        name: "aaVersion",
        type: "uint8"
      }
    ],
    name: "AccountVersionUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "deployerAddress",
        type: "address"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "bytecodeHash",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "contractAddress",
        type: "address"
      }
    ],
    name: "ContractDeployed",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_salt",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "_bytecodeHash",
        type: "bytes32"
      },
      {
        internalType: "bytes",
        name: "_input",
        type: "bytes"
      }
    ],
    name: "create",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_salt",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "_bytecodeHash",
        type: "bytes32"
      },
      {
        internalType: "bytes",
        name: "_input",
        type: "bytes"
      }
    ],
    name: "create2",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_salt",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "_bytecodeHash",
        type: "bytes32"
      },
      {
        internalType: "bytes",
        name: "_input",
        type: "bytes"
      },
      {
        internalType: "enum IContractDeployer.AccountAbstractionVersion",
        name: "_aaVersion",
        type: "uint8"
      }
    ],
    name: "create2Account",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "_bytecodeHash",
        type: "bytes32"
      },
      {
        internalType: "bytes",
        name: "_input",
        type: "bytes"
      },
      {
        internalType: "enum IContractDeployer.AccountAbstractionVersion",
        name: "_aaVersion",
        type: "uint8"
      }
    ],
    name: "createAccount",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address"
      }
    ],
    name: "extendedAccountVersion",
    outputs: [
      {
        internalType: "enum IContractDeployer.AccountAbstractionVersion",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_keccak256BytecodeHash",
        type: "bytes32"
      }
    ],
    name: "forceDeployKeccak256",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "bytecodeHash",
            type: "bytes32"
          },
          {
            internalType: "address",
            name: "newAddress",
            type: "address"
          },
          {
            internalType: "bool",
            name: "callConstructor",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256"
          },
          {
            internalType: "bytes",
            name: "input",
            type: "bytes"
          }
        ],
        internalType: "struct ContractDeployer.ForceDeployment",
        name: "_deployment",
        type: "tuple"
      },
      {
        internalType: "address",
        name: "_sender",
        type: "address"
      }
    ],
    name: "forceDeployOnAddress",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "bytecodeHash",
            type: "bytes32"
          },
          {
            internalType: "address",
            name: "newAddress",
            type: "address"
          },
          {
            internalType: "bool",
            name: "callConstructor",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256"
          },
          {
            internalType: "bytes",
            name: "input",
            type: "bytes"
          }
        ],
        internalType: "struct ContractDeployer.ForceDeployment[]",
        name: "_deployments",
        type: "tuple[]"
      }
    ],
    name: "forceDeployOnAddresses",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address"
      }
    ],
    name: "getAccountInfo",
    outputs: [
      {
        components: [
          {
            internalType: "enum IContractDeployer.AccountAbstractionVersion",
            name: "supportedAAVersion",
            type: "uint8"
          },
          {
            internalType: "enum IContractDeployer.AccountNonceOrdering",
            name: "nonceOrdering",
            type: "uint8"
          }
        ],
        internalType: "struct IContractDeployer.AccountInfo",
        name: "info",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_senderNonce",
        type: "uint256"
      }
    ],
    name: "getNewAddressCreate",
    outputs: [
      {
        internalType: "address",
        name: "newAddress",
        type: "address"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "_bytecodeHash",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "_salt",
        type: "bytes32"
      },
      {
        internalType: "bytes",
        name: "_input",
        type: "bytes"
      }
    ],
    name: "getNewAddressCreate2",
    outputs: [
      {
        internalType: "address",
        name: "newAddress",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "enum IContractDeployer.AccountAbstractionVersion",
        name: "_version",
        type: "uint8"
      }
    ],
    name: "updateAccountVersion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "enum IContractDeployer.AccountNonceOrdering",
        name: "_nonceOrdering",
        type: "uint8"
      }
    ],
    name: "updateNonceOrdering",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

// node_modules/viem/_esm/zksync/constants/contract.js
var accountAbstractionVersion1 = 1;

// node_modules/viem/_esm/zksync/utils/abi/encodeDeployData.js
var docsPath = "/docs/contract/encodeDeployData";
function encodeDeployData(parameters) {
  const { abi, args, bytecode, deploymentType, salt } = parameters;
  if (!args || args.length === 0) {
    const { functionName: functionName2, argsContractDeployer: argsContractDeployer2 } = getDeploymentDetails(deploymentType, salt ?? zeroHash, toHex(hashBytecode(bytecode)), "0x");
    return encodeFunctionData({
      abi: contractDeployerAbi,
      functionName: functionName2,
      args: argsContractDeployer2
    });
  }
  const description = abi.find((x) => "type" in x && x.type === "constructor");
  if (!description)
    throw new AbiConstructorNotFoundError({ docsPath });
  if (!("inputs" in description))
    throw new AbiConstructorParamsNotFoundError({ docsPath });
  if (!description.inputs || description.inputs.length === 0)
    throw new AbiConstructorParamsNotFoundError({ docsPath });
  const data = encodeAbiParameters(description.inputs, args);
  const { functionName, argsContractDeployer } = getDeploymentDetails(deploymentType, salt ?? zeroHash, toHex(hashBytecode(bytecode)), data);
  return encodeFunctionData({
    abi: contractDeployerAbi,
    functionName,
    args: argsContractDeployer
  });
}
function getDeploymentDetails(deploymentType, salt, bytecodeHash, data) {
  const contractDeploymentArgs = [salt, bytecodeHash, data];
  const deploymentOptions = {
    create: {
      functionName: "create",
      argsContractDeployer: contractDeploymentArgs
    },
    create2: {
      functionName: "create2",
      argsContractDeployer: contractDeploymentArgs
    },
    createAccount: {
      functionName: "createAccount",
      argsContractDeployer: [
        ...contractDeploymentArgs,
        accountAbstractionVersion1
      ]
    },
    create2Account: {
      functionName: "create2Account",
      argsContractDeployer: [
        ...contractDeploymentArgs,
        accountAbstractionVersion1
      ]
    }
  };
  const deploymentKey = deploymentType || "create";
  return deploymentOptions[deploymentKey];
}

// node_modules/@abstract-foundation/agw-client/dist/esm/errors/eip712.js
var InvalidEip712TransactionError2 = class extends BaseError {
  constructor() {
    super([
      "Transaction is not an EIP712 transaction.",
      "",
      "Transaction must:",
      '  - include `type: "eip712"`',
      "  - include one of the following: `customSignature`, `paymaster`, `paymasterInput`, `gasPerPubdata`, `factoryDeps`"
    ].join("\n"), { name: "InvalidEip712TransactionError" });
  }
};

// node_modules/@abstract-foundation/agw-client/dist/esm/eip712.js
function isEIP712Transaction2(transaction) {
  if (transaction.type === "eip712")
    return true;
  if ("customSignature" in transaction && transaction.customSignature || "paymaster" in transaction && transaction.paymaster || "paymasterInput" in transaction && transaction.paymasterInput || "gasPerPubdata" in transaction && typeof transaction.gasPerPubdata === "bigint" || "factoryDeps" in transaction && transaction.factoryDeps)
    return true;
  return false;
}
function assertEip712Request2(args) {
  if (!isEIP712Transaction2(args))
    throw new InvalidEip712TransactionError2();
  assertRequest(args);
}

// node_modules/@abstract-foundation/agw-client/dist/esm/utils.js
var VALID_CHAINS = {
  [abstractTestnet.id]: abstractTestnet,
  [abstract.id]: abstract,
  [zksync.id]: zksync,
  [zksyncSepoliaTestnet.id]: zksyncSepoliaTestnet
};
async function getSmartAccountAddressFromInitialSigner(initialSigner, publicClient) {
  if (initialSigner === void 0) {
    throw new Error("Initial signer is required to get smart account address");
  }
  const addressBytes = toBytes(initialSigner);
  const salt = keccak256(addressBytes);
  const accountAddress = await publicClient.readContract({
    address: SMART_ACCOUNT_FACTORY_ADDRESS,
    abi: AccountFactory_default,
    functionName: "getAddressForSalt",
    args: [salt]
  });
  return accountAddress;
}
async function isSmartAccountDeployed(client, address) {
  const bytecode = await getAction(client, getCode, "getCode")({
    address
  });
  return bytecode !== void 0;
}
function getInitializerCalldata(initialOwnerAddress, validatorAddress, initialCall) {
  return encodeFunctionData({
    abi: [
      {
        name: "initialize",
        type: "function",
        inputs: [
          { name: "initialK1Owner", type: "address" },
          { name: "initialK1Validator", type: "address" },
          { name: "modules", type: "bytes[]" },
          {
            name: "initCall",
            type: "tuple",
            components: [
              { name: "target", type: "address" },
              { name: "allowFailure", type: "bool" },
              { name: "value", type: "uint256" },
              { name: "callData", type: "bytes" }
            ]
          }
        ],
        outputs: [],
        stateMutability: "nonpayable"
      }
    ],
    functionName: "initialize",
    args: [initialOwnerAddress, validatorAddress, [], initialCall]
  });
}
function transformHexValues(transaction, keys) {
  if (!transaction)
    return;
  for (const key of keys) {
    if (isHex(transaction[key])) {
      transaction[key] = fromHex(transaction[key], "bigint");
    }
  }
}
function isEip712TypedData(typedData) {
  var _a2, _b2;
  return typedData.message && ((_a2 = typedData.domain) == null ? void 0 : _a2.name) === "zkSync" && ((_b2 = typedData.domain) == null ? void 0 : _b2.version) === "2" && isEIP712Transaction2(typedData.message);
}
function transformEip712TypedData(typedData) {
  var _a2;
  if (!isEip712TypedData(typedData)) {
    throw new BaseError("Typed data is not an EIP712 transaction");
  }
  if (((_a2 = typedData.domain) == null ? void 0 : _a2.chainId) === void 0) {
    throw new BaseError("Chain ID is required for EIP712 transaction");
  }
  return {
    chainId: Number(typedData.domain.chainId),
    account: parseAccount(toHex(BigInt(typedData.message["from"]), {
      size: 20
    })),
    to: toHex(BigInt(typedData.message["to"]), {
      size: 20
    }),
    gas: BigInt(typedData.message["gasLimit"]),
    gasPerPubdata: BigInt(typedData.message["gasPerPubdataByteLimit"]),
    maxFeePerGas: BigInt(typedData.message["maxFeePerGas"]),
    maxPriorityFeePerGas: BigInt(typedData.message["maxPriorityFeePerGas"]),
    paymaster: typedData.message["paymaster"] != "0" ? toHex(BigInt(typedData.message["paymaster"]), {
      size: 20
    }) : void 0,
    nonce: typedData.message["nonce"],
    value: BigInt(typedData.message["value"]),
    data: typedData.message["data"] === "0x0" ? "0x" : typedData.message["data"],
    factoryDeps: typedData.message["factoryDeps"],
    paymasterInput: typedData.message["paymasterInput"] !== "0x" ? typedData.message["paymasterInput"] : void 0
  };
}
function encodeCall(call_) {
  const call = call_;
  const data = call.abi ? encodeFunctionData({
    abi: call.abi,
    functionName: call.functionName,
    args: call.args
  }) : call.data;
  return {
    data: call.dataSuffix && data ? concat([data, call.dataSuffix]) : data,
    to: call.to,
    value: call.value
  };
}
function encodeCalls(calls) {
  return calls.map(encodeCall);
}
function formatCalls(calls) {
  return calls.map((call_) => {
    const call = encodeCall(call_);
    return {
      callData: call.data ?? "0x",
      target: call.to,
      value: call.value ?? 0n,
      allowFailure: false
    };
  });
}

// node_modules/@abstract-foundation/agw-client/dist/esm/abis/AGWAccount.js
var AGWAccountAbi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "ADDRESS_ALREADY_EXISTS",
    type: "error"
  },
  {
    inputs: [],
    name: "ADDRESS_NOT_EXISTS",
    type: "error"
  },
  {
    inputs: [],
    name: "BYTES_ALREADY_EXISTS",
    type: "error"
  },
  {
    inputs: [],
    name: "BYTES_NOT_EXISTS",
    type: "error"
  },
  {
    inputs: [],
    name: "CALL_FAILED",
    type: "error"
  },
  {
    inputs: [],
    name: "EMPTY_HOOK_ADDRESS",
    type: "error"
  },
  {
    inputs: [],
    name: "EMPTY_MODULE_ADDRESS",
    type: "error"
  },
  {
    inputs: [],
    name: "EMPTY_OWNERS",
    type: "error"
  },
  {
    inputs: [],
    name: "EMPTY_VALIDATORS",
    type: "error"
  },
  {
    inputs: [],
    name: "FEE_PAYMENT_FAILED",
    type: "error"
  },
  {
    inputs: [],
    name: "HOOK_ERC165_FAIL",
    type: "error"
  },
  {
    inputs: [],
    name: "INSUFFICIENT_FUNDS",
    type: "error"
  },
  {
    inputs: [],
    name: "INVALID_ADDRESS",
    type: "error"
  },
  {
    inputs: [],
    name: "INVALID_BYTES",
    type: "error"
  },
  {
    inputs: [],
    name: "INVALID_KEY",
    type: "error"
  },
  {
    inputs: [],
    name: "INVALID_PUBKEY_LENGTH",
    type: "error"
  },
  {
    inputs: [],
    name: "INVALID_SALT",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error"
  },
  {
    inputs: [],
    name: "MODULE_ERC165_FAIL",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "actualValue",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "expectedValue",
        type: "uint256"
      }
    ],
    name: "MsgValueMismatch",
    type: "error"
  },
  {
    inputs: [],
    name: "NOT_FROM_BOOTLOADER",
    type: "error"
  },
  {
    inputs: [],
    name: "NOT_FROM_DEPLOYER",
    type: "error"
  },
  {
    inputs: [],
    name: "NOT_FROM_HOOK",
    type: "error"
  },
  {
    inputs: [],
    name: "NOT_FROM_MODULE",
    type: "error"
  },
  {
    inputs: [],
    name: "NOT_FROM_SELF",
    type: "error"
  },
  {
    inputs: [],
    name: "NOT_FROM_SELF_OR_MODULE",
    type: "error"
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error"
  },
  {
    inputs: [],
    name: "RECUSIVE_MODULE_CALL",
    type: "error"
  },
  {
    inputs: [],
    name: "SAME_IMPLEMENTATION",
    type: "error"
  },
  {
    inputs: [],
    name: "UNAUTHORIZED_OUTSIDE_TRANSACTION",
    type: "error"
  },
  {
    inputs: [],
    name: "VALIDATION_HOOK_FAILED",
    type: "error"
  },
  {
    inputs: [],
    name: "VALIDATOR_ERC165_FAIL",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "hook",
        type: "address"
      }
    ],
    name: "AddHook",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "module",
        type: "address"
      }
    ],
    name: "AddModule",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "validator",
        type: "address"
      }
    ],
    name: "AddModuleValidator",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [],
    name: "FeePaid",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "K1AddOwner",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "validator",
        type: "address"
      }
    ],
    name: "K1AddValidator",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "K1RemoveOwner",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "validator",
        type: "address"
      }
    ],
    name: "K1RemoveValidator",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "pubKey",
        type: "bytes"
      }
    ],
    name: "R1AddOwner",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "validator",
        type: "address"
      }
    ],
    name: "R1AddValidator",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "pubKey",
        type: "bytes"
      }
    ],
    name: "R1RemoveOwner",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "validator",
        type: "address"
      }
    ],
    name: "R1RemoveValidator",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "hook",
        type: "address"
      }
    ],
    name: "RemoveHook",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "module",
        type: "address"
      }
    ],
    name: "RemoveModule",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "validator",
        type: "address"
      }
    ],
    name: "RemoveModuleValidator",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [],
    name: "ResetOwners",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldImplementation",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newImplementation",
        type: "address"
      }
    ],
    name: "Upgraded",
    type: "event"
  },
  {
    stateMutability: "payable",
    type: "fallback"
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "hookAndData",
        type: "bytes"
      },
      {
        internalType: "bool",
        name: "isValidation",
        type: "bool"
      }
    ],
    name: "addHook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "moduleAndData",
        type: "bytes"
      }
    ],
    name: "addModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "validator",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "initialAccountValidationKey",
        type: "bytes"
      }
    ],
    name: "addModuleValidator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address"
          },
          {
            internalType: "bool",
            name: "allowFailure",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256"
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes"
          }
        ],
        internalType: "struct Call[]",
        name: "_calls",
        type: "tuple[]"
      }
    ],
    name: "batchCall",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "agwMessageTypeHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address"
          },
          {
            internalType: "bool",
            name: "allowFailure",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256"
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes"
          }
        ],
        internalType: "struct Call[]",
        name: "_calls",
        type: "tuple[]"
      }
    ],
    name: "batchCall",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1"
      },
      {
        internalType: "string",
        name: "name",
        type: "string"
      },
      {
        internalType: "string",
        name: "version",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32"
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "executeFromModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "txType",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "from",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "to",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "gasLimit",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "gasPerPubdataByteLimit",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "paymaster",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256"
          },
          {
            internalType: "uint256[4]",
            name: "reserved",
            type: "uint256[4]"
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes"
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes"
          },
          {
            internalType: "bytes32[]",
            name: "factoryDeps",
            type: "bytes32[]"
          },
          {
            internalType: "bytes",
            name: "paymasterInput",
            type: "bytes"
          },
          {
            internalType: "bytes",
            name: "reservedDynamic",
            type: "bytes"
          }
        ],
        internalType: "struct Transaction",
        name: "transaction",
        type: "tuple"
      }
    ],
    name: "executeTransaction",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "txType",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "from",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "to",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "gasLimit",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "gasPerPubdataByteLimit",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "paymaster",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256"
          },
          {
            internalType: "uint256[4]",
            name: "reserved",
            type: "uint256[4]"
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes"
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes"
          },
          {
            internalType: "bytes32[]",
            name: "factoryDeps",
            type: "bytes32[]"
          },
          {
            internalType: "bytes",
            name: "paymasterInput",
            type: "bytes"
          },
          {
            internalType: "bytes",
            name: "reservedDynamic",
            type: "bytes"
          }
        ],
        internalType: "struct Transaction",
        name: "transaction",
        type: "tuple"
      }
    ],
    name: "executeTransactionFromOutside",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "signedHash",
            type: "bytes32"
          }
        ],
        internalType: "struct ERC1271Handler.AGWMessage",
        name: "agwMessage",
        type: "tuple"
      }
    ],
    name: "getEip712Hash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "hook",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32"
      }
    ],
    name: "getHookData",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "implementationAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "initialK1Owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "initialK1Validator",
        type: "address"
      },
      {
        internalType: "bytes[]",
        name: "modules",
        type: "bytes[]"
      },
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address"
          },
          {
            internalType: "bool",
            name: "allowFailure",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256"
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes"
          }
        ],
        internalType: "struct Call",
        name: "initCall",
        type: "tuple"
      }
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "isHook",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "isModule",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "validator",
        type: "address"
      }
    ],
    name: "isModuleValidator",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "signedHash",
        type: "bytes32"
      },
      {
        internalType: "bytes",
        name: "signatureAndValidator",
        type: "bytes"
      }
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bytes4",
        name: "magicValue",
        type: "bytes4"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "k1AddOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "validator",
        type: "address"
      }
    ],
    name: "k1AddValidator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "k1IsOwner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "validator",
        type: "address"
      }
    ],
    name: "k1IsValidator",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "k1ListOwners",
    outputs: [
      {
        internalType: "address[]",
        name: "k1OwnerList",
        type: "address[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "k1ListValidators",
    outputs: [
      {
        internalType: "address[]",
        name: "validatorList",
        type: "address[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "k1RemoveOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "validator",
        type: "address"
      }
    ],
    name: "k1RemoveValidator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "isValidation",
        type: "bool"
      }
    ],
    name: "listHooks",
    outputs: [
      {
        internalType: "address[]",
        name: "hookList",
        type: "address[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "listModuleValidators",
    outputs: [
      {
        internalType: "address[]",
        name: "validatorList",
        type: "address[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "listModules",
    outputs: [
      {
        internalType: "address[]",
        name: "moduleList",
        type: "address[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "txType",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "from",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "to",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "gasLimit",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "gasPerPubdataByteLimit",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "paymaster",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256"
          },
          {
            internalType: "uint256[4]",
            name: "reserved",
            type: "uint256[4]"
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes"
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes"
          },
          {
            internalType: "bytes32[]",
            name: "factoryDeps",
            type: "bytes32[]"
          },
          {
            internalType: "bytes",
            name: "paymasterInput",
            type: "bytes"
          },
          {
            internalType: "bytes",
            name: "reservedDynamic",
            type: "bytes"
          }
        ],
        internalType: "struct Transaction",
        name: "transaction",
        type: "tuple"
      }
    ],
    name: "payForTransaction",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "txType",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "from",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "to",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "gasLimit",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "gasPerPubdataByteLimit",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "paymaster",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256"
          },
          {
            internalType: "uint256[4]",
            name: "reserved",
            type: "uint256[4]"
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes"
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes"
          },
          {
            internalType: "bytes32[]",
            name: "factoryDeps",
            type: "bytes32[]"
          },
          {
            internalType: "bytes",
            name: "paymasterInput",
            type: "bytes"
          },
          {
            internalType: "bytes",
            name: "reservedDynamic",
            type: "bytes"
          }
        ],
        internalType: "struct Transaction",
        name: "transaction",
        type: "tuple"
      }
    ],
    name: "prepareForPaymaster",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "pubKey",
        type: "bytes"
      }
    ],
    name: "r1AddOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "validator",
        type: "address"
      }
    ],
    name: "r1AddValidator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "pubKey",
        type: "bytes"
      }
    ],
    name: "r1IsOwner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "validator",
        type: "address"
      }
    ],
    name: "r1IsValidator",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "r1ListOwners",
    outputs: [
      {
        internalType: "bytes[]",
        name: "r1OwnerList",
        type: "bytes[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "r1ListValidators",
    outputs: [
      {
        internalType: "address[]",
        name: "validatorList",
        type: "address[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "pubKey",
        type: "bytes"
      }
    ],
    name: "r1RemoveOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "validator",
        type: "address"
      }
    ],
    name: "r1RemoveValidator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "hook",
        type: "address"
      },
      {
        internalType: "bool",
        name: "isValidation",
        type: "bool"
      }
    ],
    name: "removeHook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "module",
        type: "address"
      }
    ],
    name: "removeModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "validator",
        type: "address"
      }
    ],
    name: "removeModuleValidator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "pubKey",
        type: "bytes"
      }
    ],
    name: "resetOwners",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "setHookData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address"
      }
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "suggestedSignedHash",
        type: "bytes32"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "txType",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "from",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "to",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "gasLimit",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "gasPerPubdataByteLimit",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "paymaster",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256"
          },
          {
            internalType: "uint256[4]",
            name: "reserved",
            type: "uint256[4]"
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes"
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes"
          },
          {
            internalType: "bytes32[]",
            name: "factoryDeps",
            type: "bytes32[]"
          },
          {
            internalType: "bytes",
            name: "paymasterInput",
            type: "bytes"
          },
          {
            internalType: "bytes",
            name: "reservedDynamic",
            type: "bytes"
          }
        ],
        internalType: "struct Transaction",
        name: "transaction",
        type: "tuple"
      }
    ],
    name: "validateTransaction",
    outputs: [
      {
        internalType: "bytes4",
        name: "magic",
        type: "bytes4"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    stateMutability: "payable",
    type: "receive"
  }
];
var AGWAccount_default = AGWAccountAbi;

// node_modules/@abstract-foundation/agw-client/dist/esm/abis/SessionKeyValidator.js
var SessionKeyValidatorAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "Disabled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "Inited",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "sessionHash",
        type: "bytes32"
      },
      {
        components: [
          {
            internalType: "address",
            name: "signer",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "expiresAt",
            type: "uint256"
          },
          {
            components: [
              {
                internalType: "enum SessionLib.LimitType",
                name: "limitType",
                type: "uint8"
              },
              {
                internalType: "uint256",
                name: "limit",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "period",
                type: "uint256"
              }
            ],
            internalType: "struct SessionLib.UsageLimit",
            name: "feeLimit",
            type: "tuple"
          },
          {
            components: [
              {
                internalType: "address",
                name: "target",
                type: "address"
              },
              {
                internalType: "bytes4",
                name: "selector",
                type: "bytes4"
              },
              {
                internalType: "uint256",
                name: "maxValuePerUse",
                type: "uint256"
              },
              {
                components: [
                  {
                    internalType: "enum SessionLib.LimitType",
                    name: "limitType",
                    type: "uint8"
                  },
                  {
                    internalType: "uint256",
                    name: "limit",
                    type: "uint256"
                  },
                  {
                    internalType: "uint256",
                    name: "period",
                    type: "uint256"
                  }
                ],
                internalType: "struct SessionLib.UsageLimit",
                name: "valueLimit",
                type: "tuple"
              },
              {
                components: [
                  {
                    internalType: "enum SessionLib.Condition",
                    name: "condition",
                    type: "uint8"
                  },
                  {
                    internalType: "uint64",
                    name: "index",
                    type: "uint64"
                  },
                  {
                    internalType: "bytes32",
                    name: "refValue",
                    type: "bytes32"
                  },
                  {
                    components: [
                      {
                        internalType: "enum SessionLib.LimitType",
                        name: "limitType",
                        type: "uint8"
                      },
                      {
                        internalType: "uint256",
                        name: "limit",
                        type: "uint256"
                      },
                      {
                        internalType: "uint256",
                        name: "period",
                        type: "uint256"
                      }
                    ],
                    internalType: "struct SessionLib.UsageLimit",
                    name: "limit",
                    type: "tuple"
                  }
                ],
                internalType: "struct SessionLib.Constraint[]",
                name: "constraints",
                type: "tuple[]"
              }
            ],
            internalType: "struct SessionLib.CallSpec[]",
            name: "callPolicies",
            type: "tuple[]"
          },
          {
            components: [
              {
                internalType: "address",
                name: "target",
                type: "address"
              },
              {
                internalType: "uint256",
                name: "maxValuePerUse",
                type: "uint256"
              },
              {
                components: [
                  {
                    internalType: "enum SessionLib.LimitType",
                    name: "limitType",
                    type: "uint8"
                  },
                  {
                    internalType: "uint256",
                    name: "limit",
                    type: "uint256"
                  },
                  {
                    internalType: "uint256",
                    name: "period",
                    type: "uint256"
                  }
                ],
                internalType: "struct SessionLib.UsageLimit",
                name: "valueLimit",
                type: "tuple"
              }
            ],
            internalType: "struct SessionLib.TransferSpec[]",
            name: "transferPolicies",
            type: "tuple[]"
          }
        ],
        indexed: false,
        internalType: "struct SessionLib.SessionSpec",
        name: "sessionSpec",
        type: "tuple"
      }
    ],
    name: "SessionCreated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "sessionHash",
        type: "bytes32"
      }
    ],
    name: "SessionRevoked",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "sessionData",
        type: "bytes"
      }
    ],
    name: "addValidationKey",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "signer",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "expiresAt",
            type: "uint256"
          },
          {
            components: [
              {
                internalType: "enum SessionLib.LimitType",
                name: "limitType",
                type: "uint8"
              },
              {
                internalType: "uint256",
                name: "limit",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "period",
                type: "uint256"
              }
            ],
            internalType: "struct SessionLib.UsageLimit",
            name: "feeLimit",
            type: "tuple"
          },
          {
            components: [
              {
                internalType: "address",
                name: "target",
                type: "address"
              },
              {
                internalType: "bytes4",
                name: "selector",
                type: "bytes4"
              },
              {
                internalType: "uint256",
                name: "maxValuePerUse",
                type: "uint256"
              },
              {
                components: [
                  {
                    internalType: "enum SessionLib.LimitType",
                    name: "limitType",
                    type: "uint8"
                  },
                  {
                    internalType: "uint256",
                    name: "limit",
                    type: "uint256"
                  },
                  {
                    internalType: "uint256",
                    name: "period",
                    type: "uint256"
                  }
                ],
                internalType: "struct SessionLib.UsageLimit",
                name: "valueLimit",
                type: "tuple"
              },
              {
                components: [
                  {
                    internalType: "enum SessionLib.Condition",
                    name: "condition",
                    type: "uint8"
                  },
                  {
                    internalType: "uint64",
                    name: "index",
                    type: "uint64"
                  },
                  {
                    internalType: "bytes32",
                    name: "refValue",
                    type: "bytes32"
                  },
                  {
                    components: [
                      {
                        internalType: "enum SessionLib.LimitType",
                        name: "limitType",
                        type: "uint8"
                      },
                      {
                        internalType: "uint256",
                        name: "limit",
                        type: "uint256"
                      },
                      {
                        internalType: "uint256",
                        name: "period",
                        type: "uint256"
                      }
                    ],
                    internalType: "struct SessionLib.UsageLimit",
                    name: "limit",
                    type: "tuple"
                  }
                ],
                internalType: "struct SessionLib.Constraint[]",
                name: "constraints",
                type: "tuple[]"
              }
            ],
            internalType: "struct SessionLib.CallSpec[]",
            name: "callPolicies",
            type: "tuple[]"
          },
          {
            components: [
              {
                internalType: "address",
                name: "target",
                type: "address"
              },
              {
                internalType: "uint256",
                name: "maxValuePerUse",
                type: "uint256"
              },
              {
                components: [
                  {
                    internalType: "enum SessionLib.LimitType",
                    name: "limitType",
                    type: "uint8"
                  },
                  {
                    internalType: "uint256",
                    name: "limit",
                    type: "uint256"
                  },
                  {
                    internalType: "uint256",
                    name: "period",
                    type: "uint256"
                  }
                ],
                internalType: "struct SessionLib.UsageLimit",
                name: "valueLimit",
                type: "tuple"
              }
            ],
            internalType: "struct SessionLib.TransferSpec[]",
            name: "transferPolicies",
            type: "tuple[]"
          }
        ],
        internalType: "struct SessionLib.SessionSpec",
        name: "sessionSpec",
        type: "tuple"
      }
    ],
    name: "createSession",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "disable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "enum OperationType",
        name: "operationType",
        type: "uint8"
      },
      {
        internalType: "bytes32",
        name: "signedHash",
        type: "bytes32"
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes"
      }
    ],
    name: "handleValidation",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "smartAccount",
        type: "address"
      }
    ],
    name: "isInited",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "sessionHash",
        type: "bytes32"
      }
    ],
    name: "revokeKey",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "sessionHashes",
        type: "bytes32[]"
      }
    ],
    name: "revokeKeys",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        components: [
          {
            internalType: "address",
            name: "signer",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "expiresAt",
            type: "uint256"
          },
          {
            components: [
              {
                internalType: "enum SessionLib.LimitType",
                name: "limitType",
                type: "uint8"
              },
              {
                internalType: "uint256",
                name: "limit",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "period",
                type: "uint256"
              }
            ],
            internalType: "struct SessionLib.UsageLimit",
            name: "feeLimit",
            type: "tuple"
          },
          {
            components: [
              {
                internalType: "address",
                name: "target",
                type: "address"
              },
              {
                internalType: "bytes4",
                name: "selector",
                type: "bytes4"
              },
              {
                internalType: "uint256",
                name: "maxValuePerUse",
                type: "uint256"
              },
              {
                components: [
                  {
                    internalType: "enum SessionLib.LimitType",
                    name: "limitType",
                    type: "uint8"
                  },
                  {
                    internalType: "uint256",
                    name: "limit",
                    type: "uint256"
                  },
                  {
                    internalType: "uint256",
                    name: "period",
                    type: "uint256"
                  }
                ],
                internalType: "struct SessionLib.UsageLimit",
                name: "valueLimit",
                type: "tuple"
              },
              {
                components: [
                  {
                    internalType: "enum SessionLib.Condition",
                    name: "condition",
                    type: "uint8"
                  },
                  {
                    internalType: "uint64",
                    name: "index",
                    type: "uint64"
                  },
                  {
                    internalType: "bytes32",
                    name: "refValue",
                    type: "bytes32"
                  },
                  {
                    components: [
                      {
                        internalType: "enum SessionLib.LimitType",
                        name: "limitType",
                        type: "uint8"
                      },
                      {
                        internalType: "uint256",
                        name: "limit",
                        type: "uint256"
                      },
                      {
                        internalType: "uint256",
                        name: "period",
                        type: "uint256"
                      }
                    ],
                    internalType: "struct SessionLib.UsageLimit",
                    name: "limit",
                    type: "tuple"
                  }
                ],
                internalType: "struct SessionLib.Constraint[]",
                name: "constraints",
                type: "tuple[]"
              }
            ],
            internalType: "struct SessionLib.CallSpec[]",
            name: "callPolicies",
            type: "tuple[]"
          },
          {
            components: [
              {
                internalType: "address",
                name: "target",
                type: "address"
              },
              {
                internalType: "uint256",
                name: "maxValuePerUse",
                type: "uint256"
              },
              {
                components: [
                  {
                    internalType: "enum SessionLib.LimitType",
                    name: "limitType",
                    type: "uint8"
                  },
                  {
                    internalType: "uint256",
                    name: "limit",
                    type: "uint256"
                  },
                  {
                    internalType: "uint256",
                    name: "period",
                    type: "uint256"
                  }
                ],
                internalType: "struct SessionLib.UsageLimit",
                name: "valueLimit",
                type: "tuple"
              }
            ],
            internalType: "struct SessionLib.TransferSpec[]",
            name: "transferPolicies",
            type: "tuple[]"
          }
        ],
        internalType: "struct SessionLib.SessionSpec",
        name: "spec",
        type: "tuple"
      }
    ],
    name: "sessionState",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "expiresAt",
            type: "uint256"
          },
          {
            internalType: "enum SessionLib.Status",
            name: "status",
            type: "uint8"
          },
          {
            internalType: "uint256",
            name: "feesRemaining",
            type: "uint256"
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "remaining",
                type: "uint256"
              },
              {
                internalType: "address",
                name: "target",
                type: "address"
              },
              {
                internalType: "bytes4",
                name: "selector",
                type: "bytes4"
              },
              {
                internalType: "uint256",
                name: "index",
                type: "uint256"
              }
            ],
            internalType: "struct SessionLib.LimitState[]",
            name: "transferValue",
            type: "tuple[]"
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "remaining",
                type: "uint256"
              },
              {
                internalType: "address",
                name: "target",
                type: "address"
              },
              {
                internalType: "bytes4",
                name: "selector",
                type: "bytes4"
              },
              {
                internalType: "uint256",
                name: "index",
                type: "uint256"
              }
            ],
            internalType: "struct SessionLib.LimitState[]",
            name: "callValue",
            type: "tuple[]"
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "remaining",
                type: "uint256"
              },
              {
                internalType: "address",
                name: "target",
                type: "address"
              },
              {
                internalType: "bytes4",
                name: "selector",
                type: "bytes4"
              },
              {
                internalType: "uint256",
                name: "index",
                type: "uint256"
              }
            ],
            internalType: "struct SessionLib.LimitState[]",
            name: "callParams",
            type: "tuple[]"
          }
        ],
        internalType: "struct SessionLib.SessionState",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "sessionHash",
        type: "bytes32"
      }
    ],
    name: "sessionStatus",
    outputs: [
      {
        internalType: "enum SessionLib.Status",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "signedHash",
        type: "bytes32"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "txType",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "from",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "to",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "gasLimit",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "gasPerPubdataByteLimit",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "paymaster",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256"
          },
          {
            internalType: "uint256[4]",
            name: "reserved",
            type: "uint256[4]"
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes"
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes"
          },
          {
            internalType: "bytes32[]",
            name: "factoryDeps",
            type: "bytes32[]"
          },
          {
            internalType: "bytes",
            name: "paymasterInput",
            type: "bytes"
          },
          {
            internalType: "bytes",
            name: "reservedDynamic",
            type: "bytes"
          }
        ],
        internalType: "struct Transaction",
        name: "transaction",
        type: "tuple"
      },
      {
        internalType: "bytes",
        name: "hookData",
        type: "bytes"
      }
    ],
    name: "validationHook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "pure",
    type: "function"
  }
];

// node_modules/@abstract-foundation/agw-client/dist/esm/errors/account.js
var AccountNotFoundError2 = class extends BaseError {
  constructor({ docsPath: docsPath2 } = {}) {
    super([
      "Could not find an Account to execute with this Action.",
      "Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client."
    ].join("\n"), {
      docsPath: docsPath2,
      docsSlug: "account",
      name: "AccountNotFoundError"
    });
  }
};

// node_modules/@abstract-foundation/agw-client/dist/esm/sessions.js
var LimitType;
(function(LimitType2) {
  LimitType2[LimitType2["Unlimited"] = 0] = "Unlimited";
  LimitType2[LimitType2["Lifetime"] = 1] = "Lifetime";
  LimitType2[LimitType2["Allowance"] = 2] = "Allowance";
})(LimitType || (LimitType = {}));
var LimitUnlimited = {
  limitType: LimitType.Unlimited,
  limit: 0n,
  period: 0n
};
var LimitZero = {
  limitType: LimitType.Lifetime,
  limit: 0n,
  period: 0n
};
var ConstraintCondition;
(function(ConstraintCondition2) {
  ConstraintCondition2[ConstraintCondition2["Unconstrained"] = 0] = "Unconstrained";
  ConstraintCondition2[ConstraintCondition2["Equal"] = 1] = "Equal";
  ConstraintCondition2[ConstraintCondition2["Greater"] = 2] = "Greater";
  ConstraintCondition2[ConstraintCondition2["Less"] = 3] = "Less";
  ConstraintCondition2[ConstraintCondition2["GreaterEqual"] = 4] = "GreaterEqual";
  ConstraintCondition2[ConstraintCondition2["LessEqual"] = 5] = "LessEqual";
  ConstraintCondition2[ConstraintCondition2["NotEqual"] = 6] = "NotEqual";
})(ConstraintCondition || (ConstraintCondition = {}));
var SessionStatus;
(function(SessionStatus2) {
  SessionStatus2[SessionStatus2["NotInitialized"] = 0] = "NotInitialized";
  SessionStatus2[SessionStatus2["Active"] = 1] = "Active";
  SessionStatus2[SessionStatus2["Closed"] = 2] = "Closed";
  SessionStatus2[SessionStatus2["Expired"] = 3] = "Expired";
})(SessionStatus || (SessionStatus = {}));
function getSessionSpec() {
  return getAbiItem({
    abi: SessionKeyValidatorAbi,
    name: "createSession"
  }).inputs[0];
}
function encodeSession(sessionConfig) {
  return encodeAbiParameters([getSessionSpec()], [sessionConfig]);
}
function encodeSessionWithPeriodIds(sessionConfig, periods) {
  return encodeAbiParameters([getSessionSpec(), { type: "uint64[]" }], [sessionConfig, periods]);
}
var getPeriodIdsForTransaction = (args) => {
  const timestamp = args.timestamp || BigInt(Math.floor(Date.now() / 1e3));
  const target = getAddress(args.target);
  const getId = (limit) => {
    if (limit.limitType === LimitType.Allowance) {
      return timestamp / limit.period;
    }
    return 0n;
  };
  const findTransferPolicy = () => {
    return args.sessionConfig.transferPolicies.find((policy2) => policy2.target.toLowerCase() === target.toLowerCase());
  };
  const findCallPolicy = () => {
    return args.sessionConfig.callPolicies.find((policy2) => policy2.target.toLowerCase() === target.toLowerCase() && policy2.selector == args.selector);
  };
  const isContractCall = !!args.selector && args.selector.length >= 10;
  const policy = isContractCall ? findCallPolicy() : findTransferPolicy();
  if (!policy)
    throw new Error("Transaction does not fit any policy");
  const periodIds = [
    getId(args.sessionConfig.feeLimit),
    getId(policy.valueLimit),
    ...isContractCall ? policy.constraints.map((constraint) => getId(constraint.limit)) : []
  ];
  return periodIds;
};
function getSessionHash(sessionConfig) {
  return keccak256(encodeSession(sessionConfig));
}

// node_modules/@abstract-foundation/agw-client/dist/esm/actions/createSession.js
async function createSession(client, args) {
  const { account: account_ = client.account, chain: chain2 = client.chain, session, ...rest } = args;
  if (typeof account_ === "undefined")
    throw new AccountNotFoundError2({
      docsPath: "/docs/actions/wallet/sendTransaction"
    });
  const account = parseAccount(account_);
  const createSessionCall = await prepareCreateSessionCall(account, client, session);
  const transactionHash = await getAction(client, sendTransaction, "sendTransaction")({
    ...createSessionCall,
    ...rest,
    account,
    chain: chain2
  });
  return { transactionHash, session };
}
async function prepareCreateSessionCall(accountOrAddress, client, session) {
  const account = parseAccount(accountOrAddress);
  const isDeployed = await isSmartAccountDeployed(client, account.address);
  const hasModule = isDeployed ? await hasSessionModule(account, client) : false;
  if (!hasModule) {
    const encodedSession = encodeSession(session);
    return {
      to: account.address,
      value: 0n,
      data: encodeFunctionData({
        abi: AGWAccount_default,
        functionName: "addModule",
        args: [concatHex([SESSION_KEY_VALIDATOR_ADDRESS, encodedSession])]
      })
    };
  } else {
    return {
      to: SESSION_KEY_VALIDATOR_ADDRESS,
      value: 0n,
      data: encodeFunctionData({
        abi: SessionKeyValidatorAbi,
        functionName: "createSession",
        args: [session]
      })
    };
  }
}
async function hasSessionModule(account, client) {
  const validationHooks = await getAction(client, readContract, "readContract")({
    address: account.address,
    abi: AGWAccount_default,
    functionName: "listHooks",
    args: [true]
  });
  const hasSessionModule2 = validationHooks.some((hook) => hook === SESSION_KEY_VALIDATOR_ADDRESS);
  return hasSessionModule2;
}

// node_modules/@abstract-foundation/agw-client/dist/esm/errors/insufficientBalance.js
var InsufficientBalanceError = class extends BaseError {
  constructor() {
    super(["Insufficient balance for transaction."].join("\n"), {
      name: "InsufficientBalanceError"
    });
  }
};

// node_modules/@abstract-foundation/agw-client/dist/esm/replaceBigInts.js
var replaceBigInts = (obj, replacer) => {
  if (typeof obj === "bigint")
    return replacer(obj);
  if (Array.isArray(obj))
    return obj.map((x) => replaceBigInts(x, replacer));
  if (obj && typeof obj === "object")
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, replaceBigInts(v, replacer)]));
  return obj;
};

// node_modules/@abstract-foundation/agw-client/dist/esm/actions/sendPrivyTransaction.js
async function sendPrivySignMessage(client, parameters) {
  const result = await client.request({
    method: "privy_signSmartWalletMessage",
    params: [parameters.message]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, { retryCount: 0 });
  return result;
}
async function sendPrivySignTypedData(client, parameters) {
  const result = await client.request({
    method: "privy_signSmartWalletTypedData",
    params: [client.account.address, parameters]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, { retryCount: 0 });
  return result;
}
async function signPrivyTransaction(client, parameters) {
  const { chain: _chain, account: _account, ...request } = parameters;
  const result = await client.request({
    method: "privy_signSmartWalletTx",
    params: [replaceBigInts(request, toHex)]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, { retryCount: 0 });
  return result;
}

// node_modules/@abstract-foundation/agw-client/dist/esm/abis/ExclusiveDelegateResolver.js
var ExclusiveDelegateResolverAbi = [
  {
    type: "function",
    name: "DELEGATE_REGISTRY",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "GLOBAL_DELEGATION",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes24",
        internalType: "bytes24"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "decodeRightsExpiration",
    inputs: [
      {
        name: "rights",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bytes24",
        internalType: "bytes24"
      },
      {
        name: "",
        type: "uint40",
        internalType: "uint40"
      }
    ],
    stateMutability: "pure"
  },
  {
    type: "function",
    name: "delegatedWalletsByRights",
    inputs: [
      {
        name: "wallet",
        type: "address",
        internalType: "address"
      },
      {
        name: "rights",
        type: "bytes24",
        internalType: "bytes24"
      }
    ],
    outputs: [
      {
        name: "",
        type: "address[]",
        internalType: "address[]"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "exclusiveOwnerByRights",
    inputs: [
      {
        name: "contractAddress",
        type: "address",
        internalType: "address"
      },
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "rights",
        type: "bytes24",
        internalType: "bytes24"
      }
    ],
    outputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "exclusiveWalletByRights",
    inputs: [
      {
        name: "vault",
        type: "address",
        internalType: "address"
      },
      {
        name: "rights",
        type: "bytes24",
        internalType: "bytes24"
      }
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "generateRightsWithExpiration",
    inputs: [
      {
        name: "rightsIdentifier",
        type: "bytes24",
        internalType: "bytes24"
      },
      {
        name: "expiration",
        type: "uint40",
        internalType: "uint40"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    stateMutability: "pure"
  }
];

// node_modules/@abstract-foundation/agw-client/dist/esm/actions/getSessionStatus.js
async function getSessionStatus(publicClient, address, sessionHashOrConfig) {
  const sessionHash2 = typeof sessionHashOrConfig === "string" ? sessionHashOrConfig : getSessionHash(sessionHashOrConfig);
  return await publicClient.readContract({
    address: SESSION_KEY_VALIDATOR_ADDRESS,
    abi: SessionKeyValidatorAbi,
    functionName: "sessionStatus",
    args: [address, sessionHash2]
  });
}

// node_modules/@abstract-foundation/agw-client/dist/esm/actions/sendTransactionForSession.js
async function sendTransactionForSession(client, signerClient, publicClient, parameters, session, customPaymasterHandler = void 0) {
  const selector = parameters.data ? `0x${parameters.data.slice(2, 10)}` : void 0;
  if (!parameters.to) {
    throw new BaseError("Transaction to field is not specified");
  }
  return sendTransactionInternal(client, signerClient, publicClient, parameters, SESSION_KEY_VALIDATOR_ADDRESS, {
    [SESSION_KEY_VALIDATOR_ADDRESS]: encodeSessionWithPeriodIds(session, getPeriodIdsForTransaction({
      sessionConfig: session,
      target: parameters.to,
      selector,
      timestamp: BigInt(Math.floor(Date.now() / 1e3))
    }))
  }, customPaymasterHandler);
}

// node_modules/@abstract-foundation/agw-client/dist/esm/abis/SessionKeyPolicyRegistry.js
var SessionKeyPolicyRegistryAbi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "AccessControlBadConfirmation",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "neededRole",
        type: "bytes32"
      }
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address"
      }
    ],
    name: "AddressEmptyCode",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address"
      }
    ],
    name: "ERC1967InvalidImplementation",
    type: "error"
  },
  {
    inputs: [],
    name: "ERC1967NonPayable",
    type: "error"
  },
  {
    inputs: [],
    name: "FailedCall",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error"
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error"
  },
  {
    inputs: [],
    name: "UUPSUnauthorizedCallContext",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "slot",
        type: "bytes32"
      }
    ],
    name: "UUPSUnsupportedProxiableUUID",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "enum PolicyType",
        name: "policyType",
        type: "uint8"
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "data",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "enum Status",
        name: "status",
        type: "uint8"
      }
    ],
    name: "PolicyStatusChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32"
      }
    ],
    name: "RoleAdminChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "RoleGranted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "RoleRevoked",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address"
      }
    ],
    name: "Upgraded",
    type: "event"
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MANAGER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "UPGRADE_INTERFACE_VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        internalType: "address",
        name: "target",
        type: "address"
      }
    ],
    name: "getApprovalTargetStatus",
    outputs: [
      {
        internalType: "enum Status",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address"
      },
      {
        internalType: "bytes4",
        name: "selector",
        type: "bytes4"
      }
    ],
    name: "getCallPolicyStatus",
    outputs: [
      {
        internalType: "enum Status",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32"
      }
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address"
      }
    ],
    name: "getTransferPolicyStatus",
    outputs: [
      {
        internalType: "enum Status",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "callerConfirmation",
        type: "address"
      }
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        internalType: "address",
        name: "target",
        type: "address"
      },
      {
        internalType: "enum Status",
        name: "status",
        type: "uint8"
      }
    ],
    name: "setApprovalTargetStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address"
      },
      {
        internalType: "bytes4",
        name: "selector",
        type: "bytes4"
      },
      {
        internalType: "enum Status",
        name: "status",
        type: "uint8"
      }
    ],
    name: "setCallPolicyStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address"
      },
      {
        internalType: "enum Status",
        name: "status",
        type: "uint8"
      }
    ],
    name: "setTransferPolicyStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  }
];

// node_modules/@abstract-foundation/agw-client/dist/esm/sessionValidator.js
var restrictedSelectors = /* @__PURE__ */ new Set([
  toFunctionSelector("function setApprovalForAll(address, bool)"),
  toFunctionSelector("function approve(address, uint256)"),
  toFunctionSelector("function transfer(address, uint256)")
]);
var SessionKeyPolicyStatus;
(function(SessionKeyPolicyStatus2) {
  SessionKeyPolicyStatus2[SessionKeyPolicyStatus2["Unset"] = 0] = "Unset";
  SessionKeyPolicyStatus2[SessionKeyPolicyStatus2["Allowed"] = 1] = "Allowed";
  SessionKeyPolicyStatus2[SessionKeyPolicyStatus2["Denied"] = 2] = "Denied";
})(SessionKeyPolicyStatus || (SessionKeyPolicyStatus = {}));
async function assertSessionKeyPolicies(client, chainId, account, transaction) {
  var _a2;
  if (chainId !== abstract.id) {
    return;
  }
  const sessions = [];
  if (transaction.to === account.address && ((_a2 = transaction.data) == null ? void 0 : _a2.substring(0, 10)) === BATCH_CALL_SELECTOR) {
    const batchCall = decodeFunctionData({
      abi: AGWAccount_default,
      data: transaction.data
    });
    if (batchCall.functionName === "batchCall") {
      for (const call of batchCall.args[0]) {
        const subTransaction = {
          ...transaction,
          to: call.target,
          data: call.callData
        };
        const session = getSessionFromTransaction(account, subTransaction);
        if (session) {
          sessions.push(session);
        }
      }
    }
  } else {
    const session = getSessionFromTransaction(account, transaction);
    if (session) {
      sessions.push(session);
    }
  }
  if (sessions.length === 0) {
    return;
  }
  for (const session of sessions) {
    const callPolicies = session.callPolicies;
    const transferPolicies = session.transferPolicies;
    const checks = [];
    for (const callPolicy of callPolicies) {
      if (restrictedSelectors.has(callPolicy.selector)) {
        const destinationConstraints = callPolicy.constraints.filter((c2) => c2.index === 0n && c2.condition === ConstraintCondition.Equal);
        if (destinationConstraints.length === 0) {
          throw new BaseError(`Unconstrained token approval/transfer destination in call policy. Selector: ${callPolicy.selector}; Target: ${callPolicy.target}`);
        }
        for (const constraint of destinationConstraints) {
          const [target] = decodeAbiParameters([
            {
              type: "address"
            }
          ], constraint.refValue);
          checks.push({
            target,
            check: {
              address: SESSION_KEY_POLICY_REGISTRY_ADDRESS,
              abi: SessionKeyPolicyRegistryAbi,
              functionName: "getApprovalTargetStatus",
              args: [
                callPolicy.target,
                // token address
                target
                // allowed spender
              ]
            }
          });
        }
      } else {
        checks.push({
          target: callPolicy.target,
          check: {
            address: SESSION_KEY_POLICY_REGISTRY_ADDRESS,
            abi: SessionKeyPolicyRegistryAbi,
            functionName: "getCallPolicyStatus",
            args: [callPolicy.target, callPolicy.selector]
          }
        });
      }
    }
    for (const transferPolicy of transferPolicies) {
      checks.push({
        target: transferPolicy.target,
        check: {
          address: SESSION_KEY_POLICY_REGISTRY_ADDRESS,
          abi: SessionKeyPolicyRegistryAbi,
          functionName: "getTransferPolicyStatus",
          args: [transferPolicy.target]
        }
      });
    }
    const results = await client.multicall({
      contracts: checks.map((c2) => c2.check),
      allowFailure: false
    });
    for (let i3 = 0; i3 < checks.length; i3++) {
      const result = results[i3];
      const check = checks[i3];
      if (Number(result) !== SessionKeyPolicyStatus.Allowed) {
        throw new BaseError(`Session key policy violation. Target: ${check == null ? void 0 : check.target}; Status: ${SessionKeyPolicyStatus[Number(result)]}`);
      }
    }
  }
}
function getSessionFromTransaction(account, transaction) {
  var _a2, _b2;
  if (transaction.to === SESSION_KEY_VALIDATOR_ADDRESS && ((_a2 = transaction.data) == null ? void 0 : _a2.substring(0, 10)) === CREATE_SESSION_SELECTOR) {
    const sessionSpec = decodeFunctionData({
      abi: SessionKeyValidatorAbi,
      data: transaction.data
    });
    if (sessionSpec.functionName === "createSession") {
      return sessionSpec.args[0];
    }
  }
  if (transaction.to === (account == null ? void 0 : account.address) && ((_b2 = transaction.data) == null ? void 0 : _b2.substring(0, 10)) === ADD_MODULE_SELECTOR) {
    const moduleAndData = decodeFunctionData({
      abi: AGWAccount_default,
      data: transaction.data
    });
    if (moduleAndData.functionName === "addModule" && moduleAndData.args[0].toLowerCase().startsWith(SESSION_KEY_VALIDATOR_ADDRESS.toLowerCase())) {
      const sessionData = moduleAndData.args[0].substring(42);
      return decodeAbiParameters([getSessionSpec()], `0x${sessionData}`)[0];
    }
  }
  return void 0;
}

// node_modules/@abstract-foundation/agw-client/dist/esm/actions/signTransaction.js
async function signTransaction3(client, signerClient, publicClient, args, validator, validationHookData = {}, customPaymasterHandler = void 0, isPrivyCrossApp = false) {
  var _a2;
  const chain2 = client.chain;
  if (isPrivyCrossApp) {
    return signPrivyTransaction(client, args);
  }
  if (!((_a2 = chain2 == null ? void 0 : chain2.serializers) == null ? void 0 : _a2.transaction))
    throw new BaseError("transaction serializer not found on chain.");
  const { transaction, customSignature } = await signEip712TransactionInternal(client, signerClient, publicClient, args, validator, validationHookData, customPaymasterHandler);
  return chain2.serializers.transaction({
    ...transaction,
    customSignature,
    type: "eip712"
  }, { r: "0x0", s: "0x0", v: 0n });
}
async function signEip712TransactionInternal(client, signerClient, publicClient, args, validator, validationHookData = {}, customPaymasterHandler = void 0) {
  var _a2;
  args.type = "eip712";
  const { account: account_ = client.account, chain: chain2 = client.chain, ...transaction } = args;
  transformHexValues(transaction, [
    "value",
    "nonce",
    "maxFeePerGas",
    "maxPriorityFeePerGas",
    "gas",
    "chainId",
    "gasPerPubdata"
  ]);
  if (!account_)
    throw new AccountNotFoundError2({
      docsPath: "/docs/actions/wallet/signTransaction"
    });
  const smartAccount = parseAccount(account_);
  const useSignerAddress = transaction.from === signerClient.account.address;
  const fromAccount = useSignerAddress ? signerClient.account : smartAccount;
  assertEip712Request2({
    account: fromAccount,
    chain: chain2,
    ...transaction
  });
  if (!chain2 || VALID_CHAINS[chain2.id] === void 0) {
    throw new BaseError("Invalid chain specified");
  }
  if (!((_a2 = chain2 == null ? void 0 : chain2.custom) == null ? void 0 : _a2.getEip712Domain))
    throw new BaseError("`getEip712Domain` not found on chain.");
  const chainId = await getAction(client, getChainId, "getChainId")({});
  if (chain2 !== null)
    assertCurrentChain({
      currentChainId: chainId,
      chain: chain2
    });
  await assertSessionKeyPolicies(publicClient, chainId, fromAccount, transaction);
  const transactionWithPaymaster = await getTransactionWithPaymasterData(chainId, fromAccount, transaction, customPaymasterHandler);
  if (transactionWithPaymaster.data === void 0) {
    transactionWithPaymaster.data = "0x";
  }
  const eip712Domain = chain2 == null ? void 0 : chain2.custom.getEip712Domain({
    ...transactionWithPaymaster,
    type: "eip712"
  });
  const rawSignature = await signTypedData(signerClient, {
    ...eip712Domain,
    account: signerClient.account
  });
  let signature;
  if (useSignerAddress) {
    signature = rawSignature;
  } else {
    const hookData = [];
    if (!useSignerAddress) {
      const validationHooks = await getAction(client, readContract, "readContract")({
        address: client.account.address,
        abi: AGWAccount_default,
        functionName: "listHooks",
        args: [true]
      });
      for (const hook of validationHooks) {
        hookData.push(validationHookData[hook] ?? "0x");
      }
    }
    signature = encodeAbiParameters(parseAbiParameters(["bytes", "address", "bytes[]"]), [rawSignature, validator, hookData]);
  }
  return {
    transaction: transactionWithPaymaster,
    customSignature: signature
  };
}
async function getTransactionWithPaymasterData(chainId, fromAccount, transaction, customPaymasterHandler = void 0) {
  if (customPaymasterHandler && !transaction.paymaster && !transaction.paymasterInput) {
    const paymasterResult = await customPaymasterHandler({
      chainId,
      from: fromAccount.address,
      data: transaction.data,
      gas: transaction.gas ?? 0n,
      gasPrice: transaction.gasPrice ?? 0n,
      gasPerPubdata: transaction.gasPerPubdata ?? 0n,
      maxFeePerGas: transaction.maxFeePerGas ?? 0n,
      maxPriorityFeePerGas: transaction.maxPriorityFeePerGas ?? 0n,
      nonce: transaction.nonce ?? 0,
      to: transaction.to ?? "0x0",
      value: transaction.value ?? 0n
    });
    return {
      ...transaction,
      ...paymasterResult,
      from: fromAccount.address,
      chainId
    };
  }
  return {
    ...transaction,
    from: fromAccount.address,
    chainId
  };
}

// node_modules/@abstract-foundation/agw-client/dist/esm/actions/signTransactionForSession.js
async function signTransactionForSession(client, signerClient, publicClient, parameters, session, customPaymasterHandler = void 0) {
  const isDeployed = await isSmartAccountDeployed(publicClient, client.account.address);
  if (!isDeployed) {
    throw new BaseError("Smart account not deployed");
  }
  const selector = parameters.data ? `0x${parameters.data.slice(2, 10)}` : void 0;
  if (!parameters.to) {
    throw new BaseError("Transaction to field is not specified");
  }
  return await signTransaction3(client, signerClient, publicClient, parameters, SESSION_KEY_VALIDATOR_ADDRESS, {
    [SESSION_KEY_VALIDATOR_ADDRESS]: encodeSessionWithPeriodIds(session, getPeriodIdsForTransaction({
      sessionConfig: session,
      target: parameters.to,
      selector,
      timestamp: BigInt(Math.floor(Date.now() / 1e3))
    }))
  }, customPaymasterHandler);
}

// node_modules/@abstract-foundation/agw-client/dist/esm/getAgwTypedSignature.js
async function getAgwTypedSignature(args) {
  const { client, signer, messageHash } = args;
  const chainId = client.chain.id;
  const account = client.account;
  const rawSignature = await signTypedData(signer, {
    domain: {
      name: "AbstractGlobalWallet",
      version: "1.0.0",
      chainId: BigInt(chainId),
      verifyingContract: account.address
    },
    types: {
      EIP712Domain: [
        { name: "name", type: "string" },
        { name: "version", type: "string" },
        { name: "chainId", type: "uint256" },
        { name: "verifyingContract", type: "address" }
      ],
      AGWMessage: [{ name: "signedHash", type: "bytes32" }]
    },
    message: {
      signedHash: messageHash
    },
    primaryType: "AGWMessage"
  });
  const signature = encodeAbiParameters(parseAbiParameters(["bytes", "address"]), [rawSignature, EOA_VALIDATOR_ADDRESS]);
  const code = await getCode(client, {
    address: account.address
  });
  if (code !== void 0) {
    return signature;
  }
  const addressBytes = toBytes(signer.account.address);
  const salt = keccak256(addressBytes);
  return serializeErc6492Signature({
    address: SMART_ACCOUNT_FACTORY_ADDRESS,
    data: encodeFunctionData({
      abi: AccountFactory_default,
      functionName: "deployAccount",
      args: [
        salt,
        getInitializerCalldata(signer.account.address, EOA_VALIDATOR_ADDRESS, {
          target: zeroAddress,
          allowFailure: false,
          callData: "0x",
          value: 0n
        })
      ]
    }),
    signature
  });
}

// node_modules/@abstract-foundation/agw-client/dist/esm/actions/signTypedData.js
async function signTypedData2(client, signerClient, publicClient, parameters, isPrivyCrossApp = false) {
  if (isEip712TypedData(parameters)) {
    const transformedTypedData = transformEip712TypedData(parameters);
    if (transformedTypedData.chainId !== client.chain.id) {
      throw new BaseError("Chain ID mismatch in AGW typed signature");
    }
    const signedTransaction = await signTransaction3(client, signerClient, publicClient, {
      ...transformedTypedData,
      chain: client.chain
    }, EOA_VALIDATOR_ADDRESS, {}, void 0, isPrivyCrossApp);
    if (!signedTransaction.startsWith("0x71")) {
      throw new BaseError("Expected RLP encoded EIP-712 transaction as signature");
    }
    const rlpSignature = `0x${signedTransaction.slice(4)}`;
    const signatureParts = fromRlp(rlpSignature, "hex");
    if (signatureParts.length < 15) {
      throw new BaseError("Expected RLP encoded EIP-712 transaction with at least 15 fields");
    }
    return signatureParts[14];
  } else if (isPrivyCrossApp) {
    return await sendPrivySignTypedData(client, parameters);
  }
  return await getAgwTypedSignature({
    client,
    signer: signerClient,
    messageHash: hashTypedData(parameters)
  });
}
async function signTypedDataForSession(client, signerClient, publicClient, parameters, session, paymasterHandler) {
  var _a2;
  if (!isEip712TypedData(parameters)) {
    throw new BaseError("Session client can only sign EIP712 transactions as typed data");
  }
  const transactionRequest = transformEip712TypedData(parameters);
  if (!transactionRequest.to) {
    throw new BaseError("Transaction must have a to address");
  }
  const validationHookData = {
    [SESSION_KEY_VALIDATOR_ADDRESS]: encodeSessionWithPeriodIds(session, getPeriodIdsForTransaction({
      sessionConfig: session,
      target: transactionRequest.to,
      selector: ((_a2 = transactionRequest.data) == null ? void 0 : _a2.slice(0, 10)) ?? "0x",
      timestamp: BigInt(Math.floor(Date.now() / 1e3))
    }))
  };
  const { customSignature } = await signEip712TransactionInternal(client, signerClient, publicClient, {
    chain: client.chain,
    ...transactionRequest
  }, SESSION_KEY_VALIDATOR_ADDRESS, validationHookData, paymasterHandler);
  return customSignature;
}

// node_modules/@abstract-foundation/agw-client/dist/esm/actions/writeContractForSession.js
async function writeContractForSession(client, signerClient, publicClient, parameters, session, customPaymasterHandler = void 0) {
  const { abi, account: account_ = client.account, address, args, dataSuffix, functionName, ...request } = parameters;
  if (!account_)
    throw new AccountNotFoundError2({
      docsPath: "/docs/contract/writeContract"
    });
  const account = parseAccount(account_);
  const data = encodeFunctionData({
    abi,
    args,
    functionName
  });
  try {
    return await sendTransactionForSession(client, signerClient, publicClient, {
      data: `${data}${dataSuffix ? dataSuffix.replace("0x", "") : ""}`,
      to: address,
      account,
      ...request
    }, session, customPaymasterHandler);
  } catch (error) {
    throw getContractError(error, {
      abi,
      address,
      args,
      docsPath: "/docs/contract/writeContract",
      functionName,
      sender: account.address
    });
  }
}

// node_modules/@abstract-foundation/agw-client/dist/esm/clients/decorators/session.js
function sessionWalletActions(signerClient, publicClient, session, paymasterHandler) {
  return (client) => ({
    sendTransaction: (args) => sendTransactionForSession(client, signerClient, publicClient, args, session, paymasterHandler),
    writeContract: (args) => writeContractForSession(client, signerClient, publicClient, args, session, paymasterHandler),
    signTransaction: (args) => signTransactionForSession(client, signerClient, publicClient, args, session, paymasterHandler),
    signTypedData: (args) => signTypedDataForSession(client, signerClient, publicClient, args, session, paymasterHandler),
    getSessionStatus: () => getSessionStatus(publicClient, parseAccount(client.account).address, session)
  });
}

// node_modules/@abstract-foundation/agw-client/dist/esm/clients/sessionClient.js
function toSessionClient({ client, signer, session, paymasterHandler }) {
  return createSessionClient({
    account: client.account,
    chain: client.chain,
    session,
    signer,
    transport: custom(client.transport),
    paymasterHandler
  });
}
function createSessionClient({ account, signer, chain: chain2, transport, session, paymasterHandler, nonceManager }) {
  if (!transport) {
    transport = http(void 0, {
      batch: true
    });
  }
  const publicClient = createPublicClient({
    transport,
    chain: chain2
  });
  const parsedAccount = typeof account === "string" ? toAccount(account) : account;
  if (nonceManager) {
    parsedAccount.nonceManager = nonceManager;
  }
  const baseClient = createClient({
    account: parsedAccount,
    chain: chain2,
    transport
  });
  const signerWalletClient = createWalletClient({
    account: signer,
    chain: chain2,
    transport
  });
  const sessionClient = baseClient.extend(sessionWalletActions(signerWalletClient, publicClient, session, paymasterHandler));
  return sessionClient;
}

// node_modules/@abstract-foundation/agw-client/dist/esm/actions/prepareTransaction.js
var defaultParameters = [
  "blobVersionedHashes",
  "chainId",
  "fees",
  "gas",
  "nonce",
  "type"
];
async function prepareTransactionRequest2(client, signerClient, publicClient, args) {
  transformHexValues(args, [
    "value",
    "nonce",
    "maxFeePerGas",
    "maxPriorityFeePerGas",
    "gas",
    "chainId",
    "gasPerPubdata"
  ]);
  const isSponsored = "paymaster" in args && "paymasterInput" in args && args.paymaster !== void 0 && args.paymasterInput !== void 0;
  const { gas, nonce, chain: chain2, nonceManager, parameters: parameterNames = defaultParameters } = args;
  const isDeployed = await isSmartAccountDeployed(publicClient, client.account.address);
  if (!isDeployed) {
    const initialCall = {
      target: args.to,
      allowFailure: false,
      value: args.value ?? 0,
      callData: args.data ?? "0x"
    };
    const initializerCallData = getInitializerCalldata(signerClient.account.address, EOA_VALIDATOR_ADDRESS, initialCall);
    const addressBytes = toBytes(signerClient.account.address);
    const salt = keccak256(addressBytes);
    const deploymentCalldata = encodeFunctionData({
      abi: AccountFactory_default,
      functionName: "deployAccount",
      args: [salt, initializerCallData]
    });
    args.to = SMART_ACCOUNT_FACTORY_ADDRESS;
    args.data = deploymentCalldata;
  }
  const initiatorAccount = parseAccount(isDeployed ? client.account : signerClient.account);
  const request = {
    ...args,
    from: initiatorAccount.address
  };
  const asyncOperations = [];
  let userBalance;
  if (!isSponsored || request.value !== void 0 && request.value > 0n) {
    asyncOperations.push(getBalance(publicClient, {
      address: initiatorAccount.address
    }).then((balance) => {
      userBalance = balance;
    }));
  }
  let chainId;
  async function getChainId2() {
    if (chainId)
      return chainId;
    if (chain2)
      return chain2.id;
    if (typeof args.chainId !== "undefined")
      return args.chainId;
    const chainId_ = await getAction(client, getChainId, "getChainId")({});
    chainId = chainId_;
    return chainId;
  }
  if (parameterNames.includes("nonce") && typeof nonce === "undefined" && initiatorAccount) {
    if (nonceManager) {
      asyncOperations.push((async () => {
        const chainId2 = await getChainId2();
        request.nonce = await nonceManager.consume({
          address: initiatorAccount.address,
          chainId: chainId2,
          client: publicClient
        });
      })());
    } else {
      asyncOperations.push(getAction(publicClient, getTransactionCount, "getTransactionCount")({
        address: initiatorAccount.address,
        blockTag: "pending"
      }).then((nonce2) => {
        request.nonce = nonce2;
      }));
    }
  }
  if (parameterNames.includes("fees")) {
    if (typeof request.maxFeePerGas === "undefined") {
      asyncOperations.push((async () => {
        request.maxFeePerGas = await getGasPrice(publicClient);
        request.maxPriorityFeePerGas = 0n;
      })());
    }
  }
  if (parameterNames.includes("gas") && typeof gas === "undefined") {
    asyncOperations.push((async () => {
      try {
        request.gas = await getAction(client, estimateGas, "estimateGas")({
          ...request,
          account: initiatorAccount ? { address: initiatorAccount.address, type: "json-rpc" } : void 0
        });
      } catch (error) {
        if (error instanceof Error && error.message.includes(INSUFFICIENT_BALANCE_SELECTOR)) {
          throw new InsufficientBalanceError();
        } else if (error instanceof RpcRequestError && error.details.includes("execution reverted")) {
          throw new ExecutionRevertedError({
            message: `${error.data}`
          });
        }
        throw error;
      }
    })());
  }
  await Promise.all(asyncOperations);
  const gasCost = isSponsored || !request.gas || !request.maxFeePerGas ? 0n : request.gas * request.maxFeePerGas;
  if (userBalance !== void 0 && userBalance < (request.value ?? 0n) + gasCost) {
    throw new InsufficientBalanceError();
  }
  assertRequest(request);
  delete request.parameters;
  delete request.isInitialTransaction;
  delete request.nonceManager;
  return request;
}

// node_modules/@abstract-foundation/agw-client/dist/esm/actions/sendTransactionInternal.js
async function sendTransactionInternal(client, signerClient, publicClient, parameters, validator, validationHookData = {}, customPaymasterHandler = void 0) {
  const { chain: chain2 = client.chain } = parameters;
  if (!signerClient.account)
    throw new AccountNotFoundError2({
      docsPath: "/docs/actions/wallet/sendTransaction"
    });
  const account = parseAccount(signerClient.account);
  try {
    const request = await prepareTransactionRequest2(client, signerClient, publicClient, {
      ...parameters,
      parameters: ["gas", "nonce", "fees"],
      isSponsored: customPaymasterHandler !== void 0 || parameters.paymaster !== void 0,
      nonceManager: account.nonceManager
    });
    let chainId;
    if (chain2 !== null) {
      chainId = await getAction(signerClient, getChainId, "getChainId")({});
      assertCurrentChain({
        currentChainId: chainId,
        chain: chain2
      });
    }
    const serializedTransaction = await signTransaction3(client, signerClient, publicClient, {
      ...request,
      chainId
    }, validator, validationHookData, customPaymasterHandler);
    return await getAction(client, sendRawTransaction, "sendRawTransaction")({
      serializedTransaction
    });
  } catch (err2) {
    if (err2 instanceof Error && err2.message.includes(INSUFFICIENT_BALANCE_SELECTOR)) {
      throw new InsufficientBalanceError();
    }
    throw getTransactionError(err2, {
      ...parameters,
      account,
      chain: chain2
    });
  }
}

// node_modules/@abstract-foundation/agw-client/dist/esm/actions/sendTransaction.js
async function sendTransaction3(client, signerClient, publicClient, parameters, isPrivyCrossApp = false, customPaymasterHandler = void 0) {
  var _a2;
  if (isPrivyCrossApp) {
    try {
      let paymasterData = {};
      const requestAsAny = parameters;
      if (customPaymasterHandler && !requestAsAny.paymaster && !requestAsAny.paymasterInput) {
        paymasterData = await customPaymasterHandler({
          ...parameters,
          from: client.account.address,
          chainId: ((_a2 = parameters.chain) == null ? void 0 : _a2.id) ?? client.chain.id
        });
      }
      const updatedParameters = {
        ...parameters,
        ...paymasterData
      };
      const signedTx = await signPrivyTransaction(client, updatedParameters);
      return await publicClient.sendRawTransaction({
        serializedTransaction: signedTx
      });
    } catch (err2) {
      if (err2 instanceof Error && err2.message.includes(INSUFFICIENT_BALANCE_SELECTOR)) {
        throw new InsufficientBalanceError();
      }
      throw getTransactionError(err2, {
        ...parameters,
        account: parameters.account ? parseAccount(parameters.account) : null,
        chain: parameters.chain ?? void 0
      });
    }
  }
  return sendTransactionInternal(client, signerClient, publicClient, parameters, EOA_VALIDATOR_ADDRESS, {}, customPaymasterHandler);
}

// node_modules/@abstract-foundation/agw-client/dist/esm/actions/deployContract.js
function deployContract2(walletClient, signerClient, publicClient, parameters, isPrivyCrossApp = false) {
  const { abi, args, bytecode, deploymentType, salt, ...request } = parameters;
  const data = encodeDeployData({
    abi,
    args,
    bytecode,
    deploymentType,
    salt
  });
  request.factoryDeps = request.factoryDeps || [];
  if (!request.factoryDeps.includes(bytecode))
    request.factoryDeps.push(bytecode);
  return sendTransaction3(walletClient, signerClient, publicClient, {
    ...request,
    data,
    to: CONTRACT_DEPLOYER_ADDRESS
  }, isPrivyCrossApp);
}

// node_modules/@abstract-foundation/agw-client/dist/esm/actions/getCallsStatus.js
async function getCallsStatus(client, parameters) {
  if (!isHex(parameters.id)) {
    throw new InvalidParameterError({ param: "id" });
  }
  let receipt;
  try {
    receipt = await getTransactionReceipt(client, {
      hash: parameters.id
    });
  } catch (error) {
    if (error instanceof TransactionReceiptNotFoundError) {
      receipt = void 0;
    } else {
      throw error;
    }
  }
  const [status, statusCode] = (() => {
    if (!receipt)
      return ["pending", 100];
    if (receipt.status === "success")
      return ["success", 200];
    if (receipt.status === "reverted")
      return ["failure", 500];
    return [void 0, 400];
  })();
  return {
    atomic: true,
    chainId: client.chain.id,
    receipts: receipt ? [receipt] : void 0,
    status,
    id: parameters.id,
    statusCode,
    version: "2.0.0"
  };
}

// node_modules/@abstract-foundation/agw-client/dist/esm/eip5792.js
var CallStatus;
(function(CallStatus2) {
  CallStatus2[CallStatus2["Pending"] = 100] = "Pending";
  CallStatus2[CallStatus2["Confirmed"] = 200] = "Confirmed";
  CallStatus2[CallStatus2["OffchainFailure"] = 400] = "OffchainFailure";
  CallStatus2[CallStatus2["Reverted"] = 500] = "Reverted";
  CallStatus2[CallStatus2["PartiallyReverted"] = 600] = "PartiallyReverted";
})(CallStatus || (CallStatus = {}));
function getReceiptStatus(receipt) {
  switch (receipt == null ? void 0 : receipt.status) {
    case void 0:
      return CallStatus.Pending;
    case "0x1":
      return CallStatus.Confirmed;
    case "0x0":
      return CallStatus.Reverted;
  }
}
var agwCapabilities = {
  atomicBatch: {
    supported: true
  },
  atomic: {
    status: "supported"
  }
};

// node_modules/@abstract-foundation/agw-client/dist/esm/actions/getCapabilities.js
async function getCapabilities(_client, parameters = {}) {
  const { chainId } = parameters;
  const capabilities = {};
  if (chainId) {
    if (!VALID_CHAINS[chainId]) {
      throw new UnsupportedChainIdError(new Error(`Chain ${chainId} not supported`));
    }
    return agwCapabilities;
  }
  for (const chainId2 of Object.keys(VALID_CHAINS)) {
    capabilities[Number(chainId2)] = agwCapabilities;
  }
  return capabilities;
}

// node_modules/@abstract-foundation/agw-client/dist/esm/actions/getLinkedAccounts.js
async function getLinkedAccounts(client, parameters) {
  const { agwAddress } = parameters;
  if (!isAddress(agwAddress, { strict: false })) {
    throw new InvalidAddressError({ address: agwAddress });
  }
  const checksummedAddress = getAddress(agwAddress);
  const result = await getAction(client, readContract, "readContract")({
    abi: ExclusiveDelegateResolverAbi,
    address: CANONICAL_EXCLUSIVE_DELEGATE_RESOLVER_ADDRESS,
    functionName: "delegatedWalletsByRights",
    args: [checksummedAddress, AGW_LINK_DELEGATION_RIGHTS]
  });
  return {
    linkedAccounts: [...result]
  };
}

// node_modules/@abstract-foundation/agw-client/dist/esm/actions/getLinkedAgw.js
async function getLinkedAgw(client, parameters) {
  var _a2;
  const { address = (_a2 = client.account) == null ? void 0 : _a2.address } = parameters;
  if (address === void 0) {
    throw new BaseError("No address provided");
  }
  if (!isAddress(address, { strict: false })) {
    throw new InvalidAddressError({ address });
  }
  const checksummedAddress = getAddress(address);
  const result = await getAction(client, readContract, "readContract")({
    abi: ExclusiveDelegateResolverAbi,
    address: CANONICAL_EXCLUSIVE_DELEGATE_RESOLVER_ADDRESS,
    functionName: "exclusiveWalletByRights",
    args: [checksummedAddress, AGW_LINK_DELEGATION_RIGHTS]
  });
  if (result === checksummedAddress) {
    return {
      agw: void 0
    };
  }
  return {
    agw: result
  };
}
async function isLinkedAccount(client, parameters) {
  const { address } = parameters;
  if (client.account === void 0) {
    throw new AccountNotFoundError2({
      docsPath: "/docs/contract/readContract"
    });
  }
  const clientAccount = parseAccount(client.account);
  const { agw } = await getLinkedAgw(client, { address });
  return agw === clientAccount.address;
}

// node_modules/@abstract-foundation/agw-client/dist/esm/actions/revokeSessions.js
async function revokeSessions(client, args) {
  const { session, ...rest } = args;
  const sessionHashes = typeof session === "string" ? [session] : Array.isArray(session) ? session.map(sessionHash) : [getSessionHash(session)];
  const transactionHash = await getAction(client, writeContract, "writeContract")({
    address: SESSION_KEY_VALIDATOR_ADDRESS,
    abi: SessionKeyValidatorAbi,
    functionName: "revokeKeys",
    args: [sessionHashes],
    ...rest
  });
  return { transactionHash };
}
function sessionHash(session) {
  if (typeof session === "string") {
    return session;
  }
  return getSessionHash(session);
}

// node_modules/@abstract-foundation/agw-client/dist/esm/actions/sendTransactionBatch.js
function getBatchTransactionObject(address, parameters) {
  const { calls, paymaster, paymasterInput } = parameters;
  const batchCalls = formatCalls(calls);
  const batchCallData = encodeFunctionData({
    abi: AGWAccount_default,
    functionName: "batchCall",
    args: [batchCalls]
  });
  const totalValue = batchCalls.reduce((sum, call) => sum + BigInt(call.value), BigInt(0));
  return {
    to: address,
    data: batchCallData,
    value: totalValue,
    paymaster,
    paymasterInput,
    type: "eip712"
  };
}
async function sendTransactionBatch(client, signerClient, publicClient, parameters, isPrivyCrossApp = false, customPaymasterHandler = void 0) {
  const { calls, ...rest } = parameters;
  if (calls.length === 0) {
    throw new Error("No calls provided");
  }
  if (isPrivyCrossApp) {
    const signedTx = await signPrivyTransaction(client, {
      ...rest,
      calls: encodeCalls(calls)
    });
    return await publicClient.sendRawTransaction({
      serializedTransaction: signedTx
    });
  }
  const batchTransaction = getBatchTransactionObject(client.account.address, {
    calls,
    ...rest
  });
  return sendTransactionInternal(client, signerClient, publicClient, {
    ...batchTransaction,
    ...rest
  }, EOA_VALIDATOR_ADDRESS, {}, customPaymasterHandler);
}

// node_modules/@abstract-foundation/agw-client/dist/esm/actions/sendCalls.js
async function sendCalls(client, signerClient, publicClient, parameters, isPrivyCrossApp = false, customPaymasterHandler = void 0) {
  const { calls, capabilities } = parameters;
  if (capabilities) {
    const nonOptionalCapabilities = Object.entries(capabilities).filter(([_, capability]) => !capability.optional);
    for (const [capability] of nonOptionalCapabilities) {
      if (!agwCapabilities[capability]) {
        const message = `non-optional capability ${capability} is not supported`;
        throw new UnsupportedNonOptionalCapabilityError(new BaseError(message, {
          details: message
        }));
      }
    }
  }
  const result = await sendTransactionBatch(client, signerClient, publicClient, {
    calls
  }, isPrivyCrossApp, customPaymasterHandler);
  return {
    id: result
  };
}

// node_modules/@abstract-foundation/agw-client/dist/esm/actions/signMessage.js
async function signMessage(client, signerClient, parameters, isPrivyCrossApp = false) {
  if (isPrivyCrossApp) {
    if (typeof parameters.message === "object") {
      if (parameters.message.raw instanceof Uint8Array) {
        parameters.message = bytesToString(parameters.message.raw);
      } else {
        parameters.message = fromHex(parameters.message.raw, "string");
      }
    }
    return await sendPrivySignMessage(client, parameters);
  }
  return await getAgwTypedSignature({
    client,
    signer: signerClient,
    messageHash: hashMessage(parameters.message)
  });
}

// node_modules/@abstract-foundation/agw-client/dist/esm/actions/signTransactionBatch.js
async function signTransactionBatch(client, signerClient, publicClient, parameters, validator, validationHookData = {}, customPaymasterHandler = void 0, isPrivyCrossApp = false) {
  const { calls, ...rest } = parameters;
  if (calls.length === 0) {
    throw new Error("No calls provided");
  }
  if (isPrivyCrossApp) {
    return await signPrivyTransaction(client, {
      ...rest,
      calls: encodeCalls(calls)
    });
  }
  const batchTransaction = getBatchTransactionObject(client.account.address, {
    calls,
    ...rest
  });
  return signTransaction3(client, signerClient, publicClient, {
    ...batchTransaction,
    ...rest
  }, validator, validationHookData, customPaymasterHandler);
}

// node_modules/@abstract-foundation/agw-client/dist/esm/actions/writeContract.js
async function writeContract3(client, signerClient, publicClient, parameters, isPrivyCrossApp = false) {
  const { abi, account: account_ = client.account, address, args, dataSuffix, functionName, ...request } = parameters;
  if (!account_)
    throw new AccountNotFoundError2({
      docsPath: "/docs/contract/writeContract"
    });
  const account = parseAccount(account_);
  const data = encodeFunctionData({
    abi,
    args,
    functionName
  });
  try {
    return await sendTransaction3(client, signerClient, publicClient, {
      data: `${data}${dataSuffix ? dataSuffix.replace("0x", "") : ""}`,
      to: address,
      account,
      ...request
    }, isPrivyCrossApp);
  } catch (error) {
    throw getContractError(error, {
      abi,
      address,
      args,
      docsPath: "/docs/contract/writeContract",
      functionName,
      sender: account.address
    });
  }
}

// node_modules/@abstract-foundation/agw-client/dist/esm/clients/decorators/abstract.js
function globalWalletActions(signerClient, publicClient, isPrivyCrossApp = false, customPaymasterHandler) {
  return (client) => ({
    getChainId: () => getChainId(client),
    getLinkedAccounts: () => getLinkedAccounts(client, {
      agwAddress: parseAccount(client.account).address
    }),
    isLinkedAccount: (args) => isLinkedAccount(client, args),
    createSession: (args) => createSession(client, args),
    revokeSessions: (args) => revokeSessions(client, args),
    prepareAbstractTransactionRequest: (args) => prepareTransactionRequest2(client, signerClient, publicClient, args),
    sendTransaction: (args) => sendTransaction3(client, signerClient, publicClient, args, isPrivyCrossApp, customPaymasterHandler),
    sendTransactionBatch: (args) => sendTransactionBatch(client, signerClient, publicClient, args, isPrivyCrossApp, customPaymasterHandler),
    signMessage: (args) => signMessage(client, signerClient, args, isPrivyCrossApp),
    signTransaction: (args) => signTransaction3(client, signerClient, publicClient, args, EOA_VALIDATOR_ADDRESS, {}, customPaymasterHandler, isPrivyCrossApp),
    signTransactionBatch: (args) => signTransactionBatch(client, signerClient, publicClient, args, EOA_VALIDATOR_ADDRESS, {}, customPaymasterHandler, isPrivyCrossApp),
    signTypedData: (args) => signTypedData2(client, signerClient, publicClient, args, isPrivyCrossApp),
    deployContract: (args) => deployContract2(client, signerClient, publicClient, args, isPrivyCrossApp),
    writeContract: (args) => writeContract3(Object.assign(client, {
      sendTransaction: (args2) => sendTransaction3(client, signerClient, publicClient, args2, isPrivyCrossApp, customPaymasterHandler)
    }), signerClient, publicClient, args, isPrivyCrossApp),
    toSessionClient: (signer, session) => toSessionClient({
      client,
      signer,
      session,
      paymasterHandler: customPaymasterHandler
    }),
    getSessionStatus: (sessionHashOrConfig) => getSessionStatus(publicClient, parseAccount(client.account).address, sessionHashOrConfig),
    /** EIP-5792 actions - see https://eips.ethereum.org/EIPS/eip-5792 */
    getCallsStatus: (args) => getCallsStatus(publicClient, args),
    sendCalls: (args) => sendCalls(client, signerClient, publicClient, args, isPrivyCrossApp, customPaymasterHandler),
    getCapabilities: (args) => getCapabilities(client, args),
    showCallsStatus: (_args) => {
      return Promise.resolve();
    }
  });
}

// node_modules/@abstract-foundation/agw-client/dist/esm/clients/abstractClient.js
async function createAbstractClient({ signer, chain: chain2, transport, address, isPrivyCrossApp = false, publicTransport = http(void 0, {
  batch: true
}), customPaymasterHandler }) {
  if (!transport) {
    throw new Error("Transport is required");
  }
  const publicClient = createPublicClient({
    chain: chain2,
    transport: publicTransport
  });
  const smartAccountAddress = address ?? await getSmartAccountAddressFromInitialSigner(signer.address, publicClient);
  const baseClient = createClient({
    account: toAccount(smartAccountAddress),
    chain: chain2,
    transport
  });
  const signerWalletClient = createWalletClient({
    account: signer,
    chain: chain2,
    transport
  });
  const abstractClient = baseClient.extend(globalWalletActions(signerWalletClient, publicClient, isPrivyCrossApp, customPaymasterHandler));
  return abstractClient;
}

// node_modules/@abstract-foundation/agw-client/dist/esm/transformEIP1193Provider.js
async function getAgwAddressFromInitialSigner(chain2, transport, signer) {
  const publicClient = createPublicClient({
    chain: chain2,
    transport
  });
  return await getSmartAccountAddressFromInitialSigner(signer, publicClient);
}
async function getAgwSigner(provider, method = "eth_accounts") {
  const accounts = await provider.request({ method });
  return accounts == null ? void 0 : accounts[0];
}
async function getAgwClient(account, chain2, transport, isPrivyCrossApp, overrideTransport, customPaymasterHandler) {
  const wallet = createWalletClient({
    account,
    transport
  });
  const signer = toAccount({
    address: account,
    signMessage: wallet.signMessage,
    signTransaction: wallet.signTransaction,
    signTypedData: wallet.signTypedData
  });
  const abstractClient = await createAbstractClient({
    chain: chain2,
    signer,
    transport,
    isPrivyCrossApp,
    publicTransport: overrideTransport,
    customPaymasterHandler
  });
  return abstractClient;
}
function transformEIP1193Provider(options) {
  const { provider, chain: chain2, transport: overrideTransport, isPrivyCrossApp = false, customPaymasterHandler } = options;
  const transport = custom(provider);
  const handler = async (e3) => {
    const { method, params } = e3;
    switch (method) {
      case "eth_requestAccounts": {
        const signer = await getAgwSigner(provider, method);
        if (!signer) {
          return [];
        }
        const smartAccount = await getAgwAddressFromInitialSigner(chain2, transport, signer);
        return [smartAccount, signer];
      }
      case "eth_accounts": {
        const signer = await getAgwSigner(provider);
        if (!signer) {
          return [];
        }
        const smartAccount = await getAgwAddressFromInitialSigner(chain2, transport, signer);
        return [smartAccount, signer];
      }
      case "eth_signTypedData_v4": {
        const account = await getAgwSigner(provider);
        if (!account) {
          throw new Error("Account not found");
        }
        if (params[0] === account) {
          return provider.request(e3);
        }
        const abstractClient = await getAgwClient(account, chain2, transport, isPrivyCrossApp, overrideTransport, customPaymasterHandler);
        return abstractClient.signTypedData(JSON.parse(params[1]));
      }
      case "personal_sign": {
        const account = await getAgwSigner(provider);
        if (!account) {
          throw new Error("Account not found");
        }
        if (params[1] === account) {
          return provider.request(e3);
        }
        const abstractClient = await getAgwClient(account, chain2, transport, isPrivyCrossApp, overrideTransport, customPaymasterHandler);
        return await abstractClient.signMessage({
          message: {
            raw: params[0]
          }
        });
      }
      case "eth_signTransaction":
      case "eth_sendTransaction": {
        const account = await getAgwSigner(provider);
        if (!account) {
          throw new Error("Account not found");
        }
        const transaction = params[0];
        if (transaction.from === account) {
          return await provider.request(e3);
        }
        const abstractClient = await getAgwClient(account, chain2, transport, isPrivyCrossApp, overrideTransport, customPaymasterHandler);
        if (transaction.eip712Meta && transaction.eip712Meta.paymasterParams) {
          transaction.paymaster = transaction.eip712Meta.paymasterParams.paymaster;
          transaction.paymasterInput = toHex(transaction.eip712Meta.paymasterParams.paymasterInput);
        }
        if (method === "eth_signTransaction") {
          return await abstractClient.signTransaction(transaction);
        } else if (method === "eth_sendTransaction") {
          return await abstractClient.sendTransaction(transaction);
        }
        throw new Error("Should not have reached this point");
      }
      case "wallet_sendCalls": {
        const account = await getAgwSigner(provider);
        if (!account) {
          throw new Error("Account not found");
        }
        const sendCallsParams = params[0];
        if (sendCallsParams.from === account) {
          return await provider.request(e3);
        }
        if (sendCallsParams.version === "1.0" || sendCallsParams.version === void 0) {
          sendCallsParams.calls.forEach((call) => {
            if (call.chainId) {
              assertCurrentChain({
                chain: chain2,
                currentChainId: fromHex(call.chainId, "number")
              });
            }
          });
        }
        if (sendCallsParams.version === "2.0.0") {
          if (fromHex(sendCallsParams.chainId, "number") !== chain2.id) {
            return {
              code: 5710,
              message: "Chain not supported"
            };
          }
        }
        const abstractClient = await getAgwClient(account, chain2, transport, isPrivyCrossApp, overrideTransport, customPaymasterHandler);
        if (sendCallsParams.from !== parseAccount(abstractClient.account).address) {
          return {
            code: 4001,
            message: "Unauthorized"
          };
        }
        const calls = [];
        for (const call of sendCallsParams.calls) {
          if (!call.to) {
            return {
              code: -32602,
              message: "Invalid call to unspecified address"
            };
          }
          calls.push({
            to: call.to,
            value: call.value ? hexToBigInt(call.value) : 0n,
            data: call.data ?? "0x"
          });
        }
        const txHash = await abstractClient.sendTransactionBatch({
          calls
        });
        if (sendCallsParams.version === void 0 || sendCallsParams.version === "1.0") {
          return txHash;
        }
        return {
          id: txHash
        };
      }
      case "wallet_getCallsStatus": {
        const receipt = await provider.request({
          method: "eth_getTransactionReceipt",
          params
        });
        return {
          version: "2.0.0",
          id: params[0],
          chainId: toHex(chain2.id),
          status: getReceiptStatus(receipt ?? void 0),
          atomic: true,
          // AGW will always process multiple calls as an atomic batch
          receipts: receipt != null ? [receipt] : void 0
        };
      }
      case "wallet_addEthereumChain":
      case "wallet_switchEthereumChain": {
        const request = params[0];
        const chainIdHex = request.chainId;
        if (!chainIdHex) {
          throw new Error("Chain ID is required");
        }
        const chainId = isHex(chainIdHex) ? hexToNumber(chainIdHex) : chainIdHex;
        const chain3 = Object.values(VALID_CHAINS).find((c2) => c2.id === chainId);
        if (!chain3) {
          throw new Error(`Chain ${chainId} not supported`);
        }
        return await provider.request(e3);
      }
      case "wallet_showCallsStatus": {
        return void 0;
      }
      case "wallet_getCapabilities": {
        const account = await getAgwSigner(provider);
        if (!account) {
          throw new Error("Account not found");
        }
        if (params[0] === account) {
          return await provider.request(e3);
        }
        const chainIds = params[1];
        if (chainIds) {
          const filteredCapabilities = {};
          for (const chainId of chainIds) {
            if (VALID_CHAINS[fromHex(chainId, "number")]) {
              filteredCapabilities[chainId] = agwCapabilities;
            }
          }
          return filteredCapabilities;
        } else {
          return Object.keys(VALID_CHAINS).reduce((acc, chainId) => {
            acc[toHex(Number(chainId))] = agwCapabilities;
            return acc;
          }, {});
        }
      }
      default: {
        return await provider.request(e3);
      }
    }
  };
  return {
    ...provider,
    on: provider.on,
    removeListener: provider.removeListener,
    request: handler
  };
}

// node_modules/@abstract-foundation/agw-react/dist/esm/agwProvider.js
var import_react = __toESM(require_react(), 1);

// node_modules/@privy-io/cross-app-connect/dist/esm/getCrossAppProviderDetails.mjs
async function t({ providerAppId: t4, apiUrl: a4 }) {
  let n = await fetch(`${a4}/api/v1/apps/${t4}/cross-app/details`, { method: "GET", headers: { "Content-Type": "application/json" } }), { custom_connect_url: o4, custom_transact_url: r4, custom_api_url: c2, icon_url: e3, name: s5 } = await n.json();
  return { url: c2, customConnectUrl: o4, customTransactUrl: r4, name: s5, iconUrl: e3 };
}

// node_modules/@privy-io/cross-app-connect/node_modules/@noble/curves/node_modules/@noble/hashes/esm/crypto.js
var crypto2 = typeof globalThis === "object" && "crypto" in globalThis ? globalThis.crypto : void 0;

// node_modules/@privy-io/cross-app-connect/node_modules/@noble/curves/node_modules/@noble/hashes/esm/utils.js
function isBytes(a4) {
  return a4 instanceof Uint8Array || ArrayBuffer.isView(a4) && a4.constructor.name === "Uint8Array";
}
function anumber(n) {
  if (!Number.isSafeInteger(n) || n < 0)
    throw new Error("positive integer expected, got " + n);
}
function abytes(b, ...lengths) {
  if (!isBytes(b))
    throw new Error("Uint8Array expected");
  if (lengths.length > 0 && !lengths.includes(b.length))
    throw new Error("Uint8Array expected of length " + lengths + ", got length=" + b.length);
}
function ahash(h) {
  if (typeof h !== "function" || typeof h.create !== "function")
    throw new Error("Hash should be wrapped by utils.createHasher");
  anumber(h.outputLen);
  anumber(h.blockLen);
}
function aexists(instance, checkFinished = true) {
  if (instance.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (checkFinished && instance.finished)
    throw new Error("Hash#digest() has already been called");
}
function aoutput(out, instance) {
  abytes(out);
  const min = instance.outputLen;
  if (out.length < min) {
    throw new Error("digestInto() expects output buffer of length at least " + min);
  }
}
function clean(...arrays) {
  for (let i3 = 0; i3 < arrays.length; i3++) {
    arrays[i3].fill(0);
  }
}
function createView(arr) {
  return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
}
function rotr(word, shift) {
  return word << 32 - shift | word >>> shift;
}
var isLE = (() => new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68)();
var hasHexBuiltin = (() => (
  // @ts-ignore
  typeof Uint8Array.from([]).toHex === "function" && typeof Uint8Array.fromHex === "function"
))();
var hexes = Array.from({ length: 256 }, (_, i3) => i3.toString(16).padStart(2, "0"));
function bytesToHex2(bytes) {
  abytes(bytes);
  if (hasHexBuiltin)
    return bytes.toHex();
  let hex2 = "";
  for (let i3 = 0; i3 < bytes.length; i3++) {
    hex2 += hexes[bytes[i3]];
  }
  return hex2;
}
var asciis = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function asciiToBase16(ch3) {
  if (ch3 >= asciis._0 && ch3 <= asciis._9)
    return ch3 - asciis._0;
  if (ch3 >= asciis.A && ch3 <= asciis.F)
    return ch3 - (asciis.A - 10);
  if (ch3 >= asciis.a && ch3 <= asciis.f)
    return ch3 - (asciis.a - 10);
  return;
}
function hexToBytes(hex2) {
  if (typeof hex2 !== "string")
    throw new Error("hex string expected, got " + typeof hex2);
  if (hasHexBuiltin)
    return Uint8Array.fromHex(hex2);
  const hl = hex2.length;
  const al = hl / 2;
  if (hl % 2)
    throw new Error("hex string expected, got unpadded hex of length " + hl);
  const array = new Uint8Array(al);
  for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
    const n1 = asciiToBase16(hex2.charCodeAt(hi));
    const n2 = asciiToBase16(hex2.charCodeAt(hi + 1));
    if (n1 === void 0 || n2 === void 0) {
      const char = hex2[hi] + hex2[hi + 1];
      throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
    }
    array[ai] = n1 * 16 + n2;
  }
  return array;
}
function utf8ToBytes(str) {
  if (typeof str !== "string")
    throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(str));
}
function toBytes2(data) {
  if (typeof data === "string")
    data = utf8ToBytes(data);
  abytes(data);
  return data;
}
function concatBytes(...arrays) {
  let sum = 0;
  for (let i3 = 0; i3 < arrays.length; i3++) {
    const a4 = arrays[i3];
    abytes(a4);
    sum += a4.length;
  }
  const res = new Uint8Array(sum);
  for (let i3 = 0, pad2 = 0; i3 < arrays.length; i3++) {
    const a4 = arrays[i3];
    res.set(a4, pad2);
    pad2 += a4.length;
  }
  return res;
}
var Hash = class {
};
function createHasher(hashCons) {
  const hashC = (msg) => hashCons().update(toBytes2(msg)).digest();
  const tmp = hashCons();
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = () => hashCons();
  return hashC;
}
function randomBytes(bytesLength = 32) {
  if (crypto2 && typeof crypto2.getRandomValues === "function") {
    return crypto2.getRandomValues(new Uint8Array(bytesLength));
  }
  if (crypto2 && typeof crypto2.randomBytes === "function") {
    return Uint8Array.from(crypto2.randomBytes(bytesLength));
  }
  throw new Error("crypto.getRandomValues must be defined");
}

// node_modules/@privy-io/cross-app-connect/node_modules/@noble/curves/node_modules/@noble/hashes/esm/_md.js
function setBigUint64(view, byteOffset, value, isLE2) {
  if (typeof view.setBigUint64 === "function")
    return view.setBigUint64(byteOffset, value, isLE2);
  const _32n2 = BigInt(32);
  const _u32_max = BigInt(4294967295);
  const wh = Number(value >> _32n2 & _u32_max);
  const wl = Number(value & _u32_max);
  const h = isLE2 ? 4 : 0;
  const l = isLE2 ? 0 : 4;
  view.setUint32(byteOffset + h, wh, isLE2);
  view.setUint32(byteOffset + l, wl, isLE2);
}
function Chi(a4, b, c2) {
  return a4 & b ^ ~a4 & c2;
}
function Maj(a4, b, c2) {
  return a4 & b ^ a4 & c2 ^ b & c2;
}
var HashMD = class extends Hash {
  constructor(blockLen, outputLen, padOffset, isLE2) {
    super();
    this.finished = false;
    this.length = 0;
    this.pos = 0;
    this.destroyed = false;
    this.blockLen = blockLen;
    this.outputLen = outputLen;
    this.padOffset = padOffset;
    this.isLE = isLE2;
    this.buffer = new Uint8Array(blockLen);
    this.view = createView(this.buffer);
  }
  update(data) {
    aexists(this);
    data = toBytes2(data);
    abytes(data);
    const { view, buffer, blockLen } = this;
    const len = data.length;
    for (let pos = 0; pos < len; ) {
      const take = Math.min(blockLen - this.pos, len - pos);
      if (take === blockLen) {
        const dataView = createView(data);
        for (; blockLen <= len - pos; pos += blockLen)
          this.process(dataView, pos);
        continue;
      }
      buffer.set(data.subarray(pos, pos + take), this.pos);
      this.pos += take;
      pos += take;
      if (this.pos === blockLen) {
        this.process(view, 0);
        this.pos = 0;
      }
    }
    this.length += data.length;
    this.roundClean();
    return this;
  }
  digestInto(out) {
    aexists(this);
    aoutput(out, this);
    this.finished = true;
    const { buffer, view, blockLen, isLE: isLE2 } = this;
    let { pos } = this;
    buffer[pos++] = 128;
    clean(this.buffer.subarray(pos));
    if (this.padOffset > blockLen - pos) {
      this.process(view, 0);
      pos = 0;
    }
    for (let i3 = pos; i3 < blockLen; i3++)
      buffer[i3] = 0;
    setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE2);
    this.process(view, 0);
    const oview = createView(out);
    const len = this.outputLen;
    if (len % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const outLen = len / 4;
    const state = this.get();
    if (outLen > state.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let i3 = 0; i3 < outLen; i3++)
      oview.setUint32(4 * i3, state[i3], isLE2);
  }
  digest() {
    const { buffer, outputLen } = this;
    this.digestInto(buffer);
    const res = buffer.slice(0, outputLen);
    this.destroy();
    return res;
  }
  _cloneInto(to) {
    to || (to = new this.constructor());
    to.set(...this.get());
    const { blockLen, buffer, length, finished, destroyed, pos } = this;
    to.destroyed = destroyed;
    to.finished = finished;
    to.length = length;
    to.pos = pos;
    if (length % blockLen)
      to.buffer.set(buffer);
    return to;
  }
  clone() {
    return this._cloneInto();
  }
};
var SHA256_IV = Uint32Array.from([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]);
var SHA224_IV = Uint32Array.from([
  3238371032,
  914150663,
  812702999,
  4144912697,
  4290775857,
  1750603025,
  1694076839,
  3204075428
]);
var SHA384_IV = Uint32Array.from([
  3418070365,
  3238371032,
  1654270250,
  914150663,
  2438529370,
  812702999,
  355462360,
  4144912697,
  1731405415,
  4290775857,
  2394180231,
  1750603025,
  3675008525,
  1694076839,
  1203062813,
  3204075428
]);
var SHA512_IV = Uint32Array.from([
  1779033703,
  4089235720,
  3144134277,
  2227873595,
  1013904242,
  4271175723,
  2773480762,
  1595750129,
  1359893119,
  2917565137,
  2600822924,
  725511199,
  528734635,
  4215389547,
  1541459225,
  327033209
]);

// node_modules/@privy-io/cross-app-connect/node_modules/@noble/curves/node_modules/@noble/hashes/esm/_u64.js
var U32_MASK64 = BigInt(2 ** 32 - 1);
var _32n = BigInt(32);
function fromBig(n, le = false) {
  if (le)
    return { h: Number(n & U32_MASK64), l: Number(n >> _32n & U32_MASK64) };
  return { h: Number(n >> _32n & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0 };
}
function split(lst, le = false) {
  const len = lst.length;
  let Ah = new Uint32Array(len);
  let Al = new Uint32Array(len);
  for (let i3 = 0; i3 < len; i3++) {
    const { h, l } = fromBig(lst[i3], le);
    [Ah[i3], Al[i3]] = [h, l];
  }
  return [Ah, Al];
}
var shrSH = (h, _l, s5) => h >>> s5;
var shrSL = (h, l, s5) => h << 32 - s5 | l >>> s5;
var rotrSH = (h, l, s5) => h >>> s5 | l << 32 - s5;
var rotrSL = (h, l, s5) => h << 32 - s5 | l >>> s5;
var rotrBH = (h, l, s5) => h << 64 - s5 | l >>> s5 - 32;
var rotrBL = (h, l, s5) => h >>> s5 - 32 | l << 64 - s5;
function add(Ah, Al, Bh, Bl) {
  const l = (Al >>> 0) + (Bl >>> 0);
  return { h: Ah + Bh + (l / 2 ** 32 | 0) | 0, l: l | 0 };
}
var add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
var add3H = (low, Ah, Bh, Ch) => Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
var add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
var add4H = (low, Ah, Bh, Ch, Dh) => Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
var add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
var add5H = (low, Ah, Bh, Ch, Dh, Eh) => Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;

// node_modules/@privy-io/cross-app-connect/node_modules/@noble/curves/node_modules/@noble/hashes/esm/sha2.js
var SHA256_K = Uint32Array.from([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]);
var SHA256_W = new Uint32Array(64);
var SHA256 = class extends HashMD {
  constructor(outputLen = 32) {
    super(64, outputLen, 8, false);
    this.A = SHA256_IV[0] | 0;
    this.B = SHA256_IV[1] | 0;
    this.C = SHA256_IV[2] | 0;
    this.D = SHA256_IV[3] | 0;
    this.E = SHA256_IV[4] | 0;
    this.F = SHA256_IV[5] | 0;
    this.G = SHA256_IV[6] | 0;
    this.H = SHA256_IV[7] | 0;
  }
  get() {
    const { A, B, C, D, E, F, G, H } = this;
    return [A, B, C, D, E, F, G, H];
  }
  // prettier-ignore
  set(A, B, C, D, E, F, G, H) {
    this.A = A | 0;
    this.B = B | 0;
    this.C = C | 0;
    this.D = D | 0;
    this.E = E | 0;
    this.F = F | 0;
    this.G = G | 0;
    this.H = H | 0;
  }
  process(view, offset) {
    for (let i3 = 0; i3 < 16; i3++, offset += 4)
      SHA256_W[i3] = view.getUint32(offset, false);
    for (let i3 = 16; i3 < 64; i3++) {
      const W15 = SHA256_W[i3 - 15];
      const W2 = SHA256_W[i3 - 2];
      const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ W15 >>> 3;
      const s1 = rotr(W2, 17) ^ rotr(W2, 19) ^ W2 >>> 10;
      SHA256_W[i3] = s1 + SHA256_W[i3 - 7] + s0 + SHA256_W[i3 - 16] | 0;
    }
    let { A, B, C, D, E, F, G, H } = this;
    for (let i3 = 0; i3 < 64; i3++) {
      const sigma1 = rotr(E, 6) ^ rotr(E, 11) ^ rotr(E, 25);
      const T1 = H + sigma1 + Chi(E, F, G) + SHA256_K[i3] + SHA256_W[i3] | 0;
      const sigma0 = rotr(A, 2) ^ rotr(A, 13) ^ rotr(A, 22);
      const T2 = sigma0 + Maj(A, B, C) | 0;
      H = G;
      G = F;
      F = E;
      E = D + T1 | 0;
      D = C;
      C = B;
      B = A;
      A = T1 + T2 | 0;
    }
    A = A + this.A | 0;
    B = B + this.B | 0;
    C = C + this.C | 0;
    D = D + this.D | 0;
    E = E + this.E | 0;
    F = F + this.F | 0;
    G = G + this.G | 0;
    H = H + this.H | 0;
    this.set(A, B, C, D, E, F, G, H);
  }
  roundClean() {
    clean(SHA256_W);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0);
    clean(this.buffer);
  }
};
var SHA224 = class extends SHA256 {
  constructor() {
    super(28);
    this.A = SHA224_IV[0] | 0;
    this.B = SHA224_IV[1] | 0;
    this.C = SHA224_IV[2] | 0;
    this.D = SHA224_IV[3] | 0;
    this.E = SHA224_IV[4] | 0;
    this.F = SHA224_IV[5] | 0;
    this.G = SHA224_IV[6] | 0;
    this.H = SHA224_IV[7] | 0;
  }
};
var K512 = (() => split([
  "0x428a2f98d728ae22",
  "0x7137449123ef65cd",
  "0xb5c0fbcfec4d3b2f",
  "0xe9b5dba58189dbbc",
  "0x3956c25bf348b538",
  "0x59f111f1b605d019",
  "0x923f82a4af194f9b",
  "0xab1c5ed5da6d8118",
  "0xd807aa98a3030242",
  "0x12835b0145706fbe",
  "0x243185be4ee4b28c",
  "0x550c7dc3d5ffb4e2",
  "0x72be5d74f27b896f",
  "0x80deb1fe3b1696b1",
  "0x9bdc06a725c71235",
  "0xc19bf174cf692694",
  "0xe49b69c19ef14ad2",
  "0xefbe4786384f25e3",
  "0x0fc19dc68b8cd5b5",
  "0x240ca1cc77ac9c65",
  "0x2de92c6f592b0275",
  "0x4a7484aa6ea6e483",
  "0x5cb0a9dcbd41fbd4",
  "0x76f988da831153b5",
  "0x983e5152ee66dfab",
  "0xa831c66d2db43210",
  "0xb00327c898fb213f",
  "0xbf597fc7beef0ee4",
  "0xc6e00bf33da88fc2",
  "0xd5a79147930aa725",
  "0x06ca6351e003826f",
  "0x142929670a0e6e70",
  "0x27b70a8546d22ffc",
  "0x2e1b21385c26c926",
  "0x4d2c6dfc5ac42aed",
  "0x53380d139d95b3df",
  "0x650a73548baf63de",
  "0x766a0abb3c77b2a8",
  "0x81c2c92e47edaee6",
  "0x92722c851482353b",
  "0xa2bfe8a14cf10364",
  "0xa81a664bbc423001",
  "0xc24b8b70d0f89791",
  "0xc76c51a30654be30",
  "0xd192e819d6ef5218",
  "0xd69906245565a910",
  "0xf40e35855771202a",
  "0x106aa07032bbd1b8",
  "0x19a4c116b8d2d0c8",
  "0x1e376c085141ab53",
  "0x2748774cdf8eeb99",
  "0x34b0bcb5e19b48a8",
  "0x391c0cb3c5c95a63",
  "0x4ed8aa4ae3418acb",
  "0x5b9cca4f7763e373",
  "0x682e6ff3d6b2b8a3",
  "0x748f82ee5defb2fc",
  "0x78a5636f43172f60",
  "0x84c87814a1f0ab72",
  "0x8cc702081a6439ec",
  "0x90befffa23631e28",
  "0xa4506cebde82bde9",
  "0xbef9a3f7b2c67915",
  "0xc67178f2e372532b",
  "0xca273eceea26619c",
  "0xd186b8c721c0c207",
  "0xeada7dd6cde0eb1e",
  "0xf57d4f7fee6ed178",
  "0x06f067aa72176fba",
  "0x0a637dc5a2c898a6",
  "0x113f9804bef90dae",
  "0x1b710b35131c471b",
  "0x28db77f523047d84",
  "0x32caab7b40c72493",
  "0x3c9ebe0a15c9bebc",
  "0x431d67c49c100d4c",
  "0x4cc5d4becb3e42b6",
  "0x597f299cfc657e2a",
  "0x5fcb6fab3ad6faec",
  "0x6c44198c4a475817"
].map((n) => BigInt(n))))();
var SHA512_Kh = (() => K512[0])();
var SHA512_Kl = (() => K512[1])();
var SHA512_W_H = new Uint32Array(80);
var SHA512_W_L = new Uint32Array(80);
var SHA512 = class extends HashMD {
  constructor(outputLen = 64) {
    super(128, outputLen, 16, false);
    this.Ah = SHA512_IV[0] | 0;
    this.Al = SHA512_IV[1] | 0;
    this.Bh = SHA512_IV[2] | 0;
    this.Bl = SHA512_IV[3] | 0;
    this.Ch = SHA512_IV[4] | 0;
    this.Cl = SHA512_IV[5] | 0;
    this.Dh = SHA512_IV[6] | 0;
    this.Dl = SHA512_IV[7] | 0;
    this.Eh = SHA512_IV[8] | 0;
    this.El = SHA512_IV[9] | 0;
    this.Fh = SHA512_IV[10] | 0;
    this.Fl = SHA512_IV[11] | 0;
    this.Gh = SHA512_IV[12] | 0;
    this.Gl = SHA512_IV[13] | 0;
    this.Hh = SHA512_IV[14] | 0;
    this.Hl = SHA512_IV[15] | 0;
  }
  // prettier-ignore
  get() {
    const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
    return [Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl];
  }
  // prettier-ignore
  set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
    this.Ah = Ah | 0;
    this.Al = Al | 0;
    this.Bh = Bh | 0;
    this.Bl = Bl | 0;
    this.Ch = Ch | 0;
    this.Cl = Cl | 0;
    this.Dh = Dh | 0;
    this.Dl = Dl | 0;
    this.Eh = Eh | 0;
    this.El = El | 0;
    this.Fh = Fh | 0;
    this.Fl = Fl | 0;
    this.Gh = Gh | 0;
    this.Gl = Gl | 0;
    this.Hh = Hh | 0;
    this.Hl = Hl | 0;
  }
  process(view, offset) {
    for (let i3 = 0; i3 < 16; i3++, offset += 4) {
      SHA512_W_H[i3] = view.getUint32(offset);
      SHA512_W_L[i3] = view.getUint32(offset += 4);
    }
    for (let i3 = 16; i3 < 80; i3++) {
      const W15h = SHA512_W_H[i3 - 15] | 0;
      const W15l = SHA512_W_L[i3 - 15] | 0;
      const s0h = rotrSH(W15h, W15l, 1) ^ rotrSH(W15h, W15l, 8) ^ shrSH(W15h, W15l, 7);
      const s0l = rotrSL(W15h, W15l, 1) ^ rotrSL(W15h, W15l, 8) ^ shrSL(W15h, W15l, 7);
      const W2h = SHA512_W_H[i3 - 2] | 0;
      const W2l = SHA512_W_L[i3 - 2] | 0;
      const s1h = rotrSH(W2h, W2l, 19) ^ rotrBH(W2h, W2l, 61) ^ shrSH(W2h, W2l, 6);
      const s1l = rotrSL(W2h, W2l, 19) ^ rotrBL(W2h, W2l, 61) ^ shrSL(W2h, W2l, 6);
      const SUMl = add4L(s0l, s1l, SHA512_W_L[i3 - 7], SHA512_W_L[i3 - 16]);
      const SUMh = add4H(SUMl, s0h, s1h, SHA512_W_H[i3 - 7], SHA512_W_H[i3 - 16]);
      SHA512_W_H[i3] = SUMh | 0;
      SHA512_W_L[i3] = SUMl | 0;
    }
    let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
    for (let i3 = 0; i3 < 80; i3++) {
      const sigma1h = rotrSH(Eh, El, 14) ^ rotrSH(Eh, El, 18) ^ rotrBH(Eh, El, 41);
      const sigma1l = rotrSL(Eh, El, 14) ^ rotrSL(Eh, El, 18) ^ rotrBL(Eh, El, 41);
      const CHIh = Eh & Fh ^ ~Eh & Gh;
      const CHIl = El & Fl ^ ~El & Gl;
      const T1ll = add5L(Hl, sigma1l, CHIl, SHA512_Kl[i3], SHA512_W_L[i3]);
      const T1h = add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i3], SHA512_W_H[i3]);
      const T1l = T1ll | 0;
      const sigma0h = rotrSH(Ah, Al, 28) ^ rotrBH(Ah, Al, 34) ^ rotrBH(Ah, Al, 39);
      const sigma0l = rotrSL(Ah, Al, 28) ^ rotrBL(Ah, Al, 34) ^ rotrBL(Ah, Al, 39);
      const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
      const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
      Hh = Gh | 0;
      Hl = Gl | 0;
      Gh = Fh | 0;
      Gl = Fl | 0;
      Fh = Eh | 0;
      Fl = El | 0;
      ({ h: Eh, l: El } = add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
      Dh = Ch | 0;
      Dl = Cl | 0;
      Ch = Bh | 0;
      Cl = Bl | 0;
      Bh = Ah | 0;
      Bl = Al | 0;
      const All = add3L(T1l, sigma0l, MAJl);
      Ah = add3H(All, T1h, sigma0h, MAJh);
      Al = All | 0;
    }
    ({ h: Ah, l: Al } = add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
    ({ h: Bh, l: Bl } = add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
    ({ h: Ch, l: Cl } = add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
    ({ h: Dh, l: Dl } = add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
    ({ h: Eh, l: El } = add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
    ({ h: Fh, l: Fl } = add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
    ({ h: Gh, l: Gl } = add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
    ({ h: Hh, l: Hl } = add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
    this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
  }
  roundClean() {
    clean(SHA512_W_H, SHA512_W_L);
  }
  destroy() {
    clean(this.buffer);
    this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
};
var SHA384 = class extends SHA512 {
  constructor() {
    super(48);
    this.Ah = SHA384_IV[0] | 0;
    this.Al = SHA384_IV[1] | 0;
    this.Bh = SHA384_IV[2] | 0;
    this.Bl = SHA384_IV[3] | 0;
    this.Ch = SHA384_IV[4] | 0;
    this.Cl = SHA384_IV[5] | 0;
    this.Dh = SHA384_IV[6] | 0;
    this.Dl = SHA384_IV[7] | 0;
    this.Eh = SHA384_IV[8] | 0;
    this.El = SHA384_IV[9] | 0;
    this.Fh = SHA384_IV[10] | 0;
    this.Fl = SHA384_IV[11] | 0;
    this.Gh = SHA384_IV[12] | 0;
    this.Gl = SHA384_IV[13] | 0;
    this.Hh = SHA384_IV[14] | 0;
    this.Hl = SHA384_IV[15] | 0;
  }
};
var T224_IV = Uint32Array.from([
  2352822216,
  424955298,
  1944164710,
  2312950998,
  502970286,
  855612546,
  1738396948,
  1479516111,
  258812777,
  2077511080,
  2011393907,
  79989058,
  1067287976,
  1780299464,
  286451373,
  2446758561
]);
var T256_IV = Uint32Array.from([
  573645204,
  4230739756,
  2673172387,
  3360449730,
  596883563,
  1867755857,
  2520282905,
  1497426621,
  2519219938,
  2827943907,
  3193839141,
  1401305490,
  721525244,
  746961066,
  246885852,
  2177182882
]);
var SHA512_224 = class extends SHA512 {
  constructor() {
    super(28);
    this.Ah = T224_IV[0] | 0;
    this.Al = T224_IV[1] | 0;
    this.Bh = T224_IV[2] | 0;
    this.Bl = T224_IV[3] | 0;
    this.Ch = T224_IV[4] | 0;
    this.Cl = T224_IV[5] | 0;
    this.Dh = T224_IV[6] | 0;
    this.Dl = T224_IV[7] | 0;
    this.Eh = T224_IV[8] | 0;
    this.El = T224_IV[9] | 0;
    this.Fh = T224_IV[10] | 0;
    this.Fl = T224_IV[11] | 0;
    this.Gh = T224_IV[12] | 0;
    this.Gl = T224_IV[13] | 0;
    this.Hh = T224_IV[14] | 0;
    this.Hl = T224_IV[15] | 0;
  }
};
var SHA512_256 = class extends SHA512 {
  constructor() {
    super(32);
    this.Ah = T256_IV[0] | 0;
    this.Al = T256_IV[1] | 0;
    this.Bh = T256_IV[2] | 0;
    this.Bl = T256_IV[3] | 0;
    this.Ch = T256_IV[4] | 0;
    this.Cl = T256_IV[5] | 0;
    this.Dh = T256_IV[6] | 0;
    this.Dl = T256_IV[7] | 0;
    this.Eh = T256_IV[8] | 0;
    this.El = T256_IV[9] | 0;
    this.Fh = T256_IV[10] | 0;
    this.Fl = T256_IV[11] | 0;
    this.Gh = T256_IV[12] | 0;
    this.Gl = T256_IV[13] | 0;
    this.Hh = T256_IV[14] | 0;
    this.Hl = T256_IV[15] | 0;
  }
};
var sha256 = createHasher(() => new SHA256());
var sha224 = createHasher(() => new SHA224());
var sha512 = createHasher(() => new SHA512());
var sha384 = createHasher(() => new SHA384());
var sha512_256 = createHasher(() => new SHA512_256());
var sha512_224 = createHasher(() => new SHA512_224());

// node_modules/@privy-io/cross-app-connect/node_modules/@noble/curves/node_modules/@noble/hashes/esm/hmac.js
var HMAC = class extends Hash {
  constructor(hash, _key) {
    super();
    this.finished = false;
    this.destroyed = false;
    ahash(hash);
    const key = toBytes2(_key);
    this.iHash = hash.create();
    if (typeof this.iHash.update !== "function")
      throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen;
    this.outputLen = this.iHash.outputLen;
    const blockLen = this.blockLen;
    const pad2 = new Uint8Array(blockLen);
    pad2.set(key.length > blockLen ? hash.create().update(key).digest() : key);
    for (let i3 = 0; i3 < pad2.length; i3++)
      pad2[i3] ^= 54;
    this.iHash.update(pad2);
    this.oHash = hash.create();
    for (let i3 = 0; i3 < pad2.length; i3++)
      pad2[i3] ^= 54 ^ 92;
    this.oHash.update(pad2);
    clean(pad2);
  }
  update(buf) {
    aexists(this);
    this.iHash.update(buf);
    return this;
  }
  digestInto(out) {
    aexists(this);
    abytes(out, this.outputLen);
    this.finished = true;
    this.iHash.digestInto(out);
    this.oHash.update(out);
    this.oHash.digestInto(out);
    this.destroy();
  }
  digest() {
    const out = new Uint8Array(this.oHash.outputLen);
    this.digestInto(out);
    return out;
  }
  _cloneInto(to) {
    to || (to = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
    to = to;
    to.finished = finished;
    to.destroyed = destroyed;
    to.blockLen = blockLen;
    to.outputLen = outputLen;
    to.oHash = oHash._cloneInto(to.oHash);
    to.iHash = iHash._cloneInto(to.iHash);
    return to;
  }
  clone() {
    return this._cloneInto();
  }
  destroy() {
    this.destroyed = true;
    this.oHash.destroy();
    this.iHash.destroy();
  }
};
var hmac = (hash, key, message) => new HMAC(hash, key).update(message).digest();
hmac.create = (hash, key) => new HMAC(hash, key);

// node_modules/@privy-io/cross-app-connect/node_modules/@noble/curves/esm/utils.js
var _0n = BigInt(0);
var _1n = BigInt(1);
function _abool2(value, title = "") {
  if (typeof value !== "boolean") {
    const prefix = title && `"${title}"`;
    throw new Error(prefix + "expected boolean, got type=" + typeof value);
  }
  return value;
}
function _abytes2(value, length, title = "") {
  const bytes = isBytes(value);
  const len = value == null ? void 0 : value.length;
  const needsLen = length !== void 0;
  if (!bytes || needsLen && len !== length) {
    const prefix = title && `"${title}" `;
    const ofLen = needsLen ? ` of length ${length}` : "";
    const got = bytes ? `length=${len}` : `type=${typeof value}`;
    throw new Error(prefix + "expected Uint8Array" + ofLen + ", got " + got);
  }
  return value;
}
function numberToHexUnpadded(num2) {
  const hex2 = num2.toString(16);
  return hex2.length & 1 ? "0" + hex2 : hex2;
}
function hexToNumber2(hex2) {
  if (typeof hex2 !== "string")
    throw new Error("hex string expected, got " + typeof hex2);
  return hex2 === "" ? _0n : BigInt("0x" + hex2);
}
function bytesToNumberBE(bytes) {
  return hexToNumber2(bytesToHex2(bytes));
}
function bytesToNumberLE(bytes) {
  abytes(bytes);
  return hexToNumber2(bytesToHex2(Uint8Array.from(bytes).reverse()));
}
function numberToBytesBE(n, len) {
  return hexToBytes(n.toString(16).padStart(len * 2, "0"));
}
function numberToBytesLE(n, len) {
  return numberToBytesBE(n, len).reverse();
}
function ensureBytes(title, hex2, expectedLength) {
  let res;
  if (typeof hex2 === "string") {
    try {
      res = hexToBytes(hex2);
    } catch (e3) {
      throw new Error(title + " must be hex string or Uint8Array, cause: " + e3);
    }
  } else if (isBytes(hex2)) {
    res = Uint8Array.from(hex2);
  } else {
    throw new Error(title + " must be hex string or Uint8Array");
  }
  const len = res.length;
  if (typeof expectedLength === "number" && len !== expectedLength)
    throw new Error(title + " of length " + expectedLength + " expected, got " + len);
  return res;
}
var isPosBig = (n) => typeof n === "bigint" && _0n <= n;
function inRange(n, min, max2) {
  return isPosBig(n) && isPosBig(min) && isPosBig(max2) && min <= n && n < max2;
}
function aInRange(title, n, min, max2) {
  if (!inRange(n, min, max2))
    throw new Error("expected valid " + title + ": " + min + " <= n < " + max2 + ", got " + n);
}
function bitLen(n) {
  let len;
  for (len = 0; n > _0n; n >>= _1n, len += 1)
    ;
  return len;
}
var bitMask = (n) => (_1n << BigInt(n)) - _1n;
function createHmacDrbg(hashLen, qByteLen, hmacFn) {
  if (typeof hashLen !== "number" || hashLen < 2)
    throw new Error("hashLen must be a number");
  if (typeof qByteLen !== "number" || qByteLen < 2)
    throw new Error("qByteLen must be a number");
  if (typeof hmacFn !== "function")
    throw new Error("hmacFn must be a function");
  const u8n = (len) => new Uint8Array(len);
  const u8of = (byte) => Uint8Array.of(byte);
  let v = u8n(hashLen);
  let k = u8n(hashLen);
  let i3 = 0;
  const reset = () => {
    v.fill(1);
    k.fill(0);
    i3 = 0;
  };
  const h = (...b) => hmacFn(k, v, ...b);
  const reseed = (seed = u8n(0)) => {
    k = h(u8of(0), seed);
    v = h();
    if (seed.length === 0)
      return;
    k = h(u8of(1), seed);
    v = h();
  };
  const gen = () => {
    if (i3++ >= 1e3)
      throw new Error("drbg: tried 1000 values");
    let len = 0;
    const out = [];
    while (len < qByteLen) {
      v = h();
      const sl = v.slice();
      out.push(sl);
      len += v.length;
    }
    return concatBytes(...out);
  };
  const genUntil = (seed, pred) => {
    reset();
    reseed(seed);
    let res = void 0;
    while (!(res = pred(gen())))
      reseed();
    reset();
    return res;
  };
  return genUntil;
}
function isHash(val) {
  return typeof val === "function" && Number.isSafeInteger(val.outputLen);
}
function _validateObject(object, fields, optFields = {}) {
  if (!object || typeof object !== "object")
    throw new Error("expected valid options object");
  function checkField(fieldName, expectedType, isOpt) {
    const val = object[fieldName];
    if (isOpt && val === void 0)
      return;
    const current = typeof val;
    if (current !== expectedType || val === null)
      throw new Error(`param "${fieldName}" is invalid: expected ${expectedType}, got ${current}`);
  }
  Object.entries(fields).forEach(([k, v]) => checkField(k, v, false));
  Object.entries(optFields).forEach(([k, v]) => checkField(k, v, true));
}
function memoized(fn) {
  const map = /* @__PURE__ */ new WeakMap();
  return (arg, ...args) => {
    const val = map.get(arg);
    if (val !== void 0)
      return val;
    const computed = fn(arg, ...args);
    map.set(arg, computed);
    return computed;
  };
}

// node_modules/@privy-io/cross-app-connect/node_modules/@noble/curves/esm/abstract/modular.js
var _0n2 = BigInt(0);
var _1n2 = BigInt(1);
var _2n = BigInt(2);
var _3n = BigInt(3);
var _4n = BigInt(4);
var _5n = BigInt(5);
var _7n = BigInt(7);
var _8n = BigInt(8);
var _9n = BigInt(9);
var _16n = BigInt(16);
function mod(a4, b) {
  const result = a4 % b;
  return result >= _0n2 ? result : b + result;
}
function pow2(x, power, modulo) {
  let res = x;
  while (power-- > _0n2) {
    res *= res;
    res %= modulo;
  }
  return res;
}
function invert(number, modulo) {
  if (number === _0n2)
    throw new Error("invert: expected non-zero number");
  if (modulo <= _0n2)
    throw new Error("invert: expected positive modulus, got " + modulo);
  let a4 = mod(number, modulo);
  let b = modulo;
  let x = _0n2, y = _1n2, u = _1n2, v = _0n2;
  while (a4 !== _0n2) {
    const q = b / a4;
    const r4 = b % a4;
    const m = x - u * q;
    const n = y - v * q;
    b = a4, a4 = r4, x = u, y = v, u = m, v = n;
  }
  const gcd2 = b;
  if (gcd2 !== _1n2)
    throw new Error("invert: does not exist");
  return mod(x, modulo);
}
function assertIsSquare(Fp, root, n) {
  if (!Fp.eql(Fp.sqr(root), n))
    throw new Error("Cannot find square root");
}
function sqrt3mod4(Fp, n) {
  const p1div4 = (Fp.ORDER + _1n2) / _4n;
  const root = Fp.pow(n, p1div4);
  assertIsSquare(Fp, root, n);
  return root;
}
function sqrt5mod8(Fp, n) {
  const p5div8 = (Fp.ORDER - _5n) / _8n;
  const n2 = Fp.mul(n, _2n);
  const v = Fp.pow(n2, p5div8);
  const nv = Fp.mul(n, v);
  const i3 = Fp.mul(Fp.mul(nv, _2n), v);
  const root = Fp.mul(nv, Fp.sub(i3, Fp.ONE));
  assertIsSquare(Fp, root, n);
  return root;
}
function sqrt9mod16(P) {
  const Fp_ = Field(P);
  const tn = tonelliShanks(P);
  const c1 = tn(Fp_, Fp_.neg(Fp_.ONE));
  const c2 = tn(Fp_, c1);
  const c3 = tn(Fp_, Fp_.neg(c1));
  const c4 = (P + _7n) / _16n;
  return (Fp, n) => {
    let tv1 = Fp.pow(n, c4);
    let tv2 = Fp.mul(tv1, c1);
    const tv3 = Fp.mul(tv1, c2);
    const tv4 = Fp.mul(tv1, c3);
    const e1 = Fp.eql(Fp.sqr(tv2), n);
    const e22 = Fp.eql(Fp.sqr(tv3), n);
    tv1 = Fp.cmov(tv1, tv2, e1);
    tv2 = Fp.cmov(tv4, tv3, e22);
    const e3 = Fp.eql(Fp.sqr(tv2), n);
    const root = Fp.cmov(tv1, tv2, e3);
    assertIsSquare(Fp, root, n);
    return root;
  };
}
function tonelliShanks(P) {
  if (P < _3n)
    throw new Error("sqrt is not defined for small field");
  let Q = P - _1n2;
  let S = 0;
  while (Q % _2n === _0n2) {
    Q /= _2n;
    S++;
  }
  let Z = _2n;
  const _Fp = Field(P);
  while (FpLegendre(_Fp, Z) === 1) {
    if (Z++ > 1e3)
      throw new Error("Cannot find square root: probably non-prime P");
  }
  if (S === 1)
    return sqrt3mod4;
  let cc = _Fp.pow(Z, Q);
  const Q1div2 = (Q + _1n2) / _2n;
  return function tonelliSlow(Fp, n) {
    if (Fp.is0(n))
      return n;
    if (FpLegendre(Fp, n) !== 1)
      throw new Error("Cannot find square root");
    let M = S;
    let c2 = Fp.mul(Fp.ONE, cc);
    let t4 = Fp.pow(n, Q);
    let R = Fp.pow(n, Q1div2);
    while (!Fp.eql(t4, Fp.ONE)) {
      if (Fp.is0(t4))
        return Fp.ZERO;
      let i3 = 1;
      let t_tmp = Fp.sqr(t4);
      while (!Fp.eql(t_tmp, Fp.ONE)) {
        i3++;
        t_tmp = Fp.sqr(t_tmp);
        if (i3 === M)
          throw new Error("Cannot find square root");
      }
      const exponent = _1n2 << BigInt(M - i3 - 1);
      const b = Fp.pow(c2, exponent);
      M = i3;
      c2 = Fp.sqr(b);
      t4 = Fp.mul(t4, c2);
      R = Fp.mul(R, b);
    }
    return R;
  };
}
function FpSqrt(P) {
  if (P % _4n === _3n)
    return sqrt3mod4;
  if (P % _8n === _5n)
    return sqrt5mod8;
  if (P % _16n === _9n)
    return sqrt9mod16(P);
  return tonelliShanks(P);
}
var FIELD_FIELDS = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function validateField(field) {
  const initial = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "number",
    BITS: "number"
  };
  const opts = FIELD_FIELDS.reduce((map, val) => {
    map[val] = "function";
    return map;
  }, initial);
  _validateObject(field, opts);
  return field;
}
function FpPow(Fp, num2, power) {
  if (power < _0n2)
    throw new Error("invalid exponent, negatives unsupported");
  if (power === _0n2)
    return Fp.ONE;
  if (power === _1n2)
    return num2;
  let p = Fp.ONE;
  let d2 = num2;
  while (power > _0n2) {
    if (power & _1n2)
      p = Fp.mul(p, d2);
    d2 = Fp.sqr(d2);
    power >>= _1n2;
  }
  return p;
}
function FpInvertBatch(Fp, nums, passZero = false) {
  const inverted = new Array(nums.length).fill(passZero ? Fp.ZERO : void 0);
  const multipliedAcc = nums.reduce((acc, num2, i3) => {
    if (Fp.is0(num2))
      return acc;
    inverted[i3] = acc;
    return Fp.mul(acc, num2);
  }, Fp.ONE);
  const invertedAcc = Fp.inv(multipliedAcc);
  nums.reduceRight((acc, num2, i3) => {
    if (Fp.is0(num2))
      return acc;
    inverted[i3] = Fp.mul(acc, inverted[i3]);
    return Fp.mul(acc, num2);
  }, invertedAcc);
  return inverted;
}
function FpLegendre(Fp, n) {
  const p1mod2 = (Fp.ORDER - _1n2) / _2n;
  const powered = Fp.pow(n, p1mod2);
  const yes = Fp.eql(powered, Fp.ONE);
  const zero = Fp.eql(powered, Fp.ZERO);
  const no = Fp.eql(powered, Fp.neg(Fp.ONE));
  if (!yes && !zero && !no)
    throw new Error("invalid Legendre symbol result");
  return yes ? 1 : zero ? 0 : -1;
}
function nLength(n, nBitLength) {
  if (nBitLength !== void 0)
    anumber(nBitLength);
  const _nBitLength = nBitLength !== void 0 ? nBitLength : n.toString(2).length;
  const nByteLength = Math.ceil(_nBitLength / 8);
  return { nBitLength: _nBitLength, nByteLength };
}
function Field(ORDER, bitLenOrOpts, isLE2 = false, opts = {}) {
  if (ORDER <= _0n2)
    throw new Error("invalid field: expected ORDER > 0, got " + ORDER);
  let _nbitLength = void 0;
  let _sqrt = void 0;
  let modFromBytes = false;
  let allowedLengths = void 0;
  if (typeof bitLenOrOpts === "object" && bitLenOrOpts != null) {
    if (opts.sqrt || isLE2)
      throw new Error("cannot specify opts in two arguments");
    const _opts = bitLenOrOpts;
    if (_opts.BITS)
      _nbitLength = _opts.BITS;
    if (_opts.sqrt)
      _sqrt = _opts.sqrt;
    if (typeof _opts.isLE === "boolean")
      isLE2 = _opts.isLE;
    if (typeof _opts.modFromBytes === "boolean")
      modFromBytes = _opts.modFromBytes;
    allowedLengths = _opts.allowedLengths;
  } else {
    if (typeof bitLenOrOpts === "number")
      _nbitLength = bitLenOrOpts;
    if (opts.sqrt)
      _sqrt = opts.sqrt;
  }
  const { nBitLength: BITS, nByteLength: BYTES } = nLength(ORDER, _nbitLength);
  if (BYTES > 2048)
    throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let sqrtP;
  const f = Object.freeze({
    ORDER,
    isLE: isLE2,
    BITS,
    BYTES,
    MASK: bitMask(BITS),
    ZERO: _0n2,
    ONE: _1n2,
    allowedLengths,
    create: (num2) => mod(num2, ORDER),
    isValid: (num2) => {
      if (typeof num2 !== "bigint")
        throw new Error("invalid field element: expected bigint, got " + typeof num2);
      return _0n2 <= num2 && num2 < ORDER;
    },
    is0: (num2) => num2 === _0n2,
    // is valid and invertible
    isValidNot0: (num2) => !f.is0(num2) && f.isValid(num2),
    isOdd: (num2) => (num2 & _1n2) === _1n2,
    neg: (num2) => mod(-num2, ORDER),
    eql: (lhs, rhs) => lhs === rhs,
    sqr: (num2) => mod(num2 * num2, ORDER),
    add: (lhs, rhs) => mod(lhs + rhs, ORDER),
    sub: (lhs, rhs) => mod(lhs - rhs, ORDER),
    mul: (lhs, rhs) => mod(lhs * rhs, ORDER),
    pow: (num2, power) => FpPow(f, num2, power),
    div: (lhs, rhs) => mod(lhs * invert(rhs, ORDER), ORDER),
    // Same as above, but doesn't normalize
    sqrN: (num2) => num2 * num2,
    addN: (lhs, rhs) => lhs + rhs,
    subN: (lhs, rhs) => lhs - rhs,
    mulN: (lhs, rhs) => lhs * rhs,
    inv: (num2) => invert(num2, ORDER),
    sqrt: _sqrt || ((n) => {
      if (!sqrtP)
        sqrtP = FpSqrt(ORDER);
      return sqrtP(f, n);
    }),
    toBytes: (num2) => isLE2 ? numberToBytesLE(num2, BYTES) : numberToBytesBE(num2, BYTES),
    fromBytes: (bytes, skipValidation = true) => {
      if (allowedLengths) {
        if (!allowedLengths.includes(bytes.length) || bytes.length > BYTES) {
          throw new Error("Field.fromBytes: expected " + allowedLengths + " bytes, got " + bytes.length);
        }
        const padded = new Uint8Array(BYTES);
        padded.set(bytes, isLE2 ? 0 : padded.length - bytes.length);
        bytes = padded;
      }
      if (bytes.length !== BYTES)
        throw new Error("Field.fromBytes: expected " + BYTES + " bytes, got " + bytes.length);
      let scalar = isLE2 ? bytesToNumberLE(bytes) : bytesToNumberBE(bytes);
      if (modFromBytes)
        scalar = mod(scalar, ORDER);
      if (!skipValidation) {
        if (!f.isValid(scalar))
          throw new Error("invalid field element: outside of range 0..ORDER");
      }
      return scalar;
    },
    // TODO: we don't need it here, move out to separate fn
    invertBatch: (lst) => FpInvertBatch(f, lst),
    // We can't move this out because Fp6, Fp12 implement it
    // and it's unclear what to return in there.
    cmov: (a4, b, c2) => c2 ? b : a4
  });
  return Object.freeze(f);
}
function getFieldBytesLength(fieldOrder) {
  if (typeof fieldOrder !== "bigint")
    throw new Error("field order must be bigint");
  const bitLength = fieldOrder.toString(2).length;
  return Math.ceil(bitLength / 8);
}
function getMinHashLength(fieldOrder) {
  const length = getFieldBytesLength(fieldOrder);
  return length + Math.ceil(length / 2);
}
function mapHashToField(key, fieldOrder, isLE2 = false) {
  const len = key.length;
  const fieldLen = getFieldBytesLength(fieldOrder);
  const minLen = getMinHashLength(fieldOrder);
  if (len < 16 || len < minLen || len > 1024)
    throw new Error("expected " + minLen + "-1024 bytes of input, got " + len);
  const num2 = isLE2 ? bytesToNumberLE(key) : bytesToNumberBE(key);
  const reduced = mod(num2, fieldOrder - _1n2) + _1n2;
  return isLE2 ? numberToBytesLE(reduced, fieldLen) : numberToBytesBE(reduced, fieldLen);
}

// node_modules/@privy-io/cross-app-connect/node_modules/@noble/curves/esm/abstract/curve.js
var _0n3 = BigInt(0);
var _1n3 = BigInt(1);
function negateCt(condition, item) {
  const neg = item.negate();
  return condition ? neg : item;
}
function normalizeZ(c2, points) {
  const invertedZs = FpInvertBatch(c2.Fp, points.map((p) => p.Z));
  return points.map((p, i3) => c2.fromAffine(p.toAffine(invertedZs[i3])));
}
function validateW(W, bits2) {
  if (!Number.isSafeInteger(W) || W <= 0 || W > bits2)
    throw new Error("invalid window size, expected [1.." + bits2 + "], got W=" + W);
}
function calcWOpts(W, scalarBits) {
  validateW(W, scalarBits);
  const windows = Math.ceil(scalarBits / W) + 1;
  const windowSize = 2 ** (W - 1);
  const maxNumber = 2 ** W;
  const mask = bitMask(W);
  const shiftBy = BigInt(W);
  return { windows, windowSize, mask, maxNumber, shiftBy };
}
function calcOffsets(n, window2, wOpts) {
  const { windowSize, mask, maxNumber, shiftBy } = wOpts;
  let wbits2 = Number(n & mask);
  let nextN = n >> shiftBy;
  if (wbits2 > windowSize) {
    wbits2 -= maxNumber;
    nextN += _1n3;
  }
  const offsetStart = window2 * windowSize;
  const offset = offsetStart + Math.abs(wbits2) - 1;
  const isZero = wbits2 === 0;
  const isNeg = wbits2 < 0;
  const isNegF = window2 % 2 !== 0;
  const offsetF = offsetStart;
  return { nextN, offset, isZero, isNeg, isNegF, offsetF };
}
function validateMSMPoints(points, c2) {
  if (!Array.isArray(points))
    throw new Error("array expected");
  points.forEach((p, i3) => {
    if (!(p instanceof c2))
      throw new Error("invalid point at index " + i3);
  });
}
function validateMSMScalars(scalars, field) {
  if (!Array.isArray(scalars))
    throw new Error("array of scalars expected");
  scalars.forEach((s5, i3) => {
    if (!field.isValid(s5))
      throw new Error("invalid scalar at index " + i3);
  });
}
var pointPrecomputes = /* @__PURE__ */ new WeakMap();
var pointWindowSizes = /* @__PURE__ */ new WeakMap();
function getW(P) {
  return pointWindowSizes.get(P) || 1;
}
function assert0(n) {
  if (n !== _0n3)
    throw new Error("invalid wNAF");
}
var wNAF = class {
  // Parametrized with a given Point class (not individual point)
  constructor(Point, bits2) {
    this.BASE = Point.BASE;
    this.ZERO = Point.ZERO;
    this.Fn = Point.Fn;
    this.bits = bits2;
  }
  // non-const time multiplication ladder
  _unsafeLadder(elm, n, p = this.ZERO) {
    let d2 = elm;
    while (n > _0n3) {
      if (n & _1n3)
        p = p.add(d2);
      d2 = d2.double();
      n >>= _1n3;
    }
    return p;
  }
  /**
   * Creates a wNAF precomputation window. Used for caching.
   * Default window size is set by `utils.precompute()` and is equal to 8.
   * Number of precomputed points depends on the curve size:
   * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
   * - 𝑊 is the window size
   * - 𝑛 is the bitlength of the curve order.
   * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
   * @param point Point instance
   * @param W window size
   * @returns precomputed point tables flattened to a single array
   */
  precomputeWindow(point, W) {
    const { windows, windowSize } = calcWOpts(W, this.bits);
    const points = [];
    let p = point;
    let base = p;
    for (let window2 = 0; window2 < windows; window2++) {
      base = p;
      points.push(base);
      for (let i3 = 1; i3 < windowSize; i3++) {
        base = base.add(p);
        points.push(base);
      }
      p = base.double();
    }
    return points;
  }
  /**
   * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
   * More compact implementation:
   * https://github.com/paulmillr/noble-secp256k1/blob/47cb1669b6e506ad66b35fe7d76132ae97465da2/index.ts#L502-L541
   * @returns real and fake (for const-time) points
   */
  wNAF(W, precomputes, n) {
    if (!this.Fn.isValid(n))
      throw new Error("invalid scalar");
    let p = this.ZERO;
    let f = this.BASE;
    const wo = calcWOpts(W, this.bits);
    for (let window2 = 0; window2 < wo.windows; window2++) {
      const { nextN, offset, isZero, isNeg, isNegF, offsetF } = calcOffsets(n, window2, wo);
      n = nextN;
      if (isZero) {
        f = f.add(negateCt(isNegF, precomputes[offsetF]));
      } else {
        p = p.add(negateCt(isNeg, precomputes[offset]));
      }
    }
    assert0(n);
    return { p, f };
  }
  /**
   * Implements ec unsafe (non const-time) multiplication using precomputed tables and w-ary non-adjacent form.
   * @param acc accumulator point to add result of multiplication
   * @returns point
   */
  wNAFUnsafe(W, precomputes, n, acc = this.ZERO) {
    const wo = calcWOpts(W, this.bits);
    for (let window2 = 0; window2 < wo.windows; window2++) {
      if (n === _0n3)
        break;
      const { nextN, offset, isZero, isNeg } = calcOffsets(n, window2, wo);
      n = nextN;
      if (isZero) {
        continue;
      } else {
        const item = precomputes[offset];
        acc = acc.add(isNeg ? item.negate() : item);
      }
    }
    assert0(n);
    return acc;
  }
  getPrecomputes(W, point, transform) {
    let comp = pointPrecomputes.get(point);
    if (!comp) {
      comp = this.precomputeWindow(point, W);
      if (W !== 1) {
        if (typeof transform === "function")
          comp = transform(comp);
        pointPrecomputes.set(point, comp);
      }
    }
    return comp;
  }
  cached(point, scalar, transform) {
    const W = getW(point);
    return this.wNAF(W, this.getPrecomputes(W, point, transform), scalar);
  }
  unsafe(point, scalar, transform, prev) {
    const W = getW(point);
    if (W === 1)
      return this._unsafeLadder(point, scalar, prev);
    return this.wNAFUnsafe(W, this.getPrecomputes(W, point, transform), scalar, prev);
  }
  // We calculate precomputes for elliptic curve point multiplication
  // using windowed method. This specifies window size and
  // stores precomputed values. Usually only base point would be precomputed.
  createCache(P, W) {
    validateW(W, this.bits);
    pointWindowSizes.set(P, W);
    pointPrecomputes.delete(P);
  }
  hasCache(elm) {
    return getW(elm) !== 1;
  }
};
function mulEndoUnsafe(Point, point, k1, k2) {
  let acc = point;
  let p1 = Point.ZERO;
  let p2 = Point.ZERO;
  while (k1 > _0n3 || k2 > _0n3) {
    if (k1 & _1n3)
      p1 = p1.add(acc);
    if (k2 & _1n3)
      p2 = p2.add(acc);
    acc = acc.double();
    k1 >>= _1n3;
    k2 >>= _1n3;
  }
  return { p1, p2 };
}
function pippenger(c2, fieldN, points, scalars) {
  validateMSMPoints(points, c2);
  validateMSMScalars(scalars, fieldN);
  const plength = points.length;
  const slength = scalars.length;
  if (plength !== slength)
    throw new Error("arrays of points and scalars must have equal length");
  const zero = c2.ZERO;
  const wbits2 = bitLen(BigInt(plength));
  let windowSize = 1;
  if (wbits2 > 12)
    windowSize = wbits2 - 3;
  else if (wbits2 > 4)
    windowSize = wbits2 - 2;
  else if (wbits2 > 0)
    windowSize = 2;
  const MASK = bitMask(windowSize);
  const buckets = new Array(Number(MASK) + 1).fill(zero);
  const lastBits = Math.floor((fieldN.BITS - 1) / windowSize) * windowSize;
  let sum = zero;
  for (let i3 = lastBits; i3 >= 0; i3 -= windowSize) {
    buckets.fill(zero);
    for (let j = 0; j < slength; j++) {
      const scalar = scalars[j];
      const wbits3 = Number(scalar >> BigInt(i3) & MASK);
      buckets[wbits3] = buckets[wbits3].add(points[j]);
    }
    let resI = zero;
    for (let j = buckets.length - 1, sumI = zero; j > 0; j--) {
      sumI = sumI.add(buckets[j]);
      resI = resI.add(sumI);
    }
    sum = sum.add(resI);
    if (i3 !== 0)
      for (let j = 0; j < windowSize; j++)
        sum = sum.double();
  }
  return sum;
}
function createField(order, field, isLE2) {
  if (field) {
    if (field.ORDER !== order)
      throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
    validateField(field);
    return field;
  } else {
    return Field(order, { isLE: isLE2 });
  }
}
function _createCurveFields(type, CURVE, curveOpts = {}, FpFnLE) {
  if (FpFnLE === void 0)
    FpFnLE = type === "edwards";
  if (!CURVE || typeof CURVE !== "object")
    throw new Error(`expected valid ${type} CURVE object`);
  for (const p of ["p", "n", "h"]) {
    const val = CURVE[p];
    if (!(typeof val === "bigint" && val > _0n3))
      throw new Error(`CURVE.${p} must be positive bigint`);
  }
  const Fp = createField(CURVE.p, curveOpts.Fp, FpFnLE);
  const Fn = createField(CURVE.n, curveOpts.Fn, FpFnLE);
  const _b2 = type === "weierstrass" ? "b" : "d";
  const params = ["Gx", "Gy", "a", _b2];
  for (const p of params) {
    if (!Fp.isValid(CURVE[p]))
      throw new Error(`CURVE.${p} must be valid field element of CURVE.Fp`);
  }
  CURVE = Object.freeze(Object.assign({}, CURVE));
  return { CURVE, Fp, Fn };
}

// node_modules/@privy-io/cross-app-connect/node_modules/@noble/curves/esm/abstract/weierstrass.js
var divNearest = (num2, den) => (num2 + (num2 >= 0 ? den : -den) / _2n2) / den;
function _splitEndoScalar(k, basis, n) {
  const [[a1, b1], [a22, b22]] = basis;
  const c1 = divNearest(b22 * k, n);
  const c2 = divNearest(-b1 * k, n);
  let k1 = k - c1 * a1 - c2 * a22;
  let k2 = -c1 * b1 - c2 * b22;
  const k1neg = k1 < _0n4;
  const k2neg = k2 < _0n4;
  if (k1neg)
    k1 = -k1;
  if (k2neg)
    k2 = -k2;
  const MAX_NUM = bitMask(Math.ceil(bitLen(n) / 2)) + _1n4;
  if (k1 < _0n4 || k1 >= MAX_NUM || k2 < _0n4 || k2 >= MAX_NUM) {
    throw new Error("splitScalar (endomorphism): failed, k=" + k);
  }
  return { k1neg, k1, k2neg, k2 };
}
function validateSigFormat(format) {
  if (!["compact", "recovered", "der"].includes(format))
    throw new Error('Signature format must be "compact", "recovered", or "der"');
  return format;
}
function validateSigOpts(opts, def) {
  const optsn = {};
  for (let optName of Object.keys(def)) {
    optsn[optName] = opts[optName] === void 0 ? def[optName] : opts[optName];
  }
  _abool2(optsn.lowS, "lowS");
  _abool2(optsn.prehash, "prehash");
  if (optsn.format !== void 0)
    validateSigFormat(optsn.format);
  return optsn;
}
var DERErr = class extends Error {
  constructor(m = "") {
    super(m);
  }
};
var DER = {
  // asn.1 DER encoding utils
  Err: DERErr,
  // Basic building block is TLV (Tag-Length-Value)
  _tlv: {
    encode: (tag, data) => {
      const { Err: E } = DER;
      if (tag < 0 || tag > 256)
        throw new E("tlv.encode: wrong tag");
      if (data.length & 1)
        throw new E("tlv.encode: unpadded data");
      const dataLen = data.length / 2;
      const len = numberToHexUnpadded(dataLen);
      if (len.length / 2 & 128)
        throw new E("tlv.encode: long form length too big");
      const lenLen = dataLen > 127 ? numberToHexUnpadded(len.length / 2 | 128) : "";
      const t4 = numberToHexUnpadded(tag);
      return t4 + lenLen + len + data;
    },
    // v - value, l - left bytes (unparsed)
    decode(tag, data) {
      const { Err: E } = DER;
      let pos = 0;
      if (tag < 0 || tag > 256)
        throw new E("tlv.encode: wrong tag");
      if (data.length < 2 || data[pos++] !== tag)
        throw new E("tlv.decode: wrong tlv");
      const first = data[pos++];
      const isLong = !!(first & 128);
      let length = 0;
      if (!isLong)
        length = first;
      else {
        const lenLen = first & 127;
        if (!lenLen)
          throw new E("tlv.decode(long): indefinite length not supported");
        if (lenLen > 4)
          throw new E("tlv.decode(long): byte length is too big");
        const lengthBytes = data.subarray(pos, pos + lenLen);
        if (lengthBytes.length !== lenLen)
          throw new E("tlv.decode: length bytes not complete");
        if (lengthBytes[0] === 0)
          throw new E("tlv.decode(long): zero leftmost byte");
        for (const b of lengthBytes)
          length = length << 8 | b;
        pos += lenLen;
        if (length < 128)
          throw new E("tlv.decode(long): not minimal encoding");
      }
      const v = data.subarray(pos, pos + length);
      if (v.length !== length)
        throw new E("tlv.decode: wrong value length");
      return { v, l: data.subarray(pos + length) };
    }
  },
  // https://crypto.stackexchange.com/a/57734 Leftmost bit of first byte is 'negative' flag,
  // since we always use positive integers here. It must always be empty:
  // - add zero byte if exists
  // - if next byte doesn't have a flag, leading zero is not allowed (minimal encoding)
  _int: {
    encode(num2) {
      const { Err: E } = DER;
      if (num2 < _0n4)
        throw new E("integer: negative integers are not allowed");
      let hex2 = numberToHexUnpadded(num2);
      if (Number.parseInt(hex2[0], 16) & 8)
        hex2 = "00" + hex2;
      if (hex2.length & 1)
        throw new E("unexpected DER parsing assertion: unpadded hex");
      return hex2;
    },
    decode(data) {
      const { Err: E } = DER;
      if (data[0] & 128)
        throw new E("invalid signature integer: negative");
      if (data[0] === 0 && !(data[1] & 128))
        throw new E("invalid signature integer: unnecessary leading zero");
      return bytesToNumberBE(data);
    }
  },
  toSig(hex2) {
    const { Err: E, _int: int, _tlv: tlv } = DER;
    const data = ensureBytes("signature", hex2);
    const { v: seqBytes, l: seqLeftBytes } = tlv.decode(48, data);
    if (seqLeftBytes.length)
      throw new E("invalid signature: left bytes after parsing");
    const { v: rBytes, l: rLeftBytes } = tlv.decode(2, seqBytes);
    const { v: sBytes, l: sLeftBytes } = tlv.decode(2, rLeftBytes);
    if (sLeftBytes.length)
      throw new E("invalid signature: left bytes after parsing");
    return { r: int.decode(rBytes), s: int.decode(sBytes) };
  },
  hexFromSig(sig) {
    const { _tlv: tlv, _int: int } = DER;
    const rs = tlv.encode(2, int.encode(sig.r));
    const ss = tlv.encode(2, int.encode(sig.s));
    const seq = rs + ss;
    return tlv.encode(48, seq);
  }
};
var _0n4 = BigInt(0);
var _1n4 = BigInt(1);
var _2n2 = BigInt(2);
var _3n2 = BigInt(3);
var _4n2 = BigInt(4);
function _normFnElement(Fn, key) {
  const { BYTES: expected } = Fn;
  let num2;
  if (typeof key === "bigint") {
    num2 = key;
  } else {
    let bytes = ensureBytes("private key", key);
    try {
      num2 = Fn.fromBytes(bytes);
    } catch (error) {
      throw new Error(`invalid private key: expected ui8a of size ${expected}, got ${typeof key}`);
    }
  }
  if (!Fn.isValidNot0(num2))
    throw new Error("invalid private key: out of range [1..N-1]");
  return num2;
}
function weierstrassN(params, extraOpts = {}) {
  const validated = _createCurveFields("weierstrass", params, extraOpts);
  const { Fp, Fn } = validated;
  let CURVE = validated.CURVE;
  const { h: cofactor, n: CURVE_ORDER } = CURVE;
  _validateObject(extraOpts, {}, {
    allowInfinityPoint: "boolean",
    clearCofactor: "function",
    isTorsionFree: "function",
    fromBytes: "function",
    toBytes: "function",
    endo: "object",
    wrapPrivateKey: "boolean"
  });
  const { endo } = extraOpts;
  if (endo) {
    if (!Fp.is0(CURVE.a) || typeof endo.beta !== "bigint" || !Array.isArray(endo.basises)) {
      throw new Error('invalid endo: expected "beta": bigint and "basises": array');
    }
  }
  const lengths = getWLengths(Fp, Fn);
  function assertCompressionIsSupported() {
    if (!Fp.isOdd)
      throw new Error("compression is not supported: Field does not have .isOdd()");
  }
  function pointToBytes2(_c, point, isCompressed) {
    const { x, y } = point.toAffine();
    const bx = Fp.toBytes(x);
    _abool2(isCompressed, "isCompressed");
    if (isCompressed) {
      assertCompressionIsSupported();
      const hasEvenY = !Fp.isOdd(y);
      return concatBytes(pprefix(hasEvenY), bx);
    } else {
      return concatBytes(Uint8Array.of(4), bx, Fp.toBytes(y));
    }
  }
  function pointFromBytes(bytes) {
    _abytes2(bytes, void 0, "Point");
    const { publicKey: comp, publicKeyUncompressed: uncomp } = lengths;
    const length = bytes.length;
    const head = bytes[0];
    const tail = bytes.subarray(1);
    if (length === comp && (head === 2 || head === 3)) {
      const x = Fp.fromBytes(tail);
      if (!Fp.isValid(x))
        throw new Error("bad point: is not on curve, wrong x");
      const y2 = weierstrassEquation(x);
      let y;
      try {
        y = Fp.sqrt(y2);
      } catch (sqrtError) {
        const err2 = sqrtError instanceof Error ? ": " + sqrtError.message : "";
        throw new Error("bad point: is not on curve, sqrt error" + err2);
      }
      assertCompressionIsSupported();
      const isYOdd = Fp.isOdd(y);
      const isHeadOdd = (head & 1) === 1;
      if (isHeadOdd !== isYOdd)
        y = Fp.neg(y);
      return { x, y };
    } else if (length === uncomp && head === 4) {
      const L = Fp.BYTES;
      const x = Fp.fromBytes(tail.subarray(0, L));
      const y = Fp.fromBytes(tail.subarray(L, L * 2));
      if (!isValidXY(x, y))
        throw new Error("bad point: is not on curve");
      return { x, y };
    } else {
      throw new Error(`bad point: got length ${length}, expected compressed=${comp} or uncompressed=${uncomp}`);
    }
  }
  const encodePoint = extraOpts.toBytes || pointToBytes2;
  const decodePoint = extraOpts.fromBytes || pointFromBytes;
  function weierstrassEquation(x) {
    const x2 = Fp.sqr(x);
    const x3 = Fp.mul(x2, x);
    return Fp.add(Fp.add(x3, Fp.mul(x, CURVE.a)), CURVE.b);
  }
  function isValidXY(x, y) {
    const left = Fp.sqr(y);
    const right = weierstrassEquation(x);
    return Fp.eql(left, right);
  }
  if (!isValidXY(CURVE.Gx, CURVE.Gy))
    throw new Error("bad curve params: generator point");
  const _4a3 = Fp.mul(Fp.pow(CURVE.a, _3n2), _4n2);
  const _27b2 = Fp.mul(Fp.sqr(CURVE.b), BigInt(27));
  if (Fp.is0(Fp.add(_4a3, _27b2)))
    throw new Error("bad curve params: a or b");
  function acoord(title, n, banZero = false) {
    if (!Fp.isValid(n) || banZero && Fp.is0(n))
      throw new Error(`bad point coordinate ${title}`);
    return n;
  }
  function aprjpoint(other) {
    if (!(other instanceof Point))
      throw new Error("ProjectivePoint expected");
  }
  function splitEndoScalarN(k) {
    if (!endo || !endo.basises)
      throw new Error("no endo");
    return _splitEndoScalar(k, endo.basises, Fn.ORDER);
  }
  const toAffineMemo = memoized((p, iz) => {
    const { X, Y, Z } = p;
    if (Fp.eql(Z, Fp.ONE))
      return { x: X, y: Y };
    const is0 = p.is0();
    if (iz == null)
      iz = is0 ? Fp.ONE : Fp.inv(Z);
    const x = Fp.mul(X, iz);
    const y = Fp.mul(Y, iz);
    const zz = Fp.mul(Z, iz);
    if (is0)
      return { x: Fp.ZERO, y: Fp.ZERO };
    if (!Fp.eql(zz, Fp.ONE))
      throw new Error("invZ was invalid");
    return { x, y };
  });
  const assertValidMemo = memoized((p) => {
    if (p.is0()) {
      if (extraOpts.allowInfinityPoint && !Fp.is0(p.Y))
        return;
      throw new Error("bad point: ZERO");
    }
    const { x, y } = p.toAffine();
    if (!Fp.isValid(x) || !Fp.isValid(y))
      throw new Error("bad point: x or y not field elements");
    if (!isValidXY(x, y))
      throw new Error("bad point: equation left != right");
    if (!p.isTorsionFree())
      throw new Error("bad point: not in prime-order subgroup");
    return true;
  });
  function finishEndo(endoBeta, k1p, k2p, k1neg, k2neg) {
    k2p = new Point(Fp.mul(k2p.X, endoBeta), k2p.Y, k2p.Z);
    k1p = negateCt(k1neg, k1p);
    k2p = negateCt(k2neg, k2p);
    return k1p.add(k2p);
  }
  class Point {
    /** Does NOT validate if the point is valid. Use `.assertValidity()`. */
    constructor(X, Y, Z) {
      this.X = acoord("x", X);
      this.Y = acoord("y", Y, true);
      this.Z = acoord("z", Z);
      Object.freeze(this);
    }
    static CURVE() {
      return CURVE;
    }
    /** Does NOT validate if the point is valid. Use `.assertValidity()`. */
    static fromAffine(p) {
      const { x, y } = p || {};
      if (!p || !Fp.isValid(x) || !Fp.isValid(y))
        throw new Error("invalid affine point");
      if (p instanceof Point)
        throw new Error("projective point not allowed");
      if (Fp.is0(x) && Fp.is0(y))
        return Point.ZERO;
      return new Point(x, y, Fp.ONE);
    }
    static fromBytes(bytes) {
      const P = Point.fromAffine(decodePoint(_abytes2(bytes, void 0, "point")));
      P.assertValidity();
      return P;
    }
    static fromHex(hex2) {
      return Point.fromBytes(ensureBytes("pointHex", hex2));
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    /**
     *
     * @param windowSize
     * @param isLazy true will defer table computation until the first multiplication
     * @returns
     */
    precompute(windowSize = 8, isLazy = true) {
      wnaf.createCache(this, windowSize);
      if (!isLazy)
        this.multiply(_3n2);
      return this;
    }
    // TODO: return `this`
    /** A point on curve is valid if it conforms to equation. */
    assertValidity() {
      assertValidMemo(this);
    }
    hasEvenY() {
      const { y } = this.toAffine();
      if (!Fp.isOdd)
        throw new Error("Field doesn't support isOdd");
      return !Fp.isOdd(y);
    }
    /** Compare one point to another. */
    equals(other) {
      aprjpoint(other);
      const { X: X1, Y: Y1, Z: Z1 } = this;
      const { X: X2, Y: Y2, Z: Z2 } = other;
      const U1 = Fp.eql(Fp.mul(X1, Z2), Fp.mul(X2, Z1));
      const U2 = Fp.eql(Fp.mul(Y1, Z2), Fp.mul(Y2, Z1));
      return U1 && U2;
    }
    /** Flips point to one corresponding to (x, -y) in Affine coordinates. */
    negate() {
      return new Point(this.X, Fp.neg(this.Y), this.Z);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { a: a4, b } = CURVE;
      const b3 = Fp.mul(b, _3n2);
      const { X: X1, Y: Y1, Z: Z1 } = this;
      let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO;
      let t0 = Fp.mul(X1, X1);
      let t1 = Fp.mul(Y1, Y1);
      let t22 = Fp.mul(Z1, Z1);
      let t32 = Fp.mul(X1, Y1);
      t32 = Fp.add(t32, t32);
      Z3 = Fp.mul(X1, Z1);
      Z3 = Fp.add(Z3, Z3);
      X3 = Fp.mul(a4, Z3);
      Y3 = Fp.mul(b3, t22);
      Y3 = Fp.add(X3, Y3);
      X3 = Fp.sub(t1, Y3);
      Y3 = Fp.add(t1, Y3);
      Y3 = Fp.mul(X3, Y3);
      X3 = Fp.mul(t32, X3);
      Z3 = Fp.mul(b3, Z3);
      t22 = Fp.mul(a4, t22);
      t32 = Fp.sub(t0, t22);
      t32 = Fp.mul(a4, t32);
      t32 = Fp.add(t32, Z3);
      Z3 = Fp.add(t0, t0);
      t0 = Fp.add(Z3, t0);
      t0 = Fp.add(t0, t22);
      t0 = Fp.mul(t0, t32);
      Y3 = Fp.add(Y3, t0);
      t22 = Fp.mul(Y1, Z1);
      t22 = Fp.add(t22, t22);
      t0 = Fp.mul(t22, t32);
      X3 = Fp.sub(X3, t0);
      Z3 = Fp.mul(t22, t1);
      Z3 = Fp.add(Z3, Z3);
      Z3 = Fp.add(Z3, Z3);
      return new Point(X3, Y3, Z3);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(other) {
      aprjpoint(other);
      const { X: X1, Y: Y1, Z: Z1 } = this;
      const { X: X2, Y: Y2, Z: Z2 } = other;
      let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO;
      const a4 = CURVE.a;
      const b3 = Fp.mul(CURVE.b, _3n2);
      let t0 = Fp.mul(X1, X2);
      let t1 = Fp.mul(Y1, Y2);
      let t22 = Fp.mul(Z1, Z2);
      let t32 = Fp.add(X1, Y1);
      let t4 = Fp.add(X2, Y2);
      t32 = Fp.mul(t32, t4);
      t4 = Fp.add(t0, t1);
      t32 = Fp.sub(t32, t4);
      t4 = Fp.add(X1, Z1);
      let t5 = Fp.add(X2, Z2);
      t4 = Fp.mul(t4, t5);
      t5 = Fp.add(t0, t22);
      t4 = Fp.sub(t4, t5);
      t5 = Fp.add(Y1, Z1);
      X3 = Fp.add(Y2, Z2);
      t5 = Fp.mul(t5, X3);
      X3 = Fp.add(t1, t22);
      t5 = Fp.sub(t5, X3);
      Z3 = Fp.mul(a4, t4);
      X3 = Fp.mul(b3, t22);
      Z3 = Fp.add(X3, Z3);
      X3 = Fp.sub(t1, Z3);
      Z3 = Fp.add(t1, Z3);
      Y3 = Fp.mul(X3, Z3);
      t1 = Fp.add(t0, t0);
      t1 = Fp.add(t1, t0);
      t22 = Fp.mul(a4, t22);
      t4 = Fp.mul(b3, t4);
      t1 = Fp.add(t1, t22);
      t22 = Fp.sub(t0, t22);
      t22 = Fp.mul(a4, t22);
      t4 = Fp.add(t4, t22);
      t0 = Fp.mul(t1, t4);
      Y3 = Fp.add(Y3, t0);
      t0 = Fp.mul(t5, t4);
      X3 = Fp.mul(t32, X3);
      X3 = Fp.sub(X3, t0);
      t0 = Fp.mul(t32, t1);
      Z3 = Fp.mul(t5, Z3);
      Z3 = Fp.add(Z3, t0);
      return new Point(X3, Y3, Z3);
    }
    subtract(other) {
      return this.add(other.negate());
    }
    is0() {
      return this.equals(Point.ZERO);
    }
    /**
     * Constant time multiplication.
     * Uses wNAF method. Windowed method may be 10% faster,
     * but takes 2x longer to generate and consumes 2x memory.
     * Uses precomputes when available.
     * Uses endomorphism for Koblitz curves.
     * @param scalar by which the point would be multiplied
     * @returns New point
     */
    multiply(scalar) {
      const { endo: endo2 } = extraOpts;
      if (!Fn.isValidNot0(scalar))
        throw new Error("invalid scalar: out of range");
      let point, fake;
      const mul = (n) => wnaf.cached(this, n, (p) => normalizeZ(Point, p));
      if (endo2) {
        const { k1neg, k1, k2neg, k2 } = splitEndoScalarN(scalar);
        const { p: k1p, f: k1f } = mul(k1);
        const { p: k2p, f: k2f } = mul(k2);
        fake = k1f.add(k2f);
        point = finishEndo(endo2.beta, k1p, k2p, k1neg, k2neg);
      } else {
        const { p, f } = mul(scalar);
        point = p;
        fake = f;
      }
      return normalizeZ(Point, [point, fake])[0];
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed secret key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(sc) {
      const { endo: endo2 } = extraOpts;
      const p = this;
      if (!Fn.isValid(sc))
        throw new Error("invalid scalar: out of range");
      if (sc === _0n4 || p.is0())
        return Point.ZERO;
      if (sc === _1n4)
        return p;
      if (wnaf.hasCache(this))
        return this.multiply(sc);
      if (endo2) {
        const { k1neg, k1, k2neg, k2 } = splitEndoScalarN(sc);
        const { p1, p2 } = mulEndoUnsafe(Point, p, k1, k2);
        return finishEndo(endo2.beta, p1, p2, k1neg, k2neg);
      } else {
        return wnaf.unsafe(p, sc);
      }
    }
    multiplyAndAddUnsafe(Q, a4, b) {
      const sum = this.multiplyUnsafe(a4).add(Q.multiplyUnsafe(b));
      return sum.is0() ? void 0 : sum;
    }
    /**
     * Converts Projective point to affine (x, y) coordinates.
     * @param invertedZ Z^-1 (inverted zero) - optional, precomputation is useful for invertBatch
     */
    toAffine(invertedZ) {
      return toAffineMemo(this, invertedZ);
    }
    /**
     * Checks whether Point is free of torsion elements (is in prime subgroup).
     * Always torsion-free for cofactor=1 curves.
     */
    isTorsionFree() {
      const { isTorsionFree } = extraOpts;
      if (cofactor === _1n4)
        return true;
      if (isTorsionFree)
        return isTorsionFree(Point, this);
      return wnaf.unsafe(this, CURVE_ORDER).is0();
    }
    clearCofactor() {
      const { clearCofactor } = extraOpts;
      if (cofactor === _1n4)
        return this;
      if (clearCofactor)
        return clearCofactor(Point, this);
      return this.multiplyUnsafe(cofactor);
    }
    isSmallOrder() {
      return this.multiplyUnsafe(cofactor).is0();
    }
    toBytes(isCompressed = true) {
      _abool2(isCompressed, "isCompressed");
      this.assertValidity();
      return encodePoint(Point, this, isCompressed);
    }
    toHex(isCompressed = true) {
      return bytesToHex2(this.toBytes(isCompressed));
    }
    toString() {
      return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
    }
    // TODO: remove
    get px() {
      return this.X;
    }
    get py() {
      return this.X;
    }
    get pz() {
      return this.Z;
    }
    toRawBytes(isCompressed = true) {
      return this.toBytes(isCompressed);
    }
    _setWindowSize(windowSize) {
      this.precompute(windowSize);
    }
    static normalizeZ(points) {
      return normalizeZ(Point, points);
    }
    static msm(points, scalars) {
      return pippenger(Point, Fn, points, scalars);
    }
    static fromPrivateKey(privateKey) {
      return Point.BASE.multiply(_normFnElement(Fn, privateKey));
    }
  }
  Point.BASE = new Point(CURVE.Gx, CURVE.Gy, Fp.ONE);
  Point.ZERO = new Point(Fp.ZERO, Fp.ONE, Fp.ZERO);
  Point.Fp = Fp;
  Point.Fn = Fn;
  const bits2 = Fn.BITS;
  const wnaf = new wNAF(Point, extraOpts.endo ? Math.ceil(bits2 / 2) : bits2);
  Point.BASE.precompute(8);
  return Point;
}
function pprefix(hasEvenY) {
  return Uint8Array.of(hasEvenY ? 2 : 3);
}
function SWUFpSqrtRatio(Fp, Z) {
  const q = Fp.ORDER;
  let l = _0n4;
  for (let o4 = q - _1n4; o4 % _2n2 === _0n4; o4 /= _2n2)
    l += _1n4;
  const c1 = l;
  const _2n_pow_c1_1 = _2n2 << c1 - _1n4 - _1n4;
  const _2n_pow_c1 = _2n_pow_c1_1 * _2n2;
  const c2 = (q - _1n4) / _2n_pow_c1;
  const c3 = (c2 - _1n4) / _2n2;
  const c4 = _2n_pow_c1 - _1n4;
  const c5 = _2n_pow_c1_1;
  const c6 = Fp.pow(Z, c2);
  const c7 = Fp.pow(Z, (c2 + _1n4) / _2n2);
  let sqrtRatio = (u, v) => {
    let tv1 = c6;
    let tv2 = Fp.pow(v, c4);
    let tv3 = Fp.sqr(tv2);
    tv3 = Fp.mul(tv3, v);
    let tv5 = Fp.mul(u, tv3);
    tv5 = Fp.pow(tv5, c3);
    tv5 = Fp.mul(tv5, tv2);
    tv2 = Fp.mul(tv5, v);
    tv3 = Fp.mul(tv5, u);
    let tv4 = Fp.mul(tv3, tv2);
    tv5 = Fp.pow(tv4, c5);
    let isQR = Fp.eql(tv5, Fp.ONE);
    tv2 = Fp.mul(tv3, c7);
    tv5 = Fp.mul(tv4, tv1);
    tv3 = Fp.cmov(tv2, tv3, isQR);
    tv4 = Fp.cmov(tv5, tv4, isQR);
    for (let i3 = c1; i3 > _1n4; i3--) {
      let tv52 = i3 - _2n2;
      tv52 = _2n2 << tv52 - _1n4;
      let tvv5 = Fp.pow(tv4, tv52);
      const e1 = Fp.eql(tvv5, Fp.ONE);
      tv2 = Fp.mul(tv3, tv1);
      tv1 = Fp.mul(tv1, tv1);
      tvv5 = Fp.mul(tv4, tv1);
      tv3 = Fp.cmov(tv2, tv3, e1);
      tv4 = Fp.cmov(tvv5, tv4, e1);
    }
    return { isValid: isQR, value: tv3 };
  };
  if (Fp.ORDER % _4n2 === _3n2) {
    const c12 = (Fp.ORDER - _3n2) / _4n2;
    const c22 = Fp.sqrt(Fp.neg(Z));
    sqrtRatio = (u, v) => {
      let tv1 = Fp.sqr(v);
      const tv2 = Fp.mul(u, v);
      tv1 = Fp.mul(tv1, tv2);
      let y1 = Fp.pow(tv1, c12);
      y1 = Fp.mul(y1, tv2);
      const y2 = Fp.mul(y1, c22);
      const tv3 = Fp.mul(Fp.sqr(y1), v);
      const isQR = Fp.eql(tv3, u);
      let y = Fp.cmov(y2, y1, isQR);
      return { isValid: isQR, value: y };
    };
  }
  return sqrtRatio;
}
function mapToCurveSimpleSWU(Fp, opts) {
  validateField(Fp);
  const { A, B, Z } = opts;
  if (!Fp.isValid(A) || !Fp.isValid(B) || !Fp.isValid(Z))
    throw new Error("mapToCurveSimpleSWU: invalid opts");
  const sqrtRatio = SWUFpSqrtRatio(Fp, Z);
  if (!Fp.isOdd)
    throw new Error("Field does not have .isOdd()");
  return (u) => {
    let tv1, tv2, tv3, tv4, tv5, tv6, x, y;
    tv1 = Fp.sqr(u);
    tv1 = Fp.mul(tv1, Z);
    tv2 = Fp.sqr(tv1);
    tv2 = Fp.add(tv2, tv1);
    tv3 = Fp.add(tv2, Fp.ONE);
    tv3 = Fp.mul(tv3, B);
    tv4 = Fp.cmov(Z, Fp.neg(tv2), !Fp.eql(tv2, Fp.ZERO));
    tv4 = Fp.mul(tv4, A);
    tv2 = Fp.sqr(tv3);
    tv6 = Fp.sqr(tv4);
    tv5 = Fp.mul(tv6, A);
    tv2 = Fp.add(tv2, tv5);
    tv2 = Fp.mul(tv2, tv3);
    tv6 = Fp.mul(tv6, tv4);
    tv5 = Fp.mul(tv6, B);
    tv2 = Fp.add(tv2, tv5);
    x = Fp.mul(tv1, tv3);
    const { isValid, value } = sqrtRatio(tv2, tv6);
    y = Fp.mul(tv1, u);
    y = Fp.mul(y, value);
    x = Fp.cmov(x, tv3, isValid);
    y = Fp.cmov(y, value, isValid);
    const e1 = Fp.isOdd(u) === Fp.isOdd(y);
    y = Fp.cmov(Fp.neg(y), y, e1);
    const tv4_inv = FpInvertBatch(Fp, [tv4], true)[0];
    x = Fp.mul(x, tv4_inv);
    return { x, y };
  };
}
function getWLengths(Fp, Fn) {
  return {
    secretKey: Fn.BYTES,
    publicKey: 1 + Fp.BYTES,
    publicKeyUncompressed: 1 + 2 * Fp.BYTES,
    publicKeyHasPrefix: true,
    signature: 2 * Fn.BYTES
  };
}
function ecdh(Point, ecdhOpts = {}) {
  const { Fn } = Point;
  const randomBytes_ = ecdhOpts.randomBytes || randomBytes;
  const lengths = Object.assign(getWLengths(Point.Fp, Fn), { seed: getMinHashLength(Fn.ORDER) });
  function isValidSecretKey(secretKey) {
    try {
      return !!_normFnElement(Fn, secretKey);
    } catch (error) {
      return false;
    }
  }
  function isValidPublicKey(publicKey, isCompressed) {
    const { publicKey: comp, publicKeyUncompressed } = lengths;
    try {
      const l = publicKey.length;
      if (isCompressed === true && l !== comp)
        return false;
      if (isCompressed === false && l !== publicKeyUncompressed)
        return false;
      return !!Point.fromBytes(publicKey);
    } catch (error) {
      return false;
    }
  }
  function randomSecretKey(seed = randomBytes_(lengths.seed)) {
    return mapHashToField(_abytes2(seed, lengths.seed, "seed"), Fn.ORDER);
  }
  function getPublicKey(secretKey, isCompressed = true) {
    return Point.BASE.multiply(_normFnElement(Fn, secretKey)).toBytes(isCompressed);
  }
  function keygen(seed) {
    const secretKey = randomSecretKey(seed);
    return { secretKey, publicKey: getPublicKey(secretKey) };
  }
  function isProbPub(item) {
    if (typeof item === "bigint")
      return false;
    if (item instanceof Point)
      return true;
    const { secretKey, publicKey, publicKeyUncompressed } = lengths;
    if (Fn.allowedLengths || secretKey === publicKey)
      return void 0;
    const l = ensureBytes("key", item).length;
    return l === publicKey || l === publicKeyUncompressed;
  }
  function getSharedSecret(secretKeyA, publicKeyB, isCompressed = true) {
    if (isProbPub(secretKeyA) === true)
      throw new Error("first arg must be private key");
    if (isProbPub(publicKeyB) === false)
      throw new Error("second arg must be public key");
    const s5 = _normFnElement(Fn, secretKeyA);
    const b = Point.fromHex(publicKeyB);
    return b.multiply(s5).toBytes(isCompressed);
  }
  const utils = {
    isValidSecretKey,
    isValidPublicKey,
    randomSecretKey,
    // TODO: remove
    isValidPrivateKey: isValidSecretKey,
    randomPrivateKey: randomSecretKey,
    normPrivateKeyToScalar: (key) => _normFnElement(Fn, key),
    precompute(windowSize = 8, point = Point.BASE) {
      return point.precompute(windowSize, false);
    }
  };
  return Object.freeze({ getPublicKey, getSharedSecret, keygen, Point, utils, lengths });
}
function ecdsa(Point, hash, ecdsaOpts = {}) {
  ahash(hash);
  _validateObject(ecdsaOpts, {}, {
    hmac: "function",
    lowS: "boolean",
    randomBytes: "function",
    bits2int: "function",
    bits2int_modN: "function"
  });
  const randomBytes2 = ecdsaOpts.randomBytes || randomBytes;
  const hmac2 = ecdsaOpts.hmac || ((key, ...msgs) => hmac(hash, key, concatBytes(...msgs)));
  const { Fp, Fn } = Point;
  const { ORDER: CURVE_ORDER, BITS: fnBits } = Fn;
  const { keygen, getPublicKey, getSharedSecret, utils, lengths } = ecdh(Point, ecdsaOpts);
  const defaultSigOpts = {
    prehash: false,
    lowS: typeof ecdsaOpts.lowS === "boolean" ? ecdsaOpts.lowS : false,
    format: void 0,
    //'compact' as ECDSASigFormat,
    extraEntropy: false
  };
  const defaultSigOpts_format = "compact";
  function isBiggerThanHalfOrder(number) {
    const HALF = CURVE_ORDER >> _1n4;
    return number > HALF;
  }
  function validateRS(title, num2) {
    if (!Fn.isValidNot0(num2))
      throw new Error(`invalid signature ${title}: out of range 1..Point.Fn.ORDER`);
    return num2;
  }
  function validateSigLength(bytes, format) {
    validateSigFormat(format);
    const size = lengths.signature;
    const sizer = format === "compact" ? size : format === "recovered" ? size + 1 : void 0;
    return _abytes2(bytes, sizer, `${format} signature`);
  }
  class Signature {
    constructor(r4, s5, recovery) {
      this.r = validateRS("r", r4);
      this.s = validateRS("s", s5);
      if (recovery != null)
        this.recovery = recovery;
      Object.freeze(this);
    }
    static fromBytes(bytes, format = defaultSigOpts_format) {
      validateSigLength(bytes, format);
      let recid;
      if (format === "der") {
        const { r: r5, s: s6 } = DER.toSig(_abytes2(bytes));
        return new Signature(r5, s6);
      }
      if (format === "recovered") {
        recid = bytes[0];
        format = "compact";
        bytes = bytes.subarray(1);
      }
      const L = Fn.BYTES;
      const r4 = bytes.subarray(0, L);
      const s5 = bytes.subarray(L, L * 2);
      return new Signature(Fn.fromBytes(r4), Fn.fromBytes(s5), recid);
    }
    static fromHex(hex2, format) {
      return this.fromBytes(hexToBytes(hex2), format);
    }
    addRecoveryBit(recovery) {
      return new Signature(this.r, this.s, recovery);
    }
    recoverPublicKey(messageHash) {
      const FIELD_ORDER = Fp.ORDER;
      const { r: r4, s: s5, recovery: rec } = this;
      if (rec == null || ![0, 1, 2, 3].includes(rec))
        throw new Error("recovery id invalid");
      const hasCofactor = CURVE_ORDER * _2n2 < FIELD_ORDER;
      if (hasCofactor && rec > 1)
        throw new Error("recovery id is ambiguous for h>1 curve");
      const radj = rec === 2 || rec === 3 ? r4 + CURVE_ORDER : r4;
      if (!Fp.isValid(radj))
        throw new Error("recovery id 2 or 3 invalid");
      const x = Fp.toBytes(radj);
      const R = Point.fromBytes(concatBytes(pprefix((rec & 1) === 0), x));
      const ir = Fn.inv(radj);
      const h = bits2int_modN(ensureBytes("msgHash", messageHash));
      const u1 = Fn.create(-h * ir);
      const u2 = Fn.create(s5 * ir);
      const Q = Point.BASE.multiplyUnsafe(u1).add(R.multiplyUnsafe(u2));
      if (Q.is0())
        throw new Error("point at infinify");
      Q.assertValidity();
      return Q;
    }
    // Signatures should be low-s, to prevent malleability.
    hasHighS() {
      return isBiggerThanHalfOrder(this.s);
    }
    toBytes(format = defaultSigOpts_format) {
      validateSigFormat(format);
      if (format === "der")
        return hexToBytes(DER.hexFromSig(this));
      const r4 = Fn.toBytes(this.r);
      const s5 = Fn.toBytes(this.s);
      if (format === "recovered") {
        if (this.recovery == null)
          throw new Error("recovery bit must be present");
        return concatBytes(Uint8Array.of(this.recovery), r4, s5);
      }
      return concatBytes(r4, s5);
    }
    toHex(format) {
      return bytesToHex2(this.toBytes(format));
    }
    // TODO: remove
    assertValidity() {
    }
    static fromCompact(hex2) {
      return Signature.fromBytes(ensureBytes("sig", hex2), "compact");
    }
    static fromDER(hex2) {
      return Signature.fromBytes(ensureBytes("sig", hex2), "der");
    }
    normalizeS() {
      return this.hasHighS() ? new Signature(this.r, Fn.neg(this.s), this.recovery) : this;
    }
    toDERRawBytes() {
      return this.toBytes("der");
    }
    toDERHex() {
      return bytesToHex2(this.toBytes("der"));
    }
    toCompactRawBytes() {
      return this.toBytes("compact");
    }
    toCompactHex() {
      return bytesToHex2(this.toBytes("compact"));
    }
  }
  const bits2int = ecdsaOpts.bits2int || function bits2int_def(bytes) {
    if (bytes.length > 8192)
      throw new Error("input is too large");
    const num2 = bytesToNumberBE(bytes);
    const delta = bytes.length * 8 - fnBits;
    return delta > 0 ? num2 >> BigInt(delta) : num2;
  };
  const bits2int_modN = ecdsaOpts.bits2int_modN || function bits2int_modN_def(bytes) {
    return Fn.create(bits2int(bytes));
  };
  const ORDER_MASK = bitMask(fnBits);
  function int2octets(num2) {
    aInRange("num < 2^" + fnBits, num2, _0n4, ORDER_MASK);
    return Fn.toBytes(num2);
  }
  function validateMsgAndHash(message, prehash) {
    _abytes2(message, void 0, "message");
    return prehash ? _abytes2(hash(message), void 0, "prehashed message") : message;
  }
  function prepSig(message, privateKey, opts) {
    if (["recovered", "canonical"].some((k) => k in opts))
      throw new Error("sign() legacy options not supported");
    const { lowS, prehash, extraEntropy } = validateSigOpts(opts, defaultSigOpts);
    message = validateMsgAndHash(message, prehash);
    const h1int = bits2int_modN(message);
    const d2 = _normFnElement(Fn, privateKey);
    const seedArgs = [int2octets(d2), int2octets(h1int)];
    if (extraEntropy != null && extraEntropy !== false) {
      const e3 = extraEntropy === true ? randomBytes2(lengths.secretKey) : extraEntropy;
      seedArgs.push(ensureBytes("extraEntropy", e3));
    }
    const seed = concatBytes(...seedArgs);
    const m = h1int;
    function k2sig(kBytes) {
      const k = bits2int(kBytes);
      if (!Fn.isValidNot0(k))
        return;
      const ik = Fn.inv(k);
      const q = Point.BASE.multiply(k).toAffine();
      const r4 = Fn.create(q.x);
      if (r4 === _0n4)
        return;
      const s5 = Fn.create(ik * Fn.create(m + r4 * d2));
      if (s5 === _0n4)
        return;
      let recovery = (q.x === r4 ? 0 : 2) | Number(q.y & _1n4);
      let normS = s5;
      if (lowS && isBiggerThanHalfOrder(s5)) {
        normS = Fn.neg(s5);
        recovery ^= 1;
      }
      return new Signature(r4, normS, recovery);
    }
    return { seed, k2sig };
  }
  function sign2(message, secretKey, opts = {}) {
    message = ensureBytes("message", message);
    const { seed, k2sig } = prepSig(message, secretKey, opts);
    const drbg = createHmacDrbg(hash.outputLen, Fn.BYTES, hmac2);
    const sig = drbg(seed, k2sig);
    return sig;
  }
  function tryParsingSig(sg) {
    let sig = void 0;
    const isHex2 = typeof sg === "string" || isBytes(sg);
    const isObj = !isHex2 && sg !== null && typeof sg === "object" && typeof sg.r === "bigint" && typeof sg.s === "bigint";
    if (!isHex2 && !isObj)
      throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
    if (isObj) {
      sig = new Signature(sg.r, sg.s);
    } else if (isHex2) {
      try {
        sig = Signature.fromBytes(ensureBytes("sig", sg), "der");
      } catch (derError) {
        if (!(derError instanceof DER.Err))
          throw derError;
      }
      if (!sig) {
        try {
          sig = Signature.fromBytes(ensureBytes("sig", sg), "compact");
        } catch (error) {
          return false;
        }
      }
    }
    if (!sig)
      return false;
    return sig;
  }
  function verify(signature, message, publicKey, opts = {}) {
    const { lowS, prehash, format } = validateSigOpts(opts, defaultSigOpts);
    publicKey = ensureBytes("publicKey", publicKey);
    message = validateMsgAndHash(ensureBytes("message", message), prehash);
    if ("strict" in opts)
      throw new Error("options.strict was renamed to lowS");
    const sig = format === void 0 ? tryParsingSig(signature) : Signature.fromBytes(ensureBytes("sig", signature), format);
    if (sig === false)
      return false;
    try {
      const P = Point.fromBytes(publicKey);
      if (lowS && sig.hasHighS())
        return false;
      const { r: r4, s: s5 } = sig;
      const h = bits2int_modN(message);
      const is = Fn.inv(s5);
      const u1 = Fn.create(h * is);
      const u2 = Fn.create(r4 * is);
      const R = Point.BASE.multiplyUnsafe(u1).add(P.multiplyUnsafe(u2));
      if (R.is0())
        return false;
      const v = Fn.create(R.x);
      return v === r4;
    } catch (e3) {
      return false;
    }
  }
  function recoverPublicKey(signature, message, opts = {}) {
    const { prehash } = validateSigOpts(opts, defaultSigOpts);
    message = validateMsgAndHash(message, prehash);
    return Signature.fromBytes(signature, "recovered").recoverPublicKey(message).toBytes();
  }
  return Object.freeze({
    keygen,
    getPublicKey,
    getSharedSecret,
    utils,
    lengths,
    Point,
    sign: sign2,
    verify,
    recoverPublicKey,
    Signature,
    hash
  });
}
function _weierstrass_legacy_opts_to_new(c2) {
  const CURVE = {
    a: c2.a,
    b: c2.b,
    p: c2.Fp.ORDER,
    n: c2.n,
    h: c2.h,
    Gx: c2.Gx,
    Gy: c2.Gy
  };
  const Fp = c2.Fp;
  let allowedLengths = c2.allowedPrivateKeyLengths ? Array.from(new Set(c2.allowedPrivateKeyLengths.map((l) => Math.ceil(l / 2)))) : void 0;
  const Fn = Field(CURVE.n, {
    BITS: c2.nBitLength,
    allowedLengths,
    modFromBytes: c2.wrapPrivateKey
  });
  const curveOpts = {
    Fp,
    Fn,
    allowInfinityPoint: c2.allowInfinityPoint,
    endo: c2.endo,
    isTorsionFree: c2.isTorsionFree,
    clearCofactor: c2.clearCofactor,
    fromBytes: c2.fromBytes,
    toBytes: c2.toBytes
  };
  return { CURVE, curveOpts };
}
function _ecdsa_legacy_opts_to_new(c2) {
  const { CURVE, curveOpts } = _weierstrass_legacy_opts_to_new(c2);
  const ecdsaOpts = {
    hmac: c2.hmac,
    randomBytes: c2.randomBytes,
    lowS: c2.lowS,
    bits2int: c2.bits2int,
    bits2int_modN: c2.bits2int_modN
  };
  return { CURVE, curveOpts, hash: c2.hash, ecdsaOpts };
}
function _ecdsa_new_output_to_legacy(c2, _ecdsa) {
  const Point = _ecdsa.Point;
  return Object.assign({}, _ecdsa, {
    ProjectivePoint: Point,
    CURVE: Object.assign({}, c2, nLength(Point.Fn.ORDER, Point.Fn.BITS))
  });
}
function weierstrass(c2) {
  const { CURVE, curveOpts, hash, ecdsaOpts } = _ecdsa_legacy_opts_to_new(c2);
  const Point = weierstrassN(CURVE, curveOpts);
  const signs = ecdsa(Point, hash, ecdsaOpts);
  return _ecdsa_new_output_to_legacy(c2, signs);
}

// node_modules/@privy-io/cross-app-connect/node_modules/@noble/curves/esm/_shortw_utils.js
function createCurve(curveDef, defHash) {
  const create = (hash) => weierstrass({ ...curveDef, hash });
  return { ...create(defHash), create };
}

// node_modules/@privy-io/cross-app-connect/node_modules/@noble/curves/esm/abstract/hash-to-curve.js
var os2ip = bytesToNumberBE;
function i2osp(value, length) {
  anum(value);
  anum(length);
  if (value < 0 || value >= 1 << 8 * length)
    throw new Error("invalid I2OSP input: " + value);
  const res = Array.from({ length }).fill(0);
  for (let i3 = length - 1; i3 >= 0; i3--) {
    res[i3] = value & 255;
    value >>>= 8;
  }
  return new Uint8Array(res);
}
function strxor(a4, b) {
  const arr = new Uint8Array(a4.length);
  for (let i3 = 0; i3 < a4.length; i3++) {
    arr[i3] = a4[i3] ^ b[i3];
  }
  return arr;
}
function anum(item) {
  if (!Number.isSafeInteger(item))
    throw new Error("number expected");
}
function normDST(DST) {
  if (!isBytes(DST) && typeof DST !== "string")
    throw new Error("DST must be Uint8Array or string");
  return typeof DST === "string" ? utf8ToBytes(DST) : DST;
}
function expand_message_xmd(msg, DST, lenInBytes, H) {
  abytes(msg);
  anum(lenInBytes);
  DST = normDST(DST);
  if (DST.length > 255)
    DST = H(concatBytes(utf8ToBytes("H2C-OVERSIZE-DST-"), DST));
  const { outputLen: b_in_bytes, blockLen: r_in_bytes } = H;
  const ell = Math.ceil(lenInBytes / b_in_bytes);
  if (lenInBytes > 65535 || ell > 255)
    throw new Error("expand_message_xmd: invalid lenInBytes");
  const DST_prime = concatBytes(DST, i2osp(DST.length, 1));
  const Z_pad = i2osp(0, r_in_bytes);
  const l_i_b_str = i2osp(lenInBytes, 2);
  const b = new Array(ell);
  const b_0 = H(concatBytes(Z_pad, msg, l_i_b_str, i2osp(0, 1), DST_prime));
  b[0] = H(concatBytes(b_0, i2osp(1, 1), DST_prime));
  for (let i3 = 1; i3 <= ell; i3++) {
    const args = [strxor(b_0, b[i3 - 1]), i2osp(i3 + 1, 1), DST_prime];
    b[i3] = H(concatBytes(...args));
  }
  const pseudo_random_bytes = concatBytes(...b);
  return pseudo_random_bytes.slice(0, lenInBytes);
}
function expand_message_xof(msg, DST, lenInBytes, k, H) {
  abytes(msg);
  anum(lenInBytes);
  DST = normDST(DST);
  if (DST.length > 255) {
    const dkLen = Math.ceil(2 * k / 8);
    DST = H.create({ dkLen }).update(utf8ToBytes("H2C-OVERSIZE-DST-")).update(DST).digest();
  }
  if (lenInBytes > 65535 || DST.length > 255)
    throw new Error("expand_message_xof: invalid lenInBytes");
  return H.create({ dkLen: lenInBytes }).update(msg).update(i2osp(lenInBytes, 2)).update(DST).update(i2osp(DST.length, 1)).digest();
}
function hash_to_field(msg, count, options) {
  _validateObject(options, {
    p: "bigint",
    m: "number",
    k: "number",
    hash: "function"
  });
  const { p, k, m, hash, expand, DST } = options;
  if (!isHash(options.hash))
    throw new Error("expected valid hash");
  abytes(msg);
  anum(count);
  const log2p = p.toString(2).length;
  const L = Math.ceil((log2p + k) / 8);
  const len_in_bytes = count * m * L;
  let prb;
  if (expand === "xmd") {
    prb = expand_message_xmd(msg, DST, len_in_bytes, hash);
  } else if (expand === "xof") {
    prb = expand_message_xof(msg, DST, len_in_bytes, k, hash);
  } else if (expand === "_internal_pass") {
    prb = msg;
  } else {
    throw new Error('expand must be "xmd" or "xof"');
  }
  const u = new Array(count);
  for (let i3 = 0; i3 < count; i3++) {
    const e3 = new Array(m);
    for (let j = 0; j < m; j++) {
      const elm_offset = L * (j + i3 * m);
      const tv = prb.subarray(elm_offset, elm_offset + L);
      e3[j] = mod(os2ip(tv), p);
    }
    u[i3] = e3;
  }
  return u;
}
function isogenyMap(field, map) {
  const coeff = map.map((i3) => Array.from(i3).reverse());
  return (x, y) => {
    const [xn, xd, yn, yd] = coeff.map((val) => val.reduce((acc, i3) => field.add(field.mul(acc, x), i3)));
    const [xd_inv, yd_inv] = FpInvertBatch(field, [xd, yd], true);
    x = field.mul(xn, xd_inv);
    y = field.mul(y, field.mul(yn, yd_inv));
    return { x, y };
  };
}
var _DST_scalar = utf8ToBytes("HashToScalar-");
function createHasher2(Point, mapToCurve, defaults) {
  if (typeof mapToCurve !== "function")
    throw new Error("mapToCurve() must be defined");
  function map(num2) {
    return Point.fromAffine(mapToCurve(num2));
  }
  function clear(initial) {
    const P = initial.clearCofactor();
    if (P.equals(Point.ZERO))
      return Point.ZERO;
    P.assertValidity();
    return P;
  }
  return {
    defaults,
    hashToCurve(msg, options) {
      const opts = Object.assign({}, defaults, options);
      const u = hash_to_field(msg, 2, opts);
      const u0 = map(u[0]);
      const u1 = map(u[1]);
      return clear(u0.add(u1));
    },
    encodeToCurve(msg, options) {
      const optsDst = defaults.encodeDST ? { DST: defaults.encodeDST } : {};
      const opts = Object.assign({}, defaults, optsDst, options);
      const u = hash_to_field(msg, 1, opts);
      const u0 = map(u[0]);
      return clear(u0);
    },
    /** See {@link H2CHasher} */
    mapToCurve(scalars) {
      if (!Array.isArray(scalars))
        throw new Error("expected array of bigints");
      for (const i3 of scalars)
        if (typeof i3 !== "bigint")
          throw new Error("expected array of bigints");
      return clear(map(scalars));
    },
    // hash_to_scalar can produce 0: https://www.rfc-editor.org/errata/eid8393
    // RFC 9380, draft-irtf-cfrg-bbs-signatures-08
    hashToScalar(msg, options) {
      const N = Point.Fn.ORDER;
      const opts = Object.assign({}, defaults, { p: N, m: 1, DST: _DST_scalar }, options);
      return hash_to_field(msg, 1, opts)[0][0];
    }
  };
}

// node_modules/@privy-io/cross-app-connect/node_modules/@noble/curves/esm/secp256k1.js
var secp256k1_CURVE = {
  p: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
  n: BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
  h: BigInt(1),
  a: BigInt(0),
  b: BigInt(7),
  Gx: BigInt("0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"),
  Gy: BigInt("0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8")
};
var secp256k1_ENDO = {
  beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
  basises: [
    [BigInt("0x3086d221a7d46bcde86c90e49284eb15"), -BigInt("0xe4437ed6010e88286f547fa90abfe4c3")],
    [BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), BigInt("0x3086d221a7d46bcde86c90e49284eb15")]
  ]
};
var _0n5 = BigInt(0);
var _1n5 = BigInt(1);
var _2n3 = BigInt(2);
function sqrtMod(y) {
  const P = secp256k1_CURVE.p;
  const _3n3 = BigInt(3), _6n = BigInt(6), _11n = BigInt(11), _22n = BigInt(22);
  const _23n = BigInt(23), _44n = BigInt(44), _88n = BigInt(88);
  const b22 = y * y * y % P;
  const b3 = b22 * b22 * y % P;
  const b6 = pow2(b3, _3n3, P) * b3 % P;
  const b9 = pow2(b6, _3n3, P) * b3 % P;
  const b11 = pow2(b9, _2n3, P) * b22 % P;
  const b222 = pow2(b11, _11n, P) * b11 % P;
  const b44 = pow2(b222, _22n, P) * b222 % P;
  const b88 = pow2(b44, _44n, P) * b44 % P;
  const b176 = pow2(b88, _88n, P) * b88 % P;
  const b220 = pow2(b176, _44n, P) * b44 % P;
  const b223 = pow2(b220, _3n3, P) * b3 % P;
  const t1 = pow2(b223, _23n, P) * b222 % P;
  const t22 = pow2(t1, _6n, P) * b22 % P;
  const root = pow2(t22, _2n3, P);
  if (!Fpk1.eql(Fpk1.sqr(root), y))
    throw new Error("Cannot find square root");
  return root;
}
var Fpk1 = Field(secp256k1_CURVE.p, { sqrt: sqrtMod });
var secp256k1 = createCurve({ ...secp256k1_CURVE, Fp: Fpk1, lowS: true, endo: secp256k1_ENDO }, sha256);
var TAGGED_HASH_PREFIXES = {};
function taggedHash(tag, ...messages) {
  let tagP = TAGGED_HASH_PREFIXES[tag];
  if (tagP === void 0) {
    const tagH = sha256(utf8ToBytes(tag));
    tagP = concatBytes(tagH, tagH);
    TAGGED_HASH_PREFIXES[tag] = tagP;
  }
  return sha256(concatBytes(tagP, ...messages));
}
var pointToBytes = (point) => point.toBytes(true).slice(1);
var Pointk1 = (() => secp256k1.Point)();
var hasEven = (y) => y % _2n3 === _0n5;
function schnorrGetExtPubKey(priv) {
  const { Fn, BASE } = Pointk1;
  const d_ = _normFnElement(Fn, priv);
  const p = BASE.multiply(d_);
  const scalar = hasEven(p.y) ? d_ : Fn.neg(d_);
  return { scalar, bytes: pointToBytes(p) };
}
function lift_x(x) {
  const Fp = Fpk1;
  if (!Fp.isValidNot0(x))
    throw new Error("invalid x: Fail if x ≥ p");
  const xx = Fp.create(x * x);
  const c2 = Fp.create(xx * x + BigInt(7));
  let y = Fp.sqrt(c2);
  if (!hasEven(y))
    y = Fp.neg(y);
  const p = Pointk1.fromAffine({ x, y });
  p.assertValidity();
  return p;
}
var num = bytesToNumberBE;
function challenge(...args) {
  return Pointk1.Fn.create(num(taggedHash("BIP0340/challenge", ...args)));
}
function schnorrGetPublicKey(secretKey) {
  return schnorrGetExtPubKey(secretKey).bytes;
}
function schnorrSign(message, secretKey, auxRand = randomBytes(32)) {
  const { Fn } = Pointk1;
  const m = ensureBytes("message", message);
  const { bytes: px, scalar: d2 } = schnorrGetExtPubKey(secretKey);
  const a4 = ensureBytes("auxRand", auxRand, 32);
  const t4 = Fn.toBytes(d2 ^ num(taggedHash("BIP0340/aux", a4)));
  const rand = taggedHash("BIP0340/nonce", t4, px, m);
  const { bytes: rx, scalar: k } = schnorrGetExtPubKey(rand);
  const e3 = challenge(rx, px, m);
  const sig = new Uint8Array(64);
  sig.set(rx, 0);
  sig.set(Fn.toBytes(Fn.create(k + e3 * d2)), 32);
  if (!schnorrVerify(sig, m, px))
    throw new Error("sign: Invalid signature produced");
  return sig;
}
function schnorrVerify(signature, message, publicKey) {
  const { Fn, BASE } = Pointk1;
  const sig = ensureBytes("signature", signature, 64);
  const m = ensureBytes("message", message);
  const pub = ensureBytes("publicKey", publicKey, 32);
  try {
    const P = lift_x(num(pub));
    const r4 = num(sig.subarray(0, 32));
    if (!inRange(r4, _1n5, secp256k1_CURVE.p))
      return false;
    const s5 = num(sig.subarray(32, 64));
    if (!inRange(s5, _1n5, secp256k1_CURVE.n))
      return false;
    const e3 = challenge(Fn.toBytes(r4), pointToBytes(P), m);
    const R = BASE.multiplyUnsafe(s5).add(P.multiplyUnsafe(Fn.neg(e3)));
    const { x, y } = R.toAffine();
    if (R.is0() || !hasEven(y) || x !== r4)
      return false;
    return true;
  } catch (error) {
    return false;
  }
}
var schnorr = (() => {
  const size = 32;
  const seedLength = 48;
  const randomSecretKey = (seed = randomBytes(seedLength)) => {
    return mapHashToField(seed, secp256k1_CURVE.n);
  };
  secp256k1.utils.randomSecretKey;
  function keygen(seed) {
    const secretKey = randomSecretKey(seed);
    return { secretKey, publicKey: schnorrGetPublicKey(secretKey) };
  }
  return {
    keygen,
    getPublicKey: schnorrGetPublicKey,
    sign: schnorrSign,
    verify: schnorrVerify,
    Point: Pointk1,
    utils: {
      randomSecretKey,
      randomPrivateKey: randomSecretKey,
      taggedHash,
      // TODO: remove
      lift_x,
      pointToBytes,
      numberToBytesBE,
      bytesToNumberBE,
      mod
    },
    lengths: {
      secretKey: size,
      publicKey: size,
      publicKeyHasPrefix: false,
      signature: size * 2,
      seed: seedLength
    }
  };
})();
var isoMap = (() => isogenyMap(Fpk1, [
  // xNum
  [
    "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7",
    "0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581",
    "0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262",
    "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"
  ],
  // xDen
  [
    "0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b",
    "0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14",
    "0x0000000000000000000000000000000000000000000000000000000000000001"
    // LAST 1
  ],
  // yNum
  [
    "0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c",
    "0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3",
    "0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931",
    "0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"
  ],
  // yDen
  [
    "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b",
    "0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573",
    "0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f",
    "0x0000000000000000000000000000000000000000000000000000000000000001"
    // LAST 1
  ]
].map((i3) => i3.map((j) => BigInt(j)))))();
var mapSWU = (() => mapToCurveSimpleSWU(Fpk1, {
  A: BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),
  B: BigInt("1771"),
  Z: Fpk1.create(BigInt("-11"))
}))();
var secp256k1_hasher = (() => createHasher2(secp256k1.Point, (scalars) => {
  const { x, y } = mapSWU(Fpk1.create(scalars[0]));
  return isoMap(x, y);
}, {
  DST: "secp256k1_XMD:SHA-256_SSWU_RO_",
  encodeDST: "secp256k1_XMD:SHA-256_SSWU_NU_",
  p: Fpk1.ORDER,
  m: 1,
  k: 128,
  expand: "xmd",
  hash: sha256
}))();
var hashToCurve = (() => secp256k1_hasher.hashToCurve)();
var encodeToCurve = (() => secp256k1_hasher.encodeToCurve)();

// node_modules/@scure/base/lib/esm/index.js
function assertNumber(n) {
  if (!Number.isSafeInteger(n))
    throw new Error(`Wrong integer: ${n}`);
}
function isBytes2(a4) {
  return a4 instanceof Uint8Array || a4 != null && typeof a4 === "object" && a4.constructor.name === "Uint8Array";
}
function chain(...args) {
  const id = (a4) => a4;
  const wrap = (a4, b) => (c2) => a4(b(c2));
  const encode = args.map((x) => x.encode).reduceRight(wrap, id);
  const decode = args.map((x) => x.decode).reduce(wrap, id);
  return { encode, decode };
}
function alphabet(alphabet2) {
  return {
    encode: (digits) => {
      if (!Array.isArray(digits) || digits.length && typeof digits[0] !== "number")
        throw new Error("alphabet.encode input should be an array of numbers");
      return digits.map((i3) => {
        assertNumber(i3);
        if (i3 < 0 || i3 >= alphabet2.length)
          throw new Error(`Digit index outside alphabet: ${i3} (alphabet: ${alphabet2.length})`);
        return alphabet2[i3];
      });
    },
    decode: (input) => {
      if (!Array.isArray(input) || input.length && typeof input[0] !== "string")
        throw new Error("alphabet.decode input should be array of strings");
      return input.map((letter) => {
        if (typeof letter !== "string")
          throw new Error(`alphabet.decode: not string element=${letter}`);
        const index = alphabet2.indexOf(letter);
        if (index === -1)
          throw new Error(`Unknown letter: "${letter}". Allowed: ${alphabet2}`);
        return index;
      });
    }
  };
}
function join(separator = "") {
  if (typeof separator !== "string")
    throw new Error("join separator should be string");
  return {
    encode: (from) => {
      if (!Array.isArray(from) || from.length && typeof from[0] !== "string")
        throw new Error("join.encode input should be array of strings");
      for (let i3 of from)
        if (typeof i3 !== "string")
          throw new Error(`join.encode: non-string input=${i3}`);
      return from.join(separator);
    },
    decode: (to) => {
      if (typeof to !== "string")
        throw new Error("join.decode input should be string");
      return to.split(separator);
    }
  };
}
function padding(bits2, chr = "=") {
  assertNumber(bits2);
  if (typeof chr !== "string")
    throw new Error("padding chr should be string");
  return {
    encode(data) {
      if (!Array.isArray(data) || data.length && typeof data[0] !== "string")
        throw new Error("padding.encode input should be array of strings");
      for (let i3 of data)
        if (typeof i3 !== "string")
          throw new Error(`padding.encode: non-string input=${i3}`);
      while (data.length * bits2 % 8)
        data.push(chr);
      return data;
    },
    decode(input) {
      if (!Array.isArray(input) || input.length && typeof input[0] !== "string")
        throw new Error("padding.encode input should be array of strings");
      for (let i3 of input)
        if (typeof i3 !== "string")
          throw new Error(`padding.decode: non-string input=${i3}`);
      let end = input.length;
      if (end * bits2 % 8)
        throw new Error("Invalid padding: string should have whole number of bytes");
      for (; end > 0 && input[end - 1] === chr; end--) {
        if (!((end - 1) * bits2 % 8))
          throw new Error("Invalid padding: string has too much padding");
      }
      return input.slice(0, end);
    }
  };
}
function normalize(fn) {
  if (typeof fn !== "function")
    throw new Error("normalize fn should be function");
  return { encode: (from) => from, decode: (to) => fn(to) };
}
function convertRadix(data, from, to) {
  if (from < 2)
    throw new Error(`convertRadix: wrong from=${from}, base cannot be less than 2`);
  if (to < 2)
    throw new Error(`convertRadix: wrong to=${to}, base cannot be less than 2`);
  if (!Array.isArray(data))
    throw new Error("convertRadix: data should be array");
  if (!data.length)
    return [];
  let pos = 0;
  const res = [];
  const digits = Array.from(data);
  digits.forEach((d2) => {
    assertNumber(d2);
    if (d2 < 0 || d2 >= from)
      throw new Error(`Wrong integer: ${d2}`);
  });
  while (true) {
    let carry = 0;
    let done = true;
    for (let i3 = pos; i3 < digits.length; i3++) {
      const digit = digits[i3];
      const digitBase = from * carry + digit;
      if (!Number.isSafeInteger(digitBase) || from * carry / from !== carry || digitBase - digit !== from * carry) {
        throw new Error("convertRadix: carry overflow");
      }
      carry = digitBase % to;
      const rounded = Math.floor(digitBase / to);
      digits[i3] = rounded;
      if (!Number.isSafeInteger(rounded) || rounded * to + carry !== digitBase)
        throw new Error("convertRadix: carry overflow");
      if (!done)
        continue;
      else if (!rounded)
        pos = i3;
      else
        done = false;
    }
    res.push(carry);
    if (done)
      break;
  }
  for (let i3 = 0; i3 < data.length - 1 && data[i3] === 0; i3++)
    res.push(0);
  return res.reverse();
}
var gcd = (a4, b) => !b ? a4 : gcd(b, a4 % b);
var radix2carry = (from, to) => from + (to - gcd(from, to));
function convertRadix2(data, from, to, padding2) {
  if (!Array.isArray(data))
    throw new Error("convertRadix2: data should be array");
  if (from <= 0 || from > 32)
    throw new Error(`convertRadix2: wrong from=${from}`);
  if (to <= 0 || to > 32)
    throw new Error(`convertRadix2: wrong to=${to}`);
  if (radix2carry(from, to) > 32) {
    throw new Error(`convertRadix2: carry overflow from=${from} to=${to} carryBits=${radix2carry(from, to)}`);
  }
  let carry = 0;
  let pos = 0;
  const mask = 2 ** to - 1;
  const res = [];
  for (const n of data) {
    assertNumber(n);
    if (n >= 2 ** from)
      throw new Error(`convertRadix2: invalid data word=${n} from=${from}`);
    carry = carry << from | n;
    if (pos + from > 32)
      throw new Error(`convertRadix2: carry overflow pos=${pos} from=${from}`);
    pos += from;
    for (; pos >= to; pos -= to)
      res.push((carry >> pos - to & mask) >>> 0);
    carry &= 2 ** pos - 1;
  }
  carry = carry << to - pos & mask;
  if (!padding2 && pos >= from)
    throw new Error("Excess padding");
  if (!padding2 && carry)
    throw new Error(`Non-zero padding: ${carry}`);
  if (padding2 && pos > 0)
    res.push(carry >>> 0);
  return res;
}
function radix(num2) {
  assertNumber(num2);
  return {
    encode: (bytes) => {
      if (!isBytes2(bytes))
        throw new Error("radix.encode input should be Uint8Array");
      return convertRadix(Array.from(bytes), 2 ** 8, num2);
    },
    decode: (digits) => {
      if (!Array.isArray(digits) || digits.length && typeof digits[0] !== "number")
        throw new Error("radix.decode input should be array of numbers");
      return Uint8Array.from(convertRadix(digits, num2, 2 ** 8));
    }
  };
}
function radix2(bits2, revPadding = false) {
  assertNumber(bits2);
  if (bits2 <= 0 || bits2 > 32)
    throw new Error("radix2: bits should be in (0..32]");
  if (radix2carry(8, bits2) > 32 || radix2carry(bits2, 8) > 32)
    throw new Error("radix2: carry overflow");
  return {
    encode: (bytes) => {
      if (!isBytes2(bytes))
        throw new Error("radix2.encode input should be Uint8Array");
      return convertRadix2(Array.from(bytes), 8, bits2, !revPadding);
    },
    decode: (digits) => {
      if (!Array.isArray(digits) || digits.length && typeof digits[0] !== "number")
        throw new Error("radix2.decode input should be array of numbers");
      return Uint8Array.from(convertRadix2(digits, bits2, 8, revPadding));
    }
  };
}
function unsafeWrapper(fn) {
  if (typeof fn !== "function")
    throw new Error("unsafeWrapper fn should be function");
  return function(...args) {
    try {
      return fn.apply(null, args);
    } catch (e3) {
    }
  };
}
var base16 = chain(radix2(4), alphabet("0123456789ABCDEF"), join(""));
var base32 = chain(radix2(5), alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), padding(5), join(""));
var base32nopad = chain(radix2(5), alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), join(""));
var base32hex = chain(radix2(5), alphabet("0123456789ABCDEFGHIJKLMNOPQRSTUV"), padding(5), join(""));
var base32hexnopad = chain(radix2(5), alphabet("0123456789ABCDEFGHIJKLMNOPQRSTUV"), join(""));
var base32crockford = chain(radix2(5), alphabet("0123456789ABCDEFGHJKMNPQRSTVWXYZ"), join(""), normalize((s5) => s5.toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1")));
var base64 = chain(radix2(6), alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), padding(6), join(""));
var base64nopad = chain(radix2(6), alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), join(""));
var base64url = chain(radix2(6), alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), padding(6), join(""));
var base64urlnopad = chain(radix2(6), alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), join(""));
var genBase58 = (abc) => chain(radix(58), alphabet(abc), join(""));
var base58 = genBase58("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
var base58flickr = genBase58("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ");
var base58xrp = genBase58("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz");
var BECH_ALPHABET = chain(alphabet("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), join(""));
var POLYMOD_GENERATORS = [996825010, 642813549, 513874426, 1027748829, 705979059];
function bech32Polymod(pre) {
  const b = pre >> 25;
  let chk = (pre & 33554431) << 5;
  for (let i3 = 0; i3 < POLYMOD_GENERATORS.length; i3++) {
    if ((b >> i3 & 1) === 1)
      chk ^= POLYMOD_GENERATORS[i3];
  }
  return chk;
}
function bechChecksum(prefix, words, encodingConst = 1) {
  const len = prefix.length;
  let chk = 1;
  for (let i3 = 0; i3 < len; i3++) {
    const c2 = prefix.charCodeAt(i3);
    if (c2 < 33 || c2 > 126)
      throw new Error(`Invalid prefix (${prefix})`);
    chk = bech32Polymod(chk) ^ c2 >> 5;
  }
  chk = bech32Polymod(chk);
  for (let i3 = 0; i3 < len; i3++)
    chk = bech32Polymod(chk) ^ prefix.charCodeAt(i3) & 31;
  for (let v of words)
    chk = bech32Polymod(chk) ^ v;
  for (let i3 = 0; i3 < 6; i3++)
    chk = bech32Polymod(chk);
  chk ^= encodingConst;
  return BECH_ALPHABET.encode(convertRadix2([chk % 2 ** 30], 30, 5, false));
}
function genBech32(encoding) {
  const ENCODING_CONST = encoding === "bech32" ? 1 : 734539939;
  const _words = radix2(5);
  const fromWords = _words.decode;
  const toWords = _words.encode;
  const fromWordsUnsafe = unsafeWrapper(fromWords);
  function encode(prefix, words, limit = 90) {
    if (typeof prefix !== "string")
      throw new Error(`bech32.encode prefix should be string, not ${typeof prefix}`);
    if (words instanceof Uint8Array)
      words = Array.from(words);
    if (!Array.isArray(words) || words.length && typeof words[0] !== "number")
      throw new Error(`bech32.encode words should be array of numbers, not ${typeof words}`);
    if (prefix.length === 0)
      throw new TypeError(`Invalid prefix length ${prefix.length}`);
    const actualLength = prefix.length + 7 + words.length;
    if (limit !== false && actualLength > limit)
      throw new TypeError(`Length ${actualLength} exceeds limit ${limit}`);
    const lowered = prefix.toLowerCase();
    const sum = bechChecksum(lowered, words, ENCODING_CONST);
    return `${lowered}1${BECH_ALPHABET.encode(words)}${sum}`;
  }
  function decode(str, limit = 90) {
    if (typeof str !== "string")
      throw new Error(`bech32.decode input should be string, not ${typeof str}`);
    if (str.length < 8 || limit !== false && str.length > limit)
      throw new TypeError(`Wrong string length: ${str.length} (${str}). Expected (8..${limit})`);
    const lowered = str.toLowerCase();
    if (str !== lowered && str !== str.toUpperCase())
      throw new Error(`String must be lowercase or uppercase`);
    const sepIndex = lowered.lastIndexOf("1");
    if (sepIndex === 0 || sepIndex === -1)
      throw new Error(`Letter "1" must be present between prefix and data only`);
    const prefix = lowered.slice(0, sepIndex);
    const data = lowered.slice(sepIndex + 1);
    if (data.length < 6)
      throw new Error("Data must be at least 6 characters long");
    const words = BECH_ALPHABET.decode(data).slice(0, -6);
    const sum = bechChecksum(prefix, words, ENCODING_CONST);
    if (!data.endsWith(sum))
      throw new Error(`Invalid checksum in ${str}: expected "${sum}"`);
    return { prefix, words };
  }
  const decodeUnsafe = unsafeWrapper(decode);
  function decodeToBytes(str) {
    const { prefix, words } = decode(str, false);
    return { prefix, words, bytes: fromWords(words) };
  }
  function encodeFromBytes(prefix, bytes) {
    return encode(prefix, toWords(bytes));
  }
  return {
    encode,
    decode,
    encodeFromBytes,
    decodeToBytes,
    decodeUnsafe,
    fromWords,
    fromWordsUnsafe,
    toWords
  };
}
var bech32 = genBech32("bech32");
var bech32m = genBech32("bech32m");
var hex = chain(radix2(4), alphabet("0123456789abcdef"), join(""), normalize((s5) => {
  if (typeof s5 !== "string" || s5.length % 2)
    throw new TypeError(`hex.decode: expected string, got ${typeof s5} with length ${s5.length}`);
  return s5.toLowerCase();
}));

// node_modules/@privy-io/cross-app-connect/dist/esm/crypto.mjs
var import_buffer = __toESM(require_buffer(), 1);

// node_modules/fflate/esm/browser.js
var ch2 = {};
var wk = function(c2, id, msg, transfer, cb) {
  var w = new Worker(ch2[id] || (ch2[id] = URL.createObjectURL(new Blob([
    c2 + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'
  ], { type: "text/javascript" }))));
  w.onmessage = function(e3) {
    var d2 = e3.data, ed = d2.$e$;
    if (ed) {
      var err2 = new Error(ed[0]);
      err2["code"] = ed[1];
      err2.stack = ed[2];
      cb(err2, null);
    } else
      cb(null, d2);
  };
  w.postMessage(msg, transfer);
  return w;
};
var u8 = Uint8Array;
var u16 = Uint16Array;
var i32 = Int32Array;
var fleb = new u8([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]);
var fdeb = new u8([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]);
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var freb = function(eb, start) {
  var b = new u16(31);
  for (var i3 = 0; i3 < 31; ++i3) {
    b[i3] = start += 1 << eb[i3 - 1];
  }
  var r4 = new i32(b[30]);
  for (var i3 = 1; i3 < 30; ++i3) {
    for (var j = b[i3]; j < b[i3 + 1]; ++j) {
      r4[j] = j - b[i3] << 5 | i3;
    }
  }
  return { b, r: r4 };
};
var _a = freb(fleb, 2);
var fl = _a.b;
var revfl = _a.r;
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0);
var fd = _b.b;
var revfd = _b.r;
var rev = new u16(32768);
for (i3 = 0; i3 < 32768; ++i3) {
  x = (i3 & 43690) >> 1 | (i3 & 21845) << 1;
  x = (x & 52428) >> 2 | (x & 13107) << 2;
  x = (x & 61680) >> 4 | (x & 3855) << 4;
  rev[i3] = ((x & 65280) >> 8 | (x & 255) << 8) >> 1;
}
var x;
var i3;
var hMap = function(cd, mb, r4) {
  var s5 = cd.length;
  var i3 = 0;
  var l = new u16(mb);
  for (; i3 < s5; ++i3) {
    if (cd[i3])
      ++l[cd[i3] - 1];
  }
  var le = new u16(mb);
  for (i3 = 1; i3 < mb; ++i3) {
    le[i3] = le[i3 - 1] + l[i3 - 1] << 1;
  }
  var co;
  if (r4) {
    co = new u16(1 << mb);
    var rvb = 15 - mb;
    for (i3 = 0; i3 < s5; ++i3) {
      if (cd[i3]) {
        var sv = i3 << 4 | cd[i3];
        var r_1 = mb - cd[i3];
        var v = le[cd[i3] - 1]++ << r_1;
        for (var m = v | (1 << r_1) - 1; v <= m; ++v) {
          co[rev[v] >> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s5);
    for (i3 = 0; i3 < s5; ++i3) {
      if (cd[i3]) {
        co[i3] = rev[le[cd[i3] - 1]++] >> 15 - cd[i3];
      }
    }
  }
  return co;
};
var flt = new u8(288);
for (i3 = 0; i3 < 144; ++i3)
  flt[i3] = 8;
var i3;
for (i3 = 144; i3 < 256; ++i3)
  flt[i3] = 9;
var i3;
for (i3 = 256; i3 < 280; ++i3)
  flt[i3] = 7;
var i3;
for (i3 = 280; i3 < 288; ++i3)
  flt[i3] = 8;
var i3;
var fdt = new u8(32);
for (i3 = 0; i3 < 32; ++i3)
  fdt[i3] = 5;
var i3;
var flm = hMap(flt, 9, 0);
var flrm = hMap(flt, 9, 1);
var fdm = hMap(fdt, 5, 0);
var fdrm = hMap(fdt, 5, 1);
var max = function(a4) {
  var m = a4[0];
  for (var i3 = 1; i3 < a4.length; ++i3) {
    if (a4[i3] > m)
      m = a4[i3];
  }
  return m;
};
var bits = function(d2, p, m) {
  var o4 = p / 8 | 0;
  return (d2[o4] | d2[o4 + 1] << 8) >> (p & 7) & m;
};
var bits16 = function(d2, p) {
  var o4 = p / 8 | 0;
  return (d2[o4] | d2[o4 + 1] << 8 | d2[o4 + 2] << 16) >> (p & 7);
};
var shft = function(p) {
  return (p + 7) / 8 | 0;
};
var slc = function(v, s5, e3) {
  if (s5 == null || s5 < 0)
    s5 = 0;
  if (e3 == null || e3 > v.length)
    e3 = v.length;
  return new u8(v.subarray(s5, e3));
};
var ec = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
];
var err = function(ind, msg, nt) {
  var e3 = new Error(msg || ec[ind]);
  e3.code = ind;
  if (Error.captureStackTrace)
    Error.captureStackTrace(e3, err);
  if (!nt)
    throw e3;
  return e3;
};
var inflt = function(dat, st, buf, dict) {
  var sl = dat.length, dl = dict ? dict.length : 0;
  if (!sl || st.f && !st.l)
    return buf || new u8(0);
  var noBuf = !buf;
  var resize = noBuf || st.i != 2;
  var noSt = st.i;
  if (noBuf)
    buf = new u8(sl * 3);
  var cbuf = function(l2) {
    var bl = buf.length;
    if (l2 > bl) {
      var nbuf = new u8(Math.max(bl * 2, l2));
      nbuf.set(buf);
      buf = nbuf;
    }
  };
  var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
  var tbts = sl * 8;
  do {
    if (!lm) {
      final = bits(dat, pos, 1);
      var type = bits(dat, pos + 1, 3);
      pos += 3;
      if (!type) {
        var s5 = shft(pos) + 4, l = dat[s5 - 4] | dat[s5 - 3] << 8, t4 = s5 + l;
        if (t4 > sl) {
          if (noSt)
            err(0);
          break;
        }
        if (resize)
          cbuf(bt + l);
        buf.set(dat.subarray(s5, t4), bt);
        st.b = bt += l, st.p = pos = t4 * 8, st.f = final;
        continue;
      } else if (type == 1)
        lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
      else if (type == 2) {
        var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
        var tl = hLit + bits(dat, pos + 5, 31) + 1;
        pos += 14;
        var ldt = new u8(tl);
        var clt = new u8(19);
        for (var i3 = 0; i3 < hcLen; ++i3) {
          clt[clim[i3]] = bits(dat, pos + i3 * 3, 7);
        }
        pos += hcLen * 3;
        var clb = max(clt), clbmsk = (1 << clb) - 1;
        var clm = hMap(clt, clb, 1);
        for (var i3 = 0; i3 < tl; ) {
          var r4 = clm[bits(dat, pos, clbmsk)];
          pos += r4 & 15;
          var s5 = r4 >> 4;
          if (s5 < 16) {
            ldt[i3++] = s5;
          } else {
            var c2 = 0, n = 0;
            if (s5 == 16)
              n = 3 + bits(dat, pos, 3), pos += 2, c2 = ldt[i3 - 1];
            else if (s5 == 17)
              n = 3 + bits(dat, pos, 7), pos += 3;
            else if (s5 == 18)
              n = 11 + bits(dat, pos, 127), pos += 7;
            while (n--)
              ldt[i3++] = c2;
          }
        }
        var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
        lbt = max(lt);
        dbt = max(dt);
        lm = hMap(lt, lbt, 1);
        dm = hMap(dt, dbt, 1);
      } else
        err(1);
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
    }
    if (resize)
      cbuf(bt + 131072);
    var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
    var lpos = pos;
    for (; ; lpos = pos) {
      var c2 = lm[bits16(dat, pos) & lms], sym = c2 >> 4;
      pos += c2 & 15;
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
      if (!c2)
        err(2);
      if (sym < 256)
        buf[bt++] = sym;
      else if (sym == 256) {
        lpos = pos, lm = null;
        break;
      } else {
        var add2 = sym - 254;
        if (sym > 264) {
          var i3 = sym - 257, b = fleb[i3];
          add2 = bits(dat, pos, (1 << b) - 1) + fl[i3];
          pos += b;
        }
        var d2 = dm[bits16(dat, pos) & dms], dsym = d2 >> 4;
        if (!d2)
          err(3);
        pos += d2 & 15;
        var dt = fd[dsym];
        if (dsym > 3) {
          var b = fdeb[dsym];
          dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
        }
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
        if (resize)
          cbuf(bt + 131072);
        var end = bt + add2;
        if (bt < dt) {
          var shift = dl - dt, dend = Math.min(dt, end);
          if (shift + bt < 0)
            err(3);
          for (; bt < dend; ++bt)
            buf[bt] = dict[shift + bt];
        }
        for (; bt < end; ++bt)
          buf[bt] = buf[bt - dt];
      }
    }
    st.l = lm, st.p = lpos, st.b = bt, st.f = final;
    if (lm)
      final = 1, st.m = lbt, st.d = dm, st.n = dbt;
  } while (!final);
  return bt != buf.length && noBuf ? slc(buf, 0, bt) : buf.subarray(0, bt);
};
var wbits = function(d2, p, v) {
  v <<= p & 7;
  var o4 = p / 8 | 0;
  d2[o4] |= v;
  d2[o4 + 1] |= v >> 8;
};
var wbits16 = function(d2, p, v) {
  v <<= p & 7;
  var o4 = p / 8 | 0;
  d2[o4] |= v;
  d2[o4 + 1] |= v >> 8;
  d2[o4 + 2] |= v >> 16;
};
var hTree = function(d2, mb) {
  var t4 = [];
  for (var i3 = 0; i3 < d2.length; ++i3) {
    if (d2[i3])
      t4.push({ s: i3, f: d2[i3] });
  }
  var s5 = t4.length;
  var t22 = t4.slice();
  if (!s5)
    return { t: et, l: 0 };
  if (s5 == 1) {
    var v = new u8(t4[0].s + 1);
    v[t4[0].s] = 1;
    return { t: v, l: 1 };
  }
  t4.sort(function(a4, b) {
    return a4.f - b.f;
  });
  t4.push({ s: -1, f: 25001 });
  var l = t4[0], r4 = t4[1], i0 = 0, i1 = 1, i22 = 2;
  t4[0] = { s: -1, f: l.f + r4.f, l, r: r4 };
  while (i1 != s5 - 1) {
    l = t4[t4[i0].f < t4[i22].f ? i0++ : i22++];
    r4 = t4[i0 != i1 && t4[i0].f < t4[i22].f ? i0++ : i22++];
    t4[i1++] = { s: -1, f: l.f + r4.f, l, r: r4 };
  }
  var maxSym = t22[0].s;
  for (var i3 = 1; i3 < s5; ++i3) {
    if (t22[i3].s > maxSym)
      maxSym = t22[i3].s;
  }
  var tr = new u16(maxSym + 1);
  var mbt = ln(t4[i1 - 1], tr, 0);
  if (mbt > mb) {
    var i3 = 0, dt = 0;
    var lft = mbt - mb, cst = 1 << lft;
    t22.sort(function(a4, b) {
      return tr[b.s] - tr[a4.s] || a4.f - b.f;
    });
    for (; i3 < s5; ++i3) {
      var i2_1 = t22[i3].s;
      if (tr[i2_1] > mb) {
        dt += cst - (1 << mbt - tr[i2_1]);
        tr[i2_1] = mb;
      } else
        break;
    }
    dt >>= lft;
    while (dt > 0) {
      var i2_2 = t22[i3].s;
      if (tr[i2_2] < mb)
        dt -= 1 << mb - tr[i2_2]++ - 1;
      else
        ++i3;
    }
    for (; i3 >= 0 && dt; --i3) {
      var i2_3 = t22[i3].s;
      if (tr[i2_3] == mb) {
        --tr[i2_3];
        ++dt;
      }
    }
    mbt = mb;
  }
  return { t: new u8(tr), l: mbt };
};
var ln = function(n, l, d2) {
  return n.s == -1 ? Math.max(ln(n.l, l, d2 + 1), ln(n.r, l, d2 + 1)) : l[n.s] = d2;
};
var lc = function(c2) {
  var s5 = c2.length;
  while (s5 && !c2[--s5])
    ;
  var cl = new u16(++s5);
  var cli = 0, cln = c2[0], cls = 1;
  var w = function(v) {
    cl[cli++] = v;
  };
  for (var i3 = 1; i3 <= s5; ++i3) {
    if (c2[i3] == cln && i3 != s5)
      ++cls;
    else {
      if (!cln && cls > 2) {
        for (; cls > 138; cls -= 138)
          w(32754);
        if (cls > 2) {
          w(cls > 10 ? cls - 11 << 5 | 28690 : cls - 3 << 5 | 12305);
          cls = 0;
        }
      } else if (cls > 3) {
        w(cln), --cls;
        for (; cls > 6; cls -= 6)
          w(8304);
        if (cls > 2)
          w(cls - 3 << 5 | 8208), cls = 0;
      }
      while (cls--)
        w(cln);
      cls = 1;
      cln = c2[i3];
    }
  }
  return { c: cl.subarray(0, cli), n: s5 };
};
var clen = function(cf, cl) {
  var l = 0;
  for (var i3 = 0; i3 < cl.length; ++i3)
    l += cf[i3] * cl[i3];
  return l;
};
var wfblk = function(out, pos, dat) {
  var s5 = dat.length;
  var o4 = shft(pos + 2);
  out[o4] = s5 & 255;
  out[o4 + 1] = s5 >> 8;
  out[o4 + 2] = out[o4] ^ 255;
  out[o4 + 3] = out[o4 + 1] ^ 255;
  for (var i3 = 0; i3 < s5; ++i3)
    out[o4 + i3 + 4] = dat[i3];
  return (o4 + 4 + s5) * 8;
};
var wblk = function(dat, out, final, syms, lf, df, eb, li, bs, bl, p) {
  wbits(out, p++, final);
  ++lf[256];
  var _a2 = hTree(lf, 15), dlt = _a2.t, mlb = _a2.l;
  var _b2 = hTree(df, 15), ddt = _b2.t, mdb = _b2.l;
  var _c = lc(dlt), lclt = _c.c, nlc = _c.n;
  var _d = lc(ddt), lcdt = _d.c, ndc = _d.n;
  var lcfreq = new u16(19);
  for (var i3 = 0; i3 < lclt.length; ++i3)
    ++lcfreq[lclt[i3] & 31];
  for (var i3 = 0; i3 < lcdt.length; ++i3)
    ++lcfreq[lcdt[i3] & 31];
  var _e = hTree(lcfreq, 7), lct = _e.t, mlcb = _e.l;
  var nlcc = 19;
  for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc)
    ;
  var flen = bl + 5 << 3;
  var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
  var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + 2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18];
  if (bs >= 0 && flen <= ftlen && flen <= dtlen)
    return wfblk(out, p, dat.subarray(bs, bs + bl));
  var lm, ll, dm, dl;
  wbits(out, p, 1 + (dtlen < ftlen)), p += 2;
  if (dtlen < ftlen) {
    lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
    var llm = hMap(lct, mlcb, 0);
    wbits(out, p, nlc - 257);
    wbits(out, p + 5, ndc - 1);
    wbits(out, p + 10, nlcc - 4);
    p += 14;
    for (var i3 = 0; i3 < nlcc; ++i3)
      wbits(out, p + 3 * i3, lct[clim[i3]]);
    p += 3 * nlcc;
    var lcts = [lclt, lcdt];
    for (var it = 0; it < 2; ++it) {
      var clct = lcts[it];
      for (var i3 = 0; i3 < clct.length; ++i3) {
        var len = clct[i3] & 31;
        wbits(out, p, llm[len]), p += lct[len];
        if (len > 15)
          wbits(out, p, clct[i3] >> 5 & 127), p += clct[i3] >> 12;
      }
    }
  } else {
    lm = flm, ll = flt, dm = fdm, dl = fdt;
  }
  for (var i3 = 0; i3 < li; ++i3) {
    var sym = syms[i3];
    if (sym > 255) {
      var len = sym >> 18 & 31;
      wbits16(out, p, lm[len + 257]), p += ll[len + 257];
      if (len > 7)
        wbits(out, p, sym >> 23 & 31), p += fleb[len];
      var dst = sym & 31;
      wbits16(out, p, dm[dst]), p += dl[dst];
      if (dst > 3)
        wbits16(out, p, sym >> 5 & 8191), p += fdeb[dst];
    } else {
      wbits16(out, p, lm[sym]), p += ll[sym];
    }
  }
  wbits16(out, p, lm[256]);
  return p + ll[256];
};
var deo = new i32([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
var et = new u8(0);
var dflt = function(dat, lvl, plvl, pre, post, st) {
  var s5 = st.z || dat.length;
  var o4 = new u8(pre + s5 + 5 * (1 + Math.ceil(s5 / 7e3)) + post);
  var w = o4.subarray(pre, o4.length - post);
  var lst = st.l;
  var pos = (st.r || 0) & 7;
  if (lvl) {
    if (pos)
      w[0] = st.r >> 3;
    var opt = deo[lvl - 1];
    var n = opt >> 13, c2 = opt & 8191;
    var msk_1 = (1 << plvl) - 1;
    var prev = st.p || new u16(32768), head = st.h || new u16(msk_1 + 1);
    var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
    var hsh = function(i4) {
      return (dat[i4] ^ dat[i4 + 1] << bs1_1 ^ dat[i4 + 2] << bs2_1) & msk_1;
    };
    var syms = new i32(25e3);
    var lf = new u16(288), df = new u16(32);
    var lc_1 = 0, eb = 0, i3 = st.i || 0, li = 0, wi = st.w || 0, bs = 0;
    for (; i3 + 2 < s5; ++i3) {
      var hv = hsh(i3);
      var imod = i3 & 32767, pimod = head[hv];
      prev[imod] = pimod;
      head[hv] = imod;
      if (wi <= i3) {
        var rem = s5 - i3;
        if ((lc_1 > 7e3 || li > 24576) && (rem > 423 || !lst)) {
          pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i3 - bs, pos);
          li = lc_1 = eb = 0, bs = i3;
          for (var j = 0; j < 286; ++j)
            lf[j] = 0;
          for (var j = 0; j < 30; ++j)
            df[j] = 0;
        }
        var l = 2, d2 = 0, ch_1 = c2, dif = imod - pimod & 32767;
        if (rem > 2 && hv == hsh(i3 - dif)) {
          var maxn = Math.min(n, rem) - 1;
          var maxd = Math.min(32767, i3);
          var ml = Math.min(258, rem);
          while (dif <= maxd && --ch_1 && imod != pimod) {
            if (dat[i3 + l] == dat[i3 + l - dif]) {
              var nl = 0;
              for (; nl < ml && dat[i3 + nl] == dat[i3 + nl - dif]; ++nl)
                ;
              if (nl > l) {
                l = nl, d2 = dif;
                if (nl > maxn)
                  break;
                var mmd = Math.min(dif, nl - 2);
                var md = 0;
                for (var j = 0; j < mmd; ++j) {
                  var ti = i3 - dif + j & 32767;
                  var pti = prev[ti];
                  var cd = ti - pti & 32767;
                  if (cd > md)
                    md = cd, pimod = ti;
                }
              }
            }
            imod = pimod, pimod = prev[imod];
            dif += imod - pimod & 32767;
          }
        }
        if (d2) {
          syms[li++] = 268435456 | revfl[l] << 18 | revfd[d2];
          var lin = revfl[l] & 31, din = revfd[d2] & 31;
          eb += fleb[lin] + fdeb[din];
          ++lf[257 + lin];
          ++df[din];
          wi = i3 + l;
          ++lc_1;
        } else {
          syms[li++] = dat[i3];
          ++lf[dat[i3]];
        }
      }
    }
    for (i3 = Math.max(i3, wi); i3 < s5; ++i3) {
      syms[li++] = dat[i3];
      ++lf[dat[i3]];
    }
    pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i3 - bs, pos);
    if (!lst) {
      st.r = pos & 7 | w[pos / 8 | 0] << 3;
      pos -= 7;
      st.h = head, st.p = prev, st.i = i3, st.w = wi;
    }
  } else {
    for (var i3 = st.w || 0; i3 < s5 + lst; i3 += 65535) {
      var e3 = i3 + 65535;
      if (e3 >= s5) {
        w[pos / 8 | 0] = lst;
        e3 = s5;
      }
      pos = wfblk(w, pos + 1, dat.subarray(i3, e3));
    }
    st.i = s5;
  }
  return slc(o4, 0, pre + shft(pos) + post);
};
var crct = function() {
  var t4 = new Int32Array(256);
  for (var i3 = 0; i3 < 256; ++i3) {
    var c2 = i3, k = 9;
    while (--k)
      c2 = (c2 & 1 && -306674912) ^ c2 >>> 1;
    t4[i3] = c2;
  }
  return t4;
}();
var crc = function() {
  var c2 = -1;
  return {
    p: function(d2) {
      var cr = c2;
      for (var i3 = 0; i3 < d2.length; ++i3)
        cr = crct[cr & 255 ^ d2[i3]] ^ cr >>> 8;
      c2 = cr;
    },
    d: function() {
      return ~c2;
    }
  };
};
var adler = function() {
  var a4 = 1, b = 0;
  return {
    p: function(d2) {
      var n = a4, m = b;
      var l = d2.length | 0;
      for (var i3 = 0; i3 != l; ) {
        var e3 = Math.min(i3 + 2655, l);
        for (; i3 < e3; ++i3)
          m += n += d2[i3];
        n = (n & 65535) + 15 * (n >> 16), m = (m & 65535) + 15 * (m >> 16);
      }
      a4 = n, b = m;
    },
    d: function() {
      a4 %= 65521, b %= 65521;
      return (a4 & 255) << 24 | (a4 & 65280) << 8 | (b & 255) << 8 | b >> 8;
    }
  };
};
var dopt = function(dat, opt, pre, post, st) {
  if (!st) {
    st = { l: 1 };
    if (opt.dictionary) {
      var dict = opt.dictionary.subarray(-32768);
      var newDat = new u8(dict.length + dat.length);
      newDat.set(dict);
      newDat.set(dat, dict.length);
      dat = newDat;
      st.w = dict.length;
    }
  }
  return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? st.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : 20 : 12 + opt.mem, pre, post, st);
};
var mrg = function(a4, b) {
  var o4 = {};
  for (var k in a4)
    o4[k] = a4[k];
  for (var k in b)
    o4[k] = b[k];
  return o4;
};
var wcln = function(fn, fnStr, td2) {
  var dt = fn();
  var st = fn.toString();
  var ks = st.slice(st.indexOf("[") + 1, st.lastIndexOf("]")).replace(/\s+/g, "").split(",");
  for (var i3 = 0; i3 < dt.length; ++i3) {
    var v = dt[i3], k = ks[i3];
    if (typeof v == "function") {
      fnStr += ";" + k + "=";
      var st_1 = v.toString();
      if (v.prototype) {
        if (st_1.indexOf("[native code]") != -1) {
          var spInd = st_1.indexOf(" ", 8) + 1;
          fnStr += st_1.slice(spInd, st_1.indexOf("(", spInd));
        } else {
          fnStr += st_1;
          for (var t4 in v.prototype)
            fnStr += ";" + k + ".prototype." + t4 + "=" + v.prototype[t4].toString();
        }
      } else
        fnStr += st_1;
    } else
      td2[k] = v;
  }
  return fnStr;
};
var ch = [];
var cbfs = function(v) {
  var tl = [];
  for (var k in v) {
    if (v[k].buffer) {
      tl.push((v[k] = new v[k].constructor(v[k])).buffer);
    }
  }
  return tl;
};
var wrkr = function(fns, init, id, cb) {
  if (!ch[id]) {
    var fnStr = "", td_1 = {}, m = fns.length - 1;
    for (var i3 = 0; i3 < m; ++i3)
      fnStr = wcln(fns[i3], fnStr, td_1);
    ch[id] = { c: wcln(fns[m], fnStr, td_1), e: td_1 };
  }
  var td2 = mrg({}, ch[id].e);
  return wk(ch[id].c + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + init.toString() + "}", id, td2, cbfs(td2), cb);
};
var bInflt = function() {
  return [u8, u16, i32, fleb, fdeb, clim, fl, fd, flrm, fdrm, rev, ec, hMap, max, bits, bits16, shft, slc, err, inflt, inflateSync, pbf, gopt];
};
var bDflt = function() {
  return [u8, u16, i32, fleb, fdeb, clim, revfl, revfd, flm, flt, fdm, fdt, rev, deo, et, hMap, wbits, wbits16, hTree, ln, lc, clen, wfblk, wblk, shft, slc, dflt, dopt, deflateSync, pbf];
};
var guze = function() {
  return [gzs, gzl];
};
var zule = function() {
  return [zls];
};
var pbf = function(msg) {
  return postMessage(msg, [msg.buffer]);
};
var gopt = function(o4) {
  return o4 && {
    out: o4.size && new u8(o4.size),
    dictionary: o4.dictionary
  };
};
var astrm = function(strm) {
  strm.ondata = function(dat, final) {
    return postMessage([dat, final], [dat.buffer]);
  };
  return function(ev) {
    if (ev.data.length) {
      strm.push(ev.data[0], ev.data[1]);
      postMessage([ev.data[0].length]);
    } else
      strm.flush();
  };
};
var astrmify = function(fns, strm, opts, init, id, flush, ext) {
  var t4;
  var w = wrkr(fns, init, id, function(err2, dat) {
    if (err2)
      w.terminate(), strm.ondata.call(strm, err2);
    else if (!Array.isArray(dat))
      ext(dat);
    else if (dat.length == 1) {
      strm.queuedSize -= dat[0];
      if (strm.ondrain)
        strm.ondrain(dat[0]);
    } else {
      if (dat[1])
        w.terminate();
      strm.ondata.call(strm, err2, dat[0], dat[1]);
    }
  });
  w.postMessage(opts);
  strm.queuedSize = 0;
  strm.push = function(d2, f) {
    if (!strm.ondata)
      err(5);
    if (t4)
      strm.ondata(err(4, 0, 1), null, !!f);
    strm.queuedSize += d2.length;
    w.postMessage([d2, t4 = f], [d2.buffer]);
  };
  strm.terminate = function() {
    w.terminate();
  };
  if (flush) {
    strm.flush = function() {
      w.postMessage([]);
    };
  }
};
var b2 = function(d2, b) {
  return d2[b] | d2[b + 1] << 8;
};
var b4 = function(d2, b) {
  return (d2[b] | d2[b + 1] << 8 | d2[b + 2] << 16 | d2[b + 3] << 24) >>> 0;
};
var b8 = function(d2, b) {
  return b4(d2, b) + b4(d2, b + 4) * 4294967296;
};
var wbytes = function(d2, b, v) {
  for (; v; ++b)
    d2[b] = v, v >>>= 8;
};
var gzh = function(c2, o4) {
  var fn = o4.filename;
  c2[0] = 31, c2[1] = 139, c2[2] = 8, c2[8] = o4.level < 2 ? 4 : o4.level == 9 ? 2 : 0, c2[9] = 3;
  if (o4.mtime != 0)
    wbytes(c2, 4, Math.floor(new Date(o4.mtime || Date.now()) / 1e3));
  if (fn) {
    c2[3] = 8;
    for (var i3 = 0; i3 <= fn.length; ++i3)
      c2[i3 + 10] = fn.charCodeAt(i3);
  }
};
var gzs = function(d2) {
  if (d2[0] != 31 || d2[1] != 139 || d2[2] != 8)
    err(6, "invalid gzip data");
  var flg = d2[3];
  var st = 10;
  if (flg & 4)
    st += (d2[10] | d2[11] << 8) + 2;
  for (var zs = (flg >> 3 & 1) + (flg >> 4 & 1); zs > 0; zs -= !d2[st++])
    ;
  return st + (flg & 2);
};
var gzl = function(d2) {
  var l = d2.length;
  return (d2[l - 4] | d2[l - 3] << 8 | d2[l - 2] << 16 | d2[l - 1] << 24) >>> 0;
};
var gzhl = function(o4) {
  return 10 + (o4.filename ? o4.filename.length + 1 : 0);
};
var zlh = function(c2, o4) {
  var lv = o4.level, fl2 = lv == 0 ? 0 : lv < 6 ? 1 : lv == 9 ? 3 : 2;
  c2[0] = 120, c2[1] = fl2 << 6 | (o4.dictionary && 32);
  c2[1] |= 31 - (c2[0] << 8 | c2[1]) % 31;
  if (o4.dictionary) {
    var h = adler();
    h.p(o4.dictionary);
    wbytes(c2, 2, h.d());
  }
};
var zls = function(d2, dict) {
  if ((d2[0] & 15) != 8 || d2[0] >> 4 > 7 || (d2[0] << 8 | d2[1]) % 31)
    err(6, "invalid zlib data");
  if ((d2[1] >> 5 & 1) == +!dict)
    err(6, "invalid zlib data: " + (d2[1] & 32 ? "need" : "unexpected") + " dictionary");
  return (d2[1] >> 3 & 4) + 2;
};
function StrmOpt(opts, cb) {
  if (typeof opts == "function")
    cb = opts, opts = {};
  this.ondata = cb;
  return opts;
}
var Deflate = function() {
  function Deflate2(opts, cb) {
    if (typeof opts == "function")
      cb = opts, opts = {};
    this.ondata = cb;
    this.o = opts || {};
    this.s = { l: 0, i: 32768, w: 32768, z: 32768 };
    this.b = new u8(98304);
    if (this.o.dictionary) {
      var dict = this.o.dictionary.subarray(-32768);
      this.b.set(dict, 32768 - dict.length);
      this.s.i = 32768 - dict.length;
    }
  }
  Deflate2.prototype.p = function(c2, f) {
    this.ondata(dopt(c2, this.o, 0, 0, this.s), f);
  };
  Deflate2.prototype.push = function(chunk, final) {
    if (!this.ondata)
      err(5);
    if (this.s.l)
      err(4);
    var endLen = chunk.length + this.s.z;
    if (endLen > this.b.length) {
      if (endLen > 2 * this.b.length - 32768) {
        var newBuf = new u8(endLen & -32768);
        newBuf.set(this.b.subarray(0, this.s.z));
        this.b = newBuf;
      }
      var split2 = this.b.length - this.s.z;
      this.b.set(chunk.subarray(0, split2), this.s.z);
      this.s.z = this.b.length;
      this.p(this.b, false);
      this.b.set(this.b.subarray(-32768));
      this.b.set(chunk.subarray(split2), 32768);
      this.s.z = chunk.length - split2 + 32768;
      this.s.i = 32766, this.s.w = 32768;
    } else {
      this.b.set(chunk, this.s.z);
      this.s.z += chunk.length;
    }
    this.s.l = final & 1;
    if (this.s.z > this.s.w + 8191 || final) {
      this.p(this.b, final || false);
      this.s.w = this.s.i, this.s.i -= 2;
    }
  };
  Deflate2.prototype.flush = function() {
    if (!this.ondata)
      err(5);
    if (this.s.l)
      err(4);
    this.p(this.b, false);
    this.s.w = this.s.i, this.s.i -= 2;
  };
  return Deflate2;
}();
var AsyncDeflate = /* @__PURE__ */ function() {
  function AsyncDeflate2(opts, cb) {
    astrmify([
      bDflt,
      function() {
        return [astrm, Deflate];
      }
    ], this, StrmOpt.call(this, opts, cb), function(ev) {
      var strm = new Deflate(ev.data);
      onmessage = astrm(strm);
    }, 6, 1);
  }
  return AsyncDeflate2;
}();
function deflateSync(data, opts) {
  return dopt(data, opts || {}, 0, 0);
}
var Inflate = function() {
  function Inflate2(opts, cb) {
    if (typeof opts == "function")
      cb = opts, opts = {};
    this.ondata = cb;
    var dict = opts && opts.dictionary && opts.dictionary.subarray(-32768);
    this.s = { i: 0, b: dict ? dict.length : 0 };
    this.o = new u8(32768);
    this.p = new u8(0);
    if (dict)
      this.o.set(dict);
  }
  Inflate2.prototype.e = function(c2) {
    if (!this.ondata)
      err(5);
    if (this.d)
      err(4);
    if (!this.p.length)
      this.p = c2;
    else if (c2.length) {
      var n = new u8(this.p.length + c2.length);
      n.set(this.p), n.set(c2, this.p.length), this.p = n;
    }
  };
  Inflate2.prototype.c = function(final) {
    this.s.i = +(this.d = final || false);
    var bts = this.s.b;
    var dt = inflt(this.p, this.s, this.o);
    this.ondata(slc(dt, bts, this.s.b), this.d);
    this.o = slc(dt, this.s.b - 32768), this.s.b = this.o.length;
    this.p = slc(this.p, this.s.p / 8 | 0), this.s.p &= 7;
  };
  Inflate2.prototype.push = function(chunk, final) {
    this.e(chunk), this.c(final);
  };
  return Inflate2;
}();
var AsyncInflate = /* @__PURE__ */ function() {
  function AsyncInflate2(opts, cb) {
    astrmify([
      bInflt,
      function() {
        return [astrm, Inflate];
      }
    ], this, StrmOpt.call(this, opts, cb), function(ev) {
      var strm = new Inflate(ev.data);
      onmessage = astrm(strm);
    }, 7, 0);
  }
  return AsyncInflate2;
}();
function inflateSync(data, opts) {
  return inflt(data, { i: 2 }, opts && opts.out, opts && opts.dictionary);
}
var Gzip = function() {
  function Gzip2(opts, cb) {
    this.c = crc();
    this.l = 0;
    this.v = 1;
    Deflate.call(this, opts, cb);
  }
  Gzip2.prototype.push = function(chunk, final) {
    this.c.p(chunk);
    this.l += chunk.length;
    Deflate.prototype.push.call(this, chunk, final);
  };
  Gzip2.prototype.p = function(c2, f) {
    var raw = dopt(c2, this.o, this.v && gzhl(this.o), f && 8, this.s);
    if (this.v)
      gzh(raw, this.o), this.v = 0;
    if (f)
      wbytes(raw, raw.length - 8, this.c.d()), wbytes(raw, raw.length - 4, this.l);
    this.ondata(raw, f);
  };
  Gzip2.prototype.flush = function() {
    Deflate.prototype.flush.call(this);
  };
  return Gzip2;
}();
var Gunzip = function() {
  function Gunzip2(opts, cb) {
    this.v = 1;
    this.r = 0;
    Inflate.call(this, opts, cb);
  }
  Gunzip2.prototype.push = function(chunk, final) {
    Inflate.prototype.e.call(this, chunk);
    this.r += chunk.length;
    if (this.v) {
      var p = this.p.subarray(this.v - 1);
      var s5 = p.length > 3 ? gzs(p) : 4;
      if (s5 > p.length) {
        if (!final)
          return;
      } else if (this.v > 1 && this.onmember) {
        this.onmember(this.r - p.length);
      }
      this.p = p.subarray(s5), this.v = 0;
    }
    Inflate.prototype.c.call(this, final);
    if (this.s.f && !this.s.l && !final) {
      this.v = shft(this.s.p) + 9;
      this.s = { i: 0 };
      this.o = new u8(0);
      this.push(new u8(0), final);
    }
  };
  return Gunzip2;
}();
var AsyncGunzip = /* @__PURE__ */ function() {
  function AsyncGunzip2(opts, cb) {
    var _this = this;
    astrmify([
      bInflt,
      guze,
      function() {
        return [astrm, Inflate, Gunzip];
      }
    ], this, StrmOpt.call(this, opts, cb), function(ev) {
      var strm = new Gunzip(ev.data);
      strm.onmember = function(offset) {
        return postMessage(offset);
      };
      onmessage = astrm(strm);
    }, 9, 0, function(offset) {
      return _this.onmember && _this.onmember(offset);
    });
  }
  return AsyncGunzip2;
}();
var Zlib = function() {
  function Zlib2(opts, cb) {
    this.c = adler();
    this.v = 1;
    Deflate.call(this, opts, cb);
  }
  Zlib2.prototype.push = function(chunk, final) {
    this.c.p(chunk);
    Deflate.prototype.push.call(this, chunk, final);
  };
  Zlib2.prototype.p = function(c2, f) {
    var raw = dopt(c2, this.o, this.v && (this.o.dictionary ? 6 : 2), f && 4, this.s);
    if (this.v)
      zlh(raw, this.o), this.v = 0;
    if (f)
      wbytes(raw, raw.length - 4, this.c.d());
    this.ondata(raw, f);
  };
  Zlib2.prototype.flush = function() {
    Deflate.prototype.flush.call(this);
  };
  return Zlib2;
}();
function zlibSync(data, opts) {
  if (!opts)
    opts = {};
  var a4 = adler();
  a4.p(data);
  var d2 = dopt(data, opts, opts.dictionary ? 6 : 2, 4);
  return zlh(d2, opts), wbytes(d2, d2.length - 4, a4.d()), d2;
}
var Unzlib = function() {
  function Unzlib2(opts, cb) {
    Inflate.call(this, opts, cb);
    this.v = opts && opts.dictionary ? 2 : 1;
  }
  Unzlib2.prototype.push = function(chunk, final) {
    Inflate.prototype.e.call(this, chunk);
    if (this.v) {
      if (this.p.length < 6 && !final)
        return;
      this.p = this.p.subarray(zls(this.p, this.v - 1)), this.v = 0;
    }
    if (final) {
      if (this.p.length < 4)
        err(6, "invalid zlib data");
      this.p = this.p.subarray(0, -4);
    }
    Inflate.prototype.c.call(this, final);
  };
  return Unzlib2;
}();
var AsyncUnzlib = /* @__PURE__ */ function() {
  function AsyncUnzlib2(opts, cb) {
    astrmify([
      bInflt,
      zule,
      function() {
        return [astrm, Inflate, Unzlib];
      }
    ], this, StrmOpt.call(this, opts, cb), function(ev) {
      var strm = new Unzlib(ev.data);
      onmessage = astrm(strm);
    }, 11, 0);
  }
  return AsyncUnzlib2;
}();
function unzlibSync(data, opts) {
  return inflt(data.subarray(zls(data, opts && opts.dictionary), -4), { i: 2 }, opts && opts.out, opts && opts.dictionary);
}
var Decompress = function() {
  function Decompress2(opts, cb) {
    this.o = StrmOpt.call(this, opts, cb) || {};
    this.G = Gunzip;
    this.I = Inflate;
    this.Z = Unzlib;
  }
  Decompress2.prototype.i = function() {
    var _this = this;
    this.s.ondata = function(dat, final) {
      _this.ondata(dat, final);
    };
  };
  Decompress2.prototype.push = function(chunk, final) {
    if (!this.ondata)
      err(5);
    if (!this.s) {
      if (this.p && this.p.length) {
        var n = new u8(this.p.length + chunk.length);
        n.set(this.p), n.set(chunk, this.p.length);
      } else
        this.p = chunk;
      if (this.p.length > 2) {
        this.s = this.p[0] == 31 && this.p[1] == 139 && this.p[2] == 8 ? new this.G(this.o) : (this.p[0] & 15) != 8 || this.p[0] >> 4 > 7 || (this.p[0] << 8 | this.p[1]) % 31 ? new this.I(this.o) : new this.Z(this.o);
        this.i();
        this.s.push(this.p, final);
        this.p = null;
      }
    } else
      this.s.push(chunk, final);
  };
  return Decompress2;
}();
var AsyncDecompress = function() {
  function AsyncDecompress2(opts, cb) {
    Decompress.call(this, opts, cb);
    this.queuedSize = 0;
    this.G = AsyncGunzip;
    this.I = AsyncInflate;
    this.Z = AsyncUnzlib;
  }
  AsyncDecompress2.prototype.i = function() {
    var _this = this;
    this.s.ondata = function(err2, dat, final) {
      _this.ondata(err2, dat, final);
    };
    this.s.ondrain = function(size) {
      _this.queuedSize -= size;
      if (_this.ondrain)
        _this.ondrain(size);
    };
  };
  AsyncDecompress2.prototype.push = function(chunk, final) {
    this.queuedSize += chunk.length;
    Decompress.prototype.push.call(this, chunk, final);
  };
  return AsyncDecompress2;
}();
var te = typeof TextEncoder != "undefined" && new TextEncoder();
var td = typeof TextDecoder != "undefined" && new TextDecoder();
var tds = 0;
try {
  td.decode(et, { stream: true });
  tds = 1;
} catch (e3) {
}
var dutf8 = function(d2) {
  for (var r4 = "", i3 = 0; ; ) {
    var c2 = d2[i3++];
    var eb = (c2 > 127) + (c2 > 223) + (c2 > 239);
    if (i3 + eb > d2.length)
      return { s: r4, r: slc(d2, i3 - 1) };
    if (!eb)
      r4 += String.fromCharCode(c2);
    else if (eb == 3) {
      c2 = ((c2 & 15) << 18 | (d2[i3++] & 63) << 12 | (d2[i3++] & 63) << 6 | d2[i3++] & 63) - 65536, r4 += String.fromCharCode(55296 | c2 >> 10, 56320 | c2 & 1023);
    } else if (eb & 1)
      r4 += String.fromCharCode((c2 & 31) << 6 | d2[i3++] & 63);
    else
      r4 += String.fromCharCode((c2 & 15) << 12 | (d2[i3++] & 63) << 6 | d2[i3++] & 63);
  }
};
var DecodeUTF8 = function() {
  function DecodeUTF82(cb) {
    this.ondata = cb;
    if (tds)
      this.t = new TextDecoder();
    else
      this.p = et;
  }
  DecodeUTF82.prototype.push = function(chunk, final) {
    if (!this.ondata)
      err(5);
    final = !!final;
    if (this.t) {
      this.ondata(this.t.decode(chunk, { stream: true }), final);
      if (final) {
        if (this.t.decode().length)
          err(8);
        this.t = null;
      }
      return;
    }
    if (!this.p)
      err(4);
    var dat = new u8(this.p.length + chunk.length);
    dat.set(this.p);
    dat.set(chunk, this.p.length);
    var _a2 = dutf8(dat), s5 = _a2.s, r4 = _a2.r;
    if (final) {
      if (r4.length)
        err(8);
      this.p = null;
    } else
      this.p = r4;
    this.ondata(s5, final);
  };
  return DecodeUTF82;
}();
var EncodeUTF8 = function() {
  function EncodeUTF82(cb) {
    this.ondata = cb;
  }
  EncodeUTF82.prototype.push = function(chunk, final) {
    if (!this.ondata)
      err(5);
    if (this.d)
      err(4);
    this.ondata(strToU8(chunk), this.d = final || false);
  };
  return EncodeUTF82;
}();
function strToU8(str, latin1) {
  if (latin1) {
    var ar_1 = new u8(str.length);
    for (var i3 = 0; i3 < str.length; ++i3)
      ar_1[i3] = str.charCodeAt(i3);
    return ar_1;
  }
  if (te)
    return te.encode(str);
  var l = str.length;
  var ar = new u8(str.length + (str.length >> 1));
  var ai = 0;
  var w = function(v) {
    ar[ai++] = v;
  };
  for (var i3 = 0; i3 < l; ++i3) {
    if (ai + 5 > ar.length) {
      var n = new u8(ai + 8 + (l - i3 << 1));
      n.set(ar);
      ar = n;
    }
    var c2 = str.charCodeAt(i3);
    if (c2 < 128 || latin1)
      w(c2);
    else if (c2 < 2048)
      w(192 | c2 >> 6), w(128 | c2 & 63);
    else if (c2 > 55295 && c2 < 57344)
      c2 = 65536 + (c2 & 1023 << 10) | str.charCodeAt(++i3) & 1023, w(240 | c2 >> 18), w(128 | c2 >> 12 & 63), w(128 | c2 >> 6 & 63), w(128 | c2 & 63);
    else
      w(224 | c2 >> 12), w(128 | c2 >> 6 & 63), w(128 | c2 & 63);
  }
  return slc(ar, 0, ai);
}
function strFromU8(dat, latin1) {
  if (latin1) {
    var r4 = "";
    for (var i3 = 0; i3 < dat.length; i3 += 16384)
      r4 += String.fromCharCode.apply(null, dat.subarray(i3, i3 + 16384));
    return r4;
  } else if (td) {
    return td.decode(dat);
  } else {
    var _a2 = dutf8(dat), s5 = _a2.s, r4 = _a2.r;
    if (r4.length)
      err(8);
    return s5;
  }
}
var dbf = function(l) {
  return l == 1 ? 3 : l < 6 ? 2 : l == 9 ? 1 : 0;
};
var z64e = function(d2, b) {
  for (; b2(d2, b) != 1; b += 4 + b2(d2, b + 2))
    ;
  return [b8(d2, b + 12), b8(d2, b + 4), b8(d2, b + 20)];
};
var exfl = function(ex) {
  var le = 0;
  if (ex) {
    for (var k in ex) {
      var l = ex[k].length;
      if (l > 65535)
        err(9);
      le += l + 4;
    }
  }
  return le;
};
var wzh = function(d2, b, f, fn, u, c2, ce, co) {
  var fl2 = fn.length, ex = f.extra, col = co && co.length;
  var exl = exfl(ex);
  wbytes(d2, b, ce != null ? 33639248 : 67324752), b += 4;
  if (ce != null)
    d2[b++] = 20, d2[b++] = f.os;
  d2[b] = 20, b += 2;
  d2[b++] = f.flag << 1 | (c2 < 0 && 8), d2[b++] = u && 8;
  d2[b++] = f.compression & 255, d2[b++] = f.compression >> 8;
  var dt = new Date(f.mtime == null ? Date.now() : f.mtime), y = dt.getFullYear() - 1980;
  if (y < 0 || y > 119)
    err(10);
  wbytes(d2, b, y << 25 | dt.getMonth() + 1 << 21 | dt.getDate() << 16 | dt.getHours() << 11 | dt.getMinutes() << 5 | dt.getSeconds() >> 1), b += 4;
  if (c2 != -1) {
    wbytes(d2, b, f.crc);
    wbytes(d2, b + 4, c2 < 0 ? -c2 - 2 : c2);
    wbytes(d2, b + 8, f.size);
  }
  wbytes(d2, b + 12, fl2);
  wbytes(d2, b + 14, exl), b += 16;
  if (ce != null) {
    wbytes(d2, b, col);
    wbytes(d2, b + 6, f.attrs);
    wbytes(d2, b + 10, ce), b += 14;
  }
  d2.set(fn, b);
  b += fl2;
  if (exl) {
    for (var k in ex) {
      var exf = ex[k], l = exf.length;
      wbytes(d2, b, +k);
      wbytes(d2, b + 2, l);
      d2.set(exf, b + 4), b += 4 + l;
    }
  }
  if (col)
    d2.set(co, b), b += col;
  return b;
};
var wzf = function(o4, b, c2, d2, e3) {
  wbytes(o4, b, 101010256);
  wbytes(o4, b + 8, c2);
  wbytes(o4, b + 10, c2);
  wbytes(o4, b + 12, d2);
  wbytes(o4, b + 16, e3);
};
var ZipPassThrough = function() {
  function ZipPassThrough2(filename) {
    this.filename = filename;
    this.c = crc();
    this.size = 0;
    this.compression = 0;
  }
  ZipPassThrough2.prototype.process = function(chunk, final) {
    this.ondata(null, chunk, final);
  };
  ZipPassThrough2.prototype.push = function(chunk, final) {
    if (!this.ondata)
      err(5);
    this.c.p(chunk);
    this.size += chunk.length;
    if (final)
      this.crc = this.c.d();
    this.process(chunk, final || false);
  };
  return ZipPassThrough2;
}();
var ZipDeflate = function() {
  function ZipDeflate2(filename, opts) {
    var _this = this;
    if (!opts)
      opts = {};
    ZipPassThrough.call(this, filename);
    this.d = new Deflate(opts, function(dat, final) {
      _this.ondata(null, dat, final);
    });
    this.compression = 8;
    this.flag = dbf(opts.level);
  }
  ZipDeflate2.prototype.process = function(chunk, final) {
    try {
      this.d.push(chunk, final);
    } catch (e3) {
      this.ondata(e3, null, final);
    }
  };
  ZipDeflate2.prototype.push = function(chunk, final) {
    ZipPassThrough.prototype.push.call(this, chunk, final);
  };
  return ZipDeflate2;
}();
var AsyncZipDeflate = function() {
  function AsyncZipDeflate2(filename, opts) {
    var _this = this;
    if (!opts)
      opts = {};
    ZipPassThrough.call(this, filename);
    this.d = new AsyncDeflate(opts, function(err2, dat, final) {
      _this.ondata(err2, dat, final);
    });
    this.compression = 8;
    this.flag = dbf(opts.level);
    this.terminate = this.d.terminate;
  }
  AsyncZipDeflate2.prototype.process = function(chunk, final) {
    this.d.push(chunk, final);
  };
  AsyncZipDeflate2.prototype.push = function(chunk, final) {
    ZipPassThrough.prototype.push.call(this, chunk, final);
  };
  return AsyncZipDeflate2;
}();
var Zip = function() {
  function Zip2(cb) {
    this.ondata = cb;
    this.u = [];
    this.d = 1;
  }
  Zip2.prototype.add = function(file) {
    var _this = this;
    if (!this.ondata)
      err(5);
    if (this.d & 2)
      this.ondata(err(4 + (this.d & 1) * 8, 0, 1), null, false);
    else {
      var f = strToU8(file.filename), fl_1 = f.length;
      var com = file.comment, o4 = com && strToU8(com);
      var u = fl_1 != file.filename.length || o4 && com.length != o4.length;
      var hl_1 = fl_1 + exfl(file.extra) + 30;
      if (fl_1 > 65535)
        this.ondata(err(11, 0, 1), null, false);
      var header = new u8(hl_1);
      wzh(header, 0, file, f, u, -1);
      var chks_1 = [header];
      var pAll_1 = function() {
        for (var _i = 0, chks_2 = chks_1; _i < chks_2.length; _i++) {
          var chk = chks_2[_i];
          _this.ondata(null, chk, false);
        }
        chks_1 = [];
      };
      var tr_1 = this.d;
      this.d = 0;
      var ind_1 = this.u.length;
      var uf_1 = mrg(file, {
        f,
        u,
        o: o4,
        t: function() {
          if (file.terminate)
            file.terminate();
        },
        r: function() {
          pAll_1();
          if (tr_1) {
            var nxt = _this.u[ind_1 + 1];
            if (nxt)
              nxt.r();
            else
              _this.d = 1;
          }
          tr_1 = 1;
        }
      });
      var cl_1 = 0;
      file.ondata = function(err2, dat, final) {
        if (err2) {
          _this.ondata(err2, dat, final);
          _this.terminate();
        } else {
          cl_1 += dat.length;
          chks_1.push(dat);
          if (final) {
            var dd = new u8(16);
            wbytes(dd, 0, 134695760);
            wbytes(dd, 4, file.crc);
            wbytes(dd, 8, cl_1);
            wbytes(dd, 12, file.size);
            chks_1.push(dd);
            uf_1.c = cl_1, uf_1.b = hl_1 + cl_1 + 16, uf_1.crc = file.crc, uf_1.size = file.size;
            if (tr_1)
              uf_1.r();
            tr_1 = 1;
          } else if (tr_1)
            pAll_1();
        }
      };
      this.u.push(uf_1);
    }
  };
  Zip2.prototype.end = function() {
    var _this = this;
    if (this.d & 2) {
      this.ondata(err(4 + (this.d & 1) * 8, 0, 1), null, true);
      return;
    }
    if (this.d)
      this.e();
    else
      this.u.push({
        r: function() {
          if (!(_this.d & 1))
            return;
          _this.u.splice(-1, 1);
          _this.e();
        },
        t: function() {
        }
      });
    this.d = 3;
  };
  Zip2.prototype.e = function() {
    var bt = 0, l = 0, tl = 0;
    for (var _i = 0, _a2 = this.u; _i < _a2.length; _i++) {
      var f = _a2[_i];
      tl += 46 + f.f.length + exfl(f.extra) + (f.o ? f.o.length : 0);
    }
    var out = new u8(tl + 22);
    for (var _b2 = 0, _c = this.u; _b2 < _c.length; _b2++) {
      var f = _c[_b2];
      wzh(out, bt, f, f.f, f.u, -f.c - 2, l, f.o);
      bt += 46 + f.f.length + exfl(f.extra) + (f.o ? f.o.length : 0), l += f.b;
    }
    wzf(out, bt, this.u.length, tl, l);
    this.ondata(null, out, true);
    this.d = 2;
  };
  Zip2.prototype.terminate = function() {
    for (var _i = 0, _a2 = this.u; _i < _a2.length; _i++) {
      var f = _a2[_i];
      f.t();
    }
    this.d = 2;
  };
  return Zip2;
}();
var UnzipPassThrough = function() {
  function UnzipPassThrough2() {
  }
  UnzipPassThrough2.prototype.push = function(data, final) {
    this.ondata(null, data, final);
  };
  UnzipPassThrough2.compression = 0;
  return UnzipPassThrough2;
}();
var UnzipInflate = function() {
  function UnzipInflate2() {
    var _this = this;
    this.i = new Inflate(function(dat, final) {
      _this.ondata(null, dat, final);
    });
  }
  UnzipInflate2.prototype.push = function(data, final) {
    try {
      this.i.push(data, final);
    } catch (e3) {
      this.ondata(e3, null, final);
    }
  };
  UnzipInflate2.compression = 8;
  return UnzipInflate2;
}();
var AsyncUnzipInflate = function() {
  function AsyncUnzipInflate2(_, sz) {
    var _this = this;
    if (sz < 32e4) {
      this.i = new Inflate(function(dat, final) {
        _this.ondata(null, dat, final);
      });
    } else {
      this.i = new AsyncInflate(function(err2, dat, final) {
        _this.ondata(err2, dat, final);
      });
      this.terminate = this.i.terminate;
    }
  }
  AsyncUnzipInflate2.prototype.push = function(data, final) {
    if (this.i.terminate)
      data = slc(data, 0);
    this.i.push(data, final);
  };
  AsyncUnzipInflate2.compression = 8;
  return AsyncUnzipInflate2;
}();
var Unzip = function() {
  function Unzip2(cb) {
    this.onfile = cb;
    this.k = [];
    this.o = {
      0: UnzipPassThrough
    };
    this.p = et;
  }
  Unzip2.prototype.push = function(chunk, final) {
    var _this = this;
    if (!this.onfile)
      err(5);
    if (!this.p)
      err(4);
    if (this.c > 0) {
      var len = Math.min(this.c, chunk.length);
      var toAdd = chunk.subarray(0, len);
      this.c -= len;
      if (this.d)
        this.d.push(toAdd, !this.c);
      else
        this.k[0].push(toAdd);
      chunk = chunk.subarray(len);
      if (chunk.length)
        return this.push(chunk, final);
    } else {
      var f = 0, i3 = 0, is = void 0, buf = void 0;
      if (!this.p.length)
        buf = chunk;
      else if (!chunk.length)
        buf = this.p;
      else {
        buf = new u8(this.p.length + chunk.length);
        buf.set(this.p), buf.set(chunk, this.p.length);
      }
      var l = buf.length, oc = this.c, add2 = oc && this.d;
      var _loop_2 = function() {
        var _a2;
        var sig = b4(buf, i3);
        if (sig == 67324752) {
          f = 1, is = i3;
          this_1.d = null;
          this_1.c = 0;
          var bf = b2(buf, i3 + 6), cmp_1 = b2(buf, i3 + 8), u = bf & 2048, dd = bf & 8, fnl = b2(buf, i3 + 26), es = b2(buf, i3 + 28);
          if (l > i3 + 30 + fnl + es) {
            var chks_3 = [];
            this_1.k.unshift(chks_3);
            f = 2;
            var sc_1 = b4(buf, i3 + 18), su_1 = b4(buf, i3 + 22);
            var fn_1 = strFromU8(buf.subarray(i3 + 30, i3 += 30 + fnl), !u);
            if (sc_1 == 4294967295) {
              _a2 = dd ? [-2] : z64e(buf, i3), sc_1 = _a2[0], su_1 = _a2[1];
            } else if (dd)
              sc_1 = -1;
            i3 += es;
            this_1.c = sc_1;
            var d_1;
            var file_1 = {
              name: fn_1,
              compression: cmp_1,
              start: function() {
                if (!file_1.ondata)
                  err(5);
                if (!sc_1)
                  file_1.ondata(null, et, true);
                else {
                  var ctr = _this.o[cmp_1];
                  if (!ctr)
                    file_1.ondata(err(14, "unknown compression type " + cmp_1, 1), null, false);
                  d_1 = sc_1 < 0 ? new ctr(fn_1) : new ctr(fn_1, sc_1, su_1);
                  d_1.ondata = function(err2, dat3, final2) {
                    file_1.ondata(err2, dat3, final2);
                  };
                  for (var _i = 0, chks_4 = chks_3; _i < chks_4.length; _i++) {
                    var dat2 = chks_4[_i];
                    d_1.push(dat2, false);
                  }
                  if (_this.k[0] == chks_3 && _this.c)
                    _this.d = d_1;
                  else
                    d_1.push(et, true);
                }
              },
              terminate: function() {
                if (d_1 && d_1.terminate)
                  d_1.terminate();
              }
            };
            if (sc_1 >= 0)
              file_1.size = sc_1, file_1.originalSize = su_1;
            this_1.onfile(file_1);
          }
          return "break";
        } else if (oc) {
          if (sig == 134695760) {
            is = i3 += 12 + (oc == -2 && 8), f = 3, this_1.c = 0;
            return "break";
          } else if (sig == 33639248) {
            is = i3 -= 4, f = 3, this_1.c = 0;
            return "break";
          }
        }
      };
      var this_1 = this;
      for (; i3 < l - 4; ++i3) {
        var state_1 = _loop_2();
        if (state_1 === "break")
          break;
      }
      this.p = et;
      if (oc < 0) {
        var dat = f ? buf.subarray(0, is - 12 - (oc == -2 && 8) - (b4(buf, is - 16) == 134695760 && 4)) : buf.subarray(0, i3);
        if (add2)
          add2.push(dat, !!f);
        else
          this.k[+(f == 2)].push(dat);
      }
      if (f & 2)
        return this.push(buf.subarray(i3), final);
      this.p = buf.subarray(i3);
    }
    if (final) {
      if (this.c)
        err(13);
      this.p = null;
    }
  };
  Unzip2.prototype.register = function(decoder) {
    this.o[decoder.compression] = decoder;
  };
  return Unzip2;
}();

// node_modules/@privy-io/cross-app-connect/dist/esm/crypto.mjs
function o() {
  let r4 = secp256k1.utils.randomPrivateKey(), c2 = secp256k1.getPublicKey(r4);
  return { privateKey: base64.encode(r4), publicKey: base64.encode(c2) };
}
function d({ privateKey: r4, publicKey: c2 }) {
  let n = secp256k1.getSharedSecret(base64.decode(r4), base64.decode(c2)).slice(1);
  return base64.encode(n);
}
async function i(e3, r4) {
  let n = JSON.stringify(e3), o4 = zlibSync(new TextEncoder().encode(n)), d2 = base64.decode(r4), i3 = await crypto.subtle.importKey("raw", d2, { name: "AES-GCM" }, true, ["encrypt"]), a4 = crypto.getRandomValues(new Uint8Array(12)), y = await crypto.subtle.encrypt({ name: "AES-GCM", iv: a4 }, i3, o4);
  return { iv: base64.encode(a4), encryptedRequest: base64.encode(new Uint8Array(y)) };
}
async function a({ encryptedResult: e3, iv: c2, sharedSecret: o4 }) {
  let d2 = base64.decode(o4), i3 = base64.decode(c2), a4 = await crypto.subtle.importKey("raw", d2, { name: "AES-GCM" }, true, ["decrypt"]), y = base64.decode(e3), p = await crypto.subtle.decrypt({ name: "AES-GCM", iv: i3 }, a4, y), u = unzlibSync(import_buffer.Buffer.from(p));
  return new TextDecoder().decode(u);
}

// node_modules/@privy-io/cross-app-connect/dist/esm/triggerPopup.mjs
async function e(e3) {
  let n = window.open(void 0, void 0, t2({ w: 440, h: 680 }));
  if (!n) throw Error("");
  return n.location = e3.href, new Promise((e4, t4) => {
    let o4, i3 = setTimeout(() => {
      t4(Error("Authorization request timed out after 2 minutes.")), r4();
    }, 12e4);
    function r4() {
      n == null ? void 0 : n.close(), window.removeEventListener("message", c2);
    }
    let d2 = setInterval(() => {
      (n == null ? void 0 : n.closed) && !o4 && (r4(), clearInterval(d2), clearTimeout(i3), t4(Error("User rejected request")));
    }, 300);
    function c2(d3) {
      d3.data && ("PRIVY_CROSS_APP_CONNECT_RESPONSE" === d3.data.type && (e4(d3.data), n == null ? void 0 : n.close()), "PRIVY_OAUTH_ERROR" === d3.data.type && (clearTimeout(i3), t4(Error(d3.data.error)), r4()), "PRIVY_OAUTH_USE_BROADCAST_CHANNEL" === d3.data.type && ((o4 = new BroadcastChannel("popup-privy-oauth")).onmessage = c2));
    }
    window.addEventListener("message", c2);
  });
}
function t2({ w: e3, h: t4 }) {
  let n = void 0 !== window.screenLeft ? window.screenLeft : window.screenX, o4 = void 0 !== window.screenTop ? window.screenTop : window.screenY, i3 = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width, r4 = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
  return `toolbar=0,location=0,menubar=0,height=${t4},width=${e3},popup=1,left=${(i3 - e3) / 2 / (i3 / window.screen.availWidth) + n},top=${(r4 - t4) / 2 / (r4 / window.screen.availHeight) + o4}`;
}

// node_modules/@privy-io/cross-app-connect/dist/esm/request.mjs
var import_buffer2 = __toESM(require_buffer(), 1);
async function a2({ request: a4, apiUrl: o4, publicKey: i3, sharedSecret: c2, providerAppId: d2 }) {
  let n = window.open(void 0, void 0, t2({ w: 400, h: 680 }));
  if (!n) throw Error("Failed to initialize request");
  let p = new URL(o4), { encryptedRequest: m, iv: u } = await i(a4, c2);
  return p.searchParams.set("requester_public_key", i3), p.searchParams.set("encrypted_request", m), p.searchParams.set("requester_origin", window.location.origin), p.searchParams.set("iv", u), p.searchParams.set("provider_app_id", d2), p.searchParams.set("signout_enabled", "true"), p.searchParams.set("v", "1"), n.location = p.href, new Promise((e3, t4) => {
    let a5 = setTimeout(() => {
      d3(), t4(new s("Request timeout"));
    }, 12e4), o5 = setInterval(() => {
      n.closed && (d3(), t4(new s("User rejected request")));
    }, 300), i4 = async (a6) => {
      var _a2;
      a6.data && ("PRIVY_CROSS_APP_ACTION_RESPONSE" === a6.data.type && a6.data.encryptedResult && (d3(), e3(await a({ encryptedResult: a6.data.encryptedResult, iv: a6.data.iv, sharedSecret: c2 }))), "PRIVY_CROSS_APP_ACTION_ERROR" === a6.data.type && a6.data.error && (d3(), t4(new s(a6.data.error, { mwp: a6.data.mwp, code: (_a2 = a6.data) == null ? void 0 : _a2.errorCode }))));
    };
    window.addEventListener("message", i4);
    let d3 = () => {
      n.close(), clearInterval(o5), clearTimeout(a5), window.removeEventListener("message", i4);
    };
  });
}
var s = class extends Error {
  constructor(e3, r4) {
    var _a2;
    super(e3), ((_a2 = r4 == null ? void 0 : r4.mwp) == null ? void 0 : _a2.action) && (this.action = r4.mwp.action), (r4 == null ? void 0 : r4.code) && (this.code = r4.code);
  }
};

// node_modules/@privy-io/cross-app-connect/dist/esm/sendConnectionRequestToPopup.mjs
var import_buffer3 = __toESM(require_buffer(), 1);
async function s2({ providerAppId: s5, providerUrl: a4, connectionOpts: i3 }) {
  let p = new URL(a4), { privateKey: o4, publicKey: c2 } = o();
  p.searchParams.set("requester_public_key", c2), p.searchParams.set("connect", "true"), p.searchParams.set("provider_app_id", s5), p.searchParams.set("requester_origin", window.location.origin), p.searchParams.set("smart_wallet_mode", (i3 == null ? void 0 : i3.smartWalletMode) ? "true" : "false");
  let { address: m, providerPublicKey: l, exp: n } = await e(p);
  return { address: m, sharedSecret: d({ privateKey: o4, publicKey: l }), publicKey: c2, exp: n };
}

// node_modules/@privy-io/cross-app-connect/dist/esm/storage.mjs
var e2 = class {
  get(e3) {
    return this._cache[e3];
  }
  put(e3, t4) {
    void 0 !== t4 ? this._cache[e3] = t4 : this.del(e3);
  }
  del(e3) {
    delete this._cache[e3];
  }
  getKeys() {
    return Object.keys(this._cache);
  }
  constructor() {
    this._cache = {};
  }
};
var t3 = class {
  get(e3) {
    let t4 = localStorage.getItem(e3);
    return null === t4 ? void 0 : JSON.parse(t4);
  }
  put(e3, t4) {
    void 0 !== t4 ? localStorage.setItem(e3, JSON.stringify(t4)) : this.del(e3);
  }
  del(e3) {
    localStorage.removeItem(e3);
  }
  getKeys() {
    return Object.entries(localStorage).map(([e3]) => e3);
  }
};
var s3 = "undefined" != typeof window && window.localStorage ? new t3() : new e2();

// node_modules/@privy-io/cross-app-connect/dist/esm/client.mjs
var import_buffer4 = __toESM(require_buffer(), 1);
var a3 = ({ providerAppId: t4, chains: e3, chainId: r4, apiUrl: i3, connectionOpts: s5 }) => new o2(t4, e3, r4, i3, s5);
var o2 = class {
  get STORAGE_CONNECTION_KEY() {
    let { smartWalletMode: t4 } = this._connectionOpts ?? {};
    return `privy-caw:${this.providerAppId}:connection${t4 ? ":smart-wallet" : ""}`;
  }
  get STORAGE_CHAIN_ID_KEY() {
    let { smartWalletMode: t4 } = this._connectionOpts ?? {};
    return `privy-caw:${this.providerAppId}:connection_chain_id${t4 ? ":smart-wallet" : ""}`;
  }
  async loadProviderDetails() {
    if (!this._providerDetailsLoaded) {
      let { url: e3, customConnectUrl: r4, customTransactUrl: i3 } = await t({ providerAppId: this.providerAppId, apiUrl: this._apiUrl });
      this._providerConnectUrl = r4 || `${e3}/cross-app/connect`, this._providerTransactUrl = i3 || `${e3}/cross-app/transact`, this._providerDetailsLoaded = true;
    }
  }
  async getProviderConnectUrl() {
    return await this.loadProviderDetails(), this._providerConnectUrl;
  }
  async getProviderTransactUrl() {
    return await this.loadProviderDetails(), this._providerTransactUrl;
  }
  clearConnection() {
    this._sharedSecret = void 0, this._publicKey = void 0, this._address = void 0, s3.del(this.STORAGE_CONNECTION_KEY), s3.del(this.STORAGE_CHAIN_ID_KEY);
  }
  get chain() {
    return this.chains.find(({ id: t4 }) => t4 === this.chainId);
  }
  get address() {
    return this._address;
  }
  async requestConnection() {
    let { address: t4, sharedSecret: e3, publicKey: r4, exp: a4 } = await s2({ providerAppId: this.providerAppId, providerUrl: await this.getProviderConnectUrl(), connectionOpts: this._connectionOpts });
    s3.put(this.STORAGE_CONNECTION_KEY, { address: t4, sharedSecret: e3, publicKey: r4, exp: a4 }), this._address = t4, this._sharedSecret = e3, this._publicKey = r4;
  }
  switchChain({ id: t4 }) {
    this.chainId = t4, s3.put(this.STORAGE_CHAIN_ID_KEY, this.chainId);
  }
  async sendRequest(t4, i3) {
    if (!this._sharedSecret || !this._publicKey) throw Error(`Must call 'eth_requestAccounts' before ${t4}`);
    try {
      return await a2({ request: { method: t4, params: i3, chainId: this.chainId }, apiUrl: await this.getProviderTransactUrl(), publicKey: this._publicKey, providerAppId: this.providerAppId, sharedSecret: this._sharedSecret });
    } catch (t5) {
      throw t5 instanceof s && "clear" === t5.action && this.clearConnection(), t5;
    }
  }
  constructor(t4, e3, r4, i3, a4) {
    this._providerDetailsLoaded = false, this.providerAppId = t4, this.chains = e3, this._apiUrl = i3 ?? "https://auth.privy.io", this._connectionOpts = a4;
    let o4 = s3.get(this.STORAGE_CONNECTION_KEY), c2 = o4 && o4.exp > (/* @__PURE__ */ new Date()).getTime(), d2 = s3.get(this.STORAGE_CHAIN_ID_KEY);
    this.chainId = r4 ?? d2 ?? e3[0].id, c2 ? (this._sharedSecret = o4.sharedSecret, this._publicKey = o4.publicKey, this._address = o4.address) : this.clearConnection(), this.loadProviderDetails();
  }
};

// node_modules/@privy-io/cross-app-connect/dist/esm/provider.mjs
var import_buffer5 = __toESM(require_buffer(), 1);
var r2 = (r4) => {
  var _a2;
  let i3 = a3({ providerAppId: r4.providerAppId, chains: r4.chains, chainId: r4.chainId, apiUrl: r4.apiUrl, connectionOpts: { smartWalletMode: r4.smartWalletMode } }), h = createPublicClient({ chain: i3.chain, transport: ((_a2 = r4.transports) == null ? void 0 : _a2[i3.chain.id]) ?? http() }), d2 = { accountsChanged: [], connect: [], chainChanged: [], disconnect: [], message: [] }, l = () => {
    var _a3;
    i3.clearConnection(), (_a3 = d2.accountsChanged) == null ? void 0 : _a3.forEach((e3) => e3([]));
  };
  return { on: (e3, t4) => {
    d2[e3].push(t4);
  }, removeListener: (e3, t4) => {
    let a4 = d2[e3].indexOf(t4);
    a4 > -1 && d2[e3].splice(a4);
  }, request: async (s5) => {
    var _a3, _b2, _c, _d;
    r4.smartWalletMode && ("eth_sendTransaction" === s5.method && (s5.method = "privy_sendSmartWalletTx"), "eth_signTransaction" === s5.method && (s5.method = "privy_signSmartWalletTx"), "personal_sign" === s5.method && (s5.method = "privy_signSmartWalletMessage"), "eth_signTypedData_v4" === s5.method && (s5.method = "privy_signSmartWalletTypedData"));
    let { method: _, params: m } = s5;
    if (console.debug("PrivyWalletProvider.request", { method: _, params: m }), "wallet_requestPermissions" === _ || "eth_requestAccounts" === _ && !i3.address) return await i3.requestConnection(), (_a3 = d2.accountsChanged) == null ? void 0 : _a3.forEach((e3) => e3([i3.address])), void ((_b2 = d2.connect) == null ? void 0 : _b2.forEach((e3) => e3({ chainId: o3(i3.chain.id) })));
    if ("eth_chainId" === _) return i3.chain.id;
    if (c(_)) return h.request({ method: _, params: m });
    switch (_) {
      case "eth_requestAccounts":
      case "eth_accounts":
        return i3.address ? [i3.address] : [];
      case "wallet_switchEthereumChain":
        return i3.switchChain({ id: Number(m[0].chainId) }), h = createPublicClient({ chain: i3.chain, transport: ((_c = r4.transports) == null ? void 0 : _c[i3.chain.id]) ?? http() }), d2.chainChanged.forEach((e3) => e3(o3(i3.chain.id))), null;
      case "wallet_revokePermissions":
        return void l();
      case "eth_sendTransaction":
      case "eth_signTransaction":
      case "eth_signTypedData_v4":
      case "eth_sign":
      case "privy_signSmartWalletMessage":
      case "privy_signSmartWalletTypedData":
      case "privy_signSmartWalletTx":
      case "privy_sendSmartWalletTx":
      case "personal_sign":
        ["eth_sendTransaction", "eth_signTransaction", "privy_sendSmartWalletTx", "privy_signSmartWalletTx"].includes(_) && ((_d = m[0]).chainId ?? (_d.chainId = i3.chain.id));
        try {
          return await i3.sendRequest(_, m);
        } catch (e3) {
          if (e3 instanceof s && ("clear" === e3.action && l(), void 0 === e3.code && "User rejected request" === e3.message)) throw new ProviderRpcError(Error("User rejected request"), { code: 4001, shortMessage: "User rejected request" });
          throw new ProviderRpcError(e3, { code: e3.code ?? -1, shortMessage: e3.message });
        }
      default:
        throw new ProviderRpcError(Error("Unsupported method"), { code: 4200, shortMessage: `Unsupported method: ${_}` });
    }
  } };
};
var o3 = (e3) => `0x${e3.toString(16)}`;
var i2 = { web3_clientVersion: true, web3_sha3: true, net_listening: true, net_peerCount: true, net_version: true, eth_blobBaseFee: true, eth_blockNumber: true, eth_call: true, eth_chainId: true, eth_coinbase: true, eth_estimateGas: true, eth_feeHistory: true, eth_gasPrice: true, eth_getBalance: true, eth_getBlockByHash: true, eth_getBlockByNumber: true, eth_getBlockTransactionCountByHash: true, eth_getBlockTransactionCountByNumber: true, eth_getCode: true, eth_getFilterChanges: true, eth_getFilterLogs: true, eth_getLogs: true, eth_getProof: true, eth_getStorageAt: true, eth_getTransactionByBlockHashAndIndex: true, eth_getTransactionByBlockNumberAndIndex: true, eth_getTransactionByHash: true, eth_getTransactionCount: true, eth_getTransactionReceipt: true, eth_getUncleByBlockHashAndIndex: true, eth_getUncleByBlockNumberAndIndex: true, eth_getUncleCountByBlockHash: true, eth_getUncleCountByBlockNumber: true, eth_maxPriorityFeePerGas: true, eth_newBlockFilter: true, eth_newFilter: true, eth_newPendingTransactionFilter: true, eth_protocolVersion: true, eth_sendRawTransaction: true, eth_uninstallFilter: true, zks_estimateFee: true, eth_createAccessList: true, eth_simulateV1: true };
var c = (e3) => !!i2[e3];

// node_modules/@privy-io/cross-app-connect/dist/esm/connector.mjs
var import_buffer6 = __toESM(require_buffer(), 1);
function s4(s5, c2) {
  let r4, h, d2, m, u = null;
  return createConnector((t4) => ({ id: s5.id, name: s5.name, icon: s5.iconUrl, type: "privy", ...c2, isWalletConnectModalConnector: false, async setup() {
    let t5 = await this.getProvider();
    t5 && (d2 || (d2 = this.onConnect.bind(this), t5.on("connect", d2)), r4 || (r4 = this.onAccountsChanged.bind(this), t5.on("accountsChanged", r4)));
  }, async connect(t5) {
    let e3 = await this.getProvider();
    if (e3 && await this.isAuthorized()) {
      let [t6, e4] = await Promise.all([this.getAccounts(), this.getChainId()]);
      return { accounts: t6, chainId: e4 };
    }
    if (t5 == null ? void 0 : t5.isReconnecting) return { accounts: [], chainId: 1 };
    await e3.request({ method: "eth_requestAccounts" }), d2 && (e3.removeListener("connect", d2), d2 = void 0), r4 || (r4 = this.onAccountsChanged.bind(this), e3.on("accountsChanged", r4)), h || (h = this.onChainChanged.bind(this), e3.on("chainChanged", h)), m || (m = this.onDisconnect.bind(this), e3.on("disconnect", m)), (t5 == null ? void 0 : t5.chainId) && await this.switchChain({ chainId: t5.chainId });
    let [n, i3] = await Promise.all([this.getAccounts(), this.getChainId()]);
    return { accounts: n, chainId: i3 };
  }, async disconnect() {
    let t5 = await this.getProvider();
    h && (t5.removeListener("chainChanged", h), h = void 0), m && (t5.removeListener("disconnect", m), m = void 0), d2 || (d2 = this.onConnect.bind(this), t5.on("connect", d2)), await t5.request({ method: "wallet_revokePermissions", params: [{ eth_accounts: {} }] }), this.onDisconnect();
  }, async getAccounts() {
    let t5 = await this.getProvider();
    if (!t5) throw new ProviderNotFoundError();
    return (await t5.request({ method: "eth_accounts" })).map((t6) => getAddress(t6));
  }, async getChainId() {
    let t5 = await this.getProvider();
    if (!t5) throw new ProviderNotFoundError();
    return Number(await t5.request({ method: "eth_chainId" }));
  }, getProvider: async () => (u || (u = r2({ chains: t4.chains, transports: t4.transports, providerAppId: s5.id, apiUrl: s5.apiUrl, smartWalletMode: s5.smartWalletMode })), u), async isAuthorized() {
    try {
      return !!(await this.getAccounts()).length;
    } catch (t5) {
      return false;
    }
  }, async switchChain({ chainId: i3 }) {
    let a4 = await this.getProvider();
    if (!a4) throw new ProviderNotFoundError();
    let s6 = t4.chains.find((t5) => t5.id === i3);
    if (!s6) throw new SwitchChainError(new ChainNotConfiguredError());
    return i3 === Number(await a4.request({ method: "eth_chainId" })) || (await a4.request({ method: "wallet_switchEthereumChain", params: [{ chainId: `0x${i3.toString(16)}` }] }), t4.emitter.emit("change", { chainId: i3 })), s6;
  }, async onAccountsChanged(e3) {
    var _a2;
    if (0 !== e3.length) if (t4.emitter.listenerCount("connect")) {
      let t5 = (await this.getChainId()).toString();
      (_a2 = this.onConnect) == null ? void 0 : _a2.call(this, { chainId: t5 });
    } else t4.emitter.emit("change", { accounts: e3.map((t5) => getAddress(t5)) });
    else this.onDisconnect();
  }, onChainChanged(e3) {
    let n = Number(e3);
    t4.emitter.emit("change", { chainId: n });
  }, async onConnect(e3) {
    let n = await this.getAccounts();
    if (0 === n.length) return;
    let i3 = Number(e3.chainId);
    t4.emitter.emit("connect", { accounts: n, chainId: i3 });
    let o4 = await this.getProvider();
    o4 && (d2 && (o4.removeListener("connect", d2), d2 = void 0), r4 || (r4 = this.onAccountsChanged.bind(this), o4.on("accountsChanged", r4)), h || (h = this.onChainChanged.bind(this), o4.on("chainChanged", h)), m || (m = this.onDisconnect.bind(this), o4.on("disconnect", m)));
  }, async onDisconnect() {
    t4.emitter.emit("disconnect");
  } }));
}

// node_modules/@privy-io/cross-app-connect/dist/esm/wallet.mjs
var import_buffer7 = __toESM(require_buffer(), 1);

// node_modules/@privy-io/cross-app-connect/dist/esm/rainbow-kit.mjs
var import_buffer8 = __toESM(require_buffer(), 1);

// node_modules/@abstract-foundation/agw-react/dist/esm/constants.js
var AGW_APP_ID = "cm04asygd041fmry9zmcyn5o5";
var ICON_URL = "https://abstract-assets.abs.xyz/icons/light.png";

// node_modules/@abstract-foundation/agw-react/dist/esm/abstractWalletConnector.js
function abstractWalletConnector(options = {}) {
  const { rkDetails, customPaymasterHandler } = options;
  return (params) => {
    const chains = [...params.chains];
    let defaultChain = params.chains[0];
    const validChainIds = Object.keys(VALID_CHAINS).map(Number).sort(function(a4, b) {
      return a4 - b;
    });
    for (const chainId of validChainIds) {
      const chainIndex = chains.findIndex((chain2) => chain2.id === chainId);
      const hasChain = chainIndex !== -1;
      if (hasChain) {
        const removedChains = chains.splice(chainIndex, 1);
        defaultChain = removedChains[0] ?? defaultChain;
        break;
      }
    }
    const connector = s4({
      iconUrl: ICON_URL,
      id: AGW_APP_ID,
      name: "Abstract"
    })({
      ...params,
      chains: [defaultChain, ...chains]
    });
    const getAbstractProvider = async (parameters) => {
      var _a2;
      const chainId = (parameters == null ? void 0 : parameters.chainId) ?? defaultChain.id;
      if (!VALID_CHAINS[chainId]) {
        throw new Error("Unsupported chain");
      }
      const chain2 = params.chains.find((c2) => c2.id === chainId) ?? VALID_CHAINS[chainId];
      const provider = await connector.getProvider({
        chainId
      });
      const transport = ((_a2 = params.transports) == null ? void 0 : _a2[chainId]) ?? http(void 0, {
        batch: true
      });
      return transformEIP1193Provider({
        provider,
        chain: chain2,
        transport,
        isPrivyCrossApp: true,
        customPaymasterHandler
      });
    };
    const abstractConnector = {
      ...connector,
      ...rkDetails,
      getProvider: getAbstractProvider,
      type: "injected",
      id: "xyz.abs.privy"
    };
    return abstractConnector;
  };
}

// node_modules/@abstract-foundation/agw-react/dist/esm/agwProvider.js
var AbstractWalletProvider = ({ chain: chain2, transport, queryClient = new QueryClient(), customPaymasterHandler, children }) => {
  if (!VALID_CHAINS[chain2.id]) {
    throw new Error(`Chain ${chain2.id} is not supported`);
  }
  const wagmiConfig = (0, import_react.useMemo)(() => {
    return createConfig({
      chains: [chain2],
      ssr: true,
      connectors: [
        abstractWalletConnector({
          customPaymasterHandler
        })
      ],
      transports: {
        [chain2.id]: transport ?? http(void 0, {
          batch: true
        })
      },
      multiInjectedProviderDiscovery: false
    });
  }, [chain2, transport, customPaymasterHandler]);
  return import_react.default.createElement(
    WagmiProvider,
    { config: wagmiConfig },
    import_react.default.createElement(QueryClientProvider, { client: queryClient }, children)
  );
};

// node_modules/@abstract-foundation/agw-react/dist/esm/hooks/useGlobalWalletSignerAccount.js
function useGlobalWalletSignerAccount(parameters = {}) {
  var _a2;
  const account = useAccount(parameters);
  if (!((_a2 = account.addresses) == null ? void 0 : _a2[1])) {
    return {
      address: void 0,
      addresses: void 0,
      chain: void 0,
      chainId: void 0,
      connector: void 0,
      isConnected: false,
      isReconnecting: false,
      isConnecting: false,
      isDisconnected: true,
      status: "disconnected"
    };
  }
  return {
    ...account,
    address: account.addresses[1]
  };
}

// node_modules/@abstract-foundation/agw-react/dist/esm/hooks/useGlobalWalletSignerClient.js
function useGlobalWalletSignerClient(parameters = {}) {
  const { address } = useGlobalWalletSignerAccount();
  const walletClient = useWalletClient({
    ...parameters,
    account: address
  });
  return walletClient;
}

// node_modules/@abstract-foundation/agw-react/dist/esm/hooks/useAbstractClient.js
var useAbstractClient = ({ customPaymasterHandler } = {}) => {
  const { data: signer, status, error } = useGlobalWalletSignerClient();
  const [chain2] = useChains();
  const config = useConfig();
  return useQuery({
    gcTime: 0,
    queryKey: ["abstractClient"],
    queryFn: async () => {
      if (error) {
        throw error;
      }
      if (!signer) {
        throw new Error("No signer found");
      }
      const client = createAbstractClient({
        signer: signer.account,
        chain: chain2,
        transport: custom(signer.transport),
        isPrivyCrossApp: true,
        publicTransport: config == null ? void 0 : config._internal.transports[chain2.id],
        customPaymasterHandler
      });
      return client;
    },
    enabled: status !== "pending"
  });
};

// node_modules/@abstract-foundation/agw-react/dist/esm/actions/createSession.js
async function createSession2(config, parameters) {
  const { account, chainId, connector, ...rest } = parameters;
  let client;
  if (typeof account === "object" && (account == null ? void 0 : account.type) === "local")
    client = config.getClient({ chainId });
  else
    client = await getConnectorClient(config, {
      account: account ?? void 0,
      chainId,
      connector
    });
  const action = getAction(client, createSession, "createSession");
  const result = await action({
    ...rest,
    ...account ? { account } : {},
    chain: chainId ? { id: chainId } : null
  });
  return result;
}

// node_modules/@abstract-foundation/agw-react/dist/esm/query/createSession.js
function createSessionMutationOptions(config) {
  return {
    mutationFn: async (variables) => {
      return createSession2(config, variables);
    },
    mutationKey: ["createSession"]
  };
}

// node_modules/@abstract-foundation/agw-react/dist/esm/hooks/useCreateSession.js
function useCreateSession(parameters = {}) {
  const { mutation } = parameters;
  const config = useConfig(parameters);
  const mutationOptions = createSessionMutationOptions(config);
  const { mutate, mutateAsync, ...result } = useMutation({
    ...mutation,
    ...mutationOptions
  });
  return {
    ...result,
    createSession: mutate,
    createSessionAsync: mutateAsync
  };
}

// node_modules/@abstract-foundation/agw-react/dist/esm/hooks/useLoginWithAbstract.js
var import_react2 = __toESM(require_react(), 1);
var useLoginWithAbstract = () => {
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const login = (0, import_react2.useCallback)(() => {
    const connector = connectors.find((c2) => c2.id === "xyz.abs.privy");
    if (!connector) {
      throw new Error("Abstract connector not found");
    }
    connect({ connector });
  }, [connect, connectors]);
  const logout = (0, import_react2.useCallback)(() => {
    disconnect();
  }, [disconnect]);
  return {
    login,
    logout
  };
};

// node_modules/@abstract-foundation/agw-react/dist/esm/hooks/useRevokeSessions.js
var useRevokeSessions = () => {
  const { writeContract: writeContract4, writeContractAsync, ...writeContractRest } = useWriteContract();
  const getSessionHashes = (sessions) => {
    return typeof sessions === "string" ? [sessions] : Array.isArray(sessions) ? sessions.map((session) => typeof session === "string" ? session : getSessionHash(session)) : [getSessionHash(sessions)];
  };
  return {
    revokeSessions: (params) => {
      const { sessions, ...rest } = params;
      const sessionHashes = getSessionHashes(sessions);
      writeContract4({
        address: SESSION_KEY_VALIDATOR_ADDRESS,
        abi: SessionKeyValidatorAbi,
        functionName: "revokeKeys",
        args: [sessionHashes],
        ...rest
      });
    },
    revokeSessionsAsync: async (params) => {
      const { sessions, ...rest } = params;
      const sessionHashes = getSessionHashes(sessions);
      await writeContractAsync({
        address: SESSION_KEY_VALIDATOR_ADDRESS,
        abi: SessionKeyValidatorAbi,
        functionName: "revokeKeys",
        args: [sessionHashes],
        ...rest
      });
    },
    ...writeContractRest
  };
};

// node_modules/@abstract-foundation/agw-react/dist/esm/query/writeContractSponsored.js
function writeContractSponsoredMutationOptions(config) {
  return {
    mutationFn(variables) {
      return writeContract2(config, variables);
    },
    mutationKey: ["writeContract"]
  };
}

// node_modules/@abstract-foundation/agw-react/dist/esm/hooks/useWriteContractSponsored.js
function useWriteContractSponsored(parameters = {}) {
  const { mutation } = parameters;
  const config = useConfig(parameters);
  const mutationOptions = writeContractSponsoredMutationOptions(config);
  const { mutate, mutateAsync, ...result } = useMutation({
    ...mutation,
    ...mutationOptions
  });
  return {
    ...result,
    writeContractSponsored: mutate,
    writeContractSponsoredAsync: mutateAsync
  };
}
export {
  AbstractWalletProvider,
  useAbstractClient,
  useCreateSession,
  useGlobalWalletSignerAccount,
  useGlobalWalletSignerClient,
  useLoginWithAbstract,
  useRevokeSessions,
  useWriteContractSponsored
};
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)

@noble/hashes/esm/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/utils.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/modular.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/curve.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/weierstrass.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/_shortw_utils.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/secp256k1.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@scure/base/lib/esm/index.js:
  (*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
*/
//# sourceMappingURL=@abstract-foundation_agw-react.js.map
