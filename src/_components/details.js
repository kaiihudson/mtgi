import React from "react";
import {connect} from "react-redux";
import {fetchCardDetails} from "../_actions/searchActions";
import {HTMLTable} from "@blueprintjs/core";
import { replaceCostWithImage } from '../_lib/formateer';

class Details extends React.Component {
    renderEmptyCard = () => {
        return <tbody></tbody>
    }
    renderCardInfo = (card) => {
        return (
            <tbody>
                <tr>
                        <td rowSpan={7}>
                            <img className="semi" src={card.imageUrl} alt="MidImage"/>
                        </td>
                    </tr>
                    <tr>
                        <td />
                        <td>NAME</td>
                        <td>{card.name}</td>
                    </tr>
                    <tr>
                        <td/>
                        <td>TYPE</td>
                        <td>{card.type}</td>
                    </tr>
                    <tr >
                        <td/>
                        <td>MANA COST</td>
                        <td>{replaceCostWithImage(card.manaCost)}</td>
                    </tr>
                    <tr>
                        <td/>
                        <td>Converted Mana Cost</td>
                        <td>{card.cmc}</td>
                    </tr>
                    <tr>
                        <td/>
                        <td> Stats</td>
                        <td>{card.power}/{card.toughness}</td>
                    </tr>
                    <tr>
                        <td/>
                        <td>Text</td>
                        <td>{card.text}</td>
                    </tr>
                </tbody>
        )
    }

    render() {
        console.log(this.props.cardDetails)
        const card = this.props.cardDetails
        return (
            <HTMLTable bordered striped>
                {card ? this.renderCardInfo(card): this.renderEmptyCard()}
            </HTMLTable>
            )
    }
}

const mapStateToProps = state => ({
    cardDetails: state.cardDetails.details
});

export default connect(mapStateToProps, {fetchCardDetails})(Details)