function com_calclab_hablar_clipboard_HablarClipboard(){var Q='',wb='" for "gwt:onLoadErrorFn"',ub='" for "gwt:onPropertyErrorFn"',db='"><\/script>',fb='#',Eb='&',Xb='.cache.html',hb='/',Wb=':',ob='::',Zb='<script defer="defer">com_calclab_hablar_clipboard_HablarClipboard.onInjectionDone(\'com.calclab.hablar.clipboard.HablarClipboard\')<\/script>',cb='<script id="',rb='=',gb='?',tb='Bad handler "',Yb='DOMContentLoaded',Vb="GWT module 'com.calclab.hablar.clipboard.HablarClipboard' may need to be (re)compiled",eb='SCRIPT',Hb='Unexpected exception in locale detection, using default: ',Gb='_',Fb='__gwt_Locale',bb='__gwt_marker_com.calclab.hablar.clipboard.HablarClipboard',ib='base',$='baseUrl',U='begin',T='bootstrap',kb='clear.cache.gif',R='com.calclab.hablar.clipboard.HablarClipboard',ab='com.calclab.hablar.clipboard.HablarClipboard.nocache.js',nb='com.calclab.hablar.clipboard.HablarClipboard::',qb='content',Cb='default',Z='end',Pb='gecko',Qb='gecko1_8',V='gwt.codesvr=',W='gwt.hosted=',X='gwt.hybrid',vb='gwt:onLoadErrorFn',sb='gwt:onPropertyErrorFn',pb='gwt:property',Tb='hosted.html?com_calclab_hablar_clipboard_HablarClipboard',Ob='ie6',Nb='ie8',xb='iframe',jb='img',yb="javascript:''",Sb='loadExternalRefs',Bb='locale',Db='locale=',lb='meta',Ab='moduleRequested',Y='moduleStartup',Mb='msie',mb='name',Jb='opera',zb='position:absolute;width:0;height:0;border:none',Lb='safari',_='script',Ub='selectingPermutation',S='startup',Rb='unknown',Ib='user.agent',Kb='webkit';var m=window,n=document,o=m.__gwtStatsEvent?function(a){return m.__gwtStatsEvent(a)}:null,p=m.__gwtStatsSessionId?m.__gwtStatsSessionId:null,q,r,s,t=Q,u={},v=[],w=[],x=[],y=0,z,A;o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:T,millis:(new Date).getTime(),type:U});if(!m.__gwt_stylesLoaded){m.__gwt_stylesLoaded={}}if(!m.__gwt_scriptsLoaded){m.__gwt_scriptsLoaded={}}function B(){var b=false;try{var c=m.location.search;return (c.indexOf(V)!=-1||(c.indexOf(W)!=-1||m.external&&m.external.gwtOnLoad))&&c.indexOf(X)==-1}catch(a){}B=function(){return b};return b}
function C(){if(q&&r){var b=n.getElementById(R);var c=b.contentWindow;if(B()){c.__gwt_getProperty=function(a){return I(a)}}com_calclab_hablar_clipboard_HablarClipboard=null;c.gwtOnLoad(z,R,t,y);o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:Y,millis:(new Date).getTime(),type:Z})}}
function D(){if(u[$]){t=u[$];return t}var e;var f=n.getElementsByTagName(_);for(var g=0;g<f.length;++g){if(f[g].src.indexOf(ab)!=-1){e=f[g]}}if(!e){var h=bb;var i;n.write(cb+h+db);i=n.getElementById(h);e=i&&i.previousSibling;while(e&&e.tagName!=eb){e=e.previousSibling}}function j(a){var b=a.lastIndexOf(fb);if(b==-1){b=a.length}var c=a.indexOf(gb);if(c==-1){c=a.length}var d=a.lastIndexOf(hb,Math.min(c,b));return d>=0?a.substring(0,d+1):Q}
;if(e&&e.src){t=j(e.src)}if(t==Q){var k=n.getElementsByTagName(ib);if(k.length>0){t=k[k.length-1].href}else{t=j(n.location.href)}}else if(t.match(/^\w+:\/\//)){}else{var l=n.createElement(jb);l.src=t+kb;t=j(l.src)}if(i){i.parentNode.removeChild(i)}return t}
function E(){var b=document.getElementsByTagName(lb);for(var c=0,d=b.length;c<d;++c){var e=b[c],f=e.getAttribute(mb),g;if(f){f=f.replace(nb,Q);if(f.indexOf(ob)>=0){continue}if(f==pb){g=e.getAttribute(qb);if(g){var h,i=g.indexOf(rb);if(i>=0){f=g.substring(0,i);h=g.substring(i+1)}else{f=g;h=Q}u[f]=h}}else if(f==sb){g=e.getAttribute(qb);if(g){try{A=eval(g)}catch(a){alert(tb+g+ub)}}}else if(f==vb){g=e.getAttribute(qb);if(g){try{z=eval(g)}catch(a){alert(tb+g+wb)}}}}}}
function F(a,b){return b in v[a]}
function G(a){var b=u[a];return b==null?null:b}
function I(a){var b=w[a](),c=v[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(A){A(a,d,b)}throw null}
var J;function K(){if(!J){J=true;var a=n.createElement(xb);a.src=yb;a.id=R;a.style.cssText=zb;a.tabIndex=-1;n.body.appendChild(a);o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:Y,millis:(new Date).getTime(),type:Ab});a.contentWindow.location.replace(t+M)}}
w[Bb]=function(){try{var b;var c=Cb||Cb;if(b==null){var d=location.search;var e=d.indexOf(Db);if(e>=0){var f=d.substring(e);var g=f.indexOf(rb)+1;var h=f.indexOf(Eb);if(h==-1){h=f.length}b=f.substring(g,h)}}if(b==null){b=G(Bb)}if(b==null){b=m[Fb]}else{m[Fb]=b||c}if(b==null){return c}while(!F(Bb,b)){var i=b.lastIndexOf(Gb);if(i==-1){b=c;break}else{b=b.substring(0,i)}}return b}catch(a){alert(Hb+a);return Cb}};v[Bb]={'default':0,en:1,it:2};w[Ib]=function(){var b=navigator.userAgent.toLowerCase();var c=function(a){return parseInt(a[1])*1000+parseInt(a[2])};if(b.indexOf(Jb)!=-1){return Jb}else if(b.indexOf(Kb)!=-1){return Lb}else if(b.indexOf(Mb)!=-1){if(document.documentMode>=8){return Nb}else{var d=/msie ([0-9]+)\.([0-9]+)/.exec(b);if(d&&d.length==3){var e=c(d);if(e>=6000){return Ob}}}}else if(b.indexOf(Pb)!=-1){var d=/rv:([0-9]+)\.([0-9]+)/.exec(b);if(d&&d.length==3){if(c(d)>=1008)return Qb}return Pb}return Rb};v[Ib]={gecko:0,gecko1_8:1,ie6:2,ie8:3,opera:4,safari:5};com_calclab_hablar_clipboard_HablarClipboard.onScriptLoad=function(){if(J){r=true;C()}};com_calclab_hablar_clipboard_HablarClipboard.onInjectionDone=function(){q=true;o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:Sb,millis:(new Date).getTime(),type:Z});C()};E();D();var L;var M;if(B()){if(m.external&&(m.external.initModule&&m.external.initModule(R))){m.location.reload();return}M=Tb;L=Q}o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:T,millis:(new Date).getTime(),type:Ub});if(!B()){try{alert(Vb);return;var N=L.indexOf(Wb);if(N!=-1){y=Number(L.substring(N+1));L=L.substring(0,N)}M=L+Xb}catch(a){return}}var O;function P(){if(!s){s=true;C();if(n.removeEventListener){n.removeEventListener(Yb,P,false)}if(O){clearInterval(O)}}}
if(n.addEventListener){n.addEventListener(Yb,function(){K();P()},false)}var O=setInterval(function(){if(/loaded|complete/.test(n.readyState)){K();P()}},50);o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:T,millis:(new Date).getTime(),type:Z});o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:Sb,millis:(new Date).getTime(),type:U});n.write(Zb)}
com_calclab_hablar_clipboard_HablarClipboard();