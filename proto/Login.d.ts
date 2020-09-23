import * as $protobuf from "protobufjs";
/** Properties of a C2SSignIn. */
export interface IC2SSignIn {

    /** C2SSignIn user */
    user?: (string|null);

    /** C2SSignIn password */
    password?: (string|null);
}

/** Represents a C2SSignIn. */
export class C2SSignIn implements IC2SSignIn {

    /**
     * Constructs a new C2SSignIn.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SSignIn);

    /** C2SSignIn user. */
    public user: string;

    /** C2SSignIn password. */
    public password: string;

    /**
     * Creates a new C2SSignIn instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SSignIn instance
     */
    public static create(properties?: IC2SSignIn): C2SSignIn;

    /**
     * Encodes the specified C2SSignIn message. Does not implicitly {@link C2SSignIn.verify|verify} messages.
     * @param message C2SSignIn message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SSignIn, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SSignIn message, length delimited. Does not implicitly {@link C2SSignIn.verify|verify} messages.
     * @param message C2SSignIn message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SSignIn, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SSignIn message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SSignIn
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SSignIn;

    /**
     * Decodes a C2SSignIn message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SSignIn
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SSignIn;

    /**
     * Verifies a C2SSignIn message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SSignIn message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SSignIn
     */
    public static fromObject(object: { [k: string]: any }): C2SSignIn;

    /**
     * Creates a plain object from a C2SSignIn message. Also converts values to other types if specified.
     * @param message C2SSignIn
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SSignIn, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SSignIn to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
