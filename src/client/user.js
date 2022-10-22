import service from "../utils/axios/service";

const baseUrl = 'https://62f9ee323c4f110faa8ed350.mockapi.io/api';

export const signup = (user) => service.post(`${baseUrl}/signup`, user);
