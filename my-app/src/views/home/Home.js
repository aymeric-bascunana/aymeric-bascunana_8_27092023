import React from "react";
import "../home/Home.scss";
import "../home/ResponsiveHome.scss";
import Banner from "../../components/banner/banner";

import logements from "../../data/logements.json";
import Card from "../../components/Card/card";

function Home() {
  console.log(logements);

  const cardList = logements.map((logement, index) => (
    <Card
      key={index}
      title={logement.title}
      imageURL={logement.cover}
      id={logement.id}
    />
  ));

  return (
    <>
      <Banner title="Chez vous, partout et ailleurs" />

      <main className="cards">{cardList}</main>
    </>
  );
}

export default Home;
