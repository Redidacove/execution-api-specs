---
sidebar_position: 49
---

# eth_getTransactionByHash

Returns information about a transaction requested by transaction hash. 

## Params

### Name - Transaction hash  

`schema`
#### title - `32 byte hex value`
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
