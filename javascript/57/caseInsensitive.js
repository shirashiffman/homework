window.myApp = window.myApp || {};

window.myApp.Utils = (function (Utils) {
    "use strict";

    Utils.stringCaseInsensitiveEquals = (string1, string2) => string1.toLowerCase() === string2.toLowerCase();

    return Utils;
}(window.myApp.Utils || {}));