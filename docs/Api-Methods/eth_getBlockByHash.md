---
sidebar_position: 36
---

# eth_getBlockByHash

Returns information about a block by hash.
## Params

### Name - Block hash

#### title - `32 byte hex value`
###### type - `string`

### Name - Hydrated transaction

#### `schema`

#### title - `hydrated`
###### type - `boolean`

## Result

### Name - Block information

### `schema`
`One  Of`
#### title - `Not Found(null)`
###### type - `null`
`Object`
#### title - `Block object`
`properties`

#### hash
##### title - `Hash`
##### type - `string`

#### parentHash
##### title - `Parent hash`
##### type - `string`

#### sha3Uncles
##### title - `Ommers hash`
##### type - `string`

#### miner
##### title - `Coinbase`
##### type - `string`

#### stateRoot
##### title - `State root`
##### type - `string`

#### transactionsRoot
##### title - `Transactions root`
##### type - `string`

#### receiptsRoot
##### title - `Receipts root`
##### type - `string`

#### logsBloom
##### title - `Bloom filter`
##### type - `string`

#### difficulty
##### title - `Difficulty`
##### type - `string`

#### number
##### title - `Number`
##### type - `string`

#### gasLimit
##### title - `Gas limit`
##### type - `string`

#### gasUsed
##### title - `Gas used`
##### type - `string`

#### timestamp
##### title - `Timestamp`
##### type - `string`

#### extraData
##### title : `Extra data`
##### type : `string`

#### mixHash
##### title : `Mix hash`
##### type : `string`

#### nounce
##### title - `Nounce`
##### type - `string`

#### totalDifficulty
##### title - `Total difficulty`
##### type - `string`

#### baseFeePerGas
##### title : `Base fee per gas`
##### type : `string`

#### withdrawalRoot
##### title - `Withdrawal root`
##### type - `string`

#### blobGasUsed
##### title - `Blob gas used`
##### type - `string`

#### excessBlobGas
##### title - `Excess blob gas`
##### type - `string`

#### parentBeaconBlockRoot
##### title - `Parent Beacon Block Root`
##### type - `string`

#### size
##### title - `Block size`
##### type - `string`

#### transactions
`Array`
##### title : `Transactions`
##### title : `hex encoded bytes`
##### type : `string`

#### withdrawals
`Array`
##### title : `Withdrawals`
`Object`
##### title : `Validator withdrawal`
##### type : `string`
`properties`

#### index
##### title : `Withdrawal index`
##### type : `string`
#### validatorindex
##### title : `Validator index`
##### type : `string`
#### address
##### title : `Withdrawal address`
##### type : `string`
#### amount
##### title : `Withdrawal amount`
##### type : `string`

### uncles 
`Array`
##### title - `32 byte hex value`
##### type - `string`

