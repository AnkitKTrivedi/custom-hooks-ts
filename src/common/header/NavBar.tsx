import { Link } from "react-router-dom";
import SearchButton from "./SearchButton";
import Theme from "./Theme";

interface NavbarProps {
  onThemeChange: (event: string) => void;
}

const NavBar = (props: NavbarProps): JSX.Element => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-b">
      <div className="container-fluid collapse navbar-collapse">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                custom-hooks-ts
              </Link>
            </li>
          </ul>
          {/* <ul className="navbar-nav">
            <div className="nav-item dropdown">
              <i
                className="btn bi bi-brightness-high "
                data-bs-toggle="dropdown"
              ></i>
              <ul className="dropdown-menu">
                <Theme onThemeChange={props.onThemeChange} />
              </ul>
            </div>
          </ul>

          <form className="d-flex" role="search">
            <SearchButton />
          </form>
          <button className="btn btn-outline-success">
            <Link className="nav-link active" aria-current="page" to="/signIn">
              SignIn
            </Link>
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
