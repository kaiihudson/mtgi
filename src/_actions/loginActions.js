import { LOGIN, LOGOUT } from "./types";
export const loginStatus = {
    LOGGED_IN: 'logged in',
    LOG_ERROR: 'error',
    LOGGED_OUT: 'logged out' 
}

export const logIn = ( loginData ) => dispatch => {
    fetch('http://localhost:3001/user/login',
        {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(loginData)
    })
        .then(res => res.json())
        .then(data => {
            
        })
        .then(data => {
            let payload;
            if (data.token && data.dateExpire > new Date()){
                payload = {
                    status: loginStatus.LOGGED_IN,
                    loginData: data
                }
            }
            else{
                payload={
                    status: loginStatus.LOG_ERROR
                }
            }
            dispatch({
                type: LOGIN,
                payload
            })
        })
};

export const logOut = ( ) => dispatch => {
    fetch('http://localhost:3001/user/logout',
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
