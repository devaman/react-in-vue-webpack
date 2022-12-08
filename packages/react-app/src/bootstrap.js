import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import App from "./App";

const mount = (el, { onSignIn, onNavigate, defaultHistory, initialPath }) => {
    console.log('react mount',el,onSignIn,onNavigate,defaultHistory,initialPath);
    const history =
    defaultHistory ||
    createBrowserHistory({
      initialEntries: [initialPath],
      basename:initialPath
    });

  if (onNavigate) {
    history.listen(onNavigate);
  }
  ReactDOM.render(<App onSignIn={onSignIn} history={history} />, el);

  return {
    onParentNavigate: (nextPathname) => {
      const { pathname } = history.location;
      console.log(pathname,nextPathname);
      if (pathname !== nextPathname) {
        console.log("route from container to auth", nextPathname);
        history.push(nextPathname);
      }
    }
  };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("_auth-dev-root");
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };