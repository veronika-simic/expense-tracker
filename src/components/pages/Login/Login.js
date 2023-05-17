import "../../../styles/Form.css"
import { useNavigate } from "react-router-dom";
import useFormValidation from "../../../hooks/useFormValidation";
function Login() {
  const navigate = useNavigate();
  const {
    email,
    password,
    emailError,
    passwordError,
    handleEmailChange,
    handlePasswordChange,
    hasErrors,
  } = useFormValidation();

  function navigateToSignUp() {
    navigate("/signup");
  }

  return (
    <form className="info-container">
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={handleEmailChange}></input>
        {emailError ? <p>{emailError}</p> : ""}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={handlePasswordChange}></input>
        {passwordError ? <p>{passwordError}</p> : ""}
      </div>
      <div>
        <button disabled={hasErrors()}>LOGIN</button>
      </div>
    {/*   <h3>
        New user? <button onClick={navigateToSignUp}>Sign up</button>
      </h3> */}
    </form>
  );
}

export default Login;
