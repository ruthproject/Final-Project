import React , {useState , useContext}from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';
import { useEffect } from 'react';
import Api from '../../Api';
import { ManagmentProjectsContext } from '../Assistant/Provider';
// import { ManagmentProjectsContext } from '../Provider';

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

const EditDetails = (props : any) => {
  const [assistantsHoursDB, setAssistantsHoursDB] = useState([]);
  const {state, dispatch} = useContext(ManagmentProjectsContext);
  
  const [userDB, setUserDB] = useState<any>({});
 

  // this code should be move to login comp 
  useEffect(()=>{
    //todo 1 move to login 
    const user= {
      UserId:6,
      UserName:"dddd",
      UserPermissionId:1,
      UserPassword:"fff",
      FirstName: 'Katarina',
      LastName: 'Smith',
      NumberPhone: '0545456',
      Mail: 'demo@devias.io',
     }

    //dispatch({type: "SET_USER", payload : user });
    // end todo 1
    //todo 2 delete ths line  after code move to login 
    if(state.user.id== '7'){
      setUserDB(user);
    }
    // end todo 2
    else {setUserDB(state.user)};
  
  }, []) ; 

  const handleChange = (event: any) => {
    setUserDB({
      ...userDB,
      [event.target.name]: event.target.value
    });
  };

  const setUser = async () => {
    //     const user ={ 
    //   UserId:6,
    //   // UserName:"dddd",
    //   // UserPermissionId:1,
    //   UserPassword:"fff",
    //   FirstName: 'כהן',
    //   LastName: 'יעל',
    //   NumbarPhone: '12121',
    //   Mail: 'demo@devias.io',
    //  }
    try{
      setUserDB(await Api({ url: 'Users',method:"Put",body:userDB}))
   }
   catch (error) {
     throw error;
   }
  }
  const onSubmit = ()=>{

    setUser();
    dispatch({type: "SET_USER", payload : userDB });
      
  }

  return (
  
    <form
    onSubmit={onSubmit}
      autoComplete="off"
      noValidate   
      {...props}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        {state.user.id}
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                name="FirstName"
                onChange={handleChange}
                required
                value={userDB.FirstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Last name"
                name="LastName"
                onChange={handleChange}
                required
                value={userDB.LastName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="Mail"
                onChange={handleChange}
                required
                value={userDB.Mail}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone Number"
                name="NumberPhone"
                onChange={handleChange}
                type="number"
                value={userDB.NumberPhone}
                variant="outlined"
              />
            </Grid>
            
           
            
          </Grid>
        </CardContent>
        <Divider />
        <Box
        //   sx={{
        //     display: 'flex',
        //     justifyContent: 'flex-end',
        //     p: 2
        //   }}
        >
          <Button
          onClick={onSubmit}
            color="primary"
            variant="contained"
            type="button"
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  
  );
};

export default EditDetails;
