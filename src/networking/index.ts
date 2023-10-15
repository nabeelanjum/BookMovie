import axios, { AxiosRequestConfig } from 'axios';
import { API_KEY, BASE_URL } from '../../env';

export default async function invokeAPI(apiConfig: AxiosRequestConfig) {
  try {
    const config: AxiosRequestConfig = {
      ...apiConfig,
      url: `${BASE_URL}${apiConfig.url}`,
      params: {
        ...apiConfig.params,
        api_key: API_KEY,
      }
    }
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.log(error);
    // We can handle different scenarios here and show meaningful messages to the user but due to time limitation leaving it as is
    // TODO: Show a readable error message to the user
  }
}
