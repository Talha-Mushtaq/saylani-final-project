import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import TextField from '@material-ui/core/TextField';
// import TextArea from '@material-ui/core/textarea';
// import Button from '@material-ui/core/Button';
// import Icon from '@material-ui/core/Icon';
// import  Layout from './Admin_Panel';
import { Link  , Redirect} from "react-router-dom";
// import {actionFunctionAdd} from '../../../Redux/Action/AddAction';
// import {connect} from 'react-redux';
// import {withRouter} from 'react-router-dom';  
// // import From from '@material-ui/core/Form';
// import { bindActionCreators } from 'redux';
// import { isNull } from 'util';
// import Image from 'material-ui-image';
import AdminNavbar from '../../Navbar/AdminNavbar';

class Admin_Panel extends Component {
  constructor(props) {
    super(props)
        const token = localStorage.getItem("token");
        let loggedIn = true;
        if(token == null)
        {
          loggedIn=false;
        }
    this.state = {
     loggedIn
   };
     
}
  render() {
  if(this.state.loggedIn === false)
    {
      return <Redirect to='/Admin_Login'/>
    }
        return (
          <div>
           <AdminNavbar/>
           <br/>
           <br/>

           <div className="Admin_layout" style={{width:'100%',height:'100%'}}>
           <img src={"http://www.pizzaods.com/images/admin-dashboard.png"} style={{width:'100%',height:'100%'}}/>
           </div>
      </div>
    ); 
    
      }
    }
    
export default (Admin_Panel);