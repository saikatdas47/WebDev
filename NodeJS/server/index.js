
const http=require('http');
const myserver=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    console.log(req);
    res.end('Hello from my server!');
});
//We use `req` (request) to access information about the incoming HTTP request, such as headers, URL, and method.- The HTTP request object representing the client's request.
// We use `res` (response) to construct and send the HTTP response back to the client, including status code, headers, and body.The HTTP response object used to send a response back to the client.
myserver.listen(3000,()=>{
    console.log('Server is listening on port 3000');
});