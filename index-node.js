var http = require('http');
var url = require('url');
var fs = require('fs');
const { file } = require('@babel/types');

http.createServer(function (req, res) {

    var q = url.parse(req.url, true);
    var filename = "." + q.pathname + ".html";
    if(filename=='./.html'){
        filename='./index.html';
    }
    fs.readFile(filename, function (err,data){
        if(err){
            fs.readFile('./404.html', (err,data) => {
                res.write(data);
                res.end();
            });
        }
        else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        }
    });
}).listen(8080);