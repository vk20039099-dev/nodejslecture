let http= require('http');
 
let app=http.createServer( (req, res) => {
    res.writeHead(200, {'Content-Type': 'text-plain'});
    res.end('hello vishal this side from node js server' );  
});

app.listen(8000,()=>{
    console.log('server is running on port 8000');
})


