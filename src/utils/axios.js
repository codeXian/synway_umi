import axios from 'axios';
import { message } from 'antd';

axios.defaults.timeout = 30000;
axios.defaults.baseURL = '';

// response 拦截器
axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);

const PARAMSTYPE = ['get', 'delete'];

// 封装请求
export function ajax({ url, type = 'get', data = {} }) {
  return new Promise((resolve, reject) => {
    axios[type](url, PARAMSTYPE.indexOf(type) > -1 ? { params: data } : data)
      .then(response => {
        // TODO: 完善状态码
        if (response.status === 200) {
          if (response.data.code === '0') {
            //  请求成功
            resolve(response.data.data);
          }
        }
      })
      .catch(err => {
        // 统一处理报错
        message.error(err.response.data);
        reject(err);
      });
  });
}

// 并发请求
export function ajaxAll(ajaxArray) {
  // TODO:
  axios.all(ajaxArray).then(axios.spread(function(acct, perms) {}));
}
