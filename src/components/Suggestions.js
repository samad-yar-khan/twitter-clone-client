import React from "react";
import "../suggestions.css";
import SearchIcon from "@material-ui/icons/Search";
import API from '../helpers/api'

class Suggestions extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      userList : []
    }
  }

  componentDidMount= async ()=>{

    try{
      let token = this.props.token;
      console.log( `Bearer ${token}` );;

      //  console.log(123,token);
        const config = {
          headers: { Authorization: `Bearer ${token}` }
      };
      const bodyParameters = {
        key: "value"
     };
          
      let data = await API.get( `users/all`,
      config,
      bodyParameters,
      );
      // console.log(data.data.tweets);
     if(data.data.success){
       this.setState({
         userList:data.data.users,
         success:true
       })
     }else{
       this.setState({
         success:false
       })
     }
    }catch(err){
      console.error.bind(err);
    }
  
   


  }

    render(){
        return (
            <div className="suggestions">
              <div className="suggestionsInput">
                <SearchIcon className="userSearch" />
                <input placeholder="Search Twitter" type="text" />
              </div>

              
            </div>
          );

    }

 
}

export default Suggestions;