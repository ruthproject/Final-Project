import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

const DisplayTable = (props: {headers:any; rows :any} ) => {

  const classes = useStyles();
  return (
    <>
<Paper >
                <TableContainer >
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                            {
                                    <TableCell>{'שעת התחלה'}</TableCell>
                                }
                                {
                                    <TableCell>{'שעת סיום'}</TableCell>
                                }
                                {
                                    
                                }
                           
                            </TableRow>
                        </TableHead>
                        <TableBody>
                  {Object.values(props.rows)?.map((item:any, i:any) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                        {Object.keys(item).map((key, index) => {
                          return (
                            <TableCell key={index}>
                              {item[key]?.toString()}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                </TableBody>
                    </Table>
                </TableContainer>
                
            </Paper>
            <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
             
                <TableBody>
                  {Object.values(props.rows)?.map((item:any, i:any) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                        {Object.keys(item).map((key, index) => {
                          return (
                            <TableCell key={index}>
                              {item[key]?.toString()}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
           
          </Paper>
       
    {/* <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {props.headers?.map((key:any, i:any) =>
                <TableCell
                  key={i}
                >
                  {key}
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows?.map((item:any, i:any) => {
               return (
                <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                  {Object.keys(item).map((key, index) => {
                     return (
                      <TableCell key={index}>
                        {item[key]}
                      </TableCell>
                     );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
  
    </Paper> */}
    </>
  );

}
export default DisplayTable;