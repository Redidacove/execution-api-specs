---
sidebar_position: 33
---

# eth_feeHistory

Returns transaction base fee per gas and effective priority fee gas for the requested/suggested block range. 

## Params
### Name - blockCount

Requested range of blocks. Clients will return less than the requested range if not all blocks are available.

#### `schema`
#### title - hex encoded unsigned integer`
###### type - `string`

### Name - newestBlock

Highest block of the requested range.

#### `schema`
`One Of`

#### title - `Block number`
##### type - `string`

#### title - `Block tag`
###### type - `string`
###### description - `description

`earliest`: The lowest numbered block the client has available; `finalized`: The most recent crypto-economically secure block, cannot be re-orged outside of manual intervention driven by community coordination; `safe`: The most recent block that is safe from re-orgs under honest majority and certain synchronicity assumptions; `latest`: The most recent block in the canonical chain observed by the client, this block may be re-orged out of the canonical chain even under healthy/normal conditions; `pending`: A sample next block built by the client on top of `latest` and containing the set of transactions usually taken from local mempool. Before the merge transition is finalized, any call querying for `finalized` or `safe` block MUST be responded to with `-39001: Unknown block` error`

#### enum
- earliest
- finalized
- safe
- latest
- pending

## Result

### Name - feeHistoryResult

Fee history for the returned block range. This can be a subsection of the requested range if not all blocks are available.

#### `schema`
`Object`
#### title - `feeHistoryResults`
###### description - `Fee history results`
`properties`

#### oldestBlock
##### title - `oldestBlock`
###### type - `string`
###### description - `Lowest number block of returned range.`

#### baseFeePerGas
`Array`
#### title - `baseFeePerGasArray`
###### type - `string`
###### description - `An array of block base fees per gas. This includes the next block after the newest of the returned range, because this value can be derived from the newest block. Zeroes are returned for pre-EIP-1559 blocks.`

#### baseFeePerBlobGas
`Array`
#### title - `baseFeePerBlobGasArray`
###### type - `string`
###### description - `An array of block base fees per blob gas. This includes the next block after the newest of the returned range, because this value can be derived from the newest block. Zeroes are returned for pre-EIP-4844 blocks.`

#### gasUsedRatio
`Array`
##### title - `gasUsedRatio`
###### type - `string`
###### description - `An array of block gas used ratios. These are calculated as the ratio of gasUsed and gasLimit.`

#### title - `normalized ratio`
###### type - `number`

#### blobGasUsedRatio
`Array`
##### title - `blobGasUsedRatio`
###### type - `string`
###### description - `An array of block blob gas used ratios. These are calculated as the ratio of blobGasUsed and the max blob gas per block.`

##### title - `normalized ratio`
###### type - `number`

#### reward
`Array`
##### title - `rewardArray`
###### type - `string`
###### description - `A two-dimensional array of effective priority fees per gas at the requested block percentiles.`
`Array`
##### title - `rewardPercentile`
###### description - `An array of effective priority fee per gas data points from a single block. All zeroes are returned if the block is empty.`

##### title - `rewardPercentile`
###### type - `string`
###### description - `A given percentile sample of effective priority fees per gas from a single block in ascending order, weighted by gas used. Zeroes are returned if the block is empty.`
