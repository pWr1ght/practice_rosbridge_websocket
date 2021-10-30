// npm install, and node server.js to run

const WebSocket = require('ws')
const ws = new WebSocket("ws://0.0.0.0:9090");
console.log('sent');
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
ws.onopen = async function (event) {
    let data = {
        op: 'publish',
        topic: '/chatter',
        msg: {data: 'testing'}
    };
    while(1) {
    ws.send(JSON.stringify(data)) // Send all the data
    await sleep(1000);
    }
};


// example  json for publishing data
// { "op": "publish",
//   (optional) "id": <string>,
//   "topic": <string>,
//   "msg": <json>
// }
