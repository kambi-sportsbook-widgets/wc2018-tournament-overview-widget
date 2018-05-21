/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.__spread = exports.unstable_renderSubtreeIntoContainer = exports.PureComponent = exports.Component = exports.unmountComponentAtNode = exports.findDOMNode = exports.isValidElement = exports.cloneElement = exports.createElement = exports.createFactory = exports.createClass = exports.render = exports.Children = exports.PropTypes = exports.DOM = exports.version = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _preact = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = '15.1.0'; // trick libraries to think we are react

var ELEMENTS = 'a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan'.split(' ');

var REACT_ELEMENT_TYPE = typeof Symbol !== 'undefined' && Symbol.for && Symbol.for('react.element') || 0xeac7;

var COMPONENT_WRAPPER_KEY = typeof Symbol !== 'undefined' && Symbol.for ? Symbol.for('__preactCompatWrapper') : '__preactCompatWrapper';

// don't autobind these methods since they already have guaranteed context.
var AUTOBIND_BLACKLIST = {
	constructor: 1,
	render: 1,
	shouldComponentUpdate: 1,
	componentWillReceiveProps: 1,
	componentWillUpdate: 1,
	componentDidUpdate: 1,
	componentWillMount: 1,
	componentDidMount: 1,
	componentWillUnmount: 1,
	componentDidUnmount: 1
};

var CAMEL_PROPS = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/;

var BYPASS_HOOK = {};

/*global process*/
var DEV = typeof process === 'undefined' || !Object({"NODE_ENV":"production","EMBEDDED":"true","WIDGET_NAME":"wc2018-tournament-overview-widget"}) || "production" !== 'production';

// a component that renders nothing. Used to replace components for unmountComponentAtNode.
function EmptyComponent() {
	return null;
}

// make react think we're react.
var VNode = (0, _preact.h)('a', null).constructor;
VNode.prototype.$$typeof = REACT_ELEMENT_TYPE;
VNode.prototype.preactCompatUpgraded = false;
VNode.prototype.preactCompatNormalized = false;

Object.defineProperty(VNode.prototype, 'type', {
	get: function get() {
		return this.nodeName;
	},
	set: function set(v) {
		this.nodeName = v;
	},
	configurable: true
});

Object.defineProperty(VNode.prototype, 'props', {
	get: function get() {
		return this.attributes;
	},
	set: function set(v) {
		this.attributes = v;
	},
	configurable: true
});

var oldEventHook = _preact.options.event;
_preact.options.event = function (e) {
	if (oldEventHook) {
		e = oldEventHook(e);
	}
	e.persist = Object;
	e.nativeEvent = e;
	return e;
};

var oldVnodeHook = _preact.options.vnode;
_preact.options.vnode = function (vnode) {
	if (!vnode.preactCompatUpgraded) {
		vnode.preactCompatUpgraded = true;

		var tag = vnode.nodeName,
		    attrs = vnode.attributes = extend({}, vnode.attributes);

		if (typeof tag === 'function') {
			if (tag[COMPONENT_WRAPPER_KEY] === true || tag.prototype && 'isReactComponent' in tag.prototype) {
				if (vnode.children && String(vnode.children) === '') {
					vnode.children = undefined;
				}
				if (vnode.children) {
					attrs.children = vnode.children;
				}

				if (!vnode.preactCompatNormalized) {
					normalizeVNode(vnode);
				}
				handleComponentVNode(vnode);
			}
		} else {
			if (vnode.children && String(vnode.children) === '') {
				vnode.children = undefined;
			}
			if (vnode.children) {
				attrs.children = vnode.children;
			}

			if (attrs.defaultValue) {
				if (!attrs.value && attrs.value !== 0) {
					attrs.value = attrs.defaultValue;
				}
				delete attrs.defaultValue;
			}

			handleElementVNode(vnode, attrs);
		}
	}

	if (oldVnodeHook) {
		oldVnodeHook(vnode);
	}
};

function handleComponentVNode(vnode) {
	var tag = vnode.nodeName,
	    a = vnode.attributes;

	vnode.attributes = {};
	if (tag.defaultProps) {
		extend(vnode.attributes, tag.defaultProps);
	}
	if (a) {
		extend(vnode.attributes, a);
	}
}

function handleElementVNode(vnode, a) {
	var shouldSanitize, attrs, i;
	if (a) {
		for (i in a) {
			if (shouldSanitize = CAMEL_PROPS.test(i)) {
				break;
			}
		}
		if (shouldSanitize) {
			attrs = vnode.attributes = {};
			for (i in a) {
				if (a.hasOwnProperty(i)) {
					attrs[CAMEL_PROPS.test(i) ? i.replace(/([A-Z0-9])/, '-$1').toLowerCase() : i] = a[i];
				}
			}
		}
	}
}

// proxy render() since React returns a Component reference.
function render$1(vnode, parent, callback) {
	var prev = parent && parent._preactCompatRendered && parent._preactCompatRendered.base;

	// ignore impossible previous renders
	if (prev && prev.parentNode !== parent) {
		prev = null;
	}

	// default to first Element child
	if (!prev && parent) {
		prev = parent.firstElementChild;
	}

	// remove unaffected siblings
	for (var i = parent.childNodes.length; i--;) {
		if (parent.childNodes[i] !== prev) {
			parent.removeChild(parent.childNodes[i]);
		}
	}

	var out = (0, _preact.render)(vnode, parent, prev);
	if (parent) {
		parent._preactCompatRendered = out && (out._component || { base: out });
	}
	if (typeof callback === 'function') {
		callback();
	}
	return out && out._component || out;
}

var ContextProvider = function ContextProvider() {};

ContextProvider.prototype.getChildContext = function () {
	return this.props.context;
};
ContextProvider.prototype.render = function (props) {
	return props.children[0];
};

function renderSubtreeIntoContainer(parentComponent, vnode, container, callback) {
	var wrap = (0, _preact.h)(ContextProvider, { context: parentComponent.context }, vnode);
	var renderContainer = render$1(wrap, container);
	var component = renderContainer._component || renderContainer.base;
	if (callback) {
		callback.call(component, renderContainer);
	}
	return component;
}

function unmountComponentAtNode(container) {
	var existing = container._preactCompatRendered && container._preactCompatRendered.base;
	if (existing && existing.parentNode === container) {
		(0, _preact.render)((0, _preact.h)(EmptyComponent), container, existing);
		return true;
	}
	return false;
}

var ARR = [];

// This API is completely unnecessary for Preact, so it's basically passthrough.
var Children = {
	map: function map(children, fn, ctx) {
		if (children == null) {
			return null;
		}
		children = Children.toArray(children);
		if (ctx && ctx !== children) {
			fn = fn.bind(ctx);
		}
		return children.map(fn);
	},
	forEach: function forEach(children, fn, ctx) {
		if (children == null) {
			return null;
		}
		children = Children.toArray(children);
		if (ctx && ctx !== children) {
			fn = fn.bind(ctx);
		}
		children.forEach(fn);
	},
	count: function count(children) {
		return children && children.length || 0;
	},
	only: function only(children) {
		children = Children.toArray(children);
		if (children.length !== 1) {
			throw new Error('Children.only() expects only one child.');
		}
		return children[0];
	},
	toArray: function toArray(children) {
		if (children == null) {
			return [];
		}
		return ARR.concat(children);
	}
};

/** Track current render() component for ref assignment */
var currentComponent;

function createFactory(type) {
	return createElement.bind(null, type);
}

var DOM = {};
for (var i = ELEMENTS.length; i--;) {
	DOM[ELEMENTS[i]] = createFactory(ELEMENTS[i]);
}

function upgradeToVNodes(arr, offset) {
	for (var i = offset || 0; i < arr.length; i++) {
		var obj = arr[i];
		if (Array.isArray(obj)) {
			upgradeToVNodes(obj);
		} else if (obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && !isValidElement(obj) && (obj.props && obj.type || obj.attributes && obj.nodeName || obj.children)) {
			arr[i] = createElement(obj.type || obj.nodeName, obj.props || obj.attributes, obj.children);
		}
	}
}

function isStatelessComponent(c) {
	return typeof c === 'function' && !(c.prototype && c.prototype.render);
}

// wraps stateless functional components in a PropTypes validator
function wrapStatelessComponent(WrappedComponent) {
	return createClass({
		displayName: WrappedComponent.displayName || WrappedComponent.name,
		render: function render() {
			return WrappedComponent(this.props, this.context);
		}
	});
}

function statelessComponentHook(Ctor) {
	var Wrapped = Ctor[COMPONENT_WRAPPER_KEY];
	if (Wrapped) {
		return Wrapped === true ? Ctor : Wrapped;
	}

	Wrapped = wrapStatelessComponent(Ctor);

	Object.defineProperty(Wrapped, COMPONENT_WRAPPER_KEY, { configurable: true, value: true });
	Wrapped.displayName = Ctor.displayName;
	Wrapped.propTypes = Ctor.propTypes;
	Wrapped.defaultProps = Ctor.defaultProps;

	Object.defineProperty(Ctor, COMPONENT_WRAPPER_KEY, { configurable: true, value: Wrapped });

	return Wrapped;
}

function createElement() {
	var args = [],
	    len = arguments.length;
	while (len--) {
		args[len] = arguments[len];
	}upgradeToVNodes(args, 2);
	return normalizeVNode(_preact.h.apply(void 0, args));
}

function normalizeVNode(vnode) {
	vnode.preactCompatNormalized = true;

	applyClassName(vnode);

	if (isStatelessComponent(vnode.nodeName)) {
		vnode.nodeName = statelessComponentHook(vnode.nodeName);
	}

	var ref = vnode.attributes.ref,
	    type = ref && (typeof ref === 'undefined' ? 'undefined' : _typeof(ref));
	if (currentComponent && (type === 'string' || type === 'number')) {
		vnode.attributes.ref = createStringRefProxy(ref, currentComponent);
	}

	applyEventNormalization(vnode);

	return vnode;
}

function cloneElement$1(element, props) {
	var children = [],
	    len = arguments.length - 2;
	while (len-- > 0) {
		children[len] = arguments[len + 2];
	}if (!isValidElement(element)) {
		return element;
	}
	var elementProps = element.attributes || element.props;
	var node = (0, _preact.h)(element.nodeName || element.type, extend({}, elementProps), element.children || elementProps && elementProps.children);
	// Only provide the 3rd argument if needed.
	// Arguments 3+ overwrite element.children in preactCloneElement
	var cloneArgs = [node, props];
	if (children && children.length) {
		cloneArgs.push(children);
	} else if (props && props.children) {
		cloneArgs.push(props.children);
	}
	return normalizeVNode(_preact.cloneElement.apply(void 0, cloneArgs));
}

function isValidElement(element) {
	return element && (element instanceof VNode || element.$$typeof === REACT_ELEMENT_TYPE);
}

function createStringRefProxy(name, component) {
	return component._refProxies[name] || (component._refProxies[name] = function (resolved) {
		if (component && component.refs) {
			component.refs[name] = resolved;
			if (resolved === null) {
				delete component._refProxies[name];
				component = null;
			}
		}
	});
}

function applyEventNormalization(ref) {
	var nodeName = ref.nodeName;
	var attributes = ref.attributes;

	if (!attributes || typeof nodeName !== 'string') {
		return;
	}
	var props = {};
	for (var i in attributes) {
		props[i.toLowerCase()] = i;
	}
	if (props.ondoubleclick) {
		attributes.ondblclick = attributes[props.ondoubleclick];
		delete attributes[props.ondoubleclick];
	}
	// for *textual inputs* (incl textarea), normalize `onChange` -> `onInput`:
	if (props.onchange && (nodeName === 'textarea' || nodeName.toLowerCase() === 'input' && !/^fil|che|rad/i.test(attributes.type))) {
		var normalized = props.oninput || 'oninput';
		if (!attributes[normalized]) {
			attributes[normalized] = multihook([attributes[normalized], attributes[props.onchange]]);
			delete attributes[props.onchange];
		}
	}
}

function applyClassName(vnode) {
	var a = vnode.attributes || (vnode.attributes = {});
	classNameDescriptor.enumerable = 'className' in a;
	if (a.className) {
		a.class = a.className;
	}
	Object.defineProperty(a, 'className', classNameDescriptor);
}

var classNameDescriptor = {
	configurable: true,
	get: function get() {
		return this.class;
	},
	set: function set(v) {
		this.class = v;
	}
};

function extend(base, props) {
	var arguments$1 = arguments;

	for (var i = 1, obj = void 0; i < arguments.length; i++) {
		if (obj = arguments$1[i]) {
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					base[key] = obj[key];
				}
			}
		}
	}
	return base;
}

function shallowDiffers(a, b) {
	for (var i in a) {
		if (!(i in b)) {
			return true;
		}
	}
	for (var i$1 in b) {
		if (a[i$1] !== b[i$1]) {
			return true;
		}
	}
	return false;
}

function findDOMNode(component) {
	return component && component.base || component;
}

function F() {}

function createClass(obj) {
	function cl(props, context) {
		bindAll(this);
		Component$1.call(this, props, context, BYPASS_HOOK);
		newComponentHook.call(this, props, context);
	}

	obj = extend({ constructor: cl }, obj);

	// We need to apply mixins here so that getDefaultProps is correctly mixed
	if (obj.mixins) {
		applyMixins(obj, collateMixins(obj.mixins));
	}
	if (obj.statics) {
		extend(cl, obj.statics);
	}
	if (obj.propTypes) {
		cl.propTypes = obj.propTypes;
	}
	if (obj.defaultProps) {
		cl.defaultProps = obj.defaultProps;
	}
	if (obj.getDefaultProps) {
		cl.defaultProps = obj.getDefaultProps.call(cl);
	}

	F.prototype = Component$1.prototype;
	cl.prototype = extend(new F(), obj);

	cl.displayName = obj.displayName || 'Component';

	return cl;
}

// Flatten an Array of mixins to a map of method name to mixin implementations
function collateMixins(mixins) {
	var keyed = {};
	for (var i = 0; i < mixins.length; i++) {
		var mixin = mixins[i];
		for (var key in mixin) {
			if (mixin.hasOwnProperty(key) && typeof mixin[key] === 'function') {
				(keyed[key] || (keyed[key] = [])).push(mixin[key]);
			}
		}
	}
	return keyed;
}

// apply a mapping of Arrays of mixin methods to a component prototype
function applyMixins(proto, mixins) {
	for (var key in mixins) {
		if (mixins.hasOwnProperty(key)) {
			proto[key] = multihook(mixins[key].concat(proto[key] || ARR), key === 'getDefaultProps' || key === 'getInitialState' || key === 'getChildContext');
		}
	}
}

function bindAll(ctx) {
	for (var i in ctx) {
		var v = ctx[i];
		if (typeof v === 'function' && !v.__bound && !AUTOBIND_BLACKLIST.hasOwnProperty(i)) {
			(ctx[i] = v.bind(ctx)).__bound = true;
		}
	}
}

function callMethod(ctx, m, args) {
	if (typeof m === 'string') {
		m = ctx.constructor.prototype[m];
	}
	if (typeof m === 'function') {
		return m.apply(ctx, args);
	}
}

function multihook(hooks, skipDuplicates) {
	return function () {
		var arguments$1 = arguments;
		var this$1 = this;

		var ret;
		for (var i = 0; i < hooks.length; i++) {
			var r = callMethod(this$1, hooks[i], arguments$1);

			if (skipDuplicates && r != null) {
				if (!ret) {
					ret = {};
				}
				for (var key in r) {
					if (r.hasOwnProperty(key)) {
						ret[key] = r[key];
					}
				}
			} else if (typeof r !== 'undefined') {
				ret = r;
			}
		}
		return ret;
	};
}

function newComponentHook(props, context) {
	propsHook.call(this, props, context);
	this.componentWillReceiveProps = multihook([propsHook, this.componentWillReceiveProps || 'componentWillReceiveProps']);
	this.render = multihook([propsHook, beforeRender, this.render || 'render', afterRender]);
}

function propsHook(props, context) {
	if (!props) {
		return;
	}

	// React annoyingly special-cases single children, and some react components are ridiculously strict about this.
	var c = props.children;
	if (c && Array.isArray(c) && c.length === 1 && (typeof c[0] === 'string' || typeof c[0] === 'function' || c[0] instanceof VNode)) {
		props.children = c[0];

		// but its totally still going to be an Array.
		if (props.children && _typeof(props.children) === 'object') {
			props.children.length = 1;
			props.children[0] = props.children;
		}
	}

	// add proptype checking
	if (DEV) {
		var ctor = typeof this === 'function' ? this : this.constructor,
		    propTypes = this.propTypes || ctor.propTypes;
		var displayName = this.displayName || ctor.name;

		if (propTypes) {
			_propTypes2.default.checkPropTypes(propTypes, props, 'prop', displayName);
		}
	}
}

function beforeRender(props) {
	currentComponent = this;
}

function afterRender() {
	if (currentComponent === this) {
		currentComponent = null;
	}
}

function Component$1(props, context, opts) {
	_preact.Component.call(this, props, context);
	this.state = this.getInitialState ? this.getInitialState() : {};
	this.refs = {};
	this._refProxies = {};
	if (opts !== BYPASS_HOOK) {
		newComponentHook.call(this, props, context);
	}
}
extend(Component$1.prototype = new _preact.Component(), {
	constructor: Component$1,

	isReactComponent: {},

	replaceState: function replaceState(state, callback) {
		var this$1 = this;

		this.setState(state, callback);
		for (var i in this$1.state) {
			if (!(i in state)) {
				delete this$1.state[i];
			}
		}
	},

	getDOMNode: function getDOMNode() {
		return this.base;
	},

	isMounted: function isMounted() {
		return !!this.base;
	}
});

function PureComponent(props, context) {
	Component$1.call(this, props, context);
}
F.prototype = Component$1.prototype;
PureComponent.prototype = new F();
PureComponent.prototype.isPureReactComponent = true;
PureComponent.prototype.shouldComponentUpdate = function (props, state) {
	return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
};

var index = {
	version: version,
	DOM: DOM,
	PropTypes: _propTypes2.default,
	Children: Children,
	render: render$1,
	createClass: createClass,
	createFactory: createFactory,
	createElement: createElement,
	cloneElement: cloneElement$1,
	isValidElement: isValidElement,
	findDOMNode: findDOMNode,
	unmountComponentAtNode: unmountComponentAtNode,
	Component: Component$1,
	PureComponent: PureComponent,
	unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer,
	__spread: extend
};

exports.version = version;
exports.DOM = DOM;
exports.PropTypes = _propTypes2.default;
exports.Children = Children;
exports.render = render$1;
exports.createClass = createClass;
exports.createFactory = createFactory;
exports.createElement = createElement;
exports.cloneElement = cloneElement$1;
exports.isValidElement = isValidElement;
exports.findDOMNode = findDOMNode;
exports.unmountComponentAtNode = unmountComponentAtNode;
exports.Component = Component$1;
exports.PureComponent = PureComponent;
exports.unstable_renderSubtreeIntoContainer = renderSubtreeIntoContainer;
exports.__spread = extend;
exports.default = index;
//# sourceMappingURL=preact-compat.es.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

  var isValidElement = function isValidElement(object) {
    return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(24)();
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(57);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatesModule = exports.eventsModule = exports.widgetModule = exports.utilModule = exports.translationModule = exports.statisticsModule = exports.offeringModule = exports.coreLibrary = undefined;

__webpack_require__(29);

var _coreLibrary = __webpack_require__(5);

var _coreLibrary2 = _interopRequireDefault(_coreLibrary);

var _offeringModule = __webpack_require__(8);

var _offeringModule2 = _interopRequireDefault(_offeringModule);

var _statisticsModule = __webpack_require__(11);

var _statisticsModule2 = _interopRequireDefault(_statisticsModule);

var _translationModule = __webpack_require__(12);

var _translationModule2 = _interopRequireDefault(_translationModule);

var _utilModule = __webpack_require__(6);

var _utilModule2 = _interopRequireDefault(_utilModule);

var _widgetModule = __webpack_require__(13);

var _widgetModule2 = _interopRequireDefault(_widgetModule);

var _index = __webpack_require__(14);

var _index2 = _interopRequireDefault(_index);

var _updatesModule = __webpack_require__(15);

var _updatesModule2 = _interopRequireDefault(_updatesModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (false) {
  require('./widget-api');
}


if (window != null) {
  window.WidgetCoreLibrary = {
    coreLibrary: _coreLibrary2.default,
    offeringModule: _offeringModule2.default,
    statisticsModule: _statisticsModule2.default,
    translationModule: _translationModule2.default,
    utilModule: _utilModule2.default,
    widgetModule: _widgetModule2.default,
    eventsModule: _index2.default,
    updatesModule: _updatesModule2.default
  };
}

exports.coreLibrary = _coreLibrary2.default;
exports.offeringModule = _offeringModule2.default;
exports.statisticsModule = _statisticsModule2.default;
exports.translationModule = _translationModule2.default;
exports.utilModule = _utilModule2.default;
exports.widgetModule = _widgetModule2.default;
exports.eventsModule = _index2.default;
exports.updatesModule = _updatesModule2.default;;
  window.gmWidgetsI18n = window.gmWidgetsI18n ? window.gmWidgetsI18n : {};
  window.gmWidgetsI18n["wc2018-tournament-overview-widget"] = {"bg_BG":{"Live":"На Живо","Right Now":"Сега","month0":"Януари","month1":"Февруари","month2":"Март","month3":"Април","month4":"Май","month5":"Юни","month6":"Юли","month7":"Август","month8":"Септември","month9":"Октомври","month10":"Ноември","month11":"Декември","month0Abbr":"Ян.","month1Abbr":"Февр.","month2Abbr":"Март","month3Abbr":"Апр.","month4Abbr":"Май","month5Abbr":"Юни","month6Abbr":"Юли","month7Abbr":"Авг.","month8Abbr":"Септ.","month9Abbr":"Окт.","month10Abbr":"Ноем.","month11Abbr":"Дек.","day1":"Понеделник","day2":"Вторник","day3":"Сряда","day4":"Четвъртък","day5":"Петък","day6":"Събота","day7":"Неделя","day1Abbr":"пн","day2Abbr":"вт","day3Abbr":"ср","day4Abbr":"чт","day5Abbr":"пт","day6Abbr":"сб","day7Abbr":"нд","today":"Днес","tomorrow":"Утре","wc2018":"Световно Първенство 2018","russia":"Русия","showAllParticipants":"Покажи всички {0} участници"},"da_DK":{"Live":"Live","Right Now":"Lige nu","month0":"Januar","month1":"Februar","month2":"Marts","month3":"April","month4":"Maj","month5":"Juni","month6":"Juli","month7":"August","month8":"September","month9":"Oktober","month10":"November","month11":"December","month0Abbr":"Jan","month1Abbr":"Feb","month2Abbr":"Mar","month3Abbr":"Apr","month4Abbr":"Maj","month5Abbr":"Jun","month6Abbr":"Jul","month7Abbr":"Aug","month8Abbr":"Sep","month9Abbr":"Okt","month10Abbr":"Nov","month11Abbr":"Dec","day1":"Mandag","day2":"Tirsdag","day3":"Onsdag","day4":"Torsdag","day5":"Fredag","day6":"Lørdag","day7":"Søndag","day1Abbr":"Man","day2Abbr":"Tir","day3Abbr":"Ons","day4Abbr":"Tor","day5Abbr":"Fre","day6Abbr":"Lør","day7Abbr":"Søn","today":"I dag","tomorrow":"I morgen","wc2018":"VM 2018","russia":"Rusland","showAllParticipants":"Vis alle {0} deltagere"},"de_AU":{"Live":"Live","Right Now":"Gerade jetzt","month0":"Januar","month1":"Februar","month2":"März","month3":"April","month4":"Mai","month5":"Juni","month6":"Juli","month7":"August","month8":"September","month9":"Oktober","month10":"November","month11":"Dezember","month0Abbr":"Jan","month1Abbr":"Feb","month2Abbr":"Mär","month3Abbr":"Apr","month4Abbr":"Mai","month5Abbr":"Jun","month6Abbr":"Jul","month7Abbr":"Aug","month8Abbr":"Sep","month9Abbr":"Okt","month10Abbr":"Nov","month11Abbr":"Dez","day1":"Montag","day2":"Dienstag","day3":"Mittwoch","day4":"Donnerstag","day5":"Freitag","day6":"Samstag","day7":"Sonntag","day1Abbr":"Mo","day2Abbr":"Di","day3Abbr":"Mi","day4Abbr":"Do","day5Abbr":"Fr","day6Abbr":"Sa","day7Abbr":"So","today":"Heute","tomorrow":"Morgen","wc2018":"Weltmeisterschaft 2018","russia":"Russland","showAllParticipants":"Alle {0} Teilnehmer anzeigen"},"de_CH":{"Live":"Live","Right Now":"Gerade jetzt","month0":"Januar","month1":"Februar","month2":"März","month3":"April","month4":"Mai","month5":"Juni","month6":"Juli","month7":"August","month8":"September","month9":"Oktober","month10":"November","month11":"Dezember","month0Abbr":"Jan","month1Abbr":"Feb","month2Abbr":"Mär","month3Abbr":"Apr","month4Abbr":"Mai","month5Abbr":"Jun","month6Abbr":"Jul","month7Abbr":"Aug","month8Abbr":"Sep","month9Abbr":"Okt","month10Abbr":"Nov","month11Abbr":"Dez","day1":"Montag","day2":"Dienstag","day3":"Mittwoch","day4":"Donnerstag","day5":"Freitag","day6":"Samstag","day7":"Sonntag","day1Abbr":"Mo","day2Abbr":"Di","day3Abbr":"Mi","day4Abbr":"Do","day5Abbr":"Fr","day6Abbr":"Sa","day7Abbr":"So","today":"Heute","tomorrow":"Morgen","wc2018":"Weltmeisterschaft 2018","russia":"Russland","showAllParticipants":"Alle {0} Teilnehmer anzeigen"},"de_DE":{"Live":"Live","Right Now":"Gerade jetzt","month0":"Januar","month1":"Februar","month2":"März","month3":"April","month4":"Mai","month5":"Juni","month6":"Juli","month7":"August","month8":"September","month9":"Oktober","month10":"November","month11":"Dezember","month0Abbr":"Jan","month1Abbr":"Feb","month2Abbr":"Mär","month3Abbr":"Apr","month4Abbr":"Mai","month5Abbr":"Jun","month6Abbr":"Jul","month7Abbr":"Aug","month8Abbr":"Sep","month9Abbr":"Okt","month10Abbr":"Nov","month11Abbr":"Dez","day1":"Montag","day2":"Dienstag","day3":"Mittwoch","day4":"Donnerstag","day5":"Freitag","day6":"Samstag","day7":"Sonntag","day1Abbr":"Mo","day2Abbr":"Di","day3Abbr":"Mi","day4Abbr":"Do","day5Abbr":"Fr","day6Abbr":"Sa","day7Abbr":"So","today":"Heute","tomorrow":"Morgen","wc2018":"Weltmeisterschaft 2018","russia":"Russland","showAllParticipants":"Alle {0} Teilnehmer anzeigen"},"el_GR":{"Live":"Live","Right Now":"Τώρα","month0":"Ιανούαριος","month1":"Φεβρουάριος","month2":"Μάρτιος","month3":"Απρίλιος","month4":"Μάϊος","month5":"Ιούνιος","month6":"Ιούλιος","month7":"Αύγουστος","month8":"Σεπτέμβιος","month9":"Οκτώβριος","month10":"Νοέμβριος","month11":"Δεκέμβριος","month0Abbr":"Iαν.","month1Abbr":"Φεβ.","month2Abbr":"Μαρ.","month3Abbr":"Απρ.","month4Abbr":"Mαϊ","month5Abbr":"Ιουν.","month6Abbr":"Ιουλ.","month7Abbr":"Αυγ.","month8Abbr":"Σεπ.","month9Abbr":"Οκτ.","month10Abbr":"Νοεμ.","month11Abbr":"Δεκ.","day1":"Δευτέρα","day2":"Τρίτη","day3":"Τετάρτη","day4":"Πέμπτη","day5":"Παρασκευή","day6":"Σάββατο","day7":"Κυριακή","day1Abbr":"Δευτ.","day2Abbr":"Tρ.","day3Abbr":"Τετάρτη","day4Abbr":"Πέμπτη","day5Abbr":"Παρασκευή","day6Abbr":"Σάββατο","day7Abbr":"Κυριακή","today":"Σήμερα","tomorrow":"Αύριο","wc2018":"Παγκόσμιο Κύπελλο 2018","russia":"Ρωσία","showAllParticipants":"Δείξτε όλους τους {0} συμμετέχοντες"},"en_AU":{"Live":"Live","Right Now":"Right Now","month0":"January","month1":"February","month2":"March","month3":"April","month4":"May","month5":"June","month6":"July","month7":"August","month8":"September","month9":"October","month10":"November","month11":"December","month0Abbr":"Jan","month1Abbr":"Feb","month2Abbr":"Mar","month3Abbr":"Apr","month4Abbr":"May","month5Abbr":"Jun","month6Abbr":"Jul","month7Abbr":"Aug","month8Abbr":"Sep","month9Abbr":"Oct","month10Abbr":"Nov","month11Abbr":"Dec","day1":"Monday","day2":"Tuesday","day3":"Wednesday","day4":"Thursday","day5":"Friday","day6":"Saturday","day7":"Sunday","day1Abbr":"Mon","day2Abbr":"Tue","day3Abbr":"Wed","day4Abbr":"Thu","day5Abbr":"Fri","day6Abbr":"Sat","day7Abbr":"Sun","today":"Today","tomorrow":"Tomorrow","wc2018":"World Cup 2018","russia":"Russia","showAllParticipants":"Show all {0} participants"},"en_GB":{"Live":"Live","Right Now":"Right Now","month0":"January","month1":"February","month2":"March","month3":"April","month4":"May","month5":"June","month6":"July","month7":"August","month8":"September","month9":"October","month10":"November","month11":"December","month0Abbr":"Jan","month1Abbr":"Feb","month2Abbr":"Mar","month3Abbr":"Apr","month4Abbr":"May","month5Abbr":"Jun","month6Abbr":"Jul","month7Abbr":"Aug","month8Abbr":"Sep","month9Abbr":"Oct","month10Abbr":"Nov","month11Abbr":"Dec","day1":"Monday","day2":"Tuesday","day3":"Wednesday","day4":"Thursday","day5":"Friday","day6":"Saturday","day7":"Sunday","day1Abbr":"Mon","day2Abbr":"Tue","day3Abbr":"Wed","day4Abbr":"Thu","day5Abbr":"Fri","day6Abbr":"Sat","day7Abbr":"Sun","today":"Today","tomorrow":"Tomorrow","wc2018":"World Cup 2018","russia":"Russia","showAllParticipants":"Show all {0} participants"},"es_CO":{"Live":"En directo","Right Now":"Ahora mismo","month0":"Enero","month1":"Febrero","month2":"Marzo","month3":"Abril","month4":"Mayo","month5":"Junio","month6":"Julio","month7":"Agosto","month8":"Septiembre","month9":"Octubre","month10":"Noviembre","month11":"Diciembre","month0Abbr":"Enero","month1Abbr":"Feb.","month2Abbr":"Marzo","month3Abbr":"Abr.","month4Abbr":"Mayo","month5Abbr":"Jun.","month6Abbr":"Jul.","month7Abbr":"Agosto","month8Abbr":"Set.","month9Abbr":"Oct.","month10Abbr":"Nov.","month11Abbr":"Dic.","day1":"Lunes","day2":"Marte","day3":"Miércoles","day4":"Jueves","day5":"Viernes","day6":"Sábado","day7":"Domingo","day1Abbr":"L","day2Abbr":"Ma","day3Abbr":"Mi","day4Abbr":"J","day5Abbr":"V","day6Abbr":"S","day7Abbr":"D","today":"Hoy","tomorrow":"Mañana","wc2018":"Copa del Mundo 2018","russia":"Rusia","showAllParticipants":"Mostrar los {0} participantes"},"es_ES":{"Live":"En directo","Right Now":"Ahora mismo","month0":"Enero","month1":"Febrero","month2":"Marzo","month3":"Abril","month4":"Mayo","month5":"Junio","month6":"Julio","month7":"Agosto","month8":"Septiembre","month9":"Octubre","month10":"Noviembre","month11":"Diciembre","month0Abbr":"I","month1Abbr":"II","month2Abbr":"III","month3Abbr":"IV","month4Abbr":"V","month5Abbr":"VI","month6Abbr":"VII","month7Abbr":"VIII","month8Abbr":"IX","month9Abbr":"X","month10Abbr":"XI","month11Abbr":"XII","day1":"Lunes","day2":"Marte","day3":"Miércoles","day4":"Jueves","day5":"Viernes","day6":"Sábado","day7":"Domingo","day1Abbr":"L","day2Abbr":"Ma","day3Abbr":"Mi","day4Abbr":"J","day5Abbr":"V","day6Abbr":"S","day7Abbr":"D","today":"Hoy","tomorrow":"Mañana","wc2018":"Copa del Mundo 2018","russia":"Rusia","showAllParticipants":"Mostrar los {0} participantes"},"et_EE":{"Live":"Live","Right Now":"Praegu","month0":"Jaanuar","month1":"Veebruar","month2":"Märts","month3":"Aprill","month4":"Mai","month5":"Juuni","month6":"Juuli","month7":"August","month8":"September","month9":"Oktoober","month10":"November","month11":"Detsember","month0Abbr":"Jan","month1Abbr":"Veeb","month2Abbr":"Märts","month3Abbr":"Aprill","month4Abbr":"Mai","month5Abbr":"Juuni","month6Abbr":"Juuli","month7Abbr":"Aug","month8Abbr":"Sept","month9Abbr":"Okt","month10Abbr":"Nov","month11Abbr":"Dets","day1":"Esmaspäev","day2":"Teisipäev","day3":"Kolmapäev","day4":"Neljapäev","day5":"Reede","day6":"Laupäev","day7":"Pühapäev","day1Abbr":"E","day2Abbr":"T","day3Abbr":"K","day4Abbr":"N","day5Abbr":"R","day6Abbr":"L","day7Abbr":"P","today":"Täna","tomorrow":"Homme","wc2018":"World Cup 2018","russia":"Venemaa","showAllParticipants":"Kuva kõik {0} osalejat"},"fi_FI":{"Live":"Live","Right Now":"Juuri nyt","month0":"Tammikuu","month1":"Helmikuu","month2":"Maaliskuu","month3":"Huhtikuu","month4":"Toukokuu","month5":"Kesäkuu","month6":"Heinäkuu","month7":"Elokuu","month8":"Syyskuu","month9":"Lokakuu","month10":"Marraskuu","month11":"Joulukuu","month0Abbr":"Tammi","month1Abbr":"Helmi","month2Abbr":"Maalis","month3Abbr":"Huhti","month4Abbr":"Touko","month5Abbr":"Kesä","month6Abbr":"Heinä","month7Abbr":"Elo","month8Abbr":"Syys","month9Abbr":"Loka","month10Abbr":"Marras","month11Abbr":"Joulu","day1":"Maanantai","day2":"Tiistai","day3":"Keskiviikko","day4":"Torstai","day5":"Perjantai","day6":"Lauantai","day7":"Sunnuntai","day1Abbr":"Ma","day2Abbr":"Ti","day3Abbr":"Ke","day4Abbr":"To","day5Abbr":"Pe","day6Abbr":"La","day7Abbr":"Su","today":"Tänään","tomorrow":"Huomenna","wc2018":"MM 2018","russia":"Venäjä","showAllParticipants":"Näytä kaikki {0} osallistujaa"},"fr_BE":{"Live":"Direct","Right Now":"Maintenant","month0":"Janvier","month1":"Février","month2":"Mars","month3":"Avril","month4":"Mai","month5":"Juin","month6":"Juillet","month7":"Août","month8":"Septembre","month9":"Octobre","month10":"Novembre","month11":"Décembre","month0Abbr":"Jan","month1Abbr":"Fév","month2Abbr":"Mar","month3Abbr":"Avr","month4Abbr":"Mai","month5Abbr":"Jun","month6Abbr":"Jul","month7Abbr":"Aoû","month8Abbr":"Sep","month9Abbr":"Oct","month10Abbr":"Nov","month11Abbr":"Déc","day1":"Lundi","day2":"Mardi","day3":"Mercredi","day4":"Jeudi","day5":"Vendredi","day6":"Samedi","day7":"Dimanche","day1Abbr":"Lun","day2Abbr":"Mar","day3Abbr":"Mer","day4Abbr":"Jeu","day5Abbr":"Ven","day6Abbr":"Sam","day7Abbr":"Dim","today":"Aujourd’hui","tomorrow":"Demain","wc2018":"Coupe du Monde 2018","russia":"Russie","showAllParticipants":"Afficher tous les {0} participants"},"fr_CH":{"Live":"Direct","Right Now":"Maintenant","month0":"Janvier","month1":"Février","month2":"Mars","month3":"Avril","month4":"Mai","month5":"Juin","month6":"Juillet","month7":"Août","month8":"Septembre","month9":"Octobre","month10":"Novembre","month11":"Décembre","month0Abbr":"Jan","month1Abbr":"Fév","month2Abbr":"Mar","month3Abbr":"Avr","month4Abbr":"Mai","month5Abbr":"Jun","month6Abbr":"Jul","month7Abbr":"Aoû","month8Abbr":"Sep","month9Abbr":"Oct","month10Abbr":"Nov","month11Abbr":"Déc","day1":"Lundi","day2":"Mardi","day3":"Mercredi","day4":"Jeudi","day5":"Vendredi","day6":"Samedi","day7":"Dimanche","day1Abbr":"Lun","day2Abbr":"Mar","day3Abbr":"Mer","day4Abbr":"Jeu","day5Abbr":"Ven","day6Abbr":"Sam","day7Abbr":"Dim","today":"Aujourd’hui","tomorrow":"Demain","wc2018":"Coupe du Monde 2018","russia":"Russie","showAllParticipants":"Afficher tous les {0} participants"},"fr_FR":{"Live":"Direct","Right Now":"Maintenant","month0":"Janvier","month1":"Février","month2":"Mars","month3":"Avril","month4":"Mai","month5":"Juin","month6":"Juillet","month7":"Août","month8":"Septembre","month9":"Octobre","month10":"Novembre","month11":"Décembre","month0Abbr":"Jan","month1Abbr":"Fév","month2Abbr":"Mar","month3Abbr":"Avr","month4Abbr":"Mai","month5Abbr":"Jun","month6Abbr":"Jul","month7Abbr":"Aoû","month8Abbr":"Sep","month9Abbr":"Oct","month10Abbr":"Nov","month11Abbr":"Déc","day1":"Lundi","day2":"Mardi","day3":"Mercredi","day4":"Jeudi","day5":"Vendredi","day6":"Samedi","day7":"Dimanche","day1Abbr":"Lun","day2Abbr":"Mar","day3Abbr":"Mer","day4Abbr":"Jeu","day5Abbr":"Ven","day6Abbr":"Sam","day7Abbr":"Dim","today":"Aujourd’hui","tomorrow":"Demain","wc2018":"Coupe du Monde 2018","russia":"Russie","showAllParticipants":"Afficher tous les {0} participants"},"hu_HU":{"Live":"Élő","Right Now":"Épp most","month0":"Január","month1":"Február","month2":"Március","month3":"Április","month4":"Május","month5":"Június","month6":"Július","month7":"Augusztus","month8":"Szeptember","month9":"Október","month10":"November","month11":"December","month0Abbr":"Jan.","month1Abbr":"Febr.","month2Abbr":"Márc.","month3Abbr":"Ápr.","month4Abbr":"Máj.","month5Abbr":"Jún.","month6Abbr":"Júl.","month7Abbr":"Aug.","month8Abbr":"Szept.","month9Abbr":"Okt.","month10Abbr":"Nov.","month11Abbr":"Dec.","day1":"Hétfő","day2":"Kedd","day3":"Szerda","day4":"Csütörtök","day5":"Péntek","day6":"Szombat","day7":"Vasárnap","day1Abbr":"Hé","day2Abbr":"Ke","day3Abbr":"Szer","day4Abbr":"Csüt","day5Abbr":"Pén","day6Abbr":"Szo","day7Abbr":"Vas","today":"Ma","tomorrow":"Holnap","wc2018":"2018-as labdarúgó világbajnokság","russia":"Oroszország","showAllParticipants":"Mind a(z) {0} résztvevő megjelenítése"},"it_IT":{"Live":"Live","Right Now":"Adesso","month0":"Gennaio","month1":"Febbraio","month2":"Marzo","month3":"Aprile","month4":"Maggio","month5":"Giugno","month6":"Luglio","month7":"Agosto","month8":"Settembre","month9":"Ottobre","month10":"Novembre","month11":"Dicembre","month0Abbr":"Gen","month1Abbr":"Feb","month2Abbr":"Mar","month3Abbr":"Apr","month4Abbr":"Mag","month5Abbr":"Giu","month6Abbr":"Lug","month7Abbr":"Ago","month8Abbr":"Set","month9Abbr":"Ott","month10Abbr":"Nov","month11Abbr":"Dic","day1":"Lunedì","day2":"Martedì","day3":"Mercoledì","day4":"Giovedì","day5":"Venerdì","day6":"Sabato","day7":"Domenica","day1Abbr":"Lun","day2Abbr":"Mar","day3Abbr":"Mer","day4Abbr":"Gio","day5Abbr":"Ven","day6Abbr":"Sab","day7Abbr":"Dom","today":"Oggi","tomorrow":"Domani","wc2018":"Coppa del mondo 2018","russia":"Russia","showAllParticipants":"Mostra tutti {0} i partecipanti"},"lt_LT":{"Live":"Tiesiogiai","Right Now":"Šiuo metu","month0":"sausis","month1":"vasaris","month2":"kovas","month3":"balandis","month4":"gegužė","month5":"birželis","month6":"liepa","month7":"rugpjūtis","month8":"rugsėjis","month9":"spalis","month10":"lapkritis","month11":"gruodis","month0Abbr":"saus.","month1Abbr":"vasar.","month2Abbr":"kov.","month3Abbr":"baland.","month4Abbr":"geguž.","month5Abbr":"birž.","month6Abbr":"liep.","month7Abbr":"rugpj.","month8Abbr":"rugs.","month9Abbr":"spal.","month10Abbr":"lapkr.","month11Abbr":"gruod.","day1":"pirmadienis","day2":"antradienis","day3":"trečiadienis","day4":"ketvirtadienis","day5":"penktadienis","day6":"šeštadienis","day7":"sekmadienis","day1Abbr":"pirmad.","day2Abbr":"antrad.","day3Abbr":"trečiad.","day4Abbr":"ketvirtad.","day5Abbr":"penktad.","day6Abbr":"šeštad.","day7Abbr":"sekm.","today":"Šiandien","tomorrow":"Rytoj","wc2018":"2018 m. pasaulio taurė","russia":"Rusija","showAllParticipants":"Rodytis visus {0} dalyvius"},"lv_LV":{"Live":"Tiešraide","Right Now":"Šobrīd","month0":"janvāris","month1":"februāris","month2":"marts","month3":"aprīlis","month4":"maijs","month5":"jūnijs","month6":"jūlijs","month7":"augusts","month8":"septembris","month9":"oktobris","month10":"novembris","month11":"decembris","month0Abbr":"janv.","month1Abbr":"febr.","month2Abbr":"mar.","month3Abbr":"apr.","month4Abbr":"maijs","month5Abbr":"jūn.","month6Abbr":"jūl.","month7Abbr":"aug.","month8Abbr":"sep.","month9Abbr":"okt.","month10Abbr":"nov.","month11Abbr":"dec.","day1":"pirmdiena","day2":"otrdiena","day3":"trešdiena","day4":"ceturtdiena","day5":"piektdiena","day6":"sestdiena","day7":"svētdiena","day1Abbr":"Pr","day2Abbr":"O","day3Abbr":"T","day4Abbr":"C","day5Abbr":"Pk","day6Abbr":"S","day7Abbr":"Sv","today":"šodiena","tomorrow":"rītdiena","wc2018":"2018.gada Pasaules kauss","russia":"Krievija","showAllParticipants":"Parādīt visus {0} dalībniekus"},"nl_BE":{"Live":"Live","Right Now":"Nu","month0":"Januari","month1":"Februari","month2":"Maart","month3":"April","month4":"Mei","month5":"Juni","month6":"Juli","month7":"Augustus","month8":"September","month9":"Oktober","month10":"November","month11":"December","month0Abbr":"Jan","month1Abbr":"Feb","month2Abbr":"Mrt","month3Abbr":"Apr","month4Abbr":"Mei","month5Abbr":"Jun","month6Abbr":"Jul","month7Abbr":"Aug","month8Abbr":"Sep","month9Abbr":"Okt","month10Abbr":"Nov","month11Abbr":"Dec","day1":"Maandag","day2":"Dinsdag","day3":"Woensdag","day4":"Donderdag","day5":"Vrijdag","day6":"Zaterdag","day7":"Zondag","day1Abbr":"Ma","day2Abbr":"Di","day3Abbr":"Wo","day4Abbr":"Do","day5Abbr":"Vr","day6Abbr":"Za","day7Abbr":"Zo","today":"Vandaag","tomorrow":"Morgen","wc2018":"WK 2018","russia":"Rusland","showAllParticipants":"Alle {0} deelnemers tonen"},"nl_NL":{"Live":"Live","Right Now":"Nu","month0":"Januari","month1":"Februari","month2":"Maart","month3":"April","month4":"Mei","month5":"Juni","month6":"Juli","month7":"Augustus","month8":"September","month9":"Oktober","month10":"November","month11":"December","month0Abbr":"Jan","month1Abbr":"Feb","month2Abbr":"Mrt","month3Abbr":"Apr","month4Abbr":"Mei","month5Abbr":"Jun","month6Abbr":"Jul","month7Abbr":"Aug","month8Abbr":"Sep","month9Abbr":"Okt","month10Abbr":"Nov","month11Abbr":"Dec","day1":"Maandag","day2":"Dinsdag","day3":"Woensdag","day4":"Donderdag","day5":"Vrijdag","day6":"Zaterdag","day7":"Zondag","day1Abbr":"Ma","day2Abbr":"Di","day3Abbr":"Wo","day4Abbr":"Do","day5Abbr":"Vr","day6Abbr":"Za","day7Abbr":"Zo","today":"Vandaag","tomorrow":"Morgen","wc2018":"WK 2018","russia":"Rusland","showAllParticipants":"Alle {0} deelnemers tonen"},"no_NO":{"Live":"Live","Right Now":"Akkurat nå","month0":"Januar","month1":"Februar","month2":"Mars","month3":"April","month4":"Mai","month5":"Juni","month6":"Juli","month7":"August","month8":"September","month9":"Oktober","month10":"November","month11":"Desember","month0Abbr":"Jan","month1Abbr":"Feb","month2Abbr":"Mar","month3Abbr":"Apr","month4Abbr":"Mai","month5Abbr":"Jun","month6Abbr":"Jul","month7Abbr":"Aug","month8Abbr":"Sep","month9Abbr":"Okt","month10Abbr":"Nov","month11Abbr":"Des","day1":"Mandag","day2":"Tirsdag","day3":"Onsdag","day4":"Torsdag","day5":"Fredag","day6":"Lørdag","day7":"Søndag","day1Abbr":"Man","day2Abbr":"Tirs","day3Abbr":"Ons","day4Abbr":"Tors","day5Abbr":"Fre","day6Abbr":"Lør","day7Abbr":"Søn","today":"I dag","tomorrow":"I morgen","wc2018":"Verdensmesterskapet i fotball 2018","russia":"Russland","showAllParticipants":"Vis alle {0} deltakere"},"pl_PL":{"Live":"Na żywo","Right Now":"Teraz","month0":"Styczeń","month1":"Luty","month2":"Marzec","month3":"Kwiecień","month4":"Maj","month5":"Czerwiec","month6":"Lipiec","month7":"Sierpień","month8":"Wrzesień","month9":"Październik","month10":"Listopad","month11":"Grudzień","month0Abbr":"Sty","month1Abbr":"Lut","month2Abbr":"Mar","month3Abbr":"Kwi","month4Abbr":"Maj","month5Abbr":"Cze","month6Abbr":"Lip","month7Abbr":"Sie","month8Abbr":"Wrz","month9Abbr":"Paź","month10Abbr":"Lis","month11Abbr":"Gru","day1":"Poniedziałek","day2":"Wtorek","day3":"Środa","day4":"Czwartek","day5":"Piątek","day6":"Sobota","day7":"Niedziela","day1Abbr":"Pon","day2Abbr":"Wt","day3Abbr":"Śr","day4Abbr":"Czw","day5Abbr":"Pt","day6Abbr":"Sob","day7Abbr":"Nie","today":"Dziś","tomorrow":"Jutro","wc2018":"Puchar Świata 2018","russia":"Rosja","showAllParticipants":"Pokaż wszystkich uczestników: {0}"},"pt_BR":{"Live":"Ao Vivo","Right Now":"Agora Mesmo","month0":"Janeiro","month1":"Fevereiro","month2":"Março","month3":"Abril","month4":"Maio","month5":"Junho","month6":"Julho","month7":"Agosto","month8":"Setembro","month9":"Outubro","month10":"Novembro","month11":"Dezembro","month0Abbr":"Jan","month1Abbr":"Fev","month2Abbr":"Mar","month3Abbr":"Abr","month4Abbr":"Maio","month5Abbr":"Jun","month6Abbr":"Jul","month7Abbr":"Ago","month8Abbr":"Set","month9Abbr":"Out","month10Abbr":"Nov","month11Abbr":"Dez","day1":"Segunda-Feira","day2":"Terça-Feira","day3":"Quarta-Feira","day4":"Quinta-Feira","day5":"Sexta-Feira","day6":"Sábado","day7":"Domingo","day1Abbr":"Seg","day2Abbr":"Ter","day3Abbr":"Qua","day4Abbr":"Qui","day5Abbr":"Sex","day6Abbr":"Sáb","day7Abbr":"Dom","today":"Hoje","tomorrow":"Amanhã","wc2018":"Campeonato do Mundo de 2018","russia":"Rússia","showAllParticipants":"Mostrar todos os {0} participantes"},"pt_PT":{"Live":"Ao Vivo","Right Now":"Agora Mesmo","month0":"Janeiro","month1":"Fevereiro","month2":"Março","month3":"Abril","month4":"Maio","month5":"Junho","month6":"Julho","month7":"Agosto","month8":"Setembro","month9":"Outubro","month10":"Novembro","month11":"Dezembro","month0Abbr":"Jan","month1Abbr":"Fev","month2Abbr":"Mar","month3Abbr":"Abr","month4Abbr":"Maio","month5Abbr":"Jun","month6Abbr":"Jul","month7Abbr":"Ago","month8Abbr":"Set","month9Abbr":"Out","month10Abbr":"Nov","month11Abbr":"Dez","day1":"Segunda-Feira","day2":"Terça-Feira","day3":"Quarta-Feira","day4":"Quinta-Feira","day5":"Sexta-Feira","day6":"Sábado","day7":"Domingo","day1Abbr":"Seg","day2Abbr":"Ter","day3Abbr":"Qua","day4Abbr":"Qui","day5Abbr":"Sex","day6Abbr":"Sáb","day7Abbr":"Dom","today":"Hoje","tomorrow":"Amanhã","wc2018":"Campeonato do Mundo de 2018","russia":"Rússia","showAllParticipants":"Mostrar todos os {0} participantes"},"ro_RO":{"Live":"Live","Right Now":"Chiar Acum","month0":"Ianuarie","month1":"Februarie","month2":"Martie","month3":"Aprilie","month4":"Mai","month5":"Iunie","month6":"Iulie","month7":"August","month8":"Septembrie","month9":"Octombrie","month10":"Noiembrie","month11":"Decemberie","month0Abbr":"Ian","month1Abbr":"Feb","month2Abbr":"Mart","month3Abbr":"Apr","month4Abbr":"Mai","month5Abbr":"Iun","month6Abbr":"Iul","month7Abbr":"Aug","month8Abbr":"Sept","month9Abbr":"Oct","month10Abbr":"Nov","month11Abbr":"Dec","day1":"Luni","day2":"Marți","day3":"Miercuri","day4":"Joi","day5":"Vineri","day6":"Sâmbătă","day7":"Duminică","day1Abbr":"Lu","day2Abbr":"Ma","day3Abbr":"Mi","day4Abbr":"Jo","day5Abbr":"Vi","day6Abbr":"Sâ","day7Abbr":"Du","today":"Astăzi","tomorrow":"Mâine","wc2018":"Cupa Mondială 2018","russia":"Rusia","showAllParticipants":"Afișează toți cei {0} participanți"},"ru_RU":{"Live":"Live","Right Now":"Сейчас","month0":"Январь","month1":"Февраль","month2":"Март","month3":"Апрель","month4":"Май","month5":"Июнь","month6":"Июль","month7":"Август","month8":"Сентябрь","month9":"Октябрь","month10":"Ноябрь","month11":"Декабрь","month0Abbr":"Янв","month1Abbr":"Фев","month2Abbr":"Мар","month3Abbr":"Апр","month4Abbr":"Май","month5Abbr":"Июн","month6Abbr":"Июл","month7Abbr":"Авг","month8Abbr":"Сен","month9Abbr":"Окт","month10Abbr":"Ноя","month11Abbr":"Дек","day1":"Понедельник","day2":"Вторник","day3":"Среда","day4":"Четверг","day5":"Пятница","day6":"Суббота","day7":"Воскресенье","day1Abbr":"Пн","day2Abbr":"Вт","day3Abbr":"Ср","day4Abbr":"Чт","day5Abbr":"Пт","day6Abbr":"Сб","day7Abbr":"Вс","today":"Сегодня","tomorrow":"Завтра","wc2018":"Чемпионат мира 2018","russia":"Россия","showAllParticipants":"Показать всех {0} участников"},"sv_SE":{"Live":"Direkt","Right Now":"Just nu","month0":"Januari","month1":"Februari","month2":"Mars","month3":"April","month4":"Maj","month5":"Juni","month6":"Juli","month7":"Augusti","month8":"September","month9":"Oktober","month10":"November","month11":"December","month0Abbr":"Jan","month1Abbr":"Feb","month2Abbr":"Mar","month3Abbr":"Apr","month4Abbr":"Maj","month5Abbr":"Jun","month6Abbr":"Jul","month7Abbr":"Aug","month8Abbr":"Sep","month9Abbr":"Okt","month10Abbr":"Nov","month11Abbr":"Dec","day1":"Måndag","day2":"Tisdag","day3":"Onsdag","day4":"Torsdag","day5":"Fredag","day6":"Lördag","day7":"Söndag","day1Abbr":"Mån","day2Abbr":"Tis","day3Abbr":"Ons","day4Abbr":"Tor","day5Abbr":"Fre","day6Abbr":"Lör","day7Abbr":"Sön","today":"Idag","tomorrow":"Imorgon","wc2018":"VM 2018","russia":"Ryssland","showAllParticipants":"Visa alla {0} deltagare"}};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _offeringModule = __webpack_require__(8);

var _offeringModule2 = _interopRequireDefault(_offeringModule);

var _statisticsModule = __webpack_require__(11);

var _statisticsModule2 = _interopRequireDefault(_statisticsModule);

var _translationModule = __webpack_require__(12);

var _translationModule2 = _interopRequireDefault(_translationModule);

var _utilModule = __webpack_require__(6);

var _utilModule2 = _interopRequireDefault(_utilModule);

var _widgetModule = __webpack_require__(13);

var _widgetModule2 = _interopRequireDefault(_widgetModule);

var _updatesModule = __webpack_require__(15);

var _updatesModule2 = _interopRequireDefault(_updatesModule);

var _constants = __webpack_require__(53);

var _constants2 = _interopRequireDefault(_constants);

var _mockWidgetApi = __webpack_require__(54);

var _mockWidgetApi2 = _interopRequireDefault(_mockWidgetApi);

var _core = __webpack_require__(55);

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Main module that holds the other modules as well as widget
 * related configurations
 * @module coreLibrary
 */

// checks status of a HTTP response and throws error if appropriate
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

// checks browser type and version
function checkBrowser() {
  var ua = window.navigator.userAgent;

  var getFirstMatch = function getFirstMatch(regex) {
    var match = ua.match(regex);
    return match && match.length > 1 && match[1] || '';
  };

  var versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i);

  if (/android/i.test(ua)) {
    return {
      browser: 'android',
      browserVersion: versionIdentifier
    };
  } else if (/(ipod|iphone|ipad)/i.test(ua)) {
    return {
      browser: 'ios',
      browserVersion: getFirstMatch(/(?:mxios)[\s/](\d+(?:\.\d+)+)/i)
    };
  } else if (/msie|trident/i.test(ua)) {
    return {
      browser: 'internet-explorer',
      browserVersion: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
    };
  } else if (/chrome|crios|crmo/i.test(ua)) {
    return {
      browser: 'chrome',
      browserVersion: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
    };
  } else if (/safari|applewebkit/i.test(ua)) {
    return {
      browser: 'safari',
      browserVersion: versionIdentifier
    };
  } else if (/chrome.+? edge/i.test(ua)) {
    return {
      browser: 'microsoft-edge',
      browserVersion: getFirstMatch(/edge\/(\d+(\.\d+)?)/i)
    };
  } else if (/firefox|iceweasel|fxios/i.test(ua)) {
    return {
      browser: 'firefox',
      browserVersion: getFirstMatch(/(?:firefox|iceweasel|fxios)[ /](\d+(\.\d+)?)/i)
    };
  }
}

/*
 * Downloads a resource from given URL.
 * @param {string} url URL of resource
 * @returns {Promise.<{status: number, statusText: string, body: string}>}
 */
function download(url) {
  return new Promise(function (resolve, reject) {
    // fetch API is not supported in IE11 so we use
    // old-school XMLHttpRequest
    var xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onload = function () {
      var response = {
        status: xhr.status,
        statusText: xhr.statusText,
        body: 'response' in xhr ? xhr.response : xhr.responseText
      };

      resolve(response);
    };

    xhr.onerror = function () {
      return reject(new TypeError('Network request failed'));
    };

    xhr.ontimeout = function () {
      return reject(new TypeError('Network request failed'));
    };

    xhr.send();
  });
}

exports.default = {
  /**
   * If true the coreLibrary has been initialized
   * @type {Boolean}
   */
  initialized: false,

  /**
   * Name of the browser that is running the widget
   * @type {String}
   */
  browser: checkBrowser().browser,

  /**
   * Browser version
   * @type {String}
   */
  browserVersion: checkBrowser().browserVersion,

  /**
   * An array with the default classes that should be added to HTML tag
   */
  kambiDefaultClasses: ['KambiWidget-card-text-color', 'KambiWidget-card-background-color', 'KambiWidget-font'],

  /**
   * Config object. This data comes from the sportsbook and should not be manually changed. When in running the widget stand alone this values are retrieved from ./src/mockSetupData.json
   * @name config
   * @type {Object}
   * @property {String} apiBaseUrl url of the offering api to use
   * @property {Boolean} auth
   * @property {Number} channelId
   * @property {String} currency what currency to use
   * @property {String} customer the customer to use with the offering API
   * @property {String} device what kind of device does the user have. Possible values: 'desktop', 'mobile'
   * @property {String} locale locale of the user, example: 'en_GB', 'sv_SE'
   * @property {String} market market to use with the offering API.
   * @property {String} oddsFormat the odds format to show. Possible values: 'decimal', 'fractional', 'american'. To listen to changes to this value use eventsModule.subscribe('ODDS:FORMAT', eventHandlerFn);
   * @property {String} offering the offering to use with the offering API
   * @property {String} routeRoot
   * @property {Boolean} streamingAllowedForPlayer
   * @property {Number} client_id
   * @property {String} version
   */
  _config: {
    apiBaseUrl: '',
    apiBaseUrls: {},
    apiStatisticsBaseUrl: '',
    auth: false,
    channelId: 1,
    currency: 'EUR',
    customer: '',
    device: 'desktop',
    locale: 'en_GB',
    market: 'GB',
    oddsFormat: 'decimal',
    offering: '',
    routeRoot: '',
    streamingAllowedForPlayer: true,
    client_id: 2,
    version: 'v2'
  },

  get config() {
    return this._config;
  },

  set config(config) {
    for (var i in config) {
      if (config.hasOwnProperty(i) && this._config.hasOwnProperty(i)) {
        this._config[i] = config[i];
      }
    }
    // Make sure that the routeRoot is not null or undefined
    if (this._config.routeRoot == null) {
      this._config.routeRoot = '';
    } else if (this._config.routeRoot.length > 0 && this._config.routeRoot.slice(-1) !== '/') {
      // If the routeRoot is not empty we need to make sure it has a trailing slash
      this._config.routeRoot += '/';
    }
  },

  /**
   * The odds format for the bets shown in the widget
   * @private
   */
  _oddsFormat: null,

  set oddsFormat(format) {
    this._oddsFormat = format;
  },

  get oddsFormat() {
    return this._oddsFormat;
  },

  /**
   * default args object
   * @private
   */
  _defaultArgs: {},

  get defaultArgs() {
    return this._defaultArgs;
  },

  set defaultArgs(defaultArgs) {
    this._defaultArgs = Object.assign(defaultArgs, {
      onHeightChange: function onHeightChange() {},
      onWidgetRemoved: function onWidgetRemoved() {},
      onWidgetLoaded: function onWidgetLoaded() {}
    });
  },

  /**
    * args object for the widget, merges the default args provided by coreLibrary.init() with the ones that come from the sportsbook. There are some pre-defined arguments that all widgets accept, but most of them are widget-defined.
    * @property {String} widgetTrackingName Sets widget tracking name for analytics purposes. This tracking name is used for calls to add bets to the betslip
    * @property {String} customCssUrl URL to a CSS file to add to the page, expressions like "{customer}" are replaced with their values in coreLibrary.config. This is useful to load different stylesheets based on operator name.
    Example:
    Say coreLibrary.config.customer is 'kambi', then if this argument was set:
    {
      customCssUrl: "https://someurl.com/customcss/{customer}/style.css"
    }
    It would load this CSS file and add it to the page:
    https://someurl.com/customcss/kambi/style.css
     * @property {String} customCssUrlFallback fallback if the fetching of customCssUrl fails
    * @property {Function} onHeightChange Callback called when an embedded widget height changes (by calling either widgetModule.setWidgetHeight or widgetModule.adaptWidgetHeight)
    * @property {Function} onWidgetRemoved Callback called when an widget removes itself (by calling widgetModule.removeWidget)
    * @property {Function} onWidgetLoaded Callback called when an widget finishes loading. This needs to be called by the widget itself after rendering its content
    * @property {Function} onWidgetNavigateClient Callback called when an widget wants to navigate to another page. In embedded mode the widget will NOT call the WidgetAPI.navigateClient, instead it will call this method with the path of the page. Second parameter is coreLibrary.args.widgetTrackingName
    * @property {Array<Object>} conditionalArgs Optional, specify arguments to be applied based on some condition based in the values inside coreLibrary.config or coreLibrary.pageInfo
    * @property {String|null} widgetTrackingName  navigateClient Optional, callback called when the widget tries to perform internal Kambi Sportsbook navigation
    example:
     conditionalArgs: [
      // if coreLibrary.config.currency is 'EUR' apply { euro: true, dollars: false } to the arguments
      {
         config: {
            currency: 'EUR'
         },
         args: {
            euro: true,
            dollars: false
         }
      },
      // if market is 'IT' AND offering is 'IT' apply { italian: true } to the arguments
      {
         config: {
            market: 'IT',
            offering: 'IT'
         },
         args: {
            italian: true
         }
      },
    ]
     * @name args
    */
  _args: null,

  get args() {
    return this._args;
  },

  set args(args) {
    var _this = this;

    args = Object.assign({}, this.defaultArgs, args);

    // Handling conditionalArgs
    if (args.conditionalArgs != null) {
      args.conditionalArgs.forEach(function (carg) {
        var apply = true;
        if (carg.clientConfig != null) {
          Object.keys(carg.clientConfig).forEach(function (key) {
            if (_this.config[key] !== carg.clientConfig[key]) {
              apply = false;
            }
          });
        }

        if (carg.pageInfo != null) {
          Object.keys(carg.pageInfo).forEach(function (key) {
            if (_this.pageInfo[key] !== carg.pageInfo[key]) {
              apply = false;
            }
          });
        }

        if (apply) {
          console.log('Applying conditional arguments:');
          console.log(carg.args);
          args = Object.assign(args, carg.args);
        }
      });
    }

    this._args = args;
  },

  /**
   * Information about the page that the widget is being loaded from
   * @name pageInfo
   * @type {Object}
   * @property {Array(String)} leaguePaths array with league paths. Example:['football/england/premier_league']
   * @property {String} pageParam parameter for this page. For a page of type 'filter' an example would be 'football/england/premier_league'
   * @property {String} pageTrackingPath the path in the url for this page. For example: '/filter/football/england/premier_league'
   * @property {String} pageType type of the page, examples: 'home', 'filter'
   */
  _pageInfo: {
    leaguePaths: [],
    pageParam: '',
    pageTrackingPath: '',
    pageType: ''
  },

  get pageInfo() {
    return this._pageInfo;
  },

  set pageInfo(pageInfo) {
    // Check if the last character in the pageParam property is a slash, if not add it so we can use this property in filter requests
    if (pageInfo.pageType === 'filter' && pageInfo.pageParam.substr(-1) !== '/') {
      pageInfo.pageParam += '/';
    }
    this._pageInfo = pageInfo;
  },

  /**
   * Element that should be used as root to render the widget from. Widgets should render only inside this element
   * @name rootElement
   * @type {HTMLElement}
   */
  rootElement: null,

  /**
   * Element that the widget will be placed inside of when running in embedded mode
   * @name rootElement
   * @type {HTMLElement}
   * @private
   */
  embeddedElement: null,

  /**
   * Versions of the API provided by the sportsbook
   * @name apiVersions
   * @type {Object}
   * @property {String} client
   * @property {String} libs
   * @property {String} wapi
   */
  _apiVersions: {
    client: '',
    libs: '',
    wapi: ''
  },

  get apiVersions() {
    return this._apiVersions;
  },

  set apiVersions(versions) {
    this._apiVersions = versions;
  },

  /**
   * The name sent to Kambi API for analytics data collection
   */
  _widgetTrackingName: null,

  set widgetTrackingName(name) {
    if (name == null) {
      name = null; // transforms undefined to null
    }
    this._widgetTrackingName = name;
  },

  get widgetTrackingName() {
    return this._widgetTrackingName;
  },

  /**
   * Promise that is resolved when all the CSS has finished loading
   * @type Promise
   */
  cssLoadedPromise: null,

  /**
   * a direct reference to the Kambi's WidgetApi (wapi)
   * @type Object
   */
  widgetApi: null,

  /**
   * Methods returned by the widget when it's function is called in Embedded mode
   * by adding more methods here the widget can set up communication with the rest of the page
   */
  embeddedMethods: {
    removeWidget: _widgetModule2.default.removeWidget.bind(_widgetModule2.default)
  },

  /**
   * Initializes the Kambi api
   * Uses ./src/mockSetupData.json as coreLibrary.configs if not loaded inside the sportsbook (ie opened the widget directly).
   * @param {Object} defaultArgs arguments to be used if they are not provided by the sportsbook
   * @returns {Promise} resolved when everything is ready. If an error happens during fetching the error can be catched in a .catch() function
   */
  init: function init(defaultArgs) {
    var _this2 = this;

    this.defaultArgs = defaultArgs;
    var EMBEDDED = "true" === 'true';

    return new Promise(function (resolve, reject) {
      // applies the setup data and sets up the CSS and translations
      var applySetupData = function applySetupData(setupData) {
        _this2.oddsFormat = setupData.clientConfig.oddsFormat;
        _this2.config = setupData.clientConfig;
        _this2.pageInfo = setupData.pageInfo;
        _this2.apiVersions = setupData.versions;
        _this2.args = setupData.arguments;
        if (!EMBEDDED) {
          // if embedded the widget will assume that operator CSS is included by whoever is embedding it
          _this2.injectOperatorCss(_this2.config.customer, _this2.config.offering);

          var body = document.body;
          _this2.kambiDefaultClasses.map(function (cssClass) {
            body.classList.add(cssClass);
          });
        }
        _this2.injectCustomCss(_this2.args.customCssUrl, _this2.args.customCssUrlFallback);

        _this2.widgetTrackingName = _this2.args.widgetTrackingName;

        _this2.initialized = true;
        resolve();
      };

      if (EMBEDDED) {
        if (!window.gmWidgets) {
          window.gmWidgets = {};
        }
        window.gmWidgets["wc2018-tournament-overview-widget"] = function (container, wapi, clientConfig, args) {
          _this2.widgetApi = wapi;
          _this2.embeddedElement = container;
          _this2.rootElement = document.createElement('div');
          _this2.rootElement.className += ' ' + [_core2.default.rootElement].join(' ');
          _this2.embeddedElement.className += ' ' + [_core2.default.rootElementEmbedded].join(' ');
          _this2.embeddedElement.appendChild(_this2.rootElement);
          if (window.KambiWidget.receiveResponse == null) {
            window.KambiWidget.receiveResponse = function () {};
          }
          var previousResponseHandler = window.KambiWidget.receiveResponse;
          window.KambiWidget.receiveResponse = function (dataObject, wapi) {
            previousResponseHandler(dataObject, wapi); // calls any handlers from other widgets or the main page
            _widgetModule2.default.handleResponse(dataObject);
            _updatesModule2.default.handleResponse(dataObject);
          };
          _widgetModule2.default.requestBetslipOutcomes();
          // we intentionally do not call requestOddsFormat here, this method should be called exactly once per page so it should be called by whoever is calling this widget.
          //widgetModule.requestOddsFormat()
          applySetupData({
            clientConfig: Object.assign({}, clientConfig),
            arguments: Object.assign({}, args),
            pageInfo: {},
            versions: {}
          });
          return _this2.embeddedMethods;
        };
      } else {
        document.documentElement.className += ' ' + _core2.default.notEmbedded;
        _this2.rootElement = document.createElement('div');
        _this2.rootElement.className += ' ' + _core2.default.rootElement;
        document.body.appendChild(_this2.rootElement);

        if (window.self === window.top) {
          // For development purposes we might want to load a widget on its own so we check if we are in an iframe, if not then load a mocked version of the setupData
          _this2.widgetApi = _mockWidgetApi2.default;
          console.warn(window.location.host + window.location.pathname + ' is being loaded as stand-alone');

          _this2.getData('mockSetupData.json').then(function (mockSetupData) {
            console.debug('Loaded mock setup data');
            console.debug(mockSetupData);
            applySetupData(mockSetupData);
          }).catch(function (error) {
            console.debug('Failed to fetch mockSetupData');
            console.trace(error);
            reject();
          });
        } else {
          window.KambiWidget.apiReady = function (wapi) {
            _this2.widgetApi = wapi;

            // Request the setupData from the widget api
            _widgetModule2.default.requestSetup(function (setupData) {
              // Request the outcomes from the betslip so we can update our widget, also sets up a subscription for future betslip updates
              _widgetModule2.default.requestBetslipOutcomes();
              // Request the odds format that is set in the sportsbook, this also sets up a subscription for future odds format changes
              _widgetModule2.default.requestOddsFormat();

              applySetupData(setupData);
            });
          };
          // Setup the response handler for the widget api
          window.KambiWidget.receiveResponse = function (dataObject) {
            _widgetModule2.default.handleResponse(dataObject);
            _updatesModule2.default.handleResponse(dataObject);
          };
        }
      }
    });
  },


  /**
   * Dynamically creates a style tag and returns it
   * @param id {String} the id to add to the tag
   * @param content {String} text content of the tag (the styles)
   * @returns HTMLElement the tag created
   * @private
   */
  createStyleTag: function createStyleTag(id, url) {
    var tag = document.createElement('link');
    tag.setAttribute('id', id);
    tag.setAttribute('rel', 'stylesheet');
    tag.setAttribute('type', 'text/css');
    tag.setAttribute('href', url);
    return tag;
  },


  /**
   * Injects operator specific CSS based on version defined in constans.js,
   * customer and offering
   * @param customer {String}
   * @param offering {String}
   * @private
   */
  injectOperatorCss: function injectOperatorCss(customer, offering) {
    var url = '//c3-static.kambi.com/sb-mobileclient/widget-api/' + _constants2.default.widgetCssVersion + '/resources/css/' + customer + '/' + offering + '/widgets.css';
    var tag = this.createStyleTag('operator-css', url);
    var head = document.head;
    // opereator CSS should be the FIRST CSS in the page
    head.insertBefore(tag, head.firstChild);
  },


  /**
   * Injects stylesheet based on configuration parameters (coreLibrary.config)
   * Replaces expressions like "{customer}" in the strings provided
   * @param customCssUrl {String}
   * @param customCssUrlFallback {String} Fallback if the first URL fetch fails
   * @returns {Promise} when resolved the stylesheet has been successfully added to the page
   * @private
   */
  injectCustomCss: function injectCustomCss(customCssUrl, customCssUrlFallback) {
    var _this3 = this;

    if (customCssUrl == null) {
      return;
    }
    if (customCssUrlFallback == null) {
      customCssUrlFallback = '';
    }

    customCssUrl = _utilModule2.default.replaceConfigParameters(customCssUrl);
    customCssUrlFallback = _utilModule2.default.replaceConfigParameters(customCssUrlFallback);

    var appendToHead = function appendToHead(url) {
      var tag = _this3.createStyleTag('custom-css', url);
      var head = document.head;
      // custom CSS should be the LAST CSS in the page
      head.insertBefore(tag, null);
    };

    // TODO instead of doing an extra request maybe try to add an
    // event listener to the <link> tag to see if the file exists or not
    // see http://stackoverflow.com/questions/10537039/how-to-determine-if-css-has-been-loaded
    return this.getFile(customCssUrl).then(function (response) {
      appendToHead(customCssUrl);
      return response;
    }).catch(function (error) {
      if (customCssUrlFallback !== '') {
        console.debug('Error fetching custom css, using fallback');
        appendToHead(customCssUrlFallback);
      } else {
        console.debug('Error fetching custom css, no fallback present');
        return error;
      }
    });
  },


  /**
   * Makes a AJAX request and parses its response as JSON
   * @param {String} url
   * @returns {Promise} resolved when the data fetching finishes. If an error happens during fetching the error can be catched in a .catch() function
   */
  getData: function getData(url) {
    return download(url).then(checkStatus).then(function (response) {
      return JSON.parse(response.body);
    }).catch(function (error) {
      console.debug('Error fetching data');
      console.trace(error);
      throw error;
    });
  },


  /**
   * Makes a AJAX request and parses its response as text
   * @param {String} url
   * @returns {Promise} resolved when the data fetching finishes. If an error happens during fetching the error can be catched in a .catch() function
   */
  getFile: function getFile(url) {
    return download(url).then(checkStatus).then(function (response) {
      return response.body;
    }).catch(function (error) {
      console.debug('Error fetching file');
      console.trace(error);
      throw error;
    });
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _coreLibrary = __webpack_require__(5);

var _coreLibrary2 = _interopRequireDefault(_coreLibrary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* we are not using the translationModule.getTranslation
because the translations files are set in the widgets, we don't want to force the widgets to include static labels for outcomes. If we need more labels than "draw" we might want to consider doing some build-time magic to not include all the locales values */
var labelsTranslations = {
  draw: {
    cs_CZ: 'Remíza',
    da_DK: 'Uafgjort',
    de_AT: 'Unentschieden',
    de_CH: 'Unentschieden',
    de_DE: 'Unentschieden',
    el_GR: 'Ισοπαλία',
    en_AU: 'Draw',
    en_GB: 'Draw',
    es_ES: 'Empate',
    et_EE: 'Viik',
    fi_FI: 'Tasapeli',
    fr_BE: 'Nul',
    fr_CH: 'Nul',
    fr_FR: 'Nul',
    hu_HU: 'Döntetlen',
    it_IT: 'Pareggio',
    lt_LT: 'Lygiosios',
    lv_LV: 'Neizšķirts',
    nl_BE: 'Gelijkspel',
    nl_NL: 'Gelijkspel',
    no_NO: 'Uavgjort',
    pl_PL: 'Remis',
    pt_BR: 'Empate',
    pt_PT: 'Empate',
    ro_RO: 'Egalitate',
    ru_RU: 'Ничья',
    sv_SE: 'Oavgjort',
    tr_TR: 'Draw'
  }

  /**
   * Module with utility functions
   * @module utilModule
   */
};exports.default = {
  /**
   * Util method for return unique items between arrays
   * @param {Array} A First array
   * @param {Array} B Second array
   * @returns {Array}
   * @private
   */
  diffArray: function diffArray(A, B) {
    var map = {},
        C = [];

    for (var i = B.length; i--;) {
      map[B[i]] = null;
    } // any other value would do

    for (var i = A.length; i--;) {
      if (!map.hasOwnProperty(A[i])) {
        C.push(A[i]);
      }
    }
    return C;
  },


  /**
   * Checks deep equality of two object.
   * @param {object} x First object
   * @param {object} y Second object
   * @returns {boolean}
   */
  equals: function equals(x, y) {
    if (x === y) return true;
    if (!(x instanceof Object) || !(y instanceof Object)) return false;
    if (x.constructor !== y.constructor) return false;
    /* eslint-disable no-continue */
    for (var p in x) {
      if (!x.hasOwnProperty(p)) continue;
      if (!y.hasOwnProperty(p)) return false;
      if (x[p] === y[p]) continue;
      if (_typeof(x[p]) !== 'object') return false;
      if (!this.equals(x[p], y[p])) return false;
    }
    /* eslint-enable no-continue */

    for (p in y) {
      if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false;
    }

    return true;
  },


  /**
   * Returns deep copy of given object.
   * @param {object} x Object to be cloned
   */
  clone: function clone(x) {
    return JSON.parse(JSON.stringify(x));
  },


  /* Replaces expressions like "{customer}" from the provided string
    * to the value the have in the coreLibrary.config object
    * @param {String} str the string to replace the expressions in
    */
  replaceConfigParameters: function replaceConfigParameters(str) {
    if (str == null) {
      return str;
    }
    var config = _coreLibrary2.default.config;
    Object.keys(config).forEach(function (key) {
      var regex = new RegExp('{' + key + '}', 'g');
      var value = config[key];
      str = str.replace(regex, value);
    });
    return str;
  },


  /**
   * Get decimal formatted odds.
   * @param {Number} odds Odds number
   * @returns {Number}
   */
  getOddsDecimalValue: function getOddsDecimalValue(odds) {
    if (odds < 100) {
      return odds.toFixed(2);
    } else if (odds < 1000) {
      return odds.toFixed(1);
    } else {
      return odds.toFixed(0);
    }
  },


  /**
   * Returns the outcome label translated.
   * @param {Object} outcome A betoffer outcome object
   * @param {Object} event Event object
   * @returns {string}
   */
  getOutcomeLabel: function getOutcomeLabel(outcome, event) {
    switch (outcome.type) {
      case 'OT_ONE':
        // Outcome has label 1. Applies to Threeway bet offers.
        return event.homeName;
      case 'OT_CROSS':
        // Outcome has label X. Applies to Threeway bet offers.
        return labelsTranslations.draw[_coreLibrary2.default.config.locale];
      case 'OT_TWO':
        // Outcome has label 2. Applies to Threeway bet offers.
        return event.awayName;
      case 'OT_OVER':
        // The “Over” outcome in Over/Under bet offer.
        return outcome.label + ' ' + outcome.line / 1000;
      case 'OT_UNDER':
        // The “Under” outcome in Over/Under bet offer.
        return outcome.label + ' ' + outcome.line / 1000;
      // Todo: Impelement these responses with translations
      // case 'OT_ODD': //The “Odd” outcome in Odd/Even bet offer.
      // break;
      // case 'OT_EVEN': //The “Even” outcome in Odd/Even bet offer.
      // break;
      // case 'OT_ONE_ONE': //1-1 outcome in Halftime/fulltime bet offer.
      // break;
      // case 'OT_ONE_TWO': //1-2 outcome in Halftime/fulltime bet offer.
      // break;
      // case 'OT_ONE_CROSS': //1-X outcome in Halftime/fulltime bet offer.
      // break;
      // case 'OT_TWO_ONE': //2-1 outcome in Halftime/fulltime bet offer.
      // break;
      // case 'OT_TWO_TWO': //2-2 outcome in Halftime/fulltime bet offer.
      // break;
      // case 'OT_TWO_CROSS': //2-X outcome in Halftime/fulltime bet offer.
      // break;
      // case 'OT_CROSS_ONE': //X-1 outcome in Halftime/fulltime bet offer.
      // break;
      // case 'OT_CROSS_TWO': //X-2 outcome in Halftime/fulltime bet offer.
      // break;
      // case 'OT_CROSS_CROSS': //X-X outcome in Halftime/fulltime bet offer.
      // break;
      // case 'OT_ONE_OR_TWO': //1 or 2 outcome in Double Chance bet offer.
      // break;
      // case 'OT_ONE_OR_CROSS': //1 or X outcome in Double Chance bet offer.
      // break;
      // case 'OT_CROSS_OR_TWO': //X or 2 outcome in Double Chance bet offer.
      // break;
      // case 'OT_YES': //“Yes” outcome in Head To Head and Yes/No bet offer.
      // break;
      // case 'OT_NO': //“No” outcome in Head To Head and Yes/No bet offer.
      // break;
      // case 'OT_OTHER': //“Other results” outcome in Result bet offer.
      // break;
      // case 'OT_UNTYPED': //Outcome does not have type.
      // break;
      // case 'OT_WC_HOME': //Outcome has label Home Win. Applies to WinCast bet offers.
      // break;
      // case 'OT_WC_DRAW': //Outcome has label Draw. Applies to WinCast bet offers.
      // break;
      // case 'OT_WC_AWAY': //Outcome has label Away Win. Applies to WinCast bet offers.
      // break;

      default:
        console.warn('Unhandled outcome type: ' + outcome.type, outcome);
        return outcome.label;
    }
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _undefined = __webpack_require__(42)(); // Support ES3 engines

module.exports = function (val) {
  return val !== _undefined && val !== null;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _coreLibrary = __webpack_require__(5);

var _coreLibrary2 = _interopRequireDefault(_coreLibrary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module with methods to request data from the offering API
 * The offering API has information concerning events (matches, competations) and their respective betoffers as well as live data if available
 * All methods in this module return Promises that are resolved when the data is ready and throws errors (that can be handled with .catch()) on failure
 * @module offeringModule
 */

exports.default = {
  /**
   * Get group events
   * @param {number|string} groupId Group id
   * @returns {Promise}
   */
  getGroupEvents: function getGroupEvents(groupId) {
    var requesPath = '/event/group/' + groupId + '.json';
    return this.doRequest(requesPath);
  },


  /**
   * Get group information.
   * @param {Number|String} groupId Group id
   * @returns {Promise}
   */
  getGroup: function getGroup(groupId) {
    var requesPath = '/group/' + groupId + '.json';
    return this.doRequest(requesPath);
  },


  /**
   * Get events by filter, only returns the main betoffer for the event. To get all betoffers use getEvent() or getLiveEvent()
   * @param {String} filter Filter string, eg: football
   * @param {Object} params Request relevant parameters
   * @returns {Promise}
   */
  getEventsByFilter: function getEventsByFilter(filter, params) {
    // Todo: Update this method once documentation is available
    filter = filter.replace(/^#?\/?/, ''); // removes #/ at the start of the string if present
    var requestPath = '/listView/' + filter;
    return this.doRequest(requestPath, params, 'v3');
  },


  /**
   * Normalizes v2 api betoffers
   * @param {Object} betOffer Betoffer object we get from api
   * @private
   */
  adaptV2BetOffer: function adaptV2BetOffer(betOffer) {
    if (betOffer.suspended === true) {
      betOffer.open = false;
    }
  },


  /**
   * Normalizes the v2 api response
   * @param {Object} liveData Livedata object we get from api
   * @private
   */
  adaptV2LiveData: function adaptV2LiveData(liveData) {
    if (liveData != null && liveData.statistics != null) {
      var statistics = liveData.statistics;
      if (statistics.sets != null) {
        statistics.setBasedStats = statistics.sets;
        delete statistics.sets;
      }

      if (statistics.football != null) {
        statistics.footballStats = statistics.football;
        delete statistics.football;
      }
    }
  },


  /**
   * Normalizes the v2 event object
   * @private
   */
  adaptV2Event: function adaptV2Event(event) {
    // v3 and v2 event objects are almost the same
    // only a few attributes we don't use are different
  },


  /**
   * Get live event data only, eg: match statistics, score, macthClock
   * @param {Number|String} eventId The event id we need to fetch
   * @returns {Promise}
   * @private
   */
  getLiveEventData: function getLiveEventData(eventId) {
    var _this = this;

    var requestPath = '/event/' + eventId + '/livedata.json';
    return this.doRequest(requestPath, null, null, true).then(function (res) {
      _this.adaptV2LiveData(res);
      return res;
    });
  },


  /**
   * Get all live events, only returns the main betoffer for the event. To get all betoffers use getEvent() or getLiveEvent()
   * @returns {Promise}
   */
  getLiveEvents: function getLiveEvents() {
    var _this2 = this;

    var requestPath = '/event/live/open.json';
    return this.doRequest(requestPath, null, null, true).then(function (res) {
      if (res.error != null) {
        return res;
      }
      var events = res.liveEvents;
      res.events = events;
      res.events.forEach(_this2.adaptV2Event);
      delete res.liveEvents;
      delete res.group;
      events.forEach(function (e) {
        e.betOffers = [];
        if (e.mainBetOffer != null) {
          _this2.adaptV2BetOffer(e.mainBetOffer);
          e.betOffers.push(e.mainBetOffer);
          delete e.mainBetOffer;
        }
        _this2.adaptV2LiveData(e.liveData);
      });
      return res;
    });
  },


  /**
   * Returns a live event
   * @param {Number|String} eventId The event id we need to fetch
   * @returns {Promise}
   */
  getLiveEvent: function getLiveEvent(eventId) {
    var _this3 = this;

    var requestPath = '/betoffer/live/event/' + eventId + '.json';
    return this.doRequest(requestPath, null, null, true).then(function (res) {
      res.betOffers = res.betoffers;
      delete res.betoffers;
      res.betOffers.forEach(_this3.adaptV2BetOffer);
      res.event = res.events[0];
      _this3.adaptV2Event(res.event);
      delete res.events;
      return res;
    });
  },


  /**
   * Get live events by filter, only returns the main betoffer for the event. To get all betoffers use getEvent() or getLiveEvent()
   * @param {String} filter Filter string
   * @returns {Promise}
   */
  getLiveEventsByFilter: function getLiveEventsByFilter(filter) {
    var _this4 = this;

    // Todo: implement a filter request when the offering API supports it
    filter = filter.replace(/\/$/, '');

    var filterTerms = filter.split('/');
    filterTerms = filterTerms.slice(0, 3);

    var requestPath = '/listView/all/all/all/all/in-play/';

    return new Promise(function (resolve, reject) {
      _this4.doRequest(requestPath, null, 'v3').then(function (response) {
        var result = {
          events: []
        },
            i = 0,
            len = response.events.length;
        for (; i < len; ++i) {
          var j = 0,
              termLen = response.events[i].event.path.length,
              addEvent = true;
          if (termLen > filterTerms.length) {
            termLen = filterTerms.length;
          }
          for (; j < termLen; ++j) {
            if (filterTerms[j] !== 'all' && response.events[i].event.path[j].termKey !== filterTerms[j]) {
              addEvent = false;
            }
          }
          if (addEvent) {
            result.events.push(response.events[i]);
          }
        }
        resolve(result);
      });
    });
  },


  /**
   * Requests and event from api
   * @param {String} eventId The event id we need to fetch
   * @returns {Promise}
   */
  getEvent: function getEvent(eventId) {
    var _this5 = this;

    return this.doRequest('/betoffer/event/' + eventId + '.json').then(function (res) {
      res.betOffers = res.betoffers;
      delete res.betoffers;
      res.betOffers.forEach(_this5.adaptV2BetOffer);
      res.event = res.events[0];
      _this5.adaptV2Event(res.event);
      delete res.events;
      return res;
    });
  },


  /**
   * Request the highlight resource which is what is shown under the "Popular" section in the Sportsbook
   * @returns {Promise}
   */
  getHighlight: function getHighlight() {
    return this.doRequest('/group/highlight.json').then(function (highlights) {
      // sorting based on sortOrder
      if (Array.isArray(highlights.groups)) {
        highlights.groups.sort(function (a, b) {
          if (parseInt(a.sortOrder, 10) > parseInt(b.sortOrder, 10)) {
            return 1;
          }
          if (parseInt(a.sortOrder, 10) < parseInt(b.sortOrder, 10)) {
            return -1;
          }
          return 0;
        });
      }
      return highlights;
    });
  },


  /**
    * Makes a request to provided path setting the appropriated URL parameters. Usually this method should not be called directly, unless you want to access an endpoint that is not available in the other methods
    The final url looks like:
    coreLibrary.config.apiBaseUrl + version + coreLibrary.config.offering + requestPath
    Example (same as calling offeringModule.getLiveEvents() but forcing to use Portugal Portuguese locale)
    doRequest('/event/live/open.json' { lang: 'pt_PT' });
    this call would fetch this url:
     https://api.kambi.com/offering/api/v2/kambi/event/live/open.json?lang=pt_PT&market=kambi&client_id=2&include=&betOffers=COMBINED&categoryGroup=COMBINED&displayDefault=true&nocache=1476973932524
     * @param {string} requestPath the path to the request
    * @param {object} params params to use, can override the parameters this method usually sets
    * @param {number|string} version which version of the API to use. Some endpoints are 'v2' and some are 'v3'
    * @param {boolean} noCache if true will add a cache-busting URL parameter. Defaults to true
    * @returns {Promise}
    */
  doRequest: function doRequest(requestPath, params, version, noCache) {
    var config = _coreLibrary2.default.config;
    if (config.offering == null) {
      console.warn('The offering has not been set, is the right widget api version loaded?');
    } else {
      var apiUrl = config.apiBaseUrl.replace('{apiVersion}', version != null ? version : config.version);
      var requestUrl = apiUrl + config.offering + requestPath;
      var overrideParams = params || {};
      var requestParams = {
        lang: overrideParams.locale || config.locale,
        market: overrideParams.market || config.market,
        client_id: overrideParams.client_id || config.client_id,
        include: overrideParams.include || '',
        betOffers: overrideParams.betOffers || 'COMBINED',
        categoryGroup: overrideParams.categoryGroup || 'COMBINED',
        displayDefault: overrideParams.displayDefault || true
      };
      if (noCache === true) {
        requestParams.nocache = Date.now();
      }
      requestUrl += '?' + Object.keys(requestParams).map(function (k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(requestParams[k]);
      }).join('&');

      return _coreLibrary2.default.getData(requestUrl);
    }
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _OutcomeButton = __webpack_require__(59);

Object.defineProperty(exports, 'OutcomeButton', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_OutcomeButton).default;
  }
});

var _OutcomeButtonUI = __webpack_require__(17);

Object.defineProperty(exports, 'OutcomeButtonUI', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_OutcomeButtonUI).default;
  }
});

var _TabPagination = __webpack_require__(62);

Object.defineProperty(exports, 'TabPagination', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TabPagination).default;
  }
});

var _FixedList = __webpack_require__(70);

Object.defineProperty(exports, 'FixedList', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_FixedList).default;
  }
});

var _ScrolledList = __webpack_require__(18);

Object.defineProperty(exports, 'ScrolledList', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ScrolledList).default;
  }
});

var _DropdownButton = __webpack_require__(73);

Object.defineProperty(exports, 'DropdownButton', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DropdownButton).default;
  }
});

var _Header = __webpack_require__(76);

Object.defineProperty(exports, 'Header', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Header).default;
  }
});

var _ActionButton = __webpack_require__(79);

Object.defineProperty(exports, 'ActionButton', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ActionButton).default;
  }
});

var _IconHeader = __webpack_require__(82);

Object.defineProperty(exports, 'IconHeader', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_IconHeader).default;
  }
});

var _Carousel = __webpack_require__(85);

Object.defineProperty(exports, 'Carousel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Carousel).default;
  }
});

var _BlendedBackground = __webpack_require__(92);

Object.defineProperty(exports, 'BlendedBackground', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BlendedBackground).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _coreLibrary = __webpack_require__(5);

var _coreLibrary2 = _interopRequireDefault(_coreLibrary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module to access statistics API
 * The statistics API has information concerning historical data of events (matches, competitions)
 * All methods in this module return Promises that are resolved when the data is ready and throws errors (that can be handled with .catch()) on failure
 * @module statisticsModule
 */

exports.default = {
  /**
   * Requests league table statistics data from api.
   * @param {String} filter a filter string to a competition. Example 'football/england/premier_league'
   * @returns {Promise}
   */
  getLeagueTableStatistics: function getLeagueTableStatistics(filter) {
    // Remove url parameters from filter
    filter = filter.match(/[^?]*/)[0];

    // Removing trailing and starting slashes if present
    if (filter[filter.length - 1] === '/') {
      filter = filter.slice(0, -1);
    }
    if (filter[0] === '/') {
      filter = filter.slice(1);
    }
    return this.doRequest('/leaguetable/' + filter + '.json');
  },


  /**
   * Requests H2H statistics data from api.
   * @param {String|Number} eventId id of a match
   * @returns {Promise}
   */
  getHeadToHeadStatistics: function getHeadToHeadStatistics(eventId) {
    return this.doRequest('/h2h/event/' + eventId + '.json');
  },


  /**
   * Requests TPI statistics data from api.
   * @param {String|Number} eventId id of a match
   * @returns {Promise}
   */
  getTeamPerformanceStatistics: function getTeamPerformanceStatistics(eventId) {
    return this.doRequest('/tpi/event/' + eventId + '.json');
  },


  /**
   * Performs the statistics API requests
   * @param {String} path path of the desired resource, for example /leaguetable/football/england/premier_league.json'
   * @returns {Promise}
   */
  doRequest: function doRequest(path) {
    if (path.charAt(0) !== '/') {
      path += '/';
    }
    return _coreLibrary2.default.getData(_coreLibrary2.default.config.apiStatisticsBaseUrl + _coreLibrary2.default.config.offering + path + ('?lang=' + _coreLibrary2.default.config.locale + '&market=' + _coreLibrary2.default.config.market));
  }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _coreLibrary = __webpack_require__(5);

var _coreLibrary2 = _interopRequireDefault(_coreLibrary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var widgetName = "wc2018-tournament-overview-widget";

/**
 * Module with internationalization methods
 * Provides a very simple internationalization mechanism
 * that is not relient in any library.
 * The loading of the right internationalization JSON file is handled automatically
 * @module translationModule
 */
exports.default = {
  /**
   * Returns translated string based of a provided key.
   * @param {String} key Key to fetch translation for
   * @param {...String} args arguments to replace inside the translated string
   * @example
   * en_GB.json:
   * { "welcomeUserToPlace": "Welcome {0} to {1}" }
   * Javascript:
   * getTranslation('welcomeUserToPlace', 'Daniel', 'Stadium') => 'Welcome Daniel to Stadium'
   * @returns {String} the localized string
   */
  getTranslation: function getTranslation(key) {
    var locale = _coreLibrary2.default.config.locale;
    var kambiI18n = window.gmWidgetsI18n[widgetName];
    if (kambiI18n == null || locale == null || locale.length != 5) {
      return key;
    }
    var strings = null;
    if (kambiI18n[locale] == null) {
      // falling back to another locale, trying one that matches the first language name, then falling back to en_GB
      var language = locale.split('_')[0];
      if (language.length !== 2) {
        return key;
      }
      if (language === 'en' && kambiI18n.en_GB != null) {
        strings = kambiI18n.en_GB;
      } else {
        var locales = Object.keys(kambiI18n).sort();
        for (var i = 0; i < locales.length; i++) {
          if (locales[i].split('_')[0] === language) {
            strings = kambiI18n[locales[i]];
            break;
          }
        }
      }
    } else {
      strings = kambiI18n[locale];
    }

    if (strings == null) {
      if (kambiI18n.en_GB != null) {
        strings = kambiI18n.en_GB;
      } else {
        return key;
      }
    }
    var str = strings[key];
    if (str == null) {
      return key;
    }

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    for (var _i = 0; _i < args.length; _i++) {
      var replacement = args[_i] || '';
      str = str.replace('{' + _i + '}', replacement);
    }
    return str;
  }
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utilModule = __webpack_require__(6);

var _utilModule2 = _interopRequireDefault(_utilModule);

var _coreLibrary = __webpack_require__(5);

var _coreLibrary2 = _interopRequireDefault(_coreLibrary);

var _EventsModule = __webpack_require__(14);

var _EventsModule2 = _interopRequireDefault(_EventsModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EMBEDDED = "true" === 'true'; /**
                                                 * Module with methods to manipulate the widget and interact with the sportsbook
                                                 * @module widgetModule
                                                 */

exports.default = {
  /**
   * Widget API object
   * @type {object}
   * @private
   */
  get api() {
    return _coreLibrary2.default.widgetApi;
  },

  /**
   * Object in which you can add event listeners for Kambi Widget API events
   *
   * @deprecated use eventsModule
   *
   * Valid events listeners:
   *
   * 'WIDGET:HEIGHT': Widget height changed
   *
   * 'OUTCOME:REMOVED:{outcomeId}': Outcome with {outcomeId} removed
   *
   * 'OUTCOME:ADDED:{outcomeId}': Outcome with {outcomeId} added
   *
   * 'OUTCOME:UPDATE:{outcomeId}': Outcome with {outcomeId} updated
   *
   * 'WIDGET:ARGS': Widget args changed
   *
   * 'PAGE:INFO':  Page info changed
   *
   * 'ODDS:FORMAT': Odds format changed
   *
   * 'CLIENT:CONFIG': Client config changed
   *
   * 'USER:LOGGED_IN': User logged in changed
   *
   * 'LIVE:EVENT:{eventId}': Live event statistics changed
   *
   * 'LIVE:EVENT:{eventId}:REMOVED': Not a live event anymore
   *
   * 'LIVE:EVENTDATA:{eventId}': Live event's statistics changed
   *
   * 'LIVE:EVENTDATA:{eventId}:REMOVED': Not a live event anymore
   *
   * 'LIVE:EVENTS': Live events list changed
   *
   * @example
   *
   * widgetModule.events
   *    .subscribe('OUTCOME:ADDED:' + outcome.id,
   *       ( data ) => {
   *          ...
   *       });
   *
   */
  events: _EventsModule2.default,

  /**
   * Stores all the betslip outcome ids we are watching
   * to trigger events
   * @type {array}
   * @private
   */
  betslipIds: [],

  /**
   * Handles widget api response.
   * Emits events for each response
   * @param {Object} response
   * @private
   */
  handleResponse: function handleResponse(response) {
    switch (response.type) {
      case this.api.WIDGET_HEIGHT:
        // We've received a height response
        _EventsModule2.default.publish('WIDGET:HEIGHT', response.data);
        break;
      case this.api.BETSLIP_OUTCOMES:
        // We've received a response with the outcomes currently in the betslip

        var i = 0,
            len = response.data.outcomes.length;
        var updateIds = [];
        // Gather all the ids in the betslip in one array
        for (; i < len; ++i) {
          updateIds.push(response.data.outcomes[i].id);
        }
        // Diff against what the coreLibrary already has stored so we know what was added and what was removed
        var removedIds = _utilModule2.default.diffArray(this.betslipIds, updateIds);
        var addedIds = _utilModule2.default.diffArray(updateIds, this.betslipIds);
        // Save the updated ids
        this.betslipIds = updateIds;

        // Emit events for each removed id
        i = 0;
        len = removedIds.length;
        for (; i < len; ++i) {
          _EventsModule2.default.publish('OUTCOME:REMOVED:' + removedIds[i]);
        }

        // Emit events for each added id
        i = 0;
        len = addedIds.length;
        for (; i < len; ++i) {
          _EventsModule2.default.publish('OUTCOME:ADDED:' + addedIds[i]);
        }

        // Emit a generic update in case we want to use that
        _EventsModule2.default.publish('OUTCOMES:UPDATE', response.data);
        break;
      case this.api.WIDGET_ARGS:
        // We've received a response with the arguments set in the
        _coreLibrary2.default.args = response.data;
        _EventsModule2.default.publish('WIDGET:ARGS', response.data);
        break;
      case this.api.PAGE_INFO:
        // Received page info response
        _coreLibrary2.default.setPageInfo(response.data);
        _EventsModule2.default.publish('PAGE:INFO', response.data);
        break;
      case this.api.CLIENT_ODDS_FORMAT:
        // Received odds format response
        _coreLibrary2.default.oddsFormat = response.data;
        _EventsModule2.default.publish('ODDS:FORMAT', response.data);
        break;
      case this.api.CLIENT_CONFIG:
        _coreLibrary2.default.config = response.data;
        _EventsModule2.default.publish('CLIENT:CONFIG', response.data);
        break;
      case this.api.USER_LOGGED_IN:
        console.debug('User logged in', response.data);
        _EventsModule2.default.publish('USER:LOGGED_IN', response.data);
        break;
      case 'Setup':
        _EventsModule2.default.publish('Setup response', response.data);
        break;
    }
  },


  /**
   * Creates url from given path and optionalRoot
   * @param {String} path
   * @param {String} optionalRoot
   * @returns {String}
   */
  createUrl: function createUrl(path, optionalRoot) {
    return this.api.createUrl(path, optionalRoot);
  },


  /**
   * Creates a filter url from given array
   * @example
   * destination = ['/football/europa_league/', '/football/world_cup_qualifying_-_europe/'];
   * @param {Array} destination
   * @returns {string}
   */
  createFilterUrl: function createFilterUrl(terms) {
    // wapi.createFilterUrl is very buggy, so we made our own implementation of it
    // return this.api.createFilterUrl(destination, coreLibrary.config.routeRoot);

    var urlBase = _coreLibrary2.default.config.routeRoot;

    var segments = terms.filter(function (term) {
      return term.indexOf('/') === 0;
    }).sort().reduce(function (segments, term) {
      var coords = [];

      term.replace(/\/+$/, '').split('/').slice(1).forEach(function (termKey, i) {
        if (!(i in segments)) {
          segments[i] = [];
        }

        var pointer = segments[i];

        if (i > 0) {
          coords.forEach(function (coord) {
            for (var j = 0; j <= coord; j++) {
              if (pointer[j] == null) {
                pointer.push(j === coord ? [] : 'all');
              }
            }
            pointer = pointer[coord];
          });
        }

        if (pointer.indexOf(termKey) === -1) {
          pointer.push(termKey);
        }

        coords[i] = pointer.length - 1;
      });

      return segments;
    }, []);

    var route = '#' + urlBase.replace(/.*?#/, '').replace(/^\//, '');
    route += segments.reduce(function (str, segment) {
      return str + '/' + JSON.stringify(segment).slice(1, -1);
    }, '').replace(/"/g, '').replace(/(,all)+(\/|]|$)/g, '$2');

    for (var i = 0; i <= segments.length; i++) {
      route = route.replace(/\[([^,\]]*)]/g, '$1');
    }

    var attributes = terms.filter(function (term) {
      return term.indexOf('/') !== 0;
    }).join(',');

    if (attributes) {
      for (var j = 0; j < 4 - segments.length; j++) {
        route += '/all';
      }

      route += '/' + attributes;
    }

    return route.match(/filter$/) ? route + '/all' : route;
  },


  /**
   * Returns the page type page type
   * @returns {String}
   */
  getPageType: function getPageType() {
    if (!_coreLibrary2.default.pageInfo.pageType) {
      return '';
    }
    var pageType = _coreLibrary2.default.pageInfo.pageType;
    switch (pageType) {
      case 'event':
        return '';
      case 'event-live':
        return 'live/';
      default:
        console.info('Unknown page type: ' + pageType);
        break;
    }
  },


  /**
   * Makes widget api request for setupdata
   * @param {fn} callback Callback
   */
  requestSetup: function requestSetup(callback) {
    this.api.requestSetup(callback);
  },


  /**
   * Requests widget height from widget api
   */
  requestWidgetHeight: function requestWidgetHeight() {
    this.api.request(this.api.WIDGET_HEIGHT);
  },


  /**
   * Set widget iframe height
   * @param {Number} height the height in pixels
   */
  setWidgetHeight: function setWidgetHeight(height) {
    if (EMBEDDED) {
      _coreLibrary2.default.embeddedElement.style.height = height + 'px';
      _coreLibrary2.default.args.onHeightChange(height);
      return;
    }
    this.api.set(this.api.WIDGET_HEIGHT, height);
  },


  /**
   * tries to adapt the widget iframe height to match the content
   *
   * Only works if the html and body tags don't have height: 100% styling rule
   */
  adaptWidgetHeight: function adaptWidgetHeight() {
    if (EMBEDDED) {
      var core = _coreLibrary2.default;
      var newHeight = window.getComputedStyle(_coreLibrary2.default.rootElement).height;
      _coreLibrary2.default.embeddedElement.style.height = newHeight;
      _coreLibrary2.default.args.onHeightChange(newHeight);
      return;
    }
    // tries to adapt the widget iframe height to match the content
    var body = document.body,
        html = document.documentElement;
    var heights = [body.offsetHeight, html.offsetHeight];
    // scrollHeight is the property used to get the size of the content of the page when it is bigger than the viewport
    // on IE<=11, Edge and firefox html.scrollHeight has the value of the viewport if the content is smaller than the viewport. On Chrome and others it is the other way around

    // Need to check specifically for Edge as coreLibrary.browser on Edge returns Chrome
    if (window.navigator.userAgent.indexOf('Edge') > -1) {
      heights.push(html.scrollHeight);
    } else if (_coreLibrary2.default.browser === 'firefox' || _coreLibrary2.default.browser === 'chrome' || _coreLibrary2.default.browser === 'internet-explorer' && parseInt(_coreLibrary2.default.browserVersion, 10) <= 11 || _coreLibrary2.default.browser === 'ios') {
      heights.push(body.scrollHeight);
    } else {
      heights.push(html.scrollHeight);
    }
    var height = Math.max.apply(null, heights);
    this.api.set(this.api.WIDGET_HEIGHT, height);
  },


  /**
   * Enables/disables animations of changing the height of the iframe
   * @param {boolean} enableTransition new state to be
   */
  enableWidgetTransition: function enableWidgetTransition(enableTransition) {
    if (enableTransition) {
      this.api.set(this.api.WIDGET_ENABLE_TRANSITION);
    } else {
      this.api.set(this.api.WIDGET_DISABLE_TRANSITION);
    }
  },


  /**
   * Call api to remove widget from the sportsbook
   */
  removeWidget: function removeWidget(err) {
    _coreLibrary2.default.args.onWidgetRemoved(err);
    if (EMBEDDED) {
      var rootElement = _coreLibrary2.default.rootElement;
      while (rootElement.firstChild) {
        rootElement.removeChild(rootElement.firstChild);
      }
      _coreLibrary2.default.embeddedElement.style.display = 'none';
      return;
    }
    this.api.remove();
  },


  /**
   * Method to navigate to a live event page
   * @param {number} eventId
   */
  navigateToLiveEvent: function navigateToLiveEvent(eventId) {
    this.navigateClient('event/live/' + eventId);
  },


  /**
   * Method to navigate to a pre-live event page
   * @param {number} eventId
   */
  navigateToEvent: function navigateToEvent(eventId) {
    this.navigateClient('event/' + eventId);
  },


  /**
   * Method to navigate to a filter page
   * @param {String} filterParams
   */
  navigateToFilter: function navigateToFilter(filterParams) {
    if (typeof filterParams === 'string' && filterParams.indexOf('filter/') === -1) {
      filterParams = 'filter/' + filterParams;
    }
    this.navigateClient(filterParams);
  },


  /**
   * Navigates to the live events page
   */
  navigateToLiveEvents: function navigateToLiveEvents() {
    this.navigateClient(['in-play']);
  },


  /**
   * Adds an outcomes to the betslip
   * @param {Array<Number>|Number} outcomes ids of the outcomes to add
   * @param {Array<Number>|Number} stakes the value of the stakes to add (referencing the ids in the outcomes parameter)
   * @param {String} updateMode defaults to 'append', but also accepts 'replace'
   * @param {String} source
   */
  addOutcomeToBetslip: function addOutcomeToBetslip(outcomes, stakes, updateMode, source) {
    var arrOutcomes = [];
    // Check if the outcomes parameter is an array and add it, otherwise add the the single value as an array
    if (Array.isArray(outcomes)) {
      arrOutcomes = outcomes;
    } else {
      arrOutcomes.push(outcomes);
    }

    // Setup the data object to be sent to the widget API
    var data = {
      outcomes: arrOutcomes

      // Check if we got any stakes passed to use, add them to the data object if so
    };if (stakes != null) {
      if (Array.isArray(stakes)) {
        data.stakes = stakes;
      } else {
        data.stakes = [stakes];
      }
    }

    // Set the coupon type, defaults to TYPE_SINGLE
    data.couponType = arrOutcomes.length === 1 ? this.api.BETSLIP_OUTCOMES_ARGS.TYPE_SINGLE : this.api.BETSLIP_OUTCOMES_ARGS.TYPE_COMBINATION;

    // Set the update mode, defaults to UPDATE_APPEND
    data.updateMode = updateMode !== 'replace' ? this.api.BETSLIP_OUTCOMES_ARGS.UPDATE_APPEND : this.api.BETSLIP_OUTCOMES_ARGS.UPDATE_REPLACE;
    if (source != null) {
      data.source = source;
    }

    // Add tracking name if it's set
    if (_coreLibrary2.default.widgetTrackingName != null) {
      data.name = _coreLibrary2.default.widgetTrackingName;
    }

    // Send the data to the widget this.api
    this.api.set(this.api.BETSLIP_OUTCOMES, data);
  },


  /**
   * Removes outcomes from betslip
   * @param {Array<Number>|Number} outcomes ids of the outcomes to remove form the betslip
   */
  removeOutcomeFromBetslip: function removeOutcomeFromBetslip(outcomes) {
    var arrOutcomes = [];
    if (Array.isArray(outcomes)) {
      arrOutcomes = outcomes;
    } else {
      arrOutcomes.push(outcomes);
    }
    var data = { outcomes: arrOutcomes

      // Add tracking name if it's set
    };if (_coreLibrary2.default.widgetTrackingName != null) {
      data.name = _coreLibrary2.default.widgetTrackingName;
    }

    this.api.set(this.api.BETSLIP_OUTCOMES_REMOVE, data);
  },


  /**
   * Requests betslip outcomes
   */
  requestBetslipOutcomes: function requestBetslipOutcomes() {
    this.api.request(this.api.BETSLIP_OUTCOMES);
  },


  /**
   * Requests page info
   */
  requestPageInfo: function requestPageInfo() {
    this.api.request(this.api.PAGE_INFO);
  },


  /**
   * Requests widget args
   */
  requestWidgetArgs: function requestWidgetArgs() {
    this.api.request(this.api.WIDGET_ARGS);
  },


  /**
   * Requests client config
   */
  requestClientConfig: function requestClientConfig() {
    this.api.request(this.api.CLIENT_CONFIG);
  },


  /**
   * Requests odds format
   */
  requestOddsFormat: function requestOddsFormat() {
    this.api.request(this.api.CLIENT_ODDS_FORMAT);
  },


  /**
   * Requests american odds
   * @param {Number} odds
   * @returns {Promise}
   */
  requestOddsAsAmerican: function requestOddsAsAmerican(odds) {
    var _this = this;

    return new Promise(function (resolve) {
      _this.api.requestOddsAsAmerican(odds, function (americanOdds) {
        resolve(americanOdds);
      });
    });
  },


  /**
   * Requests fractional odds
   * @param {Number} odds
   * @returns {Promise}
   */
  requestOddsAsFractional: function requestOddsAsFractional(odds) {
    var _this2 = this;

    return new Promise(function (resolve) {
      _this2.api.requestOddsAsFractional(odds, function (fractionalOdds) {
        resolve(fractionalOdds);
      });
    });
  },


  /**
   * Navigates to a page in the sportsbook
   * @param {String|Array} destination fragment part of the URL to navigate to (the part after the # in the URL)
   */
  navigateClient: function navigateClient(destination) {
    var finalTarget = '';
    if (typeof destination === 'string') {
      finalTarget = '#' + _coreLibrary2.default.config.routeRoot + destination;
    } else if (Array.isArray(destination)) {
      finalTarget = this.api.createFilterUrl(destination, _coreLibrary2.default.config.routeRoot);
    }
    if (EMBEDDED) {
      _coreLibrary2.default.args.onWidgetNavigateClient(finalTarget, _coreLibrary2.default.widgetTrackingName != null ? _coreLibrary2.default.widgetTrackingName : null);
    } else {
      if (_coreLibrary2.default.widgetTrackingName != null) {
        this.api.navigateClient(finalTarget, _coreLibrary2.default.widgetTrackingName);
      } else {
        this.api.navigateClient(finalTarget);
      }
    }
  }
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _liveEventsAdapter = __webpack_require__(51);

var _liveEventsAdapter2 = _interopRequireDefault(_liveEventsAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 *
 * @type {object.<string, function[]>}
 * @memberof module:eventsModule
 */
var handlers = {};

/*
 * Object in which you can add event listeners for Kambi Widget API events. This module has been deprecated, use eventUpdatesModule instead
 * Valid events listeners:
 *
 * 'WIDGET:HEIGHT': Widget height changed
 *
 * 'OUTCOME:REMOVED:{outcomeId}': Outcome with {outcomeId} removed
 *
 * 'OUTCOME:ADDED:{outcomeId}': Outcome with {outcomeId} added
 *
 * 'OUTCOME:UPDATE:{outcomeId}': Outcome with {outcomeId} updated
 *
 * 'WIDGET:ARGS': Widget args changed
 *
 * 'PAGE:INFO': Page info changed
 *
 * 'ODDS:FORMAT': Odds format changed
 *
 * 'CLIENT:CONFIG': Client config changed
 *
 * 'USER:LOGGED_IN': User logged in changed
 *
 * 'LIVE:EVENT:{eventId}': Live event statistics changed
 *
 * 'LIVE:EVENT:{eventId}:REMOVED': Not a live event anymore
 *
 * 'LIVE:EVENTDATA:{eventId}': Live event's statistics changed
 *
 * 'LIVE:EVENTDATA:{eventId}:REMOVED': Not a live event anymore
 *
 * 'LIVE:EVENTS': Live events list changed
 *
 * @example
 *
 * eventsModule
 *    .subscribe('OUTCOME:ADDED:' + outcome.id,
 *       ( data ) => {
 *          ...
 *       });
 *
 * @deprecated Use eventUpdatesModule instead
 @module eventsModule
 */
var EventsModule = {
  /*
   * Live services polling interval (in milliseconds)
   */
  set liveEventPollingInterval(value) {
    if (typeof value !== 'number') {
      throw new Error('Invalid number: ' + value);
    }

    _liveEventsAdapter2.default.pollingInterval = value;
  },

  /*
   * Subscribes a handler to given event.
   * @param {string} event Event name
   * @param {function} handler Handler function
   */
  subscribe: function subscribe(event, handler) {
    if (handlers.hasOwnProperty(event)) {
      handlers[event].push(handler);
    } else {
      handlers[event] = [handler];

      // start proper polling service when first listener of given LIVE:* event subscribes
      _liveEventsAdapter2.default.subscribe(event, this.publish.bind(this));
    }
  },


  /*
   * Unsubscribes handler/all handlers from given event.
   * @param {string} event Event name
   * @param {function?} handler Optional handler function pointer
   */
  unsubscribe: function unsubscribe(event, handler) {
    if (!handlers.hasOwnProperty(event)) {
      return;
    }

    if (handler) {
      // remove particular handler
      var handlerIdx = handlers[event].indexOf(handler);

      if (handlerIdx > -1) {
        handlers[event].splice(handlerIdx, 1);
      }
    } else {
      // remove all handlers for given event
      handlers[event] = [];
    }

    if (handlers[event].length == 0) {
      delete handlers[event];

      // stop additional polling services on given event
      _liveEventsAdapter2.default.unsubscribe(event);
    }
  },


  /*
   * Emits an event with given arguments.
   * @param {string} event Event name
   * @param {...*} args Arguments for handlers
   */
  publish: function publish(event) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (!handlers.hasOwnProperty(event)) {
      return;
    }

    handlers[event].forEach(function (handler) {
      return handler.apply(undefined, args);
    });
  }
};

exports.default = EventsModule;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _coreLibrary = __webpack_require__(5);

var _coreLibrary2 = _interopRequireDefault(_coreLibrary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customTypeSeparator = '-';

/**
 * Module with methods to set up subscription for different kinds of updates (betoffer data, odds format change and so on)
 * @module updatesModule
 */
var updatesModule = {
  get api() {
    return _coreLibrary2.default.widgetApi;
  },

  /* The final callbacks object structure should look like this:
  {
  BetslipOutcomes: [cb1, cb2, cb3, ...]
  ODDS_FORMAT: [cb1, cb2, cb3, ...]
  BASIC: {
    [eventId]: [cb1, cb2, cb3, ...],
    ...
  },
  SCORE: {
    [eventId]: [cb1, cb2, cb3, ...],
    ...
  },
  BET_OFFERS-LIVE-ALL: {
    [eventId]: [cb1, cb2, cb3, ...]
    }
  },
  BET_OFFERS-PRE_MATCH-ALL: {
    [eventId]: [cb1, cb2, cb3, ...]
  },
  BET_OFFERS-LIVE-MAIN: {
    [eventId]: [cb1, cb2, cb3, ...]
    }
  },
  BET_OFFERS-PRE_MATCH-MAIN: {
    [eventId]: [cb1, cb2, cb3, ...]
  },
  }
  */

  callbacks: {},

  _getCallbackType: function _getCallbackType(type, context, mainOnly) {
    if (type === this.api.EVENT_INFO_TYPES.BET_OFFERS) {
      return type + customTypeSeparator + context + customTypeSeparator + (mainOnly ? 'MAIN' : 'ALL');
    } else {
      return type;
    }
  },


  /* 
   * Handles responses from the Widget API and calls the correct callbacks
   */
  handleResponse: function handleResponse(response) {
    var data = response.data;
    if (response.type === this.api.BETSLIP_OUTCOMES) {
      if (this.callbacks[this.api.BETSLIP_OUTCOMES] == null) {
        this.callbacks[this.api.BETSLIP_OUTCOMES] = [];
      }
      this.callbacks[this.api.BETSLIP_OUTCOMES].forEach(function (cb) {
        cb(data);
      });
      return;
    } else if (response.type === this.api.CLIENT_ODDS_FORMAT) {
      if (this.callbacks[this.api.CLIENT_ODDS_FORMAT] == null) {
        this.callbacks[this.api.CLIENT_ODDS_FORMAT] = [];
      }
      this.callbacks[this.api.CLIENT_ODDS_FORMAT].forEach(function (cb) {
        cb(data);
      });
      return;
    } else if (response.type === this.api.EVENT_INFO) {
      var cbs = this.callbacks[this._getCallbackType(data.info, data.context, data.mainOnly)];
      if (cbs != null && cbs[data.id] != null) {
        cbs[data.id].forEach(function (cb) {
          cb(data);
        });
      }
    }
  },


  /*
   * Adds a callback to the callbacks object
   */
  _addCallback: function _addCallback(type, eventId, cb, context) {
    var mainOnly = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    var cbs = updatesModule.callbacks;
    if (cb == null || eventId == null || type == null) {
      console.error('Missing argument for subscription');
      return;
    }
    if (context != null && context !== this.api.EVENT_INFO_CONTEXT.LIVE && context !== this.api.EVENT_INFO_CONTEXT.PRE_MATCH) {
      console.error('eventUpdatesModule invalid context value');
      return;
    }
    type = this._getCallbackType(type, context, mainOnly);
    if (cbs[type] == null) {
      cbs[type] = {};
    }
    if (cbs[type][eventId] == null) {
      cbs[type][eventId] = [];
    }
    cbs[type][eventId].push(cb);
  },


  subscribe: {
    get api() {
      return _coreLibrary2.default.widgetApi;
    },

    /* IE11 is throwing erros when subscribing to EVENT_INFO in the widget api. This returns false for Edge */
    _isIE11: function _isIE11() {
      return navigator.appName.indexOf('Trident') !== -1;
    },


    /**
     * Subscription that is triggered when there is any change to the betslip
     * @param {Function} callback Callback to be called when receiving new data
     */
    betslipOutcomes: function betslipOutcomes(callback) {
      var cbs = updatesModule.callbacks;
      if (cbs[this.api.BETSLIP_OUTCOMES] == null) {
        cbs[this.api.BETSLIP_OUTCOMES] = [];
      }
      cbs[this.api.BETSLIP_OUTCOMES].push(callback);
    },


    /**
     * Subscription that is triggered when the odds format (decimal, fractional, american) changes
     * @param {Function} callback Callback to be called when receiving new data
     */
    oddsFormat: function oddsFormat(callback) {
      var cbs = updatesModule.callbacks;
      if (cbs[this.api.CLIENT_ODDS_FORMAT] == null) {
        cbs[this.api.CLIENT_ODDS_FORMAT] = [];
      }
      cbs[this.api.CLIENT_ODDS_FORMAT].push(callback);
      this.oddsFormatSubscribedTo = true;
    },


    /**
     * Subscription that is triggered when the basic information about an event changes
     * @param {Number} eventId the id of the event to listen for updates
     * @param {Function} callback Callback to be called when receiving new data
     */
    basicInfo: function basicInfo(eventId, callback) {
      if (this._isIE11()) {
        return;
      }
      var info = this.api.EVENT_INFO_TYPES.BASIC;
      this.api.request(this.api.EVENT_INFO, {
        id: eventId,
        info: info
      });
      updatesModule._addCallback(info, eventId, callback);
    },


    /**
     * Subscription that is triggered when the scoreboard information about an event changes
     * @param {Number} eventId the id of the event to listen for updates
     * @param {Function} callback Callback to be called when receiving new data
     */
    score: function score(eventId, callback) {
      if (this._isIE11()) {
        return;
      }
      var info = this.api.EVENT_INFO_TYPES.SCORE;
      this.api.request(this.api.EVENT_INFO, {
        id: eventId,
        info: info
      });
      updatesModule._addCallback(info, eventId, callback);
    },


    /**
     * Subscription that is triggered when the any of the prematch betoffers of an event change. This can be triggered several times per second
     * @param {Number} eventId the id of the event to listen for updates
     * @param {Function} callback Callback to be called when receiving new data
     */
    allPreMatchBetoffers: function allPreMatchBetoffers(eventId, callback) {
      if (this._isIE11()) {
        return;
      }
      var info = this.api.EVENT_INFO_TYPES.BET_OFFERS;
      var context = this.api.EVENT_INFO_CONTEXT.PRE_MATCH;
      this.api.request(this.api.EVENT_INFO, {
        id: eventId,
        info: info,
        context: context
      });
      updatesModule._addCallback(info, eventId, callback, context, false);
    },


    /**
     * Subscription that is triggered when the any of the prematch live of an event change. This can be triggered several times per second
     * @param {Number} eventId the id of the event to listen for updates
     * @param {Function} callback Callback to be called when receiving new data
     */
    allLiveBetoffers: function allLiveBetoffers(eventId, callback) {
      if (this._isIE11()) {
        return;
      }
      var info = this.api.EVENT_INFO_TYPES.BET_OFFERS;
      var context = this.api.EVENT_INFO_CONTEXT.LIVE;
      this.api.request(this.api.EVENT_INFO, {
        id: eventId,
        info: info,
        context: context
      });
      updatesModule._addCallback(info, eventId, callback, context, false);
    },


    /**
     * Subscription that is triggered when the any of the main (betoffer.main === true) prematch betoffers of an event change. This can be triggered several times per second
     * @param {Number} eventId the id of the event to listen for updates
     * @param {Function} callback Callback to be called when receiving new data
     */
    mainPreMatchBetoffers: function mainPreMatchBetoffers(eventId, callback) {
      if (this._isIE11()) {
        return;
      }
      var info = this.api.EVENT_INFO_TYPES.BET_OFFERS;
      var context = this.api.EVENT_INFO_CONTEXT.PRE_MATCH;
      this.api.request(this.api.EVENT_INFO, {
        id: eventId,
        info: info,
        context: context,
        mainOnly: true
      });
      updatesModule._addCallback(info, eventId, callback, context, true);
    },


    /**
     * Subscription that is triggered when the any of the main (betoffer.main === true) live betoffers of an event change. This can be triggered several times per second
     * @param {Number} eventId the id of the event to listen for updates
     * @param {Function} callback Callback to be called when receiving new data
     */
    mainLiveBetoffers: function mainLiveBetoffers(eventId, callback) {
      if (this._isIE11()) {
        return;
      }
      var info = this.api.EVENT_INFO_TYPES.BET_OFFERS;
      var context = this.api.EVENT_INFO_CONTEXT.LIVE;
      this.api.request(this.api.EVENT_INFO, {
        id: eventId,
        info: info,
        context: context,
        mainOnly: true
      });
      updatesModule._addCallback(info, eventId, callback, context, true);
    }
  },

  /**
   * Unsubscribes the callback passed. The function will be unsubscribed from all its subscriptions in case the same callback was passed to more than one subscribe call
   * @param {Function} callback callback to be unsubscribed
   * @returns {Boolean} returns true if the function was unsubscribed from at least one subscription
   */
  unsubscribe: function unsubscribe(callback) {
    var _this = this;

    var unsubscribed = false;
    var cbs = updatesModule.callbacks;
    Object.keys(cbs).forEach(function (type) {
      if (Array.isArray(cbs[type])) {
        var idx = cbs[type].indexOf(callback);
        if (idx !== -1) {
          cbs[type].splice(idx, 1);
          unsubscribed = true;
        }
      } else {
        Object.keys(cbs[type]).forEach(function (eventId) {
          var idx = cbs[type][eventId].indexOf(callback);
          if (idx !== -1) {
            cbs[type][eventId].splice(idx, 1);
            unsubscribed = true;
          }
          if (cbs[type][eventId].length === 0) {
            var _type$split = type.split(customTypeSeparator),
                _type$split2 = _slicedToArray(_type$split, 3),
                realType = _type$split2[0],
                context = _type$split2[1],
                main = _type$split2[2];

            var mainOnly = main === 'MAIN';
            var unsubObj = {
              id: eventId,
              info: type
            };
            if (context != null) {
              unsubObj.context = context;
            }
            if (mainOnly) {
              unsubObj.mainOnly = true;
            }
            _this.api.request(_this.api.EVENT_INFO_UNSUBSCRIBE, unsubObj);
            delete cbs[type][eventId];
          }
        });
      }
    });
    return unsubscribed;
  }
};

exports.default = updatesModule;

//  code to test this module

// coreLibrary.init({}).then(() => {
//   widgetModule.setWidgetHeight(300)
//   const eventId = 1004530932
//   eventUpdatesModule.subscribe.mainLiveBetoffers(eventId, data => {
//     console.log('mainLiveBetoffers')
//     console.log(data)
//   })
//   eventUpdatesModule.subscribe.allLiveBetoffers(eventId, data => {
//     console.log('allLiveBetoffers')
//     console.log(data)
//   })
//   eventUpdatesModule.subscribe.mainPreMatchBetoffers(eventId, data => {
//     console.log('mainPreMatchBetoffers')
//     console.log(data)
//   })
//   eventUpdatesModule.subscribe.allPreMatchBetoffers(eventId, data => {
//     console.log('allPreMatchBetoffers')
//     console.log(data)
//   })
//   eventUpdatesModule.subscribe.score(eventId, data => {
//     console.log('score')
//     console.log(data)
//   })
//   eventUpdatesModule.subscribe.basicInfo(eventId, data => {
//     console.log('basicInfo')
//     console.log(data)
//   })
//   offeringModule
//     .getLiveEvent(eventId)
//     .catch(() => {
//       return offeringModule.getEvent(eventId)
//     })
//     .then(data => {
//       let ev = data.event
//       let bo = data.betOffers.find(bo => bo.main)
//       ReactDOM.render(
//         <div>
//           <OutcomeButton outcome={bo.outcomes[0]} event={ev} />
//           {/* <OutcomeButton outcome={bo.outcomes[1]} event={ev} /> */}
//           </div>,
//           document.getElementById('root')
//         )
//       })
//   })

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMatchEvents = undefined;

var _kambiWidgetCoreLibrary = __webpack_require__(4);

/**
 * Fetches events by supplied filter
 * @param {String} filters Filters to check
 * @returns {Promise.<{filter: string, events: object[]}>}
 */
var getEvents = function getEvents(filter, leftWidgetInput, rightWidgetInput) {
  var dataRequests = [_kambiWidgetCoreLibrary.offeringModule.getEventsByFilter(filter), // tournament matches
  _kambiWidgetCoreLibrary.offeringModule.getEventsByFilter(filter + '/all/all/competitions')];

  return Promise.all(dataRequests).then(function (tournamentData) {
    if (tournamentData == null) {
      throw new Error('No tournament data available for supplied filters: ' + filter + ', ' + filter + '/all/all/competitions');
    }
    var tournamentEvents = tournamentData[0].events;
    var tournamentCompetitions = tournamentData[1].events;

    // get competitions to render by criterionId (hardcoded)
    var leftWidget = void 0;
    var rightWidget = void 0;
    tournamentCompetitions.forEach(function (competition) {
      competition.betOffers.forEach(function (betOffer) {
        if (competition.event.id === leftWidgetInput.eventId) {
          if (betOffer.criterion.id === leftWidgetInput.criterionId) {
            leftWidget = competition;
          }
          return;
        } else if (competition.event.id === rightWidgetInput.eventId) {
          if (betOffer.criterion.id === rightWidgetInput.criterionId) {
            rightWidget = competition;
          }
          return;
        }
        return;
      });
    });

    return Promise.resolve({
      events: tournamentEvents,
      competitions: { leftWidget: leftWidget, rightWidget: rightWidget }
    });
  }).catch(function (err) {
    return Promise.reject(err);
  });
};

var getMatchEvents = exports.getMatchEvents = function getMatchEvents(filter) {
  return _kambiWidgetCoreLibrary.offeringModule.getEventsByFilter(filter).then(function (tournamentData) {
    if (tournamentData == null) {
      throw new Error('No tournament data available for supplied filters: ' + filter + ', ' + filter + '/all/all/competitions');
    }

    return Promise.resolve({ events: tournamentData.events });
  }).catch(function (err) {
    return Promise.reject(err);
  });
};

exports.default = { getEvents: getEvents };

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _OutcomeButtonUI = __webpack_require__(60);

var _OutcomeButtonUI2 = _interopRequireDefault(_OutcomeButtonUI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/prefer-stateless-function */

/**
 * Renders the UI of an outcome button, no
 * special handling logic.
 * @memberof widget-components
 */
var OutcomeButtonUI = function (_Component) {
  _inherits(OutcomeButtonUI, _Component);

  function OutcomeButtonUI() {
    _classCallCheck(this, OutcomeButtonUI);

    return _possibleConstructorReturn(this, (OutcomeButtonUI.__proto__ || Object.getPrototypeOf(OutcomeButtonUI)).apply(this, arguments));
  }

  _createClass(OutcomeButtonUI, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          odds = _props.odds,
          suspended = _props.suspended,
          selected = _props.selected,
          onClick = _props.onClick,
          outlineStyle = _props.outlineStyle;


      var buttonCssClasses = 'KambiBC-mod-outcome KambiWidget-outcome ' + _OutcomeButtonUI2.default.general;

      if (outlineStyle) {
        buttonCssClasses = buttonCssClasses + ' KambiWidget-primary-color ' + _OutcomeButtonUI2.default.outline;
      }

      if (suspended) {
        buttonCssClasses += ' KambiWidget-outcome--suspended';
      } else if (selected) {
        buttonCssClasses = 'KambiWidget-outcome ' + _OutcomeButtonUI2.default.general + ' KambiWidget-outcome--selected ' + _OutcomeButtonUI2.default['outline--selected'];
      }

      if (odds === null && label === null) {
        throw new Error('Both odds and label cannot be set to null');
      }

      return _react2.default.createElement(
        'button',
        {
          type: 'button',
          role: 'button',
          className: buttonCssClasses,
          disabled: suspended,
          onClick: onClick
        },
        odds !== null && label !== null && _react2.default.createElement(
          'div',
          { className: 'KambiWidget-outcome__flexwrap' },
          _react2.default.createElement(
            'div',
            {
              className: 'KambiWidget-outcome__label-wrapper ' + (outlineStyle ? _OutcomeButtonUI2.default['outline__label-wrapper'] : '')
            },
            _react2.default.createElement(
              'span',
              { className: 'KambiWidget-outcome__label' },
              label
            ),
            _react2.default.createElement('span', { className: 'KambiWidget-outcome__line' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'KambiWidget-outcome__odds-wrapper' },
            _react2.default.createElement(
              'span',
              {
                className: 'KambiWidget-outcome__odds ' + (outlineStyle ? _OutcomeButtonUI2.default['outline__odds'] : '')
              },
              odds
            )
          )
        ),
        odds !== null && label === null && _react2.default.createElement(
          'div',
          { className: 'KambiWidget-outcome__odds-wrapper' },
          _react2.default.createElement(
            'span',
            {
              className: 'KambiWidget-outcome__odds ' + (outlineStyle ? _OutcomeButtonUI2.default['outline__odds'] : '')
            },
            odds
          )
        ),
        odds === null && label !== null && _react2.default.createElement(
          'div',
          {
            className: 'KambiWidget-outcome__label-wrapper ' + _OutcomeButtonUI2.default.label + ' ' + (outlineStyle ? _OutcomeButtonUI2.default['outline__label-wrapper'] : '')
          },
          _react2.default.createElement(
            'span',
            { className: 'KambiWidget-outcome__label' },
            label
          )
        )
      );
    }
  }]);

  return OutcomeButtonUI;
}(_react.Component);

/**
 * @property [label=null] {node?} if not defined centralizes the odds in the button, if defined uses this as the label in the button
 * @property [odds=null] {string?} if not defined centralizes the label in the button, if defined shows the odds in the button (either centralized or on the right side if label is defined)
 * @property [suspended=false] {boolean} If true the button is greyed out
 * @property selected {boolean} If true the button is selected, false otherwise.
 * @property onClick {Function} Callback for when the button is clicked
 */


OutcomeButtonUI.defaultProps = {
  odds: null,
  label: null,
  suspended: false,
  selected: false
};

exports.default = OutcomeButtonUI;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ScrolledList = __webpack_require__(63);

var _ScrolledList2 = _interopRequireDefault(_ScrolledList);

var _ArrowButton = __webpack_require__(65);

var _ArrowButton2 = _interopRequireDefault(_ArrowButton);

var _ItemContainer = __webpack_require__(19);

var _ItemContainer2 = _interopRequireDefault(_ItemContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable camelcase */

/*
 * Window resize handling reflex (in milliseconds)
 * @type {number}
 */
var UPDATE_MOMENTUM = 150;

/*
 * Duration of bar element scrollLeft animation (in milliseconds)
 * @type {number}
 */
var BAR_TRANSITION_DURATION = 300;

/**
 * Items alignment constants
 * @enum {string}
 * @readonly
 * @example
 * <ScrolledList alignItems={ScrolledList.ALIGN_ITEMS.SPACE_BETWEEN}>...</ScrolledList>
 */
var ScrolledList_ALIGN_ITEMS = {
  /**
   * List items will be aligned to the left.
   * @member {string}
   */
  LEFT: 'flex-start',

  /**
   * List items will be aligned to the right.
   * @member {string}
   */
  RIGHT: 'flex-end',

  /**
   * List items will be centered.
   * @member {string}
   */
  CENTER: 'center',

  /**
   * There will be space around all items.
   * @member {string}
   */
  SPACE_AROUND: 'space-around',

  /**
   * There will be space only between items.
   * @member {string}
   */
  SPACE_BETWEEN: 'space-between'

  /**
   * Scroll to selected item modes
   * @enum {string}
   * @readonly
   * @example
   * <ScrolledList scrollToItemMode={ScrolledList.SCROLL_TO_ITEM_MODE.TO_LEFT}>...</ScrolledList>
   */
};var ScrolledList_SCROLL_TO_ITEM_MODE = {
  /**
   * Selected item will be the first object on the left side of eye shot
   */
  TO_LEFT: 'to-left',

  /**
   * Selected item will be at the center of eye shot
   */
  CENTER: 'center'

  /*
   * Determines if component is running on touch screen device.
   * @returns {boolean}
   */
};var isTouchScreen = function isTouchScreen() {
  return 'ontouchstart' in window;
};

/*
 * Performs animation on given element's property.
 * @param {HTMLElement} element Element to animate
 * @param {string} property Element's property to animate
 * @param {number} value Target property value
 * @param {number} duration Animation duration
 */
var animate = function animate(element, property, value, duration) {
  var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
    var now = Date.now();

    // further calls will be invoked with future timestamp
    requestAnimationFrame = function requestAnimationFrame(callback) {
      return callback(now + duration);
    };

    // first call will run step function immediately
    callback(now);
  };

  var start = null;

  var initial = element[property],
      delta = value - initial;

  return new Promise(function (resolve) {
    var step = function step(timestamp) {
      if (!start) {
        start = timestamp;
      }

      var progress = (timestamp - start) / duration;

      if (progress > 1) {
        progress = 1;
      }

      // easeOutQuad
      element[property] = -delta * progress * (progress - 2) + initial;

      // animation finished
      if (progress >= 1) {
        resolve();
        return;
      }

      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  });
};

/**
 * Horizontal scrolled list component.
 * If items won't fit the container the list will be scrolled. Otherwise if items take less space
 * than the container they will be aligned according to [alignItems]{@link widget-components.ScrolledList.propTypes} property.
 * @memberOf widget-components
 */

var ScrolledList = function (_Component) {
  _inherits(ScrolledList, _Component);

  /*
    * Constructs.
    * @param {object} props Component properties
    */
  function ScrolledList(props) {
    _classCallCheck(this, ScrolledList);

    var _this = _possibleConstructorReturn(this, (ScrolledList.__proto__ || Object.getPrototypeOf(ScrolledList)).call(this, props));

    _this.state = {
      item: props.selected
    };

    _this.itemWidths = [];

    _this.prevPage = _this.prevPage.bind(_this);
    _this.nextPage = _this.nextPage.bind(_this);
    _this.enqueueUpdate = _this.enqueueUpdate.bind(_this);
    return _this;
  }

  /*
    * Called after component rendering to DOM.
    */


  _createClass(ScrolledList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.enqueueUpdate);
      this.scrollToItem(this.state.item);
      this.updateItemsAlignment();
    }

    // this is not working correctly
    //    /*
    //     * Called on external props change.
    //     */
    //    componentWillReceiveProps(nextProps) {
    //       this.scrollToItem(nextProps.selected);
    //    }

    /*
      * Called before removing component.
      */

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.enqueueUpdate);
    }

    /*
      * Selects item with given index.
      * @param {number} idx Item index
      */

  }, {
    key: 'onItemClick',
    value: function onItemClick(idx) {
      if (this.props.onItemClick) {
        this.props.onItemClick(idx);
      }

      this.setState({ item: idx });
    }

    /*
      * Updates internal state with item's width and re-renders view if necessary.
      * @param {number} idx Item index
      * @param {number?} width Desired item width
      */

  }, {
    key: 'setItemWidth',
    value: function setItemWidth(idx, width) {
      if (typeof width !== 'number') {
        return;
      }

      if (this.itemWidths[idx] !== width) {
        this.itemWidths[idx] = width;
        this.enqueueUpdate();
      }
    }

    /*
      * Throttles widget rendering updates.
      */

  }, {
    key: 'enqueueUpdate',
    value: function enqueueUpdate() {
      var _this2 = this;

      if (this.updateTimeout) {
        clearTimeout(this.updateTimeout);
      }

      this.updateTimeout = setTimeout(function () {
        _this2.updateItemsAlignment();
        _this2.scrollToItem(_this2.state.item);
        _this2.forceUpdate();
      }, UPDATE_MOMENTUM);
    }

    /*
      * Current scroll left offset (in pixels).
      */

  }, {
    key: 'updateItemsAlignment',


    /*
      * Updates items alignment if they take less space than container width.
      */
    value: function updateItemsAlignment() {
      if (!this.bar) {
        return;
      }

      var itemsWidth = this.computeItemsWidth(0, _react.Children.count(this.props.children) - 1);

      if (itemsWidth < this.eyeshotWidth) {
        this.bar.style.justifyContent = this.props.alignItems;
      } else {
        this.bar.style.justifyContent = '';
      }
    }

    /*
      * Scrolls list to given offset.
      * @param {number} offset Scroll offset
      */

  }, {
    key: 'scrollTo',
    value: function scrollTo(offset) {
      var _this3 = this;

      if (!(this.maxScrollLeft && this.eyeshot)) {
        return;
      }

      offset = Math.round(offset);

      var scrollLeft = offset > this.maxScrollLeft ? this.maxScrollLeft : offset;
      scrollLeft = scrollLeft < 0 ? 0 : scrollLeft;

      if (scrollLeft == this.currentScrollLeft) {
        return;
      }

      animate(this.eyeshot, 'scrollLeft', scrollLeft, BAR_TRANSITION_DURATION).then(function () {
        return _this3.forceUpdate();
      });
    }

    /*
      * Scrolls bar to given item.
      * @param {number} item Item index
      *
      * Example for item=2
      *
      * computeItemsWidth(0, item - 1)
      * <--------------------------->
      *
      *                           computeItemsWidth(item)
      *                             <----------------->
      *
      *                         /=========================\
      * /-----------------------#-------------------------#-------------------------------\
      * |         |             #   |                 |   #             |                 |
      * |    0    |        1    #   |        2        |   #    3        |        4        |
      * |         |             #   |                 |   #             |                 |
      * \-----------------------#-------------------------#-------------------------------/
      *                         \=========================/
      *
      *                         <------ eyeshotWidth ----->
      */

  }, {
    key: 'scrollToItem',
    value: function scrollToItem(item) {
      switch (this.props.scrollToItemMode) {
        case ScrolledList_SCROLL_TO_ITEM_MODE.TO_LEFT:
          this.scrollTo(item ? this.computeItemsWidth(0, item - 1) : 0);
          break;

        case ScrolledList_SCROLL_TO_ITEM_MODE.CENTER:
        default:
          this.scrollTo((item ? this.computeItemsWidth(0, item - 1) : 0) - (this.eyeshotWidth - this.computeItemsWidth(item)) / 2);
      }
    }

    /*
      * Should prev button be shown
      * @returns {boolean}
      */

  }, {
    key: 'computeItemsWidth',


    /*
      * Returns item widths sum for given range.
      * @param {number} start First item index
      * @param {number} end Last item index
      * @returns {number}
      */
    value: function computeItemsWidth(start) {
      var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : start;

      return this.itemWidths.slice(start, end + 1).reduce(function (sum, itemWidth) {
        return sum + (itemWidth ? itemWidth : 0);
      }, 0);
    }

    /*
      * Computes average item width across all items.
      * @returns {number}
      */

  }, {
    key: 'prevPage',


    /*
      * Scrolls list to previous page.
      */
    value: function prevPage() {
      this.scrollTo(this.currentScrollLeft - this.props.step * this.averageItemWidth);
    }

    /*
      * Scrolls list to next page.
      */

  }, {
    key: 'nextPage',
    value: function nextPage() {
      this.scrollTo(this.currentScrollLeft + this.props.step * this.averageItemWidth);
    }

    /*
      * Renders scrolled item list.
      * @returns {XML}
      */

  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var className = [_ScrolledList2.default.container, this.props.showControls ? '' : _ScrolledList2.default['no-controls'], isTouchScreen() ? _ScrolledList2.default.touch : ''].join(' ').trim();

      var scrolledListHasHorizontalSpaceLeft = false;
      var itemsWidth = this.computeItemsWidth(0, _react.Children.count(this.props.children) - 1);
      if (itemsWidth < this.eyeshotWidth) {
        scrolledListHasHorizontalSpaceLeft = true;
      }

      return _react2.default.createElement(
        'div',
        {
          className: className,
          style: { opacity: itemsWidth === 0 ? 0 : 1 },
          ref: function ref(el) {
            return _this4.container = el;
          }
        },
        _react2.default.createElement(
          'div',
          { className: _ScrolledList2.default.eyeshot, ref: function ref(el) {
              return _this4.eyeshot = el;
            } },
          _react2.default.createElement(
            'div',
            { className: _ScrolledList2.default.bar, ref: function ref(el) {
                return _this4.bar = el;
              } },
            _react.Children.map(this.props.children, function (child, i) {
              if (scrolledListHasHorizontalSpaceLeft) {
                child = _react2.default.cloneElement(child, {
                  scrolledListHasHorizontalSpaceLeft: scrolledListHasHorizontalSpaceLeft
                });
              }
              return _this4.props.renderItemContainer({
                key: i,
                selected: _this4.state.item == i,
                onClick: _this4.onItemClick.bind(_this4, i),
                onWidth: _this4.setItemWidth.bind(_this4, i),
                children: child
              });
            })
          )
        ),
        this.props.showControls && this.props.renderPrevButton({
          onClick: this.prevPage,
          disabled: !this.showPrevButton
        }),
        this.props.showControls && this.props.renderNextButton({
          onClick: this.nextPage,
          disabled: !this.showNextButton
        })
      );
    }
  }, {
    key: 'currentScrollLeft',
    get: function get() {
      return this.eyeshot ? this.eyeshot.scrollLeft : 0;
    }

    /*
      * Field of view width.
      * @returns {number|null}
      */

  }, {
    key: 'eyeshotWidth',
    get: function get() {
      return this.eyeshot ? this.eyeshot.offsetWidth : null;
    }

    /*
      * Returns maximal scroll left offset.
      * @returns {number|null}
      */

  }, {
    key: 'maxScrollLeft',
    get: function get() {
      if (!this.eyeshotWidth) {
        return null;
      }

      return this.computeItemsWidth(0, _react.Children.count(this.props.children) - 1) - this.eyeshotWidth;
    }
  }, {
    key: 'showPrevButton',
    get: function get() {
      return this.currentScrollLeft > 0;
    }

    /*
      * Should next button be shown
      * @returns {boolean}
      */

  }, {
    key: 'showNextButton',
    get: function get() {
      return this.currentScrollLeft < this.maxScrollLeft;
    }
  }, {
    key: 'averageItemWidth',
    get: function get() {
      return this.computeItemsWidth(0, _react.Children.count(this.props.children) - 1) / _react.Children.count(this.props.children);
    }
  }]);

  return ScrolledList;
}(_react.Component);

ScrolledList.ALIGN_ITEMS = ScrolledList_ALIGN_ITEMS;
ScrolledList.SCROLL_TO_ITEM_MODE = ScrolledList_SCROLL_TO_ITEM_MODE;

/**
 * Should return rendered prev/next scroll button.
 * @callback ScrolledList_RenderButton
 * @param {ScrolledList_RenderButtonArgs} args Contains properties which will control the button
 * @returns ReactElement
 *
 * @example <caption>Using custom button for next/prev.</caption>
 *    ({onClick, disabled}) => <CustomButton onClick={onClick} disabled={disabled} />
 *
 * @example <caption>Shorthand syntax can be used once function arguments and component properties names match.</caption>
 *    args => <CustomButton {...args} />
 */

/**
 * @name ScrolledList_RenderButtonArgs
 * @property {function} onClick Click handler
 * @property {boolean} disabled Controls whether button should be rendered as disabled or not
 */

/**
 * Should return rendered item container.
 * Container is responsible for receiving clicks, properly rendering selected state and optionally hover.
 * @callback ScrolledList_RenderItemContainer
 * @param {ScrolledList_RenderItemContainerArgs} args Container properties which will control the container
 * @returns ReactElement
 *
 * @example <caption>Using custom item container</caption>
 *    ({selected, onClick, onWidth, children}) =>
 *       <CustomItemContainer
 *          selected={selected}
 *          onClick={onClick}
 *          onWidth={onWidth}>
 *             {children}
 *       </CustomItemContainer>
 *
 * @example <caption>Shorthand syntax can be used once function arguments and component properties names match.</caption>
 *    args => <CustomItemContainer {...args}>{args.children}</CustomItemContainer>
 */

/**
 * @name ScrolledList_RenderItemContainerArgs
 * @property {boolean} selected Controls whether item should be rendered as currently selected or normally
 * @property {function} onClick Called once item has been clicked
 * @property {function} onWidth Called when item width is determined or has been changed
 * @property {ReactElement} children Item contents
 */

/**
 * @property [children] {ReactElement[]} Items list
 * @property [onItemClick] {function(number)} Item click handler. Called with item index argument.
 * @property [selected=0] {number} Initially selected item index
 * @property [step=2] {number} Scroll step (items count)
 * @property [alignItems=CENTER] {ScrolledList_ALIGN_ITEMS} Method of aligning items when they take less width than the container has
 * @property [renderPrevButton] {ScrolledList_RenderButton} Function capable of rendering button responsible for scrolling left. Renders left arrow button by default.
 * @property [renderNextButton] {ScrolledList_RenderButton} Function capable of rendering button responsible for scrolling right. Renders right arrow button by default.
 * @property [renderItemContainer] {ScrolledList_RenderItemContainer} Function capable of rendering item container. Renders Kambi-styled item container by default.
 * @property [scrollToItemMode=CENTER] {ScrolledList_SCROLL_TO_ITEM_MODE} Scroll to selected item mode
 * @property [showControls] {boolean} Decides whether next/prev controls be visible e.g. can be hidden in mobile mode
 */


ScrolledList.defaultProps = {
  selected: 0,
  step: 2,
  alignItems: ScrolledList_ALIGN_ITEMS.CENTER,
  scrollToItemMode: ScrolledList_SCROLL_TO_ITEM_MODE.CENTER,
  renderPrevButton: function renderPrevButton(props) {
    return _react2.default.createElement(_ArrowButton2.default, _extends({ type: 'left' }, props));
  },
  renderNextButton: function renderNextButton(props) {
    return _react2.default.createElement(_ArrowButton2.default, _extends({ type: 'right' }, props));
  },
  renderItemContainer: function renderItemContainer(args) {
    return _react2.default.createElement(
      _ItemContainer2.default,
      args,
      args.children
    );
  },
  showControls: true
};

exports.default = ScrolledList;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ItemContainer = __webpack_require__(68);

var _ItemContainer2 = _interopRequireDefault(_ItemContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ItemContainer = function (_Component) {
   _inherits(ItemContainer, _Component);

   function ItemContainer(props) {
      _classCallCheck(this, ItemContainer);

      var _this = _possibleConstructorReturn(this, (ItemContainer.__proto__ || Object.getPrototypeOf(ItemContainer)).call(this, props));

      _this.onResize = _this.onResize.bind(_this);
      return _this;
   }

   /*
    * Called after component rendering to DOM.
    */


   _createClass(ItemContainer, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
         window.addEventListener('resize', this.onResize);
      }

      /*
       * Called before removing component.
       */

   }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
         window.removeEventListener('resize', this.onResize);
      }

      /*
       * Updates element width on window resize.
       */

   }, {
      key: 'onResize',
      value: function onResize() {
         if (this.width !== null && this.props.onWidth) {
            this.props.onWidth(this.width);
         }
      }

      /*
       * Sets component's DOM element.
       * @param {HTMLElement} el Component's DOM element
       */

   }, {
      key: 'render',


      /*
       * Renders element.
       * @returns {XML}
       */
      value: function render() {
         var _this2 = this;

         return _react2.default.createElement(
            'div',
            {
               className: [_ItemContainer2.default.item, this.props.selected ? _ItemContainer2.default.selected : ''].join(' '),
               onClick: this.props.onClick,
               ref: function ref(el) {
                  return _this2.element = el;
               }
            },
            this.props.children,
            _react2.default.createElement('i', { className: ['KambiWidget-primary-background-color', _ItemContainer2.default.border].join(' ') })
         );
      }
   }, {
      key: 'element',
      set: function set(el) {
         this.el = el;

         if (this.width !== null && this.props.onWidth) {
            this.props.onWidth(this.width);
         }
      }

      /*
       * Current element width
       * @returns {number|null}
       */

   }, {
      key: 'width',
      get: function get() {
         return this.el ? this.el.offsetWidth : null;
      }
   }]);

   return ItemContainer;
}(_react.Component);

exports.default = ItemContainer;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Maximum mobile screen size
 * @type {number}
 */
var MOBILE_SCREEN_MAX_SIZE = 768;

/**
 * Determines if the page is being displayed on mobile device.
 * @returns {boolean}
 */
var isMobile = function isMobile() {
  return document.body.offsetWidth <= MOBILE_SCREEN_MAX_SIZE && 'ontouchstart' in window && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

exports.default = isMobile;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(22);

__webpack_require__(23);

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<html>\n<head>\n   <title>Match Schedule Widget</title>\n   <meta charset=\"UTF-8\">\n   <meta name=\"apple-mobile-web-app-title\" content=\"Kambi\">\n   <meta name=\"description\" content=\"Match Schedule Widget\">\n   <meta name=\"HandheldFriendly\" content=\"True\">\n   <meta name=\"MobileOptimized\" content=\"320\">\n   <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui\">\n\n   <meta name=\"fragment\" content=\"!\"/>\n\n   <meta name=\"mobile-web-app-capable\" content=\"yes\">\n   <meta name=\"apple-mobile-web-app-capable\" content=\"yes\">\n   <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\">\n   <meta name=\"apple-mobile-web-app-title\" content=\"\">\n</head>\n<body>\n   <div id=\"root\"></div>\n</body>\n</html>\n";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(0);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _kambiWidgetCoreLibrary = __webpack_require__(4);

var _kambi = __webpack_require__(16);

var _kambi2 = _interopRequireDefault(_kambi);

var _TournamentOverviewWidget = __webpack_require__(58);

var _TournamentOverviewWidget2 = _interopRequireDefault(_TournamentOverviewWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_kambiWidgetCoreLibrary.coreLibrary.init({
  widgetTrackingName: 'wc2018-tournament-overview', // sets widget tracking name automatically by kambi when passed as arg
  filter: '/football/world_cup_2018',
  iconUrl: 'https://d1fqgomuxh4f5p.cloudfront.net/tournamentdata/worldcup2018/icons/world_cup_2018.svg',
  flagBaseUrl: 'https://d1fqgomuxh4f5p.cloudfront.net/tournamentdata/worldcup2018/icons/',
  backgroundUrl: 'https://d1fqgomuxh4f5p.cloudfront.net/tournamentdata/worldcup2018/overview-bw-bg-desktop.jpg',
  rightWidgetInput: {
    // golden boot
    eventId: 1004514530,
    criterionId: 1001868386
  },
  leftWidgetInput: {
    // tournament winner
    eventId: 1002163009,
    criterionId: 1004240929
  }

  // rightWidgetInput : { // golden ball
  //   eventId: 1004494885,
  //   criterionId: 1001613138,
  // },
  // // CHAMPIONS LEAGUE
  // filter: "/football/champions_league",
  // rightWidgetInput : { // top goalscorer (no golden boot)
  //   eventId: 1004031266,
  //   criterionId: 1001304945,
  // },
  // leftWidgetInput : { // tournament winner
  //   eventId: 1003997020,
  //   criterionId: 1001221607
  // }
}).then(function () {
  var _coreLibrary$args = _kambiWidgetCoreLibrary.coreLibrary.args,
      filter = _coreLibrary$args.filter,
      leftWidgetInput = _coreLibrary$args.leftWidgetInput,
      rightWidgetInput = _coreLibrary$args.rightWidgetInput;

  return _kambi2.default.getEvents(filter, leftWidgetInput, rightWidgetInput);
}).then(function (_ref) {
  var events = _ref.events,
      competitions = _ref.competitions;
  var _coreLibrary$args2 = _kambiWidgetCoreLibrary.coreLibrary.args,
      filter = _coreLibrary$args2.filter,
      iconUrl = _coreLibrary$args2.iconUrl,
      flagBaseUrl = _coreLibrary$args2.flagBaseUrl,
      backgroundUrl = _coreLibrary$args2.backgroundUrl;


  _reactDom2.default.render(_react2.default.createElement(_TournamentOverviewWidget2.default, {
    competitions: competitions,
    events: events,
    iconUrl: iconUrl,
    flagBaseUrl: flagBaseUrl,
    backgroundUrl: backgroundUrl,
    filter: filter
  }), _kambiWidgetCoreLibrary.coreLibrary.rootElement, function () {
    _kambiWidgetCoreLibrary.coreLibrary.args.onWidgetLoaded();
  });
  var originalOnWidgetRemoved = _kambiWidgetCoreLibrary.coreLibrary.args.onWidgetRemoved;
  _kambiWidgetCoreLibrary.coreLibrary.args.onWidgetRemoved = function (err) {
    _reactDom2.default.unmountComponentAtNode(_kambiWidgetCoreLibrary.coreLibrary.rootElement);
    if (originalOnWidgetRemoved) {
      originalOnWidgetRemoved(err);
    }
  };
}).catch(function (err) {
  console.error(err);
  _kambiWidgetCoreLibrary.widgetModule.removeWidget(err);
});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(25);
var invariant = __webpack_require__(26);
var ReactPropTypesSecret = __webpack_require__(27);

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** Virtual DOM Node */
function VNode() {}

/** Global options
 *	@public
 *	@namespace options {Object}
 */
var options = {

	/** If `true`, `prop` changes trigger synchronous component updates.
  *	@name syncComponentUpdates
  *	@type Boolean
  *	@default true
  */
	//syncComponentUpdates: true,

	/** Processes all created VNodes.
  *	@param {VNode} vnode	A newly-created VNode to normalize/process
  */
	//vnode(vnode) { }

	/** Hook invoked after a component is mounted. */
	// afterMount(component) { }

	/** Hook invoked after the DOM is updated with a component's latest render. */
	// afterUpdate(component) { }

	/** Hook invoked immediately before a component is unmounted. */
	// beforeUnmount(component) { }
};

var stack = [];

var EMPTY_CHILDREN = [];

/**
 * JSX/hyperscript reviver.
 * @see http://jasonformat.com/wtf-is-jsx
 * Benchmarks: https://esbench.com/bench/57ee8f8e330ab09900a1a1a0
 *
 * Note: this is exported as both `h()` and `createElement()` for compatibility reasons.
 *
 * Creates a VNode (virtual DOM element). A tree of VNodes can be used as a lightweight representation
 * of the structure of a DOM tree. This structure can be realized by recursively comparing it against
 * the current _actual_ DOM structure, and applying only the differences.
 *
 * `h()`/`createElement()` accepts an element name, a list of attributes/props,
 * and optionally children to append to the element.
 *
 * @example The following DOM tree
 *
 * `<div id="foo" name="bar">Hello!</div>`
 *
 * can be constructed using this function as:
 *
 * `h('div', { id: 'foo', name : 'bar' }, 'Hello!');`
 *
 * @param {string} nodeName	An element name. Ex: `div`, `a`, `span`, etc.
 * @param {Object} attributes	Any attributes/props to set on the created element.
 * @param rest			Additional arguments are taken to be children to append. Can be infinitely nested Arrays.
 *
 * @public
 */
function h(nodeName, attributes) {
	var children = EMPTY_CHILDREN,
	    lastSimple,
	    child,
	    simple,
	    i;
	for (i = arguments.length; i-- > 2;) {
		stack.push(arguments[i]);
	}
	if (attributes && attributes.children != null) {
		if (!stack.length) stack.push(attributes.children);
		delete attributes.children;
	}
	while (stack.length) {
		if ((child = stack.pop()) && child.pop !== undefined) {
			for (i = child.length; i--;) {
				stack.push(child[i]);
			}
		} else {
			if (typeof child === 'boolean') child = null;

			if (simple = typeof nodeName !== 'function') {
				if (child == null) child = '';else if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;
			}

			if (simple && lastSimple) {
				children[children.length - 1] += child;
			} else if (children === EMPTY_CHILDREN) {
				children = [child];
			} else {
				children.push(child);
			}

			lastSimple = simple;
		}
	}

	var p = new VNode();
	p.nodeName = nodeName;
	p.children = children;
	p.attributes = attributes == null ? undefined : attributes;
	p.key = attributes == null ? undefined : attributes.key;

	// if a "vnode hook" is defined, pass every created VNode to it
	if (options.vnode !== undefined) options.vnode(p);

	return p;
}

/**
 *  Copy all properties from `props` onto `obj`.
 *  @param {Object} obj		Object onto which properties should be copied.
 *  @param {Object} props	Object from which to copy properties.
 *  @returns obj
 *  @private
 */
function extend(obj, props) {
	for (var i in props) {
		obj[i] = props[i];
	}return obj;
}

/**
 * Call a function asynchronously, as soon as possible. Makes
 * use of HTML Promise to schedule the callback if available,
 * otherwise falling back to `setTimeout` (mainly for IE<11).
 *
 * @param {Function} callback
 */
var defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

/**
 * Clones the given VNode, optionally adding attributes/props and replacing its children.
 * @param {VNode} vnode		The virtual DOM element to clone
 * @param {Object} props	Attributes/props to add when cloning
 * @param {VNode} rest		Any additional arguments will be used as replacement children.
 */
function cloneElement(vnode, props) {
	return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
}

// DOM properties that should NOT have "px" added when numeric
var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

/** Managed queue of dirty components to be re-rendered */

var items = [];

function enqueueRender(component) {
	if (!component._dirty && (component._dirty = true) && items.push(component) == 1) {
		(options.debounceRendering || defer)(rerender);
	}
}

function rerender() {
	var p,
	    list = items;
	items = [];
	while (p = list.pop()) {
		if (p._dirty) renderComponent(p);
	}
}

/**
 * Check if two nodes are equivalent.
 *
 * @param {Node} node			DOM Node to compare
 * @param {VNode} vnode			Virtual DOM node to compare
 * @param {boolean} [hydrating=false]	If true, ignores component constructors when comparing.
 * @private
 */
function isSameNodeType(node, vnode, hydrating) {
	if (typeof vnode === 'string' || typeof vnode === 'number') {
		return node.splitText !== undefined;
	}
	if (typeof vnode.nodeName === 'string') {
		return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
	}
	return hydrating || node._componentConstructor === vnode.nodeName;
}

/**
 * Check if an Element has a given nodeName, case-insensitively.
 *
 * @param {Element} node	A DOM Element to inspect the name of.
 * @param {String} nodeName	Unnormalized name to compare against.
 */
function isNamedNode(node, nodeName) {
	return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
}

/**
 * Reconstruct Component-style `props` from a VNode.
 * Ensures default/fallback values from `defaultProps`:
 * Own-properties of `defaultProps` not present in `vnode.attributes` are added.
 *
 * @param {VNode} vnode
 * @returns {Object} props
 */
function getNodeProps(vnode) {
	var props = extend({}, vnode.attributes);
	props.children = vnode.children;

	var defaultProps = vnode.nodeName.defaultProps;
	if (defaultProps !== undefined) {
		for (var i in defaultProps) {
			if (props[i] === undefined) {
				props[i] = defaultProps[i];
			}
		}
	}

	return props;
}

/** Create an element with the given nodeName.
 *	@param {String} nodeName
 *	@param {Boolean} [isSvg=false]	If `true`, creates an element within the SVG namespace.
 *	@returns {Element} node
 */
function createNode(nodeName, isSvg) {
	var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
	node.normalizedNodeName = nodeName;
	return node;
}

/** Remove a child node from its parent if attached.
 *	@param {Element} node		The node to remove
 */
function removeNode(node) {
	var parentNode = node.parentNode;
	if (parentNode) parentNode.removeChild(node);
}

/** Set a named attribute on the given Node, with special behavior for some names and event handlers.
 *	If `value` is `null`, the attribute/handler will be removed.
 *	@param {Element} node	An element to mutate
 *	@param {string} name	The name/key to set, such as an event or attribute name
 *	@param {any} old	The last value that was set for this name/node pair
 *	@param {any} value	An attribute value, such as a function to be used as an event handler
 *	@param {Boolean} isSvg	Are we currently diffing inside an svg?
 *	@private
 */
function setAccessor(node, name, old, value, isSvg) {
	if (name === 'className') name = 'class';

	if (name === 'key') {
		// ignore
	} else if (name === 'ref') {
		if (old) old(null);
		if (value) value(node);
	} else if (name === 'class' && !isSvg) {
		node.className = value || '';
	} else if (name === 'style') {
		if (!value || typeof value === 'string' || typeof old === 'string') {
			node.style.cssText = value || '';
		}
		if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
			if (typeof old !== 'string') {
				for (var i in old) {
					if (!(i in value)) node.style[i] = '';
				}
			}
			for (var i in value) {
				node.style[i] = typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false ? value[i] + 'px' : value[i];
			}
		}
	} else if (name === 'dangerouslySetInnerHTML') {
		if (value) node.innerHTML = value.__html || '';
	} else if (name[0] == 'o' && name[1] == 'n') {
		var useCapture = name !== (name = name.replace(/Capture$/, ''));
		name = name.toLowerCase().substring(2);
		if (value) {
			if (!old) node.addEventListener(name, eventProxy, useCapture);
		} else {
			node.removeEventListener(name, eventProxy, useCapture);
		}
		(node._listeners || (node._listeners = {}))[name] = value;
	} else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {
		setProperty(node, name, value == null ? '' : value);
		if (value == null || value === false) node.removeAttribute(name);
	} else {
		var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));
		if (value == null || value === false) {
			if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
		} else if (typeof value !== 'function') {
			if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
		}
	}
}

/** Attempt to set a DOM property to the given value.
 *	IE & FF throw for certain property-value combinations.
 */
function setProperty(node, name, value) {
	try {
		node[name] = value;
	} catch (e) {}
}

/** Proxy an event to hooked event handlers
 *	@private
 */
function eventProxy(e) {
	return this._listeners[e.type](options.event && options.event(e) || e);
}

/** Queue of components that have been mounted and are awaiting componentDidMount */
var mounts = [];

/** Diff recursion count, used to track the end of the diff cycle. */
var diffLevel = 0;

/** Global flag indicating if the diff is currently within an SVG */
var isSvgMode = false;

/** Global flag indicating if the diff is performing hydration */
var hydrating = false;

/** Invoke queued componentDidMount lifecycle methods */
function flushMounts() {
	var c;
	while (c = mounts.pop()) {
		if (options.afterMount) options.afterMount(c);
		if (c.componentDidMount) c.componentDidMount();
	}
}

/** Apply differences in a given vnode (and it's deep children) to a real DOM Node.
 *	@param {Element} [dom=null]		A DOM node to mutate into the shape of the `vnode`
 *	@param {VNode} vnode			A VNode (with descendants forming a tree) representing the desired DOM structure
 *	@returns {Element} dom			The created/mutated element
 *	@private
 */
function diff(dom, vnode, context, mountAll, parent, componentRoot) {
	// diffLevel having been 0 here indicates initial entry into the diff (not a subdiff)
	if (!diffLevel++) {
		// when first starting the diff, check if we're diffing an SVG or within an SVG
		isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

		// hydration is indicated by the existing element to be diffed not having a prop cache
		hydrating = dom != null && !('__preactattr_' in dom);
	}

	var ret = idiff(dom, vnode, context, mountAll, componentRoot);

	// append the element if its a new parent
	if (parent && ret.parentNode !== parent) parent.appendChild(ret);

	// diffLevel being reduced to 0 means we're exiting the diff
	if (! --diffLevel) {
		hydrating = false;
		// invoke queued componentDidMount lifecycle methods
		if (!componentRoot) flushMounts();
	}

	return ret;
}

/** Internals of `diff()`, separated to allow bypassing diffLevel / mount flushing. */
function idiff(dom, vnode, context, mountAll, componentRoot) {
	var out = dom,
	    prevSvgMode = isSvgMode;

	// empty values (null, undefined, booleans) render as empty Text nodes
	if (vnode == null || typeof vnode === 'boolean') vnode = '';

	// Fast case: Strings & Numbers create/update Text nodes.
	if (typeof vnode === 'string' || typeof vnode === 'number') {

		// update if it's already a Text node:
		if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {
			/* istanbul ignore if */ /* Browser quirk that can't be covered: https://github.com/developit/preact/commit/fd4f21f5c45dfd75151bd27b4c217d8003aa5eb9 */
			if (dom.nodeValue != vnode) {
				dom.nodeValue = vnode;
			}
		} else {
			// it wasn't a Text node: replace it with one and recycle the old Element
			out = document.createTextNode(vnode);
			if (dom) {
				if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
				recollectNodeTree(dom, true);
			}
		}

		out['__preactattr_'] = true;

		return out;
	}

	// If the VNode represents a Component, perform a component diff:
	var vnodeName = vnode.nodeName;
	if (typeof vnodeName === 'function') {
		return buildComponentFromVNode(dom, vnode, context, mountAll);
	}

	// Tracks entering and exiting SVG namespace when descending through the tree.
	isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;

	// If there's no existing element or it's the wrong type, create a new one:
	vnodeName = String(vnodeName);
	if (!dom || !isNamedNode(dom, vnodeName)) {
		out = createNode(vnodeName, isSvgMode);

		if (dom) {
			// move children into the replacement node
			while (dom.firstChild) {
				out.appendChild(dom.firstChild);
			} // if the previous Element was mounted into the DOM, replace it inline
			if (dom.parentNode) dom.parentNode.replaceChild(out, dom);

			// recycle the old element (skips non-Element node types)
			recollectNodeTree(dom, true);
		}
	}

	var fc = out.firstChild,
	    props = out['__preactattr_'],
	    vchildren = vnode.children;

	if (props == null) {
		props = out['__preactattr_'] = {};
		for (var a = out.attributes, i = a.length; i--;) {
			props[a[i].name] = a[i].value;
		}
	}

	// Optimization: fast-path for elements containing a single TextNode:
	if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
		if (fc.nodeValue != vchildren[0]) {
			fc.nodeValue = vchildren[0];
		}
	}
	// otherwise, if there are existing or new children, diff them:
	else if (vchildren && vchildren.length || fc != null) {
			innerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML != null);
		}

	// Apply attributes/props from VNode to the DOM Element:
	diffAttributes(out, vnode.attributes, props);

	// restore previous SVG mode: (in case we're exiting an SVG namespace)
	isSvgMode = prevSvgMode;

	return out;
}

/** Apply child and attribute changes between a VNode and a DOM Node to the DOM.
 *	@param {Element} dom			Element whose children should be compared & mutated
 *	@param {Array} vchildren		Array of VNodes to compare to `dom.childNodes`
 *	@param {Object} context			Implicitly descendant context object (from most recent `getChildContext()`)
 *	@param {Boolean} mountAll
 *	@param {Boolean} isHydrating	If `true`, consumes externally created elements similar to hydration
 */
function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
	var originalChildren = dom.childNodes,
	    children = [],
	    keyed = {},
	    keyedLen = 0,
	    min = 0,
	    len = originalChildren.length,
	    childrenLen = 0,
	    vlen = vchildren ? vchildren.length : 0,
	    j,
	    c,
	    f,
	    vchild,
	    child;

	// Build up a map of keyed children and an Array of unkeyed children:
	if (len !== 0) {
		for (var i = 0; i < len; i++) {
			var _child = originalChildren[i],
			    props = _child['__preactattr_'],
			    key = vlen && props ? _child._component ? _child._component.__key : props.key : null;
			if (key != null) {
				keyedLen++;
				keyed[key] = _child;
			} else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
				children[childrenLen++] = _child;
			}
		}
	}

	if (vlen !== 0) {
		for (var i = 0; i < vlen; i++) {
			vchild = vchildren[i];
			child = null;

			// attempt to find a node based on key matching
			var key = vchild.key;
			if (key != null) {
				if (keyedLen && keyed[key] !== undefined) {
					child = keyed[key];
					keyed[key] = undefined;
					keyedLen--;
				}
			}
			// attempt to pluck a node of the same type from the existing children
			else if (!child && min < childrenLen) {
					for (j = min; j < childrenLen; j++) {
						if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
							child = c;
							children[j] = undefined;
							if (j === childrenLen - 1) childrenLen--;
							if (j === min) min++;
							break;
						}
					}
				}

			// morph the matched/found/created DOM child to match vchild (deep)
			child = idiff(child, vchild, context, mountAll);

			f = originalChildren[i];
			if (child && child !== dom && child !== f) {
				if (f == null) {
					dom.appendChild(child);
				} else if (child === f.nextSibling) {
					removeNode(f);
				} else {
					dom.insertBefore(child, f);
				}
			}
		}
	}

	// remove unused keyed children:
	if (keyedLen) {
		for (var i in keyed) {
			if (keyed[i] !== undefined) recollectNodeTree(keyed[i], false);
		}
	}

	// remove orphaned unkeyed children:
	while (min <= childrenLen) {
		if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
	}
}

/** Recursively recycle (or just unmount) a node and its descendants.
 *	@param {Node} node						DOM node to start unmount/removal from
 *	@param {Boolean} [unmountOnly=false]	If `true`, only triggers unmount lifecycle, skips removal
 */
function recollectNodeTree(node, unmountOnly) {
	var component = node._component;
	if (component) {
		// if node is owned by a Component, unmount that component (ends up recursing back here)
		unmountComponent(component);
	} else {
		// If the node's VNode had a ref function, invoke it with null here.
		// (this is part of the React spec, and smart for unsetting references)
		if (node['__preactattr_'] != null && node['__preactattr_'].ref) node['__preactattr_'].ref(null);

		if (unmountOnly === false || node['__preactattr_'] == null) {
			removeNode(node);
		}

		removeChildren(node);
	}
}

/** Recollect/unmount all children.
 *	- we use .lastChild here because it causes less reflow than .firstChild
 *	- it's also cheaper than accessing the .childNodes Live NodeList
 */
function removeChildren(node) {
	node = node.lastChild;
	while (node) {
		var next = node.previousSibling;
		recollectNodeTree(node, true);
		node = next;
	}
}

/** Apply differences in attributes from a VNode to the given DOM Element.
 *	@param {Element} dom		Element with attributes to diff `attrs` against
 *	@param {Object} attrs		The desired end-state key-value attribute pairs
 *	@param {Object} old			Current/previous attributes (from previous VNode or element's prop cache)
 */
function diffAttributes(dom, attrs, old) {
	var name;

	// remove attributes no longer present on the vnode by setting them to undefined
	for (name in old) {
		if (!(attrs && attrs[name] != null) && old[name] != null) {
			setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode);
		}
	}

	// add new & update changed attributes
	for (name in attrs) {
		if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
			setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
		}
	}
}

/** Retains a pool of Components for re-use, keyed on component name.
 *	Note: since component names are not unique or even necessarily available, these are primarily a form of sharding.
 *	@private
 */
var components = {};

/** Reclaim a component for later re-use by the recycler. */
function collectComponent(component) {
	var name = component.constructor.name;
	(components[name] || (components[name] = [])).push(component);
}

/** Create a component. Normalizes differences between PFC's and classful Components. */
function createComponent(Ctor, props, context) {
	var list = components[Ctor.name],
	    inst;

	if (Ctor.prototype && Ctor.prototype.render) {
		inst = new Ctor(props, context);
		Component.call(inst, props, context);
	} else {
		inst = new Component(props, context);
		inst.constructor = Ctor;
		inst.render = doRender;
	}

	if (list) {
		for (var i = list.length; i--;) {
			if (list[i].constructor === Ctor) {
				inst.nextBase = list[i].nextBase;
				list.splice(i, 1);
				break;
			}
		}
	}
	return inst;
}

/** The `.render()` method for a PFC backing instance. */
function doRender(props, state, context) {
	return this.constructor(props, context);
}

/** Set a component's `props` (generally derived from JSX attributes).
 *	@param {Object} props
 *	@param {Object} [opts]
 *	@param {boolean} [opts.renderSync=false]	If `true` and {@link options.syncComponentUpdates} is `true`, triggers synchronous rendering.
 *	@param {boolean} [opts.render=true]			If `false`, no render will be triggered.
 */
function setComponentProps(component, props, opts, context, mountAll) {
	if (component._disable) return;
	component._disable = true;

	if (component.__ref = props.ref) delete props.ref;
	if (component.__key = props.key) delete props.key;

	if (!component.base || mountAll) {
		if (component.componentWillMount) component.componentWillMount();
	} else if (component.componentWillReceiveProps) {
		component.componentWillReceiveProps(props, context);
	}

	if (context && context !== component.context) {
		if (!component.prevContext) component.prevContext = component.context;
		component.context = context;
	}

	if (!component.prevProps) component.prevProps = component.props;
	component.props = props;

	component._disable = false;

	if (opts !== 0) {
		if (opts === 1 || options.syncComponentUpdates !== false || !component.base) {
			renderComponent(component, 1, mountAll);
		} else {
			enqueueRender(component);
		}
	}

	if (component.__ref) component.__ref(component);
}

/** Render a Component, triggering necessary lifecycle events and taking High-Order Components into account.
 *	@param {Component} component
 *	@param {Object} [opts]
 *	@param {boolean} [opts.build=false]		If `true`, component will build and store a DOM node if not already associated with one.
 *	@private
 */
function renderComponent(component, opts, mountAll, isChild) {
	if (component._disable) return;

	var props = component.props,
	    state = component.state,
	    context = component.context,
	    previousProps = component.prevProps || props,
	    previousState = component.prevState || state,
	    previousContext = component.prevContext || context,
	    isUpdate = component.base,
	    nextBase = component.nextBase,
	    initialBase = isUpdate || nextBase,
	    initialChildComponent = component._component,
	    skip = false,
	    rendered,
	    inst,
	    cbase;

	// if updating
	if (isUpdate) {
		component.props = previousProps;
		component.state = previousState;
		component.context = previousContext;
		if (opts !== 2 && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === false) {
			skip = true;
		} else if (component.componentWillUpdate) {
			component.componentWillUpdate(props, state, context);
		}
		component.props = props;
		component.state = state;
		component.context = context;
	}

	component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	component._dirty = false;

	if (!skip) {
		rendered = component.render(props, state, context);

		// context to pass to the child, can be updated via (grand-)parent component
		if (component.getChildContext) {
			context = extend(extend({}, context), component.getChildContext());
		}

		var childComponent = rendered && rendered.nodeName,
		    toUnmount,
		    base;

		if (typeof childComponent === 'function') {
			// set up high order component link

			var childProps = getNodeProps(rendered);
			inst = initialChildComponent;

			if (inst && inst.constructor === childComponent && childProps.key == inst.__key) {
				setComponentProps(inst, childProps, 1, context, false);
			} else {
				toUnmount = inst;

				component._component = inst = createComponent(childComponent, childProps, context);
				inst.nextBase = inst.nextBase || nextBase;
				inst._parentComponent = component;
				setComponentProps(inst, childProps, 0, context, false);
				renderComponent(inst, 1, mountAll, true);
			}

			base = inst.base;
		} else {
			cbase = initialBase;

			// destroy high order component link
			toUnmount = initialChildComponent;
			if (toUnmount) {
				cbase = component._component = null;
			}

			if (initialBase || opts === 1) {
				if (cbase) cbase._component = null;
				base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, true);
			}
		}

		if (initialBase && base !== initialBase && inst !== initialChildComponent) {
			var baseParent = initialBase.parentNode;
			if (baseParent && base !== baseParent) {
				baseParent.replaceChild(base, initialBase);

				if (!toUnmount) {
					initialBase._component = null;
					recollectNodeTree(initialBase, false);
				}
			}
		}

		if (toUnmount) {
			unmountComponent(toUnmount);
		}

		component.base = base;
		if (base && !isChild) {
			var componentRef = component,
			    t = component;
			while (t = t._parentComponent) {
				(componentRef = t).base = base;
			}
			base._component = componentRef;
			base._componentConstructor = componentRef.constructor;
		}
	}

	if (!isUpdate || mountAll) {
		mounts.unshift(component);
	} else if (!skip) {
		// Ensure that pending componentDidMount() hooks of child components
		// are called before the componentDidUpdate() hook in the parent.
		// Note: disabled as it causes duplicate hooks, see https://github.com/developit/preact/issues/750
		// flushMounts();

		if (component.componentDidUpdate) {
			component.componentDidUpdate(previousProps, previousState, previousContext);
		}
		if (options.afterUpdate) options.afterUpdate(component);
	}

	if (component._renderCallbacks != null) {
		while (component._renderCallbacks.length) {
			component._renderCallbacks.pop().call(component);
		}
	}

	if (!diffLevel && !isChild) flushMounts();
}

/** Apply the Component referenced by a VNode to the DOM.
 *	@param {Element} dom	The DOM node to mutate
 *	@param {VNode} vnode	A Component-referencing VNode
 *	@returns {Element} dom	The created/mutated element
 *	@private
 */
function buildComponentFromVNode(dom, vnode, context, mountAll) {
	var c = dom && dom._component,
	    originalComponent = c,
	    oldDom = dom,
	    isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
	    isOwner = isDirectOwner,
	    props = getNodeProps(vnode);
	while (c && !isOwner && (c = c._parentComponent)) {
		isOwner = c.constructor === vnode.nodeName;
	}

	if (c && isOwner && (!mountAll || c._component)) {
		setComponentProps(c, props, 3, context, mountAll);
		dom = c.base;
	} else {
		if (originalComponent && !isDirectOwner) {
			unmountComponent(originalComponent);
			dom = oldDom = null;
		}

		c = createComponent(vnode.nodeName, props, context);
		if (dom && !c.nextBase) {
			c.nextBase = dom;
			// passing dom/oldDom as nextBase will recycle it if unused, so bypass recycling on L229:
			oldDom = null;
		}
		setComponentProps(c, props, 1, context, mountAll);
		dom = c.base;

		if (oldDom && dom !== oldDom) {
			oldDom._component = null;
			recollectNodeTree(oldDom, false);
		}
	}

	return dom;
}

/** Remove a component from the DOM and recycle it.
 *	@param {Component} component	The Component instance to unmount
 *	@private
 */
function unmountComponent(component) {
	if (options.beforeUnmount) options.beforeUnmount(component);

	var base = component.base;

	component._disable = true;

	if (component.componentWillUnmount) component.componentWillUnmount();

	component.base = null;

	// recursively tear down & recollect high-order component children:
	var inner = component._component;
	if (inner) {
		unmountComponent(inner);
	} else if (base) {
		if (base['__preactattr_'] && base['__preactattr_'].ref) base['__preactattr_'].ref(null);

		component.nextBase = base;

		removeNode(base);
		collectComponent(component);

		removeChildren(base);
	}

	if (component.__ref) component.__ref(null);
}

/** Base Component class.
 *	Provides `setState()` and `forceUpdate()`, which trigger rendering.
 *	@public
 *
 *	@example
 *	class MyFoo extends Component {
 *		render(props, state) {
 *			return <div />;
 *		}
 *	}
 */
function Component(props, context) {
	this._dirty = true;

	/** @public
  *	@type {object}
  */
	this.context = context;

	/** @public
  *	@type {object}
  */
	this.props = props;

	/** @public
  *	@type {object}
  */
	this.state = this.state || {};
}

extend(Component.prototype, {

	/** Returns a `boolean` indicating if the component should re-render when receiving the given `props` and `state`.
  *	@param {object} nextProps
  *	@param {object} nextState
  *	@param {object} nextContext
  *	@returns {Boolean} should the component re-render
  *	@name shouldComponentUpdate
  *	@function
  */

	/** Update component state by copying properties from `state` to `this.state`.
  *	@param {object} state		A hash of state properties to update with new values
  *	@param {function} callback	A function to be called once component state is updated
  */
	setState: function setState(state, callback) {
		var s = this.state;
		if (!this.prevState) this.prevState = extend({}, s);
		extend(s, typeof state === 'function' ? state(s, this.props) : state);
		if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
		enqueueRender(this);
	},

	/** Immediately perform a synchronous re-render of the component.
  *	@param {function} callback		A function to be called after component is re-rendered.
  *	@private
  */
	forceUpdate: function forceUpdate(callback) {
		if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
		renderComponent(this, 2);
	},

	/** Accepts `props` and `state`, and returns a new Virtual DOM tree to build.
  *	Virtual DOM is generally constructed via [JSX](http://jasonformat.com/wtf-is-jsx).
  *	@param {object} props		Props (eg: JSX attributes) received from parent element/component
  *	@param {object} state		The component's current state
  *	@param {object} context		Context object (if a parent component has provided context)
  *	@returns VNode
  */
	render: function render() {}
});

/** Render JSX into a `parent` Element.
 *	@param {VNode} vnode		A (JSX) VNode to render
 *	@param {Element} parent		DOM element to render into
 *	@param {Element} [merge]	Attempt to re-use an existing DOM tree rooted at `merge`
 *	@public
 *
 *	@example
 *	// render a div into <body>:
 *	render(<div id="hello">hello!</div>, document.body);
 *
 *	@example
 *	// render a "Thing" component into #foo:
 *	const Thing = ({ name }) => <span>{ name }</span>;
 *	render(<Thing name="one" />, document.querySelector('#foo'));
 */
function render(vnode, parent, merge) {
	return diff(merge, vnode, {}, false, parent, false);
}

var preact = {
	h: h,
	createElement: h,
	cloneElement: cloneElement,
	Component: Component,
	render: render,
	rerender: rerender,
	options: options
};

exports.default = preact;
exports.h = h;
exports.createElement = h;
exports.cloneElement = cloneElement;
exports.Component = Component;
exports.render = render;
exports.rerender = rerender;
exports.options = options;
//# sourceMappingURL=preact.esm.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _es6Promise = __webpack_require__(30);

var _es6Promise2 = _interopRequireDefault(_es6Promise);

var _es6Symbol = __webpack_require__(32);

var _es6Symbol2 = _interopRequireDefault(_es6Symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// do not include with /implement as this crashes in iOS9

/* eslint-disable no-extend-native */

// ES6 Promise polyfill
if (window.Symbol == null) {
  window.Symbol = _es6Symbol2.default;
}

// enables Symbol.iterator on arrays
// this enables "for of" statements (babel transpiles that use use iterators)


// ES6 Symbol polyfill, this polyfill is required to use for (a of b)
if (!Array.prototype[_es6Symbol2.default.iterator]) {
  Object.defineProperty(Array.prototype, _es6Symbol2.default.iterator, {
    enumerable: false,
    value: function value() {
      var nextIndex = 0;
      var array = this;
      return {
        next: function next() {
          return nextIndex < array.length ? { value: array[nextIndex++], done: false } : { done: true };
        }
      };
    }
  });
}

/*
File with polyfills we use in this project
*/

_es6Promise2.default.polyfill(); // activates the polyfill

// Object.assign polyfill
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
if (typeof Object.assign != 'function') {
  ;(function () {
    Object.assign = function (target) {
      // We must check against these specific cases.
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var output = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source !== undefined && source !== null) {
          for (var nextKey in source) {
            if (source.hasOwnProperty(nextKey)) {
              output[nextKey] = source[nextKey];
            }
          }
        }
      }
      return output;
    };
  })();
}

// Array.find polyfill
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/find
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    enumerable: false,
    value: function value(predicate) {
      if (this == null) {
        throw new TypeError('Array.prototype.find called on null or undefined');
      }
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }
      var list = Object(this);
      // eslint-disable-next-line
      var length = list.length >>> 0;
      var thisArg = arguments[1];
      var value;

      for (var i = 0; i < length; i++) {
        value = list[i];
        if (predicate.call(thisArg, value, i, list)) {
          return value;
        }
      }
      return undefined;
    }
  });
}

// Array.findIndex polyfill
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
if (!Array.prototype.findIndex) {
  Object.defineProperty(Array.prototype, 'findIndex', {
    enumerable: false,
    value: function value(predicate) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('Array.prototype.find called on null or undefined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0; // eslint-disable-line

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return k.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return k;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return -1.
      return -1;
    }
  });
}

// The Number.isNaN() method determines whether the passed value is NaN. It is a more robust version of the original, global isNaN().
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
Number.isNaN = Number.isNaN || function (value) {
  return typeof value === 'number' && isNaN(value);
};

// Array.includes polyfill
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    enumerable: false,
    value: function value(searchElement, fromIndex) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      // 1. Let O be ? ToObject(this value).
      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If len is 0, return false.
      if (len === 0) {
        return false;
      }

      // 4. Let n be ? ToInteger(fromIndex).
      //    (If fromIndex is undefined, this step produces the value 0.)
      var n = fromIndex | 0;

      // 5. If n ≥ 0, then
      //  a. Let k be n.
      // 6. Else n < 0,
      //  a. Let k be len + n.
      //  b. If k < 0, let k be 0.
      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
      }

      // 7. Repeat, while k < len
      while (k < len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(searchElement, elementK) is true, return true.
        if (sameValueZero(o[k], searchElement)) {
          return true;
        }
        // c. Increase k by 1.
        k++;
      }

      // 8. Return false
      return false;
    }
  });
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.4+314e4831
 */

(function (global, factory) {
  ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.ES6Promise = factory();
})(undefined, function () {
  'use strict';

  function objectOrFunction(x) {
    var type = typeof x === 'undefined' ? 'undefined' : _typeof(x);
    return x !== null && (type === 'object' || type === 'function');
  }

  function isFunction(x) {
    return typeof x === 'function';
  }

  var _isArray = void 0;
  if (Array.isArray) {
    _isArray = Array.isArray;
  } else {
    _isArray = function _isArray(x) {
      return Object.prototype.toString.call(x) === '[object Array]';
    };
  }

  var isArray = _isArray;

  var len = 0;
  var vertxNext = void 0;
  var customSchedulerFn = void 0;

  var asap = function asap(callback, arg) {
    queue[len] = callback;
    queue[len + 1] = arg;
    len += 2;
    if (len === 2) {
      // If len is 2, that means that we need to schedule an async flush.
      // If additional callbacks are queued before the queue is flushed, they
      // will be processed by this flush that we are scheduling.
      if (customSchedulerFn) {
        customSchedulerFn(flush);
      } else {
        scheduleFlush();
      }
    }
  };

  function setScheduler(scheduleFn) {
    customSchedulerFn = scheduleFn;
  }

  function setAsap(asapFn) {
    asap = asapFn;
  }

  var browserWindow = typeof window !== 'undefined' ? window : undefined;
  var browserGlobal = browserWindow || {};
  var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
  var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

  // test for web worker but not in IE10
  var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

  // node
  function useNextTick() {
    // node version 0.10.x displays a deprecation warning when nextTick is used recursively
    // see https://github.com/cujojs/when/issues/410 for details
    return function () {
      return process.nextTick(flush);
    };
  }

  // vertx
  function useVertxTimer() {
    if (typeof vertxNext !== 'undefined') {
      return function () {
        vertxNext(flush);
      };
    }

    return useSetTimeout();
  }

  function useMutationObserver() {
    var iterations = 0;
    var observer = new BrowserMutationObserver(flush);
    var node = document.createTextNode('');
    observer.observe(node, { characterData: true });

    return function () {
      node.data = iterations = ++iterations % 2;
    };
  }

  // web worker
  function useMessageChannel() {
    var channel = new MessageChannel();
    channel.port1.onmessage = flush;
    return function () {
      return channel.port2.postMessage(0);
    };
  }

  function useSetTimeout() {
    // Store setTimeout reference so es6-promise will be unaffected by
    // other code modifying setTimeout (like sinon.useFakeTimers())
    var globalSetTimeout = setTimeout;
    return function () {
      return globalSetTimeout(flush, 1);
    };
  }

  var queue = new Array(1000);
  function flush() {
    for (var i = 0; i < len; i += 2) {
      var callback = queue[i];
      var arg = queue[i + 1];

      callback(arg);

      queue[i] = undefined;
      queue[i + 1] = undefined;
    }

    len = 0;
  }

  function attemptVertx() {
    try {
      var vertx = Function('return this')().require('vertx');
      vertxNext = vertx.runOnLoop || vertx.runOnContext;
      return useVertxTimer();
    } catch (e) {
      return useSetTimeout();
    }
  }

  var scheduleFlush = void 0;
  // Decide what async method to use to triggering processing of queued callbacks:
  if (isNode) {
    scheduleFlush = useNextTick();
  } else if (BrowserMutationObserver) {
    scheduleFlush = useMutationObserver();
  } else if (isWorker) {
    scheduleFlush = useMessageChannel();
  } else if (browserWindow === undefined && "function" === 'function') {
    scheduleFlush = attemptVertx();
  } else {
    scheduleFlush = useSetTimeout();
  }

  function then(onFulfillment, onRejection) {
    var parent = this;

    var child = new this.constructor(noop);

    if (child[PROMISE_ID] === undefined) {
      makePromise(child);
    }

    var _state = parent._state;

    if (_state) {
      var callback = arguments[_state - 1];
      asap(function () {
        return invokeCallback(_state, child, callback, parent._result);
      });
    } else {
      subscribe(parent, child, onFulfillment, onRejection);
    }

    return child;
  }

  /**
    `Promise.resolve` returns a promise that will become resolved with the
    passed `value`. It is shorthand for the following:
  
    ```javascript
    let promise = new Promise(function(resolve, reject){
      resolve(1);
    });
  
    promise.then(function(value){
      // value === 1
    });
    ```
  
    Instead of writing the above, your code now simply becomes the following:
  
    ```javascript
    let promise = Promise.resolve(1);
  
    promise.then(function(value){
      // value === 1
    });
    ```
  
    @method resolve
    @static
    @param {Any} value value that the returned promise will be resolved with
    Useful for tooling.
    @return {Promise} a promise that will become fulfilled with the given
    `value`
  */
  function resolve$1(object) {
    /*jshint validthis:true */
    var Constructor = this;

    if (object && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object.constructor === Constructor) {
      return object;
    }

    var promise = new Constructor(noop);
    resolve(promise, object);
    return promise;
  }

  var PROMISE_ID = Math.random().toString(36).substring(2);

  function noop() {}

  var PENDING = void 0;
  var FULFILLED = 1;
  var REJECTED = 2;

  var TRY_CATCH_ERROR = { error: null };

  function selfFulfillment() {
    return new TypeError("You cannot resolve a promise with itself");
  }

  function cannotReturnOwn() {
    return new TypeError('A promises callback cannot return that same promise.');
  }

  function getThen(promise) {
    try {
      return promise.then;
    } catch (error) {
      TRY_CATCH_ERROR.error = error;
      return TRY_CATCH_ERROR;
    }
  }

  function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
    try {
      then$$1.call(value, fulfillmentHandler, rejectionHandler);
    } catch (e) {
      return e;
    }
  }

  function handleForeignThenable(promise, thenable, then$$1) {
    asap(function (promise) {
      var sealed = false;
      var error = tryThen(then$$1, thenable, function (value) {
        if (sealed) {
          return;
        }
        sealed = true;
        if (thenable !== value) {
          resolve(promise, value);
        } else {
          fulfill(promise, value);
        }
      }, function (reason) {
        if (sealed) {
          return;
        }
        sealed = true;

        reject(promise, reason);
      }, 'Settle: ' + (promise._label || ' unknown promise'));

      if (!sealed && error) {
        sealed = true;
        reject(promise, error);
      }
    }, promise);
  }

  function handleOwnThenable(promise, thenable) {
    if (thenable._state === FULFILLED) {
      fulfill(promise, thenable._result);
    } else if (thenable._state === REJECTED) {
      reject(promise, thenable._result);
    } else {
      subscribe(thenable, undefined, function (value) {
        return resolve(promise, value);
      }, function (reason) {
        return reject(promise, reason);
      });
    }
  }

  function handleMaybeThenable(promise, maybeThenable, then$$1) {
    if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
      handleOwnThenable(promise, maybeThenable);
    } else {
      if (then$$1 === TRY_CATCH_ERROR) {
        reject(promise, TRY_CATCH_ERROR.error);
        TRY_CATCH_ERROR.error = null;
      } else if (then$$1 === undefined) {
        fulfill(promise, maybeThenable);
      } else if (isFunction(then$$1)) {
        handleForeignThenable(promise, maybeThenable, then$$1);
      } else {
        fulfill(promise, maybeThenable);
      }
    }
  }

  function resolve(promise, value) {
    if (promise === value) {
      reject(promise, selfFulfillment());
    } else if (objectOrFunction(value)) {
      handleMaybeThenable(promise, value, getThen(value));
    } else {
      fulfill(promise, value);
    }
  }

  function publishRejection(promise) {
    if (promise._onerror) {
      promise._onerror(promise._result);
    }

    publish(promise);
  }

  function fulfill(promise, value) {
    if (promise._state !== PENDING) {
      return;
    }

    promise._result = value;
    promise._state = FULFILLED;

    if (promise._subscribers.length !== 0) {
      asap(publish, promise);
    }
  }

  function reject(promise, reason) {
    if (promise._state !== PENDING) {
      return;
    }
    promise._state = REJECTED;
    promise._result = reason;

    asap(publishRejection, promise);
  }

  function subscribe(parent, child, onFulfillment, onRejection) {
    var _subscribers = parent._subscribers;
    var length = _subscribers.length;

    parent._onerror = null;

    _subscribers[length] = child;
    _subscribers[length + FULFILLED] = onFulfillment;
    _subscribers[length + REJECTED] = onRejection;

    if (length === 0 && parent._state) {
      asap(publish, parent);
    }
  }

  function publish(promise) {
    var subscribers = promise._subscribers;
    var settled = promise._state;

    if (subscribers.length === 0) {
      return;
    }

    var child = void 0,
        callback = void 0,
        detail = promise._result;

    for (var i = 0; i < subscribers.length; i += 3) {
      child = subscribers[i];
      callback = subscribers[i + settled];

      if (child) {
        invokeCallback(settled, child, callback, detail);
      } else {
        callback(detail);
      }
    }

    promise._subscribers.length = 0;
  }

  function tryCatch(callback, detail) {
    try {
      return callback(detail);
    } catch (e) {
      TRY_CATCH_ERROR.error = e;
      return TRY_CATCH_ERROR;
    }
  }

  function invokeCallback(settled, promise, callback, detail) {
    var hasCallback = isFunction(callback),
        value = void 0,
        error = void 0,
        succeeded = void 0,
        failed = void 0;

    if (hasCallback) {
      value = tryCatch(callback, detail);

      if (value === TRY_CATCH_ERROR) {
        failed = true;
        error = value.error;
        value.error = null;
      } else {
        succeeded = true;
      }

      if (promise === value) {
        reject(promise, cannotReturnOwn());
        return;
      }
    } else {
      value = detail;
      succeeded = true;
    }

    if (promise._state !== PENDING) {
      // noop
    } else if (hasCallback && succeeded) {
      resolve(promise, value);
    } else if (failed) {
      reject(promise, error);
    } else if (settled === FULFILLED) {
      fulfill(promise, value);
    } else if (settled === REJECTED) {
      reject(promise, value);
    }
  }

  function initializePromise(promise, resolver) {
    try {
      resolver(function resolvePromise(value) {
        resolve(promise, value);
      }, function rejectPromise(reason) {
        reject(promise, reason);
      });
    } catch (e) {
      reject(promise, e);
    }
  }

  var id = 0;
  function nextId() {
    return id++;
  }

  function makePromise(promise) {
    promise[PROMISE_ID] = id++;
    promise._state = undefined;
    promise._result = undefined;
    promise._subscribers = [];
  }

  function validationError() {
    return new Error('Array Methods must be provided an Array');
  }

  var Enumerator = function () {
    function Enumerator(Constructor, input) {
      this._instanceConstructor = Constructor;
      this.promise = new Constructor(noop);

      if (!this.promise[PROMISE_ID]) {
        makePromise(this.promise);
      }

      if (isArray(input)) {
        this.length = input.length;
        this._remaining = input.length;

        this._result = new Array(this.length);

        if (this.length === 0) {
          fulfill(this.promise, this._result);
        } else {
          this.length = this.length || 0;
          this._enumerate(input);
          if (this._remaining === 0) {
            fulfill(this.promise, this._result);
          }
        }
      } else {
        reject(this.promise, validationError());
      }
    }

    Enumerator.prototype._enumerate = function _enumerate(input) {
      for (var i = 0; this._state === PENDING && i < input.length; i++) {
        this._eachEntry(input[i], i);
      }
    };

    Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
      var c = this._instanceConstructor;
      var resolve$$1 = c.resolve;

      if (resolve$$1 === resolve$1) {
        var _then = getThen(entry);

        if (_then === then && entry._state !== PENDING) {
          this._settledAt(entry._state, i, entry._result);
        } else if (typeof _then !== 'function') {
          this._remaining--;
          this._result[i] = entry;
        } else if (c === Promise$1) {
          var promise = new c(noop);
          handleMaybeThenable(promise, entry, _then);
          this._willSettleAt(promise, i);
        } else {
          this._willSettleAt(new c(function (resolve$$1) {
            return resolve$$1(entry);
          }), i);
        }
      } else {
        this._willSettleAt(resolve$$1(entry), i);
      }
    };

    Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
      var promise = this.promise;

      if (promise._state === PENDING) {
        this._remaining--;

        if (state === REJECTED) {
          reject(promise, value);
        } else {
          this._result[i] = value;
        }
      }

      if (this._remaining === 0) {
        fulfill(promise, this._result);
      }
    };

    Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
      var enumerator = this;

      subscribe(promise, undefined, function (value) {
        return enumerator._settledAt(FULFILLED, i, value);
      }, function (reason) {
        return enumerator._settledAt(REJECTED, i, reason);
      });
    };

    return Enumerator;
  }();

  /**
    `Promise.all` accepts an array of promises, and returns a new promise which
    is fulfilled with an array of fulfillment values for the passed promises, or
    rejected with the reason of the first passed promise to be rejected. It casts all
    elements of the passed iterable to promises as it runs this algorithm.
  
    Example:
  
    ```javascript
    let promise1 = resolve(1);
    let promise2 = resolve(2);
    let promise3 = resolve(3);
    let promises = [ promise1, promise2, promise3 ];
  
    Promise.all(promises).then(function(array){
      // The array here would be [ 1, 2, 3 ];
    });
    ```
  
    If any of the `promises` given to `all` are rejected, the first promise
    that is rejected will be given as an argument to the returned promises's
    rejection handler. For example:
  
    Example:
  
    ```javascript
    let promise1 = resolve(1);
    let promise2 = reject(new Error("2"));
    let promise3 = reject(new Error("3"));
    let promises = [ promise1, promise2, promise3 ];
  
    Promise.all(promises).then(function(array){
      // Code here never runs because there are rejected promises!
    }, function(error) {
      // error.message === "2"
    });
    ```
  
    @method all
    @static
    @param {Array} entries array of promises
    @param {String} label optional string for labeling the promise.
    Useful for tooling.
    @return {Promise} promise that is fulfilled when all `promises` have been
    fulfilled, or rejected if any of them become rejected.
    @static
  */
  function all(entries) {
    return new Enumerator(this, entries).promise;
  }

  /**
    `Promise.race` returns a new promise which is settled in the same way as the
    first passed promise to settle.
  
    Example:
  
    ```javascript
    let promise1 = new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve('promise 1');
      }, 200);
    });
  
    let promise2 = new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve('promise 2');
      }, 100);
    });
  
    Promise.race([promise1, promise2]).then(function(result){
      // result === 'promise 2' because it was resolved before promise1
      // was resolved.
    });
    ```
  
    `Promise.race` is deterministic in that only the state of the first
    settled promise matters. For example, even if other promises given to the
    `promises` array argument are resolved, but the first settled promise has
    become rejected before the other promises became fulfilled, the returned
    promise will become rejected:
  
    ```javascript
    let promise1 = new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve('promise 1');
      }, 200);
    });
  
    let promise2 = new Promise(function(resolve, reject){
      setTimeout(function(){
        reject(new Error('promise 2'));
      }, 100);
    });
  
    Promise.race([promise1, promise2]).then(function(result){
      // Code here never runs
    }, function(reason){
      // reason.message === 'promise 2' because promise 2 became rejected before
      // promise 1 became fulfilled
    });
    ```
  
    An example real-world use case is implementing timeouts:
  
    ```javascript
    Promise.race([ajax('foo.json'), timeout(5000)])
    ```
  
    @method race
    @static
    @param {Array} promises array of promises to observe
    Useful for tooling.
    @return {Promise} a promise which settles in the same way as the first passed
    promise to settle.
  */
  function race(entries) {
    /*jshint validthis:true */
    var Constructor = this;

    if (!isArray(entries)) {
      return new Constructor(function (_, reject) {
        return reject(new TypeError('You must pass an array to race.'));
      });
    } else {
      return new Constructor(function (resolve, reject) {
        var length = entries.length;
        for (var i = 0; i < length; i++) {
          Constructor.resolve(entries[i]).then(resolve, reject);
        }
      });
    }
  }

  /**
    `Promise.reject` returns a promise rejected with the passed `reason`.
    It is shorthand for the following:
  
    ```javascript
    let promise = new Promise(function(resolve, reject){
      reject(new Error('WHOOPS'));
    });
  
    promise.then(function(value){
      // Code here doesn't run because the promise is rejected!
    }, function(reason){
      // reason.message === 'WHOOPS'
    });
    ```
  
    Instead of writing the above, your code now simply becomes the following:
  
    ```javascript
    let promise = Promise.reject(new Error('WHOOPS'));
  
    promise.then(function(value){
      // Code here doesn't run because the promise is rejected!
    }, function(reason){
      // reason.message === 'WHOOPS'
    });
    ```
  
    @method reject
    @static
    @param {Any} reason value that the returned promise will be rejected with.
    Useful for tooling.
    @return {Promise} a promise rejected with the given `reason`.
  */
  function reject$1(reason) {
    /*jshint validthis:true */
    var Constructor = this;
    var promise = new Constructor(noop);
    reject(promise, reason);
    return promise;
  }

  function needsResolver() {
    throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
  }

  function needsNew() {
    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
  }

  /**
    Promise objects represent the eventual result of an asynchronous operation. The
    primary way of interacting with a promise is through its `then` method, which
    registers callbacks to receive either a promise's eventual value or the reason
    why the promise cannot be fulfilled.
  
    Terminology
    -----------
  
    - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
    - `thenable` is an object or function that defines a `then` method.
    - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
    - `exception` is a value that is thrown using the throw statement.
    - `reason` is a value that indicates why a promise was rejected.
    - `settled` the final resting state of a promise, fulfilled or rejected.
  
    A promise can be in one of three states: pending, fulfilled, or rejected.
  
    Promises that are fulfilled have a fulfillment value and are in the fulfilled
    state.  Promises that are rejected have a rejection reason and are in the
    rejected state.  A fulfillment value is never a thenable.
  
    Promises can also be said to *resolve* a value.  If this value is also a
    promise, then the original promise's settled state will match the value's
    settled state.  So a promise that *resolves* a promise that rejects will
    itself reject, and a promise that *resolves* a promise that fulfills will
    itself fulfill.
  
  
    Basic Usage:
    ------------
  
    ```js
    let promise = new Promise(function(resolve, reject) {
      // on success
      resolve(value);
  
      // on failure
      reject(reason);
    });
  
    promise.then(function(value) {
      // on fulfillment
    }, function(reason) {
      // on rejection
    });
    ```
  
    Advanced Usage:
    ---------------
  
    Promises shine when abstracting away asynchronous interactions such as
    `XMLHttpRequest`s.
  
    ```js
    function getJSON(url) {
      return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest();
  
        xhr.open('GET', url);
        xhr.onreadystatechange = handler;
        xhr.responseType = 'json';
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.send();
  
        function handler() {
          if (this.readyState === this.DONE) {
            if (this.status === 200) {
              resolve(this.response);
            } else {
              reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
            }
          }
        };
      });
    }
  
    getJSON('/posts.json').then(function(json) {
      // on fulfillment
    }, function(reason) {
      // on rejection
    });
    ```
  
    Unlike callbacks, promises are great composable primitives.
  
    ```js
    Promise.all([
      getJSON('/posts'),
      getJSON('/comments')
    ]).then(function(values){
      values[0] // => postsJSON
      values[1] // => commentsJSON
  
      return values;
    });
    ```
  
    @class Promise
    @param {Function} resolver
    Useful for tooling.
    @constructor
  */

  var Promise$1 = function () {
    function Promise(resolver) {
      this[PROMISE_ID] = nextId();
      this._result = this._state = undefined;
      this._subscribers = [];

      if (noop !== resolver) {
        typeof resolver !== 'function' && needsResolver();
        this instanceof Promise ? initializePromise(this, resolver) : needsNew();
      }
    }

    /**
    The primary way of interacting with a promise is through its `then` method,
    which registers callbacks to receive either a promise's eventual value or the
    reason why the promise cannot be fulfilled.
     ```js
    findUser().then(function(user){
      // user is available
    }, function(reason){
      // user is unavailable, and you are given the reason why
    });
    ```
     Chaining
    --------
     The return value of `then` is itself a promise.  This second, 'downstream'
    promise is resolved with the return value of the first promise's fulfillment
    or rejection handler, or rejected if the handler throws an exception.
     ```js
    findUser().then(function (user) {
      return user.name;
    }, function (reason) {
      return 'default name';
    }).then(function (userName) {
      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
      // will be `'default name'`
    });
     findUser().then(function (user) {
      throw new Error('Found user, but still unhappy');
    }, function (reason) {
      throw new Error('`findUser` rejected and we're unhappy');
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
    });
    ```
    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
     ```js
    findUser().then(function (user) {
      throw new PedagogicalException('Upstream error');
    }).then(function (value) {
      // never reached
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // The `PedgagocialException` is propagated all the way down to here
    });
    ```
     Assimilation
    ------------
     Sometimes the value you want to propagate to a downstream promise can only be
    retrieved asynchronously. This can be achieved by returning a promise in the
    fulfillment or rejection handler. The downstream promise will then be pending
    until the returned promise is settled. This is called *assimilation*.
     ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // The user's comments are now available
    });
    ```
     If the assimliated promise rejects, then the downstream promise will also reject.
     ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // If `findCommentsByAuthor` fulfills, we'll have the value here
    }, function (reason) {
      // If `findCommentsByAuthor` rejects, we'll have the reason here
    });
    ```
     Simple Example
    --------------
     Synchronous Example
     ```javascript
    let result;
     try {
      result = findResult();
      // success
    } catch(reason) {
      // failure
    }
    ```
     Errback Example
     ```js
    findResult(function(result, err){
      if (err) {
        // failure
      } else {
        // success
      }
    });
    ```
     Promise Example;
     ```javascript
    findResult().then(function(result){
      // success
    }, function(reason){
      // failure
    });
    ```
     Advanced Example
    --------------
     Synchronous Example
     ```javascript
    let author, books;
     try {
      author = findAuthor();
      books  = findBooksByAuthor(author);
      // success
    } catch(reason) {
      // failure
    }
    ```
     Errback Example
     ```js
     function foundBooks(books) {
     }
     function failure(reason) {
     }
     findAuthor(function(author, err){
      if (err) {
        failure(err);
        // failure
      } else {
        try {
          findBoooksByAuthor(author, function(books, err) {
            if (err) {
              failure(err);
            } else {
              try {
                foundBooks(books);
              } catch(reason) {
                failure(reason);
              }
            }
          });
        } catch(error) {
          failure(err);
        }
        // success
      }
    });
    ```
     Promise Example;
     ```javascript
    findAuthor().
      then(findBooksByAuthor).
      then(function(books){
        // found books
    }).catch(function(reason){
      // something went wrong
    });
    ```
     @method then
    @param {Function} onFulfilled
    @param {Function} onRejected
    Useful for tooling.
    @return {Promise}
    */

    /**
    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
    as the catch block of a try/catch statement.
    ```js
    function findAuthor(){
    throw new Error('couldn't find that author');
    }
    // synchronous
    try {
    findAuthor();
    } catch(reason) {
    // something went wrong
    }
    // async with promises
    findAuthor().catch(function(reason){
    // something went wrong
    });
    ```
    @method catch
    @param {Function} onRejection
    Useful for tooling.
    @return {Promise}
    */

    Promise.prototype.catch = function _catch(onRejection) {
      return this.then(null, onRejection);
    };

    /**
      `finally` will be invoked regardless of the promise's fate just as native
      try/catch/finally behaves
    
      Synchronous example:
    
      ```js
      findAuthor() {
        if (Math.random() > 0.5) {
          throw new Error();
        }
        return new Author();
      }
    
      try {
        return findAuthor(); // succeed or fail
      } catch(error) {
        return findOtherAuther();
      } finally {
        // always runs
        // doesn't affect the return value
      }
      ```
    
      Asynchronous example:
    
      ```js
      findAuthor().catch(function(reason){
        return findOtherAuther();
      }).finally(function(){
        // author was either found, or not
      });
      ```
    
      @method finally
      @param {Function} callback
      @return {Promise}
    */

    Promise.prototype.finally = function _finally(callback) {
      var promise = this;
      var constructor = promise.constructor;

      return promise.then(function (value) {
        return constructor.resolve(callback()).then(function () {
          return value;
        });
      }, function (reason) {
        return constructor.resolve(callback()).then(function () {
          throw reason;
        });
      });
    };

    return Promise;
  }();

  Promise$1.prototype.then = then;
  Promise$1.all = all;
  Promise$1.race = race;
  Promise$1.resolve = resolve$1;
  Promise$1.reject = reject$1;
  Promise$1._setScheduler = setScheduler;
  Promise$1._setAsap = setAsap;
  Promise$1._asap = asap;

  /*global self*/
  function polyfill() {
    var local = void 0;

    if (typeof global !== 'undefined') {
      local = global;
    } else if (typeof self !== 'undefined') {
      local = self;
    } else {
      try {
        local = Function('return this')();
      } catch (e) {
        throw new Error('polyfill failed because global object is unavailable in this environment');
      }
    }

    var P = local.Promise;

    if (P) {
      var promiseToString = null;
      try {
        promiseToString = Object.prototype.toString.call(P.resolve());
      } catch (e) {
        // silently ignored
      }

      if (promiseToString === '[object Promise]' && !P.cast) {
        return;
      }
    }

    local.Promise = Promise$1;
  }

  // Strange compat..
  Promise$1.polyfill = polyfill;
  Promise$1.Promise = Promise$1;

  return Promise$1;
});

//# sourceMappingURL=es6-promise.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10), __webpack_require__(31)))

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(33)() ? Symbol : __webpack_require__(34);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var validTypes = { object: true, symbol: true };

module.exports = function () {
	var symbol;
	if (typeof Symbol !== 'function') return false;
	symbol = Symbol('test symbol');
	try {
		String(symbol);
	} catch (e) {
		return false;
	}

	// Return 'true' also for polyfills
	if (!validTypes[_typeof(Symbol.iterator)]) return false;
	if (!validTypes[_typeof(Symbol.toPrimitive)]) return false;
	if (!validTypes[_typeof(Symbol.toStringTag)]) return false;

	return true;
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ES2015 Symbol polyfill for environments that do not (or partially) support it



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var d = __webpack_require__(35),
    validateSymbol = __webpack_require__(49),
    create = Object.create,
    defineProperties = Object.defineProperties,
    defineProperty = Object.defineProperty,
    objPrototype = Object.prototype,
    NativeSymbol,
    SymbolPolyfill,
    HiddenSymbol,
    globalSymbols = create(null),
    isNativeSafe;

if (typeof Symbol === 'function') {
	NativeSymbol = Symbol;
	try {
		String(NativeSymbol());
		isNativeSafe = true;
	} catch (ignore) {}
}

var generateName = function () {
	var created = create(null);
	return function (desc) {
		var postfix = 0,
		    name,
		    ie11BugWorkaround;
		while (created[desc + (postfix || '')]) {
			++postfix;
		}desc += postfix || '';
		created[desc] = true;
		name = '@@' + desc;
		defineProperty(objPrototype, name, d.gs(null, function (value) {
			// For IE11 issue see:
			// https://connect.microsoft.com/IE/feedbackdetail/view/1928508/
			//    ie11-broken-getters-on-dom-objects
			// https://github.com/medikoo/es6-symbol/issues/12
			if (ie11BugWorkaround) return;
			ie11BugWorkaround = true;
			defineProperty(this, name, d(value));
			ie11BugWorkaround = false;
		}));
		return name;
	};
}();

// Internal constructor (not one exposed) for creating Symbol instances.
// This one is used to ensure that `someSymbol instanceof Symbol` always return false
HiddenSymbol = function _Symbol(description) {
	if (this instanceof HiddenSymbol) throw new TypeError('Symbol is not a constructor');
	return SymbolPolyfill(description);
};

// Exposed `Symbol` constructor
// (returns instances of HiddenSymbol)
module.exports = SymbolPolyfill = function _Symbol2(description) {
	var symbol;
	if (this instanceof _Symbol2) throw new TypeError('Symbol is not a constructor');
	if (isNativeSafe) return NativeSymbol(description);
	symbol = create(HiddenSymbol.prototype);
	description = description === undefined ? '' : String(description);
	return defineProperties(symbol, {
		__description__: d('', description),
		__name__: d('', generateName(description))
	});
};
defineProperties(SymbolPolyfill, {
	for: d(function (key) {
		if (globalSymbols[key]) return globalSymbols[key];
		return globalSymbols[key] = SymbolPolyfill(String(key));
	}),
	keyFor: d(function (s) {
		var key;
		validateSymbol(s);
		for (key in globalSymbols) {
			if (globalSymbols[key] === s) return key;
		}
	}),

	// To ensure proper interoperability with other native functions (e.g. Array.from)
	// fallback to eventual native implementation of given symbol
	hasInstance: d('', NativeSymbol && NativeSymbol.hasInstance || SymbolPolyfill('hasInstance')),
	isConcatSpreadable: d('', NativeSymbol && NativeSymbol.isConcatSpreadable || SymbolPolyfill('isConcatSpreadable')),
	iterator: d('', NativeSymbol && NativeSymbol.iterator || SymbolPolyfill('iterator')),
	match: d('', NativeSymbol && NativeSymbol.match || SymbolPolyfill('match')),
	replace: d('', NativeSymbol && NativeSymbol.replace || SymbolPolyfill('replace')),
	search: d('', NativeSymbol && NativeSymbol.search || SymbolPolyfill('search')),
	species: d('', NativeSymbol && NativeSymbol.species || SymbolPolyfill('species')),
	split: d('', NativeSymbol && NativeSymbol.split || SymbolPolyfill('split')),
	toPrimitive: d('', NativeSymbol && NativeSymbol.toPrimitive || SymbolPolyfill('toPrimitive')),
	toStringTag: d('', NativeSymbol && NativeSymbol.toStringTag || SymbolPolyfill('toStringTag')),
	unscopables: d('', NativeSymbol && NativeSymbol.unscopables || SymbolPolyfill('unscopables'))
});

// Internal tweaks for real symbol producer
defineProperties(HiddenSymbol.prototype, {
	constructor: d(SymbolPolyfill),
	toString: d('', function () {
		return this.__name__;
	})
});

// Proper implementation of methods exposed on Symbol.prototype
// They won't be accessible on produced symbol instances as they derive from HiddenSymbol.prototype
defineProperties(SymbolPolyfill.prototype, {
	toString: d(function () {
		return 'Symbol (' + validateSymbol(this).__description__ + ')';
	}),
	valueOf: d(function () {
		return validateSymbol(this);
	})
});
defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toPrimitive, d('', function () {
	var symbol = validateSymbol(this);
	if ((typeof symbol === 'undefined' ? 'undefined' : _typeof(symbol)) === 'symbol') return symbol;
	return symbol.toString();
}));
defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toStringTag, d('c', 'Symbol'));

// Proper implementaton of toPrimitive and toStringTag for returned symbol instances
defineProperty(HiddenSymbol.prototype, SymbolPolyfill.toStringTag, d('c', SymbolPolyfill.prototype[SymbolPolyfill.toStringTag]));

// Note: It's important to define `toPrimitive` as last one, as some implementations
// implement `toPrimitive` natively without implementing `toStringTag` (or other specified symbols)
// And that may invoke error in definition flow:
// See: https://github.com/medikoo/es6-symbol/issues/13#issuecomment-164146149
defineProperty(HiddenSymbol.prototype, SymbolPolyfill.toPrimitive, d('c', SymbolPolyfill.prototype[SymbolPolyfill.toPrimitive]));

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(36),
    normalizeOpts = __webpack_require__(44),
    isCallable = __webpack_require__(45),
    contains = __webpack_require__(46),
    d;

d = module.exports = function (dscr, value /*, options*/) {
	var c, e, w, options, desc;
	if (arguments.length < 2 || typeof dscr !== 'string') {
		options = value;
		value = dscr;
		dscr = null;
	} else {
		options = arguments[2];
	}
	if (dscr == null) {
		c = w = true;
		e = false;
	} else {
		c = contains.call(dscr, 'c');
		e = contains.call(dscr, 'e');
		w = contains.call(dscr, 'w');
	}

	desc = { value: value, configurable: c, enumerable: e, writable: w };
	return !options ? desc : assign(normalizeOpts(options), desc);
};

d.gs = function (dscr, get, set /*, options*/) {
	var c, e, options, desc;
	if (typeof dscr !== 'string') {
		options = set;
		set = get;
		get = dscr;
		dscr = null;
	} else {
		options = arguments[3];
	}
	if (get == null) {
		get = undefined;
	} else if (!isCallable(get)) {
		options = get;
		get = set = undefined;
	} else if (set == null) {
		set = undefined;
	} else if (!isCallable(set)) {
		options = set;
		set = undefined;
	}
	if (dscr == null) {
		c = true;
		e = false;
	} else {
		c = contains.call(dscr, 'c');
		e = contains.call(dscr, 'e');
	}

	desc = { get: get, set: set, configurable: c, enumerable: e };
	return !options ? desc : assign(normalizeOpts(options), desc);
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(37)() ? Object.assign : __webpack_require__(38);

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var assign = Object.assign,
	    obj;
	if (typeof assign !== "function") return false;
	obj = { foo: "raz" };
	assign(obj, { bar: "dwa" }, { trzy: "trzy" });
	return obj.foo + obj.bar + obj.trzy === "razdwatrzy";
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(39),
    value = __webpack_require__(43),
    max = Math.max;

module.exports = function (dest, src /*, …srcn*/) {
	var error,
	    i,
	    length = max(arguments.length, 2),
	    assign;
	dest = Object(value(dest));
	assign = function assign(key) {
		try {
			dest[key] = src[key];
		} catch (e) {
			if (!error) error = e;
		}
	};
	for (i = 1; i < length; ++i) {
		src = arguments[i];
		keys(src).forEach(assign);
	}
	if (error !== undefined) throw error;
	return dest;
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(40)() ? Object.keys : __webpack_require__(41);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	try {
		Object.keys("primitive");
		return true;
	} catch (e) {
		return false;
	}
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(7);

var keys = Object.keys;

module.exports = function (object) {
	return keys(isValue(object) ? Object(object) : object);
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// eslint-disable-next-line no-empty-function

module.exports = function () {};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(7);

module.exports = function (value) {
	if (!isValue(value)) throw new TypeError("Cannot use null or undefined");
	return value;
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(7);

var forEach = Array.prototype.forEach,
    create = Object.create;

var process = function process(src, obj) {
	var key;
	for (key in src) {
		obj[key] = src[key];
	}
};

// eslint-disable-next-line no-unused-vars
module.exports = function (opts1 /*, …options*/) {
	var result = create(null);
	forEach.call(arguments, function (options) {
		if (!isValue(options)) return;
		process(Object(options), result);
	});
	return result;
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Deprecated



module.exports = function (obj) {
  return typeof obj === "function";
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(47)() ? String.prototype.contains : __webpack_require__(48);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var str = "razdwatrzy";

module.exports = function () {
	if (typeof str.contains !== "function") return false;
	return str.contains("dwa") === true && str.contains("foo") === false;
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var indexOf = String.prototype.indexOf;

module.exports = function (searchString /*, position*/) {
	return indexOf.call(this, searchString, arguments[1]) > -1;
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isSymbol = __webpack_require__(50);

module.exports = function (value) {
	if (!isSymbol(value)) throw new TypeError(value + " is not a symbol");
	return value;
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (x) {
	if (!x) return false;
	if ((typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'symbol') return true;
	if (!x.constructor) return false;
	if (x.constructor.name !== 'Symbol') return false;
	return x[x.constructor.toStringTag] === 'Symbol';
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _offeringModule = __webpack_require__(8);

var _offeringModule2 = _interopRequireDefault(_offeringModule);

var _schedule = __webpack_require__(52);

var _schedule2 = _interopRequireDefault(_schedule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Default interval for polling live events
 * @type {number}
 * @memberof module:eventsModule
 */
var DEFAULT_POLLING_INTERVAL = 30000;

/*
 * Starts polling given live event.
 * @param {number} eventId Event identifier
 * @param {function(string, ...args)} publishFunc Used for publishing event updates
 * @memberof module:eventsModule
 */
var pollLiveEvent = function pollLiveEvent(eventId, publishFunc) {
  var event = 'LIVE:EVENT:' + eventId;

  _schedule2.default.periodically(event, function () {
    return _offeringModule2.default.getLiveEvent(eventId).catch(function (error) {
      publishFunc('LIVE:EVENT:' + eventId + ':REMOVED');
      _schedule2.default.stop(event);
      throw error;
    });
  }, publishFunc.bind(null, event), { interval: this.pollingInterval, checkEquality: true });
};

/*
 * Starts pooling given live event statistics.
 * @param {number} eventId Event identifier
 * @param {function(string, ...args)} publishFunc Used for publishing event statistics updates
 * @memberof module:eventsModule
 */
var pollLiveEventData = function pollLiveEventData(eventId, publishFunc) {
  var event = 'LIVE:EVENTDATA:' + eventId;

  _schedule2.default.periodically(event, function () {
    return _offeringModule2.default.getLiveEventData(eventId).catch(function (error) {
      publishFunc('LIVE:EVENTDATA:' + eventId + ':REMOVED');
      _schedule2.default.stop(event);
      throw error;
    });
  }, publishFunc.bind(null, event), { interval: this.pollingInterval, checkEquality: true });
};

/*
 * Starts polling live events list.
 * @param {function(string, ...args)} publishFunc Used for publishing live event list updates
 * @memberof module:eventsModule
 */
var pollLiveEvents = function pollLiveEvents(publishFunc) {
  var event = 'LIVE:EVENTS';

  _schedule2.default.periodically(event, function () {
    return _offeringModule2.default.getLiveEvents();
  }, publishFunc.bind(null, event), {
    interval: this.pollingInterval,
    checkEquality: false // there are timers inside each event so we are almost sure that it will differ than previous request
  });
};

/*
 * Starts polling when event becomes live event.
 * @param {number} eventId Event identifier
 * @param {function(string, ...args)} publishFunc Used for publishing live event start
 * @memberof module:eventsModule
 */
var pollLiveEventStart = function pollLiveEventStart(eventId, publishFunc) {
  var event = 'LIVE:EVENT:' + eventId + ':ADDED';

  _schedule2.default.periodically(event, function () {
    return _offeringModule2.default.getLiveEvent(eventId).then(function (result) {
      // became live event, no need for further checks
      _schedule2.default.stop(event);
      return result;
    });
  }, publishFunc.bind(null, event), {
    interval: this.pollingInterval,
    checkEquality: false // no need, it will have sth to compare only once, when event appears
  });
};

exports.default = {
  /*
   * Current polling interval
   * @type number
   */
  pollingInterval: DEFAULT_POLLING_INTERVAL,

  /*
   * Starts internal polling services on given event (once it's supported).
   * @param {string} event Event name
   * @param {function(string, ...args)} publishFunc Used for publishing events
   */
  subscribe: function subscribe(event, publishFunc) {
    var matches = void 0;

    if (matches = event.match(/^LIVE:EVENT:([0-9]+)$/)) {
      pollLiveEvent.call(this, matches[1], publishFunc);
    } else if (matches = event.match(/^LIVE:EVENTDATA:([0-9]+)$/)) {
      pollLiveEventData.call(this, matches[1], publishFunc);
    } else if (event === 'LIVE:EVENTS') {
      pollLiveEvents.call(this, publishFunc);
    } else if (matches = event.match(/^LIVE:EVENT:([0-9]+):ADDED$/)) {
      pollLiveEventStart.call(this, matches[1], publishFunc);
    }
  },

  /*
   * Stops polling on given event (once it's supported).
   * @param {string} event Event name
   */
  unsubscribe: function unsubscribe(event) {
    if (/^LIVE:EVENT:[0-9]+$/.test(event)) {
      _schedule2.default.stop(event);
    } else if (/^LIVE:EVENTDATA:[0-9]+$/.test(event)) {
      _schedule2.default.stop(event);
    } else if (event === 'LIVE:EVENTS') {
      _schedule2.default.stop(event);
    } else if (/^LIVE:EVENT:([0-9]+):ADDED$/.test(event)) {
      _schedule2.default.stop(event);
    }
  }
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utilModule = __webpack_require__(6);

var _utilModule2 = _interopRequireDefault(_utilModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Utility for running tasks periodically with equality check.
 * @memberof module:eventsModule
 */
var Schedule = {
  /*
   * Currently running tasks map
   * @type {object.<string, {interval: number, lastResult: object|null}>}
   */
  tasks: {},

  /*
   * Runs given task function periodically.
   * @param {string} key Unique task key
   * @param {function():Promise} taskFunc Task function
   * @param {function(mixed)} resultHandler Called with task result
   * @param {number} interval Task interval (in milliseconds)
   * @param {boolean} checkEquality Compare current and last result, don't call resultHandler if both are equal
   */
  periodically: function periodically(key, taskFunc, resultHandler, _ref) {
    var _this = this;

    var interval = _ref.interval,
        checkEquality = _ref.checkEquality;

    if (this.tasks.hasOwnProperty(key)) {
      return;
    }

    this.tasks[key] = {
      /**
       * Task runner interval
       */
      interval: setInterval(function () {
        var task = _this.tasks[key];

        taskFunc().then(function (result) {
          if (!(checkEquality && _utilModule2.default.equals(task.lastResult, result))) {
            resultHandler(result);
          }

          if (checkEquality) {
            // result needs to be cloned as it could be modified in further processing
            task.lastResult = _utilModule2.default.clone(result);
          }
        }).catch(function (error) {
          return console.error(error);
        });
      }, interval),

      /**
       * Last result pointer for equality check
       */
      lastResult: null
    };
  },


  /*
   * Stops given task.
   * @param {string} key Task key
   */
  stop: function stop(key) {
    if (!this.tasks.hasOwnProperty(key)) {
      return;
    }

    clearInterval(this.tasks[key].interval);
    delete this.tasks[key];
  }
};

exports.default = Schedule;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  // version of widgets.css to use
  // https://c3-static.kambi.com/sb-mobileclient/widget-api/{widgetCssVersion}/resources/css/kambi/kambi/widgets.css
  widgetCssVersion: '1.0.0.58'
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// this is a mock widget api that is used when opening the widget standalone

exports.default = {
  requestSetup: function requestSetup() {},
  request: function request() {},
  set: function set() {},
  remove: function remove() {},
  createUrl: function createUrl() {},
  navigateClient: function navigateClient() {},
  requestOddsAsAmerican: function requestOddsAsAmerican(odds, cb) {
    cb(odds);
  },
  requestOddsAsFractional: function requestOddsAsFractional(odds, cb) {
    cb(odds);
  },

  BETSLIP_OUTCOMES_ARGS: {
    UPDATE_REPLACE: 'replace',
    UPDATE_APPEND: 'append',
    TYPE_SINGLE: 'single',
    TYPE_COMBINATION: 'combination',
    TYPE_SYSTEM: 'system',
    TYPE_PATENT: 'patent',
    TYPE_TRIXIE: 'trixie',
    TYPE_YANKEE: 'yankee',
    TYPE_CANADIAN: 'canadian',
    TYPE_HEINZ: 'heinz',
    TYPE_SUPERHEINZ: 'superheinz'
  },
  PLACE_BET_STATE_VALUE: {
    PLACING: 'placing',
    SUCCEEDED: 'succeeded',
    FAILED: 'failed'
  },
  BET_TYPE: {
    SINGLE: 'RCT_SINGLE',
    COMBINATION: 'RCT_COMBINATION',
    SYSTEM: 'RCT_SYSTEM'
  },
  BETSLIP_STAKE_UPDATED_TYPES: {
    STAKE_UPDATE_TYPE_SINGLE: 'Single',
    STAKE_UPDATE_TYPE_COMBINATION: 'Combination',
    STAKE_UPDATE_TYPE_SYSTEM: 'System'
  },
  EVENT_INFO_TYPES: {
    BASIC: 'BASIC',
    BET_OFFERS: 'BET_OFFERS',
    SCORE: 'SCORE'
  },
  EVENT_INFO_CONTEXT: {
    LIVE: 'LIVE',
    PRE_MATCH: 'PRE-MATCH'
  },
  FETCH_COUPON_STATUS: {
    PENDING: 'SCF_PENDING',
    SETTLED: 'SCF_SETTLED',
    WON: 'SCF_WON',
    LOST: 'SCF_LOST',
    VOID: 'SCF_VOID',
    CASH_IN: 'SCF_CASHIN',
    ALL: ''
  },
  IFRAME_READY: 'iframeReady',
  REMOVE: 'remove',
  NAVIGATE: 'navigate',
  BET_HISTORY: 'BetHistory',
  BETSLIP_OUTCOMES_REMOVE: 'BetslipOutcomesRemove',
  BETSLIP_OUTCOMES: 'BetslipOutcomes',
  BETSLIP_MAXIMIZED: 'BetslipMaximize',
  BETSLIP_MAXIMIZED_CHANGE: 'BetslipMaximizedChange',
  BETSLIP_STAKE_UPDATED: 'BetslipStakeUpdated',
  BETSLIP_UPDATE_STAKE: 'BetslipUpdateStake',
  EVENT_INFO: 'EventInfo',
  EVENT_INFO_UNSUBSCRIBE: 'EventInfoUnSubscribe',
  PLACE_BET: 'BetslipPlaceBet',
  CLIENT_ODDS_FORMAT: 'ClientOddsFormat',
  PLACE_BET_STATE: 'PlaceBetState',
  PAGE_INFO: 'PageInfo',
  USER_LOGGED_IN: 'UserLoggedIn',
  CLIENT_CONFIG: 'ClientConfig',
  VERSIONS: 'Versions',
  ODDS_FRACTIONAL: 'OddsAsFractional',
  ODDS_AMERICAN: 'OddsAsAmerican',
  LIBS: 'Libs',
  WIDGET_ARGS: 'Args',
  WIDGET_HEIGHT: 'Height',
  WIDGET_ENABLE_TRANSITION: 'EnableTransition',
  WIDGET_DISABLE_TRANSITION: 'DisableTransition',
  WIDGET_SETUP: 'Setup',
  LOGIN: 'Login',
  LOGOUT: 'Logout',
  CLIENT_HIDE: 'ClientHide',
  CLIENT_SHOW: 'ClientShow',
  TRACK_EXTERNAL_INTERACTION: 'TrackExternalInteraction',
  BETSLIP_HIDE: 'BetslipHide',
  BETSLIP_SHOW: 'BetslipShow'
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(56);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../wc2018-tournament-overview-widget/node_modules/css-loader/index.js??ref--0-oneOf-0-1!../../../wc2018-tournament-overview-widget/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-0-2!../../../wc2018-tournament-overview-widget/node_modules/sass-loader/lib/loader.js!./core.scss", function() {
		var newContent = require("!!../../../wc2018-tournament-overview-widget/node_modules/css-loader/index.js??ref--0-oneOf-0-1!../../../wc2018-tournament-overview-widget/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-0-2!../../../wc2018-tournament-overview-widget/node_modules/sass-loader/lib/loader.js!./core.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "._3eZRVDmNlUoSh_C5vEJljt {\n  position: relative; }\n  ._3eZRVDmNlUoSh_C5vEJljt * {\n    font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 12px;\n    line-height: 24px;\n    -webkit-tap-highlight-color: transparent;\n    -webkit-text-size-adjust: 100%;\n    -webkit-touch-callout: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -o-user-select: none;\n    -webkit-user-select: none; }\n  ._3eZRVDmNlUoSh_C5vEJljt *,\n  ._3eZRVDmNlUoSh_C5vEJljt *::after,\n  ._3eZRVDmNlUoSh_C5vEJljt *::before {\n    box-sizing: border-box; }\n  ._3eZRVDmNlUoSh_C5vEJljt a {\n    text-decoration: none; }\n  ._3eZRVDmNlUoSh_C5vEJljt strong {\n    font-weight: bold; }\n  ._2TLlZdgTdg97QTHzahICNW {\n    box-sizing: border-box;\n    height: 0;\n    overflow-y: hidden; }\n  ._3eZRVDmNlUoSh_C5vEJljt .FiMUwvPNPHybsg0uVekkU {\n    -webkit-transform: none !important;\n            transform: none !important; }\n  ._3eZRVDmNlUoSh_C5vEJljt input:matches([type='button'], [type='submit'], [type='reset']),\n  ._3eZRVDmNlUoSh_C5vEJljt input[type='file']::-webkit-file-upload-button,\n  ._3eZRVDmNlUoSh_C5vEJljt button {\n    margin: initial; }\n\nhtml.oI_i9Keu1eDRDpmjCrrZ7 {\n  min-width: 100%;\n  width: 1px;\n  margin: 0;\n  padding: 0;\n  width: 100%; }\n  html.oI_i9Keu1eDRDpmjCrrZ7 body {\n    margin: 0;\n    padding: 0;\n    width: 100%; }\n", ""]);

// exports
exports.locals = {
	"rootElement": "_3eZRVDmNlUoSh_C5vEJljt",
	"rootElementEmbedded": "_2TLlZdgTdg97QTHzahICNW",
	"KambiWidget-outcome__odds-wrapper": "FiMUwvPNPHybsg0uVekkU",
	"notEmbedded": "oI_i9Keu1eDRDpmjCrrZ7"
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _kambiWidgetComponents = __webpack_require__(9);

var _mobile = __webpack_require__(20);

var _mobile2 = _interopRequireDefault(_mobile);

var _kambi = __webpack_require__(16);

var _kambi2 = _interopRequireDefault(_kambi);

var _TournamentOverviewWidget = __webpack_require__(95);

var _TournamentOverviewWidget2 = _interopRequireDefault(_TournamentOverviewWidget);

var _kambiWidgetCoreLibrary = __webpack_require__(4);

var _Event = __webpack_require__(97);

var _Event2 = _interopRequireDefault(_Event);

var _ArrowButton = __webpack_require__(100);

var _ArrowButton2 = _interopRequireDefault(_ArrowButton);

var _ItemContainer = __webpack_require__(103);

var _ItemContainer2 = _interopRequireDefault(_ItemContainer);

var _TournamentLogo = __webpack_require__(106);

var _TournamentLogo2 = _interopRequireDefault(_TournamentLogo);

var _List = __webpack_require__(109);

var _List2 = _interopRequireDefault(_List);

var _ListItem = __webpack_require__(112);

var _ListItem2 = _interopRequireDefault(_ListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * How long (in milliseconds) to wait before scrolling league logo out
 * @type {number}
 */
var MOBILE_INITIAL_SCROLL_DELAY = 2000;
var WORLD_CUP_2018_ID = 2000075007;
var WIDGET_HEIGHT_DESKTOP = 370;
var WIDGET_HEIGHT_MOBILE = 150;
var DEFAULT_BACKGROUND = 'https://d1fqgomuxh4f5p.cloudfront.net/tournamentdata/worldcup2018/overview-bw-bg-desktop.jpg';

var t = _kambiWidgetCoreLibrary.translationModule.getTranslation.bind(_kambiWidgetCoreLibrary.translationModule);

var TournamentOverviewWidget = function (_Component) {
  _inherits(TournamentOverviewWidget, _Component);

  /**
   * Constructs.
   * @param {object} props Component properties
   */
  function TournamentOverviewWidget(props) {
    _classCallCheck(this, TournamentOverviewWidget);

    var _this = _possibleConstructorReturn(this, (TournamentOverviewWidget.__proto__ || Object.getPrototypeOf(TournamentOverviewWidget)).call(this, props));

    _this.state = {
      events: props.events,
      selected: 0,
      mobile: (0, _mobile2.default)(),
      widgetHeight: (0, _mobile2.default)() ? WIDGET_HEIGHT_MOBILE : WIDGET_HEIGHT_DESKTOP,
      usingDefaultBackground: props.backgroundUrl === DEFAULT_BACKGROUND
    };
    return _this;
  }

  /**
   * Called after component rendering to DOM.
   */


  _createClass(TournamentOverviewWidget, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if ((0, _mobile2.default)()) {
        setTimeout(function () {
          return _this2.setState({ selected: 1 });
        }, MOBILE_INITIAL_SCROLL_DELAY);
      }
      _kambiWidgetCoreLibrary.widgetModule.setWidgetHeight(this.state.widgetHeight);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      _kambiWidgetCoreLibrary.widgetModule.setWidgetHeight(this.state.widgetHeight);
    }

    /**
     * Generates country icon url
     * country { string } country name e.g 'Sweden', 'South Korea'
     */

  }, {
    key: 'generateCountryFlagUrl',
    value: function generateCountryFlagUrl(country) {
      var normalisedCountryName = country.toLowerCase().replace(/\s/g, '_');
      return '' + this.props.flagBaseUrl + normalisedCountryName + '.svg';
    }

    /**
     * Navigates to event
     * event { shape } event containing betOffer and event metadata
     */

  }, {
    key: 'navigateToEvent',
    value: function navigateToEvent(event) {
      if (event.event.liveBetOffers) {
        // Navigate to live event
        // http://kambi-sportsbook-widgets.github.io/widget-core-library/module-widgetModule.html#.navigateToLiveEvent__anchor
        _kambiWidgetCoreLibrary.widgetModule.navigateToLiveEvent(event.event.id);
      } else {
        // Navigate to upcoming event
        // http://kambi-sportsbook-widgets.github.io/widget-core-library/module-widgetModule.html#.navigateToEvent__anchor
        _kambiWidgetCoreLibrary.widgetModule.navigateToEvent(event.event.id);
      }
    }

    /**
     * Generates title for each widget item from event name
     * event { shape } contains event metadata
     */

  }, {
    key: 'generateWidgetItemTitle',
    value: function generateWidgetItemTitle(event) {
      return event.group + ' - ' + event.name.split('(')[0].trim(); // e.g "WM 2018 - Skyttekung"
    }

    /**
     * Sorts outcomes by lowest odds and label if same odds
     * outcomes { array } outcomes to sort
     */

  }, {
    key: 'sortOutcomesByLowestOdds',
    value: function sortOutcomesByLowestOdds(outcomes) {
      return outcomes.sort(function (a, b) {
        if (a.odds < b.odds) {
          return -1;
        } else if (a.odds === b.odds) {
          if (a.label < b.label) {
            return -1;
          }
          return 1;
        } else if (a.odds > b.odds) {
          return 1;
        }
      });
    }

    /**
     * Returns event node to display at top of widget
     * eventData { shape } eventData object containing betOffer and event metadata
     * numberOfOutcomes { number } how many outcomes we want the widget to render
     */

  }, {
    key: 'renderTopEvent',
    value: function renderTopEvent(eventData) {
      var _this3 = this;

      var numberOfOutcomes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;

      return _react2.default.createElement(
        _List2.default,
        {
          title: this.generateWidgetItemTitle(eventData.event),
          handleClick: function handleClick() {
            return _this3.navigateToEvent(eventData);
          },
          showNavLink: eventData.betOffers[0].outcomes.length > numberOfOutcomes,
          navText: t('showAllParticipants', eventData.betOffers[0].outcomes.length)
        },
        this.sortOutcomesByLowestOdds(eventData.betOffers[0].outcomes, numberOfOutcomes).slice(0, numberOfOutcomes).map(function (outcome) {
          var flagUrl = null;
          var participant = outcome.label.split('(')[0];
          var countrySplit = outcome.englishLabel.split('(');

          if (countrySplit && countrySplit.length > 1 && eventData.event.groupId === WORLD_CUP_2018_ID) {
            flagUrl = _this3.generateCountryFlagUrl(countrySplit[1].slice(0, countrySplit[1].length - 1));
          } else if (eventData.event.groupId === WORLD_CUP_2018_ID) {
            flagUrl = _this3.generateCountryFlagUrl(countrySplit[0]);
          }

          return _react2.default.createElement(_ListItem2.default, {
            key: outcome.id,
            participant: participant,
            flagUrl: flagUrl,
            fallbackFlagUrl: '../../assets/world_cup_2018.svg',
            outcome: outcome,
            event: eventData.event
          });
        })
      );
    }
  }, {
    key: 'renderMatchEvents',
    value: function renderMatchEvents() {
      var _this4 = this;

      return this.state.events.filter(function (event) {
        return event.betOffers.length > 0;
      }).map(function (event) {
        var countries = event.event.englishName.split(' - ');
        var isWorldCup = event.event.groupId === WORLD_CUP_2018_ID;
        return _react2.default.createElement(_Event2.default, {
          key: event.event.id,
          event: event.event,
          liveData: event.liveData,
          outcomes: event.betOffers[0].outcomes,
          homeFlag: isWorldCup ? _this4.generateCountryFlagUrl(countries[0]) : null,
          awayFlag: isWorldCup ? _this4.generateCountryFlagUrl(countries[1]) : null
        });
      });
    }

    /**
     * renders items based on device as we cannot pass null or false to ScrolledList
     */

  }, {
    key: 'renderScrolledListItems',
    value: function renderScrolledListItems() {
      var scrolledListItems = [this.renderMatchEvents()];
      if ((0, _mobile2.default)()) {
        scrolledListItems.unshift(_react2.default.createElement(_TournamentLogo2.default, { logoUrl: this.props.iconUrl, key: 'tournamentLogo' }));
      }

      return scrolledListItems.map(function (item) {
        return item;
      });
    }

    /**
     * Renders component.
     * @returns {XML}
     */

  }, {
    key: 'render',
    value: function render() {
      var _props$competitions = this.props.competitions,
          leftWidget = _props$competitions.leftWidget,
          rightWidget = _props$competitions.rightWidget;


      return _react2.default.createElement(
        'div',
        { className: _TournamentOverviewWidget2.default.widget },
        _react2.default.createElement(_kambiWidgetComponents.BlendedBackground, {
          backgroundUrl: this.props.backgroundUrl,
          blendWithOperatorColor: this.state.usingDefaultBackground
        }),
        !(0, _mobile2.default)() && _react2.default.createElement(
          'div',
          { className: _TournamentOverviewWidget2.default.topArea },
          this.renderTopEvent(leftWidget),
          _react2.default.createElement(_TournamentLogo2.default, { logoUrl: this.props.iconUrl }),
          this.renderTopEvent(rightWidget)
        ),
        _react2.default.createElement(
          _kambiWidgetComponents.ScrolledList,
          {
            renderPrevButton: function renderPrevButton(props) {
              return _react2.default.createElement(_ArrowButton2.default, _extends({ type: 'left' }, props));
            },
            renderNextButton: function renderNextButton(props) {
              return _react2.default.createElement(_ArrowButton2.default, _extends({ type: 'right' }, props));
            },
            renderItemContainer: function renderItemContainer(props) {
              return _react2.default.createElement(_ItemContainer2.default, props);
            },
            selected: this.state.selected,
            scrollToItemMode: _kambiWidgetComponents.ScrolledList.SCROLL_TO_ITEM_MODE.TO_LEFT,
            showControls: !(0, _mobile2.default)()
          },
          this.renderScrolledListItems()
        )
      );
    }
  }]);

  return TournamentOverviewWidget;
}(_react.Component);

/**
 * @property events {Array} events to display in the match overview bottom widget
 * @property compentitions {Array} competitions with keys leftWidget, rightWidget containing their respective betOffers
 * @property iconUrl {String} provides full path to tournament icon svg
 * @property backgroundUrl {String} provides path to backgroundImage
 */


exports.default = TournamentOverviewWidget;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _kambiWidgetCoreLibrary = __webpack_require__(4);

var _OutcomeButtonUI = __webpack_require__(17);

var _OutcomeButtonUI2 = _interopRequireDefault(_OutcomeButtonUI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Returns initial state.
 * @param {object} outcome Outcome entity
 * @returns {{selected: boolean}}
 */
var getInitialState = function getInitialState(outcome) {
  return {
    selected: _kambiWidgetCoreLibrary.widgetModule.betslipIds.indexOf(outcome.id) !== -1,
    // information that is compared when getting updated betoffers
    currentOutcomeInfo: getOutcomeInfo(outcome)
  };
};

var getOutcomeInfo = function getOutcomeInfo(outcome) {
  var suspended = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return {
    odds: outcome.odds,
    oddsAmerican: outcome.oddsAmerican,
    oddsFractional: outcome.oddsFractional,
    label: outcome.label,
    suspended: suspended
  };
};

/**
 * Outcome button component. This component renders an outcome with or without a label. It automatically adds/removes the outcome to/from the betslip when the user clicks the button. Besides that it also automatically rerenders itself when the user changes the odds format
 *
 * This component uses the OutcomeButtonUI behind the scenes, if you don't want the automatic functionality mentioned before you should use OutcomeButtonUI
 * @memberof widget-components
 */

var OutcomeButton = function (_Component) {
  _inherits(OutcomeButton, _Component);

  /*
    * Outcome component constructor
    * @param {object} props Component properties
    */
  function OutcomeButton(props) {
    _classCallCheck(this, OutcomeButton);

    var _this = _possibleConstructorReturn(this, (OutcomeButton.__proto__ || Object.getPrototypeOf(OutcomeButton)).call(this, props));

    _this.toggleOutcome = _this.toggleOutcome.bind(_this);

    // compute initial state
    _this.state = getInitialState(_this.props.outcome);
    _this.oddsFormatChangedHandler = function () {
      return _this.forceUpdate();
    };
    _this.betoffersUpdatedHandler = _this.betoffersUpdatedHandler.bind(_this);
    _this.betslipUpdatedHandler = _this.betslipUpdatedHandler.bind(_this);
    return _this;
  }

  /*
    * Called just before component mounting
    */


  _createClass(OutcomeButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.subscribeToEvents(this.props.event, this.props.outcome);
    }

    /*
      * Called just before changing properties of component
      * @param {object} nextProps New properties
      */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.unsubscribeFromEvents(this.props.outcome);
      this.subscribeToEvents(nextProps.event, nextProps.outcome);
      this.setState(getInitialState(nextProps.outcome));
    }

    /*
      * Called just before component unmounting
      */

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unsubscribeFromEvents(this.props.outcome);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var _this2 = this;

      // preventing unnecessary updates
      if (this.state.selected === nextState.selected &&
      // deep comparing currentOutcomeInfos
      Object.keys(this.state.currentOutcomeInfo).reduce(function (acc, key) {
        if (acc === true) {
          return true;
        }
        return nextState.currentOutcomeInfo[key] === _this2.state.currentOutcomeInfo[key];
      }, true)) {
        return false;
      }
      return true;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.selected !== this.state.selected && this.props.onSelection != null) {
        this.props.onSelection(this.state.selected);
      }
    }
  }, {
    key: 'betslipUpdatedHandler',
    value: function betslipUpdatedHandler(data) {
      var selected = false;
      for (var i = 0; i < data.outcomes.length; i++) {
        var outcome = data.outcomes[i];
        if (outcome.id === this.props.outcome.id) {
          selected = true;
        }
      }
      this.setState({
        selected: selected
      });
    }

    /*
     * Handles updates from the eventUpdatesModule
     */

  }, {
    key: 'betoffersUpdatedHandler',
    value: function betoffersUpdatedHandler(data) {
      var boid = this.props.outcome.betOfferId;
      var newbo = null;
      if (data.betoffers == null) {
        return;
      }
      for (var i = 0; i < data.betoffers.length; i++) {
        var bo = data.betoffers[i];
        if (bo.id === boid) {
          newbo = bo;
          break;
        }
      }
      if (newbo == null) {
        return;
      }
      var newoutcome = null;
      for (var _i = 0; _i < newbo.outcomes.length; _i++) {
        var outcome = newbo.outcomes[_i];
        if (outcome.id === this.props.outcome.id) {
          newoutcome = outcome;
          break;
        }
      }
      if (newoutcome == null) {
        this.setState({
          currentOutcomeInfo: null
        });
        return;
      }
      var currOutcomeInfo = this.state.currentOutcomeInfo;
      var newOutcomeInfo = getOutcomeInfo(newoutcome, newbo.suspended);
      // comparing the new outcome with the old one, if they are different update the state
      var update = false;
      Object.keys(currOutcomeInfo).forEach(function (key) {
        if (currOutcomeInfo[key] !== newOutcomeInfo[key]) {
          update = true;
        }
      });
      if (update) {
        this.setState({
          currentOutcomeInfo: newOutcomeInfo
        });
      }
    }

    /*
     * Subscribes to external events related to this component instance
     * @param {object} outcome Outcome entity
     */

  }, {
    key: 'subscribeToEvents',
    value: function subscribeToEvents(event, outcome) {
      _kambiWidgetCoreLibrary.updatesModule.subscribe.betslipOutcomes(this.betslipUpdatedHandler);
      _kambiWidgetCoreLibrary.updatesModule.subscribe.oddsFormat(this.oddsFormatChangedHandler);
      if (this.props.updateOdds !== true) {
        return;
      }
      if (event.openForLiveBetting) {
        _kambiWidgetCoreLibrary.updatesModule.subscribe.allLiveBetoffers(event.id, this.betoffersUpdatedHandler);
      } else {
        _kambiWidgetCoreLibrary.updatesModule.subscribe.allPreMatchBetoffers(event.id, this.betoffersUpdatedHandler);
      }
    }

    /*
     * Unsubscribes from external events related to this component instance
     * @param {object} outcome Outcome entity
     */

  }, {
    key: 'unsubscribeFromEvents',
    value: function unsubscribeFromEvents(outcome) {
      _kambiWidgetCoreLibrary.updatesModule.unsubscribe(this.oddsFormatChangedHandler);
      _kambiWidgetCoreLibrary.updatesModule.unsubscribe(this.betslipUpdatedHandler);
      if (this.props.updateOdds !== true) {
        return;
      }
      _kambiWidgetCoreLibrary.updatesModule.unsubscribe(this.betoffersUpdatedHandler);
    }

    /*
      * Handles outcome button's click event
      */

  }, {
    key: 'toggleOutcome',
    value: function toggleOutcome() {
      if (this.state.selected) {
        _kambiWidgetCoreLibrary.widgetModule.removeOutcomeFromBetslip(this.props.outcome.id);
      } else {
        _kambiWidgetCoreLibrary.widgetModule.addOutcomeToBetslip(this.props.outcome.id, this.props.betslipDefaultStake, this.props.betslipUpdateMode, this.props.betslipTrackingName);
      }
    }

    /*
      * Properly formatted odds
      * @returns {number}
      */

  }, {
    key: 'render',


    /*
      * Returns component's template
      * @returns {XML}
      */
    value: function render() {
      // outcomes <= 1.0 do not make sense but still appears in the API sometimes
      if (this.state.currentOutcomeInfo == null || this.state.currentOutcomeInfo.odds <= 1000) {
        return _react2.default.createElement('div', { style: { display: 'none' } });
      }
      return _react2.default.createElement(_OutcomeButtonUI2.default, {
        label: this.label,
        odds: this.oddsFormatted,
        suspended: this.state.currentOutcomeInfo.suspended,
        selected: this.state.selected,
        onClick: this.toggleOutcome,
        outlineStyle: this.props.outlineStyle
      });
    }
  }, {
    key: 'oddsFormatted',
    get: function get() {
      switch (_kambiWidgetCoreLibrary.coreLibrary.oddsFormat) {
        case 'fractional':
          return this.state.currentOutcomeInfo.oddsFractional;
        case 'american':
          var odds = this.state.currentOutcomeInfo.oddsAmerican;
          if (parseFloat(odds, 10) >= 0) {
            odds = '+' + odds;
          }
          return odds;
        default:
          return _kambiWidgetCoreLibrary.utilModule.getOddsDecimalValue(this.state.currentOutcomeInfo.odds / 1000);
      }
    }

    /*
      * Button's label
      * @returns {string|null}
      */

  }, {
    key: 'label',
    get: function get() {
      if (typeof this.props.label === 'string') {
        return this.props.label;
      }

      if (this.props.label === false) {
        return null;
      }

      if (this.props.event) {
        return _kambiWidgetCoreLibrary.utilModule.getOutcomeLabel(this.props.outcome, this.props.event);
      } else {
        return this.state.currentOutcomeInfo.label;
      }
    }
  }]);

  return OutcomeButton;
}(_react.Component);

/**
 * @property outcome {Object} The Outcome object provided by the calls from the offeringModule
 * @property [event] {Object} the Event object provided by the calls from the offeringModule. If not provided will some types of outcomes may not show the correct label. If the "label" prop is false this prop is not used
 * @property [label=true] {string|boolean} Label to show. If boolean and false don't show any label, only the odds, if boolean and true use the provided event and the outcome to determine the label, if string uses it as the label
 * @property [updateOdds=false] {boolean} If true will automatically update odds using the Widget API (non stand-alone mode only). This is fairly resource intensive, set it to false if your widget shows many betoffers from different events (showing several for the same event should be fine)
 * @property [betslipUpdateMode=null] {string} update mode for adding the bet to the betslip, either 'append' (the default) or 'replace'
 * @property [betslipDefaultStake=null] {string} the stake amount to use when adding the bet to the betslip, user can change this value after adding the bet to the betslip
 * @property [betslipTrackingName=null] {string} string for tracking bets placed through this button, if not provided uses coreLibrary.args.widgetTrackingName
 * @property [onSelection=null] {Function(Boolean)} Callback called when the button becomes selected or unselected, the callback receives one boolean parameter with the current selection state. This callback can be fired multiple times per state change
 */


OutcomeButton.defaultProps = {
  label: true,
  outlineStyle: false,
  updateOdds: false,
  betslipUpdateMode: null,
  betslipDefaultStake: null,
  betslipTrackingName: null,
  onSelection: null
};

exports.default = OutcomeButton;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(61);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../wc2018-tournament-overview-widget/node_modules/css-loader/index.js??ref--0-oneOf-0-1!../../../wc2018-tournament-overview-widget/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-0-2!../../../wc2018-tournament-overview-widget/node_modules/sass-loader/lib/loader.js!./OutcomeButtonUI.scss", function() {
		var newContent = require("!!../../../wc2018-tournament-overview-widget/node_modules/css-loader/index.js??ref--0-oneOf-0-1!../../../wc2018-tournament-overview-widget/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-0-2!../../../wc2018-tournament-overview-widget/node_modules/sass-loader/lib/loader.js!./OutcomeButtonUI.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "._2vGB3qYlpOnz2nCzA8EF3i {\n  -webkit-justify-content: center;\n          justify-content: center; }\n\n._2uO0HKI59ysBAVcqjKWKh5 {\n  cursor: pointer;\n  -webkit-flex: 1;\n          flex: 1; }\n\n._25nAECINOzWzEvSuM4q0U_ {\n  background: transparent;\n  border: 1.2px solid rgba(255, 255, 255, 0.8);\n  box-sizing: border-box;\n  padding: -1.2px; }\n  ._25nAECINOzWzEvSuM4q0U_:hover {\n    background: rgba(255, 255, 255, 0.1);\n    border: 1.2px solid #fff;\n    padding: -1.2px; }\n\n._7QgCXNz8ubdx04OeIwdCj {\n  border: 1.2px solid transparent; }\n\n._1Mmtcx_2cUfdaOBh5hclUW {\n  color: #fff; }\n\n._1i1hr4lnnXd_YowDPqwGNf {\n  color: #fff;\n  opacity: .85; }\n", ""]);

// exports
exports.locals = {
	"label": "_2vGB3qYlpOnz2nCzA8EF3i",
	"general": "_2uO0HKI59ysBAVcqjKWKh5",
	"outline": "_25nAECINOzWzEvSuM4q0U_",
	"outline--selected": "_7QgCXNz8ubdx04OeIwdCj",
	"outline__odds": "_1Mmtcx_2cUfdaOBh5hclUW",
	"outline__label-wrapper": "_1i1hr4lnnXd_YowDPqwGNf"
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ScrolledList = __webpack_require__(18);

var _ScrolledList2 = _interopRequireDefault(_ScrolledList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Tab Pagination component.
 * Component should receive list of tab contents as children.
 * It will render upper tab bar (for switching tabs).
 * Once a tab is clicked a tab content will be switched.
 * @memberOf widget-components
 */
var TabPagination = function (_Component) {
   _inherits(TabPagination, _Component);

   /*
    * Constructs.
    * @param {object} props Component properties
    */
   function TabPagination(props) {
      _classCallCheck(this, TabPagination);

      var _this = _possibleConstructorReturn(this, (TabPagination.__proto__ || Object.getPrototypeOf(TabPagination)).call(this, props));

      _this.state = {
         selected: _this.props.selected
      };

      _this.switchTab = _this.switchTab.bind(_this);
      return _this;
   }

   /*
    * Switches to given tab
    * @param {number} idx Tab index
    */


   _createClass(TabPagination, [{
      key: 'switchTab',
      value: function switchTab(idx) {
         var _this2 = this;

         this.setState({ selected: idx });

         // switching the tab is done in the next tick
         setTimeout(function () {
            return _this2.props.onTabChange && _this2.props.onTabChange(idx);
         }, 0);
      }

      /*
       * Creates TabPagination markup
       * @returns {XML}
       */

   }, {
      key: 'render',
      value: function render() {
         var _this3 = this;

         var children = _react.Children.toArray(this.props.children);

         return _react2.default.createElement(
            'div',
            null,
            this.props.renderTabList({
               selected: this.state.selected,
               onItemClick: this.switchTab,
               children: children.map(function (a, i) {
                  return _this3.props.renderTab(i);
               })
            }),
            _react2.default.createElement(
               'div',
               null,
               children[this.state.selected]
            )
         );
      }
   }]);

   return TabPagination;
}(_react.Component);

/**
 * Renders tab for given index. The tab will be placed inside upper tab bar.
 * @callback TabPagination_RenderTab
 * @param {number} idx Tab index
 * @returns ReactElement
 * @example
 *    idx => <div style={{width: 50, height: 50}}>Tab <strong>#{idx}</strong></div>
 */

/**
 * Renders upper tab list.
 * @callback TabPagination_RenderTabList
 * @param {TabPagination_RenderTabListArgs} args Contains properties which will control tab bar behaviour
 * @returns ReactElement
 *
 * @example <caption>Using custom tab bar component</caption>
 *    ({selected, onItemClick, children}) =>
 *       <CustomTabBar
 *          selected={selected}
 *          onItemClick={onItemClick}>
 *             {children}
 *       </CustomTabBar>
 *
 * @example <caption>Shorthand syntax can be used once function arguments and component properties names match.</caption>
 *    args => <CustomTabBar {...args}>{args.children}</CustomTabBar>
 *
 * @example <caption>Usage of build-in {@link widget-components.FixedList|FixedList} component as tab bar.</caption>
 *    args => <FixedList {...args}>{args.children}</FixedList>
 *
 * @example <caption>Advanced usage of {@link widget-components.ScrolledList|ScrolledList} component as tab bar.</caption>
 *    args =>
 *       <ScrolledList
 *          {...args}
 *          alignItems={ScrolledList.ALIGN_ITEMS.LEFT}
 *          step={3}>
 *             {args.children}
 *       </ScrolledList>
 */

/**
 * @name TabPagination_RenderTabListArgs
 * @property {number} selected Initially selected list item (tab)
 * @property {function(number)} onItemClick Item clicked handler. Called with item's index argument.
 * @property {ReactElement[]} children Array of list items (tabs)
 */

/**
 * Called after switching tabs.
 * @callback TabPagination_OnTabChange
 * @param {number} idx Tab index
 * @example
 *    idx => console.log('currently selected tab: ' + idx)
 */

/**
 * @property [children] {ReactElement[]} Tab content elements
 * @property [renderTab] {TabPagination_RenderTab} Function called in order to render single tab on tab bar. Renders tab index by default.
 * @property [renderTabList] {TabPagination_RenderTabList} Function called in order to render tab bar. Renders {@link widget-components.ScrolledList|ScrolledList} by default.
 * @property [selected=0] {number} Currently selected tab index
 * @property [onTabChange] {TabPagination_OnTabChange} Function called after switching tabs
 */


TabPagination.defaultProps = {
   renderTab: function renderTab(idx) {
      return _react2.default.createElement(
         'div',
         { key: idx, style: { padding: 16 } },
         _react2.default.createElement(
            'strong',
            null,
            idx
         )
      );
   },
   renderTabList: function renderTabList(args) {
      return _react2.default.createElement(
         _ScrolledList2.default,
         args,
         args.children
      );
   },
   selected: 0
};

exports.default = TabPagination;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(64);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../wc2018-tournament-overview-widget/node_modules/css-loader/index.js??ref--0-oneOf-0-1!../../../../wc2018-tournament-overview-widget/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-0-2!../../../../wc2018-tournament-overview-widget/node_modules/sass-loader/lib/loader.js!./ScrolledList.scss", function() {
		var newContent = require("!!../../../../wc2018-tournament-overview-widget/node_modules/css-loader/index.js??ref--0-oneOf-0-1!../../../../wc2018-tournament-overview-widget/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-0-2!../../../../wc2018-tournament-overview-widget/node_modules/sass-loader/lib/loader.js!./ScrolledList.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "._2I-7ba7xU9YfKIdtFZhv1G {\n  position: relative;\n  padding: 0 16px; }\n  ._2I-7ba7xU9YfKIdtFZhv1G._1WjfbOIlWTvUU3WJBZXAJz {\n    padding: 0; }\n\n._26Zf8bzGQDNutYZMUuManz {\n  overflow-x: hidden; }\n  ._1i8seXZVuBj08k4F8UQJYa ._26Zf8bzGQDNutYZMUuManz {\n    -webkit-overflow-scrolling: touch;\n    overflow-x: scroll; }\n\n._2MaI1yJiGJqRMQ7jX52nmF {\n  display: -webkit-flex;\n  display: flex;\n  margin: 0;\n  transition: -webkit-transform .3s;\n  transition: transform .3s;\n  transition: transform .3s, -webkit-transform .3s; }\n  ._2MaI1yJiGJqRMQ7jX52nmF > * {\n    -webkit-flex: 0 0 auto;\n            flex: 0 0 auto; }\n", ""]);

// exports
exports.locals = {
	"container": "_2I-7ba7xU9YfKIdtFZhv1G",
	"no-controls": "_1WjfbOIlWTvUU3WJBZXAJz",
	"eyeshot": "_26Zf8bzGQDNutYZMUuManz",
	"touch": "_1i8seXZVuBj08k4F8UQJYa",
	"bar": "_2MaI1yJiGJqRMQ7jX52nmF"
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ArrowButton = __webpack_require__(66);

var _ArrowButton2 = _interopRequireDefault(_ArrowButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrowButton = function ArrowButton(_ref) {
   var type = _ref.type,
       disabled = _ref.disabled,
       onClick = _ref.onClick,
       backgroundColor = _ref.backgroundColor;

   // if buttons backgroundColor is not explicitly set
   // the body's backgroundColor will be used
   if (!backgroundColor) {
      if (typeof window.getComputedStyle !== 'function') {
         backgroundColor = '#fff';
      } else {
         backgroundColor = window.getComputedStyle(document.body).getPropertyValue('background-color');
      }
   }

   var style = {
      background: 'linear-gradient(' + (type === 'left' ? 90 : 270) + 'deg, ' + backgroundColor + ' 50%, rgba(255, 255, 255, 0))'
   };

   return _react2.default.createElement(
      'button',
      {
         className: _ArrowButton2.default[type],
         style: style,
         onClick: onClick,
         disabled: disabled
      },
      _react2.default.createElement(
         'svg',
         { className: _ArrowButton2.default.icon, width: '10px', height: '17px', viewBox: '0 860 420 500', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
         _react2.default.createElement('path', {
            id: 'arrowLeft',
            transform: 'scale(1, -1) translate(0, -1500)',
            d: 'M358.286 640q0-7.429-5.714-13.143l-224.571-224.571 224.571-224.571q5.714-5.714 5.714-13.143t-5.714-13.143l-28.571-28.571q-5.714-5.714-13.143-5.714t-13.143 5.714l-266.286 266.286q-5.714 5.714-5.714 13.143t5.714 13.143l266.286 266.286q5.714 5.714 13.143 5.714t13.143-5.714l28.571-28.571q5.714-5.714 5.714-13.143z'
         })
      )
   );
};

ArrowButton.defaultProps = {
   disabled: false,
   backgroundColor: null
};

exports.default = ArrowButton;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(67);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../wc2018-tournament-overview-widget/node_modules/css-loader/index.js??ref--0-oneOf-0-1!../../../../wc2018-tournament-overview-widget/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-0-2!../../../../wc2018-tournament-overview-widget/node_modules/sass-loader/lib/loader.js!./ArrowButton.scss", function() {
		var newContent = require("!!../../../../wc2018-tournament-overview-widget/node_modules/css-loader/index.js??ref--0-oneOf-0-1!../../../../wc2018-tournament-overview-widget/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-0-2!../../../../wc2018-tournament-overview-widget/node_modules/sass-loader/lib/loader.js!./ArrowButton.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "._1unx5rSyIFrfllS3NMlX9u,\n._2_vYLpilIdq64BZaw4FFTF {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 35px;\n  border: none;\n  background: none;\n  font-size: 15px;\n  font-weight: bold;\n  cursor: pointer;\n  outline: none;\n  padding: 0;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center; }\n  ._1unx5rSyIFrfllS3NMlX9u[disabled],\n  ._2_vYLpilIdq64BZaw4FFTF[disabled] {\n    display: none; }\n  ._1unx5rSyIFrfllS3NMlX9u ._2P68HpmzfJDzbqAxgkm9Fs,\n  ._2_vYLpilIdq64BZaw4FFTF ._2P68HpmzfJDzbqAxgkm9Fs {\n    fill: #000;\n    opacity: .3;\n    transition: opacity .3s; }\n  ._1unx5rSyIFrfllS3NMlX9u:hover ._2P68HpmzfJDzbqAxgkm9Fs,\n  ._2_vYLpilIdq64BZaw4FFTF:hover ._2P68HpmzfJDzbqAxgkm9Fs {\n    opacity: 1; }\n\n._1unx5rSyIFrfllS3NMlX9u {\n  left: 16px; }\n\n._2_vYLpilIdq64BZaw4FFTF {\n  right: 16px; }\n  ._2_vYLpilIdq64BZaw4FFTF ._2P68HpmzfJDzbqAxgkm9Fs {\n    -webkit-transform: scale(-1, 1);\n            transform: scale(-1, 1);\n    margin-left: 25px; }\n", ""]);

// exports
exports.locals = {
	"left": "_1unx5rSyIFrfllS3NMlX9u",
	"right": "_2_vYLpilIdq64BZaw4FFTF",
	"icon": "_2P68HpmzfJDzbqAxgkm9Fs"
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(69);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../wc2018-tournament-overview-widget/node_modules/css-loader/index.js??ref--0-oneOf-0-1!../../../wc2018-tournament-overview-widget/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-0-2!../../../wc2018-tournament-overview-widget/node_modules/sass-loader/lib/loader.js!./ItemContainer.scss", function() {
		var newContent = require("!!../../../wc2018-tournament-overview-widget/node_modules/css-loader/index.js??ref--0-oneOf-0-1!../../../wc2018-tournament-overview-widget/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-0-2!../../../wc2018-tournament-overview-widget/node_modules/sass-loader/lib/loader.js!./ItemContainer.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".yRN7qbimZQHOUVWTK0CqI {\n  cursor: pointer;\n  position: relative;\n  transition: background-color .5s;\n  padding-bottom: 3px;\n  width: 17.86%;\n  height: 44px;\n  -webkit-align-items: center;\n          align-items: center;\n  display: -webkit-flex;\n  display: flex; }\n  .yRN7qbimZQHOUVWTK0CqI:hover {\n    background-color: #f0f0f0; }\n  .yRN7qbimZQHOUVWTK0CqI ._2fgeOy2D9inHOklmixCc93 {\n    position: absolute;\n    bottom: 0;\n    height: 3px;\n    left: 0;\n    right: 0;\n    visibility: hidden; }\n  .yRN7qbimZQHOUVWTK0CqI.xDr1RLUNlTjdbape6TPM7 {\n    font-weight: bold; }\n    .yRN7qbimZQHOUVWTK0CqI.xDr1RLUNlTjdbape6TPM7 ._2fgeOy2D9inHOklmixCc93 {\n      visibility: visible; }\n", ""]);

// exports
exports.locals = {
	"item": "yRN7qbimZQHOUVWTK0CqI",
	"border": "_2fgeOy2D9inHOklmixCc93",
	"selected": "xDr1RLUNlTjdbape6TPM7"
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FixedList = __webpack_require__(71);

var _FixedList2 = _interopRequireDefault(_FixedList);

var _ItemContainer = __webpack_require__(19);

var _ItemContainer2 = _interopRequireDefault(_ItemContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Horizontal list component. Items will be stretched or shrunken to fit the container.
 * @memberOf widget-components
 */
var FixedList = function (_Component) {
   _inherits(FixedList, _Component);

   /*
    * Constructs.
    * @param {object} props Component properties
    */
   function FixedList(props) {
      _classCallCheck(this, FixedList);

      var _this = _possibleConstructorReturn(this, (FixedList.__proto__ || Object.getPrototypeOf(FixedList)).call(this, props));

      _this.state = {
         selected: props.selected
      };
      return _this;
   }

   /*
    * Switches to given tab.
    * @param {number} idx Tab index
    */


   _createClass(FixedList, [{
      key: 'onItemClick',
      value: function onItemClick(idx) {
         if (this.props.onItemClick) {
            this.props.onItemClick(idx);
         }

         this.setState({ selected: idx });
      }

      /*
       * Renders component.
       * @returns {XML}
       */

   }, {
      key: 'render',
      value: function render() {
         var _this2 = this;

         return _react2.default.createElement(
            'div',
            { className: _FixedList2.default.bar },
            _react.Children.map(this.props.children, function (child, i) {
               return _this2.props.renderItemContainer({
                  key: i,
                  selected: _this2.state.selected == i,
                  onClick: _this2.onItemClick.bind(_this2, i),
                  children: child
               });
            })
         );
      }
   }]);

   return FixedList;
}(_react.Component);

/**
 * @callback FixedList_RenderItemContainer
 * @param {FixedList_RenderItemContainerArgs} args Contains properties which will control the container
 * @returns ReactElement
 *
 * @example <caption>Using custom item container</caption>
 *    ({selected, onClick, onWidth, children}) =>
 *       <CustomItemContainer
 *          selected={selected}
 *          onClick={onClick}
 *          onWidth={onWidth}>
 *             {children}
 *       </CustomItemContainer>
 *
 * @example <caption>Shorthand syntax can be used once function arguments and component properties names match.</caption>
 *    args => <CustomItemContainer {...args}>{args.children}</CustomItemContainer>
 */

/**
 * @name FixedList_RenderItemContainerArgs
 * @property {boolean} selected Controls whether item should be rendered as currently selected or normally
 * @property {function} onClick Called once item has been clicked
 * @property {function} onWidth Called when item width is determined or has been changed
 * @property {ReactElement} children Item contents
 */

/**
 * @property [children] {ReactElement[]} Items list
 * @property [onItemClick] {function(number)} Item click handler. Called with item index argument.
 * @property [selected=0] {number} Initially selected item index
 * @property [renderItemContainer] {FixedList_RenderItemContainer} Function capable of rendering item container. Renders Kambi-styled item container by default.
 */


FixedList.defaultProps = {
   selected: 0,
   renderItemContainer: function renderItemContainer(args) {
      return _react2.default.createElement(
         _ItemContainer2.default,
         args,
         args.children
      );
   }
};

exports.default = FixedList;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(72);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../wc2018-tournament-overview-widget/node_modules/css-loader/index.js??ref--0-oneOf-0-1!../../../../wc2018-tournament-overview-widget/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-0-2!../../../../wc2018-tournament-overview-widget/node_modules/sass-loader/lib/loader.js!./FixedList.scss", function() {
		var newContent = require("!!../../../../wc2018-tournament-overview-widget/node_modules/css-loader/index.js??ref--0-oneOf-0-1!../../../../wc2018-tournament-overview-widget/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-0-2!../../../../wc2018-tournament-overview-widget/node_modules/sass-loader/lib/loader.js!./FixedList.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "._2-yI7-rQZsTWiqs1gkaKc1 {\n  display: -webkit-flex;\n  display: flex; }\n  ._2-yI7-rQZsTWiqs1gkaKc1 > * {\n    -webkit-flex: 1;\n            flex: 1; }\n", ""]);

// exports
exports.locals = {
	"bar": "_2-yI7-rQZsTWiqs1gkaKc1"
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DropdownButton = __webpack_require__(74);

var _DropdownButton2 = _interopRequireDefault(_DropdownButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component for creating a button that when clicked shows a menu based in the provided options.
 * @memberof widget-components
 */
var DropdownButton = function (_Component) {
   _inherits(DropdownButton, _Component);

   function DropdownButton(props) {
      _classCallCheck(this, DropdownButton);

      var _this = _possibleConstructorReturn(this, (DropdownButton.__proto__ || Object.getPrototypeOf(DropdownButton)).call(this, props));

      _this.state = {
         selected: _this.props.selected,
         dropDown: false
      };

      _this.buttonElement = null;

      _this.onBackgroundClick = _this.onBackgroundClick.bind(_this);
      _this.onButtonClick = _this.onButtonClick.bind(_this);
      return _this;
   }

   /*
    * called on background click when drop down window is open
    * @param {SyntheticEvent} event Click event
    */


   _createClass(DropdownButton, [{
      key: 'onBackgroundClick',
      value: function onBackgroundClick(ev) {
         // setState prevents event from being processed by onOptionClick handler
         // so it is moved to the next cycle
         this.setState({ dropDown: false });
         window.document.documentElement.removeEventListener('click', this.onBackgroundClick, true);
         var btnIndex = ev.target.getAttribute('data-kw-dropdown-button-index');
         if (btnIndex == null) {
            return;
         }
         btnIndex = parseInt(btnIndex, 10);
         if (this.state.selected === btnIndex) {
            return;
         }
         this.setState({ selected: btnIndex });
         this.props.onChange(btnIndex);
      }

      /*
       * Shows drop down box with available options.
       * @param {SyntheticEvent} event Click event
       */

   }, {
      key: 'onButtonClick',
      value: function onButtonClick(event) {
         event.stopPropagation();
         this.setState({
            dropDown: true
         });
         window.document.documentElement.addEventListener('click', this.onBackgroundClick, true); // add event to the capture phase instead of bubble phase
      }

      /*
       * Renders button
       * @returns {XML}
       */

   }, {
      key: 'render',
      value: function render() {
         var _this2 = this;

         // calculating position of dropdown while in mobile mode
         var dropdownMobileStyling = {};
         if (this.state.dropDown && this.buttonElement) {
            var _buttonElement$getBou = this.buttonElement.getBoundingClientRect(),
                top = _buttonElement$getBou.top,
                bottom = _buttonElement$getBou.bottom;

            dropdownMobileStyling = {
               top: top,
               bottom: 'auto'
            };
            if (this.props.verticalAlignment === 'bottom') {
               dropdownMobileStyling = {
                  top: 'auto',
                  bottom: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - bottom
               };
            }
         }

         var cssHAlignClass = _DropdownButton2.default.leftAlign;
         if (this.props.horizontalAlignment === 'right') {
            cssHAlignClass = _DropdownButton2.default.rightAlign;
         }

         var cssVAlignClass = _DropdownButton2.default.topAlign;
         if (this.props.verticalAlignment === 'bottom') {
            cssVAlignClass = _DropdownButton2.default.bottomAlign;
         }

         return _react2.default.createElement(
            'div',
            { className: _DropdownButton2.default.general },
            _react2.default.createElement(
               'button',
               {
                  ref: function ref(node) {
                     _this2.buttonElement = node;
                  },
                  className: 'KambiWidget-card-support-text-color ' + _DropdownButton2.default.button, onClick: this.onButtonClick
               },
               this.props.options[this.state.selected],
               _react2.default.createElement('i', null)
            ),
            this.state.dropDown && _react2.default.createElement(
               'ul',
               {
                  style: dropdownMobileStyling,
                  className: _DropdownButton2.default.dropDown + '  ' + cssHAlignClass + ' ' + cssVAlignClass
               },
               this.props.options.map(function (option, i) {
                  var classNames = ['KambiWidget-card-background-color', 'KambiWidget-card-background-color--hoverable', 'KambiWidget-card-background-color--clickable'];

                  if (_this2.state.selected === i) {
                     classNames.push('KambiWidget-primary-color');
                  } else {
                     classNames.push('KambiWidget-card-text-color');
                  }

                  return _react2.default.createElement(
                     'li',
                     {
                        key: option,
                        'data-kw-dropdown-button-index': i,
                        className: classNames.join(' ')
                     },
                     option
                  );
               })
            )
         );
      }
   }]);

   return DropdownButton;
}(_react.Component);

/**
 * @property options {Array.<string>} Required. Options to show when the user clicks the button, translations are not applied

 * @property onChange {Function(index)} Required. Function to be invoked when the user clicks an option, receives the index of the option as an argument. If the user clicks the currently selected option this function is not invoked

 * @property [selected=0] {number} Defines which option should be checked upon component creation

 * @property [horizontalAlignment='right'] {'left'|'right'} Horizontal alignment of the dropdown box. If 'left' will match the left corner of the dropdown with the left corner of the button, if 'right' will match the right corner for the dropdown to the right corner of the button. If widget width is smaller than 925 the dropdown will ignore this option and will cover the full width of the widget

 * @property [verticalAlignment='top'] {'top'|'bottom'} Vertical alignment of the dropdown box. If 'top' will match the top corner of the dropdown with the top corner of the button, if 'bottom' will match the bottom corner for the dropdown to the bottom corner of the button
 */


DropdownButton.defaultProps = {
   selected: 0,
   horizontalAlignment: 'right',
   verticalAlignment: 'top'
};

exports.default = DropdownButton;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(75);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../wc2018-tournament-overview-widget/node_modules/css-loader/index.js??ref--0-oneOf-0-1!../../../wc2018-tournament-overview-widget/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-0-2!../../../wc2018-tournament-overview-widget/node_modules/sass-loader/lib/loader.js!./DropdownButton.scss", function() {
		var newContent = require("!!../../../wc2018-tournament-overview-widget/node_modules/css-loader/index.js??ref--0-oneOf-0-1!../../../wc2018-tournament-overview-widget/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-0-2!../../../wc2018-tournament-overview-widget/node_modules/sass-loader/lib/loader.js!./DropdownButton.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "._3FQFKMm4UlYrvrJ9dQVZgj {\n  display: inline-block;\n  position: relative; }\n\n._27JeP9_wVn29wB_K9_vXTZ {\n  background: none;\n  border: none;\n  outline: none;\n  padding: 7px 7px 7px 7px;\n  position: relative;\n  white-space: nowrap; }\n  ._27JeP9_wVn29wB_K9_vXTZ i {\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-top: 6px solid;\n    border-color-top: #999;\n    border-color-top: currentColor;\n    display: inline-block;\n    margin-left: 5px;\n    margin-bottom: 1px; }\n\n._1HwUd8LnnuCCDnPqcw9WCk {\n  position: absolute;\n  z-index: 1;\n  list-style: none;\n  margin: 4px;\n  padding: 0;\n  border-radius: 2px;\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);\n  min-width: 280px;\n  text-align: left; }\n  ._1HwUd8LnnuCCDnPqcw9WCk li {\n    font-size: 16px;\n    padding: 17px 16px;\n    line-height: 20px;\n    cursor: pointer;\n    white-space: nowrap; }\n\n@media (max-width: 925px) {\n  ._3FQFKMm4UlYrvrJ9dQVZgj {\n    position: initial; }\n  ._1HwUd8LnnuCCDnPqcw9WCk {\n    left: 0;\n    right: 0;\n    /* vw means viewport width (iframe width)\n      we need to use it here because of the parent div position: relative\n      vw support is pretty good: http://caniuse.com/#feat=viewport-units\n      but we have a fallback just in case */\n    width: 280px;\n    width: 100vw;\n    width: calc(100vw - 8px); } }\n\n@media (min-width: 925px) {\n  ._1oVaCqtQj1iIWjw6W7bFfp {\n    right: auto !important;\n    left: 0 !important; }\n  .dJKO_aiO4QJelcx2AYkRb {\n    right: 0 !important;\n    left: auto !important; }\n  .QA3SY8LaOznZuSUTIeaJ2 {\n    top: 0 !important;\n    bottom: auto !important; }\n  ._2whdfWXsIkGiUiUgYQsG0g {\n    top: auto !important;\n    bottom: 0 !important; } }\n", ""]);

// exports
exports.locals = {
	"general": "_3FQFKMm4UlYrvrJ9dQVZgj",
	"button": "_27JeP9_wVn29wB_K9_vXTZ",
	"dropDown": "_1HwUd8LnnuCCDnPqcw9WCk",
	"leftAlign": "_1oVaCqtQj1iIWjw6W7bFfp",
	"rightAlign": "dJKO_aiO4QJelcx2AYkRb",
	"topAlign": "QA3SY8LaOznZuSUTIeaJ2",
	"bottomAlign": "_2whdfWXsIkGiUiUgYQsG0g"
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _kambiWidgetCoreLibrary = __webpack_require__(4);

var _Header = __webpack_require__(77);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Header component, used to create standard headers, this component changes its default behavior based on coreLibrary.pageInfo.
 * If pageInfo.pageType is "home" the header is white background with grey text, otherwise the widget becomes collapsable and the header becomes black with white text.
 * These defaults are overridable by the props
 * @memberof widget-components
 */
var Header = function (_Component) {
   _inherits(Header, _Component);

   /*
    * Constructs.
    * @param {object} props Header properties
    */
   function Header(props) {
      _classCallCheck(this, Header);

      var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

      _this.state = {
         hidden: _this.props.hidden,
         isHome: _kambiWidgetCoreLibrary.coreLibrary.pageInfo.pageType === 'home'
      };
      _this.toggleHeader = _this.toggleHeader.bind(_this);
      return _this;
   }

   /*
    * Called after mounting component
    */


   _createClass(Header, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
         if (this.state.hidden) {
            // Collapse widget if needed by initial state
            _kambiWidgetCoreLibrary.widgetModule.setWidgetHeight(this.headerHeight);
         }
      }
   }, {
      key: 'toggleHeader',


      /*
       * Collapses or expands the widget
       */
      value: function toggleHeader() {
         if (this.props.collapsable === true || this.props.collapsable == null && !this.state.isHome) {
            this.setState({ hidden: !this.state.hidden });
            if (!this.state.hidden) {
               _kambiWidgetCoreLibrary.widgetModule.setWidgetHeight(this.headerHeight);
               if (this.props.onCollapse) {
                  this.props.onCollapse();
               }
            } else {
               _kambiWidgetCoreLibrary.widgetModule.adaptWidgetHeight();
               if (this.props.onExpand) {
                  this.props.onExpand();
               }
            }
         }
      }

      /*
       * Creates Header template.
       * @returns {XML}
       */

   }, {
      key: 'render',
      value: function render() {
         var _this2 = this;

         // Default classes to be added to all headers
         var cssClasses = _Header2.default.general + ' KambiWidget-card-support-text-color KambiWidget-card-header-border';

         // If we have custom classes disregard default styling and load custom classes
         if (typeof this.props.customClasses === 'string') {
            cssClasses = this.props.customClasses;
         } else {
            // Add classes depending on pageInfo
            if (!this.state.isHome) {
               // eslint-disable-line
               cssClasses += ' KambiWidget-header ' + _Header2.default.kwNotHome;
            }
         }

         return _react2.default.createElement(
            'header',
            {
               ref: function ref(headerElement) {
                  _this2.headerElement = headerElement;
               },
               className: cssClasses,
               onClick: this.toggleHeader },
            this.props.children
         );
      }
   }, {
      key: 'headerHeight',
      get: function get() {
         if (this.headerElement) {
            return this.headerElement.offsetHeight;
         } else if (this.props.collapsable) {
            return 40;
         }
         return 37;
      }
   }]);

   return Header;
}(_react.Component);

/**
 * @property children {ReactElement} Elements to be placed inside the header
 * @property [collapsable] {boolean} Sets header as collapsable. If not provided will be collapsable if coreLibrary.pageInfo.pageType !== 'home'
 * @property [hidden] {boolean} if true the widget will start collapsed
 * @property [onCollapse] {Function} callback invoked when the widget collapses
 * @property [onExpand] {Function} callback invoked when the widget uncollapses
 * @property [customClasses] {string} Defaults to false. If provided adds these CSS classes to the header instead of adding classes based on coreLibrary.pageInfo.pageType (black header if pageType !== 'home')
 */


exports.default = Header;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(78);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../wc2018-tournament-overview-widget/node_modules/css-loader/index.js??ref--0-oneOf-0-1!../../../wc2018-tournament-overview-widget/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-0-2!../../../wc2018-tournament-overview-widget/node_modules/sass-loader/lib/loader.js!./Header.scss", function() {
		var newContent = require("!!../../../wc2018-tournament-overview-widget/node_modules/css-loader/index.js??ref--0-oneOf-0-1!../../../wc2018-tournament-overview-widget/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-0-2!../../../wc2018-tournament-overview-widget/node_modules/sass-loader/lib/loader.js!./Header.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "._2tWKNh0gvct-FX2JY1Zo0c {\n  display: -webkit-flex;\n  display: flex;\n  padding: 6px 16px; }\n\n.vylXBUBDnifnrbig1osVZ {\n  font-size: 14px;\n  padding-top: 8px;\n  padding-bottom: 8px; }\n", ""]);

// exports
exports.locals = {
	"general": "_2tWKNh0gvct-FX2JY1Zo0c",
	"kwNotHome": "vylXBUBDnifnrbig1osVZ"
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ActionButton = __webpack_require__(80);

var _ActionButton2 = _interopRequireDefault(_ActionButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/prefer-stateless-function */
var ActionButton = function (_React$Component) {
   _inherits(ActionButton, _React$Component);

   function ActionButton() {
      _classCallCheck(this, ActionButton);

      return _possibleConstructorReturn(this, (ActionButton.__proto__ || Object.getPrototypeOf(ActionButton)).apply(this, arguments));
   }

   _createClass(ActionButton, [{
      key: 'render',
      value: function render() {
         var buttonClassName = _ActionButton2.default.button + ' ';
         var buttonTextClassName = _ActionButton2.default.buttonText + ' ';

         if (this.props.type === 'primary') {
            buttonClassName += 'KambiWidget-primary-color';
            buttonTextClassName += 'KambiWidget-primary-color';
         } else {
            buttonClassName += 'KambiWidget-card-text-color';
            buttonTextClassName += 'KambiWidget-card-text-color';
         }

         return _react2.default.createElement(
            'div',
            { className: _ActionButton2.default.container },
            _react2.default.createElement('button', {
               disabled: this.props.disabled,
               className: buttonClassName,
               onClick: this.props.action
            }),
            _react2.default.createElement(
               'div',
               {
                  className: buttonTextClassName,
                  style: this.props.disabled ? { opacity: 0.4 } : { opacity: 1 }
               },
               this.props.children
            )
         );
      }
   }]);

   return ActionButton;
}(_react2.default.Component);

ActionButton.defaultProps = {
   disabled: false,
   type: 'primary'
};

exports.default = ActionButton;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(81);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../wc2018-tournament-overview-widget/node_modules/css-loader/index.js??ref--0-oneOf-0-1!../../../wc2018-tournament-overview-widget/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-0-2!../../../wc2018-tournament-overview-widget/node_modules/sass-loader/lib/loader.js!./ActionButton.scss", function() {
		var newContent = require("!!../../../wc2018-tournament-overview-widget/node_modules/css-loader/index.js??ref--0-oneOf-0-1!../../../wc2018-tournament-overview-widget/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-0-2!../../../wc2018-tournament-overview-widget/node_modules/sass-loader/lib/loader.js!./ActionButton.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".uZj6i4U9O3MMrINZHFPlO {\n  position: relative;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-align-items: center;\n          align-items: center;\n  height: 36px;\n  padding: 0 10px; }\n\n._1bf6zE4OxcblYBXK3HLUI2 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n  opacity: 0;\n  border: none;\n  background-color: currentColor;\n  cursor: pointer;\n  transition: background-color 0.2s ease-out, color 0.2s ease-out; }\n  ._1bf6zE4OxcblYBXK3HLUI2:hover {\n    opacity: 0.12; }\n  ._1bf6zE4OxcblYBXK3HLUI2:active {\n    opacity: 0.4; }\n  ._1bf6zE4OxcblYBXK3HLUI2:focus {\n    outline: 0 !important; }\n  ._1bf6zE4OxcblYBXK3HLUI2[disabled]:hover, ._1bf6zE4OxcblYBXK3HLUI2[disabled]:active {\n    opacity: 0;\n    cursor: not-allowed; }\n\n._2lhE-XvHWLDC7ko81HxnkK {\n  font-weight: bold;\n  background-color: transparent;\n  pointer-events: none;\n  font-size: 14px;\n  text-align: left; }\n", ""]);

// exports
exports.locals = {
	"container": "uZj6i4U9O3MMrINZHFPlO",
	"button": "_1bf6zE4OxcblYBXK3HLUI2",
	"buttonText": "_2lhE-XvHWLDC7ko81HxnkK"
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconHeader = __webpack_require__(83);

var _IconHeader2 = _interopRequireDefault(_IconHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconHeader = function IconHeader(_ref) {
   var title = _ref.title,
       subtitle = _ref.subtitle,
       children = _ref.children,
       _ref$localStyles = _ref.localStyles,
       localStyles = _ref$localStyles === undefined ? [] : _ref$localStyles;

   var iconStyles = [_IconHeader2.default.icon];
   if (localStyles.length > 0) {
      localStyles.forEach(function (style) {
         return iconStyles.push(style);
      });
   }
   return _react2.default.createElement(
      'header',
      { className: 'KambiWidget-card-text-color KambiWidget-card-border-color KambiWidget-font ' + _IconHeader2.default.header },
      _react2.default.createElement(
         'div',
         { className: iconStyles.join(' ') },
         children
      ),
      _react2.default.createElement(
         'div',
         { className: _IconHeader2.default.container },
         _react2.default.createElement(
            'div',
            { className: _IconHeader2.default.title, title: title },
            title
         ),
         _react2.default.createElement(
            'div',
            { className: _IconHeader2.default.subtitle, title: subtitle },
            subtitle
         )
      )
   );
};

/**
 * @property [localStyles] {Array} Array of local styles as strings
 * @property [children] {ReactElement} Header's icon markup
 * @property title {string} Header's title
 * @property [subtitle] {string} Header's subtitle
 */
exports.default = IconHeader;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(84);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../wc2018-tournament-overview-widget/node_modules/css-loader/index.js??ref--0-oneOf-0-1!../../../wc2018-tournament-overview-widget/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-0-2!../../../wc2018-tournament-overview-widget/node_modules/sass-loader/lib/loader.js!./IconHeader.scss", function() {
		var newContent = require("!!../../../wc2018-tournament-overview-widget/node_modules/css-loader/index.js??ref--0-oneOf-0-1!../../../wc2018-tournament-overview-widget/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-0-2!../../../wc2018-tournament-overview-widget/node_modules/sass-loader/lib/loader.js!./IconHeader.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "._3raLlwa2BrOOchrAQS2GfD {\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  font-size: 12px;\n  line-height: 36px;\n  height: 64px;\n  overflow: hidden;\n  position: relative;\n  display: -webkit-flex;\n  display: flex;\n  padding-left: 16px;\n  -webkit-align-items: center;\n          align-items: center; }\n\n.VJtLfK_oVG8KUevJYTx7V {\n  height: 32px;\n  margin-right: 12px;\n  width: 32px; }\n\n._3AN66Bqw6QtjrHQIth8LVv {\n  max-width: calc(100% - 62px); }\n\n.SppkLjIH7TsMJ2qtOJNh5 {\n  line-height: 16px;\n  max-height: 16px;\n  min-height: 16px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  font-size: 16px;\n  font-weight: bold;\n  text-transform: uppercase; }\n\n._2Fi9ATy5xuDj4xh7SIXcFm {\n  line-height: 16px;\n  max-height: 16px;\n  min-height: 16px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden; }\n", ""]);

// exports
exports.locals = {
	"header": "_3raLlwa2BrOOchrAQS2GfD",
	"icon": "VJtLfK_oVG8KUevJYTx7V",
	"container": "_3AN66Bqw6QtjrHQIth8LVv",
	"title": "SppkLjIH7TsMJ2qtOJNh5",
	"subtitle": "_2Fi9ATy5xuDj4xh7SIXcFm"
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Carousel = __webpack_require__(86);

var _Carousel2 = _interopRequireDefault(_Carousel);

var _helpers = __webpack_require__(88);

var _chevron_left = __webpack_require__(90);

var _chevron_left2 = _interopRequireDefault(_chevron_left);

var _chevron_right = __webpack_require__(91);

var _chevron_right2 = _interopRequireDefault(_chevron_right);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Carousel = function (_Component) {
  _inherits(Carousel, _Component);

  function Carousel(props) {
    _classCallCheck(this, Carousel);

    var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

    _this.cloneItems = function (children) {
      var firstChild = children.slice(0, 1);
      var lastChild = children.slice(children.length - 1);

      return [].concat(_toConsumableArray(lastChild), _toConsumableArray(children), _toConsumableArray(firstChild));
    };

    _this.decrement = function () {
      _this.moveTo(_this.state.currentPosition - 1);
    };

    _this.increment = function () {
      _this.moveTo(_this.state.currentPosition + 1);
    };

    _this.moveTo = function (index) {
      var _this$state = _this.state,
          itemWidth = _this$state.itemWidth,
          isMouseEntered = _this$state.isMouseEntered,
          carouselItems = _this$state.carouselItems,
          disabled = _this$state.disabled;


      var translate = (index + 1) * itemWidth;

      _this.setState({
        disabled: true,
        currentPosition: index,
        translate3d: -translate,
        cssAnimation: {
          transition: 'transform ' + _this.props.transitionDuration + 'ms ' + _this.props.cssEase
        }
      }, _this.recalculateChecker);

      // don't reset auto play when stop on hover is enabled, doing so will trigger a call to auto play more than once
      // and will result in the interval function not being cleared correctly.
      if (_this.props.autoPlay && !isMouseEntered) {
        _this.resetAutoPlay();
      }
    };

    _this.recalculateChecker = function () {
      var _this$state2 = _this.state,
          currentPosition = _this$state2.currentPosition,
          carouselItems = _this$state2.carouselItems;

      var recalc = currentPosition < 0 || currentPosition >= carouselItems.length;

      window.clearTimeout();
      window.setTimeout(function () {
        recalc ? _this.calculateSliderPos() : _this.onSlideChange();
      }, _this.props.transitionDuration);
    };

    _this.onSlideChange = function () {
      _this.props.onCarouselChange(_this.state.selectedItem);
      _this.setState(_extends({}, _this.state, { disabled: false }));
    };

    _this.changeItem = function (e) {
      var value = e.target.value;

      _this.moveTo(value);
    };

    _this.renderCarouselItems = function (item, index) {
      var carouselItems = _this.state.carouselItems;


      var cloned = index < 1 || index > carouselItems.length + 1 - 1;

      var className = [_Carousel2.default['carousel-item'], cloned && _this.props.infinite === false ? _Carousel2.default['carousel-item--cloned'] : ''].join(' ');

      return _react2.default.createElement(
        'li',
        {
          key: 'item-' + index,
          className: className,
          id: 'item-' + index,
          ref: function ref(el) {
            return _this['item' + index] = el;
          },
          style: _this.itemStyles(index),
          onClick: function onClick() {
            return _this.props.onCarouselItemClick(index);
          },
          onKeyPress: function onKeyPress(e) {
            console.log(e);
          }
        },
        item
      );
    };

    _this.onIndicatorMouseEnter = function (e) {
      var value = e.target.value;

      _this.setState({
        selectedIndicator: value
      });
    };

    _this.onIndicatorMouseLeave = function (e) {
      _this.setState({ selectedIndicator: null });
    };

    _this.onArrowMouseEnter = function (e, action) {
      var key = action + 'ArrowHover';
      _this.setState(_defineProperty({}, key, true));
    };

    _this.onArrowMouseLeave = function (e, action) {
      var key = action + 'ArrowHover';
      _this.setState(_defineProperty({}, key, false));
    };

    _this.renderArrows = function (action) {
      var isPrev = action === 'previous';
      var isHover = _this.state[action + 'ArrowHover'];

      var gradientDirection = isPrev ? 'to right' : 'to left';

      var style = {
        button: {
          background: 'linear-gradient(\n               ' + gradientDirection + ',\n               rgba(0, 0, 0, 0.2),\n               rgba(0, 0, 0, 0)\n            )'
        },
        icon: {
          transition: 'transform 0.3s ease',
          opacity: isHover ? 1 : 0.4,
          transform: isHover ? 'scale(1.2) translateZ(0)' : 'scale(1) translateZ(0)',
          backfaceVisibility: 'hidden',
          mixBlendMode: 'normal'
        }
      };

      return _react2.default.createElement(
        'button',
        {
          type: 'button',
          className: [_Carousel2.default['arrow'], _Carousel2.default['arrow--' + action]].join(' '),
          onClick: isPrev ? _this.decrement : _this.increment,
          style: style.button,
          disabled: _this.state.disabled,
          onMouseEnter: function onMouseEnter(e) {
            return _this.onArrowMouseEnter(e, action);
          },
          onMouseLeave: function onMouseLeave(e) {
            return _this.onArrowMouseLeave(e, action);
          }
        },
        _react2.default.createElement(
          'div',
          { height: '44px', width: '44px', style: style.icon },
          action === 'previous' ? (0, _chevron_left2.default)() : (0, _chevron_right2.default)()
        )
      );
    };

    _this.autoPlayTimer = null;
    _this.changeTimer = null;

    _this.state = {
      isMouseEntered: false,
      currentPosition: props.selectedItem,
      lastPosition: null,
      carouselItems: [],
      cssAnimation: {},
      translate3d: null,
      initialized: false,
      fromChildren: false,
      disabled: false,
      previousArrowHover: false,
      nextArrowHover: false,
      selectedIndicator: null
    };
    return _this;
  }

  _createClass(Carousel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          autoPlay = _props.autoPlay;


      if (children == null || children.length === 0) {
        return null;
      }

      this.setupCarousel();
      _helpers.resize.add(function () {
        return _this2.setupCarousel();
      });

      if (autoPlay) {
        this.setupAutoPlay();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (!this.state.initialized) {
        this.setupCarousel();
      }

      if (this.props.autoPlay) {
        this.resetAutoPlay();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.changeTimer);
    }
  }, {
    key: 'setupCarousel',
    value: function setupCarousel() {
      var _this3 = this;

      var children = this.props.children;
      var currentPosition = this.state.currentPosition;


      var itemWidth = this.sliderNode.getBoundingClientRect().width;
      var currentIndex = Math.min(currentPosition ? Math.abs(Math.ceil(currentPosition)) : 0, children.length - 1);

      this.setState({
        currentPosition: currentIndex,
        initialized: true,
        carouselItems: children,
        clones: this.cloneItems(children),
        translate3d: -itemWidth * (1 + currentIndex),
        itemWidth: itemWidth
      }, function () {
        return _this3.props.initializedCarousel(true);
      });
    }
  }, {
    key: 'setupCarouselItems',
    value: function setupCarouselItems() {
      var items = this.props.children;
      this.setState({
        lastPosition: items.length,
        carouselItems: items,
        fromChildren: true
      });
    }
  }, {
    key: 'setupAutoPlay',
    value: function setupAutoPlay() {
      var _this4 = this;

      this.autoPlay();
      var carouselWrapper = this.carouselWrapper;

      if (this.props.stopOnHover && carouselWrapper) {
        // Stop mobile propagation
        // Required so touch/tap events don't cause mouseEnter/mouseLeave to fire
        var mobileTouch = function isTouch() {
          try {
            document.createEvent('TouchEvent');
            return true;
          } catch (e) {
            return false;
          }
        }();

        if (!mobileTouch) {
          carouselWrapper.addEventListener('mouseenter', function (ev) {
            _this4.stopOnHover();
          }, false);

          carouselWrapper.addEventListener('mouseleave', function (ev) {
            _this4.startOnHoverLeave();
          });
        }
      }
    }
  }, {
    key: 'autoPlay',
    value: function autoPlay() {
      var _this5 = this;

      this.autoPlayTimer = setTimeout(function () {
        _this5.increment();
      }, this.props.intervalDuration);
    }
  }, {
    key: 'clearAutoPlay',
    value: function clearAutoPlay() {
      clearTimeout(this.autoPlayTimer);
      clearTimeout(this.calcCheckTimer);
      clearTimeout(this.changeTimer);
    }
  }, {
    key: 'resetAutoPlay',
    value: function resetAutoPlay() {
      this.clearAutoPlay();
      this.autoPlay();
    }
  }, {
    key: 'stopOnHover',
    value: function stopOnHover() {
      this.setState({
        isMouseEntered: true
      });
      this.props.onCarouselMouseEnter(Date.now(), this.state.carouselItems[this.state.currentPosition].itemId);
      if (this.props.autoPlay) {
        this.clearAutoPlay();
      }
    }
  }, {
    key: 'startOnHoverLeave',
    value: function startOnHoverLeave() {
      this.setState({
        isMouseEntered: false
      });
      this.props.onCarouselMouseLeave(Date.now(), this.state.carouselItems[this.state.currentPosition].itemId);
      if (this.props.autoPlay) {
        this.autoPlay();
      }
    }
  }, {
    key: 'calculateSliderPos',
    value: function calculateSliderPos() {
      var _state = this.state,
          currentPosition = _state.currentPosition,
          carouselItems = _state.carouselItems,
          itemWidth = _state.itemWidth;


      var newPos = currentPosition < 0 ? carouselItems.length - 1 : 0;

      this.setState({
        currentPosition: newPos,
        translate3d: -itemWidth * (newPos === 0 ? 1 : carouselItems.length),
        disabled: false,
        cssAnimation: {
          transition: 'transform 0ms ' + this.props.cssEase
        }
      }, this.onSlideChange);
    }
  }, {
    key: 'setSliderStyles',
    value: function setSliderStyles() {
      var _this6 = this;

      var currentPosition = -this.state.currentPosition * 100 + '%';
      var animationObject = {};

      if (this.props.animationType === 'slide') {
        animationObject = {
          transform: 'translate3d(' + currentPosition + ', 0, 0)',
          transition: this.props.transitionDuration + 'ms ' + this.props.cssEase
        };

        this.setState({
          cssAnimation: animationObject
        }, function () {
          return _this6.props.onCarouselChange(_this6.state.currentPosition);
        });

        if (this.state.currentPosition === this.state.lastPosition) {
          // Reset the current slide position back to 0% with no transition
          clearTimeout(this.endTimer);
          this.endTimer = setTimeout(function () {
            _this6.setState({
              cssAnimation: {
                transform: 'translate3d(0px, 0, 0)',
                transition: 'none'
              }
            });
          }, this.props.transitionDuration);
        }
      } else if (this.props.animationType === 'fade') {
        this.changeTimer = setTimeout(function () {
          _this6.props.onCarouselChange(_this6.state.currentPosition);
        }, this.props.transitionDuration);
      } else {
        console.error('You used the animation value ' + this.props.animationType + ' which is not currently supported by the carousel. Please use one of \'slide\' or \'fade\'.');
      }
    }
  }, {
    key: 'itemStyles',
    value: function itemStyles(index) {
      var _state2 = this.state,
          itemWidth = _state2.itemWidth,
          currentPosition = _state2.currentPosition;

      var style = {
        width: itemWidth + 'px'
      };

      if (this.props.animationType === 'fade') {
        style = {
          left: -index * itemWidth + 'px',
          opacity: 0,
          zIndex: -1,
          transition: 'opacity ' + this.props.transitionDuration + 'ms ' + this.props.cssEase
        };

        if (currentPosition === index) {
          style = Object.assign({}, style, {
            opacity: 1,
            zIndex: 1
          });
        }
      }

      return style;
    }
  }, {
    key: 'getActiveDotIndex',
    value: function getActiveDotIndex() {
      var _state3 = this.state,
          carouselItems = _state3.carouselItems,
          currentPosition = _state3.currentPosition;


      var currentIndex = currentPosition + 1;
      var itemLength = carouselItems.length;

      if (currentIndex < 1) {
        return itemLength - 1;
      } else if (currentIndex > itemLength) {
        return 0;
      } else {
        return currentIndex - 1;
      }
    }
  }, {
    key: 'renderIndicators',
    value: function renderIndicators() {
      var _this7 = this;

      var carouselItems = this.state.carouselItems;


      if (!this.props.showIndicators) {
        return null;
      }

      return _react2.default.createElement(
        'ul',
        {
          className: _Carousel2.default['control-dots'],
          style: this.props.indicatorUlStyles
        },
        carouselItems.map(function (item, index) {
          var liClassName = _this7.getActiveDotIndex() !== index ? _Carousel2.default.dot : [_Carousel2.default.dot, _Carousel2.default['dot-selected']].join(' ');

          var style = _this7.state.selectedIndicator === index ? {
            opacity: 1,
            transform: 'scale(1.2) translateZ(0)',
            backfaceVisibility: 'hidden',
            mixBlendMode: 'normal'
          } : {};

          return _react2.default.createElement('li', {
            className: liClassName,
            onClick: _this7.changeItem,
            onMouseEnter: _this7.onIndicatorMouseEnter,
            onMouseLeave: _this7.onIndicatorMouseLeave,
            value: index,
            key: index,
            style: Object.assign({}, style, _this7.props.indicatorLiStyles)
          });
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this8 = this;

      var _props2 = this.props,
          showArrows = _props2.showArrows,
          showIndicators = _props2.showIndicators,
          height = _props2.height;
      var _state4 = this.state,
          carouselItems = _state4.carouselItems,
          cssAnimation = _state4.cssAnimation,
          clones = _state4.clones,
          translate3d = _state4.translate3d;


      var items = clones || carouselItems;

      var sliderStyle = void 0;
      if (this.props.animationType === 'fade') {
        sliderStyle = {
          transform: 'translate3d(0px, 0, 0)'
        };
      } else {
        sliderStyle = _extends({}, cssAnimation, {
          transform: 'translate3d(' + translate3d + 'px, 0, 0)'
        });
      }

      return _react2.default.createElement(
        'div',
        {
          className: _Carousel2.default['glomo-carousel'],
          ref: function ref(el) {
            return _this8.carouselWrapper = el;
          },
          style: { height: height }
        },
        _react2.default.createElement(
          'div',
          { className: _Carousel2.default['carousel-wrapper'], style: { height: height } },
          _react2.default.createElement(
            'div',
            { className: _Carousel2.default['slider-wrapper'] },
            _react2.default.createElement(
              'ul',
              {
                className: _Carousel2.default.slider,
                style: _extends({}, sliderStyle, {
                  height: '100%'
                }),
                ref: function ref(node) {
                  return _this8.sliderNode = node;
                }
              },
              items.map(this.renderCarouselItems)
            )
          )
        ),
        showArrows && this.renderArrows('previous'),
        showArrows && this.renderArrows('next'),
        showIndicators && this.renderIndicators()
      );
    }
  }]);

  return Carousel;
}(_react.Component);

Carousel.defaultProps = {
  showIndicators: true,
  infinite: true,
  showArrows: true,
  infiniteLoop: true,
  legendClassName: null,
  wrapperClassName: null,
  cssEase: 'ease',
  animationType: 'slide',
  selectedItem: 0,
  height: '0px',
  autoPlay: false,
  stopOnHover: false,
  intervalDuration: 3500,
  transitionDuration: 800,
  redirectCallback: null,
  indicatorLiStyles: {},
  indicatorUlStyles: {},
  onCarouselChange: function onCarouselChange() {},
  onCarouselMouseEnter: function onCarouselMouseEnter() {},
  onCarouselMouseLeave: function onCarouselMouseLeave() {},
  onCarouselItemClick: function onCarouselItemClick() {},
  initializedCarousel: function initializedCarousel() {},
  imageLoaded: function imageLoaded() {}
};
exports.default = Carousel;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(87);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../wc2018-tournament-overview-widget/node_modules/css-loader/index.js??ref--0-oneOf-0-1!../../../wc2018-tournament-overview-widget/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-0-2!../../../wc2018-tournament-overview-widget/node_modules/sass-loader/lib/loader.js!./Carousel.scss", function() {
		var newContent = require("!!../../../wc2018-tournament-overview-widget/node_modules/css-loader/index.js??ref--0-oneOf-0-1!../../../wc2018-tournament-overview-widget/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-0-2!../../../wc2018-tournament-overview-widget/node_modules/sass-loader/lib/loader.js!./Carousel.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".qBQGlVNA8Ihv9dLuTRF-G {\n  position: relative; }\n  .qBQGlVNA8Ihv9dLuTRF-G * {\n    font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 12px;\n    line-height: 24px;\n    -webkit-tap-highlight-color: transparent;\n    -webkit-text-size-adjust: 100%;\n    -webkit-touch-callout: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -o-user-select: none;\n    -webkit-user-select: none; }\n  .qBQGlVNA8Ihv9dLuTRF-G *,\n  .qBQGlVNA8Ihv9dLuTRF-G *::after,\n  .qBQGlVNA8Ihv9dLuTRF-G *::before {\n    box-sizing: border-box; }\n  .qBQGlVNA8Ihv9dLuTRF-G a {\n    text-decoration: none; }\n  .qBQGlVNA8Ihv9dLuTRF-G strong {\n    font-weight: bold; }\n  ._2F7IVWcxLkq2b6ZtFyIBYT {\n    box-sizing: border-box;\n    height: 0;\n    overflow-y: hidden; }\n  .qBQGlVNA8Ihv9dLuTRF-G ._2-jpjTMoNkgv8NPZcW68kB {\n    -webkit-transform: none !important;\n            transform: none !important; }\n  .qBQGlVNA8Ihv9dLuTRF-G input:matches([type='button'], [type='submit'], [type='reset']),\n  .qBQGlVNA8Ihv9dLuTRF-G input[type='file']::-webkit-file-upload-button,\n  .qBQGlVNA8Ihv9dLuTRF-G button {\n    margin: initial; }\n\nhtml._2nQTYQl1_-wxgC8DVVI-7c {\n  min-width: 100%;\n  width: 1px;\n  margin: 0;\n  padding: 0;\n  width: 100%; }\n  html._2nQTYQl1_-wxgC8DVVI-7c body {\n    margin: 0;\n    padding: 0;\n    width: 100%; }\n\n._2Tt2ucAsjLW4aJSJrM4h6w {\n  box-sizing: border-box;\n  position: relative;\n  width: 100%;\n  margin: auto;\n  overflow: hidden; }\n\n.zrosIXJ0JoKHgmE77necP {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden; }\n  .zrosIXJ0JoKHgmE77necP ._1G5SFY1jBN9UWSNdniZU85 {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    width: 100%;\n    transition: height 0.15s ease-in;\n    height: 100%;\n    position: relative;\n    white-space: nowrap; }\n    .zrosIXJ0JoKHgmE77necP ._1G5SFY1jBN9UWSNdniZU85 a {\n      display: block;\n      height: 100%;\n      width: 100%; }\n    .zrosIXJ0JoKHgmE77necP ._1G5SFY1jBN9UWSNdniZU85 ._3YqZQ-4irFDVAKDSLMWyFQ {\n      height: 100%;\n      width: 100%;\n      cursor: pointer; }\n    .zrosIXJ0JoKHgmE77necP ._1G5SFY1jBN9UWSNdniZU85 ._1b6WUXDDezjZ1JfzK-DElE {\n      background-size: cover;\n      vertical-align: top;\n      display: inline-block;\n      pointer-events: none; }\n    .zrosIXJ0JoKHgmE77necP ._1G5SFY1jBN9UWSNdniZU85 img {\n      height: 100%; }\n\n._37lMea-1vuvLSrGE0SWaBz {\n  display: -webkit-flex;\n  display: flex;\n  position: relative;\n  list-style: none;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0; }\n  ._37lMea-1vuvLSrGE0SWaBz ._2ABADNJ7-PFvs37lttzEk4 {\n    -webkit-flex: 1 100%;\n            flex: 1 100%;\n    -webkit-flex-direction: column;\n            flex-direction: column;\n    -webkit-flex-flow: column;\n            flex-flow: column;\n    position: relative;\n    min-width: 100%;\n    height: 100%; }\n    ._37lMea-1vuvLSrGE0SWaBz ._1_TSFLtMC3yBLo9K0gc9Bn {\n      opacity: 0;\n      visibility: hidden; }\n\n._3jsJsC7YExFswiyGbzJtVh {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-justify-content: center;\n          justify-content: center;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  color: #fff;\n  height: auto; }\n  ._3jsJsC7YExFswiyGbzJtVh ._388Y1yLHHTQ6bpURwey92M {\n    font-size: 1.2rem;\n    font-weight: 800; }\n  ._3jsJsC7YExFswiyGbzJtVh button {\n    max-width: 33.33%; }\n\n._38MAw6YqEzniq-X_4L7ZUR {\n  position: absolute;\n  bottom: 0;\n  margin: 44px 0;\n  text-align: center;\n  width: 100%;\n  padding: 0; }\n\n._5dY1grBr9TzDfsMTG_EW4 {\n  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9);\n  background-color: #fff;\n  mix-blend-mode: difference;\n  border-radius: 50%;\n  width: 8px;\n  height: 8px;\n  cursor: pointer;\n  display: inline-block;\n  margin: 0 12px;\n  opacity: 0.6;\n  transition: all 0.2s ease; }\n  ._3ZOADoDCrG6IV7Jvdy0nXV, ._3ZOADoDCrG6IV7Jvdy0nXV:hover {\n    opacity: 1;\n    -webkit-transform: scale(1.4) translateZ(0);\n            transform: scale(1.4) translateZ(0);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    mix-blend-mode: normal; }\n\n._1dRjr1Q-gNuz9EsMf4JoVC {\n  position: absolute;\n  height: 100%;\n  top: 0;\n  width: 5%;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center;\n  cursor: pointer;\n  z-index: 10;\n  transition: all 0.3s ease-in;\n  border: none;\n  margin: 0;\n  padding: 0;\n  overflow: visible;\n  background: transparent;\n  /* inherit font & color from ancestor */\n  color: inherit;\n  font: inherit;\n  /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */\n  line-height: normal;\n  /* Corrects font smoothing for webkit */\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  /* Corrects inability to style clickable `input` types in iOS */\n  -webkit-appearance: none;\n  /* Remove excess padding and border in Firefox 4+ */ }\n  ._1fzeQUSvgceJ99HqiGI8Ym {\n    -webkit-justify-content: flex-start;\n            justify-content: flex-start;\n    left: 0%; }\n  .um3WyBgub9HePROkk35od {\n    -webkit-justify-content: flex-end;\n            justify-content: flex-end;\n    right: 0%; }\n  ._1dRjr1Q-gNuz9EsMf4JoVC:focus {\n    outline: 0; }\n  ._1dRjr1Q-gNuz9EsMf4JoVC::-moz-focus-inner {\n    border: 0;\n    padding: 0; }\n", ""]);

// exports
exports.locals = {
	"rootElement": "qBQGlVNA8Ihv9dLuTRF-G",
	"rootElementEmbedded": "_2F7IVWcxLkq2b6ZtFyIBYT",
	"KambiWidget-outcome__odds-wrapper": "_2-jpjTMoNkgv8NPZcW68kB",
	"notEmbedded": "_2nQTYQl1_-wxgC8DVVI-7c",
	"glomo-carousel": "_2Tt2ucAsjLW4aJSJrM4h6w",
	"carousel-wrapper": "zrosIXJ0JoKHgmE77necP",
	"slider-wrapper": "_1G5SFY1jBN9UWSNdniZU85",
	"pseudo-anchor": "_3YqZQ-4irFDVAKDSLMWyFQ",
	"img": "_1b6WUXDDezjZ1JfzK-DElE",
	"slider": "_37lMea-1vuvLSrGE0SWaBz",
	"carousel-item": "_2ABADNJ7-PFvs37lttzEk4",
	"carousel-item--cloned": "_1_TSFLtMC3yBLo9K0gc9Bn",
	"carousel-legend-wrapper": "_3jsJsC7YExFswiyGbzJtVh",
	"carousel-legend": "_388Y1yLHHTQ6bpURwey92M",
	"control-dots": "_38MAw6YqEzniq-X_4L7ZUR",
	"dot": "_5dY1grBr9TzDfsMTG_EW4",
	"dot-selected": "_3ZOADoDCrG6IV7Jvdy0nXV",
	"arrow": "_1dRjr1Q-gNuz9EsMf4JoVC",
	"arrow--previous": "_1fzeQUSvgceJ99HqiGI8Ym",
	"arrow--next": "um3WyBgub9HePROkk35od"
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _resizeHelper = __webpack_require__(89);

Object.defineProperty(exports, 'resize', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_resizeHelper).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});
var resizeHelper = function resizeHelper() {
   var callbacks = [];
   var running = false;

   // fired on resize event
   var resize = function resize() {
      if (!running) {
         running = true;

         if (window.requestAnimationFrame) {
            window.requestAnimationFrame(runCallbacks);
         } else {
            setTimeout(function () {
               return runCallbacks();
            }, 66);
         }
      }
   };

   // run the actual callbacks
   var runCallbacks = function runCallbacks() {
      callbacks.forEach(function (callback) {
         callback();
      });

      running = false;
   };

   // adds callback to loop
   var addCallback = function addCallback(callback) {
      if (callback) {
         callbacks.push(callback);
      }
   };

   return {
      // public method to add additional callback
      add: function add(callback) {
         if (!callbacks.length) {
            window.addEventListener("resize", resize);
         }
         addCallback(callback);
      }
   };
};

var resize = resizeHelper();
exports.default = resize;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ChevronLeft;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ChevronLeft() {
  return _react2.default.createElement(
    "svg",
    {
      fill: "#fff",
      height: "24",
      viewBox: "0 0 24 24",
      width: "24",
      xmlns: "http://www.w3.org/2000/svg"
    },
    _react2.default.createElement("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" }),
    _react2.default.createElement("path", { d: "M0 0h24v24H0z", fill: "none" })
  );
}

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ChevronRight;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ChevronRight() {
  return _react2.default.createElement(
    "svg",
    {
      fill: "#fff",
      height: "24",
      viewBox: "0 0 24 24",
      width: "24",
      xmlns: "http://www.w3.org/2000/svg"
    },
    _react2.default.createElement("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" }),
    _react2.default.createElement("path", { d: "M0 0h24v24H0z", fill: "none" })
  );
}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BlendedBackground = __webpack_require__(93);

var _BlendedBackground2 = _interopRequireDefault(_BlendedBackground);

var _kambiWidgetCoreLibrary = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Displays a background image which is blended with actual operator's color theme.
 */
var BlendedBackground = function (_Component) {
  _inherits(BlendedBackground, _Component);

  function BlendedBackground() {
    _classCallCheck(this, BlendedBackground);

    return _possibleConstructorReturn(this, (BlendedBackground.__proto__ || Object.getPrototypeOf(BlendedBackground)).apply(this, arguments));
  }

  _createClass(BlendedBackground, [{
    key: 'cssRender',
    value: function cssRender() {
      var style = this.props.blendWithOperatorColor ? { backgroundColor: 'currentColor' } : {};
      return _react2.default.createElement(
        'div',
        {
          className: _BlendedBackground2.default.backgroundContainer + ' KambiWidget-primary-color',
          style: style
        },
        _react2.default.createElement('div', {
          className: _BlendedBackground2.default.background,
          style: {
            backgroundImage: 'url(' + this.props.backgroundUrl + ')',
            backgroundRepeat: 'no-repeat',
            mixBlendMode: 'multiply',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }
        })
      );
    }
  }, {
    key: 'svgRender',
    value: function svgRender() {
      return _react2.default.createElement(
        'div',
        { className: _BlendedBackground2.default.backgroundContainer },
        _react2.default.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            xmlnsXlink: 'http://www.w3.org/1999/xlink',
            className: _BlendedBackground2.default.background
          },
          _react2.default.createElement(
            'defs',
            null,
            _react2.default.createElement(
              'filter',
              { id: 'filter' },
              _react2.default.createElement('feImage', {
                result: 'slide2',
                x: '0',
                y: '0',
                width: '100%',
                preserveAspectRatio: 'xMidYMid slice',
                xlinkHref: this.props.backgroundUrl
              }),
              this.props.blendWithOperatorColor ? _react2.default.createElement('feBlend', { in2: 'SourceGraphic', 'in': 'slide2', mode: 'multiply' }) : null
            )
          ),
          _react2.default.createElement('rect', {
            className: 'KambiWidget-primary-color ' + _BlendedBackground2.default.blendRect,
            x: '0',
            y: '0',
            filter: 'url(#filter)',
            width: '100%',
            height: '100%'
          })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      /*
        as of firefox 55.0, firefox has a bug with the way we render the svg
        as a workaround we render the same thing using the new CSS mixBlendMode
        property. This property is not supported in IE so the main way to render
        this should still be using the SVG render
        */
      if (_kambiWidgetCoreLibrary.coreLibrary.browser === 'firefox') {
        return this.cssRender();
      } else {
        return this.svgRender();
      }
    }
  }]);

  return BlendedBackground;
}(_react.Component);

/**
 * @property backgroundUrl {String} provides path to backgroundImage
 * @property blendWidthOperatorColor {Boolean} determines if background should be blended with operator color. (Normally not wanted if providing own background image)
 */


BlendedBackground.defaultProps = {
  blendWithOperatorColor: true
};

exports.default = BlendedBackground;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(94);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../wc2018-tournament-overview-widget/node_modules/css-loader/index.js??ref--0-oneOf-0-1!../../../wc2018-tournament-overview-widget/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-0-2!../../../wc2018-tournament-overview-widget/node_modules/sass-loader/lib/loader.js!./BlendedBackground.scss", function() {
		var newContent = require("!!../../../wc2018-tournament-overview-widget/node_modules/css-loader/index.js??ref--0-oneOf-0-1!../../../wc2018-tournament-overview-widget/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-0-2!../../../wc2018-tournament-overview-widget/node_modules/sass-loader/lib/loader.js!./BlendedBackground.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "._3ZAx0ginew6KuqdMienSFa {\n  -webkit-filter: brightness(90%);\n          filter: brightness(90%);\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  display: block;\n  width: 100%;\n  min-width: 100%;\n  min-height: 100%;\n  overflow: hidden;\n  -moz-transform: translateZ(1px); }\n\n._2O1d37hgrB5ivZc3adeMUR {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  display: block;\n  width: 100%;\n  min-width: 100%;\n  min-height: 100%;\n  overflow: hidden; }\n\n._2mvMwq5gix8KYGTWQQGdHb {\n  fill: currentColor; }\n", ""]);

// exports
exports.locals = {
	"backgroundContainer": "_3ZAx0ginew6KuqdMienSFa",
	"background": "_2O1d37hgrB5ivZc3adeMUR",
	"blendRect": "_2mvMwq5gix8KYGTWQQGdHb"
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(96);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--0-oneOf-0-1!../../../node_modules/postcss-loader/lib/index.js??ref--0-oneOf-0-2!../../../node_modules/sass-loader/lib/loader.js!./TournamentOverviewWidget.scss", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js??ref--0-oneOf-0-1!../../../node_modules/postcss-loader/lib/index.js??ref--0-oneOf-0-2!../../../node_modules/sass-loader/lib/loader.js!./TournamentOverviewWidget.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "._3FbLxDaeily_PZYHSb37qy {\n  color: white;\n  position: relative;\n  padding: 12px 0; }\n\n._2fRFC_Wtu7ggU_YN2DTX1c {\n  display: -webkit-flex;\n  display: flex;\n  max-width: 850px;\n  min-width: 650px;\n  margin: 0 auto 1rem auto;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  padding: 0 2rem; }\n", ""]);

// exports
exports.locals = {
	"widget": "_3FbLxDaeily_PZYHSb37qy",
	"topArea": "_2fRFC_Wtu7ggU_YN2DTX1c"
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _kambiWidgetCoreLibrary = __webpack_require__(4);

var _kambiWidgetComponents = __webpack_require__(9);

var _Event = __webpack_require__(98);

var _Event2 = _interopRequireDefault(_Event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Translation helper
 * @type {function}
 */
var t = _kambiWidgetCoreLibrary.translationModule.getTranslation.bind(_kambiWidgetCoreLibrary.translationModule);

/**
 * Pads with leading 0s to ensure number is two digit.
 * @param {number} n Number to pad
 */
var pad = function pad(n) {
  return n < 10 ? '0' + n : n;
};

/**
 * Capitalizes first letter of a string.
 * @param {string} s Given string
 */
var cap = function cap(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

var Event = function (_Component) {
  _inherits(Event, _Component);

  /**
   * Constructs.
   * @param {object} props Component properties
   */
  function Event(props) {
    _classCallCheck(this, Event);

    var _this = _possibleConstructorReturn(this, (Event.__proto__ || Object.getPrototypeOf(Event)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  /**
   * Navigates to event page
   */


  _createClass(Event, [{
    key: 'onClick',
    value: function onClick() {
      if (this.props.event.openForLiveBetting === true) {
        _kambiWidgetCoreLibrary.widgetModule.navigateToLiveEvent(this.props.event.id);
      } else {
        _kambiWidgetCoreLibrary.widgetModule.navigateToEvent(this.props.event.id);
      }
    }

    /**
     * Removes images with broken urls
     */

  }, {
    key: 'handleBrokenUrl',
    value: function handleBrokenUrl(imgRef) {
      this[imgRef].style.display = 'none';
    }

    /**
     * Formatted start date.
     * @returns {string}
     */

  }, {
    key: 'render',


    /**
     * Renders component.
     * @returns {XML}
     */
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: _Event2.default.general },
        _react2.default.createElement(
          'div',
          { className: _Event2.default.header, onClick: this.onClick },
          _react2.default.createElement(
            'div',
            { className: _Event2.default.start },
            this.startDate,
            '\xA0'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _Event2.default.teams, onClick: this.onClick },
          _react2.default.createElement(
            'div',
            { className: [_Event2.default.team, _Event2.default.home].join(' ') },
            this.props.homeFlag && _react2.default.createElement('img', {
              className: _Event2.default.flag,
              src: this.props.homeFlag,
              alt: '',
              ref: function ref(img) {
                _this2.imgHome = img;
              },
              onError: function onError() {
                return _this2.handleBrokenUrl('imgHome');
              }
            }),
            _react2.default.createElement(
              'span',
              { className: _Event2.default.name },
              this.props.event.homeName
            )
          ),
          this.props.liveData && _react2.default.createElement(
            'div',
            { className: _Event2.default.score },
            this.props.liveData.score.home,
            _react2.default.createElement(
              'small',
              null,
              '-'
            ),
            this.props.liveData.score.away
          ),
          _react2.default.createElement(
            'div',
            { className: [_Event2.default.team, _Event2.default.away].join(' ') },
            _react2.default.createElement(
              'span',
              { className: _Event2.default.name },
              this.props.event.awayName
            ),
            this.props.awayFlag && _react2.default.createElement('img', {
              className: _Event2.default.flag,
              src: this.props.awayFlag,
              alt: '',
              ref: function ref(img) {
                _this2.imgAway = img;
              },
              onError: function onError() {
                return _this2.handleBrokenUrl('imgAway');
              }
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: '' + _Event2.default.outcomes },
          !this.props.liveData && this.props.outcomes.map(function (outcome) {
            return _react2.default.createElement(_kambiWidgetComponents.OutcomeButton, {
              key: outcome.id,
              outcome: outcome,
              event: _this2.props.event,
              outlineStyle: true,
              updateOdds: false
            });
          }),
          this.props.liveData && _react2.default.createElement(_kambiWidgetComponents.OutcomeButtonUI, {
            event: this.props.event,
            label: _react2.default.createElement(
              'span',
              { className: _Event2.default.liveLabel },
              _react2.default.createElement(
                'em',
                null,
                t('Live')
              ),
              t('Right Now')
            ),
            onClick: this.onClick,
            outlineStyle: true
          })
        )
      );
    }
  }, {
    key: 'startDate',
    get: function get() {
      var now = new Date(),
          date = new Date(this.props.event.start);

      var soonStr = function () {
        if (now.getDate() === date.getDate()) {
          return t('today');
        } else if (now.getDate() === date.getDate() - 1) {
          return t('tomorrow');
        } else {
          return '';
        }
      }();

      return soonStr + ' ' + pad(date.getDate()) + ' ' +
      // @todo: add translations for months
      cap(t('month' + date.getMonth()).slice(0, 3)) + ' ' + pad(date.getHours()) + ':' + pad(date.getMinutes());
    }
  }]);

  return Event;
}(_react.Component);

/**
  * event {object} contains event metadata
  * outcomes {array} event outcomes
  * liveData {object} live metadata
  * flagBaseUrl {string} url path to flag icons
  */


Event.defaultProps = {
  outcomes: [],
  liveData: null,
  flagBaseUrl: 'assets/icons/'
};

exports.default = Event;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(99);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--0-oneOf-0-1!../../../node_modules/postcss-loader/lib/index.js??ref--0-oneOf-0-2!../../../node_modules/sass-loader/lib/loader.js!./Event.scss", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js??ref--0-oneOf-0-1!../../../node_modules/postcss-loader/lib/index.js??ref--0-oneOf-0-2!../../../node_modules/sass-loader/lib/loader.js!./Event.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "._2TRWRdgPI9dJ0WW4OMezAT {\n  position: relative; }\n  ._2TRWRdgPI9dJ0WW4OMezAT * {\n    font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 12px;\n    line-height: 24px;\n    -webkit-tap-highlight-color: transparent;\n    -webkit-text-size-adjust: 100%;\n    -webkit-touch-callout: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -o-user-select: none;\n    -webkit-user-select: none; }\n  ._2TRWRdgPI9dJ0WW4OMezAT *,\n  ._2TRWRdgPI9dJ0WW4OMezAT *::after,\n  ._2TRWRdgPI9dJ0WW4OMezAT *::before {\n    box-sizing: border-box; }\n  ._2TRWRdgPI9dJ0WW4OMezAT a {\n    text-decoration: none; }\n  ._2TRWRdgPI9dJ0WW4OMezAT strong {\n    font-weight: bold; }\n  ._20SS28B3wlntnJzONVodJ0 {\n    box-sizing: border-box;\n    height: 0;\n    overflow-y: hidden; }\n  ._2TRWRdgPI9dJ0WW4OMezAT ._3hCDxQ7KGWjWACV_5FLrSW {\n    -webkit-transform: none !important;\n            transform: none !important; }\n  ._2TRWRdgPI9dJ0WW4OMezAT input:matches([type='button'], [type='submit'], [type='reset']),\n  ._2TRWRdgPI9dJ0WW4OMezAT input[type='file']::-webkit-file-upload-button,\n  ._2TRWRdgPI9dJ0WW4OMezAT button {\n    margin: initial; }\n\nhtml._29lD-LA1i0H3IaKTLbgRvH {\n  min-width: 100%;\n  width: 1px;\n  margin: 0;\n  padding: 0;\n  width: 100%; }\n  html._29lD-LA1i0H3IaKTLbgRvH body {\n    margin: 0;\n    padding: 0;\n    width: 100%; }\n\n*:last-child > ._3-odHunguDZIT9dHmFF29U {\n  border-right: 0; }\n\n._3-odHunguDZIT9dHmFF29U {\n  border-right: 1px dotted rgba(255, 255, 255, 0.4);\n  margin-top: 6px;\n  max-width: 350px;\n  width: 350px;\n  height: 120px; }\n  @media (max-width: 320px) {\n    ._3-odHunguDZIT9dHmFF29U {\n      max-width: 267px;\n      width: 267px;\n      -webkit-flex: 1 0 267px;\n              flex: 1 0 267px; } }\n  @media (min-width: 321px) and (max-width: 480px) {\n    ._3-odHunguDZIT9dHmFF29U {\n      max-width: 300px;\n      width: 300px;\n      -webkit-flex: 1 0 300px;\n              flex: 1 0 300px; } }\n  @media (min-width: 481px) and (max-width: 568px) {\n    ._3-odHunguDZIT9dHmFF29U {\n      max-width: 334px;\n      width: 334px;\n      -webkit-flex: 1 0 334px;\n              flex: 1 0 334px; } }\n\n.DC7dFScaZtIUxM27dKnaT {\n  display: -webkit-flex;\n  display: flex;\n  padding-top: 6px;\n  opacity: .9;\n  font-size: 12px;\n  line-height: 24px; }\n  .DC7dFScaZtIUxM27dKnaT ._2u-vzJa294rE4akQDb2Lvp {\n    -webkit-flex: 1;\n            flex: 1;\n    padding-left: 16px;\n    -webkit-justify-content: flex-start;\n            justify-content: flex-start;\n    -webkit-align-items: center;\n            align-items: center;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n\n._2ZGrkQkADN6UCnHD2zeyBV {\n  padding: 6px 16px 12px 16px;\n  -webkit-flex: 1;\n          flex: 1;\n  display: -webkit-flex;\n  display: flex; }\n  ._2ZGrkQkADN6UCnHD2zeyBV ._29A9JKLUCvdCZgU1LA_YsU {\n    -webkit-flex: 1 1 auto;\n            flex: 1 1 auto;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-align-items: center;\n            align-items: center;\n    line-height: 24px;\n    overflow: hidden; }\n    ._2ZGrkQkADN6UCnHD2zeyBV ._29A9JKLUCvdCZgU1LA_YsU ._2XYs7xPaAkd3R13TG5JmhU {\n      width: 24px;\n      height: 24px; }\n    ._2ZGrkQkADN6UCnHD2zeyBV ._29A9JKLUCvdCZgU1LA_YsU ._3cgZi1U0EBvX4OE-J-pLgQ {\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      font-size: 14px;\n      line-height: 24px; }\n    ._2ZGrkQkADN6UCnHD2zeyBV ._29A9JKLUCvdCZgU1LA_YsU._3QLR5_N8Xmm9fMcPQQtCWS {\n      -webkit-justify-content: flex-start;\n              justify-content: flex-start;\n      margin-right: 6px; }\n      ._2ZGrkQkADN6UCnHD2zeyBV ._29A9JKLUCvdCZgU1LA_YsU._3QLR5_N8Xmm9fMcPQQtCWS ._2XYs7xPaAkd3R13TG5JmhU {\n        margin-right: 12px; }\n    ._2ZGrkQkADN6UCnHD2zeyBV ._29A9JKLUCvdCZgU1LA_YsU._1FbptNEDPo-XN4vFgTHBlD {\n      -webkit-justify-content: flex-end;\n              justify-content: flex-end;\n      margin-left: 6px; }\n      ._2ZGrkQkADN6UCnHD2zeyBV ._29A9JKLUCvdCZgU1LA_YsU._1FbptNEDPo-XN4vFgTHBlD ._2XYs7xPaAkd3R13TG5JmhU {\n        margin-left: 12px; }\n  ._2ZGrkQkADN6UCnHD2zeyBV .JxGfh5nVOlonjTs7h9TFH {\n    -webkit-flex: 0 0 auto;\n            flex: 0 0 auto;\n    line-height: 24px;\n    font-size: 24px; }\n    ._2ZGrkQkADN6UCnHD2zeyBV .JxGfh5nVOlonjTs7h9TFH small {\n      font-size: 14px;\n      padding: 0 6px;\n      vertical-align: top; }\n\n._2RLG4Me5TbicXjfYUxBfH2 {\n  display: -webkit-flex;\n  display: flex;\n  margin-left: 16px;\n  margin-right: 16px; }\n  ._2RLG4Me5TbicXjfYUxBfH2 > * {\n    margin-left: 3px;\n    -webkit-flex: 1;\n            flex: 1; }\n    ._2RLG4Me5TbicXjfYUxBfH2 > *:first-child {\n      margin-left: 0; }\n  ._2RLG4Me5TbicXjfYUxBfH2 ._3Fk-e8i32ASMw-NrXPAtBA {\n    text-transform: uppercase; }\n    ._2RLG4Me5TbicXjfYUxBfH2 ._3Fk-e8i32ASMw-NrXPAtBA em {\n      color: red;\n      padding-right: 6px; }\n", ""]);

// exports
exports.locals = {
	"rootElement": "_2TRWRdgPI9dJ0WW4OMezAT",
	"rootElementEmbedded": "_20SS28B3wlntnJzONVodJ0",
	"KambiWidget-outcome__odds-wrapper": "_3hCDxQ7KGWjWACV_5FLrSW",
	"notEmbedded": "_29lD-LA1i0H3IaKTLbgRvH",
	"general": "_3-odHunguDZIT9dHmFF29U",
	"header": "DC7dFScaZtIUxM27dKnaT",
	"start": "_2u-vzJa294rE4akQDb2Lvp",
	"teams": "_2ZGrkQkADN6UCnHD2zeyBV",
	"team": "_29A9JKLUCvdCZgU1LA_YsU",
	"flag": "_2XYs7xPaAkd3R13TG5JmhU",
	"name": "_3cgZi1U0EBvX4OE-J-pLgQ",
	"home": "_3QLR5_N8Xmm9fMcPQQtCWS",
	"away": "_1FbptNEDPo-XN4vFgTHBlD",
	"score": "JxGfh5nVOlonjTs7h9TFH",
	"outcomes": "_2RLG4Me5TbicXjfYUxBfH2",
	"liveLabel": "_3Fk-e8i32ASMw-NrXPAtBA"
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ArrowButton = __webpack_require__(101);

var _ArrowButton2 = _interopRequireDefault(_ArrowButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArrowSvg = function ArrowSvg() {
  return _react2.default.createElement(
    'svg',
    {
      width: '22px',
      height: '36px',
      viewBox: '0 860 420 500',
      version: '1.1',
      xmlns: 'http://www.w3.org/2000/svg',
      fill: '#fff'
    },
    _react2.default.createElement('path', {
      id: 'arrowLeft',
      transform: 'scale(1, -1) translate(0, -1500)',
      d: 'M358.286 640q0-7.429-5.714-13.143l-224.571-224.571 224.571-224.571q5.714-5.714 5.714-13.143t-5.714-13.143l-28.571-28.571q-5.714-5.714-13.143-5.714t-13.143 5.714l-266.286 266.286q-5.714 5.714-5.714 13.143t5.714 13.143l266.286 266.286q5.714 5.714 13.143 5.714t13.143-5.714l28.571-28.571q5.714-5.714 5.714-13.143z'
    })
  );
};

var ArrowButton = function (_Component) {
  _inherits(ArrowButton, _Component);

  function ArrowButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ArrowButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ArrowButton.__proto__ || Object.getPrototypeOf(ArrowButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isHovered: false
    }, _this.updateHoveredState = function (bool) {
      _this.setState({
        isHovered: bool
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ArrowButton, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          disabled = _props.disabled,
          onClick = _props.onClick,
          type = _props.type;

      var iconStyles = [_ArrowButton2.default.icon];
      var shadowStyles = [_ArrowButton2.default.shadow];

      if (this.state.isHovered) {
        iconStyles.push(_ArrowButton2.default.iconHover);
      }
      if (!disabled) {
        shadowStyles.push(_ArrowButton2.default.shadowHover);
      }

      return _react2.default.createElement(
        'div',
        { className: _ArrowButton2.default[type] },
        _react2.default.createElement('div', { className: shadowStyles.join(' ') }),
        _react2.default.createElement(
          'button',
          {
            className: iconStyles.join(' '),
            disabled: disabled,
            onClick: onClick,
            onMouseEnter: function onMouseEnter() {
              return _this2.updateHoveredState(true);
            },
            onMouseLeave: function onMouseLeave() {
              return _this2.updateHoveredState(false);
            }
          },
          _react2.default.createElement(ArrowSvg, null)
        )
      );
    }
  }]);

  return ArrowButton;
}(_react.Component);

ArrowButton.defaultProps = {
  disabled: false
};

exports.default = ArrowButton;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(102);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--0-oneOf-0-1!../../../node_modules/postcss-loader/lib/index.js??ref--0-oneOf-0-2!../../../node_modules/sass-loader/lib/loader.js!./ArrowButton.scss", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js??ref--0-oneOf-0-1!../../../node_modules/postcss-loader/lib/index.js??ref--0-oneOf-0-2!../../../node_modules/sass-loader/lib/loader.js!./ArrowButton.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "._2BGlvm1kLFck9O2GFU4ylE,\n._24d6f3pjhfa71-59bfd2pl {\n  position: absolute;\n  bottom: 50%;\n  width: 22px;\n  height: 36px; }\n  ._2BGlvm1kLFck9O2GFU4ylE ._2qHBrX_10eszn1kY7ZQlrc,\n  ._24d6f3pjhfa71-59bfd2pl ._2qHBrX_10eszn1kY7ZQlrc {\n    width: 22px;\n    height: 36px;\n    transition: opacity 0.3s;\n    background-size: contain;\n    background-color: transparent;\n    opacity: 0.5;\n    margin: 0 12px;\n    border: none;\n    outline: none !important;\n    cursor: pointer; }\n    ._2BGlvm1kLFck9O2GFU4ylE ._3W2YIhSeKbRO_TPVEBd0uZ,\n    ._24d6f3pjhfa71-59bfd2pl ._3W2YIhSeKbRO_TPVEBd0uZ {\n      opacity: 1; }\n    ._2BGlvm1kLFck9O2GFU4ylE ._2qHBrX_10eszn1kY7ZQlrc[disabled],\n    ._24d6f3pjhfa71-59bfd2pl ._2qHBrX_10eszn1kY7ZQlrc[disabled] {\n      opacity: 0;\n      cursor: default; }\n  ._2BGlvm1kLFck9O2GFU4ylE :focus,\n  ._24d6f3pjhfa71-59bfd2pl :focus {\n    outline: 0; }\n  ._2BGlvm1kLFck9O2GFU4ylE ._2H3-ctXxk6ebsY51K5KFfE,\n  ._24d6f3pjhfa71-59bfd2pl ._2H3-ctXxk6ebsY51K5KFfE {\n    position: absolute;\n    z-index: 0;\n    width: 200px;\n    pointer-events: none;\n    height: 150px;\n    opacity: 0; }\n    ._2BGlvm1kLFck9O2GFU4ylE ._2Ab9NRn620baTk2u6lLl_T,\n    ._24d6f3pjhfa71-59bfd2pl ._2Ab9NRn620baTk2u6lLl_T {\n      opacity: 1; }\n\n._2BGlvm1kLFck9O2GFU4ylE {\n  left: 0;\n  text-align: left; }\n  ._2BGlvm1kLFck9O2GFU4ylE ._2H3-ctXxk6ebsY51K5KFfE {\n    background-image: radial-gradient(ellipse 200px 135px at 0px 130px, #000, rgba(0, 0, 0, 0));\n    left: -20px; }\n\n._24d6f3pjhfa71-59bfd2pl {\n  right: 24px; }\n  ._24d6f3pjhfa71-59bfd2pl ._2qHBrX_10eszn1kY7ZQlrc {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  ._24d6f3pjhfa71-59bfd2pl ._2H3-ctXxk6ebsY51K5KFfE {\n    background-image: radial-gradient(ellipse 200px 135px at 200px 130px, #000, rgba(0, 0, 0, 0));\n    right: -24px; }\n", ""]);

// exports
exports.locals = {
	"left": "_2BGlvm1kLFck9O2GFU4ylE",
	"right": "_24d6f3pjhfa71-59bfd2pl",
	"icon": "_2qHBrX_10eszn1kY7ZQlrc",
	"iconHover": "_3W2YIhSeKbRO_TPVEBd0uZ",
	"shadow": "_2H3-ctXxk6ebsY51K5KFfE",
	"shadowHover": "_2Ab9NRn620baTk2u6lLl_T"
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ItemContainer = __webpack_require__(104);

var _ItemContainer2 = _interopRequireDefault(_ItemContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns DOM element's width (in pixels)
 * @param {HTMLElement} el DOM element
 * @returns number|null
 */
var getWidth = function getWidth(el) {
  return el ? el.offsetWidth : null;
};

var ItemContainer = function ItemContainer(_ref) {
  var children = _ref.children,
      selected = _ref.selected,
      onClick = _ref.onClick,
      onWidth = _ref.onWidth;
  return (
    // onClick is not wired in order to disable scroll on click

    _react2.default.createElement(
      'div',
      {
        className: _ItemContainer2.default.item,
        ref: onWidth ? function (el) {
          return onWidth(getWidth(el));
        } : undefined
      },
      children
    )
  );
};

exports.default = ItemContainer;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(105);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--0-oneOf-0-1!../../../node_modules/postcss-loader/lib/index.js??ref--0-oneOf-0-2!../../../node_modules/sass-loader/lib/loader.js!./ItemContainer.scss", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js??ref--0-oneOf-0-1!../../../node_modules/postcss-loader/lib/index.js??ref--0-oneOf-0-2!../../../node_modules/sass-loader/lib/loader.js!./ItemContainer.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "._2LrNf_NvtrBLjlIOAsdrUx {\n  cursor: pointer; }\n", ""]);

// exports
exports.locals = {
	"item": "_2LrNf_NvtrBLjlIOAsdrUx"
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _kambiWidgetCoreLibrary = __webpack_require__(4);

var _TournamentLogo = __webpack_require__(107);

var _TournamentLogo2 = _interopRequireDefault(_TournamentLogo);

var _mobile = __webpack_require__(20);

var _mobile2 = _interopRequireDefault(_mobile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var t = _kambiWidgetCoreLibrary.translationModule.getTranslation.bind(_kambiWidgetCoreLibrary.translationModule);

var TournamentLogo = function TournamentLogo(_ref) {
  var logoUrl = _ref.logoUrl,
      scrolledListHasHorizontalSpaceLeft = _ref.scrolledListHasHorizontalSpaceLeft;

  var className = _TournamentLogo2.default.general;
  if (scrolledListHasHorizontalSpaceLeft) {
    className = className + ' ' + _TournamentLogo2.default.scrolledListHasHorizontalSpaceLeft;
  } else if (!(0, _mobile2.default)()) {
    className = className + ' ' + _TournamentLogo2.default.desktop;
  }
  return _react2.default.createElement(
    'div',
    { className: className },
    _react2.default.createElement('i', {
      className: 'kw-custom-logo-large-type',
      style: {
        backgroundImage: 'url("' + logoUrl + '")'
      }
    }),
    _react2.default.createElement(
      'div',
      { className: _TournamentLogo2.default.tournament },
      _react2.default.createElement(
        'p',
        null,
        t('wc2018').toUpperCase()
      ),
      _react2.default.createElement(
        'p',
        null,
        t('russia').toUpperCase()
      )
    )
  );
};

TournamentLogo.defaultProps = {
  logoName: 'football'
};

exports.default = TournamentLogo;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(108);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--0-oneOf-0-1!../../../node_modules/postcss-loader/lib/index.js??ref--0-oneOf-0-2!../../../node_modules/sass-loader/lib/loader.js!./TournamentLogo.scss", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js??ref--0-oneOf-0-1!../../../node_modules/postcss-loader/lib/index.js??ref--0-oneOf-0-2!../../../node_modules/sass-loader/lib/loader.js!./TournamentLogo.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "._1_MkP3PA1jHXnmX_bn5HQL {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center;\n  height: 120px;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  overflow: visible;\n  z-index: 1;\n  max-width: 150px; }\n  ._1_MkP3PA1jHXnmX_bn5HQL i {\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center center;\n    height: 80px;\n    width: 80px;\n    min-width: 80px;\n    -webkit-flex-basis: 100%;\n            flex-basis: 100%; }\n  ._1_MkP3PA1jHXnmX_bn5HQL._27uBOUWcyrddEFzxleqpmJ {\n    width: 0;\n    max-width: 0;\n    direction: rtl; }\n  ._1_MkP3PA1jHXnmX_bn5HQL._31OPsGzjcgB0sq77SYh-KS {\n    height: 100%;\n    -webkit-align-self: center;\n            align-self: center;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: row;\n            flex-direction: row;\n    text-align: center;\n    -webkit-justify-content: center;\n            justify-content: center;\n    min-width: 180px;\n    max-width: 180px; }\n    ._1_MkP3PA1jHXnmX_bn5HQL._31OPsGzjcgB0sq77SYh-KS i {\n      -webkit-flex-basis: 100%;\n              flex-basis: 100%; }\n  ._1_MkP3PA1jHXnmX_bn5HQL ._2b6V_BcVeKd3eVt4yj0zdl {\n    -webkit-flex-basis: 100%;\n            flex-basis: 100%;\n    text-align: center; }\n    ._1_MkP3PA1jHXnmX_bn5HQL ._2b6V_BcVeKd3eVt4yj0zdl p {\n      margin: 0;\n      line-height: 1.4; }\n      ._1_MkP3PA1jHXnmX_bn5HQL ._2b6V_BcVeKd3eVt4yj0zdl p:first-child {\n        font-weight: 600;\n        font-size: 1rem;\n        margin-top: 0.3rem;\n        letter-spacing: 0.7px; }\n", ""]);

// exports
exports.locals = {
	"general": "_1_MkP3PA1jHXnmX_bn5HQL",
	"scrolledListHasHorizontalSpaceLeft": "_27uBOUWcyrddEFzxleqpmJ",
	"desktop": "_31OPsGzjcgB0sq77SYh-KS",
	"tournament": "_2b6V_BcVeKd3eVt4yj0zdl"
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _List = __webpack_require__(110);

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = function List(_ref) {
  var children = _ref.children,
      title = _ref.title,
      navText = _ref.navText,
      _ref$showNavLink = _ref.showNavLink,
      showNavLink = _ref$showNavLink === undefined ? false : _ref$showNavLink,
      handleClick = _ref.handleClick;
  return _react2.default.createElement(
    'div',
    { className: _List2.default.general },
    _react2.default.createElement(
      'h6',
      { className: _List2.default.title },
      title
    ),
    _react2.default.createElement(
      'ul',
      null,
      children
    ),
    showNavLink && _react2.default.createElement(
      'p',
      { className: _List2.default.nav, onClick: handleClick },
      navText
    )
  );
};

/**
  * @param children {node} list items
  * @param title {string} title of list widget 
 */
exports.default = List;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(111);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--0-oneOf-0-1!../../../node_modules/postcss-loader/lib/index.js??ref--0-oneOf-0-2!../../../node_modules/sass-loader/lib/loader.js!./List.scss", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js??ref--0-oneOf-0-1!../../../node_modules/postcss-loader/lib/index.js??ref--0-oneOf-0-2!../../../node_modules/sass-loader/lib/loader.js!./List.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".wDvL50TME26qYqnWOAgPk {\n  width: 240px;\n  padding: 0 .5rem;\n  -webkit-animation: _2bDeUOSoClUr5yixEra70k ease-in 1;\n          animation: _2bDeUOSoClUr5yixEra70k ease-in 1;\n  -webkit-animation-duration: .2s;\n          animation-duration: .2s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n  .wDvL50TME26qYqnWOAgPk ul {\n    padding: 0;\n    margin-bottom: 0; }\n\n@-webkit-keyframes _2bDeUOSoClUr5yixEra70k {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes _2bDeUOSoClUr5yixEra70k {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n._1kJBs82w7ChLgA0ApKeKEt {\n  margin: 0;\n  letter-spacing: .7px; }\n\n._3aGEDRiR4QaCmsbQ4OU419 {\n  text-decoration: underline;\n  opacity: .8;\n  cursor: pointer;\n  margin-top: .8rem; }\n  ._3aGEDRiR4QaCmsbQ4OU419:hover {\n    opacity: 1; }\n", ""]);

// exports
exports.locals = {
	"general": "wDvL50TME26qYqnWOAgPk",
	"fadeIn": "_2bDeUOSoClUr5yixEra70k",
	"title": "_1kJBs82w7ChLgA0ApKeKEt",
	"nav": "_3aGEDRiR4QaCmsbQ4OU419"
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _kambiWidgetComponents = __webpack_require__(9);

var _ListItem = __webpack_require__(113);

var _ListItem2 = _interopRequireDefault(_ListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListItem = function (_Component) {
  _inherits(ListItem, _Component);

  function ListItem() {
    _classCallCheck(this, ListItem);

    return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
  }

  _createClass(ListItem, [{
    key: 'handleBrokenUrl',


    /**
     * Removes images with broken urls
     */
    value: function handleBrokenUrl() {
      this.img.style.display = 'none';
    }

    /**
     * Renders widget.
     * @returns {XML}
     */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          participant = _props.participant,
          flagUrl = _props.flagUrl,
          outcome = _props.outcome,
          event = _props.event;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'li',
          { className: _ListItem2.default.row },
          flagUrl ? _react2.default.createElement(
            'div',
            { className: _ListItem2.default.flag, ref: function ref(img) {
                _this2.img = img;
              } },
            _react2.default.createElement('img', {
              role: 'presentation',
              src: flagUrl,
              onError: function onError() {
                return _this2.handleBrokenUrl();
              }
            })
          ) : null,
          _react2.default.createElement(
            'span',
            { className: _ListItem2.default.participant },
            participant
          ),
          _react2.default.createElement(
            'div',
            { className: _ListItem2.default.button },
            _react2.default.createElement(_kambiWidgetComponents.OutcomeButton, { outcome: outcome, label: false, outlineStyle: true, event: event })
          )
        )
      );
    }
  }]);

  return ListItem;
}(_react.Component);

/**
* @participant { string } the participant in the game
* @flagUrl { string } url to the participant flag (if any, otherwise null)
* @outcome { object } containing outcome data for bet
  */


exports.default = ListItem;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(114);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--0-oneOf-0-1!../../../node_modules/postcss-loader/lib/index.js??ref--0-oneOf-0-2!../../../node_modules/sass-loader/lib/loader.js!./ListItem.scss", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js??ref--0-oneOf-0-1!../../../node_modules/postcss-loader/lib/index.js??ref--0-oneOf-0-2!../../../node_modules/sass-loader/lib/loader.js!./ListItem.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".HlyS56wv8KW5NlPoBKAwu {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center;\n  height: 40px;\n  cursor: pointer;\n  list-style: none;\n  -webkit-justify-content: space-between;\n          justify-content: space-between; }\n  .HlyS56wv8KW5NlPoBKAwu .pYcYH5HN3wupsADHT366i {\n    line-height: 1;\n    padding-right: 12px;\n    -webkit-flex-grow: 0;\n            flex-grow: 0;\n    -webkit-flex-shrink: 0;\n            flex-shrink: 0;\n    -webkit-flex-basis: 36px;\n            flex-basis: 36px; }\n    .HlyS56wv8KW5NlPoBKAwu .pYcYH5HN3wupsADHT366i img {\n      width: 24px;\n      height: 24px; }\n  .HlyS56wv8KW5NlPoBKAwu ._3G9o31X5qir5V8IlatdsnH {\n    font-size: 14px;\n    -webkit-flex-grow: 1;\n            flex-grow: 1;\n    -webkit-flex-shrink: 0;\n            flex-shrink: 0;\n    -webkit-flex-basis: auto;\n            flex-basis: auto;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    display: block;\n    max-width: 110px;\n    padding-right: 2px; }\n    @media screen and (min-width: 768px) {\n      .HlyS56wv8KW5NlPoBKAwu ._3G9o31X5qir5V8IlatdsnH {\n        max-width: 140px; } }\n  .HlyS56wv8KW5NlPoBKAwu ._3suVQfSdqoWgYy9YOP-Sdo {\n    -webkit-flex-grow: 0;\n            flex-grow: 0;\n    -webkit-flex-shrink: 0;\n            flex-shrink: 0;\n    -webkit-flex-basis: 60px;\n            flex-basis: 60px;\n    display: -webkit-flex;\n    display: flex;\n    height: 36px; }\n", ""]);

// exports
exports.locals = {
	"row": "HlyS56wv8KW5NlPoBKAwu",
	"flag": "pYcYH5HN3wupsADHT366i",
	"participant": "_3G9o31X5qir5V8IlatdsnH",
	"button": "_3suVQfSdqoWgYy9YOP-Sdo"
};

/***/ })
/******/ ]);