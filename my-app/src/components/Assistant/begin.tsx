import React from 'react'

import { setStartHour } from '../../redux/actions/assistanceHour.action'
import { connect } from "react-redux";



const Begin= (props:{id:number,setBegin:any,setStartHour: any})=>{

    const start = () => {
            props.setStartHour();
            props.setBegin(true)
    }

    return(
        <button onClick={() => start()}>התחלת הנחיה</button>
    )
}

export default connect(
    null,
    {
         setStartHour
    }
)(Begin);