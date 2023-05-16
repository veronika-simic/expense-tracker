import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const validateEmail = (email) => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i;
    return emailRegex.test(email);
  };
  const navigate = useNavigate();
  function emailHandler(event) {
    setEmail(event.target.value);
    if (!validateEmail(email)) {
      setEmailError("Please input the correct format");
    } else {
      setEmailError("");
    }
  }

  function passwordHandler(event) {
    setPassword(event.target.value);
    if (password.length < 6) {
      setPasswordError("Your password is too short!");
    } else {
      setPasswordError("");
    }
  }

  function navigateToSignUp() {
    navigate("/signup");
  }

  return (
    <form className="login-contanier">
      <h2>Login</h2>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={emailHandler}></input>
        {emailError ? <p>{emailError}</p> : ""}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={passwordHandler}></input>
        {passwordError ? <p>{passwordError}</p> : ""}
      </div>
      <div>
        <button>Log in</button>
      </div>
      <h3>
        New user? <button onClick={navigateToSignUp}>Sign up</button>
      </h3>
    </form>
  );
}

export default Login;
