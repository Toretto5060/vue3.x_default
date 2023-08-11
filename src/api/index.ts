import { inject } from 'vue';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

export function indexPage(userId: number, data:any): Promise<AxiosResponse<any>> {
    const $axios = inject<AxiosInstance>('axios');
    return $axios.get(`/users/${userId}`, { params: data });
    // return $axios.post(`/users/${userId}`, data );

}

