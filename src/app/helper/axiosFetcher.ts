import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
})

const fetcher = async (url: any) => axiosInstance.get(url).then(res => res.data)

export default fetcher
