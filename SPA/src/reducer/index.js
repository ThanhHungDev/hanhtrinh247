import { combineReducers } from 'redux';

///thêm các reducer funtion cần được combine vào đây
import SocketReducer from "./socket.js"
import Auth from "./auth.js"
import Config from "./config.js"
import Detect from "./detect.js"
import Convertation from "./convertation.js"
import Message from "./message.js"
//// khởi tạo 1 biến biểu diễn REDUCER ALL 
const Reducer = combineReducers({
    
    socket      : SocketReducer,
    auth        : Auth,
    config      : Config,
    detect      : Detect,
    convertation: Convertation,
    message     : Message
});
export default Reducer;