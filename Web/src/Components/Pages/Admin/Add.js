import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
// import TextArea from '@material-ui/core/textarea';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import  Layout from './Admin_Panel';
import { Link  , Redirect} from "react-router-dom";
import {actionFunctionAdd} from '../../../Redux/Action/AddAction';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';  
// import From from '@material-ui/core/Form';
import { bindActionCreators } from 'redux';
import { isNull } from 'util';
import Image from 'material-ui-image';
import AdminNavbar from '../../Navbar/AdminNavbar';

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
    marginTop: 1,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class Add extends Component {
  constructor(props) {
    super(props)
        const token = localStorage.getItem("token");
        let loggedIn = true;
        if(token == null)
        {
          loggedIn=false;
        }
    this.state = {
     id:new Date(),
     title:'',
     rupee:'',
     detail:'',
     pic:'',
     loggedIn
   };
     
}
  render() {
  if(this.state.loggedIn === false)
    {
      return <Redirect to='/Admin_Login'/>
    }
    this.saveData=(event)=>{
      this.setState({[event.target.name]:event.target.value});
    }
    this.image=(event) => {
    console.log(event.target.files[0]);      
    this.setState({[event.target.name]:event.target.files[0]});
  }
  this.goToAction = (event) => { 
    event.preventDefault();
    let data = new FormData();

    data.append('id', this.state.id);
    data.append('title', this.state.title);
    data.append('rupee', this.state.rupee);
    data.append('detail', this.state.detail);
    data.append('pic', this.state.pic);
 
// console.log(this.state.pic);
if( this.state.title === '' || this.state.rupee === '' || this.state.detail === '' || this.state.pic === '' )
 {
   alert("Please fill all fields !");
 }
 else
 {
   console.log(data);
    this.props.actionFunctionAdd(data);
  //  this.props.history.push('/Admin_Show');
 }
      }
        const { classes } = this.props;
        return (
          <div className={classes.root}>
        <AdminNavbar/>
        <br/>
        <br/>

        <div className="Admin_layout">
        <AppBar position="" color="default" top='0' style={{marginTop:'5%',boxShadow:'10px 5px 15px 2px rgb(121, 117, 117)'}}>
            <div className='cards'>
                  <Toolbar>
              <Container>
                    <Row>
                      <Col lg={1} md={1} sm={12} xs={12}></Col>
                      <Col lg={10} md={10} sm={12} xs={12}>
                     
                 <form  onSubmit={this.goToAction}  method='post' enctype='multipart/form-data'>
                     <br/>

                      <TextField  
                        type="text"
                        value={this.state.title}
                        name="title"
                        onChange={this.saveData} 
                        id="standard-full-width"
                          label="Enter Title"
                          style={{ margin: 10 }}
                          placeholder="Enter Title"
                           fullWidth
                           margin="normal"
                           InputLabelProps={{
                            shrink: true,
                                          }}
                         required='required'
                       />
                        <br/><br/>
    
                      <TextField  
                        type="number"
                        value={this.state.rupee}
                        name="rupee"
                        onChange={this.saveData}
                          id="standard-full-width"
                          label="Enter Rupee"
                          style={{ margin: 10 }}
                          placeholder="Enter value in pakistan currency"
                           fullWidth
                           margin="normal"
                           InputLabelProps={{
                             shrink: true,
                                          }}
                         required='required'
                       />
                        <br/><br/>
    
                        <textarea                     
                        className="textarea"
                        value={this.state.detail}
                        name="detail"
                        onChange={this.saveData}      
                        id="standard-full-width"
                          label="Enter Enter all Dtails of product"
                          style={{ margin: 10 }}
                          placeholder="Enter all Dtails of product"
                          type="text"
                           fullWidth
                           margin="normal"
                          InputLabelProps={{
                            shrink: true,
                          }}
                         required='required'
                       />     
                       <br/> <br/>
                    {/* <input type='file' onChange={this.image} /> */}
                    <TextField   
                        type="file"
                        name="pic"
                        value={this.state.pic.value}
                        // accept="image/*"
                         onChange={this.image}
                          id="standard-full-width"
                          label="Enter URL of Image"
                          style={{ margin: 10 }}
                          placeholder="Enter URL of Image"
                           fullWidth
                           margin="normal"
                           InputLabelProps={{
                            shrink: true,
                          }}  
                         required='required'
                       />
                      
                     <br/>   
                    {/* <div className="takeImage">
                      <Image src={`${this.state.pic}`} 
                       className="Image" name='image' />
                      </div>    */}
                     <br/>
                       <Button type='submit' variant="contained" color="primary" className={classes.button} fullWidth
                         style={{outline:'none',backgroundColor:'rgb(65, 59, 59)'}} 
                          >     
                          {/* <Icon className={classes.rightIcon}>send</Icon> */}
                         Add
                      </Button>
    
                 </form>
                       </Col>
                      <Col lg={1} md={1} sm={12} xs={12}>
                      </Col>
                    </Row>
    
                  </Container>          
          </Toolbar>
          <br/>
          </div>  
              
        </AppBar>
        <br/><br/>
        </div>
    </div>
    ); 
    
      }
    }
    
    Add.propTypes = {
      classes: PropTypes.object.isRequired,
    };
    
    // function mapDispatchToProps(dispatch) {
    //   return bindActionCreators({
    //     actionFunctionAdd
    //   }, dispatch)
    // }
export default withStyles(styles) (withRouter(connect(null,{actionFunctionAdd})(Add)));