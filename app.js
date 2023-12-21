// const loh = require('path')
// const os = require('os')
// const fs = require('fs')
const EventEmitter = require('events')
const emitter = new EventEmitter();
emitter.on('messageLgged', function(){
    console.log('listener called');
})
emitter.emit('messageLgged');

// const files = fs.readdirSync('./');
// console.log(`reding dir ${files}`)
// fs.readdir('./', function(err, file) {
//     if(err) {
//         console.log('error', err);
//     } else {
//         console.log('result', files)
//     }
// })
// const newmod = loh.parse(__filename);
// const totalmem = os.totalmem();
// const freemem = os.freemem();

 


