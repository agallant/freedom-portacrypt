/* globals freedom,Promise,console,scrypt,nacl */

// Array of random bytes drawn with nacl.randomBytes(32)
var salt = [213, 159, 245, 205, 103, 58, 73, 63,
            114, 93, 140, 125, 154, 1, 127, 25,
            6, 69, 222, 58, 238, 107, 154, 132,
            66, 50, 86, 214, 166, 62, 28, 198];

var Portacrypt = function(dispatchEvents) {
  'use strict';
  this.dispatch = dispatchEvents;
};

Portacrypt.prototype.setup = function(passphrase) {
  'use strict';
  if (passphrase.length < 20) {
    return Promise.reject(Error('Please use a longer passphrase'));
  }
  if (this.keypair) {
    return Promise.reject(Error(
      'Keypair already in memory, please clear first'));
  }
  var scope = this;
  return new Promise(
    function(resolve, reject) {
      scrypt(passphrase, salt, 14, 8, 32, function(seed) {
        scope.keypair = nacl.box.keyPair.fromSecretKey(new Uint8Array(seed));
        resolve();
      });
    });
};

Portacrypt.prototype.clear = function() {
  'use strict';
  this.keypair = undefined;
};

Portacrypt.prototype.exportKey = function() {
  'use strict';
  if (!this.keypair) {
    throw new Error('No keys in memory - initialize first');
  }
  return this.keypair.publicKey;
};

Portacrypt.prototype.box = function(message, receiverKey) {
  'use strict';
  if (!this.keypair) {
    throw new Error('No keys in memory - initialize first');
  }
};

Portacrypt.prototype.open = function(ciphertext, senderKey) {
  'use strict';
  if (!this.keypair) {
    throw new Error('No keys in memory - initialize first');
  }
};

if (typeof freedom !== 'undefined') {
  freedom().providePromises(Portacrypt);
}
