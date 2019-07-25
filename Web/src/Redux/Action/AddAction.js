
import axios from "axios";
import EndPoint from '../../EndPoint/EndPoint';


export function actionFunctionAdd(data) {
  console.log('data reached in action',data)
      
  return dispatch => {

      let url = EndPoint+'/Admin/AddDBdata';
      axios.post(url, data)
          .then( res => {
        
              dispatch({
                  type: 'AddCard',
                  data: res.data
                })
                alert("Item Add");
          } )
  }
};
