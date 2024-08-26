---
sidebar_position: 21
---

# engine_newPayloadV1

Runs execution payload validation

## Parameter Names
Name - Execution payload 
`Schema`
`Object`
- title - Execution payload object V1
`properties`

#### parentHash
##### title : `Parent block hash`
##### type : `string`

#### feeRecipient
##### title : `Recipient of transaction priority fees`
##### type : `string`
#### stateRoot
##### title : `State root`
##### type : `string`

#### receiptsRoot
##### title : `Receipts root`
##### type : `string`

#### logsBloom
##### title : `Bloom filter`
##### type : `string
`
#### prevRandao
##### title : `Previous Randao value`
##### type : `string`

#### blockNumber
##### title : `Block number`
##### type : `string`

#### gasLimit
##### title : `Gas Limit`
##### type : `string`

#### gasUsed
##### title : `Gas used`
##### type : `string`

#### timestamp
##### title : `Timestamp`
##### type : `string`

#### extraData
##### title : `Extra data`
##### type : `string`

#### baseFeePerGas
##### title : `Base fee per gas`
##### type : `string`

#### blockHash
##### title : `Block hash`
##### type : `string`

#### transactions
`Array`
##### title : `Transactions`
##### title : `hex encoded bytes`
##### type : `string`

## Example Request

```bash
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "engine_newPayloadV1",
  "params": [
    {
      "parentHash": "0x3b8fb240d288781d4aac94d3fd16809ee413bc99294a085798a589dae51ddd4a",
      "feeRecipient": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
      "stateRoot": "0xca3149fa9e37db08d1cd49c9061db1002ef1cd58db2210f2115c8c989b2bdf45",
      "receiptsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
      "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      "prevRandao": "0x0000000000000000000000000000000000000000000000000000000000000000",
      "blockNumber": "0x1",
      "gasLimit": "0x1c9c380",
      "gasUsed": "0x0",
      "timestamp": "0x5",
      "extraData": "0x",
      "baseFeePerGas": "0x7",
      "blockHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858",
      "transactions": []
    }
  ]
}

```

## Result
Name - Payload status 
### `schema`
`Object`
- title - Payload status object V1
`propeties`
#### status 
##### title - `Payload validation status`
##### type - `string`

##### enum
- VALID
- INVALID
- SYNCING
- ACCEPTED
- INVALID_BLOCK_HASH

#### latestValidHash 
##### title - `The hash of the most recent valid block`
##### type - `string`

#### validationError 
##### title - `Validation error message`
##### type - `string`

```bash

{
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "status": "VALID",
    "latestValidHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858",
    "validationError": null
  }
}

```
