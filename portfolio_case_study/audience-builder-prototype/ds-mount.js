/* Ivanlabs Design System — mount layer.
 *
 * The prototype's state stays where it was: script.js owns `selected`, `drawMode`,
 * the Leaflet map, all of it. This file is only the seam between that imperative
 * state and the system's React components — one function per region, each taking
 * plain props and rendering the REAL component from window.IVDS.
 *
 * Rules that keep this a seam and not a second app:
 *   - no state lives here (the two `key` uses below force a remount, they don't store)
 *   - every render is driven by a script.js call, never by a listener in this file
 *   - nothing is styled here; if a component needs a look it doesn't have, the
 *     component gets a prop (see the 0.5.0 changeset), not a local override
 */
(function () {
  const R = window.React;
  const IVDS = window.IVDS;
  if (!R || !IVDS) {
    console.error("[ds] design system failed to load — check ds/ script tags");
    return;
  }

  const h = R.createElement;
  const roots = new WeakMap();
  const rootOf = (el) => {
    let root = roots.get(el);
    if (!root) {
      el.textContent = "";
      root = window.ReactDOM.createRoot(el);
      roots.set(el, root);
    }
    return root;
  };
  const render = (el, node) => { if (el) rootOf(el).render(node); };

  /* --- the locations panel ------------------------------------------------ */

  // LocationRow, one per selected area. `actions` (0.5.0) is what lets this list
  // centre an area where a settings list would edit it.
  function rows(el, list, on) {
    render(el, list.map((row) =>
      h(IVDS.LocationRow, {
        key: row.id,
        name: row.name,
        type: row.type,
        meta: row.meta,
        structures: row.structures,
        mode: row.mode,
        checked: !!row.checked,
        onCheckedChange: (next) => on.check(row.id, next),
        onSelect: () => on.center(row.id),
        actions: [
          { icon: "my_location", ariaLabel: `Center ${row.name}`, onClick: () => on.center(row.id) },
          { icon: "delete", ariaLabel: `Delete ${row.name}`, onClick: () => on.remove(row.id) },
        ],
      })
    ));
  }

  // StatusPagePattern — the panel before anything is selected. cta null: the
  // actions that get you out of this state are the map itself, not a button here.
  function emptyState(el) {
    render(el, h(IVDS.StatusPagePattern, {
      status: "empty",
      icon: "pin_drop",
      title: "Start selecting your locations",
      message: "Search, draw, upload, click the map, or select a saved map to define where storms should be monitored.",
      cta: null,
    }));
  }

  // The count strip: counts carry their unit, panel-level actions joined on the right.
  function summary(el, counts, on) {
    const count = (icon, n, label, color) => h("span", {
      style: { display: "inline-flex", alignItems: "center", gap: 5, font: "var(--text-body-sm)", color: "var(--neutral-text-icon-muted)" },
    },
      icon ? h(IVDS.Icon, { name: icon, size: "small", color }) : null,
      h("b", { style: { color, fontWeight: 600 } }, n), label
    );

    render(el, h(R.Fragment, null,
      count(null, counts.total, " Location(s)", "var(--neutral-text-icon-emphasis)"),
      count("home", counts.included, " Included", "var(--info-text-icon-default)"),
      counts.excluded > 0
        ? count("do_not_disturb_on", counts.excluded, " Excluded", "var(--error-text-icon-default)")
        : null,
      h("span", { style: { flex: 1 } }),
      h(IVDS.GroupedButton, {
        kind: "secondary",
        size: "sm",
        actions: [
          { icon: "delete", ariaLabel: "Clear all locations", onClick: on.clear, disabled: !counts.total },
          { icon: "open_in_full", ariaLabel: "Expand the locations panel", onClick: on.expand },
        ],
      })
    ));
  }

  // SearchField owns its own clear button, so #clearSearch is gone from the markup.
  function search(el, value, on) {
    render(el, h(IVDS.SearchField, {
      value,
      placeholder: "Search for locations",
      inputRef: (node) => { window.DS._searchInput = node; },
      onChange: (e) => on.change(e.target.value),
      onClear: () => on.change(""),
      onFocus: on.focus,
      style: { minWidth: 0, maxWidth: "100%" },
    }));
  }

  // DropdownList for results, StatusPagePattern when a query finds nothing.
  function searchMenu(el, items, on) {
    if (!items.length) {
      render(el, h(IVDS.StatusPagePattern, {
        status: "searched",
        title: "No locations found",
        message: "Try another city, state, or ZIP code.",
        cta: null,
        style: { padding: "20px 16px" },
      }));
      return;
    }
    render(el, h(IVDS.DropdownList, {
      width: "100%",
      items: items.map((item, i) => ({
        value: String(i),
        label: item.name,
        icon: "location_on",
        badge: h(IVDS.BadgeChip, { label: item.type, color: "info" }),
      })),
      onSelect: (value) => on.pick(items[Number(value)]),
      style: { border: 0, boxShadow: "none", padding: 0 },
    }));
  }

  /* --- the map canvas ----------------------------------------------------- */

  // MapControls' two halves, mounted separately because the prototype puts zoom
  // in a different corner from the draw actions.
  function drawActions(el, on) {
    render(el, h(IVDS.GroupedButton, {
      kind: "primary",
      actions: [
        { label: "Add Radius", icon: "my_location", onClick: on.radius },
        { label: "Add Polygon", icon: "polyline", onClick: on.polygon },
      ],
    }));
  }

  function zoom(el, on) {
    render(el, h(IVDS.GroupedButton, {
      kind: "secondary",
      orientation: "vertical",
      actions: [
        { icon: "add", ariaLabel: "Zoom in", onClick: on.in },
        { icon: "remove", ariaLabel: "Zoom out", onClick: on.out },
      ],
    }));
  }

  // MapOptions IS a SelectButton — it owns its open/close and dismiss, so the
  // prototype's own menu-toggling code is gone.
  function mapOptions(el, on) {
    render(el, h(IVDS.MapOptions, {
      options: [
        { value: "bulk", label: "Add CSV Bulk Locations", icon: "upload_file" },
        { value: "saved", label: "Use Saved Map", icon: "verified_user" },
        { value: "save", label: "Save this Map", icon: "save" },
      ],
      onSelect: on.pick,
    }));
  }

  function viewToggle(el, value, on) {
    render(el, h(IVDS.ChangeMap, { value, onChange: on.change }));
  }

  // Show/Hide Boundary + the area level: one joined control, one decision about
  // what the map draws.
  function areaSelect(el, state, on) {
    const actions = [{ label: state.boundaryLabel, onClick: on.toggleBoundary }];
    if (state.showArea) {
      actions.push({ label: state.areaLabel, onClick: on.openArea });
    }
    render(el, h(IVDS.GroupedButton, { kind: "secondary", actions }));
  }

  function areaMenu(el, levels, selected, on) {
    render(el, h(IVDS.DropdownList, {
      width: 180,
      value: selected,
      items: levels.map((l) => ({ value: l, label: l })),
      onSelect: on.pick,
      style: { border: 0, boxShadow: "none", padding: 0 },
    }));
  }

  // MapModeBanner with the include/exclude choice in its `controls` slot (0.5.0).
  function modeBanner(el, state, on) {
    render(el, h(IVDS.MapModeBanner, {
      mode: state.mode,
      finishDisabled: !state.canFinish,
      onCancel: on.cancel,
      onFinish: on.finish,
      controls: h(IVDS.SegmentedControl, {
        kind: "primary",
        options: ["Include", "Exclude"],
        value: state.selectionMode === "exclude" ? 1 : 0,
        onChange: (i) => on.selectionMode(i === 1 ? "exclude" : "include"),
      }),
      style: { width: "100%" },
    }));
  }

  function boundaryLoading(el, label) {
    render(el, h(IVDS.Spinner, { size: "sm", label }));
  }

  /* --- the on-map popover ------------------------------------------------- */

  // BubbleBox. Returns the element for Leaflet's popup.setContent().
  //
  // `key` remounts it when the area or its mode changes: BubbleBox keeps its own
  // include/exclude state internally, so a remount is how you hand it a new truth.
  function bubbleBox(props, on) {
    const el = document.createElement("div");
    el.className = "ds-bubble-host";
    render(el, h(IVDS.BubbleBox, {
      key: `${props.id}:${props.selected}`,
      type: props.type,
      typeIcon: props.typeIcon,
      typeLabel: props.typeLabel,
      address: props.address,
      meta: props.meta,
      structures: props.structures,
      selected: props.selected,
      excludeDisabled: props.excludeDisabled,
      removable: props.removable,
      removeLabel: "Remove from selected",
      onInclude: on.include,
      onExclude: on.exclude,
      onRemove: on.remove,
      style: { width: 300, boxShadow: "none", border: 0 },
    }));
    return el;
  }

  window.DS = {
    rows, emptyState, summary, search, searchMenu,
    drawActions, zoom, mapOptions, viewToggle, areaSelect, areaMenu,
    modeBanner, boundaryLoading, bubbleBox,
    _searchInput: null,
  };
})();
