---
sidebar_position: 12
---

# engine_forkchoiceUpdatedV3

Updates the forkchoice state 

## Parameter Name    
- Forkchoice state 

### Schema

#### `Object`

##### title : `Forkchoice state object V3`

#### `properties`

#### `headBlockHash`

##### title : `Head block hash`
##### type : `string`

#### `safeBlockHash`

##### title : `Safe block hash`
##### type : `string`

#### `finalizedBlockHash`

##### title : `Finalized block hash`
##### type : `string`

- Payload attributes

### Schema

#### `Object`

##### title : `Payload attributes object V2`

#### `properties`

#### `timestamp`

##### title : `Timestamp`
##### type : `string`

#### `prevRandao`

##### title : `Previous randao value`
##### type : `string`

#### `suggestedFeeRecipent`

##### title : `Suggested fee recipent`
##### type : `string`

#### `withdrawals`
`Array`
Withdrawals
`Object`
##### title : `Withdwaral object V1`
`properties`

#### `index`

##### title : `Withdrawal index`
##### type : `string`

#### `address`

##### title : `Withdrawal address`
##### type : `string`

#### `amount`

##### title : `Withdrawal amount`
##### type : `string`

## Example Request

```bash
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "engine_forkchoiceUpdatedV3",
  "params": [
    {
      "headBlockHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858",
      "safeBlockHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858",
      "finalizedBlockHash": "0x3b8fb240d288781d4aac94d3fd16809ee413bc99294a085798a589dae51ddd4a"
    },
    {
      "timestamp": "0x64e7785b",
      "prevRandao": "0xc130d5e63c61c935f6089e61140ca9136172677cf6aa5800dcc1cf0a02152a14",
      "suggestedFeeRecipient": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
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
      "parentBeaconBlockRoot": "0x11f780a954bcba8889998e4e61deaae6388dd2391e9c810bd9c94962cc1eadc1"
    }
  ]
}

```

## Result

Name - Response Object
`Object`
title - Forkchoice updated response

`properties`

#### `payloadStatus`
`Object`
##### title : `Payload status`
`properties`

#### `status`

##### title : `Payload validation status`
##### type : `string`
##### description : `Set of possible values is restricted to VALID, INVALID, SYNCING`

## Enum

- VALID

- INVALID

- SYNCING

#### `latestValidHash`

##### title : `The hash of the most recent valid block`
##### type : `string`

#### `validationError`

##### title : `Validation error message`
##### type : `string`

#### `payloadId`

##### title : `Payload id`
##### type : `string`

## Errors

### Code - `38002`  
### Message - `Invalid forkchoice state`
### Code - `38003`  
### Message - `Invalid payload attributes`

```bash

{
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "payloadStatus": {
      "status": "VALID",
      "latestValidHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858",
      "validationError": null
    },
    "payloadId": "0x0000000021f32cc1"
  }
}

```
