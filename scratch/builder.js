const fs = require('fs');

const parts = [];
module.exports = {
  add: (str) => parts.push(str),
  save: (path) => fs.writeFileSync(path, parts.join('\n'), 'utf8')
};
