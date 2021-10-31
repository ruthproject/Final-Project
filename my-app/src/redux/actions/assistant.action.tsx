import Api from "../../Api";


export const GET_ASSISTANTS = '[assistant]GET_ASSISTANTS'
export const SET_CURRENT = '[assistant]SET_CURRENT'


export  const getAssistants=(data:{})=> {
    return {
        type: GET_ASSISTANTS,
        payload: data
    }
}
export function fetchAssistant() {
    return async  (dispatch: any) =>{
        const response = await Api({url:'Assistants'})
        dispatch(getAssistants(response));
    }
}
export const setCurrentAss = (assistantId: Number) => {
    return {
        type: SET_CURRENT,
        payload: assistantId
    }
}