import axios from "axios";



const instanse = axios.create({
    baseURL: 'https://restcountries.com/v3.1/all',
    headers: {
        'Content-Type': 'application/json',
    },
})

export const authApi = {
    addCountries() {
        return instanse.get('')
    },
}