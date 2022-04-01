/*!
 * Copyright (c) 2020-2022 Digital Bazaar, Inc. All rights reserved.
 */

import {DidNullDriver} from './DidNullDriver.js';

/**
 * Helper method to match the `.driver()` API of other `did-io` plugins.
 *
 * @returns {DidNullDriver} Returns an instance of a did:null resolver driver.
 */
function driver() {
  return new DidNullDriver();
}

export {driver, DidNullDriver};
