import "./NavigationBar.css";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
function NavigationBar() {
  const { logout } = useLogout();
  function handleClick() {
    logout();
  }
  return (
    <div className="navigation">
      <h1>
        <Link to="/">
          EXPENSE <br></br> TRACKER
        </Link>
      </h1>
      <Link to="/signup">
        <h2>Sign up</h2>
      </Link>
      <Link to="/login">
        <h2>Login</h2>
      </Link>
      <span className="material-symbols-outlined" onClick={handleClick}>
        logout
      </span>
    </div>
  );
}

export default NavigationBar;
