import "babel-polyfill";
import "core-js/stable";
import "cookie-parser";
import React from "react";
import { ThemeProvider } from "styled-components";
import App from "next/app";

//import 'core-js';
import "regenerator-runtime/runtime";
import { ToastContainer } from "react-toastify";

import theme from "../theme";

class MyApp extends App {

  constructor() {
    super();
  }


  render() {
    // this.storeUserDetails();
    const { Component, pageProps, store } = this.props;
    return (
      <>
        {

          <ThemeProvider theme={theme}>
            <>
              <Component {...pageProps} />
              <ToastContainer />
            </>
          </ThemeProvider>

        }
      </>
    );
  }
}


export default MyApp;

