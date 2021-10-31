import Api from "../../Api";
export const GET_PROJECTS = '[project]GET_PROJECTS'
export const GET_PROJECTS_BY_ASS_ID = '[project]GET_PROJECTS_BY_ASS_ID'
export const SET_CURRENT = '[project]SET_CURRENT'


export  const getProjects=(data:{})=> {
    return {
        type: GET_PROJECTS,
        payload: data
    }
}
export function fetchProject() {
    return async  (dispatch: any) =>{
        const response = await Api({url:'Projects'})
        dispatch(getProjects(response));
    }
}

export  const getProjectsByAss=(data:{})=> {
    return {
        type: GET_PROJECTS,
        payload: data
    }
}
export function fetchProjectByAss(assId:number) {
    return async  (dispatch: any) =>{
        const response = await Api({url:`Projects?id=${assId}`})
        dispatch(getProjects(response));
    }
}

export const setCurrentProject = (projectId: Number) => {
    return {
        type: SET_CURRENT,
        payload: projectId
    }
}