import { Head } from "next/document";
import Navbar from "./Navbar";

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar></Navbar>
      {children}
    </>
  );
}
