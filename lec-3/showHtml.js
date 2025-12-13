const fs = require('fs')
let http = require('http');
const path = require('path')
const createserver = http.createServer((req, res) => {


    if (req.url === '/') {
        let filepath = path.join(__dirname, "demo.html")
        fs.readFile(filepath, (error, data) => { 
        if (error) {
            res.writeHead(500, ({ 'Content-Type': 'text/plain' }))
            res.end(
                "erroremnjhhj jikhsd jhkjdsf juhn djum,n u  msdj  j   dkhk hkyhgd jikyiyda uikyisd kyuidf uoiyu8ids"
            )
        } else {
            res.writeHead(200, ({ 'Content-Type': 'text/html' }))
            res.end(
                data
            )
        }})

    } else if (req.url === '/about') {
        res.writeHead(200, ({ 'Content-Type': 'text/plain' }))
        res.end(
            "About"
        )
    } else if (req.url === '/blog') {
        res.writeHead(200, ({ 'Content-Type': 'text/plain' }))
        res.end(
            "blog"
        )
    } else {
        res.writeHead(404, ({ 'Content-Type': 'text/plain' }))
        res.end(
            "404 error page"
        )
    }
})

createserver.listen(3000, () => {
    console.log('port name : 3000');
});
