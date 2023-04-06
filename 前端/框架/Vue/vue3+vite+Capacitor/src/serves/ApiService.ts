import axios, { AxiosInstance } from 'axios';

class ApiService {
  private axiosInstance: AxiosInstance;

  constructor() {
    let api_base_url = ''
    console.log(import.meta);
    if (import.meta.env.MODE === 'development') {
      api_base_url = '/apiTest'
    } else if (import.meta.env.MODE === 'production') {
      api_base_url = '/apiTest'
    }
    this.axiosInstance = axios.create({
      baseURL: api_base_url,
      timeout: 10000,
    });
  }

  public async get<T>(url: string): Promise<T> {
    const response = await this.axiosInstance.get<T>(url);
    return response.data;
  }

  public async post<T>(url: string, data?: any): Promise<T> {
    const response = await this.axiosInstance.post<T>(url, data);
    return response.data;
  }

  // 扩展其他 HTTP 方法
}

export const apiService = new ApiService();
