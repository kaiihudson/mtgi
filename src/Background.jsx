import React from 'react';

class Background extends React.Component {
    constructor(props){
        super(props);
        this.state = {cardsImages: []}
    }
    componentDidMount(){
        fetch('https://api.magicthegathering.io/v1/cards/?type=basic land&set=BFZ')
            .then(cards => cards.json())
            .then(data => {
                this.setState({cardsImages: data.cards});
//            console.log("state", this.state.cardsImages);
            })
    }

    render(){
        return(
                <div className="container1">
                    {
                        this.state.cardsImages && this.state.cardsImages.map(
                            (card, index) => (
                                <div className="gridCell" key={index}>
                                    <img className="gridChild" alt="background" src={card.imageUrl} />
                                </div>
                            )
                        )
                    }
                </div>
        )
    }
}
export default Background
