import React from 'react';
import { connect } from 'react-redux';
import { fetchCardsImages } from "./actions/BackgroundActions";

class Background extends React.Component {
    componentDidMount(){
        this.props.fetchCardsImages();
    }

    render(){
        const cardsImages = this.props.cardImages.map(
            (card, index) => (
                <div className="gridCell" key={index}>
                    <img className="gridChild" alt="background" src={card.imageUrl} />
                </div>
        ));
        return(
                <div className="container1">
                    {cardsImages}
                </div>
        )
    }
}

const mapStateToProps = state => ({
    cardImages: state.cardImages.images
});

export default connect(mapStateToProps, { fetchCardsImages })(Background)
