import "./card.scss";

const Card = ({ title, imageURL }) => {
  return (
    <section className="Card">
      <div className="ContainerCard">
        <h1>{title}</h1>
      </div>
    </section>
  );
};

export default Card;
