import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import JSONBigInt from 'json-bigint'
import qs from 'qs'

const JSONBig = JSONBigInt({ storeAsString: true })

/**
 * This function only return axios instance to work with REST API
 * @param baseURL URL endpoint
 * @returns Axios instance
 */
export const createApiClient = (baseURL: string) =>
  axios.create({
    baseURL,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    timeout: 10000,
    transformResponse: (res) => {
      const parsedResponse = JSONBig.parse(res)
      return parsedResponse
    },
    paramsSerializer(params) {
      return qs.stringify(params, { arrayFormat: 'brackets' })
    },
  })

/**
 * Axios instance wrapper to clarify request typings & config
 * @param url URL endpoint
 * @param clientCallback Callback to modify axios instance
 * @returns Simplify HTTP methods to work with REST API [GET, POST, PUT, DELETE, PATCH]
 */
export const createRepository = (url: string, clientCallback?: (client: AxiosInstance) => void) => {
  const client = createApiClient(url)
  // Modify client default config
  if (clientCallback)
    clientCallback(client)

  const get = <R, P = any>(url: string, params?: P, config?: AxiosRequestConfig) =>
    client({
      url,
      method: 'GET',
      params,
      ...config,
    }) as Promise<AxiosResponse<R>>

  const post = <R, D>(url: string, data?: D, config?: AxiosRequestConfig) =>
    client({
      url,
      method: 'POST',
      data,
      ...config,
    }) as Promise<AxiosResponse<R>>

  const remove = <R = any, P = any>(url: string, params?: P, config?: AxiosRequestConfig) =>
    client({
      url,
      method: 'DELETE',
      params,
      ...config,
    }) as Promise<AxiosResponse<R>>

  const put = <R, D>(url: string, data?: D, config?: AxiosRequestConfig) =>
    client({
      url,
      method: 'PUT',
      data,
      ...config,
    }) as Promise<AxiosResponse<R>>

  const patch = <R, D>(url: string, data?: D, config?: AxiosRequestConfig) =>
    client({
      url,
      method: 'PATCH',
      data,
      ...config,
    }) as Promise<AxiosResponse<R>>

  return {
    GET: get,
    POST: post,
    delete: remove,
    PUT: put,
    PATCH: patch,
  }
}
