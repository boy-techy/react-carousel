// import compression from 'compression';
import serverLoader from "./serverLoader";

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


app.use('/dist', express.static(path.resolve(__dirname, '../dist')));
app.use(serverLoader);

app.listen(PORT, console.log(`App listening on port ${PORT}!`));

app.on('error', error => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    
    const bind = typeof PORT === 'string' ? 'Pipe ' + PORT : 'Port ' + PORT;
    
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
});
