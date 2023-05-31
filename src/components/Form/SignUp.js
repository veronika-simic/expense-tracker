import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../styles/Form.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSignup } from "../../hooks/useSignup";
function SignUp({ onFormChange }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleLoginLinkClick() {
    onFormChange("login");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await signup(email, password);
  }

  function displaySignUpInformation() {
    toast.success("User signed up!");
  }

  return (
    <form className="info-container" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={handleEmailChange}></input>
      </div>
      <div>
        <label htmlFor="password">Your Password</label>
        <input
          type="password"
          id="password"
          onChange={handlePasswordChange}
        ></input>
      </div>
      <div>
        <button disabled={!isLoading}>SIGN UP</button>
        {error && <div>{error}</div>}
      </div>
      <p>
        Already have an account?
        <button type="button" onClick={handleLoginLinkClick}>
          Login
        </button>
      </p>
    </form>
  );
}

export default SignUp;
