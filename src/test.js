import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';

class App extends React.Component{
constructor(props){

super(props);

this.state={

	}

axios.get('http://cvhunt.com/API/listRecentJobs')
  .then(function (response) {
    console.log(response);
    

    
  })
  .catch(function (error) {
    console.log(error);
  }); 	
	 
}
               






render(){

return(
	<div>
		
	</div>
   );
}

}
export default App;


{/* http://api.citybik.es/v2/networks*/}