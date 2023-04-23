import React, { Fragment } from "react";
import { useHandleApi } from "../../hooks/useHandleApi";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function Layout({ children }) {
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
}
