
import { SET_CURRENT } from "../actions/user.action"
import { GET_USERS } from "../actions/user.action"
import { keyBy } from 'lodash';

const initialstate = {
    users: {},
    curretUser: 0
}

export default function reducer (state = initialstate, action: any) {
    switch (action.type) {
        case GET_USERS: return { ...state, users: keyBy(action.payload, (user) => user.UserId) }
        case SET_CURRENT: return { ...state, currentUser: action.payload }
        default:return state;
    }
}