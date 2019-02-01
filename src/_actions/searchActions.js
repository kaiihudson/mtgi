import { FETCH_CARD_DETAILS, FETCH_CARDS } from "./types";
import {startLoading, stopLoading} from './mainPageActions'

export const fetchCards = ( searchFor ) => dispatch => {
    dispatch(startLoading());
    fetch(`https://api.magicthegathering.io/v1/cards/?${searchFor}`)
        .then(rawCards => rawCards.json())
        .then(fixedCards => dispatch({
            type: FETCH_CARDS,
            payload: fixedCards.cards
        }))
        .then(()=>dispatch(stopLoading()))
};

export const fetchCardDetails = ( cardId ) => dispatch => {
    dispatch(startLoading());
    fetch(`https://api.magicthegathering.io/v1/cards/?id=${cardId}`)
        .then(rawCard => rawCard.json())
        .then(fixedCard => dispatch ({
            type: FETCH_CARD_DETAILS,
            payload: fixedCard.cards && fixedCard.cards.length > 0 ? fixedCard.cards[0] : null
        }))
        .then(()=>dispatch(stopLoading()))
};
