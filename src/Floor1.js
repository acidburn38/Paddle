import './Floor1.css';

function Floor1() {
  return (
    <div className="banners">
        <div className="header">
          <ul>
              <li><a className="accueil" href='#'>Acccueil</a></li>
              <li><img className="chevron" src="/chevron.png" alt=''></img></li>
              <li><a className="world" href='#'>World Padel Tour</a></li>
          </ul>
      </div>

      <div className="container">
          <p className="title">KUIKMA @WORLD PADEL TOUR</p>
          <p className="title2">BRUSSELS OPEN</p>
          <p className="sentence">Le top du padel mondial s'apprête à enflammer Bruxelles</p>
      </div>
    </div>
  );
}

export default Floor1;