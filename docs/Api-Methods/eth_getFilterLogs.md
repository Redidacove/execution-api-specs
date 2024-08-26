---
sidebar_position: 43
---

# eth_getFilterLogs

Returns an array of all logs matching filter with given id.

## Params

### Name - Filter Identifier 
#### `schema`
#### title - `hex encoded unsignned integer`
###### type - `string`

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