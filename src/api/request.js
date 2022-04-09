import axios from 'axios'
import nprogress from 'nprogress';
import "nprogress/nprogress.css"

var qs=require('qs')

const requests = axios.create({
    baseURL: "/api",
    timeout:5000,
    headers:{'content-type':'application/x-www-form-urlencoded'}
})
// requests.post('url',qs.stringify(params)).then(res=>res.data)
requests.interceptors.request.use((config)=>{
    nprogress.start()
    return config;
})
requests.interceptors.response.use((res)=>{
    nprogress.done()
    return res.data
},(error)=>{
    return Promise.reject(new Error('faile'))
})


export default requests