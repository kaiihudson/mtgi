import { LOGIN, LOGOUT } from "./types";
import { startLoading, stopLoading } from "./mainPageActions";

export const loginStatus = {
    LOGGED_IN: 'LOGGED_IN',
    LOG_ERROR: 'LOG_ERROR',
    LOGGED_OUT: 'LOGGED_OUT'
};

export const logIn = ( loginData ) => dispatch => {
    dispatch(startLoading());
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
        .then(()=> dispatch(stopLoading()))
};
export const logOut = ( leaving ) => dispatch => {
    dispatch(startLoading());
    fetch('http://localhost:3001/user/logout',
        {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify( leaving )
        })
        .then(cards => cards.json())
        .then(leaving => dispatch({
            type: LOGOUT,
            payload: leaving
        }))
        .then(()=>(dispatch(stopLoading())))
};
