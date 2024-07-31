import { API_KEY } from '@/const/const';
import axios from 'axios';

const weatherApi = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    params: {
        appid: API_KEY
    }
});

export const fetchWeatherData = (params: string) => {
    return weatherApi.get(params);
}