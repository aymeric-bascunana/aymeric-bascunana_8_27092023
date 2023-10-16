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

        {/* <Collapse>
          Flabilité
          <div></div>
        </Collapse> */}
      </div>

      <Footer />
    </>
  );
}

export default About;
