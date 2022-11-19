import "./card.css";

// This is functional components
const Card = ({ title, subtitle, grade }) => {
  // parameter in here we call it as a props

  return (
    <div className="card-container">
      <p>{title}</p>
      <p>{subtitle}</p>
      <p>{grade !== undefined ? grade : "Tidak ada grade"}</p>
    </div>
  );
};

export default Card;