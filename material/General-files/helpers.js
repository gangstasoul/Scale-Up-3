!function(){function e(){u[i]=s(u[i],/(^|\s)(portrait|landscape)(\s|$)/,"$1"+(f[o]=c.innerHeight>c.innerWidth?"portrait":"landscape")+"$3"),u[i]=s(u[i],/(^|\s)(desktop|tablet|phone)(\s|$)/,"$1"+(f.mode=t())+"$3")}function t(){var e=f.width();return 979<e||0==e?"desktop":e<980&&767<e?"tablet":"phone"}function n(e){var t=u["client"+e],n=c["inner"+e];return e=c["outer"+e],n?e<n?e:n:_&&t?t:0}function a(e){return e.toLowerCase()}function s(e,t,n){return t?e.replace(t,n):a(e).replace(/ /g,"").replace(/_/g,".")}var i="className",o="orientation",r="unknown",l="Unknown",c=window,d=document,u=d.documentElement,p=navigator,h=p.userAgent,f=c.browser={supports:function(e){if(!e)return!1;var t=d.createElement("div").style;if(e in t)return!0;var n="Icab Khtml ms O Moz Webkit".split(" "),i=n.length;if("gradient"==e){for(n.push(""),i++;i--;){e=""==n[i]?"":"-"+a(n[i])+"-";try{t.background=e+"linear-gradient(top,red,red)","-webkit-"==e&&(t.background=e+"gradient(linear,0 0,0 0)")}catch(e){}if(t.background.match("gradient"))return!0}return!1}for(e=(e=s(e,/\-(.)/g,function(e,t){return a(t)})).charAt(0).toUpperCase()+e.substr(1);i--;)if(n[i]+e in t)return"-"+a(n[i])+"-";return!1},width:function(){return n("Width")},height:function(){return n("Height")}},m=h.match(/(?:.*Version\/(\S+))?.*?(?:^Opera\/.*)?(Opera(?:\s[Mobin]+)?|Firefox|Chrome|Safari|MSIE|Konqueror|CrMo|CriOS)(?:.*Version)?[\/\s]([\d\.]+)/),v=h.match(/(?:.* rv:([\d\.abpre]+))?.*?(Gecko|WebKit|KHTML|Presto|Trident)\/([\d\.abpre]+)/),g=h.match(/iPhone|iP[oa]d|BlackBerry|Kindle/),_=(y=h.match(/.*(Windows|Mac OS X|Android|Symbian|CrOS)(?:OS| NT)?[ \/-;](CE|Phone|[\d\._i]+)?/))&&y[1]?y[1]:l,w=y&&y[2],b=h.match(/OPR\/([\d\.]+)/),$=w?s(w):"";"Windows"==_?$=6.3==w?"8.1":6.2==w?"8":6.1==w?"7":6==w?"Vista":5.1==w?"XP":5.2==w&&"2003":/X11/.test(h)&&"CrOS"!=_?_="Unix":/Linux/.test(h)&&!/Cr|An/.test(_)!=_&&(_="Linux"),/iPhone|iP[ao]d/.test(h)&&(_="iOS",$=($=h.match(/OS ([\d_]+) like Mac/))?s($[1]):""),f.mode=t(),f.os=s(s(f.osFull=_),/sx/,"s"),f.osVersion=$,f.device=a(f.deviceFull=g&&g[0]?g[0]:l);var w=m&&m[2],g=/Cr[iM]/.test(w),k=w?s(g?"Chrome Mobi":w,"Mobi","Mobile"):l,y=f.layoutVersion=v&&v[3]?v[1]||v[3]:"",l=v&&v[2]?v[2]:l;if(b&&(k="Opera",w=0,m[1]=b[1]),"Trident"!=l&&"MSIE"!=k||(l="Trident",f[w="ie"]=!0,k="Internet Explorer",!m&&(_=h.match(/ rv:([\d\.]+)/))&&(m=[,_[1]])),f[w=f.name=w?s(w):g?"crmo":s(k)||r]=!0,f.nameFull=k,f.version=m?m[1]||m[3]:"",f[f.layout=a(f.layoutFull=l)]=!0,l="supports",k=((f.is_old=!(f.is_modern=!!f[l]("transition")))?"old":"modern")+"-browser ",k+=(r==f.os?r+"_os":f.os)+" ",r!=f.device&&(k+=f.device+" "),r!=f.layout&&(k+=f.layout+" "),""!=y&&(k+=f.layout+s(y,/\..*/,"")+" "),m=f.osVersion,f.is_pc=!(f.is_mobile=/phone|ip[ao]d|android|kberry|webos|wosb|mini|mobi|tablet|ows ce|palm|symb|ies60|sony|msung|midp|kindle|[nb]ook/i.test(h))){if(k+="pc ","windows"==f.os&&$&&(k+="win"+$+" "),k+=w+" "){for(k+=w+(m=s(f.version,/\..*/,""))+" ",v=25;m<=v;v--)k+=w+v+"- ";k+=w+s(s(f.version,/\./g,"_"),/^(\d+_\d).*/,"$1")+" "}}else k+="mobile "+w+" ";for(v=(m="boxShadow boxSizing textShadow transform transition animation borderImage borderRadius gradient opacity".split(" ")).length;v--;)k+=(f[l][m[v]]=f[l](m[v]))?a(m[v])+" ":"no-"+a(m[v])+" ";e(),k+=f.mode+((f.is_retina=1<c.devicePixelRatio)?" retina ":" no-retina ")+((f["is_"+(r="touchscreen")]="ontouchstart"in u)?r:" no-"+r)+" "+f[o]+" "+((f[l=(r="cookie")+"Enabled"]=p[l])?r:"no-"+r)+((f[r="javaEnabled"]=p[r]())?" java":" no-java"),l="ShockwaveFlash";try{h=new ActiveXObject(l+"."+l)}catch(e){h=(h=navigator.mimeTypes["application/x-shockwave-flash"])&&h.enabledPlugin}f.flashEnabled=!!h,k+=h?" flash":" no-flash",u[i]+=""==u[i]?k:" "+k,p=c.addEventListener,m=c.attachEvent,p?p("resize",e,!1):m?m("onresize",e):c.onresize=e}();var svg_icons={close:'<svg viewBox="0 0 17 16"><path d="M11.262625,8.038 L16.470625,2.829 C16.710625,2.589 16.710625,2.2 16.470625,1.96 L14.734625,0.224 C14.494625,-0.014 14.105625,-0.014 13.866625,0.224 L8.657625,5.433 L3.448625,0.224 C3.209625,-0.014 2.820625,-0.014 2.580625,0.224 L0.844625,1.96 C0.605625,2.2 0.605625,2.589 0.844625,2.829 L6.052625,8.038 L0.844625,13.246 C0.605625,13.486 0.605625,13.875 0.844625,14.115 L2.580625,15.851 C2.820625,16.09 3.209625,16.09 3.448625,15.851 L8.657625,10.642 L13.866625,15.851 C14.105625,16.09 14.494625,16.09 14.734625,15.851 L16.470625,14.115 C16.710625,13.875 16.710625,13.486 16.470625,13.246 L11.262625,8.038 L11.262625,8.038 Z M11.262625,8.038"></path></svg>',close2:'<svg viewBox="0 0 32 32"><path style="fill-rule:evenodd;clip-rule:evenodd;" d="M16,32C7.163,32,0,24.837,0,16C0,7.164,7.163,0,16,0c8.837,0,16,7.164,16,16 C32,24.837,24.837,32,16,32z M16,2C8.268,2,2,8.268,2,16c0,7.732,6.268,14,14,14c7.732,0,14-6.268,14-14C30,8.268,23.732,2,16,2z M17.42,16.006l4.237,4.237c0.39,0.391,0.39,1.024,0,1.414c-0.391,0.39-1.024,0.39-1.414,0l-4.237-4.237l-4.266,4.266 c-0.394,0.394-1.032,0.394-1.425,0c-0.394-0.393-0.394-1.031,0-1.425l4.266-4.266l-4.237-4.237c-0.391-0.391-0.391-1.024,0-1.415 c0.391-0.39,1.024-0.39,1.414,0l4.237,4.237l4.297-4.297c0.394-0.394,1.032-0.394,1.425,0c0.394,0.394,0.394,1.032,0,1.425 L17.42,16.006z"/></svg>',key_up_arrow:'<svg viewBox="0 0 20 33"><path d="M10.025,0.1995 L0.012,10.1915 L7.016,10.1915 L7.016,32.2125 L13.035,32.2125 L13.035,10.1915 L20.039,10.1915 L10.025,0.1995 Z M10.025,0.1995"></path></svg>',volume:'<svg viewBox="0 0 32 30"><path d="M5.2300072,9.330782 L5.23224512,9.31279879 L15.6586908,0.395357143 L15.6586908,29.6046429 L5.26805175,20.597285 L0,20.597285 L0,9.330782 L5.2300072,9.330782 L5.2300072,9.330782 Z M20.5843415,8.85197814 C22.5693721,10.1602592 23.8807903,12.403669 23.8807903,14.9572898 C23.8807903,17.5019189 22.5783238,19.7385851 20.6067207,21.0468661 L19.1162694,18.120093 L19.1162694,18.1088535 C20.0382903,17.3603009 20.6402894,16.2341002 20.6402894,14.9572898 C20.6402894,13.6804794 20.0382903,12.5520308 19.1162694,11.8034782 L19.1162694,11.7337931 L20.5843415,8.85197814 L20.5843415,8.85197814 Z M31.3263332,14.9595377 C31.3263332,20.3814861 28.3499064,25.1043358 23.9456898,27.6017589 L22.4731418,24.7109523 L22.4731418,24.7019607 C25.8233004,22.741787 28.0858325,19.1159152 28.0858325,14.9595377 C28.0858325,10.8031602 25.8233004,7.17728843 22.4731418,5.21486681 L22.4731418,5.14742964 L23.9210727,2.30382902 C28.3409547,4.79675636 31.3263332,9.52634979 31.3263332,14.9595377 L31.3263332,14.9595377 L31.3263332,14.9595377 Z M31.3263332,14.9595377"></path></svg>',play:'<svg viewBox="0 0 28 40"><path d="M0,1.06005139 C1.75484732,-0.353350463 4.59923244,-0.353350463 6.35407976,1.06005139 L26.6852661,17.4405966 C28.4382446,18.8539985 28.4382446,21.1460015 26.6852661,22.5594034 L6.35407976,38.9399486 C4.59923244,40.3533505 1.75484732,40.3533505 3.31973913e-15,38.9399486 L3.31973913e-15,1.06005139 L0,1.06005139 L0,1.06005139 Z M0,1.06005139"></path></svg>',movie_frame:'<svg viewBox="0 0 54 36"><path d="M1.22727273,0 C0.549818182,0 0,0.574714286 0,1.28571429 L0,34.7142857 C0,35.4252857 0.549818182,36 1.22727273,36 L52.7727273,36 C53.4514091,36 54,35.4252857 54,34.7142857 L54,1.28571429 C54,0.574714286 53.4501818,0 52.7727273,0 L1.22727273,0 Z M8,30.75 C8,31.44125 7.44,32 6.75,32 L4.25,32 C3.56,32 3,31.44125 3,30.75 L3,28.25 C3,27.56 3.56,27 4.25,27 L6.75,27 C7.44,27 8,27.56 8,28.25 L8,30.75 L8,30.75 Z M8,18.75 C8,19.44125 7.44,20 6.75,20 L4.25,20 C3.56,20 3,19.44125 3,18.75 L3,16.25 C3,15.56 3.56,15 4.25,15 L6.75,15 C7.44,15 8,15.56 8,16.25 L8,18.75 L8,18.75 Z M6.75,8 L4.25,8 C3.56,8 3,7.44125 3,6.75 L3,4.25 C3,3.56 3.56,3 4.25,3 L6.75,3 C7.44,3 8,3.56 8,4.25 L8,6.75 C8,7.44125 7.44,8 6.75,8 Z M43,26.9090909 C43,29.7205455 40.612,32 37.6666667,32 L16.3333333,32 C13.388,32 11,29.7205455 11,26.9090909 L11,9.09090909 C11,6.27945455 13.388,4 16.3333333,4 L37.6666667,4 C40.612,4 43,6.27945455 43,9.09090909 L43,26.9090909 L43,26.9090909 Z M51,30.75 C51,31.44125 50.44125,32 49.75,32 L47.25,32 C46.55875,32 46,31.44125 46,30.75 L46,28.25 C46,27.56 46.55875,27 47.25,27 L49.75,27 C50.44125,27 51,27.56 51,28.25 L51,30.75 L51,30.75 Z M51,18.75 C51,19.44125 50.44125,20 49.75,20 L47.25,20 C46.55875,20 46,19.44125 46,18.75 L46,16.25 C46,15.56 46.55875,15 47.25,15 L49.75,15 C50.44125,15 51,15.56 51,16.25 L51,18.75 L51,18.75 Z M51,6.75 C51,7.44125 50.44125,8 49.75,8 L47.25,8 C46.55875,8 46,7.44125 46,6.75 L46,4.25 C46,3.56 46.55875,3 47.25,3 L49.75,3 C50.44125,3 51,3.56 51,4.25 L51,6.75 L51,6.75 Z M23,10.3695906 L23,24.6304094 C23.5282721,25.1231969 24.3846154,25.1231969 24.9115959,24.6304094 L31.6047646,18.3917702 C32.1317451,17.8989827 32.1317451,17.1010173 31.6047646,16.6082298 L24.9115959,10.3695906 C24.3846154,9.87680314 23.5282721,9.87680314 23,10.3695906 Z M23,10.3695906"></path></svg>',user:'<svg viewBox="0 0 29 34"><path fill-rule="evenodd"  fill="rgb( 81, 161, 227 )" d="M27.000,31.000 C25.874,31.000 23.751,31.249 23.000,32.000 C22.249,32.751 20.401,34.000 19.000,34.000 C17.599,34.000 15.000,34.000 15.000,34.000 C15.000,34.000 14.000,34.000 14.000,34.000 C14.000,34.000 11.401,34.000 10.000,34.000 C8.599,34.000 6.751,32.751 6.000,32.000 C5.249,31.249 3.126,31.000 2.000,31.000 C0.874,31.000 0.000,31.813 0.000,27.000 C0.000,24.245 3.405,20.127 5.000,19.000 C6.595,17.873 10.000,17.000 10.000,17.000 C10.000,17.000 11.000,19.000 11.000,19.000 C11.000,19.000 9.000,19.000 9.000,19.000 C9.000,19.000 12.000,31.000 12.000,31.000 C12.000,31.000 13.000,31.000 13.000,31.000 C13.000,31.000 14.000,23.000 14.000,23.000 C14.000,23.000 15.000,23.000 15.000,23.000 C15.000,23.000 16.000,31.000 16.000,31.000 C16.000,31.000 17.000,31.000 17.000,31.000 C17.000,31.000 20.000,19.000 20.000,19.000 C20.000,19.000 18.000,19.000 18.000,19.000 C18.000,19.000 19.000,17.000 19.000,17.000 C19.000,17.000 22.405,17.873 24.000,19.000 C25.595,20.127 29.000,24.245 29.000,27.000 C29.000,31.726 28.126,31.000 27.000,31.000 ZM15.000,22.000 C15.000,22.000 14.000,22.000 14.000,22.000 C14.000,22.000 13.000,20.000 13.000,20.000 C13.000,20.000 16.000,20.000 16.000,20.000 C16.000,20.000 15.000,22.000 15.000,22.000 ZM19.838,11.647 C19.838,11.647 18.536,17.987 14.000,18.000 C9.664,18.013 8.095,11.647 8.095,11.647 C8.095,11.647 7.013,11.331 7.033,10.588 C7.053,9.844 5.581,0.150 14.000,0.000 C22.203,-0.146 21.084,9.687 20.900,10.588 C20.717,11.489 19.838,11.647 19.838,11.647 ZM18.000,8.000 C16.697,7.913 15.591,5.294 15.591,5.294 C15.591,5.294 13.647,9.003 11.000,9.000 C9.925,8.999 9.000,10.000 9.000,10.000 C9.000,10.000 10.925,16.997 14.000,17.000 C17.945,17.004 19.000,9.000 19.000,9.000 C19.000,9.000 18.984,8.065 18.000,8.000 Z"/></svg>',qmark:'<svg viewBox="0 0 181 181"><path d="M81.3125,118.679688 L81.3125,139 L102.265625,139 L102.265625,118.679688 Z M40.0013703,0 L140.99863,0 C163.087357,0 181,17.9092235 181,40.0013703 L181,140.99863 C181,163.087357 163.090776,181 140.99863,181 L40.0013703,181 C17.9126434,181 0,163.090776 0,140.99863 L0,40.0013703 C0,17.9126434 17.9092235,0 40.0013703,0 Z M69.640625,39.6484375 C60.8749562,45.2265904 56.2109403,54.6952457 55.6484375,68.0546875 L75.96875,68.0546875 C75.96875,64.164043 77.1054574,60.4140805 79.3789062,56.8046875 C81.6523551,53.1952945 85.5077853,51.390625 90.9453125,51.390625 C96.4765902,51.390625 100.285146,52.8554541 102.371094,55.7851562 C104.457042,58.7148584 105.5,61.9609197 105.5,65.5234375 C105.5,68.617203 104.562509,71.4531121 102.6875,74.03125 C101.656245,75.5312575 100.296883,76.9140562 98.609375,78.1796875 L93.4765625,82.1875 C88.4140372,86.1250197 85.2734436,89.6054536 84.0546875,92.6289062 C82.8359314,95.6523589 82.0859389,101.12496 81.8046875,109.046875 L100.789062,109.046875 C100.835938,105.296856 101.140622,102.531259 101.703125,100.75 C102.593754,97.9374859 104.398424,95.476573 107.117188,93.3671875 L112.109375,89.5 C117.1719,85.5624803 120.593741,82.3281377 122.375,79.796875 C125.42189,75.6249791 126.945312,70.492218 126.945312,64.3984375 C126.945312,54.4608878 123.441441,46.9609628 116.433594,41.8984375 C109.425746,36.8359122 100.625053,34.3046875 90.03125,34.3046875 C81.9687097,34.3046875 75.1719027,36.0859197 69.640625,39.6484375 Z M69.640625,39.6484375"></path></svg>',show_vocabulary:'<svg viewBox="0 0 181 181"><path d="M26.658,0.206 L2.658,0.206 C1.554,0.206 0.658,1.102 0.658,2.206 L0.658,22.206 C0.658,23.311 1.554,24.206 2.658,24.206 L26.658,24.206 C27.762,24.206 28.658,23.311 28.658,22.206 L28.658,2.206 C28.658,1.102 27.763,0.206 26.658,0.206 L26.658,0.206 Z M24.658,18.206 C24.658,19.311 23.762,20.206 22.658,20.206 L6.658,20.206 C5.554,20.206 4.658,19.311 4.658,18.206 L4.658,6.206 C4.658,5.102 5.554,4.206 6.658,4.206 L22.658,4.206 C23.762,4.206 24.658,5.102 24.658,6.206 L24.658,18.206 L24.658,18.206 Z M11.558,6.489 C11.032,6.095 10.179,6.095 9.653,6.489 L9.653,17.907 C10.179,18.302 11.032,18.302 11.558,17.907 L18.225,12.912 C18.75,12.517 18.75,11.879 18.225,11.484 L11.558,6.489 L11.558,6.489 Z M11.558,6.489"></path></svg>',mobile:'<svg viewBox="0 0 512 512"><path d="M334.832,50H177.168c-18.227,0-33,14.774-33,33v346c0,18.226,14.773,33,33,33h157.664 c18.227,0,33-14.774,33-33V83C367.832,64.774,353.059,50,334.832,50z M238.5,80.222h37c2.209,0,4,1.791,4,4s-1.791,4-4,4h-37 c-2.209,0-4-1.791-4-4S236.291,80.222,238.5,80.222z M257.002,443.056c-8.838,0-16-7.163-16-16s7.162-16,16-16 c8.834,0,16,7.163,16,16S265.836,443.056,257.002,443.056z M342.75,393.75H169.252v-275.5H342.75V393.75z"></path></svg>',speaker:'<svg viewBox="0 0 50 50"><g><path d="M19.2,44c-1.6,0-8.6-9.8-8.6-9.8H4.9C3.3,34.2,2,32.8,2,31V18c0-1.8,1.3-3.2,2.9-3.2h5.8c0,0,6.9-9.8,8.6-9.8c2.8,0,2.9,1.5,2.9,3.3v32.5C22.1,42.5,22,44,19.2,44z"/><path fill-rule="evenodd" fill="" d="M33.6,43.7V37c5-1.4,8.6-6.5,8.6-12.5S38.6,13.4,33.6,12V5.3C41.8,6.9,48,14.8,48,24.5C48,34.2,41.8,42.1,33.6,43.7z M36.5,24.5c0,5.4-3.9,9.7-8.6,9.7v-6.5c1.6,0,2.9-1.5,2.9-3.2s-1.3-3.2-2.9-3.2v-6.5C32.6,14.8,36.5,19.1,36.5,24.5z"/></g></svg>',equalizer:'<svg width="30px" height="33px" viewBox="0 0 30 33"> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Slow-sound" transform="translate(-353.000000, -146.000000)" fill="#FFFFFF"> <g id="Group-Copy" transform="translate(353.000000, 146.000000)"> <rect id="Rectangle-3" x="4" y="8" width="2" height="17"></rect> <rect id="Rectangle-3-Copy" x="8" y="3" width="2" height="26"></rect> <rect id="Rectangle-3-Copy-2" x="12" y="8" width="2" height="16"></rect> <rect id="Rectangle-3-Copy-3" x="16" y="-7.10542736e-15" width="2" height="33"></rect> <rect id="Rectangle-3-Copy-4" x="20" y="5" width="2" height="22"></rect> <rect id="Rectangle-3-Copy-5" x="24" y="9" width="2" height="15"></rect> <rect id="Rectangle-3-Copy-6" x="0" y="5" width="2" height="22"></rect> <rect id="Rectangle-3-Copy-7" x="28" y="5" width="2" height="22"></rect> </g> </g> </g> </svg>',book:'<svg viewBox="0 0 32 32"><g><g><g><path fill-rule="evenodd" clip-rule="evenodd" d="M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16c8.8,0,16-7.2,16-16S24.8,0,16,0z M16,30C8.3,30,2,23.7,2,16C2,8.3,8.3,2,16,2c7.7,0,14,6.3,14,14C30,23.7,23.7,30,16,30z"/></g></g></g><g><g><g><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5,23c-0.8,0-1.5-0.7-1.5-1.5c0-0.8,0.7-1.5,1.5-1.5h9.4V9L11.8,9c-1,0-1.8,0.8-1.8,1.9v12.2c0,1,0.8,1.9,1.8,1.9h9.2c1,0,1.8-0.8,1.8-1.9V23H13.5z"/></g></g></g></svg>',puzzle1:'<svg viewBox="0 0 276 63" enable-background="new 0 0 276 63"><g><g><path fill-rule="evenodd" clip-rule="evenodd" d="M266.3,24c-3,0-3.8,2.4-4.7,2.4c-0.8,0-1.7-2.4-1.7-2.4V5c0-1.1-0.9-2-2-2H5C3.9,3,3,3.9,3,5v20.3c0.2,0.3,0.4,0.6,0.5,1c0.2,0,0.4,0,0.6,0C6,26.3,6.3,24,8.6,24c2,0,4.4,3.5,4.4,6c0,2.5-2.4,6-4.4,6c-2.4,0-2.5-2.2-4.4-2.2c-0.1,0-0.4-0.1-0.6-0.2c-0.2,0.3-0.3,0.7-0.5,1V56c0,1.1,0.9,2,2,2h253c1.1,0,2-0.9,2-2V38c0,0,0.9-3.4,1.7-3.4c0.8,0,2.1,2.4,4.7,2.4c2.5,0,4.7-3.3,4.7-6.5S269.4,24,266.3,24z"/></g></g></svg>',plus:'<svg viewBox="0 0 32 32" enable-background="new 0 0 32 32"><g><g><path fill-rule="evenodd" clip-rule="evenodd" d="M22,15h-5v-5c0-0.6-0.4-1-1-1c-0.6,0-1,0.4-1,1v5h-5c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h5v5c0,0.6,0.4,1,1,1c0.6,0,1-0.4,1-1v-5h5c0.6,0,1-0.4,1-1C23,15.4,22.6,15,22,15z M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16c8.8,0,16-7.2,16-16S24.8,0,16,0z M16,30C8.3,30,2,23.7,2,16C2,8.3,8.3,2,16,2c7.7,0,14,6.3,14,14C30,23.7,23.7,30,16,30z"/></g></g></svg>',check:'<svg viewBox="0 0 32.99 27.002"><path d="M31.757,7.384L13.89,25.735c-1.645,1.689-4.311,1.689-5.956,0 l-6.7-6.882c-1.645-1.689-1.645-4.428,0-6.117c1.645-1.689,4.311-1.689,5.956,0l3.722,3.823l14.89-15.292 c1.645-1.689,4.311-1.689,5.956,0C33.402,2.956,33.402,5.695,31.757,7.384z"/></svg>',check2:'<svg viewBox="-459 260 33 33"><g><g><path fill="#41B36B" d="M-442.5,261c8.6,0,15.5,6.9,15.5,15.5s-6.9,15.5-15.5,15.5s-15.5-6.9-15.5-15.5S-451.1,261-442.5,261z"></path><path fill="#FFFFFF" d="M-442.5,293c-9.1,0-16.5-7.4-16.5-16.5c0-9.1,7.4-16.5,16.5-16.5s16.5,7.4,16.5,16.5C-426,285.6-433.4,293-442.5,293z M-442.5,262c-8,0-14.5,6.5-14.5,14.5s6.5,14.5,14.5,14.5s14.5-6.5,14.5-14.5S-434.5,262-442.5,262z"></path></g><path fill="#FFFFFF" d="M-433.7,273.6l-10.3,10.5c-0.9,1-2.5,1-3.4,0l-3.9-4c-1-1-1-2.5,0-3.5c1-1,2.5-1,3.4,0l2.2,2.2l8.6-8.8c1-1,2.5-1,3.4,0S-432.7,272.6-433.7,273.6z"></path></g></svg>',reload:'<svg viewBox="0 0 22.006 22.001"><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;" d="M21.215,1.763l-1.97,1.97C20.958,5.67,22,8.212,22,11.001 c0,6.075-4.925,11-11,11c-6.075,0-11-4.925-11-11C0,5.393,4.2,0.775,9.625,0.096v2.779c-3.9,0.656-6.875,4.039-6.875,8.126 c0,4.556,3.694,8.25,8.25,8.25s8.25-3.694,8.25-8.25c0-2.03-0.741-3.88-1.958-5.315l-1.91,1.911 C15.089,7.89,14.823,8.25,14.444,8.25c-0.38,0-0.687-0.308-0.687-0.688V0.687C13.756,0,14.361,0,14.444,0h6.875 c0.38,0,0.688,0.308,0.688,0.687C22.006,1.067,21.586,1.393,21.215,1.763z"/></svg>',dictionary:'<svg preserveAspectRatio="xMidYMid" width="25" height="28" viewBox="0 0 25 28"><path fill="#456f9c" d="M23.000,28.000 C23.000,28.000 7.000,28.000 7.000,28.000 C5.895,28.000 5.000,27.105 5.000,26.000 C5.000,26.000 5.000,24.000 5.000,24.000 C5.000,24.000 7.000,24.000 7.000,24.000 C7.000,25.105 7.895,26.000 9.000,26.000 C9.000,26.000 21.000,26.000 21.000,26.000 C22.105,26.000 23.000,25.105 23.000,24.000 C23.000,24.000 23.000,9.000 23.000,9.000 C23.000,7.895 22.105,7.000 21.000,7.000 C21.000,7.000 21.000,5.000 21.000,5.000 C21.000,5.000 23.000,5.000 23.000,5.000 C24.105,5.000 25.000,5.895 25.000,7.000 C25.000,7.000 25.000,26.000 25.000,26.000 C25.000,27.105 24.105,28.000 23.000,28.000 ZM18.000,23.000 C18.000,23.000 2.000,23.000 2.000,23.000 C0.895,23.000 -0.000,22.105 -0.000,21.000 C-0.000,21.000 -0.000,2.000 -0.000,2.000 C-0.000,0.895 0.895,0.000 2.000,0.000 C2.000,0.000 18.000,0.000 18.000,0.000 C19.105,0.000 20.000,0.895 20.000,2.000 C20.000,2.000 20.000,21.000 20.000,21.000 C20.000,22.105 19.105,23.000 18.000,23.000 ZM5.000,7.000 C5.000,7.000 5.000,17.000 5.000,17.000 C5.000,17.000 14.000,12.000 14.000,12.000 C14.000,12.000 5.000,7.000 5.000,7.000 Z" id="path-1" class="cls-2" fill-rule="evenodd"/></svg>',preloader_1:'<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" id="&#1057;&#1083;&#1086;&#1081;_1" x="0px" y="0px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve"><g><g><path d="M18.6 42.3l-4 6.8c1.9 1.6 4.1 2.8 6.5 3.8l3.9-6.8C22.6 45.3 20.4 44 18.6 42.3z"><animate attributeName="opacity" attributeType="XML" values="1; 0.9; 0.8; 0.7; 0.6; 0.5; 0.4; 0.3; 0.2; 0.1; 0; 0" begin="1.1s" dur="1.2s" repeatCount="indefinite"/></path> <path d="M30 46.8c-1.3 0-2.5-0.2-3.8-0.4v7.9c1.2 0.2 2.5 0.3 3.8 0.3s2.5-0.1 3.8-0.3v-7.9 C32.5 46.7 31.3 46.8 30 46.8z"><animate attributeName="opacity" attributeType="XML" values="1; 0.9; 0.8; 0.7; 0.6; 0.5; 0.4; 0.3; 0.2; 0.1; 0; 0" begin="1s" dur="1.2s" repeatCount="indefinite"/></path> <path d="M35 46.1l3.9 6.8c2.4-0.9 4.5-2.2 6.5-3.8l-4-6.8C39.6 44 37.4 45.3 35 46.1z"><animate attributeName="opacity" attributeType="XML" values="1; 0.9; 0.8; 0.7; 0.6; 0.5; 0.4; 0.3; 0.2; 0.1; 0; 0" begin="0.9s" dur="1.2s" repeatCount="indefinite"/></path> <path d="M42.3 41.4l6.8 4c1.6-1.9 2.8-4.1 3.8-6.5L46.1 35C45.3 37.4 44 39.6 42.3 41.4z"><animate attributeName="opacity" attributeType="XML" values="1; 0.9; 0.8; 0.7; 0.6; 0.5; 0.4; 0.3; 0.2; 0.1; 0; 0" begin="0.8s" dur="1.2s" repeatCount="indefinite"/></path> <path d="M54.3 26.3h-7.9c0.3 1.2 0.4 2.5 0.4 3.8c0 1.3-0.2 2.5-0.4 3.7h7.9c0.2-1.2 0.3-2.5 0.3-3.7 C54.6 28.7 54.5 27.5 54.3 26.3z"><animate attributeName="opacity" attributeType="XML" values="1; 0.9; 0.8; 0.7; 0.6; 0.5; 0.4; 0.3; 0.2; 0.1; 0; 0" begin="0.7s" dur="1.2s" repeatCount="indefinite"/></path> <path d="M46.1 25l6.8-3.9c-0.9-2.4-2.2-4.5-3.8-6.5l-6.8 4C44 20.4 45.3 22.6 46.1 25z"><animate attributeName="opacity" attributeType="XML" values="1; 0.9; 0.8; 0.7; 0.6; 0.5; 0.4; 0.3; 0.2; 0.1; 0; 0" begin="0.6s" dur="1.2s" repeatCount="indefinite"/></path> <path d="M41.4 17.7l4-6.8c-1.9-1.6-4.1-2.8-6.5-3.8L35 13.9C37.4 14.7 39.6 16 41.4 17.7z"><animate attributeName="opacity" attributeType="XML" values="1; 0.9; 0.8; 0.7; 0.6; 0.5; 0.4; 0.3; 0.2; 0.1; 0; 0" begin="0.5s" dur="1.2s" repeatCount="indefinite"/></path> <path d="M30 13.2c1.3 0 2.5 0.2 3.8 0.4V5.7c-1.2-0.2-2.5-0.3-3.8-0.3s-2.5 0.1-3.8 0.3v7.9 C27.5 13.3 28.7 13.2 30 13.2z"><animate attributeName="opacity" attributeType="XML" values="1; 0.9; 0.8; 0.7; 0.6; 0.5; 0.4; 0.3; 0.2; 0.1; 0; 0" begin="0.4s" dur="1.2s" repeatCount="indefinite"/></path> <path d="M25 13.9l-3.9-6.8c-2.4 0.9-4.5 2.2-6.5 3.8l4 6.8C20.4 16 22.6 14.7 25 13.9z"><animate attributeName="opacity" attributeType="XML" values="1; 0.9; 0.8; 0.7; 0.6; 0.5; 0.4; 0.3; 0.2; 0.1; 0; 0" begin="0.3s" dur="1.2s" repeatCount="indefinite"/></path> <path d="M17.7 18.6l-6.8-4c-1.6 1.9-2.8 4.1-3.8 6.5l6.8 3.9C14.7 22.6 16 20.4 17.7 18.6z"><animate attributeName="opacity" attributeType="XML" values="1; 0.9; 0.8; 0.7; 0.6; 0.5; 0.4; 0.3; 0.2; 0.1; 0; 0" begin="0.2s" dur="1.2s" repeatCount="indefinite"/></path> <path d="M13.2 30c0-1.3 0.2-2.5 0.4-3.8H5.7c-0.2 1.2-0.3 2.5-0.3 3.8c0 1.3 0.1 2.5 0.3 3.7h7.9 C13.3 32.5 13.2 31.3 13.2 30z"><animate attributeName="opacity" attributeType="XML" values="1; 0.9; 0.8; 0.7; 0.6; 0.5; 0.4; 0.3; 0.2; 0.1; 0; 0" begin="0.1s" dur="1.2s" repeatCount="indefinite"/></path> <path d="M13.9 35l-6.8 3.9c0.9 2.4 2.2 4.5 3.8 6.5l6.8-4C16 39.6 14.7 37.4 13.9 35z"><animate attributeName="opacity" attributeType="XML" values="1; 0.9; 0.8; 0.7; 0.6; 0.5; 0.4; 0.3; 0.2; 0.1; 0; 0" begin="0s" dur="1.2s" repeatCount="indefinite"/></path> </g> <g><path d="M18.6 42.3l-4 6.8l-2.7 4.7c2 1.5 4.2 2.8 6.5 3.8l2.7-4.7l3.9-6.8C22.6 45.3 20.4 44 18.6 42.3z"><animate attributeName="opacity" attributeType="XML" values="1; 0.5; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0" begin="1.1s" dur="1.2s" repeatCount="indefinite"/></path>     <path d="M30 46.8c-1.3 0-2.5-0.2-3.8-0.4v7.9v5.5c1.2 0.2 2.5 0.2 3.8 0.2s2.5-0.1 3.8-0.2v-5.5v-7.9 C32.5 46.7 31.3 46.8 30 46.8z"><animate attributeName="opacity" attributeType="XML" values="1; 0.5; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0" begin="1s" dur="1.2s" repeatCount="indefinite"/></path> <path d="M45.4 49.2l-4-6.8c-1.8 1.7-4 3-6.5 3.8l3.9 6.8l2.7 4.7c2.3-1 4.5-2.3 6.5-3.8L45.4 49.2z"><animate attributeName="opacity" attributeType="XML" values="1; 0.5; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0" begin="0.9s" dur="1.2s" repeatCount="indefinite"/></path> <path d="M52.9 38.9L46.1 35c-0.8 2.5-2.1 4.7-3.8 6.5l6.8 4l4.7 2.7c1.5-2 2.8-4.2 3.8-6.5L52.9 38.9z"><animate attributeName="opacity" attributeType="XML" values="1; 0.5; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0" begin="0.8s" dur="1.2s" repeatCount="indefinite"/></path> <path d="M59.8 26.2h-5.5h-7.9c0.3 1.2 0.4 2.5 0.4 3.8c0 1.3-0.2 2.5-0.4 3.8h7.9h5.5c0.2-1.2 0.2-2.5 0.2-3.8 S59.9 27.5 59.8 26.2z"><animate attributeName="opacity" attributeType="XML" values="1; 0.5; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0" begin="0.7s" dur="1.2s" repeatCount="indefinite"/></path> <path d="M53.9 11.9l-4.7 2.7l-6.8 4c1.7 1.8 3 4 3.8 6.5l6.8-3.9l4.7-2.7C56.7 16 55.4 13.9 53.9 11.9z"><animate attributeName="opacity" attributeType="XML" values="1; 0.5; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0" begin="0.6s" dur="1.2s" repeatCount="indefinite"/></path> <path d="M41.6 2.3l-2.7 4.7L35 13.9c2.5 0.8 4.7 2.1 6.5 3.8l4-6.8l2.7-4.7C46.1 4.6 44 3.3 41.6 2.3z"><animate attributeName="opacity" attributeType="XML" values="1; 0.5; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0" begin="0.5s" dur="1.2s" repeatCount="indefinite"/></path> <path d="M30 0c-1.3 0-2.5 0.1-3.8 0.2v5.5v7.9c1.2-0.3 2.5-0.4 3.8-0.4s2.5 0.2 3.8 0.4V5.7V0.2 C32.5 0.1 31.3 0 30 0z"><animate attributeName="opacity" attributeType="XML" values="1; 0.5; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0" begin="0.4s" dur="1.2s" repeatCount="indefinite"/></path> <path d="M21.1 7.1l-2.7-4.7c-2.3 1-4.5 2.3-6.5 3.8l2.7 4.7l4 6.8c1.8-1.7 4-3 6.5-3.8L21.1 7.1z"><animate attributeName="opacity" attributeType="XML" values="1; 0.5; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0" begin="0.3s" dur="1.2s" repeatCount="indefinite"/></path> <path d="M10.8 14.6l-4.7-2.7c-1.5 2-2.8 4.2-3.8 6.5l4.7 2.7l6.8 3.9c0.8-2.5 2.1-4.7 3.8-6.5L10.8 14.6z"><animate attributeName="opacity" attributeType="XML" values="1; 0.5; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0" begin="0.2s" dur="1.2s" repeatCount="indefinite"/></path> <path d="M13.6 26.2H5.7H0.2C0.1 27.5 0 28.7 0 30s0.1 2.5 0.2 3.8h5.5h7.9c-0.3-1.2-0.4-2.5-0.4-3.8 C13.2 28.7 13.3 27.5 13.6 26.2z"><animate attributeName="opacity" attributeType="XML" values="1; 0.5; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0" begin="0.1s" dur="1.2s" repeatCount="indefinite"/></path> <path d="M13.9 35l-6.8 3.9l-4.7 2.7c1 2.3 2.3 4.5 3.8 6.5l4.7-2.7l6.8-4C16 39.6 14.7 37.4 13.9 35z"><animate attributeName="opacity" attributeType="XML" values="1; 0.5; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0" begin="0s" dur="1.2s" repeatCount="indefinite"/></path> </g><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 30 30" to="360 30 30" dur="12s" repeatCount="indefinite"/></g></svg>',icon_plus_round:'<svg viewBox="0 0 24 24"><path class="icon-dict-add__round" d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1z" fill="transparent"/><path class="icon-dict-add__border" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22.5C6.2 22.5 1.5 17.8 1.5 12S6.2 1.5 12 1.5 22.5 6.2 22.5 12 17.8 22.5 12 22.5z" fill="#71b26f"/><path class="icon-dict-add__icon" d="M17 11h-4V7c0-.6-.4-1-1-1s-1 .4-1 1v4H7c-.6 0-1 .4-1 1s.4 1 1 1h4v4c0 .6.4 1 1 1s1-.4 1-1v-4h4c.6 0 1-.4 1-1s-.4-1-1-1z" fill="#71b26f"/></svg>'};function in_array(e,t){for(var n=0;n<t.length;n++)if(t[n]==e)return!0;return!1}function getRandom(e,t){return e+Math.floor(Math.random()*(t-e+1))}!function(){for(var e in svg_icons){var t,n,i='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="'+e+'" '+svg_icons[e].slice(4);window.DOMParser?(t=(new DOMParser).parseFromString(i,"text/xml"),svg_icons[e]=document.adoptNode(t.firstChild)):((n=document.createElement("div")).innerHTML=i,svg_icons[e]=n.firstChild)}}(),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),n=t.length>>>0;if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var i=arguments[1],a=0;a<n;){var s=t[a];if(e.call(i,s,a,t))return s;a++}}}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),i=n.length>>>0;if(0==i)return!1;for(var a=0|t,s=Math.max(0<=a?a:i-Math.abs(a),0);s<i;){if(n[s]===e)return!0;s++}return!1}}),Array.prototype.filter||(Array.prototype.filter=function(e){"use strict";if(null==this)throw new TypeError;var t=Object(this),n=t.length>>>0;if("function"!=typeof e)throw new TypeError;for(var i,a=[],s=2<=arguments.length?arguments[1]:void 0,o=0;o<n;o++){o in t&&(i=t[o],e.call(s,i,o,t)&&a.push(i))}return a}),Array.prototype.shuffle=function(){for(var e=this.length,t=e;t--;){var n=parseInt(Math.random()*e),i=this[t];this[t]=this[n],this[n]=i}return this},Array.prototype.diff=function(t){return this.filter(function(e){return t.indexOf(e)<0})},String.prototype.capitalize=function(){return this[0].toUpperCase()+this.slice(1)},String.prototype.betweenLength=function(e,t){return this.length.betweenNum(e,t)},String.prototype.betweenNum=function(e,t){var n=+this;return!isNaN(n)&&n.betweenNum(e,t)},Number.prototype.betweenNum=function(e,t){return e<=this&&this<=t},String.prototype.replaceAll=function(e,t){return this.replace(new RegExp(e,"g"),t)},HTMLElement.prototype.remove=HTMLElement.prototype.remove||function(){this.parentNode&&this.parentNode.removeChild(this)},Object.merge=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e};var cookie={set:function(e,t,n,i,a){var s;i=void 0===a?"/":i,a=void 0===a?"":"; Domain="+a,null===t&&cookie.get(e)?document.cookie=e+"=; Path="+i+"; Expires=Thu, 01 Jan 1970 00:00:01 GMT;":(t=encodeURIComponent(t),n&&((s=new Date).setDate(s.getDate()+n),t+="; Expires="+s.toUTCString()),document.cookie=e+"="+t+"; Path="+i+a)},get:function(e){for(var t={},n="",i=document.cookie.split("; "),a=0;a<i.length;a++){var s=i[a].split("=");t[s[0]]=s[1]}return e&&(n="string"==typeof t[e]?decodeURIComponent(t[e]):""),""===n||isNaN(n)?"false"==n?n=!1:"true"==n&&(n=!0):n=+n,n},remove:function(e,t){t=void 0===t?"":"Domain="+t+";",document.cookie=e+"=; Path=/; "+t+" Expires=Thu, 01 Jan 1970 00:00:01 GMT;"},list:function(){for(var e=document.cookie.split("; "),t=[],n=0;n<e.length;n++){var i=e[n].split("=");t.push(i[0])}return t}},storage={is_present:function(){return"object"==typeof localStorage},set:function(e,t){this.is_present()?localStorage.setItem(e,t):cookie.set(e,t)},get:function(e){var t=this.is_present()?localStorage.getItem(e):cookie.get(e);return"true"===t||"false"!==t&&t},removeItem:function(e){this.is_present()?localStorage.removeItem(e):cookie.remove(e)}};function closeHeaderCouponNotify(e){$.post("/api2/user/closeCoupon",{id:e}),document.querySelector("#couponHeader").style.display="none"}function disableSelection(e,t){var n;t?($(e).bind("mousedown.disableSelection touchstart.disableSelection",function(e){$("body").addClass("prevent-selection")}),n="mouseup.disableSelection touchend.disableSelection",$(document).unbind(n).bind(n,function(e){$("body").removeClass("prevent-selection")})):$(e).bind(("onselectstart"in document.createElement("div")?"selectstart":"mousedown")+".disableSelection",function(e){e.preventDefault()})}function enableSelection(e){$(e).unbind(".disableSelection")}function recurseWrapAllEnglishWordsInElement(e,t){for(var n=0;n<e.childNodes.length;n++){var i=e.childNodes[n];if(-1!==[3,8,4,2].indexOf(i.nodeType)){if(-1===[8,4,2].indexOf(i.nodeType))for(var a=$.trim(i.nodeValue).replace(/\s+/g," ").split(" "),s=!1,o=0;o<a.length;o++){s=!1;for(var r=["\\,","\\.","\\|","\\/","\\\\"],l=[",",".","|","/","\\"],c=0;c<l.length;c++){var d=l[c];if(new RegExp("[a-z]+"+r[c]+"[a-z]+","i").test(a[o])){t+=wrapAllWords(a[o].split(d),"word-wrapper",d),s=!0;break}}s||(t+=wrapAllWords([a[o]],"word-wrapper"))}}else{var u=i.outerHTML.match(/^(<[^>]+>)/gi),p=i.outerHTML.match(/(<\/[^>]+>)$/gi);if(Array.isArray(u)&&"string"==typeof u[0]&&/^<a[^>]+>/i.test(u[0])){t+=i.outerHTML+" ";continue}t=recurseWrapAllEnglishWordsInElement(i,t+=u+" "),null!==p&&(t+=p+" ")}}return t}function wrapWords(e,t){if(e){var n=jQuery,i="",a=(a=e.innerHTML).replace(/\{(.*?)\}/g,'<span class="expression word-wrapper">$1</span>');e.innerHTML=a;for(var s=e.getElementsByClassName("expression"),o=0;o<s.length;o++)wrapWords(s[o]);s=e.getElementsByTagName("expr");for(o=0;o<s.length;o++)n(s).addClass("word-wrapper"),wrapWords(s[o]);for(o=0;o<e.childNodes.length;o++){var r=e.childNodes[o];if(3==r.nodeType)for(var l=n.trim(r.nodeValue).replace(/(\S)('\S)/g,"$1 spacetodelete$2").replace(/\s+/g," ").replace(/(\S)(-)(\S)/g,"$1 spacetodelete$2 spacetodelete$3").replace(/\s+/g," ").split(" "),c=0;c<l.length;c++){var d,u="",p="",h="";/^(?:a|an|the|[^a-z0-9\u00C0-\u017F]+)$/i.test(l[c])?(/^[^a-z0-9\u00C0-\u017F]$/i.test(l[c])&&(i=n.trim(i)),i+=" "+l[c]+" "):(/[^a-z0-9\u00C0-\u017F]$/i.test(l[c])&&(p=(d=l[c].match(/([a-z0-9\u00C0-\u017F\-\—\_\.\:'@]+?)([^a-z0-9\u00C0-\u017F]+)$/i))[1],h=d[2]),/^[^a-z0-9\u00C0-\u017F]/i.test(l[c])&&(p=(u=(d=l[c].match(/^([^a-z0-9\u00C0-\u017F]+)([a-z0-9\u00C0-\u017F\-\—\_\.\:']+)/i))[1])?d[2]:p),""==p&&(p=l[c]),i+=u+"<span class=word-wrapper"+(t?" "+t:"")+">"+p+"</span>"+h+" ")}else i+=r.outerHTML+" "}i=n.trim(i).replace(/\s(<span[^>]*?>)spacetodelete/g,"$1").replace(/\s+/g," ").replace(/ ([\.\,\!\?])/g,"$1").replace(/spacetodelete/g,"").replace(/ <span class=word-wrapper><\/span>/g,""),e.innerHTML=i}}function wrapAllWords(e,t,n){for(var i="",a=[],s=0;s<e.length;s++){var o="",r="",l="";/^(?:a|an|the|[^a-z0-9]+)$/i.test(e[s])&&void 0===n?i+=e[s]+" ":(/([a-zA-Z0-9]+)/i.test(e[s])&&null!==(a=e[s].match(/^([^a-zA-Z\s']?)([a-zA-Z\-']+)([^a-zA-Z\s']?)$/))&&(o=void 0!==a[1]?a[1]:"",r=a[2],l=void 0!==a[3]?a[3]:""),""==r&&(r=e[s]),i+=""==e[s]?" ":o+'<span class="'+t+'">'+r+"</span>"+l+" ",void 0!==n&&0<=s&&s!==e.length-1&&(i=i.trim()+n))}return i+" "}function wrapWordsI(e,t){if(e){t=void 0===t?t="word-wrapper":t;for(var n="",i=0,a=e.childNodes.length;i<a;i++){var s=e.childNodes[i];3==s.nodeType?n+=wrapAllWords($.trim(s.nodeValue).replace(/\s+/g," ").split(" "),t):n+=s.outerHTML+" "}n=$.trim(n).replace(/\s+/g," ").replace(/ ([\.,!\?])/g,"$1"),e.innerHTML=n}}function unwrapWords(e){var t=(t=e.innerHTML).replace(/<span class=word-wrapper>([^<]+?)<\/span>/g,"$1");e.innerHTML=t}function findPos(e){var t={left:0,top:0};if(e.offsetParent)for(;t.left+=e.offsetLeft,t.top+=e.offsetTop,e=e.offsetParent;);return t}function animate(t,e,n,i,a){if(t){n=n||500,i=i||"ease",animate._callback=a;var s=browser.supports.transition;if(s){var o=!0===s?"":s,r=!0===s?"":o.charAt(1).toUpperCase()+o.replace(/\-/g,"").slice(1),l=r?r+"Transition":"transition",c="";for(var d in e){var u=d;"string"==typeof browser.supports(d)&&(u=browser.supports(d)+d),u=u.replace(/([a-z])([A-Z])/,function(e,t,n){return t+"-"+n.toLowerCase()}),c+=u+" "+n+"ms "+i+", "}c=c.slice(0,-2),t.style[l]=c;var p="transitionend";function h(e){f(),browser.ie&&!a&&(a=animate._callback),a&&a.call(t,e)}function f(){t.removeEventListener(p,h,!1),t.style[l].replace(/\s0s(,|$)/g,"$1")==c&&(t.style[l]="")}!0!==s&&(p+=" webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd"),t.addEventListener(p,h,!1),animate._listeners=animate._listeners||[],animate._listeners.push({element:t,stop:f})}for(var d in e){var m,u=d;d in t.style||(m=browser.supports(d))&&"string"==typeof m&&(u=m.charAt(1).toUpperCase()+m.replace(/\-/g,"").slice(1)+d.charAt(0).toUpperCase()+d.slice(1));var v=isNaN(e[d])||"opacity"==d?e[d]:e[d]+"px";t.style[u]=v}s||(browser.ie&&!a&&(a=animate._callback),a&&a.call(t))}}function Scrollbar(e,r,t){var l=this;this.native=t,this.scroll_content=e,!1!==t&&/ewebkit/i.test(navigator.userAgent)?e.style.overflow="auto":(this.handle=document.createElement("div"),this.handle.className="scrollbar-handle",this.scrollbar=document.createElement("div"),this.scrollbar.id=r,this.scrollbar.className="scrollbar",this.scrollbar.appendChild(this.handle),$(this.scrollbar).insertBefore(this.scroll_content),this.update(),setTimeout(function(){l.update()},0),$(document).bind("mousedown."+r+" touchstart."+r,function(e){var t,n,i=$(e.target).is(l.handle),a=$(e.target).is(l.scrollbar),s=e.pageY,o=$(l.handle).position().top;(i||a)&&((i||a)&&$("body").addClass("prevent-selection"),$(l.scrollbar).addClass("active"),i?$(document).bind("mousemove."+r+" touchmove."+r,function(e){var t=(e.pageY-s+o-4)/(l.scrollbar.clientHeight-8-l.handle.clientHeight)*100;t<0&&(t=0),l.setPosition(t+"%")}):(t=e.pageY-$(l.scrollbar).offset().top,n=setInterval(function(){var e=$(l.handle).position().top;t<o&&e+l.handle.clientHeight/2<t||o<t&&e+l.handle.clientHeight/2>t?clearInterval(n):l.setPosition((t<o?"-":"+")+"1.2%")},25),$(l.scrollbar).bind("mouseout touchend mouseup mousemove",function(e){("mousemove"!=e.type||e.pageY>s+20||e.pageY<s-20)&&clearInterval(n)})))}),$(document).bind("mouseup."+r+" touchend."+r,function(){$(document).unbind("mousemove."+r+" touchmove."+r),$("body").removeClass("prevent-selection"),$(l.scrollbar).removeClass("active")}),$(this.scroll_content).bind("scroll resize mouseover",function(){l.update()}),$(document).bind("mousewheel.Scrollbar"+(browser.msie?"":" wheel.Scrollbar"),function(e){for(var t=e.originalEvent.deltaY||-e.originalEvent.wheelDeltaY||-e.originalEvent.wheelDelta,n=e.target,i=e.target==l.scroll_content;n;){if(n==l.scroll_content){i=!0;break}n=n.parentNode}!i&&e.target!=l.scrollbar&&e.target!=l.handle||t<0&&0==l.scroll_content.scrollTop||0<t&&l.scroll_content.scrollTop==l.scroll_content.scrollHeight-l.scroll_content.clientHeight||(e.preventDefault(),t<0&&l.setPosition("-40",!1),0<t&&l.setPosition("+40",!1),$(l.scroll_content).trigger("mouseWheel",[t]))}))}function kineticScroll(n,t){var i,a,s,o,r,l,c,d,u,p,h=this;function f(e){return e.targetTouches&&1<=e.targetTouches.length?e.targetTouches[0].clientX:e.clientX}function m(){var e,t=Date.now(),n=t-c;c=t,e=$-l,l=$,r=.8*(200*e/(1+n))+.2*r}function v(){var e,t;u&&(e=Date.now()-c,.5<(t=-u*Math.exp(-e/y))||t<-.5?(h.scroll(p+t),requestAnimationFrame(v)):h.scroll(p))}function e(e){return k=!0,s=f(e),r=u=0,l=$,c=Date.now(),clearInterval(d),d=setInterval(m,100),e.preventDefault(),e.stopPropagation(),!1}function g(e){var t,n;return k&&(t=f(e),(2<(n=s-t)||n<-2)&&(s=t,h.scroll($+n))),e.preventDefault(),e.stopPropagation(),!1}function _(e){if(k)return k=!1,clearInterval(d),(10<r||r<-10)&&(u=.8*r,p=Math.round($+u),c=Date.now(),requestAnimationFrame(v)),e.preventDefault(),e.stopPropagation(),!1}this.scroll=function(e){$=b<e?b:e<a?a:e,n.style[o]="translateX("+-$+"px)",t&&(t.style[o]="translateX("+$*i+"px)")},void 0!==window.ontouchstart&&(n.addEventListener("touchstart",e),document.addEventListener("touchmove",g),document.addEventListener("touchend",_)),n.addEventListener("mousedown",e),document.addEventListener("mousemove",g),document.addEventListener("mouseup",_);var w=n.parentNode.scrollWidth,b=w-parseInt(getComputedStyle(n.parentNode).width,10),$=a=0,k=!1,y=325;t=document.getElementById("indicator"),i=(w-30)/b,o="transform",["webkit","Moz","O","ms"].every(function(e){var t=e+"Transform";return void 0===n.style[t]||(o=t,!1)})}function ajax(t){var e={url:location.href,method:"POST",done:function(){},fail:function(){},dataType:"json"},n=serialize((t=Object.merge(e,t)).data),i=new XMLHttpRequest;return i.open(t.method,t.url,!0),"POST"==t.method&&i.setRequestHeader("Content-type","application/x-www-form-urlencoded"),i.onreadystatechange=function(){if(4==i.readyState)if(200==i.status){var e=i.responseText;if("json"==t.dataType)try{e=JSON.parse(e)}catch(e){return console.log(e),void t.fail()}t.done(e)}else t.fail()},i.onerror=t.fail,i.send(n),i}function serialize(e,t){var n,i,a=[];for(var s in e){"function"!=typeof e[s]&&(n=t?t+"["+s+"]":s,i=e[s],a.push("object"==typeof i?serialize(i,n):encodeURIComponent(n)+"="+encodeURIComponent(i)))}return a.join("&")}function escapeHTML(e){e=String(e);var t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"};return e.replace(/[&<>'"]/g,function(e){return t[e]})}function unescapeHTML(e){e=String(e);var t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"};for(c in t)e=e.replace(new RegExp(t[c],"g"),c);return e}function update_user_meta_or_cookie(e,t,n){user.logged_in?update_user_meta(e,t):cookie.set(e,t,365,n||"/")}function update_user_meta(e,t){var n;user.logged_in&&(n={ajax_action:"ajax_update_user_meta",key:e,value:t},$.post("/",n))}function replaceUrlParam(e,t,n){var i=new RegExp("(\\?|\\&)("+e+"=).*?(&|$)"),a=n=void 0===n?window.location.href:n;return a=0<=n.search(i)?n.replace(i,"$1$2"+t+"$3"):a+(0<a.indexOf("?")?"&":"?")+e+"="+t}function getParameterByName(e,t){t=void 0===t?window.location.href:t,e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var n=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(t);return null===n?"":decodeURIComponent(n[1].replace(/\+/g," "))}function getRealKey(e,t){var n={188:"44",109:"45",190:"46",191:"47",192:"96",220:"92",222:"39",221:"93",219:"91",173:"45",187:"61",186:"59",189:"45"},i={96:"~",49:"!",50:"@",51:"#",52:"$",53:"%",54:"^",55:"&",56:"*",57:"(",48:")",45:"_",61:"+",91:"{",93:"}",92:"|",59:":",39:'"',44:"<",46:">",47:"?"};return n.hasOwnProperty(e)&&(e=n[e]),e=!t&&96<=e&&e<=105?String.fromCharCode(e-48):!t&&65<=e&&e<=90?String.fromCharCode(e+32):t&&i.hasOwnProperty(e)?i[e]:String.fromCharCode(e)}function decodeHtmlEntities(e){var t=document.createElement("textarea");return t.innerHTML=e,t.value}function isEmpty(e){if(null==e)return!0;if(0<e.length)return!1;if(0===e.length)return!0;for(var t in e)if(hasOwnProperty.call(e,t))return!1;return!0}function addLinksToText(e){var t=/([-a-zA-Z0-9@:%_\+.~#?&\/\/=]{2,256}\.[a-z]{2,4}\b(\/?[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)?)/gi;return e.match(/puzzle-english/g)?e.replace(t,'<a href="$1">$1</a>'):e.replace(t,'<a href="$1" target="_blank">$1</a>')}function startTimer(e,t,n){var i,a=e;t.text(e),window.next_episode_countdown=setInterval(function(){return--a<0?(clearInterval(window.next_episode_countdown),void(n&&n())):(parseInt(a/60,10),i=parseInt(a%60,10),void t.text(i))},1e3)}function Timer(e){var t=this;this.duration=this._duration=e.duration,this.interval={},this._isTick=!0,this._ticking=function(){return!!t._isTick&&(--t._duration<0?(clearInterval(t.interval),void(e.onTimeEnd&&e.onTimeEnd())):void(e.onTick&&e.onTick(t._duration)))},this.start=function(){this.interval=setInterval(function(){t._ticking()},1e3)},this.reset=function(){clearInterval(this.interval),this._duration=this.duration},this.stop=function(){clearInterval(this.interval)},this.addTime=function(e){this._duration+=e},this.setDuration=function(e){this._duration=0<e?e:0},this.setPause=function(e){this._isTick=!!e},this.isPause=function(){return!1===this._isTick},this.getTimeLeft=function(){return this._duration}}function likeUnlikePost(e,t,n){$.post("/",{ajax_action:"ajax_likeUnlikePost",action:t,postId:e,postType:n})}function registerUser(e){e.preventDefault();var t=$('#authForm input[name="email"]').val();0<t.length&&($('#sign_up_popup_form input[name="email"]').val(t),$('.video-carousel__link.js-tab-link[data-id="regForm"]').click(),$("#sign_up_popup button").click())}function $getPiece(e,t){t=void 0!==t;var n=$("#phrases");return!t&&n.hasClass("j-admin_mode")?n.find("li.admin[data-piece_index="+e+"]"):n.find("li:not(.admin)[data-piece_index="+e+"]")}function ucfirst(e){return String(e).charAt(0).toUpperCase()+String(e).substr(1,String(e).length-1)}function plural_ru(e,t){return t[(e=Math.abs(e))%10==1&&e%100!=11?0:2<=e%10&&e%10<=4&&(e%100<10||20<=e%100)?1:2]}function plural_en(e,t){return t[1==(e=Math.abs(e))?1:2]}function titleCase(e){for(var t=e.toLowerCase().split(" "),n=0;n<t.length;n++)t[n]=t[n].charAt(0).toUpperCase()+t[n].substring(1);return t.join(" ")}window.$&&($.fn.onlongtap=function(t,n){var i;this.on({"touchstart.onlongtap":function(e){i=setTimeout(function(){e.data=$.extend(e.data,n),t(e)},450)},"touchend.onlongtap":function(){$("body").removeClass("prevent-selection"),clearTimeout(i)}})}),animate.stop=function(e){if(animate._listeners)for(var t=0;t<animate._listeners.length;t++)animate._listeners.element==e&&animate._listeners.stop()},window.$&&($.fn.ui=function(){var e=this.add("*",this).filter(function(){var e=this.className.match(/(?:^|\s)ui-(button|radio|radio-toggle|select)(?:$|\s)/);return!!e&&(this.ui_type=e[1],!0)});if(0==e.length)return this;for(var t=0;t<e.length;t++){var n=e[t];if(n.ui_enabled)return;switch(n.ui_enabled=!0,n.ui_type){case"button":case"radio":case"checkbox":var i=p(n);break;case"radio-toggle":var a=$(n).children();a.each(function(){var e=($(this).is("input[type=radio]")?p:$)(this);e.addClass("ui-replacement"),e.click(function(){$(this).hasClass("disabled")||(a.removeClass("active"),$(this).addClass("active"))})});break;case"select":function s(e,t,n){var i=r.is("[multiple]"),a="";if(i&&$.isArray(e))for(var s=0;s<e.length;s++)a+='<option value="'+e[s]+'"></option>';else a=i&&is_ctrl_pressed?-1!=$.inArray(e,r.val())?(1<r.val().length&&$("option[value='"+e+"']",r).remove(),r.html()):r.html()+'<option value="'+e+'"></option>':'<option value="'+e+'">'+r.next().find("li.selected").text()+"</option>";if(r.html(a),i&&(e=$("option",r).map(function(){return this.value})),r.val(e).change(),t){if(c.text()==e)return;var o=n||u.filter(function(){return $(this).data("value")==e});i&&(!i||is_ctrl_pressed)||$("li",d).removeClass("selected"),i&&1<$("li.selected",d).length&&o.is(".selected")?o.removeClass("selected"):o.addClass("selected"),c.length&&c.text(r.next().find("li.selected").text())}}function o(){return r.val()}var r=$(n),i=p(n),l=r.html().replace(/<optgroup([^>]*?)\slabel=["]([^"]*?)["]([^>]*?>)/gi,'<li class="optgroup"$1$3<div class="optgroup-title">$2</div><ul>').replace(/<\/optgroup>/gi,"</ul></li>").replace(/<option([^>]*?)>([\s\S]*?)<\/option>/gi,"<li$1><span>$2</span></li>").replace(/(<li[^>]*?)selected(?:=['"].*?['"])?/gi,'$1class="selected"').replace(/(<li[^>]*?)value=/gi,"$1data-value=").replace(/\sclass="([^"]*)"([^<>]*?)\sclass="([^"]*)"/,' class="$1 $3"$2');r.after(i),l='<ul tabindex="-1">'+l+"</ul>",r.is("[data-select-type=opened], [multiple]")||(l='<div class="toggle">'+$("option:selected",r).text()+"</div>"+l),i.html(l),s(r.val());var c=$(">.toggle",i),d=r.next().children("ul"),u=$("li",d);return c.click(function(){c.add(d).toggleClass("active"),setTimeout(function(){d.css("top",c.outerHeight())},0)}),d[0].scrollHeight>d.height()&&d.addClass("has-scrollbar"),d.on("click","li:not(.optgroup)",function(){var e=$(this),o=e.attr("data-value");s(o,!0,e),$(document).unbind("keydown.selectlist").bind("keydown.selectlist",function(e){if(40==e.which||38==e.which){var t=$(".selected",d),n=t[40==e.which?"next":"prev"](),i=t.parent().parent("li.optgroup");if(i.length&&!n.length&&(n=(i=i[40==e.which?"next":"prev"]("li.optgroup")).find(" > ul > li:"+(40==e.which?"first":"last"))),!n.length||n.is(":hidden"))return;e.preventDefault(),o=n.text(),n.click();var a=n.offset().top,s=n[0].offsetTop;a+n.height()>d.offset().top+d.height()?(i.length&&i[40==e.which?"prevUntil":"nextUntil"]().each(function(){s+=$(this).outerHeight()}),d.scrollTop(s-d.height()+n.height())):a<d.offset().top&&(i.length&&i[40==e.which?"nextUntil":"prevUntil"]().map(function(){s+=$(this).outerHeight()}),d.scrollTop(s))}})}),$(document).click(function(e){var t=$(e.target).is(".ui-select")?$(e.target):$(e.target).parents(".ui-select");$(e.target).is(d)||t.length||($(document).unbind("keydown.selectlist"),c.add(d).removeClass("active")),t.length&&$(".ui-select").filter(function(){return this!=t[0]}).find(">.toggle, >ul").removeClass("active")}),r.change(),{setValue:s,getValue:o}}}function p(t){var e=$(t).parents("form"),n=$(t);function i(){$(t).hasClass("disabled")||(t.checked?("radio"==t.type&&$("input[name="+t.name+"] + .ui-replacement",e).removeClass("active"),n.addClass("active")):n.removeClass("active"))}return"DIV"!=t.tagName?(n=$('<div class="'+(t.className?t.className+" ":"")+"ui-replacement ui-replacement-"+t.type+'" data-name="'+t.name+'">'+((0===$(t).data("text")?"0":$(t).data("text"))||t.innerHTML)+"</div>"),$(t).css({position:"absolute",left:-9e4}).after(n),"SELECT"!=t.tagName&&n.bind("click change",function(e){$(t).hasClass("disabled")||("radio"==t.type&&$(t).uiCheck(),$(t)["button"==t.type||"submit"==t.type?"click":"change"]())})):n.addClass("ui-replacement"),/(^|\s)ui-button($|\s)/.test(t.className)||($(t).change(i),i()),n}return this}),window.$&&($.fn.uiCheck=function(e){function t(e){var t,n=$(e);n.hasClass("disabled")||(n.next(),n.is(":radio")&&(t=n.parents("fieldset").length?n.parents("fieldset"):n.parents("form"),$("input:radio[name="+e.name+"]",t).attr("checked",!1).prop("checked",!1),n.attr("checked",!0).prop("checked",!0)))}return 1<this.length?this.each(function(){t(this)}):t(this[0]),this}),window.$&&($.fn.hint=function(m){if(0==this.length)return this;m=$.extend({},{delay:700,speed:120,position:"top"},m);for(var e=0;e<this.length;e++)this[e].hint_original_text=this[e].hint_text=m.text,$(this[e]).hover(function(){$("#hint").remove();var e,t=this.hint_text;t instanceof Array&&(void 0===t[e=$(this).attr("data-hint-text-index")||0]&&(e=0==e?1:0),$(this).attr("data-hint-text-index",0==e?1:0),t=t[e]);var n='<div id=hint class="hint '+m.position+(m.hint_class?" "+m.hint_class:"")+'">';m.title&&(n+="<h3 class=hint-title>"+m.title+"</h3>"),n+="<div class=hint-content>"+t+"</div>",n+="<div class=traingle></div>";var i=$(n).appendTo("body");i[0].hint_original_text=m.text,i[0].hint_text=t;var a,s,o,r=$(this).outerWidth(),l=$(this).outerHeight(),c=$(this).offset(),d=i.outerWidth(),u=i.outerHeight(),p={};switch(m.position){case"top":p.top=c.top-u-9,p.left=c.left+r/2-d/2;break;case"left":p.top=c.top-u/2+l/2,p.left=c.left-d-9}if(m.offset)for(var h in m.offset)/^[\+\-]\=/.test(m.offset[h].toString())?p[h]+=+m.offset[h].replace("=",""):p[h]=m.offset[h];m.containment&&(s=(a=$(m.containment)).offset(),o=a.outerWidth(),p.left<s.left?p.left=s.left:p.left+d>s.left+o&&(p.left=s.left+o-d)),"top"==m.position||"bottom"==m.position?$(".traingle",i).css("left",c.left-p.left+r/2-11):$(".traingle",i).css("top",c.top-p.top+l/2-11);var f=p;f.opacity=0,setTimeout(function(){i.length&&i.css(f).animate({opacity:1},m.speed)},m.delay)},function(){$("#hint").remove()}).mousedown(function(){$("#hint").remove()}),$(document).bind("touchstart",function(){$("#hint").remove()});return this}),window.$&&($.fn.imageSwitcher=function(r){return(r=r||{}).last_index||(r.last_index=5),this.each(function(){var o;$(this).parent().hover(function(){var e=$(this).children("img:first");if(1==$(this).children("img").length)for(var t=2;t<=r.last_index;t++){var n=e[0].src.replace(/\d\.jpg$/,t+".jpg");$('<img src="'+n+'" style="left:-999em" />').insertAfter(e)}var i=$(this).children("img");e.css("z-index",1);var a=0,s=1;o=setInterval(function(){a==r.last_index-1&&(a=-1),$(i[++a]).css({left:0,zIndex:++s})},r.delay||1e3)},function(){clearInterval(o),$(this).children("img").css("z-index",0).filter(":first").css("z-index",1)})}),this}),Scrollbar.prototype.setPosition=function(e,t,n,i){var a,s,o;!1!==this.native&&/ewebkit/i.test(navigator.userAgent)?this.scroll_content.scrollTop=e:(o=s=null,a=this.scroll_content.scrollHeight-this.scroll_content.clientHeight,"string"==typeof e&&(/^[\+\-][\d\.]+$/.test(e)?(e=+e,s=this.scroll_content.scrollTop+e):/^[\d\.]+%$/.test(e)?s=a/100*(o=+e.slice(0,-1)):/^[\+\-][\d\.]+%$/.test(e)&&(o=+e.slice(0,-1),s=a/100*(this.scroll_content.scrollTop/a*100+o))),null===s&&(s=e),a<s?s=a:s<0&&(s=0),n?$(this.scroll_content).animate({scrollTop:s},n,i):this.scroll_content.scrollTop=s,!1!==t&&this.update())},Scrollbar.prototype.update=function(){var e,t,n,i,a,s,o;!1!==this.native&&/ewebkit/i.test(navigator.userAgent)||(e=this.scroll_content.scrollHeight-this.scroll_content.clientHeight,t=this.scroll_content.scrollTop/e*100||0,n=(this.scroll_content.clientHeight-8)/this.scroll_content.scrollHeight*100,(i=this.scroll_content.clientHeight/100*n)<30&&(i=30),(s=(a=this.scrollbar.clientHeight-4-i)/100*t)<4&&(s=4),a<s&&4<a&&(s=a),$(this.handle).css({top:s,height:i}),o=this.scroll_content.scrollHeight>this.scroll_content.clientHeight&&"none"!=this.scroll_content.style.display?"block":"none",this.scrollbar.style.display!=o&&("block"==(this.scrollbar.style.display=o)?($(this.scroll_content).addClass("scrollbar-visible"),$(this.scrollbar).addClass("scrollbar-visible")):($(this.scroll_content).removeClass("scrollbar-visible"),$(this.scrollbar).removeClass("scrollbar-visible"))))},"function"!=typeof String.prototype.format&&(String.prototype.format=function(){var i=arguments;return this.replace(/(\$|@)([0-9]+)/gm,function(e,t,n){return"@"==t?escapeHTML(i[n-1]):i[n-1]})}),"function"!=typeof String.prototype.if&&(String.prototype.if=function(e){return e?this.toString():""}),function(){"use strict";var e="undefined"!=typeof module&&module.exports,n="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,i=function(){for(var e,t,n=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],i=0,a=n.length,s={};i<a;i++)if((e=n[i])&&e[1]in document){for(i=0,t=e.length;i<t;i++)s[n[0][i]]=e[i];return s}return!1}(),t={request:function(e){var t=i.requestFullscreen;e=e||document.documentElement,/5\.1[\.\d]* Safari/.test(navigator.userAgent)?e[t]():e[t](n&&Element.ALLOW_KEYBOARD_INPUT)},exit:function(){document[i.exitFullscreen]()},toggle:function(e){this.isFullscreen?this.exit():this.request(e)},onchange:function(){},onerror:function(){},raw:i};i?(Object.defineProperties(t,{isFullscreen:{get:function(){return!!document[i.fullscreenElement]}},element:{enumerable:!0,get:function(){return document[i.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return!!document[i.fullscreenEnabled]}}}),document.addEventListener(i.fullscreenchange,function(e){t.onchange.call(t,e)}),document.addEventListener(i.fullscreenerror,function(e){t.onerror.call(t,e)}),e?module.exports=t:window.screenfull=t):e?module.exports=!1:window.screenfull=!1}();var labelsAlreadySend=[];function localizeGetText(e){var t=(t=e.l).replace(" ","_").toLowerCase();"gramotey"!=e.n&&"dialogs"!=e.n||(t=t.replace(/ /g,"_").toLowerCase());var n,i=void 0===e.n?"default":e.n,a=void 0===e.v?null:e.v,s="";window.site_language,window.count_label_calls;try{n=i18n[i][t]}catch(e){n=void 0}if(void 0===n)s=window.user.is_admin?(void 0===labelsAlreadySend[i]&&(labelsAlreadySend[i]=[]),-1===labelsAlreadySend[i].indexOf(t)&&(labelsAlreadySend[i].push(t),$.post("/",{ajax_action:"ajax_add_i18n_label",label:t,namespace:i,variable:a})),window.user.can_editposts?"!RELOAD PAGE!":e.v):window.user.can_editposts?"MISSING!":e.v;else{var o={type:n[1],val:n[2],label_id:n[3]};if("simple"==o.type){if((s=o.val).indexOf("##")){var r=s.match(/##([a-z0-9-_=]+)##/i);if(r)for(v=0;v<r.length;v++){var l,c,d,u=r[v],p="##"+u+"##";u.indexOf("=")&&(c=e[(l=u.split("="))[1]],(d={l:"",n:i,v:""}).v=c,u=l[0]),d.l=u;var h=localize(d);void 0!==c&&(h=c+" "+h),s=s.replace(p,h)}}}else if("plural"==o.type)var f=o.val.split("##"),s=("ru"==window.site_language?plural_ru:plural_en)(e.v,f);else if("multiple"==o.type){s=o.val;var f=o.val.split("##"),m=e.v-1;if(1<f.length)for(var v=0;v<f.length;v++)v==m&&(s=f[v])}}if(String(s).length<1&&(s=window.user.can_editposts?"MISSING!":e.v),void 0!==e.t)switch(e.t){case"first":s=ucfirst(s);break;case"small":s=s.toLowerCase();break;case"big":s=s.toUpperCase();break;case"all_first":s=titleCase(s)}return s}function localize(e){var t,n,i;if(window.user.can_editposts&&window.lang_edit_mode){t=(t=e.l).replace(" ","_").toLowerCase(),"gramotey"!=e.n&&"dialogs"!=e.n||(t=t.replace(/ /g,"_").toLowerCase()),n=void 0===e.n?"default":e.n;try{var a={type:(i=i18n[n][t])[1],val:i[2],label_id:i[0]}}catch(e){a=void 0}}var s="";return window.lang_edit_mode?void 0===a?s=localizeGetText(e):(s="<div data-label='"+a.label_id+"' class='translate-placeholder'>"+localizeGetText(e)+"</div>",s+="<span data-lang='"+window.site_language+"' data-label='"+a.label_id+"' class='translate-label'><img src='/wp-content/themes/english/images/edit.png'></span>"):s=window.user.is_admin?"<span>"+localizeGetText(e)+"</span>":localizeGetText(e),s}function $isLatinLetterPressed(e){var t=e.key;if(!e.key){if(95<e.which)return!1;t=String.fromCharCode(e.which)}return(t=t&&t.toLowerCase())&&1===t.length&&/[a-z]/i.test(t)&&!e.ctrlKey&&!e.shiftKey&&!e.altKey&&!e.metaKey}function parseQuery(e){e=e.substring(e.indexOf("?")+1).split("&");for(var t,n={},i=decodeURIComponent,a=e.length-1;0<=a;a--)n[i((t=e[a].split("="))[0])]=i(t[1]||"");return n}function highlightText(){var e=document.querySelectorAll(".j-highlight-english-word");if(e&&e.length)for(var t=0;t<e.length;t++){var n="",i=e[t];i.innerHTML=i.innerHTML.replace(/<\!--(.*?)-->/gi,""),n=recurseWrapAllEnglishWordsInElement(i,n),i.classList.contains("j-not_replace_space")||(n=n.replace(/<div[^>]*>(\s+)<\/div>/gi,"<div>&nbsp;</div>")),n=n.replace(/(\s+)<\/(em|strong|span|expr|div|p)> ([\.\,\!\?])/g,"</$2>$3"),i.innerHTML=n}$("expr").addClass("word-wrapper expression"),"function"==typeof initAfterOnLoad&&initAfterOnLoad(),document.dispatchEvent(new CustomEvent("AfterHighlightText"))}function debounce(t,e,n){return e=e||100,n=n||window,function(){return clearTimeout(t.debounceTimeout),t.debounceTimeout=setTimeout(function(){var e=Array.prototype.slice.apply(arguments);t.lastReturnVal=t.apply(n,e)},e),t.lastReturnVal}}function hideShowContentLang(e,t,n){n=void 0!==n&&n&&Array.isArray(n)?n:["ru"],site_language="undefined"==typeof site_language?"ru":site_language,t="boolean"==typeof t&&t;var i=-1!==n.indexOf(site_language);e&&0<e.length&&e[i?"show":t?"remove":"hide"]()}function doPreloader(e){var t=$("#shadow_preloader");1===e?t.length<=0&&$("body").append("<div id='shadow_preloader' class='rjs-loading background_load_ajax'></div>"):0<t.length&&t.remove()}function isStickingKeyboard(e){var t,n=!0;return void 0!==e.repeat&&(n=!e.repeat),window.event&&void 0!==window.event.repeat&&(t=!window.event.repeat,n&&!t&&(n=!1)),!1===n}function isInput(e){return!!e&&$(e).is("input, textarea, [contenteditable]")}function getEnCharFromRu(e){e="string"==typeof e?e.toLowerCase():"";var t="йцукенгшщзфывапролдячсмитьбюхъ".indexOf(e);return-1!==t?"qwertyuiopasdfghjklzxcvbnm,.[]"[t]:null}function replaceAllRusCharToEn(e){if(!e)return"";for(var t=0;t<e.length;t++){var n=getEnCharFromRu(e[t]);n&&(e=0===t?n+e.substr(1):e.substr(0,t)+n+e.substr(t+1))}return e}function sendEvent(e,t){try{return"undefined"!=typeof gtag&&gtag("event",e),"undefined"!=typeof ym&&ym(21951133,"reachGoal",e),$.post("/",{ajax_action:"ajax_log_action",action:e,value:t}),!0}catch(e){return!1}}function sendActivate(e,t,n){$.post("/api2/user/activateUser",{p1:e,p2:t,p3:n})}function setUpFlickClock(e,t,n){$("#countdown").FlipClock(e,{clockFace:"HourCounter",countdown:!0,language:t,stop:function(){location.reload()}});var i=$(n);0<$(n).length&&(i.attr("style","opacity: 0;"),setTimeout(function(){i.attr("style","")},1e3))}function setDowncounter(e,t){var n=document.getElementById("left-time-ap");if(!n)return!1;var i=parseInt(n.innerText);isNaN(i)||i<=1?void 0===t?location.reload():location.href=t:(e||(i=--i<=0?0:i,n.innerText=i),setTimeout(function(){setDowncounter(void 0,t)},1e3))}function getBrowser(){var e=navigator&&-1<navigator.userAgent.indexOf("Chrome"),t=navigator&&-1<navigator.userAgent.indexOf("MSIE"),n=navigator&&-1<navigator.userAgent.indexOf("Firefox"),i=navigator&&-1<navigator.userAgent.indexOf("Safari"),a=navigator&&-1<navigator.userAgent.toLowerCase().indexOf("op");return e&&i&&(i=!1),e&&a&&(e=!1),{is_chrome:e,is_explorer:t,is_firefox:n,is_safari:i,is_opera:a}}function setSafariClassToBody(){getBrowser().is_safari&&document.querySelector("body").classList.add("safari")}window.onload=highlightText,String.prototype.number_format=function(e){var t="$1"+(void 0!==e?e:" ");return this.replace(/(\d{1,3})(?=(?:\d{3})+$)/g,t)},Number.prototype.number_format=function(e){return this.toString().number_format(e)};var gcmServer="https://android.googleapis.com/gcm/send/";function Popup(i,a){var s,o=this;function e(e){(window.hideEvent=e).target==this&&"sign_popup"!=this.id&&o.hide(),$("body").is(".puzzle_ov_h")&&$("body").removeClass("puzzle_ov_h")}o.element=$("#"+i),this.visible=!1,this.show=function(e,t,n){o.visible||(o.element.find(".clear-on-open").empty(),(s=!1)===e?o.element.show():(o.element.fadeIn(350),1===n?$(".j-alreadyHaveAccount").trigger("click"):2===n&&$("#firstTimeHere").trigger("click")),setTimeout(function(){o.element.delay(1).queue(function(){s=+new Date,o.element.dequeue(),"sign_in"==i&&cookie.get("last_login")&&$("#sign_in_popup_form [type=password]").focus()}),o.visible=!0},1),void 0!==a&&a.onShow&&"function"==typeof a.onShow&&a.onShow(o.element)),t&&$(".sing-in-form-close").hide()},this.hide=function(e,t){if(window.hideEvent&&("sign_popup"==window.hideEvent.target.id&&window.cancelBgClose))return!1;void 0!==window.clickByPopupNum&&(window.clickByPopupNum=void 0),o.visible&&s&&200<new Date-s&&(!1===e?o.element.hide():o.element.fadeOut(350),o.element.delay(300).queue(function(){o.element.hide().dequeue(),o.element.find(".feedback-form-wrap").removeClass("success"),o.element.find(".success").hide(),o.element.find(".main_content").show(),o.element.find(".message.response-message").text("")}),o.visible=!1,t||void 0===a||"function"!=typeof a.onClose||a.onClose(o.element)),void 0!==a&&a.onHide&&"function"==typeof a.onHide&&a.onHide(o.element),$("html").hasClass("ios")&&$("body").css("position","")},o.element.find(".close").on("click",function(e){window.hideEvent=e,this.hide}).on("touchend",this.hide).html(svg_icons.close2.cloneNode(!0)),o.element.on("click",e).on("touchmove",e).on("mousewheel",function(e){"tank_invite_vk"!=i&&(e.preventDefault(),e.stopPropagation())})}function reloadPageAfterSignInOrUp(e){e.logged_in_cookie&&e.logged_in_cookie_name&&(cookie.set(e.logged_in_cookie_name,e.logged_in_cookie,365,"/"),cookie.set("last_login",e.login,365,"/")),e.redirect_to?document.location.href=e.redirect_to:document.location.reload()}function SignPopup(e){Popup.call(this,"sign_popup")}function reloadCaptcha(t,e){var n=t.find(".b-reg__captcha__img");if(e&&n.css("background-image","none"),1==n.length&&"none"==n.css("background-image")){if(t.data("loading_captcha"))return;t.data("loading_captcha","yes"),t.find("input[name=captcha]").val("").focus(),$.post(MAIN_FULL_DOMAIN+"/",{ajax_action:"ajax_get_captcha",bgcolor:n.css("background-color")},function(e){t.data("loading_captcha",null),5<e.length&&(t.find(".b-reg__captcha__reload").show(),n.css("background-image","url(data:image/png;base64,"+e+")"),t.find(".b-reg_captcha_panel").show())},"jsonp")}}function checkOnErrorCaptcha(e){if("captcha"!==e.key)return!1;var t=window.$form.find(".puzzle-modal__input-wrapper input[name=captcha]").closest(".puzzle-modal__input-wrapper");return void 0===CaptchaActions.statuses[window.$form.attr("id")]&&(CaptchaActions.statuses[window.$form.attr("id")]=!1),CaptchaActions.$blockCaptcha=window.$form.find(".j-captcha-block"),CaptchaActions.reloadCaptcha(),t.find(".puzzle-modal__error").html(101===e.error_code?localizeGetText({v:"Введите проверочный код",l:"enter_check_code",t:"first",n:"popup_signin"}):localizeGetText({v:"Проверочный код введен не правильно. Попробуйте еще раз",l:"check_code_invalid_try_again",t:"first",n:"popup_signin"})),101!==e.error_code&&t.addClass("puzzle-modal__input-wrapper_error"),setTimeout(function(){t.find(".puzzle-modal__error").html(""),t.removeClass("puzzle-modal__input-wrapper_error")},1500),t.find("input").focus(),!0}"serviceWorker"in navigator&&"https:"===location.protocol&&window.addEventListener("load",function(){navigator.serviceWorker.register("/service-worker.js")});var CaptchaActions={TYPE_REGISTRATION:"registration",TYPE_LOGIN:"login",types:["registration","login"],statuses:{},$blockCaptcha:null,init:function(){var e=this,t=$("body");t.on("load",".j-captcha-img",function(){e.showHideCaptcha(1)}),t.on("click",".j-reload-captcha",this.reloadCaptcha.bind(this)),t.on("input","input[name=captcha]",function(){$(this).val($(this).val().toUpperCase())})},getType:function(e){return this.types.includes(e)?e:this.types[0]},isExistsBlockCaptcha:function(){return null!==this.$blockCaptcha},showHideCaptcha:function(e){if(!this.isExistsBlockCaptcha())return!1;var t=this,n=this.$blockCaptcha.closest(".j-captcha-wrapper");e&&Object.keys(t.statuses).forEach(function(e){t.statuses[e]&&($("#"+e).find(".j-captcha-wrapper").hide(),t.statuses[e]=!1)}),0<n.length&&(n[e?"show":"hide"](),this.statuses[window.$form.attr("id")]=!!e)},reloadCaptcha:function(){if(!this.isExistsBlockCaptcha())return!1;this.statuses[window.$form.attr("id")]||this.showHideCaptcha(1),this.clearInput(),0===$("#j-captcha-img").length&&this.$blockCaptcha.html("<img class='j-captcha-img' src='' alt='captcha'>"),this.$blockCaptcha.find(".j-captcha-img").attr("src","/tools/captcha/getCaptcha.php?"+Math.random())},clearInput:function(){var e=this.$blockCaptcha.closest(".j-captcha-wrapper");if(0===e.length)return!1;e.find("input").val("").focus()}},NewPassForm=function(){var n=$("#reset_pass_form");function e(){n.find(".messages").empty()}function r(e,t){n.find(".messages").empty().append($('<div class="message" />').html(e).toggleClass("success",!t).toggleClass("error",!!t))}n.on("submit",function(e){e.preventDefault();var t,n=$(this),i=n.find("input[name=pass1]").val(),a=n.find("input[name=pass2]").val(),s=n.find("input[name=key]").val(),o=n.find("input[name=login]").val();i==a?i&&a?(n.find("button").prop("disabled",!0),t=n.find("input[name=captcha]"),window.$form=n,$.post("/",{ajax_call:"reset_password",new_password:i,key:s,login:o,captcha:0<t.length?t.val().trim():""},function(e){e.error?checkOnErrorCaptcha(e)||r(e.message,e.error):window.location=location.origin},"json").always(function(){n.find("button").prop("disabled",!1)})):r(localizeGetText({l:"pass_too_short",v:"пароль слишком короткий",t:"first",n:"pass_recovery"}),1):r(localizeGetText({l:"pass_do_not_match",v:"пароли не совпадают",t:"first",n:"pass_recovery"}),1)}),n.find("input[name=pass1]").on("input",e),n.find("input[name=pass2]").on("input",e)},RetrievePasswordForm=function(e,a){var n=$(e),s=n.find("button[type=submit]");function o(e,t){n.find(".messages").empty().append($('<div class="message" style="bottom: -10px"/>').html(e).toggleClass("success",!t).toggleClass("error",!!t)),n.find(".messages").show(),n.find("input[type=email] + .puzzle-modal__error").text(e),n.find("input[type=email]").closest(".puzzle-modal__input-wrapper").addClass("puzzle-modal__input-wrapper_error")}s.on("click",function(e){e.preventDefault();var t=$(this).closest("form"),n=t.find("input[name=user_login]").val().trim();n&&validateEmail(n)?t.submit():o(localizeGetText({v:"введён неверный email",l:"insert_not_right_email",t:"first",n:"popup_signin"}),!0)}),n.on("submit",function(e){if(e.preventDefault(),!0!==$(this).closest(".j-lostPasswordLink").is(":visible"))return!1;s.prop("disabled",!0);var t=$(this),n=(window.$form=t).find("input[name=user_login]").val(),i=t.find("input[name=captcha]");$.post(MAIN_FULL_DOMAIN+"/",{ajax_action:"ajax_retrieve_password",captcha:0<i.length?i.val().trim():"",user_login:n||user.login},function(e){var t;s.prop("disabled",!1),e.error?checkOnErrorCaptcha(e)||o(e.message,e.error):"popup"===a?((t=$("#resetPasswordPopup, .j-resetPasswordPopup")).find(".puzzle-modal__body").hide(),t.find(".puzzle-modal__message").html(e.message).show()):$(".page-wrapper").html('<h3 style="color:#000; width: 80%; margin: 0 auto; padding: 50px 0 300px 15px;">'+e.message+"</h3> <style> .page-wrapper {min-height: calc(100vh - 167px); } </style>")},"jsonp")}),n.find("input").on("input",function(){n.find(".messages").hide(),n.find("button[type=submit]").show(),n.find(".messages").empty()})},show_academy_next_lesson=function(){Popup.call(this,"show_academy_next_lesson")},show_modalInfo=function(){Popup.call(this,"showModalInfo")},show_friends_add=function(){Popup.call(this,"show_friends_add")},ContactPopup=function(l){var c=location.href;this.setUrl=function(e){c=location.protocol+"//"+location.hostname+e},l.onShow=function(){$(".feedback-form img.captcha").attr("src","/tools/captcha/captcha.php?aspng="+Math.random())};try{Popup.call(this,"contact_us",l)}catch(e){console.log(e)}$(".feedback-form img.captcha_reload").on("click",l.onShow),$(".feedback-form").submit(function(e){e.preventDefault();var t=this,n=$(t).closest(".feedback-form-wrap"),i=$("#user_file");$("button",t).prop("disabled",!0),n.removeClass("error success message");for(var a=new FormData,s=$(t).serialize().split("&"),o=[],r=0;r<s.length;r++)o=s[r].split("="),a.append(o[0],decodeURIComponent(o[1]));a.append("url",c),i.val()&&a.append("attachedFile",i.get(0).files[0],i.val()),$.ajax({url:"/",data:a,processData:!1,contentType:!1,type:"post",dataType:"json",success:function(e){e&&e.success?(n.addClass("success"),t.message.value=""):n.addClass("error"),e.message&&(l.onShow(),n.addClass("message").find(".message").addClass("response-message").html(e.message)),setTimeout(function(){$("button",t).prop("disabled",!1)},2e3)}})})},ChangeEmailPopup=function(){Popup.call(this,"change_email");var i=this.form=document.getElementById("change_email_form"),a=$("#change_email");i.onsubmit=function(e){e.preventDefault(),alert(2),$("button",i).prop("disabled",!0);var t=$(i).serialize();t+="&url="+encodeURIComponent(location.href),$.post("/",t,function(e){var t,n;!e||e.error?(e.message&&e.error&&(t=e.message,n=e.error,a.find(".messages").empty().append($('<div class="message" />').html(t).toggleClass("success",!n).toggleClass("error",!!n))),setTimeout(function(){$("button",i).prop("disabled",!1)},2e3)):location.reload()},"json")},a.find("input[name=email]").on("input",function(){a.find(".messages").empty()})};function setLastPageForRedirect(){var e=window.redirectToAfterLogin?window.redirectToAfterLogin:null,t=location.pathname,n=location.search,i=e||(""===t?n:t+n);return"object"==typeof cookie&&(cookie.set("redirect_to_after_auth",i),!0)}function show_sign_popup(e,t,n){window.redirectToAfterLogin=e||void 0,setLastPageForRedirect(),window.sign_popup&&window.sign_popup.show&&window.sign_popup.show(void 0,t,n),window._mfq=window._mfq||[],window._mfq.push(["newPageView","/-/virtual/registration-sn"])}function popup(e){this.visible=!1,this.element=document.getElementById(e),this.overlay_element=$("<div id="+e+'-modal class=popup-style-1-modal style="display:none" />').appendTo(document.body)[0],this.style={},this.show=function(){this.visible=!0,this.updatePos(),$(this.element).fadeIn(100),$(this.overlay_element).fadeIn(100)},this.hide=function(){this.visible=!1,$(this.element).fadeOut(100),$(this.overlay_element).fadeOut(100)},this.updatePos=function(){var e=$.extend({top:28,left:"50%"},this.style);$(this.element).css(e)}}function validateEmail(e){return/^(([^а-яё<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(e)}function sendFormResponse(e){var t=new jBox("Modal",{content:$("#puzzleLightFeedback"),closeButton:"box",addClass:"puzzle-modal",width:480,onCreated:function(){$("body").find("#movieLightFeedbackAccordeon").accordion({collapsible:!0,heightStyle:"content"})},onClose:function(){$("#movieLightFeedbackAccordeon").show(),$("#j-btn-send__issue").css("display",""),$(".puzzle-modal__success-message").remove()}});$("#movieLightFeedbackAccordeon").attr("data-pos",e),t.open()}function do_like_comment_fun(e,t,n,i){t&&t.preventDefault(),t&&t.stopPropagation(),e=$(e);var a=$(".comment-likes-id-"+n),s="dislike"==i?".like":".dislike";if(!e.hasClass("used"))return a.find("button").remove(),$.ajax({type:"POST",url:"/",data:{ajax_call:"dislike"==i?"unlike_comment":"like_comment",comment_id:n,fun:1},success:function(e){a.find(s).removeClass("used"),a.removeClass("negative neutral"),a.find("span.comment-word").addClass("hide"),a.toggleClass("m-slide_footer__like-used").parent().find(".count span").text(e.count),"dislike"==i?a.find(".dislikeText").html(localize({l:"you_voted_against",v:'вы проголосовали "Против"',t:"first",n:"comments"})):a.find(".likeText").html(localize({l:"you_liked_it",v:"вы проголосовали «За»",t:"first",n:"comments"})),a.find(".comment-word").text(""),e.count<0?(a.addClass("negative "),a.find("span.comment-word").addClass("hide")):0==e.count&&(a.removeClass("negative"),a.addClass("neutral "),a.find("span.comment-word").addClass("hide"))}})}function do_like_post(e,t,n,i){t.preventDefault(),t.stopPropagation();var a=(e=$(e)).hasClass("m-slide_footer__like-used")||e.hasClass("j-show-hide")||e.hasClass("j-unlike");return $.ajax($.extend({type:"POST",url:"/",data:{ajax_action:a?"ajax_unlike_post":"ajax_like_post",post_id:n},success:function(e){$(".j-like-btn-"+n).toggleClass("m-slide_footer__like-used").parent().find(".j-slide_likes_counter").text(e.count)},dataType:"json"},i))}function do_like_with_animate(t,e,n,i){if("A"==e.target.tagName)return!0;var a=$(".b-icon_link_block__favorite_icon");do_like_post(t,e,n,{beforeSend:function(){i||a.animate({width:0})}}).always(function(e){a.parent().parent().toggleClass("j-show-hide"),i||a.queue(function(){$(t).toggleClass("j-show-hide"),a.attr("src",a.data(e&&e.me?"liked":"unliked")).dequeue()}).animate({width:28})})}function thumbnail_slider(e){var t,n=$(e);function i(){i.t=setInterval(a,4e3)}function a(){n.children(".thumb:first").appendTo(n),n.children(".thumb").each(function(e){this.className="thumb thumb-"+e})}n.length&&(i(),n.mouseenter(function(){clearInterval(i.t)}).mouseleave(i),t="mousewheel.thumbnail_slider",browser.msie||(t+=" wheel.thumbnail_slider"),n.on(t,function(e){0<(e.originalEvent.deltaY||-e.originalEvent.wheelDeltaY||-e.originalEvent.wheelDelta)?a():(n.children(".thumb:last").prependTo(n),n.children(".thumb").each(function(e){this.className="thumb thumb-"+e})),e.preventDefault()}))}function format_price(e,t,n,i){return((i=void 0===i?0:i)?Math.round(100*e)/100:(n=void 0===n?1:n,Math.ceil(e)*n)).toString().replace(".",",")}function openPopupWindow(e){var t=void 0!==window.screenX?window.screenX:window.screenLeft,n=void 0!==window.screenY?window.screenY:window.screenTop,i=void 0!==window.outerWidth?window.outerWidth:document.body.clientWidth,a=void 0!==window.outerHeight?window.outerHeight:document.body.clientHeight-22,s=e.width,o=e.height,r="width="+s+",height="+o+",left="+parseInt(t+(i-s)/2,10)+",top="+parseInt(n+(a-o)/2.5,10);window.open(e.url,e.windowName,r)}function WordSpeakerAudio(){var l=this;l.word=null,l.speakers=[],l.speaker_index=0,l.current_speaker=null,l.translations=[],l.translations_speakers=[],l.voiceparams="",l.audio=WordSpeakerAudio.audio=WordSpeakerAudio.audio||new Audio,l.init=function(){"string"==typeof l.speakers&&(l.speakers=l.parseSpeakers(l.speakers)),"string"==typeof l.translations_speakers&&(l.translations_speakers=l.parseSpeakers(l.translations_speakers))},l.play=function(e){var t,n=l.word.toLowerCase().replace(/[^a-z0-9\']+/gi,"-"),i=e?l.getSpeaker(e):l.getSpeakerByIndex(l.speaker_index);return(i=i||l.getSpeakerByIndex(l.speaker_index=0))&&(t=STATIC_URL_PREFIX+"/words/"+i.slug+"/"+n+".mp3?"+l.voiceparams,l.audio.src!=t?l.audio.src=t:2<l.audio.readyState&&(l.audio.currentTime=0),l.beforePlay&&l.beforePlay(),l.audio.play(),l.speakers_element&&$(l.speakers_element).children().removeClass("is-active").filter("[data-id="+i.id+"]").addClass("is-active"),$("body").addClass("speaker-playing"),e||(0<l.speaker_index&&l.replay_count++,l.speaker_index<l.getEnabledSpeakers().length-1?l.speaker_index++:l.speaker_index=0),l.afterPlay()),l},l.getEnabledSpeakers=function(){for(var e=[],t=0;t<l.speakers.length;t++)l.speakers[t].enabled&&e.push(l.speakers[t]);return e},l.sortSpeakersElements=function(){for(var e=$(l.speakers_element).children(),t=0;t<l.speakers.length;t++)for(var n=0;n<e.length;n++){var i=e[n];i.dataset.id==l.speakers[t].id&&l.speakers_element.appendChild(i)}},l.getSpeakerGlobal=function(e){if(window.speakers instanceof Array)for(var t=0;t<window.speakers.length;t++){var n=window.speakers[t];if(n.id==e||n.slug==e)return n}else console.error("Дикторы не подключены. Требуется наличие массива window.speakers")},l.getSpeaker=function(e){if(!e){for(var t,n=0;n<l.speakers.length;n++)if(l.speakers[n].enabled&&(t=t||l.speakers[n],l.speakers[n].id==l.current_speaker.id))return l.speakers[n];return t||!1}for(var n=0;n<l.speakers.length;n++)if(l.speakers[n].id==e)return l.speakers[n]},l.getSpeakerByIndex=function(e,t){e%=l.speakers.length;for(var n=null,i=0,a=0;i<l.speakers.length;i++)if(l.speakers[i].enabled){if(null==n&&(n=l.speakers[i]),e==a)return l.speakers[i];a++}return void 0!==t?l.speakers[0]:n},l.replayTranslation=function(){for(var e=l.translations_speakers,t=0;t<e.length;t++)if(e[t].enabled){if(0===l.translations.length)continue;var n=l.translations[0].toLowerCase().replace(/[^a-zа-яё0-9-_]/gi,""),i=window.STATIC_URL_PREFIX+"/words/russian/"+e[t].slug+"/"+encodeURIComponent(n)+".mp3";l.audio.src=i,l.audio.play();break}},l.parseSpeakers=function(e){if(!e)return!1;if(e instanceof Array)return e;var t,n,i=[];if(-1==e.indexOf("|")&&-1!==e.indexOf(",")){t=e.split(",");for(var a=0;a<t.length;a++)(n=l.getSpeakerGlobal(t[a]))&&i.push(n)}else{t=e.split("|");for(a=0;a<t.length;a++){var s=t[a].split("="),o=s[0],r="0"!==s[1];isNaN(o)?n={slug:o,enabled:r}:(n=$.extend(!0,{},l.getSpeakerGlobal(o))).enabled=n.enabled&&r,i.push(n)}}return i},l.serializeSpeakers=function(e){for(var t="",n=0;n<e.length;n++)t+=e[n].id+"="+(e[n].enabled?"1":"0"),n!=e.length-1&&(t+="|");return t},l.afterPlay=function(){},l.beforePlay=function(){}}$(function(){var e=$("body");e.on("click",".toggle-sign-in-form",function(){"email"===$(this).data("type")?($(".email-sign-in-form-auth").hide(),$(".social-sign-in-form").show()):"social"===$(this).data("type")?($(".send-email-pass-sign-in-form").hide(),$(".email-sign-in-form-auth").hide(),$(".social-sign-in-form").show()):("without_pass"===!$(this).data("type")?$(".sign-in-form").toggle():$(".email-sign-in-form-auth").show(),$(this).hasClass("j-show-pass-screen")&&$(this).closest(".send-email-pass-sign-in-form").hide(),$(".social-sign-in-form").hide(),$(".sign-in-form").find("input.sign-in-form__input").focus(),$(".j-input-email-check").is(":hidden")&&$(".j-btn-without-pass-email").show()),window._mfq=window._mfq||[],"block"===$(".social-sign-in-form").css("display")?window._mfq.push(["newPageView","/-/virtual/registration-sn"]):window._mfq.push(["newPageView","/-/virtual/registration-mail"])}),e.on("click",".checkBox",function(){$(this).parent().find("span").hasClass("checked")||$(this).parent().find("label").hasClass("checked")?($(this).parent().find("input").removeAttr("checked","checked").removeClass("checked"),$(this).parent().find("span").removeClass("checked"),$(this).parent().find("label").removeClass("checked")):($(this).parent().find("span").addClass("checked"),$(this).parent().find("label").addClass("checked"),$(this).parent().find("input").attr("checked","checked").addClass("checked")),$.ajax({type:"POST",url:"/",data:{ajax_call:"setCategories",teacher_id:$(this).find("input").val(),action:$(this).parent().find("input").hasClass("checked")?"on":"off"}})}),$(".register-popup").on("click",function(e){e.preventDefault(),e.stopPropagation(),$.post("/",{ajax_action:"ajax_log_action",action:"mainregistration",value:$(this).data("type")},function(e){show_sign_popup()})}),e.on("click",".add_word",function(){if(!user.is_pay_words&&!user.left_word_to_add)return openItemLockPopup("words-365","trial_access");var e=$("#user_episode_words"),t=$(this).toggle().parents("li"),n=$(this).parents("li");e.append('<li class="balloon-row" data-post_id="'+n.data("post_id")+'" data-piece_index="'+n.data("piece_index")+'">'+t.html()+"</li>"),0<$(".puzzle-academy__popup").length?($(this).css("display","inline-block"),$(this).addClass("academy-word_added")):t.remove(),$("#user_episode_words_wrapper").fadeIn(),$("#recomended_words_wrapper").has("li").length||$("#recomended_words_wrapper").fadeOut(),Balloon.decrLeftCountWordToAdd(),$.post(window.HOME,{ajax_action:"ajax_dictionary_addWord",word:$(this).data("word"),post_id:post_id,post_type:media_type,piece_index:$(this).data("piece_index"),translation:$(this).data("translation"),part_of_speech:$(this).data("part_of_speech")},function(e){return void 0===e.status||e.status?void changeDictWordsCount():(alert(e.message),!1)},"json")}),e.on("click",".switcher li:not(.active)",function(){var t=$(this).index(),e=$("#"+$(this).closest(".switcher").data("box"));$(this).addClass("active").siblings("li").removeClass("active"),e.find("div.active").fadeOut(100,function(){var e=$(this).parent().children("div")[t];$(this).removeClass("active"),$(e).fadeIn(100).addClass("active")});var n=$("#phrases_example");return $(this).addClass("active").siblings("li").removeClass("active"),$(this).hasClass("g_phrases")&&0<n.length&&!$(this).data("requested")&&($(this).data("requested",1),n.addClass("loading-center"),$.post("/",{ajax_action:"ajax_getPhrasesHtml",post_id:window.post_id,ret_type:"html"},function(e){n.html(e).removeClass("loading-center"),$("#j-phrases-autoloading").data("requested",0)},"html")),!1}),e.on("click","#j-btn-send__issue",function(){var e=$(".j-issue-checker.checked"),t=$("textarea[name=issue_msg]"),n=$("body").find("#movieLightFeedbackAccordeon");n.hide();var i=document.createElement("div");i.classList.add("puzzle-modal__success-message"),i.textContent=localizeGetText({l:"your_complaint_has_been_submitted",v:"ваша жалоба отправлена",t:"first",n:"pass_recovery"}),$(this).css("display","none"),$(this).parents(".puzzle-modal__content").append(i);var a=n.attr("data-pos");(0<e.length||0<t.length)&&$.post("/",{ajax_action:"ajax_movies_addIssue",msg:t.val(),issue_key:e.data("issue_key"),post_id:window.post_id,phrase_en:$(".b-phrases_block__phrases_list_item[data-pos="+a+"] span.b-phrases_block__eng").text(),phrase_ru:$(".b-phrases_block__phrases_list_item[data-pos="+a+"] span.b-phrases_block__ru").text(),pos_index:a,ua:navigator.userAgent},function(){t.val(""),e.removeClass("checked")})})}),$(function(){var t=$(".input-promo_wrapper"),e=$("body");function n(e){return t.is(":visible")&&!t.is(e.target)&&0===t.has(e.target).length&&(t.animate({opacity:0,top:-100},200,function(){t.removeClass("active_but")}),1)}function a(){var e=$(".b-description-wrap-layout:visible");0<e.length&&$(e).each(function(){this.video_api?(this.video_api.pause(),this.video_api&&"Flash"==this.video_api.techName?$(this).css("left",-99999):$(this).hide()):$(this).hide()})}$(".j-upload-set_cover").on("click",function(e){e.stopPropagation(),e.preventDefault();var t=$("#j-upload-set_cover__input");console.log($(this).closest(".set-of-words__set_card").data("group_id")),t.data("group_id",$(this).closest(".set-of-words__set_card").data("group_id")),t.click()}),$("#j-upload-set_cover__input").on("change",function(){var e=new FormData,t=$(this).data("group_id");0!==$(this).length&&e.append("cover",$(this).get(0).files[0]),e.append("ajax_action","ajax_set_uploadCover"),e.append("group_id",t),$.ajax({url:"/",type:"post",data:e,processData:!1,contentType:!1,success:function(e){e.success?$('div[data-group_id="'+t+'"]').find("img").get(0).src=e.cover_path:alert("Error uploading file")}})}),$(".j-like-post").on("click",function(e){$(this).hasClass("is-added")?($(this).find("span").html(localize({l:"add_to_favorites",v:"добавить в избранные",t:"first"})),$(this).removeClass("is-added"),likeUnlikePost($(this).data("post_id"))):($(this).find("span").html(localize({l:"added",v:"добавлено",t:"first"})),$(this).addClass("is-added"),do_like_post(this,e,$(this).data("post_id")))}),$(".input-promo").click(function(e){n(e)||t.addClass("active_but").animate({opacity:1,top:$(this).data("top")||60},200),e.stopPropagation()}),e.on("click",".b-description-link",function(){a();var e,t=$(this).parent().next().show(),n=t[0],i=$("video",n);return i.length&&(e=i.attr("src"),n.video_api=n.video_api||videojs(i[0]),n.video_api.src()||n.video_api.src(e),n.video_api.play(),"Flash"==n.video_api.techName&&t.attr("style","display:block;")),!1}),e.on("click",function(e){n(e),$(e.target).is(".b-description-wrap-layout")||0!=$(e.target).parents(".b-description-wrap-layout").length||a();var t=$(e.target);t.hasClass("ccurrency-more")||t.parent().hasClass("currency-more")||t.hasClass("ccurrency")||0!==$(".ccurrency").has(e.target).length||$(".currency-picker-popup.opened").removeClass("opened")}),$(".global_search_wrap .input-promo-button, .description").click(function(){$(".global_search_wrap.active_but, .description.active_but").css({display:"none"}).animate({opacity:"0"},400,function(){return t.removeClass("active_but"),!1})}),$(document).on("click",".ccurrency, .currency-change",function(e){if(e.stopPropagation(),!$(this).hasClass("currency-more")){var t=$(".currency-picker-popup");if(!t.hasClass("opened")){t.addClass("opened");var n,i,a=t.width(),s=$(this).parents(".buy-products__fixed-price .cprice-row");return s.length?(n=0,i=-220,s.append(t)):($("body").append(t),n=e.pageX-a/2,i=e.pageY+25),t.css({top:i,left:n}),!1}t.removeClass("opened")}}),e.on("click",".j-confirm-email",function(){var t=$(this);$.post("/",{ajax_action:"ajax_send_email_confirm",email:$(this).data("email")},function(e){t.replaceWith($("<span class='puzzle-text_c_2f4051-darkblue puzzle-text_fz_14' />").text(localizeGetText({l:"mail_send_to",v:"письмо отправлено на",t:"first",n:"pass_recovery"})+" "+e.email))})}),e.on("click",".j-delete-email",function(){var e=user.is_admin?"":prompt(localizeGetText({l:"to_complete_action_input_pass",v:"Чтобы завершить действие, введите пароль",t:"first",n:"user_profile"})),i=$(this);$.post("/api2/user/deleteEmail",{email:i.data("email"),pass:e},function(e){var t,n;e.error?alert(e.message):(i.closest(".j-block-with_email").remove(),t=$("#settings-add_alternative_email .j-new_count_email"),n=parseInt(t.html()),t.html(isNaN(n)?1:n-1))},"json")}),e.on("click",function(e){var t=$(e.target),n=$(".self-close");t.hasClass("self-close")||0!==n.has(e.target).length||n.hide()})}),$(document).ready(function(){$(".pe_heder-menu").find("li.drop-menu > a").on("click",function(e){e.preventDefault(),$(this).hasClass("header-menu-open")?($(this).removeClass("header-menu-open"),$(this).siblings(".sub-menu").slideUp(100)):($("#header_search").removeClass("active"),$(".header-menu-open").removeClass("header-menu-open"),$(".pe_heder-menu").find(".sub-menu").slideUp(100),$(this).addClass("header-menu-open"),$(this).siblings(".sub-menu").slideDown(100))})});var ajax_request,id_comment_for_like_dislike=0;function logAmplitudeSocial(e,t){window.dataLayer=window.dataLayer||[],window.current_user&&0<window.current_user.ID&&dataLayer.push({userID:window.current_user.ID}),dataLayer.push({event:"addEvents_makeActions",event_id:"d-v1-e25",event_cat:"social",event_name:"share",event_param:e+"_"+t,social_network_type:e,content_type:t})}function openVkShare(e,t,n,i,a){a&&logAmplitudeSocial("вк",a);var s="http://vk.com/share.php?";s+="title="+encodeURIComponent(t),s+="&description="+encodeURIComponent(n),""!=i&&(s+="&image="+encodeURIComponent(i)),openPopupWindow({width:665,height:370,url:s+="&url="+encodeURIComponent(e)})}function openOkShare(e,t){t&&logAmplitudeSocial("ок",t),openPopupWindow({width:665,height:370,url:"http://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.app=1141348096&st.shareUrl="+encodeURIComponent(e)})}function openTwShare(e,t,n){n&&logAmplitudeSocial("тв",n);var i="https://twitter.com/share?";i+="url="+encodeURIComponent(e)+"&",openPopupWindow({width:665,height:370,url:i+="text="+encodeURIComponent(t)})}function openFbShare(e,t,n,i,a){a&&logAmplitudeSocial("фб",a);var s="https://www.facebook.com/dialog/feed?";s+="app_id=1463689653923306",s+="&description="+encodeURIComponent(n),s+="&display=popup",i&&(s+="&picture="+encodeURIComponent(i)),s+="&redirect_uri="+encodeURIComponent(e),openPopupWindow({width:665,height:370,url:s+="&link="+encodeURIComponent(e)})}function unSubscribe(e){$.ajax({type:"POST",url:"/",data:{ajax_action:"ajax_setUnSubscribePush",id_type:e},dataType:"json"})}function subscribe(){return"serviceWorker"in navigator?(navigator.serviceWorker.register("/service-worker.js").catch(function(e){console.dir(e)}),navigator.serviceWorker.ready.then(function(e){return e.pushManager.subscribe({userVisibleOnly:!0})}).catch(function(e){console.dir(e)})):null}function checkWebPush(){return"undefined"!=typeof ServiceWorkerRegistration&&("showNotification"in ServiceWorkerRegistration.prototype&&"undefined"!=typeof Notification?"denied"===Notification.permission?(console.dir("The user has blocked notifications."),!1):"PushManager"in window||(console.dir("Push messaging isn't supported."),!1):(console.dir("Notifications aren't supported."),!1))}function initialiseState(n){1==checkWebPush()&&navigator.serviceWorker.ready.then(function(e){e.pushManager.getSubscription().then(function(e){var t;e&&(t=e.endpoint.split(gcmServer),$.ajax({type:"POST",url:"/",data:{ajax_action:"ajax_setPushUser",key:t[1],id_type:n},dataType:"json"}),isPushEnabled=!0)}).catch(function(e){console.dir("Error during getSubscription()",e)})})}function updateBallonSortable(e){$.post("/",e,function(e){},"json")}function closeItemLockPopup(){window.itemLockPopup&&"function"==typeof window.itemLockPopup.close&&(window.itemLockPopup.close(),window.itemLockPopup=null)}function getExercise(e){var t={post:"videopuzzle",translate:"grammar",writing:"translate",ap2:"listening",fun:"fun",crossword:"crossword",duel:"duel",danetka:"danetka",exam:"exam",gramotey:"trainer",slova:"slova",pieces:"pieces",training:"training",dictionary:"dictionary",academy:"academy",phrase_training:"phrase_training","words-365":"videopuzzle"},n=window.type_puzzles||e;return t.hasOwnProperty(n)?t[n]:n}function openItemLockPopup(e,t,n,i){if(!$(".j-item-lock-new-content:first").length){if(window.itemLockPopup__IsOpen)return!1;var a="";e&&-1===e.indexOf("premium")&&!/\-[\d]+$/i.test(e)&&(e+="-365");var s,o,r={product:e,exercise:getExercise(e)};switch(exponea.track("limit_popup_click",r),exponea.track("banner",{action:"show",banner_id:"Попап достижение лимита",banner_name:"Попап достижение лимита",variant:"Контрольный вариант",device:window.user.device}),e){case"tasks-365":a=localize({l:"item_lock_popup_link_tasks",v:"к заданиям",n:"item_lock_popup"});break;case"books-365":a=localize({l:"item_lock_popup_link_books",v:"к книгам",n:"item_lock_popup"});break;case"dialogs-365":a=localize({l:"item_lock_popup_link_dialogs",v:"к диалогам",n:"item_lock_popup"});break;case"games-365":a=localize({l:"item_lock_popup_link_games",v:"к играм",n:"item_lock_popup"});break;case"words-365":a=localize({l:"item_lock_popup_link_words",v:"к словам",n:"item_lock_popup"});break;case"podcasts-365":a=localize({l:"item_lock_popup_link_podcasts",v:"к подкастам",n:"item_lock_popup"});break;case"plan-365":a=localize({l:"item_lock_popup_link_plan",v:"к личному плану",n:"item_lock_popup"})}e="?product="+e,o="trial_period"==t?(s=localize({l:"item_lock_popup_title1",v:"У вас закончился <br> пробный период",t:"first",n:"item_lock_popup"}),localize({l:"item_lock_popup_text1",v:"Ваши 7 дней пробного периода истекли. Чтобы заниматься дальше и не терять прогресс, приобретите доступ.",t:"first",n:"item_lock_popup"})):(s=localize({l:"item_lock_popup_title2",v:"У вас закончился <br> пробный доступ",t:"first",n:"item_lock_popup"}),localize({l:"item_lock_popup_text2",v:"Ваш пробный доступ закончился, чтобы заниматься дальше и не терять прогресс, приобретите доступ.",t:"first",n:"item_lock_popup"}));var l=localize({l:"item_lock_popup_link",v:"Получить доступ",t:"first",n:"item_lock_popup"});return window.itemLockPopup__IsOpen=!0,window.itemLockPopup=new jBox("Modal",{content:'<div class="item-lock-popup__wrapper puzzle_ta_center"><p class="item-lock-popup__title">'+s+'</p><p class="item-lock-popup__text">'+o+'</p><p class="item-lock-popup__link-wrapper"><a class="item-lock-popup__link" href="/buy'+e+'">'+l+" "+a+"</a></p>"+(n?'<p class="puzzle_mt_30 puzzle_mb_0"><button class="j-set-custom-event puzzle-link item-lock-popup__repeat-link ">'+n+"</button></p>":"")+"</div>",addClass:"puzzle-modal item-lock-popup",closeButton:"box",blockScroll:!0,width:615,onClose:function(){window.itemLockPopup__IsOpen=!1,exponea.track("banner",{action:"close",banner_id:"Попап достижение лимита",banner_name:"Попап достижение лимита",variant:"Контрольный вариант",device:window.user.device}),i&&i()}}),document.dispatchEvent(new CustomEvent("showPaywall")),!1}var c=$($(".j-item-lock-new-content:first")[0].outerHTML).clone();c.find(".lock-item-popup__close").remove();var d=c.attr("style","")[0].outerHTML,u="2021-03";exponea.track("banner",{action:"show",banner_id:"Попап достижение лимита",banner_name:"Попап достижение лимита",variant:"Тестовый вариант "+u,device:window.user.device}),window.itemLockPopup__IsOpen=!0,window.itemLockPopup=new jBox("Modal",{content:d,addClass:"puzzle-modal",closeButton:"box",blockScroll:!0,onClose:function(){window.itemLockPopup__IsOpen=!1,exponea.track("banner",{action:"close",banner_id:"Попап достижение лимита",banner_name:"Попап достижение лимита",variant:"Тестовый вариант "+u,device:window.user.device}),i&&i()}}),document.dispatchEvent(new CustomEvent("showPaywall"))}function showBlockText(e){document.dispatchEvent(new CustomEvent("itemLockScreen:show",{detail:{hideElements:e}}))}function hideBlockText(e){document.dispatchEvent(new CustomEvent("itemLockScreen:hide",{detail:{showElements:e}}))}function exitFromSite(e){var t=!1;return user.logged_in&&(user.is_admin||!user.is_admin&&confirm(localizeGetText({l:"are_you_realy_want_to_logout",v:"вы точно хотите выйти?",t:"first"})))&&(t=!0),t&&(location.href="/signin?action=logout"+(void 0===e?"":"&redirect_to="+e)),!1}$(document).ready(function(){$(".checkbox-line_js").on("click",function(e){e.preventDefault(),$(this).find("input").attr("checked")?($(this).find("input").removeAttr("checked"),$(this).find(".check-box__target").removeClass("check-box__target_checked")):($(this).find("input").attr("checked","checked"),$(this).find(".check-box__target").addClass("check-box__target_checked"))}),$(".feedback-form-wrap__faq__slidedown").on("click",function(){$(this).parents(".main_content").find(".feedback-form").fadeIn(0),$(this).parents(".feedback-form-wrap").find(".feedback-form-wrap__faq").fadeOut(0),$(this).fadeOut(0),$(this).parents(".feedback-form-wrap").find(".feedback-form-wrap__feedback__slidedown__wrapper").fadeIn(0)}),$(".feedback-form-wrap__feedback__slidedown__wrapper").on("click",function(){$(this).parents(".feedback-form-wrap").find(".feedback-form").fadeOut(0),$(this).fadeOut(0),$(this).parents(".feedback-form-wrap").find(".feedback-form-wrap__faq").fadeIn(0),$(this).parents(".feedback-form-wrap").find(".feedback-form-wrap__faq__slidedown").fadeIn(0)});function e(e){var t=$(this).val();validateEmail(t)?($(this).closest("div.gift-form").replaceWith(t),$(".payment_redirect_form input[name=target_user_email]").val(t),$(this).data("update")&&$.post("/",{ajax_action:"ajax_common_updateOrderTargetUser",order_id:window.order_id,product:window.tariff,email:t},null,"json")):($(this).addClass("incorrect"),$("p.gift-error").show(),$(".payment_redirect_form input[name=target_user_email]").val(""))}$(".j-target-email").on("blur",e).on("keydown keyup",function(){$("p.gift-error").hide(),$(this).removeClass("incorrect")}),$(".j-apply-gift").on("click",e),$(".cancel-gift-mode").on("click",function(e){$(".payment_redirect_form input[name=target_user_email]").val(""),$("#gift_title_wrap").hide()})}),$(document).ready(function(){var e=$("body");e.on("click",".j-checkbox-line",function(e){e.preventDefault(),$(this).find("input").attr("checked")?($(this).find("input").removeAttr("checked"),$(this).find(".check-box__target").removeClass("check-box__target_checked")):($(this).find("input").attr("checked","checked"),$(this).find(".check-box__target").addClass("check-box__target_checked"))}),e.on("click",".radio-button",function(){$(this).hasClass("is-checked")||($(this).parents(".radio-button__group").find(".radio-button").removeClass("is-checked"),$(this).addClass("is-checked"),$(this).find("input").prop("checked","true"))}),e.on("click",".puzzle-banner",function(e){$.post("/api2/banner/log_click",{bannerID:$(this).attr("data-banner-id")})}),e.on("click",".mini_banner_click",function(e){var t=cookie.get("data-small_banners-id_hidden");t?cookie.set("data-small_banners-id_hidden",t+","+$(this).attr("data-small_banners-id_hidden"),230):cookie.set("data-small_banners-id_hidden",$(this).attr("data-small_banners-id_hidden"),230),$(this).parents(".redesign-mini-banner2").css("display","none"),$(this).parents(".redesign-mini-banner").css("display","none"),$.post("/api2/banner/log_click",{bannerID:$(this).attr("data-small_banners-id_hidden"),type:"mini"})}),e.on("click",".puzzle-banner__wrapper .j-puzzle-icon_close",function(e){e.preventDefault();var t=cookie.get("data-banner-id_hidden");t?cookie.set("data-banner-id_hidden",t+","+$(this).attr("data-banner-id"),230):cookie.set("data-banner-id_hidden",$(this).attr("data-banner-id"),230),$(this).parents(".puzzle-banner__wrapper").css("display","none")}),e.on("click",".redesign-mini-banner2 .j-puzzle-icon_close",function(e){e.preventDefault();var t=cookie.get("data-small_banners-id_hidden");t?cookie.set("data-small_banners-id_hidden",t+","+$(this).attr("data-small_banners-id_hidden"),230):cookie.set("data-small_banners-id_hidden",$(this).attr("data-small_banners-id_hidden"),230),$(this).parents(".redesign-mini-banner").css("display","none"),$(this).parents(".redesign-mini-banner2").css("display","none"),$.post("/api2/banner/log_close",{bannerID:$(this).attr("data-small_banners-id_hidden"),type:"mini"})}),e.on("click",".comment-balloon",function(e){e.stopPropagation()})}),
function(){function e(){(function(e){"granted"===e&&null!==subscribe()&&subscribe().then(function(e){var t;e&&(t=e.endpoint.split(gcmServer)[1],$.post("/api2/user/save-browser-key",{platform:browser.nameFull.toLowerCase(),key:t}))}).catch(function(e){console.dir(e)})})
(function(e){console.log(e)})}var t={timeout:!1,scroll:!1,asked:!1};user.logged_in?setTimeout(e,1e3):(setTimeout(function(){t.timeout=!0,t.scroll&&e()},1e4),$(window).scroll(function(){t.scroll||$(".effectively-landing__products").offset()&&$(window).scrollTop()+100>=$(".effectively-landing__products").offset().top&&(t.scroll=!0,t.timeout&&e())}))}(),$(document).ready(function(){var e=$("body");$(".puzzle-slide-down_js").length&&$(".puzzle-slide-down_js").each(function(e,t){var n=document.getElementById($(this).data("slide"));$(n).is(":visible")||$(this).addClass("is-up")}),$(document).on("click",".puzzle-slide-down_js",function(e){e.preventDefault();var t=document.getElementById($(this).data("slide"));$(t).is(":visible")||($(this).parents(".teacher-level_wrapper").find(".teacher-level__content").slideUp(400),$(this).parents(".teacher-level_wrapper").find(".puzzle-slide-down_js").addClass("is-up"),$(t).slideDown(400),$(this).removeClass("is-up"))}),e.on("click",".j-slow-ratio__speed-change",function(){$(this).siblings(".slow-ratio__speed-range").fadeToggle(300)}),$(document).mouseup(function(e){var t=$(".j-slow-ratio__speed-range"),n=$(".j-slow-ratio__speed-change");t.is(e.target)||0!==t.has(e.target).length||n.is(e.target)||0!==n.has(e.target).length||t.fadeOut(300)}),e.on("change",".j-slowRatioRange",function(){var e=$(this).parents(".slow-ratio__speed-range").siblings(".slow-ratio__speed-change"),t=$(this).val(),n=audio.obj,i=document.documentElement.classList.contains("firefox");switch(+t){case 0:e.html(localize({l:"slowdown",v:"замедление",t:"first",n:"tasks"})+" 0.3"),n.playbackRate=i?.7:.5,$(this).parents(".slow-ratio__button").find(".play-button , .button-play-big").addClass("slowMode-js").removeClass("is-fast");break;case 1:e.html(localize({l:"slowdown",v:"замедление",t:"first",n:"tasks"})+" 0.5"),n.playbackRate=i?.8:.66,$(this).parents(".slow-ratio__button").find(".play-button , .button-play-big").addClass("slowMode-js").removeClass("is-fast");break;case 2:e.html(localize({l:"slowdown",v:"замедление",t:"first",n:"tasks"})+" 0.75"),n.playbackRate=i?.9:.75,$(this).parents(".slow-ratio__button").find(".play-button , .button-play-big").addClass("slowMode-js").removeClass("is-fast");break;case 3:e.html(localize({l:"havent_slow_phrase",v:"замедления нет",n:"tasks",t:"first"})),n.playbackRate=1,$(this).parents(".slow-ratio__button").find(".play-button , .button-play-big").removeClass("slowMode-js").removeClass("is-fast");break;case 4:e.html(localize({l:"acceleration",v:"ускорение",t:"first",n:"tasks"})+" 2x"),n.playbackRate=2,$(this).parents(".slow-ratio__button").find(".play-button , .button-play-big").addClass("slowMode-js").addClass("is-fast")}}),e.on("click",".popover--settings-video__slow-set-range-values span",function(e){var t=$(this).index(),n=document.documentElement.classList.contains("firefox"),i=document.body.classList.contains("page-listening")?".button-play-big":".play-button",a=1,s=!1,o=!1,r=localize({l:"havent_slow_phrase",v:"замедления нет",n:"tasks",t:"first"}),l=$(this).parents(".slow-ratio__button"),c=l.find(i),d=l.find(".slow-ratio__speed-change"),u=l.find(".slowRatioRange"),p=audio.obj;switch(t){case 0:o=!(s=!0),r=localize({l:"slowdown",v:"замедление",t:"first",n:"tasks"})+" 0.3",a=n?.7:.5;break;case 1:o=!(s=!0),r=localize({l:"slowdown",v:"замедление",t:"first",n:"tasks"})+" 0.5",a=n?.8:.66;break;case 2:o=!(s=!0),r=localize({l:"slowdown",v:"замедление",t:"first",n:"tasks"})+" 0.75",a=n?.9:.75;break;case 3:o=s=!1,r=localize({l:"havent_slow_phrase",v:"замедления нет",n:"tasks",t:"first"}),a=1;break;case 4:o=s=!0,r=localize({l:"acceleration",v:"ускорение",t:"first",n:"tasks"})+" 2x",a=2}u.val(t),s?c.addClass("slowMode-js"):c.removeClass("slowMode-js"),o?c.addClass("is-fast"):c.removeClass("is-fast"),d.html(r),p.playbackRate=a}),e.on("click",".j-resetSlowlyButtons_js",function(){$(".phrase-wrap_status_active").removeClass("phrase-wrap_status_active"),$(this).parents(".phrase_wrap").addClass("phrase-wrap_status_active");var e=$(this).parents("#phrases").find(".phrase_wrap:not(.phrase-wrap_status_active)");e.find(".slowMode-js").removeClass("is-fast"),e.find(".slowMode-js").removeClass("slowMode-js"),e.find(".play-button.active").removeClass("active"),e.find(".slow-ratio__speed-change").html(localize({l:"havent_slow_phrase",v:"замедления нет",n:"tasks",t:"first"})),e.find(".slowRatioRange").val("3")}),$(".top-sidebar_js_close").on("click",function(e){e.preventDefault(),cookie.set("top_sidebar_closed",1,2678400,"/"),$(this).parent().css("display","none")}),0<$(".b-lesson-plan__wrapper").length&&($(".left-sidebar").hide(),$(".puzzle-ontop").css("bottom","10px")),$(document).on("click",".vteacher__header__profile",function(e){var t=$(this).siblings(".vteacher__header__profile__menu");t.length||(t=$(this).parents(".vteacher__header-px").find(".vteacher__header__profile__menu")),$(this).hasClass("is-open")?($(this).removeClass("is-open"),t.slideUp(150)):($(this).addClass("is-open"),t.slideDown(150))}),$(document).on("click",function(e){for(var t=e.target;t!=this;){if(null===t||t.classList.contains("vteacher__header__profile__menu")||t.classList.contains("vteacher__header__profile"))return;t=t.parentNode}$(".vteacher__header__profile").removeClass("is-open"),$(".vteacher__header__profile__menu").slideUp(150)}),$(document).ready(function(){$(document).on("mouseenter",".puzzle-header__menu__user_js_hover",function(){$(this).find(".puzzle-header__popup").addClass("is-hover")}),$(document).on("mouseleave",".puzzle-header__menu__user_js_hover",function(){$(this).find(".puzzle-header__popup").removeClass("is-hover")}),$("body").on("click",".j-set-custom-event",function(){document.dispatchEvent(new CustomEvent("LockText::click_btn_continue"))})}),$(document).ready(function(){$(".puzzle-switcher_js_click").on("click",".puzzle-switcher__item:not(.is-active)",function(){var e="#"+$(this).data("content");$(this).parents(".puzzle-switcher").find(".puzzle-switcher__item").removeClass("is-active"),$(this).addClass("is-active"),$(this).parents(".puzzle-switcher__content").find(".puzzle-switcher__content-item").css("display","none"),$(e).css("display","")})}),($("html").hasClass("phone")||$("html").hasClass("iphone"))&&$(".currencies-row p").on("click",function(e){var t=$(this).parents(".currencies-row");t.find(".currency-picker").slideToggle(400),t.find(".currency").removeClass("hidden"),t.find(".currency-more").addClass("hidden")})}),document.addEventListener("itemLockScreen:show",function(e){var t,n;e.detail.hideElements&&e.detail.hideElements.forEach(function(e,t){0<$(e).length&&$(e).hide()}),$(".item-lock__screen").data("product")&&"undefined"!=typeof current_user&&(n={product:t=$(".item-lock__screen").data("product"),exercise:getExercise(t)},exponea.track("limit_screen_reached",n)),$(".item-lock__screen").show()}),document.addEventListener("itemLockScreen:hide",function(e){e.detail.showElements&&e.detail.showElements.forEach(function(e,t){0<$(e).length&&$(e).show()}),$(".item-lock__screen").hide()}),$(document).ready(function(){var e=$("body");e.on("click",".j-click-paywall-link",function(e){e&&e.preventDefault();var t=$(this).data("element")||"";exponea.track("banner",{action:"click",element:t,banner_id:"Попап достижение лимита",banner_name:"Попап достижение лимита",variant:"Тестовый вариант 2021-03",device:window.user.device}),location.href=$(this).attr("href")}),e.on("click",".j-open-paywall",function(e){e&&e.preventDefault(),document.dispatchEvent(new CustomEvent("showPaywall"))}),e.on("click",".balloon__trigger-box_js_click",function(){var e={ajax_action:"ajax_balloon_save_settings",roll_up:!0,what_block:$(this).data("type_block")};$(this).hasClass("is-open")?(e.action=0,$(this).removeClass("is-open"),$(this).siblings(".balloon__content-wrapper").slideUp(400)):(e.action=1,$(this).addClass("is-open"),$(this).siblings(".balloon__content-wrapper").slideDown(400)),updateBallonSortable(e)}),$("#user_file").on("change",function(){var e=/^(.*)(\\|\/)([^\\\/]*)$/.exec($(this).val()),t=e&&void 0!==e[3]?e[3]:"";$("#user_file-filename").text("("+t+")")}),$(".left-col_js_resize").resizable({minWidth:250,minHeight:150,maxWidth:1200,aspectRatio:!0,resize:function(e,t){var n;880<(n=t.size.width)?950<n?$(".page-video .puzzle-game .phrase").css("max-width",""):$(".page-video .puzzle-game .phrase").css("max-width",1200-n-90):$(".page-video .puzzle-game .phrase").css("max-width",1200-n-140)},start:function(){$(this).find(".video_wrap").css("min-height","150px")},stop:function(e,t){localStorage.phraseVideoWidth=t.size.width;var n=document.getElementsByClassName("phrase_video")[0];n.width=t.size.width,n.height=t.size.height}}),$(".video-carousel__item").on("click",".js-tab-link",function(){var e=$(this).data("id");"regForm"==e?$(this).parents(".modal-style-4").find(".social-auth-btn_vk .social-auth-btn__text").text("Регистрация через Вконтакте"):"authForm"==e&&$(this).parents(".modal-style-4").find(".social-auth-btn_vk .social-auth-btn__text").text("Войти через Вконтакте")});var t=$('.writing-list__item[data-piece_index="0"]').find(".writing-textarea_wrapper textarea");t.on("input",function(e){". "==t.val().slice(-3).slice(0,2)&&$(".writing-hints__error_js_show").css("display","")}),$(document).ready(function(){0<$(".dropdown").length&&($(".dropdown:not(.disabled)").click(function(){$(this).toggleClass("active"),$(this).find(".dropdown-menu").slideToggle(200),$(this).find(".dropdown-menu").scrollTop(0)}),$(".dropdown:not(.disabled)").focusout(function(){$(this).removeClass("active"),$(this).find(".dropdown-menu").slideUp(200)}),$(".dropdown:not(.disabled) .dropdown-menu li:not(.disabled)").click(function(){$(this).parents(".dropdown").find("span").text($(this).text()),$(this).parents(".dropdown").find("input").attr("value",$(this).attr("data-attr"))}))});var n,i=parseInt(storage.get("bound_danetka_anonym"));user.logged_in&&!isNaN(i)&&-1===["/plan_questions"].indexOf(location.href.split("?")[0].replace(location.origin,""))&&(n='<div class="puzzle-modal__content puzzle-text_fz_16"><div class="puzzle-text_fz_18 puzzle-text_fw_bold puzzle-text_lh_1-5 puzzle_mb_25">'+localize({l:"your_vocabulary",v:"ваш словарный запас",t:"first",n:"dictionary"})+':</div><div class="puzzle-comments__subscribe-check vocab-word vocab-test__words__element__content puzzle_va_middle puzzle_mb_30"><div class="vocab-test__words__element__main puzzle-text_fz_16 puzzle_va_middle"><span class="puzzle-text_style_black">~'+i.number_format()+" "+localize({l:"words_plural",v:i})+"</span></div></div></div>",new jBox("Modal",{content:n,addClass:"puzzle-modal",closeButton:"box",width:260,onOpen:function(){storage.removeItem("bound_danetka_anonym")}}).open())});var checkInputs={fieldSuccess:{b2b_submit:{},assistant_submit:{},assistant_submit_popup:{},assistant_right_popup:{}},valueSuccess:{b2b_submit:{},assistant_submit:{},assistant_submit_popup:{},assistant_right_popup:{}},classNameError:"error",checkField:function(e,t,n){var i=$(e),a=i.attr("name"),s=!0,o=i.val().trim();switch(a){case"email":case"email_company":case"group_emails":var r=[o];"group_emails"===a&&(r=o.split("\n")),r=r.map(function(e){return e.trim()}),s=!0;for(var l=window.countAddedValidEmails=0;l<r.length;l++){if(!validateEmail(r[l])){s=!1;break}window.countAddedValidEmails++}break;case"name":case"name_company":case"name_company_unit":s=o.betweenLength(2,255);break;case"phone":case"phone_company":o=o.replace(/[^\d]/g,""),i.data("no-insert-value")||i.val(o),s=/[\d]{5,20}$/im.test(o);break;case"pass":case"password":s=o.betweenLength(3,100);break;case"select_variant":s=0<o.toString().length;break;case"age":s=o.replace(/[^\-\d]/g,"").betweenNum(1,120);break;case"ageGroup":s=0!=o}var c=i.next();return s?(this.fieldSuccess[t][a]=1,i.removeClass(this.classNameError),c.length&&c.hasClass("redesign-input-box-text-error")&&c.remove()):(n||i.addClass(this.classNameError),this.fieldSuccess[t]&&this.fieldSuccess[t].hasOwnProperty(a)&&delete this.fieldSuccess[t][a],n||0!==c.length&&c.hasClass("redesign-input-box-text-error")||i.after('<p class="redesign-input-box-text-error puzzle_mt_5 puzzle_mb_0 puzzle_ta_left">Ошибка!</p>')),s},setIsDisableBtn:function(e,t,n){var i=$(e);if(0===i.length||!this.fieldSuccess[n])return!1;var a=t===Object.keys(this.fieldSuccess[n]).length,s=$("input[name=privacy_policy]:first");a&&0<s.length&&(a=s.prop("checked")),i[a?"removeClass":"addClass"]("redesign-button_type_disabled")}};function whichTransitionEvent(){var e,t=document.createElement("fakeelement"),n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in n)if(void 0!==t.style[e])return n[e]}function whichAnimationEvent(){var e,t=document.createElement("fakeelement"),n={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(e in n)if(void 0!==t.style[e])return n[e]}var transitionsEvents=whichTransitionEvent(),animationsEvents=whichAnimationEvent();function OnClickEvent(e,t,n,i,a){this.selector=e,this.onClick="function"==typeof a?a.bind(this):function(){},this.eventAction=t,this.eventName=n,this.num=0,this.$currentElem=null,this.additionalParams="object"==typeof i?i:{},this.prepareSelectorParams=function(){this.eventAction=this.eventAction||"",this.eventName=this.eventName?this.eventName:"click",this.selector=this.selector.split(",").map(function(e){return-1!==e.indexOf(":visible")?e:e.trim()+":visible"}).join(", ")},this.getAction=function(){return((this.num+1).toString().padStart(2,"0")+" "+this.eventAction).trim()},this.sendEvent=function(e){exponea&&exponea.track(this.eventName,Object.assign({action:this.getAction(),path:location.pathname,location:location.href,device:window.user.device,css:this.$currentElem.get(0).className||"",element_id:this.$currentElem.attr("id")||"",node_name:(this.$currentElem[0].tagName||"").toLowerCase(),xpath:e},this.additionalParams))},this.getXPathForElement=function(e){var n=function(e,t){return e?n(e.previousElementSibling,t||e.localName)+(e.localName==t):1},t=function(e){return e&&1===e.nodeType?e.id&&document.getElementById(e.id)===e?['id("'+e.id+'")']:t(e.parentNode).concat([e.localName.toLowerCase()+"["+n(e)+"]"]):[""]};return t(e).join("/")},this.setNumOfNode=function(n){$(this.selector).each(function(e,t){return!$(t).is(":visible")||this.getXPathForElement($(t).get(0))!==n&&void this.num++}.bind(this))},this.getNeededClassesForCheck=function(){return this.selector.split(",").map(function(e){var t=e.split(".");return(1===t.length?t[0]:t[t.length-1]).split(":")[0]})},this.isFindNeedleClassesInElem=function(e){for(var t=!1,n=0;n<e.length;n++)if(this.$currentElem.hasClass(e[n])){t=!0;break}return t},this.setEvent=function(){$("body").on("click",this.selector,function(e){this.onClick(e),this.$currentElem=$(e.target);var t=this.getNeededClassesForCheck();this.isFindNeedleClassesInElem(t)||(this.$currentElem=this.$currentElem.parent());var n=this.getXPathForElement(this.$currentElem.get(0));this.num=0,this.setNumOfNode(n),this.sendEvent(n)}.bind(this))},this.prepareSelectorParams(),this.setEvent()}function IsSoundPlay(){this.isAnySoundPlayingVar={},this.onPlay=function(e){this.isAnySoundPlayingVar[e.target.src]=!0},this.onEndPlay=function(e){delete this.isAnySoundPlayingVar[e.target.src]},this.setAnySoundPlayingEvents=function(){document.addEventListener("play",this.onPlay.bind(this),!0),document.addEventListener("pause",this.onEndPlay.bind(this),!0),document.addEventListener("ended",this.onEndPlay.bind(this),!0)},this.isAnySoundPlaying=function(){return 0<Object.keys(this.isAnySoundPlayingVar).length},this.setAnySoundPlayingEvents()}function getPositionAndOutsideJBoxByBrowser(){var e={x:"left",y:"center"},t="x";return browser&&browser.is_mobile&&(e.x="center",e.y="bottom",t="y"),{position:e,outside:t}}function LandingFormClass(e,t,n){this.$parent=null,this.btnSelector="",this.block="",this.totalFormFields=3,this.withClear=!1,this.options={},this.init=function(){this.btnSelector=e,this.block=t,this.options="object"==typeof n?n:{},this.withClear=!!this.options.withClear,this.setBlockToCheckInputs(),this.setTotalFormFields(),this.setEvents()},this.setTotalFormFields=function(){if(void 0===this.options.totalFormFields)return!1;var e=+this.options.totalFormFields,e=isNaN(e)||e<1?3:e;this.totalFormFields=e},this.setBlockToCheckInputs=function(){void 0===checkInputs.fieldSuccess[this.block]&&(checkInputs.fieldSuccess[this.block]={}),void 0===checkInputs.valueSuccess[this.block]&&(checkInputs.valueSuccess[this.block]={})},this.setIsDisableBtnForPhone=function(e){document.dispatchEvent(new CustomEvent("PhoneInput::setIsDisabledBtn",{detail:e}))},this.setPhoneEvents=function(){if(document.addEventListener("PhoneInput::setIsDisabledBtn",this.eventPhoneSetIsDisableBtn.bind(this)),window.landingFormInitPhone)return!1;window.landingFormInitPhone=!0,document.addEventListener("PhoneInput::correct",this.eventPhoneCorrect.bind(this)),document.addEventListener("PhoneInput::incorrect",this.eventPhoneIncorrect.bind(this))},this.eventPhoneIncorrect=function(e){var t=e.detail.block;delete checkInputs.fieldSuccess[t].phone,delete checkInputs.valueSuccess[t].phone,this.setIsDisableBtnForPhone(t)},this.eventPhoneCorrect=function(e){var t=e.detail.block;checkInputs.fieldSuccess[t].phone=1,checkInputs.valueSuccess[t].phone=e.detail.phoneFormat,this.setIsDisableBtnForPhone(t)},this.eventPhoneSetIsDisableBtn=function(e){if(e.detail!==this.block)return!1;checkInputs.setIsDisableBtn(this.getSubmitBtn(),this.totalFormFields,this.block)},this.setEvents=function(){this.setPhoneEvents(),$(document).ready(function(){this.$parent=$(this.btnSelector).closest(".j-parent-block-form"),this.$parent.on("click",this.btnSelector,this.onSubmit.bind(this)),this.$parent.find(".j-check-input").on("input",this.onChangeInput.bind(this)),this.$parent.find(".j-check-input").each(function(e,t){"phone"!==$(t).attr("name")&&checkInputs.checkField(t,this.block,!0)}.bind(this)),checkInputs.setIsDisableBtn(this.getSubmitBtn(),this.totalFormFields,this.block)}.bind(this))},this.onChangeInput=function(e){checkInputs.checkField(e.target,this.block,!0),checkInputs.setIsDisableBtn(this.getSubmitBtn(),this.totalFormFields,this.block)},this.getSubmitBtn=function(){return $(this.btnSelector)},this.getAllProps=function(){var e={screen:this.options.screen||"форма лендинга",device:window.user.device};this.options.phone&&(e=Object.assign(e,this.getPhone())),this.options.age&&(e.age=this.getAge()),this.options.ageGroup&&(e.ageGroup=this.getAgeGroup()),this.options.name&&(e=Object.assign(e,this.getName()));var t=$(this.btnSelector).closest(".j-mentor-form").find(".j-wa-check").is(":checked")?1:0;return e.whatsAppRequest=t,e},this.getIsDisableSubmit=function(e){var t=$(e.target).hasClass("redesign-button_type_disabled"),n=!(Object.keys(checkInputs.fieldSuccess[this.block]).length===this.totalFormFields)||t;return n||(e.currentTarget.disabled=!1),n},this.addIntroLesson=function(e,t){var n=window.introLessonInstance,i=n.getSelectedSlotInfo(),a={lesson_type:"standard"};n.needPassword&&(a.password=n.passwordInput.value),e.hasOwnProperty("whatsAppRequest")&&(a.whatsAppRequest=e.whatsAppRequest),a.lesson_ts=i.slot_ts,a.mentor_user_id=i.mentor.mentor_user_id,window.user.logged_in?(a.age_group=e.ageGroup,a.user_id=window.user.id,a.phone=e.phone_int,a.full_name=e.name,a.email=window.user.email):(a.age_group=e.ageGroup,a.phone=e.phone_int,a.full_name=e.name,a.email=t.currentTarget.closest(".j-mentor-form").querySelector('input[name="email"]').value),this.sendIntroLesson(a,t)},this.sendIntroLesson=function(e,i){doPreloader(1),$.get("/api2/MentorSchedule/addIntroLesson",e,function(t){var e=i.currentTarget;doPreloader(0);var n={};Object.keys(t).forEach(function(e){n[e]=t[e]}),t.error_message?n.errorMessage=t.error_message:t.error&&(n.errorMessage=t.error),e.disabled=!1,e.classList.remove("redesign-button_type_disabled"),window.dispatchEvent(new CustomEvent("selfFormSubmitted",{detail:n}))})},this.onSubmit=function(e){var t=e.currentTarget,n=t.closest(".j-mentor-form"),i=parseInt(n.dataset.needPrevent);console.log("needPrevent",i);var a=!this.getIsDisableSubmit(e);if(!a)return infoSnackbar(localizeGetText({v:"Вы еще не заполнили все поля формы!",l:"miss_some_fields_form",t:"first",n:"landing-webinar"})),!1;t.disabled="disabled",t.classList.add("redesign-button_type_disabled");var s,o=this.getAllProps();1==i?(console.log("needPrevent",i),s={detail:{form:n,isValid:a}},window.dispatchEvent(new CustomEvent("onFormSubmit",s))):user.logged_in?this.userLoggedAjax(o):this.registerUser(o);var r=e.currentTarget;window.submitBtn=r},this.revalidate=function(e){var t=e.currentTarget,n=t.closest(".j-mentor-form"),i=parseInt(n.dataset.self);if(this.getIsDisableSubmit(e))return infoSnackbar(localizeGetText({v:"Вы еще не заполнили все поля формы!",l:"miss_some_fields_form",t:"first",n:"landing-webinar"})),!1;t.disabled="disabled",t.classList.add("redesign-button_type_disabled");var a=this.getAllProps();1==i?this.addIntroLesson(a,e):user.logged_in?this.userLoggedAjax(a):this.registerUser(a);var s=e.currentTarget;window.submitBtn=s},this.isCanShowPassInput=function(e){var t=this.getPasswordInput();return e&&void 0!==e.response.isReload&&!e.response.isReload&&t.length&&!t.parent().is(":visible")},this.getPasswordInput=function(){return this.$parent.find("input.j-input-password-popup")},this.isVisiblePassword=function(){return this.getPasswordInput().parent().is(":visible")},this.setHidePassInput=function(){var e=this.getPasswordInput();e.length&&e.parent().hide()},this.setVisiblePassInput=function(){infoSnackbar(localizeGetText({v:"введите пароль",l:"insert_your_pass",t:"first",n:"landing-webinar"}));var e=this.getPasswordInput();return e.length&&e.parent().show().focus(),!1},this.getParamsToRequestRegister=function(){var e={},t=this.$parent.find("input[name=captcha]").val()||"";return t&&(e.captcha=t),this.isVisiblePassword()&&(e.password=this.getPasswordInput().val().trim()),e},this.registerUser=function(e){var t;checkPhoneInteger(e.phone,e.phone_int)?(t=this.getRequestRegister(e),doPreloader(1),$.post(this.getApi(),t,function(e){doPreloader(0),e.status?this.onSuccessStatusAjax(e,t):void 0!==e.response&&this.onErrorAjax(e)}.bind(this),"json")):errorSnackbar("Вы еще не заполнили все поля формы!")},this.onSuccessStatusAjax=function(e,t){if(this.isCanShowPassInput(e)||void 0!==t.password&&!e.response.userId)return this.setVisiblePassInput();e.response.isReload&&(user.logged_in=!0,user.id=e.response.userId,exponea&&exponea.identify({user_id:user.id})),this.successAjax()},this.onErrorAjax=function(e){if("captcha"===e.response.key)return window.$form=this.$parent,checkOnErrorCaptcha(e.response),!1;var t=e.response.errorText||e.response.error||!1,n=t||localizeGetText({l:"error__enter_new_email_and_try_again",v:"Введите другой email и попробуйте еще раз",t:"first",n:"popup_signin"});errorSnackbar(n)},this.getRequestRegister=function(e){var t=Object.assign(this.getRequestData(e),{email:this.$parent.find("input[name=email]").val().trim()});return t=Object.assign(t,this.getParamsToRequestRegister())},this.userLoggedAjax=function(e){checkPhoneInteger(e.phone,e.phone_int)?($.post("/api2/user/setUserAttr",this.getRequestData(e)),this.successAjax()):errorSnackbar("Вы еще не заполнили все поля формы!")},this.successAjax=function(){"function"==typeof this.options.onSuccess&&this.options.onSuccess()},this.clearForm=function(){if(!this.withClear)return!1;this.$parent.find("input").each(function(e,t){$(t).val("")}),this.setHidePassInput(),CaptchaActions.showHideCaptcha(0)},this.getAdditionalParamsAjax=function(){return window.getFormAdditionalParams(this)},this.getRequestData=function(e){var t,n=user.logged_in?{email:encodeURIComponent(user.email)}:{};return"object"==typeof this.getAdditionalParamsAjax()&&(n=Object.assign(n,this.getAdditionalParamsAjax())),e.phone&&(n.phone=encodeURIComponent(e.phone),n.phone_int=e.phone_int),e.age&&(n.age=e.age),e.name&&(n.nameUser=e.nameUser),e.whatsAppRequest&&(n.whatsAppRequest=e.whatsAppRequest),!this.options.checkboxChildren||(t=this.$parent.find(".j-kids-input")).length&&t.is(":checked")&&(n.children_checkbox=1),n},this.getName=function(){var e=this.$parent.find("input[name=name]").val().trim();return{name:e,nameUser:encodeURIComponent(e)}},this.getPhone=function(){var e=checkInputs.valueSuccess[this.block].phone||"";return{phone:e,phone_int:+e.toString().replace(/[^\d]+/g,"")}},this.getAge=function(){var e=+(e=this.$parent.find("input[name=age]").val().trim());return e=isNaN(e)||e<2||120<e?0:e},this.getAgeGroup=function(){return this.$parent.find("select[name=ageGroup]").val().trim()},this.getApi=function(){return void 0===this.options.api?"/api2/user/mentorRegister":this.options.api},this.init()}window.IsSoundPlayVar=new IsSoundPlay;var CustomTimer=function(e,t){this.time=t,this.container=e,this.s=null,this.m=null,this.h=null,this.d=null,this.sContainer=null,this.mContainer=null,this.hContainer=null,this.dContainer=null,this.init=function(){var e=this.time.split(":");this.d=parseInt(e[0]),this.h=parseInt(e[1]),this.m=parseInt(e[2]),this.s=parseInt(e[3]),this.initContainers()},this.initContainers=function(){this.container&&(this.dContainer=this.container.querySelector(".j-timer-d")||null,this.hContainer=this.container.querySelector(".j-timer-h")||null,this.mContainer=this.container.querySelector(".j-timer-m")||null,this.sContainer=this.container.querySelector(".j-timer-s")||null)},this.getS=function(){var e=this.s.toString();return 1==e.length&&(e="0"+e),e},this.getM=function(){var e=this.m.toString();return 1==e.length&&(e="0"+e),e},this.getH=function(){var e=this.h.toString();return 1==e.length&&(e="0"+e),e},this.getD=function(){return this.d},this.setTime=function(){this.sContainer&&(this.sContainer.innerHTML=this.getS()),this.mContainer&&(this.mContainer.innerHTML=this.getM()),this.hContainer&&(this.hContainer.innerHTML=this.getH()),this.dContainer&&(this.dContainer.innerHTML=this.getD())},this.decrementTimer=function(){this.s--,this.s<0&&(this.s=59,this.m--),this.m<0&&(this.m=59,this.h--),this.h<0&&(this.h=23,this.d--),this.d<0&&(this.d=0)},this.start=function(){var e=this;this.container.setAttribute("style",""),$(".j-timer-desc").attr("style",""),this.setTime(),setInterval(function(){e.decrementTimer(),e.setTime()},1e3)}};function checkPhoneInteger(e,t){var n=!0;return t.toString().length<10&&(n=!1),/[a-zA-Z]/g.test(e)&&(n=!1),n}function hideFooterAndHeader(e,t,n,i,a){n=void 0===n?"":n,i=void 0===i?"":i;var s=a?$("body"):showHideGeneralElements(),o=$("html").hasClass("no-touchscreen"),r=o?"mouseover":"touchstart mouseover",l=o?"click":"touchend click";""!=n&&""!=i&&($(n).on(r,function(e){$("#fake_header_show").length<=0&&o&&(s.prepend("<div id='fake_header_show' class='fake_header_full_screen'></div>"),$("#fake_header_show").slideDown(500)),$("#fake_footer_show").length<=0&&o&&(s.prepend("<div id='fake_footer_show' class='fake_footer_full_screen'></div>"),$("#fake_footer_show").slideDown(500))}).on("mouseout",function(){var e=$("#fake_header_show"),t=$("#fake_footer_show");0<e.length&&o&&e.slideUp(500,function(){e.remove()}),0<t.length&&o&&t.slideUp(500,function(){t.remove()})}).on(l,function(){return showHideGeneralElements(1),e&&e(),!1}),$(i).on(l,function(){hideFooterAndHeader(e,t,n,i)})),a||t&&t()}function showHideGeneralElements(e){e=void 0===e||0==e?0:1;for(var t=[".top-bar",".puzzle-header","footer.puzzle-footer",".b-lesson-plan__wrapper",".puzzle-banner__wrapper",".header-notify",".redesign-header",".redesign-footer"],n=0;n<t.length;n++)e?$(t[n]).show():$(t[n]).hide();var i=$("body");return e?(i.attr("style",""),i.removeClass("page-fullscreen")):(i.attr("style","margin-top: 0 !important"),i.addClass("page-fullscreen")),i}function eno_youtube_modal(e){var c=1280,d=720,u=10;this.close=function(){$("#eno_youtube_modal").fadeOut(100,function(){$(this).remove()}),$(".puzzle-ny2018__gift").length&&$(".puzzle-ny2018__gift").show(),$("body").css("overflow","visible")},this.close();var p=svg_icons.close2.cloneNode(!0);p.onclick=this.close,$("body").css("overflow","hidden");var t=$('<div id="eno_youtube_modal"/>').append(p).appendTo("body"),h=$('<div class="frame_wrap"/>').appendTo(t).html('<iframe src="//www.youtube.com/embed/'+e+'?rel=0&showinfo=0&autoplay=1" allowfullscreen/>');function n(){var e={},t=$(window).width(),n=window.innerHeight>$(window).height()?window.innerHeight:$(window).height(),i=t/100*u,a=n/100*u,s=t-2*i,o=n-2*a;e.height=o<=d?o:d,e.width=e.height*c/d,e.width>=s&&(e.width=s,e.height=e.width*d/c),e.top=o<=e.height?a:n/2-e.height/2,e.left=s<=e.width?i:t/2-e.width/2,e.width+93>=s&&e.height+93>=o&&(e.height=o-94,e.width=e.height*c/d,e.top=n/2-e.height/2,e.left=t/2-e.width/2);var r=e.top-37,l=e.left+e.width+5;e.width+93>=t&&(r=e.top-46,l=e.left+e.width-38),e.height+93>=n&&(r=e.top-46,l=e.left+e.width-38),r<5&&e.width+93<t&&(r=e.top+6,l=e.left+e.width+14),h.css(e),p.style.top=r+"px",p.style.left=l+"px"}n(),$(window).resize(n)}function setScaleProgressValue(e){var t=$(".j-scale"),n=$(".j-scale_step"),i=$(".j-scale_progress"),s=t.width()*e/100,o=20*t.width()/100,r=0;n.each(function(i){var a=$(this);a.find(".j-scale_progress").parent().each(function(){var e=$(this),t=e.width()/2,n=Math.abs(parseFloat(a.css("left")));r<t&&(r=t),n<=s&&(a.addClass("m-scale_step-reached"),0<i&&e.find(".j-scale_progress").css("left",-1*(o*i-t)))})}),i.css("width",s+r),$(i[0]).css("width",s),$(".j-scale_value").html(e)}$(document).ready(function(){var e=document.querySelectorAll(".j-timer")||null;e&&e.forEach(function(e){var t=new CustomTimer(e,window.custormTimerToTime||"");t.init(),t.start()})}),$(function(){$(".j-slide"),$(".button");var n,i,e=$(".b-slider"),a=$("#review-slider");e.length&&null!=e.superslides&&(e.superslides({animation:"slide",play:0,pagination:!1,inherit_width_from:".n-block__10 .b-slider"}),n=$(".b-slider .b-slide__item:first"),i=function(t){t=isNaN(t)?0:t,setTimeout(function(){var e=n.height("auto").height();e<n[0].scrollHeight&&(e=n[0].scrollHeight),$(window).width()<680&&(e+=100),a.animate({height:e},t)},100)},a.on("animating.slides",function(e,t){n=$(".b-slide__item",this).eq(t.upcoming_slide),i(300)}),setTimeout(i,700),$(window).resize(i)),$("html").hasClass("mobile")&&$(".b-teacher_block__name").click(function(e){$(this).hasClass("is-open")||(e.preventDefault(),$(this).addClass("is-open"))}),$(".b-footer-menu .title a").click(function(e){0==$(this).closest("li").find("ul:visible").length?e.preventDefault():e.stopPropagation()}),$(".b-footer-menu .title").click(function(e){$(this).hasClass("item-open")?($(".b-footer-menu .title").removeClass("item-open"),$(".b-footer-menu .title").next("ul").slideUp()):($(".b-footer-menu .title").removeClass("item-open"),$(".b-footer-menu .title").next("ul").slideUp(),$(this).addClass("item-open"),$(this).next("ul").slideDown())}),$(".b-level__item").on("touchstart",function(){$(".b-level__item").removeClass("level-select"),$(this).addClass("level-select")}),$("body").on("click",".j-modal__video",function(){return new eno_youtube_modal($(this).data("youtube-id")),!1}),$("#howto_video_link, #howto_video_button, #series_video_link, #series_video_button, #listening_video_link, #listening_video_button, #translates_video_link, #translates_video_button, #videopuzzle-how-to, #exercise-how-to, #listening-how-to, #pieces-how-to, #prices-page-phrases, #prices-page-dict, #prices-page-movies, .prices-page__video-info__content__video, .pe-tarif__newyear-popup-video, #welcomeTeacher, #videodict-how-to, #bagaj-slov , #ny2018").click(function(){return new eno_youtube_modal($(this).data("youtube-id")),!1});var t=$(".mobile-slider");t.length&&t.slick({infinite:!0,speed:200,fade:!0,autoplay:!0,slide:"div",cssEase:"linear"});var s=$(".j-slide"),o=$(".j-item"),r={colors:[],offsets:[],heights:[]},l=0;$(window).on("scroll",function(){s.each(function(e,t){r.colors[e]=$(t).data("color"),r.offsets[e]=$(t).offset().top,r.heights[e]=$(t).outerHeight()}),o.each(function(e,t){!function(e,t){for(var n=Math.round(e.offset().top+e.outerHeight()/2),i=0;i<r.offsets.length;i++)n>=r.offsets[i]&&n<=r.offsets[i]+r.heights[i]&&(color=r.colors[i],color?e.addClass("m-menu__item-light"):e.removeClass("m-menu__item-light"),t==l&&(o.removeClass("m-menu__item-active"),$('.j-item[data-target="'+i+'"]').addClass("m-menu__item-active"),l=i))}($(t),e)})}).trigger("scroll"),$(".j-show_user_menu").on("click",function(e){$(e.target).hasClass("logOut")||(e.stopPropagation(),$("#header_search").removeClass("active"),$(".header-menu-open").removeClass("header-menu-open"),$(".pe_heder-menu").find(".sub-menu").slideUp(100),$(".j-user_menu").stop().slideToggle(100),$(".drop-menu__mobile__main").is(":visible")&&$(".drop-menu__mobile__main").removeClass("is-open"),$(this).toggleClass("opened"))}),$(".j-show_phraze_counter_info").on("click",function(){$(".j-first_block");$(".j-phraze_counter_info").slideToggle()}),$(".j-phraze_counter_info__close").on("click",function(){var e=$(".j-first_block"),t=$(".j-phraze_counter_info");e.length&&(t.css("margin-top","0px"),e.removeClass("m-first_block-top")),t.stop().slideUp()}),$(".j-phraze_counter_footer__close").on("click",function(){$(".j-phraze_counter_footer").slideUp()}),$("body").on("click","a.b-phraze_counter_info__link",function(){$(this).parents(".j-phraze_counter_info").slideUp(),$.post("/",{ajax_action:"ajax_close_hint",service:"info25"})});var c,d=!1,u=$("#cyclepages"),p=u.parent();function h(){var e=$(".j-list-serials");e.length&&(e.removeClass("b-list-serials").addClass("b-slide_list_serials"),$(".j-serials").addClass("m-serials-slider"),c.init(),d=!0)}function f(){var e=$(".j-list-serials");e.length&&d&&(e.removeClass("b-slide_list_serials").addClass("b-list-serials"),$(".j-serials").removeClass("m-serials-slider"),u.sly(!1),d=!1)}function m(){var e,t,n;$(".j-user_menu").length&&(e=$(".j-user_menu"),(t=$(window).width()-$(".j-show_user_menu").offset().left)-(n=e.width())<=0?e.css("margin-left",t-n+"px"):e.css("margin-left","0px"))}function v(e){e.stopPropagation(),e.preventDefault();var t=$(this).closest(".j-instruction_hide").remove().data("service");$.post("/",{ajax_action:"ajax_close_hint",service:t})}"undefined"!=typeof Sly&&(c=new Sly("#cyclepages",{horizontal:1,itemNav:"basic",smart:0,activateOn:"click",mouseDragging:1,touchDragging:1,releaseSwing:1,startAt:0,scrollBy:1,pagesBar:p.find(".pages"),activatePageOn:"click",speed:300,elasticBounds:1,easing:"easeOutExpo",dragHandle:1,dynamicHandle:1,clickBar:1})),void 0!==c&&($(window).width()<=768&&!d?h():768<$(window).width()&&d&&f()),$(window).resize(function(){void 0!==c&&($(window).width()<=768&&!d?h():768<$(window).width()&&d&&f());var e=$(".j-scale_value");e.length&&setScaleProgressValue(parseFloat(e.html()))}),$(window).resize(function(){m()}),m(),$(".j-users_word").on("input",function(){var e=$(this);""===e.val()?e.removeClass("m-valentins_action__quiz_inp-typed"):e.addClass("m-valentins_action__quiz_inp-typed")}),$(".j-instruction_close").on("click",v),$(document.body).on("click",".j-instruction_close",v)}),$(document).ready(function(){var e=$(".submenu-style1");e.on("click",function(){return $(this).hasClass("active")?($(this).removeClass("active"),$(this).next("ul").removeClass("open")):(e.removeClass("active"),e.next("ul").removeClass("open"),$(this).addClass("active"),$(this).next("ul").addClass("open")),!1}),0<e.length&&$("body").on("click",function(){e.removeClass("active").next("ul").removeClass("open")})}),$(document).ready(function(){$(".puzzle-footer__menu-mobile").on("click",function(){$(this).toggleClass("is-open"),$(".puzzle-footer__menu-content").slideToggle(400)}),$("#welcomeIntroYes").on("click",function(){window.location.href="/"}),$("#welcomeIntroNo").on("click",function(){$(this).closest(".puzzle-welcome__intro").css("display","none"),cookie.set("welcome",0,30),$.ajax({type:"POST",url:"/",data:{ajax_action:"ajax_welcome",type:1}})})}),$(document).ready(function(){$(".buy-products__fixed").length&&$("html").hasClass("desktop")&&$(".redesign-footer").css("margin-bottom","103px")}),$(function(){$("body").on("focusout",".j-input-toggle-active",function(){$(this).val().trim()?$(this).parent().addClass("active"):$(this).parent().removeClass("active")}),$("body").on("click",".j-show-tab-content:not(.is-active)",function(){var e=$(this).parents(".redesign-tabs"),t=$("#"+e.data("content-id")),n=$("#"+$(this).data("content-id"));e.find(".redesign-tabs__item").removeClass("is-active"),$(this).addClass("is-active"),t.children(".redesign-tabs__content-item").css("display","none"),n.css("display","")})}),function(Se,e,Le){"use strict";var Te,Pe,je,a,s,Ie="sly",Ee=e.cancelAnimationFrame||e.cancelRequestAnimationFrame,Me=e.requestAnimationFrame,Ae=Se(document),Fe="touchstart."+Ie,Ne="mousemove."+Ie,Oe="touchmove."+Ie+" touchend."+Ie,Be=(document.implementation.hasFeature("Event.wheel","3.0")?"wheel.":"mousewheel.")+Ie,De="click."+Ie,He="mousedown."+Ie,Re=["INPUT","SELECT","BUTTON","TEXTAREA"],qe=[],Ue=Math.abs,We=Math.sqrt,Xe=Math.pow,Ve=Math.round,Ge=Math.max,Ze=Math.min,Ye=0;function Ke(r,e,i){if(!(this instanceof Ke))return new Ke(r,e,i);var n,a,v=Se.extend({},Ke.defaults,e),l=this,g=nt(r),c=Se(r),_=v.slidee?Se(v.slidee).eq(0):c.children().eq(0),w=0,b=0,$={start:0,center:0,end:0,cur:0,dest:0},k=Se(v.scrollBar).eq(0),y=k.children().eq(0),C=0,x=0,z={start:0,end:0,cur:0},S=Se(v.pagesBar),L=0,T=[],P=0,j=[],I={firstItem:0,lastItem:0,centerItem:0,activeItem:null,activePage:0},s=new st(c[0]),o=new st(_[0]),d=new st(k[0]),u=new st(y[0]),t="basic"===v.itemNav,E="forceCentered"===v.itemNav,M="centered"===v.itemNav||E,A=!g&&(t||M||E),p=v.scrollSource?Se(v.scrollSource):c,h=v.dragSource?Se(v.dragSource):c,f=Se(v.forward),m=Se(v.backward),F=Se(v.prev),N=Se(v.next),O=Se(v.prevPage),B=Se(v.nextPage),D={},H={},R={},q={},U={released:1},W={last:0,delta:0,resetTime:200},X=0,V=0,G=0,Z=0;function Y(e){var d,u,t,p,h,f,m,n,i=T.length;if($.old=Se.extend({},$),w=g?0:c[v.horizontal?"width":"height"](),C=k[v.horizontal?"width":"height"](),b=g?r:_[v.horizontal?"outerWidth":"outerHeight"](),T.length=0,$.start=0,$.end=Ge(b-w,0),A&&(j.length,P=_.children(v.itemSelector),j.length=0,d=it(_,v.horizontal?"paddingLeft":"paddingTop"),u=it(_,v.horizontal?"paddingRight":"paddingBottom"),t="border-box"===Se(P).css("boxSizing"),p="none"!==P.css("float"),h=0,f=P.length-1,b=0,P.each(function(e,t){var n,i,a,s,o,r,l,c=Se(t);c.is(":visible")&&(n=t.getBoundingClientRect(),o=(i=Ve(v.horizontal?n.width||n.right-n.left:n.height||n.bottom-n.top))+(a=it(c,v.horizontal?"marginLeft":"marginTop"))+(s=it(c,v.horizontal?"marginRight":"marginBottom")),r=!a||!s,(l={}).el=t,l.size=r?i:o,l.half=l.size/2,l.start=b+(r?a:0),l.center=l.start-Ve(w/2-l.size/2),l.end=l.start-w+l.size,e||(b+=d),b+=o,v.horizontal||p||s&&a&&0<e&&(b-=Ze(a,s)),e===f&&(l.end+=u,b+=u,h=r?s:0),j.push(l),m=l)}),_[0].style[v.horizontal?"width":"height"]=(t?b:b-d-u)+"px",b-=h,j.length?($.start=j[0][E?"center":"start"],$.end=E?m.center:w<b?m.end:$.start):$.start=$.end=0),$.center=Ve($.end/2+$.start/2),oe(),y.length&&0<C&&(v.dynamicHandle?(x=at(x=$.start===$.end?C:Ve(C*w/b),v.minHandleSize,C),y[0].style[v.horizontal?"width":"height"]=x+"px"):x=y[v.horizontal?"outerWidth":"outerHeight"](),z.end=C-x,X||Q()),!g&&0<w){var a=$.start,s="";if(A)Se.each(j,function(e,t){E?T.push(t.center):t.start+t.size>a&&a<=$.end&&(a=t.start,T.push(a),(a+=w)>$.end&&a<$.end+w&&T.push($.end))});else for(;a-w<$.end;)T.push(a),a+=w;if(S[0]&&i!==T.length){for(var o=0;o<T.length;o++)s+=v.pageBuilder.call(l,o);(L=S.html(s).children()).eq(I.activePage).addClass(v.activeClass)}}I.slideeSize=b,I.frameSize=w,I.sbSize=C,I.handleSize=x,A?(e&&null!=v.startAt&&(ae(v.startAt),l[M?"toCenter":"toStart"](v.startAt)),n=j[I.activeItem],K(M&&n?n.center:at($.dest,$.start,$.end))):e?null!=v.startAt&&K(v.startAt,1):K(at($.dest,$.start,$.end)),ze("load")}function K(e,t,n){var i,a;A&&U.released&&!n&&(i=se(e),a=e>$.start&&e<$.end,M?(a&&(e=j[i.centerItem].center),E&&v.activateMiddle&&ae(i.centerItem)):a&&(e=j[i.firstItem].start)),U.init&&U.slidee&&v.elasticBounds?e>$.end?e=$.end+(e-$.end)/6:e<$.start&&(e=$.start+(e-$.start)/6):e=at(e,$.start,$.end),R.start=+new Date,R.time=0,R.from=$.cur,R.to=e,R.delta=e-$.cur,R.tweesing=U.tweese||U.init&&!U.slidee,R.immediate=!R.tweesing&&(t||U.init&&U.slidee||!v.speed),U.tweese=0,e!==$.dest&&($.dest=e,ze("change"),X||J()),de(),oe(),re(),L[0]&&H.page!==I.activePage&&(H.page=I.activePage,L.removeClass(v.activeClass).eq(I.activePage).addClass(v.activeClass),ze("activePage",H.page))}function J(){if(l.initialized){if(!X)return X=Me(J),void(U.released&&ze("moveStart"));R.immediate?$.cur=R.to:R.tweesing?(R.tweeseDelta=R.to-$.cur,Ue(R.tweeseDelta)<.1?$.cur=R.to:$.cur+=R.tweeseDelta*(U.released?v.swingSpeed:v.syncSpeed)):(R.time=Ze(new Date-R.start,v.speed),$.cur=R.from+R.delta*Se.easing[v.easing](R.time/v.speed,R.time,0,1,v.speed)),R.to===$.cur?($.cur=R.to,U.tweese=X=0):X=Me(J),ze("move"),g||(Te?_[0].style[Te]=Pe+(v.horizontal?"translateX":"translateY")+"("+-$.cur+"px)":_[0].style[v.horizontal?"left":"top"]=-Ve($.cur)+"px"),!X&&U.released&&ze("moveEnd"),Q()}}function Q(){y.length&&(z.cur=$.start===$.end?0:((U.init&&!U.slidee?$.dest:$.cur)-$.start)/($.end-$.start)*z.end,z.cur=at(Ve(z.cur),z.start,z.end),H.hPos!==z.cur&&(H.hPos=z.cur,Te?y[0].style[Te]=Pe+(v.horizontal?"translateX":"translateY")+"("+z.cur+"px)":y[0].style[v.horizontal?"left":"top"]=z.cur+"px"))}function ee(){q.speed&&$.cur!==(0<q.speed?$.end:$.start)||l.stop(),Z=U.init?Me(ee):0,q.now=+new Date,q.pos=$.cur+(q.now-q.lastTime)/1e3*q.speed,K(U.init?q.pos:Ve(q.pos)),U.init||$.cur!==$.dest||ze("moveEnd"),q.lastTime=q.now}function te(e,t,n){if("boolean"===Je(t)&&(n=t,t=Le),t===Le)K($[e],n);else{if(M&&"center"!==e)return;var i=l.getPos(t);i&&K(i[e],n,!M)}}function ne(e){return null!=e?nt(e)?0<=e&&e<j.length?e:-1:P.index(e):-1}function ie(e){return ne(nt(e)&&e<0?e+j.length:e)}function ae(e,t){var n=ne(e);return!(!A||n<0)&&(H.active===n&&!t||(P.eq(I.activeItem).removeClass(v.activeClass),P.eq(n).addClass(v.activeClass),H.active=I.activeItem=n,re(),ze("active",n)),n)}function se(e){e=at(nt(e)?e:$.dest,$.start,$.end);var t={},n=E?0:w/2;if(!g)for(var i=0,a=T.length;i<a;i++){if(e>=$.end||i===T.length-1){t.activePage=T.length-1;break}if(e<=T[i]+n){t.activePage=i;break}}if(A){for(var s=!1,o=!1,r=!1,l=0,c=j.length;l<c;l++)if(!1===s&&e<=j[l].start+j[l].half&&(s=l),!1===r&&e<=j[l].center+j[l].half&&(r=l),l===c-1||e<=j[l].end+j[l].half){o=l;break}t.firstItem=nt(s)?s:0,t.centerItem=nt(r)?r:t.firstItem,t.lastItem=nt(o)?o:t.centerItem}return t}function oe(e){Se.extend(I,se(e))}function re(){var e,t,n,i=$.dest<=$.start,a=$.dest>=$.end,s=(i?1:0)|(a?2:0);H.slideePosState!==s&&(H.slideePosState=s,O.is("button,input")&&O.prop("disabled",i),B.is("button,input")&&B.prop("disabled",a),O.add(m)[i?"addClass":"removeClass"](v.disabledClass),B.add(f)[a?"addClass":"removeClass"](v.disabledClass)),H.fwdbwdState!==s&&U.released&&(H.fwdbwdState=s,m.is("button,input")&&m.prop("disabled",i),f.is("button,input")&&f.prop("disabled",a)),A&&null!=I.activeItem&&(n=((e=0===I.activeItem)?1:0)|((t=I.activeItem>=j.length-1)?2:0),H.itemsButtonState!==n&&(H.itemsButtonState=n,F.is("button,input")&&F.prop("disabled",e),N.is("button,input")&&N.prop("disabled",t),F[e?"addClass":"removeClass"](v.disabledClass),N[t?"addClass":"removeClass"](v.disabledClass)))}function le(e,t,n){var i,a,s;e=ie(e),t=ie(t),!(-1<e&&-1<t&&e!==t)||n&&t===e-1||!n&&t===e+1||(P.eq(e)[n?"insertAfter":"insertBefore"](j[t].el),i=e<t?e:n?t:t-1,a=t<e?e:n?t+1:t,s=t<e,null!=I.activeItem&&(e===I.activeItem?H.active=I.activeItem=n?s?t+1:t:s?t:t-1:I.activeItem>i&&I.activeItem<a&&(H.active=I.activeItem+=s?1:-1)),Y())}function ce(e,t){for(var n=0,i=D[e].length;n<i;n++)if(D[e][n]===t)return n;return-1}function de(){U.released&&!l.isPaused&&l.resume()}function ue(e){return Ve(at(e,z.start,z.end)/z.end*($.end-$.start))+$.start}function pe(){U.history[0]=U.history[1],U.history[1]=U.history[2],U.history[2]=U.history[3],U.history[3]=U.delta}function he(e){U.released=0,U.source=e,U.slidee="slidee"===e}function fe(e){var t="touchstart"===e.type,n=e.data.source,i="slidee"===n;U.init||!t&&ge(e.target)||("handle"!==n||v.dragHandle&&z.start!==z.end)&&(i&&!(t?v.touchDragging:v.mouseDragging&&e.which<2)||(t||Qe(e),he(n),U.init=0,U.$source=Se(e.target),U.touch=t,U.pointer=t?e.originalEvent.touches[0]:e,U.initX=U.pointer.pageX,U.initY=U.pointer.pageY,U.initPos=i?$.cur:z.cur,U.start=+new Date,U.time=0,U.path=0,U.delta=0,U.locked=0,U.history=[0,0,0,0],U.pathToLock=i?t?30:10:0,t&&Ae.on(Oe,me),l.pause(1),(i?_:y).addClass(v.draggedClass),ze("moveStart"),i&&(V=setInterval(pe,10))))}function me(e){if(U.released="mouseup"===e.type||"touchend"===e.type,U.pointer=U.touch?e.originalEvent[U.released?"changedTouches":"touches"][0]:e,U.pathX=U.pointer.pageX-U.initX,U.pathY=U.pointer.pageY-U.initY,U.path=We(Xe(U.pathX,2)+Xe(U.pathY,2)),U.delta=v.horizontal?U.pathX:U.pathY,U.released||!(U.path<1)){if(!U.init){if(U.path<v.dragThreshold)return U.released?ve():Le;if(!(v.horizontal?Ue(U.pathX)>Ue(U.pathY):Ue(U.pathX)<Ue(U.pathY)))return ve();U.init=1}Qe(e),!U.locked&&U.path>U.pathToLock&&U.slidee&&(U.locked=1,U.$source.on(De,et)),U.released&&(ve(),v.releaseSwing&&U.slidee&&(U.swing=(U.delta-U.history[0])/40*300,U.delta+=U.swing,U.tweese=10<Ue(U.swing))),K(U.slidee?Ve(U.initPos-U.delta):ue(U.initPos+U.delta))}}function ve(){clearInterval(V),U.released=!0,Ae.off(U.touch?Oe:Ne,me),(U.slidee?_:y).removeClass(v.draggedClass),setTimeout(function(){U.$source.off(De,et)}),$.cur===$.dest&&U.init&&ze("moveEnd"),l.resume(1),U.init=0}function ge(e){return~Se.inArray(e.nodeName,Re)||Se(e).is(v.interactive)}function _e(){l.stop(),Ae.off("mouseup",_e)}function we(e){switch(Qe(e),this){case f[0]:case m[0]:l.moveBy(f.is(this)?v.moveBy:-v.moveBy),Ae.on("mouseup",_e);break;case F[0]:l.prev();break;case N[0]:l.next();break;case O[0]:l.prevPage();break;case B[0]:l.nextPage()}}function be(e){e.originalEvent[Ie]=l;var t,n,i=+new Date;Ye+v.scrollHijack>i&&p[0]!==document&&p[0]!==window?Ye=i:v.scrollBy&&$.start!==$.end&&(n=e.originalEvent,W.curDelta=(v.horizontal?n.deltaY||n.deltaX:n.deltaY)||-n.wheelDelta,W.curDelta/=1===n.deltaMode?3:100,t=A?(je=+new Date,W.last<je-W.resetTime&&(W.delta=0),W.last=je,W.delta+=W.curDelta,Ue(W.delta)<1?W.finalDelta=0:(W.finalDelta=Ve(+W.delta),W.delta%=1),W.finalDelta):W.curDelta,(v.scrollTrap||0<t&&$.dest<$.end||t<0&&$.dest>$.start)&&Qe(e,1),l.slideBy(v.scrollBy*t))}function $e(e){v.clickBar&&e.target===k[0]&&(Qe(e),K(ue((v.horizontal?e.pageX-k.offset().left:e.pageY-k.offset().top)-x/2)))}function ke(e){if(v.keyboardNavBy)switch(e.which){case v.horizontal?37:38:Qe(e),l["pages"===v.keyboardNavBy?"prevPage":"prev"]();break;case v.horizontal?39:40:Qe(e),l["pages"===v.keyboardNavBy?"nextPage":"next"]()}}function ye(e){ge(this)?e.originalEvent[Ie+"ignore"]=!0:this.parentNode!==_[0]||e.originalEvent[Ie+"ignore"]||l.activate(this)}function Ce(){this.parentNode===S[0]&&l.activatePage(L.index(this))}function xe(e){v.pauseOnHover&&l["mouseenter"===e.type?"pause":"resume"](2)}function ze(e,t){if(D[e]){for(a=D[e].length,qe.length=0,n=0;n<a;n++)qe.push(D[e][n]);for(n=0;n<a;n++)qe[n].call(l,e,t)}}g||(r=c[0]),l.initialized=0,l.frame=r,l.slidee=_[0],l.pos=$,l.rel=I,l.items=j,l.pages=T,l.isPaused=0,l.options=v,l.dragging=U,l.reload=function(){Y()},l.getPos=function(e){if(A){var t=ne(e);return-1!==t&&j[t]}var n=_.find(e).eq(0);if(n[0]){var i=v.horizontal?n.offset().left-_.offset().left:n.offset().top-_.offset().top,a=n[v.horizontal?"outerWidth":"outerHeight"]();return{start:i,center:i-w/2+a/2,end:i-w+a,size:a}}return!1},l.moveBy=function(e){q.speed=e,!U.init&&q.speed&&$.cur!==(0<q.speed?$.end:$.start)&&(q.lastTime=+new Date,q.startPos=$.cur,he("button"),U.init=1,ze("moveStart"),Ee(Z),ee())},l.stop=function(){"button"===U.source&&(U.init=0,U.released=1)},l.prev=function(){l.activate(null==I.activeItem?0:I.activeItem-1)},l.next=function(){l.activate(null==I.activeItem?0:I.activeItem+1)},l.prevPage=function(){l.activatePage(I.activePage-1)},l.nextPage=function(){l.activatePage(I.activePage+1)},l.slideBy=function(e,t){e&&(A?l[M?"toCenter":"toStart"](at((M?I.centerItem:I.firstItem)+v.scrollBy*e,0,j.length)):K($.dest+e,t))},l.slideTo=function(e,t){K(e,t)},l.toStart=function(e,t){te("start",e,t)},l.toEnd=function(e,t){te("end",e,t)},l.toCenter=function(e,t){te("center",e,t)},l.getIndex=ne,l.activate=function(e,t){var n=ae(e);v.smart&&!1!==n&&(M?l.toCenter(n,t):n>=I.lastItem?l.toStart(n,t):n<=I.firstItem?l.toEnd(n,t):de())},l.activatePage=function(e,t){nt(e)&&K(T[at(e,0,T.length-1)],t)},l.resume=function(e){v.cycleBy&&v.cycleInterval&&("items"!==v.cycleBy||j[0]&&null!=I.activeItem)&&!(e<l.isPaused)&&(l.isPaused=0,G?G=clearTimeout(G):ze("resume"),G=setTimeout(function(){switch(ze("cycle"),v.cycleBy){case"items":l.activate(I.activeItem>=j.length-1?0:I.activeItem+1);break;case"pages":l.activatePage(I.activePage>=T.length-1?0:I.activePage+1)}},v.cycleInterval))},l.pause=function(e){e<l.isPaused||(l.isPaused=e||100,G&&(G=clearTimeout(G),ze("pause")))},l.toggle=function(){l[G?"pause":"resume"]()},l.set=function(e,t){Se.isPlainObject(e)?Se.extend(v,e):v.hasOwnProperty(e)&&(v[e]=t)},l.add=function(e,t){var n=Se(e);A?(null==t||!j[0]||t>=j.length?n.appendTo(_):j.length&&n.insertBefore(j[t].el),null!=I.activeItem&&t<=I.activeItem&&(H.active=I.activeItem+=n.length)):_.append(n),Y()},l.remove=function(e){var t,n;A?-1<(t=ie(e))&&(P.eq(t).remove(),n=t===I.activeItem,null!=I.activeItem&&t<I.activeItem&&(H.active=--I.activeItem),Y(),n&&(H.active=null,l.activate(I.activeItem))):(Se(e).remove(),Y())},l.moveAfter=function(e,t){le(e,t,1)},l.moveBefore=function(e,t){le(e,t)},l.on=function(e,t){if("object"===Je(e))for(var n in e)e.hasOwnProperty(n)&&l.on(n,e[n]);else if("function"===Je(t))for(var i=e.split(" "),a=0,s=i.length;a<s;a++)D[i[a]]=D[i[a]]||[],-1===ce(i[a],t)&&D[i[a]].push(t);else if("array"===Je(t))for(var o=0,r=t.length;o<r;o++)l.on(e,t[o])},l.one=function(t,n){l.on(t,function e(){n.apply(l,arguments),l.off(t,e)})},l.off=function(e,t){if(t instanceof Array)for(var n=0,i=t.length;n<i;n++)l.off(e,t[n]);else for(var a,s=e.split(" "),o=0,r=s.length;o<r;o++){D[s[o]]=D[s[o]]||[],null==t?D[s[o]].length=0:-1!==(a=ce(s[o],t))&&D[s[o]].splice(a,1)}},l.destroy=function(){return Ke.removeInstance(r),p.add(y).add(k).add(S).add(f).add(m).add(F).add(N).add(O).add(B).off("."+Ie),Ae.off("keydown",ke),F.add(N).add(O).add(B).removeClass(v.disabledClass),P&&null!=I.activeItem&&P.eq(I.activeItem).removeClass(v.activeClass),S.empty(),g||(c.off("."+Ie),s.restore(),o.restore(),d.restore(),u.restore(),Se.removeData(r,Ie)),j.length=T.length=0,H={},l.initialized=0,l},l.init=function(){if(!l.initialized){if(Ke.getInstance(r))throw new Error("There is already a Sly instance on this element");Ke.storeInstance(r,l),l.on(i);var e=["overflow","position"],t=["position","webkitTransform","msTransform","transform","left","top","width","height"];s.save.apply(s,e),d.save.apply(d,e),o.save.apply(o,t),u.save.apply(u,t);var n=y;return g||(n=n.add(_),c.css("overflow","hidden"),Te||"static"!==c.css("position")||c.css("position","relative")),Te?Pe&&n.css(Te,Pe):("static"===k.css("position")&&k.css("position","relative"),n.css({position:"absolute"})),v.forward&&f.on(He,we),v.backward&&m.on(He,we),v.prev&&F.on(De,we),v.next&&N.on(De,we),v.prevPage&&O.on(De,we),v.nextPage&&B.on(De,we),p.on(Be,be),k[0]&&k.on(De,$e),A&&v.activateOn&&c.on(v.activateOn+"."+Ie,"*",ye),S[0]&&v.activatePageOn&&S.on(v.activatePageOn+"."+Ie,"*",Ce),h.on(Fe,{source:"slidee"},fe),y&&y.on(Fe,{source:"handle"},fe),Ae.on("keydown",ke),g||(c.on("mouseenter."+Ie+" mouseleave."+Ie,xe),c.on("scroll."+Ie,tt)),l.initialized=1,Y(!0),v.cycleBy&&!g&&l[v.startPaused?"pause":"resume"](),l}}}function Je(e){return null==e?String(e):"object"==typeof e||"function"==typeof e?Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase()||"object":typeof e}function Qe(e,t){e.preventDefault(),t&&e.stopPropagation()}function et(e){Qe(e,1),Se(this).off(e.type,et)}function tt(){this.scrollLeft=0,this.scrollTop=0}function nt(e){return!isNaN(parseFloat(e))&&isFinite(e)}function it(e,t){return 0|Ve(String(e.css(t)).replace(/[^\-0-9.]/g,""))}function at(e,t,n){return e<t?t:n<e?n:e}function st(t){var n={style:{},save:function(){if(t&&t.nodeType){for(var e=0;e<arguments.length;e++)n.style[arguments[e]]=t.style[arguments[e]];return n}},restore:function(){if(t&&t.nodeType){for(var e in n.style)n.style.hasOwnProperty(e)&&(t.style[e]=n.style[e]);return n}}};return n}function t(e){for(var t=0,n=a.length;t<n;t++){var i=a[t]?a[t]+e.charAt(0).toUpperCase()+e.slice(1):e;if(null!=s.style[i])return i}}Ae.on(Be,function(e){var t=e.originalEvent[Ie],n=+new Date;(!t||t.options.scrollHijack<n-Ye)&&(Ye=n)}),Ke.getInstance=function(e){return Se.data(e,Ie)},Ke.storeInstance=function(e,t){return Se.data(e,Ie,t)},Ke.removeInstance=function(e){return Se.removeData(e,Ie)},function(t){Me=t.requestAnimationFrame||t.webkitRequestAnimationFrame||function(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-a)),i=setTimeout(e,n);return a=t,i};var a=(new Date).getTime();var n=t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.clearTimeout;Ee=function(e){n.call(t,e)}}(window),a=["","Webkit","Moz","ms","O"],s=document.createElement("div"),Te=t("transform"),Pe=t("perspective")?"translateZ(0) ":"",e.Sly=Ke,Se.fn.sly=function(i,a){var s,o;return Se.isPlainObject(i)||("string"!==Je(i)&&!1!==i||(s=!1===i?"destroy":i,o=Array.prototype.slice.call(arguments,1)),i={}),this.each(function(e,t){var n=Ke.getInstance(t);n||s?n&&s&&n[s]&&n[s].apply(n,o):n=new Ke(t,i,a).init()})},Ke.defaults={slidee:null,horizontal:!1,itemNav:null,itemSelector:null,smart:!1,activateOn:null,activateMiddle:!1,scrollSource:null,scrollBy:0,scrollHijack:300,scrollTrap:!1,dragSource:null,mouseDragging:!1,touchDragging:!1,releaseSwing:!1,swingSpeed:.2,elasticBounds:!1,dragThreshold:3,interactive:null,scrollBar:null,dragHandle:!1,dynamicHandle:!1,minHandleSize:50,clickBar:!1,syncSpeed:.5,pagesBar:null,activatePageOn:null,pageBuilder:function(e){return"<li>"+(e+1)+"</li>"},forward:null,backward:null,prev:null,next:null,prevPage:null,nextPage:null,cycleBy:null,cycleInterval:5e3,pauseOnHover:!1,startPaused:!1,moveBy:300,speed:0,easing:"swing",startAt:null,keyboardNavBy:null,draggedClass:"dragged",activeClass:"active",disabledClass:"disabled"}}(jQuery,window);


