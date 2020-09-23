/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.C2SSignIn = (function() {

    /**
     * Properties of a C2SSignIn.
     * @exports IC2SSignIn
     * @interface IC2SSignIn
     * @property {string|null} [user] C2SSignIn user
     * @property {string|null} [password] C2SSignIn password
     */

    /**
     * Constructs a new C2SSignIn.
     * @exports C2SSignIn
     * @classdesc Represents a C2SSignIn.
     * @implements IC2SSignIn
     * @constructor
     * @param {IC2SSignIn=} [properties] Properties to set
     */
    function C2SSignIn(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2SSignIn user.
     * @member {string} user
     * @memberof C2SSignIn
     * @instance
     */
    C2SSignIn.prototype.user = "";

    /**
     * C2SSignIn password.
     * @member {string} password
     * @memberof C2SSignIn
     * @instance
     */
    C2SSignIn.prototype.password = "";

    /**
     * Creates a new C2SSignIn instance using the specified properties.
     * @function create
     * @memberof C2SSignIn
     * @static
     * @param {IC2SSignIn=} [properties] Properties to set
     * @returns {C2SSignIn} C2SSignIn instance
     */
    C2SSignIn.create = function create(properties) {
        return new C2SSignIn(properties);
    };

    /**
     * Encodes the specified C2SSignIn message. Does not implicitly {@link C2SSignIn.verify|verify} messages.
     * @function encode
     * @memberof C2SSignIn
     * @static
     * @param {IC2SSignIn} message C2SSignIn message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SSignIn.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.user != null && Object.hasOwnProperty.call(message, "user"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.user);
        if (message.password != null && Object.hasOwnProperty.call(message, "password"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
        return writer;
    };

    /**
     * Encodes the specified C2SSignIn message, length delimited. Does not implicitly {@link C2SSignIn.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SSignIn
     * @static
     * @param {IC2SSignIn} message C2SSignIn message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SSignIn.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SSignIn message from the specified reader or buffer.
     * @function decode
     * @memberof C2SSignIn
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SSignIn} C2SSignIn
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SSignIn.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SSignIn();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.user = reader.string();
                break;
            case 2:
                message.password = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SSignIn message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SSignIn
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SSignIn} C2SSignIn
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SSignIn.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SSignIn message.
     * @function verify
     * @memberof C2SSignIn
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SSignIn.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.user != null && message.hasOwnProperty("user"))
            if (!$util.isString(message.user))
                return "user: string expected";
        if (message.password != null && message.hasOwnProperty("password"))
            if (!$util.isString(message.password))
                return "password: string expected";
        return null;
    };

    /**
     * Creates a C2SSignIn message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SSignIn
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SSignIn} C2SSignIn
     */
    C2SSignIn.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SSignIn)
            return object;
        var message = new $root.C2SSignIn();
        if (object.user != null)
            message.user = String(object.user);
        if (object.password != null)
            message.password = String(object.password);
        return message;
    };

    /**
     * Creates a plain object from a C2SSignIn message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SSignIn
     * @static
     * @param {C2SSignIn} message C2SSignIn
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SSignIn.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.user = "";
            object.password = "";
        }
        if (message.user != null && message.hasOwnProperty("user"))
            object.user = message.user;
        if (message.password != null && message.hasOwnProperty("password"))
            object.password = message.password;
        return object;
    };

    /**
     * Converts this C2SSignIn to JSON.
     * @function toJSON
     * @memberof C2SSignIn
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SSignIn.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return C2SSignIn;
})();

module.exports = $root;
