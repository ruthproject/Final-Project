import {Table,Paper,TableBody,TableCell,TableRow,TableContainer,TableHead,Link} from "@material-ui/core";
import React, { useCallback } from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Api from "../../Api";
import { fetchStudent } from '../../redux/actions/student.action'
import { setCurrentProject } from '../../redux/actions/project.action'
import { setStartHour } from '../../redux/actions/assistanceHour.action'
import EditDetails from "../EditDetails/EditDetails";
import Project from "../Project/Project";
import { useHistory } from 'react-router-dom';
import AddNote from "../AddNote/AddNote";
import DisplayTable from "../DisplayTable/DisplayTable";
import { ProjectsProvider } from "./Provider";


const AllProjectAss = (props: { currenAssistant: any, currentProjectId: number, students: {}, fetchStudent: any, setCurrentProject: any, setStartHour: any }) => {

    

    const history = useHistory();
    const [projectByAss, SetProjectByAss]: any = useState([])
    const [trueFalse, setTrueFalse]: any = useState(false)
    
    const project_ByAss = async () => {
        SetProjectByAss(await Api({ url: `AssistantInProject/GetProjectToAss?id=${props.currenAssistant.AssistantId}` }))
    }
    useEffect(() => {
        // console.log(props.currenAssistant)
        console.log("projectid",props.currentProjectId)
        project_ByAss();
        props.fetchStudent();
    }, [])
    

   

  
   const projectdetails= (id:number) =>{
    //    console.log(id)
    props.setCurrentProject(id);
  
        // history.push(`/Project/?id=${id}`);
        history.push('/Project');
        };
    return (

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
                                        <button onClick={() => projectdetails(item['ProjectId'])}>
                                            {
                                                <TableCell >{item['ProjectName']}</TableCell>
                                            }
                                            {
                                                <TableCell >{item['Status'] == true ? 'מאושר' : 'לא'}</TableCell>
                                            }
                                          
                                        </button>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                
            </Paper> 
           
          
            <ProjectsProvider>
          <EditDetails /> 
          </ProjectsProvider>
         
        </div>
    )
}

export default connect(
    (state: any) => {
        return {
            currenAssistant: state.assistants.assistants[state.assistants.curretAssistant],
            students: state.students.students,
            currentProjectId: state.projects.currentPtoject,
        }
    },
    {
        fetchStudent, setCurrentProject, setStartHour
    }
)(AllProjectAss);
