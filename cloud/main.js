var chat = require("./chat.js")

exports.join = function(params, cb) {
  console.log('join from ', params.__fh.cuid);
  return chat.join(params, cb);
};

exports.who = function(params, cb) {
  console.log('who from ', params.__fh.cuid);
  return chat.who(params, cb);
};

exports.recv = function(params, cb) {
  console.log('recv from ', params.__fh.cuid);
  
  chat.recv(params, function(err, res) {
    console.log('recv response for ', params.__fh.cuid, ' : = ', res);
    cb(err, res);
  });
};

exports.send = function(params, cb) {
  console.log('send from ', params.__fh.cuid);
  
  return chat.send(params, cb);
};

exports.part = function(params, cb) {
  console.log('part from ', params.__fh.cuid);
  return chat.part(params, cb);
};

