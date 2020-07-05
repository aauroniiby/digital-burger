import axios from 'axios'

const instance = axios.create({
    baseURL:'https://react-digital-burger.firebaseio.com/'
})

export default instance
