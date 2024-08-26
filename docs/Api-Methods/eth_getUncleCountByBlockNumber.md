---
sidebar_position: 53
---

# eth_getUncleCountByBlockNumber

Returns the number of uncles in a block from a block matching the given block Number

## Parameter Names

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

## Result

### Name - Uncle count

#### schema 
`One Of`
##### title - `Not Found`
##### type - `null`

##### title - `Uncle count`
##### type - `string`

