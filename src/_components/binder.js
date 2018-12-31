import React from 'react';
import {HTMLTable} from "@blueprintjs/core";

class Binder extends React.Component{

    render() {
        const binder = "";
        let manaCost;
        function ReplaceWith(costString){
            return costString
                .replace('/[{}]/g', ' ')
                .split(' ')
                //TODO: why is it picking the alts?
                .map((elem) => {
                    switch(elem){
                        case 'G':
                            return manaCost = <img key='manaG' className="mana" alt='manaG' src='../_resources/ico/mana-g.png'/>;
                        case 'G/W':
                            return manaCost = <img key='manaGW' className="mana" alt='manaGW'  src='../_resources/ico/mana-gw.png'/>;
                        case 'G/U':
                            return manaCost = <img key='manaGU' className="mana" alt='manaGU'  src='../_resources/ico/mana-gu.png'/>;
                        case 'R':
                            return manaCost = <img key='manaR' className="mana" alt='manaR'  src='../_resources/ico/mana-r.png'/>;
                        case 'R/G':
                            return manaCost = <img key='manaRG' className="mana" alt='manaRG'  src='../_resources/ico/mana-rg.png'/>;
                        case 'R/W':
                            return manaCost = <img key='manaRW' className="mana" alt='manaRW'  src='../_resources/ico/mana-rw.png'/>;
                        case 'B':
                            return manaCost = <img key='manaB' className="mana" alt='manaB'  src='../_resources/ico/mana-b.png'/>;
                        case 'B/G':
                            return manaCost = <img key='manaBG' className="mana" alt='manaBG'  src='../_resources/ico/mana-bg.png'/>;
                        case 'B/R':
                            return manaCost = <img key='manaBR' className="mana" alt='manaBR'  src='../_resources/ico/mana-br.png'/>;
                        case 'W':
                            return manaCost = <img key='manaW' className="mana"  alt='manaW'  src='../_resources/ico/mana-w.png'/>;
                        case 'W/B':
                            return manaCost = <img key='manaWB' className="mana" alt='manaWB'  src='../_resources/ico/mana-wb.png'/>;
                        case 'W/U':
                            return manaCost = <img key='manaWU' className="mana" alt='manaWU'  src='../_resources/ico/mana-wu.png'/>;
                        case 'U':
                            return manaCost = <img key='manaU' className="mana" alt='manaU'  src='../_resources/ico/mana-u.png'/>;
                        case 'U/R':
                            return manaCost = <img key='manaUR' className="mana" alt='manaUR'  src='../_resources/ico/mana-ur.png'/>;
                        case 'U/B':
                            return manaCost = <img key='manaUB' className="mana" alt='manaUB'  src='../_resources/ico/mana-ub.png'/>;
                        default:
                            return manaCost = null
                    }
                })}
        let ownedCards = this.props.cardInfo.map(
            (cards,index) => (
                <tr>
                    <td key={index.stock}>{binder.stock}</td>
                    <td key={index.manacost}>
                        {ReplaceWith(`${binder.manaCost}`)}{manaCost}
                    </td>
                    <td key={index.id}>{binder.types}</td>
                    <td key={index.cmc}>{binder.cmc}</td>
                    {this.props.logStatus === 2 &&
                    <td key={index.price}>
                       AA
                    </td>
                    }
                </tr>
            ));
        return (
            <div>
                <div>
                    Table for things i already have
                    <HTMLTable striped bordered>
                        <tbody>
                            <tr>
                                <th>Stock</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>cmc</th>
                                <th>Price</th>
                                <th>Up for sale</th>
                            </tr>
                            {ownedCards}
                        </tbody>
                    </HTMLTable>
                </div>
                <div>
                    Table for stuff up for sale
                </div>
            </div>
        );
    }
}

export default Binder