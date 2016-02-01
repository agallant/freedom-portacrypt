/* globals freedom,Promise */

var Portacrypt = function (dispatchEvents, base) {
  'use strict';
  this.num = base;
};

Portacrypt.prototype.setup = function (passphrase) {
  'use strict';
  if (passphrase.length < 8) {
    return Promise.reject(Error('Please use a longer passphrase'));
  }
};

if (typeof freedom !== 'undefined') {
  freedom().providePromises(Portacrypt);
}
