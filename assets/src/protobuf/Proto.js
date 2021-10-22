/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobuf");

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const Base = $root.Base = (() => {

    /**
     * Properties of a Base.
     * @exports IBase
     * @interface IBase
     * @property {string|null} [msg] Base msg
     * @property {number|null} [serial] Base serial
     * @property {Uint8Array|null} [packet] Base packet
     */

    /**
     * Constructs a new Base.
     * @exports Base
     * @classdesc Represents a Base.
     * @implements IBase
     * @constructor
     * @param {IBase=} [p] Properties to set
     */
    function Base(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Base msg.
     * @member {string} msg
     * @memberof Base
     * @instance
     */
    Base.prototype.msg = "";

    /**
     * Base serial.
     * @member {number} serial
     * @memberof Base
     * @instance
     */
    Base.prototype.serial = 0;

    /**
     * Base packet.
     * @member {Uint8Array} packet
     * @memberof Base
     * @instance
     */
    Base.prototype.packet = $util.newBuffer([]);

    /**
     * Creates a new Base instance using the specified properties.
     * @function create
     * @memberof Base
     * @static
     * @param {IBase=} [properties] Properties to set
     * @returns {Base} Base instance
     */
    Base.create = function create(properties) {
        return new Base(properties);
    };

    /**
     * Encodes the specified Base message. Does not implicitly {@link Base.verify|verify} messages.
     * @function encode
     * @memberof Base
     * @static
     * @param {IBase} m Base message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Base.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.msg != null && Object.hasOwnProperty.call(m, "msg"))
            w.uint32(10).string(m.msg);
        if (m.serial != null && Object.hasOwnProperty.call(m, "serial"))
            w.uint32(16).int32(m.serial);
        if (m.packet != null && Object.hasOwnProperty.call(m, "packet"))
            w.uint32(26).bytes(m.packet);
        return w;
    };

    /**
     * Encodes the specified Base message, length delimited. Does not implicitly {@link Base.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Base
     * @static
     * @param {IBase} message Base message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Base.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Base message from the specified reader or buffer.
     * @function decode
     * @memberof Base
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Base} Base
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Base.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Base();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.msg = r.string();
                break;
            case 2:
                m.serial = r.int32();
                break;
            case 3:
                m.packet = r.bytes();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a Base message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Base
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Base} Base
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Base.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Base message.
     * @function verify
     * @memberof Base
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Base.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.msg != null && m.hasOwnProperty("msg")) {
            if (!$util.isString(m.msg))
                return "msg: string expected";
        }
        if (m.serial != null && m.hasOwnProperty("serial")) {
            if (!$util.isInteger(m.serial))
                return "serial: integer expected";
        }
        if (m.packet != null && m.hasOwnProperty("packet")) {
            if (!(m.packet && typeof m.packet.length === "number" || $util.isString(m.packet)))
                return "packet: buffer expected";
        }
        return null;
    };

    return Base;
})();

export const UserInfo = $root.UserInfo = (() => {

    /**
     * Properties of a UserInfo.
     * @exports IUserInfo
     * @interface IUserInfo
     * @property {string|null} [id] UserInfo id
     * @property {string|null} [nick] UserInfo nick
     * @property {number|Long|null} [power] UserInfo power
     * @property {number|Long|null} [diamond] UserInfo diamond
     * @property {number|null} [avatar] UserInfo avatar
     */

    /**
     * Constructs a new UserInfo.
     * @exports UserInfo
     * @classdesc Represents a UserInfo.
     * @implements IUserInfo
     * @constructor
     * @param {IUserInfo=} [p] Properties to set
     */
    function UserInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * UserInfo id.
     * @member {string} id
     * @memberof UserInfo
     * @instance
     */
    UserInfo.prototype.id = "";

    /**
     * UserInfo nick.
     * @member {string} nick
     * @memberof UserInfo
     * @instance
     */
    UserInfo.prototype.nick = "";

    /**
     * UserInfo power.
     * @member {number|Long} power
     * @memberof UserInfo
     * @instance
     */
    UserInfo.prototype.power = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * UserInfo diamond.
     * @member {number|Long} diamond
     * @memberof UserInfo
     * @instance
     */
    UserInfo.prototype.diamond = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * UserInfo avatar.
     * @member {number} avatar
     * @memberof UserInfo
     * @instance
     */
    UserInfo.prototype.avatar = 0;

    /**
     * Creates a new UserInfo instance using the specified properties.
     * @function create
     * @memberof UserInfo
     * @static
     * @param {IUserInfo=} [properties] Properties to set
     * @returns {UserInfo} UserInfo instance
     */
    UserInfo.create = function create(properties) {
        return new UserInfo(properties);
    };

    /**
     * Encodes the specified UserInfo message. Does not implicitly {@link UserInfo.verify|verify} messages.
     * @function encode
     * @memberof UserInfo
     * @static
     * @param {IUserInfo} m UserInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(10).string(m.id);
        if (m.nick != null && Object.hasOwnProperty.call(m, "nick"))
            w.uint32(18).string(m.nick);
        if (m.power != null && Object.hasOwnProperty.call(m, "power"))
            w.uint32(24).int64(m.power);
        if (m.diamond != null && Object.hasOwnProperty.call(m, "diamond"))
            w.uint32(32).int64(m.diamond);
        if (m.avatar != null && Object.hasOwnProperty.call(m, "avatar"))
            w.uint32(40).int32(m.avatar);
        return w;
    };

    /**
     * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link UserInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserInfo
     * @static
     * @param {IUserInfo} message UserInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserInfo message from the specified reader or buffer.
     * @function decode
     * @memberof UserInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {UserInfo} UserInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.UserInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.string();
                break;
            case 2:
                m.nick = r.string();
                break;
            case 3:
                m.power = r.int64();
                break;
            case 4:
                m.diamond = r.int64();
                break;
            case 5:
                m.avatar = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a UserInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserInfo} UserInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserInfo message.
     * @function verify
     * @memberof UserInfo
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserInfo.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.id != null && m.hasOwnProperty("id")) {
            if (!$util.isString(m.id))
                return "id: string expected";
        }
        if (m.nick != null && m.hasOwnProperty("nick")) {
            if (!$util.isString(m.nick))
                return "nick: string expected";
        }
        if (m.power != null && m.hasOwnProperty("power")) {
            if (!$util.isInteger(m.power) && !(m.power && $util.isInteger(m.power.low) && $util.isInteger(m.power.high)))
                return "power: integer|Long expected";
        }
        if (m.diamond != null && m.hasOwnProperty("diamond")) {
            if (!$util.isInteger(m.diamond) && !(m.diamond && $util.isInteger(m.diamond.low) && $util.isInteger(m.diamond.high)))
                return "diamond: integer|Long expected";
        }
        if (m.avatar != null && m.hasOwnProperty("avatar")) {
            if (!$util.isInteger(m.avatar))
                return "avatar: integer expected";
        }
        return null;
    };

    return UserInfo;
})();

export const ItemInfo = $root.ItemInfo = (() => {

    /**
     * Properties of an ItemInfo.
     * @exports IItemInfo
     * @interface IItemInfo
     * @property {string|null} [id] ItemInfo id
     * @property {number|null} [count] ItemInfo count
     */

    /**
     * Constructs a new ItemInfo.
     * @exports ItemInfo
     * @classdesc Represents an ItemInfo.
     * @implements IItemInfo
     * @constructor
     * @param {IItemInfo=} [p] Properties to set
     */
    function ItemInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ItemInfo id.
     * @member {string} id
     * @memberof ItemInfo
     * @instance
     */
    ItemInfo.prototype.id = "";

    /**
     * ItemInfo count.
     * @member {number} count
     * @memberof ItemInfo
     * @instance
     */
    ItemInfo.prototype.count = 0;

    /**
     * Creates a new ItemInfo instance using the specified properties.
     * @function create
     * @memberof ItemInfo
     * @static
     * @param {IItemInfo=} [properties] Properties to set
     * @returns {ItemInfo} ItemInfo instance
     */
    ItemInfo.create = function create(properties) {
        return new ItemInfo(properties);
    };

    /**
     * Encodes the specified ItemInfo message. Does not implicitly {@link ItemInfo.verify|verify} messages.
     * @function encode
     * @memberof ItemInfo
     * @static
     * @param {IItemInfo} m ItemInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ItemInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(10).string(m.id);
        if (m.count != null && Object.hasOwnProperty.call(m, "count"))
            w.uint32(16).int32(m.count);
        return w;
    };

    /**
     * Encodes the specified ItemInfo message, length delimited. Does not implicitly {@link ItemInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ItemInfo
     * @static
     * @param {IItemInfo} message ItemInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ItemInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ItemInfo message from the specified reader or buffer.
     * @function decode
     * @memberof ItemInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ItemInfo} ItemInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ItemInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ItemInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.string();
                break;
            case 2:
                m.count = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes an ItemInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ItemInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ItemInfo} ItemInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ItemInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ItemInfo message.
     * @function verify
     * @memberof ItemInfo
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ItemInfo.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.id != null && m.hasOwnProperty("id")) {
            if (!$util.isString(m.id))
                return "id: string expected";
        }
        if (m.count != null && m.hasOwnProperty("count")) {
            if (!$util.isInteger(m.count))
                return "count: integer expected";
        }
        return null;
    };

    return ItemInfo;
})();

export const OfflineAwardInfo = $root.OfflineAwardInfo = (() => {

    /**
     * Properties of an OfflineAwardInfo.
     * @exports IOfflineAwardInfo
     * @interface IOfflineAwardInfo
     * @property {Array.<IItemInfo>|null} [awardList] OfflineAwardInfo awardList
     */

    /**
     * Constructs a new OfflineAwardInfo.
     * @exports OfflineAwardInfo
     * @classdesc Represents an OfflineAwardInfo.
     * @implements IOfflineAwardInfo
     * @constructor
     * @param {IOfflineAwardInfo=} [p] Properties to set
     */
    function OfflineAwardInfo(p) {
        this.awardList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * OfflineAwardInfo awardList.
     * @member {Array.<IItemInfo>} awardList
     * @memberof OfflineAwardInfo
     * @instance
     */
    OfflineAwardInfo.prototype.awardList = $util.emptyArray;

    /**
     * Creates a new OfflineAwardInfo instance using the specified properties.
     * @function create
     * @memberof OfflineAwardInfo
     * @static
     * @param {IOfflineAwardInfo=} [properties] Properties to set
     * @returns {OfflineAwardInfo} OfflineAwardInfo instance
     */
    OfflineAwardInfo.create = function create(properties) {
        return new OfflineAwardInfo(properties);
    };

    /**
     * Encodes the specified OfflineAwardInfo message. Does not implicitly {@link OfflineAwardInfo.verify|verify} messages.
     * @function encode
     * @memberof OfflineAwardInfo
     * @static
     * @param {IOfflineAwardInfo} m OfflineAwardInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OfflineAwardInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.awardList != null && m.awardList.length) {
            for (var i = 0; i < m.awardList.length; ++i)
                $root.ItemInfo.encode(m.awardList[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Encodes the specified OfflineAwardInfo message, length delimited. Does not implicitly {@link OfflineAwardInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof OfflineAwardInfo
     * @static
     * @param {IOfflineAwardInfo} message OfflineAwardInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OfflineAwardInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an OfflineAwardInfo message from the specified reader or buffer.
     * @function decode
     * @memberof OfflineAwardInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {OfflineAwardInfo} OfflineAwardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OfflineAwardInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.OfflineAwardInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.awardList && m.awardList.length))
                    m.awardList = [];
                m.awardList.push($root.ItemInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes an OfflineAwardInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof OfflineAwardInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {OfflineAwardInfo} OfflineAwardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OfflineAwardInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an OfflineAwardInfo message.
     * @function verify
     * @memberof OfflineAwardInfo
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    OfflineAwardInfo.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.awardList != null && m.hasOwnProperty("awardList")) {
            if (!Array.isArray(m.awardList))
                return "awardList: array expected";
            for (var i = 0; i < m.awardList.length; ++i) {
                {
                    var e = $root.ItemInfo.verify(m.awardList[i]);
                    if (e)
                        return "awardList." + e;
                }
            }
        }
        return null;
    };

    return OfflineAwardInfo;
})();

export const CheckInAwardInfo = $root.CheckInAwardInfo = (() => {

    /**
     * Properties of a CheckInAwardInfo.
     * @exports ICheckInAwardInfo
     * @interface ICheckInAwardInfo
     * @property {number|null} [currIndex] CheckInAwardInfo currIndex
     * @property {number|null} [nextIndex] CheckInAwardInfo nextIndex
     * @property {Array.<number>|null} [notIndexList] CheckInAwardInfo notIndexList
     * @property {Array.<IItemInfo>|null} [awardList] CheckInAwardInfo awardList
     */

    /**
     * Constructs a new CheckInAwardInfo.
     * @exports CheckInAwardInfo
     * @classdesc Represents a CheckInAwardInfo.
     * @implements ICheckInAwardInfo
     * @constructor
     * @param {ICheckInAwardInfo=} [p] Properties to set
     */
    function CheckInAwardInfo(p) {
        this.notIndexList = [];
        this.awardList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CheckInAwardInfo currIndex.
     * @member {number} currIndex
     * @memberof CheckInAwardInfo
     * @instance
     */
    CheckInAwardInfo.prototype.currIndex = 0;

    /**
     * CheckInAwardInfo nextIndex.
     * @member {number} nextIndex
     * @memberof CheckInAwardInfo
     * @instance
     */
    CheckInAwardInfo.prototype.nextIndex = 0;

    /**
     * CheckInAwardInfo notIndexList.
     * @member {Array.<number>} notIndexList
     * @memberof CheckInAwardInfo
     * @instance
     */
    CheckInAwardInfo.prototype.notIndexList = $util.emptyArray;

    /**
     * CheckInAwardInfo awardList.
     * @member {Array.<IItemInfo>} awardList
     * @memberof CheckInAwardInfo
     * @instance
     */
    CheckInAwardInfo.prototype.awardList = $util.emptyArray;

    /**
     * Creates a new CheckInAwardInfo instance using the specified properties.
     * @function create
     * @memberof CheckInAwardInfo
     * @static
     * @param {ICheckInAwardInfo=} [properties] Properties to set
     * @returns {CheckInAwardInfo} CheckInAwardInfo instance
     */
    CheckInAwardInfo.create = function create(properties) {
        return new CheckInAwardInfo(properties);
    };

    /**
     * Encodes the specified CheckInAwardInfo message. Does not implicitly {@link CheckInAwardInfo.verify|verify} messages.
     * @function encode
     * @memberof CheckInAwardInfo
     * @static
     * @param {ICheckInAwardInfo} m CheckInAwardInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CheckInAwardInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.currIndex != null && Object.hasOwnProperty.call(m, "currIndex"))
            w.uint32(8).int32(m.currIndex);
        if (m.nextIndex != null && Object.hasOwnProperty.call(m, "nextIndex"))
            w.uint32(16).int32(m.nextIndex);
        if (m.notIndexList != null && m.notIndexList.length) {
            w.uint32(26).fork();
            for (var i = 0; i < m.notIndexList.length; ++i)
                w.int32(m.notIndexList[i]);
            w.ldelim();
        }
        if (m.awardList != null && m.awardList.length) {
            for (var i = 0; i < m.awardList.length; ++i)
                $root.ItemInfo.encode(m.awardList[i], w.uint32(34).fork()).ldelim();
        }
        return w;
    };

    /**
     * Encodes the specified CheckInAwardInfo message, length delimited. Does not implicitly {@link CheckInAwardInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CheckInAwardInfo
     * @static
     * @param {ICheckInAwardInfo} message CheckInAwardInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CheckInAwardInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CheckInAwardInfo message from the specified reader or buffer.
     * @function decode
     * @memberof CheckInAwardInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CheckInAwardInfo} CheckInAwardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CheckInAwardInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CheckInAwardInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.currIndex = r.int32();
                break;
            case 2:
                m.nextIndex = r.int32();
                break;
            case 3:
                if (!(m.notIndexList && m.notIndexList.length))
                    m.notIndexList = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.notIndexList.push(r.int32());
                } else
                    m.notIndexList.push(r.int32());
                break;
            case 4:
                if (!(m.awardList && m.awardList.length))
                    m.awardList = [];
                m.awardList.push($root.ItemInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a CheckInAwardInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CheckInAwardInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CheckInAwardInfo} CheckInAwardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CheckInAwardInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CheckInAwardInfo message.
     * @function verify
     * @memberof CheckInAwardInfo
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CheckInAwardInfo.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.currIndex != null && m.hasOwnProperty("currIndex")) {
            if (!$util.isInteger(m.currIndex))
                return "currIndex: integer expected";
        }
        if (m.nextIndex != null && m.hasOwnProperty("nextIndex")) {
            if (!$util.isInteger(m.nextIndex))
                return "nextIndex: integer expected";
        }
        if (m.notIndexList != null && m.hasOwnProperty("notIndexList")) {
            if (!Array.isArray(m.notIndexList))
                return "notIndexList: array expected";
            for (var i = 0; i < m.notIndexList.length; ++i) {
                if (!$util.isInteger(m.notIndexList[i]))
                    return "notIndexList: integer[] expected";
            }
        }
        if (m.awardList != null && m.hasOwnProperty("awardList")) {
            if (!Array.isArray(m.awardList))
                return "awardList: array expected";
            for (var i = 0; i < m.awardList.length; ++i) {
                {
                    var e = $root.ItemInfo.verify(m.awardList[i]);
                    if (e)
                        return "awardList." + e;
                }
            }
        }
        return null;
    };

    return CheckInAwardInfo;
})();

export const SignInRequest = $root.SignInRequest = (() => {

    /**
     * Properties of a SignInRequest.
     * @exports ISignInRequest
     * @interface ISignInRequest
     * @property {string|null} [token] SignInRequest token
     */

    /**
     * Constructs a new SignInRequest.
     * @exports SignInRequest
     * @classdesc Represents a SignInRequest.
     * @implements ISignInRequest
     * @constructor
     * @param {ISignInRequest=} [p] Properties to set
     */
    function SignInRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SignInRequest token.
     * @member {string} token
     * @memberof SignInRequest
     * @instance
     */
    SignInRequest.prototype.token = "";

    /**
     * Creates a new SignInRequest instance using the specified properties.
     * @function create
     * @memberof SignInRequest
     * @static
     * @param {ISignInRequest=} [properties] Properties to set
     * @returns {SignInRequest} SignInRequest instance
     */
    SignInRequest.create = function create(properties) {
        return new SignInRequest(properties);
    };

    /**
     * Encodes the specified SignInRequest message. Does not implicitly {@link SignInRequest.verify|verify} messages.
     * @function encode
     * @memberof SignInRequest
     * @static
     * @param {ISignInRequest} m SignInRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SignInRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.token != null && Object.hasOwnProperty.call(m, "token"))
            w.uint32(10).string(m.token);
        return w;
    };

    /**
     * Encodes the specified SignInRequest message, length delimited. Does not implicitly {@link SignInRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SignInRequest
     * @static
     * @param {ISignInRequest} message SignInRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SignInRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SignInRequest message from the specified reader or buffer.
     * @function decode
     * @memberof SignInRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SignInRequest} SignInRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SignInRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SignInRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.token = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a SignInRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SignInRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SignInRequest} SignInRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SignInRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SignInRequest message.
     * @function verify
     * @memberof SignInRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SignInRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.token != null && m.hasOwnProperty("token")) {
            if (!$util.isString(m.token))
                return "token: string expected";
        }
        return null;
    };

    return SignInRequest;
})();

export const SignInResponse = $root.SignInResponse = (() => {

    /**
     * Properties of a SignInResponse.
     * @exports ISignInResponse
     * @interface ISignInResponse
     * @property {IUserInfo|null} [userInfo] SignInResponse userInfo
     * @property {IOfflineAwardInfo|null} [offlineAwardInfo] SignInResponse offlineAwardInfo
     * @property {ICheckInAwardInfo|null} [checkInAwardInfo] SignInResponse checkInAwardInfo
     */

    /**
     * Constructs a new SignInResponse.
     * @exports SignInResponse
     * @classdesc Represents a SignInResponse.
     * @implements ISignInResponse
     * @constructor
     * @param {ISignInResponse=} [p] Properties to set
     */
    function SignInResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SignInResponse userInfo.
     * @member {IUserInfo|null|undefined} userInfo
     * @memberof SignInResponse
     * @instance
     */
    SignInResponse.prototype.userInfo = null;

    /**
     * SignInResponse offlineAwardInfo.
     * @member {IOfflineAwardInfo|null|undefined} offlineAwardInfo
     * @memberof SignInResponse
     * @instance
     */
    SignInResponse.prototype.offlineAwardInfo = null;

    /**
     * SignInResponse checkInAwardInfo.
     * @member {ICheckInAwardInfo|null|undefined} checkInAwardInfo
     * @memberof SignInResponse
     * @instance
     */
    SignInResponse.prototype.checkInAwardInfo = null;

    /**
     * Creates a new SignInResponse instance using the specified properties.
     * @function create
     * @memberof SignInResponse
     * @static
     * @param {ISignInResponse=} [properties] Properties to set
     * @returns {SignInResponse} SignInResponse instance
     */
    SignInResponse.create = function create(properties) {
        return new SignInResponse(properties);
    };

    /**
     * Encodes the specified SignInResponse message. Does not implicitly {@link SignInResponse.verify|verify} messages.
     * @function encode
     * @memberof SignInResponse
     * @static
     * @param {ISignInResponse} m SignInResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SignInResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.userInfo != null && Object.hasOwnProperty.call(m, "userInfo"))
            $root.UserInfo.encode(m.userInfo, w.uint32(10).fork()).ldelim();
        if (m.offlineAwardInfo != null && Object.hasOwnProperty.call(m, "offlineAwardInfo"))
            $root.OfflineAwardInfo.encode(m.offlineAwardInfo, w.uint32(18).fork()).ldelim();
        if (m.checkInAwardInfo != null && Object.hasOwnProperty.call(m, "checkInAwardInfo"))
            $root.CheckInAwardInfo.encode(m.checkInAwardInfo, w.uint32(26).fork()).ldelim();
        return w;
    };

    /**
     * Encodes the specified SignInResponse message, length delimited. Does not implicitly {@link SignInResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SignInResponse
     * @static
     * @param {ISignInResponse} message SignInResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SignInResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SignInResponse message from the specified reader or buffer.
     * @function decode
     * @memberof SignInResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SignInResponse} SignInResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SignInResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SignInResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.userInfo = $root.UserInfo.decode(r, r.uint32());
                break;
            case 2:
                m.offlineAwardInfo = $root.OfflineAwardInfo.decode(r, r.uint32());
                break;
            case 3:
                m.checkInAwardInfo = $root.CheckInAwardInfo.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a SignInResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SignInResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SignInResponse} SignInResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SignInResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SignInResponse message.
     * @function verify
     * @memberof SignInResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SignInResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.userInfo != null && m.hasOwnProperty("userInfo")) {
            {
                var e = $root.UserInfo.verify(m.userInfo);
                if (e)
                    return "userInfo." + e;
            }
        }
        if (m.offlineAwardInfo != null && m.hasOwnProperty("offlineAwardInfo")) {
            {
                var e = $root.OfflineAwardInfo.verify(m.offlineAwardInfo);
                if (e)
                    return "offlineAwardInfo." + e;
            }
        }
        if (m.checkInAwardInfo != null && m.hasOwnProperty("checkInAwardInfo")) {
            {
                var e = $root.CheckInAwardInfo.verify(m.checkInAwardInfo);
                if (e)
                    return "checkInAwardInfo." + e;
            }
        }
        return null;
    };

    return SignInResponse;
})();

module.exports = $root;
