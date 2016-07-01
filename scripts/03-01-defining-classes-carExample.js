var EngineA = (function () {
    function EngineA(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    return EngineA;
}());
var CarA = (function () {
    function CarA(engine) {
        this.engine = engine;
    }
    Object.defineProperty(CarA.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value == undefined)
                throw 'Please supply an engine';
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    CarA.prototype.start = function () {
        alert('Car engine started ' + this._engine.engineType);
    };
    return CarA;
}());
window.onload = function () {
    var engine = new EngineA(300, 'V8');
    var car = new CarA(engine);
    alert(car.engine.engineType);
    car.start();
};
