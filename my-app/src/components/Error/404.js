import "./404.scss";

function Erreur() {
  return (
    <div>
      <h2 className="error-title"> 404</h2>
      <p className="error">Oups! La page que vous demandez n'existe pas.</p>
      <a className="return-home" href="/">
        Retourner sur la page d'accueil
      </a>
    </div>
  );
}

export default Erreur;
