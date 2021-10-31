import { useState } from 'react';



export default function HelpLogin(initial :any, submit: () => void) {


    const [login, SetLogin] = useState(initial);

    const updateLogin = (event: any) => {
        SetLogin({
            ...login,
            [event.target.name]: event.target.value
        });
    }

    const submitLogin = (event: any) => {
        submit();
        // return false;
    }

    return [
        updateLogin,
        submitLogin,
        login
    ]
}
