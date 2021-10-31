
import { SET_CURRENT } from "../actions/assistant.action"
import { GET_ASSISTANTS } from "../actions/assistant.action"
import { keyBy } from 'lodash';
import { SET_START_HOUR } from "../actions/assistanceHour.action";

const initialstate = {
    startHour: {}
}

export default function reducer (state = initialstate, action: any) {
    switch (action.type) {
        case SET_START_HOUR: return {...state,startHour:new Date()}
        default:return state;
    }
}