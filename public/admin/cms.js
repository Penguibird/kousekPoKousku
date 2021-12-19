/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@gatsbyjs/webpack-hot-middleware/client-overlay.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@gatsbyjs/webpack-hot-middleware/client-overlay.js ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*eslint-env browser*/

var clientOverlay = document.createElement('div');
clientOverlay.id = 'webpack-hot-middleware-clientOverlay';
var styles = {
  background: 'rgba(0,0,0,0.85)',
  color: '#e8e8e8',
  lineHeight: '1.6',
  whiteSpace: 'pre',
  fontFamily: 'Menlo, Consolas, monospace',
  fontSize: '13px',
  position: 'fixed',
  zIndex: 9999,
  padding: '10px',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  overflow: 'auto',
  dir: 'ltr',
  textAlign: 'left',
};

var ansiHTML = __webpack_require__(/*! ansi-html */ "./node_modules/ansi-html/index.js");
var colors = {
  reset: ['transparent', 'transparent'],
  black: '181818',
  red: 'ff3348',
  green: '3fff4f',
  yellow: 'ffd30e',
  blue: '169be0',
  magenta: 'f840b7',
  cyan: '0ad8e9',
  lightgrey: 'ebe7e3',
  darkgrey: '6d7891',
};

var htmlEntities = __webpack_require__(/*! html-entities */ "./node_modules/html-entities/lib/index.js");

function showProblems(type, lines) {
  clientOverlay.innerHTML = '';
  lines.forEach(function (msg) {
    msg = ansiHTML(htmlEntities.encode(msg));
    var div = document.createElement('div');
    div.style.marginBottom = '26px';
    div.innerHTML = problemType(type) + ' in ' + msg;
    clientOverlay.appendChild(div);
  });
  if (document.body) {
    document.body.appendChild(clientOverlay);
  }
}

function clear() {
  if (document.body && clientOverlay.parentNode) {
    document.body.removeChild(clientOverlay);
  }
}

function problemType(type) {
  var problemColors = {
    errors: colors.red,
    warnings: colors.yellow,
  };
  var color = problemColors[type] || colors.red;
  return (
    '<span style="background-color:#' +
    color +
    '; color:#000000; padding:3px 6px; border-radius: 4px;">' +
    type.slice(0, -1).toUpperCase() +
    '</span>'
  );
}

module.exports = function (options) {
  for (var color in options.ansiColors) {
    if (color in colors) {
      colors[color] = options.ansiColors[color];
    }
    ansiHTML.setColors(colors);
  }

  for (var style in options.overlayStyles) {
    styles[style] = options.overlayStyles[style];
  }

  for (var key in styles) {
    clientOverlay.style[key] = styles[key];
  }

  return {
    showProblems: showProblems,
    clear: clear,
  };
};

module.exports.clear = clear;
module.exports.showProblems = showProblems;


/***/ }),

/***/ "./node_modules/@gatsbyjs/webpack-hot-middleware/client.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@gatsbyjs/webpack-hot-middleware/client.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
/*eslint-env browser*/
/*global __resourceQuery __webpack_public_path__*/

var options = {
  path: '/__webpack_hmr',
  timeout: 20 * 1000,
  overlay: true,
  reload: false,
  log: true,
  warn: true,
  name: '',
  autoConnect: true,
  overlayStyles: {},
  overlayWarnings: false,
  ansiColors: {},
};
if (false) { var overrides, querystring; }

if (typeof window === 'undefined') {
  // do nothing
} else if (typeof window.EventSource === 'undefined') {
  console.warn(
    "webpack-hot-middleware's client requires EventSource to work. " +
      'You should include a polyfill if you want to support this browser: ' +
      'https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events#Tools'
  );
} else {
  if (options.autoConnect) {
    connect();
  }
}

/* istanbul ignore next */
function setOptionsAndConnect(overrides) {
  setOverrides(overrides);
  connect();
}

function setOverrides(overrides) {
  if (overrides.autoConnect)
    options.autoConnect = overrides.autoConnect == 'true';
  if (overrides.path) options.path = overrides.path;
  if (overrides.timeout) options.timeout = overrides.timeout;
  if (overrides.overlay) options.overlay = overrides.overlay !== 'false';
  if (overrides.reload) options.reload = overrides.reload !== 'false';
  if (overrides.noInfo && overrides.noInfo !== 'false') {
    options.log = false;
  }
  if (overrides.name) {
    options.name = overrides.name;
  }
  if (overrides.quiet && overrides.quiet !== 'false') {
    options.log = false;
    options.warn = false;
  }

  if (overrides.dynamicPublicPath) {
    options.path = __webpack_require__.p + options.path;
  }

  if (overrides.ansiColors)
    options.ansiColors = JSON.parse(overrides.ansiColors);
  if (overrides.overlayStyles)
    options.overlayStyles = JSON.parse(overrides.overlayStyles);

  if (overrides.overlayWarnings) {
    options.overlayWarnings = overrides.overlayWarnings == 'true';
  }
}

function EventSourceWrapper() {
  var source;
  var lastActivity = new Date();
  var listeners = [];

  init();
  var timer = setInterval(function () {
    if (new Date() - lastActivity > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);

  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }

  function handleOnline() {
    if (options.log) console.log('[HMR] connected');
    lastActivity = new Date();
  }

  function handleMessage(event) {
    lastActivity = new Date();
    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }
  }

  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }

  return {
    addMessageListener: function (fn) {
      listeners.push(fn);
    },
  };
}

function getEventSourceWrapper() {
  if (!window.__whmEventSourceWrapper) {
    window.__whmEventSourceWrapper = {};
  }
  if (!window.__whmEventSourceWrapper[options.path]) {
    // cache the wrapper for other entries loaded on
    // the same page with the same options.path
    window.__whmEventSourceWrapper[options.path] = EventSourceWrapper();
  }
  return window.__whmEventSourceWrapper[options.path];
}

function connect() {
  getEventSourceWrapper().addMessageListener(handleMessage);

  function handleMessage(event) {
    if (event.data == '\uD83D\uDC93') {
      return;
    }
    try {
      processMessage(JSON.parse(event.data));
    } catch (ex) {
      if (options.warn) {
        console.warn('Invalid HMR message: ' + event.data + '\n' + ex);
      }
    }
  }
}

// the reporter needs to be a singleton on the page
// in case the client is being used by multiple bundles
// we only want to report once.
// all the errors will go to all clients
var singletonKey = '__webpack_hot_middleware_reporter__';
var reporter;
if (typeof window !== 'undefined') {
  if (!window[singletonKey]) {
    window[singletonKey] = createReporter();
  }
  reporter = window[singletonKey];
}

function createReporter() {
  var strip = __webpack_require__(/*! strip-ansi */ "./node_modules/@gatsbyjs/webpack-hot-middleware/node_modules/strip-ansi/index.js");

  var overlay;
  if (typeof document !== 'undefined' && options.overlay) {
    overlay = __webpack_require__(/*! ./client-overlay */ "./node_modules/@gatsbyjs/webpack-hot-middleware/client-overlay.js")({
      ansiColors: options.ansiColors,
      overlayStyles: options.overlayStyles,
    });
  }

  var styles = {
    errors: 'color: #ff0000;',
    warnings: 'color: #999933;',
  };
  var previousProblems = null;
  function log(type, obj) {
    var newProblems = obj[type]
      .map(function (msg) {
        return strip(msg.message ? msg.message : msg);
      })
      .join('\n');
    if (previousProblems == newProblems) {
      return;
    } else {
      previousProblems = newProblems;
    }

    var style = styles[type];
    var name = obj.name ? "'" + obj.name + "' " : '';
    var title = '[HMR] bundle ' + name + 'has ' + obj[type].length + ' ' + type;
    // NOTE: console.warn or console.error will print the stack trace
    // which isn't helpful here, so using console.log to escape it.
    if (console.group && console.groupEnd) {
      console.group('%c' + title, style);
      console.log('%c' + newProblems, style);
      console.groupEnd();
    } else {
      console.log(
        '%c' + title + '\n\t%c' + newProblems.replace(/\n/g, '\n\t'),
        style + 'font-weight: bold;',
        style + 'font-weight: normal;'
      );
    }
  }

  return {
    cleanProblemsCache: function () {
      previousProblems = null;
    },
    problems: function (type, obj) {
      if (options.warn) {
        log(type, obj);
      }
      if (overlay) {
        if (options.overlayWarnings || type === 'errors') {
          overlay.showProblems(type, obj[type]);
          return false;
        }
        overlay.clear();
      }
      return true;
    },
    success: function () {
      if (overlay) overlay.clear();
    },
    useCustomOverlay: function (customOverlay) {
      overlay = customOverlay;
    },
  };
}

var processUpdate = __webpack_require__(/*! ./process-update */ "./node_modules/@gatsbyjs/webpack-hot-middleware/process-update.js");

var customHandler;
var subscribeAllHandler;
function processMessage(obj) {
  switch (obj.action) {
    case 'building':
      if (options.log) {
        console.log(
          '[HMR] bundle ' +
            (obj.name ? "'" + obj.name + "' " : '') +
            'rebuilding'
        );
      }
      break;
    case 'built':
      if (options.log) {
        console.log(
          '[HMR] bundle ' +
            (obj.name ? "'" + obj.name + "' " : '') +
            'rebuilt in ' +
            obj.time +
            'ms'
        );
      }
    // fall through
    case 'sync':
      if (obj.name && options.name && obj.name !== options.name) {
        return;
      }
      var applyUpdate = true;
      if (obj.errors.length > 0) {
        if (reporter) reporter.problems('errors', obj);
        applyUpdate = false;
      } else if (obj.warnings.length > 0) {
        if (reporter) {
          var overlayShown = reporter.problems('warnings', obj);
          applyUpdate = overlayShown;
        }
      } else {
        if (reporter) {
          reporter.cleanProblemsCache();
          reporter.success();
        }
      }
      if (applyUpdate) {
        processUpdate(obj.hash, obj.modules, options);
      }
      break;
    default:
      if (customHandler) {
        customHandler(obj);
      }
  }

  if (subscribeAllHandler) {
    subscribeAllHandler(obj);
  }
}

if (module) {
  module.exports = {
    subscribeAll: function subscribeAll(handler) {
      subscribeAllHandler = handler;
    },
    subscribe: function subscribe(handler) {
      customHandler = handler;
    },
    useCustomOverlay: function useCustomOverlay(customOverlay) {
      if (reporter) reporter.useCustomOverlay(customOverlay);
    },
    setOptionsAndConnect: setOptionsAndConnect,
  };
}


/***/ }),

/***/ "./node_modules/@gatsbyjs/webpack-hot-middleware/node_modules/strip-ansi/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@gatsbyjs/webpack-hot-middleware/node_modules/strip-ansi/index.js ***!
  \****************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

const ansiRegex = __webpack_require__(/*! ansi-regex */ "./node_modules/ansi-regex/index.js");

module.exports = string => typeof string === 'string' ? string.replace(ansiRegex(), '') : string;


/***/ }),

/***/ "./node_modules/@gatsbyjs/webpack-hot-middleware/process-update.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@gatsbyjs/webpack-hot-middleware/process-update.js ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Based heavily on https://github.com/webpack/webpack/blob/
 *  c0afdf9c6abc1dd70707c594e473802a566f7b6e/hot/only-dev-server.js
 * Original copyright Tobias Koppers @sokra (MIT license)
 */

/* global window __webpack_hash__ */

if (false) {}

var hmrDocsUrl = 'https://webpack.js.org/concepts/hot-module-replacement/'; // eslint-disable-line max-len

var lastHash;
var failureStatuses = { abort: 1, fail: 1 };
var applyOptions = {
  ignoreUnaccepted: true,
  ignoreDeclined: true,
  ignoreErrored: true,
  onUnaccepted: function (data) {
    console.warn(
      'Ignored an update to unaccepted module ' + data.chain.join(' -> ')
    );
  },
  onDeclined: function (data) {
    console.warn(
      'Ignored an update to declined module ' + data.chain.join(' -> ')
    );
  },
  onErrored: function (data) {
    console.error(data.error);
    console.warn(
      'Ignored an error while updating module ' +
        data.moduleId +
        ' (' +
        data.type +
        ')'
    );
  },
};

function upToDate(hash) {
  if (hash) lastHash = hash;
  return lastHash == __webpack_require__.h();
}

module.exports = function (hash, moduleMap, options) {
  var reload = options.reload;
  if (!upToDate(hash) && module.hot.status() == 'idle') {
    if (options.log) console.log('[HMR] Checking for updates on the server...');
    check();
  }

  function check() {
    var cb = function (err, updatedModules) {
      if (err) return handleError(err);

      if (!updatedModules) {
        if (options.warn) {
          console.warn('[HMR] Cannot find update (Full reload needed)');
          console.warn('[HMR] (Probably because of restarting the server)');
        }
        performReload();
        return null;
      }

      var applyCallback = function (applyErr, renewedModules) {
        if (applyErr) return handleError(applyErr);

        if (!upToDate()) check();

        logUpdates(updatedModules, renewedModules);
      };

      var applyResult = module.hot.apply(applyOptions, applyCallback);
      // webpack 2 promise
      if (applyResult && applyResult.then) {
        // HotModuleReplacement.runtime.js refers to the result as `outdatedModules`
        applyResult.then(function (outdatedModules) {
          applyCallback(null, outdatedModules);
        });
        applyResult.catch(applyCallback);
      }
    };

    var result = module.hot.check(false, cb);
    // webpack 2 promise
    if (result && result.then) {
      result.then(function (updatedModules) {
        cb(null, updatedModules);
      });
      result.catch(cb);
    }
  }

  function logUpdates(updatedModules, renewedModules) {
    var unacceptedModules = updatedModules.filter(function (moduleId) {
      return renewedModules && renewedModules.indexOf(moduleId) < 0;
    });

    if (unacceptedModules.length > 0) {
      if (options.warn) {
        console.warn(
          "[HMR] The following modules couldn't be hot updated: " +
            '(Full reload needed)\n' +
            'This is usually because the modules which have changed ' +
            '(and their parents) do not know how to hot reload themselves. ' +
            'See ' +
            hmrDocsUrl +
            ' for more details.'
        );
        unacceptedModules.forEach(function (moduleId) {
          console.warn('[HMR]  - ' + (moduleMap[moduleId] || moduleId));
        });
      }
      performReload();
      return;
    }

    if (options.log) {
      if (!renewedModules || renewedModules.length === 0) {
        console.log('[HMR] Nothing hot updated.');
      } else {
        console.log('[HMR] Updated modules:');
        renewedModules.forEach(function (moduleId) {
          console.log('[HMR]  - ' + (moduleMap[moduleId] || moduleId));
        });
      }

      if (upToDate()) {
        console.log('[HMR] App is up to date.');
      }
    }
  }

  function handleError(err) {
    if (module.hot.status() in failureStatuses) {
      if (options.warn) {
        console.warn('[HMR] Cannot check for update (Full reload needed)');
        console.warn('[HMR] ' + (err.stack || err.message));
      }
      performReload();
      return;
    }
    if (options.warn) {
      console.warn('[HMR] Update check failed: ' + (err.stack || err.message));
    }
  }

  function performReload() {
    if (reload) {
      if (options.warn) console.warn('[HMR] Reloading page');
      window.location.reload();
    }
  }
};


/***/ }),

/***/ "./node_modules/@ncwidgets/id/dist/control.js":
/*!****************************************************!*\
  !*** ./node_modules/@ncwidgets/id/dist/control.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "react"));
const shortid_1 = __importDefault(__webpack_require__(/*! shortid */ "./node_modules/shortid/index.js"));
class Control extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        if (props.value)
            return;
        this.generateId();
    }
    componentDidMount() {
        const { field } = this.props;
        if (!field.get('hidden'))
            return;
        const $input = this.inputRef.current;
        if (!$input)
            return;
        const $container = $input.parentElement;
        if (!$container)
            return;
        $container.style.display = 'none';
    }
    generateId() {
        const { field, onChange } = this.props;
        const usePrefix = field.get('prefix');
        const usePostfix = field.get('postfix');
        const useTimestamp = field.get('timestamp');
        const prefix = usePrefix ? usePrefix + '-' : '';
        const timestamp = useTimestamp ? Date.now() + '-' : '';
        const postfix = usePostfix ? '-' + usePostfix : '';
        const id = prefix + timestamp + shortid_1.default() + postfix;
        onChange(id);
    }
    componentDidUpdate() {
        if (this.props.value)
            return;
        this.generateId();
    }
    render() {
        const { forID, classNameWrapper, setActiveStyle, setInactiveStyle, value, } = this.props;
        return (React.createElement("input", { type: 'text', className: classNameWrapper, style: {
                color: '#cdcdcd',
            }, value: value || '', id: forID, onFocus: setActiveStyle, onBlur: setInactiveStyle, disabled: true }));
    }
}
exports.Control = Control;


/***/ }),

/***/ "./node_modules/@ncwidgets/id/dist/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@ncwidgets/id/dist/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const control_1 = __webpack_require__(/*! ./control */ "./node_modules/@ncwidgets/id/dist/control.js");
exports.Control = control_1.Control;
const Widget = {
    name: 'ncw-id',
    controlComponent: control_1.Control,
};
exports.Widget = Widget;


/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ErrorOverlayEntry.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ErrorOverlayEntry.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var __resourceQuery = "";
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/gatsby/dist/utils/fast-refresh-module.js */ "./node_modules/gatsby/dist/utils/fast-refresh-module.js");
/* provided dependency */ var __react_refresh_init_socket__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/WHMEventSource.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/WHMEventSource.js");
/* global __react_refresh_error_overlay__, __react_refresh_init_socket__, __resourceQuery */

const errorEventHandlers = __webpack_require__(/*! ./utils/errorEventHandlers */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/errorEventHandlers.js");
const formatWebpackErrors = __webpack_require__(/*! ./utils/formatWebpackErrors */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/formatWebpackErrors.js");

// Setup error states
let isHotReload = false;
let hasRuntimeErrors = false;

/**
 * Try dismissing the compile error overlay.
 * This will also reset runtime error records (if any),
 * because we have new source to evaluate.
 * @returns {void}
 */
function tryDismissErrorOverlay() {
  __react_refresh_error_overlay__.clearCompileError();
  __react_refresh_error_overlay__.clearRuntimeErrors(!hasRuntimeErrors);
  hasRuntimeErrors = false;
}

/**
 * A function called after a compile success signal is received from Webpack.
 * @returns {void}
 */
function handleCompileSuccess() {
  isHotReload = true;

  if (isHotReload) {
    tryDismissErrorOverlay();
  }
}

/**
 * A function called after a compile errored signal is received from Webpack.
 * @param {string} errors
 * @returns {void}
 */
function handleCompileErrors(errors) {
  isHotReload = true;

  const formattedErrors = formatWebpackErrors(errors);

  // Only show the first error
  __react_refresh_error_overlay__.showCompileError(formattedErrors[0]);
}

/**
 * Handles compilation messages from Webpack.
 * Integrates with a compile error overlay.
 * @param {*} message A Webpack HMR message sent via WebSockets.
 * @returns {void}
 */
function compileMessageHandler(message) {
  switch (message.type) {
    case 'ok':
    case 'still-ok':
    case 'warnings': {
      // TODO: Implement handling for warnings
      handleCompileSuccess();
      break;
    }
    case 'errors': {
      handleCompileErrors(message.data);
      break;
    }
    default: {
      // Do nothing.
    }
  }
}

// Only register if we're in non-production mode and if window is defined
if ( true && typeof window !== 'undefined') {
  // Registers handlers for compile errors
  __react_refresh_init_socket__(compileMessageHandler, __resourceQuery);
  // Registers handlers for runtime errors
  errorEventHandlers.error(function handleError(error) {
    hasRuntimeErrors = true;
    __react_refresh_error_overlay__.handleRuntimeError(error);
  });
  errorEventHandlers.unhandledRejection(function handleUnhandledPromiseRejection(error) {
    hasRuntimeErrors = true;
    __react_refresh_error_overlay__.handleRuntimeError(error);
  });
}


/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

const safeThis = __webpack_require__(/*! ./utils/safeThis */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/safeThis.js");

if ( true && typeof safeThis !== 'undefined') {
  // Only inject the runtime if it hasn't been injected
  if (!safeThis.__reactRefreshInjected) {
    const RefreshRuntime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
    // Inject refresh runtime into global scope
    RefreshRuntime.injectIntoGlobalHook(safeThis);

    // Mark the runtime as injected to prevent double-injection
    safeThis.__reactRefreshInjected = true;
  }
}


/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/errorEventHandlers.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/errorEventHandlers.js ***!
  \**********************************************************************************************/
/***/ (function(module) {

/**
 * @callback EventCallback
 * @param {string | Error | null} context
 * @returns {void}
 */
/**
 * @callback EventHandler
 * @param {Event} event
 * @returns {void}
 */

/**
 * A function that creates an event handler for the `error` event.
 * @param {EventCallback} callback A function called to handle the error context.
 * @returns {EventHandler} A handler for the `error` event.
 */
function createErrorHandler(callback) {
  return function errorHandler(event) {
    if (!event || !event.error) {
      return callback(null);
    }
    if (event.error instanceof Error) {
      return callback(event.error);
    }
    // A non-error was thrown, we don't have a trace. :(
    // Look in your browser's devtools for more information
    return callback(new Error(event.error));
  };
}

/**
 * A function that creates an event handler for the `unhandledrejection` event.
 * @param {EventCallback} callback A function called to handle the error context.
 * @returns {EventHandler} A handler for the `unhandledrejection` event.
 */
function createRejectionHandler(callback) {
  return function rejectionHandler(event) {
    if (!event || !event.reason) {
      return callback(new Error('Unknown'));
    }
    if (event.reason instanceof Error) {
      return callback(event.reason);
    }
    // A non-error was rejected, we don't have a trace :(
    // Look in your browser's devtools for more information
    return callback(new Error(event.reason));
  };
}

/**
 * Creates a handler that registers an EventListener on window for a valid type
 * and calls a callback when the event fires.
 * @param {string} eventType A valid DOM event type.
 * @param {function(EventCallback): EventHandler} createHandler A function that creates an event handler.
 * @returns {register} A function that registers the EventListener given a callback.
 */
function createWindowEventHandler(eventType, createHandler) {
  /**
   * @type {EventHandler | null} A cached event handler function.
   */
  let eventHandler = null;

  /**
   * Unregisters an EventListener if it has been registered.
   * @returns {void}
   */
  function unregister() {
    if (eventHandler === null) {
      return;
    }
    window.removeEventListener(eventType, eventHandler);
    eventHandler = null;
  }

  /**
   * Registers an EventListener if it hasn't been registered.
   * @param {EventCallback} callback A function called after the event handler to handle its context.
   * @returns {unregister | void} A function to unregister the registered EventListener if registration is performed.
   */
  function register(callback) {
    if (eventHandler !== null) {
      return;
    }
    eventHandler = createHandler(callback);
    window.addEventListener(eventType, eventHandler);

    return unregister;
  }

  return register;
}

module.exports = {
  error: createWindowEventHandler('error', createErrorHandler),
  unhandledRejection: createWindowEventHandler('unhandledrejection', createRejectionHandler),
};


/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/formatWebpackErrors.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/formatWebpackErrors.js ***!
  \***********************************************************************************************/
/***/ (function(module) {

/**
 * @typedef {Object} WebpackErrorObj
 * @property {string} moduleIdentifier
 * @property {string} moduleName
 * @property {string} message
 */

const friendlySyntaxErrorLabel = 'Syntax error:';

/**
 * Checks if the error message is for a syntax error.
 * @param {string} message The raw Webpack error message.
 * @returns {boolean} Whether the error message is for a syntax error.
 */
function isLikelyASyntaxError(message) {
  return message.indexOf(friendlySyntaxErrorLabel) !== -1;
}

/**
 * Cleans up Webpack error messages.
 *
 * This implementation is based on the one from [create-react-app](https://github.com/facebook/create-react-app/blob/edc671eeea6b7d26ac3f1eb2050e50f75cf9ad5d/packages/react-dev-utils/formatWebpackMessages.js).
 * @param {string} message The raw Webpack error message.
 * @returns {string} The formatted Webpack error message.
 */
function formatMessage(message) {
  let lines = message.split('\n');

  // Strip Webpack-added headers off errors/warnings
  // https://github.com/webpack/webpack/blob/master/lib/ModuleError.js
  lines = lines.filter(function (line) {
    return !/Module [A-z ]+\(from/.test(line);
  });

  // Remove leading newline
  if (lines.length > 2 && lines[1].trim() === '') {
    lines.splice(1, 1);
  }

  // Remove duplicated newlines
  lines = lines.filter(function (line, index, arr) {
    return index === 0 || line.trim() !== '' || line.trim() !== arr[index - 1].trim();
  });

  // Clean up the file name
  lines[0] = lines[0].replace(/^(.*) \d+:\d+-\d+$/, '$1');

  // Cleans up verbose "module not found" messages for files and packages.
  if (lines[1] && lines[1].indexOf('Module not found: ') === 0) {
    lines = [
      lines[0],
      lines[1]
        .replace('Error: ', '')
        .replace('Module not found: Cannot find file:', 'Cannot find file:'),
    ];
  }

  message = lines.join('\n');

  // Clean up syntax errors
  message = message.replace('SyntaxError:', friendlySyntaxErrorLabel);

  // Internal stacks are generally useless, so we strip them -
  // except the stacks containing `webpack:`,
  // because they're normally from user code generated by webpack.
  message = message.replace(/^\s*at\s((?!webpack:).)*:\d+:\d+[\s)]*(\n|$)/gm, ''); // at ... ...:x:y
  message = message.replace(/^\s*at\s((?!webpack:).)*<anonymous>[\s)]*(\n|$)/gm, ''); // at ... <anonymous>
  message = message.replace(/^\s*at\s<anonymous>(\n|$)/gm, ''); // at <anonymous>

  return message.trim();
}

/**
 * Formats Webpack error messages into a more readable format.
 * @param {Array<string | WebpackErrorObj>} errors An array of Webpack error messages.
 * @returns {string[]} The formatted Webpack error messages.
 */
function formatWebpackErrors(errors) {
  let formattedErrors = errors.map(function (errorObjOrMessage) {
    // Webpack 5 compilation errors are in the form of descriptor objects,
    // so we have to join pieces to get the format we want.
    if (typeof errorObjOrMessage === 'object') {
      return formatMessage([errorObjOrMessage.moduleName, errorObjOrMessage.message].join('\n'));
    }
    // Webpack 4 compilation errors are strings
    return formatMessage(errorObjOrMessage);
  });
  if (formattedErrors.some(isLikelyASyntaxError)) {
    // If there are any syntax errors, show just them.
    formattedErrors = formattedErrors.filter(isLikelyASyntaxError);
  }
  return formattedErrors;
}

module.exports = formatWebpackErrors;


/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/safeThis.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/safeThis.js ***!
  \************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* global globalThis */
/*
  This file is copied from `core-js`.
  https://github.com/zloirock/core-js/blob/master/packages/core-js/internals/global.js

  MIT License
  Author: Denis Pushkarev (@zloirock)
*/

const check = function (it) {
  return it && it.Math == Math && it;
};

module.exports =
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  Function('return this')();


/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js ***!
  \***************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* global __webpack_require__ */
const Refresh = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");

/**
 * Extracts exports from a webpack module object.
 * @param {string} moduleId A Webpack module ID.
 * @returns {*} An exports object from the module.
 */
function getModuleExports(moduleId) {
  return __webpack_require__.c[moduleId].exports;
}

/**
 * Calculates the signature of a React refresh boundary.
 * If this signature changes, it's unsafe to accept the boundary.
 *
 * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/907d6af22ac6ebe58572be418e9253a90665ecbd/packages/metro/src/lib/polyfills/require.js#L795-L816).
 * @param {*} moduleExports A Webpack module exports object.
 * @returns {string[]} A React refresh boundary signature array.
 */
function getReactRefreshBoundarySignature(moduleExports) {
  const signature = [];
  signature.push(Refresh.getFamilyByType(moduleExports));

  if (moduleExports == null || typeof moduleExports !== 'object') {
    // Exit if we can't iterate over exports.
    return signature;
  }

  for (let key in moduleExports) {
    if (key === '__esModule') {
      continue;
    }

    signature.push(key);
    signature.push(Refresh.getFamilyByType(moduleExports[key]));
  }

  return signature;
}

/**
 * Creates a helper that performs a delayed React refresh.
 * @returns {enqueueUpdate} A debounced React refresh function.
 */
function createDebounceUpdate() {
  /**
   * A cached setTimeout handler.
   * @type {number | undefined}
   */
  let refreshTimeout;

  /**
   * Performs react refresh on a delay and clears the error overlay.
   * @param {function(): void} callback
   * @returns {void}
   */
  function enqueueUpdate(callback) {
    if (typeof refreshTimeout === 'undefined') {
      refreshTimeout = setTimeout(function () {
        refreshTimeout = undefined;
        Refresh.performReactRefresh();
        callback();
      }, 30);
    }
  }

  return enqueueUpdate;
}

/**
 * Checks if all exports are likely a React component.
 *
 * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/febdba2383113c88296c61e28e4ef6a7f4939fda/packages/metro/src/lib/polyfills/require.js#L748-L774).
 * @param {*} moduleExports A Webpack module exports object.
 * @returns {boolean} Whether the exports are React component like.
 */
function isReactRefreshBoundary(moduleExports) {
  if (Refresh.isLikelyComponentType(moduleExports)) {
    return true;
  }
  if (moduleExports === undefined || moduleExports === null || typeof moduleExports !== 'object') {
    // Exit if we can't iterate over exports.
    return false;
  }

  let hasExports = false;
  let areAllExportsComponents = true;
  for (let key in moduleExports) {
    hasExports = true;

    // This is the ES Module indicator flag
    if (key === '__esModule') {
      continue;
    }

    // We can (and have to) safely execute getters here,
    // as Webpack manually assigns harmony exports to getters,
    // without any side-effects attached.
    // Ref: https://github.com/webpack/webpack/blob/b93048643fe74de2a6931755911da1212df55897/lib/MainTemplate.js#L281
    const exportValue = moduleExports[key];
    if (!Refresh.isLikelyComponentType(exportValue)) {
      areAllExportsComponents = false;
    }
  }

  return hasExports && areAllExportsComponents;
}

/**
 * Checks if exports are likely a React component and registers them.
 *
 * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/febdba2383113c88296c61e28e4ef6a7f4939fda/packages/metro/src/lib/polyfills/require.js#L818-L835).
 * @param {*} moduleExports A Webpack module exports object.
 * @param {string} moduleId A Webpack module ID.
 * @returns {void}
 */
function registerExportsForReactRefresh(moduleExports, moduleId) {
  if (Refresh.isLikelyComponentType(moduleExports)) {
    // Register module.exports if it is likely a component
    Refresh.register(moduleExports, moduleId + ' %exports%');
  }

  if (moduleExports === undefined || moduleExports === null || typeof moduleExports !== 'object') {
    // Exit if we can't iterate over the exports.
    return;
  }

  for (let key in moduleExports) {
    // Skip registering the ES Module indicator
    if (key === '__esModule') {
      continue;
    }

    const exportValue = moduleExports[key];
    if (Refresh.isLikelyComponentType(exportValue)) {
      const typeID = moduleId + ' %exports% ' + key;
      Refresh.register(exportValue, typeID);
    }
  }
}

/**
 * Compares previous and next module objects to check for mutated boundaries.
 *
 * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/907d6af22ac6ebe58572be418e9253a90665ecbd/packages/metro/src/lib/polyfills/require.js#L776-L792).
 * @param {*} prevExports The current Webpack module exports object.
 * @param {*} nextExports The next Webpack module exports object.
 * @returns {boolean} Whether the React refresh boundary should be invalidated.
 */
function shouldInvalidateReactRefreshBoundary(prevExports, nextExports) {
  const prevSignature = getReactRefreshBoundarySignature(prevExports);
  const nextSignature = getReactRefreshBoundarySignature(nextExports);

  if (prevSignature.length !== nextSignature.length) {
    return true;
  }

  for (let i = 0; i < nextSignature.length; i += 1) {
    if (prevSignature[i] !== nextSignature[i]) {
      return true;
    }
  }

  return false;
}

module.exports = Object.freeze({
  enqueueUpdate: createDebounceUpdate(),
  getModuleExports: getModuleExports,
  isReactRefreshBoundary: isReactRefreshBoundary,
  shouldInvalidateReactRefreshBoundary: shouldInvalidateReactRefreshBoundary,
  registerExportsForReactRefresh: registerExportsForReactRefresh,
});


/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/WHMEventSource.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/WHMEventSource.js ***!
  \*************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * The hard-coded singleton key for webpack-hot-middleware's client instance.
 *
 * [Ref](https://github.com/webpack-contrib/webpack-hot-middleware/blob/cb29abb9dde435a1ac8e9b19f82d7d36b1093198/client.js#L152)
 */
const singletonKey = '__webpack_hot_middleware_reporter__';

/**
 * Initializes a socket server for HMR for webpack-hot-middleware.
 * @param {function(*): void} messageHandler A handler to consume Webpack compilation messages.
 * @returns {void}
 */
function initWHMEventSource(messageHandler) {
  const client = window[singletonKey] || __webpack_require__(/*! webpack-hot-middleware/client */ "./node_modules/@gatsbyjs/webpack-hot-middleware/client.js");

  client.useCustomOverlay({
    showProblems: function showProblems(type, data) {
      const error = {
        type,
        data,
      };

      messageHandler(error);
    },
    clear: function clear() {
      messageHandler({ type: 'ok' });
    },
  });
}

module.exports = initWHMEventSource;


/***/ }),

/***/ "./node_modules/ansi-html/index.js":
/*!*****************************************!*\
  !*** ./node_modules/ansi-html/index.js ***!
  \*****************************************/
/***/ (function(module) {

"use strict";


module.exports = ansiHTML

// Reference to https://github.com/sindresorhus/ansi-regex
var _regANSI = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/

var _defColors = {
  reset: ['fff', '000'], // [FOREGROUD_COLOR, BACKGROUND_COLOR]
  black: '000',
  red: 'ff0000',
  green: '209805',
  yellow: 'e8bf03',
  blue: '0000ff',
  magenta: 'ff00ff',
  cyan: '00ffee',
  lightgrey: 'f0f0f0',
  darkgrey: '888'
}
var _styles = {
  30: 'black',
  31: 'red',
  32: 'green',
  33: 'yellow',
  34: 'blue',
  35: 'magenta',
  36: 'cyan',
  37: 'lightgrey'
}
var _openTags = {
  '1': 'font-weight:bold', // bold
  '2': 'opacity:0.5', // dim
  '3': '<i>', // italic
  '4': '<u>', // underscore
  '8': 'display:none', // hidden
  '9': '<del>' // delete
}
var _closeTags = {
  '23': '</i>', // reset italic
  '24': '</u>', // reset underscore
  '29': '</del>' // reset delete
}

;[0, 21, 22, 27, 28, 39, 49].forEach(function (n) {
  _closeTags[n] = '</span>'
})

/**
 * Converts text with ANSI color codes to HTML markup.
 * @param {String} text
 * @returns {*}
 */
function ansiHTML (text) {
  // Returns the text if the string has no ANSI escape code.
  if (!_regANSI.test(text)) {
    return text
  }

  // Cache opened sequence.
  var ansiCodes = []
  // Replace with markup.
  var ret = text.replace(/\033\[(\d+)*m/g, function (match, seq) {
    var ot = _openTags[seq]
    if (ot) {
      // If current sequence has been opened, close it.
      if (!!~ansiCodes.indexOf(seq)) { // eslint-disable-line no-extra-boolean-cast
        ansiCodes.pop()
        return '</span>'
      }
      // Open tag.
      ansiCodes.push(seq)
      return ot[0] === '<' ? ot : '<span style="' + ot + ';">'
    }

    var ct = _closeTags[seq]
    if (ct) {
      // Pop sequence
      ansiCodes.pop()
      return ct
    }
    return ''
  })

  // Make sure tags are closed.
  var l = ansiCodes.length
  ;(l > 0) && (ret += Array(l + 1).join('</span>'))

  return ret
}

/**
 * Customize colors.
 * @param {Object} colors reference to _defColors
 */
ansiHTML.setColors = function (colors) {
  if (typeof colors !== 'object') {
    throw new Error('`colors` parameter must be an Object.')
  }

  var _finalColors = {}
  for (var key in _defColors) {
    var hex = colors.hasOwnProperty(key) ? colors[key] : null
    if (!hex) {
      _finalColors[key] = _defColors[key]
      continue
    }
    if ('reset' === key) {
      if (typeof hex === 'string') {
        hex = [hex]
      }
      if (!Array.isArray(hex) || hex.length === 0 || hex.some(function (h) {
        return typeof h !== 'string'
      })) {
        throw new Error('The value of `' + key + '` property must be an Array and each item could only be a hex string, e.g.: FF0000')
      }
      var defHexColor = _defColors[key]
      if (!hex[0]) {
        hex[0] = defHexColor[0]
      }
      if (hex.length === 1 || !hex[1]) {
        hex = [hex[0]]
        hex.push(defHexColor[1])
      }

      hex = hex.slice(0, 2)
    } else if (typeof hex !== 'string') {
      throw new Error('The value of `' + key + '` property must be a hex string, e.g.: FF0000')
    }
    _finalColors[key] = hex
  }
  _setTags(_finalColors)
}

/**
 * Reset colors.
 */
ansiHTML.reset = function () {
  _setTags(_defColors)
}

/**
 * Expose tags, including open and close.
 * @type {Object}
 */
ansiHTML.tags = {}

if (Object.defineProperty) {
  Object.defineProperty(ansiHTML.tags, 'open', {
    get: function () { return _openTags }
  })
  Object.defineProperty(ansiHTML.tags, 'close', {
    get: function () { return _closeTags }
  })
} else {
  ansiHTML.tags.open = _openTags
  ansiHTML.tags.close = _closeTags
}

function _setTags (colors) {
  // reset all
  _openTags['0'] = 'font-weight:normal;opacity:1;color:#' + colors.reset[0] + ';background:#' + colors.reset[1]
  // inverse
  _openTags['7'] = 'color:#' + colors.reset[1] + ';background:#' + colors.reset[0]
  // dark grey
  _openTags['90'] = 'color:#' + colors.darkgrey

  for (var code in _styles) {
    var color = _styles[code]
    var oriColor = colors[color] || '000'
    _openTags[code] = 'color:#' + oriColor
    code = parseInt(code)
    _openTags[(code + 10).toString()] = 'background:#' + oriColor
  }
}

ansiHTML.reset()


/***/ }),

/***/ "./node_modules/ansi-regex/index.js":
/*!******************************************!*\
  !*** ./node_modules/ansi-regex/index.js ***!
  \******************************************/
/***/ (function(module) {

"use strict";


module.exports = ({onlyFirst = false} = {}) => {
	const pattern = [
		'[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
		'(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'
	].join('|');

	return new RegExp(pattern, onlyFirst ? undefined : 'g');
};


/***/ }),

/***/ "./node_modules/gatsby/cache-dir/emitter.js":
/*!**************************************************!*\
  !*** ./node_modules/gatsby/cache-dir/emitter.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.es.js");


const emitter = (0,mitt__WEBPACK_IMPORTED_MODULE_0__["default"])()
/* harmony default export */ __webpack_exports__["default"] = (emitter);


/***/ }),

/***/ "./node_modules/gatsby-plugin-netlify-cms/cms-identity.js":
/*!****************************************************************!*\
  !*** ./node_modules/gatsby-plugin-netlify-cms/cms-identity.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/gatsby/dist/utils/fast-refresh-module.js */ "./node_modules/gatsby/dist/utils/fast-refresh-module.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _netlifyIdentityWidget = _interopRequireDefault(__webpack_require__(/*! netlify-identity-widget */ "netlify-identity-widget"));
/* global CMS_PUBLIC_PATH */


window.netlifyIdentity = _netlifyIdentityWidget.default;

var addLoginListener = function addLoginListener() {
  return _netlifyIdentityWidget.default.on("login", function () {
    document.location.href = "" + "/" + "admin" + "/";
  });
};

_netlifyIdentityWidget.default.on("init", function (user) {
  if (!user) {
    addLoginListener();
  } else {
    _netlifyIdentityWidget.default.on("logout", function () {
      addLoginListener();
    });
  }
}); // Boot on next tick to prevent clashes with css injected into NetlifyCMS
// preview pane.


setImmediate(function () {
  _netlifyIdentityWidget.default.init();
});

const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ }),

/***/ "./node_modules/gatsby-plugin-netlify-cms/cms.js":
/*!*******************************************************!*\
  !*** ./node_modules/gatsby-plugin-netlify-cms/cms.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/gatsby/dist/utils/fast-refresh-module.js */ "./node_modules/gatsby/dist/utils/fast-refresh-module.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _netlifyCmsApp = _interopRequireDefault(__webpack_require__(/*! netlify-cms-app */ "netlify-cms-app"));

var _emitter = _interopRequireDefault(__webpack_require__(/*! gatsby/cache-dir/emitter */ "./node_modules/gatsby/cache-dir/emitter.js")); // set global variables required by Gatsby's components
// https://github.com/gatsbyjs/gatsby/blob/deb41cdfefbefe0c170b5dd7c10a19ba2b338f6e/docs/docs/production-app.md#window-variables
// some Gatsby components require these global variables set here:
// https://github.com/gatsbyjs/gatsby/blob/deb41cdfefbefe0c170b5dd7c10a19ba2b338f6e/packages/gatsby/cache-dir/production-app.js#L28


window.___emitter = _emitter.default;
window.___loader = {
  enqueue: function enqueue() {},
  hovering: function hovering() {}
};
/**
 * Load Netlify CMS automatically if `window.CMS_MANUAL_INIT` is set.
 */
// eslint-disable-next-line no-undef

if (true) {
  _netlifyCmsApp.default.init();
} else {}
/**
 * The stylesheet output from the modules at `modulePath` will be at `cms.css`.
 */


_netlifyCmsApp.default.registerPreviewStyle("cms.css");

const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ }),

/***/ "./src/cms/cms.js":
/*!************************!*\
  !*** ./src/cms/cms.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var netlify_cms_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! netlify-cms-app */ "netlify-cms-app");
/* harmony import */ var netlify_cms_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(netlify_cms_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ncwidgets_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ncwidgets/id */ "./node_modules/@ncwidgets/id/dist/index.js");
/* harmony import */ var netlify_cms_locales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! netlify-cms-locales */ "./node_modules/netlify-cms-locales/dist/esm/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/gatsby/dist/utils/fast-refresh-module.js */ "./node_modules/gatsby/dist/utils/fast-refresh-module.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

 // import idWidget from 'netlify-cms-widget-simple-uuid';


 // CMS.registerWidget('id', idWidget.Control, idWidget.Preview);

netlify_cms_app__WEBPACK_IMPORTED_MODULE_0___default().registerLocale('cs', netlify_cms_locales__WEBPACK_IMPORTED_MODULE_2__.cs);
netlify_cms_app__WEBPACK_IMPORTED_MODULE_0___default().registerWidget(_ncwidgets_id__WEBPACK_IMPORTED_MODULE_1__.Widget); // if (process.env.NODE_ENV === 'development') {
//     CMS.init({
//         config: {
//             backend: {
//                 site_domain: 'cms.netlify.com'
//             }
//         }
//     });
// } else {
//     CMS.init({
//         config: {
//             backend: {
//                 base_url: 'https://my-github-auth-provider.herokuapp.com'
//             }
//         }
//     });
// }

netlify_cms_app__WEBPACK_IMPORTED_MODULE_0___default().init();

const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ }),

/***/ "./node_modules/gatsby/dist/utils/fast-refresh-module.js":
/*!***************************************************************!*\
  !*** ./node_modules/gatsby/dist/utils/fast-refresh-module.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.clearCompileError = clearCompileError;
exports.clearRuntimeErrors = clearRuntimeErrors;
exports.showCompileError = showCompileError;
exports.showRuntimeErrors = showRuntimeErrors;
exports.isWebpackCompileError = isWebpackCompileError;
exports.handleRuntimeError = handleRuntimeError;
// Use `self` here instead of `window` so it works in non-window environments (like Workers)
self._gatsbyEvents = self._gatsbyEvents || [];

function clearCompileError() {
  self._gatsbyEvents.push([`FAST_REFRESH`, {
    action: `CLEAR_COMPILE_ERROR`
  }]);
}

function clearRuntimeErrors(dismissOverlay) {
  if (typeof dismissOverlay === `undefined` || dismissOverlay) {
    self._gatsbyEvents.push([`FAST_REFRESH`, {
      action: `CLEAR_RUNTIME_ERRORS`
    }]);
  }
}

function showCompileError(message) {
  if (!message) {
    return;
  }

  self._gatsbyEvents.push([`FAST_REFRESH`, {
    action: `SHOW_COMPILE_ERROR`,
    payload: message
  }]);
}

function showRuntimeErrors(errors) {
  if (!errors || !errors.length) {
    return;
  }

  self._gatsbyEvents.push([`FAST_REFRESH`, {
    action: `SHOW_RUNTIME_ERRORS`,
    payload: errors
  }]);
}

function isWebpackCompileError(error) {
  return /Module [A-z ]+\(from/.test(error.message) || /Cannot find module/.test(error.message);
}

function handleRuntimeError(error) {
  if (error && !isWebpackCompileError(error)) {
    self._gatsbyEvents.push([`FAST_REFRESH`, {
      action: `HANDLE_RUNTIME_ERROR`,
      payload: [error]
    }]);
  }
}
//# sourceMappingURL=fast-refresh-module.js.map

/***/ }),

/***/ "./node_modules/html-entities/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/html-entities/lib/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var named_references_1 = __webpack_require__(/*! ./named-references */ "./node_modules/html-entities/lib/named-references.js");
var numeric_unicode_map_1 = __webpack_require__(/*! ./numeric-unicode-map */ "./node_modules/html-entities/lib/numeric-unicode-map.js");
var surrogate_pairs_1 = __webpack_require__(/*! ./surrogate-pairs */ "./node_modules/html-entities/lib/surrogate-pairs.js");
var allNamedReferences = __assign(__assign({}, named_references_1.namedReferences), { all: named_references_1.namedReferences.html5 });
var encodeRegExps = {
    specialChars: /[<>'"&]/g,
    nonAscii: /(?:[<>'"&\u0080-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
    nonAsciiPrintable: /(?:[<>'"&\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
    extensive: /(?:[\x01-\x0c\x0e-\x1f\x21-\x2c\x2e-\x2f\x3a-\x40\x5b-\x60\x7b-\x7d\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g
};
var defaultEncodeOptions = {
    mode: 'specialChars',
    level: 'all',
    numeric: 'decimal'
};
/** Encodes all the necessary (specified by `level`) characters in the text */
function encode(text, _a) {
    var _b = _a === void 0 ? defaultEncodeOptions : _a, _c = _b.mode, mode = _c === void 0 ? 'specialChars' : _c, _d = _b.numeric, numeric = _d === void 0 ? 'decimal' : _d, _e = _b.level, level = _e === void 0 ? 'all' : _e;
    if (!text) {
        return '';
    }
    var encodeRegExp = encodeRegExps[mode];
    var references = allNamedReferences[level].characters;
    var isHex = numeric === 'hexadecimal';
    encodeRegExp.lastIndex = 0;
    var _b = encodeRegExp.exec(text);
    var _c;
    if (_b) {
        _c = '';
        var _d = 0;
        do {
            if (_d !== _b.index) {
                _c += text.substring(_d, _b.index);
            }
            var _e = _b[0];
            var result_1 = references[_e];
            if (!result_1) {
                var code_1 = _e.length > 1 ? surrogate_pairs_1.getCodePoint(_e, 0) : _e.charCodeAt(0);
                result_1 = (isHex ? '&#x' + code_1.toString(16) : '&#' + code_1) + ';';
            }
            _c += result_1;
            _d = _b.index + _e.length;
        } while ((_b = encodeRegExp.exec(text)));
        if (_d !== text.length) {
            _c += text.substring(_d);
        }
    }
    else {
        _c =
            text;
    }
    return _c;
}
exports.encode = encode;
var defaultDecodeOptions = {
    scope: 'body',
    level: 'all'
};
var strict = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g;
var attribute = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g;
var baseDecodeRegExps = {
    xml: {
        strict: strict,
        attribute: attribute,
        body: named_references_1.bodyRegExps.xml
    },
    html4: {
        strict: strict,
        attribute: attribute,
        body: named_references_1.bodyRegExps.html4
    },
    html5: {
        strict: strict,
        attribute: attribute,
        body: named_references_1.bodyRegExps.html5
    }
};
var decodeRegExps = __assign(__assign({}, baseDecodeRegExps), { all: baseDecodeRegExps.html5 });
var fromCharCode = String.fromCharCode;
var outOfBoundsChar = fromCharCode(65533);
var defaultDecodeEntityOptions = {
    level: 'all'
};
/** Decodes a single entity */
function decodeEntity(entity, _a) {
    var _b = (_a === void 0 ? defaultDecodeEntityOptions : _a).level, level = _b === void 0 ? 'all' : _b;
    if (!entity) {
        return '';
    }
    var _b = entity;
    var decodeEntityLastChar_1 = entity[entity.length - 1];
    if (false) {}
    else if (false) {}
    else {
        var decodeResultByReference_1 = allNamedReferences[level].entities[entity];
        if (decodeResultByReference_1) {
            _b = decodeResultByReference_1;
        }
        else if (entity[0] === '&' && entity[1] === '#') {
            var decodeSecondChar_1 = entity[2];
            var decodeCode_1 = decodeSecondChar_1 == 'x' || decodeSecondChar_1 == 'X'
                ? parseInt(entity.substr(3), 16)
                : parseInt(entity.substr(2));
            _b =
                decodeCode_1 >= 0x10ffff
                    ? outOfBoundsChar
                    : decodeCode_1 > 65535
                        ? surrogate_pairs_1.fromCodePoint(decodeCode_1)
                        : fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode_1] || decodeCode_1);
        }
    }
    return _b;
}
exports.decodeEntity = decodeEntity;
/** Decodes all entities in the text */
function decode(text, _a) {
    var decodeSecondChar_1 = _a === void 0 ? defaultDecodeOptions : _a, decodeCode_1 = decodeSecondChar_1.level, level = decodeCode_1 === void 0 ? 'all' : decodeCode_1, _b = decodeSecondChar_1.scope, scope = _b === void 0 ? level === 'xml' ? 'strict' : 'body' : _b;
    if (!text) {
        return '';
    }
    var decodeRegExp = decodeRegExps[level][scope];
    var references = allNamedReferences[level].entities;
    var isAttribute = scope === 'attribute';
    var isStrict = scope === 'strict';
    decodeRegExp.lastIndex = 0;
    var replaceMatch_1 = decodeRegExp.exec(text);
    var replaceResult_1;
    if (replaceMatch_1) {
        replaceResult_1 = '';
        var replaceLastIndex_1 = 0;
        do {
            if (replaceLastIndex_1 !== replaceMatch_1.index) {
                replaceResult_1 += text.substring(replaceLastIndex_1, replaceMatch_1.index);
            }
            var replaceInput_1 = replaceMatch_1[0];
            var decodeResult_1 = replaceInput_1;
            var decodeEntityLastChar_2 = replaceInput_1[replaceInput_1.length - 1];
            if (isAttribute
                && decodeEntityLastChar_2 === '=') {
                decodeResult_1 = replaceInput_1;
            }
            else if (isStrict
                && decodeEntityLastChar_2 !== ';') {
                decodeResult_1 = replaceInput_1;
            }
            else {
                var decodeResultByReference_2 = references[replaceInput_1];
                if (decodeResultByReference_2) {
                    decodeResult_1 = decodeResultByReference_2;
                }
                else if (replaceInput_1[0] === '&' && replaceInput_1[1] === '#') {
                    var decodeSecondChar_2 = replaceInput_1[2];
                    var decodeCode_2 = decodeSecondChar_2 == 'x' || decodeSecondChar_2 == 'X'
                        ? parseInt(replaceInput_1.substr(3), 16)
                        : parseInt(replaceInput_1.substr(2));
                    decodeResult_1 =
                        decodeCode_2 >= 0x10ffff
                            ? outOfBoundsChar
                            : decodeCode_2 > 65535
                                ? surrogate_pairs_1.fromCodePoint(decodeCode_2)
                                : fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode_2] || decodeCode_2);
                }
            }
            replaceResult_1 += decodeResult_1;
            replaceLastIndex_1 = replaceMatch_1.index + replaceInput_1.length;
        } while ((replaceMatch_1 = decodeRegExp.exec(text)));
        if (replaceLastIndex_1 !== text.length) {
            replaceResult_1 += text.substring(replaceLastIndex_1);
        }
    }
    else {
        replaceResult_1 =
            text;
    }
    return replaceResult_1;
}
exports.decode = decode;


/***/ }),

/***/ "./node_modules/html-entities/lib/named-references.js":
/*!************************************************************!*\
  !*** ./node_modules/html-entities/lib/named-references.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.bodyRegExps={xml:/&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,html4:/&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,html5:/&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g};exports.namedReferences={xml:{entities:{"&lt;":"<","&gt;":">","&quot;":'"',"&apos;":"'","&amp;":"&"},characters:{"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;","&":"&amp;"}},html4:{entities:{"&apos;":"'","&nbsp":" ","&nbsp;":" ","&iexcl":"¡","&iexcl;":"¡","&cent":"¢","&cent;":"¢","&pound":"£","&pound;":"£","&curren":"¤","&curren;":"¤","&yen":"¥","&yen;":"¥","&brvbar":"¦","&brvbar;":"¦","&sect":"§","&sect;":"§","&uml":"¨","&uml;":"¨","&copy":"©","&copy;":"©","&ordf":"ª","&ordf;":"ª","&laquo":"«","&laquo;":"«","&not":"¬","&not;":"¬","&shy":"­","&shy;":"­","&reg":"®","&reg;":"®","&macr":"¯","&macr;":"¯","&deg":"°","&deg;":"°","&plusmn":"±","&plusmn;":"±","&sup2":"²","&sup2;":"²","&sup3":"³","&sup3;":"³","&acute":"´","&acute;":"´","&micro":"µ","&micro;":"µ","&para":"¶","&para;":"¶","&middot":"·","&middot;":"·","&cedil":"¸","&cedil;":"¸","&sup1":"¹","&sup1;":"¹","&ordm":"º","&ordm;":"º","&raquo":"»","&raquo;":"»","&frac14":"¼","&frac14;":"¼","&frac12":"½","&frac12;":"½","&frac34":"¾","&frac34;":"¾","&iquest":"¿","&iquest;":"¿","&Agrave":"À","&Agrave;":"À","&Aacute":"Á","&Aacute;":"Á","&Acirc":"Â","&Acirc;":"Â","&Atilde":"Ã","&Atilde;":"Ã","&Auml":"Ä","&Auml;":"Ä","&Aring":"Å","&Aring;":"Å","&AElig":"Æ","&AElig;":"Æ","&Ccedil":"Ç","&Ccedil;":"Ç","&Egrave":"È","&Egrave;":"È","&Eacute":"É","&Eacute;":"É","&Ecirc":"Ê","&Ecirc;":"Ê","&Euml":"Ë","&Euml;":"Ë","&Igrave":"Ì","&Igrave;":"Ì","&Iacute":"Í","&Iacute;":"Í","&Icirc":"Î","&Icirc;":"Î","&Iuml":"Ï","&Iuml;":"Ï","&ETH":"Ð","&ETH;":"Ð","&Ntilde":"Ñ","&Ntilde;":"Ñ","&Ograve":"Ò","&Ograve;":"Ò","&Oacute":"Ó","&Oacute;":"Ó","&Ocirc":"Ô","&Ocirc;":"Ô","&Otilde":"Õ","&Otilde;":"Õ","&Ouml":"Ö","&Ouml;":"Ö","&times":"×","&times;":"×","&Oslash":"Ø","&Oslash;":"Ø","&Ugrave":"Ù","&Ugrave;":"Ù","&Uacute":"Ú","&Uacute;":"Ú","&Ucirc":"Û","&Ucirc;":"Û","&Uuml":"Ü","&Uuml;":"Ü","&Yacute":"Ý","&Yacute;":"Ý","&THORN":"Þ","&THORN;":"Þ","&szlig":"ß","&szlig;":"ß","&agrave":"à","&agrave;":"à","&aacute":"á","&aacute;":"á","&acirc":"â","&acirc;":"â","&atilde":"ã","&atilde;":"ã","&auml":"ä","&auml;":"ä","&aring":"å","&aring;":"å","&aelig":"æ","&aelig;":"æ","&ccedil":"ç","&ccedil;":"ç","&egrave":"è","&egrave;":"è","&eacute":"é","&eacute;":"é","&ecirc":"ê","&ecirc;":"ê","&euml":"ë","&euml;":"ë","&igrave":"ì","&igrave;":"ì","&iacute":"í","&iacute;":"í","&icirc":"î","&icirc;":"î","&iuml":"ï","&iuml;":"ï","&eth":"ð","&eth;":"ð","&ntilde":"ñ","&ntilde;":"ñ","&ograve":"ò","&ograve;":"ò","&oacute":"ó","&oacute;":"ó","&ocirc":"ô","&ocirc;":"ô","&otilde":"õ","&otilde;":"õ","&ouml":"ö","&ouml;":"ö","&divide":"÷","&divide;":"÷","&oslash":"ø","&oslash;":"ø","&ugrave":"ù","&ugrave;":"ù","&uacute":"ú","&uacute;":"ú","&ucirc":"û","&ucirc;":"û","&uuml":"ü","&uuml;":"ü","&yacute":"ý","&yacute;":"ý","&thorn":"þ","&thorn;":"þ","&yuml":"ÿ","&yuml;":"ÿ","&quot":'"',"&quot;":'"',"&amp":"&","&amp;":"&","&lt":"<","&lt;":"<","&gt":">","&gt;":">","&OElig;":"Œ","&oelig;":"œ","&Scaron;":"Š","&scaron;":"š","&Yuml;":"Ÿ","&circ;":"ˆ","&tilde;":"˜","&ensp;":" ","&emsp;":" ","&thinsp;":" ","&zwnj;":"‌","&zwj;":"‍","&lrm;":"‎","&rlm;":"‏","&ndash;":"–","&mdash;":"—","&lsquo;":"‘","&rsquo;":"’","&sbquo;":"‚","&ldquo;":"“","&rdquo;":"”","&bdquo;":"„","&dagger;":"†","&Dagger;":"‡","&permil;":"‰","&lsaquo;":"‹","&rsaquo;":"›","&euro;":"€","&fnof;":"ƒ","&Alpha;":"Α","&Beta;":"Β","&Gamma;":"Γ","&Delta;":"Δ","&Epsilon;":"Ε","&Zeta;":"Ζ","&Eta;":"Η","&Theta;":"Θ","&Iota;":"Ι","&Kappa;":"Κ","&Lambda;":"Λ","&Mu;":"Μ","&Nu;":"Ν","&Xi;":"Ξ","&Omicron;":"Ο","&Pi;":"Π","&Rho;":"Ρ","&Sigma;":"Σ","&Tau;":"Τ","&Upsilon;":"Υ","&Phi;":"Φ","&Chi;":"Χ","&Psi;":"Ψ","&Omega;":"Ω","&alpha;":"α","&beta;":"β","&gamma;":"γ","&delta;":"δ","&epsilon;":"ε","&zeta;":"ζ","&eta;":"η","&theta;":"θ","&iota;":"ι","&kappa;":"κ","&lambda;":"λ","&mu;":"μ","&nu;":"ν","&xi;":"ξ","&omicron;":"ο","&pi;":"π","&rho;":"ρ","&sigmaf;":"ς","&sigma;":"σ","&tau;":"τ","&upsilon;":"υ","&phi;":"φ","&chi;":"χ","&psi;":"ψ","&omega;":"ω","&thetasym;":"ϑ","&upsih;":"ϒ","&piv;":"ϖ","&bull;":"•","&hellip;":"…","&prime;":"′","&Prime;":"″","&oline;":"‾","&frasl;":"⁄","&weierp;":"℘","&image;":"ℑ","&real;":"ℜ","&trade;":"™","&alefsym;":"ℵ","&larr;":"←","&uarr;":"↑","&rarr;":"→","&darr;":"↓","&harr;":"↔","&crarr;":"↵","&lArr;":"⇐","&uArr;":"⇑","&rArr;":"⇒","&dArr;":"⇓","&hArr;":"⇔","&forall;":"∀","&part;":"∂","&exist;":"∃","&empty;":"∅","&nabla;":"∇","&isin;":"∈","&notin;":"∉","&ni;":"∋","&prod;":"∏","&sum;":"∑","&minus;":"−","&lowast;":"∗","&radic;":"√","&prop;":"∝","&infin;":"∞","&ang;":"∠","&and;":"∧","&or;":"∨","&cap;":"∩","&cup;":"∪","&int;":"∫","&there4;":"∴","&sim;":"∼","&cong;":"≅","&asymp;":"≈","&ne;":"≠","&equiv;":"≡","&le;":"≤","&ge;":"≥","&sub;":"⊂","&sup;":"⊃","&nsub;":"⊄","&sube;":"⊆","&supe;":"⊇","&oplus;":"⊕","&otimes;":"⊗","&perp;":"⊥","&sdot;":"⋅","&lceil;":"⌈","&rceil;":"⌉","&lfloor;":"⌊","&rfloor;":"⌋","&lang;":"〈","&rang;":"〉","&loz;":"◊","&spades;":"♠","&clubs;":"♣","&hearts;":"♥","&diams;":"♦"},characters:{"'":"&apos;"," ":"&nbsp;","¡":"&iexcl;","¢":"&cent;","£":"&pound;","¤":"&curren;","¥":"&yen;","¦":"&brvbar;","§":"&sect;","¨":"&uml;","©":"&copy;","ª":"&ordf;","«":"&laquo;","¬":"&not;","­":"&shy;","®":"&reg;","¯":"&macr;","°":"&deg;","±":"&plusmn;","²":"&sup2;","³":"&sup3;","´":"&acute;","µ":"&micro;","¶":"&para;","·":"&middot;","¸":"&cedil;","¹":"&sup1;","º":"&ordm;","»":"&raquo;","¼":"&frac14;","½":"&frac12;","¾":"&frac34;","¿":"&iquest;","À":"&Agrave;","Á":"&Aacute;","Â":"&Acirc;","Ã":"&Atilde;","Ä":"&Auml;","Å":"&Aring;","Æ":"&AElig;","Ç":"&Ccedil;","È":"&Egrave;","É":"&Eacute;","Ê":"&Ecirc;","Ë":"&Euml;","Ì":"&Igrave;","Í":"&Iacute;","Î":"&Icirc;","Ï":"&Iuml;","Ð":"&ETH;","Ñ":"&Ntilde;","Ò":"&Ograve;","Ó":"&Oacute;","Ô":"&Ocirc;","Õ":"&Otilde;","Ö":"&Ouml;","×":"&times;","Ø":"&Oslash;","Ù":"&Ugrave;","Ú":"&Uacute;","Û":"&Ucirc;","Ü":"&Uuml;","Ý":"&Yacute;","Þ":"&THORN;","ß":"&szlig;","à":"&agrave;","á":"&aacute;","â":"&acirc;","ã":"&atilde;","ä":"&auml;","å":"&aring;","æ":"&aelig;","ç":"&ccedil;","è":"&egrave;","é":"&eacute;","ê":"&ecirc;","ë":"&euml;","ì":"&igrave;","í":"&iacute;","î":"&icirc;","ï":"&iuml;","ð":"&eth;","ñ":"&ntilde;","ò":"&ograve;","ó":"&oacute;","ô":"&ocirc;","õ":"&otilde;","ö":"&ouml;","÷":"&divide;","ø":"&oslash;","ù":"&ugrave;","ú":"&uacute;","û":"&ucirc;","ü":"&uuml;","ý":"&yacute;","þ":"&thorn;","ÿ":"&yuml;",'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;","Œ":"&OElig;","œ":"&oelig;","Š":"&Scaron;","š":"&scaron;","Ÿ":"&Yuml;","ˆ":"&circ;","˜":"&tilde;"," ":"&ensp;"," ":"&emsp;"," ":"&thinsp;","‌":"&zwnj;","‍":"&zwj;","‎":"&lrm;","‏":"&rlm;","–":"&ndash;","—":"&mdash;","‘":"&lsquo;","’":"&rsquo;","‚":"&sbquo;","“":"&ldquo;","”":"&rdquo;","„":"&bdquo;","†":"&dagger;","‡":"&Dagger;","‰":"&permil;","‹":"&lsaquo;","›":"&rsaquo;","€":"&euro;","ƒ":"&fnof;","Α":"&Alpha;","Β":"&Beta;","Γ":"&Gamma;","Δ":"&Delta;","Ε":"&Epsilon;","Ζ":"&Zeta;","Η":"&Eta;","Θ":"&Theta;","Ι":"&Iota;","Κ":"&Kappa;","Λ":"&Lambda;","Μ":"&Mu;","Ν":"&Nu;","Ξ":"&Xi;","Ο":"&Omicron;","Π":"&Pi;","Ρ":"&Rho;","Σ":"&Sigma;","Τ":"&Tau;","Υ":"&Upsilon;","Φ":"&Phi;","Χ":"&Chi;","Ψ":"&Psi;","Ω":"&Omega;","α":"&alpha;","β":"&beta;","γ":"&gamma;","δ":"&delta;","ε":"&epsilon;","ζ":"&zeta;","η":"&eta;","θ":"&theta;","ι":"&iota;","κ":"&kappa;","λ":"&lambda;","μ":"&mu;","ν":"&nu;","ξ":"&xi;","ο":"&omicron;","π":"&pi;","ρ":"&rho;","ς":"&sigmaf;","σ":"&sigma;","τ":"&tau;","υ":"&upsilon;","φ":"&phi;","χ":"&chi;","ψ":"&psi;","ω":"&omega;","ϑ":"&thetasym;","ϒ":"&upsih;","ϖ":"&piv;","•":"&bull;","…":"&hellip;","′":"&prime;","″":"&Prime;","‾":"&oline;","⁄":"&frasl;","℘":"&weierp;","ℑ":"&image;","ℜ":"&real;","™":"&trade;","ℵ":"&alefsym;","←":"&larr;","↑":"&uarr;","→":"&rarr;","↓":"&darr;","↔":"&harr;","↵":"&crarr;","⇐":"&lArr;","⇑":"&uArr;","⇒":"&rArr;","⇓":"&dArr;","⇔":"&hArr;","∀":"&forall;","∂":"&part;","∃":"&exist;","∅":"&empty;","∇":"&nabla;","∈":"&isin;","∉":"&notin;","∋":"&ni;","∏":"&prod;","∑":"&sum;","−":"&minus;","∗":"&lowast;","√":"&radic;","∝":"&prop;","∞":"&infin;","∠":"&ang;","∧":"&and;","∨":"&or;","∩":"&cap;","∪":"&cup;","∫":"&int;","∴":"&there4;","∼":"&sim;","≅":"&cong;","≈":"&asymp;","≠":"&ne;","≡":"&equiv;","≤":"&le;","≥":"&ge;","⊂":"&sub;","⊃":"&sup;","⊄":"&nsub;","⊆":"&sube;","⊇":"&supe;","⊕":"&oplus;","⊗":"&otimes;","⊥":"&perp;","⋅":"&sdot;","⌈":"&lceil;","⌉":"&rceil;","⌊":"&lfloor;","⌋":"&rfloor;","〈":"&lang;","〉":"&rang;","◊":"&loz;","♠":"&spades;","♣":"&clubs;","♥":"&hearts;","♦":"&diams;"}},html5:{entities:{"&AElig":"Æ","&AElig;":"Æ","&AMP":"&","&AMP;":"&","&Aacute":"Á","&Aacute;":"Á","&Abreve;":"Ă","&Acirc":"Â","&Acirc;":"Â","&Acy;":"А","&Afr;":"𝔄","&Agrave":"À","&Agrave;":"À","&Alpha;":"Α","&Amacr;":"Ā","&And;":"⩓","&Aogon;":"Ą","&Aopf;":"𝔸","&ApplyFunction;":"⁡","&Aring":"Å","&Aring;":"Å","&Ascr;":"𝒜","&Assign;":"≔","&Atilde":"Ã","&Atilde;":"Ã","&Auml":"Ä","&Auml;":"Ä","&Backslash;":"∖","&Barv;":"⫧","&Barwed;":"⌆","&Bcy;":"Б","&Because;":"∵","&Bernoullis;":"ℬ","&Beta;":"Β","&Bfr;":"𝔅","&Bopf;":"𝔹","&Breve;":"˘","&Bscr;":"ℬ","&Bumpeq;":"≎","&CHcy;":"Ч","&COPY":"©","&COPY;":"©","&Cacute;":"Ć","&Cap;":"⋒","&CapitalDifferentialD;":"ⅅ","&Cayleys;":"ℭ","&Ccaron;":"Č","&Ccedil":"Ç","&Ccedil;":"Ç","&Ccirc;":"Ĉ","&Cconint;":"∰","&Cdot;":"Ċ","&Cedilla;":"¸","&CenterDot;":"·","&Cfr;":"ℭ","&Chi;":"Χ","&CircleDot;":"⊙","&CircleMinus;":"⊖","&CirclePlus;":"⊕","&CircleTimes;":"⊗","&ClockwiseContourIntegral;":"∲","&CloseCurlyDoubleQuote;":"”","&CloseCurlyQuote;":"’","&Colon;":"∷","&Colone;":"⩴","&Congruent;":"≡","&Conint;":"∯","&ContourIntegral;":"∮","&Copf;":"ℂ","&Coproduct;":"∐","&CounterClockwiseContourIntegral;":"∳","&Cross;":"⨯","&Cscr;":"𝒞","&Cup;":"⋓","&CupCap;":"≍","&DD;":"ⅅ","&DDotrahd;":"⤑","&DJcy;":"Ђ","&DScy;":"Ѕ","&DZcy;":"Џ","&Dagger;":"‡","&Darr;":"↡","&Dashv;":"⫤","&Dcaron;":"Ď","&Dcy;":"Д","&Del;":"∇","&Delta;":"Δ","&Dfr;":"𝔇","&DiacriticalAcute;":"´","&DiacriticalDot;":"˙","&DiacriticalDoubleAcute;":"˝","&DiacriticalGrave;":"`","&DiacriticalTilde;":"˜","&Diamond;":"⋄","&DifferentialD;":"ⅆ","&Dopf;":"𝔻","&Dot;":"¨","&DotDot;":"⃜","&DotEqual;":"≐","&DoubleContourIntegral;":"∯","&DoubleDot;":"¨","&DoubleDownArrow;":"⇓","&DoubleLeftArrow;":"⇐","&DoubleLeftRightArrow;":"⇔","&DoubleLeftTee;":"⫤","&DoubleLongLeftArrow;":"⟸","&DoubleLongLeftRightArrow;":"⟺","&DoubleLongRightArrow;":"⟹","&DoubleRightArrow;":"⇒","&DoubleRightTee;":"⊨","&DoubleUpArrow;":"⇑","&DoubleUpDownArrow;":"⇕","&DoubleVerticalBar;":"∥","&DownArrow;":"↓","&DownArrowBar;":"⤓","&DownArrowUpArrow;":"⇵","&DownBreve;":"̑","&DownLeftRightVector;":"⥐","&DownLeftTeeVector;":"⥞","&DownLeftVector;":"↽","&DownLeftVectorBar;":"⥖","&DownRightTeeVector;":"⥟","&DownRightVector;":"⇁","&DownRightVectorBar;":"⥗","&DownTee;":"⊤","&DownTeeArrow;":"↧","&Downarrow;":"⇓","&Dscr;":"𝒟","&Dstrok;":"Đ","&ENG;":"Ŋ","&ETH":"Ð","&ETH;":"Ð","&Eacute":"É","&Eacute;":"É","&Ecaron;":"Ě","&Ecirc":"Ê","&Ecirc;":"Ê","&Ecy;":"Э","&Edot;":"Ė","&Efr;":"𝔈","&Egrave":"È","&Egrave;":"È","&Element;":"∈","&Emacr;":"Ē","&EmptySmallSquare;":"◻","&EmptyVerySmallSquare;":"▫","&Eogon;":"Ę","&Eopf;":"𝔼","&Epsilon;":"Ε","&Equal;":"⩵","&EqualTilde;":"≂","&Equilibrium;":"⇌","&Escr;":"ℰ","&Esim;":"⩳","&Eta;":"Η","&Euml":"Ë","&Euml;":"Ë","&Exists;":"∃","&ExponentialE;":"ⅇ","&Fcy;":"Ф","&Ffr;":"𝔉","&FilledSmallSquare;":"◼","&FilledVerySmallSquare;":"▪","&Fopf;":"𝔽","&ForAll;":"∀","&Fouriertrf;":"ℱ","&Fscr;":"ℱ","&GJcy;":"Ѓ","&GT":">","&GT;":">","&Gamma;":"Γ","&Gammad;":"Ϝ","&Gbreve;":"Ğ","&Gcedil;":"Ģ","&Gcirc;":"Ĝ","&Gcy;":"Г","&Gdot;":"Ġ","&Gfr;":"𝔊","&Gg;":"⋙","&Gopf;":"𝔾","&GreaterEqual;":"≥","&GreaterEqualLess;":"⋛","&GreaterFullEqual;":"≧","&GreaterGreater;":"⪢","&GreaterLess;":"≷","&GreaterSlantEqual;":"⩾","&GreaterTilde;":"≳","&Gscr;":"𝒢","&Gt;":"≫","&HARDcy;":"Ъ","&Hacek;":"ˇ","&Hat;":"^","&Hcirc;":"Ĥ","&Hfr;":"ℌ","&HilbertSpace;":"ℋ","&Hopf;":"ℍ","&HorizontalLine;":"─","&Hscr;":"ℋ","&Hstrok;":"Ħ","&HumpDownHump;":"≎","&HumpEqual;":"≏","&IEcy;":"Е","&IJlig;":"Ĳ","&IOcy;":"Ё","&Iacute":"Í","&Iacute;":"Í","&Icirc":"Î","&Icirc;":"Î","&Icy;":"И","&Idot;":"İ","&Ifr;":"ℑ","&Igrave":"Ì","&Igrave;":"Ì","&Im;":"ℑ","&Imacr;":"Ī","&ImaginaryI;":"ⅈ","&Implies;":"⇒","&Int;":"∬","&Integral;":"∫","&Intersection;":"⋂","&InvisibleComma;":"⁣","&InvisibleTimes;":"⁢","&Iogon;":"Į","&Iopf;":"𝕀","&Iota;":"Ι","&Iscr;":"ℐ","&Itilde;":"Ĩ","&Iukcy;":"І","&Iuml":"Ï","&Iuml;":"Ï","&Jcirc;":"Ĵ","&Jcy;":"Й","&Jfr;":"𝔍","&Jopf;":"𝕁","&Jscr;":"𝒥","&Jsercy;":"Ј","&Jukcy;":"Є","&KHcy;":"Х","&KJcy;":"Ќ","&Kappa;":"Κ","&Kcedil;":"Ķ","&Kcy;":"К","&Kfr;":"𝔎","&Kopf;":"𝕂","&Kscr;":"𝒦","&LJcy;":"Љ","&LT":"<","&LT;":"<","&Lacute;":"Ĺ","&Lambda;":"Λ","&Lang;":"⟪","&Laplacetrf;":"ℒ","&Larr;":"↞","&Lcaron;":"Ľ","&Lcedil;":"Ļ","&Lcy;":"Л","&LeftAngleBracket;":"⟨","&LeftArrow;":"←","&LeftArrowBar;":"⇤","&LeftArrowRightArrow;":"⇆","&LeftCeiling;":"⌈","&LeftDoubleBracket;":"⟦","&LeftDownTeeVector;":"⥡","&LeftDownVector;":"⇃","&LeftDownVectorBar;":"⥙","&LeftFloor;":"⌊","&LeftRightArrow;":"↔","&LeftRightVector;":"⥎","&LeftTee;":"⊣","&LeftTeeArrow;":"↤","&LeftTeeVector;":"⥚","&LeftTriangle;":"⊲","&LeftTriangleBar;":"⧏","&LeftTriangleEqual;":"⊴","&LeftUpDownVector;":"⥑","&LeftUpTeeVector;":"⥠","&LeftUpVector;":"↿","&LeftUpVectorBar;":"⥘","&LeftVector;":"↼","&LeftVectorBar;":"⥒","&Leftarrow;":"⇐","&Leftrightarrow;":"⇔","&LessEqualGreater;":"⋚","&LessFullEqual;":"≦","&LessGreater;":"≶","&LessLess;":"⪡","&LessSlantEqual;":"⩽","&LessTilde;":"≲","&Lfr;":"𝔏","&Ll;":"⋘","&Lleftarrow;":"⇚","&Lmidot;":"Ŀ","&LongLeftArrow;":"⟵","&LongLeftRightArrow;":"⟷","&LongRightArrow;":"⟶","&Longleftarrow;":"⟸","&Longleftrightarrow;":"⟺","&Longrightarrow;":"⟹","&Lopf;":"𝕃","&LowerLeftArrow;":"↙","&LowerRightArrow;":"↘","&Lscr;":"ℒ","&Lsh;":"↰","&Lstrok;":"Ł","&Lt;":"≪","&Map;":"⤅","&Mcy;":"М","&MediumSpace;":" ","&Mellintrf;":"ℳ","&Mfr;":"𝔐","&MinusPlus;":"∓","&Mopf;":"𝕄","&Mscr;":"ℳ","&Mu;":"Μ","&NJcy;":"Њ","&Nacute;":"Ń","&Ncaron;":"Ň","&Ncedil;":"Ņ","&Ncy;":"Н","&NegativeMediumSpace;":"​","&NegativeThickSpace;":"​","&NegativeThinSpace;":"​","&NegativeVeryThinSpace;":"​","&NestedGreaterGreater;":"≫","&NestedLessLess;":"≪","&NewLine;":"\n","&Nfr;":"𝔑","&NoBreak;":"⁠","&NonBreakingSpace;":" ","&Nopf;":"ℕ","&Not;":"⫬","&NotCongruent;":"≢","&NotCupCap;":"≭","&NotDoubleVerticalBar;":"∦","&NotElement;":"∉","&NotEqual;":"≠","&NotEqualTilde;":"≂̸","&NotExists;":"∄","&NotGreater;":"≯","&NotGreaterEqual;":"≱","&NotGreaterFullEqual;":"≧̸","&NotGreaterGreater;":"≫̸","&NotGreaterLess;":"≹","&NotGreaterSlantEqual;":"⩾̸","&NotGreaterTilde;":"≵","&NotHumpDownHump;":"≎̸","&NotHumpEqual;":"≏̸","&NotLeftTriangle;":"⋪","&NotLeftTriangleBar;":"⧏̸","&NotLeftTriangleEqual;":"⋬","&NotLess;":"≮","&NotLessEqual;":"≰","&NotLessGreater;":"≸","&NotLessLess;":"≪̸","&NotLessSlantEqual;":"⩽̸","&NotLessTilde;":"≴","&NotNestedGreaterGreater;":"⪢̸","&NotNestedLessLess;":"⪡̸","&NotPrecedes;":"⊀","&NotPrecedesEqual;":"⪯̸","&NotPrecedesSlantEqual;":"⋠","&NotReverseElement;":"∌","&NotRightTriangle;":"⋫","&NotRightTriangleBar;":"⧐̸","&NotRightTriangleEqual;":"⋭","&NotSquareSubset;":"⊏̸","&NotSquareSubsetEqual;":"⋢","&NotSquareSuperset;":"⊐̸","&NotSquareSupersetEqual;":"⋣","&NotSubset;":"⊂⃒","&NotSubsetEqual;":"⊈","&NotSucceeds;":"⊁","&NotSucceedsEqual;":"⪰̸","&NotSucceedsSlantEqual;":"⋡","&NotSucceedsTilde;":"≿̸","&NotSuperset;":"⊃⃒","&NotSupersetEqual;":"⊉","&NotTilde;":"≁","&NotTildeEqual;":"≄","&NotTildeFullEqual;":"≇","&NotTildeTilde;":"≉","&NotVerticalBar;":"∤","&Nscr;":"𝒩","&Ntilde":"Ñ","&Ntilde;":"Ñ","&Nu;":"Ν","&OElig;":"Œ","&Oacute":"Ó","&Oacute;":"Ó","&Ocirc":"Ô","&Ocirc;":"Ô","&Ocy;":"О","&Odblac;":"Ő","&Ofr;":"𝔒","&Ograve":"Ò","&Ograve;":"Ò","&Omacr;":"Ō","&Omega;":"Ω","&Omicron;":"Ο","&Oopf;":"𝕆","&OpenCurlyDoubleQuote;":"“","&OpenCurlyQuote;":"‘","&Or;":"⩔","&Oscr;":"𝒪","&Oslash":"Ø","&Oslash;":"Ø","&Otilde":"Õ","&Otilde;":"Õ","&Otimes;":"⨷","&Ouml":"Ö","&Ouml;":"Ö","&OverBar;":"‾","&OverBrace;":"⏞","&OverBracket;":"⎴","&OverParenthesis;":"⏜","&PartialD;":"∂","&Pcy;":"П","&Pfr;":"𝔓","&Phi;":"Φ","&Pi;":"Π","&PlusMinus;":"±","&Poincareplane;":"ℌ","&Popf;":"ℙ","&Pr;":"⪻","&Precedes;":"≺","&PrecedesEqual;":"⪯","&PrecedesSlantEqual;":"≼","&PrecedesTilde;":"≾","&Prime;":"″","&Product;":"∏","&Proportion;":"∷","&Proportional;":"∝","&Pscr;":"𝒫","&Psi;":"Ψ","&QUOT":'"',"&QUOT;":'"',"&Qfr;":"𝔔","&Qopf;":"ℚ","&Qscr;":"𝒬","&RBarr;":"⤐","&REG":"®","&REG;":"®","&Racute;":"Ŕ","&Rang;":"⟫","&Rarr;":"↠","&Rarrtl;":"⤖","&Rcaron;":"Ř","&Rcedil;":"Ŗ","&Rcy;":"Р","&Re;":"ℜ","&ReverseElement;":"∋","&ReverseEquilibrium;":"⇋","&ReverseUpEquilibrium;":"⥯","&Rfr;":"ℜ","&Rho;":"Ρ","&RightAngleBracket;":"⟩","&RightArrow;":"→","&RightArrowBar;":"⇥","&RightArrowLeftArrow;":"⇄","&RightCeiling;":"⌉","&RightDoubleBracket;":"⟧","&RightDownTeeVector;":"⥝","&RightDownVector;":"⇂","&RightDownVectorBar;":"⥕","&RightFloor;":"⌋","&RightTee;":"⊢","&RightTeeArrow;":"↦","&RightTeeVector;":"⥛","&RightTriangle;":"⊳","&RightTriangleBar;":"⧐","&RightTriangleEqual;":"⊵","&RightUpDownVector;":"⥏","&RightUpTeeVector;":"⥜","&RightUpVector;":"↾","&RightUpVectorBar;":"⥔","&RightVector;":"⇀","&RightVectorBar;":"⥓","&Rightarrow;":"⇒","&Ropf;":"ℝ","&RoundImplies;":"⥰","&Rrightarrow;":"⇛","&Rscr;":"ℛ","&Rsh;":"↱","&RuleDelayed;":"⧴","&SHCHcy;":"Щ","&SHcy;":"Ш","&SOFTcy;":"Ь","&Sacute;":"Ś","&Sc;":"⪼","&Scaron;":"Š","&Scedil;":"Ş","&Scirc;":"Ŝ","&Scy;":"С","&Sfr;":"𝔖","&ShortDownArrow;":"↓","&ShortLeftArrow;":"←","&ShortRightArrow;":"→","&ShortUpArrow;":"↑","&Sigma;":"Σ","&SmallCircle;":"∘","&Sopf;":"𝕊","&Sqrt;":"√","&Square;":"□","&SquareIntersection;":"⊓","&SquareSubset;":"⊏","&SquareSubsetEqual;":"⊑","&SquareSuperset;":"⊐","&SquareSupersetEqual;":"⊒","&SquareUnion;":"⊔","&Sscr;":"𝒮","&Star;":"⋆","&Sub;":"⋐","&Subset;":"⋐","&SubsetEqual;":"⊆","&Succeeds;":"≻","&SucceedsEqual;":"⪰","&SucceedsSlantEqual;":"≽","&SucceedsTilde;":"≿","&SuchThat;":"∋","&Sum;":"∑","&Sup;":"⋑","&Superset;":"⊃","&SupersetEqual;":"⊇","&Supset;":"⋑","&THORN":"Þ","&THORN;":"Þ","&TRADE;":"™","&TSHcy;":"Ћ","&TScy;":"Ц","&Tab;":"\t","&Tau;":"Τ","&Tcaron;":"Ť","&Tcedil;":"Ţ","&Tcy;":"Т","&Tfr;":"𝔗","&Therefore;":"∴","&Theta;":"Θ","&ThickSpace;":"  ","&ThinSpace;":" ","&Tilde;":"∼","&TildeEqual;":"≃","&TildeFullEqual;":"≅","&TildeTilde;":"≈","&Topf;":"𝕋","&TripleDot;":"⃛","&Tscr;":"𝒯","&Tstrok;":"Ŧ","&Uacute":"Ú","&Uacute;":"Ú","&Uarr;":"↟","&Uarrocir;":"⥉","&Ubrcy;":"Ў","&Ubreve;":"Ŭ","&Ucirc":"Û","&Ucirc;":"Û","&Ucy;":"У","&Udblac;":"Ű","&Ufr;":"𝔘","&Ugrave":"Ù","&Ugrave;":"Ù","&Umacr;":"Ū","&UnderBar;":"_","&UnderBrace;":"⏟","&UnderBracket;":"⎵","&UnderParenthesis;":"⏝","&Union;":"⋃","&UnionPlus;":"⊎","&Uogon;":"Ų","&Uopf;":"𝕌","&UpArrow;":"↑","&UpArrowBar;":"⤒","&UpArrowDownArrow;":"⇅","&UpDownArrow;":"↕","&UpEquilibrium;":"⥮","&UpTee;":"⊥","&UpTeeArrow;":"↥","&Uparrow;":"⇑","&Updownarrow;":"⇕","&UpperLeftArrow;":"↖","&UpperRightArrow;":"↗","&Upsi;":"ϒ","&Upsilon;":"Υ","&Uring;":"Ů","&Uscr;":"𝒰","&Utilde;":"Ũ","&Uuml":"Ü","&Uuml;":"Ü","&VDash;":"⊫","&Vbar;":"⫫","&Vcy;":"В","&Vdash;":"⊩","&Vdashl;":"⫦","&Vee;":"⋁","&Verbar;":"‖","&Vert;":"‖","&VerticalBar;":"∣","&VerticalLine;":"|","&VerticalSeparator;":"❘","&VerticalTilde;":"≀","&VeryThinSpace;":" ","&Vfr;":"𝔙","&Vopf;":"𝕍","&Vscr;":"𝒱","&Vvdash;":"⊪","&Wcirc;":"Ŵ","&Wedge;":"⋀","&Wfr;":"𝔚","&Wopf;":"𝕎","&Wscr;":"𝒲","&Xfr;":"𝔛","&Xi;":"Ξ","&Xopf;":"𝕏","&Xscr;":"𝒳","&YAcy;":"Я","&YIcy;":"Ї","&YUcy;":"Ю","&Yacute":"Ý","&Yacute;":"Ý","&Ycirc;":"Ŷ","&Ycy;":"Ы","&Yfr;":"𝔜","&Yopf;":"𝕐","&Yscr;":"𝒴","&Yuml;":"Ÿ","&ZHcy;":"Ж","&Zacute;":"Ź","&Zcaron;":"Ž","&Zcy;":"З","&Zdot;":"Ż","&ZeroWidthSpace;":"​","&Zeta;":"Ζ","&Zfr;":"ℨ","&Zopf;":"ℤ","&Zscr;":"𝒵","&aacute":"á","&aacute;":"á","&abreve;":"ă","&ac;":"∾","&acE;":"∾̳","&acd;":"∿","&acirc":"â","&acirc;":"â","&acute":"´","&acute;":"´","&acy;":"а","&aelig":"æ","&aelig;":"æ","&af;":"⁡","&afr;":"𝔞","&agrave":"à","&agrave;":"à","&alefsym;":"ℵ","&aleph;":"ℵ","&alpha;":"α","&amacr;":"ā","&amalg;":"⨿","&amp":"&","&amp;":"&","&and;":"∧","&andand;":"⩕","&andd;":"⩜","&andslope;":"⩘","&andv;":"⩚","&ang;":"∠","&ange;":"⦤","&angle;":"∠","&angmsd;":"∡","&angmsdaa;":"⦨","&angmsdab;":"⦩","&angmsdac;":"⦪","&angmsdad;":"⦫","&angmsdae;":"⦬","&angmsdaf;":"⦭","&angmsdag;":"⦮","&angmsdah;":"⦯","&angrt;":"∟","&angrtvb;":"⊾","&angrtvbd;":"⦝","&angsph;":"∢","&angst;":"Å","&angzarr;":"⍼","&aogon;":"ą","&aopf;":"𝕒","&ap;":"≈","&apE;":"⩰","&apacir;":"⩯","&ape;":"≊","&apid;":"≋","&apos;":"'","&approx;":"≈","&approxeq;":"≊","&aring":"å","&aring;":"å","&ascr;":"𝒶","&ast;":"*","&asymp;":"≈","&asympeq;":"≍","&atilde":"ã","&atilde;":"ã","&auml":"ä","&auml;":"ä","&awconint;":"∳","&awint;":"⨑","&bNot;":"⫭","&backcong;":"≌","&backepsilon;":"϶","&backprime;":"‵","&backsim;":"∽","&backsimeq;":"⋍","&barvee;":"⊽","&barwed;":"⌅","&barwedge;":"⌅","&bbrk;":"⎵","&bbrktbrk;":"⎶","&bcong;":"≌","&bcy;":"б","&bdquo;":"„","&becaus;":"∵","&because;":"∵","&bemptyv;":"⦰","&bepsi;":"϶","&bernou;":"ℬ","&beta;":"β","&beth;":"ℶ","&between;":"≬","&bfr;":"𝔟","&bigcap;":"⋂","&bigcirc;":"◯","&bigcup;":"⋃","&bigodot;":"⨀","&bigoplus;":"⨁","&bigotimes;":"⨂","&bigsqcup;":"⨆","&bigstar;":"★","&bigtriangledown;":"▽","&bigtriangleup;":"△","&biguplus;":"⨄","&bigvee;":"⋁","&bigwedge;":"⋀","&bkarow;":"⤍","&blacklozenge;":"⧫","&blacksquare;":"▪","&blacktriangle;":"▴","&blacktriangledown;":"▾","&blacktriangleleft;":"◂","&blacktriangleright;":"▸","&blank;":"␣","&blk12;":"▒","&blk14;":"░","&blk34;":"▓","&block;":"█","&bne;":"=⃥","&bnequiv;":"≡⃥","&bnot;":"⌐","&bopf;":"𝕓","&bot;":"⊥","&bottom;":"⊥","&bowtie;":"⋈","&boxDL;":"╗","&boxDR;":"╔","&boxDl;":"╖","&boxDr;":"╓","&boxH;":"═","&boxHD;":"╦","&boxHU;":"╩","&boxHd;":"╤","&boxHu;":"╧","&boxUL;":"╝","&boxUR;":"╚","&boxUl;":"╜","&boxUr;":"╙","&boxV;":"║","&boxVH;":"╬","&boxVL;":"╣","&boxVR;":"╠","&boxVh;":"╫","&boxVl;":"╢","&boxVr;":"╟","&boxbox;":"⧉","&boxdL;":"╕","&boxdR;":"╒","&boxdl;":"┐","&boxdr;":"┌","&boxh;":"─","&boxhD;":"╥","&boxhU;":"╨","&boxhd;":"┬","&boxhu;":"┴","&boxminus;":"⊟","&boxplus;":"⊞","&boxtimes;":"⊠","&boxuL;":"╛","&boxuR;":"╘","&boxul;":"┘","&boxur;":"└","&boxv;":"│","&boxvH;":"╪","&boxvL;":"╡","&boxvR;":"╞","&boxvh;":"┼","&boxvl;":"┤","&boxvr;":"├","&bprime;":"‵","&breve;":"˘","&brvbar":"¦","&brvbar;":"¦","&bscr;":"𝒷","&bsemi;":"⁏","&bsim;":"∽","&bsime;":"⋍","&bsol;":"\\","&bsolb;":"⧅","&bsolhsub;":"⟈","&bull;":"•","&bullet;":"•","&bump;":"≎","&bumpE;":"⪮","&bumpe;":"≏","&bumpeq;":"≏","&cacute;":"ć","&cap;":"∩","&capand;":"⩄","&capbrcup;":"⩉","&capcap;":"⩋","&capcup;":"⩇","&capdot;":"⩀","&caps;":"∩︀","&caret;":"⁁","&caron;":"ˇ","&ccaps;":"⩍","&ccaron;":"č","&ccedil":"ç","&ccedil;":"ç","&ccirc;":"ĉ","&ccups;":"⩌","&ccupssm;":"⩐","&cdot;":"ċ","&cedil":"¸","&cedil;":"¸","&cemptyv;":"⦲","&cent":"¢","&cent;":"¢","&centerdot;":"·","&cfr;":"𝔠","&chcy;":"ч","&check;":"✓","&checkmark;":"✓","&chi;":"χ","&cir;":"○","&cirE;":"⧃","&circ;":"ˆ","&circeq;":"≗","&circlearrowleft;":"↺","&circlearrowright;":"↻","&circledR;":"®","&circledS;":"Ⓢ","&circledast;":"⊛","&circledcirc;":"⊚","&circleddash;":"⊝","&cire;":"≗","&cirfnint;":"⨐","&cirmid;":"⫯","&cirscir;":"⧂","&clubs;":"♣","&clubsuit;":"♣","&colon;":":","&colone;":"≔","&coloneq;":"≔","&comma;":",","&commat;":"@","&comp;":"∁","&compfn;":"∘","&complement;":"∁","&complexes;":"ℂ","&cong;":"≅","&congdot;":"⩭","&conint;":"∮","&copf;":"𝕔","&coprod;":"∐","&copy":"©","&copy;":"©","&copysr;":"℗","&crarr;":"↵","&cross;":"✗","&cscr;":"𝒸","&csub;":"⫏","&csube;":"⫑","&csup;":"⫐","&csupe;":"⫒","&ctdot;":"⋯","&cudarrl;":"⤸","&cudarrr;":"⤵","&cuepr;":"⋞","&cuesc;":"⋟","&cularr;":"↶","&cularrp;":"⤽","&cup;":"∪","&cupbrcap;":"⩈","&cupcap;":"⩆","&cupcup;":"⩊","&cupdot;":"⊍","&cupor;":"⩅","&cups;":"∪︀","&curarr;":"↷","&curarrm;":"⤼","&curlyeqprec;":"⋞","&curlyeqsucc;":"⋟","&curlyvee;":"⋎","&curlywedge;":"⋏","&curren":"¤","&curren;":"¤","&curvearrowleft;":"↶","&curvearrowright;":"↷","&cuvee;":"⋎","&cuwed;":"⋏","&cwconint;":"∲","&cwint;":"∱","&cylcty;":"⌭","&dArr;":"⇓","&dHar;":"⥥","&dagger;":"†","&daleth;":"ℸ","&darr;":"↓","&dash;":"‐","&dashv;":"⊣","&dbkarow;":"⤏","&dblac;":"˝","&dcaron;":"ď","&dcy;":"д","&dd;":"ⅆ","&ddagger;":"‡","&ddarr;":"⇊","&ddotseq;":"⩷","&deg":"°","&deg;":"°","&delta;":"δ","&demptyv;":"⦱","&dfisht;":"⥿","&dfr;":"𝔡","&dharl;":"⇃","&dharr;":"⇂","&diam;":"⋄","&diamond;":"⋄","&diamondsuit;":"♦","&diams;":"♦","&die;":"¨","&digamma;":"ϝ","&disin;":"⋲","&div;":"÷","&divide":"÷","&divide;":"÷","&divideontimes;":"⋇","&divonx;":"⋇","&djcy;":"ђ","&dlcorn;":"⌞","&dlcrop;":"⌍","&dollar;":"$","&dopf;":"𝕕","&dot;":"˙","&doteq;":"≐","&doteqdot;":"≑","&dotminus;":"∸","&dotplus;":"∔","&dotsquare;":"⊡","&doublebarwedge;":"⌆","&downarrow;":"↓","&downdownarrows;":"⇊","&downharpoonleft;":"⇃","&downharpoonright;":"⇂","&drbkarow;":"⤐","&drcorn;":"⌟","&drcrop;":"⌌","&dscr;":"𝒹","&dscy;":"ѕ","&dsol;":"⧶","&dstrok;":"đ","&dtdot;":"⋱","&dtri;":"▿","&dtrif;":"▾","&duarr;":"⇵","&duhar;":"⥯","&dwangle;":"⦦","&dzcy;":"џ","&dzigrarr;":"⟿","&eDDot;":"⩷","&eDot;":"≑","&eacute":"é","&eacute;":"é","&easter;":"⩮","&ecaron;":"ě","&ecir;":"≖","&ecirc":"ê","&ecirc;":"ê","&ecolon;":"≕","&ecy;":"э","&edot;":"ė","&ee;":"ⅇ","&efDot;":"≒","&efr;":"𝔢","&eg;":"⪚","&egrave":"è","&egrave;":"è","&egs;":"⪖","&egsdot;":"⪘","&el;":"⪙","&elinters;":"⏧","&ell;":"ℓ","&els;":"⪕","&elsdot;":"⪗","&emacr;":"ē","&empty;":"∅","&emptyset;":"∅","&emptyv;":"∅","&emsp13;":" ","&emsp14;":" ","&emsp;":" ","&eng;":"ŋ","&ensp;":" ","&eogon;":"ę","&eopf;":"𝕖","&epar;":"⋕","&eparsl;":"⧣","&eplus;":"⩱","&epsi;":"ε","&epsilon;":"ε","&epsiv;":"ϵ","&eqcirc;":"≖","&eqcolon;":"≕","&eqsim;":"≂","&eqslantgtr;":"⪖","&eqslantless;":"⪕","&equals;":"=","&equest;":"≟","&equiv;":"≡","&equivDD;":"⩸","&eqvparsl;":"⧥","&erDot;":"≓","&erarr;":"⥱","&escr;":"ℯ","&esdot;":"≐","&esim;":"≂","&eta;":"η","&eth":"ð","&eth;":"ð","&euml":"ë","&euml;":"ë","&euro;":"€","&excl;":"!","&exist;":"∃","&expectation;":"ℰ","&exponentiale;":"ⅇ","&fallingdotseq;":"≒","&fcy;":"ф","&female;":"♀","&ffilig;":"ﬃ","&fflig;":"ﬀ","&ffllig;":"ﬄ","&ffr;":"𝔣","&filig;":"ﬁ","&fjlig;":"fj","&flat;":"♭","&fllig;":"ﬂ","&fltns;":"▱","&fnof;":"ƒ","&fopf;":"𝕗","&forall;":"∀","&fork;":"⋔","&forkv;":"⫙","&fpartint;":"⨍","&frac12":"½","&frac12;":"½","&frac13;":"⅓","&frac14":"¼","&frac14;":"¼","&frac15;":"⅕","&frac16;":"⅙","&frac18;":"⅛","&frac23;":"⅔","&frac25;":"⅖","&frac34":"¾","&frac34;":"¾","&frac35;":"⅗","&frac38;":"⅜","&frac45;":"⅘","&frac56;":"⅚","&frac58;":"⅝","&frac78;":"⅞","&frasl;":"⁄","&frown;":"⌢","&fscr;":"𝒻","&gE;":"≧","&gEl;":"⪌","&gacute;":"ǵ","&gamma;":"γ","&gammad;":"ϝ","&gap;":"⪆","&gbreve;":"ğ","&gcirc;":"ĝ","&gcy;":"г","&gdot;":"ġ","&ge;":"≥","&gel;":"⋛","&geq;":"≥","&geqq;":"≧","&geqslant;":"⩾","&ges;":"⩾","&gescc;":"⪩","&gesdot;":"⪀","&gesdoto;":"⪂","&gesdotol;":"⪄","&gesl;":"⋛︀","&gesles;":"⪔","&gfr;":"𝔤","&gg;":"≫","&ggg;":"⋙","&gimel;":"ℷ","&gjcy;":"ѓ","&gl;":"≷","&glE;":"⪒","&gla;":"⪥","&glj;":"⪤","&gnE;":"≩","&gnap;":"⪊","&gnapprox;":"⪊","&gne;":"⪈","&gneq;":"⪈","&gneqq;":"≩","&gnsim;":"⋧","&gopf;":"𝕘","&grave;":"`","&gscr;":"ℊ","&gsim;":"≳","&gsime;":"⪎","&gsiml;":"⪐","&gt":">","&gt;":">","&gtcc;":"⪧","&gtcir;":"⩺","&gtdot;":"⋗","&gtlPar;":"⦕","&gtquest;":"⩼","&gtrapprox;":"⪆","&gtrarr;":"⥸","&gtrdot;":"⋗","&gtreqless;":"⋛","&gtreqqless;":"⪌","&gtrless;":"≷","&gtrsim;":"≳","&gvertneqq;":"≩︀","&gvnE;":"≩︀","&hArr;":"⇔","&hairsp;":" ","&half;":"½","&hamilt;":"ℋ","&hardcy;":"ъ","&harr;":"↔","&harrcir;":"⥈","&harrw;":"↭","&hbar;":"ℏ","&hcirc;":"ĥ","&hearts;":"♥","&heartsuit;":"♥","&hellip;":"…","&hercon;":"⊹","&hfr;":"𝔥","&hksearow;":"⤥","&hkswarow;":"⤦","&hoarr;":"⇿","&homtht;":"∻","&hookleftarrow;":"↩","&hookrightarrow;":"↪","&hopf;":"𝕙","&horbar;":"―","&hscr;":"𝒽","&hslash;":"ℏ","&hstrok;":"ħ","&hybull;":"⁃","&hyphen;":"‐","&iacute":"í","&iacute;":"í","&ic;":"⁣","&icirc":"î","&icirc;":"î","&icy;":"и","&iecy;":"е","&iexcl":"¡","&iexcl;":"¡","&iff;":"⇔","&ifr;":"𝔦","&igrave":"ì","&igrave;":"ì","&ii;":"ⅈ","&iiiint;":"⨌","&iiint;":"∭","&iinfin;":"⧜","&iiota;":"℩","&ijlig;":"ĳ","&imacr;":"ī","&image;":"ℑ","&imagline;":"ℐ","&imagpart;":"ℑ","&imath;":"ı","&imof;":"⊷","&imped;":"Ƶ","&in;":"∈","&incare;":"℅","&infin;":"∞","&infintie;":"⧝","&inodot;":"ı","&int;":"∫","&intcal;":"⊺","&integers;":"ℤ","&intercal;":"⊺","&intlarhk;":"⨗","&intprod;":"⨼","&iocy;":"ё","&iogon;":"į","&iopf;":"𝕚","&iota;":"ι","&iprod;":"⨼","&iquest":"¿","&iquest;":"¿","&iscr;":"𝒾","&isin;":"∈","&isinE;":"⋹","&isindot;":"⋵","&isins;":"⋴","&isinsv;":"⋳","&isinv;":"∈","&it;":"⁢","&itilde;":"ĩ","&iukcy;":"і","&iuml":"ï","&iuml;":"ï","&jcirc;":"ĵ","&jcy;":"й","&jfr;":"𝔧","&jmath;":"ȷ","&jopf;":"𝕛","&jscr;":"𝒿","&jsercy;":"ј","&jukcy;":"є","&kappa;":"κ","&kappav;":"ϰ","&kcedil;":"ķ","&kcy;":"к","&kfr;":"𝔨","&kgreen;":"ĸ","&khcy;":"х","&kjcy;":"ќ","&kopf;":"𝕜","&kscr;":"𝓀","&lAarr;":"⇚","&lArr;":"⇐","&lAtail;":"⤛","&lBarr;":"⤎","&lE;":"≦","&lEg;":"⪋","&lHar;":"⥢","&lacute;":"ĺ","&laemptyv;":"⦴","&lagran;":"ℒ","&lambda;":"λ","&lang;":"⟨","&langd;":"⦑","&langle;":"⟨","&lap;":"⪅","&laquo":"«","&laquo;":"«","&larr;":"←","&larrb;":"⇤","&larrbfs;":"⤟","&larrfs;":"⤝","&larrhk;":"↩","&larrlp;":"↫","&larrpl;":"⤹","&larrsim;":"⥳","&larrtl;":"↢","&lat;":"⪫","&latail;":"⤙","&late;":"⪭","&lates;":"⪭︀","&lbarr;":"⤌","&lbbrk;":"❲","&lbrace;":"{","&lbrack;":"[","&lbrke;":"⦋","&lbrksld;":"⦏","&lbrkslu;":"⦍","&lcaron;":"ľ","&lcedil;":"ļ","&lceil;":"⌈","&lcub;":"{","&lcy;":"л","&ldca;":"⤶","&ldquo;":"“","&ldquor;":"„","&ldrdhar;":"⥧","&ldrushar;":"⥋","&ldsh;":"↲","&le;":"≤","&leftarrow;":"←","&leftarrowtail;":"↢","&leftharpoondown;":"↽","&leftharpoonup;":"↼","&leftleftarrows;":"⇇","&leftrightarrow;":"↔","&leftrightarrows;":"⇆","&leftrightharpoons;":"⇋","&leftrightsquigarrow;":"↭","&leftthreetimes;":"⋋","&leg;":"⋚","&leq;":"≤","&leqq;":"≦","&leqslant;":"⩽","&les;":"⩽","&lescc;":"⪨","&lesdot;":"⩿","&lesdoto;":"⪁","&lesdotor;":"⪃","&lesg;":"⋚︀","&lesges;":"⪓","&lessapprox;":"⪅","&lessdot;":"⋖","&lesseqgtr;":"⋚","&lesseqqgtr;":"⪋","&lessgtr;":"≶","&lesssim;":"≲","&lfisht;":"⥼","&lfloor;":"⌊","&lfr;":"𝔩","&lg;":"≶","&lgE;":"⪑","&lhard;":"↽","&lharu;":"↼","&lharul;":"⥪","&lhblk;":"▄","&ljcy;":"љ","&ll;":"≪","&llarr;":"⇇","&llcorner;":"⌞","&llhard;":"⥫","&lltri;":"◺","&lmidot;":"ŀ","&lmoust;":"⎰","&lmoustache;":"⎰","&lnE;":"≨","&lnap;":"⪉","&lnapprox;":"⪉","&lne;":"⪇","&lneq;":"⪇","&lneqq;":"≨","&lnsim;":"⋦","&loang;":"⟬","&loarr;":"⇽","&lobrk;":"⟦","&longleftarrow;":"⟵","&longleftrightarrow;":"⟷","&longmapsto;":"⟼","&longrightarrow;":"⟶","&looparrowleft;":"↫","&looparrowright;":"↬","&lopar;":"⦅","&lopf;":"𝕝","&loplus;":"⨭","&lotimes;":"⨴","&lowast;":"∗","&lowbar;":"_","&loz;":"◊","&lozenge;":"◊","&lozf;":"⧫","&lpar;":"(","&lparlt;":"⦓","&lrarr;":"⇆","&lrcorner;":"⌟","&lrhar;":"⇋","&lrhard;":"⥭","&lrm;":"‎","&lrtri;":"⊿","&lsaquo;":"‹","&lscr;":"𝓁","&lsh;":"↰","&lsim;":"≲","&lsime;":"⪍","&lsimg;":"⪏","&lsqb;":"[","&lsquo;":"‘","&lsquor;":"‚","&lstrok;":"ł","&lt":"<","&lt;":"<","&ltcc;":"⪦","&ltcir;":"⩹","&ltdot;":"⋖","&lthree;":"⋋","&ltimes;":"⋉","&ltlarr;":"⥶","&ltquest;":"⩻","&ltrPar;":"⦖","&ltri;":"◃","&ltrie;":"⊴","&ltrif;":"◂","&lurdshar;":"⥊","&luruhar;":"⥦","&lvertneqq;":"≨︀","&lvnE;":"≨︀","&mDDot;":"∺","&macr":"¯","&macr;":"¯","&male;":"♂","&malt;":"✠","&maltese;":"✠","&map;":"↦","&mapsto;":"↦","&mapstodown;":"↧","&mapstoleft;":"↤","&mapstoup;":"↥","&marker;":"▮","&mcomma;":"⨩","&mcy;":"м","&mdash;":"—","&measuredangle;":"∡","&mfr;":"𝔪","&mho;":"℧","&micro":"µ","&micro;":"µ","&mid;":"∣","&midast;":"*","&midcir;":"⫰","&middot":"·","&middot;":"·","&minus;":"−","&minusb;":"⊟","&minusd;":"∸","&minusdu;":"⨪","&mlcp;":"⫛","&mldr;":"…","&mnplus;":"∓","&models;":"⊧","&mopf;":"𝕞","&mp;":"∓","&mscr;":"𝓂","&mstpos;":"∾","&mu;":"μ","&multimap;":"⊸","&mumap;":"⊸","&nGg;":"⋙̸","&nGt;":"≫⃒","&nGtv;":"≫̸","&nLeftarrow;":"⇍","&nLeftrightarrow;":"⇎","&nLl;":"⋘̸","&nLt;":"≪⃒","&nLtv;":"≪̸","&nRightarrow;":"⇏","&nVDash;":"⊯","&nVdash;":"⊮","&nabla;":"∇","&nacute;":"ń","&nang;":"∠⃒","&nap;":"≉","&napE;":"⩰̸","&napid;":"≋̸","&napos;":"ŉ","&napprox;":"≉","&natur;":"♮","&natural;":"♮","&naturals;":"ℕ","&nbsp":" ","&nbsp;":" ","&nbump;":"≎̸","&nbumpe;":"≏̸","&ncap;":"⩃","&ncaron;":"ň","&ncedil;":"ņ","&ncong;":"≇","&ncongdot;":"⩭̸","&ncup;":"⩂","&ncy;":"н","&ndash;":"–","&ne;":"≠","&neArr;":"⇗","&nearhk;":"⤤","&nearr;":"↗","&nearrow;":"↗","&nedot;":"≐̸","&nequiv;":"≢","&nesear;":"⤨","&nesim;":"≂̸","&nexist;":"∄","&nexists;":"∄","&nfr;":"𝔫","&ngE;":"≧̸","&nge;":"≱","&ngeq;":"≱","&ngeqq;":"≧̸","&ngeqslant;":"⩾̸","&nges;":"⩾̸","&ngsim;":"≵","&ngt;":"≯","&ngtr;":"≯","&nhArr;":"⇎","&nharr;":"↮","&nhpar;":"⫲","&ni;":"∋","&nis;":"⋼","&nisd;":"⋺","&niv;":"∋","&njcy;":"њ","&nlArr;":"⇍","&nlE;":"≦̸","&nlarr;":"↚","&nldr;":"‥","&nle;":"≰","&nleftarrow;":"↚","&nleftrightarrow;":"↮","&nleq;":"≰","&nleqq;":"≦̸","&nleqslant;":"⩽̸","&nles;":"⩽̸","&nless;":"≮","&nlsim;":"≴","&nlt;":"≮","&nltri;":"⋪","&nltrie;":"⋬","&nmid;":"∤","&nopf;":"𝕟","&not":"¬","&not;":"¬","&notin;":"∉","&notinE;":"⋹̸","&notindot;":"⋵̸","&notinva;":"∉","&notinvb;":"⋷","&notinvc;":"⋶","&notni;":"∌","&notniva;":"∌","&notnivb;":"⋾","&notnivc;":"⋽","&npar;":"∦","&nparallel;":"∦","&nparsl;":"⫽⃥","&npart;":"∂̸","&npolint;":"⨔","&npr;":"⊀","&nprcue;":"⋠","&npre;":"⪯̸","&nprec;":"⊀","&npreceq;":"⪯̸","&nrArr;":"⇏","&nrarr;":"↛","&nrarrc;":"⤳̸","&nrarrw;":"↝̸","&nrightarrow;":"↛","&nrtri;":"⋫","&nrtrie;":"⋭","&nsc;":"⊁","&nsccue;":"⋡","&nsce;":"⪰̸","&nscr;":"𝓃","&nshortmid;":"∤","&nshortparallel;":"∦","&nsim;":"≁","&nsime;":"≄","&nsimeq;":"≄","&nsmid;":"∤","&nspar;":"∦","&nsqsube;":"⋢","&nsqsupe;":"⋣","&nsub;":"⊄","&nsubE;":"⫅̸","&nsube;":"⊈","&nsubset;":"⊂⃒","&nsubseteq;":"⊈","&nsubseteqq;":"⫅̸","&nsucc;":"⊁","&nsucceq;":"⪰̸","&nsup;":"⊅","&nsupE;":"⫆̸","&nsupe;":"⊉","&nsupset;":"⊃⃒","&nsupseteq;":"⊉","&nsupseteqq;":"⫆̸","&ntgl;":"≹","&ntilde":"ñ","&ntilde;":"ñ","&ntlg;":"≸","&ntriangleleft;":"⋪","&ntrianglelefteq;":"⋬","&ntriangleright;":"⋫","&ntrianglerighteq;":"⋭","&nu;":"ν","&num;":"#","&numero;":"№","&numsp;":" ","&nvDash;":"⊭","&nvHarr;":"⤄","&nvap;":"≍⃒","&nvdash;":"⊬","&nvge;":"≥⃒","&nvgt;":">⃒","&nvinfin;":"⧞","&nvlArr;":"⤂","&nvle;":"≤⃒","&nvlt;":"<⃒","&nvltrie;":"⊴⃒","&nvrArr;":"⤃","&nvrtrie;":"⊵⃒","&nvsim;":"∼⃒","&nwArr;":"⇖","&nwarhk;":"⤣","&nwarr;":"↖","&nwarrow;":"↖","&nwnear;":"⤧","&oS;":"Ⓢ","&oacute":"ó","&oacute;":"ó","&oast;":"⊛","&ocir;":"⊚","&ocirc":"ô","&ocirc;":"ô","&ocy;":"о","&odash;":"⊝","&odblac;":"ő","&odiv;":"⨸","&odot;":"⊙","&odsold;":"⦼","&oelig;":"œ","&ofcir;":"⦿","&ofr;":"𝔬","&ogon;":"˛","&ograve":"ò","&ograve;":"ò","&ogt;":"⧁","&ohbar;":"⦵","&ohm;":"Ω","&oint;":"∮","&olarr;":"↺","&olcir;":"⦾","&olcross;":"⦻","&oline;":"‾","&olt;":"⧀","&omacr;":"ō","&omega;":"ω","&omicron;":"ο","&omid;":"⦶","&ominus;":"⊖","&oopf;":"𝕠","&opar;":"⦷","&operp;":"⦹","&oplus;":"⊕","&or;":"∨","&orarr;":"↻","&ord;":"⩝","&order;":"ℴ","&orderof;":"ℴ","&ordf":"ª","&ordf;":"ª","&ordm":"º","&ordm;":"º","&origof;":"⊶","&oror;":"⩖","&orslope;":"⩗","&orv;":"⩛","&oscr;":"ℴ","&oslash":"ø","&oslash;":"ø","&osol;":"⊘","&otilde":"õ","&otilde;":"õ","&otimes;":"⊗","&otimesas;":"⨶","&ouml":"ö","&ouml;":"ö","&ovbar;":"⌽","&par;":"∥","&para":"¶","&para;":"¶","&parallel;":"∥","&parsim;":"⫳","&parsl;":"⫽","&part;":"∂","&pcy;":"п","&percnt;":"%","&period;":".","&permil;":"‰","&perp;":"⊥","&pertenk;":"‱","&pfr;":"𝔭","&phi;":"φ","&phiv;":"ϕ","&phmmat;":"ℳ","&phone;":"☎","&pi;":"π","&pitchfork;":"⋔","&piv;":"ϖ","&planck;":"ℏ","&planckh;":"ℎ","&plankv;":"ℏ","&plus;":"+","&plusacir;":"⨣","&plusb;":"⊞","&pluscir;":"⨢","&plusdo;":"∔","&plusdu;":"⨥","&pluse;":"⩲","&plusmn":"±","&plusmn;":"±","&plussim;":"⨦","&plustwo;":"⨧","&pm;":"±","&pointint;":"⨕","&popf;":"𝕡","&pound":"£","&pound;":"£","&pr;":"≺","&prE;":"⪳","&prap;":"⪷","&prcue;":"≼","&pre;":"⪯","&prec;":"≺","&precapprox;":"⪷","&preccurlyeq;":"≼","&preceq;":"⪯","&precnapprox;":"⪹","&precneqq;":"⪵","&precnsim;":"⋨","&precsim;":"≾","&prime;":"′","&primes;":"ℙ","&prnE;":"⪵","&prnap;":"⪹","&prnsim;":"⋨","&prod;":"∏","&profalar;":"⌮","&profline;":"⌒","&profsurf;":"⌓","&prop;":"∝","&propto;":"∝","&prsim;":"≾","&prurel;":"⊰","&pscr;":"𝓅","&psi;":"ψ","&puncsp;":" ","&qfr;":"𝔮","&qint;":"⨌","&qopf;":"𝕢","&qprime;":"⁗","&qscr;":"𝓆","&quaternions;":"ℍ","&quatint;":"⨖","&quest;":"?","&questeq;":"≟","&quot":'"',"&quot;":'"',"&rAarr;":"⇛","&rArr;":"⇒","&rAtail;":"⤜","&rBarr;":"⤏","&rHar;":"⥤","&race;":"∽̱","&racute;":"ŕ","&radic;":"√","&raemptyv;":"⦳","&rang;":"⟩","&rangd;":"⦒","&range;":"⦥","&rangle;":"⟩","&raquo":"»","&raquo;":"»","&rarr;":"→","&rarrap;":"⥵","&rarrb;":"⇥","&rarrbfs;":"⤠","&rarrc;":"⤳","&rarrfs;":"⤞","&rarrhk;":"↪","&rarrlp;":"↬","&rarrpl;":"⥅","&rarrsim;":"⥴","&rarrtl;":"↣","&rarrw;":"↝","&ratail;":"⤚","&ratio;":"∶","&rationals;":"ℚ","&rbarr;":"⤍","&rbbrk;":"❳","&rbrace;":"}","&rbrack;":"]","&rbrke;":"⦌","&rbrksld;":"⦎","&rbrkslu;":"⦐","&rcaron;":"ř","&rcedil;":"ŗ","&rceil;":"⌉","&rcub;":"}","&rcy;":"р","&rdca;":"⤷","&rdldhar;":"⥩","&rdquo;":"”","&rdquor;":"”","&rdsh;":"↳","&real;":"ℜ","&realine;":"ℛ","&realpart;":"ℜ","&reals;":"ℝ","&rect;":"▭","&reg":"®","&reg;":"®","&rfisht;":"⥽","&rfloor;":"⌋","&rfr;":"𝔯","&rhard;":"⇁","&rharu;":"⇀","&rharul;":"⥬","&rho;":"ρ","&rhov;":"ϱ","&rightarrow;":"→","&rightarrowtail;":"↣","&rightharpoondown;":"⇁","&rightharpoonup;":"⇀","&rightleftarrows;":"⇄","&rightleftharpoons;":"⇌","&rightrightarrows;":"⇉","&rightsquigarrow;":"↝","&rightthreetimes;":"⋌","&ring;":"˚","&risingdotseq;":"≓","&rlarr;":"⇄","&rlhar;":"⇌","&rlm;":"‏","&rmoust;":"⎱","&rmoustache;":"⎱","&rnmid;":"⫮","&roang;":"⟭","&roarr;":"⇾","&robrk;":"⟧","&ropar;":"⦆","&ropf;":"𝕣","&roplus;":"⨮","&rotimes;":"⨵","&rpar;":")","&rpargt;":"⦔","&rppolint;":"⨒","&rrarr;":"⇉","&rsaquo;":"›","&rscr;":"𝓇","&rsh;":"↱","&rsqb;":"]","&rsquo;":"’","&rsquor;":"’","&rthree;":"⋌","&rtimes;":"⋊","&rtri;":"▹","&rtrie;":"⊵","&rtrif;":"▸","&rtriltri;":"⧎","&ruluhar;":"⥨","&rx;":"℞","&sacute;":"ś","&sbquo;":"‚","&sc;":"≻","&scE;":"⪴","&scap;":"⪸","&scaron;":"š","&sccue;":"≽","&sce;":"⪰","&scedil;":"ş","&scirc;":"ŝ","&scnE;":"⪶","&scnap;":"⪺","&scnsim;":"⋩","&scpolint;":"⨓","&scsim;":"≿","&scy;":"с","&sdot;":"⋅","&sdotb;":"⊡","&sdote;":"⩦","&seArr;":"⇘","&searhk;":"⤥","&searr;":"↘","&searrow;":"↘","&sect":"§","&sect;":"§","&semi;":";","&seswar;":"⤩","&setminus;":"∖","&setmn;":"∖","&sext;":"✶","&sfr;":"𝔰","&sfrown;":"⌢","&sharp;":"♯","&shchcy;":"щ","&shcy;":"ш","&shortmid;":"∣","&shortparallel;":"∥","&shy":"­","&shy;":"­","&sigma;":"σ","&sigmaf;":"ς","&sigmav;":"ς","&sim;":"∼","&simdot;":"⩪","&sime;":"≃","&simeq;":"≃","&simg;":"⪞","&simgE;":"⪠","&siml;":"⪝","&simlE;":"⪟","&simne;":"≆","&simplus;":"⨤","&simrarr;":"⥲","&slarr;":"←","&smallsetminus;":"∖","&smashp;":"⨳","&smeparsl;":"⧤","&smid;":"∣","&smile;":"⌣","&smt;":"⪪","&smte;":"⪬","&smtes;":"⪬︀","&softcy;":"ь","&sol;":"/","&solb;":"⧄","&solbar;":"⌿","&sopf;":"𝕤","&spades;":"♠","&spadesuit;":"♠","&spar;":"∥","&sqcap;":"⊓","&sqcaps;":"⊓︀","&sqcup;":"⊔","&sqcups;":"⊔︀","&sqsub;":"⊏","&sqsube;":"⊑","&sqsubset;":"⊏","&sqsubseteq;":"⊑","&sqsup;":"⊐","&sqsupe;":"⊒","&sqsupset;":"⊐","&sqsupseteq;":"⊒","&squ;":"□","&square;":"□","&squarf;":"▪","&squf;":"▪","&srarr;":"→","&sscr;":"𝓈","&ssetmn;":"∖","&ssmile;":"⌣","&sstarf;":"⋆","&star;":"☆","&starf;":"★","&straightepsilon;":"ϵ","&straightphi;":"ϕ","&strns;":"¯","&sub;":"⊂","&subE;":"⫅","&subdot;":"⪽","&sube;":"⊆","&subedot;":"⫃","&submult;":"⫁","&subnE;":"⫋","&subne;":"⊊","&subplus;":"⪿","&subrarr;":"⥹","&subset;":"⊂","&subseteq;":"⊆","&subseteqq;":"⫅","&subsetneq;":"⊊","&subsetneqq;":"⫋","&subsim;":"⫇","&subsub;":"⫕","&subsup;":"⫓","&succ;":"≻","&succapprox;":"⪸","&succcurlyeq;":"≽","&succeq;":"⪰","&succnapprox;":"⪺","&succneqq;":"⪶","&succnsim;":"⋩","&succsim;":"≿","&sum;":"∑","&sung;":"♪","&sup1":"¹","&sup1;":"¹","&sup2":"²","&sup2;":"²","&sup3":"³","&sup3;":"³","&sup;":"⊃","&supE;":"⫆","&supdot;":"⪾","&supdsub;":"⫘","&supe;":"⊇","&supedot;":"⫄","&suphsol;":"⟉","&suphsub;":"⫗","&suplarr;":"⥻","&supmult;":"⫂","&supnE;":"⫌","&supne;":"⊋","&supplus;":"⫀","&supset;":"⊃","&supseteq;":"⊇","&supseteqq;":"⫆","&supsetneq;":"⊋","&supsetneqq;":"⫌","&supsim;":"⫈","&supsub;":"⫔","&supsup;":"⫖","&swArr;":"⇙","&swarhk;":"⤦","&swarr;":"↙","&swarrow;":"↙","&swnwar;":"⤪","&szlig":"ß","&szlig;":"ß","&target;":"⌖","&tau;":"τ","&tbrk;":"⎴","&tcaron;":"ť","&tcedil;":"ţ","&tcy;":"т","&tdot;":"⃛","&telrec;":"⌕","&tfr;":"𝔱","&there4;":"∴","&therefore;":"∴","&theta;":"θ","&thetasym;":"ϑ","&thetav;":"ϑ","&thickapprox;":"≈","&thicksim;":"∼","&thinsp;":" ","&thkap;":"≈","&thksim;":"∼","&thorn":"þ","&thorn;":"þ","&tilde;":"˜","&times":"×","&times;":"×","&timesb;":"⊠","&timesbar;":"⨱","&timesd;":"⨰","&tint;":"∭","&toea;":"⤨","&top;":"⊤","&topbot;":"⌶","&topcir;":"⫱","&topf;":"𝕥","&topfork;":"⫚","&tosa;":"⤩","&tprime;":"‴","&trade;":"™","&triangle;":"▵","&triangledown;":"▿","&triangleleft;":"◃","&trianglelefteq;":"⊴","&triangleq;":"≜","&triangleright;":"▹","&trianglerighteq;":"⊵","&tridot;":"◬","&trie;":"≜","&triminus;":"⨺","&triplus;":"⨹","&trisb;":"⧍","&tritime;":"⨻","&trpezium;":"⏢","&tscr;":"𝓉","&tscy;":"ц","&tshcy;":"ћ","&tstrok;":"ŧ","&twixt;":"≬","&twoheadleftarrow;":"↞","&twoheadrightarrow;":"↠","&uArr;":"⇑","&uHar;":"⥣","&uacute":"ú","&uacute;":"ú","&uarr;":"↑","&ubrcy;":"ў","&ubreve;":"ŭ","&ucirc":"û","&ucirc;":"û","&ucy;":"у","&udarr;":"⇅","&udblac;":"ű","&udhar;":"⥮","&ufisht;":"⥾","&ufr;":"𝔲","&ugrave":"ù","&ugrave;":"ù","&uharl;":"↿","&uharr;":"↾","&uhblk;":"▀","&ulcorn;":"⌜","&ulcorner;":"⌜","&ulcrop;":"⌏","&ultri;":"◸","&umacr;":"ū","&uml":"¨","&uml;":"¨","&uogon;":"ų","&uopf;":"𝕦","&uparrow;":"↑","&updownarrow;":"↕","&upharpoonleft;":"↿","&upharpoonright;":"↾","&uplus;":"⊎","&upsi;":"υ","&upsih;":"ϒ","&upsilon;":"υ","&upuparrows;":"⇈","&urcorn;":"⌝","&urcorner;":"⌝","&urcrop;":"⌎","&uring;":"ů","&urtri;":"◹","&uscr;":"𝓊","&utdot;":"⋰","&utilde;":"ũ","&utri;":"▵","&utrif;":"▴","&uuarr;":"⇈","&uuml":"ü","&uuml;":"ü","&uwangle;":"⦧","&vArr;":"⇕","&vBar;":"⫨","&vBarv;":"⫩","&vDash;":"⊨","&vangrt;":"⦜","&varepsilon;":"ϵ","&varkappa;":"ϰ","&varnothing;":"∅","&varphi;":"ϕ","&varpi;":"ϖ","&varpropto;":"∝","&varr;":"↕","&varrho;":"ϱ","&varsigma;":"ς","&varsubsetneq;":"⊊︀","&varsubsetneqq;":"⫋︀","&varsupsetneq;":"⊋︀","&varsupsetneqq;":"⫌︀","&vartheta;":"ϑ","&vartriangleleft;":"⊲","&vartriangleright;":"⊳","&vcy;":"в","&vdash;":"⊢","&vee;":"∨","&veebar;":"⊻","&veeeq;":"≚","&vellip;":"⋮","&verbar;":"|","&vert;":"|","&vfr;":"𝔳","&vltri;":"⊲","&vnsub;":"⊂⃒","&vnsup;":"⊃⃒","&vopf;":"𝕧","&vprop;":"∝","&vrtri;":"⊳","&vscr;":"𝓋","&vsubnE;":"⫋︀","&vsubne;":"⊊︀","&vsupnE;":"⫌︀","&vsupne;":"⊋︀","&vzigzag;":"⦚","&wcirc;":"ŵ","&wedbar;":"⩟","&wedge;":"∧","&wedgeq;":"≙","&weierp;":"℘","&wfr;":"𝔴","&wopf;":"𝕨","&wp;":"℘","&wr;":"≀","&wreath;":"≀","&wscr;":"𝓌","&xcap;":"⋂","&xcirc;":"◯","&xcup;":"⋃","&xdtri;":"▽","&xfr;":"𝔵","&xhArr;":"⟺","&xharr;":"⟷","&xi;":"ξ","&xlArr;":"⟸","&xlarr;":"⟵","&xmap;":"⟼","&xnis;":"⋻","&xodot;":"⨀","&xopf;":"𝕩","&xoplus;":"⨁","&xotime;":"⨂","&xrArr;":"⟹","&xrarr;":"⟶","&xscr;":"𝓍","&xsqcup;":"⨆","&xuplus;":"⨄","&xutri;":"△","&xvee;":"⋁","&xwedge;":"⋀","&yacute":"ý","&yacute;":"ý","&yacy;":"я","&ycirc;":"ŷ","&ycy;":"ы","&yen":"¥","&yen;":"¥","&yfr;":"𝔶","&yicy;":"ї","&yopf;":"𝕪","&yscr;":"𝓎","&yucy;":"ю","&yuml":"ÿ","&yuml;":"ÿ","&zacute;":"ź","&zcaron;":"ž","&zcy;":"з","&zdot;":"ż","&zeetrf;":"ℨ","&zeta;":"ζ","&zfr;":"𝔷","&zhcy;":"ж","&zigrarr;":"⇝","&zopf;":"𝕫","&zscr;":"𝓏","&zwj;":"‍","&zwnj;":"‌"},characters:{"Æ":"&AElig;","&":"&amp;","Á":"&Aacute;","Ă":"&Abreve;","Â":"&Acirc;","А":"&Acy;","𝔄":"&Afr;","À":"&Agrave;","Α":"&Alpha;","Ā":"&Amacr;","⩓":"&And;","Ą":"&Aogon;","𝔸":"&Aopf;","⁡":"&af;","Å":"&angst;","𝒜":"&Ascr;","≔":"&coloneq;","Ã":"&Atilde;","Ä":"&Auml;","∖":"&ssetmn;","⫧":"&Barv;","⌆":"&doublebarwedge;","Б":"&Bcy;","∵":"&because;","ℬ":"&bernou;","Β":"&Beta;","𝔅":"&Bfr;","𝔹":"&Bopf;","˘":"&breve;","≎":"&bump;","Ч":"&CHcy;","©":"&copy;","Ć":"&Cacute;","⋒":"&Cap;","ⅅ":"&DD;","ℭ":"&Cfr;","Č":"&Ccaron;","Ç":"&Ccedil;","Ĉ":"&Ccirc;","∰":"&Cconint;","Ċ":"&Cdot;","¸":"&cedil;","·":"&middot;","Χ":"&Chi;","⊙":"&odot;","⊖":"&ominus;","⊕":"&oplus;","⊗":"&otimes;","∲":"&cwconint;","”":"&rdquor;","’":"&rsquor;","∷":"&Proportion;","⩴":"&Colone;","≡":"&equiv;","∯":"&DoubleContourIntegral;","∮":"&oint;","ℂ":"&complexes;","∐":"&coprod;","∳":"&awconint;","⨯":"&Cross;","𝒞":"&Cscr;","⋓":"&Cup;","≍":"&asympeq;","⤑":"&DDotrahd;","Ђ":"&DJcy;","Ѕ":"&DScy;","Џ":"&DZcy;","‡":"&ddagger;","↡":"&Darr;","⫤":"&DoubleLeftTee;","Ď":"&Dcaron;","Д":"&Dcy;","∇":"&nabla;","Δ":"&Delta;","𝔇":"&Dfr;","´":"&acute;","˙":"&dot;","˝":"&dblac;","`":"&grave;","˜":"&tilde;","⋄":"&diamond;","ⅆ":"&dd;","𝔻":"&Dopf;","¨":"&uml;","⃜":"&DotDot;","≐":"&esdot;","⇓":"&dArr;","⇐":"&lArr;","⇔":"&iff;","⟸":"&xlArr;","⟺":"&xhArr;","⟹":"&xrArr;","⇒":"&rArr;","⊨":"&vDash;","⇑":"&uArr;","⇕":"&vArr;","∥":"&spar;","↓":"&downarrow;","⤓":"&DownArrowBar;","⇵":"&duarr;","̑":"&DownBreve;","⥐":"&DownLeftRightVector;","⥞":"&DownLeftTeeVector;","↽":"&lhard;","⥖":"&DownLeftVectorBar;","⥟":"&DownRightTeeVector;","⇁":"&rightharpoondown;","⥗":"&DownRightVectorBar;","⊤":"&top;","↧":"&mapstodown;","𝒟":"&Dscr;","Đ":"&Dstrok;","Ŋ":"&ENG;","Ð":"&ETH;","É":"&Eacute;","Ě":"&Ecaron;","Ê":"&Ecirc;","Э":"&Ecy;","Ė":"&Edot;","𝔈":"&Efr;","È":"&Egrave;","∈":"&isinv;","Ē":"&Emacr;","◻":"&EmptySmallSquare;","▫":"&EmptyVerySmallSquare;","Ę":"&Eogon;","𝔼":"&Eopf;","Ε":"&Epsilon;","⩵":"&Equal;","≂":"&esim;","⇌":"&rlhar;","ℰ":"&expectation;","⩳":"&Esim;","Η":"&Eta;","Ë":"&Euml;","∃":"&exist;","ⅇ":"&exponentiale;","Ф":"&Fcy;","𝔉":"&Ffr;","◼":"&FilledSmallSquare;","▪":"&squf;","𝔽":"&Fopf;","∀":"&forall;","ℱ":"&Fscr;","Ѓ":"&GJcy;",">":"&gt;","Γ":"&Gamma;","Ϝ":"&Gammad;","Ğ":"&Gbreve;","Ģ":"&Gcedil;","Ĝ":"&Gcirc;","Г":"&Gcy;","Ġ":"&Gdot;","𝔊":"&Gfr;","⋙":"&ggg;","𝔾":"&Gopf;","≥":"&geq;","⋛":"&gtreqless;","≧":"&geqq;","⪢":"&GreaterGreater;","≷":"&gtrless;","⩾":"&ges;","≳":"&gtrsim;","𝒢":"&Gscr;","≫":"&gg;","Ъ":"&HARDcy;","ˇ":"&caron;","^":"&Hat;","Ĥ":"&Hcirc;","ℌ":"&Poincareplane;","ℋ":"&hamilt;","ℍ":"&quaternions;","─":"&boxh;","Ħ":"&Hstrok;","≏":"&bumpeq;","Е":"&IEcy;","Ĳ":"&IJlig;","Ё":"&IOcy;","Í":"&Iacute;","Î":"&Icirc;","И":"&Icy;","İ":"&Idot;","ℑ":"&imagpart;","Ì":"&Igrave;","Ī":"&Imacr;","ⅈ":"&ii;","∬":"&Int;","∫":"&int;","⋂":"&xcap;","⁣":"&ic;","⁢":"&it;","Į":"&Iogon;","𝕀":"&Iopf;","Ι":"&Iota;","ℐ":"&imagline;","Ĩ":"&Itilde;","І":"&Iukcy;","Ï":"&Iuml;","Ĵ":"&Jcirc;","Й":"&Jcy;","𝔍":"&Jfr;","𝕁":"&Jopf;","𝒥":"&Jscr;","Ј":"&Jsercy;","Є":"&Jukcy;","Х":"&KHcy;","Ќ":"&KJcy;","Κ":"&Kappa;","Ķ":"&Kcedil;","К":"&Kcy;","𝔎":"&Kfr;","𝕂":"&Kopf;","𝒦":"&Kscr;","Љ":"&LJcy;","<":"&lt;","Ĺ":"&Lacute;","Λ":"&Lambda;","⟪":"&Lang;","ℒ":"&lagran;","↞":"&twoheadleftarrow;","Ľ":"&Lcaron;","Ļ":"&Lcedil;","Л":"&Lcy;","⟨":"&langle;","←":"&slarr;","⇤":"&larrb;","⇆":"&lrarr;","⌈":"&lceil;","⟦":"&lobrk;","⥡":"&LeftDownTeeVector;","⇃":"&downharpoonleft;","⥙":"&LeftDownVectorBar;","⌊":"&lfloor;","↔":"&leftrightarrow;","⥎":"&LeftRightVector;","⊣":"&dashv;","↤":"&mapstoleft;","⥚":"&LeftTeeVector;","⊲":"&vltri;","⧏":"&LeftTriangleBar;","⊴":"&trianglelefteq;","⥑":"&LeftUpDownVector;","⥠":"&LeftUpTeeVector;","↿":"&upharpoonleft;","⥘":"&LeftUpVectorBar;","↼":"&lharu;","⥒":"&LeftVectorBar;","⋚":"&lesseqgtr;","≦":"&leqq;","≶":"&lg;","⪡":"&LessLess;","⩽":"&les;","≲":"&lsim;","𝔏":"&Lfr;","⋘":"&Ll;","⇚":"&lAarr;","Ŀ":"&Lmidot;","⟵":"&xlarr;","⟷":"&xharr;","⟶":"&xrarr;","𝕃":"&Lopf;","↙":"&swarrow;","↘":"&searrow;","↰":"&lsh;","Ł":"&Lstrok;","≪":"&ll;","⤅":"&Map;","М":"&Mcy;"," ":"&MediumSpace;","ℳ":"&phmmat;","𝔐":"&Mfr;","∓":"&mp;","𝕄":"&Mopf;","Μ":"&Mu;","Њ":"&NJcy;","Ń":"&Nacute;","Ň":"&Ncaron;","Ņ":"&Ncedil;","Н":"&Ncy;","​":"&ZeroWidthSpace;","\n":"&NewLine;","𝔑":"&Nfr;","⁠":"&NoBreak;"," ":"&nbsp;","ℕ":"&naturals;","⫬":"&Not;","≢":"&nequiv;","≭":"&NotCupCap;","∦":"&nspar;","∉":"&notinva;","≠":"&ne;","≂̸":"&nesim;","∄":"&nexists;","≯":"&ngtr;","≱":"&ngeq;","≧̸":"&ngeqq;","≫̸":"&nGtv;","≹":"&ntgl;","⩾̸":"&nges;","≵":"&ngsim;","≎̸":"&nbump;","≏̸":"&nbumpe;","⋪":"&ntriangleleft;","⧏̸":"&NotLeftTriangleBar;","⋬":"&ntrianglelefteq;","≮":"&nlt;","≰":"&nleq;","≸":"&ntlg;","≪̸":"&nLtv;","⩽̸":"&nles;","≴":"&nlsim;","⪢̸":"&NotNestedGreaterGreater;","⪡̸":"&NotNestedLessLess;","⊀":"&nprec;","⪯̸":"&npreceq;","⋠":"&nprcue;","∌":"&notniva;","⋫":"&ntriangleright;","⧐̸":"&NotRightTriangleBar;","⋭":"&ntrianglerighteq;","⊏̸":"&NotSquareSubset;","⋢":"&nsqsube;","⊐̸":"&NotSquareSuperset;","⋣":"&nsqsupe;","⊂⃒":"&vnsub;","⊈":"&nsubseteq;","⊁":"&nsucc;","⪰̸":"&nsucceq;","⋡":"&nsccue;","≿̸":"&NotSucceedsTilde;","⊃⃒":"&vnsup;","⊉":"&nsupseteq;","≁":"&nsim;","≄":"&nsimeq;","≇":"&ncong;","≉":"&napprox;","∤":"&nsmid;","𝒩":"&Nscr;","Ñ":"&Ntilde;","Ν":"&Nu;","Œ":"&OElig;","Ó":"&Oacute;","Ô":"&Ocirc;","О":"&Ocy;","Ő":"&Odblac;","𝔒":"&Ofr;","Ò":"&Ograve;","Ō":"&Omacr;","Ω":"&ohm;","Ο":"&Omicron;","𝕆":"&Oopf;","“":"&ldquo;","‘":"&lsquo;","⩔":"&Or;","𝒪":"&Oscr;","Ø":"&Oslash;","Õ":"&Otilde;","⨷":"&Otimes;","Ö":"&Ouml;","‾":"&oline;","⏞":"&OverBrace;","⎴":"&tbrk;","⏜":"&OverParenthesis;","∂":"&part;","П":"&Pcy;","𝔓":"&Pfr;","Φ":"&Phi;","Π":"&Pi;","±":"&pm;","ℙ":"&primes;","⪻":"&Pr;","≺":"&prec;","⪯":"&preceq;","≼":"&preccurlyeq;","≾":"&prsim;","″":"&Prime;","∏":"&prod;","∝":"&vprop;","𝒫":"&Pscr;","Ψ":"&Psi;",'"':"&quot;","𝔔":"&Qfr;","ℚ":"&rationals;","𝒬":"&Qscr;","⤐":"&drbkarow;","®":"&reg;","Ŕ":"&Racute;","⟫":"&Rang;","↠":"&twoheadrightarrow;","⤖":"&Rarrtl;","Ř":"&Rcaron;","Ŗ":"&Rcedil;","Р":"&Rcy;","ℜ":"&realpart;","∋":"&niv;","⇋":"&lrhar;","⥯":"&duhar;","Ρ":"&Rho;","⟩":"&rangle;","→":"&srarr;","⇥":"&rarrb;","⇄":"&rlarr;","⌉":"&rceil;","⟧":"&robrk;","⥝":"&RightDownTeeVector;","⇂":"&downharpoonright;","⥕":"&RightDownVectorBar;","⌋":"&rfloor;","⊢":"&vdash;","↦":"&mapsto;","⥛":"&RightTeeVector;","⊳":"&vrtri;","⧐":"&RightTriangleBar;","⊵":"&trianglerighteq;","⥏":"&RightUpDownVector;","⥜":"&RightUpTeeVector;","↾":"&upharpoonright;","⥔":"&RightUpVectorBar;","⇀":"&rightharpoonup;","⥓":"&RightVectorBar;","ℝ":"&reals;","⥰":"&RoundImplies;","⇛":"&rAarr;","ℛ":"&realine;","↱":"&rsh;","⧴":"&RuleDelayed;","Щ":"&SHCHcy;","Ш":"&SHcy;","Ь":"&SOFTcy;","Ś":"&Sacute;","⪼":"&Sc;","Š":"&Scaron;","Ş":"&Scedil;","Ŝ":"&Scirc;","С":"&Scy;","𝔖":"&Sfr;","↑":"&uparrow;","Σ":"&Sigma;","∘":"&compfn;","𝕊":"&Sopf;","√":"&radic;","□":"&square;","⊓":"&sqcap;","⊏":"&sqsubset;","⊑":"&sqsubseteq;","⊐":"&sqsupset;","⊒":"&sqsupseteq;","⊔":"&sqcup;","𝒮":"&Sscr;","⋆":"&sstarf;","⋐":"&Subset;","⊆":"&subseteq;","≻":"&succ;","⪰":"&succeq;","≽":"&succcurlyeq;","≿":"&succsim;","∑":"&sum;","⋑":"&Supset;","⊃":"&supset;","⊇":"&supseteq;","Þ":"&THORN;","™":"&trade;","Ћ":"&TSHcy;","Ц":"&TScy;","\t":"&Tab;","Τ":"&Tau;","Ť":"&Tcaron;","Ţ":"&Tcedil;","Т":"&Tcy;","𝔗":"&Tfr;","∴":"&therefore;","Θ":"&Theta;","  ":"&ThickSpace;"," ":"&thinsp;","∼":"&thksim;","≃":"&simeq;","≅":"&cong;","≈":"&thkap;","𝕋":"&Topf;","⃛":"&tdot;","𝒯":"&Tscr;","Ŧ":"&Tstrok;","Ú":"&Uacute;","↟":"&Uarr;","⥉":"&Uarrocir;","Ў":"&Ubrcy;","Ŭ":"&Ubreve;","Û":"&Ucirc;","У":"&Ucy;","Ű":"&Udblac;","𝔘":"&Ufr;","Ù":"&Ugrave;","Ū":"&Umacr;",_:"&lowbar;","⏟":"&UnderBrace;","⎵":"&bbrk;","⏝":"&UnderParenthesis;","⋃":"&xcup;","⊎":"&uplus;","Ų":"&Uogon;","𝕌":"&Uopf;","⤒":"&UpArrowBar;","⇅":"&udarr;","↕":"&varr;","⥮":"&udhar;","⊥":"&perp;","↥":"&mapstoup;","↖":"&nwarrow;","↗":"&nearrow;","ϒ":"&upsih;","Υ":"&Upsilon;","Ů":"&Uring;","𝒰":"&Uscr;","Ũ":"&Utilde;","Ü":"&Uuml;","⊫":"&VDash;","⫫":"&Vbar;","В":"&Vcy;","⊩":"&Vdash;","⫦":"&Vdashl;","⋁":"&xvee;","‖":"&Vert;","∣":"&smid;","|":"&vert;","❘":"&VerticalSeparator;","≀":"&wreath;"," ":"&hairsp;","𝔙":"&Vfr;","𝕍":"&Vopf;","𝒱":"&Vscr;","⊪":"&Vvdash;","Ŵ":"&Wcirc;","⋀":"&xwedge;","𝔚":"&Wfr;","𝕎":"&Wopf;","𝒲":"&Wscr;","𝔛":"&Xfr;","Ξ":"&Xi;","𝕏":"&Xopf;","𝒳":"&Xscr;","Я":"&YAcy;","Ї":"&YIcy;","Ю":"&YUcy;","Ý":"&Yacute;","Ŷ":"&Ycirc;","Ы":"&Ycy;","𝔜":"&Yfr;","𝕐":"&Yopf;","𝒴":"&Yscr;","Ÿ":"&Yuml;","Ж":"&ZHcy;","Ź":"&Zacute;","Ž":"&Zcaron;","З":"&Zcy;","Ż":"&Zdot;","Ζ":"&Zeta;","ℨ":"&zeetrf;","ℤ":"&integers;","𝒵":"&Zscr;","á":"&aacute;","ă":"&abreve;","∾":"&mstpos;","∾̳":"&acE;","∿":"&acd;","â":"&acirc;","а":"&acy;","æ":"&aelig;","𝔞":"&afr;","à":"&agrave;","ℵ":"&aleph;","α":"&alpha;","ā":"&amacr;","⨿":"&amalg;","∧":"&wedge;","⩕":"&andand;","⩜":"&andd;","⩘":"&andslope;","⩚":"&andv;","∠":"&angle;","⦤":"&ange;","∡":"&measuredangle;","⦨":"&angmsdaa;","⦩":"&angmsdab;","⦪":"&angmsdac;","⦫":"&angmsdad;","⦬":"&angmsdae;","⦭":"&angmsdaf;","⦮":"&angmsdag;","⦯":"&angmsdah;","∟":"&angrt;","⊾":"&angrtvb;","⦝":"&angrtvbd;","∢":"&angsph;","⍼":"&angzarr;","ą":"&aogon;","𝕒":"&aopf;","⩰":"&apE;","⩯":"&apacir;","≊":"&approxeq;","≋":"&apid;","'":"&apos;","å":"&aring;","𝒶":"&ascr;","*":"&midast;","ã":"&atilde;","ä":"&auml;","⨑":"&awint;","⫭":"&bNot;","≌":"&bcong;","϶":"&bepsi;","‵":"&bprime;","∽":"&bsim;","⋍":"&bsime;","⊽":"&barvee;","⌅":"&barwedge;","⎶":"&bbrktbrk;","б":"&bcy;","„":"&ldquor;","⦰":"&bemptyv;","β":"&beta;","ℶ":"&beth;","≬":"&twixt;","𝔟":"&bfr;","◯":"&xcirc;","⨀":"&xodot;","⨁":"&xoplus;","⨂":"&xotime;","⨆":"&xsqcup;","★":"&starf;","▽":"&xdtri;","△":"&xutri;","⨄":"&xuplus;","⤍":"&rbarr;","⧫":"&lozf;","▴":"&utrif;","▾":"&dtrif;","◂":"&ltrif;","▸":"&rtrif;","␣":"&blank;","▒":"&blk12;","░":"&blk14;","▓":"&blk34;","█":"&block;","=⃥":"&bne;","≡⃥":"&bnequiv;","⌐":"&bnot;","𝕓":"&bopf;","⋈":"&bowtie;","╗":"&boxDL;","╔":"&boxDR;","╖":"&boxDl;","╓":"&boxDr;","═":"&boxH;","╦":"&boxHD;","╩":"&boxHU;","╤":"&boxHd;","╧":"&boxHu;","╝":"&boxUL;","╚":"&boxUR;","╜":"&boxUl;","╙":"&boxUr;","║":"&boxV;","╬":"&boxVH;","╣":"&boxVL;","╠":"&boxVR;","╫":"&boxVh;","╢":"&boxVl;","╟":"&boxVr;","⧉":"&boxbox;","╕":"&boxdL;","╒":"&boxdR;","┐":"&boxdl;","┌":"&boxdr;","╥":"&boxhD;","╨":"&boxhU;","┬":"&boxhd;","┴":"&boxhu;","⊟":"&minusb;","⊞":"&plusb;","⊠":"&timesb;","╛":"&boxuL;","╘":"&boxuR;","┘":"&boxul;","└":"&boxur;","│":"&boxv;","╪":"&boxvH;","╡":"&boxvL;","╞":"&boxvR;","┼":"&boxvh;","┤":"&boxvl;","├":"&boxvr;","¦":"&brvbar;","𝒷":"&bscr;","⁏":"&bsemi;","\\":"&bsol;","⧅":"&bsolb;","⟈":"&bsolhsub;","•":"&bullet;","⪮":"&bumpE;","ć":"&cacute;","∩":"&cap;","⩄":"&capand;","⩉":"&capbrcup;","⩋":"&capcap;","⩇":"&capcup;","⩀":"&capdot;","∩︀":"&caps;","⁁":"&caret;","⩍":"&ccaps;","č":"&ccaron;","ç":"&ccedil;","ĉ":"&ccirc;","⩌":"&ccups;","⩐":"&ccupssm;","ċ":"&cdot;","⦲":"&cemptyv;","¢":"&cent;","𝔠":"&cfr;","ч":"&chcy;","✓":"&checkmark;","χ":"&chi;","○":"&cir;","⧃":"&cirE;","ˆ":"&circ;","≗":"&cire;","↺":"&olarr;","↻":"&orarr;","Ⓢ":"&oS;","⊛":"&oast;","⊚":"&ocir;","⊝":"&odash;","⨐":"&cirfnint;","⫯":"&cirmid;","⧂":"&cirscir;","♣":"&clubsuit;",":":"&colon;",",":"&comma;","@":"&commat;","∁":"&complement;","⩭":"&congdot;","𝕔":"&copf;","℗":"&copysr;","↵":"&crarr;","✗":"&cross;","𝒸":"&cscr;","⫏":"&csub;","⫑":"&csube;","⫐":"&csup;","⫒":"&csupe;","⋯":"&ctdot;","⤸":"&cudarrl;","⤵":"&cudarrr;","⋞":"&curlyeqprec;","⋟":"&curlyeqsucc;","↶":"&curvearrowleft;","⤽":"&cularrp;","∪":"&cup;","⩈":"&cupbrcap;","⩆":"&cupcap;","⩊":"&cupcup;","⊍":"&cupdot;","⩅":"&cupor;","∪︀":"&cups;","↷":"&curvearrowright;","⤼":"&curarrm;","⋎":"&cuvee;","⋏":"&cuwed;","¤":"&curren;","∱":"&cwint;","⌭":"&cylcty;","⥥":"&dHar;","†":"&dagger;","ℸ":"&daleth;","‐":"&hyphen;","⤏":"&rBarr;","ď":"&dcaron;","д":"&dcy;","⇊":"&downdownarrows;","⩷":"&eDDot;","°":"&deg;","δ":"&delta;","⦱":"&demptyv;","⥿":"&dfisht;","𝔡":"&dfr;","♦":"&diams;","ϝ":"&gammad;","⋲":"&disin;","÷":"&divide;","⋇":"&divonx;","ђ":"&djcy;","⌞":"&llcorner;","⌍":"&dlcrop;",$:"&dollar;","𝕕":"&dopf;","≑":"&eDot;","∸":"&minusd;","∔":"&plusdo;","⊡":"&sdotb;","⌟":"&lrcorner;","⌌":"&drcrop;","𝒹":"&dscr;","ѕ":"&dscy;","⧶":"&dsol;","đ":"&dstrok;","⋱":"&dtdot;","▿":"&triangledown;","⦦":"&dwangle;","џ":"&dzcy;","⟿":"&dzigrarr;","é":"&eacute;","⩮":"&easter;","ě":"&ecaron;","≖":"&eqcirc;","ê":"&ecirc;","≕":"&eqcolon;","э":"&ecy;","ė":"&edot;","≒":"&fallingdotseq;","𝔢":"&efr;","⪚":"&eg;","è":"&egrave;","⪖":"&eqslantgtr;","⪘":"&egsdot;","⪙":"&el;","⏧":"&elinters;","ℓ":"&ell;","⪕":"&eqslantless;","⪗":"&elsdot;","ē":"&emacr;","∅":"&varnothing;"," ":"&emsp13;"," ":"&emsp14;"," ":"&emsp;","ŋ":"&eng;"," ":"&ensp;","ę":"&eogon;","𝕖":"&eopf;","⋕":"&epar;","⧣":"&eparsl;","⩱":"&eplus;","ε":"&epsilon;","ϵ":"&varepsilon;","=":"&equals;","≟":"&questeq;","⩸":"&equivDD;","⧥":"&eqvparsl;","≓":"&risingdotseq;","⥱":"&erarr;","ℯ":"&escr;","η":"&eta;","ð":"&eth;","ë":"&euml;","€":"&euro;","!":"&excl;","ф":"&fcy;","♀":"&female;","ﬃ":"&ffilig;","ﬀ":"&fflig;","ﬄ":"&ffllig;","𝔣":"&ffr;","ﬁ":"&filig;",fj:"&fjlig;","♭":"&flat;","ﬂ":"&fllig;","▱":"&fltns;","ƒ":"&fnof;","𝕗":"&fopf;","⋔":"&pitchfork;","⫙":"&forkv;","⨍":"&fpartint;","½":"&half;","⅓":"&frac13;","¼":"&frac14;","⅕":"&frac15;","⅙":"&frac16;","⅛":"&frac18;","⅔":"&frac23;","⅖":"&frac25;","¾":"&frac34;","⅗":"&frac35;","⅜":"&frac38;","⅘":"&frac45;","⅚":"&frac56;","⅝":"&frac58;","⅞":"&frac78;","⁄":"&frasl;","⌢":"&sfrown;","𝒻":"&fscr;","⪌":"&gtreqqless;","ǵ":"&gacute;","γ":"&gamma;","⪆":"&gtrapprox;","ğ":"&gbreve;","ĝ":"&gcirc;","г":"&gcy;","ġ":"&gdot;","⪩":"&gescc;","⪀":"&gesdot;","⪂":"&gesdoto;","⪄":"&gesdotol;","⋛︀":"&gesl;","⪔":"&gesles;","𝔤":"&gfr;","ℷ":"&gimel;","ѓ":"&gjcy;","⪒":"&glE;","⪥":"&gla;","⪤":"&glj;","≩":"&gneqq;","⪊":"&gnapprox;","⪈":"&gneq;","⋧":"&gnsim;","𝕘":"&gopf;","ℊ":"&gscr;","⪎":"&gsime;","⪐":"&gsiml;","⪧":"&gtcc;","⩺":"&gtcir;","⋗":"&gtrdot;","⦕":"&gtlPar;","⩼":"&gtquest;","⥸":"&gtrarr;","≩︀":"&gvnE;","ъ":"&hardcy;","⥈":"&harrcir;","↭":"&leftrightsquigarrow;","ℏ":"&plankv;","ĥ":"&hcirc;","♥":"&heartsuit;","…":"&mldr;","⊹":"&hercon;","𝔥":"&hfr;","⤥":"&searhk;","⤦":"&swarhk;","⇿":"&hoarr;","∻":"&homtht;","↩":"&larrhk;","↪":"&rarrhk;","𝕙":"&hopf;","―":"&horbar;","𝒽":"&hscr;","ħ":"&hstrok;","⁃":"&hybull;","í":"&iacute;","î":"&icirc;","и":"&icy;","е":"&iecy;","¡":"&iexcl;","𝔦":"&ifr;","ì":"&igrave;","⨌":"&qint;","∭":"&tint;","⧜":"&iinfin;","℩":"&iiota;","ĳ":"&ijlig;","ī":"&imacr;","ı":"&inodot;","⊷":"&imof;","Ƶ":"&imped;","℅":"&incare;","∞":"&infin;","⧝":"&infintie;","⊺":"&intercal;","⨗":"&intlarhk;","⨼":"&iprod;","ё":"&iocy;","į":"&iogon;","𝕚":"&iopf;","ι":"&iota;","¿":"&iquest;","𝒾":"&iscr;","⋹":"&isinE;","⋵":"&isindot;","⋴":"&isins;","⋳":"&isinsv;","ĩ":"&itilde;","і":"&iukcy;","ï":"&iuml;","ĵ":"&jcirc;","й":"&jcy;","𝔧":"&jfr;","ȷ":"&jmath;","𝕛":"&jopf;","𝒿":"&jscr;","ј":"&jsercy;","є":"&jukcy;","κ":"&kappa;","ϰ":"&varkappa;","ķ":"&kcedil;","к":"&kcy;","𝔨":"&kfr;","ĸ":"&kgreen;","х":"&khcy;","ќ":"&kjcy;","𝕜":"&kopf;","𝓀":"&kscr;","⤛":"&lAtail;","⤎":"&lBarr;","⪋":"&lesseqqgtr;","⥢":"&lHar;","ĺ":"&lacute;","⦴":"&laemptyv;","λ":"&lambda;","⦑":"&langd;","⪅":"&lessapprox;","«":"&laquo;","⤟":"&larrbfs;","⤝":"&larrfs;","↫":"&looparrowleft;","⤹":"&larrpl;","⥳":"&larrsim;","↢":"&leftarrowtail;","⪫":"&lat;","⤙":"&latail;","⪭":"&late;","⪭︀":"&lates;","⤌":"&lbarr;","❲":"&lbbrk;","{":"&lcub;","[":"&lsqb;","⦋":"&lbrke;","⦏":"&lbrksld;","⦍":"&lbrkslu;","ľ":"&lcaron;","ļ":"&lcedil;","л":"&lcy;","⤶":"&ldca;","⥧":"&ldrdhar;","⥋":"&ldrushar;","↲":"&ldsh;","≤":"&leq;","⇇":"&llarr;","⋋":"&lthree;","⪨":"&lescc;","⩿":"&lesdot;","⪁":"&lesdoto;","⪃":"&lesdotor;","⋚︀":"&lesg;","⪓":"&lesges;","⋖":"&ltdot;","⥼":"&lfisht;","𝔩":"&lfr;","⪑":"&lgE;","⥪":"&lharul;","▄":"&lhblk;","љ":"&ljcy;","⥫":"&llhard;","◺":"&lltri;","ŀ":"&lmidot;","⎰":"&lmoustache;","≨":"&lneqq;","⪉":"&lnapprox;","⪇":"&lneq;","⋦":"&lnsim;","⟬":"&loang;","⇽":"&loarr;","⟼":"&xmap;","↬":"&rarrlp;","⦅":"&lopar;","𝕝":"&lopf;","⨭":"&loplus;","⨴":"&lotimes;","∗":"&lowast;","◊":"&lozenge;","(":"&lpar;","⦓":"&lparlt;","⥭":"&lrhard;","‎":"&lrm;","⊿":"&lrtri;","‹":"&lsaquo;","𝓁":"&lscr;","⪍":"&lsime;","⪏":"&lsimg;","‚":"&sbquo;","ł":"&lstrok;","⪦":"&ltcc;","⩹":"&ltcir;","⋉":"&ltimes;","⥶":"&ltlarr;","⩻":"&ltquest;","⦖":"&ltrPar;","◃":"&triangleleft;","⥊":"&lurdshar;","⥦":"&luruhar;","≨︀":"&lvnE;","∺":"&mDDot;","¯":"&strns;","♂":"&male;","✠":"&maltese;","▮":"&marker;","⨩":"&mcomma;","м":"&mcy;","—":"&mdash;","𝔪":"&mfr;","℧":"&mho;","µ":"&micro;","⫰":"&midcir;","−":"&minus;","⨪":"&minusdu;","⫛":"&mlcp;","⊧":"&models;","𝕞":"&mopf;","𝓂":"&mscr;","μ":"&mu;","⊸":"&mumap;","⋙̸":"&nGg;","≫⃒":"&nGt;","⇍":"&nlArr;","⇎":"&nhArr;","⋘̸":"&nLl;","≪⃒":"&nLt;","⇏":"&nrArr;","⊯":"&nVDash;","⊮":"&nVdash;","ń":"&nacute;","∠⃒":"&nang;","⩰̸":"&napE;","≋̸":"&napid;","ŉ":"&napos;","♮":"&natural;","⩃":"&ncap;","ň":"&ncaron;","ņ":"&ncedil;","⩭̸":"&ncongdot;","⩂":"&ncup;","н":"&ncy;","–":"&ndash;","⇗":"&neArr;","⤤":"&nearhk;","≐̸":"&nedot;","⤨":"&toea;","𝔫":"&nfr;","↮":"&nleftrightarrow;","⫲":"&nhpar;","⋼":"&nis;","⋺":"&nisd;","њ":"&njcy;","≦̸":"&nleqq;","↚":"&nleftarrow;","‥":"&nldr;","𝕟":"&nopf;","¬":"&not;","⋹̸":"&notinE;","⋵̸":"&notindot;","⋷":"&notinvb;","⋶":"&notinvc;","⋾":"&notnivb;","⋽":"&notnivc;","⫽⃥":"&nparsl;","∂̸":"&npart;","⨔":"&npolint;","↛":"&nrightarrow;","⤳̸":"&nrarrc;","↝̸":"&nrarrw;","𝓃":"&nscr;","⊄":"&nsub;","⫅̸":"&nsubseteqq;","⊅":"&nsup;","⫆̸":"&nsupseteqq;","ñ":"&ntilde;","ν":"&nu;","#":"&num;","№":"&numero;"," ":"&numsp;","⊭":"&nvDash;","⤄":"&nvHarr;","≍⃒":"&nvap;","⊬":"&nvdash;","≥⃒":"&nvge;",">⃒":"&nvgt;","⧞":"&nvinfin;","⤂":"&nvlArr;","≤⃒":"&nvle;","<⃒":"&nvlt;","⊴⃒":"&nvltrie;","⤃":"&nvrArr;","⊵⃒":"&nvrtrie;","∼⃒":"&nvsim;","⇖":"&nwArr;","⤣":"&nwarhk;","⤧":"&nwnear;","ó":"&oacute;","ô":"&ocirc;","о":"&ocy;","ő":"&odblac;","⨸":"&odiv;","⦼":"&odsold;","œ":"&oelig;","⦿":"&ofcir;","𝔬":"&ofr;","˛":"&ogon;","ò":"&ograve;","⧁":"&ogt;","⦵":"&ohbar;","⦾":"&olcir;","⦻":"&olcross;","⧀":"&olt;","ō":"&omacr;","ω":"&omega;","ο":"&omicron;","⦶":"&omid;","𝕠":"&oopf;","⦷":"&opar;","⦹":"&operp;","∨":"&vee;","⩝":"&ord;","ℴ":"&oscr;","ª":"&ordf;","º":"&ordm;","⊶":"&origof;","⩖":"&oror;","⩗":"&orslope;","⩛":"&orv;","ø":"&oslash;","⊘":"&osol;","õ":"&otilde;","⨶":"&otimesas;","ö":"&ouml;","⌽":"&ovbar;","¶":"&para;","⫳":"&parsim;","⫽":"&parsl;","п":"&pcy;","%":"&percnt;",".":"&period;","‰":"&permil;","‱":"&pertenk;","𝔭":"&pfr;","φ":"&phi;","ϕ":"&varphi;","☎":"&phone;","π":"&pi;","ϖ":"&varpi;","ℎ":"&planckh;","+":"&plus;","⨣":"&plusacir;","⨢":"&pluscir;","⨥":"&plusdu;","⩲":"&pluse;","⨦":"&plussim;","⨧":"&plustwo;","⨕":"&pointint;","𝕡":"&popf;","£":"&pound;","⪳":"&prE;","⪷":"&precapprox;","⪹":"&prnap;","⪵":"&prnE;","⋨":"&prnsim;","′":"&prime;","⌮":"&profalar;","⌒":"&profline;","⌓":"&profsurf;","⊰":"&prurel;","𝓅":"&pscr;","ψ":"&psi;"," ":"&puncsp;","𝔮":"&qfr;","𝕢":"&qopf;","⁗":"&qprime;","𝓆":"&qscr;","⨖":"&quatint;","?":"&quest;","⤜":"&rAtail;","⥤":"&rHar;","∽̱":"&race;","ŕ":"&racute;","⦳":"&raemptyv;","⦒":"&rangd;","⦥":"&range;","»":"&raquo;","⥵":"&rarrap;","⤠":"&rarrbfs;","⤳":"&rarrc;","⤞":"&rarrfs;","⥅":"&rarrpl;","⥴":"&rarrsim;","↣":"&rightarrowtail;","↝":"&rightsquigarrow;","⤚":"&ratail;","∶":"&ratio;","❳":"&rbbrk;","}":"&rcub;","]":"&rsqb;","⦌":"&rbrke;","⦎":"&rbrksld;","⦐":"&rbrkslu;","ř":"&rcaron;","ŗ":"&rcedil;","р":"&rcy;","⤷":"&rdca;","⥩":"&rdldhar;","↳":"&rdsh;","▭":"&rect;","⥽":"&rfisht;","𝔯":"&rfr;","⥬":"&rharul;","ρ":"&rho;","ϱ":"&varrho;","⇉":"&rrarr;","⋌":"&rthree;","˚":"&ring;","‏":"&rlm;","⎱":"&rmoustache;","⫮":"&rnmid;","⟭":"&roang;","⇾":"&roarr;","⦆":"&ropar;","𝕣":"&ropf;","⨮":"&roplus;","⨵":"&rotimes;",")":"&rpar;","⦔":"&rpargt;","⨒":"&rppolint;","›":"&rsaquo;","𝓇":"&rscr;","⋊":"&rtimes;","▹":"&triangleright;","⧎":"&rtriltri;","⥨":"&ruluhar;","℞":"&rx;","ś":"&sacute;","⪴":"&scE;","⪸":"&succapprox;","š":"&scaron;","ş":"&scedil;","ŝ":"&scirc;","⪶":"&succneqq;","⪺":"&succnapprox;","⋩":"&succnsim;","⨓":"&scpolint;","с":"&scy;","⋅":"&sdot;","⩦":"&sdote;","⇘":"&seArr;","§":"&sect;",";":"&semi;","⤩":"&tosa;","✶":"&sext;","𝔰":"&sfr;","♯":"&sharp;","щ":"&shchcy;","ш":"&shcy;","­":"&shy;","σ":"&sigma;","ς":"&varsigma;","⩪":"&simdot;","⪞":"&simg;","⪠":"&simgE;","⪝":"&siml;","⪟":"&simlE;","≆":"&simne;","⨤":"&simplus;","⥲":"&simrarr;","⨳":"&smashp;","⧤":"&smeparsl;","⌣":"&ssmile;","⪪":"&smt;","⪬":"&smte;","⪬︀":"&smtes;","ь":"&softcy;","/":"&sol;","⧄":"&solb;","⌿":"&solbar;","𝕤":"&sopf;","♠":"&spadesuit;","⊓︀":"&sqcaps;","⊔︀":"&sqcups;","𝓈":"&sscr;","☆":"&star;","⊂":"&subset;","⫅":"&subseteqq;","⪽":"&subdot;","⫃":"&subedot;","⫁":"&submult;","⫋":"&subsetneqq;","⊊":"&subsetneq;","⪿":"&subplus;","⥹":"&subrarr;","⫇":"&subsim;","⫕":"&subsub;","⫓":"&subsup;","♪":"&sung;","¹":"&sup1;","²":"&sup2;","³":"&sup3;","⫆":"&supseteqq;","⪾":"&supdot;","⫘":"&supdsub;","⫄":"&supedot;","⟉":"&suphsol;","⫗":"&suphsub;","⥻":"&suplarr;","⫂":"&supmult;","⫌":"&supsetneqq;","⊋":"&supsetneq;","⫀":"&supplus;","⫈":"&supsim;","⫔":"&supsub;","⫖":"&supsup;","⇙":"&swArr;","⤪":"&swnwar;","ß":"&szlig;","⌖":"&target;","τ":"&tau;","ť":"&tcaron;","ţ":"&tcedil;","т":"&tcy;","⌕":"&telrec;","𝔱":"&tfr;","θ":"&theta;","ϑ":"&vartheta;","þ":"&thorn;","×":"&times;","⨱":"&timesbar;","⨰":"&timesd;","⌶":"&topbot;","⫱":"&topcir;","𝕥":"&topf;","⫚":"&topfork;","‴":"&tprime;","▵":"&utri;","≜":"&trie;","◬":"&tridot;","⨺":"&triminus;","⨹":"&triplus;","⧍":"&trisb;","⨻":"&tritime;","⏢":"&trpezium;","𝓉":"&tscr;","ц":"&tscy;","ћ":"&tshcy;","ŧ":"&tstrok;","⥣":"&uHar;","ú":"&uacute;","ў":"&ubrcy;","ŭ":"&ubreve;","û":"&ucirc;","у":"&ucy;","ű":"&udblac;","⥾":"&ufisht;","𝔲":"&ufr;","ù":"&ugrave;","▀":"&uhblk;","⌜":"&ulcorner;","⌏":"&ulcrop;","◸":"&ultri;","ū":"&umacr;","ų":"&uogon;","𝕦":"&uopf;","υ":"&upsilon;","⇈":"&uuarr;","⌝":"&urcorner;","⌎":"&urcrop;","ů":"&uring;","◹":"&urtri;","𝓊":"&uscr;","⋰":"&utdot;","ũ":"&utilde;","ü":"&uuml;","⦧":"&uwangle;","⫨":"&vBar;","⫩":"&vBarv;","⦜":"&vangrt;","⊊︀":"&vsubne;","⫋︀":"&vsubnE;","⊋︀":"&vsupne;","⫌︀":"&vsupnE;","в":"&vcy;","⊻":"&veebar;","≚":"&veeeq;","⋮":"&vellip;","𝔳":"&vfr;","𝕧":"&vopf;","𝓋":"&vscr;","⦚":"&vzigzag;","ŵ":"&wcirc;","⩟":"&wedbar;","≙":"&wedgeq;","℘":"&wp;","𝔴":"&wfr;","𝕨":"&wopf;","𝓌":"&wscr;","𝔵":"&xfr;","ξ":"&xi;","⋻":"&xnis;","𝕩":"&xopf;","𝓍":"&xscr;","ý":"&yacute;","я":"&yacy;","ŷ":"&ycirc;","ы":"&ycy;","¥":"&yen;","𝔶":"&yfr;","ї":"&yicy;","𝕪":"&yopf;","𝓎":"&yscr;","ю":"&yucy;","ÿ":"&yuml;","ź":"&zacute;","ž":"&zcaron;","з":"&zcy;","ż":"&zdot;","ζ":"&zeta;","𝔷":"&zfr;","ж":"&zhcy;","⇝":"&zigrarr;","𝕫":"&zopf;","𝓏":"&zscr;","‍":"&zwj;","‌":"&zwnj;"}}};

/***/ }),

/***/ "./node_modules/html-entities/lib/numeric-unicode-map.js":
/*!***************************************************************!*\
  !*** ./node_modules/html-entities/lib/numeric-unicode-map.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.numericUnicodeMap={0:65533,128:8364,130:8218,131:402,132:8222,133:8230,134:8224,135:8225,136:710,137:8240,138:352,139:8249,140:338,142:381,145:8216,146:8217,147:8220,148:8221,149:8226,150:8211,151:8212,152:732,153:8482,154:353,155:8250,156:339,158:382,159:376};

/***/ }),

/***/ "./node_modules/html-entities/lib/surrogate-pairs.js":
/*!***********************************************************!*\
  !*** ./node_modules/html-entities/lib/surrogate-pairs.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.fromCodePoint=String.fromCodePoint||function(astralCodePoint){return String.fromCharCode(Math.floor((astralCodePoint-65536)/1024)+55296,(astralCodePoint-65536)%1024+56320)};exports.getCodePoint=String.prototype.codePointAt?function(input,position){return input.codePointAt(position)}:function(input,position){return(input.charCodeAt(position)-55296)*1024+input.charCodeAt(position+1)-56320+65536};exports.highSurrogateFrom=55296;exports.highSurrogateTo=56319;

/***/ }),

/***/ "./node_modules/mitt/dist/mitt.es.js":
/*!*******************************************!*\
  !*** ./node_modules/mitt/dist/mitt.es.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//      
// An event handler can take an optional event argument
// and should not return a value
                                          
                                                               

// An array of all currently registered event handlers for a type
                                            
                                                            
// A map of event types and their corresponding event handlers.
                        
                                 
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).slice().map(function (handler) { handler(evt); });
			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ __webpack_exports__["default"] = (mitt);
//# sourceMappingURL=mitt.es.js.map


/***/ }),

/***/ "./node_modules/nanoid/format.browser.js":
/*!***********************************************!*\
  !*** ./node_modules/nanoid/format.browser.js ***!
  \***********************************************/
/***/ (function(module) {

// This file replaces `format.js` in bundlers like webpack or Rollup,
// according to `browser` config in `package.json`.

module.exports = function (random, alphabet, size) {
  // We can’t use bytes bigger than the alphabet. To make bytes values closer
  // to the alphabet, we apply bitmask on them. We look for the closest
  // `2 ** x - 1` number, which will be bigger than alphabet size. If we have
  // 30 symbols in the alphabet, we will take 31 (00011111).
  // We do not use faster Math.clz32, because it is not available in browsers.
  var mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1
  // Bitmask is not a perfect solution (in our example it will pass 31 bytes,
  // which is bigger than the alphabet). As a result, we will need more bytes,
  // than ID size, because we will refuse bytes bigger than the alphabet.

  // Every hardware random generator call is costly,
  // because we need to wait for entropy collection. This is why often it will
  // be faster to ask for few extra bytes in advance, to avoid additional calls.

  // Here we calculate how many random bytes should we call in advance.
  // It depends on ID length, mask / alphabet size and magic number 1.6
  // (which was selected according benchmarks).

  // -~f => Math.ceil(f) if n is float number
  // -~i => i + 1 if n is integer number
  var step = -~(1.6 * mask * size / alphabet.length)
  var id = ''

  while (true) {
    var bytes = random(step)
    // Compact alternative for `for (var i = 0; i < step; i++)`
    var i = step
    while (i--) {
      // If random byte is bigger than alphabet even after bitmask,
      // we refuse it by `|| ''`.
      id += alphabet[bytes[i] & mask] || ''
      // More compact than `id.length + 1 === size`
      if (id.length === +size) return id
    }
  }
}


/***/ }),

/***/ "./node_modules/netlify-cms-locales/dist/esm/bg/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/netlify-cms-locales/dist/esm/bg/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const bg = {
  auth: {
    login: 'Вход',
    loggingIn: 'Влизане...',
    loginWithNetlifyIdentity: 'Вход с Netlify Identity',
    loginWithAzure: 'Вход с Azure',
    loginWithBitbucket: 'Вход с Bitbucket',
    loginWithGitHub: 'Вход с GitHub',
    loginWithGitLab: 'Вход с GitLab',
    errors: {
      email: 'Въведете вашия имейл.',
      password: 'Въведете паролата.',
      identitySettings: 'Няма достъп до настройките. Ако използвате git-gateway, не забравяйте да активирате услугата Identity и Git Gateway.'
    }
  },
  app: {
    header: {
      content: 'Съдържание',
      workflow: 'Работен процес',
      media: 'Мултимедийни файлове',
      quickAdd: 'Бързо добавяне'
    },
    app: {
      errorHeader: 'Грешка при зареждането на конфигурацията на CMS',
      configErrors: 'Грешки в конфигурацията',
      checkConfigYml: 'Проверете вашия файл config.yml.',
      loadingConfig: 'Зареждане на конфигурация ...',
      waitingBackend: 'В очакване на отговор от бекенда ...'
    },
    notFoundPage: {
      header: 'Не е намерен'
    }
  },
  collection: {
    sidebar: {
      collections: 'Колекции',
      allCollections: 'Всички колекции',
      searchAll: 'Търсете навсякъде',
      searchIn: 'Търсене в'
    },
    collectionTop: {
      sortBy: 'Сортирай по',
      viewAs: 'Виж като',
      newButton: 'Създай %{collectionLabel}',
      ascending: 'Възходящ',
      descending: 'Низходящ',
      searchResults: 'Ресултати от търсенето за "%{searchTerm}"',
      searchResultsInCollection: 'Ресултати от търсенето за "%{searchTerm}" в %{collection}',
      filterBy: 'Филтрирай по',
      groupBy: 'Групирай по'
    },
    entries: {
      loadingEntries: 'Зареждане на записи...',
      cachingEntries: 'Кеширане на записи...',
      longerLoading: 'Това може да отнеме няколко минути',
      noEntries: 'Няма записи'
    },
    groups: {
      other: 'Други',
      negateLabel: 'Не %{label}'
    },
    defaultFields: {
      author: {
        label: 'Автор'
      },
      updatedOn: {
        label: 'Обновено'
      }
    }
  },
  editor: {
    editorControl: {
      field: {
        optional: 'незадължителен'
      }
    },
    editorControlPane: {
      widget: {
        required: '%{fieldLabel} е задължително.',
        regexPattern: '%{fieldLabel} не съответства на модела: %{pattern}.',
        processing: '%{fieldLabel} се обработва.',
        min: '%{fieldLabel} трябва да бъде поне %{minValue}.',
        range: '%{fieldLabel} трябва да бъде между %{minValue} и %{maxValue}.',
        max: '%{fieldLabel} трябва да бъде %{maxValue} или по-малко.',
        rangeCount: '%{fieldLabel} трябва да има между %{minCount} и %{maxCount} елемент(и).',
        rangeCountExact: '%{fieldLabel} трябва да има точно %{count} елемент(и).',
        minCount: '%{fieldLabel} трябва да бъде поне %{minCount} елемент(и).',
        maxCount: '%{fieldLabel} трябва да бъде %{maxCount} или по-малко елемент(и).',
        invalidPath: `'%{path}' не е валиден път`,
        pathExists: `Пътят '%{path}' вече съществува`
      },
      i18n: {
        writingInLocale: 'Писане на %{locale}'
      }
    },
    editor: {
      onLeavePage: 'Наистина ли искате да напуснете тази страница?',
      onUpdatingWithUnsavedChanges: 'Имате незапазени промени, моля, запазете преди актуализиране на състоянието.',
      onPublishingNotReady: 'Моля, актуализирайте състоянието на „Готово“, преди да публикувате',
      onPublishingWithUnsavedChanges: 'Имате незапазени промени, моля, запазете преди публикуване.',
      onPublishing: 'Наистина ли искате да публикувате този запис?',
      onUnpublishing: 'Наистина ли искате да прекратите публикуването на този запис?',
      onDeleteWithUnsavedChanges: 'Наистина ли искате да изтриете този публикуван запис, както и незаписаните промени от текущата сесия?',
      onDeletePublishedEntry: 'Наистина ли искате да изтриете този публикуван запис?',
      onDeleteUnpublishedChangesWithUnsavedChanges: 'Това ще изтрие всички непубликувани промени в този запис, както и незаписаните ви промени от текущата сесия. Все още ли искате да изтриете?',
      onDeleteUnpublishedChanges: 'Всички непубликувани промени в този запис ще бъдат изтрити. Все още ли искате да изтриете?',
      loadingEntry: 'Зареждане на запис...',
      confirmLoadBackup: 'За този запис беше възстановен локален архив, бихте ли искали да го използвате?'
    },
    editorInterface: {
      toggleI18n: 'Превключване i18n',
      togglePreview: 'Превключване на визуализация',
      toggleScrollSync: 'Синхронизирай превъртане'
    },
    editorToolbar: {
      publishing: 'Публикуване...',
      publish: 'Публикувай',
      published: 'Публикуван',
      unpublish: 'Непубликувай',
      duplicate: 'Дублирай',
      unpublishing: 'Непубликуване...',
      publishAndCreateNew: 'Публикувай и създай нов',
      publishAndDuplicate: 'Публикувай и дублирай',
      deleteUnpublishedChanges: 'Изтриване на непубликувани промени',
      deleteUnpublishedEntry: 'Изтрий непубликувани записи',
      deletePublishedEntry: 'Изтрий публикувани записи',
      deleteEntry: 'Изтрий запис',
      saving: 'Запазване...',
      save: 'Запази',
      deleting: 'Изтриване...',
      updating: 'Актуализиране...',
      status: 'Cъстояние: %{status}',
      backCollection: 'Записване в %{collectionLabel} колекция',
      unsavedChanges: 'Незапазени Промени',
      changesSaved: 'Запазени промени',
      draft: 'Чернова',
      inReview: 'В ревю',
      ready: 'Готово',
      publishNow: 'Публикувай сега',
      deployPreviewPendingButtonLabel: 'Проверете  визуализацията',
      deployPreviewButtonLabel: 'Визуализация',
      deployButtonLabel: 'Изглед'
    },
    editorWidgets: {
      markdown: {
        bold: 'Удебелен',
        italic: 'Курсив',
        code: 'Код',
        link: 'Връзка',
        linkPrompt: 'Моля, въведете URL на връзката',
        headings: 'Заглавия',
        quote: 'Цитат',
        bulletedList: 'Маркиран Списък',
        numberedList: 'Номериран Списък',
        addComponent: 'Добави Компонент',
        richText: 'Форматиране на текст',
        markdown: 'Markdown'
      },
      image: {
        choose: 'Избери изображение',
        chooseUrl: 'Вмъкване от URL',
        replaceUrl: 'Замяна с URL',
        promptUrl: 'Въведете URL адреса на изображението',
        chooseDifferent: 'Избери различно изображение',
        remove: 'Премахни изображение'
      },
      file: {
        choose: 'Избери файл file',
        chooseUrl: 'Вмъкване от URL',
        replaceUrl: 'Замяна с URL',
        promptUrl: 'Въведете URL адреса на файла',
        chooseDifferent: 'Избери различен файл',
        remove: 'Премахни файл'
      },
      unknownControl: {
        noControl: "Няма контрол за приспособлението '%{widget}'."
      },
      unknownPreview: {
        noPreview: "Няма визуализация за приспособлението '%{widget}'."
      },
      headingOptions: {
        headingOne: 'Heading 1',
        headingTwo: 'Heading 2',
        headingThree: 'Heading 3',
        headingFour: 'Heading 4',
        headingFive: 'Heading 5',
        headingSix: 'Heading 6'
      },
      datetime: {
        now: 'Сега'
      }
    }
  },
  mediaLibrary: {
    mediaLibraryCard: {
      draft: 'Чернова',
      copy: 'Копирай',
      copyUrl: 'Копирай URL',
      copyPath: 'Копитай път',
      copyName: 'Копитай име',
      copied: 'Копирано'
    },
    mediaLibrary: {
      onDelete: 'Наистина ли искате да изтриете избрания медиен файл?',
      fileTooLarge: 'Файлът е твърде голям.\nНастройките не позволяват запазване на файлове по-големи от %{size} kB.'
    },
    mediaLibraryModal: {
      loading: 'Зареждане...',
      noResults: 'Няма резултати.',
      noAssetsFound: 'Няма намерени ресурси.',
      noImagesFound: 'Няма намерени изображения.',
      private: 'Частен ',
      images: 'Изображения',
      mediaAssets: 'Медийни ресурси',
      search: 'Търсене...',
      uploading: 'Качване...',
      upload: 'Качи',
      download: 'Изтегли',
      deleting: 'Изтриване...',
      deleteSelected: 'Изтрай избрани',
      chooseSelected: 'Избери избрани'
    }
  },
  ui: {
    default: {
      goBackToSite: 'Обратно към сайта'
    },
    errorBoundary: {
      title: 'Грешка',
      details: 'Възникна грешка - моля ',
      reportIt: 'докладвайте в GitHub.',
      detailsHeading: 'Детайли',
      privacyWarning: 'При отваряне на билет той автоматично се попълва предварително със съобщение за грешка и информация за отстраняване на грешки.\nМоля, проверете дали данните са верни и не съдържат поверителна информация.',
      recoveredEntry: {
        heading: 'Възстановен документ',
        warning: 'Моля, копирайте това съобщение някъде, преди да напуснете страницата!',
        copyButtonLabel: 'Копиране в клипборда'
      }
    },
    settingsDropdown: {
      logOut: 'Изход'
    },
    toast: {
      onFailToLoadEntries: 'Неуспешно зареждане на записа: %{details}',
      onFailToLoadDeployPreview: 'Неуспешно зареждане на визуализация: %{details}',
      onFailToPersist: 'Неуспешно запазване на записа: %{details}',
      onFailToDelete: 'Неуспешно изтриване на записа: %{details}',
      onFailToUpdateStatus: 'Неуспешно актуализиране на състоянието: %{details}',
      missingRequiredField: 'Извинете, пропуснахте задължително поле. Моля, попълнете преди запазване.',
      entrySaved: 'Записът е запазен',
      entryPublished: 'Записът е публикуван',
      entryUnpublished: 'Записът е непубликуван',
      onFailToPublishEntry: 'Неуспешно публикуване на запис: %{details}',
      onFailToUnpublishEntry: 'Неуспешно премахване на публикацията на записа: %{details}',
      entryUpdated: 'Статусът на записа е актуализиран',
      onDeleteUnpublishedChanges: 'Непубликуваните промени са изтрити',
      onFailToAuth: '%{details}',
      onLoggedOut: 'Излезли сте. Моля, запазете всички данни и влезте отново',
      onBackendDown: 'Има прекъсване в работата на бекенда. Виж детайлите %{details}'
    }
  },
  workflow: {
    workflow: {
      loading: 'Зареждане на редакционни записи',
      workflowHeading: 'Редакционен работен процес',
      newPost: 'Нова публикация',
      description: 'Броят на записите, които очакват проверка -% {smart_count}, готови за публикуване -% {readyCount}. |||| Броят на записите, които очакват проверка -% {smart_count}, готови за публикуване -% {readyCount}. ',
      dateFormat: 'MMMM D'
    },
    workflowCard: {
      lastChange: '%{date}, %{author}',
      lastChangeNoAuthor: '%{date}',
      lastChangeNoDate: '%{author}',
      deleteChanges: 'Изтриване на промените',
      deleteNewEntry: 'Изтриване на нов запис',
      pubChanges: 'Публикуване на промени',
      objavNewEntry: 'Публикуване на нов запис'
    },
    workflowList: {
      onDeleteEntry: 'Наистина ли искате да изтриете този запис?',
      onPublishingNotReadyEntry: 'Могат да се публикуват само елементи със статус "Готов". Плъзенете картата в колоната "Готов" за да активирате публикуването.',
      onPublishEntry: 'Наистина ли искате да публикувате този запис?',
      draftHeader: 'Чернови',
      inReviewHeader: 'В Ревю',
      readyHeader: 'Готов',
      currentEntries: '%{smart_count} запис |||| %{smart_count} записи'
    }
  }
};
var _default = bg;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/netlify-cms-locales/dist/esm/ca/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/netlify-cms-locales/dist/esm/ca/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const ca = {
  auth: {
    login: 'Iniciar sessió',
    loggingIn: 'Iniciant sessió...',
    loginWithNetlifyIdentity: "Iniciar sessió amb l'identitat de Netlify",
    loginWithBitbucket: 'Iniciar sessió amb Bitbucket',
    loginWithGitHub: 'Iniciar sessió amb GitHub',
    loginWithGitLab: 'Iniciar sessió amb GitLab',
    errors: {
      email: 'Comprova que has escrit el teu email.',
      password: 'Si us plau escriu la teva contrasenya.',
      identitySettings: "No s'ha pogut obtenir accés a les configuracions d'identitat. Quan feu servir backend de git-gateway, assegureu-vos que activeu el servei d’identitat i la passarel·la de Git."
    }
  },
  app: {
    header: {
      content: 'Contingut',
      workflow: 'Flux Editorial',
      media: 'Multimèdia',
      quickAdd: 'Afegir'
    },
    app: {
      errorHeader: 'Error al carregar la configuració del CMS',
      configErrors: 'Errors de configuració',
      checkConfigYml: "Comprovi l'arxiu config.yml.",
      loadingConfig: 'Carregant configuració....',
      waitingBackend: 'Esperant al servidor...'
    },
    notFoundPage: {
      header: 'No trobat'
    }
  },
  collection: {
    sidebar: {
      collections: 'Col·leccions',
      allCollections: 'Totes les col·leccions',
      searchAll: 'Buscar tots',
      searchIn: 'Buscar a'
    },
    collectionTop: {
      sortBy: 'Ordenar per',
      viewAs: 'Veure com',
      newButton: 'Nou %{collectionLabel}',
      ascending: 'Ascendent',
      descending: 'Descendent',
      searchResults: 'Buscar resultats per "%{searchTerm}"',
      searchResultsInCollection: 'Buscar resultats per "%{searchTerm}" a %{collection}',
      filterBy: 'Filtrar per',
      groupBy: 'Agrupar per'
    },
    entries: {
      loadingEntries: 'Carregant entrades',
      cachingEntries: 'Emmagatzemant entrades a la caché',
      longerLoading: 'Això podria tardar uns minuts',
      noEntries: 'Cap entrada'
    },
    groups: {
      other: 'Altre',
      negateLabel: 'No %{label}'
    },
    defaultFields: {
      author: {
        label: 'Autor'
      },
      updatedOn: {
        label: 'Actualitzat el'
      }
    }
  },
  editor: {
    editorControl: {
      field: {
        optional: 'opcional'
      }
    },
    editorControlPane: {
      widget: {
        required: '%{fieldLabel} és obligatori.',
        regexPattern: '%{fieldLabel} no coincideix amb el patró: %{pattern}.',
        processing: '%{fieldLabel} està processant.',
        range: "%{fieldLabel} ha d'estar entre %{minValue} i %{maxValue}.",
        min: '%{fieldLabel} ha ser com a mínim %{minValue}.',
        max: '%{fieldLabel} ha de ser %{maxValue} o més.',
        rangeCount: '%{fieldLabel} ha de tenir entre %{minCount} i %{maxCount} element(s).',
        rangeCountExact: '%{fieldLabel} ha de tenir exactament %{count} element(s).',
        rangeMin: "%{fieldLabel} ha de tenir com a mínim %{minCount} d'element(s).",
        rangeMax: '%{fieldLabel} ha de ser %{maxCount} o inferior.',
        invalidPath: `'%{path}' no és una ruta valida`,
        pathExists: `'%{path}' ja existeix`
      },
      i18n: {
        writingInLocale: 'Escriure en %{locale}'
      }
    },
    editor: {
      onLeavePage: 'Estàs segur que vols deixar aquesta pàgina?',
      onUpdatingWithUnsavedChanges: "Tens canvis no guardats, si us plau, guarda'ls abans d'actualitzar l'estat.",
      onPublishingNotReady: 'Si us plau, actualitza l\'estat a "Llest" abans de publicar.',
      onPublishingWithUnsavedChanges: "Tens canvis no guardats, si us plau, guarda'ls abans de publicar-los.",
      onPublishing: 'Estàs segur que vols publicar aquesta entrada?',
      onUnpublishing: 'Estàs segur que vols esborrar aquesta entrada?',
      onDeleteWithUnsavedChanges: 'Està segur que vol eliminar aquesta entrada publicada, així com els canvis no guardats de la sessió actual?',
      onDeletePublishedEntry: 'Està segur que vol eliminar aquesta entrada publicada?',
      onDeleteUnpublishedChangesWithUnsavedChanges: "Això eliminarà tots els canvis no publicats d'aquesta entrada així com els canvis no guardats de la sessió actual. Encara vol procedir?",
      onDeleteUnpublishedChanges: 'Tots els canvis no publicats en aquesta entrada seràn esborrats. Encara els vol eliminar?',
      loadingEntry: 'Carregant entrada...',
      confirmLoadBackup: "S'ha recuperat una copia de seguretat local per aquesta entrada. La vol utilitzar?"
    },
    editorInterface: {
      toggleI18n: 'Mostrar/Amagar traduccions',
      togglePreview: 'Mostrar/Amagar previsualització'
    },
    editorToolbar: {
      publishing: 'Publicant...',
      publish: 'Publicar',
      published: 'Publicat',
      unpublish: 'Despublicar',
      duplicate: 'Duplicar',
      unpublishing: 'Despublicant...',
      publishAndCreateNew: 'Publicar i crear de nou',
      publishAndDuplicate: 'Publica i duplica',
      deleteUnpublishedChanges: 'Eliminar canvis no publicats',
      deleteUnpublishedEntry: 'Eliminar entrada no publicada',
      deletePublishedEntry: 'Eliminar entrada publicada',
      deleteEntry: 'Eliminar entrada',
      saving: 'Guardant...',
      save: 'Guardar',
      deleting: 'Eliminant...',
      updating: 'Actualizant...',
      status: 'Estat: %{status}',
      backCollection: 'Escrivint a la colecció %{collectionLabel}',
      unsavedChanges: 'Canvis no guardats',
      changesSaved: 'Canvis guardats',
      draft: 'Esborrany',
      inReview: 'En revisió',
      ready: 'Llest',
      publishNow: 'Publicar ara',
      deployPreviewPendingButtonLabel: 'Comprovar Vista Prèvia',
      deployPreviewButtonLabel: 'Veure Vista Prèvia',
      deployButtonLabel: 'Veure publicació'
    },
    editorWidgets: {
      markdown: {
        bold: 'Negreta',
        italic: 'Cursiva',
        code: 'Codi',
        link: 'Enllaç',
        linkPrompt: "Introdueix l'URL de l'enllaç",
        headings: 'Encapçalaments',
        bulletedList: 'Llista',
        numberedList: 'Llista numèrica',
        addComponent: 'Afegir component',
        richText: 'Text enriquit',
        markdown: 'Markdown'
      },
      image: {
        choose: 'Escull una imatge',
        chooseUrl: 'Introdueix una URL',
        replaceUrl: 'Substitueix per una URL',
        promptUrl: "Introdueix l'URL de la imatge",
        chooseDifferent: 'Escull una imatge diferent',
        remove: 'Treu la imatge'
      },
      file: {
        choose: 'Escull un arxiu',
        chooseUrl: 'Introdueix una URL',
        replaceUrl: 'Substitueix per una URL',
        promptUrl: "Introdueix l'URL de l'arxiu",
        chooseDifferent: 'Escull un arxiu diferent',
        remove: 'Esborrar arxiu'
      },
      unknownControl: {
        noControl: "No existeix un control per al widget '%{widget}'."
      },
      unknownPreview: {
        noPreview: "No existeix una vista prèvia per al widget '%{widget}'."
      },
      headingOptions: {
        headingOne: 'Encapçalament 1',
        headingTwo: 'Encapçalament 2',
        headingThree: 'Encapçalament 3',
        headingFour: 'Encapçalament 4',
        headingFive: 'Encapçalament 5',
        headingSix: 'Encapçalament 6'
      },
      datetime: {
        now: 'Ara'
      }
    }
  },
  mediaLibrary: {
    mediaLibraryCard: {
      draft: 'Esborrany',
      copy: 'Copiar',
      copyUrl: 'Copiar URL',
      copyPath: 'Copiar path',
      copyName: 'Copiar nom',
      copied: 'Copiat'
    },
    mediaLibrary: {
      onDelete: 'Està segur de que vol eliminar el mitjà seleccionat?',
      fileTooLarge: 'El fitxer és massa gran.\nLa configuració no permet fitxers més grans de %{size} kB.'
    },
    mediaLibraryModal: {
      loading: 'Carregant...',
      noResults: 'Sense resultats.',
      noAssetsFound: 'Arxius no trobats.',
      noImagesFound: 'Imatges no trobades.',
      private: 'Privat',
      images: 'Imatges',
      mediaAssets: 'Arxius multimèdia',
      search: 'Buscar...',
      uploading: 'Penjant...',
      upload: 'Penjar nou',
      download: 'Descarregar',
      deleting: 'Eliminant...',
      deleteSelected: 'Eliminar selecció',
      chooseSelected: 'Confirmar selecció'
    }
  },
  ui: {
    default: {
      goBackToSite: 'Torna enrere al lloc'
    },
    errorBoundary: {
      title: 'Error',
      details: "S'ha produït un error - si us plau ",
      reportIt: "Informa'ns d'això a GitHub.",
      detailsHeading: 'Detalls',
      recoveredEntry: {
        heading: 'Document recuperat',
        warning: 'Si us plau, copiï/enganxi això en algun lloc abans de navegar a una altre pàgina!',
        copyButtonLabel: 'Copiar al porta-retalls'
      }
    },
    settingsDropdown: {
      logOut: 'Tancar sessió'
    },
    toast: {
      onFailToLoadEntries: "No s'ha ha pogut carregar l'entrada: %{details}",
      onFailToLoadDeployPreview: "No s'ha pogut carregar la vista prèvia: %{details}",
      onFailToPersist: "No s'ha pogut guardar l'entrada: %{details}",
      onFailToDelete: "No s'ha pogut eliminar l'entrada: %{details}",
      onFailToUpdateStatus: "No s'ha pogut actualitzar l'estat: %{details}",
      missingRequiredField: "Ups, no ha omplert un camp obligatori. Si us plau,  ompli'l abans de guardar.",
      entrySaved: 'Entrada guardada',
      entryPublished: 'Entrada publicada',
      entryUnpublished: 'Entrada despublicada',
      onFailToPublishEntry: "No s'ha pogut publicar: %{details}",
      onFailToUnpublishEntry: "No s'ha pogut despublicar l'entrada: %{details}",
      entryUpdated: "Estat de l'entrada actualitzat",
      onDeleteUnpublishedChanges: 'Canvis no publicats eliminats',
      onFailToAuth: '%{details}',
      onLoggedOut: 'La teva sessió ha estat tancada. Si us plau, torna a iniciar-la',
      onBackendDown: 'El servidor està patint problemes. Consulta %{details} per a més informació'
    }
  },
  workflow: {
    workflow: {
      loading: 'Carregant Entradas del Flux Editorial',
      workflowHeading: 'Flux Editorial',
      newPost: 'Nou article',
      description: '%{smart_count} entrada esperant revisió, %{readyCount} llesta per a publicar |||| %{smart_count} entrades esperant revisió, %{readyCount} llestes per a publicar. ',
      dateFormat: 'MMMM D'
    },
    workflowCard: {
      lastChange: '%{date} per %{author}',
      lastChangeNoAuthor: '%{date}',
      lastChangeNoDate: 'per %{author}',
      deleteChanges: 'Eliminar canvis',
      deleteNewEntry: 'Eliminar nova entrada',
      publishChanges: 'Publicar canvis',
      publishNewEntry: 'Publicar nova entrada'
    },
    workflowList: {
      onDeleteEntry: 'Està segur que vol borrar aquesta entrada?',
      onPublishingNotReadyEntry: 'Només es poden publicar elements amb estat "Llest". Si us plau, arrossegui la targeta fins la columna "Llest" per a permetre\'n la publicació',
      onPublishEntry: 'Està segur que vol publicar aquesta entrada?',
      draftHeader: 'Esborranys',
      inReviewHeader: 'En revisió',
      readyHeader: 'Llest',
      currentEntries: '%{smart_count} entrada |||| %{smart_count} entrades'
    }
  }
};
var _default = ca;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/netlify-cms-locales/dist/esm/cs/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/netlify-cms-locales/dist/esm/cs/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const cs = {
  auth: {
    login: 'Přihlásit',
    loggingIn: 'Přihlašování…',
    loginWithNetlifyIdentity: 'Přihlásit pomocí Netlify Identity',
    loginWithAzure: 'Přihlásit pomocí Azure',
    loginWithBitbucket: 'Přihlásit pomocí Bitbucket',
    loginWithGitHub: 'Přihlásit pomocí GitHub',
    loginWithGitLab: 'Přihlásit pomocí GitLab',
    errors: {
      email: 'Vyplňte e-mailovou adresu.',
      password: 'Vyplňte heslo.',
      identitySettings: 'Nastavení identity nenalezeno. Používáte-li git-gateway server nezapomeňte aktivovat službu Identity a Git Gateway' + '.'
    }
  },
  app: {
    header: {
      content: 'Obsah',
      workflow: 'Workflow',
      media: 'Média',
      quickAdd: 'Přidat'
    },
    app: {
      errorHeader: 'Chyba při načítání CMS konfigurace',
      configErrors: 'Chyba konfigurace',
      checkConfigYml: 'Zkontrolujte soubor config.yml.',
      loadingConfig: 'Načítání konfigurace…',
      waitingBackend: 'Čekání na server…'
    },
    notFoundPage: {
      header: 'Nenalezeno'
    }
  },
  collection: {
    sidebar: {
      collections: 'Kolekce',
      allCollections: 'Všechny kolekce',
      searchAll: 'Hledat',
      searchIn: 'Hledat v'
    },
    collectionTop: {
      sortBy: 'Seřadit podle',
      viewAs: 'Zobrazit jako',
      newButton: 'Nový %{collectionLabel}',
      ascending: 'Vzestupné',
      descending: 'Sestupné',
      searchResults: 'Výsledky vyhledávání pro "%{searchTerm}"',
      searchResultsInCollection: 'Výsledky vyhledávání pro "%{searchTerm}" v kolekci %{collection}',
      filterBy: 'Filtrovat podle',
      groupBy: 'Seskupit podle'
    },
    entries: {
      loadingEntries: 'Načítání záznamů',
      cachingEntries: 'Úkládání záznamů do mezipaměti',
      longerLoading: 'Načítání může trvat několik minut',
      noEntries: 'Žádné záznamy'
    },
    groups: {
      other: 'Ostatní',
      negateLabel: 'Není %{label}'
    },
    defaultFields: {
      author: {
        label: 'Autor'
      },
      updatedOn: {
        label: 'Poslední aktualizace'
      }
    }
  },
  editor: {
    editorControl: {
      field: {
        optional: 'volitelný'
      }
    },
    editorControlPane: {
      widget: {
        required: '%{fieldLabel} je povinný.',
        regexPattern: '%{fieldLabel} nesouhlasí s předepsaným vzorem: %{pattern}.',
        processing: '%{fieldLabel} se zpracovává.',
        range: '%{fieldLabel} musí být mezi %{minValue} a %{maxValue}.',
        min: '%{fieldLabel} musí být alespoň %{minValue}.',
        max: '%{fieldLabel} musí být %{maxValue} nebo méně.',
        rangeCount: '%{fieldLabel} musí mít %{minCount} až %{maxCount} položek.',
        rangeCountExact: '%{fieldLabel} musí mít přesně %{count} položek.',
        rangeMin: '%{fieldLabel} musí mít nejméně %{minCount} položky.',
        rangeMax: '%{fieldLabel} musí mít %{maxCount} nebo méně položek.',
        invalidPath: `'%{path}' není platnou cestou.`,
        pathExists: `Cesta '%{path}' už existuje.`
      },
      i18n: {
        writingInLocale: 'Psát v %{locale}'
      }
    },
    editor: {
      onLeavePage: 'Chcete opravdu opustit tuto stránku?',
      onUpdatingWithUnsavedChanges: 'Máte neuložené změny. Uložte je prosím před změnou statusu.',
      onPublishingNotReady: 'Změňte stav na „Připraveno“ před publikováním.',
      onPublishingWithUnsavedChanges: 'Máte neuložené změny, prosím uložte je před publikováním.',
      onPublishing: 'Chcete opravdu publikovat tento záznam?',
      onUnpublishing: 'Chcete opravdu zrušit publikování tohoto záznamu?',
      onDeleteWithUnsavedChanges: 'Chcete opravdu vymazat tento publikovaný záznam a všechny neuložené změny z této relace?',
      onDeletePublishedEntry: 'Chcete opravdu smazat tento publikovaný záznam?',
      onDeleteUnpublishedChangesWithUnsavedChanges: 'Tato akce vymaže všechny nepublikované změny v tomto záznamu a také všechny neuložené změny z této relace. Chcete záznam skutečně vymazat?',
      onDeleteUnpublishedChanges: 'Všechny nepublivkoané změny v tomto záznamu budou vymazány. Chcete ho skuteně vymazat?',
      loadingEntry: 'Načítání záznamu…',
      confirmLoadBackup: 'Lokální kopie tohoto záznamu byla nalezena, chcete ji použít?'
    },
    editorInterface: {
      toggleI18n: 'Přepnout lokalizaci',
      togglePreview: 'Přepnout náhled',
      toggleScrollSync: 'Sladit skrolování'
    },
    editorToolbar: {
      publishing: 'Publikování…',
      publish: 'Publikovat',
      published: 'Publikovaný',
      unpublish: 'Zrušit publikování',
      duplicate: 'Duplikovat',
      unpublishing: 'Rušení publikování…',
      publishAndCreateNew: 'Publikovat a vytvořit nový',
      publishAndDuplicate: 'Publikovat a duplikovat',
      deleteUnpublishedChanges: 'Vymazat nepublikované změny',
      deleteUnpublishedEntry: 'Vymazat nepublikovaný záznam',
      deletePublishedEntry: 'Vymazat publikovaný záznam',
      deleteEntry: 'Vymazat záznam',
      saving: 'Ukládání…',
      save: 'Uložit',
      deleting: 'Vymazávání…',
      updating: 'Aktualizace…',
      status: 'Status: %{status}',
      backCollection: ' Píšete v kolekci %{collectionLabel}',
      unsavedChanges: 'Neuložené změny',
      changesSaved: 'Změny uloženy',
      draft: 'Koncept',
      inReview: 'V revizi',
      ready: 'Připraveno',
      publishNow: 'Publikovat teď',
      deployPreviewPendingButtonLabel: 'Zkontrolovat náhled',
      deployPreviewButtonLabel: 'Zobrazit náhled',
      deployButtonLabel: 'Zobrazit na webu'
    },
    editorWidgets: {
      markdown: {
        bold: 'Tučně',
        italic: 'Kurzíva',
        code: 'Kód',
        link: 'Odkaz',
        linkPrompt: 'Zadejte URL odkazu',
        headings: 'Nadpisy',
        quote: 'Citovat',
        bulletedList: 'Odrážkový seznam',
        numberedList: 'Číslovaný seznam',
        addComponent: 'Přidat součástku',
        richText: 'Rich Text',
        markdown: 'Markdown'
      },
      image: {
        choose: 'Vyberte obrázek',
        chooseUrl: 'Přidat z URL',
        replaceUrl: 'Nahradit z URL',
        promptUrl: 'Zadejte URL obrázku',
        chooseDifferent: 'Vyberte jiný obrázek',
        remove: 'Odstranit obrázek'
      },
      file: {
        choose: 'Vyberte soubor',
        chooseUrl: 'Přidat z URL',
        replaceUrl: 'Nahradit z URL',
        promptUrl: 'Zadejte URL souboru',
        chooseDifferent: 'Vyberte jiný soubor',
        remove: 'Odebrat soubor'
      },
      unknownControl: {
        noControl: "Žádné ovládání pro widget '%{widget}'."
      },
      unknownPreview: {
        noPreview: "Žádný náhled pro widget '%{widget}'."
      },
      headingOptions: {
        headingOne: 'Nadpis 1',
        headingTwo: 'Nadpis 2',
        headingThree: 'Nadpis 3',
        headingFour: 'Nadpis 4',
        headingFive: 'Nadpis 5',
        headingSix: 'Nadpis 6'
      },
      datetime: {
        now: 'Teď'
      }
    }
  },
  mediaLibrary: {
    mediaLibraryCard: {
      draft: 'Koncept',
      copy: 'Kopírovat',
      copyUrl: 'Kopírovat URL',
      copyPath: 'Kopírovat cestu',
      copyName: 'Kopírovat název',
      copied: 'Zkopírováno'
    },
    mediaLibrary: {
      onDelete: 'Chcete skutečně vymazat označená média?',
      fileTooLarge: 'Soubor je příliš velký.\nSoubor musí být menší než %{size} kB.'
    },
    mediaLibraryModal: {
      loading: 'Načítání…',
      noResults: 'Nic nenalezeno.',
      noAssetsFound: 'Média nenalezena.',
      noImagesFound: 'Obrázky nenalezeny.',
      private: 'Soukromé ',
      images: 'Obrázky',
      mediaAssets: 'Média',
      search: 'Hledat…',
      uploading: 'Nahrávání…',
      upload: 'Nahrát nový',
      download: 'Stáhnout',
      deleting: 'Vymazávání…',
      deleteSelected: 'Smazat označené',
      chooseSelected: 'Vybrat označené'
    }
  },
  ui: {
    default: {
      goBackToSite: 'Vrátit se na stránku'
    },
    errorBoundary: {
      title: 'Chyba',
      details: 'Nastala chyba – prosím ',
      reportIt: 'nahlašte ji.',
      detailsHeading: 'Detaily',
      privacyWarning: 'Při otevření problému budou předvyplněny ladící data a chybová zpráva.\nProsím zkontrolujte, jestli jsou informace správné, a případně odstraňte citlivé údaje.',
      recoveredEntry: {
        heading: 'Nalezený dokument',
        warning: 'Prosím zkopírujte dokument do schránky před tím než odejte z této stránky!',
        copyButtonLabel: 'Zkopírovat do schránky'
      }
    },
    settingsDropdown: {
      logOut: 'Odhlásit'
    },
    toast: {
      onFailToLoadEntries: 'Chyba při načítání záznamu: %{details}',
      onFailToLoadDeployPreview: 'Chyba při načítání náhledu: %{details}',
      onFailToPersist: 'Chyba při ukládání záznamu: %{details}',
      onFailToDelete: 'Chyba při vymazávání záznamu: %{details}',
      onFailToUpdateStatus: 'Chyba při změně stavu záznamu: %{details}',
      missingRequiredField: 'Vynechali jste povinné pole. Prosím vyplňte ho.',
      entrySaved: 'Záznam uložen',
      entryPublished: 'Záznam publikován',
      entryUnpublished: 'Publikování záznamu zrušeno',
      onFailToPublishEntry: 'Chyba při publikování záznamu: %{details}',
      onFailToUnpublishEntry: 'Chyba při rušení publikování záznamu: %{details}',
      entryUpdated: 'Stav záznamu byl změněn',
      onDeleteUnpublishedChanges: 'Nepublikované změny byly smazány',
      onFailToAuth: '%{details}',
      onLoggedOut: 'Byli jste odhlášeni, prosím zálohujte všechna data a znova se přihlašte',
      onBackendDown: 'Backend zaznamenal výpadek. Podívejte se do %{details} pro více informací.'
    }
  },
  workflow: {
    workflow: {
      loading: 'Načítání workflow záznamů',
      workflowHeading: 'Schvalovací Workflow',
      newPost: 'Nový post',
      description: '%{smart_count} záznam čeká na schválení, %{readyCount} připraven k publikaci. |||| %{smart_count} čeká na schválení, %{readyCount} připraveno k publikaci. ',
      dateFormat: 'MMMM D'
    },
    workflowCard: {
      lastChange: '%{date} (%{author})',
      lastChangeNoAuthor: '%{date}',
      lastChangeNoDate: '%{author}',
      deleteChanges: 'Vymazat změny',
      deleteNewEntry: 'Vymazat nový záznam',
      publishChanges: 'Publikovat změny',
      publishNewEntry: 'Publikovat nový záznam'
    },
    workflowList: {
      onDeleteEntry: 'Opravdu chcete smazat tento záznam?',
      onPublishingNotReadyEntry: 'Pouze položky se statusem "Připraveno" mohou být publikováno. Pro umožnění publikace musíte přetáhnout kartu do sloupce "Připraveno"',
      onPublishEntry: 'Opravdu chcete publikovat tento záznam?',
      draftHeader: 'Koncepty',
      inReviewHeader: 'V revizi',
      readyHeader: 'Připraveno',
      currentEntries: '%{smart_count} záznam |||| %{smart_count} záznamů'
    }
  }
};
var _default = cs;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/netlify-cms-locales/dist/esm/da/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/netlify-cms-locales/dist/esm/da/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const da = {
  auth: {
    login: 'Log ind',
    loggingIn: 'Logger ind...',
    loginWithNetlifyIdentity: 'Log ind med Netlify Identity',
    loginWithAzure: 'Log ing med Azure',
    loginWithBitbucket: 'Log ind med Bitbucket',
    loginWithGitHub: 'Log ind med GitHub',
    loginWithGitLab: 'Log ind med GitLab',
    errors: {
      email: 'Vær sikker på du har indtastet din e-mail.',
      password: 'Indtast dit kodeord.',
      identitySettings: 'Kunne ikke tilgå identity opsætning. Ved brug af git-gateway som bagvedliggende service, sørg for at aktivere Identity service og Git Gateway.'
    }
  },
  app: {
    header: {
      content: 'Indhold',
      workflow: 'Arbejdsgang',
      media: 'Medier',
      quickAdd: 'Hurtig opret'
    },
    app: {
      errorHeader: 'Fejl ved indlæsning af CMS opsætningen',
      configErrors: 'Opsætningsfejl',
      checkConfigYml: 'Kontroller din config.yml fil.',
      loadingConfig: 'Indlæser opsætning...',
      waitingBackend: 'Venter på bagvedliggende service...'
    },
    notFoundPage: {
      header: 'Ikke fundet'
    }
  },
  collection: {
    sidebar: {
      collections: 'Samlinger',
      allCollections: 'Alle samlinger',
      searchAll: 'Søg i alt',
      searchIn: 'Søg i'
    },
    collectionTop: {
      sortBy: 'Sorter efter',
      viewAs: 'Vis som',
      newButton: 'Ny %{collectionLabel}',
      ascending: 'Stigende',
      descending: 'Faldende',
      searchResults: 'Søgeresultater for "%{searchTerm}"',
      searchResultsInCollection: 'Søgeresultater for "%{searchTerm}" i %{collection}',
      filterBy: 'Filtrer efter',
      groupBy: 'Grupper efter'
    },
    entries: {
      loadingEntries: 'Indlæser dokumenter...',
      cachingEntries: 'Caching af dokumenter...',
      longerLoading: 'Dette kan tage adskillige minutter',
      noEntries: 'Ingen dokumenter'
    },
    groups: {
      other: 'Anden',
      negateLabel: 'Ikke %{label}'
    },
    defaultFields: {
      author: {
        label: 'Forfatter'
      },
      updatedOn: {
        label: 'Opdateret '
      }
    }
  },
  editor: {
    editorControl: {
      field: {
        optional: 'kan udelades'
      }
    },
    editorControlPane: {
      widget: {
        required: '%{fieldLabel} er påkrævet.',
        regexPattern: '%{fieldLabel} matchede ikke: %{pattern}.',
        processing: '%{fieldLabel} behandles.',
        range: '%{fieldLabel} skal være mellem %{minValue} og %{maxValue}.',
        min: '%{fieldLabel} skal være mindst %{minValue}.',
        max: '%{fieldLabel} være være %{maxValue} eller mindre.',
        rangeCount: '%{fieldLabel} skal have mellem %{minCount} og %{maxCount} element(er).',
        rangeCountExact: '%{fieldLabel} skal have præcis %{count} element(er).',
        rangeMin: '%{fieldLabel} skal have mindst %{minCount} element(er).',
        rangeMax: '%{fieldLabel} skal have %{maxCount} eller færre element(er).',
        invalidPath: `'%{path}' er ikke en gyldig sti`,
        pathExists: `Stien '%{path}' findes allerede`
      },
      i18n: {
        writingInLocale: 'Skriver på %{locale}'
      }
    },
    editor: {
      onLeavePage: 'Er du sikker på at du vil forlade siden?',
      onUpdatingWithUnsavedChanges: 'Du har ændringer der ikke er gemt, gem disse før status ændres.',
      onPublishingNotReady: 'Skift status til "Klar" inden publicering.',
      onPublishingWithUnsavedChanges: 'Du har ændringer der ikke er gemt, gem inden publicing.',
      onPublishing: 'Er du sikker på at du vil publicere dette dokument?',
      onUnpublishing: 'Er du sikker på at du vil afpublicere dette dokument?',
      onDeleteWithUnsavedChanges: 'Er du sikker på at du vil slette dette tidliere publiceret dokument, samt dine nuværende ugemte ændringer fra denne session?',
      onDeletePublishedEntry: 'Er du sikker på at du vil slette dette tidliere publiceret dokument?',
      onDeleteUnpublishedChangesWithUnsavedChanges: 'Alle ikke publicerede ændringer til dette dokument vil blive slettet ligesom dine nuværende ugemte ændringer fra denne session. Er du sikker på at du vil slette?',
      onDeleteUnpublishedChanges: 'Alle ikke publicerede ændringer til dette dokument vil blive slettet. Er du sikker på at du vil slette?',
      loadingEntry: 'Indlæser dokument...',
      confirmLoadBackup: 'En lokal sikkerhedskopi blev gendannet for dette dokument, vil du anvende denne?'
    },
    editorToolbar: {
      publishing: 'Publicerer...',
      publish: 'Publicer',
      published: 'Publiceret',
      unpublish: 'Afpublicer',
      duplicate: 'Kopier',
      unpublishing: 'Afpublicerer...',
      publishAndCreateNew: 'Publicer og opret ny',
      publishAndDuplicate: 'Publicer og kopier',
      deleteUnpublishedChanges: 'Slet upublicerede ændringer',
      deleteUnpublishedEntry: 'Slet upubliceret dokument',
      deletePublishedEntry: 'Slet publiceret dokument',
      deleteEntry: 'Slet dokument',
      saving: 'Gemmer...',
      save: 'Gem',
      deleting: 'Sletter...',
      updating: 'Updaterer...',
      status: 'Status: %{status}',
      backCollection: ' Skriver til %{collectionLabel} samlingen',
      unsavedChanges: 'Ugemte ændringer',
      changesSaved: 'Ændringer gemt',
      draft: 'Kladder',
      inReview: 'Til gennemsyn',
      ready: 'Klar',
      publishNow: 'Publicer nu',
      deployPreviewPendingButtonLabel: 'Lav preview',
      deployPreviewButtonLabel: 'Vis preview',
      deployButtonLabel: 'Vis live'
    },
    editorWidgets: {
      markdown: {
        bold: 'Fed',
        italic: 'Kursiv',
        code: 'Kode',
        link: 'Link',
        linkPrompt: 'Indtast URL for link',
        headings: 'Overskrifter',
        quote: 'Citat',
        bulletedList: 'Punktopstilling',
        numberedList: 'Nummeret liste',
        addComponent: 'Tilføj komponent',
        richText: 'Formatteret tekst',
        markdown: 'Markdown'
      },
      image: {
        choose: 'Vælg et billede',
        chooseDifferent: 'Vælg et andet billede',
        remove: 'Fjern billede'
      },
      file: {
        choose: 'Vælg fil',
        chooseDifferent: 'Vælg en anden fil',
        remove: 'Fjern fil'
      },
      unknownControl: {
        noControl: "Ingen kontrol finden for '%{widget}'."
      },
      unknownPreview: {
        noPreview: "Ingen preview for '%{widget}'."
      },
      headingOptions: {
        headingOne: 'Overskrift 1',
        headingTwo: 'Overskrift 2',
        headingThree: 'Overskrift 3',
        headingFour: 'Overskrift 4',
        headingFive: 'Overskrift 5',
        headingSix: 'Overskrift 6'
      },
      datetime: {
        now: 'Nu'
      }
    }
  },
  mediaLibrary: {
    mediaLibraryCard: {
      draft: 'Kladde'
    },
    mediaLibrary: {
      onDelete: 'Er du sikker på at du vil slette det valgte medie?',
      fileTooLarge: 'Filen er for stor.\nOpsætningen tillader ikke filer større end %{size} kB.'
    },
    mediaLibraryModal: {
      loading: 'Indlæser...',
      noResults: 'Ingen resultater.',
      noAssetsFound: 'Ingen elementer fundet.',
      noImagesFound: 'Ingen billeder fundet.',
      private: 'Privat ',
      images: 'Billeder',
      mediaAssets: 'Medie elementer',
      search: 'Søg...',
      uploading: 'Uploader...',
      upload: 'Upload',
      download: 'Download',
      deleting: 'Slet...',
      deleteSelected: 'Slet valgte',
      chooseSelected: 'Anvend valgte'
    }
  },
  ui: {
    default: {
      goBackToSite: 'Tilbage til hjemmesiden'
    },
    errorBoundary: {
      title: 'Fejl',
      details: 'Der opstod en fejl - venligst ',
      reportIt: 'opret et issue på GitHub.',
      detailsHeading: 'Detalger',
      privacyWarning: 'Ved at oprette et issue forudfyldes det med fejlbeskeden og data til debugging.\nKontroller venligst at informationerne er korrekte og fjern eventuelle følsomme data.',
      recoveredEntry: {
        heading: 'Gendannet dokument',
        warning: 'Kopier dette et sted hen inden du navigerer væk!',
        copyButtonLabel: 'Kopier til udklipsholder'
      }
    },
    settingsDropdown: {
      logOut: 'Log af'
    },
    toast: {
      onFailToLoadEntries: 'Fejl ved indlæsning af dokumenter: %{details}',
      onFailToLoadDeployPreview: 'Preview kunne ikke indlæses: %{details}',
      onFailToPersist: 'Dokumentet kunne ikke gemmes: %{details}',
      onFailToDelete: 'Dokumentet kunne ikke slettes: %{details}',
      onFailToUpdateStatus: 'Status kunne ikke opdateres: %{details}',
      missingRequiredField: 'Ups, du mangler et påkrævet felt. Udfyld de påkrævede felter før dokumentet gemmes.',
      entrySaved: 'Dokumentet er gemt',
      entryPublished: 'Dokumentet er publiceret ',
      entryUnpublished: 'Dokumentet er afpubliceret',
      onFailToPublishEntry: 'Kunne ikke publicere på grund af en fejl: %{details}',
      onFailToUnpublishEntry: 'Kunne ikke afpublicere på grund af en fejl: %{details}',
      entryUpdated: 'Dokumentstatus er opdateret',
      onDeleteUnpublishedChanges: 'Upublicerede ændringer blev slettet',
      onFailToAuth: '%{details}',
      onLoggedOut: 'Du er blevet logget ind, gem venligst evt. ændringer og log på igen',
      onBackendDown: 'Den bagvedliggende service er ikke tilgængelig i øjeblikket. Se %{details} for mere information'
    }
  },
  workflow: {
    workflow: {
      loading: 'Indlæser dokumenter i redaktionel arbejdsgang',
      workflowHeading: 'Redaktionel arbejdsgang',
      newPost: 'Nyt indlæg',
      description: '%{smart_count} dokumenter afventer gennemsyn, %{readyCount} er klar til live. |||| %{smart_count} dokumenter afventer gennemsyn, %{readyCount} klar til go live. ',
      dateFormat: 'D. MMMM'
    },
    workflowCard: {
      lastChange: '%{date} af %{author}',
      lastChangeNoAuthor: '%{date}',
      lastChangeNoDate: 'af %{author}',
      deleteChanges: 'Slet ændringer',
      deleteNewEntry: 'Slet nye dokumenter',
      publishChanges: 'Publicer ændringer',
      publishNewEntry: 'Publicer nye dokumenter'
    },
    workflowList: {
      onDeleteEntry: 'Er du sikker på at du vil slette dette dokument?',
      onPublishingNotReadyEntry: 'Kun dokumenter med "Klar" status kan publiceres. Træk kortet til "Klar" kolonnen for at tillade publicering.',
      onPublishEntry: 'Er du sikker på at du vil publicere dokumentet?',
      draftHeader: 'Kladder',
      inReviewHeader: 'Til gennemsyn',
      readyHeader: 'Klar',
      currentEntries: '%{smart_count} dokument |||| %{smart_count} dokumenter'
    }
  }
};
var _default = da;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/netlify-cms-locales/dist/esm/de/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/netlify-cms-locales/dist/esm/de/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const de = {
  auth: {
    login: 'Login',
    loggingIn: 'Sie werden eingeloggt...',
    loginWithNetlifyIdentity: 'Mit Netlify Identity einloggen',
    loginWithAzure: 'Mit Azure einloggen',
    loginWithBitbucket: 'Mit Bitbucket einloggen',
    loginWithGitHub: 'Mit GitHub einloggen',
    loginWithGitLab: 'Mit GitLab einloggen',
    errors: {
      email: 'Stellen Sie sicher, Ihre E-Mail-Adresse einzugeben.',
      password: 'Bitte geben Sie Ihr Passwort ein.',
      identitySettings: 'Identity Einstellungen konnten nicht abgerufen werden. Stellen Sie bei der Verwendung des Git-Gateway Backends sicher, den Identity Service und das Git Gateway zu aktivieren.'
    }
  },
  app: {
    header: {
      content: 'Inhalt',
      workflow: 'Arbeitsablauf',
      media: 'Medien',
      quickAdd: 'Schnell-Erstellung'
    },
    app: {
      errorHeader: 'Fehler beim Laden der CMS-Konfiguration.',
      configErrors: 'Konfigurationsfehler',
      checkConfigYml: 'Überprüfen Sie die config.yml Konfigurationsdatei.',
      loadingConfig: 'Konfiguration laden...',
      waitingBackend: 'Auf Server warten...'
    },
    notFoundPage: {
      header: 'Nicht gefunden'
    }
  },
  collection: {
    sidebar: {
      collections: 'Inhaltstypen',
      allCollections: 'Allen Inhaltstypen',
      searchAll: 'Alles durchsuchen',
      searchIn: 'Suchen in'
    },
    collectionTop: {
      sortBy: 'Sortieren nach',
      viewAs: 'Anzeigen als',
      newButton: 'Neue(r/s) %{collectionLabel}',
      ascending: 'Aufsteigend',
      descending: 'Absteigend',
      searchResults: 'Suchergebnisse für "%{searchTerm}"',
      searchResultsInCollection: 'Suchergebnisse für "%{searchTerm}" in %{collection}',
      filterBy: 'Filtern nach',
      groupBy: 'Gruppieren nach'
    },
    entries: {
      loadingEntries: 'Beiträge laden',
      cachingEntries: 'Beiträge zwischenspeichern',
      longerLoading: 'Diese Aktion kann einige Minuten in Anspruch nehmen',
      noEntries: 'Keine Beiträge'
    },
    groups: {
      other: 'Andere',
      negateLabel: 'Nicht %{label}'
    },
    defaultFields: {
      author: {
        label: 'Autor'
      },
      updatedOn: {
        label: 'Änderungsdatum'
      }
    }
  },
  editor: {
    editorControl: {
      field: {
        optional: 'optional'
      }
    },
    editorControlPane: {
      widget: {
        required: '%{fieldLabel} ist erforderlich.',
        regexPattern: '%{fieldLabel} entspricht nicht dem Muster: %{pattern}.',
        processing: '%{fieldLabel} wird verarbeitet.',
        range: '%{fieldLabel} muss zwischen %{minValue} und %{maxValue} liegen.',
        min: '%{fieldLabel} muss größer als %{minValue} sein.',
        max: '%{fieldLabel} darf nicht größer als %{maxValue} sein.',
        rangeCount: '%{fieldLabel} muss %{minCount} bis %{maxCount} Element(e) enthalten.',
        rangeCountExact: '%{fieldLabel} muss exakt %{count} Element(e) enthalten.',
        rangeMin: '%{fieldLabel} muss mindestens %{minCount} Element(e) enthalten.',
        rangeMax: '%{fieldLabel} darf maximal %{maxCount} Element(e) enthalten.',
        invalidPath: `'%{path}' ist kein gültiger Pfad`,
        pathExists: `Pfad '%{path}' existiert bereits`
      },
      i18n: {
        writingInLocale: 'Aktuelle Sprache: %{locale}',
        copyFromLocale: 'Aus anderer Sprache übernehmen',
        copyFromLocaleConfirm: 'Wollen Sie wirklich die Daten aus der Sprache %{locale} übernehmen?\nAlle bishergen Inhalte werden überschrieben.'
      }
    },
    editor: {
      onLeavePage: 'Möchten Sie diese Seite wirklich verlassen?',
      onUpdatingWithUnsavedChanges: 'Es sind noch ungespeicherte Änderungen vorhanden. Bitte speichern Sie diese, bevor Sie den Status aktualisieren.',
      onPublishingNotReady: 'Bitte setzten die den Status vor dem Veröffentlichen auf "Abgeschlossen".',
      onPublishingWithUnsavedChanges: 'Es sind noch ungespeicherte Änderungen vorhanden. Bitte speicheren Sie vor dem Veröffentlichen.',
      onPublishing: 'Soll dieser Beitrag wirklich veröffentlicht werden?',
      onUnpublishing: 'Soll die Veröffentlichung dieses Beitrags wirklich zurückgezogen werden?',
      onDeleteWithUnsavedChanges: 'Möchten Sie diesen veröffentlichten Beitrag, sowie Ihre nicht gespeicherten Änderungen löschen?',
      onDeletePublishedEntry: 'Soll dieser veröffentlichte Beitrag wirklich gelöscht werden?',
      onDeleteUnpublishedChangesWithUnsavedChanges: 'Möchten Sie diesen unveröffentlichten Beitrag, sowie Ihre nicht gespeicherten Änderungen löschen?',
      onDeleteUnpublishedChanges: 'Alle unveröffentlichten Änderungen werden gelöscht. Möchten Sie wirklich löschen?',
      loadingEntry: 'Beitrag laden...',
      confirmLoadBackup: 'Für diesen Beitrag ist ein lokales Backup vorhanden. Möchten Sie dieses benutzen?'
    },
    editorInterface: {
      toggleI18n: 'Übersetzungen',
      togglePreview: 'Vorschau',
      toggleScrollSync: 'Synchron scrollen'
    },
    editorToolbar: {
      publishing: 'Veröffentlichen...',
      publish: 'Veröffentlichen',
      published: 'Veröffentlicht',
      unpublish: 'Veröffentlichung zurückziehen',
      duplicate: 'Duplizieren',
      unpublishing: 'Veröffentlichung wird zurückgezogen...',
      publishAndCreateNew: 'Veröffentlichen und neuen Beitrag erstellen',
      publishAndDuplicate: 'Veröffentlichen und Beitrag duplizieren',
      deleteUnpublishedChanges: 'Unveröffentlichte Änderungen verwerfen',
      deleteUnpublishedEntry: 'Lösche unveröffentlichten Beitrag',
      deletePublishedEntry: 'Lösche veröffentlichten Beitrag',
      deleteEntry: 'Lösche Beitrag',
      saving: 'Speichern...',
      save: 'Speichern',
      statusInfoTooltipDraft: 'Beitrag ist im Entwurfsstatus. Um ihn fertigzustellen und zur Überprüfung freizugeben, setzen Sie den Status auf ‘Zur Überprüfung‘.',
      statusInfoTooltipInReview: 'Beitrag wird überprüft, keine weitere Aktion erforderlich. Sie können weitere Änderungen vornehmen, während die Überprüfung läuft.',
      deleting: 'Löschen...',
      updating: 'Aktualisieren...',
      status: 'Status: %{status}',
      backCollection: 'Zurück zu allen %{collectionLabel}',
      unsavedChanges: 'Ungespeicherte Änderungen',
      changesSaved: 'Änderungen gespeichert',
      draft: 'Entwurf',
      inReview: 'Zur Überprüfung',
      ready: 'Abgeschlossen',
      publishNow: 'Jetzt veröffentlichen',
      deployPreviewPendingButtonLabel: 'Überprüfen ob eine Vorschau vorhanden ist',
      deployPreviewButtonLabel: 'Vorschau anzeigen',
      deployButtonLabel: 'Live ansehen'
    },
    editorWidgets: {
      markdown: {
        bold: 'Fett',
        italic: 'Kursiv',
        code: 'Code',
        link: 'Link',
        linkPrompt: 'Link-URL eingeben',
        headings: 'Überschriften',
        quote: 'Zitat',
        bulletedList: 'Aufzählungsliste',
        numberedList: 'Nummerierte Liste',
        addComponent: 'Komponente hinzufügen',
        richText: 'Rich Text',
        markdown: 'Markdown'
      },
      image: {
        choose: 'Wähle ein Bild',
        chooseUrl: 'Von URL hinzufügen',
        replaceUrl: 'Von URL ersetzen',
        promptUrl: 'Bild-URL eingeben',
        chooseDifferent: 'Wähle ein anderes Bild',
        remove: 'Entferne Bild'
      },
      file: {
        choose: 'Wählen Sie eine Datei',
        chooseUrl: 'Von URL hinzufügen',
        replaceUrl: 'Von URL ersetzen',
        promptUrl: 'Datei-URL eingeben',
        chooseDifferent: 'Wählen Sie eine andere Datei',
        remove: 'Datei löschen'
      },
      unknownControl: {
        noControl: "Kein Bedienelement für Widget '%{widget}'."
      },
      unknownPreview: {
        noPreview: "Keine Vorschau für Widget '%{widget}'."
      },
      headingOptions: {
        headingOne: 'Überschrift 1',
        headingTwo: 'Überschrift 2',
        headingThree: 'Überschrift 3',
        headingFour: 'Überschrift 4',
        headingFive: 'Überschrift 5',
        headingSix: 'Überschrift 6'
      },
      datetime: {
        now: 'Jetzt'
      },
      list: {
        add: '%{item} hinzufügen',
        addType: '%{item} hinzufügen'
      }
    }
  },
  mediaLibrary: {
    mediaLibraryCard: {
      draft: 'Entwurf',
      copy: 'Kopieren',
      copyUrl: 'URL kopieren',
      copyPath: 'Pfad kopieren',
      copyName: 'Name kopieren',
      copied: 'Kopiert'
    },
    mediaLibrary: {
      onDelete: 'Soll das ausgewählte Medium wirklich gelöscht werden?',
      fileTooLarge: 'Datei zu groß.\nErlaubt sind nur Dateien bis %{size} kB.'
    },
    mediaLibraryModal: {
      loading: 'Laden...',
      noResults: 'Keine Egebnisse.',
      noAssetsFound: 'Keine Medien gefunden.',
      noImagesFound: 'Keine Bilder gefunden.',
      private: 'Privat ',
      images: 'Bilder',
      mediaAssets: 'Medien',
      search: 'Suchen...',
      uploading: 'Hochladen...',
      upload: 'Hochladen',
      download: 'Download',
      deleting: 'Löschen...',
      deleteSelected: 'Ausgewähltes Element löschen',
      chooseSelected: 'Ausgewähltes Element verwenden'
    }
  },
  ui: {
    default: {
      goBackToSite: 'Zurück zur Seite'
    },
    errorBoundary: {
      title: 'Fehler',
      details: 'Ein Fehler ist aufgetreten - bitte ',
      reportIt: 'berichte ihn.',
      detailsHeading: 'Details',
      privacyWarning: 'Beim Eröffnen eines Fehlerberichts werden automatisch die Fehlermeldung und Debugdaten eingefügt.\nBitte überprüfen Sie, ob die Informationen korrrekt sind und entfernen Sie ggfs. sensible Daten.',
      recoveredEntry: {
        heading: 'Wiederhergestellter Beitrag',
        warning: 'Bitte sichern Sie sich diese Informationen, bevor Sie die Seite verlassen!',
        copyButtonLabel: 'In Zwischenablage speichern'
      }
    },
    settingsDropdown: {
      logOut: 'Abmelden'
    },
    toast: {
      onFailToLoadEntries: 'Beitrag konnte nicht geladen werden: %{details}',
      onFailToLoadDeployPreview: 'Vorschau konnte nicht geladen werden: %{details}',
      onFailToPersist: 'Beitrag speichern fehlgeschlagen: %{details}',
      onFailToDelete: 'Beitrag löschen fehlgeschlagen: %{details}',
      onFailToUpdateStatus: 'Status aktualisieren fehlgeschlagen: %{details}',
      missingRequiredField: 'Oops, einige zwingend erforderliche Felder sind nicht ausgefüllt.',
      entrySaved: 'Beitrag gespeichert',
      entryPublished: 'Beitrag veröffentlicht',
      entryUnpublished: 'Beitrag nicht mehr öffentlich',
      onFailToPublishEntry: 'Veröffentlichen fehlgeschlagen: %{details}',
      onFailToUnpublishEntry: 'Veröffentlichung des Beitrags konnte nicht rückgängig gemacht werden: %{details}',
      entryUpdated: 'Beitragsstatus aktualisiert',
      onDeleteUnpublishedChanges: 'Unveröffentlichte Änderungen verworfen',
      onFailToAuth: '%{details}',
      onLoggedOut: 'Sie wurden ausgeloggt. Bitte sichern Sie Ihre Daten und melden Sie sich erneut an.',
      onBackendDown: 'Der Server ist aktuell nicht erreichbar. Für weitere Informationen, siehe: %{details}'
    }
  },
  workflow: {
    workflow: {
      loading: 'Arbeitsablauf Beiträge laden',
      workflowHeading: 'Redaktioneller Arbeitsablauf',
      newPost: 'Neuer Beitrag',
      description: '%{smart_count} Beitrag zur Überprüfung bereit, %{readyCount} bereit zur Veröffentlichung. |||| %{smart_count} Beiträge zur Überprüfung bereit, %{readyCount} bereit zur Veröffentlichung. ',
      dateFormat: 'MMMM D'
    },
    workflowCard: {
      lastChange: '%{date} von %{author}',
      lastChangeNoAuthor: '%{date}',
      lastChangeNoDate: 'von %{author}',
      deleteChanges: 'Änderungen verwerfen',
      deleteNewEntry: 'Lösche neuen Beitrag',
      publishChanges: 'Veröffentliche Änderungen',
      publishNewEntry: 'Veröffentliche neuen Beitrag'
    },
    workflowList: {
      onDeleteEntry: 'Soll dieser Beitrag wirklich gelöscht werden?',
      onPublishingNotReadyEntry: 'Nur Beiträge im Status "Abgeschlossen" können veröffentlicht werden. Bitte ziehen Sie den Beitrag in die "Abgeschlossen" Spalte um die Veröffentlichung zu aktivieren.',
      onPublishEntry: 'Soll dieser Beitrag wirklich veröffentlicht werden soll?',
      draftHeader: 'Entwurf',
      inReviewHeader: 'In Prüfung',
      readyHeader: 'Abgeschlossen',
      currentEntries: '%{smart_count} Beitrag |||| %{smart_count} Beiträge'
    }
  }
};
var _default = de;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/netlify-cms-locales/dist/esm/en/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/netlify-cms-locales/dist/esm/en/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const en = {
  auth: {
    login: 'Login',
    loggingIn: 'Logging in...',
    loginWithNetlifyIdentity: 'Login with Netlify Identity',
    loginWithAzure: 'Login with Azure',
    loginWithBitbucket: 'Login with Bitbucket',
    loginWithGitHub: 'Login with GitHub',
    loginWithGitLab: 'Login with GitLab',
    errors: {
      email: 'Make sure to enter your email.',
      password: 'Please enter your password.',
      identitySettings: 'Unable to access identity settings. When using git-gateway backend make sure to enable Identity service and Git Gateway.'
    }
  },
  app: {
    header: {
      content: 'Contents',
      workflow: 'Workflow',
      media: 'Media',
      quickAdd: 'Quick add'
    },
    app: {
      errorHeader: 'Error loading the CMS configuration',
      configErrors: 'Config Errors',
      checkConfigYml: 'Check your config.yml file.',
      loadingConfig: 'Loading configuration...',
      waitingBackend: 'Waiting for backend...'
    },
    notFoundPage: {
      header: 'Not Found'
    }
  },
  collection: {
    sidebar: {
      collections: 'Collections',
      allCollections: 'All Collections',
      searchAll: 'Search all',
      searchIn: 'Search in'
    },
    collectionTop: {
      sortBy: 'Sort by',
      viewAs: 'View as',
      newButton: 'New %{collectionLabel}',
      ascending: 'Ascending',
      descending: 'Descending',
      searchResults: 'Search Results for "%{searchTerm}"',
      searchResultsInCollection: 'Search Results for "%{searchTerm}" in %{collection}',
      filterBy: 'Filter by',
      groupBy: 'Group by'
    },
    entries: {
      loadingEntries: 'Loading Entries...',
      cachingEntries: 'Caching Entries...',
      longerLoading: 'This might take several minutes',
      noEntries: 'No Entries'
    },
    groups: {
      other: 'Other',
      negateLabel: 'Not %{label}'
    },
    defaultFields: {
      author: {
        label: 'Author'
      },
      updatedOn: {
        label: 'Updated On'
      }
    }
  },
  editor: {
    editorControl: {
      field: {
        optional: 'optional'
      }
    },
    editorControlPane: {
      widget: {
        required: '%{fieldLabel} is required.',
        regexPattern: "%{fieldLabel} didn't match the pattern: %{pattern}.",
        processing: '%{fieldLabel} is processing.',
        range: '%{fieldLabel} must be between %{minValue} and %{maxValue}.',
        min: '%{fieldLabel} must be at least %{minValue}.',
        max: '%{fieldLabel} must be %{maxValue} or less.',
        rangeCount: '%{fieldLabel} must have between %{minCount} and %{maxCount} item(s).',
        rangeCountExact: '%{fieldLabel} must have exactly %{count} item(s).',
        rangeMin: '%{fieldLabel} must be at least %{minCount} item(s).',
        rangeMax: '%{fieldLabel} must be %{maxCount} or less item(s).',
        invalidPath: `'%{path}' is not a valid path`,
        pathExists: `Path '%{path}' already exists`
      },
      i18n: {
        writingInLocale: 'Writing in %{locale}',
        copyFromLocale: 'Fill in from another locale',
        copyFromLocaleConfirm: 'Do you want to fill in data from %{locale} locale?\nAll existing content will be overwritten.'
      }
    },
    editor: {
      onLeavePage: 'Are you sure you want to leave this page?',
      onUpdatingWithUnsavedChanges: 'You have unsaved changes, please save before updating status.',
      onPublishingNotReady: 'Please update status to "Ready" before publishing.',
      onPublishingWithUnsavedChanges: 'You have unsaved changes, please save before publishing.',
      onPublishing: 'Are you sure you want to publish this entry?',
      onUnpublishing: 'Are you sure you want to unpublish this entry?',
      onDeleteWithUnsavedChanges: 'Are you sure you want to delete this published entry, as well as your unsaved changes from the current session?',
      onDeletePublishedEntry: 'Are you sure you want to delete this published entry?',
      onDeleteUnpublishedChangesWithUnsavedChanges: 'This will delete all unpublished changes to this entry, as well as your unsaved changes from the current session. Do you still want to delete?',
      onDeleteUnpublishedChanges: 'All unpublished changes to this entry will be deleted. Do you still want to delete?',
      loadingEntry: 'Loading entry...',
      confirmLoadBackup: 'A local backup was recovered for this entry, would you like to use it?'
    },
    editorInterface: {
      toggleI18n: 'Toggle i18n',
      togglePreview: 'Toggle preview',
      toggleScrollSync: 'Sync scrolling'
    },
    editorToolbar: {
      publishing: 'Publishing...',
      publish: 'Publish',
      published: 'Published',
      unpublish: 'Unpublish',
      duplicate: 'Duplicate',
      unpublishing: 'Unpublishing...',
      publishAndCreateNew: 'Publish and create new',
      publishAndDuplicate: 'Publish and duplicate',
      deleteUnpublishedChanges: 'Delete unpublished changes',
      deleteUnpublishedEntry: 'Delete unpublished entry',
      deletePublishedEntry: 'Delete published entry',
      deleteEntry: 'Delete entry',
      saving: 'Saving...',
      save: 'Save',
      statusInfoTooltipDraft: 'Entry status is set to draft. To finalize and submit it for review, set the status to ‘In review’',
      statusInfoTooltipInReview: 'Entry is being reviewed, no further actions are required. However, you can still make additional changes while it is being reviewed.',
      deleting: 'Deleting...',
      updating: 'Updating...',
      status: 'Status: %{status}',
      backCollection: ' Writing in %{collectionLabel} collection',
      unsavedChanges: 'Unsaved Changes',
      changesSaved: 'Changes saved',
      draft: 'Draft',
      inReview: 'In review',
      ready: 'Ready',
      publishNow: 'Publish now',
      deployPreviewPendingButtonLabel: 'Check for Preview',
      deployPreviewButtonLabel: 'View Preview',
      deployButtonLabel: 'View Live'
    },
    editorWidgets: {
      markdown: {
        bold: 'Bold',
        italic: 'Italic',
        code: 'Code',
        link: 'Link',
        linkPrompt: 'Enter the URL of the link',
        headings: 'Headings',
        quote: 'Quote',
        bulletedList: 'Bulleted List',
        numberedList: 'Numbered List',
        addComponent: 'Add Component',
        richText: 'Rich Text',
        markdown: 'Markdown'
      },
      image: {
        choose: 'Choose an image',
        chooseUrl: 'Insert from URL',
        replaceUrl: 'Replace with URL',
        promptUrl: 'Enter the URL of the image',
        chooseDifferent: 'Choose different image',
        remove: 'Remove image'
      },
      file: {
        choose: 'Choose a file',
        chooseUrl: 'Insert from URL',
        replaceUrl: 'Replace with URL',
        promptUrl: 'Enter the URL of the file',
        chooseDifferent: 'Choose different file',
        remove: 'Remove file'
      },
      unknownControl: {
        noControl: "No control for widget '%{widget}'."
      },
      unknownPreview: {
        noPreview: "No preview for widget '%{widget}'."
      },
      headingOptions: {
        headingOne: 'Heading 1',
        headingTwo: 'Heading 2',
        headingThree: 'Heading 3',
        headingFour: 'Heading 4',
        headingFive: 'Heading 5',
        headingSix: 'Heading 6'
      },
      datetime: {
        now: 'Now'
      },
      list: {
        add: 'Add %{item}',
        addType: 'Add %{item}'
      }
    }
  },
  mediaLibrary: {
    mediaLibraryCard: {
      draft: 'Draft',
      copy: 'Copy',
      copyUrl: 'Copy URL',
      copyPath: 'Copy Path',
      copyName: 'Copy Name',
      copied: 'Copied'
    },
    mediaLibrary: {
      onDelete: 'Are you sure you want to delete selected media?',
      fileTooLarge: 'File too large.\nConfigured to not allow files greater than %{size} kB.'
    },
    mediaLibraryModal: {
      loading: 'Loading...',
      noResults: 'No results.',
      noAssetsFound: 'No assets found.',
      noImagesFound: 'No images found.',
      private: 'Private ',
      images: 'Images',
      mediaAssets: 'Media assets',
      search: 'Search...',
      uploading: 'Uploading...',
      upload: 'Upload',
      download: 'Download',
      deleting: 'Deleting...',
      deleteSelected: 'Delete selected',
      chooseSelected: 'Choose selected'
    }
  },
  ui: {
    default: {
      goBackToSite: 'Go back to site'
    },
    errorBoundary: {
      title: 'Error',
      details: "There's been an error - please ",
      reportIt: 'open an issue on GitHub.',
      detailsHeading: 'Details',
      privacyWarning: 'Opening an issue pre-populates it with the error message and debugging data.\nPlease verify the information is correct and remove sensitive data if exists.',
      recoveredEntry: {
        heading: 'Recovered document',
        warning: 'Please copy/paste this somewhere before navigating away!',
        copyButtonLabel: 'Copy to clipboard'
      }
    },
    settingsDropdown: {
      logOut: 'Log Out'
    },
    toast: {
      onFailToLoadEntries: 'Failed to load entry: %{details}',
      onFailToLoadDeployPreview: 'Failed to load preview: %{details}',
      onFailToPersist: 'Failed to persist entry: %{details}',
      onFailToDelete: 'Failed to delete entry: %{details}',
      onFailToUpdateStatus: 'Failed to update status: %{details}',
      missingRequiredField: "Oops, you've missed a required field. Please complete before saving.",
      entrySaved: 'Entry saved',
      entryPublished: 'Entry published',
      entryUnpublished: 'Entry unpublished',
      onFailToPublishEntry: 'Failed to publish: %{details}',
      onFailToUnpublishEntry: 'Failed to unpublish entry: %{details}',
      entryUpdated: 'Entry status updated',
      onDeleteUnpublishedChanges: 'Unpublished changes deleted',
      onFailToAuth: '%{details}',
      onLoggedOut: 'You have been logged out, please back up any data and login again',
      onBackendDown: 'The backend service is experiencing an outage. See %{details} for more information'
    }
  },
  workflow: {
    workflow: {
      loading: 'Loading Editorial Workflow Entries',
      workflowHeading: 'Editorial Workflow',
      newPost: 'New Post',
      description: '%{smart_count} entry waiting for review, %{readyCount} ready to go live. |||| %{smart_count} entries waiting for review, %{readyCount} ready to go live. ',
      dateFormat: 'MMMM D'
    },
    workflowCard: {
      lastChange: '%{date} by %{author}',
      lastChangeNoAuthor: '%{date}',
      lastChangeNoDate: 'by %{author}',
      deleteChanges: 'Delete changes',
      deleteNewEntry: 'Delete new entry',
      publishChanges: 'Publish changes',
      publishNewEntry: 'Publish new entry'
    },
    workflowList: {
      onDeleteEntry: 'Are you sure you want to delete this entry?',
      onPublishingNotReadyEntry: 'Only items with a "Ready" status can be published. Please drag the card to the "Ready" column to enable publishing.',
      onPublishEntry: 'Are you sure you want to publish this entry?',
      draftHeader: 'Drafts',
      inReviewHeader: 'In Review',
      readyHeader: 'Ready',
      currentEntries: '%{smart_count} entry |||| %{smart_count} entries'
    }
  }
};
var _default = en;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/netlify-cms-locales/dist/esm/es/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/netlify-cms-locales/dist/esm/es/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const es = {
  auth: {
    login: 'Iniciar sesión',
    loggingIn: 'Iniciando sesión...',
    loginWithNetlifyIdentity: 'Iniciar sesión con Netlify Identity',
    loginWithBitbucket: 'Iniciar sesión con Bitbucket',
    loginWithGitHub: 'Iniciar sesión con GitHub',
    loginWithGitLab: 'Iniciar sesión con GitLab',
    errors: {
      email: 'Asegúrate de introducir tu correo electrónico.',
      password: 'Por favor introduce tu contraseña.',
      identitySettings: 'No se pudo acceder a la configuración de Identity. Cuando uses el backend git-gateway asegurate de habilitar el servicio Identity y Git Gateway.'
    }
  },
  app: {
    header: {
      content: 'Contenido',
      workflow: 'Flujo Editorial',
      media: 'Medios',
      quickAdd: 'Añadir rápido'
    },
    app: {
      errorHeader: 'Error al cargar la configuración del CMS',
      configErrors: 'Errores de configuración',
      checkConfigYml: 'Compruebe el archivo config.yml.',
      loadingConfig: 'Cargando configuración....',
      waitingBackend: 'Esperando al servidor...'
    },
    notFoundPage: {
      header: 'No encontrado'
    }
  },
  collection: {
    sidebar: {
      collections: 'Colecciones',
      searchAll: 'Buscar todas'
    },
    collectionTop: {
      sortBy: 'Ordenar por',
      viewAs: 'Ver como',
      newButton: 'Nuevo %{collectionLabel}',
      ascending: 'Ascendente',
      descending: 'Descendente'
    },
    entries: {
      loadingEntries: 'Cargando entradas',
      cachingEntries: 'Almacenando entradas en caché',
      longerLoading: 'Esto puede tardar varios minutos',
      noEntries: 'Ninguna entrada'
    },
    defaultFields: {
      author: {
        label: 'Autor'
      },
      updatedOn: {
        label: 'Actualizado en'
      }
    }
  },
  editor: {
    editorControl: {
      field: {
        optional: 'opcional'
      }
    },
    editorControlPane: {
      widget: {
        required: '%{fieldLabel} es obligatorio.',
        regexPattern: '%{fieldLabel} no coincide con el patrón: %{pattern}.',
        processing: '%{fieldLabel} está procesando.',
        range: '%{fieldLabel} debe estar entre %{minValue} y %{maxValue}.',
        min: '%{fieldLabel} debe ser por lo menos %{minValue}.',
        max: '%{fieldLabel} debe ser %{maxValue} o menos.',
        rangeCount: '%{fieldLabel} debe tener entre %{minCount} y %{maxCount} elemento(s).',
        rangeCountExact: '%{fieldLabel} debe tener exactamente %{count} elemento(s).',
        rangeMin: '%{fieldLabel} debe ser por lo menos %{minCount} elemento(s).',
        rangeMax: '%{fieldLabel} debe ser %{maxCount} o menos elemento(s).'
      }
    },
    editor: {
      onLeavePage: '¿Estás seguro de que quieres dejar esta página?',
      onUpdatingWithUnsavedChanges: 'Tiene cambios no guardados, por favor, guárdelos antes de actualizar el estado.',
      onPublishingNotReady: 'Por favor, actualice el estado a "Ready" antes de publicar.',
      onPublishingWithUnsavedChanges: 'Tiene cambios no guardados, por favor guárdelos antes de publicarlos.',
      onPublishing: '¿Estás seguro de que quieres publicar esta entrada?',
      onUnpublishing: '¿Estás seguro de que quieres retirar esta entrada?',
      onDeleteWithUnsavedChanges: '¿Está seguro de que desea eliminar esta entrada publicada, así como los cambios no guardados de la sesión actual?',
      onDeletePublishedEntry: '¿Estás seguro de que quieres borrar esta entrada publicada?',
      onDeleteUnpublishedChangesWithUnsavedChanges: 'Esto eliminará todos los cambios no publicados de esta entrada, así como los cambios no guardados de la sesión actual. ¿Todavía quieres borrar?',
      onDeleteUnpublishedChanges: 'Todos los cambios no publicados en esta entrada serán eliminados. ¿Todavía quieres borrar?',
      loadingEntry: 'Cargando entrada...',
      confirmLoadBackup: 'Se recuperó una copia de seguridad local para esta entrada, ¿le gustaría utilizarla?'
    },
    editorToolbar: {
      publishing: 'Publicando...',
      publish: 'Publicar',
      published: 'Publicado',
      unpublish: 'Retirar',
      duplicate: 'Duplicar',
      unpublishing: 'Retirando...',
      publishAndCreateNew: 'Publicar y crear nuevo',
      publishAndDuplicate: 'Publicar y duplicar',
      deleteUnpublishedChanges: 'Eliminar cambios no publicados',
      deleteUnpublishedEntry: 'Eliminar entrada no publicada',
      deletePublishedEntry: 'Eliminar entrada publicada',
      deleteEntry: 'Eliminar entrada',
      saving: 'Guardando...',
      save: 'Guardar',
      deleting: 'Eliminando...',
      updating: 'Actualizando...',
      status: 'Estado: %{status}',
      backCollection: ' Escribiendo en la colección %{collectionLabel}',
      unsavedChanges: 'Cambios no guardados',
      changesSaved: 'Cambios guardados',
      draft: 'Borrador',
      inReview: 'En revisión',
      ready: 'Listo',
      publishNow: 'Publicar ahora',
      deployPreviewPendingButtonLabel: 'Comprobar Vista Previa',
      deployPreviewButtonLabel: 'Ver Vista Previa',
      deployButtonLabel: 'Ver publicación'
    },
    editorWidgets: {
      markdown: {
        richText: 'Texto enriquecido',
        markdown: 'Markdown'
      },
      image: {
        choose: 'Elige una imagen',
        chooseDifferent: 'Elige una imagen diferente',
        remove: 'Quita la imagen'
      },
      file: {
        choose: 'Escoge un archivo',
        chooseDifferent: 'Elige un archivo diferente',
        remove: 'Remover archivo'
      },
      unknownControl: {
        noControl: "No existe un control para el widget '%{widget}'."
      },
      unknownPreview: {
        noPreview: "No existe una vista previa para el widget '%{widget}'."
      },
      headingOptions: {
        headingOne: 'Encabezado 1',
        headingTwo: 'Encabezado 2',
        headingThree: 'Encabezado 3',
        headingFour: 'Encabezado 4',
        headingFive: 'Encabezado 5',
        headingSix: 'Encabezado 6'
      },
      datetime: {
        now: 'Ahora'
      }
    }
  },
  mediaLibrary: {
    mediaLibraryCard: {
      draft: 'Borrador'
    },
    mediaLibrary: {
      onDelete: '¿Está seguro de que desea eliminar el archivo seleccionado?',
      fileTooLarge: 'Archivo muy pesado.\nConfigurado para no permitir archivos más pesados que %{size} kB.'
    },
    mediaLibraryModal: {
      loading: 'Cargando...',
      noResults: 'Sin resultados.',
      noAssetsFound: 'Archivos no encontrados.',
      noImagesFound: 'Imágenes no encontradas.',
      private: 'Privado ',
      images: 'Imágenes',
      mediaAssets: 'Archivos multimedia',
      search: 'Buscar...',
      uploading: 'Subiendo...',
      upload: 'Subir nuevo',
      download: 'Descargar',
      deleting: 'Eliminando...',
      deleteSelected: 'Eliminar selección',
      chooseSelected: 'Confirmar selección'
    }
  },
  ui: {
    default: {
      goBackToSite: 'Regresar al sitio'
    },
    errorBoundary: {
      title: 'Error',
      details: 'Se ha producido un error - por favor ',
      reportIt: 'infórmenos de ello.',
      detailsHeading: 'Detalles',
      privacyWarning: 'Abrir un reporte lo rellena previamente con el mensaje de error y los datos de depuración.\nPor favor verifica que la información es correcta y elimina cualquier dato sensible.',
      recoveredEntry: {
        heading: 'Documento recuperado',
        warning: '¡Por favor, copie/pegue esto en algún lugar antes de ir a otra página!',
        copyButtonLabel: 'Copiar al portapapeles'
      }
    },
    settingsDropdown: {
      logOut: 'Cerrar sesión'
    },
    toast: {
      onFailToLoadEntries: 'No se ha podido cargar la entrada: %{details}',
      onFailToLoadDeployPreview: 'No se ha podido cargar la vista previa: %{details}',
      onFailToPersist: 'No se ha podido guardar la entrada: %{details}',
      onFailToDelete: 'No se ha podido borrar la entrada: %{details}',
      onFailToUpdateStatus: 'No se ha podido actualizar el estado: %{details}',
      missingRequiredField: 'Oops, no ha rellenado un campo obligatorio. Por favor, rellénelo antes de guardar.',
      entrySaved: 'Entrada guardada',
      entryPublished: 'Entrada publicada',
      entryUnpublished: 'Entrada retirada',
      onFailToPublishEntry: 'No se ha podido publicar: %{details}',
      onFailToUnpublishEntry: 'No se ha podido retirar la entrada: %{details}',
      entryUpdated: 'Estado de entrada actualizado',
      onDeleteUnpublishedChanges: 'Cambios no publicados eliminados',
      onFailToAuth: '%{details}'
    }
  },
  workflow: {
    workflow: {
      loading: 'Cargando Entradas del Flujo Editorial',
      workflowHeading: 'Flujo Editorial',
      newPost: 'Nuevo artículo',
      description: '%{smart_count} entrada esperando revisión, %{readyCount} lista para publicar |||| %{smart_count} entradas esperando revisión, %{readyCount} listas para publicar. ',
      dateFormat: 'MMMM D'
    },
    workflowCard: {
      lastChange: '%{date} por %{author}',
      lastChangeNoAuthor: '%{date}',
      lastChangeNoDate: 'por %{author}',
      deleteChanges: 'Eliminar cambios',
      deleteNewEntry: 'Eliminar nueva entrada',
      publishChanges: 'Publicar cambios',
      publishNewEntry: 'Publicar nueva entrada'
    },
    workflowList: {
      onDeleteEntry: '¿Está seguro de que quiere borrar esta entrada?',
      onPublishingNotReadyEntry: 'Sólo se pueden publicar los elementos con el estado "Listo". Por favor, arrastre la tarjeta hasta la columna "Listo" para permitir la publicación.',
      onPublishEntry: '¿Estás seguro de que quieres publicar esta entrada?',
      draftHeader: 'Borradores',
      inReviewHeader: 'En revisión',
      readyHeader: 'Listo',
      currentEntries: '%{smart_count} entrada |||| %{smart_count} entradas'
    }
  }
};
var _default = es;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/netlify-cms-locales/dist/esm/fr/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/netlify-cms-locales/dist/esm/fr/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const fr = {
  auth: {
    login: 'Se connecter',
    loggingIn: 'Connexion en cours...',
    loginWithNetlifyIdentity: 'Se connecter avec Netlify Identity',
    loginWithAzure: 'Se connecter avec Azure',
    loginWithBitbucket: 'Se connecter avec Bitbucket',
    loginWithGitHub: 'Se connecter avec GitHub',
    loginWithGitLab: 'Se connecter avec GitLab',
    errors: {
      email: "Assurez-vous d'avoir entré votre email.",
      password: 'Merci de saisir votre mot de passe.',
      identitySettings: "Impsosible d'accéder aux paramètres d'identité. Si vous utilisez le backend git-gateway, merci de vous assurer que vous avez bien activé le service Identity et la passerelle Git."
    }
  },
  app: {
    header: {
      content: 'Contenus',
      workflow: 'Flux',
      media: 'Media',
      quickAdd: 'Ajout rapide'
    },
    app: {
      errorHeader: 'Erreur au chargement de la configuration du CMS',
      configErrors: 'Erreurs de configuration',
      checkConfigYml: 'Vérifiez votre fichier config.yml.',
      loadingConfig: 'Chargement de la configuration...',
      waitingBackend: 'En attente du serveur...'
    },
    notFoundPage: {
      header: 'Introuvable'
    }
  },
  collection: {
    sidebar: {
      collections: 'Collections',
      allCollections: 'Toutes les collections',
      searchAll: 'Tout rechercher',
      searchIn: 'Rechercher dans'
    },
    collectionTop: {
      sortBy: 'Trier par',
      viewAs: 'Voir comme',
      newButton: 'Créer une entrée de type %{collectionLabel}',
      ascending: 'Croissant',
      descending: 'Décroissant',
      searchResults: 'Résultats de la recherche pour "%{searchTerm}"',
      searchResultsInCollection: 'Résultats de la recherche pour "%{searchTerm}" dans %{collection}',
      filterBy: 'Filtrer par',
      groupBy: 'Grouper par'
    },
    entries: {
      loadingEntries: 'Chargement des entrées',
      cachingEntries: 'Mise en cache des entrées',
      longerLoading: 'Cela peut prendre quelques minutes',
      noEntries: 'Aucune entrée'
    },
    groups: {
      other: 'Autre',
      negateLabel: 'Non %{label}'
    },
    defaultFields: {
      author: {
        label: 'Auteur'
      },
      updatedOn: {
        label: 'Mis à jour le'
      }
    }
  },
  editor: {
    editorControl: {
      field: {
        optional: 'optionnel'
      }
    },
    editorControlPane: {
      widget: {
        required: 'Le champ %{fieldLabel} est requis.',
        regexPattern: 'Le champ %{fieldLabel} ne correspond pas au schéma: %{pattern}.',
        processing: 'Le champ %{fieldLabel} est en cours de traitement.',
        range: 'Le champ %{fieldLabel} doit être compris entre %{minValue} et %{maxValue}.',
        min: 'Le champ %{fieldLabel} doit avoir une valeur de %{minValue} ou plus.',
        max: 'Le champ %{fieldLabel} doit avoir une valeur de %{maxValue} ou moins.',
        rangeCount: '%{fieldLabel} doit avoir entre %{minCount} et %{maxCount} élément(s).',
        rangeCountExact: '%{fieldLabel} doit avoir exactement %{count} éléments(s).',
        rangeMin: '%{fieldLabel} doit avoir au moins %{minCount} éléments(s).',
        rangeMax: '%{fieldLabel} doit avoir %{maxCount} éléments(s) ou moins.',
        invalidPath: `'%{path}' n'est pas un chemin valide`,
        pathExists: `Le chemin '%{path}' existe déjà`
      },
      i18n: {
        writingInLocale: 'Écrire en %{locale}'
      }
    },
    editor: {
      onLeavePage: 'Voulez-vous vraiment quitter cette page ?',
      onUpdatingWithUnsavedChanges: 'Veuillez enregistrer vos modifications avant de mettre à jour le statut.',
      onPublishingNotReady: 'Veuillez mettre à jour le statut à "Prêt" avant de publier.',
      onPublishingWithUnsavedChanges: 'Veuillez enregistrer vos modifications avant de publier.',
      onPublishing: 'Voulez-vous vraiment publier cette entrée ?',
      onUnpublishing: 'Voulez-vous vraiment dépublier cette entrée ?',
      onDeleteWithUnsavedChanges: 'Voulez-vous vraiment supprimer cette entrée publiée ainsi que vos modifications non enregistrées de cette session ?',
      onDeletePublishedEntry: 'Voulez-vous vraiment supprimer cette entrée publiée ?',
      onDeleteUnpublishedChangesWithUnsavedChanges: 'Ceci supprimera toutes les modifications non publiées de cette entrée ainsi que vos modifications non enregistrées de cette session. Voulez-vous toujours supprimer ?',
      onDeleteUnpublishedChanges: 'Toutes les modifications non publiées de cette entrée seront supprimées. Voulez-vous toujours supprimer ?',
      loadingEntry: "Chargement de l'entrée...",
      confirmLoadBackup: "Une sauvegarde locale a été trouvée pour cette entrée. Voulez-vous l'utiliser ?"
    },
    editorInterface: {
      toggleI18n: 'Édition multilingue',
      togglePreview: 'Aperçu',
      toggleScrollSync: 'Défilement synchronisé'
    },
    editorToolbar: {
      publishing: 'Publication...',
      publish: 'Publier',
      published: 'Publiée',
      unpublish: 'Dépublier',
      duplicate: 'Dupliquer',
      unpublishing: 'Dépublication...',
      publishAndCreateNew: 'Publier et créer une nouvelle entrée',
      publishAndDuplicate: 'Publier et dupliquer',
      deleteUnpublishedChanges: 'Supprimer les modications non publiées',
      deleteUnpublishedEntry: "Supprimer l'entrée non publiée",
      deletePublishedEntry: "Supprimer l'entrée publiée",
      deleteEntry: "Supprimer l'entrée",
      saving: 'Enregistrement...',
      save: 'Enregistrer',
      deleting: 'Suppression...',
      updating: 'Mise à jour...',
      status: 'Statut: %{status}',
      backCollection: ' Écriture dans la collection %{collectionLabel}',
      unsavedChanges: 'Modifications non enregistrées',
      changesSaved: 'Modifications enregistrées',
      draft: 'Brouillon',
      inReview: 'En cours de révision',
      ready: 'Prêt',
      publishNow: 'Publier maintenant',
      deployPreviewPendingButtonLabel: "Vérifier l'aperçu",
      deployPreviewButtonLabel: "Voir l'aperçu",
      deployButtonLabel: 'Voir en direct'
    },
    editorWidgets: {
      markdown: {
        bold: 'Gras',
        italic: 'Italique',
        code: 'Code',
        link: 'Lien',
        linkPrompt: "Entrer l'adresse web du lien",
        headings: 'Titres',
        quote: 'Citation',
        bulletedList: 'Liste à puces',
        numberedList: 'Liste numérotée',
        addComponent: 'Ajouter un composant',
        richText: 'Texte enrichi',
        markdown: 'Markdown'
      },
      image: {
        choose: 'Choisir une image',
        chooseUrl: 'Insérer depuis une adresse web',
        replaceUrl: 'Remplacer depuis une adresse web',
        promptUrl: "Entrer l'adresse web de l'image",
        chooseDifferent: 'Choisir une image différente',
        remove: "Supprimer l'image"
      },
      file: {
        choose: 'Choisir un fichier',
        chooseUrl: 'Insérer depuis une adresse web',
        replaceUrl: 'Remplacer depuis une adresse web',
        promptUrl: "Entrer l'adresse web du fichier",
        chooseDifferent: 'Choisir un fichier différent',
        remove: 'Effacer le fichier'
      },
      unknownControl: {
        noControl: "Pas de contrôle pour le gadget '%{widget}'."
      },
      unknownPreview: {
        noPreview: "Pas d'aperçu pour le gadget '%{widget}'."
      },
      headingOptions: {
        headingOne: 'Titre 1',
        headingTwo: 'Titre 2',
        headingThree: 'Titre 3',
        headingFour: 'Titre 4',
        headingFive: 'Titre 5',
        headingSix: 'Titre 6'
      },
      datetime: {
        now: 'Maintenant'
      },
      list: {
        add: 'Ajouter %{item}',
        addType: 'Ajouter une entrée de type %{item}'
      }
    }
  },
  mediaLibrary: {
    mediaLibraryCard: {
      draft: 'Brouillon',
      copy: 'Copier',
      copyUrl: "Copier l'adresse web",
      copyPath: "Copier le chemin d'accès",
      copyName: 'Copier le nom',
      copied: 'Copié'
    },
    mediaLibrary: {
      onDelete: 'Voulez-vous vraiment supprimer la ressource sélectionné ?',
      fileTooLarge: "Le fichier est trop volumineux.\nL'instance est configurée pour bloquer les envois de plus de %{size} kB."
    },
    mediaLibraryModal: {
      loading: 'Chargement...',
      noResults: 'Aucun résultat.',
      noAssetsFound: 'Aucune ressource trouvée.',
      noImagesFound: 'Aucune image trouvée.',
      private: 'Privé ',
      images: 'Images',
      mediaAssets: 'Ressources',
      search: 'Recherche...',
      uploading: 'Téléversement...',
      upload: 'Téléverser une nouvelle ressource',
      download: 'Télécharger',
      deleting: 'Suppression...',
      deleteSelected: 'Supprimer les éléments sélectionnés',
      chooseSelected: 'Choisir les éléments sélectionnés'
    }
  },
  ui: {
    default: {
      goBackToSite: 'Retourner sur le site'
    },
    errorBoundary: {
      title: 'Erreur',
      details: 'Une erreur est survenue, veuillez ',
      reportIt: 'la signaler sur GitHub.',
      detailsHeading: 'Détails',
      privacyWarning: "Ouvrir une issue la préremplie avec le message d'erreur et des données de déboggage.\nMerci de vérifier l'exactitude des informations et de supprimer toute donnée sensible si nécessaire.",
      recoveredEntry: {
        heading: 'Document récupéré',
        warning: 'Veuillez copier/coller ceci quelque part avant de naviguer ailleurs!',
        copyButtonLabel: 'Copier dans le presse-papier'
      }
    },
    settingsDropdown: {
      logOut: 'Déconnexion'
    },
    toast: {
      onFailToLoadEntries: "Échec du chargement de l'entrée : %{details}",
      onFailToLoadDeployPreview: "Échec du chargement de l'aperçu : %{details}",
      onFailToPersist: "Échec de l'enregistrement de l'entrée : %{details}",
      onFailToDelete: "Échec de la suppression de l'entrée : %{details}",
      onFailToUpdateStatus: 'Échec de la mise à jour du statut : %{details}',
      missingRequiredField: 'Oops, il manque un champ requis. Veuillez le renseigner avant de soumettre.',
      entrySaved: 'Entrée enregistrée',
      entryPublished: 'Entrée publiée',
      entryUnpublished: 'Entrée dépubliée',
      onFailToPublishEntry: 'Échec de la publication : %{details}',
      onFailToUnpublishEntry: "Impossible de dépublier l'entrée : %{details}",
      entryUpdated: "Statut de l'entrée mis à jour",
      onDeleteUnpublishedChanges: 'Modifications non publiées supprimées',
      onFailToAuth: '%{details}',
      onLoggedOut: 'Vous avez été déconnecté, merci de sauvegarder les données et vous reconnecter',
      onBackendDown: "Le serveur est actuellement hors-service. Pour plus d'informations : %{details}"
    }
  },
  workflow: {
    workflow: {
      loading: 'Chargement des entrées du flux éditorial',
      workflowHeading: 'Flux éditorial',
      newPost: 'Nouvel article',
      description: '%{smart_count} entrée(s) en attente de revue, %{readyCount} prête(s) à être publiée(s). |||| %{smart_count} entrée(s) en attente de revue, %{readyCount} prête(s) à être publiée(s). ',
      dateFormat: 'MMMM D'
    },
    workflowCard: {
      lastChange: '%{date} par %{author}',
      lastChangeNoAuthor: '%{date}',
      lastChangeNoDate: 'par %{author}',
      deleteChanges: 'Supprimer les mofications',
      deleteNewEntry: 'Supprimer la nouvelle entrée',
      publishChanges: 'Publier les modifications',
      publishNewEntry: 'Publier la nouvelle entrée'
    },
    workflowList: {
      onDeleteEntry: 'Voulez-vous vraiment supprimer cette entrée ?',
      onPublishingNotReadyEntry: 'Seuls les éléments ayant le statut "Prêt" peuvent être publiés. Veuillez glisser/déposer la carte dans la colonne "Prêt" pour activer la publication',
      onPublishEntry: 'Voulez-vous vraiment publier cette entrée ?',
      draftHeader: 'Brouillons',
      inReviewHeader: 'En cours de révision',
      readyHeader: 'Prêt',
      currentEntries: '%{smart_count} entrée |||| %{smart_count} entrées'
    }
  }
};
var _default = fr;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/netlify-cms-locales/dist/esm/gr/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/netlify-cms-locales/dist/esm/gr/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const gr = {
  auth: {
    login: 'Σύνδεση',
    loggingIn: 'Σύνδεση στο...',
    loginWithNetlifyIdentity: 'Σύνδεση μέσω Netlify',
    loginWithBitbucket: 'Σύνδεση μέσω Bitbucket',
    loginWithGitHub: 'Σύνδεση μέσω GitHub',
    loginWithGitLab: 'Σύνδεση μέσω GitLab',
    errors: {
      email: 'Βεβαιωθείτε ότι έχετε εισαγάγει το email σας.',
      password: 'Παρακαλώ εισάγετε τον κωδικό πρόσβασής σας.',
      identitySettings: 'Δεν είναι δυνατή η πρόσβαση στις ρυθμίσεις ταυτότητας. Όταν χρησιμοποιείτε το παρασκήνιο του git Gateway, φροντίστε να ενεργοποιήσετε την υπηρεσία Identity και το git Gateway.'
    }
  },
  app: {
    header: {
      content: 'Περιεχόμενα',
      workflow: 'Ροής εργασίας',
      media: 'Πολυμέσα',
      quickAdd: 'Γρήγορη προσθήκη'
    },
    app: {
      errorHeader: 'Σφάλμα κατά τη φόρτωση της ρύθμισης παραμέτρων CMS',
      configErrors: 'Σφάλματα ρύθμισης παραμέτρων',
      checkConfigYml: 'Ελέγξτε το αρχείο config.yml.',
      loadingConfig: 'Φόρτωση ρύθμισης παραμέτρων...',
      waitingBackend: 'Αναμονή για παρασκηνιακό...'
    },
    notFoundPage: {
      header: 'Δεν βρέθηκε'
    }
  },
  collection: {
    sidebar: {
      collections: 'Συλλογές',
      searchAll: 'Αναζήτηση όλων'
    },
    collectionTop: {
      viewAs: 'Προβολή ως',
      newButton: 'Νέο %{collectionLabel}'
    },
    entries: {
      loadingEntries: 'Εγγραφές φόρτωσης',
      cachingEntries: 'Εγγραφές προσωρινής αποθήκευσης',
      longerLoading: 'Αυτό μπορεί να διαρκέσει αρκετά λεπτά'
    }
  },
  editor: {
    editorControl: {
      field: {
        optional: 'προαιρετικός'
      }
    },
    editorControlPane: {
      widget: {
        required: 'Το %{fieldLabel} είναι απαραίτητο.',
        regexPattern: 'Το %{fieldLabel} δεν ταιριάζει με το μοτίβο: %{pattern}.',
        processing: 'Το %{fieldLabel} επεξεργάζεται.',
        range: 'Το %{fieldLabel} πρέπει να είναι μεταξύ %{minValue} και %{maxValue}.',
        min: 'Το %{fieldLabel} πρέπει να είναι τουλάχιστον %{minValue}.',
        max: 'Το %{fieldLabel} πρέπει να είναι %{maxValue} ή μικρότερο.'
      }
    },
    editor: {
      onLeavePage: 'Είστε βέβαιοι ότι θέλετε να αφήσετε αυτήν τη σελίδα;',
      onUpdatingWithUnsavedChanges: 'Έχετε μη αποθηκευμένες αλλαγές, αποθηκεύστε πριν να ενημερώσετε την κατάσταση.',
      onPublishingNotReady: 'Ενημερώστε την κατάσταση σε "έτοιμο" πριν από τη δημοσίευση.',
      onPublishingWithUnsavedChanges: 'Έχετε μη αποθηκευμένες αλλαγές, αποθηκεύστε πριν από τη δημοσίευση.',
      onPublishing: 'Είστε βέβαιοι ότι θέλετε να δημοσιεύσετε αυτήν την καταχώρηση;',
      onUnpublishing: 'Είστε βέβαιοι ότι θέλετε να καταργήσετε τη δημοσίευση αυτής της καταχώρησης;',
      onDeleteWithUnsavedChanges: 'Είστε βέβαιοι ότι θέλετε να διαγράψετε αυτήν τη δημοσιευμένη καταχώρηση, καθώς και τις αλλαγές που δεν αποθηκεύσατε από την τρέχουσα περίοδο λειτουργίας;',
      onDeletePublishedEntry: 'Είστε βέβαιοι ότι θέλετε να διαγράψετε αυτήν τη δημοσιευμένη καταχώρηση;',
      onDeleteUnpublishedChangesWithUnsavedChanges: 'Αυτό θα διαγράψει όλες τις μη δημοσιευμένες αλλαγές σε αυτήν την καταχώρηση, καθώς και τις αλλαγές που δεν έχετε αποθηκεύσει από την τρέχουσα περίοδο λειτουργίας. Θέλετε ακόμα να διαγράψετε;',
      onDeleteUnpublishedChanges: 'Όλες οι μη δημοσιευμένες αλλαγές σε αυτήν την καταχώρηση θα διαγραφούν. Θέλετε ακόμα να διαγράψετε;',
      loadingEntry: 'Φόρτωση εισόδου...',
      confirmLoadBackup: 'Ανακτήθηκε ένα τοπικό αντίγραφο ασφαλείας για αυτήν την καταχώρηση, θέλετε να το χρησιμοποιήσετε;'
    },
    editorToolbar: {
      publishing: 'Δημοσίευση...',
      publish: 'Δημοσίευση',
      published: 'Δημοσιεύθηκε',
      unpublish: 'Κατάργηση δημοσίευσης',
      duplicate: 'Διπλότυπο',
      unpublishing: 'Κατάργηση δημοσίευσης...',
      publishAndCreateNew: 'Δημοσίευση και δημιουργία νέων',
      publishAndDuplicate: 'Δημοσίευση και αντίγραφο',
      deleteUnpublishedChanges: 'Διαγραφή μη δημοσιευμένων αλλαγών',
      deleteUnpublishedEntry: 'Διαγραφή μη δημοσιευμένης καταχώρησης',
      deletePublishedEntry: 'Διαγραφή δημοσιευμένης καταχώρησης',
      deleteEntry: 'Διαγραφή καταχώρησης',
      saving: 'Εξοικονόμηση...',
      save: 'Αποθήκευση',
      deleting: 'Διαγραφή...',
      updating: 'Ενημέρωση...',
      status: 'Κατάστασης: %{status}',
      backCollection: ' Εγγραφή στη συλλογή %{collectionLabel}',
      unsavedChanges: 'Μη αποθηκευμένες αλλαγές',
      changesSaved: 'Αλλαγές που αποθηκεύτηκαν',
      draft: 'Σχέδιο',
      inReview: 'Σε επανεξέταση',
      ready: 'Έτοιμα',
      publishNow: 'Δημοσίευση τώρα',
      deployPreviewPendingButtonLabel: 'Έλεγχος για προεπισκόπηση',
      deployPreviewButtonLabel: 'Προβολή προεπισκόπησης',
      deployButtonLabel: 'Προβολή Live'
    },
    editorWidgets: {
      image: {
        choose: 'Επιλέξτε μια εικόνα',
        chooseDifferent: 'Επιλέξτε διαφορετική εικόνα',
        remove: 'Αφαιρέστε την εικόνα'
      },
      file: {
        choose: 'Επιλέξτε ένα αρχείο',
        chooseDifferent: 'Επιλέξτε διαφορετικό αρχείο',
        remove: 'Αφαιρέστε το αρχείο'
      },
      unknownControl: {
        noControl: "Δεν υπάρχει έλεγχος για το widget '%{widget}'."
      },
      unknownPreview: {
        noPreview: "Δεν υπάρχει προεπισκόπηση για το widget '%{widget}'."
      },
      headingOptions: {
        headingOne: 'Heading 1',
        headingTwo: 'Heading 2',
        headingThree: 'Heading 3',
        headingFour: 'Heading 4',
        headingFive: 'Heading 5',
        headingSix: 'Heading 6'
      }
    }
  },
  mediaLibrary: {
    mediaLibraryCard: {
      draft: 'Προσχέδιο'
    },
    mediaLibrary: {
      onDelete: 'Είστε βέβαιοι ότι θέλετε να διαγράψετε τα επιλεγμένα πολυμέσα;',
      fileTooLarge: 'Το αρχείο είναι πολύ μεγάλο.\nΔεν επιτρέπονται αρχεία μεγαλύτερα από %{size} kB.'
    },
    mediaLibraryModal: {
      loading: 'Φόρτωση...',
      noResults: 'Χωρίς αποτελέσματα.',
      noAssetsFound: 'Δεν βρέθηκαν αρχεία.',
      noImagesFound: 'Δεν βρέθηκαν εικόνες.',
      private: 'Ιδιωτικό',
      images: 'Εικόνες',
      mediaAssets: 'Αρχεία πολυμέσων',
      search: 'Αναζήτηση...',
      uploading: 'Φόρτωμα...',
      upload: 'Ανεβάστε νέα',
      deleting: 'Διαγραφή...',
      deleteSelected: 'Διαγραφή επιλεγμένου',
      chooseSelected: 'Επιλέξτε επιλεγμένο'
    }
  },
  ui: {
    errorBoundary: {
      title: 'Σφάλμα',
      details: 'Υπάρχει ένα λάθος ',
      reportIt: 'παρακαλώ να το αναφέρετε.',
      detailsHeading: 'Λεπτομέρειες',
      recoveredEntry: {
        heading: 'Ανακτημένο έγγραφο',
        warning: 'Παρακαλώ αντιγράψτε/επικολλήστε αυτό κάπου πριν πλοηγηθείτε μακριά!',
        copyButtonLabel: 'Αντιγραφή στο Πρόχειρο'
      }
    },
    settingsDropdown: {
      logOut: 'Αποσύνδεση'
    },
    toast: {
      onFailToLoadEntries: 'Απέτυχε η φόρτωση της καταχώρησης: %{details}',
      onFailToLoadDeployPreview: 'Απέτυχε η φόρτωση της προεπισκόπησης: %{details}',
      onFailToPersist: 'Απέτυχε η διατήρηση της καταχώρησης:% {Details}',
      onFailToDelete: 'Απέτυχε η διαγραφή της καταχώρησης: %{details}',
      onFailToUpdateStatus: 'Απέτυχε η ενημέρωση της κατάστασης: %{details}',
      missingRequiredField: 'Ουπς, ξεχάσατε ένα απαιτούμενο πεδίο. Συμπληρώστε το πριν από την αποθήκευση.',
      entrySaved: 'Η καταχώρηση Αποθηκεύτηκε',
      entryPublished: 'Η καταχώρηση δημοσιεύτηκε',
      entryUnpublished: 'Μη δημοσιευμένη καταχώρηση',
      onFailToPublishEntry: 'Η δημοσίευση απέτυχε: %{details}',
      onFailToUnpublishEntry: 'Απέτυχε η κατάργηση δημοσίευσης καταχώρησης: %{details}',
      entryUpdated: 'Η κατάσταση εισόδου ενημερώθηκε',
      onDeleteUnpublishedChanges: 'Οι μη δημοσιευμένες αλλαγές διαγράφηκαν',
      onFailToAuth: '%{details}'
    }
  },
  workflow: {
    workflow: {
      loading: 'Φόρτωση καταχωρήσεων ροής εργασίας σύνταξης',
      workflowHeading: 'Ροή εργασιών',
      newPost: 'Νέα δημοσίευση',
      description: '%{smart_count} καταχώρησεις σε αναμονή για αναθεώρηση, %{readyCount} έτοιμες για Live μετάβαση. |||| %{smart_count} καταχωρήσεις σε αναμονή για αναθεώρηση, %{readyCount} έτοιμες για Live μετάβαση. ',
      dateFormat: 'MMMM D'
    },
    workflowCard: {
      lastChange: '%{date} από %{author}',
      lastChangeNoAuthor: '%{date}',
      lastChangeNoDate: 'από %{author}',
      deleteChanges: 'Διαγραφή αλλαγών',
      deleteNewEntry: 'Διαγραφή νέας καταχώρησης',
      publishChanges: 'Δημοσίευση αλλαγών',
      publishNewEntry: 'Δημοσίευση νέας καταχώρησης'
    },
    workflowList: {
      onDeleteEntry: 'Είστε βέβαιοι ότι θέλετε να διαγράψετε αυτήν την καταχώρηση;',
      onPublishingNotReadyEntry: 'Μόνο τα στοιχεία με κατάσταση "Ready" μπορούν να δημοσιευτούν. Σύρετε την κάρτα στη στήλη "έτοιμο" για να ενεργοποιήσετε τη δημοσίευση.',
      onPublishEntry: 'Είστε βέβαιοι ότι θέλετε να δημοσιεύσετε αυτήν την καταχώρηση;',
      draftHeader: 'Προσχέδια',
      inReviewHeader: 'Σε ανασκόπηση',
      readyHeader: 'Έτοιμα',
      currentEntries: '%{smart_count} καταχωρηση |||| %{smart_count} καταχωρησεις'
    }
  }
};
var _default = gr;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/netlify-cms-locales/dist/esm/he/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/netlify-cms-locales/dist/esm/he/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const he = {
  auth: {
    login: 'התחברות',
    loggingIn: 'התחברות...',
    loginWithNetlifyIdentity: 'התחברות עם Netlify Identity',
    loginWithAzure: 'התחברות עם Azure',
    loginWithBitbucket: 'התחברות עם Bitbucket',
    loginWithGitHub: 'התחברות עם GitHub',
    loginWithGitLab: 'התחברות עם GitLab',
    errors: {
      email: 'נא  לא לשכוח להקליד את כתובת המייל',
      password: 'נא להקליד את הסיסמה.',
      identitySettings: 'הגדרות אימות הזהות אינן נגישות. כאשר משתמשים ב-git-gateway כשירות ה-backend יש לוודא ששירות אימות הזהות ו-Git Gateway הופעלו.'
    }
  },
  app: {
    header: {
      content: 'תוכן',
      workflow: 'ניהול אייטמים לפני הפרסום',
      media: 'מדיה',
      quickAdd: 'הוספה מהירה'
    },
    app: {
      errorHeader: 'אירעה שגיאה בטעינת הגדרות מערכת ניהול התוכן',
      configErrors: 'שגיאות בהגדרות',
      checkConfigYml: 'יש לבדוק את הקובץ config.yml.',
      loadingConfig: 'טעינת הגדרות...',
      waitingBackend: 'ממתין לטעינת ה-backend...'
    },
    notFoundPage: {
      header: 'לא נמצא'
    }
  },
  collection: {
    sidebar: {
      collections: 'קטגוריות',
      allCollections: 'כל הקטגוריות',
      searchAll: 'חיפוש כללי',
      searchIn: 'חיפוש בקטגוריית'
    },
    collectionTop: {
      sortBy: 'מיון לפי',
      viewAs: 'תצוגה לפי',
      newButton: 'חדש %{collectionLabel}',
      ascending: 'בסדר עולה',
      descending: 'בסדר יורד',
      searchResults: 'תוצאות חיפוש עבור "%{searchTerm}"',
      searchResultsInCollection: 'תוצאות חיפוש עבור "%{searchTerm}" ב%{collection}',
      filterBy: 'סינון לפי',
      groupBy: 'ארגון לפי'
    },
    entries: {
      loadingEntries: 'טעינת אייטמים...',
      cachingEntries: 'שמירת אייטמים בזכרון המטמון',
      longerLoading: 'התהליך עשוי להימשך כמה דקות',
      noEntries: 'לא נמצאו אייטמים'
    },
    groups: {
      other: 'אחר',
      negateLabel: 'לא %{label}'
    },
    defaultFields: {
      author: {
        label: 'מאת'
      },
      updatedOn: {
        label: 'עודכן בתאריך'
      }
    }
  },
  editor: {
    editorControl: {
      field: {
        optional: 'רשות'
      }
    },
    editorControlPane: {
      widget: {
        required: '%{fieldLabel} הוא שדה חובה.',
        regexPattern: '%{fieldLabel} לא תואם לדפוס %{pattern}.',
        processing: '%{fieldLabel} מעובד.',
        range: '%{fieldLabel} חייב להיות בין %{minValue} לבין %{maxValue}.',
        min: '%{fieldLabel} חייב להיות לפחות %{minValue}.',
        max: '%{fieldLabel} חייב להיות %{maxValue} או פחות.',
        rangeCount: '%{fieldLabel} חייב לכלול בין %{minCount} לבין %{maxCount} אייטמים.',
        rangeCountExact: '%{fieldLabel} חייב לכלול בדיוק %{count} אייטמים.',
        rangeMin: '%{fieldLabel} חייב לכלול לפחות %{minCount} אייטמים',
        rangeMax: '%{fieldLabel} חייב לכלול %{maxCount} אייטמים לכל היותר.',
        invalidPath: `'%{path}' אינו URL תקין`,
        pathExists: `'%{path}' כבר קיים`
      },
      i18n: {
        writingInLocale: 'כתיבה בשפה ה%{locale}'
      }
    },
    editor: {
      onLeavePage: 'האם ברצונך לעבור לעמוד אחר ללא שמירה?',
      onUpdatingWithUnsavedChanges: 'בוצעו שינויים שלא נשמרו. יש לבצע שמירה לפני עדכון מצב האייטם.',
      onPublishingNotReady: 'נא לשנות את מצב האייטם ל״מוכן לפרסום״ לפני הפרסום.',
      onPublishingWithUnsavedChanges: 'בוצעו שינויים שלא נשמרו. יש לבצע שמירה לפני הפרסום.',
      onPublishing: 'האם ברצונך לפרסם את האייטם?',
      onUnpublishing: 'האם ברצונך לבטל את פרסום האייטם?',
      onDeleteWithUnsavedChanges: 'האם ברצונך למחוק את האייטם הזה לפני פרסומו, וכן את השינויים שבוצעו כעת וטרם נשמרו?',
      onDeletePublishedEntry: 'האם ברצונך למחוק את האייטם הזה לאחר פרסומו?',
      onDeleteUnpublishedChangesWithUnsavedChanges: 'פעולה זו תמחק את כל השינויים שבוצעו באייטם זה ולא פורסמו, וכן את השינויים שבוצעו כעת וטרם נשמרו. האם ברצונך למחוק?',
      onDeleteUnpublishedChanges: 'כל השינויים שבוצעו באייטם זה ולא פורסמו יימחקו. האם ברצונך למחוק אותו?',
      loadingEntry: 'טעינת אייטם...',
      confirmLoadBackup: 'קיים עותק מקומי שמור של האייטם. האם ברצונך לטעון אותו?'
    },
    editorInterface: {
      toggleI18n: 'החלפת שפות',
      togglePreview: 'הפעלת תצוגה מקדימה',
      toggleScrollSync: 'סנכרון הגלילה'
    },
    editorToolbar: {
      publishing: 'פרסום...',
      publish: 'פרסום',
      published: 'פורסם',
      unpublish: 'ביטול הפרסום',
      duplicate: 'שכפול',
      unpublishing: 'ביטול הפרסום...',
      publishAndCreateNew: 'פרסום ויצירת אייטם חדש',
      publishAndDuplicate: 'פרסום ושכפול',
      deleteUnpublishedChanges: 'מחיקת השינויים שלא פורסמו',
      deleteUnpublishedEntry: 'מחיקת אייטם שטרם פורסם',
      deletePublishedEntry: 'מחיקת אייטם שפורסם',
      deleteEntry: 'מחיקת האייטם',
      saving: 'שמירה...',
      save: 'שמירה',
      statusInfoTooltipDraft: 'האייטם מוגדר כטיוטה. כדי להשלים את הפעולה ולהעביר אותו למצב ״ממתין לאישור״ יש להעביר אותו למצב ״ממתין לאישור״',
      statusInfoTooltipInReview: 'האייטם ממתין לאישור - לא נדרשת פעולה נוספת. ניתן עדיין לבצע שינויים בעת שהאייטם ממתין לאישור.',
      deleting: 'מחיקה...',
      updating: 'עדכון...',
      status: 'מצב: %{status}',
      backCollection: 'כתיבה בקטגוריית %{collectionLabel}',
      unsavedChanges: 'שינויים לא שמורים',
      changesSaved: 'השינויים נשמרו',
      draft: 'טיוטה',
      inReview: 'ממתין לאישור',
      ready: 'מוכן לפרסום',
      publishNow: 'פרסום מיידי',
      deployPreviewPendingButtonLabel: 'בדיקת תצוגה מקדימה',
      deployPreviewButtonLabel: 'צפייה בתצוגה מקדימה',
      deployButtonLabel: 'צפייה באתר'
    },
    editorWidgets: {
      markdown: {
        bold: 'מודגש',
        italic: 'נטוי',
        code: 'קוד',
        link: 'קישור',
        linkPrompt: 'נא להקליד את הכתובת לקישור',
        headings: 'כותרת',
        quote: 'ציטוט',
        bulletedList: 'רשימה לא-ממוספרת',
        numberedList: 'רשימה ממוספרת',
        addComponent: 'הוספת רכיב',
        richText: 'טקסט עשיר',
        markdown: 'Markdown'
      },
      image: {
        choose: 'בחירת תמונה',
        chooseUrl: 'הוספה מכתובת אינטרנט',
        replaceUrl: 'החלפת תמונה מכתובת אינטרנט',
        promptUrl: 'נא להכניס את ה-URL של התמונה',
        chooseDifferent: 'בחירת תמונה אחרת',
        remove: 'הסרת תמונה'
      },
      file: {
        choose: 'בחירת קובץ',
        chooseUrl: 'הוספה מכתובת אינטרנט',
        replaceUrl: 'החלפת קובץ מכתובת אינטרנט',
        promptUrl: 'נא להכניס את ה-URL של הקובץ',
        chooseDifferent: 'בחירת קובץ אחר',
        remove: 'הסרת קובץ'
      },
      unknownControl: {
        noControl: "לא הוגדרו פעולות ל'%{widget}'."
      },
      unknownPreview: {
        noPreview: "אין תצוגה מקדימה ל'%{widget}'."
      },
      headingOptions: {
        headingOne: 'כותרת 1',
        headingTwo: 'כותרת 2',
        headingThree: 'כותרת 3',
        headingFour: 'כותרת 4',
        headingFive: 'כותרת 5',
        headingSix: 'כותרת 6'
      },
      datetime: {
        now: 'עכשיו'
      },
      list: {
        add: 'הוספת %{item}',
        addType: 'הוספת אייטם מסוג %{item}'
      }
    }
  },
  mediaLibrary: {
    mediaLibraryCard: {
      draft: 'טיוטה',
      copy: 'העתקה',
      copyUrl: 'העתקת ה-URL',
      copyPath: 'העתקת הנתיב',
      copyName: 'העתקת השם',
      copied: 'העתקה הושלמה'
    },
    mediaLibrary: {
      onDelete: 'האם ברצונך למחוק את פריט המדיה הזה?',
      fileTooLarge: 'הקובץ גדול מדי.\nמוגדר לא לאפשר העלאת קבצים גדולים מ-%{size} קילובייט.'
    },
    mediaLibraryModal: {
      loading: 'טעינה...',
      noResults: 'לא נמצאו תוצאות.',
      noAssetsFound: 'לא נמצאו קבצים.',
      noImagesFound: 'לא נמצאו תמונות.',
      private: 'פרטי ',
      images: 'תמונות',
      mediaAssets: 'קבצי מדיה',
      search: 'חיפוש...',
      uploading: 'העלאה...',
      upload: 'העלאה',
      download: 'הורדה',
      deleting: 'מחיקה...',
      deleteSelected: 'למחוק את הקובץ המסומן',
      chooseSelected: 'לבחור את הקובץ המסומן'
    }
  },
  ui: {
    default: {
      goBackToSite: 'בחזרה לאתר'
    },
    errorBoundary: {
      title: 'שגיאה',
      details: 'אירעה שגיאה. נא ',
      reportIt: 'דווחו על הבעיה ב-GitHub.',
      detailsHeading: 'פרטים',
      privacyWarning: 'פתיחת Issue מעתיקה את הודעת השגיאה ונתונים רלוונטיים לאיתור הבעיה (debugging).\nיש לוודא שהמידע מדויק ולמחוק נתונים אישיים כלשהם.',
      recoveredEntry: {
        heading: 'מסמך משוחזר',
        warning: 'נא להעתיק ולהדביק את זה לפני ניווט לחלון אחר!',
        copyButtonLabel: 'העתקה'
      }
    },
    settingsDropdown: {
      logOut: 'התנתקות'
    },
    toast: {
      onFailToLoadEntries: 'טעינת האייטם %{details} נכשלה',
      onFailToLoadDeployPreview: 'טעינת התצוגה המקדימה של האייטם %{details} נכשלה',
      onFailToPersist: 'אחסון האייטם %{details} נכשל',
      onFailToDelete: 'מחיקת האייטם %{details} נכשלה',
      onFailToUpdateStatus: 'עדכון מצב האייטם %{details} נכשל',
      missingRequiredField: 'אופס, שכחת למלא שדה חובה. נא להשלים את המידע החסר לפני השמירה',
      entrySaved: 'האייטם נשמר',
      entryPublished: 'האייטם פורסם',
      entryUnpublished: 'האייטם הועבר לטיוטות',
      onFailToPublishEntry: 'פרסום האייטם %{details} נכשל',
      onFailToUnpublishEntry: 'ביטול פרסום האייטם %{details} נכשל',
      entryUpdated: 'מצב האייטם עודכן',
      onDeleteUnpublishedChanges: 'השינויים שלא פורסמו נמחקו',
      onFailToAuth: '%{details}',
      onLoggedOut: 'נותקת מהמערכת. יש לגבות מידע לא שמור ולהתחבר שוב',
      onBackendDown: 'ה-backend המוגדר אינו זמין. ראו %{details} למידע נוסף'
    }
  },
  workflow: {
    workflow: {
      loading: 'טעינת אייטמים',
      workflowHeading: 'ניהול אייטמים לפני הפרסום',
      newPost: 'אייטם חדש',
      description: '%אייטם {smart_count} ממתין לאישור, אייטם %{readyCount} מוכן לפרסום |||| %{smart_count} אייטמים ממתינים לאישור, %{readyCount} מוכנים לפרסום',
      dateFormat: 'MMMM D'
    },
    workflowCard: {
      lastChange: '%{date} מאת %{author}',
      lastChangeNoAuthor: '%{date}',
      lastChangeNoDate: 'מאת %{author}',
      deleteChanges: 'למחוק את השינויים',
      deleteNewEntry: 'למחוק אייטם חדש',
      publishChanges: 'פרסום השינויים',
      publishNewEntry: 'פרסום אייטם חדש'
    },
    workflowList: {
      onDeleteEntry: 'האם ברצונך למחוק אייטם זה?',
      onPublishingNotReadyEntry: 'ניתן לפרסם רק אייטמים שנמצאים במצב ״מוכן לפרסום״. נא לגרור את האייטם לטור ״מוכן לפרסום״ כדי לפרסם.',
      onPublishEntry: 'האם ברצונך לפרסם אייטם זה?',
      draftHeader: 'טיוטות',
      inReviewHeader: 'ממתין לאישור',
      readyHeader: 'מוכן לפרסום',
      currentEntries: 'אייטם %{smart_count} |||| %{smart_count} אייטמים'
    }
  }
};
var _default = he;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/netlify-cms-locales/dist/esm/hr/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/netlify-cms-locales/dist/esm/hr/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const hr = {
  auth: {
    login: 'Prijava',
    loggingIn: 'Prijava u tijeku...',
    loginWithNetlifyIdentity: 'Prijava sa Netlify računom',
    loginWithAzure: 'Prijava za Azure računom',
    loginWithBitbucket: 'Prijava sa Bitbucket računom',
    loginWithGitHub: 'Prijava sa GitHub računom',
    loginWithGitLab: 'Prijava sa GitLab računom',
    errors: {
      email: 'Unesite email.',
      password: 'Molimo unisite lozinku.',
      identitySettings: 'Nemoguće pristupiti postavkama identita. Kod korištenja git-gateway backenda morate uključiti "Identity service" te "Git Gateway"'
    }
  },
  app: {
    header: {
      content: 'Sadržaj',
      workflow: 'Tijek rada',
      media: 'Mediji',
      quickAdd: 'Dodaj'
    },
    app: {
      errorHeader: 'Greška pri učitavanju CMS konfiguracije',
      configErrors: 'Greška u konfiguraciji',
      checkConfigYml: 'Provjeri config.yml datoteku.',
      loadingConfig: 'Učitavanje konfiguracije...',
      waitingBackend: 'Čekanje na backend...'
    },
    notFoundPage: {
      header: 'Stranica nije pronađena'
    }
  },
  collection: {
    sidebar: {
      collections: 'Zbirke',
      allCollections: 'Sve zbirke',
      searchAll: 'Pretraži sve',
      searchIn: 'Pretraži u'
    },
    collectionTop: {
      sortBy: 'Sortiraj',
      viewAs: 'Pogledaj kao',
      newButton: 'Nova %{collectionLabel}',
      ascending: 'Uzlazno',
      descending: 'Silzano',
      searchResults: 'Rezulatati pretraživanja za "%{searchTerm}"',
      searchResultsInCollection: 'Rezulatati pretraživanja za "%{searchTerm}" u %{collection}',
      filterBy: 'Filtriraj po',
      groupBy: 'Grupiraj po'
    },
    entries: {
      loadingEntries: 'Učitavanje unosa...',
      cachingEntries: 'Predmemoriranje unosa...',
      longerLoading: 'Ovo bi moglo potrajati par minuta',
      noEntries: 'Nema unosa'
    },
    groups: {
      other: 'Ostalo',
      negateLabel: 'Nije %{label}'
    },
    defaultFields: {
      author: {
        label: 'Autor'
      },
      updatedOn: {
        label: 'Ažurirano na'
      }
    }
  },
  editor: {
    editorControl: {
      field: {
        optional: 'opcionalno'
      }
    },
    editorControlPane: {
      widget: {
        required: '%{fieldLabel} je obvezan.',
        regexPattern: '%{fieldLabel} se ne podudara sa uzorkom: %{pattern}.',
        processing: '%{fieldLabel} se procesira.',
        range: '%{fieldLabel} mora biti između %{minValue} i %{maxValue}.',
        min: '%{fieldLabel} mora biti najmanje %{minValue}.',
        max: '%{fieldLabel} mora biti %{maxValue} ili manje.',
        rangeCount: '%{fieldLabel} mora imati između %{minCount} i %{maxCount} predmeta.',
        rangeCountExact: '%{fieldLabel} mora imati točno %{count} predmeta.',
        rangeMin: '%{fieldLabel} mora imati najmanje %{minCount} predmet(a).',
        rangeMax: '%{fieldLabel} mora imate %{maxCount} ili manje predmeta.',
        invalidPath: `'%{path}' nije valjana putanja`,
        pathExists: `Putanja '%{path}' već postoji`
      },
      i18n: {
        writingInLocale: 'Pisanje na %{locale}'
      }
    },
    editor: {
      onLeavePage: 'Jeste li sigurni da želite napustiti stranicu?',
      onUpdatingWithUnsavedChanges: 'Imate nespremljene promjene, molimo spremite prije ažuriranja statusa.',
      onPublishingNotReady: 'Molimo ažurirajte status na "Spremno" prije objavljivanja.',
      onPublishingWithUnsavedChanges: 'Imate nespremljene promjene, molimo spremite prije objavljivanja.',
      onPublishing: 'Jeste li sigurni da želite objaviti ovaj unos?',
      onUnpublishing: 'Jeste li sigurni da želite maknuti objavu za ovaj unos?',
      onDeleteWithUnsavedChanges: 'Jeste li sigurni da želite obrisati objavljeni unos, te nespremljene promjene u trenutnoj sesiji?',
      onDeletePublishedEntry: 'Jeste li sigurni da želite obrisati ovaj objavljeni unos?',
      onDeleteUnpublishedChangesWithUnsavedChanges: 'Obrisat ćete sve neobjavljene promjene na ovom unosu, te sve nespremljene promjene u trenutnoj sesiji. Želite li i dalje obrisati?',
      onDeleteUnpublishedChanges: 'Sve nespremljene promjene na ovom unosu će biti obrisane. Želite li i dalje obrisati?',
      loadingEntry: 'Učitavanje unosa...',
      confirmLoadBackup: 'Lokalna kopija je dohvaćena za ovaj unos, želite li ju koristiti?'
    },
    editorToolbar: {
      publishing: 'Objavljivanje...',
      publish: 'Objavi',
      published: 'Objavljeno',
      unpublish: 'Obriši iz objava',
      duplicate: 'Dupliciraj',
      unpublishing: 'Brisanje iz objava...',
      publishAndCreateNew: 'Objavi i kreiraj novo',
      publishAndDuplicate: 'Objavi i dupliciraj',
      deleteUnpublishedChanges: 'Obriši neobjavljene promjene',
      deleteUnpublishedEntry: 'Obriši neobjavljene unose',
      deletePublishedEntry: 'Obriši objavljeni unos',
      deleteEntry: 'Obriši unos',
      saving: 'Spremanje...',
      save: 'Spremi',
      deleting: 'Brisanje...',
      updating: 'Ažuriranje...',
      status: 'Status: %{status}',
      backCollection: 'Pisanje u %{collectionLabel} zbirci',
      unsavedChanges: 'Nespremljene promjene',
      changesSaved: 'Promjene spremljene',
      draft: 'Skica',
      inReview: 'Osvrt',
      ready: 'Spremno',
      publishNow: 'Objavi sad',
      deployPreviewPendingButtonLabel: 'Provjeri za osvrt',
      deployPreviewButtonLabel: 'Pogledaj osvrt',
      deployButtonLabel: 'Pogledaj na produkciji'
    },
    editorWidgets: {
      markdown: {
        bold: 'Podebljano',
        italic: 'Kurziv',
        code: 'Kod',
        link: 'Link',
        linkPrompt: 'Unesi URL linka',
        headings: 'Naslovi',
        quote: 'Citat',
        bulletedList: 'Nabrajan popis',
        numberedList: 'Numeriran popis',
        addComponent: 'Dodaj komponentu',
        richText: 'Bogati tekst',
        markdown: 'Markdown'
      },
      image: {
        choose: 'Odaberi sliku',
        chooseDifferent: 'Odaberi drugu sliku',
        remove: 'Izbriši sliku'
      },
      file: {
        choose: 'Odaberi datoteku',
        chooseDifferent: 'Odaberi drugu datoteku',
        remove: 'Obriši datoteku'
      },
      unknownControl: {
        noControl: "Kontrola nije pronađena za widget '%{widget}'."
      },
      unknownPreview: {
        noPreview: "Prikaz nije pronađen za widget '%{widget}'."
      },
      headingOptions: {
        headingOne: 'Naslov 1',
        headingTwo: 'Naslov 2',
        headingThree: 'Naslov 3',
        headingFour: 'Naslov 4',
        headingFive: 'Naslov 5',
        headingSix: 'Naslov 6'
      },
      datetime: {
        now: 'Sad'
      }
    }
  },
  mediaLibrary: {
    mediaLibraryCard: {
      draft: 'Skica'
    },
    mediaLibrary: {
      onDelete: 'Jeste li sigurni da želite obrisati odabrane medijske datoteke?',
      fileTooLarge: 'Datoteka prevelika.\nKonfigurirano da ne podržava datoteke veće od %{size} kB.'
    },
    mediaLibraryModal: {
      loading: 'Učitavanje...',
      noResults: 'Nema rezultata.',
      noAssetsFound: 'Sredstva nisu pronađena.',
      noImagesFound: 'Slike nisu pronađene.',
      private: 'Privatno ',
      images: 'Slike',
      mediaAssets: 'Medijska sredstva',
      search: 'Pretraži...',
      uploading: 'Učitavanje...',
      upload: 'Učitaj',
      download: 'Preuzmi',
      deleting: 'Brisanje...',
      deleteSelected: 'Obriši označeno',
      chooseSelected: 'Odaberi označeno'
    }
  },
  ui: {
    default: {
      goBackToSite: 'Povratak na stranicu'
    },
    errorBoundary: {
      title: 'Greška',
      details: 'Dogodila se greška - molimo ',
      reportIt: 'otvori issue (problem) na GitHubu.',
      detailsHeading: 'Detalji',
      privacyWarning: 'Otvaranje issue-a (problema) populira ga sa porukom od greške i debug podacima.\nProvjerite jesu li infomacije točne i obrišite osjetljive podatke ako postoje.',
      recoveredEntry: {
        heading: 'Obnovljen dokument',
        warning: 'Molimo kopiraj/zalijepi ovo negdje prije odlaska dalje!',
        copyButtonLabel: 'Kopiraj u međuspremnik'
      }
    },
    settingsDropdown: {
      logOut: 'Odjava'
    },
    toast: {
      onFailToLoadEntries: 'Neuspjelo dohvaćanje unosa: %{details}',
      onFailToLoadDeployPreview: 'Neuspjelo dohvaćanje pregleda: %{details}',
      onFailToPersist: 'Neuspjelo spremanje unosa: %{details}',
      onFailToDelete: 'Neuspjelo brisanje unosa: %{details}',
      onFailToUpdateStatus: 'Neuspjelo ažuriranje statusa: %{details}',
      missingRequiredField: 'Uups, preskočili ste obvezno polje. Molimo popunite prije spremanja.',
      entrySaved: 'Unos spremljen',
      entryPublished: 'Unos objavljen',
      entryUnpublished: 'Unos obrisan',
      onFailToPublishEntry: 'Neuspjelo objavljivanje unosa: %{details}',
      onFailToUnpublishEntry: 'Neuspjelo brisanje unosa: %{details}',
      entryUpdated: 'Status unosa ažuriran',
      onDeleteUnpublishedChanges: 'Otkrivene neobjavljene objave',
      onFailToAuth: '%{details}',
      onLoggedOut: 'Odjavljeni ste, molimo spremite sve podatke i prijavite se ponovno',
      onBackendDown: 'Backend servis ima prekid rada. Pogledaj %{details} za više informacija'
    }
  },
  workflow: {
    workflow: {
      loading: 'Učitavanje unosa uredničkog tijeka rada',
      workflowHeading: 'Urednički tijek rada',
      newPost: 'Nova objava',
      description: '%{smart_count} unos čeka pregled, %{readyCount} unos spreman za produkciju. |||| %{smart_count} unosa čeka pregled, %{readyCount} unosa spremno za produkciju. ',
      dateFormat: 'MMMM D'
    },
    workflowCard: {
      lastChange: '%{date} od strane %{author}',
      lastChangeNoAuthor: '%{date}',
      lastChangeNoDate: 'od strane %{author}',
      deleteChanges: 'Obriši promjene',
      deleteNewEntry: 'Obriši novi unos',
      publishChanges: 'Objavi promjene',
      publishNewEntry: 'Objavi novi unos'
    },
    workflowList: {
      onDeleteEntry: 'Jeste li sigurni da želite obrisati unos?',
      onPublishingNotReadyEntry: 'Samo promjene sa statusom "Spremno" mogu biti objavljene. Molimo povucite karticu u kolumnu "Spremno" prije objavljivanja.',
      onPublishEntry: 'Jeste li sigurni da želite objaviti unos?',
      draftHeader: 'Skice',
      inReviewHeader: 'U osvrtu',
      readyHeader: 'Spremno',
      currentEntries: '%{smart_count} unos |||| %{smart_count} unosa'
    }
  }
};
var _default = hr;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/netlify-cms-locales/dist/esm/hu/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/netlify-cms-locales/dist/esm/hu/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const hu = {
  app: {
    header: {
      content: 'Tartalom',
      workflow: 'Munkafolyamat',
      media: 'Média',
      quickAdd: 'Gyors hozzáadás'
    },
    app: {
      errorHeader: 'Hiba történt a CMS konfiguráció betöltése közben',
      configErrors: 'Configurációs hibák',
      checkConfigYml: 'Ellenőrizd a config.yml filet.',
      loadingConfig: 'Konfiguráció betöltése...',
      waitingBackend: 'Várakozás hattérrendszerekre...'
    },
    notFoundPage: {
      header: 'Nincs találat'
    }
  },
  collection: {
    sidebar: {
      collections: 'Gyűjtemények',
      searchAll: 'Keresés mindenre'
    },
    collectionTop: {
      viewAs: 'Nézet mint',
      newButton: 'Új %{collectionLabel}'
    },
    entries: {
      loadingEntries: 'Bejegyzések betöltése',
      cachingEntries: 'Bejegyzések cacheelése',
      longerLoading: 'Ez még eltarthat néhany percig'
    }
  },
  editor: {
    editorControl: {
      field: {
        optional: 'választható'
      }
    },
    editorControlPane: {
      widget: {
        required: '%{fieldLabel} kötelező mező.',
        regexPattern: '%{fieldLabel} nem egyezik a %{pattern} mintával.',
        processing: '%{fieldLabel} feldolgozás alatt.',
        range: '%{fieldLabel}, %{minValue} és %{maxValue} értékek között kell legyen.',
        min: '%{fieldLabel} legalább %{minValue} kell legyen vagy több.',
        max: '%{fieldLabel} legalabb %{maxValue} vagy kevesebb kell legyen.'
      }
    },
    editor: {
      onLeavePage: 'Biztos hogy el akarod hagyni az oldalt?',
      onUpdatingWithUnsavedChanges: 'Mentettlen változtatások vannak, kérjük, mentse az állapot frissítése előtt.',
      onPublishingNotReady: 'Változtasd az állapotot "Kész"-re publikálás előtt.',
      onPublishingWithUnsavedChanges: 'Mentetlen változtatások vannak, kérjük, mentsen a publikálás előtt.',
      onPublishing: 'Publikálod ezt a bejegyzést?',
      onUnpublishing: 'Publikálás visszavonása erre a bejegyzésre?',
      onDeleteWithUnsavedChanges: 'Töröljük ezt a publikált bejegyzést, a többi mentetlen modositással együtt?',
      onDeletePublishedEntry: 'Töröljük ezt a publikált bejegyzést?',
      onDeleteUnpublishedChangesWithUnsavedChanges: 'Ezzel törli a bejegyzés összes nem közzétett módosítását, valamint az aktuális munkamenetből nem mentett módosításokat. Még mindig törli?',
      onDeleteUnpublishedChanges: 'A bejegyzés összes, nem közzétett módosítása törlődik. Még mindig törli?',
      loadingEntry: 'Bejegyzés betöltése...',
      confirmLoadBackup: 'Helyi biztonsági másolat került helyre ehhez a bejegyzéshez, szeretné használni?'
    },
    editorToolbar: {
      publishing: 'Publikálás...',
      publish: 'Publikáció',
      published: 'Publikálás',
      unpublish: 'Publikálás visszavonása',
      duplicate: 'Duplikált',
      unpublishing: 'Publikálás visszavonása...',
      publishAndCreateNew: 'Publikálás és új létrehozása',
      publishAndDuplicate: 'Publikálás és duplikál',
      deleteUnpublishedChanges: 'Nempublikált változtatások törlése',
      deleteUnpublishedEntry: 'Nempublikált bejegyzés törlése',
      deletePublishedEntry: 'Publikált bejegyzés törlése',
      deleteEntry: 'Bejegyzés törlése',
      saving: 'Mentés...',
      save: 'Mentés',
      deleting: 'Törlés...',
      updating: 'Frissítés...',
      status: 'Beállitása: %{status}',
      backCollection: ' Írás a %{collectionLabel} gyűjteménybe',
      unsavedChanges: 'Nemmentett változtatások',
      changesSaved: 'Változások elmentve',
      draft: 'Piszkozat',
      inReview: 'Felülvizsgálat alatt',
      ready: 'Kész',
      publishNow: 'Publikálás most',
      deployPreviewPendingButtonLabel: 'Előnézet ellenörzése',
      deployPreviewButtonLabel: 'Előnézet megtekintése',
      deployButtonLabel: 'Élő megtekintése'
    },
    editorWidgets: {
      image: {
        choose: 'Válasszon képet',
        chooseDifferent: 'Válasszon másik képet',
        remove: 'Távolítsa el a képet'
      },
      file: {
        choose: 'Válasszon fájlt',
        chooseDifferent: 'Válasszon másik fájlt',
        remove: 'Távolítsa el a fájlt'
      },
      unknownControl: {
        noControl: "Nincs vezérlés a '%{widget}' widget számára."
      },
      unknownPreview: {
        noPreview: "Nincs előnézet a '%{widget}' widget számára."
      },
      headingOptions: {
        headingOne: 'Heading 1',
        headingTwo: 'Heading 2',
        headingThree: 'Heading 3',
        headingFour: 'Heading 4',
        headingFive: 'Heading 5',
        headingSix: 'Heading 6'
      }
    }
  },
  mediaLibrary: {
    mediaLibraryCard: {
      draft: 'Piszkozat'
    },
    mediaLibrary: {
      onDelete: 'Biztos törli a kiválasztott média tartalmat?'
    },
    mediaLibraryModal: {
      loading: 'Betöltés...',
      noResults: 'Nincs találat.',
      noAssetsFound: 'Nem található tartalom.',
      noImagesFound: 'Nem található kép.',
      private: 'Privát ',
      images: 'Képek',
      mediaAssets: 'Média tartalmak',
      search: 'Keresés...',
      uploading: 'Feltöltés...',
      upload: 'Új feltöltés',
      deleting: 'Törlés...',
      deleteSelected: 'Kijelöltek törlése',
      chooseSelected: 'Kijelöl'
    }
  },
  ui: {
    errorBoundary: {
      title: 'Hiba',
      details: 'Hiba történt - kérjük ',
      reportIt: 'jelentse.',
      detailsHeading: 'Részletek',
      recoveredEntry: {
        heading: 'Helyreállitott dokumentum',
        warning: 'Kérjük mentse ezt el (vágólapra) mielőtt elhagyná az oldalt!',
        copyButtonLabel: 'Másolás a vágólapra'
      }
    },
    settingsDropdown: {
      logOut: 'Kijelentkezés'
    },
    toast: {
      onFailToLoadEntries: 'A bejegyzés betöltése nem sikerült: %{details}',
      onFailToLoadDeployPreview: 'Az előnézet betöltése nem sikerült: %{details}',
      onFailToPersist: 'Bejegyzés megtartása sikertelen: %{details}',
      onFailToDelete: 'A bejegyzés törlése sikertelen: %{details}',
      onFailToUpdateStatus: 'Az állapot frissítése nem sikerült: %{details}',
      missingRequiredField: 'Hoppá, kihagytál egy kötelező mezőt. Mentés előtt töltsd ki.',
      entrySaved: 'Bejegyzés elmentve',
      entryPublished: 'Bejegyzés publikálva',
      entryUnpublished: 'Bejegyzés publikálása visszavonva',
      onFailToPublishEntry: 'Bejegyzés publikálása sikertelen: %{details}',
      onFailToUnpublishEntry: 'Bejegyzés publikálásának visszavonása sikertelen: %{details}',
      entryUpdated: 'Bejegyzés állapota frissült',
      onDeleteUnpublishedChanges: 'Unpublished changes deleted',
      onFailToAuth: '%{details}'
    }
  },
  workflow: {
    workflow: {
      loading: 'A szerkesztési munkafolyamat-bejegyzések betöltése',
      workflowHeading: 'Szerkesztői Folyamat',
      newPost: 'New Post',
      description: '%{smart_count} bejegyzés felülvizsgálatra vár, %{readyCount} élesítésre vár. |||| %{smart_count} bejegyzés felülvizsgálatra vár, %{readyCount} élesítésre vár. ',
      dateFormat: 'MMMM D'
    },
    workflowCard: {
      lastChange: '%{date}, írta %{author}',
      lastChangeNoAuthor: '%{date}',
      lastChangeNoDate: '%{author}',
      deleteChanges: 'Változtatások törlése',
      deleteNewEntry: 'Új bejegyzés törlése',
      publishChanges: 'Változtatások publikálása',
      publishNewEntry: 'Új bejegyzés publikálása'
    },
    workflowList: {
      onDeleteEntry: 'Biztosan törli ezt a bejegyzést?',
      onPublishingNotReadyEntry: 'Csak a "Kész" állapotú tételek tehetők közzé. A közzététel engedélyezéséhez húzza a kártyát a „Kész” oszlopba.',
      onPublishEntry: 'Biztosan közzéteszi ezt a bejegyzést?',
      draftHeader: 'Piszkozat',
      inReviewHeader: 'Vizsgálat alatt',
      readyHeader: 'Kész',
      currentEntries: '%{smart_count} bejegyzés |||| %{smart_count} bejegyzések'
    }
  }
};
var _default = hu;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/netlify-cms-locales/dist/esm/index.js":
/*!************************************************************!*\
  !*** ./node_modules/netlify-cms-locales/dist/esm/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "bg", ({
  enumerable: true,
  get: function () {
    return _bg.default;
  }
}));
Object.defineProperty(exports, "ca", ({
  enumerable: true,
  get: function () {
    return _ca.default;
  }
}));
Object.defineProperty(exports, "cs", ({
  enumerable: true,
  get: function () {
    return _cs.default;
  }
}));
Object.defineProperty(exports, "da", ({
  enumerable: true,
  get: function () {
    return _da.default;
  }
}));
Object.defineProperty(exports, "de", ({
  enumerable: true,
  get: function () {
    return _de.default;
  }
}));
Object.defineProperty(exports, "en", ({
  enumerable: true,
  get: function () {
    return _en.default;
  }
}));
Object.defineProperty(exports, "es", ({
  enumerable: true,
  get: function () {
    return _es.default;
  }
}));
Object.defineProperty(exports, "fr", ({
  enumerable: true,
  get: function () {
    return _fr.default;
  }
}));
Object.defineProperty(exports, "gr", ({
  enumerable: true,
  get: function () {
    return _gr.default;
  }
}));
Object.defineProperty(exports, "he", ({
  enumerable: true,
  get: function () {
    return _he.default;
  }
}));
Object.defineProperty(exports, "hr", ({
  enumerable: true,
  get: function () {
    return _hr.default;
  }
}));
Object.defineProperty(exports, "hu", ({
  enumerable: true,
  get: function () {
    return _hu.default;
  }
}));
Object.defineProperty(exports, "it", ({
  enumerable: true,
  get: function () {
    return _it.default;
  }
}));
Object.defineProperty(exports, "ja", ({
  enumerable: true,
  get: function () {
    return _ja.default;
  }
}));
Object.defineProperty(exports, "ko", ({
  enumerable: true,
  get: function () {
    return _ko.default;
  }
}));
Object.defineProperty(exports, "lt", ({
  enumerable: true,
  get: function () {
    return _lt.default;
  }
}));
Object.defineProperty(exports, "nb_no", ({
  enumerable: true,
  get: function () {
    return _nb_no.default;
  }
}));
Object.defineProperty(exports, "nl", ({
  enumerable: true,
  get: function () {
    return _nl.default;
  }
}));
Object.defineProperty(exports, "nn_no", ({
  enumerable: true,
  get: function () {
    return _nn_no.default;
  }
}));
Object.defineProperty(exports, "pl", ({
  enumerable: true,
  get: function () {
    return _pl.default;
  }
}));
Object.defineProperty(exports, "pt", ({
  enumerable: true,
  get: function () {
    return _pt.default;
  }
}));
Object.defineProperty(exports, "ro", ({
  enumerable: true,
  get: function () {
    return _ro.default;
  }
}));
Object.defineProperty(exports, "ru", ({
  enumerable: true,
  get: function () {
    return _ru.default;
  }
}));
Object.defineProperty(exports, "sv", ({
  enumerable: true,
  get: function () {
    return _sv.default;
  }
}));
Object.defineProperty(exports, "th", ({
  enumerable: true,
  get: function () {
    return _th.default;
  }
}));
Object.defineProperty(exports, "tr", ({
  enumerable: true,
  get: function () {
    return _tr.default;
  }
}));
Object.defineProperty(exports, "uk", ({
  enumerable: true,
  get: function () {
    return _uk.default;
  }
}));
Object.defineProperty(exports, "vi", ({
  enumerable: true,
  get: function () {
    return _vi.default;
  }
}));
Object.defineProperty(exports, "zh_Hans", ({
  enumerable: true,
  get: function () {
    return _zh_Hans.default;
  }
}));
Object.defineProperty(exports, "zh_Hant", ({
  enumerable: true,
  get: function () {
    return _zh_Hant.default;
  }
}));

var _cs = _interopRequireDefault(__webpack_require__(/*! ./cs */ "./node_modules/netlify-cms-locales/dist/esm/cs/index.js"));

var _da = _interopRequireDefault(__webpack_require__(/*! ./da */ "./node_modules/netlify-cms-locales/dist/esm/da/index.js"));

var _de = _interopRequireDefault(__webpack_require__(/*! ./de */ "./node_modules/netlify-cms-locales/dist/esm/de/index.js"));

var _en = _interopRequireDefault(__webpack_require__(/*! ./en */ "./node_modules/netlify-cms-locales/dist/esm/en/index.js"));

var _es = _interopRequireDefault(__webpack_require__(/*! ./es */ "./node_modules/netlify-cms-locales/dist/esm/es/index.js"));

var _ca = _interopRequireDefault(__webpack_require__(/*! ./ca */ "./node_modules/netlify-cms-locales/dist/esm/ca/index.js"));

var _fr = _interopRequireDefault(__webpack_require__(/*! ./fr */ "./node_modules/netlify-cms-locales/dist/esm/fr/index.js"));

var _gr = _interopRequireDefault(__webpack_require__(/*! ./gr */ "./node_modules/netlify-cms-locales/dist/esm/gr/index.js"));

var _hu = _interopRequireDefault(__webpack_require__(/*! ./hu */ "./node_modules/netlify-cms-locales/dist/esm/hu/index.js"));

var _it = _interopRequireDefault(__webpack_require__(/*! ./it */ "./node_modules/netlify-cms-locales/dist/esm/it/index.js"));

var _lt = _interopRequireDefault(__webpack_require__(/*! ./lt */ "./node_modules/netlify-cms-locales/dist/esm/lt/index.js"));

var _ja = _interopRequireDefault(__webpack_require__(/*! ./ja */ "./node_modules/netlify-cms-locales/dist/esm/ja/index.js"));

var _nl = _interopRequireDefault(__webpack_require__(/*! ./nl */ "./node_modules/netlify-cms-locales/dist/esm/nl/index.js"));

var _nb_no = _interopRequireDefault(__webpack_require__(/*! ./nb_no */ "./node_modules/netlify-cms-locales/dist/esm/nb_no/index.js"));

var _nn_no = _interopRequireDefault(__webpack_require__(/*! ./nn_no */ "./node_modules/netlify-cms-locales/dist/esm/nn_no/index.js"));

var _pl = _interopRequireDefault(__webpack_require__(/*! ./pl */ "./node_modules/netlify-cms-locales/dist/esm/pl/index.js"));

var _pt = _interopRequireDefault(__webpack_require__(/*! ./pt */ "./node_modules/netlify-cms-locales/dist/esm/pt/index.js"));

var _ro = _interopRequireDefault(__webpack_require__(/*! ./ro */ "./node_modules/netlify-cms-locales/dist/esm/ro/index.js"));

var _ru = _interopRequireDefault(__webpack_require__(/*! ./ru */ "./node_modules/netlify-cms-locales/dist/esm/ru/index.js"));

var _sv = _interopRequireDefault(__webpack_require__(/*! ./sv */ "./node_modules/netlify-cms-locales/dist/esm/sv/index.js"));

var _th = _interopRequireDefault(__webpack_require__(/*! ./th */ "./node_modules/netlify-cms-locales/dist/esm/th/index.js"));

var _tr = _interopRequireDefault(__webpack_require__(/*! ./tr */ "./node_modules/netlify-cms-locales/dist/esm/tr/index.js"));

var _uk = _interopRequireDefault(__webpack_require__(/*! ./uk */ "./node_modules/netlify-cms-locales/dist/esm/uk/index.js"));

var _vi = _interopRequireDefault(__webpack_require__(/*! ./vi */ "./node_modules/netlify-cms-locales/dist/esm/vi/index.js"));

var _zh_Hant = _interopRequireDefault(__webpack_require__(/*! ./zh_Hant */ "./node_modules/netlify-cms-locales/dist/esm/zh_Hant/index.js"));

var _ko = _interopRequireDefault(__webpack_require__(/*! ./ko */ "./node_modules/netlify-cms-locales/dist/esm/ko/index.js"));

var _hr = _interopRequireDefault(__webpack_require__(/*! ./hr */ "./node_modules/netlify-cms-locales/dist/esm/hr/index.js"));

var _bg = _interopRequireDefault(__webpack_require__(/*! ./bg */ "./node_modules/netlify-cms-locales/dist/esm/bg/index.js"));

var _zh_Hans = _interopRequireDefault(__webpack_require__(/*! ./zh_Hans */ "./node_modules/netlify-cms-locales/dist/esm/zh_Hans/index.js"));

var _he = _interopRequireDefault(__webpack_require__(/*! ./he */ "./node_modules/netlify-cms-locales/dist/esm/he/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/netlify-cms-locales/dist/esm/it/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/netlify-cms-locales/dist/esm/it/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const it = {
  auth: {
    login: 'Accedi',
    loggingIn: "Effettuando l'accesso...",
    loginWithNetlifyIdentity: 'Accedi con Netlify Identity',
    loginWithBitbucket: 'Accedi con Bitbucket',
    loginWithGitHub: 'Accedi con GitHub',
    loginWithGitLab: 'Accedi con GitLab',
    errors: {
      email: 'Assicurati di inserire la tua mail.',
      password: 'Inserisci la tua password.',
      identitySettings: 'Impossibile accedere alle impostazioni di Identity. Quando usi git-gateway come backend assicurati di abilitare il servizio Itentity e Git Gateway.'
    }
  },
  app: {
    header: {
      content: 'Contenuti',
      workflow: 'Workflow',
      media: 'Media',
      quickAdd: 'Aggiunta veloce'
    },
    app: {
      errorHeader: 'Errore nel caricamento della configurazione CMS',
      configErrors: 'Errori di Configurazione',
      checkConfigYml: 'Controlla il tuo file config.yml.',
      loadingConfig: 'Caricando la configurazione...',
      waitingBackend: 'Attendi il backend...'
    },
    notFoundPage: {
      header: 'Non trovato'
    }
  },
  collection: {
    sidebar: {
      collections: 'Collezioni',
      searchAll: 'Cerca su tutto'
    },
    collectionTop: {
      viewAs: 'Vedi come',
      newButton: 'Nuovo/a %{collectionLabel}'
    },
    entries: {
      loadingEntries: 'Caricando le voci',
      cachingEntries: 'Cachando le voci',
      longerLoading: 'Questa operazione potrebbe durare diversi minuti'
    }
  },
  editor: {
    editorControl: {
      field: {
        optional: 'opzionale'
      }
    },
    editorControlPane: {
      widget: {
        required: '%{fieldLabel} è richiesto.',
        regexPattern: '%{fieldLabel} non corrisponde allo schema: %{pattern}.',
        processing: '%{fieldLabel} sta elaborando.',
        range: '%{fieldLabel} deve essere tra %{minValue} e %{maxValue}.',
        min: '%{fieldLabel} deve essere almeno %{minValue}.',
        max: '%{fieldLabel} deve essere %{maxValue} o meno.'
      }
    },
    editor: {
      onLeavePage: 'Sei sicuro di voler lasciare questa pagina?',
      onUpdatingWithUnsavedChanges: 'Hai delle modifiche non salvate, salvale prima di aggiornare lo status.',
      onPublishingNotReady: 'Aggiorna lo status a "Pronto" prima di pubblicare.',
      onPublishingWithUnsavedChanges: 'Hai delle modifiche non salvate, salvale prima di pubblicare.',
      onPublishing: 'Sei sicuro di voler pubblicare questa voce?',
      onUnpublishing: 'Sei sicuro di voler nascondere questa voce?',
      onDeleteWithUnsavedChanges: 'Sei sicuro di voler cancellare questa voce pubblicata e tutte le modifiche non salvate della tua sessione corrente?',
      onDeletePublishedEntry: 'Sei sicuro di voler cancellare questa voce pubblicata?',
      onDeleteUnpublishedChangesWithUnsavedChanges: 'Questo cancellerà tutte le modifiche non pubblicate di questa voce, come anche tutte le modifiche non salvate della sessione corrente. Vuoi ancora cancellarle?',
      onDeleteUnpublishedChanges: 'Tutte le modifiche non pubblicate a questa voce saranno cancellate. Vuoi ancora cancellarle?',
      loadingEntry: 'Caricando la voce...',
      confirmLoadBackup: 'Un backup locale è stato recuperato per questa voce, vuoi utilizzarlo?'
    },
    editorToolbar: {
      publishing: 'Pubblicando...',
      publish: 'Pubblica',
      published: 'Pubblicato',
      unpublish: 'Rimuovi dalla pubblicazione',
      duplicate: 'Duplica',
      unpublishing: 'Rimuovendo dalla pubblicazione...',
      publishAndCreateNew: 'Pubblica e creane uno nuovo',
      publishAndDuplicate: 'Pubblica e duplica',
      deleteUnpublishedChanges: 'Cancella le modifiche non pubblicate',
      deleteUnpublishedEntry: 'Cancella le voci non pubblicate',
      deletePublishedEntry: 'Cancella la voce pubblicata',
      deleteEntry: 'Cancella voce',
      saving: 'Salvando...',
      save: 'Salva',
      deleting: 'Cancellando...',
      updating: 'Aggiornando...',
      status: 'Status: %{status}',
      backCollection: ' Scrivendo nella sezione %{collectionLabel}',
      unsavedChanges: 'Modifiche non salvate',
      changesSaved: 'Modifiche salvate',
      draft: 'Bozza',
      inReview: 'In revisione',
      ready: 'Pronto',
      publishNow: 'Pubblica ora',
      deployPreviewPendingButtonLabel: "Controlla l'anteprima",
      deployPreviewButtonLabel: "Guarda l'anteprima",
      deployButtonLabel: 'Guarda Live'
    },
    editorWidgets: {
      image: {
        choose: "Scegli un'immagine",
        chooseDifferent: "Scegli un'immagine diversa",
        remove: 'Rimuovi immagine'
      },
      file: {
        choose: 'Scegli un file',
        chooseDifferent: 'Scegli un altro file',
        remove: 'Rimuovi il file'
      },
      unknownControl: {
        noControl: "Nessun controllo per il widget '%{widget}'."
      },
      unknownPreview: {
        noPreview: "Nessuna preview per il widget '%{widget}'."
      },
      headingOptions: {
        headingOne: 'Heading 1',
        headingTwo: 'Heading 2',
        headingThree: 'Heading 3',
        headingFour: 'Heading 4',
        headingFive: 'Heading 5',
        headingSix: 'Heading 6'
      }
    }
  },
  mediaLibrary: {
    mediaLibraryCard: {
      draft: 'Bozza'
    },
    mediaLibrary: {
      onDelete: 'Sei sicuro di voler cancellare il media selezionato?',
      fileTooLarge: 'File troppo grande.\nConfigurato per non accettare file piú grandi di %{size} kB.'
    },
    mediaLibraryModal: {
      loading: 'Caricamento...',
      noResults: 'Nessun risultato.',
      noAssetsFound: 'Nessun assets trovato.',
      noImagesFound: 'Nessuna immagine trovata.',
      private: 'Privato ',
      images: 'Immagini',
      mediaAssets: 'Media assets',
      search: 'Cerca...',
      uploading: 'Uploading...',
      upload: 'Upload',
      deleting: 'Deleting...',
      deleteSelected: 'Cancella selezionato',
      chooseSelected: 'Prendi selezionato'
    }
  },
  ui: {
    errorBoundary: {
      title: 'Errore',
      details: "C'è stato un errore - per favore ",
      reportIt: 'riportalo.',
      detailsHeading: 'Dettagli',
      recoveredEntry: {
        heading: 'Documento recuperato',
        warning: 'Per favore copia/incollalo da qualche parte prima di navigare altrove!',
        copyButtonLabel: 'Copialo negli appunti'
      }
    },
    settingsDropdown: {
      logOut: 'Esci'
    },
    toast: {
      onFailToLoadEntries: 'Caricamento voce non riuscito: %{details}',
      onFailToLoadDeployPreview: 'Caricamento della preview non riuscito: %{details}',
      onFailToPersist: 'Salvataggio della voce non riuscito: %{details}',
      onFailToDelete: 'Cancellazione della voce non riuscita: %{details}',
      onFailToUpdateStatus: 'Aggiornamento dello status non riuscito: %{details}',
      missingRequiredField: 'Oops, ti sei perso un campo obbligatorio. Per favore completalo prima di salvare.',
      entrySaved: 'Voce salvata',
      entryPublished: 'Voce pubblicata',
      entryUnpublished: 'Voce rimossa dalla pubblicazione',
      onFailToPublishEntry: 'Pubblicazione fallita: %{details}',
      onFailToUnpublishEntry: 'Rimozione della pubblicazione fallita: %{details}',
      entryUpdated: 'Status della voce aggiornato',
      onDeleteUnpublishedChanges: 'Modifiche non pubblicate cancellate',
      onFailToAuth: '%{details}'
    }
  },
  workflow: {
    workflow: {
      loading: 'Caricando le voci del Flusso Editoriale',
      workflowHeading: 'Flusso Editoriale',
      newPost: 'Nuovo Post',
      description: '%{smart_count} voce attende la revisione, %{readyCount} pronte per la pubblicazione. |||| %{smart_count} voci attendono la revisione, %{readyCount} pronte per la pubblicazione. ',
      dateFormat: 'MMMM D'
    },
    workflowCard: {
      lastChange: '%{date} da %{author}',
      lastChangeNoAuthor: '%{date}',
      lastChangeNoDate: 'da %{author}',
      deleteChanges: 'Cancella le modifiche',
      deleteNewEntry: 'Cancella nuova voce',
      publishChanges: 'Pubblica modifiche',
      publishNewEntry: 'Pubblica una nuova voce'
    },
    workflowList: {
      onDeleteEntry: 'Sei sicuro di voler cancellare questa voce?',
      onPublishingNotReadyEntry: 'Solo gli oggetti con lo status "Pronto" possono essere pubblicati. Sposta la Card nella colonna "Pronto" per abilitare la pubblicazione.',
      onPublishEntry: 'Sei sicuro di voler pubblicare questa voce?',
      draftHeader: 'Bozze',
      inReviewHeader: 'In Revisione',
      readyHeader: 'Pronto',
      currentEntries: '%{smart_count} voce |||| %{smart_count} voci'
    }
  }
};
var _default = it;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/netlify-cms-locales/dist/esm/ja/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/netlify-cms-locales/dist/esm/ja/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const ja = {
  auth: {
    login: 'ログイン',
    loggingIn: 'ログインしています...',
    loginWithNetlifyIdentity: 'Netlify Identity でログインする',
    loginWithAzure: 'Azure でログインする',
    loginWithBitbucket: 'Bitbucket でログインする',
    loginWithGitHub: 'GitHub でログインする',
    loginWithGitLab: 'GitLab でログインする',
    errors: {
      email: 'メールアドレスを確認してください。',
      password: 'パスワードを入力してください。',
      identitySettings: '認証情報にアクセスできませんでした。git-gateway backend を利用している場合は、認証サービスと Git Gateway が有効になっているかを確認してください。'
    }
  },
  app: {
    header: {
      content: 'コンテンツ',
      workflow: 'ワークフロー',
      media: 'メディア',
      quickAdd: '新規作成'
    },
    app: {
      errorHeader: 'CMS設定の読み込みエラー',
      configErrors: '設定エラー',
      checkConfigYml: 'config.ymlを確認してください。',
      loadingConfig: '設定を読み込んでいます...',
      waitingBackend: 'バックエンドの応答を待機しています...'
    },
    notFoundPage: {
      header: 'ページが見つかりません'
    }
  },
  collection: {
    sidebar: {
      collections: 'コレクション',
      allCollections: 'すべてのコレクション',
      searchAll: '検索',
      searchIn: '検索対象'
    },
    collectionTop: {
      sortBy: 'ソート',
      viewAs: '表示モード',
      newButton: '%{collectionLabel}を作成',
      ascending: '昇順',
      descending: '降順',
      searchResults: '「%{searchTerm}」の検索結果',
      searchResultsInCollection: '%{collection}内の「%{searchTerm}」の検索結果',
      filterBy: '絞り込み',
      groupBy: 'グルーピング'
    },
    entries: {
      loadingEntries: 'エントリを読み込み中',
      cachingEntries: 'エントリをキャッシュ中',
      longerLoading: '少々お待ちください',
      noEntries: 'エントリがありません'
    },
    groups: {
      other: 'その他',
      negateLabel: '%{label}以外'
    },
    defaultFields: {
      author: {
        label: '作成者'
      },
      updatedOn: {
        label: '最終更新'
      }
    }
  },
  editor: {
    editorControl: {
      field: {
        optional: '任意'
      }
    },
    editorControlPane: {
      widget: {
        required: '%{fieldLabel}は必須です。',
        regexPattern: '%{fieldLabel}が入力規則（%{pattern}）と一致しません。',
        processing: '%{fieldLabel}を処理しています。',
        range: '%{fieldLabel}は%{minValue}から%{maxValue}まで入力可能です。',
        min: '%{fieldLabel}の最小値は%{minValue}です。',
        max: '%{fieldLabel}の最大値は%{maxValue}です。',
        rangeCount: '%{fieldLabel}は%{minCount}個から%{maxCount}個まで選択してください。',
        rangeCountExact: '%{fieldLabel}はちょうど%{count}個選択してください。',
        rangeMin: '%{fieldLabel}は%{minCount}個以上選択してください。',
        rangeMax: '%{fieldLabel}は%{maxCount}個以下選択してください。',
        invalidPath: `'%{path}'は有効なパスではありません。`,
        pathExists: `'%{path}'というパスはすでに存在しています。`
      },
      i18n: {
        writingInLocale: '言語: %{locale}'
      }
    },
    editor: {
      onLeavePage: 'このページから遷移しますか？',
      onUpdatingWithUnsavedChanges: '変更した項目があります。ステータスを更新する前に保存してください。',
      onPublishingNotReady: '公開する前に、ステータスを「準備完了」に更新してください。',
      onPublishingWithUnsavedChanges: '変更した項目があります。公開する前に保存してください。',
      onPublishing: 'このエントリを公開しますか？',
      onUnpublishing: 'このエントリを未公開にしますか？',
      onDeleteWithUnsavedChanges: '保存されていない変更も削除されますが、この公開エントリを削除しますか？',
      onDeletePublishedEntry: 'この公開エントリを削除しますか？',
      onDeleteUnpublishedChangesWithUnsavedChanges: '保存されていない変更も削除されますが、このエントリの未公開の変更を削除しますか？',
      onDeleteUnpublishedChanges: '公開されていない変更も削除されますが、このエントリを削除しますか？',
      loadingEntry: 'エントリの読込中...',
      confirmLoadBackup: 'ローカルのバックアップが復旧できました。利用しますか？'
    },
    editorInterface: {
      toggleI18n: '言語を切り替える',
      togglePreview: 'プレビュー表示を切り替える',
      toggleScrollSync: 'スクロール同期を切り替える'
    },
    editorToolbar: {
      publishing: '公開しています...',
      publish: '公開',
      published: '公開済',
      unpublish: '未公開',
      duplicate: '複製',
      unpublishing: '未公開にしています...',
      publishAndCreateNew: '公開して新規作成',
      publishAndDuplicate: '公開して複製する',
      deleteUnpublishedChanges: '未公開の変更を削除',
      deleteUnpublishedEntry: '未公開エントリを削除',
      deletePublishedEntry: '公開エントリを削除',
      deleteEntry: 'エントリを削除',
      saving: '保存中...',
      save: '保存',
      statusInfoTooltipDraft: 'エントリのステータスは下書きに設定されています。最終決定してレビューに提出するには、ステータスを「レビュー中」に設定します。',
      statusInfoTooltipInReview: 'エントリはレビュー中なので、それ以上のアクションは必要ありません。ただし、レビュー中でも追加の変更を行うことができます。',
      deleting: '削除しています...',
      updating: '更新しています...',
      status: 'ステータス: %{status}',
      backCollection: '%{collectionLabel}のエントリを作成中',
      unsavedChanges: '未保存',
      changesSaved: '保存済',
      draft: '下書き',
      inReview: 'レビュー中',
      ready: '準備完了',
      publishNow: '公開する',
      deployPreviewPendingButtonLabel: 'プレビューのチェック',
      deployPreviewButtonLabel: 'プレビューを見る',
      deployButtonLabel: 'ライブで見る'
    },
    editorWidgets: {
      markdown: {
        bold: '太字',
        italic: '斜体',
        code: 'コード',
        link: 'リンク',
        linkPrompt: 'リンクのURLを入力してください',
        headings: '見出し',
        quote: '引用',
        bulletedList: '箇条書き',
        numberedList: '番号付きリスト',
        addComponent: 'コンポーネント追加',
        richText: 'リッチテキスト',
        markdown: 'マークダウン'
      },
      image: {
        choose: '画像を選択',
        chooseUrl: 'URLを入力する',
        replaceUrl: 'URLを変更する',
        promptUrl: '画像のURLを入力してください',
        chooseDifferent: '他の画像を選択',
        remove: '画像を削除'
      },
      file: {
        choose: 'ファイルを選択',
        chooseUrl: 'URLを入力する',
        replaceUrl: 'URLを変更する',
        promptUrl: 'ファイルのURLを入力してください',
        chooseDifferent: '他のファイルを選択',
        remove: 'ファイルを削除'
      },
      unknownControl: {
        noControl: "'%{widget}'はウィジェットとして利用できません。"
      },
      unknownPreview: {
        noPreview: "'%{widget}'のウィジェットにはプレビューがありません。"
      },
      headingOptions: {
        headingOne: '見出し 1',
        headingTwo: '見出し 2',
        headingThree: '見出し 3',
        headingFour: '見出し 4',
        headingFive: '見出し 5',
        headingSix: '見出し 6'
      },
      datetime: {
        now: '現時刻'
      }
    }
  },
  mediaLibrary: {
    mediaLibraryCard: {
      draft: '下書き',
      copy: 'コピー',
      copyUrl: 'URLをコピー',
      copyPath: 'パスをコピー',
      copyName: '名前をコピー',
      copied: 'コピーしました'
    },
    mediaLibrary: {
      onDelete: '選択しているデータを削除しますか？',
      fileTooLarge: 'ファイルサイズが大きすぎます。\n%{size} kB 以下にしてください。'
    },
    mediaLibraryModal: {
      loading: '読込中...',
      noResults: 'データがありません。',
      noAssetsFound: 'データがありません。',
      noImagesFound: 'データがありません。',
      private: 'プライベート',
      images: '画像',
      mediaAssets: 'メディア',
      search: '検索',
      uploading: 'アップロード中...',
      upload: 'アップロードする',
      download: 'ダウンロードする',
      deleting: '削除中...',
      deleteSelected: '削除する',
      chooseSelected: '選択する'
    }
  },
  ui: {
    default: {
      goBackToSite: 'サイトに戻る'
    },
    errorBoundary: {
      title: 'エラー',
      details: 'エラーが発生しました。',
      reportIt: 'レポートする',
      detailsHeading: '詳細',
      privacyWarning: 'エラーメッセージとデバッグのデータがレポートする前に表示されます。\n情報が正しいことを確認し、機密データが存在する場合は削除してください。',
      recoveredEntry: {
        heading: '復旧したエントリ',
        warning: '必要あれば、このページから遷移する前にコピーしてください。',
        copyButtonLabel: 'コピーする'
      }
    },
    settingsDropdown: {
      logOut: 'ログアウト'
    },
    toast: {
      onFailToLoadEntries: 'エントリの読み込みに失敗しました。%{details}',
      onFailToLoadDeployPreview: 'プレビューの読み込みに失敗しました。%{details}',
      onFailToPersist: 'エントリの保存に失敗しました。%{details}',
      onFailToDelete: 'エントリの削除に失敗しました。%{details}',
      onFailToUpdateStatus: 'エントリのステータス更新に失敗しました。%{details}',
      missingRequiredField: 'すべての必須項目を入力してください。',
      entrySaved: '保存しました。',
      entryPublished: '公開しました。',
      entryUnpublished: '未公開にしました。',
      onFailToPublishEntry: 'エントリの公開に失敗しました。%{details}',
      onFailToUnpublishEntry: 'エントリを未公開にするのに失敗しました。%{details}',
      entryUpdated: 'エントリのステータスを更新しました。',
      onDeleteUnpublishedChanges: '未公開の変更を削除しました。',
      onFailToAuth: '%{details}',
      onLoggedOut: 'ログアウトされています。データをバックアップし、再度ログインしてください。',
      onBackendDown: 'バックエンドのシステムが停止しています。%{details}'
    }
  },
  workflow: {
    workflow: {
      loading: 'ワークフロー内のエントリを読込中',
      workflowHeading: 'ワークフロー',
      newPost: '新規作成',
      description: '%{smart_count}件がレビュー中、%{readyCount}件が準備完了です。',
      dateFormat: 'M月D日'
    },
    workflowCard: {
      lastChange: '%{author}が%{date}に更新',
      lastChangeNoAuthor: '最終更新日：%{date}',
      lastChangeNoDate: '最終更新者：%{author}',
      deleteChanges: '変更を削除',
      deleteNewEntry: 'エントリを削除',
      publishChanges: '変更を公開',
      publishNewEntry: 'エントリを公開'
    },
    workflowList: {
      onDeleteEntry: 'このエントリを削除しますか？',
      onPublishingNotReadyEntry: '「準備完了」のエントリのみを公開できます。「準備完了」列にカードを移動し、ステータスを更新してください。',
      onPublishEntry: 'このエントリを公開しますか？',
      draftHeader: '下書き',
      inReviewHeader: 'レビュー中',
      readyHeader: '準備完了',
      currentEntries: '%{smart_count}件のエントリ'
    }
  }
};
var _default = ja;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/netlify-cms-locales/dist/esm/ko/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/netlify-cms-locales/dist/esm/ko/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const ko = {
  auth: {
    login: '로그인',
    loggingIn: '로그인 중...',
    loginWithNetlifyIdentity: 'Netlify Identity 로 로그인',
    loginWithBitbucket: 'Bitbucket 으로 로그인',
    loginWithGitHub: 'GitHub 로 로그인',
    loginWithGitLab: 'GitLab 으로 로그인',
    errors: {
      email: '반드시 이메일을 입력해 주세요.',
      password: '암호를 입력해 주세요.',
      identitySettings: '설정에 접근할 수 없습니다. git-gateway 백엔드 사용시 Identity service와 Git Gateway를 활성화 해야 합니다.'
    }
  },
  app: {
    header: {
      content: '콘텐츠',
      workflow: '워크플로우',
      media: '미디어',
      quickAdd: '빠른 추가'
    },
    app: {
      errorHeader: 'CMS 구성을 불러오는 중 오류가 발생했습니다.',
      configErrors: '구성 오류',
      checkConfigYml: 'config.yml 파일을 확인하세요.',
      loadingConfig: '구성 불러오는 중...',
      waitingBackend: '백엔드 기다리는 중...'
    },
    notFoundPage: {
      header: '찾을 수 없음'
    }
  },
  collection: {
    sidebar: {
      collections: '컬렉션',
      allCollections: '모든 컬렉션',
      searchAll: '모든 컬렉션에서 검색',
      searchIn: '다음 컬렉션에서 검색'
    },
    collectionTop: {
      sortBy: '정렬 기준',
      viewAs: '다음으로 보기',
      newButton: '새 %{collectionLabel} 항목',
      ascending: '오름차순',
      descending: '내림차순',
      searchResults: '"%{searchTerm}"에 대한 검색결과',
      searchResultsInCollection: '%{collection} 컬랙션에서 "%{searchTerm}"에 대한 검색결과',
      filterBy: '필터 기준'
    },
    entries: {
      loadingEntries: '항목 불러오는 중...',
      cachingEntries: '항목 캐시 중...',
      longerLoading: '몇 분 정도 걸릴 수 있습니다.',
      noEntries: '항목 없음'
    },
    defaultFields: {
      author: {
        label: '저자'
      },
      updatedOn: {
        label: '업데이트 시각'
      }
    }
  },
  editor: {
    editorControl: {
      field: {
        optional: '선택사항'
      }
    },
    editorControlPane: {
      widget: {
        required: '%{fieldLabel} 은(는) 필수입니다.',
        regexPattern: '%{fieldLabel} 이(가) %{pattern} 패턴과 일치하지 않습니다.',
        processing: '%{fieldLabel} 은(는) 처리중 입니다.',
        range: '%{fieldLabel} 은(는) 반드시 %{minValue} 에서 %{maxValue} 사이여야 합니다.',
        min: '%{fieldLabel} 은(는) 적어도 %{minValue} 이상 이여야 합니다.',
        max: '%{fieldLabel} 은(는) 최대 %{maxValue} 여야 합니다.',
        rangeCount: '%{fieldLabel} 개수는 %{minCount} 개 에서 %{maxCount} 개 사이여야 합니다.',
        rangeCountExact: '%{fieldLabel} 개수는 정확히 %{count} 개 여야 합니다.',
        rangeMin: '%{fieldLabel} 개수는 적어도 %{minCount} 개 이상 이여야 합니다.',
        rangeMax: '%{fieldLabel} 개수는 최대 %{maxCount} 개 여야 합니다.',
        invalidPath: `'%{path}' 은(는) 올바른 경로가 아닙니다.`,
        pathExists: `'%{path}' 경로가 이미 존재합니다.`
      }
    },
    editor: {
      onLeavePage: '이 페이지를 떠나시겠습니까?',
      onUpdatingWithUnsavedChanges: '저장하지 않은 변경사항이 있습니다. 상태 업데이트 전 먼저 저장하세요.',
      onPublishingNotReady: '게시 하기 앞서 상태를 "준비됨" 으로 업데이트 하세요.',
      onPublishingWithUnsavedChanges: '저장하지 않은 변경사항이 있습니다, 게시하기 전 먼저 저장하세요.',
      onPublishing: '이 항목을 게시하시곘습니까?',
      onUnpublishing: '이 항목을 게시 철회 하시겠습니까?',
      onDeleteWithUnsavedChanges: '현재 세션에서의 저장되지 않은 변경사항과 이 게시된 항목을 삭제하시겠습니까?',
      onDeletePublishedEntry: '이 게시된 항목을 삭제하시겠습니까?',
      onDeleteUnpublishedChangesWithUnsavedChanges: '이 항목의 게시되지 않은 모든 변경사항과 현재 세션의 저장되지 않은 변경사항이 삭제됩니다. 정말로 삭제하시겠습니까?',
      onDeleteUnpublishedChanges: '이 항목에 대해 게시되지 않은 변경사항이 삭제됩니다. 정말로 삭제하시겠습니까?',
      loadingEntry: '항목 불러오는 중...',
      confirmLoadBackup: '이 항목에 대한 로컬 백업이 복구되었습니다, 복구된 것으로 사용하시겠습니까?'
    },
    editorToolbar: {
      publishing: '게시 중...',
      publish: '게시',
      published: '게시됨',
      unpublish: '게시 철회',
      duplicate: '복제',
      unpublishing: '게시 철회 중...',
      publishAndCreateNew: '게시하고 새로 만들기',
      publishAndDuplicate: '게시하고 복제',
      deleteUnpublishedChanges: '게시 안된 변경사항 삭제',
      deleteUnpublishedEntry: '게시 안된 항목 삭제',
      deletePublishedEntry: '게시된 항목 삭제',
      deleteEntry: '항목 삭제',
      saving: '저장 중...',
      save: '저장',
      deleting: '삭제 중...',
      updating: '업데이트 중...',
      status: '상태: %{status}',
      backCollection: '%{collectionLabel} 컬랙션에 작성하는 중',
      unsavedChanges: '변경사항 저장되지 않음',
      changesSaved: '변경사항 저장됨',
      draft: '초안',
      inReview: '검토중',
      ready: '준비됨',
      publishNow: '지금 게시',
      deployPreviewPendingButtonLabel: '미리보기 확인',
      deployPreviewButtonLabel: '미리보기 보기',
      deployButtonLabel: '라이브 보기'
    },
    editorWidgets: {
      markdown: {
        richText: '리치 텍스트',
        markdown: '마크다운'
      },
      image: {
        choose: '이미지 선택',
        chooseDifferent: '다른 이미지 선택',
        remove: '이미지 삭제'
      },
      file: {
        choose: '파일 선택',
        chooseDifferent: '다른 파일 선택',
        remove: '파일 삭제'
      },
      unknownControl: {
        noControl: "'%{widget}' 위젝에 대한 컨트롤이 없습니다."
      },
      unknownPreview: {
        noPreview: "'%{widget}' 위젯에 대한 미리보기가 없습니다."
      },
      headingOptions: {
        headingOne: '제목 1',
        headingTwo: '제목 2',
        headingThree: '제목 3',
        headingFour: '제목 4',
        headingFive: '제목 5',
        headingSix: '제목 6'
      },
      datetime: {
        now: '현재시각'
      }
    }
  },
  mediaLibrary: {
    mediaLibraryCard: {
      draft: '초안'
    },
    mediaLibrary: {
      onDelete: '선택하신 미디어를 삭제하시겠습니까?',
      fileTooLarge: '파일이 너무 큽니다.\n%{size} kB 보다 큰 파일을 허용하지 않도록 구성되어 있습니다.'
    },
    mediaLibraryModal: {
      loading: '불러오는 중...',
      noResults: '일치 항목 없음.',
      noAssetsFound: '발견된 에셋 없음.',
      noImagesFound: '발견된 이미지 없음.',
      private: '개인 ',
      images: '이미지',
      mediaAssets: '미디어 에셋',
      search: '검색...',
      uploading: '업로드 중...',
      upload: '업로드',
      download: '다운로드',
      deleting: '삭제 중...',
      deleteSelected: '선택항목 삭제',
      chooseSelected: '선택한 것으로 결정'
    }
  },
  ui: {
    default: {
      goBackToSite: '사이트로 돌아가기'
    },
    errorBoundary: {
      title: '오류',
      details: '오류가 발생했습니다.',
      reportIt: 'GitHub에서 이슈를 열어 보고해 주세요.',
      detailsHeading: '자세한 내용',
      privacyWarning: '이슈를 열면 사전에 오류 메시지와 디버깅 데이터로 채워집니다.\n정보가 올바른지 확인하시고 민감한 정보가 있다면 지워주세요.',
      recoveredEntry: {
        heading: '복구된 문서',
        warning: '다른 곳으로 가시기 전에 이 내용을 꼭 복사해두세요!',
        copyButtonLabel: '클립보드로 복사'
      }
    },
    settingsDropdown: {
      logOut: '로그아웃'
    },
    toast: {
      onFailToLoadEntries: '항목 불러오기 실패: %{details}',
      onFailToLoadDeployPreview: '미리보기 불러오기 실패: %{details}',
      onFailToPersist: '항목 저장 실패: %{details}',
      onFailToDelete: '항목 삭제 실패: %{details}',
      onFailToUpdateStatus: '상태 업데이트 실패: %{details}',
      missingRequiredField: '이런! 필수 필드를 놓치셨습니다. 저장하기 전에 먼저 채우세요.',
      entrySaved: '항목 저장됨',
      entryPublished: '항목 게시됨',
      entryUnpublished: '항목 게시 철회됨',
      onFailToPublishEntry: '게시 실패: %{details}',
      onFailToUnpublishEntry: '항목 게시 철회 실해: %{details}',
      entryUpdated: '항목 상태 업데이트됨',
      onDeleteUnpublishedChanges: '게시되지 않은 변경사항 삭제됨',
      onFailToAuth: '%{details}',
      onLoggedOut: '로그아웃 하셨습니다, 데티어를 백업하시고 다시 로그인 하세요.',
      onBackendDown: '백엔드 서비스가 장애를 겪고 있습니다. 자세한 사항은 %{details} 을(를) 참고하세요.'
    }
  },
  workflow: {
    workflow: {
      loading: '편집 워크플로우의 항목을 불러오는 중',
      workflowHeading: '편집 워크플로우',
      newPost: '새 게시물',
      description: '%{smart_count}개 항목 검토 대기중, %{readyCount}개 항목 게시 준비 완료됨. |||| %{smart_count}개 항목 검토 대기중, %{readyCount}개 항목 게시 준비 완료됨. ',
      dateFormat: 'M월 D일'
    },
    workflowCard: {
      lastChange: '%{date} by %{author}',
      lastChangeNoAuthor: '%{date}',
      lastChangeNoDate: 'by %{author}',
      deleteChanges: '변경사항 삭제',
      deleteNewEntry: '새 항목 삭제',
      publishChanges: '변경사항 게시',
      publishNewEntry: '새 항목 게시'
    },
    workflowList: {
      onDeleteEntry: 'Are you sure you want to delete this entry?',
      onPublishingNotReadyEntry: '"준비됨" 상태의 항목만 게시할 수 있습니다. 게시를 활성화 하려면 카드를 "준비됨" 열에 끌어 놓으세요.',
      onPublishEntry: '이 항목을 게시하시곘습니까?',
      draftHeader: '초안',
      inReviewHeader: '검토 진행중',
      readyHeader: '준비됨',
      currentEntries: '%{smart_count}개 항목 |||| %{smart_count}개 항목'
    }
  }
};
var _default = ko;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/netlify-cms-locales/dist/esm/lt/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/netlify-cms-locales/dist/esm/lt/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const lt = {
  auth: {
    login: 'Prisijungti',
    loggingIn: 'Prisijungiama...',
    loginWithNetlifyIdentity: 'Prisijungti su Netlify Identity',
    loginWithAzure: 'Prisijungti su Azure',
    loginWithBitbucket: 'Prisijungti su Bitbucket',
    loginWithGitHub: 'Prisijungti su GitHub',
    loginWithGitLab: 'Prisijungti su GitLab',
    errors: {
      email: 'Įveskite savo elektroninį paštą.',
      password: 'Įveskite savo slaptažodį.',
      identitySettings: 'Deja, nepavyksta pasiekti Identity paslaugos nustatymus. Kai naudojate git-gateway backend metodą, įjunkite „Identity service“ ir „Git Gateway“.'
    }
  },
  app: {
    header: {
      content: 'Turinys',
      workflow: 'Darbo eiga',
      media: 'Medija',
      quickAdd: 'Sukurti naują'
    },
    app: {
      errorHeader: 'Klaida, neišėjo užkrauti/pasiekti CMS konfigūracijos failą',
      configErrors: 'Konfigūracijos (nustatymų) klaidos',
      checkConfigYml: 'Patikrinkite config.yml balsą.',
      loadingConfig: 'Kraunamas nustatymų (konfigūracijos) failas...',
      waitingBackend: 'Laukiama serverio...'
    },
    notFoundPage: {
      header: 'Nerasta'
    }
  },
  collection: {
    sidebar: {
      collections: 'Kolekcijos',
      allCollections: 'Visos kolekcijos',
      searchAll: 'Ieškoti viską',
      searchIn: 'Ieškoti tik čia'
    },
    collectionTop: {
      sortBy: 'Rikiavimo tvarka',
      viewAs: 'Peržiūrėti kaip',
      newButton: 'Nauja(s) %{collectionLabel}',
      ascending: 'Didėjimo tvarka (A-Z)',
      descending: 'Mažėjimo tvarka (Z-A)',
      searchResults: 'Paieškos rezultatai: „%{searchTerm}“',
      searchResultsInCollection: 'Paieškos rezultatai: „%{searchTerm}“ iš %{collection}',
      filterBy: 'Filtruoti',
      groupBy: 'Grupuoti'
    },
    entries: {
      loadingEntries: 'Kraunamas turinys...',
      cachingEntries: 'Talpinami įrašai...',
      longerLoading: 'Šis procesas gali trukti keletą minučių',
      noEntries: 'Nėra turinio'
    },
    groups: {
      other: 'Kita',
      negateLabel: 'Ne %{label}'
    },
    defaultFields: {
      author: {
        label: 'Autorius'
      },
      updatedOn: {
        label: 'Atnaujinta'
      }
    }
  },
  editor: {
    editorControl: {
      field: {
        optional: 'neprivaloma'
      }
    },
    editorControlPane: {
      widget: {
        required: 'Privaloma užpildyti laukelį %{fieldLabel}.',
        regexPattern: '%{fieldLabel} laukelis neatitiko konfigūracijoje nustatytų taisyklių: %{pattern}.',
        processing: 'Apdorojame %{fieldLabel}.',
        range: '%{fieldLabel} turi būti tarp %{minValue} ir %{maxValue}.',
        min: '%{fieldLabel} turi būti bent %{minValue}.',
        max: '%{fieldLabel} turi būti %{maxValue} arba mažiau.',
        rangeCount: '%{fieldLabel} turi būti tarp %{minCount} ir %{maxCount} elementų/-o.',
        rangeCountExact: '%{fieldLabel} turi turėti būtent tik %{count} elementų/-us.',
        rangeMin: '%{fieldLabel} turi būti bent %{minCount} elementų.',
        rangeMax: '%{fieldLabel} turi būti %{maxCount} arba mažiau elementų.',
        invalidPath: `'%{path}' nėra taisyklinga nuoroda/adresas į resursą/-us`,
        pathExists: `Adresas '%{path}' jau egzistuoja`
      },
      i18n: {
        writingInLocale: 'Rašome %{locale} kalboje'
      }
    },
    editor: {
      onLeavePage: 'Ar tikrai norite uždaryti šį puslapį?',
      onUpdatingWithUnsavedChanges: 'Turite neišsaugotų pakeitimų! Prašome išsaugoti prieš pakeičiant statusą.',
      onPublishingNotReady: 'Prieš publikuojant, privalote pakeisti statusą į „Paruošta“.',
      onPublishingWithUnsavedChanges: 'Yra neišsaugotų pakeitimų, prašome išsaugoti juos prieš publikuojant.',
      onPublishing: 'Ae tikrai norite publikuoti šį įrašą?',
      onUnpublishing: 'Tikrai norite panaikinti publikavimo statusą?',
      onDeleteWithUnsavedChanges: 'Tikrai norite panaikinti publikuotą įrašą ir Jūsų pakeiitmus iš dabartinės sesijos?',
      onDeletePublishedEntry: 'Tikrai norite ištrinti šį publikuotą įrašą?',
      onDeleteUnpublishedChangesWithUnsavedChanges: 'Tai ištrins visus nepublikuotus pakeitimus įraše, taip pat neišsaugotus pakeitimus per dabartinę sesiją. Vis tiek norite trinti?',
      onDeleteUnpublishedChanges: 'Visi Jūsų pakeitimai įraše bus panaikinti. Ar tikrai norite trinti jį?',
      loadingEntry: 'Kraunamas įrašas...',
      confirmLoadBackup: 'Radome Jūsų įrenginyje išsaugota juodraštį šiam įrašui, ar norite jį atgaivinti ir naudoti?'
    },
    editorToolbar: {
      publishing: 'Publikuojama...',
      publish: 'Publikuoti',
      published: 'Jau publikuota',
      unpublish: 'Atšaukti paskelbimą',
      duplicate: 'Daryti dublį',
      unpublishing: 'Nebeskelbiama...',
      publishAndCreateNew: 'Publikuoti šitą, po to kurti kažką naujo',
      publishAndDuplicate: 'Publikuoti šitą, po to kurti šito dublį',
      deleteUnpublishedChanges: 'Ištrinti publikuotus pakeitimus',
      deleteUnpublishedEntry: 'Ištrinti nepaskelbtą įrašą',
      deletePublishedEntry: 'Ištrinti paskelbtą įrašą',
      deleteEntry: 'Panaikinti įrašą',
      saving: 'Išsaugojama...',
      save: 'Išsaugoti',
      deleting: 'Trinama...',
      updating: 'Atnaujinama...',
      status: 'Statusą: %{status}',
      backCollection: ' Rašoma %{collectionLabel} kolekcijoje',
      unsavedChanges: 'Neišsaugoti pakeitimai',
      changesSaved: 'Pakeitimai išsauogti',
      draft: 'Juodraštis',
      inReview: 'Peržiūrima redakcijoje',
      ready: 'Paruošta',
      publishNow: 'Skelbti naują',
      deployPreviewPendingButtonLabel: 'Tikrinti, ar yra demonstracija',
      deployPreviewButtonLabel: 'Žiūrėti demonstraciją (netiesiogiai)',
      deployButtonLabel: 'Žiūrėti tiesiogiai tinklalapyje'
    },
    editorWidgets: {
      markdown: {
        bold: 'Paryškinta',
        italic: 'Pasvariu tekstu (italic)',
        code: 'Kodo šriftas',
        link: 'Nuoroda (adresas)',
        linkPrompt: 'Įveskite adresą čia',
        headings: 'Antraštės',
        quote: 'Citata',
        bulletedList: 'Sąrašas su ženkleliais',
        numberedList: 'Sąrašas su numeriais',
        addComponent: 'Pridėti komponentą',
        richText: 'Normali peržiūra',
        markdown: 'Rodyti be formatavimo (Markdown)'
      },
      image: {
        choose: 'Pasirinkti vaizdą',
        chooseDifferent: 'Pasirinkti skirtingą vaizdą',
        remove: 'Panaikinti vaizdą'
      },
      file: {
        choose: 'Pasirinkti failą',
        chooseDifferent: 'Pasirinkti kitą failą',
        remove: 'Panaikinti failą'
      },
      unknownControl: {
        noControl: "Klaida: valdiklis taisyklingai neveikia. No control for widget '%{widget}'."
      },
      unknownPreview: {
        noPreview: "Klaida: valdiklis taisyklingai neveikia. No preview for widget '%{widget}'."
      },
      headingOptions: {
        headingOne: 'Antraštė 1',
        headingTwo: 'Antraštė 2',
        headingThree: 'Antraštė 3',
        headingFour: 'Antraštė 4',
        headingFive: 'Antraštė 5',
        headingSix: 'Antraštė 6'
      },
      datetime: {
        now: 'Dabar'
      }
    }
  },
  mediaLibrary: {
    mediaLibraryCard: {
      draft: 'Juodraštis'
    },
    mediaLibrary: {
      onDelete: 'Ar jūs tikrai norite ištrinti pasirinktą mediją?',
      fileTooLarge: 'Failas per didelis.\nNustatymuose (konfigūracijoje) nurodyta, kad failai negali viršyti %{size} kB.'
    },
    mediaLibraryModal: {
      loading: 'Kraunama...',
      noResults: 'Nėra rezultatų.',
      noAssetsFound: 'Turinio nerasta.',
      noImagesFound: 'Vaizdų nerasta.',
      private: 'Privatu ',
      images: 'Vaizdai',
      mediaAssets: 'Medijos turinys',
      search: 'Paieška...',
      uploading: 'Keliama...',
      upload: 'Įkelti',
      download: 'Parsiųsti',
      deleting: 'Trinama...',
      deleteSelected: 'Ištrinti parinktus',
      chooseSelected: 'Pasirinkti parinktus'
    }
  },
  ui: {
    default: {
      goBackToSite: 'Grįžti atgal į tinklalapį'
    },
    errorBoundary: {
      title: 'Klaida',
      details: 'Buvo klaida - jeigu galite, prašome ',
      reportIt: 'pranešti apie techninę problemą „GitHub“ puslapyje.',
      detailsHeading: 'Detalės',
      privacyWarning: 'Opening an issue pre-populates it with the error message and debugging data.\nPlease verify the information is correct and remove sensitive data if exists.',
      recoveredEntry: {
        heading: 'Sugrąžintas dokumentas',
        warning: 'Prašome kopijuoti/įkluoti šitą kažkur prieš uždarant puslapį!',
        copyButtonLabel: 'Nukopijuoti į iškarpinę'
      }
    },
    settingsDropdown: {
      logOut: 'Atsijungti'
    },
    toast: {
      onFailToLoadEntries: 'Nepavyko užkrauti įrašo: %{details}',
      onFailToLoadDeployPreview: 'Nepavyko užkrauti demonstracijos lango: %{details}',
      onFailToPersist: 'Nepavyko išlaikyti įrašo: %{details}',
      onFailToDelete: 'Nepayvko ištrinti: %{details}',
      onFailToUpdateStatus: 'Nepavyko pakeisti statusą: %{details}',
      missingRequiredField: 'Pasitikrinkite — kažkurio (ar kelių) laukelių neužpildėte. Tai padarius galėsite išsaugoti įrašą.',
      entrySaved: 'Įrašas išsaugotos',
      entryPublished: 'Įrašas publikuotas',
      entryUnpublished: 'Įrašas nepublikuotas',
      onFailToPublishEntry: 'Nepavyko publikuoti: %{details}',
      onFailToUnpublishEntry: 'Nepavyko panaikinti publikavimą: %{details}',
      entryUpdated: 'Įrašo statusas pakeistas',
      onDeleteUnpublishedChanges: 'Nepublikuoti pakeitimai ištrinti',
      onFailToAuth: 'Nepavyko prisijungti: %{details}',
      onLoggedOut: 'Mes jus atjungėme. Jeigu yra poreikis, sukurkite duomenų atsarginę kopiją. Galite tiesiog iš naujo prisijungti.',
      onBackendDown: 'Deja, serveris šiuo metu neveikia. Bandykite iš naujo dar sykį arba šiek tiek vėliau. Detalės: %{details}'
    }
  },
  workflow: {
    workflow: {
      loading: 'Kraunamas turinys',
      workflowHeading: 'Redakcijos darbo eiga',
      newPost: 'Naujas įrašas',
      description: '%{smart_count} įrašas laukia Jūsų peržiūrėjimo, %{readyCount} jau gali būti publikuojamas. |||| %{smart_count} elementai laukia Jūsų peržiūrėjimo, %{readyCount} jau gali būti publikuojami. ',
      dateFormat: 'MMMM D'
    },
    workflowCard: {
      lastChange: '%{date} pagal %{author}',
      lastChangeNoAuthor: '%{date}',
      lastChangeNoDate: 'oagal %{author}',
      deleteChanges: 'Trinti keitimus',
      deleteNewEntry: 'Trinti naują įrašą',
      publishChanges: 'Publikuoti keitimus',
      publishNewEntry: 'Kurti naują įrašą'
    },
    workflowList: {
      onDeleteEntry: 'Ar tikrai norite ištrinti šį įrašą?',
      onPublishingNotReadyEntry: 'Tik įrašai su statusu „Paruošta“ gali būti patvirtinti. Prašome pajudinti įrašo kortelę link „Paruošta“ stulpelio, kad galėtumėte publikuoti įrašą.',
      onPublishEntry: 'Ar jūs tikrai norite publikuoti šį įrašą?',
      draftHeader: 'Juodraščiai',
      inReviewHeader: 'Peržiūrima redakcijoje',
      readyHeader: 'Paruošta',
      currentEntries: '%{smart_count} įrašas |||| %{smart_count} įrašai'
    }
  }
};
var _default = lt;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/netlify-cms-locales/dist/esm/nb_no/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/netlify-cms-locales/dist/esm/nb_no/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const nb_no = {
  auth: {
    login: 'Logg inn',
    loggingIn: 'Logger inn..',
    loginWithNetlifyIdentity: 'Logg på med Netlify Identity',
    loginWithBitbucket: 'Logg på med Bitbucket',
    loginWithGitHub: 'Logg på med GitHub',
    loginWithGitLab: 'Logg på med GitLab',
    errors: {
      email: 'Du må skrive inn e-posten din.',
      password: 'Du må skrive inn passordet ditt.',
      identitySettings: 'Fant ingen innstillinger for Identity. Hvis du skal bruke git-gateway må du skru på Identity service og Git Gateway.'
    }
  },
  app: {
    header: {
      content: 'Innhold',
      workflow: 'Arbeidsflyt',
      media: 'Media',
      quickAdd: 'Hurtiginnlegg'
    },
    app: {
      errorHeader: 'Det oppstod en feil under lastingen av CMS konfigurasjonen',
      configErrors: 'Konfigurasjonsfeil',
      checkConfigYml: 'Sjekk config.yml filen.',
      loadingConfig: 'Laster konfigurasjon...',
      waitingBackend: 'Venter på backend...'
    },
    notFoundPage: {
      header: 'Ikke funnet'
    }
  },
  collection: {
    sidebar: {
      collections: 'Samlinger',
      searchAll: 'Søk i alle'
    },
    collectionTop: {
      sortBy: 'Sorter etter',
      viewAs: 'Vis som',
      newButton: 'Ny %{collectionLabel}',
      ascending: 'Stigende',
      descending: 'Synkende'
    },
    entries: {
      loadingEntries: 'Laster innlegg...',
      cachingEntries: 'Mellomlagrer innlegg...',
      longerLoading: 'Dette kan ta opptil flere minutter',
      noEntries: 'Ingen innlegg'
    },
    defaultFields: {
      author: {
        label: 'Forfatter'
      },
      updatedOn: {
        label: 'Oppdatert'
      }
    }
  },
  editor: {
    editorControl: {
      field: {
        optional: 'valgfritt'
      }
    },
    editorControlPane: {
      widget: {
        required: '%{fieldLabel} er påkrevd.',
        regexPattern: '%{fieldLabel} samsvarer ikke med mønsteret: %{pattern}.',
        processing: '%{fieldLabel} blir prosessert.',
        range: '%{fieldLabel} må være mellom %{minValue} og %{maxValue}.',
        min: '%{fieldLabel} må minst være %{minValue}.',
        max: '%{fieldLabel} må være %{maxValue} eller mindre.',
        rangeCount: '%{fieldLabel} må ha mellom %{minCount} og %{maxCount} element(er).',
        rangeCountExact: '%{fieldLabel} må ha nøyaktig %{count} element(er).',
        rangeMin: '%{fieldLabel} må minst ha %{minCount} element(er).',
        rangeMax: '%{fieldLabel} må ha %{maxCount} eller færre element(er).'
      }
    },
    editor: {
      onLeavePage: 'Er du sikker på du vil navigere bort fra denne siden?',
      onUpdatingWithUnsavedChanges: 'Du må lagre endringene dine før du oppdaterer status.',
      onPublishingNotReady: 'Du må endre status til "Klar" før du publiserer.',
      onPublishingWithUnsavedChanges: 'Du må lagre endringene dine før du kan publisere.',
      onPublishing: 'Er du sikker på at du vil publisere?',
      onUnpublishing: 'Er du sikker på at du vil avpublisere innlegget?',
      onDeleteWithUnsavedChanges: 'Er du sikker på at du vil slette et publisert innlegg med tilhørende ulagrede endringer?',
      onDeletePublishedEntry: 'Er du sikker på at du vil slette dette publiserte innlegget?',
      onDeleteUnpublishedChangesWithUnsavedChanges: 'Handlingen sletter endringer som ikke er publisert eller lagret enda. Er du sikker på du vil fortsette?',
      onDeleteUnpublishedChanges: 'Alle endringer som ikke er publisert i dette innlegget vil gå tapt. Vil du fortsette?',
      loadingEntry: 'Laster innlegg...',
      confirmLoadBackup: 'Vil du gjenopprette tidligere endringer som ikke har blitt lagret?'
    },
    editorToolbar: {
      publishing: 'Publiserer...',
      publish: 'Publiser',
      published: 'Publisert',
      unpublish: 'Avpubliser',
      duplicate: 'Dupliser',
      unpublishing: 'Avpubliserer...',
      publishAndCreateNew: 'Publiser og lag nytt',
      publishAndDuplicate: 'Publiser og dupliser',
      deleteUnpublishedChanges: 'Slett upubliserte endringer',
      deleteUnpublishedEntry: 'Slett upublisert innlegg',
      deletePublishedEntry: 'Slett publisert innlegg',
      deleteEntry: 'Slett innlegg',
      saving: 'Lagrer...',
      save: 'Lagre',
      deleting: 'Sletter...',
      updating: 'Oppdaterer...',
      status: 'Status: %{status}',
      backCollection: ' Skriver i samlingen %{collectionLabel}',
      unsavedChanges: 'Ulagrede endringer',
      changesSaved: 'Endringer lagret',
      draft: 'Kladd',
      inReview: 'Til godkjenning',
      ready: 'Klar',
      publishNow: 'Publiser nå',
      deployPreviewPendingButtonLabel: 'Kontroller forhåndsvisning',
      deployPreviewButtonLabel: 'Vis forhåndsvisning',
      deployButtonLabel: 'Vis i produksjon'
    },
    editorWidgets: {
      markdown: {
        richText: 'Rik-tekst',
        markdown: 'Markdown'
      },
      image: {
        choose: 'Velg et bilde',
        chooseDifferent: 'Velg et annet bilde',
        remove: 'Fjern bilde'
      },
      file: {
        choose: 'Velg en fil',
        chooseDifferent: 'Velg en annen fil',
        remove: 'Fjern fil'
      },
      unknownControl: {
        noControl: "Ingen konfigurasjon for widget '%{widget}'."
      },
      unknownPreview: {
        noPreview: "Ingen forhåndsvisning tilgjengelig for '%{widget}'."
      },
      headingOptions: {
        headingOne: 'Overskrift 1',
        headingTwo: 'Overskrift 2',
        headingThree: 'Overskrift 3',
        headingFour: 'Overskrift 4',
        headingFive: 'Overskrift 5',
        headingSix: 'Overskrift 6'
      },
      datetime: {
        now: 'Nå'
      }
    }
  },
  mediaLibrary: {
    mediaLibraryCard: {
      draft: 'Kladd'
    },
    mediaLibrary: {
      onDelete: 'Er du sikker på at du vil slette markert element?',
      fileTooLarge: 'Filen er for stor.\nMaksimal konfiguert filstørrelse er %{size} kB.'
    },
    mediaLibraryModal: {
      loading: 'Laster...',
      noResults: 'Ingen resultater.',
      noAssetsFound: 'Ingen elementer funnet.',
      noImagesFound: 'Ingen bilder funnet.',
      private: 'Privat ',
      images: 'Bilder',
      mediaAssets: 'Mediebibliotek',
      search: 'Søk...',
      uploading: 'Laster opp...',
      upload: 'Last opp',
      download: 'Last ned',
      deleting: 'Sletter...',
      deleteSelected: 'Slett markert',
      chooseSelected: 'Velg markert'
    }
  },
  ui: {
    default: {
      goBackToSite: 'Gå tilbake til siden'
    },
    errorBoundary: {
      title: 'Feil',
      details: 'Det har oppstått en feil. Det er fint om du ',
      reportIt: 'oppretter et issue på GitHub.',
      detailsHeading: 'Detaljer',
      privacyWarning: 'Når du åpner et issue forhåndsutfylles feil og feilsøkingsdata. Dobbeltsjekk at informasjonen er riktig, og fjern eventuelle sensitive data.',
      recoveredEntry: {
        heading: 'Gjenopprettet dokument',
        warning: 'Det kan være lurt å ta kopi av innholdet før navigerer bort fra denne siden!',
        copyButtonLabel: 'Kopier til utklippstavle'
      }
    },
    settingsDropdown: {
      logOut: 'Logg ut'
    },
    toast: {
      onFailToLoadEntries: 'Kunne ikke laste innlegg: %{details}',
      onFailToLoadDeployPreview: 'Kunne ikke laste forhåndsvisning: %{details}',
      onFailToPersist: 'Kunne ikke lagre: %{details}',
      onFailToDelete: 'Kunne ikke slette: %{details}',
      onFailToUpdateStatus: 'Kunne ikke laste opp: %{details}',
      missingRequiredField: 'Oisann, ser ut som du glemte et påkrevd felt. Du må fylle det ut før du kan fortsette.',
      entrySaved: 'Innlegg lagret',
      entryPublished: 'Innlegg publisert',
      entryUnpublished: 'Innlegg avpublisert',
      onFailToPublishEntry: 'Kunne ikke publisere: %{details}',
      onFailToUnpublishEntry: 'Kunne ikke avpublisere: %{details}',
      entryUpdated: 'Innleggsstatus oppdatert',
      onDeleteUnpublishedChanges: 'Avpubliserte endringer slettet',
      onFailToAuth: '%{details}'
    }
  },
  workflow: {
    workflow: {
      loading: 'Laster innlegg for redaksjonell arbeidsflyt',
      workflowHeading: 'Redaksjonell arbeidsflyt',
      newPost: 'Nytt innlegg',
      description: '%{smart_count} innlegg trenger gjennomgang, og %{readyCount} er klar til publisering. |||| %{smart_count} innlegg trenger gjennomgang, og %{readyCount} er klar til publisering ',
      dateFormat: 'MMMM D'
    },
    workflowCard: {
      lastChange: '%{date} av %{author}',
      lastChangeNoAuthor: '%{date}',
      lastChangeNoDate: 'av %{author}',
      deleteChanges: 'Slett endringer',
      deleteNewEntry: 'Slett nytt innlegg',
      publishChanges: 'Publiser endringer',
      publishNewEntry: 'Publiser nytt innlegg'
    },
    workflowList: {
      onDeleteEntry: 'Er du sikker på du vil slette innlegget?',
      onPublishingNotReadyEntry: 'Du kan bare publisere innlegg i "Klar" kolonnen. Trekk kortet til riktig kolonne for å fortsette.',
      onPublishEntry: 'Er du sikker på du vil publisere innlegget?',
      draftHeader: 'Kladd',
      inReviewHeader: 'Gjennomgås',
      readyHeader: 'Klar',
      currentEntries: '%{smart_count} innlegg |||| %{smart_count} innlegg'
    }
  }
};
var _default = nb_no;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/netlify-cms-locales/dist/esm/nl/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/netlify-cms-locales/dist/esm/nl/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const nl = {
  auth: {
    login: 'Inloggen',
    loggingIn: 'Inloggen...',
    loginWithNetlifyIdentity: 'Inloggen met Netlify Identity',
    loginWithAzure: 'Inloggen met Azure',
    loginWithBitbucket: 'Inloggen met Bitbucket',
    loginWithGitHub: 'Inloggen met GitHub',
    loginWithGitLab: 'Inloggen met GitLab',
    errors: {
      email: 'Voer uw email in.',
      password: 'Voer uw wachtwoord in.',
      identitySettings: 'Netlify Identity instellingen niet gevonden. Wanneer u git-gateway als backend gebruikt moet u de Identity service en Git Gateway activeren in uw Netlify instellingen.'
    }
  },
  app: {
    header: {
      content: 'Inhoud',
      workflow: 'Workflow',
      media: 'Media',
      quickAdd: 'Snel toevoegen'
    },
    app: {
      errorHeader: 'Fout bij het laden van de CMS configuratie',
      configErrors: 'configuratiefouten',
      checkConfigYml: 'Controleer je config.yml bestand',
      loadingConfig: 'Configuatie laden...',
      waitingBackend: 'Wachten op server...'
    },
    notFoundPage: {
      header: 'Niet gevonden'
    }
  },
  collection: {
    sidebar: {
      collections: 'Inhoudstypen',
      allCollections: 'Alle inhoudstypen',
      searchAll: 'Zoeken',
      searchIn: 'Zoeken in'
    },
    collectionTop: {
      sortBy: 'Sorteer op',
      viewAs: 'Bekijk als',
      newButton: 'Voeg %{collectionLabel} toe',
      ascending: 'Oplopend',
      descending: 'Aflopend',
      searchResults: 'Zoekresultaten voor "%{searchTerm}"',
      searchResultsInCollection: 'Zoekresultaten voor "%{searchTerm}" in %{collection}',
      filterBy: 'Filteren op',
      groupBy: 'Groepeer op'
    },
    entries: {
      loadingEntries: 'Items laden',
      cachingEntries: 'Items cachen',
      longerLoading: 'Dit kan een paar minuten duren',
      noEntries: 'Geen items'
    },
    groups: {
      other: 'Anders',
      negateLabel: 'Geen %{label}'
    },
    defaultFields: {
      author: {
        label: 'Auteur'
      },
      updatedOn: {
        label: 'Bijgewerkt op'
      }
    }
  },
  editor: {
    editorControl: {
      field: {
        optional: 'optioneel'
      }
    },
    editorControlPane: {
      widget: {
        required: '%{fieldLabel} is vereist.',
        regexPattern: '%{fieldLabel} komt niet overeen met het patroon: %{pattern}.',
        processing: '%{fieldLabel} wordt verwerkt.',
        range: '%{fieldLabel} moet tussen %{minValue} en %{maxValue} liggen.',
        min: '%{fieldLabel} moet tenminste %{minValue} bevatten.',
        max: '%{fieldLabel} moet hoogstens %{maxValue} bevatten.',
        rangeCount: '%{fieldLabel} moet tussen %{minCount} en %{maxCount} item(s) bevatten.',
        rangeCountExact: '%{fieldLabel} moet exact %{count} item(s) bevatten.',
        rangeMin: '%{fieldLabel} moet tenminste %{minCount} item(s) bevatten.',
        rangeMax: '%{fieldLabel} moet hoogstens %{maxCount} item(s) bevatten.'
      },
      i18n: {
        writingInLocale: '%{locale} aan het bewerken'
      }
    },
    editor: {
      onLeavePage: 'Weet je zeker dat je deze pagina wilt verlaten?',
      onUpdatingWithUnsavedChanges: 'Er zijn nog niet-opgeslagen wijzigingen. Bewaar ze voordat u de status bijwerkt.',
      onPublishingNotReady: 'Stel de status in op "Voltooid" voordat u publiceert.',
      onPublishingWithUnsavedChanges: 'Er zijn nog niet-opgeslagen wijzigingen. Bewaar deze voordat u publiceert.',
      onPublishing: 'Weet u zeker dat u dit item wil publiceren?',
      onUnpublishing: 'Weet u zeker dat u de publicatie voor dit item ongedaan wilt maken?',
      onDeleteWithUnsavedChanges: 'Weet u zeker dat u dit gepubliceerde item en uw niet-opgeslagen wijzigingen uit de huidige sessie wilt verwijderen?',
      onDeletePublishedEntry: 'Weet u zeker dat u dit gepubliceerde item wilt verwijderen?',
      onDeleteUnpublishedChangesWithUnsavedChanges: 'Alle niet-gepubliceerde wijzigingen in dit item worden verwijderd, evenals uw niet-opgeslagen wijzigingen uit de huidige sessie. Wilt u nog steeds verwijderen?',
      onDeleteUnpublishedChanges: 'Alle niet-gepubliceerde wijzigingen in dit item worden verwijderd. Wilt u nog steeds verwijderen?',
      loadingEntry: 'Item laden...',
      confirmLoadBackup: 'Voor dit item is een lokale back-up hersteld, wilt u deze gebruiken?'
    },
    editorInterface: {
      toggleI18n: 'Wissel i18n',
      togglePreview: 'Wissel voorvertoning',
      toggleScrollSync: 'Synchroniseer scrollen'
    },
    editorToolbar: {
      publishing: 'Publiceren...',
      publish: 'Publiceer',
      published: 'Gepubliceerd',
      unpublish: 'Publicatie terugtrekken',
      duplicate: 'Dupliceren',
      unpublishing: 'Publicatie ongedaan maken...',
      publishAndCreateNew: 'Publiceer en maak nieuw item aan',
      publishAndDuplicate: 'Publiceer en dupliceer item',
      deleteUnpublishedChanges: 'Verwijder niet-gepubliceerde wijzigingen',
      deleteUnpublishedEntry: 'Niet-gepubliceerd item verwijderen',
      deletePublishedEntry: 'Gepubliceerd item verwijderen',
      deleteEntry: 'Item verwijderen',
      saving: 'Opslaan...',
      save: 'Opslaan',
      deleting: 'Verwijderen...',
      updating: 'Bijwerken...',
      status: 'Status: %{status}',
      backCollection: ' Terug naar %{collectionLabel}',
      unsavedChanges: 'Niet-opgeslagen wijzigingen',
      changesSaved: 'Wijzigingen opgeslagen',
      draft: 'Concept',
      inReview: 'Wordt beoordeeld',
      ready: 'Klaar',
      publishNow: 'Publiceer nu',
      deployPreviewPendingButtonLabel: 'Controleer of voorvertoning geladen is',
      deployPreviewButtonLabel: 'Bekijk voorvertoning',
      deployButtonLabel: 'Bekijk Live'
    },
    editorWidgets: {
      markdown: {
        bold: 'Vet',
        italic: 'Cursief',
        code: 'Code',
        link: 'Link',
        linkPrompt: 'Voer de URL in',
        headings: 'Hoofdtekst',
        quote: 'Quote',
        bulletedList: 'Lijst met opsommingstekens',
        numberedList: 'Genummerde lijst',
        addComponent: 'Voeg component toe',
        richText: 'Rijke tekst',
        markdown: 'Markdown'
      },
      image: {
        choose: 'Kies een afbeelding',
        chooseUrl: 'Voeg toe via URL',
        replaceUrl: 'Vervang met URL',
        promptUrl: 'Voer de URL van de afbeelding in',
        chooseDifferent: 'Kies een andere afbeelding',
        remove: 'Verwijder afbeelding'
      },
      file: {
        choose: 'Kies een bestand',
        chooseUrl: 'Voeg toe via URL',
        replaceUrl: 'Vervang met URL',
        promptUrl: 'Voer de URL van het bestand in',
        chooseDifferent: 'Kies een ander bestand',
        remove: 'Verwijder bestand'
      },
      unknownControl: {
        noControl: "Geen control voor widget '%{widget}'."
      },
      unknownPreview: {
        noPreview: "Geen voorvertoning voor widget '%{widget}'."
      },
      headingOptions: {
        headingOne: 'Heading 1',
        headingTwo: 'Heading 2',
        headingThree: 'Heading 3',
        headingFour: 'Heading 4',
        headingFive: 'Heading 5',
        headingSix: 'Heading 6'
      },
      datetime: {
        now: 'Nu'
      },
      list: {
        add: 'Voeg %{item} toe'
      }
    }
  },
  mediaLibrary: {
    mediaLibraryCard: {
      draft: 'Concept',
      copy: 'Kopieer',
      copyUrl: 'Kopieer URL',
      copyPath: 'Kopieer pad',
      copyName: 'Kopieer naam',
      copied: 'Gekopieerd'
    },
    mediaLibrary: {
      onDelete: 'Weet u zeker dat u de geselecteerde media wilt verwijderen?',
      fileTooLarge: 'Het bestand is te groot.\n De instellingen staan geen bestanden toe groter dan %{size} kB.'
    },
    mediaLibraryModal: {
      loading: 'Laden...',
      noResults: 'Geen resultaten.',
      noAssetsFound: 'Geen media gevonden.',
      noImagesFound: 'Geen afbeeldingen gevonden.',
      private: 'Privé',
      images: 'Afbeeldingen',
      mediaAssets: 'Media',
      search: 'Zoeken...',
      uploading: 'Uploaden...',
      upload: 'Nieuwe uploaden',
      download: 'Downloaden',
      deleting: 'Verwijderen...',
      deleteSelected: 'Verwijder selectie',
      chooseSelected: 'Gebruik selectie'
    }
  },
  ui: {
    default: {
      goBackToSite: 'Ga terug naar site'
    },
    errorBoundary: {
      title: 'Fout',
      details: 'Er is een fout opgetreden - ',
      reportIt: 'maak er alstublieft een melding van.',
      detailsHeading: 'Details',
      privacyWarning: 'Als u een probleem opent, wordt het vooraf gevuld met het foutbericht en foutopsporingsgegevens. \nControleer of de informatie correct is en verwijder, indien aanwezig, gevoelige gegevens.',
      recoveredEntry: {
        heading: 'Hersteld document',
        warning: 'Kopieer / plak dit ergens voordat u weggaat!',
        copyButtonLabel: 'Kopieer naar klembord'
      }
    },
    settingsDropdown: {
      logOut: 'Uitloggen'
    },
    toast: {
      onFailToLoadEntries: 'Kan item niet laden: %{details}',
      onFailToLoadDeployPreview: 'Kan voorvertoning niet laden: %{details}',
      onFailToPersist: 'Kan item niet opslaan: %{details}',
      onFailToDelete: 'Kan item niet verwijderen: %{details}',
      onFailToUpdateStatus: 'Kan status niet updaten: %{details}',
      missingRequiredField: 'Oeps, sommige verplichte velden zijn niet ingevuld.',
      entrySaved: 'Item opgeslagen',
      entryPublished: 'Item gepubliceerd',
      entryUnpublished: 'Publicatie teruggetrokken',
      onFailToPublishEntry: 'Kan item niet publiceren: %{details}',
      onFailToUnpublishEntry: 'Kan item niet terugtrekken: %{details}',
      entryUpdated: 'Status van item geüpdatet',
      onDeleteUnpublishedChanges: 'Niet-gepubliceerde wijzigingen verwijderd',
      onFailToAuth: '%{details}',
      onLoggedOut: 'Je bent uitgelogd, back-up alstublieft uw data log daarna in',
      onBackendDown: 'De backend-service ondervindt een storing. Zie% {details} voor meer informatie'
    }
  },
  workflow: {
    workflow: {
      loading: 'Redactionele Workflow items laden',
      workflowHeading: 'Redactionele Workflow',
      newPost: 'Nieuw bericht',
      description: '%{smart_count} item wacht op beoordeling, %{readyCount} klaar om live te gaan. |||| %{smart_count} items wachten op beoordeling, %{readyCount} klaar om live te gaan. ',
      dateFormat: 'MMMM D'
    },
    workflowCard: {
      lastChange: '%{date} door %{author}',
      lastChangeNoAuthor: '%{date}',
      lastChangeNoDate: 'door %{author}',
      deleteChanges: 'Verwijder wijzigingen',
      deleteNewEntry: 'Verwijder nieuw item',
      publishChanges: 'Publiceer wijzigingen',
      publishNewEntry: 'Publiceer nieuw item'
    },
    workflowList: {
      onDeleteEntry: 'Weet u zeker dat u dit item wilt verwijderen?',
      onPublishingNotReadyEntry: 'Alleen items met de status "Gereed" kunnen worden gepubliceerd. Sleep de kaart naar de kolom "Gereed" om publiceren mogelijk te maken.',
      onPublishEntry: 'Weet u zeker dat u dit item wilt publiceren?',
      draftHeader: 'Concepten',
      inReviewHeader: 'Wordt beoordeeld',
      readyHeader: 'Klaar',
      currentEntries: '%{smart_count} item |||| %{smart_count} items'
    }
  }
};
var _default = nl;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/netlify-cms-locales/dist/esm/nn_no/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/netlify-cms-locales/dist/esm/nn_no/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const nn_no = {
  auth: {
    login: 'Logg inn',
    loggingIn: 'Loggar inn..',
    loginWithNetlifyIdentity: 'Logg på med Netlify Identity',
    loginWithBitbucket: 'Logg på med Bitbucket',
    loginWithGitHub: 'Logg på med GitHub',
    loginWithGitLab: 'Logg på med GitLab',
    errors: {
      email: 'Du må skriva inn e-posten din.',
      password: 'Du må skriva inn passordet ditt.',
      identitySettings: 'Fann ingen innstillingar for Identity. Om du ynskjer å nytte git-gateway må du hugse å skru på Identity service og Git Gateway'
    }
  },
  app: {
    header: {
      content: 'Innhald',
      workflow: 'Arbeidsflyt',
      media: 'Media',
      quickAdd: 'Hurtiginnlegg'
    },
    app: {
      errorHeader: 'Noko gjekk gale under lastinga av CMS konfigurasjonen',
      configErrors: 'Konfigurasjonsfeil',
      checkConfigYml: 'Sjå over config.yml fila.',
      loadingConfig: 'Lastar konfigurasjon...',
      waitingBackend: 'Ventar på backend...'
    },
    notFoundPage: {
      header: 'Ikkje funnen'
    }
  },
  collection: {
    sidebar: {
      collections: 'Samlingar',
      searchAll: 'Søk i alle'
    },
    collectionTop: {
      sortBy: 'Sorter etter',
      viewAs: 'Vis som',
      newButton: 'Ny %{collectionLabel}',
      ascending: 'Stigande',
      descending: 'Synkande'
    },
    entries: {
      loadingEntries: 'Laster innlegg...',
      cachingEntries: 'Mellomlagrar innlegg...',
      longerLoading: 'Dette kan ta fleire minutt',
      noEntries: 'Ingen innlegg'
    },
    defaultFields: {
      author: {
        label: 'Forfatter'
      },
      updatedOn: {
        label: 'Oppdatert'
      }
    }
  },
  editor: {
    editorControl: {
      field: {
        optional: 'valfritt'
      }
    },
    editorControlPane: {
      widget: {
        required: '%{fieldLabel} krevast.',
        regexPattern: '%{fieldLabel} samsvarar ikkje med mønsteret: %{pattern}.',
        processing: '%{fieldLabel} vart prosessert.',
        range: '%{fieldLabel} må vera mellom %{minValue} og %{maxValue}.',
        min: '%{fieldLabel} må minst vera %{minValue}.',
        max: '%{fieldLabel} må vera %{maxValue} eller mindre.',
        rangeCount: '%{fieldLabel} må ha mellom %{minCount} og %{maxCount} element.',
        rangeCountExact: '%{fieldLabel} må ha nøyaktig %{count} element.',
        rangeMin: '%{fieldLabel} må minst ha %{minCount} element.',
        rangeMax: '%{fieldLabel} må ha %{maxCount} eller færre element.'
      }
    },
    editor: {
      onLeavePage: 'Er du sikker på at du vil navigere bort frå denne sida?',
      onUpdatingWithUnsavedChanges: 'Du må lagra endringane dine før du endrar status',
      onPublishingNotReady: 'Du må endre status til "Klar" før du publiserer',
      onPublishingWithUnsavedChanges: 'Du må laga endringane dine før du kan publisere.',
      onPublishing: 'Er du sikker på at vil publisere?',
      onUnpublishing: 'Er du sikker på at du vil avpublisere innlegget?',
      onDeleteWithUnsavedChanges: 'Er du sikkert på at du vil slette eit publisert innlegg med tilhøyrande ulagra endringar?',
      onDeletePublishedEntry: 'Er du sikker på at du vil slette dette publiserte innlegget?',
      onDeleteUnpublishedChangesWithUnsavedChanges: 'Handlinga slettar endringar som ikkje er publisert eller lagra. Vil du halde fram?',
      onDeleteUnpublishedChanges: 'Alle endringar som ikkje er publisert vil gå tapt. Vil du halde fram?',
      loadingEntry: 'Lastar innlegg...',
      confirmLoadBackup: 'Ynskjer du å gjennopprette tidlegare endringar som ikkje har verta lagra?'
    },
    editorToolbar: {
      publishing: 'Publiserer...',
      publish: 'Publiser',
      published: 'Publisert',
      unpublish: 'Avpubliser',
      duplicate: 'Dupliser',
      unpublishing: 'Avpubliserer...',
      publishAndCreateNew: 'Publiser og lag nytt',
      publishAndDuplicate: 'Publiser og dupliser',
      deleteUnpublishedChanges: 'Slett upubliserte endringar',
      deleteUnpublishedEntry: 'Slett upublisert innlegg',
      deletePublishedEntry: 'Slett publisert innlegg',
      deleteEntry: 'Slettar innlegg',
      saving: 'Lagrar...',
      save: 'Lagre',
      deleting: 'Slettar...',
      updating: 'Oppdaterer...',
      status: 'Status: %{status}',
      backCollection: ' Skriv i samlinga %{collectionLabel}',
      unsavedChanges: 'Ulagra endringar',
      changesSaved: 'Endringar lagret',
      draft: 'Kladd',
      inReview: 'Til godkjenning',
      ready: 'Klar',
      publishNow: 'Publiser no',
      deployPreviewPendingButtonLabel: 'Kontroller førehandsvisning',
      deployPreviewButtonLabel: 'Sjå førehandsvisning',
      deployButtonLabel: 'Sjå i produksjon'
    },
    editorWidgets: {
      markdown: {
        richText: 'Rik-tekst',
        markdown: 'Markdown'
      },
      image: {
        choose: 'Vel bilete',
        chooseDifferent: 'Vel eit anna bilete',
        remove: 'Fjern bilete'
      },
      file: {
        choose: 'Vel fil',
        chooseDifferent: 'Vel ei anna fil',
        remove: 'Fjern fil'
      },
      unknownControl: {
        noControl: "Ingen konfigurasjon for widget '%{widget}'."
      },
      unknownPreview: {
        noPreview: "Ingen førehandsvisning tilgjengeleg for '%{widget}'."
      },
      headingOptions: {
        headingOne: 'Overskrift 1',
        headingTwo: 'Overskrift 2',
        headingThree: 'Overskrift 3',
        headingFour: 'Overskrift 4',
        headingFive: 'Overskrift 5',
        headingSix: 'Overskrift 6'
      },
      datetime: {
        now: 'No'
      }
    }
  },
  mediaLibrary: {
    mediaLibraryCard: {
      draft: 'Kladd'
    },
    mediaLibrary: {
      onDelete: 'Er du sikker på at du vil slette markert element?',
      fileTooLarge: 'Fila er for stor.\nMaksimal konfiguert filstorleik er %{size} kB.'
    },
    mediaLibraryModal: {
      loading: 'Lastar...',
      noResults: 'Ingen resultat.',
      noAssetsFound: 'Ingen elementer funne.',
      noImagesFound: 'Ingen bilete funne.',
      private: 'Privat ',
      images: 'Bileter',
      mediaAssets: 'Mediebibliotek',
      search: 'Søk...',
      uploading: 'Lastar opp...',
      upload: 'Last opp',
      download: 'Last ned',
      deleting: 'Slettar...',
      deleteSelected: 'Slett markert',
      chooseSelected: 'Vel markert'
    }
  },
  ui: {
    default: {
      goBackToSite: 'Attende til sida'
    },
    errorBoundary: {
      title: 'Feil',
      details: 'Ein feil har oppstått. Det er fint om du ',
      reportIt: 'opnar eit issue på GitHub.',
      detailsHeading: 'Detaljer',
      privacyWarning: 'Når du opnar eit issue vart feil og feilsøkingsdata automatisk fylt ut. Hugs å sjå over at alt ser greitt ut, og ikkje inneheld sensitive data.',
      recoveredEntry: {
        heading: 'Gjenopprettet dokument',
        warning: 'Det kan vere lurt å ta kopi av innhaldet før du navigerer bort frå denne sida!',
        copyButtonLabel: 'Kopier til utklippstavle'
      }
    },
    settingsDropdown: {
      logOut: 'Logg ut'
    },
    toast: {
      onFailToLoadEntries: 'Kunne ikkje laste innlegg: %{details}',
      onFailToLoadDeployPreview: 'Kunne ikkje laste førehandsvisning: %{details}',
      onFailToPersist: 'Kunne ikkje lagre: %{details}',
      onFailToDelete: 'Kunne ikkje slette: %{details}',
      onFailToUpdateStatus: 'Kunne ikkje laste opp: %{details}',
      missingRequiredField: 'Oisann, gløymte du noko? Alle påkrevde felt må fyllast ut før du kan halde fram',
      entrySaved: 'Innlegg lagra',
      entryPublished: 'Innlegg publisert',
      entryUnpublished: 'Innlegg avpublisert',
      onFailToPublishEntry: 'Kunne ikkje publisere: %{details}',
      onFailToUnpublishEntry: 'Kunne ikkje avpublisere: %{details}',
      entryUpdated: 'Innleggsstatus oppdatert',
      onDeleteUnpublishedChanges: 'Avpubliserte endringar sletta',
      onFailToAuth: '%{details}'
    }
  },
  workflow: {
    workflow: {
      loading: 'Lastar innlegg for redaksjonell arbeidsflyt',
      workflowHeading: 'Redaksjonell arbeidsflyt',
      newPost: 'Nytt innlegg',
      description: '%{smart_count} innlegg treng gjennomgong, og %{readyCount} er klar til publisering. |||| %{smart_count} innlegg treng gjennomgong, og %{readyCount} er klar til publisering ',
      dateFormat: 'MMMM D'
    },
    workflowCard: {
      lastChange: '%{date} av %{author}',
      lastChangeNoAuthor: '%{date}',
      lastChangeNoDate: 'av %{author}',
      deleteChanges: 'Slett endringar',
      deleteNewEntry: 'Slett nytt innlegg',
      publishChanges: 'Publiser endringar',
      publishNewEntry: 'Publiser nytt innlegg'
    },
    workflowList: {
      onDeleteEntry: 'Er du sikker på du vil slette innlegget?',
      onPublishingNotReadyEntry: 'Du kan berre publisere innlegg i "Klar" kolonna. Dra kortet til riktig stad for å halde fram.',
      onPublishEntry: 'Er du sikker på du vil publisere innlegget?',
      draftHeader: 'Kladd',
      inReviewHeader: 'Gjennomgås',
      readyHeader: 'Klar',
      currentEntries: '%{smart_count} innlegg |||| %{smart_count} innlegg'
    }
  }
};
var _default = nn_no;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/netlify-cms-locales/dist/esm/pl/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/netlify-cms-locales/dist/esm/pl/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const pl = {
  auth: {
    login: 'Zaloguj się',
    loggingIn: 'Logowanie...',
    loginWithNetlifyIdentity: 'Zaloguj przez konto Netlify',
    loginWithAzure: 'Zaloguj przez konto Azure',
    loginWithBitbucket: 'Zaloguj przez Bitbucket',
    loginWithGitHub: 'Zaloguj przez GitHub',
    loginWithGitLab: 'Zaloguj przez GitLab',
    errors: {
      email: 'Wprowadź swój adres email',
      password: 'Wprowadź swoje hasło',
      identitySettings: 'Brak dostępu do ustawień tożsamości. Jeśli używasza backendu git-gateway upewnij się, że usługa tożsamośći (Identity service) oraz Git Gateway są włączone.'
    }
  },
  app: {
    header: {
      content: 'Treść',
      workflow: 'Przebieg redakcyjny',
      media: 'Multimedia',
      quickAdd: 'Szybkie dodawanie'
    },
    app: {
      errorHeader: 'Błąd ładowania konfiguracji CMS',
      configErrors: 'Błędy konfiguracji',
      checkConfigYml: 'Sprawdź plik config.yml.',
      loadingConfig: 'Ładowanie konfiguracji...',
      waitingBackend: 'Oczekiwanie na backend...'
    },
    notFoundPage: {
      header: 'Nie znaleziono'
    }
  },
  collection: {
    sidebar: {
      collections: 'Kolekcje',
      allCollections: 'Wszystkie kolekcje',
      searchAll: 'Wyszukaj wszystkie',
      searchIn: 'Wyszukaj w'
    },
    collectionTop: {
      sortBy: 'Sortuj po',
      viewAs: 'Wyświetl jako',
      newButton: 'Nowy %{collectionLabel}',
      ascending: 'Rosnąco',
      descending: 'Malejąco',
      searchResults: 'Wyszukaj wyniki dla %{searchTerm}',
      searchResultsInCollection: 'Wyszukaj wyniki dla %{searchTerm} w %{collection}',
      filterBy: 'Filtruj po',
      groupBy: 'Grupuj po'
    },
    entries: {
      loadingEntries: 'Ładowanie pozycji...',
      cachingEntries: 'Ładowanie pozycji do pamięci podręcznej...',
      longerLoading: 'To może zająć kilka minut',
      noEntries: 'Brak pozycji'
    },
    groups: {
      other: 'Inne',
      negateLabel: 'Nie %{label}'
    },
    defaultFields: {
      author: {
        label: 'Autor'
      },
      updatedOn: {
        label: 'Zaktualizowano'
      }
    }
  },
  editor: {
    editorControl: {
      field: {
        optional: 'opcjonalne'
      }
    },
    editorControlPane: {
      widget: {
        required: '%{fieldLabel} jest wymagane.',
        regexPattern: '%{fieldLabel} nie pasuje do formatu: %{pattern}.',
        processing: '%{fieldLabel} jest przetwarzane.',
        range: '%{fieldLabel} musi być pomiędzy %{minValue} a %{maxValue}.',
        min: '%{fieldLabel} musi być co najmniej %{minValue}.',
        max: '%{fieldLabel} musi być %{maxValue} lub mniej.',
        rangeCount: '%{fieldLabel} musi mieć od %{minCount} do %{maxCount} elementów',
        rangeCountExact: '%{fieldLabel} musi mieć %{count} elementów',
        rangeMin: '%{fieldLabel} musi mieć przynajmniej %{minCount} elementów',
        rangeMax: '%{fieldLabel} może mieć maksymalnie %{maxCount} elementów',
        invalidPath: `'%{path}' nie jest poprawna`,
        pathExists: `Ścieżka '%{path}' już istnieje`
      },
      i18n: {
        writingInLocale: 'Pisz w języku %{locale}'
      }
    },
    editor: {
      onLeavePage: 'Czy na pewno chcesz opuścić tę stronę?',
      onUpdatingWithUnsavedChanges: 'Masz niezapisane zmiany, proszę zapisz je przed aktualizacją statusu.',
      onPublishingNotReady: 'Proszę zaktualizować status do "Gotowe" przed publikacją.',
      onPublishingWithUnsavedChanges: 'Masz niezapisane zmiany, proszę zapisz je przed publikacją.',
      onPublishing: 'Czy na pewno chcesz opublikować tę pozycję?',
      onUnpublishing: 'Czy na pewno chcesz cofnąć publikację tej pozycji?',
      onDeleteWithUnsavedChanges: 'Czy na pewno chcesz usunąć tę opublikowaną pozycję, a także niezapisane zmiany z bieżącej sesji?',
      onDeletePublishedEntry: 'Czy na pewno chcesz usunąć tę opublikowaną pozycję?',
      onDeleteUnpublishedChangesWithUnsavedChanges: 'Spowoduje to usunięcie wszystkich nieopublikowanych zmian tej pozycji, a także niezapisanych zmian z bieżącej sesji. Czy nadal chcesz usunąć?',
      onDeleteUnpublishedChanges: 'Wszystkie nieopublikowane zmiany tej pozycji zostaną usunięte. Czy nadal chcesz usunąć?',
      loadingEntry: 'Ładowanie pozycji...',
      confirmLoadBackup: 'Odzyskano lokalną kopię zapasową tej pozycji, czy chcesz jej użyć?'
    },
    editorInterface: {
      toggleI18n: 'Przełącz i18n',
      togglePreview: 'Przełącz podgląd',
      toggleScrollSync: 'Synchroniczne przesuwanie'
    },
    editorToolbar: {
      publishing: 'Publikowanie...',
      publish: 'Opublikuj',
      published: 'Opublikowane',
      unpublish: 'Cofnij publikację',
      duplicate: 'Zduplikuj',
      unpublishing: 'Cofanie publikacji...',
      publishAndCreateNew: 'Opublikuj i dodaj nowy',
      publishAndDuplicate: 'Opublikuj i zduplikuj',
      deleteUnpublishedChanges: 'Usuń nieopublikowane zmiany',
      deleteUnpublishedEntry: 'Usuń nieopublikowaną pozycję',
      deletePublishedEntry: 'Usuń opublikowaną pozycję',
      deleteEntry: 'Usuń pozycję',
      saving: 'Zapisywanie...',
      save: 'Zapisz',
      statusInfoTooltipDraft: 'Dodano jako wersję roboczą. Aby zakończyć i oddać do recenzji zmień status na `Do recenzji`',
      statusInfoTooltipInReview: 'Wpis jest w trakcie recenzji, żadne dodatkowe akcje nie są wymagane. Jeśli chcesz, możesz jeszcze nanieść zmiany.',
      deleting: 'Usuwanie...',
      updating: 'Uaktualnianie...',
      status: 'Status: %{status}',
      backCollection: ' Edycja treści w zbiorze %{collectionLabel}',
      unsavedChanges: 'Niezapisane zmiany',
      changesSaved: 'Zmiany zapisane',
      draft: 'Wersja robocza',
      inReview: 'W recenzji',
      ready: 'Gotowe',
      publishNow: 'Opublikuj teraz',
      deployPreviewPendingButtonLabel: 'Sprawdź, czy istnieje podgląd',
      deployPreviewButtonLabel: 'Zobacz podgląd',
      deployButtonLabel: 'Zobacz na żywo'
    },
    editorWidgets: {
      markdown: {
        bold: 'Pogrubienie',
        italic: 'Kursywa',
        code: 'Kod',
        link: 'Link',
        linkPrompt: 'Dodaj adres URL',
        headings: 'Nagłówki',
        quote: 'Cytat',
        bulletedList: 'Lista punktowana',
        numberedList: 'Lista numerowana',
        addComponent: 'Dodaj komponent',
        richText: 'Tekst sformatowany',
        markdown: 'Markdown'
      },
      image: {
        choose: 'Wybierz zdjęcie',
        chooseUrl: 'Dodaj adres URL zdjęcia',
        replaceUrl: 'Zmień adres URL zdjęcia',
        promptUrl: 'Wprować adres URL zdjęcia',
        chooseDifferent: 'Zmień zdjęcie',
        remove: 'Usuń zdjęcie'
      },
      file: {
        choose: 'Wybierz plik',
        chooseUrl: 'Dodaj adres URL pliku',
        replaceUrl: 'Zmień adres URL zdjęcia',
        promptUrl: 'Dodaj adres URL pliku',
        chooseDifferent: 'Wybierz inny plik',
        remove: 'Usuń plik'
      },
      unknownControl: {
        noControl: "Brak kontrolki dla widżetu '%{widget}'."
      },
      unknownPreview: {
        noPreview: "Brak podglądu dla widżetu '%{widget}'."
      },
      headingOptions: {
        headingOne: 'Nagłówek 1',
        headingTwo: 'Nagłówek 2',
        headingThree: 'Nagłówek 3',
        headingFour: 'Nagłówek 4',
        headingFive: 'Nagłówek 5',
        headingSix: 'Nagłówek 6'
      },
      datetime: {
        now: 'Teraz'
      },
      list: {
        add: 'Dodaj %{item}',
        addType: 'Dodaj nowy %{item}'
      }
    }
  },
  mediaLibrary: {
    mediaLibraryCard: {
      draft: 'Wersja robocza',
      copy: 'Kopiuj',
      copyUrl: 'Kopiuj URL',
      copyPath: 'Kopiuj ścieżkę',
      copyName: 'Kopiuj nazwę',
      copied: 'Skopiowano'
    },
    mediaLibrary: {
      onDelete: 'Czy na pewno chcesz usunąć zaznaczone multimedia?',
      fileTooLarge: 'Plik jest za duży.\nUstawiony maksymalny rozmiar pliku: %{size} kB.'
    },
    mediaLibraryModal: {
      loading: 'Ładowanie...',
      noResults: 'Brak wyników.',
      noAssetsFound: 'Nie znaleziono żadnych zasobów.',
      noImagesFound: 'Nie znaleziono żadnych obrazów.',
      private: 'Prywatne ',
      images: 'Obrazy',
      mediaAssets: 'Zasoby multimedialne',
      search: 'Szukaj...',
      uploading: 'Przesyłanie...',
      upload: 'Prześlij nowe',
      download: 'Pobierz',
      deleting: 'Usuwanie...',
      deleteSelected: 'Usuń zaznaczone',
      chooseSelected: 'Wybierz zaznaczone'
    }
  },
  ui: {
    default: {
      goBackToSite: 'Wróć do strony'
    },
    errorBoundary: {
      title: 'Błąd',
      details: 'Wystąpił błąd - proszę ',
      reportIt: 'zgłoś to.',
      detailsHeading: 'Szczegóły',
      privacyWarning: 'Nowe zgłoszenie zostanie wstępnie wypełnione danymi o błędzie.\nZweryfikuj czy dane są poprawne i usuń wrażliwe informacje jeśli takie zostały dodane.',
      recoveredEntry: {
        heading: 'Odzyskany dokument',
        warning: 'Proszę skopiuj/wklej to gdzieś zanim opuścisz tę stronę!',
        copyButtonLabel: 'Skopiuj do schowka'
      }
    },
    settingsDropdown: {
      logOut: 'Wyloguj się'
    },
    toast: {
      onFailToLoadEntries: 'Nie udało się załadować pozycji: %{details}',
      onFailToLoadDeployPreview: 'Nie udało się załadować podglądu: %{details}',
      onFailToPersist: 'Nie udało się zapisać pozycji: %{details}',
      onFailToDelete: 'Nie udało się usunąć pozycji: %{details}',
      onFailToUpdateStatus: 'Nie udało się zaktualizować statusu: %{details}',
      missingRequiredField: 'Ups, przegapiłeś wymagane pole. Proszę uzupełnij przed zapisaniem.',
      entrySaved: 'Pozycja zapisana',
      entryPublished: 'Pozycja opublikowana',
      entryUnpublished: 'Cofnięto publikację pozycji',
      onFailToPublishEntry: 'Nie udało się opublikować: %{details}',
      onFailToUnpublishEntry: 'Nie udało się cofnąć publikacji pozycji: %{details}',
      entryUpdated: 'Zaktualizowano status pozycji',
      onDeleteUnpublishedChanges: 'Nieopublikowane zmiany zostały usunięte',
      onFailToAuth: '%{details}',
      onLoggedOut: 'Zostałeś wylogowany, utwórz kopię zapasową danych i zaloguj się ponownie.',
      onBackendDown: 'Usługa backendu uległa awarii. Zobacz więcej informacji: %{details}'
    }
  },
  workflow: {
    workflow: {
      loading: 'Ładowanie pozycji przebiegu redakcyjnego',
      workflowHeading: 'Przebieg redakcyjny',
      newPost: 'Nowa pozycja',
      description: '%{smart_count} pozycja oczekuje na recenzję, %{readyCount} oczekuje na publikacje. |||| %{smart_count} pozycje oczekują na recenzję, %{readyCount} oczekuje na publikacje. |||| %{smart_count} pozycji oczekuje na recenzje, %{readyCount} oczekuje na publikacje. ',
      dateFormat: 'MMMM D'
    },
    workflowCard: {
      lastChange: '%{date} przez %{author}',
      lastChangeNoAuthor: '%{date}',
      lastChangeNoDate: 'przez %{author}',
      deleteChanges: 'Usuń zmiany',
      deleteNewEntry: 'Usuń nową pozycję',
      publishChanges: 'Opublikuj zmiany',
      publishNewEntry: 'Opublikuj nową pozycję'
    },
    workflowList: {
      onDeleteEntry: 'Czy na pewno chcesz usunąć tę pozycję?',
      onPublishingNotReadyEntry: 'Tylko pozycje o statusie „Gotowe” mogą być publikowane. Przeciągnij proszę kartę do kolumny „Gotowe do publikacji”, aby umożliwić publikowanie.',
      onPublishEntry: 'Czy na pewno chcesz opublikować tę pozycję?',
      draftHeader: 'Wersje robocze',
      inReviewHeader: 'W recenzji',
      readyHeader: 'Gotowe do publikacji',
      currentEntries: '%{smart_count} pozycja |||| %{smart_count} pozycje |||| %{smart_count} pozycji'
    }
  }
};
var _default = pl;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/netlify-cms-locales/dist/esm/pt/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/netlify-cms-locales/dist/esm/pt/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const pt = {
  auth: {
    login: 'Entrar',
    loggingIn: 'Entrando...',
    loginWithNetlifyIdentity: 'Entrar com o Netlify Identity',
    loginWithAzure: 'Entrar com o Azure',
    loginWithBitbucket: 'Entrar com o Bitbucket',
    loginWithGitHub: 'Entrar com o GitHub',
    loginWithGitLab: 'Entrar com o GitLab',
    errors: {
      email: 'Certifique-se de inserir seu e-mail.',
      password: 'Por favor, insira sua senha.',
      identitySettings: 'Não foi possível acessar as configurações de identidade. Ao usar o back-end git-gateway, certifique-se de habilitar o serviço Identity e o Git Gateway.'
    }
  },
  app: {
    header: {
      content: 'Conteúdos',
      workflow: 'Fluxo de Trabalho',
      media: 'Mídia',
      quickAdd: 'Adição rápida'
    },
    app: {
      errorHeader: 'Erro ao carregar a configuração do CMS',
      configErrors: 'Erros de configuração',
      checkConfigYml: 'Verifique o arquivo config.yml.',
      loadingConfig: 'Carregando configuração...',
      waitingBackend: 'Aguardando o back-end...'
    },
    notFoundPage: {
      header: 'Não Encontrado'
    }
  },
  collection: {
    sidebar: {
      collections: 'Coleções',
      allCollections: 'Todas as Coleções',
      searchAll: 'Pesquisar em todos',
      searchIn: 'Pesquisar em'
    },
    collectionTop: {
      sortBy: 'Ordenar por',
      viewAs: 'Visualizar como',
      newButton: 'Novo(a) %{collectionLabel}',
      ascending: 'Ascendente',
      descending: 'Descendente',
      searchResults: 'Resultados da busca por "%{searchTerm}"',
      searchResultsInCollection: 'Resultados da busca por "%{searchTerm}" em %{collection}',
      filterBy: 'Filtrar por',
      groupBy: 'Agrupar por'
    },
    entries: {
      loadingEntries: 'Carregando Entradas',
      cachingEntries: 'Armazenando Entradas em Cache',
      longerLoading: 'Isso pode levar alguns minutos',
      noEntries: 'Nenhuma Entrada'
    },
    groups: {
      other: 'Outro',
      negateLabel: 'Não %{label}'
    },
    defaultFields: {
      author: {
        label: 'Autor'
      },
      updatedOn: {
        label: 'Atualizado em'
      }
    }
  },
  editor: {
    editorControl: {
      field: {
        optional: 'opcional'
      }
    },
    editorControlPane: {
      widget: {
        required: '%{fieldLabel} é obrigatório.',
        regexPattern: '%{fieldLabel} não corresponde com o padrão: %{pattern}.',
        processing: '%{fieldLabel} está processando.',
        range: '%{fieldLabel} deve estar entre %{minValue} e %{maxValue}.',
        min: '%{fieldLabel} deve ser, no mínimo, %{minValue}.',
        max: '%{fieldLabel} deve ser igual ou menor que %{maxValue}.',
        rangeCount: '%{fieldLabel} deve ser entre %{minCount} e %{maxCount}.',
        rangeCountExact: '%{fieldLabel} deve ser exatamente %{count}.',
        rangeMin: '%{fieldLabel} deve ter, pelo menos, %{minCount}.',
        rangeMax: '%{fieldLabel} deve ter %{maxCount} ou menos.',
        invalidPath: `'%{path}' não é um caminho válido`,
        pathExists: `O caminho '%{path}' já existe`
      },
      i18n: {
        writingInLocale: 'Escrevendo em %{locale}'
      }
    },
    editor: {
      onLeavePage: 'Tem certeza que deseja sair desta página?',
      onUpdatingWithUnsavedChanges: 'Há mudanças não salvas. Por favor, salve-as antes de atualizar o status.',
      onPublishingNotReady: 'Por favor, altere o status para "Pronto" antes de publicar.',
      onPublishingWithUnsavedChanges: 'Há mudanças não salvas. Por favor, salve-as antes de publicar.',
      onPublishing: 'Tem certeza que deseja publicar essa entrada?',
      onUnpublishing: 'Tem certeza que deseja cancelar a publicação dessa entrada?',
      onDeleteWithUnsavedChanges: 'Tem certeza de que deseja excluir esta entrada publicada, bem como as alterações não salvas da sessão atual?',
      onDeletePublishedEntry: 'Tem certeza de que deseja excluir esta entrada publicada?',
      onDeleteUnpublishedChangesWithUnsavedChanges: 'Isso excluirá todas as alterações não publicadas nesta entrada, bem como as alterações não salvas da sessão atual. Você ainda deseja excluir?',
      onDeleteUnpublishedChanges: 'Todas as alterações não publicadas nesta entrada serão excluídas. Você ainda deseja excluir?',
      loadingEntry: 'Carregando entrada...',
      confirmLoadBackup: 'Um backup local foi recuperado para esta entrada. Deseja usá-lo?'
    },
    editorInterface: {
      toggleI18n: 'Mudar i18n',
      togglePreview: 'Mudar pré-visualização',
      toggleScrollSync: 'Sincronizar rolagem'
    },
    editorToolbar: {
      publishing: 'Publicando...',
      publish: 'Publicar',
      published: 'Publicado',
      unpublish: 'Despublicar',
      duplicate: 'Duplicado',
      unpublishing: 'Despublicando...',
      publishAndCreateNew: 'Publicar e criar novo(a)',
      publishAndDuplicate: 'Publicar e duplicar',
      deleteUnpublishedChanges: 'Excluir alterações não publicadas',
      deleteUnpublishedEntry: 'Excluir entrada não publicada',
      deletePublishedEntry: 'Excluir entrada publicada',
      deleteEntry: 'Excluir entrada',
      saving: 'Salvando...',
      save: 'Salvar',
      statusInfoTooltipDraft: "Entrada definida como rascunho. Para finalizar e enviá-la a revisão, mude seu estado para 'Em revisão'",
      statusInfoTooltipInReview: 'Entrada está sendo revisada, nenhuma ação extra é requirida. Porém, você ainda pode fazer mudanças adicionais enquanto ela está sendo revisada.',
      deleting: 'Excluindo...',
      updating: 'Atualizando...',
      status: 'Status: %{status}',
      backCollection: ' Escrevendo na coleção %{collectionLabel}',
      unsavedChanges: 'Alterações não salvas',
      changesSaved: 'Alterações salvas',
      draft: 'Rascunho',
      inReview: 'Em revisão',
      ready: 'Pronto',
      publishNow: 'Publicar agora',
      deployPreviewPendingButtonLabel: 'Verificar se há Pré-visualização',
      deployPreviewButtonLabel: 'Ver Pré-visualização',
      deployButtonLabel: 'Ver em Produção'
    },
    editorWidgets: {
      markdown: {
        bold: 'Negrito',
        italic: 'Itálico',
        code: 'Código',
        link: 'Link',
        linkPrompt: 'Insira a URL do link',
        headings: 'Cabeçalho',
        quote: 'Citação',
        bulletedList: 'Lista Pontilhada',
        numberedList: 'Lista Numerada',
        addComponent: 'Adicionar Componente',
        richText: 'Rich Text',
        markdown: 'Markdown'
      },
      image: {
        choose: 'Escolha uma imagem',
        chooseUrl: 'Inserir de uma URL',
        replaceUrl: 'Substituir com uma URL',
        promptUrl: 'Insira a URL da imagem',
        chooseDifferent: 'Escolha uma imagem diferente',
        remove: 'Remover imagem'
      },
      file: {
        choose: 'Escolha um arquivo',
        chooseUrl: 'Inserir de uma URL',
        replaceUrl: 'Substituir com uma URL',
        promptUrl: 'Insira a URL do arquivo',
        chooseDifferent: 'Escolha um arquivo diferente',
        remove: 'Remover arquivo'
      },
      unknownControl: {
        noControl: "Nenhum controle para o widget '%{widget}'."
      },
      unknownPreview: {
        noPreview: "Nenhuma pré-visualização para o widget '%{widget}'."
      },
      headingOptions: {
        headingOne: 'Título nível 1',
        headingTwo: 'Título nível 2',
        headingThree: 'Título nível 3',
        headingFour: 'Título nível 4',
        headingFive: 'Título nível 5',
        headingSix: 'Título nível 6'
      },
      datetime: {
        now: 'Agora'
      },
      list: {
        add: 'Adicionar %{item}',
        addType: 'Adicionar %{item} item'
      }
    }
  },
  mediaLibrary: {
    mediaLibraryCard: {
      draft: 'Rascunho',
      copy: 'Copiar',
      copyUrl: 'Copiar URL',
      copyPath: 'Copiar Caminho',
      copyName: 'Copiar Nome',
      copied: 'Copiado'
    },
    mediaLibrary: {
      onDelete: 'Tem certeza de que deseja excluir a mídia selecionada?',
      fileTooLarge: 'Arquivo muito grande.\nConfigurado para não permitir arquivos maiores que %{size} kB.'
    },
    mediaLibraryModal: {
      loading: 'Carregando...',
      noResults: 'Nenhum resultado.',
      noAssetsFound: 'Nenhum recurso encontrado.',
      noImagesFound: 'Nenhuma imagem encontrada.',
      private: 'Privado ',
      images: 'Imagens',
      mediaAssets: 'Recursos de mídia',
      search: 'Pesquisar...',
      uploading: 'Enviando...',
      upload: 'Enviar novo',
      download: 'Download',
      deleting: 'Excluindo...',
      deleteSelected: 'Excluir selecionado',
      chooseSelected: 'Escolher selecionado'
    }
  },
  ui: {
    default: {
      goBackToSite: 'Voltar ao site'
    },
    errorBoundary: {
      title: 'Erro',
      details: 'Ocorreu um erro - por favor ',
      reportIt: 'relatar.',
      detailsHeading: 'Detalhes',
      privacyWarning: 'Ao abrir uma issue, ela é preenchida com a mensagem de erro e o log de debug.\nPor favor, verifique se a informação está correta e remova dados sensíveis caso existam.',
      recoveredEntry: {
        heading: 'Documento recuperado',
        warning: 'Copie/cole isso em algum lugar antes de sair!',
        copyButtonLabel: 'Copiar para área de transferência'
      }
    },
    settingsDropdown: {
      logOut: 'Sair'
    },
    toast: {
      onFailToLoadEntries: 'Falha ao carregar a entrada: %{details}',
      onFailToLoadDeployPreview: 'Falha ao carregar a pré-visualização: %{details}',
      onFailToPersist: 'Falha ao persistir na entrada: %{details}',
      onFailToDelete: 'Falha ao excluir a entrada: %{details}',
      onFailToUpdateStatus: 'Falha ao atualizar status: %{details}',
      missingRequiredField: 'Ops, você perdeu um campo obrigatório. Por favor, preencha antes de salvar.',
      entrySaved: 'Entrada salva',
      entryPublished: 'Entrada publicada',
      entryUnpublished: 'Entrada despublicada',
      onFailToPublishEntry: 'Falha ao publicar: %{details}',
      onFailToUnpublishEntry: 'Falha ao cancelar a publicação da entrada: %{details}',
      entryUpdated: 'Status da entrada atualizado',
      onDeleteUnpublishedChanges: 'Alterações não publicadas excluídas',
      onFailToAuth: '%{details}',
      onLoggedOut: 'Você foi desconectado. Por favor, salve as alterações e entre novamente',
      onBackendDown: 'O serviço de back-end está fora do ar. Veja %{details} para mais informações'
    }
  },
  workflow: {
    workflow: {
      loading: 'Carregando entradas do Fluxo de Trabalho Editorial',
      workflowHeading: 'Fluxo de Trabalho Editorial',
      newPost: 'Nova Publicação',
      description: '%{smart_count} entrada aguardando revisão, %{readyCount} pronta para publicação. |||| %{smart_count} entradas aguardando revisão, %{readyCount} pronta para publicação.',
      dateFormat: 'MMMM D'
    },
    workflowCard: {
      lastChange: '%{date} por %{author}',
      lastChangeNoAuthor: '%{date}',
      lastChangeNoDate: 'por %{author}',
      deleteChanges: 'Excluir alterações',
      deleteNewEntry: 'Excluir nova entrada',
      publishChanges: 'Publicar alterações',
      publishNewEntry: 'Publicar nova entrada'
    },
    workflowList: {
      onDeleteEntry: 'Tem certeza de que deseja excluir esta entrada?',
      onPublishingNotReadyEntry: 'Somente itens com o status "Pronto" podem ser publicados. Arraste o cartão para a coluna "Pronto" para poder publicar.',
      onPublishEntry: 'Tem certeza de que quer publicar esta entrada?',
      draftHeader: 'Rascunhos',
      inReviewHeader: 'Em Revisão',
      readyHeader: 'Prontos',
      currentEntries: '%{smart_count} entrada |||| %{smart_count} entradas'
    }
  }
};
var _default = pt;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/netlify-cms-locales/dist/esm/ro/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/netlify-cms-locales/dist/esm/ro/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const ro = {
  auth: {
    login: 'Autentifică-te',
    loggingIn: 'Te autentificăm...',
    loginWithNetlifyIdentity: 'Autentifică-te cu Netlify Identity',
    loginWithAzure: 'Autentifică-te cu Azure',
    loginWithBitbucket: 'Autentifică-te cu Bitbucket',
    loginWithGitHub: 'Autentifică-te cu GitHub',
    loginWithGitLab: 'Autentifică-te cu GitLab',
    errors: {
      email: 'Asigură-te că ai introdus email-ul.',
      password: 'Te rugăm introdu parola.',
      identitySettings: 'Nu s-a putut accesa serviciul de autentificare. Dacă folosești git-gateway, asigură-te că ai activat serviciul Identity și Git-Gateway.'
    }
  },
  app: {
    header: {
      content: 'Conținut',
      workflow: 'Workflow',
      media: 'Fișiere',
      quickAdd: 'Adaugă'
    },
    app: {
      errorHeader: 'A apărut o eroare cu configurarea CMS-ului.',
      configErrors: 'Au apărut erori de configurare.',
      checkConfigYml: 'Verifică fișierul de configurare (config.yml).',
      loadingConfig: 'Se încarcă configurările...',
      waitingBackend: 'Așteptăm după backend...'
    },
    notFoundPage: {
      header: 'Pagină inexistentă.'
    }
  },
  collection: {
    sidebar: {
      collections: 'Colecții',
      allCollections: 'Toate colecțiile',
      searchAll: 'Căutare',
      searchIn: 'Caută în'
    },
    collectionTop: {
      sortBy: 'Sortează',
      viewAs: 'Vizualizează ca',
      newButton: 'Adaugă %{collectionLabel}',
      ascending: 'Ascendent',
      descending: 'Descendent',
      searchResults: 'Rezultatele căutării pentru "%{searchTerm}"',
      searchResultsInCollection: 'Rezultatele căutării pentru "%{searchTerm}" în %{collection}',
      filterBy: 'Filtrează după',
      groupBy: 'Grupează după'
    },
    entries: {
      loadingEntries: 'Se încarcă intrările...',
      cachingEntries: 'Se salvează temporar intrările...',
      longerLoading: 'Ar putea dura câteva minute.',
      noEntries: 'Nu există intrări.'
    },
    groups: {
      other: 'Altul',
      negateLabel: 'Nu %{label}'
    },
    defaultFields: {
      author: {
        label: 'Autor'
      },
      updatedOn: {
        label: 'Actualizat la'
      }
    }
  },
  editor: {
    editorControl: {
      field: {
        optional: 'opțional'
      }
    },
    editorControlPane: {
      widget: {
        required: '%{fieldLabel}” este obligatoriu.',
        regexPattern: '%{fieldLabel} nu se potrivește după modelul: %{pattern}.',
        processing: '%{fieldLabel} se procesează.',
        range: '%{fieldLabel} poate fi între %{minValue} și %{maxValue}.',
        min: '%{fieldLabel} poate fi mai mare sau egal cu %{minValue}.',
        max: '%{fieldLabel} poate fi mai mic sau egal cu %{maxValue}.',
        rangeCount: '%{fieldLabel} poate avea între %{minCount} și %{maxCount} intrări.',
        rangeCountExact: '%{fieldLabel} trebuie să conțină exact %{count} intrări.',
        minCount: '%{fieldLabel} trebuie să conțină cel puțin %{minCount} intrări.',
        maxCount: '%{fieldLabel} trebuie să conțină cel mult %{maxCount} intrări.',
        invalidPath: `'%{path}' nu este o cale validă.`,
        pathExists: `Calea '%{path}' există deja.`
      },
      i18n: {
        writingInLocale: 'Scrii în limba %{locale}'
      }
    },
    editor: {
      onLeavePage: 'Ești sigur/ă că dorești să părăsești pagina?',
      onUpdatingWithUnsavedChanges: 'Există modificări nesalvate! Te rugăm salvează înainte de a actualiza statusul.',
      onPublishingNotReady: 'Actualizează statusul la „Gata” înainte de publicare.',
      onPublishingWithUnsavedChanges: 'Există modificări nesalvate, salvează-le înainte de publicare.',
      onPublishing: 'Ești sigur/ă că dorești să publici acest articol?',
      onUnpublishing: 'Ești sigur/ă că dorești să anulezi publicarea acestui articol?',
      onDeleteWithUnsavedChanges: 'Ești sigur/ă că dorești să ștergi această publicare, dar și modificările nesalvate din sesiunea curentă?',
      onDeletePublishedEntry: 'Ești sigur/ă că dorești să ștergi această publicare?',
      onDeleteUnpublishedChangesWithUnsavedChanges: 'Se vor șterge toate modificările nepublicate din aceast articol și modificările nesalvate din sesiunea curentă. Continui cu ștergerea?',
      onDeleteUnpublishedChanges: 'Toate modificările nepublicate din acest articol vor fi șterse. Continui cu ștergerea?',
      loadingEntry: 'Se încarcă...',
      confirmLoadBackup: 'Un backup local a fost recuperat pentru această intrare, dorești să îl folosești?'
    },
    editorInterface: {
      toggleI18n: 'Comută limba',
      togglePreview: 'Comută previzualizarea',
      toggleScrollSync: 'Sincronizează scroll-ul'
    },
    editorToolbar: {
      publishing: 'Se publică...',
      publish: 'Publicare',
      published: 'Publicat',
      unpublish: 'Anulează publicarea',
      duplicate: 'Duplifică',
      unpublishing: 'Se anulează publicarea...',
      publishAndCreateNew: 'Publicare apoi crează altul',
      publishAndDuplicate: 'Publicare apoi duplifică',
      deleteUnpublishedChanges: 'Șterge modificări nepublicate',
      deleteUnpublishedEntry: 'Șterge intrarea nepublicată',
      deletePublishedEntry: 'Șterge intrarea publicată',
      deleteEntry: 'Șterge intrare',
      saving: 'Se salvează...',
      save: 'Salvează',
      deleting: 'Se șterge...',
      updating: 'Se actualizează...',
      status: 'Status: %{status}',
      backCollection: ' Scrii în colecția „%{collectionLabel}”',
      unsavedChanges: 'Modificări nesalvate',
      changesSaved: 'Modificări salvate',
      draft: 'Ciornă',
      inReview: 'În revizuire',
      ready: 'Gata',
      publishNow: 'Publicare',
      deployPreviewPendingButtonLabel: 'Verifică publicare',
      deployPreviewButtonLabel: 'Previzualizare',
      deployButtonLabel: 'Vezi publicarea'
    },
    editorWidgets: {
      markdown: {
        bold: 'Bold',
        italic: 'Italic',
        code: 'Cod sursă',
        link: 'Link',
        linkPrompt: 'Scrie URL-ul',
        headings: 'Titluri',
        quote: 'Citat',
        bulletedList: 'Listă cu puncte',
        numberedList: 'Listă cu numere',
        addComponent: 'Adaugă componentă',
        richText: 'Rich Text',
        markdown: 'Markdown'
      },
      image: {
        choose: 'Alege o imagine',
        chooseUrl: 'Inserează din URL',
        replaceUrl: 'Schimbă cu URL',
        promptUrl: 'Introdu URL-ul imaginii',
        chooseDifferent: 'Alege altă imagine',
        remove: 'Șterge imaginea'
      },
      file: {
        choose: 'Alege un fișier',
        chooseUrl: 'Inserează din URL',
        replaceUrl: 'Schimbă cu URL',
        promptUrl: 'Introdu URL-ul fișierului',
        chooseDifferent: 'Alege alt fișier',
        remove: 'Șterge fișier'
      },
      unknownControl: {
        noControl: 'Widget-ul „%{widget}” nu are configurări valabile.'
      },
      unknownPreview: {
        noPreview: 'Nu există previzualizare pentru widget-ul „%{widget}”.'
      },
      headingOptions: {
        headingOne: 'Titlu 1',
        headingTwo: 'Titlu 2',
        headingThree: 'Titlu 3',
        headingFour: 'Titlu 4',
        headingFive: 'Titlu 5',
        headingSix: 'Titlu 6'
      },
      datetime: {
        now: 'Acum'
      }
    }
  },
  mediaLibrary: {
    mediaLibraryCard: {
      draft: 'Ciornă',
      copy: 'Copiază',
      copyUrl: 'Copiază URL',
      copyPath: 'Copiază cale',
      copyName: 'Copiaza nume',
      copied: 'Copiat'
    },
    mediaLibrary: {
      onDelete: 'Ești sigur/ă că dorești să ștergi fișierul selectat?',
      fileTooLarge: 'Fișier prea mare.\nConfigurarea nu permite fișiere mai mari de %{size} KB.'
    },
    mediaLibraryModal: {
      loading: 'Se încarcă...',
      noResults: 'Nu sunt rezultate.',
      noAssetsFound: 'Nu s-au găsit fișiere.',
      noImagesFound: 'Nu s-au găsit imagini.',
      private: 'Privat ',
      images: 'Imagini',
      mediaAssets: 'Fișiere media',
      search: 'Caută...',
      uploading: 'Se încarcă...',
      upload: 'Încarcă',
      download: 'Descarcă',
      deleting: 'Se șterge...',
      deleteSelected: 'Șterge fișierele selectate',
      chooseSelected: 'Alege fișierele selectate'
    }
  },
  ui: {
    default: {
      goBackToSite: 'Înapoi la site'
    },
    errorBoundary: {
      title: 'Eroare',
      details: 'A apărut o eroare - te rugăm ',
      reportIt: 'Deschide o problemă pe GitHub.',
      detailsHeading: 'Detalii',
      privacyWarning: 'Problema deschisă va fi precompletată cu mesajul de eroare și datele de depanare.\nTe rugăm verifică datele să fie corecte și șterge orice fel de date personale.',
      recoveredEntry: {
        heading: 'Document recuperat',
        warning: 'Te rugăm să faci copy/paste la datele acestea undeva înainte de ieșire!',
        copyButtonLabel: 'Copiază în clipboard'
      }
    },
    settingsDropdown: {
      logOut: 'Ieșire din cont'
    },
    toast: {
      onFailToLoadEntries: 'A eșuat încărcarea intrării: %{details}',
      onFailToLoadDeployPreview: 'A eșuat încărcarea previzualizării: %{details}',
      onFailToPersist: 'A eșuat persistarea intrării: %{details}',
      onFailToDelete: 'A eșuat ștergerea intrării: %{details}',
      onFailToUpdateStatus: 'A eșuat actualizarea status-ului: %{details}',
      missingRequiredField: 'Oops, ai ratat un câmp obligatoriu. Completează-l pentru a salva.',
      entrySaved: 'Intrare salvată',
      entryPublished: 'Intrare publicată',
      entryUnpublished: 'Publicare anulată',
      onFailToPublishEntry: 'A eșuat publicarea: %{details}',
      onFailToUnpublishEntry: 'A eșuat anularea publicării: %{details}',
      entryUpdated: 'S-a actualizat status-ul intrării',
      onDeleteUnpublishedChanges: 'Modificări nepublicate șterse',
      onFailToAuth: '%{details}',
      onLoggedOut: 'Ai fost delogat, te rugăm salvează orice date și autentifică-te din nou.',
      onBackendDown: 'Există probleme la server. Vezi %{details} pentru mai multe informații.'
    }
  },
  workflow: {
    workflow: {
      loading: 'Se încarcă intrările din Workflow-ul Editorial',
      workflowHeading: 'Workflow Editorial',
      newPost: 'Postare nouă',
      description: '%{smart_count} pregătite de revizuire, %{readyCount} gata de publicare. |||| %{smart_count} pregătite de revizuire, %{readyCount} gata de publicare. ',
      dateFormat: 'MMMM D'
    },
    workflowCard: {
      lastChange: '%{date} de %{author}',
      lastChangeNoAuthor: '%{date}',
      lastChangeNoDate: 'de %{author}',
      deleteChanges: 'Modificări șterse',
      deleteNewEntry: 'Șterge intrarea nouă',
      publishChanges: 'Publicare modificări',
      publishNewEntry: 'Publicare intrare nouă'
    },
    workflowList: {
      onDeleteEntry: 'Ești sigur/ă că dorești ștergerea intrării?',
      onPublishingNotReadyEntry: 'Numai intrări cu status-ul „Gata” pot fi publicate. Trage un card în coloana „Gata” pentru a putea publica.',
      onPublishEntry: 'Ești sigur/ă că dorești să faci publicarea?',
      draftHeader: 'Ciorne',
      inReviewHeader: 'În revizuire',
      readyHeader: 'Gata',
      currentEntries: '%{smart_count} intrări |||| %{smart_count} intrări'
    }
  }
};
var _default = ro;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/netlify-cms-locales/dist/esm/ru/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/netlify-cms-locales/dist/esm/ru/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const ru = {
  auth: {
    login: 'Войти',
    loggingIn: 'Вхожу...',
    loginWithNetlifyIdentity: 'Войти через Netlify Identity',
    loginWithAzure: 'Войти через Azure',
    loginWithBitbucket: 'Войти через Bitbucket',
    loginWithGitHub: 'Войти через GitHub',
    loginWithGitLab: 'Войти через GitLab',
    errors: {
      email: 'Введите ваш email.',
      password: 'Введите пароль.',
      identitySettings: 'Нет доступа к настройкам. Если используете git-gateway, убедитесь, что включили Identity service и Git Gateway.'
    }
  },
  app: {
    header: {
      content: 'Записи',
      workflow: 'Документооборот',
      media: 'Медиафайлы',
      quickAdd: 'Быстрое добавление'
    },
    app: {
      errorHeader: 'Ошибка загрузки конфигурации CMS',
      configErrors: 'Ошибки конфигурации',
      checkConfigYml: 'Проверьте свой config.yml файл.',
      loadingConfig: 'Загрузка конфигурации…',
      waitingBackend: 'Ожидание ответа от бэкенда…'
    },
    notFoundPage: {
      header: 'Не найден'
    }
  },
  collection: {
    sidebar: {
      collections: 'Коллекции',
      allCollections: 'Все коллекции',
      searchAll: 'Искать повсюду',
      searchIn: 'Искать в'
    },
    collectionTop: {
      sortBy: 'Сортировать по',
      viewAs: 'Вид',
      newButton: 'Создать %{collectionLabel}',
      ascending: 'По возрастанию',
      descending: 'По убывания',
      searchResults: 'Результаты по запросу "%{searchTerm}"',
      searchResultsInCollection: 'Результаты по запросу "%{searchTerm}" в %{collection}',
      filterBy: 'Фильтровать по',
      groupBy: 'Группировать по'
    },
    entries: {
      loadingEntries: 'Загрузка записей…',
      cachingEntries: 'Кэширование записей…',
      longerLoading: 'Это может занять несколько минут',
      noEntries: 'Нет записей'
    },
    groups: {
      other: 'Другая',
      negateLabel: 'Не %{label}'
    },
    defaultFields: {
      author: {
        label: 'Автор'
      },
      updatedOn: {
        label: 'Обновлено'
      }
    }
  },
  editor: {
    editorControl: {
      field: {
        optional: 'необязательный'
      }
    },
    editorControlPane: {
      widget: {
        required: 'Необходимо указать значение поля %{fieldLabel}.',
        regexPattern: 'Значение поля %{fieldLabel} не соответствует шаблону: %{pattern}.',
        processing: 'Значение поля %{fieldLabel} обрабатывается…',
        range: 'Значение поля %{fieldLabel} должно быть между %{minValue} и %{maxValue}.',
        min: 'Значение поля %{fieldLabel} должно быть не менее %{minValue}.',
        max: 'Значение поля %{fieldLabel} должно быть %{maxValue} или менее.',
        rangeCount: '%{fieldLabel} должно содержать от %{minCount} до %{maxCount} элементов.',
        rangeCountExact: '%{fieldLabel} должно содержать строго %{count} элементов.',
        rangeMin: '%{fieldLabel} должно содержать не менее %{minCount} элементов.',
        rangeMax: '%{fieldLabel} должно содержать %{maxCount} или менее элементов.',
        invalidPath: `Путь '%{path}' содежрит ошибки`,
        pathExists: `Путь '%{path}' уже существует`
      },
      i18n: {
        writingInLocale: 'Пишем на %{locale}'
      }
    },
    editor: {
      onLeavePage: 'Вы уверены, что хотите покинуть эту страницу?',
      onUpdatingWithUnsavedChanges: 'У вас есть несохраненные изменения, сохраните их перед обновлением статуса.',
      onPublishingNotReady: 'Пожалуйста, измените статус на «Готов» перед публикацией.',
      onPublishingWithUnsavedChanges: 'У вас есть несохраненные изменения, сохраните их перед публикацией.',
      onPublishing: 'Вы уверены, что хотите опубликовать эту запись?',
      onUnpublishing: 'Вы уверены, что хотите отменить публикацию этой записи?',
      onDeleteWithUnsavedChanges: 'Вы уверены, что хотите удалить эту опубликованную запись, а также несохраненные изменения из текущего сеанса?',
      onDeletePublishedEntry: 'Вы уверены, что хотите удалить эту опубликованную запись?',
      onDeleteUnpublishedChangesWithUnsavedChanges: 'Это удалит все неопубликованные изменения в этой записи, а также ваши несохраненные изменения из текущего сеанса. Вы все еще хотите удалить?',
      onDeleteUnpublishedChanges: 'Все неопубликованные изменения в этой записи будут удалены. Вы все еще хотите удалить?',
      loadingEntry: 'Загрузка записи…',
      confirmLoadBackup: 'Для этой записи была восстановлена локальная резервная копия, хотите ли вы ее использовать?'
    },
    editorToolbar: {
      publishing: 'Публикация…',
      publish: 'Опубликовать',
      published: 'Опубликовано',
      unpublish: 'Отменить публикацию',
      duplicate: 'Дублировать',
      unpublishing: 'Отмена публикации…',
      publishAndCreateNew: 'Опубликовать и создать новую',
      publishAndDuplicate: 'Опубликовать и дублировать',
      deleteUnpublishedChanges: 'Удалить неопубликованные изменения',
      deleteUnpublishedEntry: 'Удалить неопубликованную запись',
      deletePublishedEntry: 'Удалить опубликованную запись',
      deleteEntry: 'Удалить запись',
      saving: 'Сохранение…',
      save: 'Сохранить',
      deleting: 'Удаление…',
      updating: 'Обновление…',
      status: 'Cтатус: %{status}',
      backCollection: 'Запись в коллекцию %{collectionLabel}',
      unsavedChanges: 'Несохраненные изменения',
      changesSaved: 'Изменения сохранены',
      draft: 'Черновик',
      inReview: 'На рассмотрении',
      ready: 'Одобрен',
      publishNow: 'Опубликовать сейчас',
      deployPreviewPendingButtonLabel: 'Проверить предварительный просмотр',
      deployPreviewButtonLabel: 'Предварительный просмотр',
      deployButtonLabel: 'Просмотр'
    },
    editorWidgets: {
      markdown: {
        bold: 'Полужиный',
        italic: 'Курсив',
        code: 'Код',
        link: 'Ссылка',
        linkPrompt: 'Укажите URL ссылки',
        headings: 'Заголовки',
        quote: 'Цитата',
        bulletedList: 'Маркированный список',
        numberedList: 'Нумерованный список',
        addComponent: 'Добавить компонент',
        richText: 'Форматированный текст',
        markdown: 'Markdown'
      },
      image: {
        choose: 'Выберите изображение',
        chooseUrl: 'Вставить из URL',
        replaceUrl: 'Заменить на URL',
        promptUrl: 'Введите URL изображения',
        chooseDifferent: 'Выберите другое изображение',
        remove: 'Удалить изображение'
      },
      file: {
        choose: 'Выберите файл',
        chooseUrl: 'Вставить из URL',
        replaceUrl: 'Заменить на URL',
        promptUrl: 'Введите URL файла',
        chooseDifferent: 'Выберите другой файл',
        remove: 'Удалить файл'
      },
      unknownControl: {
        noControl: "Нет контрола для виджета '%{widget}'."
      },
      unknownPreview: {
        noPreview: "Нет превью для виджета '%{widget}'."
      },
      headingOptions: {
        headingOne: 'Heading 1',
        headingTwo: 'Heading 2',
        headingThree: 'Heading 3',
        headingFour: 'Heading 4',
        headingFive: 'Heading 5',
        headingSix: 'Heading 6'
      },
      datetime: {
        now: 'Сейчас'
      }
    }
  },
  mediaLibrary: {
    mediaLibraryCard: {
      draft: 'Черновик',
      copy: 'Копировать',
      copyUrl: 'Копировать URL',
      copyPath: 'Копировать путь',
      copyName: 'Копировать имя',
      copied: 'Скопировано'
    },
    mediaLibrary: {
      onDelete: 'Вы уверены, что хотите удалить выбранный медиафайл?',
      fileTooLarge: 'Файл слишком большой.\nНастройки не позволяют сохранять файлы более %{size} kB.'
    },
    mediaLibraryModal: {
      loading: 'Загрузка медифайлов…',
      noResults: 'Нет результатов.',
      noAssetsFound: 'Ресурсы не найдены.',
      noImagesFound: 'Изображения не найдены.',
      private: 'Приватные ',
      images: 'Изображения',
      mediaAssets: 'Медиаресурсы',
      search: 'Идёт поиск…',
      uploading: 'Загрузка…',
      upload: 'Загрузить новый',
      download: 'Скачать',
      deleting: 'Удаление…',
      deleteSelected: 'Удалить помеченные',
      chooseSelected: 'Выбрать помеченные'
    }
  },
  ui: {
    default: {
      goBackToSite: 'Вернуться на сайт'
    },
    errorBoundary: {
      title: 'Ошибка',
      details: 'Произошла ошибка. Пожалуйста, ',
      reportIt: 'сообщите о ней.',
      detailsHeading: 'Подробности',
      privacyWarning: 'При открытии тикет автоматически предзаполняется сообщением об ошибке и отладочной информацией.\nПожалуйста, проверьте, что данные верны и не содержат конфиденциальной информации.',
      recoveredEntry: {
        heading: 'Восстановленный документ',
        warning: 'Пожалуйста, скопируйте это сообщение куда-нибудь, прежде чем уйти со страницы!',
        copyButtonLabel: 'Скопировать в буфер обмена'
      }
    },
    settingsDropdown: {
      logOut: 'Выйти'
    },
    toast: {
      onFailToLoadEntries: 'Не удалось загрузить запись: %{details}',
      onFailToLoadDeployPreview: 'Не удалось загрузить превью: %{details}',
      onFailToPersist: 'Не удалось сохранить запись: %{details}',
      onFailToDelete: 'Не удалось удалить запись: %{details}',
      onFailToUpdateStatus: 'Не удалось обновить статус: %{details}',
      missingRequiredField: 'К сожалению, вы пропустили обязательное поле. Пожалуйста, заполните перед сохранением.',
      entrySaved: 'Запись сохранена',
      entryPublished: 'Запись опубликована',
      entryUnpublished: 'Публикация записи отменена',
      onFailToPublishEntry: 'Не удалось опубликовать запись: %{details}',
      onFailToUnpublishEntry: 'Не удалось отменить публикацию записи: %{details}',
      entryUpdated: 'Статус записи обновлен',
      onDeleteUnpublishedChanges: 'Неопубликованные изменения удалены',
      onFailToAuth: '%{details}',
      onLoggedOut: 'Вы вышли. Пожалуйста, сохраните все данные и войдите снова',
      onBackendDown: 'Происходят перебои в работе бекенда. См. %{details}'
    }
  },
  workflow: {
    workflow: {
      loading: 'Загрузка записей редакционного документооборота',
      workflowHeading: 'Редакционный документооборот',
      newPost: 'Новая запись',
      description: 'Число записей, ожидающих проверки — %{smart_count}, готовых к публикации — %{readyCount}. |||| Число записей, ожидающих проверки — %{smart_count}, готовых к публикации — %{readyCount}. ',
      dateFormat: 'MMMM D'
    },
    workflowCard: {
      lastChange: '%{date}, %{author}',
      lastChangeNoAuthor: '%{date}',
      lastChangeNoDate: '%{author}',
      deleteChanges: 'Удалить изменения',
      deleteNewEntry: 'Удалить новую запись',
      publishChanges: 'Опубликовать изменения',
      publishNewEntry: 'Опубликовать новую запись'
    },
    workflowList: {
      onDeleteEntry: 'Вы уверены, что хотите удалить эту запись?',
      onPublishingNotReadyEntry: 'Только элементы со статусом «Готов» могут быть опубликованы. Перетащите карточку в столбец «Одобренные», чтобы разрешить публикацию.',
      onPublishEntry: 'Вы уверены, что хотите опубликовать эту запись?',
      draftHeader: 'Черновики',
      inReviewHeader: 'На рассмотрении',
      readyHeader: 'Одобренные',
      currentEntries: '%{smart_count} entry |||| %{smart_count} entries'
    }
  }
};
var _default = ru;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/netlify-cms-locales/dist/esm/sv/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/netlify-cms-locales/dist/esm/sv/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const sv = {
  auth: {
    login: 'Logga in',
    loggingIn: 'Loggar in...',
    loginWithNetlifyIdentity: 'Logga in med Netlify Identity',
    loginWithAzure: 'Logga in med Azure',
    loginWithBitbucket: 'Logga in med Bitbucket',
    loginWithGitHub: 'Logga in med GitHub',
    loginWithGitLab: 'Logga in med GitLab',
    errors: {
      email: 'Fyll i din epostadress.',
      password: 'Vänligen skriv ditt lösenord.',
      identitySettings: 'Kan inte hämta inställningar för Identity. Vid användade av git-gateway backend, kontrollera att Identity service och Git Gateway är aktiverade.'
    }
  },
  app: {
    header: {
      content: 'Innehåll',
      workflow: 'Arbetsflöde',
      media: 'Media',
      quickAdd: 'Snabbt tillägg'
    },
    app: {
      errorHeader: 'Ett fel uppstod vid hämtning av CMS-konfigurationen',
      configErrors: 'Konfigurationsfel',
      checkConfigYml: 'Kontrollera din config.yml-fil.',
      loadingConfig: 'Hämtar konfiguration...',
      waitingBackend: 'Väntar på backend...'
    },
    notFoundPage: {
      header: 'Sidan finns inte'
    }
  },
  collection: {
    sidebar: {
      collections: 'Samlingar',
      allCollections: 'Alla Samlingar',
      searchAll: 'Sök',
      searchIn: 'Sök i'
    },
    collectionTop: {
      sortBy: 'Sortera efter',
      viewAs: 'Visa som',
      newButton: 'Ny %{collectionLabel}',
      ascending: 'Stigande',
      descending: 'Fallande',
      searchResults: 'Sökresultat för "%{searchTerm}"',
      searchResultsInCollection: 'Sökresultat för "%{searchTerm}" i %{collection}',
      filterBy: 'Filtrera efter',
      groupBy: 'Gruppera efter'
    },
    entries: {
      loadingEntries: 'Hämtar inlägg...',
      cachingEntries: 'Sparar inlägg i cache...',
      longerLoading: 'Det här kan ta några minuter',
      noEntries: 'Inga inlägg'
    },
    groups: {
      other: 'Annat',
      negateLabel: 'Inte %{label}'
    },
    defaultFields: {
      author: {
        label: 'Författare'
      },
      updatedOn: {
        label: 'Uppdaterad vid'
      }
    }
  },
  editor: {
    editorControl: {
      field: {
        optional: 'frivillig'
      }
    },
    editorControlPane: {
      widget: {
        required: '%{fieldLabel} är obligatoriskt.',
        regexPattern: '%{fieldLabel} matchar inte mönstret: %{pattern}.',
        processing: '%{fieldLabel} bearbetas.',
        range: '%{fieldLabel} måste vara mellan %{minValue} och %{maxValue}.',
        min: '%{fieldLabel} måste vara åtminstone %{minValue}.',
        max: '%{fieldLabel} måste vara %{maxValue} eller mindre.',
        rangeCount: '%{fieldLabel} måste ha mellan %{minCount} och %{maxCount} element.',
        rangeCountExact: '%{fieldLabel} måste ha exakt %{count} element.',
        rangeMin: '%{fieldLabel} måste ha åtminstone %{minCount} element.',
        rangeMax: '%{fieldLabel} måste ha %{maxCount} eller färre element.',
        invalidPath: `'%{path}' är inte en giltig sökväg`,
        pathExists: `Sökvägen '%{path}' existerar redan`
      },
      i18n: {
        writingInLocale: 'Skriver i %{locale}'
      }
    },
    editor: {
      onLeavePage: 'Är du säker på att du vill lämna sidan?',
      onUpdatingWithUnsavedChanges: 'Du har osparade ändringar, vänligen spara dem innan du uppdaterar status.',
      onPublishingNotReady: 'Vänligen uppdatera status till "Redo" innan du publicerar.',
      onPublishingWithUnsavedChanges: 'Du har osparade ändringar, vänligen spara innan du publicerar.',
      onPublishing: 'Är du säker på att du vill publicera det här inlägget?',
      onUnpublishing: 'Är du säker på att du vill avpublicera det här inlägget?',
      onDeleteWithUnsavedChanges: 'Är du säker på att du vill radera det här publicerade inlägget, inklusive dina osparade ändringar från nuvarande session?',
      onDeletePublishedEntry: 'Är du säker på att du vill radera det här publicerade inlägget?',
      onDeleteUnpublishedChangesWithUnsavedChanges: 'Du är på väg att radera alla opublicerade ändringar för det här inlägget, inklusive dina osparade ändringar från nuvarande session. Vill du fortfarande radera?',
      onDeleteUnpublishedChanges: 'Alla opublicerade ändringar kommer raderas. Vill du fortfarande radera?',
      loadingEntry: 'Hämtar inlägg...',
      confirmLoadBackup: 'En lokal kopia hittades för det här inlägget, vill du använda den?'
    },
    editorInterface: {
      toggleI18n: 'Slå på/av i18n',
      togglePreview: 'Visa/Dölj förhandsvisning',
      toggleScrollSync: 'Synka scrollning'
    },
    editorToolbar: {
      publishing: 'Publicerar...',
      publish: 'Publicera',
      published: 'Publicerad',
      unpublish: 'Avpublicera',
      duplicate: 'Duplicera',
      unpublishing: 'Avpublicerar...',
      publishAndCreateNew: 'Publicera och skapa ny',
      publishAndDuplicate: 'Publicera och duplicera',
      deleteUnpublishedChanges: 'Radera opublicerade ändringar',
      deleteUnpublishedEntry: 'Radera opublicerat inlägg',
      deletePublishedEntry: 'Radera publicerat inlägg',
      deleteEntry: 'Radera inlägg',
      saving: 'Sparar...',
      save: 'Spara',
      deleting: 'Raderar...',
      updating: 'Updaterar...',
      status: 'Status: %{status}',
      backCollection: ' Redigerar i samlingen %{collectionLabel}',
      unsavedChanges: 'Osparade ändringar',
      changesSaved: 'Ändringar sparade',
      draft: 'Utkast',
      inReview: 'Under granskning',
      ready: 'Redo',
      publishNow: 'Publicera nu',
      deployPreviewPendingButtonLabel: 'Kontrollera förhandsvisning',
      deployPreviewButtonLabel: 'Visa förhandsvisning',
      deployButtonLabel: 'Visa Live'
    },
    editorWidgets: {
      markdown: {
        bold: 'Fetstil',
        italic: 'Kursiv',
        code: 'Kod',
        link: 'Länk',
        linkPrompt: 'Ange en URL för länken',
        headings: 'Rubriker',
        quote: 'Citat',
        bulletedList: 'Punktlista',
        numberedList: 'Numrerad lista',
        addComponent: 'Lägg till komponent',
        richText: 'Rich Text',
        markdown: 'Markdown'
      },
      image: {
        choose: 'Välj en bild',
        chooseUrl: 'Infoga från URL',
        replaceUrl: 'Ersätt med URL',
        promptUrl: 'Ange en URL för bilden',
        chooseDifferent: 'Välj en annan bild',
        remove: 'Ta bort bild'
      },
      file: {
        choose: 'Välj en fil',
        chooseUrl: 'Infoga från URL',
        replaceUrl: 'Ersätt med URL',
        promptUrl: 'Ange en URL för filen',
        chooseDifferent: 'Välj en annan fil',
        remove: 'Ta bort fil'
      },
      unknownControl: {
        noControl: "Inget reglage för widget '%{widget}'."
      },
      unknownPreview: {
        noPreview: "Ingen förhandsvisning för widget '%{widget}'."
      },
      headingOptions: {
        headingOne: 'Rubrik 1',
        headingTwo: 'Rubrik 2',
        headingThree: 'Rubrik 3',
        headingFour: 'Rubrik 4',
        headingFive: 'Rubrik 5',
        headingSix: 'Rubrik 6'
      },
      datetime: {
        now: 'Nu'
      }
    }
  },
  mediaLibrary: {
    mediaLibraryCard: {
      draft: 'Utkast',
      copy: 'Kopiera',
      copyUrl: 'Kopiera URL',
      copyPath: 'Kopiera Sökväg',
      copyName: 'Kopiera Namn',
      copied: 'Kopierad'
    },
    mediaLibrary: {
      onDelete: 'Är du säker på att du vill radera valt mediaobjekt?',
      fileTooLarge: 'Maximal filstorlek överskriden.\nKonfigurerad att inte tillåta filer större än %{size} kB.'
    },
    mediaLibraryModal: {
      loading: 'Hämtar...',
      noResults: 'Inga resultat.',
      noAssetsFound: 'Hittade inga mediaobjekt.',
      noImagesFound: 'Hittade inga bilder.',
      private: 'Privat ',
      images: 'Bilder',
      mediaAssets: 'Mediaobjekt',
      search: 'Sök...',
      uploading: 'Laddar upp...',
      upload: 'Ladda upp',
      download: 'Ladda ner',
      deleting: 'Raderar...',
      deleteSelected: 'Radera markerad',
      chooseSelected: 'Välj markerad'
    }
  },
  ui: {
    default: {
      goBackToSite: 'Tillbaka till sida'
    },
    errorBoundary: {
      title: 'Fel',
      details: 'Ett fel har uppstått - vänligen ',
      reportIt: 'öppna ett ärende på GitHub.',
      detailsHeading: 'Detaljer',
      privacyWarning: 'När ett ärende öppnas bifogas felsökningsdata automatiskt.\nVänligen kontrollera att informationen är korrekt och ta bort känslig data om det skulle finnas sådan.',
      recoveredEntry: {
        heading: 'Återskapade dokument',
        warning: 'Vänligen kopiera materialet någon annanstans innan du navigerar från sidan!',
        copyButtonLabel: 'Kopiera till urklipp'
      }
    },
    settingsDropdown: {
      logOut: 'Logga ut'
    },
    toast: {
      onFailToLoadEntries: 'Kunde inte hämta inlägg: %{details}',
      onFailToLoadDeployPreview: 'Kunde inte ladda förhandsvisning: %{details}',
      onFailToPersist: 'Kunde inte spara inlägg: %{details}',
      onFailToDelete: 'Kunde inte radera inlägg: %{details}',
      onFailToUpdateStatus: 'Kunde inte uppdatera status: %{details}',
      missingRequiredField: 'Oops, du har missat ett obligatoriskt fält. Vänligen fyll i det innan du sparar.',
      entrySaved: 'Inlägg sparat',
      entryPublished: 'Inlägg publicerat',
      entryUnpublished: 'Inlägg avpublicerat',
      onFailToPublishEntry: 'Kunde inte publicera: %{details}',
      onFailToUnpublishEntry: 'Kunde inte avpublicera inlägg: %{details}',
      entryUpdated: 'Inläggsstatus uppdaterad',
      onDeleteUnpublishedChanges: 'Opublicerade ändringar raderade',
      onFailToAuth: '%{details}',
      onLoggedOut: 'Du har blivit utloggad, vänligen spara en kopia av eventuella ändringar och logga in på nytt',
      onBackendDown: 'Tjänsten är drabbad av en störning. Se %{details} för mer information'
    }
  },
  workflow: {
    workflow: {
      loading: 'Hämtar inlägg för redaktionellt arbetsflöde',
      workflowHeading: 'Redaktionellt arbetsflöde',
      newPost: 'Nytt inlägg',
      description: '%{smart_count} inlägg väntar på granskning, %{readyCount} redo att publiceras. |||| %{smart_count} inlägg väntar på granskning, %{readyCount} redo att publiceras. ',
      dateFormat: 'MMMM D'
    },
    workflowCard: {
      lastChange: '%{date} av %{author}',
      lastChangeNoAuthor: '%{date}',
      lastChangeNoDate: 'av %{author}',
      deleteChanges: 'Radera ändringar',
      deleteNewEntry: 'Radera nytt inlägg',
      publishChanges: 'Publicera ändringar',
      publishNewEntry: 'Publicera nytt inlägg'
    },
    workflowList: {
      onDeleteEntry: 'Är du säker på att du vill radera det här inlägget?',
      onPublishingNotReadyEntry: 'Bara inlägg med statusen "Redo" kan publiceras. Vänligen dra kortet till "Redo"-kolumnen för att möjliggöra publicering',
      onPublishEntry: 'Är du säker på att du vill publicera det här inlägget?',
      draftHeader: 'Utkast',
      inReviewHeader: 'Under granskning',
      readyHeader: 'Redo',
      currentEntries: '%{smart_count} inlägg |||| %{smart_count} inlägg'
    }
  }
};
var _default = sv;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/netlify-cms-locales/dist/esm/th/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/netlify-cms-locales/dist/esm/th/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const th = {
  auth: {
    login: 'เข้าสู่ระบบ',
    loggingIn: 'กำลังเข้าสู่ระบบ...',
    loginWithNetlifyIdentity: 'เข้าสู่ระบบด้วย Netlify Identity',
    loginWithBitbucket: 'เข้าสู่ระบบด้วย Bitbucket',
    loginWithGitHub: 'เข้าสู่ระบบด้วย GitHub',
    loginWithGitLab: 'เข้าสู่ระบบด้วย GitLab',
    errors: {
      email: 'ตรวจสอบให้แน่ใจว่าได้ใส่อีเมลล์แล้ว',
      password: 'โปรดใส่รหัสผ่านของคุณ',
      identitySettings: 'ไม่สามารถเข้าถึงการตั้งค่าส่วนตัว เมื่อใช้ git-gateway backend ตรวจสอบให้แน่ใจว่าได้เปิดใช้งานระบบยืนยันตัวตนและ Git Gateway.'
    }
  },
  app: {
    header: {
      content: 'เนื้อหา',
      workflow: 'ขั้นตอนการทำงาน',
      media: 'มีเดีย',
      quickAdd: 'เพิ่มเนื้อหา อย่างเร็ว'
    },
    app: {
      errorHeader: 'เกิดข้อผิดพลาดในการโหลดการตั้งค่า CMS',
      configErrors: 'คอนฟิกมีข้อผิดพลาด',
      checkConfigYml: 'กรุณาตรวจสอบไฟล์ config.yml ของคุณ',
      loadingConfig: 'กำลังโหลดการตั้งค่า...',
      waitingBackend: 'กำลังรอการตอบกลับจาก backend...'
    },
    notFoundPage: {
      header: 'ไม่พบหน้านี้'
    }
  },
  collection: {
    sidebar: {
      collections: 'กลุ่ม',
      allCollections: 'ทุกกลุ่ม',
      searchAll: 'ค้นหาทั้งหมด',
      searchIn: 'ค้าหาใน'
    },
    collectionTop: {
      sortBy: 'จัดเรียงตาม',
      viewAs: 'ดูในฐานะ',
      newButton: 'สร้าง %{collectionLabel}',
      ascending: 'น้อยไปมาก',
      descending: 'มากไปน้อย',
      searchResults: 'ค้นหาผลลัพธ์สำหรับ "%{searchTerm}"',
      searchResultsInCollection: 'ค้นหาผลลัพธ์สำหรับ "%{searchTerm}" ใน %{collection}',
      filterBy: 'กรองตาม'
    },
    entries: {
      loadingEntries: 'กำลังโหลดเนิ้อหา...',
      cachingEntries: 'กำลังแคชข้อมูลเนื้อหา...',
      longerLoading: 'อาจจะโหลดนานหลายนาที',
      noEntries: 'ไม่มีเนื้อหา'
    },
    defaultFields: {
      author: {
        label: 'ผู้เขียน'
      },
      updatedOn: {
        label: 'อัพเดตเมื่อ'
      }
    }
  },
  editor: {
    editorControl: {
      field: {
        optional: 'ทางเลือก'
      }
    },
    editorControlPane: {
      widget: {
        required: '%{fieldLabel} ต้องระบุ',
        regexPattern: '%{fieldLabel} ไม่ตรงกับรูปแบบ: %{pattern}',
        processing: '%{fieldLabel} กำลังประมวลผล',
        range: '%{fieldLabel} ต้องอยู่ระหว่าง %{minValue} และ %{maxValue}',
        min: '%{fieldLabel} จะต้องมีค่าไม่ต่ำกว่า %{minValue}',
        max: '%{fieldLabel} จะต้องมีค่าไม่มากกว่า %{maxValue}',
        rangeCount: '%{fieldLabel} จะต้องอยู่ระหว่าง %{minCount} และ %{maxCount} รายการ',
        rangeCountExact: '%{fieldLabel} จะต้องมี %{count} รายการ',
        rangeMin: '%{fieldLabel} จะต้องมีไม่ต่ำกว่า %{minCount} รายการ',
        rangeMax: '%{fieldLabel} จะต้องมีไม่มากกว่า %{maxCount} รายการ',
        invalidPath: `'%{path}' พาทไม่ถูกต้อง`,
        pathExists: `พาท '%{path}' มีอยู่แล้ว`
      },
      i18n: {
        writingInLocale: 'เขียนด้วยภาษา %{locale}'
      }
    },
    editor: {
      onLeavePage: 'คุณแน่ใจหรือว่าจะออกจากหน้านี้?',
      onUpdatingWithUnsavedChanges: 'คุณมีการเปลี่ยนแปลงที่ยังไม่ได้บันทึก โปรดบันทึกก่อนอัปเดตสถานะ',
      onPublishingNotReady: 'โปรดอัปเดตสถานะเป็น "พร้อม" ก่อนจะเผยแพร่',
      onPublishingWithUnsavedChanges: 'คุณมีการเปลี่ยนแปลงที่ยังไม่ได้บันทึก โปรดบันทึกก่อนจะเผยแพร่',
      onPublishing: 'คุณแน่ใจหรือว่าจะเผยแพร่เนื้อหานี้?',
      onUnpublishing: 'คุณแน่ใจหรือว่าจะไม่ต้องการเผยแพร่เนื้อหานี้?',
      onDeleteWithUnsavedChanges: 'คุณแน่ใจหรือว่าจะต้องการลบการเผยแพร่เนื้อหานี้ รวมถึงการเปลี่ยนแปลงที่ยังไม่ได้บันทึก?',
      onDeletePublishedEntry: 'คุณแน่ใจหรือว่าจะต้องการลบการเผยแพร่เนื้อหานี้?',
      onDeleteUnpublishedChangesWithUnsavedChanges: 'คุณแน่ใจหรือว่าจะต้องการลบเนื้อหาที่ยังไม่ได้เผยแพร่ทั้งหมดนี้ รวมถึงการเปลี่ยนแปลงที่ยังไม่ได้บันทึก?',
      onDeleteUnpublishedChanges: 'คุณแน่ใจหรือว่าจะต้องการลบเนื้อหาที่ยังไม่ได้เผยแพร่ทั้งหมดนี้?',
      loadingEntry: 'กำลังโหลดเนื้อหา...',
      confirmLoadBackup: 'ข้อมูลสำรองได้ถูกกู้คืนสำหรับเนื้อหานี้ คุณต้องการใช้มันไหม?'
    },
    editorToolbar: {
      publishing: 'กำลังเผยแพร่...',
      publish: 'เผยแพร่',
      published: 'เผยแพร่แล้ว',
      unpublish: 'ไม่ได้เผยแพร่',
      duplicate: 'ทำซ้ำ',
      unpublishing: 'ไม่ทำการเผยแพร่...',
      publishAndCreateNew: 'เผยแพร่ และ สร้างใหม่',
      publishAndDuplicate: 'เผยแพร่ และ ทำซ้ำ',
      deleteUnpublishedChanges: 'ลบการเปลี่ยแปลงเนื้อหาที่ยังไม่ได้เผยแพร่',
      deleteUnpublishedEntry: 'ลบเนื้อหาที่ยังไม่ได้เผยแพร่',
      deletePublishedEntry: 'ลบเนื้อหาที่เผยแพร่',
      deleteEntry: 'ลบเนื้อหา',
      saving: 'กำลังบันทึก...',
      save: 'บันทึก',
      deleting: 'กำลังลบ...',
      updating: 'กำลังอัปเดต...',
      status: 'สถานะ: %{status}',
      backCollection: ' เขียนในกลุ่ม %{collectionLabel}',
      unsavedChanges: 'การเปลี่ยนแปลงยังไม่ได้บันทึก',
      changesSaved: 'การเปลี่ยนเปลงถูกบันทึกแล้ว',
      draft: 'ร่าง',
      inReview: 'อยู่ระหว่างการตรวจสอบ',
      ready: 'พร้อม',
      publishNow: 'เผยแพร่ตอนนี้',
      deployPreviewPendingButtonLabel: 'ตรวจสอบตัวอย่าง',
      deployPreviewButtonLabel: 'ดูตัวอย่าง',
      deployButtonLabel: 'ดูตัวอย่างจากหน้าจริง'
    },
    editorWidgets: {
      markdown: {
        richText: 'Rich Text',
        markdown: 'Markdown'
      },
      image: {
        choose: 'เลือกรูปภาพ',
        chooseDifferent: 'เลือกรูปภาพอื่น',
        remove: 'เอารูปภาพออก'
      },
      file: {
        choose: 'เลือกไฟล์',
        chooseDifferent: 'เลือกไฟล์อื่น',
        remove: 'เอาไฟล์ออก'
      },
      unknownControl: {
        noControl: "ไม่มีการควบคุม widget '%{widget}'."
      },
      unknownPreview: {
        noPreview: "ไม่มีตัวอย่างสำหรับ widget '%{widget}'."
      },
      headingOptions: {
        headingOne: 'Heading 1',
        headingTwo: 'Heading 2',
        headingThree: 'Heading 3',
        headingFour: 'Heading 4',
        headingFive: 'Heading 5',
        headingSix: 'Heading 6'
      },
      datetime: {
        now: 'เวลาตอนนี้'
      }
    }
  },
  mediaLibrary: {
    mediaLibraryCard: {
      draft: 'ร่าง'
    },
    mediaLibrary: {
      onDelete: 'คุณแน่ใจหรือว่าจะลบมีเดียที่ถูกเลือก?',
      fileTooLarge: 'ไฟล์ใหญ่เกินไป\n ค่าที่ตั้งไว้ไม่ยอมรับไฟล์ที่ใหญ่กว่า %{size} kB.'
    },
    mediaLibraryModal: {
      loading: 'กำลังโหลด...',
      noResults: 'ไม่มีผลลัพธ์',
      noAssetsFound: 'ไม่พบข้อมูล',
      noImagesFound: 'ไม่พบรูปภาพ',
      private: 'ส่วนตัว ',
      images: 'รูปภาพ',
      mediaAssets: 'ข้อมูลมีเดีย',
      search: 'ค้นหา...',
      uploading: 'กำลังอัปโหลด...',
      upload: 'อัปโหลด',
      download: 'ดาวน์โหลด',
      deleting: 'กำลังลบ...',
      deleteSelected: 'ลบข้อมูลที่เลือก',
      chooseSelected: 'เลือกข้อมูลที่ถูกเลือก'
    }
  },
  ui: {
    default: {
      goBackToSite: 'กลับไปยังเว็บไซต์'
    },
    errorBoundary: {
      title: 'มีข้อผิดพลาด',
      details: 'มีข้อผิดพลาดเกิดขึ้น',
      reportIt: 'แจ้งข้อผิดพลาดบน GitHub',
      detailsHeading: 'รายละเอียด',
      privacyWarning: 'การแจ้งปัญหาจะเติมข้อมูลล่วงหน้าด้วยข้อความแสดงข้อผิดพลาดและข้อมูลการดีบัก\nโปรดตรวจสอบข้อมูลว่าถูกต้องและลบข้อมูลที่สำคัญหากมีอยู่',
      recoveredEntry: {
        heading: 'เอกสารถูกกู้คืน',
        warning: 'โปรด คัดลอก/วาง ที่ใดที่หนึ่งก่อนจะทำอย่างอื่น!',
        copyButtonLabel: 'คัดลอกไปที่คลิปบอร์ด'
      }
    },
    settingsDropdown: {
      logOut: 'ออกจากระบบ'
    },
    toast: {
      onFailToLoadEntries: 'ล้มเหลวในการโหลดเนื้อหา: %{details}',
      onFailToLoadDeployPreview: 'ล้มเหลวในการโหลดตัวอย่าง: %{details}',
      onFailToPersist: 'ล้มเหลวในการยืนยันเนื้อหา: %{details}',
      onFailToDelete: 'ล้มเหลวในการลบเนื้อหา: %{details}',
      onFailToUpdateStatus: 'ล้มเหลวในการอัปเดตสถานะ: %{details}',
      missingRequiredField: 'คุณไม่ได้ใส่ข้อมูลในช่องที่ต้องการ กรุณาใส่ข้อมูลก่อนบันทึก',
      entrySaved: 'เนื้อหาถูกบันทึก',
      entryPublished: 'เนื้อหาถูกเผยแพร่',
      entryUnpublished: 'เนื้อหาไม่ได้ถูกเผยแพร่',
      onFailToPublishEntry: 'ล้มเหลวในการเผยแพร่เนื้อหา: %{details}',
      onFailToUnpublishEntry: 'ล้มเหลวในการไม่เผยแพร่เนื้อหา: %{details}',
      entryUpdated: 'สถานะเนื้อหาถูกอัปเดต',
      onDeleteUnpublishedChanges: 'การเปลี่ยนแปลงเนื้อหาไม่ถูกเผยแพร่ได้ถูกลบ',
      onFailToAuth: '%{details}',
      onLoggedOut: 'คุณได้ออกจากระบบ โปรดสำรองข้อมูลแล้วเข้าสู่ระบบอีกครั้ง',
      onBackendDown: 'บริการแบ็กเอนด์เกิดการขัดข้อง ดู %{details} สำหรับข้อมูลเพิ่มเติม'
    }
  },
  workflow: {
    workflow: {
      loading: 'กำลังโหลดเนื้อหาขั้นตอนการทำงานของบรรณาธิการ',
      workflowHeading: 'ขั้นตอนการทำงานของบรรณาธิการ',
      newPost: 'สร้างโพสต์ใหม่',
      description: '%{smart_count} เนื้อหารอการตรวจสอบ, %{readyCount} พร้อมที่จะเผยแพร่ ่',
      dateFormat: 'MMMM D'
    },
    workflowCard: {
      lastChange: '%{date} โดย %{author}',
      lastChangeNoAuthor: '%{date}',
      lastChangeNoDate: 'โดย %{author}',
      deleteChanges: 'ลบการเปลี่ยนแปลง',
      deleteNewEntry: 'ลบเนื้อหาใหม่',
      publishChanges: 'เผยแพร่การเปลี่ยนแปลง',
      publishNewEntry: 'เผยแพร่เนื้อหาใหม่'
    },
    workflowList: {
      onDeleteEntry: 'คุณแน่ใจหรือว่าจะต้องการลบเนื้อหานี้?',
      onPublishingNotReadyEntry: 'เฉพาะรายการที่มีสถานะ "พร้อม" สามารถทำการเผยแพร่ โปรดลากเนื้อหาไปยังช่อง "พร้อม" เพื่อจะทำการเผยแพร่.',
      onPublishEntry: 'คุณแน่ใจหรือว่าจะต้องการเผยแพร่เนื้อหานี้?',
      draftHeader: 'ร่าง',
      inReviewHeader: 'อยู่ในการตรวจสอบ',
      readyHeader: 'พร้อม',
      currentEntries: '%{smart_count} เนื้อหา'
    }
  }
};
var _default = th;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/netlify-cms-locales/dist/esm/tr/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/netlify-cms-locales/dist/esm/tr/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const tr = {
  auth: {
    login: 'Giriş',
    loggingIn: 'Giriş yapılıyor..',
    loginWithNetlifyIdentity: 'Netlify Identity ile Giriş',
    loginWithAzure: 'Azure ile Giriş',
    loginWithBitbucket: 'Bitbucket ile Giriş',
    loginWithGitHub: 'GitHub ile Giriş',
    loginWithGitLab: 'GitLab ile Giriş',
    errors: {
      email: 'E-postanızı girdiğinizden emin olun.',
      password: 'Lütfen şifrenizi girin.',
      identitySettings: "Identity ayarlarına erişilemiyor. Git-gateway sunucusunu kullanmak için Identity servisi ve Git Gateway'in etkin olduğundan emin olun."
    }
  },
  app: {
    header: {
      content: 'İçerikler',
      workflow: 'İş Akışı',
      media: 'Medya',
      quickAdd: 'Hızlı ekle'
    },
    app: {
      errorHeader: 'CMS yapılandırması yüklenirken hata oluştu',
      configErrors: 'Yapılandırma Hataları',
      checkConfigYml: 'config.yml dosyanızı kontrol edin.',
      loadingConfig: 'Yapılandırma yükleniyor...',
      waitingBackend: 'Arka uç bekleniyor...'
    },
    notFoundPage: {
      header: 'Bulunamadı'
    }
  },
  collection: {
    sidebar: {
      collections: 'Koleksiyonlar',
      allCollections: 'Bütün Koleksiyonlar',
      searchAll: 'Tümünü ara',
      searchIn: 'İçinde ara'
    },
    collectionTop: {
      sortBy: 'Sırala ...',
      viewAs: 'Görüntüle',
      newButton: 'Yeni %{collectionLabel}',
      ascending: 'Artan',
      descending: 'Azalan',
      searchResults: '"%{searchTerm}" için Arama Sonuçları',
      searchResultsInCollection: '%{collection} koleksiyonunda, "%{searchTerm}" için Arama Sonuçları',
      filterBy: 'Filtrele',
      groupBy: 'Grupla'
    },
    entries: {
      loadingEntries: 'Girdiler yükleniyor...',
      cachingEntries: 'Girdi önbelleği...',
      longerLoading: 'Bu birkaç dakika sürebilir',
      noEntries: 'Hiç Girdi Yok'
    },
    groups: {
      other: 'Diğer',
      negateLabel: '%{label} hariç'
    },
    defaultFields: {
      author: {
        label: 'Yazar'
      },
      updatedOn: {
        label: 'Güncellenme Tarihi'
      }
    }
  },
  editor: {
    editorControl: {
      field: {
        optional: 'isteğe bağlı'
      }
    },
    editorControlPane: {
      widget: {
        required: '%{fieldLabel} gerekli.',
        regexPattern: '%{fieldLabel} eşleşmeyen kalıp: %{pattern}.',
        processing: '%{fieldLabel} işleniyor.',
        range: '%{fieldLabel} %{minValue} ve %{maxValue} arasında olmalı.',
        min: '%{fieldLabel} en az %{minValue} olmalı.',
        max: '%{fieldLabel}, %{maxValue} veya daha az olmalı.',
        rangeCount: '%{fieldLabel}, %{minCount} ve %{maxCount} öğeleri arasında olmalı.',
        rangeCountExact: '%{fieldLabel}, %{count} öğe olmalıdır.',
        rangeMin: '%{fieldLabel}, en az %{minCount} öğe olmalıdır.',
        rangeMax: '%{fieldLabel}, %{maxCount} veya daha az öğe olmalıdır.',
        invalidPath: `'%{path}' geçerli bir yol değil`,
        pathExists: `'%{path}' yolu zaten var`
      },
      i18n: {
        writingInLocale: '%{locale} için yazılıyor',
        copyFromLocale: 'Başka bir dilden doldurun',
        copyFromLocaleConfirm: 'Verileri %{locale} dilinden mi doldurmak istiyorsun?\nVarolan bütün verilerin üzerine yazılacak.'
      }
    },
    editor: {
      onLeavePage: 'Bu sayfadan ayrılmak istediğinize emin misiniz?',
      onUpdatingWithUnsavedChanges: 'Kaydedilmemiş değişiklikleriniz var, lütfen içeriği güncellemeden önce kaydedin.',
      onPublishingNotReady: 'Lütfen yayınlamadan önce içeriği "Hazır" olarak güncelleyin.',
      onPublishingWithUnsavedChanges: 'Kaydedilmemiş değişiklikleriniz var, lütfen yayınlamadan önce kaydedin.',
      onPublishing: 'Bu girdiyi yayınlamak istediğinize emin misiniz?',
      onUnpublishing: 'Bu girdiyi yayından kaldırmak istediğinizden emin misiniz?',
      onDeleteWithUnsavedChanges: 'Bu oturumda kaydedilmiş değişikliklerin yanı sıra geçerli oturumdaki kaydedilmemiş değişikliklerinizi silmek istediğinize emin misiniz?',
      onDeletePublishedEntry: 'Bu yayınlanmış girdiyi silmek istediğinize emin misiniz?',
      onDeleteUnpublishedChangesWithUnsavedChanges: 'Bu girdide yayınlanmamış tüm değişiklikleri ve geçerli oturumdaki kaydedilmemiş değişikliklerinizi siler. Hala silmek istiyor musun?',
      onDeleteUnpublishedChanges: 'Bu girdide yayınlanmamış tüm değişiklikler silinecek. Hala silmek istiyor musun?',
      loadingEntry: 'Girdiler yükleniyor...',
      confirmLoadBackup: 'Bu girdi için yerel bir yedekleme kurtarıldı, kullanmak ister misiniz?'
    },
    editorInterface: {
      toggleI18n: 'i18n değiştir',
      togglePreview: 'Önizlemeyi değiştir',
      toggleScrollSync: 'Kaydırmayı senkronize et'
    },
    editorToolbar: {
      publishing: 'Yayınlanıyor...',
      publish: 'Yayınla',
      published: 'Yayınlanan',
      unpublish: 'Yayından Kaldır',
      duplicate: 'Kopyala',
      unpublishing: 'Yayından kaldırılıyor...',
      publishAndCreateNew: 'Yayınla ve yeni oluştur',
      publishAndDuplicate: 'Yayınla ve kopya oluştur',
      deleteUnpublishedChanges: 'Yayımlanmamış değişiklikleri sil',
      deleteUnpublishedEntry: 'Yayımlanmamış girdiyi sil',
      deletePublishedEntry: 'Yayınlanan girdiyi sil',
      deleteEntry: 'Girdiyi sil',
      saving: 'Kaydediliyor...',
      save: 'Kaydet',
      statusInfoTooltipDraft: 'Giriş durumu taslak olarak ayarlandı. Girişi bitirmek ve incelemeye göndermek için giriş durumunu ‘İncelemede’ olarak ayarlayın',
      statusInfoTooltipInReview: 'Giriş gözden geçiriliyor, başka bir işlem yapılmasına gerek yok. Ancak, incelenirken yine de ek değişiklikler yapabilirsiniz.',
      deleting: 'Siliniyor...',
      updating: 'Güncelleniyor...',
      status: 'Durumu: %{status}',
      backCollection: ' %{collectionLabel} koleksiyonunda yazılı',
      unsavedChanges: 'Kaydedilmemiş Değişiklikler',
      changesSaved: 'Değişiklikler kaydedildi',
      draft: 'Taslak',
      inReview: 'İncelemede',
      ready: 'Hazır',
      publishNow: 'Şimdi yayımla',
      deployPreviewPendingButtonLabel: 'Önizlemeyi Denetle',
      deployPreviewButtonLabel: 'Önizlemeyi Görüntüle',
      deployButtonLabel: 'Canlı Görüntüle'
    },
    editorWidgets: {
      markdown: {
        bold: 'Kalın',
        italic: 'İtalik',
        code: 'Kod',
        link: 'Bağlantı',
        linkPrompt: "Bağlantının URL'sini girin",
        headings: 'Başlıklar',
        quote: 'Alıntı',
        bulletedList: 'Maddeli Liste',
        numberedList: 'Numaralı Liste',
        addComponent: 'Bileşen Ekle',
        richText: 'Zengin Metin',
        markdown: 'Markdown'
      },
      image: {
        choose: 'Bir resim seçin',
        chooseUrl: "URL'den ekle",
        replaceUrl: 'URL ile değiştir',
        promptUrl: "Resmin URL'sini girin",
        chooseDifferent: 'Farklı bir resim seçin',
        remove: 'Resmi kaldır'
      },
      file: {
        choose: 'Bir dosya seçin',
        chooseUrl: "URL'den ekle",
        replaceUrl: 'URL ile değiştir',
        promptUrl: "Dosyanın URL'sini girin",
        chooseDifferent: 'Farklı bir dosya seçin',
        remove: 'Dosyayı kaldır'
      },
      unknownControl: {
        noControl: "'%{widget}' bileşeni için kontrol yok."
      },
      unknownPreview: {
        noPreview: "'%{widget}' bileşeni için önizleme yok."
      },
      headingOptions: {
        headingOne: 'Başlık 1',
        headingTwo: 'Başlık 2',
        headingThree: 'Başlık 3',
        headingFour: 'Başlık 4',
        headingFive: 'Başlık 5',
        headingSix: 'Başlık 6'
      },
      datetime: {
        now: 'Şimdi'
      },
      list: {
        add: '%{item} Ekle',
        addType: '%{item} Ekle'
      }
    }
  },
  mediaLibrary: {
    mediaLibraryCard: {
      draft: 'Taslak',
      copy: 'Kopyala',
      copyUrl: 'URLyi Kopyala',
      copyPath: 'Dosya Yolunu Kopyala',
      copyName: 'Adını Kopyala',
      copied: 'Kopyalandı'
    },
    mediaLibrary: {
      onDelete: 'Seçilen medyayı silmek istediğinize emin misiniz?',
      fileTooLarge: 'Dosya çok büyük.\n%{size} kilobaytdan daha büyük dosyaların yüklenmemesi için ayarlanmış.'
    },
    mediaLibraryModal: {
      loading: 'Yükleniyor...',
      noResults: 'Sonuç yok.',
      noAssetsFound: 'Hiçbir dosya bulunamadı.',
      noImagesFound: 'Resim bulunamadı.',
      private: 'Özel ',
      images: 'Görseller',
      mediaAssets: 'Medya dosyaları',
      search: 'Ara...',
      uploading: 'Yükleniyor...',
      upload: 'Yükle',
      download: 'İndir',
      deleting: 'Siliniyor...',
      deleteSelected: 'Seçileni sil',
      chooseSelected: 'Seçileni kullan'
    }
  },
  ui: {
    default: {
      goBackToSite: 'Siteye geri git'
    },
    errorBoundary: {
      title: 'Hata',
      details: 'Bir hata oluştu - lütfen ',
      reportIt: 'GitHub üzerinde hata raporu aç.',
      detailsHeading: 'Ayrıntılar',
      privacyWarning: 'Bir hata raporu oluşturmak için gereken form otomatik olarak hata mesajı ve hata ayıklama verileriyle doldurulur.\nLütfen bilgilerin doğru olduğunu doğrulayın ve varsa hassas verileri kaldırın.',
      recoveredEntry: {
        heading: 'Kurtarılan belge',
        warning: 'Lütfen gitmeden önce bunu bir yere kopyalayın / yapıştırın!',
        copyButtonLabel: 'Panoya kopyala'
      }
    },
    settingsDropdown: {
      logOut: 'Çıkış Yap'
    },
    toast: {
      onFailToLoadEntries: 'Girdi yüklenemedi: %{details}',
      onFailToLoadDeployPreview: 'Önizleme yüklenemedi: %{details}',
      onFailToPersist: 'Girdi devam ettirilemedi: %{details}',
      onFailToDelete: 'Girdi silinemedi: %{details}',
      onFailToUpdateStatus: 'Durum güncellenemedi: %{details}',
      missingRequiredField: 'Gerekli bir alan eksik. Lütfen kaydetmeden önce tamamlayın.',
      entrySaved: 'Girdi kaydedildi',
      entryPublished: 'Girdi yayınlandı',
      entryUnpublished: 'Girdi yayınlanmamış',
      onFailToPublishEntry: 'Yayınlanamadı: %{details}',
      onFailToUnpublishEntry: 'Girdi yayından kaldırılamadı: %{details}',
      entryUpdated: 'Girdi durumu güncellendi',
      onDeleteUnpublishedChanges: 'Yayımlanmamış değişiklikler silindi',
      onFailToAuth: '%{details}',
      onLoggedOut: 'Çıkış yaptınız, lütfen tüm verileri yedekleyin ve tekrar giriş yapın',
      onBackendDown: 'Arka uç hizmetinde bir kesinti yaşanıyor. Daha fazla bilgi için %{details} gör'
    }
  },
  workflow: {
    workflow: {
      loading: 'İş Akışı Girdileri Yükleniyor',
      workflowHeading: 'Editoryal İş Akışı',
      newPost: 'Yeni Mesaj',
      description: '%{smart_count} girdi incelemeyi bekliyor, %{readyCount} yayına hazır. |||| %{smart_count} girdi incelemeyi bekliyor, %{readyCount} yayınlanmaya hazır. ',
      dateFormat: 'MMMM D'
    },
    workflowCard: {
      lastChange: '%{date} tarafından %{author}',
      lastChangeNoAuthor: '%{date}',
      lastChangeNoDate: '%{author} tarafından',
      deleteChanges: 'Değişiklikleri sil',
      deleteNewEntry: 'Yeni girdiyi sil',
      publishChanges: 'Değişiklikleri yayınla',
      publishNewEntry: 'Yeni girdi yayınla'
    },
    workflowList: {
      onDeleteEntry: 'Bu girdiyi silmek istediğinize emin misiniz?',
      onPublishingNotReadyEntry: 'Yalnızca "Hazır" durumu olan öğeler yayınlanabilir. Lütfen yayınlamayı etkinleştirmek için kartı "Hazır" sütununa sürükleyin.',
      onPublishEntry: 'Bu girdiyi yayınlamak istediğinize emin misiniz?',
      draftHeader: 'Taslaklar',
      inReviewHeader: 'İncelemede',
      readyHeader: 'Hazır',
      currentEntries: '%{smart_count} girdi |||| %{smart_count} girdiler'
    }
  }
};
var _default = tr;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/netlify-cms-locales/dist/esm/uk/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/netlify-cms-locales/dist/esm/uk/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const uk = {
  app: {
    header: {
      content: 'Зміст',
      workflow: 'Робочий процес',
      media: 'Медіа',
      quickAdd: 'Додати'
    },
    app: {
      errorHeader: 'Помилка завантаження конфігурації',
      configErrors: 'Помилка конфігурації',
      checkConfigYml: 'Перевірте config.yml файл.',
      loadingConfig: 'Завантаження конфігурації...',
      waitingBackend: 'Очікування серверу...'
    },
    notFoundPage: {
      header: 'Сторінку не знайдено '
    }
  },
  collection: {
    sidebar: {
      collections: 'Колекції',
      searchAll: 'Пошук'
    },
    collectionTop: {
      viewAs: 'Змінити вигляд',
      newButton: 'Створити %{collectionLabel}'
    },
    entries: {
      loadingEntries: 'Завантаження записів',
      cachingEntries: 'Кешування записів',
      longerLoading: 'Це може зайняти декілька хвилинок'
    }
  },
  editor: {
    editorControl: {
      field: {
        optional: 'необов’язково'
      }
    },
    editorControlPane: {
      widget: {
        required: "%{fieldLabel} є обов'язковим.",
        regexPattern: '%{fieldLabel} не задовільняє умові: %{pattern}.',
        processing: 'обробляється %{fieldLabel}.',
        range: 'значення %{fieldLabel} повинне бути від %{minValue} до %{maxValue}.',
        min: 'значення %{fieldLabel} має бути від %{minValue}.',
        max: 'значення %{fieldLabel} має бути %{maxValue} та менше.'
      }
    },
    editor: {
      onLeavePage: 'Ви дійсно бажаєте залишити сторінку?',
      onUpdatingWithUnsavedChanges: 'Присутні незбережені зміни, будь ласка збережіть перед зміною статусу.',
      onPublishingNotReady: 'Будь ласка, встановіть статус "Готово" перед публікацією.',
      onPublishingWithUnsavedChanges: 'Присутні незбережені зміни, будь ласка збережіть їх перед публікацією.',
      onPublishing: 'Ви дійсно бажаєте опублікувати запис?',
      onDeleteWithUnsavedChanges: 'Ви дійсно бажаєте видалити опублікований запис, як і всі незбережені зміни під час поточної сесії?',
      onDeletePublishedEntry: 'Ви дійсно бажаєте видалити опублікований запис?',
      onDeleteUnpublishedChangesWithUnsavedChanges: 'Видаляться всі неопубліковані зміни до цього запису, а також всі незбережені зміни під час поточної сесії. Бажаєте продовжити?',
      onDeleteUnpublishedChanges: 'Всі незбережені зміни до цього запису буде видалено. Бажаєте продовжити?',
      loadingEntry: 'Завантаження...',
      confirmLoadBackup: 'Відновлено резервну копію, бажаєте її використати?'
    },
    editorToolbar: {
      publishing: 'Публікація...',
      publish: 'Опублікувати',
      published: 'Опубліковано',
      publishAndCreateNew: 'Опублікувати і створити нову',
      deleteUnpublishedChanges: 'Видалити неопубліковані зміни',
      deleteUnpublishedEntry: 'Видалити неопубліковану сторінку',
      deletePublishedEntry: 'Видалити опубліковану сторінку',
      deleteEntry: 'Видалити',
      saving: 'Збереження...',
      save: 'Зберегти',
      deleting: 'Видалення...',
      updating: 'Оновлення...',
      status: 'Cтан: %{status}',
      backCollection: ' Робота над %{collectionLabel} колекцією',
      unsavedChanges: 'Незбережені зміни',
      changesSaved: 'Зміни збережено',
      draft: 'В роботі',
      inReview: 'На розгляді',
      ready: 'Готово',
      publishNow: 'Опублікувати',
      deployPreviewPendingButtonLabel: 'Перевірити оновлення',
      deployPreviewButtonLabel: 'Попередній перегляд',
      deployButtonLabel: 'Переглянути наживо'
    },
    editorWidgets: {
      image: {
        choose: 'Виберіть зображення',
        chooseDifferent: 'Виберіть інше зображення',
        remove: 'Видалити зображення'
      },
      file: {
        choose: 'Виберіть файл',
        chooseDifferent: 'Виберіть інший файл',
        remove: 'Видалити файл'
      },
      unknownControl: {
        noControl: "Відсутній модуль для '%{widget}'."
      },
      unknownPreview: {
        noPreview: "Відсутній перегляд для '%{widget}'."
      },
      headingOptions: {
        headingOne: 'Heading 1',
        headingTwo: 'Heading 2',
        headingThree: 'Heading 3',
        headingFour: 'Heading 4',
        headingFive: 'Heading 5',
        headingSix: 'Heading 6'
      }
    }
  },
  mediaLibrary: {
    mediaLibraryCard: {
      draft: 'В роботі'
    },
    mediaLibrary: {
      onDelete: 'Ви дійсно бажаєте видалити обрані матеріали?'
    },
    mediaLibraryModal: {
      loading: 'Завантаження...',
      noResults: 'Результати відсутні.',
      noAssetsFound: 'Матеріали відсутні.',
      noImagesFound: 'Зображення відсутні.',
      private: 'Private ',
      images: 'Зображення',
      mediaAssets: 'Медіа матеріали',
      search: 'Пошук...',
      uploading: 'Завантаження...',
      upload: 'Завантажити',
      deleting: 'Видалення...',
      deleteSelected: 'Видалити обране',
      chooseSelected: 'Додати обране'
    }
  },
  ui: {
    errorBoundary: {
      title: 'Помилка',
      details: 'Відбулась помилка - будь ласка ',
      reportIt: 'надішліть нам деталі.',
      detailsHeading: 'Деталі',
      recoveredEntry: {
        heading: 'Відновлено документ',
        warning: 'Будь ласка, збережіть це десь перед тим як піти!',
        copyButtonLabel: 'Скопіювати в буфер'
      }
    },
    settingsDropdown: {
      logOut: 'Вихід'
    },
    toast: {
      onFailToLoadEntries: 'Помилка завантаження: %{details}',
      onFailToLoadDeployPreview: 'Помилка завантаження перегляду: %{details}',
      onFailToPersist: 'Помилка перезапису: %{details}',
      onFailToDelete: 'Помилка видалення: %{details}',
      onFailToUpdateStatus: 'Помилка оновлення статусу: %{details}',
      missingRequiredField: "Йой, здається пропущено обов'язкове поле. Будь ласка, заповніть перед збереженням.",
      entrySaved: 'Збережено',
      entryPublished: 'Опубліковано',
      onFailToPublishEntry: 'Помилка публікації: %{details}',
      entryUpdated: 'Статус оновлено',
      onDeleteUnpublishedChanges: 'Видалено неопубліковані зміни',
      onFailToAuth: '%{details}'
    }
  },
  workflow: {
    workflow: {
      loading: 'Завантаження редакційних матеріалів',
      workflowHeading: 'Редакція',
      newPost: 'Новий запис',
      description: '%{smart_count} записів очікують розгляду, %{readyCount} готові до публікації. ',
      dateFormat: 'MMMM D'
    },
    workflowCard: {
      lastChange: '%{date} від %{author}',
      lastChangeNoAuthor: '%{date}',
      lastChangeNoDate: 'від %{author}',
      deleteChanges: 'Видалити зміни',
      deleteNewEntry: 'Видалити новий запис',
      publishChanges: 'Опублікувати всі зміни',
      publishNewEntry: 'Опублікувати новий запис'
    },
    workflowList: {
      onDeleteEntry: 'Ви дійсно бажаєте видалити запис?',
      onPublishingNotReadyEntry: 'Тільки елементи з статусом "Готово" можуть бути опубліковані. Будь ласка перемістіть картку в колонку "Готово" для публікації.',
      onPublishEntry: 'Дійсно бажаєте опублікувати запис?',
      draftHeader: 'В роботі',
      inReviewHeader: 'На розгляді',
      readyHeader: 'Готово',
      currentEntries: '%{smart_count} запис |||| %{smart_count} записів'
    }
  }
};
var _default = uk;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/netlify-cms-locales/dist/esm/vi/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/netlify-cms-locales/dist/esm/vi/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const vi = {
  auth: {
    login: 'Đăng nhập',
    loggingIn: 'Đang đăng nhập...',
    loginWithNetlifyIdentity: 'Đăng nhập bằng Netlify Identity',
    loginWithBitbucket: 'Đăng nhập bằng Bitbucket',
    loginWithGitHub: 'Đăng nhập bằng GitHub',
    loginWithGitLab: 'Đăng nhập bằng GitLab',
    errors: {
      email: 'Hãy nhập email của bạn.',
      password: 'Hãy nhập mật khẩu của bạn.',
      identitySettings: 'Không thể truy cập thiêt lập danh tính. Hãy chắc chắn rằng bạn đã bật dịch vụ Identity và Git Gateway khi sử dụng git-gateway.'
    }
  },
  app: {
    header: {
      content: 'Nội dung',
      workflow: 'Biên tập',
      media: 'Tập tin',
      quickAdd: 'Tạo nhanh'
    },
    app: {
      errorHeader: 'Xảy ra lỗi khi tải cấu hình CMS',
      configErrors: 'Lỗi cấu hình',
      checkConfigYml: 'Kiểm tra lại file config.yml của bạn.',
      loadingConfig: 'Đang tải cấu hình...',
      waitingBackend: 'Đang chờ backend...'
    },
    notFoundPage: {
      header: 'Không tìm thấy'
    }
  },
  collection: {
    sidebar: {
      collections: 'Bộ sưu tập',
      allCollections: 'Tất cả bộ sưu tập',
      searchAll: 'Tìm kiếm tất cả',
      searchIn: 'Tìm kiếm trong'
    },
    collectionTop: {
      sortBy: 'Sắp xếp theo',
      viewAs: 'View as',
      newButton: '%{collectionLabel} mới',
      ascending: 'Tăng dần',
      descending: 'Giảm dần',
      searchResults: 'Kết quả tìm kiếm cho "%{searchTerm}"',
      searchResultsInCollection: 'Kết quả tìm kiếm cho "%{searchTerm}" trong %{collection}',
      filterBy: 'Lọc theo'
    },
    entries: {
      loadingEntries: 'Đang tải...',
      cachingEntries: 'Đang lưu...',
      longerLoading: 'Sẽ mất vài phút',
      noEntries: 'Không có mục nào'
    },
    defaultFields: {
      author: {
        label: 'Tác giả'
      },
      updatedOn: {
        label: 'Ngày cập nhật'
      }
    }
  },
  editor: {
    editorControl: {
      field: {
        optional: 'không bắt buộc'
      }
    },
    editorControlPane: {
      widget: {
        required: '%{fieldLabel} bắt buộc nhập.',
        regexPattern: '%{fieldLabel} không khớp với mẫu: %{pattern}.',
        processing: '%{fieldLabel} đang xử lý.',
        range: '%{fieldLabel} phải nằm trong khoảng từ %{minValue} đến %{maxValue}.',
        min: '%{fieldLabel} phải ít nhất %{minValue}.',
        max: '%{fieldLabel} tối đa %{maxValue} hoặc ít hơn.',
        rangeCount: '%{fieldLabel} phải nằm trong khoảng từ %{minCount} đến %{maxCount} mục.',
        rangeCountExact: '%{fieldLabel} phải có %{count} mục.',
        rangeMin: '%{fieldLabel} phải có ít nhất %{minCount} mục.',
        rangeMax: '%{fieldLabel} phải có tối đa %{maxCount} mục hoặc ít hơn.',
        invalidPath: `Đường dẫn '%{path}' không hợp lệ`,
        pathExists: `Đường dẫn '%{path}' đã tồn tại`
      }
    },
    editor: {
      onLeavePage: 'Bạn có chắc rằng bạn muốn rời khỏi trang này?',
      onUpdatingWithUnsavedChanges: 'Bạn chưa lưu những thay đổi, hãy lưu trước khi thay đổi trạng thái.',
      onPublishingNotReady: 'Hãy thay đổi trạng thái thành "Sẵn sàng" trước khi công bố.',
      onPublishingWithUnsavedChanges: 'Bạn có thay đổi chưa lưu, hãy lưu trước khi công bố.',
      onPublishing: 'Bạn có chắc rằng bạn muốn công bố mục này?',
      onUnpublishing: 'Bạn có chắc rằng bạn muốn ngừng công bố mục này?',
      onDeleteWithUnsavedChanges: 'Bạn có chắc rằng bạn muốn xoá mục đã được công bố này, cũng như là những thay đổi chưa lưu của bạn trong phiên làm việc này?',
      onDeletePublishedEntry: 'Bạn có chắc rằng bạn muốn xoá mục đã được công bố này?',
      onDeleteUnpublishedChangesWithUnsavedChanges: 'Điều này sẽ xoá tất cả những thay đổi chưa được lưu trong mục này, cũng như là những thay đổi chưa được lưu của bạn trong phiên làm việc này. Bạn vẫn muốn xoá chứ?',
      onDeleteUnpublishedChanges: 'Tất cả những thay đổi chưa được lưu trong mục này sẽ bị xoá. Bạn vẫn muốn xoá chứ?',
      loadingEntry: 'Đang tải...',
      confirmLoadBackup: 'Một bản sao lưu trên máy đã được phục hồi cho mục này, bạn có muốn tải lên không?'
    },
    editorToolbar: {
      publishing: 'Đang công bố...',
      publish: 'Công bố',
      published: 'Đã công bố',
      unpublish: 'Ngừng công bố',
      duplicate: 'Sao chép',
      unpublishing: 'Đang ngừng công bố...',
      publishAndCreateNew: 'Công bố và tạo mới',
      publishAndDuplicate: 'Công bố và sao chép',
      deleteUnpublishedChanges: 'Xoá thay đổi chưa công bố này',
      deleteUnpublishedEntry: 'Xoá mục chưa được công bố này',
      deletePublishedEntry: 'Xoá mục đã được công bố này',
      deleteEntry: 'Xoá mục này',
      saving: 'Đang lưu...',
      save: 'Lưu',
      deleting: 'Đang xoá...',
      updating: 'Đang cập nhật...',
      status: 'Trạng: %{status}',
      backCollection: ' Đang viết trong bộ sưu tập %{collectionLabel}',
      unsavedChanges: 'Thay đổi chưa được lưu',
      changesSaved: 'Thay đổi đã được lưu',
      draft: 'Bản nháp',
      inReview: 'Đang xét duyệt',
      ready: 'Sẵn sàng',
      publishNow: 'Công bố ngay',
      deployPreviewPendingButtonLabel: 'Kiểm tra Xem trước',
      deployPreviewButtonLabel: 'Xem trước',
      deployButtonLabel: 'Xem bản hoàn chỉnh'
    },
    editorWidgets: {
      markdown: {
        richText: 'Văn bản định dạng',
        markdown: 'Markdown'
      },
      image: {
        choose: 'Chọn một hình',
        chooseDifferent: 'Chọn hình khác',
        remove: 'Gỡ bỏ hình'
      },
      file: {
        choose: 'Chọn một tập tin',
        chooseDifferent: 'Chọn tập tin khác',
        remove: 'Gỡ bỏ tập tin'
      },
      unknownControl: {
        noControl: "Không tìm thấy control cho widget '%{widget}'."
      },
      unknownPreview: {
        noPreview: "Không tìm thấy preview cho widget '%{widget}'."
      },
      headingOptions: {
        headingOne: 'Tiêu đề cấp 1',
        headingTwo: 'Tiêu đề cấp 2',
        headingThree: 'Tiêu đề cấp 3',
        headingFour: 'Tiêu đề cấp 4',
        headingFive: 'Tiêu đề cấp 5',
        headingSix: 'Tiêu đề cấp 6'
      },
      datetime: {
        now: 'Ngay lúc này'
      }
    }
  },
  mediaLibrary: {
    mediaLibraryCard: {
      draft: 'Bản nháp'
    },
    mediaLibrary: {
      onDelete: 'Bạn có chắc rằng bạn muốn xoá tập tin này?',
      fileTooLarge: 'Tập tin quá lớn.\nCấu hình không cho phép những tập tin lớn hơn %{size} kB.'
    },
    mediaLibraryModal: {
      loading: 'Đang tải...',
      noResults: 'Không có kết quả.',
      noAssetsFound: 'Không tìm thấy tập tin nào.',
      noImagesFound: 'Không tìm thấy hình nào.',
      private: 'Riêng tư ',
      images: 'Hình ảnh',
      mediaAssets: 'Tập tin',
      search: 'Tìm kiếm...',
      uploading: 'Đang tải lên...',
      upload: 'Tải lên',
      download: 'Tải về',
      deleting: 'Đang xoá...',
      deleteSelected: 'Xoá những cái đã chọn',
      chooseSelected: 'Lấy những cái đã chọn'
    }
  },
  ui: {
    default: {
      goBackToSite: 'Quay về trang web'
    },
    errorBoundary: {
      title: 'Lỗi',
      details: 'Đã xảy ra lỗi - xin hãy ',
      reportIt: 'tạo một issue trên GitHub.',
      detailsHeading: 'Chi tiết',
      privacyWarning: 'Tạo một issue với nội dung lỗi và dữ liệu debug được nhập sẵn.\nHãy xác nhận những thông tin này là đúng và gỡ bỏ dữ liệu nhạy cảm nếu cần thiết.',
      recoveredEntry: {
        heading: 'Tài liệu đã được phục hồi',
        warning: 'Hãy sao chép/dán nội dung này ở đâu đó trước khi chuyển sang trang khác!',
        copyButtonLabel: 'Sao chép vào vùng nhớ'
      }
    },
    settingsDropdown: {
      logOut: 'Đăng xuất'
    },
    toast: {
      onFailToLoadEntries: 'Không thể tải mục: %{details}',
      onFailToLoadDeployPreview: 'Không thể tải xem trước: %{details}',
      onFailToPersist: 'Không thể giữ lại mục: %{details}',
      onFailToDelete: 'Không thể xoá mục: %{details}',
      onFailToUpdateStatus: 'Không thể cập nhật trạng thái: %{details}',
      missingRequiredField: 'Bạn còn thiếu vài thông tin bắt buộc. Hãy hoàn thành trước khi lưu.',
      entrySaved: 'Mục đã được lưu',
      entryPublished: 'Mục đã được công bố',
      entryUnpublished: 'Mục đã ngừng công bố',
      onFailToPublishEntry: 'Không thể công bố: %{details}',
      onFailToUnpublishEntry: 'Không thể ngừng công bố mục: %{details}',
      entryUpdated: 'Trạng thái của mục đã được cập nhật',
      onDeleteUnpublishedChanges: 'Những thay đổi chưa được công bố đã được xoá',
      onFailToAuth: '%{details}',
      onLoggedOut: 'Bạn đã đăng xuất, hãy sao lưu dữ liệu và đăng nhập lại',
      onBackendDown: 'Dịch vụ backend đang gặp trục trặc. Hãy xem {details} để biết thêm thông tin'
    }
  },
  workflow: {
    workflow: {
      loading: 'Đang tải bài viết',
      workflowHeading: 'Quy trình biên tập',
      newPost: 'Bài mới',
      description: '%{smart_count} bài đang chờ duyệt, %{readyCount} bài đã sẵn sàng để công bố. |||| %{smart_count} bài đang chờ duyệt, %{readyCount} bài đã sẵn sàng để công bố. ',
      dateFormat: 'D MMMM'
    },
    workflowCard: {
      lastChange: '%{date} bởi %{author}',
      lastChangeNoAuthor: '%{date}',
      lastChangeNoDate: 'bởi %{author}',
      deleteChanges: 'Xoá thay đổi',
      deleteNewEntry: 'Xoá bài mới',
      publishChanges: 'Công bố thay đổi',
      publishNewEntry: 'Công bố bài mới'
    },
    workflowList: {
      onDeleteEntry: 'Bạn có chắc rằng bạn muốn xoá bài này?',
      onPublishingNotReadyEntry: 'Chỉ những bài với trạng thái "Sẵn sàng" mới có thể được công bố. Hãy kéo thẻ vào cột "Sẵn sàng" để cho phép công bố.',
      onPublishEntry: 'Bạn có chắc rằng bạn muốn công khai bài này?',
      draftHeader: 'Bản nháp',
      inReviewHeader: 'Đang xét duyệt',
      readyHeader: 'Sẵn sàng',
      currentEntries: '%{smart_count} bài |||| %{smart_count} bài'
    }
  }
};
var _default = vi;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/netlify-cms-locales/dist/esm/zh_Hans/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/netlify-cms-locales/dist/esm/zh_Hans/index.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const zh_Hans = {
  auth: {
    login: '登录',
    loggingIn: '正在登录...',
    loginWithNetlifyIdentity: '使用 Netlify Identity 登录',
    loginWithAzure: '使用 Azure 登录',
    loginWithBitbucket: '使用 Bitbucket 登录',
    loginWithGitHub: '使用 GitHub 登录',
    loginWithGitLab: '使用 GitLab 登录',
    errors: {
      email: '请输入电子邮箱',
      password: '请输入密码',
      identitySettings: '无法连接账户认证系统（如果正在使用 git-gateway 作为 backend，请确保已经开启 Netlify Identity 服务以及 Git Gateway）'
    }
  },
  app: {
    header: {
      content: '内容',
      workflow: '工作流',
      media: '媒体',
      quickAdd: '快速新建'
    },
    app: {
      errorHeader: '加载 CMS 配置时发生错误',
      configErrors: '配置错误',
      checkConfigYml: '请检查 config.yml 文件是否配置正确',
      loadingConfig: '正在加载配置...',
      waitingBackend: '等待 backend 数据...'
    },
    notFoundPage: {
      header: '页面不存在'
    }
  },
  collection: {
    sidebar: {
      collections: '集合',
      allCollections: '所有集合',
      searchAll: '查找所有...',
      searchIn: '查找'
    },
    collectionTop: {
      sortBy: '排序',
      viewAs: '查看',
      newButton: '新建%{collectionLabel}',
      ascending: '升序',
      descending: '降序',
      searchResults: '有关“%{searchTerm}”的搜索结果',
      searchResultsInCollection: '在%{collection}中有关“%{searchTerm}”的搜索结果',
      filterBy: '筛选',
      groupBy: '分组'
    },
    entries: {
      loadingEntries: '正在加载内容...',
      cachingEntries: '正在缓存内容...',
      longerLoading: '这可能需要花费几分钟时间',
      noEntries: '暂无内容'
    },
    groups: {
      other: '其他',
      negateLabel: '非%{label}'
    },
    defaultFields: {
      author: {
        label: '作者'
      },
      updatedOn: {
        label: '更新于'
      }
    }
  },
  editor: {
    editorControl: {
      field: {
        optional: '可选'
      }
    },
    editorControlPane: {
      widget: {
        required: '“%{fieldLabel}”是必填项',
        regexPattern: '“%{fieldLabel}”不满足模式%{pattern}',
        processing: '“%{fieldLabel}”正在处理中',
        range: '“%{fieldLabel}”必须位于 %{minValue} 和 %{maxValue} 之间',
        min: '“%{fieldLabel}”必须至少为 %{minValue}',
        max: '“%{fieldLabel}”必须小于等于 %{maxValue}',
        rangeCount: '“%{fieldLabel}”必须包含 %{minCount} 到 %{maxCount} 个项目',
        rangeCountExact: '“%{fieldLabel}”必须且只能包含 %{count} 个项目',
        minCount: '“%{fieldLabel}”必须为至少 %{minCount} 个项目',
        maxCount: '“%{fieldLabel}”必须为小于等于 %{maxCount} 个项目',
        invalidPath: `“%{path}”为无效路径`,
        pathExists: `路径“%{path}”已经存在`
      },
      i18n: {
        writingInLocale: '正在使用%{locale}撰写'
      }
    },
    editor: {
      onLeavePage: '你确定要离开此页面吗？',
      onUpdatingWithUnsavedChanges: '你有尚未保存的修改，请在更新状态前进行保存',
      onPublishingNotReady: '请在发布之前将状态更新为“就绪”',
      onPublishingWithUnsavedChanges: '你有尚未保存的修改，请在发布前进行保存',
      onPublishing: '你确定要发布此内容吗？',
      onUnpublishing: '你确定要撤销发布此内容吗？',
      onDeleteWithUnsavedChanges: '你确定要删除这个已经发布的内容，以及当前尚未保存的修改吗？',
      onDeletePublishedEntry: '你确定要删除这个已经发布的内容吗？',
      onDeleteUnpublishedChangesWithUnsavedChanges: '此内容所有未被发布的修改，以及当前尚未保存的修改都将被删除，你确定吗？',
      onDeleteUnpublishedChanges: '此内容所有未被发布的修改都将被删除，你确定吗？',
      loadingEntry: '正在加载内容...',
      confirmLoadBackup: '发现了一个对应此内容的本地备份，你要加载它吗？'
    },
    editorInterface: {
      toggleI18n: '打开/关闭国际化',
      togglePreview: '打开/关闭预览',
      toggleScrollSync: '同步滚动'
    },
    editorToolbar: {
      publishing: '正在发布...',
      publish: '发布',
      published: '已发布',
      unpublish: '撤销发布',
      duplicate: '复制',
      unpublishing: '正在撤销发布...',
      publishAndCreateNew: '发布，然后新建内容',
      publishAndDuplicate: '发布，然后复制内容',
      deleteUnpublishedChanges: '删除未发布的修改',
      deleteUnpublishedEntry: '删除未发布的内容',
      deletePublishedEntry: '删除已发布的内容',
      deleteEntry: '删除内容',
      saving: '正在保存...',
      save: '保存',
      deleting: '正在删除...',
      updating: '正在更新...',
      status: '状态: %{status}',
      backCollection: '正在集合“%{collectionLabel}”中编写',
      unsavedChanges: '含未保存的修改',
      changesSaved: '修改已保存',
      draft: '草稿',
      inReview: '审核中',
      ready: '就绪',
      publishNow: '立即发布',
      deployPreviewPendingButtonLabel: '点击以预览',
      deployPreviewButtonLabel: '查看预览',
      deployButtonLabel: '查看发布'
    },
    editorWidgets: {
      markdown: {
        bold: '粗体',
        italic: '斜体',
        code: '代码',
        link: '链接',
        linkPrompt: '输入链接的 URL',
        headings: '标题',
        quote: '引用',
        bulletedList: '无序列表',
        numberedList: '有序列表',
        addComponent: '添加组件',
        richText: '富文本',
        markdown: 'Markdown'
      },
      image: {
        choose: '选择图片',
        chooseUrl: '从 URL 插入',
        replaceUrl: '用 URL 替代',
        promptUrl: '输入图片的 URL',
        chooseDifferent: '选择其他图片',
        remove: '移除图片'
      },
      file: {
        choose: '选择文件',
        chooseUrl: '从 URL 插入',
        replaceUrl: '用 URL 替代',
        promptUrl: '输入文件的 URL',
        chooseDifferent: '选择其他文件',
        remove: '移除文件'
      },
      unknownControl: {
        noControl: "'%{widget}'的控件不存在"
      },
      unknownPreview: {
        noPreview: "'%{widget}'无法预览"
      },
      headingOptions: {
        headingOne: '标题 1',
        headingTwo: '标题 2',
        headingThree: '标题 3',
        headingFour: '标题 4',
        headingFive: '标题 5',
        headingSix: '标题 6'
      },
      datetime: {
        now: '现在'
      }
    }
  },
  mediaLibrary: {
    mediaLibraryCard: {
      draft: '草稿',
      copy: '复制',
      copyUrl: '复制 URL',
      copyPath: '复制路径',
      copyName: '复制名称',
      copied: '已复制'
    },
    mediaLibrary: {
      onDelete: '你确定要删除此媒体项目吗？',
      fileTooLarge: '文件体积过大\n目前的配置中不允许文件体积超过 %{size} kB'
    },
    mediaLibraryModal: {
      loading: '正在加载...',
      noResults: '暂无结果',
      noAssetsFound: '未找到资源',
      noImagesFound: '未找到图片',
      private: '私有',
      images: '图片',
      mediaAssets: '媒体资源',
      search: '搜索...',
      uploading: '正在上传...',
      upload: '上传',
      download: '下载',
      deleting: '正在下载...',
      deleteSelected: '删除已选中项目',
      chooseSelected: '选用已选中项目'
    }
  },
  ui: {
    default: {
      goBackToSite: '返回主页'
    },
    errorBoundary: {
      title: '错误',
      details: '程序发生了一个错误，请',
      reportIt: '在 Github 上发布一个 Issue',
      detailsHeading: '详情',
      privacyWarning: '发布一个 Issue 会将错误信息和调试数据预置其中\n请确保这些信息是正确的，同时移除那些敏感数据',
      recoveredEntry: {
        heading: '已恢复的文档',
        warning: '请在切换至其他页面之前，将它复制并粘贴到某个地方',
        copyButtonLabel: '复制到剪贴板'
      }
    },
    settingsDropdown: {
      logOut: '注销'
    },
    toast: {
      onFailToLoadEntries: '加载内容失败: %{details}',
      onFailToLoadDeployPreview: '加载预览失败: %{details}',
      onFailToPersist: '保存内容失败: %{details}',
      onFailToDelete: '删除内容失败: %{details}',
      onFailToUpdateStatus: '更新状态失败: %{details}',
      missingRequiredField: '你漏掉了一个必填项，请在保存之前将它填写好',
      entrySaved: '内容已保存',
      entryPublished: '内容已发布',
      entryUnpublished: '内容已撤销发布',
      onFailToPublishEntry: '发布失败: %{details}',
      onFailToUnpublishEntry: '撤销发布失败: %{details}',
      entryUpdated: '内容状态已更新',
      onDeleteUnpublishedChanges: '未发布的修改已删除',
      onFailToAuth: '%{details}',
      onLoggedOut: '你已注销，请先保存好数据然后再次登录',
      onBackendDown: 'Backend 服务已中断，欲知详情请查看：%{details}'
    }
  },
  workflow: {
    workflow: {
      loading: '正在加载编辑工作流项目',
      workflowHeading: '编辑工作流',
      newPost: '新建帖子',
      description: '%{smart_count} 个待审查的内容、%{readyCount} 个已就绪的内容 |||| %{smart_count} 个待检查的内容、%{readyCount} 个已就绪的内容',
      dateFormat: 'MMMM D'
    },
    workflowCard: {
      lastChange: '%{date} 由 %{author} 修改',
      lastChangeNoAuthor: '%{date}',
      lastChangeNoDate: '由 %{author} 修改',
      deleteChanges: '删除修改',
      deleteNewEntry: '删除新内容',
      publishChanges: '发布修改',
      publishNewEntry: '发布新内容'
    },
    workflowList: {
      onDeleteEntry: '你确定要删除此内容吗？',
      onPublishingNotReadyEntry: '只有状态为“就绪”的项目才能被发布。需要先将卡片拖动到“就绪”一列才能发布',
      onPublishEntry: '你确定要发布此内容吗？',
      draftHeader: '草稿',
      inReviewHeader: '审查中',
      readyHeader: '就绪',
      currentEntries: '%{smart_count} 个内容 |||| %{smart_count} 个内容'
    }
  }
};
var _default = zh_Hans;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/netlify-cms-locales/dist/esm/zh_Hant/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/netlify-cms-locales/dist/esm/zh_Hant/index.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const zh_Hant = {
  auth: {
    login: '登入',
    loggingIn: '正在登入...',
    loginWithNetlifyIdentity: '使用你的 Netlify 帳號來進行登入',
    loginWithBitbucket: '使用你的 Bitbucket 帳號來進行登入',
    loginWithGitHub: '使用你的 GitHub 帳號來進行登入',
    loginWithGitLab: '使用你的 GitLab 帳號來進行登入',
    errors: {
      email: '請確認你已經輸入你的電子郵件。',
      password: '請輸入你的密碼。',
      identitySettings: '無法連接認證系統！當使用 git-gateway 作為後端資料庫時，請確認您已開啟認證服務及 Git Gateway。'
    }
  },
  app: {
    header: {
      content: '內容',
      workflow: '作業流程',
      media: '媒體',
      quickAdd: '快速新增'
    },
    app: {
      errorHeader: '載入 CMS 設定時發生錯誤',
      configErrors: '設定錯誤',
      checkConfigYml: '請確認你的 config.yml 設定檔的內容是否正確',
      loadingConfig: '正在載入設定...',
      waitingBackend: '正在等待後端資料連接...'
    },
    notFoundPage: {
      header: '找不到頁面'
    }
  },
  collection: {
    sidebar: {
      collections: '集合',
      allCollections: '所有集合',
      searchAll: '尋找所有集合',
      searchIn: '搜尋範圍'
    },
    collectionTop: {
      sortBy: '排序方式',
      viewAs: '瀏覽方式',
      newButton: '新增 %{collectionLabel}',
      ascending: '由小到大',
      descending: '由大到小',
      searchResults: '搜尋 "%{searchTerm}" 的結果',
      searchResultsInCollection: '在 %{collection} 中搜尋 %{searchTerm}" 的結果',
      filterBy: '篩選方式'
    },
    entries: {
      loadingEntries: '載入內容',
      cachingEntries: '快取內容',
      longerLoading: '這可能需要幾分鐘的時間',
      noEntries: '沒有內容'
    },
    defaultFields: {
      author: {
        label: '作者'
      },
      updatedOn: {
        label: '更新於'
      }
    }
  },
  editor: {
    editorControl: {
      field: {
        optional: '選填'
      }
    },
    editorControlPane: {
      widget: {
        required: '%{fieldLabel} 是必須的。',
        regexPattern: '%{fieldLabel} 並不符合 %{pattern} 的型態',
        processing: '%{fieldLabel} 正在處理',
        range: '%{fieldLabel} 必須介於 %{minValue} 和 %{maxValue} 之間',
        min: '%{fieldLabel} 必須至少為 %{minValue}',
        max: '%{fieldLabel} 必須小於或等於 %{maxValue}',
        rangeCount: '%{fieldLabel} 必須有 %{minCount} 到 %{maxCount} 個項目。',
        rangeCountExact: '%{fieldLabel} 必須正好有 %{count} 個項目。',
        rangeMin: '%{fieldLabel} 必須至少有 %{minCount} 個項目。',
        rangeMax: '%{fieldLabel} 最多只能有 %{maxCount} 個項目。',
        invalidPath: `'%{path}' 不是有效的路徑`,
        pathExists: `路徑 '%{path}' 已經存在`
      },
      i18n: {
        writingInLocale: '以 %{locale} 書寫'
      }
    },
    editor: {
      onLeavePage: '您確定要離開這頁嗎？',
      onUpdatingWithUnsavedChanges: '您有未儲存的變更，在更新狀態前請先進行儲存。',
      onPublishingNotReady: '在發布前，請先將狀態設定為：預備發布。',
      onPublishingWithUnsavedChanges: '您有未儲存的變更，在發布前請先進行儲存。',
      onPublishing: '你確定要發表此內容嗎？',
      onUnpublishing: '你確定要取消發表此內容嗎？',
      onDeleteWithUnsavedChanges: '你確定要刪除這篇已發布的內容以及你尚未儲存的變更？',
      onDeletePublishedEntry: '你確定要刪除這篇已發布的內容？',
      onDeleteUnpublishedChangesWithUnsavedChanges: '這將會刪除此內容所有未發布的變更，以及未儲存的變更。你確定還是要刪除？',
      onDeleteUnpublishedChanges: '此內容所有未發布的變更都將會被刪除。你確定還是要刪除？',
      loadingEntry: '載入內容中...',
      confirmLoadBackup: '此內容的本地備份已經還原，你想要使用嗎？'
    },
    editorToolbar: {
      publishing: '發布中...',
      publish: '發布',
      published: '已發布',
      unpublish: '取消發布',
      duplicate: '建立新內容',
      unpublishing: '取消發布中...',
      publishAndCreateNew: '發布並建立內容',
      publishAndDuplicate: '發布並複製內容',
      deleteUnpublishedChanges: '刪除未發布的變更',
      deleteUnpublishedEntry: '刪除未發布的內容',
      deletePublishedEntry: '刪除已發布的內容',
      deleteEntry: '刪除內容',
      saving: '儲存中...',
      save: '儲存',
      deleting: '刪除中...',
      updating: '更新中...',
      status: '狀態: %{status}',
      backCollection: '在集合 %{collectionLabel} 新增內容',
      unsavedChanges: '未儲存變更',
      changesSaved: '已儲存變更',
      draft: '草稿',
      inReview: '正在審核',
      ready: '預備發布',
      publishNow: '立即發布',
      deployPreviewPendingButtonLabel: '點擊來進行預覽',
      deployPreviewButtonLabel: '進行預覽',
      deployButtonLabel: '觀看已發布的內容'
    },
    editorWidgets: {
      markdown: {
        bold: '粗體',
        italic: '斜體',
        code: '程式碼',
        link: '連結',
        linkPrompt: '輸入連結網址',
        headings: '標題',
        quote: '引言',
        bulletedList: '項目符號清單',
        numberedList: '編號清單',
        addComponent: '加入元件',
        richText: 'Rich Text',
        markdown: 'Markdown'
      },
      image: {
        choose: '選擇一張圖片',
        chooseDifferent: '選擇其他圖片',
        remove: '刪除圖片'
      },
      file: {
        choose: '選擇一個檔案',
        chooseDifferent: '選擇其他檔案',
        remove: '刪除檔案'
      },
      unknownControl: {
        noControl: "無法控制元件： '%{widget}'."
      },
      unknownPreview: {
        noPreview: "無法預覽元件： '%{widget}'."
      },
      headingOptions: {
        headingOne: '標題 1',
        headingTwo: '標題 2',
        headingThree: '標題 3',
        headingFour: '標題 4',
        headingFive: '標題 5',
        headingSix: '標題 6'
      },
      datetime: {
        now: '現在'
      }
    }
  },
  mediaLibrary: {
    mediaLibraryCard: {
      draft: '草稿'
    },
    mediaLibrary: {
      onDelete: '你確定要刪除已選擇的媒體嗎？',
      fileTooLarge: '檔案太大。\n已設定不允許大於 %{size} kB 的檔案。'
    },
    mediaLibraryModal: {
      loading: '載入中...',
      noResults: '沒有結果',
      noAssetsFound: '沒有發現媒體資產。',
      noImagesFound: '沒有發現影像。',
      private: '私人',
      images: '影像',
      mediaAssets: '媒體資產',
      search: '搜尋中...',
      uploading: '上傳中...',
      upload: '上傳新內容',
      download: '下載',
      deleting: '刪除中...',
      deleteSelected: '刪除已選擇的項目',
      chooseSelected: '選擇已選擇的項目'
    }
  },
  ui: {
    default: {
      goBackToSite: '回到網站'
    },
    errorBoundary: {
      title: '錯誤',
      details: '發生錯誤！請 ',
      reportIt: '回報錯誤',
      detailsHeading: '細節',
      privacyWarning: '建立 issue，並加上錯誤訊息及除錯資訊。\n請確認資訊正確，敏感資料也已經去除。',
      recoveredEntry: {
        heading: '已恢復的內容',
        warning: '在你離開本頁前，請將此處的內容複製貼上到其他地方來進行備份！',
        copyButtonLabel: '複製到剪貼簿'
      }
    },
    settingsDropdown: {
      logOut: '登出'
    },
    toast: {
      onFailToLoadEntries: '無法載入內容： %{details}',
      onFailToLoadDeployPreview: '無法預覽內容： %{details}',
      onFailToPersist: '無法暫存內容： %{details}',
      onFailToDelete: '無法刪除內容： %{details}',
      onFailToUpdateStatus: '無法更新狀態： %{details}',
      missingRequiredField: '糟了！你漏填了一個必須填入的欄位，在儲存前請先填完所有內容',
      entrySaved: '已儲存內容',
      entryPublished: '已發布內容',
      entryUnpublished: '已取消發布內容',
      onFailToPublishEntry: '無法發布： %{details}',
      onFailToUnpublishEntry: '無法取消發布： %{details}',
      entryUpdated: '內容狀態已更新',
      onDeleteUnpublishedChanges: '已刪除未發布的變更',
      onFailToAuth: '%{details}',
      onLoggedOut: '你已經登出，請備份任何資料然後重新登入',
      onBackendDown: '後端服務發生中斷。看 %{details} 取得更多資訊'
    }
  },
  workflow: {
    workflow: {
      loading: '正在載入編輯流程的內容',
      workflowHeading: '編輯作業流程',
      newPost: '建立新的內容',
      description: '%{smart_count} 篇內容正在等待審核， %{readyCount} 篇已經準備進行發布。 |||| %{smart_count} 篇內容正在等待審核， %{readyCount} 篇已經準備進行發布。',
      dateFormat: 'MMMM D'
    },
    workflowCard: {
      lastChange: '%{date} by %{author}',
      lastChangeNoAuthor: '%{date}',
      lastChangeNoDate: 'by %{author}',
      deleteChanges: '刪除變更',
      deleteNewEntry: '刪除新內容',
      publishChanges: '發布變更',
      publishNewEntry: '發布新內容'
    },
    workflowList: {
      onDeleteEntry: '你確定要刪除這個項目嗎？',
      onPublishingNotReadyEntry: '只有狀態為 預備發布 的內容可以被發布，請將本內容的狀態設定為 預備發布 來進行發布前的準備',
      onPublishEntry: '你確定要發表這篇內容嗎？',
      draftHeader: '草稿',
      inReviewHeader: '正在預覽',
      readyHeader: '準備完成',
      currentEntries: '%{smart_count} 篇內容 |||| %{smart_count} 篇內容'
    }
  }
};
var _default = zh_Hant;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-refresh/cjs/react-refresh-runtime.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-refresh/cjs/react-refresh-runtime.development.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v0.9.0
 * react-refresh-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map; // We never remove these associations.
// It's OK to reference families, but use WeakMap/Set for types.

var allFamiliesByID = new Map();
var allFamiliesByType = new PossiblyWeakMap();
var allSignaturesByType = new PossiblyWeakMap(); // This WeakMap is read by React, so we only put families
// that have actually been edited here. This keeps checks fast.
// $FlowIssue

var updatedFamiliesByType = new PossiblyWeakMap(); // This is cleared on every performReactRefresh() call.
// It is an array of [Family, NextType] tuples.

var pendingUpdates = []; // This is injected by the renderer via DevTools global hook.

var helpersByRendererID = new Map();
var helpersByRoot = new Map(); // We keep track of mounted roots so we can schedule updates.

var mountedRoots = new Set(); // If a root captures an error, we remember it so we can retry on edit.

var failedRoots = new Set(); // In environments that support WeakMap, we also remember the last element for every root.
// It needs to be weak because we do this even for roots that failed to mount.
// If there is no WeakMap, we won't attempt to do retrying.
// $FlowIssue

var rootElements = // $FlowIssue
typeof WeakMap === 'function' ? new WeakMap() : null;
var isPerformingRefresh = false;

function computeFullKey(signature) {
  if (signature.fullKey !== null) {
    return signature.fullKey;
  }

  var fullKey = signature.ownKey;
  var hooks;

  try {
    hooks = signature.getCustomHooks();
  } catch (err) {
    // This can happen in an edge case, e.g. if expression like Foo.useSomething
    // depends on Foo which is lazily initialized during rendering.
    // In that case just assume we'll have to remount.
    signature.forceReset = true;
    signature.fullKey = fullKey;
    return fullKey;
  }

  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];

    if (typeof hook !== 'function') {
      // Something's wrong. Assume we need to remount.
      signature.forceReset = true;
      signature.fullKey = fullKey;
      return fullKey;
    }

    var nestedHookSignature = allSignaturesByType.get(hook);

    if (nestedHookSignature === undefined) {
      // No signature means Hook wasn't in the source code, e.g. in a library.
      // We'll skip it because we can assume it won't change during this session.
      continue;
    }

    var nestedHookKey = computeFullKey(nestedHookSignature);

    if (nestedHookSignature.forceReset) {
      signature.forceReset = true;
    }

    fullKey += '\n---\n' + nestedHookKey;
  }

  signature.fullKey = fullKey;
  return fullKey;
}

function haveEqualSignatures(prevType, nextType) {
  var prevSignature = allSignaturesByType.get(prevType);
  var nextSignature = allSignaturesByType.get(nextType);

  if (prevSignature === undefined && nextSignature === undefined) {
    return true;
  }

  if (prevSignature === undefined || nextSignature === undefined) {
    return false;
  }

  if (computeFullKey(prevSignature) !== computeFullKey(nextSignature)) {
    return false;
  }

  if (nextSignature.forceReset) {
    return false;
  }

  return true;
}

function isReactClass(type) {
  return type.prototype && type.prototype.isReactComponent;
}

function canPreserveStateBetween(prevType, nextType) {
  if (isReactClass(prevType) || isReactClass(nextType)) {
    return false;
  }

  if (haveEqualSignatures(prevType, nextType)) {
    return true;
  }

  return false;
}

function resolveFamily(type) {
  // Only check updated types to keep lookups fast.
  return updatedFamiliesByType.get(type);
} // If we didn't care about IE11, we could use new Map/Set(iterable).


function cloneMap(map) {
  var clone = new Map();
  map.forEach(function (value, key) {
    clone.set(key, value);
  });
  return clone;
}

function cloneSet(set) {
  var clone = new Set();
  set.forEach(function (value) {
    clone.add(value);
  });
  return clone;
}

function performReactRefresh() {

  if (pendingUpdates.length === 0) {
    return null;
  }

  if (isPerformingRefresh) {
    return null;
  }

  isPerformingRefresh = true;

  try {
    var staleFamilies = new Set();
    var updatedFamilies = new Set();
    var updates = pendingUpdates;
    pendingUpdates = [];
    updates.forEach(function (_ref) {
      var family = _ref[0],
          nextType = _ref[1];
      // Now that we got a real edit, we can create associations
      // that will be read by the React reconciler.
      var prevType = family.current;
      updatedFamiliesByType.set(prevType, family);
      updatedFamiliesByType.set(nextType, family);
      family.current = nextType; // Determine whether this should be a re-render or a re-mount.

      if (canPreserveStateBetween(prevType, nextType)) {
        updatedFamilies.add(family);
      } else {
        staleFamilies.add(family);
      }
    }); // TODO: rename these fields to something more meaningful.

    var update = {
      updatedFamilies: updatedFamilies,
      // Families that will re-render preserving state
      staleFamilies: staleFamilies // Families that will be remounted

    };
    helpersByRendererID.forEach(function (helpers) {
      // Even if there are no roots, set the handler on first update.
      // This ensures that if *new* roots are mounted, they'll use the resolve handler.
      helpers.setRefreshHandler(resolveFamily);
    });
    var didError = false;
    var firstError = null; // We snapshot maps and sets that are mutated during commits.
    // If we don't do this, there is a risk they will be mutated while
    // we iterate over them. For example, trying to recover a failed root
    // may cause another root to be added to the failed list -- an infinite loop.

    var failedRootsSnapshot = cloneSet(failedRoots);
    var mountedRootsSnapshot = cloneSet(mountedRoots);
    var helpersByRootSnapshot = cloneMap(helpersByRoot);
    failedRootsSnapshot.forEach(function (root) {
      var helpers = helpersByRootSnapshot.get(root);

      if (helpers === undefined) {
        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
      }

      if (!failedRoots.has(root)) {// No longer failed.
      }

      if (rootElements === null) {
        return;
      }

      if (!rootElements.has(root)) {
        return;
      }

      var element = rootElements.get(root);

      try {
        helpers.scheduleRoot(root, element);
      } catch (err) {
        if (!didError) {
          didError = true;
          firstError = err;
        } // Keep trying other roots.

      }
    });
    mountedRootsSnapshot.forEach(function (root) {
      var helpers = helpersByRootSnapshot.get(root);

      if (helpers === undefined) {
        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
      }

      if (!mountedRoots.has(root)) {// No longer mounted.
      }

      try {
        helpers.scheduleRefresh(root, update);
      } catch (err) {
        if (!didError) {
          didError = true;
          firstError = err;
        } // Keep trying other roots.

      }
    });

    if (didError) {
      throw firstError;
    }

    return update;
  } finally {
    isPerformingRefresh = false;
  }
}
function register(type, id) {
  {
    if (type === null) {
      return;
    }

    if (typeof type !== 'function' && typeof type !== 'object') {
      return;
    } // This can happen in an edge case, e.g. if we register
    // return value of a HOC but it returns a cached component.
    // Ignore anything but the first registration for each type.


    if (allFamiliesByType.has(type)) {
      return;
    } // Create family or remember to update it.
    // None of this bookkeeping affects reconciliation
    // until the first performReactRefresh() call above.


    var family = allFamiliesByID.get(id);

    if (family === undefined) {
      family = {
        current: type
      };
      allFamiliesByID.set(id, family);
    } else {
      pendingUpdates.push([family, type]);
    }

    allFamiliesByType.set(type, family); // Visit inner types because we might not have registered them.

    if (typeof type === 'object' && type !== null) {
      switch (type.$$typeof) {
        case REACT_FORWARD_REF_TYPE:
          register(type.render, id + '$render');
          break;

        case REACT_MEMO_TYPE:
          register(type.type, id + '$type');
          break;
      }
    }
  }
}
function setSignature(type, key) {
  var forceReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var getCustomHooks = arguments.length > 3 ? arguments[3] : undefined;

  {
    allSignaturesByType.set(type, {
      forceReset: forceReset,
      ownKey: key,
      fullKey: null,
      getCustomHooks: getCustomHooks || function () {
        return [];
      }
    });
  }
} // This is lazily called during first render for a type.
// It captures Hook list at that time so inline requires don't break comparisons.

function collectCustomHooksForSignature(type) {
  {
    var signature = allSignaturesByType.get(type);

    if (signature !== undefined) {
      computeFullKey(signature);
    }
  }
}
function getFamilyByID(id) {
  {
    return allFamiliesByID.get(id);
  }
}
function getFamilyByType(type) {
  {
    return allFamiliesByType.get(type);
  }
}
function findAffectedHostInstances(families) {
  {
    var affectedInstances = new Set();
    mountedRoots.forEach(function (root) {
      var helpers = helpersByRoot.get(root);

      if (helpers === undefined) {
        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
      }

      var instancesForRoot = helpers.findHostInstancesForRefresh(root, families);
      instancesForRoot.forEach(function (inst) {
        affectedInstances.add(inst);
      });
    });
    return affectedInstances;
  }
}
function injectIntoGlobalHook(globalObject) {
  {
    // For React Native, the global hook will be set up by require('react-devtools-core').
    // That code will run before us. So we need to monkeypatch functions on existing hook.
    // For React Web, the global hook will be set up by the extension.
    // This will also run before us.
    var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;

    if (hook === undefined) {
      // However, if there is no DevTools extension, we'll need to set up the global hook ourselves.
      // Note that in this case it's important that renderer code runs *after* this method call.
      // Otherwise, the renderer will think that there is no global hook, and won't do the injection.
      var nextID = 0;
      globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {
        renderers: new Map(),
        supportsFiber: true,
        inject: function (injected) {
          return nextID++;
        },
        onScheduleFiberRoot: function (id, root, children) {},
        onCommitFiberRoot: function (id, root, maybePriorityLevel, didError) {},
        onCommitFiberUnmount: function () {}
      };
    } // Here, we just want to get a reference to scheduleRefresh.


    var oldInject = hook.inject;

    hook.inject = function (injected) {
      var id = oldInject.apply(this, arguments);

      if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') {
        // This version supports React Refresh.
        helpersByRendererID.set(id, injected);
      }

      return id;
    }; // Do the same for any already injected roots.
    // This is useful if ReactDOM has already been initialized.
    // https://github.com/facebook/react/issues/17626


    hook.renderers.forEach(function (injected, id) {
      if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') {
        // This version supports React Refresh.
        helpersByRendererID.set(id, injected);
      }
    }); // We also want to track currently mounted roots.

    var oldOnCommitFiberRoot = hook.onCommitFiberRoot;

    var oldOnScheduleFiberRoot = hook.onScheduleFiberRoot || function () {};

    hook.onScheduleFiberRoot = function (id, root, children) {
      if (!isPerformingRefresh) {
        // If it was intentionally scheduled, don't attempt to restore.
        // This includes intentionally scheduled unmounts.
        failedRoots.delete(root);

        if (rootElements !== null) {
          rootElements.set(root, children);
        }
      }

      return oldOnScheduleFiberRoot.apply(this, arguments);
    };

    hook.onCommitFiberRoot = function (id, root, maybePriorityLevel, didError) {
      var helpers = helpersByRendererID.get(id);

      if (helpers === undefined) {
        return;
      }

      helpersByRoot.set(root, helpers);
      var current = root.current;
      var alternate = current.alternate; // We need to determine whether this root has just (un)mounted.
      // This logic is copy-pasted from similar logic in the DevTools backend.
      // If this breaks with some refactoring, you'll want to update DevTools too.

      if (alternate !== null) {
        var wasMounted = alternate.memoizedState != null && alternate.memoizedState.element != null;
        var isMounted = current.memoizedState != null && current.memoizedState.element != null;

        if (!wasMounted && isMounted) {
          // Mount a new root.
          mountedRoots.add(root);
          failedRoots.delete(root);
        } else if (wasMounted && isMounted) ; else if (wasMounted && !isMounted) {
          // Unmount an existing root.
          mountedRoots.delete(root);

          if (didError) {
            // We'll remount it on future edits.
            failedRoots.add(root);
          } else {
            helpersByRoot.delete(root);
          }
        } else if (!wasMounted && !isMounted) {
          if (didError) {
            // We'll remount it on future edits.
            failedRoots.add(root);
          }
        }
      } else {
        // Mount a new root.
        mountedRoots.add(root);
      }

      return oldOnCommitFiberRoot.apply(this, arguments);
    };
  }
}
function hasUnrecoverableErrors() {
  // TODO: delete this after removing dependency in RN.
  return false;
} // Exposed for testing.

function _getMountedRootCount() {
  {
    return mountedRoots.size;
  }
} // This is a wrapper over more primitive functions for setting signature.
// Signatures let us decide whether the Hook order has changed on refresh.
//
// This function is intended to be used as a transform target, e.g.:
// var _s = createSignatureFunctionForTransform()
//
// function Hello() {
//   const [foo, setFoo] = useState(0);
//   const value = useCustomHook();
//   _s(); /* Second call triggers collecting the custom Hook list.
//          * This doesn't happen during the module evaluation because we
//          * don't want to change the module order with inline requires.
//          * Next calls are noops. */
//   return <h1>Hi</h1>;
// }
//
// /* First call specifies the signature: */
// _s(
//   Hello,
//   'useState{[foo, setFoo]}(0)',
//   () => [useCustomHook], /* Lazy to avoid triggering inline requires */
// );

function createSignatureFunctionForTransform() {
  {
    // We'll fill in the signature in two steps.
    // First, we'll know the signature itself. This happens outside the component.
    // Then, we'll know the references to custom Hooks. This happens inside the component.
    // After that, the returned function will be a fast path no-op.
    var status = 'needsSignature';
    var savedType;
    var hasCustomHooks;
    return function (type, key, forceReset, getCustomHooks) {
      switch (status) {
        case 'needsSignature':
          if (type !== undefined) {
            // If we received an argument, this is the initial registration call.
            savedType = type;
            hasCustomHooks = typeof getCustomHooks === 'function';
            setSignature(type, key, forceReset, getCustomHooks); // The next call we expect is from inside a function, to fill in the custom Hooks.

            status = 'needsCustomHooks';
          }

          break;

        case 'needsCustomHooks':
          if (hasCustomHooks) {
            collectCustomHooksForSignature(savedType);
          }

          status = 'resolved';
          break;
      }

      return type;
    };
  }
}
function isLikelyComponentType(type) {
  {
    switch (typeof type) {
      case 'function':
        {
          // First, deal with classes.
          if (type.prototype != null) {
            if (type.prototype.isReactComponent) {
              // React class.
              return true;
            }

            var ownNames = Object.getOwnPropertyNames(type.prototype);

            if (ownNames.length > 1 || ownNames[0] !== 'constructor') {
              // This looks like a class.
              return false;
            } // eslint-disable-next-line no-proto


            if (type.prototype.__proto__ !== Object.prototype) {
              // It has a superclass.
              return false;
            } // Pass through.
            // This looks like a regular function with empty prototype.

          } // For plain functions and arrows, use name as a heuristic.


          var name = type.name || type.displayName;
          return typeof name === 'string' && /^[A-Z]/.test(name);
        }

      case 'object':
        {
          if (type != null) {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
              case REACT_MEMO_TYPE:
                // Definitely React components.
                return true;

              default:
                return false;
            }
          }

          return false;
        }

      default:
        {
          return false;
        }
    }
  }
}

exports._getMountedRootCount = _getMountedRootCount;
exports.collectCustomHooksForSignature = collectCustomHooksForSignature;
exports.createSignatureFunctionForTransform = createSignatureFunctionForTransform;
exports.findAffectedHostInstances = findAffectedHostInstances;
exports.getFamilyByID = getFamilyByID;
exports.getFamilyByType = getFamilyByType;
exports.hasUnrecoverableErrors = hasUnrecoverableErrors;
exports.injectIntoGlobalHook = injectIntoGlobalHook;
exports.isLikelyComponentType = isLikelyComponentType;
exports.performReactRefresh = performReactRefresh;
exports.register = register;
exports.setSignature = setSignature;
  })();
}


/***/ }),

/***/ "./node_modules/react-refresh/runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react-refresh/runtime.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-refresh-runtime.development.js */ "./node_modules/react-refresh/cjs/react-refresh-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/shortid/index.js":
/*!***************************************!*\
  !*** ./node_modules/shortid/index.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__(/*! ./lib/index */ "./node_modules/shortid/lib/index.js");


/***/ }),

/***/ "./node_modules/shortid/lib/alphabet.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/alphabet.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var randomFromSeed = __webpack_require__(/*! ./random/random-from-seed */ "./node_modules/shortid/lib/random/random-from-seed.js");

var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
var alphabet;
var previousSeed;

var shuffled;

function reset() {
    shuffled = false;
}

function setCharacters(_alphabet_) {
    if (!_alphabet_) {
        if (alphabet !== ORIGINAL) {
            alphabet = ORIGINAL;
            reset();
        }
        return;
    }

    if (_alphabet_ === alphabet) {
        return;
    }

    if (_alphabet_.length !== ORIGINAL.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
    }

    var unique = _alphabet_.split('').filter(function(item, ind, arr){
       return ind !== arr.lastIndexOf(item);
    });

    if (unique.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
    }

    alphabet = _alphabet_;
    reset();
}

function characters(_alphabet_) {
    setCharacters(_alphabet_);
    return alphabet;
}

function setSeed(seed) {
    randomFromSeed.seed(seed);
    if (previousSeed !== seed) {
        reset();
        previousSeed = seed;
    }
}

function shuffle() {
    if (!alphabet) {
        setCharacters(ORIGINAL);
    }

    var sourceArray = alphabet.split('');
    var targetArray = [];
    var r = randomFromSeed.nextValue();
    var characterIndex;

    while (sourceArray.length > 0) {
        r = randomFromSeed.nextValue();
        characterIndex = Math.floor(r * sourceArray.length);
        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
    }
    return targetArray.join('');
}

function getShuffled() {
    if (shuffled) {
        return shuffled;
    }
    shuffled = shuffle();
    return shuffled;
}

/**
 * lookup shuffled letter
 * @param index
 * @returns {string}
 */
function lookup(index) {
    var alphabetShuffled = getShuffled();
    return alphabetShuffled[index];
}

function get () {
  return alphabet || ORIGINAL;
}

module.exports = {
    get: get,
    characters: characters,
    seed: setSeed,
    lookup: lookup,
    shuffled: getShuffled
};


/***/ }),

/***/ "./node_modules/shortid/lib/build.js":
/*!*******************************************!*\
  !*** ./node_modules/shortid/lib/build.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var generate = __webpack_require__(/*! ./generate */ "./node_modules/shortid/lib/generate.js");
var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");

// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
// This number should be updated every year or so to keep the generated id short.
// To regenerate `new Date() - 0` and bump the version. Always bump the version!
var REDUCE_TIME = 1567752802062;

// don't change unless we change the algos or REDUCE_TIME
// must be an integer and less than 16
var version = 7;

// Counter is used when shortid is called multiple times in one second.
var counter;

// Remember the last time shortid was called in case counter is needed.
var previousSeconds;

/**
 * Generate unique id
 * Returns string id
 */
function build(clusterWorkerId) {
    var str = '';

    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

    if (seconds === previousSeconds) {
        counter++;
    } else {
        counter = 0;
        previousSeconds = seconds;
    }

    str = str + generate(version);
    str = str + generate(clusterWorkerId);
    if (counter > 0) {
        str = str + generate(counter);
    }
    str = str + generate(seconds);
    return str;
}

module.exports = build;


/***/ }),

/***/ "./node_modules/shortid/lib/generate.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/generate.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");
var random = __webpack_require__(/*! ./random/random-byte */ "./node_modules/shortid/lib/random/random-byte-browser.js");
var format = __webpack_require__(/*! nanoid/format */ "./node_modules/nanoid/format.browser.js");

function generate(number) {
    var loopCounter = 0;
    var done;

    var str = '';

    while (!done) {
        str = str + format(random, alphabet.get(), 1);
        done = number < (Math.pow(16, loopCounter + 1 ) );
        loopCounter++;
    }
    return str;
}

module.exports = generate;


/***/ }),

/***/ "./node_modules/shortid/lib/index.js":
/*!*******************************************!*\
  !*** ./node_modules/shortid/lib/index.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");
var build = __webpack_require__(/*! ./build */ "./node_modules/shortid/lib/build.js");
var isValid = __webpack_require__(/*! ./is-valid */ "./node_modules/shortid/lib/is-valid.js");

// if you are using cluster or multiple servers use this to make each instance
// has a unique value for worker
// Note: I don't know if this is automatically set when using third
// party cluster solutions such as pm2.
var clusterWorkerId = __webpack_require__(/*! ./util/cluster-worker-id */ "./node_modules/shortid/lib/util/cluster-worker-id-browser.js") || 0;

/**
 * Set the seed.
 * Highly recommended if you don't want people to try to figure out your id schema.
 * exposed as shortid.seed(int)
 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
 */
function seed(seedValue) {
    alphabet.seed(seedValue);
    return module.exports;
}

/**
 * Set the cluster worker or machine id
 * exposed as shortid.worker(int)
 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
 * returns shortid module so it can be chained.
 */
function worker(workerId) {
    clusterWorkerId = workerId;
    return module.exports;
}

/**
 *
 * sets new characters to use in the alphabet
 * returns the shuffled alphabet
 */
function characters(newCharacters) {
    if (newCharacters !== undefined) {
        alphabet.characters(newCharacters);
    }

    return alphabet.shuffled();
}

/**
 * Generate unique id
 * Returns string id
 */
function generate() {
  return build(clusterWorkerId);
}

// Export all other functions as properties of the generate function
module.exports = generate;
module.exports.generate = generate;
module.exports.seed = seed;
module.exports.worker = worker;
module.exports.characters = characters;
module.exports.isValid = isValid;


/***/ }),

/***/ "./node_modules/shortid/lib/is-valid.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/is-valid.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");

function isShortId(id) {
    if (!id || typeof id !== 'string' || id.length < 6 ) {
        return false;
    }

    var nonAlphabetic = new RegExp('[^' +
      alphabet.get().replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&') +
    ']');
    return !nonAlphabetic.test(id);
}

module.exports = isShortId;


/***/ }),

/***/ "./node_modules/shortid/lib/random/random-byte-browser.js":
/*!****************************************************************!*\
  !*** ./node_modules/shortid/lib/random/random-byte-browser.js ***!
  \****************************************************************/
/***/ (function(module) {

"use strict";


var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

var randomByte;

if (!crypto || !crypto.getRandomValues) {
    randomByte = function(size) {
        var bytes = [];
        for (var i = 0; i < size; i++) {
            bytes.push(Math.floor(Math.random() * 256));
        }
        return bytes;
    };
} else {
    randomByte = function(size) {
        return crypto.getRandomValues(new Uint8Array(size));
    };
}

module.exports = randomByte;


/***/ }),

/***/ "./node_modules/shortid/lib/random/random-from-seed.js":
/*!*************************************************************!*\
  !*** ./node_modules/shortid/lib/random/random-from-seed.js ***!
  \*************************************************************/
/***/ (function(module) {

"use strict";


// Found this seed-based random generator somewhere
// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

var seed = 1;

/**
 * return a random number based on a seed
 * @param seed
 * @returns {number}
 */
function getNextValue() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed/(233280.0);
}

function setSeed(_seed_) {
    seed = _seed_;
}

module.exports = {
    nextValue: getNextValue,
    seed: setSeed
};


/***/ }),

/***/ "./node_modules/shortid/lib/util/cluster-worker-id-browser.js":
/*!********************************************************************!*\
  !*** ./node_modules/shortid/lib/util/cluster-worker-id-browser.js ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";


module.exports = 0;


/***/ }),

/***/ "netlify-cms-app":
/*!********************************!*\
  !*** external "NetlifyCmsApp" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = NetlifyCmsApp;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = React;

/***/ }),

/***/ "netlify-identity-widget":
/*!**********************************!*\
  !*** external "netlifyIdentity" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = netlifyIdentity;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	!function() {
/******/ 		__webpack_require__.hmrF = function() { return "cms." + __webpack_require__.h() + ".hot-update.json"; };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	!function() {
/******/ 		__webpack_require__.h = function() { return "f116b81c99c6e6c9641b"; }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "my-gatsby-site:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	!function() {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						return setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						blockingPromises = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/react refresh */
/******/ 	!function() {
/******/ 		__webpack_require__.i.push(function(options) {
/******/ 			var originalFactory = options.factory;
/******/ 			options.factory = function(moduleObject, moduleExports, webpackRequire) {
/******/ 				__webpack_require__.$Refresh$.init();
/******/ 				try {
/******/ 					originalFactory.call(this, moduleObject, moduleExports, webpackRequire);
/******/ 				} finally {
/******/ 					__webpack_require__.$Refresh$.cleanup(options.id);
/******/ 				}
/******/ 			}
/******/ 		})
/******/ 		
/******/ 		__webpack_require__.$Refresh$ = {
/******/ 			init: function() {
/******/ 				__webpack_require__.$Refresh$.cleanup = function() { return undefined; };
/******/ 				__webpack_require__.$Refresh$.register = function() { return undefined; };
/******/ 				__webpack_require__.$Refresh$.runtime = {};
/******/ 				__webpack_require__.$Refresh$.signature = function() { return function(type) { return type; }; };
/******/ 			},
/******/ 			setup: function(currentModuleId) {
/******/ 				var prevCleanup = __webpack_require__.$Refresh$.cleanup;
/******/ 				var prevReg = __webpack_require__.$Refresh$.register;
/******/ 				var prevSig = __webpack_require__.$Refresh$.signature;
/******/ 		
/******/ 				__webpack_require__.$Refresh$.register = function(type, id) {
/******/ 					var typeId = currentModuleId + " " + id;
/******/ 					__webpack_require__.$Refresh$.runtime.register(type, typeId);
/******/ 				}
/******/ 		
/******/ 				__webpack_require__.$Refresh$.signature = __webpack_require__.$Refresh$.runtime.createSignatureFunctionForTransform;
/******/ 		
/******/ 				__webpack_require__.$Refresh$.cleanup = function(cleanupModuleId) {
/******/ 					if (currentModuleId === cleanupModuleId) {
/******/ 						__webpack_require__.$Refresh$.register = prevReg;
/******/ 						__webpack_require__.$Refresh$.signature = prevSig;
/******/ 						__webpack_require__.$Refresh$.cleanup = prevCleanup;
/******/ 					}
/******/ 				}
/******/ 			},
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	!function() {
/******/ 		var createStylesheet = function(chunkId, fullhref, resolve, reject) {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = function(event) {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = function(href, fullhref) {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = function(chunkId) {
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = function(options) {
/******/ 			return { dispose: function() {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: function() {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = function(chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach(function(chunkId) {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise(function(resolve, reject) {
/******/ 					var tag = createStylesheet(chunkId, fullhref, function() {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"cms": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = function(event) {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatemy_gatsby_site"] = function(chunkId, moreModules, runtime) {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then(function(response) {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
/******/ 	__webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ErrorOverlayEntry.js");
/******/ 	__webpack_require__("./node_modules/gatsby-plugin-netlify-cms/cms.js");
/******/ 	__webpack_require__("./node_modules/gatsby-plugin-netlify-cms/cms-identity.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/cms/cms.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=cms.js.map