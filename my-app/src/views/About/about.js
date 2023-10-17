import "./about.scss";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { Collapse } from "react-collapse";

function About() {
  return (
    <>
      <Header />
      <div className="banner">
        <p className="bannerImg"></p>
      </div>
      <Collapse isOpened={true || false}>
        <div className="collapse">Flabilité</div>
        <div className="collapse">Respect</div>
        <div className="collapse">Service</div>
        <div className="collapse">Sécurité</div>
      </Collapse>

      <Footer />
    </>
  );
}

export default About;
