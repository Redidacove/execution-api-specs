---
sidebar_position: 7
---

# debug_getRawTransaction

Returns an array of EIP-2718 binary-encoded transactions.

## Parameter Name
- Transaction hash

### Schema

#### title : `32 byte hex value`

#### type : `string`

## Example Request

```bash
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "debug_getRawTransaction",
  "params": [
    "0x3a2fd1a5ea9ffee477f449be53a49398533d2c006a5815023920d1c397298df3"
  ]
}

```

## Result

type - EIP-2718 binary-encoded transaction
title - hex encoded bytes
type - string

```bash
{
"id":1
"jsonrpc":"2.0"
"result":"0xf8678084342770c18252089 ..."
}

```
