import React from "react";
import "../home/Home.scss";
import Banner from "../../components/banner/banner";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import logements from "../../data/logements.json";
import Card from "../../components/Card/card";

function Home() {
  console.log(logements);

  const cardList = logements.map((logement, index) => (
    <Card key={index} title={logement.title} imageURL={logement.cover} />
  ));

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
      <Banner title="Chez vous, partout et ailleurs" />

      <div className="cards">{cardList}</div>
      {/* <div className="card">
        <h2 className="card-title">Titre de la location</h2>
        <h2 className="card-title">Titre de la location</h2>
        <h2 className="card-title">Titre de la location</h2>
        <h2 className="card-title">Titre de la location</h2>
        <h2 className="card-title">Titre de la location</h2>
        <h2 className="card-title">Titre de la location</h2>
      </div> */}
      <Footer />
    </>
  );
}

export default Home;
