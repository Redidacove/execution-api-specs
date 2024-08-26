---
sidebar_position: 51
---

# eth_getTransactionReceipt

Returns the reciept of transaction by transaction hash.

## Params

### Name - Transaction hash  

`schema`
#### title - `32 byte hex value`
#### type - `string`

## Result 

### Name - Receipt information
#### schema
`One Of`

#### title - `Not Found(null)`
#### type - `null`
`Object`

##### title - `Receipt information`
##### type - `string`
`properties`

#### type
##### title - `type`
##### type - `string`

#### transactionHash
##### title - `transaction hash`
##### type - `string`

#### transactionIndex
##### title - `transaction index`
##### type - `string`

#### blockHash
##### title - `block hash`
##### type - `string`

#### blockNumber
##### title : `Block number`
##### type : `string`

##### from
###### title - `from address`
###### type - `string`

##### to
`One of`
###### title - `Contract Creation(null)`
###### type - `null`
###### title - `Address`
###### type - `string`

#### cumulativeGasUsed 
##### title - `cumulative gas used`
##### type - `string`
##### description - `The sum of gas used by this transaction and all preceding transactions in the same block.`

#### gasUsed 
##### title - `gas used`
##### type - `string`
##### description - `The amount of gas used for this specific transaction alone`

#### blobGasUsed 
##### title - `blob gas used`
##### type - `string`
##### description - `The amount of blob gas used for this specific transaction. Only specified for blob transactions as defined by EIP-4844.`

#### contractAddress
`One Of`
##### title - `hex encoded address`
##### type - `string`

##### title - `Null`
##### type - `null`

#### logs
`Array`
##### title - `logs`
`Object`
##### title - `log`
`properties`

#### removed
##### title - `removed`
##### type - `boolean`

#### logIndex
##### title - `log index`
##### type - `string`

#### transactionIndex
##### title - `transaction index`
##### type - `string`

#### transactionHash
##### title - `transaction hash`
##### type - `string`

#### blockHash
##### title - `block hash`
##### type - `string`

#### blockNumber
##### title - `block number`
##### type - `string`

#### address
##### title - `address`
##### type - `string`

#### data
##### title - `data`
##### type - `string`

#### topics
`Array`
##### title - `topics`
##### title - `32 hex encoded bytes`
##### type - `string`

#### logsBloom
##### title - `Bloom filter`
##### type - `string`

#### root
##### title - `state root`
##### type - `string`
##### description - `The post-transaction state root. Only specified for transactions included before the Byzantium upgrade.`

#### status
##### title - `status`
##### type - `string`
##### description - `Either 1 (success) or 0 (failure). Only specified for transactions included after the Byzantium upgrade.`

#### effectiveGasPrice
##### title - `effective gas price`
##### type - `string`
##### description - `The actual value per gas deducted from the sender's account. Before EIP-1559, this is equal to the transaction's gas price. After, it is equal to baseFeePerGas + min(maxFeePerGas - baseFeePerGas, maxPriorityFeePerGas).`

#### blobGasPrice
##### title - `blob gas price`
##### type - `string`
##### description - `The actual value per gas deducted from the sender's account for blob gas. Only specified for blob transactions as defined by EIP-4844.`
