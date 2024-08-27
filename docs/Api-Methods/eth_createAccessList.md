---
sidebar_position: 31
---

# eth_chainId

Returns the client coinbase address

## Params
### Name - Transaction
#### `schema`
`Object`
#### title - Transaction object generic to all types
`properties`
##### type
##### title - `type`
###### type - `string`

#### nonce
##### title - `nonce`
###### type - `string`

#### to
`One of`
##### title - `Contract Creation(null)`
###### type - `null`
##### title - `Address`
###### type - `string`

#### from
##### title - `from address`
###### type - `string`

#### gas
##### title - `gas limit`
###### type - `string`

#### value
##### title - `value`
###### type - `string`

#### input
##### title - `input data`
###### type - `string`

#### gasPrice
##### title - `gas price`
###### type - `string`
###### description - `The gas price willing to be paid by the sender in wei`

#### maxPriorityFeePerGas
##### title - `max priority fee per gas`
###### type - `string`
###### description - `Maximum fee gas the sender is willing to pay to miner in wei`

#### maxFeePerGas
##### title - `max fee per gas`
###### type - `string`
###### description - `Maximum total fee gas the sender is willing to pay (includes the network / base fee and miner /priority fee) in wei`

#### maxFeePerBlobGas
##### title - `max priority fee per gas`
###### type - `string`
###### description - `The maximum total fee per gas the sender is willing to pay for blob gas in wei`

#### accessList
`Array`
##### title - `accessList`
###### description - `EIP-2930 access list`

#### blobVersionedHashes
`Array`
##### title - `blobVersionedHashes`
###### description - `List of versioned blob hashes associated with the transaction's EIP-4844 data blobs.`

##### title - `32 byte hex value`
###### type - `string`

#### blobs
`Array`
##### title - `blobs`
###### description - `Raw blob data.`

##### title - `hex encoded bytes`
###### type - `string`

#### chainId
##### title - `chainId`
###### type - `string`
###### description - `Chain ID that this  transaction is  valid on.`

### Name - Block
#### `schema`
`One Of`
#### title - Block number
###### type - `string`

#### title - Block tag
###### type - `string`
###### description - 
``earliest`: The lowest numbered block the client has available; `finalized`: The most recent crypto-economically secure block, cannot be re-orged outside of manual intervention driven by community coordination; `safe`: The most recent block that is safe from re-orgs under honest majority and certain synchronicity assumptions; `latest`: The most recent block in the canonical chain observed by the client, this block may be re-orged out of the canonical chain even under healthy/normal conditions; `pending`: A sample next block built by the client on top of `latest` and containing the set of transactions usually taken from local mempool. Before the merge transition is finalized, any call querying for `finalized` or `safe` block MUST be responded to with `-39001: Unknown block` error`

#### enum
- earliest
- finalized
- safe
- latest
- pending

### Result

## Gas used

### schema
`Object`
#### title - `Access list result`
`properties`

### accessList
`Array`

#### title - `accesslist`

`Object`
#### title - `Access list entry`
`properties`
### address
#### title - `hex encoded address`
##### type - `string`

### storageKeys
`Array`

#### title - `32 byte hex value`
##### type - `string`

#### error
#### title - `error`
##### type - `string`

#### gasUsed
#### title - `Gas used`
##### type - `string`

