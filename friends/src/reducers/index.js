import {
    FETCH_FRIEND_START,
    FETCH_FRIEND_SUCCESS,
    FETCH_FRIEND_FAILURE
} from '../actions'

const initialState = {
    friends: [],
    err: '',
    isFetching: false
}

export const friendReducer = (state = initialState, action) => {
    switch (action.type) {
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