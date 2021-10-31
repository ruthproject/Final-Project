import AllProjectAss from './AllProjectAss'
import { Route, Switch } from 'react-router-dom'
import Timer from './timer';
import End from './end';
// @ts-ignore
import Popup from 'react-popup'
import { useEffect } from 'react';
import { withRouter } from 'react-router';


  const Header=(props: any)=> {
   
    const exsist = () => {
        props.history.push('/')
    } 
    const watching = () => {
        props.history.push('/all-projects')
    } 
    const update = () => {
        props.history.push('/ProjectsProvider/EditDetails')
    }
    return (
        <>
            <button onClick={exsist}>יציאה</button>
            <button onClick={watching}>צפיה בפרויקטים</button>
            <button onClick={update}>עדכון פרטים</button>
            <h1>שלום מתרגלת יקרה !</h1>
            {props.begin ? <Timer begin={props.begin} /> : null}
        </>
    )

}

export default withRouter(Header)