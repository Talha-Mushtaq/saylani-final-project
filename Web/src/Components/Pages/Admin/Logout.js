import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
let token;
class AdminLogout extends Component {
    constructor(props){
        super(props)
        token =  localStorage.removeItem("token");
    }
    render() {
      if(token == '' ||token == false || token == null)
      {
        
          return( <Redirect to="/Admin_Login"/> )
      }
    return (
      <div className="AdminLogout">
    </div>  
); 

  }
}
export default (AdminLogout);