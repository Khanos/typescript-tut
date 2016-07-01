var ambientDeclarations;
(function (ambientDeclarations) {
    var name = ko.observable('John Papa');
    var id = ko.observable(1);
    var guy = {
        id: id,
        fullName: name
    };
    var value = guy.fullName();
    console.log(guy.fullName);
    var a = ko.observableArray([]);
})(ambientDeclarations || (ambientDeclarations = {}));
