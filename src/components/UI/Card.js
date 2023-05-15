import "./Card.css";
function Card(props) {
  return (
    <div className="card">
      <div className="slide slide1">
        <div className="content">{props.children}</div>
      </div>
      <div className="slide slide2">
        <div className="content">
          <h2>Description</h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
