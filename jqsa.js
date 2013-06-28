(function(w){if(!w.$){
var pl=["widht","height","left","top","padding","margin","size","raduis"],
_c=function(e){return e.className.split(/\s+/)},c_=function(e,l){e.className=l.join(" ")},
_e=function(s){var d=document.createElement("div");d.innerHTML=s;return d.children},
_ss=function(n,v){var i;if(/^-?\d*\.?\d+$/.test(v))for(i=0;i<pl.length;i++)if(n.indexOf(pl[i])>-1)return String(v)+"px";return v},
_wh=function(t,p){var d=t.documentElemnt;return Math.Max(t.body["scroll"+p],t.body["offset"+p],d["scroll"+p],d["offset"+p],d["client"+p])},
_=function(nl){this._="('A`)";this.nl=nl||[];this.length=this.nl.length},p,_$;
window[p]=_$=function(q){return (q._=="('A`)"&&nl in q)?q:new _((typeof q!="string")?[q]:(q.charAt(0)=="<")?_e(q):document.querySelectorAll(q));};
_$.fn=p=_.prototype;
_$.each=function(o,f){for(var k in o)f(k,o[k])};
_$.isWindow=function(w){return w!=null&&w===w.window};
_$.proxy=function(t,f,a){return function(){f.apply(t,a)}};
p._e=function(f){for(var nl=this.nl,i=0,l=nl.length;i<l;i++)f.call(nl[i]);return this};
p._m=function(f){var r,a=[];for(var nl=this.nl,i=0,l=nl.length;i<l;i++){r=f.call(nl[i]);if(r)a.push(r)}return a};
p._s=function(t,o){t._e(function(){var s=this.style;for(var k in o)s[k]=_ss(k,o[k])})};
p._a=function(t,o){t._e(function(){for(var k in o)this.setAttribute(k,o[k])})};
p._v=function(f,a){var o=a[0];if(typeof o=="string"){if(typeof a[1]=="undefined")return 1;o={};o[a[0]]=a[1]}f(this,o);return 0};
p._b=function(o){return this._e(function(){for(var k in o)this.addEventListener(k,_$.proxy(this,o[k]))})};
p.extend=function(o){for(var k in o){this[k]=o[k]}return this};
p.extend({
eq:function(i){i+=(i<0?this.length:0);return new _((this.nl[i])?[this.nl[i]]:[])},
get:function(i){return this.nl[i]},
each:function(f){return this._e(f)},
map:function(f){return this._m(f)},
find:function(i){var r=[];this._e(function(){r.concat(this.querySelectorAll(q))});return new _(r)},
bind:function(){var a=arguments,o=a[0];if(a.length!=1||typeof o!="object"){o={};o[a[0]]=a[1]}return this._b(o)},
click:function(f){return this._b({"click":f})},
hasClass:function(n){return (this.length>0&&_c(this.nl[0]).indexOf(n)!=-1);},
addClass:function(){var a=arguments;return this._e(function(){var t=this,c=_c(t);for(var i=0,l=a.length;i<l;i++)if(c.indexOf(a[i])==-1)c.push(a[i]);c_(t,c)})},
removeClass:function(){var a=arguments;return this._e(function(){var t=this,c=_c(t);for(var i=0,j,l=a.length;i<l;i++)if((j=c.indexOf(a[i]))!=-1)delete c[j];c_(t,c)})},
toggleClass:function(n){return this._e(function(){var t=this,c=_c(t),i=c.indexOf(n);if(i==-1)c.push(n);else delete c[i];c_(t,c)})},
css:function() {var a=arguments,t=this;if(t.length>0){if(t._v(t._s,a)){t=t.nl[0];t=t.currentStyle||document.defaultView.getComputedStyle(t,'')[a[0]]}}return t},
attr:function(){var a=arguments,t=this;if(t.length>0){if(t._v(t._a,a))return t.nl[0].getAttribute(a[0])}return t},
hide:function(){this._s(this,{"display":"none"});return this},
show:function(){this._s(this,{"display":"block"});return this},
scrollTop:function(v){var t=this.nl[0],w;if(t){w=_$.isWindow(t)?t:t.nodeType==9&&t.defaultView;if(v===undefined)return w?w.pageYOffset:t._sct;if(w){w.scrollTo(w.pageXOffset,v)}else{t._sct=v}}return this},
width:function(v){var t=this.nl[0];if(t&&v===undefined)return _$.isWindow(t)?t.document.documentElement.clientWidth:t.nodeType==9?_wh(t,"Width"):parseInt(this.css("width"));return this.css("width",v)},
height:function(v){var t=this.nl[0];if(t&&v===undefined)return _$.isWindow(t)?t.document.documentElement.clientHeight:t.nodeType==9?_wh(t,"Height"):parseInt(this.css("height"));return this.css("height",v)},
append:function(e){return this._e(function(){for(var nl=_$(e).nl,i=0,l=nl.length;i<l;i++){this.appendChild(nl[i])}})},
html:function(t){if(t)return this._e(function(){this.innerHTML=t});return (this.length==0)?"":this.nl[0].innerHTML;},
text:function(t){if(t)return this._e(function(){this.innerText=t});var s="";this._e(function(){s+=this.innerText});return s},
val:function(t){if(t)return this._e(function(){this.value=t});var a=[];this._e(function(){a.push(this.value)});return (a.length==1)?a[0]:a}
});

var _t=function(qs,sq){var t=this;t.qs=qs;t.length=qs.length;t.w=0;t.sq=sq;t.sqi=0;t.tid=0;t.iid=0;t.ii=0},tp=_t.prototype,k;
tp.step=function(){var t=this,s=t.sq[t.sqi++];if(s){
if("w" in s){t.w+=s.w;t.step()}
else if("c" in s){if(t.w>0){t.tid=setTimeout(_tof,t.w)}else{_tof()}t.w=0}
else if("i" in s){if(t.w>0){t.tid=setTimeout(_tic,t.w)}else{_tic()}t.w=0}
else if("$" in s){t.qs=_$.apply(window,s.$);t.step()}
function _tic(){t.tid=0;t.ii=0;_tif();t.iid=setInterval(_tif,s.i)}
function _tof(){t.tid=0;t.qs=t.qs[s.c].apply(t.qs,s.a);t.step()}
function _tif(){new _t(t.qs.eq(t.ii++),t.sq.slice(t.sqi)).step();if(t.ii==t.length){clearInterval(t.iid);t.iid=0}}
}return t};
tp.stop=function(){var t=this;if(t.tid)clearTimeout(t.tid);t.tid=0;if(t.iid)clearInterval(t.iid);t.iid=0};

for(k in p){tp[k]=(function(k){return function(){this.sq.push({"c":k,"a":arguments});return this}})(k)}
p.wait=function(w){var t=new _t(this,[]);t.tid=setTimeout(function(){t.step()},w);return t};
p.seq=function(i){var t=new _t(this,[{"i":i}]);t.tid=setTimeout(function(){t.step()},33);return t};
tp.wait=function(w){this.sq.push({"w":w});return this};
tp.seq=function(i){this.sq.push({"i":i});return this};
tp.$=function(){this.sq.push({"$":arguments});return this};
}})(window);
