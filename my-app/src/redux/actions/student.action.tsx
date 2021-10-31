import Api from "../../Api";


export const GET_STUDENTS = '[student]GET_STUDENTS'
export const SET_CURRENT = '[student]SET_CURRENT'


export  const getStudents=(data:{})=> {
    return {
        type: GET_STUDENTS,
        payload: data
    }
}
export function fetchStudent() {
    return async  (dispatch: any) =>{
        const response = await Api({url:'Students'})
        dispatch(getStudents(response));
    }
}
export const setCurrentStudent = (studentntId: Number) => {
    return {
        type: SET_CURRENT,
        payload: studentntId
    }
}