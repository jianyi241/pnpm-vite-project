import Request from "./request/request";
import formData from "../util/form-data";
import AuthorizeInfo from "../model/po/AuthorizeInfo";
import {CustomResponse} from "./request/interface";

class User extends Request {
    /**
     *
     * @param userName
     * @param password
     */
    loginIn({userName, password}: any): Promise<CustomResponse<AuthorizeInfo>> {
        const data = new FormData()
        data.append('userName', userName)
        data.append('password', password)
        return this.post<AuthorizeInfo>({url: 'user.login', data: data})
    }
}

// 单列模式返回对象
let instance;
export default (() => {
    if (instance) return instance;
    instance = new User();
    return instance;
})();
