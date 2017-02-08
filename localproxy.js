var httpProxy = require('http-proxy'),
  https = require('https'),
  http = require('http');

var proxy = httpProxy.createProxyServer();
http.createServer(function (req, res) {

  res.oldWriteHead = res.writeHead;
  res.writeHead = function(statusCode, headers) {
    res.setHeader('access-control-allow-headers', 'X-XSRF-TOKEN, Authorization, Content-Type, If-Match, If-Modified-Since, If-None-Match, If-Unmodified-Since, Accept-Encoding, X-GitHub-OTP, X-Requested-With');
    res.oldWriteHead(statusCode, headers);
  }

  proxy.web(req, res, {
    target : 'https://api.spotify.com',
    agent  : https.globalAgent,
    headers: {
      host: 'api.spotify.com'
    }
  });
}).listen(3001);
