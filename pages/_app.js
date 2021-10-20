import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import SimpleReactLightbox from "simple-react-lightbox";
import Script from "next/script";

import { useStore } from "../redux/store.config";
import "../styles/globals.css";

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <>
  <Script
      strategy="lazyOnload"
      src={`https://www.googletagmanager.com/gtag/js?id=G-7KEFHMCX9L`}
    />
    <Script strategy="lazyOnload">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7KEFHMCX9L', {
            page_path: window.location.pathname,
          });
      `}
    </Script>
    
    <ReduxProvider store={store}>
      <SimpleReactLightbox>
        <Component {...pageProps} />
      </SimpleReactLightbox>
    </ReduxProvider>
    </>
  );
}

export default App;
