/*!
 * Copyright (c) 2020-2022 Digital Bazaar, Inc. All rights reserved.
 */
// the null doc
const NULL_DID_DOC = {
  '@context': [
    'https://www.w3.org/ns/did/v1'
  ],
  id: 'did:null:null',
  assertionMethod: [],
  authentication: [],
  capabilityDelegation: [],
  capabilityInvocation: [],
  keyAgreement: [],
  verificationMethod: []
};

const GENERATED = {
  // always the null doc
  didDocument: NULL_DID_DOC,

  // map of keyId to key pair instance
  keyPairs: new Map(),

  // Convenience function that returns the public/private key pair instance
  // for a given purpose (authentication, assertionMethod, keyAgreement, etc).
  methodFor: ({/*purpose*/}) => {
    return undefined;
  }
};

export class DidNullDriver {
  /**
   * DidNullDriver constructor.
   */
  constructor() {
    // used by did-io to register drivers
    this.method = 'null';
  }

  /**
   * Generates a new `did:null` method DID Document.
   *
   * @returns {Promise<{didDocument: object, keyPairs: Map,
   *   methodFor: Function}>} Resolves with the generated DID Document, along
   *   with the corresponding empty map of key pairs used to generate it.
   */
  async generate() {
    return GENERATED;
  }

  /**
   * Returns a `did:null` method DID Document for a given DID.
   *
   * @example
   * await resolver.get({did}); // -> did document
   *
   * @param {object} options - Options hashmap.
   * @param {string} [options.did] - DID URL.
   *
   * @returns {Promise<object>} Resolves to a DID Document or a
   *   public key node with context.
   */
  async get({did} = {}) {
    if(did !== 'did:null:null') {
      throw new Error('"did" must be "did:null:null".');
    }

    // Resolve the full null DID Document
    return NULL_DID_DOC;
  }
}
