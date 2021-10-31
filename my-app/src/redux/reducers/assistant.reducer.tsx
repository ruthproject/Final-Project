
import { SET_CURRENT } from "../actions/assistant.action"
import { GET_ASSISTANTS } from "../actions/assistant.action"
import { keyBy } from 'lodash';

const initialstate = {
    assistants: {},
    curretAssistant: 0
}

export default function reducer (state = initialstate, action: any) {
    switch (action.type) {
        case GET_ASSISTANTS: return { ...state, assistants: keyBy(action.payload, (ass) => ass.AssistantId) }
        case SET_CURRENT: return { ...state, curretAssistant: action.payload }
        default:return state;
    }
}