// allow us to create different event in node
// event are basically used to perform statement on certain action

const events = require('events')

let ev = new events.EventEmitter();

ev.on('my_event', function(data) {
    console.log("Event: ", data)
})


// it will fired once
ev.once('event_once', () => {
    console.log("Event once fired")
})

// off will used to unregister the event
ev.off

ev.emit("my_event", "Call Emit")
ev.emit("event_once")
ev.emit("event_once")
ev.emit("event_once")