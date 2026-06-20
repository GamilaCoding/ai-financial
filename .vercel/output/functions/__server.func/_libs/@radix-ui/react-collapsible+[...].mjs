import { o as __toESM, t as __commonJSMin } from "../../_runtime.mjs";
import { o as require_react } from "../@ai-sdk/react+[...].mjs";
import { t as composeEventHandlers } from "../radix-ui__primitive.mjs";
//#region node_modules/react/cjs/react-jsx-runtime.production.js
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_jsx_runtime_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
		var key = null;
		void 0 !== maybeKey && (key = "" + maybeKey);
		void 0 !== config.key && (key = "" + config.key);
		if ("key" in config) {
			maybeKey = {};
			for (var propName in config) "key" !== propName && (maybeKey[propName] = config[propName]);
		} else maybeKey = config;
		config = maybeKey.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== config ? config : null,
			props: maybeKey
		};
	}
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.jsx = jsxProd;
	exports.jsxs = jsxProd;
}));
//#endregion
//#region node_modules/react/jsx-runtime.js
var require_jsx_runtime = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_jsx_runtime_production();
}));
//#endregion
//#region node_modules/react-dom/cjs/react-dom.production.js
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_dom_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = require_react();
	function formatProdErrorMessage(code) {
		var url = "https://react.dev/errors/" + code;
		if (1 < arguments.length) {
			url += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var i = 2; i < arguments.length; i++) url += "&args[]=" + encodeURIComponent(arguments[i]);
		}
		return "Minified React error #" + code + "; visit " + url + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function noop() {}
	var Internals = {
		d: {
			f: noop,
			r: function() {
				throw Error(formatProdErrorMessage(522));
			},
			D: noop,
			C: noop,
			L: noop,
			m: noop,
			X: noop,
			S: noop,
			M: noop
		},
		p: 0,
		findDOMNode: null
	}, REACT_PORTAL_TYPE = Symbol.for("react.portal");
	function createPortal$1(children, containerInfo, implementation) {
		var key = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
		return {
			$$typeof: REACT_PORTAL_TYPE,
			key: null == key ? null : "" + key,
			children,
			containerInfo,
			implementation
		};
	}
	var ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function getCrossOriginStringAs(as, input) {
		if ("font" === as) return "";
		if ("string" === typeof input) return "use-credentials" === input ? input : "";
	}
	exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals;
	exports.createPortal = function(children, container) {
		var key = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
		if (!container || 1 !== container.nodeType && 9 !== container.nodeType && 11 !== container.nodeType) throw Error(formatProdErrorMessage(299));
		return createPortal$1(children, container, null, key);
	};
	exports.flushSync = function(fn) {
		var previousTransition = ReactSharedInternals.T, previousUpdatePriority = Internals.p;
		try {
			if (ReactSharedInternals.T = null, Internals.p = 2, fn) return fn();
		} finally {
			ReactSharedInternals.T = previousTransition, Internals.p = previousUpdatePriority, Internals.d.f();
		}
	};
	exports.preconnect = function(href, options) {
		"string" === typeof href && (options ? (options = options.crossOrigin, options = "string" === typeof options ? "use-credentials" === options ? options : "" : void 0) : options = null, Internals.d.C(href, options));
	};
	exports.prefetchDNS = function(href) {
		"string" === typeof href && Internals.d.D(href);
	};
	exports.preinit = function(href, options) {
		if ("string" === typeof href && options && "string" === typeof options.as) {
			var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin), integrity = "string" === typeof options.integrity ? options.integrity : void 0, fetchPriority = "string" === typeof options.fetchPriority ? options.fetchPriority : void 0;
			"style" === as ? Internals.d.S(href, "string" === typeof options.precedence ? options.precedence : void 0, {
				crossOrigin,
				integrity,
				fetchPriority
			}) : "script" === as && Internals.d.X(href, {
				crossOrigin,
				integrity,
				fetchPriority,
				nonce: "string" === typeof options.nonce ? options.nonce : void 0
			});
		}
	};
	exports.preinitModule = function(href, options) {
		if ("string" === typeof href) if ("object" === typeof options && null !== options) {
			if (null == options.as || "script" === options.as) {
				var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
				Internals.d.M(href, {
					crossOrigin,
					integrity: "string" === typeof options.integrity ? options.integrity : void 0,
					nonce: "string" === typeof options.nonce ? options.nonce : void 0
				});
			}
		} else options ?? Internals.d.M(href);
	};
	exports.preload = function(href, options) {
		if ("string" === typeof href && "object" === typeof options && null !== options && "string" === typeof options.as) {
			var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
			Internals.d.L(href, as, {
				crossOrigin,
				integrity: "string" === typeof options.integrity ? options.integrity : void 0,
				nonce: "string" === typeof options.nonce ? options.nonce : void 0,
				type: "string" === typeof options.type ? options.type : void 0,
				fetchPriority: "string" === typeof options.fetchPriority ? options.fetchPriority : void 0,
				referrerPolicy: "string" === typeof options.referrerPolicy ? options.referrerPolicy : void 0,
				imageSrcSet: "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
				imageSizes: "string" === typeof options.imageSizes ? options.imageSizes : void 0,
				media: "string" === typeof options.media ? options.media : void 0
			});
		}
	};
	exports.preloadModule = function(href, options) {
		if ("string" === typeof href) if (options) {
			var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
			Internals.d.m(href, {
				as: "string" === typeof options.as && "script" !== options.as ? options.as : void 0,
				crossOrigin,
				integrity: "string" === typeof options.integrity ? options.integrity : void 0
			});
		} else Internals.d.m(href);
	};
	exports.requestFormReset = function(form) {
		Internals.d.r(form);
	};
	exports.unstable_batchedUpdates = function(fn, a) {
		return fn(a);
	};
	exports.useFormState = function(action, initialState, permalink) {
		return ReactSharedInternals.H.useFormState(action, initialState, permalink);
	};
	exports.useFormStatus = function() {
		return ReactSharedInternals.H.useHostTransitionStatus();
	};
	exports.version = "19.2.7";
}));
//#endregion
//#region node_modules/react-dom/index.js
var require_react_dom = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function checkDCE() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") return;
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
		} catch (err) {
			console.error(err);
		}
	}
	checkDCE();
	module.exports = require_react_dom_production();
}));
//#endregion
//#region node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var import_jsx_runtime = require_jsx_runtime();
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
function setRef$1(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
function composeRefs(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef$1(ref, node);
			if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup == "function") cleanup();
				else setRef$1(refs[i], null);
			}
		};
	};
}
function useComposedRefs(...refs) {
	return import_react.useCallback(composeRefs(...refs), refs);
}
require_react_dom();
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
	const Slot2 = import_react.forwardRef((props, forwardedRef) => {
		let { children, ...slotProps } = props;
		let slottableElement = null;
		let hasSlottable = false;
		const newChildren = [];
		if (isLazyComponent(children) && typeof use === "function") children = use(children._payload);
		import_react.Children.forEach(children, (maybeSlottable) => {
			if (isSlottable(maybeSlottable)) {
				hasSlottable = true;
				const slottable = maybeSlottable;
				let child = "child" in slottable.props ? slottable.props.child : slottable.props.children;
				if (isLazyComponent(child) && typeof use === "function") child = use(child._payload);
				slottableElement = getSlottableElementFromSlottable(slottable, child);
				newChildren.push(slottableElement?.props?.children);
			} else newChildren.push(maybeSlottable);
		});
		if (slottableElement) slottableElement = import_react.cloneElement(slottableElement, void 0, newChildren);
		else if (!hasSlottable && import_react.Children.count(children) === 1 && import_react.isValidElement(children)) slottableElement = children;
		const slottableElementRef = slottableElement ? getElementRef$1(slottableElement) : void 0;
		const composedRef = useComposedRefs(forwardedRef, slottableElementRef);
		if (!slottableElement) {
			if (children || children === 0) throw new Error(hasSlottable ? createSlottableError(ownerName) : createSlotError(ownerName));
			return children;
		}
		const mergedProps = mergeProps(slotProps, slottableElement.props ?? {});
		if (slottableElement.type !== import_react.Fragment) mergedProps.ref = forwardedRef ? composedRef : slottableElementRef;
		return import_react.cloneElement(slottableElement, mergedProps);
	});
	Slot2.displayName = `${ownerName}.Slot`;
	return Slot2;
}
var Slot = /* @__PURE__ */ createSlot("Slot");
var SLOTTABLE_IDENTIFIER = Symbol.for("radix.slottable");
var getSlottableElementFromSlottable = (slottable, child) => {
	if ("child" in slottable.props) {
		const child2 = slottable.props.child;
		if (!import_react.isValidElement(child2)) return null;
		return import_react.cloneElement(child2, void 0, slottable.props.children(child2.props.children));
	}
	return import_react.isValidElement(child) ? child : null;
};
function mergeProps(slotProps, childProps) {
	const overrideProps = { ...childProps };
	for (const propName in childProps) {
		const slotPropValue = slotProps[propName];
		const childPropValue = childProps[propName];
		if (/^on[A-Z]/.test(propName)) {
			if (slotPropValue && childPropValue) overrideProps[propName] = (...args) => {
				const result = childPropValue(...args);
				slotPropValue(...args);
				return result;
			};
			else if (slotPropValue) overrideProps[propName] = slotPropValue;
		} else if (propName === "style") overrideProps[propName] = {
			...slotPropValue,
			...childPropValue
		};
		else if (propName === "className") overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
	}
	return {
		...slotProps,
		...overrideProps
	};
}
function getElementRef$1(element) {
	let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
	let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.ref;
	getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
	mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.props.ref;
	return element.props.ref || element.ref;
}
function isSlottable(child) {
	return import_react.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
var REACT_LAZY_TYPE = Symbol.for("react.lazy");
function isLazyComponent(element) {
	return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE && "_payload" in element && isPromiseLike(element._payload);
}
function isPromiseLike(value) {
	return typeof value === "object" && value !== null && "then" in value;
}
var createSlotError = (ownerName) => {
	return `${ownerName} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`;
};
var createSlottableError = (ownerName) => {
	return `${ownerName} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`;
};
var use = import_react[" use ".trim().toString()];
//#endregion
//#region node_modules/@radix-ui/react-context/dist/index.mjs
function createContextScope(scopeName, createContextScopeDeps = []) {
	let defaultContexts = [];
	function createContext3(rootComponentName, defaultContext) {
		const BaseContext = import_react.createContext(defaultContext);
		BaseContext.displayName = rootComponentName + "Context";
		const index = defaultContexts.length;
		defaultContexts = [...defaultContexts, defaultContext];
		const Provider = (props) => {
			const { scope, children, ...context } = props;
			const Context = scope?.[scopeName]?.[index] || BaseContext;
			const value = import_react.useMemo(() => context, Object.values(context));
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Context.Provider, {
				value,
				children
			});
		};
		Provider.displayName = rootComponentName + "Provider";
		function useContext2(consumerName, scope) {
			const Context = scope?.[scopeName]?.[index] || BaseContext;
			const context = import_react.useContext(Context);
			if (context) return context;
			if (defaultContext !== void 0) return defaultContext;
			throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
		}
		return [Provider, useContext2];
	}
	const createScope = () => {
		const scopeContexts = defaultContexts.map((defaultContext) => {
			return import_react.createContext(defaultContext);
		});
		return function useScope(scope) {
			const contexts = scope?.[scopeName] || scopeContexts;
			return import_react.useMemo(() => ({ [`__scope${scopeName}`]: {
				...scope,
				[scopeName]: contexts
			} }), [scope, contexts]);
		};
	};
	createScope.scopeName = scopeName;
	return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
	const baseScope = scopes[0];
	if (scopes.length === 1) return baseScope;
	const createScope = () => {
		const scopeHooks = scopes.map((createScope2) => ({
			useScope: createScope2(),
			scopeName: createScope2.scopeName
		}));
		return function useComposedScopes(overrideScopes) {
			const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
				const currentScope = useScope(overrideScopes)[`__scope${scopeName}`];
				return {
					...nextScopes2,
					...currentScope
				};
			}, {});
			return import_react.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
		};
	};
	createScope.scopeName = baseScope.scopeName;
	return createScope;
}
//#endregion
//#region node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var useLayoutEffect2 = globalThis?.document ? import_react.useLayoutEffect : () => {};
//#endregion
//#region node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var useInsertionEffect = import_react[" useInsertionEffect ".trim().toString()] || useLayoutEffect2;
function useControllableState({ prop, defaultProp, onChange = () => {}, caller }) {
	const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState({
		defaultProp,
		onChange
	});
	const isControlled = prop !== void 0;
	const value = isControlled ? prop : uncontrolledProp;
	{
		const isControlledRef = import_react.useRef(prop !== void 0);
		import_react.useEffect(() => {
			const wasControlled = isControlledRef.current;
			if (wasControlled !== isControlled) console.warn(`${caller} is changing from ${wasControlled ? "controlled" : "uncontrolled"} to ${isControlled ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
			isControlledRef.current = isControlled;
		}, [isControlled, caller]);
	}
	return [value, import_react.useCallback((nextValue) => {
		if (isControlled) {
			const value2 = isFunction(nextValue) ? nextValue(prop) : nextValue;
			if (value2 !== prop) onChangeRef.current?.(value2);
		} else setUncontrolledProp(nextValue);
	}, [
		isControlled,
		prop,
		setUncontrolledProp,
		onChangeRef
	])];
}
function useUncontrolledState({ defaultProp, onChange }) {
	const [value, setValue] = import_react.useState(defaultProp);
	const prevValueRef = import_react.useRef(value);
	const onChangeRef = import_react.useRef(onChange);
	useInsertionEffect(() => {
		onChangeRef.current = onChange;
	}, [onChange]);
	import_react.useEffect(() => {
		if (prevValueRef.current !== value) {
			onChangeRef.current?.(value);
			prevValueRef.current = value;
		}
	}, [value, prevValueRef]);
	return [
		value,
		setValue,
		onChangeRef
	];
}
function isFunction(value) {
	return typeof value === "function";
}
//#endregion
//#region node_modules/@radix-ui/react-primitive/dist/index.mjs
var Primitive = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((primitive, node) => {
	const Slot = /* @__PURE__ */ createSlot(`Primitive.${node}`);
	const Node = import_react.forwardRef((props, forwardedRef) => {
		const { asChild, ...primitiveProps } = props;
		const Comp = asChild ? Slot : node;
		if (typeof window !== "undefined") window[Symbol.for("radix-ui")] = true;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {
			...primitiveProps,
			ref: forwardedRef
		});
	});
	Node.displayName = `Primitive.${node}`;
	return {
		...primitive,
		[node]: Node
	};
}, {});
//#endregion
//#region node_modules/@radix-ui/react-presence/dist/index.mjs
function useStateMachine(initialState, machine) {
	return import_react.useReducer((state, event) => {
		return machine[state][event] ?? state;
	}, initialState);
}
var Presence = (props) => {
	const { present, children } = props;
	const presence = usePresence(present);
	const child = typeof children === "function" ? children({ present: presence.isPresent }) : import_react.Children.only(children);
	const ref = useStableComposedRefs(presence.ref, getElementRef(child));
	return typeof children === "function" || presence.isPresent ? import_react.cloneElement(child, { ref }) : null;
};
Presence.displayName = "Presence";
function usePresence(present) {
	const [node, setNode] = import_react.useState();
	const stylesRef = import_react.useRef(null);
	const prevPresentRef = import_react.useRef(present);
	const prevAnimationNameRef = import_react.useRef("none");
	const [state, send] = useStateMachine(present ? "mounted" : "unmounted", {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	});
	import_react.useEffect(() => {
		const currentAnimationName = getAnimationName(stylesRef.current);
		prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
	}, [state]);
	useLayoutEffect2(() => {
		const styles = stylesRef.current;
		const wasPresent = prevPresentRef.current;
		if (wasPresent !== present) {
			const prevAnimationName = prevAnimationNameRef.current;
			const currentAnimationName = getAnimationName(styles);
			if (present) send("MOUNT");
			else if (currentAnimationName === "none" || styles?.display === "none") send("UNMOUNT");
			else if (wasPresent && prevAnimationName !== currentAnimationName) send("ANIMATION_OUT");
			else send("UNMOUNT");
			prevPresentRef.current = present;
		}
	}, [present, send]);
	useLayoutEffect2(() => {
		if (node) {
			let timeoutId;
			const ownerWindow = node.ownerDocument.defaultView ?? window;
			const handleAnimationEnd = (event) => {
				const isCurrentAnimation = getAnimationName(stylesRef.current).includes(CSS.escape(event.animationName));
				if (event.target === node && isCurrentAnimation) {
					send("ANIMATION_END");
					if (!prevPresentRef.current) {
						const currentFillMode = node.style.animationFillMode;
						node.style.animationFillMode = "forwards";
						timeoutId = ownerWindow.setTimeout(() => {
							if (node.style.animationFillMode === "forwards") node.style.animationFillMode = currentFillMode;
						});
					}
				}
			};
			const handleAnimationStart = (event) => {
				if (event.target === node) prevAnimationNameRef.current = getAnimationName(stylesRef.current);
			};
			node.addEventListener("animationstart", handleAnimationStart);
			node.addEventListener("animationcancel", handleAnimationEnd);
			node.addEventListener("animationend", handleAnimationEnd);
			return () => {
				ownerWindow.clearTimeout(timeoutId);
				node.removeEventListener("animationstart", handleAnimationStart);
				node.removeEventListener("animationcancel", handleAnimationEnd);
				node.removeEventListener("animationend", handleAnimationEnd);
			};
		} else send("ANIMATION_END");
	}, [node, send]);
	return {
		isPresent: ["mounted", "unmountSuspended"].includes(state),
		ref: import_react.useCallback((node2) => {
			stylesRef.current = node2 ? getComputedStyle(node2) : null;
			setNode(node2);
		}, [])
	};
}
function setRef(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
function useStableComposedRefs(...refs) {
	const refsRef = import_react.useRef(refs);
	refsRef.current = refs;
	return import_react.useCallback((node) => {
		const currentRefs = refsRef.current;
		let hasCleanup = false;
		const cleanups = currentRefs.map((ref) => {
			const cleanup = setRef(ref, node);
			if (!hasCleanup && typeof cleanup === "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup === "function") cleanup();
				else setRef(currentRefs[i], null);
			}
		};
	}, []);
}
function getAnimationName(styles) {
	return styles?.animationName || "none";
}
function getElementRef(element) {
	let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
	let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.ref;
	getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
	mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.props.ref;
	return element.props.ref || element.ref;
}
//#endregion
//#region node_modules/@radix-ui/react-id/dist/index.mjs
var useReactId = import_react[" useId ".trim().toString()] || (() => void 0);
var count = 0;
function useId(deterministicId) {
	const [id, setId] = import_react.useState(useReactId());
	useLayoutEffect2(() => {
		if (!deterministicId) setId((reactId) => reactId ?? String(count++));
	}, [deterministicId]);
	return deterministicId || (id ? `radix-${id}` : "");
}
//#endregion
//#region node_modules/@radix-ui/react-collapsible/dist/index.mjs
var COLLAPSIBLE_NAME = "Collapsible";
var [createCollapsibleContext, createCollapsibleScope] = createContextScope(COLLAPSIBLE_NAME);
var [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext(COLLAPSIBLE_NAME);
var Collapsible = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeCollapsible, open: openProp, defaultOpen, disabled, onOpenChange, ...collapsibleProps } = props;
	const [open, setOpen] = useControllableState({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange,
		caller: COLLAPSIBLE_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleProvider, {
		scope: __scopeCollapsible,
		disabled,
		contentId: useId(),
		open,
		onOpenToggle: import_react.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"data-state": getState(open),
			"data-disabled": disabled ? "" : void 0,
			...collapsibleProps,
			ref: forwardedRef
		})
	});
});
Collapsible.displayName = COLLAPSIBLE_NAME;
var TRIGGER_NAME = "CollapsibleTrigger";
var CollapsibleTrigger = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeCollapsible, ...triggerProps } = props;
	const context = useCollapsibleContext(TRIGGER_NAME, __scopeCollapsible);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		"aria-controls": context.open ? context.contentId : void 0,
		"aria-expanded": context.open || false,
		"data-state": getState(context.open),
		"data-disabled": context.disabled ? "" : void 0,
		disabled: context.disabled,
		...triggerProps,
		ref: forwardedRef,
		onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
	});
});
CollapsibleTrigger.displayName = TRIGGER_NAME;
var CONTENT_NAME = "CollapsibleContent";
var CollapsibleContent = import_react.forwardRef((props, forwardedRef) => {
	const { forceMount, ...contentProps } = props;
	const context = useCollapsibleContext(CONTENT_NAME, props.__scopeCollapsible);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: ({ present }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleContentImpl, {
			...contentProps,
			ref: forwardedRef,
			present
		})
	});
});
CollapsibleContent.displayName = CONTENT_NAME;
var CollapsibleContentImpl = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeCollapsible, present, children, ...contentProps } = props;
	const context = useCollapsibleContext(CONTENT_NAME, __scopeCollapsible);
	const [isPresent, setIsPresent] = import_react.useState(present);
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, ref);
	const heightRef = import_react.useRef(0);
	const height = heightRef.current;
	const widthRef = import_react.useRef(0);
	const width = widthRef.current;
	const isOpen = context.open || isPresent;
	const isMountAnimationPreventedRef = import_react.useRef(isOpen);
	const originalStylesRef = import_react.useRef(void 0);
	import_react.useEffect(() => {
		const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
		return () => cancelAnimationFrame(rAF);
	}, []);
	useLayoutEffect2(() => {
		const node = ref.current;
		if (node) {
			originalStylesRef.current = originalStylesRef.current || {
				transitionDuration: node.style.transitionDuration,
				animationName: node.style.animationName
			};
			node.style.transitionDuration = "0s";
			node.style.animationName = "none";
			const rect = node.getBoundingClientRect();
			heightRef.current = rect.height;
			widthRef.current = rect.width;
			if (!isMountAnimationPreventedRef.current) {
				node.style.transitionDuration = originalStylesRef.current.transitionDuration;
				node.style.animationName = originalStylesRef.current.animationName;
			}
			setIsPresent(present);
		}
	}, [context.open, present]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"data-state": getState(context.open),
		"data-disabled": context.disabled ? "" : void 0,
		id: context.contentId,
		hidden: !isOpen,
		...contentProps,
		ref: composedRefs,
		style: {
			[`--radix-collapsible-content-height`]: height ? `${height}px` : void 0,
			[`--radix-collapsible-content-width`]: width ? `${width}px` : void 0,
			...props.style
		},
		children: isOpen && children
	});
});
function getState(open) {
	return open ? "open" : "closed";
}
var Root = Collapsible;
//#endregion
export { require_react_dom as a, Slot as i, CollapsibleTrigger as n, require_jsx_runtime as o, Root as r, CollapsibleContent as t };
