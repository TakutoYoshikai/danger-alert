# danger-alert
This is a server side library to do any action when your devise disconnects from the Internet.

### Usage
**install**
```bash
npm install TakutoYoshikai/danger-alert
```
**example**
```javascript
const DangerAlert = require("danger-alert");

//Interval of checking connection is 15 minutes.
const server = new DangerAlert(15, function() {
  //When your devise disconnects from the Internet.
});

server.start(3000); // It starts server on 3000 port.
server.stop(); //It stops server.

```

### License
MIT License
