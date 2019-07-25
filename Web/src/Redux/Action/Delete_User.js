
export function actionFunctionDelete_User(id) {
    console.log('data reached in action',id)
    return {
        type: "Delete_User_Card",
        data:id
    }
}


