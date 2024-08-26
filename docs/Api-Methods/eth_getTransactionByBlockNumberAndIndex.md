---
sidebar_position: 48
---

# eth_getTransactionByBlockHashAndIndex

Returns information about a  transaction by block hash and transaction index position. 

## Params

### Name - Block  

### Schema
`One Of`
#### title : `Block number`

#### type : `string`

#### title : `Block tag`

#### type : `string`

#### description :

`earliest`: The lowest numbered block the client has available;

`finalized`: The most recent crypto-economically secure block, cannot be re-orged outside of manual intervention driven by community coordination;

`safe`: The most recent block that is safe from re-orgs under honest majority and certain synchronicity assumptions;

`latest`: The most recent block in the canonical chain observed by the client, this block may be re-orged out of the canonical chain even under healthy/normal conditions;

`pending`: A sample next block built by the client on top of `latest` and containing the set of transactions usually taken from local mempool. Before the merge transition is finalized, any call querying for `finalized` or `safe` block MUST be responded to with `-39001: Unknown block` error

### Enum

- earliest

- finalized

- safe

- latest

- pending

### Name - Transaction index 

#### title - `hex encoded unsigned integer`
#### type - `string`

## Result 

### Name - Transaction information

`schema`
`One Of`
#### title - `Not Found(null)`
#### type - `null`
`One Of`

`Object`
#### title - `Signed 4844 Transaction`
`properties`

### type
#### title - `type`
#### type - `string`

#### nounce
##### title - `nounce`
##### type - `string`

### to
###### title - `to address`
###### type - `string`

### gas
#### title - `gas limit`
#### type - `string`

### value
#### title - `value`
#### type - `string`

### input
#### title - `input data`
#### type - `string`

##### maxPriorityFeePerGas
###### title - `max priority fee per gas`
###### type - `string`
###### description - `Maximum fee gas the sender is willing to pay to miner in wei`

##### maxFeePerGas
###### title - `max fee per gas`
###### type - `string`
###### description - `Maximum total fee gas the sender is willing to pay (includes the network / base fee and miner /priority fee) in wei`

##### maxFeePerBlobGas
###### title - `max priority fee per gas`
###### type - `string`
###### description - `The maximum total fee per gas the sender is willing to pay for blob gas in wei`

##### accessList
`Array`
###### title - `accessList`
###### description - `EIP-2930 access list`

##### blobVersionedHashes
`Array`
###### title - `blobVersionedHashes`
###### description - `List of versioned blob hashes associated with the transaction's EIP-4844 data blobs.`

### chainId
#### title - `chainId`
#### type - `string`
###### description - `Chain ID that this transaction is valid on.`

### yParity
#### title - `yParity`
#### type - `string`
###### description - `The parity (0 for even, 1 for odd) of the y-value of the secp256k1 signature.`

### r
#### title - `r`
#### type - `string`

### s
#### title - `s`
#### type - `string`

`Object`
`properties`
#### title - `Signed 1559 Transaction`

### type
#### title - `type`
#### type - `string`

#### nounce
##### title - `nounce`
##### type - `string`

### to
###### title - `to address`
###### type - `string`

### gas
#### title - `gas limit`
#### type - `string`

### value
#### title - `value`
#### type - `string`

### input
#### title - `input data`
#### type - `string`

##### maxPriorityFeePerGas
###### title - `max priority fee per gas`
###### type - `string`
###### description - `Maximum fee gas the sender is willing to pay to miner in wei`

##### maxFeePerGas
###### title - `max fee per gas`
###### type - `string`
###### description - `Maximum total fee gas the sender is willing to pay (includes the network / base fee and miner /priority fee) in wei`

##### accessList
`Array`
###### title - `accessList`
###### description - `EIP-2930 access list`

### chainId
#### title - `chainId`
#### type - `string`
###### description - `Chain ID that this transaction is valid on.`

### yParity
#### title - `yParity`
#### type - `string`
###### description - `The parity (0 for even, 1 for odd) of the y-value of the secp256k1 signature.`

### v
#### title - `v`
#### type - `string`

### r
#### title - `r`
#### type - `string`

### s
#### title - `s`
#### type - `string`

`Object`

`properties`
#### title - `Signed 2930 Transaction`

### type
#### title - `type`
#### type - `string`

#### nounce
##### title - `nounce`
##### type - `string`

### to
###### title - `to address`
###### type - `string`

### gas
#### title - `gas limit`
#### type - `string`

### value
#### title - `value`
#### type - `string`

### input
#### title - `input data`
#### type - `string`

##### gasPrice
###### title - `gas price`
###### type - `string`
###### description - `The gas price willing to be paid by the sender in wei`

##### accessList
`Array`
###### title - `accessList`
###### description - `EIP-2930 access list`

### chainId
#### title - `chainId`
#### type - `string`
###### description - `Chain ID that this transaction is valid on.`

### yParity
#### title - `yParity`
#### type - `string`
###### description - `The parity (0 for even, 1 for odd) of the y-value of the secp256k1 signature.`

### v
#### title - `v`
#### type - `string`

### r
#### title - `r`
#### type - `string`

### s
#### title - `s`
#### type - `string`

`Object`

`properties`
#### title - `Signed Legacy Transaction`

### type
#### title - `type`
#### type - `string`

#### nounce
##### title - `nounce`
##### type - `string`

### to
###### title - `to address`
###### type - `string`

### gas
#### title - `gas limit`
#### type - `string`

### value
#### title - `value`
#### type - `string`

### input
#### title - `input data`
#### type - `string`

##### gasPrice
###### title - `gas price`
###### type - `string`
###### description - `The gas price willing to be paid by the sender in wei`

### chainId
#### title - `chainId`
#### type - `string`
###### description - `Chain ID that this transaction is valid on.`

### v
#### title - `v`
#### type - `string`

### r
#### title - `r`
#### type - `string`

### s
#### title - `s`
#### type - `string`
