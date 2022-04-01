# `did:null` method driver _(@digitalbazaar/did-method-null)_

[![Main CI](https://github.com/digitalbazaar/did-method-null/workflows/Main%20CI/badge.svg)](https://github.com/digitalbazaar/did-method-null/actions?query=workflow%3A%22Main+CI%22)
[![Coverage status](https://img.shields.io/codecov/c/github/digitalbazaar/did-method-null)](https://codecov.io/gh/digitalbazaar/did-method-null)
[![NPM Version](https://img.shields.io/npm/v/@digitalbazaar/did-method-null)](https://www.npmjs.com/package/@digitalbazaar/did-method-null)

> A [DID](https://w3c.github.io/did-core) (Decentralized Identifier) method driver for the `did-io` library and for standalone use

## Table of Contents

- [Background](#background)
  * [Example DID Document](#example-did-document)
- [Security](#security)
- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [Commercial Support](#commercial-support)
- [License](#license)

## Background

See also (related specs):

* [Decentralized Identifiers (DIDs)](https://w3c.github.io/did-core)
* [The did:null Method](https://digitalbazaar.github.io/did-method-null-spec)

A `did:null` method driver for the [`did-io`](https://github.com/digitalbazaar/did-io)
client library and for standalone use.

The `did:null` method is used to express a DID Document representing nothing.
Its format is:

```
did:null:null
```

That DID would correspond to the following DID Document:

### Example DID Document

```json
{
  "@context": [
    "https://www.w3.org/ns/did/v1"
  ],
  "id": "did:null:null"
}
```

## Security

No known issues.

## Install

Requires Node.js 14+

To install from `npm`:

```
npm install --save @digitalbazaar/did-method-null
```

To install locally (for development):

```
git clone https://github.com/digitalbazaar/did-method-null.git
cd did-method-null
npm install
```

## Usage

### `generate()`

To generate the `did:null:null` DID Document:

```js
const didNullDriver = require('@digitalbazaar/did-method-null').driver();

// generate did:null:null
const {didDocument, keyPairs, methodFor} = await didNullDriver.generate();

// print the DID Document above
console.log(JSON.stringify(didDocument, null, 2));
```

`methodFor` is a convenience function that returns nothing.

### `get()`

To get the DID Document for the `did:null:null` DID:

```js
const did = 'did:null:null';
const didDocument = await didKeyDriver.get({did});
```

(Results in the [example DID Doc](#example-did-document) above).

## Contribute

See [the contribute file](https://github.com/digitalbazaar/bedrock/blob/master/CONTRIBUTING.md)!

PRs accepted.

If editing the Readme, please conform to the
[standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## Commercial Support

Commercial support for this library is available upon request from
Digital Bazaar: support@digitalbazaar.com

## License

[New BSD License (3-clause)](LICENSE) © Digital Bazaar
