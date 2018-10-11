import type { TypeUserInfo } from "@src/types"
import type { contactSupportAPIDTOV1 } from "@utils/ApiTypes"

const USER_ENDPOINT = "/user"
const LOGIN_ENDPOINT = "/login"

class UserService {
  static login = (email: string, password: string): Promise<*> => {
    return new Promise(function(resolve, reject) {
      //TODO appel WS
    })
  }
}

export default UserService
