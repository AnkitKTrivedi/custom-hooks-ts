import { useState } from "react";
import Footer from "../footer/Footer";
import NavBar from "../header/NavBar";
import Router from "../routes/Router";
import { BrowserRouter } from "react-router-dom";
import SubMenu from "./submenu/Submenu";

const Base = () => {
  const [theme, setTheme] = useState<string>("dark");
  const onThemeChange = (selectedTheme: string): void => {
    setTheme(selectedTheme);
  };
  return (
    <BrowserRouter>
      <div data-bs-theme={theme}>
        <header className="sticky-top">
          <NavBar onThemeChange={onThemeChange} />
        </header>
        <div className="container-xxl bd-gutter mt-3 bd-layout">
          <SubMenu />
          <main className="bd-main order-1">
            <Router />
          </main>
        </div>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
};

export default Base;
