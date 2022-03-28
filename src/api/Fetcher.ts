import axios, { AxiosRequestConfig } from 'axios';

const baseConfig: AxiosRequestConfig = {
  baseURL: 'https://api.finlogix.com/v1',
  timeout: 60000,
  responseType: 'json',
}

export const getApi = (url: string, config?: AxiosRequestConfig) => {
  return axios.get(url, {...baseConfig, ...config});
};

export const postApi = (url: string, data: any) => {
  return axios.post(url, data, baseConfig);
};

export const putApi = (url: string, data: any) => {
  return axios.put(url, data, baseConfig);
};

export const deleteApi = (url: string, data: any) => {
  return axios.delete(url, baseConfig);
}
