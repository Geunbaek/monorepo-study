import Component from "../component";

type Route = {
  path: string;
  component: new (render: Renderer) => Component;
};

type Renderer = (component?: Component) => void;

const Router = (render: Renderer) => {
  const routes: Route[] = [];
  let defaultPage: (new (render: Renderer) => Component) | null = null;

  const init = () => {
    window.addEventListener("routeChange", handleChangeRoute as EventListener);

    window.addEventListener("popstate", () => {
      route();
    });

    const path = location.pathname;

    window.dispatchEvent(
      new CustomEvent("routeChange", { detail: { path, state: {} } })
    );

    return router;
  };

  const add = (
    path: string,
    component: new (render: Renderer) => Component
  ) => {
    const formatedPath = path
      .split("/")
      .map((resource) =>
        resource.startsWith(":") ? `(?<${resource.slice(1)}>[^/]+)` : resource
      )
      .join("/");

    routes.push({ path: `^${formatedPath}$`, component });
    return router;
  };

  const setDefault = (component: new (render: Renderer) => Component) => {
    defaultPage = component;
    return router;
  };

  const getMatchedRoute = (path: string) => {
    const matchedRoute = routes.find((route) => {
      const reg = new RegExp(route.path, "g");
      return reg.test(path);
    });

    return matchedRoute;
  };
  const getMatchedGroup = (path: string, route?: Route) => {
    if (!route) return;

    const reg = new RegExp(route.path, "g");
    const result = reg.exec(path);
    return result?.groups;
  };

  const route = () => {
    const path = location.pathname;

    const route = getMatchedRoute(path);
    const page = route ? route.component : defaultPage ? defaultPage : null;

    if (page) {
      render(new page(render));
    } else {
      throw Error("NOT FOUND PAGE ERROR");
    }
  };

  const handleChangeRoute = (
    event: CustomEvent<{ path: string; state?: Record<string, unknown> }>
  ) => {
    const path = event.detail.path;
    const state = event.detail.state || {};

    const nowPath = location.pathname;
    const matchedRoute = getMatchedRoute(path);
    const groups = getMatchedGroup(path, matchedRoute);

    if (path === nowPath) {
      history.replaceState({ ...state, groups }, "", path);
    } else {
      history.pushState({ ...state, groups }, "", path);
    }

    route();
  };

  const router = {
    init,
    add,
    setDefault,
  };

  return router;
};

export { Router };
