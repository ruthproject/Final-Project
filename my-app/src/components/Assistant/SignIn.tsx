import HelpLogin from '../../index.login';
import { connect } from 'react-redux';
import { fetchUser, setCurrentUser } from '../../redux/actions/user.action'
import { fetchAssistant, setCurrentAss } from '../../redux/actions/assistant.action'
import { fetchStudent, setCurrentStudent } from '../../redux/actions/student.action'
import { useEffect } from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import { Link } from 'react-router-dom';

const SignIn = (props: {
        users: {}, assistants: {}, students: {},
        fetchUser: any, fetchAssistant: any, fetchStudent: any, setCurrentAss: any, setCurrentStudent: any, setCurrentUser: any,
        history: any 
            }) => {

    useEffect(() => {
        props.fetchUser();
        props.fetchAssistant();
        props.fetchStudent();
    }, [])

    const submit = () => {
        const current: any = Object.values(props.users).find((user: any) => user.UserName === login.userName && user.UserPassword === String(login.password))
        if (current) {
            props.setCurrentUser(current.UserId)
            var url: any = '/managment'
            if (current.UserPermissionId === 1) {
                const isStudent: any = Object.values(props.students).find((student: any) => student.IdUser === current.UserId)
                if (isStudent) {
                    props.setCurrentAss(isStudent.StudentId)
                    url = '/student'
                }
                else
               console.log("firstName or password is not correct")
            }
            else if (current.UserPermissionId === 2) {
                const isAss: any = Object.values(props.assistants).find((ass: any) => ass.UserId === current.UserId)
                if (isAss) {
                    props.setCurrentAss(isAss.AssistantId)
                    url = '/all-projects'
                }
                else
                console.log("firstName or password is not correct")
            }
            props.history.push(url);
        }
    }

    const [updateLogin, submitLogin, login] = HelpLogin(
        {
            userName: '',
            password: ''
        }
        , submit
    )

    return (
        <div>
            <input type="text" name="userName" onChange={updateLogin} value={login.userName} placeholder="userName" /><br />
            <input type="password" name="password" onChange={updateLogin} value={login.password} placeholder="password" /><br />
            <input type="submit" name="enter" onClick={submitLogin} />
            <Link to="/sign-up"> משתמש חדש לחץ כאן</Link>
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
)(SignIn);