var Car = (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.start = function () {
        alert('Engine started: ' + this.engine);
    };
    Car.prototype.stop = function () {
        alert('Engine stoped' + this.engine);
    };
    return Car;
}());
var Test = (function () {
    function Test() {
        this.num2 = 2;
        this.num3 = 3;
        this.num4 = this.num3 + 100;
        this.str = this.num1 + 'some sting';
    }
    return Test;
}());
