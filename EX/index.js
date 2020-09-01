// Dependencies
const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');

const app = express();

// Allow dotfiles - this is required for verification by Lets Encrypt's certbot
// app.use(express.static(path.join(__dirname, 'build'), {dotfiles: 'allow'}));
app.use(express.static(__dirname, { dotfiles: 'allow' } ));

// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/chat.ebudezain.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/chat.ebudezain.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/chat.ebudezain.com/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};


app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Starting both http & https servers
// const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

// httpServer.listen(80, () => {
// 	console.log('HTTP Server running on port 80');
// });

httpsServer.listen(3000, () => {
	console.log('HTTPS Server running on port 443');
});



