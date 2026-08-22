import axios from 'axios';

export abstract class BaseHttp {

  protected baseUrl: string = 'http://localhost:8080';

  protected async get<T>(
      url: string,
      params?: Record<string, unknown>
  ): Promise<T> {
    const response = await axios.get<T>(
        `${this.baseUrl}${url}`,
        { params }
    );
    
    return response.data;
  }

  protected async post<T>(
      url: string,
      data: unknown
  ): Promise<T> {
    const response = await axios.post<T>(
        `${this.baseUrl}${url}`,
        data
    );

    console.log('response.data:', response.data);
    return response.data;
  }

  protected async put<T>(
      url: string,
      data: unknown
  ): Promise<T> {
    const response = await axios.put<T>(
        `${this.baseUrl}${url}`,
        data
    );

    return response.data;
  }

  protected async delete<T>(
      url: string
  ): Promise<T> {
    const response = await axios.delete<T>(
        `${this.baseUrl}${url}`
    );

    return response.data;
  }
}