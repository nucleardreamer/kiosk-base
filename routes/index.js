// routes
module.exports = function(app, settings) {

    app.get('/', function(req, res){
        res.render('index', { 
            port: settings.port 
        });
    });

    app.get('/partials/:name', function(req, res) {
        res.render('partials/' + req.params.name);
    });

}
