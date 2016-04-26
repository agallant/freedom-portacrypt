var Portacrypt=function(a){"use strict";this.dispatch=a};Portacrypt.prototype.setup=function(a,b){"use strict";if(b.length<20)return Promise.reject("Please use a longer passphrase");if(0===a.length)return Promise.reject("Please specify a userid");if("undefined"!=typeof this.keypair)return Promise.reject("Keypair already in memory, please clear first");this.userid=a;var c=this;return new Promise(function(d,e){scrypt(b,a,14,8,32,function(a){c.keypair=nacl.box.keyPair.fromSecretKey(new Uint8Array(a)),d()})})},Portacrypt.prototype.clear=function(){"use strict";return this.keypair=void 0,this.userid=void 0,Promise.resolve()},Portacrypt.prototype.exportKey=function(){"use strict";return this.keypair?Promise.resolve(nacl.util.encodeBase64(this.keypair.publicKey)):Promise.reject("No keys in memory - initialize first")},Portacrypt.prototype.box=function(a,b){"use strict";if(!this.keypair)return Promise.reject("No keys in memory - initialize first");var c=nacl.randomBytes(nacl.box.nonceLength),d=nacl.box(nacl.util.decodeBase64(btoa(a)),c,nacl.util.decodeBase64(b),this.keypair.secretKey);return Promise.resolve(nacl.util.encodeBase64(c)+nacl.util.encodeBase64(d))},Portacrypt.prototype.open=function(a,b){"use strict";if(!this.keypair)return Promise.reject("No keys in memory - initialize first");var c=nacl.util.decodeBase64(a),d=nacl.box.open(c.subarray(nacl.box.nonceLength),c.subarray(0,nacl.box.nonceLength),nacl.util.decodeBase64(b),this.keypair.secretKey);return Promise.resolve(atob(nacl.util.encodeBase64(d)))},"undefined"!=typeof freedom&&freedom().providePromises(Portacrypt);