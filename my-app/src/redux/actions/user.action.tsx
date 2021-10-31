import Api from "../../Api";


export const GET_USERS = '[user]GET_USERS'
export const SET_CURRENT = '[user]SET_CURRENT'


export  const getUsers=(data:{})=> {
    return {
        type: GET_USERS,
        payload: data
    }
}
export function fetchUser() {
    return async  (dispatch: any) =>{
        const response = await Api({url:'Users'})
        dispatch(getUsers(response));
    }
}
export const setCurrentUser = (userId: Number) => {
    return {
        type: SET_CURRENT,
        payload: userId
    }
}