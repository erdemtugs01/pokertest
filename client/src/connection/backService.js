import api from '../api'

export default {
  postRequest(body){
    return api().post(body);
  }
}