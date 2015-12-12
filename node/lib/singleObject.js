function hello(){
	var name;
	this.setName=function(theName){
	name=theName;
	}
	this.sayHello=function(){
	console.log('hello '+name);
	}
}
 exports.hello=hello;
// module.exports=hello;
