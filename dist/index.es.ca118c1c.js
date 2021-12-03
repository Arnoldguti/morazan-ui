// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aMn9s":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "ec56c8aeca118c1c";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"erHRP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _pouchdbBinaryUtils = require("pouchdb-binary-utils");
var _pouchdbAdapterUtils = require("pouchdb-adapter-utils");
var _pouchdbMd5 = require("pouchdb-md5");
var _pouchdbUtils = require("pouchdb-utils");
var _pouchdbErrors = require("pouchdb-errors");
var _pouchdbMerge = require("pouchdb-merge");
var IDB_NULL = Number.MIN_SAFE_INTEGER;
var IDB_FALSE = Number.MIN_SAFE_INTEGER + 1;
var IDB_TRUE = Number.MIN_SAFE_INTEGER + 2;
//
// IndexedDB only allows valid JS names in its index paths, whereas JSON allows
// for any string at all. This converts invalid JS names to valid ones, to allow
// for them to be indexed.
//
// For example, "foo-bar" is a valid JSON key, but cannot be a valid JS name
// (because that would be read as foo minus bar).
//
// Very high level rules for valid JS names are:
//  - First character cannot start with a number
//  - Otherwise all characters must be be a-z, A-Z, 0-9, $ or _.
//  - We allow . unless the name represents a single field, as that represents
//    a deep index path.
//
// This is more aggressive than it needs to be, but also simpler.
//
var KEY_INVALID = /[^a-zA-Z0-9_$]+|(^[^a-zA-Z_$])/g;
var PATH_INVALID = /(\\.)|[^a-zA-Z0-9_$.]+|(^[^a-zA-Z_$])/g;
var SLASH = '\\'.charCodeAt(0);
// These are the same as above but without the global flag
// we want to use RegExp.test because it's really fast, but the global flag
// makes the regex const stateful (seriously) as it walked through all instances
var TEST_KEY_INVALID = /[^a-zA-Z0-9_$]+|(^[^a-zA-Z_$])/;
var TEST_PATH_INVALID = /(\\.)|[^a-zA-Z0-9_$.]+|(^[^a-zA-Z_$])/;
function needsSanitise(name, isPath) {
    if (isPath) return TEST_PATH_INVALID.test(name);
    else return TEST_KEY_INVALID.test(name);
}
function sanitise(name, isPath) {
    var correctCharacters = function(match) {
        var good = '';
        for(var i = 0; i < match.length; i++){
            var code = match.charCodeAt(i);
            // If you're sanitising a path, a slash character is there to be interpreted
            // by whatever parses the path later as "escape the next thing".
            //
            // e.g., if you want to index THIS string:
            //   {"foo": {"bar.baz": "THIS"}}
            // Your index path would be "foo.bar\.baz".
            if (code === SLASH && isPath) continue;
            good += '_c' + code + '_';
        }
        return good;
    };
    if (isPath) return name.replace(PATH_INVALID, correctCharacters);
    else return name.replace(KEY_INVALID, correctCharacters);
}
function needsRewrite(data) {
    for (var key of Object.keys(data)){
        if (needsSanitise(key)) return true;
        else if (data[key] === null || typeof data[key] === 'boolean') return true;
        else if (typeof data[key] === 'object') return needsRewrite(data[key]);
    }
}
function rewrite(data) {
    if (!needsRewrite(data)) return false;
    var isArray = Array.isArray(data);
    var clone = isArray ? [] : {
    };
    Object.keys(data).forEach(function(key) {
        var safeKey = isArray ? key : sanitise(key);
        if (data[key] === null) clone[safeKey] = IDB_NULL;
        else if (typeof data[key] === 'boolean') clone[safeKey] = data[key] ? IDB_TRUE : IDB_FALSE;
        else if (typeof data[key] === 'object') clone[safeKey] = rewrite(data[key]);
        else clone[safeKey] = data[key];
    });
    return clone;
}
var DOC_STORE = 'docs';
var META_STORE = 'meta';
function idbError(callback) {
    return function(evt) {
        var message = 'unknown_error';
        if (evt.target && evt.target.error) message = evt.target.error.name || evt.target.error.message;
        callback(_pouchdbErrors.createError(_pouchdbErrors.IDB_ERROR, message, evt.type));
    };
}
function processAttachment(name, src, doc, isBinary) {
    delete doc._attachments[name].stub;
    if (isBinary) {
        doc._attachments[name].data = src.attachments[doc._attachments[name].digest].data;
        return Promise.resolve();
    }
    return new Promise(function(resolve) {
        var data = src.attachments[doc._attachments[name].digest].data;
        _pouchdbBinaryUtils.readAsBinaryString(data, function(binString) {
            doc._attachments[name].data = _pouchdbBinaryUtils.btoa(binString);
            delete doc._attachments[name].length;
            resolve();
        });
    });
}
function rawIndexFields(ddoc, viewName) {
    // fields are an array of either the string name of the field, or a key value
    var fields = ddoc.views[viewName].options && ddoc.views[viewName].options.def && ddoc.views[viewName].options.def.fields || [];
    // Either ['foo'] or [{'foo': 'desc'}]
    return fields.map(function(field) {
        if (typeof field === 'string') return field;
        else return Object.keys(field)[0];
    });
}
function naturalIndexName(fields) {
    return '_find_idx/' + fields.join('/');
}
/**
 * Convert the fields the user gave us in the view and convert them to work for
 * indexeddb.
 *
 * fields is an array of field strings. A field string could be one field:
 *   'foo'
 * Or it could be a json path:
 *   'foo.bar'
 */ function correctIndexFields(fields) {
    // Every index has to have deleted at the front, because when we do a query
    // we need to filter out deleted documents.
    return [
        'deleted'
    ].concat(fields.map(function(field) {
        if (field in [
            '_id',
            '_rev',
            '_deleted',
            '_attachments'
        ]) // These properties are stored at the top level without the underscore
        return field.substr(1);
        else // The custom document fields are inside the `data` property
        return 'data.' + sanitise(field, true);
    }));
}
//
// Core PouchDB schema version. Increment this if we, as a library, want to make
// schema changes in indexeddb. See upgradePouchDbSchema()
//
var POUCHDB_IDB_VERSION = 1;
//
// Functions that manage a combinate indexeddb version, by combining the current
// time in millis that represents user migrations with a large multiplier that
// represents PouchDB system migrations.
//
// This lets us use the idb version number to both represent
// PouchDB-library-level migrations as well as "user migrations" required for
// when design documents trigger the addition or removal of native indexes.
//
// Given that Number.MAX_SAFE_INTEGER = 9007199254740991
//
// We can easily use the largest 2-3 digits and either allow:
//  - 900 system migrations up to 2198/02/18
//  - or 89 system migrations up to 5050/02/14
//
// This impl does the former. If this code still exists after 2198 someone send my
// decendents a Spacebook message congratulating them on their impressive genes.
//
// 9007199254740991 <- MAX_SAFE_INTEGER
//   10000000000000 <- 10^13
//    7199254740991 <- 2198-02-18T16:59:00.991Z
//
var versionMultiplier = Math.pow(10, 13);
function createIdbVersion() {
    return versionMultiplier * POUCHDB_IDB_VERSION + new Date().getTime();
}
function getPouchDbVersion(version) {
    return Math.floor(version / versionMultiplier);
}
function maintainNativeIndexes(openReq, reject) {
    var docStore = openReq.transaction.objectStore(DOC_STORE);
    var ddocsReq = docStore.getAll(IDBKeyRange.bound('_design/', '_design/\uffff'));
    ddocsReq.onsuccess = function(e) {
        var results = e.target.result;
        var existingIndexNames = Array.from(docStore.indexNames);
        // NB: the only thing we're supporting here is the declared indexing
        // fields nothing more.
        var expectedIndexes = results.filter(function(row) {
            return row.deleted === 0 && row.revs[row.rev].data.views;
        }).map(function(row) {
            return row.revs[row.rev].data;
        }).reduce(function(indexes, ddoc) {
            return Object.keys(ddoc.views).reduce(function(acc, viewName) {
                var fields = rawIndexFields(ddoc, viewName);
                if (fields && fields.length > 0) acc[naturalIndexName(fields)] = correctIndexFields(fields);
                return acc;
            }, indexes);
        }, {
        });
        var expectedIndexNames = Object.keys(expectedIndexes);
        // Delete any indexes that aren't system indexes or expected
        var systemIndexNames = [
            'seq'
        ];
        existingIndexNames.forEach(function(index) {
            if (systemIndexNames.indexOf(index) === -1 && expectedIndexNames.indexOf(index) === -1) docStore.deleteIndex(index);
        });
        // Work out which indexes are missing and create them
        var newIndexNames = expectedIndexNames.filter(function(ei) {
            return existingIndexNames.indexOf(ei) === -1;
        });
        try {
            newIndexNames.forEach(function(indexName) {
                docStore.createIndex(indexName, expectedIndexes[indexName]);
            });
        } catch (err) {
            reject(err);
        }
    };
}
function upgradePouchDbSchema(db, pouchdbVersion) {
    if (pouchdbVersion < 1) {
        var docStore = db.createObjectStore(DOC_STORE, {
            keyPath: 'id'
        });
        docStore.createIndex('seq', 'seq', {
            unique: true
        });
        db.createObjectStore(META_STORE, {
            keyPath: 'id'
        });
    }
// Declare more PouchDB schema changes here
// if (pouchdbVersion < 2) { .. }
}
function openDatabase(openDatabases, api, opts, resolve, reject) {
    var openReq = opts.versionchanged ? indexedDB.open(opts.name) : indexedDB.open(opts.name, createIdbVersion());
    openReq.onupgradeneeded = function(e) {
        if (e.oldVersion > 0 && e.oldVersion < versionMultiplier) // This DB was created with the "idb" adapter, **not** this one.
        // For now we're going to just error out here: users must manually
        // migrate between the two. In the future, dependent on performance tests,
        // we might silently migrate
        throw new Error('Incorrect adapter: you should specify the "idb" adapter to open this DB');
        var db = e.target.result;
        var pouchdbVersion = getPouchDbVersion(e.oldVersion);
        upgradePouchDbSchema(db, pouchdbVersion);
        maintainNativeIndexes(openReq, reject);
    };
    openReq.onblocked = function(e) {
        // AFAICT this only occurs if, after sending `onversionchange` events to
        // all other open DBs (ie in different tabs), there are still open
        // connections to the DB. In this code we should never see this because we
        // close our DBs on these events, and all DB interactions are wrapped in
        // safely re-opening the DB.
        console.error('onblocked, this should never happen', e);
    };
    openReq.onsuccess = function(e1) {
        var idb = e1.target.result;
        idb.onabort = function(e) {
            console.error('Database has a global failure', e.target.error);
            delete openDatabases[opts.name];
            idb.close();
        };
        idb.onversionchange = function() {
            console.log('Database was made stale, closing handle');
            openDatabases[opts.name].versionchanged = true;
            idb.close();
        };
        var metadata = {
            id: META_STORE
        };
        var txn = idb.transaction([
            META_STORE
        ], 'readwrite');
        txn.oncomplete = function() {
            resolve({
                idb: idb,
                metadata: metadata
            });
        };
        var metaStore = txn.objectStore(META_STORE);
        metaStore.get(META_STORE).onsuccess = function(e) {
            metadata = e.target.result || metadata;
            var changed = false;
            if (!('doc_count' in metadata)) {
                changed = true;
                metadata.doc_count = 0;
            }
            if (!('seq' in metadata)) {
                changed = true;
                metadata.seq = 0;
            }
            if (!('db_uuid' in metadata)) {
                changed = true;
                metadata.db_uuid = _pouchdbUtils.uuid();
            }
            if (changed) metaStore.put(metadata);
        };
    };
    openReq.onerror = function(e) {
        reject(e.target.error);
    };
}
function setup(openDatabases, api, opts) {
    if (!openDatabases[opts.name] || openDatabases[opts.name].versionchanged) {
        opts.versionchanged = openDatabases[opts.name] && openDatabases[opts.name].versionchanged;
        openDatabases[opts.name] = new Promise(function(resolve, reject) {
            openDatabase(openDatabases, api, opts, resolve, reject);
        });
    }
    return openDatabases[opts.name];
}
function info(metadata, callback) {
    callback(null, {
        doc_count: metadata.doc_count,
        update_seq: metadata.seq
    });
}
function get(txn, id, opts, callback) {
    if (txn.error) return callback(txn.error);
    txn.txn.objectStore(DOC_STORE).get(id).onsuccess = function(e) {
        var doc = e.target.result;
        var rev;
        if (!opts.rev) rev = doc && doc.rev;
        else rev = opts.latest ? _pouchdbMerge.latest(opts.rev, doc) : opts.rev;
        if (!doc || doc.deleted && !opts.rev || !(rev in doc.revs)) {
            callback(_pouchdbErrors.createError(_pouchdbErrors.MISSING_DOC, 'missing'));
            return;
        }
        var result = doc.revs[rev].data;
        result._id = doc.id;
        result._rev = rev;
        // WARNING: expecting possible old format
        // TODO: why are we passing the transaction in the context?
        //       It's not clear we ever thread these txns usefully
        callback(null, {
            doc: result,
            metadata: doc,
            ctx: txn
        });
    };
}
function parseAttachment(attachment, opts, cb) {
    if (opts.binary) return cb(null, attachment);
    else _pouchdbBinaryUtils.readAsBinaryString(attachment, function(binString) {
        cb(null, _pouchdbBinaryUtils.btoa(binString));
    });
}
function getAttachment(txn, docId, attachId, _, opts, cb) {
    if (txn.error) return cb(txn.error);
    var attachment;
    txn.txn.objectStore(DOC_STORE).get(docId).onsuccess = function(e) {
        var doc = e.target.result;
        var rev = doc.revs[opts.rev || doc.rev].data;
        var digest = rev._attachments[attachId].digest;
        attachment = doc.attachments[digest].data;
    };
    txn.txn.oncomplete = function() {
        parseAttachment(attachment, opts, cb);
    };
    txn.txn.onabort = cb;
}
function bulkDocs(api, req, opts, metadata, dbOpts, idbChanges, callback) {
    var txn1;
    // TODO: I would prefer to get rid of these globals
    var error;
    var results = [];
    var docs1 = [];
    var lastWriteIndex;
    var revsLimit = dbOpts.revs_limit || 1000;
    var rewriteEnabled = dbOpts.name.indexOf("-mrview-") === -1;
    // We only need to track 1 revision for local documents
    function docsRevsLimit(doc) {
        return /^_local/.test(doc.id) ? 1 : revsLimit;
    }
    function rootIsMissing(doc) {
        return doc.rev_tree[0].ids[1].status === 'missing';
    }
    function parseBase64(data) {
        try {
            return atob(data);
        } catch (e) {
            return {
                error: _pouchdbErrors.createError(_pouchdbErrors.BAD_ARG, 'Attachment is not a valid base64 string')
            };
        }
    }
    // Reads the original doc from the store if available
    // As in allDocs with keys option using multiple get calls is the fastest way
    function fetchExistingDocs(txn, docs) {
        var fetched = 0;
        var oldDocs = {
        };
        function readDone(e) {
            if (e.target.result) oldDocs[e.target.result.id] = e.target.result;
            if (++fetched === docs.length) processDocs(txn, docs, oldDocs);
        }
        docs.forEach(function(doc) {
            txn.objectStore(DOC_STORE).get(doc.id).onsuccess = readDone;
        });
    }
    function processDocs(txn, docs, oldDocs) {
        docs.forEach(function(doc, i) {
            var newDoc;
            // The first document write cannot be a deletion
            if ('was_delete' in opts && !oldDocs.hasOwnProperty(doc.id)) newDoc = _pouchdbErrors.createError(_pouchdbErrors.MISSING_DOC, 'deleted');
            else if (opts.new_edits && !oldDocs.hasOwnProperty(doc.id) && rootIsMissing(doc)) newDoc = _pouchdbErrors.createError(_pouchdbErrors.REV_CONFLICT);
            else if (oldDocs.hasOwnProperty(doc.id)) {
                newDoc = update(txn, doc, oldDocs[doc.id]);
                // The update can be rejected if it is an update to an existing
                // revision, if so skip it
                if (newDoc == false) return;
            // New document
            } else {
                // Ensure new documents are also stemmed
                var merged = _pouchdbMerge.merge([], doc.rev_tree[0], docsRevsLimit(doc));
                doc.rev_tree = merged.tree;
                doc.stemmedRevs = merged.stemmedRevs;
                newDoc = doc;
                newDoc.isNewDoc = true;
                newDoc.wasDeleted = doc.revs[doc.rev].deleted ? 1 : 0;
            }
            if (newDoc.error) results[i] = newDoc;
            else {
                oldDocs[newDoc.id] = newDoc;
                lastWriteIndex = i;
                write(txn, newDoc, i);
            }
        });
    }
    // Converts from the format returned by parseDoc into the new format
    // we use to store
    function convertDocFormat(doc) {
        var newDoc = {
            id: doc.metadata.id,
            rev: doc.metadata.rev,
            rev_tree: doc.metadata.rev_tree,
            revs: doc.metadata.revs || {
            }
        };
        newDoc.revs[newDoc.rev] = {
            data: doc.data,
            deleted: doc.metadata.deleted
        };
        return newDoc;
    }
    function update(txn, doc, oldDoc) {
        // Ignore updates to existing revisions
        if (doc.rev in oldDoc.revs && !opts.new_edits) return false;
        var isRoot = /^1-/.test(doc.rev);
        // Reattach first writes after a deletion to last deleted tree
        if (oldDoc.deleted && !doc.deleted && opts.new_edits && isRoot) {
            var tmp = doc.revs[doc.rev].data;
            tmp._rev = oldDoc.rev;
            tmp._id = oldDoc.id;
            doc = convertDocFormat(_pouchdbAdapterUtils.parseDoc(tmp, opts.new_edits, dbOpts));
        }
        var merged = _pouchdbMerge.merge(oldDoc.rev_tree, doc.rev_tree[0], docsRevsLimit(doc));
        doc.stemmedRevs = merged.stemmedRevs;
        doc.rev_tree = merged.tree;
        // Merge the old and new rev data
        var revs = oldDoc.revs;
        revs[doc.rev] = doc.revs[doc.rev];
        doc.revs = revs;
        doc.attachments = oldDoc.attachments;
        var inConflict = opts.new_edits && (oldDoc.deleted && doc.deleted || !oldDoc.deleted && merged.conflicts !== 'new_leaf' || oldDoc.deleted && !doc.deleted && merged.conflicts === 'new_branch' || oldDoc.rev === doc.rev);
        if (inConflict) return _pouchdbErrors.createError(_pouchdbErrors.REV_CONFLICT);
        doc.wasDeleted = oldDoc.deleted;
        return doc;
    }
    function write(txn, doc, i) {
        // We copy the data from the winning revision into the root
        // of the document so that it can be indexed
        var winningRev$$1 = _pouchdbMerge.winningRev(doc);
        // rev of new doc for attachments and to return it
        var writtenRev = doc.rev;
        var isLocal = /^_local/.test(doc.id);
        var theDoc = doc.revs[winningRev$$1].data;
        if (rewriteEnabled) {
            // doc.data is what we index, so we need to clone and rewrite it, and clean
            // it up for indexability
            var result = rewrite(theDoc);
            if (result) {
                doc.data = result;
                delete doc.data._attachments;
            } else doc.data = theDoc;
        } else doc.data = theDoc;
        doc.rev = winningRev$$1;
        // .deleted needs to be an int for indexing
        doc.deleted = doc.revs[winningRev$$1].deleted ? 1 : 0;
        // Bump the seq for every new (non local) revision written
        // TODO: index expects a unique seq, not sure if ignoring local will
        // work
        if (!isLocal) {
            doc.seq = ++metadata.seq;
            var delta = 0;
            // If its a new document, we wont decrement if deleted
            if (doc.isNewDoc) delta = doc.deleted ? 0 : 1;
            else if (doc.wasDeleted !== doc.deleted) delta = doc.deleted ? -1 : 1;
            metadata.doc_count += delta;
        }
        delete doc.isNewDoc;
        delete doc.wasDeleted;
        // If there have been revisions stemmed when merging trees,
        // delete their data
        if (doc.stemmedRevs) doc.stemmedRevs.forEach(function(rev) {
            delete doc.revs[rev];
        });
        delete doc.stemmedRevs;
        if (!('attachments' in doc)) doc.attachments = {
        };
        if (theDoc._attachments) for(var k in theDoc._attachments){
            var attachment = theDoc._attachments[k];
            if (attachment.stub) {
                if (!(attachment.digest in doc.attachments)) {
                    error = _pouchdbErrors.createError(_pouchdbErrors.MISSING_STUB);
                    // TODO: Not sure how safe this manual abort is, seeing
                    // console issues
                    txn.abort();
                    return;
                }
                doc.attachments[attachment.digest].revs[writtenRev] = true;
            } else {
                doc.attachments[attachment.digest] = attachment;
                doc.attachments[attachment.digest].revs = {
                };
                doc.attachments[attachment.digest].revs[writtenRev] = true;
                theDoc._attachments[k] = {
                    stub: true,
                    digest: attachment.digest,
                    content_type: attachment.content_type,
                    length: attachment.length,
                    revpos: parseInt(writtenRev, 10)
                };
            }
        }
        // Local documents have different revision handling
        if (isLocal && doc.deleted) {
            txn.objectStore(DOC_STORE).delete(doc.id).onsuccess = function() {
                results[i] = {
                    ok: true,
                    id: doc.id,
                    rev: '0-0'
                };
            };
            updateSeq(i);
            return;
        }
        txn.objectStore(DOC_STORE).put(doc).onsuccess = function() {
            results[i] = {
                ok: true,
                id: doc.id,
                rev: writtenRev
            };
            updateSeq(i);
        };
    }
    function updateSeq(i) {
        if (i === lastWriteIndex) txn1.objectStore(META_STORE).put(metadata);
    }
    function preProcessAttachment(attachment) {
        if (attachment.stub) return Promise.resolve(attachment);
        var binData;
        if (typeof attachment.data === 'string') {
            binData = parseBase64(attachment.data);
            if (binData.error) return Promise.reject(binData.error);
            attachment.data = _pouchdbBinaryUtils.binaryStringToBlobOrBuffer(binData, attachment.content_type);
        } else binData = attachment.data;
        return new Promise(function(resolve) {
            _pouchdbMd5.binaryMd5(binData, function(result) {
                attachment.digest = 'md5-' + result;
                attachment.length = binData.size || binData.length || 0;
                resolve(attachment);
            });
        });
    }
    function preProcessAttachments() {
        var promises = docs1.map(function(doc) {
            var data = doc.revs[doc.rev].data;
            if (!data._attachments) return Promise.resolve(data);
            var attachments = Object.keys(data._attachments).map(function(k) {
                data._attachments[k].name = k;
                return preProcessAttachment(data._attachments[k]);
            });
            return Promise.all(attachments).then(function(newAttachments) {
                var processed = {
                };
                newAttachments.forEach(function(attachment) {
                    processed[attachment.name] = attachment;
                    delete attachment.name;
                });
                data._attachments = processed;
                return data;
            });
        });
        return Promise.all(promises);
    }
    for(var i1 = 0, len = req.docs.length; i1 < len; i1++){
        var result1;
        // TODO: We should get rid of throwing for invalid docs, also not sure
        // why this is needed in idb-next and not idb
        try {
            result1 = _pouchdbAdapterUtils.parseDoc(req.docs[i1], opts.new_edits, dbOpts);
        } catch (err) {
            result1 = err;
        }
        if (result1.error) return callback(result1);
        // Ideally parseDoc would return data in this format, but it is currently
        // shared so we need to convert
        docs1.push(convertDocFormat(result1));
    }
    preProcessAttachments().then(function() {
        api._openTransactionSafely([
            DOC_STORE,
            META_STORE
        ], 'readwrite', function(err, _txn) {
            if (err) return callback(err);
            txn1 = _txn;
            txn1.onabort = function() {
                callback(error);
            };
            txn1.ontimeout = idbError(callback);
            txn1.oncomplete = function() {
                idbChanges.notify(dbOpts.name);
                callback(null, results);
            };
            // We would like to use promises here, but idb sucks
            fetchExistingDocs(txn1, docs1);
        });
    }).catch(function(err) {
        callback(err);
    });
}
function allDocsKeys(keys, docStore, allDocsInner) {
    // It's not guaranted to be returned in right order
    var valuesBatch = new Array(keys.length);
    var count = 0;
    keys.forEach(function(key, index) {
        docStore.get(key).onsuccess = function(event) {
            if (event.target.result) valuesBatch[index] = event.target.result;
            else valuesBatch[index] = {
                key: key,
                error: 'not_found'
            };
            count++;
            if (count === keys.length) valuesBatch.forEach(function(doc) {
                allDocsInner(doc);
            });
        };
    });
}
function createKeyRange(start, end, inclusiveEnd, key, descending) {
    try {
        if (start && end) {
            if (descending) return IDBKeyRange.bound(end, start, !inclusiveEnd, false);
            else return IDBKeyRange.bound(start, end, false, !inclusiveEnd);
        } else if (start) {
            if (descending) return IDBKeyRange.upperBound(start);
            else return IDBKeyRange.lowerBound(start);
        } else if (end) {
            if (descending) return IDBKeyRange.lowerBound(end, !inclusiveEnd);
            else return IDBKeyRange.upperBound(end, !inclusiveEnd);
        } else if (key) return IDBKeyRange.only(key);
    } catch (e) {
        return {
            error: e
        };
    }
    return null;
}
function handleKeyRangeError(opts, metadata, err, callback) {
    if (err.name === "DataError" && err.code === 0) {
        // data error, start is less than end
        var returnVal = {
            total_rows: metadata.doc_count,
            offset: opts.skip,
            rows: []
        };
        /* istanbul ignore if */ if (opts.update_seq) returnVal.update_seq = metadata.seq;
        return callback(null, returnVal);
    }
    callback(_pouchdbErrors.createError(_pouchdbErrors.IDB_ERROR, err.name, err.message));
}
function allDocs(txn, metadata, opts, callback) {
    if (txn.error) return callback(txn.error);
    // TODO: Weird hack, I dont like it
    if (opts.limit === 0) {
        var returnVal = {
            total_rows: metadata.doc_count,
            offset: opts.skip,
            rows: []
        };
        /* istanbul ignore if */ if (opts.update_seq) returnVal.update_seq = metadata.seq;
        return callback(null, returnVal);
    }
    var results = [];
    var processing = [];
    var start = 'startkey' in opts ? opts.startkey : false;
    var end = 'endkey' in opts ? opts.endkey : false;
    var key = 'key' in opts ? opts.key : false;
    var keys = 'keys' in opts ? opts.keys : false;
    var skip = opts.skip || 0;
    var limit = typeof opts.limit === 'number' ? opts.limit : -1;
    var inclusiveEnd = opts.inclusive_end !== false;
    var descending = 'descending' in opts && opts.descending ? 'prev' : null;
    var keyRange;
    if (!keys) {
        keyRange = createKeyRange(start, end, inclusiveEnd, key, descending);
        if (keyRange && keyRange.error) return handleKeyRangeError(opts, metadata, keyRange.error, callback);
    }
    var docStore = txn.txn.objectStore(DOC_STORE);
    txn.txn.oncomplete = onTxnComplete;
    if (keys) return allDocsKeys(opts.keys, docStore, allDocsInner);
    function include_doc(row, doc) {
        var docData = doc.revs[doc.rev].data;
        row.doc = docData;
        row.doc._id = doc.id;
        row.doc._rev = doc.rev;
        if (opts.conflicts) {
            var conflicts = _pouchdbMerge.collectConflicts(doc);
            if (conflicts.length) row.doc._conflicts = conflicts;
        }
        if (opts.attachments && docData._attachments) for(var name in docData._attachments)processing.push(processAttachment(name, doc, row.doc, opts.binary));
    }
    function allDocsInner(doc) {
        if (doc.error && keys) {
            // key was not found with "keys" requests
            results.push(doc);
            return true;
        }
        var row = {
            id: doc.id,
            key: doc.id,
            value: {
                rev: doc.rev
            }
        };
        var deleted = doc.deleted;
        if (deleted) {
            if (keys) {
                results.push(row);
                row.value.deleted = true;
                row.doc = null;
            }
        } else if (skip-- <= 0) {
            results.push(row);
            if (opts.include_docs) include_doc(row, doc);
            if (--limit === 0) return false;
        }
        return true;
    }
    function onTxnComplete() {
        Promise.all(processing).then(function() {
            var returnVal = {
                total_rows: metadata.doc_count,
                offset: 0,
                rows: results
            };
            /* istanbul ignore if */ if (opts.update_seq) returnVal.update_seq = metadata.seq;
            callback(null, returnVal);
        });
    }
    var cursor = descending ? docStore.openCursor(keyRange, descending) : docStore.openCursor(keyRange);
    cursor.onsuccess = function(e) {
        var doc = e.target.result && e.target.result.value;
        // Happens if opts does not have limit,
        // because cursor will end normally then,
        // when all docs are retrieved.
        // Would not be needed, if getAll() optimization was used like in #6059
        if (!doc) return;
        // Skip local docs
        if (/^_local/.test(doc.id)) return e.target.result.continue();
        var continueCursor = allDocsInner(doc);
        if (continueCursor) e.target.result.continue();
    };
}
function changes(txn, idbChanges, api, dbOpts, opts) {
    if (txn.error) return opts.complete(txn.error);
    if (opts.continuous) {
        var id = dbOpts.name + ':' + _pouchdbUtils.uuid();
        idbChanges.addListener(dbOpts.name, id, api, opts);
        idbChanges.notify(dbOpts.name);
        return {
            cancel: function() {
                idbChanges.removeListener(dbOpts.name, id);
            }
        };
    }
    var limit = 'limit' in opts ? opts.limit : -1;
    if (limit === 0) limit = 1;
    var store = txn.txn.objectStore(DOC_STORE).index('seq');
    var filter = _pouchdbUtils.filterChange(opts);
    var received = 0;
    var lastSeq = opts.since || 0;
    var results = [];
    var processing = [];
    function onReqSuccess(e) {
        if (!e.target.result) return;
        var cursor = e.target.result;
        var doc = cursor.value;
        // Overwrite doc.data, which may have been rewritten (see rewrite.js) with
        // the clean version for that rev
        doc.data = doc.revs[doc.rev].data;
        doc.data._id = doc.id;
        doc.data._rev = doc.rev;
        if (doc.deleted) doc.data._deleted = true;
        if (opts.doc_ids && opts.doc_ids.indexOf(doc.id) === -1) return cursor.continue();
        // WARNING: expecting possible old format
        var change = opts.processChange(doc.data, doc, opts);
        change.seq = doc.seq;
        lastSeq = doc.seq;
        var filtered = filter(change);
        // If its an error
        if (typeof filtered === 'object') return opts.complete(filtered);
        if (filtered) {
            received++;
            if (opts.return_docs) results.push(change);
            if (opts.include_docs && opts.attachments && doc.data._attachments) {
                var promises = [];
                for(var name in doc.data._attachments){
                    var p = processAttachment(name, doc, change.doc, opts.binary);
                    // We add the processing promise to 2 arrays, one tracks all
                    // the promises needed before we fire onChange, the other
                    // ensure we process all attachments before onComplete
                    promises.push(p);
                    processing.push(p);
                }
                Promise.all(promises).then(function() {
                    opts.onChange(change);
                });
            } else opts.onChange(change);
        }
        if (received !== limit) cursor.continue();
    }
    function onTxnComplete() {
        Promise.all(processing).then(function() {
            opts.complete(null, {
                results: results,
                last_seq: lastSeq
            });
        });
    }
    var req;
    if (opts.descending) req = store.openCursor(null, 'prev');
    else req = store.openCursor(IDBKeyRange.lowerBound(opts.since, true));
    txn.txn.oncomplete = onTxnComplete;
    req.onsuccess = onReqSuccess;
}
function getRevisionTree(txn, id, callback) {
    if (txn.error) return callback(txn.error);
    var req = txn.txn.objectStore(DOC_STORE).get(id);
    req.onsuccess = function(e) {
        if (!e.target.result) callback(_pouchdbErrors.createError(_pouchdbErrors.MISSING_DOC));
        else callback(null, e.target.result.rev_tree);
    };
}
function doCompaction(txn, id, revs, callback) {
    if (txn.error) return callback(txn.error);
    var docStore = txn.txn.objectStore(DOC_STORE);
    docStore.get(id).onsuccess = function(e) {
        var doc = e.target.result;
        _pouchdbMerge.traverseRevTree(doc.rev_tree, function(isLeaf, pos, revHash, ctx, opts) {
            var rev = pos + '-' + revHash;
            if (revs.indexOf(rev) !== -1) opts.status = 'missing';
        });
        var attachments = [];
        revs.forEach(function(rev) {
            if (rev in doc.revs) {
                // Make a list of attachments that are used by the revisions being
                // deleted
                if (doc.revs[rev].data._attachments) for(var k in doc.revs[rev].data._attachments)attachments.push(doc.revs[rev].data._attachments[k].digest);
                delete doc.revs[rev];
            }
        });
        // Attachments have a list of revisions that are using them, when
        // that list becomes empty we can delete the attachment.
        attachments.forEach(function(digest) {
            revs.forEach(function(rev) {
                delete doc.attachments[digest].revs[rev];
            });
            if (!Object.keys(doc.attachments[digest].revs).length) delete doc.attachments[digest];
        });
        docStore.put(doc);
    };
    txn.txn.oncomplete = function() {
        callback();
    };
}
function destroy(dbOpts, openDatabases, idbChanges, callback) {
    idbChanges.removeAllListeners(dbOpts.name);
    function doDestroy() {
        var req = indexedDB.deleteDatabase(dbOpts.name);
        req.onsuccess = function() {
            delete openDatabases[dbOpts.name];
            callback(null, {
                ok: true
            });
        };
    }
    // If the database is open we need to close it
    if (dbOpts.name in openDatabases) openDatabases[dbOpts.name].then(function(res) {
        res.idb.close();
        doDestroy();
    });
    else doDestroy();
}
// Adapted from
// https://github.com/pouchdb/pouchdb/blob/master/packages/node_modules/pouchdb-find/src/adapters/local/find/query-planner.js#L20-L24
// This could change / improve in the future?
var COUCH_COLLATE_LO = null;
var COUCH_COLLATE_HI = '\uffff'; // actually used as {"\uffff": {}}
// Adapted from: https://www.w3.org/TR/IndexedDB/#compare-two-keys
// Importantly, *there is no upper bound possible* in idb. The ideal data
// structure an infintely deep array:
//   var IDB_COLLATE_HI = []; IDB_COLLATE_HI.push(IDB_COLLATE_HI)
// But IDBKeyRange is not a fan of shenanigans, so I've just gone with 12 layers
// because it looks nice and surely that's enough!
var IDB_COLLATE_LO = Number.NEGATIVE_INFINITY;
var IDB_COLLATE_HI = [
    [
        [
            [
                [
                    [
                        [
                            [
                                [
                                    [
                                        [
                                            []
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ]
    ]
];
//
// TODO: this should be made offical somewhere and used by AllDocs / get /
// changes etc as well.
//
function externaliseRecord(idbDoc) {
    var doc = idbDoc.revs[idbDoc.rev].data;
    doc._id = idbDoc.id;
    doc._rev = idbDoc.rev;
    if (idbDoc.deleted) doc._deleted = true;
    return doc;
}
/**
 * Generates a keyrange based on the opts passed to query
 *
 * The first key is always 0, as that's how we're filtering out deleted entries.
 */ function generateKeyRange(opts) {
    function defined(obj, k) {
        return obj[k] !== void 0;
    }
    // Converts a valid CouchDB key into a valid IndexedDB one
    function convert(key, exact) {
        // The first item in every native index is doc.deleted, and we always want
        // to only search documents that are not deleted.
        // "foo" -> [0, "foo"]
        var filterDeleted = [
            0
        ].concat(key);
        return filterDeleted.map(function(k) {
            // null, true and false are not indexable by indexeddb. When we write
            // these values we convert them to these constants, and so when we
            // query for them we need to convert the query also.
            if (k === null && exact) // for non-exact queries we treat null as a collate property
            // see `if (!exact)` block below
            return IDB_NULL;
            else if (k === true) return IDB_TRUE;
            else if (k === false) return IDB_FALSE;
            if (!exact) {
                // We get passed CouchDB's collate low and high values, so for non-exact
                // ranged queries we're going to convert them to our IDB equivalents
                if (k === COUCH_COLLATE_LO) return IDB_COLLATE_LO;
                else if (k.hasOwnProperty(COUCH_COLLATE_HI)) return IDB_COLLATE_HI;
            }
            return k;
        });
    }
    // CouchDB and so PouchdB defaults to true. We need to make this explicit as
    // we invert these later for IndexedDB.
    if (!defined(opts, 'inclusive_end')) opts.inclusive_end = true;
    if (!defined(opts, 'inclusive_start')) opts.inclusive_start = true;
    if (opts.descending) {
        // Flip before generating. We'll check descending again later when performing
        // an index request
        var realEndkey = opts.startkey, realInclusiveEnd = opts.inclusive_start;
        opts.startkey = opts.endkey;
        opts.endkey = realEndkey;
        opts.inclusive_start = opts.inclusive_end;
        opts.inclusive_end = realInclusiveEnd;
    }
    try {
        if (defined(opts, 'key')) return IDBKeyRange.only(convert(opts.key, true));
        if (defined(opts, 'startkey') && !defined(opts, 'endkey')) return IDBKeyRange.lowerBound(convert(opts.startkey), !opts.inclusive_start);
        if (!defined(opts, 'startkey') && defined(opts, 'endkey')) return IDBKeyRange.upperBound(convert(opts.endkey), !opts.inclusive_end);
        if (defined(opts, 'startkey') && defined(opts, 'endkey')) return IDBKeyRange.bound(convert(opts.startkey), convert(opts.endkey), !opts.inclusive_start, !opts.inclusive_end);
        return IDBKeyRange.only([
            0
        ]);
    } catch (err) {
        console.error('Could not generate keyRange', err, opts);
        throw Error('Could not generate key range with ' + JSON.stringify(opts));
    }
}
function getIndexHandle(pdb, fields, reject) {
    var indexName = naturalIndexName(fields);
    return new Promise(function(resolve) {
        pdb._openTransactionSafely([
            DOC_STORE
        ], 'readonly', function(err, txn) {
            if (err) return idbError(reject)(err);
            txn.onabort = idbError(reject);
            txn.ontimeout = idbError(reject);
            var existingIndexNames = Array.from(txn.objectStore(DOC_STORE).indexNames);
            if (existingIndexNames.indexOf(indexName) === -1) // The index is missing, force a db restart and try again
            pdb._freshen().then(function() {
                return getIndexHandle(pdb, fields, reject);
            }).then(resolve);
            else resolve(txn.objectStore(DOC_STORE).index(indexName));
        });
    });
}
// In theory we should return something like the doc example below, but find
// only needs rows: [{doc: {...}}], so I think we can just not bother for now
// {
//   "offset" : 0,
//   "rows": [{
//     "id": "doc3",
//     "key": "Lisa Says",
//     "value": null,
//     "doc": {
//       "_id": "doc3",
//       "_rev": "1-z",
//       "title": "Lisa Says"
//     }
//   }],
//   "total_rows" : 4
// }
function query(idb, signature, opts) {
    // At this stage, in the current implementation, find has already gone through
    // and determined if the index already exists from PouchDB's perspective (eg
    // there is a design doc for it).
    //
    // If we find that the index doesn't exist this means we have to close and
    // re-open the DB to correct indexes before proceeding, at which point the
    // index should exist.
    var pdb = this;
    // Assumption, there will be only one /, between the design document name
    // and the view name.
    var parts = signature.split('/');
    return new Promise(function(resolve, reject) {
        pdb.get('_design/' + parts[0]).then(function(ddoc) {
            var fields = rawIndexFields(ddoc, parts[1]);
            if (!fields) throw new Error('ddoc ' + ddoc._id + ' with view ' + parts[1] + ' does not have map.options.def.fields defined.');
            var skip = opts.skip;
            var limit = Number.isInteger(opts.limit) && opts.limit;
            return getIndexHandle(pdb, fields, reject).then(function(indexHandle) {
                var keyRange = generateKeyRange(opts);
                var req = indexHandle.openCursor(keyRange, opts.descending ? 'prev' : 'next');
                var rows = [];
                req.onerror = idbError(reject);
                req.onsuccess = function(e) {
                    var cursor = e.target.result;
                    if (!cursor || limit === 0) return resolve({
                        rows: rows
                    });
                    if (skip) {
                        cursor.advance(skip);
                        skip = false;
                        return;
                    }
                    if (limit) limit = limit - 1;
                    rows.push({
                        doc: externaliseRecord(cursor.value)
                    });
                    cursor.continue();
                };
            });
        }).catch(reject);
    });
}
function viewCleanup() {
    // I'm not sure we have to do anything here.
    //
    // One option is to just close and re-open the DB, which performs the same
    // action. The only reason you'd want to call this is if you deleted a bunch
    // of indexes and wanted the space back immediately.
    //
    // Otherwise index cleanup happens when:
    //  - A DB is opened
    //  - A find query is performed against an index that doesn't exist but should
    return Promise.resolve();
}
var ADAPTER_NAME = 'indexeddb';
// TODO: Constructor should be capitalised
var idbChanges1 = new _pouchdbUtils.changesHandler();
// A shared list of database handles
var openDatabases1 = {
};
function IdbPouch(dbOpts, callback1) {
    var api = this;
    var metadata = {
    };
    // Wrapper that gives you an active DB handle. You probably want $t.
    var $ = function(fun) {
        return function() {
            var args = Array.prototype.slice.call(arguments);
            setup(openDatabases1, api, dbOpts).then(function(res) {
                metadata = res.metadata;
                args.unshift(res.idb);
                fun.apply(api, args);
            }).catch(function(err) {
                var last = args.unshift();
                if (typeof last === 'function') last(err);
                else console.error(err);
            });
        };
    };
    // the promise version of $
    var $p = function(fun) {
        return function() {
            var args = Array.prototype.slice.call(arguments);
            return new Promise(function(resolve, reject) {
                setup(openDatabases1, api, dbOpts).then(function(res) {
                    metadata = res.metadata;
                    args.unshift(res.idb);
                    return fun.apply(api, args);
                }).then(resolve).catch(reject);
            });
        };
    };
    // Wrapper that gives you a safe transaction handle. It's important to use
    // this instead of opening your own transaction from a db handle got from $,
    // because in the time between getting the db handle and opening the
    // transaction it may have been invalidated by index changes.
    var $t = function(fun, stores, mode) {
        stores = stores || [
            DOC_STORE
        ];
        mode = mode || 'readonly';
        return function() {
            var args = Array.prototype.slice.call(arguments);
            var txn = {
            };
            setup(openDatabases1, api, dbOpts).then(function(res) {
                metadata = res.metadata;
                txn.txn = res.idb.transaction(stores, mode);
                args.unshift(txn);
                fun.apply(api, args);
            }).catch(function(err) {
                console.error('Failed to establish transaction safely');
                console.error(err);
                txn.error = err;
            });
        };
    };
    api._openTransactionSafely = function(stores, mode, callback2) {
        $t(function(txn, callback) {
            callback(txn.error, txn.txn);
        }, stores, mode)(callback2);
    };
    api._remote = false;
    api.type = function() {
        return ADAPTER_NAME;
    };
    api._id = $(function(_, cb) {
        cb(null, metadata.db_uuid);
    });
    api._info = $(function(_, cb) {
        return info(metadata, cb);
    });
    api._get = $t(get);
    api._bulkDocs = $(function(_, req, opts, callback) {
        bulkDocs(api, req, opts, metadata, dbOpts, idbChanges1, callback);
    });
    api._allDocs = $t(function(txn, opts, cb) {
        allDocs(txn, metadata, opts, cb);
    });
    api._getAttachment = $t(getAttachment);
    api._changes = $t(function(txn, opts) {
        changes(txn, idbChanges1, api, dbOpts, opts);
    });
    api._getRevisionTree = $t(getRevisionTree);
    api._doCompaction = $t(doCompaction, [
        DOC_STORE
    ], 'readwrite');
    api._customFindAbstractMapper = {
        query: $p(query),
        viewCleanup: $p(viewCleanup)
    };
    api._destroy = function(opts, callback) {
        return destroy(dbOpts, openDatabases1, idbChanges1, callback);
    };
    api._close = $(function(db, cb) {
        delete openDatabases1[dbOpts.name];
        db.close();
        cb();
    });
    // Closing and re-opening the DB re-generates native indexes
    api._freshen = function() {
        return new Promise(function(resolve) {
            api._close(function() {
                $(resolve)();
            });
        });
    };
    // TODO: this setTimeout seems nasty, if its needed lets
    // figure out / explain why
    setTimeout(function() {
        callback1(null, api);
    });
}
// TODO: this isnt really valid permanently, just being lazy to start
IdbPouch.valid = function() {
    return true;
};
function index1(PouchDB) {
    PouchDB.adapter(ADAPTER_NAME, IdbPouch, true);
}
exports.default = index1;

},{"pouchdb-binary-utils":"lzkbJ","pouchdb-adapter-utils":"cxjBB","pouchdb-md5":"lD4Fr","pouchdb-utils":"eWppo","pouchdb-errors":"alywA","pouchdb-merge":"13CY1","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cxjBB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "invalidIdError", ()=>_pouchdbUtils.invalidIdError
);
parcelHelpers.export(exports, "normalizeDdocFunctionName", ()=>_pouchdbUtils.normalizeDdocFunctionName
);
parcelHelpers.export(exports, "parseDdocFunctionName", ()=>_pouchdbUtils.parseDdocFunctionName
);
parcelHelpers.export(exports, "isDeleted", ()=>_pouchdbMerge.isDeleted
);
parcelHelpers.export(exports, "isLocalId", ()=>_pouchdbMerge.isLocalId
);
parcelHelpers.export(exports, "allDocsKeysQuery", ()=>allDocsKeysQuery
);
parcelHelpers.export(exports, "parseDoc", ()=>parseDoc
);
parcelHelpers.export(exports, "preprocessAttachments", ()=>preprocessAttachments
);
parcelHelpers.export(exports, "processDocs", ()=>processDocs
);
parcelHelpers.export(exports, "updateDoc", ()=>updateDoc
);
var _pouchdbUtils = require("pouchdb-utils");
var _pouchdbBinaryUtils = require("pouchdb-binary-utils");
var _pouchdbMd5 = require("pouchdb-md5");
var _pouchdbCollections = require("pouchdb-collections");
var _pouchdbErrors = require("pouchdb-errors");
var _pouchdbMerge = require("pouchdb-merge");
function allDocsKeysQuery(api, opts) {
    var keys = opts.keys;
    var finalResults = {
        offset: opts.skip
    };
    return Promise.all(keys.map(function(key) {
        var subOpts = _pouchdbUtils.assign({
            key: key,
            deleted: 'ok'
        }, opts);
        [
            'limit',
            'skip',
            'keys'
        ].forEach(function(optKey) {
            delete subOpts[optKey];
        });
        return new Promise(function(resolve, reject) {
            api._allDocs(subOpts, function(err, res) {
                /* istanbul ignore if */ if (err) return reject(err);
                /* istanbul ignore if */ if (opts.update_seq && res.update_seq !== undefined) finalResults.update_seq = res.update_seq;
                finalResults.total_rows = res.total_rows;
                resolve(res.rows[0] || {
                    key: key,
                    error: 'not_found'
                });
            });
        });
    })).then(function(results) {
        finalResults.rows = results;
        return finalResults;
    });
}
function toObject(array) {
    return array.reduce(function(obj, item) {
        obj[item] = true;
        return obj;
    }, {
    });
}
// List of top level reserved words for doc
var reservedWords = toObject([
    '_id',
    '_rev',
    '_attachments',
    '_deleted',
    '_revisions',
    '_revs_info',
    '_conflicts',
    '_deleted_conflicts',
    '_local_seq',
    '_rev_tree',
    //replication documents
    '_replication_id',
    '_replication_state',
    '_replication_state_time',
    '_replication_state_reason',
    '_replication_stats',
    // Specific to Couchbase Sync Gateway
    '_removed'
]);
// List of reserved words that should end up the document
var dataWords = toObject([
    '_attachments',
    //replication documents
    '_replication_id',
    '_replication_state',
    '_replication_state_time',
    '_replication_state_reason',
    '_replication_stats'
]);
function parseRevisionInfo(rev$$1) {
    if (!/^\d+-/.test(rev$$1)) return _pouchdbErrors.createError(_pouchdbErrors.INVALID_REV);
    var idx = rev$$1.indexOf('-');
    var left = rev$$1.substring(0, idx);
    var right = rev$$1.substring(idx + 1);
    return {
        prefix: parseInt(left, 10),
        id: right
    };
}
function makeRevTreeFromRevisions(revisions, opts) {
    var pos = revisions.start - revisions.ids.length + 1;
    var revisionIds = revisions.ids;
    var ids = [
        revisionIds[0],
        opts,
        []
    ];
    for(var i = 1, len = revisionIds.length; i < len; i++)ids = [
        revisionIds[i],
        {
            status: 'missing'
        },
        [
            ids
        ]
    ];
    return [
        {
            pos: pos,
            ids: ids
        }
    ];
}
// Preprocess documents, parse their revisions, assign an id and a
// revision for new writes that are missing them, etc
function parseDoc(doc, newEdits, dbOpts) {
    if (!dbOpts) dbOpts = {
        deterministic_revs: true
    };
    var nRevNum;
    var newRevId;
    var revInfo;
    var opts = {
        status: 'available'
    };
    if (doc._deleted) opts.deleted = true;
    if (newEdits) {
        if (!doc._id) doc._id = _pouchdbUtils.uuid();
        newRevId = _pouchdbUtils.rev(doc, dbOpts.deterministic_revs);
        if (doc._rev) {
            revInfo = parseRevisionInfo(doc._rev);
            if (revInfo.error) return revInfo;
            doc._rev_tree = [
                {
                    pos: revInfo.prefix,
                    ids: [
                        revInfo.id,
                        {
                            status: 'missing'
                        },
                        [
                            [
                                newRevId,
                                opts,
                                []
                            ]
                        ]
                    ]
                }
            ];
            nRevNum = revInfo.prefix + 1;
        } else {
            doc._rev_tree = [
                {
                    pos: 1,
                    ids: [
                        newRevId,
                        opts,
                        []
                    ]
                }
            ];
            nRevNum = 1;
        }
    } else {
        if (doc._revisions) {
            doc._rev_tree = makeRevTreeFromRevisions(doc._revisions, opts);
            nRevNum = doc._revisions.start;
            newRevId = doc._revisions.ids[0];
        }
        if (!doc._rev_tree) {
            revInfo = parseRevisionInfo(doc._rev);
            if (revInfo.error) return revInfo;
            nRevNum = revInfo.prefix;
            newRevId = revInfo.id;
            doc._rev_tree = [
                {
                    pos: nRevNum,
                    ids: [
                        newRevId,
                        opts,
                        []
                    ]
                }
            ];
        }
    }
    _pouchdbUtils.invalidIdError(doc._id);
    doc._rev = nRevNum + '-' + newRevId;
    var result = {
        metadata: {
        },
        data: {
        }
    };
    for(var key in doc)/* istanbul ignore else */ if (Object.prototype.hasOwnProperty.call(doc, key)) {
        var specialKey = key[0] === '_';
        if (specialKey && !reservedWords[key]) {
            var error = _pouchdbErrors.createError(_pouchdbErrors.DOC_VALIDATION, key);
            error.message = _pouchdbErrors.DOC_VALIDATION.message + ': ' + key;
            throw error;
        } else if (specialKey && !dataWords[key]) result.metadata[key.slice(1)] = doc[key];
        else result.data[key] = doc[key];
    }
    return result;
}
function parseBase64(data) {
    try {
        return _pouchdbBinaryUtils.atob(data);
    } catch (e) {
        var err = _pouchdbErrors.createError(_pouchdbErrors.BAD_ARG, 'Attachment is not a valid base64 string');
        return {
            error: err
        };
    }
}
function preprocessString(att, blobType, callback) {
    var asBinary = parseBase64(att.data);
    if (asBinary.error) return callback(asBinary.error);
    att.length = asBinary.length;
    if (blobType === 'blob') att.data = _pouchdbBinaryUtils.binaryStringToBlobOrBuffer(asBinary, att.content_type);
    else if (blobType === 'base64') att.data = _pouchdbBinaryUtils.btoa(asBinary);
    else att.data = asBinary;
    _pouchdbMd5.binaryMd5(asBinary, function(result) {
        att.digest = 'md5-' + result;
        callback();
    });
}
function preprocessBlob(att, blobType, callback) {
    _pouchdbMd5.binaryMd5(att.data, function(md5) {
        att.digest = 'md5-' + md5;
        // size is for blobs (browser), length is for buffers (node)
        att.length = att.data.size || att.data.length || 0;
        if (blobType === 'binary') _pouchdbBinaryUtils.blobOrBufferToBinaryString(att.data, function(binString) {
            att.data = binString;
            callback();
        });
        else if (blobType === 'base64') _pouchdbBinaryUtils.blobOrBufferToBase64(att.data, function(b64) {
            att.data = b64;
            callback();
        });
        else callback();
    });
}
function preprocessAttachment(att, blobType, callback) {
    if (att.stub) return callback();
    if (typeof att.data === 'string') preprocessString(att, blobType, callback);
    else preprocessBlob(att, blobType, callback);
}
function preprocessAttachments(docInfos, blobType, callback) {
    if (!docInfos.length) return callback();
    var docv = 0;
    var overallErr;
    docInfos.forEach(function(docInfo) {
        var attachments = docInfo.data && docInfo.data._attachments ? Object.keys(docInfo.data._attachments) : [];
        var recv = 0;
        if (!attachments.length) return done();
        function processedAttachment(err) {
            overallErr = err;
            recv++;
            if (recv === attachments.length) done();
        }
        for(var key in docInfo.data._attachments)if (docInfo.data._attachments.hasOwnProperty(key)) preprocessAttachment(docInfo.data._attachments[key], blobType, processedAttachment);
    });
    function done() {
        docv++;
        if (docInfos.length === docv) {
            if (overallErr) callback(overallErr);
            else callback();
        }
    }
}
function updateDoc(revLimit, prev, docInfo, results, i, cb, writeDoc, newEdits) {
    if (_pouchdbMerge.revExists(prev.rev_tree, docInfo.metadata.rev) && !newEdits) {
        results[i] = docInfo;
        return cb();
    }
    // sometimes this is pre-calculated. historically not always
    var previousWinningRev = prev.winningRev || _pouchdbMerge.winningRev(prev);
    var previouslyDeleted = 'deleted' in prev ? prev.deleted : _pouchdbMerge.isDeleted(prev, previousWinningRev);
    var deleted = 'deleted' in docInfo.metadata ? docInfo.metadata.deleted : _pouchdbMerge.isDeleted(docInfo.metadata);
    var isRoot = /^1-/.test(docInfo.metadata.rev);
    if (previouslyDeleted && !deleted && newEdits && isRoot) {
        var newDoc = docInfo.data;
        newDoc._rev = previousWinningRev;
        newDoc._id = docInfo.metadata.id;
        docInfo = parseDoc(newDoc, newEdits);
    }
    var merged = _pouchdbMerge.merge(prev.rev_tree, docInfo.metadata.rev_tree[0], revLimit);
    var inConflict = newEdits && (previouslyDeleted && deleted && merged.conflicts !== 'new_leaf' || !previouslyDeleted && merged.conflicts !== 'new_leaf' || previouslyDeleted && !deleted && merged.conflicts === 'new_branch');
    if (inConflict) {
        var err = _pouchdbErrors.createError(_pouchdbErrors.REV_CONFLICT);
        results[i] = err;
        return cb();
    }
    var newRev = docInfo.metadata.rev;
    docInfo.metadata.rev_tree = merged.tree;
    docInfo.stemmedRevs = merged.stemmedRevs || [];
    /* istanbul ignore else */ if (prev.rev_map) docInfo.metadata.rev_map = prev.rev_map; // used only by leveldb
    // recalculate
    var winningRev$$1 = _pouchdbMerge.winningRev(docInfo.metadata);
    var winningRevIsDeleted = _pouchdbMerge.isDeleted(docInfo.metadata, winningRev$$1);
    // calculate the total number of documents that were added/removed,
    // from the perspective of total_rows/doc_count
    var delta = previouslyDeleted === winningRevIsDeleted ? 0 : previouslyDeleted < winningRevIsDeleted ? -1 : 1;
    var newRevIsDeleted;
    if (newRev === winningRev$$1) // if the new rev is the same as the winning rev, we can reuse that value
    newRevIsDeleted = winningRevIsDeleted;
    else // if they're not the same, then we need to recalculate
    newRevIsDeleted = _pouchdbMerge.isDeleted(docInfo.metadata, newRev);
    writeDoc(docInfo, winningRev$$1, winningRevIsDeleted, newRevIsDeleted, true, delta, i, cb);
}
function rootIsMissing(docInfo) {
    return docInfo.metadata.rev_tree[0].ids[1].status === 'missing';
}
function processDocs(revLimit, docInfos, api, fetchedDocs, tx, results, writeDoc, opts, overallCallback) {
    // Default to 1000 locally
    revLimit = revLimit || 1000;
    function insertDoc(docInfo, resultsIdx, callback) {
        // Cant insert new deleted documents
        var winningRev$$1 = _pouchdbMerge.winningRev(docInfo.metadata);
        var deleted = _pouchdbMerge.isDeleted(docInfo.metadata, winningRev$$1);
        if ('was_delete' in opts && deleted) {
            results[resultsIdx] = _pouchdbErrors.createError(_pouchdbErrors.MISSING_DOC, 'deleted');
            return callback();
        }
        // 4712 - detect whether a new document was inserted with a _rev
        var inConflict = newEdits && rootIsMissing(docInfo);
        if (inConflict) {
            var err = _pouchdbErrors.createError(_pouchdbErrors.REV_CONFLICT);
            results[resultsIdx] = err;
            return callback();
        }
        var delta = deleted ? 0 : 1;
        writeDoc(docInfo, winningRev$$1, deleted, deleted, false, delta, resultsIdx, callback);
    }
    var newEdits = opts.new_edits;
    var idsToDocs = new _pouchdbCollections.Map();
    var docsDone = 0;
    var docsToDo = docInfos.length;
    function checkAllDocsDone() {
        if (++docsDone === docsToDo && overallCallback) overallCallback();
    }
    docInfos.forEach(function(currentDoc, resultsIdx) {
        if (currentDoc._id && _pouchdbMerge.isLocalId(currentDoc._id)) {
            var fun = currentDoc._deleted ? '_removeLocal' : '_putLocal';
            api[fun](currentDoc, {
                ctx: tx
            }, function(err, res) {
                results[resultsIdx] = err || res;
                checkAllDocsDone();
            });
            return;
        }
        var id = currentDoc.metadata.id;
        if (idsToDocs.has(id)) {
            docsToDo--; // duplicate
            idsToDocs.get(id).push([
                currentDoc,
                resultsIdx
            ]);
        } else idsToDocs.set(id, [
            [
                currentDoc,
                resultsIdx
            ]
        ]);
    });
    // in the case of new_edits, the user can provide multiple docs
    // with the same id. these need to be processed sequentially
    idsToDocs.forEach(function(docs, id) {
        var numDone = 0;
        function docWritten() {
            if (++numDone < docs.length) nextDoc();
            else checkAllDocsDone();
        }
        function nextDoc() {
            var value = docs[numDone];
            var currentDoc = value[0];
            var resultsIdx = value[1];
            if (fetchedDocs.has(id)) updateDoc(revLimit, fetchedDocs.get(id), currentDoc, results, resultsIdx, docWritten, writeDoc, newEdits);
            else {
                // Ensure stemming applies to new writes as well
                var merged = _pouchdbMerge.merge([], currentDoc.metadata.rev_tree[0], revLimit);
                currentDoc.metadata.rev_tree = merged.tree;
                currentDoc.stemmedRevs = merged.stemmedRevs || [];
                insertDoc(currentDoc, resultsIdx, docWritten);
            }
        }
        nextDoc();
    });
}

},{"pouchdb-utils":"eWppo","pouchdb-binary-utils":"lzkbJ","pouchdb-md5":"lD4Fr","pouchdb-collections":"enQVE","pouchdb-errors":"alywA","pouchdb-merge":"13CY1","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"13CY1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "collectConflicts", ()=>collectConflicts
);
parcelHelpers.export(exports, "collectLeaves", ()=>collectLeaves
);
parcelHelpers.export(exports, "compactTree", ()=>compactTree
);
parcelHelpers.export(exports, "isDeleted", ()=>isDeleted
);
parcelHelpers.export(exports, "isLocalId", ()=>isLocalId
);
parcelHelpers.export(exports, "merge", ()=>merge
);
parcelHelpers.export(exports, "revExists", ()=>revExists
);
parcelHelpers.export(exports, "rootToLeaf", ()=>rootToLeaf
);
parcelHelpers.export(exports, "traverseRevTree", ()=>traverseRevTree
);
parcelHelpers.export(exports, "winningRev", ()=>winningRev
);
parcelHelpers.export(exports, "latest", ()=>latest
);
// We fetch all leafs of the revision tree, and sort them based on tree length
// and whether they were deleted, undeleted documents with the longest revision
// tree (most edits) win
// The final sort algorithm is slightly documented in a sidebar here:
// http://guide.couchdb.org/draft/conflicts.html
function winningRev(metadata) {
    var winningId;
    var winningPos;
    var winningDeleted;
    var toVisit = metadata.rev_tree.slice();
    var node;
    while(node = toVisit.pop()){
        var tree = node.ids;
        var branches = tree[2];
        var pos = node.pos;
        if (branches.length) {
            for(var i = 0, len = branches.length; i < len; i++)toVisit.push({
                pos: pos + 1,
                ids: branches[i]
            });
            continue;
        }
        var deleted = !!tree[1].deleted;
        var id = tree[0];
        // sort by deleted, then pos, then id
        if (!winningId || (winningDeleted !== deleted ? winningDeleted : winningPos !== pos ? winningPos < pos : winningId < id)) {
            winningId = id;
            winningPos = pos;
            winningDeleted = deleted;
        }
    }
    return winningPos + '-' + winningId;
}
// Pretty much all below can be combined into a higher order function to
// traverse revisions
// The return value from the callback will be passed as context to all
// children of that node
function traverseRevTree(revs, callback) {
    var toVisit = revs.slice();
    var node;
    while(node = toVisit.pop()){
        var pos = node.pos;
        var tree = node.ids;
        var branches = tree[2];
        var newCtx = callback(branches.length === 0, pos, tree[0], node.ctx, tree[1]);
        for(var i = 0, len = branches.length; i < len; i++)toVisit.push({
            pos: pos + 1,
            ids: branches[i],
            ctx: newCtx
        });
    }
}
function sortByPos(a, b) {
    return a.pos - b.pos;
}
function collectLeaves(revs) {
    var leaves = [];
    traverseRevTree(revs, function(isLeaf, pos, id, acc, opts) {
        if (isLeaf) leaves.push({
            rev: pos + "-" + id,
            pos: pos,
            opts: opts
        });
    });
    leaves.sort(sortByPos).reverse();
    for(var i = 0, len = leaves.length; i < len; i++)delete leaves[i].pos;
    return leaves;
}
// returns revs of all conflicts that is leaves such that
// 1. are not deleted and
// 2. are different than winning revision
function collectConflicts(metadata) {
    var win = winningRev(metadata);
    var leaves = collectLeaves(metadata.rev_tree);
    var conflicts = [];
    for(var i = 0, len = leaves.length; i < len; i++){
        var leaf = leaves[i];
        if (leaf.rev !== win && !leaf.opts.deleted) conflicts.push(leaf.rev);
    }
    return conflicts;
}
// compact a tree by marking its non-leafs as missing,
// and return a list of revs to delete
function compactTree(metadata) {
    var revs = [];
    traverseRevTree(metadata.rev_tree, function(isLeaf, pos, revHash, ctx, opts) {
        if (opts.status === 'available' && !isLeaf) {
            revs.push(pos + '-' + revHash);
            opts.status = 'missing';
        }
    });
    return revs;
}
// build up a list of all the paths to the leafs in this revision tree
function rootToLeaf(revs) {
    var paths = [];
    var toVisit = revs.slice();
    var node;
    while(node = toVisit.pop()){
        var pos = node.pos;
        var tree = node.ids;
        var id = tree[0];
        var opts = tree[1];
        var branches = tree[2];
        var isLeaf = branches.length === 0;
        var history = node.history ? node.history.slice() : [];
        history.push({
            id: id,
            opts: opts
        });
        if (isLeaf) paths.push({
            pos: pos + 1 - history.length,
            ids: history
        });
        for(var i = 0, len = branches.length; i < len; i++)toVisit.push({
            pos: pos + 1,
            ids: branches[i],
            history: history
        });
    }
    return paths.reverse();
}
// for a better overview of what this is doing, read:
function sortByPos$1(a, b) {
    return a.pos - b.pos;
}
// classic binary search
function binarySearch(arr, item, comparator) {
    var low = 0;
    var high = arr.length;
    var mid;
    while(low < high){
        mid = low + high >>> 1;
        if (comparator(arr[mid], item) < 0) low = mid + 1;
        else high = mid;
    }
    return low;
}
// assuming the arr is sorted, insert the item in the proper place
function insertSorted(arr, item, comparator) {
    var idx = binarySearch(arr, item, comparator);
    arr.splice(idx, 0, item);
}
// Turn a path as a flat array into a tree with a single branch.
// If any should be stemmed from the beginning of the array, that's passed
// in as the second argument
function pathToTree(path, numStemmed) {
    var root;
    var leaf;
    for(var i = numStemmed, len = path.length; i < len; i++){
        var node = path[i];
        var currentLeaf = [
            node.id,
            node.opts,
            []
        ];
        if (leaf) {
            leaf[2].push(currentLeaf);
            leaf = currentLeaf;
        } else root = leaf = currentLeaf;
    }
    return root;
}
// compare the IDs of two trees
function compareTree(a, b) {
    return a[0] < b[0] ? -1 : 1;
}
// Merge two trees together
// The roots of tree1 and tree2 must be the same revision
function mergeTree(in_tree1, in_tree2) {
    var queue = [
        {
            tree1: in_tree1,
            tree2: in_tree2
        }
    ];
    var conflicts = false;
    while(queue.length > 0){
        var item = queue.pop();
        var tree1 = item.tree1;
        var tree2 = item.tree2;
        if (tree1[1].status || tree2[1].status) tree1[1].status = tree1[1].status === 'available' || tree2[1].status === 'available' ? 'available' : 'missing';
        for(var i = 0; i < tree2[2].length; i++){
            if (!tree1[2][0]) {
                conflicts = 'new_leaf';
                tree1[2][0] = tree2[2][i];
                continue;
            }
            var merged = false;
            for(var j = 0; j < tree1[2].length; j++)if (tree1[2][j][0] === tree2[2][i][0]) {
                queue.push({
                    tree1: tree1[2][j],
                    tree2: tree2[2][i]
                });
                merged = true;
            }
            if (!merged) {
                conflicts = 'new_branch';
                insertSorted(tree1[2], tree2[2][i], compareTree);
            }
        }
    }
    return {
        conflicts: conflicts,
        tree: in_tree1
    };
}
function doMerge(tree, path, dontExpand) {
    var restree = [];
    var conflicts = false;
    var merged = false;
    var res;
    if (!tree.length) return {
        tree: [
            path
        ],
        conflicts: 'new_leaf'
    };
    for(var i = 0, len = tree.length; i < len; i++){
        var branch = tree[i];
        if (branch.pos === path.pos && branch.ids[0] === path.ids[0]) {
            // Paths start at the same position and have the same root, so they need
            // merged
            res = mergeTree(branch.ids, path.ids);
            restree.push({
                pos: branch.pos,
                ids: res.tree
            });
            conflicts = conflicts || res.conflicts;
            merged = true;
        } else if (dontExpand !== true) {
            // The paths start at a different position, take the earliest path and
            // traverse up until it as at the same point from root as the path we
            // want to merge.  If the keys match we return the longer path with the
            // other merged After stemming we dont want to expand the trees
            var t1 = branch.pos < path.pos ? branch : path;
            var t2 = branch.pos < path.pos ? path : branch;
            var diff = t2.pos - t1.pos;
            var candidateParents = [];
            var trees = [];
            trees.push({
                ids: t1.ids,
                diff: diff,
                parent: null,
                parentIdx: null
            });
            while(trees.length > 0){
                var item = trees.pop();
                if (item.diff === 0) {
                    if (item.ids[0] === t2.ids[0]) candidateParents.push(item);
                    continue;
                }
                var elements = item.ids[2];
                for(var j = 0, elementsLen = elements.length; j < elementsLen; j++)trees.push({
                    ids: elements[j],
                    diff: item.diff - 1,
                    parent: item.ids,
                    parentIdx: j
                });
            }
            var el = candidateParents[0];
            if (!el) restree.push(branch);
            else {
                res = mergeTree(el.ids, t2.ids);
                el.parent[2][el.parentIdx] = res.tree;
                restree.push({
                    pos: t1.pos,
                    ids: t1.ids
                });
                conflicts = conflicts || res.conflicts;
                merged = true;
            }
        } else restree.push(branch);
    }
    // We didnt find
    if (!merged) restree.push(path);
    restree.sort(sortByPos$1);
    return {
        tree: restree,
        conflicts: conflicts || 'internal_node'
    };
}
// To ensure we dont grow the revision tree infinitely, we stem old revisions
function stem(tree, depth) {
    // First we break out the tree into a complete list of root to leaf paths
    var paths = rootToLeaf(tree);
    var stemmedRevs;
    var result;
    for(var i = 0, len = paths.length; i < len; i++){
        // Then for each path, we cut off the start of the path based on the
        // `depth` to stem to, and generate a new set of flat trees
        var path = paths[i];
        var stemmed = path.ids;
        var node;
        if (stemmed.length > depth) {
            // only do the stemming work if we actually need to stem
            if (!stemmedRevs) stemmedRevs = {
            }; // avoid allocating this object unnecessarily
            var numStemmed = stemmed.length - depth;
            node = {
                pos: path.pos + numStemmed,
                ids: pathToTree(stemmed, numStemmed)
            };
            for(var s = 0; s < numStemmed; s++){
                var rev = path.pos + s + '-' + stemmed[s].id;
                stemmedRevs[rev] = true;
            }
        } else node = {
            pos: path.pos,
            ids: pathToTree(stemmed, 0)
        };
        // Then we remerge all those flat trees together, ensuring that we dont
        // connect trees that would go beyond the depth limit
        if (result) result = doMerge(result, node, true).tree;
        else result = [
            node
        ];
    }
    // this is memory-heavy per Chrome profiler, avoid unless we actually stemmed
    if (stemmedRevs) traverseRevTree(result, function(isLeaf, pos, revHash) {
        // some revisions may have been removed in a branch but not in another
        delete stemmedRevs[pos + '-' + revHash];
    });
    return {
        tree: result,
        revs: stemmedRevs ? Object.keys(stemmedRevs) : []
    };
}
function merge(tree, path, depth) {
    var newTree = doMerge(tree, path);
    var stemmed = stem(newTree.tree, depth);
    return {
        tree: stemmed.tree,
        stemmedRevs: stemmed.revs,
        conflicts: newTree.conflicts
    };
}
// return true if a rev exists in the rev tree, false otherwise
function revExists(revs, rev) {
    var toVisit = revs.slice();
    var splitRev = rev.split('-');
    var targetPos = parseInt(splitRev[0], 10);
    var targetId = splitRev[1];
    var node;
    while(node = toVisit.pop()){
        if (node.pos === targetPos && node.ids[0] === targetId) return true;
        var branches = node.ids[2];
        for(var i = 0, len = branches.length; i < len; i++)toVisit.push({
            pos: node.pos + 1,
            ids: branches[i]
        });
    }
    return false;
}
function getTrees(node) {
    return node.ids;
}
// check if a specific revision of a doc has been deleted
//  - metadata: the metadata object from the doc store
//  - rev: (optional) the revision to check. defaults to winning revision
function isDeleted(metadata, rev) {
    if (!rev) rev = winningRev(metadata);
    var id = rev.substring(rev.indexOf('-') + 1);
    var toVisit = metadata.rev_tree.map(getTrees);
    var tree;
    while(tree = toVisit.pop()){
        if (tree[0] === id) return !!tree[1].deleted;
        toVisit = toVisit.concat(tree[2]);
    }
}
function isLocalId(id) {
    return /^_local/.test(id);
}
// returns the current leaf node for a given revision
function latest(rev, metadata) {
    var toVisit = metadata.rev_tree.slice();
    var node;
    while(node = toVisit.pop()){
        var pos = node.pos;
        var tree = node.ids;
        var id = tree[0];
        var opts = tree[1];
        var branches = tree[2];
        var isLeaf = branches.length === 0;
        var history = node.history ? node.history.slice() : [];
        history.push({
            id: id,
            pos: pos,
            opts: opts
        });
        if (isLeaf) for(var i = 0, len = history.length; i < len; i++){
            var historyNode = history[i];
            var historyRev = historyNode.pos + '-' + historyNode.id;
            if (historyRev === rev) // return the rev of this leaf
            return pos + '-' + id;
        }
        for(var j = 0, l = branches.length; j < l; j++)toVisit.push({
            pos: pos + 1,
            ids: branches[j],
            history: history
        });
    }
    /* istanbul ignore next */ throw new Error('Unable to resolve latest revision for id ' + metadata.id + ', rev ' + rev);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["aMn9s"], null, "parcelRequire9123")

//# sourceMappingURL=index.es.ca118c1c.js.map
