import "../../styles/Form.css";
import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login({ onFormChange }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  const handleSignUpLinkClick = () => {
    onFormChange("signup");
  };
  function displayLoginConfirmation() {
    toast.success("Logged in successfully");
  }

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
        ></input>
      </div>
      <div>
        <button disabled={isLoading}>LOGIN</button>
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