var CommentContainer = {
  last_id: 0,
  leftCount: 0,
  errorTitle: '',
  allCommentsCount: 0,
  user_progress: 0,
  cTitleHeader: localizeGetText({ l: 'passed_videopuzzle_leave_comment', v: 'прошли видеопазл? Оставьте комментарий!', t: 'first', n: 'videopuzzles' }),
  cText: localizeGetText({ l: 'share_opinion_about_passed_videopuzzle', v: 'поделитесь своим мнением о пройденном видеопазле', t: 'first', n: 'videopuzzles' }),
  type_post: 'video',
  pe_type: 'pe',
  post_id: 0,
  phraseEn: '',
  phraseRu: '',
  phrase_index: 0,
  isPhrase: false,
  isHidePhrase: false,
  unsubscribeComments: 0,
  left_count_comments: 0,
  comment_count: 0,
  isHideSubscribe: false,
  isLoadComments: false,
  isSubscriber: 0,
  mainTarget: null,
  textErrorAjax: localizeGetText({ l: 'something_went_wrong_refresh_page_try_again', v: 'Что-то пошло не так. Обновите страницу и попробуйте еще раз.', t: 'first', n: 'comments' }),
  isFeed: /\/comment\-feed/.test(location.href),


  num: function (num, defaultNum) {
    defaultNum = typeof defaultNum === "undefined" ? 1 : defaultNum;
    num = typeof num !== "undefined" ? parseInt(num) : defaultNum;
    return num < 0 || isNaN(num) ? defaultNum : num;
  },
  getGetParamsUrl: function (url) {
    var dataUrl = (url ? url : location.search).replace('?', '').split('&');
    var explodeUrl = {};
    for ( var i = 0; i < dataUrl.length; i++ ) {
      var splitData = dataUrl[ i ].split('=');
      if ([ "/", "" ].indexOf(splitData[ 0 ]) === -1)
        explodeUrl[ splitData[ 0 ] ] = typeof splitData[ 1 ] !== "undefined" ? splitData[ 1 ] : true;
    }

    return explodeUrl;
  },

  setData: function () {
    var $target = this.mainTarget;

    var typePost = $target.attr("data-pe_type");
    var phrase_index = [ 'mt_atom', 'podcast' ].indexOf(typePost) !== -1
      ? 0
      : this.num($target.attr("data-phrase_index"), 0);

    this.user_progress = this.num($target.attr("data-user_progress"), 0);
    this.cTitleHeader = $target.attr("data-cTitleHeader") != "" ? $target.attr("data-cTitleHeader") : this.cTitleHeader;
    this.type_post = typePost;
    this.pe_type = $target.attr("data-pe_type");
    this.post_id = this.num($target.attr("data-post_id"), 0);
    this.phrase_index = phrase_index;
    this.unsubscribeComments = this.num($target.attr("data-is_unsubscribe"), 0);
    this.cText = $target.attr("data-ctext") != "" ? $target.attr("data-ctext") : this.cText;
    this.phraseEn = $target.attr("phraseen") != "" ? $target.attr("phraseen") : "";
    this.phraseRu = $target.attr("phraseru") != "" ? $target.attr("phraseru") : "";

    this.isHideSubscribe = this.num($target.attr("data-isHideSubscribe"), 0) === 1;

    if (this.mainTarget.attr("data-comment_count") !== undefined) {
      this.comment_count = this.num(this.mainTarget.attr("data-comment_count"), 0);
      if (typeof window.countComments === "undefined")
        window.countComments = {};
      window.countComments[ this.post_id + "_" + this.phrase_index ] = this.comment_count;
    }

    if (typePost === "mt_atom" && this.post_id <= 0) {
      var getPrams = this.getGetParamsUrl();
      if (typeof getPrams.atom !== "undefined")
        this.post_id = this.num(getPrams.atom, 0);
    }


    if (this.post_id <= 0 && this.isPhrase) {
      var general = $target.closest(".j-comment-block-react");
      this.post_id = this.num(general.attr("data-post_id"), 0);
      this.phrase_index = this.num(general.attr("data-piece_index"), 0);
    }
  },
  /**
   * Событие при скролле страницы
   * @param e
   */
  handleOnWindowScroll: function (e) {
    if ($("#j-comment-container").length > 0) {
      if ($(window).scrollTop() + $(window).height() >= $("#j-comment-container").offset().top)
        this.loadAndRemoveEvent();
    }
  },

  loadAndRemoveEvent: function () {
    //убираем, чтобы лишний раз не загружал
    //прокси вернет ссылку на функцию, которая определена до этого было, чтобы удалить правильное событие
    $(window).off('scroll', $.proxy(this.handleOnWindowScroll, this));

    this.loadComments();
  },

  /**
   * Если есть хэш, и данного id нет в общем массиве комментов, то получаем коммент и скролим к нему
   * @private
   */
  _getNotViewComment: function () {
    var idHash = location.hash.replace("#", "");
    if (idHash.length <= 0)
      return false;

    if (!/^pe\-comment\_[\d]+$/i.test(idHash))
      return false;

    if (!this.isLoadComments) {
      var self = this;
      setTimeout(function(){
        self._getNotViewComment();
      }, 300);

      return false;
    }


    var match = idHash.match(/^pe\-comment\_[\d]+$/i);
    var idComment = 0;
    if (match && typeof match[ 0 ] !== "undefined") {
      idComment = this.num(match[ 0 ].replace("pe-comment_", ""), 0);
    }

    if (idComment === 0)
      return false;

    var blockComment = this.mainTarget.find(".j-main-wrapper-comment[data-id=" + idComment + "]");

    if (blockComment.length > 0)
      return false;

    var self = this;

    $.post('/api2/comments/getOneComment', {
      idComment: idComment,
      isHtml: 1
    }, function (res) {
      if (res.success) {
        self.mainTarget.find("#comment_who_hidden_deep ul").html(res.commentHTML);
        self.mainTarget.find(".j-additional-comment").show();

        $("html, body").animate({
          scrollTop: $('#comment_who_hidden_deep').offset().top - 50 + "px"
        }, {
          duration: 500
        });
      }
      else
        alert(res.error ? res.error : self.textErrorAjax);
    }, 'json');
  },

  scrollTo: function(el, duration){
    if($(el).length <= 0)
      return false;

    duration = duration >= 0 ? duration : 500;

    $("html, body").animate({ scrollTop: $(el).offset().top - 50 + "px" }, { duration: duration });
  },

  isLoadNow: false,
  init: function (target, withScroll, isPhrase, isHidePhrase) {
    this.isHidePhrase = isHidePhrase;
    this.isPhrase = isPhrase;
    this.mainTarget = $(target);
    this.mainTarget.addClass("loaded");

    var self = this;

    this.setData();
    this.initAutoScrollByClick();

    if (!this.isFeed) {
      var isHash = location.hash === "#commentsNew";
      if (!withScroll || isHash) {
        if (isHash)
          this.scrollTo("#j-comment-container");
        this.loadComments();
      }
      else {
        //если не фразы, то обработчик на скрол и сразу проверяем, возможно уже нужно загружать
        $(window).on('scroll', $.proxy(this.handleOnWindowScroll, this));
        this.handleOnWindowScroll(undefined, self);

        if (location.hash.length && /pe\-comment\_[\d]+$/ig.test(location.hash))
          this.loadAndRemoveEvent();

        this._getNotViewComment();
      }
    }
    else
      this.loadCommentsFeed();

    var body = this.mainTarget;
    body.delegate('.j-subscribe-comments', 'click', function(e) { self.subscribePost(this, self)});
    body.delegate('.j-favorite-comment','click', function(e) {self.doFavorite(this, self)});
    body.delegate('.j-read-comments', 'click', function(e) {self.doRead(this, self)});
    body.delegate('.j-question-comment', 'click', function(e) {self.doQuestion(this, self)});
    body.delegate('.j-help-comment', 'click', function(e) {self.doHelp(this, self)});
    body.delegate('.j-approve-comment', 'click', function(e) {self.doApprove(this, self)});
    body.delegate('.j-delete-comment','click', function(e) {self.deleteComment(e, this, self)});
    body.delegate('.j-click-dislike, .j-click-like, .j-click-cancel-like', 'click', function(e) {self.doLike(this, self)});
    body.delegate('.j-edit-comment', 'click', function(e) {self.showHideEdit(this, self)});
    body.delegate('.j-do-edit-text', 'click', function(e) {self.doEdit(this, self)});
    body.delegate('.j-click-delete-all-comments', 'click', function(e) {self.deleteAllComments(e, this, self)});
    body.delegate('.j-reply-block', 'click', function(e) { self.showHideReply(e, this, self)});
    body.delegate('.j-reply-btn-comment', 'click', function(e) { self.doReply(this, self)});
    body.delegate('.j-add-comment-button', 'click', function(e) { self.doAddComment(this, self)});
    body.delegate('.j-move-comment-to-comment', 'keydown', function(e) { self.moveComment(e, this, self)});
    body.delegate('.j-open-best-tree', 'click', function(e) { self.openBestTree(e, this, self)});
    body.delegate('.j-load-more-comments', 'click', function(e) { self.loadMore(e, this, self)});
    body.delegate('.j-pinned-comment', 'click', function(e) { self.pinnedComment(e, this, self)});
    body.delegate('.j-move-to-phrase', 'click', function(e) { self.moveToPhrase(e, this, self)});
    body.delegate('.j-move-to-phrase-input', 'keyup', function(e) { self.moveToPhraseInput(e, this, self)});
    body.delegate('.j-play-feed-phrase', 'click', function(e) { self.soundPhraseFeed(e, this, self)});
    body.delegate('.editPhraseSpan:not(.j-play-feed-phrase)', 'click', function(e) { self.editPhraseFeed(e, this, self)});
    body.delegate('.borderShowComments', 'click', function(e) { self.showAllComment(e, this, self)});
    body.delegate('.j-load-more-feed', 'click', function(e) { self.loadMoreFeed(e, this, self)});
    body.delegate('.j-change-page-comment', 'click', function(e) { self.loadMoreFeedPage(e, this, self)});
    body.delegate('.pageCommentFeed', 'keydown', function(e) { self.loadMoreFeedInput(e, this, self)});
    body.delegate('.j-return-open', 'click', function (e) { self.openReturnCommentFeed(e, this, self) });
    body.delegate('.j-restore-comment', 'click', function (e) { self.deleteComment(e, this, self, 1) });
    body.delegate('.j-form-return-comment button', 'click', function (e) { self.returnCommentToTrustedUser(e, this, self) });
    body.delegate('.j-click-reset-likes-comments', 'click', function (e) { self.resetLikesDislikes(e, this, self) });
    body.delegate('.j-send-repeat-mail', 'click', function (e) { self.sendRepeatConfirmMail(e, this, self) });
  },

  /**
   * Отсылаем повторно письмо с подтверждением почты
   * @param e
   * @param _this
   * @param self
   */
  sendRepeatConfirmMail: function(e, _this, self) {
    var error = self.mainTarget.find(".j-add-form-error");

    $.post("/api2/comments/sendRepeatConfirmMail", {}, function (res) {
      if (res.status) {
        error.html(localizeGetText({l:'mail_send_to', v:'письмо отправлено на', t:'first', n:'pass_recovery'}) + " " + res.response.email);
        setTimeout(function () {
          error && error.html('');
        }, 10000);
      }
      else if (res.response && typeof res.response.error_text !== "undefined") {
        error.html(res.response.error_text);
      }
      else
        error.html(self.textErrorAjax);
    }, 'json');
  },

  /**
   * Сбрасываем лайки/дизлайки у коммента
   * @param e
   * @param _this
   * @param self
   */
  resetLikesDislikes: function (e, _this, self) {
    e && e.preventDefault();
    if (!user || !user.is_admin || !confirm("Действительно сбросить все лайки и дизлайки"))
      return false;

    var id = self.getCommentId(_this);

    $.post('/api2/comments/resetLikesDislikes', {
      comment_id: id
    }, function (res) {
      if (res.status) {

        var $parent = $(_this).closest(".puzzle-comments__right-content");
        $parent.find(".j-click-like").removeClass("is-active cursor-default").show();
        $parent.find(".j-click-dislike").removeClass("is-active cursor-default").show();

        $parent.find(".puzzle-comments__likes-count").removeClass("greenLike redLike");
        $parent.find(".puzzle-comments__likes-count span").html(0);
        $parent.find(".j-a-you-like").hide();
        $parent.find(".j-click-cancel-like").hide();
      }
      else
        alert(res.response.error ? res.response.error : "Что-то пошло не так.");
    }, 'json');
  },

  /**
   * После проверки коммента помощника, если он написал не правильный ответ - мы возвращаем коммент на доработку
   * @param e
   * @param _this
   * @param self
   * @returns {boolean}
   */
  returnCommentToTrustedUser: function(e, _this, self) {
    e && e.preventDefault();

    var textarea = $(_this).closest(".j-form-return-comment").find("textarea");
    var returnText = textarea.val();

    if ($(_this).hasClass(" puzzle-button_disabled") || returnText.trim() === "") {
      textarea.focus();
      alert("Вы пытаетесь возвратить с пустым комментарием");
      return false;
    }

    textarea.off('input');
    var id = self.getCommentId(_this);
    $.post('/api2/comments/updateAny', {
      comment_id: id,
      returnText: returnText,
      what: "trusted_return",
    }, function (res) {
      if(res.success)
        self.getMainBlock(_this, 1).remove();
      else
        alert(res.error_text ? res.error_text : self.textErrorAjax);
    }, 'json');
  },

  /**
   * Раскрываем форму ответить в "ленте"
   * @param e
   * @param _this
   * @param self
   */
  openReturnCommentFeed: function (e, _this, self) {
    e && e.preventDefault();
    var isOpen = self.num($(_this).data("open"), 0) === 0;
    var mainBlock = self.getMainBlock(_this);
    var textAreaBlock = mainBlock.find(".j-form-return-comment");
    if (textAreaBlock.length) {
      var textarea = textAreaBlock.find("textarea");
      textAreaBlock[ isOpen ? 'slideDown' : 'slideUp' ](300, function () {
        textarea.focus();
      });
      $(_this).data("open", isOpen ? 1 : 0).find("b").html(isOpen ? "-" : "+");

      if (isOpen)
        textarea.on('input', self.onChangeInput);
      else
        textarea.off('input');
    }
  },

  /**
   * Получаем новый url с определенной страницей
   * @param page
   * @returns {string}
   */
  getUrlPage: function (page) {
    var url = location.href;
    if (/page\=[\d]{1,}/gi.test(url))
      url = url.replace(/page\=[\d]{1,}/gi, 'page=' + page);
    else {
      var isExists = url.indexOf("?") !== -1;
      url += (isExists ? "&" : "?") + "page=" + page;
    }

    return url;
  },
  /**
   * Показываем всю ветку с комментами в ленте
   * @param e
   * @param _this
   * @param self
   */
  showAllComment: function (e, _this, self) {
    e && e.preventDefault();

    var params = self.getParams(_this);
    if ($(_this).data('is_open') == 1) {
      params.block.find(".borderShowComments").data("is_open", 0).find("span").html("Показать").parent().find("i").attr("class", "fa fa-angle-double-down");
      params.block.find(".j-comment-one").show();
      params.block.find(".j-comments-all-tree").html("");
      $("html, body").animate({ scrollTop: params.block.offset().top - 50 + "px" }, { duration: 300 });
      return false;
    }

    var url = "/comment-feed?ajax_comment_feed=getTreeComments&isHtml=1&commentId=" + params.comment_id + "&isPhrase=" + params.is_phrase;
    $.get(url, function (res) {
      if (res.success) {
        params.block.find(".borderShowComments").data("is_open", 1).find("span").html("Скрыть").parent().find("i").attr("class", "fa fa-angle-double-up");
        params.block.find(".j-comment-one").hide();
        params.block.find(".j-comments-all-tree").html(res.html).show();
        $("html, body").animate({ scrollTop: params.block.offset().top - 50 + "px" }, { duration: 300 });
        CommentContainer.initTooltips();
      }
      else {
        alert(self.textErrorAjax);
      }
    }, 'json');
  },

  /**
   * Ввели страницу в инпут
   * @param e
   * @param _this
   * @param self
   */
  loadMoreFeedInput: function (e, _this, self) {
    var value = self.num(e.target.value, -1);
    //залипание энтера/esc обрабатываем
    var allowed = true;
    if (typeof e.repeat !== "undefined")
      allowed = !e.repeat;

    if (e.keyCode === 13)
      e && e.preventDefault();

    if (allowed && e.keyCode === 13 && value > 0)
      self._loadCommentsFeed(value);

    if (value <= -1)
      e.target.value = '';
  },

  /**
   * Нажали на ссылку определенной страницы
   * @param e
   * @param _this
   * @param self
   */
  loadMoreFeedPage: function (e, _this, self) {
    e && e.preventDefault();
    var direct = $(_this).data("url");
    var page = 1;

    if ([ 'first', 'last' ].indexOf(direct) === -1) {
      var params = self.getGetParamsUrl();
      page = typeof params.page != "undefined" ? self.num(params.page, 1) : 1;
      page += direct === "next" ? 1 : -1;

      if (page <= 0)
        page = 1;
    }
    else
      page = direct === "first" ? 1 : self.totalPageFeed;

    self._loadCommentsFeed(page);
  },
  /**
   * Нажали на кнопку "показать еще"
   * @param e
   * @param _this
   * @param self
   */
  loadMoreFeed: function (e, _this, self) {
    e && e.preventDefault();

    var params = self.getGetParamsUrl();
    var page = typeof params.page != "undefined" ? self.num(params.page, 1) : 1;
    page++;
    self._loadCommentsFeed(page, _this);
  },

  /**
   * Общее для получения следующей страницы
   * @param page
   * @param btn
   * @private
   */
  _loadCommentsFeed: function (page, btn) {
    var url = this.getUrlPage(page);

    if (page > 0 && page <= this.totalPageFeed) {

      if (!btn && typeof history.pushState == "function")
        history.pushState(url, document.title, url);

      $(btn).find("span").html("Загрузка...");
      this.loadCommentsFeed(btn, !btn);
    }
    else
      alert("Такой страницы нет");
  },
  /**
   * Вызываем поле для редактирования фразы
   * @param e
   * @param _this
   * @param self
   */
  editPhraseFeed: function (e, _this, self) {
    e && e.preventDefault();
    var lang = $(_this).data("lang");
    if ([ 'ru', 'en' ].indexOf(lang) === -1)
      lang = 'ru';

    var nameArea = lang === 'en' ? 'oldPhrase' : 'oldPhraseRu';
    var block = $(_this).closest(".wrapper_for_phrases");
    var textArea = block.find("textarea[name=" + nameArea + "]");
    if (!textArea.length)
      return false;

    $(_this).hide();
    block.find(lang === "en" ? ".b-phrases_block__eng" : ".b-phrases_block__ru").hide();

    textArea.show().focus();
    textArea.on('blur', function () {
      textArea.off('blur');
      textArea.hide();
      self.savePhrase(self, lang, textArea);
    });
  },

  /**
   * Сохраняем фразу измененую в ленту
   * @param self
   * @param lang
   * @param textArea
   * @returns {boolean}
   */
  savePhrase: function (self, lang, textArea) {
    var val = textArea.val().trim();
    var block = textArea.closest(".j-main-block-feed");
    var oldPhrase = block.find(".old-phrase-" + lang).val().trim();

    if (val === "") {
      textArea.val(oldPhrase);
      alert("Нельзя оставлять пустую фразу");
      self.showLinkEditPhrase(block, lang);
      return false;
    }

    if (val === oldPhrase) {
      self.showLinkEditPhrase(block, lang);
      return false;
    }

    var postType = block.data("post_type");

    var req = {
      ajax_action: "ajax_pieces_editor",
      post_id: block.data("comment_id"),
      piece_id: block.data("phrase_id"),
      piece_index: block.data("piece_index"),
      return_wrapped: true,
      is_comment_feed: true,
      post_type: postType === 'video' ? 'post' : postType
    };

    req[ lang === "ru" ? "text_ru" : "text_en" ] = val;

    $.post('/', req, function (res) {
      if (res.success) {
        block.find(".old-phrase-" + lang).val(val);

        if (res.data && res.data.text_en) {
          var text = '';
          if (lang === "en")
            text = res.data.text_en ? res.data.text_en : res.data.phrase_text;
          else
            text = res.data.text_ru ? res.data.text_ru : res.data.phrase_text;

          self.showLinkEditPhrase(block, lang, text);
        }
      }
      else {
        textArea.val(oldPhrase);
        alert(res.error ? res.error : self.textErrorAjax);
        self.showLinkEditPhrase(block, lang);
      }
    }, 'json');
  },

  /**
   * Показываем ссылки редактирования фразы
   * @param block
   * @param lang
   * @param text
   */
  showLinkEditPhrase: function (block, lang, text) {
    var phrase = block.find(lang === "en" ? ".b-phrases_block__eng" : ".b-phrases_block__ru");
    if (typeof text !== "undefined")
      phrase.html(text);
    phrase.show();
    block.find(".editPhraseSpan[data-lang=" + lang + "]").show();
  },

  /**
   * Воспроизводим звук фразы
   * @param e
   * @param _this
   * @param self
   */
  soundPhraseFeed: function (e, _this, self) {
    e && e.preventDefault();

    var url = $(_this).data("url");
    if (audio) {
      audio.stop();
      audio.src(url);
      audio.play();
    }
  },

  bestComments: {},
  /**
   * Открываем ветку лучшего коммента
   * @param e
   * @param _this
   * @param self
   */
  openBestTree: function (e, _this, self) {
    e && e.preventDefault();
    var id = self.getCommentId(_this);

    var callback = function (res) {
      if (res.success) {
        var mainBlock = self.getMainBlock(_this);
        self.bestComments[ id ] = mainBlock.get(0).outerHTML;
        mainBlock.after(res.response.html);
        mainBlock.remove();

        $("body").on('click', ".j-link-to-hide-best-tree", function (e) {
          e && e.preventDefault();
          $(".j-main-wrapper-comment[data-id_best_parent=" + id + "]").remove();
          var mainBlockLi = self.getMainBlock(this);
          mainBlockLi.after(self.bestComments[ id ]);
          mainBlockLi.remove();
        });
      }
      else
        alert(self.textErrorAjax);
    };

    self.loadComments(id, true, undefined, callback);
  },

  /**
   * Перемещаем коммент, вписываея номер фразы в инпут
   * @param e
   * @param _this
   * @param self
   */
  moveToPhraseInput: function (e, _this, self) {
    var value = self.num(e.target.value, -1);
    //залипание энтера/esc обрабатываем
    var allowed = true;
    if (typeof e.repeat !== "undefined")
      allowed = !e.repeat;

    if (allowed && e.keyCode === 13 && value > 0)
      self.moveToPhrase(undefined, _this, self, value - 1);

    if (value <= -1)
      e.target.value = '';
  },
  /**
   * Перемещаем коммент к другой фразе
   * @param e
   * @param _this
   * @param self
   * @param nextPieceIndex - если вписали в инпут, то сюда его передаем
   */
  moveToPhrase: function (e, _this, self, nextPieceIndex) {
    e && e.preventDefault();
    var pieceIndexNextPhrase = nextPieceIndex >= 0 ? nextPieceIndex : $(_this).data("phrase");
    var id = self.getCommentId(_this);

    $.post('/api2/comments/changeCommentPhraseIndex', {
      comment_id: id,
      pieceIndex: pieceIndexNextPhrase,
      getBeforeId: false,
      post_id: self.post_id,
      phrase_index: self.phrase_index,
      pe_type: self.pe_type,
      last_id: null,
      isHtml: 1,
      notNeedComments: self.isFeed ? 1 : 0,
      type_post_for_comment: window.type_post_for_comment
    }, function (res) {

      if (self.isFeed)
        self.getMainBlock(_this, 1).remove();
      else {
        self.comment_count = res.response.allCommentsCount;
        if (typeof window.countComments === "undefined")
          window.countComments = {};
        window.countComments[ self.post_id + "_" + self.phrase_index ] = res.response.allCommentsCount;


        self.last_id = res.response.last_id;
        self.left_count_comments = res.response.left_count_comments;
        self.mainTarget.html(res.response.html);

        var parent = self.mainTarget.closest(".j-comment-block-react").get(0);
        var text = getPhraseText(parent);

        self.mainTarget.find(".j-text-en-phrase").html(self.phraseEn ? self.phraseEn : text.phraseEn);
        self.mainTarget.find(".j-text-ru-phrase").html(self.phraseRu ? self.phraseRu : text.phraseRu);

        if (self.isHidePhrase && self.isPhrase)
          self.mainTarget.find(".j-text-en-phrase").parent().hide();

        self.mainTarget.find(".j-add-comment-textarea").on('input', self.onChangeInput);

        CommentContainer.initTooltips();
      }
    }, 'json');
  },
  /**
   * Привязываем/отвязываем коммент к строке песни
   * @param e
   * @param _this
   * @param self
   */
  pinnedComment: function (e, _this, self) {
    var isChecked = $(_this).prop('checked') ? 1 : 0;
    var id = self.getCommentId(_this);

    $.post('/api2/comments/joinCommentToPhraseMusic', {
      comment_id: id,
      is_pinned: isChecked,
    }, function (res) {
      if (!res.success)
        alert(res.error ? res.error : self.textErrorAjax);
    }, 'json');
  },

  /**
   * Нажамием на "загрузить еще"
   * @param e
   * @param _this
   * @param self
   */
  loadMore: function (e, _this, self) {
    e && e.preventDefault();
    $(_this).find(".j-text-load-more").html(localizeGetText({ l: 'loadings_comments', v: 'загружаю...', n: 'comments', t: 'first' }));
    var callback = function (res) {
      if (res.success) {
        self.mainTarget.find(".j-main-usually-comments").append(res.response.html);
        $("html, body").animate({
          scrollTop: $('.puzzle-comments__item[data-id=' + res.response.comments[ 0 ].comment_ID + ']').offset().top - 50 + "px"
        }, {
          duration: 500
        });

        var text = '';
        var leftCount = res.response.left_count_comments;
        if (leftCount > 100) {
          text = localizeGetText({ l: 'show_more_one_hundred_answers', v: '<span>Показать еще <span>100</span> отзывов</span>', n: 'comments' });
        }
        else {
          text = localizeGetText({ l: 'show_remaining', v: 'показать оставшиеся', t: 'first', n: 'comments' });
          text += " ";
          text += "<span>" + leftCount + "</span> " + localizeGetText({ l: 'answers_plural', v: leftCount });
        }

        if (leftCount <= 0)
          $(_this).remove();

        $(_this).find(".j-text-load-more").html(text);
      }
      else
        alert(self.textErrorAjax);
    };
    self.loadComments(undefined, undefined, undefined, callback)
  },

  /**
   * При нажатии на плашку над комментом, скроллим выше к родительскому комменту
   */
  initAutoScrollByClick: function () {
    $("body").on('click', ".puzzle-comments__name-answer_js_click", function () {
      var commentParentId = $(this).data("move_to");

      $("html, body").animate({
        scrollTop: $('.puzzle-comments__item[data-id=' + commentParentId + ']').offset().top - 50 + "px"
      }, {
        duration: 500
      });
    });
  },

  totalPageFeed: -1,
  /**
   * Загружаем комменты для ленты
   * @param isMoreBtn - сама кнопка "показать еще"
   * @param isNotNeedCount
   * @returns {boolean}
   */
  loadCommentsFeed: function (isMoreBtn, isNotNeedCount) {
    if (this.isLoadNow)
      return false;
    this.isLoadNow = true;
    var url = "/comment-feed?ajax_comment_feed=1&isHtml=1";
    if (!isMoreBtn)
      url += !isNotNeedCount ? "&isNeedCounts=1" : "";
    else if(isMoreBtn && this.last_id > 0)
      url += "&last_id=" + this.last_id;

    var params = this.getGetParamsUrl();

    for ( var key in params )
      url += "&" + key + "=" + decodeURIComponent(params[ key ]);

    var self = this;
    if (isMoreBtn || isNotNeedCount)
      doPreloader(1);

    $.get(url, function (res) {
      doPreloader(0);
      self.isLoadNow = false;
      $(isMoreBtn).find("span").html("Показать еще 20 комментариев");
      if (res.success) {

        if (res.comments.length > 0)
          self.last_id = res.comments[ res.comments.length - 1 ].comment_ID;

        if (!isMoreBtn) {
          if (isNotNeedCount)
            self.mainTarget.find(".j-rows-phrase").html(res.html);
          else
            self.mainTarget.html(res.html);
          $("html, body").animate({ scrollTop: self.mainTarget.offset().top - 50 + "px" }, { duration: 500 });
        }
        else {
          $(".j-rows-phrase").append(res.html);
        }

        CommentContainer.initTooltips();
        //англ слова заставляем быть кликабельными, чтобы открыть балун
        if (typeof highlightText === "function")
          highlightText();

        var page = 1;
        var isShow = false;
        if (!isMoreBtn) {
          page = self.num(res.page, 1);
          if (self.totalPageFeed === -1) {
            self.totalPageFeed = res.countPage;

            var text = res.countAllCommentsForPage;
            text = text.number_format() + " " + plural_ru(text, [ 'комментарий', 'комментариев', 'комментариев' ]);
            $(".j-total-comment").html(text).closest("form").show();
            $(".j-total-page").html(res.countPage.number_format());
          }

          $(".pageCommentFeed").val(page);
          isShow = page < self.totalPageFeed;
          $(".paginator-style-1__form").show();
        }
        else {
          page = typeof params.page !== "undefined" ? params.page : 1;
          isShow = page < self.totalPageFeed;
          $(".pageCommentFeed").val(page);
        }

        $(".j-change-page-comment[data-url=prev], .j-change-page-comment[data-url=first]")[ page > 1 ? 'show' : 'hide' ]();
        $(".j-change-page-comment[data-url=next], .j-change-page-comment[data-url=last]")[ isShow ? 'show' : 'hide' ]();
        $(".j-load-more-feed").parent()[ isShow ? 'show' : 'hide' ]();
      }
      else {
        self.mainTarget.html("<p class='puzzle_ta_center redesign-upload-button-v2_style_red puzzle-text_fz_36'>Нет комментов</p>")
      }
    }, 'json');
  },
  /**
   * Загружаем комментарии
   * @param idComment - если хотим загрузить ветку комментов для определенного коммента
   * @param isBest - загружаем комменты для "лучших комментариев"
   * @param isRefresh - просто нужно перезагрузить комменты (рефреш)
   * @param callback
   */
  loadComments: function (idComment, isBest, isRefresh, callback) {
    if (this.isLoadNow)
      return false;

    this.isLoadNow = true;

    var req = {
      post_id: this.post_id,
      phrase_index: this.phrase_index,
      pe_type: this.pe_type,
      isHtml: 1,
      type_post_for_comment: window.type_post_for_comment
    };

    //если это отзывы
    req.last_id = isRefresh ? 0 : this.last_id;

    if (isBest) {
      req.is_best_comment = true;
      req.id_comment = idComment;
    }

    //если перезагружаем, то нужно получить лучшие комменты
    if (this.isLoadComments === false || isRefresh) {
      if (!this.mainTarget.hasClass("phrase-comment"))
        req.with_best_comments = true;
    }


    if (/\.com\/trainer/ig.test(location.href))
      req.isGramotey = 1;

    if (/\.com\/listening/ig.test(location.href))
      req.isAp = 1;

    if (this.isHideSubscribe)
      req.isHideSubscribe = 1;

    var self = this;
    $.post('/api2/comments/getComments', req, function (res) {
      self.isLoadNow = false;
      var isSetText = !self.isLoadComments;


      if (!isBest && req.last_id <= 0) {
        self.comment_count = res.response.allCommentsCount;
        if (typeof window.countComments === "undefined")
          window.countComments = {};
        window.countComments[ self.post_id + "_" + self.phrase_index ] = res.response.allCommentsCount;

        setTimeout(function () {
          var match = location.hash.replace("#", "").match(/^pe\-comment\_[\d]+$/i);
          var idComment = 0;
          if (match && typeof match[ 0 ] !== "undefined") {
            idComment = self.num(match[ 0 ].replace("pe-comment_", ""), 0);
            var _comment = $("#pe-comment_" + idComment);
            if (_comment.length > 0) {
              $("html, body").animate({
                scrollTop: _comment.offset().top - 50 + "px"
              }, {
                duration: 500
              });
            }
          }
        }, 200);
      }

      if (isBest) {
        callback && callback(res);
      }
      else if (req.last_id > 0) {
        self.last_id = res.response.last_id;
        self.left_count_comments = res.response.left_count_comments;
        callback && callback(res);
      }
      else {
        self.last_id = res.response.last_id;
        self.left_count_comments = res.response.left_count_comments;
        self.isLoadComments = true;
        self.mainTarget.html(res.response.html);

        self.isSubscriber = res.response.isSubscribeForPost;

        if (isSetText && !self.isPhrase) {
          self.mainTarget.find(".j-add-comment-textarea").attr("placeholder", self.cText);
          self.mainTarget.find("#j-cTitleHeader").html(self.cTitleHeader);
          if (self.unsubscribeComments)
            self.mainTarget.find(".j-unsubscribe-comments").show();
        }
        else if (isSetText && self.isPhrase) {
          var parent = self.mainTarget.closest(".j-comment-block-react").get(0);
          var text = getPhraseText(parent);

          self.mainTarget.find(".j-text-en-phrase").html(self.phraseEn ? self.phraseEn : text.phraseEn);
          self.mainTarget.find(".j-text-ru-phrase").html(self.phraseRu ? self.phraseRu : text.phraseRu);
        }

        if (self.isHidePhrase && self.isPhrase)
          self.mainTarget.find(".j-text-en-phrase").parent().hide();

        self.mainTarget.find(".j-add-comment-textarea").on('input', self.onChangeInput);
      }

      if (res.success) {
        //англ слова заставляем быть кликабельными, чтобы открыть балун
        if (typeof highlightText === "function")
          highlightText();

        CommentContainer.initTooltips();
      }
      else if(!user || !user.logged_in)
        self.mainTarget.remove();

      if ($('.is-course').data('is-course')){
        $('.j-container-comments-main').append( $('.puzzle-box_type_comments').css('padding','0'));
        $('.puzzle-box_style-padding').css('margin-bottom',-38);

      }

      CommentContainer.initTooltips();
    }, 'json');
  },

  initTooltips: function () {
    if (window.tooltipsComment) {
      window.tooltipsComment.destroy();
      window.tooltipsComment = undefined;
    }

    //дата
    window.tooltipsComment = new jBox('Tooltip', {
      animation: 'zoomOut',
      addClass: 'puzzle-tooltip puzzle-tooltip_style_buble puzzle-tooltip_size_m dictionary-tooltip_mobile-resize dictionary-tooltip_mobile-resize',
      attach: $('.j-tooltip-time-comment'),
      zIndex: 503,
      trigger: 'mouseenter',
      getContent: 'data-jbox-content',
      adjustTracker: true,
      position: {
        x: 'right',
        y: 'center'
      },
      outside: 'x',
      closeOnMouseleave: 1
    });

    window.tooltipsComment.enable();
  },
  /**
   * Показываем менюшку с инфой про юзера (новые комменты)
   * @param idComment
   * @param userId
   * @param isBest
   */
  showInfoUserComment: function (idComment, userId, isBest) {
    var data = {
      ajax_action: "ajax_pe_get_info_user_comment",
      id: idComment
    };
    if (typeof userId !== 'undefined')
      data.user_id = userId;

    new jBox('Tooltip', {
      trigger: 'mouseenter',
      animation: 'zoomOut',
      addClass: 'puzzle-tooltip puzzle-tooltip_size_l puzzle-tooltip_theme_comments',
      attach: $('.showInfoUser_' + idComment + (isBest ? '_best' : '')),
      zIndex: 203,
      ajax: {
        url: '/',
        method: "post",
        data: data,
        reload: 'strict',
        setContent: false,
        complete: function (response) {
          this.setContent(response.responseText);
        }
      },
      width: 480,
      adjustTracker: true,
      position: {
        x: 'center',
        y: 'bottom'
      },
      outside: 'y',
      closeOnEsc: true,
      blockScroll: false,
      closeOnMouseleave: '1',
      adjustDistance: {
        top: 55, right: 5, bottom: 5, left: 5
      }
    });
  },

  /**
   * Тултип показа кто проголосовал в комменте
   * @param idComment
   * @param isBest
   */
  showInfoVotes: function (idComment, isBest) {
    var data = {
      is_fun: false,
      id_comment: idComment,
      post_type: 'comment',
      isHtml: 1
    };

    new jBox('Tooltip', {
      trigger: 'mouseenter',
      animation: 'zoomOut',
      addClass: 'place-bottom puzzle-comment__votes puzzle-text_fz_13',
      attach: $('.j-vote-comment_' + idComment + (isBest ? '_best' : '')),
      zIndex: 203,
      ajax: {
        url: '/api2/comments/getUsersLikeDislike',
        method: "post",
        data: data,
        reload: 'strict',
        setContent: false,
        complete: function (response) {
          this.setContent(response.responseText);
        }
      },
      width: 250,
      adjustTracker: true,
      position: {
        x: 'center',
        y: 'bottom'
      },
      outside: 'y',
      closeOnEsc: true,
      blockScroll: false,
      closeOnMouseleave: '1',
      adjustDistance: {
        top: 55, right: 5, bottom: 5, left: 5
      }
    });
  },

  /**
   *  Подписываемся на все комменты в посте
   */
  subscribePost: function (e, self) {
    var block = $(".j-subscribe-comments");
    if (self.isSubscriber) {
      block.removeClass("is-active");
      block.find(".vocab-test__words__element__main").html(localizeGetText({ l: 'subscribe_to_comments', v: 'подписаться<br>на комментарии', t: 'first', n: 'comments' }));
      self.isSubscriber = 0;
    }
    else {
      block.addClass("is-active");
      block.find(".vocab-test__words__element__main").html(localizeGetText({ l: 'you_are_subscribed_to_comments', v: 'вы подписаны<br>на комментарии', t: 'first', n: 'comments' }));
      self.isSubscriber = 1;
    }


    $.post('/api2/comments/subscribeForPost', {
      post_id: self.post_id,
      is_subscribe: self.isSubscriber,
      pe_type: self.pe_type
    }, function () {
    }, 'json');
  },

  /**
   * Получаем id коммента
   * @param handler
   * @returns {*}
   */
  getCommentId: function (handler) {
    return this.num(this.getMainBlock(handler).attr("data-id"), 0);
  },

  /**
   * Получаем весь блок самого коммента
   * @param handler
   * @param isFoFeed - возвращаем блок с фразой
   * @returns {*|jQuery}
   */
  getMainBlock: function (handler, isFoFeed) {
    return $(handler).closest(!isFoFeed ? ".j-main-wrapper-comment" : ".j-main-block-feed");
  },
  /**
   * Добавляем комментв в избранное/удаляем от туда
   */
  doFavorite: function (e, self) {
    var target = $(e);
    var action = target.hasClass("is-active") ? 0 : 1;

    var textBlock = target.find(".j-text-favorite");
    if (target.hasClass("is-active")) {
      action = 0;
      textBlock.html(localizeGetText({ l: 'insert_to_favorite', v: 'В избранное', n: 'comments', t: 'first' }));
    }
    else {
      action = 1;
      textBlock.html(localizeGetText({ l: 'delete_from_favorite', v: 'Удалить из избранного', n: 'comments', t: 'first' }));
    }

    target.toggleClass("is-active");

    var id = self.getCommentId(e);
    var url = '/api2/comments/' + (action === 0 ? 'deleteFavoriteComment' : 'addToFavorite');
    $.post(url, {
      comment_id: id,
      is_send_email: 1, //по дефолту подписываем на комменты при добавлении в избранное
      type: 1
    }, function (res) {
      if (res.success && res.isShowPopup) {
        window.jbox_favorite = new jBox('Modal', {
          content: $(".j-comment-modal-favorite"),
          addClass: 'puzzle-modal',
          closeButton: 'box',
          width: 360
        });
        window.jbox_favorite.open();
      }
    }, 'json');
  },

  /**
   * Делаем прочитанным коммент/или наоборот убираем этот статус
   */
  doRead: function (e, self) {
    var status = self.num($(e).attr("data-status"), 0);
    var textBlock = $(e).find(".j-text-read");

    if (status === 0) {
      $(e).attr("data-status", 1);
      textBlock.html(localizeGetText({ l: 'read_this_comment', v: 2, t: 'first', n: 'comments' }));
    }
    else {
      $(e).attr("data-status", 0);
      textBlock.html(localizeGetText({ l: 'read_this_comment', v: 1, t: 'first', n: 'comments' }));
    }

    var id = self.getCommentId(e);
    $.post('/api2/comments/updateAny', {
      comment_id: id,
      paramForWhat: status === 0 ? "readed" : "",
      what: "read"
    }, function () {
      if (self.isFeed) {
        var mainBlock = self.getMainBlock(e);
        mainBlock.css({ backgroundColor: status === 0 ? '#e0e0e0' : '' });
      }
    }, 'json');
  },

  /**
   * Нажимаем на "это вопрос"
   */
  doQuestion: function (e, self) {
    var textBlock = $(e).find(".pe_trusted_com");
    var isQuestion = textBlock.hasClass("is-active") ? 0 : 1;

    textBlock.toggleClass("is-active");

    self.getMainBlock(e).find(".j-help-comment")[ isQuestion ? 'show' : 'hide' ]();

    var id = self.getCommentId(e);
    $.post('/api2/comments/updateAny', {
      comment_id: id,
      paramForWhat: isQuestion,
      what: "feed_for_trusted"
    }, function () {
    }, 'json');
  },
  /**
   * Нажимаем на "одобрить/отвергнуть"
   */
  doApprove: function (e, self) {
    var textBlock = $(e).find(".j-text-approve");

    var status = self.num($(e).attr("data-status"), 0);
    var isApproveScreen = /approve=moderate/i.test(location.href);

    if (status === 0)
      textBlock.html(isApproveScreen ? "Проверено" : localizeGetText({ l: 'reject', v: 'отвергнуть', t: 'first' }));
    else
      textBlock.html(isApproveScreen ? "Не проверено" : localizeGetText({ l: 'approve', v: 'одобрить', t: 'first' }));

    var approve = status === 0 ? (isApproveScreen ? 1 : 2) : (isApproveScreen ? 0 : 1);
    $(e).attr("data-status", status === 0 ? 1 : 0);

    var mainBlock = self.getMainBlock(e);
    var id = self.getCommentId(e);
    $.post('/api2/comments/approveComment', {
      comment_id: id,
      approve: approve,
      text_for_update: "",
      isApproveScreen: isApproveScreen ? 1 : 0
    }, function (res) {
      if (res.success) {
        var block = mainBlock.find(".j-comment-status-approve");
        if (approve !== 0)
          mainBlock.css({ borderLeft: 'none' });

        if (approve === 2) {
          $(e).closest("article").addClass("puzzle-comments__item_status_expert");
          block.html("<span>" + localizeGetText({ l: 'comment_approved_by_expert', v: 'комментарий одобрен экспертом Puzzle English', t: 'first', n: 'comments' }) + "</span>").show();
        }
        else {
          $(e).closest("article").removeClass("puzzle-comments__item_status_expert");
          block.html("");
          if (approve === 0)
            self.getMainBlock(e).css({ borderLeft: '4px solid #f59898' });
        }
      }

    }, 'json');
  },

  /**
   * Нажимаем на "help"
   */
  doHelp: function (e, self) {
    var id = self.getCommentId(e);

    $.post('/api2/comments/updateAny', {
      comment_id: id,
      paramForWhat: 'none',
      what: "needHelp"
    }, function (res) {

      if (res.success) {
        if (res.response.num > 0)
          $(e).addClass("is-active");
        else
          $(e).removeClass("is-active");

        alert(res.response.text);
      }
      else if (res.response && res.response.error_text)
        alert(res.response.error_text);
    }, 'json');
  },

  /**
   * Рекурсивно удаляем элементы, если они являются дочерними
   * @param mainLi
   * @param level
   */
  deleteRecurse: function (mainLi, level) {
    if (this.num(mainLi.next().attr("data-level"), 0) > level) {
      mainLi.next().remove();
      this.deleteRecurse(mainLi, level);
    }
    else
      mainLi.remove();
  },
  /**
   * Удаление коммента
   * @param e
   * @param _this
   * @param self
   * @param isRestore - 1, значит восстанавливаем коммент
   */
  deleteComment: function (e, _this, self, isRestore) {
    e && e.preventDefault();

    if (
      confirm(isRestore ? "Точно восстановить комментарий?" : localizeGetText({ l: 'confirm_deleting_comment', v: 'подтвердите удаление комментария', t: 'first', n: 'comments' }))
    ) {
      var id = self.getCommentId(_this);

      $.post('/api2/comments/doDeleteComment', {
        comment_id: id,
        restore: !isRestore ? 0 : 1
      }, function (res) {
        if (res.success) {
          if (self.isFeed) {
            var block = self.getMainBlock(_this, 1);
            block.remove();
          }
          else {
            var mainLi = self.getMainBlock(_this);
            var level = self.num(mainLi.attr("data-level"), 0);
            self.deleteRecurse(mainLi, level);
          }
        }
        else if (res.response && res.response.error_text)
          alert(res.response.error_text);
        else
          alert(isRestore
            ? localizeGetText({ l: 'cannot_restore_comment', v: 'невозможно восстановить комментарий', t: 'first', n: 'comments' })
            : localizeGetText({ l: 'cannot_delete_comment', v: 'невозможно удалить комментарий', t: 'first', n: 'comments' }));
      }, 'json');
    }
  },

  /**
   * лайк/дизлайк/отмена
   */
  doLike: function (e, self) {
    var id = self.getCommentId(e);

    var isDislike = $(e).hasClass("j-click-dislike");
    var isCancel = $(e).hasClass("j-click-cancel-like");

    $.post('/api2/comments/doLike', {
      comment_id: id,
      is_like: isDislike ? 0 : 1, //1 - лайк, 0 - дизлайк
      is_cancel: isCancel ? 1 : 0
    }, function (res) {
      if (res.success) {
        var total = res.response.total_count;
        var mainBlock = self.getMainBlock(e);
        mainBlock.find(".puzzle-comments__likes-count")
          .removeClass("greenLike redLike")
          .addClass(total > 0 ? "greenLike" : (total < 0 ? "redLike" : ""))
          .html(total);

        var like = mainBlock.find(".j-click-like");
        var dislike = mainBlock.find(".j-click-dislike");
        var link = mainBlock.find(".j-a-you-like");
        var cancel = mainBlock.find(".j-click-cancel-like");

        if (isDislike) {
          dislike.hide();
          like.hide();
          link.hide();
          cancel.show();
        }
        //если лайк
        else if (!isDislike && !isCancel) {
          dislike.hide();
          like.hide();
          link.show();
          cancel.show();
        }
        else {
          dislike.show();
          like.show();
          link.hide();
          cancel.hide();
        }
      }
    }, 'json');
  },

  /**
   * Показываем/скрываем форму редактирования
   */
  showHideEdit: function (e, self) {
    var mainBlock = self.getMainBlock(e);
    var textHtmlBlock = mainBlock.find(".j-text-html-comment");
    var formBlock = mainBlock.find(".j-edit-form-comment");
    var replyLink = mainBlock.find(".j-reply-block");
    var id = self.getCommentId(e);
    if (typeof window.lastComment === "undefined")
      window.lastComment = {};

    var textarea = formBlock.find("textarea");

    if (textHtmlBlock.hasClass("opened")) {
      window.lastComment[ id ] = undefined;
      textHtmlBlock.removeClass("opened").show();
      formBlock.hide();
      $(e).find(".j-text-edit").html(localizeGetText({ l: 'edit', v: 'редактировать', t: 'first' }));
      replyLink.show();
      textarea.off('input');
    }
    else {
      if (replyLink.hasClass("opened"))
        replyLink.click();

      formBlock.show();
      window.lastComment[ id ] = textarea.val().trim();
      textHtmlBlock.addClass("opened").hide();
      textarea.focus();
      textarea.on('input', self.onChangeInput);
      $(e).find(".j-text-edit").html(localizeGetText({ l: 'cancel', v: 'отменить', t: 'first' }));
      replyLink.hide();
    }
  },

  /**
   * Получаем текст коммента, который был до редактирования
   * @param id
   * @returns {*}
   */
  getLastComment: function(id){
    if (typeof window.lastComment === "undefined") {
      window.lastComment = {};
      return '';
    }

    return window.lastComment[ id ];
  },

  /**
   * Выполняем после редактирования коммента
   * @param e
   * @param res
   */
  callbackAfterEdit: function(e, res){
    var mainBlock = this.getMainBlock(e);
    var textarea = mainBlock.find(".j-textarea-edit");

    if (typeof res !== "undefined") {
      textarea.val(res.response.comment_content);
      mainBlock.find(".j-text-html-comment").html(res.response.comment_content_with_preview);
    }

    textarea.closest(".j-edit-form-comment").hide();
    mainBlock.find(".j-edit-comment").click();

    //если отвечаем на возвращенный вопрос в ленте
    if (/myAnswer\=/i.test(location.href))
      this.getMainBlock(e, 1).remove();
  },
  /**
   * Отправляем на редактирование коммент
   */
  doEdit: function (e, self) {
    var id = self.getCommentId(e);
    var mainBlock = self.getMainBlock(e);
    var textarea = mainBlock.find(".j-textarea-edit");

    if(textarea.val() === self.getLastComment(id)) {
      self.callbackAfterEdit(e);
      return false;
    }

    var req = {
      comment_id: id,
      text_for_update: textarea.val()
    };
    if (typeof self.getGetParamsUrl().myAnswer !== "undefined")
      req.isReturnCommentToAdmin = 1;

    $.post('/api2/comments/doUpdateMyComment', req, function (res) {
      if (res.success)
        self.callbackAfterEdit(e, res);
      else if (res.response && res.response.error_text)
        alert(res.response.error_text);
    }, 'json')
  },

  /**
   * Удаление всех комментов юзера
   * @param e
   * @param _this
   * @param self
   */
  deleteAllComments: function (e, _this, self) {
    e && e.preventDefault();

    if (confirm("Вы точно хотите удалить все комментарии этого юзера?")) {
      var mainBlock = self.getMainBlock(_this);
      var user_id = mainBlock.attr("data-user_id");

      $.post('/api2/comments/deleteCommentsByUser', {
        user_id: mainBlock.attr("data-user_id")
      }, function (res) {
        if (res.success) {
          if (self.isFeed) {
            $(".j-main-wrapper-comment[data-user_id=" + user_id + "]").each(function (i, v) {
              self.getMainBlock(v, 1).remove();
            });
          }
          else
            $(".j-main-wrapper-comment[data-user_id=" + user_id + "]").remove();
        }
        else if (res.response && res.response.error_text)
          alert(res.response.error_text);
        else
          alert(self.textErrorAjax);
      }, 'json')
    }
  },

  /**
   * В ленте комментов при "ответе на коммент" добавляем спец надпись, что коммент занят другим админом (если он занят)
   * @param res
   * @param id
   */
  setTimeLeftBlock: function(res, id){
    $("#headerFeedComment_"+ id).html(
      '<br>'
      +'<i class="fa fa-star" style="color: #ff8b1e;"></i> Комментарий занят <a href="/user/' + res.infoUser.id + '">'
       + res.infoUser.display_name +
      '</a>'
      +'&nbsp; | &nbsp; <i class="fa fa-clock-o" style="color: #ff8b1e;"></i> Осталось: ' + res.timeLeftHuman
    );
  },

  loadedCommentBlock: {},
  confirmBlock: function(id, mainBlock, jReplyBlock, html, isOpen) {
    $.post('/comment-feed', {
      ajax_comment_feed: 'setUserToCommentWhoBlocked',
      id_comment: id,
      whatKind: 1,
      is_change_redactor: 1
    });

    this.callbackShowHideReply(mainBlock, jReplyBlock, html, isOpen);
  },
  /**
   * Показываем/скрываем форму ответа на коммент
   * @param e
   * @param _this
   * @param self
   */
  showHideReply: function (e, _this, self) {
    e && e.preventDefault();


    var mainBlock = self.getMainBlock(e.target);
    var html = $(".j-place-to-copy-reply-form").html();
    var jReplyBlock = mainBlock.find(".j-reply-block");

    var isOpen = jReplyBlock.hasClass("opened");
    //если в ленте и пытаемся ответить
    if(!isOpen && self.isFeed) {
      var id = self.getCommentId(e.target);
      $.get("/comment-feed?ajax_comment_feed=setUserToCommentWhoBlocked&whatKind=1&id_comment=" + id, function (res) {
        if(res.success) {
          if(!res.redactor)
            self.callbackShowHideReply(mainBlock, jReplyBlock, html, isOpen);
          else {
            if(res.alreadyAnswered) {
              if(confirm("Другой админ уже ответил на коммент. Хотите тоже ответить?"))
                self.confirmBlock(id, mainBlock, jReplyBlock, html, isOpen);
            }
            else {
              if (res.timeLeftHuman)
                self.setTimeLeftBlock(res, id);

              if(confirm("Комментарий занят другим редактором. Хотите тоже ответить?"))
                self.confirmBlock(id, mainBlock, jReplyBlock, html, isOpen);
            }
          }
        }
        else {
          if (res.error)
            alert(res.error);

          self.callbackShowHideReply(mainBlock, jReplyBlock, html, isOpen);
        }
      }, 'json');
    }
    else
      self.callbackShowHideReply(mainBlock, jReplyBlock, html, isOpen);
  },

  callbackShowHideReply: function(mainBlock, jReplyBlock, html, isOpen){
    mainBlock.find(".j-reply-form textarea").off('input');
    mainBlock.find(".j-reply-form").remove();
    var linkEdit = mainBlock.find(".j-edit-comment");
    var i = jReplyBlock.find("i");

    if (isOpen) {
      jReplyBlock.removeClass("opened").find(".j-text-reply").html(localizeGetText({ l: 'reply', v: 'ответить', t: 'first' }));
      linkEdit.show();
      i.show();
    }
    else {
      if (mainBlock.find(".j-text-html-comment").hasClass("opened"))
        linkEdit.click();

      i.hide();
      linkEdit.hide();
      jReplyBlock.addClass("opened").find(".j-text-reply").html(localizeGetText({ l: 'dont_ansert', v: 'не отвечать', t: 'first', n: 'comments' }));
      mainBlock.find("article").append("<div class='j-reply-form'>" + html + "</div>");
      var textareaBlock = mainBlock.find(".j-reply-form textarea");
      if (this.isPhrase)
        textareaBlock.addClass("white-bg");
      textareaBlock.on('input', this.onChangeInput).focus();
    }
  },

  /**
   * При изменении формы ответа - кнопку дизейблим или нет
   * @param e
   * @param self
   */
  onChangeInput: function (e, self) {
    var target = $(e.target);
    var closest = target.hasClass("j-return-textarea") ? ".j-form-return-comment" : (target.hasClass("j-add-comment-textarea") ? ".j-add-block-form" : ".j-reply-form");
    var button = target.closest(closest).find("button");

    var maxLength = user && (user.is_admin || user.can_editposts) ? 0 : 1000;
    var lengthText = target.val().length;
    var isApply = lengthText > 0;

    var $error = target.parent().find(".puzzle-comment_form_error");
    if (maxLength !== 0 && lengthText > maxLength) {
      var newVal = target.val().substring(0, maxLength);
      target.val(newVal);
      lengthText = maxLength;
    }

    if (maxLength !== 0 && lengthText >= (maxLength / 2)) {
      $error.html("Left symbols: " + (maxLength - lengthText));
    }
    else {
      $error.html("");
    }

    var addClass = isApply ? "redesign-button_bg-blue" : "puzzle-button_disabled";
    var removeClass = isApply ? "puzzle-button_disabled" : "redesign-button_bg-blue";

    button.addClass(addClass).removeClass(removeClass);
  },

  /**
   * Отвечаем на комменты
   */
  doReply: function (e, self) {
    var mainBlock = self.getMainBlock(e);
    var id = self.getCommentId(e);

    var level = mainBlock.attr("data-level");
    var textarea = mainBlock.find(".j-reply-form textarea");

    var post_id = self.post_id;
    var phrase_index = self.phrase_index;
    var pe_type = self.pe_type;
    if (self.isFeed) {
      var params = self.getParams(e);
      post_id = params.post_id;
      pe_type = params.pe_type;
      phrase_index = params.phrase_index;
    }

    var data = {
      comment_id: id,
      text: textarea.val(),
      post_id: post_id,
      phrase_index: phrase_index,
      pe_type: pe_type,
      isHtml: 1,
      level: level,
      type_post_for_comment: window.type_post_for_comment
    };

    if (self.user_progress >= 100)
      data.is_complete_task = 1;

    //если из грамотея пишем
    if (/\.com\/trainer/ig.test(location.href))
      data.isGramotey = 1;

    if (/\.com\/listening/ig.test(location.href))
      data.isAp = 1;

    var error = mainBlock.find(".puzzle-comment_form_error");
    $.post('/api2/comments/addComment', data, function (res) {
      if (res.success) {

        if (self.isFeed) {
          mainBlock.after(res.response.commentHTML);
        }
        else {
          if (!self.isPhrase)
            mainBlock.after(res.response.commentHTML);
          else {
            var level = mainBlock.attr("data-level");
            var next = mainBlock.next();
            if (next.attr('data-level') <= level) {
              next.before(res.response.commentHTML);
            }
            else {
              for ( var i = 0; i < 100; i++ ) {
                next = next.next();
                if (next.attr('data-level') > level)
                  continue;
                break;
              }

              if (next.length <= 0)
                mainBlock.closest("ul").append(res.response.commentHTML);
              else
                next.before(res.response.commentHTML);
            }
          }
        }

        textarea.val('').trigger('input');
        mainBlock.find(".j-reply-block").click();
        error.html("");
        CommentContainer.initTooltips();

        var id = res.response.comment.comment_ID;
        $("html, body").animate({
          scrollTop: $(".j-main-wrapper-comment[data-id=" + id + "]").offset().top - 50 + "px"
        }, {
          duration: 500
        });
      }
      else if (typeof res.error !== "undefined")
        error.html(res.error);
      else if (typeof res.response.error_text !== "undefined") {
        error.html(res.response.error_text);
        if (res.response.error_code == 101) {
          error.append("<span class='j-send-repeat-mail puzzle-link puzzle_ml_5 puzzle-link_style_light-gray puzzle-link_style_dashed'>"
                        + localize({ l: 'send_again_letter', v: 'выслать письмо повторно', t: 'first'})
                      +"</span>");
        }
      }
      else
        error.html(self.textErrorAjax);
    }, 'json');
  },

  /**
   * Получаем основные параметры коммента
   * @param selector
   * @returns {{block: (jQuery|*|*), pe_type: (jQuery|*|*), post_id: (jQuery|*|*), is_phrase: (jQuery|*|*), phrase_id: (jQuery|*|*), phrase_index: (jQuery|*|*), comment_id: (jQuery|*|*)}}
   */
  getParams: function (selector) {
    var block = this.getMainBlock(selector, 1);
    return {
      block: block,
      post_id: block.data("post_id"),
      phrase_index: block.data("piece_index"),
      pe_type: block.data("pe_type"),
      phrase_id: block.data("phrase_id"),
      comment_id: block.data("comment_id"),
      is_phrase: block.data("is_phrase"),
    };
  },
  /**
   * Добавляем коммент
   */
  doAddComment: function (e, self) {
    var textarea = self.mainTarget.find(".j-add-comment-textarea");

    var post_id = self.post_id;
    var phrase_index = self.phrase_index;
    var pe_type = self.pe_type;
    if (self.isFeed) {
      var params = self.getParams(e);
      post_id = params.post_id;
      pe_type = params.pe_type;
      phrase_index = params.phrase_index;
    }


    var data = {
      comment_id: 0,
      text: textarea.val(),
      post_id: post_id,
      phrase_index: phrase_index,
      pe_type: pe_type,
      isHtml: 1,
      level: -1,
      type_post_for_comment: window.type_post_for_comment
    };

    if (self.user_progress >= 100)
      data.is_complete_task = 1;

    //если из грамотея пишем
    if (/\.com\/trainer/ig.test(location.href))
      data.isGramotey = 1;

    if (/\.com\/listening/ig.test(location.href))
      data.isAp = 1;

    var mainBlock = self.mainTarget.find(".j-main-usually-comments");
    var error = self.mainTarget.find(".j-add-form-error");
    $.post('/api2/comments/addComment', data, function (res) {
      if (res.success) {
        mainBlock[ self.isPhrase ? "append" : "prepend" ](res.response.commentHTML);
        textarea.val('').trigger('input');
        error.html('');

        var id = res.response.comment.comment_ID;
        $("html, body").animate({
          scrollTop: $(".j-main-wrapper-comment[data-id=" + id + "]").offset().top - 50 + "px"
        }, {
          duration: 500
        });
      }
      else if (typeof res.error !== "undefined")
        error.html(res.error);
      else if (typeof res.response.error_text !== "undefined") {
        error.html(res.response.error_text);
        if (res.response.error_code == 101) {
          error.append("<span class='j-send-repeat-mail puzzle-link puzzle_ml_5 puzzle-link_style_light-gray puzzle-link_style_dashed'>"
                        + localize({ l: 'send_again_letter', v: 'выслать письмо повторно', t: 'first'})
                      +"</span>");
        }
      }
      else
        error.html(self.textErrorAjax);
    }, 'json');
  },

  /**
   * Переносим коммент с одной позицы к другой (например присоединяем к другому комменту)
   * @param e
   * @param _this
   * @param self
   */
  moveComment: function (e, _this, self) {
    //залипание энтера/esc обрабатываем
    var allowed = true;
    if (e.repeat !== undefined)
      allowed = !e.repeat;

    var id = self.getCommentId(_this);

    var target = $(_this);
    var newParentId = self.num(target.val().trim(), -1);

    //если это энтер, не залипание и мы сейчас не получаем новое слово
    if (e.keyCode === 13 && allowed && newParentId >= 0) {
      $.post('/api2/comments/moveComment', {
        comment_id: id,
        new_parent_comment: newParentId,
        notNeedComments: self.isFeed ? 1 : 0,
        getBeforeId: false,
        post_id: self.post_id,
        phrase_index: self.phrase_index,
        pe_type: self.pe_type,
        last_id: self.allCommentsCount > 100 ? self.last_id : null,
        isHtml: 1
      }, function (res) {
        if (res.success) {
          if (self.isFeed)
            self.getMainBlock(_this, 1).remove();
          else {
            target.val('');

            self.mainTarget.html(res.response.html);
            self.initTooltips();
            if (!self.isPhrase) {
              self.mainTarget.find("#j-cTitleHeader").html(self.cTitleHeader);
              self.mainTarget.find(".j-add-comment-textarea").attr("placeholder", self.cText)
            }
            self.mainTarget.find(".j-add-comment-textarea").on('input', self.onChangeInput);
          }
        }
        else if (res.response && res.response.error_text)
          alert(res.response.error_text);
        else
          alert(self.textErrorAjax);
      }, 'json');
    }
  }
};


