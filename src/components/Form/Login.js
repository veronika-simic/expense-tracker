import "../../styles/Form.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  async function handleEmailChange(e) {
    setEmail(e.target.value);
   
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function navigateToHomePage() {
    navigate("/home");
  }

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
      <p>Don't have an account? Sign up</p>
    </form>
  );
}

export default Login;
