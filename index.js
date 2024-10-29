const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8800;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, "static")));
app.use('/', require(path.join(__dirname, 'routes/blogRouter.js')));

app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`);
});
