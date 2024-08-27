---
sidebar_position: 24
---

# engine_newPayloadV4

Obtains execution payload from payload build process

## Parameter Names
### Name - executionPayload
##### `schema`

`Object`
#### title - Execution payload object V4
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
##### type : `string`
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

#### blobGasUsed
##### title - `Blob gas used`
##### type - `string`

#### excessBlobGas
##### title - `Excess blob gas`
##### type - `string`

#### `depositRequests`
#### `Array`
##### title : `Deposit requests`
##### `Object`
##### title : `Deposit request object V1`
#### `properties`

#### pubkey
##### title : `Public key`
##### type : `string`

#### withdrawalCredentials
##### title : `Withdrawal credentials`
##### type : `string`

#### amount
##### title : `Deposit amount`
##### type : `string`

#### signature
##### title : `Deposit signature`
##### type : `string`

#### index
##### title : `Deposit index`
##### type : `string`

### withdrawalRequests
#### `Array`
##### title : `Withdrawals requests`
#### `Object`
##### title : `Withdrawal request object V1`
#### `properties`
#### sourceAddress
##### title : `Source address`
##### type : `string`

#### validatorPubkey
##### title : `Validator public key`
##### type : `string`

#### amount
##### title : `Withdraw amount`
##### type : `string`

### consolidationRequests
#### `Array`
##### title : `Consolidation requests-array-'nul'`
#### `Object`
##### title : `Consolidation request object V1`
#### `properties`

#### sourceAddress
##### title : `Source address`
##### type : `string`

#### sourcePubkey
##### title : `Source validator public key`
##### type : `string`

#### targetPubkey
##### title : `Target validator public key`
##### type : `string`

### Expected blob versioned hashes`
#### `schema`

#### `Array`
##### title - `32 byte hex value`
##### type - `string`

#### Root of the parent beacon block
##### `schema`
##### title - `32 byte hex value`
##### type - `string`

## Example Request

```bash
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "engine_newPayloadV4",
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
      ],
      "blobGasUsed": "0x0",
      "excessBlobGas": "0x0",
      "depositRequests": [
        {
          "pubkey": "0x96a96086cff07df17668f35f7418ef8798079167e3f4f9b72ecde17b28226137cf454ab1dd20ef5d924786ab3483c2f9",
          "withdrawalCredentials": "0x003f5102dabe0a27b1746098d1dc17a5d3fbd478759fea9287e4e419b3c3cef2",
          "amount": "0x1",
          "signature": "0xb1acdb2c4d3df3f1b8d3bfd33421660df358d84d78d16c4603551935f4b67643373e7eb63dcb16ec359be0ec41fee33b03a16e80745f2374ff1d3c352508ac5d857c6476d3c3bcf7e6ca37427c9209f17be3af5264c0e2132b3dd1156c28b4e9",
          "index": "0xf0"
        },
        {
          "pubkey": "0xa5c85a60ba2905c215f6a12872e62b1ee037051364244043a5f639aa81b04a204c55e7cc851f29c7c183be253ea1510b",
          "withdrawalCredentials": "0x001db70c485b6264692f26b8aeaab5b0c384180df8e2184a21a808a3ec8e86ca",
          "amount": "0x1",
          "signature": "0x9561731785b48cf1886412234531e4940064584463e96ac63a1a154320227e333fb51addc4a89b7e0d3f862d7c1fd4ea03bd8eb3d8806f1e7daf591cbbbb92b0beb74d13c01617f22c5026b4f9f9f294a8a7c32db895de3b01bee0132c9209e1",
          "index": "0xf1"
        }
      ],
      "withdrawalRequests": [
        {
          "sourceAddress": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
          "validatorPubkey": "0x85103a5617937691dfeeb89b86a80d5dc9e3c9d3a1a0e7ce311e26e0bb732eabaa47ffa288f0d54de28209a62a7d29d0",
          "amount": "0x0"
        },
        {
          "sourceAddress": "0x00000000000000000000000000000000000010f6",
          "validatorPubkey": "0x98daeed734da114470da559bd4b4c7259e1f7952555241dcbc90cf194a2ef676fc6005f3672fada2a3645edb297a7553",
          "amount": "0x1"
        }
      ],
      "consolidationRequests": [
        {
          "sourceAddress": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
          "sourcePubkey": "0x85103a5617937691dfeeb89b86a80d5dc9e3c9d3a1a0e7ce311e26e0bb732eabaa47ffa288f0d54de28209a62a7d29d0",
          "targetPubkey": "0x98daeed734da114470da559bd4b4c7259e1f7952555241dcbc90cf194a2ef676fc6005f3672fada2a3645edb297a7553"
        },
        {
          "sourceAddress": "0x00000000000000000000000000000000000010f6",
          "sourcePubkey": "0x96a96086cff07df17668f35f7418ef8798079167e3f4f9b72ecde17b28226137cf454ab1dd20ef5d924786ab3483c2f9",
          "targetPubkey": "0xa5c85a60ba2905c215f6a12872e62b1ee037051364244043a5f639aa81b04a204c55e7cc851f29c7c183be253ea1510b"
        }
      ]
    },
    [
      "0x000657f37554c781402a22917dee2f75def7ab966d7b770905398eba3c444014"
    ],
    "0x169630f535b4a41330164c6e5c92b1224c0c407f582d407d0ac3d206cd32fd52"
  ]
}

```

## Result
### Name - Payload status 
### `schema`
`Object`
#### title - `Payload status object deprecating INVALID_BLOCK_HASH status`
`propeties`
#### status 
##### title - `Payload validation status`
##### type - `string`

##### enum
- VALID
- INVALID
- SYNCING
- ACCEPTED

#### latestValidHash 
##### title - `The hash of the most recent valid block`
##### type - `string`

#### validationError 
##### title - `Validation error message`
##### type - `string`

## Errors

### Code - `-32602`  
### Message - `Invalid params`
### Code - `-38005`  
### Message - `Unsupported fork`

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
