/* globals freedom,Promise,console,scrypt,nacl */

var Portacrypt = function(dispatchEvents) {
  'use strict';
  this.dispatch = dispatchEvents;
};

Portacrypt.prototype.setup = function(userid, passphrase) {
  'use strict';
  if (passphrase.length < 20) {
    return Promise.reject(Error('Please use a longer passphrase'));
  }
  if (userid.length === 0) {
    // userid is also used as salt, so want to enforce having one
    return Promise.reject(Error('Please specify a userid'));
  }
  if (typeof this.keypair !== 'undefined') {
    return Promise.reject(Error(
      'Keypair already in memory, please clear first'));
  }
  this.userid = userid;
  var scope = this;
  return new Promise(
    function(resolve, reject) {
      scrypt(passphrase, userid, 14, 8, 32, function(seed) {
        scope.keypair = nacl.box.keyPair.fromSecretKey(new Uint8Array(seed));
        resolve();
      });
    });
};

Portacrypt.prototype.clear = function() {
  'use strict';
  this.keypair = undefined;
  this.userid = undefined;
};

Portacrypt.prototype.exportKey = function() {
  'use strict';
  if (!this.keypair) {
    throw new Error('No keys in memory - initialize first');
  }
  return nacl.util.encodeBase64(this.keypair.publicKey);
};

Portacrypt.prototype.box = function(message, receiverKey) {
  'use strict';
  if (!this.keypair) {
    throw new Error('No keys in memory - initialize first');
  }
  // TODO randomness
  var nonce64 = 'plYu7rLW8pagaZxPJolmtacUg1+QcURx';
  var nonce = nacl.util.decodeBase64(nonce64);
  var box = nacl.box(nacl.util.decodeBase64(btoa(message)), nonce,
                     nacl.util.decodeBase64(receiverKey),
                     this.keypair.secretKey);
  return nacl.util.encodeBase64(box);
};

Portacrypt.prototype.open = function(box, senderKey) {
  'use strict';
  if (!this.keypair) {
    throw new Error('No keys in memory - initialize first');
  }
  // TODO randomness
  var nonce64 = 'plYu7rLW8pagaZxPJolmtacUg1+QcURx';
  var nonce = nacl.util.decodeBase64(nonce64);
  var message = nacl.box.open(nacl.util.decodeBase64(box), nonce,
                              nacl.util.decodeBase64(senderKey),
                              this.keypair.secretKey);
  return atob(nacl.util.encodeBase64(message));
};

if (typeof freedom !== 'undefined') {
  freedom().providePromises(Portacrypt);
}
