import Request from "./request/request";
import formData from "../util/form-data";
import AuthorizeInfo from "../model/po/AuthorizeInfo";

class User extends Request{
    loginIn({userName, password}: any) {
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
