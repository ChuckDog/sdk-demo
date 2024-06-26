import axios from 'axios';
import apis from './apis';

const BASE_URL = 'http://52.82.70.169:3000';

const apiBuilder = (apis: any) => {
  return Object.keys(apis).reduce((pre: any, key) => {
    let url,
      method = 'POST';
    const urlArr = apis[key].split(' ');

    if (urlArr.length > 1) {
      [method, url] = urlArr;
    } else {
      url = urlArr[0];
    }
    const matchRes = url.match(/(?<=:{).*?(?=})/);

    pre[key] = async (data: any, options: any) => {
      let params,
        currentUrl = url;

      if (matchRes) {
        currentUrl = url.replace(/(:{).*?(})/, data[matchRes[0]]);
      }
      if (method === 'GET') {
        params = data;
        data = undefined;
      }
      const response = await axios(currentUrl, {
        baseURL: BASE_URL,
        method,
        data,
        params,
        withCredentials: true,
        ...(options || {}),
      });

      return response?.data?.data;
    };

    return pre;
  }, {});
};

export default apiBuilder(apis) as any;
