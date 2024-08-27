---
sidebar_position: 16
---

# engine_getPayloadBodiesByRangeV2

Given a range of block numbers returns bodies of the corresponding execution payloads

## Parameter Names
### Starting block number 

#### `Schema`

##### title : `hex encoded 64 bit unsigned integer`

##### type : `string`

###  Number of  block number to return

### `Schema`

##### title : `hex encoded 64 bit unsigned integer`

##### type : `string`

## Example Request

```bash
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "engine_getPayloadBodiesByRangeV2",
  "params": [
    "0x20",
    "0x2"
  ]
}

```

## Result
`Schema`

### Name - Execution payload bodies
### `Array`
`Object`
#### title - Execution payload bodies object V2
`properties`

#### `transactions`
`Array`
##### title : `Transactions`
##### title : `hex encoded bytes`
##### type : `string`

#### `withdrawals`

### `Array`
##### title : `Withdrawals`
### `Object`

##### title : `Withdrawal object V1`
### `properties`
#### index
##### title : `Withdrawal index`
##### type : `string`
#### validatorIndex
##### title : `Validator index`
##### type : `string`
#### address
##### title : `Withdrawal address`
##### type : `string`
#### amount
##### title : `Withdrawal amount`
##### type : `string`

#### `depositRequests`
### `Array`
##### title : `Deposit requests`
### `Object`
##### title : `Deposit request object V1`
### `properties`

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

#### `withdrawalRequests`
### `Array`
##### title : `Withdrawals requests`
### `Object`
##### title : `Withdrawal request object V1`
### `properties`
#### sourceAddress
##### title : `Source address`
##### type : `string`

#### validatorPubkey
##### title : `Validator public key`
##### type : `string`

#### amount
##### title : `Withdraw amount`
##### type : `string`

#### `consolidationRequests`
### `Array`
##### title : `Consolidation requests-array-'nul'`
### `Object`
##### title : `Consolidation request object V1`
### `properties`

#### sourceAddress
##### title : `Source address`
##### type : `string`

#### sourcePubkey
##### title : `Source validator public key`
##### type : `string`

#### targetPubkey
##### title : `Target validator public key`
##### type : `string`

## Errors

### Code - `-38004`  
### Message - `Too large request`

```bash

{
  "id": 1,
  "jsonrpc": "2.0",
  "result": [
    {
      "transactions": [
        "0xf865808506fc23ac00830124f8940101010101010101010101010101010101010101018031a02c4d88bfdc2f6dbf82c33d235c4e785e9fc23b2d0fc7b9d20fc5e9674f1f9d15a016d6d69b925cf26128683ab4a096e196fbb1142d6c6d4e8d3481b9bef1bd0f65",
        "0x02f86c0701843b9aca008506fc23ac00830124f89402020202020202020202020202020202020202020180c080a039409b4e5603dd8c3cf38232348661a8e99ac518396eeaa128ec9ec2a3eb8127a06b21ab956f5f138cb44fda1a9055bd08980ea4f8040d877c00dac025608d0d95"
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
      "depositRequests": [
        {
          "pubkey": "0x96a96086cff07df17668f35f7418ef8798079167e3f4f9b72ecde17b28226137cf454ab1dd20ef5d924786ab3483c2f9",
          "withdrawalCredentials": "0x003f5102dabe0a27b1746098d1dc17a5d3fbd478759fea9287e4e419b3c3cef2",
          "amount": "0x1",
          "signature": "0xb1acdb2c4d3df3f1b8d3bfd33421660df358d84d78d16c4603551935f4b67643373e7eb63dcb16ec359be0ec41fee33b03a16e80745f2374ff1d3c352508ac5d857c6476d3c3bcf7e6ca37427c9209f17be3af5264c0e2132b3dd1156c28b4e9",
          "index": "0xf0"
        }
      ],
      "withdrawalRequests": [
        {
          "sourceAddress": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
          "validatorPubkey": "0x85103a5617937691dfeeb89b86a80d5dc9e3c9d3a1a0e7ce311e26e0bb732eabaa47ffa288f0d54de28209a62a7d29d0",
          "amount": "0x0"
        }
      ],
      "consolidationRequests": [
        {
          "sourceAddress": "0x00000000000000000000000000000000000010f6",
          "sourcePubkey": "0x96a96086cff07df17668f35f7418ef8798079167e3f4f9b72ecde17b28226137cf454ab1dd20ef5d924786ab3483c2f9",
          "targetPubkey": "0xa5c85a60ba2905c215f6a12872e62b1ee037051364244043a5f639aa81b04a204c55e7cc851f29c7c183be253ea1510b"
        }
      ]
    },
    {
      "transactions": [
        "0xf865108506fc23ac00830124f8940101010101010101010101010101010101010101018031a0d9712a3c40ae85aea4ad1bd95a0b7cc7bd805189a9e2517403b11a00a1530f81a053b53b0267a6dcfe9f9a1652307b396b3e8a65e65707a450e60c92baefdbcfbe",
        "0x02f86c0711843b9aca008506fc23ac00830124f89402020202020202020202020202020202020202020180c080a071d36bc93c7ae8cc5c01501e51e5e97a51aa541d1a89c809a2af7eb40e9bc2cba071644230e21c075c1da08916aff5efe9f95a6f6a4f94dc217f6c1bb4a3240b29"
      ],
      "withdrawals": [
        {
          "index": "0xf2",
          "validatorIndex": "0xf2",
          "address": "0x00000000000000000000000000000000000010f2",
          "amount": "0x1"
        },
        {
          "index": "0xf3",
          "validatorIndex": "0xf3",
          "address": "0x00000000000000000000000000000000000010f3",
          "amount": "0x1"
        }
      ],
      "depositRequests": [
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
        }
      ]
    }
  ]
}

```
