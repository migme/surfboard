System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "babel": "npm:babel-core@5.2.16",
    "babel-runtime": "npm:babel-runtime@5.2.16",
    "core-js": "npm:core-js@0.9.6",
    "html": "github:systemjs/plugin-text@0.0.2",
    "migme": "npm:migme@0.3.0",
    "webcomponents.js": "npm:webcomponents.js@0.6.1",
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:asap@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.6": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:localforage@1.2.2": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "promise": "npm:promise@5.0.0"
    },
    "npm:migme@0.3.0": {
      "localforage": "npm:localforage@1.2.2",
      "url-template": "npm:url-template@2.0.6"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:promise@5.0.0": {
      "asap": "npm:asap@1.0.0"
    },
    "npm:webcomponents.js@0.6.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

