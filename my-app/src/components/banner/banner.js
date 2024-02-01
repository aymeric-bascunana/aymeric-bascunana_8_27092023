import "./banner.scss";
import image from "../../assets/IMG.png";

function Banner({ title }) {
  return (
    <section className="banner">
      <img className="img-banner" src={image} />
      {title && <p className="img-title">{title}</p>}
    </section>
  );
}

export default Banner;
