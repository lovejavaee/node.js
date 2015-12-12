var hello=require('./singleObject').hello;
var he = new hello();
he.setName('chicago');
he.sayHello();
var he2 = new hello();
he2.setName('json');
he2.sayHello();
