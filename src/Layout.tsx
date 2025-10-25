import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main
        style={{
          margin: "0 auto",
          padding: "0 2rem",
          textAlign: "start",
        }}
      >
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
