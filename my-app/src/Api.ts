//  import * as React from 'react';

import { Modal } from "@material-ui/core";
import { LanguageServiceMode } from "typescript";

const Api = ({ url = '', method = "GET",body = {}}) => {
    let options = {
        method,
        // mode:'no-cors',
        headers: { "Content-Type": "application/json" },
        body: method.substr(0,3) !== "GET" ? JSON.stringify(body) : null,
    }
    console.log(url);
        return fetch('https://localhost:44348/api/' + url,options)
        .then((response) => response.json())
        // .catch(error => console.error('Error:', error));
}



export default Api;