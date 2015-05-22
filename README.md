# Surfboard
Widget to bring the Migme fun to web apps.

[![Gitter](https://img.shields.io/badge/gitter-join%20chat-brightgreen.svg)](https://gitter.im/migme/surfboard)
[![Codeship](https://img.shields.io/codeship/737faef0-c964-0132-6f8a-1e9b8d507ee8.svg)](https://codeship.com/projects/75220)
[![Travis CI](https://img.shields.io/travis/migme/surfboard.svg)](https://travis-ci.org/migme/surfboard)
[![JavaScript Standard Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm](https://img.shields.io/npm/v/migme-surfboard.svg)](https://www.npmjs.com/package/migme-surfboard)
[![npm](https://img.shields.io/npm/dm/migme-surfboard.svg)](https://www.npmjs.com/package/migme-surfboard)
[![GitHub Releases](https://img.shields.io/github/downloads/migme/surfboard/latest/total.svg)](https://github.com/migme/surfboard/releases/latest)

## Installation
### NPM
```
npm install migme-surfboard
```
### Bower
```
bower install migme-surfboard
```
### CDN
Replace `${VERSION}` with a released version number.
```html
<script src="https://cdn.rawgit.com/migme/surfboard/releases/download/${VERSION}/migme-surfboard.min.js"></script>
```

## Usage

### Loading
```js
// ES6
import Surfboard from 'migme-surfboard'

// CommonJS
var Surfboard = require('migme-surfboard')

// AMD
define(['migme-surfboard'], function (Surfboard) {
  // ...
})
```

### Initialization
```
const widget = new Surfboard()
```

### Development
```bash
npm install     # Install dependencies
npm test        # Run tests
gulp browserify # Build
gulp watchify   # Build and automatically rebuild when any file changes
```

### Live Demo
```
npm i -g http-server
http-server
open http://127.0.0.1:8080
```
