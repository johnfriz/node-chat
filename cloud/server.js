var url = require("url"),
    qs = require("querystring"),
    chat = require("chat.js");

exports.who = function(req, res) {
  chat.who({}, function(err, data) {
    handleRes(res, err, data);
  });
};

exports.join = function(req, res) {
  var params = {
    nick : qs.parse(url.parse(req.url).query).nick
  };

  chat.join(params, function(err, data) {
    handleRes(res, err, data);
  });
};

exports.part = function(req, res) {
  var params = {
    id: qs.parse(url.parse(req.url).query).id
  };

  chat.part(params, function(err, data) {
    handleRes(res, err, data);
  });
};

exports.recv = function(req, res) {
  var params = {
    since : qs.parse(url.parse(req.url).query).since,
    id: qs.parse(url.parse(req.url).query).id
  };

  chat.recv(params, function(err, data) {
    handleRes(res, err, data);
  });
};

exports.send = function(req, res) {
  var params = {
    id : qs.parse(url.parse(req.url).query).id,
    text : qs.parse(url.parse(req.url).query).text
  };

  chat.send(params, function(err, data) {
    handleRes(res, err, data);
  });
};


var handleRes = function(res, err, data) {
  if( err ) {
    return simpleJSON(res, 400, { error: err });
  }
  return simpleJSON(res, 200, data);
};

var simpleJSON = function (res, code, obj) {
  var body = new Buffer(JSON.stringify(obj));
  res.writeHead(code, { "Content-Type": "text/json"
    , "Content-Length": body.length
  });
  res.end(body);
};