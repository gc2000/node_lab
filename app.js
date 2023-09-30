const http = require("http");
const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;
    console.log(url, "and," , method);

    res.writeHead(200,{'content-type':'text/html'});

    if (url === '/'){
        res.write('<html>           \
                        <head>                              \
                            <title>User Name Form</title>   \
                        </head>                             \
                        <body>                                 \
                            <form action="/create-user" method="POST">                          \
                                <label for="username">User Name:</label>    \
                                <input type="text" id="username" name="username" required>  \
                                <br><br>    \
                                <input type="submit" value="Submit">    \
                            </form> \
                        </body> \
            </html>');
        res.end();

    }

    if (url==='/create-user' && method === 'POST') {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {
            console.log('Received data from the request body:', body.split("=")[1]);
            let name =  body.split("=")[1]
            res.end(`greating, ${name}!`);
        });
    } 
        
    if (url === '/users') {

        res.write('<header>User list</header>');
        res.write('<body><ul><li>user1</li><li>user2</li></ul></body>');
        res.end();
    }
})

const PORT = '3001'
const listener = server.listen(PORT,()=>{
    console.log(`listender is on ${PORT}`)
}

)