

const fs = require('fs/promises');
const path = require('path');



module.exports = (async function filterDir (dir, ext, callback){
  try {
    const files = await fs.readdir(dir);
    files.filter(file => file.endsWith(ext))
      .forEach(file => callback(file));
  } catch (err) {
    return callback(err);
  }
});

