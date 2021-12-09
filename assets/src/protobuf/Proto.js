/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobuf");

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const Base = $root.Base = (() => {

    Base.prototype.classname = 'Base';

    /**
     * Properties of a Base.
     * @exports IBase
     * @interface IBase
     * @property {string|null} [action] Base action
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
     * Base action.
     * @member {string} action
     * @memberof Base
     * @instance
     */
    Base.prototype.action = "";

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
        if (m.action != null && Object.hasOwnProperty.call(m, "action"))
            w.uint32(10).string(m.action);
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
                m.action = r.string();
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
        if (m.action != null && m.hasOwnProperty("action")) {
            if (!$util.isString(m.action))
                return "action: string expected";
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

export const UserInfoRequest = $root.UserInfoRequest = (() => {

    UserInfoRequest.prototype.classname = 'UserInfoRequest';

    /**
     * Properties of a UserInfoRequest.
     * @exports IUserInfoRequest
     * @interface IUserInfoRequest
     */

    /**
     * Constructs a new UserInfoRequest.
     * @exports UserInfoRequest
     * @classdesc Represents a UserInfoRequest.
     * @implements IUserInfoRequest
     * @constructor
     * @param {IUserInfoRequest=} [p] Properties to set
     */
    function UserInfoRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new UserInfoRequest instance using the specified properties.
     * @function create
     * @memberof UserInfoRequest
     * @static
     * @param {IUserInfoRequest=} [properties] Properties to set
     * @returns {UserInfoRequest} UserInfoRequest instance
     */
    UserInfoRequest.create = function create(properties) {
        return new UserInfoRequest(properties);
    };

    /**
     * Encodes the specified UserInfoRequest message. Does not implicitly {@link UserInfoRequest.verify|verify} messages.
     * @function encode
     * @memberof UserInfoRequest
     * @static
     * @param {IUserInfoRequest} m UserInfoRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserInfoRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Encodes the specified UserInfoRequest message, length delimited. Does not implicitly {@link UserInfoRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserInfoRequest
     * @static
     * @param {IUserInfoRequest} message UserInfoRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserInfoRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserInfoRequest message from the specified reader or buffer.
     * @function decode
     * @memberof UserInfoRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {UserInfoRequest} UserInfoRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserInfoRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.UserInfoRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a UserInfoRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserInfoRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserInfoRequest} UserInfoRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserInfoRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserInfoRequest message.
     * @function verify
     * @memberof UserInfoRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserInfoRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        return null;
    };

    return UserInfoRequest;
})();

export const UserInfoResponse = $root.UserInfoResponse = (() => {

    UserInfoResponse.prototype.classname = 'UserInfoResponse';

    /**
     * Properties of a UserInfoResponse.
     * @exports IUserInfoResponse
     * @interface IUserInfoResponse
     * @property {IUserInfo|null} [userInfo] UserInfoResponse userInfo
     */

    /**
     * Constructs a new UserInfoResponse.
     * @exports UserInfoResponse
     * @classdesc Represents a UserInfoResponse.
     * @implements IUserInfoResponse
     * @constructor
     * @param {IUserInfoResponse=} [p] Properties to set
     */
    function UserInfoResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * UserInfoResponse userInfo.
     * @member {IUserInfo|null|undefined} userInfo
     * @memberof UserInfoResponse
     * @instance
     */
    UserInfoResponse.prototype.userInfo = null;

    /**
     * Creates a new UserInfoResponse instance using the specified properties.
     * @function create
     * @memberof UserInfoResponse
     * @static
     * @param {IUserInfoResponse=} [properties] Properties to set
     * @returns {UserInfoResponse} UserInfoResponse instance
     */
    UserInfoResponse.create = function create(properties) {
        return new UserInfoResponse(properties);
    };

    /**
     * Encodes the specified UserInfoResponse message. Does not implicitly {@link UserInfoResponse.verify|verify} messages.
     * @function encode
     * @memberof UserInfoResponse
     * @static
     * @param {IUserInfoResponse} m UserInfoResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserInfoResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.userInfo != null && Object.hasOwnProperty.call(m, "userInfo"))
            $root.UserInfo.encode(m.userInfo, w.uint32(10).fork()).ldelim();
        return w;
    };

    /**
     * Encodes the specified UserInfoResponse message, length delimited. Does not implicitly {@link UserInfoResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserInfoResponse
     * @static
     * @param {IUserInfoResponse} message UserInfoResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserInfoResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserInfoResponse message from the specified reader or buffer.
     * @function decode
     * @memberof UserInfoResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {UserInfoResponse} UserInfoResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserInfoResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.UserInfoResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.userInfo = $root.UserInfo.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a UserInfoResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserInfoResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserInfoResponse} UserInfoResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserInfoResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserInfoResponse message.
     * @function verify
     * @memberof UserInfoResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserInfoResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.userInfo != null && m.hasOwnProperty("userInfo")) {
            {
                var e = $root.UserInfo.verify(m.userInfo);
                if (e)
                    return "userInfo." + e;
            }
        }
        return null;
    };

    return UserInfoResponse;
})();

export const UserInfo = $root.UserInfo = (() => {

    UserInfo.prototype.classname = 'UserInfo';

    /**
     * Properties of a UserInfo.
     * @exports IUserInfo
     * @interface IUserInfo
     * @property {string|null} [id] UserInfo id
     * @property {string|null} [nick] UserInfo nick
     * @property {number|Long|null} [power] UserInfo power
     * @property {number|Long|null} [stone] UserInfo stone
     * @property {number|null} [avatar] UserInfo avatar
     * @property {number|null} [sex] UserInfo sex
     * @property {number|null} [realmLevel] UserInfo realmLevel
     * @property {string|null} [phone] UserInfo phone
     * @property {number|null} [aura] UserInfo aura
     * @property {number|null} [skillexp] UserInfo skillexp
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
     * UserInfo stone.
     * @member {number|Long} stone
     * @memberof UserInfo
     * @instance
     */
    UserInfo.prototype.stone = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * UserInfo avatar.
     * @member {number} avatar
     * @memberof UserInfo
     * @instance
     */
    UserInfo.prototype.avatar = 0;

    /**
     * UserInfo sex.
     * @member {number} sex
     * @memberof UserInfo
     * @instance
     */
    UserInfo.prototype.sex = 0;

    /**
     * UserInfo realmLevel.
     * @member {number} realmLevel
     * @memberof UserInfo
     * @instance
     */
    UserInfo.prototype.realmLevel = 0;

    /**
     * UserInfo phone.
     * @member {string} phone
     * @memberof UserInfo
     * @instance
     */
    UserInfo.prototype.phone = "";

    /**
     * UserInfo aura.
     * @member {number} aura
     * @memberof UserInfo
     * @instance
     */
    UserInfo.prototype.aura = 0;

    /**
     * UserInfo skillexp.
     * @member {number} skillexp
     * @memberof UserInfo
     * @instance
     */
    UserInfo.prototype.skillexp = 0;

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
        if (m.stone != null && Object.hasOwnProperty.call(m, "stone"))
            w.uint32(32).int64(m.stone);
        if (m.avatar != null && Object.hasOwnProperty.call(m, "avatar"))
            w.uint32(40).int32(m.avatar);
        if (m.sex != null && Object.hasOwnProperty.call(m, "sex"))
            w.uint32(48).int32(m.sex);
        if (m.realmLevel != null && Object.hasOwnProperty.call(m, "realmLevel"))
            w.uint32(56).int32(m.realmLevel);
        if (m.phone != null && Object.hasOwnProperty.call(m, "phone"))
            w.uint32(66).string(m.phone);
        if (m.aura != null && Object.hasOwnProperty.call(m, "aura"))
            w.uint32(72).int32(m.aura);
        if (m.skillexp != null && Object.hasOwnProperty.call(m, "skillexp"))
            w.uint32(80).int32(m.skillexp);
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
                m.stone = r.int64();
                break;
            case 5:
                m.avatar = r.int32();
                break;
            case 6:
                m.sex = r.int32();
                break;
            case 7:
                m.realmLevel = r.int32();
                break;
            case 8:
                m.phone = r.string();
                break;
            case 9:
                m.aura = r.int32();
                break;
            case 10:
                m.skillexp = r.int32();
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
        if (m.stone != null && m.hasOwnProperty("stone")) {
            if (!$util.isInteger(m.stone) && !(m.stone && $util.isInteger(m.stone.low) && $util.isInteger(m.stone.high)))
                return "stone: integer|Long expected";
        }
        if (m.avatar != null && m.hasOwnProperty("avatar")) {
            if (!$util.isInteger(m.avatar))
                return "avatar: integer expected";
        }
        if (m.sex != null && m.hasOwnProperty("sex")) {
            if (!$util.isInteger(m.sex))
                return "sex: integer expected";
        }
        if (m.realmLevel != null && m.hasOwnProperty("realmLevel")) {
            if (!$util.isInteger(m.realmLevel))
                return "realmLevel: integer expected";
        }
        if (m.phone != null && m.hasOwnProperty("phone")) {
            if (!$util.isString(m.phone))
                return "phone: string expected";
        }
        if (m.aura != null && m.hasOwnProperty("aura")) {
            if (!$util.isInteger(m.aura))
                return "aura: integer expected";
        }
        if (m.skillexp != null && m.hasOwnProperty("skillexp")) {
            if (!$util.isInteger(m.skillexp))
                return "skillexp: integer expected";
        }
        return null;
    };

    return UserInfo;
})();

export const ItemInfo = $root.ItemInfo = (() => {

    ItemInfo.prototype.classname = 'ItemInfo';

    /**
     * Properties of an ItemInfo.
     * @exports IItemInfo
     * @interface IItemInfo
     * @property {string|null} [uuid] ItemInfo uuid
     * @property {string|null} [id] ItemInfo id
     * @property {number|null} [count] ItemInfo count
     * @property {number|null} [qualityId] ItemInfo qualityId
     * @property {number|null} [level] ItemInfo level
     * @property {number|null} [isLock] ItemInfo isLock
     * @property {number|null} [suitId] ItemInfo suitId
     * @property {number|null} [type] ItemInfo type
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
     * ItemInfo uuid.
     * @member {string} uuid
     * @memberof ItemInfo
     * @instance
     */
    ItemInfo.prototype.uuid = "";

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
     * ItemInfo qualityId.
     * @member {number} qualityId
     * @memberof ItemInfo
     * @instance
     */
    ItemInfo.prototype.qualityId = 0;

    /**
     * ItemInfo level.
     * @member {number} level
     * @memberof ItemInfo
     * @instance
     */
    ItemInfo.prototype.level = 0;

    /**
     * ItemInfo isLock.
     * @member {number} isLock
     * @memberof ItemInfo
     * @instance
     */
    ItemInfo.prototype.isLock = 0;

    /**
     * ItemInfo suitId.
     * @member {number} suitId
     * @memberof ItemInfo
     * @instance
     */
    ItemInfo.prototype.suitId = 0;

    /**
     * ItemInfo type.
     * @member {number} type
     * @memberof ItemInfo
     * @instance
     */
    ItemInfo.prototype.type = 0;

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
        if (m.uuid != null && Object.hasOwnProperty.call(m, "uuid"))
            w.uint32(10).string(m.uuid);
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(18).string(m.id);
        if (m.count != null && Object.hasOwnProperty.call(m, "count"))
            w.uint32(24).int32(m.count);
        if (m.qualityId != null && Object.hasOwnProperty.call(m, "qualityId"))
            w.uint32(32).int32(m.qualityId);
        if (m.level != null && Object.hasOwnProperty.call(m, "level"))
            w.uint32(40).int32(m.level);
        if (m.isLock != null && Object.hasOwnProperty.call(m, "isLock"))
            w.uint32(48).int32(m.isLock);
        if (m.suitId != null && Object.hasOwnProperty.call(m, "suitId"))
            w.uint32(56).int32(m.suitId);
        if (m.type != null && Object.hasOwnProperty.call(m, "type"))
            w.uint32(64).int32(m.type);
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
                m.uuid = r.string();
                break;
            case 2:
                m.id = r.string();
                break;
            case 3:
                m.count = r.int32();
                break;
            case 4:
                m.qualityId = r.int32();
                break;
            case 5:
                m.level = r.int32();
                break;
            case 6:
                m.isLock = r.int32();
                break;
            case 7:
                m.suitId = r.int32();
                break;
            case 8:
                m.type = r.int32();
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
        if (m.uuid != null && m.hasOwnProperty("uuid")) {
            if (!$util.isString(m.uuid))
                return "uuid: string expected";
        }
        if (m.id != null && m.hasOwnProperty("id")) {
            if (!$util.isString(m.id))
                return "id: string expected";
        }
        if (m.count != null && m.hasOwnProperty("count")) {
            if (!$util.isInteger(m.count))
                return "count: integer expected";
        }
        if (m.qualityId != null && m.hasOwnProperty("qualityId")) {
            if (!$util.isInteger(m.qualityId))
                return "qualityId: integer expected";
        }
        if (m.level != null && m.hasOwnProperty("level")) {
            if (!$util.isInteger(m.level))
                return "level: integer expected";
        }
        if (m.isLock != null && m.hasOwnProperty("isLock")) {
            if (!$util.isInteger(m.isLock))
                return "isLock: integer expected";
        }
        if (m.suitId != null && m.hasOwnProperty("suitId")) {
            if (!$util.isInteger(m.suitId))
                return "suitId: integer expected";
        }
        if (m.type != null && m.hasOwnProperty("type")) {
            if (!$util.isInteger(m.type))
                return "type: integer expected";
        }
        return null;
    };

    return ItemInfo;
})();

export const OfflineAwardInfo = $root.OfflineAwardInfo = (() => {

    OfflineAwardInfo.prototype.classname = 'OfflineAwardInfo';

    /**
     * Properties of an OfflineAwardInfo.
     * @exports IOfflineAwardInfo
     * @interface IOfflineAwardInfo
     * @property {number|null} [offlineTime] OfflineAwardInfo offlineTime
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
     * OfflineAwardInfo offlineTime.
     * @member {number} offlineTime
     * @memberof OfflineAwardInfo
     * @instance
     */
    OfflineAwardInfo.prototype.offlineTime = 0;

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
        if (m.offlineTime != null && Object.hasOwnProperty.call(m, "offlineTime"))
            w.uint32(8).int32(m.offlineTime);
        if (m.awardList != null && m.awardList.length) {
            for (var i = 0; i < m.awardList.length; ++i)
                $root.ItemInfo.encode(m.awardList[i], w.uint32(18).fork()).ldelim();
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
                m.offlineTime = r.int32();
                break;
            case 2:
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
        if (m.offlineTime != null && m.hasOwnProperty("offlineTime")) {
            if (!$util.isInteger(m.offlineTime))
                return "offlineTime: integer expected";
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

    return OfflineAwardInfo;
})();

export const ReceiveOfflineAwardRequest = $root.ReceiveOfflineAwardRequest = (() => {

    ReceiveOfflineAwardRequest.prototype.classname = 'ReceiveOfflineAwardRequest';

    /**
     * Properties of a ReceiveOfflineAwardRequest.
     * @exports IReceiveOfflineAwardRequest
     * @interface IReceiveOfflineAwardRequest
     * @property {number|null} [receiveType] ReceiveOfflineAwardRequest receiveType
     */

    /**
     * Constructs a new ReceiveOfflineAwardRequest.
     * @exports ReceiveOfflineAwardRequest
     * @classdesc Represents a ReceiveOfflineAwardRequest.
     * @implements IReceiveOfflineAwardRequest
     * @constructor
     * @param {IReceiveOfflineAwardRequest=} [p] Properties to set
     */
    function ReceiveOfflineAwardRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ReceiveOfflineAwardRequest receiveType.
     * @member {number} receiveType
     * @memberof ReceiveOfflineAwardRequest
     * @instance
     */
    ReceiveOfflineAwardRequest.prototype.receiveType = 0;

    /**
     * Creates a new ReceiveOfflineAwardRequest instance using the specified properties.
     * @function create
     * @memberof ReceiveOfflineAwardRequest
     * @static
     * @param {IReceiveOfflineAwardRequest=} [properties] Properties to set
     * @returns {ReceiveOfflineAwardRequest} ReceiveOfflineAwardRequest instance
     */
    ReceiveOfflineAwardRequest.create = function create(properties) {
        return new ReceiveOfflineAwardRequest(properties);
    };

    /**
     * Encodes the specified ReceiveOfflineAwardRequest message. Does not implicitly {@link ReceiveOfflineAwardRequest.verify|verify} messages.
     * @function encode
     * @memberof ReceiveOfflineAwardRequest
     * @static
     * @param {IReceiveOfflineAwardRequest} m ReceiveOfflineAwardRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReceiveOfflineAwardRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.receiveType != null && Object.hasOwnProperty.call(m, "receiveType"))
            w.uint32(8).int32(m.receiveType);
        return w;
    };

    /**
     * Encodes the specified ReceiveOfflineAwardRequest message, length delimited. Does not implicitly {@link ReceiveOfflineAwardRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReceiveOfflineAwardRequest
     * @static
     * @param {IReceiveOfflineAwardRequest} message ReceiveOfflineAwardRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReceiveOfflineAwardRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReceiveOfflineAwardRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ReceiveOfflineAwardRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ReceiveOfflineAwardRequest} ReceiveOfflineAwardRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReceiveOfflineAwardRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ReceiveOfflineAwardRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.receiveType = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a ReceiveOfflineAwardRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReceiveOfflineAwardRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReceiveOfflineAwardRequest} ReceiveOfflineAwardRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReceiveOfflineAwardRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReceiveOfflineAwardRequest message.
     * @function verify
     * @memberof ReceiveOfflineAwardRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReceiveOfflineAwardRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.receiveType != null && m.hasOwnProperty("receiveType")) {
            if (!$util.isInteger(m.receiveType))
                return "receiveType: integer expected";
        }
        return null;
    };

    return ReceiveOfflineAwardRequest;
})();

export const ReceiveOfflineAwardResponse = $root.ReceiveOfflineAwardResponse = (() => {

    ReceiveOfflineAwardResponse.prototype.classname = 'ReceiveOfflineAwardResponse';

    /**
     * Properties of a ReceiveOfflineAwardResponse.
     * @exports IReceiveOfflineAwardResponse
     * @interface IReceiveOfflineAwardResponse
     * @property {boolean|null} [isSuccess] ReceiveOfflineAwardResponse isSuccess
     */

    /**
     * Constructs a new ReceiveOfflineAwardResponse.
     * @exports ReceiveOfflineAwardResponse
     * @classdesc Represents a ReceiveOfflineAwardResponse.
     * @implements IReceiveOfflineAwardResponse
     * @constructor
     * @param {IReceiveOfflineAwardResponse=} [p] Properties to set
     */
    function ReceiveOfflineAwardResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ReceiveOfflineAwardResponse isSuccess.
     * @member {boolean} isSuccess
     * @memberof ReceiveOfflineAwardResponse
     * @instance
     */
    ReceiveOfflineAwardResponse.prototype.isSuccess = false;

    /**
     * Creates a new ReceiveOfflineAwardResponse instance using the specified properties.
     * @function create
     * @memberof ReceiveOfflineAwardResponse
     * @static
     * @param {IReceiveOfflineAwardResponse=} [properties] Properties to set
     * @returns {ReceiveOfflineAwardResponse} ReceiveOfflineAwardResponse instance
     */
    ReceiveOfflineAwardResponse.create = function create(properties) {
        return new ReceiveOfflineAwardResponse(properties);
    };

    /**
     * Encodes the specified ReceiveOfflineAwardResponse message. Does not implicitly {@link ReceiveOfflineAwardResponse.verify|verify} messages.
     * @function encode
     * @memberof ReceiveOfflineAwardResponse
     * @static
     * @param {IReceiveOfflineAwardResponse} m ReceiveOfflineAwardResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReceiveOfflineAwardResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.isSuccess != null && Object.hasOwnProperty.call(m, "isSuccess"))
            w.uint32(8).bool(m.isSuccess);
        return w;
    };

    /**
     * Encodes the specified ReceiveOfflineAwardResponse message, length delimited. Does not implicitly {@link ReceiveOfflineAwardResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReceiveOfflineAwardResponse
     * @static
     * @param {IReceiveOfflineAwardResponse} message ReceiveOfflineAwardResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReceiveOfflineAwardResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReceiveOfflineAwardResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ReceiveOfflineAwardResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ReceiveOfflineAwardResponse} ReceiveOfflineAwardResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReceiveOfflineAwardResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ReceiveOfflineAwardResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.isSuccess = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a ReceiveOfflineAwardResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReceiveOfflineAwardResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReceiveOfflineAwardResponse} ReceiveOfflineAwardResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReceiveOfflineAwardResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReceiveOfflineAwardResponse message.
     * @function verify
     * @memberof ReceiveOfflineAwardResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReceiveOfflineAwardResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.isSuccess != null && m.hasOwnProperty("isSuccess")) {
            if (typeof m.isSuccess !== "boolean")
                return "isSuccess: boolean expected";
        }
        return null;
    };

    return ReceiveOfflineAwardResponse;
})();

export const ReceiveHangUpAwardRequest = $root.ReceiveHangUpAwardRequest = (() => {

    ReceiveHangUpAwardRequest.prototype.classname = 'ReceiveHangUpAwardRequest';

    /**
     * Properties of a ReceiveHangUpAwardRequest.
     * @exports IReceiveHangUpAwardRequest
     * @interface IReceiveHangUpAwardRequest
     */

    /**
     * Constructs a new ReceiveHangUpAwardRequest.
     * @exports ReceiveHangUpAwardRequest
     * @classdesc Represents a ReceiveHangUpAwardRequest.
     * @implements IReceiveHangUpAwardRequest
     * @constructor
     * @param {IReceiveHangUpAwardRequest=} [p] Properties to set
     */
    function ReceiveHangUpAwardRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new ReceiveHangUpAwardRequest instance using the specified properties.
     * @function create
     * @memberof ReceiveHangUpAwardRequest
     * @static
     * @param {IReceiveHangUpAwardRequest=} [properties] Properties to set
     * @returns {ReceiveHangUpAwardRequest} ReceiveHangUpAwardRequest instance
     */
    ReceiveHangUpAwardRequest.create = function create(properties) {
        return new ReceiveHangUpAwardRequest(properties);
    };

    /**
     * Encodes the specified ReceiveHangUpAwardRequest message. Does not implicitly {@link ReceiveHangUpAwardRequest.verify|verify} messages.
     * @function encode
     * @memberof ReceiveHangUpAwardRequest
     * @static
     * @param {IReceiveHangUpAwardRequest} m ReceiveHangUpAwardRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReceiveHangUpAwardRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Encodes the specified ReceiveHangUpAwardRequest message, length delimited. Does not implicitly {@link ReceiveHangUpAwardRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReceiveHangUpAwardRequest
     * @static
     * @param {IReceiveHangUpAwardRequest} message ReceiveHangUpAwardRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReceiveHangUpAwardRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReceiveHangUpAwardRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ReceiveHangUpAwardRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ReceiveHangUpAwardRequest} ReceiveHangUpAwardRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReceiveHangUpAwardRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ReceiveHangUpAwardRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a ReceiveHangUpAwardRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReceiveHangUpAwardRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReceiveHangUpAwardRequest} ReceiveHangUpAwardRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReceiveHangUpAwardRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReceiveHangUpAwardRequest message.
     * @function verify
     * @memberof ReceiveHangUpAwardRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReceiveHangUpAwardRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        return null;
    };

    return ReceiveHangUpAwardRequest;
})();

export const ReceiveHangUpAwardResponse = $root.ReceiveHangUpAwardResponse = (() => {

    ReceiveHangUpAwardResponse.prototype.classname = 'ReceiveHangUpAwardResponse';

    /**
     * Properties of a ReceiveHangUpAwardResponse.
     * @exports IReceiveHangUpAwardResponse
     * @interface IReceiveHangUpAwardResponse
     * @property {boolean|null} [isSuccess] ReceiveHangUpAwardResponse isSuccess
     */

    /**
     * Constructs a new ReceiveHangUpAwardResponse.
     * @exports ReceiveHangUpAwardResponse
     * @classdesc Represents a ReceiveHangUpAwardResponse.
     * @implements IReceiveHangUpAwardResponse
     * @constructor
     * @param {IReceiveHangUpAwardResponse=} [p] Properties to set
     */
    function ReceiveHangUpAwardResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ReceiveHangUpAwardResponse isSuccess.
     * @member {boolean} isSuccess
     * @memberof ReceiveHangUpAwardResponse
     * @instance
     */
    ReceiveHangUpAwardResponse.prototype.isSuccess = false;

    /**
     * Creates a new ReceiveHangUpAwardResponse instance using the specified properties.
     * @function create
     * @memberof ReceiveHangUpAwardResponse
     * @static
     * @param {IReceiveHangUpAwardResponse=} [properties] Properties to set
     * @returns {ReceiveHangUpAwardResponse} ReceiveHangUpAwardResponse instance
     */
    ReceiveHangUpAwardResponse.create = function create(properties) {
        return new ReceiveHangUpAwardResponse(properties);
    };

    /**
     * Encodes the specified ReceiveHangUpAwardResponse message. Does not implicitly {@link ReceiveHangUpAwardResponse.verify|verify} messages.
     * @function encode
     * @memberof ReceiveHangUpAwardResponse
     * @static
     * @param {IReceiveHangUpAwardResponse} m ReceiveHangUpAwardResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReceiveHangUpAwardResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.isSuccess != null && Object.hasOwnProperty.call(m, "isSuccess"))
            w.uint32(8).bool(m.isSuccess);
        return w;
    };

    /**
     * Encodes the specified ReceiveHangUpAwardResponse message, length delimited. Does not implicitly {@link ReceiveHangUpAwardResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReceiveHangUpAwardResponse
     * @static
     * @param {IReceiveHangUpAwardResponse} message ReceiveHangUpAwardResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReceiveHangUpAwardResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReceiveHangUpAwardResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ReceiveHangUpAwardResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ReceiveHangUpAwardResponse} ReceiveHangUpAwardResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReceiveHangUpAwardResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ReceiveHangUpAwardResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.isSuccess = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a ReceiveHangUpAwardResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReceiveHangUpAwardResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReceiveHangUpAwardResponse} ReceiveHangUpAwardResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReceiveHangUpAwardResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReceiveHangUpAwardResponse message.
     * @function verify
     * @memberof ReceiveHangUpAwardResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReceiveHangUpAwardResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.isSuccess != null && m.hasOwnProperty("isSuccess")) {
            if (typeof m.isSuccess !== "boolean")
                return "isSuccess: boolean expected";
        }
        return null;
    };

    return ReceiveHangUpAwardResponse;
})();

export const CdkExchangeRequest = $root.CdkExchangeRequest = (() => {

    CdkExchangeRequest.prototype.classname = 'CdkExchangeRequest';

    /**
     * Properties of a CdkExchangeRequest.
     * @exports ICdkExchangeRequest
     * @interface ICdkExchangeRequest
     * @property {string|null} [cdk] CdkExchangeRequest cdk
     */

    /**
     * Constructs a new CdkExchangeRequest.
     * @exports CdkExchangeRequest
     * @classdesc Represents a CdkExchangeRequest.
     * @implements ICdkExchangeRequest
     * @constructor
     * @param {ICdkExchangeRequest=} [p] Properties to set
     */
    function CdkExchangeRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CdkExchangeRequest cdk.
     * @member {string} cdk
     * @memberof CdkExchangeRequest
     * @instance
     */
    CdkExchangeRequest.prototype.cdk = "";

    /**
     * Creates a new CdkExchangeRequest instance using the specified properties.
     * @function create
     * @memberof CdkExchangeRequest
     * @static
     * @param {ICdkExchangeRequest=} [properties] Properties to set
     * @returns {CdkExchangeRequest} CdkExchangeRequest instance
     */
    CdkExchangeRequest.create = function create(properties) {
        return new CdkExchangeRequest(properties);
    };

    /**
     * Encodes the specified CdkExchangeRequest message. Does not implicitly {@link CdkExchangeRequest.verify|verify} messages.
     * @function encode
     * @memberof CdkExchangeRequest
     * @static
     * @param {ICdkExchangeRequest} m CdkExchangeRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CdkExchangeRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.cdk != null && Object.hasOwnProperty.call(m, "cdk"))
            w.uint32(10).string(m.cdk);
        return w;
    };

    /**
     * Encodes the specified CdkExchangeRequest message, length delimited. Does not implicitly {@link CdkExchangeRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CdkExchangeRequest
     * @static
     * @param {ICdkExchangeRequest} message CdkExchangeRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CdkExchangeRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CdkExchangeRequest message from the specified reader or buffer.
     * @function decode
     * @memberof CdkExchangeRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CdkExchangeRequest} CdkExchangeRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CdkExchangeRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CdkExchangeRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.cdk = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a CdkExchangeRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CdkExchangeRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CdkExchangeRequest} CdkExchangeRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CdkExchangeRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CdkExchangeRequest message.
     * @function verify
     * @memberof CdkExchangeRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CdkExchangeRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.cdk != null && m.hasOwnProperty("cdk")) {
            if (!$util.isString(m.cdk))
                return "cdk: string expected";
        }
        return null;
    };

    return CdkExchangeRequest;
})();

export const CdkExchangeResponse = $root.CdkExchangeResponse = (() => {

    CdkExchangeResponse.prototype.classname = 'CdkExchangeResponse';

    /**
     * Properties of a CdkExchangeResponse.
     * @exports ICdkExchangeResponse
     * @interface ICdkExchangeResponse
     * @property {boolean|null} [isSuccess] CdkExchangeResponse isSuccess
     */

    /**
     * Constructs a new CdkExchangeResponse.
     * @exports CdkExchangeResponse
     * @classdesc Represents a CdkExchangeResponse.
     * @implements ICdkExchangeResponse
     * @constructor
     * @param {ICdkExchangeResponse=} [p] Properties to set
     */
    function CdkExchangeResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CdkExchangeResponse isSuccess.
     * @member {boolean} isSuccess
     * @memberof CdkExchangeResponse
     * @instance
     */
    CdkExchangeResponse.prototype.isSuccess = false;

    /**
     * Creates a new CdkExchangeResponse instance using the specified properties.
     * @function create
     * @memberof CdkExchangeResponse
     * @static
     * @param {ICdkExchangeResponse=} [properties] Properties to set
     * @returns {CdkExchangeResponse} CdkExchangeResponse instance
     */
    CdkExchangeResponse.create = function create(properties) {
        return new CdkExchangeResponse(properties);
    };

    /**
     * Encodes the specified CdkExchangeResponse message. Does not implicitly {@link CdkExchangeResponse.verify|verify} messages.
     * @function encode
     * @memberof CdkExchangeResponse
     * @static
     * @param {ICdkExchangeResponse} m CdkExchangeResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CdkExchangeResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.isSuccess != null && Object.hasOwnProperty.call(m, "isSuccess"))
            w.uint32(8).bool(m.isSuccess);
        return w;
    };

    /**
     * Encodes the specified CdkExchangeResponse message, length delimited. Does not implicitly {@link CdkExchangeResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CdkExchangeResponse
     * @static
     * @param {ICdkExchangeResponse} message CdkExchangeResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CdkExchangeResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CdkExchangeResponse message from the specified reader or buffer.
     * @function decode
     * @memberof CdkExchangeResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CdkExchangeResponse} CdkExchangeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CdkExchangeResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CdkExchangeResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.isSuccess = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a CdkExchangeResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CdkExchangeResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CdkExchangeResponse} CdkExchangeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CdkExchangeResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CdkExchangeResponse message.
     * @function verify
     * @memberof CdkExchangeResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CdkExchangeResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.isSuccess != null && m.hasOwnProperty("isSuccess")) {
            if (typeof m.isSuccess !== "boolean")
                return "isSuccess: boolean expected";
        }
        return null;
    };

    return CdkExchangeResponse;
})();

export const CheckInAwardInfo = $root.CheckInAwardInfo = (() => {

    CheckInAwardInfo.prototype.classname = 'CheckInAwardInfo';

    /**
     * Properties of a CheckInAwardInfo.
     * @exports ICheckInAwardInfo
     * @interface ICheckInAwardInfo
     * @property {number|null} [day] CheckInAwardInfo day
     * @property {boolean|null} [isSign] CheckInAwardInfo isSign
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
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CheckInAwardInfo day.
     * @member {number} day
     * @memberof CheckInAwardInfo
     * @instance
     */
    CheckInAwardInfo.prototype.day = 0;

    /**
     * CheckInAwardInfo isSign.
     * @member {boolean} isSign
     * @memberof CheckInAwardInfo
     * @instance
     */
    CheckInAwardInfo.prototype.isSign = false;

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
        if (m.day != null && Object.hasOwnProperty.call(m, "day"))
            w.uint32(8).int32(m.day);
        if (m.isSign != null && Object.hasOwnProperty.call(m, "isSign"))
            w.uint32(16).bool(m.isSign);
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
                m.day = r.int32();
                break;
            case 2:
                m.isSign = r.bool();
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
        if (m.day != null && m.hasOwnProperty("day")) {
            if (!$util.isInteger(m.day))
                return "day: integer expected";
        }
        if (m.isSign != null && m.hasOwnProperty("isSign")) {
            if (typeof m.isSign !== "boolean")
                return "isSign: boolean expected";
        }
        return null;
    };

    return CheckInAwardInfo;
})();

export const SignInRequest = $root.SignInRequest = (() => {

    SignInRequest.prototype.classname = 'SignInRequest';

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

export const BattleInfo = $root.BattleInfo = (() => {

    BattleInfo.prototype.classname = 'BattleInfo';

    /**
     * Properties of a BattleInfo.
     * @exports IBattleInfo
     * @interface IBattleInfo
     * @property {number|null} [currentLevel] BattleInfo currentLevel
     */

    /**
     * Constructs a new BattleInfo.
     * @exports BattleInfo
     * @classdesc Represents a BattleInfo.
     * @implements IBattleInfo
     * @constructor
     * @param {IBattleInfo=} [p] Properties to set
     */
    function BattleInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BattleInfo currentLevel.
     * @member {number} currentLevel
     * @memberof BattleInfo
     * @instance
     */
    BattleInfo.prototype.currentLevel = 0;

    /**
     * Creates a new BattleInfo instance using the specified properties.
     * @function create
     * @memberof BattleInfo
     * @static
     * @param {IBattleInfo=} [properties] Properties to set
     * @returns {BattleInfo} BattleInfo instance
     */
    BattleInfo.create = function create(properties) {
        return new BattleInfo(properties);
    };

    /**
     * Encodes the specified BattleInfo message. Does not implicitly {@link BattleInfo.verify|verify} messages.
     * @function encode
     * @memberof BattleInfo
     * @static
     * @param {IBattleInfo} m BattleInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BattleInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.currentLevel != null && Object.hasOwnProperty.call(m, "currentLevel"))
            w.uint32(8).int32(m.currentLevel);
        return w;
    };

    /**
     * Encodes the specified BattleInfo message, length delimited. Does not implicitly {@link BattleInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BattleInfo
     * @static
     * @param {IBattleInfo} message BattleInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BattleInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BattleInfo message from the specified reader or buffer.
     * @function decode
     * @memberof BattleInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BattleInfo} BattleInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BattleInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BattleInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.currentLevel = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a BattleInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BattleInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BattleInfo} BattleInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BattleInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BattleInfo message.
     * @function verify
     * @memberof BattleInfo
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BattleInfo.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.currentLevel != null && m.hasOwnProperty("currentLevel")) {
            if (!$util.isInteger(m.currentLevel))
                return "currentLevel: integer expected";
        }
        return null;
    };

    return BattleInfo;
})();

export const SignInResponse = $root.SignInResponse = (() => {

    SignInResponse.prototype.classname = 'SignInResponse';

    /**
     * Properties of a SignInResponse.
     * @exports ISignInResponse
     * @interface ISignInResponse
     * @property {IUserInfo|null} [userInfo] SignInResponse userInfo
     * @property {IOfflineAwardInfo|null} [offlineAwardInfo] SignInResponse offlineAwardInfo
     * @property {ICheckInAwardInfo|null} [checkInAwardInfo] SignInResponse checkInAwardInfo
     * @property {IBattleInfo|null} [battleInfo] SignInResponse battleInfo
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
     * SignInResponse battleInfo.
     * @member {IBattleInfo|null|undefined} battleInfo
     * @memberof SignInResponse
     * @instance
     */
    SignInResponse.prototype.battleInfo = null;

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
        if (m.battleInfo != null && Object.hasOwnProperty.call(m, "battleInfo"))
            $root.BattleInfo.encode(m.battleInfo, w.uint32(34).fork()).ldelim();
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
            case 4:
                m.battleInfo = $root.BattleInfo.decode(r, r.uint32());
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
        if (m.battleInfo != null && m.hasOwnProperty("battleInfo")) {
            {
                var e = $root.BattleInfo.verify(m.battleInfo);
                if (e)
                    return "battleInfo." + e;
            }
        }
        return null;
    };

    return SignInResponse;
})();

export const SyncInfo = $root.SyncInfo = (() => {

    SyncInfo.prototype.classname = 'SyncInfo';

    /**
     * Properties of a SyncInfo.
     * @exports ISyncInfo
     * @interface ISyncInfo
     * @property {number|null} [realmLevel] SyncInfo realmLevel
     * @property {number|null} [aura] SyncInfo aura
     * @property {number|null} [stone] SyncInfo stone
     * @property {number|null} [skillexp] SyncInfo skillexp
     * @property {number|null} [power] SyncInfo power
     */

    /**
     * Constructs a new SyncInfo.
     * @exports SyncInfo
     * @classdesc Represents a SyncInfo.
     * @implements ISyncInfo
     * @constructor
     * @param {ISyncInfo=} [p] Properties to set
     */
    function SyncInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SyncInfo realmLevel.
     * @member {number} realmLevel
     * @memberof SyncInfo
     * @instance
     */
    SyncInfo.prototype.realmLevel = 0;

    /**
     * SyncInfo aura.
     * @member {number} aura
     * @memberof SyncInfo
     * @instance
     */
    SyncInfo.prototype.aura = 0;

    /**
     * SyncInfo stone.
     * @member {number} stone
     * @memberof SyncInfo
     * @instance
     */
    SyncInfo.prototype.stone = 0;

    /**
     * SyncInfo skillexp.
     * @member {number} skillexp
     * @memberof SyncInfo
     * @instance
     */
    SyncInfo.prototype.skillexp = 0;

    /**
     * SyncInfo power.
     * @member {number} power
     * @memberof SyncInfo
     * @instance
     */
    SyncInfo.prototype.power = 0;

    /**
     * Creates a new SyncInfo instance using the specified properties.
     * @function create
     * @memberof SyncInfo
     * @static
     * @param {ISyncInfo=} [properties] Properties to set
     * @returns {SyncInfo} SyncInfo instance
     */
    SyncInfo.create = function create(properties) {
        return new SyncInfo(properties);
    };

    /**
     * Encodes the specified SyncInfo message. Does not implicitly {@link SyncInfo.verify|verify} messages.
     * @function encode
     * @memberof SyncInfo
     * @static
     * @param {ISyncInfo} m SyncInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SyncInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.realmLevel != null && Object.hasOwnProperty.call(m, "realmLevel"))
            w.uint32(8).int32(m.realmLevel);
        if (m.aura != null && Object.hasOwnProperty.call(m, "aura"))
            w.uint32(16).int32(m.aura);
        if (m.stone != null && Object.hasOwnProperty.call(m, "stone"))
            w.uint32(24).int32(m.stone);
        if (m.skillexp != null && Object.hasOwnProperty.call(m, "skillexp"))
            w.uint32(32).int32(m.skillexp);
        if (m.power != null && Object.hasOwnProperty.call(m, "power"))
            w.uint32(40).int32(m.power);
        return w;
    };

    /**
     * Encodes the specified SyncInfo message, length delimited. Does not implicitly {@link SyncInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SyncInfo
     * @static
     * @param {ISyncInfo} message SyncInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SyncInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SyncInfo message from the specified reader or buffer.
     * @function decode
     * @memberof SyncInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SyncInfo} SyncInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SyncInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SyncInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.realmLevel = r.int32();
                break;
            case 2:
                m.aura = r.int32();
                break;
            case 3:
                m.stone = r.int32();
                break;
            case 4:
                m.skillexp = r.int32();
                break;
            case 5:
                m.power = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a SyncInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SyncInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SyncInfo} SyncInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SyncInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SyncInfo message.
     * @function verify
     * @memberof SyncInfo
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SyncInfo.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.realmLevel != null && m.hasOwnProperty("realmLevel")) {
            if (!$util.isInteger(m.realmLevel))
                return "realmLevel: integer expected";
        }
        if (m.aura != null && m.hasOwnProperty("aura")) {
            if (!$util.isInteger(m.aura))
                return "aura: integer expected";
        }
        if (m.stone != null && m.hasOwnProperty("stone")) {
            if (!$util.isInteger(m.stone))
                return "stone: integer expected";
        }
        if (m.skillexp != null && m.hasOwnProperty("skillexp")) {
            if (!$util.isInteger(m.skillexp))
                return "skillexp: integer expected";
        }
        if (m.power != null && m.hasOwnProperty("power")) {
            if (!$util.isInteger(m.power))
                return "power: integer expected";
        }
        return null;
    };

    return SyncInfo;
})();

export const PingRequest = $root.PingRequest = (() => {

    PingRequest.prototype.classname = 'PingRequest';

    /**
     * Properties of a PingRequest.
     * @exports IPingRequest
     * @interface IPingRequest
     */

    /**
     * Constructs a new PingRequest.
     * @exports PingRequest
     * @classdesc Represents a PingRequest.
     * @implements IPingRequest
     * @constructor
     * @param {IPingRequest=} [p] Properties to set
     */
    function PingRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new PingRequest instance using the specified properties.
     * @function create
     * @memberof PingRequest
     * @static
     * @param {IPingRequest=} [properties] Properties to set
     * @returns {PingRequest} PingRequest instance
     */
    PingRequest.create = function create(properties) {
        return new PingRequest(properties);
    };

    /**
     * Encodes the specified PingRequest message. Does not implicitly {@link PingRequest.verify|verify} messages.
     * @function encode
     * @memberof PingRequest
     * @static
     * @param {IPingRequest} m PingRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PingRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Encodes the specified PingRequest message, length delimited. Does not implicitly {@link PingRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PingRequest
     * @static
     * @param {IPingRequest} message PingRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PingRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PingRequest message from the specified reader or buffer.
     * @function decode
     * @memberof PingRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PingRequest} PingRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PingRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PingRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a PingRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PingRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PingRequest} PingRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PingRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PingRequest message.
     * @function verify
     * @memberof PingRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PingRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        return null;
    };

    return PingRequest;
})();

export const PingResponse = $root.PingResponse = (() => {

    PingResponse.prototype.classname = 'PingResponse';

    /**
     * Properties of a PingResponse.
     * @exports IPingResponse
     * @interface IPingResponse
     * @property {number|Long|null} [timestamp] PingResponse timestamp
     */

    /**
     * Constructs a new PingResponse.
     * @exports PingResponse
     * @classdesc Represents a PingResponse.
     * @implements IPingResponse
     * @constructor
     * @param {IPingResponse=} [p] Properties to set
     */
    function PingResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PingResponse timestamp.
     * @member {number|Long} timestamp
     * @memberof PingResponse
     * @instance
     */
    PingResponse.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new PingResponse instance using the specified properties.
     * @function create
     * @memberof PingResponse
     * @static
     * @param {IPingResponse=} [properties] Properties to set
     * @returns {PingResponse} PingResponse instance
     */
    PingResponse.create = function create(properties) {
        return new PingResponse(properties);
    };

    /**
     * Encodes the specified PingResponse message. Does not implicitly {@link PingResponse.verify|verify} messages.
     * @function encode
     * @memberof PingResponse
     * @static
     * @param {IPingResponse} m PingResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PingResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.timestamp != null && Object.hasOwnProperty.call(m, "timestamp"))
            w.uint32(8).uint64(m.timestamp);
        return w;
    };

    /**
     * Encodes the specified PingResponse message, length delimited. Does not implicitly {@link PingResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PingResponse
     * @static
     * @param {IPingResponse} message PingResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PingResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PingResponse message from the specified reader or buffer.
     * @function decode
     * @memberof PingResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PingResponse} PingResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PingResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PingResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.timestamp = r.uint64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a PingResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PingResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PingResponse} PingResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PingResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PingResponse message.
     * @function verify
     * @memberof PingResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PingResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.timestamp != null && m.hasOwnProperty("timestamp")) {
            if (!$util.isInteger(m.timestamp) && !(m.timestamp && $util.isInteger(m.timestamp.low) && $util.isInteger(m.timestamp.high)))
                return "timestamp: integer|Long expected";
        }
        return null;
    };

    return PingResponse;
})();

export const ErrorNotify = $root.ErrorNotify = (() => {

    ErrorNotify.prototype.classname = 'ErrorNotify';

    /**
     * Properties of an ErrorNotify.
     * @exports IErrorNotify
     * @interface IErrorNotify
     * @property {number|null} [code] ErrorNotify code
     * @property {string|null} [msg] ErrorNotify msg
     */

    /**
     * Constructs a new ErrorNotify.
     * @exports ErrorNotify
     * @classdesc Represents an ErrorNotify.
     * @implements IErrorNotify
     * @constructor
     * @param {IErrorNotify=} [p] Properties to set
     */
    function ErrorNotify(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ErrorNotify code.
     * @member {number} code
     * @memberof ErrorNotify
     * @instance
     */
    ErrorNotify.prototype.code = 0;

    /**
     * ErrorNotify msg.
     * @member {string} msg
     * @memberof ErrorNotify
     * @instance
     */
    ErrorNotify.prototype.msg = "";

    /**
     * Creates a new ErrorNotify instance using the specified properties.
     * @function create
     * @memberof ErrorNotify
     * @static
     * @param {IErrorNotify=} [properties] Properties to set
     * @returns {ErrorNotify} ErrorNotify instance
     */
    ErrorNotify.create = function create(properties) {
        return new ErrorNotify(properties);
    };

    /**
     * Encodes the specified ErrorNotify message. Does not implicitly {@link ErrorNotify.verify|verify} messages.
     * @function encode
     * @memberof ErrorNotify
     * @static
     * @param {IErrorNotify} m ErrorNotify message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ErrorNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.code != null && Object.hasOwnProperty.call(m, "code"))
            w.uint32(8).int32(m.code);
        if (m.msg != null && Object.hasOwnProperty.call(m, "msg"))
            w.uint32(18).string(m.msg);
        return w;
    };

    /**
     * Encodes the specified ErrorNotify message, length delimited. Does not implicitly {@link ErrorNotify.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ErrorNotify
     * @static
     * @param {IErrorNotify} message ErrorNotify message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ErrorNotify.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ErrorNotify message from the specified reader or buffer.
     * @function decode
     * @memberof ErrorNotify
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ErrorNotify} ErrorNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ErrorNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ErrorNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.code = r.int32();
                break;
            case 2:
                m.msg = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes an ErrorNotify message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ErrorNotify
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ErrorNotify} ErrorNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ErrorNotify.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ErrorNotify message.
     * @function verify
     * @memberof ErrorNotify
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ErrorNotify.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.code != null && m.hasOwnProperty("code")) {
            if (!$util.isInteger(m.code))
                return "code: integer expected";
        }
        if (m.msg != null && m.hasOwnProperty("msg")) {
            if (!$util.isString(m.msg))
                return "msg: string expected";
        }
        return null;
    };

    return ErrorNotify;
})();

export const CreatorRoleRequest = $root.CreatorRoleRequest = (() => {

    CreatorRoleRequest.prototype.classname = 'CreatorRoleRequest';

    /**
     * Properties of a CreatorRoleRequest.
     * @exports ICreatorRoleRequest
     * @interface ICreatorRoleRequest
     * @property {string|null} [nick] CreatorRoleRequest nick
     * @property {number|null} [sex] CreatorRoleRequest sex
     * @property {string|null} [utmSource] CreatorRoleRequest utmSource
     */

    /**
     * Constructs a new CreatorRoleRequest.
     * @exports CreatorRoleRequest
     * @classdesc Represents a CreatorRoleRequest.
     * @implements ICreatorRoleRequest
     * @constructor
     * @param {ICreatorRoleRequest=} [p] Properties to set
     */
    function CreatorRoleRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CreatorRoleRequest nick.
     * @member {string} nick
     * @memberof CreatorRoleRequest
     * @instance
     */
    CreatorRoleRequest.prototype.nick = "";

    /**
     * CreatorRoleRequest sex.
     * @member {number} sex
     * @memberof CreatorRoleRequest
     * @instance
     */
    CreatorRoleRequest.prototype.sex = 0;

    /**
     * CreatorRoleRequest utmSource.
     * @member {string} utmSource
     * @memberof CreatorRoleRequest
     * @instance
     */
    CreatorRoleRequest.prototype.utmSource = "";

    /**
     * Creates a new CreatorRoleRequest instance using the specified properties.
     * @function create
     * @memberof CreatorRoleRequest
     * @static
     * @param {ICreatorRoleRequest=} [properties] Properties to set
     * @returns {CreatorRoleRequest} CreatorRoleRequest instance
     */
    CreatorRoleRequest.create = function create(properties) {
        return new CreatorRoleRequest(properties);
    };

    /**
     * Encodes the specified CreatorRoleRequest message. Does not implicitly {@link CreatorRoleRequest.verify|verify} messages.
     * @function encode
     * @memberof CreatorRoleRequest
     * @static
     * @param {ICreatorRoleRequest} m CreatorRoleRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreatorRoleRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.nick != null && Object.hasOwnProperty.call(m, "nick"))
            w.uint32(10).string(m.nick);
        if (m.sex != null && Object.hasOwnProperty.call(m, "sex"))
            w.uint32(16).int32(m.sex);
        if (m.utmSource != null && Object.hasOwnProperty.call(m, "utmSource"))
            w.uint32(26).string(m.utmSource);
        return w;
    };

    /**
     * Encodes the specified CreatorRoleRequest message, length delimited. Does not implicitly {@link CreatorRoleRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CreatorRoleRequest
     * @static
     * @param {ICreatorRoleRequest} message CreatorRoleRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreatorRoleRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CreatorRoleRequest message from the specified reader or buffer.
     * @function decode
     * @memberof CreatorRoleRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CreatorRoleRequest} CreatorRoleRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreatorRoleRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CreatorRoleRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.nick = r.string();
                break;
            case 2:
                m.sex = r.int32();
                break;
            case 3:
                m.utmSource = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a CreatorRoleRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CreatorRoleRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CreatorRoleRequest} CreatorRoleRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreatorRoleRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CreatorRoleRequest message.
     * @function verify
     * @memberof CreatorRoleRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CreatorRoleRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.nick != null && m.hasOwnProperty("nick")) {
            if (!$util.isString(m.nick))
                return "nick: string expected";
        }
        if (m.sex != null && m.hasOwnProperty("sex")) {
            if (!$util.isInteger(m.sex))
                return "sex: integer expected";
        }
        if (m.utmSource != null && m.hasOwnProperty("utmSource")) {
            if (!$util.isString(m.utmSource))
                return "utmSource: string expected";
        }
        return null;
    };

    return CreatorRoleRequest;
})();

export const CreatorRoleResponse = $root.CreatorRoleResponse = (() => {

    CreatorRoleResponse.prototype.classname = 'CreatorRoleResponse';

    /**
     * Properties of a CreatorRoleResponse.
     * @exports ICreatorRoleResponse
     * @interface ICreatorRoleResponse
     * @property {IUserInfo|null} [userInfo] CreatorRoleResponse userInfo
     */

    /**
     * Constructs a new CreatorRoleResponse.
     * @exports CreatorRoleResponse
     * @classdesc Represents a CreatorRoleResponse.
     * @implements ICreatorRoleResponse
     * @constructor
     * @param {ICreatorRoleResponse=} [p] Properties to set
     */
    function CreatorRoleResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CreatorRoleResponse userInfo.
     * @member {IUserInfo|null|undefined} userInfo
     * @memberof CreatorRoleResponse
     * @instance
     */
    CreatorRoleResponse.prototype.userInfo = null;

    /**
     * Creates a new CreatorRoleResponse instance using the specified properties.
     * @function create
     * @memberof CreatorRoleResponse
     * @static
     * @param {ICreatorRoleResponse=} [properties] Properties to set
     * @returns {CreatorRoleResponse} CreatorRoleResponse instance
     */
    CreatorRoleResponse.create = function create(properties) {
        return new CreatorRoleResponse(properties);
    };

    /**
     * Encodes the specified CreatorRoleResponse message. Does not implicitly {@link CreatorRoleResponse.verify|verify} messages.
     * @function encode
     * @memberof CreatorRoleResponse
     * @static
     * @param {ICreatorRoleResponse} m CreatorRoleResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreatorRoleResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.userInfo != null && Object.hasOwnProperty.call(m, "userInfo"))
            $root.UserInfo.encode(m.userInfo, w.uint32(10).fork()).ldelim();
        return w;
    };

    /**
     * Encodes the specified CreatorRoleResponse message, length delimited. Does not implicitly {@link CreatorRoleResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CreatorRoleResponse
     * @static
     * @param {ICreatorRoleResponse} message CreatorRoleResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreatorRoleResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CreatorRoleResponse message from the specified reader or buffer.
     * @function decode
     * @memberof CreatorRoleResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CreatorRoleResponse} CreatorRoleResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreatorRoleResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CreatorRoleResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.userInfo = $root.UserInfo.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a CreatorRoleResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CreatorRoleResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CreatorRoleResponse} CreatorRoleResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreatorRoleResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CreatorRoleResponse message.
     * @function verify
     * @memberof CreatorRoleResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CreatorRoleResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.userInfo != null && m.hasOwnProperty("userInfo")) {
            {
                var e = $root.UserInfo.verify(m.userInfo);
                if (e)
                    return "userInfo." + e;
            }
        }
        return null;
    };

    return CreatorRoleResponse;
})();

export const EquipInfo = $root.EquipInfo = (() => {

    EquipInfo.prototype.classname = 'EquipInfo';

    /**
     * Properties of an EquipInfo.
     * @exports IEquipInfo
     * @interface IEquipInfo
     * @property {IItemInfo|null} [itemInfo] EquipInfo itemInfo
     * @property {IRoleAttribute|null} [mainAttribute] EquipInfo mainAttribute
     * @property {IRoleAttribute|null} [viceAttribute] EquipInfo viceAttribute
     */

    /**
     * Constructs a new EquipInfo.
     * @exports EquipInfo
     * @classdesc Represents an EquipInfo.
     * @implements IEquipInfo
     * @constructor
     * @param {IEquipInfo=} [p] Properties to set
     */
    function EquipInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * EquipInfo itemInfo.
     * @member {IItemInfo|null|undefined} itemInfo
     * @memberof EquipInfo
     * @instance
     */
    EquipInfo.prototype.itemInfo = null;

    /**
     * EquipInfo mainAttribute.
     * @member {IRoleAttribute|null|undefined} mainAttribute
     * @memberof EquipInfo
     * @instance
     */
    EquipInfo.prototype.mainAttribute = null;

    /**
     * EquipInfo viceAttribute.
     * @member {IRoleAttribute|null|undefined} viceAttribute
     * @memberof EquipInfo
     * @instance
     */
    EquipInfo.prototype.viceAttribute = null;

    /**
     * Creates a new EquipInfo instance using the specified properties.
     * @function create
     * @memberof EquipInfo
     * @static
     * @param {IEquipInfo=} [properties] Properties to set
     * @returns {EquipInfo} EquipInfo instance
     */
    EquipInfo.create = function create(properties) {
        return new EquipInfo(properties);
    };

    /**
     * Encodes the specified EquipInfo message. Does not implicitly {@link EquipInfo.verify|verify} messages.
     * @function encode
     * @memberof EquipInfo
     * @static
     * @param {IEquipInfo} m EquipInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EquipInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.itemInfo != null && Object.hasOwnProperty.call(m, "itemInfo"))
            $root.ItemInfo.encode(m.itemInfo, w.uint32(10).fork()).ldelim();
        if (m.mainAttribute != null && Object.hasOwnProperty.call(m, "mainAttribute"))
            $root.RoleAttribute.encode(m.mainAttribute, w.uint32(18).fork()).ldelim();
        if (m.viceAttribute != null && Object.hasOwnProperty.call(m, "viceAttribute"))
            $root.RoleAttribute.encode(m.viceAttribute, w.uint32(26).fork()).ldelim();
        return w;
    };

    /**
     * Encodes the specified EquipInfo message, length delimited. Does not implicitly {@link EquipInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EquipInfo
     * @static
     * @param {IEquipInfo} message EquipInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EquipInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EquipInfo message from the specified reader or buffer.
     * @function decode
     * @memberof EquipInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {EquipInfo} EquipInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EquipInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.EquipInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.itemInfo = $root.ItemInfo.decode(r, r.uint32());
                break;
            case 2:
                m.mainAttribute = $root.RoleAttribute.decode(r, r.uint32());
                break;
            case 3:
                m.viceAttribute = $root.RoleAttribute.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes an EquipInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EquipInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EquipInfo} EquipInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EquipInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EquipInfo message.
     * @function verify
     * @memberof EquipInfo
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EquipInfo.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.itemInfo != null && m.hasOwnProperty("itemInfo")) {
            {
                var e = $root.ItemInfo.verify(m.itemInfo);
                if (e)
                    return "itemInfo." + e;
            }
        }
        if (m.mainAttribute != null && m.hasOwnProperty("mainAttribute")) {
            {
                var e = $root.RoleAttribute.verify(m.mainAttribute);
                if (e)
                    return "mainAttribute." + e;
            }
        }
        if (m.viceAttribute != null && m.hasOwnProperty("viceAttribute")) {
            {
                var e = $root.RoleAttribute.verify(m.viceAttribute);
                if (e)
                    return "viceAttribute." + e;
            }
        }
        return null;
    };

    return EquipInfo;
})();

export const WearEquips = $root.WearEquips = (() => {

    WearEquips.prototype.classname = 'WearEquips';

    /**
     * Properties of a WearEquips.
     * @exports IWearEquips
     * @interface IWearEquips
     * @property {IItemInfo|null} [arms] WearEquips arms
     * @property {IItemInfo|null} [ring] WearEquips ring
     * @property {IItemInfo|null} [necklace] WearEquips necklace
     * @property {IItemInfo|null} [clothes] WearEquips clothes
     * @property {IItemInfo|null} [belt] WearEquips belt
     * @property {IItemInfo|null} [shoes] WearEquips shoes
     */

    /**
     * Constructs a new WearEquips.
     * @exports WearEquips
     * @classdesc Represents a WearEquips.
     * @implements IWearEquips
     * @constructor
     * @param {IWearEquips=} [p] Properties to set
     */
    function WearEquips(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * WearEquips arms.
     * @member {IItemInfo|null|undefined} arms
     * @memberof WearEquips
     * @instance
     */
    WearEquips.prototype.arms = null;

    /**
     * WearEquips ring.
     * @member {IItemInfo|null|undefined} ring
     * @memberof WearEquips
     * @instance
     */
    WearEquips.prototype.ring = null;

    /**
     * WearEquips necklace.
     * @member {IItemInfo|null|undefined} necklace
     * @memberof WearEquips
     * @instance
     */
    WearEquips.prototype.necklace = null;

    /**
     * WearEquips clothes.
     * @member {IItemInfo|null|undefined} clothes
     * @memberof WearEquips
     * @instance
     */
    WearEquips.prototype.clothes = null;

    /**
     * WearEquips belt.
     * @member {IItemInfo|null|undefined} belt
     * @memberof WearEquips
     * @instance
     */
    WearEquips.prototype.belt = null;

    /**
     * WearEquips shoes.
     * @member {IItemInfo|null|undefined} shoes
     * @memberof WearEquips
     * @instance
     */
    WearEquips.prototype.shoes = null;

    /**
     * Creates a new WearEquips instance using the specified properties.
     * @function create
     * @memberof WearEquips
     * @static
     * @param {IWearEquips=} [properties] Properties to set
     * @returns {WearEquips} WearEquips instance
     */
    WearEquips.create = function create(properties) {
        return new WearEquips(properties);
    };

    /**
     * Encodes the specified WearEquips message. Does not implicitly {@link WearEquips.verify|verify} messages.
     * @function encode
     * @memberof WearEquips
     * @static
     * @param {IWearEquips} m WearEquips message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WearEquips.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.arms != null && Object.hasOwnProperty.call(m, "arms"))
            $root.ItemInfo.encode(m.arms, w.uint32(10).fork()).ldelim();
        if (m.ring != null && Object.hasOwnProperty.call(m, "ring"))
            $root.ItemInfo.encode(m.ring, w.uint32(18).fork()).ldelim();
        if (m.necklace != null && Object.hasOwnProperty.call(m, "necklace"))
            $root.ItemInfo.encode(m.necklace, w.uint32(26).fork()).ldelim();
        if (m.clothes != null && Object.hasOwnProperty.call(m, "clothes"))
            $root.ItemInfo.encode(m.clothes, w.uint32(34).fork()).ldelim();
        if (m.belt != null && Object.hasOwnProperty.call(m, "belt"))
            $root.ItemInfo.encode(m.belt, w.uint32(42).fork()).ldelim();
        if (m.shoes != null && Object.hasOwnProperty.call(m, "shoes"))
            $root.ItemInfo.encode(m.shoes, w.uint32(50).fork()).ldelim();
        return w;
    };

    /**
     * Encodes the specified WearEquips message, length delimited. Does not implicitly {@link WearEquips.verify|verify} messages.
     * @function encodeDelimited
     * @memberof WearEquips
     * @static
     * @param {IWearEquips} message WearEquips message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WearEquips.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WearEquips message from the specified reader or buffer.
     * @function decode
     * @memberof WearEquips
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {WearEquips} WearEquips
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WearEquips.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.WearEquips();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.arms = $root.ItemInfo.decode(r, r.uint32());
                break;
            case 2:
                m.ring = $root.ItemInfo.decode(r, r.uint32());
                break;
            case 3:
                m.necklace = $root.ItemInfo.decode(r, r.uint32());
                break;
            case 4:
                m.clothes = $root.ItemInfo.decode(r, r.uint32());
                break;
            case 5:
                m.belt = $root.ItemInfo.decode(r, r.uint32());
                break;
            case 6:
                m.shoes = $root.ItemInfo.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a WearEquips message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof WearEquips
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {WearEquips} WearEquips
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WearEquips.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WearEquips message.
     * @function verify
     * @memberof WearEquips
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WearEquips.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.arms != null && m.hasOwnProperty("arms")) {
            {
                var e = $root.ItemInfo.verify(m.arms);
                if (e)
                    return "arms." + e;
            }
        }
        if (m.ring != null && m.hasOwnProperty("ring")) {
            {
                var e = $root.ItemInfo.verify(m.ring);
                if (e)
                    return "ring." + e;
            }
        }
        if (m.necklace != null && m.hasOwnProperty("necklace")) {
            {
                var e = $root.ItemInfo.verify(m.necklace);
                if (e)
                    return "necklace." + e;
            }
        }
        if (m.clothes != null && m.hasOwnProperty("clothes")) {
            {
                var e = $root.ItemInfo.verify(m.clothes);
                if (e)
                    return "clothes." + e;
            }
        }
        if (m.belt != null && m.hasOwnProperty("belt")) {
            {
                var e = $root.ItemInfo.verify(m.belt);
                if (e)
                    return "belt." + e;
            }
        }
        if (m.shoes != null && m.hasOwnProperty("shoes")) {
            {
                var e = $root.ItemInfo.verify(m.shoes);
                if (e)
                    return "shoes." + e;
            }
        }
        return null;
    };

    return WearEquips;
})();

export const AttributeCell = $root.AttributeCell = (() => {

    AttributeCell.prototype.classname = 'AttributeCell';

    /**
     * Properties of an AttributeCell.
     * @exports IAttributeCell
     * @interface IAttributeCell
     * @property {number|null} [baseRate] 基础属性万分比
     * @property {number|null} [selfRate] AttributeCell selfRate
     * @property {number|null} [value] AttributeCell value
     */

    /**
     * Constructs a new AttributeCell.
     * @exports AttributeCell
     * @classdesc Represents an AttributeCell.
     * @implements IAttributeCell
     * @constructor
     * @param {IAttributeCell=} [p] Properties to set
     */
    function AttributeCell(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * 基础属性万分比
     * @member {number} baseRate
     * @memberof AttributeCell
     * @instance
     */
    AttributeCell.prototype.baseRate = 0;

    /**
     * AttributeCell selfRate.
     * @member {number} selfRate
     * @memberof AttributeCell
     * @instance
     */
    AttributeCell.prototype.selfRate = 0;

    /**
     * AttributeCell value.
     * @member {number} value
     * @memberof AttributeCell
     * @instance
     */
    AttributeCell.prototype.value = 0;

    /**
     * Creates a new AttributeCell instance using the specified properties.
     * @function create
     * @memberof AttributeCell
     * @static
     * @param {IAttributeCell=} [properties] Properties to set
     * @returns {AttributeCell} AttributeCell instance
     */
    AttributeCell.create = function create(properties) {
        return new AttributeCell(properties);
    };

    /**
     * Encodes the specified AttributeCell message. Does not implicitly {@link AttributeCell.verify|verify} messages.
     * @function encode
     * @memberof AttributeCell
     * @static
     * @param {IAttributeCell} m AttributeCell message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AttributeCell.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.baseRate != null && Object.hasOwnProperty.call(m, "baseRate"))
            w.uint32(8).int32(m.baseRate);
        if (m.selfRate != null && Object.hasOwnProperty.call(m, "selfRate"))
            w.uint32(16).int32(m.selfRate);
        if (m.value != null && Object.hasOwnProperty.call(m, "value"))
            w.uint32(24).int32(m.value);
        return w;
    };

    /**
     * Encodes the specified AttributeCell message, length delimited. Does not implicitly {@link AttributeCell.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AttributeCell
     * @static
     * @param {IAttributeCell} message AttributeCell message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AttributeCell.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AttributeCell message from the specified reader or buffer.
     * @function decode
     * @memberof AttributeCell
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {AttributeCell} AttributeCell
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AttributeCell.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.AttributeCell();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.baseRate = r.int32();
                break;
            case 2:
                m.selfRate = r.int32();
                break;
            case 3:
                m.value = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes an AttributeCell message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AttributeCell
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AttributeCell} AttributeCell
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AttributeCell.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AttributeCell message.
     * @function verify
     * @memberof AttributeCell
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AttributeCell.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.baseRate != null && m.hasOwnProperty("baseRate")) {
            if (!$util.isInteger(m.baseRate))
                return "baseRate: integer expected";
        }
        if (m.selfRate != null && m.hasOwnProperty("selfRate")) {
            if (!$util.isInteger(m.selfRate))
                return "selfRate: integer expected";
        }
        if (m.value != null && m.hasOwnProperty("value")) {
            if (!$util.isInteger(m.value))
                return "value: integer expected";
        }
        return null;
    };

    return AttributeCell;
})();

export const RoleAttribute = $root.RoleAttribute = (() => {

    RoleAttribute.prototype.classname = 'RoleAttribute';

    /**
     * Properties of a RoleAttribute.
     * @exports IRoleAttribute
     * @interface IRoleAttribute
     * @property {IAttributeCell|null} [hp] RoleAttribute hp
     * @property {IAttributeCell|null} [attack] RoleAttribute attack
     * @property {IAttributeCell|null} [defense] RoleAttribute defense
     * @property {IAttributeCell|null} [hit] RoleAttribute hit
     * @property {IAttributeCell|null} [dodge] RoleAttribute dodge
     * @property {IAttributeCell|null} [riot] RoleAttribute riot
     * @property {IAttributeCell|null} [de_riot] RoleAttribute de_riot
     * @property {IAttributeCell|null} [sie] RoleAttribute sie
     * @property {IAttributeCell|null} [de_sie] RoleAttribute de_sie
     * @property {IAttributeCell|null} [hp_recover] RoleAttribute hp_recover
     * @property {IAttributeCell|null} [hurt] RoleAttribute hurt
     * @property {IAttributeCell|null} [de_hurt] RoleAttribute de_hurt
     * @property {DharmakayaType|null} [dharmakayaType] RoleAttribute dharmakayaType
     */

    /**
     * Constructs a new RoleAttribute.
     * @exports RoleAttribute
     * @classdesc Represents a RoleAttribute.
     * @implements IRoleAttribute
     * @constructor
     * @param {IRoleAttribute=} [p] Properties to set
     */
    function RoleAttribute(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RoleAttribute hp.
     * @member {IAttributeCell|null|undefined} hp
     * @memberof RoleAttribute
     * @instance
     */
    RoleAttribute.prototype.hp = null;

    /**
     * RoleAttribute attack.
     * @member {IAttributeCell|null|undefined} attack
     * @memberof RoleAttribute
     * @instance
     */
    RoleAttribute.prototype.attack = null;

    /**
     * RoleAttribute defense.
     * @member {IAttributeCell|null|undefined} defense
     * @memberof RoleAttribute
     * @instance
     */
    RoleAttribute.prototype.defense = null;

    /**
     * RoleAttribute hit.
     * @member {IAttributeCell|null|undefined} hit
     * @memberof RoleAttribute
     * @instance
     */
    RoleAttribute.prototype.hit = null;

    /**
     * RoleAttribute dodge.
     * @member {IAttributeCell|null|undefined} dodge
     * @memberof RoleAttribute
     * @instance
     */
    RoleAttribute.prototype.dodge = null;

    /**
     * RoleAttribute riot.
     * @member {IAttributeCell|null|undefined} riot
     * @memberof RoleAttribute
     * @instance
     */
    RoleAttribute.prototype.riot = null;

    /**
     * RoleAttribute de_riot.
     * @member {IAttributeCell|null|undefined} de_riot
     * @memberof RoleAttribute
     * @instance
     */
    RoleAttribute.prototype.de_riot = null;

    /**
     * RoleAttribute sie.
     * @member {IAttributeCell|null|undefined} sie
     * @memberof RoleAttribute
     * @instance
     */
    RoleAttribute.prototype.sie = null;

    /**
     * RoleAttribute de_sie.
     * @member {IAttributeCell|null|undefined} de_sie
     * @memberof RoleAttribute
     * @instance
     */
    RoleAttribute.prototype.de_sie = null;

    /**
     * RoleAttribute hp_recover.
     * @member {IAttributeCell|null|undefined} hp_recover
     * @memberof RoleAttribute
     * @instance
     */
    RoleAttribute.prototype.hp_recover = null;

    /**
     * RoleAttribute hurt.
     * @member {IAttributeCell|null|undefined} hurt
     * @memberof RoleAttribute
     * @instance
     */
    RoleAttribute.prototype.hurt = null;

    /**
     * RoleAttribute de_hurt.
     * @member {IAttributeCell|null|undefined} de_hurt
     * @memberof RoleAttribute
     * @instance
     */
    RoleAttribute.prototype.de_hurt = null;

    /**
     * RoleAttribute dharmakayaType.
     * @member {DharmakayaType} dharmakayaType
     * @memberof RoleAttribute
     * @instance
     */
    RoleAttribute.prototype.dharmakayaType = 0;

    /**
     * Creates a new RoleAttribute instance using the specified properties.
     * @function create
     * @memberof RoleAttribute
     * @static
     * @param {IRoleAttribute=} [properties] Properties to set
     * @returns {RoleAttribute} RoleAttribute instance
     */
    RoleAttribute.create = function create(properties) {
        return new RoleAttribute(properties);
    };

    /**
     * Encodes the specified RoleAttribute message. Does not implicitly {@link RoleAttribute.verify|verify} messages.
     * @function encode
     * @memberof RoleAttribute
     * @static
     * @param {IRoleAttribute} m RoleAttribute message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoleAttribute.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.hp != null && Object.hasOwnProperty.call(m, "hp"))
            $root.AttributeCell.encode(m.hp, w.uint32(10).fork()).ldelim();
        if (m.attack != null && Object.hasOwnProperty.call(m, "attack"))
            $root.AttributeCell.encode(m.attack, w.uint32(18).fork()).ldelim();
        if (m.defense != null && Object.hasOwnProperty.call(m, "defense"))
            $root.AttributeCell.encode(m.defense, w.uint32(26).fork()).ldelim();
        if (m.hit != null && Object.hasOwnProperty.call(m, "hit"))
            $root.AttributeCell.encode(m.hit, w.uint32(34).fork()).ldelim();
        if (m.dodge != null && Object.hasOwnProperty.call(m, "dodge"))
            $root.AttributeCell.encode(m.dodge, w.uint32(42).fork()).ldelim();
        if (m.riot != null && Object.hasOwnProperty.call(m, "riot"))
            $root.AttributeCell.encode(m.riot, w.uint32(50).fork()).ldelim();
        if (m.de_riot != null && Object.hasOwnProperty.call(m, "de_riot"))
            $root.AttributeCell.encode(m.de_riot, w.uint32(58).fork()).ldelim();
        if (m.sie != null && Object.hasOwnProperty.call(m, "sie"))
            $root.AttributeCell.encode(m.sie, w.uint32(66).fork()).ldelim();
        if (m.de_sie != null && Object.hasOwnProperty.call(m, "de_sie"))
            $root.AttributeCell.encode(m.de_sie, w.uint32(74).fork()).ldelim();
        if (m.hp_recover != null && Object.hasOwnProperty.call(m, "hp_recover"))
            $root.AttributeCell.encode(m.hp_recover, w.uint32(82).fork()).ldelim();
        if (m.hurt != null && Object.hasOwnProperty.call(m, "hurt"))
            $root.AttributeCell.encode(m.hurt, w.uint32(90).fork()).ldelim();
        if (m.de_hurt != null && Object.hasOwnProperty.call(m, "de_hurt"))
            $root.AttributeCell.encode(m.de_hurt, w.uint32(98).fork()).ldelim();
        if (m.dharmakayaType != null && Object.hasOwnProperty.call(m, "dharmakayaType"))
            w.uint32(104).int32(m.dharmakayaType);
        return w;
    };

    /**
     * Encodes the specified RoleAttribute message, length delimited. Does not implicitly {@link RoleAttribute.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RoleAttribute
     * @static
     * @param {IRoleAttribute} message RoleAttribute message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoleAttribute.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RoleAttribute message from the specified reader or buffer.
     * @function decode
     * @memberof RoleAttribute
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RoleAttribute} RoleAttribute
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoleAttribute.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RoleAttribute();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.hp = $root.AttributeCell.decode(r, r.uint32());
                break;
            case 2:
                m.attack = $root.AttributeCell.decode(r, r.uint32());
                break;
            case 3:
                m.defense = $root.AttributeCell.decode(r, r.uint32());
                break;
            case 4:
                m.hit = $root.AttributeCell.decode(r, r.uint32());
                break;
            case 5:
                m.dodge = $root.AttributeCell.decode(r, r.uint32());
                break;
            case 6:
                m.riot = $root.AttributeCell.decode(r, r.uint32());
                break;
            case 7:
                m.de_riot = $root.AttributeCell.decode(r, r.uint32());
                break;
            case 8:
                m.sie = $root.AttributeCell.decode(r, r.uint32());
                break;
            case 9:
                m.de_sie = $root.AttributeCell.decode(r, r.uint32());
                break;
            case 10:
                m.hp_recover = $root.AttributeCell.decode(r, r.uint32());
                break;
            case 11:
                m.hurt = $root.AttributeCell.decode(r, r.uint32());
                break;
            case 12:
                m.de_hurt = $root.AttributeCell.decode(r, r.uint32());
                break;
            case 13:
                m.dharmakayaType = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a RoleAttribute message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RoleAttribute
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RoleAttribute} RoleAttribute
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoleAttribute.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RoleAttribute message.
     * @function verify
     * @memberof RoleAttribute
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RoleAttribute.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.hp != null && m.hasOwnProperty("hp")) {
            {
                var e = $root.AttributeCell.verify(m.hp);
                if (e)
                    return "hp." + e;
            }
        }
        if (m.attack != null && m.hasOwnProperty("attack")) {
            {
                var e = $root.AttributeCell.verify(m.attack);
                if (e)
                    return "attack." + e;
            }
        }
        if (m.defense != null && m.hasOwnProperty("defense")) {
            {
                var e = $root.AttributeCell.verify(m.defense);
                if (e)
                    return "defense." + e;
            }
        }
        if (m.hit != null && m.hasOwnProperty("hit")) {
            {
                var e = $root.AttributeCell.verify(m.hit);
                if (e)
                    return "hit." + e;
            }
        }
        if (m.dodge != null && m.hasOwnProperty("dodge")) {
            {
                var e = $root.AttributeCell.verify(m.dodge);
                if (e)
                    return "dodge." + e;
            }
        }
        if (m.riot != null && m.hasOwnProperty("riot")) {
            {
                var e = $root.AttributeCell.verify(m.riot);
                if (e)
                    return "riot." + e;
            }
        }
        if (m.de_riot != null && m.hasOwnProperty("de_riot")) {
            {
                var e = $root.AttributeCell.verify(m.de_riot);
                if (e)
                    return "de_riot." + e;
            }
        }
        if (m.sie != null && m.hasOwnProperty("sie")) {
            {
                var e = $root.AttributeCell.verify(m.sie);
                if (e)
                    return "sie." + e;
            }
        }
        if (m.de_sie != null && m.hasOwnProperty("de_sie")) {
            {
                var e = $root.AttributeCell.verify(m.de_sie);
                if (e)
                    return "de_sie." + e;
            }
        }
        if (m.hp_recover != null && m.hasOwnProperty("hp_recover")) {
            {
                var e = $root.AttributeCell.verify(m.hp_recover);
                if (e)
                    return "hp_recover." + e;
            }
        }
        if (m.hurt != null && m.hasOwnProperty("hurt")) {
            {
                var e = $root.AttributeCell.verify(m.hurt);
                if (e)
                    return "hurt." + e;
            }
        }
        if (m.de_hurt != null && m.hasOwnProperty("de_hurt")) {
            {
                var e = $root.AttributeCell.verify(m.de_hurt);
                if (e)
                    return "de_hurt." + e;
            }
        }
        if (m.dharmakayaType != null && m.hasOwnProperty("dharmakayaType")) {
            switch (m.dharmakayaType) {
            default:
                return "dharmakayaType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            }
        }
        return null;
    };

    return RoleAttribute;
})();

export const BagItemRequest = $root.BagItemRequest = (() => {

    BagItemRequest.prototype.classname = 'BagItemRequest';

    /**
     * Properties of a BagItemRequest.
     * @exports IBagItemRequest
     * @interface IBagItemRequest
     * @property {number|null} [itemType] BagItemRequest itemType
     * @property {number|null} [equipType] BagItemRequest equipType
     * @property {number|null} [equipPosition] BagItemRequest equipPosition
     */

    /**
     * Constructs a new BagItemRequest.
     * @exports BagItemRequest
     * @classdesc Represents a BagItemRequest.
     * @implements IBagItemRequest
     * @constructor
     * @param {IBagItemRequest=} [p] Properties to set
     */
    function BagItemRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BagItemRequest itemType.
     * @member {number} itemType
     * @memberof BagItemRequest
     * @instance
     */
    BagItemRequest.prototype.itemType = 0;

    /**
     * BagItemRequest equipType.
     * @member {number} equipType
     * @memberof BagItemRequest
     * @instance
     */
    BagItemRequest.prototype.equipType = 0;

    /**
     * BagItemRequest equipPosition.
     * @member {number} equipPosition
     * @memberof BagItemRequest
     * @instance
     */
    BagItemRequest.prototype.equipPosition = 0;

    /**
     * Creates a new BagItemRequest instance using the specified properties.
     * @function create
     * @memberof BagItemRequest
     * @static
     * @param {IBagItemRequest=} [properties] Properties to set
     * @returns {BagItemRequest} BagItemRequest instance
     */
    BagItemRequest.create = function create(properties) {
        return new BagItemRequest(properties);
    };

    /**
     * Encodes the specified BagItemRequest message. Does not implicitly {@link BagItemRequest.verify|verify} messages.
     * @function encode
     * @memberof BagItemRequest
     * @static
     * @param {IBagItemRequest} m BagItemRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BagItemRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.itemType != null && Object.hasOwnProperty.call(m, "itemType"))
            w.uint32(8).int32(m.itemType);
        if (m.equipType != null && Object.hasOwnProperty.call(m, "equipType"))
            w.uint32(16).int32(m.equipType);
        if (m.equipPosition != null && Object.hasOwnProperty.call(m, "equipPosition"))
            w.uint32(24).int32(m.equipPosition);
        return w;
    };

    /**
     * Encodes the specified BagItemRequest message, length delimited. Does not implicitly {@link BagItemRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BagItemRequest
     * @static
     * @param {IBagItemRequest} message BagItemRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BagItemRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BagItemRequest message from the specified reader or buffer.
     * @function decode
     * @memberof BagItemRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BagItemRequest} BagItemRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BagItemRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BagItemRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.itemType = r.int32();
                break;
            case 2:
                m.equipType = r.int32();
                break;
            case 3:
                m.equipPosition = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a BagItemRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BagItemRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BagItemRequest} BagItemRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BagItemRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BagItemRequest message.
     * @function verify
     * @memberof BagItemRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BagItemRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.itemType != null && m.hasOwnProperty("itemType")) {
            if (!$util.isInteger(m.itemType))
                return "itemType: integer expected";
        }
        if (m.equipType != null && m.hasOwnProperty("equipType")) {
            if (!$util.isInteger(m.equipType))
                return "equipType: integer expected";
        }
        if (m.equipPosition != null && m.hasOwnProperty("equipPosition")) {
            if (!$util.isInteger(m.equipPosition))
                return "equipPosition: integer expected";
        }
        return null;
    };

    return BagItemRequest;
})();

export const BagItemResponse = $root.BagItemResponse = (() => {

    BagItemResponse.prototype.classname = 'BagItemResponse';

    /**
     * Properties of a BagItemResponse.
     * @exports IBagItemResponse
     * @interface IBagItemResponse
     * @property {number|null} [itemType] BagItemResponse itemType
     * @property {number|null} [equipType] BagItemResponse equipType
     * @property {number|null} [equipPosition] BagItemResponse equipPosition
     * @property {Array.<IItemInfo>|null} [itemList] BagItemResponse itemList
     * @property {number|null} [resolve] BagItemResponse resolve
     */

    /**
     * Constructs a new BagItemResponse.
     * @exports BagItemResponse
     * @classdesc Represents a BagItemResponse.
     * @implements IBagItemResponse
     * @constructor
     * @param {IBagItemResponse=} [p] Properties to set
     */
    function BagItemResponse(p) {
        this.itemList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BagItemResponse itemType.
     * @member {number} itemType
     * @memberof BagItemResponse
     * @instance
     */
    BagItemResponse.prototype.itemType = 0;

    /**
     * BagItemResponse equipType.
     * @member {number} equipType
     * @memberof BagItemResponse
     * @instance
     */
    BagItemResponse.prototype.equipType = 0;

    /**
     * BagItemResponse equipPosition.
     * @member {number} equipPosition
     * @memberof BagItemResponse
     * @instance
     */
    BagItemResponse.prototype.equipPosition = 0;

    /**
     * BagItemResponse itemList.
     * @member {Array.<IItemInfo>} itemList
     * @memberof BagItemResponse
     * @instance
     */
    BagItemResponse.prototype.itemList = $util.emptyArray;

    /**
     * BagItemResponse resolve.
     * @member {number} resolve
     * @memberof BagItemResponse
     * @instance
     */
    BagItemResponse.prototype.resolve = 0;

    /**
     * Creates a new BagItemResponse instance using the specified properties.
     * @function create
     * @memberof BagItemResponse
     * @static
     * @param {IBagItemResponse=} [properties] Properties to set
     * @returns {BagItemResponse} BagItemResponse instance
     */
    BagItemResponse.create = function create(properties) {
        return new BagItemResponse(properties);
    };

    /**
     * Encodes the specified BagItemResponse message. Does not implicitly {@link BagItemResponse.verify|verify} messages.
     * @function encode
     * @memberof BagItemResponse
     * @static
     * @param {IBagItemResponse} m BagItemResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BagItemResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.itemType != null && Object.hasOwnProperty.call(m, "itemType"))
            w.uint32(8).int32(m.itemType);
        if (m.equipType != null && Object.hasOwnProperty.call(m, "equipType"))
            w.uint32(16).int32(m.equipType);
        if (m.equipPosition != null && Object.hasOwnProperty.call(m, "equipPosition"))
            w.uint32(24).int32(m.equipPosition);
        if (m.itemList != null && m.itemList.length) {
            for (var i = 0; i < m.itemList.length; ++i)
                $root.ItemInfo.encode(m.itemList[i], w.uint32(34).fork()).ldelim();
        }
        if (m.resolve != null && Object.hasOwnProperty.call(m, "resolve"))
            w.uint32(40).int32(m.resolve);
        return w;
    };

    /**
     * Encodes the specified BagItemResponse message, length delimited. Does not implicitly {@link BagItemResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BagItemResponse
     * @static
     * @param {IBagItemResponse} message BagItemResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BagItemResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BagItemResponse message from the specified reader or buffer.
     * @function decode
     * @memberof BagItemResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BagItemResponse} BagItemResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BagItemResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BagItemResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.itemType = r.int32();
                break;
            case 2:
                m.equipType = r.int32();
                break;
            case 3:
                m.equipPosition = r.int32();
                break;
            case 4:
                if (!(m.itemList && m.itemList.length))
                    m.itemList = [];
                m.itemList.push($root.ItemInfo.decode(r, r.uint32()));
                break;
            case 5:
                m.resolve = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a BagItemResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BagItemResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BagItemResponse} BagItemResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BagItemResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BagItemResponse message.
     * @function verify
     * @memberof BagItemResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BagItemResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.itemType != null && m.hasOwnProperty("itemType")) {
            if (!$util.isInteger(m.itemType))
                return "itemType: integer expected";
        }
        if (m.equipType != null && m.hasOwnProperty("equipType")) {
            if (!$util.isInteger(m.equipType))
                return "equipType: integer expected";
        }
        if (m.equipPosition != null && m.hasOwnProperty("equipPosition")) {
            if (!$util.isInteger(m.equipPosition))
                return "equipPosition: integer expected";
        }
        if (m.itemList != null && m.hasOwnProperty("itemList")) {
            if (!Array.isArray(m.itemList))
                return "itemList: array expected";
            for (var i = 0; i < m.itemList.length; ++i) {
                {
                    var e = $root.ItemInfo.verify(m.itemList[i]);
                    if (e)
                        return "itemList." + e;
                }
            }
        }
        if (m.resolve != null && m.hasOwnProperty("resolve")) {
            if (!$util.isInteger(m.resolve))
                return "resolve: integer expected";
        }
        return null;
    };

    return BagItemResponse;
})();

export const RoleEquipRequest = $root.RoleEquipRequest = (() => {

    RoleEquipRequest.prototype.classname = 'RoleEquipRequest';

    /**
     * Properties of a RoleEquipRequest.
     * @exports IRoleEquipRequest
     * @interface IRoleEquipRequest
     */

    /**
     * Constructs a new RoleEquipRequest.
     * @exports RoleEquipRequest
     * @classdesc Represents a RoleEquipRequest.
     * @implements IRoleEquipRequest
     * @constructor
     * @param {IRoleEquipRequest=} [p] Properties to set
     */
    function RoleEquipRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new RoleEquipRequest instance using the specified properties.
     * @function create
     * @memberof RoleEquipRequest
     * @static
     * @param {IRoleEquipRequest=} [properties] Properties to set
     * @returns {RoleEquipRequest} RoleEquipRequest instance
     */
    RoleEquipRequest.create = function create(properties) {
        return new RoleEquipRequest(properties);
    };

    /**
     * Encodes the specified RoleEquipRequest message. Does not implicitly {@link RoleEquipRequest.verify|verify} messages.
     * @function encode
     * @memberof RoleEquipRequest
     * @static
     * @param {IRoleEquipRequest} m RoleEquipRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoleEquipRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Encodes the specified RoleEquipRequest message, length delimited. Does not implicitly {@link RoleEquipRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RoleEquipRequest
     * @static
     * @param {IRoleEquipRequest} message RoleEquipRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoleEquipRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RoleEquipRequest message from the specified reader or buffer.
     * @function decode
     * @memberof RoleEquipRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RoleEquipRequest} RoleEquipRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoleEquipRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RoleEquipRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a RoleEquipRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RoleEquipRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RoleEquipRequest} RoleEquipRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoleEquipRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RoleEquipRequest message.
     * @function verify
     * @memberof RoleEquipRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RoleEquipRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        return null;
    };

    return RoleEquipRequest;
})();

export const RoleEquipResponse = $root.RoleEquipResponse = (() => {

    RoleEquipResponse.prototype.classname = 'RoleEquipResponse';

    /**
     * Properties of a RoleEquipResponse.
     * @exports IRoleEquipResponse
     * @interface IRoleEquipResponse
     * @property {IWearEquips|null} [wearEquips] RoleEquipResponse wearEquips
     * @property {IWearEquips|null} [wearThrones] RoleEquipResponse wearThrones
     * @property {IRoleAttribute|null} [roleAttribute] RoleEquipResponse roleAttribute
     */

    /**
     * Constructs a new RoleEquipResponse.
     * @exports RoleEquipResponse
     * @classdesc Represents a RoleEquipResponse.
     * @implements IRoleEquipResponse
     * @constructor
     * @param {IRoleEquipResponse=} [p] Properties to set
     */
    function RoleEquipResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RoleEquipResponse wearEquips.
     * @member {IWearEquips|null|undefined} wearEquips
     * @memberof RoleEquipResponse
     * @instance
     */
    RoleEquipResponse.prototype.wearEquips = null;

    /**
     * RoleEquipResponse wearThrones.
     * @member {IWearEquips|null|undefined} wearThrones
     * @memberof RoleEquipResponse
     * @instance
     */
    RoleEquipResponse.prototype.wearThrones = null;

    /**
     * RoleEquipResponse roleAttribute.
     * @member {IRoleAttribute|null|undefined} roleAttribute
     * @memberof RoleEquipResponse
     * @instance
     */
    RoleEquipResponse.prototype.roleAttribute = null;

    /**
     * Creates a new RoleEquipResponse instance using the specified properties.
     * @function create
     * @memberof RoleEquipResponse
     * @static
     * @param {IRoleEquipResponse=} [properties] Properties to set
     * @returns {RoleEquipResponse} RoleEquipResponse instance
     */
    RoleEquipResponse.create = function create(properties) {
        return new RoleEquipResponse(properties);
    };

    /**
     * Encodes the specified RoleEquipResponse message. Does not implicitly {@link RoleEquipResponse.verify|verify} messages.
     * @function encode
     * @memberof RoleEquipResponse
     * @static
     * @param {IRoleEquipResponse} m RoleEquipResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoleEquipResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.wearEquips != null && Object.hasOwnProperty.call(m, "wearEquips"))
            $root.WearEquips.encode(m.wearEquips, w.uint32(10).fork()).ldelim();
        if (m.wearThrones != null && Object.hasOwnProperty.call(m, "wearThrones"))
            $root.WearEquips.encode(m.wearThrones, w.uint32(18).fork()).ldelim();
        if (m.roleAttribute != null && Object.hasOwnProperty.call(m, "roleAttribute"))
            $root.RoleAttribute.encode(m.roleAttribute, w.uint32(26).fork()).ldelim();
        return w;
    };

    /**
     * Encodes the specified RoleEquipResponse message, length delimited. Does not implicitly {@link RoleEquipResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RoleEquipResponse
     * @static
     * @param {IRoleEquipResponse} message RoleEquipResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoleEquipResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RoleEquipResponse message from the specified reader or buffer.
     * @function decode
     * @memberof RoleEquipResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RoleEquipResponse} RoleEquipResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoleEquipResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RoleEquipResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.wearEquips = $root.WearEquips.decode(r, r.uint32());
                break;
            case 2:
                m.wearThrones = $root.WearEquips.decode(r, r.uint32());
                break;
            case 3:
                m.roleAttribute = $root.RoleAttribute.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a RoleEquipResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RoleEquipResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RoleEquipResponse} RoleEquipResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoleEquipResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RoleEquipResponse message.
     * @function verify
     * @memberof RoleEquipResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RoleEquipResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.wearEquips != null && m.hasOwnProperty("wearEquips")) {
            {
                var e = $root.WearEquips.verify(m.wearEquips);
                if (e)
                    return "wearEquips." + e;
            }
        }
        if (m.wearThrones != null && m.hasOwnProperty("wearThrones")) {
            {
                var e = $root.WearEquips.verify(m.wearThrones);
                if (e)
                    return "wearThrones." + e;
            }
        }
        if (m.roleAttribute != null && m.hasOwnProperty("roleAttribute")) {
            {
                var e = $root.RoleAttribute.verify(m.roleAttribute);
                if (e)
                    return "roleAttribute." + e;
            }
        }
        return null;
    };

    return RoleEquipResponse;
})();

export const EquipInfoRequest = $root.EquipInfoRequest = (() => {

    EquipInfoRequest.prototype.classname = 'EquipInfoRequest';

    /**
     * Properties of an EquipInfoRequest.
     * @exports IEquipInfoRequest
     * @interface IEquipInfoRequest
     * @property {string|null} [itemId] EquipInfoRequest itemId
     * @property {string|null} [uuid] EquipInfoRequest uuid
     * @property {number|null} [bagType] EquipInfoRequest bagType
     */

    /**
     * Constructs a new EquipInfoRequest.
     * @exports EquipInfoRequest
     * @classdesc Represents an EquipInfoRequest.
     * @implements IEquipInfoRequest
     * @constructor
     * @param {IEquipInfoRequest=} [p] Properties to set
     */
    function EquipInfoRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * EquipInfoRequest itemId.
     * @member {string} itemId
     * @memberof EquipInfoRequest
     * @instance
     */
    EquipInfoRequest.prototype.itemId = "";

    /**
     * EquipInfoRequest uuid.
     * @member {string} uuid
     * @memberof EquipInfoRequest
     * @instance
     */
    EquipInfoRequest.prototype.uuid = "";

    /**
     * EquipInfoRequest bagType.
     * @member {number} bagType
     * @memberof EquipInfoRequest
     * @instance
     */
    EquipInfoRequest.prototype.bagType = 0;

    /**
     * Creates a new EquipInfoRequest instance using the specified properties.
     * @function create
     * @memberof EquipInfoRequest
     * @static
     * @param {IEquipInfoRequest=} [properties] Properties to set
     * @returns {EquipInfoRequest} EquipInfoRequest instance
     */
    EquipInfoRequest.create = function create(properties) {
        return new EquipInfoRequest(properties);
    };

    /**
     * Encodes the specified EquipInfoRequest message. Does not implicitly {@link EquipInfoRequest.verify|verify} messages.
     * @function encode
     * @memberof EquipInfoRequest
     * @static
     * @param {IEquipInfoRequest} m EquipInfoRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EquipInfoRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.itemId != null && Object.hasOwnProperty.call(m, "itemId"))
            w.uint32(10).string(m.itemId);
        if (m.uuid != null && Object.hasOwnProperty.call(m, "uuid"))
            w.uint32(18).string(m.uuid);
        if (m.bagType != null && Object.hasOwnProperty.call(m, "bagType"))
            w.uint32(24).int32(m.bagType);
        return w;
    };

    /**
     * Encodes the specified EquipInfoRequest message, length delimited. Does not implicitly {@link EquipInfoRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EquipInfoRequest
     * @static
     * @param {IEquipInfoRequest} message EquipInfoRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EquipInfoRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EquipInfoRequest message from the specified reader or buffer.
     * @function decode
     * @memberof EquipInfoRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {EquipInfoRequest} EquipInfoRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EquipInfoRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.EquipInfoRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.itemId = r.string();
                break;
            case 2:
                m.uuid = r.string();
                break;
            case 3:
                m.bagType = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes an EquipInfoRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EquipInfoRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EquipInfoRequest} EquipInfoRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EquipInfoRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EquipInfoRequest message.
     * @function verify
     * @memberof EquipInfoRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EquipInfoRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.itemId != null && m.hasOwnProperty("itemId")) {
            if (!$util.isString(m.itemId))
                return "itemId: string expected";
        }
        if (m.uuid != null && m.hasOwnProperty("uuid")) {
            if (!$util.isString(m.uuid))
                return "uuid: string expected";
        }
        if (m.bagType != null && m.hasOwnProperty("bagType")) {
            if (!$util.isInteger(m.bagType))
                return "bagType: integer expected";
        }
        return null;
    };

    return EquipInfoRequest;
})();

export const EquipInfoResponse = $root.EquipInfoResponse = (() => {

    EquipInfoResponse.prototype.classname = 'EquipInfoResponse';

    /**
     * Properties of an EquipInfoResponse.
     * @exports IEquipInfoResponse
     * @interface IEquipInfoResponse
     * @property {IEquipInfo|null} [equipInfo] EquipInfoResponse equipInfo
     */

    /**
     * Constructs a new EquipInfoResponse.
     * @exports EquipInfoResponse
     * @classdesc Represents an EquipInfoResponse.
     * @implements IEquipInfoResponse
     * @constructor
     * @param {IEquipInfoResponse=} [p] Properties to set
     */
    function EquipInfoResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * EquipInfoResponse equipInfo.
     * @member {IEquipInfo|null|undefined} equipInfo
     * @memberof EquipInfoResponse
     * @instance
     */
    EquipInfoResponse.prototype.equipInfo = null;

    /**
     * Creates a new EquipInfoResponse instance using the specified properties.
     * @function create
     * @memberof EquipInfoResponse
     * @static
     * @param {IEquipInfoResponse=} [properties] Properties to set
     * @returns {EquipInfoResponse} EquipInfoResponse instance
     */
    EquipInfoResponse.create = function create(properties) {
        return new EquipInfoResponse(properties);
    };

    /**
     * Encodes the specified EquipInfoResponse message. Does not implicitly {@link EquipInfoResponse.verify|verify} messages.
     * @function encode
     * @memberof EquipInfoResponse
     * @static
     * @param {IEquipInfoResponse} m EquipInfoResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EquipInfoResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.equipInfo != null && Object.hasOwnProperty.call(m, "equipInfo"))
            $root.EquipInfo.encode(m.equipInfo, w.uint32(10).fork()).ldelim();
        return w;
    };

    /**
     * Encodes the specified EquipInfoResponse message, length delimited. Does not implicitly {@link EquipInfoResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EquipInfoResponse
     * @static
     * @param {IEquipInfoResponse} message EquipInfoResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EquipInfoResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EquipInfoResponse message from the specified reader or buffer.
     * @function decode
     * @memberof EquipInfoResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {EquipInfoResponse} EquipInfoResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EquipInfoResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.EquipInfoResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.equipInfo = $root.EquipInfo.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes an EquipInfoResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EquipInfoResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EquipInfoResponse} EquipInfoResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EquipInfoResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EquipInfoResponse message.
     * @function verify
     * @memberof EquipInfoResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EquipInfoResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.equipInfo != null && m.hasOwnProperty("equipInfo")) {
            {
                var e = $root.EquipInfo.verify(m.equipInfo);
                if (e)
                    return "equipInfo." + e;
            }
        }
        return null;
    };

    return EquipInfoResponse;
})();

export const WearEquipRequest = $root.WearEquipRequest = (() => {

    WearEquipRequest.prototype.classname = 'WearEquipRequest';

    /**
     * Properties of a WearEquipRequest.
     * @exports IWearEquipRequest
     * @interface IWearEquipRequest
     * @property {string|null} [removeItemId] WearEquipRequest removeItemId
     * @property {string|null} [wearItemId] WearEquipRequest wearItemId
     * @property {string|null} [wearUuid] WearEquipRequest wearUuid
     * @property {number|null} [equipType] WearEquipRequest equipType
     */

    /**
     * Constructs a new WearEquipRequest.
     * @exports WearEquipRequest
     * @classdesc Represents a WearEquipRequest.
     * @implements IWearEquipRequest
     * @constructor
     * @param {IWearEquipRequest=} [p] Properties to set
     */
    function WearEquipRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * WearEquipRequest removeItemId.
     * @member {string} removeItemId
     * @memberof WearEquipRequest
     * @instance
     */
    WearEquipRequest.prototype.removeItemId = "";

    /**
     * WearEquipRequest wearItemId.
     * @member {string} wearItemId
     * @memberof WearEquipRequest
     * @instance
     */
    WearEquipRequest.prototype.wearItemId = "";

    /**
     * WearEquipRequest wearUuid.
     * @member {string} wearUuid
     * @memberof WearEquipRequest
     * @instance
     */
    WearEquipRequest.prototype.wearUuid = "";

    /**
     * WearEquipRequest equipType.
     * @member {number} equipType
     * @memberof WearEquipRequest
     * @instance
     */
    WearEquipRequest.prototype.equipType = 0;

    /**
     * Creates a new WearEquipRequest instance using the specified properties.
     * @function create
     * @memberof WearEquipRequest
     * @static
     * @param {IWearEquipRequest=} [properties] Properties to set
     * @returns {WearEquipRequest} WearEquipRequest instance
     */
    WearEquipRequest.create = function create(properties) {
        return new WearEquipRequest(properties);
    };

    /**
     * Encodes the specified WearEquipRequest message. Does not implicitly {@link WearEquipRequest.verify|verify} messages.
     * @function encode
     * @memberof WearEquipRequest
     * @static
     * @param {IWearEquipRequest} m WearEquipRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WearEquipRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.removeItemId != null && Object.hasOwnProperty.call(m, "removeItemId"))
            w.uint32(10).string(m.removeItemId);
        if (m.wearItemId != null && Object.hasOwnProperty.call(m, "wearItemId"))
            w.uint32(18).string(m.wearItemId);
        if (m.wearUuid != null && Object.hasOwnProperty.call(m, "wearUuid"))
            w.uint32(26).string(m.wearUuid);
        if (m.equipType != null && Object.hasOwnProperty.call(m, "equipType"))
            w.uint32(32).int32(m.equipType);
        return w;
    };

    /**
     * Encodes the specified WearEquipRequest message, length delimited. Does not implicitly {@link WearEquipRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof WearEquipRequest
     * @static
     * @param {IWearEquipRequest} message WearEquipRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WearEquipRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WearEquipRequest message from the specified reader or buffer.
     * @function decode
     * @memberof WearEquipRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {WearEquipRequest} WearEquipRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WearEquipRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.WearEquipRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.removeItemId = r.string();
                break;
            case 2:
                m.wearItemId = r.string();
                break;
            case 3:
                m.wearUuid = r.string();
                break;
            case 4:
                m.equipType = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a WearEquipRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof WearEquipRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {WearEquipRequest} WearEquipRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WearEquipRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WearEquipRequest message.
     * @function verify
     * @memberof WearEquipRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WearEquipRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.removeItemId != null && m.hasOwnProperty("removeItemId")) {
            if (!$util.isString(m.removeItemId))
                return "removeItemId: string expected";
        }
        if (m.wearItemId != null && m.hasOwnProperty("wearItemId")) {
            if (!$util.isString(m.wearItemId))
                return "wearItemId: string expected";
        }
        if (m.wearUuid != null && m.hasOwnProperty("wearUuid")) {
            if (!$util.isString(m.wearUuid))
                return "wearUuid: string expected";
        }
        if (m.equipType != null && m.hasOwnProperty("equipType")) {
            if (!$util.isInteger(m.equipType))
                return "equipType: integer expected";
        }
        return null;
    };

    return WearEquipRequest;
})();

export const WearEquipResponse = $root.WearEquipResponse = (() => {

    WearEquipResponse.prototype.classname = 'WearEquipResponse';

    /**
     * Properties of a WearEquipResponse.
     * @exports IWearEquipResponse
     * @interface IWearEquipResponse
     * @property {boolean|null} [isSuccess] WearEquipResponse isSuccess
     * @property {IItemInfo|null} [removeItemInfo] WearEquipResponse removeItemInfo
     * @property {IItemInfo|null} [wearItemInfo] 穿上装备信息
     */

    /**
     * Constructs a new WearEquipResponse.
     * @exports WearEquipResponse
     * @classdesc Represents a WearEquipResponse.
     * @implements IWearEquipResponse
     * @constructor
     * @param {IWearEquipResponse=} [p] Properties to set
     */
    function WearEquipResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * WearEquipResponse isSuccess.
     * @member {boolean} isSuccess
     * @memberof WearEquipResponse
     * @instance
     */
    WearEquipResponse.prototype.isSuccess = false;

    /**
     * WearEquipResponse removeItemInfo.
     * @member {IItemInfo|null|undefined} removeItemInfo
     * @memberof WearEquipResponse
     * @instance
     */
    WearEquipResponse.prototype.removeItemInfo = null;

    /**
     * 穿上装备信息
     * @member {IItemInfo|null|undefined} wearItemInfo
     * @memberof WearEquipResponse
     * @instance
     */
    WearEquipResponse.prototype.wearItemInfo = null;

    /**
     * Creates a new WearEquipResponse instance using the specified properties.
     * @function create
     * @memberof WearEquipResponse
     * @static
     * @param {IWearEquipResponse=} [properties] Properties to set
     * @returns {WearEquipResponse} WearEquipResponse instance
     */
    WearEquipResponse.create = function create(properties) {
        return new WearEquipResponse(properties);
    };

    /**
     * Encodes the specified WearEquipResponse message. Does not implicitly {@link WearEquipResponse.verify|verify} messages.
     * @function encode
     * @memberof WearEquipResponse
     * @static
     * @param {IWearEquipResponse} m WearEquipResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WearEquipResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.isSuccess != null && Object.hasOwnProperty.call(m, "isSuccess"))
            w.uint32(8).bool(m.isSuccess);
        if (m.removeItemInfo != null && Object.hasOwnProperty.call(m, "removeItemInfo"))
            $root.ItemInfo.encode(m.removeItemInfo, w.uint32(18).fork()).ldelim();
        if (m.wearItemInfo != null && Object.hasOwnProperty.call(m, "wearItemInfo"))
            $root.ItemInfo.encode(m.wearItemInfo, w.uint32(26).fork()).ldelim();
        return w;
    };

    /**
     * Encodes the specified WearEquipResponse message, length delimited. Does not implicitly {@link WearEquipResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof WearEquipResponse
     * @static
     * @param {IWearEquipResponse} message WearEquipResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WearEquipResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WearEquipResponse message from the specified reader or buffer.
     * @function decode
     * @memberof WearEquipResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {WearEquipResponse} WearEquipResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WearEquipResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.WearEquipResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.isSuccess = r.bool();
                break;
            case 2:
                m.removeItemInfo = $root.ItemInfo.decode(r, r.uint32());
                break;
            case 3:
                m.wearItemInfo = $root.ItemInfo.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a WearEquipResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof WearEquipResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {WearEquipResponse} WearEquipResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WearEquipResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WearEquipResponse message.
     * @function verify
     * @memberof WearEquipResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WearEquipResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.isSuccess != null && m.hasOwnProperty("isSuccess")) {
            if (typeof m.isSuccess !== "boolean")
                return "isSuccess: boolean expected";
        }
        if (m.removeItemInfo != null && m.hasOwnProperty("removeItemInfo")) {
            {
                var e = $root.ItemInfo.verify(m.removeItemInfo);
                if (e)
                    return "removeItemInfo." + e;
            }
        }
        if (m.wearItemInfo != null && m.hasOwnProperty("wearItemInfo")) {
            {
                var e = $root.ItemInfo.verify(m.wearItemInfo);
                if (e)
                    return "wearItemInfo." + e;
            }
        }
        return null;
    };

    return WearEquipResponse;
})();

export const EquipRefineRequest = $root.EquipRefineRequest = (() => {

    EquipRefineRequest.prototype.classname = 'EquipRefineRequest';

    /**
     * Properties of an EquipRefineRequest.
     * @exports IEquipRefineRequest
     * @interface IEquipRefineRequest
     * @property {string|null} [itemId] EquipRefineRequest itemId
     * @property {string|null} [uuid] EquipRefineRequest uuid
     * @property {number|null} [bagType] EquipRefineRequest bagType
     */

    /**
     * Constructs a new EquipRefineRequest.
     * @exports EquipRefineRequest
     * @classdesc Represents an EquipRefineRequest.
     * @implements IEquipRefineRequest
     * @constructor
     * @param {IEquipRefineRequest=} [p] Properties to set
     */
    function EquipRefineRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * EquipRefineRequest itemId.
     * @member {string} itemId
     * @memberof EquipRefineRequest
     * @instance
     */
    EquipRefineRequest.prototype.itemId = "";

    /**
     * EquipRefineRequest uuid.
     * @member {string} uuid
     * @memberof EquipRefineRequest
     * @instance
     */
    EquipRefineRequest.prototype.uuid = "";

    /**
     * EquipRefineRequest bagType.
     * @member {number} bagType
     * @memberof EquipRefineRequest
     * @instance
     */
    EquipRefineRequest.prototype.bagType = 0;

    /**
     * Creates a new EquipRefineRequest instance using the specified properties.
     * @function create
     * @memberof EquipRefineRequest
     * @static
     * @param {IEquipRefineRequest=} [properties] Properties to set
     * @returns {EquipRefineRequest} EquipRefineRequest instance
     */
    EquipRefineRequest.create = function create(properties) {
        return new EquipRefineRequest(properties);
    };

    /**
     * Encodes the specified EquipRefineRequest message. Does not implicitly {@link EquipRefineRequest.verify|verify} messages.
     * @function encode
     * @memberof EquipRefineRequest
     * @static
     * @param {IEquipRefineRequest} m EquipRefineRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EquipRefineRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.itemId != null && Object.hasOwnProperty.call(m, "itemId"))
            w.uint32(10).string(m.itemId);
        if (m.uuid != null && Object.hasOwnProperty.call(m, "uuid"))
            w.uint32(18).string(m.uuid);
        if (m.bagType != null && Object.hasOwnProperty.call(m, "bagType"))
            w.uint32(24).int32(m.bagType);
        return w;
    };

    /**
     * Encodes the specified EquipRefineRequest message, length delimited. Does not implicitly {@link EquipRefineRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EquipRefineRequest
     * @static
     * @param {IEquipRefineRequest} message EquipRefineRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EquipRefineRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EquipRefineRequest message from the specified reader or buffer.
     * @function decode
     * @memberof EquipRefineRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {EquipRefineRequest} EquipRefineRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EquipRefineRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.EquipRefineRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.itemId = r.string();
                break;
            case 2:
                m.uuid = r.string();
                break;
            case 3:
                m.bagType = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes an EquipRefineRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EquipRefineRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EquipRefineRequest} EquipRefineRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EquipRefineRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EquipRefineRequest message.
     * @function verify
     * @memberof EquipRefineRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EquipRefineRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.itemId != null && m.hasOwnProperty("itemId")) {
            if (!$util.isString(m.itemId))
                return "itemId: string expected";
        }
        if (m.uuid != null && m.hasOwnProperty("uuid")) {
            if (!$util.isString(m.uuid))
                return "uuid: string expected";
        }
        if (m.bagType != null && m.hasOwnProperty("bagType")) {
            if (!$util.isInteger(m.bagType))
                return "bagType: integer expected";
        }
        return null;
    };

    return EquipRefineRequest;
})();

export const EquipRefineResponse = $root.EquipRefineResponse = (() => {

    EquipRefineResponse.prototype.classname = 'EquipRefineResponse';

    /**
     * Properties of an EquipRefineResponse.
     * @exports IEquipRefineResponse
     * @interface IEquipRefineResponse
     * @property {IEquipInfo|null} [equipInfo] EquipRefineResponse equipInfo
     */

    /**
     * Constructs a new EquipRefineResponse.
     * @exports EquipRefineResponse
     * @classdesc Represents an EquipRefineResponse.
     * @implements IEquipRefineResponse
     * @constructor
     * @param {IEquipRefineResponse=} [p] Properties to set
     */
    function EquipRefineResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * EquipRefineResponse equipInfo.
     * @member {IEquipInfo|null|undefined} equipInfo
     * @memberof EquipRefineResponse
     * @instance
     */
    EquipRefineResponse.prototype.equipInfo = null;

    /**
     * Creates a new EquipRefineResponse instance using the specified properties.
     * @function create
     * @memberof EquipRefineResponse
     * @static
     * @param {IEquipRefineResponse=} [properties] Properties to set
     * @returns {EquipRefineResponse} EquipRefineResponse instance
     */
    EquipRefineResponse.create = function create(properties) {
        return new EquipRefineResponse(properties);
    };

    /**
     * Encodes the specified EquipRefineResponse message. Does not implicitly {@link EquipRefineResponse.verify|verify} messages.
     * @function encode
     * @memberof EquipRefineResponse
     * @static
     * @param {IEquipRefineResponse} m EquipRefineResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EquipRefineResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.equipInfo != null && Object.hasOwnProperty.call(m, "equipInfo"))
            $root.EquipInfo.encode(m.equipInfo, w.uint32(10).fork()).ldelim();
        return w;
    };

    /**
     * Encodes the specified EquipRefineResponse message, length delimited. Does not implicitly {@link EquipRefineResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EquipRefineResponse
     * @static
     * @param {IEquipRefineResponse} message EquipRefineResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EquipRefineResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EquipRefineResponse message from the specified reader or buffer.
     * @function decode
     * @memberof EquipRefineResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {EquipRefineResponse} EquipRefineResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EquipRefineResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.EquipRefineResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.equipInfo = $root.EquipInfo.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes an EquipRefineResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EquipRefineResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EquipRefineResponse} EquipRefineResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EquipRefineResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EquipRefineResponse message.
     * @function verify
     * @memberof EquipRefineResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EquipRefineResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.equipInfo != null && m.hasOwnProperty("equipInfo")) {
            {
                var e = $root.EquipInfo.verify(m.equipInfo);
                if (e)
                    return "equipInfo." + e;
            }
        }
        return null;
    };

    return EquipRefineResponse;
})();

export const EquipUpRequest = $root.EquipUpRequest = (() => {

    EquipUpRequest.prototype.classname = 'EquipUpRequest';

    /**
     * Properties of an EquipUpRequest.
     * @exports IEquipUpRequest
     * @interface IEquipUpRequest
     * @property {string|null} [itemId] EquipUpRequest itemId
     * @property {string|null} [uuid] EquipUpRequest uuid
     * @property {number|null} [bagType] EquipUpRequest bagType
     */

    /**
     * Constructs a new EquipUpRequest.
     * @exports EquipUpRequest
     * @classdesc Represents an EquipUpRequest.
     * @implements IEquipUpRequest
     * @constructor
     * @param {IEquipUpRequest=} [p] Properties to set
     */
    function EquipUpRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * EquipUpRequest itemId.
     * @member {string} itemId
     * @memberof EquipUpRequest
     * @instance
     */
    EquipUpRequest.prototype.itemId = "";

    /**
     * EquipUpRequest uuid.
     * @member {string} uuid
     * @memberof EquipUpRequest
     * @instance
     */
    EquipUpRequest.prototype.uuid = "";

    /**
     * EquipUpRequest bagType.
     * @member {number} bagType
     * @memberof EquipUpRequest
     * @instance
     */
    EquipUpRequest.prototype.bagType = 0;

    /**
     * Creates a new EquipUpRequest instance using the specified properties.
     * @function create
     * @memberof EquipUpRequest
     * @static
     * @param {IEquipUpRequest=} [properties] Properties to set
     * @returns {EquipUpRequest} EquipUpRequest instance
     */
    EquipUpRequest.create = function create(properties) {
        return new EquipUpRequest(properties);
    };

    /**
     * Encodes the specified EquipUpRequest message. Does not implicitly {@link EquipUpRequest.verify|verify} messages.
     * @function encode
     * @memberof EquipUpRequest
     * @static
     * @param {IEquipUpRequest} m EquipUpRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EquipUpRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.itemId != null && Object.hasOwnProperty.call(m, "itemId"))
            w.uint32(10).string(m.itemId);
        if (m.uuid != null && Object.hasOwnProperty.call(m, "uuid"))
            w.uint32(18).string(m.uuid);
        if (m.bagType != null && Object.hasOwnProperty.call(m, "bagType"))
            w.uint32(24).int32(m.bagType);
        return w;
    };

    /**
     * Encodes the specified EquipUpRequest message, length delimited. Does not implicitly {@link EquipUpRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EquipUpRequest
     * @static
     * @param {IEquipUpRequest} message EquipUpRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EquipUpRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EquipUpRequest message from the specified reader or buffer.
     * @function decode
     * @memberof EquipUpRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {EquipUpRequest} EquipUpRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EquipUpRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.EquipUpRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.itemId = r.string();
                break;
            case 2:
                m.uuid = r.string();
                break;
            case 3:
                m.bagType = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes an EquipUpRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EquipUpRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EquipUpRequest} EquipUpRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EquipUpRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EquipUpRequest message.
     * @function verify
     * @memberof EquipUpRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EquipUpRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.itemId != null && m.hasOwnProperty("itemId")) {
            if (!$util.isString(m.itemId))
                return "itemId: string expected";
        }
        if (m.uuid != null && m.hasOwnProperty("uuid")) {
            if (!$util.isString(m.uuid))
                return "uuid: string expected";
        }
        if (m.bagType != null && m.hasOwnProperty("bagType")) {
            if (!$util.isInteger(m.bagType))
                return "bagType: integer expected";
        }
        return null;
    };

    return EquipUpRequest;
})();

export const EquipUpResponse = $root.EquipUpResponse = (() => {

    EquipUpResponse.prototype.classname = 'EquipUpResponse';

    /**
     * Properties of an EquipUpResponse.
     * @exports IEquipUpResponse
     * @interface IEquipUpResponse
     * @property {IEquipInfo|null} [equipInfo] EquipUpResponse equipInfo
     * @property {boolean|null} [isSuccess] EquipUpResponse isSuccess
     */

    /**
     * Constructs a new EquipUpResponse.
     * @exports EquipUpResponse
     * @classdesc Represents an EquipUpResponse.
     * @implements IEquipUpResponse
     * @constructor
     * @param {IEquipUpResponse=} [p] Properties to set
     */
    function EquipUpResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * EquipUpResponse equipInfo.
     * @member {IEquipInfo|null|undefined} equipInfo
     * @memberof EquipUpResponse
     * @instance
     */
    EquipUpResponse.prototype.equipInfo = null;

    /**
     * EquipUpResponse isSuccess.
     * @member {boolean} isSuccess
     * @memberof EquipUpResponse
     * @instance
     */
    EquipUpResponse.prototype.isSuccess = false;

    /**
     * Creates a new EquipUpResponse instance using the specified properties.
     * @function create
     * @memberof EquipUpResponse
     * @static
     * @param {IEquipUpResponse=} [properties] Properties to set
     * @returns {EquipUpResponse} EquipUpResponse instance
     */
    EquipUpResponse.create = function create(properties) {
        return new EquipUpResponse(properties);
    };

    /**
     * Encodes the specified EquipUpResponse message. Does not implicitly {@link EquipUpResponse.verify|verify} messages.
     * @function encode
     * @memberof EquipUpResponse
     * @static
     * @param {IEquipUpResponse} m EquipUpResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EquipUpResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.equipInfo != null && Object.hasOwnProperty.call(m, "equipInfo"))
            $root.EquipInfo.encode(m.equipInfo, w.uint32(10).fork()).ldelim();
        if (m.isSuccess != null && Object.hasOwnProperty.call(m, "isSuccess"))
            w.uint32(16).bool(m.isSuccess);
        return w;
    };

    /**
     * Encodes the specified EquipUpResponse message, length delimited. Does not implicitly {@link EquipUpResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EquipUpResponse
     * @static
     * @param {IEquipUpResponse} message EquipUpResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EquipUpResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EquipUpResponse message from the specified reader or buffer.
     * @function decode
     * @memberof EquipUpResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {EquipUpResponse} EquipUpResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EquipUpResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.EquipUpResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.equipInfo = $root.EquipInfo.decode(r, r.uint32());
                break;
            case 2:
                m.isSuccess = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes an EquipUpResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EquipUpResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EquipUpResponse} EquipUpResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EquipUpResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EquipUpResponse message.
     * @function verify
     * @memberof EquipUpResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EquipUpResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.equipInfo != null && m.hasOwnProperty("equipInfo")) {
            {
                var e = $root.EquipInfo.verify(m.equipInfo);
                if (e)
                    return "equipInfo." + e;
            }
        }
        if (m.isSuccess != null && m.hasOwnProperty("isSuccess")) {
            if (typeof m.isSuccess !== "boolean")
                return "isSuccess: boolean expected";
        }
        return null;
    };

    return EquipUpResponse;
})();

export const EquipLockRequest = $root.EquipLockRequest = (() => {

    EquipLockRequest.prototype.classname = 'EquipLockRequest';

    /**
     * Properties of an EquipLockRequest.
     * @exports IEquipLockRequest
     * @interface IEquipLockRequest
     * @property {string|null} [itemId] EquipLockRequest itemId
     * @property {string|null} [uuid] EquipLockRequest uuid
     * @property {number|null} [bagType] EquipLockRequest bagType
     * @property {number|null} [isLock] EquipLockRequest isLock
     */

    /**
     * Constructs a new EquipLockRequest.
     * @exports EquipLockRequest
     * @classdesc Represents an EquipLockRequest.
     * @implements IEquipLockRequest
     * @constructor
     * @param {IEquipLockRequest=} [p] Properties to set
     */
    function EquipLockRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * EquipLockRequest itemId.
     * @member {string} itemId
     * @memberof EquipLockRequest
     * @instance
     */
    EquipLockRequest.prototype.itemId = "";

    /**
     * EquipLockRequest uuid.
     * @member {string} uuid
     * @memberof EquipLockRequest
     * @instance
     */
    EquipLockRequest.prototype.uuid = "";

    /**
     * EquipLockRequest bagType.
     * @member {number} bagType
     * @memberof EquipLockRequest
     * @instance
     */
    EquipLockRequest.prototype.bagType = 0;

    /**
     * EquipLockRequest isLock.
     * @member {number} isLock
     * @memberof EquipLockRequest
     * @instance
     */
    EquipLockRequest.prototype.isLock = 0;

    /**
     * Creates a new EquipLockRequest instance using the specified properties.
     * @function create
     * @memberof EquipLockRequest
     * @static
     * @param {IEquipLockRequest=} [properties] Properties to set
     * @returns {EquipLockRequest} EquipLockRequest instance
     */
    EquipLockRequest.create = function create(properties) {
        return new EquipLockRequest(properties);
    };

    /**
     * Encodes the specified EquipLockRequest message. Does not implicitly {@link EquipLockRequest.verify|verify} messages.
     * @function encode
     * @memberof EquipLockRequest
     * @static
     * @param {IEquipLockRequest} m EquipLockRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EquipLockRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.itemId != null && Object.hasOwnProperty.call(m, "itemId"))
            w.uint32(10).string(m.itemId);
        if (m.uuid != null && Object.hasOwnProperty.call(m, "uuid"))
            w.uint32(18).string(m.uuid);
        if (m.bagType != null && Object.hasOwnProperty.call(m, "bagType"))
            w.uint32(24).int32(m.bagType);
        if (m.isLock != null && Object.hasOwnProperty.call(m, "isLock"))
            w.uint32(32).int32(m.isLock);
        return w;
    };

    /**
     * Encodes the specified EquipLockRequest message, length delimited. Does not implicitly {@link EquipLockRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EquipLockRequest
     * @static
     * @param {IEquipLockRequest} message EquipLockRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EquipLockRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EquipLockRequest message from the specified reader or buffer.
     * @function decode
     * @memberof EquipLockRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {EquipLockRequest} EquipLockRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EquipLockRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.EquipLockRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.itemId = r.string();
                break;
            case 2:
                m.uuid = r.string();
                break;
            case 3:
                m.bagType = r.int32();
                break;
            case 4:
                m.isLock = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes an EquipLockRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EquipLockRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EquipLockRequest} EquipLockRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EquipLockRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EquipLockRequest message.
     * @function verify
     * @memberof EquipLockRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EquipLockRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.itemId != null && m.hasOwnProperty("itemId")) {
            if (!$util.isString(m.itemId))
                return "itemId: string expected";
        }
        if (m.uuid != null && m.hasOwnProperty("uuid")) {
            if (!$util.isString(m.uuid))
                return "uuid: string expected";
        }
        if (m.bagType != null && m.hasOwnProperty("bagType")) {
            if (!$util.isInteger(m.bagType))
                return "bagType: integer expected";
        }
        if (m.isLock != null && m.hasOwnProperty("isLock")) {
            if (!$util.isInteger(m.isLock))
                return "isLock: integer expected";
        }
        return null;
    };

    return EquipLockRequest;
})();

export const EquipLockResponse = $root.EquipLockResponse = (() => {

    EquipLockResponse.prototype.classname = 'EquipLockResponse';

    /**
     * Properties of an EquipLockResponse.
     * @exports IEquipLockResponse
     * @interface IEquipLockResponse
     * @property {boolean|null} [isSuccess] EquipLockResponse isSuccess
     * @property {number|null} [isLock] EquipLockResponse isLock
     */

    /**
     * Constructs a new EquipLockResponse.
     * @exports EquipLockResponse
     * @classdesc Represents an EquipLockResponse.
     * @implements IEquipLockResponse
     * @constructor
     * @param {IEquipLockResponse=} [p] Properties to set
     */
    function EquipLockResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * EquipLockResponse isSuccess.
     * @member {boolean} isSuccess
     * @memberof EquipLockResponse
     * @instance
     */
    EquipLockResponse.prototype.isSuccess = false;

    /**
     * EquipLockResponse isLock.
     * @member {number} isLock
     * @memberof EquipLockResponse
     * @instance
     */
    EquipLockResponse.prototype.isLock = 0;

    /**
     * Creates a new EquipLockResponse instance using the specified properties.
     * @function create
     * @memberof EquipLockResponse
     * @static
     * @param {IEquipLockResponse=} [properties] Properties to set
     * @returns {EquipLockResponse} EquipLockResponse instance
     */
    EquipLockResponse.create = function create(properties) {
        return new EquipLockResponse(properties);
    };

    /**
     * Encodes the specified EquipLockResponse message. Does not implicitly {@link EquipLockResponse.verify|verify} messages.
     * @function encode
     * @memberof EquipLockResponse
     * @static
     * @param {IEquipLockResponse} m EquipLockResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EquipLockResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.isSuccess != null && Object.hasOwnProperty.call(m, "isSuccess"))
            w.uint32(8).bool(m.isSuccess);
        if (m.isLock != null && Object.hasOwnProperty.call(m, "isLock"))
            w.uint32(16).int32(m.isLock);
        return w;
    };

    /**
     * Encodes the specified EquipLockResponse message, length delimited. Does not implicitly {@link EquipLockResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EquipLockResponse
     * @static
     * @param {IEquipLockResponse} message EquipLockResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EquipLockResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EquipLockResponse message from the specified reader or buffer.
     * @function decode
     * @memberof EquipLockResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {EquipLockResponse} EquipLockResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EquipLockResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.EquipLockResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.isSuccess = r.bool();
                break;
            case 2:
                m.isLock = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes an EquipLockResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EquipLockResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EquipLockResponse} EquipLockResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EquipLockResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EquipLockResponse message.
     * @function verify
     * @memberof EquipLockResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EquipLockResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.isSuccess != null && m.hasOwnProperty("isSuccess")) {
            if (typeof m.isSuccess !== "boolean")
                return "isSuccess: boolean expected";
        }
        if (m.isLock != null && m.hasOwnProperty("isLock")) {
            if (!$util.isInteger(m.isLock))
                return "isLock: integer expected";
        }
        return null;
    };

    return EquipLockResponse;
})();

export const EquipResolveRequest = $root.EquipResolveRequest = (() => {

    EquipResolveRequest.prototype.classname = 'EquipResolveRequest';

    /**
     * Properties of an EquipResolveRequest.
     * @exports IEquipResolveRequest
     * @interface IEquipResolveRequest
     * @property {Array.<IItemInfo>|null} [items] EquipResolveRequest items
     */

    /**
     * Constructs a new EquipResolveRequest.
     * @exports EquipResolveRequest
     * @classdesc Represents an EquipResolveRequest.
     * @implements IEquipResolveRequest
     * @constructor
     * @param {IEquipResolveRequest=} [p] Properties to set
     */
    function EquipResolveRequest(p) {
        this.items = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * EquipResolveRequest items.
     * @member {Array.<IItemInfo>} items
     * @memberof EquipResolveRequest
     * @instance
     */
    EquipResolveRequest.prototype.items = $util.emptyArray;

    /**
     * Creates a new EquipResolveRequest instance using the specified properties.
     * @function create
     * @memberof EquipResolveRequest
     * @static
     * @param {IEquipResolveRequest=} [properties] Properties to set
     * @returns {EquipResolveRequest} EquipResolveRequest instance
     */
    EquipResolveRequest.create = function create(properties) {
        return new EquipResolveRequest(properties);
    };

    /**
     * Encodes the specified EquipResolveRequest message. Does not implicitly {@link EquipResolveRequest.verify|verify} messages.
     * @function encode
     * @memberof EquipResolveRequest
     * @static
     * @param {IEquipResolveRequest} m EquipResolveRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EquipResolveRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.items != null && m.items.length) {
            for (var i = 0; i < m.items.length; ++i)
                $root.ItemInfo.encode(m.items[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Encodes the specified EquipResolveRequest message, length delimited. Does not implicitly {@link EquipResolveRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EquipResolveRequest
     * @static
     * @param {IEquipResolveRequest} message EquipResolveRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EquipResolveRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EquipResolveRequest message from the specified reader or buffer.
     * @function decode
     * @memberof EquipResolveRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {EquipResolveRequest} EquipResolveRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EquipResolveRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.EquipResolveRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.items && m.items.length))
                    m.items = [];
                m.items.push($root.ItemInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes an EquipResolveRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EquipResolveRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EquipResolveRequest} EquipResolveRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EquipResolveRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EquipResolveRequest message.
     * @function verify
     * @memberof EquipResolveRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EquipResolveRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.items != null && m.hasOwnProperty("items")) {
            if (!Array.isArray(m.items))
                return "items: array expected";
            for (var i = 0; i < m.items.length; ++i) {
                {
                    var e = $root.ItemInfo.verify(m.items[i]);
                    if (e)
                        return "items." + e;
                }
            }
        }
        return null;
    };

    return EquipResolveRequest;
})();

export const EquipResolveResponse = $root.EquipResolveResponse = (() => {

    EquipResolveResponse.prototype.classname = 'EquipResolveResponse';

    /**
     * Properties of an EquipResolveResponse.
     * @exports IEquipResolveResponse
     * @interface IEquipResolveResponse
     * @property {Array.<IItemInfo>|null} [itemList] EquipResolveResponse itemList
     */

    /**
     * Constructs a new EquipResolveResponse.
     * @exports EquipResolveResponse
     * @classdesc Represents an EquipResolveResponse.
     * @implements IEquipResolveResponse
     * @constructor
     * @param {IEquipResolveResponse=} [p] Properties to set
     */
    function EquipResolveResponse(p) {
        this.itemList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * EquipResolveResponse itemList.
     * @member {Array.<IItemInfo>} itemList
     * @memberof EquipResolveResponse
     * @instance
     */
    EquipResolveResponse.prototype.itemList = $util.emptyArray;

    /**
     * Creates a new EquipResolveResponse instance using the specified properties.
     * @function create
     * @memberof EquipResolveResponse
     * @static
     * @param {IEquipResolveResponse=} [properties] Properties to set
     * @returns {EquipResolveResponse} EquipResolveResponse instance
     */
    EquipResolveResponse.create = function create(properties) {
        return new EquipResolveResponse(properties);
    };

    /**
     * Encodes the specified EquipResolveResponse message. Does not implicitly {@link EquipResolveResponse.verify|verify} messages.
     * @function encode
     * @memberof EquipResolveResponse
     * @static
     * @param {IEquipResolveResponse} m EquipResolveResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EquipResolveResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.itemList != null && m.itemList.length) {
            for (var i = 0; i < m.itemList.length; ++i)
                $root.ItemInfo.encode(m.itemList[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Encodes the specified EquipResolveResponse message, length delimited. Does not implicitly {@link EquipResolveResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EquipResolveResponse
     * @static
     * @param {IEquipResolveResponse} message EquipResolveResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EquipResolveResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EquipResolveResponse message from the specified reader or buffer.
     * @function decode
     * @memberof EquipResolveResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {EquipResolveResponse} EquipResolveResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EquipResolveResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.EquipResolveResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.itemList && m.itemList.length))
                    m.itemList = [];
                m.itemList.push($root.ItemInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes an EquipResolveResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EquipResolveResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EquipResolveResponse} EquipResolveResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EquipResolveResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EquipResolveResponse message.
     * @function verify
     * @memberof EquipResolveResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EquipResolveResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.itemList != null && m.hasOwnProperty("itemList")) {
            if (!Array.isArray(m.itemList))
                return "itemList: array expected";
            for (var i = 0; i < m.itemList.length; ++i) {
                {
                    var e = $root.ItemInfo.verify(m.itemList[i]);
                    if (e)
                        return "itemList." + e;
                }
            }
        }
        return null;
    };

    return EquipResolveResponse;
})();

export const RoleStateLevelRequest = $root.RoleStateLevelRequest = (() => {

    RoleStateLevelRequest.prototype.classname = 'RoleStateLevelRequest';

    /**
     * Properties of a RoleStateLevelRequest.
     * @exports IRoleStateLevelRequest
     * @interface IRoleStateLevelRequest
     */

    /**
     * Constructs a new RoleStateLevelRequest.
     * @exports RoleStateLevelRequest
     * @classdesc Represents a RoleStateLevelRequest.
     * @implements IRoleStateLevelRequest
     * @constructor
     * @param {IRoleStateLevelRequest=} [p] Properties to set
     */
    function RoleStateLevelRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new RoleStateLevelRequest instance using the specified properties.
     * @function create
     * @memberof RoleStateLevelRequest
     * @static
     * @param {IRoleStateLevelRequest=} [properties] Properties to set
     * @returns {RoleStateLevelRequest} RoleStateLevelRequest instance
     */
    RoleStateLevelRequest.create = function create(properties) {
        return new RoleStateLevelRequest(properties);
    };

    /**
     * Encodes the specified RoleStateLevelRequest message. Does not implicitly {@link RoleStateLevelRequest.verify|verify} messages.
     * @function encode
     * @memberof RoleStateLevelRequest
     * @static
     * @param {IRoleStateLevelRequest} m RoleStateLevelRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoleStateLevelRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Encodes the specified RoleStateLevelRequest message, length delimited. Does not implicitly {@link RoleStateLevelRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RoleStateLevelRequest
     * @static
     * @param {IRoleStateLevelRequest} message RoleStateLevelRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoleStateLevelRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RoleStateLevelRequest message from the specified reader or buffer.
     * @function decode
     * @memberof RoleStateLevelRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RoleStateLevelRequest} RoleStateLevelRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoleStateLevelRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RoleStateLevelRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a RoleStateLevelRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RoleStateLevelRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RoleStateLevelRequest} RoleStateLevelRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoleStateLevelRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RoleStateLevelRequest message.
     * @function verify
     * @memberof RoleStateLevelRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RoleStateLevelRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        return null;
    };

    return RoleStateLevelRequest;
})();

export const RoleStateLevelResponse = $root.RoleStateLevelResponse = (() => {

    RoleStateLevelResponse.prototype.classname = 'RoleStateLevelResponse';

    /**
     * Properties of a RoleStateLevelResponse.
     * @exports IRoleStateLevelResponse
     * @interface IRoleStateLevelResponse
     * @property {number|null} [realmLevel] RoleStateLevelResponse realmLevel
     * @property {number|null} [totalBreachAura] RoleStateLevelResponse totalBreachAura
     * @property {number|null} [cumulativeAura] RoleStateLevelResponse cumulativeAura
     * @property {Array.<IItemInfo>|null} [needGoods] RoleStateLevelResponse needGoods
     * @property {number|null} [breachProbability] RoleStateLevelResponse breachProbability
     * @property {number|null} [hp] RoleStateLevelResponse hp
     * @property {number|null} [attack] RoleStateLevelResponse attack
     * @property {number|null} [defense] RoleStateLevelResponse defense
     * @property {boolean|null} [isCreatDharma] RoleStateLevelResponse isCreatDharma
     */

    /**
     * Constructs a new RoleStateLevelResponse.
     * @exports RoleStateLevelResponse
     * @classdesc Represents a RoleStateLevelResponse.
     * @implements IRoleStateLevelResponse
     * @constructor
     * @param {IRoleStateLevelResponse=} [p] Properties to set
     */
    function RoleStateLevelResponse(p) {
        this.needGoods = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RoleStateLevelResponse realmLevel.
     * @member {number} realmLevel
     * @memberof RoleStateLevelResponse
     * @instance
     */
    RoleStateLevelResponse.prototype.realmLevel = 0;

    /**
     * RoleStateLevelResponse totalBreachAura.
     * @member {number} totalBreachAura
     * @memberof RoleStateLevelResponse
     * @instance
     */
    RoleStateLevelResponse.prototype.totalBreachAura = 0;

    /**
     * RoleStateLevelResponse cumulativeAura.
     * @member {number} cumulativeAura
     * @memberof RoleStateLevelResponse
     * @instance
     */
    RoleStateLevelResponse.prototype.cumulativeAura = 0;

    /**
     * RoleStateLevelResponse needGoods.
     * @member {Array.<IItemInfo>} needGoods
     * @memberof RoleStateLevelResponse
     * @instance
     */
    RoleStateLevelResponse.prototype.needGoods = $util.emptyArray;

    /**
     * RoleStateLevelResponse breachProbability.
     * @member {number} breachProbability
     * @memberof RoleStateLevelResponse
     * @instance
     */
    RoleStateLevelResponse.prototype.breachProbability = 0;

    /**
     * RoleStateLevelResponse hp.
     * @member {number} hp
     * @memberof RoleStateLevelResponse
     * @instance
     */
    RoleStateLevelResponse.prototype.hp = 0;

    /**
     * RoleStateLevelResponse attack.
     * @member {number} attack
     * @memberof RoleStateLevelResponse
     * @instance
     */
    RoleStateLevelResponse.prototype.attack = 0;

    /**
     * RoleStateLevelResponse defense.
     * @member {number} defense
     * @memberof RoleStateLevelResponse
     * @instance
     */
    RoleStateLevelResponse.prototype.defense = 0;

    /**
     * RoleStateLevelResponse isCreatDharma.
     * @member {boolean} isCreatDharma
     * @memberof RoleStateLevelResponse
     * @instance
     */
    RoleStateLevelResponse.prototype.isCreatDharma = false;

    /**
     * Creates a new RoleStateLevelResponse instance using the specified properties.
     * @function create
     * @memberof RoleStateLevelResponse
     * @static
     * @param {IRoleStateLevelResponse=} [properties] Properties to set
     * @returns {RoleStateLevelResponse} RoleStateLevelResponse instance
     */
    RoleStateLevelResponse.create = function create(properties) {
        return new RoleStateLevelResponse(properties);
    };

    /**
     * Encodes the specified RoleStateLevelResponse message. Does not implicitly {@link RoleStateLevelResponse.verify|verify} messages.
     * @function encode
     * @memberof RoleStateLevelResponse
     * @static
     * @param {IRoleStateLevelResponse} m RoleStateLevelResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoleStateLevelResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.realmLevel != null && Object.hasOwnProperty.call(m, "realmLevel"))
            w.uint32(8).int32(m.realmLevel);
        if (m.totalBreachAura != null && Object.hasOwnProperty.call(m, "totalBreachAura"))
            w.uint32(16).int32(m.totalBreachAura);
        if (m.cumulativeAura != null && Object.hasOwnProperty.call(m, "cumulativeAura"))
            w.uint32(24).int32(m.cumulativeAura);
        if (m.needGoods != null && m.needGoods.length) {
            for (var i = 0; i < m.needGoods.length; ++i)
                $root.ItemInfo.encode(m.needGoods[i], w.uint32(34).fork()).ldelim();
        }
        if (m.breachProbability != null && Object.hasOwnProperty.call(m, "breachProbability"))
            w.uint32(40).int32(m.breachProbability);
        if (m.hp != null && Object.hasOwnProperty.call(m, "hp"))
            w.uint32(48).int32(m.hp);
        if (m.attack != null && Object.hasOwnProperty.call(m, "attack"))
            w.uint32(56).int32(m.attack);
        if (m.defense != null && Object.hasOwnProperty.call(m, "defense"))
            w.uint32(64).int32(m.defense);
        if (m.isCreatDharma != null && Object.hasOwnProperty.call(m, "isCreatDharma"))
            w.uint32(72).bool(m.isCreatDharma);
        return w;
    };

    /**
     * Encodes the specified RoleStateLevelResponse message, length delimited. Does not implicitly {@link RoleStateLevelResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RoleStateLevelResponse
     * @static
     * @param {IRoleStateLevelResponse} message RoleStateLevelResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoleStateLevelResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RoleStateLevelResponse message from the specified reader or buffer.
     * @function decode
     * @memberof RoleStateLevelResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RoleStateLevelResponse} RoleStateLevelResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoleStateLevelResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RoleStateLevelResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.realmLevel = r.int32();
                break;
            case 2:
                m.totalBreachAura = r.int32();
                break;
            case 3:
                m.cumulativeAura = r.int32();
                break;
            case 4:
                if (!(m.needGoods && m.needGoods.length))
                    m.needGoods = [];
                m.needGoods.push($root.ItemInfo.decode(r, r.uint32()));
                break;
            case 5:
                m.breachProbability = r.int32();
                break;
            case 6:
                m.hp = r.int32();
                break;
            case 7:
                m.attack = r.int32();
                break;
            case 8:
                m.defense = r.int32();
                break;
            case 9:
                m.isCreatDharma = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a RoleStateLevelResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RoleStateLevelResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RoleStateLevelResponse} RoleStateLevelResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoleStateLevelResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RoleStateLevelResponse message.
     * @function verify
     * @memberof RoleStateLevelResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RoleStateLevelResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.realmLevel != null && m.hasOwnProperty("realmLevel")) {
            if (!$util.isInteger(m.realmLevel))
                return "realmLevel: integer expected";
        }
        if (m.totalBreachAura != null && m.hasOwnProperty("totalBreachAura")) {
            if (!$util.isInteger(m.totalBreachAura))
                return "totalBreachAura: integer expected";
        }
        if (m.cumulativeAura != null && m.hasOwnProperty("cumulativeAura")) {
            if (!$util.isInteger(m.cumulativeAura))
                return "cumulativeAura: integer expected";
        }
        if (m.needGoods != null && m.hasOwnProperty("needGoods")) {
            if (!Array.isArray(m.needGoods))
                return "needGoods: array expected";
            for (var i = 0; i < m.needGoods.length; ++i) {
                {
                    var e = $root.ItemInfo.verify(m.needGoods[i]);
                    if (e)
                        return "needGoods." + e;
                }
            }
        }
        if (m.breachProbability != null && m.hasOwnProperty("breachProbability")) {
            if (!$util.isInteger(m.breachProbability))
                return "breachProbability: integer expected";
        }
        if (m.hp != null && m.hasOwnProperty("hp")) {
            if (!$util.isInteger(m.hp))
                return "hp: integer expected";
        }
        if (m.attack != null && m.hasOwnProperty("attack")) {
            if (!$util.isInteger(m.attack))
                return "attack: integer expected";
        }
        if (m.defense != null && m.hasOwnProperty("defense")) {
            if (!$util.isInteger(m.defense))
                return "defense: integer expected";
        }
        if (m.isCreatDharma != null && m.hasOwnProperty("isCreatDharma")) {
            if (typeof m.isCreatDharma !== "boolean")
                return "isCreatDharma: boolean expected";
        }
        return null;
    };

    return RoleStateLevelResponse;
})();

export const RoleUpgradeStateRequest = $root.RoleUpgradeStateRequest = (() => {

    RoleUpgradeStateRequest.prototype.classname = 'RoleUpgradeStateRequest';

    /**
     * Properties of a RoleUpgradeStateRequest.
     * @exports IRoleUpgradeStateRequest
     * @interface IRoleUpgradeStateRequest
     */

    /**
     * Constructs a new RoleUpgradeStateRequest.
     * @exports RoleUpgradeStateRequest
     * @classdesc Represents a RoleUpgradeStateRequest.
     * @implements IRoleUpgradeStateRequest
     * @constructor
     * @param {IRoleUpgradeStateRequest=} [p] Properties to set
     */
    function RoleUpgradeStateRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new RoleUpgradeStateRequest instance using the specified properties.
     * @function create
     * @memberof RoleUpgradeStateRequest
     * @static
     * @param {IRoleUpgradeStateRequest=} [properties] Properties to set
     * @returns {RoleUpgradeStateRequest} RoleUpgradeStateRequest instance
     */
    RoleUpgradeStateRequest.create = function create(properties) {
        return new RoleUpgradeStateRequest(properties);
    };

    /**
     * Encodes the specified RoleUpgradeStateRequest message. Does not implicitly {@link RoleUpgradeStateRequest.verify|verify} messages.
     * @function encode
     * @memberof RoleUpgradeStateRequest
     * @static
     * @param {IRoleUpgradeStateRequest} m RoleUpgradeStateRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoleUpgradeStateRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Encodes the specified RoleUpgradeStateRequest message, length delimited. Does not implicitly {@link RoleUpgradeStateRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RoleUpgradeStateRequest
     * @static
     * @param {IRoleUpgradeStateRequest} message RoleUpgradeStateRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoleUpgradeStateRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RoleUpgradeStateRequest message from the specified reader or buffer.
     * @function decode
     * @memberof RoleUpgradeStateRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RoleUpgradeStateRequest} RoleUpgradeStateRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoleUpgradeStateRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RoleUpgradeStateRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a RoleUpgradeStateRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RoleUpgradeStateRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RoleUpgradeStateRequest} RoleUpgradeStateRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoleUpgradeStateRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RoleUpgradeStateRequest message.
     * @function verify
     * @memberof RoleUpgradeStateRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RoleUpgradeStateRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        return null;
    };

    return RoleUpgradeStateRequest;
})();

export const RoleUpgradeStateResponse = $root.RoleUpgradeStateResponse = (() => {

    RoleUpgradeStateResponse.prototype.classname = 'RoleUpgradeStateResponse';

    /**
     * Properties of a RoleUpgradeStateResponse.
     * @exports IRoleUpgradeStateResponse
     * @interface IRoleUpgradeStateResponse
     * @property {boolean|null} [isSuccess] RoleUpgradeStateResponse isSuccess
     * @property {number|null} [deductionAura] RoleUpgradeStateResponse deductionAura
     * @property {number|null} [power] RoleUpgradeStateResponse power
     * @property {number|null} [hp] RoleUpgradeStateResponse hp
     * @property {number|null} [attack] RoleUpgradeStateResponse attack
     * @property {number|null} [defense] RoleUpgradeStateResponse defense
     */

    /**
     * Constructs a new RoleUpgradeStateResponse.
     * @exports RoleUpgradeStateResponse
     * @classdesc Represents a RoleUpgradeStateResponse.
     * @implements IRoleUpgradeStateResponse
     * @constructor
     * @param {IRoleUpgradeStateResponse=} [p] Properties to set
     */
    function RoleUpgradeStateResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RoleUpgradeStateResponse isSuccess.
     * @member {boolean} isSuccess
     * @memberof RoleUpgradeStateResponse
     * @instance
     */
    RoleUpgradeStateResponse.prototype.isSuccess = false;

    /**
     * RoleUpgradeStateResponse deductionAura.
     * @member {number} deductionAura
     * @memberof RoleUpgradeStateResponse
     * @instance
     */
    RoleUpgradeStateResponse.prototype.deductionAura = 0;

    /**
     * RoleUpgradeStateResponse power.
     * @member {number} power
     * @memberof RoleUpgradeStateResponse
     * @instance
     */
    RoleUpgradeStateResponse.prototype.power = 0;

    /**
     * RoleUpgradeStateResponse hp.
     * @member {number} hp
     * @memberof RoleUpgradeStateResponse
     * @instance
     */
    RoleUpgradeStateResponse.prototype.hp = 0;

    /**
     * RoleUpgradeStateResponse attack.
     * @member {number} attack
     * @memberof RoleUpgradeStateResponse
     * @instance
     */
    RoleUpgradeStateResponse.prototype.attack = 0;

    /**
     * RoleUpgradeStateResponse defense.
     * @member {number} defense
     * @memberof RoleUpgradeStateResponse
     * @instance
     */
    RoleUpgradeStateResponse.prototype.defense = 0;

    /**
     * Creates a new RoleUpgradeStateResponse instance using the specified properties.
     * @function create
     * @memberof RoleUpgradeStateResponse
     * @static
     * @param {IRoleUpgradeStateResponse=} [properties] Properties to set
     * @returns {RoleUpgradeStateResponse} RoleUpgradeStateResponse instance
     */
    RoleUpgradeStateResponse.create = function create(properties) {
        return new RoleUpgradeStateResponse(properties);
    };

    /**
     * Encodes the specified RoleUpgradeStateResponse message. Does not implicitly {@link RoleUpgradeStateResponse.verify|verify} messages.
     * @function encode
     * @memberof RoleUpgradeStateResponse
     * @static
     * @param {IRoleUpgradeStateResponse} m RoleUpgradeStateResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoleUpgradeStateResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.isSuccess != null && Object.hasOwnProperty.call(m, "isSuccess"))
            w.uint32(8).bool(m.isSuccess);
        if (m.deductionAura != null && Object.hasOwnProperty.call(m, "deductionAura"))
            w.uint32(16).int32(m.deductionAura);
        if (m.power != null && Object.hasOwnProperty.call(m, "power"))
            w.uint32(24).int32(m.power);
        if (m.hp != null && Object.hasOwnProperty.call(m, "hp"))
            w.uint32(32).int32(m.hp);
        if (m.attack != null && Object.hasOwnProperty.call(m, "attack"))
            w.uint32(40).int32(m.attack);
        if (m.defense != null && Object.hasOwnProperty.call(m, "defense"))
            w.uint32(48).int32(m.defense);
        return w;
    };

    /**
     * Encodes the specified RoleUpgradeStateResponse message, length delimited. Does not implicitly {@link RoleUpgradeStateResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RoleUpgradeStateResponse
     * @static
     * @param {IRoleUpgradeStateResponse} message RoleUpgradeStateResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoleUpgradeStateResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RoleUpgradeStateResponse message from the specified reader or buffer.
     * @function decode
     * @memberof RoleUpgradeStateResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RoleUpgradeStateResponse} RoleUpgradeStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoleUpgradeStateResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RoleUpgradeStateResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.isSuccess = r.bool();
                break;
            case 2:
                m.deductionAura = r.int32();
                break;
            case 3:
                m.power = r.int32();
                break;
            case 4:
                m.hp = r.int32();
                break;
            case 5:
                m.attack = r.int32();
                break;
            case 6:
                m.defense = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a RoleUpgradeStateResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RoleUpgradeStateResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RoleUpgradeStateResponse} RoleUpgradeStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoleUpgradeStateResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RoleUpgradeStateResponse message.
     * @function verify
     * @memberof RoleUpgradeStateResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RoleUpgradeStateResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.isSuccess != null && m.hasOwnProperty("isSuccess")) {
            if (typeof m.isSuccess !== "boolean")
                return "isSuccess: boolean expected";
        }
        if (m.deductionAura != null && m.hasOwnProperty("deductionAura")) {
            if (!$util.isInteger(m.deductionAura))
                return "deductionAura: integer expected";
        }
        if (m.power != null && m.hasOwnProperty("power")) {
            if (!$util.isInteger(m.power))
                return "power: integer expected";
        }
        if (m.hp != null && m.hasOwnProperty("hp")) {
            if (!$util.isInteger(m.hp))
                return "hp: integer expected";
        }
        if (m.attack != null && m.hasOwnProperty("attack")) {
            if (!$util.isInteger(m.attack))
                return "attack: integer expected";
        }
        if (m.defense != null && m.hasOwnProperty("defense")) {
            if (!$util.isInteger(m.defense))
                return "defense: integer expected";
        }
        return null;
    };

    return RoleUpgradeStateResponse;
})();

export const SelectDharmakayaRequest = $root.SelectDharmakayaRequest = (() => {

    SelectDharmakayaRequest.prototype.classname = 'SelectDharmakayaRequest';

    /**
     * Properties of a SelectDharmakayaRequest.
     * @exports ISelectDharmakayaRequest
     * @interface ISelectDharmakayaRequest
     * @property {DharmakayaType|null} [dharmakayaType] SelectDharmakayaRequest dharmakayaType
     */

    /**
     * Constructs a new SelectDharmakayaRequest.
     * @exports SelectDharmakayaRequest
     * @classdesc Represents a SelectDharmakayaRequest.
     * @implements ISelectDharmakayaRequest
     * @constructor
     * @param {ISelectDharmakayaRequest=} [p] Properties to set
     */
    function SelectDharmakayaRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SelectDharmakayaRequest dharmakayaType.
     * @member {DharmakayaType} dharmakayaType
     * @memberof SelectDharmakayaRequest
     * @instance
     */
    SelectDharmakayaRequest.prototype.dharmakayaType = 0;

    /**
     * Creates a new SelectDharmakayaRequest instance using the specified properties.
     * @function create
     * @memberof SelectDharmakayaRequest
     * @static
     * @param {ISelectDharmakayaRequest=} [properties] Properties to set
     * @returns {SelectDharmakayaRequest} SelectDharmakayaRequest instance
     */
    SelectDharmakayaRequest.create = function create(properties) {
        return new SelectDharmakayaRequest(properties);
    };

    /**
     * Encodes the specified SelectDharmakayaRequest message. Does not implicitly {@link SelectDharmakayaRequest.verify|verify} messages.
     * @function encode
     * @memberof SelectDharmakayaRequest
     * @static
     * @param {ISelectDharmakayaRequest} m SelectDharmakayaRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SelectDharmakayaRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.dharmakayaType != null && Object.hasOwnProperty.call(m, "dharmakayaType"))
            w.uint32(8).int32(m.dharmakayaType);
        return w;
    };

    /**
     * Encodes the specified SelectDharmakayaRequest message, length delimited. Does not implicitly {@link SelectDharmakayaRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SelectDharmakayaRequest
     * @static
     * @param {ISelectDharmakayaRequest} message SelectDharmakayaRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SelectDharmakayaRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SelectDharmakayaRequest message from the specified reader or buffer.
     * @function decode
     * @memberof SelectDharmakayaRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SelectDharmakayaRequest} SelectDharmakayaRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SelectDharmakayaRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SelectDharmakayaRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.dharmakayaType = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a SelectDharmakayaRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SelectDharmakayaRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SelectDharmakayaRequest} SelectDharmakayaRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SelectDharmakayaRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SelectDharmakayaRequest message.
     * @function verify
     * @memberof SelectDharmakayaRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SelectDharmakayaRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.dharmakayaType != null && m.hasOwnProperty("dharmakayaType")) {
            switch (m.dharmakayaType) {
            default:
                return "dharmakayaType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            }
        }
        return null;
    };

    return SelectDharmakayaRequest;
})();

export const SelectDharmakayaResponse = $root.SelectDharmakayaResponse = (() => {

    SelectDharmakayaResponse.prototype.classname = 'SelectDharmakayaResponse';

    /**
     * Properties of a SelectDharmakayaResponse.
     * @exports ISelectDharmakayaResponse
     * @interface ISelectDharmakayaResponse
     */

    /**
     * Constructs a new SelectDharmakayaResponse.
     * @exports SelectDharmakayaResponse
     * @classdesc Represents a SelectDharmakayaResponse.
     * @implements ISelectDharmakayaResponse
     * @constructor
     * @param {ISelectDharmakayaResponse=} [p] Properties to set
     */
    function SelectDharmakayaResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new SelectDharmakayaResponse instance using the specified properties.
     * @function create
     * @memberof SelectDharmakayaResponse
     * @static
     * @param {ISelectDharmakayaResponse=} [properties] Properties to set
     * @returns {SelectDharmakayaResponse} SelectDharmakayaResponse instance
     */
    SelectDharmakayaResponse.create = function create(properties) {
        return new SelectDharmakayaResponse(properties);
    };

    /**
     * Encodes the specified SelectDharmakayaResponse message. Does not implicitly {@link SelectDharmakayaResponse.verify|verify} messages.
     * @function encode
     * @memberof SelectDharmakayaResponse
     * @static
     * @param {ISelectDharmakayaResponse} m SelectDharmakayaResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SelectDharmakayaResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Encodes the specified SelectDharmakayaResponse message, length delimited. Does not implicitly {@link SelectDharmakayaResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SelectDharmakayaResponse
     * @static
     * @param {ISelectDharmakayaResponse} message SelectDharmakayaResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SelectDharmakayaResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SelectDharmakayaResponse message from the specified reader or buffer.
     * @function decode
     * @memberof SelectDharmakayaResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SelectDharmakayaResponse} SelectDharmakayaResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SelectDharmakayaResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SelectDharmakayaResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a SelectDharmakayaResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SelectDharmakayaResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SelectDharmakayaResponse} SelectDharmakayaResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SelectDharmakayaResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SelectDharmakayaResponse message.
     * @function verify
     * @memberof SelectDharmakayaResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SelectDharmakayaResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        return null;
    };

    return SelectDharmakayaResponse;
})();

export const DharmakayaRecastRequest = $root.DharmakayaRecastRequest = (() => {

    DharmakayaRecastRequest.prototype.classname = 'DharmakayaRecastRequest';

    /**
     * Properties of a DharmakayaRecastRequest.
     * @exports IDharmakayaRecastRequest
     * @interface IDharmakayaRecastRequest
     */

    /**
     * Constructs a new DharmakayaRecastRequest.
     * @exports DharmakayaRecastRequest
     * @classdesc Represents a DharmakayaRecastRequest.
     * @implements IDharmakayaRecastRequest
     * @constructor
     * @param {IDharmakayaRecastRequest=} [p] Properties to set
     */
    function DharmakayaRecastRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new DharmakayaRecastRequest instance using the specified properties.
     * @function create
     * @memberof DharmakayaRecastRequest
     * @static
     * @param {IDharmakayaRecastRequest=} [properties] Properties to set
     * @returns {DharmakayaRecastRequest} DharmakayaRecastRequest instance
     */
    DharmakayaRecastRequest.create = function create(properties) {
        return new DharmakayaRecastRequest(properties);
    };

    /**
     * Encodes the specified DharmakayaRecastRequest message. Does not implicitly {@link DharmakayaRecastRequest.verify|verify} messages.
     * @function encode
     * @memberof DharmakayaRecastRequest
     * @static
     * @param {IDharmakayaRecastRequest} m DharmakayaRecastRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DharmakayaRecastRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Encodes the specified DharmakayaRecastRequest message, length delimited. Does not implicitly {@link DharmakayaRecastRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DharmakayaRecastRequest
     * @static
     * @param {IDharmakayaRecastRequest} message DharmakayaRecastRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DharmakayaRecastRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DharmakayaRecastRequest message from the specified reader or buffer.
     * @function decode
     * @memberof DharmakayaRecastRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {DharmakayaRecastRequest} DharmakayaRecastRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DharmakayaRecastRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.DharmakayaRecastRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a DharmakayaRecastRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DharmakayaRecastRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DharmakayaRecastRequest} DharmakayaRecastRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DharmakayaRecastRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DharmakayaRecastRequest message.
     * @function verify
     * @memberof DharmakayaRecastRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DharmakayaRecastRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        return null;
    };

    return DharmakayaRecastRequest;
})();

export const DharmakayaRecastResponse = $root.DharmakayaRecastResponse = (() => {

    DharmakayaRecastResponse.prototype.classname = 'DharmakayaRecastResponse';

    /**
     * Properties of a DharmakayaRecastResponse.
     * @exports IDharmakayaRecastResponse
     * @interface IDharmakayaRecastResponse
     * @property {DharmakayaType|null} [dharmakayaType] DharmakayaRecastResponse dharmakayaType
     */

    /**
     * Constructs a new DharmakayaRecastResponse.
     * @exports DharmakayaRecastResponse
     * @classdesc Represents a DharmakayaRecastResponse.
     * @implements IDharmakayaRecastResponse
     * @constructor
     * @param {IDharmakayaRecastResponse=} [p] Properties to set
     */
    function DharmakayaRecastResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * DharmakayaRecastResponse dharmakayaType.
     * @member {DharmakayaType} dharmakayaType
     * @memberof DharmakayaRecastResponse
     * @instance
     */
    DharmakayaRecastResponse.prototype.dharmakayaType = 0;

    /**
     * Creates a new DharmakayaRecastResponse instance using the specified properties.
     * @function create
     * @memberof DharmakayaRecastResponse
     * @static
     * @param {IDharmakayaRecastResponse=} [properties] Properties to set
     * @returns {DharmakayaRecastResponse} DharmakayaRecastResponse instance
     */
    DharmakayaRecastResponse.create = function create(properties) {
        return new DharmakayaRecastResponse(properties);
    };

    /**
     * Encodes the specified DharmakayaRecastResponse message. Does not implicitly {@link DharmakayaRecastResponse.verify|verify} messages.
     * @function encode
     * @memberof DharmakayaRecastResponse
     * @static
     * @param {IDharmakayaRecastResponse} m DharmakayaRecastResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DharmakayaRecastResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.dharmakayaType != null && Object.hasOwnProperty.call(m, "dharmakayaType"))
            w.uint32(8).int32(m.dharmakayaType);
        return w;
    };

    /**
     * Encodes the specified DharmakayaRecastResponse message, length delimited. Does not implicitly {@link DharmakayaRecastResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DharmakayaRecastResponse
     * @static
     * @param {IDharmakayaRecastResponse} message DharmakayaRecastResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DharmakayaRecastResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DharmakayaRecastResponse message from the specified reader or buffer.
     * @function decode
     * @memberof DharmakayaRecastResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {DharmakayaRecastResponse} DharmakayaRecastResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DharmakayaRecastResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.DharmakayaRecastResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.dharmakayaType = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a DharmakayaRecastResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DharmakayaRecastResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DharmakayaRecastResponse} DharmakayaRecastResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DharmakayaRecastResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DharmakayaRecastResponse message.
     * @function verify
     * @memberof DharmakayaRecastResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DharmakayaRecastResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.dharmakayaType != null && m.hasOwnProperty("dharmakayaType")) {
            switch (m.dharmakayaType) {
            default:
                return "dharmakayaType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            }
        }
        return null;
    };

    return DharmakayaRecastResponse;
})();

export const RoleDharmakayaRequest = $root.RoleDharmakayaRequest = (() => {

    RoleDharmakayaRequest.prototype.classname = 'RoleDharmakayaRequest';

    /**
     * Properties of a RoleDharmakayaRequest.
     * @exports IRoleDharmakayaRequest
     * @interface IRoleDharmakayaRequest
     */

    /**
     * Constructs a new RoleDharmakayaRequest.
     * @exports RoleDharmakayaRequest
     * @classdesc Represents a RoleDharmakayaRequest.
     * @implements IRoleDharmakayaRequest
     * @constructor
     * @param {IRoleDharmakayaRequest=} [p] Properties to set
     */
    function RoleDharmakayaRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new RoleDharmakayaRequest instance using the specified properties.
     * @function create
     * @memberof RoleDharmakayaRequest
     * @static
     * @param {IRoleDharmakayaRequest=} [properties] Properties to set
     * @returns {RoleDharmakayaRequest} RoleDharmakayaRequest instance
     */
    RoleDharmakayaRequest.create = function create(properties) {
        return new RoleDharmakayaRequest(properties);
    };

    /**
     * Encodes the specified RoleDharmakayaRequest message. Does not implicitly {@link RoleDharmakayaRequest.verify|verify} messages.
     * @function encode
     * @memberof RoleDharmakayaRequest
     * @static
     * @param {IRoleDharmakayaRequest} m RoleDharmakayaRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoleDharmakayaRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Encodes the specified RoleDharmakayaRequest message, length delimited. Does not implicitly {@link RoleDharmakayaRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RoleDharmakayaRequest
     * @static
     * @param {IRoleDharmakayaRequest} message RoleDharmakayaRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoleDharmakayaRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RoleDharmakayaRequest message from the specified reader or buffer.
     * @function decode
     * @memberof RoleDharmakayaRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RoleDharmakayaRequest} RoleDharmakayaRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoleDharmakayaRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RoleDharmakayaRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a RoleDharmakayaRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RoleDharmakayaRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RoleDharmakayaRequest} RoleDharmakayaRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoleDharmakayaRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RoleDharmakayaRequest message.
     * @function verify
     * @memberof RoleDharmakayaRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RoleDharmakayaRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        return null;
    };

    return RoleDharmakayaRequest;
})();

export const RoleDharmakayaResponse = $root.RoleDharmakayaResponse = (() => {

    RoleDharmakayaResponse.prototype.classname = 'RoleDharmakayaResponse';

    /**
     * Properties of a RoleDharmakayaResponse.
     * @exports IRoleDharmakayaResponse
     * @interface IRoleDharmakayaResponse
     * @property {number|null} [dharmakayaLevel] RoleDharmakayaResponse dharmakayaLevel
     * @property {number|null} [upgradePowerAsk] RoleDharmakayaResponse upgradePowerAsk
     * @property {IRoleAttribute|null} [attributeAddition] RoleDharmakayaResponse attributeAddition
     */

    /**
     * Constructs a new RoleDharmakayaResponse.
     * @exports RoleDharmakayaResponse
     * @classdesc Represents a RoleDharmakayaResponse.
     * @implements IRoleDharmakayaResponse
     * @constructor
     * @param {IRoleDharmakayaResponse=} [p] Properties to set
     */
    function RoleDharmakayaResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RoleDharmakayaResponse dharmakayaLevel.
     * @member {number} dharmakayaLevel
     * @memberof RoleDharmakayaResponse
     * @instance
     */
    RoleDharmakayaResponse.prototype.dharmakayaLevel = 0;

    /**
     * RoleDharmakayaResponse upgradePowerAsk.
     * @member {number} upgradePowerAsk
     * @memberof RoleDharmakayaResponse
     * @instance
     */
    RoleDharmakayaResponse.prototype.upgradePowerAsk = 0;

    /**
     * RoleDharmakayaResponse attributeAddition.
     * @member {IRoleAttribute|null|undefined} attributeAddition
     * @memberof RoleDharmakayaResponse
     * @instance
     */
    RoleDharmakayaResponse.prototype.attributeAddition = null;

    /**
     * Creates a new RoleDharmakayaResponse instance using the specified properties.
     * @function create
     * @memberof RoleDharmakayaResponse
     * @static
     * @param {IRoleDharmakayaResponse=} [properties] Properties to set
     * @returns {RoleDharmakayaResponse} RoleDharmakayaResponse instance
     */
    RoleDharmakayaResponse.create = function create(properties) {
        return new RoleDharmakayaResponse(properties);
    };

    /**
     * Encodes the specified RoleDharmakayaResponse message. Does not implicitly {@link RoleDharmakayaResponse.verify|verify} messages.
     * @function encode
     * @memberof RoleDharmakayaResponse
     * @static
     * @param {IRoleDharmakayaResponse} m RoleDharmakayaResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoleDharmakayaResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.dharmakayaLevel != null && Object.hasOwnProperty.call(m, "dharmakayaLevel"))
            w.uint32(8).int32(m.dharmakayaLevel);
        if (m.upgradePowerAsk != null && Object.hasOwnProperty.call(m, "upgradePowerAsk"))
            w.uint32(16).int32(m.upgradePowerAsk);
        if (m.attributeAddition != null && Object.hasOwnProperty.call(m, "attributeAddition"))
            $root.RoleAttribute.encode(m.attributeAddition, w.uint32(26).fork()).ldelim();
        return w;
    };

    /**
     * Encodes the specified RoleDharmakayaResponse message, length delimited. Does not implicitly {@link RoleDharmakayaResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RoleDharmakayaResponse
     * @static
     * @param {IRoleDharmakayaResponse} message RoleDharmakayaResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoleDharmakayaResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RoleDharmakayaResponse message from the specified reader or buffer.
     * @function decode
     * @memberof RoleDharmakayaResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RoleDharmakayaResponse} RoleDharmakayaResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoleDharmakayaResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RoleDharmakayaResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.dharmakayaLevel = r.int32();
                break;
            case 2:
                m.upgradePowerAsk = r.int32();
                break;
            case 3:
                m.attributeAddition = $root.RoleAttribute.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a RoleDharmakayaResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RoleDharmakayaResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RoleDharmakayaResponse} RoleDharmakayaResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoleDharmakayaResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RoleDharmakayaResponse message.
     * @function verify
     * @memberof RoleDharmakayaResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RoleDharmakayaResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.dharmakayaLevel != null && m.hasOwnProperty("dharmakayaLevel")) {
            if (!$util.isInteger(m.dharmakayaLevel))
                return "dharmakayaLevel: integer expected";
        }
        if (m.upgradePowerAsk != null && m.hasOwnProperty("upgradePowerAsk")) {
            if (!$util.isInteger(m.upgradePowerAsk))
                return "upgradePowerAsk: integer expected";
        }
        if (m.attributeAddition != null && m.hasOwnProperty("attributeAddition")) {
            {
                var e = $root.RoleAttribute.verify(m.attributeAddition);
                if (e)
                    return "attributeAddition." + e;
            }
        }
        return null;
    };

    return RoleDharmakayaResponse;
})();

export const AttributeUpgradeRequest = $root.AttributeUpgradeRequest = (() => {

    AttributeUpgradeRequest.prototype.classname = 'AttributeUpgradeRequest';

    /**
     * Properties of an AttributeUpgradeRequest.
     * @exports IAttributeUpgradeRequest
     * @interface IAttributeUpgradeRequest
     */

    /**
     * Constructs a new AttributeUpgradeRequest.
     * @exports AttributeUpgradeRequest
     * @classdesc Represents an AttributeUpgradeRequest.
     * @implements IAttributeUpgradeRequest
     * @constructor
     * @param {IAttributeUpgradeRequest=} [p] Properties to set
     */
    function AttributeUpgradeRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new AttributeUpgradeRequest instance using the specified properties.
     * @function create
     * @memberof AttributeUpgradeRequest
     * @static
     * @param {IAttributeUpgradeRequest=} [properties] Properties to set
     * @returns {AttributeUpgradeRequest} AttributeUpgradeRequest instance
     */
    AttributeUpgradeRequest.create = function create(properties) {
        return new AttributeUpgradeRequest(properties);
    };

    /**
     * Encodes the specified AttributeUpgradeRequest message. Does not implicitly {@link AttributeUpgradeRequest.verify|verify} messages.
     * @function encode
     * @memberof AttributeUpgradeRequest
     * @static
     * @param {IAttributeUpgradeRequest} m AttributeUpgradeRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AttributeUpgradeRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Encodes the specified AttributeUpgradeRequest message, length delimited. Does not implicitly {@link AttributeUpgradeRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AttributeUpgradeRequest
     * @static
     * @param {IAttributeUpgradeRequest} message AttributeUpgradeRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AttributeUpgradeRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AttributeUpgradeRequest message from the specified reader or buffer.
     * @function decode
     * @memberof AttributeUpgradeRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {AttributeUpgradeRequest} AttributeUpgradeRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AttributeUpgradeRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.AttributeUpgradeRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes an AttributeUpgradeRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AttributeUpgradeRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AttributeUpgradeRequest} AttributeUpgradeRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AttributeUpgradeRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AttributeUpgradeRequest message.
     * @function verify
     * @memberof AttributeUpgradeRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AttributeUpgradeRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        return null;
    };

    return AttributeUpgradeRequest;
})();

export const AttributeUpgradeResponse = $root.AttributeUpgradeResponse = (() => {

    AttributeUpgradeResponse.prototype.classname = 'AttributeUpgradeResponse';

    /**
     * Properties of an AttributeUpgradeResponse.
     * @exports IAttributeUpgradeResponse
     * @interface IAttributeUpgradeResponse
     * @property {boolean|null} [isSuccess] AttributeUpgradeResponse isSuccess
     * @property {number|null} [upgradeLevel] AttributeUpgradeResponse upgradeLevel
     * @property {IRoleAttribute|null} [attributeAddition] AttributeUpgradeResponse attributeAddition
     */

    /**
     * Constructs a new AttributeUpgradeResponse.
     * @exports AttributeUpgradeResponse
     * @classdesc Represents an AttributeUpgradeResponse.
     * @implements IAttributeUpgradeResponse
     * @constructor
     * @param {IAttributeUpgradeResponse=} [p] Properties to set
     */
    function AttributeUpgradeResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * AttributeUpgradeResponse isSuccess.
     * @member {boolean} isSuccess
     * @memberof AttributeUpgradeResponse
     * @instance
     */
    AttributeUpgradeResponse.prototype.isSuccess = false;

    /**
     * AttributeUpgradeResponse upgradeLevel.
     * @member {number} upgradeLevel
     * @memberof AttributeUpgradeResponse
     * @instance
     */
    AttributeUpgradeResponse.prototype.upgradeLevel = 0;

    /**
     * AttributeUpgradeResponse attributeAddition.
     * @member {IRoleAttribute|null|undefined} attributeAddition
     * @memberof AttributeUpgradeResponse
     * @instance
     */
    AttributeUpgradeResponse.prototype.attributeAddition = null;

    /**
     * Creates a new AttributeUpgradeResponse instance using the specified properties.
     * @function create
     * @memberof AttributeUpgradeResponse
     * @static
     * @param {IAttributeUpgradeResponse=} [properties] Properties to set
     * @returns {AttributeUpgradeResponse} AttributeUpgradeResponse instance
     */
    AttributeUpgradeResponse.create = function create(properties) {
        return new AttributeUpgradeResponse(properties);
    };

    /**
     * Encodes the specified AttributeUpgradeResponse message. Does not implicitly {@link AttributeUpgradeResponse.verify|verify} messages.
     * @function encode
     * @memberof AttributeUpgradeResponse
     * @static
     * @param {IAttributeUpgradeResponse} m AttributeUpgradeResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AttributeUpgradeResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.isSuccess != null && Object.hasOwnProperty.call(m, "isSuccess"))
            w.uint32(8).bool(m.isSuccess);
        if (m.upgradeLevel != null && Object.hasOwnProperty.call(m, "upgradeLevel"))
            w.uint32(16).int32(m.upgradeLevel);
        if (m.attributeAddition != null && Object.hasOwnProperty.call(m, "attributeAddition"))
            $root.RoleAttribute.encode(m.attributeAddition, w.uint32(26).fork()).ldelim();
        return w;
    };

    /**
     * Encodes the specified AttributeUpgradeResponse message, length delimited. Does not implicitly {@link AttributeUpgradeResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AttributeUpgradeResponse
     * @static
     * @param {IAttributeUpgradeResponse} message AttributeUpgradeResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AttributeUpgradeResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AttributeUpgradeResponse message from the specified reader or buffer.
     * @function decode
     * @memberof AttributeUpgradeResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {AttributeUpgradeResponse} AttributeUpgradeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AttributeUpgradeResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.AttributeUpgradeResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.isSuccess = r.bool();
                break;
            case 2:
                m.upgradeLevel = r.int32();
                break;
            case 3:
                m.attributeAddition = $root.RoleAttribute.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes an AttributeUpgradeResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AttributeUpgradeResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AttributeUpgradeResponse} AttributeUpgradeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AttributeUpgradeResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AttributeUpgradeResponse message.
     * @function verify
     * @memberof AttributeUpgradeResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AttributeUpgradeResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.isSuccess != null && m.hasOwnProperty("isSuccess")) {
            if (typeof m.isSuccess !== "boolean")
                return "isSuccess: boolean expected";
        }
        if (m.upgradeLevel != null && m.hasOwnProperty("upgradeLevel")) {
            if (!$util.isInteger(m.upgradeLevel))
                return "upgradeLevel: integer expected";
        }
        if (m.attributeAddition != null && m.hasOwnProperty("attributeAddition")) {
            {
                var e = $root.RoleAttribute.verify(m.attributeAddition);
                if (e)
                    return "attributeAddition." + e;
            }
        }
        return null;
    };

    return AttributeUpgradeResponse;
})();

export const DharmakayaUpgradeRequest = $root.DharmakayaUpgradeRequest = (() => {

    DharmakayaUpgradeRequest.prototype.classname = 'DharmakayaUpgradeRequest';

    /**
     * Properties of a DharmakayaUpgradeRequest.
     * @exports IDharmakayaUpgradeRequest
     * @interface IDharmakayaUpgradeRequest
     */

    /**
     * Constructs a new DharmakayaUpgradeRequest.
     * @exports DharmakayaUpgradeRequest
     * @classdesc Represents a DharmakayaUpgradeRequest.
     * @implements IDharmakayaUpgradeRequest
     * @constructor
     * @param {IDharmakayaUpgradeRequest=} [p] Properties to set
     */
    function DharmakayaUpgradeRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new DharmakayaUpgradeRequest instance using the specified properties.
     * @function create
     * @memberof DharmakayaUpgradeRequest
     * @static
     * @param {IDharmakayaUpgradeRequest=} [properties] Properties to set
     * @returns {DharmakayaUpgradeRequest} DharmakayaUpgradeRequest instance
     */
    DharmakayaUpgradeRequest.create = function create(properties) {
        return new DharmakayaUpgradeRequest(properties);
    };

    /**
     * Encodes the specified DharmakayaUpgradeRequest message. Does not implicitly {@link DharmakayaUpgradeRequest.verify|verify} messages.
     * @function encode
     * @memberof DharmakayaUpgradeRequest
     * @static
     * @param {IDharmakayaUpgradeRequest} m DharmakayaUpgradeRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DharmakayaUpgradeRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Encodes the specified DharmakayaUpgradeRequest message, length delimited. Does not implicitly {@link DharmakayaUpgradeRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DharmakayaUpgradeRequest
     * @static
     * @param {IDharmakayaUpgradeRequest} message DharmakayaUpgradeRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DharmakayaUpgradeRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DharmakayaUpgradeRequest message from the specified reader or buffer.
     * @function decode
     * @memberof DharmakayaUpgradeRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {DharmakayaUpgradeRequest} DharmakayaUpgradeRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DharmakayaUpgradeRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.DharmakayaUpgradeRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a DharmakayaUpgradeRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DharmakayaUpgradeRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DharmakayaUpgradeRequest} DharmakayaUpgradeRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DharmakayaUpgradeRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DharmakayaUpgradeRequest message.
     * @function verify
     * @memberof DharmakayaUpgradeRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DharmakayaUpgradeRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        return null;
    };

    return DharmakayaUpgradeRequest;
})();

export const DharmakayaUpgradeResponse = $root.DharmakayaUpgradeResponse = (() => {

    DharmakayaUpgradeResponse.prototype.classname = 'DharmakayaUpgradeResponse';

    /**
     * Properties of a DharmakayaUpgradeResponse.
     * @exports IDharmakayaUpgradeResponse
     * @interface IDharmakayaUpgradeResponse
     */

    /**
     * Constructs a new DharmakayaUpgradeResponse.
     * @exports DharmakayaUpgradeResponse
     * @classdesc Represents a DharmakayaUpgradeResponse.
     * @implements IDharmakayaUpgradeResponse
     * @constructor
     * @param {IDharmakayaUpgradeResponse=} [p] Properties to set
     */
    function DharmakayaUpgradeResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new DharmakayaUpgradeResponse instance using the specified properties.
     * @function create
     * @memberof DharmakayaUpgradeResponse
     * @static
     * @param {IDharmakayaUpgradeResponse=} [properties] Properties to set
     * @returns {DharmakayaUpgradeResponse} DharmakayaUpgradeResponse instance
     */
    DharmakayaUpgradeResponse.create = function create(properties) {
        return new DharmakayaUpgradeResponse(properties);
    };

    /**
     * Encodes the specified DharmakayaUpgradeResponse message. Does not implicitly {@link DharmakayaUpgradeResponse.verify|verify} messages.
     * @function encode
     * @memberof DharmakayaUpgradeResponse
     * @static
     * @param {IDharmakayaUpgradeResponse} m DharmakayaUpgradeResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DharmakayaUpgradeResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Encodes the specified DharmakayaUpgradeResponse message, length delimited. Does not implicitly {@link DharmakayaUpgradeResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DharmakayaUpgradeResponse
     * @static
     * @param {IDharmakayaUpgradeResponse} message DharmakayaUpgradeResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DharmakayaUpgradeResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DharmakayaUpgradeResponse message from the specified reader or buffer.
     * @function decode
     * @memberof DharmakayaUpgradeResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {DharmakayaUpgradeResponse} DharmakayaUpgradeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DharmakayaUpgradeResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.DharmakayaUpgradeResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a DharmakayaUpgradeResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DharmakayaUpgradeResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DharmakayaUpgradeResponse} DharmakayaUpgradeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DharmakayaUpgradeResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DharmakayaUpgradeResponse message.
     * @function verify
     * @memberof DharmakayaUpgradeResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DharmakayaUpgradeResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        return null;
    };

    return DharmakayaUpgradeResponse;
})();

export const BattleSettlementResponse = $root.BattleSettlementResponse = (() => {

    BattleSettlementResponse.prototype.classname = 'BattleSettlementResponse';

    /**
     * Properties of a BattleSettlementResponse.
     * @exports IBattleSettlementResponse
     * @interface IBattleSettlementResponse
     * @property {boolean|null} [isNestLevel] BattleSettlementResponse isNestLevel
     * @property {number|null} [nestLevel] BattleSettlementResponse nestLevel
     * @property {Array.<IItemInfo>|null} [items] BattleSettlementResponse items
     */

    /**
     * Constructs a new BattleSettlementResponse.
     * @exports BattleSettlementResponse
     * @classdesc Represents a BattleSettlementResponse.
     * @implements IBattleSettlementResponse
     * @constructor
     * @param {IBattleSettlementResponse=} [p] Properties to set
     */
    function BattleSettlementResponse(p) {
        this.items = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BattleSettlementResponse isNestLevel.
     * @member {boolean} isNestLevel
     * @memberof BattleSettlementResponse
     * @instance
     */
    BattleSettlementResponse.prototype.isNestLevel = false;

    /**
     * BattleSettlementResponse nestLevel.
     * @member {number} nestLevel
     * @memberof BattleSettlementResponse
     * @instance
     */
    BattleSettlementResponse.prototype.nestLevel = 0;

    /**
     * BattleSettlementResponse items.
     * @member {Array.<IItemInfo>} items
     * @memberof BattleSettlementResponse
     * @instance
     */
    BattleSettlementResponse.prototype.items = $util.emptyArray;

    /**
     * Creates a new BattleSettlementResponse instance using the specified properties.
     * @function create
     * @memberof BattleSettlementResponse
     * @static
     * @param {IBattleSettlementResponse=} [properties] Properties to set
     * @returns {BattleSettlementResponse} BattleSettlementResponse instance
     */
    BattleSettlementResponse.create = function create(properties) {
        return new BattleSettlementResponse(properties);
    };

    /**
     * Encodes the specified BattleSettlementResponse message. Does not implicitly {@link BattleSettlementResponse.verify|verify} messages.
     * @function encode
     * @memberof BattleSettlementResponse
     * @static
     * @param {IBattleSettlementResponse} m BattleSettlementResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BattleSettlementResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.isNestLevel != null && Object.hasOwnProperty.call(m, "isNestLevel"))
            w.uint32(8).bool(m.isNestLevel);
        if (m.nestLevel != null && Object.hasOwnProperty.call(m, "nestLevel"))
            w.uint32(16).int32(m.nestLevel);
        if (m.items != null && m.items.length) {
            for (var i = 0; i < m.items.length; ++i)
                $root.ItemInfo.encode(m.items[i], w.uint32(26).fork()).ldelim();
        }
        return w;
    };

    /**
     * Encodes the specified BattleSettlementResponse message, length delimited. Does not implicitly {@link BattleSettlementResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BattleSettlementResponse
     * @static
     * @param {IBattleSettlementResponse} message BattleSettlementResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BattleSettlementResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BattleSettlementResponse message from the specified reader or buffer.
     * @function decode
     * @memberof BattleSettlementResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BattleSettlementResponse} BattleSettlementResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BattleSettlementResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BattleSettlementResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.isNestLevel = r.bool();
                break;
            case 2:
                m.nestLevel = r.int32();
                break;
            case 3:
                if (!(m.items && m.items.length))
                    m.items = [];
                m.items.push($root.ItemInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a BattleSettlementResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BattleSettlementResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BattleSettlementResponse} BattleSettlementResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BattleSettlementResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BattleSettlementResponse message.
     * @function verify
     * @memberof BattleSettlementResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BattleSettlementResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.isNestLevel != null && m.hasOwnProperty("isNestLevel")) {
            if (typeof m.isNestLevel !== "boolean")
                return "isNestLevel: boolean expected";
        }
        if (m.nestLevel != null && m.hasOwnProperty("nestLevel")) {
            if (!$util.isInteger(m.nestLevel))
                return "nestLevel: integer expected";
        }
        if (m.items != null && m.hasOwnProperty("items")) {
            if (!Array.isArray(m.items))
                return "items: array expected";
            for (var i = 0; i < m.items.length; ++i) {
                {
                    var e = $root.ItemInfo.verify(m.items[i]);
                    if (e)
                        return "items." + e;
                }
            }
        }
        return null;
    };

    return BattleSettlementResponse;
})();

export const BattleSettlementRequest = $root.BattleSettlementRequest = (() => {

    BattleSettlementRequest.prototype.classname = 'BattleSettlementRequest';

    /**
     * Properties of a BattleSettlementRequest.
     * @exports IBattleSettlementRequest
     * @interface IBattleSettlementRequest
     * @property {number|Long|null} [battleId] BattleSettlementRequest battleId
     * @property {boolean|null} [isPassThrough] BattleSettlementRequest isPassThrough
     */

    /**
     * Constructs a new BattleSettlementRequest.
     * @exports BattleSettlementRequest
     * @classdesc Represents a BattleSettlementRequest.
     * @implements IBattleSettlementRequest
     * @constructor
     * @param {IBattleSettlementRequest=} [p] Properties to set
     */
    function BattleSettlementRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BattleSettlementRequest battleId.
     * @member {number|Long} battleId
     * @memberof BattleSettlementRequest
     * @instance
     */
    BattleSettlementRequest.prototype.battleId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * BattleSettlementRequest isPassThrough.
     * @member {boolean} isPassThrough
     * @memberof BattleSettlementRequest
     * @instance
     */
    BattleSettlementRequest.prototype.isPassThrough = false;

    /**
     * Creates a new BattleSettlementRequest instance using the specified properties.
     * @function create
     * @memberof BattleSettlementRequest
     * @static
     * @param {IBattleSettlementRequest=} [properties] Properties to set
     * @returns {BattleSettlementRequest} BattleSettlementRequest instance
     */
    BattleSettlementRequest.create = function create(properties) {
        return new BattleSettlementRequest(properties);
    };

    /**
     * Encodes the specified BattleSettlementRequest message. Does not implicitly {@link BattleSettlementRequest.verify|verify} messages.
     * @function encode
     * @memberof BattleSettlementRequest
     * @static
     * @param {IBattleSettlementRequest} m BattleSettlementRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BattleSettlementRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.battleId != null && Object.hasOwnProperty.call(m, "battleId"))
            w.uint32(8).int64(m.battleId);
        if (m.isPassThrough != null && Object.hasOwnProperty.call(m, "isPassThrough"))
            w.uint32(16).bool(m.isPassThrough);
        return w;
    };

    /**
     * Encodes the specified BattleSettlementRequest message, length delimited. Does not implicitly {@link BattleSettlementRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BattleSettlementRequest
     * @static
     * @param {IBattleSettlementRequest} message BattleSettlementRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BattleSettlementRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BattleSettlementRequest message from the specified reader or buffer.
     * @function decode
     * @memberof BattleSettlementRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BattleSettlementRequest} BattleSettlementRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BattleSettlementRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BattleSettlementRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.battleId = r.int64();
                break;
            case 2:
                m.isPassThrough = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a BattleSettlementRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BattleSettlementRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BattleSettlementRequest} BattleSettlementRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BattleSettlementRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BattleSettlementRequest message.
     * @function verify
     * @memberof BattleSettlementRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BattleSettlementRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.battleId != null && m.hasOwnProperty("battleId")) {
            if (!$util.isInteger(m.battleId) && !(m.battleId && $util.isInteger(m.battleId.low) && $util.isInteger(m.battleId.high)))
                return "battleId: integer|Long expected";
        }
        if (m.isPassThrough != null && m.hasOwnProperty("isPassThrough")) {
            if (typeof m.isPassThrough !== "boolean")
                return "isPassThrough: boolean expected";
        }
        return null;
    };

    return BattleSettlementRequest;
})();

export const BattleBeginRequest = $root.BattleBeginRequest = (() => {

    BattleBeginRequest.prototype.classname = 'BattleBeginRequest';

    /**
     * Properties of a BattleBeginRequest.
     * @exports IBattleBeginRequest
     * @interface IBattleBeginRequest
     * @property {GameCopyType|null} [gameCopyType] BattleBeginRequest gameCopyType
     * @property {number|null} [reChallenge] BattleBeginRequest reChallenge
     * @property {number|null} [mysteryId] BattleBeginRequest mysteryId
     */

    /**
     * Constructs a new BattleBeginRequest.
     * @exports BattleBeginRequest
     * @classdesc Represents a BattleBeginRequest.
     * @implements IBattleBeginRequest
     * @constructor
     * @param {IBattleBeginRequest=} [p] Properties to set
     */
    function BattleBeginRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BattleBeginRequest gameCopyType.
     * @member {GameCopyType} gameCopyType
     * @memberof BattleBeginRequest
     * @instance
     */
    BattleBeginRequest.prototype.gameCopyType = 0;

    /**
     * BattleBeginRequest reChallenge.
     * @member {number} reChallenge
     * @memberof BattleBeginRequest
     * @instance
     */
    BattleBeginRequest.prototype.reChallenge = 0;

    /**
     * BattleBeginRequest mysteryId.
     * @member {number} mysteryId
     * @memberof BattleBeginRequest
     * @instance
     */
    BattleBeginRequest.prototype.mysteryId = 0;

    /**
     * Creates a new BattleBeginRequest instance using the specified properties.
     * @function create
     * @memberof BattleBeginRequest
     * @static
     * @param {IBattleBeginRequest=} [properties] Properties to set
     * @returns {BattleBeginRequest} BattleBeginRequest instance
     */
    BattleBeginRequest.create = function create(properties) {
        return new BattleBeginRequest(properties);
    };

    /**
     * Encodes the specified BattleBeginRequest message. Does not implicitly {@link BattleBeginRequest.verify|verify} messages.
     * @function encode
     * @memberof BattleBeginRequest
     * @static
     * @param {IBattleBeginRequest} m BattleBeginRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BattleBeginRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameCopyType != null && Object.hasOwnProperty.call(m, "gameCopyType"))
            w.uint32(8).int32(m.gameCopyType);
        if (m.reChallenge != null && Object.hasOwnProperty.call(m, "reChallenge"))
            w.uint32(16).int32(m.reChallenge);
        if (m.mysteryId != null && Object.hasOwnProperty.call(m, "mysteryId"))
            w.uint32(24).int32(m.mysteryId);
        return w;
    };

    /**
     * Encodes the specified BattleBeginRequest message, length delimited. Does not implicitly {@link BattleBeginRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BattleBeginRequest
     * @static
     * @param {IBattleBeginRequest} message BattleBeginRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BattleBeginRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BattleBeginRequest message from the specified reader or buffer.
     * @function decode
     * @memberof BattleBeginRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BattleBeginRequest} BattleBeginRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BattleBeginRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BattleBeginRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameCopyType = r.int32();
                break;
            case 2:
                m.reChallenge = r.int32();
                break;
            case 3:
                m.mysteryId = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a BattleBeginRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BattleBeginRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BattleBeginRequest} BattleBeginRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BattleBeginRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BattleBeginRequest message.
     * @function verify
     * @memberof BattleBeginRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BattleBeginRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.gameCopyType != null && m.hasOwnProperty("gameCopyType")) {
            switch (m.gameCopyType) {
            default:
                return "gameCopyType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
        }
        if (m.reChallenge != null && m.hasOwnProperty("reChallenge")) {
            if (!$util.isInteger(m.reChallenge))
                return "reChallenge: integer expected";
        }
        if (m.mysteryId != null && m.hasOwnProperty("mysteryId")) {
            if (!$util.isInteger(m.mysteryId))
                return "mysteryId: integer expected";
        }
        return null;
    };

    return BattleBeginRequest;
})();

export const BattleBeginResponse = $root.BattleBeginResponse = (() => {

    BattleBeginResponse.prototype.classname = 'BattleBeginResponse';

    /**
     * Properties of a BattleBeginResponse.
     * @exports IBattleBeginResponse
     * @interface IBattleBeginResponse
     * @property {number|Long|null} [battleId] BattleBeginResponse battleId
     * @property {number|null} [currentLevel] BattleBeginResponse currentLevel
     * @property {IRoleAttribute|null} [RoleAttribute] BattleBeginResponse RoleAttribute
     * @property {Array.<number>|null} [skills] BattleBeginResponse skills
     * @property {number|null} [monsterElement] BattleBeginResponse monsterElement
     * @property {number|null} [bossElement] BattleBeginResponse bossElement
     * @property {GameCopyType|null} [gameCopyType] BattleBeginResponse gameCopyType
     */

    /**
     * Constructs a new BattleBeginResponse.
     * @exports BattleBeginResponse
     * @classdesc Represents a BattleBeginResponse.
     * @implements IBattleBeginResponse
     * @constructor
     * @param {IBattleBeginResponse=} [p] Properties to set
     */
    function BattleBeginResponse(p) {
        this.skills = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BattleBeginResponse battleId.
     * @member {number|Long} battleId
     * @memberof BattleBeginResponse
     * @instance
     */
    BattleBeginResponse.prototype.battleId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * BattleBeginResponse currentLevel.
     * @member {number} currentLevel
     * @memberof BattleBeginResponse
     * @instance
     */
    BattleBeginResponse.prototype.currentLevel = 0;

    /**
     * BattleBeginResponse RoleAttribute.
     * @member {IRoleAttribute|null|undefined} RoleAttribute
     * @memberof BattleBeginResponse
     * @instance
     */
    BattleBeginResponse.prototype.RoleAttribute = null;

    /**
     * BattleBeginResponse skills.
     * @member {Array.<number>} skills
     * @memberof BattleBeginResponse
     * @instance
     */
    BattleBeginResponse.prototype.skills = $util.emptyArray;

    /**
     * BattleBeginResponse monsterElement.
     * @member {number} monsterElement
     * @memberof BattleBeginResponse
     * @instance
     */
    BattleBeginResponse.prototype.monsterElement = 0;

    /**
     * BattleBeginResponse bossElement.
     * @member {number} bossElement
     * @memberof BattleBeginResponse
     * @instance
     */
    BattleBeginResponse.prototype.bossElement = 0;

    /**
     * BattleBeginResponse gameCopyType.
     * @member {GameCopyType} gameCopyType
     * @memberof BattleBeginResponse
     * @instance
     */
    BattleBeginResponse.prototype.gameCopyType = 0;

    /**
     * Creates a new BattleBeginResponse instance using the specified properties.
     * @function create
     * @memberof BattleBeginResponse
     * @static
     * @param {IBattleBeginResponse=} [properties] Properties to set
     * @returns {BattleBeginResponse} BattleBeginResponse instance
     */
    BattleBeginResponse.create = function create(properties) {
        return new BattleBeginResponse(properties);
    };

    /**
     * Encodes the specified BattleBeginResponse message. Does not implicitly {@link BattleBeginResponse.verify|verify} messages.
     * @function encode
     * @memberof BattleBeginResponse
     * @static
     * @param {IBattleBeginResponse} m BattleBeginResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BattleBeginResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.battleId != null && Object.hasOwnProperty.call(m, "battleId"))
            w.uint32(8).int64(m.battleId);
        if (m.currentLevel != null && Object.hasOwnProperty.call(m, "currentLevel"))
            w.uint32(16).int32(m.currentLevel);
        if (m.RoleAttribute != null && Object.hasOwnProperty.call(m, "RoleAttribute"))
            $root.RoleAttribute.encode(m.RoleAttribute, w.uint32(26).fork()).ldelim();
        if (m.skills != null && m.skills.length) {
            w.uint32(34).fork();
            for (var i = 0; i < m.skills.length; ++i)
                w.int32(m.skills[i]);
            w.ldelim();
        }
        if (m.monsterElement != null && Object.hasOwnProperty.call(m, "monsterElement"))
            w.uint32(40).int32(m.monsterElement);
        if (m.bossElement != null && Object.hasOwnProperty.call(m, "bossElement"))
            w.uint32(48).int32(m.bossElement);
        if (m.gameCopyType != null && Object.hasOwnProperty.call(m, "gameCopyType"))
            w.uint32(56).int32(m.gameCopyType);
        return w;
    };

    /**
     * Encodes the specified BattleBeginResponse message, length delimited. Does not implicitly {@link BattleBeginResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BattleBeginResponse
     * @static
     * @param {IBattleBeginResponse} message BattleBeginResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BattleBeginResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BattleBeginResponse message from the specified reader or buffer.
     * @function decode
     * @memberof BattleBeginResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BattleBeginResponse} BattleBeginResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BattleBeginResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BattleBeginResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.battleId = r.int64();
                break;
            case 2:
                m.currentLevel = r.int32();
                break;
            case 3:
                m.RoleAttribute = $root.RoleAttribute.decode(r, r.uint32());
                break;
            case 4:
                if (!(m.skills && m.skills.length))
                    m.skills = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.skills.push(r.int32());
                } else
                    m.skills.push(r.int32());
                break;
            case 5:
                m.monsterElement = r.int32();
                break;
            case 6:
                m.bossElement = r.int32();
                break;
            case 7:
                m.gameCopyType = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a BattleBeginResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BattleBeginResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BattleBeginResponse} BattleBeginResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BattleBeginResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BattleBeginResponse message.
     * @function verify
     * @memberof BattleBeginResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BattleBeginResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.battleId != null && m.hasOwnProperty("battleId")) {
            if (!$util.isInteger(m.battleId) && !(m.battleId && $util.isInteger(m.battleId.low) && $util.isInteger(m.battleId.high)))
                return "battleId: integer|Long expected";
        }
        if (m.currentLevel != null && m.hasOwnProperty("currentLevel")) {
            if (!$util.isInteger(m.currentLevel))
                return "currentLevel: integer expected";
        }
        if (m.RoleAttribute != null && m.hasOwnProperty("RoleAttribute")) {
            {
                var e = $root.RoleAttribute.verify(m.RoleAttribute);
                if (e)
                    return "RoleAttribute." + e;
            }
        }
        if (m.skills != null && m.hasOwnProperty("skills")) {
            if (!Array.isArray(m.skills))
                return "skills: array expected";
            for (var i = 0; i < m.skills.length; ++i) {
                if (!$util.isInteger(m.skills[i]))
                    return "skills: integer[] expected";
            }
        }
        if (m.monsterElement != null && m.hasOwnProperty("monsterElement")) {
            if (!$util.isInteger(m.monsterElement))
                return "monsterElement: integer expected";
        }
        if (m.bossElement != null && m.hasOwnProperty("bossElement")) {
            if (!$util.isInteger(m.bossElement))
                return "bossElement: integer expected";
        }
        if (m.gameCopyType != null && m.hasOwnProperty("gameCopyType")) {
            switch (m.gameCopyType) {
            default:
                return "gameCopyType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
        }
        return null;
    };

    return BattleBeginResponse;
})();

export const AttackInfo = $root.AttackInfo = (() => {

    AttackInfo.prototype.classname = 'AttackInfo';

    /**
     * Properties of an AttackInfo.
     * @exports IAttackInfo
     * @interface IAttackInfo
     * @property {number|null} [skill_id] AttackInfo skill_id
     * @property {number|null} [hurt] AttackInfo hurt
     */

    /**
     * Constructs a new AttackInfo.
     * @exports AttackInfo
     * @classdesc Represents an AttackInfo.
     * @implements IAttackInfo
     * @constructor
     * @param {IAttackInfo=} [p] Properties to set
     */
    function AttackInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * AttackInfo skill_id.
     * @member {number} skill_id
     * @memberof AttackInfo
     * @instance
     */
    AttackInfo.prototype.skill_id = 0;

    /**
     * AttackInfo hurt.
     * @member {number} hurt
     * @memberof AttackInfo
     * @instance
     */
    AttackInfo.prototype.hurt = 0;

    /**
     * Creates a new AttackInfo instance using the specified properties.
     * @function create
     * @memberof AttackInfo
     * @static
     * @param {IAttackInfo=} [properties] Properties to set
     * @returns {AttackInfo} AttackInfo instance
     */
    AttackInfo.create = function create(properties) {
        return new AttackInfo(properties);
    };

    /**
     * Encodes the specified AttackInfo message. Does not implicitly {@link AttackInfo.verify|verify} messages.
     * @function encode
     * @memberof AttackInfo
     * @static
     * @param {IAttackInfo} m AttackInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AttackInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.skill_id != null && Object.hasOwnProperty.call(m, "skill_id"))
            w.uint32(8).int32(m.skill_id);
        if (m.hurt != null && Object.hasOwnProperty.call(m, "hurt"))
            w.uint32(16).int32(m.hurt);
        return w;
    };

    /**
     * Encodes the specified AttackInfo message, length delimited. Does not implicitly {@link AttackInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AttackInfo
     * @static
     * @param {IAttackInfo} message AttackInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AttackInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AttackInfo message from the specified reader or buffer.
     * @function decode
     * @memberof AttackInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {AttackInfo} AttackInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AttackInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.AttackInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.skill_id = r.int32();
                break;
            case 2:
                m.hurt = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes an AttackInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AttackInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AttackInfo} AttackInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AttackInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AttackInfo message.
     * @function verify
     * @memberof AttackInfo
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AttackInfo.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.skill_id != null && m.hasOwnProperty("skill_id")) {
            if (!$util.isInteger(m.skill_id))
                return "skill_id: integer expected";
        }
        if (m.hurt != null && m.hasOwnProperty("hurt")) {
            if (!$util.isInteger(m.hurt))
                return "hurt: integer expected";
        }
        return null;
    };

    return AttackInfo;
})();

export const BattleReportRequest = $root.BattleReportRequest = (() => {

    BattleReportRequest.prototype.classname = 'BattleReportRequest';

    /**
     * Properties of a BattleReportRequest.
     * @exports IBattleReportRequest
     * @interface IBattleReportRequest
     * @property {Array.<IAttackInfo>|null} [attackInfos] BattleReportRequest attackInfos
     * @property {number|Long|null} [battleId] BattleReportRequest battleId
     */

    /**
     * Constructs a new BattleReportRequest.
     * @exports BattleReportRequest
     * @classdesc Represents a BattleReportRequest.
     * @implements IBattleReportRequest
     * @constructor
     * @param {IBattleReportRequest=} [p] Properties to set
     */
    function BattleReportRequest(p) {
        this.attackInfos = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BattleReportRequest attackInfos.
     * @member {Array.<IAttackInfo>} attackInfos
     * @memberof BattleReportRequest
     * @instance
     */
    BattleReportRequest.prototype.attackInfos = $util.emptyArray;

    /**
     * BattleReportRequest battleId.
     * @member {number|Long} battleId
     * @memberof BattleReportRequest
     * @instance
     */
    BattleReportRequest.prototype.battleId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new BattleReportRequest instance using the specified properties.
     * @function create
     * @memberof BattleReportRequest
     * @static
     * @param {IBattleReportRequest=} [properties] Properties to set
     * @returns {BattleReportRequest} BattleReportRequest instance
     */
    BattleReportRequest.create = function create(properties) {
        return new BattleReportRequest(properties);
    };

    /**
     * Encodes the specified BattleReportRequest message. Does not implicitly {@link BattleReportRequest.verify|verify} messages.
     * @function encode
     * @memberof BattleReportRequest
     * @static
     * @param {IBattleReportRequest} m BattleReportRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BattleReportRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.attackInfos != null && m.attackInfos.length) {
            for (var i = 0; i < m.attackInfos.length; ++i)
                $root.AttackInfo.encode(m.attackInfos[i], w.uint32(10).fork()).ldelim();
        }
        if (m.battleId != null && Object.hasOwnProperty.call(m, "battleId"))
            w.uint32(16).int64(m.battleId);
        return w;
    };

    /**
     * Encodes the specified BattleReportRequest message, length delimited. Does not implicitly {@link BattleReportRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BattleReportRequest
     * @static
     * @param {IBattleReportRequest} message BattleReportRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BattleReportRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BattleReportRequest message from the specified reader or buffer.
     * @function decode
     * @memberof BattleReportRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BattleReportRequest} BattleReportRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BattleReportRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BattleReportRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.attackInfos && m.attackInfos.length))
                    m.attackInfos = [];
                m.attackInfos.push($root.AttackInfo.decode(r, r.uint32()));
                break;
            case 2:
                m.battleId = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a BattleReportRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BattleReportRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BattleReportRequest} BattleReportRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BattleReportRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BattleReportRequest message.
     * @function verify
     * @memberof BattleReportRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BattleReportRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.attackInfos != null && m.hasOwnProperty("attackInfos")) {
            if (!Array.isArray(m.attackInfos))
                return "attackInfos: array expected";
            for (var i = 0; i < m.attackInfos.length; ++i) {
                {
                    var e = $root.AttackInfo.verify(m.attackInfos[i]);
                    if (e)
                        return "attackInfos." + e;
                }
            }
        }
        if (m.battleId != null && m.hasOwnProperty("battleId")) {
            if (!$util.isInteger(m.battleId) && !(m.battleId && $util.isInteger(m.battleId.low) && $util.isInteger(m.battleId.high)))
                return "battleId: integer|Long expected";
        }
        return null;
    };

    return BattleReportRequest;
})();

export const BattleReportResponse = $root.BattleReportResponse = (() => {

    BattleReportResponse.prototype.classname = 'BattleReportResponse';

    /**
     * Properties of a BattleReportResponse.
     * @exports IBattleReportResponse
     * @interface IBattleReportResponse
     * @property {Array.<IItemInfo>|null} [items] BattleReportResponse items
     */

    /**
     * Constructs a new BattleReportResponse.
     * @exports BattleReportResponse
     * @classdesc Represents a BattleReportResponse.
     * @implements IBattleReportResponse
     * @constructor
     * @param {IBattleReportResponse=} [p] Properties to set
     */
    function BattleReportResponse(p) {
        this.items = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BattleReportResponse items.
     * @member {Array.<IItemInfo>} items
     * @memberof BattleReportResponse
     * @instance
     */
    BattleReportResponse.prototype.items = $util.emptyArray;

    /**
     * Creates a new BattleReportResponse instance using the specified properties.
     * @function create
     * @memberof BattleReportResponse
     * @static
     * @param {IBattleReportResponse=} [properties] Properties to set
     * @returns {BattleReportResponse} BattleReportResponse instance
     */
    BattleReportResponse.create = function create(properties) {
        return new BattleReportResponse(properties);
    };

    /**
     * Encodes the specified BattleReportResponse message. Does not implicitly {@link BattleReportResponse.verify|verify} messages.
     * @function encode
     * @memberof BattleReportResponse
     * @static
     * @param {IBattleReportResponse} m BattleReportResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BattleReportResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.items != null && m.items.length) {
            for (var i = 0; i < m.items.length; ++i)
                $root.ItemInfo.encode(m.items[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Encodes the specified BattleReportResponse message, length delimited. Does not implicitly {@link BattleReportResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BattleReportResponse
     * @static
     * @param {IBattleReportResponse} message BattleReportResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BattleReportResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BattleReportResponse message from the specified reader or buffer.
     * @function decode
     * @memberof BattleReportResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BattleReportResponse} BattleReportResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BattleReportResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BattleReportResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.items && m.items.length))
                    m.items = [];
                m.items.push($root.ItemInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a BattleReportResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BattleReportResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BattleReportResponse} BattleReportResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BattleReportResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BattleReportResponse message.
     * @function verify
     * @memberof BattleReportResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BattleReportResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.items != null && m.hasOwnProperty("items")) {
            if (!Array.isArray(m.items))
                return "items: array expected";
            for (var i = 0; i < m.items.length; ++i) {
                {
                    var e = $root.ItemInfo.verify(m.items[i]);
                    if (e)
                        return "items." + e;
                }
            }
        }
        return null;
    };

    return BattleReportResponse;
})();

export const MentalDetails = $root.MentalDetails = (() => {

    MentalDetails.prototype.classname = 'MentalDetails';

    /**
     * Properties of a MentalDetails.
     * @exports IMentalDetails
     * @interface IMentalDetails
     * @property {number|null} [mentalId] MentalDetails mentalId
     * @property {number|null} [level] MentalDetails level
     * @property {boolean|null} [isLearn] MentalDetails isLearn
     * @property {string|null} [uuid] MentalDetails uuid
     */

    /**
     * Constructs a new MentalDetails.
     * @exports MentalDetails
     * @classdesc Represents a MentalDetails.
     * @implements IMentalDetails
     * @constructor
     * @param {IMentalDetails=} [p] Properties to set
     */
    function MentalDetails(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * MentalDetails mentalId.
     * @member {number} mentalId
     * @memberof MentalDetails
     * @instance
     */
    MentalDetails.prototype.mentalId = 0;

    /**
     * MentalDetails level.
     * @member {number} level
     * @memberof MentalDetails
     * @instance
     */
    MentalDetails.prototype.level = 0;

    /**
     * MentalDetails isLearn.
     * @member {boolean} isLearn
     * @memberof MentalDetails
     * @instance
     */
    MentalDetails.prototype.isLearn = false;

    /**
     * MentalDetails uuid.
     * @member {string} uuid
     * @memberof MentalDetails
     * @instance
     */
    MentalDetails.prototype.uuid = "";

    /**
     * Creates a new MentalDetails instance using the specified properties.
     * @function create
     * @memberof MentalDetails
     * @static
     * @param {IMentalDetails=} [properties] Properties to set
     * @returns {MentalDetails} MentalDetails instance
     */
    MentalDetails.create = function create(properties) {
        return new MentalDetails(properties);
    };

    /**
     * Encodes the specified MentalDetails message. Does not implicitly {@link MentalDetails.verify|verify} messages.
     * @function encode
     * @memberof MentalDetails
     * @static
     * @param {IMentalDetails} m MentalDetails message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MentalDetails.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.mentalId != null && Object.hasOwnProperty.call(m, "mentalId"))
            w.uint32(8).int32(m.mentalId);
        if (m.level != null && Object.hasOwnProperty.call(m, "level"))
            w.uint32(16).int32(m.level);
        if (m.isLearn != null && Object.hasOwnProperty.call(m, "isLearn"))
            w.uint32(24).bool(m.isLearn);
        if (m.uuid != null && Object.hasOwnProperty.call(m, "uuid"))
            w.uint32(34).string(m.uuid);
        return w;
    };

    /**
     * Encodes the specified MentalDetails message, length delimited. Does not implicitly {@link MentalDetails.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MentalDetails
     * @static
     * @param {IMentalDetails} message MentalDetails message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MentalDetails.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MentalDetails message from the specified reader or buffer.
     * @function decode
     * @memberof MentalDetails
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MentalDetails} MentalDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MentalDetails.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MentalDetails();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.mentalId = r.int32();
                break;
            case 2:
                m.level = r.int32();
                break;
            case 3:
                m.isLearn = r.bool();
                break;
            case 4:
                m.uuid = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a MentalDetails message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MentalDetails
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MentalDetails} MentalDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MentalDetails.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MentalDetails message.
     * @function verify
     * @memberof MentalDetails
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MentalDetails.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.mentalId != null && m.hasOwnProperty("mentalId")) {
            if (!$util.isInteger(m.mentalId))
                return "mentalId: integer expected";
        }
        if (m.level != null && m.hasOwnProperty("level")) {
            if (!$util.isInteger(m.level))
                return "level: integer expected";
        }
        if (m.isLearn != null && m.hasOwnProperty("isLearn")) {
            if (typeof m.isLearn !== "boolean")
                return "isLearn: boolean expected";
        }
        if (m.uuid != null && m.hasOwnProperty("uuid")) {
            if (!$util.isString(m.uuid))
                return "uuid: string expected";
        }
        return null;
    };

    return MentalDetails;
})();

export const MentalDetailsRequest = $root.MentalDetailsRequest = (() => {

    MentalDetailsRequest.prototype.classname = 'MentalDetailsRequest';

    /**
     * Properties of a MentalDetailsRequest.
     * @exports IMentalDetailsRequest
     * @interface IMentalDetailsRequest
     */

    /**
     * Constructs a new MentalDetailsRequest.
     * @exports MentalDetailsRequest
     * @classdesc Represents a MentalDetailsRequest.
     * @implements IMentalDetailsRequest
     * @constructor
     * @param {IMentalDetailsRequest=} [p] Properties to set
     */
    function MentalDetailsRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new MentalDetailsRequest instance using the specified properties.
     * @function create
     * @memberof MentalDetailsRequest
     * @static
     * @param {IMentalDetailsRequest=} [properties] Properties to set
     * @returns {MentalDetailsRequest} MentalDetailsRequest instance
     */
    MentalDetailsRequest.create = function create(properties) {
        return new MentalDetailsRequest(properties);
    };

    /**
     * Encodes the specified MentalDetailsRequest message. Does not implicitly {@link MentalDetailsRequest.verify|verify} messages.
     * @function encode
     * @memberof MentalDetailsRequest
     * @static
     * @param {IMentalDetailsRequest} m MentalDetailsRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MentalDetailsRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Encodes the specified MentalDetailsRequest message, length delimited. Does not implicitly {@link MentalDetailsRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MentalDetailsRequest
     * @static
     * @param {IMentalDetailsRequest} message MentalDetailsRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MentalDetailsRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MentalDetailsRequest message from the specified reader or buffer.
     * @function decode
     * @memberof MentalDetailsRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MentalDetailsRequest} MentalDetailsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MentalDetailsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MentalDetailsRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a MentalDetailsRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MentalDetailsRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MentalDetailsRequest} MentalDetailsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MentalDetailsRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MentalDetailsRequest message.
     * @function verify
     * @memberof MentalDetailsRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MentalDetailsRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        return null;
    };

    return MentalDetailsRequest;
})();

export const MentalDetailsResponse = $root.MentalDetailsResponse = (() => {

    MentalDetailsResponse.prototype.classname = 'MentalDetailsResponse';

    /**
     * Properties of a MentalDetailsResponse.
     * @exports IMentalDetailsResponse
     * @interface IMentalDetailsResponse
     * @property {Array.<IMentalDetails>|null} [details] MentalDetailsResponse details
     */

    /**
     * Constructs a new MentalDetailsResponse.
     * @exports MentalDetailsResponse
     * @classdesc Represents a MentalDetailsResponse.
     * @implements IMentalDetailsResponse
     * @constructor
     * @param {IMentalDetailsResponse=} [p] Properties to set
     */
    function MentalDetailsResponse(p) {
        this.details = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * MentalDetailsResponse details.
     * @member {Array.<IMentalDetails>} details
     * @memberof MentalDetailsResponse
     * @instance
     */
    MentalDetailsResponse.prototype.details = $util.emptyArray;

    /**
     * Creates a new MentalDetailsResponse instance using the specified properties.
     * @function create
     * @memberof MentalDetailsResponse
     * @static
     * @param {IMentalDetailsResponse=} [properties] Properties to set
     * @returns {MentalDetailsResponse} MentalDetailsResponse instance
     */
    MentalDetailsResponse.create = function create(properties) {
        return new MentalDetailsResponse(properties);
    };

    /**
     * Encodes the specified MentalDetailsResponse message. Does not implicitly {@link MentalDetailsResponse.verify|verify} messages.
     * @function encode
     * @memberof MentalDetailsResponse
     * @static
     * @param {IMentalDetailsResponse} m MentalDetailsResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MentalDetailsResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.details != null && m.details.length) {
            for (var i = 0; i < m.details.length; ++i)
                $root.MentalDetails.encode(m.details[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Encodes the specified MentalDetailsResponse message, length delimited. Does not implicitly {@link MentalDetailsResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MentalDetailsResponse
     * @static
     * @param {IMentalDetailsResponse} message MentalDetailsResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MentalDetailsResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MentalDetailsResponse message from the specified reader or buffer.
     * @function decode
     * @memberof MentalDetailsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MentalDetailsResponse} MentalDetailsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MentalDetailsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MentalDetailsResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.details && m.details.length))
                    m.details = [];
                m.details.push($root.MentalDetails.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a MentalDetailsResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MentalDetailsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MentalDetailsResponse} MentalDetailsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MentalDetailsResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MentalDetailsResponse message.
     * @function verify
     * @memberof MentalDetailsResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MentalDetailsResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.details != null && m.hasOwnProperty("details")) {
            if (!Array.isArray(m.details))
                return "details: array expected";
            for (var i = 0; i < m.details.length; ++i) {
                {
                    var e = $root.MentalDetails.verify(m.details[i]);
                    if (e)
                        return "details." + e;
                }
            }
        }
        return null;
    };

    return MentalDetailsResponse;
})();

export const MentalUpRequest = $root.MentalUpRequest = (() => {

    MentalUpRequest.prototype.classname = 'MentalUpRequest';

    /**
     * Properties of a MentalUpRequest.
     * @exports IMentalUpRequest
     * @interface IMentalUpRequest
     * @property {number|null} [mentalId] MentalUpRequest mentalId
     */

    /**
     * Constructs a new MentalUpRequest.
     * @exports MentalUpRequest
     * @classdesc Represents a MentalUpRequest.
     * @implements IMentalUpRequest
     * @constructor
     * @param {IMentalUpRequest=} [p] Properties to set
     */
    function MentalUpRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * MentalUpRequest mentalId.
     * @member {number} mentalId
     * @memberof MentalUpRequest
     * @instance
     */
    MentalUpRequest.prototype.mentalId = 0;

    /**
     * Creates a new MentalUpRequest instance using the specified properties.
     * @function create
     * @memberof MentalUpRequest
     * @static
     * @param {IMentalUpRequest=} [properties] Properties to set
     * @returns {MentalUpRequest} MentalUpRequest instance
     */
    MentalUpRequest.create = function create(properties) {
        return new MentalUpRequest(properties);
    };

    /**
     * Encodes the specified MentalUpRequest message. Does not implicitly {@link MentalUpRequest.verify|verify} messages.
     * @function encode
     * @memberof MentalUpRequest
     * @static
     * @param {IMentalUpRequest} m MentalUpRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MentalUpRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.mentalId != null && Object.hasOwnProperty.call(m, "mentalId"))
            w.uint32(8).int32(m.mentalId);
        return w;
    };

    /**
     * Encodes the specified MentalUpRequest message, length delimited. Does not implicitly {@link MentalUpRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MentalUpRequest
     * @static
     * @param {IMentalUpRequest} message MentalUpRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MentalUpRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MentalUpRequest message from the specified reader or buffer.
     * @function decode
     * @memberof MentalUpRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MentalUpRequest} MentalUpRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MentalUpRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MentalUpRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.mentalId = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a MentalUpRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MentalUpRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MentalUpRequest} MentalUpRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MentalUpRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MentalUpRequest message.
     * @function verify
     * @memberof MentalUpRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MentalUpRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.mentalId != null && m.hasOwnProperty("mentalId")) {
            if (!$util.isInteger(m.mentalId))
                return "mentalId: integer expected";
        }
        return null;
    };

    return MentalUpRequest;
})();

export const MentalUpResponse = $root.MentalUpResponse = (() => {

    MentalUpResponse.prototype.classname = 'MentalUpResponse';

    /**
     * Properties of a MentalUpResponse.
     * @exports IMentalUpResponse
     * @interface IMentalUpResponse
     * @property {number|null} [level] MentalUpResponse level
     * @property {boolean|null} [isSuccess] MentalUpResponse isSuccess
     */

    /**
     * Constructs a new MentalUpResponse.
     * @exports MentalUpResponse
     * @classdesc Represents a MentalUpResponse.
     * @implements IMentalUpResponse
     * @constructor
     * @param {IMentalUpResponse=} [p] Properties to set
     */
    function MentalUpResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * MentalUpResponse level.
     * @member {number} level
     * @memberof MentalUpResponse
     * @instance
     */
    MentalUpResponse.prototype.level = 0;

    /**
     * MentalUpResponse isSuccess.
     * @member {boolean} isSuccess
     * @memberof MentalUpResponse
     * @instance
     */
    MentalUpResponse.prototype.isSuccess = false;

    /**
     * Creates a new MentalUpResponse instance using the specified properties.
     * @function create
     * @memberof MentalUpResponse
     * @static
     * @param {IMentalUpResponse=} [properties] Properties to set
     * @returns {MentalUpResponse} MentalUpResponse instance
     */
    MentalUpResponse.create = function create(properties) {
        return new MentalUpResponse(properties);
    };

    /**
     * Encodes the specified MentalUpResponse message. Does not implicitly {@link MentalUpResponse.verify|verify} messages.
     * @function encode
     * @memberof MentalUpResponse
     * @static
     * @param {IMentalUpResponse} m MentalUpResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MentalUpResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.level != null && Object.hasOwnProperty.call(m, "level"))
            w.uint32(8).int32(m.level);
        if (m.isSuccess != null && Object.hasOwnProperty.call(m, "isSuccess"))
            w.uint32(16).bool(m.isSuccess);
        return w;
    };

    /**
     * Encodes the specified MentalUpResponse message, length delimited. Does not implicitly {@link MentalUpResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MentalUpResponse
     * @static
     * @param {IMentalUpResponse} message MentalUpResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MentalUpResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MentalUpResponse message from the specified reader or buffer.
     * @function decode
     * @memberof MentalUpResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MentalUpResponse} MentalUpResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MentalUpResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MentalUpResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.level = r.int32();
                break;
            case 2:
                m.isSuccess = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a MentalUpResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MentalUpResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MentalUpResponse} MentalUpResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MentalUpResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MentalUpResponse message.
     * @function verify
     * @memberof MentalUpResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MentalUpResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.level != null && m.hasOwnProperty("level")) {
            if (!$util.isInteger(m.level))
                return "level: integer expected";
        }
        if (m.isSuccess != null && m.hasOwnProperty("isSuccess")) {
            if (typeof m.isSuccess !== "boolean")
                return "isSuccess: boolean expected";
        }
        return null;
    };

    return MentalUpResponse;
})();

export const MentalLearnRequest = $root.MentalLearnRequest = (() => {

    MentalLearnRequest.prototype.classname = 'MentalLearnRequest';

    /**
     * Properties of a MentalLearnRequest.
     * @exports IMentalLearnRequest
     * @interface IMentalLearnRequest
     * @property {number|null} [mentalId] MentalLearnRequest mentalId
     */

    /**
     * Constructs a new MentalLearnRequest.
     * @exports MentalLearnRequest
     * @classdesc Represents a MentalLearnRequest.
     * @implements IMentalLearnRequest
     * @constructor
     * @param {IMentalLearnRequest=} [p] Properties to set
     */
    function MentalLearnRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * MentalLearnRequest mentalId.
     * @member {number} mentalId
     * @memberof MentalLearnRequest
     * @instance
     */
    MentalLearnRequest.prototype.mentalId = 0;

    /**
     * Creates a new MentalLearnRequest instance using the specified properties.
     * @function create
     * @memberof MentalLearnRequest
     * @static
     * @param {IMentalLearnRequest=} [properties] Properties to set
     * @returns {MentalLearnRequest} MentalLearnRequest instance
     */
    MentalLearnRequest.create = function create(properties) {
        return new MentalLearnRequest(properties);
    };

    /**
     * Encodes the specified MentalLearnRequest message. Does not implicitly {@link MentalLearnRequest.verify|verify} messages.
     * @function encode
     * @memberof MentalLearnRequest
     * @static
     * @param {IMentalLearnRequest} m MentalLearnRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MentalLearnRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.mentalId != null && Object.hasOwnProperty.call(m, "mentalId"))
            w.uint32(8).int32(m.mentalId);
        return w;
    };

    /**
     * Encodes the specified MentalLearnRequest message, length delimited. Does not implicitly {@link MentalLearnRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MentalLearnRequest
     * @static
     * @param {IMentalLearnRequest} message MentalLearnRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MentalLearnRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MentalLearnRequest message from the specified reader or buffer.
     * @function decode
     * @memberof MentalLearnRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MentalLearnRequest} MentalLearnRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MentalLearnRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MentalLearnRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.mentalId = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a MentalLearnRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MentalLearnRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MentalLearnRequest} MentalLearnRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MentalLearnRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MentalLearnRequest message.
     * @function verify
     * @memberof MentalLearnRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MentalLearnRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.mentalId != null && m.hasOwnProperty("mentalId")) {
            if (!$util.isInteger(m.mentalId))
                return "mentalId: integer expected";
        }
        return null;
    };

    return MentalLearnRequest;
})();

export const MentalLearnResponse = $root.MentalLearnResponse = (() => {

    MentalLearnResponse.prototype.classname = 'MentalLearnResponse';

    /**
     * Properties of a MentalLearnResponse.
     * @exports IMentalLearnResponse
     * @interface IMentalLearnResponse
     */

    /**
     * Constructs a new MentalLearnResponse.
     * @exports MentalLearnResponse
     * @classdesc Represents a MentalLearnResponse.
     * @implements IMentalLearnResponse
     * @constructor
     * @param {IMentalLearnResponse=} [p] Properties to set
     */
    function MentalLearnResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new MentalLearnResponse instance using the specified properties.
     * @function create
     * @memberof MentalLearnResponse
     * @static
     * @param {IMentalLearnResponse=} [properties] Properties to set
     * @returns {MentalLearnResponse} MentalLearnResponse instance
     */
    MentalLearnResponse.create = function create(properties) {
        return new MentalLearnResponse(properties);
    };

    /**
     * Encodes the specified MentalLearnResponse message. Does not implicitly {@link MentalLearnResponse.verify|verify} messages.
     * @function encode
     * @memberof MentalLearnResponse
     * @static
     * @param {IMentalLearnResponse} m MentalLearnResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MentalLearnResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Encodes the specified MentalLearnResponse message, length delimited. Does not implicitly {@link MentalLearnResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MentalLearnResponse
     * @static
     * @param {IMentalLearnResponse} message MentalLearnResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MentalLearnResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MentalLearnResponse message from the specified reader or buffer.
     * @function decode
     * @memberof MentalLearnResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MentalLearnResponse} MentalLearnResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MentalLearnResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MentalLearnResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a MentalLearnResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MentalLearnResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MentalLearnResponse} MentalLearnResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MentalLearnResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MentalLearnResponse message.
     * @function verify
     * @memberof MentalLearnResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MentalLearnResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        return null;
    };

    return MentalLearnResponse;
})();

export const MagicDetails = $root.MagicDetails = (() => {

    MagicDetails.prototype.classname = 'MagicDetails';

    /**
     * Properties of a MagicDetails.
     * @exports IMagicDetails
     * @interface IMagicDetails
     * @property {number|null} [magicId] MagicDetails magicId
     * @property {number|null} [level] MagicDetails level
     */

    /**
     * Constructs a new MagicDetails.
     * @exports MagicDetails
     * @classdesc Represents a MagicDetails.
     * @implements IMagicDetails
     * @constructor
     * @param {IMagicDetails=} [p] Properties to set
     */
    function MagicDetails(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * MagicDetails magicId.
     * @member {number} magicId
     * @memberof MagicDetails
     * @instance
     */
    MagicDetails.prototype.magicId = 0;

    /**
     * MagicDetails level.
     * @member {number} level
     * @memberof MagicDetails
     * @instance
     */
    MagicDetails.prototype.level = 0;

    /**
     * Creates a new MagicDetails instance using the specified properties.
     * @function create
     * @memberof MagicDetails
     * @static
     * @param {IMagicDetails=} [properties] Properties to set
     * @returns {MagicDetails} MagicDetails instance
     */
    MagicDetails.create = function create(properties) {
        return new MagicDetails(properties);
    };

    /**
     * Encodes the specified MagicDetails message. Does not implicitly {@link MagicDetails.verify|verify} messages.
     * @function encode
     * @memberof MagicDetails
     * @static
     * @param {IMagicDetails} m MagicDetails message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MagicDetails.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.magicId != null && Object.hasOwnProperty.call(m, "magicId"))
            w.uint32(8).int32(m.magicId);
        if (m.level != null && Object.hasOwnProperty.call(m, "level"))
            w.uint32(16).int32(m.level);
        return w;
    };

    /**
     * Encodes the specified MagicDetails message, length delimited. Does not implicitly {@link MagicDetails.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MagicDetails
     * @static
     * @param {IMagicDetails} message MagicDetails message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MagicDetails.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MagicDetails message from the specified reader or buffer.
     * @function decode
     * @memberof MagicDetails
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MagicDetails} MagicDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MagicDetails.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MagicDetails();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.magicId = r.int32();
                break;
            case 2:
                m.level = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a MagicDetails message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MagicDetails
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MagicDetails} MagicDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MagicDetails.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MagicDetails message.
     * @function verify
     * @memberof MagicDetails
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MagicDetails.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.magicId != null && m.hasOwnProperty("magicId")) {
            if (!$util.isInteger(m.magicId))
                return "magicId: integer expected";
        }
        if (m.level != null && m.hasOwnProperty("level")) {
            if (!$util.isInteger(m.level))
                return "level: integer expected";
        }
        return null;
    };

    return MagicDetails;
})();

export const MagicUseDetails = $root.MagicUseDetails = (() => {

    MagicUseDetails.prototype.classname = 'MagicUseDetails';

    /**
     * Properties of a MagicUseDetails.
     * @exports IMagicUseDetails
     * @interface IMagicUseDetails
     * @property {number|null} [magicId] MagicUseDetails magicId
     * @property {number|null} [number] MagicUseDetails number
     */

    /**
     * Constructs a new MagicUseDetails.
     * @exports MagicUseDetails
     * @classdesc Represents a MagicUseDetails.
     * @implements IMagicUseDetails
     * @constructor
     * @param {IMagicUseDetails=} [p] Properties to set
     */
    function MagicUseDetails(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * MagicUseDetails magicId.
     * @member {number} magicId
     * @memberof MagicUseDetails
     * @instance
     */
    MagicUseDetails.prototype.magicId = 0;

    /**
     * MagicUseDetails number.
     * @member {number} number
     * @memberof MagicUseDetails
     * @instance
     */
    MagicUseDetails.prototype.number = 0;

    /**
     * Creates a new MagicUseDetails instance using the specified properties.
     * @function create
     * @memberof MagicUseDetails
     * @static
     * @param {IMagicUseDetails=} [properties] Properties to set
     * @returns {MagicUseDetails} MagicUseDetails instance
     */
    MagicUseDetails.create = function create(properties) {
        return new MagicUseDetails(properties);
    };

    /**
     * Encodes the specified MagicUseDetails message. Does not implicitly {@link MagicUseDetails.verify|verify} messages.
     * @function encode
     * @memberof MagicUseDetails
     * @static
     * @param {IMagicUseDetails} m MagicUseDetails message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MagicUseDetails.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.magicId != null && Object.hasOwnProperty.call(m, "magicId"))
            w.uint32(8).int32(m.magicId);
        if (m.number != null && Object.hasOwnProperty.call(m, "number"))
            w.uint32(16).int32(m.number);
        return w;
    };

    /**
     * Encodes the specified MagicUseDetails message, length delimited. Does not implicitly {@link MagicUseDetails.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MagicUseDetails
     * @static
     * @param {IMagicUseDetails} message MagicUseDetails message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MagicUseDetails.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MagicUseDetails message from the specified reader or buffer.
     * @function decode
     * @memberof MagicUseDetails
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MagicUseDetails} MagicUseDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MagicUseDetails.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MagicUseDetails();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.magicId = r.int32();
                break;
            case 2:
                m.number = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a MagicUseDetails message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MagicUseDetails
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MagicUseDetails} MagicUseDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MagicUseDetails.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MagicUseDetails message.
     * @function verify
     * @memberof MagicUseDetails
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MagicUseDetails.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.magicId != null && m.hasOwnProperty("magicId")) {
            if (!$util.isInteger(m.magicId))
                return "magicId: integer expected";
        }
        if (m.number != null && m.hasOwnProperty("number")) {
            if (!$util.isInteger(m.number))
                return "number: integer expected";
        }
        return null;
    };

    return MagicUseDetails;
})();

export const MagicDetailsRequest = $root.MagicDetailsRequest = (() => {

    MagicDetailsRequest.prototype.classname = 'MagicDetailsRequest';

    /**
     * Properties of a MagicDetailsRequest.
     * @exports IMagicDetailsRequest
     * @interface IMagicDetailsRequest
     */

    /**
     * Constructs a new MagicDetailsRequest.
     * @exports MagicDetailsRequest
     * @classdesc Represents a MagicDetailsRequest.
     * @implements IMagicDetailsRequest
     * @constructor
     * @param {IMagicDetailsRequest=} [p] Properties to set
     */
    function MagicDetailsRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new MagicDetailsRequest instance using the specified properties.
     * @function create
     * @memberof MagicDetailsRequest
     * @static
     * @param {IMagicDetailsRequest=} [properties] Properties to set
     * @returns {MagicDetailsRequest} MagicDetailsRequest instance
     */
    MagicDetailsRequest.create = function create(properties) {
        return new MagicDetailsRequest(properties);
    };

    /**
     * Encodes the specified MagicDetailsRequest message. Does not implicitly {@link MagicDetailsRequest.verify|verify} messages.
     * @function encode
     * @memberof MagicDetailsRequest
     * @static
     * @param {IMagicDetailsRequest} m MagicDetailsRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MagicDetailsRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Encodes the specified MagicDetailsRequest message, length delimited. Does not implicitly {@link MagicDetailsRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MagicDetailsRequest
     * @static
     * @param {IMagicDetailsRequest} message MagicDetailsRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MagicDetailsRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MagicDetailsRequest message from the specified reader or buffer.
     * @function decode
     * @memberof MagicDetailsRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MagicDetailsRequest} MagicDetailsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MagicDetailsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MagicDetailsRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a MagicDetailsRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MagicDetailsRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MagicDetailsRequest} MagicDetailsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MagicDetailsRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MagicDetailsRequest message.
     * @function verify
     * @memberof MagicDetailsRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MagicDetailsRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        return null;
    };

    return MagicDetailsRequest;
})();

export const MagicDetailsResponse = $root.MagicDetailsResponse = (() => {

    MagicDetailsResponse.prototype.classname = 'MagicDetailsResponse';

    /**
     * Properties of a MagicDetailsResponse.
     * @exports IMagicDetailsResponse
     * @interface IMagicDetailsResponse
     * @property {Array.<IMagicDetails>|null} [details] MagicDetailsResponse details
     * @property {Array.<IMagicUseDetails>|null} [use] MagicDetailsResponse use
     */

    /**
     * Constructs a new MagicDetailsResponse.
     * @exports MagicDetailsResponse
     * @classdesc Represents a MagicDetailsResponse.
     * @implements IMagicDetailsResponse
     * @constructor
     * @param {IMagicDetailsResponse=} [p] Properties to set
     */
    function MagicDetailsResponse(p) {
        this.details = [];
        this.use = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * MagicDetailsResponse details.
     * @member {Array.<IMagicDetails>} details
     * @memberof MagicDetailsResponse
     * @instance
     */
    MagicDetailsResponse.prototype.details = $util.emptyArray;

    /**
     * MagicDetailsResponse use.
     * @member {Array.<IMagicUseDetails>} use
     * @memberof MagicDetailsResponse
     * @instance
     */
    MagicDetailsResponse.prototype.use = $util.emptyArray;

    /**
     * Creates a new MagicDetailsResponse instance using the specified properties.
     * @function create
     * @memberof MagicDetailsResponse
     * @static
     * @param {IMagicDetailsResponse=} [properties] Properties to set
     * @returns {MagicDetailsResponse} MagicDetailsResponse instance
     */
    MagicDetailsResponse.create = function create(properties) {
        return new MagicDetailsResponse(properties);
    };

    /**
     * Encodes the specified MagicDetailsResponse message. Does not implicitly {@link MagicDetailsResponse.verify|verify} messages.
     * @function encode
     * @memberof MagicDetailsResponse
     * @static
     * @param {IMagicDetailsResponse} m MagicDetailsResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MagicDetailsResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.details != null && m.details.length) {
            for (var i = 0; i < m.details.length; ++i)
                $root.MagicDetails.encode(m.details[i], w.uint32(10).fork()).ldelim();
        }
        if (m.use != null && m.use.length) {
            for (var i = 0; i < m.use.length; ++i)
                $root.MagicUseDetails.encode(m.use[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    /**
     * Encodes the specified MagicDetailsResponse message, length delimited. Does not implicitly {@link MagicDetailsResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MagicDetailsResponse
     * @static
     * @param {IMagicDetailsResponse} message MagicDetailsResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MagicDetailsResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MagicDetailsResponse message from the specified reader or buffer.
     * @function decode
     * @memberof MagicDetailsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MagicDetailsResponse} MagicDetailsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MagicDetailsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MagicDetailsResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.details && m.details.length))
                    m.details = [];
                m.details.push($root.MagicDetails.decode(r, r.uint32()));
                break;
            case 2:
                if (!(m.use && m.use.length))
                    m.use = [];
                m.use.push($root.MagicUseDetails.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a MagicDetailsResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MagicDetailsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MagicDetailsResponse} MagicDetailsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MagicDetailsResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MagicDetailsResponse message.
     * @function verify
     * @memberof MagicDetailsResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MagicDetailsResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.details != null && m.hasOwnProperty("details")) {
            if (!Array.isArray(m.details))
                return "details: array expected";
            for (var i = 0; i < m.details.length; ++i) {
                {
                    var e = $root.MagicDetails.verify(m.details[i]);
                    if (e)
                        return "details." + e;
                }
            }
        }
        if (m.use != null && m.hasOwnProperty("use")) {
            if (!Array.isArray(m.use))
                return "use: array expected";
            for (var i = 0; i < m.use.length; ++i) {
                {
                    var e = $root.MagicUseDetails.verify(m.use[i]);
                    if (e)
                        return "use." + e;
                }
            }
        }
        return null;
    };

    return MagicDetailsResponse;
})();

export const MagicLearnRequest = $root.MagicLearnRequest = (() => {

    MagicLearnRequest.prototype.classname = 'MagicLearnRequest';

    /**
     * Properties of a MagicLearnRequest.
     * @exports IMagicLearnRequest
     * @interface IMagicLearnRequest
     * @property {number|null} [magicId] MagicLearnRequest magicId
     */

    /**
     * Constructs a new MagicLearnRequest.
     * @exports MagicLearnRequest
     * @classdesc Represents a MagicLearnRequest.
     * @implements IMagicLearnRequest
     * @constructor
     * @param {IMagicLearnRequest=} [p] Properties to set
     */
    function MagicLearnRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * MagicLearnRequest magicId.
     * @member {number} magicId
     * @memberof MagicLearnRequest
     * @instance
     */
    MagicLearnRequest.prototype.magicId = 0;

    /**
     * Creates a new MagicLearnRequest instance using the specified properties.
     * @function create
     * @memberof MagicLearnRequest
     * @static
     * @param {IMagicLearnRequest=} [properties] Properties to set
     * @returns {MagicLearnRequest} MagicLearnRequest instance
     */
    MagicLearnRequest.create = function create(properties) {
        return new MagicLearnRequest(properties);
    };

    /**
     * Encodes the specified MagicLearnRequest message. Does not implicitly {@link MagicLearnRequest.verify|verify} messages.
     * @function encode
     * @memberof MagicLearnRequest
     * @static
     * @param {IMagicLearnRequest} m MagicLearnRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MagicLearnRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.magicId != null && Object.hasOwnProperty.call(m, "magicId"))
            w.uint32(8).int32(m.magicId);
        return w;
    };

    /**
     * Encodes the specified MagicLearnRequest message, length delimited. Does not implicitly {@link MagicLearnRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MagicLearnRequest
     * @static
     * @param {IMagicLearnRequest} message MagicLearnRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MagicLearnRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MagicLearnRequest message from the specified reader or buffer.
     * @function decode
     * @memberof MagicLearnRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MagicLearnRequest} MagicLearnRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MagicLearnRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MagicLearnRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.magicId = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a MagicLearnRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MagicLearnRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MagicLearnRequest} MagicLearnRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MagicLearnRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MagicLearnRequest message.
     * @function verify
     * @memberof MagicLearnRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MagicLearnRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.magicId != null && m.hasOwnProperty("magicId")) {
            if (!$util.isInteger(m.magicId))
                return "magicId: integer expected";
        }
        return null;
    };

    return MagicLearnRequest;
})();

export const MagicLearnResponse = $root.MagicLearnResponse = (() => {

    MagicLearnResponse.prototype.classname = 'MagicLearnResponse';

    /**
     * Properties of a MagicLearnResponse.
     * @exports IMagicLearnResponse
     * @interface IMagicLearnResponse
     */

    /**
     * Constructs a new MagicLearnResponse.
     * @exports MagicLearnResponse
     * @classdesc Represents a MagicLearnResponse.
     * @implements IMagicLearnResponse
     * @constructor
     * @param {IMagicLearnResponse=} [p] Properties to set
     */
    function MagicLearnResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new MagicLearnResponse instance using the specified properties.
     * @function create
     * @memberof MagicLearnResponse
     * @static
     * @param {IMagicLearnResponse=} [properties] Properties to set
     * @returns {MagicLearnResponse} MagicLearnResponse instance
     */
    MagicLearnResponse.create = function create(properties) {
        return new MagicLearnResponse(properties);
    };

    /**
     * Encodes the specified MagicLearnResponse message. Does not implicitly {@link MagicLearnResponse.verify|verify} messages.
     * @function encode
     * @memberof MagicLearnResponse
     * @static
     * @param {IMagicLearnResponse} m MagicLearnResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MagicLearnResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Encodes the specified MagicLearnResponse message, length delimited. Does not implicitly {@link MagicLearnResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MagicLearnResponse
     * @static
     * @param {IMagicLearnResponse} message MagicLearnResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MagicLearnResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MagicLearnResponse message from the specified reader or buffer.
     * @function decode
     * @memberof MagicLearnResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MagicLearnResponse} MagicLearnResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MagicLearnResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MagicLearnResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a MagicLearnResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MagicLearnResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MagicLearnResponse} MagicLearnResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MagicLearnResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MagicLearnResponse message.
     * @function verify
     * @memberof MagicLearnResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MagicLearnResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        return null;
    };

    return MagicLearnResponse;
})();

export const MagicUpRequest = $root.MagicUpRequest = (() => {

    MagicUpRequest.prototype.classname = 'MagicUpRequest';

    /**
     * Properties of a MagicUpRequest.
     * @exports IMagicUpRequest
     * @interface IMagicUpRequest
     * @property {number|null} [magicId] MagicUpRequest magicId
     */

    /**
     * Constructs a new MagicUpRequest.
     * @exports MagicUpRequest
     * @classdesc Represents a MagicUpRequest.
     * @implements IMagicUpRequest
     * @constructor
     * @param {IMagicUpRequest=} [p] Properties to set
     */
    function MagicUpRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * MagicUpRequest magicId.
     * @member {number} magicId
     * @memberof MagicUpRequest
     * @instance
     */
    MagicUpRequest.prototype.magicId = 0;

    /**
     * Creates a new MagicUpRequest instance using the specified properties.
     * @function create
     * @memberof MagicUpRequest
     * @static
     * @param {IMagicUpRequest=} [properties] Properties to set
     * @returns {MagicUpRequest} MagicUpRequest instance
     */
    MagicUpRequest.create = function create(properties) {
        return new MagicUpRequest(properties);
    };

    /**
     * Encodes the specified MagicUpRequest message. Does not implicitly {@link MagicUpRequest.verify|verify} messages.
     * @function encode
     * @memberof MagicUpRequest
     * @static
     * @param {IMagicUpRequest} m MagicUpRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MagicUpRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.magicId != null && Object.hasOwnProperty.call(m, "magicId"))
            w.uint32(8).int32(m.magicId);
        return w;
    };

    /**
     * Encodes the specified MagicUpRequest message, length delimited. Does not implicitly {@link MagicUpRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MagicUpRequest
     * @static
     * @param {IMagicUpRequest} message MagicUpRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MagicUpRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MagicUpRequest message from the specified reader or buffer.
     * @function decode
     * @memberof MagicUpRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MagicUpRequest} MagicUpRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MagicUpRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MagicUpRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.magicId = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a MagicUpRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MagicUpRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MagicUpRequest} MagicUpRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MagicUpRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MagicUpRequest message.
     * @function verify
     * @memberof MagicUpRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MagicUpRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.magicId != null && m.hasOwnProperty("magicId")) {
            if (!$util.isInteger(m.magicId))
                return "magicId: integer expected";
        }
        return null;
    };

    return MagicUpRequest;
})();

export const MagicUpResponse = $root.MagicUpResponse = (() => {

    MagicUpResponse.prototype.classname = 'MagicUpResponse';

    /**
     * Properties of a MagicUpResponse.
     * @exports IMagicUpResponse
     * @interface IMagicUpResponse
     * @property {number|null} [level] MagicUpResponse level
     * @property {boolean|null} [isSuccess] MagicUpResponse isSuccess
     */

    /**
     * Constructs a new MagicUpResponse.
     * @exports MagicUpResponse
     * @classdesc Represents a MagicUpResponse.
     * @implements IMagicUpResponse
     * @constructor
     * @param {IMagicUpResponse=} [p] Properties to set
     */
    function MagicUpResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * MagicUpResponse level.
     * @member {number} level
     * @memberof MagicUpResponse
     * @instance
     */
    MagicUpResponse.prototype.level = 0;

    /**
     * MagicUpResponse isSuccess.
     * @member {boolean} isSuccess
     * @memberof MagicUpResponse
     * @instance
     */
    MagicUpResponse.prototype.isSuccess = false;

    /**
     * Creates a new MagicUpResponse instance using the specified properties.
     * @function create
     * @memberof MagicUpResponse
     * @static
     * @param {IMagicUpResponse=} [properties] Properties to set
     * @returns {MagicUpResponse} MagicUpResponse instance
     */
    MagicUpResponse.create = function create(properties) {
        return new MagicUpResponse(properties);
    };

    /**
     * Encodes the specified MagicUpResponse message. Does not implicitly {@link MagicUpResponse.verify|verify} messages.
     * @function encode
     * @memberof MagicUpResponse
     * @static
     * @param {IMagicUpResponse} m MagicUpResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MagicUpResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.level != null && Object.hasOwnProperty.call(m, "level"))
            w.uint32(8).int32(m.level);
        if (m.isSuccess != null && Object.hasOwnProperty.call(m, "isSuccess"))
            w.uint32(16).bool(m.isSuccess);
        return w;
    };

    /**
     * Encodes the specified MagicUpResponse message, length delimited. Does not implicitly {@link MagicUpResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MagicUpResponse
     * @static
     * @param {IMagicUpResponse} message MagicUpResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MagicUpResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MagicUpResponse message from the specified reader or buffer.
     * @function decode
     * @memberof MagicUpResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MagicUpResponse} MagicUpResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MagicUpResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MagicUpResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.level = r.int32();
                break;
            case 2:
                m.isSuccess = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a MagicUpResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MagicUpResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MagicUpResponse} MagicUpResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MagicUpResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MagicUpResponse message.
     * @function verify
     * @memberof MagicUpResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MagicUpResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.level != null && m.hasOwnProperty("level")) {
            if (!$util.isInteger(m.level))
                return "level: integer expected";
        }
        if (m.isSuccess != null && m.hasOwnProperty("isSuccess")) {
            if (typeof m.isSuccess !== "boolean")
                return "isSuccess: boolean expected";
        }
        return null;
    };

    return MagicUpResponse;
})();

export const MagicUseRequest = $root.MagicUseRequest = (() => {

    MagicUseRequest.prototype.classname = 'MagicUseRequest';

    /**
     * Properties of a MagicUseRequest.
     * @exports IMagicUseRequest
     * @interface IMagicUseRequest
     * @property {number|null} [magicId] MagicUseRequest magicId
     * @property {number|null} [number] MagicUseRequest number
     */

    /**
     * Constructs a new MagicUseRequest.
     * @exports MagicUseRequest
     * @classdesc Represents a MagicUseRequest.
     * @implements IMagicUseRequest
     * @constructor
     * @param {IMagicUseRequest=} [p] Properties to set
     */
    function MagicUseRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * MagicUseRequest magicId.
     * @member {number} magicId
     * @memberof MagicUseRequest
     * @instance
     */
    MagicUseRequest.prototype.magicId = 0;

    /**
     * MagicUseRequest number.
     * @member {number} number
     * @memberof MagicUseRequest
     * @instance
     */
    MagicUseRequest.prototype.number = 0;

    /**
     * Creates a new MagicUseRequest instance using the specified properties.
     * @function create
     * @memberof MagicUseRequest
     * @static
     * @param {IMagicUseRequest=} [properties] Properties to set
     * @returns {MagicUseRequest} MagicUseRequest instance
     */
    MagicUseRequest.create = function create(properties) {
        return new MagicUseRequest(properties);
    };

    /**
     * Encodes the specified MagicUseRequest message. Does not implicitly {@link MagicUseRequest.verify|verify} messages.
     * @function encode
     * @memberof MagicUseRequest
     * @static
     * @param {IMagicUseRequest} m MagicUseRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MagicUseRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.magicId != null && Object.hasOwnProperty.call(m, "magicId"))
            w.uint32(8).int32(m.magicId);
        if (m.number != null && Object.hasOwnProperty.call(m, "number"))
            w.uint32(16).int32(m.number);
        return w;
    };

    /**
     * Encodes the specified MagicUseRequest message, length delimited. Does not implicitly {@link MagicUseRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MagicUseRequest
     * @static
     * @param {IMagicUseRequest} message MagicUseRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MagicUseRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MagicUseRequest message from the specified reader or buffer.
     * @function decode
     * @memberof MagicUseRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MagicUseRequest} MagicUseRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MagicUseRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MagicUseRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.magicId = r.int32();
                break;
            case 2:
                m.number = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a MagicUseRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MagicUseRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MagicUseRequest} MagicUseRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MagicUseRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MagicUseRequest message.
     * @function verify
     * @memberof MagicUseRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MagicUseRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.magicId != null && m.hasOwnProperty("magicId")) {
            if (!$util.isInteger(m.magicId))
                return "magicId: integer expected";
        }
        if (m.number != null && m.hasOwnProperty("number")) {
            if (!$util.isInteger(m.number))
                return "number: integer expected";
        }
        return null;
    };

    return MagicUseRequest;
})();

export const MagicUseResponse = $root.MagicUseResponse = (() => {

    MagicUseResponse.prototype.classname = 'MagicUseResponse';

    /**
     * Properties of a MagicUseResponse.
     * @exports IMagicUseResponse
     * @interface IMagicUseResponse
     */

    /**
     * Constructs a new MagicUseResponse.
     * @exports MagicUseResponse
     * @classdesc Represents a MagicUseResponse.
     * @implements IMagicUseResponse
     * @constructor
     * @param {IMagicUseResponse=} [p] Properties to set
     */
    function MagicUseResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new MagicUseResponse instance using the specified properties.
     * @function create
     * @memberof MagicUseResponse
     * @static
     * @param {IMagicUseResponse=} [properties] Properties to set
     * @returns {MagicUseResponse} MagicUseResponse instance
     */
    MagicUseResponse.create = function create(properties) {
        return new MagicUseResponse(properties);
    };

    /**
     * Encodes the specified MagicUseResponse message. Does not implicitly {@link MagicUseResponse.verify|verify} messages.
     * @function encode
     * @memberof MagicUseResponse
     * @static
     * @param {IMagicUseResponse} m MagicUseResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MagicUseResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Encodes the specified MagicUseResponse message, length delimited. Does not implicitly {@link MagicUseResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MagicUseResponse
     * @static
     * @param {IMagicUseResponse} message MagicUseResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MagicUseResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MagicUseResponse message from the specified reader or buffer.
     * @function decode
     * @memberof MagicUseResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MagicUseResponse} MagicUseResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MagicUseResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MagicUseResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a MagicUseResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MagicUseResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MagicUseResponse} MagicUseResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MagicUseResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MagicUseResponse message.
     * @function verify
     * @memberof MagicUseResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MagicUseResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        return null;
    };

    return MagicUseResponse;
})();

export const MagicCancelRequest = $root.MagicCancelRequest = (() => {

    MagicCancelRequest.prototype.classname = 'MagicCancelRequest';

    /**
     * Properties of a MagicCancelRequest.
     * @exports IMagicCancelRequest
     * @interface IMagicCancelRequest
     * @property {number|null} [number] MagicCancelRequest number
     */

    /**
     * Constructs a new MagicCancelRequest.
     * @exports MagicCancelRequest
     * @classdesc Represents a MagicCancelRequest.
     * @implements IMagicCancelRequest
     * @constructor
     * @param {IMagicCancelRequest=} [p] Properties to set
     */
    function MagicCancelRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * MagicCancelRequest number.
     * @member {number} number
     * @memberof MagicCancelRequest
     * @instance
     */
    MagicCancelRequest.prototype.number = 0;

    /**
     * Creates a new MagicCancelRequest instance using the specified properties.
     * @function create
     * @memberof MagicCancelRequest
     * @static
     * @param {IMagicCancelRequest=} [properties] Properties to set
     * @returns {MagicCancelRequest} MagicCancelRequest instance
     */
    MagicCancelRequest.create = function create(properties) {
        return new MagicCancelRequest(properties);
    };

    /**
     * Encodes the specified MagicCancelRequest message. Does not implicitly {@link MagicCancelRequest.verify|verify} messages.
     * @function encode
     * @memberof MagicCancelRequest
     * @static
     * @param {IMagicCancelRequest} m MagicCancelRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MagicCancelRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.number != null && Object.hasOwnProperty.call(m, "number"))
            w.uint32(8).int32(m.number);
        return w;
    };

    /**
     * Encodes the specified MagicCancelRequest message, length delimited. Does not implicitly {@link MagicCancelRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MagicCancelRequest
     * @static
     * @param {IMagicCancelRequest} message MagicCancelRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MagicCancelRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MagicCancelRequest message from the specified reader or buffer.
     * @function decode
     * @memberof MagicCancelRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MagicCancelRequest} MagicCancelRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MagicCancelRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MagicCancelRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.number = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a MagicCancelRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MagicCancelRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MagicCancelRequest} MagicCancelRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MagicCancelRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MagicCancelRequest message.
     * @function verify
     * @memberof MagicCancelRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MagicCancelRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.number != null && m.hasOwnProperty("number")) {
            if (!$util.isInteger(m.number))
                return "number: integer expected";
        }
        return null;
    };

    return MagicCancelRequest;
})();

export const MagicCancelResponse = $root.MagicCancelResponse = (() => {

    MagicCancelResponse.prototype.classname = 'MagicCancelResponse';

    /**
     * Properties of a MagicCancelResponse.
     * @exports IMagicCancelResponse
     * @interface IMagicCancelResponse
     */

    /**
     * Constructs a new MagicCancelResponse.
     * @exports MagicCancelResponse
     * @classdesc Represents a MagicCancelResponse.
     * @implements IMagicCancelResponse
     * @constructor
     * @param {IMagicCancelResponse=} [p] Properties to set
     */
    function MagicCancelResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new MagicCancelResponse instance using the specified properties.
     * @function create
     * @memberof MagicCancelResponse
     * @static
     * @param {IMagicCancelResponse=} [properties] Properties to set
     * @returns {MagicCancelResponse} MagicCancelResponse instance
     */
    MagicCancelResponse.create = function create(properties) {
        return new MagicCancelResponse(properties);
    };

    /**
     * Encodes the specified MagicCancelResponse message. Does not implicitly {@link MagicCancelResponse.verify|verify} messages.
     * @function encode
     * @memberof MagicCancelResponse
     * @static
     * @param {IMagicCancelResponse} m MagicCancelResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MagicCancelResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Encodes the specified MagicCancelResponse message, length delimited. Does not implicitly {@link MagicCancelResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MagicCancelResponse
     * @static
     * @param {IMagicCancelResponse} message MagicCancelResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MagicCancelResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MagicCancelResponse message from the specified reader or buffer.
     * @function decode
     * @memberof MagicCancelResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MagicCancelResponse} MagicCancelResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MagicCancelResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MagicCancelResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a MagicCancelResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MagicCancelResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MagicCancelResponse} MagicCancelResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MagicCancelResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MagicCancelResponse message.
     * @function verify
     * @memberof MagicCancelResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MagicCancelResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        return null;
    };

    return MagicCancelResponse;
})();

export const SignRequest = $root.SignRequest = (() => {

    SignRequest.prototype.classname = 'SignRequest';

    /**
     * Properties of a SignRequest.
     * @exports ISignRequest
     * @interface ISignRequest
     */

    /**
     * Constructs a new SignRequest.
     * @exports SignRequest
     * @classdesc Represents a SignRequest.
     * @implements ISignRequest
     * @constructor
     * @param {ISignRequest=} [p] Properties to set
     */
    function SignRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new SignRequest instance using the specified properties.
     * @function create
     * @memberof SignRequest
     * @static
     * @param {ISignRequest=} [properties] Properties to set
     * @returns {SignRequest} SignRequest instance
     */
    SignRequest.create = function create(properties) {
        return new SignRequest(properties);
    };

    /**
     * Encodes the specified SignRequest message. Does not implicitly {@link SignRequest.verify|verify} messages.
     * @function encode
     * @memberof SignRequest
     * @static
     * @param {ISignRequest} m SignRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SignRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Encodes the specified SignRequest message, length delimited. Does not implicitly {@link SignRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SignRequest
     * @static
     * @param {ISignRequest} message SignRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SignRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SignRequest message from the specified reader or buffer.
     * @function decode
     * @memberof SignRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SignRequest} SignRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SignRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SignRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a SignRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SignRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SignRequest} SignRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SignRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SignRequest message.
     * @function verify
     * @memberof SignRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SignRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        return null;
    };

    return SignRequest;
})();

export const SignResponse = $root.SignResponse = (() => {

    SignResponse.prototype.classname = 'SignResponse';

    /**
     * Properties of a SignResponse.
     * @exports ISignResponse
     * @interface ISignResponse
     * @property {Array.<IItemInfo>|null} [items] SignResponse items
     */

    /**
     * Constructs a new SignResponse.
     * @exports SignResponse
     * @classdesc Represents a SignResponse.
     * @implements ISignResponse
     * @constructor
     * @param {ISignResponse=} [p] Properties to set
     */
    function SignResponse(p) {
        this.items = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SignResponse items.
     * @member {Array.<IItemInfo>} items
     * @memberof SignResponse
     * @instance
     */
    SignResponse.prototype.items = $util.emptyArray;

    /**
     * Creates a new SignResponse instance using the specified properties.
     * @function create
     * @memberof SignResponse
     * @static
     * @param {ISignResponse=} [properties] Properties to set
     * @returns {SignResponse} SignResponse instance
     */
    SignResponse.create = function create(properties) {
        return new SignResponse(properties);
    };

    /**
     * Encodes the specified SignResponse message. Does not implicitly {@link SignResponse.verify|verify} messages.
     * @function encode
     * @memberof SignResponse
     * @static
     * @param {ISignResponse} m SignResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SignResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.items != null && m.items.length) {
            for (var i = 0; i < m.items.length; ++i)
                $root.ItemInfo.encode(m.items[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Encodes the specified SignResponse message, length delimited. Does not implicitly {@link SignResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SignResponse
     * @static
     * @param {ISignResponse} message SignResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SignResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SignResponse message from the specified reader or buffer.
     * @function decode
     * @memberof SignResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SignResponse} SignResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SignResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SignResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.items && m.items.length))
                    m.items = [];
                m.items.push($root.ItemInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a SignResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SignResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SignResponse} SignResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SignResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SignResponse message.
     * @function verify
     * @memberof SignResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SignResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.items != null && m.hasOwnProperty("items")) {
            if (!Array.isArray(m.items))
                return "items: array expected";
            for (var i = 0; i < m.items.length; ++i) {
                {
                    var e = $root.ItemInfo.verify(m.items[i]);
                    if (e)
                        return "items." + e;
                }
            }
        }
        return null;
    };

    return SignResponse;
})();

export const DungeonDetailsRequest = $root.DungeonDetailsRequest = (() => {

    DungeonDetailsRequest.prototype.classname = 'DungeonDetailsRequest';

    /**
     * Properties of a DungeonDetailsRequest.
     * @exports IDungeonDetailsRequest
     * @interface IDungeonDetailsRequest
     */

    /**
     * Constructs a new DungeonDetailsRequest.
     * @exports DungeonDetailsRequest
     * @classdesc Represents a DungeonDetailsRequest.
     * @implements IDungeonDetailsRequest
     * @constructor
     * @param {IDungeonDetailsRequest=} [p] Properties to set
     */
    function DungeonDetailsRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new DungeonDetailsRequest instance using the specified properties.
     * @function create
     * @memberof DungeonDetailsRequest
     * @static
     * @param {IDungeonDetailsRequest=} [properties] Properties to set
     * @returns {DungeonDetailsRequest} DungeonDetailsRequest instance
     */
    DungeonDetailsRequest.create = function create(properties) {
        return new DungeonDetailsRequest(properties);
    };

    /**
     * Encodes the specified DungeonDetailsRequest message. Does not implicitly {@link DungeonDetailsRequest.verify|verify} messages.
     * @function encode
     * @memberof DungeonDetailsRequest
     * @static
     * @param {IDungeonDetailsRequest} m DungeonDetailsRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DungeonDetailsRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Encodes the specified DungeonDetailsRequest message, length delimited. Does not implicitly {@link DungeonDetailsRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DungeonDetailsRequest
     * @static
     * @param {IDungeonDetailsRequest} message DungeonDetailsRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DungeonDetailsRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DungeonDetailsRequest message from the specified reader or buffer.
     * @function decode
     * @memberof DungeonDetailsRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {DungeonDetailsRequest} DungeonDetailsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DungeonDetailsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.DungeonDetailsRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a DungeonDetailsRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DungeonDetailsRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DungeonDetailsRequest} DungeonDetailsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DungeonDetailsRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DungeonDetailsRequest message.
     * @function verify
     * @memberof DungeonDetailsRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DungeonDetailsRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        return null;
    };

    return DungeonDetailsRequest;
})();

export const DungeonDetailsResponse = $root.DungeonDetailsResponse = (() => {

    DungeonDetailsResponse.prototype.classname = 'DungeonDetailsResponse';

    /**
     * Properties of a DungeonDetailsResponse.
     * @exports IDungeonDetailsResponse
     * @interface IDungeonDetailsResponse
     * @property {number|null} [secretdungeonNum] DungeonDetailsResponse secretdungeonNum
     * @property {number|null} [illusorydungeonNum] DungeonDetailsResponse illusorydungeonNum
     * @property {number|null} [secretdungeonTicketNum] DungeonDetailsResponse secretdungeonTicketNum
     * @property {number|null} [illusorydungeonTicketNum] DungeonDetailsResponse illusorydungeonTicketNum
     */

    /**
     * Constructs a new DungeonDetailsResponse.
     * @exports DungeonDetailsResponse
     * @classdesc Represents a DungeonDetailsResponse.
     * @implements IDungeonDetailsResponse
     * @constructor
     * @param {IDungeonDetailsResponse=} [p] Properties to set
     */
    function DungeonDetailsResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * DungeonDetailsResponse secretdungeonNum.
     * @member {number} secretdungeonNum
     * @memberof DungeonDetailsResponse
     * @instance
     */
    DungeonDetailsResponse.prototype.secretdungeonNum = 0;

    /**
     * DungeonDetailsResponse illusorydungeonNum.
     * @member {number} illusorydungeonNum
     * @memberof DungeonDetailsResponse
     * @instance
     */
    DungeonDetailsResponse.prototype.illusorydungeonNum = 0;

    /**
     * DungeonDetailsResponse secretdungeonTicketNum.
     * @member {number} secretdungeonTicketNum
     * @memberof DungeonDetailsResponse
     * @instance
     */
    DungeonDetailsResponse.prototype.secretdungeonTicketNum = 0;

    /**
     * DungeonDetailsResponse illusorydungeonTicketNum.
     * @member {number} illusorydungeonTicketNum
     * @memberof DungeonDetailsResponse
     * @instance
     */
    DungeonDetailsResponse.prototype.illusorydungeonTicketNum = 0;

    /**
     * Creates a new DungeonDetailsResponse instance using the specified properties.
     * @function create
     * @memberof DungeonDetailsResponse
     * @static
     * @param {IDungeonDetailsResponse=} [properties] Properties to set
     * @returns {DungeonDetailsResponse} DungeonDetailsResponse instance
     */
    DungeonDetailsResponse.create = function create(properties) {
        return new DungeonDetailsResponse(properties);
    };

    /**
     * Encodes the specified DungeonDetailsResponse message. Does not implicitly {@link DungeonDetailsResponse.verify|verify} messages.
     * @function encode
     * @memberof DungeonDetailsResponse
     * @static
     * @param {IDungeonDetailsResponse} m DungeonDetailsResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DungeonDetailsResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.secretdungeonNum != null && Object.hasOwnProperty.call(m, "secretdungeonNum"))
            w.uint32(8).int32(m.secretdungeonNum);
        if (m.illusorydungeonNum != null && Object.hasOwnProperty.call(m, "illusorydungeonNum"))
            w.uint32(16).int32(m.illusorydungeonNum);
        if (m.secretdungeonTicketNum != null && Object.hasOwnProperty.call(m, "secretdungeonTicketNum"))
            w.uint32(24).int32(m.secretdungeonTicketNum);
        if (m.illusorydungeonTicketNum != null && Object.hasOwnProperty.call(m, "illusorydungeonTicketNum"))
            w.uint32(32).int32(m.illusorydungeonTicketNum);
        return w;
    };

    /**
     * Encodes the specified DungeonDetailsResponse message, length delimited. Does not implicitly {@link DungeonDetailsResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DungeonDetailsResponse
     * @static
     * @param {IDungeonDetailsResponse} message DungeonDetailsResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DungeonDetailsResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DungeonDetailsResponse message from the specified reader or buffer.
     * @function decode
     * @memberof DungeonDetailsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {DungeonDetailsResponse} DungeonDetailsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DungeonDetailsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.DungeonDetailsResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.secretdungeonNum = r.int32();
                break;
            case 2:
                m.illusorydungeonNum = r.int32();
                break;
            case 3:
                m.secretdungeonTicketNum = r.int32();
                break;
            case 4:
                m.illusorydungeonTicketNum = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a DungeonDetailsResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DungeonDetailsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DungeonDetailsResponse} DungeonDetailsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DungeonDetailsResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DungeonDetailsResponse message.
     * @function verify
     * @memberof DungeonDetailsResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DungeonDetailsResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.secretdungeonNum != null && m.hasOwnProperty("secretdungeonNum")) {
            if (!$util.isInteger(m.secretdungeonNum))
                return "secretdungeonNum: integer expected";
        }
        if (m.illusorydungeonNum != null && m.hasOwnProperty("illusorydungeonNum")) {
            if (!$util.isInteger(m.illusorydungeonNum))
                return "illusorydungeonNum: integer expected";
        }
        if (m.secretdungeonTicketNum != null && m.hasOwnProperty("secretdungeonTicketNum")) {
            if (!$util.isInteger(m.secretdungeonTicketNum))
                return "secretdungeonTicketNum: integer expected";
        }
        if (m.illusorydungeonTicketNum != null && m.hasOwnProperty("illusorydungeonTicketNum")) {
            if (!$util.isInteger(m.illusorydungeonTicketNum))
                return "illusorydungeonTicketNum: integer expected";
        }
        return null;
    };

    return DungeonDetailsResponse;
})();

export const TaskDetails = $root.TaskDetails = (() => {

    TaskDetails.prototype.classname = 'TaskDetails';

    /**
     * Properties of a TaskDetails.
     * @exports ITaskDetails
     * @interface ITaskDetails
     * @property {number|null} [taskId] TaskDetails taskId
     * @property {number|null} [total] TaskDetails total
     * @property {number|null} [progress] TaskDetails progress
     * @property {boolean|null} [complete] TaskDetails complete
     * @property {boolean|null} [receive] TaskDetails receive
     */

    /**
     * Constructs a new TaskDetails.
     * @exports TaskDetails
     * @classdesc Represents a TaskDetails.
     * @implements ITaskDetails
     * @constructor
     * @param {ITaskDetails=} [p] Properties to set
     */
    function TaskDetails(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * TaskDetails taskId.
     * @member {number} taskId
     * @memberof TaskDetails
     * @instance
     */
    TaskDetails.prototype.taskId = 0;

    /**
     * TaskDetails total.
     * @member {number} total
     * @memberof TaskDetails
     * @instance
     */
    TaskDetails.prototype.total = 0;

    /**
     * TaskDetails progress.
     * @member {number} progress
     * @memberof TaskDetails
     * @instance
     */
    TaskDetails.prototype.progress = 0;

    /**
     * TaskDetails complete.
     * @member {boolean} complete
     * @memberof TaskDetails
     * @instance
     */
    TaskDetails.prototype.complete = false;

    /**
     * TaskDetails receive.
     * @member {boolean} receive
     * @memberof TaskDetails
     * @instance
     */
    TaskDetails.prototype.receive = false;

    /**
     * Creates a new TaskDetails instance using the specified properties.
     * @function create
     * @memberof TaskDetails
     * @static
     * @param {ITaskDetails=} [properties] Properties to set
     * @returns {TaskDetails} TaskDetails instance
     */
    TaskDetails.create = function create(properties) {
        return new TaskDetails(properties);
    };

    /**
     * Encodes the specified TaskDetails message. Does not implicitly {@link TaskDetails.verify|verify} messages.
     * @function encode
     * @memberof TaskDetails
     * @static
     * @param {ITaskDetails} m TaskDetails message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TaskDetails.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.taskId != null && Object.hasOwnProperty.call(m, "taskId"))
            w.uint32(8).int32(m.taskId);
        if (m.total != null && Object.hasOwnProperty.call(m, "total"))
            w.uint32(16).int32(m.total);
        if (m.progress != null && Object.hasOwnProperty.call(m, "progress"))
            w.uint32(24).int32(m.progress);
        if (m.complete != null && Object.hasOwnProperty.call(m, "complete"))
            w.uint32(32).bool(m.complete);
        if (m.receive != null && Object.hasOwnProperty.call(m, "receive"))
            w.uint32(40).bool(m.receive);
        return w;
    };

    /**
     * Encodes the specified TaskDetails message, length delimited. Does not implicitly {@link TaskDetails.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TaskDetails
     * @static
     * @param {ITaskDetails} message TaskDetails message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TaskDetails.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TaskDetails message from the specified reader or buffer.
     * @function decode
     * @memberof TaskDetails
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {TaskDetails} TaskDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TaskDetails.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.TaskDetails();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.taskId = r.int32();
                break;
            case 2:
                m.total = r.int32();
                break;
            case 3:
                m.progress = r.int32();
                break;
            case 4:
                m.complete = r.bool();
                break;
            case 5:
                m.receive = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a TaskDetails message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TaskDetails
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TaskDetails} TaskDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TaskDetails.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TaskDetails message.
     * @function verify
     * @memberof TaskDetails
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TaskDetails.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.taskId != null && m.hasOwnProperty("taskId")) {
            if (!$util.isInteger(m.taskId))
                return "taskId: integer expected";
        }
        if (m.total != null && m.hasOwnProperty("total")) {
            if (!$util.isInteger(m.total))
                return "total: integer expected";
        }
        if (m.progress != null && m.hasOwnProperty("progress")) {
            if (!$util.isInteger(m.progress))
                return "progress: integer expected";
        }
        if (m.complete != null && m.hasOwnProperty("complete")) {
            if (typeof m.complete !== "boolean")
                return "complete: boolean expected";
        }
        if (m.receive != null && m.hasOwnProperty("receive")) {
            if (typeof m.receive !== "boolean")
                return "receive: boolean expected";
        }
        return null;
    };

    return TaskDetails;
})();

export const TaskDetailsRequest = $root.TaskDetailsRequest = (() => {

    TaskDetailsRequest.prototype.classname = 'TaskDetailsRequest';

    /**
     * Properties of a TaskDetailsRequest.
     * @exports ITaskDetailsRequest
     * @interface ITaskDetailsRequest
     */

    /**
     * Constructs a new TaskDetailsRequest.
     * @exports TaskDetailsRequest
     * @classdesc Represents a TaskDetailsRequest.
     * @implements ITaskDetailsRequest
     * @constructor
     * @param {ITaskDetailsRequest=} [p] Properties to set
     */
    function TaskDetailsRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new TaskDetailsRequest instance using the specified properties.
     * @function create
     * @memberof TaskDetailsRequest
     * @static
     * @param {ITaskDetailsRequest=} [properties] Properties to set
     * @returns {TaskDetailsRequest} TaskDetailsRequest instance
     */
    TaskDetailsRequest.create = function create(properties) {
        return new TaskDetailsRequest(properties);
    };

    /**
     * Encodes the specified TaskDetailsRequest message. Does not implicitly {@link TaskDetailsRequest.verify|verify} messages.
     * @function encode
     * @memberof TaskDetailsRequest
     * @static
     * @param {ITaskDetailsRequest} m TaskDetailsRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TaskDetailsRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Encodes the specified TaskDetailsRequest message, length delimited. Does not implicitly {@link TaskDetailsRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TaskDetailsRequest
     * @static
     * @param {ITaskDetailsRequest} message TaskDetailsRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TaskDetailsRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TaskDetailsRequest message from the specified reader or buffer.
     * @function decode
     * @memberof TaskDetailsRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {TaskDetailsRequest} TaskDetailsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TaskDetailsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.TaskDetailsRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a TaskDetailsRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TaskDetailsRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TaskDetailsRequest} TaskDetailsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TaskDetailsRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TaskDetailsRequest message.
     * @function verify
     * @memberof TaskDetailsRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TaskDetailsRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        return null;
    };

    return TaskDetailsRequest;
})();

export const TaskDetailsResponse = $root.TaskDetailsResponse = (() => {

    TaskDetailsResponse.prototype.classname = 'TaskDetailsResponse';

    /**
     * Properties of a TaskDetailsResponse.
     * @exports ITaskDetailsResponse
     * @interface ITaskDetailsResponse
     * @property {Array.<ITaskDetails>|null} [daily] TaskDetailsResponse daily
     * @property {Array.<ITaskDetails>|null} [head] TaskDetailsResponse head
     */

    /**
     * Constructs a new TaskDetailsResponse.
     * @exports TaskDetailsResponse
     * @classdesc Represents a TaskDetailsResponse.
     * @implements ITaskDetailsResponse
     * @constructor
     * @param {ITaskDetailsResponse=} [p] Properties to set
     */
    function TaskDetailsResponse(p) {
        this.daily = [];
        this.head = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * TaskDetailsResponse daily.
     * @member {Array.<ITaskDetails>} daily
     * @memberof TaskDetailsResponse
     * @instance
     */
    TaskDetailsResponse.prototype.daily = $util.emptyArray;

    /**
     * TaskDetailsResponse head.
     * @member {Array.<ITaskDetails>} head
     * @memberof TaskDetailsResponse
     * @instance
     */
    TaskDetailsResponse.prototype.head = $util.emptyArray;

    /**
     * Creates a new TaskDetailsResponse instance using the specified properties.
     * @function create
     * @memberof TaskDetailsResponse
     * @static
     * @param {ITaskDetailsResponse=} [properties] Properties to set
     * @returns {TaskDetailsResponse} TaskDetailsResponse instance
     */
    TaskDetailsResponse.create = function create(properties) {
        return new TaskDetailsResponse(properties);
    };

    /**
     * Encodes the specified TaskDetailsResponse message. Does not implicitly {@link TaskDetailsResponse.verify|verify} messages.
     * @function encode
     * @memberof TaskDetailsResponse
     * @static
     * @param {ITaskDetailsResponse} m TaskDetailsResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TaskDetailsResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.daily != null && m.daily.length) {
            for (var i = 0; i < m.daily.length; ++i)
                $root.TaskDetails.encode(m.daily[i], w.uint32(10).fork()).ldelim();
        }
        if (m.head != null && m.head.length) {
            for (var i = 0; i < m.head.length; ++i)
                $root.TaskDetails.encode(m.head[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    /**
     * Encodes the specified TaskDetailsResponse message, length delimited. Does not implicitly {@link TaskDetailsResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TaskDetailsResponse
     * @static
     * @param {ITaskDetailsResponse} message TaskDetailsResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TaskDetailsResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TaskDetailsResponse message from the specified reader or buffer.
     * @function decode
     * @memberof TaskDetailsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {TaskDetailsResponse} TaskDetailsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TaskDetailsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.TaskDetailsResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.daily && m.daily.length))
                    m.daily = [];
                m.daily.push($root.TaskDetails.decode(r, r.uint32()));
                break;
            case 2:
                if (!(m.head && m.head.length))
                    m.head = [];
                m.head.push($root.TaskDetails.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a TaskDetailsResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TaskDetailsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TaskDetailsResponse} TaskDetailsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TaskDetailsResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TaskDetailsResponse message.
     * @function verify
     * @memberof TaskDetailsResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TaskDetailsResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.daily != null && m.hasOwnProperty("daily")) {
            if (!Array.isArray(m.daily))
                return "daily: array expected";
            for (var i = 0; i < m.daily.length; ++i) {
                {
                    var e = $root.TaskDetails.verify(m.daily[i]);
                    if (e)
                        return "daily." + e;
                }
            }
        }
        if (m.head != null && m.hasOwnProperty("head")) {
            if (!Array.isArray(m.head))
                return "head: array expected";
            for (var i = 0; i < m.head.length; ++i) {
                {
                    var e = $root.TaskDetails.verify(m.head[i]);
                    if (e)
                        return "head." + e;
                }
            }
        }
        return null;
    };

    return TaskDetailsResponse;
})();

export const TaskReceiveRequest = $root.TaskReceiveRequest = (() => {

    TaskReceiveRequest.prototype.classname = 'TaskReceiveRequest';

    /**
     * Properties of a TaskReceiveRequest.
     * @exports ITaskReceiveRequest
     * @interface ITaskReceiveRequest
     * @property {number|null} [taskId] TaskReceiveRequest taskId
     */

    /**
     * Constructs a new TaskReceiveRequest.
     * @exports TaskReceiveRequest
     * @classdesc Represents a TaskReceiveRequest.
     * @implements ITaskReceiveRequest
     * @constructor
     * @param {ITaskReceiveRequest=} [p] Properties to set
     */
    function TaskReceiveRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * TaskReceiveRequest taskId.
     * @member {number} taskId
     * @memberof TaskReceiveRequest
     * @instance
     */
    TaskReceiveRequest.prototype.taskId = 0;

    /**
     * Creates a new TaskReceiveRequest instance using the specified properties.
     * @function create
     * @memberof TaskReceiveRequest
     * @static
     * @param {ITaskReceiveRequest=} [properties] Properties to set
     * @returns {TaskReceiveRequest} TaskReceiveRequest instance
     */
    TaskReceiveRequest.create = function create(properties) {
        return new TaskReceiveRequest(properties);
    };

    /**
     * Encodes the specified TaskReceiveRequest message. Does not implicitly {@link TaskReceiveRequest.verify|verify} messages.
     * @function encode
     * @memberof TaskReceiveRequest
     * @static
     * @param {ITaskReceiveRequest} m TaskReceiveRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TaskReceiveRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.taskId != null && Object.hasOwnProperty.call(m, "taskId"))
            w.uint32(8).int32(m.taskId);
        return w;
    };

    /**
     * Encodes the specified TaskReceiveRequest message, length delimited. Does not implicitly {@link TaskReceiveRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TaskReceiveRequest
     * @static
     * @param {ITaskReceiveRequest} message TaskReceiveRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TaskReceiveRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TaskReceiveRequest message from the specified reader or buffer.
     * @function decode
     * @memberof TaskReceiveRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {TaskReceiveRequest} TaskReceiveRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TaskReceiveRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.TaskReceiveRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.taskId = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a TaskReceiveRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TaskReceiveRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TaskReceiveRequest} TaskReceiveRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TaskReceiveRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TaskReceiveRequest message.
     * @function verify
     * @memberof TaskReceiveRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TaskReceiveRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.taskId != null && m.hasOwnProperty("taskId")) {
            if (!$util.isInteger(m.taskId))
                return "taskId: integer expected";
        }
        return null;
    };

    return TaskReceiveRequest;
})();

export const TaskReceiveResponse = $root.TaskReceiveResponse = (() => {

    TaskReceiveResponse.prototype.classname = 'TaskReceiveResponse';

    /**
     * Properties of a TaskReceiveResponse.
     * @exports ITaskReceiveResponse
     * @interface ITaskReceiveResponse
     */

    /**
     * Constructs a new TaskReceiveResponse.
     * @exports TaskReceiveResponse
     * @classdesc Represents a TaskReceiveResponse.
     * @implements ITaskReceiveResponse
     * @constructor
     * @param {ITaskReceiveResponse=} [p] Properties to set
     */
    function TaskReceiveResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new TaskReceiveResponse instance using the specified properties.
     * @function create
     * @memberof TaskReceiveResponse
     * @static
     * @param {ITaskReceiveResponse=} [properties] Properties to set
     * @returns {TaskReceiveResponse} TaskReceiveResponse instance
     */
    TaskReceiveResponse.create = function create(properties) {
        return new TaskReceiveResponse(properties);
    };

    /**
     * Encodes the specified TaskReceiveResponse message. Does not implicitly {@link TaskReceiveResponse.verify|verify} messages.
     * @function encode
     * @memberof TaskReceiveResponse
     * @static
     * @param {ITaskReceiveResponse} m TaskReceiveResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TaskReceiveResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Encodes the specified TaskReceiveResponse message, length delimited. Does not implicitly {@link TaskReceiveResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TaskReceiveResponse
     * @static
     * @param {ITaskReceiveResponse} message TaskReceiveResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TaskReceiveResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TaskReceiveResponse message from the specified reader or buffer.
     * @function decode
     * @memberof TaskReceiveResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {TaskReceiveResponse} TaskReceiveResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TaskReceiveResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.TaskReceiveResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a TaskReceiveResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TaskReceiveResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TaskReceiveResponse} TaskReceiveResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TaskReceiveResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TaskReceiveResponse message.
     * @function verify
     * @memberof TaskReceiveResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TaskReceiveResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        return null;
    };

    return TaskReceiveResponse;
})();

export const ItemUseRequest = $root.ItemUseRequest = (() => {

    ItemUseRequest.prototype.classname = 'ItemUseRequest';

    /**
     * Properties of an ItemUseRequest.
     * @exports IItemUseRequest
     * @interface IItemUseRequest
     * @property {number|null} [itemId] ItemUseRequest itemId
     * @property {number|null} [num] ItemUseRequest num
     */

    /**
     * Constructs a new ItemUseRequest.
     * @exports ItemUseRequest
     * @classdesc Represents an ItemUseRequest.
     * @implements IItemUseRequest
     * @constructor
     * @param {IItemUseRequest=} [p] Properties to set
     */
    function ItemUseRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ItemUseRequest itemId.
     * @member {number} itemId
     * @memberof ItemUseRequest
     * @instance
     */
    ItemUseRequest.prototype.itemId = 0;

    /**
     * ItemUseRequest num.
     * @member {number} num
     * @memberof ItemUseRequest
     * @instance
     */
    ItemUseRequest.prototype.num = 0;

    /**
     * Creates a new ItemUseRequest instance using the specified properties.
     * @function create
     * @memberof ItemUseRequest
     * @static
     * @param {IItemUseRequest=} [properties] Properties to set
     * @returns {ItemUseRequest} ItemUseRequest instance
     */
    ItemUseRequest.create = function create(properties) {
        return new ItemUseRequest(properties);
    };

    /**
     * Encodes the specified ItemUseRequest message. Does not implicitly {@link ItemUseRequest.verify|verify} messages.
     * @function encode
     * @memberof ItemUseRequest
     * @static
     * @param {IItemUseRequest} m ItemUseRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ItemUseRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.itemId != null && Object.hasOwnProperty.call(m, "itemId"))
            w.uint32(8).int32(m.itemId);
        if (m.num != null && Object.hasOwnProperty.call(m, "num"))
            w.uint32(16).int32(m.num);
        return w;
    };

    /**
     * Encodes the specified ItemUseRequest message, length delimited. Does not implicitly {@link ItemUseRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ItemUseRequest
     * @static
     * @param {IItemUseRequest} message ItemUseRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ItemUseRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ItemUseRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ItemUseRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ItemUseRequest} ItemUseRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ItemUseRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ItemUseRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.itemId = r.int32();
                break;
            case 2:
                m.num = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes an ItemUseRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ItemUseRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ItemUseRequest} ItemUseRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ItemUseRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ItemUseRequest message.
     * @function verify
     * @memberof ItemUseRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ItemUseRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.itemId != null && m.hasOwnProperty("itemId")) {
            if (!$util.isInteger(m.itemId))
                return "itemId: integer expected";
        }
        if (m.num != null && m.hasOwnProperty("num")) {
            if (!$util.isInteger(m.num))
                return "num: integer expected";
        }
        return null;
    };

    return ItemUseRequest;
})();

export const ItemUseResponse = $root.ItemUseResponse = (() => {

    ItemUseResponse.prototype.classname = 'ItemUseResponse';

    /**
     * Properties of an ItemUseResponse.
     * @exports IItemUseResponse
     * @interface IItemUseResponse
     */

    /**
     * Constructs a new ItemUseResponse.
     * @exports ItemUseResponse
     * @classdesc Represents an ItemUseResponse.
     * @implements IItemUseResponse
     * @constructor
     * @param {IItemUseResponse=} [p] Properties to set
     */
    function ItemUseResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new ItemUseResponse instance using the specified properties.
     * @function create
     * @memberof ItemUseResponse
     * @static
     * @param {IItemUseResponse=} [properties] Properties to set
     * @returns {ItemUseResponse} ItemUseResponse instance
     */
    ItemUseResponse.create = function create(properties) {
        return new ItemUseResponse(properties);
    };

    /**
     * Encodes the specified ItemUseResponse message. Does not implicitly {@link ItemUseResponse.verify|verify} messages.
     * @function encode
     * @memberof ItemUseResponse
     * @static
     * @param {IItemUseResponse} m ItemUseResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ItemUseResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Encodes the specified ItemUseResponse message, length delimited. Does not implicitly {@link ItemUseResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ItemUseResponse
     * @static
     * @param {IItemUseResponse} message ItemUseResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ItemUseResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ItemUseResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ItemUseResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ItemUseResponse} ItemUseResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ItemUseResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ItemUseResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes an ItemUseResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ItemUseResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ItemUseResponse} ItemUseResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ItemUseResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ItemUseResponse message.
     * @function verify
     * @memberof ItemUseResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ItemUseResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        return null;
    };

    return ItemUseResponse;
})();

export const ItemChooseOneRequest = $root.ItemChooseOneRequest = (() => {

    ItemChooseOneRequest.prototype.classname = 'ItemChooseOneRequest';

    /**
     * Properties of an ItemChooseOneRequest.
     * @exports IItemChooseOneRequest
     * @interface IItemChooseOneRequest
     * @property {number|null} [itemId] ItemChooseOneRequest itemId
     * @property {number|null} [composeItemId] ItemChooseOneRequest composeItemId
     */

    /**
     * Constructs a new ItemChooseOneRequest.
     * @exports ItemChooseOneRequest
     * @classdesc Represents an ItemChooseOneRequest.
     * @implements IItemChooseOneRequest
     * @constructor
     * @param {IItemChooseOneRequest=} [p] Properties to set
     */
    function ItemChooseOneRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ItemChooseOneRequest itemId.
     * @member {number} itemId
     * @memberof ItemChooseOneRequest
     * @instance
     */
    ItemChooseOneRequest.prototype.itemId = 0;

    /**
     * ItemChooseOneRequest composeItemId.
     * @member {number} composeItemId
     * @memberof ItemChooseOneRequest
     * @instance
     */
    ItemChooseOneRequest.prototype.composeItemId = 0;

    /**
     * Creates a new ItemChooseOneRequest instance using the specified properties.
     * @function create
     * @memberof ItemChooseOneRequest
     * @static
     * @param {IItemChooseOneRequest=} [properties] Properties to set
     * @returns {ItemChooseOneRequest} ItemChooseOneRequest instance
     */
    ItemChooseOneRequest.create = function create(properties) {
        return new ItemChooseOneRequest(properties);
    };

    /**
     * Encodes the specified ItemChooseOneRequest message. Does not implicitly {@link ItemChooseOneRequest.verify|verify} messages.
     * @function encode
     * @memberof ItemChooseOneRequest
     * @static
     * @param {IItemChooseOneRequest} m ItemChooseOneRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ItemChooseOneRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.itemId != null && Object.hasOwnProperty.call(m, "itemId"))
            w.uint32(8).int32(m.itemId);
        if (m.composeItemId != null && Object.hasOwnProperty.call(m, "composeItemId"))
            w.uint32(16).int32(m.composeItemId);
        return w;
    };

    /**
     * Encodes the specified ItemChooseOneRequest message, length delimited. Does not implicitly {@link ItemChooseOneRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ItemChooseOneRequest
     * @static
     * @param {IItemChooseOneRequest} message ItemChooseOneRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ItemChooseOneRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ItemChooseOneRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ItemChooseOneRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ItemChooseOneRequest} ItemChooseOneRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ItemChooseOneRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ItemChooseOneRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.itemId = r.int32();
                break;
            case 2:
                m.composeItemId = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes an ItemChooseOneRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ItemChooseOneRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ItemChooseOneRequest} ItemChooseOneRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ItemChooseOneRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ItemChooseOneRequest message.
     * @function verify
     * @memberof ItemChooseOneRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ItemChooseOneRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.itemId != null && m.hasOwnProperty("itemId")) {
            if (!$util.isInteger(m.itemId))
                return "itemId: integer expected";
        }
        if (m.composeItemId != null && m.hasOwnProperty("composeItemId")) {
            if (!$util.isInteger(m.composeItemId))
                return "composeItemId: integer expected";
        }
        return null;
    };

    return ItemChooseOneRequest;
})();

export const ItemChooseOneResponse = $root.ItemChooseOneResponse = (() => {

    ItemChooseOneResponse.prototype.classname = 'ItemChooseOneResponse';

    /**
     * Properties of an ItemChooseOneResponse.
     * @exports IItemChooseOneResponse
     * @interface IItemChooseOneResponse
     */

    /**
     * Constructs a new ItemChooseOneResponse.
     * @exports ItemChooseOneResponse
     * @classdesc Represents an ItemChooseOneResponse.
     * @implements IItemChooseOneResponse
     * @constructor
     * @param {IItemChooseOneResponse=} [p] Properties to set
     */
    function ItemChooseOneResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new ItemChooseOneResponse instance using the specified properties.
     * @function create
     * @memberof ItemChooseOneResponse
     * @static
     * @param {IItemChooseOneResponse=} [properties] Properties to set
     * @returns {ItemChooseOneResponse} ItemChooseOneResponse instance
     */
    ItemChooseOneResponse.create = function create(properties) {
        return new ItemChooseOneResponse(properties);
    };

    /**
     * Encodes the specified ItemChooseOneResponse message. Does not implicitly {@link ItemChooseOneResponse.verify|verify} messages.
     * @function encode
     * @memberof ItemChooseOneResponse
     * @static
     * @param {IItemChooseOneResponse} m ItemChooseOneResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ItemChooseOneResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Encodes the specified ItemChooseOneResponse message, length delimited. Does not implicitly {@link ItemChooseOneResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ItemChooseOneResponse
     * @static
     * @param {IItemChooseOneResponse} message ItemChooseOneResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ItemChooseOneResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ItemChooseOneResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ItemChooseOneResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ItemChooseOneResponse} ItemChooseOneResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ItemChooseOneResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ItemChooseOneResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes an ItemChooseOneResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ItemChooseOneResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ItemChooseOneResponse} ItemChooseOneResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ItemChooseOneResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ItemChooseOneResponse message.
     * @function verify
     * @memberof ItemChooseOneResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ItemChooseOneResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        return null;
    };

    return ItemChooseOneResponse;
})();

export const ItemOpenResolveRequest = $root.ItemOpenResolveRequest = (() => {

    ItemOpenResolveRequest.prototype.classname = 'ItemOpenResolveRequest';

    /**
     * Properties of an ItemOpenResolveRequest.
     * @exports IItemOpenResolveRequest
     * @interface IItemOpenResolveRequest
     * @property {number|null} [type] ItemOpenResolveRequest type
     */

    /**
     * Constructs a new ItemOpenResolveRequest.
     * @exports ItemOpenResolveRequest
     * @classdesc Represents an ItemOpenResolveRequest.
     * @implements IItemOpenResolveRequest
     * @constructor
     * @param {IItemOpenResolveRequest=} [p] Properties to set
     */
    function ItemOpenResolveRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ItemOpenResolveRequest type.
     * @member {number} type
     * @memberof ItemOpenResolveRequest
     * @instance
     */
    ItemOpenResolveRequest.prototype.type = 0;

    /**
     * Creates a new ItemOpenResolveRequest instance using the specified properties.
     * @function create
     * @memberof ItemOpenResolveRequest
     * @static
     * @param {IItemOpenResolveRequest=} [properties] Properties to set
     * @returns {ItemOpenResolveRequest} ItemOpenResolveRequest instance
     */
    ItemOpenResolveRequest.create = function create(properties) {
        return new ItemOpenResolveRequest(properties);
    };

    /**
     * Encodes the specified ItemOpenResolveRequest message. Does not implicitly {@link ItemOpenResolveRequest.verify|verify} messages.
     * @function encode
     * @memberof ItemOpenResolveRequest
     * @static
     * @param {IItemOpenResolveRequest} m ItemOpenResolveRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ItemOpenResolveRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.type != null && Object.hasOwnProperty.call(m, "type"))
            w.uint32(8).int32(m.type);
        return w;
    };

    /**
     * Encodes the specified ItemOpenResolveRequest message, length delimited. Does not implicitly {@link ItemOpenResolveRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ItemOpenResolveRequest
     * @static
     * @param {IItemOpenResolveRequest} message ItemOpenResolveRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ItemOpenResolveRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ItemOpenResolveRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ItemOpenResolveRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ItemOpenResolveRequest} ItemOpenResolveRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ItemOpenResolveRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ItemOpenResolveRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.type = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes an ItemOpenResolveRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ItemOpenResolveRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ItemOpenResolveRequest} ItemOpenResolveRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ItemOpenResolveRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ItemOpenResolveRequest message.
     * @function verify
     * @memberof ItemOpenResolveRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ItemOpenResolveRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.type != null && m.hasOwnProperty("type")) {
            if (!$util.isInteger(m.type))
                return "type: integer expected";
        }
        return null;
    };

    return ItemOpenResolveRequest;
})();

export const ItemOpenResolveResponse = $root.ItemOpenResolveResponse = (() => {

    ItemOpenResolveResponse.prototype.classname = 'ItemOpenResolveResponse';

    /**
     * Properties of an ItemOpenResolveResponse.
     * @exports IItemOpenResolveResponse
     * @interface IItemOpenResolveResponse
     */

    /**
     * Constructs a new ItemOpenResolveResponse.
     * @exports ItemOpenResolveResponse
     * @classdesc Represents an ItemOpenResolveResponse.
     * @implements IItemOpenResolveResponse
     * @constructor
     * @param {IItemOpenResolveResponse=} [p] Properties to set
     */
    function ItemOpenResolveResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new ItemOpenResolveResponse instance using the specified properties.
     * @function create
     * @memberof ItemOpenResolveResponse
     * @static
     * @param {IItemOpenResolveResponse=} [properties] Properties to set
     * @returns {ItemOpenResolveResponse} ItemOpenResolveResponse instance
     */
    ItemOpenResolveResponse.create = function create(properties) {
        return new ItemOpenResolveResponse(properties);
    };

    /**
     * Encodes the specified ItemOpenResolveResponse message. Does not implicitly {@link ItemOpenResolveResponse.verify|verify} messages.
     * @function encode
     * @memberof ItemOpenResolveResponse
     * @static
     * @param {IItemOpenResolveResponse} m ItemOpenResolveResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ItemOpenResolveResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Encodes the specified ItemOpenResolveResponse message, length delimited. Does not implicitly {@link ItemOpenResolveResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ItemOpenResolveResponse
     * @static
     * @param {IItemOpenResolveResponse} message ItemOpenResolveResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ItemOpenResolveResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ItemOpenResolveResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ItemOpenResolveResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ItemOpenResolveResponse} ItemOpenResolveResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ItemOpenResolveResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ItemOpenResolveResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes an ItemOpenResolveResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ItemOpenResolveResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ItemOpenResolveResponse} ItemOpenResolveResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ItemOpenResolveResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ItemOpenResolveResponse message.
     * @function verify
     * @memberof ItemOpenResolveResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ItemOpenResolveResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        return null;
    };

    return ItemOpenResolveResponse;
})();

export const ShopBuyRequest = $root.ShopBuyRequest = (() => {

    ShopBuyRequest.prototype.classname = 'ShopBuyRequest';

    /**
     * Properties of a ShopBuyRequest.
     * @exports IShopBuyRequest
     * @interface IShopBuyRequest
     * @property {string|null} [shopType] ShopBuyRequest shopType
     * @property {number|null} [shopItemId] ShopBuyRequest shopItemId
     * @property {number|null} [num] ShopBuyRequest num
     */

    /**
     * Constructs a new ShopBuyRequest.
     * @exports ShopBuyRequest
     * @classdesc Represents a ShopBuyRequest.
     * @implements IShopBuyRequest
     * @constructor
     * @param {IShopBuyRequest=} [p] Properties to set
     */
    function ShopBuyRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ShopBuyRequest shopType.
     * @member {string} shopType
     * @memberof ShopBuyRequest
     * @instance
     */
    ShopBuyRequest.prototype.shopType = "";

    /**
     * ShopBuyRequest shopItemId.
     * @member {number} shopItemId
     * @memberof ShopBuyRequest
     * @instance
     */
    ShopBuyRequest.prototype.shopItemId = 0;

    /**
     * ShopBuyRequest num.
     * @member {number} num
     * @memberof ShopBuyRequest
     * @instance
     */
    ShopBuyRequest.prototype.num = 0;

    /**
     * Creates a new ShopBuyRequest instance using the specified properties.
     * @function create
     * @memberof ShopBuyRequest
     * @static
     * @param {IShopBuyRequest=} [properties] Properties to set
     * @returns {ShopBuyRequest} ShopBuyRequest instance
     */
    ShopBuyRequest.create = function create(properties) {
        return new ShopBuyRequest(properties);
    };

    /**
     * Encodes the specified ShopBuyRequest message. Does not implicitly {@link ShopBuyRequest.verify|verify} messages.
     * @function encode
     * @memberof ShopBuyRequest
     * @static
     * @param {IShopBuyRequest} m ShopBuyRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ShopBuyRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.shopType != null && Object.hasOwnProperty.call(m, "shopType"))
            w.uint32(10).string(m.shopType);
        if (m.shopItemId != null && Object.hasOwnProperty.call(m, "shopItemId"))
            w.uint32(16).int32(m.shopItemId);
        if (m.num != null && Object.hasOwnProperty.call(m, "num"))
            w.uint32(24).int32(m.num);
        return w;
    };

    /**
     * Encodes the specified ShopBuyRequest message, length delimited. Does not implicitly {@link ShopBuyRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ShopBuyRequest
     * @static
     * @param {IShopBuyRequest} message ShopBuyRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ShopBuyRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ShopBuyRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ShopBuyRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ShopBuyRequest} ShopBuyRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ShopBuyRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ShopBuyRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.shopType = r.string();
                break;
            case 2:
                m.shopItemId = r.int32();
                break;
            case 3:
                m.num = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a ShopBuyRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ShopBuyRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ShopBuyRequest} ShopBuyRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ShopBuyRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ShopBuyRequest message.
     * @function verify
     * @memberof ShopBuyRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ShopBuyRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.shopType != null && m.hasOwnProperty("shopType")) {
            if (!$util.isString(m.shopType))
                return "shopType: string expected";
        }
        if (m.shopItemId != null && m.hasOwnProperty("shopItemId")) {
            if (!$util.isInteger(m.shopItemId))
                return "shopItemId: integer expected";
        }
        if (m.num != null && m.hasOwnProperty("num")) {
            if (!$util.isInteger(m.num))
                return "num: integer expected";
        }
        return null;
    };

    return ShopBuyRequest;
})();

export const ShopBuyResponse = $root.ShopBuyResponse = (() => {

    ShopBuyResponse.prototype.classname = 'ShopBuyResponse';

    /**
     * Properties of a ShopBuyResponse.
     * @exports IShopBuyResponse
     * @interface IShopBuyResponse
     */

    /**
     * Constructs a new ShopBuyResponse.
     * @exports ShopBuyResponse
     * @classdesc Represents a ShopBuyResponse.
     * @implements IShopBuyResponse
     * @constructor
     * @param {IShopBuyResponse=} [p] Properties to set
     */
    function ShopBuyResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new ShopBuyResponse instance using the specified properties.
     * @function create
     * @memberof ShopBuyResponse
     * @static
     * @param {IShopBuyResponse=} [properties] Properties to set
     * @returns {ShopBuyResponse} ShopBuyResponse instance
     */
    ShopBuyResponse.create = function create(properties) {
        return new ShopBuyResponse(properties);
    };

    /**
     * Encodes the specified ShopBuyResponse message. Does not implicitly {@link ShopBuyResponse.verify|verify} messages.
     * @function encode
     * @memberof ShopBuyResponse
     * @static
     * @param {IShopBuyResponse} m ShopBuyResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ShopBuyResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Encodes the specified ShopBuyResponse message, length delimited. Does not implicitly {@link ShopBuyResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ShopBuyResponse
     * @static
     * @param {IShopBuyResponse} message ShopBuyResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ShopBuyResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ShopBuyResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ShopBuyResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ShopBuyResponse} ShopBuyResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ShopBuyResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ShopBuyResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a ShopBuyResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ShopBuyResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ShopBuyResponse} ShopBuyResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ShopBuyResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ShopBuyResponse message.
     * @function verify
     * @memberof ShopBuyResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ShopBuyResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        return null;
    };

    return ShopBuyResponse;
})();

export const ShopBuyNumRequest = $root.ShopBuyNumRequest = (() => {

    ShopBuyNumRequest.prototype.classname = 'ShopBuyNumRequest';

    /**
     * Properties of a ShopBuyNumRequest.
     * @exports IShopBuyNumRequest
     * @interface IShopBuyNumRequest
     * @property {string|null} [shopType] ShopBuyNumRequest shopType
     */

    /**
     * Constructs a new ShopBuyNumRequest.
     * @exports ShopBuyNumRequest
     * @classdesc Represents a ShopBuyNumRequest.
     * @implements IShopBuyNumRequest
     * @constructor
     * @param {IShopBuyNumRequest=} [p] Properties to set
     */
    function ShopBuyNumRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ShopBuyNumRequest shopType.
     * @member {string} shopType
     * @memberof ShopBuyNumRequest
     * @instance
     */
    ShopBuyNumRequest.prototype.shopType = "";

    /**
     * Creates a new ShopBuyNumRequest instance using the specified properties.
     * @function create
     * @memberof ShopBuyNumRequest
     * @static
     * @param {IShopBuyNumRequest=} [properties] Properties to set
     * @returns {ShopBuyNumRequest} ShopBuyNumRequest instance
     */
    ShopBuyNumRequest.create = function create(properties) {
        return new ShopBuyNumRequest(properties);
    };

    /**
     * Encodes the specified ShopBuyNumRequest message. Does not implicitly {@link ShopBuyNumRequest.verify|verify} messages.
     * @function encode
     * @memberof ShopBuyNumRequest
     * @static
     * @param {IShopBuyNumRequest} m ShopBuyNumRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ShopBuyNumRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.shopType != null && Object.hasOwnProperty.call(m, "shopType"))
            w.uint32(10).string(m.shopType);
        return w;
    };

    /**
     * Encodes the specified ShopBuyNumRequest message, length delimited. Does not implicitly {@link ShopBuyNumRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ShopBuyNumRequest
     * @static
     * @param {IShopBuyNumRequest} message ShopBuyNumRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ShopBuyNumRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ShopBuyNumRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ShopBuyNumRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ShopBuyNumRequest} ShopBuyNumRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ShopBuyNumRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ShopBuyNumRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.shopType = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a ShopBuyNumRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ShopBuyNumRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ShopBuyNumRequest} ShopBuyNumRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ShopBuyNumRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ShopBuyNumRequest message.
     * @function verify
     * @memberof ShopBuyNumRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ShopBuyNumRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.shopType != null && m.hasOwnProperty("shopType")) {
            if (!$util.isString(m.shopType))
                return "shopType: string expected";
        }
        return null;
    };

    return ShopBuyNumRequest;
})();

export const ShopBuyNum = $root.ShopBuyNum = (() => {

    ShopBuyNum.prototype.classname = 'ShopBuyNum';

    /**
     * Properties of a ShopBuyNum.
     * @exports IShopBuyNum
     * @interface IShopBuyNum
     * @property {number|null} [shopItemId] ShopBuyNum shopItemId
     * @property {number|null} [num] ShopBuyNum num
     */

    /**
     * Constructs a new ShopBuyNum.
     * @exports ShopBuyNum
     * @classdesc Represents a ShopBuyNum.
     * @implements IShopBuyNum
     * @constructor
     * @param {IShopBuyNum=} [p] Properties to set
     */
    function ShopBuyNum(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ShopBuyNum shopItemId.
     * @member {number} shopItemId
     * @memberof ShopBuyNum
     * @instance
     */
    ShopBuyNum.prototype.shopItemId = 0;

    /**
     * ShopBuyNum num.
     * @member {number} num
     * @memberof ShopBuyNum
     * @instance
     */
    ShopBuyNum.prototype.num = 0;

    /**
     * Creates a new ShopBuyNum instance using the specified properties.
     * @function create
     * @memberof ShopBuyNum
     * @static
     * @param {IShopBuyNum=} [properties] Properties to set
     * @returns {ShopBuyNum} ShopBuyNum instance
     */
    ShopBuyNum.create = function create(properties) {
        return new ShopBuyNum(properties);
    };

    /**
     * Encodes the specified ShopBuyNum message. Does not implicitly {@link ShopBuyNum.verify|verify} messages.
     * @function encode
     * @memberof ShopBuyNum
     * @static
     * @param {IShopBuyNum} m ShopBuyNum message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ShopBuyNum.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.shopItemId != null && Object.hasOwnProperty.call(m, "shopItemId"))
            w.uint32(8).int32(m.shopItemId);
        if (m.num != null && Object.hasOwnProperty.call(m, "num"))
            w.uint32(16).int32(m.num);
        return w;
    };

    /**
     * Encodes the specified ShopBuyNum message, length delimited. Does not implicitly {@link ShopBuyNum.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ShopBuyNum
     * @static
     * @param {IShopBuyNum} message ShopBuyNum message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ShopBuyNum.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ShopBuyNum message from the specified reader or buffer.
     * @function decode
     * @memberof ShopBuyNum
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ShopBuyNum} ShopBuyNum
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ShopBuyNum.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ShopBuyNum();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.shopItemId = r.int32();
                break;
            case 2:
                m.num = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a ShopBuyNum message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ShopBuyNum
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ShopBuyNum} ShopBuyNum
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ShopBuyNum.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ShopBuyNum message.
     * @function verify
     * @memberof ShopBuyNum
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ShopBuyNum.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.shopItemId != null && m.hasOwnProperty("shopItemId")) {
            if (!$util.isInteger(m.shopItemId))
                return "shopItemId: integer expected";
        }
        if (m.num != null && m.hasOwnProperty("num")) {
            if (!$util.isInteger(m.num))
                return "num: integer expected";
        }
        return null;
    };

    return ShopBuyNum;
})();

export const ShopBuyNumResponse = $root.ShopBuyNumResponse = (() => {

    ShopBuyNumResponse.prototype.classname = 'ShopBuyNumResponse';

    /**
     * Properties of a ShopBuyNumResponse.
     * @exports IShopBuyNumResponse
     * @interface IShopBuyNumResponse
     * @property {Array.<IShopBuyNum>|null} [details] ShopBuyNumResponse details
     */

    /**
     * Constructs a new ShopBuyNumResponse.
     * @exports ShopBuyNumResponse
     * @classdesc Represents a ShopBuyNumResponse.
     * @implements IShopBuyNumResponse
     * @constructor
     * @param {IShopBuyNumResponse=} [p] Properties to set
     */
    function ShopBuyNumResponse(p) {
        this.details = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ShopBuyNumResponse details.
     * @member {Array.<IShopBuyNum>} details
     * @memberof ShopBuyNumResponse
     * @instance
     */
    ShopBuyNumResponse.prototype.details = $util.emptyArray;

    /**
     * Creates a new ShopBuyNumResponse instance using the specified properties.
     * @function create
     * @memberof ShopBuyNumResponse
     * @static
     * @param {IShopBuyNumResponse=} [properties] Properties to set
     * @returns {ShopBuyNumResponse} ShopBuyNumResponse instance
     */
    ShopBuyNumResponse.create = function create(properties) {
        return new ShopBuyNumResponse(properties);
    };

    /**
     * Encodes the specified ShopBuyNumResponse message. Does not implicitly {@link ShopBuyNumResponse.verify|verify} messages.
     * @function encode
     * @memberof ShopBuyNumResponse
     * @static
     * @param {IShopBuyNumResponse} m ShopBuyNumResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ShopBuyNumResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.details != null && m.details.length) {
            for (var i = 0; i < m.details.length; ++i)
                $root.ShopBuyNum.encode(m.details[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Encodes the specified ShopBuyNumResponse message, length delimited. Does not implicitly {@link ShopBuyNumResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ShopBuyNumResponse
     * @static
     * @param {IShopBuyNumResponse} message ShopBuyNumResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ShopBuyNumResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ShopBuyNumResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ShopBuyNumResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ShopBuyNumResponse} ShopBuyNumResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ShopBuyNumResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ShopBuyNumResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.details && m.details.length))
                    m.details = [];
                m.details.push($root.ShopBuyNum.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a ShopBuyNumResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ShopBuyNumResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ShopBuyNumResponse} ShopBuyNumResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ShopBuyNumResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ShopBuyNumResponse message.
     * @function verify
     * @memberof ShopBuyNumResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ShopBuyNumResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.details != null && m.hasOwnProperty("details")) {
            if (!Array.isArray(m.details))
                return "details: array expected";
            for (var i = 0; i < m.details.length; ++i) {
                {
                    var e = $root.ShopBuyNum.verify(m.details[i]);
                    if (e)
                        return "details." + e;
                }
            }
        }
        return null;
    };

    return ShopBuyNumResponse;
})();

export const EmailListRequest = $root.EmailListRequest = (() => {

    EmailListRequest.prototype.classname = 'EmailListRequest';

    /**
     * Properties of an EmailListRequest.
     * @exports IEmailListRequest
     * @interface IEmailListRequest
     */

    /**
     * Constructs a new EmailListRequest.
     * @exports EmailListRequest
     * @classdesc Represents an EmailListRequest.
     * @implements IEmailListRequest
     * @constructor
     * @param {IEmailListRequest=} [p] Properties to set
     */
    function EmailListRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new EmailListRequest instance using the specified properties.
     * @function create
     * @memberof EmailListRequest
     * @static
     * @param {IEmailListRequest=} [properties] Properties to set
     * @returns {EmailListRequest} EmailListRequest instance
     */
    EmailListRequest.create = function create(properties) {
        return new EmailListRequest(properties);
    };

    /**
     * Encodes the specified EmailListRequest message. Does not implicitly {@link EmailListRequest.verify|verify} messages.
     * @function encode
     * @memberof EmailListRequest
     * @static
     * @param {IEmailListRequest} m EmailListRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EmailListRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Encodes the specified EmailListRequest message, length delimited. Does not implicitly {@link EmailListRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EmailListRequest
     * @static
     * @param {IEmailListRequest} message EmailListRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EmailListRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EmailListRequest message from the specified reader or buffer.
     * @function decode
     * @memberof EmailListRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {EmailListRequest} EmailListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EmailListRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.EmailListRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes an EmailListRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EmailListRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EmailListRequest} EmailListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EmailListRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EmailListRequest message.
     * @function verify
     * @memberof EmailListRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EmailListRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        return null;
    };

    return EmailListRequest;
})();

export const EmailList = $root.EmailList = (() => {

    EmailList.prototype.classname = 'EmailList';

    /**
     * Properties of an EmailList.
     * @exports IEmailList
     * @interface IEmailList
     * @property {number|null} [id] EmailList id
     * @property {string|null} [type] EmailList type
     * @property {string|null} [title] EmailList title
     * @property {string|null} [data] EmailList data
     * @property {string|null} [sendUser] EmailList sendUser
     * @property {string|null} [sendTime] EmailList sendTime
     * @property {EmailStatus|null} [status] EmailList status
     * @property {Array.<IItemInfo>|null} [items] EmailList items
     */

    /**
     * Constructs a new EmailList.
     * @exports EmailList
     * @classdesc Represents an EmailList.
     * @implements IEmailList
     * @constructor
     * @param {IEmailList=} [p] Properties to set
     */
    function EmailList(p) {
        this.items = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * EmailList id.
     * @member {number} id
     * @memberof EmailList
     * @instance
     */
    EmailList.prototype.id = 0;

    /**
     * EmailList type.
     * @member {string} type
     * @memberof EmailList
     * @instance
     */
    EmailList.prototype.type = "";

    /**
     * EmailList title.
     * @member {string} title
     * @memberof EmailList
     * @instance
     */
    EmailList.prototype.title = "";

    /**
     * EmailList data.
     * @member {string} data
     * @memberof EmailList
     * @instance
     */
    EmailList.prototype.data = "";

    /**
     * EmailList sendUser.
     * @member {string} sendUser
     * @memberof EmailList
     * @instance
     */
    EmailList.prototype.sendUser = "";

    /**
     * EmailList sendTime.
     * @member {string} sendTime
     * @memberof EmailList
     * @instance
     */
    EmailList.prototype.sendTime = "";

    /**
     * EmailList status.
     * @member {EmailStatus} status
     * @memberof EmailList
     * @instance
     */
    EmailList.prototype.status = 0;

    /**
     * EmailList items.
     * @member {Array.<IItemInfo>} items
     * @memberof EmailList
     * @instance
     */
    EmailList.prototype.items = $util.emptyArray;

    /**
     * Creates a new EmailList instance using the specified properties.
     * @function create
     * @memberof EmailList
     * @static
     * @param {IEmailList=} [properties] Properties to set
     * @returns {EmailList} EmailList instance
     */
    EmailList.create = function create(properties) {
        return new EmailList(properties);
    };

    /**
     * Encodes the specified EmailList message. Does not implicitly {@link EmailList.verify|verify} messages.
     * @function encode
     * @memberof EmailList
     * @static
     * @param {IEmailList} m EmailList message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EmailList.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(8).int32(m.id);
        if (m.type != null && Object.hasOwnProperty.call(m, "type"))
            w.uint32(18).string(m.type);
        if (m.title != null && Object.hasOwnProperty.call(m, "title"))
            w.uint32(26).string(m.title);
        if (m.data != null && Object.hasOwnProperty.call(m, "data"))
            w.uint32(34).string(m.data);
        if (m.sendUser != null && Object.hasOwnProperty.call(m, "sendUser"))
            w.uint32(42).string(m.sendUser);
        if (m.sendTime != null && Object.hasOwnProperty.call(m, "sendTime"))
            w.uint32(50).string(m.sendTime);
        if (m.status != null && Object.hasOwnProperty.call(m, "status"))
            w.uint32(56).int32(m.status);
        if (m.items != null && m.items.length) {
            for (var i = 0; i < m.items.length; ++i)
                $root.ItemInfo.encode(m.items[i], w.uint32(66).fork()).ldelim();
        }
        return w;
    };

    /**
     * Encodes the specified EmailList message, length delimited. Does not implicitly {@link EmailList.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EmailList
     * @static
     * @param {IEmailList} message EmailList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EmailList.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EmailList message from the specified reader or buffer.
     * @function decode
     * @memberof EmailList
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {EmailList} EmailList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EmailList.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.EmailList();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.int32();
                break;
            case 2:
                m.type = r.string();
                break;
            case 3:
                m.title = r.string();
                break;
            case 4:
                m.data = r.string();
                break;
            case 5:
                m.sendUser = r.string();
                break;
            case 6:
                m.sendTime = r.string();
                break;
            case 7:
                m.status = r.int32();
                break;
            case 8:
                if (!(m.items && m.items.length))
                    m.items = [];
                m.items.push($root.ItemInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes an EmailList message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EmailList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EmailList} EmailList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EmailList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EmailList message.
     * @function verify
     * @memberof EmailList
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EmailList.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.id != null && m.hasOwnProperty("id")) {
            if (!$util.isInteger(m.id))
                return "id: integer expected";
        }
        if (m.type != null && m.hasOwnProperty("type")) {
            if (!$util.isString(m.type))
                return "type: string expected";
        }
        if (m.title != null && m.hasOwnProperty("title")) {
            if (!$util.isString(m.title))
                return "title: string expected";
        }
        if (m.data != null && m.hasOwnProperty("data")) {
            if (!$util.isString(m.data))
                return "data: string expected";
        }
        if (m.sendUser != null && m.hasOwnProperty("sendUser")) {
            if (!$util.isString(m.sendUser))
                return "sendUser: string expected";
        }
        if (m.sendTime != null && m.hasOwnProperty("sendTime")) {
            if (!$util.isString(m.sendTime))
                return "sendTime: string expected";
        }
        if (m.status != null && m.hasOwnProperty("status")) {
            switch (m.status) {
            default:
                return "status: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        }
        if (m.items != null && m.hasOwnProperty("items")) {
            if (!Array.isArray(m.items))
                return "items: array expected";
            for (var i = 0; i < m.items.length; ++i) {
                {
                    var e = $root.ItemInfo.verify(m.items[i]);
                    if (e)
                        return "items." + e;
                }
            }
        }
        return null;
    };

    return EmailList;
})();

export const EmailListResponse = $root.EmailListResponse = (() => {

    EmailListResponse.prototype.classname = 'EmailListResponse';

    /**
     * Properties of an EmailListResponse.
     * @exports IEmailListResponse
     * @interface IEmailListResponse
     * @property {Array.<IEmailList>|null} [list] EmailListResponse list
     */

    /**
     * Constructs a new EmailListResponse.
     * @exports EmailListResponse
     * @classdesc Represents an EmailListResponse.
     * @implements IEmailListResponse
     * @constructor
     * @param {IEmailListResponse=} [p] Properties to set
     */
    function EmailListResponse(p) {
        this.list = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * EmailListResponse list.
     * @member {Array.<IEmailList>} list
     * @memberof EmailListResponse
     * @instance
     */
    EmailListResponse.prototype.list = $util.emptyArray;

    /**
     * Creates a new EmailListResponse instance using the specified properties.
     * @function create
     * @memberof EmailListResponse
     * @static
     * @param {IEmailListResponse=} [properties] Properties to set
     * @returns {EmailListResponse} EmailListResponse instance
     */
    EmailListResponse.create = function create(properties) {
        return new EmailListResponse(properties);
    };

    /**
     * Encodes the specified EmailListResponse message. Does not implicitly {@link EmailListResponse.verify|verify} messages.
     * @function encode
     * @memberof EmailListResponse
     * @static
     * @param {IEmailListResponse} m EmailListResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EmailListResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.list != null && m.list.length) {
            for (var i = 0; i < m.list.length; ++i)
                $root.EmailList.encode(m.list[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Encodes the specified EmailListResponse message, length delimited. Does not implicitly {@link EmailListResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EmailListResponse
     * @static
     * @param {IEmailListResponse} message EmailListResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EmailListResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EmailListResponse message from the specified reader or buffer.
     * @function decode
     * @memberof EmailListResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {EmailListResponse} EmailListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EmailListResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.EmailListResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.list && m.list.length))
                    m.list = [];
                m.list.push($root.EmailList.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes an EmailListResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EmailListResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EmailListResponse} EmailListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EmailListResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EmailListResponse message.
     * @function verify
     * @memberof EmailListResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EmailListResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.list != null && m.hasOwnProperty("list")) {
            if (!Array.isArray(m.list))
                return "list: array expected";
            for (var i = 0; i < m.list.length; ++i) {
                {
                    var e = $root.EmailList.verify(m.list[i]);
                    if (e)
                        return "list." + e;
                }
            }
        }
        return null;
    };

    return EmailListResponse;
})();

export const EmailOpRequest = $root.EmailOpRequest = (() => {

    EmailOpRequest.prototype.classname = 'EmailOpRequest';

    /**
     * Properties of an EmailOpRequest.
     * @exports IEmailOpRequest
     * @interface IEmailOpRequest
     * @property {number|null} [id] EmailOpRequest id
     * @property {EmailOpType|null} [type] EmailOpRequest type
     */

    /**
     * Constructs a new EmailOpRequest.
     * @exports EmailOpRequest
     * @classdesc Represents an EmailOpRequest.
     * @implements IEmailOpRequest
     * @constructor
     * @param {IEmailOpRequest=} [p] Properties to set
     */
    function EmailOpRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * EmailOpRequest id.
     * @member {number} id
     * @memberof EmailOpRequest
     * @instance
     */
    EmailOpRequest.prototype.id = 0;

    /**
     * EmailOpRequest type.
     * @member {EmailOpType} type
     * @memberof EmailOpRequest
     * @instance
     */
    EmailOpRequest.prototype.type = 0;

    /**
     * Creates a new EmailOpRequest instance using the specified properties.
     * @function create
     * @memberof EmailOpRequest
     * @static
     * @param {IEmailOpRequest=} [properties] Properties to set
     * @returns {EmailOpRequest} EmailOpRequest instance
     */
    EmailOpRequest.create = function create(properties) {
        return new EmailOpRequest(properties);
    };

    /**
     * Encodes the specified EmailOpRequest message. Does not implicitly {@link EmailOpRequest.verify|verify} messages.
     * @function encode
     * @memberof EmailOpRequest
     * @static
     * @param {IEmailOpRequest} m EmailOpRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EmailOpRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(8).int32(m.id);
        if (m.type != null && Object.hasOwnProperty.call(m, "type"))
            w.uint32(16).int32(m.type);
        return w;
    };

    /**
     * Encodes the specified EmailOpRequest message, length delimited. Does not implicitly {@link EmailOpRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EmailOpRequest
     * @static
     * @param {IEmailOpRequest} message EmailOpRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EmailOpRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EmailOpRequest message from the specified reader or buffer.
     * @function decode
     * @memberof EmailOpRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {EmailOpRequest} EmailOpRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EmailOpRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.EmailOpRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.int32();
                break;
            case 2:
                m.type = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes an EmailOpRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EmailOpRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EmailOpRequest} EmailOpRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EmailOpRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EmailOpRequest message.
     * @function verify
     * @memberof EmailOpRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EmailOpRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.id != null && m.hasOwnProperty("id")) {
            if (!$util.isInteger(m.id))
                return "id: integer expected";
        }
        if (m.type != null && m.hasOwnProperty("type")) {
            switch (m.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        }
        return null;
    };

    return EmailOpRequest;
})();

export const EmailOpResponse = $root.EmailOpResponse = (() => {

    EmailOpResponse.prototype.classname = 'EmailOpResponse';

    /**
     * Properties of an EmailOpResponse.
     * @exports IEmailOpResponse
     * @interface IEmailOpResponse
     */

    /**
     * Constructs a new EmailOpResponse.
     * @exports EmailOpResponse
     * @classdesc Represents an EmailOpResponse.
     * @implements IEmailOpResponse
     * @constructor
     * @param {IEmailOpResponse=} [p] Properties to set
     */
    function EmailOpResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new EmailOpResponse instance using the specified properties.
     * @function create
     * @memberof EmailOpResponse
     * @static
     * @param {IEmailOpResponse=} [properties] Properties to set
     * @returns {EmailOpResponse} EmailOpResponse instance
     */
    EmailOpResponse.create = function create(properties) {
        return new EmailOpResponse(properties);
    };

    /**
     * Encodes the specified EmailOpResponse message. Does not implicitly {@link EmailOpResponse.verify|verify} messages.
     * @function encode
     * @memberof EmailOpResponse
     * @static
     * @param {IEmailOpResponse} m EmailOpResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EmailOpResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Encodes the specified EmailOpResponse message, length delimited. Does not implicitly {@link EmailOpResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EmailOpResponse
     * @static
     * @param {IEmailOpResponse} message EmailOpResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EmailOpResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EmailOpResponse message from the specified reader or buffer.
     * @function decode
     * @memberof EmailOpResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {EmailOpResponse} EmailOpResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EmailOpResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.EmailOpResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes an EmailOpResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EmailOpResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EmailOpResponse} EmailOpResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EmailOpResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EmailOpResponse message.
     * @function verify
     * @memberof EmailOpResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EmailOpResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        return null;
    };

    return EmailOpResponse;
})();

export const CreatorItemRequest = $root.CreatorItemRequest = (() => {

    CreatorItemRequest.prototype.classname = 'CreatorItemRequest';

    /**
     * Properties of a CreatorItemRequest.
     * @exports ICreatorItemRequest
     * @interface ICreatorItemRequest
     * @property {string|null} [itemId] CreatorItemRequest itemId
     * @property {number|null} [num] CreatorItemRequest num
     * @property {string|null} [qualityId] CreatorItemRequest qualityId
     */

    /**
     * Constructs a new CreatorItemRequest.
     * @exports CreatorItemRequest
     * @classdesc Represents a CreatorItemRequest.
     * @implements ICreatorItemRequest
     * @constructor
     * @param {ICreatorItemRequest=} [p] Properties to set
     */
    function CreatorItemRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CreatorItemRequest itemId.
     * @member {string} itemId
     * @memberof CreatorItemRequest
     * @instance
     */
    CreatorItemRequest.prototype.itemId = "";

    /**
     * CreatorItemRequest num.
     * @member {number} num
     * @memberof CreatorItemRequest
     * @instance
     */
    CreatorItemRequest.prototype.num = 0;

    /**
     * CreatorItemRequest qualityId.
     * @member {string} qualityId
     * @memberof CreatorItemRequest
     * @instance
     */
    CreatorItemRequest.prototype.qualityId = "";

    /**
     * Creates a new CreatorItemRequest instance using the specified properties.
     * @function create
     * @memberof CreatorItemRequest
     * @static
     * @param {ICreatorItemRequest=} [properties] Properties to set
     * @returns {CreatorItemRequest} CreatorItemRequest instance
     */
    CreatorItemRequest.create = function create(properties) {
        return new CreatorItemRequest(properties);
    };

    /**
     * Encodes the specified CreatorItemRequest message. Does not implicitly {@link CreatorItemRequest.verify|verify} messages.
     * @function encode
     * @memberof CreatorItemRequest
     * @static
     * @param {ICreatorItemRequest} m CreatorItemRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreatorItemRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.itemId != null && Object.hasOwnProperty.call(m, "itemId"))
            w.uint32(10).string(m.itemId);
        if (m.num != null && Object.hasOwnProperty.call(m, "num"))
            w.uint32(16).int32(m.num);
        if (m.qualityId != null && Object.hasOwnProperty.call(m, "qualityId"))
            w.uint32(26).string(m.qualityId);
        return w;
    };

    /**
     * Encodes the specified CreatorItemRequest message, length delimited. Does not implicitly {@link CreatorItemRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CreatorItemRequest
     * @static
     * @param {ICreatorItemRequest} message CreatorItemRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreatorItemRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CreatorItemRequest message from the specified reader or buffer.
     * @function decode
     * @memberof CreatorItemRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CreatorItemRequest} CreatorItemRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreatorItemRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CreatorItemRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.itemId = r.string();
                break;
            case 2:
                m.num = r.int32();
                break;
            case 3:
                m.qualityId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a CreatorItemRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CreatorItemRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CreatorItemRequest} CreatorItemRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreatorItemRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CreatorItemRequest message.
     * @function verify
     * @memberof CreatorItemRequest
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CreatorItemRequest.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.itemId != null && m.hasOwnProperty("itemId")) {
            if (!$util.isString(m.itemId))
                return "itemId: string expected";
        }
        if (m.num != null && m.hasOwnProperty("num")) {
            if (!$util.isInteger(m.num))
                return "num: integer expected";
        }
        if (m.qualityId != null && m.hasOwnProperty("qualityId")) {
            if (!$util.isString(m.qualityId))
                return "qualityId: string expected";
        }
        return null;
    };

    return CreatorItemRequest;
})();

export const CreatorItemResponse = $root.CreatorItemResponse = (() => {

    CreatorItemResponse.prototype.classname = 'CreatorItemResponse';

    /**
     * Properties of a CreatorItemResponse.
     * @exports ICreatorItemResponse
     * @interface ICreatorItemResponse
     * @property {boolean|null} [isSuccess] CreatorItemResponse isSuccess
     */

    /**
     * Constructs a new CreatorItemResponse.
     * @exports CreatorItemResponse
     * @classdesc Represents a CreatorItemResponse.
     * @implements ICreatorItemResponse
     * @constructor
     * @param {ICreatorItemResponse=} [p] Properties to set
     */
    function CreatorItemResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CreatorItemResponse isSuccess.
     * @member {boolean} isSuccess
     * @memberof CreatorItemResponse
     * @instance
     */
    CreatorItemResponse.prototype.isSuccess = false;

    /**
     * Creates a new CreatorItemResponse instance using the specified properties.
     * @function create
     * @memberof CreatorItemResponse
     * @static
     * @param {ICreatorItemResponse=} [properties] Properties to set
     * @returns {CreatorItemResponse} CreatorItemResponse instance
     */
    CreatorItemResponse.create = function create(properties) {
        return new CreatorItemResponse(properties);
    };

    /**
     * Encodes the specified CreatorItemResponse message. Does not implicitly {@link CreatorItemResponse.verify|verify} messages.
     * @function encode
     * @memberof CreatorItemResponse
     * @static
     * @param {ICreatorItemResponse} m CreatorItemResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreatorItemResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.isSuccess != null && Object.hasOwnProperty.call(m, "isSuccess"))
            w.uint32(8).bool(m.isSuccess);
        return w;
    };

    /**
     * Encodes the specified CreatorItemResponse message, length delimited. Does not implicitly {@link CreatorItemResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CreatorItemResponse
     * @static
     * @param {ICreatorItemResponse} message CreatorItemResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreatorItemResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CreatorItemResponse message from the specified reader or buffer.
     * @function decode
     * @memberof CreatorItemResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CreatorItemResponse} CreatorItemResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreatorItemResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CreatorItemResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.isSuccess = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Decodes a CreatorItemResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CreatorItemResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CreatorItemResponse} CreatorItemResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreatorItemResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CreatorItemResponse message.
     * @function verify
     * @memberof CreatorItemResponse
     * @static
     * @param {Object.<string,*>} m Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CreatorItemResponse.verify = function verify(m) {
        if (typeof m !== "object" || m === null)
            return "object expected";
        if (m.isSuccess != null && m.hasOwnProperty("isSuccess")) {
            if (typeof m.isSuccess !== "boolean")
                return "isSuccess: boolean expected";
        }
        return null;
    };

    return CreatorItemResponse;
})();

/**
 * Gender enum.
 * @exports Gender
 * @enum {number}
 * @property {number} None=0 None value
 * @property {number} man=1 man value
 * @property {number} woman=2 woman value
 */
export const Gender = $root.Gender = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "None"] = 0;
    values[valuesById[1] = "man"] = 1;
    values[valuesById[2] = "woman"] = 2;
    return values;
})();

/**
 * EquipType enum.
 * @exports EquipType
 * @enum {number}
 * @property {number} Equip=0 Equip value
 * @property {number} Throne=1 Throne value
 */
export const EquipType = $root.EquipType = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "Equip"] = 0;
    values[valuesById[1] = "Throne"] = 1;
    return values;
})();

/**
 * GoodsType enum.
 * @exports GoodsType
 * @enum {number}
 * @property {number} All=0 All value
 * @property {number} arms=1 arms value
 * @property {number} ring=2 ring value
 * @property {number} necklace=3 necklace value
 * @property {number} clothes=4 clothes value
 * @property {number} belt=5 belt value
 * @property {number} shoes=6 shoes value
 */
export const GoodsType = $root.GoodsType = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "All"] = 0;
    values[valuesById[1] = "arms"] = 1;
    values[valuesById[2] = "ring"] = 2;
    values[valuesById[3] = "necklace"] = 3;
    values[valuesById[4] = "clothes"] = 4;
    values[valuesById[5] = "belt"] = 5;
    values[valuesById[6] = "shoes"] = 6;
    return values;
})();

/**
 * DharmakayaType enum.
 * @exports DharmakayaType
 * @enum {number}
 * @property {number} None_D=0 None_D value
 * @property {number} Gold=1 Gold value
 * @property {number} Wood=2 Wood value
 * @property {number} Water=3 Water value
 * @property {number} Fire=4 Fire value
 * @property {number} Soil=5 Soil value
 */
export const DharmakayaType = $root.DharmakayaType = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "None_D"] = 0;
    values[valuesById[1] = "Gold"] = 1;
    values[valuesById[2] = "Wood"] = 2;
    values[valuesById[3] = "Water"] = 3;
    values[valuesById[4] = "Fire"] = 4;
    values[valuesById[5] = "Soil"] = 5;
    return values;
})();

/**
 * GameCopyType enum.
 * @exports GameCopyType
 * @enum {number}
 * @property {number} none=0 none value
 * @property {number} HangUp=1 HangUp value
 * @property {number} Mystery=2 Mystery value
 * @property {number} Fantasyland=3 Fantasyland value
 */
export const GameCopyType = $root.GameCopyType = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "none"] = 0;
    values[valuesById[1] = "HangUp"] = 1;
    values[valuesById[2] = "Mystery"] = 2;
    values[valuesById[3] = "Fantasyland"] = 3;
    return values;
})();

/**
 * RoleType enum.
 * @exports RoleType
 * @enum {number}
 * @property {number} Unkown=0 Unkown value
 * @property {number} Player=1 Player value
 * @property {number} Monster=2 Monster value
 * @property {number} Boss=3 Boss value
 */
export const RoleType = $root.RoleType = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "Unkown"] = 0;
    values[valuesById[1] = "Player"] = 1;
    values[valuesById[2] = "Monster"] = 2;
    values[valuesById[3] = "Boss"] = 3;
    return values;
})();

/**
 * ItemsType enum.
 * @exports ItemsType
 * @enum {number}
 * @property {number} None_IT=0 None_IT value
 * @property {number} Money=1 Money value
 * @property {number} Prop=2 Prop value
 * @property {number} Consume=3 Consume value
 * @property {number} Equip_IT=4 Equip_IT value
 * @property {number} Book=5 Book value
 * @property {number} Throne_IT=6 Throne_IT value
 */
export const ItemsType = $root.ItemsType = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "None_IT"] = 0;
    values[valuesById[1] = "Money"] = 1;
    values[valuesById[2] = "Prop"] = 2;
    values[valuesById[3] = "Consume"] = 3;
    values[valuesById[4] = "Equip_IT"] = 4;
    values[valuesById[5] = "Book"] = 5;
    values[valuesById[6] = "Throne_IT"] = 6;
    return values;
})();

/**
 * BagType enum.
 * @exports BagType
 * @enum {number}
 * @property {number} bag_BT=0 bag_BT value
 * @property {number} Equip_BT=1 Equip_BT value
 * @property {number} Throne_BT=2 Throne_BT value
 */
export const BagType = $root.BagType = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "bag_BT"] = 0;
    values[valuesById[1] = "Equip_BT"] = 1;
    values[valuesById[2] = "Throne_BT"] = 2;
    return values;
})();

/**
 * EmailStatus enum.
 * @exports EmailStatus
 * @enum {number}
 * @property {number} Default=0 Default value
 * @property {number} Check=1 Check value
 * @property {number} Receive=2 Receive value
 */
export const EmailStatus = $root.EmailStatus = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "Default"] = 0;
    values[valuesById[1] = "Check"] = 1;
    values[valuesById[2] = "Receive"] = 2;
    return values;
})();

/**
 * EmailOpType enum.
 * @exports EmailOpType
 * @enum {number}
 * @property {number} check=0 check value
 * @property {number} receive=1 receive value
 * @property {number} delete=2 delete value
 */
export const EmailOpType = $root.EmailOpType = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "check"] = 0;
    values[valuesById[1] = "receive"] = 1;
    values[valuesById[2] = "delete"] = 2;
    return values;
})();

module.exports = $root;
