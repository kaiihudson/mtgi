import { LOGIN, LOGOUT } from "./types";

export const logIn = ( loginData ) => dispatch => {
    fetch('http://localhost:3001/user/logout',
        {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(loginData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: LOGIN,
            payload: isLoggedIn
        }))
};

export const logOut = ( ) => dispatch => {
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
            type: LOGOUT,
            payload: isLoggedIn
        }))
};
