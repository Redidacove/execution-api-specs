---
sidebar_position: 6
---

# debug_getRawReceipts

Returns an array of EIP-2718 binary-encoded reciepts.

## Parameter Name
- Block

### Schema

#### title : `Block number`

#### type : `string`

#### title : `Block tag`

#### type : `string`

#### description :

`earliest`: The lowest numbered block the client has available;

`finalized`: The most recent crypto-economically secure block, cannot be re-orged outside of manual intervention driven by community coordination;

`safe`: The most recent block that is safe from re-orgs under honest majority and certain synchronicity assumptions;

`latest`: The most recent block in the canonical chain observed by the client, this block may be re-orged out of the canonical chain even under healthy/normal conditions;

`pending`: A sample next block built by the client on top of `latest` and containing the set of transactions usually taken from local mempool. Before the merge transition is finalized, any call querying for `finalized` or `safe` block MUST be responded to with `-39001: Unknown block` error

### Enum

- earliest

- finalized

- safe

- latest

- pending

## Example Request

```bash
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "debug_getRawReceipts",
  "params": [
    "0x32026E"
  ]
}

```

## Result

```bash
{
"id":1
"jsonrpc":"2.0"
"result":[
0:
"0xf901a60182c70eb90100000 ..."
1:
"0xf901a70183018e1cb901000 ..."
]
}
```
