const http = require('http');

//Creando el servidor
http.createServer((req, resp) => {

        resp.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Yasar',
            edad: 22,
            url: req.url
        };

        resp.write(JSON.stringify(salida));
        //resp.write('Hola Mundo');
        resp.end();

    })
    .listen(8080); //Puerto escuhado (local)

console.log('Escuchando el puerto 8080');