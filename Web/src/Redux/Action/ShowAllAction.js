import axios from "axios";
import EndPoint from "../../EndPoint/EndPoint";

export function actionFunctionShowAll() {
    return dispatch => {
  
        let url = EndPoint+'/Admin/GetDBdata';
        axios.get(url)
            .then( res => {
                dispatch({
                    type: 'GetDBdata',
                    data: res.data
                })
            } )

            // console.log(data);
    }
  };
  