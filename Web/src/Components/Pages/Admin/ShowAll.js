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
import {actionFunctionDelete} from '../../../Redux/Action/DeieteAction';
import {actionFunctionDetail} from '../../../Redux/Action/DetailAction';
import {actionFunctionShowAll} from '../../../Redux/Action/ShowAllAction';
import AdminNavbar from '../../Navbar/AdminNavbar';
import {Redirect} from 'react-router-dom';
import EndPoint from '../../../EndPoint/EndPoint';
class Show extends Component {
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
    this.props.actionFunctionShowAll();
  }
    
  
  render() {

    if(this.state.loggedIn === false)
    {
      return <Redirect to='/Admin_Login'/>
    }

      this.delete=(card)=>{
      console.log(card);
      this.props.actionFunctionDelete(card);
    }
    this.detail=(card)=>{
    console.log("card",card);
    this.props.actionFunctionDetail(card);
    this.props.history.push('/Admin_Detail');
  }
  this.edit=(id)=>{
    console.log(id);
   this.props.actionFunctionEdit(id);
   this.props.history.push('/Admin_Edit');
  }
    let cards = this.props.store;
    return (
            <div className='ShowAll'>
                  <AdminNavbar/>
                  <br/>
                  <br/>
                   
                   <Container>
                    <Row>
                  {
       cards.map((card,index) =>
           {
        return(
              <Col lg={4} md={4} sm={6} xs={12} key={card.id}>
                  <div className="cards">
                 <Card style={{backgroundColor:'rgb(233, 227, 227)',outline:'none', marginTop:'30px',marginBottom:'30px',boxShadow:'1px 2px 5px rgb(121, 117, 117)'}}> 
                  <CardActionArea>
                    {/* <CardMedia
                      component="img"
                      alt="Product"
                      height="150"
                      image={card.pic}
                      title="pics"
                    /> */}
                  <img src={EndPoint + "/"  + card.pic.slice(5)} style={{height:'50vh',width:'100%'}}/>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                      <b>{card.title}</b>
                      </Typography>
                      {/* <Typography variant="body2" color="textSecondary" component="p">
                       {card.detail}
                      </Typography> */}
                      <Typography variant="body2" color="textSecondary" component="p">
                        <b><i style={{color:'blue'}}>{card.rupee} PKR</i></b>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="inherit" onClick={()=>this.detail(card)}>
                      DETAIL
                    </Button>
                    <Button size="small" color="secondary"  onClick={()=>this.delete(card)} >
                      DELETE
                    </Button>
                    <Button style={{display:'none'}} size="small" color="primary"  onClick={()=>this.edit(card.id)}> 
                      EDIT
                    </Button>
                  </CardActions>
                </Card>
                </div>
              </Col>         
          );
          })
         } 
         </Row>
         </Container>          
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
export default connect(mapStateToProps,{actionFunctionDelete,actionFunctionDetail,actionFunctionShowAll})(Show);