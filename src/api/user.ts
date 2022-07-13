import Request from './request/request'
import AuthorizeInfo from '../model/po/AuthorizeInfo'
import { CustomResponse } from './request/interface'
import { user } from './request/url-dict'

class User extends Request {
    /**
     *
     * @param userName
     * @param password
     */
    loginIn({
        userName,
        password
    }: any): Promise<CustomResponse<AuthorizeInfo>> {
        const data = new FormData()
        data.append('userName', userName)
        data.append('password', password)
        return this.post<AuthorizeInfo>({ url: user.login, data: data })
    }
}

// 单列模式返回对象
let instance
export default (() => {
    if (instance) {
        return instance
    }
    instance = new User()
    return instance
})()
