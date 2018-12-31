import React from 'react';
import {HTMLTable} from "@blueprintjs/core";
import { replaceCostWithImage } from '../_lib/formateer';

class Binder extends React.Component{

    render() {
        const binder = "";
        let ownedCards = this.props.cardInfo.map(
            (cards,index) => (
                <tr>
                    <td key={index.stock}>{binder.stock}</td>
                    <td key={index.manacost}>
                        {replaceCostWithImage(`${binder.manaCost}`)}
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