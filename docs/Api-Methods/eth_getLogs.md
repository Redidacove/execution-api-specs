---
sidebar_position: 44
---

# eth_getLogs

Returns an array of all logs matching filter with given id.

## Params

### Name - Filter  
#### `schema`
#### title - `filter`
`properties`

### fromBlock
#### title - `from block`
###### type - `string`

### toBlock
#### title - `to block`
###### type - `string`

### address
`One Of`

#### title - `Any Address`
###### type - `null`

#### title - `Address`
###### type - `string`

`Array`
#### title - `Addresses`
###### type - `hex encoded address`

### topics
`One Of`

#### title - `Any Topic Match`
###### type - `null`

`Array`
#### title - `Specified Filter Topics`
`One Of`

#### title - `Single Topic Match`
###### type - `string`
`Array`
#### title - `Multiple Topic Match`
###### type - `32 hex encoded bytes`

## Result 

### Name - Log objects 
#### `schema`
##### `One Of`
`Array`
#### title - `new block or transaction hashes`
###### title - `32 byte hex value`
###### type - `string`

`Array`
#### title - `new logs`
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