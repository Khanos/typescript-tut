var primitives;
(function (primitives) {
    var data;
    var info;
    var doSomething = function (arg) {
        return arg;
    };
    var val = doSomething(2);
    var age = 2;
    var score = 98.25;
    var rating = 98.25;
    var hasData = true;
    var isReady = true;
    var isBald = function () { return 'yes'; };
    var hasHair = !!isBald();
    var firstName = 'John';
    var lastName = 'Papa';
    function getArrayLength(x) {
        var len = x[0].length;
        return len;
    }
    var names = ['John', 'Dan', 'Aaron', 'Fritz'];
    var firstPerson = names[0];
    console.log(getArrayLength(names));
    var guitarSales = null;
    var animal = null;
    var orderDate = null;
    var num = null;
    var str = null;
    var isHappy = null;
    var customer = null;
    var quantity;
    var company = undefined;
    console.log('undefined examples');
    console.log(quantity);
    console.log(company);
})(primitives || (primitives = {}));
