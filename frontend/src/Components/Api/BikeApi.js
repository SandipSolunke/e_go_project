import axios from 'axios'
import configData from '../../Config/Config.json'

const bikeApi = axios.create({
  
    baseURL: configData.api.bikeApi,
    timeout: 5000,
    headers: {
      'Accept-Version': 1,
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json; charset=utf-8',
    },
  });

export default bikeApi