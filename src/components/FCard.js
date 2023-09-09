import "./FCard.css";
export default function FCard({ title, description, price, rating, picture }) {
  return (
    <div className="card">
      <div className="content">
        <div className="image-box">
          <img src={picture} alt="card" />
        </div>
        <h5>{title}</h5>
        <div className="text">
          <p>{description}</p>
        </div>
        <h3>price: {price}</h3>
        <h5>rating: {rating}</h5>
      </div>
    </div>
  );
}
