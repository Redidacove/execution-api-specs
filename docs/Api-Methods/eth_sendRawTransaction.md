---
sidebar_position: 58
---

# eth_sendRawTransaction

Submits a raw transaction. For EIP-4844 transactions, the raw form must be the network form.This  means it includes the blobs, KZG commitments, and KZG proofs.

## Params

### Name - Transaction

##### title - `hex encoded bytes`
##### type - `string`

## Result
### Name - Transaction hash

#### schema 

##### title - `32 byte hex value`
##### type - `string`