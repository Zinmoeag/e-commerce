import Axios from 'axios'

const axiosClient = Axios.create({
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  },
  withCredentials: true
})

export default axiosClient
