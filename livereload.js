livereload = require('livereload');

server = livereload.createServer({
	exts: ['jsx', 'js','css','html'],
	debug: true
});
server.watch([__dirname, __dirname + "/js"]);