---
sidebar_position: 8
---

# engine_exchangeCapabilities

Exchanges list of supported Engine API methods

## Parameter Name
- Consensus client methods

### Schema

#### `Array`

#### type : `string`

## Example Request

```bash
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "engine_exchangeCapabilities",
  "params": [
    [
      "engine_exchangeTransitionConfigurationV1",
      "engine_forkchoiceUpdatedV1",
      "engine_getPayloadBodiesByHashV1",
      "engine_getPayloadBodiesByRangeV1",
      "engine_getPayloadV1",
      "engine_newPayloadV1"
    ]
  ]
}

```

## Result

Name - Execution client methods
`Array`
type - string

```bash
{
"id":1
"jsonrpc":"2.0"
"result":[
0:
"engine_getPayloadV1"
1:
"engine_getPayloadV2"
2:
"engine_executePayloadV1"
3:
"engine_newPayloadV1"
4:
"engine_newPayloadV2"
5:
"engine_forkchoiceUpdatedV ..."
6:
"engine_forkchoiceUpdatedV ..."
7:
"engine_exchangeTransition ..."
8:
"engine_getPayloadBodiesBy ..."
9:
"engine_getPayloadBodiesBy ..."
]
}

```
