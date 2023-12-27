import { Route, Routes } from "react-router-dom";
import SignIn from "../../auth/SignIn";
import Introduction from "../../components/introduction";
import UseBoolean from "../../components/hooks/useBoolean";
import UseDebounce from "../../components/hooks/useDebounce";
import UseEffectOnce from "../../components/hooks/useEffectOnce";
import UseFirstRender from "../../components/hooks/useFirstRender";

const Router = () => {
  return (
    <>
      <div className="bd-intro pt-2 ps-lg-2">
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/useBoolean" element={<UseBoolean />} />
          <Route path="/useDebounce" element={<UseDebounce />} />
          <Route path="/useEffectOnce" element={<UseEffectOnce />} />
          <Route path="/useFirstRender" element={<UseFirstRender />} />
        </Routes>
      </div>
      <div className="bd-toc mt-3 mb-5 my-lg-0 mb-lg-5 px-sm-1 text-body-secondary">
        <strong className="d-none d-md-block h6 my-2 ms-3">On this page</strong>
      </div>
    </>
  );
};

export default Router;
