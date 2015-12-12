// event object
var EventEmitter = require('events').EventEmitter;
var event=new EventEmitter();
// register event object
event.on('some_event', function(){
	console.log('this is a custome event object~');
});
// postback
setTimeout(function(){
	event.emit('some_event');
},2000);
