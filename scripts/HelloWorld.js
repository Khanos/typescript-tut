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
window.onload = function () {
    var car = new Car('V8-TypeScript Rules');
    car.start();
    car.stop();
};
