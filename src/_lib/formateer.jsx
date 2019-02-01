import React from 'react'
import Resources from '../_resources/ico/index'

export function replaceCostWithImage(costString){
    return (costString || '')
        .split(/[{}]/g,)
        .map((elem, index) => {
                switch(elem){
                    case 'T':
                        return <img key={index} className="mana" alt='manaT' src={Resources.manat}/>;
                    case 'S':
                        return <img key={index} className="mana" alt='manaS' src={Resources.manas}/>;
                    case 'Q':
                        return <img key={index} className="mana" alt='manaQ' src={Resources.manaq}/>;
                    case 'P':
                        return <img key={index} className="mana" alt='manaP' src={Resources.manap}/>;
                    case 'X':
                        return <img key={index} className="mana" alt='manaX' src={Resources.manax}/>;
                    case 'Y':
                        return <img key={index} className="mana" alt='manaY' src={Resources.manay}/>;
                    case 'Z':
                        return <img key={index} className="mana" alt='manaZ' src={Resources.manaz}/>;
                    case 'G':
                        return <img key={index} className="mana" alt='manaG' src={Resources.manag}/>;
                    case 'G/P':
                        return <img key={index} className="mana" alt='manaGP' src={Resources.managp}/>;
                    case 'G/W':
                        return <img key={index} className="mana" alt='manaGW' src={Resources.managw}/>;
                    case 'G/U':
                        return <img key={index} className="mana" alt='manaGU' src={Resources.managu}/>;
                    case 'R':
                        return <img key={index} className="mana" alt='manaR' src={Resources.manar}/>;
                    case 'R/P':
                        return <img key={index} className="mana" alt='manaRP' src={Resources.manarp}/>;
                    case 'R/G':
                        return <img key={index} className="mana" alt='manaRG' src={Resources.manarg}/>;
                    case 'R/W':
                        return <img key={index} className="mana" alt='manaRW' src={Resources.manarw}/>;
                    case 'B':
                        return <img key={index} className="mana" alt='manaB' src={Resources.manab}/>;
                    case 'B/P':
                        return <img key={index} className="mana" alt='manaBP' src={Resources.manabp}/>;
                    case 'B/G':
                        return <img key={index} className="mana" alt='manaBG' src={Resources.manabg}/>;
                    case 'B/R':
                        return <img key={index} className="mana" alt='manaBR' src={Resources.manabr}/>;
                    case 'W':
                        return <img key={index} className="mana" alt='manaW' src={Resources.manaw}/>;
                    case 'W/B':
                        return <img key={index} className="mana" alt='manaWB' src={Resources.manawb}/>;
                    case 'W/P':
                        return <img key={index} className="mana" alt='manaWP' src={Resources.manawp}/>;
                    case 'W/U':
                        return <img key={index} className="mana" alt='manaWU' src={Resources.manawu}/>;
                    case 'U':
                        return <img key={index} className="mana" alt='manaU' src={Resources.manau}/>;
                    case 'U/P':
                        return <img key={index} className="mana" alt='manaU' src={Resources.manaup}/>;
                    case 'U/R':
                        return <img key={index} className="mana" alt='manaUR' src={Resources.manaur}/>;
                    case 'U/B':
                        return <img key={index} className="mana" alt='manaUB' src={Resources.manaub}/>;
                    case '2/B':
                        return <img key={index} className="mana" alt='mana2B' src={Resources.mana2r}/>;
                    case '2/G':
                        return <img key={index} className="mana" alt='mana2G' src={Resources.mana2b}/>;
                    case '2/R':
                        return <img key={index} className="mana" alt='mana2R' src={Resources.mana2g}/>;
                    case '2/U':
                        return <img key={index} className="mana" alt='mana2U' src={Resources.mana2u}/>;
                    case '2/W':
                        return <img key={index} className="mana" alt='mana2W' src={Resources.mana2w}/>;
                    case '1':
                        return <img key={index} className="mana" alt='mana1' src={Resources.mana1}/>;
                    case '2':
                        return <img key={index} className="mana" alt='mana2' src={Resources.mana2}/>;
                    case '3':
                        return <img key={index} className="mana" alt='mana3' src={Resources.mana3}/>;
                    case '4':
                        return <img key={index} className="mana" alt='mana4' src={Resources.mana4}/>;
                    case '5':
                        return <img key={index} className="mana" alt='mana5' src={Resources.mana5}/>;
                    case '6':
                        return <img key={index} className="mana" alt='mana6' src={Resources.mana6}/>;
                    case '7':
                        return <img key={index} className="mana" alt='mana7' src={Resources.mana7}/>;
                    case '8':
                        return <img key={index} className="mana" alt='mana8' src={Resources.mana8}/>;
                    case '9':
                        return <img key={index} className="mana" alt='mana9' src={Resources.mana9}/>;
                    case '10':
                        return <img key={index} className="mana" alt='mana10' src={Resources.mana10}/>;
                    case '11':
                        return <img key={index} className="mana" alt='mana11' src={Resources.mana11}/>;
                    case '12':
                        return <img key={index} className="mana" alt='mana12' src={Resources.mana12}/>;
                    case '13':
                        return <img key={index} className="mana" alt='mana13' src={Resources.mana13}/>;
                    case '14':
                        return <img key={index} className="mana" alt='mana14' src={Resources.mana14}/>;
                    case '15':
                        return <img key={index} className="mana" alt='mana15' src={Resources.mana15}/>;
                    case '16':
                        return <img key={index} className="mana" alt='mana16' src={Resources.mana16}/>;
                    case '17':
                        return <img key={index} className="mana" alt='mana17' src={Resources.mana17}/>;
                    case '18':
                        return <img key={index} className="mana" alt='mana18' src={Resources.mana18}/>;
                    case '19':
                        return <img key={index} className="mana" alt='mana19' src={Resources.mana19}/>;
                    case '20':
                        return <img key={index} className="mana" alt='mana20' src={Resources.mana20}/>;
                    default:
                        return elem
                    }
            })
}