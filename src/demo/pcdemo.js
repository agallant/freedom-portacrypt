/*globals console,freedom,Uint8Array,ArrayBuffer*/

// public key for userid 'user', passphrase 'adequately long passphrase'
var publicKeyStr = '0WUHYeKUR29yhPUNeshz84He7sWWuZCn0DlgF5wCUF0=';

var PCdemo = function(dispatchEvent) {
  'use strict';
  this.dispatch = dispatchEvent;
};

PCdemo.prototype.runDemo = function() {
  'use strict';
  var pc = new freedom.portacrypt();
  var publicKey;

  // TODO - consider extending script to also test error cases as in unit tests
  this.dispatch('print', 'Starting Portacrypt test...');
  pc.setup('user', 'adequately long passphrase').then(function() {
    return pc.exportKey();
  }.bind(this)).then(function(key) {
    publicKey = key;
    if (publicKey === publicKeyStr) {
      this.dispatch('print', 'Generated and exported correct public key!');
    }
    return pc.box('test message', publicKey);
  }.bind(this)).then(function(box) {
    if (typeof box === 'string') {
      this.dispatch('print', 'Encrypted and signed (boxed) message...');
    }
    return pc.open(box, publicKey);
  }.bind(this)).then(function(message) {
    if (message === 'test message') {
      this.dispatch('print', 'Authenticated and decrypted message correctly!');
    }
    this.dispatch('print', 'Portacrypt test COMPLETED.');
  }.bind(this)).catch(
    function(e) {
      if (e.message) {
        e = e.message;
      }
      this.dispatch('print', 'Portacrypt test encountered error: ' + e);
    }.bind(this));
};

freedom().provideSynchronous(PCdemo);
