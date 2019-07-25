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
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';  
import Navbar from '../Navbar/Navbar';
import { bindActionCreators } from 'redux';
import { isNull } from 'util';
import {User_Order} from '../../Redux/Action/Add_Order'; 

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

 let cards,order,totalRupee;
class Info extends Component {
  constructor(props) {
    super(props)
    totalRupee = localStorage.getItem("totalRupee");
    this.state = {
      name :'',
      phone :'',
      gmail :'',
      address :'',
      totalRupee:totalRupee
    };
  }
  render() {
     cards = this.props.store;
    //  console.log(cards); 
     this.saveData=(event)=>{
        this.setState({[event.target.name]:event.target.value});
}

  this.info = (event) => {
    event.preventDefault(); 

  if(this.state.name === '' || this.state.phone === '' || this.state.gmail === '' || this.state.address === '')
  { 
    alert("Please fill all fields");
  }
  else
  {
    let info = {
       name : this.state.name,
       phone : this.state.phone,
       gmail : this.state.gmail,
       address : this.state.address
    }

      order={
            id :new Date(),
            info:info,
            product:cards,
            totalRupee:this.state.totalRupee
           }
       localStorage.removeItem("totalRupee") ;   
 console.log('order   ',order);
this.props.User_Order(order);
this.setState({name:" "});
this.setState({phone:" "});
this.setState({gmail:" "});
this.setState({address:" "});
}
    
      }
        const { classes } = this.props;
        return (
          <div className={classes.root}>
          <Navbar /> 
          <br/>

        <div className="Admin_layout">
        <AppBar position="" color="default" top='0' style={{marginTop:'5%',boxShadow:'10px 5px 15px 2px rgb(121, 117, 117)'}}>
            <div className='cards'>
                  <Toolbar>
              <Container>
                    <Row>
                      <Col lg={1} md={1} sm={12} xs={12}></Col>
                      <Col lg={10} md={10} sm={12} xs={12}>
                     <form onSubmit={this.info} >
                              <br/>
                      <TextField  
                        type="text"
                        name="name" 
                        onChange={this.saveData}
                        id="standard-full-width"
                          label="Enter Name"
                          style={{ margin: 10 }}
                          placeholder="Enter Name"
                           fullWidth
                           margin="normal"
                           InputLabelProps={{
                            shrink: true,
                                          }}
                         required='required'
                       />
                        <br/><br/>
    
                      <TextField  
                        onChange={this.saveData}
                        type="number"
                        name="phone"
                          id="standard-full-width"
                          label="Enter Phone No"
                          style={{ margin: 10 }}
                          placeholder="Enter Phone No"
                           fullWidth
                           margin="normal"
                           InputLabelProps={{
                            shrink: true,
                                          }}
                         required='required'
                       />
                        <br/><br/>
                            
                            <TextField  
                        onChange={this.saveData}
                        type="email"
                            name="gmail"
                                id="standard-full-width"
                                label="Enter Gmail"
                                style={{ margin: 10 }}
                                placeholder="Enter Gmail"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                shrink: true,
                                                }}
                            required='required'
                            /> <br/><br/>
                            
                            <TextField  
                        onChange={this.saveData}
                          type="text"
                            name="address"
                                id="standard-full-width"
                                label="Enter Address"
                                style={{ margin: 10 }}
                                placeholder="Enter Address"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                shrink: true,
                                                }}
                                required='required'
                            />
                       <br/>
                       <Button type='submit' variant="contained" color="primary" className={classes.button} fullWidth
                         style={{outline:'none',backgroundColor:'rgb(65, 59, 59)'}}
                         
                         onClick={this.gotoCheckOut}
                         >
                       {/* <Icon className={classes.rightIcon}>send</Icon> */}
                       Submit
                      </Button>
                      <br/>
                      </form>
    
                       </Col>
                      <Col lg={1} md={1} sm={12} xs={12}>
                      </Col>
                    </Row>
                  </Container>          
          </Toolbar>
          </div>
        </AppBar>
        </div>
        <br/>
        <br/>
    </div>
    ); 
    
      }
    }
    
    Info.propTypes = {
      classes: PropTypes.object.isRequired,
    };
    
    const mapStateToProps = (store) => {
      console.log('state',store);
      return {
               store :store.User_Reducer.user_card
             }
        }   
// const mapStateToProps = (store) => {
//   console.log('state',store);
//   return {
//            store :store.GotoUserInformation.info
//          }
//     }

export default withStyles(styles)(withRouter(connect(mapStateToProps,{User_Order})(Info)));