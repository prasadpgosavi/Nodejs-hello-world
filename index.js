const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    const html = '<html><body><h1> Well come to all & Good Evening to all. </h1></body></html>';
    res.end(html);
});
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))

module.exports = app;
