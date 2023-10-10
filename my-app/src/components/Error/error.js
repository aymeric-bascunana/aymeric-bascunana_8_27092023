import Header from "../header/header";
import Erreur from "../Error/404";
import Footer from "../footer/footer";

function Error() {
  return (
    <>
      <Header />
      <Erreur />
      <Footer />
    </>
  );
}

export default Error;
