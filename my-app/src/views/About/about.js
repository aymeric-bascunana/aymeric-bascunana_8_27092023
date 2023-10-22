import "./about.scss";
import Collapse from "../../components/Collapse/collapse";

function About() {
  return (
    <>
      <div className="banner">
        <p className="bannerImg"></p>
      </div>
      <Collapse title="Flabilité" content="Contenu du collapse Flabilité" />
      <Collapse title="Respect" content="Contenu du collapse Respect" />
      <Collapse title="Service" content="Contenu du collapse Service" />
      <Collapse title="Sécurité" content="Contenu du collapse Sécurité" />
    </>
  );
}

export default About;
