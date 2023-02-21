import Navbar from "./navbar";
import Footer from "./Footer";
import { FC } from "react";

export type layoutTypes = {
  children: any;
};

const Layout: FC<layoutTypes> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="pt-24 md:pt-48 2xl:pt-56">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
