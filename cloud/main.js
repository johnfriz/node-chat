var chat = require("./chat.js")

exports.join = function(params, cb) {
  return chat.join(params, cb);
};

exports.who = function(params, cb) {
  return chat.who(params, cb);
};

exports.recv = function(params, cb) {
  return chat.recv(params, cb);
};

exports.send = function(params, cb) {
  return chat.send(params, cb);
};

exports.part = function(params, cb) {
  return chat.part(params, cb);
};

