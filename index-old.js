const http = require('http');


http.createServer((req, res) => {


    console.log('Hola Mundo');

    // res.writeHead(200, {'Content-Type': 'application/json'});
    // const user = {
    //     id: 123,
    //     name: 'Roberto'
    // }
    // res.write(JSON.stringify(user));
    
        
    res.writeHead(200, {'Content-Type': 'application/csv'});
    res.writeHead(200, {'Content-Disposition': 'Attachment; filename=usuarios.csv'});
    res.write('id  |   name  |\n123 | Roberto\n456  | Marta');
    


    res.end();

}).listen(4500);
