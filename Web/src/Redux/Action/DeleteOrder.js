import axios from "axios";
import EndPoint from "../../EndPoint/EndPoint";

export function actionFunctionDeleteOrder(data) {
    console.log('data reached in action',data);
        
    return dispatch => {
  
        let url = EndPoint+'/Order/DeleteAdminOrder';
        axios.post(url, data)
            .then( res => {
          
                dispatch({
                    type: 'Delete_Order',
                    data: res.data
                })
                alert("Order Done !   Please refresh this page ");
            } )
    }
  };
  