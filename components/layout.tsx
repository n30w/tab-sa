import Navbar from "./navbar";

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar></Navbar>
      <div className="pt-24 md:pt-48 2xl:pt-56">{children}</div>
    </>
  );
}