window.commentsContainerArray = [];

/**
 * Инициализируем разные блоки комментариев
 */
var factoryCommentsContainer = {

  init: function () {
    $(".j-container-comment-copy").each(function (i, val) {
      if ($(val).hasClass("need-load") && !$(val).hasClass("loaded")) {
        window.commentsContainerArray.push(Object.assign({}, CommentContainer));
        window.commentsContainerArray[ window.commentsContainerArray.length - 1 ].init(
          val,
          $(val).hasClass("with-scroll"),
          $(val).hasClass("phrase-comment"),
          $(val).hasClass("hide-phrase")
        );
      }
    });
  }
};

/**
 * кол-во комментов у этой фразы
 * @param postId
 * @param pieceIndex
 * @param defaultCount
 * @returns {number}
 */
function getCountCommentBy(postId, pieceIndex, defaultCount) {
  var key = postId + "_" + pieceIndex;
  var countComment = window.countComments && typeof window.countComments[ key ] !== "undefined"
    ? window.countComments[ key ]
    : defaultCount;

  if (!countComment)
    countComment = 0;

  return countComment;
}

/**
 * Устанавливаем у ссылки открытия комментов к фраза текс: "Обсудить фразу" или "комментарии (4)"
 * @param el
 * @param isOpen
 * @param postId
 * @param pieceIndex
 */
