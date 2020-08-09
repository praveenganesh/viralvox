import React from "react";
import NextHead from "next/head";
import Router, { withRouter } from "next/router";
import { string } from "prop-types";

import globalStyles from "../../theme/globalStyle";
import { ToastContainer } from "react-toastify";



const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{"News"}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="description"
      content={props.description || ""}
    />

  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
};



export default withRouter(Head);
