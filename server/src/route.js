const model = require('./model');

module.exports = (app) => {
    app.post('/home/', model.post);
}