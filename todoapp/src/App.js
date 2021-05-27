import './App.css';
import SignupForm from './signup-form'
import LoginForm from './login-form'
import Home from './home'
// import { useHistory, Redirect } from "react-router-dom";

import React from 'react';
// import { token } from 'morgan';
import {
  Switch,
  Route,
} from "react-router-dom"
import { Router } from 'express';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      typingBox: "",
      token: {}
    }
    this.getToken = this.getToken.bind(this)
  }

  getToken(data) {
    this.setState({token:data.token})
    // console.log('this is our token' + this.state.token)
  }

  
  render() {
    return(
      <Router>
        <Switch>
          <Route path='/signup'>
            <checkLogin data={this.state.token}/>
          </Route>
        </Switch>s
      </Router>
    )
  }
}

function Signup() {
  return SignupForm()
}

checkLogin(){
  return (this.state.token ? <Home /> : <LoginForm />)
}





// render() {
//     const token = this.state.token`
//     let output
//     if (token) {
//       output = <Home />
//     }
//     else {output = <LoginForm getToken={this.getToken} />}
  
//     return (
//       <div>
//         {output}
//       </div>
//   )
// }
// render() {
//   return  (this.state.token ? <div><Home /></div> : <div><LoginForm /></div>)
// }
// }
//   render() {
//     return(
//       <div>

//         {/* <SignupForm /> */}
//         if (this.state.token){
//           <Home />
//         } 
//         else {<LoginForm
//           getToken={this.getToken}
//         />
//         }
//       </div>
//     )
//   }
// }

export default App;

