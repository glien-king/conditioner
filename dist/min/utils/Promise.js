!function(e,t){"use strict";var n=function(){this._thens=[]};n.prototype={then:function(e,t){this._thens.push({resolve:e,reject:t})},resolve:function(e){this._complete("resolve",e)},reject:function(e){this._complete("reject",e)},_complete:function(e,t){this.then="resolve"===e?function(e,n){e(t)}:function(e,n){n(t)},this.resolve=this.reject=function(){throw new Error("Promise already completed.")};for(var n,o=0;n=this._thens[o++];)n[e]&&n[e](t);delete this._thens}},"undefined"!=typeof module&&module.exports?module.exports=n:"function"==typeof define&&define.amd?define(function(){return n}):e.Promise=n}(window);