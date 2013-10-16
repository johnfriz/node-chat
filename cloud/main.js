var chat = require("./chat.js")

exports.join = function(params, cb) {
  return chat.join(params, cb);
};

exports.who = function(params, cb) {
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
  return chat.send(params, cb);
};

exports.part = function(params, cb) {
  return chat.part(params, cb);
};

