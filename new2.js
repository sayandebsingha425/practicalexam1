
const http=require("http")
const fs = require("fs")

const url="http://www.google.com"
http.get(url,(responce)=>{
responce.on("data",(chunk)=>{

    fs.writeFile("input.txt",chunk.toString(), ()=>
{
     //console.log("write ended")

})
   
    
})
responce.on("end",()=>{
    console.log("End of the response from server")
})
}).on("error",(err)=>{
    console.error(err.message)
})


