---
sidebar_position: 13
---

# engine_getPayloadBodiesByHashesV1

Given block hashes returns bodies of the corresponding execution payloads

## Parameter Name
- Array of block hashes 

### `Array`

#### title : `32 byte hex value`

#### type : `string`

## Example Request

```bash
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "engine_getPayloadBodiesByHashV1",
  "params": [
    [
      "0xd5f1812548be429cbdc6376b29611fc49e06f1359758c4ceaaa3b393e2239f9c",
      "0xfe88c94d860f01a17f961bf4bdfb6e0c6cd10d3fda5cc861e805ca1240c58553"
    ]
  ]
}

```

## Result
`Schema`

Name - Execution payload bodies
### `Array`
`Object`
- title - Execution payload bodies object V1
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
      ]
    }
  ]
}

```
