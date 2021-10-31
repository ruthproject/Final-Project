import AllProjectAss from './AllProjectAss'
import { Route, Switch } from 'react-router-dom'
import Timer from './timer';
import End from './end';


export default function Header(props:any) {
    console.log(props.begin)
    return (
        <>
            <h1>שלום מתרגלת יקרה !</h1>
             {  props.begin ?  <Timer begin={props.begin} />: null}
             
        </>
    )

}