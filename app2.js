const http = require('http')    //Pull in a useful node package

const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req, res) => {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write(`<table>
                  <tr>
                <th>Location</th>
          <th>Spending Hours</th>
          <th>Amount</th>
      </tr> 
      <tr>
      <td>Mysore</td>
      <td>4</td>
      <td>1000</td>
  </tr>
      <tr>
          <td>Amritsar</td>
          <td>5</td>
          <td>5000</td>
      </tr>
      <tr>
            <td>Himachal</td>
            <td>2</td>
            <td>2000</td>
        </tr>
       </table>`)

      res.end('</body></html>')
      //Close the response
    }
  )

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})