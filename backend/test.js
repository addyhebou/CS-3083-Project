const daijahHash = (password) => {
  var md5 = require('md5');
  var hash = md5(password);
  console.log(`Old password: ${password}; New password: ${hash}`);
};

console.log(daijahHash('steverogers'));
