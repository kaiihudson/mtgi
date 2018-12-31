import React from 'react'
import Resources from '../_resources/ico/index'

export function replaceCostWithImage(costString){
    return (costString || '')
        .replace(/[{}]/g, ' ')
        .split(' ')
        .map((elem, index) => {
                switch(elem){
                    case 'G':
                         return <img key={index} className="mana" alt='manaG' src={Resources.manag}/>;
                    case 'G/W':
                        return <img key={index} className="mana" alt='manaGW'  src={Resources.managw}/>;
                    case 'G/U':
                        return <img key={index} className="mana" alt='manaGU'  src={Resources.managu}/>;
                    case 'R':
                        return <img key='manaR' className="mana" alt='manaR'  src='../_resources/ico/mana-r.png'/>;
                    case 'R/G':
                        return <img key='manaRG' className="mana" alt='manaRG'  src='../_resources/ico/mana-rg.png'/>;
                    case 'R/W':
                        return <img key='manaRW' className="mana" alt='manaRW'  src='../_resources/ico/mana-rw.png'/>;
                    case 'B':
                        return  <img key='manaB' className="mana" alt='manaB'  src='../_resources/ico/mana-b.png'/>;
                    case 'B/G':
                        return  <img key='manaBG' className="mana" alt='manaBG'  src='../_resources/ico/mana-bg.png'/>;
                    case 'B/R':
                        return  <img key='manaBR' className="mana" alt='manaBR'  src='../_resources/ico/mana-br.png'/>;
                    case 'W':
                        return  <img key='manaW' className="mana"  alt='manaW'  src='../_resources/ico/mana-w.png'/>;
                    case 'W/B':
                        return  <img key='manaWB' className="mana" alt='manaWB'  src='../_resources/ico/mana-wb.png'/>;
                    case 'W/U':
                        return  <img key='manaWU' className="mana" alt='manaWU'  src='../_resources/ico/mana-wu.png'/>;
                    case 'U':
                        return  <img key='manaU' className="mana" alt='manaU'  src='../_resources/ico/mana-u.png'/>;
                    case 'U/R':
                        return  <img key='manaUR' className="mana" alt='manaUR'  src='../_resources/ico/mana-ur.png'/>;
                    case 'U/B':
                        return  <img key='manaUB' className="mana" alt='manaUB'  src='../_resources/ico/mana-ub.png'/>;
                    default:
                        return  null
                }
            })
}