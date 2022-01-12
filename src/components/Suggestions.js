import React from "react";
import "../suggestions.css";
import SearchIcon from "@material-ui/icons/Search";

class Suggestions extends React.Component{

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