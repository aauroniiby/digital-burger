import axios from 'axios'

const instance = axios.create({
    baseURL:'https://burger-builder-4fb58.firebaseio.com'
})

export default instance
