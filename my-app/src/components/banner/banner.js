import "./banner.scss";

function Banner({ title, textColor }) {
  return (
    <section className="banner">
      {title && <p className="img-title">{title}</p>}
    </section>
  );
}

export default Banner;
