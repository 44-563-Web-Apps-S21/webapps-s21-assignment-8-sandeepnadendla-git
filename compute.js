const http = require('http')    //Pull in a useful node package


const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
    http.createServer(            //Creates the response loop
        (req, res) => {               //Anonymous function to handle the request

            fake_url = "https://fake.com/path" + req.url
            const url = new URL(fake_url)
            const search_params = url.searchParams

            if (req.method === 'GET') {
                let x = search_params.get("x");
                res.statusCode = 200      //code for OK
                res.setHeader('Content-Type', 'text/plain');
                res.write(`Cbrt(${x}) is ${Math.cbrt(x)}`);
                res.end();

            } else {
                console.log("Status 404")
                res.statusCode = 404;
                res.end();
            }

        }
    )

server.listen(port, hostname, () => {   //Start the server
    console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})