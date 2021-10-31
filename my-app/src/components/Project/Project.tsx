import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core';
import DisplayTable from '../DisplayTable/DisplayTable';
import Api from '../../Api';
import AddNote from '../AddNote/AddNote';
import Begin from '../Assistant/begin'
import End from '../Assistant/end'
import { connect } from "react-redux";

// const classes = useStyles();

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 800,
  },
});
// const headers = ['שם', 'xx']
//  const rows = ['שם', 'xx']

// interface ProjectProps {
//   setBegin: any;
//   currentProjectId:number;
//   projectId: number;
  // headers:any;
  //  rows :any;
  //*** */
  // currentProjectId:any;
  // setCurrentProject: any;
  // setStartHour:any;
  // setBegin:any;


// }

interface ProjectData {
  name: string;
  student1: string;
  student2: string;
  status: number;
}

const headers = ['משעה', 'עד שעה', 'סה"כ'];
const id = 1;
 const Project = (props: {currentProjectId:number,setBegin: any}) => {

// const Project = (props: ProjectProps) => {
  const [assistantsHoursDB, setAssistantsHoursDB] = useState([]);
  const [remarks, setRemarksDB] = useState([]);
  const getAssistantHourss = async () => {
    try {
      console.log(props.currentProjectId)
      props.currentProjectId!=0 && setAssistantsHoursDB(await Api({ url: `AssistantHours?id=${props.currentProjectId}`}))

    }
    catch (error) {
      throw error;
    }
  }
  // const getRemarks = async () => {
  //   try {
  //     setRemarksDB(await Api({ url:  `AssistantHours?${props.currentProjectId}` }))

  //   }
  //   catch (error) {
  //     throw error;
  //   }
  // }
  useEffect(() => {
    getAssistantHourss();
    console.log('its ok!!');
  }, [])
  // useEffect(() => {
  //   // getRemarks();
  //   console.log('its works!!');
  // }, [])
  // end try
  const [projectData, setProjectData] = useState<ProjectData>();

  useEffect(() => {
    //todo replace with rest api - send projectId and get  project data 
    
    const data:any = async () => {
      setAssistantsHoursDB(await Api({ url: `AssistantInProject/GetProjectToAss?id=${props.currentProjectId}` }))
  }
    setProjectData(data);

  }, [props.currentProjectId]);
  const classes = useStyles();

  // const start = (id: number) => {
  //   if (props.currentProjectId === 0) {

  //       props.setCurrentProject(id);
  //       props.setStartHour();
  //       console.log(id);
  //       // setTrueFalse({ trueFalse: true });
  //       props.setBegin(true)
  //       // props.history.push('/start')
  //   }
  //   else alert(`you begin  projects${props.currentProjectId}`)

  // }

  // const end = (id: number) => {
  //   // props.setBegin(false)
  //   if (id === props.currentProjectId) {
  //       // console.log(id)
  //       // console.log(props.currentProjectId)
  //       props.setBegin(false)

  //       // setTrueFalse({ trueFalse: false });
  //       // props.history.push('/end')
  //   }
  //   else alert(`you begin  projects${props.currentProjectId}`)
  // }
  return (
    <>
     
      {projectData ?
        <>
          <h1>{projectData.name}</h1>
          <p>{projectData.student1}</p>
          <p>{projectData.student2}</p>
        </> : null
      }
      <br />
      <DisplayTable headers={assistantsHoursDB[0] ? Object.keys(assistantsHoursDB[0]) : null} rows={assistantsHoursDB} />

      {/* <button onClick={() => start(item['ProjectId'])}>התחלת הנחיה</button>
       <button onClick={() => end(item['ProjectId'])}>סיום הנחיה</button>
     */}
      <AddNote />
      <Begin id={props.currentProjectId} setBegin={props.setBegin} />
      <End id={props.currentProjectId} setBegin={props.setBegin} />
      {/* <DisplayTable headers={remarks[0]? Object.keys(remarks[0]):null}  rows={remarks} /> */}

    </>
  );

}
export default connect(
  (state: any) => {
    return {
      currentProjectId: state.projects.currentProject
    }
  }
)(Project);;


