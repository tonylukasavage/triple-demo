# triple-demo

demo for triple

## prereqs

* [node.js](https://nodejs.org/) >= 0.10
* [Android SDK](https://developer.android.com/sdk/index.html) for Android development
* [XCode]() for iOS development
* Sign up for an [Appcelerator account](http://www.appcelerator.com/signup/)

## setup

If you already have your Titanium environment setup, you can just skip to installing `triple`.

```
$ sudo npm install -g titanium
$ titanium setup
$ titanium sdk install
```

## install

```
$ sudo npm install -g triple
```

## running code

### hello-world
```
$ triple ./hello-world/app.js
```

### ripple
```
$ triple ./ripple/app.js
```

### paint

You must also install the [ti.paint](https://github.com/appcelerator-modules/ti.paint/releases) native module globally to your Titanium SDK modules folder. On Mac, this is located at `~/Library/Application Support/Titanium/modules`.

```
$ triple --module ti.paint ./paint/app.js
```
