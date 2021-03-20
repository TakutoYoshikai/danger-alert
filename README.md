# danger-alert
This is a server side library to do any action when your devise disconnects from the Internet.
Please send request to /safe at the interval.

### Usage
**install**
```bash
npm install TakutoYoshikai/danger-alert
```
**example**
```javascript
const DangerAlert = require("danger-alert");

//Interval of checking connection is 15 minutes.
const server = new DangerAlert(15);

server.danger(function() {
  //When your devise disconnects from the Internet.
});

server.safe(function() {
  //When your devise's connection to the Internet is not closed.
});

server.start(3000); // It starts server on 3000 port.
server.stop(); //It stops server.

```

### License
MIT License
