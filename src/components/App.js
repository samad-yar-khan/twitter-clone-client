
import React from 'react';


// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
// import { LinkContainer } from 'react-router-bootstrap';

// import PropTypes from 'prop-types';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import jwt_decode  from 'jwt-decode';//import everrything


import { Home, Auth} from './index';
import {getAuthTokenFromLocalStorage ,setAuthTokenInLocalStorage} from '../helpers/utils';
import axios from 'axios';
import API from '../helpers/api'

// const Settings = () => <div>SETTINGS</div>;

const PrivateRoute = (privateRouteProps) => {
  
  const {component : Component , path , isLoggedIn } = privateRouteProps;

  return <Route  
            path={path}
            render = {(props)=>{
              return isLoggedIn ? <Component {...props}/> : <Redirect to={{
                pathname:'/auth',
                state : {
                  from : props.location /* This is put here to logim can redirect too the old location once user is logged in */
                }
              }}/>;
            }}
        />
}

class App extends React.Component {

  constructor(){
    super(); //must call parents constructor first 
    this.state = {
        
        timeLinePost : [],
        user :{},
        token : null,
        loading : true,
        isLoggedIn : false
        
    }
    
  }

  async componentDidMount() {
    // we check if a jwt ltoken exists in local
    // if it exists we login the user
    try{

      const token = getAuthTokenFromLocalStorage();

      if(token){
  
        const user = jwt_decode(token);
        const config = {
          headers: { Authorization: `Bearer ${token}` }
      };
      const bodyParameters = {
        key: "value"
     };
          
      let userData = await API.get( `users/${user.id}`,
      bodyParameters,
        config
      );

      if(userData.success){
        this.setState({
          user : userData.data,
          isLoggedIn : true
        })
      }
  
      }

    }catch(err){
      console.log(err);
    }


  }

  render() {
    // console.log('PROPS ', this.props);
    const {user,isLoggedIn,token} = this.state;

    if(!isLoggedIn){
      return (<Auth/>)
    }

    return (
      <div className="App">
        <Router>
          <Switch>
           <PrivateRoute 
              component = {Home}
              token = {token}
              isLoggedIn = {isLoggedIn}
              user = {user}
              path = {'/'}
            />
            <PrivateRoute 
              component = {Home}
              token = {token}
              isLoggedIn = {isLoggedIn}
              user = {user}
              path = {'/home'}
            />
            <Route exact={true} path={'/auth'} component={Auth} />
          </Switch>
        </Router>
      </div>
    );
  }
}



export default App;
