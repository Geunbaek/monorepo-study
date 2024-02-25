const to = (path: string, state?: Record<string, unknown>) => {
  window.dispatchEvent(
    new CustomEvent("routeChange", { detail: { path, state } })
  );
};

export { to };
