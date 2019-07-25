import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import logo from '../Images/l.PNG';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { LinearProgress } from '@material-ui/core';
import Logo from '../Images/E.png';
import Image from 'material-ui-image';
const styles = {
  root: {
    flexGrow: 10
  },
 
};

  class LoginNavbar extends Component {
      render() {
        const { classes } = this.props;
              return (
          <div className="LoginNavbar"  >
     <div className={classes.root}>
          <AppBar position="fixed"  color="" top='0' style={{backgroundColor:'rgb(43, 30, 30)'}}>
         
            <Toolbar>
                 <Container>
                      <Row>
                        <Col lg={6} md={6} sm={6} xs={6}>
                          {/* <h1 style={{color:'red',fontWeight:"bolder",fontFamily:''}}><i>E-Shop</i></h1> */}
                        {/* <image scr="data:image/jpeg;base64,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"/>
                        */}
                        
                        <img src={`${Logo}`} style={{float:"left"}} />
                        <p className="Ecom">Com-Shop </p>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6} >
                   
                       
                        <Link to='/' className='Nav' style={{float:"right"}}><i className="fa fa-home" id="login_Home_icon"></i></Link>
                        {/* <Link to='/Admin' className='Nav'><img src={AdminIcon} alt='Admin' />Admin</Link>  */}
                        </Col>
                      </Row>
                    </Container>          
            </Toolbar>
          </AppBar>
        </div>
      <br/>
    </div>
      ); 
    }
  }
  LoginNavbar.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(LoginNavbar);