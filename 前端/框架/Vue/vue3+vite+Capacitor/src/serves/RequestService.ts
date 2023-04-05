// import { reactive } from 'vue';
// import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// interface ResponseData<T = any> {
//   code: number;
//   message: string;
//   data: T;
// }

// interface RequestOptions extends AxiosRequestConfig {
//   showLoading?: boolean;
// }

// export default class RequestService {
//   private instance = axios.create({
//     baseURL: 'http://localhost:3000',
//     timeout: 10000,
//   });

//   private loading = reactive({ show: false });

//   constructor() {
//     this.instance.interceptors.request.use(
//       (config: RequestOptions) => {
//         // 在请求发出之前进行一些操作，如添加请求头等
//         if (config.showLoading) {
//           this.loading.show = true;
//         }
//         return config;
//       },
//       (error: any) => {
//         // 对请求错误进行处理
//         this.loading.show = false;
//         return Promise.reject(error);
//       }
//     );

//     this.instance.interceptors.response.use(
//       (response: AxiosResponse<ResponseData>) => {
//         // 对响应数据进行处理
//         this.loading.show = false;
//         const { code, message, data } = response.data;
//         if (code !== 0) {
//           return Promise.reject(message);
//         }
//         return data;
//       },
//       (error: any) => {
//         // 对响应错误进行处理
//         this.loading.show = false;
//         return Promise.reject(error);
//       }
//     );
//   }

//   public get<T = any>(url: string, options?: RequestOptions): Promise<T> {
//     return this.instance.get<T>(url, options);
//   }

//   public post<T = any>(
//     url: string,
//     data?: any,
//     options?: RequestOptions
//   ): Promise<T> {
//     return this.instance.post<T>(url, data, options);
//   }

//   public put<T = any>(
//     url: string,
//     data?: any,
//     options?: RequestOptions
//   ): Promise<T> {
//     return this.instance.put<T>(url, data, options);
//   }

//   public delete<T = any>(url: string, options?: RequestOptions): Promise<T> {
//     return this.instance.delete<T>(url, options);
//   }

//   public setLoading(show: boolean): void {
//     this.loading.show = show;
//   }
// }
