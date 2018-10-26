//Install express server
const express = require('express');
const path = require('path');
var compression = require('compression');

const app = express();
app.use(compression({filter: shouldCompress}));

function shouldCompress (req, res) {
    if (req.headers['x-no-compression']) {
        // don't compress responses with this request header
        return false
    }

    // fallback to standard filter function
    return compression.filter(req, res)
}

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/abz'));

app.get('/*', function (req, res) {

    res.sendFile(path.join(__dirname + '/dist/abz/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);