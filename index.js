function DangerAlert (intervalMin, callback) {
  const express = require("express");
  const app = express();

  let lastMessageDate = null;

  app.get("/safe", function(req, res) {
    lastMessageDate = new Date();
    res.status(200).json({
      message: "ok"
    });
  });

  let timer = null;
  let server = null;
  this.start = function() {
    this.stop();
    lastMessageDate = new Date();
    timer = setInterval(function() {
      const now = new Date();
      if ((now - lastMessageDate) / (1000 * 60) > intervalMin) {
        callback();
      }
    }, 1000 * 60 * intervalMin);
    server = app.listen(3000);
  }
  this.stop = function() {
    if (timer !== null) {
      clearInterval(timer);
    }
    if (server !== null) {
      server.close();
    }
  }
};

module.exports = DangerAlert;
