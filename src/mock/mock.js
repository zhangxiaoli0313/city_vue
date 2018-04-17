import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
let city = require( '../static/data/provinceCity.js')
let cityArr = require( '../static/data/city.js')

let AxiosMock = new AxiosMockAdapter(axios)

let DataMock = () => {
    AxiosMock.onGet('/api/city').reply((config)=>{
        return new Promise((resolve, reject) => {
            resolve([200, cityArr])
        })
    })
    AxiosMock.onGet('/api/provinceCity').reply((config)=>{
        return new Promise((resolve, reject) => {
            resolve([200, city])
        })
    })
}

export default DataMock