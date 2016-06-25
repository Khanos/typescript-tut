var demo_02_07;
(function (demo_02_07) {
    var squareItSimple = function (h, w) {
        return h * w;
    };
    var squareItSimplest = function (h, w) { return h * w; };
    console.log('squareItSimple = ' + squareItSimple(7, 12));
    console.log('squareItSimplest = ' + squareItSimplest(7, 12));
    var helloWorld;
    helloWorld = function (name) {
        console.log('Hello ' + (name || ' unknown person'));
    };
    helloWorld('John');
    helloWorld();
    var squareIt;
    var rectA = { h: 7 };
    var rectB = { h: 7, w: 12 };
    squareIt = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    };
    var val2 = squareIt(rectA);
    console.log('rectangle h and w of 7 = ' + val2);
    var val3 = squareIt(rectB);
    console.log('rectangle h of 7 and width of 12 = ' + val3);
})(demo_02_07 || (demo_02_07 = {}));
