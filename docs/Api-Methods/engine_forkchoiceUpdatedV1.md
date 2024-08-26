---
sidebar_position: 10
---

# engine_forkchoiceUpdatedV1

Updates the forkchoice state 

## Parameter Name
- Forkchoice state

### Schema

#### `Object`

##### title : `Forkchoice state object`

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

##### title : `Payload attributes object V1`

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

## Example Request

```bash
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "engine_forkchoiceUpdatedV1",
  "params": [
    {
      "headBlockHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858",
      "safeBlockHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858",
      "finalizedBlockHash": "0x3b8fb240d288781d4aac94d3fd16809ee413bc99294a085798a589dae51ddd4a"
    },
    {
      "timestamp": "0x5",
      "prevRandao": "0x0000000000000000000000000000000000000000000000000000000000000000",
      "suggestedFeeRecipient": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b"
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

##### title : `Payload validation status`
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
