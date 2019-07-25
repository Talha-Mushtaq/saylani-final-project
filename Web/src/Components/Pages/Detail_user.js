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
import { red } from '@material-ui/core/colors';
import {actionFunctionAdd_User} from '../../Redux/Action/Add_User';
import EndPoint from '../../EndPoint/EndPoint';
class User_detail extends Component {

  render() {
    this.back=()=>
    {
      this.props.history.push('/');
    }
    let detail = this.props.store;
    this.add=(card)=>{
      let c = card.title;
    alert(c+' Add in list ');
   this.props.actionFunctionAdd_User(card);
    }
console.log("data in detail ",detail)
    return (
           <div className="Admin_detail">
             <AppBar position='sticky' color="default" top='0'  >
             <h1 style={{color:'red',textAlign:"center",backgroundColor:'rgb(170, 170, 185)'}}>
                 Product
             </h1>
             <br/><br/>
             <Toolbar>      
              <Container>
                    {
                  detail.map((d,index) =>
               {
             return(
               <div>
                 <Row>
              <Col lg={6} md={6} sm={12} xs={12} >
                <img src={EndPoint + "/"  + d.pic.slice(5)} style={{height:'100%',width:'100%',textAlign:"center",width:'80%',marginTop:'auto'}}/>           
             </Col>
               <Col lg={6} md={6} sm={12} xs={12}>
                      <h1 style={{textAlign:"center",fontWeight:'bold',color:'brown',fontFamily:'Verdana, Geneva', margin:'auto'}}>
                      {d.title}
                      </h1>
                      <br/>
                      <h5 style={{color:'blue'}}><i>{d.rupee} PKR</i></h5>
                      <br/>
                       <p style={{fontFamily:'Times New Roman, Times, serif'}}>{d.detail}</p>
              </Col>
             </Row>       
          <Row>
          <Col>
         <div style={{textAlign:"center"}}>
         <Button size="large" color="primary"  onClick={()=>this.back()} > 
          Go Back
         </Button>
         <Button size="large" color="secondary" onClick={()=>this.add(d)}> 
          Add to Card
         </Button>
         </div>
          </Col>
          </Row> 
          </div>
          );
        })
      }
             </Container>          
               </Toolbar>
          </AppBar>
           <br/>
           </div>
        );
  }
}
const mapStateToProps = (store) => {
  console.log('state',store);
  return {
        store :store.todoApp.Cards
         }
}
export default connect(mapStateToProps,{actionFunctionAdd_User})(User_detail);

