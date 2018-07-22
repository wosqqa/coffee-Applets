import {
  wxRequest
} from '@/utils/wxRequest';

let env = "-test" //-dev 或者 -test
const apiMall = 'http://localhost:8080/'

//查询列表
const getAdList = (params) => wxRequest(params, apiMall + '/api/adverts/list');

export default {
  getAdList
}
