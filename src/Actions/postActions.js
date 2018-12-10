import { FETCH_CARDS_IMAGES } from "./types";

export const fetchCardsImages = () => dispatch => {
    fetch('https://api.magicthegathering.io/v1/cards/?type=basic land&set=ZEN,BFZ')
        .then(cards => cards.json())
        .then(cardData => dispatch({
                type: FETCH_CARDS_IMAGES,
                payload: cardData.cards
                })
        )
    };
