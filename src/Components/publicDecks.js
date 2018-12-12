import React from "react";

class PublicDecks extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div>
                {this.props.logStatus === 2 &&
                <div>
                    <table>
                        <caption>Your Public decks:
                            {/*TODO: create decks per user with privacy settings*/}
                        </caption>
                        <tbody>
                        <tr>
                            <th>Identity</th>
                            <th>Popularity</th>
                            <th>Deck Name</th>
                            <th>A.M.C.</th>
                            <th>User</th>
                            <th>Public?</th>
                        </tr>
                        <tr>
                            <td>(B)+(W)</td>
                            <td> +1 </td>
                            <td>The great church of Orzhovia</td>
                            <td>3</td>
                            <td>KaiiHudson</td>
                            <td><input type="checkbox"/></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                }
                <div>
                    <table>
                        <caption> Top Decks (asIs)</caption>
                        {/*FIXME: work with a real database of cards tied to an user*/}
                        <tbody>
                        <tr>
                            <th>Identity</th>
                            <th>Popularity</th>
                            <th>Deck Name</th>
                            <th>A.M.C.</th>
                            <th>User</th>
                        </tr>
                        <tr>
                            <td>(B)+(W)</td>
                            <td> +1 </td>
                            <td>The great church of Orzhovia</td>
                            <td>3</td>
                            <td>KaiiHudson</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default PublicDecks;