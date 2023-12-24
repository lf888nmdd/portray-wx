import axios from 'axios'
import type { InternalAxiosRequestConfig } from 'axios';

import settle from '../../node_modules/axios/lib/core/settle';
import buildURL from '../../node_modules/axios/lib/helpers/buildURL';



class Configuration {
	AxiosChange(){
		axios.defaults.adapter = function (config: InternalAxiosRequestConfig<any>|any) {
			const { method } = config;
			return new Promise((resolve, reject) => {
			  uni.request({
				url:buildURL(config.url, config.params, config.paramsSerializer),
				method: method?.toUpperCase(),
				header: { ...config.headers },
				data: config.data,
				responseType: config.responseType,
				complete: function complete(response:any) {
				  const { data, statusCode, errMsg, header } = response;
				  const responseInfo = {
					data,
					status: statusCode,
					errMsg,
					header,
					config: config,
				  };
		  
				  settle(resolve, reject, responseInfo);
				},
			  });
			});
		  };

		
	}
}

export default new Configuration()

