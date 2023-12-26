import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    console.log(email, password);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="mb-3 mt-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email"
          name={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="pwd" className="form-label">
          Password:
        </label>
        <input
          type="password"
          className="form-control"
          id="pwd"
          placeholder="Enter password"
          name={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-check mb-3">
        <label className="form-check-label">
          <input className="form-check-input" type="checkbox" name="remember" />
          Remember me
        </label>
      </div>
      <button type="submit" className="btn btn-primary" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};

export default SignIn;
