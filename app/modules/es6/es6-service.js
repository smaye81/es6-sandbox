ES6Service.$inject = ['$q'];

function ES6Service ($q) {

    "use strict";

    this.getGreeting = function () {

        return $q((resolve) => resolve("ES6 Demo from Service"));
    };
}

export default ES6Service;
