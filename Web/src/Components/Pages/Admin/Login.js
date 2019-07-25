import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import  Layout from './Admin_Panel';
import { Link,Redirect } from "react-router-dom";
import LoginNavbar from '../../Navbar/LoginNavbar';
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  
  },
});
class AdminLogin extends Component {
  constructor(props){
    super(props)
    const token = localStorage.getItem("token");
        let loggedIn = true;
        if(token == null)
        {
          loggedIn=false;
        }
  this.state={
  name:'',
  password:'',
  loggedIn
  }
      //  token = localStorage.getItem("token");
      // if(token == null)
      // {
      //    loggedIn=false;

      // }
};

goToAction = (event) => {
  event.preventDefault(); 
  if(this.state.name === "" ||  this.state.password === "")
     {
       alert("Please fill all fields");
     }
   else{
        if(this.state.name === "talha" && this.state.password === "123")
        {
          alert("Sucessfully Login");
          localStorage.setItem("token","Ecommerce");
          this.setState({loggedIn:true});
        }
        else{
              alert("Please enter correct Data");
            }
  }
   
}
  render() {
    if(this.state.loggedIn)
      {
        return <Redirect to="/Admin_Panel"/>
      }
    this.saveData=(e)=>{
      this.setState({[e.target.name]:e.target.value});
      // console.log(e.target.value);
  }
    
    const { classes } = this.props;
    return (
      <div className={classes.root}>
    <LoginNavbar/>
    <br/>
    <br/>

    <div className="login_layout">
    <AppBar position="" color="default" top='0' style={{marginTop:'5%',boxShadow:'10px 5px 15px 2px rgb(121, 117, 117)'}} >
     <div  className='cards'>
      <Toolbar>
          <Container>
                <Row>
                  <Col lg={2} md={2} sm={12} xs={12}></Col>
                  <Col lg={8} md={8} sm={12} xs={12}>
                  <form onSubmit={this.goToAction} >
                  <br/>
                  <TextField
                      id="standard-full-width"
                      name='name'
                      value={this.state.name}
                      onChange={this.saveData}
                      label="Enter Name"
                      style={{ margin: 10 }}
                      placeholder="Name"
                       fullWidth
                       margin="normal"
                       InputLabelProps={{
                        shrink: true,
                                      }}
                     required='required'
                   />
                    <br/><br/>

                    <TextField
                      id="standard-full-width-password"
                      name='password'
                      label="Enter password"
                      value={this.state.password}
                      onChange={this.saveData}
                      style={{ margin: 10 }}
                      placeholder="Password"
                      type="password"
                       fullWidth
                       margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                     required='required'
                   />     
                   <br/>   
                   <br/>   
                   <Button type='submit' variant="contained" color="primary" className={classes.button} fullWidth
                     style={{outline:'none',backgroundColor:'rgb(65, 59, 59)'}}>
                           {/* This Button uses a Font Icon, see the installation instructions in the docs.  */}
                          <Icon className={classes.rightIcon}>send</Icon>
                  </Button>
                  </form>
                   </Col>
                  <Col lg={2} md={2} sm={12} xs={12}>
                  </Col>
                </Row>

              </Container>  

      </Toolbar>
     </div>
    </AppBar>
    <br/><br/>
    </div>
</div>
); 

  }
}

AdminLogin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminLogin);