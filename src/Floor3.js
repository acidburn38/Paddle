import './Floor3.css';

function Floor3(props) {
  return (
    <div className='containerF3'>
      <div className='line3'></div>
        <div className='titleF3'>Nos conseils sports</div>
        <div className='gamme'>
        <ul className="conseilContainer">
                {props.articles.map((article, index) => {
                    return (
                    <li className="conseilContainerSelf" key={index} >
                    <img className="conseilImg" src={article.image.media.resource} alt=''></img>
                    <div className="conseilTxtContainer" >
                        <h3 className="conseilTitle" >{article.title}</h3>
                        <p className="conseilTxt">{article.title}</p>
                        <a className="conseilLink" href={article.url}>Lire plus</a>
                    </div>
                  
                    </li>
                    );
                } )}
            </ul>
        </div>
    </div>
  );
}

export default Floor3

/* <ul className="conseilContainer">
                <li>
                    <img className="conseilImg" src='#' alt=''></img>
                </li>
                <li>
                    <img className="conseilImg" src='#' alt=''></img>
                </li>
                <li>
                    <img className="conseilImg" src='#' alt=''></img>
                    </li>
                <li>
                    <img className="conseilImg" src='#' alt=''></img>
                </li>
            </ul> */

/* <ul className="conseilContainer">
                {props.articles.map((article, index) => {
                    return (
                    <li key={index} >
                    <img className="gammeImg" src={article.image.media.resource} alt=''></img>
                    <p className="gammeTxt">{article.title}</p>
                    </li>
                    );
                } )}
            </ul> */

        //     <ul className="conseilContainer">
        //     <li className="conseilContainerSelf">
        //         <img className="conseilImg" src='#' alt=''></img>
        //         <div className="conseilTxtContainer" >
        //             <h3 className="conseilTitle" >Comment choisir sa raquette de padel?</h3>
        //             <p className="conseilTxt">Comment choisir la raquette de padel qui me convient ?</p>
        //             <a className="conseilLink" href='#'>Lire plus</a>
        //         </div>
        //     </li>
        // </ul>