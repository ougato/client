import * as $protobuf from "protobufjs";
export = Proto;

declare namespace Proto {


    interface IBase {
        msg?: (string|null);
        serial?: (number|null);
        packet?: (Uint8Array|null);
    }

    class Base implements IBase {
        constructor(p?: IBase);
        public msg: string;
        public serial: number;
        public packet: Uint8Array;
        public static create(properties?: IBase): Base;
        public static encode(m: IBase, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IBase, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Base;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Base;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IUserInfo {
        id?: (string|null);
        nick?: (string|null);
        power?: (number|Long|null);
        diamond?: (number|Long|null);
        avatar?: (number|null);
    }

    class UserInfo implements IUserInfo {
        constructor(p?: IUserInfo);
        public id: string;
        public nick: string;
        public power: (number|Long);
        public diamond: (number|Long);
        public avatar: number;
        public static create(properties?: IUserInfo): UserInfo;
        public static encode(m: IUserInfo, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): UserInfo;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserInfo;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IItemInfo {
        id?: (string|null);
        count?: (number|null);
    }

    class ItemInfo implements IItemInfo {
        constructor(p?: IItemInfo);
        public id: string;
        public count: number;
        public static create(properties?: IItemInfo): ItemInfo;
        public static encode(m: IItemInfo, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IItemInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ItemInfo;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemInfo;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IOfflineAwardInfo {
        awardList?: (IItemInfo[]|null);
    }

    class OfflineAwardInfo implements IOfflineAwardInfo {
        constructor(p?: IOfflineAwardInfo);
        public awardList: IItemInfo[];
        public static create(properties?: IOfflineAwardInfo): OfflineAwardInfo;
        public static encode(m: IOfflineAwardInfo, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IOfflineAwardInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): OfflineAwardInfo;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OfflineAwardInfo;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface ICheckInAwardInfo {
        currIndex?: (number|null);
        nextIndex?: (number|null);
        notIndexList?: (number[]|null);
        awardList?: (IItemInfo[]|null);
    }

    class CheckInAwardInfo implements ICheckInAwardInfo {
        constructor(p?: ICheckInAwardInfo);
        public currIndex: number;
        public nextIndex: number;
        public notIndexList: number[];
        public awardList: IItemInfo[];
        public static create(properties?: ICheckInAwardInfo): CheckInAwardInfo;
        public static encode(m: ICheckInAwardInfo, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: ICheckInAwardInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CheckInAwardInfo;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CheckInAwardInfo;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface ISignInRequest {
        token?: (string|null);
    }

    class SignInRequest implements ISignInRequest {
        constructor(p?: ISignInRequest);
        public token: string;
        public static create(properties?: ISignInRequest): SignInRequest;
        public static encode(m: ISignInRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: ISignInRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SignInRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignInRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface ISignInResponse {
        userInfo?: (IUserInfo|null);
        offlineAwardInfo?: (IOfflineAwardInfo|null);
        checkInAwardInfo?: (ICheckInAwardInfo|null);
    }

    class SignInResponse implements ISignInResponse {
        constructor(p?: ISignInResponse);
        public userInfo?: (IUserInfo|null);
        public offlineAwardInfo?: (IOfflineAwardInfo|null);
        public checkInAwardInfo?: (ICheckInAwardInfo|null);
        public static create(properties?: ISignInResponse): SignInResponse;
        public static encode(m: ISignInResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: ISignInResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SignInResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignInResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }
}
