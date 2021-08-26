import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module

import { useStore } from "../redux/store.config";
import "../styles/globals.css";

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <ReduxProvider store={store}>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}

export default App;
