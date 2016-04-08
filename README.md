# freedom-portacrypt
_Passphrase based asymmetric crypto using scrypt and NaCl_

The security/usability tradeoff usually boils down to one of two extremes:

- Normal users don't care about security, focus on usability for adoption!
- Flawed security is worse than no security, focus on security for consistency!

Portacrypt tries to strike a balance, with the goal of providing meaningful
security to regular folk.

#### Functionality
Portacrypt uses [TweetNaCl.js](https://tweetnacl.js.org) and
[scrypt](https://github.com/dchest/scrypt-async-js) to provide a simple yet
complete public key cryptography interface. The API is:

    setup(userid, passphrase) - Resolves promise after keypair generated
    clear() - Remove userid/keypair from memory
    exportKey() - Return the public key (encoded as a base64 string)
    box(message, receiverKey) - Return encrypted/signed (boxed) message, base64
    open(box, senderKey) - Authenticate and return decrypted message

All arguments and returns (for methods that have them) are `string` type, and
are synchronous except for setup. `setup` is deterministic - using the same
`userid` and `passphrase` results in the same keypair. This is by design - it
supports applications where users can "log in" from anywhere, even though the
application itself is completely static and doesn't store anything.

The targeted use case is decentralized web applications - browser extensions or
static webpages that enable peer-to-peer user interaction. By using cryptography
purely dependent on entropy from the passphrase, problems of syncing keychains
across devices go away. The obvious tradeoff is that the security of the user is
only as good as their passphrase - more on this below.

The `Portacrypt` object itself can be instantiated without any arguments, and
runs in a WebWorker using the [freedom.js](http://www.freedomjs.org) framework.

#### Threat model
If you're security-minded, you're probably a bit nervous about this package. It
depends on the user to give a good passphrase - and we all know that is a risky
proposition. The benefit of the tradeoff - decentralized applications - may not
seem big enough to be worth this cost. Why provide crypto when nearly 1% of your
users will just use `123456` as their password? Even worse, there's no password
recovery in Portacrypt - if users forget, they're out of luck.

This is a fair perspective, and if your use case depends on protecting
particularly naive users then you may be better served by another library (such
as [freedom-pgp-e2e](https://github.com/freedomjs/freedom-pgp-e2e)). But there
are such a thing as users who choose strong passphrases, and Portacrypt also
rejects passphrases of length below 20 - this isn't of itself a guarantee of
high entropy, but is a reasonable enough heuristic and when combined with the
userid as a salt and passed through scrypt it should be relatively brute-force
resistant.

Portacrypt is just trying to provide good crypto with what you give it. It is a
simple wrapper around fairly simple readable dependencies, and aside from basic
containment (via WebWorker), passphrase length check, and a simple API it's not
going to do anything to protect you from yourself. It's also probably not the
best tool to protect you from a truly determined and well-endowed adversary -
again, see PGP.

What you have to trust to use Portacrypt:

- Portacrypt and its dependencies (TweetNaCl, scrypt)
- Your browser/OS/computer
- The source that delivered the Portacrypt-using app
- The connection over which the Portacrypt app was delivered

What Portacrypt can protect you from:

- Passive surveillance/analysis of your cleartext communication
- Trusting a "cloud" service with your data, even encrypted
- Trusting a variety of devices/servers with your keys to use in multiple places

The delivery of Portacrypt (or indeed any security-sensitive JavaScript) is a
non-trivial issue - however, the simplicity of the apps (static HTML5) makes it
easier for people to audit and self-host. This, combined with ease of use,
should hopefully facilitate applications where users and not other parties are
the most important part of the ecosystem.

#### Further work

Further enhancements to Portacrypt would focus on improving usability without
changing the existing API or security. One possibility would be utility methods
to suggest strong passphrases (which requires trusting Portacrypt - but that is
already the case). Along with better evaluation of passphrase strength, this
could enhance the confidence in the entropy powering the encryption operations.

A similar passphrase-centric improvement would be a complementary tool for
passphrase management - essentially, add back a sort of keychain to Portacrypt
by way of personal secrets management, which is a well-tread problem. Just
integrating with an existing password manager would be a fine step, but other
possibilities may occur too. Syncing the secrets without trusting a server would
still be a chicken-egg problem, but supporting the use case of saved strong
local secrets doesn't inherently compromise the current model.

Portacrypt also depends on sharing and verifying public keys with other users -
these keys are already quite short, but it's worth considering representations
besides base64 to support better readability. This is clearly language/culture
dependent (except maybe pure numbers), and for now is left to the application
using Portacrypt - still, it may make sense to add as a utility.

Another line of enhancement would be better guarantees that what you are
running is Portacrypt - various webapp signing approaches exist, so look for
improvements in this space shortly.

#### Relate projects
Portacrypt is in some ways based on [miniLock](https://minilock.io/), with a
similar usage goal, security model, and cryptographic primitives. The main
difference is that the freedom.js framework provides a regular API and easy
packaging and running in WebWorkers - basically, freedom-portacrypt is
hopefully easier to just grab and use in a browser/JavaScript context.

If you're looking for good old-fashioned PGP key encryption (where you have
actual keypair files and don't depend entirely on the passphrase for entropy)
but are still targetting the browser, then you may want to check out
[freedom-pgp-e2e](https://github.com/freedomjs/freedom-pgp-e2e). This leans
more towards the security than the usability side than Portacrypt, but is very
appropriate if you have a solution to keychain management.

If you want to find other freedom.js modules,
[check us out on GitHub](https://github.com/freedomjs)!
