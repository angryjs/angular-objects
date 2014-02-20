(function(angular, undefined) {
  'use strict';

  angular.module('angryjs.objects', [])

    .factory('Objects', function () {
      var Objects = function () {};
      Objects.prototype.merge = function (obj1, obj2) {
        var obj3 = {};
        for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
        for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
        return obj3;
      };

      Objects.prototype.size = function (assocArray) {
        return Object.keys(assocArray).length;
      };

      return new Objects();
    });

})(window.angular);