var fs = require("fs");
var events = require("events");

var eventEmitter = new events.EventEmitter();
var connectHandler = function () {
    console.log("连接成功")

    eventEmitter.emit("data_recevied");
}

    // 绑定 connection 事件处理程序
    eventEmitter.on('connection', connectHandler);
    eventEmitter.on("data_recevied",function () {
        console.log("数据接收成功");
    })


    eventEmitter.emit("connection");
<<<<<<< HEAD
<<<<<<< HEAD
 asdasdasdasd
=======
<<<<<<< HEAD
=======
>>>>>>> b48e56c261d0003e3079ef6c71ebb8d5f1b777db
    ldksfjlsd;flj;lsfj
=======
   Creating a new branch is quick AND simple.
>>>>>>> dev2
<<<<<<< HEAD
>>>>>>> b48e56c261d0003e3079ef6c71ebb8d5f1b777db
=======
>>>>>>> b48e56c261d0003e3079ef6c71ebb8d5f1b777db