function setTitleToOpenLinkComment(el, isOpen, postId, pieceIndex) {
  var blockCommentWithOtherData = $(el).closest(".j-comment-block-react");
  var title, numCommentEl;

  if (blockCommentWithOtherData.length) {
    blockCommentWithOtherData = blockCommentWithOtherData.get(0);
    title = blockCommentWithOtherData.querySelector(".j-comment_block_title span");
    numCommentEl = blockCommentWithOtherData.querySelector(".j-comment_amount");
  }

  if (!blockCommentWithOtherData)
    return;

  var classForCount = blockCommentWithOtherData.querySelector(".j-container-comment-copy").getAttribute("data-added_class_for_count");

  //кол-во комментов у этой фразы
  var newCount = isOpen ? 0 : getCountCommentBy(postId, pieceIndex, 0);

  if (!isOpen) {
    if (title) {
      title.innerHTML = newCount <= 0
        ? localizeGetText({ l: 'discuss_the_phrase', v: 'обсудить фразу', n: 'comments', t: 'first' })
        : localizeGetText({l:'questions',v:'вопросы',t:'first',n:'comments'});
    }

    if (newCount > 0) {
      if (numCommentEl)
        numCommentEl.innerHTML = newCount;
      else {
        var span = document.createElement('span');
        var spanWithNum = document.createElement('span');

        //если не нужно изменять дизайн кол-ва комментов
        span.className = (classForCount ? classForCount : "b-phrases_block__title_info") + " j-comment_block_info";
        spanWithNum.className = (classForCount ? "" : "b-phrases_block__comment_amount") + " j-comment_amount";

        spanWithNum.innerHTML = newCount;
        span.appendChild(spanWithNum);
        var linkOpenComment = blockCommentWithOtherData.querySelector(".j-link-open-comment-for-phrase-react");

        if (linkOpenComment)
          linkOpenComment.appendChild(span);
      }
    }
  }
  else {
    if (title)
      title.innerHTML = localizeGetText({l:'hide_answers',v:'скрыть вопросы',t:'first', n:'comments'});
    if (numCommentEl)
      numCommentEl.parentNode.parentNode.removeChild(numCommentEl.parentNode);
  }
}

