import axios from "axios";
import EndPoint from "../../EndPoint/EndPoint";

export function actionFunctionShowAllOrders() {
    return dispatch => {
  
        let url = EndPoint+'/Order/GetAdminOrder';
        axios.get(url)
            .then( res => {
                dispatch({
                    type: 'Get_Order',
                    data: res.data
                })
            } )

            // console.log(data);
    }
  };
  