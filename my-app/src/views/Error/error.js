import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./error.scss";

function Error() {
  return (
    <>
      <Header />
      <div>
        <h2 className="error-title"> 404</h2>
        <p className="error">Oups! La page que vous demandez n'existe pas.</p>
        <a className="return-home" href="/">
          Retourner sur la page d'accueil
        </a>
      </div>
      <Footer />
    </>
  );
}

export default Error;
