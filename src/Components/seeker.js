import React from "react";
import { connect } from 'react-redux';
import { fetchCards, fetchCardDetails } from "../Actions/searchActions";

class Seeker extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchElems: {
                name: '',
                type: '',
                color: '',
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

    handleDetails = (e) => {
        e.preventDefault();
        let cardId = e.target.value;
        // call action
        this.props.fetchCardDetails(CardId);
    };

    render(){
        const cardResults = this.props.cardInfo.map(
            (cards,index) => (
                <tbody>
                <tr>
                    <th>Name</th>
                    <th>Mana Cost</th>
                    <th>Type</th>
                    <th>Thumbnail</th>
                    <th colSpan={2}>Action</th>
                </tr>
                <tr>
                    <td key={index.name}>{cards.name}</td>
                    <td key={index.manaCost}>{cards.manaCost}</td>
                    <td key={index.type}>{cards.type}</td>
                    <td key={index}>
                        <img className="thumbnail" src={cards.imageUrl} alt="thumbnail"/>
                    </td>
                    {this.props.login === 2 && <td><button value={cards.id}>+</button></td>}
                    <td><button value={cards.id} onClick={this.handleDetails}>Details</button></td>
                </tr>
                </tbody>
        ));

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
        )

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
                                    {cardResults}
                                </table>
                            </div>
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

export default connect(mapStateToProps, {fetchCards}) (Seeker)