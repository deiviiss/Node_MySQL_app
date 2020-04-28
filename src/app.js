/*
#  ·················
#        ________
#       /./·___/·
#    __/./__··)·
#   /___/____/·
#  ·················
*/

const app = require('./config/server');

// Starting the server

app.listen(app.get('port'), () => {
  console.log('Sever on port', app.get('port'));
});