import React, {ReactElement, useReducer} from 'react';

interface User{
  //todo fill as DB 
  id: string;
}

interface ContextType{
  user?: User;
}

const reducer = (state : any, action: any) =>{
switch(action.type){
  case "SET_USER": return {...state, user: action.payload}
  default:
    return state;
}
}

export const ManagmentProjectsContext = React.createContext<any>({});

const intialState={user: {id: '7'}};
//todo change to props childern 
 export const ProjectsProvider = (props: React.PropsWithChildren<any>) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  return <ManagmentProjectsContext.Provider value={{state, dispatch}} >
    {props.children}
  </ManagmentProjectsContext.Provider>
 }