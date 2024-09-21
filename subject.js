const http =  require('http');
const fs = require('fs');

const myServer = http.createServer(function (req,res){

   fs.readFile('index.html' , function(err , data){

   res.writeHead(200 , { 'Content-Type' : 'text/html'});
   res.write(data)
   return res.end();
});
});
myServer.listen(8000, () => console.log("server started!"));
