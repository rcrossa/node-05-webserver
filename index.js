const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function (req,res) {
    res.send('Hola Mundo')

})
app.post('/', function (req,res) {
    res.send('Post Hola Mundo')

})

app.listen(port, () => {
    console.log(`Server started - Port ${port}`);
})