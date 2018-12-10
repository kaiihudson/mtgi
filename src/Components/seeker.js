import React from "react";
import { connect } from 'react-redux';
import { fetchCards, fetchCardDetails } from "../Actions/searchActions";

class Seeker extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchElems: {
                name: '',
                types: '',
                colors: '',
            }
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
        let cardId = e.target.value;
        let cardName = e.target.name;
        // toCheck.push(this.props.CardInfo.name);
        console.log(`You tried to add ${cardId}, which translates to ${cardName}`);
    }
    //TODO: call user's ID so i can know who's adding a card to it's repository
    handleDetails = (e) => {
        e.preventDefault();
        let cardId = e.target.value;
        // call action
        this.props.fetchCardDetails(cardId);
    };

    render(){
        let cardResults
        if(this.props.cardInfo === {cards: []}){
            cardResults = <tr>
                                    <td colSpan={6}>There's no data to be shown</td>
                                </tr>
        } else {cardResults = this.props.cardInfo.map(
                    (cards,index) => (
                    <tr>
                        <td key={index.name}>{cards.name}</td>
                        <td key={index.manaCost}>{cards.manaCost}</td>
                        <td key={index.type}>{cards.types}</td>
                        <td key={index}>
                            <img className="thumbnail" src={cards.imageUrl} alt="thumbnail"/>
                        </td>
                            {this.props.login === 2 &&
                                <td>
                                    <button value={cards.id} name={cards.name} onClick={this.handleAdd}>+</button>
                                </td>
                            }
                        <td>
                            <button value={cards.id} onClick={this.handleDetails}>Details</button>
                        </td>
                    </tr>

        ))};

        const cardDetails = this.props.cardDetails.map(
            (card,index) =>(
                <tbody>
                <tr key={index.image}>
                    <td rowSpan={7}>
                        <img className="semi" src={card.imageUrl} alt="MidImage"/>
                    </td>
                </tr>
                <tr>
                    <td> </td>
                    <td>NAME</td>
                    <td key={index.name}>{card.name}</td>
                </tr>
                <tr>
                    <td> </td>
                    <td>TYPE</td>
                    <td key={index.type}>{card.type}</td>
                </tr>
                <tr key={index.manaCost}>
                    <td> </td>
                    <td>MANA COST</td>
                    <td>{card.manaCost}</td></tr>
                <tr key={index.cmc}>
                    <td> </td>
                    <td>Converted Mana Cost</td>
                    <td>{card.cmc}</td>
                </tr>
                <tr key={index}>
                    <td> </td>
                    <td> Stats</td>
                    <td>{card.power}/{card.toughness}</td>
                </tr>
                <tr key={index.test}>
                    <td> </td>
                    <td>Text</td>
                    <td>{card.text}</td>
                </tr>
                </tbody>
            )
        );

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
                            <div className="search">
                                Search results:
                                <table>
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
                                </table>
                            </div>
                            {this.props.login === 2 &&
                                    <div>
                                        {/*this is where cards to be added will be displayed*/}
                                        Cards to be added to Inventory:


                                    </div>}
                            {/*this is where the results from the details should happen*/}
                            <div className="detail">
                                <table>
                                    {cardDetails}
                                </table>
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