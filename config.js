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
    "babel": "npm:babel-core@5.1.11",
    "babel-runtime": "npm:babel-runtime@5.1.11",
    "core-js": "npm:core-js@0.8.4",
    "migme": "npm:migme@0.2.3",
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:asap@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.8.4": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:localforage@1.2.2": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "promise": "npm:promise@5.0.0"
    },
    "npm:migme@0.2.2": {
      "localforage": "npm:localforage@1.2.2",
      "uri-template-lite": "npm:uri-template-lite@0.1.11"
    },
    "npm:migme@0.2.3": {
      "localforage": "npm:localforage@1.2.2",
      "uri-template-lite": "npm:uri-template-lite@0.1.11"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:promise@5.0.0": {
      "asap": "npm:asap@1.0.0"
    },
    "npm:uri-template-lite@0.1.11": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    }
  }
});

