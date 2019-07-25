import { createStore ,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import todoApp from '../Reducer/Reducer';
import User_Reducer from '../Reducer/User_Reducer';
import User_Order from '../Reducer/User_Order';
const store = createStore( combineReducers({todoApp,User_Reducer,User_Order}), applyMiddleware(thunk) );
export default (store);