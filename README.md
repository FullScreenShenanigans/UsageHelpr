# UsageHelpr

[![Greenkeeper badge](https://badges.greenkeeper.io/FullScreenShenanigans/UsageHelpr.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/FullScreenShenanigans/UsageHelpr.svg?branch=master)](https://travis-ci.org/FullScreenShenanigans/UsageHelpr)
[![NPM version](https://badge.fury.io/js/usagehelpr.svg)](http://badge.fury.io/js/usagehelpr)

A simple interactive text-based assistant to demonstrate common API uses.


## Build Process

UsageHelpr uses [Gulp](http://gulpjs.com/) to automate building, which requires [Node.js](http://node.js.org).

To build from scratch, install NodeJS and run the following commands:

```
npm install
gulp
```

### Individual Gulp tasks

* `gulp dist` - Compiles the source into `dist/`. 
* `gulp tsc` - Runs the [TypeScript](https://typescriptlang.org/) compiler.
* `gulp tslint` - Runs [TSLint](https://github.com/palantir/tslint).
* `gulp test` - Runs tests in `tests/`. 
* `gulp watch` - Runs the `tsc` and `tslint` tasks when a source file changes.
