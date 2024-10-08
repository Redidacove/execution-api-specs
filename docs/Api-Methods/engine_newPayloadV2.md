---
sidebar_position: 22
---

# engine_newPayloadV2

Obtains execution payload from payload build process

## Parameter Names

#### `executionPayload`
##### One Of
`Object`
#### title - Execution payload object V1
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

`Object`
#### title - Execution payload object V2
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

#### withdrawals
`Array`
##### title : `Withdrawals`
`Object`
##### title : `Withdrawal object V1`
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

#### blockValue
##### title - `Expected fee value`
##### type - `string`

## Example Request

```bash
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "engine_newPayloadV2",
  "params": [
    {
      "parentHash": "0x3b8fb240d288781d4aac94d3fd16809ee413bc99294a085798a589dae51ddd4a",
      "feeRecipient": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
      "stateRoot": "0xca3149fa9e37db08d1cd49c9061db1002ef1cd58db2210f2115c8c989b2bdf45",
      "receiptsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
      "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      "prevRandao": "0xc130d5e63c61c935f6089e61140ca9136172677cf6aa5800dcc1cf0a02152a14",
      "blockNumber": "0x112720f",
      "gasLimit": "0x1c9c380",
      "gasUsed": "0xbad2e8",
      "timestamp": "0x64e7785b",
      "extraData": "0x",
      "baseFeePerGas": "0x7",
      "blockHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858",
      "transactions": [
        "0x03f88f0780843b9aca008506fc23ac00830186a09400000000000000000000000000000000000001008080c001e1a0010657f37554c781402a22917dee2f75def7ab966d7b770905398eba3c44401401a0840650aa8f74d2b07f40067dc33b715078d73422f01da17abdbd11e02bbdfda9a04b2260f6022bf53eadb337b3e59514936f7317d872defb891a708ee279bdca90",
        "0x03f88f0701843b9aca008506fc23ac00830186a09400000000000000000000000000000000000001008080c001e1a001521d528ad0c760354a4f0496776cf14a92fe1fb5d50e959dcea1a489c7c83101a0a86c1fd8c2e74820686937f5c1bfe836e2fb622ac9fcbebdc4ab4357f2dbbc61a05c3b2b44ff8252f78d70aeb33f8ba09beaeadad1b376a57d34fa720bbc4a18ee",
        "0x03f88f0702843b9aca008506fc23ac00830186a09400000000000000000000000000000000000001008080c001e1a001453362c360fdd8832e3539d463e6d64b2ee320ac6a08885df6083644a063e701a037a728aec08aefffa702a2ca620db89caf3e46ab7f25f7646fc951510991badca065d846f046357af39bb739b161233fce73ddfe0bb87f2d28ef60dfe6dbb0128d"
      ],
      "withdrawals": [
        {
          "index": "0xf0",
          "validatorIndex": "0xf0",
          "address": "0x00000000000000000000000000000000000010f0",
          "amount": "0x1"
        },
        {
          "index": "0xf1",
          "validatorIndex": "0xf1",
          "address": "0x00000000000000000000000000000000000010f1",
          "amount": "0x1"
        }
      ]
    }
  ]
}

```

## Result
### Name - Payload status 
### `schema`
`Object`
#### title - Payload status object V1
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

## Errors

### Code - `-32602`  
### Message - `Invalid params`

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
