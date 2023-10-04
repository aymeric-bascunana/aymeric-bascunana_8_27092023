import "../home/Home.css";
import Banner from "../home/components/banner";

function Home() {
  return (
    <>
      <div className="Home">
        <h1>Kasa</h1>
        <nav>
          <a className="lien"> Accueil </a>
          <a className="lien"> A Propos</a>
        </nav>
      </div>

      <Banner />
    </>
  );
}

export default Home;
