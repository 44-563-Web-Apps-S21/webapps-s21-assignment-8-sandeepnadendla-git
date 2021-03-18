const http = require('http')  

const hostname = process.env.hostname || '127.0.0.1'   
const port = process.env.port || 3001               
const server =
    http.createServer(           
        (req, res) => {              

            var arr = ["Speed", "Car", "furious", "Demon", "Quick", "On Time"];
            var max = arr.length;
            var Rdmvalue = Math.floor(Math.random() * (max) )
            res.statusCode = 200     
            res.setHeader('Content-Type', 'text/html') 

            res.write(`<html>
             <head>
             <title> Bonus  </title>
             </head>
             <body>
             <h1>bonus with random number usage</h1> <h2>${arr[Rdmvalue]}</h2>`)
            res.end('</body></html>')
          
        }
    )

server.listen(port, hostname, () => {   //Start the server
    console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})