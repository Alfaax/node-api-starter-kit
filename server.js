let express = require('express');
let bodyParser = require('body-parser');

let app = express();
let port = process.env.PORT || 4000;
let routes = require("./js/router");

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/api', routes);

app.get('/', (req, res) => res.send('.'));

app.listen(port, function () {
    console.log("Running Node API on port " + port);
});
