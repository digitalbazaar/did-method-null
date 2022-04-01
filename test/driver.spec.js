/*!
 * Copyright (c) 2019-20201 Digital Bazaar, Inc. All rights reserved.
 */
import chai from 'chai';
chai.should();
const {expect} = chai;

import {driver} from '../';

const didNullDriver = driver();

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

describe('did:null method driver', () => {
  describe('method', () => {
    it('should return did method id', async () => {
      expect(didNullDriver.method).to.equal('null');
    });
  });

  describe('get', () => {
    it('should get the DID Document for a did:null DID', async () => {
      const did = 'did:null:null';
      const didDocument = await didNullDriver.get({did});

      expect(didDocument).to.eql(NULL_DID_DOC);
    });

    it('should fail for unknown did:null DIDs', async () => {
      const did = 'did:null:notnull';

      let error;
      try {
        await didNullDriver.get({did});
      } catch(e) {
        error = e;
      }

      expect(error).to.exist;
      expect(error.message).to
        .contain('"did" must be "did:null:null"');
    });
  });

  describe('generate', () => {
    it('should generate and get round trip', async () => {
      const {
        didDocument/*, keyPairs, methodFor*/
      } = await didNullDriver.generate();
      const did = didDocument.id;

      expect(didDocument).eql(NULL_DID_DOC);

      const fetchedDidDoc = await didNullDriver.get({did});
      expect(fetchedDidDoc).to.eql(didDocument);
    });
  });
});
