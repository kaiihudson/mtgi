import {FETCH_CARDS, LOGIN, LOGOUT} from "./types";

const userData = [this.state.userData.username, this.state.userData.password]

export const Login = ( searchFor ) => dispatch => {
    fetch('http://localhost:3001/user/login',
        {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(Data)
    })
        .then(cards => cards.json())
        .then(loginData => dispatch({
            type: LOGIN,
            payload: userData
        }))
};