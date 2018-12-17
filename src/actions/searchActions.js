import { FETCH_CARD_DETAILS, FETCH_CARDS } from "./types";

export const fetchCards = ( searchFor ) => dispatch => {
    fetch(`https://api.magicthegathering.io/v1/cards/?${searchFor}`)
        .then(cards => cards.json())
        .then(cards => dispatch({
            type: FETCH_CARDS,
            payload: cards.cards
        }))
};

export const fetchCardDetails = ( cardId ) => dispatch => {
    fetch(`https://api.magicthegathering.io/v1/cards/?id=${cardId}`)
        .then(cards => cards.json())
        .then(card => dispatch ({
            type: FETCH_CARD_DETAILS,
            payload: card.cards
        }))
};

//export cosnt AddCard = (UserId, CardId) => dispatch => {
    // database plug
    // fetch()
    //
//}