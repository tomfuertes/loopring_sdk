[@loopring-web/loopring-sdk](../README.md) / [Exports](../modules.md) / OffChainWithdrawalRequestV3

# Interface: OffChainWithdrawalRequestV3

**`export`**

**`interface`** OffChainWithdrawalRequestV3

## Table of contents

### Properties

- [accountId](OffChainWithdrawalRequestV3.md#accountid)
- [counterFactualInfo](OffChainWithdrawalRequestV3.md#counterfactualinfo)
- [ecdsaSignature](OffChainWithdrawalRequestV3.md#ecdsasignature)
- [eddsaSignature](OffChainWithdrawalRequestV3.md#eddsasignature)
- [exchange](OffChainWithdrawalRequestV3.md#exchange)
- [extraData](OffChainWithdrawalRequestV3.md#extradata)
- [fastWithdrawalMode](OffChainWithdrawalRequestV3.md#fastwithdrawalmode)
- [hashApproved](OffChainWithdrawalRequestV3.md#hashapproved)
- [maxFee](OffChainWithdrawalRequestV3.md#maxfee)
- [minGas](OffChainWithdrawalRequestV3.md#mingas)
- [owner](OffChainWithdrawalRequestV3.md#owner)
- [storageId](OffChainWithdrawalRequestV3.md#storageid)
- [to](OffChainWithdrawalRequestV3.md#to)
- [token](OffChainWithdrawalRequestV3.md#token)
- [validUntil](OffChainWithdrawalRequestV3.md#validuntil)

## Properties

### accountId

• **accountId**: `number`

account ID

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:832](https://github.com/Loopring/loopring_sdk/blob/9d83b66/src/defs/loopring_defs.ts#L832)

___

### counterFactualInfo

• `Optional` **counterFactualInfo**: [`CounterFactualInfo`](CounterFactualInfo.md)

#### Defined in

[defs/loopring_defs.ts:909](https://github.com/Loopring/loopring_sdk/blob/9d83b66/src/defs/loopring_defs.ts#L909)

___

### ecdsaSignature

• `Optional` **ecdsaSignature**: `string`

ecdsa signature

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:902](https://github.com/Loopring/loopring_sdk/blob/9d83b66/src/defs/loopring_defs.ts#L902)

___

### eddsaSignature

• `Optional` **eddsaSignature**: `string`

eddsa signature

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:896](https://github.com/Loopring/loopring_sdk/blob/9d83b66/src/defs/loopring_defs.ts#L896)

___

### exchange

• **exchange**: `string`

exchange address

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:826](https://github.com/Loopring/loopring_sdk/blob/9d83b66/src/defs/loopring_defs.ts#L826)

___

### extraData

• `Optional` **extraData**: `string`

extra data for complex withdraw mode, normally none

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:884](https://github.com/Loopring/loopring_sdk/blob/9d83b66/src/defs/loopring_defs.ts#L884)

___

### fastWithdrawalMode

• `Optional` **fastWithdrawalMode**: `boolean`

is fast withdraw mode

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:890](https://github.com/Loopring/loopring_sdk/blob/9d83b66/src/defs/loopring_defs.ts#L890)

___

### hashApproved

• `Optional` **hashApproved**: `string`

An approved hash string which was already submitted on eth mainnet

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:908](https://github.com/Loopring/loopring_sdk/blob/9d83b66/src/defs/loopring_defs.ts#L908)

___

### maxFee

• **maxFee**: [`TokenVolumeV3`](TokenVolumeV3.md)

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:850](https://github.com/Loopring/loopring_sdk/blob/9d83b66/src/defs/loopring_defs.ts#L850)

___

### minGas

• **minGas**: `number`

min gas for on-chain withdraw, Loopring exchange allocates gas for each distribution,
but people can also assign this min gas,
so Loopring has to allocate higher gas value for this specific distribution.
Normally no need to take care of this value,
0 means let loopring choose the reasonable gas

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:872](https://github.com/Loopring/loopring_sdk/blob/9d83b66/src/defs/loopring_defs.ts#L872)

___

### owner

• **owner**: `string`

account owner address

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:838](https://github.com/Loopring/loopring_sdk/blob/9d83b66/src/defs/loopring_defs.ts#L838)

___

### storageId

• **storageId**: `number`

offchain ID

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:856](https://github.com/Loopring/loopring_sdk/blob/9d83b66/src/defs/loopring_defs.ts#L856)

___

### to

• **to**: `string`

withdraw to address

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:878](https://github.com/Loopring/loopring_sdk/blob/9d83b66/src/defs/loopring_defs.ts#L878)

___

### token

• **token**: [`TokenVolumeV3`](TokenVolumeV3.md)

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:844](https://github.com/Loopring/loopring_sdk/blob/9d83b66/src/defs/loopring_defs.ts#L844)

___

### validUntil

• **validUntil**: `number`

Timestamp for order to become invalid

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:862](https://github.com/Loopring/loopring_sdk/blob/9d83b66/src/defs/loopring_defs.ts#L862)