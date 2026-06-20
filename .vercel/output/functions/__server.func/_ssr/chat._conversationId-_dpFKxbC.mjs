import { o as __toESM } from "../_runtime.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as DefaultChatTransport, o as require_react, t as useChat } from "../_libs/@ai-sdk/react+[...].mjs";
import { n as CollapsibleTrigger$1, o as require_jsx_runtime, r as Root, t as CollapsibleContent$1 } from "../_libs/@radix-ui/react-collapsible+[...].mjs";
import { n as useServerFn } from "./createSsrRpc-C6mtSl4V.mjs";
import { t as Route } from "./chat._conversationId-DW08OAAH.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as Qs } from "../_libs/streamdown+tailwind-merge.mjs";
import { n as cn, t as Button } from "./button-mXyZaY3O.mjs";
import { t as Badge } from "./badge-B7BG74Lm.mjs";
import { n as listConversations, r as loadMessages, t as createConversation } from "./conversations.functions-BwGA1z62.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { C as ChevronDown, D as ArrowDown, E as ArrowLeft, O as Activity, S as CircleCheckBig, _ as CornerDownLeft, b as CircleX, c as Settings, f as MessageSquarePlus, h as FileText, n as Wrench, o as Square, p as LoaderCircle, r as TrendingUp, t as X, u as Search, v as Clock, w as BrainCircuit, y as Circle } from "../_libs/lucide-react.mjs";
import { n as useStickToBottomContext, t as StickToBottom } from "../_libs/use-stick-to-bottom.mjs";
import { t as A } from "../_libs/@streamdown/cjk+[...].mjs";
import { t as G } from "../_libs/shiki+streamdown__code.mjs";
import { t as h } from "../_libs/@streamdown/math+[...].mjs";
import { t as f } from "../_libs/@streamdown/mermaid+[...].mjs";
import { t as nanoid } from "../_libs/nanoid.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chat._conversationId-_dpFKxbC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Conversation = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickToBottom, {
	className: cn("relative flex-1 overflow-y-hidden", className),
	initial: "smooth",
	resize: "smooth",
	role: "log",
	...props
});
var ConversationContent = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickToBottom.Content, {
	className: cn("flex flex-col gap-8 p-4", className),
	...props
});
var ConversationEmptyState = ({ className, title = "No messages yet", description = "Start a conversation to see messages here", icon, children, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex size-full flex-col items-center justify-center gap-3 p-8 text-center", className),
	...props,
	children: children ?? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-muted-foreground",
		children: icon
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-medium text-sm",
			children: title
		}), description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground text-sm",
			children: description
		})]
	})] })
});
var ConversationScrollButton = ({ className, ...props }) => {
	const { isAtBottom, scrollToBottom } = useStickToBottomContext();
	const handleScrollToBottom = (0, import_react.useCallback)(() => {
		scrollToBottom();
	}, [scrollToBottom]);
	return !isAtBottom && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		className: cn("absolute bottom-4 left-[50%] translate-x-[-50%] rounded-full dark:bg-background dark:hover:bg-muted", className),
		onClick: handleScrollToBottom,
		size: "icon",
		type: "button",
		variant: "outline",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-4" })
	});
};
var Message = ({ className, from, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("group flex w-full max-w-[95%] flex-col gap-2", from === "user" ? "is-user ml-auto justify-end" : "is-assistant", className),
	...props
});
var MessageContent = ({ children, className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("is-user:dark flex w-fit min-w-0 max-w-full flex-col gap-2 overflow-hidden text-sm", "group-[.is-user]:ml-auto group-[.is-user]:rounded-lg group-[.is-user]:bg-secondary group-[.is-user]:px-4 group-[.is-user]:py-3 group-[.is-user]:text-foreground", "group-[.is-assistant]:text-foreground", className),
	...props,
	children
});
(0, import_react.createContext)(null);
var streamdownPlugins = {
	cjk: A,
	code: G,
	math: h,
	mermaid: f
};
var MessageResponse = (0, import_react.memo)(({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Qs, {
	className: cn("size-full [&>*:first-child]:mt-0 [&>*:last-child]:mb-0", className),
	plugins: streamdownPlugins,
	...props
}), (prevProps, nextProps) => prevProps.children === nextProps.children && nextProps.isAnimating === prevProps.isAnimating);
MessageResponse.displayName = "MessageResponse";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
function InputGroup({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "input-group",
		role: "group",
		className: cn("group/input-group border-input dark:bg-input/30 shadow-xs relative flex w-full items-center rounded-md border outline-none transition-[color,box-shadow]", "h-9 has-[>textarea]:h-auto", "has-[>[data-align=inline-start]]:[&>input]:pl-2", "has-[>[data-align=inline-end]]:[&>input]:pr-2", "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3", "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3", "has-[[data-slot=input-group-control]:focus-visible]:ring-ring has-[[data-slot=input-group-control]:focus-visible]:ring-1", "has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40", className),
		...props
	});
}
var inputGroupAddonVariants = cva("text-muted-foreground flex h-auto cursor-text select-none items-center justify-center gap-2 py-1.5 text-sm font-medium group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4", {
	variants: { align: {
		"inline-start": "order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
		"inline-end": "order-last pr-3 has-[>button]:mr-[-0.4rem] has-[>kbd]:mr-[-0.35rem]",
		"block-start": "[.border-b]:pb-3 order-first w-full justify-start px-3 pt-3 group-has-[>input]/input-group:pt-2.5",
		"block-end": "[.border-t]:pt-3 order-last w-full justify-start px-3 pb-3 group-has-[>input]/input-group:pb-2.5"
	} },
	defaultVariants: { align: "inline-start" }
});
function InputGroupAddon({ className, align = "inline-start", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "group",
		"data-slot": "input-group-addon",
		"data-align": align,
		className: cn(inputGroupAddonVariants({ align }), className),
		onClick: (e) => {
			if (e.target.closest("button")) return;
			e.currentTarget.parentElement?.querySelector("input")?.focus();
		},
		...props
	});
}
var inputGroupButtonVariants = cva("flex items-center gap-2 text-sm shadow-none", {
	variants: { size: {
		xs: "h-6 gap-1 rounded-[calc(var(--radius)-5px)] px-2 has-[>svg]:px-2 [&>svg:not([class*='size-'])]:size-3.5",
		sm: "h-8 gap-1.5 rounded-md px-2.5 has-[>svg]:px-2.5",
		"icon-xs": "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
		"icon-sm": "size-8 p-0 has-[>svg]:p-0"
	} },
	defaultVariants: { size: "xs" }
});
function InputGroupButton({ className, type = "button", variant = "ghost", size = "xs", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		type,
		"data-size": size,
		variant,
		className: cn(inputGroupButtonVariants({ size }), className),
		...props
	});
}
function InputGroupTextarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
		"data-slot": "input-group-control",
		className: cn("flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent", className),
		...props
	});
}
function Spinner({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
		role: "status",
		"aria-label": "Loading",
		className: cn("size-4 animate-spin", className),
		...props
	});
}
var convertBlobUrlToDataUrl = async (url) => {
	try {
		const blob = await (await fetch(url)).blob();
		return new Promise((resolve) => {
			const reader = new FileReader();
			reader.onloadend = () => resolve(reader.result);
			reader.onerror = () => resolve(null);
			reader.readAsDataURL(blob);
		});
	} catch {
		return null;
	}
};
var PromptInputController = (0, import_react.createContext)(null);
var ProviderAttachmentsContext = (0, import_react.createContext)(null);
var useOptionalPromptInputController = () => (0, import_react.useContext)(PromptInputController);
var useOptionalProviderAttachments = () => (0, import_react.useContext)(ProviderAttachmentsContext);
var LocalAttachmentsContext = (0, import_react.createContext)(null);
var usePromptInputAttachments = () => {
	const provider = useOptionalProviderAttachments();
	const context = (0, import_react.useContext)(LocalAttachmentsContext) ?? provider;
	if (!context) throw new Error("usePromptInputAttachments must be used within a PromptInput or PromptInputProvider");
	return context;
};
var LocalReferencedSourcesContext = (0, import_react.createContext)(null);
var PromptInput = ({ className, accept, multiple, globalDrop, syncHiddenInput, maxFiles, maxFileSize, onError, onSubmit, children, ...props }) => {
	const controller = useOptionalPromptInputController();
	const usingProvider = !!controller;
	const inputRef = (0, import_react.useRef)(null);
	const formRef = (0, import_react.useRef)(null);
	const [items, setItems] = (0, import_react.useState)([]);
	const files = usingProvider ? controller.attachments.files : items;
	const [referencedSources, setReferencedSources] = (0, import_react.useState)([]);
	const filesRef = (0, import_react.useRef)(files);
	(0, import_react.useEffect)(() => {
		filesRef.current = files;
	}, [files]);
	const openFileDialogLocal = (0, import_react.useCallback)(() => {
		inputRef.current?.click();
	}, []);
	const matchesAccept = (0, import_react.useCallback)((f) => {
		if (!accept || accept.trim() === "") return true;
		return accept.split(",").map((s) => s.trim()).filter(Boolean).some((pattern) => {
			if (pattern.endsWith("/*")) {
				const prefix = pattern.slice(0, -1);
				return f.type.startsWith(prefix);
			}
			return f.type === pattern;
		});
	}, [accept]);
	const addLocal = (0, import_react.useCallback)((fileList) => {
		const incoming = [...fileList];
		const accepted = incoming.filter((f) => matchesAccept(f));
		if (incoming.length && accepted.length === 0) {
			onError?.({
				code: "accept",
				message: "No files match the accepted types."
			});
			return;
		}
		const withinSize = (f) => maxFileSize ? f.size <= maxFileSize : true;
		const sized = accepted.filter(withinSize);
		if (accepted.length > 0 && sized.length === 0) {
			onError?.({
				code: "max_file_size",
				message: "All files exceed the maximum size."
			});
			return;
		}
		setItems((prev) => {
			const capacity = typeof maxFiles === "number" ? Math.max(0, maxFiles - prev.length) : void 0;
			const capped = typeof capacity === "number" ? sized.slice(0, capacity) : sized;
			if (typeof capacity === "number" && sized.length > capacity) onError?.({
				code: "max_files",
				message: "Too many files. Some were not added."
			});
			const next = [];
			for (const file of capped) next.push({
				filename: file.name,
				id: nanoid(),
				mediaType: file.type,
				type: "file",
				url: URL.createObjectURL(file)
			});
			return [...prev, ...next];
		});
	}, [
		matchesAccept,
		maxFiles,
		maxFileSize,
		onError
	]);
	const removeLocal = (0, import_react.useCallback)((id) => setItems((prev) => {
		const found = prev.find((file) => file.id === id);
		if (found?.url) URL.revokeObjectURL(found.url);
		return prev.filter((file) => file.id !== id);
	}), []);
	const addWithProviderValidation = (0, import_react.useCallback)((fileList) => {
		const incoming = [...fileList];
		const accepted = incoming.filter((f) => matchesAccept(f));
		if (incoming.length && accepted.length === 0) {
			onError?.({
				code: "accept",
				message: "No files match the accepted types."
			});
			return;
		}
		const withinSize = (f) => maxFileSize ? f.size <= maxFileSize : true;
		const sized = accepted.filter(withinSize);
		if (accepted.length > 0 && sized.length === 0) {
			onError?.({
				code: "max_file_size",
				message: "All files exceed the maximum size."
			});
			return;
		}
		const currentCount = files.length;
		const capacity = typeof maxFiles === "number" ? Math.max(0, maxFiles - currentCount) : void 0;
		const capped = typeof capacity === "number" ? sized.slice(0, capacity) : sized;
		if (typeof capacity === "number" && sized.length > capacity) onError?.({
			code: "max_files",
			message: "Too many files. Some were not added."
		});
		if (capped.length > 0) controller?.attachments.add(capped);
	}, [
		matchesAccept,
		maxFileSize,
		maxFiles,
		onError,
		files.length,
		controller
	]);
	const clearAttachments = (0, import_react.useCallback)(() => usingProvider ? controller?.attachments.clear() : setItems((prev) => {
		for (const file of prev) if (file.url) URL.revokeObjectURL(file.url);
		return [];
	}), [usingProvider, controller]);
	const clearReferencedSources = (0, import_react.useCallback)(() => setReferencedSources([]), []);
	const add = usingProvider ? addWithProviderValidation : addLocal;
	const remove = usingProvider ? controller.attachments.remove : removeLocal;
	const openFileDialog = usingProvider ? controller.attachments.openFileDialog : openFileDialogLocal;
	const clear = (0, import_react.useCallback)(() => {
		clearAttachments();
		clearReferencedSources();
	}, [clearAttachments, clearReferencedSources]);
	(0, import_react.useEffect)(() => {
		if (!usingProvider) return;
		controller.__registerFileInput(inputRef, () => inputRef.current?.click());
	}, [usingProvider, controller]);
	(0, import_react.useEffect)(() => {
		if (syncHiddenInput && inputRef.current && files.length === 0) inputRef.current.value = "";
	}, [files, syncHiddenInput]);
	(0, import_react.useEffect)(() => {
		const form = formRef.current;
		if (!form) return;
		if (globalDrop) return;
		const onDragOver = (e) => {
			if (e.dataTransfer?.types?.includes("Files")) e.preventDefault();
		};
		const onDrop = (e) => {
			if (e.dataTransfer?.types?.includes("Files")) e.preventDefault();
			if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) add(e.dataTransfer.files);
		};
		form.addEventListener("dragover", onDragOver);
		form.addEventListener("drop", onDrop);
		return () => {
			form.removeEventListener("dragover", onDragOver);
			form.removeEventListener("drop", onDrop);
		};
	}, [add, globalDrop]);
	(0, import_react.useEffect)(() => {
		if (!globalDrop) return;
		const onDragOver = (e) => {
			if (e.dataTransfer?.types?.includes("Files")) e.preventDefault();
		};
		const onDrop = (e) => {
			if (e.dataTransfer?.types?.includes("Files")) e.preventDefault();
			if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) add(e.dataTransfer.files);
		};
		document.addEventListener("dragover", onDragOver);
		document.addEventListener("drop", onDrop);
		return () => {
			document.removeEventListener("dragover", onDragOver);
			document.removeEventListener("drop", onDrop);
		};
	}, [add, globalDrop]);
	(0, import_react.useEffect)(() => () => {
		if (!usingProvider) {
			for (const f of filesRef.current) if (f.url) URL.revokeObjectURL(f.url);
		}
	}, [usingProvider]);
	const handleChange = (0, import_react.useCallback)((event) => {
		if (event.currentTarget.files) add(event.currentTarget.files);
		event.currentTarget.value = "";
	}, [add]);
	const attachmentsCtx = (0, import_react.useMemo)(() => ({
		add,
		clear: clearAttachments,
		fileInputRef: inputRef,
		files: files.map((item) => ({
			...item,
			id: item.id
		})),
		openFileDialog,
		remove
	}), [
		files,
		add,
		remove,
		clearAttachments,
		openFileDialog
	]);
	const refsCtx = (0, import_react.useMemo)(() => ({
		add: (incoming) => {
			const array = Array.isArray(incoming) ? incoming : [incoming];
			setReferencedSources((prev) => [...prev, ...array.map((s) => ({
				...s,
				id: nanoid()
			}))]);
		},
		clear: clearReferencedSources,
		remove: (id) => {
			setReferencedSources((prev) => prev.filter((s) => s.id !== id));
		},
		sources: referencedSources
	}), [referencedSources, clearReferencedSources]);
	const handleSubmit = (0, import_react.useCallback)(async (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		const text = usingProvider ? controller.textInput.value : (() => {
			return new FormData(form).get("message") || "";
		})();
		if (!usingProvider) form.reset();
		try {
			const result = onSubmit({
				files: await Promise.all(files.map(async ({ id: _id, ...item }) => {
					if (item.url?.startsWith("blob:")) {
						const dataUrl = await convertBlobUrlToDataUrl(item.url);
						return {
							...item,
							url: dataUrl ?? item.url
						};
					}
					return item;
				})),
				text
			}, event);
			if (result instanceof Promise) try {
				await result;
				clear();
				if (usingProvider) controller.textInput.clear();
			} catch {}
			else {
				clear();
				if (usingProvider) controller.textInput.clear();
			}
		} catch {}
	}, [
		usingProvider,
		controller,
		files,
		onSubmit,
		clear
	]);
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		accept,
		"aria-label": "Upload files",
		className: "hidden",
		multiple,
		onChange: handleChange,
		ref: inputRef,
		title: "Upload files",
		type: "file"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
		className: cn("w-full", className),
		onSubmit: handleSubmit,
		ref: formRef,
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroup, {
			className: "overflow-hidden",
			children
		})
	})] });
	const withReferencedSources = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocalReferencedSourcesContext.Provider, {
		value: refsCtx,
		children: inner
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocalAttachmentsContext.Provider, {
		value: attachmentsCtx,
		children: withReferencedSources
	});
};
var PromptInputTextarea = ({ onChange, onKeyDown, className, placeholder = "What would you like to know?", ...props }) => {
	const controller = useOptionalPromptInputController();
	const attachments = usePromptInputAttachments();
	const [isComposing, setIsComposing] = (0, import_react.useState)(false);
	const handleKeyDown = (0, import_react.useCallback)((e) => {
		onKeyDown?.(e);
		if (e.defaultPrevented) return;
		if (e.key === "Enter") {
			if (isComposing || e.nativeEvent.isComposing) return;
			if (e.shiftKey) return;
			e.preventDefault();
			const { form } = e.currentTarget;
			if ((form?.querySelector("button[type=\"submit\"]"))?.disabled) return;
			form?.requestSubmit();
		}
		if (e.key === "Backspace" && e.currentTarget.value === "" && attachments.files.length > 0) {
			e.preventDefault();
			const lastAttachment = attachments.files.at(-1);
			if (lastAttachment) attachments.remove(lastAttachment.id);
		}
	}, [
		onKeyDown,
		isComposing,
		attachments
	]);
	const handlePaste = (0, import_react.useCallback)((event) => {
		const items = event.clipboardData?.items;
		if (!items) return;
		const files = [];
		for (const item of items) if (item.kind === "file") {
			const file = item.getAsFile();
			if (file) files.push(file);
		}
		if (files.length > 0) {
			event.preventDefault();
			attachments.add(files);
		}
	}, [attachments]);
	const handleCompositionEnd = (0, import_react.useCallback)(() => setIsComposing(false), []);
	const handleCompositionStart = (0, import_react.useCallback)(() => setIsComposing(true), []);
	const controlledProps = controller ? {
		onChange: (e) => {
			controller.textInput.setInput(e.currentTarget.value);
			onChange?.(e);
		},
		value: controller.textInput.value
	} : { onChange };
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupTextarea, {
		className: cn("field-sizing-content max-h-48 min-h-16", className),
		name: "message",
		onCompositionEnd: handleCompositionEnd,
		onCompositionStart: handleCompositionStart,
		onKeyDown: handleKeyDown,
		onPaste: handlePaste,
		placeholder,
		...props,
		...controlledProps
	});
};
var PromptInputFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupAddon, {
	align: "block-end",
	className: cn("justify-between gap-1", className),
	...props
});
var PromptInputSubmit = ({ className, variant = "default", size = "icon-sm", status, onStop, onClick, children, ...props }) => {
	const isGenerating = status === "submitted" || status === "streaming";
	let Icon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerDownLeft, { className: "size-4" });
	if (status === "submitted") Icon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spinner, {});
	else if (status === "streaming") Icon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { className: "size-4" });
	else if (status === "error") Icon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" });
	const handleClick = (0, import_react.useCallback)((e) => {
		if (isGenerating && onStop) {
			e.preventDefault();
			onStop();
			return;
		}
		onClick?.(e);
	}, [
		isGenerating,
		onStop,
		onClick
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupButton, {
		"aria-label": isGenerating ? "Stop" : "Submit",
		className: cn(className),
		onClick: handleClick,
		size,
		type: isGenerating && onStop ? "button" : "submit",
		variant,
		...props,
		children: children ?? Icon
	});
};
var Collapsible = Root;
var CollapsibleTrigger = CollapsibleTrigger$1;
var CollapsibleContent = CollapsibleContent$1;
var CodeBlock = ({ code }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
	className: "overflow-x-auto rounded-md bg-muted/40 p-3 text-xs",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: code })
});
var Tool = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collapsible, {
	className: cn("group not-prose mb-4 w-full rounded-md border", className),
	...props
});
var statusLabels = {
	"approval-requested": "Awaiting Approval",
	"approval-responded": "Responded",
	"input-available": "Running",
	"input-streaming": "Pending",
	"output-available": "Completed",
	"output-denied": "Denied",
	"output-error": "Error"
};
var statusIcons = {
	"approval-requested": /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4 text-yellow-600" }),
	"approval-responded": /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "size-4 text-blue-600" }),
	"input-available": /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4 animate-pulse" }),
	"input-streaming": /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "size-4" }),
	"output-available": /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "size-4 text-green-600" }),
	"output-denied": /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "size-4 text-orange-600" }),
	"output-error": /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "size-4 text-red-600" })
};
var getStatusBadge = (status) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
	className: "gap-1.5 rounded-full text-xs",
	variant: "secondary",
	children: [statusIcons[status], statusLabels[status]]
});
var ToolHeader = ({ className, title, type, state, toolName, ...props }) => {
	const derivedName = type === "dynamic-tool" ? toolName : type.split("-").slice(1).join("-");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CollapsibleTrigger, {
		className: cn("flex w-full items-center justify-between gap-4 p-3", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrench, { className: "size-4 text-muted-foreground" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium text-sm",
					children: title ?? derivedName
				}),
				getStatusBadge(state)
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 text-muted-foreground transition-transform group-data-[state=open]:rotate-180" })]
	});
};
var ToolContent = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleContent, {
	className: cn("data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2 space-y-4 p-4 text-popover-foreground outline-none data-[state=closed]:animate-out data-[state=open]:animate-in", className),
	...props
});
var ToolInput = ({ className, input, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: cn("space-y-2 overflow-hidden", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
		className: "font-medium text-muted-foreground text-xs uppercase tracking-wide",
		children: "Parameters"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-md bg-muted/50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
			code: JSON.stringify(input, null, 2),
			language: "json"
		})
	})]
});
var ToolOutput = ({ className, output, errorText, ...props }) => {
	if (!(output || errorText)) return null;
	let Output = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: output });
	if (typeof output === "object" && !(0, import_react.isValidElement)(output)) Output = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
		code: JSON.stringify(output, null, 2),
		language: "json"
	});
	else if (typeof output === "string") Output = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
		code: output,
		language: "json"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("space-y-2", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
			className: "font-medium text-muted-foreground text-xs uppercase tracking-wide",
			children: errorText ? "Error" : "Result"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("overflow-x-auto rounded-md text-xs [&_table]:w-full", errorText ? "bg-destructive/10 text-destructive" : "bg-muted/50 text-foreground"),
			children: [errorText && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: errorText }), Output]
		})]
	});
};
var motionComponentCache = /* @__PURE__ */ new Map();
var getMotionComponent = (element) => {
	let component = motionComponentCache.get(element);
	if (!component) {
		component = motion.create(element);
		motionComponentCache.set(element, component);
	}
	return component;
};
var ShimmerComponent = ({ children, as: Component = "p", className, duration = 2, spread = 2 }) => {
	const MotionComponent = getMotionComponent(Component);
	const dynamicSpread = (0, import_react.useMemo)(() => (children?.length ?? 0) * spread, [children, spread]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionComponent, {
		animate: { backgroundPosition: "0% center" },
		className: cn("relative inline-block bg-[length:250%_100%,auto] bg-clip-text text-transparent", "[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--color-background),#0000_calc(50%+var(--spread)))] [background-repeat:no-repeat,padding-box]", className),
		initial: { backgroundPosition: "100% center" },
		style: {
			"--spread": `${dynamicSpread}px`,
			backgroundImage: "var(--bg), linear-gradient(var(--color-muted-foreground), var(--color-muted-foreground))"
		},
		transition: {
			duration,
			ease: "linear",
			repeat: Number.POSITIVE_INFINITY
		},
		children
	});
};
var Shimmer = (0, import_react.memo)(ShimmerComponent);
var SUGGESTIONS = [
	{
		icon: TrendingUp,
		text: "What are today's top gaining US stocks?"
	},
	{
		icon: Search,
		text: "Analyze MSFT vs META over the last 60 days."
	},
	{
		icon: FileText,
		text: "Calculate ROI for $1000 invested in NVDA one year ago, then save it as a report."
	}
];
function ChatPage() {
	const { conversationId } = Route.useParams();
	const load = useServerFn(loadMessages);
	const { data: initial, isLoading } = useQuery({
		queryKey: ["chat-messages", conversationId],
		queryFn: () => load({ conversationId }),
		staleTime: 0
	});
	if (isLoading || !initial) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatShell, {
		conversationId,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 items-center justify-center text-sm text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), " Loading conversation…"]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatShell, {
		conversationId,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatWindow, {
			conversationId,
			initial
		}, conversationId)
	});
}
function ChatWindow({ conversationId, initial }) {
	const { messages, sendMessage, status, error } = useChat({
		id: conversationId,
		messages: (0, import_react.useMemo)(() => initial.map((m) => ({
			id: m.id,
			role: m.role,
			parts: JSON.parse(m.partsJson)
		})), [initial]),
		transport: (0, import_react.useMemo)(() => new DefaultChatTransport({
			api: "/api/chat",
			body: { conversationId }
		}), [conversationId])
	});
	const textareaRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		textareaRef.current?.focus();
	}, [conversationId, status]);
	const onSubmit = async (msg) => {
		if (!msg.text.trim()) return;
		await sendMessage({ text: msg.text.trim() });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Conversation, {
			className: "flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ConversationContent, {
				className: "mx-auto w-full max-w-3xl",
				children: [
					messages.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConversationEmptyState, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrainCircuit, { className: "h-10 w-10 text-primary" }),
						title: "Ask your AlphaQuant analyst",
						description: "Real-time market data via Polygon. Multi-tool reasoning. Save reports for later.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid w-full max-w-xl gap-2",
							children: SUGGESTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => sendMessage({ text: s.text }),
								className: "group flex items-center gap-3 rounded-xl border border-border/50 bg-card/30 p-3 text-left text-sm text-foreground/80 transition hover:border-primary/40 hover:bg-card/50",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.text })]
							}, s.text))
						})
					}) : messages.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageView, { message: m }, m.id)),
					status === "submitted" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Message, {
						from: "assistant",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shimmer, { children: "Thinking…" }) })
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive",
						children: error.message || "Something went wrong."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConversationScrollButton, {})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-3xl px-4 pb-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PromptInput, {
				onSubmit: (msg, e) => {
					e.preventDefault();
					onSubmit(msg);
				},
				className: "rounded-2xl border-border/50 bg-card/40 backdrop-blur",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptInputTextarea, {
					ref: textareaRef,
					placeholder: "Ask about a ticker, ROI, top movers…"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptInputFooter, {
					className: "justify-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptInputSubmit, {
						status,
						disabled: status === "submitted" || status === "streaming"
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-center text-[11px] text-muted-foreground",
				children: "AlphaQuant AI · Live Polygon data · Not financial advice."
			})]
		})]
	});
}
function MessageView({ message }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Message, {
		from: message.role,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageContent, { children: message.parts.map((part, idx) => {
			if (part.type === "text") return message.role === "assistant" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageResponse, { children: part.text }, idx) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "whitespace-pre-wrap text-sm",
				children: part.text
			}, idx);
			if (part.type.startsWith("tool-")) {
				const tp = part;
				const toolName = part.type.replace(/^tool-/, "");
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tool, {
					defaultOpen: false,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolHeader, {
						type: part.type,
						state: tp.state,
						title: prettyToolName(toolName)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ToolContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolInput, { input: tp.input }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolOutput, {
						output: renderToolOutput(toolName, tp.output),
						errorText: tp.errorText
					})] })]
				}, idx);
			}
			return null;
		}) })
	});
}
function prettyToolName(name) {
	return {
		getStockHistory: "📈 Stock History",
		getTickerSnapshot: "🎯 Live Snapshot",
		getTopGainers: "🚀 Top Gainers",
		calculateROI: "💰 ROI Calculator",
		saveReport: "💾 Save Report"
	}[name] ?? name;
}
function renderToolOutput(name, output) {
	if (!output) return null;
	if (name === "saveReport" && typeof output === "object" && output && "id" in output && "url" in output) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md bg-primary/10 p-3 text-sm",
		children: [
			"✅ Report saved.",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/reports/$id",
				params: { id: output.id },
				className: "font-medium text-primary underline",
				children: "View report →"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
		className: "overflow-x-auto rounded-md bg-muted/40 p-3 text-xs",
		children: JSON.stringify(output, null, 2)
	});
}
function ChatShell({ conversationId, children }) {
	const list = useServerFn(listConversations);
	const create = useServerFn(createConversation);
	const navigate = useNavigate();
	const { data: convs } = useQuery({
		queryKey: ["conversations"],
		queryFn: () => list(),
		refetchInterval: 1e4
	});
	const newChat = async () => {
		navigate({
			to: "/chat/$conversationId",
			params: { conversationId: (await create()).id }
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex h-screen flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex items-center justify-between gap-3 border-b border-border/50 bg-card/30 px-4 py-3 backdrop-blur",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "flex items-center gap-2 text-muted-foreground hover:text-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-4 w-4 text-primary" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-display text-sm font-semibold",
						children: [
							"Alpha",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "Quant"
							}),
							" Analyst"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-muted-foreground",
						children: "Live market AI agent"
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/reports",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							size: "sm",
							className: "gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-3.5 w-3.5" }), " Reports"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/settings",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "sm",
							className: "gap-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "h-3.5 w-3.5" })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: newChat,
						variant: "secondary",
						size: "sm",
						className: "gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquarePlus, { className: "h-3.5 w-3.5" }), " New"]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "hidden w-64 shrink-0 flex-col gap-1 overflow-y-auto border-r border-border/50 bg-card/20 p-3 md:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-2 pb-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground",
						children: "Conversations"
					}),
					(convs ?? []).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/chat/$conversationId",
						params: { conversationId: c.id },
						className: `truncate rounded-md px-2.5 py-2 text-xs transition hover:bg-card/60 ${c.id === conversationId ? "bg-card/60 text-foreground" : "text-muted-foreground"}`,
						children: c.title
					}, c.id)),
					!convs?.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-2 text-xs text-muted-foreground/70 italic",
						children: "No conversations yet."
					})
				]
			}), children]
		})]
	});
}
//#endregion
export { ChatPage as component };
