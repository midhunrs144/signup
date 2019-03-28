import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {BrowserRouter as Router, Link,NavLink,Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';


class App extends React.Component{
constructor(props){

super(props);

this.state={
	
              }

               }




render(){

return(
	<Router>
		<div>
			<NavLink to="/Signup/"  >Signup</NavLink>
			<NavLink to="/" >Login</NavLink>
		    <Route path="/" exact strict component={Login}/>
			<Route path="/Signup/" exact strict component={Signup}/>
			<Route path="/welcome"  component={welcome}/>			
			
			
		</div>
	</Router>
   );
}

}
export default App;



class Signup extends React.Component{

signup = ()=>{
 	var username = this.refs.username.value;
	var email = this.refs.email.value;
	var password = this.refs.password.value;
	
	axios.post('http://cvhunt.com/API/signupinfo', {
    username: username,
    password: password,
    email: email,
    usertype: '1'
  })
  .then(function (response) {
   
   console.log(response);
    if (response.data.message) {alert(response.data.message);}
    if (response.data.errorMsg) {alert(response.data.errorMsg);}

    
  })
  .catch(function (error) {
    console.log(error);
  }); 	
	 
}
	
render(){

return(
	

		<div>
		<h1>sign up</h1>
		<label>username</label>
		<input type="text" name="" ref="username" /><br/>
		<label>email</label>
		<input type="email" name="" ref="email"/><br/>
		<label>password</label>
		<input type="password" name="" ref="password"/><br/>
		<button ref="button" onClick={this.signup}>sign up</button>
		</div>


   );
	}
}



class Login extends React.Component{

login = ()=>{
 	
	var email = this.refs.email.value;
	var password = this.refs.password.value;
	
	axios.post('http://cvhunt.com/API/userLogin', {
    email: email,
    password: password,
        
  })
  .then(function (response) {
    console.log(response);
    if (response.data.message) {alert(response.data.message);}
    if (response.data.errorMsg) {alert(response.data.errorMsg);}
    if (response.data.details.token) {localStorage.setItem("token", response.data.details.token);
    window.location.href = '/welcome';
	}
	
    
    
    
  })
  .catch(function (error) {
    console.log(error);
  }); 	
	 
}
render(){

return(
		<div>
		<h1>LOGIN</h1>
		<label>email</label>
		<input type="email" name="" ref="email"/><br/>
		<label>password</label>
		<input type="password" name="" ref="password"/><br/>
		<button onClick={this.login} >Login</button>
		</div>
		)
	}
}

class welcome extends React.Component{

	render(){

		return(
				<div>
				<h1>welcome</h1>
				</div>
				)
			}
}
