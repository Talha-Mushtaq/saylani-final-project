import React, {Component} from 'react';
import Navbar from '../Navbar/Navbar';
import Slider from '../Slider/Slider';               
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
import {actionFunctionDetail} from './../../Redux/Action/DetailAction';
import {actionFunctionAdd_User} from './../../Redux/Action/Add_User';
import {actionFunctionShowAll} from '../../Redux/Action/ShowAllAction';
import Footer from '../Footer/Footer';
import EndPoint from '../../EndPoint/EndPoint';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:new Date(),
      title: '',
      rupee:'',
      detail:'',
      pic:''
    };
  }

  componentWillMount(){
    this.props.actionFunctionShowAll();
  }

  render() {
    
    this.detail=(card)=>{
      // alert("card"+id);
      this.props.actionFunctionDetail(card);
      this.props.history.push('/User_Detail');
    }
    this.add=(card)=>{
      var id = card.id;
      var title = card.title;
      var rupee = card.rupee;
      var detail = card.detail;
      // var pic = card.pic;
      var newID = new Date();
      card = {
        id,
        title,
        rupee,
        detail,
        // pic,
        newID
      }
    alert(card.title + ' Add in list');
    // console.log(card);
   this.props.actionFunctionAdd_User(card);
    }
      let cards = this.props.store;
      let path ;
    return (
      <div className='Home'>
             
                    <Navbar/>
                  <br/>

                    <Slider/>
    
                  <Container>

                    <Row>
                  {
       cards.map((card,index) =>
       {
         console.log("Path", EndPoint + "/" + card.pic.slice(5).replace(/\s/g, ''));
         
         return(
           <Col lg={4} md={4} sm={6} xs={12} key={card.id}>
                  <div className="cards">
                  <Card style={{backgroundColor:'rgb(233, 227, 227)',outline:'none', marginTop:'30px',marginBottom:'30px',boxShadow:'1px 2px 5px rgb(121, 117, 117)'}}> 
                  <CardActionArea>
                  
                  <img src={EndPoint + "/"  + card.pic.slice(5)} style={{height:'50vh',width:'100%'}}/>
                    {/* <CardMedia
                      component="img"
                      alt="Product"
                      height="150"
                      image={EndPoint + card.pic.slice(5)}
                      title="pics" */}
                    

                    
                  
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
                    <Button size="small" color="secondary"  onClick={()=>this.add(card)} >
                    ADD TO CARD
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
     <Footer/>
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
export default connect(mapStateToProps,{actionFunctionDetail,actionFunctionAdd_User,actionFunctionShowAll})(Home);