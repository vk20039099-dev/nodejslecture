const http = require('http')

 const app= http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, ({ 'content-type':'text-plain' }))
        res.end('Homepage');
    }
    else if (req.url === '/about') {
        res.writeHead(200, ({ 'content-type':'text-plain' }))
        res.end('about');
    }
    else if (req.url === '/blog') {
        res.writeHead(200, ({ 'content-type':'text-plain' }))
        res.end('Blog');
    }
    else if (req.url === '/contact-us') {
        res.writeHead(200, ({ 'content-type':'text-plain' }))
        res.end('Contact us');
    }
    else {
        res.writeHead(404, ({ 'content-type':'text/html' }))
        res.end('errro 404 page');
    }



}).listen(4000, () => console.log('port 4000'))
