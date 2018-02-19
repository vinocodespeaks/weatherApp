const request = require('request')
let fetch = (latitude,longitude, callback)=>{
request({
    url:`https://api.forcast.io/forcast/4a04d1c42fd9d32c97a2c291a32${latitude},${longitude}`,
    json:true
},(error,res,body)=>{
    if(error){
        callback('unable to connect please check your internet connectivity'+error)
    }
    else if(res.statusCode===400){
        callback('unable to find the weather report')
    }
    else if(res.statusCode===200){
        callback(undefined,{
            weather:body.currently.tempreature,
            rounded:body.currently.apparentTemperature
        })
    }
})

}
module.exports.fetch = fetch;
//module.exports.fetchWeather=fetchWeather