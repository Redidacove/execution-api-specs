---
sidebar_position: 9
---

# engine_exchangeTransitionConfigurationV1

Exchanges transition configuration

## Parameter Name
- Consensus client configuration

### Schema

#### `Object`

##### title : `Transition configuration object`

#### `properties`

#### `terminalTotalDifficulty`

##### title : `Terminal total difficulty`
##### type : `string`

#### `terminalBlockHash`

##### title : `Terminal block hash`
##### type : `string`

#### `terminalBlockNumber`

##### title : `Terminal block number`
##### type : `string`

## Example Request

```bash
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "engine_exchangeTransitionConfigurationV1",
  "params": [
    {
      "terminalTotalDifficulty": 0,
      "terminalBlockHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
      "terminalBlockNumber": "0x1"
    }
  ]
}

```

## Result

Name - Execution client configuration
`Object`
title - Transition configuration object

`properties`

#### `terminalTotalDifficulty`

##### title : `Terminal total difficulty`
##### type : `string`

#### `terminalBlockHash`

##### title : `Terminal block hash`
##### type : `string`

#### `terminalBlockNumber`

##### title : `Terminal block number`
##### type : `string`

```bash
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "terminalTotalDifficulty": 0,
    "terminalBlockHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "terminalBlockNumber": "0x1"
  }
}

```
