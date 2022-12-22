import React from "react";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

interface LayoutPropsI {
  children?: JSX.Element;
}
const Layout = ({ children }: LayoutPropsI) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
