import axios from 'axios'

const axiosInstance = axios.create({
  maxRedirects: 0,
})

axiosInstance.interceptors.request.use(async (request) => {
  return request
})

axiosInstance.interceptors.response.use((response) => {
  return response
})

export default axiosInstance
