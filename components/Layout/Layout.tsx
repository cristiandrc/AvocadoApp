import React, { ReactNode } from "react";
import NavBar from "../NavBar/NavBar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <NavBar />
      {children}
      <footer>This is the footer</footer>
    </div>
  );
};

export default Layout;
