import React from "react";
import {connect} from "react-redux";
import {fetchCardDetails} from "../Actions/searchActions";
import {HTMLTable} from "@blueprintjs/core";

class Details extends React.Component {
    render() {
        const
            cardDetails = this.props.cardDetails.map(
                (card, index) => (
                    <tbody>
                    <tr key={index.image}>
                        <td rowSpan={7}>
                            <img className="semi" src={card.imageUrl} alt="MidImage"/>
                        </td>
                    </tr>
                    <tr>
                        <td />
                        <td>NAME</td>
                        <td key={index.name}>{card.name}</td>
                    </tr>
                    <tr>
                        <td/>
                        <td>TYPE</td>
                        <td key={index.type}>{card.type}</td>
                    </tr>
                    <tr key={index.manaCost}>
                        <td/>
                        <td>MANA COST</td>
                        <td>{card.manaCost}</td>
                    </tr>
                    <tr key={index.cmc}>
                        <td/>
                        <td>Converted Mana Cost</td>
                        <td>{card.cmc}</td>
                    </tr>
                    <tr key={index}>
                        <td/>
                        <td> Stats</td>
                        <td>{card.power}/{card.toughness}</td>
                    </tr>
                    <tr key={index.test}>
                        <td/>
                        <td>Text</td>
                        <td>{card.text}</td>
                    </tr>
                    </tbody>
                )
            );
        return (
            <HTMLTable bordered striped>
                {cardDetails}
            </HTMLTable>

            )
    }
}

const mapStateToProps = state => ({
    cardDetails: state.cardDetails.details
});

export default connect(mapStateToProps, {fetchCardDetails})(Details)