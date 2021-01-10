function DangerAlert (intervalMin) {
  const express = require("express");
  const app = express();

  let lastMessageDate = null;
  let safeCallback = null;
  let dangerCallback = null;

  app.get("/safe", function(req, res) {
    lastMessageDate = new Date();
    res.status(200).json({
      message: "ok"
    });
  });

  let timer = null;
  let server = null;
  this.safe = function(callback) {
    safeCallback = callback;
  }
  this.danger = function(callback) {
    dangerCallback = callback;
  }
  this.start = function(port) {
    this.stop();
    lastMessageDate = new Date();
    timer = setInterval(function() {
      const now = new Date();
      if ((now - lastMessageDate) / (1000 * 60) > intervalMin) {
        if (dangerCallback) {
          dangerCallback();
        }
      } else {
        if (safeCallback) {
          safeCallback();
        }
      }
    }, 1000 * 60 * intervalMin);
    server = app.listen(port);
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
