import React from "react";
import { connect } from 'react-redux';
import { fetchCards, fetchCardDetails } from "../Actions/searchActions";

import Details from './details'
import {HTMLTable} from "@blueprintjs/core";

class Seeker extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchElems: {
                name: '',
                types: '',
                colors: '',
            },
            cardsToAdd: []
        };
    }

    handleChange = (index) => (e) => {
        this.setState({searchElems: {...this.state.searchElems, [index]: e.target.value}});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let searchFor = Object.keys(this.state.searchElems)
            .reduce(
                (accum, elem) =>
                    this.state.searchElems[elem] ? [...accum, `${ elem }=${ this.state.searchElems[elem] }`] : accum, []).join('&');
        // call action
        this.props.fetchCards(searchFor);
    };

    handleAdd = (e) => {
        e.preventDefault();
        let userName = this.props.login.username;
        let cardId = e.target.value;
        let cardName = e.target.name;
        // toCheck.push(this.props.CardInfo.name);
        console.log(`You tried to add ${cardId}, which translates to ${cardName}, and was requested by ${userName}`);
    };
    //TODO: call user's ID so i can know who's adding a card to it's repository
    handleDetails = (e) => {
        e.preventDefault();
        let cardId = e.target.value;
        // call action
        this.props.fetchCardDetails(cardId);
    };

    render(){
        let manaCost;
        function ReplaceWith(costString){
            return costString
                .replace('/[{}]/g', ' ')
                .split(' ')
                .map((elem) => {
                        switch(elem){
                            case 'G':
                                 return manaCost = <img key='manaG' className="mana" alt='manaG' src='../resources/ico/mana-g.png'/>;
                            case 'G/W':
                                return manaCost = <img key='manaGW' className="mana" alt='manaGW'  src='../resources/ico/mana-gw.png'/>;
                            case 'G/U':
                                return manaCost = <img key='manaGU' className="mana" alt='manaGU'  src='../resources/ico/mana-gu.png'/>;
                            case 'R':
                                return manaCost = <img key='manaR' className="mana" alt='manaR'  src='../resources/ico/mana-r.png'/>;
                            case 'R/G':
                                return manaCost = <img key='manaRG' className="mana" alt='manaRG'  src='../resources/ico/mana-rg.png'/>;
                            case 'R/W':
                                return manaCost = <img key='manaRW' className="mana" alt='manaRW'  src='../resources/ico/mana-rw.png'/>;
                            case 'B':
                                return manaCost = <img key='manaB' className="mana" alt='manaB'  src='../resources/ico/mana-b.png'/>;
                            case 'B/G':
                                return manaCost = <img key='manaBG' className="mana" alt='manaBG'  src='../resources/ico/mana-bg.png'/>;
                            case 'B/R':
                                return manaCost = <img key='manaBR' className="mana" alt='manaBR'  src='../resources/ico/mana-br.png'/>;
                            case 'W':
                                return manaCost = <img key='manaW' className="mana"  alt='manaW'  src='../resources/ico/mana-w.png'/>;
                            case 'W/B':
                                return manaCost = <img key='manaWB' className="mana" alt='manaWB'  src='../resources/ico/mana-wb.png'/>;
                            case 'W/U':
                                return manaCost = <img key='manaWU' className="mana" alt='manaWU'  src='../resources/ico/mana-wu.png'/>;
                            case 'U':
                                return manaCost = <img key='manaU' className="mana" alt='manaU'  src='../resources/ico/mana-u.png'/>;
                            case 'U/R':
                                return manaCost = <img key='manaUR' className="mana" alt='manaUR'  src='../resources/ico/mana-ur.png'/>;
                            case 'U/B':
                                return manaCost = <img key='manaUB' className="mana" alt='manaUB'  src='../resources/ico/mana-ub.png'/>;
                            default:
                                return manaCost = null
                        }
                    })
        }
        let cardResults;
        if(this.props.cardInfo === "{cards: []}"){
            cardResults =
                <tr>
                    <td colSpan={6}>There's no data to be shown</td>
                </tr>
        } else {cardResults = this.props.cardInfo.map(
                    (cards,index) => (
                    <tr>
                        <td key={index.name}>{cards.name}</td>
                        <td key={index.manaCost}>
                            {ReplaceWith(`${cards.manaCost}`)}{manaCost}
                        </td>
                        <td key={index.id}>{cards.types}</td>
                        <td key={index}>
                            <img className="thumbnail" src={cards.imageUrl} alt="thumbnail"/>
                        </td>
                            {this.props.logStatus === 2 &&
                                <td>
                                    <button value={cards.id} name={cards.name} onClick={this.handleAdd}>+</button>
                                </td>
                            }
                        <td>
                            <button value={cards.id} onClick={this.handleDetails}>Details</button>
                        </td>
                    </tr>

        ))}
        return(
            <div>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.searchElems.name} placeholder="Name" onChange={this.handleChange('name')}/>
                        <input type="text" value={this.state.searchElems.type} placeholder="Type" onChange={this.handleChange('type')}/>
                        <input type="text" value={this.state.searchElems.colorIdentity} placeholder="Color" onChange={this.handleChange('colorIdentity')}/>
                        <input type="submit"/>
                    </form>

                    <div key="output" className="resultOutput">
                        <div>
                            {/*this is where the results from the search should happen*/}
                            <p className="search">
                                Search results:
                                <HTMLTable striped bordered>
                                    <tbody>
                                        <tr>
                                            <th>Name</th>
                                            <th>Mana Cost</th>
                                            <th>Type</th>
                                            <th>Thumbnail</th>
                                            <th colSpan={2}>Action</th>
                                        </tr>
                                        {cardResults}
                                    </tbody>
                                </HTMLTable>
                            </p>
                            {this.props.logStatus === 2 &&
                                this.state.cardsToAdd !== [] &&
                                    <div>
                                        {/*this is where cards to be added will be displayed*/}
                                        Cards to be added to Inventory:
                                        <form>
                                            <table>
                                                <tbody>
                                                <tr>
                                                    <td>HOW!?</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </form>

                                    </div>}
                            {/*this is where the results from the details should happen*/}
                            <div className="details">
                                    <Details />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cardInfo: state.cardInfo.cards,
    cardDetails: state.cardDetails.details
});

export default connect(mapStateToProps, {fetchCards, fetchCardDetails}) (Seeker)