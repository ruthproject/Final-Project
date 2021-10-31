
import { SET_CURRENT } from "../actions/student.action"
import { GET_STUDENTS } from "../actions/student.action"
import { keyBy } from 'lodash';

const initialstate = {
    students: {},
    curretStudent: 0
}

export default function reducer (state = initialstate, action: any) {
    switch (action.type) {
        case GET_STUDENTS: return { ...state, students: keyBy(action.payload, (student) => student.StudentId) }
        case SET_CURRENT: return { ...state, curretStudent: action.payload }
        default:return state;
    }
}