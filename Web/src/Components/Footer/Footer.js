import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const line={
  underline:{
    borderBottom:'1px solid rgb(37, 35, 35)'
  }
}
class Footer extends Component {
  render() {
    return (
        <div className="Footer" >
           <Container>
             <Row>
               <Col lg={4} md={4} sm={12} xs={12}>
                    <div className='FooterHeading' >
                      Information
                    </div>
                    <p style={line.underline}></p>
                    <div className='FooterDetail'>
                Delivey timing is from 9:00 A:M to 9:00 P:M
                    </div>
               </Col>
               <Col lg={4} md={4} sm={12} xs={12}>
                    <div className='FooterHeading'>
                          About Us
                        </div>
                        <p style={line.underline}></p>
                        <div className='FooterDetail'>
                        <ul className='footer_ul'>
                          <li>New Product</li>
                          <li>Top Seller</li>
                          <li>Our Blog</li>
                          <li>About our shop</li>
                        </ul>
                          </div>
                    
               </Col>
               <Col lg={4} md={4} sm={12} xs={12}>
                      <div className='FooterHeading'>
                          Contact Us
                          </div>
                          <p style={line.underline}></p>
                          <div className='FooterDetail'>
                              <i className="fas fa-home"  style={{color:'rgb(47, 255, 57)'}}></i>
                              <span>   Any query Let's go our shop .
                                Peoples Colony No 2 Near Gosia Chowk Fsd </span>  <br/>
                                <i className="fas fa-mobile-alt" style={{color:'rgb(47, 255, 57)'}} > </i><span > +92 306 0014736 </span> <br/>
                                <i className="fas fa-envelope" style={{color:'rgb(47, 255, 57)'}}  ></i><span >talhamushtaq565@gmail.com</span>  
                          </div>
               </Col>
             </Row>
             <Row>
               <Col  lg={12} md={12} sm={12} xs={12}>
               <br/><br/>
             <p className='FooterRight'>Copyright © 2019 All rights reserved. Computer & Business professional Team</p>
             <hr style={{borderBottom:'1px solid rgb(37, 35, 35)'}}></hr>
               </Col>
             </Row>
           </Container>  
        </div>
      );
    }
    
    
}

export default Footer;
