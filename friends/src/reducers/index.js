import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    FETCH_FRIEND_START,
    FETCH_FRIEND_SUCCESS,
    FETCH_FRIEND_FAILURE
} from '../actions'

const initialState = {
    friends: [],
    err: '',
    isFetching: false,
    loggingIn: false,
    token: localStorage.getItem('token')
}

export const friendReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
        return {
            ...state,
            loggingIn: true
        }
        case LOGIN_SUCCESS:
        return {
            ...state,
            loggingIn: false,
            token: action.payload
        }
        case LOGIN_FAILURE:
        console.log(action);
        return {
            ...state,
            error: action.payload.data.error,
            errorStatusCode: action.payload.status,
            fetchingFriends: false
        }
        case FETCH_FRIEND_START:
            return {
                ...state,
                error: '',
                isFetching: true
            }
        case FETCH_FRIEND_SUCCESS:
            return {
                ...state,
                error: '',
                isFetching: false,
                friends: [...state.friends, ...action.payload]
            }
        case FETCH_FRIEND_FAILURE:
            return {
                ...state,
                error: '',
                isFetching: false
            }
        default:
            return state;
    }
}