import axios from 'axios';
import config from '../config.json';

const RATES_API = axios.create();

RATES_API.defaults.baseURL = config.RATES_BASE_URL;

RATES_API.interceptors.request.use(requestConfig => {
  requestConfig.params = {
    ...requestConfig.params,
    // eslint-disable-next-line @typescript-eslint/camelcase
    app_id: config.RATES_API_KEY,
  };

  return requestConfig;
});

export { RATES_API };
