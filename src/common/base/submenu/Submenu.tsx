import { Link } from "react-router-dom";

const SubMenu = () => {
  return (
    <aside className="bd-sidebar">
      <div className="offcanvas-lg offcanvas-start">
        <nav className="bd-links">
          <div className="bd-links-nav list-unstyled mx-3">
            <h5 className="mb-1 rounded-md px-2 py-1 text-sm font-medium">
              Getting Started
            </h5>
            <Link
              className="nav-link bd-links-link  rounded p-2"
              aria-current="page"
              to="/introduction"
            >
              Introduction
            </Link>
            <h5 className="mb-1 rounded-md px-2 py-1 text-sm font-medium">
              Custom Hooks Utils
            </h5>
            <Link
              className="nav-link bd-links-link  rounded p-2"
              aria-current="page"
              to="/useBoolean"
            >
              useBoolean
            </Link>
            <Link
              className="nav-link bd-links-link  rounded p-2"
              aria-current="page"
              to="/useDebounce"
            >
              useDebounce
            </Link>
            <Link
              className="nav-link bd-links-link  rounded p-2"
              aria-current="page"
              to="/useEffectOnce"
            >
              useEffectOnce
            </Link>
            <Link
              className="nav-link bd-links-link  rounded p-2"
              aria-current="page"
              to="/useFirstRender"
            >
              useFirstRender
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default SubMenu;
