import "./banner.scss";

function Banner({ title, textColor }) {
  return (
    <div className="banner">
      {title && <p className="img-title">{title}</p>}
    </div>
  );
}

export default Banner;
