---
sidebar_position: 61
---

# eth_signTransaction

Returns an RLP encoded transaction signed by the specified account

## Params

### Name - Transaction

#### schema 
`Object` 
##### title - `Transaction object generic to all types`

`properties`

### type
#### title - `type`
#### type - `string`

#### nounce
##### title - `nounce`
##### type - `string`

##### to
`One of`
###### title - `Contract Creation(null)`
###### type - `null`
###### title - `Address`
###### type - `string`

### from
#### title - `from address`
#### type - `string`

### gas
#### title - `gas limit`
#### type - `string`

### value
#### title - `value`
#### type - `string`

### input
#### title - `input data`
#### type - `string`

### gasPrice
#### title - `gas price`
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

#### blobs
`Array`
##### title - `blobs`
##### title - `Raw blob data`
##### type - `hex encoded bytes`

### chainId
#### title - `chainId`
#### type - `string`
###### description - `Chain ID that this transaction is valid on.`

## Result

### Name - Encooded transaction

#### title - `hex encoded bytes`
##### type - `string`