const express = require('express');
const path = require('path');
const app = express();

// Allow dotfiles - this is required for verification by Lets Encrypt's certbot
// app.use(express.static(path.join(__dirname, 'build'), {dotfiles: 'allow'}));
app.use(express.static(__dirname, { dotfiles: 'allow' } ));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});
console.log(path.join(__dirname, 'index.html'))
app.listen(3000);



