export function actionFunctionDetail(card) {
    console.log('data reached in action',card)
    return {
         type: "DetailCard",
         data:card
    }
}


// import axios from "axios";

// export function actionFunctionDetail(card) {
//     return dispatch => {
  
//         let url = 'http://localhost:8080/Admin/GetProductDetail';
//         axios.get(url)
//             .then( res => {
//                 dispatch({
//                     type: 'DetailCard',
//                     data: res.card
//                 })
//             } )

//     }
//   };
  