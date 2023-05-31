import "../../styles/Form.css";
import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
function Login({ onFormChange }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useLogin();
  const navigate = useNavigate();
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  const handleSignUpLinkClick = () => {
    onFormChange("signup");
  };

  async function handleSubmit(e) {
    e.preventDefault();
    await login(email, password);
  }

  return (
    <form className="info-container" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={handleEmailChange}></input>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={handlePasswordChange}
          autoComplete="on"
        ></input>
      </div>
      <div>
        <button>LOGIN</button>
        {error && <div>{error}</div>}
      </div>
      <p>
        Don't have an account?
        <button type="button" onClick={handleSignUpLinkClick}>
          Sign up
        </button>
      </p>
    </form>
  );
}

export default Login;
