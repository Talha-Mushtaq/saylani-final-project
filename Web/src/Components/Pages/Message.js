import React from 'react'; 
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
const style={
    AppBar:{
        backgroundColor:' rgb(233, 225, 225)',color:'brown',width:'40%',margin:'auto'
    },
    h1:{
        textAlign:"center",textTransform:"uppercase",color:'brown',margin:'auto',fontFamily:'cursive'
    }

}
const Message =()=> {
    return(
        <AppBar position="" color="default" top='0' style={style.AppBar} >
        <Toolbar>        
        <i><h3 style={style.h1}>Your List is Empty</h3></i>
        </Toolbar>
       </AppBar>
          )
}
export default Message;