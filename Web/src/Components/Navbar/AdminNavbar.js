import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { LinearProgress } from '@material-ui/core';
import Logo from '../Images/E.png';
import LogoutPic from '../Images/logout.png';
const styles = {
  root: {
    flexGrow: 10
  },
  img:{
    marginTop:'3px',
    width:'30px',
    height:'30px',
    float:'right',
    cursor:'pointer',
    backgroundColor:'green',
    borderRadius: '50%'
}

};

  class AdminNavbar extends Component {
      render() {
        const { classes } = this.props;
              return (
          <div className="AdminNavbar"  >
     <div className={classes.root}>
          <AppBar position="fixed"  color="" top='0' style={{backgroundColor:'rgb(43, 30, 30)'}}>
         
            <Toolbar>
                 <Container fluid>
                      <Row>
                        <Col lg={3} md={3} sm={4} xs={4} style={{float:"left"}}>
                        <span style={{float:"left"}}> <img src={`${Logo}`} style={{float:"left"}} /> <p className="Ecom"style={{float:"left"}} >Com-Shop </p>   </span>
                        </Col>
                        <Col lg={9} md={9} sm={8} xs={8} >
                              <Link to="/Admin_Logout" className="Nav" ><img src={`${LogoutPic}`}  style={styles.img} alt="Logout" /></Link>
                              <Link to='/Orders' className="Nav">Orders</Link>                         
                              <Link to='/Admin_Show' className="Nav" >Delete</Link> 
                              <Link to='/Admin_Add' className="Nav">Add</Link>
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
AdminNavbar.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(AdminNavbar);