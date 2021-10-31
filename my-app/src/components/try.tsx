import Api from "../Api";
import {Table,Paper,TableBody,TableCell,TableRow,TableContainer,TableHead,Link} from "@material-ui/core";
import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';
const Try=(props: { currenAssistant: any})=>{
    const [projectByAss, SetProjectByAss]: any = useState([])
    const project_ByAss = async () => {
        SetProjectByAss(await Api({ url: `AssistantInProject/GetProjectToAss?id=${props.currenAssistant.AssistantId}` }))
    }
    return(
        <div>
        <Paper >
           <TableContainer >
               <Table stickyHeader aria-label="sticky table">
                   <TableHead>
                       <TableRow>
                       {
                               <TableCell>{'פרויקט'}</TableCell>
                           }
                           {
                               <TableCell>{'סטטוס'}</TableCell>
                           }
                           {
                               <TableCell></TableCell>
                           }
                      
                       </TableRow>
                   </TableHead>
                   <TableBody>
                       {projectByAss?.map((item: any, i: any) => {
                           console.log(item['ProjectId'])
                           console.log(i)
                           return (
                               
                               <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                                   {/* <button onClick={() => projectdetails(item['ProjectId'])}> */}
                                       {
                                           <TableCell >{item['ProjectName']}</TableCell>
                                       }
                                       {
                                           <TableCell >{item['Status'] == true ? 'מאושר' : 'לא'}</TableCell>
                                       }
                                     
                                   {/* </button> */}
                               </TableRow>
                           );
                       })}
                   </TableBody>
               </Table>
           </TableContainer>
           
       </Paper> 
      
     
       </div>
    )
}
export default Try