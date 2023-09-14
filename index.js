const app = require("express")();

app.get('/app', (req, res) => {
    res.send('GeeksforGeeks')
})

app.listen(4000, () => {
    console.log("enna nadakuthu");
})