import "./Login.css";

function Login() {
  return (
    <form className="login-contanier">
      <h2>Login</h2>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" required></input>
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" required></input>
      </div>
      <div>
        <button>Log in</button>
      </div>
      <h3>
        New user? <a href="/">Sign up</a>
      </h3>
    </form>
  );
}

export default Login;
