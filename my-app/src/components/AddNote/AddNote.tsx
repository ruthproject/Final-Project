import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Table ,TableBody, TableCell,TableContainer,TableHead,TablePagination , TableRow} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 800,
  },
});



const remark = () => {
 
alert("add remark");
   

}
// const headers = ['שם', 'xx']
//  const rows = ['שם', 'xx']
const AddNote = (props:any)=>
{

  // const classes = useStyles();
  return (
    <button onClick={remark}>הוספת הערה</button>
   );

}
export default AddNote;
