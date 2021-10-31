
import { SET_CURRENT } from "../actions/project.action"
import { GET_PROJECTS_BY_ASS_ID } from "../actions/project.action"
import { GET_PROJECTS } from "../actions/project.action"
import { keyBy } from 'lodash';

const initialstate = {
    projects: {},
    // projectByAss: {},
    currentProject: 1
}

export default function reducer(state = initialstate, action: any) {
    switch (action.type) {
        case GET_PROJECTS: return { ...state, projects: keyBy(action.payload, (project) => project.ProjectId) }
        // case GET_PROJECTS_BY_ASS_ID: return { ...state, projectByAss: keyBy(action.payload, (project) => project.ProjectId) }
        case SET_CURRENT: return { ...state, currentPtoject: action.payload }
        default: return state;
    }
}