import { FETCH_CARD_DETAILS, FETCH_CARDS } from "./types";
import {startLoading, stopLoading} from './mainPageActions'
export const fetchCards = ( searchFor ) => dispatch => {
    dispatch(startLoading())
    fetch(`https://api.magicthegathering.io/v1/cards/?${searchFor}`)
        .then(cards => cards.json())
        .then(cards => dispatch({
            type: FETCH_CARDS,
            payload: cards.cards
        }))
        .then(()=>dispatch(stopLoading()))
};

export const fetchCardDetails = ( cardId ) => dispatch => {
    dispatch(startLoading())
    fetch(`https://api.magicthegathering.io/v1/cards/?id=${cardId}`)
        .then(cards => cards.json())
        .then(card => dispatch ({
            type: FETCH_CARD_DETAILS,
            payload: card.cards && card.cards.length > 0 ? card.cards[0] : null 
        }))
        .then(()=>dispatch(stopLoading()))
};

//export cosnt AddCard = (UserId, CardId) => dispatch => {
    // database plug
    // fetch()
    //
//}