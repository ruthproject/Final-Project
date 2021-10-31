
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import SignIn from './components/Assistant/SignIn'

import End from './components/Assistant/end'
// import AllProjectAss from './components/Assistant/AllProjectAss';
import store from './redux/store';
import { useState } from 'react';
import AllProjectAss from './components/Assistant/AllProjectAss';
import Header from './components/Assistant/header';
import EditDetails from './components/EditDetails/EditDetails';
import Project from './components/Project/Project';
import Email from './components/email';
import Home from './components/SignUp';
import SignUp from './components/SignUp';
import gmailApi from "react-gmail"

import New from './new';
import Try from './components/try';

function App() {
  const [begin,setBegin]=useState(null)
  const {userPermmison}={userPermmison:"rdux"}
  
  return (
    <div>
      {/* <input onClick={()=>{gmailApi.getProfile("111133183261998252620").then(res=>console.log(res)) }}/> */}
  
         <Provider store={store}>
           
        {userPermmison==="manager"?<Header begin={begin}/>:<Header begin={begin}/>} 
        <Switch>
        
          <Route path='/all-projects' component={()=><AllProjectAss  />} />
          <Route path='/Project' component={()=><Project setBegin={setBegin}/>} />
          <Route path='/Project/:id' component={()=><Project setBegin={setBegin}  />} />
          <Route exact path='/' component={SignIn} />
          <Route path='/sign-up' component={SignUp} />
          
         
                   
        </Switch>
      </Provider>
     {/* <Email></Email> */}

     <New></New>
     <Try currenAssistant={2}></Try>
    </div>
    
  );
}

export default App;

