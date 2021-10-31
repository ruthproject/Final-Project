import React, {useState} from "react";
import HelpLogin from '../index.login';
import { connect } from 'react-redux';
import { fetchUser, setCurrentUser } from '../redux/actions/user.action'
import { fetchAssistant, setCurrentAss } from '../redux/actions/assistant.action'
import { fetchStudent, setCurrentStudent } from '../redux/actions/student.action'
import { useEffect } from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import Api from "../Api";
import { TextField } from "@material-ui/core";
import { Console } from "console";




const SignUp=(props: {
    users: {}, assistants: {}, students: {},
    fetchUser: any, fetchAssistant: any, fetchStudent: any, setCurrentAss: any, setCurrentStudent: any, setCurrentUser: any,
    history: any 
        })=>{


   const [newUser, setNewUser]= useState<any>({});

    const submit = () => {
        const current: any = Object.values(props.users).find((user: any) => user.UserName === login.userName && user.UserPassword === String(login.password))
        if (current) {
            alert("משתמש קיים ");
        }
        else{
          addUser()

        }
    }
    const [updateLogin, submitLogin, login] = HelpLogin(
        {
            userName: '',
            password: ''
        }
        , submit
    )

    const  addUser =  async ()=> {
       
        const response = await Api({url:'Users',method : "Post",body: {newUser}});
       
    }

    const handleChange = (event: any) => {
        setNewUser({
          ...newUser,
          [event.target.name]: event.target.value
          
          
        });
        console.log(event.target.value);
      };
    
    return (
        <div>
           <TextField
                // fullWidth
                helperText="Please specify the first name"
                label="First name"
                name="firstName"
                onChange={handleChange}
                required
                value={newUser.firstName}
                variant="outlined"
              />
              <br/>
               <TextField
                helperText="Please specify the last name"
                label="last name"
                name="lastName"
                onChange={handleChange}
                required
                value={newUser.lastName}
                variant="outlined"
              />
               <br/>
               <TextField
                helperText="Please specify the phone number"
                label="phone"
                name="phone"
                onChange={handleChange}
                required
                value={newUser.phone}
                variant="outlined"
                type="phone"
              />
               <br/>
                  <TextField
                helperText="Please specify the password"
                label="password"
                name="password"
                onChange={handleChange}
                required
                value={newUser.password}
                variant="outlined"
                type="password"
              />
               <br/>
            {/* <input type="password " name="password" onChange={updateLogin} value={login.password} placeholder="password" /><br /> */}
            <input type="submit" name="enter" onClick={submitLogin} />
            
        </div>
    )
}
export default connect(
    (state: any) => {
        return {
            users: state.users.users,
            assistants: state.assistants.assistants,
            students: state.students.students
        }
    },
    {
        fetchUser, fetchAssistant, fetchStudent, setCurrentUser, setCurrentStudent, setCurrentAss
    }
)(SignUp);