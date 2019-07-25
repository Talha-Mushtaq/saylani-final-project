import React, {Component} from 'react';
import Navbar from '../Navbar/Navbar';
import Slider from '../Slider/Slider';
import Footer from '../Footer/Footer';
import {connect} from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import PropTypes from 'prop-types';
import { brown } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import {actionFunctionDelete_User} from '../../Redux/Action/Delete_User';
import Message from './Message';
import UserInfo from './InfoUser';
import {Redirect} from 'react-router-dom';
const styles={
  btn:{
      paddingLeft:'auto',
      paddingRight:'auto',
      width:'30%',
      marginLeft:'auto',
      marginRight:'auto'
  }
}
class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      count : 1
    }
  }
  render() {
    let cards = this.props.store;
    let i=0 , total=0;
    this.delete=(id)=>{
      this.props.actionFunctionDelete_User(id);
    }
    // this.decrement=()=>{
    //  let decrement = this.state.count - 1 ; 
    //   if(decrement>=1)
    //  this.setState({count:decrement});
    // }
    // this.increment=()=>{
    //   let increment =  this.state.count + 1 ;
    //   if(increment<=5)
    //   this.setState({count:increment});
    // }
    this.UserInfo = (event) => {
      localStorage.setItem("totalRupee",total);
       this.props.history.push('/Info');
    }
    return (
              <div className="Home">
                  <Navbar/>      
                  <br/>
                  <br/>
                  <br/>
                  
                  <Container fluid>
                  {
       cards.map((c,index) =>
           {  

           total = ( total + c.rupee );
            return(
               <Row style={{marginBottom:'1.5%'}}>
              <Col lg={12} md={12} sm={12} xs={12} key={c.id}>
                <div>
                <AppBar position="" color="default" top='0' style={{backgroundColor:' rgb(233, 225, 225)',textAlign:"center",fontSize:'25px',color:'brown'}} >
                <Toolbar>
              <Col lg={1} md={1} sm={1} >
               <span style={{fontWeight:'bold',textAlign:"left"}}>{++i} .</span>
              </Col>
              <Col lg={4} md={4} sm={4} >
                {/* <img src={c.pic} style={{width:'100px'}}/> */}
              {c.title}
              </Col>
              <Col lg={4} md={4} sm={4} >
              {c.rupee}  <span style={{marginLeft:'2%',fontSize:'20px',fontWeight:'bold'}}> <i>PKR</i></span>
              </Col>            
              <Col lg={3} md={3} sm={3} >
              <button style={{borderRadius:'100%', backgroundColor:'rgb(233, 225, 225)' ,outline:'none',color:'brown'}}>
              <i className="fa fa-trash" aria-hidden="true" id="iconDelete"  onClick={()=>this.delete(c.newID)}> </i> 
              </button>
              </Col>              
                </Toolbar>
                </AppBar>
              
                </div>
              </Col>         
         </Row>
        
        );
       
      }
        )
      }

   { total==0 ? (
      <Message />
        ):(
  <div>
      <AppBar position="" color="default" top='0' style={{backgroundColor:' rgb(233, 225, 225)',textAlign:"center",fontSize:'25px',color:'brown',width:'30%',margin:'auto'}} >
      <Toolbar>
        {`Total = ${total} PKR `}
      </Toolbar>
    </AppBar>
        <br/>
        <Container fluid>
          <Row>
          {/* <Button onClick={this.UserInfo} variant="contained" color="primary" style={{marginLeft:'auto',marginRight:'auto',width:'40%'}} >
          CheckOut
          </Button>    */}
          <Button type='submit' onClick={this.UserInfo} variant="contained" color="primary" fullWidth
                         style={{outline:'none',backgroundColor:'rgb(65, 59, 59)'}} 
                          >     
                          {/* <Icon className={classes.rightIcon}>send</Icon> */}
                         CheckOut
                      </Button>
    
          </Row>
        </Container>
      </div>
    )}
</Container>
             <Footer/>

              </div>

    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (store) => {
  console.log('state',store);
  return {
           store :store.User_Reducer.user_card
         }
}

 {/* <button onClick={this.decrement} style={{borderRadius:'100%', backgroundColor:'rgb(233, 225, 225)',outline:'none',color:'brown'}}>
                <i class="fa fa-minus" aria-hidden="true" style={{  marginRight: '3%'}} id="iconMinus"></i>
                </button >
                {this.state.count}
                <button onClick={this.increment} style={{borderRadius:'100%', backgroundColor:'rgb(233, 225, 225)' ,outline:'none',color:'brown'}}>
                <i class="fa fa-plus" aria-hidden="true" style={{  marginLeft: '3%'}} id="iconAdd"></i>
    </button>*/}
export default connect(mapStateToProps,({actionFunctionDelete_User}) )(Home);
