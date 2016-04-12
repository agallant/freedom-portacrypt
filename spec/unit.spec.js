/*globals Promise,describe,beforeEach,done,expect,it,xit,jit,console,Portacrypt*/
/*jslint indent:2*/

// Unit tests for freedom-portacrypt
// Tests both freedom API calls and internal methods
describe('portacrypt', function () {
  'use strict';

  // public key for userid 'user', passphrase 'adequately long passphrase'
  var publicKeyStr = '0WUHYeKUR29yhPUNeshz84He7sWWuZCn0DlgF5wCUF0=';
  var portacrypt;

  beforeEach(function () {
    portacrypt = new Portacrypt();
    expect(portacrypt).toBeDefined();
  });

  it('throws error if exporting key before setting up', function(done) {
    portacrypt.exportKey().then(function() {
      console.log(portacrypt);  // shouldn't see this, should go to error case
      expect(false).toBeTruthy();
    }).catch(function(e) {
      expect(e).toEqual(Error('No keys in memory - initialize first'));
    }).then(done);
  });

  it('rejects short passphrase', function(done) {
    portacrypt.setup('user', 'short passphrase').then(function() {
      console.log(portacrypt);  // shouldn't see this, should go to error case
      expect(false).toBeTruthy();
    }).catch(function(e) {
      expect(e).toEqual(Error('Please use a longer passphrase'));
    }).then(done);
  });

  it('rejects blank userid', function(done) {
    portacrypt.setup('', 'adequately long passphrase').then(function() {
      console.log(portacrypt);  // shouldn't see this, should go to error case
      expect(false).toBeTruthy();
    }).catch(function(e) {
      expect(e).toEqual(Error('Please specify a userid'));
    }).then(done);
  });

  it('sets up and exports public key', function(done) {
    portacrypt.setup('user', 'adequately long passphrase').then(function() {
      return portacrypt.exportKey();
    }).then(function(publicKey) {
      expect(publicKey).toBeDefined();
      expect(typeof publicKey).toEqual('string');
      expect(publicKey).toEqual(publicKeyStr);
    }).catch(function(e) {
      console.log(e.toString());
      expect(false).toBeTruthy();
    }).then(done);
  });

  it('rejects setting up twice without clearing', function(done) {
    portacrypt.setup('user', 'adequately long passphrase').then(function() {
      return portacrypt.setup('anotheruser', 'another long passphrase');
    }).then(function() {
      console.log(portacrypt);  //shouldn't see this, should go to error case
      expect(false).toBeTruthy();
    }).catch(function(e) {
      expect(e).toEqual(Error('Keypair already in memory, please clear first'));
    }).then(done);
  });

  it('sets up twice successfully *if* clear called between', function(done) {
    portacrypt.setup('user', 'adequately long passphrase').then(function() {
      return portacrypt.clear();
    }).then(function() {
      return portacrypt.setup('user', 'adequately long passphrase');
    }).then(function() {
      return portacrypt.exportKey();
    }).then(function(publicKey) {
      expect(publicKey).toBeDefined();
      expect(typeof publicKey).toEqual('string');
      expect(publicKey).toEqual(publicKeyStr);
    }).catch(function(e) {
      console.log(e.toString());
      expect(false).toBeTruthy();
    }).then(done);
  });

  it('encrypts/signs and verifies/decrypts message', function(done) {
    var publicKey;
    portacrypt.setup('user', 'adequately long passphrase').then(function() {
      return portacrypt.exportKey();
    }).then(function(key) {
      publicKey = key;
      expect(publicKey).toEqual(publicKeyStr);
      return portacrypt.box('test message', publicKey);
    }).then(function(box) {
      expect(box).toBeDefined();
      expect(typeof box).toEqual('string');
      return portacrypt.open(box, publicKey);
    }).then(function(message) {
      expect(message).toEqual('test message');
    }).catch(function(e) {
      console.log(e.toString());
      expect(false).toBeTruthy();
    }).then(done);
  });
});
