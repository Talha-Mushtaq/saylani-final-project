import axios from "axios";
import EndPoint from '../../EndPoint/EndPoint';
// export function User_Order(data) {
//     //     alert('id'+ data.id);
//     //    alert('new id '+data.newID);
//         console.log('data reached in action',data)
//         return {
//             type: "Add_Order",
//              data:data
//         }
//     }

export function User_Order(data) {
  console.log('data reached in action',data)
      
  return dispatch => {

      let url = EndPoint + '/Order/AddAdminOrder';
      axios.post(url, data)
          .then( res => {
        
              dispatch({
                  type: 'Add_Order',
                  data: res.data
              })
              alert("Order Submit");
          } )
  }
};
