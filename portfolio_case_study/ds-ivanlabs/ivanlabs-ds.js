var IvanlabsDS = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // dist/index.js
  var index_exports = {};
  __export(index_exports, {
    Accordion: () => Accordion,
    AccountDropdown: () => AccountDropdown,
    ActionBar: () => ActionBar,
    AlertDialog: () => AlertDialog,
    AreaChart: () => AreaChart,
    AspectRatio: () => AspectRatio,
    Avatar: () => Avatar,
    BadgeChip: () => BadgeChip,
    Banner: () => Banner,
    BarChart: () => BarChart,
    Breadcrumbs: () => Breadcrumbs,
    BubbleBox: () => BubbleBox,
    Button: () => Button,
    CampaignCard: () => CampaignCard,
    Card: () => Card,
    Carousel: () => Carousel,
    Cell: () => Cell,
    ChangeMap: () => ChangeMap,
    ChartCard: () => ChartCard,
    ChartLegend: () => ChartLegend,
    ChartTooltip: () => ChartTooltip,
    Checkbox: () => Checkbox,
    Combobox: () => Combobox,
    Command: () => Command,
    ContextMenu: () => ContextMenu,
    CopyField: () => CopyField,
    DataTable: () => DataTable,
    DateField: () => DateField,
    DateRangePicker: () => DateRangePicker,
    DonutChart: () => DonutChart,
    DragHandle: () => DragHandle,
    DropdownItem: () => DropdownItem,
    DropdownList: () => DropdownList,
    FlowDiagram: () => FlowDiagram,
    GroupedButton: () => GroupedButton,
    HoverCard: () => HoverCard,
    Icon: () => Icon,
    IconButton: () => IconButton,
    InputField: () => InputField,
    InputOTP: () => InputOTP,
    Kbd: () => Kbd,
    LineChart: () => LineChart,
    LocationRow: () => LocationRow,
    MapBoundary: () => MapBoundary,
    MapCard: () => MapCard,
    MapControls: () => MapControls,
    MapModeBanner: () => MapModeBanner,
    MapOptions: () => MapOptions,
    MapPolygon: () => MapPolygon,
    MapRadius: () => MapRadius,
    MapSidebar: () => MapSidebar,
    MapSurface: () => MapSurface,
    Menubar: () => Menubar,
    Modal: () => Modal,
    Navbar: () => Navbar,
    NotificationCards: () => NotificationCards,
    NumberField: () => NumberField,
    OrganizationComponents: () => OrganizationComponents,
    Pagination: () => Pagination,
    PasswordField: () => PasswordField,
    PinMarker: () => PinMarker,
    PolygonPoint: () => PolygonPoint,
    Popover: () => Popover,
    ProgressBar: () => ProgressBar,
    RadarChart: () => RadarChart,
    RadialChart: () => RadialChart,
    RadioButton: () => RadioButton,
    RadioGroup: () => RadioGroup,
    Resizable: () => Resizable,
    ScrollArea: () => ScrollArea,
    SearchField: () => SearchField,
    SegmentedControl: () => SegmentedControl,
    SelectAreaDropdown: () => SelectAreaDropdown,
    SelectButton: () => SelectButton,
    SelectField: () => SelectField,
    Separator: () => Separator,
    ServiceAreaRow: () => ServiceAreaRow,
    SettingsTab: () => SettingsTab,
    Sheet: () => Sheet,
    Sidebar: () => Sidebar,
    SidebarItem: () => SidebarItem,
    Skeleton: () => Skeleton,
    Slider: () => Slider,
    Sparkline: () => Sparkline,
    Spinner: () => Spinner,
    StatTile: () => StatTile,
    StatusPagePattern: () => StatusPagePattern,
    StatusPill: () => StatusPill,
    Tab: () => Tab,
    TextArea: () => TextArea,
    Toast: () => Toast,
    Toggle: () => Toggle,
    Tooltip: () => Tooltip,
    UploadField: () => UploadField
  });

  // ../../../../private/tmp/claude-501/-Users-ivan-Documents-portfolio/e7863c04-7b32-44a8-9d9d-928bdb50083a/scratchpad/shim/react.js
  var R = globalThis.React;
  var react_default = R;
  var {
    Children,
    Component,
    Fragment,
    StrictMode,
    Suspense,
    cloneElement,
    createContext,
    createElement,
    createRef,
    forwardRef,
    isValidElement,
    lazy,
    memo,
    startTransition,
    useCallback,
    useContext,
    useDebugValue,
    useDeferredValue,
    useEffect,
    useId,
    useImperativeHandle,
    useInsertionEffect,
    useLayoutEffect,
    useMemo,
    useReducer,
    useRef,
    useState,
    useSyncExternalStore,
    useTransition,
    version
  } = R;

  // ../../../../private/tmp/claude-501/-Users-ivan-Documents-portfolio/e7863c04-7b32-44a8-9d9d-928bdb50083a/scratchpad/shim/jsx-runtime.js
  var R2 = globalThis.React;
  var jsx = (type, props, key) => {
    const { children, ...rest } = props || {};
    if (key !== void 0) rest.key = key;
    return children === void 0 ? R2.createElement(type, rest) : Array.isArray(children) ? R2.createElement(type, rest, ...children) : R2.createElement(type, rest, children);
  };
  var Fragment2 = R2.Fragment;

  // dist/index.js
  var DEFAULT = [
    ["First question", "The answer to the first question goes here."],
    ["Second question", "The answer to the second question goes here."],
    ["Third question", "The answer to the third question goes here."]
  ];
  var Accordion = /* @__PURE__ */ react_default.forwardRef(function Accordion2({ items, openIndex = 0, style, ...rest }, forwardedRef) {
    const rows = items || DEFAULT;
    const [open, setOpen] = useState(openIndex);
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, style: { width: "100%", border: "1px solid var(--neutral-border-subtle)", borderRadius: "calc(var(--card-corner) * 1px)", overflow: "hidden", boxSizing: "border-box", ...style }, ...rest, children: rows.map(([q, a], i) => {
      const on = i === open;
      return /* @__PURE__ */ jsx("div", { style: { borderBottom: i < rows.length - 1 ? "1px solid var(--neutral-border-subtle)" : "none" }, children: [
        /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setOpen(on ? -1 : i), style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          width: "100%",
          padding: "16px 18px",
          border: 0,
          background: on ? "var(--brand-bg-weak)" : "var(--neutral-bg-default)",
          cursor: "pointer",
          font: "var(--text-title)",
          color: on ? "var(--brand-text-icon-default)" : "var(--neutral-text-icon-emphasis)",
          textAlign: "left"
        }, children: [
          q,
          /* @__PURE__ */ jsx("span", { className: "material-symbols-rounded", style: { fontSize: 22, color: on ? "var(--brand-text-icon-default)" : "var(--neutral-text-icon-muted)", transform: on ? "rotate(180deg)" : "none", transition: "transform .18s" }, children: "expand_more" })
        ] }),
        on && /* @__PURE__ */ jsx("div", { style: { padding: "calc(var(--gap-section-xs) * 1px) 18px 18px", font: "var(--text-body)", color: "var(--neutral-text-icon-default)", lineHeight: 1.6 }, children: a })
      ] }, i);
    }) });
  });
  Accordion.displayName = "Accordion";
  function HoverTip({ label, position = "top", children, style, ...rest }) {
    const [open, setOpen] = useState(false);
    if (!label) return children;
    const place = {
      top: { bottom: "100%", left: "50%", transform: "translate(-50%, -8px)" },
      bottom: { top: "100%", left: "50%", transform: "translate(-50%, 8px)" },
      left: { right: "100%", top: "50%", transform: "translate(-8px, -50%)" },
      right: { left: "100%", top: "50%", transform: "translate(8px, -50%)" }
    }[position] || {};
    return /* @__PURE__ */ jsx(
      "span",
      {
        style: { position: "relative", display: "inline-flex", ...style },
        onMouseEnter: () => setOpen(true),
        onMouseLeave: () => setOpen(false),
        onFocus: () => setOpen(true),
        onBlur: () => setOpen(false),
        ...rest,
        children: [
          children,
          open && /* @__PURE__ */ jsx("span", { role: "tooltip", style: {
            position: "absolute",
            zIndex: 60,
            pointerEvents: "none",
            ...place,
            background: "var(--neutral-text-icon-strong)",
            color: "var(--neutral-text-icon-on)",
            font: "var(--text-caption)",
            padding: "6px 10px",
            borderRadius: "calc(var(--radius-md) * 1px)",
            whiteSpace: "nowrap",
            boxShadow: "var(--shadow-popover)"
          }, children: label })
        ]
      }
    );
  }
  var FAMILY = {
    brand: ["var(--brand-bg-default)", "var(--brand-bg-accent)", "var(--brand-text-icon-on)"],
    info: ["var(--info-bg-default)", "var(--info-bg-muted)", "var(--info-text-icon-on)"],
    success: ["var(--success-bg-default)", "var(--success-bg-muted)", "var(--success-text-icon-on)"],
    warning: ["var(--warning-bg-default)", "var(--warning-bg-muted)", "var(--warning-text-icon-on)"],
    error: ["var(--error-bg-default)", "var(--error-bg-muted)", "var(--error-text-icon-on)"],
    neutral: ["var(--neutral-bg-muted)", "var(--neutral-bg-subtle)", "var(--neutral-text-icon-default)"]
  };
  var SIZE = { sm: [28, "var(--text-caption)"], md: [40, "var(--text-subtitle)"], lg: [56, "var(--text-title)"] };
  var Avatar = /* @__PURE__ */ react_default.forwardRef(function Avatar2({
    initials,
    name,
    tooltip,
    size = "md",
    color = "brand",
    state,
    interactive,
    onClick,
    style,
    ...rest
  }, forwardedRef) {
    const [hoverS, setHover] = useState(false);
    const [dim, font] = SIZE[size] || SIZE.md;
    const [restBg, liftedBg, fg] = FAMILY[color] || FAMILY.brand;
    const text = initials || (name ? String(name).split(/\s+/).map((w) => w[0]).join("").slice(0, 2) : "AB");
    const tip = tooltip || name || null;
    const live = interactive !== false && (interactive || !!onClick || !!tip);
    const hover = live && (hoverS || state === "hovered");
    const el = /* @__PURE__ */ jsx(
      "span",
      {
        ref: forwardedRef,
        role: onClick ? "button" : void 0,
        tabIndex: onClick ? 0 : void 0,
        "aria-label": onClick && tip ? tip : void 0,
        onClick,
        onKeyDown: onClick ? (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick(e);
          }
        } : void 0,
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
        style: {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: dim,
          height: dim,
          borderRadius: 9999,
          background: hover ? liftedBg : restBg,
          color: fg,
          font,
          textTransform: "uppercase",
          letterSpacing: ".02em",
          userSelect: "none",
          cursor: onClick ? "pointer" : void 0,
          transition: "background var(--motion-base) var(--motion-ease)",
          ...style
        },
        ...rest,
        children: String(text).slice(0, 2)
      }
    );
    return live && tip ? /* @__PURE__ */ jsx(HoverTip, { label: tip, children: el }) : el;
  });
  Avatar.displayName = "Avatar";
  var VARIANTS = ["default", "description", "destructive", "section", "separator"];
  var DropdownItem = /* @__PURE__ */ react_default.forwardRef(function DropdownItem2({
    label = "Item",
    variant = "default",
    state = "default",
    icon,
    iconRight,
    description,
    kbd,
    trailing,
    badge,
    multiSelect = false,
    checked = false,
    onClick,
    style,
    ...rest
  }, forwardedRef) {
    const [hoverS, setHover] = useState(false);
    const v = VARIANTS.includes(variant) ? variant : "default";
    if (v === "separator") {
      return /* @__PURE__ */ jsx("div", { ref: forwardedRef, role: "separator", style: { height: 1, background: "var(--neutral-bg-subtle)", margin: "5px 4px", ...style }, ...rest });
    }
    if (v === "section") {
      return /* @__PURE__ */ jsx("div", { ref: forwardedRef, role: "presentation", style: {
        padding: "8px 12px 4px",
        font: "var(--text-caption)",
        color: "var(--neutral-text-icon-muted)",
        textTransform: "uppercase",
        letterSpacing: ".04em",
        ...style
      }, ...rest, children: label });
    }
    const hover = hoverS || state === "hovered";
    const selected = state === "selected";
    const disabled = state === "disabled";
    const danger = v === "destructive";
    const bg = disabled ? "transparent" : selected ? danger ? "var(--error-bg-subtle)" : "var(--brand-bg-weak)" : hover ? danger ? "var(--error-bg-subtle)" : "var(--neutral-bg-subtle)" : "transparent";
    const fg = disabled ? "var(--neutral-text-icon-weak)" : danger ? "var(--error-text-icon-default)" : selected ? "var(--brand-text-icon-default)" : "var(--neutral-text-icon-emphasis)";
    const iconFg = disabled ? "var(--neutral-text-icon-weak)" : danger ? "var(--error-text-icon-default)" : "var(--neutral-text-icon-muted)";
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref: forwardedRef,
        role: "option",
        "aria-selected": selected,
        "aria-disabled": disabled || void 0,
        onClick: () => !disabled && onClick && onClick(),
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10,
          minHeight: 40,
          padding: description ? "8px 12px" : "0 12px",
          borderRadius: "calc(var(--control-sm-radius) * 1px)",
          background: bg,
          color: fg,
          font: "var(--text-body)",
          cursor: disabled ? "not-allowed" : "pointer",
          boxSizing: "border-box",
          width: "100%",
          transition: "background var(--motion-fast) var(--motion-ease)",
          ...style
        },
        ...rest,
        children: [
          multiSelect && /* @__PURE__ */ jsx("span", { style: {
            width: 18,
            height: 18,
            borderRadius: 5,
            flex: "none",
            border: `2px solid ${checked ? "var(--info-bg-emphasis)" : "var(--neutral-border-default)"}`,
            background: checked ? "var(--info-bg-emphasis)" : "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }, children: checked && /* @__PURE__ */ jsx("span", { className: "material-symbols-rounded", style: { fontSize: 14, color: "var(--neutral-text-icon-on)" }, children: "check" }) }),
          !multiSelect && icon && /* @__PURE__ */ jsx("span", { className: "material-symbols-rounded", style: { fontSize: 18, color: iconFg, flex: "none" }, children: icon }),
          /* @__PURE__ */ jsx("span", { style: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ jsx("span", { style: { display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: label }),
            description && /* @__PURE__ */ jsx("span", { style: { display: "block", font: "var(--text-body-sm)", color: disabled ? "var(--neutral-text-icon-weak)" : "var(--neutral-text-icon-muted)", marginTop: 2, lineHeight: 1.4 }, children: description })
          ] }),
          badge,
          kbd && /* @__PURE__ */ jsx("span", { style: { font: "var(--text-caption)", color: "var(--neutral-text-icon-muted)", flex: "none" }, children: kbd }),
          trailing,
          iconRight && /* @__PURE__ */ jsx("span", { className: "material-symbols-rounded", style: { fontSize: 18, color: iconFg, flex: "none" }, children: iconRight }),
          !multiSelect && selected && !iconRight && /* @__PURE__ */ jsx("span", { className: "material-symbols-rounded", style: { fontSize: 18, color: fg, flex: "none" }, children: "check" })
        ]
      }
    );
  });
  DropdownItem.displayName = "DropdownItem";
  var SIZES = {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 32,
    xl: 40,
    "2xl": 48,
    "3xl": 64,
    "4xl": 80,
    small: 20,
    regular: 24,
    large: 32
  };
  var Icon = /* @__PURE__ */ react_default.forwardRef(function Icon2({ name = "star", size = "regular", filled = false, weight = 400, color = "var(--neutral-text-icon-default)", style, ...rest }, forwardedRef) {
    const px = typeof size === "number" ? size : SIZES[String(size).toLowerCase()] || 24;
    return /* @__PURE__ */ jsx("span", { ref: forwardedRef, "aria-hidden": "true", style: {
      fontFamily: "'Material Symbols Rounded'",
      fontWeight: "normal",
      fontStyle: "normal",
      fontSize: px,
      lineHeight: 1,
      width: px,
      height: px,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color,
      userSelect: "none",
      WebkitFontSmoothing: "antialiased",
      overflow: "hidden",
      fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' ${weight}, 'GRAD' 0, 'opsz' ${px}`,
      ...style
    }, ...rest, children: name });
  });
  Icon.displayName = "Icon";
  var AccountDropdown = /* @__PURE__ */ react_default.forwardRef(function AccountDropdown2({ variant = "workspace", name = "Hi, Automated", sub = "$5,022.23 Balance", initials = "AT", style, ...rest }, forwardedRef) {
    const [open, setOpen] = useState(false);
    const [hover, setHover] = useState(false);
    const [focus, setFocus] = useState(false);
    const org = variant === "org";
    const fg = org ? "rgb(var(--on-dark))" : "var(--neutral-text-icon-emphasis)";
    const subFg = org ? "var(--surface-glass-weak)" : "var(--neutral-text-icon-muted)";
    const iconFg = org ? "var(--surface-glass)" : "var(--neutral-text-icon-muted)";
    const hoverBg = org ? "var(--hairline-on-dark)" : "var(--neutral-bg-subtle)";
    const trigBg = open ? hoverBg : hover ? hoverBg : "transparent";
    const items = [["person", "Profile"], ["settings", "Account settings"], ["receipt_long", "Billing"], ["logout", "Sign out"]];
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, style: { position: "relative", ...style }, ...rest, children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => setOpen((o) => !o),
          onMouseEnter: () => setHover(true),
          onMouseLeave: () => setHover(false),
          onFocus: () => setFocus(true),
          onBlur: () => {
            setFocus(false);
            setTimeout(() => setOpen(false), 120);
          },
          style: {
            display: "flex",
            alignItems: "center",
            gap: 9,
            height: 48,
            padding: "0 8px",
            border: "none",
            borderRadius: 12,
            background: trigBg,
            cursor: "pointer",
            transition: "background .15s ease, box-shadow .15s ease",
            boxShadow: focus ? "var(--focus-ring)" : "none"
          },
          children: [
            /* @__PURE__ */ jsx(Avatar, { initials, size: "sm", color: "brand" }),
            /* @__PURE__ */ jsx("span", { style: { lineHeight: 1.25, textAlign: "left" }, children: [
              /* @__PURE__ */ jsx("span", { style: { display: "block", font: "var(--text-subtitle)", color: fg }, children: name }),
              /* @__PURE__ */ jsx("span", { style: { display: "block", font: "var(--text-caption)", color: subFg }, children: sub })
            ] }),
            /* @__PURE__ */ jsx(Icon, { name: open ? "expand_less" : "expand_more", size: "regular", color: iconFg })
          ]
        }
      ),
      open && /* @__PURE__ */ jsx("div", { style: {
        position: "absolute",
        top: "calc(100% + 6px)",
        right: 0,
        width: 220,
        background: "var(--neutral-bg-default)",
        border: "1px solid var(--neutral-border-subtle)",
        borderRadius: "calc(var(--card-corner) * 1px)",
        boxShadow: "var(--shadow-lg)",
        padding: 5,
        zIndex: 20
      }, children: items.map(([icon, label], i) => /* @__PURE__ */ jsx(DropdownItem, { label, icon, state: label === "Sign out" ? "default" : "default", onClick: () => setOpen(false) }, i)) })
    ] });
  });
  AccountDropdown.displayName = "AccountDropdown";
  var CONTROL_KINDS = ["primary", "secondary", "tertiary", "destructive", "text"];
  var CONTROL_SPEC = {
    primary: {
      default: { bg: "var(--brand-bg-default)", fg: "var(--brand-text-icon-on)" },
      hover: { bg: "var(--brand-bg-accent)", fg: "var(--brand-text-icon-on)", shadow: "var(--shadow-raised)" },
      active: { bg: "var(--brand-bg-strong)", fg: "var(--brand-text-icon-on)", shadow: "var(--shadow-pressed)" },
      disabled: { bg: "var(--brand-bg-muted)", fg: "var(--neutral-text-icon-on)" }
    },
    destructive: {
      default: { bg: "var(--error-bg-default)", fg: "var(--error-text-icon-on)" },
      hover: { bg: "var(--error-bg-muted)", fg: "var(--error-text-icon-on)", shadow: "var(--shadow-raised)" },
      active: { bg: "var(--error-bg-strong)", fg: "var(--error-text-icon-on)", shadow: "var(--shadow-pressed)" },
      disabled: { bg: "var(--error-bg-muted)", fg: "var(--neutral-text-icon-on)" },
      ring: "var(--focus-ring-error)"
    },
    secondary: {
      // Neutral throughout: ink AND border are constant. Brand appears only on
      // focus (the ring + a brand border). See focusBorder.
      default: { bg: "var(--neutral-bg-default)", fg: "var(--neutral-text-icon-emphasis)", border: "var(--neutral-border-muted)" },
      hover: { bg: "var(--neutral-bg-default)", fg: "var(--neutral-text-icon-emphasis)", border: "var(--neutral-border-muted)", shadow: "var(--shadow-raised-subtle)" },
      active: { bg: "var(--neutral-bg-subtle)", fg: "var(--neutral-text-icon-emphasis)", border: "var(--neutral-border-muted)", shadow: "var(--shadow-pressed)" },
      disabled: { bg: "var(--neutral-bg-subtle)", fg: "var(--neutral-text-icon-weak)", border: "var(--neutral-border-subtle)" },
      focusBorder: "var(--brand-border-strong)"
    },
    tertiary: {
      default: { bg: "transparent", fg: "var(--neutral-text-icon-emphasis)" },
      hover: { bg: "var(--neutral-bg-subtle)", fg: "var(--neutral-text-icon-emphasis)" },
      active: { bg: "var(--neutral-bg-muted)", fg: "var(--neutral-text-icon-strong)" },
      disabled: { bg: "transparent", fg: "var(--neutral-text-icon-weak)" }
    },
    text: {
      default: { bg: "transparent", fg: "var(--brand-text-icon-default)" },
      hover: { bg: "transparent", fg: "var(--brand-text-icon-default)", underline: true },
      active: { bg: "transparent", fg: "var(--brand-text-icon-strong)", underline: true },
      disabled: { bg: "transparent", fg: "var(--neutral-text-icon-weak)" }
    }
  };
  var ALIAS = { filled: "primary", ghost: "tertiary", neutral: "secondary", link: "text" };
  function resolveKind(kind, fallback = "primary") {
    const k = ALIAS[kind] || kind;
    return CONTROL_KINDS.includes(k) ? k : fallback;
  }
  function phaseOf({ blocked, active, hover }) {
    return blocked ? "disabled" : active ? "active" : hover ? "hover" : "default";
  }
  var KINDS = ["primary", "secondary", "tertiary", "destructive", "text"];
  var SPEC = CONTROL_SPEC;
  var Button = /* @__PURE__ */ react_default.forwardRef(function Button2({ label = "Button", kind = "primary", size = "md", state, icon, iconRight, disabled = false, loading = false, onClick, style, ...rest }, forwardedRef) {
    const [hoverS, setHover] = useState(false);
    const [activeS, setActive] = useState(false);
    const [focusS, setFocus] = useState(false);
    const st = state || "default";
    const hover = hoverS || st === "hovered";
    const active = activeS || st === "active" || st === "clicked" || st === "pressed";
    const focus = focusS || st === "focused";
    const dims = {
      sm: ["calc(var(--control-sm-height) * 1px)", "calc(var(--control-sm-gap) * 1px)", "calc(var(--control-sm-radius) * 1px)", "var(--text-button-sm)", "small"],
      md: ["calc(var(--control-md-height) * 1px)", "calc(var(--control-md-gap) * 1px)", "calc(var(--control-md-radius) * 1px)", "var(--text-button)", "regular"],
      lg: ["calc(var(--control-lg-height) * 1px)", "calc(var(--control-lg-gap) * 1px)", "calc(var(--control-lg-radius) * 1px)", "var(--text-button-lg)", "large"]
    };
    const sz = dims[size] ? size : "md";
    const [h, gap, radius, font, iconSize] = dims[sz];
    const hasIcon = !!icon;
    const pad = `calc(var(--control-${sz}-padding) * 1px)`;
    const padIcon = `calc(var(--control-${sz}-padding-icon) * 1px)`;
    const padL = hasIcon ? padIcon : pad;
    const padR = iconRight ? padIcon : pad;
    const isDisabled = disabled || st === "disabled";
    const blocked = isDisabled || loading;
    const k = KINDS.includes(kind) ? kind : resolveKind(kind, "primary");
    const spec = SPEC[k];
    const phase = blocked ? "disabled" : active ? "active" : hover ? "hover" : "default";
    const s = spec[phase];
    const ring = spec.ring || "var(--focus-ring)";
    const shadows = [];
    if (!blocked && s.shadow) shadows.push(s.shadow);
    if (focus && !blocked) shadows.push(ring);
    const boxShadow = shadows.length ? shadows.join(", ") : "none";
    const borderColor = focus && !blocked && spec.focusBorder ? spec.focusBorder : s.border;
    return /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        ref: forwardedRef,
        disabled: blocked,
        onClick: (e) => {
          if (!blocked && onClick) onClick(e);
        },
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => {
          setHover(false);
          setActive(false);
        },
        onMouseDown: () => setActive(true),
        onMouseUp: () => setActive(false),
        onFocus: () => setFocus(true),
        onBlur: () => setFocus(false),
        style: {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap,
          height: h,
          padding: `0 ${padR} 0 ${padL}`,
          borderRadius: radius,
          border: borderColor ? `1.5px solid ${borderColor}` : "none",
          background: s.bg,
          color: s.fg,
          font,
          textDecoration: s.underline ? "underline" : "none",
          textUnderlineOffset: 3,
          cursor: loading ? "progress" : isDisabled ? "not-allowed" : "pointer",
          whiteSpace: "nowrap",
          transform: active && !blocked ? "scale(0.98)" : "none",
          boxShadow,
          transition: "background var(--motion-base) var(--motion-ease), color var(--motion-base) var(--motion-ease), border-color var(--motion-base) var(--motion-ease), transform var(--motion-fast) var(--motion-ease), box-shadow var(--motion-base) var(--motion-ease)",
          ...style
        },
        ...rest,
        children: [
          loading && /* @__PURE__ */ jsx("span", { style: { width: 14, height: 14, borderRadius: 9999, border: "2px solid currentColor", borderTopColor: "transparent", animation: "ivds-btn-spin .7s linear infinite" } }),
          !loading && hasIcon && /* @__PURE__ */ jsx(Icon, { name: icon, size: iconSize, color: s.fg }),
          /* @__PURE__ */ jsx("span", { children: label }),
          !loading && iconRight && /* @__PURE__ */ jsx(Icon, { name: iconRight, size: iconSize, color: s.fg }),
          /* @__PURE__ */ jsx("style", { children: "@keyframes ivds-btn-spin{to{transform:rotate(360deg)}}" })
        ]
      }
    );
  });
  Button.displayName = "Button";
  var IconButton = /* @__PURE__ */ react_default.forwardRef(function IconButton2({
    icon = "more_horiz",
    size = "regular",
    kind = "secondary",
    shape = "square",
    state,
    label,
    color,
    hoverBg,
    disabled = false,
    onClick,
    style,
    ...rest
  }, forwardedRef) {
    const [hoverS, setHover] = useState(false);
    const [activeS, setActive] = useState(false);
    const [focusS, setFocus] = useState(false);
    const st = state || "default";
    const hover = hoverS || st === "hovered";
    const active = activeS || st === "active" || st === "pressed";
    const focus = focusS || st === "focused";
    const isDisabled = disabled || st === "disabled";
    const sizeMap = {
      small: ["calc(var(--control-sm-height) * 1px)", "calc(var(--control-sm-radius) * 1px)", "small"],
      regular: ["calc(var(--control-md-height) * 1px)", "calc(var(--control-md-radius) * 1px)", "regular"],
      large: ["calc(var(--control-lg-height) * 1px)", "calc(var(--control-lg-radius) * 1px)", "large"]
    };
    const [box, sqRadius, iconSize] = sizeMap[size] || sizeMap.regular;
    const radius = shape === "circle" ? "9999px" : sqRadius;
    const k = resolveKind(kind, "secondary");
    const spec = CONTROL_SPEC[k];
    const s = spec[phaseOf({ blocked: isDisabled, active, hover })];
    const ring = spec.ring || "var(--focus-ring)";
    const bg = hoverBg && k === "tertiary" && (hover || active) && !isDisabled ? hoverBg : s.bg;
    const fg = color && !isDisabled ? color : s.fg;
    const borderColor = focus && !isDisabled && spec.focusBorder ? spec.focusBorder : s.border;
    const shadows = [];
    if (!isDisabled && s.shadow) shadows.push(s.shadow);
    if (focus && !isDisabled) shadows.push(ring);
    return /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        ref: forwardedRef,
        disabled: isDisabled,
        "aria-label": label || icon,
        title: label || void 0,
        onClick: (e) => {
          if (!isDisabled && onClick) onClick(e);
        },
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => {
          setHover(false);
          setActive(false);
        },
        onMouseDown: () => setActive(true),
        onMouseUp: () => setActive(false),
        onFocus: () => setFocus(true),
        onBlur: () => setFocus(false),
        style: {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          width: box,
          height: box,
          borderRadius: radius,
          background: bg,
          border: borderColor ? `1.5px solid ${borderColor}` : "none",
          cursor: isDisabled ? "not-allowed" : "pointer",
          boxShadow: shadows.length ? shadows.join(", ") : "none",
          transform: active && !isDisabled ? "scale(0.96)" : "none",
          transition: "background var(--motion-base) var(--motion-ease), border-color var(--motion-base) var(--motion-ease), box-shadow var(--motion-base) var(--motion-ease), transform var(--motion-fast) var(--motion-ease)",
          ...style
        },
        ...rest,
        children: /* @__PURE__ */ jsx(Icon, { name: icon, size: iconSize, color: fg })
      }
    );
  });
  IconButton.displayName = "IconButton";
  var Separator = /* @__PURE__ */ react_default.forwardRef(function Separator2({ orientation = "horizontal", label, style, className, ...rest }, forwardedRef) {
    if (orientation === "vertical") {
      return /* @__PURE__ */ jsx("div", { ref: forwardedRef, role: "separator", "aria-orientation": "vertical", className, style: { width: 1, alignSelf: "stretch", minHeight: 24, background: "var(--neutral-border-subtle)", ...style }, ...rest });
    }
    if (label != null && label !== "") {
      return /* @__PURE__ */ jsx("div", { ref: forwardedRef, role: "separator", className, style: { display: "flex", alignItems: "center", gap: 12, width: "100%", fontFamily: "var(--font-family-body)", ...style }, ...rest, children: [
        /* @__PURE__ */ jsx("div", { style: { flex: 1, height: 1, background: "var(--neutral-border-subtle)" } }),
        /* @__PURE__ */ jsx("span", { style: { font: "var(--text-caption)", color: "var(--neutral-text-icon-muted)", textTransform: "uppercase", letterSpacing: "0.04em" }, children: label }),
        /* @__PURE__ */ jsx("div", { style: { flex: 1, height: 1, background: "var(--neutral-border-subtle)" } })
      ] });
    }
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, role: "separator", className, style: { height: 1, width: "100%", background: "var(--neutral-border-subtle)", ...style }, ...rest });
  });
  Separator.displayName = "Separator";
  var ActionBar = /* @__PURE__ */ react_default.forwardRef(function ActionBar2({
    selected = 3,
    total = 4,
    onSelectAll,
    selectAllLabel = "Select All",
    actions,
    style,
    ...rest
  }, forwardedRef) {
    const norm = (typeof actions === "string" ? actions.split(",").map((s) => s.trim()).map((i) => [i]) : actions) || [["delete"], ["download"]];
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 16,
      padding: "8px 10px 8px 16px",
      background: "var(--info-bg-subtle)",
      border: "1px solid var(--info-border-default)",
      borderRadius: "calc(var(--card-corner) * 1px)",
      font: "var(--text-subtitle)",
      ...style
    }, ...rest, children: [
      /* @__PURE__ */ jsx("span", { style: { color: "var(--neutral-text-icon-emphasis)" }, children: [
        /* @__PURE__ */ jsx("span", { style: { color: "var(--info-text-icon-default)", fontWeight: 700 }, children: selected }),
        " / ",
        total,
        " selected."
      ] }),
      /* @__PURE__ */ jsx(Button, { kind: "secondary", size: "sm", label: selectAllLabel, onClick: onSelectAll }),
      /* @__PURE__ */ jsx(Separator, { orientation: "vertical" }),
      /* @__PURE__ */ jsx("span", { style: { color: "var(--info-text-icon-default)", fontWeight: 700 }, children: "Actions" }),
      /* @__PURE__ */ jsx("span", { style: { display: "inline-flex", gap: 6 }, children: norm.map(([icon, label], i) => /* @__PURE__ */ jsx(
        IconButton,
        {
          icon,
          kind: "secondary",
          size: "regular",
          "aria-label": label || icon,
          color: /delete|remove|trash/i.test(icon) ? "var(--error-text-icon-default)" : void 0
        },
        i
      )) })
    ] });
  });
  ActionBar.displayName = "ActionBar";
  var FONT = "var(--font-family-body)";
  var TONE = {
    destructive: ["warning", "var(--error-bg-subtle)", "var(--error-text-icon-default)", "destructive"],
    warning: ["warning", "var(--warning-bg-subtle)", "var(--warning-text-icon-strong)", "primary"],
    info: ["info", "var(--info-bg-subtle)", "var(--info-text-icon-default)", "primary"],
    success: ["check_circle", "var(--success-bg-subtle)", "var(--success-text-icon-default)", "primary"],
    default: ["info", "var(--info-bg-subtle)", "var(--info-text-icon-default)", "primary"]
  };
  var AlertDialog = /* @__PURE__ */ react_default.forwardRef(function AlertDialog2({
    open,
    defaultOpen = false,
    onOpenChange,
    tone = "destructive",
    inline = false,
    title = "Are you sure?",
    body = "This action cannot be undone.",
    confirm = "Confirm",
    cancel = "Cancel",
    onConfirm,
    onCancel,
    trigger,
    children,
    style,
    ...rest
  }, forwardedRef) {
    const isControlled = open !== void 0 && open !== null;
    const [inner, setInner] = useState(defaultOpen);
    const isOpen = inline || (isControlled ? open : inner);
    const setOpen = (v) => {
      if (!isControlled) setInner(v);
      if (onOpenChange) onOpenChange(v);
    };
    const [glyph, badgeBg, badgeFg, confirmKind] = TONE[tone] || TONE.destructive;
    const dismiss = () => {
      setOpen(false);
      onCancel && onCancel();
    };
    useEffect(() => {
      if (!isOpen || inline) return void 0;
      const onKey = (e) => {
        if (e.key === "Escape") dismiss();
      };
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }, [isOpen, inline]);
    if (!isOpen) return trigger ? /* @__PURE__ */ jsx("span", { onClick: () => setOpen(true), children: trigger }) : null;
    const panel = /* @__PURE__ */ jsx("div", { style: {
      width: 400,
      maxWidth: "90vw",
      boxSizing: "border-box",
      background: "var(--neutral-bg-default)",
      border: "1px solid var(--neutral-border-subtle)",
      borderRadius: "calc(var(--card-corner) * 1px)",
      boxShadow: "var(--shadow-dialog)",
      padding: 24,
      fontFamily: FONT,
      ...inline ? style : null
    }, children: [
      /* @__PURE__ */ jsx("div", { style: { display: "flex", gap: 14, alignItems: "flex-start" }, children: [
        /* @__PURE__ */ jsx("div", { style: { width: 40, height: 40, borderRadius: 9999, flex: "none", display: "flex", alignItems: "center", justifyContent: "center", background: badgeBg }, children: /* @__PURE__ */ jsx(Icon, { name: glyph, size: "regular", color: badgeFg }) }),
        /* @__PURE__ */ jsx("div", { style: { minWidth: 0 }, children: [
          /* @__PURE__ */ jsx("div", { style: { font: "var(--text-title)", color: "var(--neutral-text-icon-emphasis)" }, children: title }),
          /* @__PURE__ */ jsx("div", { style: { font: "var(--text-body-sm)", color: "var(--neutral-text-icon-muted)", marginTop: 6, lineHeight: 1.5 }, children: body || children })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 24 }, children: [
        cancel && /* @__PURE__ */ jsx(Button, { label: cancel, kind: "secondary", size: "md", onClick: dismiss }),
        /* @__PURE__ */ jsx(Button, { label: confirm, kind: confirmKind, size: "md", onClick: () => {
          setOpen(false);
          onConfirm && onConfirm();
        } })
      ] })
    ] });
    if (inline) return /* @__PURE__ */ jsx("div", { ref: forwardedRef, role: "alertdialog", "aria-label": title, ...rest, children: panel });
    return /* @__PURE__ */ jsx(Fragment2, { children: [
      trigger && /* @__PURE__ */ jsx("span", { onClick: () => setOpen(true), children: trigger }),
      /* @__PURE__ */ jsx(
        "div",
        {
          ref: forwardedRef,
          role: "alertdialog",
          "aria-modal": "true",
          "aria-label": title,
          onMouseDown: (e) => {
            if (e.target === e.currentTarget) dismiss();
          },
          style: { position: "fixed", inset: 0, background: "var(--scrim-default)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, fontFamily: FONT, ...style },
          ...rest,
          children: panel
        }
      )
    ] });
  });
  AlertDialog.displayName = "AlertDialog";
  var Trend = /* @__PURE__ */ react_default.forwardRef(function Trend2({ data = "0", labels = "", area, stroke, W = 300, H = 140, showValues = false, tooltip = true, style, ...rest }, forwardedRef) {
    const ariaLabel = rest["aria-label"] || `${data ? String(data).split(",").length : 0}-point chart`;
    const vals = String(data).split(",").map(Number);
    const labs = String(labels).split(",");
    const max = Math.max(...vals), min = Math.min(...vals, 0);
    const pad = 8;
    const span = Math.max(vals.length - 1, 1);
    const x = (i) => vals.length === 1 ? W / 2 : pad + i / span * (W - pad * 2);
    const y = (v) => H - pad - (v - min) / (max - min || 1) * (H - pad * 2);
    const pts = vals.map((v, i) => `${x(i)},${y(v)}`).join(" ");
    const areaPts = `${x(0)},${H - pad} ${pts} ${x(vals.length - 1)},${H - pad}`;
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, style: { width: "100%", maxWidth: 460, ...style }, ...rest, children: [
      /* @__PURE__ */ jsx("svg", { role: "img", "aria-label": ariaLabel, viewBox: `0 0 ${W} ${H}`, style: { width: "100%", height: "auto", display: "block" }, children: [
        [0.25, 0.5, 0.75].map((g, i) => /* @__PURE__ */ jsx("line", { x1: pad, x2: W - pad, y1: pad + g * (H - pad * 2), y2: pad + g * (H - pad * 2), stroke: "var(--neutral-border-subtle)", strokeWidth: "1" }, i)),
        area && /* @__PURE__ */ jsx(Fragment2, { children: [
          /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("linearGradient", { id: "lc-grad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: stroke, stopOpacity: "0.28" }),
            /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: stroke, stopOpacity: "0" })
          ] }) }),
          /* @__PURE__ */ jsx("polygon", { points: areaPts, fill: "url(#lc-grad)" })
        ] }),
        /* @__PURE__ */ jsx("polyline", { points: pts, fill: "none", stroke, strokeWidth: "2.5", strokeLinejoin: "round", strokeLinecap: "round" }),
        vals.map((v, i) => /* @__PURE__ */ jsx("circle", { cx: x(i), cy: y(v), r: "3.2", fill: "var(--neutral-bg-default)", stroke, strokeWidth: "2", children: tooltip && /* @__PURE__ */ jsx("title", { children: [
          labs[i] ? labs[i] + ": " : "",
          v
        ] }) }, i)),
        showValues && vals.map((v, i) => /* @__PURE__ */ jsx("text", { x: x(i), y: y(v) - 8, textAnchor: "middle", style: { font: "var(--text-caption)", fill: "var(--neutral-text-icon-default)" }, children: v }, "v" + i))
      ] }),
      /* @__PURE__ */ jsx("div", { style: { display: "flex", justifyContent: "space-between", marginTop: 6 }, children: labs.map((l, i) => /* @__PURE__ */ jsx("span", { style: { font: "var(--text-caption)", color: "var(--neutral-text-icon-muted)" }, children: l }, i)) })
    ] });
  });
  Trend.displayName = "Trend";
  var AreaChart = /* @__PURE__ */ react_default.forwardRef(function AreaChart2({ data = "8,14,10,20,17,25", labels = "Jan,Feb,Mar,Apr,May,Jun", area = true, showValues = false, tooltip = true, ...rest }, forwardedRef) {
    return /* @__PURE__ */ jsx(Trend, { ref: forwardedRef, data, labels, area: area !== false, showValues, tooltip, stroke: "var(--brand-bg-default)", ...rest });
  });
  AreaChart.displayName = "AreaChart";
  var AspectRatio = /* @__PURE__ */ react_default.forwardRef(function AspectRatio2({ ratio = "16 / 9", label, children, style, ...rest }, forwardedRef) {
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, style: { width: "100%", maxWidth: 320, ...style }, ...rest, children: /* @__PURE__ */ jsx("div", { style: {
      width: "100%",
      aspectRatio: ratio,
      borderRadius: "calc(var(--card-corner) * 1px)",
      background: "var(--neutral-bg-subtle)",
      border: "1px solid var(--neutral-border-subtle)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    }, children: children || /* @__PURE__ */ jsx("span", { style: { font: "var(--text-caption)", color: "var(--neutral-text-icon-muted)", letterSpacing: ".04em" }, children: label || ratio.replace(/\s/g, "") }) }) });
  });
  AspectRatio.displayName = "AspectRatio";
  var ROLE = {
    gray: { bg: "var(--neutral-bg-subtle)", fg: "var(--neutral-text-icon-default)", bd: "var(--neutral-border-default)" },
    neutral: { bg: "var(--neutral-bg-subtle)", fg: "var(--neutral-text-icon-default)", bd: "var(--neutral-border-default)" },
    brand: { bg: "var(--brand-bg-subtle)", fg: "var(--brand-text-icon-default)", bd: "var(--brand-border-default)" },
    info: { bg: "var(--info-bg-subtle)", fg: "var(--info-text-icon-default)", bd: "var(--info-border-default)" },
    success: { bg: "var(--success-bg-subtle)", fg: "var(--success-text-icon-default)", bd: "var(--success-border-default)" },
    warning: { bg: "var(--warning-bg-subtle)", fg: "var(--warning-text-icon-default)", bd: "var(--warning-border-default)" },
    error: { bg: "var(--error-bg-subtle)", fg: "var(--error-text-icon-default)", bd: "var(--error-border-default)" },
    secondary: { bg: "var(--secondary-bg-subtle)", fg: "var(--secondary-text-icon-default)", bd: "var(--secondary-border-default)" }
  };
  var BadgeChip = /* @__PURE__ */ react_default.forwardRef(function BadgeChip2({ label = "Badge", color = "gray", dot = false, tooltip, style, ...rest }, forwardedRef) {
    const r = ROLE[color] || ROLE.gray;
    const chip = /* @__PURE__ */ jsx("span", { ref: forwardedRef, style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 24,
      padding: "0 10px",
      borderRadius: 9999,
      background: r.bg,
      color: r.fg,
      border: `1px solid ${r.bd}`,
      font: "var(--text-caption)",
      whiteSpace: "nowrap",
      cursor: tooltip ? "help" : void 0,
      ...style
    }, ...rest, children: [
      dot && /* @__PURE__ */ jsx("span", { style: { width: 6, height: 6, borderRadius: 9999, background: "currentColor", flex: "none" } }),
      label
    ] });
    return tooltip ? /* @__PURE__ */ jsx(HoverTip, { label: tooltip, children: chip }) : chip;
  });
  BadgeChip.displayName = "BadgeChip";
  var TONE2 = {
    info: ["var(--info-bg-subtle)", "var(--info-border-default)", "var(--info-text-icon-strong)", "info"],
    success: ["var(--success-bg-subtle)", "var(--success-border-default)", "var(--success-text-icon-strong)", "check_circle"],
    warning: ["var(--warning-bg-subtle)", "var(--warning-border-default)", "var(--warning-text-icon-strong)", "warning"],
    error: ["var(--error-bg-subtle)", "var(--error-border-default)", "var(--error-text-icon-strong)", "error"],
    brand: ["var(--brand-bg-subtle)", "var(--brand-border-default)", "var(--brand-text-icon-default)", "campaign"]
  };
  var SIZE2 = {
    inline: ["6px 10px", 18, 8, "var(--text-body-sm)", "calc(var(--radius-sm) * 1px)", true],
    sm: ["10px 12px", 20, 10, "var(--text-subtitle)", "calc(var(--radius-md) * 1px)", false],
    md: ["14px 16px", 22, 12, "var(--text-subtitle)", "calc(var(--card-corner) * 1px)", false],
    lg: ["18px 20px", 26, 14, "var(--text-h3)", "calc(var(--card-corner) * 1px)", false]
  };
  var Banner = /* @__PURE__ */ react_default.forwardRef(function Banner2({ color = "info", size = "md", title = "Heads up", message = "This is a contextual message tied to this region of the page.", onClose, style, ...rest }, forwardedRef) {
    const [bg, bd, fg, icon] = TONE2[color] || TONE2.info;
    const [pad, iconPx, gap, titleFont, radius, oneLine] = SIZE2[size] || SIZE2.md;
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, style: {
      display: "flex",
      alignItems: oneLine ? "center" : "flex-start",
      gap,
      width: "100%",
      boxSizing: "border-box",
      padding: pad,
      background: bg,
      border: `1px solid ${bd}`,
      borderRadius: radius,
      ...style
    }, ...rest, children: [
      /* @__PURE__ */ jsx("span", { className: "material-symbols-rounded", style: { fontSize: iconPx, color: fg, flex: "none", marginTop: oneLine ? 0 : 1 }, children: icon }),
      /* @__PURE__ */ jsx("div", { style: { flex: 1, minWidth: 0, display: oneLine ? "flex" : "block", alignItems: "baseline", gap: 6 }, children: [
        title && /* @__PURE__ */ jsx("div", { style: { font: titleFont, color: fg, flex: "none" }, children: title }),
        message && /* @__PURE__ */ jsx("div", { style: { font: "var(--text-body-sm)", color: "var(--neutral-text-icon-default)", marginTop: oneLine ? 0 : 2, lineHeight: 1.5, minWidth: 0, overflow: oneLine ? "hidden" : void 0, textOverflow: oneLine ? "ellipsis" : void 0, whiteSpace: oneLine ? "nowrap" : void 0 }, children: message })
      ] }),
      onClose && /* @__PURE__ */ jsx("span", { className: "material-symbols-rounded", onClick: onClose, style: { fontSize: iconPx - 2, color: "var(--neutral-text-icon-muted)", cursor: "pointer", flex: "none" }, children: "close" })
    ] });
  });
  Banner.displayName = "Banner";
  var SERIES = ["var(--brand-bg-default)", "var(--info-bg-default)", "var(--success-bg-default)", "var(--warning-bg-default)", "var(--error-bg-default)", "var(--brand-bg-accent)"];
  var BarChart = /* @__PURE__ */ react_default.forwardRef(function BarChart2({ data = "12,19,8,15,22,17", labels = "Jan,Feb,Mar,Apr,May,Jun", orientation = "vertical", multicolor = false, showValues = true, tooltip = true, style, ...rest }, forwardedRef) {
    const vals = String(data).split(",").map(Number);
    const labs = String(labels).split(",");
    const max = Math.max(...vals, 1);
    const col = (i) => multicolor ? SERIES[i % SERIES.length] : "var(--brand-bg-default)";
    const [hi, setHi] = useState(-1);
    const tip = (i) => tooltip ? { onMouseEnter: () => setHi(i), onMouseLeave: () => setHi(-1), title: `${labs[i]}: ${vals[i]}` } : {};
    const Tip = ({ i }) => tooltip && hi === i ? /* @__PURE__ */ jsx("span", { style: { position: "absolute", bottom: "100%", left: "50%", transform: "translate(-50%,-6px)", background: "var(--neutral-bg-inverse)", color: "var(--neutral-text-icon-on)", font: "var(--text-caption)", padding: "3px 8px", borderRadius: 6, whiteSpace: "nowrap", boxShadow: "var(--shadow-md)", pointerEvents: "none", zIndex: 2 }, children: [
      labs[i],
      ": ",
      vals[i]
    ] }) : null;
    if (orientation === "horizontal") return /* @__PURE__ */ jsx("div", { ref: forwardedRef, style: { width: "100%", maxWidth: 460, display: "flex", flexDirection: "column", gap: 10, ...style }, ...rest, children: vals.map((v, i) => /* @__PURE__ */ jsx("div", { style: { position: "relative", display: "flex", alignItems: "center", gap: 10 }, ...tip(i), children: [
      /* @__PURE__ */ jsx("span", { style: { width: 34, font: "var(--text-caption)", color: "var(--neutral-text-icon-muted)", textAlign: "right" }, children: labs[i] }),
      /* @__PURE__ */ jsx("div", { style: { flex: 1, height: 20, background: "var(--neutral-bg-subtle)", borderRadius: 6, overflow: "hidden" }, children: /* @__PURE__ */ jsx("div", { style: { width: v / max * 100 + "%", height: "100%", background: col(i), borderRadius: 6 } }) }),
      showValues && /* @__PURE__ */ jsx("span", { style: { width: 28, font: "var(--text-caption)", color: "var(--neutral-text-icon-default)" }, children: v }),
      /* @__PURE__ */ jsx(Tip, { i })
    ] }, i)) });
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, style: { width: "100%", maxWidth: 460, ...style }, ...rest, children: [
      /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "flex-end", gap: 12, height: 200 }, children: vals.map((v, i) => /* @__PURE__ */ jsx("div", { style: { position: "relative", flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, height: "100%", justifyContent: "flex-end" }, ...tip(i), children: [
        /* @__PURE__ */ jsx(Tip, { i }),
        showValues && /* @__PURE__ */ jsx("span", { style: { font: "var(--text-caption)", color: "var(--neutral-text-icon-default)" }, children: v }),
        /* @__PURE__ */ jsx("div", { style: { width: "100%", height: v / max * 100 + "%", background: col(i), borderRadius: "6px 6px 0 0", minHeight: 2, transition: "filter var(--motion-fast) var(--motion-ease)", filter: hi === i ? "brightness(0.94)" : "none" } })
      ] }, i)) }),
      /* @__PURE__ */ jsx("div", { style: { display: "flex", gap: 12, marginTop: 8 }, children: labs.map((l, i) => /* @__PURE__ */ jsx("span", { style: { flex: 1, textAlign: "center", font: "var(--text-caption)", color: "var(--neutral-text-icon-muted)" }, children: l }, i)) })
    ] });
  });
  BarChart.displayName = "BarChart";
  function Crumb({ children, current, onClick }) {
    const [hover, setHover] = useState(false);
    const [press, setPress] = useState(false);
    const [focus, setFocus] = useState(false);
    if (current) return /* @__PURE__ */ jsx("span", { style: { font: "var(--text-body)", color: "var(--brand-text-icon-default)", fontWeight: 600 }, children });
    const color = press ? "var(--neutral-text-icon-strong)" : hover ? "var(--neutral-text-icon-emphasis)" : "var(--neutral-text-icon-muted)";
    return /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick,
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => {
          setHover(false);
          setPress(false);
        },
        onMouseDown: () => setPress(true),
        onMouseUp: () => setPress(false),
        onFocus: () => setFocus(true),
        onBlur: () => setFocus(false),
        style: {
          border: "none",
          background: "transparent",
          padding: "2px 4px",
          margin: "0 -4px",
          borderRadius: 6,
          font: "var(--text-body)",
          color,
          cursor: "pointer",
          textDecoration: hover ? "underline" : "none",
          textUnderlineOffset: 2,
          boxShadow: focus ? "var(--focus-ring)" : "none",
          transition: "color .12s, box-shadow .12s"
        },
        children
      }
    );
  }
  var Sep = () => /* @__PURE__ */ jsx("span", { className: "material-symbols-rounded", style: { fontSize: 18, color: "var(--neutral-text-icon-subtle)" }, children: "chevron_right" });
  var Breadcrumbs = /* @__PURE__ */ react_default.forwardRef(function Breadcrumbs2({ variant = "default", root = "Webhooks", parent = "", current = "Create New Inbound Connection", onNavigate, style, ...rest }, forwardedRef) {
    const wrap = (ch) => /* @__PURE__ */ jsx("nav", { ref: forwardedRef, "aria-label": "Breadcrumb", style: { display: "inline-flex", alignItems: "center", gap: 6, ...style }, ...rest, children: ch });
    if (variant === "back") {
      return wrap(/* @__PURE__ */ jsx(Crumb, { onClick: () => onNavigate && onNavigate("back"), children: /* @__PURE__ */ jsx("span", { style: { display: "inline-flex", alignItems: "center", gap: 6 }, children: [
        /* @__PURE__ */ jsx("span", { className: "material-symbols-rounded", style: { fontSize: 20 }, children: "arrow_back" }),
        current
      ] }) }));
    }
    if (variant === "more") return wrap(/* @__PURE__ */ jsx(Fragment2, { children: [
      /* @__PURE__ */ jsx(Crumb, { onClick: () => onNavigate && onNavigate(root), children: root }),
      /* @__PURE__ */ jsx(Sep, {}),
      /* @__PURE__ */ jsx(Crumb, { onClick: () => onNavigate && onNavigate("more"), children: /* @__PURE__ */ jsx("span", { className: "material-symbols-rounded", style: { fontSize: 18, verticalAlign: "middle" }, children: "more_horiz" }) }),
      /* @__PURE__ */ jsx(Sep, {}),
      /* @__PURE__ */ jsx(Crumb, { current: true, children: current })
    ] }));
    return wrap(/* @__PURE__ */ jsx(Fragment2, { children: [
      /* @__PURE__ */ jsx(Crumb, { onClick: () => onNavigate && onNavigate(root), children: root }),
      parent && /* @__PURE__ */ jsx(Fragment2, { children: [
        /* @__PURE__ */ jsx(Sep, {}),
        /* @__PURE__ */ jsx(Crumb, { onClick: () => onNavigate && onNavigate(parent), children: parent })
      ] }),
      /* @__PURE__ */ jsx(Sep, {}),
      /* @__PURE__ */ jsx(Crumb, { current: true, children: current })
    ] }));
  });
  Breadcrumbs.displayName = "Breadcrumbs";
  function IconAffordance({ glyph, size = 18, onClick, disabled = false, label, w = 28, h = 28, style }) {
    const [hover, setHover] = useState(false);
    const [active, setActive] = useState(false);
    return /* @__PURE__ */ jsx(
      "span",
      {
        role: "button",
        "aria-label": label,
        tabIndex: disabled ? -1 : 0,
        onMouseDown: (e) => {
          e.preventDefault();
          if (!disabled) setActive(true);
        },
        onMouseUp: () => setActive(false),
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => {
          setHover(false);
          setActive(false);
        },
        onClick: (e) => {
          if (!disabled && onClick) onClick(e);
        },
        onKeyDown: (e) => {
          if ((e.key === "Enter" || e.key === " ") && !disabled && onClick) {
            e.preventDefault();
            onClick(e);
          }
        },
        style: {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          flex: "none",
          width: w,
          height: h,
          borderRadius: "calc(var(--radius-sm) * 1px)",
          background: disabled ? "transparent" : active ? "var(--brand-bg-subtle)" : hover ? "var(--brand-bg-weak)" : "transparent",
          color: disabled ? "var(--neutral-text-icon-weak)" : "var(--neutral-text-icon-default)",
          cursor: disabled ? "not-allowed" : "pointer",
          fontFamily: "'Material Symbols Rounded'",
          fontSize: size,
          userSelect: "none",
          transition: "background var(--motion-fast) var(--motion-ease)",
          ...style
        },
        children: glyph
      }
    );
  }
  var TYPE = {
    radius: { label: "Radius", icon: "my_location", resizable: true },
    polygon: { label: "Polygon", icon: "polyline", resizable: false },
    location: { label: "Location", icon: "location_on", resizable: false }
  };
  var TYPES = ["radius", "polygon", "location"];
  var BubbleBox = /* @__PURE__ */ react_default.forwardRef(function BubbleBox2({
    type = "radius",
    typeIcon,
    typeLabel,
    address = "Prescott Valley",
    meta,
    structures = "13,000",
    structuresIcon = "home",
    radius = 18,
    unit = "mi",
    selected = "include",
    // 'include' | 'exclude'
    removable = true,
    removeLabel = "Remove area",
    excludeDisabled = false,
    onInclude,
    onExclude,
    onRadiusChange,
    onRemove,
    style,
    ...rest
  }, forwardedRef) {
    const t = TYPES.includes(type) ? type : "radius";
    const cfg = TYPE[t];
    const [mode, setMode] = useState(selected);
    const [r, setR] = useState(radius);
    const SP_LG = "calc(var(--spacing-lg) * 1px)";
    const SP_MD = "calc(var(--spacing-md) * 1px)";
    const SP_SM = "calc(var(--spacing-sm) * 1px)";
    const WRAP = "calc(var(--icon-size-md) * 1px)";
    const seg = (label, m, cb, disabled = false) => {
      const active = mode === m;
      const activeBg = m === "exclude" ? "var(--error-bg-default)" : "var(--info-bg-default)";
      return /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          "aria-pressed": active,
          disabled,
          onClick: () => {
            if (disabled) return;
            setMode(m);
            cb && cb();
          },
          style: {
            flex: 1,
            height: 44,
            border: 0,
            cursor: disabled ? "not-allowed" : "pointer",
            background: disabled ? "var(--neutral-bg-subtle)" : active ? activeBg : "var(--neutral-bg-default)",
            color: disabled ? "var(--neutral-text-icon-weak)" : active ? "var(--neutral-text-icon-on)" : "var(--neutral-text-icon-emphasis)",
            font: "var(--text-subtitle)",
            transition: "background var(--motion-base) var(--motion-ease), color var(--motion-base) var(--motion-ease)"
          },
          children: label
        }
      );
    };
    const row = (label, value) => /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: SP_LG }, children: [
      /* @__PURE__ */ jsx("span", { style: { font: "var(--text-body-sm)", fontWeight: 600, color: "var(--neutral-text-icon-muted)" }, children: label }),
      /* @__PURE__ */ jsx("span", { style: { font: "var(--text-body-sm)", fontWeight: 600, color: "var(--neutral-text-icon-emphasis)" }, children: value })
    ] });
    const iconValue = (icon, text, color) => /* @__PURE__ */ jsx("span", { style: { display: "inline-flex", alignItems: "center", gap: SP_SM }, children: [
      /* @__PURE__ */ jsx("span", { style: { width: WRAP, height: WRAP, flex: "none", display: "inline-flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ jsx(Icon, { name: icon, size: "md", color: color || "var(--neutral-text-icon-default)" }) }),
      /* @__PURE__ */ jsx("span", { children: text })
    ] });
    const bump = (d) => {
      const n = Math.max(0, r + d);
      setR(n);
      onRadiusChange && onRadiusChange(n);
    };
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, style: {
      width: 320,
      background: "var(--neutral-bg-default)",
      border: "1px solid var(--neutral-border-subtle)",
      borderRadius: "calc(var(--card-corner) * 1px)",
      boxShadow: "var(--shadow-dialog)",
      position: "relative",
      boxSizing: "border-box",
      padding: `${SP_LG} ${SP_MD}`,
      ...style
    }, ...rest, children: [
      /* @__PURE__ */ jsx("div", { style: { display: "flex", border: "1px solid var(--neutral-border-muted)", borderRadius: "calc(var(--radius-md) * 1px)", overflow: "hidden", marginBottom: SP_LG }, children: [
        seg("Include", "include", onInclude),
        /* @__PURE__ */ jsx("span", { style: { width: 1, background: "var(--neutral-border-muted)" } }),
        seg("Exclude", "exclude", onExclude, excludeDisabled)
      ] }),
      /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: SP_LG }, children: [
        row("Type", iconValue(typeIcon || cfg.icon, typeLabel || cfg.label, "var(--info-text-icon-default)")),
        row("Address", meta ? /* @__PURE__ */ jsx("span", { style: { display: "inline-flex", flexDirection: "column", alignItems: "flex-end", gap: 2 }, children: [
          /* @__PURE__ */ jsx("span", { children: address }),
          /* @__PURE__ */ jsx("span", { style: { font: "var(--text-body-sm)", fontWeight: 400, color: "var(--neutral-text-icon-muted)" }, children: meta })
        ] }) : address),
        row("Structures", iconValue(structuresIcon, structures)),
        cfg.resizable && /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: SP_LG }, children: [
          /* @__PURE__ */ jsx("span", { style: { font: "var(--text-body-sm)", fontWeight: 600, color: "var(--neutral-text-icon-muted)" }, children: "Radius" }),
          /* @__PURE__ */ jsx("div", { style: {
            display: "inline-flex",
            alignItems: "center",
            gap: SP_SM,
            height: "calc(var(--control-md-height) * 1px)",
            padding: "0 4px 0 12px",
            border: "2px solid var(--neutral-border-muted)",
            borderRadius: "calc(var(--control-md-radius) * 1px)",
            background: "var(--neutral-bg-default)"
          }, children: [
            /* @__PURE__ */ jsx("span", { style: { font: "var(--text-body)", fontWeight: 600, color: "var(--neutral-text-icon-emphasis)" }, children: [
              r,
              " ",
              unit
            ] }),
            /* @__PURE__ */ jsx("span", { style: { display: "flex", flexDirection: "column" }, children: [
              /* @__PURE__ */ jsx(IconAffordance, { glyph: "expand_less", size: 16, w: 22, h: 14, label: "Increase radius", onClick: () => bump(1) }),
              /* @__PURE__ */ jsx(IconAffordance, { glyph: "expand_more", size: 16, w: 22, h: 14, label: "Decrease radius", onClick: () => bump(-1) })
            ] })
          ] })
        ] })
      ] }),
      removable && /* @__PURE__ */ jsx("div", { style: { marginTop: SP_LG, paddingTop: SP_MD, borderTop: "1px solid var(--neutral-border-subtle)" }, children: /* @__PURE__ */ jsx(
        Button,
        {
          label: removeLabel,
          kind: "destructive",
          size: "sm",
          icon: "delete",
          onClick: onRemove,
          style: { width: "100%", justifyContent: "center" }
        }
      ) }),
      /* @__PURE__ */ jsx("span", { style: {
        position: "absolute",
        bottom: -8,
        left: "50%",
        width: 16,
        height: 16,
        background: "var(--neutral-bg-default)",
        borderRight: "1px solid var(--neutral-border-subtle)",
        borderBottom: "1px solid var(--neutral-border-subtle)",
        transform: "translateX(-50%) rotate(45deg)"
      } })
    ] });
  });
  BubbleBox.displayName = "BubbleBox";
  var STATUS = {
    success: ["Delivered", "check_circle", "success"],
    completed: ["Completed", "task_alt", "success"],
    failed: ["Failed", "error", "error"],
    scheduled: ["Scheduled", "schedule", "info"],
    processing: ["Processing", "autorenew", "info"],
    filtered: ["Filtered", "filter_alt", "neutral"],
    inactive: ["Inactive", "pause_circle", "neutral"],
    paused: ["Paused", "pause", "warning"]
  };
  var FG = {
    success: "var(--success-text-icon-default)",
    error: "var(--error-text-icon-default)",
    info: "var(--info-text-icon-default)",
    warning: "var(--warning-text-icon-default)",
    neutral: "var(--neutral-text-icon-muted)"
  };
  var StatusPill = /* @__PURE__ */ react_default.forwardRef(function StatusPill2({ status = "success", label, style, ...rest }, forwardedRef) {
    const [defLabel, icon, fam] = STATUS[status] || STATUS.success;
    const fg = FG[fam] || FG.neutral;
    return /* @__PURE__ */ jsx("span", { ref: forwardedRef, style: { display: "inline-flex", alignItems: "center", gap: 6, font: "var(--text-subtitle)", color: fg, whiteSpace: "nowrap", ...style }, ...rest, children: [
      /* @__PURE__ */ jsx("span", { className: "material-symbols-rounded", style: { fontSize: 18, color: fg }, children: icon }),
      label || defLabel
    ] });
  });
  StatusPill.displayName = "StatusPill";
  var CampaignCard = /* @__PURE__ */ react_default.forwardRef(function CampaignCard2({ name = "Example item", owner = "Owner name", initials = "ON", status = "success", plan = "Plan", recipients = "0", style, ...rest }, forwardedRef) {
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, style: {
      width: 320,
      boxSizing: "border-box",
      padding: 18,
      background: "var(--neutral-bg-default)",
      border: "1px solid var(--neutral-border-subtle)",
      borderRadius: "calc(var(--card-corner) * 1px)",
      boxShadow: "var(--shadow-xs)",
      ...style
    }, ...rest, children: [
      /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ jsx("span", { style: { display: "inline-flex", alignItems: "center", gap: 10 }, children: [
          /* @__PURE__ */ jsx(Avatar, { initials, size: "sm" }),
          /* @__PURE__ */ jsx("span", { children: [
            /* @__PURE__ */ jsx("span", { style: { display: "block", font: "var(--text-title)", color: "var(--neutral-text-icon-emphasis)" }, children: name }),
            /* @__PURE__ */ jsx("span", { style: { display: "block", font: "var(--text-caption)", color: "var(--neutral-text-icon-muted)" }, children: owner })
          ] })
        ] }),
        /* @__PURE__ */ jsx(BadgeChip, { label: plan, color: "brand" })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 16, paddingTop: 14, borderTop: "1px solid var(--neutral-border-subtle)" }, children: [
        /* @__PURE__ */ jsx(StatusPill, { status }),
        /* @__PURE__ */ jsx("span", { style: { font: "var(--text-subtitle)", color: "var(--neutral-text-icon-emphasis)" }, children: [
          recipients,
          " ",
          /* @__PURE__ */ jsx("span", { style: { font: "var(--text-caption)", color: "var(--neutral-text-icon-muted)" }, children: "recipients" })
        ] })
      ] })
    ] });
  });
  CampaignCard.displayName = "CampaignCard";
  var FONT2 = "var(--font-family-body)";
  var Card = /* @__PURE__ */ react_default.forwardRef(function Card2({ title, subtitle, footer, children, style, className, ...rest }, forwardedRef) {
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, className, style: { boxSizing: "border-box", width: "100%", maxWidth: 360, background: "var(--neutral-bg-default)", border: "1px solid var(--neutral-border-subtle)", borderRadius: "calc(var(--card-corner) * 1px)", boxShadow: "0 1px 2px rgb(var(--ink) / 0.08)", overflow: "hidden", fontFamily: FONT2, ...style }, ...rest, children: [
      (title != null || subtitle != null) && /* @__PURE__ */ jsx("div", { style: { padding: "20px 20px 0 20px" }, children: [
        title != null && /* @__PURE__ */ jsx("div", { style: { font: "var(--text-title)", color: "var(--neutral-text-icon-emphasis)" }, children: title }),
        subtitle != null && subtitle !== "" && /* @__PURE__ */ jsx("div", { style: { marginTop: 4, font: "var(--text-body-sm)", color: "var(--neutral-text-icon-muted)" }, children: subtitle })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { padding: "16px 20px", font: "var(--text-body)", color: "var(--neutral-text-icon-default)" }, children }),
      footer != null && footer !== "" && /* @__PURE__ */ jsx("div", { style: { padding: "12px 20px", borderTop: "1px solid var(--neutral-border-subtle)", background: "var(--neutral-bg-subtle)", font: "var(--text-body-sm)", color: "var(--neutral-text-icon-muted)" }, children: footer })
    ] });
  });
  Card.displayName = "Card";
  var Carousel = /* @__PURE__ */ react_default.forwardRef(function Carousel2({ slides = 4, active = 0, style, ...rest }, forwardedRef) {
    const n = Math.max(2, Math.min(8, Number(slides) || 4));
    const [cur, setCur] = useState(Math.max(0, Math.min(n - 1, active)));
    const go = (d) => setCur((c) => (c + d + n) % n);
    const arrow = (icon, d) => /* @__PURE__ */ jsx("button", { type: "button", onClick: () => go(d), style: {
      position: "absolute",
      top: "50%",
      [d < 0 ? "left" : "right"]: 8,
      transform: "translateY(-50%)",
      width: 32,
      height: 32,
      borderRadius: 9999,
      border: 0,
      background: "var(--neutral-bg-default)",
      boxShadow: "var(--shadow-md)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    }, children: /* @__PURE__ */ jsx("span", { className: "material-symbols-rounded", style: { fontSize: 20, color: "var(--neutral-text-icon-emphasis)" }, children: icon }) });
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, style: { width: "100%", maxWidth: 340, ...style }, ...rest, children: [
      /* @__PURE__ */ jsx("div", { style: {
        position: "relative",
        height: 170,
        borderRadius: "calc(var(--card-corner) * 1px)",
        background: "var(--brand-bg-subtle)",
        border: "1px solid var(--neutral-border-subtle)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        font: "var(--text-display)",
        color: "var(--brand-text-icon-default)"
      }, children: [
        cur + 1,
        arrow("chevron_left", -1),
        arrow("chevron_right", 1)
      ] }),
      /* @__PURE__ */ jsx("div", { style: { display: "flex", justifyContent: "center", gap: 7, marginTop: 12 }, children: Array.from({ length: n }, (_, i) => /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setCur(i), style: {
        width: i === cur ? 20 : 7,
        height: 7,
        borderRadius: 9999,
        border: 0,
        cursor: "pointer",
        background: i === cur ? "var(--brand-bg-default)" : "var(--neutral-border-default)",
        transition: "width .2s"
      } }, i)) })
    ] });
  });
  Carousel.displayName = "Carousel";
  var CELL_TONE = {
    default: "var(--neutral-text-icon-strong)",
    muted: "var(--neutral-text-icon-default)",
    brand: "var(--brand-text-icon-default)",
    success: "var(--success-text-icon-default)",
    error: "var(--error-text-icon-default)",
    strong: "var(--neutral-text-icon-strong)"
  };
  var signTone = (v) => /^\s*-/.test(String(v)) ? "error" : /^\s*\+/.test(String(v)) ? "success" : "default";
  var Cell = /* @__PURE__ */ react_default.forwardRef(function Cell2({
    type = "text",
    value = "Cell value",
    tone = "default",
    align,
    band = false,
    header = false,
    state = "default",
    status = "success",
    initials,
    checked = false,
    sort,
    style,
    ...rest
  }, forwardedRef) {
    const [hoverS, setHover] = useState(false);
    const hover = hoverS || state === "hovered";
    const selected = state === "selected";
    const numeric = type === "integer" || type === "currency";
    const just = align === "right" || numeric && !align ? "flex-end" : align === "center" ? "center" : "flex-start";
    const bg = header ? "var(--neutral-bg-default)" : selected ? "var(--cell-surface-selected)" : hover ? "var(--cell-surface-hovered)" : band ? "var(--cell-surface-banded)" : "var(--neutral-bg-default)";
    const color = header ? "var(--neutral-text-icon-strong)" : CELL_TONE[tone] || CELL_TONE.default;
    const font = header ? "var(--text-subtitle)" : numeric ? "var(--text-body)" : "var(--text-body)";
    const border = header ? "1px solid var(--cell-border-default)" : "1px solid var(--cell-border-default)";
    let content;
    if (type === "avatar") content = /* @__PURE__ */ jsx("span", { style: { display: "inline-flex", alignItems: "center", gap: 10 }, children: [
      /* @__PURE__ */ jsx(Avatar, { initials: initials || String(value).split(" ").map((w) => w[0]).join("").slice(0, 2), size: "sm" }),
      /* @__PURE__ */ jsx("span", { style: { color: CELL_TONE.default }, children: value })
    ] });
    else if (type === "badge") content = /* @__PURE__ */ jsx(BadgeChip, { label: value, color: tone === "default" ? "brand" : tone });
    else if (type === "status") content = /* @__PURE__ */ jsx(StatusPill, { status, label: value !== "Cell value" ? value : void 0 });
    else if (type === "action") content = /* @__PURE__ */ jsx("span", { style: { width: 18, height: 18, borderRadius: 5, border: `2px solid ${checked ? "var(--info-bg-emphasis)" : "var(--neutral-border-default)"}`, background: checked ? "var(--info-bg-emphasis)" : "transparent", display: "inline-flex", alignItems: "center", justifyContent: "center" }, children: checked && /* @__PURE__ */ jsx("span", { className: "material-symbols-rounded", style: { fontSize: 14, color: "var(--neutral-text-icon-on)" }, children: "check" }) });
    else if (type === "button") content = /* @__PURE__ */ jsx(Button, { label: value !== "Cell value" ? value : "Open", kind: "secondary", size: "sm" });
    else if (type === "header") content = /* @__PURE__ */ jsx("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
      value,
      sort && /* @__PURE__ */ jsx("span", { className: "material-symbols-rounded", style: { fontSize: 16 }, children: sort === "desc" ? "arrow_downward" : "arrow_upward" })
    ] });
    else content = value;
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref: forwardedRef,
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: just,
          gap: "calc(var(--control-md-gap) * 1px)",
          height: "calc(var(--cell-height) * 1px)",
          padding: "0 calc(var(--cell-padding) * 1px)",
          boxSizing: "border-box",
          background: bg,
          border,
          color,
          font,
          width: "100%",
          ...style
        },
        ...rest,
        children: content
      }
    );
  });
  Cell.displayName = "Cell";
  var SegmentedControl = /* @__PURE__ */ react_default.forwardRef(function SegmentedControl2({
    options,
    icons,
    orientation = "horizontal",
    kind = "toggle",
    value,
    defaultValue = 0,
    stretch = false,
    onChange,
    style,
    ...rest
  }, forwardedRef) {
    const isControlled = value !== void 0 && value !== null;
    const [inner, setInner] = useState(defaultValue);
    const cur = isControlled ? value : inner;
    const labels = (typeof options === "string" ? options.split(",").map((s) => s.trim()) : options) || ["Day", "Week", "Month"];
    const iconList = typeof icons === "string" ? icons.split(",").map((s) => s.trim()) : icons || [];
    const toggle = kind === "toggle";
    const primary = kind === "primary";
    const vertical = orientation === "vertical";
    const outerBorder = toggle ? "none" : primary ? "1px solid var(--brand-bg-default)" : "1px solid var(--neutral-border-muted)";
    const select = (i) => {
      if (!isControlled) setInner(i);
      if (onChange) onChange(i);
    };
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, role: "tablist", "aria-orientation": orientation, style: {
      display: "inline-flex",
      flexDirection: vertical ? "column" : "row",
      background: toggle ? "var(--neutral-bg-subtle)" : "transparent",
      border: outerBorder,
      borderRadius: toggle ? 12 : "calc(var(--control-md-radius) * 1px)",
      padding: toggle ? 3 : 0,
      gap: toggle ? 2 : 0,
      overflow: "hidden",
      ...style
    }, ...rest, children: labels.map((label, i) => {
      const on = i === cur;
      const bg = on ? toggle ? "var(--neutral-bg-default)" : primary ? "var(--brand-bg-default)" : "var(--brand-bg-subtle)" : primary ? "var(--neutral-bg-default)" : "transparent";
      const fg = on ? primary ? "var(--brand-text-icon-on)" : "var(--brand-text-icon-default)" : primary ? "var(--neutral-text-icon-emphasis)" : "var(--neutral-text-icon-muted)";
      const divBorder = primary ? "1px solid var(--brand-bg-default)" : "1px solid var(--neutral-border-muted)";
      const divider = !toggle && i > 0 ? divBorder : "none";
      const icon = iconList[i];
      return /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          role: "tab",
          "aria-selected": on,
          onClick: () => select(i),
          style: {
            flex: stretch ? 1 : "none",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            height: "calc(var(--control-md-height) * 1px)",
            padding: label ? "0 16px" : "0 12px",
            border: 0,
            borderLeft: !vertical ? divider : 0,
            borderTop: vertical ? divider : 0,
            background: bg,
            color: fg,
            font: "var(--text-subtitle)",
            cursor: "pointer",
            borderRadius: toggle ? 9 : 0,
            boxShadow: on && toggle ? "var(--shadow-xs)" : "none",
            transition: "background var(--motion-fast) var(--motion-ease), color var(--motion-fast) var(--motion-ease)"
          },
          children: [
            icon && /* @__PURE__ */ jsx(Icon, { name: icon, size: "small", color: fg }),
            label && /* @__PURE__ */ jsx("span", { children: label })
          ]
        },
        label + i
      );
    }) });
  });
  SegmentedControl.displayName = "SegmentedControl";
  var VIEWS = ["Map", "Satellite"];
  var ChangeMap = /* @__PURE__ */ react_default.forwardRef(function ChangeMap2({
    views,
    value,
    defaultValue = 0,
    onChange,
    style,
    ...rest
  }, forwardedRef) {
    return /* @__PURE__ */ jsx(
      SegmentedControl,
      {
        ref: forwardedRef,
        options: views || VIEWS,
        value,
        defaultValue,
        onChange,
        style,
        ...rest
      }
    );
  });
  ChangeMap.displayName = "ChangeMap";
  var FONT3 = "var(--font-family-body)";
  var COLORS = ["var(--brand-bg-default)", "var(--info-bg-emphasis)", "var(--success-bg-default)", "var(--warning-bg-default)", "var(--error-bg-default)"];
  var ChartCard = /* @__PURE__ */ react_default.forwardRef(function ChartCard2({ title = "Revenue", subtitle, trend, series, children, style, className, ...rest }, forwardedRef) {
    const names = Array.isArray(series) ? series : series ? String(series).split(",").map((s) => s.trim()).filter(Boolean) : [];
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, className, style: { boxSizing: "border-box", width: "100%", maxWidth: 420, background: "var(--neutral-bg-default)", border: "1px solid var(--neutral-border-subtle)", borderRadius: "calc(var(--card-corner) * 1px)", boxShadow: "0 1px 2px rgb(var(--ink) / 0.08)", padding: 20, fontFamily: FONT3, ...style }, ...rest, children: [
      /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }, children: [
        /* @__PURE__ */ jsx("div", { children: [
          /* @__PURE__ */ jsx("div", { style: { font: "var(--text-title)", color: "var(--neutral-text-icon-emphasis)" }, children: title }),
          subtitle != null && subtitle !== "" && /* @__PURE__ */ jsx("div", { style: { font: "var(--text-body-sm)", color: "var(--neutral-text-icon-muted)", marginTop: 2 }, children: subtitle })
        ] }),
        trend != null && trend !== "" && /* @__PURE__ */ jsx("span", { style: { font: "var(--text-subtitle)", color: "var(--success-text-icon-default)", whiteSpace: "nowrap" }, children: trend })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { marginTop: 16 }, children }),
      names.length > 0 && /* @__PURE__ */ jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: 14, marginTop: 14 }, children: names.map((n, i) => /* @__PURE__ */ jsx("span", { style: { display: "inline-flex", alignItems: "center", gap: 6, font: "var(--text-body-sm)", color: "var(--neutral-text-icon-muted)" }, children: [
        /* @__PURE__ */ jsx("span", { style: { width: 10, height: 10, borderRadius: 3, background: COLORS[i % COLORS.length] } }),
        n
      ] }, n)) })
    ] });
  });
  ChartCard.displayName = "ChartCard";
  var COLORS2 = ["var(--brand-bg-default)", "var(--info-bg-emphasis)", "var(--success-bg-default)", "var(--warning-bg-default)", "var(--error-bg-default)"];
  var ChartLegend = /* @__PURE__ */ react_default.forwardRef(function ChartLegend2({ series, values, orientation = "horizontal", shape = "square", style, className, ...rest }, forwardedRef) {
    const names = Array.isArray(series) ? series : String(series || "Direct,Referral,Organic").split(",").map((s) => s.trim()).filter(Boolean);
    const vals = Array.isArray(values) ? values : String(values || "").split(",").map((s) => s.trim());
    const radius = shape === "dot" ? 9999 : shape === "line" ? 2 : 3;
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, className, style: { display: "flex", flexWrap: "wrap", flexDirection: orientation === "vertical" ? "column" : "row", gap: 16, fontFamily: "var(--font-family-body)", ...style }, ...rest, children: names.map((n, i) => /* @__PURE__ */ jsx("span", { style: { display: "inline-flex", alignItems: "center", gap: 7, font: "var(--text-body-sm)", color: "var(--neutral-text-icon-emphasis)" }, children: [
      /* @__PURE__ */ jsx("span", { style: { width: 11, height: shape === "line" ? 3 : 11, borderRadius: radius, background: COLORS2[i % COLORS2.length], flex: "none" } }),
      /* @__PURE__ */ jsx("span", { children: n }),
      vals[i] && /* @__PURE__ */ jsx("span", { style: { color: "var(--neutral-text-icon-muted)" }, children: vals[i] })
    ] }, n)) });
  });
  ChartLegend.displayName = "ChartLegend";
  var COLORS3 = ["var(--brand-bg-default)", "var(--info-bg-emphasis)", "var(--success-bg-default)", "var(--warning-bg-default)"];
  var ChartTooltip = /* @__PURE__ */ react_default.forwardRef(function ChartTooltip2({ label = "June 2026", series, values, rows, style, className, ...rest }, forwardedRef) {
    const data = rows || (() => {
      const names = Array.isArray(series) ? series : String(series || "Direct,Referral").split(",").map((s) => s.trim()).filter(Boolean);
      const vals = Array.isArray(values) ? values : String(values || "").split(",").map((s) => s.trim());
      return names.map((name, i) => ({ name, value: vals[i] || "\u2014" }));
    })();
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, className, style: { position: "relative", display: "inline-block", fontFamily: "var(--font-family-body)", ...style }, ...rest, children: [
      /* @__PURE__ */ jsx("div", { style: { minWidth: 140, background: "var(--neutral-bg-inverse, var(--neutral-bg-inverse))", borderRadius: "calc(var(--radius-sm) * 1px)", boxShadow: "0 8px 24px rgb(var(--ink) / 0.28)", padding: "10px 12px" }, children: [
        /* @__PURE__ */ jsx("div", { style: { font: "var(--text-caption)", color: "var(--surface-glass-weak)", marginBottom: 6 }, children: label }),
        data.map((r, i) => /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "2px 0" }, children: [
          /* @__PURE__ */ jsx("span", { style: { display: "inline-flex", alignItems: "center", gap: 7, font: "var(--text-body-sm)", color: "var(--neutral-text-icon-on)" }, children: [
            /* @__PURE__ */ jsx("span", { style: { width: 9, height: 9, borderRadius: 3, background: r.color || COLORS3[i % COLORS3.length] } }),
            r.name
          ] }),
          /* @__PURE__ */ jsx("span", { style: { font: "var(--text-subtitle)", color: "var(--neutral-text-icon-on)" }, children: r.value })
        ] }, r.name))
      ] }),
      /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: -5, left: 24, width: 10, height: 10, background: "var(--neutral-bg-inverse, var(--neutral-bg-inverse))", transform: "rotate(45deg)" } })
    ] });
  });
  ChartTooltip.displayName = "ChartTooltip";
  var FONT4 = "var(--font-family-body)";
  var Checkbox = /* @__PURE__ */ react_default.forwardRef(function Checkbox2({
    checked,
    defaultChecked = false,
    indeterminate = false,
    onChange,
    label = "Label",
    description,
    labelPosition = "right",
    disabled = false,
    id,
    name,
    value,
    inputRef,
    style,
    className,
    ...rest
  }, forwardedRef) {
    const isControlled = checked !== void 0 && checked !== null;
    const [inner, setInner] = useState(!!defaultChecked);
    const on = isControlled ? !!checked : inner;
    const [hovered, setHovered] = useState(false);
    const [focused, setFocused] = useState(false);
    const [active, setActive] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
      if (ref.current) ref.current.indeterminate = !!indeterminate;
    }, [indeterminate, on]);
    const toggle = (e) => {
      if (disabled) return;
      const next = !on;
      if (!isControlled) setInner(next);
      if (onChange) onChange(next, e);
    };
    const filledOn = indeterminate || on;
    let bg;
    if (filledOn) bg = hovered || active ? "var(--info-bg-strong)" : "var(--info-bg-emphasis)";
    else if (active) bg = "var(--neutral-bg-muted)";
    else if (hovered) bg = "var(--brand-bg-weak)";
    else bg = "var(--neutral-bg-default)";
    const borderColor = filledOn ? "transparent" : hovered || active ? "var(--brand-border-strong)" : "var(--neutral-border-strong)";
    const shadows = [];
    if (!filledOn) shadows.push("inset 0 0 0 1.5px " + borderColor);
    if (filledOn) shadows.push("var(--shadow-xs)");
    if (active) shadows.push("var(--shadow-pressed-deep)");
    if (focused) shadows.push("var(--focus-ring)");
    return /* @__PURE__ */ jsx(
      "label",
      {
        ref: forwardedRef,
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => {
          setHovered(false);
          setActive(false);
        },
        onMouseDown: () => setActive(true),
        onMouseUp: () => setActive(false),
        className,
        style: { display: "inline-flex", flexDirection: labelPosition === "left" ? "row-reverse" : "row", alignItems: description ? "flex-start" : "center", gap: 10, cursor: disabled ? "not-allowed" : "pointer", fontFamily: FONT4, opacity: disabled ? 0.55 : 1, userSelect: "none", ...style },
        children: [
          /* @__PURE__ */ jsx("span", { style: { position: "relative", width: 20, height: 20, flexShrink: 0 }, children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                ...rest,
                type: "checkbox",
                id,
                name,
                value,
                checked: on,
                disabled,
                ref: (el) => {
                  ref.current = el;
                  if (typeof inputRef === "function") inputRef(el);
                  else if (inputRef) inputRef.current = el;
                },
                onChange: toggle,
                onFocus: () => setFocused(true),
                onBlur: () => setFocused(false),
                style: { position: "absolute", inset: 0, margin: 0, opacity: 0, cursor: disabled ? "not-allowed" : "pointer" }
              }
            ),
            /* @__PURE__ */ jsx("span", { "aria-hidden": "true", style: { position: "absolute", left: 0, top: 0, width: 20, height: 20, borderRadius: 5, background: bg, boxShadow: shadows.join(", ") || "none", transform: active ? "scale(0.9)" : "scale(1)", transition: "background .12s ease, box-shadow .12s ease, transform .1s ease", display: "flex", alignItems: "center", justifyContent: "center" }, children: indeterminate ? /* @__PURE__ */ jsx("span", { style: { width: 9, height: 2, borderRadius: 1, background: "var(--neutral-bg-default)" } }) : on ? /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", width: "11", height: "9", viewBox: "0 0 11 9", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M1 4.5L4 7.5L10 1.5", stroke: "var(--neutral-text-icon-on)", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }) }) : null })
          ] }),
          label != null && label !== "" && /* @__PURE__ */ jsx("span", { style: { minWidth: 0 }, children: [
            /* @__PURE__ */ jsx("span", { style: { display: "block", fontSize: 14, lineHeight: 1.4, color: disabled ? "var(--neutral-text-icon-muted)" : "var(--neutral-text-icon-strong)" }, children: label }),
            description && /* @__PURE__ */ jsx("span", { style: { display: "block", font: "var(--text-body-sm)", color: "var(--neutral-text-icon-muted)", marginTop: 2, lineHeight: 1.4 }, children: description })
          ] })
        ]
      }
    );
  });
  Checkbox.displayName = "Checkbox";
  function mergeRefs(...refs) {
    return (node) => {
      for (const ref of refs) {
        if (!ref) continue;
        if (typeof ref === "function") ref(node);
        else ref.current = node;
      }
    };
  }
  var FONT5 = "var(--font-family-body)";
  function useDismiss(ref, onClose, active) {
    useEffect(() => {
      if (!active) return;
      const onDown = (e) => {
        if (ref.current && !ref.current.contains(e.target)) onClose();
      };
      const onKey = (e) => {
        if (e.key === "Escape") onClose();
      };
      document.addEventListener("mousedown", onDown);
      document.addEventListener("keydown", onKey);
      return () => {
        document.removeEventListener("mousedown", onDown);
        document.removeEventListener("keydown", onKey);
      };
    }, [active, onClose, ref]);
  }
  var surface = {
    fontFamily: FONT5,
    background: "var(--neutral-bg-default)",
    border: "1px solid var(--neutral-border-subtle)",
    borderRadius: "calc(var(--card-corner) * 1px)",
    boxShadow: "var(--shadow-lg)"
  };
  var Combobox = /* @__PURE__ */ react_default.forwardRef(function Combobox2({
    value,
    defaultValue,
    onChange,
    options = [],
    placeholder = "Select\u2026",
    disabled = false,
    style,
    className
  }, forwardedRef) {
    const isControlled = value !== void 0 && value !== null;
    const [inner, setInner] = useState(defaultValue != null ? defaultValue : "");
    const selected = isControlled ? value : inner;
    const [open, setOpen] = useState(false);
    const [hover, setHover] = useState(false);
    const [query, setQuery] = useState("");
    const ref = useRef(null);
    useDismiss(ref, () => setOpen(false), open);
    const opts = options.map((o) => typeof o === "string" ? { value: o, label: o } : o);
    const filtered = opts.filter((o) => o.label.toLowerCase().includes(query.toLowerCase()));
    const selLabel = (opts.find((o) => o.value === selected) || {}).label;
    const pick = (o) => {
      if (!isControlled) setInner(o.value);
      if (onChange) onChange(o.value);
      setOpen(false);
      setQuery("");
    };
    return /* @__PURE__ */ jsx("div", { ref: mergeRefs(ref, forwardedRef), className, style: { position: "relative", width: 260, fontFamily: "var(--font-family-body)", ...style }, children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          disabled,
          onClick: () => setOpen((o) => !o),
          onMouseEnter: () => setHover(true),
          onMouseLeave: () => setHover(false),
          style: { width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", height: "calc(var(--control-md-height) * 1px)", padding: "0 12px", background: disabled ? "var(--neutral-bg-subtle)" : "var(--neutral-bg-default)", border: "2px solid " + (open ? "var(--brand-border-strong)" : hover && !disabled ? "var(--neutral-border-subtle)" : "var(--neutral-border-muted)"), borderRadius: "calc(var(--control-md-radius) * 1px)", boxShadow: open ? "var(--focus-ring)" : "none", font: "var(--text-body)", color: disabled ? "var(--neutral-text-icon-weak)" : selLabel ? "var(--neutral-text-icon-emphasis)" : "var(--neutral-text-icon-subtle)", cursor: disabled ? "not-allowed" : "pointer", transition: "border-color .15s ease, box-shadow .15s ease" },
          children: [
            /* @__PURE__ */ jsx("span", { children: selLabel || placeholder }),
            /* @__PURE__ */ jsx(Icon, { name: "unfold_more", size: "small", color: "var(--neutral-text-icon-muted)" })
          ]
        }
      ),
      open && /* @__PURE__ */ jsx("div", { style: { ...surface, position: "absolute", top: "calc(100% + 6px)", left: 0, right: 0, zIndex: 40, padding: 5 }, children: [
        /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center", gap: 8, padding: "6px 8px", borderBottom: "1px solid var(--neutral-bg-subtle)" }, children: [
          /* @__PURE__ */ jsx(Icon, { name: "search", size: "small", color: "var(--neutral-text-icon-muted)" }),
          /* @__PURE__ */ jsx("input", { autoFocus: true, value: query, onChange: (e) => setQuery(e.target.value), placeholder: "Search\u2026", style: { flex: 1, border: "none", outline: "none", background: "transparent", font: "var(--text-body)", color: "var(--neutral-text-icon-emphasis)" } })
        ] }),
        /* @__PURE__ */ jsx("div", { style: { maxHeight: 200, overflowY: "auto", marginTop: 4 }, children: [
          filtered.length === 0 && /* @__PURE__ */ jsx("div", { style: { padding: "10px", font: "var(--text-body-sm)", color: "var(--neutral-text-icon-muted)" }, children: "No results." }),
          filtered.map((o) => /* @__PURE__ */ jsx(
            DropdownItem,
            {
              label: o.label,
              state: o.value === selected ? "selected" : "default",
              onClick: () => pick(o)
            },
            o.value
          ))
        ] })
      ] })
    ] });
  });
  Combobox.displayName = "Combobox";
  var fieldFont = "var(--font-family-body)";
  var EMPH = "var(--neutral-text-icon-emphasis)";
  function fieldState(st) {
    const M = {
      default: { bg: "var(--neutral-bg-default)", border: "2px solid var(--neutral-border-muted)", text: "var(--neutral-text-icon-subtle)", shadow: "none" },
      hovered: { bg: "var(--neutral-bg-default)", border: "2px solid var(--neutral-border-subtle)", text: "var(--neutral-text-icon-subtle)", shadow: "0 2px 8px rgb(var(--ink) / 0.16)" },
      filled: { bg: "var(--neutral-bg-default)", border: "2px solid var(--neutral-border-muted)", text: EMPH, shadow: "none" },
      typing: { bg: "var(--neutral-bg-default)", border: "2px solid var(--brand-border-strong)", text: EMPH, shadow: "var(--focus-ring)" },
      active: { bg: "var(--neutral-bg-default)", border: "2px solid var(--brand-border-strong)", text: EMPH, shadow: "var(--focus-ring)" },
      focused: { bg: "var(--neutral-bg-default)", border: "2px solid var(--brand-border-strong)", text: EMPH, shadow: "var(--focus-ring)" },
      error: { bg: "var(--neutral-bg-default)", border: "2px solid var(--error-border-strong)", text: EMPH, shadow: "none" },
      errorHovered: { bg: "var(--neutral-bg-default)", border: "2px solid var(--error-border-default)", text: EMPH, shadow: "0 2px 8px rgb(var(--ink) / 0.16)" },
      // Validated. Mirror of `error`, in the success ramp: green border over the
      // lightest green surface. --success-bg-subtle is green-10, the same tier
      // the neutral surface uses, so the tint reads without shouting.
      success: { bg: "var(--success-bg-subtle)", border: "2px solid var(--success-border-strong)", text: EMPH, shadow: "none" },
      successHovered: { bg: "var(--success-bg-subtle)", border: "2px solid var(--success-border-default)", text: EMPH, shadow: "0 2px 8px rgb(var(--ink) / 0.16)" },
      disabled: { bg: "var(--neutral-bg-subtle)", border: "2px solid var(--neutral-border-subtle)", text: "var(--neutral-text-icon-weak)", shadow: "none" }
    };
    return M[st] || M.default;
  }
  var isErrorState = (st) => st === "error" || st === "errorHovered";
  var isSuccessState = (st) => st === "success" || st === "successHovered";
  var helperColor = (st) => isErrorState(st) ? "var(--error-text-icon-default)" : isSuccessState(st) ? "var(--success-text-icon-strong)" : "var(--neutral-text-icon-muted)";
  var statusIcon = (st) => isSuccessState(st) ? { name: "check_circle", color: "var(--success-text-icon-default)" } : isErrorState(st) ? { name: "error", color: "var(--error-text-icon-default)" } : null;
  function resolveFieldState({ state, disabled, hasError, hasSuccess, focused, hovered, filled }) {
    if (state) return state;
    if (disabled) return "disabled";
    if (hasError) return hovered ? "errorHovered" : "error";
    if (hasSuccess) return hovered ? "successHovered" : "success";
    if (focused) return filled ? "typing" : "focused";
    if (hovered) return "hovered";
    if (filled) return "filled";
    return "default";
  }
  var FIELD_STATES = ["default", "hovered", "filled", "typing", "focused", "success", "error", "disabled"];
  var SearchField = /* @__PURE__ */ react_default.forwardRef(function SearchField2({
    value,
    defaultValue,
    onChange,
    onClear,
    onFocus,
    onBlur,
    placeholder = "Search",
    disabled = false,
    state,
    error,
    success,
    inputRef,
    style,
    className,
    ...rest
  }, forwardedRef) {
    const isControlled = value !== void 0 && value !== null;
    const [inner, setInner] = useState(defaultValue != null ? String(defaultValue) : "");
    const val = isControlled ? String(value) : inner;
    const [focused, setFocused] = useState(false);
    const [hovered, setHovered] = useState(false);
    const filled = val.length > 0;
    const eff = resolveFieldState({ state: FIELD_STATES.includes(state) ? state : void 0, disabled, hasError: !!error, hasSuccess: !!success && !error, focused, hovered, filled });
    const s = fieldState(eff);
    const stIcon = statusIcon(eff);
    const iconColor = eff === "default" ? "var(--neutral-text-icon-subtle)" : "var(--neutral-text-icon-default)";
    const fire = (v) => {
      if (!isControlled) setInner(v);
      if (onChange) onChange({ target: { value: v } });
    };
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref: forwardedRef,
        className,
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => setHovered(false),
        style: { boxSizing: "border-box", display: "inline-flex", alignItems: "center", gap: 6, width: "100%", minWidth: 240, maxWidth: 409, height: "calc(var(--control-md-height) * 1px)", padding: "8px 12px", borderRadius: "calc(var(--control-md-radius) * 1px)", background: s.bg, border: s.border, boxShadow: s.shadow, fontFamily: fieldFont, transition: "border-color .15s ease, box-shadow .15s ease", cursor: disabled ? "not-allowed" : "text", ...style },
        children: [
          /* @__PURE__ */ jsx(Icon, { name: "search", size: "regular", color: iconColor }),
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "ivdsField",
              ...rest,
              type: "text",
              role: "searchbox",
              placeholder,
              disabled,
              value: val,
              ref: inputRef,
              onChange: (e) => {
                if (!isControlled) setInner(e.target.value);
                onChange && onChange(e);
              },
              onFocus: (e) => {
                setFocused(true);
                onFocus && onFocus(e);
              },
              onBlur: (e) => {
                setFocused(false);
                onBlur && onBlur(e);
              },
              style: { flex: 1, minWidth: 0, border: "none", outline: "none", background: "transparent", padding: 0, fontFamily: fieldFont, fontWeight: 400, fontSize: 16, lineHeight: 1.5, color: disabled ? "var(--neutral-text-icon-weak)" : "var(--neutral-text-icon-emphasis)", cursor: disabled ? "not-allowed" : "text" }
            }
          ),
          stIcon && /* @__PURE__ */ jsx(Icon, { name: stIcon.name, size: "regular", color: stIcon.color }),
          filled && !disabled && /* @__PURE__ */ jsx(IconAffordance, { glyph: "close", size: 20, w: 32, h: 32, label: "Clear search", onClick: () => {
            fire("");
            onClear && onClear();
          } })
        ]
      }
    );
  });
  SearchField.displayName = "SearchField";
  var Command = /* @__PURE__ */ react_default.forwardRef(function Command2({
    placeholder = "Type a command or search\u2026",
    groups,
    commands,
    emptyMessage = "No commands found.",
    onRun,
    style,
    className
  }, forwardedRef) {
    const [query, setQuery] = useState("");
    const [active, setActive] = useState(0);
    const inputRef = useRef(null);
    const list = commands || [
      { icon: "calendar_today", label: "Calendar" },
      { icon: "person", label: "Search profile", kbd: "\u2318P" },
      { icon: "settings", label: "Settings", kbd: "\u2318S" },
      { icon: "add", label: "New item", kbd: "\u2318N" }
    ];
    const filtered = list.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()));
    const run = (c) => {
      if (c && onRun) onRun(c);
    };
    const onKeyDown = (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((a) => Math.min(a + 1, filtered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((a) => Math.max(a - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        run(filtered[active]);
      }
    };
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref: forwardedRef,
        className,
        onKeyDown,
        style: { ...surface, width: 400, maxWidth: "100%", overflow: "hidden", ...style },
        children: [
          /* @__PURE__ */ jsx("div", { style: { padding: 8, borderBottom: "1px solid var(--neutral-bg-subtle)" }, children: /* @__PURE__ */ jsx(
            SearchField,
            {
              inputRef,
              placeholder,
              value: query,
              onChange: (e) => {
                setQuery(e.target.value);
                setActive(0);
              },
              onClear: () => {
                setQuery("");
                setActive(0);
              },
              style: { minWidth: 0, maxWidth: "100%", border: "none", boxShadow: "none", background: "transparent" }
            }
          ) }),
          /* @__PURE__ */ jsx("div", { style: { padding: 8 }, children: [
            /* @__PURE__ */ jsx(DropdownItem, { variant: "section", label: groups || "Suggestions" }),
            filtered.length === 0 && /* @__PURE__ */ jsx("div", { style: { padding: 10, font: "var(--text-body-sm)", color: "var(--neutral-text-icon-muted)" }, children: emptyMessage }),
            filtered.map((c, i) => /* @__PURE__ */ jsx("div", { onMouseEnter: () => setActive(i), children: /* @__PURE__ */ jsx(
              DropdownItem,
              {
                label: c.label,
                icon: c.icon || "chevron_right",
                kbd: c.kbd,
                description: c.description,
                variant: c.danger ? "destructive" : "default",
                state: i === active ? "selected" : "default",
                onClick: () => run(c)
              }
            ) }, c.label))
          ] })
        ]
      }
    );
  });
  Command.displayName = "Command";
  var DropdownList = /* @__PURE__ */ react_default.forwardRef(function DropdownList2({
    items,
    value,
    selected,
    onSelect,
    width = 220,
    maxHeight,
    style,
    ...rest
  }, forwardedRef) {
    const raw = (typeof items === "string" ? items.split(",").map((s) => s.trim()) : items) || ["Duplicate", "Edit", "Share", "Move to\u2026", "Archive"];
    const rows = raw.map((r) => typeof r === "string" ? { label: r, value: r } : r);
    const isOn = (row, i) => value !== void 0 ? row.value === value : i === selected;
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, role: "listbox", style: {
      width,
      background: "var(--neutral-bg-default)",
      border: "1px solid var(--neutral-border-subtle)",
      borderRadius: "calc(var(--card-corner) * 1px)",
      boxShadow: "var(--shadow-lg)",
      padding: 5,
      boxSizing: "border-box",
      maxHeight,
      overflowY: maxHeight ? "auto" : void 0,
      ...style
    }, ...rest, children: rows.map((r, i) => {
      var _a;
      if (r.sep || r.variant === "separator") return /* @__PURE__ */ jsx(DropdownItem, { variant: "separator" }, i);
      if (r.section) return /* @__PURE__ */ jsx(DropdownItem, { variant: "section", label: r.section }, i);
      return /* @__PURE__ */ jsx(
        DropdownItem,
        {
          label: r.label,
          icon: r.icon,
          iconRight: r.iconRight,
          kbd: r.kbd,
          description: r.description,
          badge: r.badge,
          trailing: r.trailing,
          multiSelect: r.multiSelect,
          checked: r.checked,
          variant: r.variant || (r.danger ? "destructive" : "default"),
          state: r.disabled ? "disabled" : isOn(r, i) ? "selected" : "default",
          onClick: () => {
            var _a2;
            return onSelect && onSelect((_a2 = r.value) != null ? _a2 : r.label, r);
          }
        },
        (_a = r.value) != null ? _a : i
      );
    }) });
  });
  DropdownList.displayName = "DropdownList";
  var ContextMenu = /* @__PURE__ */ react_default.forwardRef(function ContextMenu2({ items, onSelect, width = 200, children, style, className }, forwardedRef) {
    const [pos, setPos] = useState(null);
    const ref = useRef(null);
    useDismiss(ref, () => setPos(null), !!pos);
    const rows = items || [
      { icon: "content_copy", label: "Copy", kbd: "\u2318C" },
      { icon: "edit", label: "Edit", kbd: "\u2318E" },
      { icon: "share", label: "Share" },
      { sep: true },
      { icon: "delete", label: "Delete", kbd: "\u232B", danger: true }
    ];
    const onContext = (e) => {
      e.preventDefault();
      setPos({ x: e.clientX, y: e.clientY });
    };
    const pick = (value, row) => {
      if (onSelect) onSelect(row);
      setPos(null);
    };
    return /* @__PURE__ */ jsx("div", { ref: mergeRefs(ref, forwardedRef), onContextMenu: onContext, className, style: { fontFamily: "var(--font-family-body)", ...style }, children: [
      children || /* @__PURE__ */ jsx("div", { style: { height: 160, display: "flex", alignItems: "center", justifyContent: "center", border: "2px dashed var(--neutral-border-default)", borderRadius: "calc(var(--card-corner) * 1px)", color: "var(--neutral-text-icon-muted)", font: "var(--text-body-sm)" }, children: "Right-click here" }),
      pos && /* @__PURE__ */ jsx(
        DropdownList,
        {
          items: rows,
          width,
          onSelect: pick,
          role: "menu",
          style: { position: "fixed", top: pos.y, left: pos.x, zIndex: 100 }
        }
      )
    ] });
  });
  ContextMenu.displayName = "ContextMenu";
  var CopyField = /* @__PURE__ */ react_default.forwardRef(function CopyField2({
    label = "API key",
    value = "sk_live_5c4d855a1c54edec9216",
    disabled = false,
    state,
    success,
    style,
    className,
    ...rest
  }, forwardedRef) {
    const [copied, setCopied] = useState(false);
    const [focused, setFocused] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [btnHover, setBtnHover] = useState(false);
    const [btnActive, setBtnActive] = useState(false);
    let eff = state;
    if (!eff) eff = resolveFieldState({ disabled, hasError: false, hasSuccess: !!success, focused, hovered, filled: true });
    const s = fieldState(eff);
    const doCopy = () => {
      if (disabled) return;
      const finish = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
      };
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(String(value)).then(finish, finish);
        else finish();
      } catch (e) {
        finish();
      }
    };
    const btnBg = copied ? "var(--success-bg-subtle)" : btnActive ? "var(--brand-bg-muted)" : btnHover ? "var(--brand-bg-weak)" : "var(--brand-bg-subtle)";
    const btnFg = copied ? "var(--success-text-icon-strong)" : "var(--brand-text-icon-default)";
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, className, style: { boxSizing: "border-box", display: "flex", flexDirection: "column", gap: 4, width: "100%", minWidth: 280, maxWidth: 420, fontFamily: fieldFont, ...style }, ...rest, children: [
      label != null && label !== "" && /* @__PURE__ */ jsx("span", { style: { fontWeight: 600, fontSize: 14, lineHeight: 1.4, color: "var(--neutral-text-icon-emphasis)" }, children: label }),
      /* @__PURE__ */ jsx(
        "div",
        {
          onMouseEnter: () => setHovered(true),
          onMouseLeave: () => setHovered(false),
          style: { boxSizing: "border-box", display: "flex", alignItems: "center", gap: 8, height: "calc(var(--control-md-height) * 1px)", padding: "0 6px 0 16px", borderRadius: "calc(var(--control-md-radius) * 1px)", background: s.bg, border: s.border, boxShadow: s.shadow, transition: "border-color var(--motion-base) var(--motion-ease), box-shadow var(--motion-base) var(--motion-ease)" },
          children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                className: "ivdsField",
                readOnly: true,
                value,
                onFocus: (e) => {
                  setFocused(true);
                  e.target.select();
                },
                onBlur: () => setFocused(false),
                style: { flex: 1, minWidth: 0, border: "none", outline: "none", background: "transparent", padding: 0, fontFamily: fieldFont, fontWeight: 400, fontSize: 16, lineHeight: 1.5, color: disabled ? "var(--neutral-text-icon-weak)" : "var(--neutral-text-icon-emphasis)", textOverflow: "ellipsis" }
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: doCopy,
                disabled,
                onMouseEnter: () => setBtnHover(true),
                onMouseLeave: () => {
                  setBtnHover(false);
                  setBtnActive(false);
                },
                onMouseDown: () => setBtnActive(true),
                onMouseUp: () => setBtnActive(false),
                style: { flexShrink: 0, display: "inline-flex", alignItems: "center", gap: 5, height: 28, padding: "0 10px", border: "none", borderRadius: "calc(var(--radius-sm) * 1px)", background: btnBg, color: btnFg, fontFamily: fieldFont, fontWeight: 600, fontSize: 13, cursor: disabled ? "not-allowed" : "pointer", transition: "background var(--motion-base) var(--motion-ease), color var(--motion-base) var(--motion-ease)" },
                children: [
                  /* @__PURE__ */ jsx("span", { "aria-hidden": "true", style: { fontFamily: "'Material Symbols Rounded'", fontSize: 16 }, children: copied ? "check" : "content_copy" }),
                  copied ? "Copied" : "Copy"
                ]
              }
            )
          ]
        }
      )
    ] });
  });
  CopyField.displayName = "CopyField";
  var COLS = [
    { key: "account", label: "Account", tone: "default", pin: true, min: 200 },
    { key: "email", label: "Email", tone: "muted", min: 200 },
    { key: "balance", label: "Balance", tone: "muted", align: "right", min: 140 },
    { key: "transfer", label: "Transfer", tone: "sign", align: "right", min: 140 },
    { key: "newBalance", label: "New Balance", tone: "brand", align: "right", min: 150 },
    { key: "status", label: "Status", align: "right", min: 130 }
  ];
  var ROWS = [
    { id: "r1", account: "Example account 1", email: "one@example.com", balance: "$2,400.00", transfer: "+$1,000.00", newBalance: "$3,400.00", status: "Active" },
    { id: "r2", account: "Example account 2", email: "two@example.com", balance: "$2,400.00", transfer: "+$1,000.00", newBalance: "$3,400.00", status: "Active" },
    { id: "r3", account: "Example account 3", email: "three@example.com", balance: "$2,400.00", transfer: "+$1,000.00", newBalance: "$3,400.00", status: "Active" },
    { id: "r4", account: "Main account", email: "admin@example.com", balance: "$65,950.00", transfer: "-$1,000.00", newBalance: "$64,950.00", status: "Owner", tone: { account: "default", newBalance: "default" } },
    { id: "r5", account: "Example account 5", email: "five@example.com", balance: "$2,400.00", transfer: "+$1,000.00", newBalance: "$3,400.00", status: "Active" }
  ];
  var DataTable = /* @__PURE__ */ react_default.forwardRef(function DataTable2({
    columns = COLS,
    rows = ROWS,
    banded = true,
    loading = false,
    error = null,
    empty = "No records yet.",
    rowKey = (row, i) => {
      var _a;
      return (_a = row.id) != null ? _a : i;
    },
    caption,
    style,
    ...rest
  }, forwardedRef) {
    const border = "1px solid var(--cell-border-default)";
    const toneColor = (col, row) => {
      let t = row.tone && row.tone[col.key] || col.tone || "default";
      if (t === "sign") t = signTone(row[col.key]);
      return CELL_TONE[t] || CELL_TONE.default;
    };
    const align = (col) => col.align === "right" ? "right" : col.align === "center" ? "center" : "left";
    const pinBg = (band) => band ? "var(--cell-surface-banded)" : "var(--neutral-bg-default)";
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, style: {
      width: "100%",
      border,
      borderRadius: "calc(var(--table-corner) * 1px)",
      overflow: "hidden",
      boxShadow: "0 1px 2px var(--hairline-on-light)",
      background: "var(--table-surface)",
      boxSizing: "border-box",
      ...style
    }, ...rest, children: /* @__PURE__ */ jsx("div", { style: { overflowX: "auto" }, children: /* @__PURE__ */ jsx("table", { "aria-busy": loading || void 0, style: { borderCollapse: "collapse", width: "100%", minWidth: 720, font: "var(--text-body)" }, children: [
      caption && /* @__PURE__ */ jsx("caption", { style: { captionSide: "top", textAlign: "left", padding: "12px 16px", font: "var(--text-subtitle)", color: "var(--neutral-text-icon-emphasis)" }, children: caption }),
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { children: columns.map((c, ci) => /* @__PURE__ */ jsx("th", { style: {
        position: ci === 0 && c.pin ? "sticky" : void 0,
        left: ci === 0 && c.pin ? 0 : void 0,
        zIndex: ci === 0 && c.pin ? 2 : 1,
        textAlign: align(c),
        padding: "14px 20px",
        minWidth: c.min,
        whiteSpace: "nowrap",
        font: "var(--text-subtitle)",
        color: "var(--neutral-text-icon-strong)",
        background: "var(--neutral-bg-default)",
        borderBottom: border,
        boxShadow: ci === 0 && c.pin ? "1px 0 0 var(--cell-border-default)" : void 0
      }, children: c.label }, c.key)) }) }),
      /* @__PURE__ */ jsx("tbody", { children: [
        loading && Array.from({ length: 3 }).map((_, ri) => /* @__PURE__ */ jsx("tr", { children: columns.map((c, ci) => /* @__PURE__ */ jsx("td", { style: { borderTop: border, padding: "12px 16px" }, children: /* @__PURE__ */ jsx("span", { style: { display: "block", height: 10, borderRadius: "calc(var(--radius-xs) * 1px)", background: "var(--neutral-bg-muted)" } }) }, ci)) }, `sk-${ri}`)),
        !loading && (error || rows.length === 0) && /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: columns.length, style: {
          borderTop: border,
          padding: "32px 16px",
          textAlign: "center",
          font: "var(--text-body)",
          color: error ? "var(--error-text-icon-default)" : "var(--neutral-text-icon-muted)"
        }, children: error ? typeof error === "string" ? error : "Something went wrong." : empty }) }),
        !loading && !error && rows.map((row, ri) => {
          const band = banded && ri % 2 === 0;
          return /* @__PURE__ */ jsx("tr", { children: columns.map((c, ci) => {
            const pinned = ci === 0 && c.pin;
            return /* @__PURE__ */ jsx("td", { style: {
              position: pinned ? "sticky" : void 0,
              left: pinned ? 0 : void 0,
              zIndex: pinned ? 1 : void 0,
              textAlign: align(c),
              padding: "12px 20px",
              minWidth: c.min,
              whiteSpace: "nowrap",
              border,
              background: band ? "var(--cell-surface-banded)" : "var(--neutral-bg-default)",
              color: toneColor(c, row),
              font: c.key === "account" ? "var(--text-subtitle)" : "var(--text-body)",
              boxShadow: pinned ? "1px 0 0 var(--cell-border-default)" : void 0
            }, children: row[c.key] }, c.key);
          }) }, rowKey(row, ri));
        })
      ] })
    ] }) }) });
  });
  DataTable.displayName = "DataTable";
  var MODES = ["range", "single", "datetime"];
  var DateRangePicker = /* @__PURE__ */ react_default.forwardRef(function DateRangePicker2({
    mode = "range",
    start = 9,
    end = 16,
    date = 12,
    month = "June 2026",
    typable = true,
    onChange,
    style,
    ...rest
  }, forwardedRef) {
    if (!MODES.includes(mode)) mode = "range";
    const single = mode === "single" || mode === "datetime";
    const [range, setRange] = useState([start, end]);
    const [sel, setSel] = useState(date);
    const [time, setTime] = useState({ h: 9, m: 0, s: 0 });
    const [a, b] = range;
    const days = Array.from({ length: 30 }, (_, i) => i + 1);
    const pick = (d) => {
      if (single) {
        setSel(d);
        onChange && onChange(mode === "datetime" ? { date: d, ...time } : d);
        return;
      }
      let next;
      if (a != null && b != null) next = [d, null];
      else if (a != null && b == null) next = d < a ? [d, a] : [a, d];
      else next = [d, null];
      setRange(next);
      onChange && onChange({ start: next[0], end: next[1] });
    };
    const setT = (k, v) => {
      const t = { ...time, [k]: v };
      setTime(t);
      onChange && onChange({ date: sel, ...t });
    };
    const parseDay = (text) => {
      const n = Number((String(text).match(/(\d{1,2})(?!.*\d)/) || [])[1]);
      return Number.isFinite(n) && n >= 1 && n <= 30 ? n : null;
    };
    const typeInto = (i, text) => {
      const d = parseDay(text);
      if (d == null) return;
      if (single) {
        setSel(d);
        onChange && onChange(mode === "datetime" ? { date: d, ...time } : d);
        return;
      }
      const next = i === 0 ? [d, b] : [a, d];
      if (next[0] != null && next[1] != null && next[0] > next[1]) next.reverse();
      setRange(next);
      onChange && onChange({ start: next[0], end: next[1] });
    };
    const inRange = (d) => !single && a != null && b != null && d >= a && d <= b;
    const isEnd = (d) => single ? d === sel : d === a || d === b;
    const timeBox = (k, max, label) => /* @__PURE__ */ jsx("label", { style: { flex: 1, display: "flex", flexDirection: "column", gap: 4 }, children: [
      /* @__PURE__ */ jsx("span", { style: { font: "var(--text-caption)", color: "var(--neutral-text-icon-muted)" }, children: label }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "number",
          min: 0,
          max,
          value: time[k],
          onChange: (e) => setT(k, Math.max(0, Math.min(max, Number(e.target.value) || 0))),
          style: {
            width: "100%",
            height: 36,
            boxSizing: "border-box",
            padding: "0 10px",
            border: "2px solid var(--neutral-border-muted)",
            borderRadius: "calc(var(--control-md-radius) * 1px)",
            font: "var(--text-body)",
            color: "var(--neutral-text-icon-emphasis)",
            outline: "none"
          }
        }
      )
    ] });
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, style: {
      width: 320,
      background: "var(--neutral-bg-default)",
      border: "1px solid var(--neutral-border-subtle)",
      borderRadius: "calc(var(--card-corner) * 1px)",
      boxShadow: "var(--shadow-lg)",
      padding: 16,
      boxSizing: "border-box",
      ...style
    }, ...rest, children: [
      /* @__PURE__ */ jsx("div", { style: { display: "flex", gap: 8, marginBottom: 14 }, children: (single ? [sel] : [a, b]).map((d, i) => {
        const placeholder = single ? "Select date" : i === 0 ? "Start" : "End";
        const box = {
          flex: 1,
          width: "100%",
          height: 36,
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          padding: "0 12px",
          border: "1px solid var(--neutral-border-default)",
          background: "var(--neutral-bg-default)",
          borderRadius: "calc(var(--control-md-radius) * 1px)",
          font: "var(--text-body)",
          color: d ? "var(--neutral-text-icon-emphasis)" : "var(--neutral-text-icon-muted)",
          outline: "none"
        };
        if (!typable) return /* @__PURE__ */ jsx("span", { style: box, children: d ? `Jun ${d}` : placeholder }, i);
        return /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            defaultValue: d ? `Jun ${d}` : "",
            placeholder,
            "aria-label": placeholder,
            onBlur: (e) => typeInto(i, e.target.value),
            onKeyDown: (e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                typeInto(i, e.currentTarget.value);
              }
            },
            style: box
          },
          i
        );
      }) }),
      /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10, font: "var(--text-subtitle)", color: "var(--neutral-text-icon-emphasis)" }, children: [
        /* @__PURE__ */ jsx("span", { className: "material-symbols-rounded", style: { fontSize: 20, color: "var(--neutral-text-icon-muted)", cursor: "pointer" }, children: "chevron_left" }),
        month,
        /* @__PURE__ */ jsx("span", { className: "material-symbols-rounded", style: { fontSize: 20, color: "var(--neutral-text-icon-muted)", cursor: "pointer" }, children: "chevron_right" })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 2, textAlign: "center" }, children: [
        ["S", "M", "T", "W", "T", "F", "S"].map((d, i) => /* @__PURE__ */ jsx("div", { style: { font: "var(--text-caption)", color: "var(--neutral-text-icon-muted)", padding: "4px 0" }, children: d }, i)),
        days.map((d) => {
          const on = isEnd(d), mid = inRange(d) && !on;
          return /* @__PURE__ */ jsx("button", { type: "button", onClick: () => pick(d), style: {
            height: 34,
            border: 0,
            cursor: "pointer",
            font: "var(--text-body-sm)",
            background: on ? "var(--brand-bg-default)" : mid ? "var(--brand-bg-subtle)" : "transparent",
            color: on ? "var(--neutral-bg-default)" : mid ? "var(--brand-text-icon-default)" : "var(--neutral-text-icon-default)",
            borderRadius: mid ? "0" : "8px"
          }, children: d }, d);
        })
      ] }),
      mode === "datetime" && /* @__PURE__ */ jsx("div", { style: { display: "flex", gap: 8, marginTop: 14, paddingTop: 14, borderTop: "1px solid var(--neutral-border-subtle)" }, children: [
        timeBox("h", 23, "Hour"),
        timeBox("m", 59, "Minute"),
        timeBox("s", 59, "Second")
      ] })
    ] });
  });
  DateRangePicker.displayName = "DateRangePicker";
  var FIELD_STATES2 = ["default", "hovered", "filled", "typing", "focused", "success", "error", "disabled"];
  var DateField = /* @__PURE__ */ react_default.forwardRef(function DateField2({
    label = "Date",
    value,
    defaultValue,
    onChange,
    onFocus,
    onBlur,
    withTime = false,
    placeholder = "mm/dd/yyyy",
    helper,
    error,
    success,
    disabled = false,
    state,
    id,
    name,
    style,
    className,
    ...rest
  }, forwardedRef) {
    const autoId = useId();
    const fieldId = id || autoId;
    const descId = `${fieldId}-desc`;
    const isControlled = value !== void 0 && value !== null;
    const [inner, setInner] = useState(defaultValue != null ? String(defaultValue) : "");
    const val = isControlled ? String(value) : inner;
    const [focused, setFocused] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [iconHover, setIconHover] = useState(false);
    const [open, setOpen] = useState(false);
    const wrapRef = useRef(null);
    useDismiss(wrapRef, () => setOpen(false), open);
    const hasError = !!error;
    const errText = typeof error === "string" ? error : null;
    const hasSuccess = !!success && !hasError;
    const okText = typeof success === "string" ? success : null;
    const eff = resolveFieldState({ state: FIELD_STATES2.includes(state) ? state : void 0, disabled, hasError, hasSuccess, focused: open || focused, hovered, filled: val !== "" });
    const s = fieldState(eff);
    const stIcon = statusIcon(eff);
    const commit = (v) => {
      if (!isControlled) setInner(v);
      if (onChange) onChange({ target: { value: v } });
    };
    const onPick = (picked) => {
      const d = typeof picked === "object" ? picked.date : picked;
      let str = `Jun ${d}, 2026`;
      if (withTime && typeof picked === "object") str += ` ${String(picked.h).padStart(2, "0")}:${String(picked.m).padStart(2, "0")}:${String(picked.s).padStart(2, "0")}`;
      commit(str);
      if (!withTime) setOpen(false);
    };
    return /* @__PURE__ */ jsx("div", { ref: mergeRefs(wrapRef, forwardedRef), className, style: { boxSizing: "border-box", position: "relative", display: "flex", flexDirection: "column", gap: 4, width: "100%", minWidth: 240, maxWidth: 300, fontFamily: fieldFont, ...style }, children: [
      label != null && label !== "" && /* @__PURE__ */ jsx("label", { htmlFor: fieldId, style: { fontWeight: 600, fontSize: 14, lineHeight: 1.4, color: disabled ? "var(--neutral-text-icon-subtle)" : "var(--neutral-text-icon-emphasis)" }, children: label }),
      /* @__PURE__ */ jsx("div", { onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false), style: { boxSizing: "border-box", position: "relative", display: "flex", alignItems: "center", gap: 6, height: "calc(var(--control-md-height) * 1px)", padding: "8px 6px 8px 16px", borderRadius: "calc(var(--control-md-radius) * 1px)", background: s.bg, border: s.border, boxShadow: s.shadow, transition: "border-color var(--motion-base) var(--motion-ease), box-shadow var(--motion-base) var(--motion-ease)" }, children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "ivdsField",
            ...rest,
            type: "text",
            id: fieldId,
            name,
            placeholder,
            disabled,
            value: val,
            "aria-invalid": hasError ? "true" : void 0,
            "aria-describedby": errText || okText || helper ? descId : void 0,
            onChange: (e) => commit(e.target.value),
            onFocus: (e) => {
              setFocused(true);
              onFocus && onFocus(e);
            },
            onBlur: (e) => {
              setFocused(false);
              onBlur && onBlur(e);
            },
            style: { flex: 1, minWidth: 0, border: "none", outline: "none", background: "transparent", padding: 0, fontFamily: fieldFont, fontWeight: 400, fontSize: 16, lineHeight: 1.5, color: disabled ? "var(--neutral-text-icon-weak)" : "var(--neutral-text-icon-emphasis)" }
          }
        ),
        stIcon && /* @__PURE__ */ jsx(Icon, { name: stIcon.name, size: "regular", color: stIcon.color }),
        /* @__PURE__ */ jsx(
          "span",
          {
            role: "button",
            "aria-label": "Open calendar",
            "aria-expanded": open,
            onClick: () => !disabled && setOpen((o) => !o),
            onMouseEnter: () => setIconHover(true),
            onMouseLeave: () => setIconHover(false),
            style: { display: "inline-flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, borderRadius: "calc(var(--radius-sm) * 1px)", background: iconHover && !disabled ? "var(--brand-bg-weak)" : "transparent", cursor: disabled ? "not-allowed" : "pointer", transition: "background var(--motion-base) var(--motion-ease)" },
            children: /* @__PURE__ */ jsx(Icon, { name: "calendar_today", size: "regular", color: open ? "var(--brand-text-icon-default)" : "var(--neutral-text-icon-default)" })
          }
        )
      ] }),
      open && !disabled && /* @__PURE__ */ jsx(
        DateRangePicker,
        {
          mode: withTime ? "datetime" : "single",
          onChange: onPick,
          style: { position: "absolute", top: "calc(100% + 6px)", left: 0, zIndex: 40 }
        }
      ),
      (helper != null || errText != null || okText != null) && /* @__PURE__ */ jsx("span", { id: descId, role: hasError ? "alert" : void 0, style: { fontWeight: 400, fontSize: 12, lineHeight: 1.4, color: helperColor(eff) }, children: errText || okText || helper })
    ] });
  });
  DateField.displayName = "DateField";
  var DonutChart = /* @__PURE__ */ react_default.forwardRef(function DonutChart2({ data = "42,28,18,12", labels = "Direct,Referral,Social,Email", centerLabel = "Sessions", showValues = true, tooltip = true, style, ...rest }, forwardedRef) {
    const ariaLabel = rest["aria-label"] || `${data ? String(data).split(",").length : 0}-point chart`;
    const vals = String(data).split(",").map(Number);
    const labs = String(labels).split(",");
    const total = vals.reduce((a, b) => a + b, 0) || 1;
    const R3 = 60, C = 2 * Math.PI * R3;
    let offset = 0;
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, style: { display: "flex", alignItems: "center", gap: 26, maxWidth: 380, ...style }, ...rest, children: [
      /* @__PURE__ */ jsx("svg", { role: "img", "aria-label": ariaLabel, viewBox: "0 0 150 150", style: { width: 150, height: 150, flex: "none" }, children: [
        /* @__PURE__ */ jsx("g", { transform: "rotate(-90 75 75)", children: vals.map((v, i) => {
          const frac = v / total, len = frac * C;
          const el = /* @__PURE__ */ jsx(
            "circle",
            {
              cx: "75",
              cy: "75",
              r: R3,
              fill: "none",
              stroke: SERIES[i % SERIES.length],
              strokeWidth: "18",
              strokeDasharray: `${len} ${C - len}`,
              strokeDashoffset: -offset,
              children: tooltip && /* @__PURE__ */ jsx("title", { children: [
                labs[i],
                ": ",
                v,
                " (",
                Math.round(frac * 100),
                "%)"
              ] })
            },
            i
          );
          offset += len;
          return el;
        }) }),
        /* @__PURE__ */ jsx("text", { x: "75", y: "70", textAnchor: "middle", style: { font: "var(--text-h1)", fill: "var(--neutral-text-icon-emphasis)" }, children: total }),
        /* @__PURE__ */ jsx("text", { x: "75", y: "88", textAnchor: "middle", style: { font: "var(--text-caption)", fill: "var(--neutral-text-icon-muted)" }, children: centerLabel })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: labs.map((l, i) => /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center", gap: 8, font: "var(--text-body-sm)", color: "var(--neutral-text-icon-default)" }, children: [
        /* @__PURE__ */ jsx("span", { style: { width: 11, height: 11, borderRadius: 3, background: SERIES[i % SERIES.length], flex: "none" } }),
        /* @__PURE__ */ jsx("span", { style: { flex: 1 }, children: l }),
        /* @__PURE__ */ jsx("span", { style: { color: "var(--neutral-text-icon-muted)" }, children: [
          Math.round(vals[i] / total * 100),
          "%"
        ] })
      ] }, i)) })
    ] });
  });
  DonutChart.displayName = "DonutChart";
  var DragHandle = /* @__PURE__ */ react_default.forwardRef(function DragHandle2({ variant = "floating", horizontal = false, style, ...rest }, forwardedRef) {
    const dots = /* @__PURE__ */ jsx("span", { style: { display: "grid", gridTemplateColumns: "repeat(2,4px)", gap: 3, transform: horizontal ? "rotate(90deg)" : "none" }, children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ jsx("span", { style: { width: 4, height: 4, borderRadius: 9999, background: "var(--neutral-text-icon-muted)" } }, i)) });
    if (variant === "inline") return /* @__PURE__ */ jsx("span", { ref: forwardedRef, style: { display: "inline-flex", cursor: "grab", ...style }, ...rest, children: dots });
    return /* @__PURE__ */ jsx("span", { ref: forwardedRef, style: { display: "inline-flex", alignItems: "center", justifyContent: "center", width: 28, height: 28, borderRadius: "calc(var(--radius-md) * 1px)", background: "var(--neutral-bg-default)", boxShadow: "0 1px 3px rgb(var(--ink) / 0.18)", cursor: "grab", ...style }, ...rest, children: dots });
  });
  DragHandle.displayName = "DragHandle";
  var FlowDiagram = /* @__PURE__ */ react_default.forwardRef(function FlowDiagram2({ nodes = "Trigger:bolt,Filter:filter_alt,Send:send,Done:check_circle", active = 0, style, ...rest }, forwardedRef) {
    const list = String(nodes).split(",").map((s) => {
      const [label, icon] = s.split(":");
      return { label, icon: icon || "circle" };
    });
    const [cur, setCur] = useState(active);
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, style: { display: "flex", alignItems: "center", gap: 4, width: "100%", maxWidth: 560, flexWrap: "wrap", ...style }, ...rest, children: list.map((n, i) => /* @__PURE__ */ jsx(react_default.Fragment, { children: [
      /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setCur(i), style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 6, border: 0, background: "transparent", cursor: "pointer" }, children: [
        /* @__PURE__ */ jsx("span", { style: {
          width: 48,
          height: 48,
          borderRadius: 14,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: i === cur ? "var(--brand-bg-default)" : "var(--brand-bg-subtle)",
          color: i === cur ? "var(--neutral-bg-default)" : "var(--brand-text-icon-default)",
          boxShadow: i === cur ? "var(--focus-ring)" : "none",
          transition: "all var(--motion-base) var(--motion-ease)"
        }, children: /* @__PURE__ */ jsx("span", { className: "material-symbols-rounded", style: { fontSize: 24 }, children: n.icon }) }),
        /* @__PURE__ */ jsx("span", { style: { font: "var(--text-caption)", color: i === cur ? "var(--brand-text-icon-default)" : "var(--neutral-text-icon-muted)", fontWeight: i === cur ? 600 : 400 }, children: n.label })
      ] }),
      i < list.length - 1 && /* @__PURE__ */ jsx("span", { className: "material-symbols-rounded", style: { fontSize: 22, color: "var(--neutral-text-icon-weak)", marginBottom: 20 }, children: "arrow_forward" })
    ] }, i)) });
  });
  FlowDiagram.displayName = "FlowDiagram";
  var KINDS2 = ["primary", "secondary", "tertiary"];
  function toItems(actions, options, icons) {
    if (Array.isArray(actions) && actions.length) {
      return actions.map((a) => typeof a === "string" ? { label: a } : a);
    }
    const split = (v) => typeof v === "string" ? v.split(",").map((s) => s.trim()).filter(Boolean) : v || [];
    const labels = split(options);
    const iconList = split(icons);
    const n = Math.max(labels.length, iconList.length);
    if (!n) return [{ label: "Add radius", icon: "add_circle" }, { label: "Add polygon", icon: "polyline" }];
    return Array.from({ length: n }, (_, i) => ({ label: labels[i], icon: iconList[i] }));
  }
  var GroupedButton = /* @__PURE__ */ react_default.forwardRef(function GroupedButton2({
    actions,
    options,
    icons,
    orientation = "horizontal",
    kind = "secondary",
    size = "md",
    state,
    stateIndex = 0,
    stretch = false,
    onAction,
    style,
    ...rest
  }, forwardedRef) {
    const k = KINDS2.includes(kind) ? kind : resolveKind(kind, "secondary");
    const items = toItems(actions, options, icons);
    const vertical = orientation === "vertical";
    const dims = {
      sm: ["calc(var(--control-sm-height) * 1px)", "calc(var(--control-sm-radius) * 1px)", "calc(var(--control-sm-gap) * 1px)", "var(--control-sm-padding)", "var(--control-sm-padding-icon)", "small", "var(--text-button-sm)"],
      md: ["calc(var(--control-md-height) * 1px)", "calc(var(--control-md-radius) * 1px)", "calc(var(--control-md-gap) * 1px)", "var(--control-md-padding)", "var(--control-md-padding-icon)", "regular", "var(--text-button)"],
      lg: ["calc(var(--control-lg-height) * 1px)", "calc(var(--control-lg-radius) * 1px)", "calc(var(--control-lg-gap) * 1px)", "var(--control-lg-padding)", "var(--control-lg-padding-icon)", "large", "var(--text-button-lg)"]
    };
    const [h, radius, gap, pad, padIcon, iconSize, font] = dims[size] || dims.md;
    const spec = CONTROL_SPEC[k];
    const rest0 = spec.default;
    const dividerColor = k === "primary" ? "var(--brand-bg-accent)" : "var(--neutral-border-muted)";
    const outerBorder = rest0.border || (k === "primary" ? "var(--brand-bg-default)" : null);
    const [active, setActive] = useState(-1);
    const [hover, setHover] = useState(-1);
    const [focus, setFocus] = useState(-1);
    const forced = (i) => state && state !== "default" && i === stateIndex ? state : null;
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, role: "group", style: {
      display: "inline-flex",
      flexDirection: vertical ? "column" : "row",
      gap: 1,
      background: dividerColor,
      borderRadius: radius,
      overflow: "hidden",
      border: outerBorder ? `1.5px solid ${outerBorder}` : "none",
      ...style
    }, ...rest, children: items.map((it, i) => {
      const f = forced(i);
      const isDisabled = it.disabled || f === "disabled";
      const isActive = active === i || f === "active" || f === "pressed";
      const isHover = hover === i || f === "hovered";
      const isFocus = focus === i || f === "focused";
      const phase = phaseOf({ blocked: isDisabled, active: isActive, hover: isHover });
      const s = spec[phase];
      const filled = k === "primary";
      const bg = filled ? s.bg : phase === "active" ? "var(--neutral-bg-muted)" : phase === "hover" ? "var(--neutral-bg-subtle)" : phase === "disabled" ? "var(--neutral-bg-subtle)" : "var(--neutral-bg-default)";
      const iconOnly = !it.label;
      const sidePad = iconOnly ? padIcon : it.icon ? padIcon : pad;
      return /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          disabled: isDisabled,
          "aria-label": iconOnly ? it.ariaLabel || it.icon : void 0,
          title: it.title || (iconOnly ? it.ariaLabel || it.icon : void 0),
          onClick: () => {
            if (isDisabled) return;
            it.onClick && it.onClick();
            onAction && onAction(i, it);
          },
          onMouseEnter: () => setHover(i),
          onMouseLeave: () => {
            setHover(-1);
            setActive(-1);
          },
          onMouseDown: () => setActive(i),
          onMouseUp: () => setActive(-1),
          onFocus: () => setFocus(i),
          onBlur: () => setFocus(-1),
          style: {
            flex: stretch ? 1 : "none",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap,
            height: h,
            minWidth: iconOnly ? h : void 0,
            padding: `0 calc(${iconOnly ? padIcon : pad} * 1px) 0 calc(${sidePad} * 1px)`,
            border: 0,
            background: bg,
            color: s.fg,
            font,
            textDecoration: s.underline ? "underline" : "none",
            textUnderlineOffset: 3,
            cursor: isDisabled ? "not-allowed" : "pointer",
            boxShadow: isFocus && !isDisabled ? `inset ${spec.ring || "var(--focus-ring)"}` : "none",
            transition: "background var(--motion-base) var(--motion-ease), color var(--motion-base) var(--motion-ease)"
          },
          children: [
            it.icon && /* @__PURE__ */ jsx(Icon, { name: it.icon, size: iconSize, color: s.fg }),
            it.label && /* @__PURE__ */ jsx("span", { children: it.label })
          ]
        },
        i
      );
    }) });
  });
  GroupedButton.displayName = "GroupedButton";
  var FONT6 = "var(--font-family-body)";
  var VARIANTS2 = ["profile", "preview", "metric", "plain"];
  var SIDES = ["bottom", "top", "right", "left"];
  var HoverCard = /* @__PURE__ */ react_default.forwardRef(function HoverCard2({
    variant = "profile",
    trigger = "@username",
    side = "bottom",
    width = 280,
    name = "Display name",
    initials,
    title,
    meta,
    value,
    delta,
    deltaTone = "success",
    icon,
    children,
    body,
    openDelay = 200,
    closeDelay = 120,
    style,
    className
  }, forwardedRef) {
    const v = VARIANTS2.includes(variant) ? variant : "profile";
    const [open, setOpen] = useState(false);
    const timer = useRef(null);
    const enter = () => {
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setOpen(true), openDelay);
    };
    const leave = () => {
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setOpen(false), closeDelay);
    };
    const place = {
      bottom: { top: "calc(100% + 8px)", left: 0 },
      top: { bottom: "calc(100% + 8px)", left: 0 },
      right: { left: "calc(100% + 8px)", top: 0 },
      left: { right: "calc(100% + 8px)", top: 0 }
    }[SIDES.includes(side) ? side : "bottom"];
    const deltaColor = deltaTone === "error" ? "var(--error-text-icon-default)" : deltaTone === "warning" ? "var(--warning-text-icon-strong)" : "var(--success-text-icon-strong)";
    let content;
    if (v === "profile") {
      content = /* @__PURE__ */ jsx("span", { style: { display: "flex", gap: 12 }, children: [
        /* @__PURE__ */ jsx(Avatar, { name, initials, size: "lg", color: "brand", interactive: false, style: { flex: "none" } }),
        /* @__PURE__ */ jsx("span", { style: { minWidth: 0 }, children: [
          /* @__PURE__ */ jsx("span", { style: { display: "block", font: "var(--text-subtitle)", color: "var(--neutral-text-icon-emphasis)" }, children: name }),
          /* @__PURE__ */ jsx("span", { style: { display: "block", font: "var(--text-body-sm)", color: "var(--neutral-text-icon-muted)", marginTop: 2 }, children: children || body })
        ] })
      ] });
    } else if (v === "preview") {
      content = /* @__PURE__ */ jsx("span", { style: { display: "block" }, children: [
        /* @__PURE__ */ jsx("span", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
          icon && /* @__PURE__ */ jsx(Icon, { name: icon, size: "regular", color: "var(--brand-text-icon-default)" }),
          /* @__PURE__ */ jsx("span", { style: { font: "var(--text-subtitle)", color: "var(--neutral-text-icon-emphasis)" }, children: title || name })
        ] }),
        /* @__PURE__ */ jsx("span", { style: { display: "block", font: "var(--text-body-sm)", color: "var(--neutral-text-icon-muted)", marginTop: 6, lineHeight: 1.5 }, children: children || body }),
        meta && /* @__PURE__ */ jsx("span", { style: { display: "block", font: "var(--text-caption)", color: "var(--neutral-text-icon-weak)", marginTop: 8 }, children: meta })
      ] });
    } else if (v === "metric") {
      content = /* @__PURE__ */ jsx("span", { style: { display: "block" }, children: [
        /* @__PURE__ */ jsx("span", { style: { display: "block", font: "var(--text-caption)", color: "var(--neutral-text-icon-muted)", textTransform: "uppercase", letterSpacing: ".04em" }, children: title || name }),
        /* @__PURE__ */ jsx("span", { style: { display: "flex", alignItems: "baseline", gap: 8, marginTop: 4 }, children: [
          /* @__PURE__ */ jsx("span", { style: { font: "var(--text-h1)", color: "var(--neutral-text-icon-emphasis)" }, children: value }),
          delta && /* @__PURE__ */ jsx("span", { style: { font: "var(--text-body-sm)", color: deltaColor }, children: delta })
        ] }),
        (children || body) && /* @__PURE__ */ jsx("span", { style: { display: "block", font: "var(--text-body-sm)", color: "var(--neutral-text-icon-muted)", marginTop: 6 }, children: children || body })
      ] });
    } else {
      content = children || body;
    }
    return /* @__PURE__ */ jsx("span", { ref: forwardedRef, className, onMouseEnter: enter, onMouseLeave: leave, style: { position: "relative", display: "inline-block", fontFamily: FONT6, ...style }, children: [
      /* @__PURE__ */ jsx("span", { tabIndex: 0, onFocus: enter, onBlur: leave, style: { font: "var(--text-subtitle)", color: "var(--brand-text-icon-default)", textDecoration: "underline", textUnderlineOffset: 2, cursor: "pointer" }, children: trigger }),
      open && /* @__PURE__ */ jsx("span", { style: {
        position: "absolute",
        zIndex: 40,
        width,
        ...place,
        display: "block",
        background: "var(--neutral-bg-default)",
        border: "1px solid var(--neutral-border-subtle)",
        borderRadius: "calc(var(--card-corner) * 1px)",
        boxShadow: "var(--shadow-popover)",
        padding: 16
      }, children: content })
    ] });
  });
  HoverCard.displayName = "HoverCard";
  var FIELD_STATES3 = ["default", "hovered", "filled", "typing", "focused", "success", "error", "disabled"];
  var InputField = /* @__PURE__ */ react_default.forwardRef(function InputField2({
    label = "Label",
    value,
    defaultValue,
    onChange,
    onFocus,
    onBlur,
    placeholder,
    helper,
    error,
    success,
    disabled = false,
    iconLeft,
    iconRight,
    type = "text",
    state,
    // optional forced visual state (docs/preview only)
    inputRef,
    id,
    name,
    maxLength,
    showCount = false,
    required,
    readOnly,
    autoComplete,
    inputMode,
    style,
    className,
    ...rest
  }, forwardedRef) {
    const autoId = useId();
    const fieldId = id || autoId;
    const descId = `${fieldId}-desc`;
    const isControlled = value !== void 0 && value !== null;
    const [inner, setInner] = useState(defaultValue != null ? String(defaultValue) : "");
    const val = isControlled ? String(value) : inner;
    const [focused, setFocused] = useState(false);
    const [hovered, setHovered] = useState(false);
    const hasError = !!error;
    const errText = typeof error === "string" ? error : null;
    const hasSuccess = !!success && !hasError;
    const okText = typeof success === "string" ? success : null;
    const filled = val.length > 0;
    const eff = resolveFieldState({ state: FIELD_STATES3.includes(state) ? state : void 0, disabled, hasError, hasSuccess, focused, hovered, filled });
    const s = fieldState(eff);
    const stIcon = statusIcon(eff);
    const placeholderColor = "var(--neutral-text-icon-subtle)";
    const textColor = filled ? "var(--neutral-text-icon-emphasis)" : placeholderColor;
    const showFooter = helper != null || errText != null || okText != null || showCount && maxLength != null;
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref: forwardedRef,
        className,
        style: { boxSizing: "border-box", display: "flex", flexDirection: "column", gap: 4, width: "100%", minWidth: 280, maxWidth: 420, fontFamily: fieldFont, ...style },
        children: [
          label != null && label !== "" && /* @__PURE__ */ jsx("label", { htmlFor: fieldId, style: { fontWeight: 600, fontSize: 14, lineHeight: 1.4, color: disabled ? "var(--neutral-text-icon-subtle)" : "var(--neutral-text-icon-emphasis)" }, children: label }),
          /* @__PURE__ */ jsx(
            "div",
            {
              onMouseEnter: () => setHovered(true),
              onMouseLeave: () => setHovered(false),
              style: { boxSizing: "border-box", display: "flex", alignItems: "center", gap: 6, height: "calc(var(--control-md-height) * 1px)", padding: "8px 12px 8px 16px", borderRadius: "calc(var(--control-md-radius) * 1px)", background: s.bg, border: s.border, boxShadow: s.shadow, transition: "background .15s ease, border-color .15s ease, box-shadow .15s ease", cursor: disabled ? "not-allowed" : "text" },
              children: [
                iconLeft && /* @__PURE__ */ jsx(Icon, { name: iconLeft, size: "regular", color: "var(--neutral-text-icon-default)" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    className: "ivdsField",
                    ...rest,
                    type,
                    id: fieldId,
                    name,
                    required,
                    readOnly,
                    autoComplete,
                    inputMode,
                    maxLength,
                    placeholder,
                    disabled,
                    "aria-invalid": hasError ? "true" : void 0,
                    "aria-describedby": errText || okText || helper ? descId : void 0,
                    value: val,
                    ref: inputRef,
                    onChange: (e) => {
                      if (!isControlled) setInner(e.target.value);
                      onChange && onChange(e);
                    },
                    onFocus: (e) => {
                      setFocused(true);
                      onFocus && onFocus(e);
                    },
                    onBlur: (e) => {
                      setFocused(false);
                      onBlur && onBlur(e);
                    },
                    style: { flex: 1, minWidth: 0, border: "none", outline: "none", background: "transparent", padding: 0, fontFamily: fieldFont, fontWeight: 400, fontSize: 16, lineHeight: 1.5, color: state ? s.text : textColor, cursor: disabled ? "not-allowed" : "text" }
                  }
                ),
                stIcon && /* @__PURE__ */ jsx(Icon, { name: stIcon.name, size: "regular", color: stIcon.color }),
                !stIcon && iconRight && /* @__PURE__ */ jsx(Icon, { name: iconRight, size: "regular", color: "var(--neutral-text-icon-subtle)" })
              ]
            }
          ),
          showFooter && /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }, children: [
            /* @__PURE__ */ jsx("span", { id: descId, role: hasError ? "alert" : void 0, style: { fontWeight: 400, fontSize: 12, lineHeight: 1.4, color: helperColor(eff) }, children: errText || okText || helper || "" }),
            showCount && maxLength != null && /* @__PURE__ */ jsx("span", { id: descId, role: hasError ? "alert" : void 0, style: { fontWeight: 400, fontSize: 12, lineHeight: 1.4, color: hasError ? helperColor("error") : "var(--neutral-text-icon-default)", flexShrink: 0 }, children: val.length + "/" + maxLength })
          ] })
        ]
      }
    );
  });
  InputField.displayName = "InputField";
  var InputOTP = /* @__PURE__ */ react_default.forwardRef(function InputOTP2({
    value,
    defaultValue = "",
    onChange,
    length = 6,
    error = false,
    disabled = false,
    state,
    style,
    className,
    ...rest
  }, forwardedRef) {
    const isControlled = value !== void 0 && value !== null;
    const [inner, setInner] = useState(String(defaultValue).slice(0, length));
    const raw = (isControlled ? String(value) : inner).replace(/\D/g, "").slice(0, length);
    const [focused, setFocused] = useState(false);
    const [hoverIdx, setHoverIdx] = useState(-1);
    const inputRef = useRef(null);
    const digits = raw.split("");
    const activeIdx = digits.length;
    const forcedError = error || state === "error";
    const forcedDisabled = disabled || state === "disabled";
    const set = (v) => {
      const clean = v.replace(/\D/g, "").slice(0, length);
      if (!isControlled) setInner(clean);
      if (onChange) onChange(clean);
    };
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref: forwardedRef,
        className,
        onClick: () => !forcedDisabled && inputRef.current && inputRef.current.focus(),
        style: { position: "relative", display: "inline-flex", gap: 8, cursor: forcedDisabled ? "not-allowed" : "text", ...style },
        ...rest,
        children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              ref: inputRef,
              type: "text",
              inputMode: "numeric",
              autoComplete: "one-time-code",
              value: raw,
              disabled: forcedDisabled,
              "aria-label": "One-time code",
              "aria-invalid": forcedError ? "true" : void 0,
              onChange: (e) => set(e.target.value),
              onFocus: () => setFocused(true),
              onBlur: () => setFocused(false),
              style: { position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0, border: 0, padding: 0, margin: 0, cursor: "inherit" }
            }
          ),
          Array.from({ length }, (_, i) => {
            const isActive = (focused || state === "active") && i === activeIdx;
            const filled = !!digits[i];
            const hovered = i === hoverIdx && !forcedDisabled;
            let border, shadow = "none", bg = "var(--neutral-bg-default)";
            if (forcedDisabled) {
              border = "var(--neutral-border-subtle)";
              bg = "var(--neutral-bg-subtle)";
            } else if (forcedError) {
              border = "var(--error-border-strong)";
              if (isActive) shadow = "var(--focus-ring-error)";
            } else if (isActive) {
              border = "var(--brand-border-strong)";
              shadow = "var(--focus-ring)";
            } else if (hovered) {
              border = "var(--neutral-border-strong)";
            } else if (filled) {
              border = "var(--neutral-border-default)";
            } else {
              border = "var(--neutral-border-subtle)";
            }
            return /* @__PURE__ */ jsx(
              "div",
              {
                onMouseEnter: () => setHoverIdx(i),
                onMouseLeave: () => setHoverIdx(-1),
                style: {
                  width: 44,
                  height: 52,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: `2px solid ${border}`,
                  borderRadius: "calc(var(--control-md-radius) * 1px)",
                  background: bg,
                  font: "var(--text-h2)",
                  color: forcedDisabled ? "var(--neutral-text-icon-weak)" : "var(--neutral-text-icon-emphasis)",
                  boxShadow: shadow,
                  transition: "border-color var(--motion-base) var(--motion-ease), box-shadow var(--motion-base) var(--motion-ease)"
                },
                children: [
                  digits[i] || "",
                  isActive && !filled && /* @__PURE__ */ jsx("span", { style: { width: 2, height: 22, background: "var(--brand-border-strong)", animation: "ivds-otp-caret 1s step-end infinite" } })
                ]
              },
              i
            );
          }),
          /* @__PURE__ */ jsx("style", { children: "@keyframes ivds-otp-caret{50%{opacity:0}}" })
        ]
      }
    );
  });
  InputOTP.displayName = "InputOTP";
  var Kbd = /* @__PURE__ */ react_default.forwardRef(function Kbd2({ keys = "Ctrl,K", style, className, ...rest }, forwardedRef) {
    const list = Array.isArray(keys) ? keys : String(keys).split(",").map((k) => k.trim()).filter(Boolean);
    return /* @__PURE__ */ jsx("span", { ref: forwardedRef, className, style: { display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-family-body)", ...style }, ...rest, children: list.map((k, i) => /* @__PURE__ */ jsx("kbd", { style: { display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: 22, height: 22, padding: "0 6px", borderRadius: 6, background: "var(--neutral-bg-subtle)", border: "1px solid var(--neutral-border-default)", borderBottomWidth: 2, font: "var(--text-caption)", color: "var(--neutral-text-icon-emphasis)" }, children: k }, i)) });
  });
  Kbd.displayName = "Kbd";
  var LineChart = /* @__PURE__ */ react_default.forwardRef(function LineChart2({ data = "8,14,10,20,17,25", labels = "Jan,Feb,Mar,Apr,May,Jun", area = false, showValues = false, tooltip = true, ...rest }, forwardedRef) {
    return /* @__PURE__ */ jsx(Trend, { ref: forwardedRef, data, labels, area, showValues, tooltip, stroke: "var(--brand-bg-default)", ...rest });
  });
  LineChart.displayName = "LineChart";
  function rowSurface({ selected, active, hover, disabled }) {
    if (disabled) return { bg: "var(--neutral-bg-default)", marker: null };
    if (selected) return { bg: "var(--cell-surface-selected)", marker: "var(--info-bg-emphasis)" };
    if (active) return { bg: "var(--cell-surface-hard-select)", marker: null };
    if (hover) return { bg: "var(--cell-surface-hovered)", marker: null };
    return { bg: "var(--neutral-bg-default)", marker: null };
  }
  function rowFlags(state, live) {
    if (!state || state === "default") return live;
    return {
      hover: state === "hovered" || live.hover,
      active: state === "active" || state === "clicked" || state === "pressed" || live.active,
      focus: state === "focused" || live.focus,
      selected: state === "selected" || live.selected
    };
  }
  var TYPE2 = {
    location: ["location_on", "Added by clicking the map"],
    radius: ["my_location", "Radius area"],
    polygon: ["polyline", "Polygon area"]
  };
  var TYPES2 = ["location", "radius", "polygon"];
  var STATES = ["default", "hovered", "focused", "active", "selected"];
  var LocationRow = /* @__PURE__ */ react_default.forwardRef(function LocationRow2({
    name = "90670",
    type = "radius",
    structures = "5,000",
    mode = "include",
    meta,
    checked,
    defaultChecked = false,
    onCheckedChange,
    state,
    selectable = true,
    actions,
    onSelect,
    onEdit,
    onDelete,
    style,
    ...rest
  }, forwardedRef) {
    const isControlled = checked !== void 0 && checked !== null;
    const [inner, setInner] = useState(!!defaultChecked);
    const [hoverS, setHover] = useState(false);
    const [activeS, setActive] = useState(false);
    const [focusS, setFocus] = useState(false);
    const f = rowFlags(STATES.includes(state) ? state : null, {
      hover: hoverS,
      active: activeS,
      focus: focusS,
      selected: isControlled ? !!checked : inner
    });
    const t = TYPES2.includes(type) ? type : "radius";
    const [glyph, typeLabel] = TYPE2[t];
    const excluded = mode === "exclude";
    const accent = excluded ? "var(--error-text-icon-default)" : "var(--info-text-icon-default)";
    const surface2 = rowSurface(f);
    const toggle = (next) => {
      if (!isControlled) setInner(next);
      if (onCheckedChange) onCheckedChange(next);
    };
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref: forwardedRef,
        role: "option",
        "aria-selected": f.selected,
        tabIndex: 0,
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => {
          setHover(false);
          setActive(false);
        },
        onMouseDown: () => setActive(true),
        onMouseUp: () => setActive(false),
        onFocus: () => setFocus(true),
        onBlur: () => setFocus(false),
        onClick: () => onSelect && onSelect(name),
        onKeyDown: (e) => {
          if (e.key === " ") {
            e.preventDefault();
            toggle(!f.selected);
          } else if (e.key === "Enter") {
            e.preventDefault();
            onSelect && onSelect(name);
          }
        },
        style: {
          position: "relative",
          display: "flex",
          alignItems: "center",
          gap: 10,
          minHeight: 48,
          padding: "0 12px",
          width: "100%",
          boxSizing: "border-box",
          background: surface2.bg,
          borderBottom: "1px solid var(--neutral-border-subtle)",
          // Focus is a ring on top of whatever surface the row already has, so it
          // stays visible while hovered or selected.
          boxShadow: f.focus ? "inset var(--focus-ring)" : "none",
          outline: "none",
          cursor: "pointer",
          transition: "background var(--motion-fast) var(--motion-ease), box-shadow var(--motion-fast) var(--motion-ease)",
          fontFamily: "var(--font-family-body)",
          ...style
        },
        ...rest,
        children: [
          surface2.marker && /* @__PURE__ */ jsx("span", { "aria-hidden": "true", style: { position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: surface2.marker } }),
          selectable && /* @__PURE__ */ jsx("span", { onClick: (e) => e.stopPropagation(), style: { display: "inline-flex" }, children: /* @__PURE__ */ jsx(Checkbox, { label: "", checked: f.selected, onChange: toggle, "aria-label": `Select ${name}` }) }),
          /* @__PURE__ */ jsx(HoverTip, { label: typeLabel, children: /* @__PURE__ */ jsx(Icon, { name: glyph, size: "regular", color: accent }) }),
          /* @__PURE__ */ jsx("span", { style: {
            flex: 1,
            minWidth: 0,
            font: "var(--text-body)",
            color: "var(--neutral-text-icon-emphasis)",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }, children: name }),
          meta != null && meta !== "" && /* @__PURE__ */ jsx("span", { style: { flex: "none", font: "var(--text-body-sm)", color: "var(--neutral-text-icon-muted)", whiteSpace: "nowrap" }, children: meta }),
          structures != null && structures !== "" && /* @__PURE__ */ jsx(HoverTip, { label: `${structures} structures${excluded ? " excluded" : ""}`, children: /* @__PURE__ */ jsx("span", { style: { display: "inline-flex", alignItems: "center", gap: 4, flex: "none", color: accent, font: "var(--text-body)" }, children: [
            /* @__PURE__ */ jsx(Icon, { name: "home", size: "small", color: accent }),
            structures
          ] }) }),
          /* @__PURE__ */ jsx("span", { onClick: (e) => e.stopPropagation(), style: { display: "inline-flex", flex: "none" }, children: /* @__PURE__ */ jsx(
            GroupedButton,
            {
              kind: "secondary",
              size: "sm",
              actions: actions || [
                { icon: "edit", ariaLabel: `Edit ${name}`, onClick: onEdit },
                { icon: "delete", ariaLabel: `Delete ${name}`, onClick: onDelete }
              ]
            }
          ) })
        ]
      }
    );
  });
  LocationRow.displayName = "LocationRow";
  var TILE = 256;
  var lngToX = (lng, z) => (lng + 180) / 360 * 2 ** z;
  var latToY = (lat, z) => {
    const r = lat * Math.PI / 180;
    return (1 - Math.log(Math.tan(r) + 1 / Math.cos(r)) / Math.PI) / 2 * 2 ** z;
  };
  var STYLES = {
    streets: (x, y, z) => `https://tile.openstreetmap.org/${z}/${x}/${y}.png`,
    terrain: (x, y, z) => `https://tile.opentopomap.org/${z}/${x}/${y}.png`
  };
  var MapSurface = /* @__PURE__ */ react_default.forwardRef(function MapSurface2({
    tiles = false,
    lat = 37.3097,
    lng = -121.9578,
    zoom = 13,
    mapStyle = "streets",
    attribution = true,
    children,
    style
  }, forwardedRef) {
    const boxRef = useRef(null);
    const [size, setSize] = useState({ w: 0, h: 0 });
    const [failed, setFailed] = useState(false);
    useEffect(() => {
      if (!tiles || !boxRef.current) return void 0;
      const el = boxRef.current;
      const measure = () => setSize({ w: el.clientWidth, h: el.clientHeight });
      measure();
      if (typeof ResizeObserver === "undefined") return void 0;
      const ro = new ResizeObserver(measure);
      ro.observe(el);
      return () => ro.disconnect();
    }, [tiles]);
    const grid = {
      background: "linear-gradient(135deg,var(--neutral-bg-subtle),var(--info-bg-subtle))",
      backgroundImage: "linear-gradient(var(--neutral-border-subtle) 1px,transparent 1px),linear-gradient(90deg,var(--neutral-border-subtle) 1px,transparent 1px)",
      backgroundSize: "28px 28px"
    };
    const live = tiles && !failed && size.w > 0 && size.h > 0;
    let mosaic = null;
    if (live) {
      const z = Math.max(1, Math.min(19, Math.round(zoom)));
      const url = STYLES[mapStyle] || STYLES.streets;
      const cx = lngToX(lng, z);
      const cy = latToY(lat, z);
      const cols = Math.ceil(size.w / TILE) + 2;
      const rows = Math.ceil(size.h / TILE) + 2;
      const originX = size.w / 2 - cx * TILE;
      const originY = size.h / 2 - cy * TILE;
      const firstX = Math.floor(cx - cols / 2);
      const firstY = Math.floor(cy - rows / 2);
      const max = 2 ** z;
      const imgs = [];
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const tx = firstX + i;
          const ty = firstY + j;
          if (ty < 0 || ty >= max) continue;
          const wrapped = (tx % max + max) % max;
          imgs.push(
            /* @__PURE__ */ jsx(
              "img",
              {
                src: url(wrapped, ty, z),
                alt: "",
                "aria-hidden": "true",
                draggable: false,
                loading: "lazy",
                onError: () => setFailed(true),
                style: {
                  position: "absolute",
                  width: TILE,
                  height: TILE,
                  left: originX + tx * TILE,
                  top: originY + ty * TILE,
                  userSelect: "none"
                }
              },
              `${tx}-${ty}`
            )
          );
        }
      }
      mosaic = /* @__PURE__ */ jsx("div", { "aria-hidden": "true", style: { position: "absolute", inset: 0, overflow: "hidden" }, children: imgs });
    }
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref: (n) => {
          boxRef.current = n;
          if (typeof forwardedRef === "function") forwardedRef(n);
          else if (forwardedRef) forwardedRef.current = n;
        },
        style: {
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          ...live ? { background: "var(--neutral-bg-subtle)" } : grid,
          ...style
        },
        children: [
          mosaic,
          live && attribution && /* @__PURE__ */ jsx("span", { style: {
            position: "absolute",
            bottom: 2,
            right: 4,
            zIndex: 1,
            pointerEvents: "none",
            font: "var(--text-caption)",
            fontSize: 10,
            color: "var(--neutral-text-icon-default)",
            background: "var(--neutral-bg-default)",
            opacity: 0.82,
            padding: "0 4px",
            borderRadius: 3
          }, children: "\xA9 OpenStreetMap" }),
          children
        ]
      }
    );
  });
  MapSurface.displayName = "MapSurface";
  var MAP_SHAPE_TONE = {
    include: { stroke: "var(--info-bg-default)", fill: "var(--info-bg-default)", dash: null, label: "var(--info-text-icon-default)", text: "Included" },
    exclude: { stroke: "var(--error-bg-default)", fill: "var(--error-bg-default)", dash: "6 4", label: "var(--error-text-icon-default)", text: "Excluded" },
    draft: { stroke: "var(--brand-bg-default)", fill: "var(--brand-bg-default)", dash: null, label: "var(--brand-text-icon-default)", text: "Drawing" }
  };
  var shapeTone = (mode) => MAP_SHAPE_TONE[mode] || MAP_SHAPE_TONE.draft;
  var TONE3 = {
    default: { stroke: "var(--neutral-border-strong)", fill: "var(--neutral-bg-strong)", dash: "8 5", w: 2.2, label: "var(--neutral-text-icon-emphasis)", text: null },
    hover: { stroke: "var(--brand-border-strong)", fill: "var(--brand-bg-subtle)", dash: "8 5", w: 2.6, label: "var(--brand-text-icon-default)", text: null },
    include: { ...shapeTone("include"), w: 3 },
    exclude: { ...shapeTone("exclude"), w: 3 }
  };
  var ALIAS2 = { included: "include", excluded: "exclude", hovered: "hover" };
  var STATES2 = ["default", "hover", "include", "exclude"];
  var MapBoundary = /* @__PURE__ */ react_default.forwardRef(function MapBoundary2({ state, label = "County boundary", style, ...rest }, forwardedRef) {
    const [hover, setHover] = useState(false);
    const requested = ALIAS2[state] || state;
    const eff = STATES2.includes(requested) ? requested : hover ? "hover" : "default";
    const t = TONE3[eff] || TONE3.default;
    const fillOpacity = eff === "include" || eff === "exclude" ? 0.16 : 0.08;
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref: forwardedRef,
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
        style: { position: "relative", width: 300, height: 220, borderRadius: "calc(var(--card-corner) * 1px)", overflow: "hidden", border: "1px solid var(--neutral-border-subtle)", cursor: "pointer", ...style },
        ...rest,
        children: /* @__PURE__ */ jsx(MapSurface, { children: [
          /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", viewBox: "0 0 300 220", style: { position: "absolute", inset: 0, width: "100%", height: "100%" }, children: /* @__PURE__ */ jsx(
            "path",
            {
              d: "M50 40 L130 30 L230 60 L250 140 L180 190 L80 180 L40 110 Z",
              fill: t.fill,
              fillOpacity,
              stroke: t.stroke,
              strokeWidth: t.w,
              strokeDasharray: t.dash || void 0,
              strokeLinejoin: "round",
              style: { transition: "stroke var(--motion-base) var(--motion-ease), stroke-width var(--motion-base) var(--motion-ease)" }
            }
          ) }),
          /* @__PURE__ */ jsx("span", { style: { position: "absolute", top: 14, left: 14, background: "var(--neutral-bg-default)", padding: "3px 9px", borderRadius: 9999, font: "var(--text-caption)", color: t.label, boxShadow: "var(--shadow-xs)" }, children: t.text || label })
        ] })
      }
    );
  });
  MapBoundary.displayName = "MapBoundary";
  var SelectButton = /* @__PURE__ */ react_default.forwardRef(function SelectButton2({
    label = "Text size",
    icon = "format_size",
    size = "regular",
    value,
    defaultValue,
    onChange,
    options = [],
    disabled = false,
    style,
    buttonStyle,
    className
  }, forwardedRef) {
    const isControlled = value !== void 0 && value !== null;
    const [inner, setInner] = useState(defaultValue != null ? defaultValue : null);
    const selected = isControlled ? value : inner;
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    useDismiss(ref, () => setOpen(false), open);
    const dims = { small: [32, 12, "small"], regular: [40, 12, "regular"], large: [48, 14, "large"] }[size] || [40, 12, "regular"];
    const [h, px, iconSize] = dims;
    const opts = options.map((o) => typeof o === "string" ? { value: o, label: o } : o);
    const selLabel = (opts.find((o) => o.value === selected) || {}).label || label;
    const pick = (o) => {
      if (!isControlled) setInner(o.value);
      if (onChange) onChange(o.value);
      setOpen(false);
    };
    return /* @__PURE__ */ jsx("div", { ref: mergeRefs(ref, forwardedRef), className, style: { position: "relative", display: "inline-block", fontFamily: "var(--font-family-body)", ...style }, children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          disabled,
          onClick: () => setOpen((o) => !o),
          style: { display: "inline-flex", alignItems: "center", gap: 8, height: h, padding: `0 ${px}px`, background: "var(--neutral-bg-default)", border: "2px solid " + (open ? "var(--brand-border-strong)" : "var(--neutral-border-muted)"), borderRadius: "calc(var(--control-md-radius) * 1px)", boxShadow: open ? "var(--focus-ring)" : "none", font: "var(--text-subtitle)", color: "var(--neutral-text-icon-emphasis)", cursor: disabled ? "not-allowed" : "pointer", transition: "border-color .15s ease, box-shadow .15s ease", ...buttonStyle },
          children: [
            icon && /* @__PURE__ */ jsx(Icon, { name: icon, size: iconSize, color: "var(--neutral-text-icon-muted)" }),
            /* @__PURE__ */ jsx("span", { children: selLabel }),
            /* @__PURE__ */ jsx(Icon, { name: open ? "expand_less" : "expand_more", size: iconSize, color: "var(--neutral-text-icon-muted)" })
          ]
        }
      ),
      open && opts.length > 0 && /* @__PURE__ */ jsx(
        DropdownList,
        {
          style: { position: "absolute", top: "calc(100% + 6px)", left: 0, minWidth: "100%", zIndex: 40 },
          width: "max-content",
          items: opts,
          value: selected,
          onSelect: (v, o) => pick(o)
        }
      )
    ] });
  });
  SelectButton.displayName = "SelectButton";
  var DEFAULT_OPTIONS = [
    { value: "bulk", label: "Add CSV Bulk Locations", icon: "upload_file" },
    { value: "saved", label: "Use Saved Map", icon: "verified_user" },
    { value: "save", label: "Save this Map", icon: "save" }
  ];
  var MapOptions = /* @__PURE__ */ react_default.forwardRef(function MapOptions2({
    label = "Map Options",
    options,
    onSelect,
    style,
    ...rest
  }, forwardedRef) {
    return /* @__PURE__ */ jsx(
      SelectButton,
      {
        ref: forwardedRef,
        label,
        icon: null,
        options: options || DEFAULT_OPTIONS,
        value: "",
        onChange: onSelect,
        style,
        ...rest
      }
    );
  });
  MapOptions.displayName = "MapOptions";
  var MODE = {
    radius: ["Radius mode is live", "Click the map to create one or more radius-based areas.", "Finish Radius"],
    polygon: ["Polygon mode is live", "Click the map to drop points, then close the shape to finish.", "Finish Polygon"]
  };
  var MODES2 = ["radius", "polygon"];
  var MapModeBanner = /* @__PURE__ */ react_default.forwardRef(function MapModeBanner2({
    mode = "radius",
    title,
    message,
    finishLabel,
    cancelLabel = "Cancel",
    controls,
    finishDisabled = false,
    onCancel,
    onFinish,
    style,
    ...rest
  }, forwardedRef) {
    const m = MODES2.includes(mode) ? mode : "radius";
    const [dTitle, dMessage, dFinish] = MODE[m];
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, role: "status", "aria-live": "polite", style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 16,
      padding: "10px 12px 10px 20px",
      boxSizing: "border-box",
      background: "var(--brand-bg-subtle)",
      // A 2px brand border, not a shadow: the banner sits on map imagery, where
      // a shadow has nothing to fall on and disappears.
      border: "2px solid var(--brand-border-strong)",
      borderRadius: "calc(var(--card-corner) * 1px)",
      boxShadow: "var(--shadow-md)",
      fontFamily: "var(--font-family-body)",
      ...style
    }, ...rest, children: [
      /* @__PURE__ */ jsx("div", { style: { minWidth: 0 }, children: [
        /* @__PURE__ */ jsx("div", { style: { font: "var(--text-subtitle)", color: "var(--brand-text-icon-default)" }, children: title || dTitle }),
        /* @__PURE__ */ jsx("div", { style: { font: "var(--text-body-sm)", color: "var(--neutral-text-icon-default)", marginTop: 1 }, children: message || dMessage })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center", gap: 8, flex: "none" }, children: [
        controls,
        cancelLabel && /* @__PURE__ */ jsx(Button, { label: cancelLabel, kind: "secondary", onClick: onCancel }),
        /* @__PURE__ */ jsx(Button, { label: finishLabel || dFinish, kind: "primary", disabled: finishDisabled, onClick: onFinish })
      ] })
    ] });
  });
  MapModeBanner.displayName = "MapModeBanner";
  var AREA_LEVELS = [
    { value: "usa", label: "USA" },
    { value: "state", label: "State" },
    { value: "county", label: "County" },
    { value: "city", label: "City" },
    { value: "zip", label: "ZIP" }
  ];
  var DEFAULT_SHAPES = [
    { id: "s1", kind: "radius", mode: "include", x: 0.32, y: 0.5, r: 0.13, address: "Winchester, San Jose", structures: "5,000", miles: 3 },
    {
      id: "s2",
      kind: "polygon",
      mode: "exclude",
      address: "Rose Garden",
      structures: "1,240",
      points: [[0.66, 0.28], [0.81, 0.35], [0.78, 0.63], [0.67, 0.7], [0.61, 0.48]]
    }
  ];
  var seq = 0;
  var nextId = () => `shape-${++seq}`;
  var MapCard = /* @__PURE__ */ react_default.forwardRef(function MapCard2({
    homes = "8,090",
    mode = null,
    view = 0,
    areaLevel = "state",
    shapes: shapesProp,
    defaultShapes = DEFAULT_SHAPES,
    // Real geography by default — the point of the card is judging the controls
    // and the drawn shapes against actual streets. MapSurface falls back to its
    // grid if the tiles can't load.
    tiles = true,
    lat = 37.3097,
    lng = -121.9578,
    zoom = 13,
    showBoundary = true,
    interactive = true,
    onRadius,
    onPolygon,
    onZoomIn,
    onZoomOut,
    onShapesChange,
    onSelectShape,
    onViewChange,
    onAreaChange,
    onBoundaryToggle,
    onCancelMode,
    onFinishMode,
    style,
    ...rest
  }, forwardedRef) {
    var _a;
    const boxRef = useRef(null);
    const [live, setLive] = useState(mode);
    const [draft, setDraft] = useState([]);
    const [inner, setInner] = useState(defaultShapes);
    const [sel, setSel] = useState(null);
    const isControlled = Array.isArray(shapesProp);
    const shapes = isControlled ? shapesProp : inner;
    const commit = (next) => {
      if (!isControlled) setInner(next);
      if (onShapesChange) onShapesChange(next);
    };
    const toFrac = (e) => {
      const b = boxRef.current.getBoundingClientRect();
      return [(e.clientX - b.left) / b.width, (e.clientY - b.top) / b.height];
    };
    const startMode = (m) => {
      setLive(m);
      setDraft([]);
      setSel(null);
      if (m === "radius" && onRadius) onRadius();
      if (m === "polygon" && onPolygon) onPolygon();
    };
    const cancelMode = () => {
      setLive(null);
      setDraft([]);
      if (onCancelMode) onCancelMode();
    };
    const finishMode = () => {
      if (live === "polygon" && draft.length >= 3) {
        commit([...shapes, { id: nextId(), kind: "polygon", mode: "include", points: draft, address: "New area", structures: "\u2014" }]);
      }
      if (onFinishMode) onFinishMode(live);
      setLive(null);
      setDraft([]);
    };
    const onCanvasClick = (e) => {
      if (!interactive) return;
      if (!live) {
        setSel(null);
        return;
      }
      const [x, y] = toFrac(e);
      if (live === "radius") {
        commit([...shapes, { id: nextId(), kind: "radius", mode: "include", x, y, r: 0.1, address: "New area", structures: "\u2014", miles: 3 }]);
      } else {
        setDraft((d) => [...d, [x, y]]);
      }
    };
    const pick = (shape, e) => {
      e.stopPropagation();
      if (!interactive || live) return;
      setSel(shape.id);
      if (onSelectShape) onSelectShape(shape);
    };
    const patch = (id, changes) => commit(shapes.map((s) => s.id === id ? { ...s, ...changes } : s));
    const remove = (id) => {
      commit(shapes.filter((s) => s.id !== id));
      setSel(null);
    };
    const selected = shapes.find((s) => s.id === sel) || null;
    const floating = { position: "absolute", zIndex: 20 };
    const pct = (n) => `${n * 100}%`;
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref: forwardedRef,
        style: {
          position: "relative",
          width: "100%",
          maxWidth: 900,
          height: 520,
          borderRadius: "calc(var(--card-corner) * 1px)",
          overflow: "hidden",
          border: "1px solid var(--neutral-border-subtle)",
          boxShadow: "var(--shadow-sm)",
          ...style
        },
        onKeyDown: (e) => {
          if (e.key === "Escape" && live) cancelMode();
        },
        tabIndex: -1,
        ...rest,
        children: /* @__PURE__ */ jsx(MapSurface, { tiles, lat, lng, zoom, mapStyle: view === 1 ? "terrain" : "streets", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              ref: boxRef,
              onClick: onCanvasClick,
              style: { position: "absolute", inset: 0, cursor: live ? "crosshair" : "default" },
              children: /* @__PURE__ */ jsx(
                "svg",
                {
                  role: "group",
                  "aria-label": `${shapes.length} drawn area${shapes.length === 1 ? "" : "s"}`,
                  style: { position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" },
                  children: [
                    shapes.map((s) => {
                      const tone = shapeTone(s.mode);
                      const on = s.id === sel;
                      const common = {
                        fill: tone.fill,
                        fillOpacity: on ? 0.28 : 0.16,
                        stroke: tone.stroke,
                        strokeWidth: on ? 4 : 3,
                        strokeDasharray: tone.dash || void 0,
                        style: { cursor: live ? "crosshair" : "pointer", transition: "fill-opacity var(--motion-fast) var(--motion-ease)" },
                        onClick: (e) => pick(s, e),
                        role: "button",
                        tabIndex: 0,
                        "aria-label": `${s.mode === "exclude" ? "Excluded" : "Included"} ${s.kind} \u2014 ${s.address}`,
                        onKeyDown: (e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            pick(s, e);
                          }
                        }
                      };
                      return s.kind === "radius" ? /* @__PURE__ */ jsx("circle", { cx: pct(s.x), cy: pct(s.y), r: pct(s.r), ...common }, s.id) : /* @__PURE__ */ jsx("polygon", { points: s.points.map(([x, y]) => `${x * 100}%,${y * 100}%`).join(" "), strokeLinejoin: "round", ...common }, s.id);
                    }),
                    draft.length > 0 && /* @__PURE__ */ jsx(
                      "polyline",
                      {
                        points: draft.map(([x, y]) => `${x * 100}%,${y * 100}%`).join(" "),
                        fill: "var(--brand-bg-default)",
                        fillOpacity: "0.12",
                        stroke: "var(--brand-bg-default)",
                        strokeWidth: "3",
                        strokeLinejoin: "round"
                      }
                    ),
                    draft.map(([x, y], i) => /* @__PURE__ */ jsx("circle", { cx: pct(x), cy: pct(y), r: "5", fill: "var(--neutral-bg-default)", stroke: "var(--brand-bg-default)", strokeWidth: "3" }, i))
                  ]
                }
              )
            }
          ),
          selected && !live && /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                position: "absolute",
                zIndex: 30,
                left: pct(selected.kind === "radius" ? selected.x : selected.points.reduce((a, p) => a + p[0], 0) / selected.points.length),
                top: pct(selected.kind === "radius" ? selected.y : Math.min(...selected.points.map((p) => p[1]))),
                transform: "translate(-50%, calc(-100% - 18px))"
              },
              onClick: (e) => e.stopPropagation(),
              children: /* @__PURE__ */ jsx(
                BubbleBox,
                {
                  type: selected.kind,
                  address: selected.address,
                  structures: selected.structures,
                  radius: (_a = selected.miles) != null ? _a : 3,
                  selected: selected.mode,
                  onInclude: () => patch(selected.id, { mode: "include" }),
                  onExclude: () => patch(selected.id, { mode: "exclude" }),
                  onRadiusChange: (m) => patch(selected.id, { miles: m }),
                  onRemove: () => remove(selected.id)
                }
              )
            }
          ),
          /* @__PURE__ */ jsx("div", { style: { ...floating, top: 16, left: 16 }, children: /* @__PURE__ */ jsx(MapOptions, {}) }),
          /* @__PURE__ */ jsx("div", { style: { ...floating, top: 16, right: 16 }, children: /* @__PURE__ */ jsx(
            GroupedButton,
            {
              kind: "primary",
              actions: [
                { label: "Add Radius", icon: "my_location", onClick: () => startMode("radius") },
                { label: "Add Polygon", icon: "polyline", onClick: () => startMode("polygon") }
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("div", { style: { ...floating, bottom: 74, right: 16 }, children: /* @__PURE__ */ jsx(
            GroupedButton,
            {
              kind: "secondary",
              orientation: "vertical",
              actions: [
                { icon: "add", ariaLabel: "Zoom in", onClick: onZoomIn },
                { icon: "remove", ariaLabel: "Zoom out", onClick: onZoomOut }
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("div", { style: {
            ...floating,
            bottom: 16,
            left: 16,
            right: 16,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap"
          }, children: [
            /* @__PURE__ */ jsx(ChangeMap, { defaultValue: view, onChange: onViewChange }),
            /* @__PURE__ */ jsx("div", { style: { flex: "1 1 auto", display: "flex", justifyContent: "center", minWidth: 0 }, children: live ? /* @__PURE__ */ jsx(
              MapModeBanner,
              {
                mode: live,
                message: live === "polygon" && draft.length ? `${draft.length} point${draft.length === 1 ? "" : "s"} placed \u2014 click to add more, then finish.` : void 0,
                onCancel: cancelMode,
                onFinish: finishMode
              }
            ) : /* @__PURE__ */ jsx("span", { style: {
              background: "var(--neutral-bg-default)",
              padding: "8px 14px",
              borderRadius: 10,
              boxShadow: "var(--shadow-md)",
              font: "var(--text-caption)",
              color: "var(--neutral-text-icon-default)",
              whiteSpace: "nowrap"
            }, children: [
              /* @__PURE__ */ jsx("b", { style: { color: "var(--info-text-icon-default)" }, children: homes }),
              " homes in selection"
            ] }) }),
            /* @__PURE__ */ jsx("div", { style: {
              display: "inline-flex",
              alignItems: "stretch",
              background: "var(--neutral-bg-default)",
              border: "1.5px solid var(--neutral-border-muted)",
              borderRadius: "calc(var(--control-md-radius) * 1px)",
              boxShadow: "var(--shadow-sm)",
              overflow: "hidden"
            }, children: [
              /* @__PURE__ */ jsx(
                GroupedButton,
                {
                  kind: "secondary",
                  actions: [{ label: "Show Boundary", icon: showBoundary ? "visibility" : "visibility_off", onClick: onBoundaryToggle }],
                  style: { border: "none", borderRadius: 0, boxShadow: "none" }
                }
              ),
              /* @__PURE__ */ jsx("span", { "aria-hidden": "true", style: { width: 1, background: "var(--neutral-border-muted)" } }),
              /* @__PURE__ */ jsx(
                SelectButton,
                {
                  label: "Select Area By",
                  icon: null,
                  options: AREA_LEVELS,
                  defaultValue: areaLevel,
                  onChange: onAreaChange,
                  buttonStyle: { border: "none", borderRadius: 0, boxShadow: "none", background: "transparent" }
                }
              )
            ] })
          ] })
        ] })
      }
    );
  });
  MapCard.displayName = "MapCard";
  var MapControls = /* @__PURE__ */ react_default.forwardRef(function MapControls2({ onRadius, onPolygon, onZoomIn, onZoomOut, style, ...rest }, forwardedRef) {
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, style: { display: "inline-flex", gap: 12, alignItems: "flex-start", ...style }, ...rest, children: [
      /* @__PURE__ */ jsx(
        GroupedButton,
        {
          kind: "primary",
          actions: [
            { label: "Add Radius", icon: "my_location", onClick: onRadius },
            { label: "Add Polygon", icon: "polyline", onClick: onPolygon }
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        GroupedButton,
        {
          kind: "secondary",
          orientation: "vertical",
          actions: [
            { icon: "add", ariaLabel: "Zoom in", onClick: onZoomIn },
            { icon: "remove", ariaLabel: "Zoom out", onClick: onZoomOut }
          ]
        }
      )
    ] });
  });
  MapControls.displayName = "MapControls";
  var MapPolygon = /* @__PURE__ */ react_default.forwardRef(function MapPolygon2({ points, mode = "include", onChange, style, ...rest }, forwardedRef) {
    const tone = shapeTone(mode);
    const W = 320, H = 260;
    const [pts, setPts] = useState(points || [[60, 50], [210, 40], [250, 150], [170, 220], [70, 190]]);
    const [drag, setDrag] = useState(-1);
    const [hover, setHover] = useState(-1);
    const wrapRef = useRef(null);
    useEffect(() => {
      if (drag < 0) return;
      const move = (e) => {
        const r = wrapRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(W, (e.clientX - r.left) / r.width * W));
        const y = Math.max(0, Math.min(H, (e.clientY - r.top) / r.height * H));
        setPts((prev) => {
          const next = prev.map((p, i) => i === drag ? [x, y] : p);
          onChange && onChange(next);
          return next;
        });
      };
      const up = () => setDrag(-1);
      window.addEventListener("pointermove", move);
      window.addEventListener("pointerup", up);
      return () => {
        window.removeEventListener("pointermove", move);
        window.removeEventListener("pointerup", up);
      };
    }, [drag, onChange]);
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref: (n) => {
          wrapRef.current = n;
          if (typeof forwardedRef === "function") forwardedRef(n);
          else if (forwardedRef) forwardedRef.current = n;
        },
        style: { position: "relative", width: W, height: H, borderRadius: "calc(var(--card-corner) * 1px)", overflow: "hidden", border: "1px solid var(--neutral-border-subtle)", touchAction: "none", ...style },
        ...rest,
        children: /* @__PURE__ */ jsx(MapSurface, { children: [
          /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", viewBox: `0 0 ${W} ${H}`, style: { position: "absolute", inset: 0, width: "100%", height: "100%" }, children: /* @__PURE__ */ jsx("polygon", { points: pts.map((p) => p.join(",")).join(" "), fill: tone.fill, fillOpacity: "0.16", stroke: tone.stroke, strokeWidth: "2", strokeDasharray: tone.dash || void 0, strokeLinejoin: "round" }) }),
          pts.map((p, i) => {
            const on = i === drag, hov = i === hover;
            const sz = on || hov ? 18 : 14;
            return /* @__PURE__ */ jsx(
              "span",
              {
                onPointerDown: (e) => {
                  e.preventDefault();
                  setDrag(i);
                },
                onPointerEnter: () => setHover(i),
                onPointerLeave: () => setHover(-1),
                style: {
                  position: "absolute",
                  left: `${p[0] / W * 100}%`,
                  top: `${p[1] / H * 100}%`,
                  transform: "translate(-50%,-50%)",
                  width: sz,
                  height: sz,
                  borderRadius: 9999,
                  background: "var(--neutral-bg-default)",
                  border: `3px solid ${tone.stroke}`,
                  boxShadow: on ? "var(--shadow-raised)" : "var(--shadow-sm)",
                  cursor: on ? "grabbing" : "grab",
                  transition: "width var(--motion-fast) var(--motion-ease), height var(--motion-fast) var(--motion-ease)"
                }
              },
              i
            );
          })
        ] })
      }
    );
  });
  MapPolygon.displayName = "MapPolygon";
  var MapRadius = /* @__PURE__ */ react_default.forwardRef(function MapRadius2({ radius = 88, maxMiles = 12, mode = "include", onChange, style, ...rest }, forwardedRef) {
    const tone = shapeTone(mode);
    const SIZE3 = 260, cx = SIZE3 / 2, cy = SIZE3 / 2, MIN = 30, MAX = 120;
    const [r, setR] = useState(Math.max(MIN, Math.min(MAX, radius)));
    const [drag, setDrag] = useState(false);
    const [hover, setHover] = useState(false);
    const wrapRef = useRef(null);
    useEffect(() => {
      if (!drag) return;
      const move = (e) => {
        const box = wrapRef.current.getBoundingClientRect();
        const px = (e.clientX - box.left) / box.width * SIZE3 - cx;
        const py = (e.clientY - box.top) / box.height * SIZE3 - cy;
        const dist = Math.max(MIN, Math.min(MAX, Math.hypot(px, py)));
        setR(dist);
        onChange && onChange(Math.round(dist / MAX * maxMiles));
      };
      const up = () => setDrag(false);
      window.addEventListener("pointermove", move);
      window.addEventListener("pointerup", up);
      return () => {
        window.removeEventListener("pointermove", move);
        window.removeEventListener("pointerup", up);
      };
    }, [drag, onChange, maxMiles]);
    const miles = Math.round(r / MAX * maxMiles);
    const handleSz = drag || hover ? 24 : 20;
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref: (n) => {
          wrapRef.current = n;
          if (typeof forwardedRef === "function") forwardedRef(n);
          else if (forwardedRef) forwardedRef.current = n;
        },
        style: { position: "relative", width: SIZE3, height: SIZE3, borderRadius: "calc(var(--card-corner) * 1px)", overflow: "hidden", border: "1px solid var(--neutral-border-subtle)", touchAction: "none", ...style },
        ...rest,
        children: /* @__PURE__ */ jsx(MapSurface, { children: [
          /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", viewBox: `0 0 ${SIZE3} ${SIZE3}`, style: { position: "absolute", inset: 0, width: "100%", height: "100%" }, children: [
            /* @__PURE__ */ jsx("circle", { cx, cy, r, fill: tone.fill, fillOpacity: "0.16", stroke: tone.stroke, strokeWidth: "2", strokeDasharray: tone.dash || void 0 }),
            /* @__PURE__ */ jsx("circle", { cx, cy, r: "4", fill: tone.stroke })
          ] }),
          /* @__PURE__ */ jsx(
            "span",
            {
              onPointerDown: (e) => {
                e.preventDefault();
                setDrag(true);
              },
              onPointerEnter: () => setHover(true),
              onPointerLeave: () => setHover(false),
              style: {
                position: "absolute",
                left: `${(cx + r) / SIZE3 * 100}%`,
                top: "50%",
                transform: "translate(-50%,-50%)",
                width: handleSz,
                height: handleSz,
                borderRadius: 9999,
                background: "var(--neutral-bg-default)",
                border: `3px solid ${tone.stroke}`,
                boxShadow: drag ? "var(--shadow-raised)" : "var(--shadow-sm)",
                cursor: drag ? "grabbing" : "grab",
                transition: "width var(--motion-fast) var(--motion-ease), height var(--motion-fast) var(--motion-ease)"
              }
            }
          ),
          /* @__PURE__ */ jsx("span", { style: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-160%)", background: "var(--neutral-bg-default)", padding: "2px 8px", borderRadius: 9999, font: "var(--text-caption)", color: "var(--neutral-text-icon-emphasis)", boxShadow: "var(--shadow-sm)" }, children: [
            tone.text,
            " \xB7 ",
            miles,
            " mi"
          ] })
        ] })
      }
    );
  });
  MapRadius.displayName = "MapRadius";
  var Spinner = /* @__PURE__ */ react_default.forwardRef(function Spinner2({ size = "md", color = "brand", label, style, className, ...rest }, forwardedRef) {
    const px = { sm: 16, md: 24, lg: 36 }[size] || 24;
    const stroke = px >= 36 ? 4 : px >= 24 ? 3 : 2;
    const ring = color === "neutral" ? "var(--neutral-text-icon-default)" : "var(--brand-bg-default)";
    return /* @__PURE__ */ jsx("span", { ref: forwardedRef, className, role: "status", "aria-live": "polite", style: { display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-family-body)", ...style }, ...rest, children: [
      /* @__PURE__ */ jsx("style", { children: "@keyframes ivds-spin{to{transform:rotate(360deg)}}" }),
      /* @__PURE__ */ jsx("span", { style: { width: px, height: px, borderRadius: 9999, border: `${stroke}px solid var(--neutral-border-subtle)`, borderTopColor: ring, animation: "ivds-spin .7s linear infinite", display: "inline-block" } }),
      label != null && label !== "" && /* @__PURE__ */ jsx("span", { style: { font: "var(--text-body-sm)", color: "var(--neutral-text-icon-muted)" }, children: label })
    ] });
  });
  Spinner.displayName = "Spinner";
  var S = {
    empty: ["inbox", "var(--neutral-bg-subtle)", "var(--neutral-text-icon-muted)", "No data yet", "Get started by creating your first item.", "Create", null],
    created: ["task_alt", "var(--success-bg-soft)", "var(--success-text-icon-default)", "You\u2019re all set", "The first item is in. Add more whenever you\u2019re ready.", "Add another", "Go to list"],
    loading: ["progress_activity", "var(--brand-bg-subtle)", "var(--brand-text-icon-default)", "Loading\u2026", "Fetching your data. This usually takes a moment.", null, null],
    searched: ["search_off", "var(--neutral-bg-subtle)", "var(--neutral-text-icon-muted)", "No matches", "Nothing matched that search. Check the spelling or try a broader term.", "Clear search", null],
    filtered: ["filter_alt_off", "var(--neutral-bg-subtle)", "var(--neutral-text-icon-muted)", "No results for these filters", "Every item was filtered out. Loosen a filter to see more.", "Clear filters", null],
    success: ["check_circle", "var(--success-bg-soft)", "var(--success-text-icon-default)", "All done", "Your changes were saved successfully.", "Continue", null],
    offline: ["wifi_off", "var(--neutral-bg-subtle)", "var(--neutral-text-icon-muted)", "You\u2019re offline", "Check your connection and try again.", "Reload", null],
    error: ["error", "var(--error-bg-soft)", "var(--error-text-icon-default)", "Something went wrong", "We couldn\u2019t load this page. Try again.", "Retry", "Contact support"],
    notFound: ["travel_explore", "var(--neutral-bg-subtle)", "var(--neutral-text-icon-muted)", "Page not found", "That page has moved, or never existed.", "Go home", null],
    forbidden: ["lock", "var(--warning-bg-soft)", "var(--warning-text-icon-strong)", "You don\u2019t have access", "Ask an admin to grant you permission to this area.", "Request access", null]
  };
  var STATUS_PAGE_STATES = Object.keys(S);
  var StatusPagePattern = /* @__PURE__ */ react_default.forwardRef(function StatusPagePattern2({
    status = "empty",
    title,
    message,
    cta,
    secondaryCta,
    icon,
    onAction,
    onSecondaryAction,
    style,
    ...rest
  }, forwardedRef) {
    const [dIcon, bg, fg, dTitle, dMsg, dCta, dSecond] = S[status] || S.empty;
    const primaryLabel = cta !== void 0 ? cta : dCta;
    const secondLabel = secondaryCta !== void 0 ? secondaryCta : dSecond;
    const glyph = icon || dIcon;
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, style: { display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 6, padding: "44px 32px", maxWidth: 520, margin: "0 auto", ...style }, ...rest, children: [
      /* @__PURE__ */ jsx("div", { style: { width: 64, height: 64, borderRadius: 9999, background: bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8 }, children: status === "loading" ? /* @__PURE__ */ jsx(Spinner, { size: "lg" }) : /* @__PURE__ */ jsx("span", { className: "material-symbols-rounded", style: { fontSize: 32, color: fg }, children: glyph }) }),
      /* @__PURE__ */ jsx("div", { style: { font: "var(--text-h1)", color: "var(--neutral-text-icon-emphasis)" }, children: title || dTitle }),
      /* @__PURE__ */ jsx("div", { style: { font: "var(--text-body)", color: "var(--neutral-text-icon-muted)", maxWidth: 360, lineHeight: 1.55 }, children: message || dMsg }),
      (primaryLabel || secondLabel) && /* @__PURE__ */ jsx("div", { style: { marginTop: 14, display: "flex", gap: 8, alignItems: "center" }, children: [
        primaryLabel && /* @__PURE__ */ jsx(Button, { label: primaryLabel, kind: "primary", onClick: onAction }),
        secondLabel && /* @__PURE__ */ jsx(Button, { label: secondLabel, kind: "text", onClick: onSecondaryAction })
      ] })
    ] });
  });
  StatusPagePattern.displayName = "StatusPagePattern";
  var DEFAULT2 = [
    { name: "90670", type: "radius", structures: "5,000", mode: "include" }
  ];
  var MapSidebar = /* @__PURE__ */ react_default.forwardRef(function MapSidebar2({
    items = DEFAULT2,
    empty = false,
    title = "Select your locations in the map",
    query,
    searchPlaceholder = "Search a location, ZIP or county",
    onSearch,
    onClearAll,
    onExpand,
    onEdit,
    onDelete,
    style,
    ...rest
  }, forwardedRef) {
    const [rows, setRows] = useState(items);
    const list = empty ? [] : rows;
    const included = list.filter((r) => r.mode !== "exclude").length;
    const excluded = list.length - included;
    const remove = (name) => {
      setRows((prev) => prev.filter((r) => r.name !== name));
      if (onDelete) onDelete(name);
    };
    const Count = ({ icon, n, label, color }) => /* @__PURE__ */ jsx("span", { style: { display: "inline-flex", alignItems: "center", gap: 5, font: "var(--text-body-sm)", color: "var(--neutral-text-icon-muted)" }, children: [
      icon && /* @__PURE__ */ jsx(Icon, { name: icon, size: "small", color }),
      /* @__PURE__ */ jsx("b", { style: { color, fontWeight: 600 }, children: n }),
      label
    ] });
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, style: {
      width: 360,
      height: 480,
      display: "flex",
      flexDirection: "column",
      background: "var(--neutral-bg-default)",
      border: "1px solid var(--neutral-border-subtle)",
      borderRadius: "calc(var(--card-corner) * 1px)",
      overflow: "hidden",
      boxSizing: "border-box",
      fontFamily: "var(--font-family-body)",
      ...style
    }, ...rest, children: [
      /* @__PURE__ */ jsx("div", { style: { padding: "16px 16px 12px", display: "flex", flexDirection: "column", gap: 12 }, children: [
        /* @__PURE__ */ jsx("span", { style: { display: "inline-flex", alignItems: "center", gap: 6, font: "var(--text-title)", color: "var(--neutral-text-icon-emphasis)" }, children: [
          title,
          /* @__PURE__ */ jsx(Icon, { name: "help", size: "small", color: "var(--neutral-text-icon-muted)" })
        ] }),
        /* @__PURE__ */ jsx(SearchField, { placeholder: searchPlaceholder, defaultValue: query, onChange: onSearch, style: { minWidth: 0, maxWidth: "100%" } })
      ] }),
      /* @__PURE__ */ jsx("div", { style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "0 16px 10px",
        borderBottom: "1px solid var(--neutral-border-subtle)"
      }, children: [
        /* @__PURE__ */ jsx(Count, { n: list.length, label: " Location(s)", color: "var(--neutral-text-icon-emphasis)" }),
        /* @__PURE__ */ jsx(Count, { icon: "home", n: included, label: " Included", color: "var(--info-text-icon-default)" }),
        excluded > 0 && /* @__PURE__ */ jsx(Count, { icon: "do_not_disturb_on", n: excluded, label: " Excluded", color: "var(--error-text-icon-default)" }),
        /* @__PURE__ */ jsx("span", { style: { flex: 1 } }),
        /* @__PURE__ */ jsx(
          GroupedButton,
          {
            kind: "secondary",
            size: "sm",
            actions: [
              { icon: "delete", ariaLabel: "Clear all locations", onClick: onClearAll, disabled: !list.length },
              { icon: "open_in_full", ariaLabel: "Expand the locations panel", onClick: onExpand }
            ]
          }
        )
      ] }),
      list.length === 0 ? /* @__PURE__ */ jsx("div", { style: { flex: 1, display: "flex", alignItems: "center" }, children: /* @__PURE__ */ jsx(
        StatusPagePattern,
        {
          status: "empty",
          icon: "location_off",
          title: "No areas selected",
          message: "Search above, or draw a radius or polygon on the map.",
          cta: null,
          style: { padding: "24px 20px" }
        }
      ) }) : /* @__PURE__ */ jsx("div", { style: { flex: 1, overflowY: "auto" }, children: list.map((r) => /* @__PURE__ */ jsx(
        LocationRow,
        {
          name: r.name,
          type: r.type,
          structures: r.structures,
          mode: r.mode,
          onEdit: () => onEdit && onEdit(r),
          onDelete: () => remove(r.name)
        },
        r.name
      )) })
    ] });
  });
  MapSidebar.displayName = "MapSidebar";
  var Menubar = /* @__PURE__ */ react_default.forwardRef(function Menubar2({ menus, onSelect, style, className }, forwardedRef) {
    const [openIdx, setOpenIdx] = useState(-1);
    const [hovIdx, setHovIdx] = useState(-1);
    const ref = useRef(null);
    useDismiss(ref, () => setOpenIdx(-1), openIdx >= 0);
    const data = menus || [
      { label: "File", items: [{ label: "New Tab", kbd: "\u2318T" }, { label: "New Window", kbd: "\u2318N" }, { label: "Share" }] },
      { label: "Edit", items: [{ label: "Undo", kbd: "\u2318Z" }, { label: "Redo", kbd: "\u21E7\u2318Z" }, { label: "Cut" }, { label: "Copy" }] },
      { label: "View", items: [{ label: "Zoom In" }, { label: "Zoom Out" }, { label: "Full Screen" }] },
      { label: "Help", items: [{ label: "Documentation" }, { label: "Keyboard Shortcuts" }] }
    ];
    return /* @__PURE__ */ jsx("div", { ref: mergeRefs(ref, forwardedRef), className, style: { position: "relative", display: "inline-flex", fontFamily: "var(--font-family-body)", background: "var(--neutral-bg-default)", border: "1px solid var(--neutral-border-subtle)", borderRadius: "calc(var(--control-md-radius) * 1px)", padding: 3, gap: 2, boxShadow: "var(--shadow-xs)", ...style }, children: data.map((m, i) => /* @__PURE__ */ jsx("div", { style: { position: "relative" }, children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          onClick: () => setOpenIdx((o) => o === i ? -1 : i),
          onMouseEnter: () => {
            setHovIdx(i);
            if (openIdx >= 0) setOpenIdx(i);
          },
          onMouseLeave: () => setHovIdx(-1),
          style: {
            padding: "6px 12px",
            borderRadius: "calc(var(--control-sm-radius) * 1px)",
            font: "var(--text-subtitle)",
            cursor: "pointer",
            background: openIdx === i ? "var(--brand-bg-weak)" : hovIdx === i ? "var(--neutral-bg-subtle)" : "transparent",
            color: openIdx === i ? "var(--brand-text-icon-default)" : "var(--neutral-text-icon-emphasis)",
            transition: "background var(--motion-base) var(--motion-ease)"
          },
          children: m.label
        }
      ),
      openIdx === i && /* @__PURE__ */ jsx("div", { style: { ...surface, position: "absolute", top: "calc(100% + 6px)", left: 0, minWidth: 180, padding: 5, zIndex: 50 }, children: m.items.map((it) => /* @__PURE__ */ jsx(
        DropdownItem,
        {
          label: it.label,
          kbd: it.kbd,
          onClick: () => {
            if (onSelect) onSelect(m.label, it);
            setOpenIdx(-1);
          }
        },
        it.label
      )) })
    ] }, m.label)) });
  });
  Menubar.displayName = "Menubar";
  var HEAD = {
    brand: { bg: "var(--brand-bg-default)", fg: "var(--brand-text-icon-on)", primary: "primary" },
    error: { bg: "var(--error-bg-default)", fg: "var(--error-text-icon-on)", primary: "destructive" },
    neutral: { bg: "var(--neutral-bg-default)", fg: "var(--neutral-text-icon-emphasis)", primary: "primary" }
  };
  var Modal = /* @__PURE__ */ react_default.forwardRef(function Modal2({ title = "Modal Title", body = "This is the dialog body. Explain what the user is confirming or configuring here.", tone = "brand", primary = "Confirm", secondary = "Cancel", onPrimary, onSecondary, onClose, style, ...rest }, forwardedRef) {
    const h = HEAD[tone] || HEAD.brand;
    const onColor = tone !== "neutral";
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, style: {
      width: 600,
      maxWidth: "100%",
      background: "var(--neutral-bg-default)",
      border: "1px solid var(--neutral-border-subtle)",
      borderRadius: "calc(var(--card-corner) * 1px)",
      boxShadow: "var(--shadow-dialog)",
      overflow: "hidden",
      boxSizing: "border-box",
      ...style
    }, ...rest, children: [
      /* @__PURE__ */ jsx("div", { style: { minHeight: 52, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "0 12px 0 20px", background: h.bg, borderBottom: onColor ? "none" : "1px solid var(--neutral-border-subtle)" }, children: [
        /* @__PURE__ */ jsx("span", { style: { font: "var(--text-h3)", color: h.fg }, children: title }),
        /* @__PURE__ */ jsx(
          IconButton,
          {
            icon: "close",
            kind: "tertiary",
            size: "small",
            onClick: onClose,
            "aria-label": "Close",
            color: onColor ? "var(--brand-text-icon-on)" : "var(--neutral-text-icon-muted)"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { style: { padding: "22px 20px", font: "var(--text-body)", color: "var(--neutral-text-icon-default)", lineHeight: 1.55 }, children: body }),
      /* @__PURE__ */ jsx("div", { style: { display: "flex", justifyContent: "flex-end", gap: 10, padding: "0 20px 20px" }, children: [
        secondary && /* @__PURE__ */ jsx(Button, { label: secondary, kind: "secondary", onClick: onSecondary }),
        primary && /* @__PURE__ */ jsx(Button, { label: primary, kind: h.primary, onClick: onPrimary })
      ] })
    ] });
  });
  Modal.displayName = "Modal";
  var Navbar = /* @__PURE__ */ react_default.forwardRef(function Navbar2({ brand = "Product", variant = "workspace", name = "Hi, Automated", sub = "$5,022.23 Balance", style, ...rest }, forwardedRef) {
    const org = variant === "org";
    const bg = org ? "var(--brand-bg-strong)" : "var(--neutral-bg-default)";
    const fg = org ? "rgb(var(--on-dark))" : "var(--neutral-text-icon-emphasis)";
    const iconColor = org ? "var(--surface-glass)" : "var(--neutral-text-icon-default)";
    const iconHover = org ? "var(--hairline-on-dark)" : "var(--neutral-bg-subtle)";
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      width: "100%",
      boxSizing: "border-box",
      height: 64,
      padding: "0 16px",
      background: bg,
      borderBottom: org ? "none" : "1px solid var(--neutral-border-subtle)",
      ...style
    }, ...rest, children: [
      /* @__PURE__ */ jsx("span", { style: { display: "flex", alignItems: "center", gap: 9, fontWeight: 700, font: "var(--text-subtitle)", color: fg }, children: [
        /* @__PURE__ */ jsx("span", { style: { width: 28, height: 28, borderRadius: 8, background: org ? "rgb(var(--on-dark))" : "var(--brand-bg-default)", color: org ? "var(--brand-bg-default)" : "rgb(var(--on-dark))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }, children: "\u26A1" }),
        brand
      ] }),
      /* @__PURE__ */ jsx("div", { style: { flex: 1 } }),
      /* @__PURE__ */ jsx(IconButton, { icon: "settings", kind: "ghost", color: iconColor, hoverBg: iconHover }),
      /* @__PURE__ */ jsx("span", { style: { position: "relative", display: "inline-flex" }, children: [
        /* @__PURE__ */ jsx(IconButton, { icon: "notifications", kind: "ghost", color: iconColor, hoverBg: iconHover }),
        /* @__PURE__ */ jsx("span", { style: { position: "absolute", top: 4, right: 4, minWidth: 15, height: 15, borderRadius: 9999, background: "var(--error-bg-default)", color: "var(--neutral-text-icon-on)", font: "var(--text-caption)", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 3px", pointerEvents: "none" }, children: "3" })
      ] }),
      /* @__PURE__ */ jsx(AccountDropdown, { variant, name, sub })
    ] });
  });
  Navbar.displayName = "Navbar";
  var TONE4 = {
    brand: ["var(--brand-bg-default)", "var(--brand-bg-subtle)", "var(--brand-border-default)", "var(--brand-text-icon-default)", "campaign"],
    error: ["var(--error-bg-default)", "var(--error-bg-subtle)", "var(--error-border-default)", "var(--error-text-icon-strong)", "error"],
    info: ["var(--info-bg-default)", "var(--info-bg-subtle)", "var(--info-border-default)", "var(--info-text-icon-strong)", "info"],
    neutral: ["var(--neutral-border-strong)", "var(--neutral-bg-default)", "var(--neutral-border-default)", "var(--neutral-text-icon-emphasis)", "notifications"],
    success: ["var(--success-bg-default)", "var(--success-bg-subtle)", "var(--success-border-default)", "var(--success-text-icon-strong)", "check_circle"],
    warning: ["var(--warning-bg-default)", "var(--warning-bg-subtle)", "var(--warning-border-default)", "var(--warning-text-icon-strong)", "warning"]
  };
  var NotificationCards = /* @__PURE__ */ react_default.forwardRef(function NotificationCards2({ color = "brand", title = "Notification Title", subtitle = "A short supporting line explaining what happened.", primary = "View", secondary = "Dismiss", onClose, style, ...rest }, forwardedRef) {
    const [bar, bg, bd, fg, icon] = TONE4[color] || TONE4.brand;
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, style: {
      display: "flex",
      alignItems: "stretch",
      width: 400,
      maxWidth: "100%",
      background: bg,
      border: `1px solid ${bd}`,
      borderRadius: 10,
      overflow: "hidden",
      boxShadow: "var(--shadow-toast)",
      boxSizing: "border-box",
      ...style
    }, ...rest, children: [
      /* @__PURE__ */ jsx("div", { style: { width: 10, background: bar, flex: "none" } }),
      /* @__PURE__ */ jsx("div", { style: { padding: "14px 16px", flex: 1, minWidth: 0 }, children: [
        /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "flex-start", gap: 12 }, children: [
          /* @__PURE__ */ jsx("span", { style: { width: 32, height: 32, flex: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", color: fg }, children: /* @__PURE__ */ jsx("span", { className: "material-symbols-rounded", style: { fontSize: 24 }, children: icon }) }),
          /* @__PURE__ */ jsx("div", { style: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ jsx("div", { style: { font: "var(--text-h3)", color: fg }, children: title }),
            /* @__PURE__ */ jsx("div", { style: { font: "var(--text-body-sm)", color: "var(--neutral-text-icon-default)", marginTop: 2, lineHeight: 1.5 }, children: subtitle })
          ] }),
          /* @__PURE__ */ jsx(IconButton, { icon: "close", kind: "tertiary", size: "small", onClick: onClose, "aria-label": "Dismiss", color: "var(--neutral-text-icon-muted)" })
        ] }),
        /* @__PURE__ */ jsx("div", { style: { display: "flex", justifyContent: "flex-start", gap: 8, marginTop: 12 }, children: [
          primary && /* @__PURE__ */ jsx(Button, { label: primary, kind: "secondary", size: "sm" }),
          secondary && /* @__PURE__ */ jsx(Button, { label: secondary, kind: "text", size: "sm" })
        ] })
      ] })
    ] });
  });
  NotificationCards.displayName = "NotificationCards";
  var FIELD_STATES4 = ["default", "hovered", "filled", "typing", "focused", "success", "error", "disabled"];
  var NumberField = /* @__PURE__ */ react_default.forwardRef(function NumberField2({
    label = "Quantity",
    value,
    defaultValue = 0,
    onChange,
    onFocus,
    onBlur,
    min,
    max,
    step = 1,
    helper,
    error,
    success,
    disabled = false,
    state,
    inputRef,
    id,
    name,
    style,
    className,
    ...rest
  }, forwardedRef) {
    const autoId = useId();
    const fieldId = id || autoId;
    const descId = `${fieldId}-desc`;
    const isControlled = value !== void 0 && value !== null;
    const [inner, setInner] = useState(String(defaultValue));
    const raw = isControlled ? String(value) : inner;
    const [focused, setFocused] = useState(false);
    const [hovered, setHovered] = useState(false);
    const hasError = !!error;
    const errText = typeof error === "string" ? error : null;
    const hasSuccess = !!success && !hasError;
    const okText = typeof success === "string" ? success : null;
    const eff = resolveFieldState({ state: FIELD_STATES4.includes(state) ? state : void 0, disabled, hasError, hasSuccess, focused, hovered, filled: raw !== "" });
    const s = fieldState(eff);
    const stIcon = statusIcon(eff);
    const clamp = (n) => {
      if (min != null && n < min) n = min;
      if (max != null && n > max) n = max;
      return n;
    };
    const commit = (n) => {
      const v = String(clamp(n));
      if (!isControlled) setInner(v);
      if (onChange) onChange({ target: { value: v, valueAsNumber: Number(v) } });
    };
    const bump = (dir) => {
      if (disabled) return;
      const cur = Number(raw) || 0;
      commit(cur + dir * step);
    };
    const stepBtn = { display: "inline-flex", alignItems: "center", justifyContent: "center", width: 24, height: 15, borderRadius: 4, cursor: disabled ? "not-allowed" : "pointer", fontFamily: "'Material Symbols Rounded'", fontSize: 18, color: "var(--neutral-text-icon-default)", userSelect: "none" };
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, className, style: { boxSizing: "border-box", display: "flex", flexDirection: "column", gap: 4, width: "100%", minWidth: 200, maxWidth: 260, fontFamily: fieldFont, ...style }, children: [
      label != null && label !== "" && /* @__PURE__ */ jsx("label", { htmlFor: fieldId, style: { fontWeight: 600, fontSize: 14, lineHeight: 1.4, color: disabled ? "var(--neutral-text-icon-subtle)" : "var(--neutral-text-icon-emphasis)" }, children: label }),
      /* @__PURE__ */ jsx("div", { onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false), style: { boxSizing: "border-box", display: "flex", alignItems: "center", height: "calc(var(--control-md-height) * 1px)", padding: "0 6px 0 16px", borderRadius: "calc(var(--control-md-radius) * 1px)", background: s.bg, border: s.border, boxShadow: s.shadow, transition: "border-color .15s ease, box-shadow .15s ease" }, children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            ...rest,
            type: "number",
            inputMode: "numeric",
            id: fieldId,
            name,
            min,
            max,
            step,
            disabled,
            value: raw,
            className: "ivdsField ivds-num-native",
            ref: inputRef,
            "aria-invalid": hasError ? "true" : void 0,
            "aria-describedby": errText || okText || helper ? descId : void 0,
            onChange: (e) => {
              if (!isControlled) setInner(e.target.value);
              onChange && onChange(e);
            },
            onFocus: (e) => {
              setFocused(true);
              onFocus && onFocus(e);
            },
            onBlur: (e) => {
              setFocused(false);
              onBlur && onBlur(e);
            },
            style: { flex: 1, minWidth: 0, border: "none", outline: "none", background: "transparent", padding: 0, fontFamily: fieldFont, fontWeight: 400, fontSize: 16, lineHeight: 1.5, color: disabled ? "var(--neutral-text-icon-weak)" : "var(--neutral-text-icon-emphasis)", MozAppearance: "textfield" }
          }
        ),
        /* @__PURE__ */ jsx("style", { children: ".ivds-num-native::-webkit-inner-spin-button,.ivds-num-native::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none;margin:0}" }),
        stIcon && /* @__PURE__ */ jsx(Icon, { name: stIcon.name, size: "regular", color: stIcon.color }),
        /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: 2, flexShrink: 0 }, children: [
          /* @__PURE__ */ jsx(IconAffordance, { glyph: "expand_less", size: 18, w: 24, h: 15, label: "Increment", disabled, onClick: () => bump(1) }),
          /* @__PURE__ */ jsx(IconAffordance, { glyph: "expand_more", size: 18, w: 24, h: 15, label: "Decrement", disabled, onClick: () => bump(-1) })
        ] })
      ] }),
      (helper != null || errText != null || okText != null) && /* @__PURE__ */ jsx("span", { id: descId, role: hasError ? "alert" : void 0, style: { fontWeight: 400, fontSize: 12, lineHeight: 1.4, color: helperColor(eff) }, children: errText || okText || helper })
    ] });
  });
  NumberField.displayName = "NumberField";
  var OrganizationComponents = /* @__PURE__ */ react_default.forwardRef(function OrganizationComponents2({ type = "secondary", title = "Metric", value = "0", delta = "vs last period", icon = "insights", style, ...rest }, forwardedRef) {
    if (type === "empty") return /* @__PURE__ */ jsx("div", { ref: forwardedRef, style: {
      width: 253,
      boxSizing: "border-box",
      padding: 20,
      borderRadius: "calc(var(--card-corner) * 1px)",
      background: "linear-gradient(135deg,var(--brand-bg-weak),var(--brand-bg-subtle))",
      border: "1px dashed var(--brand-border-default)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 8,
      ...style
    }, ...rest, children: [
      /* @__PURE__ */ jsx("span", { className: "material-symbols-rounded", style: { fontSize: 24, color: "var(--brand-text-icon-default)" }, children: "link" }),
      /* @__PURE__ */ jsx("div", { style: { font: "var(--text-subtitle)", color: "var(--neutral-text-icon-emphasis)" }, children: title }),
      /* @__PURE__ */ jsx("div", { style: { font: "var(--text-body-sm)", color: "var(--brand-text-icon-default)", display: "inline-flex", alignItems: "center", gap: 4, cursor: "pointer" }, children: [
        "Connect data",
        /* @__PURE__ */ jsx("span", { className: "material-symbols-rounded", style: { fontSize: 16 }, children: "arrow_forward" })
      ] })
    ] });
    const primary = type === "primary";
    const fg = primary ? "rgb(var(--on-dark))" : "var(--neutral-text-icon-emphasis)";
    const sub = primary ? "var(--surface-glass)" : "var(--neutral-text-icon-muted)";
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, style: {
      width: 253,
      boxSizing: "border-box",
      padding: 18,
      borderRadius: "calc(var(--card-corner) * 1px)",
      background: primary ? "var(--brand-bg-default)" : "var(--neutral-bg-default)",
      border: primary ? "none" : "1px solid var(--neutral-border-subtle)",
      boxShadow: "var(--shadow-xs)",
      ...style
    }, ...rest, children: [
      /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ jsx("span", { style: { display: "inline-flex", alignItems: "center", gap: 8, font: "var(--text-subtitle)", color: sub }, children: [
          /* @__PURE__ */ jsx("span", { className: "material-symbols-rounded", style: { fontSize: 18 }, children: icon }),
          title
        ] }),
        /* @__PURE__ */ jsx("span", { className: "material-symbols-rounded", style: { fontSize: 18, color: sub, cursor: "pointer" }, children: "more_horiz" })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { font: "var(--text-display)", color: fg, margin: "10px 0 6px" }, children: value }),
      /* @__PURE__ */ jsx("div", { style: { font: "var(--text-caption)", color: sub }, children: delta })
    ] });
  });
  OrganizationComponents.displayName = "OrganizationComponents";
  var Pagination = /* @__PURE__ */ react_default.forwardRef(function Pagination2({
    rows = 100,
    range = "1\u2013100 of 100",
    options = [20, 40, 60, 80, 100],
    page = 1,
    pageCount = 1,
    onRowsChange,
    onPageChange,
    style,
    ...rest
  }, forwardedRef) {
    const [val, setVal] = useState(rows);
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    useDismiss(ref, () => setOpen(false), open);
    const atStart = page <= 1;
    const atEnd = page >= pageCount;
    const go = (p) => onPageChange && onPageChange(Math.min(Math.max(p, 1), pageCount));
    const navBtn = (icon, label, disabled, to) => /* @__PURE__ */ jsx(
      IconButton,
      {
        icon,
        label,
        kind: "secondary",
        size: "small",
        disabled,
        onClick: () => go(to)
      }
    );
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, style: { display: "flex", alignItems: "center", gap: 20, width: "100%", boxSizing: "border-box", font: "var(--text-body-sm)", color: "var(--neutral-text-icon-muted)", ...style }, ...rest, children: [
      /* @__PURE__ */ jsx("span", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
        "Rows per page",
        /* @__PURE__ */ jsx("span", { ref, style: { position: "relative" }, children: [
          /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setOpen((o) => !o), style: {
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            height: "calc(var(--control-md-height) * 1px)",
            padding: "0 8px 0 12px",
            border: "2px solid " + (open ? "var(--brand-border-strong)" : "var(--neutral-border-muted)"),
            borderRadius: "calc(var(--control-md-radius) * 1px)",
            background: "var(--neutral-bg-default)",
            color: "var(--neutral-text-icon-emphasis)",
            font: "var(--text-subtitle)",
            cursor: "pointer",
            boxShadow: open ? "var(--focus-ring)" : "none",
            transition: "border-color .15s, box-shadow .15s"
          }, children: [
            val,
            /* @__PURE__ */ jsx("span", { className: "material-symbols-rounded", style: { fontSize: 18, color: "var(--neutral-text-icon-muted)" }, children: open ? "expand_less" : "expand_more" })
          ] }),
          open && /* @__PURE__ */ jsx("div", { style: {
            position: "absolute",
            bottom: "calc(100% + 6px)",
            left: 0,
            minWidth: "100%",
            background: "var(--neutral-bg-default)",
            border: "1px solid var(--neutral-border-subtle)",
            borderRadius: "calc(var(--card-corner) * 1px)",
            boxShadow: "var(--shadow-lg)",
            padding: 5,
            zIndex: 30
          }, children: options.map((o) => /* @__PURE__ */ jsx(
            DropdownItem,
            {
              label: String(o),
              state: o === val ? "selected" : "default",
              onClick: () => {
                setVal(o);
                setOpen(false);
                onRowsChange && onRowsChange(o);
              }
            },
            o
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { flex: 1 } }),
      /* @__PURE__ */ jsx("span", { style: { color: "var(--neutral-text-icon-muted)" }, children: range }),
      /* @__PURE__ */ jsx("span", { style: { display: "flex", gap: 6 }, children: [
        navBtn("first_page", "First page", atStart, 1),
        navBtn("chevron_left", "Previous page", atStart, page - 1),
        navBtn("chevron_right", "Next page", atEnd, page + 1),
        navBtn("last_page", "Last page", atEnd, pageCount)
      ] })
    ] });
  });
  Pagination.displayName = "Pagination";
  var FIELD_STATES5 = ["default", "hovered", "filled", "typing", "focused", "success", "error", "disabled"];
  var PasswordField = /* @__PURE__ */ react_default.forwardRef(function PasswordField2({
    label = "Password",
    value,
    defaultValue,
    onChange,
    onFocus,
    onBlur,
    placeholder = "Enter password",
    helper,
    error,
    success,
    disabled = false,
    state,
    defaultReveal = false,
    inputRef,
    id,
    name,
    style,
    className,
    ...rest
  }, forwardedRef) {
    const autoId = useId();
    const fieldId = id || autoId;
    const descId = `${fieldId}-desc`;
    const isControlled = value !== void 0 && value !== null;
    const [inner, setInner] = useState(defaultValue != null ? String(defaultValue) : "");
    const val = isControlled ? String(value) : inner;
    const [reveal, setReveal] = useState(defaultReveal);
    const [focused, setFocused] = useState(false);
    const [hovered, setHovered] = useState(false);
    const hasError = !!error;
    const errText = typeof error === "string" ? error : null;
    const hasSuccess = !!success && !hasError;
    const okText = typeof success === "string" ? success : null;
    const filled = val.length > 0;
    const eff = resolveFieldState({ state: FIELD_STATES5.includes(state) ? state : void 0, disabled, hasError, hasSuccess, focused, hovered, filled });
    const s = fieldState(eff);
    const stIcon = statusIcon(eff);
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, className, style: { boxSizing: "border-box", display: "flex", flexDirection: "column", gap: 4, width: "100%", minWidth: 280, maxWidth: 420, fontFamily: fieldFont, ...style }, children: [
      label != null && label !== "" && /* @__PURE__ */ jsx("label", { htmlFor: fieldId, style: { fontWeight: 600, fontSize: 14, lineHeight: 1.4, color: disabled ? "var(--neutral-text-icon-subtle)" : "var(--neutral-text-icon-emphasis)" }, children: label }),
      /* @__PURE__ */ jsx("div", { onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false), style: { boxSizing: "border-box", display: "flex", alignItems: "center", gap: 6, height: "calc(var(--control-md-height) * 1px)", padding: "8px 12px 8px 16px", borderRadius: "calc(var(--control-md-radius) * 1px)", background: s.bg, border: s.border, boxShadow: s.shadow, transition: "border-color .15s ease, box-shadow .15s ease" }, children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "ivdsField",
            ...rest,
            type: reveal ? "text" : "password",
            id: fieldId,
            name,
            placeholder,
            disabled,
            value: val,
            ref: inputRef,
            "aria-invalid": hasError ? "true" : void 0,
            "aria-describedby": errText || okText || helper ? descId : void 0,
            onChange: (e) => {
              if (!isControlled) setInner(e.target.value);
              onChange && onChange(e);
            },
            onFocus: (e) => {
              setFocused(true);
              onFocus && onFocus(e);
            },
            onBlur: (e) => {
              setFocused(false);
              onBlur && onBlur(e);
            },
            style: { flex: 1, minWidth: 0, border: "none", outline: "none", background: "transparent", padding: 0, fontFamily: fieldFont, fontWeight: 400, fontSize: 16, lineHeight: 1.5, color: disabled ? "var(--neutral-text-icon-weak)" : "var(--neutral-text-icon-emphasis)" }
          }
        ),
        stIcon && /* @__PURE__ */ jsx(Icon, { name: stIcon.name, size: "regular", color: stIcon.color }),
        /* @__PURE__ */ jsx(
          IconAffordance,
          {
            glyph: reveal ? "visibility_off" : "visibility",
            size: 20,
            w: 32,
            h: 32,
            label: reveal ? "Hide password" : "Show password",
            disabled,
            onClick: () => setReveal((r) => !r)
          }
        )
      ] }),
      (helper != null || errText != null || okText != null) && /* @__PURE__ */ jsx("span", { id: descId, role: hasError ? "alert" : void 0, style: { fontWeight: 400, fontSize: 12, lineHeight: 1.4, color: helperColor(eff) }, children: errText || okText || helper })
    ] });
  });
  PasswordField.displayName = "PasswordField";
  var PinMarker = /* @__PURE__ */ react_default.forwardRef(function PinMarker2({ color = "var(--brand-bg-default)", style, ...rest }, forwardedRef) {
    return /* @__PURE__ */ jsx("span", { ref: forwardedRef, style: { display: "inline-block", ...style }, ...rest, children: /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", width: "24", height: "32", viewBox: "0 0 24 32", children: [
      /* @__PURE__ */ jsx("path", { d: "M12 0C5.4 0 0 5.4 0 12c0 8 12 20 12 20s12-12 12-20C24 5.4 18.6 0 12 0z", fill: color }),
      /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "5", fill: "var(--neutral-bg-default)" })
    ] }) });
  });
  PinMarker.displayName = "PinMarker";
  var PolygonPoint = /* @__PURE__ */ react_default.forwardRef(function PolygonPoint2({ active = false, style, ...rest }, forwardedRef) {
    return /* @__PURE__ */ jsx("span", { ref: forwardedRef, style: {
      display: "inline-block",
      width: 16,
      height: 16,
      borderRadius: 9999,
      background: "var(--neutral-bg-default)",
      border: `3px solid ${active ? "var(--brand-bg-default)" : "var(--brand-bg-default)"}`,
      boxShadow: active ? "0 0 0 4px var(--brand-bg-subtle)" : "var(--shadow-sm)",
      cursor: "grab",
      ...style
    }, ...rest });
  });
  PolygonPoint.displayName = "PolygonPoint";
  var Popover = /* @__PURE__ */ react_default.forwardRef(function Popover2({ trigger = "Open", title, children, body, defaultOpen = false, style, className, ...rest }, forwardedRef) {
    const [open, setOpen] = useState(defaultOpen);
    const ref = useRef(null);
    useDismiss(ref, () => setOpen(false), open);
    return /* @__PURE__ */ jsx("div", { ref: mergeRefs(ref, forwardedRef), className, style: { position: "relative", display: "inline-block", fontFamily: "var(--font-family-body)", ...style }, ...rest, children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => setOpen((o) => !o),
          style: { display: "inline-flex", alignItems: "center", gap: 6, height: 36, padding: "0 16px", borderRadius: "calc(var(--control-md-radius) * 1px)", background: "var(--neutral-bg-default)", border: "1px solid var(--neutral-border-default)", font: "var(--text-subtitle)", color: "var(--neutral-text-icon-emphasis)", cursor: "pointer" },
          children: trigger
        }
      ),
      open && /* @__PURE__ */ jsx("div", { style: { ...surface, position: "absolute", top: "calc(100% + 8px)", left: 0, minWidth: 240, padding: 16, zIndex: 40 }, children: [
        /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: -6, left: 24, width: 11, height: 11, background: "var(--neutral-bg-default)", borderLeft: "1px solid var(--neutral-border-subtle)", borderTop: "1px solid var(--neutral-border-subtle)", transform: "rotate(45deg)" } }),
        title && /* @__PURE__ */ jsx("div", { style: { font: "var(--text-subtitle)", color: "var(--neutral-text-icon-emphasis)", marginBottom: 4 }, children: title }),
        /* @__PURE__ */ jsx("div", { style: { font: "var(--text-body-sm)", color: "var(--neutral-text-icon-muted)" }, children: children || body })
      ] })
    ] });
  });
  Popover.displayName = "Popover";
  var FILL = {
    brand: "var(--brand-bg-default)",
    success: "var(--success-bg-default)",
    warning: "var(--warning-bg-default)",
    error: "var(--error-bg-default)"
  };
  var ProgressBar = /* @__PURE__ */ react_default.forwardRef(function ProgressBar2({ value = 38, color = "brand", style, ...rest }, forwardedRef) {
    const pct = Math.max(0, Math.min(100, Number(value) || 0));
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref: forwardedRef,
        role: "progressbar",
        "aria-valuenow": pct,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        style: { width: "100%", height: 12, borderRadius: 9999, background: "var(--neutral-bg-emphasis)", overflow: "hidden", ...style },
        ...rest,
        children: /* @__PURE__ */ jsx("div", { style: { width: pct + "%", height: "100%", borderRadius: 9999, background: FILL[color] || FILL.brand, transition: "width .4s ease" } })
      }
    );
  });
  ProgressBar.displayName = "ProgressBar";
  var RadarChart = /* @__PURE__ */ react_default.forwardRef(function RadarChart2({ data = "80,65,90,70,85,60", labels = "Speed,Power,Range,Cost,UX,Support", showValues = false, tooltip = true, style, ...rest }, forwardedRef) {
    const ariaLabel = rest["aria-label"] || `${data ? String(data).split(",").length : 0}-point chart`;
    const vals = String(data).split(",").map(Number);
    const labs = String(labels).split(",");
    const n = vals.length, cx = 110, cy = 110, R3 = 78;
    const pt = (i, r) => {
      const a = -Math.PI / 2 + i * 2 * Math.PI / n;
      return [cx + Math.cos(a) * r, cy + Math.sin(a) * r];
    };
    const ring = (f) => vals.map((_, i) => pt(i, R3 * f).join(",")).join(" ");
    const shape = vals.map((v, i) => pt(i, R3 * (v / 100)).join(",")).join(" ");
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, style: { width: 220, ...style }, ...rest, children: /* @__PURE__ */ jsx("svg", { role: "img", "aria-label": ariaLabel, viewBox: "0 0 220 220", style: { width: "100%", height: "auto" }, children: [
      [0.25, 0.5, 0.75, 1].map((f, i) => /* @__PURE__ */ jsx("polygon", { points: ring(f), fill: "none", stroke: "var(--neutral-border-subtle)", strokeWidth: "1" }, i)),
      vals.map((_, i) => {
        const [x, y] = pt(i, R3);
        return /* @__PURE__ */ jsx("line", { x1: cx, y1: cy, x2: x, y2: y, stroke: "var(--neutral-border-subtle)", strokeWidth: "1" }, i);
      }),
      /* @__PURE__ */ jsx("polygon", { points: shape, fill: "var(--brand-bg-default)", fillOpacity: "0.22", stroke: "var(--brand-bg-default)", strokeWidth: "2" }),
      vals.map((v, i) => {
        const [x, y] = pt(i, R3 * (v / 100));
        return /* @__PURE__ */ jsx("circle", { cx: x, cy: y, r: "3", fill: "var(--brand-bg-default)", children: tooltip && /* @__PURE__ */ jsx("title", { children: [
          labs[i],
          ": ",
          v
        ] }) }, i);
      }),
      showValues && vals.map((v, i) => {
        const [x, y] = pt(i, R3 * (v / 100));
        return /* @__PURE__ */ jsx("text", { x, y: y - 7, textAnchor: "middle", style: { font: "var(--text-caption)", fill: "var(--neutral-text-icon-default)" }, children: v }, "v" + i);
      }),
      labs.map((l, i) => {
        const [x, y] = pt(i, R3 + 16);
        return /* @__PURE__ */ jsx("text", { x, y, textAnchor: "middle", dominantBaseline: "middle", style: { font: "var(--text-caption)", fill: "var(--neutral-text-icon-muted)" }, children: l }, i);
      })
    ] }) });
  });
  RadarChart.displayName = "RadarChart";
  var RadialChart = /* @__PURE__ */ react_default.forwardRef(function RadialChart2({ data = "72,54,38", labels = "Mobile,Desktop,Tablet", showValues = true, tooltip = true, style, ...rest }, forwardedRef) {
    const ariaLabel = rest["aria-label"] || `${data ? String(data).split(",").length : 0}-point chart`;
    const vals = String(data).split(",").map(Number);
    const labs = String(labels).split(",");
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, style: { display: "flex", alignItems: "center", gap: 26, maxWidth: 440, ...style }, ...rest, children: [
      /* @__PURE__ */ jsx("svg", { role: "img", "aria-label": ariaLabel, viewBox: "0 0 160 160", style: { width: 160, height: 160, flex: "none" }, children: /* @__PURE__ */ jsx("g", { transform: "rotate(-90 80 80)", children: vals.map((v, i) => {
        const r = 66 - i * 20, C = 2 * Math.PI * r, len = v / 100 * C;
        return /* @__PURE__ */ jsx("g", { children: [
          /* @__PURE__ */ jsx("circle", { cx: "80", cy: "80", r, fill: "none", stroke: "var(--neutral-bg-subtle)", strokeWidth: "14" }),
          /* @__PURE__ */ jsx("circle", { cx: "80", cy: "80", r, fill: "none", stroke: SERIES[i % SERIES.length], strokeWidth: "14", strokeLinecap: "round", strokeDasharray: `${len} ${C - len}`, children: tooltip && /* @__PURE__ */ jsx("title", { children: [
            labs[i],
            ": ",
            v,
            "%"
          ] }) })
        ] }, i);
      }) }) }),
      /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: 10 }, children: labs.map((l, i) => /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center", gap: 8, font: "var(--text-body-sm)", color: "var(--neutral-text-icon-default)" }, children: [
        /* @__PURE__ */ jsx("span", { style: { width: 11, height: 11, borderRadius: 9999, background: SERIES[i % SERIES.length], flex: "none" } }),
        /* @__PURE__ */ jsx("span", { style: { flex: 1 }, children: l }),
        showValues && /* @__PURE__ */ jsx("span", { style: { color: "var(--neutral-text-icon-emphasis)", fontWeight: 600 }, children: [
          vals[i],
          "%"
        ] })
      ] }, i)) })
    ] });
  });
  RadialChart.displayName = "RadialChart";
  var FONT7 = "var(--font-family-body)";
  var RadioButton = /* @__PURE__ */ react_default.forwardRef(function RadioButton2({
    checked,
    defaultChecked = false,
    onChange,
    label = "Label",
    description,
    labelPosition = "right",
    disabled = false,
    id,
    name,
    value,
    inputRef,
    style,
    className,
    ...rest
  }, forwardedRef) {
    const isControlled = checked !== void 0 && checked !== null;
    const [inner, setInner] = useState(!!defaultChecked);
    const on = isControlled ? !!checked : inner;
    const [hovered, setHovered] = useState(false);
    const [focused, setFocused] = useState(false);
    const [active, setActive] = useState(false);
    const select = (e) => {
      if (disabled) return;
      if (!isControlled) setInner(true);
      if (onChange) onChange(value != null ? value : true, e);
    };
    const ringColor = on ? "var(--info-bg-emphasis)" : hovered || active ? "var(--brand-border-strong)" : "var(--neutral-border-strong)";
    const ringW = on ? 5 : 2;
    const bg = !on && (hovered || active) ? "var(--brand-bg-weak)" : "var(--neutral-bg-default)";
    const shadows = ["inset 0 0 0 " + ringW + "px " + ringColor];
    if (active) shadows.push("var(--shadow-pressed-deep)");
    if (focused) shadows.push("var(--focus-ring)");
    return /* @__PURE__ */ jsx(
      "label",
      {
        ref: forwardedRef,
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => {
          setHovered(false);
          setActive(false);
        },
        onMouseDown: () => setActive(true),
        onMouseUp: () => setActive(false),
        className,
        style: { display: "inline-flex", flexDirection: labelPosition === "left" ? "row-reverse" : "row", alignItems: description ? "flex-start" : "center", gap: 10, cursor: disabled ? "not-allowed" : "pointer", fontFamily: FONT7, opacity: disabled ? 0.55 : 1, userSelect: "none", ...style },
        children: [
          /* @__PURE__ */ jsx("span", { style: { position: "relative", width: 20, height: 20, flexShrink: 0 }, children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                ...rest,
                type: "radio",
                id,
                name,
                value,
                checked: on,
                disabled,
                ref: inputRef,
                onChange: select,
                onFocus: () => setFocused(true),
                onBlur: () => setFocused(false),
                style: { position: "absolute", inset: 0, margin: 0, opacity: 0, cursor: disabled ? "not-allowed" : "pointer" }
              }
            ),
            /* @__PURE__ */ jsx("span", { "aria-hidden": "true", style: { position: "absolute", left: 0, top: 0, width: 20, height: 20, borderRadius: "50%", background: bg, boxShadow: shadows.join(", "), transform: active ? "scale(0.9)" : "scale(1)", transition: "box-shadow .12s ease, background .12s ease, transform .1s ease" } })
          ] }),
          label != null && label !== "" && /* @__PURE__ */ jsx("span", { style: { minWidth: 0 }, children: [
            /* @__PURE__ */ jsx("span", { style: { display: "block", fontSize: 14, lineHeight: 1.4, color: disabled ? "var(--neutral-text-icon-muted)" : "var(--neutral-text-icon-strong)" }, children: label }),
            description && /* @__PURE__ */ jsx("span", { style: { display: "block", font: "var(--text-body-sm)", color: "var(--neutral-text-icon-muted)", marginTop: 2, lineHeight: 1.4 }, children: description })
          ] })
        ]
      }
    );
  });
  RadioButton.displayName = "RadioButton";
  var FONT8 = "var(--font-family-body)";
  var RadioGroup = /* @__PURE__ */ react_default.forwardRef(function RadioGroup2({
    value,
    defaultValue,
    onChange,
    options = [],
    name,
    orientation = "vertical",
    disabled = false,
    style,
    className,
    ...rest
  }, forwardedRef) {
    const isControlled = value !== void 0 && value !== null;
    const [inner, setInner] = useState(defaultValue != null ? defaultValue : null);
    const selected = isControlled ? value : inner;
    const groupName = name || react_default.useMemo(() => "rg-" + Math.random().toString(36).slice(2, 8), []);
    const opts = options.map((o) => typeof o === "string" ? { value: o, label: o } : o);
    const pick = (v, e) => {
      if (!isControlled) setInner(v);
      if (onChange) onChange(v, e);
    };
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref: forwardedRef,
        role: "radiogroup",
        className,
        style: { display: "flex", flexDirection: orientation === "horizontal" ? "row" : "column", gap: orientation === "horizontal" ? 20 : 12, fontFamily: FONT8, ...style },
        ...rest,
        children: opts.map((o) => /* @__PURE__ */ jsx(
          RadioButton,
          {
            name: groupName,
            value: o.value,
            label: o.label,
            checked: selected === o.value,
            disabled: disabled || o.disabled,
            onChange: (v, e) => pick(o.value, e)
          },
          o.value
        ))
      }
    );
  });
  RadioGroup.displayName = "RadioGroup";
  var Resizable = /* @__PURE__ */ react_default.forwardRef(function Resizable2({ orientation = "horizontal", style, ...rest }, forwardedRef) {
    const vertical = orientation === "vertical";
    const [pct, setPct] = useState(38);
    const ref = useRef(null);
    const drag = (e) => {
      e.preventDefault();
      const move = (ev) => {
        const r = ref.current.getBoundingClientRect();
        const p = vertical ? (ev.clientY - r.top) / r.height * 100 : (ev.clientX - r.left) / r.width * 100;
        setPct(Math.max(15, Math.min(85, p)));
      };
      const up = () => {
        window.removeEventListener("mousemove", move);
        window.removeEventListener("mouseup", up);
      };
      window.addEventListener("mousemove", move);
      window.addEventListener("mouseup", up);
    };
    const pane = (txt) => /* @__PURE__ */ jsx("div", { style: { background: "var(--neutral-bg-subtle)", display: "flex", alignItems: "center", justifyContent: "center", font: "var(--text-body-sm)", color: "var(--neutral-text-icon-muted)" }, children: txt });
    return /* @__PURE__ */ jsx("div", { ref: mergeRefs(ref, forwardedRef), style: {
      display: "flex",
      flexDirection: vertical ? "column" : "row",
      height: vertical ? 200 : 170,
      width: "100%",
      maxWidth: 360,
      border: "1px solid var(--neutral-border-subtle)",
      borderRadius: "calc(var(--card-corner) * 1px)",
      overflow: "hidden",
      boxSizing: "border-box",
      ...style
    }, ...rest, children: [
      /* @__PURE__ */ jsx("div", { style: { [vertical ? "height" : "width"]: pct + "%" }, children: pane("One") }),
      /* @__PURE__ */ jsx("div", { onMouseDown: drag, style: {
        [vertical ? "height" : "width"]: 8,
        flex: "none",
        background: "var(--neutral-bg-default)",
        borderLeft: vertical ? "none" : "1px solid var(--neutral-border-subtle)",
        borderTop: vertical ? "1px solid var(--neutral-border-subtle)" : "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: vertical ? "row-resize" : "col-resize"
      }, children: /* @__PURE__ */ jsx("div", { style: { [vertical ? "width" : "height"]: 28, [vertical ? "height" : "width"]: 4, borderRadius: 9999, background: "var(--neutral-border-default)" } }) }),
      /* @__PURE__ */ jsx("div", { style: { flex: 1 }, children: pane("Two") })
    ] });
  });
  Resizable.displayName = "Resizable";
  var ScrollArea = /* @__PURE__ */ react_default.forwardRef(function ScrollArea2({ count = 8, children, height = 170, style, ...rest }, forwardedRef) {
    const items = children || Array.from({ length: count }, (_, i) => "List item " + (i + 1));
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, style: {
      position: "relative",
      height,
      width: "100%",
      maxWidth: 280,
      border: "1px solid var(--neutral-border-subtle)",
      borderRadius: "calc(var(--card-corner) * 1px)",
      background: "var(--neutral-bg-default)",
      overflow: "hidden",
      boxSizing: "border-box",
      ...style
    }, ...rest, children: [
      /* @__PURE__ */ jsx("div", { className: "ivds-scroll", style: { height: "100%", overflowY: "auto", padding: "12px 14px", display: "flex", flexDirection: "column", gap: 10 }, children: Array.isArray(items) ? items.map((t, i) => /* @__PURE__ */ jsx("div", { style: { font: "var(--text-body-sm)", color: "var(--neutral-text-icon-default)", paddingBottom: 10, borderBottom: "1px solid var(--neutral-bg-subtle)" }, children: t }, i)) : items }),
      /* @__PURE__ */ jsx("style", { children: ".ivds-scroll::-webkit-scrollbar{width:8px}.ivds-scroll::-webkit-scrollbar-thumb{background:var(--neutral-border-default);border-radius:9999px;border:2px solid var(--neutral-bg-default)}" })
    ] });
  });
  ScrollArea.displayName = "ScrollArea";
  var SelectAreaDropdown = /* @__PURE__ */ react_default.forwardRef(function SelectAreaDropdown2({ selected = 1, style, ...rest }, forwardedRef) {
    const rows = [["USA", "public"], ["State", "map"], ["County", "account_balance"], ["City", "location_city"], ["ZIP Code", "local_post_office"]];
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, style: {
      width: 240,
      background: "var(--neutral-bg-default)",
      border: "1px solid var(--neutral-border-subtle)",
      borderRadius: "calc(var(--card-corner) * 1px)",
      boxShadow: "var(--shadow-lg)",
      padding: 5,
      boxSizing: "border-box",
      ...style
    }, ...rest, children: rows.map(([label, icon], i) => /* @__PURE__ */ jsx(DropdownItem, { label, icon, state: i === selected ? "selected" : "default" }, i)) });
  });
  SelectAreaDropdown.displayName = "SelectAreaDropdown";
  var VARIANTS3 = ["default", "icon"];
  var FIELD_STATES6 = ["default", "hovered", "filled", "typing", "focused", "success", "error", "disabled"];
  var SelectField = /* @__PURE__ */ react_default.forwardRef(function SelectField2({
    label = "Label",
    value,
    defaultValue,
    onChange,
    options = [],
    variant = "default",
    placeholder = "Select an option",
    helper,
    error,
    success,
    disabled = false,
    icon,
    state,
    menuWidth,
    id,
    name,
    style,
    className,
    ...rest
  }, forwardedRef) {
    const autoId = useId();
    const fieldId = id || autoId;
    const descId = `${fieldId}-desc`;
    const isControlled = value !== void 0 && value !== null;
    const [inner, setInner] = useState(defaultValue != null ? defaultValue : "");
    const selected = isControlled ? value : inner;
    const [open, setOpen] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [activeIdx, setActiveIdx] = useState(0);
    const ref = useRef(null);
    useDismiss(ref, () => setOpen(false), open);
    const v = VARIANTS3.includes(variant) ? variant : "default";
    const iconOnly = v === "icon";
    const hasError = !!error;
    const errText = typeof error === "string" ? error : null;
    const hasSuccess = !!success && !hasError;
    const okText = typeof success === "string" ? success : null;
    const opts = options.map((o) => typeof o === "string" ? { value: o, label: o } : o);
    const sel = opts.find((o) => o.value === selected);
    const selLabel = sel && sel.label;
    const filled = selLabel != null;
    const eff = resolveFieldState({ state: FIELD_STATES6.includes(state) ? state : void 0, disabled, hasError, hasSuccess, focused: open, hovered, filled });
    const s = fieldState(eff);
    const stIcon = statusIcon(eff);
    const pick = (o) => {
      if (!isControlled) setInner(o.value);
      if (onChange) onChange(o.value);
      setOpen(false);
    };
    const glyph = sel && sel.icon || icon || "tune";
    return /* @__PURE__ */ jsx("div", { ref: mergeRefs(ref, forwardedRef), className, style: { boxSizing: "border-box", position: "relative", display: "inline-flex", flexDirection: "column", gap: 4, width: iconOnly ? "auto" : "100%", minWidth: iconOnly ? 0 : 240, maxWidth: iconOnly ? "none" : 320, fontFamily: fieldFont, ...style }, children: [
      !iconOnly && label != null && label !== "" && /* @__PURE__ */ jsx("label", { htmlFor: fieldId, style: { fontWeight: 600, fontSize: 14, lineHeight: 1.4, color: disabled ? "var(--neutral-text-icon-subtle)" : "var(--neutral-text-icon-emphasis)" }, children: label }),
      /* @__PURE__ */ jsx(
        "button",
        {
          ...rest,
          type: "button",
          id: fieldId,
          name,
          disabled,
          title: iconOnly ? selLabel || label : void 0,
          "aria-label": iconOnly ? label || placeholder : void 0,
          "aria-haspopup": "listbox",
          "aria-expanded": open,
          "aria-invalid": hasError ? "true" : void 0,
          "aria-describedby": errText || okText || helper ? descId : void 0,
          onMouseEnter: () => setHovered(true),
          onMouseLeave: () => setHovered(false),
          onClick: () => !disabled && setOpen((o) => !o),
          onKeyDown: (e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setOpen(true);
              setActiveIdx((i) => Math.min(i + 1, opts.length - 1));
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setActiveIdx((i) => Math.max(i - 1, 0));
            } else if (e.key === "Enter" && open) {
              e.preventDefault();
              if (opts[activeIdx]) pick(opts[activeIdx]);
            } else if (e.key === "Escape") setOpen(false);
          },
          style: {
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: iconOnly ? "center" : "space-between",
            gap: 6,
            width: iconOnly ? "calc(var(--control-md-height) * 1px)" : "100%",
            height: "calc(var(--control-md-height) * 1px)",
            padding: iconOnly ? 0 : "8px 12px 8px 16px",
            borderRadius: "calc(var(--control-md-radius) * 1px)",
            background: s.bg,
            border: s.border,
            boxShadow: s.shadow,
            font: "inherit",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: 1.5,
            color: filled ? "var(--neutral-text-icon-emphasis)" : "var(--neutral-text-icon-subtle)",
            cursor: disabled ? "not-allowed" : "pointer",
            textAlign: "left",
            transition: "background var(--motion-base) var(--motion-ease), border-color var(--motion-base) var(--motion-ease), box-shadow var(--motion-base) var(--motion-ease)"
          },
          children: iconOnly ? /* @__PURE__ */ jsx(Icon, { name: glyph, size: "regular", color: disabled ? "var(--neutral-text-icon-weak)" : "var(--neutral-text-icon-emphasis)" }) : /* @__PURE__ */ jsx(Fragment2, { children: [
            icon && /* @__PURE__ */ jsx(Icon, { name: icon, size: "regular", color: "var(--neutral-text-icon-default)" }),
            /* @__PURE__ */ jsx("span", { style: { flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: selLabel || placeholder }),
            stIcon && /* @__PURE__ */ jsx(Icon, { name: stIcon.name, size: "regular", color: stIcon.color }),
            /* @__PURE__ */ jsx(Icon, { name: open ? "expand_less" : "expand_more", size: "regular", color: disabled ? "var(--neutral-text-icon-weak)" : "var(--neutral-text-icon-default)" })
          ] })
        }
      ),
      open && opts.length > 0 && /* @__PURE__ */ jsx(
        DropdownList,
        {
          style: { position: "absolute", top: "calc(100% + 6px)", left: 0, right: iconOnly ? "auto" : 0, zIndex: 40 },
          width: menuWidth || (iconOnly ? 200 : "auto"),
          items: opts,
          value: selected,
          onSelect: (val, o) => pick(o)
        }
      ),
      !iconOnly && (helper != null || errText != null || okText != null) && /* @__PURE__ */ jsx("span", { id: descId, role: hasError ? "alert" : void 0, style: { fontWeight: 400, fontSize: 12, lineHeight: 1.4, color: helperColor(eff) }, children: errText || okText || helper })
    ] });
  });
  SelectField.displayName = "SelectField";
  var SHAPE_ICON = { radius: "my_location", polygon: "polyline", boundary: "map" };
  var STATES3 = ["default", "hovered", "focused", "active", "selected"];
  var ServiceAreaRow = /* @__PURE__ */ react_default.forwardRef(function ServiceAreaRow2({
    name = "Example area",
    meta = "Radius \xB7 0 mi \xB7 0 locations",
    shape = "radius",
    mode,
    state,
    selectable = false,
    checked,
    defaultChecked = false,
    onCheckedChange,
    onSelect,
    onEdit,
    onDelete,
    onMore,
    style,
    ...rest
  }, forwardedRef) {
    const isControlled = checked !== void 0 && checked !== null;
    const [inner, setInner] = useState(!!defaultChecked);
    const [hoverS, setHover] = useState(false);
    const [activeS, setActive] = useState(false);
    const [focusS, setFocus] = useState(false);
    const f = rowFlags(STATES3.includes(state) ? state : null, {
      hover: hoverS,
      active: activeS,
      focus: focusS,
      selected: isControlled ? !!checked : inner
    });
    const surface2 = rowSurface(f);
    const tone = mode ? shapeTone(mode) : null;
    const toggle = (next) => {
      if (!isControlled) setInner(next);
      if (onCheckedChange) onCheckedChange(next);
    };
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref: forwardedRef,
        role: "option",
        "aria-selected": f.selected,
        tabIndex: 0,
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => {
          setHover(false);
          setActive(false);
        },
        onMouseDown: () => setActive(true),
        onMouseUp: () => setActive(false),
        onFocus: () => setFocus(true),
        onBlur: () => setFocus(false),
        onClick: () => onSelect && onSelect(name),
        onKeyDown: (e) => {
          if (selectable && e.key === " ") {
            e.preventDefault();
            toggle(!f.selected);
          } else if (e.key === "Enter") {
            e.preventDefault();
            onSelect && onSelect(name);
          }
        },
        style: {
          position: "relative",
          display: "flex",
          alignItems: "center",
          gap: 14,
          padding: "12px 16px",
          width: "100%",
          boxSizing: "border-box",
          background: surface2.bg,
          border: "1px solid var(--neutral-border-subtle)",
          borderRadius: "calc(var(--card-corner) * 1px)",
          boxShadow: f.focus ? "var(--focus-ring)" : "none",
          outline: "none",
          cursor: "pointer",
          transition: "background var(--motion-fast) var(--motion-ease), box-shadow var(--motion-fast) var(--motion-ease)",
          fontFamily: "var(--font-family-body)",
          ...style
        },
        ...rest,
        children: [
          surface2.marker && /* @__PURE__ */ jsx("span", { "aria-hidden": "true", style: { position: "absolute", left: 0, top: 8, bottom: 8, width: 3, borderRadius: 9999, background: surface2.marker } }),
          selectable && /* @__PURE__ */ jsx("span", { onClick: (e) => e.stopPropagation(), style: { display: "inline-flex" }, children: /* @__PURE__ */ jsx(Checkbox, { label: "", checked: f.selected, onChange: toggle, "aria-label": `Select ${name}` }) }),
          /* @__PURE__ */ jsx("span", { style: { width: 40, height: 40, borderRadius: 10, background: "var(--brand-bg-subtle)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }, children: /* @__PURE__ */ jsx("span", { className: "material-symbols-rounded", style: { fontSize: 22, color: "var(--brand-text-icon-default)" }, children: SHAPE_ICON[shape] || SHAPE_ICON.radius }) }),
          /* @__PURE__ */ jsx("div", { style: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
              /* @__PURE__ */ jsx("span", { style: { font: "var(--text-subtitle)", color: "var(--neutral-text-icon-emphasis)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: name }),
              tone && /* @__PURE__ */ jsx(BadgeChip, { label: tone.text, color: mode === "exclude" ? "error" : "info", dot: true, tooltip: `This area is ${tone.text.toLowerCase()} in the audience` })
            ] }),
            /* @__PURE__ */ jsx("div", { style: { font: "var(--text-caption)", color: "var(--neutral-text-icon-muted)", marginTop: 2 }, children: meta })
          ] }),
          /* @__PURE__ */ jsx("span", { onClick: (e) => e.stopPropagation(), style: { display: "inline-flex", gap: 2, flex: "none" }, children: [
            onEdit && /* @__PURE__ */ jsx(IconButton, { icon: "edit", kind: "tertiary", size: "small", label: `Edit ${name}`, onClick: onEdit }),
            onDelete && /* @__PURE__ */ jsx(IconButton, { icon: "delete", kind: "tertiary", size: "small", label: `Delete ${name}`, color: "var(--error-text-icon-default)", onClick: onDelete }),
            /* @__PURE__ */ jsx(IconButton, { icon: "more_horiz", kind: "tertiary", size: "small", label: `More actions for ${name}`, onClick: onMore })
          ] })
        ]
      }
    );
  });
  ServiceAreaRow.displayName = "ServiceAreaRow";
  var SettingsTab = /* @__PURE__ */ react_default.forwardRef(function SettingsTab2({ state = "active", icon = "person", label = "Customers", onClick, style, ...rest }, forwardedRef) {
    const [hoverS, setHover] = useState(false);
    const hover = hoverS || state === "hovered";
    const active = state === "active";
    const bg = active ? "var(--brand-bg-weak)" : hover ? "var(--neutral-bg-subtle)" : "var(--neutral-bg-default)";
    const fg = active ? "var(--brand-text-icon-default)" : "var(--neutral-text-icon-default)";
    return /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        ref: forwardedRef,
        onClick,
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
        style: {
          display: "flex",
          alignItems: "center",
          gap: 12,
          width: "100%",
          height: 48,
          padding: "0 14px",
          border: 0,
          borderRadius: "calc(var(--control-md-radius) * 1px)",
          background: bg,
          color: fg,
          font: "var(--text-subtitle)",
          cursor: "pointer",
          textAlign: "left",
          boxSizing: "border-box",
          ...style
        },
        ...rest,
        children: [
          /* @__PURE__ */ jsx("span", { className: "material-symbols-rounded", style: { fontSize: 20 }, children: icon }),
          /* @__PURE__ */ jsx("span", { style: { flex: 1 }, children: label })
        ]
      }
    );
  });
  SettingsTab.displayName = "SettingsTab";
  var FONT9 = "var(--font-family-body)";
  var SIDES2 = {
    right: { edge: { top: 0, bottom: 0, right: 0 }, hidden: "translateX(100%)" },
    left: { edge: { top: 0, bottom: 0, left: 0 }, hidden: "translateX(-100%)" },
    top: { edge: { left: 0, right: 0, top: 0 }, hidden: "translateY(-100%)" },
    bottom: { edge: { left: 0, right: 0, bottom: 0 }, hidden: "translateY(100%)" }
  };
  var Sheet = /* @__PURE__ */ react_default.forwardRef(function Sheet2({
    open,
    defaultOpen = false,
    onOpenChange,
    side = "right",
    inline = false,
    title = "Panel",
    footer,
    children,
    trigger,
    width = 380,
    height = 320,
    style,
    ...rest
  }, forwardedRef) {
    const isControlled = open !== void 0 && open !== null;
    const [inner, setInner] = useState(defaultOpen);
    const isOpen = inline || (isControlled ? open : inner);
    const setOpen = (v) => {
      if (!isControlled) setInner(v);
      if (onOpenChange) onOpenChange(v);
    };
    const cfg = SIDES2[side] || SIDES2.right;
    const horizontal = side === "left" || side === "right";
    useEffect(() => {
      if (!isOpen || inline) return void 0;
      const onKey = (e) => {
        if (e.key === "Escape") setOpen(false);
      };
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }, [isOpen, inline]);
    const panel = /* @__PURE__ */ jsx("div", { style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      boxSizing: "border-box",
      background: "var(--neutral-bg-default)",
      padding: 24,
      fontFamily: FONT9,
      ...inline ? {
        width: horizontal ? width : "100%",
        height: horizontal ? void 0 : height,
        maxWidth: "100%",
        border: "1px solid var(--neutral-border-subtle)",
        borderRadius: "calc(var(--card-corner) * 1px)",
        boxShadow: "var(--shadow-raised)",
        ...style
      } : {
        position: "absolute",
        ...cfg.edge,
        width: horizontal ? width : void 0,
        height: horizontal ? void 0 : height,
        maxWidth: "92vw",
        maxHeight: "92vh",
        boxShadow: "var(--shadow-dialog)",
        transform: isOpen ? "none" : cfg.hidden,
        transition: "transform var(--motion-slow, .25s) cubic-bezier(0.4,0,0.2,1)"
      }
    }, children: [
      /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }, children: [
        /* @__PURE__ */ jsx("div", { style: { font: "var(--text-title)", color: "var(--neutral-text-icon-emphasis)" }, children: title }),
        !inline && /* @__PURE__ */ jsx(IconButton, { icon: "close", kind: "tertiary", size: "small", label: "Close", onClick: () => setOpen(false) })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { font: "var(--text-body-sm)", color: "var(--neutral-text-icon-muted)", overflowY: "auto", flex: 1, minHeight: 0 }, children }),
      footer && /* @__PURE__ */ jsx("div", { style: { display: "flex", justifyContent: "flex-end", gap: 8 }, children: footer })
    ] });
    if (inline) return /* @__PURE__ */ jsx("div", { ref: forwardedRef, role: "complementary", "aria-label": title, ...rest, children: panel });
    return /* @__PURE__ */ jsx("span", { ref: forwardedRef, style: { display: "contents" }, ...rest, children: [
      trigger && /* @__PURE__ */ jsx("span", { onClick: () => setOpen(true), children: trigger }),
      isOpen && /* @__PURE__ */ jsx(
        "div",
        {
          role: "dialog",
          "aria-modal": "true",
          "aria-label": title,
          style: { position: "fixed", inset: 0, zIndex: 90, fontFamily: FONT9, ...style },
          children: [
            /* @__PURE__ */ jsx("div", { onMouseDown: () => setOpen(false), style: { position: "absolute", inset: 0, background: "var(--scrim-default)" } }),
            panel
          ]
        }
      )
    ] });
  });
  Sheet.displayName = "Sheet";
  var SidebarItem = /* @__PURE__ */ react_default.forwardRef(function SidebarItem2({ icon = "home", label = "Home", variant = "workspace", state = "default", active = false, onClick, style, ...rest }, forwardedRef) {
    const [hover, setHover] = useState(false);
    const [focus, setFocus] = useState(false);
    const [press, setPress] = useState(false);
    const org = variant === "org";
    const on = active || state === "active";
    const isHover = hover || state === "hovered";
    const isFocus = focus || state === "focused";
    const isPress = press || state === "pressed";
    const fill = on ? org ? "var(--hairline-on-dark)" : "var(--brand-bg-subtle)" : isPress ? org ? "var(--hairline-on-dark)" : "var(--brand-bg-weak)" : isHover ? org ? "var(--hairline-on-dark)" : "var(--neutral-bg-subtle)" : "transparent";
    const fg = on ? org ? "rgb(var(--on-dark))" : "var(--brand-text-icon-default)" : org ? "var(--surface-glass)" : "var(--neutral-text-icon-muted)";
    return /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        ref: forwardedRef,
        onClick,
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => {
          setHover(false);
          setPress(false);
        },
        onMouseDown: () => setPress(true),
        onMouseUp: () => setPress(false),
        onFocus: () => setFocus(true),
        onBlur: () => setFocus(false),
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          width: "100%",
          padding: "10px 4px",
          border: "none",
          borderRadius: 12,
          background: fill,
          color: fg,
          cursor: "pointer",
          font: "var(--text-caption)",
          boxShadow: isFocus ? "var(--focus-ring)" : isPress ? "var(--shadow-pressed)" : "none",
          transform: isPress ? "scale(0.97)" : "none",
          transition: "background .12s ease, box-shadow .12s ease, transform .1s ease",
          ...style
        },
        ...rest,
        children: [
          /* @__PURE__ */ jsx(Icon, { name: icon, size: "regular", color: fg }),
          label
        ]
      }
    );
  });
  SidebarItem.displayName = "SidebarItem";
  var ITEMS = [["home", "Home"], ["folder", "Items"], ["insights", "Analytics"], ["group", "People"], ["settings", "Settings"]];
  var Sidebar = /* @__PURE__ */ react_default.forwardRef(function Sidebar2({ variant = "workspace", active = 0, onSelect, style, ...rest }, forwardedRef) {
    const [sel, setSel] = useState(active);
    const cur = onSelect ? active : sel;
    const org = variant === "org";
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      gap: 6,
      width: 90,
      boxSizing: "border-box",
      padding: "14px 8px",
      background: org ? "var(--brand-bg-strong)" : "var(--neutral-bg-default)",
      borderRight: org ? "none" : "1px solid var(--neutral-border-subtle)",
      height: "100%",
      ...style
    }, ...rest, children: ITEMS.map(([icon, label], i) => /* @__PURE__ */ jsx(
      SidebarItem,
      {
        icon,
        label,
        variant,
        active: i === cur,
        onClick: () => {
          setSel(i);
          onSelect && onSelect(i);
        }
      },
      label
    )) });
  });
  Sidebar.displayName = "Sidebar";
  var shimmer = { background: "linear-gradient(90deg,var(--neutral-bg-subtle) 25%,var(--neutral-bg-muted) 37%,var(--neutral-bg-subtle) 63%)", backgroundSize: "200% 100%", animation: "ivds-shimmer 1.4s ease infinite" };
  var Skeleton = /* @__PURE__ */ react_default.forwardRef(function Skeleton2({ variant = "text", lines = 3, width, height, radius = 6, style, className, ...rest }, forwardedRef) {
    if (variant === "block") {
      return /* @__PURE__ */ jsx("div", { ref: forwardedRef, className, style: { width: width || "100%", height: height || 80, borderRadius: radius, ...shimmer, ...style }, ...rest, children: /* @__PURE__ */ jsx("style", { children: "@keyframes ivds-shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}" }) });
    }
    const widths = ["100%", "92%", "78%", "85%", "60%", "70%"];
    const n = Math.max(1, Math.min(6, lines));
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, className, style: { display: "flex", flexDirection: "column", gap: 12, width: "100%", maxWidth: 340, ...style }, ...rest, children: [
      /* @__PURE__ */ jsx("style", { children: "@keyframes ivds-shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}" }),
      variant === "card" && /* @__PURE__ */ jsx("div", { style: { display: "flex", gap: 12, alignItems: "center" }, children: [
        /* @__PURE__ */ jsx("div", { style: { width: 44, height: 44, borderRadius: 9999, ...shimmer } }),
        /* @__PURE__ */ jsx("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: 8 }, children: [
          /* @__PURE__ */ jsx("div", { style: { height: 12, width: "60%", borderRadius: 6, ...shimmer } }),
          /* @__PURE__ */ jsx("div", { style: { height: 12, width: "40%", borderRadius: 6, ...shimmer } })
        ] })
      ] }),
      variant !== "card" && Array.from({ length: n }).map((_, i) => /* @__PURE__ */ jsx("div", { style: { height: 12, borderRadius: 6, width: widths[i % widths.length], ...shimmer } }, i))
    ] });
  });
  Skeleton.displayName = "Skeleton";
  var VARIANTS4 = ["single", "range"];
  var Slider = /* @__PURE__ */ react_default.forwardRef(function Slider2({
    label = "Volume",
    variant = "single",
    value,
    defaultValue,
    min = 0,
    max = 100,
    step = 1,
    unit = "",
    legend,
    editable = false,
    state,
    onChange,
    style,
    ...rest
  }, forwardedRef) {
    const v = VARIANTS4.includes(variant) ? variant : "single";
    const isRange = v === "range";
    const fallback = isRange ? [min + (max - min) * 0.25, min + (max - min) * 0.75] : min + (max - min) * 0.4;
    const isControlled = value !== void 0 && value !== null;
    const [inner, setInner] = useState(defaultValue != null ? defaultValue : fallback);
    const raw = isControlled ? value : inner;
    const cur = isRange ? (Array.isArray(raw) ? raw : [min, raw]).map(Number) : Number(Array.isArray(raw) ? raw[0] : raw);
    const disabled = state === "disabled";
    const accent = disabled ? "var(--neutral-border-default)" : "var(--brand-bg-default)";
    const pctOf = (n) => (n - min) / (max - min) * 100;
    const commit = (next) => {
      if (!isControlled) setInner(next);
      if (onChange) onChange(next);
    };
    const setLow = (n) => commit([Math.min(Number(n), cur[1]), cur[1]]);
    const setHigh = (n) => commit([cur[0], Math.max(Number(n), cur[0])]);
    const fillLeft = isRange ? pctOf(cur[0]) : 0;
    const fillRight = isRange ? pctOf(cur[1]) : pctOf(cur);
    const thumb = (pct, key) => /* @__PURE__ */ jsx("div", { style: {
      position: "absolute",
      left: `calc(${pct}% - 9px)`,
      width: 18,
      height: 18,
      borderRadius: 9999,
      background: "var(--neutral-bg-default)",
      border: `2px solid ${accent}`,
      boxShadow: "var(--shadow-sm)",
      pointerEvents: "none"
    } }, key);
    const nativeRange = (val, onVal, name, key) => /* @__PURE__ */ jsx(
      "input",
      {
        type: "range",
        min,
        max,
        step,
        value: val,
        disabled,
        "aria-label": name,
        onChange: (e) => onVal(Number(e.target.value)),
        style: {
          position: "absolute",
          left: 0,
          right: 0,
          width: "100%",
          height: 20,
          margin: 0,
          opacity: 0,
          pointerEvents: "auto",
          cursor: disabled ? "not-allowed" : "pointer"
        }
      },
      key
    );
    const ticks = legend === true ? [min, max] : Array.isArray(legend) ? legend : null;
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, style: { width: "100%", opacity: disabled ? 0.6 : 1, ...style }, ...rest, children: [
      /* @__PURE__ */ jsx("div", { style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        marginBottom: 10,
        font: "var(--text-subtitle)",
        color: "var(--neutral-text-icon-emphasis)"
      }, children: [
        /* @__PURE__ */ jsx("span", { children: label }),
        editable ? /* @__PURE__ */ jsx("span", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
          /* @__PURE__ */ jsx(
            NumberField,
            {
              label: "",
              min,
              max,
              step,
              disabled,
              value: isRange ? cur[0] : cur,
              onChange: (e) => isRange ? setLow(e.target.value) : commit(Number(e.target.value)),
              style: { minWidth: 96, maxWidth: 112 }
            }
          ),
          isRange && /* @__PURE__ */ jsx("span", { style: { color: "var(--neutral-text-icon-muted)" }, children: "\u2013" }),
          isRange && /* @__PURE__ */ jsx(
            NumberField,
            {
              label: "",
              min,
              max,
              step,
              disabled,
              value: cur[1],
              onChange: (e) => setHigh(e.target.value),
              style: { minWidth: 96, maxWidth: 112 }
            }
          )
        ] }) : /* @__PURE__ */ jsx("span", { style: { color: "var(--neutral-text-icon-muted)" }, children: isRange ? `${cur[0]}\u2013${cur[1]}${unit}` : `${cur}${unit}` })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { position: "relative", height: 20, display: "flex", alignItems: "center", pointerEvents: "none" }, children: [
        /* @__PURE__ */ jsx("div", { style: { position: "absolute", left: 0, right: 0, height: 6, borderRadius: 9999, background: "var(--neutral-bg-emphasis)" } }),
        /* @__PURE__ */ jsx("div", { style: { position: "absolute", left: fillLeft + "%", width: fillRight - fillLeft + "%", height: 6, borderRadius: 9999, background: accent } }),
        isRange ? [thumb(fillLeft, "lo"), thumb(fillRight, "hi")] : thumb(fillRight, "v"),
        isRange ? [nativeRange(cur[0], setLow, `${label} minimum`, "lo"), nativeRange(cur[1], setHigh, `${label} maximum`, "hi")] : nativeRange(cur, (n) => commit(n), label, "v")
      ] }),
      ticks && /* @__PURE__ */ jsx("div", { style: { display: "flex", justifyContent: "space-between", marginTop: 8, font: "var(--text-caption)", color: "var(--neutral-text-icon-muted)" }, children: ticks.map((t, i) => /* @__PURE__ */ jsx("span", { children: [
        t,
        unit
      ] }, i)) })
    ] });
  });
  Slider.displayName = "Slider";
  var COLOR = { brand: "var(--brand-bg-default)", success: "var(--success-bg-default)", error: "var(--error-bg-default)", info: "var(--info-bg-default)" };
  var Sparkline = /* @__PURE__ */ react_default.forwardRef(function Sparkline2({ data = "4,6,5,8,7,10,9,12", color = "brand", value = "", W = 120, H = 34, showValues = false, tooltip = true, style, ...rest }, forwardedRef) {
    const ariaLabel = rest["aria-label"] || `${data ? String(data).split(",").length : 0}-point chart`;
    const vals = String(data).split(",").map(Number);
    const max = Math.max(...vals), min = Math.min(...vals);
    const x = (i) => i / (vals.length - 1) * (W - 4) + 2;
    const y = (v) => H - 2 - (v - min) / (max - min || 1) * (H - 6);
    const pts = vals.map((v, i) => `${x(i)},${y(v)}`).join(" ");
    const stroke = COLOR[color] || COLOR.brand;
    const lastX = x(vals.length - 1), lastY = y(vals[vals.length - 1]);
    return /* @__PURE__ */ jsx("span", { ref: forwardedRef, style: { display: "inline-flex", alignItems: "center", gap: 8, ...style }, ...rest, children: [
      /* @__PURE__ */ jsx("svg", { role: "img", "aria-label": ariaLabel, viewBox: `0 0 ${W} ${H}`, style: { width: W, height: H, display: "block" }, children: [
        /* @__PURE__ */ jsx("polyline", { points: pts, fill: "none", stroke, strokeWidth: "2", strokeLinejoin: "round", strokeLinecap: "round", children: tooltip && /* @__PURE__ */ jsx("title", { children: vals.join(", ") }) }),
        /* @__PURE__ */ jsx("circle", { cx: lastX, cy: lastY, r: "3", fill: stroke }),
        showValues && vals.map((v, i) => /* @__PURE__ */ jsx("text", { x: x(i), y: y(v) - 5, textAnchor: "middle", style: { font: "8px var(--font-family-body)", fill: "var(--neutral-text-icon-muted)" }, children: v }, i))
      ] }),
      value !== "" && value != null && /* @__PURE__ */ jsx("span", { style: { font: "var(--text-subtitle)", color: "var(--neutral-text-icon-emphasis)" }, children: value })
    ] });
  });
  Sparkline.displayName = "Sparkline";
  var StatTile = /* @__PURE__ */ react_default.forwardRef(function StatTile2({ label = "Revenue", value = "$48.2k", delta = 12.4, data = "5,7,6,9,8,11,10,13", style, ...rest }, forwardedRef) {
    const d = Number(delta);
    const up = d >= 0;
    const col = up ? "var(--success-text-icon-default)" : "var(--error-text-icon-default)";
    const bg = up ? "var(--success-bg-soft)" : "var(--error-bg-soft)";
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, style: {
      width: 260,
      boxSizing: "border-box",
      padding: "18px 20px",
      background: "var(--neutral-bg-default)",
      border: "1px solid var(--neutral-border-subtle)",
      borderRadius: "calc(var(--card-corner) * 1px)",
      boxShadow: "var(--shadow-xs)",
      ...style
    }, ...rest, children: [
      /* @__PURE__ */ jsx("div", { style: { font: "var(--text-subtitle)", color: "var(--neutral-text-icon-muted)" }, children: label }),
      /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center", gap: 10, margin: "8px 0 14px" }, children: [
        /* @__PURE__ */ jsx("span", { style: { font: "var(--text-display)", color: "var(--neutral-text-icon-emphasis)" }, children: value }),
        /* @__PURE__ */ jsx("span", { style: { display: "inline-flex", alignItems: "center", gap: 2, padding: "2px 7px", borderRadius: 9999, background: bg, color: col, font: "var(--text-caption)" }, children: [
          /* @__PURE__ */ jsx("span", { className: "material-symbols-rounded", style: { fontSize: 14 }, children: up ? "arrow_upward" : "arrow_downward" }),
          Math.abs(d),
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsx(Sparkline, { data, color: up ? "success" : "error", W: 218, H: 40 })
    ] });
  });
  StatTile.displayName = "StatTile";
  var SIZES2 = {
    sm: { fs: 13, pad: "7px 3px", gap: 6, icon: 16, chip: 18, ul: 2 },
    md: { fs: 14, pad: "10px 4px", gap: 7, icon: 18, chip: 20, ul: 2 },
    lg: { fs: 16, pad: "13px 6px", gap: 8, icon: 22, chip: 24, ul: 3 }
  };
  var Tab = /* @__PURE__ */ react_default.forwardRef(function Tab2({ label = "Overview", size = "md", active = false, icon, count, countHint = "Number of items in this tab", disabled = false, state, onClick, style, ...rest }, forwardedRef) {
    const [hoverS, setHover] = useState(false);
    const [cHover, setCHover] = useState(false);
    const sz = SIZES2[size] || SIZES2.md;
    const isDisabled = disabled || state === "disabled";
    const on = active || state === "active" || state === "activeHover";
    const hover = !isDisabled && (hoverS || state === "hovered" || state === "activeHover");
    let fg = "var(--neutral-text-icon-muted)";
    if (isDisabled) fg = "var(--neutral-text-icon-weak)";
    else if (on) fg = hover ? "var(--brand-text-icon-strong)" : "var(--brand-text-icon-default)";
    else if (hover) fg = "var(--neutral-text-icon-emphasis)";
    const bg = isDisabled ? "transparent" : hover ? on ? "var(--brand-bg-weak)" : "var(--neutral-bg-subtle)" : "transparent";
    return /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        ref: forwardedRef,
        onClick: (e) => {
          if (!isDisabled && onClick) onClick(e);
        },
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
        disabled: isDisabled,
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: sz.gap,
          padding: sz.pad,
          border: "none",
          background: bg,
          borderRadius: "8px 8px 0 0",
          borderBottom: `${sz.ul}px solid ${on ? "var(--brand-bg-default)" : "transparent"}`,
          color: fg,
          font: `600 ${sz.fs}px/1 var(--font-family-body)`,
          cursor: isDisabled ? "not-allowed" : "pointer",
          opacity: isDisabled ? 0.6 : 1,
          transition: "color .12s, background .12s, border-color .12s",
          ...style
        },
        ...rest,
        children: [
          icon && /* @__PURE__ */ jsx("span", { className: "material-symbols-rounded", style: { fontSize: sz.icon }, children: icon }),
          label,
          count != null && count !== "" && /* @__PURE__ */ jsx(
            "span",
            {
              style: { position: "relative", display: "inline-flex" },
              onMouseEnter: () => setCHover(true),
              onMouseLeave: () => setCHover(false),
              children: [
                /* @__PURE__ */ jsx("span", { style: {
                  minWidth: sz.chip,
                  height: sz.chip,
                  padding: "0 6px",
                  borderRadius: 9999,
                  background: on ? "var(--brand-bg-subtle)" : "var(--neutral-bg-subtle)",
                  color: on ? "var(--brand-text-icon-default)" : "var(--neutral-text-icon-muted)",
                  font: `600 ${sz.fs - 3}px/1 var(--font-family-body)`,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "help"
                }, children: count }),
                cHover && !isDisabled && /* @__PURE__ */ jsx("span", { style: {
                  position: "absolute",
                  bottom: "calc(100% + 8px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "var(--neutral-text-icon-strong)",
                  color: "var(--neutral-text-icon-on)",
                  font: "var(--text-caption)",
                  padding: "6px 10px",
                  borderRadius: "calc(var(--radius-md) * 1px)",
                  whiteSpace: "nowrap",
                  zIndex: 30,
                  boxShadow: "var(--shadow-popover)"
                }, children: [
                  countHint,
                  /* @__PURE__ */ jsx("span", { style: { position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%) rotate(45deg) translateY(-4px)", width: 8, height: 8, background: "var(--neutral-text-icon-strong)" } })
                ] })
              ]
            }
          )
        ]
      }
    );
  });
  Tab.displayName = "Tab";
  var FIELD_STATES7 = ["default", "hovered", "filled", "typing", "focused", "success", "error", "disabled"];
  var TextArea = /* @__PURE__ */ react_default.forwardRef(function TextArea2({
    label = "Label",
    value,
    defaultValue,
    onChange,
    onFocus,
    onBlur,
    placeholder,
    helper,
    error,
    success,
    disabled = false,
    state,
    rows = 3,
    maxLength,
    showCount = false,
    textareaRef,
    id,
    name,
    style,
    className,
    ...rest
  }, forwardedRef) {
    const autoId = useId();
    const fieldId = id || autoId;
    const descId = `${fieldId}-desc`;
    const isControlled = value !== void 0 && value !== null;
    const [inner, setInner] = useState(defaultValue != null ? String(defaultValue) : "");
    const val = isControlled ? String(value) : inner;
    const [focused, setFocused] = useState(false);
    const [hovered, setHovered] = useState(false);
    const hasError = !!error;
    const errText = typeof error === "string" ? error : null;
    const hasSuccess = !!success && !hasError;
    const okText = typeof success === "string" ? success : null;
    const filled = val.length > 0;
    const eff = resolveFieldState({ state: FIELD_STATES7.includes(state) ? state : void 0, disabled, hasError, hasSuccess, focused, hovered, filled });
    const s = fieldState(eff);
    const stIcon = statusIcon(eff);
    const showFooter = helper != null || errText != null || okText != null || showCount && maxLength != null;
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, className, style: { boxSizing: "border-box", display: "flex", flexDirection: "column", gap: 4, width: "100%", minWidth: 280, maxWidth: 420, fontFamily: fieldFont, ...style }, children: [
      label != null && label !== "" && /* @__PURE__ */ jsx("label", { htmlFor: fieldId, style: { fontWeight: 600, fontSize: 14, lineHeight: 1.4, color: disabled ? "var(--neutral-text-icon-subtle)" : "var(--neutral-text-icon-emphasis)" }, children: label }),
      /* @__PURE__ */ jsx("div", { onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false), style: { boxSizing: "border-box", display: "flex", padding: "12px 12px 12px 16px", borderRadius: "calc(var(--control-md-radius) * 1px)", background: s.bg, border: s.border, boxShadow: s.shadow, transition: "border-color .15s ease, box-shadow .15s ease" }, children: [
        /* @__PURE__ */ jsx(
          "textarea",
          {
            className: "ivdsField",
            ...rest,
            id: fieldId,
            name,
            rows,
            maxLength,
            placeholder,
            disabled,
            value: val,
            ref: textareaRef,
            "aria-invalid": hasError ? "true" : void 0,
            "aria-describedby": errText || okText || helper ? descId : void 0,
            onChange: (e) => {
              if (!isControlled) setInner(e.target.value);
              onChange && onChange(e);
            },
            onFocus: (e) => {
              setFocused(true);
              onFocus && onFocus(e);
            },
            onBlur: (e) => {
              setFocused(false);
              onBlur && onBlur(e);
            },
            style: { flex: 1, minWidth: 0, resize: "vertical", minHeight: 56, border: "none", outline: "none", background: "transparent", padding: 0, fontFamily: fieldFont, fontWeight: 400, fontSize: 16, lineHeight: 1.5, color: disabled ? "var(--neutral-text-icon-weak)" : "var(--neutral-text-icon-emphasis)", cursor: disabled ? "not-allowed" : "text" }
          }
        ),
        stIcon && /* @__PURE__ */ jsx("span", { style: { display: "inline-flex", alignSelf: "flex-start", marginLeft: 6 }, children: /* @__PURE__ */ jsx(Icon, { name: stIcon.name, size: "regular", color: stIcon.color }) })
      ] }),
      showFooter && /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }, children: [
        /* @__PURE__ */ jsx("span", { id: descId, role: hasError ? "alert" : void 0, style: { fontWeight: 400, fontSize: 12, lineHeight: 1.4, color: helperColor(eff) }, children: errText || okText || helper || "" }),
        showCount && maxLength != null && /* @__PURE__ */ jsx("span", { id: descId, role: hasError ? "alert" : void 0, style: { fontWeight: 400, fontSize: 12, lineHeight: 1.4, color: hasError ? helperColor("error") : "var(--neutral-text-icon-default)", flexShrink: 0 }, children: val.length + "/" + maxLength })
      ] })
    ] });
  });
  TextArea.displayName = "TextArea";
  var TONE5 = {
    brand: ["var(--brand-bg-default)", "var(--brand-bg-subtle)", "var(--brand-border-default)", "var(--brand-text-icon-default)", "campaign"],
    error: ["var(--error-bg-default)", "var(--error-bg-subtle)", "var(--error-border-default)", "var(--error-text-icon-strong)", "error"],
    info: ["var(--info-bg-default)", "var(--info-bg-subtle)", "var(--info-border-default)", "var(--info-text-icon-strong)", "info"],
    neutral: ["var(--neutral-border-strong)", "var(--neutral-bg-default)", "var(--neutral-border-default)", "var(--neutral-text-icon-emphasis)", "notifications"],
    success: ["var(--success-bg-default)", "var(--success-bg-subtle)", "var(--success-border-default)", "var(--success-text-icon-strong)", "check_circle"],
    warning: ["var(--warning-bg-default)", "var(--warning-bg-subtle)", "var(--warning-border-default)", "var(--warning-text-icon-strong)", "warning"]
  };
  var Toast = /* @__PURE__ */ react_default.forwardRef(function Toast2({ color = "brand", type = "elevated", title = "Toast Title", subtitle = "This is test text for notification", onClose, style, ...rest }, forwardedRef) {
    const [bar, bg, bd, fg, icon] = TONE5[color] || TONE5.brand;
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, style: {
      display: "flex",
      alignItems: "stretch",
      width: 400,
      maxWidth: "100%",
      background: bg,
      border: `1px solid ${bd}`,
      borderRadius: 10,
      overflow: "hidden",
      boxShadow: "var(--shadow-lg)",
      boxSizing: "border-box",
      ...style
    }, ...rest, children: [
      /* @__PURE__ */ jsx("div", { style: { width: 10, background: bar, flex: "none" } }),
      /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", flex: 1, minWidth: 0 }, children: [
        /* @__PURE__ */ jsx("span", { style: { width: 32, height: 32, flex: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", color: fg }, children: /* @__PURE__ */ jsx("span", { className: "material-symbols-rounded", style: { fontSize: 24 }, children: icon }) }),
        /* @__PURE__ */ jsx("div", { style: { flex: 1, minWidth: 0 }, children: [
          /* @__PURE__ */ jsx("div", { style: { font: "var(--text-h3)", color: fg }, children: title }),
          type === "elevated" && subtitle && /* @__PURE__ */ jsx("div", { style: { font: "var(--text-body-sm)", color: "var(--neutral-text-icon-default)", marginTop: 2 }, children: subtitle })
        ] }),
        /* @__PURE__ */ jsx(IconButton, { icon: "close", kind: "tertiary", size: "small", onClick: onClose, "aria-label": "Dismiss", color: "var(--neutral-text-icon-muted)" })
      ] })
    ] });
  });
  Toast.displayName = "Toast";
  var FONT10 = "var(--font-family-body)";
  var Toggle = /* @__PURE__ */ react_default.forwardRef(function Toggle2({
    checked,
    defaultChecked = false,
    onChange,
    label = "Label",
    description,
    labelPosition = "right",
    disabled = false,
    id,
    name,
    inputRef,
    style,
    className,
    ...rest
  }, forwardedRef) {
    const isControlled = checked !== void 0 && checked !== null;
    const [inner, setInner] = useState(!!defaultChecked);
    const on = isControlled ? !!checked : inner;
    const [flipping, setFlipping] = useState(false);
    const [focused, setFocused] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [active, setActive] = useState(false);
    const ft = useRef(null);
    const toggle = (e) => {
      if (disabled) return;
      const next = !on;
      if (!isControlled) setInner(next);
      if (onChange) onChange(next, e);
      setFlipping(true);
      clearTimeout(ft.current);
      ft.current = setTimeout(() => setFlipping(false), 130);
    };
    let trackBg;
    if (on) trackBg = hovered || active ? "var(--info-bg-strong)" : "var(--info-bg-emphasis)";
    else trackBg = hovered || active ? "var(--neutral-border-strong)" : "var(--neutral-bg-strong)";
    const knobLeft = on ? flipping ? 14 : 18 : 2;
    const knobW = flipping || active ? 20 : 16;
    const shadows = [];
    if (active) shadows.push("inset 0 2px 4px var(--scrim-default)");
    if (hovered && !focused && !active) shadows.push("0 0 0 4px var(--neutral-bg-subtle)");
    if (focused) shadows.push("var(--focus-ring)");
    return /* @__PURE__ */ jsx(
      "label",
      {
        ref: forwardedRef,
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => {
          setHovered(false);
          setActive(false);
        },
        onMouseDown: () => setActive(true),
        onMouseUp: () => setActive(false),
        className,
        style: { display: "inline-flex", flexDirection: labelPosition === "left" ? "row-reverse" : "row", alignItems: description ? "flex-start" : "center", gap: 10, cursor: disabled ? "not-allowed" : "pointer", fontFamily: FONT10, opacity: disabled ? 0.55 : 1, lineHeight: 1, userSelect: "none", ...style },
        children: [
          /* @__PURE__ */ jsx("span", { style: { position: "relative", width: 36, height: 20, borderRadius: 9999, flexShrink: 0, background: trackBg, transition: "background .15s ease, box-shadow .15s ease", boxShadow: shadows.join(", ") || "none" }, children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                ...rest,
                type: "checkbox",
                role: "switch",
                id,
                name,
                checked: on,
                disabled,
                ref: inputRef,
                onChange: toggle,
                onFocus: () => setFocused(true),
                onBlur: () => setFocused(false),
                style: { position: "absolute", inset: 0, margin: 0, opacity: 0, cursor: disabled ? "not-allowed" : "pointer" }
              }
            ),
            /* @__PURE__ */ jsx("span", { "aria-hidden": "true", style: { position: "absolute", top: 2, left: knobLeft, width: knobW, height: 16, borderRadius: 9999, background: "var(--neutral-bg-default)", boxShadow: "var(--shadow-xs)", transition: "left .2s cubic-bezier(0.34,1.56,0.64,1), width .12s ease" } })
          ] }),
          label != null && label !== "" && /* @__PURE__ */ jsx("span", { style: { minWidth: 0 }, children: [
            /* @__PURE__ */ jsx("span", { style: { display: "block", fontSize: 14, lineHeight: 1.4, color: disabled ? "var(--neutral-text-icon-muted)" : "var(--neutral-text-icon-strong)" }, children: label }),
            description && /* @__PURE__ */ jsx("span", { style: { display: "block", font: "var(--text-body-sm)", color: "var(--neutral-text-icon-muted)", marginTop: 2, lineHeight: 1.4 }, children: description })
          ] })
        ]
      }
    );
  });
  Toggle.displayName = "Toggle";
  var Tooltip = /* @__PURE__ */ react_default.forwardRef(function Tooltip2({ label = "Tooltip label", position = "bottom", children, style, ...rest }, forwardedRef) {
    const arrow = {
      top: { left: "50%", bottom: -4, transform: "translateX(-50%) rotate(45deg)" },
      bottom: { left: "50%", top: -4, transform: "translateX(-50%) rotate(45deg)" },
      left: { top: "50%", right: -4, transform: "translateY(-50%) rotate(45deg)" },
      right: { top: "50%", left: -4, transform: "translateY(-50%) rotate(45deg)" }
    }[position] || {};
    const bubble = /* @__PURE__ */ jsx("span", { style: { position: "relative", display: "inline-block" }, children: [
      /* @__PURE__ */ jsx("span", { style: {
        display: "inline-block",
        background: "var(--neutral-text-icon-strong)",
        color: "var(--neutral-text-icon-on)",
        font: "var(--text-caption)",
        padding: "6px 10px",
        borderRadius: "calc(var(--radius-md) * 1px)",
        whiteSpace: "nowrap",
        boxShadow: "var(--shadow-popover)",
        ...style
      }, children: label }),
      /* @__PURE__ */ jsx("span", { style: { position: "absolute", width: 8, height: 8, background: "var(--neutral-text-icon-strong)", ...arrow } })
    ] });
    if (!children) return react_default.cloneElement(bubble, { ref: forwardedRef, ...rest });
    return /* @__PURE__ */ jsx("span", { ref: forwardedRef, style: { display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 8 }, ...rest, children: [
      bubble,
      children
    ] });
  });
  Tooltip.displayName = "Tooltip";
  var FILE_STATES = ["queued", "uploading", "done", "failed"];
  var DEMO = {
    dragging: [],
    uploading: [
      { id: "d1", name: "quarterly-report.pdf", size: 2411724, status: "uploading", progress: 62 },
      { id: "d2", name: "territory-map.png", size: 884736, status: "uploading", progress: 24 }
    ],
    uploaded: [
      { id: "d1", name: "quarterly-report.pdf", size: 2411724, status: "done", progress: 100 },
      { id: "d2", name: "territory-map.png", size: 884736, status: "done", progress: 100 },
      { id: "d3", name: "contacts.csv", size: 41231, status: "done", progress: 100 }
    ],
    failed: [
      { id: "d1", name: "quarterly-report.pdf", size: 2411724, status: "done", progress: 100 },
      { id: "d2", name: "huge-video.mov", size: 98765432, status: "failed", progress: 0, note: "Too large" }
    ],
    canceled: [{ id: "d1", name: "territory-map.png", size: 884736, status: "failed", progress: 0, note: "Canceled" }]
  };
  var UPLOAD_STATES = ["default", "dragging", "uploading", "uploaded", "failed", "canceled", "disabled"];
  var fmtSize = (n) => {
    if (!Number.isFinite(n)) return "";
    if (n < 1024) return `${n} B`;
    if (n < 1024 * 1024) return `${Math.round(n / 1024)} KB`;
    return `${(n / (1024 * 1024)).toFixed(1)} MB`;
  };
  var UploadField = /* @__PURE__ */ react_default.forwardRef(function UploadField2({
    label = "Upload",
    head = "Drag and drop or select document to upload",
    helper = "PDF, PNG or JPG up to 10MB",
    accept,
    multiple = true,
    files: filesProp,
    simulate = true,
    maxFiles,
    state,
    onFiles,
    onRemove,
    onCancel,
    onRetry,
    disabled = false,
    error,
    style,
    className,
    ...rest
  }, forwardedRef) {
    const inputRef = useRef(null);
    const [dragOver, setDragOver] = useState(false);
    const [inner, setInner] = useState([]);
    const forced = UPLOAD_STATES.includes(state) ? state : null;
    const isControlled = Array.isArray(filesProp) || forced && DEMO[forced];
    const files = Array.isArray(filesProp) ? filesProp : forced ? DEMO[forced] || [] : inner;
    const dragging = dragOver || forced === "dragging";
    disabled = disabled || forced === "disabled";
    const hasError = !!error;
    const errText = typeof error === "string" ? error : "Please upload your file";
    const zone = disabled ? "disabled" : hasError ? "error" : dragging ? "dragging" : "empty";
    const M = {
      empty: { bg: "var(--neutral-bg-default)", border: "2px dashed var(--brand-bg-accent)", icon: "var(--brand-bg-accent)", headColor: "var(--brand-text-icon-default)" },
      dragging: { bg: "var(--brand-bg-weak)", border: "2px solid var(--brand-text-icon-default)", icon: "var(--brand-text-icon-default)", headColor: "var(--brand-text-icon-default)" },
      error: { bg: "var(--error-bg-subtle)", border: "2px dashed var(--error-border-default)", icon: "var(--error-bg-default)", headColor: "var(--error-text-icon-strong)" },
      disabled: { bg: "var(--neutral-bg-subtle)", border: "2px dashed var(--neutral-bg-emphasis)", icon: "var(--neutral-text-icon-weak)", headColor: "var(--neutral-text-icon-subtle)" }
    };
    const s = M[zone] || M.empty;
    const update = (next) => {
      if (!isControlled) setInner(next);
      if (onFiles) onFiles(next);
    };
    const take = (list) => {
      const arr = Array.from(list || []);
      if (!arr.length) return;
      const rows = arr.map((f, i) => ({
        id: `${Date.now()}-${i}-${f.name}`,
        name: f.name,
        size: f.size,
        status: simulate ? "uploading" : "queued",
        progress: 0,
        file: f
      }));
      const merged = multiple ? [...files, ...rows] : rows.slice(0, 1);
      update(maxFiles ? merged.slice(0, maxFiles) : merged);
    };
    useEffect(() => {
      if (!simulate || isControlled) return void 0;
      if (!inner.some((f) => f.status === "uploading")) return void 0;
      const t = setInterval(() => {
        setInner((prev) => prev.map((f) => {
          if (f.status !== "uploading") return f;
          const next = Math.min(100, f.progress + 7 + f.name.length % 5);
          return next >= 100 ? { ...f, progress: 100, status: "done" } : { ...f, progress: next };
        }));
      }, 260);
      return () => clearInterval(t);
    }, [simulate, isControlled, inner]);
    const patch = (id, changes) => update(files.map((f) => f.id === id ? { ...f, ...changes } : f));
    const drop = (id) => update(files.filter((f) => f.id !== id));
    const remove = (f) => {
      drop(f.id);
      onRemove && onRemove(f);
    };
    const cancel = (f) => {
      patch(f.id, { status: "failed", progress: 0, note: "Canceled" });
      onCancel && onCancel(f);
    };
    const retry = (f) => {
      patch(f.id, { status: "uploading", progress: 0, note: null });
      onRetry && onRetry(f);
    };
    const openPicker = () => {
      if (!disabled && inputRef.current) inputRef.current.click();
    };
    const atLimit = maxFiles != null && files.length >= maxFiles;
    const ROW_TONE = {
      queued: { icon: "schedule", color: "var(--neutral-text-icon-muted)" },
      uploading: { icon: "upload", color: "var(--brand-text-icon-default)" },
      done: { icon: "check_circle", color: "var(--success-text-icon-default)" },
      failed: { icon: "error", color: "var(--error-text-icon-default)" }
    };
    return /* @__PURE__ */ jsx("div", { ref: forwardedRef, className, style: { boxSizing: "border-box", display: "flex", flexDirection: "column", gap: 8, width: "100%", minWidth: 320, maxWidth: 520, fontFamily: fieldFont, ...style }, ...rest, children: [
      label != null && label !== "" && /* @__PURE__ */ jsx("span", { style: { fontWeight: 600, fontSize: 14, lineHeight: 1.4, color: disabled ? "var(--neutral-text-icon-subtle)" : "var(--neutral-text-icon-emphasis)" }, children: label }),
      /* @__PURE__ */ jsx(
        "div",
        {
          role: "button",
          tabIndex: disabled ? -1 : 0,
          "aria-disabled": disabled || atLimit || void 0,
          onClick: openPicker,
          onKeyDown: (e) => {
            if ((e.key === "Enter" || e.key === " ") && !disabled) {
              e.preventDefault();
              openPicker();
            }
          },
          onDragOver: (e) => {
            if (disabled) return;
            e.preventDefault();
            setDragOver(true);
          },
          onDragLeave: () => setDragOver(false),
          onDrop: (e) => {
            if (disabled) return;
            e.preventDefault();
            setDragOver(false);
            take(e.dataTransfer.files);
          },
          style: {
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
            minHeight: 156,
            padding: "24px 16px",
            borderRadius: "calc(var(--control-md-radius) * 1px)",
            background: s.bg,
            border: s.border,
            boxShadow: dragging ? "var(--shadow-raised)" : "0 1px 2.5px rgb(var(--ink) / 0.16)",
            cursor: disabled ? "not-allowed" : "pointer",
            transform: dragging ? "scale(1.01)" : "none",
            transition: "background var(--motion-base) var(--motion-ease), border-color var(--motion-base) var(--motion-ease), transform var(--motion-fast) var(--motion-ease), box-shadow var(--motion-base) var(--motion-ease)"
          },
          children: [
            /* @__PURE__ */ jsx("input", { ref: inputRef, type: "file", accept, multiple, disabled, onChange: (e) => {
              take(e.target.files);
              e.target.value = "";
            }, style: { display: "none" } }),
            /* @__PURE__ */ jsx(Icon, { name: dragging ? "file_download" : "upload_file", size: "large", color: s.icon }),
            /* @__PURE__ */ jsx("span", { style: { fontWeight: 400, fontSize: 16, lineHeight: 1.5, color: s.headColor, textAlign: "center" }, children: dragging ? "Drop to upload" : head }),
            /* @__PURE__ */ jsx("span", { style: { fontWeight: 400, fontSize: 14, lineHeight: 1.5, color: "var(--neutral-text-icon-muted)", textAlign: "center" }, children: atLimit ? `Limit reached (${maxFiles})` : helper }),
            /* @__PURE__ */ jsx(
              Button,
              {
                label: files.length ? multiple ? "Add more" : "Replace file" : "Select file",
                kind: "secondary",
                size: "sm",
                disabled: disabled || atLimit,
                onClick: (e) => {
                  e.stopPropagation();
                  openPicker();
                }
              }
            )
          ]
        }
      ),
      files.length > 0 && /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: 6 }, children: files.map((f) => {
        const t = ROW_TONE[FILE_STATES.includes(f.status) ? f.status : "queued"];
        const uploading = f.status === "uploading";
        return /* @__PURE__ */ jsx("div", { style: {
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "8px 10px",
          border: `1px solid ${f.status === "failed" ? "var(--error-border-default)" : "var(--neutral-border-subtle)"}`,
          borderRadius: "calc(var(--control-sm-radius) * 1px)",
          background: f.status === "failed" ? "var(--error-bg-subtle)" : "var(--neutral-bg-default)"
        }, children: [
          /* @__PURE__ */ jsx(Icon, { name: t.icon, size: "regular", color: t.color }),
          /* @__PURE__ */ jsx("span", { style: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ jsx("span", { style: { display: "flex", gap: 8, alignItems: "baseline" }, children: [
              /* @__PURE__ */ jsx("span", { style: { font: "var(--text-body-sm)", color: "var(--neutral-text-icon-emphasis)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: f.name }),
              /* @__PURE__ */ jsx("span", { style: { font: "var(--text-caption)", color: "var(--neutral-text-icon-muted)", flex: "none" }, children: f.note || (uploading ? `${f.progress}%` : fmtSize(f.size)) })
            ] }),
            uploading && /* @__PURE__ */ jsx(ProgressBar, { value: f.progress, style: { marginTop: 6 } })
          ] }),
          uploading && /* @__PURE__ */ jsx(IconButton, { icon: "close", kind: "tertiary", size: "small", label: `Cancel ${f.name}`, onClick: () => cancel(f) }),
          f.status === "failed" && /* @__PURE__ */ jsx(IconButton, { icon: "refresh", kind: "tertiary", size: "small", label: `Retry ${f.name}`, onClick: () => retry(f) }),
          !uploading && /* @__PURE__ */ jsx(IconButton, { icon: "delete", kind: "tertiary", size: "small", label: `Remove ${f.name}`, color: "var(--neutral-text-icon-muted)", onClick: () => remove(f) })
        ] }, f.id);
      }) }),
      hasError && /* @__PURE__ */ jsx("span", { style: { fontWeight: 400, fontSize: 12, lineHeight: 1.4, color: "var(--error-text-icon-default)" }, children: errText })
    ] });
  });
  UploadField.displayName = "UploadField";
  return __toCommonJS(index_exports);
})();
