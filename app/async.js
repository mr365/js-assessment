exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
  	return new Promise(function(fulfill) {
  		fulfill(value);
  	});
  	
  },

  manipulateRemoteData : function(url) {
  	return new Promise(function(resolve,reject) {
  		var req = new XMLHttpRequest();

  		req.open('GET', url);
  		
  		req.onload = function() {
  			if(req.status == 200){
  				var list = JSON.parse(req.response);
  				var result = [];
  				var result_list = _.sortBy(list.people,'name');

  				_.each(result_list, function(i) {
  					result.push(i.name);
  				});
  				resolve(result);
  			}
  			else {
  				reject(Error(req.statusText))
  			}
  		};

  		req.onerror = function() {
  			reject(Error("Network Error"));
  		};

  		req.send();

  	});
  }
};
