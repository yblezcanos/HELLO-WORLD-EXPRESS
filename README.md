# HELLO-WORLD-EXPRESS
SIMPLE DEMO WITH NODE AND EXPRESS

## STEPS
- Create directory
- Initialize nmp ```nmp init```
- Install express as a dependency ```npm install express --save```
- Create a file named app.js with the following content 
    ```const express = require('express')
    const app = express()
    const port = 3000

    app.get('/', (req, res) => {
    res.send('Hello World!')
    })

    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })```

*The application starts a server and listens for connections on port 3000. The application responds with “Hello World!” for requests to the root URL (/) or the root path. For each different path, it will respond with a 404 Not Found error.*
- Run the application with the following command ```node app.js```
- Load http://localhost:3000/ in a browser to see the output