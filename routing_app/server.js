const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3002;

app.use(bodyParser.urlencoded({ urlencoded: false }))

const route = require('./router')
app.use('/api', route)


app.get('/', (req, res) => {
    res.send('Routing app')
})

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))