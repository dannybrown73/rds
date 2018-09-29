/**
  shave - Shave is a javascript plugin that truncates multi-line text within a html element based on set max height
  @version v2.4.0
  @link https://github.com/dollarshaveclub/shave#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (jeffry.in)
  @license MIT
**/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.shave=t()}(this,function(){"use strict";return function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};if(!t)throw Error("maxHeight is required");var i="string"==typeof e?document.querySelectorAll(e):e;if(i){var o=n.character||"…",a=n.classname||"js-shave",s="boolean"!=typeof n.spaces||n.spaces,r='<span class="js-shave-char">'.concat(o,"</span>");"length"in i||(i=[i]);for(var c=0;c<i.length;c+=1){var h=i[c],l=h.style,f=h.querySelector(".".concat(a)),d=void 0===h.textContent?"innerText":"textContent";f&&(h.removeChild(h.querySelector(".js-shave-char")),h[d]=h[d]);var v=h[d],g=s?v.split(" "):v;if(!(g.length<2)){var p=l.height;l.height="auto";var u=l.maxHeight;if(l.maxHeight="none",h.offsetHeight<=t)l.height=p,l.maxHeight=u;else{for(var m=g.length-1,y=0,j=void 0;y<m;)j=y+m+1>>1,h[d]=s?g.slice(0,j).join(" "):g.slice(0,j),h.insertAdjacentHTML("beforeend",r),h.offsetHeight>t?m=s?j-1:j-2:y=j;h[d]=s?g.slice(0,m).join(" "):g.slice(0,m),h.insertAdjacentHTML("beforeend",r);var x=s?" ".concat(g.slice(m).join(" ")):g.slice(m);h.insertAdjacentHTML("beforeend",'<span class="'.concat(a,'" style="display:none;">').concat(x,"</span>")),l.height=p,l.maxHeight=u}}}}}});