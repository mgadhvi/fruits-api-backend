//run the actual program
require('dotenv').config()
const port = process.env.PORT
const app = require('./app')

app.listen(port, () => {
    console.log(`Simple api listening on port ${port}`);
})