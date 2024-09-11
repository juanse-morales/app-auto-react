import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div class="d-flex flex-column h-100">
      <main class="flex-shrink-0">
        <div class="container">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
