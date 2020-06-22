import axios from 'axios'

const instance = axios.create({
    baseURL:'https://digital-burger-ea907.firebaseio.com/'
})

export default instance
