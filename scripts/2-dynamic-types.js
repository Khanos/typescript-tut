var dynamicTypes;
(function (dynamicTypes) {
    var person;
    person = 'John Papa';
    person.substring(1, 4);
    person = 1;
    person.substring(1, 4);
    person = {
        name: 'John Papa',
        age: 40
    };
    person.substring(1, 4);
})(dynamicTypes || (dynamicTypes = {}));
