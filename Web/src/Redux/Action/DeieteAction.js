
import axios from "axios";
import EndPoint from "../../EndPoint/EndPoint";

export function actionFunctionDelete(data) {
    console.log('data reached in action',data);
        
    return dispatch => {
  
        let url = EndPoint+'/Admin/DeleteDBdata';
        axios.post(url, data)
            .then( res => {
          
                dispatch({
                    type: 'DeleteCard',
                    data: res.data
                })
                alert("Item Deleted !   Please refresh this page ");
            } )
    }
  };
  