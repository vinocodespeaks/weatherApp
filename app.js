

const location = require('./geocode')
const weather=require('./weather')
const express = require("express")
 
const app = express();
 
const request = require('request')
//const  test = require('/test')for
app.set('view engine', 'ejs');
//app.use(__dirname,'public');

app.get('/',(req,res)=>{

   
    res.render("search");
});
app.get('/result',(req,res)=>{
   
   let search=req.query.search;
   location.fetchLocation(search,(error,result)=>{
       if(error){
           console.log(error)
       }
       else {
           //res.send(result)
           console.log(result)
           weather.fetch(result.latitude,result.longitude,(err,weatherData)=>{
               if(err){
                   console.log(err)
               }
               else {
                   //res.send(weatherData.weather);
                   console.log(weatherData.weather)
                
               }
           })
       }
   })
// request({
//     url:`https://maps.googleapis.com/maps/api/geocode/json?address=${search}`,
//     json:true
// },(error,response,body)=>{
//     if(error){
//         callback('Unable to connect')
//     }
//     else if(body.status==='ZERO_RESULTS'){
//         callback('Unable to find the address')
//     }
//     else if(body.status==='OK'){
//         callback(undefined,{
//             address:result.body.results[0].formatted_address,
//             latitude:body.result[0].geomatry.location.lat,
//             longitude:body.result[0].geomatry.location.lng
//         })
//     }
// })

})
app.listen(3000,()=>{
console.log('app is running on port 3000')
})
