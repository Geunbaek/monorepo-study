import type { CustomNode } from "../virtualDOM";

type Route = {
  path: string;
  getPage: (props?: Record<string, string>) => CustomNode | string | number;
};

const Router = (renderer: (page: CustomNode | string | number) => void) => {
  const routes: Route[] = [];
  let defaultPage:
    | ((props?: Record<string, string>) => CustomNode | string | number)
    | null = null;

  const init = () => {
    window.addEventListener("routeChange", handleChangeRoute as EventListener);

    const pathname = location.pathname;
    to(pathname);

    return router;
  };

  const to = (path: string, state?: Record<string, unknown>) => {
    window.dispatchEvent(
      new CustomEvent("routeChange", { detail: { path, state } })
    );
  };

  const add = (
    path: string,
    getPage: (props?: Record<string, string>) => CustomNode | string | number
  ) => {
    const formatedPath = path
      .split("/")
      .map((resource) =>
        resource.startsWith(":") ? `(?<${resource.slice(1)}>[^/]+)` : resource
      )
      .join("/");

    routes.push({ path: `^${formatedPath}$`, getPage });
    return router;
  };

  const setDefault = (
    getPage: (props?: Record<string, string>) => CustomNode | string | number
  ) => {
    defaultPage = getPage;
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

  const handleChangeRoute = (
    event: CustomEvent<{ path: string; state?: Record<string, unknown> }>
  ) => {
    const path = event.detail.path;
    const state = event.detail.state || {};

    const route = getMatchedRoute(path);
    const groups = getMatchedGroup(path, route);
    const page = route?.getPage();

    if (page) {
      renderer(page);
    } else if (defaultPage) {
      renderer(defaultPage());
    } else {
      throw Error("ERROR");
    }

    history.pushState({ ...state, groups }, "", path);
  };

  const router = {
    init,
    to,
    add,
    setDefault,
  };

  return router;
};

export default Router;
