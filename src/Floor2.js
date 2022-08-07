import './Floor2.css';

function Floor2(props) {
  return (
    <>
    <div className='containerF2'>
        <div className='left'>
            <div className='containerLine'>
                <span className='line'></span>
            </div>
            <div className='containerTitleF2'>
                <p className='titleF2'>World Padel Tour et Kuikma</p>
            </div>
            <div className='containerSentence1F2'>
                <p className='sentence1F2'>Le World Padel Tour est le circuit professionnel qui réunit les meilleurs joueurs du<br></br> monde. Cette année, il se déroulera à Bruxelles, à Tour & Taxis, du 4 au 8 mai.</p>
            </div>
            <div className='containerSentence2F2'>
                <p className='sentence2F2'>Au programme : des matchs de classe mondiale entre les 60 meilleurs joueurs du monde, des<br></br> matchs d’exhibition, DJ, foodtrucks et bars… le combo parfait pour vibrer en famille, entre amis ou<br></br> entre collègues.<br></br><br></br><br></br>
                Kuikma sera également présent avec ses ambassadeurs renommés et sa gamme Expert</p>
            </div>
        </div>
        <div className='right'>
            <div className='kuikma'></div>
        </div>
    </div>

    <div className='down'>
        <div className='line2'></div>
        <div className='titleF2down'>Découvrez la gamme Expert Kuikma</div>
        <div className='gamme'>
            <ul className="gammeContainer">
                {props.categories.map((categorie, index) => {
                    return (
                    <li key={index} >
                    <img className="gammeImg" src={categorie.image.resource} alt=''></img>
                    <p className="gammeTxt">{categorie.title}</p>
                    </li>
                    );
                } )}
            </ul>
        </div>
        <div className="raquet"></div>
    </div>
    </>
    );
}

export default Floor2;

// Exemple de code pour l'appel à l'api.

// <li>
// <img className="gammeImg" src={props.url[0]} alt=''></img>
// <p className="gammeTxt">NOS RAQUETTES EXPERTES<br></br> KUIKMA</p>
// </li>