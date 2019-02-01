export const actions = {
    START_LOADING: 'START_LOADING',
    STOP_LOADING: 'STOP_LOADING'
}

export function startLoading(){
    return {
        type: actions.START_LOADING
    }
}

export function stopLoading(){
    return{
        type : actions.STOP_LOADING
    }
}