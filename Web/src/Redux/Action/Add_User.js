
export function actionFunctionAdd_User(data) {
//     alert('id'+ data.id);
//    alert('new id '+data.newID);
    console.log('data reached in action',data)
    return {
        type: "Add_User_Card",
         data:data
    }
}


