//Data Representation and Querying - Project - Sünje Ursa Alice Winteler - G00363332

import React, { Component } from 'react';
import '../App.css';

export class Search extends Component{

  
  render(){
    return(
        <div className = "App searchApp">
            <form className="search">
        <input
        
          type="text"
        />
        <input type="submit"  className= "btn btn-light" value="SEARCH" />
      </form>
        </div>
    );
  }
}