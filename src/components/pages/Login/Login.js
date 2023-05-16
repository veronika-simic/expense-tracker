import "./Login.css";

function Login() {
  return (
    <form className="login-contanier">
      <h2>Login</h2>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email"></input>
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password"></input>
      </div>
    </form>
  );
}

export default Login;
