const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const fs = require('fs');
const data = require('./data.js');

const server = http.createServer((req, res) => {
    switch(req.url){
        case "/":
            res.statusCode = 200;
            res.setHeader('content-type','text/html');
            res.end(data.data());
            break;
        case "/image.jpg":
            res.statusCode = 200;
            res.setHeader('content-type','image/jpg');
            let photo = fs.readFileSync("webb-telescope.jpg");            
            res.end(photo);
            break;

        case "/favicon.ico":
            res.statusCode = 200;
            res.setHeader('content-type','image/x-icon');
            let favicon = fs.readFileSync("webb-telescope.jpg");            
            res.end(favicon);
            break;

        case "/video.mp4":
            res.statusCode = 200;
            res.setHeader('content-type','video/mp4');
            const vid = fs.readFileSync("vid.mp4");            
            res.end(vid);
            break;

        case "/json":
            res.statusCode = 200;
            res.setHeader('content-type','text/json');
            res.end(JSON.stringify({name:'mohamed',age:'21'}));
            break;
        case "/styles.css":
            res.statusCode = 200;
            res.setHeader('content-type','text/html');
            res.end(`body{
                color:gray;                
            }
            h1{
                background-color:aqua
            }
            div{
                border: 2px gray solid;
                // width: 70%;
                display:flex;
                align-items: center;    
                flex-direction:column;
                justify-content:center
            
            }
            img{
                width:25%
            }
            button{
                padding:5px;
                background-color: gray;
                border-radius: 3px; 
                margin:4px;
                border-style: none;
            }
            `);
            break;
        default :
            res.statusCode=404;
            res.setHeader('content-type','text/html');
            res.end('<h1>page not found</h1>');
            break;
    } 
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
