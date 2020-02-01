const http=require('http');
const url=require('url')
const fs=require('fs');



http.createServer((req,res)=>{
    resDetails=url.parse(req.url,true)
    q=resDetails.pathname;
    fs.readFile('.'+q,(err,data)=>{
        if(err) {
            res.writeHead(404,{'Content-Type':'text/html'})
            res.write('sorry dear , couldnt serve you now')
            console.log(err);
            return
       }
        
        console.log(resDetails)
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data);
        
    })

}).listen(3000);