/**
 * Открываем/скрываем комменты для фраз
 * @param el
 * @param isOpen
 * @param postId
 * @param pieceIndex
 */
function setOpenedRemoved(el, isOpen, postId, pieceIndex) {
  if (!el)
    return false;

  if (!isOpen) {
    var elMainBlock = $(el);
    if (elMainBlock && elMainBlock.offset() && !elMainBlock.hasClass("j-no-scroll-comment"))
      $('html, body').animate({ scrollTop: elMainBlock.offset().top - 300 }, 500);
  }

  setTitleToOpenLinkComment(el, isOpen, postId, pieceIndex);

  el.setAttribute("data-is_opened", !isOpen ? "0" : "1");
  //скрываем/показываем бэкграунд комментов
  el.classList[ !isOpen ? 'remove' : 'add' ]("opened");
  var type = !isOpen ? 'commentsBlock:close' : 'commentsBlock:open';
  document.dispatchEvent(new CustomEvent(type + postId + '_' + pieceIndex));
  //ивент для тех, кто точно не знает, какое post_id и pieceIndex
  document.dispatchEvent(new CustomEvent(type, {
    detail: {
      postId: postId,
      pieceIndex: pieceIndex
    }
  }));
}

/**
 * Около формы ввода коммента выводим надписи
 * "Комментарий к фразы":
 * "Перевод фразы":
 *
 * @param parent
 * @returns {{phraseEn: string, phraseRu: string}}
 */
