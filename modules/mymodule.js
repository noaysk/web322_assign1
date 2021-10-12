//private
let doSayHello = function(name) {
    var str = "Hello " + name;
    return str;
}

//public
module.exports.sayHello = function(name) {
    var str = doSayHello(name);
    return str;
}