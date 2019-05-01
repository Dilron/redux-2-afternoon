import axios from 'axios'

const initialState = {
    email: null,
    firstName: null,
    lastName: null
}

const REQUEST_USER_DATA = 'REQUEST_USER_DATA'

export const requestUserData = () => {
    let action = axios.get('/auth/user-data').then(res => res.data)
    console.log(action)
    return {
        type: REQUEST_USER_DATA,
        payload: action
    }
}

export default function (state = initialState, action){
    switch (action.type){  
        case `${REQUEST_USER_DATA}_FULFILLED` :
            return {
                ...state,
                ...action.payload
            };
        default:
            return state
    }
}