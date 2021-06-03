const baseUrl = 'http://192.168.1.205:3001/';  //服务器地址
const token = '';
/**
 * @param {string} url 接口地址
 * @param {string} method 请求方法：GET、POST，只能大写
 * @param {JSON} [params=''] body的请求参数，默认为空
 * @return 返回Promise
 */
export default (url, method, params = '') => {
    return new Promise(function (resolve, reject) {
        fetch(`${baseUrl}${url}`, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: params ? JSON.stringify(params) :undefined
        }).then((response) => response.json())
            .then((responseData) => {
                console.log('res:', url, responseData);  //网络请求成功返回的数据
                resolve(responseData);
            })
            .catch((err) => {
                console.log('err:', url, err);	  //网络请求失败返回的数据        
                reject(err);
            });
    });

}

