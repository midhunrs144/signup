import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {BrowserRouter as Router, Link,NavLink,Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';


class App extends React.Component{
constructor(props){

super(props);

this.state={
	
	data: ["apple","car","mango","tomato","cycle","lemon"]
              }

               }



render(){

return(
	<div>
		<ul>	
				{this.state.data.forEach(x =>{ console.log(x) })}
				
				{this.state.data.map((x)=><li>{x}</li>)}
		</ul>
	</div>
	)
	}


}

export default App;