import "./about.scss";
import "./ResponsiveAbout.scss";
import Collapse from "../../components/Collapse/collapse";

function About() {
  return (
    <>
      <section className="banner">
        <p className="bannerImg"></p>
      </section>
      <div className="container-collapse">
        <Collapse title="Flabilité" content="Contenu du collapse Flabilité" />
        <Collapse title="Respect" content="Contenu du collapse Respect" />
        <Collapse title="Service" content="Contenu du collapse Service" />
        <Collapse title="Sécurité" content="Contenu du collapse Sécurité" />
      </div>
    </>
  );
}

export default About;
