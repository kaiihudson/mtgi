import React from 'react';

class Background extends React.Component {
    constructor(props){
        super(props);
        this.state = {cardsImages: [],}
    }
    componentWillMount(){
        fetch('https://api.magicthegathering.io/v1/cards/?type=basic land&set=BFZ')
            .then(cards => {
                return cards.json();
            }).then(data => {
                let cards = data.cards.map((card)=>{
                    return(
                        <div className="gridChild" key={card.cards}>
                            <img alt="background" src={card.imageUrl} />

                        </div>
                    )
                });
            this.setState({cardsImages: cards});
            console.log("state", this.state.cardsImages);
        })
    }
    render(){
        return(
                <div className="container1">
                    {this.state.cardsImages}
                </div>
        )
    }
}
export default Background
