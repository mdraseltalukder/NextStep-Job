import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
export default function Root() {
  return (
    <>
      <main>
        <Header />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
