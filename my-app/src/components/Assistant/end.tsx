import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import { connect } from 'react-redux'
// import Popup from 'react-popup' 

//@ts-ignore
import Popup from 'reactjs-popup';
import Api from '../../Api'
import HelpLogin from '../../index.login';
import BasicModal from '../Modal';

const End = (props: { setBegin: any, id: number, currentProjectId: number, startHour: any, currentAssistantId: number }) => {
    const [open, setOpen] = useState(false);

    const submit = () => {
        if (valuePercentage.percentage > 0) {

            const body = { AssistantId: props.currentAssistantId, BeginningTime: props.startHour, EndTime: new Date(), ProjectId: props.currentProjectId, finishPercentage: valuePercentage }
            console.log(body);
            hour(Object(body));

        }
        else
            alert(' לא הכנסת ערך')
    }

    const hour = async ({ body = {} }) => {
        await Api({ url: ` AssistantHour?id=${props.currentAssistantId}`, method: 'POST', body: body })
    }
    
    const [updatePercentage, submitEnd, valuePercentage] = HelpLogin(
        {
            percentage: 0
        }
        , submit
    )

    const style = {

    }


    return (<>
        <Button onClick={() => {
            setOpen(true)
            props.setBegin(false)
        }}>סיום הנחיה</Button>
        <BasicModal open={open} setOpen={setOpen} />
    </>)


    // return (
    //     <>
    //         <button onClick={() => {
    //             setOpen(true)
    //             props.setBegin(false)
    //         }}>סיום הנחיה</button>

    //         {
    //             <Popup className='popup-overlay'
    //             open={open}closeOnDocumentClick
    //             // trigger={ <button onClick={() =>{
    //             //     debugger
    //             //     props.setBegin(false)}}>סיום הנחיה</button>}
    //             // modal
    //             // nested
    //         >
    //             {(close: any) => (
    //                 <div className="modal">
    //                     <button className="close" onClick={close}>
    //                         &times;
    //                     </button>
    //                     <div className="header"> end</div>
    //                     <div className="content">

    //                         <p>כמה התקדמנו?</p>
    //                         <input type="number"
    //                             placeholder='כמה אחוזים כבר עשינו בפרויקט'
    //                             name='percentage'
    //                             min='0'
    //                             onChange={updatePercentage}
    //                         // value={valuePercentage} 
    //                         />
    //                         <button onClick={submitEnd}>ok</button>

    //                     </div>
    //                     <div className="actions">

    //                         <button
    //                             className="button"
    //                             onClick={() => {
    //                                 console.log('modal closed ');
    //                                 close();
    //                             }}
    //                         >
    //                             close modal
    //                         </button>
    //                     </div>
    //                 </div>
    //             )}
    //         </Popup>}

    //     </>
    // )
}


export default connect(
    (state: any) => {
        return {
            currentProjectId: state.projects.currentPtoject,
            startHour: state.assistanceHour.startHour,
            currentAssistantId: state.assistants.curretAssistant
        }
    }
)(End)