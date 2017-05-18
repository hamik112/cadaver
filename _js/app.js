
/* jshint ignore:start*/
/**
 * @license
 * Lodash (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash core -o ./dist/lodash.core.js`
 */
;(function(){function n(n){return K(n)&&pn.call(n,"callee")&&!bn.call(n,"callee")}function t(n,t){return n.push.apply(n,t),n}function r(n){return function(t){return null==t?nn:t[n]}}function e(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)}),r}function u(n,t){return j(t,function(t){return n[t]})}function o(n){return n instanceof i?n:new i(n)}function i(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t}function c(n,t,r){if(typeof n!="function")throw new TypeError("Expected a function");
return setTimeout(function(){n.apply(nn,r)},t)}function f(n,t){var r=true;return mn(n,function(n,e,u){return r=!!t(n,e,u)}),r}function a(n,t,r){for(var e=-1,u=n.length;++e<u;){var o=n[e],i=t(o);if(null!=i&&(c===nn?i===i:r(i,c)))var c=i,f=o}return f}function l(n,t){var r=[];return mn(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function p(n,r,e,u,o){var i=-1,c=n.length;for(e||(e=D),o||(o=[]);++i<c;){var f=n[i];0<r&&e(f)?1<r?p(f,r-1,e,u,o):t(o,f):u||(o[o.length]=f)}return o}function s(n,t){return n&&On(n,t,In);
}function h(n,t){return l(t,function(t){return V(n[t])})}function v(n,t){return n>t}function y(n,t,r,e,u){return n===t||(null==n||null==t||!K(n)&&!K(t)?n!==n&&t!==t:b(n,t,r,e,y,u))}function b(n,t,r,e,u,o){var i=Nn(n),c=Nn(t),f=i?"[object Array]":hn.call(n),a=c?"[object Array]":hn.call(t),f="[object Arguments]"==f?"[object Object]":f,a="[object Arguments]"==a?"[object Object]":a,l="[object Object]"==f,c="[object Object]"==a,a=f==a;o||(o=[]);var p=An(o,function(t){return t[0]==n}),s=An(o,function(n){
return n[0]==t});if(p&&s)return p[1]==t;if(o.push([n,t]),o.push([t,n]),a&&!l){if(i)r=B(n,t,r,e,u,o);else n:{switch(f){case"[object Boolean]":case"[object Date]":case"[object Number]":r=M(+n,+t);break n;case"[object Error]":r=n.name==t.name&&n.message==t.message;break n;case"[object RegExp]":case"[object String]":r=n==t+"";break n}r=false}return o.pop(),r}return 1&r||(i=l&&pn.call(n,"__wrapped__"),f=c&&pn.call(t,"__wrapped__"),!i&&!f)?!!a&&(r=R(n,t,r,e,u,o),o.pop(),r):(i=i?n.value():n,f=f?t.value():t,
r=u(i,f,r,e,o),o.pop(),r)}function g(n){return typeof n=="function"?n:null==n?Y:(typeof n=="object"?d:r)(n)}function _(n,t){return n<t}function j(n,t){var r=-1,e=U(n)?Array(n.length):[];return mn(n,function(n,u,o){e[++r]=t(n,u,o)}),e}function d(n){var t=_n(n);return function(r){var e=t.length;if(null==r)return!e;for(r=Object(r);e--;){var u=t[e];if(!(u in r&&y(n[u],r[u],3)))return false}return true}}function m(n,t){return n=Object(n),G(t,function(t,r){return r in n&&(t[r]=n[r]),t},{})}function O(n){return xn(q(n,void 0,Y),n+"");
}function x(n,t,r){var e=-1,u=n.length;for(0>t&&(t=-t>u?0:u+t),r=r>u?u:r,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Array(u);++e<u;)r[e]=n[e+t];return r}function A(n){return x(n,0,n.length)}function E(n,t){var r;return mn(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function w(n,r){return G(r,function(n,r){return r.func.apply(r.thisArg,t([n],r.args))},n)}function k(n,t,r,e){var u=!r;r||(r={});for(var o=-1,i=t.length;++o<i;){var c=t[o],f=e?e(r[c],n[c],c,r,n):nn;if(f===nn&&(f=n[c]),u)r[c]=f;else{var a=r,l=a[c];
pn.call(a,c)&&M(l,f)&&(f!==nn||c in a)||(a[c]=f)}}return r}function N(n){return O(function(t,r){var e=-1,u=r.length,o=1<u?r[u-1]:nn,o=3<n.length&&typeof o=="function"?(u--,o):nn;for(t=Object(t);++e<u;){var i=r[e];i&&n(t,i,e,o)}return t})}function F(n){return function(){var t=arguments,r=dn(n.prototype),t=n.apply(r,t);return H(t)?t:r}}function S(n,t,r){function e(){for(var o=-1,i=arguments.length,c=-1,f=r.length,a=Array(f+i),l=this&&this!==on&&this instanceof e?u:n;++c<f;)a[c]=r[c];for(;i--;)a[c++]=arguments[++o];
return l.apply(t,a)}if(typeof n!="function")throw new TypeError("Expected a function");var u=F(n);return e}function T(n,t,r,e){return n===nn||M(n,ln[r])&&!pn.call(e,r)?t:n}function B(n,t,r,e,u,o){var i=n.length,c=t.length;if(i!=c&&!(1&r&&c>i))return false;for(var c=-1,f=true,a=2&r?[]:nn;++c<i;){var l=n[c],p=t[c];if(void 0!==nn){f=false;break}if(a){if(!E(t,function(n,t){if(!z(a,t)&&(l===n||u(l,n,r,e,o)))return a.push(t)})){f=false;break}}else if(l!==p&&!u(l,p,r,e,o)){f=false;break}}return f}function R(n,t,r,e,u,o){
var i=1&r,c=In(n),f=c.length,a=In(t).length;if(f!=a&&!i)return false;for(var l=f;l--;){var p=c[l];if(!(i?p in t:pn.call(t,p)))return false}for(a=true;++l<f;){var p=c[l],s=n[p],h=t[p];if(void 0!==nn||s!==h&&!u(s,h,r,e,o)){a=false;break}i||(i="constructor"==p)}return a&&!i&&(r=n.constructor,e=t.constructor,r!=e&&"constructor"in n&&"constructor"in t&&!(typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)&&(a=false)),a}function D(t){return Nn(t)||n(t)}function I(n){var t=[];if(null!=n)for(var r in Object(n))t.push(r);
return t}function q(n,t,r){return t=jn(t===nn?n.length-1:t,0),function(){for(var e=arguments,u=-1,o=jn(e.length-t,0),i=Array(o);++u<o;)i[u]=e[t+u];for(u=-1,o=Array(t+1);++u<t;)o[u]=e[u];return o[t]=r(i),n.apply(this,o)}}function $(n){return(null==n?0:n.length)?p(n,1):[]}function P(n){return n&&n.length?n[0]:nn}function z(n,t,r){var e=null==n?0:n.length;r=typeof r=="number"?0>r?jn(e+r,0):r:0,r=(r||0)-1;for(var u=t===t;++r<e;){var o=n[r];if(u?o===t:o!==o)return r}return-1}function C(n,t){return mn(n,g(t));
}function G(n,t,r){return e(n,g(t),r,3>arguments.length,mn)}function J(n,t){var r;if(typeof t!="function")throw new TypeError("Expected a function");return n=Fn(n),function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=nn),r}}function M(n,t){return n===t||n!==n&&t!==t}function U(n){var t;return(t=null!=n)&&(t=n.length,t=typeof t=="number"&&-1<t&&0==t%1&&9007199254740991>=t),t&&!V(n)}function V(n){return!!H(n)&&(n=hn.call(n),"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n);
}function H(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}function K(n){return null!=n&&typeof n=="object"}function L(n){return typeof n=="number"||K(n)&&"[object Number]"==hn.call(n)}function Q(n){return typeof n=="string"||!Nn(n)&&K(n)&&"[object String]"==hn.call(n)}function W(n){return typeof n=="string"?n:null==n?"":n+""}function X(n){return null==n?[]:u(n,In(n))}function Y(n){return n}function Z(n,r,e){var u=In(r),o=h(r,u);null!=e||H(r)&&(o.length||!u.length)||(e=r,r=n,n=this,o=h(r,In(r)));
var i=!(H(e)&&"chain"in e&&!e.chain),c=V(n);return mn(o,function(e){var u=r[e];n[e]=u,c&&(n.prototype[e]=function(){var r=this.__chain__;if(i||r){var e=n(this.__wrapped__);return(e.__actions__=A(this.__actions__)).push({func:u,args:arguments,thisArg:n}),e.__chain__=r,e}return u.apply(n,t([this.value()],arguments))})}),n}var nn,tn=1/0,rn=/[&<>"']/g,en=RegExp(rn.source),un=typeof self=="object"&&self&&self.Object===Object&&self,on=typeof global=="object"&&global&&global.Object===Object&&global||un||Function("return this")(),cn=(un=typeof exports=="object"&&exports&&!exports.nodeType&&exports)&&typeof module=="object"&&module&&!module.nodeType&&module,fn=function(n){
return function(t){return null==n?nn:n[t]}}({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}),an=Array.prototype,ln=Object.prototype,pn=ln.hasOwnProperty,sn=0,hn=ln.toString,vn=on._,yn=Object.create,bn=ln.propertyIsEnumerable,gn=on.isFinite,_n=function(n,t){return function(r){return n(t(r))}}(Object.keys,Object),jn=Math.max,dn=function(){function n(){}return function(t){return H(t)?yn?yn(t):(n.prototype=t,t=new n,n.prototype=nn,t):{}}}();i.prototype=dn(o.prototype),i.prototype.constructor=i;
var mn=function(n,t){return function(r,e){if(null==r)return r;if(!U(r))return n(r,e);for(var u=r.length,o=t?u:-1,i=Object(r);(t?o--:++o<u)&&false!==e(i[o],o,i););return r}}(s),On=function(n){return function(t,r,e){var u=-1,o=Object(t);e=e(t);for(var i=e.length;i--;){var c=e[n?i:++u];if(false===r(o[c],c,o))break}return t}}(),xn=Y,An=function(n){return function(t,r,e){var u=Object(t);if(!U(t)){var o=g(r);t=In(t),r=function(n){return o(u[n],n,u)}}return r=n(t,r,e),-1<r?u[o?t[r]:r]:nn}}(function(n,t,r){var e=null==n?0:n.length;
if(!e)return-1;r=null==r?0:Fn(r),0>r&&(r=jn(e+r,0));n:{for(t=g(t),e=n.length,r+=-1;++r<e;)if(t(n[r],r,n)){n=r;break n}n=-1}return n}),En=O(function(n,t,r){return S(n,t,r)}),wn=O(function(n,t){return c(n,1,t)}),kn=O(function(n,t,r){return c(n,Sn(t)||0,r)}),Nn=Array.isArray,Fn=Number,Sn=Number,Tn=N(function(n,t){k(t,_n(t),n)}),Bn=N(function(n,t){k(t,I(t),n)}),Rn=N(function(n,t,r,e){k(t,qn(t),n,e)}),Dn=O(function(n){return n.push(nn,T),Rn.apply(nn,n)}),In=_n,qn=I,$n=function(n){return xn(q(n,nn,$),n+"");
}(function(n,t){return null==n?{}:m(n,t)});o.assignIn=Bn,o.before=J,o.bind=En,o.chain=function(n){return n=o(n),n.__chain__=true,n},o.compact=function(n){return l(n,Boolean)},o.concat=function(){var n=arguments.length;if(!n)return[];for(var r=Array(n-1),e=arguments[0];n--;)r[n-1]=arguments[n];return t(Nn(e)?A(e):[e],p(r,1))},o.create=function(n,t){var r=dn(n);return null==t?r:Tn(r,t)},o.defaults=Dn,o.defer=wn,o.delay=kn,o.filter=function(n,t){return l(n,g(t))},o.flatten=$,o.flattenDeep=function(n){
return(null==n?0:n.length)?p(n,tn):[]},o.iteratee=g,o.keys=In,o.map=function(n,t){return j(n,g(t))},o.matches=function(n){return d(Tn({},n))},o.mixin=Z,o.negate=function(n){if(typeof n!="function")throw new TypeError("Expected a function");return function(){return!n.apply(this,arguments)}},o.once=function(n){return J(2,n)},o.pick=$n,o.slice=function(n,t,r){var e=null==n?0:n.length;return r=r===nn?e:+r,e?x(n,null==t?0:+t,r):[]},o.sortBy=function(n,t){var e=0;return t=g(t),j(j(n,function(n,r,u){return{
value:n,index:e++,criteria:t(n,r,u)}}).sort(function(n,t){var r;n:{r=n.criteria;var e=t.criteria;if(r!==e){var u=r!==nn,o=null===r,i=r===r,c=e!==nn,f=null===e,a=e===e;if(!f&&r>e||o&&c&&a||!u&&a||!i){r=1;break n}if(!o&&r<e||f&&u&&i||!c&&i||!a){r=-1;break n}}r=0}return r||n.index-t.index}),r("value"))},o.tap=function(n,t){return t(n),n},o.thru=function(n,t){return t(n)},o.toArray=function(n){return U(n)?n.length?A(n):[]:X(n)},o.values=X,o.extend=Bn,Z(o,o),o.clone=function(n){return H(n)?Nn(n)?A(n):k(n,_n(n)):n;
},o.escape=function(n){return(n=W(n))&&en.test(n)?n.replace(rn,fn):n},o.every=function(n,t,r){return t=r?nn:t,f(n,g(t))},o.find=An,o.forEach=C,o.has=function(n,t){return null!=n&&pn.call(n,t)},o.head=P,o.identity=Y,o.indexOf=z,o.isArguments=n,o.isArray=Nn,o.isBoolean=function(n){return true===n||false===n||K(n)&&"[object Boolean]"==hn.call(n)},o.isDate=function(n){return K(n)&&"[object Date]"==hn.call(n)},o.isEmpty=function(t){return U(t)&&(Nn(t)||Q(t)||V(t.splice)||n(t))?!t.length:!_n(t).length},o.isEqual=function(n,t){
return y(n,t)},o.isFinite=function(n){return typeof n=="number"&&gn(n)},o.isFunction=V,o.isNaN=function(n){return L(n)&&n!=+n},o.isNull=function(n){return null===n},o.isNumber=L,o.isObject=H,o.isRegExp=function(n){return K(n)&&"[object RegExp]"==hn.call(n)},o.isString=Q,o.isUndefined=function(n){return n===nn},o.last=function(n){var t=null==n?0:n.length;return t?n[t-1]:nn},o.max=function(n){return n&&n.length?a(n,Y,v):nn},o.min=function(n){return n&&n.length?a(n,Y,_):nn},o.noConflict=function(){return on._===this&&(on._=vn),
this},o.noop=function(){},o.reduce=G,o.result=function(n,t,r){return t=null==n?nn:n[t],t===nn&&(t=r),V(t)?t.call(n):t},o.size=function(n){return null==n?0:(n=U(n)?n:_n(n),n.length)},o.some=function(n,t,r){return t=r?nn:t,E(n,g(t))},o.uniqueId=function(n){var t=++sn;return W(n)+t},o.each=C,o.first=P,Z(o,function(){var n={};return s(o,function(t,r){pn.call(o.prototype,r)||(n[r]=t)}),n}(),{chain:false}),o.VERSION="4.17.4",mn("pop join replace reverse split push shift sort splice unshift".split(" "),function(n){
var t=(/^(?:replace|split)$/.test(n)?String.prototype:an)[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|join|replace|shift)$/.test(n);o.prototype[n]=function(){var n=arguments;if(e&&!this.__chain__){var u=this.value();return t.apply(Nn(u)?u:[],n)}return this[r](function(r){return t.apply(Nn(r)?r:[],n)})}}),o.prototype.toJSON=o.prototype.valueOf=o.prototype.value=function(){return w(this.__wrapped__,this.__actions__)},typeof define=="function"&&typeof define.amd=="object"&&define.amd?(on._=o,
define(function(){return o})):cn?((cn.exports=o)._=o,un._=o):on._=o}).call(this);
/* jshint ignore:end */

/*
 * Application Code
 *
 * Dependencies: 
 *   - jQuery
 *   - Lodash - Only required for the SectionManager.  Code was copied from Shopify Slate, could be rewritten without dependency but don't feel like it.
 *   - Modernizr
 *
 */
;(function($, _, Modernizr, undefined){

  var supportsSVG = function() {
    return document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#Image', '1.1');
  };

  /*
   * Sections
   * =============
   *
   * Borrowed from Slate.  This code is needed to register Shopify theme sections in order to interact with the theme editor
   */
  var SectionManager = function() {
    this.constructors = {};
    this.instances = [];

    $(document)
      .on('shopify:section:load',     this._onSectionLoad.bind(this))
      .on('shopify:section:unload',   this._onSectionUnload.bind(this))
      .on('shopify:section:select',   this._onSelect.bind(this))
      .on('shopify:section:deselect', this._onDeselect.bind(this))
      .on('shopify:block:select',     this._onBlockSelect.bind(this))
      .on('shopify:block:deselect',   this._onBlockDeselect.bind(this));
  };

  SectionManager.prototype = _.assignIn({}, SectionManager.prototype, {
    _createInstance: function(container, constructor) {
      var $container = $(container);
      var id = $container.attr('data-section-id');
      var type = $container.attr('data-section-type');

      constructor = constructor || this.constructors[type];

      if (_.isUndefined(constructor)) {
        return;
      }

      var instance = _.assignIn(new constructor(container), {
        id: id,
        type: type,
        container: container
      });

      this.instances.push(instance);
    },

    _onSectionLoad: function(evt) {
      var container = $('[data-section-id]', evt.target)[0];
      if (container) {
        this._createInstance(container);
      }
    },

    _onSectionUnload: function(evt) {
      this.instances = _.filter(this.instances, function(instance) {
        var isEventInstance = (instance.id === evt.detail.sectionId);

        if (isEventInstance) {
          if (_.isFunction(instance.onUnload)) {
            instance.onUnload(evt);
          }
        }

        return !isEventInstance;
      });
    },

    _onSelect: function(evt) {
      // eslint-disable-next-line no-shadow
      var instance = _.find(this.instances, function(instance) {
        return instance.id === evt.detail.sectionId;
      });

      if (!_.isUndefined(instance) && _.isFunction(instance.onSelect)) {
        instance.onSelect(evt);
      }
    },

    _onDeselect: function(evt) {
      // eslint-disable-next-line no-shadow
      var instance = _.find(this.instances, function(instance) {
        return instance.id === evt.detail.sectionId;
      });

      if (!_.isUndefined(instance) && _.isFunction(instance.onDeselect)) {
        instance.onDeselect(evt);
      }
    },

    _onBlockSelect: function(evt) {
      // eslint-disable-next-line no-shadow
      var instance = _.find(this.instances, function(instance) {
        return instance.id === evt.detail.sectionId;
      });

      if (!_.isUndefined(instance) && _.isFunction(instance.onBlockSelect)) {
        instance.onBlockSelect(evt);
      }
    },

    _onBlockDeselect: function(evt) {
      // eslint-disable-next-line no-shadow
      var instance = _.find(this.instances, function(instance) {
        return instance.id === evt.detail.sectionId;
      });

      if (!_.isUndefined(instance) && _.isFunction(instance.onBlockDeselect)) {
        instance.onBlockDeselect(evt);
      }
    },

    register: function(type, constructor) {
      this.constructors[type] = constructor;

      $('[data-section-type=' + type + ']').each(function(index, container) {
        this._createInstance(container, constructor);
      }.bind(this));
    }
  });

  var Header = function() {
    this.init();
  };

  Header.prototype = {
    init: function(){
      console.log('Header is initialized!');
     return this;
    },
    onSelect: function(){
      console.log('Header onSelect');
    },
    onLoad: function(){
      console.log('Header onLoad');
    },
    onUnload: function() {
      console.log('Header onUnload');
    },
  };

  var Footer = function() {
    this.init();
  };

  Footer.prototype.init = function(){
    console.log('Footer is initialized!');
    return this;
  };

  $(function(){

    /* Remove SVG images to avoid broken images in all browsers that don't support SVG. */
    /*==========================*/
    if (!supportsSVG()) {
      $('img[src*=".svg"]').remove();
    }
    
    /* Prepare to have floated images fill the width of the design on blog pages on small devices. */
    /*==========================*/ 
    var images = $('.article img').load(function() {
      var src = $(this).attr('src').replace(/_grande\.|_large\.|_medium\.|_small\./, '.');
      var width = $(this).width();
      $(this).attr('src', src).attr('width', width).removeAttr('height');
    });

    // Create a section manager
    var sectionManager = new SectionManager();

    // Then register each section
    sectionManager.register('header-section', Header);
    sectionManager.register('footer-section', Footer);

  });

})(jQuery, _, Modernizr);