import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {actionFunctionShowAllOrders} from '../../../Redux/Action/ShowAllOrders';
import {actionFunctionDeleteOrder} from '../../../Redux/Action/DeleteOrder';
import AdminNavbar from '../../Navbar/AdminNavbar';
import {Redirect} from 'react-router-dom';
  const styles={
      s:{
        fontWeight:'bold',textAlign:"center",color:"black",fontSize:'110%'
      },
     marg:{
         marginRight:'2%',color:"black",fontWeight:'bold',fontSize:'110%'
     }
  }
let i=0;  
class Client_Order extends Component {
  constructor(props){
        super(props)
        const token = localStorage.getItem("token");
        let loggedIn = true;
        if(token == null)
        {
          loggedIn=false;
        } 
        this.state={
          loggedIn
        }
  }
  componentWillMount(){
    this.props.actionFunctionShowAllOrders();
  }
    
  delete=(order)=>{
      console.log(order);
    this.props.actionFunctionDeleteOrder(order);
  }
  render() {

    if(this.state.loggedIn === false)
    {
      return <Redirect to='/Admin_Login'/>
    }

    let orders = this.props.store;
    return (
            <div className='Orders'>
                  <AdminNavbar/>
                  <br/>
                  <br/>
                  <br/>

          <Container fluid>
                    {
                         orders.map((order,index) =>
                            {  
                                return(
                                      <div key={order.id}>
           <AppBar position="" color="default" top='0' style={{backgroundColor:' rgb(233, 225, 225)',textAlign:"center",color:'brown',fontSize:'110%'}} className="cards" >
          {/*<Toolbar> */}
                                      <Row>
                                          <Col lg={12} md={12} sm={12} xs={12}>
                                          <Row>
                                                <Col lg={1} md={1} sm={0} xs={0}>
                                                   {/* <span style={{fontWeight:'bold',textAlign:"left"}}>{++i} .</span> */}
                                                </Col>
                                                <Col lg={2} md={2} sm={12} xs={12} style={styles.s}>
                                                 Name
                                                </Col>
                                                <Col lg={2} md={2} sm={12} xs={12} style={styles.s}>
                                                Phone                                              
                                                </Col>
                                                <Col lg={3} md={3} sm={12} xs={12} style={styles.s}>
                                                Mail
                                                </Col>
                                                <Col lg={4} md={4} sm={12} xs={12} style={styles.s}>
                                                Address
                                                </Col>
                                             </Row>
                                     
                                             <Row>
                                                <Col lg={1} md={1} sm={12} xs={12}>
                                                   <span style={styles.s}>{++i} .</span>
                                                </Col>
                                                <Col lg={2} md={2} sm={12} xs={12}>
                                                 {order.info.name}
                                                </Col>
                                                <Col lg={2} md={2} sm={12} xs={12}>
                                                {order.info.phone}                                                
                                                </Col>
                                                <Col lg={4} md={4} sm={12} xs={12} >
                                                {order.info.gmail}
                                                </Col>
                                                <Col lg={3} md={3} sm={12} xs={12}>
                                                {order.info.address}
                                                </Col>
                                             </Row>
                                             <br/>
                                             <Row>
                                                <Col lg={12} md={12} sm={12} xs={12}>
                                              
                                                   {
                                                      order.product.map((product,index)=>{
                                                         return(
                                                          <span style={{textAlign:"center"}}>
                                                            <ul>
                                                              <li>
                                                              {
                                                              <Row>
                                                           <Col lg={3} md={3} sm={3} xs={3}>
                                                                <span style={styles.s}>Title</span>
                                                            </Col>
                                                            <Col lg={3} md={3} sm={3} xs={3}>
                                                                {product.title}                                                
                                                            </Col>
                                                            <Col lg={3} md={3} sm={3} xs={3}>
                                                                <span style={styles.s}>PKR</span>
                                                            </Col>
                                                            <Col lg={3} md={3} sm={3} xs={3}>
                                                                {product.rupee}
                                                            </Col> 
                                                            </Row>
                                                            }  
                                                        </li>  
                                                      </ul>   
                                                  </span>
                                                        )
                                                    })
                                                   }
                                            
                                                   <Row style={{textAlign:"center"}}>
                                                      <Col>
                                                     <span style={{...styles.color,...styles.marg}}>
                                                         Total Rupee
                                                     </span>
                                                      {order.totalRupee}
                                                     </Col>
                                                   </Row>
                                                  
                                                   <Button onClick={()=>this.delete(order)} variant="contained" color="primary" fullWidth
                                                      style={{outline:'none',backgroundColor:'rgb(65, 59, 59)'}} 
                                                      >     
                                                     Done
                                                    </Button>
                                                </Col>   
                                             </Row>
                                          </Col>   
                                      </Row>
                                  </AppBar>
                                  <br/>
                                      </div>
                                       );
                            })
                    }
     
         </Container>          
    </div>          
    );
  }
}


const mapStateToProps = (store) => {
  console.log('state',store);
  return {
           store :store.User_Order.User_order
         
    }
}
export default connect(mapStateToProps,{actionFunctionShowAllOrders,actionFunctionDeleteOrder})(Client_Order);