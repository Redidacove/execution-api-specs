---
sidebar_position: 45
---

# eth_getProof

Returns the merkle proof for a given account and optionally some storage keys .

## Params

### Name - Address  

#### title - `hex encoded address`
###### type - `string`

### Name - StorageKeys
`Array`

#### title - `Storage keys`
#### title - `32 byte hex value`
#### type - `string`

### Name - Block

### Schema

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

## Result 

### Name - Account

#### schema
`Object`
#### title - `Account proof`
`properties`

### address
#### title - `address`
#### type - `string`

### accountProof
`Array`
#### title - `accountProof`
#### title - `hex encoded bytes`
#### type - `string`

### balance
#### title - `balance`
#### type - `string`

### codeHash
#### title - `codeHash`
#### type - `string`

### nounce
#### title - `nounce`
#### type - `string`

### storageHash
#### title - `storageHash`
#### type - `string`

### storageProof
`Array`
#### title - `Storage proofs`
`Object`
#### title - `Storage proof`
`properties`

### key
#### title - `key`
#### type - `string`

### value
#### title - `value`
#### type - `string`

### proof
`Array`
#### title - `proof`
#### title - `hex encoded bytes`
#### type - `string`
