import axiosWithAuth from '../utils/axiosAuth'

export const FETCH_FRIEND_START = 'FETCH_FRIEND_START'
export const FETCH_FRIEND_SUCCESS = 'FETCH_FRIEND_SUCCESS'
export const FETCH_FRIEND_FAILURE = 'FETCH_FRIEND_FAILURE'
export const getFriends = () => dispatch => {
    dispatch({ type: FETCH_FRIEND_START })
   axiosWithAuth()
    .get('http://localhost:5000/api/friends', {
        headers: { Authorization: localStorage.getItem('token') }
    })
    .then(res => {
        dispatch({ type: FETCH_FRIEND_SUCCESS, payload: res.data.data })
    })
    .catch(err => {
        console.log(err.response)
        dispatch({ type: FETCH_FRIEND_FAILURE, payload: err.response })
    })
}