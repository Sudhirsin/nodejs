const http = require('http');

// Takes two parameter url and callback with getting res from url
http.get('http://api.open-notify.org/astros.json', (res) => {
    let data = ''
    res.on('data', chunk => {
        data += chunk
    })

    res.on('end', () => {
        console.log('Mydata: ', JSON.parse(data))
    })
})