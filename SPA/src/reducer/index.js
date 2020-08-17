import { combineReducers } from 'redux';

///thêm các reducer funtion cần được combine vào đây
import SocketReducer from "./socket.js"
import Auth from "./auth.js"
import Config from "./config.js"
//// khởi tạo 1 biến biểu diễn REDUCER ALL 
const Reducer = combineReducers({
    
    socket: SocketReducer,
    auth  : Auth,
    config: Config,
});
export default Reducer;