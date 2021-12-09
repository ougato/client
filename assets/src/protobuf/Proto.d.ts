import * as $protobuf from "protobufjs";
export = Proto;

declare namespace Proto {


    interface IBase {
        action?: (string|null);
        serial?: (number|null);
        packet?: (Uint8Array|null);
    }

    class Base implements IBase {
        public classname: string;
        constructor(p?: IBase);
        public action: string;
        public serial: number;
        public packet: Uint8Array;
        public static create(properties?: IBase): Base;
        public static encode(m: IBase, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IBase, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Base;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Base;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IUserInfoRequest {
    }

    class UserInfoRequest implements IUserInfoRequest {
        public classname: string;
        constructor(p?: IUserInfoRequest);
        public static create(properties?: IUserInfoRequest): UserInfoRequest;
        public static encode(m: IUserInfoRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IUserInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): UserInfoRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserInfoRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IUserInfoResponse {
        userInfo?: (IUserInfo|null);
    }

    class UserInfoResponse implements IUserInfoResponse {
        public classname: string;
        constructor(p?: IUserInfoResponse);
        public userInfo?: (IUserInfo|null);
        public static create(properties?: IUserInfoResponse): UserInfoResponse;
        public static encode(m: IUserInfoResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IUserInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): UserInfoResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserInfoResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IUserInfo {
        id?: (string|null);
        nick?: (string|null);
        power?: (number|Long|null);
        stone?: (number|Long|null);
        avatar?: (number|null);
        sex?: (number|null);
        realmLevel?: (number|null);
        phone?: (string|null);
        aura?: (number|null);
        skillexp?: (number|null);
    }

    class UserInfo implements IUserInfo {
        public classname: string;
        constructor(p?: IUserInfo);
        public id: string;
        public nick: string;
        public power: (number|Long);
        public stone: (number|Long);
        public avatar: number;
        public sex: number;
        public realmLevel: number;
        public phone: string;
        public aura: number;
        public skillexp: number;
        public static create(properties?: IUserInfo): UserInfo;
        public static encode(m: IUserInfo, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): UserInfo;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserInfo;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IItemInfo {
        uuid?: (string|null);
        id?: (string|null);
        count?: (number|null);
        qualityId?: (number|null);
        level?: (number|null);
        isLock?: (number|null);
        suitId?: (number|null);
        type?: (number|null);
    }

    class ItemInfo implements IItemInfo {
        public classname: string;
        constructor(p?: IItemInfo);
        public uuid: string;
        public id: string;
        public count: number;
        public qualityId: number;
        public level: number;
        public isLock: number;
        public suitId: number;
        public type: number;
        public static create(properties?: IItemInfo): ItemInfo;
        public static encode(m: IItemInfo, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IItemInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ItemInfo;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemInfo;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IOfflineAwardInfo {
        offlineTime?: (number|null);
        awardList?: (IItemInfo[]|null);
    }

    class OfflineAwardInfo implements IOfflineAwardInfo {
        public classname: string;
        constructor(p?: IOfflineAwardInfo);
        public offlineTime: number;
        public awardList: IItemInfo[];
        public static create(properties?: IOfflineAwardInfo): OfflineAwardInfo;
        public static encode(m: IOfflineAwardInfo, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IOfflineAwardInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): OfflineAwardInfo;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OfflineAwardInfo;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IReceiveOfflineAwardRequest {
        receiveType?: (number|null);
    }

    class ReceiveOfflineAwardRequest implements IReceiveOfflineAwardRequest {
        public classname: string;
        constructor(p?: IReceiveOfflineAwardRequest);
        public receiveType: number;
        public static create(properties?: IReceiveOfflineAwardRequest): ReceiveOfflineAwardRequest;
        public static encode(m: IReceiveOfflineAwardRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IReceiveOfflineAwardRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ReceiveOfflineAwardRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReceiveOfflineAwardRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IReceiveOfflineAwardResponse {
        isSuccess?: (boolean|null);
    }

    class ReceiveOfflineAwardResponse implements IReceiveOfflineAwardResponse {
        public classname: string;
        constructor(p?: IReceiveOfflineAwardResponse);
        public isSuccess: boolean;
        public static create(properties?: IReceiveOfflineAwardResponse): ReceiveOfflineAwardResponse;
        public static encode(m: IReceiveOfflineAwardResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IReceiveOfflineAwardResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ReceiveOfflineAwardResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReceiveOfflineAwardResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IReceiveHangUpAwardRequest {
    }

    class ReceiveHangUpAwardRequest implements IReceiveHangUpAwardRequest {
        public classname: string;
        constructor(p?: IReceiveHangUpAwardRequest);
        public static create(properties?: IReceiveHangUpAwardRequest): ReceiveHangUpAwardRequest;
        public static encode(m: IReceiveHangUpAwardRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IReceiveHangUpAwardRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ReceiveHangUpAwardRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReceiveHangUpAwardRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IReceiveHangUpAwardResponse {
        isSuccess?: (boolean|null);
    }

    class ReceiveHangUpAwardResponse implements IReceiveHangUpAwardResponse {
        public classname: string;
        constructor(p?: IReceiveHangUpAwardResponse);
        public isSuccess: boolean;
        public static create(properties?: IReceiveHangUpAwardResponse): ReceiveHangUpAwardResponse;
        public static encode(m: IReceiveHangUpAwardResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IReceiveHangUpAwardResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ReceiveHangUpAwardResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReceiveHangUpAwardResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface ICdkExchangeRequest {
        cdk?: (string|null);
    }

    class CdkExchangeRequest implements ICdkExchangeRequest {
        public classname: string;
        constructor(p?: ICdkExchangeRequest);
        public cdk: string;
        public static create(properties?: ICdkExchangeRequest): CdkExchangeRequest;
        public static encode(m: ICdkExchangeRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: ICdkExchangeRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CdkExchangeRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CdkExchangeRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface ICdkExchangeResponse {
        isSuccess?: (boolean|null);
    }

    class CdkExchangeResponse implements ICdkExchangeResponse {
        public classname: string;
        constructor(p?: ICdkExchangeResponse);
        public isSuccess: boolean;
        public static create(properties?: ICdkExchangeResponse): CdkExchangeResponse;
        public static encode(m: ICdkExchangeResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: ICdkExchangeResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CdkExchangeResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CdkExchangeResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface ICheckInAwardInfo {
        day?: (number|null);
        isSign?: (boolean|null);
    }

    class CheckInAwardInfo implements ICheckInAwardInfo {
        public classname: string;
        constructor(p?: ICheckInAwardInfo);
        public day: number;
        public isSign: boolean;
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
        public classname: string;
        constructor(p?: ISignInRequest);
        public token: string;
        public static create(properties?: ISignInRequest): SignInRequest;
        public static encode(m: ISignInRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: ISignInRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SignInRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignInRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IBattleInfo {
        currentLevel?: (number|null);
    }

    class BattleInfo implements IBattleInfo {
        public classname: string;
        constructor(p?: IBattleInfo);
        public currentLevel: number;
        public static create(properties?: IBattleInfo): BattleInfo;
        public static encode(m: IBattleInfo, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IBattleInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BattleInfo;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BattleInfo;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface ISignInResponse {
        userInfo?: (IUserInfo|null);
        offlineAwardInfo?: (IOfflineAwardInfo|null);
        checkInAwardInfo?: (ICheckInAwardInfo|null);
        battleInfo?: (IBattleInfo|null);
    }

    class SignInResponse implements ISignInResponse {
        public classname: string;
        constructor(p?: ISignInResponse);
        public userInfo?: (IUserInfo|null);
        public offlineAwardInfo?: (IOfflineAwardInfo|null);
        public checkInAwardInfo?: (ICheckInAwardInfo|null);
        public battleInfo?: (IBattleInfo|null);
        public static create(properties?: ISignInResponse): SignInResponse;
        public static encode(m: ISignInResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: ISignInResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SignInResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignInResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface ISyncInfo {
        realmLevel?: (number|null);
        aura?: (number|null);
        stone?: (number|null);
        skillexp?: (number|null);
        power?: (number|null);
    }

    class SyncInfo implements ISyncInfo {
        public classname: string;
        constructor(p?: ISyncInfo);
        public realmLevel: number;
        public aura: number;
        public stone: number;
        public skillexp: number;
        public power: number;
        public static create(properties?: ISyncInfo): SyncInfo;
        public static encode(m: ISyncInfo, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: ISyncInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SyncInfo;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SyncInfo;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IPingRequest {
    }

    class PingRequest implements IPingRequest {
        public classname: string;
        constructor(p?: IPingRequest);
        public static create(properties?: IPingRequest): PingRequest;
        public static encode(m: IPingRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IPingRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PingRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PingRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IPingResponse {
        timestamp?: (number|Long|null);
    }

    class PingResponse implements IPingResponse {
        public classname: string;
        constructor(p?: IPingResponse);
        public timestamp: (number|Long);
        public static create(properties?: IPingResponse): PingResponse;
        public static encode(m: IPingResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IPingResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PingResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PingResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IErrorNotify {
        code?: (number|null);
        msg?: (string|null);
    }

    class ErrorNotify implements IErrorNotify {
        public classname: string;
        constructor(p?: IErrorNotify);
        public code: number;
        public msg: string;
        public static create(properties?: IErrorNotify): ErrorNotify;
        public static encode(m: IErrorNotify, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IErrorNotify, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ErrorNotify;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ErrorNotify;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface ICreatorRoleRequest {
        nick?: (string|null);
        sex?: (number|null);
        utmSource?: (string|null);
    }

    class CreatorRoleRequest implements ICreatorRoleRequest {
        public classname: string;
        constructor(p?: ICreatorRoleRequest);
        public nick: string;
        public sex: number;
        public utmSource: string;
        public static create(properties?: ICreatorRoleRequest): CreatorRoleRequest;
        public static encode(m: ICreatorRoleRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: ICreatorRoleRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CreatorRoleRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CreatorRoleRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface ICreatorRoleResponse {
        userInfo?: (IUserInfo|null);
    }

    class CreatorRoleResponse implements ICreatorRoleResponse {
        public classname: string;
        constructor(p?: ICreatorRoleResponse);
        public userInfo?: (IUserInfo|null);
        public static create(properties?: ICreatorRoleResponse): CreatorRoleResponse;
        public static encode(m: ICreatorRoleResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: ICreatorRoleResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CreatorRoleResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CreatorRoleResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IEquipInfo {
        itemInfo?: (IItemInfo|null);
        mainAttribute?: (IRoleAttribute|null);
        viceAttribute?: (IRoleAttribute|null);
    }

    class EquipInfo implements IEquipInfo {
        public classname: string;
        constructor(p?: IEquipInfo);
        public itemInfo?: (IItemInfo|null);
        public mainAttribute?: (IRoleAttribute|null);
        public viceAttribute?: (IRoleAttribute|null);
        public static create(properties?: IEquipInfo): EquipInfo;
        public static encode(m: IEquipInfo, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IEquipInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): EquipInfo;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EquipInfo;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IWearEquips {
        arms?: (IItemInfo|null);
        ring?: (IItemInfo|null);
        necklace?: (IItemInfo|null);
        clothes?: (IItemInfo|null);
        belt?: (IItemInfo|null);
        shoes?: (IItemInfo|null);
    }

    class WearEquips implements IWearEquips {
        public classname: string;
        constructor(p?: IWearEquips);
        public arms?: (IItemInfo|null);
        public ring?: (IItemInfo|null);
        public necklace?: (IItemInfo|null);
        public clothes?: (IItemInfo|null);
        public belt?: (IItemInfo|null);
        public shoes?: (IItemInfo|null);
        public static create(properties?: IWearEquips): WearEquips;
        public static encode(m: IWearEquips, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IWearEquips, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WearEquips;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WearEquips;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IAttributeCell {
        baseRate?: (number|null);
        selfRate?: (number|null);
        value?: (number|null);
    }

    class AttributeCell implements IAttributeCell {
        public classname: string;
        constructor(p?: IAttributeCell);
        public baseRate: number;
        public selfRate: number;
        public value: number;
        public static create(properties?: IAttributeCell): AttributeCell;
        public static encode(m: IAttributeCell, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IAttributeCell, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): AttributeCell;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AttributeCell;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IRoleAttribute {
        hp?: (IAttributeCell|null);
        attack?: (IAttributeCell|null);
        defense?: (IAttributeCell|null);
        hit?: (IAttributeCell|null);
        dodge?: (IAttributeCell|null);
        riot?: (IAttributeCell|null);
        de_riot?: (IAttributeCell|null);
        sie?: (IAttributeCell|null);
        de_sie?: (IAttributeCell|null);
        hp_recover?: (IAttributeCell|null);
        hurt?: (IAttributeCell|null);
        de_hurt?: (IAttributeCell|null);
        dharmakayaType?: (DharmakayaType|null);
    }

    class RoleAttribute implements IRoleAttribute {
        public classname: string;
        constructor(p?: IRoleAttribute);
        public hp?: (IAttributeCell|null);
        public attack?: (IAttributeCell|null);
        public defense?: (IAttributeCell|null);
        public hit?: (IAttributeCell|null);
        public dodge?: (IAttributeCell|null);
        public riot?: (IAttributeCell|null);
        public de_riot?: (IAttributeCell|null);
        public sie?: (IAttributeCell|null);
        public de_sie?: (IAttributeCell|null);
        public hp_recover?: (IAttributeCell|null);
        public hurt?: (IAttributeCell|null);
        public de_hurt?: (IAttributeCell|null);
        public dharmakayaType: DharmakayaType;
        public static create(properties?: IRoleAttribute): RoleAttribute;
        public static encode(m: IRoleAttribute, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IRoleAttribute, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RoleAttribute;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoleAttribute;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IBagItemRequest {
        itemType?: (number|null);
        equipType?: (number|null);
        equipPosition?: (number|null);
    }

    class BagItemRequest implements IBagItemRequest {
        public classname: string;
        constructor(p?: IBagItemRequest);
        public itemType: number;
        public equipType: number;
        public equipPosition: number;
        public static create(properties?: IBagItemRequest): BagItemRequest;
        public static encode(m: IBagItemRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IBagItemRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BagItemRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BagItemRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IBagItemResponse {
        itemType?: (number|null);
        equipType?: (number|null);
        equipPosition?: (number|null);
        itemList?: (IItemInfo[]|null);
        resolve?: (number|null);
    }

    class BagItemResponse implements IBagItemResponse {
        public classname: string;
        constructor(p?: IBagItemResponse);
        public itemType: number;
        public equipType: number;
        public equipPosition: number;
        public itemList: IItemInfo[];
        public resolve: number;
        public static create(properties?: IBagItemResponse): BagItemResponse;
        public static encode(m: IBagItemResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IBagItemResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BagItemResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BagItemResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IRoleEquipRequest {
    }

    class RoleEquipRequest implements IRoleEquipRequest {
        public classname: string;
        constructor(p?: IRoleEquipRequest);
        public static create(properties?: IRoleEquipRequest): RoleEquipRequest;
        public static encode(m: IRoleEquipRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IRoleEquipRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RoleEquipRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoleEquipRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IRoleEquipResponse {
        wearEquips?: (IWearEquips|null);
        wearThrones?: (IWearEquips|null);
        roleAttribute?: (IRoleAttribute|null);
    }

    class RoleEquipResponse implements IRoleEquipResponse {
        public classname: string;
        constructor(p?: IRoleEquipResponse);
        public wearEquips?: (IWearEquips|null);
        public wearThrones?: (IWearEquips|null);
        public roleAttribute?: (IRoleAttribute|null);
        public static create(properties?: IRoleEquipResponse): RoleEquipResponse;
        public static encode(m: IRoleEquipResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IRoleEquipResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RoleEquipResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoleEquipResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IEquipInfoRequest {
        itemId?: (string|null);
        uuid?: (string|null);
        bagType?: (number|null);
    }

    class EquipInfoRequest implements IEquipInfoRequest {
        public classname: string;
        constructor(p?: IEquipInfoRequest);
        public itemId: string;
        public uuid: string;
        public bagType: number;
        public static create(properties?: IEquipInfoRequest): EquipInfoRequest;
        public static encode(m: IEquipInfoRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IEquipInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): EquipInfoRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EquipInfoRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IEquipInfoResponse {
        equipInfo?: (IEquipInfo|null);
    }

    class EquipInfoResponse implements IEquipInfoResponse {
        public classname: string;
        constructor(p?: IEquipInfoResponse);
        public equipInfo?: (IEquipInfo|null);
        public static create(properties?: IEquipInfoResponse): EquipInfoResponse;
        public static encode(m: IEquipInfoResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IEquipInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): EquipInfoResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EquipInfoResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IWearEquipRequest {
        removeItemId?: (string|null);
        wearItemId?: (string|null);
        wearUuid?: (string|null);
        equipType?: (number|null);
    }

    class WearEquipRequest implements IWearEquipRequest {
        public classname: string;
        constructor(p?: IWearEquipRequest);
        public removeItemId: string;
        public wearItemId: string;
        public wearUuid: string;
        public equipType: number;
        public static create(properties?: IWearEquipRequest): WearEquipRequest;
        public static encode(m: IWearEquipRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IWearEquipRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WearEquipRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WearEquipRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IWearEquipResponse {
        isSuccess?: (boolean|null);
        removeItemInfo?: (IItemInfo|null);
        wearItemInfo?: (IItemInfo|null);
    }

    class WearEquipResponse implements IWearEquipResponse {
        public classname: string;
        constructor(p?: IWearEquipResponse);
        public isSuccess: boolean;
        public removeItemInfo?: (IItemInfo|null);
        public wearItemInfo?: (IItemInfo|null);
        public static create(properties?: IWearEquipResponse): WearEquipResponse;
        public static encode(m: IWearEquipResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IWearEquipResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WearEquipResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WearEquipResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IEquipRefineRequest {
        itemId?: (string|null);
        uuid?: (string|null);
        bagType?: (number|null);
    }

    class EquipRefineRequest implements IEquipRefineRequest {
        public classname: string;
        constructor(p?: IEquipRefineRequest);
        public itemId: string;
        public uuid: string;
        public bagType: number;
        public static create(properties?: IEquipRefineRequest): EquipRefineRequest;
        public static encode(m: IEquipRefineRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IEquipRefineRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): EquipRefineRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EquipRefineRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IEquipRefineResponse {
        equipInfo?: (IEquipInfo|null);
    }

    class EquipRefineResponse implements IEquipRefineResponse {
        public classname: string;
        constructor(p?: IEquipRefineResponse);
        public equipInfo?: (IEquipInfo|null);
        public static create(properties?: IEquipRefineResponse): EquipRefineResponse;
        public static encode(m: IEquipRefineResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IEquipRefineResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): EquipRefineResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EquipRefineResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IEquipUpRequest {
        itemId?: (string|null);
        uuid?: (string|null);
        bagType?: (number|null);
    }

    class EquipUpRequest implements IEquipUpRequest {
        public classname: string;
        constructor(p?: IEquipUpRequest);
        public itemId: string;
        public uuid: string;
        public bagType: number;
        public static create(properties?: IEquipUpRequest): EquipUpRequest;
        public static encode(m: IEquipUpRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IEquipUpRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): EquipUpRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EquipUpRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IEquipUpResponse {
        equipInfo?: (IEquipInfo|null);
        isSuccess?: (boolean|null);
    }

    class EquipUpResponse implements IEquipUpResponse {
        public classname: string;
        constructor(p?: IEquipUpResponse);
        public equipInfo?: (IEquipInfo|null);
        public isSuccess: boolean;
        public static create(properties?: IEquipUpResponse): EquipUpResponse;
        public static encode(m: IEquipUpResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IEquipUpResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): EquipUpResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EquipUpResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IEquipLockRequest {
        itemId?: (string|null);
        uuid?: (string|null);
        bagType?: (number|null);
        isLock?: (number|null);
    }

    class EquipLockRequest implements IEquipLockRequest {
        public classname: string;
        constructor(p?: IEquipLockRequest);
        public itemId: string;
        public uuid: string;
        public bagType: number;
        public isLock: number;
        public static create(properties?: IEquipLockRequest): EquipLockRequest;
        public static encode(m: IEquipLockRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IEquipLockRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): EquipLockRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EquipLockRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IEquipLockResponse {
        isSuccess?: (boolean|null);
        isLock?: (number|null);
    }

    class EquipLockResponse implements IEquipLockResponse {
        public classname: string;
        constructor(p?: IEquipLockResponse);
        public isSuccess: boolean;
        public isLock: number;
        public static create(properties?: IEquipLockResponse): EquipLockResponse;
        public static encode(m: IEquipLockResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IEquipLockResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): EquipLockResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EquipLockResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IEquipResolveRequest {
        items?: (IItemInfo[]|null);
    }

    class EquipResolveRequest implements IEquipResolveRequest {
        public classname: string;
        constructor(p?: IEquipResolveRequest);
        public items: IItemInfo[];
        public static create(properties?: IEquipResolveRequest): EquipResolveRequest;
        public static encode(m: IEquipResolveRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IEquipResolveRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): EquipResolveRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EquipResolveRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IEquipResolveResponse {
        itemList?: (IItemInfo[]|null);
    }

    class EquipResolveResponse implements IEquipResolveResponse {
        public classname: string;
        constructor(p?: IEquipResolveResponse);
        public itemList: IItemInfo[];
        public static create(properties?: IEquipResolveResponse): EquipResolveResponse;
        public static encode(m: IEquipResolveResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IEquipResolveResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): EquipResolveResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EquipResolveResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IRoleStateLevelRequest {
    }

    class RoleStateLevelRequest implements IRoleStateLevelRequest {
        public classname: string;
        constructor(p?: IRoleStateLevelRequest);
        public static create(properties?: IRoleStateLevelRequest): RoleStateLevelRequest;
        public static encode(m: IRoleStateLevelRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IRoleStateLevelRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RoleStateLevelRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoleStateLevelRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IRoleStateLevelResponse {
        realmLevel?: (number|null);
        totalBreachAura?: (number|null);
        cumulativeAura?: (number|null);
        needGoods?: (IItemInfo[]|null);
        breachProbability?: (number|null);
        hp?: (number|null);
        attack?: (number|null);
        defense?: (number|null);
        isCreatDharma?: (boolean|null);
    }

    class RoleStateLevelResponse implements IRoleStateLevelResponse {
        public classname: string;
        constructor(p?: IRoleStateLevelResponse);
        public realmLevel: number;
        public totalBreachAura: number;
        public cumulativeAura: number;
        public needGoods: IItemInfo[];
        public breachProbability: number;
        public hp: number;
        public attack: number;
        public defense: number;
        public isCreatDharma: boolean;
        public static create(properties?: IRoleStateLevelResponse): RoleStateLevelResponse;
        public static encode(m: IRoleStateLevelResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IRoleStateLevelResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RoleStateLevelResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoleStateLevelResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IRoleUpgradeStateRequest {
    }

    class RoleUpgradeStateRequest implements IRoleUpgradeStateRequest {
        public classname: string;
        constructor(p?: IRoleUpgradeStateRequest);
        public static create(properties?: IRoleUpgradeStateRequest): RoleUpgradeStateRequest;
        public static encode(m: IRoleUpgradeStateRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IRoleUpgradeStateRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RoleUpgradeStateRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoleUpgradeStateRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IRoleUpgradeStateResponse {
        isSuccess?: (boolean|null);
        deductionAura?: (number|null);
        power?: (number|null);
        hp?: (number|null);
        attack?: (number|null);
        defense?: (number|null);
    }

    class RoleUpgradeStateResponse implements IRoleUpgradeStateResponse {
        public classname: string;
        constructor(p?: IRoleUpgradeStateResponse);
        public isSuccess: boolean;
        public deductionAura: number;
        public power: number;
        public hp: number;
        public attack: number;
        public defense: number;
        public static create(properties?: IRoleUpgradeStateResponse): RoleUpgradeStateResponse;
        public static encode(m: IRoleUpgradeStateResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IRoleUpgradeStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RoleUpgradeStateResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoleUpgradeStateResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface ISelectDharmakayaRequest {
        dharmakayaType?: (DharmakayaType|null);
    }

    class SelectDharmakayaRequest implements ISelectDharmakayaRequest {
        public classname: string;
        constructor(p?: ISelectDharmakayaRequest);
        public dharmakayaType: DharmakayaType;
        public static create(properties?: ISelectDharmakayaRequest): SelectDharmakayaRequest;
        public static encode(m: ISelectDharmakayaRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: ISelectDharmakayaRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SelectDharmakayaRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SelectDharmakayaRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface ISelectDharmakayaResponse {
    }

    class SelectDharmakayaResponse implements ISelectDharmakayaResponse {
        public classname: string;
        constructor(p?: ISelectDharmakayaResponse);
        public static create(properties?: ISelectDharmakayaResponse): SelectDharmakayaResponse;
        public static encode(m: ISelectDharmakayaResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: ISelectDharmakayaResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SelectDharmakayaResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SelectDharmakayaResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IDharmakayaRecastRequest {
    }

    class DharmakayaRecastRequest implements IDharmakayaRecastRequest {
        public classname: string;
        constructor(p?: IDharmakayaRecastRequest);
        public static create(properties?: IDharmakayaRecastRequest): DharmakayaRecastRequest;
        public static encode(m: IDharmakayaRecastRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IDharmakayaRecastRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DharmakayaRecastRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DharmakayaRecastRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IDharmakayaRecastResponse {
        dharmakayaType?: (DharmakayaType|null);
    }

    class DharmakayaRecastResponse implements IDharmakayaRecastResponse {
        public classname: string;
        constructor(p?: IDharmakayaRecastResponse);
        public dharmakayaType: DharmakayaType;
        public static create(properties?: IDharmakayaRecastResponse): DharmakayaRecastResponse;
        public static encode(m: IDharmakayaRecastResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IDharmakayaRecastResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DharmakayaRecastResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DharmakayaRecastResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IRoleDharmakayaRequest {
    }

    class RoleDharmakayaRequest implements IRoleDharmakayaRequest {
        public classname: string;
        constructor(p?: IRoleDharmakayaRequest);
        public static create(properties?: IRoleDharmakayaRequest): RoleDharmakayaRequest;
        public static encode(m: IRoleDharmakayaRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IRoleDharmakayaRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RoleDharmakayaRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoleDharmakayaRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IRoleDharmakayaResponse {
        dharmakayaLevel?: (number|null);
        upgradePowerAsk?: (number|null);
        attributeAddition?: (IRoleAttribute|null);
    }

    class RoleDharmakayaResponse implements IRoleDharmakayaResponse {
        public classname: string;
        constructor(p?: IRoleDharmakayaResponse);
        public dharmakayaLevel: number;
        public upgradePowerAsk: number;
        public attributeAddition?: (IRoleAttribute|null);
        public static create(properties?: IRoleDharmakayaResponse): RoleDharmakayaResponse;
        public static encode(m: IRoleDharmakayaResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IRoleDharmakayaResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RoleDharmakayaResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoleDharmakayaResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IAttributeUpgradeRequest {
    }

    class AttributeUpgradeRequest implements IAttributeUpgradeRequest {
        public classname: string;
        constructor(p?: IAttributeUpgradeRequest);
        public static create(properties?: IAttributeUpgradeRequest): AttributeUpgradeRequest;
        public static encode(m: IAttributeUpgradeRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IAttributeUpgradeRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): AttributeUpgradeRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AttributeUpgradeRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IAttributeUpgradeResponse {
        isSuccess?: (boolean|null);
        upgradeLevel?: (number|null);
        attributeAddition?: (IRoleAttribute|null);
    }

    class AttributeUpgradeResponse implements IAttributeUpgradeResponse {
        public classname: string;
        constructor(p?: IAttributeUpgradeResponse);
        public isSuccess: boolean;
        public upgradeLevel: number;
        public attributeAddition?: (IRoleAttribute|null);
        public static create(properties?: IAttributeUpgradeResponse): AttributeUpgradeResponse;
        public static encode(m: IAttributeUpgradeResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IAttributeUpgradeResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): AttributeUpgradeResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AttributeUpgradeResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IDharmakayaUpgradeRequest {
    }

    class DharmakayaUpgradeRequest implements IDharmakayaUpgradeRequest {
        public classname: string;
        constructor(p?: IDharmakayaUpgradeRequest);
        public static create(properties?: IDharmakayaUpgradeRequest): DharmakayaUpgradeRequest;
        public static encode(m: IDharmakayaUpgradeRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IDharmakayaUpgradeRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DharmakayaUpgradeRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DharmakayaUpgradeRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IDharmakayaUpgradeResponse {
    }

    class DharmakayaUpgradeResponse implements IDharmakayaUpgradeResponse {
        public classname: string;
        constructor(p?: IDharmakayaUpgradeResponse);
        public static create(properties?: IDharmakayaUpgradeResponse): DharmakayaUpgradeResponse;
        public static encode(m: IDharmakayaUpgradeResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IDharmakayaUpgradeResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DharmakayaUpgradeResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DharmakayaUpgradeResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IBattleSettlementResponse {
        isNestLevel?: (boolean|null);
        nestLevel?: (number|null);
        items?: (IItemInfo[]|null);
    }

    class BattleSettlementResponse implements IBattleSettlementResponse {
        public classname: string;
        constructor(p?: IBattleSettlementResponse);
        public isNestLevel: boolean;
        public nestLevel: number;
        public items: IItemInfo[];
        public static create(properties?: IBattleSettlementResponse): BattleSettlementResponse;
        public static encode(m: IBattleSettlementResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IBattleSettlementResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BattleSettlementResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BattleSettlementResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IBattleSettlementRequest {
        battleId?: (number|Long|null);
        isPassThrough?: (boolean|null);
    }

    class BattleSettlementRequest implements IBattleSettlementRequest {
        public classname: string;
        constructor(p?: IBattleSettlementRequest);
        public battleId: (number|Long);
        public isPassThrough: boolean;
        public static create(properties?: IBattleSettlementRequest): BattleSettlementRequest;
        public static encode(m: IBattleSettlementRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IBattleSettlementRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BattleSettlementRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BattleSettlementRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IBattleBeginRequest {
        gameCopyType?: (GameCopyType|null);
        reChallenge?: (number|null);
        mysteryId?: (number|null);
    }

    class BattleBeginRequest implements IBattleBeginRequest {
        public classname: string;
        constructor(p?: IBattleBeginRequest);
        public gameCopyType: GameCopyType;
        public reChallenge: number;
        public mysteryId: number;
        public static create(properties?: IBattleBeginRequest): BattleBeginRequest;
        public static encode(m: IBattleBeginRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IBattleBeginRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BattleBeginRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BattleBeginRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IBattleBeginResponse {
        battleId?: (number|Long|null);
        currentLevel?: (number|null);
        RoleAttribute?: (IRoleAttribute|null);
        skills?: (number[]|null);
        monsterElement?: (number|null);
        bossElement?: (number|null);
        gameCopyType?: (GameCopyType|null);
    }

    class BattleBeginResponse implements IBattleBeginResponse {
        public classname: string;
        constructor(p?: IBattleBeginResponse);
        public battleId: (number|Long);
        public currentLevel: number;
        public RoleAttribute?: (IRoleAttribute|null);
        public skills: number[];
        public monsterElement: number;
        public bossElement: number;
        public gameCopyType: GameCopyType;
        public static create(properties?: IBattleBeginResponse): BattleBeginResponse;
        public static encode(m: IBattleBeginResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IBattleBeginResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BattleBeginResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BattleBeginResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IAttackInfo {
        skill_id?: (number|null);
        hurt?: (number|null);
    }

    class AttackInfo implements IAttackInfo {
        public classname: string;
        constructor(p?: IAttackInfo);
        public skill_id: number;
        public hurt: number;
        public static create(properties?: IAttackInfo): AttackInfo;
        public static encode(m: IAttackInfo, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IAttackInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): AttackInfo;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AttackInfo;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IBattleReportRequest {
        attackInfos?: (IAttackInfo[]|null);
        battleId?: (number|Long|null);
    }

    class BattleReportRequest implements IBattleReportRequest {
        public classname: string;
        constructor(p?: IBattleReportRequest);
        public attackInfos: IAttackInfo[];
        public battleId: (number|Long);
        public static create(properties?: IBattleReportRequest): BattleReportRequest;
        public static encode(m: IBattleReportRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IBattleReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BattleReportRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BattleReportRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IBattleReportResponse {
        items?: (IItemInfo[]|null);
    }

    class BattleReportResponse implements IBattleReportResponse {
        public classname: string;
        constructor(p?: IBattleReportResponse);
        public items: IItemInfo[];
        public static create(properties?: IBattleReportResponse): BattleReportResponse;
        public static encode(m: IBattleReportResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IBattleReportResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): BattleReportResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BattleReportResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IMentalDetails {
        mentalId?: (number|null);
        level?: (number|null);
        isLearn?: (boolean|null);
        uuid?: (string|null);
    }

    class MentalDetails implements IMentalDetails {
        public classname: string;
        constructor(p?: IMentalDetails);
        public mentalId: number;
        public level: number;
        public isLearn: boolean;
        public uuid: string;
        public static create(properties?: IMentalDetails): MentalDetails;
        public static encode(m: IMentalDetails, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IMentalDetails, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): MentalDetails;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MentalDetails;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IMentalDetailsRequest {
    }

    class MentalDetailsRequest implements IMentalDetailsRequest {
        public classname: string;
        constructor(p?: IMentalDetailsRequest);
        public static create(properties?: IMentalDetailsRequest): MentalDetailsRequest;
        public static encode(m: IMentalDetailsRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IMentalDetailsRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): MentalDetailsRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MentalDetailsRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IMentalDetailsResponse {
        details?: (IMentalDetails[]|null);
    }

    class MentalDetailsResponse implements IMentalDetailsResponse {
        public classname: string;
        constructor(p?: IMentalDetailsResponse);
        public details: IMentalDetails[];
        public static create(properties?: IMentalDetailsResponse): MentalDetailsResponse;
        public static encode(m: IMentalDetailsResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IMentalDetailsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): MentalDetailsResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MentalDetailsResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IMentalUpRequest {
        mentalId?: (number|null);
    }

    class MentalUpRequest implements IMentalUpRequest {
        public classname: string;
        constructor(p?: IMentalUpRequest);
        public mentalId: number;
        public static create(properties?: IMentalUpRequest): MentalUpRequest;
        public static encode(m: IMentalUpRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IMentalUpRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): MentalUpRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MentalUpRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IMentalUpResponse {
        level?: (number|null);
        isSuccess?: (boolean|null);
    }

    class MentalUpResponse implements IMentalUpResponse {
        public classname: string;
        constructor(p?: IMentalUpResponse);
        public level: number;
        public isSuccess: boolean;
        public static create(properties?: IMentalUpResponse): MentalUpResponse;
        public static encode(m: IMentalUpResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IMentalUpResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): MentalUpResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MentalUpResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IMentalLearnRequest {
        mentalId?: (number|null);
    }

    class MentalLearnRequest implements IMentalLearnRequest {
        public classname: string;
        constructor(p?: IMentalLearnRequest);
        public mentalId: number;
        public static create(properties?: IMentalLearnRequest): MentalLearnRequest;
        public static encode(m: IMentalLearnRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IMentalLearnRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): MentalLearnRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MentalLearnRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IMentalLearnResponse {
    }

    class MentalLearnResponse implements IMentalLearnResponse {
        public classname: string;
        constructor(p?: IMentalLearnResponse);
        public static create(properties?: IMentalLearnResponse): MentalLearnResponse;
        public static encode(m: IMentalLearnResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IMentalLearnResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): MentalLearnResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MentalLearnResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IMagicDetails {
        magicId?: (number|null);
        level?: (number|null);
    }

    class MagicDetails implements IMagicDetails {
        public classname: string;
        constructor(p?: IMagicDetails);
        public magicId: number;
        public level: number;
        public static create(properties?: IMagicDetails): MagicDetails;
        public static encode(m: IMagicDetails, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IMagicDetails, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): MagicDetails;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MagicDetails;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IMagicUseDetails {
        magicId?: (number|null);
        number?: (number|null);
    }

    class MagicUseDetails implements IMagicUseDetails {
        public classname: string;
        constructor(p?: IMagicUseDetails);
        public magicId: number;
        public number: number;
        public static create(properties?: IMagicUseDetails): MagicUseDetails;
        public static encode(m: IMagicUseDetails, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IMagicUseDetails, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): MagicUseDetails;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MagicUseDetails;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IMagicDetailsRequest {
    }

    class MagicDetailsRequest implements IMagicDetailsRequest {
        public classname: string;
        constructor(p?: IMagicDetailsRequest);
        public static create(properties?: IMagicDetailsRequest): MagicDetailsRequest;
        public static encode(m: IMagicDetailsRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IMagicDetailsRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): MagicDetailsRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MagicDetailsRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IMagicDetailsResponse {
        details?: (IMagicDetails[]|null);
        use?: (IMagicUseDetails[]|null);
    }

    class MagicDetailsResponse implements IMagicDetailsResponse {
        public classname: string;
        constructor(p?: IMagicDetailsResponse);
        public details: IMagicDetails[];
        public use: IMagicUseDetails[];
        public static create(properties?: IMagicDetailsResponse): MagicDetailsResponse;
        public static encode(m: IMagicDetailsResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IMagicDetailsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): MagicDetailsResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MagicDetailsResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IMagicLearnRequest {
        magicId?: (number|null);
    }

    class MagicLearnRequest implements IMagicLearnRequest {
        public classname: string;
        constructor(p?: IMagicLearnRequest);
        public magicId: number;
        public static create(properties?: IMagicLearnRequest): MagicLearnRequest;
        public static encode(m: IMagicLearnRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IMagicLearnRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): MagicLearnRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MagicLearnRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IMagicLearnResponse {
    }

    class MagicLearnResponse implements IMagicLearnResponse {
        public classname: string;
        constructor(p?: IMagicLearnResponse);
        public static create(properties?: IMagicLearnResponse): MagicLearnResponse;
        public static encode(m: IMagicLearnResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IMagicLearnResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): MagicLearnResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MagicLearnResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IMagicUpRequest {
        magicId?: (number|null);
    }

    class MagicUpRequest implements IMagicUpRequest {
        public classname: string;
        constructor(p?: IMagicUpRequest);
        public magicId: number;
        public static create(properties?: IMagicUpRequest): MagicUpRequest;
        public static encode(m: IMagicUpRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IMagicUpRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): MagicUpRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MagicUpRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IMagicUpResponse {
        level?: (number|null);
        isSuccess?: (boolean|null);
    }

    class MagicUpResponse implements IMagicUpResponse {
        public classname: string;
        constructor(p?: IMagicUpResponse);
        public level: number;
        public isSuccess: boolean;
        public static create(properties?: IMagicUpResponse): MagicUpResponse;
        public static encode(m: IMagicUpResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IMagicUpResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): MagicUpResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MagicUpResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IMagicUseRequest {
        magicId?: (number|null);
        number?: (number|null);
    }

    class MagicUseRequest implements IMagicUseRequest {
        public classname: string;
        constructor(p?: IMagicUseRequest);
        public magicId: number;
        public number: number;
        public static create(properties?: IMagicUseRequest): MagicUseRequest;
        public static encode(m: IMagicUseRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IMagicUseRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): MagicUseRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MagicUseRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IMagicUseResponse {
    }

    class MagicUseResponse implements IMagicUseResponse {
        public classname: string;
        constructor(p?: IMagicUseResponse);
        public static create(properties?: IMagicUseResponse): MagicUseResponse;
        public static encode(m: IMagicUseResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IMagicUseResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): MagicUseResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MagicUseResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IMagicCancelRequest {
        number?: (number|null);
    }

    class MagicCancelRequest implements IMagicCancelRequest {
        public classname: string;
        constructor(p?: IMagicCancelRequest);
        public number: number;
        public static create(properties?: IMagicCancelRequest): MagicCancelRequest;
        public static encode(m: IMagicCancelRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IMagicCancelRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): MagicCancelRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MagicCancelRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IMagicCancelResponse {
    }

    class MagicCancelResponse implements IMagicCancelResponse {
        public classname: string;
        constructor(p?: IMagicCancelResponse);
        public static create(properties?: IMagicCancelResponse): MagicCancelResponse;
        public static encode(m: IMagicCancelResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IMagicCancelResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): MagicCancelResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MagicCancelResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface ISignRequest {
    }

    class SignRequest implements ISignRequest {
        public classname: string;
        constructor(p?: ISignRequest);
        public static create(properties?: ISignRequest): SignRequest;
        public static encode(m: ISignRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: ISignRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SignRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface ISignResponse {
        items?: (IItemInfo[]|null);
    }

    class SignResponse implements ISignResponse {
        public classname: string;
        constructor(p?: ISignResponse);
        public items: IItemInfo[];
        public static create(properties?: ISignResponse): SignResponse;
        public static encode(m: ISignResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: ISignResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SignResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IDungeonDetailsRequest {
    }

    class DungeonDetailsRequest implements IDungeonDetailsRequest {
        public classname: string;
        constructor(p?: IDungeonDetailsRequest);
        public static create(properties?: IDungeonDetailsRequest): DungeonDetailsRequest;
        public static encode(m: IDungeonDetailsRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IDungeonDetailsRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DungeonDetailsRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DungeonDetailsRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IDungeonDetailsResponse {
        secretdungeonNum?: (number|null);
        illusorydungeonNum?: (number|null);
        secretdungeonTicketNum?: (number|null);
        illusorydungeonTicketNum?: (number|null);
    }

    class DungeonDetailsResponse implements IDungeonDetailsResponse {
        public classname: string;
        constructor(p?: IDungeonDetailsResponse);
        public secretdungeonNum: number;
        public illusorydungeonNum: number;
        public secretdungeonTicketNum: number;
        public illusorydungeonTicketNum: number;
        public static create(properties?: IDungeonDetailsResponse): DungeonDetailsResponse;
        public static encode(m: IDungeonDetailsResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IDungeonDetailsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): DungeonDetailsResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DungeonDetailsResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface ITaskDetails {
        taskId?: (number|null);
        total?: (number|null);
        progress?: (number|null);
        complete?: (boolean|null);
        receive?: (boolean|null);
    }

    class TaskDetails implements ITaskDetails {
        public classname: string;
        constructor(p?: ITaskDetails);
        public taskId: number;
        public total: number;
        public progress: number;
        public complete: boolean;
        public receive: boolean;
        public static create(properties?: ITaskDetails): TaskDetails;
        public static encode(m: ITaskDetails, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: ITaskDetails, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): TaskDetails;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TaskDetails;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface ITaskDetailsRequest {
    }

    class TaskDetailsRequest implements ITaskDetailsRequest {
        public classname: string;
        constructor(p?: ITaskDetailsRequest);
        public static create(properties?: ITaskDetailsRequest): TaskDetailsRequest;
        public static encode(m: ITaskDetailsRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: ITaskDetailsRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): TaskDetailsRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TaskDetailsRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface ITaskDetailsResponse {
        daily?: (ITaskDetails[]|null);
        head?: (ITaskDetails[]|null);
    }

    class TaskDetailsResponse implements ITaskDetailsResponse {
        public classname: string;
        constructor(p?: ITaskDetailsResponse);
        public daily: ITaskDetails[];
        public head: ITaskDetails[];
        public static create(properties?: ITaskDetailsResponse): TaskDetailsResponse;
        public static encode(m: ITaskDetailsResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: ITaskDetailsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): TaskDetailsResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TaskDetailsResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface ITaskReceiveRequest {
        taskId?: (number|null);
    }

    class TaskReceiveRequest implements ITaskReceiveRequest {
        public classname: string;
        constructor(p?: ITaskReceiveRequest);
        public taskId: number;
        public static create(properties?: ITaskReceiveRequest): TaskReceiveRequest;
        public static encode(m: ITaskReceiveRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: ITaskReceiveRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): TaskReceiveRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TaskReceiveRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface ITaskReceiveResponse {
    }

    class TaskReceiveResponse implements ITaskReceiveResponse {
        public classname: string;
        constructor(p?: ITaskReceiveResponse);
        public static create(properties?: ITaskReceiveResponse): TaskReceiveResponse;
        public static encode(m: ITaskReceiveResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: ITaskReceiveResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): TaskReceiveResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TaskReceiveResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IItemUseRequest {
        itemId?: (number|null);
        num?: (number|null);
    }

    class ItemUseRequest implements IItemUseRequest {
        public classname: string;
        constructor(p?: IItemUseRequest);
        public itemId: number;
        public num: number;
        public static create(properties?: IItemUseRequest): ItemUseRequest;
        public static encode(m: IItemUseRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IItemUseRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ItemUseRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemUseRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IItemUseResponse {
    }

    class ItemUseResponse implements IItemUseResponse {
        public classname: string;
        constructor(p?: IItemUseResponse);
        public static create(properties?: IItemUseResponse): ItemUseResponse;
        public static encode(m: IItemUseResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IItemUseResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ItemUseResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemUseResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IItemChooseOneRequest {
        itemId?: (number|null);
        composeItemId?: (number|null);
    }

    class ItemChooseOneRequest implements IItemChooseOneRequest {
        public classname: string;
        constructor(p?: IItemChooseOneRequest);
        public itemId: number;
        public composeItemId: number;
        public static create(properties?: IItemChooseOneRequest): ItemChooseOneRequest;
        public static encode(m: IItemChooseOneRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IItemChooseOneRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ItemChooseOneRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemChooseOneRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IItemChooseOneResponse {
    }

    class ItemChooseOneResponse implements IItemChooseOneResponse {
        public classname: string;
        constructor(p?: IItemChooseOneResponse);
        public static create(properties?: IItemChooseOneResponse): ItemChooseOneResponse;
        public static encode(m: IItemChooseOneResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IItemChooseOneResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ItemChooseOneResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemChooseOneResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IItemOpenResolveRequest {
        type?: (number|null);
    }

    class ItemOpenResolveRequest implements IItemOpenResolveRequest {
        public classname: string;
        constructor(p?: IItemOpenResolveRequest);
        public type: number;
        public static create(properties?: IItemOpenResolveRequest): ItemOpenResolveRequest;
        public static encode(m: IItemOpenResolveRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IItemOpenResolveRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ItemOpenResolveRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemOpenResolveRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IItemOpenResolveResponse {
    }

    class ItemOpenResolveResponse implements IItemOpenResolveResponse {
        public classname: string;
        constructor(p?: IItemOpenResolveResponse);
        public static create(properties?: IItemOpenResolveResponse): ItemOpenResolveResponse;
        public static encode(m: IItemOpenResolveResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IItemOpenResolveResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ItemOpenResolveResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemOpenResolveResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IShopBuyRequest {
        shopType?: (string|null);
        shopItemId?: (number|null);
        num?: (number|null);
    }

    class ShopBuyRequest implements IShopBuyRequest {
        public classname: string;
        constructor(p?: IShopBuyRequest);
        public shopType: string;
        public shopItemId: number;
        public num: number;
        public static create(properties?: IShopBuyRequest): ShopBuyRequest;
        public static encode(m: IShopBuyRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IShopBuyRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ShopBuyRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ShopBuyRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IShopBuyResponse {
    }

    class ShopBuyResponse implements IShopBuyResponse {
        public classname: string;
        constructor(p?: IShopBuyResponse);
        public static create(properties?: IShopBuyResponse): ShopBuyResponse;
        public static encode(m: IShopBuyResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IShopBuyResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ShopBuyResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ShopBuyResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IShopBuyNumRequest {
        shopType?: (string|null);
    }

    class ShopBuyNumRequest implements IShopBuyNumRequest {
        public classname: string;
        constructor(p?: IShopBuyNumRequest);
        public shopType: string;
        public static create(properties?: IShopBuyNumRequest): ShopBuyNumRequest;
        public static encode(m: IShopBuyNumRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IShopBuyNumRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ShopBuyNumRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ShopBuyNumRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IShopBuyNum {
        shopItemId?: (number|null);
        num?: (number|null);
    }

    class ShopBuyNum implements IShopBuyNum {
        public classname: string;
        constructor(p?: IShopBuyNum);
        public shopItemId: number;
        public num: number;
        public static create(properties?: IShopBuyNum): ShopBuyNum;
        public static encode(m: IShopBuyNum, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IShopBuyNum, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ShopBuyNum;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ShopBuyNum;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IShopBuyNumResponse {
        details?: (IShopBuyNum[]|null);
    }

    class ShopBuyNumResponse implements IShopBuyNumResponse {
        public classname: string;
        constructor(p?: IShopBuyNumResponse);
        public details: IShopBuyNum[];
        public static create(properties?: IShopBuyNumResponse): ShopBuyNumResponse;
        public static encode(m: IShopBuyNumResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IShopBuyNumResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ShopBuyNumResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ShopBuyNumResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IEmailListRequest {
    }

    class EmailListRequest implements IEmailListRequest {
        public classname: string;
        constructor(p?: IEmailListRequest);
        public static create(properties?: IEmailListRequest): EmailListRequest;
        public static encode(m: IEmailListRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IEmailListRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): EmailListRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EmailListRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IEmailList {
        id?: (number|null);
        type?: (string|null);
        title?: (string|null);
        data?: (string|null);
        sendUser?: (string|null);
        sendTime?: (string|null);
        status?: (EmailStatus|null);
        items?: (IItemInfo[]|null);
    }

    class EmailList implements IEmailList {
        public classname: string;
        constructor(p?: IEmailList);
        public id: number;
        public type: string;
        public title: string;
        public data: string;
        public sendUser: string;
        public sendTime: string;
        public status: EmailStatus;
        public items: IItemInfo[];
        public static create(properties?: IEmailList): EmailList;
        public static encode(m: IEmailList, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IEmailList, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): EmailList;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EmailList;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IEmailListResponse {
        list?: (IEmailList[]|null);
    }

    class EmailListResponse implements IEmailListResponse {
        public classname: string;
        constructor(p?: IEmailListResponse);
        public list: IEmailList[];
        public static create(properties?: IEmailListResponse): EmailListResponse;
        public static encode(m: IEmailListResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IEmailListResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): EmailListResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EmailListResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IEmailOpRequest {
        id?: (number|null);
        type?: (EmailOpType|null);
    }

    class EmailOpRequest implements IEmailOpRequest {
        public classname: string;
        constructor(p?: IEmailOpRequest);
        public id: number;
        public type: EmailOpType;
        public static create(properties?: IEmailOpRequest): EmailOpRequest;
        public static encode(m: IEmailOpRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IEmailOpRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): EmailOpRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EmailOpRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface IEmailOpResponse {
    }

    class EmailOpResponse implements IEmailOpResponse {
        public classname: string;
        constructor(p?: IEmailOpResponse);
        public static create(properties?: IEmailOpResponse): EmailOpResponse;
        public static encode(m: IEmailOpResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: IEmailOpResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): EmailOpResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EmailOpResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface ICreatorItemRequest {
        itemId?: (string|null);
        num?: (number|null);
        qualityId?: (string|null);
    }

    class CreatorItemRequest implements ICreatorItemRequest {
        public classname: string;
        constructor(p?: ICreatorItemRequest);
        public itemId: string;
        public num: number;
        public qualityId: string;
        public static create(properties?: ICreatorItemRequest): CreatorItemRequest;
        public static encode(m: ICreatorItemRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: ICreatorItemRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CreatorItemRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CreatorItemRequest;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    interface ICreatorItemResponse {
        isSuccess?: (boolean|null);
    }

    class CreatorItemResponse implements ICreatorItemResponse {
        public classname: string;
        constructor(p?: ICreatorItemResponse);
        public isSuccess: boolean;
        public static create(properties?: ICreatorItemResponse): CreatorItemResponse;
        public static encode(m: ICreatorItemResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: ICreatorItemResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CreatorItemResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CreatorItemResponse;
        public static verify(m: { [k: string]: any }): (string|null);
    }

    enum Gender {
        None = 0,
        man = 1,
        woman = 2
    }

    enum EquipType {
        Equip = 0,
        Throne = 1
    }

    enum GoodsType {
        All = 0,
        arms = 1,
        ring = 2,
        necklace = 3,
        clothes = 4,
        belt = 5,
        shoes = 6
    }

    enum DharmakayaType {
        None_D = 0,
        Gold = 1,
        Wood = 2,
        Water = 3,
        Fire = 4,
        Soil = 5
    }

    enum GameCopyType {
        none = 0,
        HangUp = 1,
        Mystery = 2,
        Fantasyland = 3
    }

    enum RoleType {
        Unkown = 0,
        Player = 1,
        Monster = 2,
        Boss = 3
    }

    enum ItemsType {
        None_IT = 0,
        Money = 1,
        Prop = 2,
        Consume = 3,
        Equip_IT = 4,
        Book = 5,
        Throne_IT = 6
    }

    enum BagType {
        bag_BT = 0,
        Equip_BT = 1,
        Throne_BT = 2
    }

    enum EmailStatus {
        Default = 0,
        Check = 1,
        Receive = 2
    }

    enum EmailOpType {
        check = 0,
        receive = 1,
        delete = 2
    }
}
