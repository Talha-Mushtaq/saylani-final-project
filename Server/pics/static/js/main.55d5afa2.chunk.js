(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{185:function(e,t,a){e.exports=a.p+"static/media/logout.771030df.png"},187:function(e,t,a){e.exports=a(411)},192:function(e,t,a){},194:function(e,t,a){},411:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(31),o=a.n(r),c=(a(192),a(6)),i=a(7),s=a(10),m=a(8),u=a(9),d=(a(193),a(194),a(422)),p=a(424),E=a(421),g=a(413),h=a(414),b=a(415),f=a(25),v=a(17),y=a.n(v),O=a(21),x=a.n(O),A=a(416),j=a(66),C=a.n(j),w=(a(88),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes;return l.a.createElement("div",{className:"Navbar"},l.a.createElement("div",{className:e.root},l.a.createElement(y.a,{position:"fixed",color:"",top:"0",style:{backgroundColor:"rgb(43, 30, 30)"}},l.a.createElement(x.a,null,l.a.createElement(g.a,null,l.a.createElement(h.a,null,l.a.createElement(b.a,{lg:3,md:3,sm:4,xs:4},l.a.createElement("img",{src:"".concat(C.a),style:{float:"left"}}),l.a.createElement("p",{className:"Ecom"},"Com-Shop ")),l.a.createElement(b.a,{lg:9,md:9,sm:8,xs:8},l.a.createElement(A.a,{to:"/Admin_Login",className:"Nav"},l.a.createElement("i",{class:"fa fa-user-o","aria-hidden":"true"})),l.a.createElement(A.a,{to:"/Cards",className:"Nav",style:{float:"right"}},"My Cart"),l.a.createElement(A.a,{to:"/",className:"Nav",style:{float:"right"}},"Home"))))))),l.a.createElement("br",null))}}]),t}(n.Component)),k=Object(f.withStyles)({root:{flexGrow:10}})(w),N=a(16),I=a(183),D=a(417),_=a(418),S=a(419),F=a(420),L=[{src:"https://cdn.shopify.com/s/files/1/1974/9033/files/KLCC_ALL_IT_Hypermarket_-_entrance_1.jpg?18325763145260754011",altText:"Online Sopping Store",caption:"Online Sopping Store"},{src:"https://i2.wp.com/www.glamtush.com/wp-content/uploads/2018/06/computer-accessories.png?resize=660%2C365&ssl=1",altText:"You can Buy easily",caption:"You can Buy easily"},{src:"https://cdn.shopify.com/s/files/1/1974/9033/files/KLCC_laptop.jpg?18325763145260754011",altText:"20 %OFF",caption:"20 %OFF"}],T=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={activeIndex:0},a.next=a.next.bind(Object(N.a)(Object(N.a)(a))),a.previous=a.previous.bind(Object(N.a)(Object(N.a)(a))),a.goToIndex=a.goToIndex.bind(Object(N.a)(Object(N.a)(a))),a.onExiting=a.onExiting.bind(Object(N.a)(Object(N.a)(a))),a.onExited=a.onExited.bind(Object(N.a)(Object(N.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"onExiting",value:function(){this.animating=!0}},{key:"onExited",value:function(){this.animating=!1}},{key:"next",value:function(){if(!this.animating){var e=this.state.activeIndex===L.length-1?0:this.state.activeIndex+1;this.setState({activeIndex:e})}}},{key:"previous",value:function(){if(!this.animating){var e=0===this.state.activeIndex?L.length-1:this.state.activeIndex-1;this.setState({activeIndex:e})}}},{key:"goToIndex",value:function(e){this.animating||this.setState({activeIndex:e})}},{key:"render",value:function(){var e=this,t=this.state.activeIndex,a=L.map(function(t){return l.a.createElement(I.a,{className:"slider",onExiting:e.onExiting,onExited:e.onExited,key:t.src},l.a.createElement("img",{src:t.src,alt:t.altText,className:"slider"}),l.a.createElement(D.a,{captionHeader:l.a.createElement("h1",{style:{color:"blue",fontWeight:"bolder"}},l.a.createElement("i",null,t.caption))}))});return l.a.createElement(_.a,{className:"slider",activeIndex:t,next:this.next,previous:this.previous},l.a.createElement(S.a,{items:L,activeIndex:t,onClickHandler:this.goToIndex}),a,l.a.createElement(F.a,{direction:"prev",directionText:"Previous",onClickHandler:this.previous}),l.a.createElement(F.a,{direction:"next",directionText:"Next",onClickHandler:this.next}))}}]),t}(n.Component),R=a(27),U=a(62),W=a.n(U),B=a(63),P=a.n(B),q=a(65),z=a.n(q),H=a(64),G=a.n(H),K=a(18),Q=a.n(K),Z=a(29),V=a.n(Z);function Y(e){return console.log("data reached in action",e),{type:"DetailCard",data:e}}function X(e){return console.log("data reached in action",e),{type:"Add_User_Card",data:e}}var M=a(37),J=a.n(M),$="";function ee(){return function(e){var t=$+"/Admin/GetDBdata";J.a.get(t).then(function(t){e({type:"GetDBdata",data:t.data})})}}var te={underline:{borderBottom:"1px solid rgb(37, 35, 35)"}},ae=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Footer"},l.a.createElement(g.a,null,l.a.createElement(h.a,null,l.a.createElement(b.a,{lg:4,md:4,sm:12,xs:12},l.a.createElement("div",{className:"FooterHeading"},"Information"),l.a.createElement("p",{style:te.underline}),l.a.createElement("div",{className:"FooterDetail"},"Delivey timing is from 9:00 A:M to 9:00 P:M")),l.a.createElement(b.a,{lg:4,md:4,sm:12,xs:12},l.a.createElement("div",{className:"FooterHeading"},"About Us"),l.a.createElement("p",{style:te.underline}),l.a.createElement("div",{className:"FooterDetail"},l.a.createElement("ul",{className:"footer_ul"},l.a.createElement("li",null,"New Product"),l.a.createElement("li",null,"Top Seller"),l.a.createElement("li",null,"Our Blog"),l.a.createElement("li",null,"About our shop")))),l.a.createElement(b.a,{lg:4,md:4,sm:12,xs:12},l.a.createElement("div",{className:"FooterHeading"},"Contact Us"),l.a.createElement("p",{style:te.underline}),l.a.createElement("div",{className:"FooterDetail"},l.a.createElement("i",{className:"fas fa-home",style:{color:"rgb(47, 255, 57)"}}),l.a.createElement("span",null,"   Any query Let's go our shop . Peoples Colony No 2 Near Gosia Chowk Fsd "),"  ",l.a.createElement("br",null),l.a.createElement("i",{className:"fas fa-mobile-alt",style:{color:"rgb(47, 255, 57)"}}," "),l.a.createElement("span",null," +92 306 0014736 ")," ",l.a.createElement("br",null),l.a.createElement("i",{className:"fas fa-envelope",style:{color:"rgb(47, 255, 57)"}}),l.a.createElement("span",null,"talhamushtaq565@gmail.com")))),l.a.createElement(h.a,null,l.a.createElement(b.a,{lg:12,md:12,sm:12,xs:12},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",{className:"FooterRight"},"Copyright \xa9 2019 All rights reserved. Computer & Business professional Team"),l.a.createElement("hr",{style:{borderBottom:"1px solid rgb(37, 35, 35)"}})))))}}]),t}(n.Component),ne=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={id:new Date,title:"",rupee:"",detail:"",pic:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.props.actionFunctionShowAll()}},{key:"render",value:function(){var e=this;this.detail=function(t){e.props.actionFunctionDetail(t),e.props.history.push("/User_Detail")},this.add=function(t){t={id:t.id,title:t.title,rupee:t.rupee,detail:t.detail,newID:new Date},alert(t.title+" Add in list"),e.props.actionFunctionAdd_User(t)};var t=this.props.store;return l.a.createElement("div",{className:"Home"},l.a.createElement(k,null),l.a.createElement("br",null),l.a.createElement(T,null),l.a.createElement(g.a,null,l.a.createElement(h.a,null,t.map(function(t,a){return console.log("Path",$+"/"+t.pic.slice(5).replace(/\s/g,"")),l.a.createElement(b.a,{lg:4,md:4,sm:6,xs:12,key:t.id},l.a.createElement("div",{className:"cards"},l.a.createElement(W.a,{style:{backgroundColor:"rgb(233, 227, 227)",outline:"none",marginTop:"30px",marginBottom:"30px",boxShadow:"1px 2px 5px rgb(121, 117, 117)"}},l.a.createElement(P.a,null,l.a.createElement("img",{src:$+"/"+t.pic.slice(5),style:{height:"50vh",width:"100%"}}),l.a.createElement(G.a,null,l.a.createElement(V.a,{gutterBottom:!0,variant:"h5",component:"h2"},l.a.createElement("b",null,t.title)),l.a.createElement(V.a,{variant:"body2",color:"textSecondary",component:"p"},l.a.createElement("b",null,l.a.createElement("i",{style:{color:"blue"}},t.rupee," PKR"))))),l.a.createElement(z.a,null,l.a.createElement(Q.a,{size:"small",color:"inherit",onClick:function(){return e.detail(t)}},"DETAIL"),l.a.createElement(Q.a,{size:"small",color:"secondary",onClick:function(){return e.add(t)}},"ADD TO CARD")))))}))),l.a.createElement(ae,null))}}]),t}(n.Component),le=Object(R.b)(function(e){return console.log("state",e),{store:e.todoApp.Cards}},{actionFunctionDetail:Y,actionFunctionAdd_User:X,actionFunctionShowAll:ee})(ne),re=a(1),oe=a.n(re);var ce={AppBar:{backgroundColor:" rgb(233, 225, 225)",color:"brown",width:"40%",margin:"auto"},h1:{textAlign:"center",textTransform:"uppercase",color:"brown",margin:"auto",fontFamily:"cursive"}},ie=function(){return l.a.createElement(y.a,{position:"",color:"default",top:"0",style:ce.AppBar},l.a.createElement(x.a,null,l.a.createElement("i",null,l.a.createElement("h3",{style:ce.h1},"Your List is Empty"))))},se=a(32),me=a(34),ue=a.n(me),de=a(425);a(169);var pe,Ee,ge,he=function(e){function t(e){var a;return Object(c.a)(this,t),a=Object(s.a)(this,Object(m.a)(t).call(this,e)),ge=localStorage.getItem("totalRupee"),a.state={name:"",phone:"",gmail:"",address:"",totalRupee:ge},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;pe=this.props.store,this.saveData=function(t){e.setState(Object(se.a)({},t.target.name,t.target.value))},this.info=function(t){if(t.preventDefault(),""===e.state.name||""===e.state.phone||""===e.state.gmail||""===e.state.address)alert("Please fill all fields");else{var a={name:e.state.name,phone:e.state.phone,gmail:e.state.gmail,address:e.state.address};Ee={id:new Date,info:a,product:pe,totalRupee:e.state.totalRupee},localStorage.removeItem("totalRupee"),console.log("order   ",Ee),e.props.User_Order(Ee),e.setState({name:" "}),e.setState({phone:" "}),e.setState({gmail:" "}),e.setState({address:" "})}};var t=this.props.classes;return l.a.createElement("div",{className:t.root},l.a.createElement(k,null),l.a.createElement("br",null),l.a.createElement("div",{className:"Admin_layout"},l.a.createElement(y.a,{position:"",color:"default",top:"0",style:{marginTop:"5%",boxShadow:"10px 5px 15px 2px rgb(121, 117, 117)"}},l.a.createElement("div",{className:"cards"},l.a.createElement(x.a,null,l.a.createElement(g.a,null,l.a.createElement(h.a,null,l.a.createElement(b.a,{lg:1,md:1,sm:12,xs:12}),l.a.createElement(b.a,{lg:10,md:10,sm:12,xs:12},l.a.createElement("form",{onSubmit:this.info},l.a.createElement("br",null),l.a.createElement(ue.a,{type:"text",name:"name",onChange:this.saveData,id:"standard-full-width",label:"Enter Name",style:{margin:10},placeholder:"Enter Name",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},required:"required"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(ue.a,{onChange:this.saveData,type:"number",name:"phone",id:"standard-full-width",label:"Enter Phone No",style:{margin:10},placeholder:"Enter Phone No",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},required:"required"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(ue.a,{onChange:this.saveData,type:"email",name:"gmail",id:"standard-full-width",label:"Enter Gmail",style:{margin:10},placeholder:"Enter Gmail",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},required:"required"})," ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(ue.a,{onChange:this.saveData,type:"text",name:"address",id:"standard-full-width",label:"Enter Address",style:{margin:10},placeholder:"Enter Address",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},required:"required"}),l.a.createElement("br",null),l.a.createElement(Q.a,{type:"submit",variant:"contained",color:"primary",className:t.button,fullWidth:!0,style:{outline:"none",backgroundColor:"rgb(65, 59, 59)"},onClick:this.gotoCheckOut},"Submit"),l.a.createElement("br",null))),l.a.createElement(b.a,{lg:1,md:1,sm:12,xs:12}))))))),l.a.createElement("br",null),l.a.createElement("br",null))}}]),t}(n.Component),be=Object(f.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:200},dense:{marginTop:19},menu:{width:200},button:{margin:e.spacing.unit}}})(Object(de.a)(Object(R.b)(function(e){return console.log("state",e),{store:e.User_Reducer.user_card}},{User_Order:function(e){return console.log("data reached in action",e),function(t){var a=$+"/Order/AddAdminOrder";J.a.post(a,e).then(function(e){t({type:"Add_Order",data:e.data}),alert("Order Submit")})}}})(he))),fe=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={count:1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.store,a=0,n=0;return this.delete=function(t){e.props.actionFunctionDelete_User(t)},this.UserInfo=function(t){localStorage.setItem("totalRupee",n),e.props.history.push("/Info")},l.a.createElement("div",{className:"Home"},l.a.createElement(k,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(g.a,{fluid:!0},t.map(function(t,r){return n+=t.rupee,l.a.createElement(h.a,{style:{marginBottom:"1.5%"}},l.a.createElement(b.a,{lg:12,md:12,sm:12,xs:12,key:t.id},l.a.createElement("div",null,l.a.createElement(y.a,{position:"",color:"default",top:"0",style:{backgroundColor:" rgb(233, 225, 225)",textAlign:"center",fontSize:"25px",color:"brown"}},l.a.createElement(x.a,null,l.a.createElement(b.a,{lg:1,md:1,sm:1},l.a.createElement("span",{style:{fontWeight:"bold",textAlign:"left"}},++a," .")),l.a.createElement(b.a,{lg:4,md:4,sm:4},t.title),l.a.createElement(b.a,{lg:4,md:4,sm:4},t.rupee,"  ",l.a.createElement("span",{style:{marginLeft:"2%",fontSize:"20px",fontWeight:"bold"}}," ",l.a.createElement("i",null,"PKR"))),l.a.createElement(b.a,{lg:3,md:3,sm:3},l.a.createElement("button",{style:{borderRadius:"100%",backgroundColor:"rgb(233, 225, 225)",outline:"none",color:"brown"}},l.a.createElement("i",{className:"fa fa-trash","aria-hidden":"true",id:"iconDelete",onClick:function(){return e.delete(t.newID)}}," "))))))))}),0==n?l.a.createElement(ie,null):l.a.createElement("div",null,l.a.createElement(y.a,{position:"",color:"default",top:"0",style:{backgroundColor:" rgb(233, 225, 225)",textAlign:"center",fontSize:"25px",color:"brown",width:"30%",margin:"auto"}},l.a.createElement(x.a,null,"Total = ".concat(n," PKR "))),l.a.createElement("br",null),l.a.createElement(g.a,{fluid:!0},l.a.createElement(h.a,null,l.a.createElement(Q.a,{type:"submit",onClick:this.UserInfo,variant:"contained",color:"primary",fullWidth:!0,style:{outline:"none",backgroundColor:"rgb(65, 59, 59)"}},"CheckOut"))))),l.a.createElement(ae,null))}}]),t}(n.Component);k.propTypes={classes:oe.a.object.isRequired};var ve,ye=Object(R.b)(function(e){return console.log("state",e),{store:e.User_Reducer.user_card}},{actionFunctionDelete_User:function(e){return console.log("data reached in action",e),{type:"Delete_User_Card",data:e}}})(fe),Oe=a(61),xe=a.n(Oe),Ae=a(423),je=a(185),Ce=a.n(je),we={root:{flexGrow:10},img:{marginTop:"3px",width:"30px",height:"30px",float:"right",cursor:"pointer",backgroundColor:"green",borderRadius:"50%"}},ke=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes;return l.a.createElement("div",{className:"AdminNavbar"},l.a.createElement("div",{className:e.root},l.a.createElement(y.a,{position:"fixed",color:"",top:"0",style:{backgroundColor:"rgb(43, 30, 30)"}},l.a.createElement(x.a,null,l.a.createElement(g.a,{fluid:!0},l.a.createElement(h.a,null,l.a.createElement(b.a,{lg:3,md:3,sm:4,xs:4,style:{float:"left"}},l.a.createElement("span",{style:{float:"left"}}," ",l.a.createElement("img",{src:"".concat(C.a),style:{float:"left"}})," ",l.a.createElement("p",{className:"Ecom",style:{float:"left"}},"Com-Shop "),"   ")),l.a.createElement(b.a,{lg:9,md:9,sm:8,xs:8},l.a.createElement(A.a,{to:"/Admin_Logout",className:"Nav"},l.a.createElement("img",{src:"".concat(Ce.a),style:we.img,alt:"Logout"})),l.a.createElement(A.a,{to:"/Orders",className:"Nav"},"Orders"),l.a.createElement(A.a,{to:"/Admin_Show",className:"Nav"},"Delete"),l.a.createElement(A.a,{to:"/Admin_Add",className:"Nav"},"Add"))))))),l.a.createElement("br",null))}}]),t}(n.Component),Ne=Object(f.withStyles)(we)(ke),Ie=function(e){function t(e){var a;Object(c.a)(this,t),a=Object(s.a)(this,Object(m.a)(t).call(this,e));var n=!0;return null==localStorage.getItem("token")&&(n=!1),a.state={loggedIn:n},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return!1===this.state.loggedIn?l.a.createElement(Ae.a,{to:"/Admin_Login"}):l.a.createElement("div",null,l.a.createElement(Ne,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"Admin_layout",style:{width:"100%",height:"100%"}},l.a.createElement("img",{src:"http://www.pizzaods.com/images/admin-dashboard.png",style:{width:"100%",height:"100%"}})))}}]),t}(n.Component),De=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes;return l.a.createElement("div",{className:"LoginNavbar"},l.a.createElement("div",{className:e.root},l.a.createElement(y.a,{position:"fixed",color:"",top:"0",style:{backgroundColor:"rgb(43, 30, 30)"}},l.a.createElement(x.a,null,l.a.createElement(g.a,null,l.a.createElement(h.a,null,l.a.createElement(b.a,{lg:6,md:6,sm:6,xs:6},l.a.createElement("img",{src:"".concat(C.a),style:{float:"left"}}),l.a.createElement("p",{className:"Ecom"},"Com-Shop ")),l.a.createElement(b.a,{lg:6,md:6,sm:6,xs:6},l.a.createElement(A.a,{to:"/",className:"Nav",style:{float:"right"}},l.a.createElement("i",{className:"fa fa-home",id:"login_Home_icon"})))))))),l.a.createElement("br",null))}}]),t}(n.Component),_e=Object(f.withStyles)({root:{flexGrow:10}})(De),Se=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).goToAction=function(e){e.preventDefault(),""===a.state.name||""===a.state.password?alert("Please fill all fields"):"talha"===a.state.name&&"123"===a.state.password?(alert("Sucessfully Login"),localStorage.setItem("token","Ecommerce"),a.setState({loggedIn:!0})):alert("Please enter correct Data")};var n=!0;return null==localStorage.getItem("token")&&(n=!1),a.state={name:"",password:"",loggedIn:n},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;if(this.state.loggedIn)return l.a.createElement(Ae.a,{to:"/Admin_Panel"});this.saveData=function(t){e.setState(Object(se.a)({},t.target.name,t.target.value))};var t=this.props.classes;return l.a.createElement("div",{className:t.root},l.a.createElement(_e,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"login_layout"},l.a.createElement(y.a,{position:"",color:"default",top:"0",style:{marginTop:"5%",boxShadow:"10px 5px 15px 2px rgb(121, 117, 117)"}},l.a.createElement("div",{className:"cards"},l.a.createElement(x.a,null,l.a.createElement(g.a,null,l.a.createElement(h.a,null,l.a.createElement(b.a,{lg:2,md:2,sm:12,xs:12}),l.a.createElement(b.a,{lg:8,md:8,sm:12,xs:12},l.a.createElement("form",{onSubmit:this.goToAction},l.a.createElement("br",null),l.a.createElement(ue.a,{id:"standard-full-width",name:"name",value:this.state.name,onChange:this.saveData,label:"Enter Name",style:{margin:10},placeholder:"Name",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},required:"required"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(ue.a,{id:"standard-full-width-password",name:"password",label:"Enter password",value:this.state.password,onChange:this.saveData,style:{margin:10},placeholder:"Password",type:"password",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},required:"required"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(Q.a,{type:"submit",variant:"contained",color:"primary",className:t.button,fullWidth:!0,style:{outline:"none",backgroundColor:"rgb(65, 59, 59)"}},l.a.createElement(xe.a,{className:t.rightIcon},"send")))),l.a.createElement(b.a,{lg:2,md:2,sm:12,xs:12})))))),l.a.createElement("br",null),l.a.createElement("br",null)))}}]),t}(n.Component),Fe=Object(f.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:200},dense:{marginTop:19},menu:{width:200},button:{margin:e.spacing.unit}}})(Se),Le=function(e){function t(e){var a;return Object(c.a)(this,t),a=Object(s.a)(this,Object(m.a)(t).call(this,e)),ve=localStorage.removeItem("token"),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return""==ve||0==ve||null==ve?l.a.createElement(Ae.a,{to:"/Admin_Login"}):l.a.createElement("div",{className:"AdminLogout"})}}]),t}(n.Component),Te=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;this.back=function(){e.props.history.push("/Admin_Show")};var t=this.props.store;return console.log("data in detail ",t),l.a.createElement("div",{className:"Admin_detail"},l.a.createElement(y.a,{position:"sticky",color:"default",top:"0"},l.a.createElement("h1",{style:{color:"red",textAlign:"center",backgroundColor:"rgb(170, 170, 185)"}},"Product"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(x.a,null,l.a.createElement(g.a,null,t.map(function(e,t){var a;return l.a.createElement("div",null,l.a.createElement(h.a,null,l.a.createElement(b.a,{lg:6,md:6,sm:12,xs:12},l.a.createElement("img",{src:$+"/"+e.pic.slice(5),style:(a={height:"100%",width:"100%",textAlign:"center"},Object(se.a)(a,"width","80%"),Object(se.a)(a,"marginTop","auto"),a)})),l.a.createElement(b.a,{lg:6,md:6,sm:12,xs:12},l.a.createElement("h1",{style:{textAlign:"center",fontWeight:"bold",color:"brown",fontFamily:"Verdana, Geneva",margin:"auto"}},e.title),l.a.createElement("br",null),l.a.createElement("h5",{style:{color:"blue"}},l.a.createElement("i",null,e.rupee," PKR")),l.a.createElement("br",null),l.a.createElement("p",{style:{fontFamily:"Times New Roman, Times, serif"}},e.detail))))}),l.a.createElement(h.a,null,l.a.createElement(b.a,null,l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(Q.a,{size:"large",color:"secondary",onClick:function(){return e.back()}},"GO BACK"))))))),l.a.createElement("br",null))}}]),t}(n.Component),Re=Object(R.b)(function(e){return console.log("state",e),{store:e.todoApp.Cards}},null)(Te),Ue=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;this.back=function(){e.props.history.push("/")};var t=this.props.store;return this.add=function(t){var a=t.title;alert(a+" Add in list "),e.props.actionFunctionAdd_User(t)},console.log("data in detail ",t),l.a.createElement("div",{className:"Admin_detail"},l.a.createElement(y.a,{position:"sticky",color:"default",top:"0"},l.a.createElement("h1",{style:{color:"red",textAlign:"center",backgroundColor:"rgb(170, 170, 185)"}},"Product"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(x.a,null,l.a.createElement(g.a,null,t.map(function(t,a){var n;return l.a.createElement("div",null,l.a.createElement(h.a,null,l.a.createElement(b.a,{lg:6,md:6,sm:12,xs:12},l.a.createElement("img",{src:$+"/"+t.pic.slice(5),style:(n={height:"100%",width:"100%",textAlign:"center"},Object(se.a)(n,"width","80%"),Object(se.a)(n,"marginTop","auto"),n)})),l.a.createElement(b.a,{lg:6,md:6,sm:12,xs:12},l.a.createElement("h1",{style:{textAlign:"center",fontWeight:"bold",color:"brown",fontFamily:"Verdana, Geneva",margin:"auto"}},t.title),l.a.createElement("br",null),l.a.createElement("h5",{style:{color:"blue"}},l.a.createElement("i",null,t.rupee," PKR")),l.a.createElement("br",null),l.a.createElement("p",{style:{fontFamily:"Times New Roman, Times, serif"}},t.detail))),l.a.createElement(h.a,null,l.a.createElement(b.a,null,l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(Q.a,{size:"large",color:"primary",onClick:function(){return e.back()}},"Go Back"),l.a.createElement(Q.a,{size:"large",color:"secondary",onClick:function(){return e.add(t)}},"Add to Card")))))})))),l.a.createElement("br",null))}}]),t}(n.Component),We=Object(R.b)(function(e){return console.log("state",e),{store:e.todoApp.Cards}},{actionFunctionAdd_User:X})(Ue),Be=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h3",{style:{textAlign:"center",color:"red"}},"OOps! Page Not Found"))}}]),t}(n.Component);var Pe=function(e){function t(e){var a;Object(c.a)(this,t),a=Object(s.a)(this,Object(m.a)(t).call(this,e));var n=!0;return null==localStorage.getItem("token")&&(n=!1),a.state={id:new Date,title:"",rupee:"",detail:"",pic:"",loggedIn:n},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;if(!1===this.state.loggedIn)return l.a.createElement(Ae.a,{to:"/Admin_Login"});this.saveData=function(t){e.setState(Object(se.a)({},t.target.name,t.target.value))},this.image=function(t){console.log(t.target.files[0]),e.setState(Object(se.a)({},t.target.name,t.target.files[0]))},this.goToAction=function(t){t.preventDefault();var a=new FormData;a.append("id",e.state.id),a.append("title",e.state.title),a.append("rupee",e.state.rupee),a.append("detail",e.state.detail),a.append("pic",e.state.pic),""===e.state.title||""===e.state.rupee||""===e.state.detail||""===e.state.pic?alert("Please fill all fields !"):(console.log(a),e.props.actionFunctionAdd(a))};var t=this.props.classes;return l.a.createElement("div",{className:t.root},l.a.createElement(Ne,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"Admin_layout"},l.a.createElement(y.a,{position:"",color:"default",top:"0",style:{marginTop:"5%",boxShadow:"10px 5px 15px 2px rgb(121, 117, 117)"}},l.a.createElement("div",{className:"cards"},l.a.createElement(x.a,null,l.a.createElement(g.a,null,l.a.createElement(h.a,null,l.a.createElement(b.a,{lg:1,md:1,sm:12,xs:12}),l.a.createElement(b.a,{lg:10,md:10,sm:12,xs:12},l.a.createElement("form",{onSubmit:this.goToAction,method:"post",enctype:"multipart/form-data"},l.a.createElement("br",null),l.a.createElement(ue.a,{type:"text",value:this.state.title,name:"title",onChange:this.saveData,id:"standard-full-width",label:"Enter Title",style:{margin:10},placeholder:"Enter Title",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},required:"required"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(ue.a,{type:"number",value:this.state.rupee,name:"rupee",onChange:this.saveData,id:"standard-full-width",label:"Enter Rupee",style:{margin:10},placeholder:"Enter value in pakistan currency",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},required:"required"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("textarea",{className:"textarea",value:this.state.detail,name:"detail",onChange:this.saveData,id:"standard-full-width",label:"Enter Enter all Dtails of product",style:{margin:10},placeholder:"Enter all Dtails of product",type:"text",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},required:"required"}),l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement(ue.a,{type:"file",name:"pic",value:this.state.pic.value,onChange:this.image,id:"standard-full-width",label:"Enter URL of Image",style:{margin:10},placeholder:"Enter URL of Image",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},required:"required"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(Q.a,{type:"submit",variant:"contained",color:"primary",className:t.button,fullWidth:!0,style:{outline:"none",backgroundColor:"rgb(65, 59, 59)"}},"Add"))),l.a.createElement(b.a,{lg:1,md:1,sm:12,xs:12})))),l.a.createElement("br",null))),l.a.createElement("br",null),l.a.createElement("br",null)))}}]),t}(n.Component),qe=Object(f.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:200},dense:{marginTop:1},menu:{width:200},button:{margin:e.spacing.unit}}})(Object(de.a)(Object(R.b)(null,{actionFunctionAdd:function(e){return console.log("data reached in action",e),function(t){var a=$+"/Admin/AddDBdata";J.a.post(a,e).then(function(e){t({type:"AddCard",data:e.data}),alert("Item Add")})}}})(Pe)));var ze=function(e){function t(e){var a;Object(c.a)(this,t),a=Object(s.a)(this,Object(m.a)(t).call(this,e));var n=!0;return null==localStorage.getItem("token")&&(n=!1),a.state={loggedIn:n},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.props.actionFunctionShowAll()}},{key:"render",value:function(){var e=this;if(!1===this.state.loggedIn)return l.a.createElement(Ae.a,{to:"/Admin_Login"});this.delete=function(t){console.log(t),e.props.actionFunctionDelete(t)},this.detail=function(t){console.log("card",t),e.props.actionFunctionDetail(t),e.props.history.push("/Admin_Detail")},this.edit=function(t){console.log(t),e.props.actionFunctionEdit(t),e.props.history.push("/Admin_Edit")};var t=this.props.store;return l.a.createElement("div",{className:"ShowAll"},l.a.createElement(Ne,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(g.a,null,l.a.createElement(h.a,null,t.map(function(t,a){return l.a.createElement(b.a,{lg:4,md:4,sm:6,xs:12,key:t.id},l.a.createElement("div",{className:"cards"},l.a.createElement(W.a,{style:{backgroundColor:"rgb(233, 227, 227)",outline:"none",marginTop:"30px",marginBottom:"30px",boxShadow:"1px 2px 5px rgb(121, 117, 117)"}},l.a.createElement(P.a,null,l.a.createElement("img",{src:$+"/"+t.pic.slice(5),style:{height:"50vh",width:"100%"}}),l.a.createElement(G.a,null,l.a.createElement(V.a,{gutterBottom:!0,variant:"h5",component:"h2"},l.a.createElement("b",null,t.title)),l.a.createElement(V.a,{variant:"body2",color:"textSecondary",component:"p"},l.a.createElement("b",null,l.a.createElement("i",{style:{color:"blue"}},t.rupee," PKR"))))),l.a.createElement(z.a,null,l.a.createElement(Q.a,{size:"small",color:"inherit",onClick:function(){return e.detail(t)}},"DETAIL"),l.a.createElement(Q.a,{size:"small",color:"secondary",onClick:function(){return e.delete(t)}},"DELETE"),l.a.createElement(Q.a,{style:{display:"none"},size:"small",color:"primary",onClick:function(){return e.edit(t.id)}},"EDIT")))))}))))}}]),t}(n.Component),He=Object(R.b)(function(e){return console.log("state",e),{store:e.todoApp.Cards}},{actionFunctionDelete:function(e){return console.log("data reached in action",e),function(t){var a=$+"/Admin/DeleteDBdata";J.a.post(a,e).then(function(e){t({type:"DeleteCard",data:e.data}),alert("Item Deleted !   Please refresh this page ")})}},actionFunctionDetail:Y,actionFunctionShowAll:ee})(ze),Ge=a(28);var Ke={s:{fontWeight:"bold",textAlign:"center",color:"black",fontSize:"110%"},marg:{marginRight:"2%",color:"black",fontWeight:"bold",fontSize:"110%"}},Qe=0,Ze=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).delete=function(e){console.log(e),a.props.actionFunctionDeleteOrder(e)};var n=!0;return null==localStorage.getItem("token")&&(n=!1),a.state={loggedIn:n},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.props.actionFunctionShowAllOrders()}},{key:"render",value:function(){var e=this;if(!1===this.state.loggedIn)return l.a.createElement(Ae.a,{to:"/Admin_Login"});var t=this.props.store;return l.a.createElement("div",{className:"Orders"},l.a.createElement(Ne,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(g.a,{fluid:!0},t.map(function(t,a){return l.a.createElement("div",{key:t.id},l.a.createElement(y.a,{position:"",color:"default",top:"0",style:{backgroundColor:" rgb(233, 225, 225)",textAlign:"center",color:"brown",fontSize:"110%"},className:"cards"},l.a.createElement(h.a,null,l.a.createElement(b.a,{lg:12,md:12,sm:12,xs:12},l.a.createElement(h.a,null,l.a.createElement(b.a,{lg:1,md:1,sm:0,xs:0}),l.a.createElement(b.a,{lg:2,md:2,sm:12,xs:12,style:Ke.s},"Name"),l.a.createElement(b.a,{lg:2,md:2,sm:12,xs:12,style:Ke.s},"Phone"),l.a.createElement(b.a,{lg:3,md:3,sm:12,xs:12,style:Ke.s},"Mail"),l.a.createElement(b.a,{lg:4,md:4,sm:12,xs:12,style:Ke.s},"Address")),l.a.createElement(h.a,null,l.a.createElement(b.a,{lg:1,md:1,sm:12,xs:12},l.a.createElement("span",{style:Ke.s},++Qe," .")),l.a.createElement(b.a,{lg:2,md:2,sm:12,xs:12},t.info.name),l.a.createElement(b.a,{lg:2,md:2,sm:12,xs:12},t.info.phone),l.a.createElement(b.a,{lg:4,md:4,sm:12,xs:12},t.info.gmail),l.a.createElement(b.a,{lg:3,md:3,sm:12,xs:12},t.info.address)),l.a.createElement("br",null),l.a.createElement(h.a,null,l.a.createElement(b.a,{lg:12,md:12,sm:12,xs:12},t.product.map(function(e,t){return l.a.createElement("span",{style:{textAlign:"center"}},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(h.a,null,l.a.createElement(b.a,{lg:3,md:3,sm:3,xs:3},l.a.createElement("span",{style:Ke.s},"Title")),l.a.createElement(b.a,{lg:3,md:3,sm:3,xs:3},e.title),l.a.createElement(b.a,{lg:3,md:3,sm:3,xs:3},l.a.createElement("span",{style:Ke.s},"PKR")),l.a.createElement(b.a,{lg:3,md:3,sm:3,xs:3},e.rupee)))))}),l.a.createElement(h.a,{style:{textAlign:"center"}},l.a.createElement(b.a,null,l.a.createElement("span",{style:Object(Ge.a)({},Ke.color,Ke.marg)},"Total Rupee"),t.totalRupee)),l.a.createElement(Q.a,{onClick:function(){return e.delete(t)},variant:"contained",color:"primary",fullWidth:!0,style:{outline:"none",backgroundColor:"rgb(65, 59, 59)"}},"Done")))))),l.a.createElement("br",null))})))}}]),t}(n.Component),Ve=Object(R.b)(function(e){return console.log("state",e),{store:e.User_Order.User_order}},{actionFunctionShowAllOrders:function(){return function(e){var t=$+"/Order/GetAdminOrder";J.a.get(t).then(function(t){e({type:"Get_Order",data:t.data})})}},actionFunctionDeleteOrder:function(e){return console.log("data reached in action",e),function(t){var a=$+"/Order/DeleteAdminOrder";J.a.post(a,e).then(function(e){t({type:"Delete_Order",data:e.data}),alert("Order Done !   Please refresh this page ")})}}})(Ze),Ye=a(43),Xe=a(186),Me={Cards:[]};var Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AddCard":console.log("data reached to reducer",t.data);var a=e.Cards;console.log(a);var n=a.concat(t.data);return console.log(n),Object(Ge.a)({},e,{Cards:n});case"GetDBdata":return Object(Ge.a)({},e,{Cards:t.data});case"DeleteCard":console.log("data reached to reducer",t.data);var l=e.Cards.filter(function(e,a){return e.id!==t.data.id});return console.log(l),Object(Ge.a)({},e,{Cards:l});case"EditCard":console.log("data reached to reducer",t.data);var r=e.Cards.filter(function(e,a){return e.id===t.data});return console.log(r),Object(Ge.a)({},e,{Cards:r});case"DetailCard":console.log("data reached to reducer",t.data);var o=e.Cards.filter(function(e,a){return e===t.data});return console.log("previous data "),Object(Ge.a)({},e,{Cards:o});default:return e}},$e={user_card:[]};var et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Add_User_Card":var a=e.user_card.concat(t.data);return console.log(a),Object(Ge.a)({},e,{user_card:a});case"Delete_User_Card":console.log("data reached to reducer",t.data);var n=e.user_card.filter(function(e,a){return e.newID!==t.data});return console.log(n),Object(Ge.a)({},e,{user_card:n});default:return e}},tt={User_order:[]};var at=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Add_Order":var a=e.User_order.concat(t.data);return console.log(a),Object(Ge.a)({},e,{user_order:a});case"Get_Order":return Object(Ge.a)({},e,{User_order:t.data});case"Delete_Order":console.log("data reached to reducer",t.data);var n=e.User_order.filter(function(e,a){return e.id!==t.data.id});return console.log(n),Object(Ge.a)({},e,{User_order:n});default:return e}},nt=Object(Ye.d)(Object(Ye.c)({todoApp:Je,User_Reducer:et,User_Order:at}),Object(Ye.a)(Xe.a)),lt=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(R.a,{store:nt},l.a.createElement(d.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(p.a,null,l.a.createElement(E.a,{path:"/",component:le,exact:!0}),l.a.createElement(E.a,{path:"/Cards",component:ye}),l.a.createElement(E.a,{path:"/User_Detail",component:We}),l.a.createElement(E.a,{path:"/Info",component:be}),l.a.createElement(E.a,{path:"/Admin_Login",component:Fe}),l.a.createElement(E.a,{path:"/Admin_Logout",component:Le}),l.a.createElement(E.a,{path:"/Admin_Panel",component:Ie}),l.a.createElement(E.a,{path:"/Admin_Add",component:qe}),l.a.createElement(E.a,{path:"/Admin_Show",component:He}),l.a.createElement(E.a,{path:"/Admin_Detail",component:Re}),l.a.createElement(E.a,{path:"/Orders",component:Ve}),l.a.createElement(E.a,{component:Be})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(lt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},66:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA3QAAAN0BcFOiBwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHZSURBVFiFzZc/SxxRFMV/72VdVyUkkChEmwhLAjYWkiZuCg0EF0sbP4FlmjRbWCxYRBK/QZpAUlkHskIM4ohoCIFtkiCLIv4p1LAJi+u6u/NuCmOxZKNvMjM7nu7OnHvvmXfm3ZmnRIRHsytjosgCg0CCcFEB8krIOplUTqWeO2OieB9y06ZQQlr/efJIIIqs5mzZo8KgJnzPL0JCR9gcgJgXcrKni8kHfQz0Xm9634jwZfsXb9d2OSidBi9gevweyZ6uCzl3b3US04oXCwWrmtYW3Ohou7T5Odrb7J21XoHO+LW/rtVc0xAbgU9bRV6v7gQvoBlG5lb9pAMeLAgLkQvwZUE81qjfNYJrpHUCPj572BBX64aljR+8XChwUnWtagRqQTymeTLQzej929Y5obwDxXLNmuvLgq/7pYa4XHVZ/H7E2maxNQKm3uT9pANXYBtGLiDQOQBQqxu8TIJA5wDA3s8Kr5a3+fDt0KqGtQV1Yy4nAX03Ezx93I9WdnWtBRyWqhQOjq24xXIN24nsyYKZdxtMDN0h2f3vH5OtozLzn/eta6rhWcfb1yNgRL4NNWdntahQ0YD/efr/yGsl0Z0NlZDVTiaVU0IaWKc1dlSAdSWknUwq9xutIIl4w+zICAAAAABJRU5ErkJggg=="}},[[187,1,2]]]);
//# sourceMappingURL=main.55d5afa2.chunk.js.map