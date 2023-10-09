import "../home/Home.scss";
import Banner from "../../components/banner/banner";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

function Home() {
  return (
    <>
      {/* <div className="Home">
        <h1>Kasa</h1>
        <nav>
          <a className="lien"> Accueil </a>
          <a className="lien"> A Propos</a>
        </nav>
      </div> */}
      <Header />
      <Banner />
      <Footer />
    </>
  );
}

export default Home;
