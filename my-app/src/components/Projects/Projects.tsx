import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DisplayTable from '../DisplayTable/DisplayTable';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function Projects() {

  const classes = useStyles();
 const [assistantsDB, setAssistantsDB] = useState([]);
  return (
    <>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard"  />
      </form>
      <DisplayTable headers={ assistantsDB[0]? Object.keys(assistantsDB[0]):null} rows={assistantsDB}></DisplayTable>

        </>
  );
}

export default Projects; 

