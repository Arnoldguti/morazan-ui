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
})({"4gkza":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "97ea3e1f308fca7a";
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

},{}],"29uhk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _pouchdbUtils = require("pouchdb-utils");
var _pouchdbAdapterLeveldbCore = require("pouchdb-adapter-leveldb-core");
var _pouchdbAdapterLeveldbCoreDefault = parcelHelpers.interopDefault(_pouchdbAdapterLeveldbCore);
var _fs = require("fs");
var _fsDefault = parcelHelpers.interopDefault(_fs);
var _path = require("path");
var _pathDefault = parcelHelpers.interopDefault(_path);
var _pouchdbMerge = require("pouchdb-merge");
var _level = require("level");
var _levelDefault = parcelHelpers.interopDefault(_level);
var _through2 = require("through2");
var _levelWriteStream = require("level-write-stream");
var _levelWriteStreamDefault = parcelHelpers.interopDefault(_levelWriteStream);
// require leveldown. provide verbose output on error as it is the default
// nodejs adapter, which we do not provide for the user
/* istanbul ignore next */ var requireLeveldown = function() {
    try {
        return require('leveldown');
    } catch (err) {
        /* eslint no-ex-assign: 0*/ err = err || 'leveldown import error';
        if (err.code === 'MODULE_NOT_FOUND') // handle leveldown not installed case
        return new Error([
            'the \'leveldown\' package is not available. install it, or,',
            'specify another storage backend using the \'db\' option'
        ].join(' '));
        else if (err.message && err.message.match('Module version mismatch')) // handle common user enviornment error
        return new Error([
            err.message,
            'This generally implies that leveldown was built with a different',
            'version of node than that which is running now.  You may try',
            'fully removing and reinstalling PouchDB or leveldown to resolve.'
        ].join(' '));
        // handle general internal nodejs require error
        return new Error(err.toString() + ': unable to import leveldown');
    }
};
var stores1 = [
    'document-store',
    'by-sequence',
    'attach-store',
    'attach-binary-store'
];
function formatSeq(n) {
    return ('0000000000000000' + n).slice(-16);
}
var UPDATE_SEQ_KEY = '_local_last_update_seq';
var DOC_COUNT_KEY = '_local_doc_count';
var UUID_KEY = '_local_uuid';
var doMigrationOne = function(name, db, callback) {
    // local require to prevent crashing if leveldown isn't installed.
    var leveldown = require("leveldown");
    var base = _pathDefault.default.resolve(name);
    function move(store, index, cb) {
        var storePath = _pathDefault.default.join(base, store);
        var opts;
        if (index === 3) opts = {
            valueEncoding: 'binary'
        };
        else opts = {
            valueEncoding: 'json'
        };
        var sub = db.sublevel(store, opts);
        var orig = _levelDefault.default(storePath, opts);
        var from = orig.createReadStream();
        var writeStream = new _levelWriteStreamDefault.default(sub);
        var to = writeStream();
        from.on('end', function() {
            orig.close(function(err) {
                cb(err, storePath);
            });
        });
        from.pipe(to);
    }
    _fsDefault.default.unlink(base + '.uuid', function(err1) {
        if (err1) return callback();
        var todo = 4;
        var done = [];
        stores1.forEach(function(store, i) {
            move(store, i, function(err, storePath) {
                /* istanbul ignore if */ if (err) return callback(err);
                done.push(storePath);
                if (!--todo) done.forEach(function(item) {
                    leveldown.destroy(item, function() {
                        if (++todo === done.length) _fsDefault.default.rmdir(base, callback);
                    });
                });
            });
        });
    });
};
var doMigrationTwo = function(db, stores, callback) {
    var batches = [];
    stores.bySeqStore.get(UUID_KEY, function(err2, value1) {
        if (err2) // no uuid key, so don't need to migrate;
        return callback();
        batches.push({
            key: UUID_KEY,
            value: value1,
            prefix: stores.metaStore,
            type: 'put',
            valueEncoding: 'json'
        });
        batches.push({
            key: UUID_KEY,
            prefix: stores.bySeqStore,
            type: 'del'
        });
        stores.bySeqStore.get(DOC_COUNT_KEY, function(err3, value2) {
            if (value2) {
                // if no doc count key,
                // just skip
                // we can live with this
                batches.push({
                    key: DOC_COUNT_KEY,
                    value: value2,
                    prefix: stores.metaStore,
                    type: 'put',
                    valueEncoding: 'json'
                });
                batches.push({
                    key: DOC_COUNT_KEY,
                    prefix: stores.bySeqStore,
                    type: 'del'
                });
            }
            stores.bySeqStore.get(UPDATE_SEQ_KEY, function(err4, value3) {
                if (value3) {
                    // if no UPDATE_SEQ_KEY
                    // just skip
                    // we've gone to far to stop.
                    batches.push({
                        key: UPDATE_SEQ_KEY,
                        value: value3,
                        prefix: stores.metaStore,
                        type: 'put',
                        valueEncoding: 'json'
                    });
                    batches.push({
                        key: UPDATE_SEQ_KEY,
                        prefix: stores.bySeqStore,
                        type: 'del'
                    });
                }
                var deletedSeqs = {
                };
                stores.docStore.createReadStream({
                    startKey: '_',
                    endKey: '_\xFF'
                }).pipe(_through2.obj(function(ch, _, next) {
                    if (!_pouchdbMerge.isLocalId(ch.key)) return next();
                    batches.push({
                        key: ch.key,
                        prefix: stores.docStore,
                        type: 'del'
                    });
                    var winner = _pouchdbMerge.winningRev(ch.value);
                    Object.keys(ch.value.rev_map).forEach(function(key) {
                        if (key !== 'winner') this.push(formatSeq(ch.value.rev_map[key]));
                    }, this);
                    var winningSeq = ch.value.rev_map[winner];
                    stores.bySeqStore.get(formatSeq(winningSeq), function(err, value) {
                        if (!err) batches.push({
                            key: ch.key,
                            value: value,
                            prefix: stores.localStore,
                            type: 'put',
                            valueEncoding: 'json'
                        });
                        next();
                    });
                })).pipe(_through2.obj(function(seq, _, next) {
                    /* istanbul ignore if */ if (deletedSeqs[seq]) return next();
                    deletedSeqs[seq] = true;
                    stores.bySeqStore.get(seq, function(err, resp) {
                        /* istanbul ignore if */ if (err || !_pouchdbMerge.isLocalId(resp._id)) return next();
                        batches.push({
                            key: seq,
                            prefix: stores.bySeqStore,
                            type: 'del'
                        });
                        next();
                    });
                }, function() {
                    db.batch(batches, callback);
                }));
            });
        });
    });
};
var migrate = {
    doMigrationOne: doMigrationOne,
    doMigrationTwo: doMigrationTwo
};
function LevelDownPouch(opts, callback) {
    // Users can pass in their own leveldown alternative here, in which case
    // it overrides the default one. (This is in addition to the custom builds.)
    var leveldown = opts.db;
    /* istanbul ignore else */ if (!leveldown) {
        leveldown = requireLeveldown();
        /* istanbul ignore if */ if (leveldown instanceof Error) return callback(leveldown);
    }
    var _opts = _pouchdbUtils.assign({
        db: leveldown,
        migrate: migrate
    }, opts);
    _pouchdbAdapterLeveldbCoreDefault.default.call(this, _opts, callback);
}
// overrides for normal LevelDB behavior on Node
LevelDownPouch.valid = function() {
    return true;
};
LevelDownPouch.use_prefix = false;
function index1(PouchDB) {
    PouchDB.adapter('leveldb', LevelDownPouch, true);
}
exports.default = index1;

},{"pouchdb-utils":"eWppo","pouchdb-adapter-leveldb-core":"4tZTZ","fs":"joWnX","path":"4RboN","pouchdb-merge":"13CY1","level":"4L5MH","through2":"hTq2l","level-write-stream":"89IM7","leveldown":"6ZiKL","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4tZTZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _levelup = require("levelup");
var _levelupDefault = parcelHelpers.interopDefault(_levelup);
var _sublevelPouchdb = require("sublevel-pouchdb");
var _sublevelPouchdbDefault = parcelHelpers.interopDefault(_sublevelPouchdb);
var _through2 = require("through2");
var _argsarray = require("argsarray");
var _argsarrayDefault = parcelHelpers.interopDefault(_argsarray);
var _doubleEndedQueue = require("double-ended-queue");
var _doubleEndedQueueDefault = parcelHelpers.interopDefault(_doubleEndedQueue);
var _bufferFrom = require("buffer-from");
var _bufferFromDefault = parcelHelpers.interopDefault(_bufferFrom);
var _pouchdbAdapterUtils = require("pouchdb-adapter-utils");
var _pouchdbMerge = require("pouchdb-merge");
var _pouchdbJson = require("pouchdb-json");
var _pouchdbMd5 = require("pouchdb-md5");
var _pouchdbBinaryUtils = require("pouchdb-binary-utils");
var _pouchdbCollections = require("pouchdb-collections");
var _pouchdbUtils = require("pouchdb-utils");
var _pouchdbErrors = require("pouchdb-errors");
function readAsBlobOrBuffer(storedObject, type) {
    // In the browser, we've stored a binary string. This now comes back as a
    // browserified Node-style Buffer (implemented as a typed array),
    // but we want a Blob instead.
    var byteArray = new Uint8Array(storedObject);
    return _pouchdbBinaryUtils.blob([
        byteArray
    ], {
        type: type
    });
}
// In the browser, we store a binary string
function prepareAttachmentForStorage(attData, cb) {
    _pouchdbBinaryUtils.readAsBinaryString(attData, cb);
}
function createEmptyBlobOrBuffer(type) {
    return _pouchdbBinaryUtils.blob([
        ''
    ], {
        type: type
    });
}
function getCacheFor(transaction, store) {
    var prefix = store.prefix()[0];
    var cache = transaction._cache;
    var subCache = cache.get(prefix);
    if (!subCache) {
        subCache = new _pouchdbCollections.Map();
        cache.set(prefix, subCache);
    }
    return subCache;
}
function LevelTransaction() {
    this._batch = [];
    this._cache = new _pouchdbCollections.Map();
}
LevelTransaction.prototype.get = function(store, key, callback) {
    var cache = getCacheFor(this, store);
    var exists = cache.get(key);
    if (exists) return _pouchdbUtils.nextTick(function() {
        callback(null, exists);
    });
    else if (exists === null) /* istanbul ignore next */ return _pouchdbUtils.nextTick(function() {
        callback({
            name: 'NotFoundError'
        });
    });
    store.get(key, function(err, res) {
        if (err) {
            /* istanbul ignore else */ if (err.name === 'NotFoundError') cache.set(key, null);
            return callback(err);
        }
        cache.set(key, res);
        callback(null, res);
    });
};
LevelTransaction.prototype.batch = function(batch) {
    for(var i = 0, len = batch.length; i < len; i++){
        var operation = batch[i];
        var cache = getCacheFor(this, operation.prefix);
        if (operation.type === 'put') cache.set(operation.key, operation.value);
        else cache.set(operation.key, null);
    }
    this._batch = this._batch.concat(batch);
};
LevelTransaction.prototype.execute = function(db, callback) {
    var keys = new _pouchdbCollections.Set();
    var uniqBatches = [];
    // remove duplicates; last one wins
    for(var i = this._batch.length - 1; i >= 0; i--){
        var operation = this._batch[i];
        var lookupKey = operation.prefix.prefix()[0] + '\xff' + operation.key;
        if (keys.has(lookupKey)) continue;
        keys.add(lookupKey);
        uniqBatches.push(operation);
    }
    db.batch(uniqBatches, callback);
};
var DOC_STORE = 'document-store';
var BY_SEQ_STORE = 'by-sequence';
var ATTACHMENT_STORE = 'attach-store';
var BINARY_STORE = 'attach-binary-store';
var LOCAL_STORE = 'local-store';
var META_STORE = 'meta-store';
// leveldb barks if we try to open a db multiple times
// so we cache opened connections here for initstore()
var dbStores = new _pouchdbCollections.Map();
// store the value of update_seq in the by-sequence store the key name will
// never conflict, since the keys in the by-sequence store are integers
var UPDATE_SEQ_KEY = '_local_last_update_seq';
var DOC_COUNT_KEY = '_local_doc_count';
var UUID_KEY = '_local_uuid';
var MD5_PREFIX = 'md5-';
var safeJsonEncoding = {
    encode: _pouchdbJson.safeJsonStringify,
    decode: _pouchdbJson.safeJsonParse,
    buffer: false,
    type: 'cheap-json'
};
var levelChanges = new _pouchdbUtils.changesHandler();
// winningRev and deleted are performance-killers, but
// in newer versions of PouchDB, they are cached on the metadata
function getWinningRev(metadata) {
    return 'winningRev' in metadata ? metadata.winningRev : _pouchdbMerge.winningRev(metadata);
}
function getIsDeleted(metadata, winningRev$$1) {
    return 'deleted' in metadata ? metadata.deleted : _pouchdbAdapterUtils.isDeleted(metadata, winningRev$$1);
}
function fetchAttachment(att, stores, opts) {
    var type = att.content_type;
    return new Promise(function(resolve, reject) {
        stores.binaryStore.get(att.digest, function(err, buffer) {
            var data;
            if (err) {
                /* istanbul ignore if */ if (err.name !== 'NotFoundError') return reject(err);
                else // empty
                if (!opts.binary) data = '';
                else data = _pouchdbBinaryUtils.binaryStringToBlobOrBuffer('', type);
            } else if (opts.binary) data = readAsBlobOrBuffer(buffer, type);
            else data = buffer.toString('base64');
            delete att.stub;
            delete att.length;
            att.data = data;
            resolve();
        });
    });
}
function fetchAttachments(results, stores, opts) {
    var atts = [];
    results.forEach(function(row) {
        if (!(row.doc && row.doc._attachments)) return;
        var attNames = Object.keys(row.doc._attachments);
        attNames.forEach(function(attName) {
            var att = row.doc._attachments[attName];
            if (!('data' in att)) atts.push(att);
        });
    });
    return Promise.all(atts.map(function(att) {
        return fetchAttachment(att, stores, opts);
    }));
}
function LevelPouch(opts1, callback1) {
    opts1 = _pouchdbUtils.clone(opts1);
    var api = this;
    var instanceId;
    var stores = {
    };
    var revLimit = opts1.revs_limit;
    var db;
    var name1 = opts1.name;
    // TODO: this is undocumented and unused probably
    /* istanbul ignore else */ if (typeof opts1.createIfMissing === 'undefined') opts1.createIfMissing = true;
    var leveldown = opts1.db;
    var dbStore1;
    var leveldownName1 = _pouchdbUtils.functionName(leveldown);
    if (dbStores.has(leveldownName1)) dbStore1 = dbStores.get(leveldownName1);
    else {
        dbStore1 = new _pouchdbCollections.Map();
        dbStores.set(leveldownName1, dbStore1);
    }
    if (dbStore1.has(name1)) {
        db = dbStore1.get(name1);
        afterDBCreated();
    } else dbStore1.set(name1, _sublevelPouchdbDefault.default(_levelupDefault.default(leveldown(name1), opts1, function(err) {
        /* istanbul ignore if */ if (err) {
            dbStore1.delete(name1);
            return callback1(err);
        }
        db = dbStore1.get(name1);
        db._docCount = -1;
        db._queue = new _doubleEndedQueueDefault.default();
        /* istanbul ignore else */ if (typeof opts1.migrate === 'object') opts1.migrate.doMigrationOne(name1, db, afterDBCreated);
        else afterDBCreated();
    })));
    function afterDBCreated() {
        stores.docStore = db.sublevel(DOC_STORE, {
            valueEncoding: safeJsonEncoding
        });
        stores.bySeqStore = db.sublevel(BY_SEQ_STORE, {
            valueEncoding: 'json'
        });
        stores.attachmentStore = db.sublevel(ATTACHMENT_STORE, {
            valueEncoding: 'json'
        });
        stores.binaryStore = db.sublevel(BINARY_STORE, {
            valueEncoding: 'binary'
        });
        stores.localStore = db.sublevel(LOCAL_STORE, {
            valueEncoding: 'json'
        });
        stores.metaStore = db.sublevel(META_STORE, {
            valueEncoding: 'json'
        });
        /* istanbul ignore else */ if (typeof opts1.migrate === 'object') opts1.migrate.doMigrationTwo(db, stores, afterLastMigration);
        else afterLastMigration();
    }
    function afterLastMigration() {
        stores.metaStore.get(UPDATE_SEQ_KEY, function(err1, value1) {
            if (typeof db._updateSeq === 'undefined') db._updateSeq = value1 || 0;
            stores.metaStore.get(DOC_COUNT_KEY, function(err2, value2) {
                db._docCount = !err2 ? value2 : 0;
                stores.metaStore.get(UUID_KEY, function(err, value) {
                    instanceId = !err ? value : _pouchdbUtils.uuid();
                    stores.metaStore.put(UUID_KEY, instanceId, function() {
                        _pouchdbUtils.nextTick(function() {
                            callback1(null, api);
                        });
                    });
                });
            });
        });
    }
    function countDocs(callback) {
        /* istanbul ignore if */ if (db.isClosed()) return callback(new Error('database is closed'));
        return callback(null, db._docCount); // use cached value
    }
    api._remote = false;
    /* istanbul ignore next */ api.type = function() {
        return 'leveldb';
    };
    api._id = function(callback) {
        callback(null, instanceId);
    };
    api._info = function(callback) {
        var res = {
            doc_count: db._docCount,
            update_seq: db._updateSeq,
            backend_adapter: _pouchdbUtils.functionName(leveldown)
        };
        return _pouchdbUtils.nextTick(function() {
            callback(null, res);
        });
    };
    function tryCode(fun, args) {
        try {
            fun.apply(null, args);
        } catch (err) {
            args[args.length - 1](err);
        }
    }
    function executeNext() {
        var firstTask = db._queue.peekFront();
        if (firstTask.type === 'read') runReadOperation(firstTask);
        else runWriteOperation(firstTask);
    }
    function runReadOperation(firstTask) {
        // do multiple reads at once simultaneously, because it's safe
        var readTasks = [
            firstTask
        ];
        var i = 1;
        var nextTask = db._queue.get(i);
        while(typeof nextTask !== 'undefined' && nextTask.type === 'read'){
            readTasks.push(nextTask);
            i++;
            nextTask = db._queue.get(i);
        }
        var numDone = 0;
        readTasks.forEach(function(readTask) {
            var args = readTask.args;
            var callback = args[args.length - 1];
            args[args.length - 1] = _argsarrayDefault.default(function(cbArgs) {
                callback.apply(null, cbArgs);
                if (++numDone === readTasks.length) _pouchdbUtils.nextTick(function() {
                    // all read tasks have finished
                    readTasks.forEach(function() {
                        db._queue.shift();
                    });
                    if (db._queue.length) executeNext();
                });
            });
            tryCode(readTask.fun, args);
        });
    }
    function runWriteOperation(firstTask) {
        var args = firstTask.args;
        var callback = args[args.length - 1];
        args[args.length - 1] = _argsarrayDefault.default(function(cbArgs) {
            callback.apply(null, cbArgs);
            _pouchdbUtils.nextTick(function() {
                db._queue.shift();
                if (db._queue.length) executeNext();
            });
        });
        tryCode(firstTask.fun, args);
    }
    // all read/write operations to the database are done in a queue,
    // similar to how websql/idb works. this avoids problems such
    // as e.g. compaction needing to have a lock on the database while
    // it updates stuff. in the future we can revisit this.
    function writeLock(fun) {
        return _argsarrayDefault.default(function(args) {
            db._queue.push({
                fun: fun,
                args: args,
                type: 'write'
            });
            if (db._queue.length === 1) _pouchdbUtils.nextTick(executeNext);
        });
    }
    // same as the writelock, but multiple can run at once
    function readLock(fun) {
        return _argsarrayDefault.default(function(args) {
            db._queue.push({
                fun: fun,
                args: args,
                type: 'read'
            });
            if (db._queue.length === 1) _pouchdbUtils.nextTick(executeNext);
        });
    }
    function formatSeq(n) {
        return ('0000000000000000' + n).slice(-16);
    }
    function parseSeq(s) {
        return parseInt(s, 10);
    }
    api._get = readLock(function(id, opts, callback) {
        opts = _pouchdbUtils.clone(opts);
        stores.docStore.get(id, function(err, metadata) {
            if (err || !metadata) return callback(_pouchdbErrors.createError(_pouchdbErrors.MISSING_DOC, 'missing'));
            var rev;
            if (!opts.rev) {
                rev = getWinningRev(metadata);
                var deleted = getIsDeleted(metadata, rev);
                if (deleted) return callback(_pouchdbErrors.createError(_pouchdbErrors.MISSING_DOC, "deleted"));
            } else rev = opts.latest ? _pouchdbMerge.latest(opts.rev, metadata) : opts.rev;
            var seq = metadata.rev_map[rev];
            stores.bySeqStore.get(formatSeq(seq), function(err, doc) {
                if (!doc) return callback(_pouchdbErrors.createError(_pouchdbErrors.MISSING_DOC));
                /* istanbul ignore if */ if ('_id' in doc && doc._id !== metadata.id) // this failing implies something very wrong
                return callback(new Error('wrong doc returned'));
                doc._id = metadata.id;
                if ('_rev' in doc) {
                    /* istanbul ignore if */ if (doc._rev !== rev) // this failing implies something very wrong
                    return callback(new Error('wrong doc returned'));
                } else // we didn't always store this
                doc._rev = rev;
                return callback(null, {
                    doc: doc,
                    metadata: metadata
                });
            });
        });
    });
    // not technically part of the spec, but if putAttachment has its own
    // method...
    api._getAttachment = function(docId, attachId, attachment, opts, callback) {
        var digest = attachment.digest;
        var type = attachment.content_type;
        stores.binaryStore.get(digest, function(err, attach) {
            if (err) {
                /* istanbul ignore if */ if (err.name !== 'NotFoundError') return callback(err);
                // Empty attachment
                return callback(null, opts.binary ? createEmptyBlobOrBuffer(type) : '');
            }
            if (opts.binary) callback(null, readAsBlobOrBuffer(attach, type));
            else callback(null, attach.toString('base64'));
        });
    };
    api._bulkDocs = writeLock(function(req, opts, callback2) {
        var newEdits = opts.new_edits;
        var results = new Array(req.docs.length);
        var fetchedDocs = new _pouchdbCollections.Map();
        var stemmedRevs = new _pouchdbCollections.Map();
        var txn = new LevelTransaction();
        var docCountDelta = 0;
        var newUpdateSeq = db._updateSeq;
        // parse the docs and give each a sequence number
        var userDocs = req.docs;
        var docInfos = userDocs.map(function(doc) {
            if (doc._id && _pouchdbAdapterUtils.isLocalId(doc._id)) return doc;
            var newDoc = _pouchdbAdapterUtils.parseDoc(doc, newEdits, api.__opts);
            if (newDoc.metadata && !newDoc.metadata.rev_map) newDoc.metadata.rev_map = {
            };
            return newDoc;
        });
        var infoErrors = docInfos.filter(function(doc) {
            return doc.error;
        });
        if (infoErrors.length) return callback2(infoErrors[0]);
        // verify any stub attachments as a precondition test
        function verifyAttachment(digest, callback) {
            txn.get(stores.attachmentStore, digest, function(levelErr) {
                if (levelErr) {
                    var err = _pouchdbErrors.createError(_pouchdbErrors.MISSING_STUB, 'unknown stub attachment with digest ' + digest);
                    callback(err);
                } else callback();
            });
        }
        function verifyAttachments(finish) {
            var digests = [];
            userDocs.forEach(function(doc) {
                if (doc && doc._attachments) Object.keys(doc._attachments).forEach(function(filename) {
                    var att = doc._attachments[filename];
                    if (att.stub) digests.push(att.digest);
                });
            });
            if (!digests.length) return finish();
            var numDone = 0;
            var err;
            digests.forEach(function(digest) {
                verifyAttachment(digest, function(attErr) {
                    if (attErr && !err) err = attErr;
                    if (++numDone === digests.length) finish(err);
                });
            });
        }
        function fetchExistingDocs(finish) {
            var numDone = 0;
            var overallErr;
            function checkDone() {
                if (++numDone === userDocs.length) return finish(overallErr);
            }
            userDocs.forEach(function(doc) {
                if (doc._id && _pouchdbAdapterUtils.isLocalId(doc._id)) // skip local docs
                return checkDone();
                txn.get(stores.docStore, doc._id, function(err, info) {
                    if (err) /* istanbul ignore if */ {
                        if (err.name !== 'NotFoundError') overallErr = err;
                    } else fetchedDocs.set(doc._id, info);
                    checkDone();
                });
            });
        }
        function compact(revsMap, callback) {
            var promise = Promise.resolve();
            revsMap.forEach(function(revs, docId) {
                // TODO: parallelize, for now need to be sequential to
                // pass orphaned attachment tests
                promise = promise.then(function() {
                    return new Promise(function(resolve, reject) {
                        api._doCompactionNoLock(docId, revs, {
                            ctx: txn
                        }, function(err) {
                            /* istanbul ignore if */ if (err) return reject(err);
                            resolve();
                        });
                    });
                });
            });
            promise.then(function() {
                callback();
            }, callback);
        }
        function autoCompact(callback) {
            var revsMap = new _pouchdbCollections.Map();
            fetchedDocs.forEach(function(metadata, docId) {
                revsMap.set(docId, _pouchdbMerge.compactTree(metadata));
            });
            compact(revsMap, callback);
        }
        function finish1() {
            compact(stemmedRevs, function(error) {
                /* istanbul ignore if */ if (error) complete(error);
                if (api.auto_compaction) return autoCompact(complete);
                complete();
            });
        }
        function writeDoc(docInfo, winningRev$$1, winningRevIsDeleted, newRevIsDeleted, isUpdate, delta, resultsIdx, callback21) {
            docCountDelta += delta;
            var err = null;
            var recv = 0;
            docInfo.metadata.winningRev = winningRev$$1;
            docInfo.metadata.deleted = winningRevIsDeleted;
            docInfo.data._id = docInfo.metadata.id;
            docInfo.data._rev = docInfo.metadata.rev;
            if (newRevIsDeleted) docInfo.data._deleted = true;
            if (docInfo.stemmedRevs.length) stemmedRevs.set(docInfo.metadata.id, docInfo.stemmedRevs);
            var attachments = docInfo.data._attachments ? Object.keys(docInfo.data._attachments) : [];
            function attachmentSaved1(attachmentErr) {
                recv++;
                if (!err) {
                    /* istanbul ignore if */ if (attachmentErr) {
                        err = attachmentErr;
                        callback21(err);
                    } else if (recv === attachments.length) finish();
                }
            }
            function onMD5Load(doc, key, data, attachmentSaved) {
                return function(result) {
                    saveAttachment(doc, MD5_PREFIX + result, key, data, attachmentSaved);
                };
            }
            function doMD5(doc, key, attachmentSaved) {
                return function(data) {
                    _pouchdbMd5.binaryMd5(data, onMD5Load(doc, key, data, attachmentSaved));
                };
            }
            for(var i = 0; i < attachments.length; i++){
                var key1 = attachments[i];
                var att = docInfo.data._attachments[key1];
                if (att.stub) {
                    // still need to update the refs mapping
                    var id = docInfo.data._id;
                    var rev = docInfo.data._rev;
                    saveAttachmentRefs(id, rev, att.digest, attachmentSaved1);
                    continue;
                }
                var data1;
                if (typeof att.data === 'string') {
                    // input is assumed to be a base64 string
                    try {
                        data1 = _pouchdbBinaryUtils.atob(att.data);
                    } catch (e) {
                        callback2(_pouchdbErrors.createError(_pouchdbErrors.BAD_ARG, 'Attachment is not a valid base64 string'));
                        return;
                    }
                    doMD5(docInfo, key1, attachmentSaved1)(data1);
                } else prepareAttachmentForStorage(att.data, doMD5(docInfo, key1, attachmentSaved1));
            }
            function finish() {
                var seq = docInfo.metadata.rev_map[docInfo.metadata.rev];
                /* istanbul ignore if */ if (seq) // check that there aren't any existing revisions with the same
                // revision id, else we shouldn't do anything
                return callback21();
                seq = ++newUpdateSeq;
                docInfo.metadata.rev_map[docInfo.metadata.rev] = docInfo.metadata.seq = seq;
                var seqKey = formatSeq(seq);
                var batch = [
                    {
                        key: seqKey,
                        value: docInfo.data,
                        prefix: stores.bySeqStore,
                        type: 'put'
                    },
                    {
                        key: docInfo.metadata.id,
                        value: docInfo.metadata,
                        prefix: stores.docStore,
                        type: 'put'
                    }
                ];
                txn.batch(batch);
                results[resultsIdx] = {
                    ok: true,
                    id: docInfo.metadata.id,
                    rev: docInfo.metadata.rev
                };
                fetchedDocs.set(docInfo.metadata.id, docInfo.metadata);
                callback21();
            }
            if (!attachments.length) finish();
        }
        // attachments are queued per-digest, otherwise the refs could be
        // overwritten by concurrent writes in the same bulkDocs session
        var attachmentQueues = {
        };
        function saveAttachmentRefs(id, rev, digest, callback) {
            function fetchAtt() {
                return new Promise(function(resolve, reject) {
                    txn.get(stores.attachmentStore, digest, function(err, oldAtt) {
                        /* istanbul ignore if */ if (err && err.name !== 'NotFoundError') return reject(err);
                        resolve(oldAtt);
                    });
                });
            }
            function saveAtt(oldAtt) {
                var ref = [
                    id,
                    rev
                ].join('@');
                var newAtt = {
                };
                if (oldAtt) {
                    if (oldAtt.refs) {
                        // only update references if this attachment already has them
                        // since we cannot migrate old style attachments here without
                        // doing a full db scan for references
                        newAtt.refs = oldAtt.refs;
                        newAtt.refs[ref] = true;
                    }
                } else {
                    newAtt.refs = {
                    };
                    newAtt.refs[ref] = true;
                }
                return new Promise(function(resolve) {
                    txn.batch([
                        {
                            type: 'put',
                            prefix: stores.attachmentStore,
                            key: digest,
                            value: newAtt
                        }
                    ]);
                    resolve(!oldAtt);
                });
            }
            // put attachments in a per-digest queue, to avoid two docs with the same
            // attachment overwriting each other
            var queue = attachmentQueues[digest] || Promise.resolve();
            attachmentQueues[digest] = queue.then(function() {
                return fetchAtt().then(saveAtt).then(function(isNewAttachment) {
                    callback(null, isNewAttachment);
                }, callback);
            });
        }
        function saveAttachment(docInfo, digest, key, data, callback) {
            var att = docInfo.data._attachments[key];
            delete att.data;
            att.digest = digest;
            att.length = data.length;
            var id = docInfo.metadata.id;
            var rev = docInfo.metadata.rev;
            att.revpos = parseInt(rev, 10);
            saveAttachmentRefs(id, rev, digest, function(err, isNewAttachment) {
                /* istanbul ignore if */ if (err) return callback(err);
                // do not try to store empty attachments
                if (data.length === 0) return callback(err);
                if (!isNewAttachment) // small optimization - don't bother writing it again
                return callback(err);
                txn.batch([
                    {
                        type: 'put',
                        prefix: stores.binaryStore,
                        key: digest,
                        value: _bufferFromDefault.default(data, 'binary')
                    }
                ]);
                callback();
            });
        }
        function complete(err3) {
            /* istanbul ignore if */ if (err3) return _pouchdbUtils.nextTick(function() {
                callback2(err3);
            });
            txn.batch([
                {
                    prefix: stores.metaStore,
                    type: 'put',
                    key: UPDATE_SEQ_KEY,
                    value: newUpdateSeq
                },
                {
                    prefix: stores.metaStore,
                    type: 'put',
                    key: DOC_COUNT_KEY,
                    value: db._docCount + docCountDelta
                }
            ]);
            txn.execute(db, function(err) {
                /* istanbul ignore if */ if (err) return callback2(err);
                db._docCount += docCountDelta;
                db._updateSeq = newUpdateSeq;
                levelChanges.notify(name1);
                _pouchdbUtils.nextTick(function() {
                    callback2(null, results);
                });
            });
        }
        if (!docInfos.length) return callback2(null, []);
        verifyAttachments(function(err4) {
            if (err4) return callback2(err4);
            fetchExistingDocs(function(err) {
                /* istanbul ignore if */ if (err) return callback2(err);
                _pouchdbAdapterUtils.processDocs(revLimit, docInfos, api, fetchedDocs, txn, results, writeDoc, opts, finish1);
            });
        });
    });
    api._allDocs = function(opts2, callback3) {
        if ('keys' in opts2) return _pouchdbAdapterUtils.allDocsKeysQuery(this, opts2);
        return readLock(function(opts, callback) {
            opts = _pouchdbUtils.clone(opts);
            countDocs(function(err, docCount) {
                /* istanbul ignore if */ if (err) return callback(err);
                var readstreamOpts = {
                };
                var skip = opts.skip || 0;
                if (opts.startkey) readstreamOpts.gte = opts.startkey;
                if (opts.endkey) readstreamOpts.lte = opts.endkey;
                if (opts.key) readstreamOpts.gte = readstreamOpts.lte = opts.key;
                if (opts.descending) {
                    readstreamOpts.reverse = true;
                    // switch start and ends
                    var tmp = readstreamOpts.lte;
                    readstreamOpts.lte = readstreamOpts.gte;
                    readstreamOpts.gte = tmp;
                }
                var limit;
                if (typeof opts.limit === 'number') limit = opts.limit;
                if (limit === 0 || 'gte' in readstreamOpts && 'lte' in readstreamOpts && readstreamOpts.gte > readstreamOpts.lte) {
                    // should return 0 results when start is greater than end.
                    // normally level would "fix" this for us by reversing the order,
                    // so short-circuit instead
                    var returnVal = {
                        total_rows: docCount,
                        offset: opts.skip,
                        rows: []
                    };
                    /* istanbul ignore if */ if (opts.update_seq) returnVal.update_seq = db._updateSeq;
                    return callback(null, returnVal);
                }
                var results = [];
                var docstream = stores.docStore.readStream(readstreamOpts);
                var throughStream = _through2.obj(function(entry, _, next) {
                    var metadata = entry.value;
                    // winningRev and deleted are performance-killers, but
                    // in newer versions of PouchDB, they are cached on the metadata
                    var winningRev$$1 = getWinningRev(metadata);
                    var deleted = getIsDeleted(metadata, winningRev$$1);
                    if (!deleted) {
                        if (skip-- > 0) {
                            next();
                            return;
                        } else if (typeof limit === 'number' && limit-- <= 0) {
                            docstream.unpipe();
                            docstream.destroy();
                            next();
                            return;
                        }
                    } else if (opts.deleted !== 'ok') {
                        next();
                        return;
                    }
                    function allDocsInner(data) {
                        var doc = {
                            id: metadata.id,
                            key: metadata.id,
                            value: {
                                rev: winningRev$$1
                            }
                        };
                        if (opts.include_docs) {
                            doc.doc = data;
                            doc.doc._rev = doc.value.rev;
                            if (opts.conflicts) {
                                var conflicts = _pouchdbMerge.collectConflicts(metadata);
                                if (conflicts.length) doc.doc._conflicts = conflicts;
                            }
                            for(var att in doc.doc._attachments)if (doc.doc._attachments.hasOwnProperty(att)) doc.doc._attachments[att].stub = true;
                        }
                        if (opts.inclusive_end === false && metadata.id === opts.endkey) return next();
                        else if (deleted) {
                            if (opts.deleted === 'ok') {
                                doc.value.deleted = true;
                                doc.doc = null;
                            } else /* istanbul ignore next */ return next();
                        }
                        results.push(doc);
                        next();
                    }
                    if (opts.include_docs) {
                        var seq = metadata.rev_map[winningRev$$1];
                        stores.bySeqStore.get(formatSeq(seq), function(err, data) {
                            allDocsInner(data);
                        });
                    } else allDocsInner();
                }, function(next) {
                    Promise.resolve().then(function() {
                        if (opts.include_docs && opts.attachments) return fetchAttachments(results, stores, opts);
                    }).then(function() {
                        var returnVal = {
                            total_rows: docCount,
                            offset: opts.skip,
                            rows: results
                        };
                        /* istanbul ignore if */ if (opts.update_seq) returnVal.update_seq = db._updateSeq;
                        callback(null, returnVal);
                    }, callback);
                    next();
                }).on('unpipe', function() {
                    throughStream.end();
                });
                docstream.on('error', callback);
                docstream.pipe(throughStream);
            });
        })(opts2, callback3);
    };
    api._changes = function(opts) {
        opts = _pouchdbUtils.clone(opts);
        if (opts.continuous) {
            var id = name1 + ':' + _pouchdbUtils.uuid();
            levelChanges.addListener(name1, id, api, opts);
            levelChanges.notify(name1);
            return {
                cancel: function() {
                    levelChanges.removeListener(name1, id);
                }
            };
        }
        var descending = opts.descending;
        var results = [];
        var lastSeq = opts.since || 0;
        var called = 0;
        var streamOpts = {
            reverse: descending
        };
        var limit;
        if ('limit' in opts && opts.limit > 0) limit = opts.limit;
        if (!streamOpts.reverse) streamOpts.start = formatSeq(opts.since || 0);
        var docIds = opts.doc_ids && new _pouchdbCollections.Set(opts.doc_ids);
        var filter = _pouchdbUtils.filterChange(opts);
        var docIdsToMetadata = new _pouchdbCollections.Map();
        function complete() {
            opts.done = true;
            if (opts.return_docs && opts.limit) /* istanbul ignore if */ {
                if (opts.limit < results.length) results.length = opts.limit;
            }
            changeStream.unpipe(throughStream);
            changeStream.destroy();
            if (!opts.continuous && !opts.cancelled) {
                if (opts.include_docs && opts.attachments && opts.return_docs) fetchAttachments(results, stores, opts).then(function() {
                    opts.complete(null, {
                        results: results,
                        last_seq: lastSeq
                    });
                });
                else opts.complete(null, {
                    results: results,
                    last_seq: lastSeq
                });
            }
        }
        var changeStream = stores.bySeqStore.readStream(streamOpts);
        var throughStream = _through2.obj(function(data, _, next) {
            if (limit && called >= limit) {
                complete();
                return next();
            }
            if (opts.cancelled || opts.done) return next();
            var seq = parseSeq(data.key);
            var doc1 = data.value;
            if (seq === opts.since && !descending) // couchdb ignores `since` if descending=true
            return next();
            if (docIds && !docIds.has(doc1._id)) return next();
            var metadata1;
            function onGetMetadata(metadata) {
                var winningRev$$1 = getWinningRev(metadata);
                function onGetWinningDoc(winningDoc) {
                    var change = opts.processChange(winningDoc, metadata, opts);
                    change.seq = metadata.seq;
                    var filtered = filter(change);
                    if (typeof filtered === 'object') return opts.complete(filtered);
                    if (filtered) {
                        called++;
                        if (opts.attachments && opts.include_docs) // fetch attachment immediately for the benefit
                        // of live listeners
                        fetchAttachments([
                            change
                        ], stores, opts).then(function() {
                            opts.onChange(change);
                        });
                        else opts.onChange(change);
                        if (opts.return_docs) results.push(change);
                    }
                    next();
                }
                if (metadata.seq !== seq) // some other seq is later
                return next();
                lastSeq = seq;
                if (winningRev$$1 === doc1._rev) return onGetWinningDoc(doc1);
                // fetch the winner
                var winningSeq = metadata.rev_map[winningRev$$1];
                stores.bySeqStore.get(formatSeq(winningSeq), function(err, doc) {
                    onGetWinningDoc(doc);
                });
            }
            metadata1 = docIdsToMetadata.get(doc1._id);
            if (metadata1) return onGetMetadata(metadata1);
            // metadata not cached, have to go fetch it
            stores.docStore.get(doc1._id, function(err, metadata) {
                /* istanbul ignore if */ if (opts.cancelled || opts.done || db.isClosed() || _pouchdbAdapterUtils.isLocalId(metadata.id)) return next();
                docIdsToMetadata.set(doc1._id, metadata);
                onGetMetadata(metadata);
            });
        }, function(next) {
            if (opts.cancelled) return next();
            if (opts.return_docs && opts.limit) /* istanbul ignore if */ {
                if (opts.limit < results.length) results.length = opts.limit;
            }
            next();
        }).on('unpipe', function() {
            throughStream.end();
            complete();
        });
        changeStream.pipe(throughStream);
        return {
            cancel: function() {
                opts.cancelled = true;
                complete();
            }
        };
    };
    api._close = function(callback) {
        /* istanbul ignore if */ if (db.isClosed()) return callback(_pouchdbErrors.createError(_pouchdbErrors.NOT_OPEN));
        db.close(function(err) {
            /* istanbul ignore if */ if (err) callback(err);
            else {
                dbStore1.delete(name1);
                callback();
            }
        });
    };
    api._getRevisionTree = function(docId, callback) {
        stores.docStore.get(docId, function(err, metadata) {
            if (err) callback(_pouchdbErrors.createError(_pouchdbErrors.MISSING_DOC));
            else callback(null, metadata.rev_tree);
        });
    };
    api._doCompaction = writeLock(function(docId, revs, opts, callback) {
        api._doCompactionNoLock(docId, revs, opts, callback);
    });
    // the NoLock version is for use by bulkDocs
    api._doCompactionNoLock = function(docId, revs, opts3, callback) {
        if (typeof opts3 === 'function') {
            callback = opts3;
            opts3 = {
            };
        }
        if (!revs.length) return callback();
        var txn = opts3.ctx || new LevelTransaction();
        txn.get(stores.docStore, docId, function(err5, metadata) {
            /* istanbul ignore if */ if (err5) return callback(err5);
            var seqs = revs.map(function(rev) {
                var seq = metadata.rev_map[rev];
                delete metadata.rev_map[rev];
                return seq;
            });
            _pouchdbMerge.traverseRevTree(metadata.rev_tree, function(isLeaf, pos, revHash, ctx, opts) {
                var rev = pos + '-' + revHash;
                if (revs.indexOf(rev) !== -1) opts.status = 'missing';
            });
            var batch = [];
            batch.push({
                key: metadata.id,
                value: metadata,
                type: 'put',
                prefix: stores.docStore
            });
            var digestMap = {
            };
            var numDone1 = 0;
            var overallErr1;
            function checkDone1(err) {
                /* istanbul ignore if */ if (err) overallErr1 = err;
                if (++numDone1 === revs.length) {
                    /* istanbul ignore if */ if (overallErr1) return callback(overallErr1);
                    deleteOrphanedAttachments();
                }
            }
            function finish(err) {
                /* istanbul ignore if */ if (err) return callback(err);
                txn.batch(batch);
                if (opts3.ctx) // don't execute immediately
                return callback();
                txn.execute(db, callback);
            }
            function deleteOrphanedAttachments() {
                var possiblyOrphanedAttachments = Object.keys(digestMap);
                if (!possiblyOrphanedAttachments.length) return finish();
                var numDone = 0;
                var overallErr;
                function checkDone(err) {
                    /* istanbul ignore if */ if (err) overallErr = err;
                    if (++numDone === possiblyOrphanedAttachments.length) finish(overallErr);
                }
                var refsToDelete = new _pouchdbCollections.Map();
                revs.forEach(function(rev) {
                    refsToDelete.set(docId + '@' + rev, true);
                });
                possiblyOrphanedAttachments.forEach(function(digest) {
                    txn.get(stores.attachmentStore, digest, function(err, attData) {
                        /* istanbul ignore if */ if (err) {
                            if (err.name === 'NotFoundError') return checkDone();
                            else return checkDone(err);
                        }
                        var refs = Object.keys(attData.refs || {
                        }).filter(function(ref) {
                            return !refsToDelete.has(ref);
                        });
                        var newRefs = {
                        };
                        refs.forEach(function(ref) {
                            newRefs[ref] = true;
                        });
                        if (refs.length) batch.push({
                            key: digest,
                            type: 'put',
                            value: {
                                refs: newRefs
                            },
                            prefix: stores.attachmentStore
                        });
                        else batch = batch.concat([
                            {
                                key: digest,
                                type: 'del',
                                prefix: stores.attachmentStore
                            },
                            {
                                key: digest,
                                type: 'del',
                                prefix: stores.binaryStore
                            }
                        ]);
                        checkDone();
                    });
                });
            }
            seqs.forEach(function(seq) {
                batch.push({
                    key: formatSeq(seq),
                    type: 'del',
                    prefix: stores.bySeqStore
                });
                txn.get(stores.bySeqStore, formatSeq(seq), function(err, doc) {
                    /* istanbul ignore if */ if (err) {
                        if (err.name === 'NotFoundError') return checkDone1();
                        else return checkDone1(err);
                    }
                    var atts = Object.keys(doc._attachments || {
                    });
                    atts.forEach(function(attName) {
                        var digest = doc._attachments[attName].digest;
                        digestMap[digest] = true;
                    });
                    checkDone1();
                });
            });
        });
    };
    api._getLocal = function(id, callback) {
        stores.localStore.get(id, function(err, doc) {
            if (err) callback(_pouchdbErrors.createError(_pouchdbErrors.MISSING_DOC));
            else callback(null, doc);
        });
    };
    api._putLocal = function(doc, opts, callback) {
        if (typeof opts === 'function') {
            callback = opts;
            opts = {
            };
        }
        if (opts.ctx) api._putLocalNoLock(doc, opts, callback);
        else api._putLocalWithLock(doc, opts, callback);
    };
    api._putLocalWithLock = writeLock(function(doc, opts, callback) {
        api._putLocalNoLock(doc, opts, callback);
    });
    // the NoLock version is for use by bulkDocs
    api._putLocalNoLock = function(doc, opts, callback) {
        delete doc._revisions; // ignore this, trust the rev
        var oldRev = doc._rev;
        var id = doc._id;
        var txn = opts.ctx || new LevelTransaction();
        txn.get(stores.localStore, id, function(err6, resp) {
            if (err6 && oldRev) return callback(_pouchdbErrors.createError(_pouchdbErrors.REV_CONFLICT));
            if (resp && resp._rev !== oldRev) return callback(_pouchdbErrors.createError(_pouchdbErrors.REV_CONFLICT));
            doc._rev = oldRev ? '0-' + (parseInt(oldRev.split('-')[1], 10) + 1) : '0-1';
            var batch = [
                {
                    type: 'put',
                    prefix: stores.localStore,
                    key: id,
                    value: doc
                }
            ];
            txn.batch(batch);
            var ret = {
                ok: true,
                id: doc._id,
                rev: doc._rev
            };
            if (opts.ctx) // don't execute immediately
            return callback(null, ret);
            txn.execute(db, function(err) {
                /* istanbul ignore if */ if (err) return callback(err);
                callback(null, ret);
            });
        });
    };
    api._removeLocal = function(doc, opts, callback) {
        if (typeof opts === 'function') {
            callback = opts;
            opts = {
            };
        }
        if (opts.ctx) api._removeLocalNoLock(doc, opts, callback);
        else api._removeLocalWithLock(doc, opts, callback);
    };
    api._removeLocalWithLock = writeLock(function(doc, opts, callback) {
        api._removeLocalNoLock(doc, opts, callback);
    });
    // the NoLock version is for use by bulkDocs
    api._removeLocalNoLock = function(doc, opts, callback) {
        var txn = opts.ctx || new LevelTransaction();
        txn.get(stores.localStore, doc._id, function(err7, resp) {
            if (err7) {
                /* istanbul ignore if */ if (err7.name !== 'NotFoundError') return callback(err7);
                else return callback(_pouchdbErrors.createError(_pouchdbErrors.MISSING_DOC));
            }
            if (resp._rev !== doc._rev) return callback(_pouchdbErrors.createError(_pouchdbErrors.REV_CONFLICT));
            txn.batch([
                {
                    prefix: stores.localStore,
                    type: 'del',
                    key: doc._id
                }
            ]);
            var ret = {
                ok: true,
                id: doc._id,
                rev: '0-0'
            };
            if (opts.ctx) // don't execute immediately
            return callback(null, ret);
            txn.execute(db, function(err) {
                /* istanbul ignore if */ if (err) return callback(err);
                callback(null, ret);
            });
        });
    };
    // close and delete open leveldb stores
    api._destroy = function(opts, callback) {
        var dbStore;
        var leveldownName = _pouchdbUtils.functionName(leveldown);
        /* istanbul ignore else */ if (dbStores.has(leveldownName)) dbStore = dbStores.get(leveldownName);
        else return callDestroy(name1, callback);
        /* istanbul ignore else */ if (dbStore.has(name1)) {
            levelChanges.removeAllListeners(name1);
            dbStore.get(name1).close(function() {
                dbStore.delete(name1);
                callDestroy(name1, callback);
            });
        } else callDestroy(name1, callback);
    };
    function callDestroy(name, cb) {
        // May not exist if leveldown is backed by memory adapter
        /* istanbul ignore else */ if ('destroy' in leveldown) leveldown.destroy(name, cb);
        else cb(null);
    }
}
exports.default = LevelPouch;

},{"levelup":"81yFL","sublevel-pouchdb":"e3YRK","through2":"hTq2l","argsarray":"77cNC","double-ended-queue":"4P4yi","buffer-from":"eIymS","pouchdb-adapter-utils":"cxjBB","pouchdb-merge":"13CY1","pouchdb-json":"V5vM4","pouchdb-md5":"lD4Fr","pouchdb-binary-utils":"lzkbJ","pouchdb-collections":"enQVE","pouchdb-utils":"eWppo","pouchdb-errors":"alywA","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"81yFL":[function(require,module,exports) {
var process = require("process");
var EventEmitter = require('events').EventEmitter;
var inherits = require('util').inherits;
var extend = require('xtend');
var DeferredLevelDOWN = require('deferred-leveldown');
var IteratorStream = require('level-iterator-stream');
var Batch = require('./batch');
var errors = require('level-errors');
var supports = require('level-supports');
var assert = require('assert');
var promisify = require('./promisify');
var getCallback = require('./common').getCallback;
var getOptions = require('./common').getOptions;
var WriteError = errors.WriteError;
var ReadError = errors.ReadError;
var NotFoundError = errors.NotFoundError;
var OpenError = errors.OpenError;
var InitializationError = errors.InitializationError;
// Possible AbstractLevelDOWN#status values:
//  - 'new'     - newly created, not opened or closed
//  - 'opening' - waiting for the database to be opened, post open()
//  - 'open'    - successfully opened the database, available for use
//  - 'closing' - waiting for the database to be closed, post close()
//  - 'closed'  - database has been successfully closed, should not be
//                 used except for another open() operation
function LevelUP(db, options, callback) {
    if (!(this instanceof LevelUP)) return new LevelUP(db, options, callback);
    var error;
    var self = this;
    EventEmitter.call(this);
    this.setMaxListeners(Infinity);
    if (typeof options === 'function') {
        callback = options;
        options = {
        };
    }
    options = options || {
    };
    if (!db || typeof db !== 'object') {
        error = new InitializationError('First argument must be an abstract-leveldown compliant store');
        if (typeof callback === 'function') return process.nextTick(callback, error);
        throw error;
    }
    assert.strictEqual(typeof db.status, 'string', '.status required, old abstract-leveldown');
    this.options = getOptions(options);
    this._db = db;
    this.db = new DeferredLevelDOWN(db);
    this.open(callback || function(err) {
        if (err) self.emit('error', err);
    });
    // Create manifest based on deferred-leveldown's
    this.supports = supports(this.db.supports, {
        status: false,
        deferredOpen: true,
        openCallback: true,
        promises: true,
        streams: true
    });
    // Experimental: enrich levelup interface
    Object.keys(this.supports.additionalMethods).forEach(function(method) {
        if (this[method] != null) return;
        // Don't do this.db[method].bind() because this.db is dynamic.
        this[method] = function() {
            return this.db[method].apply(this.db, arguments);
        };
    }, this);
}
LevelUP.prototype.emit = EventEmitter.prototype.emit;
LevelUP.prototype.once = EventEmitter.prototype.once;
inherits(LevelUP, EventEmitter);
LevelUP.prototype.open = function(opts, callback) {
    var self = this;
    var promise;
    if (typeof opts === 'function') {
        callback = opts;
        opts = null;
    }
    if (!callback) {
        callback = promisify();
        promise = callback.promise;
    }
    if (!opts) opts = this.options;
    if (this.isOpen()) {
        process.nextTick(callback, null, self);
        return promise;
    }
    if (this._isOpening()) {
        this.once('open', function() {
            callback(null, self);
        });
        return promise;
    }
    this.emit('opening');
    this.db.open(opts, function(err) {
        if (err) return callback(new OpenError(err));
        self.db = self._db;
        callback(null, self);
        self.emit('open');
        self.emit('ready');
    });
    return promise;
};
LevelUP.prototype.close = function(callback) {
    var self = this;
    var promise;
    if (!callback) {
        callback = promisify();
        promise = callback.promise;
    }
    if (this.isOpen()) {
        this.db.close(function() {
            self.emit('closed');
            callback.apply(null, arguments);
        });
        this.emit('closing');
        this.db = new DeferredLevelDOWN(this._db);
    } else if (this.isClosed()) process.nextTick(callback);
    else if (this.db.status === 'closing') this.once('closed', callback);
    else if (this._isOpening()) this.once('open', function() {
        self.close(callback);
    });
    return promise;
};
LevelUP.prototype.isOpen = function() {
    return this.db.status === 'open';
};
LevelUP.prototype._isOpening = function() {
    return this.db.status === 'opening';
};
LevelUP.prototype.isClosed = function() {
    return /^clos|new/.test(this.db.status);
};
LevelUP.prototype.get = function(key, options, callback) {
    var promise;
    callback = getCallback(options, callback);
    if (!callback) {
        callback = promisify();
        promise = callback.promise;
    }
    if (maybeError(this, callback)) return promise;
    options = getOptions(options);
    this.db.get(key, options, function(err, value) {
        if (err) {
            if (/notfound/i.test(err) || err.notFound) err = new NotFoundError('Key not found in database [' + key + ']', err);
            else err = new ReadError(err);
            return callback(err);
        }
        callback(null, value);
    });
    return promise;
};
LevelUP.prototype.put = function(key, value, options, callback) {
    var self = this;
    var promise;
    callback = getCallback(options, callback);
    if (!callback) {
        callback = promisify();
        promise = callback.promise;
    }
    if (maybeError(this, callback)) return promise;
    options = getOptions(options);
    this.db.put(key, value, options, function(err) {
        if (err) return callback(new WriteError(err));
        self.emit('put', key, value);
        callback();
    });
    return promise;
};
LevelUP.prototype.del = function(key, options, callback) {
    var self = this;
    var promise;
    callback = getCallback(options, callback);
    if (!callback) {
        callback = promisify();
        promise = callback.promise;
    }
    if (maybeError(this, callback)) return promise;
    options = getOptions(options);
    this.db.del(key, options, function(err) {
        if (err) return callback(new WriteError(err));
        self.emit('del', key);
        callback();
    });
    return promise;
};
LevelUP.prototype.batch = function(arr, options, callback) {
    if (!arguments.length) return new Batch(this);
    var self = this;
    var promise;
    if (typeof arr === 'function') callback = arr;
    else callback = getCallback(options, callback);
    if (!callback) {
        callback = promisify();
        promise = callback.promise;
    }
    if (maybeError(this, callback)) return promise;
    options = getOptions(options);
    this.db.batch(arr, options, function(err) {
        if (err) return callback(new WriteError(err));
        self.emit('batch', arr);
        callback();
    });
    return promise;
};
LevelUP.prototype.iterator = function(options) {
    return this.db.iterator(options);
};
LevelUP.prototype.clear = function(options, callback) {
    var self = this;
    var promise;
    callback = getCallback(options, callback);
    options = getOptions(options);
    if (!callback) {
        callback = promisify();
        promise = callback.promise;
    }
    if (maybeError(this, callback)) return promise;
    this.db.clear(options, function(err) {
        if (err) return callback(new WriteError(err));
        self.emit('clear', options);
        callback();
    });
    return promise;
};
LevelUP.prototype.readStream = LevelUP.prototype.createReadStream = function(options) {
    options = extend({
        keys: true,
        values: true
    }, options);
    if (typeof options.limit !== 'number') options.limit = -1;
    return new IteratorStream(this.db.iterator(options), options);
};
LevelUP.prototype.keyStream = LevelUP.prototype.createKeyStream = function(options) {
    return this.createReadStream(extend(options, {
        keys: true,
        values: false
    }));
};
LevelUP.prototype.valueStream = LevelUP.prototype.createValueStream = function(options) {
    return this.createReadStream(extend(options, {
        keys: false,
        values: true
    }));
};
LevelUP.prototype.toString = function() {
    return 'LevelUP';
};
LevelUP.prototype.type = 'levelup';
function maybeError(db, callback) {
    if (!db._isOpening() && !db.isOpen()) {
        process.nextTick(callback, new ReadError('Database is not open'));
        return true;
    }
}
LevelUP.errors = errors;
module.exports = LevelUP.default = LevelUP;

},{"process":"lDnB8","events":"bHM3D","util":"7sOXW","xtend":"2GMXX","deferred-leveldown":"emkVv","level-iterator-stream":"sfkOa","./batch":"8xgxr","level-errors":"jUsAO","level-supports":"1scZb","assert":"ilVUv","./promisify":"2boiA","./common":"3vVgQ"}],"7sOXW":[function(require,module,exports) {
var process = require("process");
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {
    };
    for(var i = 0; i < keys.length; i++)descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    return descriptors;
};
var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
    if (!isString(f)) {
        var objects = [];
        for(var i = 0; i < arguments.length; i++)objects.push(inspect(arguments[i]));
        return objects.join(' ');
    }
    var i = 1;
    var args = arguments;
    var len = args.length;
    var str = String(f).replace(formatRegExp, function(x) {
        if (x === '%%') return '%';
        if (i >= len) return x;
        switch(x){
            case '%s':
                return String(args[i++]);
            case '%d':
                return Number(args[i++]);
            case '%j':
                try {
                    return JSON.stringify(args[i++]);
                } catch (_) {
                    return '[Circular]';
                }
            default:
                return x;
        }
    });
    for(var x1 = args[i]; i < len; x1 = args[++i])if (isNull(x1) || !isObject(x1)) str += ' ' + x1;
    else str += ' ' + inspect(x1);
    return str;
};
// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
    if (typeof process !== 'undefined' && process.noDeprecation === true) return fn;
    // Allow for deprecating things in the process of starting up.
    if (typeof process === 'undefined') return function() {
        return exports.deprecate(fn, msg).apply(this, arguments);
    };
    var warned = false;
    function deprecated() {
        if (!warned) {
            if (process.throwDeprecation) throw new Error(msg);
            else if (process.traceDeprecation) console.trace(msg);
            else console.error(msg);
            warned = true;
        }
        return fn.apply(this, arguments);
    }
    return deprecated;
};
var debugs = {
};
var debugEnvRegex = /^$/;
var debugEnv;
exports.debuglog = function(set) {
    set = set.toUpperCase();
    if (!debugs[set]) {
        if (debugEnvRegex.test(set)) {
            var pid = process.pid;
            debugs[set] = function() {
                var msg = exports.format.apply(exports, arguments);
                console.error('%s %d: %s', set, pid, msg);
            };
        } else debugs[set] = function() {
        };
    }
    return debugs[set];
};
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */ /* legacy: obj, showHidden, depth, colors*/ function inspect(obj, opts) {
    // default options
    var ctx = {
        seen: [],
        stylize: stylizeNoColor
    };
    // legacy...
    if (arguments.length >= 3) ctx.depth = arguments[2];
    if (arguments.length >= 4) ctx.colors = arguments[3];
    if (isBoolean(opts)) // legacy...
    ctx.showHidden = opts;
    else if (opts) // got an "options" object
    exports._extend(ctx, opts);
    // set default options
    if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
    if (isUndefined(ctx.depth)) ctx.depth = 2;
    if (isUndefined(ctx.colors)) ctx.colors = false;
    if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
    if (ctx.colors) ctx.stylize = stylizeWithColor;
    return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;
// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
    'bold': [
        1,
        22
    ],
    'italic': [
        3,
        23
    ],
    'underline': [
        4,
        24
    ],
    'inverse': [
        7,
        27
    ],
    'white': [
        37,
        39
    ],
    'grey': [
        90,
        39
    ],
    'black': [
        30,
        39
    ],
    'blue': [
        34,
        39
    ],
    'cyan': [
        36,
        39
    ],
    'green': [
        32,
        39
    ],
    'magenta': [
        35,
        39
    ],
    'red': [
        31,
        39
    ],
    'yellow': [
        33,
        39
    ]
};
// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
    'special': 'cyan',
    'number': 'yellow',
    'boolean': 'yellow',
    'undefined': 'grey',
    'null': 'bold',
    'string': 'green',
    'date': 'magenta',
    // "name": intentionally not styling
    'regexp': 'red'
};
function stylizeWithColor(str, styleType) {
    var style = inspect.styles[styleType];
    if (style) return '\u001b[' + inspect.colors[style][0] + 'm' + str + '\u001b[' + inspect.colors[style][1] + 'm';
    else return str;
}
function stylizeNoColor(str, styleType) {
    return str;
}
function arrayToHash(array) {
    var hash = {
    };
    array.forEach(function(val, idx) {
        hash[val] = true;
    });
    return hash;
}
function formatValue(ctx, value, recurseTimes) {
    // Provide a hook for user-specified inspect functions.
    // Check that value is an object with an inspect function on it
    if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
    value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
    !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!isString(ret)) ret = formatValue(ctx, ret, recurseTimes);
        return ret;
    }
    // Primitive types cannot have properties
    var primitive = formatPrimitive(ctx, value);
    if (primitive) return primitive;
    // Look up the keys of the object.
    var keys = Object.keys(value);
    var visibleKeys = arrayToHash(keys);
    if (ctx.showHidden) keys = Object.getOwnPropertyNames(value);
    // IE doesn't make error fields non-enumerable
    // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
    if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) return formatError(value);
    // Some type of object without properties can be shortcutted.
    if (keys.length === 0) {
        if (isFunction(value)) {
            var name = value.name ? ': ' + value.name : '';
            return ctx.stylize('[Function' + name + ']', 'special');
        }
        if (isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        if (isDate(value)) return ctx.stylize(Date.prototype.toString.call(value), 'date');
        if (isError(value)) return formatError(value);
    }
    var base = '', array = false, braces = [
        '{',
        '}'
    ];
    // Make Array say that they are Array
    if (isArray(value)) {
        array = true;
        braces = [
            '[',
            ']'
        ];
    }
    // Make functions say that they are functions
    if (isFunction(value)) {
        var n = value.name ? ': ' + value.name : '';
        base = ' [Function' + n + ']';
    }
    // Make RegExps say that they are RegExps
    if (isRegExp(value)) base = ' ' + RegExp.prototype.toString.call(value);
    // Make dates with properties first say the date
    if (isDate(value)) base = ' ' + Date.prototype.toUTCString.call(value);
    // Make error with message first say the error
    if (isError(value)) base = ' ' + formatError(value);
    if (keys.length === 0 && (!array || value.length == 0)) return braces[0] + base + braces[1];
    if (recurseTimes < 0) {
        if (isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        else return ctx.stylize('[Object]', 'special');
    }
    ctx.seen.push(value);
    var output;
    if (array) output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
    else output = keys.map(function(key) {
        return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
    ctx.seen.pop();
    return reduceToSingleString(output, base, braces);
}
function formatPrimitive(ctx, value) {
    if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');
    if (isString(value)) {
        var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
        return ctx.stylize(simple, 'string');
    }
    if (isNumber(value)) return ctx.stylize('' + value, 'number');
    if (isBoolean(value)) return ctx.stylize('' + value, 'boolean');
    // For some reason typeof null is "object", so special case here.
    if (isNull(value)) return ctx.stylize('null', 'null');
}
function formatError(value) {
    return '[' + Error.prototype.toString.call(value) + ']';
}
function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
    var output = [];
    for(var i = 0, l = value.length; i < l; ++i)if (hasOwnProperty(value, String(i))) output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    else output.push('');
    keys.forEach(function(key) {
        if (!key.match(/^\d+$/)) output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    });
    return output;
}
function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
    var name, str, desc;
    desc = Object.getOwnPropertyDescriptor(value, key) || {
        value: value[key]
    };
    if (desc.get) {
        if (desc.set) str = ctx.stylize('[Getter/Setter]', 'special');
        else str = ctx.stylize('[Getter]', 'special');
    } else if (desc.set) str = ctx.stylize('[Setter]', 'special');
    if (!hasOwnProperty(visibleKeys, key)) name = '[' + key + ']';
    if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
            if (isNull(recurseTimes)) str = formatValue(ctx, desc.value, null);
            else str = formatValue(ctx, desc.value, recurseTimes - 1);
            if (str.indexOf('\n') > -1) {
                if (array) str = str.split('\n').map(function(line) {
                    return '  ' + line;
                }).join('\n').substr(2);
                else str = '\n' + str.split('\n').map(function(line) {
                    return '   ' + line;
                }).join('\n');
            }
        } else str = ctx.stylize('[Circular]', 'special');
    }
    if (isUndefined(name)) {
        if (array && key.match(/^\d+$/)) return str;
        name = JSON.stringify('' + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
            name = name.substr(1, name.length - 2);
            name = ctx.stylize(name, 'name');
        } else {
            name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
            name = ctx.stylize(name, 'string');
        }
    }
    return name + ': ' + str;
}
function reduceToSingleString(output, base, braces) {
    var numLinesEst = 0;
    var length = output.reduce(function(prev, cur) {
        numLinesEst++;
        if (cur.indexOf('\n') >= 0) numLinesEst++;
        return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
    }, 0);
    if (length > 60) return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
    return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}
// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
exports.types = require('./support/types');
function isArray(ar) {
    return Array.isArray(ar);
}
exports.isArray = isArray;
function isBoolean(arg) {
    return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;
function isNull(arg) {
    return arg === null;
}
exports.isNull = isNull;
function isNullOrUndefined(arg) {
    return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;
function isNumber(arg) {
    return typeof arg === 'number';
}
exports.isNumber = isNumber;
function isString(arg) {
    return typeof arg === 'string';
}
exports.isString = isString;
function isSymbol(arg) {
    return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;
function isUndefined(arg) {
    return arg === void 0;
}
exports.isUndefined = isUndefined;
function isRegExp(re) {
    return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;
exports.types.isRegExp = isRegExp;
function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;
function isDate(d) {
    return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;
exports.types.isDate = isDate;
function isError(e) {
    return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;
exports.types.isNativeError = isError;
function isFunction(arg) {
    return typeof arg === 'function';
}
exports.isFunction = isFunction;
function isPrimitive(arg) {
    return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;
exports.isBuffer = require('./support/isBuffer');
function objectToString(o) {
    return Object.prototype.toString.call(o);
}
function pad(n) {
    return n < 10 ? '0' + n.toString(10) : n.toString(10);
}
var months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];
// 26 Feb 16:19:34
function timestamp() {
    var d = new Date();
    var time = [
        pad(d.getHours()),
        pad(d.getMinutes()),
        pad(d.getSeconds())
    ].join(':');
    return [
        d.getDate(),
        months[d.getMonth()],
        time
    ].join(' ');
}
// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
    console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};
/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */ exports.inherits = require('inherits');
exports._extend = function(origin, add) {
    // Don't do anything if add isn't an object
    if (!add || !isObject(add)) return origin;
    var keys = Object.keys(add);
    var i = keys.length;
    while(i--)origin[keys[i]] = add[keys[i]];
    return origin;
};
function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;
exports.promisify = function promisify(original) {
    if (typeof original !== 'function') throw new TypeError('The "original" argument must be of type Function');
    if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
        var fn = original[kCustomPromisifiedSymbol];
        if (typeof fn !== 'function') throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        Object.defineProperty(fn, kCustomPromisifiedSymbol, {
            value: fn,
            enumerable: false,
            writable: false,
            configurable: true
        });
        return fn;
    }
    function fn() {
        var promiseResolve, promiseReject;
        var promise = new Promise(function(resolve, reject) {
            promiseResolve = resolve;
            promiseReject = reject;
        });
        var args = [];
        for(var i = 0; i < arguments.length; i++)args.push(arguments[i]);
        args.push(function(err, value) {
            if (err) promiseReject(err);
            else promiseResolve(value);
        });
        try {
            original.apply(this, args);
        } catch (err) {
            promiseReject(err);
        }
        return promise;
    }
    Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
    if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
        value: fn,
        enumerable: false,
        writable: false,
        configurable: true
    });
    return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
};
exports.promisify.custom = kCustomPromisifiedSymbol;
function callbackifyOnRejected(reason, cb) {
    // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
    // Because `null` is a special error value in callbacks which means "no error
    // occurred", we error-wrap so the callback consumer can distinguish between
    // "the promise rejected with null" or "the promise fulfilled with undefined".
    if (!reason) {
        var newReason = new Error('Promise was rejected with a falsy value');
        newReason.reason = reason;
        reason = newReason;
    }
    return cb(reason);
}
function callbackify(original) {
    if (typeof original !== 'function') throw new TypeError('The "original" argument must be of type Function');
    // We DO NOT return the promise as it gives the user a false sense that
    // the promise is actually somehow related to the callback's execution
    // and that the callback throwing will reject the promise.
    function callbackified() {
        var args = [];
        for(var i = 0; i < arguments.length; i++)args.push(arguments[i]);
        var maybeCb = args.pop();
        if (typeof maybeCb !== 'function') throw new TypeError('The last argument must be of type Function');
        var self = this;
        var cb = function() {
            return maybeCb.apply(self, arguments);
        };
        // In true node style we process the callback on `nextTick` with all the
        // implications (stack, `uncaughtException`, `async_hooks`)
        original.apply(this, args).then(function(ret) {
            process.nextTick(cb.bind(null, null, ret));
        }, function(rej) {
            process.nextTick(callbackifyOnRejected.bind(null, rej, cb));
        });
    }
    Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
    Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
    return callbackified;
}
exports.callbackify = callbackify;

},{"process":"lDnB8","./support/types":"5zACL","./support/isBuffer":"lDZRh","inherits":"d3hL2"}],"5zACL":[function(require,module,exports) {
// Currently in sync with Node.js lib/internal/util/types.js
// https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9
'use strict';
var isArgumentsObject = require('is-arguments');
var isGeneratorFunction = require('is-generator-function');
var whichTypedArray = require('which-typed-array');
var isTypedArray = require('is-typed-array');
function uncurryThis(f) {
    return f.call.bind(f);
}
var BigIntSupported = typeof BigInt !== 'undefined';
var SymbolSupported = typeof Symbol !== 'undefined';
var ObjectToString = uncurryThis(Object.prototype.toString);
var numberValue = uncurryThis(Number.prototype.valueOf);
var stringValue = uncurryThis(String.prototype.valueOf);
var booleanValue = uncurryThis(Boolean.prototype.valueOf);
if (BigIntSupported) var bigIntValue = uncurryThis(BigInt.prototype.valueOf);
if (SymbolSupported) var symbolValue = uncurryThis(Symbol.prototype.valueOf);
function checkBoxedPrimitive(value, prototypeValueOf) {
    if (typeof value !== 'object') return false;
    try {
        prototypeValueOf(value);
        return true;
    } catch (e) {
        return false;
    }
}
exports.isArgumentsObject = isArgumentsObject;
exports.isGeneratorFunction = isGeneratorFunction;
exports.isTypedArray = isTypedArray;
// Taken from here and modified for better browser support
// https://github.com/sindresorhus/p-is-promise/blob/cda35a513bda03f977ad5cde3a079d237e82d7ef/index.js
function isPromise(input) {
    return typeof Promise !== 'undefined' && input instanceof Promise || input !== null && typeof input === 'object' && typeof input.then === 'function' && typeof input.catch === 'function';
}
exports.isPromise = isPromise;
function isArrayBufferView(value) {
    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) return ArrayBuffer.isView(value);
    return isTypedArray(value) || isDataView(value);
}
exports.isArrayBufferView = isArrayBufferView;
function isUint8Array(value) {
    return whichTypedArray(value) === 'Uint8Array';
}
exports.isUint8Array = isUint8Array;
function isUint8ClampedArray(value) {
    return whichTypedArray(value) === 'Uint8ClampedArray';
}
exports.isUint8ClampedArray = isUint8ClampedArray;
function isUint16Array(value) {
    return whichTypedArray(value) === 'Uint16Array';
}
exports.isUint16Array = isUint16Array;
function isUint32Array(value) {
    return whichTypedArray(value) === 'Uint32Array';
}
exports.isUint32Array = isUint32Array;
function isInt8Array(value) {
    return whichTypedArray(value) === 'Int8Array';
}
exports.isInt8Array = isInt8Array;
function isInt16Array(value) {
    return whichTypedArray(value) === 'Int16Array';
}
exports.isInt16Array = isInt16Array;
function isInt32Array(value) {
    return whichTypedArray(value) === 'Int32Array';
}
exports.isInt32Array = isInt32Array;
function isFloat32Array(value) {
    return whichTypedArray(value) === 'Float32Array';
}
exports.isFloat32Array = isFloat32Array;
function isFloat64Array(value) {
    return whichTypedArray(value) === 'Float64Array';
}
exports.isFloat64Array = isFloat64Array;
function isBigInt64Array(value) {
    return whichTypedArray(value) === 'BigInt64Array';
}
exports.isBigInt64Array = isBigInt64Array;
function isBigUint64Array(value) {
    return whichTypedArray(value) === 'BigUint64Array';
}
exports.isBigUint64Array = isBigUint64Array;
function isMapToString(value) {
    return ObjectToString(value) === '[object Map]';
}
isMapToString.working = typeof Map !== 'undefined' && isMapToString(new Map());
function isMap(value) {
    if (typeof Map === 'undefined') return false;
    return isMapToString.working ? isMapToString(value) : value instanceof Map;
}
exports.isMap = isMap;
function isSetToString(value) {
    return ObjectToString(value) === '[object Set]';
}
isSetToString.working = typeof Set !== 'undefined' && isSetToString(new Set());
function isSet(value) {
    if (typeof Set === 'undefined') return false;
    return isSetToString.working ? isSetToString(value) : value instanceof Set;
}
exports.isSet = isSet;
function isWeakMapToString(value) {
    return ObjectToString(value) === '[object WeakMap]';
}
isWeakMapToString.working = typeof WeakMap !== 'undefined' && isWeakMapToString(new WeakMap());
function isWeakMap(value) {
    if (typeof WeakMap === 'undefined') return false;
    return isWeakMapToString.working ? isWeakMapToString(value) : value instanceof WeakMap;
}
exports.isWeakMap = isWeakMap;
function isWeakSetToString(value) {
    return ObjectToString(value) === '[object WeakSet]';
}
isWeakSetToString.working = typeof WeakSet !== 'undefined' && isWeakSetToString(new WeakSet());
function isWeakSet(value) {
    return isWeakSetToString(value);
}
exports.isWeakSet = isWeakSet;
function isArrayBufferToString(value) {
    return ObjectToString(value) === '[object ArrayBuffer]';
}
isArrayBufferToString.working = typeof ArrayBuffer !== 'undefined' && isArrayBufferToString(new ArrayBuffer());
function isArrayBuffer(value) {
    if (typeof ArrayBuffer === 'undefined') return false;
    return isArrayBufferToString.working ? isArrayBufferToString(value) : value instanceof ArrayBuffer;
}
exports.isArrayBuffer = isArrayBuffer;
function isDataViewToString(value) {
    return ObjectToString(value) === '[object DataView]';
}
isDataViewToString.working = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined' && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
function isDataView(value) {
    if (typeof DataView === 'undefined') return false;
    return isDataViewToString.working ? isDataViewToString(value) : value instanceof DataView;
}
exports.isDataView = isDataView;
// Store a copy of SharedArrayBuffer in case it's deleted elsewhere
var SharedArrayBufferCopy = typeof SharedArrayBuffer !== 'undefined' ? SharedArrayBuffer : undefined;
function isSharedArrayBufferToString(value) {
    return ObjectToString(value) === '[object SharedArrayBuffer]';
}
function isSharedArrayBuffer(value) {
    if (typeof SharedArrayBufferCopy === 'undefined') return false;
    if (typeof isSharedArrayBufferToString.working === 'undefined') isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
    return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(value) : value instanceof SharedArrayBufferCopy;
}
exports.isSharedArrayBuffer = isSharedArrayBuffer;
function isAsyncFunction(value) {
    return ObjectToString(value) === '[object AsyncFunction]';
}
exports.isAsyncFunction = isAsyncFunction;
function isMapIterator(value) {
    return ObjectToString(value) === '[object Map Iterator]';
}
exports.isMapIterator = isMapIterator;
function isSetIterator(value) {
    return ObjectToString(value) === '[object Set Iterator]';
}
exports.isSetIterator = isSetIterator;
function isGeneratorObject(value) {
    return ObjectToString(value) === '[object Generator]';
}
exports.isGeneratorObject = isGeneratorObject;
function isWebAssemblyCompiledModule(value) {
    return ObjectToString(value) === '[object WebAssembly.Module]';
}
exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
function isNumberObject(value) {
    return checkBoxedPrimitive(value, numberValue);
}
exports.isNumberObject = isNumberObject;
function isStringObject(value) {
    return checkBoxedPrimitive(value, stringValue);
}
exports.isStringObject = isStringObject;
function isBooleanObject(value) {
    return checkBoxedPrimitive(value, booleanValue);
}
exports.isBooleanObject = isBooleanObject;
function isBigIntObject(value) {
    return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
}
exports.isBigIntObject = isBigIntObject;
function isSymbolObject(value) {
    return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
}
exports.isSymbolObject = isSymbolObject;
function isBoxedPrimitive(value) {
    return isNumberObject(value) || isStringObject(value) || isBooleanObject(value) || isBigIntObject(value) || isSymbolObject(value);
}
exports.isBoxedPrimitive = isBoxedPrimitive;
function isAnyArrayBuffer(value) {
    return typeof Uint8Array !== 'undefined' && (isArrayBuffer(value) || isSharedArrayBuffer(value));
}
exports.isAnyArrayBuffer = isAnyArrayBuffer;
[
    'isProxy',
    'isExternal',
    'isModuleNamespaceObject'
].forEach(function(method) {
    Object.defineProperty(exports, method, {
        enumerable: false,
        value: function() {
            throw new Error(method + ' is not supported in userland');
        }
    });
});

},{"is-arguments":"8gHs4","is-generator-function":"kT8Ou","which-typed-array":"iDM4O","is-typed-array":"6c7tM"}],"8gHs4":[function(require,module,exports) {
'use strict';
var hasToStringTag = require('has-tostringtag/shams')();
var callBound = require('call-bind/callBound');
var $toString = callBound('Object.prototype.toString');
var isStandardArguments = function isArguments(value) {
    if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) return false;
    return $toString(value) === '[object Arguments]';
};
var isLegacyArguments = function isArguments(value) {
    if (isStandardArguments(value)) return true;
    return value !== null && typeof value === 'object' && typeof value.length === 'number' && value.length >= 0 && $toString(value) !== '[object Array]' && $toString(value.callee) === '[object Function]';
};
var supportsStandardArguments = function() {
    return isStandardArguments(arguments);
}();
isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests
module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;

},{"has-tostringtag/shams":"7aneK","call-bind/callBound":"f0fyo"}],"7aneK":[function(require,module,exports) {
'use strict';
var hasSymbols = require('has-symbols/shams');
module.exports = function hasToStringTagShams() {
    return hasSymbols() && !!Symbol.toStringTag;
};

},{"has-symbols/shams":"lhOu9"}],"kT8Ou":[function(require,module,exports) {
'use strict';
var toStr = Object.prototype.toString;
var fnToStr = Function.prototype.toString;
var isFnRegex = /^\s*(?:function)?\*/;
var hasToStringTag = require('has-tostringtag/shams')();
var getProto = Object.getPrototypeOf;
var getGeneratorFunc = function() {
    if (!hasToStringTag) return false;
    try {
        return Function('return function*() {}')();
    } catch (e) {
    }
};
var GeneratorFunction;
module.exports = function isGeneratorFunction(fn) {
    if (typeof fn !== 'function') return false;
    if (isFnRegex.test(fnToStr.call(fn))) return true;
    if (!hasToStringTag) {
        var str = toStr.call(fn);
        return str === '[object GeneratorFunction]';
    }
    if (!getProto) return false;
    if (typeof GeneratorFunction === 'undefined') {
        var generatorFunc = getGeneratorFunc();
        GeneratorFunction = generatorFunc ? getProto(generatorFunc) : false;
    }
    return getProto(fn) === GeneratorFunction;
};

},{"has-tostringtag/shams":"7aneK"}],"iDM4O":[function(require,module,exports) {
var global = arguments[3];
'use strict';
var forEach = require('foreach');
var availableTypedArrays = require('available-typed-arrays');
var callBound = require('call-bind/callBound');
var $toString = callBound('Object.prototype.toString');
var hasToStringTag = require('has-tostringtag/shams')();
var g = typeof globalThis === 'undefined' ? global : globalThis;
var typedArrays = availableTypedArrays();
var $slice = callBound('String.prototype.slice');
var toStrTags = {
};
var gOPD = require('es-abstract/helpers/getOwnPropertyDescriptor');
var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if (hasToStringTag && gOPD && getPrototypeOf) forEach(typedArrays, function(typedArray) {
    if (typeof g[typedArray] === 'function') {
        var arr = new g[typedArray]();
        if (Symbol.toStringTag in arr) {
            var proto = getPrototypeOf(arr);
            var descriptor = gOPD(proto, Symbol.toStringTag);
            if (!descriptor) {
                var superProto = getPrototypeOf(proto);
                descriptor = gOPD(superProto, Symbol.toStringTag);
            }
            toStrTags[typedArray] = descriptor.get;
        }
    }
});
var tryTypedArrays = function tryAllTypedArrays(value) {
    var foundName = false;
    forEach(toStrTags, function(getter, typedArray) {
        if (!foundName) try {
            var name = getter.call(value);
            if (name === typedArray) foundName = name;
        } catch (e) {
        }
    });
    return foundName;
};
var isTypedArray = require('is-typed-array');
module.exports = function whichTypedArray(value) {
    if (!isTypedArray(value)) return false;
    if (!hasToStringTag || !(Symbol.toStringTag in value)) return $slice($toString(value), 8, -1);
    return tryTypedArrays(value);
};

},{"foreach":"h6wOr","available-typed-arrays":"9Wjza","call-bind/callBound":"f0fyo","has-tostringtag/shams":"7aneK","es-abstract/helpers/getOwnPropertyDescriptor":"gx5Wc","is-typed-array":"6c7tM"}],"h6wOr":[function(require,module,exports) {
var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;
module.exports = function forEach(obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') throw new TypeError('iterator must be a function');
    var l = obj.length;
    if (l === +l) for(var i = 0; i < l; i++)fn.call(ctx, obj[i], i, obj);
    else {
        for(var k in obj)if (hasOwn.call(obj, k)) fn.call(ctx, obj[k], k, obj);
    }
};

},{}],"9Wjza":[function(require,module,exports) {
var global = arguments[3];
'use strict';
var possibleNames = [
    'BigInt64Array',
    'BigUint64Array',
    'Float32Array',
    'Float64Array',
    'Int16Array',
    'Int32Array',
    'Int8Array',
    'Uint16Array',
    'Uint32Array',
    'Uint8Array',
    'Uint8ClampedArray'
];
var g = typeof globalThis === 'undefined' ? global : globalThis;
module.exports = function availableTypedArrays() {
    var out = [];
    for(var i = 0; i < possibleNames.length; i++)if (typeof g[possibleNames[i]] === 'function') out[out.length] = possibleNames[i];
    return out;
};

},{}],"gx5Wc":[function(require,module,exports) {
'use strict';
var GetIntrinsic = require('get-intrinsic');
var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
if ($gOPD) try {
    $gOPD([], 'length');
} catch (e) {
    // IE 8 has a broken gOPD
    $gOPD = null;
}
module.exports = $gOPD;

},{"get-intrinsic":"4hk6k"}],"6c7tM":[function(require,module,exports) {
var global = arguments[3];
'use strict';
var forEach = require('foreach');
var availableTypedArrays = require('available-typed-arrays');
var callBound = require('call-bind/callBound');
var $toString = callBound('Object.prototype.toString');
var hasToStringTag = require('has-tostringtag/shams')();
var g = typeof globalThis === 'undefined' ? global : globalThis;
var typedArrays = availableTypedArrays();
var $indexOf = callBound('Array.prototype.indexOf', true) || function indexOf(array, value) {
    for(var i = 0; i < array.length; i += 1){
        if (array[i] === value) return i;
    }
    return -1;
};
var $slice = callBound('String.prototype.slice');
var toStrTags = {
};
var gOPD = require('es-abstract/helpers/getOwnPropertyDescriptor');
var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if (hasToStringTag && gOPD && getPrototypeOf) forEach(typedArrays, function(typedArray) {
    var arr = new g[typedArray]();
    if (Symbol.toStringTag in arr) {
        var proto = getPrototypeOf(arr);
        var descriptor = gOPD(proto, Symbol.toStringTag);
        if (!descriptor) {
            var superProto = getPrototypeOf(proto);
            descriptor = gOPD(superProto, Symbol.toStringTag);
        }
        toStrTags[typedArray] = descriptor.get;
    }
});
var tryTypedArrays = function tryAllTypedArrays(value) {
    var anyTrue = false;
    forEach(toStrTags, function(getter, typedArray) {
        if (!anyTrue) try {
            anyTrue = getter.call(value) === typedArray;
        } catch (e) {
        }
    });
    return anyTrue;
};
module.exports = function isTypedArray(value) {
    if (!value || typeof value !== 'object') return false;
    if (!hasToStringTag || !(Symbol.toStringTag in value)) {
        var tag = $slice($toString(value), 8, -1);
        return $indexOf(typedArrays, tag) > -1;
    }
    if (!gOPD) return false;
    return tryTypedArrays(value);
};

},{"foreach":"h6wOr","available-typed-arrays":"9Wjza","call-bind/callBound":"f0fyo","has-tostringtag/shams":"7aneK","es-abstract/helpers/getOwnPropertyDescriptor":"gx5Wc"}],"lDZRh":[function(require,module,exports) {
module.exports = function isBuffer(arg) {
    return arg && typeof arg === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
};

},{}],"2GMXX":[function(require,module,exports) {
module.exports = extend;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function extend() {
    var target = {
    };
    for(var i = 0; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source)if (hasOwnProperty.call(source, key)) target[key] = source[key];
    }
    return target;
}

},{}],"emkVv":[function(require,module,exports) {
var AbstractLevelDOWN = require('abstract-leveldown').AbstractLevelDOWN;
var inherits = require('inherits');
var DeferredIterator = require('./deferred-iterator');
var deferrables = 'put get del batch clear'.split(' ');
var optionalDeferrables = 'approximateSize compactRange'.split(' ');
function DeferredLevelDOWN(db) {
    AbstractLevelDOWN.call(this, db.supports || {
    });
    // TODO (future major): remove this fallback; db must have manifest that
    // declares approximateSize and compactRange in additionalMethods.
    optionalDeferrables.forEach(function(m) {
        if (typeof db[m] === 'function' && !this.supports.additionalMethods[m]) this.supports.additionalMethods[m] = true;
    }, this);
    this._db = db;
    this._operations = [];
    closed(this);
}
inherits(DeferredLevelDOWN, AbstractLevelDOWN);
DeferredLevelDOWN.prototype.type = 'deferred-leveldown';
DeferredLevelDOWN.prototype._open = function(options, callback) {
    var self = this;
    this._db.open(options, function(err) {
        if (err) return callback(err);
        self._operations.forEach(function(op) {
            if (op.iterator) op.iterator.setDb(self._db);
            else self._db[op.method].apply(self._db, op.args);
        });
        self._operations = [];
        open(self);
        callback();
    });
};
DeferredLevelDOWN.prototype._close = function(callback) {
    var self = this;
    this._db.close(function(err) {
        if (err) return callback(err);
        closed(self);
        callback();
    });
};
function open(self) {
    deferrables.concat('iterator').forEach(function(m) {
        self['_' + m] = function() {
            return this._db[m].apply(this._db, arguments);
        };
    });
    Object.keys(self.supports.additionalMethods).forEach(function(m) {
        self[m] = function() {
            return this._db[m].apply(this._db, arguments);
        };
    });
}
function closed(self) {
    deferrables.forEach(function(m) {
        self['_' + m] = function() {
            this._operations.push({
                method: m,
                args: arguments
            });
        };
    });
    Object.keys(self.supports.additionalMethods).forEach(function(m) {
        self[m] = function() {
            this._operations.push({
                method: m,
                args: arguments
            });
        };
    });
    self._iterator = function(options) {
        var it = new DeferredIterator(self, options);
        this._operations.push({
            iterator: it
        });
        return it;
    };
}
DeferredLevelDOWN.prototype._serializeKey = function(key) {
    return key;
};
DeferredLevelDOWN.prototype._serializeValue = function(value) {
    return value;
};
module.exports = DeferredLevelDOWN;
module.exports.DeferredIterator = DeferredIterator;

},{"abstract-leveldown":"jvgwU","inherits":"d3hL2","./deferred-iterator":"db8Ah"}],"jvgwU":[function(require,module,exports) {
exports.AbstractLevelDOWN = require('./abstract-leveldown');
exports.AbstractIterator = require('./abstract-iterator');
exports.AbstractChainedBatch = require('./abstract-chained-batch');

},{"./abstract-leveldown":"lKDWd","./abstract-iterator":"ffT5c","./abstract-chained-batch":"5acH7"}],"lKDWd":[function(require,module,exports) {
var xtend = require('xtend');
var supports = require('level-supports');
var Buffer = require('buffer').Buffer;
var AbstractIterator = require('./abstract-iterator');
var AbstractChainedBatch = require('./abstract-chained-batch');
var nextTick = require('./next-tick');
var hasOwnProperty = Object.prototype.hasOwnProperty;
var rangeOptions = 'start end gt gte lt lte'.split(' ');
function AbstractLevelDOWN(manifest) {
    this.status = 'new';
    // TODO (next major): make this mandatory
    this.supports = supports(manifest, {
        status: true
    });
}
AbstractLevelDOWN.prototype.open = function(options, callback) {
    var self = this;
    var oldStatus = this.status;
    if (typeof options === 'function') callback = options;
    if (typeof callback !== 'function') throw new Error('open() requires a callback argument');
    if (typeof options !== 'object' || options === null) options = {
    };
    options.createIfMissing = options.createIfMissing !== false;
    options.errorIfExists = !!options.errorIfExists;
    this.status = 'opening';
    this._open(options, function(err) {
        if (err) {
            self.status = oldStatus;
            return callback(err);
        }
        self.status = 'open';
        callback();
    });
};
AbstractLevelDOWN.prototype._open = function(options, callback) {
    nextTick(callback);
};
AbstractLevelDOWN.prototype.close = function(callback) {
    var self = this;
    var oldStatus = this.status;
    if (typeof callback !== 'function') throw new Error('close() requires a callback argument');
    this.status = 'closing';
    this._close(function(err) {
        if (err) {
            self.status = oldStatus;
            return callback(err);
        }
        self.status = 'closed';
        callback();
    });
};
AbstractLevelDOWN.prototype._close = function(callback) {
    nextTick(callback);
};
AbstractLevelDOWN.prototype.get = function(key, options, callback) {
    if (typeof options === 'function') callback = options;
    if (typeof callback !== 'function') throw new Error('get() requires a callback argument');
    var err = this._checkKey(key);
    if (err) return nextTick(callback, err);
    key = this._serializeKey(key);
    if (typeof options !== 'object' || options === null) options = {
    };
    options.asBuffer = options.asBuffer !== false;
    this._get(key, options, callback);
};
AbstractLevelDOWN.prototype._get = function(key, options, callback) {
    nextTick(function() {
        callback(new Error('NotFound'));
    });
};
AbstractLevelDOWN.prototype.put = function(key, value, options, callback) {
    if (typeof options === 'function') callback = options;
    if (typeof callback !== 'function') throw new Error('put() requires a callback argument');
    var err = this._checkKey(key) || this._checkValue(value);
    if (err) return nextTick(callback, err);
    key = this._serializeKey(key);
    value = this._serializeValue(value);
    if (typeof options !== 'object' || options === null) options = {
    };
    this._put(key, value, options, callback);
};
AbstractLevelDOWN.prototype._put = function(key, value, options, callback) {
    nextTick(callback);
};
AbstractLevelDOWN.prototype.del = function(key, options, callback) {
    if (typeof options === 'function') callback = options;
    if (typeof callback !== 'function') throw new Error('del() requires a callback argument');
    var err = this._checkKey(key);
    if (err) return nextTick(callback, err);
    key = this._serializeKey(key);
    if (typeof options !== 'object' || options === null) options = {
    };
    this._del(key, options, callback);
};
AbstractLevelDOWN.prototype._del = function(key, options, callback) {
    nextTick(callback);
};
AbstractLevelDOWN.prototype.batch = function(array, options, callback) {
    if (!arguments.length) return this._chainedBatch();
    if (typeof options === 'function') callback = options;
    if (typeof array === 'function') callback = array;
    if (typeof callback !== 'function') throw new Error('batch(array) requires a callback argument');
    if (!Array.isArray(array)) return nextTick(callback, new Error('batch(array) requires an array argument'));
    if (array.length === 0) return nextTick(callback);
    if (typeof options !== 'object' || options === null) options = {
    };
    var serialized = new Array(array.length);
    for(var i = 0; i < array.length; i++){
        if (typeof array[i] !== 'object' || array[i] === null) return nextTick(callback, new Error('batch(array) element must be an object and not `null`'));
        var e = xtend(array[i]);
        if (e.type !== 'put' && e.type !== 'del') return nextTick(callback, new Error("`type` must be 'put' or 'del'"));
        var err = this._checkKey(e.key);
        if (err) return nextTick(callback, err);
        e.key = this._serializeKey(e.key);
        if (e.type === 'put') {
            var valueErr = this._checkValue(e.value);
            if (valueErr) return nextTick(callback, valueErr);
            e.value = this._serializeValue(e.value);
        }
        serialized[i] = e;
    }
    this._batch(serialized, options, callback);
};
AbstractLevelDOWN.prototype._batch = function(array, options, callback) {
    nextTick(callback);
};
AbstractLevelDOWN.prototype.clear = function(options, callback) {
    if (typeof options === 'function') callback = options;
    else if (typeof callback !== 'function') throw new Error('clear() requires a callback argument');
    options = cleanRangeOptions(this, options);
    options.reverse = !!options.reverse;
    options.limit = 'limit' in options ? options.limit : -1;
    this._clear(options, callback);
};
AbstractLevelDOWN.prototype._clear = function(options, callback) {
    // Avoid setupIteratorOptions, would serialize range options a second time.
    options.keys = true;
    options.values = false;
    options.keyAsBuffer = true;
    options.valueAsBuffer = true;
    var iterator = this._iterator(options);
    var emptyOptions = {
    };
    var self = this;
    var next = function(err1) {
        if (err1) return iterator.end(function() {
            callback(err1);
        });
        iterator.next(function(err, key) {
            if (err) return next(err);
            if (key === undefined) return iterator.end(callback);
            // This could be optimized by using a batch, but the default _clear
            // is not meant to be fast. Implementations have more room to optimize
            // if they override _clear. Note: using _del bypasses key serialization.
            self._del(key, emptyOptions, next);
        });
    };
    next();
};
AbstractLevelDOWN.prototype._setupIteratorOptions = function(options) {
    options = cleanRangeOptions(this, options);
    options.reverse = !!options.reverse;
    options.keys = options.keys !== false;
    options.values = options.values !== false;
    options.limit = 'limit' in options ? options.limit : -1;
    options.keyAsBuffer = options.keyAsBuffer !== false;
    options.valueAsBuffer = options.valueAsBuffer !== false;
    return options;
};
function cleanRangeOptions(db, options) {
    var result = {
    };
    for(var k in options){
        if (!hasOwnProperty.call(options, k)) continue;
        var opt = options[k];
        if (isRangeOption(k)) // Note that we don't reject nullish and empty options here. While
        // those types are invalid as keys, they are valid as range options.
        opt = db._serializeKey(opt);
        result[k] = opt;
    }
    return result;
}
function isRangeOption(k) {
    return rangeOptions.indexOf(k) !== -1;
}
AbstractLevelDOWN.prototype.iterator = function(options) {
    if (typeof options !== 'object' || options === null) options = {
    };
    options = this._setupIteratorOptions(options);
    return this._iterator(options);
};
AbstractLevelDOWN.prototype._iterator = function(options) {
    return new AbstractIterator(this);
};
AbstractLevelDOWN.prototype._chainedBatch = function() {
    return new AbstractChainedBatch(this);
};
AbstractLevelDOWN.prototype._serializeKey = function(key) {
    return key;
};
AbstractLevelDOWN.prototype._serializeValue = function(value) {
    return value;
};
AbstractLevelDOWN.prototype._checkKey = function(key) {
    if (key === null || key === undefined) return new Error('key cannot be `null` or `undefined`');
    else if (Buffer.isBuffer(key) && key.length === 0) return new Error('key cannot be an empty Buffer');
    else if (key === '') return new Error('key cannot be an empty String');
    else if (Array.isArray(key) && key.length === 0) return new Error('key cannot be an empty Array');
};
AbstractLevelDOWN.prototype._checkValue = function(value) {
    if (value === null || value === undefined) return new Error('value cannot be `null` or `undefined`');
};
// Expose browser-compatible nextTick for dependents
AbstractLevelDOWN.prototype._nextTick = nextTick;
module.exports = AbstractLevelDOWN;

},{"xtend":"2GMXX","level-supports":"1scZb","buffer":"bOetu","./abstract-iterator":"ffT5c","./abstract-chained-batch":"5acH7","./next-tick":"6a39s"}],"1scZb":[function(require,module,exports) {
'use strict';
// For (old) browser support
var xtend = require('xtend');
var assign = require('xtend/mutable');
module.exports = function supports() {
    var manifest = xtend.apply(null, arguments);
    return assign(manifest, {
        // Features of abstract-leveldown
        bufferKeys: manifest.bufferKeys || false,
        snapshots: manifest.snapshots || false,
        permanence: manifest.permanence || false,
        seek: manifest.seek || false,
        clear: manifest.clear || false,
        // Features of abstract-leveldown that levelup doesn't have
        status: manifest.status || false,
        // Features of disk-based implementations
        createIfMissing: manifest.createIfMissing || false,
        errorIfExists: manifest.errorIfExists || false,
        // Features of level(up) that abstract-leveldown doesn't have yet
        deferredOpen: manifest.deferredOpen || false,
        openCallback: manifest.openCallback || false,
        promises: manifest.promises || false,
        streams: manifest.streams || false,
        encodings: manifest.encodings || false,
        // Methods that are not part of abstract-leveldown or levelup
        additionalMethods: xtend(manifest.additionalMethods)
    });
};

},{"xtend":"2GMXX","xtend/mutable":"inCc8"}],"inCc8":[function(require,module,exports) {
module.exports = extend;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function extend(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source)if (hasOwnProperty.call(source, key)) target[key] = source[key];
    }
    return target;
}

},{}],"ffT5c":[function(require,module,exports) {
var nextTick = require('./next-tick');
function AbstractIterator(db) {
    if (typeof db !== 'object' || db === null) throw new TypeError('First argument must be an abstract-leveldown compliant store');
    this.db = db;
    this._ended = false;
    this._nexting = false;
}
AbstractIterator.prototype.next = function(callback) {
    var self = this;
    if (typeof callback !== 'function') throw new Error('next() requires a callback argument');
    if (self._ended) {
        nextTick(callback, new Error('cannot call next() after end()'));
        return self;
    }
    if (self._nexting) {
        nextTick(callback, new Error('cannot call next() before previous next() has completed'));
        return self;
    }
    self._nexting = true;
    self._next(function() {
        self._nexting = false;
        callback.apply(null, arguments);
    });
    return self;
};
AbstractIterator.prototype._next = function(callback) {
    nextTick(callback);
};
AbstractIterator.prototype.seek = function(target) {
    if (this._ended) throw new Error('cannot call seek() after end()');
    if (this._nexting) throw new Error('cannot call seek() before next() has completed');
    target = this.db._serializeKey(target);
    this._seek(target);
};
AbstractIterator.prototype._seek = function(target) {
};
AbstractIterator.prototype.end = function(callback) {
    if (typeof callback !== 'function') throw new Error('end() requires a callback argument');
    if (this._ended) return nextTick(callback, new Error('end() already called on iterator'));
    this._ended = true;
    this._end(callback);
};
AbstractIterator.prototype._end = function(callback) {
    nextTick(callback);
};
// Expose browser-compatible nextTick for dependents
AbstractIterator.prototype._nextTick = nextTick;
module.exports = AbstractIterator;

},{"./next-tick":"6a39s"}],"6a39s":[function(require,module,exports) {
module.exports = require('immediate');

},{"immediate":"azewP"}],"5acH7":[function(require,module,exports) {
var nextTick = require('./next-tick');
function AbstractChainedBatch(db) {
    if (typeof db !== 'object' || db === null) throw new TypeError('First argument must be an abstract-leveldown compliant store');
    this.db = db;
    this._operations = [];
    this._written = false;
}
AbstractChainedBatch.prototype._checkWritten = function() {
    if (this._written) throw new Error('write() already called on this batch');
};
AbstractChainedBatch.prototype.put = function(key, value) {
    this._checkWritten();
    var err = this.db._checkKey(key) || this.db._checkValue(value);
    if (err) throw err;
    key = this.db._serializeKey(key);
    value = this.db._serializeValue(value);
    this._put(key, value);
    return this;
};
AbstractChainedBatch.prototype._put = function(key, value) {
    this._operations.push({
        type: 'put',
        key: key,
        value: value
    });
};
AbstractChainedBatch.prototype.del = function(key) {
    this._checkWritten();
    var err = this.db._checkKey(key);
    if (err) throw err;
    key = this.db._serializeKey(key);
    this._del(key);
    return this;
};
AbstractChainedBatch.prototype._del = function(key) {
    this._operations.push({
        type: 'del',
        key: key
    });
};
AbstractChainedBatch.prototype.clear = function() {
    this._checkWritten();
    this._clear();
    return this;
};
AbstractChainedBatch.prototype._clear = function() {
    this._operations = [];
};
AbstractChainedBatch.prototype.write = function(options, callback) {
    this._checkWritten();
    if (typeof options === 'function') callback = options;
    if (typeof callback !== 'function') throw new Error('write() requires a callback argument');
    if (typeof options !== 'object' || options === null) options = {
    };
    this._written = true;
    this._write(options, callback);
};
AbstractChainedBatch.prototype._write = function(options, callback) {
    this.db._batch(this._operations, options, callback);
};
// Expose browser-compatible nextTick for dependents
AbstractChainedBatch.prototype._nextTick = nextTick;
module.exports = AbstractChainedBatch;

},{"./next-tick":"6a39s"}],"db8Ah":[function(require,module,exports) {
var AbstractIterator = require('abstract-leveldown').AbstractIterator;
var inherits = require('inherits');
function DeferredIterator(db, options) {
    AbstractIterator.call(this, db);
    this._options = options;
    this._iterator = null;
    this._operations = [];
}
inherits(DeferredIterator, AbstractIterator);
DeferredIterator.prototype.setDb = function(db) {
    var it = this._iterator = db.iterator(this._options);
    this._operations.forEach(function(op) {
        it[op.method].apply(it, op.args);
    });
};
DeferredIterator.prototype._operation = function(method, args) {
    if (this._iterator) return this._iterator[method].apply(this._iterator, args);
    this._operations.push({
        method: method,
        args: args
    });
};
'next end'.split(' ').forEach(function(m) {
    DeferredIterator.prototype['_' + m] = function() {
        this._operation(m, arguments);
    };
});
// Must defer seek() rather than _seek() because it requires db._serializeKey to be available
DeferredIterator.prototype.seek = function() {
    this._operation('seek', arguments);
};
module.exports = DeferredIterator;

},{"abstract-leveldown":"jvgwU","inherits":"d3hL2"}],"sfkOa":[function(require,module,exports) {
var inherits = require('inherits');
var Readable = require('readable-stream').Readable;
var extend = require('xtend');
module.exports = ReadStream;
inherits(ReadStream, Readable);
function ReadStream(iterator, options) {
    if (!(this instanceof ReadStream)) return new ReadStream(iterator, options);
    options = options || {
    };
    Readable.call(this, extend(options, {
        objectMode: true
    }));
    this._iterator = iterator;
    this._options = options;
    this.on('end', this.destroy.bind(this, null, null));
}
ReadStream.prototype._read = function() {
    var self = this;
    var options = this._options;
    if (this.destroyed) return;
    this._iterator.next(function(err, key, value) {
        if (self.destroyed) return;
        if (err) return self.destroy(err);
        if (key === undefined && value === undefined) self.push(null);
        else if (options.keys !== false && options.values === false) self.push(key);
        else if (options.keys === false && options.values !== false) self.push(value);
        else self.push({
            key: key,
            value: value
        });
    });
};
ReadStream.prototype._destroy = function(err, callback) {
    this._iterator.end(function(err2) {
        callback(err || err2);
    });
};

},{"inherits":"d3hL2","readable-stream":"cvIV9","xtend":"2GMXX"}],"cvIV9":[function(require,module,exports) {
exports = module.exports = require('./lib/_stream_readable.js');
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = require('./lib/_stream_writable.js');
exports.Duplex = require('./lib/_stream_duplex.js');
exports.Transform = require('./lib/_stream_transform.js');
exports.PassThrough = require('./lib/_stream_passthrough.js');
exports.finished = require('./lib/internal/streams/end-of-stream.js');
exports.pipeline = require('./lib/internal/streams/pipeline.js');

},{"./lib/_stream_readable.js":"7oVsU","./lib/_stream_writable.js":"6k6lP","./lib/_stream_duplex.js":"asLsP","./lib/_stream_transform.js":"hiVkM","./lib/_stream_passthrough.js":"eok0u","./lib/internal/streams/end-of-stream.js":"5kfnN","./lib/internal/streams/pipeline.js":"bikaI"}],"7oVsU":[function(require,module,exports) {
var process = require("process");
var global = arguments[3];
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';
module.exports = Readable;
/*<replacement>*/ var Duplex;
/*</replacement>*/ Readable.ReadableState = ReadableState;
/*<replacement>*/ var EE = require('events').EventEmitter;
var EElistenerCount = function EElistenerCount(emitter, type) {
    return emitter.listeners(type).length;
};
/*</replacement>*/ /*<replacement>*/ var Stream = require('./internal/streams/stream');
/*</replacement>*/ var Buffer = require('buffer').Buffer;
var OurUint8Array = global.Uint8Array || function() {
};
function _uint8ArrayToBuffer(chunk) {
    return Buffer.from(chunk);
}
function _isUint8Array(obj) {
    return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*<replacement>*/ var debugUtil = require('util');
var debug;
if (debugUtil && debugUtil.debuglog) debug = debugUtil.debuglog('stream');
else debug = function debug() {
};
/*</replacement>*/ var BufferList = require('./internal/streams/buffer_list');
var destroyImpl = require('./internal/streams/destroy');
var _require = require('./internal/streams/state'), getHighWaterMark = _require.getHighWaterMark;
var _require$codes = require('../errors').codes, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT; // Lazy loaded to improve the startup performance.
var StringDecoder;
var createReadableStreamAsyncIterator;
var from;
require('inherits')(Readable, Stream);
var errorOrDestroy = destroyImpl.errorOrDestroy;
var kProxyEvents = [
    'error',
    'close',
    'destroy',
    'pause',
    'resume'
];
function prependListener(emitter, event, fn) {
    // Sadly this is not cacheable as some libraries bundle their own
    // event emitter implementation with them.
    if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn); // This is a hack to make sure that our error handler is attached before any
    // userland ones.  NEVER DO THIS. This is here only because this code needs
    // to continue to work with older versions of Node.js that do not include
    // the prependListener() method. The goal is to eventually remove this hack.
    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);
    else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);
    else emitter._events[event] = [
        fn,
        emitter._events[event]
    ];
}
function ReadableState(options, stream, isDuplex) {
    Duplex = Duplex || require('./_stream_duplex');
    options = options || {
    }; // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream.
    // These options can be provided separately as readableXXX and writableXXX.
    if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex; // object stream flag. Used to make read(n) ignore n and to
    // make all the buffer merging and length checks go away
    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode; // the point at which it stops calling _read() to fill the buffer
    // Note: 0 is a valid value, means "don't call _read preemptively ever"
    this.highWaterMark = getHighWaterMark(this, options, 'readableHighWaterMark', isDuplex); // A linked list is used to store data chunks instead of an array because the
    // linked list can remove elements from the beginning faster than
    // array.shift()
    this.buffer = new BufferList();
    this.length = 0;
    this.pipes = null;
    this.pipesCount = 0;
    this.flowing = null;
    this.ended = false;
    this.endEmitted = false;
    this.reading = false; // a flag to be able to tell if the event 'readable'/'data' is emitted
    // immediately, or on a later tick.  We set this to true at first, because
    // any actions that shouldn't happen until "later" should generally also
    // not happen before the first read call.
    this.sync = true; // whenever we return null, then we set a flag to say
    // that we're awaiting a 'readable' event emission.
    this.needReadable = false;
    this.emittedReadable = false;
    this.readableListening = false;
    this.resumeScheduled = false;
    this.paused = true; // Should close be emitted on destroy. Defaults to true.
    this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'end' (and potentially 'finish')
    this.autoDestroy = !!options.autoDestroy; // has it been destroyed
    this.destroyed = false; // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || 'utf8'; // the number of writers that are awaiting a drain event in .pipe()s
    this.awaitDrain = 0; // if true, a maybeReadMore has been scheduled
    this.readingMore = false;
    this.decoder = null;
    this.encoding = null;
    if (options.encoding) {
        if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
        this.decoder = new StringDecoder(options.encoding);
        this.encoding = options.encoding;
    }
}
function Readable(options) {
    Duplex = Duplex || require('./_stream_duplex');
    if (!(this instanceof Readable)) return new Readable(options); // Checking for a Stream.Duplex instance is faster here instead of inside
    // the ReadableState constructor, at least with V8 6.5
    var isDuplex = this instanceof Duplex;
    this._readableState = new ReadableState(options, this, isDuplex); // legacy
    this.readable = true;
    if (options) {
        if (typeof options.read === 'function') this._read = options.read;
        if (typeof options.destroy === 'function') this._destroy = options.destroy;
    }
    Stream.call(this);
}
Object.defineProperty(Readable.prototype, 'destroyed', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        if (this._readableState === undefined) return false;
        return this._readableState.destroyed;
    },
    set: function set(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (!this._readableState) return;
         // backward compatibility, the user is explicitly
        // managing destroyed
        this._readableState.destroyed = value;
    }
});
Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;
Readable.prototype._destroy = function(err, cb) {
    cb(err);
}; // Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function(chunk, encoding) {
    var state = this._readableState;
    var skipChunkCheck;
    if (!state.objectMode) {
        if (typeof chunk === 'string') {
            encoding = encoding || state.defaultEncoding;
            if (encoding !== state.encoding) {
                chunk = Buffer.from(chunk, encoding);
                encoding = '';
            }
            skipChunkCheck = true;
        }
    } else skipChunkCheck = true;
    return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
}; // Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function(chunk) {
    return readableAddChunk(this, chunk, null, true, false);
};
function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
    debug('readableAddChunk', chunk);
    var state = stream._readableState;
    if (chunk === null) {
        state.reading = false;
        onEofChunk(stream, state);
    } else {
        var er;
        if (!skipChunkCheck) er = chunkInvalid(state, chunk);
        if (er) errorOrDestroy(stream, er);
        else if (state.objectMode || chunk && chunk.length > 0) {
            if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) chunk = _uint8ArrayToBuffer(chunk);
            if (addToFront) {
                if (state.endEmitted) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
                else addChunk(stream, state, chunk, true);
            } else if (state.ended) errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
            else if (state.destroyed) return false;
            else {
                state.reading = false;
                if (state.decoder && !encoding) {
                    chunk = state.decoder.write(chunk);
                    if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);
                    else maybeReadMore(stream, state);
                } else addChunk(stream, state, chunk, false);
            }
        } else if (!addToFront) {
            state.reading = false;
            maybeReadMore(stream, state);
        }
    } // We can push more data if we are below the highWaterMark.
    // Also, if we have no data yet, we can stand some more bytes.
    // This is to work around cases where hwm=0, such as the repl.
    return !state.ended && (state.length < state.highWaterMark || state.length === 0);
}
function addChunk(stream, state, chunk, addToFront) {
    if (state.flowing && state.length === 0 && !state.sync) {
        state.awaitDrain = 0;
        stream.emit('data', chunk);
    } else {
        // update the buffer info.
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront) state.buffer.unshift(chunk);
        else state.buffer.push(chunk);
        if (state.needReadable) emitReadable(stream);
    }
    maybeReadMore(stream, state);
}
function chunkInvalid(state, chunk) {
    var er;
    if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) er = new ERR_INVALID_ARG_TYPE('chunk', [
        'string',
        'Buffer',
        'Uint8Array'
    ], chunk);
    return er;
}
Readable.prototype.isPaused = function() {
    return this._readableState.flowing === false;
}; // backwards compatibility.
Readable.prototype.setEncoding = function(enc) {
    if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
    var decoder = new StringDecoder(enc);
    this._readableState.decoder = decoder; // If setEncoding(null), decoder.encoding equals utf8
    this._readableState.encoding = this._readableState.decoder.encoding; // Iterate over current buffer to convert already stored Buffers:
    var p = this._readableState.buffer.head;
    var content = '';
    while(p !== null){
        content += decoder.write(p.data);
        p = p.next;
    }
    this._readableState.buffer.clear();
    if (content !== '') this._readableState.buffer.push(content);
    this._readableState.length = content.length;
    return this;
}; // Don't raise the hwm > 1GB
var MAX_HWM = 1073741824;
function computeNewHighWaterMark(n) {
    if (n >= MAX_HWM) // TODO(ronag): Throw ERR_VALUE_OUT_OF_RANGE.
    n = MAX_HWM;
    else {
        // Get the next highest power of 2 to prevent increasing hwm excessively in
        // tiny amounts
        n--;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        n++;
    }
    return n;
} // This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
    if (n <= 0 || state.length === 0 && state.ended) return 0;
    if (state.objectMode) return 1;
    if (n !== n) {
        // Only flow one buffer at a time
        if (state.flowing && state.length) return state.buffer.head.data.length;
        else return state.length;
    } // If we're asking for more than the current hwm, then raise the hwm.
    if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
    if (n <= state.length) return n; // Don't have enough
    if (!state.ended) {
        state.needReadable = true;
        return 0;
    }
    return state.length;
} // you can override either this method, or the async _read(n) below.
Readable.prototype.read = function(n) {
    debug('read', n);
    n = parseInt(n, 10);
    var state = this._readableState;
    var nOrig = n;
    if (n !== 0) state.emittedReadable = false; // if we're doing read(0) to trigger a readable event, but we
    // already have a bunch of data in the buffer, then just trigger
    // the 'readable' event and move on.
    if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
        debug('read: emitReadable', state.length, state.ended);
        if (state.length === 0 && state.ended) endReadable(this);
        else emitReadable(this);
        return null;
    }
    n = howMuchToRead(n, state); // if we've ended, and we're now clear, then finish it up.
    if (n === 0 && state.ended) {
        if (state.length === 0) endReadable(this);
        return null;
    } // All the actual chunk generation logic needs to be
    // *below* the call to _read.  The reason is that in certain
    // synthetic stream cases, such as passthrough streams, _read
    // may be a completely synchronous operation which may change
    // the state of the read buffer, providing enough data when
    // before there was *not* enough.
    //
    // So, the steps are:
    // 1. Figure out what the state of things will be after we do
    // a read from the buffer.
    //
    // 2. If that resulting state will trigger a _read, then call _read.
    // Note that this may be asynchronous, or synchronous.  Yes, it is
    // deeply ugly to write APIs this way, but that still doesn't mean
    // that the Readable class should behave improperly, as streams are
    // designed to be sync/async agnostic.
    // Take note if the _read call is sync or async (ie, if the read call
    // has returned yet), so that we know whether or not it's safe to emit
    // 'readable' etc.
    //
    // 3. Actually pull the requested chunks out of the buffer and return.
    // if we need a readable event, then we need to do some reading.
    var doRead = state.needReadable;
    debug('need readable', doRead); // if we currently have less than the highWaterMark, then also read some
    if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        debug('length less than watermark', doRead);
    } // however, if we've ended, then there's no point, and if we're already
    // reading, then it's unnecessary.
    if (state.ended || state.reading) {
        doRead = false;
        debug('reading or ended', doRead);
    } else if (doRead) {
        debug('do read');
        state.reading = true;
        state.sync = true; // if the length is currently zero, then we *need* a readable event.
        if (state.length === 0) state.needReadable = true; // call internal read method
        this._read(state.highWaterMark);
        state.sync = false; // If _read pushed data synchronously, then `reading` will be false,
        // and we need to re-evaluate how much data we can return to the user.
        if (!state.reading) n = howMuchToRead(nOrig, state);
    }
    var ret;
    if (n > 0) ret = fromList(n, state);
    else ret = null;
    if (ret === null) {
        state.needReadable = state.length <= state.highWaterMark;
        n = 0;
    } else {
        state.length -= n;
        state.awaitDrain = 0;
    }
    if (state.length === 0) {
        // If we have nothing in the buffer, then we want to know
        // as soon as we *do* get something into the buffer.
        if (!state.ended) state.needReadable = true; // If we tried to read() past the EOF, then emit end on the next tick.
        if (nOrig !== n && state.ended) endReadable(this);
    }
    if (ret !== null) this.emit('data', ret);
    return ret;
};
function onEofChunk(stream, state) {
    debug('onEofChunk');
    if (state.ended) return;
    if (state.decoder) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
            state.buffer.push(chunk);
            state.length += state.objectMode ? 1 : chunk.length;
        }
    }
    state.ended = true;
    if (state.sync) // if we are sync, wait until next tick to emit the data.
    // Otherwise we risk emitting data in the flow()
    // the readable code triggers during a read() call
    emitReadable(stream);
    else {
        // emit 'readable' now to make sure it gets picked up.
        state.needReadable = false;
        if (!state.emittedReadable) {
            state.emittedReadable = true;
            emitReadable_(stream);
        }
    }
} // Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
    var state = stream._readableState;
    debug('emitReadable', state.needReadable, state.emittedReadable);
    state.needReadable = false;
    if (!state.emittedReadable) {
        debug('emitReadable', state.flowing);
        state.emittedReadable = true;
        process.nextTick(emitReadable_, stream);
    }
}
function emitReadable_(stream) {
    var state = stream._readableState;
    debug('emitReadable_', state.destroyed, state.length, state.ended);
    if (!state.destroyed && (state.length || state.ended)) {
        stream.emit('readable');
        state.emittedReadable = false;
    } // The stream needs another readable event if
    // 1. It is not flowing, as the flow mechanism will take
    //    care of it.
    // 2. It is not ended.
    // 3. It is below the highWaterMark, so we can schedule
    //    another readable later.
    state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
    flow(stream);
} // at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
    if (!state.readingMore) {
        state.readingMore = true;
        process.nextTick(maybeReadMore_, stream, state);
    }
}
function maybeReadMore_(stream, state) {
    // Attempt to read more data if we should.
    //
    // The conditions for reading more data are (one of):
    // - Not enough data buffered (state.length < state.highWaterMark). The loop
    //   is responsible for filling the buffer with enough data if such data
    //   is available. If highWaterMark is 0 and we are not in the flowing mode
    //   we should _not_ attempt to buffer any extra data. We'll get more data
    //   when the stream consumer calls read() instead.
    // - No data in the buffer, and the stream is in flowing mode. In this mode
    //   the loop below is responsible for ensuring read() is called. Failing to
    //   call read here would abort the flow and there's no other mechanism for
    //   continuing the flow if the stream consumer has just subscribed to the
    //   'data' event.
    //
    // In addition to the above conditions to keep reading data, the following
    // conditions prevent the data from being read:
    // - The stream has ended (state.ended).
    // - There is already a pending 'read' operation (state.reading). This is a
    //   case where the the stream has called the implementation defined _read()
    //   method, but they are processing the call asynchronously and have _not_
    //   called push() with new data. In this case we skip performing more
    //   read()s. The execution ends in this method again after the _read() ends
    //   up calling push() with more data.
    while(!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)){
        var len = state.length;
        debug('maybeReadMore read 0');
        stream.read(0);
        if (len === state.length) break;
    }
    state.readingMore = false;
} // abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function(n) {
    errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED('_read()'));
};
Readable.prototype.pipe = function(dest, pipeOpts) {
    var src = this;
    var state = this._readableState;
    switch(state.pipesCount){
        case 0:
            state.pipes = dest;
            break;
        case 1:
            state.pipes = [
                state.pipes,
                dest
            ];
            break;
        default:
            state.pipes.push(dest);
            break;
    }
    state.pipesCount += 1;
    debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
    var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
    var endFn = doEnd ? onend : unpipe;
    if (state.endEmitted) process.nextTick(endFn);
    else src.once('end', endFn);
    dest.on('unpipe', onunpipe);
    function onunpipe(readable, unpipeInfo) {
        debug('onunpipe');
        if (readable === src) {
            if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
                unpipeInfo.hasUnpiped = true;
                cleanup();
            }
        }
    }
    function onend() {
        debug('onend');
        dest.end();
    } // when the dest drains, it reduces the awaitDrain counter
    // on the source.  This would be more elegant with a .once()
    // handler in flow(), but adding and removing repeatedly is
    // too slow.
    var ondrain = pipeOnDrain(src);
    dest.on('drain', ondrain);
    var cleanedUp = false;
    function cleanup() {
        debug('cleanup'); // cleanup event handlers once the pipe is broken
        dest.removeListener('close', onclose);
        dest.removeListener('finish', onfinish);
        dest.removeListener('drain', ondrain);
        dest.removeListener('error', onerror);
        dest.removeListener('unpipe', onunpipe);
        src.removeListener('end', onend);
        src.removeListener('end', unpipe);
        src.removeListener('data', ondata);
        cleanedUp = true; // if the reader is waiting for a drain event from this
        // specific writer, then it would cause it to never start
        // flowing again.
        // So, if this is awaiting a drain, then we just call it now.
        // If we don't know, then assume that we are waiting for one.
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
    }
    src.on('data', ondata);
    function ondata(chunk) {
        debug('ondata');
        var ret = dest.write(chunk);
        debug('dest.write', ret);
        if (ret === false) {
            // If the user unpiped during `dest.write()`, it is possible
            // to get stuck in a permanently paused state if that write
            // also returned false.
            // => Check whether `dest` is still a piping destination.
            if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
                debug('false write response, pause', state.awaitDrain);
                state.awaitDrain++;
            }
            src.pause();
        }
    } // if the dest has an error, then stop piping into it.
    // however, don't suppress the throwing behavior for this.
    function onerror(er) {
        debug('onerror', er);
        unpipe();
        dest.removeListener('error', onerror);
        if (EElistenerCount(dest, 'error') === 0) errorOrDestroy(dest, er);
    } // Make sure our error handler is attached before userland ones.
    prependListener(dest, 'error', onerror); // Both close and finish should trigger unpipe, but only once.
    function onclose() {
        dest.removeListener('finish', onfinish);
        unpipe();
    }
    dest.once('close', onclose);
    function onfinish() {
        debug('onfinish');
        dest.removeListener('close', onclose);
        unpipe();
    }
    dest.once('finish', onfinish);
    function unpipe() {
        debug('unpipe');
        src.unpipe(dest);
    } // tell the dest that it's being piped to
    dest.emit('pipe', src); // start the flow if it hasn't been started already.
    if (!state.flowing) {
        debug('pipe resume');
        src.resume();
    }
    return dest;
};
function pipeOnDrain(src) {
    return function pipeOnDrainFunctionResult() {
        var state = src._readableState;
        debug('pipeOnDrain', state.awaitDrain);
        if (state.awaitDrain) state.awaitDrain--;
        if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
            state.flowing = true;
            flow(src);
        }
    };
}
Readable.prototype.unpipe = function(dest) {
    var state = this._readableState;
    var unpipeInfo = {
        hasUnpiped: false
    }; // if we're not piping anywhere, then do nothing.
    if (state.pipesCount === 0) return this; // just one destination.  most common case.
    if (state.pipesCount === 1) {
        // passed in one, but it's not the right one.
        if (dest && dest !== state.pipes) return this;
        if (!dest) dest = state.pipes; // got a match.
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest) dest.emit('unpipe', this, unpipeInfo);
        return this;
    } // slow case. multiple pipe destinations.
    if (!dest) {
        // remove all.
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for(var i = 0; i < len; i++)dests[i].emit('unpipe', this, {
            hasUnpiped: false
        });
        return this;
    } // try to find the right one.
    var index = indexOf(state.pipes, dest);
    if (index === -1) return this;
    state.pipes.splice(index, 1);
    state.pipesCount -= 1;
    if (state.pipesCount === 1) state.pipes = state.pipes[0];
    dest.emit('unpipe', this, unpipeInfo);
    return this;
}; // set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function(ev, fn) {
    var res = Stream.prototype.on.call(this, ev, fn);
    var state = this._readableState;
    if (ev === 'data') {
        // update readableListening so that resume() may be a no-op
        // a few lines down. This is needed to support once('readable').
        state.readableListening = this.listenerCount('readable') > 0; // Try start flowing on next tick if stream isn't explicitly paused
        if (state.flowing !== false) this.resume();
    } else if (ev === 'readable') {
        if (!state.endEmitted && !state.readableListening) {
            state.readableListening = state.needReadable = true;
            state.flowing = false;
            state.emittedReadable = false;
            debug('on readable', state.length, state.reading);
            if (state.length) emitReadable(this);
            else if (!state.reading) process.nextTick(nReadingNextTick, this);
        }
    }
    return res;
};
Readable.prototype.addListener = Readable.prototype.on;
Readable.prototype.removeListener = function(ev, fn) {
    var res = Stream.prototype.removeListener.call(this, ev, fn);
    if (ev === 'readable') // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
    return res;
};
Readable.prototype.removeAllListeners = function(ev) {
    var res = Stream.prototype.removeAllListeners.apply(this, arguments);
    if (ev === 'readable' || ev === undefined) // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
    return res;
};
function updateReadableListening(self) {
    var state = self._readableState;
    state.readableListening = self.listenerCount('readable') > 0;
    if (state.resumeScheduled && !state.paused) // flowing needs to be set to true now, otherwise
    // the upcoming resume will not flow.
    state.flowing = true; // crude way to check if we should resume
    else if (self.listenerCount('data') > 0) self.resume();
}
function nReadingNextTick(self) {
    debug('readable nexttick read 0');
    self.read(0);
} // pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function() {
    var state = this._readableState;
    if (!state.flowing) {
        debug('resume'); // we flow only if there is no one listening
        // for readable, but we still have to call
        // resume()
        state.flowing = !state.readableListening;
        resume(this, state);
    }
    state.paused = false;
    return this;
};
function resume(stream, state) {
    if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        process.nextTick(resume_, stream, state);
    }
}
function resume_(stream, state) {
    debug('resume', state.reading);
    if (!state.reading) stream.read(0);
    state.resumeScheduled = false;
    stream.emit('resume');
    flow(stream);
    if (state.flowing && !state.reading) stream.read(0);
}
Readable.prototype.pause = function() {
    debug('call pause flowing=%j', this._readableState.flowing);
    if (this._readableState.flowing !== false) {
        debug('pause');
        this._readableState.flowing = false;
        this.emit('pause');
    }
    this._readableState.paused = true;
    return this;
};
function flow(stream) {
    var state = stream._readableState;
    debug('flow', state.flowing);
    while(state.flowing && stream.read() !== null);
} // wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function(stream) {
    var _this = this;
    var state = this._readableState;
    var paused = false;
    stream.on('end', function() {
        debug('wrapped end');
        if (state.decoder && !state.ended) {
            var chunk = state.decoder.end();
            if (chunk && chunk.length) _this.push(chunk);
        }
        _this.push(null);
    });
    stream.on('data', function(chunk) {
        debug('wrapped data');
        if (state.decoder) chunk = state.decoder.write(chunk); // don't skip over falsy values in objectMode
        if (state.objectMode && (chunk === null || chunk === undefined)) return;
        else if (!state.objectMode && (!chunk || !chunk.length)) return;
        var ret = _this.push(chunk);
        if (!ret) {
            paused = true;
            stream.pause();
        }
    }); // proxy all the other methods.
    // important when wrapping filters and duplexes.
    for(var i in stream)if (this[i] === undefined && typeof stream[i] === 'function') this[i] = (function methodWrap(method) {
        return function methodWrapReturnFunction() {
            return stream[method].apply(stream, arguments);
        };
    })(i);
     // proxy certain important events.
    for(var n1 = 0; n1 < kProxyEvents.length; n1++)stream.on(kProxyEvents[n1], this.emit.bind(this, kProxyEvents[n1]));
     // when we try to consume some more bytes, simply unpause the
    // underlying stream.
    this._read = function(n) {
        debug('wrapped _read', n);
        if (paused) {
            paused = false;
            stream.resume();
        }
    };
    return this;
};
if (typeof Symbol === 'function') Readable.prototype[Symbol.asyncIterator] = function() {
    if (createReadableStreamAsyncIterator === undefined) createReadableStreamAsyncIterator = require('./internal/streams/async_iterator');
    return createReadableStreamAsyncIterator(this);
};
Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState.highWaterMark;
    }
});
Object.defineProperty(Readable.prototype, 'readableBuffer', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState && this._readableState.buffer;
    }
});
Object.defineProperty(Readable.prototype, 'readableFlowing', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState.flowing;
    },
    set: function set(state) {
        if (this._readableState) this._readableState.flowing = state;
    }
}); // exposed for testing purposes only.
Readable._fromList = fromList;
Object.defineProperty(Readable.prototype, 'readableLength', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState.length;
    }
}); // Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
    // nothing buffered
    if (state.length === 0) return null;
    var ret;
    if (state.objectMode) ret = state.buffer.shift();
    else if (!n || n >= state.length) {
        // read it all, truncate the list
        if (state.decoder) ret = state.buffer.join('');
        else if (state.buffer.length === 1) ret = state.buffer.first();
        else ret = state.buffer.concat(state.length);
        state.buffer.clear();
    } else // read part of list
    ret = state.buffer.consume(n, state.decoder);
    return ret;
}
function endReadable(stream) {
    var state = stream._readableState;
    debug('endReadable', state.endEmitted);
    if (!state.endEmitted) {
        state.ended = true;
        process.nextTick(endReadableNT, state, stream);
    }
}
function endReadableNT(state, stream) {
    debug('endReadableNT', state.endEmitted, state.length); // Check that we didn't get one last unshift.
    if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit('end');
        if (state.autoDestroy) {
            // In case of duplex streams we need a way to detect
            // if the writable side is ready for autoDestroy as well
            var wState = stream._writableState;
            if (!wState || wState.autoDestroy && wState.finished) stream.destroy();
        }
    }
}
if (typeof Symbol === 'function') Readable.from = function(iterable, opts) {
    if (from === undefined) from = require('./internal/streams/from');
    return from(Readable, iterable, opts);
};
function indexOf(xs, x) {
    for(var i = 0, l = xs.length; i < l; i++){
        if (xs[i] === x) return i;
    }
    return -1;
}

},{"process":"lDnB8","events":"bHM3D","./internal/streams/stream":"cmeNb","buffer":"bOetu","util":"joWnX","./internal/streams/buffer_list":"l3457","./internal/streams/destroy":"fv55Y","./internal/streams/state":"cA6ER","../errors":"iaOAf","inherits":"d3hL2","./_stream_duplex":"asLsP","string_decoder/":"vLxWd","./internal/streams/async_iterator":"1yeGF","./internal/streams/from":"kHJWO"}],"cmeNb":[function(require,module,exports) {
module.exports = require('events').EventEmitter;

},{"events":"bHM3D"}],"l3457":[function(require,module,exports) {
'use strict';
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var _require = require('buffer'), Buffer = _require.Buffer;
var _require2 = require('util'), inspect = _require2.inspect;
var custom = inspect && inspect.custom || 'inspect';
function copyBuffer(src, target, offset) {
    Buffer.prototype.copy.call(src, target, offset);
}
module.exports = /*#__PURE__*/ (function() {
    function BufferList() {
        _classCallCheck(this, BufferList);
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    _createClass(BufferList, [
        {
            key: "push",
            value: function push(v) {
                var entry = {
                    data: v,
                    next: null
                };
                if (this.length > 0) this.tail.next = entry;
                else this.head = entry;
                this.tail = entry;
                ++this.length;
            }
        },
        {
            key: "unshift",
            value: function unshift(v) {
                var entry = {
                    data: v,
                    next: this.head
                };
                if (this.length === 0) this.tail = entry;
                this.head = entry;
                ++this.length;
            }
        },
        {
            key: "shift",
            value: function shift() {
                if (this.length === 0) return;
                var ret = this.head.data;
                if (this.length === 1) this.head = this.tail = null;
                else this.head = this.head.next;
                --this.length;
                return ret;
            }
        },
        {
            key: "clear",
            value: function clear() {
                this.head = this.tail = null;
                this.length = 0;
            }
        },
        {
            key: "join",
            value: function join(s) {
                if (this.length === 0) return '';
                var p = this.head;
                var ret = '' + p.data;
                while(p = p.next)ret += s + p.data;
                return ret;
            }
        },
        {
            key: "concat",
            value: function concat(n) {
                if (this.length === 0) return Buffer.alloc(0);
                var ret = Buffer.allocUnsafe(n >>> 0);
                var p = this.head;
                var i = 0;
                while(p){
                    copyBuffer(p.data, ret, i);
                    i += p.data.length;
                    p = p.next;
                }
                return ret;
            } // Consumes a specified amount of bytes or characters from the buffered data.
        },
        {
            key: "consume",
            value: function consume(n, hasStrings) {
                var ret;
                if (n < this.head.data.length) {
                    // `slice` is the same for buffers and strings.
                    ret = this.head.data.slice(0, n);
                    this.head.data = this.head.data.slice(n);
                } else if (n === this.head.data.length) // First chunk is a perfect match.
                ret = this.shift();
                else // Result spans more than one buffer.
                ret = hasStrings ? this._getString(n) : this._getBuffer(n);
                return ret;
            }
        },
        {
            key: "first",
            value: function first() {
                return this.head.data;
            } // Consumes a specified amount of characters from the buffered data.
        },
        {
            key: "_getString",
            value: function _getString(n) {
                var p = this.head;
                var c = 1;
                var ret = p.data;
                n -= ret.length;
                while(p = p.next){
                    var str = p.data;
                    var nb = n > str.length ? str.length : n;
                    if (nb === str.length) ret += str;
                    else ret += str.slice(0, n);
                    n -= nb;
                    if (n === 0) {
                        if (nb === str.length) {
                            ++c;
                            if (p.next) this.head = p.next;
                            else this.head = this.tail = null;
                        } else {
                            this.head = p;
                            p.data = str.slice(nb);
                        }
                        break;
                    }
                    ++c;
                }
                this.length -= c;
                return ret;
            } // Consumes a specified amount of bytes from the buffered data.
        },
        {
            key: "_getBuffer",
            value: function _getBuffer(n) {
                var ret = Buffer.allocUnsafe(n);
                var p = this.head;
                var c = 1;
                p.data.copy(ret);
                n -= p.data.length;
                while(p = p.next){
                    var buf = p.data;
                    var nb = n > buf.length ? buf.length : n;
                    buf.copy(ret, ret.length - n, 0, nb);
                    n -= nb;
                    if (n === 0) {
                        if (nb === buf.length) {
                            ++c;
                            if (p.next) this.head = p.next;
                            else this.head = this.tail = null;
                        } else {
                            this.head = p;
                            p.data = buf.slice(nb);
                        }
                        break;
                    }
                    ++c;
                }
                this.length -= c;
                return ret;
            } // Make sure the linked list only shows the minimal necessary information.
        },
        {
            key: custom,
            value: function value(_, options) {
                return inspect(this, _objectSpread({
                }, options, {
                    // Only inspect one level.
                    depth: 0,
                    // It should not recurse.
                    customInspect: false
                }));
            }
        }
    ]);
    return BufferList;
})();

},{"buffer":"bOetu","util":"joWnX"}],"fv55Y":[function(require,module,exports) {
var process = require("process");
'use strict'; // undocumented cb() API, needed for core, not for public API
function destroy(err1, cb) {
    var _this = this;
    var readableDestroyed = this._readableState && this._readableState.destroyed;
    var writableDestroyed = this._writableState && this._writableState.destroyed;
    if (readableDestroyed || writableDestroyed) {
        if (cb) cb(err1);
        else if (err1) {
            if (!this._writableState) process.nextTick(emitErrorNT, this, err1);
            else if (!this._writableState.errorEmitted) {
                this._writableState.errorEmitted = true;
                process.nextTick(emitErrorNT, this, err1);
            }
        }
        return this;
    } // we set destroyed to true before firing error callbacks in order
    // to make it re-entrance safe in case destroy() is called within callbacks
    if (this._readableState) this._readableState.destroyed = true;
     // if this is a duplex stream mark the writable part as destroyed as well
    if (this._writableState) this._writableState.destroyed = true;
    this._destroy(err1 || null, function(err) {
        if (!cb && err) {
            if (!_this._writableState) process.nextTick(emitErrorAndCloseNT, _this, err);
            else if (!_this._writableState.errorEmitted) {
                _this._writableState.errorEmitted = true;
                process.nextTick(emitErrorAndCloseNT, _this, err);
            } else process.nextTick(emitCloseNT, _this);
        } else if (cb) {
            process.nextTick(emitCloseNT, _this);
            cb(err);
        } else process.nextTick(emitCloseNT, _this);
    });
    return this;
}
function emitErrorAndCloseNT(self, err) {
    emitErrorNT(self, err);
    emitCloseNT(self);
}
function emitCloseNT(self) {
    if (self._writableState && !self._writableState.emitClose) return;
    if (self._readableState && !self._readableState.emitClose) return;
    self.emit('close');
}
function undestroy() {
    if (this._readableState) {
        this._readableState.destroyed = false;
        this._readableState.reading = false;
        this._readableState.ended = false;
        this._readableState.endEmitted = false;
    }
    if (this._writableState) {
        this._writableState.destroyed = false;
        this._writableState.ended = false;
        this._writableState.ending = false;
        this._writableState.finalCalled = false;
        this._writableState.prefinished = false;
        this._writableState.finished = false;
        this._writableState.errorEmitted = false;
    }
}
function emitErrorNT(self, err) {
    self.emit('error', err);
}
function errorOrDestroy(stream, err) {
    // We have tests that rely on errors being emitted
    // in the same tick, so changing this is semver major.
    // For now when you opt-in to autoDestroy we allow
    // the error to be emitted nextTick. In a future
    // semver major update we should change the default to this.
    var rState = stream._readableState;
    var wState = stream._writableState;
    if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);
    else stream.emit('error', err);
}
module.exports = {
    destroy: destroy,
    undestroy: undestroy,
    errorOrDestroy: errorOrDestroy
};

},{"process":"lDnB8"}],"cA6ER":[function(require,module,exports) {
'use strict';
var ERR_INVALID_OPT_VALUE = require('../../../errors').codes.ERR_INVALID_OPT_VALUE;
function highWaterMarkFrom(options, isDuplex, duplexKey) {
    return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
}
function getHighWaterMark(state, options, duplexKey, isDuplex) {
    var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
    if (hwm != null) {
        if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
            var name = isDuplex ? duplexKey : 'highWaterMark';
            throw new ERR_INVALID_OPT_VALUE(name, hwm);
        }
        return Math.floor(hwm);
    } // Default value
    return state.objectMode ? 16 : 16384;
}
module.exports = {
    getHighWaterMark: getHighWaterMark
};

},{"../../../errors":"iaOAf"}],"iaOAf":[function(require,module,exports) {
'use strict';
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
var codes = {
};
function createErrorType(code, message, Base) {
    if (!Base) Base = Error;
    function getMessage(arg1, arg2, arg3) {
        if (typeof message === 'string') return message;
        else return message(arg1, arg2, arg3);
    }
    var NodeError1 = /*#__PURE__*/ function(_Base) {
        _inheritsLoose(NodeError, _Base);
        function NodeError(arg1, arg2, arg3) {
            return _Base.call(this, getMessage(arg1, arg2, arg3)) || this;
        }
        return NodeError;
    }(Base);
    NodeError1.prototype.name = Base.name;
    NodeError1.prototype.code = code;
    codes[code] = NodeError1;
} // https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js
function oneOf(expected, thing) {
    if (Array.isArray(expected)) {
        var len = expected.length;
        expected = expected.map(function(i) {
            return String(i);
        });
        if (len > 2) return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(', '), ", or ") + expected[len - 1];
        else if (len === 2) return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
        else return "of ".concat(thing, " ").concat(expected[0]);
    } else return "of ".concat(thing, " ").concat(String(expected));
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
function startsWith(str, search, pos) {
    return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function endsWith(str, search, this_len) {
    if (this_len === undefined || this_len > str.length) this_len = str.length;
    return str.substring(this_len - search.length, this_len) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
function includes(str, search, start) {
    if (typeof start !== 'number') start = 0;
    if (start + search.length > str.length) return false;
    else return str.indexOf(search, start) !== -1;
}
createErrorType('ERR_INVALID_OPT_VALUE', function(name, value) {
    return 'The value "' + value + '" is invalid for option "' + name + '"';
}, TypeError);
createErrorType('ERR_INVALID_ARG_TYPE', function(name, expected, actual) {
    // determiner: 'must be' or 'must not be'
    var determiner;
    if (typeof expected === 'string' && startsWith(expected, 'not ')) {
        determiner = 'must not be';
        expected = expected.replace(/^not /, '');
    } else determiner = 'must be';
    var msg;
    if (endsWith(name, ' argument')) // For cases like 'first argument'
    msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
    else {
        var type = includes(name, '.') ? 'property' : 'argument';
        msg = "The \"".concat(name, "\" ").concat(type, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
    }
    msg += ". Received type ".concat(typeof actual);
    return msg;
}, TypeError);
createErrorType('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF');
createErrorType('ERR_METHOD_NOT_IMPLEMENTED', function(name) {
    return 'The ' + name + ' method is not implemented';
});
createErrorType('ERR_STREAM_PREMATURE_CLOSE', 'Premature close');
createErrorType('ERR_STREAM_DESTROYED', function(name) {
    return 'Cannot call ' + name + ' after a stream was destroyed';
});
createErrorType('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times');
createErrorType('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable');
createErrorType('ERR_STREAM_WRITE_AFTER_END', 'write after end');
createErrorType('ERR_STREAM_NULL_VALUES', 'May not write null values to stream', TypeError);
createErrorType('ERR_UNKNOWN_ENCODING', function(arg) {
    return 'Unknown encoding: ' + arg;
}, TypeError);
createErrorType('ERR_STREAM_UNSHIFT_AFTER_END_EVENT', 'stream.unshift() after end event');
module.exports.codes = codes;

},{}],"asLsP":[function(require,module,exports) {
var process = require("process");
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.
'use strict';
/*<replacement>*/ var objectKeys = Object.keys || function(obj) {
    var keys = [];
    for(var key in obj)keys.push(key);
    return keys;
};
/*</replacement>*/ module.exports = Duplex;
var Readable = require('./_stream_readable');
var Writable = require('./_stream_writable');
require('inherits')(Duplex, Readable);
// Allow the keys array to be GC'ed.
var keys1 = objectKeys(Writable.prototype);
for(var v = 0; v < keys1.length; v++){
    var method = keys1[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
}
function Duplex(options) {
    if (!(this instanceof Duplex)) return new Duplex(options);
    Readable.call(this, options);
    Writable.call(this, options);
    this.allowHalfOpen = true;
    if (options) {
        if (options.readable === false) this.readable = false;
        if (options.writable === false) this.writable = false;
        if (options.allowHalfOpen === false) {
            this.allowHalfOpen = false;
            this.once('end', onend);
        }
    }
}
Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.highWaterMark;
    }
});
Object.defineProperty(Duplex.prototype, 'writableBuffer', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState && this._writableState.getBuffer();
    }
});
Object.defineProperty(Duplex.prototype, 'writableLength', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.length;
    }
}); // the no-half-open enforcer
function onend() {
    // If the writable side ended, then we're ok.
    if (this._writableState.ended) return; // no more data can be written.
    // But allow more writes to happen in this tick.
    process.nextTick(onEndNT, this);
}
function onEndNT(self) {
    self.end();
}
Object.defineProperty(Duplex.prototype, 'destroyed', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        if (this._readableState === undefined || this._writableState === undefined) return false;
        return this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function set(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (this._readableState === undefined || this._writableState === undefined) return;
         // backward compatibility, the user is explicitly
        // managing destroyed
        this._readableState.destroyed = value;
        this._writableState.destroyed = value;
    }
});

},{"process":"lDnB8","./_stream_readable":"7oVsU","./_stream_writable":"6k6lP","inherits":"d3hL2"}],"6k6lP":[function(require,module,exports) {
var process = require("process");
var global = arguments[3];
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.
'use strict';
module.exports = Writable;
/* <replacement> */ function WriteReq(chunk, encoding, cb) {
    this.chunk = chunk;
    this.encoding = encoding;
    this.callback = cb;
    this.next = null;
} // It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
    var _this = this;
    this.next = null;
    this.entry = null;
    this.finish = function() {
        onCorkedFinish(_this, state);
    };
}
/* </replacement> */ /*<replacement>*/ var Duplex;
/*</replacement>*/ Writable.WritableState = WritableState;
/*<replacement>*/ var internalUtil = {
    deprecate: require('util-deprecate')
};
/*</replacement>*/ /*<replacement>*/ var Stream = require('./internal/streams/stream');
/*</replacement>*/ var Buffer = require('buffer').Buffer;
var OurUint8Array = global.Uint8Array || function() {
};
function _uint8ArrayToBuffer(chunk) {
    return Buffer.from(chunk);
}
function _isUint8Array(obj) {
    return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
var destroyImpl = require('./internal/streams/destroy');
var _require = require('./internal/streams/state'), getHighWaterMark = _require.getHighWaterMark;
var _require$codes = require('../errors').codes, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK, ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED, ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES, ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END, ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;
var errorOrDestroy = destroyImpl.errorOrDestroy;
require('inherits')(Writable, Stream);
function nop() {
}
function WritableState(options, stream, isDuplex) {
    Duplex = Duplex || require('./_stream_duplex');
    options = options || {
    }; // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream,
    // e.g. options.readableObjectMode vs. options.writableObjectMode, etc.
    if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex; // object stream flag to indicate whether or not this stream
    // contains buffers or objects.
    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode; // the point at which write() starts returning false
    // Note: 0 is a valid value, means that we always return false if
    // the entire buffer is not flushed immediately on write()
    this.highWaterMark = getHighWaterMark(this, options, 'writableHighWaterMark', isDuplex); // if _final has been called
    this.finalCalled = false; // drain event flag.
    this.needDrain = false; // at the start of calling end()
    this.ending = false; // when end() has been called, and returned
    this.ended = false; // when 'finish' is emitted
    this.finished = false; // has it been destroyed
    this.destroyed = false; // should we decode strings into buffers before passing to _write?
    // this is here so that some node-core streams can optimize string
    // handling at a lower level.
    var noDecode = options.decodeStrings === false;
    this.decodeStrings = !noDecode; // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || 'utf8'; // not an actual buffer we keep track of, but a measurement
    // of how much we're waiting to get pushed to some underlying
    // socket or file.
    this.length = 0; // a flag to see when we're in the middle of a write.
    this.writing = false; // when true all writes will be buffered until .uncork() call
    this.corked = 0; // a flag to be able to tell if the onwrite cb is called immediately,
    // or on a later tick.  We set this to true at first, because any
    // actions that shouldn't happen until "later" should generally also
    // not happen before the first write call.
    this.sync = true; // a flag to know if we're processing previously buffered items, which
    // may call the _write() callback in the same tick, so that we don't
    // end up in an overlapped onwrite situation.
    this.bufferProcessing = false; // the callback that's passed to _write(chunk,cb)
    this.onwrite = function(er) {
        onwrite(stream, er);
    }; // the callback that the user supplies to write(chunk,encoding,cb)
    this.writecb = null; // the amount that is being written when _write is called.
    this.writelen = 0;
    this.bufferedRequest = null;
    this.lastBufferedRequest = null; // number of pending user-supplied write callbacks
    // this must be 0 before 'finish' can be emitted
    this.pendingcb = 0; // emit prefinish if the only thing we're waiting for is _write cbs
    // This is relevant for synchronous Transform streams
    this.prefinished = false; // True if the error was already emitted and should not be thrown again
    this.errorEmitted = false; // Should close be emitted on destroy. Defaults to true.
    this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'finish' (and potentially 'end')
    this.autoDestroy = !!options.autoDestroy; // count buffered requests
    this.bufferedRequestCount = 0; // allocate the first CorkedRequest, there is always
    // one allocated and free to use, and we maintain at most two
    this.corkedRequestsFree = new CorkedRequest(this);
}
WritableState.prototype.getBuffer = function getBuffer() {
    var current = this.bufferedRequest;
    var out = [];
    while(current){
        out.push(current);
        current = current.next;
    }
    return out;
};
(function() {
    try {
        Object.defineProperty(WritableState.prototype, 'buffer', {
            get: internalUtil.deprecate(function writableStateBufferGetter() {
                return this.getBuffer();
            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", 'DEP0003')
        });
    } catch (_) {
    }
})(); // Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var realHasInstance;
if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
    realHasInstance = Function.prototype[Symbol.hasInstance];
    Object.defineProperty(Writable, Symbol.hasInstance, {
        value: function value(object) {
            if (realHasInstance.call(this, object)) return true;
            if (this !== Writable) return false;
            return object && object._writableState instanceof WritableState;
        }
    });
} else realHasInstance = function realHasInstance(object) {
    return object instanceof this;
};
function Writable(options) {
    Duplex = Duplex || require('./_stream_duplex'); // Writable ctor is applied to Duplexes, too.
    // `realHasInstance` is necessary because using plain `instanceof`
    // would return false, as no `_writableState` property is attached.
    // Trying to use the custom `instanceof` for Writable here will also break the
    // Node.js LazyTransform implementation, which has a non-trivial getter for
    // `_writableState` that would lead to infinite recursion.
    // Checking for a Stream.Duplex instance is faster here instead of inside
    // the WritableState constructor, at least with V8 6.5
    var isDuplex = this instanceof Duplex;
    if (!isDuplex && !realHasInstance.call(Writable, this)) return new Writable(options);
    this._writableState = new WritableState(options, this, isDuplex); // legacy.
    this.writable = true;
    if (options) {
        if (typeof options.write === 'function') this._write = options.write;
        if (typeof options.writev === 'function') this._writev = options.writev;
        if (typeof options.destroy === 'function') this._destroy = options.destroy;
        if (typeof options.final === 'function') this._final = options.final;
    }
    Stream.call(this);
} // Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function() {
    errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
};
function writeAfterEnd(stream, cb) {
    var er = new ERR_STREAM_WRITE_AFTER_END(); // TODO: defer error events consistently everywhere, not just the cb
    errorOrDestroy(stream, er);
    process.nextTick(cb, er);
} // Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function validChunk(stream, state, chunk, cb) {
    var er;
    if (chunk === null) er = new ERR_STREAM_NULL_VALUES();
    else if (typeof chunk !== 'string' && !state.objectMode) er = new ERR_INVALID_ARG_TYPE('chunk', [
        'string',
        'Buffer'
    ], chunk);
    if (er) {
        errorOrDestroy(stream, er);
        process.nextTick(cb, er);
        return false;
    }
    return true;
}
Writable.prototype.write = function(chunk, encoding, cb) {
    var state = this._writableState;
    var ret = false;
    var isBuf = !state.objectMode && _isUint8Array(chunk);
    if (isBuf && !Buffer.isBuffer(chunk)) chunk = _uint8ArrayToBuffer(chunk);
    if (typeof encoding === 'function') {
        cb = encoding;
        encoding = null;
    }
    if (isBuf) encoding = 'buffer';
    else if (!encoding) encoding = state.defaultEncoding;
    if (typeof cb !== 'function') cb = nop;
    if (state.ending) writeAfterEnd(this, cb);
    else if (isBuf || validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
    }
    return ret;
};
Writable.prototype.cork = function() {
    this._writableState.corked++;
};
Writable.prototype.uncork = function() {
    var state = this._writableState;
    if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
    }
};
Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
    // node::ParseEncoding() requires lower case.
    if (typeof encoding === 'string') encoding = encoding.toLowerCase();
    if (!([
        'hex',
        'utf8',
        'utf-8',
        'ascii',
        'binary',
        'base64',
        'ucs2',
        'ucs-2',
        'utf16le',
        'utf-16le',
        'raw'
    ].indexOf((encoding + '').toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
    this._writableState.defaultEncoding = encoding;
    return this;
};
Object.defineProperty(Writable.prototype, 'writableBuffer', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState && this._writableState.getBuffer();
    }
});
function decodeChunk(state, chunk, encoding) {
    if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') chunk = Buffer.from(chunk, encoding);
    return chunk;
}
Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.highWaterMark;
    }
}); // if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
    if (!isBuf) {
        var newChunk = decodeChunk(state, chunk, encoding);
        if (chunk !== newChunk) {
            isBuf = true;
            encoding = 'buffer';
            chunk = newChunk;
        }
    }
    var len = state.objectMode ? 1 : chunk.length;
    state.length += len;
    var ret = state.length < state.highWaterMark; // we must ensure that previous needDrain will not be reset to false.
    if (!ret) state.needDrain = true;
    if (state.writing || state.corked) {
        var last = state.lastBufferedRequest;
        state.lastBufferedRequest = {
            chunk: chunk,
            encoding: encoding,
            isBuf: isBuf,
            callback: cb,
            next: null
        };
        if (last) last.next = state.lastBufferedRequest;
        else state.bufferedRequest = state.lastBufferedRequest;
        state.bufferedRequestCount += 1;
    } else doWrite(stream, state, false, len, chunk, encoding, cb);
    return ret;
}
function doWrite(stream, state, writev, len, chunk, encoding, cb) {
    state.writelen = len;
    state.writecb = cb;
    state.writing = true;
    state.sync = true;
    if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED('write'));
    else if (writev) stream._writev(chunk, state.onwrite);
    else stream._write(chunk, encoding, state.onwrite);
    state.sync = false;
}
function onwriteError(stream, state, sync, er, cb) {
    --state.pendingcb;
    if (sync) {
        // defer the callback if we are being called synchronously
        // to avoid piling up things on the stack
        process.nextTick(cb, er); // this can emit finish, and it will always happen
        // after error
        process.nextTick(finishMaybe, stream, state);
        stream._writableState.errorEmitted = true;
        errorOrDestroy(stream, er);
    } else {
        // the caller expect this to happen before if
        // it is async
        cb(er);
        stream._writableState.errorEmitted = true;
        errorOrDestroy(stream, er); // this can emit finish, but finish must
        // always follow error
        finishMaybe(stream, state);
    }
}
function onwriteStateUpdate(state) {
    state.writing = false;
    state.writecb = null;
    state.length -= state.writelen;
    state.writelen = 0;
}
function onwrite(stream, er) {
    var state = stream._writableState;
    var sync = state.sync;
    var cb = state.writecb;
    if (typeof cb !== 'function') throw new ERR_MULTIPLE_CALLBACK();
    onwriteStateUpdate(state);
    if (er) onwriteError(stream, state, sync, er, cb);
    else {
        // Check if we're actually ready to finish, but don't emit yet
        var finished = needFinish(state) || stream.destroyed;
        if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(stream, state);
        if (sync) process.nextTick(afterWrite, stream, state, finished, cb);
        else afterWrite(stream, state, finished, cb);
    }
}
function afterWrite(stream, state, finished, cb) {
    if (!finished) onwriteDrain(stream, state);
    state.pendingcb--;
    cb();
    finishMaybe(stream, state);
} // Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
    if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit('drain');
    }
} // if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
    state.bufferProcessing = true;
    var entry = state.bufferedRequest;
    if (stream._writev && entry && entry.next) {
        // Fast case, write everything using _writev()
        var l = state.bufferedRequestCount;
        var buffer = new Array(l);
        var holder = state.corkedRequestsFree;
        holder.entry = entry;
        var count = 0;
        var allBuffers = true;
        while(entry){
            buffer[count] = entry;
            if (!entry.isBuf) allBuffers = false;
            entry = entry.next;
            count += 1;
        }
        buffer.allBuffers = allBuffers;
        doWrite(stream, state, true, state.length, buffer, '', holder.finish); // doWrite is almost always async, defer these to save a bit of time
        // as the hot path ends with doWrite
        state.pendingcb++;
        state.lastBufferedRequest = null;
        if (holder.next) {
            state.corkedRequestsFree = holder.next;
            holder.next = null;
        } else state.corkedRequestsFree = new CorkedRequest(state);
        state.bufferedRequestCount = 0;
    } else {
        // Slow case, write chunks one-by-one
        while(entry){
            var chunk = entry.chunk;
            var encoding = entry.encoding;
            var cb = entry.callback;
            var len = state.objectMode ? 1 : chunk.length;
            doWrite(stream, state, false, len, chunk, encoding, cb);
            entry = entry.next;
            state.bufferedRequestCount--; // if we didn't call the onwrite immediately, then
            // it means that we need to wait until it does.
            // also, that means that the chunk and cb are currently
            // being processed, so move the buffer counter past them.
            if (state.writing) break;
        }
        if (entry === null) state.lastBufferedRequest = null;
    }
    state.bufferedRequest = entry;
    state.bufferProcessing = false;
}
Writable.prototype._write = function(chunk, encoding, cb) {
    cb(new ERR_METHOD_NOT_IMPLEMENTED('_write()'));
};
Writable.prototype._writev = null;
Writable.prototype.end = function(chunk, encoding, cb) {
    var state = this._writableState;
    if (typeof chunk === 'function') {
        cb = chunk;
        chunk = null;
        encoding = null;
    } else if (typeof encoding === 'function') {
        cb = encoding;
        encoding = null;
    }
    if (chunk !== null && chunk !== undefined) this.write(chunk, encoding); // .end() fully uncorks
    if (state.corked) {
        state.corked = 1;
        this.uncork();
    } // ignore unnecessary end() calls.
    if (!state.ending) endWritable(this, state, cb);
    return this;
};
Object.defineProperty(Writable.prototype, 'writableLength', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.length;
    }
});
function needFinish(state) {
    return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function callFinal(stream, state) {
    stream._final(function(err) {
        state.pendingcb--;
        if (err) errorOrDestroy(stream, err);
        state.prefinished = true;
        stream.emit('prefinish');
        finishMaybe(stream, state);
    });
}
function prefinish(stream, state) {
    if (!state.prefinished && !state.finalCalled) {
        if (typeof stream._final === 'function' && !state.destroyed) {
            state.pendingcb++;
            state.finalCalled = true;
            process.nextTick(callFinal, stream, state);
        } else {
            state.prefinished = true;
            stream.emit('prefinish');
        }
    }
}
function finishMaybe(stream, state) {
    var need = needFinish(state);
    if (need) {
        prefinish(stream, state);
        if (state.pendingcb === 0) {
            state.finished = true;
            stream.emit('finish');
            if (state.autoDestroy) {
                // In case of duplex streams we need a way to detect
                // if the readable side is ready for autoDestroy as well
                var rState = stream._readableState;
                if (!rState || rState.autoDestroy && rState.endEmitted) stream.destroy();
            }
        }
    }
    return need;
}
function endWritable(stream, state, cb) {
    state.ending = true;
    finishMaybe(stream, state);
    if (cb) {
        if (state.finished) process.nextTick(cb);
        else stream.once('finish', cb);
    }
    state.ended = true;
    stream.writable = false;
}
function onCorkedFinish(corkReq, state, err) {
    var entry = corkReq.entry;
    corkReq.entry = null;
    while(entry){
        var cb = entry.callback;
        state.pendingcb--;
        cb(err);
        entry = entry.next;
    } // reuse the free corkReq.
    state.corkedRequestsFree.next = corkReq;
}
Object.defineProperty(Writable.prototype, 'destroyed', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        if (this._writableState === undefined) return false;
        return this._writableState.destroyed;
    },
    set: function set(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (!this._writableState) return;
         // backward compatibility, the user is explicitly
        // managing destroyed
        this._writableState.destroyed = value;
    }
});
Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;
Writable.prototype._destroy = function(err, cb) {
    cb(err);
};

},{"process":"lDnB8","util-deprecate":"bfjXI","./internal/streams/stream":"cmeNb","buffer":"bOetu","./internal/streams/destroy":"fv55Y","./internal/streams/state":"cA6ER","../errors":"iaOAf","inherits":"d3hL2","./_stream_duplex":"asLsP"}],"1yeGF":[function(require,module,exports) {
var process = require("process");
'use strict';
var _Object$setPrototypeO;
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var finished = require('./end-of-stream');
var kLastResolve = Symbol('lastResolve');
var kLastReject = Symbol('lastReject');
var kError = Symbol('error');
var kEnded = Symbol('ended');
var kLastPromise = Symbol('lastPromise');
var kHandlePromise = Symbol('handlePromise');
var kStream = Symbol('stream');
function createIterResult(value, done) {
    return {
        value: value,
        done: done
    };
}
function readAndResolve(iter) {
    var resolve = iter[kLastResolve];
    if (resolve !== null) {
        var data = iter[kStream].read(); // we defer if data is null
        // we can be expecting either 'end' or
        // 'error'
        if (data !== null) {
            iter[kLastPromise] = null;
            iter[kLastResolve] = null;
            iter[kLastReject] = null;
            resolve(createIterResult(data, false));
        }
    }
}
function onReadable(iter) {
    // we wait for the next tick, because it might
    // emit an error with process.nextTick
    process.nextTick(readAndResolve, iter);
}
function wrapForNext(lastPromise, iter) {
    return function(resolve, reject) {
        lastPromise.then(function() {
            if (iter[kEnded]) {
                resolve(createIterResult(undefined, true));
                return;
            }
            iter[kHandlePromise](resolve, reject);
        }, reject);
    };
}
var AsyncIteratorPrototype = Object.getPrototypeOf(function() {
});
var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
    get stream () {
        return this[kStream];
    },
    next: function next() {
        var _this = this;
        // if we have detected an error in the meanwhile
        // reject straight away
        var error = this[kError];
        if (error !== null) return Promise.reject(error);
        if (this[kEnded]) return Promise.resolve(createIterResult(undefined, true));
        if (this[kStream].destroyed) // We need to defer via nextTick because if .destroy(err) is
        // called, the error will be emitted via nextTick, and
        // we cannot guarantee that there is no error lingering around
        // waiting to be emitted.
        return new Promise(function(resolve, reject) {
            process.nextTick(function() {
                if (_this[kError]) reject(_this[kError]);
                else resolve(createIterResult(undefined, true));
            });
        });
         // if we have multiple next() calls
        // we will wait for the previous Promise to finish
        // this logic is optimized to support for await loops,
        // where next() is only called once at a time
        var lastPromise = this[kLastPromise];
        var promise;
        if (lastPromise) promise = new Promise(wrapForNext(lastPromise, this));
        else {
            // fast path needed to support multiple this.push()
            // without triggering the next() queue
            var data = this[kStream].read();
            if (data !== null) return Promise.resolve(createIterResult(data, false));
            promise = new Promise(this[kHandlePromise]);
        }
        this[kLastPromise] = promise;
        return promise;
    }
}, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function() {
    return this;
}), _defineProperty(_Object$setPrototypeO, "return", function _return() {
    var _this2 = this;
    // destroy(err, cb) is a private API
    // we can guarantee we have that here, because we control the
    // Readable class this is attached to
    return new Promise(function(resolve, reject) {
        _this2[kStream].destroy(null, function(err) {
            if (err) {
                reject(err);
                return;
            }
            resolve(createIterResult(undefined, true));
        });
    });
}), _Object$setPrototypeO), AsyncIteratorPrototype);
var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator(stream) {
    var _Object$create;
    var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {
    }, _defineProperty(_Object$create, kStream, {
        value: stream,
        writable: true
    }), _defineProperty(_Object$create, kLastResolve, {
        value: null,
        writable: true
    }), _defineProperty(_Object$create, kLastReject, {
        value: null,
        writable: true
    }), _defineProperty(_Object$create, kError, {
        value: null,
        writable: true
    }), _defineProperty(_Object$create, kEnded, {
        value: stream._readableState.endEmitted,
        writable: true
    }), _defineProperty(_Object$create, kHandlePromise, {
        value: function value(resolve, reject) {
            var data = iterator[kStream].read();
            if (data) {
                iterator[kLastPromise] = null;
                iterator[kLastResolve] = null;
                iterator[kLastReject] = null;
                resolve(createIterResult(data, false));
            } else {
                iterator[kLastResolve] = resolve;
                iterator[kLastReject] = reject;
            }
        },
        writable: true
    }), _Object$create));
    iterator[kLastPromise] = null;
    finished(stream, function(err) {
        if (err && err.code !== 'ERR_STREAM_PREMATURE_CLOSE') {
            var reject = iterator[kLastReject]; // reject if we are waiting for data in the Promise
            // returned by next() and store the error
            if (reject !== null) {
                iterator[kLastPromise] = null;
                iterator[kLastResolve] = null;
                iterator[kLastReject] = null;
                reject(err);
            }
            iterator[kError] = err;
            return;
        }
        var resolve = iterator[kLastResolve];
        if (resolve !== null) {
            iterator[kLastPromise] = null;
            iterator[kLastResolve] = null;
            iterator[kLastReject] = null;
            resolve(createIterResult(undefined, true));
        }
        iterator[kEnded] = true;
    });
    stream.on('readable', onReadable.bind(null, iterator));
    return iterator;
};
module.exports = createReadableStreamAsyncIterator;

},{"process":"lDnB8","./end-of-stream":"5kfnN"}],"5kfnN":[function(require,module,exports) {
// Ported from https://github.com/mafintosh/end-of-stream with
// permission from the author, Mathias Buus (@mafintosh).
'use strict';
var ERR_STREAM_PREMATURE_CLOSE = require('../../../errors').codes.ERR_STREAM_PREMATURE_CLOSE;
function once(callback) {
    var called = false;
    return function() {
        if (called) return;
        called = true;
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        callback.apply(this, args);
    };
}
function noop() {
}
function isRequest(stream) {
    return stream.setHeader && typeof stream.abort === 'function';
}
function eos(stream, opts, callback) {
    if (typeof opts === 'function') return eos(stream, null, opts);
    if (!opts) opts = {
    };
    callback = once(callback || noop);
    var readable = opts.readable || opts.readable !== false && stream.readable;
    var writable = opts.writable || opts.writable !== false && stream.writable;
    var onlegacyfinish = function onlegacyfinish() {
        if (!stream.writable) onfinish();
    };
    var writableEnded = stream._writableState && stream._writableState.finished;
    var onfinish = function onfinish() {
        writable = false;
        writableEnded = true;
        if (!readable) callback.call(stream);
    };
    var readableEnded = stream._readableState && stream._readableState.endEmitted;
    var onend = function onend() {
        readable = false;
        readableEnded = true;
        if (!writable) callback.call(stream);
    };
    var onerror = function onerror(err) {
        callback.call(stream, err);
    };
    var onclose = function onclose() {
        var err;
        if (readable && !readableEnded) {
            if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
            return callback.call(stream, err);
        }
        if (writable && !writableEnded) {
            if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
            return callback.call(stream, err);
        }
    };
    var onrequest = function onrequest() {
        stream.req.on('finish', onfinish);
    };
    if (isRequest(stream)) {
        stream.on('complete', onfinish);
        stream.on('abort', onclose);
        if (stream.req) onrequest();
        else stream.on('request', onrequest);
    } else if (writable && !stream._writableState) {
        // legacy streams
        stream.on('end', onlegacyfinish);
        stream.on('close', onlegacyfinish);
    }
    stream.on('end', onend);
    stream.on('finish', onfinish);
    if (opts.error !== false) stream.on('error', onerror);
    stream.on('close', onclose);
    return function() {
        stream.removeListener('complete', onfinish);
        stream.removeListener('abort', onclose);
        stream.removeListener('request', onrequest);
        if (stream.req) stream.req.removeListener('finish', onfinish);
        stream.removeListener('end', onlegacyfinish);
        stream.removeListener('close', onlegacyfinish);
        stream.removeListener('finish', onfinish);
        stream.removeListener('end', onend);
        stream.removeListener('error', onerror);
        stream.removeListener('close', onclose);
    };
}
module.exports = eos;

},{"../../../errors":"iaOAf"}],"kHJWO":[function(require,module,exports) {
module.exports = function() {
    throw new Error('Readable.from is not available in the browser');
};

},{}],"hiVkM":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.
'use strict';
module.exports = Transform;
var _require$codes = require('../errors').codes, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK, ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING, ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;
var Duplex = require('./_stream_duplex');
require('inherits')(Transform, Duplex);
function afterTransform(er, data) {
    var ts = this._transformState;
    ts.transforming = false;
    var cb = ts.writecb;
    if (cb === null) return this.emit('error', new ERR_MULTIPLE_CALLBACK());
    ts.writechunk = null;
    ts.writecb = null;
    if (data != null) this.push(data);
    cb(er);
    var rs = this._readableState;
    rs.reading = false;
    if (rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
}
function Transform(options) {
    if (!(this instanceof Transform)) return new Transform(options);
    Duplex.call(this, options);
    this._transformState = {
        afterTransform: afterTransform.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
    }; // start out asking for a readable event once data is transformed.
    this._readableState.needReadable = true; // we have implemented the _read method, and done the other things
    // that Readable wants before the first _read call, so unset the
    // sync guard flag.
    this._readableState.sync = false;
    if (options) {
        if (typeof options.transform === 'function') this._transform = options.transform;
        if (typeof options.flush === 'function') this._flush = options.flush;
    } // When the writable side finishes, then flush out anything remaining.
    this.on('prefinish', prefinish);
}
function prefinish() {
    var _this = this;
    if (typeof this._flush === 'function' && !this._readableState.destroyed) this._flush(function(er, data) {
        done(_this, er, data);
    });
    else done(this, null, null);
}
Transform.prototype.push = function(chunk, encoding) {
    this._transformState.needTransform = false;
    return Duplex.prototype.push.call(this, chunk, encoding);
}; // This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function(chunk, encoding, cb) {
    cb(new ERR_METHOD_NOT_IMPLEMENTED('_transform()'));
};
Transform.prototype._write = function(chunk, encoding, cb) {
    var ts = this._transformState;
    ts.writecb = cb;
    ts.writechunk = chunk;
    ts.writeencoding = encoding;
    if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
    }
}; // Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function(n) {
    var ts = this._transformState;
    if (ts.writechunk !== null && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
    } else // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
};
Transform.prototype._destroy = function(err, cb) {
    Duplex.prototype._destroy.call(this, err, function(err2) {
        cb(err2);
    });
};
function done(stream, er, data) {
    if (er) return stream.emit('error', er);
    if (data != null) stream.push(data); // TODO(BridgeAR): Write a test for these two error cases
    // if there's nothing in the write buffer, then that means
    // that nothing more will ever be provided
    if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
    if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
    return stream.push(null);
}

},{"../errors":"iaOAf","./_stream_duplex":"asLsP","inherits":"d3hL2"}],"eok0u":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.
'use strict';
module.exports = PassThrough;
var Transform = require('./_stream_transform');
require('inherits')(PassThrough, Transform);
function PassThrough(options) {
    if (!(this instanceof PassThrough)) return new PassThrough(options);
    Transform.call(this, options);
}
PassThrough.prototype._transform = function(chunk, encoding, cb) {
    cb(null, chunk);
};

},{"./_stream_transform":"hiVkM","inherits":"d3hL2"}],"bikaI":[function(require,module,exports) {
// Ported from https://github.com/mafintosh/pump with
// permission from the author, Mathias Buus (@mafintosh).
'use strict';
var eos;
function once(callback) {
    var called = false;
    return function() {
        if (called) return;
        called = true;
        callback.apply(void 0, arguments);
    };
}
var _require$codes = require('../../../errors').codes, ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
function noop(err) {
    // Rethrow the error if it exists to avoid swallowing it
    if (err) throw err;
}
function isRequest(stream) {
    return stream.setHeader && typeof stream.abort === 'function';
}
function destroyer(stream, reading, writing, callback) {
    callback = once(callback);
    var closed = false;
    stream.on('close', function() {
        closed = true;
    });
    if (eos === undefined) eos = require('./end-of-stream');
    eos(stream, {
        readable: reading,
        writable: writing
    }, function(err) {
        if (err) return callback(err);
        closed = true;
        callback();
    });
    var destroyed = false;
    return function(err) {
        if (closed) return;
        if (destroyed) return;
        destroyed = true; // request.destroy just do .end - .abort is what we want
        if (isRequest(stream)) return stream.abort();
        if (typeof stream.destroy === 'function') return stream.destroy();
        callback(err || new ERR_STREAM_DESTROYED('pipe'));
    };
}
function call(fn) {
    fn();
}
function pipe(from, to) {
    return from.pipe(to);
}
function popCallback(streams) {
    if (!streams.length) return noop;
    if (typeof streams[streams.length - 1] !== 'function') return noop;
    return streams.pop();
}
function pipeline() {
    for(var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++)streams[_key] = arguments[_key];
    var callback = popCallback(streams);
    if (Array.isArray(streams[0])) streams = streams[0];
    if (streams.length < 2) throw new ERR_MISSING_ARGS('streams');
    var error;
    var destroys = streams.map(function(stream, i) {
        var reading = i < streams.length - 1;
        var writing = i > 0;
        return destroyer(stream, reading, writing, function(err) {
            if (!error) error = err;
            if (err) destroys.forEach(call);
            if (reading) return;
            destroys.forEach(call);
            callback(error);
        });
    });
    return streams.reduce(pipe);
}
module.exports = pipeline;

},{"../../../errors":"iaOAf","./end-of-stream":"5kfnN"}],"8xgxr":[function(require,module,exports) {
var WriteError = require('level-errors').WriteError;
var promisify = require('./promisify');
var getCallback = require('./common').getCallback;
var getOptions = require('./common').getOptions;
function Batch(levelup) {
    // TODO (next major): remove this._levelup alias
    this.db = this._levelup = levelup;
    this.batch = levelup.db.batch();
    this.ops = [];
    this.length = 0;
}
Batch.prototype.put = function(key, value) {
    try {
        this.batch.put(key, value);
    } catch (e) {
        throw new WriteError(e);
    }
    this.ops.push({
        type: 'put',
        key: key,
        value: value
    });
    this.length++;
    return this;
};
Batch.prototype.del = function(key) {
    try {
        this.batch.del(key);
    } catch (err) {
        throw new WriteError(err);
    }
    this.ops.push({
        type: 'del',
        key: key
    });
    this.length++;
    return this;
};
Batch.prototype.clear = function() {
    try {
        this.batch.clear();
    } catch (err) {
        throw new WriteError(err);
    }
    this.ops = [];
    this.length = 0;
    return this;
};
Batch.prototype.write = function(options, callback) {
    var levelup = this._levelup;
    var ops = this.ops;
    var promise;
    callback = getCallback(options, callback);
    if (!callback) {
        callback = promisify();
        promise = callback.promise;
    }
    options = getOptions(options);
    try {
        this.batch.write(options, function(err) {
            if (err) return callback(new WriteError(err));
            levelup.emit('batch', ops);
            callback();
        });
    } catch (err) {
        throw new WriteError(err);
    }
    return promise;
};
module.exports = Batch;

},{"level-errors":"jUsAO","./promisify":"2boiA","./common":"3vVgQ"}],"jUsAO":[function(require,module,exports) {
var createError = require('errno').create;
var LevelUPError = createError('LevelUPError');
var NotFoundError = createError('NotFoundError', LevelUPError);
NotFoundError.prototype.notFound = true;
NotFoundError.prototype.status = 404;
module.exports = {
    LevelUPError: LevelUPError,
    InitializationError: createError('InitializationError', LevelUPError),
    OpenError: createError('OpenError', LevelUPError),
    ReadError: createError('ReadError', LevelUPError),
    WriteError: createError('WriteError', LevelUPError),
    NotFoundError: NotFoundError,
    EncodingError: createError('EncodingError', LevelUPError)
};

},{"errno":"hMgr9"}],"hMgr9":[function(require,module,exports) {
var all = module.exports.all = [
    {
        errno: -2,
        code: 'ENOENT',
        description: 'no such file or directory'
    },
    {
        errno: -1,
        code: 'UNKNOWN',
        description: 'unknown error'
    },
    {
        errno: 0,
        code: 'OK',
        description: 'success'
    },
    {
        errno: 1,
        code: 'EOF',
        description: 'end of file'
    },
    {
        errno: 2,
        code: 'EADDRINFO',
        description: 'getaddrinfo error'
    },
    {
        errno: 3,
        code: 'EACCES',
        description: 'permission denied'
    },
    {
        errno: 4,
        code: 'EAGAIN',
        description: 'resource temporarily unavailable'
    },
    {
        errno: 5,
        code: 'EADDRINUSE',
        description: 'address already in use'
    },
    {
        errno: 6,
        code: 'EADDRNOTAVAIL',
        description: 'address not available'
    },
    {
        errno: 7,
        code: 'EAFNOSUPPORT',
        description: 'address family not supported'
    },
    {
        errno: 8,
        code: 'EALREADY',
        description: 'connection already in progress'
    },
    {
        errno: 9,
        code: 'EBADF',
        description: 'bad file descriptor'
    },
    {
        errno: 10,
        code: 'EBUSY',
        description: 'resource busy or locked'
    },
    {
        errno: 11,
        code: 'ECONNABORTED',
        description: 'software caused connection abort'
    },
    {
        errno: 12,
        code: 'ECONNREFUSED',
        description: 'connection refused'
    },
    {
        errno: 13,
        code: 'ECONNRESET',
        description: 'connection reset by peer'
    },
    {
        errno: 14,
        code: 'EDESTADDRREQ',
        description: 'destination address required'
    },
    {
        errno: 15,
        code: 'EFAULT',
        description: 'bad address in system call argument'
    },
    {
        errno: 16,
        code: 'EHOSTUNREACH',
        description: 'host is unreachable'
    },
    {
        errno: 17,
        code: 'EINTR',
        description: 'interrupted system call'
    },
    {
        errno: 18,
        code: 'EINVAL',
        description: 'invalid argument'
    },
    {
        errno: 19,
        code: 'EISCONN',
        description: 'socket is already connected'
    },
    {
        errno: 20,
        code: 'EMFILE',
        description: 'too many open files'
    },
    {
        errno: 21,
        code: 'EMSGSIZE',
        description: 'message too long'
    },
    {
        errno: 22,
        code: 'ENETDOWN',
        description: 'network is down'
    },
    {
        errno: 23,
        code: 'ENETUNREACH',
        description: 'network is unreachable'
    },
    {
        errno: 24,
        code: 'ENFILE',
        description: 'file table overflow'
    },
    {
        errno: 25,
        code: 'ENOBUFS',
        description: 'no buffer space available'
    },
    {
        errno: 26,
        code: 'ENOMEM',
        description: 'not enough memory'
    },
    {
        errno: 27,
        code: 'ENOTDIR',
        description: 'not a directory'
    },
    {
        errno: 28,
        code: 'EISDIR',
        description: 'illegal operation on a directory'
    },
    {
        errno: 29,
        code: 'ENONET',
        description: 'machine is not on the network'
    },
    {
        errno: 31,
        code: 'ENOTCONN',
        description: 'socket is not connected'
    },
    {
        errno: 32,
        code: 'ENOTSOCK',
        description: 'socket operation on non-socket'
    },
    {
        errno: 33,
        code: 'ENOTSUP',
        description: 'operation not supported on socket'
    },
    {
        errno: 34,
        code: 'ENOENT',
        description: 'no such file or directory'
    },
    {
        errno: 35,
        code: 'ENOSYS',
        description: 'function not implemented'
    },
    {
        errno: 36,
        code: 'EPIPE',
        description: 'broken pipe'
    },
    {
        errno: 37,
        code: 'EPROTO',
        description: 'protocol error'
    },
    {
        errno: 38,
        code: 'EPROTONOSUPPORT',
        description: 'protocol not supported'
    },
    {
        errno: 39,
        code: 'EPROTOTYPE',
        description: 'protocol wrong type for socket'
    },
    {
        errno: 40,
        code: 'ETIMEDOUT',
        description: 'connection timed out'
    },
    {
        errno: 41,
        code: 'ECHARSET',
        description: 'invalid Unicode character'
    },
    {
        errno: 42,
        code: 'EAIFAMNOSUPPORT',
        description: 'address family for hostname not supported'
    },
    {
        errno: 44,
        code: 'EAISERVICE',
        description: 'servname not supported for ai_socktype'
    },
    {
        errno: 45,
        code: 'EAISOCKTYPE',
        description: 'ai_socktype not supported'
    },
    {
        errno: 46,
        code: 'ESHUTDOWN',
        description: 'cannot send after transport endpoint shutdown'
    },
    {
        errno: 47,
        code: 'EEXIST',
        description: 'file already exists'
    },
    {
        errno: 48,
        code: 'ESRCH',
        description: 'no such process'
    },
    {
        errno: 49,
        code: 'ENAMETOOLONG',
        description: 'name too long'
    },
    {
        errno: 50,
        code: 'EPERM',
        description: 'operation not permitted'
    },
    {
        errno: 51,
        code: 'ELOOP',
        description: 'too many symbolic links encountered'
    },
    {
        errno: 52,
        code: 'EXDEV',
        description: 'cross-device link not permitted'
    },
    {
        errno: 53,
        code: 'ENOTEMPTY',
        description: 'directory not empty'
    },
    {
        errno: 54,
        code: 'ENOSPC',
        description: 'no space left on device'
    },
    {
        errno: 55,
        code: 'EIO',
        description: 'i/o error'
    },
    {
        errno: 56,
        code: 'EROFS',
        description: 'read-only file system'
    },
    {
        errno: 57,
        code: 'ENODEV',
        description: 'no such device'
    },
    {
        errno: 58,
        code: 'ESPIPE',
        description: 'invalid seek'
    },
    {
        errno: 59,
        code: 'ECANCELED',
        description: 'operation canceled'
    }
];
module.exports.errno = {
};
module.exports.code = {
};
all.forEach(function(error) {
    module.exports.errno[error.errno] = error;
    module.exports.code[error.code] = error;
});
module.exports.custom = require('./custom')(module.exports);
module.exports.create = module.exports.custom.createError;

},{"./custom":"kmbVv"}],"kmbVv":[function(require,module,exports) {
var prr = require('prr');
function init(type, message, cause) {
    if (!!message && typeof message != 'string') message = message.message || message.name;
    prr(this, {
        type: type,
        name: type,
        cause: typeof message != 'string' ? message : cause,
        message: message
    }, 'ewr');
}
// generic prototype, not intended to be actually used - helpful for `instanceof`
function CustomError(message, cause) {
    Error.call(this);
    if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
    init.call(this, 'CustomError', message, cause);
}
CustomError.prototype = new Error();
function createError(errno, type, proto) {
    var err = function(message, cause) {
        init.call(this, type, message, cause);
        //TODO: the specificity here is stupid, errno should be available everywhere
        if (type == 'FilesystemError') {
            this.code = this.cause.code;
            this.path = this.cause.path;
            this.errno = this.cause.errno;
            this.message = (errno.errno[this.cause.errno] ? errno.errno[this.cause.errno].description : this.cause.message) + (this.cause.path ? ' [' + this.cause.path + ']' : '');
        }
        Error.call(this);
        if (Error.captureStackTrace) Error.captureStackTrace(this, err);
    };
    err.prototype = !!proto ? new proto() : new CustomError();
    return err;
}
module.exports = function(errno) {
    var ce = function(type, proto) {
        return createError(errno, type, proto);
    };
    return {
        CustomError: CustomError,
        FilesystemError: ce('FilesystemError'),
        createError: ce
    };
};

},{"prr":"gbJcS"}],"gbJcS":[function(require,module,exports) {
/*!
  * prr
  * (c) 2013 Rod Vagg <rod@vagg.org>
  * https://github.com/rvagg/prr
  * License: MIT
  */ (function(name, context, definition) {
    if (typeof module != 'undefined' && module.exports) module.exports = definition();
    else context[name] = definition();
})('prr', this, function() {
    var setProperty = typeof Object.defineProperty == 'function' ? function(obj, key, options) {
        Object.defineProperty(obj, key, options);
        return obj;
    } : function(obj, key, options) {
        obj[key] = options.value;
        return obj;
    }, makeOptions = function(value, options) {
        var oo = typeof options == 'object', os = !oo && typeof options == 'string', op = function(p) {
            return oo ? !!options[p] : os ? options.indexOf(p[0]) > -1 : false;
        };
        return {
            enumerable: op('enumerable'),
            configurable: op('configurable'),
            writable: op('writable'),
            value: value
        };
    }, prr = function(obj, key, value, options) {
        var k;
        options = makeOptions(value, options);
        if (typeof key == 'object') {
            for(k in key)if (Object.hasOwnProperty.call(key, k)) {
                options.value = key[k];
                setProperty(obj, k, options);
            }
            return obj;
        }
        return setProperty(obj, key, options);
    };
    return prr;
});

},{}],"2boiA":[function(require,module,exports) {
function promisify() {
    var callback;
    var promise = new Promise(function(resolve, reject) {
        callback = function callback(err, value) {
            if (err) reject(err);
            else resolve(value);
        };
    });
    callback.promise = promise;
    return callback;
}
module.exports = promisify;

},{}],"3vVgQ":[function(require,module,exports) {
exports.getCallback = function(options, callback) {
    return typeof options === 'function' ? options : callback;
};
exports.getOptions = function(options) {
    return typeof options === 'object' && options !== null ? options : {
    };
};

},{}],"ilVUv":[function(require,module,exports) {
var process = require("process");
// Currently in sync with Node.js lib/assert.js
// https://github.com/nodejs/node/commit/2a51ae424a513ec9a6aa3466baa0cc1d55dd4f3b
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
var _require = require('./internal/errors'), _require$codes = _require.codes, ERR_AMBIGUOUS_ARGUMENT = _require$codes.ERR_AMBIGUOUS_ARGUMENT, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_INVALID_ARG_VALUE = _require$codes.ERR_INVALID_ARG_VALUE, ERR_INVALID_RETURN_VALUE = _require$codes.ERR_INVALID_RETURN_VALUE, ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS;
var AssertionError = require('./internal/assert/assertion_error');
var _require2 = require('util/'), inspect = _require2.inspect;
var _require$types = require('util/').types, isPromise = _require$types.isPromise, isRegExp = _require$types.isRegExp;
var objectAssign = Object.assign ? Object.assign : require('es6-object-assign').assign;
var objectIs = Object.is ? Object.is : require('object-is');
var errorCache = new Map();
var isDeepEqual;
var isDeepStrictEqual;
var parseExpressionAt;
var findNodeAround;
var decoder;
function lazyLoadComparison() {
    var comparison = require('./internal/util/comparisons');
    isDeepEqual = comparison.isDeepEqual;
    isDeepStrictEqual = comparison.isDeepStrictEqual;
} // Escape control characters but not \n and \t to keep the line breaks and
// indentation intact.
// eslint-disable-next-line no-control-regex
var escapeSequencesRegExp = /[\x00-\x08\x0b\x0c\x0e-\x1f]/g;
var meta = [
    "\\u0000",
    "\\u0001",
    "\\u0002",
    "\\u0003",
    "\\u0004",
    "\\u0005",
    "\\u0006",
    "\\u0007",
    '\\b',
    '',
    '',
    "\\u000b",
    '\\f',
    '',
    "\\u000e",
    "\\u000f",
    "\\u0010",
    "\\u0011",
    "\\u0012",
    "\\u0013",
    "\\u0014",
    "\\u0015",
    "\\u0016",
    "\\u0017",
    "\\u0018",
    "\\u0019",
    "\\u001a",
    "\\u001b",
    "\\u001c",
    "\\u001d",
    "\\u001e",
    "\\u001f"
];
var escapeFn = function escapeFn(str) {
    return meta[str.charCodeAt(0)];
};
var warned = false; // The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.
var assert = module.exports = ok;
var NO_EXCEPTION_SENTINEL = {
}; // All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided. All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.
function innerFail(obj) {
    if (obj.message instanceof Error) throw obj.message;
    throw new AssertionError(obj);
}
function fail(actual, expected, message, operator, stackStartFn) {
    var argsLen = arguments.length;
    var internalMessage;
    if (argsLen === 0) internalMessage = 'Failed';
    else if (argsLen === 1) {
        message = actual;
        actual = undefined;
    } else {
        if (warned === false) {
            warned = true;
            var warn = process.emitWarning ? process.emitWarning : console.warn.bind(console);
            warn("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.", 'DeprecationWarning', 'DEP0094');
        }
        if (argsLen === 2) operator = '!=';
    }
    if (message instanceof Error) throw message;
    var errArgs = {
        actual: actual,
        expected: expected,
        operator: operator === undefined ? 'fail' : operator,
        stackStartFn: stackStartFn || fail
    };
    if (message !== undefined) errArgs.message = message;
    var err = new AssertionError(errArgs);
    if (internalMessage) {
        err.message = internalMessage;
        err.generatedMessage = true;
    }
    throw err;
}
assert.fail = fail; // The AssertionError is defined in internal/error.
assert.AssertionError = AssertionError;
function innerOk(fn, argLen, value, message) {
    if (!value) {
        var generatedMessage = false;
        if (argLen === 0) {
            generatedMessage = true;
            message = 'No value argument passed to `assert.ok()`';
        } else if (message instanceof Error) throw message;
        var err = new AssertionError({
            actual: value,
            expected: true,
            message: message,
            operator: '==',
            stackStartFn: fn
        });
        err.generatedMessage = generatedMessage;
        throw err;
    }
} // Pure assertion tests whether a value is truthy, as determined
// by !!value.
function ok() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    innerOk.apply(void 0, [
        ok,
        args.length
    ].concat(args));
}
assert.ok = ok; // The equality assertion tests shallow, coercive equality with ==.
/* eslint-disable no-restricted-properties */ assert.equal = function equal(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS('actual', 'expected');
     // eslint-disable-next-line eqeqeq
    if (actual != expected) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: '==',
        stackStartFn: equal
    });
}; // The non-equality assertion tests for whether two objects are not
// equal with !=.
assert.notEqual = function notEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS('actual', 'expected');
     // eslint-disable-next-line eqeqeq
    if (actual == expected) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: '!=',
        stackStartFn: notEqual
    });
}; // The equivalence assertion tests a deep equality relation.
assert.deepEqual = function deepEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS('actual', 'expected');
    if (isDeepEqual === undefined) lazyLoadComparison();
    if (!isDeepEqual(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: 'deepEqual',
        stackStartFn: deepEqual
    });
}; // The non-equivalence assertion tests for any deep inequality.
assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS('actual', 'expected');
    if (isDeepEqual === undefined) lazyLoadComparison();
    if (isDeepEqual(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: 'notDeepEqual',
        stackStartFn: notDeepEqual
    });
};
/* eslint-enable */ assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS('actual', 'expected');
    if (isDeepEqual === undefined) lazyLoadComparison();
    if (!isDeepStrictEqual(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: 'deepStrictEqual',
        stackStartFn: deepStrictEqual
    });
};
assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS('actual', 'expected');
    if (isDeepEqual === undefined) lazyLoadComparison();
    if (isDeepStrictEqual(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: 'notDeepStrictEqual',
        stackStartFn: notDeepStrictEqual
    });
}
assert.strictEqual = function strictEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS('actual', 'expected');
    if (!objectIs(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: 'strictEqual',
        stackStartFn: strictEqual
    });
};
assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS('actual', 'expected');
    if (objectIs(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: 'notStrictEqual',
        stackStartFn: notStrictEqual
    });
};
var Comparison1 = function Comparison(obj, keys, actual) {
    var _this = this;
    _classCallCheck(this, Comparison);
    keys.forEach(function(key) {
        if (key in obj) {
            if (actual !== undefined && typeof actual[key] === 'string' && isRegExp(obj[key]) && obj[key].test(actual[key])) _this[key] = actual[key];
            else _this[key] = obj[key];
        }
    });
};
function compareExceptionKey(actual, expected, key, message, keys, fn) {
    if (!(key in actual) || !isDeepStrictEqual(actual[key], expected[key])) {
        if (!message) {
            // Create placeholder objects to create a nice output.
            var a = new Comparison1(actual, keys);
            var b = new Comparison1(expected, keys, actual);
            var err = new AssertionError({
                actual: a,
                expected: b,
                operator: 'deepStrictEqual',
                stackStartFn: fn
            });
            err.actual = actual;
            err.expected = expected;
            err.operator = fn.name;
            throw err;
        }
        innerFail({
            actual: actual,
            expected: expected,
            message: message,
            operator: fn.name,
            stackStartFn: fn
        });
    }
}
function expectedException(actual, expected, msg, fn) {
    if (typeof expected !== 'function') {
        if (isRegExp(expected)) return expected.test(actual); // assert.doesNotThrow does not accept objects.
        if (arguments.length === 2) throw new ERR_INVALID_ARG_TYPE('expected', [
            'Function',
            'RegExp'
        ], expected);
         // Handle primitives properly.
        if (_typeof(actual) !== 'object' || actual === null) {
            var err = new AssertionError({
                actual: actual,
                expected: expected,
                message: msg,
                operator: 'deepStrictEqual',
                stackStartFn: fn
            });
            err.operator = fn.name;
            throw err;
        }
        var keys = Object.keys(expected); // Special handle errors to make sure the name and the message are compared
        // as well.
        if (expected instanceof Error) keys.push('name', 'message');
        else if (keys.length === 0) throw new ERR_INVALID_ARG_VALUE('error', expected, 'may not be an empty object');
        if (isDeepEqual === undefined) lazyLoadComparison();
        keys.forEach(function(key) {
            if (typeof actual[key] === 'string' && isRegExp(expected[key]) && expected[key].test(actual[key])) return;
            compareExceptionKey(actual, expected, key, msg, keys, fn);
        });
        return true;
    } // Guard instanceof against arrow functions as they don't have a prototype.
    if (expected.prototype !== undefined && actual instanceof expected) return true;
    if (Error.isPrototypeOf(expected)) return false;
    return expected.call({
    }, actual) === true;
}
function getActual(fn) {
    if (typeof fn !== 'function') throw new ERR_INVALID_ARG_TYPE('fn', 'Function', fn);
    try {
        fn();
    } catch (e) {
        return e;
    }
    return NO_EXCEPTION_SENTINEL;
}
function checkIsPromise(obj) {
    // Accept native ES6 promises and promises that are implemented in a similar
    // way. Do not accept thenables that use a function as `obj` and that have no
    // `catch` handler.
    // TODO: thenables are checked up until they have the correct methods,
    // but according to documentation, the `then` method should receive
    // the `fulfill` and `reject` arguments as well or it may be never resolved.
    return isPromise(obj) || obj !== null && _typeof(obj) === 'object' && typeof obj.then === 'function' && typeof obj.catch === 'function';
}
function waitForActual(promiseFn) {
    return Promise.resolve().then(function() {
        var resultPromise;
        if (typeof promiseFn === 'function') {
            // Return a rejected promise if `promiseFn` throws synchronously.
            resultPromise = promiseFn(); // Fail in case no promise is returned.
            if (!checkIsPromise(resultPromise)) throw new ERR_INVALID_RETURN_VALUE('instance of Promise', 'promiseFn', resultPromise);
        } else if (checkIsPromise(promiseFn)) resultPromise = promiseFn;
        else throw new ERR_INVALID_ARG_TYPE('promiseFn', [
            'Function',
            'Promise'
        ], promiseFn);
        return Promise.resolve().then(function() {
            return resultPromise;
        }).then(function() {
            return NO_EXCEPTION_SENTINEL;
        }).catch(function(e) {
            return e;
        });
    });
}
function expectsError(stackStartFn, actual, error, message) {
    if (typeof error === 'string') {
        if (arguments.length === 4) throw new ERR_INVALID_ARG_TYPE('error', [
            'Object',
            'Error',
            'Function',
            'RegExp'
        ], error);
        if (_typeof(actual) === 'object' && actual !== null) {
            if (actual.message === error) throw new ERR_AMBIGUOUS_ARGUMENT('error/message', "The error message \"".concat(actual.message, "\" is identical to the message."));
        } else if (actual === error) throw new ERR_AMBIGUOUS_ARGUMENT('error/message', "The error \"".concat(actual, "\" is identical to the message."));
        message = error;
        error = undefined;
    } else if (error != null && _typeof(error) !== 'object' && typeof error !== 'function') throw new ERR_INVALID_ARG_TYPE('error', [
        'Object',
        'Error',
        'Function',
        'RegExp'
    ], error);
    if (actual === NO_EXCEPTION_SENTINEL) {
        var details = '';
        if (error && error.name) details += " (".concat(error.name, ")");
        details += message ? ": ".concat(message) : '.';
        var fnType = stackStartFn.name === 'rejects' ? 'rejection' : 'exception';
        innerFail({
            actual: undefined,
            expected: error,
            operator: stackStartFn.name,
            message: "Missing expected ".concat(fnType).concat(details),
            stackStartFn: stackStartFn
        });
    }
    if (error && !expectedException(actual, error, message, stackStartFn)) throw actual;
}
function expectsNoError(stackStartFn, actual, error, message) {
    if (actual === NO_EXCEPTION_SENTINEL) return;
    if (typeof error === 'string') {
        message = error;
        error = undefined;
    }
    if (!error || expectedException(actual, error)) {
        var details = message ? ": ".concat(message) : '.';
        var fnType = stackStartFn.name === 'doesNotReject' ? 'rejection' : 'exception';
        innerFail({
            actual: actual,
            expected: error,
            operator: stackStartFn.name,
            message: "Got unwanted ".concat(fnType).concat(details, "\n") + "Actual message: \"".concat(actual && actual.message, "\""),
            stackStartFn: stackStartFn
        });
    }
    throw actual;
}
assert.throws = function throws(promiseFn) {
    for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)args[_key2 - 1] = arguments[_key2];
    expectsError.apply(void 0, [
        throws,
        getActual(promiseFn)
    ].concat(args));
};
assert.rejects = function rejects(promiseFn) {
    for(var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++)args[_key3 - 1] = arguments[_key3];
    return waitForActual(promiseFn).then(function(result) {
        return expectsError.apply(void 0, [
            rejects,
            result
        ].concat(args));
    });
};
assert.doesNotThrow = function doesNotThrow(fn) {
    for(var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++)args[_key4 - 1] = arguments[_key4];
    expectsNoError.apply(void 0, [
        doesNotThrow,
        getActual(fn)
    ].concat(args));
};
assert.doesNotReject = function doesNotReject(fn) {
    for(var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++)args[_key5 - 1] = arguments[_key5];
    return waitForActual(fn).then(function(result) {
        return expectsNoError.apply(void 0, [
            doesNotReject,
            result
        ].concat(args));
    });
};
assert.ifError = function ifError(err) {
    if (err !== null && err !== undefined) {
        var message = 'ifError got unwanted exception: ';
        if (_typeof(err) === 'object' && typeof err.message === 'string') {
            if (err.message.length === 0 && err.constructor) message += err.constructor.name;
            else message += err.message;
        } else message += inspect(err);
        var newErr = new AssertionError({
            actual: err,
            expected: null,
            operator: 'ifError',
            message: message,
            stackStartFn: ifError
        }); // Make sure we actually have a stack trace!
        var origStack = err.stack;
        if (typeof origStack === 'string') {
            // This will remove any duplicated frames from the error frames taken
            // from within `ifError` and add the original error frames to the newly
            // created ones.
            var tmp2 = origStack.split('\n');
            tmp2.shift(); // Filter all frames existing in err.stack.
            var tmp1 = newErr.stack.split('\n');
            for(var i = 0; i < tmp2.length; i++){
                // Find the first occurrence of the frame.
                var pos = tmp1.indexOf(tmp2[i]);
                if (pos !== -1) {
                    // Only keep new frames.
                    tmp1 = tmp1.slice(0, pos);
                    break;
                }
            }
            newErr.stack = "".concat(tmp1.join('\n'), "\n").concat(tmp2.join('\n'));
        }
        throw newErr;
    }
}; // Expose a strict only variant of assert
function strict() {
    for(var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++)args[_key6] = arguments[_key6];
    innerOk.apply(void 0, [
        strict,
        args.length
    ].concat(args));
}
assert.strict = objectAssign(strict, assert, {
    equal: assert.strictEqual,
    deepEqual: assert.deepStrictEqual,
    notEqual: assert.notStrictEqual,
    notDeepEqual: assert.notDeepStrictEqual
});
assert.strict.strict = assert.strict;

},{"process":"lDnB8","./internal/errors":"3U3cv","./internal/assert/assertion_error":"l475I","util/":"7sOXW","es6-object-assign":"fc6lQ","object-is":"V34yE","./internal/util/comparisons":"958Fl"}],"3U3cv":[function(require,module,exports) {
// Currently in sync with Node.js lib/internal/errors.js
// https://github.com/nodejs/node/commit/3b044962c48fe313905877a96b5d0894a5404f6f
/* eslint node-core/documented-errors: "error" */ /* eslint node-core/alphabetize-errors: "error" */ /* eslint node-core/prefer-util-format-errors: "error" */ 'use strict'; // The whole point behind this internal module is to allow Node.js to no
// longer be forced to treat every error message change as a semver-major
// change. The NodeError classes here all expose a `code` property whose
// value statically and permanently identifies the error. While the error
// message may change, the code should not.
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
}
var codes = {
}; // Lazy loaded
var assert;
var util;
function createErrorType(code, message, Base) {
    if (!Base) Base = Error;
    function getMessage(arg1, arg2, arg3) {
        if (typeof message === 'string') return message;
        else return message(arg1, arg2, arg3);
    }
    var NodeError1 = /*#__PURE__*/ function(_Base) {
        _inherits(NodeError, _Base);
        function NodeError(arg1, arg2, arg3) {
            var _this;
            _classCallCheck(this, NodeError);
            _this = _possibleConstructorReturn(this, _getPrototypeOf(NodeError).call(this, getMessage(arg1, arg2, arg3)));
            _this.code = code;
            return _this;
        }
        return NodeError;
    }(Base);
    codes[code] = NodeError1;
} // https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js
function oneOf(expected, thing) {
    if (Array.isArray(expected)) {
        var len = expected.length;
        expected = expected.map(function(i) {
            return String(i);
        });
        if (len > 2) return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(', '), ", or ") + expected[len - 1];
        else if (len === 2) return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
        else return "of ".concat(thing, " ").concat(expected[0]);
    } else return "of ".concat(thing, " ").concat(String(expected));
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
function startsWith(str, search, pos) {
    return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function endsWith(str, search, this_len) {
    if (this_len === undefined || this_len > str.length) this_len = str.length;
    return str.substring(this_len - search.length, this_len) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
function includes(str, search, start) {
    if (typeof start !== 'number') start = 0;
    if (start + search.length > str.length) return false;
    else return str.indexOf(search, start) !== -1;
}
createErrorType('ERR_AMBIGUOUS_ARGUMENT', 'The "%s" argument is ambiguous. %s', TypeError);
createErrorType('ERR_INVALID_ARG_TYPE', function(name, expected, actual) {
    if (assert === undefined) assert = require('../assert');
    assert(typeof name === 'string', "'name' must be a string"); // determiner: 'must be' or 'must not be'
    var determiner;
    if (typeof expected === 'string' && startsWith(expected, 'not ')) {
        determiner = 'must not be';
        expected = expected.replace(/^not /, '');
    } else determiner = 'must be';
    var msg;
    if (endsWith(name, ' argument')) // For cases like 'first argument'
    msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
    else {
        var type = includes(name, '.') ? 'property' : 'argument';
        msg = "The \"".concat(name, "\" ").concat(type, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
    } // TODO(BridgeAR): Improve the output by showing `null` and similar.
    msg += ". Received type ".concat(_typeof(actual));
    return msg;
}, TypeError);
createErrorType('ERR_INVALID_ARG_VALUE', function(name, value) {
    var reason = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'is invalid';
    if (util === undefined) util = require('util/');
    var inspected = util.inspect(value);
    if (inspected.length > 128) inspected = "".concat(inspected.slice(0, 128), "...");
    return "The argument '".concat(name, "' ").concat(reason, ". Received ").concat(inspected);
}, TypeError, RangeError);
createErrorType('ERR_INVALID_RETURN_VALUE', function(input, name, value) {
    var type;
    if (value && value.constructor && value.constructor.name) type = "instance of ".concat(value.constructor.name);
    else type = "type ".concat(_typeof(value));
    return "Expected ".concat(input, " to be returned from the \"").concat(name, "\"") + " function but got ".concat(type, ".");
}, TypeError);
createErrorType('ERR_MISSING_ARGS', function() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    if (assert === undefined) assert = require('../assert');
    assert(args.length > 0, 'At least one arg needs to be specified');
    var msg = 'The ';
    var len = args.length;
    args = args.map(function(a) {
        return "\"".concat(a, "\"");
    });
    switch(len){
        case 1:
            msg += "".concat(args[0], " argument");
            break;
        case 2:
            msg += "".concat(args[0], " and ").concat(args[1], " arguments");
            break;
        default:
            msg += args.slice(0, len - 1).join(', ');
            msg += ", and ".concat(args[len - 1], " arguments");
            break;
    }
    return "".concat(msg, " must be specified");
}, TypeError);
module.exports.codes = codes;

},{"../assert":"ilVUv","util/":"7sOXW"}],"l475I":[function(require,module,exports) {
var process = require("process");
// Currently in sync with Node.js lib/internal/assert/assertion_error.js
// https://github.com/nodejs/node/commit/0817840f775032169ddd70c85ac059f18ffcc81c
'use strict';
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _wrapNativeSuper(Class1) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class1);
}
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent1, args1, Class2) {
    if (isNativeReflectConstruct()) _construct = Reflect.construct;
    else _construct = function _construct(Parent, args, Class) {
        var a = [
            null
        ];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
    };
    return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _setPrototypeOf(o1, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o1, p1);
}
function _getPrototypeOf(o2) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o2);
}
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
var _require = require('util/'), inspect = _require.inspect;
var _require2 = require('../errors'), ERR_INVALID_ARG_TYPE = _require2.codes.ERR_INVALID_ARG_TYPE; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function endsWith(str, search, this_len) {
    if (this_len === undefined || this_len > str.length) this_len = str.length;
    return str.substring(this_len - search.length, this_len) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
function repeat(str, count) {
    count = Math.floor(count);
    if (str.length == 0 || count == 0) return '';
    var maxCount = str.length * count;
    count = Math.floor(Math.log(count) / Math.log(2));
    while(count){
        str += str;
        count--;
    }
    str += str.substring(0, maxCount - str.length);
    return str;
}
var blue = '';
var green = '';
var red = '';
var white = '';
var kReadableOperator = {
    deepStrictEqual: 'Expected values to be strictly deep-equal:',
    strictEqual: 'Expected values to be strictly equal:',
    strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
    deepEqual: 'Expected values to be loosely deep-equal:',
    equal: 'Expected values to be loosely equal:',
    notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
    notStrictEqual: 'Expected "actual" to be strictly unequal to:',
    notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
    notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
    notEqual: 'Expected "actual" to be loosely unequal to:',
    notIdentical: 'Values identical but not reference-equal:'
}; // Comparing short primitives should just show === / !== instead of using the
// diff.
var kMaxShortLength = 10;
function copyError(source) {
    var keys = Object.keys(source);
    var target = Object.create(Object.getPrototypeOf(source));
    keys.forEach(function(key) {
        target[key] = source[key];
    });
    Object.defineProperty(target, 'message', {
        value: source.message
    });
    return target;
}
function inspectValue(val) {
    // The util.inspect default values could be changed. This makes sure the
    // error messages contain the necessary information nevertheless.
    return inspect(val, {
        compact: false,
        customInspect: false,
        depth: 1000,
        maxArrayLength: Infinity,
        // Assert compares only enumerable properties (with a few exceptions).
        showHidden: false,
        // Having a long line as error is better than wrapping the line for
        // comparison for now.
        // TODO(BridgeAR): `breakLength` should be limited as soon as soon as we
        // have meta information about the inspected properties (i.e., know where
        // in what line the property starts and ends).
        breakLength: Infinity,
        // Assert does not detect proxies currently.
        showProxy: false,
        sorted: true,
        // Inspect getters as we also check them when comparing entries.
        getters: true
    });
}
function createErrDiff(actual, expected, operator) {
    var other = '';
    var res = '';
    var lastPos = 0;
    var end = '';
    var skipped = false;
    var actualInspected = inspectValue(actual);
    var actualLines = actualInspected.split('\n');
    var expectedLines = inspectValue(expected).split('\n');
    var i = 0;
    var indicator = ''; // In case both values are objects explicitly mark them as not reference equal
    // for the `strictEqual` operator.
    if (operator === 'strictEqual' && _typeof(actual) === 'object' && _typeof(expected) === 'object' && actual !== null && expected !== null) operator = 'strictEqualObject';
     // If "actual" and "expected" fit on a single line and they are not strictly
    // equal, check further special handling.
    if (actualLines.length === 1 && expectedLines.length === 1 && actualLines[0] !== expectedLines[0]) {
        var inputLength = actualLines[0].length + expectedLines[0].length; // If the character length of "actual" and "expected" together is less than
        // kMaxShortLength and if neither is an object and at least one of them is
        // not `zero`, use the strict equal comparison to visualize the output.
        if (inputLength <= kMaxShortLength) {
            if ((_typeof(actual) !== 'object' || actual === null) && (_typeof(expected) !== 'object' || expected === null) && (actual !== 0 || expected !== 0)) // -0 === +0
            return "".concat(kReadableOperator[operator], "\n\n") + "".concat(actualLines[0], " !== ").concat(expectedLines[0], "\n");
        } else if (operator !== 'strictEqualObject') {
            // If the stderr is a tty and the input length is lower than the current
            // columns per line, add a mismatch indicator below the output. If it is
            // not a tty, use a default value of 80 characters.
            var maxLength = process.stderr && process.stderr.isTTY ? process.stderr.columns : 80;
            if (inputLength < maxLength) {
                while(actualLines[0][i] === expectedLines[0][i])i++;
                 // Ignore the first characters.
                if (i > 2) {
                    // Add position indicator for the first mismatch in case it is a
                    // single line and the input length is less than the column length.
                    indicator = "\n  ".concat(repeat(' ', i), "^");
                    i = 0;
                }
            }
        }
    } // Remove all ending lines that match (this optimizes the output for
    // readability by reducing the number of total changed lines).
    var a = actualLines[actualLines.length - 1];
    var b = expectedLines[expectedLines.length - 1];
    while(a === b){
        if (i++ < 2) end = "\n  ".concat(a).concat(end);
        else other = a;
        actualLines.pop();
        expectedLines.pop();
        if (actualLines.length === 0 || expectedLines.length === 0) break;
        a = actualLines[actualLines.length - 1];
        b = expectedLines[expectedLines.length - 1];
    }
    var maxLines = Math.max(actualLines.length, expectedLines.length); // Strict equal with identical objects that are not identical by reference.
    // E.g., assert.deepStrictEqual({ a: Symbol() }, { a: Symbol() })
    if (maxLines === 0) {
        // We have to get the result again. The lines were all removed before.
        var _actualLines = actualInspected.split('\n'); // Only remove lines in case it makes sense to collapse those.
        // TODO: Accept env to always show the full error.
        if (_actualLines.length > 30) {
            _actualLines[26] = "".concat(blue, "...").concat(white);
            while(_actualLines.length > 27)_actualLines.pop();
        }
        return "".concat(kReadableOperator.notIdentical, "\n\n").concat(_actualLines.join('\n'), "\n");
    }
    if (i > 3) {
        end = "\n".concat(blue, "...").concat(white).concat(end);
        skipped = true;
    }
    if (other !== '') {
        end = "\n  ".concat(other).concat(end);
        other = '';
    }
    var printedLines = 0;
    var msg = kReadableOperator[operator] + "\n".concat(green, "+ actual").concat(white, " ").concat(red, "- expected").concat(white);
    var skippedMsg = " ".concat(blue, "...").concat(white, " Lines skipped");
    for(i = 0; i < maxLines; i++){
        // Only extra expected lines exist
        var cur = i - lastPos;
        if (actualLines.length < i + 1) {
            // If the last diverging line is more than one line above and the
            // current line is at least line three, add some of the former lines and
            // also add dots to indicate skipped entries.
            if (cur > 1 && i > 2) {
                if (cur > 4) {
                    res += "\n".concat(blue, "...").concat(white);
                    skipped = true;
                } else if (cur > 3) {
                    res += "\n  ".concat(expectedLines[i - 2]);
                    printedLines++;
                }
                res += "\n  ".concat(expectedLines[i - 1]);
                printedLines++;
            } // Mark the current line as the last diverging one.
            lastPos = i; // Add the expected line to the cache.
            other += "\n".concat(red, "-").concat(white, " ").concat(expectedLines[i]);
            printedLines++; // Only extra actual lines exist
        } else if (expectedLines.length < i + 1) {
            // If the last diverging line is more than one line above and the
            // current line is at least line three, add some of the former lines and
            // also add dots to indicate skipped entries.
            if (cur > 1 && i > 2) {
                if (cur > 4) {
                    res += "\n".concat(blue, "...").concat(white);
                    skipped = true;
                } else if (cur > 3) {
                    res += "\n  ".concat(actualLines[i - 2]);
                    printedLines++;
                }
                res += "\n  ".concat(actualLines[i - 1]);
                printedLines++;
            } // Mark the current line as the last diverging one.
            lastPos = i; // Add the actual line to the result.
            res += "\n".concat(green, "+").concat(white, " ").concat(actualLines[i]);
            printedLines++; // Lines diverge
        } else {
            var expectedLine = expectedLines[i];
            var actualLine = actualLines[i]; // If the lines diverge, specifically check for lines that only diverge by
            // a trailing comma. In that case it is actually identical and we should
            // mark it as such.
            var divergingLines = actualLine !== expectedLine && (!endsWith(actualLine, ',') || actualLine.slice(0, -1) !== expectedLine); // If the expected line has a trailing comma but is otherwise identical,
            // add a comma at the end of the actual line. Otherwise the output could
            // look weird as in:
            //
            //   [
            //     1         // No comma at the end!
            // +   2
            //   ]
            //
            if (divergingLines && endsWith(expectedLine, ',') && expectedLine.slice(0, -1) === actualLine) {
                divergingLines = false;
                actualLine += ',';
            }
            if (divergingLines) {
                // If the last diverging line is more than one line above and the
                // current line is at least line three, add some of the former lines and
                // also add dots to indicate skipped entries.
                if (cur > 1 && i > 2) {
                    if (cur > 4) {
                        res += "\n".concat(blue, "...").concat(white);
                        skipped = true;
                    } else if (cur > 3) {
                        res += "\n  ".concat(actualLines[i - 2]);
                        printedLines++;
                    }
                    res += "\n  ".concat(actualLines[i - 1]);
                    printedLines++;
                } // Mark the current line as the last diverging one.
                lastPos = i; // Add the actual line to the result and cache the expected diverging
                // line so consecutive diverging lines show up as +++--- and not +-+-+-.
                res += "\n".concat(green, "+").concat(white, " ").concat(actualLine);
                other += "\n".concat(red, "-").concat(white, " ").concat(expectedLine);
                printedLines += 2; // Lines are identical
            } else {
                // Add all cached information to the result before adding other things
                // and reset the cache.
                res += other;
                other = ''; // If the last diverging line is exactly one line above or if it is the
                // very first line, add the line to the result.
                if (cur === 1 || i === 0) {
                    res += "\n  ".concat(actualLine);
                    printedLines++;
                }
            }
        } // Inspected object to big (Show ~20 rows max)
        if (printedLines > 20 && i < maxLines - 2) return "".concat(msg).concat(skippedMsg, "\n").concat(res, "\n").concat(blue, "...").concat(white).concat(other, "\n") + "".concat(blue, "...").concat(white);
    }
    return "".concat(msg).concat(skipped ? skippedMsg : '', "\n").concat(res).concat(other).concat(end).concat(indicator);
}
var AssertionError1 = /*#__PURE__*/ function(_Error) {
    _inherits(AssertionError, _Error);
    function AssertionError(options) {
        var _this;
        _classCallCheck(this, AssertionError);
        if (_typeof(options) !== 'object' || options === null) throw new ERR_INVALID_ARG_TYPE('options', 'Object', options);
        var message = options.message, operator = options.operator, stackStartFn = options.stackStartFn;
        var actual = options.actual, expected = options.expected;
        var limit = Error.stackTraceLimit;
        Error.stackTraceLimit = 0;
        if (message != null) _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, String(message)));
        else {
            if (process.stderr && process.stderr.isTTY) {
                // Reset on each call to make sure we handle dynamically set environment
                // variables correct.
                if (process.stderr && process.stderr.getColorDepth && process.stderr.getColorDepth() !== 1) {
                    blue = "\x1B[34m";
                    green = "\x1B[32m";
                    white = "\x1B[39m";
                    red = "\x1B[31m";
                } else {
                    blue = '';
                    green = '';
                    white = '';
                    red = '';
                }
            } // Prevent the error stack from being visible by duplicating the error
            // in a very close way to the original in case both sides are actually
            // instances of Error.
            if (_typeof(actual) === 'object' && actual !== null && _typeof(expected) === 'object' && expected !== null && 'stack' in actual && actual instanceof Error && 'stack' in expected && expected instanceof Error) {
                actual = copyError(actual);
                expected = copyError(expected);
            }
            if (operator === 'deepStrictEqual' || operator === 'strictEqual') _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, createErrDiff(actual, expected, operator)));
            else if (operator === 'notDeepStrictEqual' || operator === 'notStrictEqual') {
                // In case the objects are equal but the operator requires unequal, show
                // the first object and say A equals B
                var base = kReadableOperator[operator];
                var res = inspectValue(actual).split('\n'); // In case "actual" is an object, it should not be reference equal.
                if (operator === 'notStrictEqual' && _typeof(actual) === 'object' && actual !== null) base = kReadableOperator.notStrictEqualObject;
                 // Only remove lines in case it makes sense to collapse those.
                // TODO: Accept env to always show the full error.
                if (res.length > 30) {
                    res[26] = "".concat(blue, "...").concat(white);
                    while(res.length > 27)res.pop();
                } // Only print a single input.
                if (res.length === 1) _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, "".concat(base, " ").concat(res[0])));
                else _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, "".concat(base, "\n\n").concat(res.join('\n'), "\n")));
            } else {
                var _res = inspectValue(actual);
                var other = '';
                var knownOperators = kReadableOperator[operator];
                if (operator === 'notDeepEqual' || operator === 'notEqual') {
                    _res = "".concat(kReadableOperator[operator], "\n\n").concat(_res);
                    if (_res.length > 1024) _res = "".concat(_res.slice(0, 1021), "...");
                } else {
                    other = "".concat(inspectValue(expected));
                    if (_res.length > 512) _res = "".concat(_res.slice(0, 509), "...");
                    if (other.length > 512) other = "".concat(other.slice(0, 509), "...");
                    if (operator === 'deepEqual' || operator === 'equal') _res = "".concat(knownOperators, "\n\n").concat(_res, "\n\nshould equal\n\n");
                    else other = " ".concat(operator, " ").concat(other);
                }
                _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, "".concat(_res).concat(other)));
            }
        }
        Error.stackTraceLimit = limit;
        _this.generatedMessage = !message;
        Object.defineProperty(_assertThisInitialized(_this), 'name', {
            value: 'AssertionError [ERR_ASSERTION]',
            enumerable: false,
            writable: true,
            configurable: true
        });
        _this.code = 'ERR_ASSERTION';
        _this.actual = actual;
        _this.expected = expected;
        _this.operator = operator;
        if (Error.captureStackTrace) // eslint-disable-next-line no-restricted-syntax
        Error.captureStackTrace(_assertThisInitialized(_this), stackStartFn);
         // Create error message including the error code in the name.
        _this.stack; // Reset the name.
        _this.name = 'AssertionError';
        return _possibleConstructorReturn(_this);
    }
    _createClass(AssertionError, [
        {
            key: "toString",
            value: function toString() {
                return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message);
            }
        },
        {
            key: inspect.custom,
            value: function value(recurseTimes, ctx) {
                // This limits the `actual` and `expected` property default inspection to
                // the minimum depth. Otherwise those values would be too verbose compared
                // to the actual error message which contains a combined view of these two
                // input values.
                return inspect(this, _objectSpread({
                }, ctx, {
                    customInspect: false,
                    depth: 0
                }));
            }
        }
    ]);
    return AssertionError;
}(_wrapNativeSuper(Error));
module.exports = AssertionError1;

},{"process":"lDnB8","util/":"7sOXW","../errors":"3U3cv"}],"fc6lQ":[function(require,module,exports) {
/**
 * Code refactored from Mozilla Developer Network:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */ 'use strict';
function assign(target, firstSource) {
    if (target === undefined || target === null) throw new TypeError('Cannot convert first argument to object');
    var to = Object(target);
    for(var i = 1; i < arguments.length; i++){
        var nextSource = arguments[i];
        if (nextSource === undefined || nextSource === null) continue;
        var keysArray = Object.keys(Object(nextSource));
        for(var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++){
            var nextKey = keysArray[nextIndex];
            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
            if (desc !== undefined && desc.enumerable) to[nextKey] = nextSource[nextKey];
        }
    }
    return to;
}
function polyfill() {
    if (!Object.assign) Object.defineProperty(Object, 'assign', {
        enumerable: false,
        configurable: true,
        writable: true,
        value: assign
    });
}
module.exports = {
    assign: assign,
    polyfill: polyfill
};

},{}],"V34yE":[function(require,module,exports) {
'use strict';
var define = require('define-properties');
var callBind = require('call-bind');
var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var shim = require('./shim');
var polyfill = callBind(getPolyfill(), Object);
define(polyfill, {
    getPolyfill: getPolyfill,
    implementation: implementation,
    shim: shim
});
module.exports = polyfill;

},{"define-properties":"arjVC","call-bind":"bPDkM","./implementation":"jrTsN","./polyfill":"lK2ec","./shim":"5RYmr"}],"arjVC":[function(require,module,exports) {
'use strict';
var keys = require('object-keys');
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';
var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;
var isFunction = function(fn) {
    return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};
var arePropertyDescriptorsSupported = function() {
    var obj = {
    };
    try {
        origDefineProperty(obj, 'x', {
            enumerable: false,
            value: obj
        });
        // eslint-disable-next-line no-unused-vars, no-restricted-syntax
        for(var _ in obj)return false;
        return obj.x === obj;
    } catch (e) {
        return false;
    }
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();
var defineProperty = function(object, name, value, predicate) {
    if (name in object && (!isFunction(predicate) || !predicate())) return;
    if (supportsDescriptors) origDefineProperty(object, name, {
        configurable: true,
        enumerable: false,
        value: value,
        writable: true
    });
    else object[name] = value;
};
var defineProperties = function(object, map) {
    var predicates = arguments.length > 2 ? arguments[2] : {
    };
    var props = keys(map);
    if (hasSymbols) props = concat.call(props, Object.getOwnPropertySymbols(map));
    for(var i = 0; i < props.length; i += 1)defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
};
defineProperties.supportsDescriptors = !!supportsDescriptors;
module.exports = defineProperties;

},{"object-keys":"6eM0B"}],"6eM0B":[function(require,module,exports) {
'use strict';
var slice = Array.prototype.slice;
var isArgs = require('./isArguments');
var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) {
    return origKeys(o);
} : require('./implementation');
var originalKeys = Object.keys;
keysShim.shim = function shimObjectKeys() {
    if (Object.keys) {
        var keysWorksWithArguments = function() {
            // Safari 5.0 bug
            var args = Object.keys(arguments);
            return args && args.length === arguments.length;
        }(1, 2);
        if (!keysWorksWithArguments) Object.keys = function keys(object) {
            if (isArgs(object)) return originalKeys(slice.call(object));
            return originalKeys(object);
        };
    } else Object.keys = keysShim;
    return Object.keys || keysShim;
};
module.exports = keysShim;

},{"./isArguments":"7W6XO","./implementation":"k0enN"}],"7W6XO":[function(require,module,exports) {
'use strict';
var toStr = Object.prototype.toString;
module.exports = function isArguments(value) {
    var str = toStr.call(value);
    var isArgs = str === '[object Arguments]';
    if (!isArgs) isArgs = str !== '[object Array]' && value !== null && typeof value === 'object' && typeof value.length === 'number' && value.length >= 0 && toStr.call(value.callee) === '[object Function]';
    return isArgs;
};

},{}],"k0enN":[function(require,module,exports) {
'use strict';
var keysShim;
if (!Object.keys) {
    // modified from https://github.com/es-shims/es5-shim
    var has = Object.prototype.hasOwnProperty;
    var toStr = Object.prototype.toString;
    var isArgs = require('./isArguments'); // eslint-disable-line global-require
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var hasDontEnumBug = !isEnumerable.call({
        toString: null
    }, 'toString');
    var hasProtoEnumBug = isEnumerable.call(function() {
    }, 'prototype');
    var dontEnums = [
        'toString',
        'toLocaleString',
        'valueOf',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'constructor'
    ];
    var equalsConstructorPrototype = function(o) {
        var ctor = o.constructor;
        return ctor && ctor.prototype === o;
    };
    var excludedKeys = {
        $applicationCache: true,
        $console: true,
        $external: true,
        $frame: true,
        $frameElement: true,
        $frames: true,
        $innerHeight: true,
        $innerWidth: true,
        $onmozfullscreenchange: true,
        $onmozfullscreenerror: true,
        $outerHeight: true,
        $outerWidth: true,
        $pageXOffset: true,
        $pageYOffset: true,
        $parent: true,
        $scrollLeft: true,
        $scrollTop: true,
        $scrollX: true,
        $scrollY: true,
        $self: true,
        $webkitIndexedDB: true,
        $webkitStorageInfo: true,
        $window: true
    };
    var hasAutomationEqualityBug = function() {
        /* global window */ if (typeof window === 'undefined') return false;
        for(var k in window)try {
            if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') try {
                equalsConstructorPrototype(window[k]);
            } catch (e) {
                return true;
            }
        } catch (e) {
            return true;
        }
        return false;
    }();
    var equalsConstructorPrototypeIfNotBuggy = function(o) {
        /* global window */ if (typeof window === 'undefined' || !hasAutomationEqualityBug) return equalsConstructorPrototype(o);
        try {
            return equalsConstructorPrototype(o);
        } catch (e) {
            return false;
        }
    };
    keysShim = function keys(object) {
        var isObject = object !== null && typeof object === 'object';
        var isFunction = toStr.call(object) === '[object Function]';
        var isArguments = isArgs(object);
        var isString = isObject && toStr.call(object) === '[object String]';
        var theKeys = [];
        if (!isObject && !isFunction && !isArguments) throw new TypeError('Object.keys called on a non-object');
        var skipProto = hasProtoEnumBug && isFunction;
        if (isString && object.length > 0 && !has.call(object, 0)) for(var i = 0; i < object.length; ++i)theKeys.push(String(i));
        if (isArguments && object.length > 0) for(var j = 0; j < object.length; ++j)theKeys.push(String(j));
        else {
            for(var name in object)if (!(skipProto && name === 'prototype') && has.call(object, name)) theKeys.push(String(name));
        }
        if (hasDontEnumBug) {
            var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
            for(var k = 0; k < dontEnums.length; ++k)if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) theKeys.push(dontEnums[k]);
        }
        return theKeys;
    };
}
module.exports = keysShim;

},{"./isArguments":"7W6XO"}],"jrTsN":[function(require,module,exports) {
'use strict';
var numberIsNaN = function(value) {
    return value !== value;
};
module.exports = function is(a, b) {
    if (a === 0 && b === 0) return 1 / a === 1 / b;
    if (a === b) return true;
    if (numberIsNaN(a) && numberIsNaN(b)) return true;
    return false;
};

},{}],"lK2ec":[function(require,module,exports) {
'use strict';
var implementation = require('./implementation');
module.exports = function getPolyfill() {
    return typeof Object.is === 'function' ? Object.is : implementation;
};

},{"./implementation":"jrTsN"}],"5RYmr":[function(require,module,exports) {
'use strict';
var getPolyfill = require('./polyfill');
var define = require('define-properties');
module.exports = function shimObjectIs() {
    var polyfill = getPolyfill();
    define(Object, {
        is: polyfill
    }, {
        is: function testObjectIs() {
            return Object.is !== polyfill;
        }
    });
    return polyfill;
};

},{"./polyfill":"lK2ec","define-properties":"arjVC"}],"958Fl":[function(require,module,exports) {
// Currently in sync with Node.js lib/internal/util/comparisons.js
// https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9
'use strict';
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
var regexFlagsSupported = /a/g.flags !== undefined;
var arrayFromSet = function arrayFromSet(set) {
    var array = [];
    set.forEach(function(value) {
        return array.push(value);
    });
    return array;
};
var arrayFromMap = function arrayFromMap(map) {
    var array = [];
    map.forEach(function(value, key) {
        return array.push([
            key,
            value
        ]);
    });
    return array;
};
var objectIs = Object.is ? Object.is : require('object-is');
var objectGetOwnPropertySymbols = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function() {
    return [];
};
var numberIsNaN = Number.isNaN ? Number.isNaN : require('is-nan');
function uncurryThis(f) {
    return f.call.bind(f);
}
var hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);
var propertyIsEnumerable = uncurryThis(Object.prototype.propertyIsEnumerable);
var objectToString = uncurryThis(Object.prototype.toString);
var _require$types = require('util/').types, isAnyArrayBuffer = _require$types.isAnyArrayBuffer, isArrayBufferView = _require$types.isArrayBufferView, isDate = _require$types.isDate, isMap = _require$types.isMap, isRegExp = _require$types.isRegExp, isSet = _require$types.isSet, isNativeError = _require$types.isNativeError, isBoxedPrimitive = _require$types.isBoxedPrimitive, isNumberObject = _require$types.isNumberObject, isStringObject = _require$types.isStringObject, isBooleanObject = _require$types.isBooleanObject, isBigIntObject = _require$types.isBigIntObject, isSymbolObject = _require$types.isSymbolObject, isFloat32Array = _require$types.isFloat32Array, isFloat64Array = _require$types.isFloat64Array;
function isNonIndex(key) {
    if (key.length === 0 || key.length > 10) return true;
    for(var i = 0; i < key.length; i++){
        var code = key.charCodeAt(i);
        if (code < 48 || code > 57) return true;
    } // The maximum size for an array is 2 ** 32 -1.
    return key.length === 10 && key >= Math.pow(2, 32);
}
function getOwnNonIndexProperties(value) {
    return Object.keys(value).filter(isNonIndex).concat(objectGetOwnPropertySymbols(value).filter(Object.prototype.propertyIsEnumerable.bind(value)));
} // Taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */ function compare(a, b) {
    if (a === b) return 0;
    var x = a.length;
    var y = b.length;
    for(var i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
}
var ONLY_ENUMERABLE = undefined;
var kStrict = true;
var kLoose = false;
var kNoIterator = 0;
var kIsArray = 1;
var kIsSet = 2;
var kIsMap = 3; // Check if they have the same source and flags
function areSimilarRegExps(a, b) {
    return regexFlagsSupported ? a.source === b.source && a.flags === b.flags : RegExp.prototype.toString.call(a) === RegExp.prototype.toString.call(b);
}
function areSimilarFloatArrays(a, b) {
    if (a.byteLength !== b.byteLength) return false;
    for(var offset = 0; offset < a.byteLength; offset++){
        if (a[offset] !== b[offset]) return false;
    }
    return true;
}
function areSimilarTypedArrays(a, b) {
    if (a.byteLength !== b.byteLength) return false;
    return compare(new Uint8Array(a.buffer, a.byteOffset, a.byteLength), new Uint8Array(b.buffer, b.byteOffset, b.byteLength)) === 0;
}
function areEqualArrayBuffers(buf1, buf2) {
    return buf1.byteLength === buf2.byteLength && compare(new Uint8Array(buf1), new Uint8Array(buf2)) === 0;
}
function isEqualBoxedPrimitive(val1, val2) {
    if (isNumberObject(val1)) return isNumberObject(val2) && objectIs(Number.prototype.valueOf.call(val1), Number.prototype.valueOf.call(val2));
    if (isStringObject(val1)) return isStringObject(val2) && String.prototype.valueOf.call(val1) === String.prototype.valueOf.call(val2);
    if (isBooleanObject(val1)) return isBooleanObject(val2) && Boolean.prototype.valueOf.call(val1) === Boolean.prototype.valueOf.call(val2);
    if (isBigIntObject(val1)) return isBigIntObject(val2) && BigInt.prototype.valueOf.call(val1) === BigInt.prototype.valueOf.call(val2);
    return isSymbolObject(val2) && Symbol.prototype.valueOf.call(val1) === Symbol.prototype.valueOf.call(val2);
} // Notes: Type tags are historical [[Class]] properties that can be set by
// FunctionTemplate::SetClassName() in C++ or Symbol.toStringTag in JS
// and retrieved using Object.prototype.toString.call(obj) in JS
// See https://tc39.github.io/ecma262/#sec-object.prototype.tostring
// for a list of tags pre-defined in the spec.
// There are some unspecified tags in the wild too (e.g. typed array tags).
// Since tags can be altered, they only serve fast failures
//
// Typed arrays and buffers are checked by comparing the content in their
// underlying ArrayBuffer. This optimization requires that it's
// reasonable to interpret their underlying memory in the same way,
// which is checked by comparing their type tags.
// (e.g. a Uint8Array and a Uint16Array with the same memory content
// could still be different because they will be interpreted differently).
//
// For strict comparison, objects should have
// a) The same built-in type tags
// b) The same prototypes.
function innerDeepEqual(val1, val2, strict, memos) {
    // All identical values are equivalent, as determined by ===.
    if (val1 === val2) {
        if (val1 !== 0) return true;
        return strict ? objectIs(val1, val2) : true;
    } // Check more closely if val1 and val2 are equal.
    if (strict) {
        if (_typeof(val1) !== 'object') return typeof val1 === 'number' && numberIsNaN(val1) && numberIsNaN(val2);
        if (_typeof(val2) !== 'object' || val1 === null || val2 === null) return false;
        if (Object.getPrototypeOf(val1) !== Object.getPrototypeOf(val2)) return false;
    } else {
        if (val1 === null || _typeof(val1) !== 'object') {
            if (val2 === null || _typeof(val2) !== 'object') // eslint-disable-next-line eqeqeq
            return val1 == val2;
            return false;
        }
        if (val2 === null || _typeof(val2) !== 'object') return false;
    }
    var val1Tag = objectToString(val1);
    var val2Tag = objectToString(val2);
    if (val1Tag !== val2Tag) return false;
    if (Array.isArray(val1)) {
        // Check for sparse arrays and general fast path
        if (val1.length !== val2.length) return false;
        var keys1 = getOwnNonIndexProperties(val1, ONLY_ENUMERABLE);
        var keys2 = getOwnNonIndexProperties(val2, ONLY_ENUMERABLE);
        if (keys1.length !== keys2.length) return false;
        return keyCheck(val1, val2, strict, memos, kIsArray, keys1);
    } // [browserify] This triggers on certain types in IE (Map/Set) so we don't
    // wan't to early return out of the rest of the checks. However we can check
    // if the second value is one of these values and the first isn't.
    if (val1Tag === '[object Object]') {
        // return keyCheck(val1, val2, strict, memos, kNoIterator);
        if (!isMap(val1) && isMap(val2) || !isSet(val1) && isSet(val2)) return false;
    }
    if (isDate(val1)) {
        if (!isDate(val2) || Date.prototype.getTime.call(val1) !== Date.prototype.getTime.call(val2)) return false;
    } else if (isRegExp(val1)) {
        if (!isRegExp(val2) || !areSimilarRegExps(val1, val2)) return false;
    } else if (isNativeError(val1) || val1 instanceof Error) {
        // Do not compare the stack as it might differ even though the error itself
        // is otherwise identical.
        if (val1.message !== val2.message || val1.name !== val2.name) return false;
    } else if (isArrayBufferView(val1)) {
        if (!strict && (isFloat32Array(val1) || isFloat64Array(val1))) {
            if (!areSimilarFloatArrays(val1, val2)) return false;
        } else if (!areSimilarTypedArrays(val1, val2)) return false;
         // Buffer.compare returns true, so val1.length === val2.length. If they both
        // only contain numeric keys, we don't need to exam further than checking
        // the symbols.
        var _keys = getOwnNonIndexProperties(val1, ONLY_ENUMERABLE);
        var _keys2 = getOwnNonIndexProperties(val2, ONLY_ENUMERABLE);
        if (_keys.length !== _keys2.length) return false;
        return keyCheck(val1, val2, strict, memos, kNoIterator, _keys);
    } else if (isSet(val1)) {
        if (!isSet(val2) || val1.size !== val2.size) return false;
        return keyCheck(val1, val2, strict, memos, kIsSet);
    } else if (isMap(val1)) {
        if (!isMap(val2) || val1.size !== val2.size) return false;
        return keyCheck(val1, val2, strict, memos, kIsMap);
    } else if (isAnyArrayBuffer(val1)) {
        if (!areEqualArrayBuffers(val1, val2)) return false;
    } else if (isBoxedPrimitive(val1) && !isEqualBoxedPrimitive(val1, val2)) return false;
    return keyCheck(val1, val2, strict, memos, kNoIterator);
}
function getEnumerables(val, keys) {
    return keys.filter(function(k) {
        return propertyIsEnumerable(val, k);
    });
}
function keyCheck(val1, val2, strict, memos, iterationType, aKeys) {
    // For all remaining Object pairs, including Array, objects and Maps,
    // equivalence is determined by having:
    // a) The same number of owned enumerable properties
    // b) The same set of keys/indexes (although not necessarily the same order)
    // c) Equivalent values for every corresponding key/index
    // d) For Sets and Maps, equal contents
    // Note: this accounts for both named and indexed properties on Arrays.
    if (arguments.length === 5) {
        aKeys = Object.keys(val1);
        var bKeys = Object.keys(val2); // The pair must have the same number of owned properties.
        if (aKeys.length !== bKeys.length) return false;
    } // Cheap key test
    var i = 0;
    for(; i < aKeys.length; i++){
        if (!hasOwnProperty(val2, aKeys[i])) return false;
    }
    if (strict && arguments.length === 5) {
        var symbolKeysA = objectGetOwnPropertySymbols(val1);
        if (symbolKeysA.length !== 0) {
            var count = 0;
            for(i = 0; i < symbolKeysA.length; i++){
                var key = symbolKeysA[i];
                if (propertyIsEnumerable(val1, key)) {
                    if (!propertyIsEnumerable(val2, key)) return false;
                    aKeys.push(key);
                    count++;
                } else if (propertyIsEnumerable(val2, key)) return false;
            }
            var symbolKeysB = objectGetOwnPropertySymbols(val2);
            if (symbolKeysA.length !== symbolKeysB.length && getEnumerables(val2, symbolKeysB).length !== count) return false;
        } else {
            var _symbolKeysB = objectGetOwnPropertySymbols(val2);
            if (_symbolKeysB.length !== 0 && getEnumerables(val2, _symbolKeysB).length !== 0) return false;
        }
    }
    if (aKeys.length === 0 && (iterationType === kNoIterator || iterationType === kIsArray && val1.length === 0 || val1.size === 0)) return true;
     // Use memos to handle cycles.
    if (memos === undefined) memos = {
        val1: new Map(),
        val2: new Map(),
        position: 0
    };
    else {
        // We prevent up to two map.has(x) calls by directly retrieving the value
        // and checking for undefined. The map can only contain numbers, so it is
        // safe to check for undefined only.
        var val2MemoA = memos.val1.get(val1);
        if (val2MemoA !== undefined) {
            var val2MemoB = memos.val2.get(val2);
            if (val2MemoB !== undefined) return val2MemoA === val2MemoB;
        }
        memos.position++;
    }
    memos.val1.set(val1, memos.position);
    memos.val2.set(val2, memos.position);
    var areEq = objEquiv(val1, val2, strict, aKeys, memos, iterationType);
    memos.val1.delete(val1);
    memos.val2.delete(val2);
    return areEq;
}
function setHasEqualElement(set, val1, strict, memo) {
    // Go looking.
    var setValues = arrayFromSet(set);
    for(var i = 0; i < setValues.length; i++){
        var val2 = setValues[i];
        if (innerDeepEqual(val1, val2, strict, memo)) {
            // Remove the matching element to make sure we do not check that again.
            set.delete(val2);
            return true;
        }
    }
    return false;
} // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using
// Sadly it is not possible to detect corresponding values properly in case the
// type is a string, number, bigint or boolean. The reason is that those values
// can match lots of different string values (e.g., 1n == '+00001').
function findLooseMatchingPrimitives(prim) {
    switch(_typeof(prim)){
        case 'undefined':
            return null;
        case 'object':
            // Only pass in null as object!
            return undefined;
        case 'symbol':
            return false;
        case 'string':
            prim = +prim;
        // Loose equal entries exist only if the string is possible to convert to
        // a regular number and not NaN.
        // Fall through
        case 'number':
            if (numberIsNaN(prim)) return false;
    }
    return true;
}
function setMightHaveLoosePrim(a, b, prim) {
    var altValue = findLooseMatchingPrimitives(prim);
    if (altValue != null) return altValue;
    return b.has(altValue) && !a.has(altValue);
}
function mapMightHaveLoosePrim(a, b, prim, item, memo) {
    var altValue = findLooseMatchingPrimitives(prim);
    if (altValue != null) return altValue;
    var curB = b.get(altValue);
    if (curB === undefined && !b.has(altValue) || !innerDeepEqual(item, curB, false, memo)) return false;
    return !a.has(altValue) && innerDeepEqual(item, curB, false, memo);
}
function setEquiv(a, b, strict, memo) {
    // This is a lazily initiated Set of entries which have to be compared
    // pairwise.
    var set = null;
    var aValues = arrayFromSet(a);
    for(var i = 0; i < aValues.length; i++){
        var val = aValues[i]; // Note: Checking for the objects first improves the performance for object
        // heavy sets but it is a minor slow down for primitives. As they are fast
        // to check this improves the worst case scenario instead.
        if (_typeof(val) === 'object' && val !== null) {
            if (set === null) set = new Set();
             // If the specified value doesn't exist in the second set its an not null
            // object (or non strict only: a not matching primitive) we'll need to go
            // hunting for something thats deep-(strict-)equal to it. To make this
            // O(n log n) complexity we have to copy these values in a new set first.
            set.add(val);
        } else if (!b.has(val)) {
            if (strict) return false; // Fast path to detect missing string, symbol, undefined and null values.
            if (!setMightHaveLoosePrim(a, b, val)) return false;
            if (set === null) set = new Set();
            set.add(val);
        }
    }
    if (set !== null) {
        var bValues = arrayFromSet(b);
        for(var _i = 0; _i < bValues.length; _i++){
            var _val = bValues[_i]; // We have to check if a primitive value is already
            // matching and only if it's not, go hunting for it.
            if (_typeof(_val) === 'object' && _val !== null) {
                if (!setHasEqualElement(set, _val, strict, memo)) return false;
            } else if (!strict && !a.has(_val) && !setHasEqualElement(set, _val, strict, memo)) return false;
        }
        return set.size === 0;
    }
    return true;
}
function mapHasEqualEntry(set, map, key1, item1, strict, memo) {
    // To be able to handle cases like:
    //   Map([[{}, 'a'], [{}, 'b']]) vs Map([[{}, 'b'], [{}, 'a']])
    // ... we need to consider *all* matching keys, not just the first we find.
    var setValues = arrayFromSet(set);
    for(var i = 0; i < setValues.length; i++){
        var key2 = setValues[i];
        if (innerDeepEqual(key1, key2, strict, memo) && innerDeepEqual(item1, map.get(key2), strict, memo)) {
            set.delete(key2);
            return true;
        }
    }
    return false;
}
function mapEquiv(a, b, strict, memo) {
    var set = null;
    var aEntries = arrayFromMap(a);
    for(var i = 0; i < aEntries.length; i++){
        var _aEntries$i = _slicedToArray(aEntries[i], 2), key = _aEntries$i[0], item1 = _aEntries$i[1];
        if (_typeof(key) === 'object' && key !== null) {
            if (set === null) set = new Set();
            set.add(key);
        } else {
            // By directly retrieving the value we prevent another b.has(key) check in
            // almost all possible cases.
            var item2 = b.get(key);
            if (item2 === undefined && !b.has(key) || !innerDeepEqual(item1, item2, strict, memo)) {
                if (strict) return false; // Fast path to detect missing string, symbol, undefined and null
                // keys.
                if (!mapMightHaveLoosePrim(a, b, key, item1, memo)) return false;
                if (set === null) set = new Set();
                set.add(key);
            }
        }
    }
    if (set !== null) {
        var bEntries = arrayFromMap(b);
        for(var _i2 = 0; _i2 < bEntries.length; _i2++){
            var _bEntries$_i = _slicedToArray(bEntries[_i2], 2), key = _bEntries$_i[0], item = _bEntries$_i[1];
            if (_typeof(key) === 'object' && key !== null) {
                if (!mapHasEqualEntry(set, a, key, item, strict, memo)) return false;
            } else if (!strict && (!a.has(key) || !innerDeepEqual(a.get(key), item, false, memo)) && !mapHasEqualEntry(set, a, key, item, false, memo)) return false;
        }
        return set.size === 0;
    }
    return true;
}
function objEquiv(a, b, strict, keys, memos, iterationType) {
    // Sets and maps don't have their entries accessible via normal object
    // properties.
    var i = 0;
    if (iterationType === kIsSet) {
        if (!setEquiv(a, b, strict, memos)) return false;
    } else if (iterationType === kIsMap) {
        if (!mapEquiv(a, b, strict, memos)) return false;
    } else if (iterationType === kIsArray) for(; i < a.length; i++){
        if (hasOwnProperty(a, i)) {
            if (!hasOwnProperty(b, i) || !innerDeepEqual(a[i], b[i], strict, memos)) return false;
        } else if (hasOwnProperty(b, i)) return false;
        else {
            // Array is sparse.
            var keysA = Object.keys(a);
            for(; i < keysA.length; i++){
                var key = keysA[i];
                if (!hasOwnProperty(b, key) || !innerDeepEqual(a[key], b[key], strict, memos)) return false;
            }
            if (keysA.length !== Object.keys(b).length) return false;
            return true;
        }
    }
     // The pair must have equivalent values for every corresponding key.
    // Possibly expensive deep test:
    for(i = 0; i < keys.length; i++){
        var _key = keys[i];
        if (!innerDeepEqual(a[_key], b[_key], strict, memos)) return false;
    }
    return true;
}
function isDeepEqual(val1, val2) {
    return innerDeepEqual(val1, val2, kLoose);
}
function isDeepStrictEqual(val1, val2) {
    return innerDeepEqual(val1, val2, kStrict);
}
module.exports = {
    isDeepEqual: isDeepEqual,
    isDeepStrictEqual: isDeepStrictEqual
};

},{"object-is":"V34yE","is-nan":"j4zD4","util/":"7sOXW"}],"j4zD4":[function(require,module,exports) {
'use strict';
var callBind = require('call-bind');
var define = require('define-properties');
var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var shim = require('./shim');
var polyfill = callBind(getPolyfill(), Number);
/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */ define(polyfill, {
    getPolyfill: getPolyfill,
    implementation: implementation,
    shim: shim
});
module.exports = polyfill;

},{"call-bind":"bPDkM","define-properties":"arjVC","./implementation":"i6FAo","./polyfill":"1cnxy","./shim":"jKLXz"}],"i6FAo":[function(require,module,exports) {
'use strict';
/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */ module.exports = function isNaN(value) {
    return value !== value;
};

},{}],"1cnxy":[function(require,module,exports) {
'use strict';
var implementation = require('./implementation');
module.exports = function getPolyfill() {
    if (Number.isNaN && Number.isNaN(NaN) && !Number.isNaN('a')) return Number.isNaN;
    return implementation;
};

},{"./implementation":"i6FAo"}],"jKLXz":[function(require,module,exports) {
'use strict';
var define = require('define-properties');
var getPolyfill = require('./polyfill');
/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */ module.exports = function shimNumberIsNaN() {
    var polyfill = getPolyfill();
    define(Number, {
        isNaN: polyfill
    }, {
        isNaN: function testIsNaN() {
            return Number.isNaN !== polyfill;
        }
    });
    return polyfill;
};

},{"define-properties":"arjVC","./polyfill":"1cnxy"}],"e3YRK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ltgt = require("ltgt");
var _ltgtDefault = parcelHelpers.interopDefault(_ltgt);
var _events = require("events");
var _eventsDefault = parcelHelpers.interopDefault(_events);
var _levelCodec = require("level-codec");
var _levelCodecDefault = parcelHelpers.interopDefault(_levelCodec);
var _readableStream = require("readable-stream");
var _readableStreamDefault = parcelHelpers.interopDefault(_readableStream);
var _inherits = require("inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
function isFunction(f) {
    return 'function' === typeof f;
}
function getPrefix(db) {
    if (isFunction(db.prefix)) return db.prefix();
    return db;
}
function clone(_obj) {
    var obj = {
    };
    for(var k in _obj)obj[k] = _obj[k];
    return obj;
}
function nut1(db, precodec, codec) {
    function encodePrefix(prefix, key, opts1, opts2) {
        return precodec.encode([
            prefix,
            codec.encodeKey(key, opts1, opts2)
        ]);
    }
    function addEncodings(op, prefix) {
        if (prefix && prefix.options) {
            op.keyEncoding = op.keyEncoding || prefix.options.keyEncoding;
            op.valueEncoding = op.valueEncoding || prefix.options.valueEncoding;
        }
        return op;
    }
    db.open(function() {
    });
    return {
        apply: function(ops, opts, cb) {
            opts = opts || {
            };
            var batch = [];
            var i = -1;
            var len = ops.length;
            while(++i < len){
                var op = ops[i];
                addEncodings(op, op.prefix);
                op.prefix = getPrefix(op.prefix);
                batch.push({
                    key: encodePrefix(op.prefix, op.key, opts, op),
                    value: op.type !== 'del' && codec.encodeValue(op.value, opts, op),
                    type: op.type
                });
            }
            db.db.batch(batch, opts, cb);
        },
        get: function(key, prefix, opts, cb) {
            opts.asBuffer = codec.valueAsBuffer(opts);
            return db.db.get(encodePrefix(prefix, key, opts), opts, function(err, value) {
                if (err) cb(err);
                else cb(null, codec.decodeValue(value, opts));
            });
        },
        createDecoder: function(opts) {
            return function(key, value) {
                return {
                    key: codec.decodeKey(precodec.decode(key)[1], opts),
                    value: codec.decodeValue(value, opts)
                };
            };
        },
        isClosed: function isClosed() {
            return db.isClosed();
        },
        close: function close(cb) {
            return db.close(cb);
        },
        iterator: function(_opts) {
            var opts = clone(_opts || {
            });
            var prefix = _opts.prefix || [];
            function encodeKey(key) {
                return encodePrefix(prefix, key, opts, {
                });
            }
            _ltgtDefault.default.toLtgt(_opts, opts, encodeKey, precodec.lowerBound, precodec.upperBound);
            // if these legacy values are in the options, remove them
            opts.prefix = null;
            //************************************************
            //hard coded defaults, for now...
            //TODO: pull defaults and encoding out of levelup.
            opts.keyAsBuffer = opts.valueAsBuffer = false;
            //************************************************
            //this is vital, otherwise limit: undefined will
            //create an empty stream.
            /* istanbul ignore next */ if ('number' !== typeof opts.limit) opts.limit = -1;
            opts.keyAsBuffer = precodec.buffer;
            opts.valueAsBuffer = codec.valueAsBuffer(opts);
            function wrapIterator(iterator) {
                return {
                    next: function(cb) {
                        return iterator.next(cb);
                    },
                    end: function(cb) {
                        iterator.end(cb);
                    }
                };
            }
            return wrapIterator(db.db.iterator(opts));
        }
    };
}
function NotFoundError() {
    Error.call(this);
}
_inheritsDefault.default(NotFoundError, Error);
NotFoundError.prototype.name = 'NotFoundError';
var EventEmitter = _eventsDefault.default.EventEmitter;
var version = "6.5.4";
var NOT_FOUND_ERROR = new NotFoundError();
var sublevel = function(nut, prefix, createStream, options) {
    var emitter = new EventEmitter();
    emitter.sublevels = {
    };
    emitter.options = options;
    emitter.version = version;
    emitter.methods = {
    };
    prefix = prefix || [];
    function mergeOpts(opts) {
        var o = {
        };
        var k;
        if (options) {
            for(k in options)if (typeof options[k] !== 'undefined') o[k] = options[k];
        }
        if (opts) {
            for(k in opts)if (typeof opts[k] !== 'undefined') o[k] = opts[k];
        }
        return o;
    }
    emitter.put = function(key, value, opts, cb) {
        if ('function' === typeof opts) {
            cb = opts;
            opts = {
            };
        }
        nut.apply([
            {
                key: key,
                value: value,
                prefix: prefix.slice(),
                type: 'put'
            }
        ], mergeOpts(opts), function(err) {
            /* istanbul ignore next */ if (err) return cb(err);
            emitter.emit('put', key, value);
            cb(null);
        });
    };
    emitter.prefix = function() {
        return prefix.slice();
    };
    emitter.batch = function(ops, opts, cb) {
        if ('function' === typeof opts) {
            cb = opts;
            opts = {
            };
        }
        ops = ops.map(function(op) {
            return {
                key: op.key,
                value: op.value,
                prefix: op.prefix || prefix,
                keyEncoding: op.keyEncoding,
                valueEncoding: op.valueEncoding,
                type: op.type
            };
        });
        nut.apply(ops, mergeOpts(opts), function(err) {
            /* istanbul ignore next */ if (err) return cb(err);
            emitter.emit('batch', ops);
            cb(null);
        });
    };
    emitter.get = function(key, opts, cb) {
        /* istanbul ignore else */ if ('function' === typeof opts) {
            cb = opts;
            opts = {
            };
        }
        nut.get(key, prefix, mergeOpts(opts), function(err, value) {
            if (err) cb(NOT_FOUND_ERROR);
            else cb(null, value);
        });
    };
    emitter.sublevel = function(name, opts) {
        return emitter.sublevels[name] = emitter.sublevels[name] || sublevel(nut, prefix.concat(name), createStream, mergeOpts(opts));
    };
    emitter.readStream = emitter.createReadStream = function(opts) {
        opts = mergeOpts(opts);
        opts.prefix = prefix;
        var stream;
        var it = nut.iterator(opts);
        stream = createStream(opts, nut.createDecoder(opts));
        stream.setIterator(it);
        return stream;
    };
    emitter.close = function(cb) {
        nut.close(cb);
    };
    emitter.isOpen = nut.isOpen;
    emitter.isClosed = nut.isClosed;
    return emitter;
};
/* Copyright (c) 2012-2014 LevelUP contributors
 * See list at <https://github.com/rvagg/node-levelup#contributing>
 * MIT License <https://github.com/rvagg/node-levelup/blob/master/LICENSE.md>
 */ var Readable = _readableStreamDefault.default.Readable;
function ReadStream(options, makeData) {
    if (!(this instanceof ReadStream)) return new ReadStream(options, makeData);
    Readable.call(this, {
        objectMode: true,
        highWaterMark: options.highWaterMark
    });
    // purely to keep `db` around until we're done so it's not GCed if the user doesn't keep a ref
    this._waiting = false;
    this._options = options;
    this._makeData = makeData;
}
_inheritsDefault.default(ReadStream, Readable);
ReadStream.prototype.setIterator = function(it) {
    this._iterator = it;
    /* istanbul ignore if */ if (this._destroyed) return it.end(function() {
    });
    /* istanbul ignore if */ if (this._waiting) {
        this._waiting = false;
        return this._read();
    }
    return this;
};
ReadStream.prototype._read = function read() {
    var self = this;
    /* istanbul ignore if */ if (self._destroyed) return;
    /* istanbul ignore if */ if (!self._iterator) return this._waiting = true;
    self._iterator.next(function(err, key, value) {
        if (err || key === undefined && value === undefined) {
            if (!err && !self._destroyed) self.push(null);
            return self._cleanup(err);
        }
        value = self._makeData(key, value);
        if (!self._destroyed) self.push(value);
    });
};
ReadStream.prototype._cleanup = function(err) {
    if (this._destroyed) return;
    this._destroyed = true;
    var self = this;
    /* istanbul ignore if */ if (err && err.message !== 'iterator has ended') self.emit('error', err);
    /* istanbul ignore else */ if (self._iterator) self._iterator.end(function() {
        self._iterator = null;
        self.emit('close');
    });
    else self.emit('close');
};
ReadStream.prototype.destroy = function() {
    this._cleanup();
};
var precodec1 = {
    encode: function(decodedKey) {
        return '\xff' + decodedKey[0] + '\xff' + decodedKey[1];
    },
    decode: function(encodedKeyAsBuffer) {
        var str = encodedKeyAsBuffer.toString();
        var idx = str.indexOf('\xff', 1);
        return [
            str.substring(1, idx),
            str.substring(idx + 1)
        ];
    },
    lowerBound: '\x00',
    upperBound: '\xff'
};
var codec1 = new _levelCodecDefault.default();
function sublevelPouch(db) {
    return sublevel(nut1(db, precodec1, codec1), [], ReadStream, db.options);
}
exports.default = sublevelPouch;

},{"ltgt":"8XLmg","events":"bHM3D","level-codec":"7rUf0","readable-stream":"e0NBV","inherits":"d3hL2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8XLmg":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
exports.compare = function(a, b) {
    if (Buffer.isBuffer(a)) {
        var l = Math.min(a.length, b.length);
        for(var i = 0; i < l; i++){
            var cmp = a[i] - b[i];
            if (cmp) return cmp;
        }
        return a.length - b.length;
    }
    return a < b ? -1 : a > b ? 1 : 0;
};
// to be compatible with the current abstract-leveldown tests
// nullish or empty strings.
// I could use !!val but I want to permit numbers and booleans,
// if possible.
function isDef(val) {
    return val !== undefined && val !== '';
}
function has(range, name) {
    return Object.hasOwnProperty.call(range, name);
}
function hasKey(range, name) {
    return Object.hasOwnProperty.call(range, name) && name;
}
var lowerBoundKey = exports.lowerBoundKey = function(range) {
    return hasKey(range, 'gt') || hasKey(range, 'gte') || hasKey(range, 'min') || (range.reverse ? hasKey(range, 'end') : hasKey(range, 'start')) || undefined;
};
var lowerBound = exports.lowerBound = function(range, def) {
    var k = lowerBoundKey(range);
    return k ? range[k] : def;
};
var lowerBoundInclusive = exports.lowerBoundInclusive = function(range) {
    return has(range, 'gt') ? false : true;
};
var upperBoundInclusive = exports.upperBoundInclusive = function(range) {
    return has(range, 'lt') ? false : true;
};
var lowerBoundExclusive = exports.lowerBoundExclusive = function(range) {
    return !lowerBoundInclusive(range);
};
var upperBoundExclusive = exports.upperBoundExclusive = function(range) {
    return !upperBoundInclusive(range);
};
var upperBoundKey = exports.upperBoundKey = function(range) {
    return hasKey(range, 'lt') || hasKey(range, 'lte') || hasKey(range, 'max') || (range.reverse ? hasKey(range, 'start') : hasKey(range, 'end')) || undefined;
};
var upperBound = exports.upperBound = function(range, def) {
    var k = upperBoundKey(range);
    return k ? range[k] : def;
};
exports.start = function(range, def) {
    return range.reverse ? upperBound(range, def) : lowerBound(range, def);
};
exports.end = function(range, def) {
    return range.reverse ? lowerBound(range, def) : upperBound(range, def);
};
exports.startInclusive = function(range) {
    return range.reverse ? upperBoundInclusive(range) : lowerBoundInclusive(range);
};
exports.endInclusive = function(range) {
    return range.reverse ? lowerBoundInclusive(range) : upperBoundInclusive(range);
};
function id(e) {
    return e;
}
exports.toLtgt = function(range, _range, map, lower, upper) {
    _range = _range || {
    };
    map = map || id;
    var defaults = arguments.length > 3;
    var lb = exports.lowerBoundKey(range);
    var ub = exports.upperBoundKey(range);
    if (lb) {
        if (lb === 'gt') _range.gt = map(range.gt, false);
        else _range.gte = map(range[lb], false);
    } else if (defaults) _range.gte = map(lower, false);
    if (ub) {
        if (ub === 'lt') _range.lt = map(range.lt, true);
        else _range.lte = map(range[ub], true);
    } else if (defaults) _range.lte = map(upper, true);
    if (range.reverse != null) _range.reverse = !!range.reverse;
    //if range was used mutably
    //(in level-sublevel it's part of an options object
    //that has more properties on it.)
    if (has(_range, 'max')) delete _range.max;
    if (has(_range, 'min')) delete _range.min;
    if (has(_range, 'start')) delete _range.start;
    if (has(_range, 'end')) delete _range.end;
    return _range;
};
exports.contains = function(range, key, compare) {
    compare = compare || exports.compare;
    var lb = lowerBound(range);
    if (isDef(lb)) {
        var cmp = compare(key, lb);
        if (cmp < 0 || cmp === 0 && lowerBoundExclusive(range)) return false;
    }
    var ub = upperBound(range);
    if (isDef(ub)) {
        var cmp = compare(key, ub);
        if (cmp > 0 || cmp === 0 && upperBoundExclusive(range)) return false;
    }
    return true;
};
exports.filter = function(range, compare) {
    return function(key) {
        return exports.contains(range, key, compare);
    };
};

},{"buffer":"bOetu"}],"7rUf0":[function(require,module,exports) {
var encodings = require('./lib/encodings');
module.exports = Codec;
function Codec(opts) {
    if (!(this instanceof Codec)) return new Codec(opts);
    this.opts = opts || {
    };
    this.encodings = encodings;
}
Codec.prototype._encoding = function(encoding) {
    if (typeof encoding === 'string') encoding = encodings[encoding];
    if (!encoding) encoding = encodings.id;
    return encoding;
};
Codec.prototype._keyEncoding = function(opts, batchOpts) {
    return this._encoding(batchOpts && batchOpts.keyEncoding || opts && opts.keyEncoding || this.opts.keyEncoding);
};
Codec.prototype._valueEncoding = function(opts, batchOpts) {
    return this._encoding(batchOpts && (batchOpts.valueEncoding || batchOpts.encoding) || opts && (opts.valueEncoding || opts.encoding) || this.opts.valueEncoding || this.opts.encoding);
};
Codec.prototype.encodeKey = function(key, opts, batchOpts) {
    return this._keyEncoding(opts, batchOpts).encode(key);
};
Codec.prototype.encodeValue = function(value, opts, batchOpts) {
    return this._valueEncoding(opts, batchOpts).encode(value);
};
Codec.prototype.decodeKey = function(key, opts) {
    return this._keyEncoding(opts).decode(key);
};
Codec.prototype.decodeValue = function(value, opts) {
    return this._valueEncoding(opts).decode(value);
};
Codec.prototype.encodeBatch = function(ops, opts) {
    var self = this;
    return ops.map(function(_op) {
        var op = {
            type: _op.type,
            key: self.encodeKey(_op.key, opts, _op)
        };
        if (self.keyAsBuffer(opts, _op)) op.keyEncoding = 'binary';
        if (_op.prefix) op.prefix = _op.prefix;
        if ('value' in _op) {
            op.value = self.encodeValue(_op.value, opts, _op);
            if (self.valueAsBuffer(opts, _op)) op.valueEncoding = 'binary';
        }
        return op;
    });
};
var ltgtKeys = [
    'lt',
    'gt',
    'lte',
    'gte',
    'start',
    'end'
];
Codec.prototype.encodeLtgt = function(ltgt) {
    var self = this;
    var ret = {
    };
    Object.keys(ltgt).forEach(function(key) {
        ret[key] = ltgtKeys.indexOf(key) > -1 ? self.encodeKey(ltgt[key], ltgt) : ltgt[key];
    });
    return ret;
};
Codec.prototype.createStreamDecoder = function(opts) {
    var self = this;
    if (opts.keys && opts.values) return function(key, value) {
        return {
            key: self.decodeKey(key, opts),
            value: self.decodeValue(value, opts)
        };
    };
    else if (opts.keys) return function(key) {
        return self.decodeKey(key, opts);
    };
    else if (opts.values) return function(_, value) {
        return self.decodeValue(value, opts);
    };
    else return function() {
    };
};
Codec.prototype.keyAsBuffer = function(opts) {
    return this._keyEncoding(opts).buffer;
};
Codec.prototype.valueAsBuffer = function(opts) {
    return this._valueEncoding(opts).buffer;
};

},{"./lib/encodings":"2Orcq"}],"2Orcq":[function(require,module,exports) {
var Buffer = require('buffer').Buffer;
exports.utf8 = exports['utf-8'] = {
    encode: function(data) {
        return isBinary(data) ? data : String(data);
    },
    decode: identity,
    buffer: false,
    type: 'utf8'
};
exports.json = {
    encode: JSON.stringify,
    decode: JSON.parse,
    buffer: false,
    type: 'json'
};
exports.binary = {
    encode: function(data) {
        return isBinary(data) ? data : Buffer.from(data);
    },
    decode: identity,
    buffer: true,
    type: 'binary'
};
exports.none = {
    encode: identity,
    decode: identity,
    buffer: false,
    type: 'id'
};
exports.id = exports.none;
var bufferEncodings = [
    'hex',
    'ascii',
    'base64',
    'ucs2',
    'ucs-2',
    'utf16le',
    'utf-16le'
];
bufferEncodings.forEach(function(type) {
    exports[type] = {
        encode: function(data) {
            return isBinary(data) ? data : Buffer.from(data, type);
        },
        decode: function(buffer) {
            return buffer.toString(type);
        },
        buffer: true,
        type: type
    };
});
function identity(value) {
    return value;
}
function isBinary(data) {
    return data === undefined || data === null || Buffer.isBuffer(data);
}

},{"buffer":"bOetu"}],"e0NBV":[function(require,module,exports) {
exports = module.exports = require('./lib/_stream_readable.js');
exports.Stream = require('stream');
exports.Readable = exports;
exports.Writable = require('./lib/_stream_writable.js');
exports.Duplex = require('./lib/_stream_duplex.js');
exports.Transform = require('./lib/_stream_transform.js');
exports.PassThrough = require('./lib/_stream_passthrough.js');

},{"./lib/_stream_readable.js":"lUe9z","stream":"bJ8aT","./lib/_stream_writable.js":"k8dSD","./lib/_stream_duplex.js":"8XkxS","./lib/_stream_transform.js":"lDiiK","./lib/_stream_passthrough.js":"gj76M"}],"lUe9z":[function(require,module,exports) {
var process = require("process");
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
module.exports = Readable;
/*<replacement>*/ var isArray = require('isarray');
/*</replacement>*/ /*<replacement>*/ var Buffer = require('buffer').Buffer;
/*</replacement>*/ Readable.ReadableState = ReadableState;
var EE = require('events').EventEmitter;
/*<replacement>*/ if (!EE.listenerCount) EE.listenerCount = function(emitter, type) {
    return emitter.listeners(type).length;
};
/*</replacement>*/ var Stream = require('stream');
/*<replacement>*/ var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/ var StringDecoder;
/*<replacement>*/ var debug = require('util');
if (debug && debug.debuglog) debug = debug.debuglog('stream');
else debug = function() {
};
/*</replacement>*/ util.inherits(Readable, Stream);
function ReadableState(options, stream) {
    var Duplex = require('./_stream_duplex');
    options = options || {
    };
    // the point at which it stops calling _read() to fill the buffer
    // Note: 0 is a valid value, means "don't call _read preemptively ever"
    var hwm = options.highWaterMark;
    var defaultHwm = options.objectMode ? 16 : 16384;
    this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;
    // cast to ints.
    this.highWaterMark = ~~this.highWaterMark;
    this.buffer = [];
    this.length = 0;
    this.pipes = null;
    this.pipesCount = 0;
    this.flowing = null;
    this.ended = false;
    this.endEmitted = false;
    this.reading = false;
    // a flag to be able to tell if the onwrite cb is called immediately,
    // or on a later tick.  We set this to true at first, because any
    // actions that shouldn't happen until "later" should generally also
    // not happen before the first write call.
    this.sync = true;
    // whenever we return null, then we set a flag to say
    // that we're awaiting a 'readable' event emission.
    this.needReadable = false;
    this.emittedReadable = false;
    this.readableListening = false;
    // object stream flag. Used to make read(n) ignore n and to
    // make all the buffer merging and length checks go away
    this.objectMode = !!options.objectMode;
    if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
    // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || 'utf8';
    // when piping, we only care about 'readable' events that happen
    // after read()ing all the bytes and not getting any pushback.
    this.ranOut = false;
    // the number of writers that are awaiting a drain event in .pipe()s
    this.awaitDrain = 0;
    // if true, a maybeReadMore has been scheduled
    this.readingMore = false;
    this.decoder = null;
    this.encoding = null;
    if (options.encoding) {
        if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
        this.decoder = new StringDecoder(options.encoding);
        this.encoding = options.encoding;
    }
}
function Readable(options) {
    var Duplex = require('./_stream_duplex');
    if (!(this instanceof Readable)) return new Readable(options);
    this._readableState = new ReadableState(options, this);
    // legacy
    this.readable = true;
    Stream.call(this);
}
// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function(chunk, encoding) {
    var state = this._readableState;
    if (util.isString(chunk) && !state.objectMode) {
        encoding = encoding || state.defaultEncoding;
        if (encoding !== state.encoding) {
            chunk = new Buffer(chunk, encoding);
            encoding = '';
        }
    }
    return readableAddChunk(this, state, chunk, encoding, false);
};
// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function(chunk) {
    var state = this._readableState;
    return readableAddChunk(this, state, chunk, '', true);
};
function readableAddChunk(stream, state, chunk, encoding, addToFront) {
    var er = chunkInvalid(state, chunk);
    if (er) stream.emit('error', er);
    else if (util.isNullOrUndefined(chunk)) {
        state.reading = false;
        if (!state.ended) onEofChunk(stream, state);
    } else if (state.objectMode || chunk && chunk.length > 0) {
        if (state.ended && !addToFront) {
            var e = new Error('stream.push() after EOF');
            stream.emit('error', e);
        } else if (state.endEmitted && addToFront) {
            var e = new Error('stream.unshift() after end event');
            stream.emit('error', e);
        } else {
            if (state.decoder && !addToFront && !encoding) chunk = state.decoder.write(chunk);
            if (!addToFront) state.reading = false;
            // if we want the data now, just emit it.
            if (state.flowing && state.length === 0 && !state.sync) {
                stream.emit('data', chunk);
                stream.read(0);
            } else {
                // update the buffer info.
                state.length += state.objectMode ? 1 : chunk.length;
                if (addToFront) state.buffer.unshift(chunk);
                else state.buffer.push(chunk);
                if (state.needReadable) emitReadable(stream);
            }
            maybeReadMore(stream, state);
        }
    } else if (!addToFront) state.reading = false;
    return needMoreData(state);
}
// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
    return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}
// backwards compatibility.
Readable.prototype.setEncoding = function(enc) {
    if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
    this._readableState.decoder = new StringDecoder(enc);
    this._readableState.encoding = enc;
    return this;
};
// Don't raise the hwm > 128MB
var MAX_HWM = 8388608;
function roundUpToNextPowerOf2(n) {
    if (n >= MAX_HWM) n = MAX_HWM;
    else {
        // Get the next highest power of 2
        n--;
        for(var p = 1; p < 32; p <<= 1)n |= n >> p;
        n++;
    }
    return n;
}
function howMuchToRead(n, state) {
    if (state.length === 0 && state.ended) return 0;
    if (state.objectMode) return n === 0 ? 0 : 1;
    if (isNaN(n) || util.isNull(n)) {
        // only flow one buffer at a time
        if (state.flowing && state.buffer.length) return state.buffer[0].length;
        else return state.length;
    }
    if (n <= 0) return 0;
    // If we're asking for more than the target buffer level,
    // then raise the water mark.  Bump up to the next highest
    // power of 2, to prevent increasing it excessively in tiny
    // amounts.
    if (n > state.highWaterMark) state.highWaterMark = roundUpToNextPowerOf2(n);
    // don't have that much.  return null, unless we've ended.
    if (n > state.length) {
        if (!state.ended) {
            state.needReadable = true;
            return 0;
        } else return state.length;
    }
    return n;
}
// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function(n) {
    debug('read', n);
    var state = this._readableState;
    var nOrig = n;
    if (!util.isNumber(n) || n > 0) state.emittedReadable = false;
    // if we're doing read(0) to trigger a readable event, but we
    // already have a bunch of data in the buffer, then just trigger
    // the 'readable' event and move on.
    if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
        debug('read: emitReadable', state.length, state.ended);
        if (state.length === 0 && state.ended) endReadable(this);
        else emitReadable(this);
        return null;
    }
    n = howMuchToRead(n, state);
    // if we've ended, and we're now clear, then finish it up.
    if (n === 0 && state.ended) {
        if (state.length === 0) endReadable(this);
        return null;
    }
    // All the actual chunk generation logic needs to be
    // *below* the call to _read.  The reason is that in certain
    // synthetic stream cases, such as passthrough streams, _read
    // may be a completely synchronous operation which may change
    // the state of the read buffer, providing enough data when
    // before there was *not* enough.
    //
    // So, the steps are:
    // 1. Figure out what the state of things will be after we do
    // a read from the buffer.
    //
    // 2. If that resulting state will trigger a _read, then call _read.
    // Note that this may be asynchronous, or synchronous.  Yes, it is
    // deeply ugly to write APIs this way, but that still doesn't mean
    // that the Readable class should behave improperly, as streams are
    // designed to be sync/async agnostic.
    // Take note if the _read call is sync or async (ie, if the read call
    // has returned yet), so that we know whether or not it's safe to emit
    // 'readable' etc.
    //
    // 3. Actually pull the requested chunks out of the buffer and return.
    // if we need a readable event, then we need to do some reading.
    var doRead = state.needReadable;
    debug('need readable', doRead);
    // if we currently have less than the highWaterMark, then also read some
    if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        debug('length less than watermark', doRead);
    }
    // however, if we've ended, then there's no point, and if we're already
    // reading, then it's unnecessary.
    if (state.ended || state.reading) {
        doRead = false;
        debug('reading or ended', doRead);
    }
    if (doRead) {
        debug('do read');
        state.reading = true;
        state.sync = true;
        // if the length is currently zero, then we *need* a readable event.
        if (state.length === 0) state.needReadable = true;
        // call internal read method
        this._read(state.highWaterMark);
        state.sync = false;
    }
    // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.
    if (doRead && !state.reading) n = howMuchToRead(nOrig, state);
    var ret;
    if (n > 0) ret = fromList(n, state);
    else ret = null;
    if (util.isNull(ret)) {
        state.needReadable = true;
        n = 0;
    }
    state.length -= n;
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (state.length === 0 && !state.ended) state.needReadable = true;
    // If we tried to read() past the EOF, then emit end on the next tick.
    if (nOrig !== n && state.ended && state.length === 0) endReadable(this);
    if (!util.isNull(ret)) this.emit('data', ret);
    return ret;
};
function chunkInvalid(state, chunk) {
    var er = null;
    if (!util.isBuffer(chunk) && !util.isString(chunk) && !util.isNullOrUndefined(chunk) && !state.objectMode) er = new TypeError('Invalid non-string/buffer chunk');
    return er;
}
function onEofChunk(stream, state) {
    if (state.decoder && !state.ended) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
            state.buffer.push(chunk);
            state.length += state.objectMode ? 1 : chunk.length;
        }
    }
    state.ended = true;
    // emit 'readable' now to make sure it gets picked up.
    emitReadable(stream);
}
// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
    var state = stream._readableState;
    state.needReadable = false;
    if (!state.emittedReadable) {
        debug('emitReadable', state.flowing);
        state.emittedReadable = true;
        if (state.sync) process.nextTick(function() {
            emitReadable_(stream);
        });
        else emitReadable_(stream);
    }
}
function emitReadable_(stream) {
    debug('emit readable');
    stream.emit('readable');
    flow(stream);
}
// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
    if (!state.readingMore) {
        state.readingMore = true;
        process.nextTick(function() {
            maybeReadMore_(stream, state);
        });
    }
}
function maybeReadMore_(stream, state) {
    var len = state.length;
    while(!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark){
        debug('maybeReadMore read 0');
        stream.read(0);
        if (len === state.length) break;
        else len = state.length;
    }
    state.readingMore = false;
}
// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function(n) {
    this.emit('error', new Error('not implemented'));
};
Readable.prototype.pipe = function(dest, pipeOpts) {
    var src = this;
    var state = this._readableState;
    switch(state.pipesCount){
        case 0:
            state.pipes = dest;
            break;
        case 1:
            state.pipes = [
                state.pipes,
                dest
            ];
            break;
        default:
            state.pipes.push(dest);
            break;
    }
    state.pipesCount += 1;
    debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
    var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
    var endFn = doEnd ? onend : cleanup;
    if (state.endEmitted) process.nextTick(endFn);
    else src.once('end', endFn);
    dest.on('unpipe', onunpipe);
    function onunpipe(readable) {
        debug('onunpipe');
        if (readable === src) cleanup();
    }
    function onend() {
        debug('onend');
        dest.end();
    }
    // when the dest drains, it reduces the awaitDrain counter
    // on the source.  This would be more elegant with a .once()
    // handler in flow(), but adding and removing repeatedly is
    // too slow.
    var ondrain = pipeOnDrain(src);
    dest.on('drain', ondrain);
    function cleanup() {
        debug('cleanup');
        // cleanup event handlers once the pipe is broken
        dest.removeListener('close', onclose);
        dest.removeListener('finish', onfinish);
        dest.removeListener('drain', ondrain);
        dest.removeListener('error', onerror);
        dest.removeListener('unpipe', onunpipe);
        src.removeListener('end', onend);
        src.removeListener('end', cleanup);
        src.removeListener('data', ondata);
        // if the reader is waiting for a drain event from this
        // specific writer, then it would cause it to never start
        // flowing again.
        // So, if this is awaiting a drain, then we just call it now.
        // If we don't know, then assume that we are waiting for one.
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
    }
    src.on('data', ondata);
    function ondata(chunk) {
        debug('ondata');
        var ret = dest.write(chunk);
        if (false === ret) {
            debug('false write response, pause', src._readableState.awaitDrain);
            src._readableState.awaitDrain++;
            src.pause();
        }
    }
    // if the dest has an error, then stop piping into it.
    // however, don't suppress the throwing behavior for this.
    function onerror(er) {
        debug('onerror', er);
        unpipe();
        dest.removeListener('error', onerror);
        if (EE.listenerCount(dest, 'error') === 0) dest.emit('error', er);
    }
    // This is a brutally ugly hack to make sure that our error handler
    // is attached before any userland ones.  NEVER DO THIS.
    if (!dest._events || !dest._events.error) dest.on('error', onerror);
    else if (isArray(dest._events.error)) dest._events.error.unshift(onerror);
    else dest._events.error = [
        onerror,
        dest._events.error
    ];
    // Both close and finish should trigger unpipe, but only once.
    function onclose() {
        dest.removeListener('finish', onfinish);
        unpipe();
    }
    dest.once('close', onclose);
    function onfinish() {
        debug('onfinish');
        dest.removeListener('close', onclose);
        unpipe();
    }
    dest.once('finish', onfinish);
    function unpipe() {
        debug('unpipe');
        src.unpipe(dest);
    }
    // tell the dest that it's being piped to
    dest.emit('pipe', src);
    // start the flow if it hasn't been started already.
    if (!state.flowing) {
        debug('pipe resume');
        src.resume();
    }
    return dest;
};
function pipeOnDrain(src) {
    return function() {
        var state = src._readableState;
        debug('pipeOnDrain', state.awaitDrain);
        if (state.awaitDrain) state.awaitDrain--;
        if (state.awaitDrain === 0 && EE.listenerCount(src, 'data')) {
            state.flowing = true;
            flow(src);
        }
    };
}
Readable.prototype.unpipe = function(dest) {
    var state = this._readableState;
    // if we're not piping anywhere, then do nothing.
    if (state.pipesCount === 0) return this;
    // just one destination.  most common case.
    if (state.pipesCount === 1) {
        // passed in one, but it's not the right one.
        if (dest && dest !== state.pipes) return this;
        if (!dest) dest = state.pipes;
        // got a match.
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest) dest.emit('unpipe', this);
        return this;
    }
    // slow case. multiple pipe destinations.
    if (!dest) {
        // remove all.
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for(var i = 0; i < len; i++)dests[i].emit('unpipe', this);
        return this;
    }
    // try to find the right one.
    var i = indexOf(state.pipes, dest);
    if (i === -1) return this;
    state.pipes.splice(i, 1);
    state.pipesCount -= 1;
    if (state.pipesCount === 1) state.pipes = state.pipes[0];
    dest.emit('unpipe', this);
    return this;
};
// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function(ev, fn) {
    var res = Stream.prototype.on.call(this, ev, fn);
    // If listening to data, and it has not explicitly been paused,
    // then call resume to start the flow of data on the next tick.
    if (ev === 'data' && false !== this._readableState.flowing) this.resume();
    if (ev === 'readable' && this.readable) {
        var state = this._readableState;
        if (!state.readableListening) {
            state.readableListening = true;
            state.emittedReadable = false;
            state.needReadable = true;
            if (!state.reading) {
                var self = this;
                process.nextTick(function() {
                    debug('readable nexttick read 0');
                    self.read(0);
                });
            } else if (state.length) emitReadable(this, state);
        }
    }
    return res;
};
Readable.prototype.addListener = Readable.prototype.on;
// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function() {
    var state = this._readableState;
    if (!state.flowing) {
        debug('resume');
        state.flowing = true;
        if (!state.reading) {
            debug('resume read 0');
            this.read(0);
        }
        resume(this, state);
    }
    return this;
};
function resume(stream, state) {
    if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        process.nextTick(function() {
            resume_(stream, state);
        });
    }
}
function resume_(stream, state) {
    state.resumeScheduled = false;
    stream.emit('resume');
    flow(stream);
    if (state.flowing && !state.reading) stream.read(0);
}
Readable.prototype.pause = function() {
    debug('call pause flowing=%j', this._readableState.flowing);
    if (false !== this._readableState.flowing) {
        debug('pause');
        this._readableState.flowing = false;
        this.emit('pause');
    }
    return this;
};
function flow(stream) {
    var state = stream._readableState;
    debug('flow', state.flowing);
    if (state.flowing) do var chunk = stream.read();
    while (null !== chunk && state.flowing)
}
// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function(stream) {
    var state = this._readableState;
    var paused = false;
    var self = this;
    stream.on('end', function() {
        debug('wrapped end');
        if (state.decoder && !state.ended) {
            var chunk = state.decoder.end();
            if (chunk && chunk.length) self.push(chunk);
        }
        self.push(null);
    });
    stream.on('data', function(chunk) {
        debug('wrapped data');
        if (state.decoder) chunk = state.decoder.write(chunk);
        if (!chunk || !state.objectMode && !chunk.length) return;
        var ret = self.push(chunk);
        if (!ret) {
            paused = true;
            stream.pause();
        }
    });
    // proxy all the other methods.
    // important when wrapping filters and duplexes.
    for(var i in stream)if (util.isFunction(stream[i]) && util.isUndefined(this[i])) this[i] = (function(method) {
        return function() {
            return stream[method].apply(stream, arguments);
        };
    })(i);
    // proxy certain important events.
    var events = [
        'error',
        'close',
        'destroy',
        'pause',
        'resume'
    ];
    forEach(events, function(ev) {
        stream.on(ev, self.emit.bind(self, ev));
    });
    // when we try to consume some more bytes, simply unpause the
    // underlying stream.
    self._read = function(n) {
        debug('wrapped _read', n);
        if (paused) {
            paused = false;
            stream.resume();
        }
    };
    return self;
};
// exposed for testing purposes only.
Readable._fromList = fromList;
// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
function fromList(n, state) {
    var list = state.buffer;
    var length = state.length;
    var stringMode = !!state.decoder;
    var objectMode = !!state.objectMode;
    var ret;
    // nothing in the list, definitely empty.
    if (list.length === 0) return null;
    if (length === 0) ret = null;
    else if (objectMode) ret = list.shift();
    else if (!n || n >= length) {
        // read it all, truncate the array.
        if (stringMode) ret = list.join('');
        else ret = Buffer.concat(list, length);
        list.length = 0;
    } else {
        // read just some of it.
        if (n < list[0].length) {
            // just take a part of the first list item.
            // slice is the same for buffers and strings.
            var buf = list[0];
            ret = buf.slice(0, n);
            list[0] = buf.slice(n);
        } else if (n === list[0].length) // first list is a perfect match
        ret = list.shift();
        else {
            // complex case.
            // we have enough to cover it, but it spans past the first buffer.
            if (stringMode) ret = '';
            else ret = new Buffer(n);
            var c = 0;
            for(var i = 0, l = list.length; i < l && c < n; i++){
                var buf = list[0];
                var cpy = Math.min(n - c, buf.length);
                if (stringMode) ret += buf.slice(0, cpy);
                else buf.copy(ret, c, 0, cpy);
                if (cpy < buf.length) list[0] = buf.slice(cpy);
                else list.shift();
                c += cpy;
            }
        }
    }
    return ret;
}
function endReadable(stream) {
    var state = stream._readableState;
    // If we get here before consuming all the bytes, then that is a
    // bug in node.  Should never happen.
    if (state.length > 0) throw new Error('endReadable called on non-empty stream');
    if (!state.endEmitted) {
        state.ended = true;
        process.nextTick(function() {
            // Check that we didn't get one last unshift.
            if (!state.endEmitted && state.length === 0) {
                state.endEmitted = true;
                stream.readable = false;
                stream.emit('end');
            }
        });
    }
}
function forEach(xs, f) {
    for(var i = 0, l = xs.length; i < l; i++)f(xs[i], i);
}
function indexOf(xs, x) {
    for(var i = 0, l = xs.length; i < l; i++){
        if (xs[i] === x) return i;
    }
    return -1;
}

},{"process":"lDnB8","isarray":"6igwu","buffer":"bOetu","events":"bHM3D","stream":"bJ8aT","core-util-is":"7qlk2","inherits":"d3hL2","util":"joWnX","./_stream_duplex":"8XkxS","string_decoder/":"cOxRT"}],"6igwu":[function(require,module,exports) {
module.exports = Array.isArray || function(arr) {
    return Object.prototype.toString.call(arr) == '[object Array]';
};

},{}],"7qlk2":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(arg) {
    if (Array.isArray) return Array.isArray(arg);
    return objectToString(arg) === '[object Array]';
}
exports.isArray = isArray;
function isBoolean(arg) {
    return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;
function isNull(arg) {
    return arg === null;
}
exports.isNull = isNull;
function isNullOrUndefined(arg) {
    return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;
function isNumber(arg) {
    return typeof arg === 'number';
}
exports.isNumber = isNumber;
function isString(arg) {
    return typeof arg === 'string';
}
exports.isString = isString;
function isSymbol(arg) {
    return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;
function isUndefined(arg) {
    return arg === void 0;
}
exports.isUndefined = isUndefined;
function isRegExp(re) {
    return objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;
function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;
function isDate(d) {
    return objectToString(d) === '[object Date]';
}
exports.isDate = isDate;
function isError(e) {
    return objectToString(e) === '[object Error]' || e instanceof Error;
}
exports.isError = isError;
function isFunction(arg) {
    return typeof arg === 'function';
}
exports.isFunction = isFunction;
function isPrimitive(arg) {
    return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;
exports.isBuffer = Buffer.isBuffer;
function objectToString(o) {
    return Object.prototype.toString.call(o);
}

},{"buffer":"bOetu"}],"8XkxS":[function(require,module,exports) {
var process = require("process");
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.
module.exports = Duplex;
/*<replacement>*/ var objectKeys = Object.keys || function(obj) {
    var keys = [];
    for(var key in obj)keys.push(key);
    return keys;
};
/*</replacement>*/ /*<replacement>*/ var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/ var Readable = require('./_stream_readable');
var Writable = require('./_stream_writable');
util.inherits(Duplex, Readable);
forEach(objectKeys(Writable.prototype), function(method) {
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
});
function Duplex(options) {
    if (!(this instanceof Duplex)) return new Duplex(options);
    Readable.call(this, options);
    Writable.call(this, options);
    if (options && options.readable === false) this.readable = false;
    if (options && options.writable === false) this.writable = false;
    this.allowHalfOpen = true;
    if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;
    this.once('end', onend);
}
// the no-half-open enforcer
function onend() {
    // if we allow half-open state, or if the writable side ended,
    // then we're ok.
    if (this.allowHalfOpen || this._writableState.ended) return;
    // no more data can be written.
    // But allow more writes to happen in this tick.
    process.nextTick(this.end.bind(this));
}
function forEach(xs, f) {
    for(var i = 0, l = xs.length; i < l; i++)f(xs[i], i);
}

},{"process":"lDnB8","core-util-is":"7qlk2","inherits":"d3hL2","./_stream_readable":"lUe9z","./_stream_writable":"k8dSD"}],"k8dSD":[function(require,module,exports) {
var process = require("process");
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// A bit simpler than readable streams.
// Implement an async ._write(chunk, cb), and it'll handle all
// the drain event emission and buffering.
module.exports = Writable;
/*<replacement>*/ var Buffer = require('buffer').Buffer;
/*</replacement>*/ Writable.WritableState = WritableState;
/*<replacement>*/ var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/ var Stream = require('stream');
util.inherits(Writable, Stream);
function WriteReq(chunk, encoding, cb) {
    this.chunk = chunk;
    this.encoding = encoding;
    this.callback = cb;
}
function WritableState(options, stream) {
    var Duplex = require('./_stream_duplex');
    options = options || {
    };
    // the point at which write() starts returning false
    // Note: 0 is a valid value, means that we always return false if
    // the entire buffer is not flushed immediately on write()
    var hwm = options.highWaterMark;
    var defaultHwm = options.objectMode ? 16 : 16384;
    this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;
    // object stream flag to indicate whether or not this stream
    // contains buffers or objects.
    this.objectMode = !!options.objectMode;
    if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
    // cast to ints.
    this.highWaterMark = ~~this.highWaterMark;
    this.needDrain = false;
    // at the start of calling end()
    this.ending = false;
    // when end() has been called, and returned
    this.ended = false;
    // when 'finish' is emitted
    this.finished = false;
    // should we decode strings into buffers before passing to _write?
    // this is here so that some node-core streams can optimize string
    // handling at a lower level.
    var noDecode = options.decodeStrings === false;
    this.decodeStrings = !noDecode;
    // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || 'utf8';
    // not an actual buffer we keep track of, but a measurement
    // of how much we're waiting to get pushed to some underlying
    // socket or file.
    this.length = 0;
    // a flag to see when we're in the middle of a write.
    this.writing = false;
    // when true all writes will be buffered until .uncork() call
    this.corked = 0;
    // a flag to be able to tell if the onwrite cb is called immediately,
    // or on a later tick.  We set this to true at first, because any
    // actions that shouldn't happen until "later" should generally also
    // not happen before the first write call.
    this.sync = true;
    // a flag to know if we're processing previously buffered items, which
    // may call the _write() callback in the same tick, so that we don't
    // end up in an overlapped onwrite situation.
    this.bufferProcessing = false;
    // the callback that's passed to _write(chunk,cb)
    this.onwrite = function(er) {
        onwrite(stream, er);
    };
    // the callback that the user supplies to write(chunk,encoding,cb)
    this.writecb = null;
    // the amount that is being written when _write is called.
    this.writelen = 0;
    this.buffer = [];
    // number of pending user-supplied write callbacks
    // this must be 0 before 'finish' can be emitted
    this.pendingcb = 0;
    // emit prefinish if the only thing we're waiting for is _write cbs
    // This is relevant for synchronous Transform streams
    this.prefinished = false;
    // True if the error was already emitted and should not be thrown again
    this.errorEmitted = false;
}
function Writable(options) {
    var Duplex = require('./_stream_duplex');
    // Writable ctor is applied to Duplexes, though they're not
    // instanceof Writable, they're instanceof Readable.
    if (!(this instanceof Writable) && !(this instanceof Duplex)) return new Writable(options);
    this._writableState = new WritableState(options, this);
    // legacy.
    this.writable = true;
    Stream.call(this);
}
// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function() {
    this.emit('error', new Error('Cannot pipe. Not readable.'));
};
function writeAfterEnd(stream, state, cb) {
    var er = new Error('write after end');
    // TODO: defer error events consistently everywhere, not just the cb
    stream.emit('error', er);
    process.nextTick(function() {
        cb(er);
    });
}
// If we get something that is not a buffer, string, null, or undefined,
// and we're not in objectMode, then that's an error.
// Otherwise stream chunks are all considered to be of length=1, and the
// watermarks determine how many objects to keep in the buffer, rather than
// how many bytes or characters.
function validChunk(stream, state, chunk, cb) {
    var valid = true;
    if (!util.isBuffer(chunk) && !util.isString(chunk) && !util.isNullOrUndefined(chunk) && !state.objectMode) {
        var er = new TypeError('Invalid non-string/buffer chunk');
        stream.emit('error', er);
        process.nextTick(function() {
            cb(er);
        });
        valid = false;
    }
    return valid;
}
Writable.prototype.write = function(chunk, encoding, cb) {
    var state = this._writableState;
    var ret = false;
    if (util.isFunction(encoding)) {
        cb = encoding;
        encoding = null;
    }
    if (util.isBuffer(chunk)) encoding = 'buffer';
    else if (!encoding) encoding = state.defaultEncoding;
    if (!util.isFunction(cb)) cb = function() {
    };
    if (state.ended) writeAfterEnd(this, state, cb);
    else if (validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = writeOrBuffer(this, state, chunk, encoding, cb);
    }
    return ret;
};
Writable.prototype.cork = function() {
    var state = this._writableState;
    state.corked++;
};
Writable.prototype.uncork = function() {
    var state = this._writableState;
    if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.buffer.length) clearBuffer(this, state);
    }
};
function decodeChunk(state, chunk, encoding) {
    if (!state.objectMode && state.decodeStrings !== false && util.isString(chunk)) chunk = new Buffer(chunk, encoding);
    return chunk;
}
// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, chunk, encoding, cb) {
    chunk = decodeChunk(state, chunk, encoding);
    if (util.isBuffer(chunk)) encoding = 'buffer';
    var len = state.objectMode ? 1 : chunk.length;
    state.length += len;
    var ret = state.length < state.highWaterMark;
    // we must ensure that previous needDrain will not be reset to false.
    if (!ret) state.needDrain = true;
    if (state.writing || state.corked) state.buffer.push(new WriteReq(chunk, encoding, cb));
    else doWrite(stream, state, false, len, chunk, encoding, cb);
    return ret;
}
function doWrite(stream, state, writev, len, chunk, encoding, cb) {
    state.writelen = len;
    state.writecb = cb;
    state.writing = true;
    state.sync = true;
    if (writev) stream._writev(chunk, state.onwrite);
    else stream._write(chunk, encoding, state.onwrite);
    state.sync = false;
}
function onwriteError(stream, state, sync, er, cb) {
    if (sync) process.nextTick(function() {
        state.pendingcb--;
        cb(er);
    });
    else {
        state.pendingcb--;
        cb(er);
    }
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
}
function onwriteStateUpdate(state) {
    state.writing = false;
    state.writecb = null;
    state.length -= state.writelen;
    state.writelen = 0;
}
function onwrite(stream, er) {
    var state = stream._writableState;
    var sync = state.sync;
    var cb = state.writecb;
    onwriteStateUpdate(state);
    if (er) onwriteError(stream, state, sync, er, cb);
    else {
        // Check if we're actually ready to finish, but don't emit yet
        var finished = needFinish(stream, state);
        if (!finished && !state.corked && !state.bufferProcessing && state.buffer.length) clearBuffer(stream, state);
        if (sync) process.nextTick(function() {
            afterWrite(stream, state, finished, cb);
        });
        else afterWrite(stream, state, finished, cb);
    }
}
function afterWrite(stream, state, finished, cb) {
    if (!finished) onwriteDrain(stream, state);
    state.pendingcb--;
    cb();
    finishMaybe(stream, state);
}
// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
    if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit('drain');
    }
}
// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
    state.bufferProcessing = true;
    if (stream._writev && state.buffer.length > 1) {
        // Fast case, write everything using _writev()
        var cbs = [];
        for(var c = 0; c < state.buffer.length; c++)cbs.push(state.buffer[c].callback);
        // count the one we are adding, as well.
        // TODO(isaacs) clean this up
        state.pendingcb++;
        doWrite(stream, state, true, state.length, state.buffer, '', function(err) {
            for(var i = 0; i < cbs.length; i++){
                state.pendingcb--;
                cbs[i](err);
            }
        });
        // Clear buffer
        state.buffer = [];
    } else {
        // Slow case, write chunks one-by-one
        for(var c = 0; c < state.buffer.length; c++){
            var entry = state.buffer[c];
            var chunk = entry.chunk;
            var encoding = entry.encoding;
            var cb = entry.callback;
            var len = state.objectMode ? 1 : chunk.length;
            doWrite(stream, state, false, len, chunk, encoding, cb);
            // if we didn't call the onwrite immediately, then
            // it means that we need to wait until it does.
            // also, that means that the chunk and cb are currently
            // being processed, so move the buffer counter past them.
            if (state.writing) {
                c++;
                break;
            }
        }
        if (c < state.buffer.length) state.buffer = state.buffer.slice(c);
        else state.buffer.length = 0;
    }
    state.bufferProcessing = false;
}
Writable.prototype._write = function(chunk, encoding, cb) {
    cb(new Error('not implemented'));
};
Writable.prototype._writev = null;
Writable.prototype.end = function(chunk, encoding, cb) {
    var state = this._writableState;
    if (util.isFunction(chunk)) {
        cb = chunk;
        chunk = null;
        encoding = null;
    } else if (util.isFunction(encoding)) {
        cb = encoding;
        encoding = null;
    }
    if (!util.isNullOrUndefined(chunk)) this.write(chunk, encoding);
    // .end() fully uncorks
    if (state.corked) {
        state.corked = 1;
        this.uncork();
    }
    // ignore unnecessary end() calls.
    if (!state.ending && !state.finished) endWritable(this, state, cb);
};
function needFinish(stream, state) {
    return state.ending && state.length === 0 && !state.finished && !state.writing;
}
function prefinish(stream, state) {
    if (!state.prefinished) {
        state.prefinished = true;
        stream.emit('prefinish');
    }
}
function finishMaybe(stream, state) {
    var need = needFinish(stream, state);
    if (need) {
        if (state.pendingcb === 0) {
            prefinish(stream, state);
            state.finished = true;
            stream.emit('finish');
        } else prefinish(stream, state);
    }
    return need;
}
function endWritable(stream, state, cb) {
    state.ending = true;
    finishMaybe(stream, state);
    if (cb) {
        if (state.finished) process.nextTick(cb);
        else stream.once('finish', cb);
    }
    state.ended = true;
}

},{"process":"lDnB8","buffer":"bOetu","core-util-is":"7qlk2","inherits":"d3hL2","stream":"bJ8aT","./_stream_duplex":"8XkxS"}],"cOxRT":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var Buffer = require('buffer').Buffer;
var isBufferEncoding = Buffer.isEncoding || function(encoding) {
    switch(encoding && encoding.toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
        case 'raw':
            return true;
        default:
            return false;
    }
};
function assertEncoding(encoding) {
    if (encoding && !isBufferEncoding(encoding)) throw new Error('Unknown encoding: ' + encoding);
}
// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters. CESU-8 is handled as part of the UTF-8 encoding.
//
// @TODO Handling all encodings inside a single object makes it very difficult
// to reason about this code, so it should be split up in the future.
// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
// points as used by CESU-8.
var StringDecoder = exports.StringDecoder = function(encoding) {
    this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
    assertEncoding(encoding);
    switch(this.encoding){
        case 'utf8':
            // CESU-8 represents each of Surrogate Pair by 3-bytes
            this.surrogateSize = 3;
            break;
        case 'ucs2':
        case 'utf16le':
            // UTF-16 represents each of Surrogate Pair by 2-bytes
            this.surrogateSize = 2;
            this.detectIncompleteChar = utf16DetectIncompleteChar;
            break;
        case 'base64':
            // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
            this.surrogateSize = 3;
            this.detectIncompleteChar = base64DetectIncompleteChar;
            break;
        default:
            this.write = passThroughWrite;
            return;
    }
    // Enough space to store all bytes of a single character. UTF-8 needs 4
    // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
    this.charBuffer = new Buffer(6);
    // Number of bytes received for the current incomplete multi-byte character.
    this.charReceived = 0;
    // Number of bytes expected for the current incomplete multi-byte character.
    this.charLength = 0;
};
// write decodes the given buffer and returns it as JS string that is
// guaranteed to not contain any partial multi-byte characters. Any partial
// character found at the end of the buffer is buffered up, and will be
// returned when calling write again with the remaining bytes.
//
// Note: Converting a Buffer containing an orphan surrogate to a String
// currently works, but converting a String to a Buffer (via `new Buffer`, or
// Buffer#write) will replace incomplete surrogates with the unicode
// replacement character. See https://codereview.chromium.org/121173009/ .
StringDecoder.prototype.write = function(buffer) {
    var charStr = '';
    // if our last write ended with an incomplete multibyte character
    while(this.charLength){
        // determine how many remaining bytes this buffer has to offer for this char
        var available = buffer.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : buffer.length;
        // add the new bytes to the char buffer
        buffer.copy(this.charBuffer, this.charReceived, 0, available);
        this.charReceived += available;
        if (this.charReceived < this.charLength) // still not enough chars in this buffer? wait for more ...
        return '';
        // remove bytes belonging to the current character from the buffer
        buffer = buffer.slice(available, buffer.length);
        // get the character that was split
        charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);
        // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
        var charCode = charStr.charCodeAt(charStr.length - 1);
        if (charCode >= 55296 && charCode <= 56319) {
            this.charLength += this.surrogateSize;
            charStr = '';
            continue;
        }
        this.charReceived = this.charLength = 0;
        // if there are no more bytes in this buffer, just emit our char
        if (buffer.length === 0) return charStr;
        break;
    }
    // determine and set charLength / charReceived
    this.detectIncompleteChar(buffer);
    var end = buffer.length;
    if (this.charLength) {
        // buffer the incomplete character bytes we got
        buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
        end -= this.charReceived;
    }
    charStr += buffer.toString(this.encoding, 0, end);
    var end = charStr.length - 1;
    var charCode = charStr.charCodeAt(end);
    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
    if (charCode >= 55296 && charCode <= 56319) {
        var size = this.surrogateSize;
        this.charLength += size;
        this.charReceived += size;
        this.charBuffer.copy(this.charBuffer, size, 0, size);
        buffer.copy(this.charBuffer, 0, 0, size);
        return charStr.substring(0, end);
    }
    // or just emit the charStr
    return charStr;
};
// detectIncompleteChar determines if there is an incomplete UTF-8 character at
// the end of the given buffer. If so, it sets this.charLength to the byte
// length that character, and sets this.charReceived to the number of bytes
// that are available for this character.
StringDecoder.prototype.detectIncompleteChar = function(buffer) {
    // determine how many bytes we have to check at the end of this buffer
    var i = buffer.length >= 3 ? 3 : buffer.length;
    // Figure out if one of the last i bytes of our buffer announces an
    // incomplete char.
    for(; i > 0; i--){
        var c = buffer[buffer.length - i];
        // See http://en.wikipedia.org/wiki/UTF-8#Description
        // 110XXXXX
        if (i == 1 && c >> 5 == 6) {
            this.charLength = 2;
            break;
        }
        // 1110XXXX
        if (i <= 2 && c >> 4 == 14) {
            this.charLength = 3;
            break;
        }
        // 11110XXX
        if (i <= 3 && c >> 3 == 30) {
            this.charLength = 4;
            break;
        }
    }
    this.charReceived = i;
};
StringDecoder.prototype.end = function(buffer) {
    var res = '';
    if (buffer && buffer.length) res = this.write(buffer);
    if (this.charReceived) {
        var cr = this.charReceived;
        var buf = this.charBuffer;
        var enc = this.encoding;
        res += buf.slice(0, cr).toString(enc);
    }
    return res;
};
function passThroughWrite(buffer) {
    return buffer.toString(this.encoding);
}
function utf16DetectIncompleteChar(buffer) {
    this.charReceived = buffer.length % 2;
    this.charLength = this.charReceived ? 2 : 0;
}
function base64DetectIncompleteChar(buffer) {
    this.charReceived = buffer.length % 3;
    this.charLength = this.charReceived ? 3 : 0;
}

},{"buffer":"bOetu"}],"lDiiK":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.
module.exports = Transform;
var Duplex = require('./_stream_duplex');
/*<replacement>*/ var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/ util.inherits(Transform, Duplex);
function TransformState(options, stream) {
    this.afterTransform = function(er, data) {
        return afterTransform(stream, er, data);
    };
    this.needTransform = false;
    this.transforming = false;
    this.writecb = null;
    this.writechunk = null;
}
function afterTransform(stream, er, data) {
    var ts = stream._transformState;
    ts.transforming = false;
    var cb = ts.writecb;
    if (!cb) return stream.emit('error', new Error('no writecb in Transform class'));
    ts.writechunk = null;
    ts.writecb = null;
    if (!util.isNullOrUndefined(data)) stream.push(data);
    if (cb) cb(er);
    var rs = stream._readableState;
    rs.reading = false;
    if (rs.needReadable || rs.length < rs.highWaterMark) stream._read(rs.highWaterMark);
}
function Transform(options) {
    if (!(this instanceof Transform)) return new Transform(options);
    Duplex.call(this, options);
    this._transformState = new TransformState(options, this);
    // when the writable side finishes, then flush out anything remaining.
    var stream = this;
    // start out asking for a readable event once data is transformed.
    this._readableState.needReadable = true;
    // we have implemented the _read method, and done the other things
    // that Readable wants before the first _read call, so unset the
    // sync guard flag.
    this._readableState.sync = false;
    this.once('prefinish', function() {
        if (util.isFunction(this._flush)) this._flush(function(er) {
            done(stream, er);
        });
        else done(stream);
    });
}
Transform.prototype.push = function(chunk, encoding) {
    this._transformState.needTransform = false;
    return Duplex.prototype.push.call(this, chunk, encoding);
};
// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function(chunk, encoding, cb) {
    throw new Error('not implemented');
};
Transform.prototype._write = function(chunk, encoding, cb) {
    var ts = this._transformState;
    ts.writecb = cb;
    ts.writechunk = chunk;
    ts.writeencoding = encoding;
    if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
    }
};
// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function(n) {
    var ts = this._transformState;
    if (!util.isNull(ts.writechunk) && ts.writecb && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
    } else // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
};
function done(stream, er) {
    if (er) return stream.emit('error', er);
    // if there's nothing in the write buffer, then that means
    // that nothing more will ever be provided
    var ws = stream._writableState;
    var ts = stream._transformState;
    if (ws.length) throw new Error('calling transform done when ws.length != 0');
    if (ts.transforming) throw new Error('calling transform done when still transforming');
    return stream.push(null);
}

},{"./_stream_duplex":"8XkxS","core-util-is":"7qlk2","inherits":"d3hL2"}],"gj76M":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.
module.exports = PassThrough;
var Transform = require('./_stream_transform');
/*<replacement>*/ var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/ util.inherits(PassThrough, Transform);
function PassThrough(options) {
    if (!(this instanceof PassThrough)) return new PassThrough(options);
    Transform.call(this, options);
}
PassThrough.prototype._transform = function(chunk, encoding, cb) {
    cb(null, chunk);
};

},{"./_stream_transform":"lDiiK","core-util-is":"7qlk2","inherits":"d3hL2"}],"hTq2l":[function(require,module,exports) {
var process = require("process");
var Transform = require('readable-stream').Transform, inherits = require('inherits');
function DestroyableTransform(opts) {
    Transform.call(this, opts);
    this._destroyed = false;
}
inherits(DestroyableTransform, Transform);
DestroyableTransform.prototype.destroy = function(err) {
    if (this._destroyed) return;
    this._destroyed = true;
    var self = this;
    process.nextTick(function() {
        if (err) self.emit('error', err);
        self.emit('close');
    });
};
// a noop _transform function
function noop(chunk, enc, callback) {
    callback(null, chunk);
}
// create a new export function, used by both the main export and
// the .ctor export, contains common logic for dealing with arguments
function through2(construct) {
    return function(options, transform, flush) {
        if (typeof options == 'function') {
            flush = transform;
            transform = options;
            options = {
            };
        }
        if (typeof transform != 'function') transform = noop;
        if (typeof flush != 'function') flush = null;
        return construct(options, transform, flush);
    };
}
// main export, just make me a transform stream!
module.exports = through2(function(options, transform, flush) {
    var t2 = new DestroyableTransform(options);
    t2._transform = transform;
    if (flush) t2._flush = flush;
    return t2;
});
// make me a reusable prototype that I can `new`, or implicitly `new`
// with a constructor call
module.exports.ctor = through2(function(options, transform, flush) {
    function Through2(override) {
        if (!(this instanceof Through2)) return new Through2(override);
        this.options = Object.assign({
        }, options, override);
        DestroyableTransform.call(this, this.options);
    }
    inherits(Through2, DestroyableTransform);
    Through2.prototype._transform = transform;
    if (flush) Through2.prototype._flush = flush;
    return Through2;
});
module.exports.obj = through2(function(options, transform, flush) {
    var t2 = new DestroyableTransform(Object.assign({
        objectMode: true,
        highWaterMark: 16
    }, options));
    t2._transform = transform;
    if (flush) t2._flush = flush;
    return t2;
});

},{"process":"lDnB8","readable-stream":"f3BUJ","inherits":"d3hL2"}],"f3BUJ":[function(require,module,exports) {
exports = module.exports = require('./lib/_stream_readable.js');
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = require('./lib/_stream_writable.js');
exports.Duplex = require('./lib/_stream_duplex.js');
exports.Transform = require('./lib/_stream_transform.js');
exports.PassThrough = require('./lib/_stream_passthrough.js');
exports.finished = require('./lib/internal/streams/end-of-stream.js');
exports.pipeline = require('./lib/internal/streams/pipeline.js');

},{"./lib/_stream_readable.js":"4zu2I","./lib/_stream_writable.js":"frL27","./lib/_stream_duplex.js":"c3hN6","./lib/_stream_transform.js":"fqE5j","./lib/_stream_passthrough.js":"ac886","./lib/internal/streams/end-of-stream.js":"334CG","./lib/internal/streams/pipeline.js":"dpxjj"}],"4zu2I":[function(require,module,exports) {
var process = require("process");
var global = arguments[3];
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';
module.exports = Readable;
/*<replacement>*/ var Duplex;
/*</replacement>*/ Readable.ReadableState = ReadableState;
/*<replacement>*/ var EE = require('events').EventEmitter;
var EElistenerCount = function EElistenerCount(emitter, type) {
    return emitter.listeners(type).length;
};
/*</replacement>*/ /*<replacement>*/ var Stream = require('./internal/streams/stream');
/*</replacement>*/ var Buffer = require('buffer').Buffer;
var OurUint8Array = global.Uint8Array || function() {
};
function _uint8ArrayToBuffer(chunk) {
    return Buffer.from(chunk);
}
function _isUint8Array(obj) {
    return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*<replacement>*/ var debugUtil = require('util');
var debug;
if (debugUtil && debugUtil.debuglog) debug = debugUtil.debuglog('stream');
else debug = function debug() {
};
/*</replacement>*/ var BufferList = require('./internal/streams/buffer_list');
var destroyImpl = require('./internal/streams/destroy');
var _require = require('./internal/streams/state'), getHighWaterMark = _require.getHighWaterMark;
var _require$codes = require('../errors').codes, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT; // Lazy loaded to improve the startup performance.
var StringDecoder;
var createReadableStreamAsyncIterator;
var from;
require('inherits')(Readable, Stream);
var errorOrDestroy = destroyImpl.errorOrDestroy;
var kProxyEvents = [
    'error',
    'close',
    'destroy',
    'pause',
    'resume'
];
function prependListener(emitter, event, fn) {
    // Sadly this is not cacheable as some libraries bundle their own
    // event emitter implementation with them.
    if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn); // This is a hack to make sure that our error handler is attached before any
    // userland ones.  NEVER DO THIS. This is here only because this code needs
    // to continue to work with older versions of Node.js that do not include
    // the prependListener() method. The goal is to eventually remove this hack.
    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);
    else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);
    else emitter._events[event] = [
        fn,
        emitter._events[event]
    ];
}
function ReadableState(options, stream, isDuplex) {
    Duplex = Duplex || require('./_stream_duplex');
    options = options || {
    }; // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream.
    // These options can be provided separately as readableXXX and writableXXX.
    if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex; // object stream flag. Used to make read(n) ignore n and to
    // make all the buffer merging and length checks go away
    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode; // the point at which it stops calling _read() to fill the buffer
    // Note: 0 is a valid value, means "don't call _read preemptively ever"
    this.highWaterMark = getHighWaterMark(this, options, 'readableHighWaterMark', isDuplex); // A linked list is used to store data chunks instead of an array because the
    // linked list can remove elements from the beginning faster than
    // array.shift()
    this.buffer = new BufferList();
    this.length = 0;
    this.pipes = null;
    this.pipesCount = 0;
    this.flowing = null;
    this.ended = false;
    this.endEmitted = false;
    this.reading = false; // a flag to be able to tell if the event 'readable'/'data' is emitted
    // immediately, or on a later tick.  We set this to true at first, because
    // any actions that shouldn't happen until "later" should generally also
    // not happen before the first read call.
    this.sync = true; // whenever we return null, then we set a flag to say
    // that we're awaiting a 'readable' event emission.
    this.needReadable = false;
    this.emittedReadable = false;
    this.readableListening = false;
    this.resumeScheduled = false;
    this.paused = true; // Should close be emitted on destroy. Defaults to true.
    this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'end' (and potentially 'finish')
    this.autoDestroy = !!options.autoDestroy; // has it been destroyed
    this.destroyed = false; // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || 'utf8'; // the number of writers that are awaiting a drain event in .pipe()s
    this.awaitDrain = 0; // if true, a maybeReadMore has been scheduled
    this.readingMore = false;
    this.decoder = null;
    this.encoding = null;
    if (options.encoding) {
        if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
        this.decoder = new StringDecoder(options.encoding);
        this.encoding = options.encoding;
    }
}
function Readable(options) {
    Duplex = Duplex || require('./_stream_duplex');
    if (!(this instanceof Readable)) return new Readable(options); // Checking for a Stream.Duplex instance is faster here instead of inside
    // the ReadableState constructor, at least with V8 6.5
    var isDuplex = this instanceof Duplex;
    this._readableState = new ReadableState(options, this, isDuplex); // legacy
    this.readable = true;
    if (options) {
        if (typeof options.read === 'function') this._read = options.read;
        if (typeof options.destroy === 'function') this._destroy = options.destroy;
    }
    Stream.call(this);
}
Object.defineProperty(Readable.prototype, 'destroyed', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        if (this._readableState === undefined) return false;
        return this._readableState.destroyed;
    },
    set: function set(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (!this._readableState) return;
         // backward compatibility, the user is explicitly
        // managing destroyed
        this._readableState.destroyed = value;
    }
});
Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;
Readable.prototype._destroy = function(err, cb) {
    cb(err);
}; // Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function(chunk, encoding) {
    var state = this._readableState;
    var skipChunkCheck;
    if (!state.objectMode) {
        if (typeof chunk === 'string') {
            encoding = encoding || state.defaultEncoding;
            if (encoding !== state.encoding) {
                chunk = Buffer.from(chunk, encoding);
                encoding = '';
            }
            skipChunkCheck = true;
        }
    } else skipChunkCheck = true;
    return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
}; // Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function(chunk) {
    return readableAddChunk(this, chunk, null, true, false);
};
function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
    debug('readableAddChunk', chunk);
    var state = stream._readableState;
    if (chunk === null) {
        state.reading = false;
        onEofChunk(stream, state);
    } else {
        var er;
        if (!skipChunkCheck) er = chunkInvalid(state, chunk);
        if (er) errorOrDestroy(stream, er);
        else if (state.objectMode || chunk && chunk.length > 0) {
            if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) chunk = _uint8ArrayToBuffer(chunk);
            if (addToFront) {
                if (state.endEmitted) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
                else addChunk(stream, state, chunk, true);
            } else if (state.ended) errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
            else if (state.destroyed) return false;
            else {
                state.reading = false;
                if (state.decoder && !encoding) {
                    chunk = state.decoder.write(chunk);
                    if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);
                    else maybeReadMore(stream, state);
                } else addChunk(stream, state, chunk, false);
            }
        } else if (!addToFront) {
            state.reading = false;
            maybeReadMore(stream, state);
        }
    } // We can push more data if we are below the highWaterMark.
    // Also, if we have no data yet, we can stand some more bytes.
    // This is to work around cases where hwm=0, such as the repl.
    return !state.ended && (state.length < state.highWaterMark || state.length === 0);
}
function addChunk(stream, state, chunk, addToFront) {
    if (state.flowing && state.length === 0 && !state.sync) {
        state.awaitDrain = 0;
        stream.emit('data', chunk);
    } else {
        // update the buffer info.
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront) state.buffer.unshift(chunk);
        else state.buffer.push(chunk);
        if (state.needReadable) emitReadable(stream);
    }
    maybeReadMore(stream, state);
}
function chunkInvalid(state, chunk) {
    var er;
    if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) er = new ERR_INVALID_ARG_TYPE('chunk', [
        'string',
        'Buffer',
        'Uint8Array'
    ], chunk);
    return er;
}
Readable.prototype.isPaused = function() {
    return this._readableState.flowing === false;
}; // backwards compatibility.
Readable.prototype.setEncoding = function(enc) {
    if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
    var decoder = new StringDecoder(enc);
    this._readableState.decoder = decoder; // If setEncoding(null), decoder.encoding equals utf8
    this._readableState.encoding = this._readableState.decoder.encoding; // Iterate over current buffer to convert already stored Buffers:
    var p = this._readableState.buffer.head;
    var content = '';
    while(p !== null){
        content += decoder.write(p.data);
        p = p.next;
    }
    this._readableState.buffer.clear();
    if (content !== '') this._readableState.buffer.push(content);
    this._readableState.length = content.length;
    return this;
}; // Don't raise the hwm > 1GB
var MAX_HWM = 1073741824;
function computeNewHighWaterMark(n) {
    if (n >= MAX_HWM) // TODO(ronag): Throw ERR_VALUE_OUT_OF_RANGE.
    n = MAX_HWM;
    else {
        // Get the next highest power of 2 to prevent increasing hwm excessively in
        // tiny amounts
        n--;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        n++;
    }
    return n;
} // This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
    if (n <= 0 || state.length === 0 && state.ended) return 0;
    if (state.objectMode) return 1;
    if (n !== n) {
        // Only flow one buffer at a time
        if (state.flowing && state.length) return state.buffer.head.data.length;
        else return state.length;
    } // If we're asking for more than the current hwm, then raise the hwm.
    if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
    if (n <= state.length) return n; // Don't have enough
    if (!state.ended) {
        state.needReadable = true;
        return 0;
    }
    return state.length;
} // you can override either this method, or the async _read(n) below.
Readable.prototype.read = function(n) {
    debug('read', n);
    n = parseInt(n, 10);
    var state = this._readableState;
    var nOrig = n;
    if (n !== 0) state.emittedReadable = false; // if we're doing read(0) to trigger a readable event, but we
    // already have a bunch of data in the buffer, then just trigger
    // the 'readable' event and move on.
    if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
        debug('read: emitReadable', state.length, state.ended);
        if (state.length === 0 && state.ended) endReadable(this);
        else emitReadable(this);
        return null;
    }
    n = howMuchToRead(n, state); // if we've ended, and we're now clear, then finish it up.
    if (n === 0 && state.ended) {
        if (state.length === 0) endReadable(this);
        return null;
    } // All the actual chunk generation logic needs to be
    // *below* the call to _read.  The reason is that in certain
    // synthetic stream cases, such as passthrough streams, _read
    // may be a completely synchronous operation which may change
    // the state of the read buffer, providing enough data when
    // before there was *not* enough.
    //
    // So, the steps are:
    // 1. Figure out what the state of things will be after we do
    // a read from the buffer.
    //
    // 2. If that resulting state will trigger a _read, then call _read.
    // Note that this may be asynchronous, or synchronous.  Yes, it is
    // deeply ugly to write APIs this way, but that still doesn't mean
    // that the Readable class should behave improperly, as streams are
    // designed to be sync/async agnostic.
    // Take note if the _read call is sync or async (ie, if the read call
    // has returned yet), so that we know whether or not it's safe to emit
    // 'readable' etc.
    //
    // 3. Actually pull the requested chunks out of the buffer and return.
    // if we need a readable event, then we need to do some reading.
    var doRead = state.needReadable;
    debug('need readable', doRead); // if we currently have less than the highWaterMark, then also read some
    if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        debug('length less than watermark', doRead);
    } // however, if we've ended, then there's no point, and if we're already
    // reading, then it's unnecessary.
    if (state.ended || state.reading) {
        doRead = false;
        debug('reading or ended', doRead);
    } else if (doRead) {
        debug('do read');
        state.reading = true;
        state.sync = true; // if the length is currently zero, then we *need* a readable event.
        if (state.length === 0) state.needReadable = true; // call internal read method
        this._read(state.highWaterMark);
        state.sync = false; // If _read pushed data synchronously, then `reading` will be false,
        // and we need to re-evaluate how much data we can return to the user.
        if (!state.reading) n = howMuchToRead(nOrig, state);
    }
    var ret;
    if (n > 0) ret = fromList(n, state);
    else ret = null;
    if (ret === null) {
        state.needReadable = state.length <= state.highWaterMark;
        n = 0;
    } else {
        state.length -= n;
        state.awaitDrain = 0;
    }
    if (state.length === 0) {
        // If we have nothing in the buffer, then we want to know
        // as soon as we *do* get something into the buffer.
        if (!state.ended) state.needReadable = true; // If we tried to read() past the EOF, then emit end on the next tick.
        if (nOrig !== n && state.ended) endReadable(this);
    }
    if (ret !== null) this.emit('data', ret);
    return ret;
};
function onEofChunk(stream, state) {
    debug('onEofChunk');
    if (state.ended) return;
    if (state.decoder) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
            state.buffer.push(chunk);
            state.length += state.objectMode ? 1 : chunk.length;
        }
    }
    state.ended = true;
    if (state.sync) // if we are sync, wait until next tick to emit the data.
    // Otherwise we risk emitting data in the flow()
    // the readable code triggers during a read() call
    emitReadable(stream);
    else {
        // emit 'readable' now to make sure it gets picked up.
        state.needReadable = false;
        if (!state.emittedReadable) {
            state.emittedReadable = true;
            emitReadable_(stream);
        }
    }
} // Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
    var state = stream._readableState;
    debug('emitReadable', state.needReadable, state.emittedReadable);
    state.needReadable = false;
    if (!state.emittedReadable) {
        debug('emitReadable', state.flowing);
        state.emittedReadable = true;
        process.nextTick(emitReadable_, stream);
    }
}
function emitReadable_(stream) {
    var state = stream._readableState;
    debug('emitReadable_', state.destroyed, state.length, state.ended);
    if (!state.destroyed && (state.length || state.ended)) {
        stream.emit('readable');
        state.emittedReadable = false;
    } // The stream needs another readable event if
    // 1. It is not flowing, as the flow mechanism will take
    //    care of it.
    // 2. It is not ended.
    // 3. It is below the highWaterMark, so we can schedule
    //    another readable later.
    state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
    flow(stream);
} // at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
    if (!state.readingMore) {
        state.readingMore = true;
        process.nextTick(maybeReadMore_, stream, state);
    }
}
function maybeReadMore_(stream, state) {
    // Attempt to read more data if we should.
    //
    // The conditions for reading more data are (one of):
    // - Not enough data buffered (state.length < state.highWaterMark). The loop
    //   is responsible for filling the buffer with enough data if such data
    //   is available. If highWaterMark is 0 and we are not in the flowing mode
    //   we should _not_ attempt to buffer any extra data. We'll get more data
    //   when the stream consumer calls read() instead.
    // - No data in the buffer, and the stream is in flowing mode. In this mode
    //   the loop below is responsible for ensuring read() is called. Failing to
    //   call read here would abort the flow and there's no other mechanism for
    //   continuing the flow if the stream consumer has just subscribed to the
    //   'data' event.
    //
    // In addition to the above conditions to keep reading data, the following
    // conditions prevent the data from being read:
    // - The stream has ended (state.ended).
    // - There is already a pending 'read' operation (state.reading). This is a
    //   case where the the stream has called the implementation defined _read()
    //   method, but they are processing the call asynchronously and have _not_
    //   called push() with new data. In this case we skip performing more
    //   read()s. The execution ends in this method again after the _read() ends
    //   up calling push() with more data.
    while(!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)){
        var len = state.length;
        debug('maybeReadMore read 0');
        stream.read(0);
        if (len === state.length) break;
    }
    state.readingMore = false;
} // abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function(n) {
    errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED('_read()'));
};
Readable.prototype.pipe = function(dest, pipeOpts) {
    var src = this;
    var state = this._readableState;
    switch(state.pipesCount){
        case 0:
            state.pipes = dest;
            break;
        case 1:
            state.pipes = [
                state.pipes,
                dest
            ];
            break;
        default:
            state.pipes.push(dest);
            break;
    }
    state.pipesCount += 1;
    debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
    var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
    var endFn = doEnd ? onend : unpipe;
    if (state.endEmitted) process.nextTick(endFn);
    else src.once('end', endFn);
    dest.on('unpipe', onunpipe);
    function onunpipe(readable, unpipeInfo) {
        debug('onunpipe');
        if (readable === src) {
            if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
                unpipeInfo.hasUnpiped = true;
                cleanup();
            }
        }
    }
    function onend() {
        debug('onend');
        dest.end();
    } // when the dest drains, it reduces the awaitDrain counter
    // on the source.  This would be more elegant with a .once()
    // handler in flow(), but adding and removing repeatedly is
    // too slow.
    var ondrain = pipeOnDrain(src);
    dest.on('drain', ondrain);
    var cleanedUp = false;
    function cleanup() {
        debug('cleanup'); // cleanup event handlers once the pipe is broken
        dest.removeListener('close', onclose);
        dest.removeListener('finish', onfinish);
        dest.removeListener('drain', ondrain);
        dest.removeListener('error', onerror);
        dest.removeListener('unpipe', onunpipe);
        src.removeListener('end', onend);
        src.removeListener('end', unpipe);
        src.removeListener('data', ondata);
        cleanedUp = true; // if the reader is waiting for a drain event from this
        // specific writer, then it would cause it to never start
        // flowing again.
        // So, if this is awaiting a drain, then we just call it now.
        // If we don't know, then assume that we are waiting for one.
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
    }
    src.on('data', ondata);
    function ondata(chunk) {
        debug('ondata');
        var ret = dest.write(chunk);
        debug('dest.write', ret);
        if (ret === false) {
            // If the user unpiped during `dest.write()`, it is possible
            // to get stuck in a permanently paused state if that write
            // also returned false.
            // => Check whether `dest` is still a piping destination.
            if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
                debug('false write response, pause', state.awaitDrain);
                state.awaitDrain++;
            }
            src.pause();
        }
    } // if the dest has an error, then stop piping into it.
    // however, don't suppress the throwing behavior for this.
    function onerror(er) {
        debug('onerror', er);
        unpipe();
        dest.removeListener('error', onerror);
        if (EElistenerCount(dest, 'error') === 0) errorOrDestroy(dest, er);
    } // Make sure our error handler is attached before userland ones.
    prependListener(dest, 'error', onerror); // Both close and finish should trigger unpipe, but only once.
    function onclose() {
        dest.removeListener('finish', onfinish);
        unpipe();
    }
    dest.once('close', onclose);
    function onfinish() {
        debug('onfinish');
        dest.removeListener('close', onclose);
        unpipe();
    }
    dest.once('finish', onfinish);
    function unpipe() {
        debug('unpipe');
        src.unpipe(dest);
    } // tell the dest that it's being piped to
    dest.emit('pipe', src); // start the flow if it hasn't been started already.
    if (!state.flowing) {
        debug('pipe resume');
        src.resume();
    }
    return dest;
};
function pipeOnDrain(src) {
    return function pipeOnDrainFunctionResult() {
        var state = src._readableState;
        debug('pipeOnDrain', state.awaitDrain);
        if (state.awaitDrain) state.awaitDrain--;
        if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
            state.flowing = true;
            flow(src);
        }
    };
}
Readable.prototype.unpipe = function(dest) {
    var state = this._readableState;
    var unpipeInfo = {
        hasUnpiped: false
    }; // if we're not piping anywhere, then do nothing.
    if (state.pipesCount === 0) return this; // just one destination.  most common case.
    if (state.pipesCount === 1) {
        // passed in one, but it's not the right one.
        if (dest && dest !== state.pipes) return this;
        if (!dest) dest = state.pipes; // got a match.
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest) dest.emit('unpipe', this, unpipeInfo);
        return this;
    } // slow case. multiple pipe destinations.
    if (!dest) {
        // remove all.
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for(var i = 0; i < len; i++)dests[i].emit('unpipe', this, {
            hasUnpiped: false
        });
        return this;
    } // try to find the right one.
    var index = indexOf(state.pipes, dest);
    if (index === -1) return this;
    state.pipes.splice(index, 1);
    state.pipesCount -= 1;
    if (state.pipesCount === 1) state.pipes = state.pipes[0];
    dest.emit('unpipe', this, unpipeInfo);
    return this;
}; // set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function(ev, fn) {
    var res = Stream.prototype.on.call(this, ev, fn);
    var state = this._readableState;
    if (ev === 'data') {
        // update readableListening so that resume() may be a no-op
        // a few lines down. This is needed to support once('readable').
        state.readableListening = this.listenerCount('readable') > 0; // Try start flowing on next tick if stream isn't explicitly paused
        if (state.flowing !== false) this.resume();
    } else if (ev === 'readable') {
        if (!state.endEmitted && !state.readableListening) {
            state.readableListening = state.needReadable = true;
            state.flowing = false;
            state.emittedReadable = false;
            debug('on readable', state.length, state.reading);
            if (state.length) emitReadable(this);
            else if (!state.reading) process.nextTick(nReadingNextTick, this);
        }
    }
    return res;
};
Readable.prototype.addListener = Readable.prototype.on;
Readable.prototype.removeListener = function(ev, fn) {
    var res = Stream.prototype.removeListener.call(this, ev, fn);
    if (ev === 'readable') // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
    return res;
};
Readable.prototype.removeAllListeners = function(ev) {
    var res = Stream.prototype.removeAllListeners.apply(this, arguments);
    if (ev === 'readable' || ev === undefined) // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
    return res;
};
function updateReadableListening(self) {
    var state = self._readableState;
    state.readableListening = self.listenerCount('readable') > 0;
    if (state.resumeScheduled && !state.paused) // flowing needs to be set to true now, otherwise
    // the upcoming resume will not flow.
    state.flowing = true; // crude way to check if we should resume
    else if (self.listenerCount('data') > 0) self.resume();
}
function nReadingNextTick(self) {
    debug('readable nexttick read 0');
    self.read(0);
} // pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function() {
    var state = this._readableState;
    if (!state.flowing) {
        debug('resume'); // we flow only if there is no one listening
        // for readable, but we still have to call
        // resume()
        state.flowing = !state.readableListening;
        resume(this, state);
    }
    state.paused = false;
    return this;
};
function resume(stream, state) {
    if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        process.nextTick(resume_, stream, state);
    }
}
function resume_(stream, state) {
    debug('resume', state.reading);
    if (!state.reading) stream.read(0);
    state.resumeScheduled = false;
    stream.emit('resume');
    flow(stream);
    if (state.flowing && !state.reading) stream.read(0);
}
Readable.prototype.pause = function() {
    debug('call pause flowing=%j', this._readableState.flowing);
    if (this._readableState.flowing !== false) {
        debug('pause');
        this._readableState.flowing = false;
        this.emit('pause');
    }
    this._readableState.paused = true;
    return this;
};
function flow(stream) {
    var state = stream._readableState;
    debug('flow', state.flowing);
    while(state.flowing && stream.read() !== null);
} // wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function(stream) {
    var _this = this;
    var state = this._readableState;
    var paused = false;
    stream.on('end', function() {
        debug('wrapped end');
        if (state.decoder && !state.ended) {
            var chunk = state.decoder.end();
            if (chunk && chunk.length) _this.push(chunk);
        }
        _this.push(null);
    });
    stream.on('data', function(chunk) {
        debug('wrapped data');
        if (state.decoder) chunk = state.decoder.write(chunk); // don't skip over falsy values in objectMode
        if (state.objectMode && (chunk === null || chunk === undefined)) return;
        else if (!state.objectMode && (!chunk || !chunk.length)) return;
        var ret = _this.push(chunk);
        if (!ret) {
            paused = true;
            stream.pause();
        }
    }); // proxy all the other methods.
    // important when wrapping filters and duplexes.
    for(var i in stream)if (this[i] === undefined && typeof stream[i] === 'function') this[i] = (function methodWrap(method) {
        return function methodWrapReturnFunction() {
            return stream[method].apply(stream, arguments);
        };
    })(i);
     // proxy certain important events.
    for(var n1 = 0; n1 < kProxyEvents.length; n1++)stream.on(kProxyEvents[n1], this.emit.bind(this, kProxyEvents[n1]));
     // when we try to consume some more bytes, simply unpause the
    // underlying stream.
    this._read = function(n) {
        debug('wrapped _read', n);
        if (paused) {
            paused = false;
            stream.resume();
        }
    };
    return this;
};
if (typeof Symbol === 'function') Readable.prototype[Symbol.asyncIterator] = function() {
    if (createReadableStreamAsyncIterator === undefined) createReadableStreamAsyncIterator = require('./internal/streams/async_iterator');
    return createReadableStreamAsyncIterator(this);
};
Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState.highWaterMark;
    }
});
Object.defineProperty(Readable.prototype, 'readableBuffer', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState && this._readableState.buffer;
    }
});
Object.defineProperty(Readable.prototype, 'readableFlowing', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState.flowing;
    },
    set: function set(state) {
        if (this._readableState) this._readableState.flowing = state;
    }
}); // exposed for testing purposes only.
Readable._fromList = fromList;
Object.defineProperty(Readable.prototype, 'readableLength', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState.length;
    }
}); // Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
    // nothing buffered
    if (state.length === 0) return null;
    var ret;
    if (state.objectMode) ret = state.buffer.shift();
    else if (!n || n >= state.length) {
        // read it all, truncate the list
        if (state.decoder) ret = state.buffer.join('');
        else if (state.buffer.length === 1) ret = state.buffer.first();
        else ret = state.buffer.concat(state.length);
        state.buffer.clear();
    } else // read part of list
    ret = state.buffer.consume(n, state.decoder);
    return ret;
}
function endReadable(stream) {
    var state = stream._readableState;
    debug('endReadable', state.endEmitted);
    if (!state.endEmitted) {
        state.ended = true;
        process.nextTick(endReadableNT, state, stream);
    }
}
function endReadableNT(state, stream) {
    debug('endReadableNT', state.endEmitted, state.length); // Check that we didn't get one last unshift.
    if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit('end');
        if (state.autoDestroy) {
            // In case of duplex streams we need a way to detect
            // if the writable side is ready for autoDestroy as well
            var wState = stream._writableState;
            if (!wState || wState.autoDestroy && wState.finished) stream.destroy();
        }
    }
}
if (typeof Symbol === 'function') Readable.from = function(iterable, opts) {
    if (from === undefined) from = require('./internal/streams/from');
    return from(Readable, iterable, opts);
};
function indexOf(xs, x) {
    for(var i = 0, l = xs.length; i < l; i++){
        if (xs[i] === x) return i;
    }
    return -1;
}

},{"process":"lDnB8","events":"bHM3D","./internal/streams/stream":"fGAs8","buffer":"bOetu","util":"joWnX","./internal/streams/buffer_list":"f96zt","./internal/streams/destroy":"6GE29","./internal/streams/state":"kxEAr","../errors":"9reMm","inherits":"d3hL2","./_stream_duplex":"c3hN6","string_decoder/":"vLxWd","./internal/streams/async_iterator":"9S1GQ","./internal/streams/from":"lbk31"}],"fGAs8":[function(require,module,exports) {
module.exports = require('events').EventEmitter;

},{"events":"bHM3D"}],"f96zt":[function(require,module,exports) {
'use strict';
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var _require = require('buffer'), Buffer = _require.Buffer;
var _require2 = require('util'), inspect = _require2.inspect;
var custom = inspect && inspect.custom || 'inspect';
function copyBuffer(src, target, offset) {
    Buffer.prototype.copy.call(src, target, offset);
}
module.exports = /*#__PURE__*/ (function() {
    function BufferList() {
        _classCallCheck(this, BufferList);
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    _createClass(BufferList, [
        {
            key: "push",
            value: function push(v) {
                var entry = {
                    data: v,
                    next: null
                };
                if (this.length > 0) this.tail.next = entry;
                else this.head = entry;
                this.tail = entry;
                ++this.length;
            }
        },
        {
            key: "unshift",
            value: function unshift(v) {
                var entry = {
                    data: v,
                    next: this.head
                };
                if (this.length === 0) this.tail = entry;
                this.head = entry;
                ++this.length;
            }
        },
        {
            key: "shift",
            value: function shift() {
                if (this.length === 0) return;
                var ret = this.head.data;
                if (this.length === 1) this.head = this.tail = null;
                else this.head = this.head.next;
                --this.length;
                return ret;
            }
        },
        {
            key: "clear",
            value: function clear() {
                this.head = this.tail = null;
                this.length = 0;
            }
        },
        {
            key: "join",
            value: function join(s) {
                if (this.length === 0) return '';
                var p = this.head;
                var ret = '' + p.data;
                while(p = p.next)ret += s + p.data;
                return ret;
            }
        },
        {
            key: "concat",
            value: function concat(n) {
                if (this.length === 0) return Buffer.alloc(0);
                var ret = Buffer.allocUnsafe(n >>> 0);
                var p = this.head;
                var i = 0;
                while(p){
                    copyBuffer(p.data, ret, i);
                    i += p.data.length;
                    p = p.next;
                }
                return ret;
            } // Consumes a specified amount of bytes or characters from the buffered data.
        },
        {
            key: "consume",
            value: function consume(n, hasStrings) {
                var ret;
                if (n < this.head.data.length) {
                    // `slice` is the same for buffers and strings.
                    ret = this.head.data.slice(0, n);
                    this.head.data = this.head.data.slice(n);
                } else if (n === this.head.data.length) // First chunk is a perfect match.
                ret = this.shift();
                else // Result spans more than one buffer.
                ret = hasStrings ? this._getString(n) : this._getBuffer(n);
                return ret;
            }
        },
        {
            key: "first",
            value: function first() {
                return this.head.data;
            } // Consumes a specified amount of characters from the buffered data.
        },
        {
            key: "_getString",
            value: function _getString(n) {
                var p = this.head;
                var c = 1;
                var ret = p.data;
                n -= ret.length;
                while(p = p.next){
                    var str = p.data;
                    var nb = n > str.length ? str.length : n;
                    if (nb === str.length) ret += str;
                    else ret += str.slice(0, n);
                    n -= nb;
                    if (n === 0) {
                        if (nb === str.length) {
                            ++c;
                            if (p.next) this.head = p.next;
                            else this.head = this.tail = null;
                        } else {
                            this.head = p;
                            p.data = str.slice(nb);
                        }
                        break;
                    }
                    ++c;
                }
                this.length -= c;
                return ret;
            } // Consumes a specified amount of bytes from the buffered data.
        },
        {
            key: "_getBuffer",
            value: function _getBuffer(n) {
                var ret = Buffer.allocUnsafe(n);
                var p = this.head;
                var c = 1;
                p.data.copy(ret);
                n -= p.data.length;
                while(p = p.next){
                    var buf = p.data;
                    var nb = n > buf.length ? buf.length : n;
                    buf.copy(ret, ret.length - n, 0, nb);
                    n -= nb;
                    if (n === 0) {
                        if (nb === buf.length) {
                            ++c;
                            if (p.next) this.head = p.next;
                            else this.head = this.tail = null;
                        } else {
                            this.head = p;
                            p.data = buf.slice(nb);
                        }
                        break;
                    }
                    ++c;
                }
                this.length -= c;
                return ret;
            } // Make sure the linked list only shows the minimal necessary information.
        },
        {
            key: custom,
            value: function value(_, options) {
                return inspect(this, _objectSpread({
                }, options, {
                    // Only inspect one level.
                    depth: 0,
                    // It should not recurse.
                    customInspect: false
                }));
            }
        }
    ]);
    return BufferList;
})();

},{"buffer":"bOetu","util":"joWnX"}],"6GE29":[function(require,module,exports) {
var process = require("process");
'use strict'; // undocumented cb() API, needed for core, not for public API
function destroy(err1, cb) {
    var _this = this;
    var readableDestroyed = this._readableState && this._readableState.destroyed;
    var writableDestroyed = this._writableState && this._writableState.destroyed;
    if (readableDestroyed || writableDestroyed) {
        if (cb) cb(err1);
        else if (err1) {
            if (!this._writableState) process.nextTick(emitErrorNT, this, err1);
            else if (!this._writableState.errorEmitted) {
                this._writableState.errorEmitted = true;
                process.nextTick(emitErrorNT, this, err1);
            }
        }
        return this;
    } // we set destroyed to true before firing error callbacks in order
    // to make it re-entrance safe in case destroy() is called within callbacks
    if (this._readableState) this._readableState.destroyed = true;
     // if this is a duplex stream mark the writable part as destroyed as well
    if (this._writableState) this._writableState.destroyed = true;
    this._destroy(err1 || null, function(err) {
        if (!cb && err) {
            if (!_this._writableState) process.nextTick(emitErrorAndCloseNT, _this, err);
            else if (!_this._writableState.errorEmitted) {
                _this._writableState.errorEmitted = true;
                process.nextTick(emitErrorAndCloseNT, _this, err);
            } else process.nextTick(emitCloseNT, _this);
        } else if (cb) {
            process.nextTick(emitCloseNT, _this);
            cb(err);
        } else process.nextTick(emitCloseNT, _this);
    });
    return this;
}
function emitErrorAndCloseNT(self, err) {
    emitErrorNT(self, err);
    emitCloseNT(self);
}
function emitCloseNT(self) {
    if (self._writableState && !self._writableState.emitClose) return;
    if (self._readableState && !self._readableState.emitClose) return;
    self.emit('close');
}
function undestroy() {
    if (this._readableState) {
        this._readableState.destroyed = false;
        this._readableState.reading = false;
        this._readableState.ended = false;
        this._readableState.endEmitted = false;
    }
    if (this._writableState) {
        this._writableState.destroyed = false;
        this._writableState.ended = false;
        this._writableState.ending = false;
        this._writableState.finalCalled = false;
        this._writableState.prefinished = false;
        this._writableState.finished = false;
        this._writableState.errorEmitted = false;
    }
}
function emitErrorNT(self, err) {
    self.emit('error', err);
}
function errorOrDestroy(stream, err) {
    // We have tests that rely on errors being emitted
    // in the same tick, so changing this is semver major.
    // For now when you opt-in to autoDestroy we allow
    // the error to be emitted nextTick. In a future
    // semver major update we should change the default to this.
    var rState = stream._readableState;
    var wState = stream._writableState;
    if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);
    else stream.emit('error', err);
}
module.exports = {
    destroy: destroy,
    undestroy: undestroy,
    errorOrDestroy: errorOrDestroy
};

},{"process":"lDnB8"}],"kxEAr":[function(require,module,exports) {
'use strict';
var ERR_INVALID_OPT_VALUE = require('../../../errors').codes.ERR_INVALID_OPT_VALUE;
function highWaterMarkFrom(options, isDuplex, duplexKey) {
    return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
}
function getHighWaterMark(state, options, duplexKey, isDuplex) {
    var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
    if (hwm != null) {
        if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
            var name = isDuplex ? duplexKey : 'highWaterMark';
            throw new ERR_INVALID_OPT_VALUE(name, hwm);
        }
        return Math.floor(hwm);
    } // Default value
    return state.objectMode ? 16 : 16384;
}
module.exports = {
    getHighWaterMark: getHighWaterMark
};

},{"../../../errors":"9reMm"}],"9reMm":[function(require,module,exports) {
'use strict';
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
var codes = {
};
function createErrorType(code, message, Base) {
    if (!Base) Base = Error;
    function getMessage(arg1, arg2, arg3) {
        if (typeof message === 'string') return message;
        else return message(arg1, arg2, arg3);
    }
    var NodeError1 = /*#__PURE__*/ function(_Base) {
        _inheritsLoose(NodeError, _Base);
        function NodeError(arg1, arg2, arg3) {
            return _Base.call(this, getMessage(arg1, arg2, arg3)) || this;
        }
        return NodeError;
    }(Base);
    NodeError1.prototype.name = Base.name;
    NodeError1.prototype.code = code;
    codes[code] = NodeError1;
} // https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js
function oneOf(expected, thing) {
    if (Array.isArray(expected)) {
        var len = expected.length;
        expected = expected.map(function(i) {
            return String(i);
        });
        if (len > 2) return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(', '), ", or ") + expected[len - 1];
        else if (len === 2) return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
        else return "of ".concat(thing, " ").concat(expected[0]);
    } else return "of ".concat(thing, " ").concat(String(expected));
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
function startsWith(str, search, pos) {
    return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function endsWith(str, search, this_len) {
    if (this_len === undefined || this_len > str.length) this_len = str.length;
    return str.substring(this_len - search.length, this_len) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
function includes(str, search, start) {
    if (typeof start !== 'number') start = 0;
    if (start + search.length > str.length) return false;
    else return str.indexOf(search, start) !== -1;
}
createErrorType('ERR_INVALID_OPT_VALUE', function(name, value) {
    return 'The value "' + value + '" is invalid for option "' + name + '"';
}, TypeError);
createErrorType('ERR_INVALID_ARG_TYPE', function(name, expected, actual) {
    // determiner: 'must be' or 'must not be'
    var determiner;
    if (typeof expected === 'string' && startsWith(expected, 'not ')) {
        determiner = 'must not be';
        expected = expected.replace(/^not /, '');
    } else determiner = 'must be';
    var msg;
    if (endsWith(name, ' argument')) // For cases like 'first argument'
    msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
    else {
        var type = includes(name, '.') ? 'property' : 'argument';
        msg = "The \"".concat(name, "\" ").concat(type, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
    }
    msg += ". Received type ".concat(typeof actual);
    return msg;
}, TypeError);
createErrorType('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF');
createErrorType('ERR_METHOD_NOT_IMPLEMENTED', function(name) {
    return 'The ' + name + ' method is not implemented';
});
createErrorType('ERR_STREAM_PREMATURE_CLOSE', 'Premature close');
createErrorType('ERR_STREAM_DESTROYED', function(name) {
    return 'Cannot call ' + name + ' after a stream was destroyed';
});
createErrorType('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times');
createErrorType('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable');
createErrorType('ERR_STREAM_WRITE_AFTER_END', 'write after end');
createErrorType('ERR_STREAM_NULL_VALUES', 'May not write null values to stream', TypeError);
createErrorType('ERR_UNKNOWN_ENCODING', function(arg) {
    return 'Unknown encoding: ' + arg;
}, TypeError);
createErrorType('ERR_STREAM_UNSHIFT_AFTER_END_EVENT', 'stream.unshift() after end event');
module.exports.codes = codes;

},{}],"c3hN6":[function(require,module,exports) {
var process = require("process");
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.
'use strict';
/*<replacement>*/ var objectKeys = Object.keys || function(obj) {
    var keys = [];
    for(var key in obj)keys.push(key);
    return keys;
};
/*</replacement>*/ module.exports = Duplex;
var Readable = require('./_stream_readable');
var Writable = require('./_stream_writable');
require('inherits')(Duplex, Readable);
// Allow the keys array to be GC'ed.
var keys1 = objectKeys(Writable.prototype);
for(var v = 0; v < keys1.length; v++){
    var method = keys1[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
}
function Duplex(options) {
    if (!(this instanceof Duplex)) return new Duplex(options);
    Readable.call(this, options);
    Writable.call(this, options);
    this.allowHalfOpen = true;
    if (options) {
        if (options.readable === false) this.readable = false;
        if (options.writable === false) this.writable = false;
        if (options.allowHalfOpen === false) {
            this.allowHalfOpen = false;
            this.once('end', onend);
        }
    }
}
Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.highWaterMark;
    }
});
Object.defineProperty(Duplex.prototype, 'writableBuffer', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState && this._writableState.getBuffer();
    }
});
Object.defineProperty(Duplex.prototype, 'writableLength', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.length;
    }
}); // the no-half-open enforcer
function onend() {
    // If the writable side ended, then we're ok.
    if (this._writableState.ended) return; // no more data can be written.
    // But allow more writes to happen in this tick.
    process.nextTick(onEndNT, this);
}
function onEndNT(self) {
    self.end();
}
Object.defineProperty(Duplex.prototype, 'destroyed', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        if (this._readableState === undefined || this._writableState === undefined) return false;
        return this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function set(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (this._readableState === undefined || this._writableState === undefined) return;
         // backward compatibility, the user is explicitly
        // managing destroyed
        this._readableState.destroyed = value;
        this._writableState.destroyed = value;
    }
});

},{"process":"lDnB8","./_stream_readable":"4zu2I","./_stream_writable":"frL27","inherits":"d3hL2"}],"frL27":[function(require,module,exports) {
var process = require("process");
var global = arguments[3];
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.
'use strict';
module.exports = Writable;
/* <replacement> */ function WriteReq(chunk, encoding, cb) {
    this.chunk = chunk;
    this.encoding = encoding;
    this.callback = cb;
    this.next = null;
} // It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
    var _this = this;
    this.next = null;
    this.entry = null;
    this.finish = function() {
        onCorkedFinish(_this, state);
    };
}
/* </replacement> */ /*<replacement>*/ var Duplex;
/*</replacement>*/ Writable.WritableState = WritableState;
/*<replacement>*/ var internalUtil = {
    deprecate: require('util-deprecate')
};
/*</replacement>*/ /*<replacement>*/ var Stream = require('./internal/streams/stream');
/*</replacement>*/ var Buffer = require('buffer').Buffer;
var OurUint8Array = global.Uint8Array || function() {
};
function _uint8ArrayToBuffer(chunk) {
    return Buffer.from(chunk);
}
function _isUint8Array(obj) {
    return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
var destroyImpl = require('./internal/streams/destroy');
var _require = require('./internal/streams/state'), getHighWaterMark = _require.getHighWaterMark;
var _require$codes = require('../errors').codes, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK, ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED, ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES, ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END, ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;
var errorOrDestroy = destroyImpl.errorOrDestroy;
require('inherits')(Writable, Stream);
function nop() {
}
function WritableState(options, stream, isDuplex) {
    Duplex = Duplex || require('./_stream_duplex');
    options = options || {
    }; // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream,
    // e.g. options.readableObjectMode vs. options.writableObjectMode, etc.
    if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex; // object stream flag to indicate whether or not this stream
    // contains buffers or objects.
    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode; // the point at which write() starts returning false
    // Note: 0 is a valid value, means that we always return false if
    // the entire buffer is not flushed immediately on write()
    this.highWaterMark = getHighWaterMark(this, options, 'writableHighWaterMark', isDuplex); // if _final has been called
    this.finalCalled = false; // drain event flag.
    this.needDrain = false; // at the start of calling end()
    this.ending = false; // when end() has been called, and returned
    this.ended = false; // when 'finish' is emitted
    this.finished = false; // has it been destroyed
    this.destroyed = false; // should we decode strings into buffers before passing to _write?
    // this is here so that some node-core streams can optimize string
    // handling at a lower level.
    var noDecode = options.decodeStrings === false;
    this.decodeStrings = !noDecode; // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || 'utf8'; // not an actual buffer we keep track of, but a measurement
    // of how much we're waiting to get pushed to some underlying
    // socket or file.
    this.length = 0; // a flag to see when we're in the middle of a write.
    this.writing = false; // when true all writes will be buffered until .uncork() call
    this.corked = 0; // a flag to be able to tell if the onwrite cb is called immediately,
    // or on a later tick.  We set this to true at first, because any
    // actions that shouldn't happen until "later" should generally also
    // not happen before the first write call.
    this.sync = true; // a flag to know if we're processing previously buffered items, which
    // may call the _write() callback in the same tick, so that we don't
    // end up in an overlapped onwrite situation.
    this.bufferProcessing = false; // the callback that's passed to _write(chunk,cb)
    this.onwrite = function(er) {
        onwrite(stream, er);
    }; // the callback that the user supplies to write(chunk,encoding,cb)
    this.writecb = null; // the amount that is being written when _write is called.
    this.writelen = 0;
    this.bufferedRequest = null;
    this.lastBufferedRequest = null; // number of pending user-supplied write callbacks
    // this must be 0 before 'finish' can be emitted
    this.pendingcb = 0; // emit prefinish if the only thing we're waiting for is _write cbs
    // This is relevant for synchronous Transform streams
    this.prefinished = false; // True if the error was already emitted and should not be thrown again
    this.errorEmitted = false; // Should close be emitted on destroy. Defaults to true.
    this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'finish' (and potentially 'end')
    this.autoDestroy = !!options.autoDestroy; // count buffered requests
    this.bufferedRequestCount = 0; // allocate the first CorkedRequest, there is always
    // one allocated and free to use, and we maintain at most two
    this.corkedRequestsFree = new CorkedRequest(this);
}
WritableState.prototype.getBuffer = function getBuffer() {
    var current = this.bufferedRequest;
    var out = [];
    while(current){
        out.push(current);
        current = current.next;
    }
    return out;
};
(function() {
    try {
        Object.defineProperty(WritableState.prototype, 'buffer', {
            get: internalUtil.deprecate(function writableStateBufferGetter() {
                return this.getBuffer();
            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", 'DEP0003')
        });
    } catch (_) {
    }
})(); // Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var realHasInstance;
if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
    realHasInstance = Function.prototype[Symbol.hasInstance];
    Object.defineProperty(Writable, Symbol.hasInstance, {
        value: function value(object) {
            if (realHasInstance.call(this, object)) return true;
            if (this !== Writable) return false;
            return object && object._writableState instanceof WritableState;
        }
    });
} else realHasInstance = function realHasInstance(object) {
    return object instanceof this;
};
function Writable(options) {
    Duplex = Duplex || require('./_stream_duplex'); // Writable ctor is applied to Duplexes, too.
    // `realHasInstance` is necessary because using plain `instanceof`
    // would return false, as no `_writableState` property is attached.
    // Trying to use the custom `instanceof` for Writable here will also break the
    // Node.js LazyTransform implementation, which has a non-trivial getter for
    // `_writableState` that would lead to infinite recursion.
    // Checking for a Stream.Duplex instance is faster here instead of inside
    // the WritableState constructor, at least with V8 6.5
    var isDuplex = this instanceof Duplex;
    if (!isDuplex && !realHasInstance.call(Writable, this)) return new Writable(options);
    this._writableState = new WritableState(options, this, isDuplex); // legacy.
    this.writable = true;
    if (options) {
        if (typeof options.write === 'function') this._write = options.write;
        if (typeof options.writev === 'function') this._writev = options.writev;
        if (typeof options.destroy === 'function') this._destroy = options.destroy;
        if (typeof options.final === 'function') this._final = options.final;
    }
    Stream.call(this);
} // Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function() {
    errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
};
function writeAfterEnd(stream, cb) {
    var er = new ERR_STREAM_WRITE_AFTER_END(); // TODO: defer error events consistently everywhere, not just the cb
    errorOrDestroy(stream, er);
    process.nextTick(cb, er);
} // Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function validChunk(stream, state, chunk, cb) {
    var er;
    if (chunk === null) er = new ERR_STREAM_NULL_VALUES();
    else if (typeof chunk !== 'string' && !state.objectMode) er = new ERR_INVALID_ARG_TYPE('chunk', [
        'string',
        'Buffer'
    ], chunk);
    if (er) {
        errorOrDestroy(stream, er);
        process.nextTick(cb, er);
        return false;
    }
    return true;
}
Writable.prototype.write = function(chunk, encoding, cb) {
    var state = this._writableState;
    var ret = false;
    var isBuf = !state.objectMode && _isUint8Array(chunk);
    if (isBuf && !Buffer.isBuffer(chunk)) chunk = _uint8ArrayToBuffer(chunk);
    if (typeof encoding === 'function') {
        cb = encoding;
        encoding = null;
    }
    if (isBuf) encoding = 'buffer';
    else if (!encoding) encoding = state.defaultEncoding;
    if (typeof cb !== 'function') cb = nop;
    if (state.ending) writeAfterEnd(this, cb);
    else if (isBuf || validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
    }
    return ret;
};
Writable.prototype.cork = function() {
    this._writableState.corked++;
};
Writable.prototype.uncork = function() {
    var state = this._writableState;
    if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
    }
};
Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
    // node::ParseEncoding() requires lower case.
    if (typeof encoding === 'string') encoding = encoding.toLowerCase();
    if (!([
        'hex',
        'utf8',
        'utf-8',
        'ascii',
        'binary',
        'base64',
        'ucs2',
        'ucs-2',
        'utf16le',
        'utf-16le',
        'raw'
    ].indexOf((encoding + '').toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
    this._writableState.defaultEncoding = encoding;
    return this;
};
Object.defineProperty(Writable.prototype, 'writableBuffer', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState && this._writableState.getBuffer();
    }
});
function decodeChunk(state, chunk, encoding) {
    if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') chunk = Buffer.from(chunk, encoding);
    return chunk;
}
Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.highWaterMark;
    }
}); // if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
    if (!isBuf) {
        var newChunk = decodeChunk(state, chunk, encoding);
        if (chunk !== newChunk) {
            isBuf = true;
            encoding = 'buffer';
            chunk = newChunk;
        }
    }
    var len = state.objectMode ? 1 : chunk.length;
    state.length += len;
    var ret = state.length < state.highWaterMark; // we must ensure that previous needDrain will not be reset to false.
    if (!ret) state.needDrain = true;
    if (state.writing || state.corked) {
        var last = state.lastBufferedRequest;
        state.lastBufferedRequest = {
            chunk: chunk,
            encoding: encoding,
            isBuf: isBuf,
            callback: cb,
            next: null
        };
        if (last) last.next = state.lastBufferedRequest;
        else state.bufferedRequest = state.lastBufferedRequest;
        state.bufferedRequestCount += 1;
    } else doWrite(stream, state, false, len, chunk, encoding, cb);
    return ret;
}
function doWrite(stream, state, writev, len, chunk, encoding, cb) {
    state.writelen = len;
    state.writecb = cb;
    state.writing = true;
    state.sync = true;
    if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED('write'));
    else if (writev) stream._writev(chunk, state.onwrite);
    else stream._write(chunk, encoding, state.onwrite);
    state.sync = false;
}
function onwriteError(stream, state, sync, er, cb) {
    --state.pendingcb;
    if (sync) {
        // defer the callback if we are being called synchronously
        // to avoid piling up things on the stack
        process.nextTick(cb, er); // this can emit finish, and it will always happen
        // after error
        process.nextTick(finishMaybe, stream, state);
        stream._writableState.errorEmitted = true;
        errorOrDestroy(stream, er);
    } else {
        // the caller expect this to happen before if
        // it is async
        cb(er);
        stream._writableState.errorEmitted = true;
        errorOrDestroy(stream, er); // this can emit finish, but finish must
        // always follow error
        finishMaybe(stream, state);
    }
}
function onwriteStateUpdate(state) {
    state.writing = false;
    state.writecb = null;
    state.length -= state.writelen;
    state.writelen = 0;
}
function onwrite(stream, er) {
    var state = stream._writableState;
    var sync = state.sync;
    var cb = state.writecb;
    if (typeof cb !== 'function') throw new ERR_MULTIPLE_CALLBACK();
    onwriteStateUpdate(state);
    if (er) onwriteError(stream, state, sync, er, cb);
    else {
        // Check if we're actually ready to finish, but don't emit yet
        var finished = needFinish(state) || stream.destroyed;
        if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(stream, state);
        if (sync) process.nextTick(afterWrite, stream, state, finished, cb);
        else afterWrite(stream, state, finished, cb);
    }
}
function afterWrite(stream, state, finished, cb) {
    if (!finished) onwriteDrain(stream, state);
    state.pendingcb--;
    cb();
    finishMaybe(stream, state);
} // Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
    if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit('drain');
    }
} // if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
    state.bufferProcessing = true;
    var entry = state.bufferedRequest;
    if (stream._writev && entry && entry.next) {
        // Fast case, write everything using _writev()
        var l = state.bufferedRequestCount;
        var buffer = new Array(l);
        var holder = state.corkedRequestsFree;
        holder.entry = entry;
        var count = 0;
        var allBuffers = true;
        while(entry){
            buffer[count] = entry;
            if (!entry.isBuf) allBuffers = false;
            entry = entry.next;
            count += 1;
        }
        buffer.allBuffers = allBuffers;
        doWrite(stream, state, true, state.length, buffer, '', holder.finish); // doWrite is almost always async, defer these to save a bit of time
        // as the hot path ends with doWrite
        state.pendingcb++;
        state.lastBufferedRequest = null;
        if (holder.next) {
            state.corkedRequestsFree = holder.next;
            holder.next = null;
        } else state.corkedRequestsFree = new CorkedRequest(state);
        state.bufferedRequestCount = 0;
    } else {
        // Slow case, write chunks one-by-one
        while(entry){
            var chunk = entry.chunk;
            var encoding = entry.encoding;
            var cb = entry.callback;
            var len = state.objectMode ? 1 : chunk.length;
            doWrite(stream, state, false, len, chunk, encoding, cb);
            entry = entry.next;
            state.bufferedRequestCount--; // if we didn't call the onwrite immediately, then
            // it means that we need to wait until it does.
            // also, that means that the chunk and cb are currently
            // being processed, so move the buffer counter past them.
            if (state.writing) break;
        }
        if (entry === null) state.lastBufferedRequest = null;
    }
    state.bufferedRequest = entry;
    state.bufferProcessing = false;
}
Writable.prototype._write = function(chunk, encoding, cb) {
    cb(new ERR_METHOD_NOT_IMPLEMENTED('_write()'));
};
Writable.prototype._writev = null;
Writable.prototype.end = function(chunk, encoding, cb) {
    var state = this._writableState;
    if (typeof chunk === 'function') {
        cb = chunk;
        chunk = null;
        encoding = null;
    } else if (typeof encoding === 'function') {
        cb = encoding;
        encoding = null;
    }
    if (chunk !== null && chunk !== undefined) this.write(chunk, encoding); // .end() fully uncorks
    if (state.corked) {
        state.corked = 1;
        this.uncork();
    } // ignore unnecessary end() calls.
    if (!state.ending) endWritable(this, state, cb);
    return this;
};
Object.defineProperty(Writable.prototype, 'writableLength', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.length;
    }
});
function needFinish(state) {
    return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function callFinal(stream, state) {
    stream._final(function(err) {
        state.pendingcb--;
        if (err) errorOrDestroy(stream, err);
        state.prefinished = true;
        stream.emit('prefinish');
        finishMaybe(stream, state);
    });
}
function prefinish(stream, state) {
    if (!state.prefinished && !state.finalCalled) {
        if (typeof stream._final === 'function' && !state.destroyed) {
            state.pendingcb++;
            state.finalCalled = true;
            process.nextTick(callFinal, stream, state);
        } else {
            state.prefinished = true;
            stream.emit('prefinish');
        }
    }
}
function finishMaybe(stream, state) {
    var need = needFinish(state);
    if (need) {
        prefinish(stream, state);
        if (state.pendingcb === 0) {
            state.finished = true;
            stream.emit('finish');
            if (state.autoDestroy) {
                // In case of duplex streams we need a way to detect
                // if the readable side is ready for autoDestroy as well
                var rState = stream._readableState;
                if (!rState || rState.autoDestroy && rState.endEmitted) stream.destroy();
            }
        }
    }
    return need;
}
function endWritable(stream, state, cb) {
    state.ending = true;
    finishMaybe(stream, state);
    if (cb) {
        if (state.finished) process.nextTick(cb);
        else stream.once('finish', cb);
    }
    state.ended = true;
    stream.writable = false;
}
function onCorkedFinish(corkReq, state, err) {
    var entry = corkReq.entry;
    corkReq.entry = null;
    while(entry){
        var cb = entry.callback;
        state.pendingcb--;
        cb(err);
        entry = entry.next;
    } // reuse the free corkReq.
    state.corkedRequestsFree.next = corkReq;
}
Object.defineProperty(Writable.prototype, 'destroyed', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        if (this._writableState === undefined) return false;
        return this._writableState.destroyed;
    },
    set: function set(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (!this._writableState) return;
         // backward compatibility, the user is explicitly
        // managing destroyed
        this._writableState.destroyed = value;
    }
});
Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;
Writable.prototype._destroy = function(err, cb) {
    cb(err);
};

},{"process":"lDnB8","util-deprecate":"bfjXI","./internal/streams/stream":"fGAs8","buffer":"bOetu","./internal/streams/destroy":"6GE29","./internal/streams/state":"kxEAr","../errors":"9reMm","inherits":"d3hL2","./_stream_duplex":"c3hN6"}],"9S1GQ":[function(require,module,exports) {
var process = require("process");
'use strict';
var _Object$setPrototypeO;
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var finished = require('./end-of-stream');
var kLastResolve = Symbol('lastResolve');
var kLastReject = Symbol('lastReject');
var kError = Symbol('error');
var kEnded = Symbol('ended');
var kLastPromise = Symbol('lastPromise');
var kHandlePromise = Symbol('handlePromise');
var kStream = Symbol('stream');
function createIterResult(value, done) {
    return {
        value: value,
        done: done
    };
}
function readAndResolve(iter) {
    var resolve = iter[kLastResolve];
    if (resolve !== null) {
        var data = iter[kStream].read(); // we defer if data is null
        // we can be expecting either 'end' or
        // 'error'
        if (data !== null) {
            iter[kLastPromise] = null;
            iter[kLastResolve] = null;
            iter[kLastReject] = null;
            resolve(createIterResult(data, false));
        }
    }
}
function onReadable(iter) {
    // we wait for the next tick, because it might
    // emit an error with process.nextTick
    process.nextTick(readAndResolve, iter);
}
function wrapForNext(lastPromise, iter) {
    return function(resolve, reject) {
        lastPromise.then(function() {
            if (iter[kEnded]) {
                resolve(createIterResult(undefined, true));
                return;
            }
            iter[kHandlePromise](resolve, reject);
        }, reject);
    };
}
var AsyncIteratorPrototype = Object.getPrototypeOf(function() {
});
var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
    get stream () {
        return this[kStream];
    },
    next: function next() {
        var _this = this;
        // if we have detected an error in the meanwhile
        // reject straight away
        var error = this[kError];
        if (error !== null) return Promise.reject(error);
        if (this[kEnded]) return Promise.resolve(createIterResult(undefined, true));
        if (this[kStream].destroyed) // We need to defer via nextTick because if .destroy(err) is
        // called, the error will be emitted via nextTick, and
        // we cannot guarantee that there is no error lingering around
        // waiting to be emitted.
        return new Promise(function(resolve, reject) {
            process.nextTick(function() {
                if (_this[kError]) reject(_this[kError]);
                else resolve(createIterResult(undefined, true));
            });
        });
         // if we have multiple next() calls
        // we will wait for the previous Promise to finish
        // this logic is optimized to support for await loops,
        // where next() is only called once at a time
        var lastPromise = this[kLastPromise];
        var promise;
        if (lastPromise) promise = new Promise(wrapForNext(lastPromise, this));
        else {
            // fast path needed to support multiple this.push()
            // without triggering the next() queue
            var data = this[kStream].read();
            if (data !== null) return Promise.resolve(createIterResult(data, false));
            promise = new Promise(this[kHandlePromise]);
        }
        this[kLastPromise] = promise;
        return promise;
    }
}, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function() {
    return this;
}), _defineProperty(_Object$setPrototypeO, "return", function _return() {
    var _this2 = this;
    // destroy(err, cb) is a private API
    // we can guarantee we have that here, because we control the
    // Readable class this is attached to
    return new Promise(function(resolve, reject) {
        _this2[kStream].destroy(null, function(err) {
            if (err) {
                reject(err);
                return;
            }
            resolve(createIterResult(undefined, true));
        });
    });
}), _Object$setPrototypeO), AsyncIteratorPrototype);
var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator(stream) {
    var _Object$create;
    var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {
    }, _defineProperty(_Object$create, kStream, {
        value: stream,
        writable: true
    }), _defineProperty(_Object$create, kLastResolve, {
        value: null,
        writable: true
    }), _defineProperty(_Object$create, kLastReject, {
        value: null,
        writable: true
    }), _defineProperty(_Object$create, kError, {
        value: null,
        writable: true
    }), _defineProperty(_Object$create, kEnded, {
        value: stream._readableState.endEmitted,
        writable: true
    }), _defineProperty(_Object$create, kHandlePromise, {
        value: function value(resolve, reject) {
            var data = iterator[kStream].read();
            if (data) {
                iterator[kLastPromise] = null;
                iterator[kLastResolve] = null;
                iterator[kLastReject] = null;
                resolve(createIterResult(data, false));
            } else {
                iterator[kLastResolve] = resolve;
                iterator[kLastReject] = reject;
            }
        },
        writable: true
    }), _Object$create));
    iterator[kLastPromise] = null;
    finished(stream, function(err) {
        if (err && err.code !== 'ERR_STREAM_PREMATURE_CLOSE') {
            var reject = iterator[kLastReject]; // reject if we are waiting for data in the Promise
            // returned by next() and store the error
            if (reject !== null) {
                iterator[kLastPromise] = null;
                iterator[kLastResolve] = null;
                iterator[kLastReject] = null;
                reject(err);
            }
            iterator[kError] = err;
            return;
        }
        var resolve = iterator[kLastResolve];
        if (resolve !== null) {
            iterator[kLastPromise] = null;
            iterator[kLastResolve] = null;
            iterator[kLastReject] = null;
            resolve(createIterResult(undefined, true));
        }
        iterator[kEnded] = true;
    });
    stream.on('readable', onReadable.bind(null, iterator));
    return iterator;
};
module.exports = createReadableStreamAsyncIterator;

},{"process":"lDnB8","./end-of-stream":"334CG"}],"334CG":[function(require,module,exports) {
// Ported from https://github.com/mafintosh/end-of-stream with
// permission from the author, Mathias Buus (@mafintosh).
'use strict';
var ERR_STREAM_PREMATURE_CLOSE = require('../../../errors').codes.ERR_STREAM_PREMATURE_CLOSE;
function once(callback) {
    var called = false;
    return function() {
        if (called) return;
        called = true;
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        callback.apply(this, args);
    };
}
function noop() {
}
function isRequest(stream) {
    return stream.setHeader && typeof stream.abort === 'function';
}
function eos(stream, opts, callback) {
    if (typeof opts === 'function') return eos(stream, null, opts);
    if (!opts) opts = {
    };
    callback = once(callback || noop);
    var readable = opts.readable || opts.readable !== false && stream.readable;
    var writable = opts.writable || opts.writable !== false && stream.writable;
    var onlegacyfinish = function onlegacyfinish() {
        if (!stream.writable) onfinish();
    };
    var writableEnded = stream._writableState && stream._writableState.finished;
    var onfinish = function onfinish() {
        writable = false;
        writableEnded = true;
        if (!readable) callback.call(stream);
    };
    var readableEnded = stream._readableState && stream._readableState.endEmitted;
    var onend = function onend() {
        readable = false;
        readableEnded = true;
        if (!writable) callback.call(stream);
    };
    var onerror = function onerror(err) {
        callback.call(stream, err);
    };
    var onclose = function onclose() {
        var err;
        if (readable && !readableEnded) {
            if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
            return callback.call(stream, err);
        }
        if (writable && !writableEnded) {
            if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
            return callback.call(stream, err);
        }
    };
    var onrequest = function onrequest() {
        stream.req.on('finish', onfinish);
    };
    if (isRequest(stream)) {
        stream.on('complete', onfinish);
        stream.on('abort', onclose);
        if (stream.req) onrequest();
        else stream.on('request', onrequest);
    } else if (writable && !stream._writableState) {
        // legacy streams
        stream.on('end', onlegacyfinish);
        stream.on('close', onlegacyfinish);
    }
    stream.on('end', onend);
    stream.on('finish', onfinish);
    if (opts.error !== false) stream.on('error', onerror);
    stream.on('close', onclose);
    return function() {
        stream.removeListener('complete', onfinish);
        stream.removeListener('abort', onclose);
        stream.removeListener('request', onrequest);
        if (stream.req) stream.req.removeListener('finish', onfinish);
        stream.removeListener('end', onlegacyfinish);
        stream.removeListener('close', onlegacyfinish);
        stream.removeListener('finish', onfinish);
        stream.removeListener('end', onend);
        stream.removeListener('error', onerror);
        stream.removeListener('close', onclose);
    };
}
module.exports = eos;

},{"../../../errors":"9reMm"}],"lbk31":[function(require,module,exports) {
module.exports = function() {
    throw new Error('Readable.from is not available in the browser');
};

},{}],"fqE5j":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.
'use strict';
module.exports = Transform;
var _require$codes = require('../errors').codes, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK, ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING, ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;
var Duplex = require('./_stream_duplex');
require('inherits')(Transform, Duplex);
function afterTransform(er, data) {
    var ts = this._transformState;
    ts.transforming = false;
    var cb = ts.writecb;
    if (cb === null) return this.emit('error', new ERR_MULTIPLE_CALLBACK());
    ts.writechunk = null;
    ts.writecb = null;
    if (data != null) this.push(data);
    cb(er);
    var rs = this._readableState;
    rs.reading = false;
    if (rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
}
function Transform(options) {
    if (!(this instanceof Transform)) return new Transform(options);
    Duplex.call(this, options);
    this._transformState = {
        afterTransform: afterTransform.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
    }; // start out asking for a readable event once data is transformed.
    this._readableState.needReadable = true; // we have implemented the _read method, and done the other things
    // that Readable wants before the first _read call, so unset the
    // sync guard flag.
    this._readableState.sync = false;
    if (options) {
        if (typeof options.transform === 'function') this._transform = options.transform;
        if (typeof options.flush === 'function') this._flush = options.flush;
    } // When the writable side finishes, then flush out anything remaining.
    this.on('prefinish', prefinish);
}
function prefinish() {
    var _this = this;
    if (typeof this._flush === 'function' && !this._readableState.destroyed) this._flush(function(er, data) {
        done(_this, er, data);
    });
    else done(this, null, null);
}
Transform.prototype.push = function(chunk, encoding) {
    this._transformState.needTransform = false;
    return Duplex.prototype.push.call(this, chunk, encoding);
}; // This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function(chunk, encoding, cb) {
    cb(new ERR_METHOD_NOT_IMPLEMENTED('_transform()'));
};
Transform.prototype._write = function(chunk, encoding, cb) {
    var ts = this._transformState;
    ts.writecb = cb;
    ts.writechunk = chunk;
    ts.writeencoding = encoding;
    if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
    }
}; // Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function(n) {
    var ts = this._transformState;
    if (ts.writechunk !== null && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
    } else // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
};
Transform.prototype._destroy = function(err, cb) {
    Duplex.prototype._destroy.call(this, err, function(err2) {
        cb(err2);
    });
};
function done(stream, er, data) {
    if (er) return stream.emit('error', er);
    if (data != null) stream.push(data); // TODO(BridgeAR): Write a test for these two error cases
    // if there's nothing in the write buffer, then that means
    // that nothing more will ever be provided
    if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
    if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
    return stream.push(null);
}

},{"../errors":"9reMm","./_stream_duplex":"c3hN6","inherits":"d3hL2"}],"ac886":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.
'use strict';
module.exports = PassThrough;
var Transform = require('./_stream_transform');
require('inherits')(PassThrough, Transform);
function PassThrough(options) {
    if (!(this instanceof PassThrough)) return new PassThrough(options);
    Transform.call(this, options);
}
PassThrough.prototype._transform = function(chunk, encoding, cb) {
    cb(null, chunk);
};

},{"./_stream_transform":"fqE5j","inherits":"d3hL2"}],"dpxjj":[function(require,module,exports) {
// Ported from https://github.com/mafintosh/pump with
// permission from the author, Mathias Buus (@mafintosh).
'use strict';
var eos;
function once(callback) {
    var called = false;
    return function() {
        if (called) return;
        called = true;
        callback.apply(void 0, arguments);
    };
}
var _require$codes = require('../../../errors').codes, ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
function noop(err) {
    // Rethrow the error if it exists to avoid swallowing it
    if (err) throw err;
}
function isRequest(stream) {
    return stream.setHeader && typeof stream.abort === 'function';
}
function destroyer(stream, reading, writing, callback) {
    callback = once(callback);
    var closed = false;
    stream.on('close', function() {
        closed = true;
    });
    if (eos === undefined) eos = require('./end-of-stream');
    eos(stream, {
        readable: reading,
        writable: writing
    }, function(err) {
        if (err) return callback(err);
        closed = true;
        callback();
    });
    var destroyed = false;
    return function(err) {
        if (closed) return;
        if (destroyed) return;
        destroyed = true; // request.destroy just do .end - .abort is what we want
        if (isRequest(stream)) return stream.abort();
        if (typeof stream.destroy === 'function') return stream.destroy();
        callback(err || new ERR_STREAM_DESTROYED('pipe'));
    };
}
function call(fn) {
    fn();
}
function pipe(from, to) {
    return from.pipe(to);
}
function popCallback(streams) {
    if (!streams.length) return noop;
    if (typeof streams[streams.length - 1] !== 'function') return noop;
    return streams.pop();
}
function pipeline() {
    for(var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++)streams[_key] = arguments[_key];
    var callback = popCallback(streams);
    if (Array.isArray(streams[0])) streams = streams[0];
    if (streams.length < 2) throw new ERR_MISSING_ARGS('streams');
    var error;
    var destroys = streams.map(function(stream, i) {
        var reading = i < streams.length - 1;
        var writing = i > 0;
        return destroyer(stream, reading, writing, function(err) {
            if (!error) error = err;
            if (err) destroys.forEach(call);
            if (reading) return;
            destroys.forEach(call);
            callback(error);
        });
    });
    return streams.reduce(pipe);
}
module.exports = pipeline;

},{"../../../errors":"9reMm","./end-of-stream":"334CG"}],"4P4yi":[function(require,module,exports) {
/**
 * Copyright (c) 2013 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ "use strict";
function Deque(capacity) {
    this._capacity = getCapacity(capacity);
    this._length = 0;
    this._front = 0;
    if (isArray(capacity)) {
        var len = capacity.length;
        for(var i = 0; i < len; ++i)this[i] = capacity[i];
        this._length = len;
    }
}
Deque.prototype.toArray = function Deque$toArray() {
    var len = this._length;
    var ret = new Array(len);
    var front = this._front;
    var capacity = this._capacity;
    for(var j = 0; j < len; ++j)ret[j] = this[front + j & capacity - 1];
    return ret;
};
Deque.prototype.push = function Deque$push(item) {
    var argsLength = arguments.length;
    var length = this._length;
    if (argsLength > 1) {
        var capacity = this._capacity;
        if (length + argsLength > capacity) {
            for(var i = 0; i < argsLength; ++i){
                this._checkCapacity(length + 1);
                var j = this._front + length & this._capacity - 1;
                this[j] = arguments[i];
                length++;
                this._length = length;
            }
            return length;
        } else {
            var j = this._front;
            for(var i = 0; i < argsLength; ++i){
                this[j + length & capacity - 1] = arguments[i];
                j++;
            }
            this._length = length + argsLength;
            return length + argsLength;
        }
    }
    if (argsLength === 0) return length;
    this._checkCapacity(length + 1);
    var i = this._front + length & this._capacity - 1;
    this[i] = item;
    this._length = length + 1;
    return length + 1;
};
Deque.prototype.pop = function Deque$pop() {
    var length = this._length;
    if (length === 0) return void 0;
    var i = this._front + length - 1 & this._capacity - 1;
    var ret = this[i];
    this[i] = void 0;
    this._length = length - 1;
    return ret;
};
Deque.prototype.shift = function Deque$shift() {
    var length = this._length;
    if (length === 0) return void 0;
    var front = this._front;
    var ret = this[front];
    this[front] = void 0;
    this._front = front + 1 & this._capacity - 1;
    this._length = length - 1;
    return ret;
};
Deque.prototype.unshift = function Deque$unshift(item) {
    var length = this._length;
    var argsLength = arguments.length;
    if (argsLength > 1) {
        var capacity = this._capacity;
        if (length + argsLength > capacity) {
            for(var i = argsLength - 1; i >= 0; i--){
                this._checkCapacity(length + 1);
                var capacity = this._capacity;
                var j = (this._front - 1 & capacity - 1 ^ capacity) - capacity;
                this[j] = arguments[i];
                length++;
                this._length = length;
                this._front = j;
            }
            return length;
        } else {
            var front = this._front;
            for(var i = argsLength - 1; i >= 0; i--){
                var j = (front - 1 & capacity - 1 ^ capacity) - capacity;
                this[j] = arguments[i];
                front = j;
            }
            this._front = front;
            this._length = length + argsLength;
            return length + argsLength;
        }
    }
    if (argsLength === 0) return length;
    this._checkCapacity(length + 1);
    var capacity = this._capacity;
    var i = (this._front - 1 & capacity - 1 ^ capacity) - capacity;
    this[i] = item;
    this._length = length + 1;
    this._front = i;
    return length + 1;
};
Deque.prototype.peekBack = function Deque$peekBack() {
    var length = this._length;
    if (length === 0) return void 0;
    var index = this._front + length - 1 & this._capacity - 1;
    return this[index];
};
Deque.prototype.peekFront = function Deque$peekFront() {
    if (this._length === 0) return void 0;
    return this[this._front];
};
Deque.prototype.get = function Deque$get(index) {
    var i = index;
    if (i !== (i | 0)) return void 0;
    var len = this._length;
    if (i < 0) i = i + len;
    if (i < 0 || i >= len) return void 0;
    return this[this._front + i & this._capacity - 1];
};
Deque.prototype.isEmpty = function Deque$isEmpty() {
    return this._length === 0;
};
Deque.prototype.clear = function Deque$clear() {
    var len = this._length;
    var front = this._front;
    var capacity = this._capacity;
    for(var j = 0; j < len; ++j)this[front + j & capacity - 1] = void 0;
    this._length = 0;
    this._front = 0;
};
Deque.prototype.toString = function Deque$toString() {
    return this.toArray().toString();
};
Deque.prototype.valueOf = Deque.prototype.toString;
Deque.prototype.removeFront = Deque.prototype.shift;
Deque.prototype.removeBack = Deque.prototype.pop;
Deque.prototype.insertFront = Deque.prototype.unshift;
Deque.prototype.insertBack = Deque.prototype.push;
Deque.prototype.enqueue = Deque.prototype.push;
Deque.prototype.dequeue = Deque.prototype.shift;
Deque.prototype.toJSON = Deque.prototype.toArray;
Object.defineProperty(Deque.prototype, "length", {
    get: function() {
        return this._length;
    },
    set: function() {
        throw new RangeError("");
    }
});
Deque.prototype._checkCapacity = function Deque$_checkCapacity(size) {
    if (this._capacity < size) this._resizeTo(getCapacity(this._capacity * 1.5 + 16));
};
Deque.prototype._resizeTo = function Deque$_resizeTo(capacity) {
    var oldCapacity = this._capacity;
    this._capacity = capacity;
    var front = this._front;
    var length = this._length;
    if (front + length > oldCapacity) {
        var moveItemsCount = front + length & oldCapacity - 1;
        arrayMove(this, 0, this, oldCapacity, moveItemsCount);
    }
};
var isArray = Array.isArray;
function arrayMove(src, srcIndex, dst, dstIndex, len) {
    for(var j = 0; j < len; ++j){
        dst[j + dstIndex] = src[j + srcIndex];
        src[j + srcIndex] = void 0;
    }
}
function pow2AtLeast(n) {
    n = n >>> 0;
    n = n - 1;
    n = n | n >> 1;
    n = n | n >> 2;
    n = n | n >> 4;
    n = n | n >> 8;
    n = n | n >> 16;
    return n + 1;
}
function getCapacity(capacity) {
    if (typeof capacity !== "number") {
        if (isArray(capacity)) capacity = capacity.length;
        else return 16;
    }
    return pow2AtLeast(Math.min(Math.max(16, capacity), 1073741824));
}
module.exports = Deque;

},{}],"eIymS":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
var toString = Object.prototype.toString;
var isModern = typeof Buffer.alloc === 'function' && typeof Buffer.allocUnsafe === 'function' && typeof Buffer.from === 'function';
function isArrayBuffer(input) {
    return toString.call(input).slice(8, -1) === 'ArrayBuffer';
}
function fromArrayBuffer(obj, byteOffset, length) {
    byteOffset >>>= 0;
    var maxLength = obj.byteLength - byteOffset;
    if (maxLength < 0) throw new RangeError("'offset' is out of bounds");
    if (length === undefined) length = maxLength;
    else {
        length >>>= 0;
        if (length > maxLength) throw new RangeError("'length' is out of bounds");
    }
    return isModern ? Buffer.from(obj.slice(byteOffset, byteOffset + length)) : new Buffer(new Uint8Array(obj.slice(byteOffset, byteOffset + length)));
}
function fromString(string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8';
    if (!Buffer.isEncoding(encoding)) throw new TypeError('"encoding" must be a valid string encoding');
    return isModern ? Buffer.from(string, encoding) : new Buffer(string, encoding);
}
function bufferFrom(value, encodingOrOffset, length) {
    if (typeof value === 'number') throw new TypeError('"value" argument must not be a number');
    if (isArrayBuffer(value)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === 'string') return fromString(value, encodingOrOffset);
    return isModern ? Buffer.from(value) : new Buffer(value);
}
module.exports = bufferFrom;

},{"buffer":"bOetu"}],"cxjBB":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"V5vM4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "safeJsonParse", ()=>safeJsonParse
);
parcelHelpers.export(exports, "safeJsonStringify", ()=>safeJsonStringify
);
var _vuvuzela = require("vuvuzela");
var _vuvuzelaDefault = parcelHelpers.interopDefault(_vuvuzela);
function safeJsonParse(str) {
    // This try/catch guards against stack overflow errors.
    // JSON.parse() is faster than vuvuzela.parse() but vuvuzela
    // cannot overflow.
    try {
        return JSON.parse(str);
    } catch (e) {
        /* istanbul ignore next */ return _vuvuzelaDefault.default.parse(str);
    }
}
function safeJsonStringify(json) {
    try {
        return JSON.stringify(json);
    } catch (e) {
        /* istanbul ignore next */ return _vuvuzelaDefault.default.stringify(json);
    }
}

},{"vuvuzela":"9bu0e","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4RboN":[function(require,module,exports) {
var process = require("process");
// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';
function assertPath(path) {
    if (typeof path !== 'string') throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
}
// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
    var res = '';
    var lastSegmentLength = 0;
    var lastSlash = -1;
    var dots = 0;
    var code;
    for(var i = 0; i <= path.length; ++i){
        if (i < path.length) code = path.charCodeAt(i);
        else if (code === 47 /*/*/ ) break;
        else code = 47 /*/*/ ;
        if (code === 47 /*/*/ ) {
            if (lastSlash === i - 1 || dots === 1) ;
            else if (lastSlash !== i - 1 && dots === 2) {
                if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/  || res.charCodeAt(res.length - 2) !== 46 /*.*/ ) {
                    if (res.length > 2) {
                        var lastSlashIndex = res.lastIndexOf('/');
                        if (lastSlashIndex !== res.length - 1) {
                            if (lastSlashIndex === -1) {
                                res = '';
                                lastSegmentLength = 0;
                            } else {
                                res = res.slice(0, lastSlashIndex);
                                lastSegmentLength = res.length - 1 - res.lastIndexOf('/');
                            }
                            lastSlash = i;
                            dots = 0;
                            continue;
                        }
                    } else if (res.length === 2 || res.length === 1) {
                        res = '';
                        lastSegmentLength = 0;
                        lastSlash = i;
                        dots = 0;
                        continue;
                    }
                }
                if (allowAboveRoot) {
                    if (res.length > 0) res += '/..';
                    else res = '..';
                    lastSegmentLength = 2;
                }
            } else {
                if (res.length > 0) res += '/' + path.slice(lastSlash + 1, i);
                else res = path.slice(lastSlash + 1, i);
                lastSegmentLength = i - lastSlash - 1;
            }
            lastSlash = i;
            dots = 0;
        } else if (code === 46 /*.*/  && dots !== -1) ++dots;
        else dots = -1;
    }
    return res;
}
function _format(sep, pathObject) {
    var dir = pathObject.dir || pathObject.root;
    var base = pathObject.base || (pathObject.name || '') + (pathObject.ext || '');
    if (!dir) return base;
    if (dir === pathObject.root) return dir + base;
    return dir + sep + base;
}
var posix = {
    // path.resolve([from ...], to)
    resolve: function resolve() {
        var resolvedPath = '';
        var resolvedAbsolute = false;
        var cwd;
        for(var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--){
            var path;
            if (i >= 0) path = arguments[i];
            else {
                if (cwd === undefined) cwd = process.cwd();
                path = cwd;
            }
            assertPath(path);
            // Skip empty entries
            if (path.length === 0) continue;
            resolvedPath = path + '/' + resolvedPath;
            resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        // Normalize the path
        resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
        if (resolvedAbsolute) {
            if (resolvedPath.length > 0) return '/' + resolvedPath;
            else return '/';
        } else if (resolvedPath.length > 0) return resolvedPath;
        else return '.';
    },
    normalize: function normalize(path) {
        assertPath(path);
        if (path.length === 0) return '.';
        var isAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/ ;
        // Normalize the path
        path = normalizeStringPosix(path, !isAbsolute);
        if (path.length === 0 && !isAbsolute) path = '.';
        if (path.length > 0 && trailingSeparator) path += '/';
        if (isAbsolute) return '/' + path;
        return path;
    },
    isAbsolute: function isAbsolute(path) {
        assertPath(path);
        return path.length > 0 && path.charCodeAt(0) === 47 /*/*/ ;
    },
    join: function join() {
        if (arguments.length === 0) return '.';
        var joined;
        for(var i = 0; i < arguments.length; ++i){
            var arg = arguments[i];
            assertPath(arg);
            if (arg.length > 0) {
                if (joined === undefined) joined = arg;
                else joined += '/' + arg;
            }
        }
        if (joined === undefined) return '.';
        return posix.normalize(joined);
    },
    relative: function relative(from, to) {
        assertPath(from);
        assertPath(to);
        if (from === to) return '';
        from = posix.resolve(from);
        to = posix.resolve(to);
        if (from === to) return '';
        // Trim any leading backslashes
        var fromStart = 1;
        for(; fromStart < from.length; ++fromStart){
            if (from.charCodeAt(fromStart) !== 47 /*/*/ ) break;
        }
        var fromEnd = from.length;
        var fromLen = fromEnd - fromStart;
        // Trim any leading backslashes
        var toStart = 1;
        for(; toStart < to.length; ++toStart){
            if (to.charCodeAt(toStart) !== 47 /*/*/ ) break;
        }
        var toEnd = to.length;
        var toLen = toEnd - toStart;
        // Compare paths to find the longest common path from root
        var length = fromLen < toLen ? fromLen : toLen;
        var lastCommonSep = -1;
        var i = 0;
        for(; i <= length; ++i){
            if (i === length) {
                if (toLen > length) {
                    if (to.charCodeAt(toStart + i) === 47 /*/*/ ) // We get here if `from` is the exact base path for `to`.
                    // For example: from='/foo/bar'; to='/foo/bar/baz'
                    return to.slice(toStart + i + 1);
                    else if (i === 0) // We get here if `from` is the root
                    // For example: from='/'; to='/foo'
                    return to.slice(toStart + i);
                } else if (fromLen > length) {
                    if (from.charCodeAt(fromStart + i) === 47 /*/*/ ) // We get here if `to` is the exact base path for `from`.
                    // For example: from='/foo/bar/baz'; to='/foo/bar'
                    lastCommonSep = i;
                    else if (i === 0) // We get here if `to` is the root.
                    // For example: from='/foo'; to='/'
                    lastCommonSep = 0;
                }
                break;
            }
            var fromCode = from.charCodeAt(fromStart + i);
            var toCode = to.charCodeAt(toStart + i);
            if (fromCode !== toCode) break;
            else if (fromCode === 47 /*/*/ ) lastCommonSep = i;
        }
        var out = '';
        // Generate the relative path based on the path difference between `to`
        // and `from`
        for(i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i)if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/ ) {
            if (out.length === 0) out += '..';
            else out += '/..';
        }
        // Lastly, append the rest of the destination (`to`) path that comes after
        // the common path parts
        if (out.length > 0) return out + to.slice(toStart + lastCommonSep);
        else {
            toStart += lastCommonSep;
            if (to.charCodeAt(toStart) === 47 /*/*/ ) ++toStart;
            return to.slice(toStart);
        }
    },
    _makeLong: function _makeLong(path) {
        return path;
    },
    dirname: function dirname(path) {
        assertPath(path);
        if (path.length === 0) return '.';
        var code = path.charCodeAt(0);
        var hasRoot = code === 47 /*/*/ ;
        var end = -1;
        var matchedSlash = true;
        for(var i = path.length - 1; i >= 1; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                if (!matchedSlash) {
                    end = i;
                    break;
                }
            } else // We saw the first non-path separator
            matchedSlash = false;
        }
        if (end === -1) return hasRoot ? '/' : '.';
        if (hasRoot && end === 1) return '//';
        return path.slice(0, end);
    },
    basename: function basename(path, ext) {
        if (ext !== undefined && typeof ext !== 'string') throw new TypeError('"ext" argument must be a string');
        assertPath(path);
        var start = 0;
        var end = -1;
        var matchedSlash = true;
        var i;
        if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
            if (ext.length === path.length && ext === path) return '';
            var extIdx = ext.length - 1;
            var firstNonSlashEnd = -1;
            for(i = path.length - 1; i >= 0; --i){
                var code = path.charCodeAt(i);
                if (code === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else {
                    if (firstNonSlashEnd === -1) {
                        // We saw the first non-path separator, remember this index in case
                        // we need it if the extension ends up not matching
                        matchedSlash = false;
                        firstNonSlashEnd = i + 1;
                    }
                    if (extIdx >= 0) {
                        // Try to match the explicit extension
                        if (code === ext.charCodeAt(extIdx)) {
                            if (--extIdx === -1) // We matched the extension, so mark this as the end of our path
                            // component
                            end = i;
                        } else {
                            // Extension does not match, so our result is the entire path
                            // component
                            extIdx = -1;
                            end = firstNonSlashEnd;
                        }
                    }
                }
            }
            if (start === end) end = firstNonSlashEnd;
            else if (end === -1) end = path.length;
            return path.slice(start, end);
        } else {
            for(i = path.length - 1; i >= 0; --i){
                if (path.charCodeAt(i) === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else if (end === -1) {
                    // We saw the first non-path separator, mark this as the end of our
                    // path component
                    matchedSlash = false;
                    end = i + 1;
                }
            }
            if (end === -1) return '';
            return path.slice(start, end);
        }
    },
    extname: function extname(path) {
        assertPath(path);
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        for(var i = path.length - 1; i >= 0; --i){
            var code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) return '';
        return path.slice(startDot, end);
    },
    format: function format(pathObject) {
        if (pathObject === null || typeof pathObject !== 'object') throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
        return _format('/', pathObject);
    },
    parse: function parse(path) {
        assertPath(path);
        var ret = {
            root: '',
            dir: '',
            base: '',
            ext: '',
            name: ''
        };
        if (path.length === 0) return ret;
        var code = path.charCodeAt(0);
        var isAbsolute = code === 47 /*/*/ ;
        var start;
        if (isAbsolute) {
            ret.root = '/';
            start = 1;
        } else start = 0;
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var i = path.length - 1;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        // Get non-dir info
        for(; i >= start; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
            if (end !== -1) {
                if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);
                else ret.base = ret.name = path.slice(startPart, end);
            }
        } else {
            if (startPart === 0 && isAbsolute) {
                ret.name = path.slice(1, startDot);
                ret.base = path.slice(1, end);
            } else {
                ret.name = path.slice(startPart, startDot);
                ret.base = path.slice(startPart, end);
            }
            ret.ext = path.slice(startDot, end);
        }
        if (startPart > 0) ret.dir = path.slice(0, startPart - 1);
        else if (isAbsolute) ret.dir = '/';
        return ret;
    },
    sep: '/',
    delimiter: ':',
    win32: null,
    posix: null
};
posix.posix = posix;
module.exports = posix;

},{"process":"lDnB8"}],"4L5MH":[function(require,module,exports) {
module.exports = require('level-packager')(require('level-js'));

},{"level-packager":"25ixL","level-js":"klBIM"}],"25ixL":[function(require,module,exports) {
var levelup = require('levelup');
var encode = require('encoding-down');
function packager(leveldown) {
    function Level(location, options, callback) {
        if (typeof location === 'function') callback = location;
        else if (typeof options === 'function') callback = options;
        if (!isObject(options)) options = isObject(location) ? location : {
        };
        return levelup(encode(leveldown(location, options), options), options, callback);
    }
    function isObject(o) {
        return typeof o === 'object' && o !== null;
    }
    [
        'destroy',
        'repair'
    ].forEach(function(m) {
        if (typeof leveldown[m] === 'function') Level[m] = function() {
            leveldown[m].apply(leveldown, arguments);
        };
    });
    Level.errors = levelup.errors;
    return Level;
}
module.exports = packager;

},{"levelup":"81yFL","encoding-down":"6MJSj"}],"6MJSj":[function(require,module,exports) {
'use strict';
var AbstractLevelDOWN = require('abstract-leveldown').AbstractLevelDOWN;
var AbstractChainedBatch = require('abstract-leveldown').AbstractChainedBatch;
var AbstractIterator = require('abstract-leveldown').AbstractIterator;
var inherits = require('inherits');
var Codec = require('level-codec');
var EncodingError = require('level-errors').EncodingError;
var rangeMethods = [
    'approximateSize',
    'compactRange'
];
module.exports = DB.default = DB;
function DB(db, opts1) {
    if (!(this instanceof DB)) return new DB(db, opts1);
    var manifest = db.supports || {
    };
    var additionalMethods = manifest.additionalMethods || {
    };
    AbstractLevelDOWN.call(this, manifest);
    this.supports.encodings = true;
    this.supports.additionalMethods = {
    };
    rangeMethods.forEach(function(m) {
        // TODO (future major): remove this fallback
        var fallback = typeof db[m] === 'function';
        if (additionalMethods[m] || fallback) {
            this.supports.additionalMethods[m] = true;
            this[m] = function(start, end, opts, cb) {
                start = this.codec.encodeKey(start, opts);
                end = this.codec.encodeKey(end, opts);
                return this.db[m](start, end, opts, cb);
            };
        }
    }, this);
    opts1 = opts1 || {
    };
    if (typeof opts1.keyEncoding === 'undefined') opts1.keyEncoding = 'utf8';
    if (typeof opts1.valueEncoding === 'undefined') opts1.valueEncoding = 'utf8';
    this.db = db;
    this.codec = new Codec(opts1);
}
inherits(DB, AbstractLevelDOWN);
DB.prototype.type = 'encoding-down';
DB.prototype._serializeKey = DB.prototype._serializeValue = function(datum) {
    return datum;
};
DB.prototype._open = function(opts, cb) {
    this.db.open(opts, cb);
};
DB.prototype._close = function(cb) {
    this.db.close(cb);
};
DB.prototype._put = function(key, value, opts, cb) {
    key = this.codec.encodeKey(key, opts);
    value = this.codec.encodeValue(value, opts);
    this.db.put(key, value, opts, cb);
};
DB.prototype._get = function(key, opts, cb) {
    var self = this;
    key = this.codec.encodeKey(key, opts);
    opts.asBuffer = this.codec.valueAsBuffer(opts);
    this.db.get(key, opts, function(err, value) {
        if (err) return cb(err);
        try {
            value = self.codec.decodeValue(value, opts);
        } catch (err1) {
            return cb(new EncodingError(err1));
        }
        cb(null, value);
    });
};
DB.prototype._del = function(key, opts, cb) {
    key = this.codec.encodeKey(key, opts);
    this.db.del(key, opts, cb);
};
DB.prototype._chainedBatch = function() {
    return new Batch(this);
};
DB.prototype._batch = function(ops, opts, cb) {
    ops = this.codec.encodeBatch(ops, opts);
    this.db.batch(ops, opts, cb);
};
DB.prototype._iterator = function(opts) {
    opts.keyAsBuffer = this.codec.keyAsBuffer(opts);
    opts.valueAsBuffer = this.codec.valueAsBuffer(opts);
    return new Iterator(this, opts);
};
DB.prototype._clear = function(opts, callback) {
    opts = this.codec.encodeLtgt(opts);
    this.db.clear(opts, callback);
};
function Iterator(db, opts) {
    AbstractIterator.call(this, db);
    this.codec = db.codec;
    this.keys = opts.keys;
    this.values = opts.values;
    this.opts = this.codec.encodeLtgt(opts);
    this.it = db.db.iterator(this.opts);
}
inherits(Iterator, AbstractIterator);
Iterator.prototype._next = function(cb) {
    var self = this;
    this.it.next(function(err, key, value) {
        if (err) return cb(err);
        try {
            if (self.keys && typeof key !== 'undefined') key = self.codec.decodeKey(key, self.opts);
            else key = undefined;
            if (self.values && typeof value !== 'undefined') value = self.codec.decodeValue(value, self.opts);
            else value = undefined;
        } catch (err2) {
            return cb(new EncodingError(err2));
        }
        cb(null, key, value);
    });
};
Iterator.prototype._seek = function(key) {
    key = this.codec.encodeKey(key, this.opts);
    this.it.seek(key);
};
Iterator.prototype._end = function(cb) {
    this.it.end(cb);
};
function Batch(db, codec) {
    AbstractChainedBatch.call(this, db);
    this.codec = db.codec;
    this.batch = db.db.batch();
}
inherits(Batch, AbstractChainedBatch);
Batch.prototype._put = function(key, value) {
    key = this.codec.encodeKey(key);
    value = this.codec.encodeValue(value);
    this.batch.put(key, value);
};
Batch.prototype._del = function(key) {
    key = this.codec.encodeKey(key);
    this.batch.del(key);
};
Batch.prototype._clear = function() {
    this.batch.clear();
};
Batch.prototype._write = function(opts, cb) {
    this.batch.write(opts, cb);
};

},{"abstract-leveldown":"jvgwU","inherits":"d3hL2","level-codec":"7rUf0","level-errors":"jUsAO"}],"klBIM":[function(require,module,exports) {
/* global indexedDB */ 'use strict';
module.exports = Level;
var AbstractLevelDOWN = require('abstract-leveldown').AbstractLevelDOWN;
var inherits = require('inherits');
var Iterator = require('./iterator');
var serialize = require('./util/serialize');
var deserialize = require('./util/deserialize');
var support = require('./util/support');
var clear = require('./util/clear');
var createKeyRange = require('./util/key-range');
var DEFAULT_PREFIX = 'level-js-';
function Level(location, opts) {
    if (!(this instanceof Level)) return new Level(location, opts);
    AbstractLevelDOWN.call(this, {
        bufferKeys: support.bufferKeys(indexedDB),
        snapshots: true,
        permanence: true,
        clear: true
    });
    opts = opts || {
    };
    if (typeof location !== 'string') throw new Error('constructor requires a location string argument');
    this.location = location;
    this.prefix = opts.prefix == null ? DEFAULT_PREFIX : opts.prefix;
    this.version = parseInt(opts.version || 1, 10);
}
inherits(Level, AbstractLevelDOWN);
Level.prototype.type = 'level-js';
Level.prototype._open = function(options, callback) {
    var req = indexedDB.open(this.prefix + this.location, this.version);
    var self = this;
    req.onerror = function() {
        callback(req.error || new Error('unknown error'));
    };
    req.onsuccess = function() {
        self.db = req.result;
        callback();
    };
    req.onupgradeneeded = function(ev) {
        var db = ev.target.result;
        if (!db.objectStoreNames.contains(self.location)) db.createObjectStore(self.location);
    };
};
Level.prototype.store = function(mode) {
    var transaction = this.db.transaction([
        this.location
    ], mode);
    return transaction.objectStore(this.location);
};
Level.prototype.await = function(request, callback) {
    var transaction = request.transaction;
    // Take advantage of the fact that a non-canceled request error aborts
    // the transaction. I.e. no need to listen for "request.onerror".
    transaction.onabort = function() {
        callback(transaction.error || new Error('aborted by user'));
    };
    transaction.oncomplete = function() {
        callback(null, request.result);
    };
};
Level.prototype._get = function(key, options, callback) {
    var store = this.store('readonly');
    try {
        var req = store.get(key);
    } catch (err1) {
        return this._nextTick(callback, err1);
    }
    this.await(req, function(err, value) {
        if (err) return callback(err);
        if (value === undefined) // 'NotFound' error, consistent with LevelDOWN API
        return callback(new Error('NotFound'));
        callback(null, deserialize(value, options.asBuffer));
    });
};
Level.prototype._del = function(key, options, callback) {
    var store = this.store('readwrite');
    try {
        var req = store.delete(key);
    } catch (err) {
        return this._nextTick(callback, err);
    }
    this.await(req, callback);
};
Level.prototype._put = function(key, value, options, callback) {
    var store = this.store('readwrite');
    try {
        // Will throw a DataError or DataCloneError if the environment
        // does not support serializing the key or value respectively.
        var req = store.put(value, key);
    } catch (err) {
        return this._nextTick(callback, err);
    }
    this.await(req, callback);
};
Level.prototype._serializeKey = function(key) {
    return serialize(key, this.supports.bufferKeys);
};
Level.prototype._serializeValue = function(value) {
    return serialize(value, true);
};
Level.prototype._iterator = function(options) {
    return new Iterator(this, this.location, options);
};
Level.prototype._batch = function(operations, options, callback) {
    if (operations.length === 0) return this._nextTick(callback);
    var store = this.store('readwrite');
    var transaction = store.transaction;
    var index = 0;
    var error;
    transaction.onabort = function() {
        callback(error || transaction.error || new Error('aborted by user'));
    };
    transaction.oncomplete = function() {
        callback();
    };
    // Wait for a request to complete before making the next, saving CPU.
    function loop() {
        var op = operations[index++];
        var key = op.key;
        try {
            var req = op.type === 'del' ? store.delete(key) : store.put(op.value, key);
        } catch (err) {
            error = err;
            transaction.abort();
            return;
        }
        if (index < operations.length) req.onsuccess = loop;
    }
    loop();
};
Level.prototype._clear = function(options, callback) {
    try {
        var keyRange = createKeyRange(options);
    } catch (e) {
        // The lower key is greater than the upper key.
        // IndexedDB throws an error, but we'll just do nothing.
        return this._nextTick(callback);
    }
    if (options.limit >= 0) // IDBObjectStore#delete(range) doesn't have such an option.
    // Fall back to cursor-based implementation.
    return clear(this, this.location, keyRange, options, callback);
    try {
        var store = this.store('readwrite');
        var req = keyRange ? store.delete(keyRange) : store.clear();
    } catch (err) {
        return this._nextTick(callback, err);
    }
    this.await(req, callback);
};
Level.prototype._close = function(callback) {
    this.db.close();
    this._nextTick(callback);
};
// NOTE: remove in a next major release
Level.prototype.upgrade = function(callback) {
    if (this.status !== 'open') return this._nextTick(callback, new Error('cannot upgrade() before open()'));
    var it = this.iterator();
    var batchOptions = {
    };
    var self = this;
    it._deserializeKey = it._deserializeValue = identity;
    next();
    function next(err) {
        if (err) return finish(err);
        it.next(each);
    }
    function each(err, key, value) {
        if (err || key === undefined) return finish(err);
        var newKey = self._serializeKey(deserialize(key, true));
        var newValue = self._serializeValue(deserialize(value, true));
        // To bypass serialization on the old key, use _batch() instead of batch().
        // NOTE: if we disable snapshotting (#86) this could lead to a loop of
        // inserting and then iterating those same entries, because the new keys
        // possibly sort after the old keys.
        self._batch([
            {
                type: 'del',
                key: key
            },
            {
                type: 'put',
                key: newKey,
                value: newValue
            }
        ], batchOptions, next);
    }
    function finish(err) {
        it.end(function(err2) {
            callback(err || err2);
        });
    }
    function identity(data) {
        return data;
    }
};
Level.destroy = function(location, prefix, callback) {
    if (typeof prefix === 'function') {
        callback = prefix;
        prefix = DEFAULT_PREFIX;
    }
    var request = indexedDB.deleteDatabase(prefix + location);
    request.onsuccess = function() {
        callback();
    };
    request.onerror = function(err) {
        callback(err);
    };
};

},{"abstract-leveldown":"jvgwU","inherits":"d3hL2","./iterator":"hPV5s","./util/serialize":"wUGIK","./util/deserialize":"gQaFd","./util/support":"h4ANv","./util/clear":"csz77","./util/key-range":"afsod"}],"hPV5s":[function(require,module,exports) {
'use strict';
var inherits = require('inherits');
var AbstractIterator = require('abstract-leveldown').AbstractIterator;
var createKeyRange = require('./util/key-range');
var deserialize = require('./util/deserialize');
var noop = function() {
};
module.exports = Iterator;
function Iterator(db, location, options) {
    AbstractIterator.call(this, db);
    this._limit = options.limit;
    this._count = 0;
    this._callback = null;
    this._cache = [];
    this._completed = false;
    this._aborted = false;
    this._error = null;
    this._transaction = null;
    this._keys = options.keys;
    this._values = options.values;
    this._keyAsBuffer = options.keyAsBuffer;
    this._valueAsBuffer = options.valueAsBuffer;
    if (this._limit === 0) {
        this._completed = true;
        return;
    }
    try {
        var keyRange = createKeyRange(options);
    } catch (e) {
        // The lower key is greater than the upper key.
        // IndexedDB throws an error, but we'll just return 0 results.
        this._completed = true;
        return;
    }
    this.createIterator(location, keyRange, options.reverse);
}
inherits(Iterator, AbstractIterator);
Iterator.prototype.createIterator = function(location, keyRange, reverse) {
    var self = this;
    var transaction = this.db.db.transaction([
        location
    ], 'readonly');
    var store = transaction.objectStore(location);
    var req = store.openCursor(keyRange, reverse ? 'prev' : 'next');
    req.onsuccess = function(ev) {
        var cursor = ev.target.result;
        if (cursor) self.onItem(cursor);
    };
    this._transaction = transaction;
    // If an error occurs (on the request), the transaction will abort.
    transaction.onabort = function() {
        self.onAbort(self._transaction.error || new Error('aborted by user'));
    };
    transaction.oncomplete = function() {
        self.onComplete();
    };
};
Iterator.prototype.onItem = function(cursor) {
    this._cache.push(cursor.key, cursor.value);
    if (this._limit <= 0 || ++this._count < this._limit) cursor.continue();
    this.maybeNext();
};
Iterator.prototype.onAbort = function(err) {
    this._aborted = true;
    this._error = err;
    this.maybeNext();
};
Iterator.prototype.onComplete = function() {
    this._completed = true;
    this.maybeNext();
};
Iterator.prototype.maybeNext = function() {
    if (this._callback) {
        this._next(this._callback);
        this._callback = null;
    }
};
Iterator.prototype._next = function(callback) {
    if (this._aborted) {
        // The error should be picked up by either next() or end().
        var err = this._error;
        this._error = null;
        this._nextTick(callback, err);
    } else if (this._cache.length > 0) {
        var key = this._cache.shift();
        var value = this._cache.shift();
        if (this._keys && key !== undefined) key = this._deserializeKey(key, this._keyAsBuffer);
        else key = undefined;
        if (this._values && value !== undefined) value = this._deserializeValue(value, this._valueAsBuffer);
        else value = undefined;
        this._nextTick(callback, null, key, value);
    } else if (this._completed) this._nextTick(callback);
    else this._callback = callback;
};
// Exposed for the v4 to v5 upgrade utility
Iterator.prototype._deserializeKey = deserialize;
Iterator.prototype._deserializeValue = deserialize;
Iterator.prototype._end = function(callback) {
    if (this._aborted || this._completed) return this._nextTick(callback, this._error);
    // Don't advance the cursor anymore, and the transaction will complete
    // on its own in the next tick. This approach is much cleaner than calling
    // transaction.abort() with its unpredictable event order.
    this.onItem = noop;
    this.onAbort = callback;
    this.onComplete = callback;
};

},{"inherits":"d3hL2","abstract-leveldown":"jvgwU","./util/key-range":"afsod","./util/deserialize":"gQaFd"}],"afsod":[function(require,module,exports) {
/* global IDBKeyRange */ 'use strict';
var ltgt = require('ltgt');
var NONE = {
};
module.exports = function createKeyRange(options) {
    var lower = ltgt.lowerBound(options, NONE);
    var upper = ltgt.upperBound(options, NONE);
    var lowerOpen = ltgt.lowerBoundExclusive(options, NONE);
    var upperOpen = ltgt.upperBoundExclusive(options, NONE);
    if (lower !== NONE && upper !== NONE) return IDBKeyRange.bound(lower, upper, lowerOpen, upperOpen);
    else if (lower !== NONE) return IDBKeyRange.lowerBound(lower, lowerOpen);
    else if (upper !== NONE) return IDBKeyRange.upperBound(upper, upperOpen);
    else return null;
};

},{"ltgt":"8XLmg"}],"gQaFd":[function(require,module,exports) {
var global = arguments[3];
'use strict';
var Buffer = require('buffer').Buffer;
var ta2str = function() {
    if (global.TextDecoder) {
        var decoder = new TextDecoder('utf-8');
        return decoder.decode.bind(decoder);
    } else return function ta2str(ta) {
        return ta2buf(ta).toString();
    };
}();
var ab2str = function() {
    if (global.TextDecoder) {
        var decoder = new TextDecoder('utf-8');
        return decoder.decode.bind(decoder);
    } else return function ab2str(ab) {
        return Buffer.from(ab).toString();
    };
}();
function ta2buf(ta) {
    var buf = Buffer.from(ta.buffer);
    if (ta.byteLength === ta.buffer.byteLength) return buf;
    else return buf.slice(ta.byteOffset, ta.byteOffset + ta.byteLength);
}
module.exports = function(data, asBuffer) {
    if (data instanceof Uint8Array) return asBuffer ? ta2buf(data) : ta2str(data);
    else if (data instanceof ArrayBuffer) return asBuffer ? Buffer.from(data) : ab2str(data);
    else return asBuffer ? Buffer.from(String(data)) : String(data);
};

},{"buffer":"bOetu"}],"wUGIK":[function(require,module,exports) {
var global = arguments[3];
'use strict';
var Buffer = require('buffer').Buffer;
// Returns either a Uint8Array or Buffer (doesn't matter to
// IndexedDB, because Buffer is a subclass of Uint8Array)
var str2bin = function() {
    if (global.TextEncoder) {
        var encoder = new TextEncoder('utf-8');
        return encoder.encode.bind(encoder);
    } else return Buffer.from;
}();
module.exports = function(data, asBuffer) {
    if (asBuffer) return Buffer.isBuffer(data) ? data : str2bin(String(data));
    else return String(data);
};

},{"buffer":"bOetu"}],"h4ANv":[function(require,module,exports) {
'use strict';
var Buffer = require('buffer').Buffer;
exports.test = function(key) {
    return function test(impl) {
        try {
            impl.cmp(key, 0);
            return true;
        } catch (err) {
            return false;
        }
    };
};
// Detect binary key support (IndexedDB Second Edition)
exports.bufferKeys = exports.test(Buffer.alloc(0));

},{"buffer":"bOetu"}],"csz77":[function(require,module,exports) {
'use strict';
module.exports = function clear(db, location, keyRange, options, callback) {
    if (options.limit === 0) return db._nextTick(callback);
    var transaction = db.db.transaction([
        location
    ], 'readwrite');
    var store = transaction.objectStore(location);
    var count = 0;
    transaction.oncomplete = function() {
        callback();
    };
    transaction.onabort = function() {
        callback(transaction.error || new Error('aborted by user'));
    };
    // A key cursor is faster (skips reading values) but not supported by IE
    var method = store.openKeyCursor ? 'openKeyCursor' : 'openCursor';
    var direction = options.reverse ? 'prev' : 'next';
    store[method](keyRange, direction).onsuccess = function(ev) {
        var cursor = ev.target.result;
        if (cursor) // Wait for a request to complete before continuing, saving CPU.
        store.delete(cursor.key).onsuccess = function() {
            if (options.limit <= 0 || ++count < options.limit) cursor.continue();
        };
    };
};

},{}],"89IM7":[function(require,module,exports) {
var process = require("process");
var EndStream = require("end-stream");
module.exports = LevelWriteStream;
function LevelWriteStream(db) {
    function writeStream(options) {
        options = options || {
        };
        var queue = [], stream = EndStream(write);
        return stream;
        function write(chunk, callback) {
            if (queue.length === 0) {
                process.nextTick(drain);
            }
            queue.push(chunk);
            stream.once("_drain", callback);
        }
        function drain() {
            if (queue.length === 1) {
                var chunk = queue[0];
                db.put(chunk.key, chunk.value, options, emit);
            } else {
                var arr = queue.map(function(chunk) {
                    chunk.type = "put";
                    return chunk;
                });
                db.batch(arr, options, emit);
            }
            queue.length = 0;
        }
        function emit(err) {
            stream.emit("_drain", err);
        }
    }
    return writeStream;
}

},{"process":"lDnB8","end-stream":"d2Dhn"}],"d2Dhn":[function(require,module,exports) {
var WriteStream = require("write-stream");
module.exports = EndStream;
function EndStream(write, end) {
    var counter = 0, ended = false;
    end = end || noop;
    var stream = WriteStream(function(chunk) {
        counter++;
        write(chunk, function(err) {
            if (err) return stream.emit("error", err);
            counter--;
            if (counter === 0 && ended) stream.emit("finish");
        });
    }, function() {
        ended = true;
        if (counter === 0) this.emit("finish");
    });
    return stream;
}
function noop() {
}

},{"write-stream":"88iFB"}],"88iFB":[function(require,module,exports) {
var Stream = require("stream");
module.exports = WriteStream;
WriteStream.toArray = require("./array");
function WriteStream(write, end) {
    var stream = new Stream(), ended = false;
    end = end || defaultEnd;
    stream.write = handleWrite;
    stream.end = handleEnd;
    // Support 0.8 pipe [LEGACY]
    stream.writable = true;
    function handleWrite(chunk) {
        var result = write.call(stream, chunk);
        return result === false ? false : true;
    }
    function handleEnd(chunk) {
        if (ended) {
            return;
        }
        ended = true;
        if (arguments.length) {
            stream.write(chunk);
        }
        end.call(stream);
    }
    return stream;
}
function defaultEnd() {
    this.emit("finish");
}

},{"stream":"bJ8aT","./array":"bInvS"}],"bInvS":[function(require,module,exports) {
var to = require("./index");
module.exports = toArray;
function toArray(array, end) {
    if (typeof array === "function") {
        end = array;
        array = [];
    }
    function writeArray(chunk) {
        array.push(chunk);
    }
    function endArray() {
        end(array);
        this.emit("end");
    }
    return to(writeArray, endArray);
}

},{"./index":"88iFB"}],"6ZiKL":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
const util = require('util');
const AbstractLevelDOWN = require('abstract-leveldown').AbstractLevelDOWN;
const binding = require('./binding');
const ChainedBatch = require('./chained-batch');
const Iterator = require('./iterator');
function LevelDOWN(location) {
    if (!(this instanceof LevelDOWN)) return new LevelDOWN(location);
    if (typeof location !== 'string') throw new Error('constructor requires a location string argument');
    AbstractLevelDOWN.call(this, {
        bufferKeys: true,
        snapshots: true,
        permanence: true,
        seek: true,
        clear: true,
        createIfMissing: true,
        errorIfExists: true,
        additionalMethods: {
            approximateSize: true,
            compactRange: true
        }
    });
    this.location = location;
    this.context = binding.db_init();
}
util.inherits(LevelDOWN, AbstractLevelDOWN);
LevelDOWN.prototype._open = function(options, callback) {
    binding.db_open(this.context, this.location, options, callback);
};
LevelDOWN.prototype._close = function(callback) {
    binding.db_close(this.context, callback);
};
LevelDOWN.prototype._serializeKey = function(key) {
    return Buffer.isBuffer(key) ? key : String(key);
};
LevelDOWN.prototype._serializeValue = function(value) {
    return Buffer.isBuffer(value) ? value : String(value);
};
LevelDOWN.prototype._put = function(key, value, options, callback) {
    binding.db_put(this.context, key, value, options, callback);
};
LevelDOWN.prototype._get = function(key, options, callback) {
    binding.db_get(this.context, key, options, callback);
};
LevelDOWN.prototype._del = function(key, options, callback) {
    binding.db_del(this.context, key, options, callback);
};
LevelDOWN.prototype._chainedBatch = function() {
    return new ChainedBatch(this);
};
LevelDOWN.prototype._batch = function(operations, options, callback) {
    binding.batch_do(this.context, operations, options, callback);
};
LevelDOWN.prototype.approximateSize = function(start, end, callback) {
    if (start == null || end == null || typeof start === 'function' || typeof end === 'function') throw new Error('approximateSize() requires valid `start` and `end` arguments');
    if (typeof callback !== 'function') throw new Error('approximateSize() requires a callback argument');
    start = this._serializeKey(start);
    end = this._serializeKey(end);
    binding.db_approximate_size(this.context, start, end, callback);
};
LevelDOWN.prototype.compactRange = function(start, end, callback) {
    if (start == null || end == null || typeof start === 'function' || typeof end === 'function') throw new Error('compactRange() requires valid `start` and `end` arguments');
    if (typeof callback !== 'function') throw new Error('compactRange() requires a callback argument');
    start = this._serializeKey(start);
    end = this._serializeKey(end);
    binding.db_compact_range(this.context, start, end, callback);
};
LevelDOWN.prototype.getProperty = function(property) {
    if (typeof property !== 'string') throw new Error('getProperty() requires a valid `property` argument');
    return binding.db_get_property(this.context, property);
};
LevelDOWN.prototype._iterator = function(options) {
    if (this.status !== 'open') // Prevent segfault
    throw new Error('cannot call iterator() before open()');
    return new Iterator(this, options);
};
LevelDOWN.destroy = function(location, callback) {
    if (arguments.length < 2) throw new Error('destroy() requires `location` and `callback` arguments');
    if (typeof location !== 'string') throw new Error('destroy() requires a location string argument');
    if (typeof callback !== 'function') throw new Error('destroy() requires a callback function argument');
    binding.destroy_db(location, callback);
};
LevelDOWN.repair = function(location, callback) {
    if (arguments.length < 2) throw new Error('repair() requires `location` and `callback` arguments');
    if (typeof location !== 'string') throw new Error('repair() requires a location string argument');
    if (typeof callback !== 'function') throw new Error('repair() requires a callback function argument');
    binding.repair_db(location, callback);
};
module.exports = LevelDOWN.default = LevelDOWN;

},{"buffer":"bOetu","util":"7sOXW","abstract-leveldown":"jvgwU","./binding":"kI3hL","./chained-batch":"6RiNy","./iterator":"iMx01"}],"kI3hL":[function(require,module,exports) {
var __dirname = "node_modules/leveldown";
module.exports = require('node-gyp-build')(__dirname);

},{"node-gyp-build":"97hK5"}],"97hK5":[function(require,module,exports) {
var process = require("process");
var fs = require('fs');
var path = require('path');
var os = require('os');
// Workaround to fix webpack's build warnings: 'the request of a dependency is an expression'
var runtimeRequire = typeof __webpack_require__ === 'function' ? __non_webpack_require__ : undefined // eslint-disable-line
;
var prebuildsOnly = false;
var abi1 = process.versions.modules // TODO: support old node where this is undef
;
var runtime1 = isElectron() ? 'electron' : 'node';
var arch = os.arch();
var platform1 = os.platform();
var libc = isAlpine(platform1) ? 'musl' : 'glibc';
var armv = (arch === 'arm64' ? '8' : process.config.variables.arm_version) || '';
var uv = (process.versions.uv || '').split('.')[0];
module.exports = load;
function load(dir) {
    return runtimeRequire(load.path(dir));
}
load.path = function(dir) {
    dir = path.resolve(dir || '.');
    try {
        var name = runtimeRequire(path.join(dir, 'package.json')).name.toUpperCase().replace(/-/g, '_');
        if (process.env[name + '_PREBUILD']) dir = process.env[name + '_PREBUILD'];
    } catch (err) {
    }
    if (!prebuildsOnly) {
        var release = getFirst(path.join(dir, 'build/Release'), matchBuild);
        if (release) return release;
        var debug = getFirst(path.join(dir, 'build/Debug'), matchBuild);
        if (debug) return debug;
    }
    // Find most specific flavor first
    var prebuilds = path.join(dir, 'prebuilds', platform1 + '-' + arch);
    var parsed = readdirSync(prebuilds).map(parseTags);
    var candidates = parsed.filter(matchTags(runtime1, abi1));
    var winner = candidates.sort(compareTags(runtime1))[0];
    if (winner) return path.join(prebuilds, winner.file);
    var target = [
        'platform=' + platform1,
        'arch=' + arch,
        'runtime=' + runtime1,
        'abi=' + abi1,
        'uv=' + uv,
        armv ? 'armv=' + armv : '',
        'libc=' + libc
    ].filter(Boolean).join(' ');
    throw new Error('No native build was found for ' + target);
};
function readdirSync(dir) {
    try {
        return fs.readdirSync(dir);
    } catch (err) {
        return [];
    }
}
function getFirst(dir, filter) {
    var files = readdirSync(dir).filter(filter);
    return files[0] && path.join(dir, files[0]);
}
function matchBuild(name) {
    return /\.node$/.test(name);
}
function parseTags(file) {
    var arr = file.split('.');
    var extension = arr.pop();
    var tags = {
        file: file,
        specificity: 0
    };
    if (extension !== 'node') return;
    for(var i = 0; i < arr.length; i++){
        var tag = arr[i];
        if (tag === 'node' || tag === 'electron' || tag === 'node-webkit') tags.runtime = tag;
        else if (tag === 'napi') tags.napi = true;
        else if (tag.slice(0, 3) === 'abi') tags.abi = tag.slice(3);
        else if (tag.slice(0, 2) === 'uv') tags.uv = tag.slice(2);
        else if (tag.slice(0, 4) === 'armv') tags.armv = tag.slice(4);
        else if (tag === 'glibc' || tag === 'musl') tags.libc = tag;
        else continue;
        tags.specificity++;
    }
    return tags;
}
function matchTags(runtime, abi) {
    return function(tags) {
        if (tags == null) return false;
        if (tags.runtime !== runtime && !runtimeAgnostic(tags)) return false;
        if (tags.abi !== abi && !tags.napi) return false;
        if (tags.uv && tags.uv !== uv) return false;
        if (tags.armv && tags.armv !== armv) return false;
        if (tags.libc && tags.libc !== libc) return false;
        return true;
    };
}
function runtimeAgnostic(tags) {
    return tags.runtime === 'node' && tags.napi;
}
function compareTags(runtime) {
    // Precedence: non-agnostic runtime, abi over napi, then by specificity.
    return function(a, b) {
        if (a.runtime !== b.runtime) return a.runtime === runtime ? -1 : 1;
        else if (a.abi !== b.abi) return a.abi ? -1 : 1;
        else if (a.specificity !== b.specificity) return a.specificity > b.specificity ? -1 : 1;
        else return 0;
    };
}
function isElectron() {
    if (process.versions && process.versions.electron) return true;
    return typeof window !== 'undefined' && window.process && window.process.type === 'renderer';
}
function isAlpine(platform) {
    return platform === 'linux' && fs.existsSync('/etc/alpine-release');
}
// Exposed for unit tests
// TODO: move to lib
load.parseTags = parseTags;
load.matchTags = matchTags;
load.compareTags = compareTags;

},{"process":"lDnB8","fs":"joWnX","path":"4RboN","os":"6rlpQ"}],"6rlpQ":[function(require,module,exports) {
exports.endianness = function() {
    return 'LE';
};
exports.hostname = function() {
    if (typeof location !== 'undefined') return location.hostname;
    else return '';
};
exports.loadavg = function() {
    return [];
};
exports.uptime = function() {
    return 0;
};
exports.freemem = function() {
    return Number.MAX_VALUE;
};
exports.totalmem = function() {
    return Number.MAX_VALUE;
};
exports.cpus = function() {
    return [];
};
exports.type = function() {
    return 'Browser';
};
exports.release = function() {
    if (typeof navigator !== 'undefined') return navigator.appVersion;
    return '';
};
exports.networkInterfaces = exports.getNetworkInterfaces = function() {
    return {
    };
};
exports.arch = function() {
    return 'javascript';
};
exports.platform = function() {
    return 'browser';
};
exports.tmpdir = exports.tmpDir = function() {
    return '/tmp';
};
exports.EOL = '\n';
exports.homedir = function() {
    return '/';
};

},{}],"6RiNy":[function(require,module,exports) {
const util = require('util');
const AbstractChainedBatch = require('abstract-leveldown').AbstractChainedBatch;
const binding = require('./binding');
function ChainedBatch(db) {
    AbstractChainedBatch.call(this, db);
    this.context = binding.batch_init(db.context);
}
ChainedBatch.prototype._put = function(key, value) {
    binding.batch_put(this.context, key, value);
};
ChainedBatch.prototype._del = function(key) {
    binding.batch_del(this.context, key);
};
ChainedBatch.prototype._clear = function() {
    binding.batch_clear(this.context);
};
ChainedBatch.prototype._write = function(options, callback) {
    binding.batch_write(this.context, options, callback);
};
util.inherits(ChainedBatch, AbstractChainedBatch);
module.exports = ChainedBatch;

},{"util":"7sOXW","abstract-leveldown":"jvgwU","./binding":"kI3hL"}],"iMx01":[function(require,module,exports) {
var process = require("process");
const util = require('util');
const AbstractIterator = require('abstract-leveldown').AbstractIterator;
const binding = require('./binding');
function Iterator(db, options) {
    AbstractIterator.call(this, db);
    this.context = binding.iterator_init(db.context, options);
    this.cache = null;
    this.finished = false;
}
util.inherits(Iterator, AbstractIterator);
Iterator.prototype._seek = function(target) {
    if (target.length === 0) throw new Error('cannot seek() to an empty target');
    this.cache = null;
    binding.iterator_seek(this.context, target);
    this.finished = false;
};
Iterator.prototype._next = function(callback) {
    var that = this;
    if (this.cache && this.cache.length) process.nextTick(callback, null, this.cache.pop(), this.cache.pop());
    else if (this.finished) process.nextTick(callback);
    else binding.iterator_next(this.context, function(err, array, finished) {
        if (err) return callback(err);
        that.cache = array;
        that.finished = finished;
        that._next(callback);
    });
    return this;
};
Iterator.prototype._end = function(callback) {
    delete this.cache;
    binding.iterator_end(this.context, callback);
};
module.exports = Iterator;

},{"process":"lDnB8","util":"7sOXW","abstract-leveldown":"jvgwU","./binding":"kI3hL"}]},["4gkza"], null, "parcelRequire9123")

//# sourceMappingURL=index.es.308fca7a.js.map
