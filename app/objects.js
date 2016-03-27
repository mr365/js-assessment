exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    return obj.greeting+', '+obj.name+'!';
  },

  alterObjects : function(constructor, greeting) {
    Object.prototype.constructor = constructor;
    Object.prototype.greeting = greeting;
  },

  iterate : function(obj) {
    return _.map(obj, function (value, key) {
      return key+": "+value;
  	});
  }
};
