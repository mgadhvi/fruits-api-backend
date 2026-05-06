//run the actual program
const app = require('./app')
const port = 3000

app.listen(port, () => {
    console.log(`Simple api listening on port ${port}`);
})