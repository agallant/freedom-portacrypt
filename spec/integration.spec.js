/*globals jasmine,describe,beforeEach,require,expect,it,xit,jit,freedom*/
/*jslint node:true*/

describe('Portacrypt integration', function() {
  'use strict';
  // Need to ensure freedom is loaded and path is appropriate for environment
  var fdom, path;
  if (typeof freedom === 'undefined') {
    // Node, need to load freedom
    fdom = require('freedom-for-node').freedom;
    path = '../build/demo/pcdemo.json';
  } else {
    // Chrome or Firefox, assume freedom is already loaded
    fdom = freedom;
    if (typeof window === 'undefined') {
      // Firefox addon, need to prefix path with proper data location
      path = 'grunt-jasmine-firefoxaddon-runner/data/build/demo/pcdemo.json';
    } else {
      // Chrome app
      path = 'scripts/build/demo/pcdemo.json';
    }
  }

  beforeEach(function() {
    expect(fdom).toBeDefined();
  });

  it('encrypts, signs, decrypts, verifies', function(done) {
    fdom(path).then(function(PCdemo) {
      var demo = new PCdemo();
      var msgsReceived = 0;
      var expectedMsgs = [
        'Starting Portacrypt test...',
        'Generated and exported correct public key!',
        'Encrypted and signed (boxed) message...',
        'Authenticated and decrypted message correctly!',
        'Portacrypt test COMPLETED.'];
      demo.on('print', function(msg) {
        console.log(msg);
        expect(msg).toEqual(expectedMsgs[msgsReceived++]);
        if (msgsReceived === expectedMsgs.length) {
          done();
        }
      });
      demo.runDemo();
    });
  });
});
