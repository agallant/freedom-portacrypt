/*globals describe,beforeEach,require,expect,it,xit,jit,console,Portacrypt*/
/*jslint indent:2*/

// Unit tests for freedom-portacrypt
// Tests both freedom API calls and internal methods
describe('portacrypt', function () {
  'use strict';

  var publicKeyStr = '0yfw/oz/iMzQ5+xX0DYTsonpbuVSL+Q4PRSoNGwIDXM=';
  var privateKeyStr = 'GjjXzS/hKQpw1NhgM2VgtfgAAITmww4tJHCjzayBRtk=';
  var portacrypt;

  beforeEach(function () {
    portacrypt = new Portacrypt();
    expect(portacrypt).toBeDefined();
  });

  it('rejects short passphrase', function(done) {
    portacrypt.setup('short passphrase').then(
      function() {
        console.log(portacrypt);  // shouldn't see this, should go to error case
        expect(false).toBeTruthy();
      }).catch(function(e) {
        expect(e).toEqual(Error('Please use a longer passphrase'));
      }).then(done);
  });

  it('sets up and exports public key', function(done) {
    portacrypt.setup('adequately long passphrase').then(function() {
      var publicKey = portacrypt.exportKey();
      expect(publicKey).toBeDefined();
      expect(typeof publicKey).toEqual('string');
      expect(publicKey).toEqual(publicKeyStr);
    }).then(done);
  });

  it('encrypts/signs and verifies/decrypts message', function(done) {
    portacrypt.setup('adequately long passphrase').then(function() {
      var publicKey = portacrypt.exportKey();
      var box = portacrypt.box('test message', publicKey);
      expect(box).toBeDefined();
      expect(typeof box).toEqual('string');
      var message = portacrypt.open(box, publicKey);
      expect(message).toEqual('test message');
    }).then(done);
  });
});
