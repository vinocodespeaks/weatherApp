const request=require('request')
var fetchLocation=(searchAddress,callback)=>{

request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${searchAddress}`,
    json:true
},(error,response,body)=>{
    if(error){
        callback('Unable to connect')
    }
    else if(body.status==='ZERO_RESULTS'){
        callback('Unable to find the address')
    }
    else if(body.status==='OK'){
        callback(undefined,{
            address:body.results[0].formatted_address,
            latitude:body.results[0].geometry.location.lat,
            longitude:body.results[0].geometry.location.lng
        })
    }
})
}
module.exports.fetchLocation = fetchLocation;
