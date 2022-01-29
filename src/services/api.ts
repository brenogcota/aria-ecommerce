import axios from 'axios'

import { BASE_URL } from '../constants'

const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
})

export default api
