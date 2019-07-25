import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Components/CssFile.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Components/Pages/Home';
import Cards from "./Components/Pages/Cards";
import Admin_Login from './Components/Pages/Admin/Login';
import Admin_Logout from './Components/Pages/Admin/Logout';
import Admin_Detail from './Components/Pages/Admin/Detail';
import User_Detail from './Components/Pages/Detail_user';
import NotFound from './Components/Pages/PageNotFound'; 
import Admin_Panel from './Components/Pages/Admin/Admin_Panel'; 
import Admin_Add from './Components/Pages/Admin/Add';
import Admin_Show from './Components/Pages/Admin/ShowAll';
import Info from './Components/Pages/InfoUser';
import Orders from './Components/Pages/Admin/ClientOrders';
import {Provider} from 'react-redux';
import store from './Redux/Store/Store';
// import Admin_Show from './Components/Pages/Admin/ShowAll';
// import Admin_Edit from './Components/Pages/Admin/Edit';
class App extends Component {

  render() {
    return (
      <Provider store = {store} >
              <Router>
               <div className="App">
                <Switch>
                  <Route  path="/" component={Home} exact/>
                  <Route path="/Cards" component={Cards}/>
                  <Route  path="/User_Detail" component={User_Detail}/>                  
                  <Route path="/Info" component={Info}/>
                  <Route  path="/Admin_Login" component={Admin_Login}/>
                  <Route  path="/Admin_Logout" component={Admin_Logout}/>                 
                  <Route  path="/Admin_Panel" component={Admin_Panel}/>                                   
                  <Route  path='/Admin_Add' component={Admin_Add}/>
                  <Route  path="/Admin_Show" component={Admin_Show}/>                  
                  <Route  path="/Admin_Detail" component={Admin_Detail}/>   
                  <Route  path="/Orders" component={Orders}/>               
                  <Route  component={NotFound}/>
                </Switch>
              </div>
             </Router>
   </Provider>
    );
  }
}

export default App;

  