function getPhraseText(parent) {
  if (!parent) {
    return {
      phraseEn: '',
      phraseRu: ''
    };
  }
  var phraseForCommentBlock = parent.querySelector(".j-phrase_for_comment");
  var phraseRu = "", phraseEn = "";
  if (phraseForCommentBlock) {
    var phraseEnBlock = phraseForCommentBlock.querySelector(".j-phrase_text_en");
    var phraseRuBlock = phraseForCommentBlock.querySelector(".j-phrase_text_ru");

    if (phraseEnBlock) phraseEn = phraseEnBlock.innerText;
    if (phraseRuBlock) phraseRu = phraseRuBlock.innerText;
  }

  return {
    phraseEn: phraseEn,
    phraseRu: phraseRu
  };
}

/**
 * Проверяем хэш на наличие #piece=<num> и нажимам на открытие комментов у нужной фразы
 * @param currentPiece
 * @returns {boolean}
 */
function checkHashComment(currentPiece) {
  var hash = location.hash.replace("#", "");
  if (hash.length <= 0 || !/^piece\=[\d]+$/i.test(hash))
    return false;

  var piece = +hash.replace("piece=", "") - 1;
  if (currentPiece && currentPiece != piece)
    return false;

  var block = $(".j-comment-block-react[data-piece_index=" + piece + "]");
  if (block.length) {
    $("html, body").animate({ scrollTop: block.offset().top - 50 + "px" }, { duration: 500 });
    block.find(".j-link-open-comment-for-phrase-react, .j-comment_block_title").click();
  }
}

