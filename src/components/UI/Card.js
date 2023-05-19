import "./Card.css";
import { useState, useEffect } from "react";

function Card(props) {
  const [displayedDescription, setDisplayedDescription] = useState("");

  useEffect(() => {
    const description = props.children.find(
      (child) => child.props.className === "description"
    );
    if (description) {
      setDisplayedDescription(description.props.children);
    } else {
      setDisplayedDescription("");
    }
  }, [props.children]);

  return (
    <div className="card">
      <div className="slide slide1">
        <div className="content">
          {props.children.filter(
            (child) => child.props.className !== "description"
          )}
        </div>
      </div>
      <div className="slide slide2">
        <div className="content">
          <h2>{displayedDescription}</h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
