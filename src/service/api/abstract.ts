import axios, { AxiosInstance, AxiosResponse, Canceler } from 'axios';
import {http} from "./config";

export interface ApiAbstractInterface<T,K>{
    getList():Promise<T[]>;
}

export class ApiAbstract<T,K> implements ApiAbstractInterface<T, K>{
    private http: AxiosInstance;
    private apiPath: string;
    private listCanceller: Canceler | null;

    constructor(http: AxiosInstance, apiPath: string) {
        this.http = http
        this.apiPath = `/${apiPath}`;
        this.listCanceller = null;
    }

    async getList():Promise<[T]>{
        const response = await this.http.get(`${this.apiPath}`);
        return response.data;
    }

    async post(data : K): Promise<T>{
        const response = await this.http.post(`${this.apiPath}`, data);
        return response.data;
    }

    async delete(id : number): Promise<T>{
        const response = await this.http.delete(`${this.apiPath}/${id}`);
        return response.data;
    }
}