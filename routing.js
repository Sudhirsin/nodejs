/**   Routing */
// Performing task at particular path is call routing

const http = require('http');

const routes = {
    '/': function index(request, response) {
        response.writeHead(200);
        response.end('Node Routitng')
    },
    "/aboutus": function aboutus (request, response) {
        response.writeHead(200);
        response.end('This about page')
    }
}





http.createServer((req, res) => {
    // if (req.url == '/') {
    //     return index(req, res)
    // }

    // if (req.url == '/aboutus') {
    //     return aboutus(req, res)
    // }

    if (req.url in routes) {
        return routes[req.url](req, res);
    }
}).listen(4000)


