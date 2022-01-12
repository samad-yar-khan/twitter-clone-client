
import React from 'react';
import '../App.css'


// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
// import { LinkContainer } from 'react-router-bootstrap';

// import PropTypes from 'prop-types';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import jwt_decode  from 'jwt-decode';//import everrything


import { Home, Auth ,Error404} from './index';
import {getAuthTokenFromLocalStorage ,setAuthTokenInLocalStorage,getFormbody} from '../helpers/utils';
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
        isLoggedIn : false,
        loginFail: false
        
    }
    
  }

  async componentDidMount() {
    // we check if a jwt ltoken exists in local
    // if it exists we login the user
    try{

      const token = getAuthTokenFromLocalStorage();
      // console.log(token);

      if(token){
  
        const user = jwt_decode(token);
        // console.log(user);
        const config = {
          headers: { Authorization: `Bearer ${token}` }
      };
      const bodyParameters = {
        key: "value"
     };
          
      let userData = await API.get( `users/profile/${user._id}`,
      config,
      bodyParameters,
      );
      // console.log(userData);

      if(userData.data){
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

  logIn = async (email,password )=>{
        
    try{
        const bodyParameters = getFormbody({
            email :email,
            password:password,
         });
        //  console.log(bodyParameters);
         const config = {
            headers: { Authorization: `Bearer` }
        };
        const data = await API.post('/users/login',
         bodyParameters ,{
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          });
          // console.log(data.data.data.token ,111);
        if(data.data.success){
          console.log(data.data.data.token);
          setAuthTokenInLocalStorage(data.data.data.token);
          const user = jwt_decode(data.data.data.token);

          this.setState({
            user:user,
            token:data.data.token,
            isLoggedIn:true

          });
            
        }else{

          this.setState({
            loginFail:true,
            isLoggedIn : false
          });
           
        }
    }catch(err){
        console.log(err);
    }
    

}


  render() {
    // console.log('PROPS ', this.props);
    const {user,isLoggedIn,token} = this.state;
    const AuthProps = {isLoggedIn:isLoggedIn};

    if(!isLoggedIn){
      return (<Auth 
        logIn = {this.logIn}
        loginFail = {this.state.loginFail}
      />)
    }

    return (
      <div className="App">
      <Sidebar />
      <Feed />
      <Widgets />
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
            <Route AuthProps={AuthProps} exact={true} path={'/auth'} render={(props)=><Auth  {...props}/>} />
            <Route component={Error404} />
          </Switch>
        </Router>
      </div>
    );
  }
}



export default App;
