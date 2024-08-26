---
sidebar_position: 56
---

# eth_newFilter

Creates a filter object based on filter options, to notify when the state changes(logs).

## Params

### Name - Filter 

#### schema 
`Object`
##### title - `filter`
`properties`

#### fromBlock
##### title - `from block`
##### type - `string`

#### toBlock
##### title - `to block`
##### type - `string`

#### address
##### title - `address`
##### type - `string`

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
### Name - Filter Identifier

#### schema 

##### title - `hex encoded unsigned integer`
##### type - `string`