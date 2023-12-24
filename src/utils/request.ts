import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';

const service = axios.create({
	baseURL: "",
	timeout: 5000,
})

// 请求拦截
service.interceptors.request.use((config:any) => {
	console.log(config)
		// 非登录接口添加token
		if (config["url"].indexOf("login") < 0) {
			config.headers['token'] = uni.getStorageSync('token');
		}
		return config;
	},
	error => {
		return Promise.reject(error);
	});

// 响应拦截
service.interceptors.response.use((res:any) => {
	if (res.status == 200) {
		// 请求成功后设置token
		if (res.data.code == 100) {
			uni.setStorageSync('token', res.header["token"]);
		}
		return res.data;
	} else {
		return Promise.reject(res.data.msg);
	}
});


