import "./NotFound.css";
import { useNavigate } from "react-router-dom";
function NotFound() {
  const navigate = useNavigate();
  function navigateToHomePage() {
    navigate("/home");
  }
  return (
    <div className="not-found-container">
      <h2>404</h2>
      <p>
        The page you are looking for does not exist. How you got here is a
        mystery.
      </p>
      <p>But you can click the button below and go back to home page.</p>
      <button onClick={navigateToHomePage}>HOME</button>
    </div>
  );
}

export default NotFound;
