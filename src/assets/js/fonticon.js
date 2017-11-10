(function(window){var svgSprite='<svg><symbol id="icon-star" viewBox="0 0 1123 1024"><path d="M561.450243 0L746.510457 321.80801398 1122.90273799 391.138456 860.890147 659.35534 908.444759 1023.99887401 561.450243 867.942323 214.447845 1023.99887401 262.008087 659.35534 0 391.138456 376.387777 321.80801398 561.450243 0Z" fill="#FFAE02" ></path></symbol><symbol id="icon-jiangbei" viewBox="0 0 1024 1024"><path d="M754.92010667 189.59531555h137.84405333a55.7056 55.7056 0 0 1 55.41432889 46.82183112 55.26869333 55.26869333 0 0 1-1.82044444 25.92312888c-23.66577778 75.87612445-71.65269333 144.61610667-134.0575289 200.17607111-77.55093333 68.95843555-146.14528 82.93944889-222.60394666 137.91687111 5.53415111 7.57304889 8.66531555 16.01991111 8.66531556 24.97649778 0 22.06378667-18.93262222 41.06922667-46.45774223 50.09863112 1.67480889 31.23882667 5.75260445 63.78837333 13.54410667 95.53692445 19.07825778 76.82275555 61.74947555 147.52881778 152.11633778 169.59260443a25.70467555 25.70467555 0 0 1-6.04387556 50.82680889H319.90670222a25.77749333 25.77749333 0 0 1-6.99050667-50.82680889c90.43968-22.06378667 133.03808-92.76984889 152.11633778-169.59260443 7.86432-31.74855111 11.79648-64.44373333 13.54410667-95.60974224-27.45230222-9.17504-46.38492445-28.25329778-46.38492445-50.09863111 0-10.12167111 4.00497778-19.58798222 10.99548445-27.67075555-73.03623111-54.46769778-140.46549333-65.68163555-218.67178667-135.22261333-62.47765333-55.55996445-110.46456889-124.29994667-134.13034666-200.17607112a56.14250667 56.14250667 0 0 1 8.37404444-49.80736 55.7056 55.7056 0 0 1 45.14702222-22.93759999h137.84405334c-0.94663111-17.18499555-1.52917333-34.22435555-1.96608-50.89962667v-0.87381334a38.59342222 38.59342222 0 0 1 38.66624-38.66624h199.8848V99.00999999h199.95761778v0.14563556h0.9466311c21.26279111 0.50972445 38.22933333 18.20444445 37.7196089 39.54005333-0.58254222 16.67527111-1.09226667 33.64181333-2.03889778 50.89962667z m-68.59434667 298.84416001a505.86510222 505.86510222 0 0 0 91.53194667-64.66218667c55.7056-49.51608889 98.37681778-110.31893333 119.20270222-176.87438223a6.99050667 6.99050667 0 0 0 0.14563556-2.03889778 5.46133333 5.46133333 0 0 0-0.94663112-1.82044443 3.34961778 3.34961778 0 0 0-1.52917333-1.38353779 4.58752 4.58752 0 0 0-2.03889778-0.36408889h-141.41212444c-5.09724445 58.18140445-14.78200889 117.45507555-33.05927111 172.65095111a448.9216 448.9216 0 0 1-31.89418667 74.49258668zM285.39107555 241.29593777H143.90613333c-0.94663111 0-1.67480889 0.07281778-2.11171555 0.36408889a3.56807111 3.56807111 0 0 0-1.38353778 1.38353779c-0.50972445 0.65536-0.87381333 1.31072-0.94663111 1.82044443s0 1.23790222 0.21845333 2.03889778c20.75306667 66.55544889 63.49710222 127.35829333 119.20270223 176.87438223 27.59793778 24.61240889 58.47267555 46.38492445 91.45912888 64.66218667a448.63032889 448.63032889 0 0 1-31.82136888-74.49258668c-18.35008-55.19587555-27.96202667-114.46954667-33.1320889-172.65095111z" fill="#FFAE02" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)
