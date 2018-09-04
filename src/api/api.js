import {
  wxRequest
} from '@/utils/wxRequest';

let env = "-test" //-dev 或者 -test
const apiMall = 'https://wx.harryyan.xin'
// const apiMall = 'https://m.lyancoffee.com'
const wxJsCode2Session = (params) => wxRequest(params, apiMall + '/wxa-api/api/jscode2session');//获取openid

const cafeRule = (params) => wxRequest(params, apiMall + '/wxa-api/api/wish/cafe/rule');//活动规则
const activityList = (params) => wxRequest(params, apiMall + '/wxa-api/api/group/activity/list');//拼团列表
const activityDetail = (params) => wxRequest(params, apiMall + '/wxa-api/api/group/activity/detail');//咖啡详情
const cafestorageList = (params) => wxRequest(params, apiMall + '/wxa-api/api/cafestorage/list');//咖啡库
const optionalMenu = (params) => wxRequest(params, apiMall + '/wxa-api/api/cafestorage/optional/menu/10714');//兑换选择口味
const optionalOperation = (params) => wxRequest(params, apiMall + '/wxa-api/api/cafestorage/optional/operation');//兑换入库
const recordList = (params) => wxRequest(params, apiMall + '/wxa-api/api/wish/cafe/record/list');//心愿记录我的心愿
const assistList = (params) => wxRequest(params, apiMall + '/wxa-api/api/wish/cafe/assist/list');//赠与记录
const orderList = (params) => wxRequest(params, apiMall + '/wxa-api/api/group/v1/record/list');//拼团订单列表
const mainGetgoods = (params) => wxRequest(params, apiMall + '/wxa-api/api/mainbuyapi/getgoods');//首页商品
const detailVirtual = (params) => wxRequest(params, apiMall + '/wxa-api/api/group/record/detail/virtual');//参与拼团
const toPay = (params) => wxRequest(params, apiMall + '/wxa-api/api/group/record/create');//支付统一下单

export default {
  cafeRule,
  activityList,
  activityDetail,
  cafestorageList,
  optionalMenu,
  optionalOperation,
  recordList,
  assistList,
  orderList,
  mainGetgoods,
  detailVirtual,
  toPay,
  wxJsCode2Session
}