/**
 * Дизейблим форму ввода, если бесплатник
 * @param self
 */
function doDisable(self) {
  $(self).addClass("is-disabled").prop('disabled', true).parent().find(".j-explain-buy-comment").show();
  $(self).closest(".j-form-for-add-comment-phrase").find("button").hide();
}

$(document).ready(function () {
  factoryCommentsContainer.init();

  var body = $("body");
  body.on('click', '.j-link-open-comment-for-phrase-react', function (e) {
    e && e.preventDefault();

    $(this).closest(".j-comment-block-react").find(".j-container-comment-copy").addClass("need-load");
    //ищем родителя кнопки
    var parent = $(this).closest(".j-comment-block-react");
    if (parent.length) {
      var postId = CommentContainer.num(parent.attr("data-post_id"), 0);
      var pieceIndex = CommentContainer.num(parent.attr("data-piece_index"), -1);
      if (pieceIndex === -1)
        pieceIndex = CommentContainer.num(parent.attr("data-phrase_pos"), 0);

      parent = parent.get(0);
      //ищем в родители место, специальное под рендер комментов
      var placeForComment = parent.querySelector(".j-place-for-comment-phrase-react");
      //если менсто есть, то рендерим его
      if (placeForComment) {
        //если не авторизован, то комменты к фразам запрещаем смотерть
        if (!user.logged_in) {
          show_sign_popup();
          return false;
        }

        var attr = placeForComment.getAttribute("data-is_opened");

        if ([ "0", "1" ].indexOf(attr) !== -1)
          setOpenedRemoved(placeForComment, attr === "0", postId, pieceIndex);
        else
          setOpenedRemoved(placeForComment, true, postId, pieceIndex);
      }
    }

    factoryCommentsContainer.init();
  });

});

//отлавливаем загрузку нового экрана у тичера, чтобы комменты инициализировать
document.addEventListener('Teacher.LessonLoaded', function () {
  factoryCommentsContainer.init();
});