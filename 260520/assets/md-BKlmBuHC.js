import{L as V,f as K,o as F,r as $,p as N_,O as S_,i as g_,b as l_,g as s,k as L_,n as x_,t as p_,aK as M_,F as v_,d as o_,a2 as H_,z as W_,j as y_,w as O_,e as j,ad as i_,v as P_,x as w_,T as r_}from"./modules/vue-D7i0zGR_.js";import{u as k,f as D_}from"./slidev/context-DmvrkWN8.js";import{_ as B_}from"./index-DCqEBHe7.js";import"./modules/shiki-0h5qVANN.js";const F_={__name:"AutoSlide",props:{timeList:{type:Array,default:()=>[]},debug:{type:Boolean,default:!1}},setup(I){const{$nav:C}=k(),m=I,c=m.timeList,R=m.debug;function f(d){return new Promise(o=>{setTimeout(o,d)})}async function g(d,o){o>=d.length||(await f(d[o]*1e3),R&&console.log(`第${o+1}次点击，等待时长`,d[o],d,o),C.value.next(),g(d,o+1))}async function p(d,o){if(!(o>d.length)){if(Array.isArray(d[o-1])){const[N,...H]=d[o-1];typeof N=="number"&&!isNaN(N)&&(await f(N*1e3),R&&console.log("翻到页码",o+1,"等待时长",N,d,o-1,N,H),C.value.go(o+1),await g(H,0),await p(d,o+1));return}await f(d[o-1]*1e3),R&&console.log("翻到页码",o+1,"等待时长",d[o-1]),C.value.go(o+1),p(d,o+1)}}return V(()=>p(c,1).catch(console.error)),(d,o)=>(F(),K("div"))}},b_={__name:"MovingWatermark",props:{colorCls:{type:String,default:"bg-gradient-to-r from-[#2d644b] to-green-600 bg-clip-text text-transparent"},opacity:{type:Number,default:1},text:{type:String,default:"Hans码数理哲"}},setup(I){k();const C=$(null),m=$(null),c=$({x:0,y:0}),R=$({x:0,y:0}),f=$({width:0,height:0}),g=()=>{if(!C.value)return;const o=document.getElementById("slide-content");let N=1;if(o){const x=getComputedStyle(o).getPropertyValue("--slidev-slide-scale");x&&(N=parseFloat(x)||1)}const H=C.value.getBoundingClientRect();f.value.width=H.width/N,f.value.height=H.height/N},p=()=>{(f.value.width===0||f.value.height===0)&&g();const o=m.value?.offsetWidth||60,N=m.value?.offsetHeight||20;c.value={x:Math.random()*(f.value.width-o)+o/2,y:Math.random()*(f.value.height-N)+N/2};const H=1.2+Math.random()*.6,x=(1/12+Math.random()/3)*Math.PI;R.value={x:Math.cos(x)*H,y:Math.sin(x)*H}},d=()=>{const o=m.value?.offsetWidth||60,N=m.value?.offsetHeight||20;c.value.x+=R.value.x,c.value.y+=R.value.y,(c.value.x<=0||c.value.x>=f.value.width-o)&&(R.value.x=-R.value.x,c.value.x=Math.max(0,Math.min(f.value.width-o,c.value.x))),(c.value.y<=0||c.value.y>=f.value.height-N)&&(R.value.y=-R.value.y,c.value.y=Math.max(0,Math.min(f.value.height-N,c.value.y))),requestAnimationFrame(d)};return V(async()=>{await N_(),g(),p(),requestAnimationFrame(d),window.addEventListener("resize",g)}),S_(()=>{window.removeEventListener("resize",g)}),(o,N)=>(F(),K(v_,null,[g_(" teleport 让 position: fixed 能够重新生效 "),(F(),l_(M_,{to:"#slide-content"},[s("div",{ref_key:"containerRef",ref:C,class:"fixed inset-0 pointer-events-none overflow-hidden z-50"},[s("p",{ref_key:"textRef",ref:m,class:x_(["absolute select-none !m-0 truncate",I.colorCls]),style:L_({left:`${c.value.x}px`,top:`${c.value.y}px`,fontSize:"20px",opacity:I.opacity,userSelect:"none",pointerEvents:"none"})},p_(I.text),7)],512)]))],2112))}},U_=o_({__name:"SlidevPageRedirector",setup(I){const{$nav:C}=k();function m(c){const R=Array.isArray(c)?c[0]:c;return Number(R)}return V(()=>{const c=H_(),R=c.query.page;if(!R)return;const f=c.query.clicks,g=m(R),p=m(f);if(!Number.isInteger(g)||g<=0){console.error("页码不合法，请输入正整数");return}C.value.go(g),!(!Number.isInteger(p)||p<0)&&console.warn("拿到 clicks 参数：",p,"，但我暂未找到正确跳转到相应点击次数的方法qwq")}),(c,R)=>(F(),K("div"))}});function T_(I){return I.startsWith("/")?"/slidev-math-videos/260520/"+I.slice(1):I}function $_(I,C=!1){const m=I&&["#","rgb","hsl"].some(R=>I.indexOf(R)===0),c={background:m?I:void 0,color:I&&!m?"white":void 0,backgroundImage:m?void 0:I?C?`linear-gradient(#0005, #0008), url(${T_(I)})`:`url("${T_(I)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return c.background||delete c.background,c}const G_={FULL_WIDTH:0,FITTING:1,SMUSHING:2,CONTROLLED_SMUSHING:3};class k_{constructor(){this.comment="",this.numChars=0,this.options={}}}const X=["1Row","3-D","3D Diagonal","3D-ASCII","3x5","4Max","5 Line Oblique","AMC 3 Line","AMC 3 Liv1","AMC AAA01","AMC Neko","AMC Razor","AMC Razor2","AMC Slash","AMC Slider","AMC Thin","AMC Tubes","AMC Untitled","ANSI Compact","ANSI Regular","ANSI Shadow","ASCII 12","ASCII 9","ASCII New Roman","Acrobatic","Alligator","Alligator2","Alpha","Alphabet","Arrows","Avatar","B1FF","Babyface Lame","Babyface Leet","Banner","Banner3-D","Banner3","Banner4","Barbwire","Basic","Bear","Bell","Benjamin","Big ASCII 12","Big ASCII 9","Big Chief","Big Money-ne","Big Money-nw","Big Money-se","Big Money-sw","Big Mono 12","Big Mono 9","Big","Bigfig","Binary","Block","Blocks","Bloody","BlurVision ASCII","Bolger","Braced","Bright","Broadway KB","Broadway","Bubble","Bulbhead","Caligraphy","Caligraphy2","Calvin S","Cards","Catwalk","Chiseled","Chunky","Circle","Classy","Coder Mini","Coinstak","Cola","Colossal","Computer","Contessa","Contrast","Cosmike","Cosmike2","Crawford","Crawford2","Crazy","Cricket","Cursive","Cyberlarge","Cybermedium","Cybersmall","Cygnet","DANC4","DOS Rebel","DWhistled","Dancing Font","Decimal","Def Leppard","Delta Corps Priest 1","DiamFont","Diamond","Diet Cola","Digital","Doh","Doom","Dot Matrix","Double Shorts","Double","Dr Pepper","Efti Chess","Efti Font","Efti Italic","Efti Piti","Efti Robot","Efti Wall","Efti Water","Electronic","Elite","Emboss 2","Emboss","Epic","Fender","Filter","Fire Font-k","Fire Font-s","Flipped","Flower Power","Font Font","Four Tops","Fraktur","Fun Face","Fun Faces","Future Smooth","Future Thin","Future","Fuzzy","Georgi16","Georgia11","Ghost","Ghoulish","Glenyn","Goofy","Gothic","Graceful","Gradient","Graffiti","Greek","Heart Left","Heart Right","Henry 3D","Hex","Hieroglyphs","Hollywood","Horizontal Left","Horizontal Right","ICL-1900","Impossible","Invita","Isometric1","Isometric2","Isometric3","Isometric4","Italic","Ivrit","JS Block Letters","JS Bracket Letters","JS Capital Curves","JS Cursive","JS Stick Letters","Jacky","Jazmine","Jerusalem","Katakana","Kban","Keyboard","Knob","Konto Slant","Konto","LCD","Larry 3D 2","Larry 3D","Lean","Letter","Letters","Lil Devil","Line Blocks","Linux","Lockergnome","Madrid","Marquee","Maxfour","Merlin1","Merlin2","Mike","Mini","Mirror","Mnemonic","Modular","Mono 12","Mono 9","Morse","Morse2","Moscow","Mshebrew210","Muzzle","NScript","NT Greek","NV Script","Nancyj-Fancy","Nancyj-Improved","Nancyj-Underlined","Nancyj","Nipples","O8","OS2","Octal","Ogre","Old Banner","Pagga","Patorjk's Cheese","Patorjk-HeX","Pawp","Peaks Slant","Peaks","Pebbles","Pepper","Poison","Puffy","Puzzle","Pyramid","Rammstein","Rebel","Rectangles","Red Phoenix","Relief","Relief2","Reverse","Roman","Rot13","Rotated","Rounded","Rowan Cap","Rozzo","RubiFont","Runic","Runyc","S Blood","SL Script","Santa Clara","Script","Serifcap","Shaded Blocky","Shadow","Shimrod","Short","Slant Relief","Slant","Slide","Small ASCII 12","Small ASCII 9","Small Block","Small Braille","Small Caps","Small Isometric1","Small Keyboard","Small Mono 12","Small Mono 9","Small Poison","Small Script","Small Shadow","Small Slant","Small Tengwar","Small","Soft","Speed","Spliff","Stacey","Stampate","Stampatello","Standard","Star Strips","Star Wars","Stellar","Stforek","Stick Letters","Stop","Straight","Stronger Than All","Sub-Zero","Swamp Land","Swan","Sweet","THIS","Tanja","Tengwar","Term","Terrace","Test1","The Edge","Thick","Thin","Thorned","Three Point","Ticks Slant","Ticks","Tiles","Tinker-Toy","Tmplr","Tombstone","Train","Trek","Tsalagi","Tubular","Twisted","Two Point","USA Flag","Univers","Upside Down Text","Varsity","Wavescape","Wavy","Weird","Wet Letter","Whimsy","WideTerm","Wow","miniwi"],a_={"ANSI-Compact":"ANSI Compact"},G=I=>a_[I]?a_[I]:I;function V_(I){return/[.*+?^${}()|[\]\\]/.test(I)?"\\"+I:I}const s_=(()=>{const{FULL_WIDTH:I=0,FITTING:C,SMUSHING:m,CONTROLLED_SMUSHING:c}=G_,R={},f={font:"Standard",fontPath:"./fonts",fetchFontIfMissing:!0};function g(t,n,_){const e=V_(t.trim().slice(-1))||"@",i=n===_-1?new RegExp(e+e+"?\\s*$"):new RegExp(e+"\\s*$");return t.replace(i,"")}function p(t=-1,n=null){let _={},e,i=[[16384,"vLayout",m],[8192,"vLayout",C],[4096,"vRule5",!0],[2048,"vRule4",!0],[1024,"vRule3",!0],[512,"vRule2",!0],[256,"vRule1",!0],[128,"hLayout",m],[64,"hLayout",C],[32,"hRule6",!0],[16,"hRule5",!0],[8,"hRule4",!0],[4,"hRule3",!0],[2,"hRule2",!0],[1,"hRule1",!0]];e=n!==null?n:t;for(const[r,T,a]of i)e>=r?(e-=r,_[T]===void 0&&(_[T]=a)):T!=="vLayout"&&T!=="hLayout"&&(_[T]=!1);return typeof _.hLayout>"u"?t===0?_.hLayout=C:t===-1?_.hLayout=I:_.hRule1||_.hRule2||_.hRule3||_.hRule4||_.hRule5||_.hRule6?_.hLayout=c:_.hLayout=m:_.hLayout===m&&(_.hRule1||_.hRule2||_.hRule3||_.hRule4||_.hRule5||_.hRule6)&&(_.hLayout=c),typeof _.vLayout>"u"?_.vRule1||_.vRule2||_.vRule3||_.vRule4||_.vRule5?_.vLayout=c:_.vLayout=I:_.vLayout===m&&(_.vRule1||_.vRule2||_.vRule3||_.vRule4||_.vRule5)&&(_.vLayout=c),_}function d(t,n,_=""){return t===n&&t!==_?t:!1}function o(t,n){let _="|/\\[]{}()<>";if(t==="_"){if(_.indexOf(n)!==-1)return n}else if(n==="_"&&_.indexOf(t)!==-1)return t;return!1}function N(t,n){let _="| /\\ [] {} () <>",e=_.indexOf(t),i=_.indexOf(n);if(e!==-1&&i!==-1&&e!==i&&Math.abs(e-i)!==1){const r=Math.max(e,i),T=r+1;return _.substring(r,T)}return!1}function H(t,n){let _="[] {} ()",e=_.indexOf(t),i=_.indexOf(n);return e!==-1&&i!==-1&&Math.abs(e-i)<=1?"|":!1}function x(t,n){return{"/\\":"|","\\/":"Y","><":"X"}[t+n]||!1}function J(t,n,_=""){return t===_&&n===_?_:!1}function Y(t,n){return t===n?t:!1}function q(t,n){return o(t,n)}function Z(t,n){return N(t,n)}function Q(t,n){return t==="-"&&n==="_"||t==="_"&&n==="-"?"=":!1}function __(t,n){return t==="|"&&n==="|"?"|":!1}function w(t,n,_){return n===" "||n===""||n===_&&t!==" "?t:n}function u_(t,n,_){if(_.fittingRules&&_.fittingRules.vLayout===I)return"invalid";let e,i=Math.min(t.length,n.length),r,T,a=!1,l;if(i===0)return"invalid";for(e=0;e<i;e++)if(r=t.substring(e,e+1),T=n.substring(e,e+1),r!==" "&&T!==" "){if(_.fittingRules&&_.fittingRules.vLayout===C)return"invalid";if(_.fittingRules&&_.fittingRules.vLayout===m)return"end";if(__(r,T)){a=a||!1;continue}if(l=!1,l=_.fittingRules&&_.fittingRules.vRule1?Y(r,T):l,l=!l&&_.fittingRules&&_.fittingRules.vRule2?q(r,T):l,l=!l&&_.fittingRules&&_.fittingRules.vRule3?Z(r,T):l,l=!l&&_.fittingRules&&_.fittingRules.vRule4?Q(r,T):l,a=!0,!l)return"invalid"}return a?"end":"valid"}function A_(t,n,_){let e=t.length,i=t.length,r,T,a,l=1,L,A,u;for(;l<=e;){for(r=t.slice(Math.max(0,i-l),i),T=n.slice(0,Math.min(e,l)),a=T.length,u="",L=0;L<a;L++)if(A=u_(r[L],T[L],_),A==="end")u=A;else if(A==="invalid"){u=A;break}else u===""&&(u="valid");if(u==="invalid"){l--;break}if(u==="end")break;u==="valid"&&l++}return Math.min(e,l)}function E_(t,n,_){let e,i=Math.min(t.length,n.length),r,T,a="",l;const L=_.fittingRules||{};for(e=0;e<i;e++)r=t.substring(e,e+1),T=n.substring(e,e+1),r!==" "&&T!==" "?L.vLayout===C||L.vLayout===m?a+=w(r,T):(l=!1,l=L.vRule5?__(r,T):l,l=!l&&L.vRule1?Y(r,T):l,l=!l&&L.vRule2?q(r,T):l,l=!l&&L.vRule3?Z(r,T):l,l=!l&&L.vRule4?Q(r,T):l,a+=l):a+=w(r,T);return a}function I_(t,n,_,e){let i=t.length,r=n.length,T=t.slice(0,Math.max(0,i-_)),a=t.slice(Math.max(0,i-_),i),l=n.slice(0,Math.min(_,r)),L,A,u,E=[],h;for(A=a.length,L=0;L<A;L++)L>=r?u=a[L]:u=E_(a[L],l[L],e),E.push(u);return h=n.slice(Math.min(_,r),r),[...T,...E,...h]}function e_(t,n){const _=" ".repeat(n);return t.map(e=>e+_)}function c_(t,n,_){let e=t[0].length,i=n[0].length,r;return e>i?n=e_(n,e-i):i>e&&(t=e_(t,i-e)),r=A_(t,n,_),I_(t,n,r,_)}function R_(t,n,_){const e=_.fittingRules||{};if(e.hLayout===I)return 0;let i,r=t.length,T=n.length,a=r,l=1,L=!1,A,u,E,h;if(r===0)return 0;_:for(;l<=a;){const y=r-l;for(A=t.substring(y,y+l),u=n.substring(0,Math.min(l,T)),i=0;i<Math.min(l,T);i++)if(E=A.substring(i,i+1),h=u.substring(i,i+1),E!==" "&&h!==" "){if(e.hLayout===C){l=l-1;break _}else if(e.hLayout===m){(E===_.hardBlank||h===_.hardBlank)&&(l=l-1);break _}else if(L=!0,!(e.hRule1&&d(E,h,_.hardBlank)||e.hRule2&&o(E,h)||e.hRule3&&N(E,h)||e.hRule4&&H(E,h)||e.hRule5&&x(E,h)||e.hRule6&&J(E,h,_.hardBlank))){l=l-1;break _}}if(L)break;l++}return Math.min(a,l)}function z(t,n,_,e){let i,r,T=[],a,l,L,A,u,E,h,y;const M=e.fittingRules||{};if(typeof e.height!="number")throw new Error("height is not defined.");for(i=0;i<e.height;i++){h=t[i],y=n[i],u=h.length,E=y.length,a=u-_,l=h.slice(0,Math.max(0,a)),L="";const U=Math.max(0,u-_);let O=h.substring(U,U+_),P=y.substring(0,Math.min(_,E));for(r=0;r<_;r++){let W=r<u?O.substring(r,r+1):" ",v=r<E?P.substring(r,r+1):" ";if(W!==" "&&v!==" ")if(M.hLayout===C||M.hLayout===m)L+=w(W,v,e.hardBlank);else{const C_=M.hRule1&&d(W,v,e.hardBlank)||M.hRule2&&o(W,v)||M.hRule3&&N(W,v)||M.hRule4&&H(W,v)||M.hRule5&&x(W,v)||M.hRule6&&J(W,v,e.hardBlank)||w(W,v,e.hardBlank);L+=C_}else L+=w(W,v,e.hardBlank)}_>=E?A="":A=y.substring(_,_+Math.max(0,E-_)),T[i]=l+L+A}return T}function D(t){return new Array(t).fill("")}const b=function(t){return Math.max(...t.map(n=>n.length))};function B(t,n,_){return t.reduce(function(e,i){return z(e,i.fig,i.overlap||0,_)},D(n))}function f_(t,n,_){for(let e=t.length-1;e>0;e--){const i=B(t.slice(0,e),n,_);if(b(i)<=_.width)return{outputFigText:i,chars:t.slice(e)}}return{outputFigText:D(n),chars:t}}function h_(t,n,_){let e,i,r=0,T,a,l,L=_.height,A=[],u,E={chars:[],overlap:r},h=[],y,M,U,O,P;if(typeof L!="number")throw new Error("height is not defined.");a=D(L);const W=_.fittingRules||{};for(_.printDirection===1&&(t=t.split("").reverse().join("")),l=t.length,e=0;e<l;e++)if(y=t.substring(e,e+1),M=y.match(/\s/),i=n[y.charCodeAt(0)],O=null,i){if(W.hLayout!==I){for(r=1e4,T=0;T<L;T++)r=Math.min(r,R_(a[T],i[T],_));r=r===1e4?0:r}if(_.width>0&&(_.whitespaceBreak?(U=B(E.chars.concat([{fig:i,overlap:r}]),L,_),O=B(h.concat([{fig:U,overlap:E.overlap}]),L,_),u=b(O)):(O=z(a,i,r,_),u=b(O)),u>=_.width&&e>0&&(_.whitespaceBreak?(a=B(h.slice(0,-1),L,_),h.length>1&&(A.push(a),a=D(L)),h=[]):(A.push(a),a=D(L)))),_.width>0&&_.whitespaceBreak&&((!M||e===l-1)&&E.chars.push({fig:i,overlap:r}),M||e===l-1)){for(P=null;O=B(E.chars,L,_),u=b(O),u>=_.width;)P=f_(E.chars,L,_),E={chars:P.chars},A.push(P.outputFigText);u>0&&(P?h.push({fig:O,overlap:1}):h.push({fig:O,overlap:E.overlap})),M&&(h.push({fig:i,overlap:r}),a=D(L)),e===l-1&&(a=B(h,L,_)),E={chars:[],overlap:r};continue}a=z(a,i,r,_)}return b(a)>0&&A.push(a),_.showHardBlanks||A.forEach(function(v){for(l=v.length,T=0;T<l;T++)v[T]=v[T].replace(new RegExp("\\"+_.hardBlank,"g")," ")}),t===""&&A.length===0&&A.push(new Array(L).fill("")),A}const d_=function(t,n){let _;const e=n.fittingRules||{};if(t==="default")_={hLayout:e.hLayout,hRule1:e.hRule1,hRule2:e.hRule2,hRule3:e.hRule3,hRule4:e.hRule4,hRule5:e.hRule5,hRule6:e.hRule6};else if(t==="full")_={hLayout:I,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(t==="fitted")_={hLayout:C,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(t==="controlled smushing")_={hLayout:c,hRule1:!0,hRule2:!0,hRule3:!0,hRule4:!0,hRule5:!0,hRule6:!0};else if(t==="universal smushing")_={hLayout:m,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else return;return _},m_=function(t,n){let _={};const e=n.fittingRules||{};if(t==="default")_={vLayout:e.vLayout,vRule1:e.vRule1,vRule2:e.vRule2,vRule3:e.vRule3,vRule4:e.vRule4,vRule5:e.vRule5};else if(t==="full")_={vLayout:I,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(t==="fitted")_={vLayout:C,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(t==="controlled smushing")_={vLayout:c,vRule1:!0,vRule2:!0,vRule3:!0,vRule4:!0,vRule5:!0};else if(t==="universal smushing")_={vLayout:m,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else return;return _},t_=function(t,n,_){_=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`);const e=G(t);let i=_.split(`
`),r=[],T,a,l;for(a=i.length,T=0;T<a;T++)r=r.concat(h_(i[T],R[e],n));for(a=r.length,l=r[0],T=1;T<a;T++)l=c_(l,r[T],n);return l?l.join(`
`):""};function n_(t,n){let _;if(typeof structuredClone<"u"?_=structuredClone(t):_=JSON.parse(JSON.stringify(t)),_.showHardBlanks=n.showHardBlanks||!1,_.width=n.width||-1,_.whitespaceBreak=n.whitespaceBreak||!1,n.horizontalLayout){const e=d_(n.horizontalLayout,t);e&&Object.assign(_.fittingRules,e)}if(n.verticalLayout){const e=m_(n.verticalLayout,t);e&&Object.assign(_.fittingRules,e)}return _.printDirection=n.printDirection!==null&&n.printDirection!==void 0?n.printDirection:t.printDirection,_}const S=async function(t,n,_){return S.text(t,n,_)};return S.text=async function(t,n,_){t=t+"";let e,i;typeof n=="function"?(i=n,e={font:f.font}):typeof n=="string"?(e={font:n},i=_):n?(e=n,i=_):(e={font:f.font},i=_);const r=e.font||f.font;try{const T=await S.loadFont(r),a=T?t_(r,n_(T,e),t):"";return i&&i(null,a),a}catch(T){const a=T instanceof Error?T:new Error(String(T));if(i)return i(a),"";throw a}},S.textSync=function(t,n){t=t+"",typeof n=="string"?n={font:n}:n=n||{};const _=n.font||f.font;let e=n_(S.loadFontSync(_),n);return t_(_,e,t)},S.metadata=async function(t,n){t=t+"";try{const _=await S.loadFont(t);if(!_)throw new Error("Error loading font.");const e=G(t),i=R[e]||{},r=[_,i.comment||""];return n&&n(null,_,i.comment),r}catch(_){const e=_ instanceof Error?_:new Error(String(_));if(n)return n(e),null;throw e}},S.defaults=function(t){return t&&typeof t=="object"&&Object.assign(f,t),typeof structuredClone<"u"?structuredClone(f):JSON.parse(JSON.stringify(f))},S.parseFont=function(t,n,_=!0){if(R[t]&&!_)return R[t].options;n=n.replace(/\r\n/g,`
`).replace(/\r/g,`
`);const e=new k_,i=n.split(`
`),r=i.shift();if(!r)throw new Error("Invalid font file: missing header");const T=r.split(" "),a={hardBlank:T[0].substring(5,6),height:parseInt(T[1],10),baseline:parseInt(T[2],10),maxLength:parseInt(T[3],10),oldLayout:parseInt(T[4],10),numCommentLines:parseInt(T[5],10),printDirection:T[6]?parseInt(T[6],10):0,fullLayout:T[7]?parseInt(T[7],10):null,codeTagCount:T[8]?parseInt(T[8],10):null};if((a.hardBlank||"").length!==1||[a.height,a.baseline,a.maxLength,a.oldLayout,a.numCommentLines].some(A=>A==null||isNaN(A)))throw new Error("FIGlet header contains invalid values.");if(a.height==null||a.numCommentLines==null)throw new Error("FIGlet header contains invalid values.");a.fittingRules=p(a.oldLayout,a.fullLayout),e.options=a;const L=[];for(let A=32;A<=126;A++)L.push(A);if(L.push(196,214,220,228,246,252,223),i.length<a.numCommentLines+a.height*L.length)throw new Error(`FIGlet file is missing data. Line length: ${i.length}. Comment lines: ${a.numCommentLines}. Height: ${a.height}. Num chars: ${L.length}.`);for(e.comment=i.splice(0,a.numCommentLines).join(`
`),e.numChars=0;i.length>0&&e.numChars<L.length;){const A=L[e.numChars];e[A]=i.splice(0,a.height);for(let u=0;u<a.height;u++)typeof e[A][u]>"u"?e[A][u]="":e[A][u]=g(e[A][u],u,a.height);e.numChars++}for(;i.length>0;){const A=i.shift();if(!A||A.trim()==="")break;let u=A.split(" ")[0],E;if(/^-?0[xX][0-9a-fA-F]+$/.test(u))E=parseInt(u,16);else if(/^-?0[0-7]+$/.test(u))E=parseInt(u,8);else if(/^-?[0-9]+$/.test(u))E=parseInt(u,10);else throw new Error(`Error parsing data. Invalid data: ${u}`);if(E===-1||E<-2147483648||E>2147483647){const h=E===-1?"The char code -1 is not permitted.":`The char code cannot be ${E<-2147483648?"less than -2147483648":"greater than 2147483647"}.`;throw new Error(`Error parsing data. ${h}`)}e[E]=i.splice(0,a.height);for(let h=0;h<a.height;h++)typeof e[E][h]>"u"?e[E][h]="":e[E][h]=g(e[E][h],h,a.height);e.numChars++}return R[t]=e,a},S.loadedFonts=()=>Object.keys(R),S.clearLoadedFonts=()=>{Object.keys(R).forEach(t=>{delete R[t]})},S.loadFont=async function(t,n){const _=G(t);if(R[_]){const e=R[_].options;return n&&n(null,e),Promise.resolve(e)}try{if(!f.fetchFontIfMissing)throw new Error(`Font is not loaded: ${_}`);const e=await fetch(`${f.fontPath}/${_}.flf`);if(!e.ok)throw new Error(`Network response was not ok: ${e.status}`);const i=await e.text(),r=S.parseFont(_,i);return n&&n(null,r),r}catch(e){const i=e instanceof Error?e:new Error(String(e));if(n)return n(i),null;throw i}},S.loadFontSync=function(t){const n=G(t);if(R[n])return R[n].options;throw new Error("Synchronous font loading is not implemented for the browser, it will only work for fonts already loaded.")},S.preloadFonts=async function(t,n){try{for(const _ of t){const e=G(_),i=await fetch(`${f.fontPath}/${e}.flf`);if(!i.ok)throw new Error(`Failed to preload fonts. Error fetching font: ${e}, status code: ${i.statusText}`);const r=await i.text();S.parseFont(e,r)}n&&n()}catch(_){const e=_ instanceof Error?_:new Error(String(_));if(n){n(e);return}throw _}},S.fonts=function(t){return new Promise(function(n,_){n(X),t&&t(null,X)})},S.fontsSync=function(){return X},S.figFonts=R,S})(),K_=`flf2a$ 6 5 16 15 13 0 24463 229
Standard by Glenn Chappell & Ian Chai 3/93 -- based on Frank's .sig
Includes ISO Latin-1
figlet release 2.1 -- 12 Aug 1994
Modified for figlet 2.2 by John Cowan <cowan@ccil.org>
  to add Latin-{2,3,4,5} support (Unicode U+0100-017F).
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.

Font modified May 20, 2012 by patorjk to add the 0xCA0 character
 $@
 $@
 $@
 $@
 $@
 $@@
  _ @
 | |@
 | |@
 |_|@
 (_)@
    @@
  _ _ @
 ( | )@
  V V @
   $  @
   $  @
      @@
    _  _   @
  _| || |_ @
 |_  ..  _|@
 |_      _|@
   |_||_|  @
           @@
   _  @
  | | @
 / __)@
 \\__ \\@
 (   /@
  |_| @@
  _  __@
 (_)/ /@
   / / @
  / /_ @
 /_/(_)@
       @@
   ___   @
  ( _ )  @
  / _ \\/\\@
 | (_>  <@
  \\___/\\/@
         @@
  _ @
 ( )@
 |/ @
  $ @
  $ @
    @@
   __@
  / /@
 | | @
 | | @
 | | @
  \\_\\@@
 __  @
 \\ \\ @
  | |@
  | |@
  | |@
 /_/ @@
       @
 __/\\__@
 \\    /@
 /_  _\\@
   \\/  @
       @@
        @
    _   @
  _| |_ @
 |_   _|@
   |_|  @
        @@
    @
    @
    @
  _ @
 ( )@
 |/ @@
        @
        @
  _____ @
 |_____|@
    $   @
        @@
    @
    @
    @
  _ @
 (_)@
    @@
     __@
    / /@
   / / @
  / /  @
 /_/   @
       @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
  _ @
 / |@
 | |@
 | |@
 |_|@
    @@
  ____  @
 |___ \\ @
   __) |@
  / __/ @
 |_____|@
        @@
  _____ @
 |___ / @
   |_ \\ @
  ___) |@
 |____/ @
        @@
  _  _   @
 | || |  @
 | || |_ @
 |__   _|@
    |_|  @
         @@
  ____  @
 | ___| @
 |___ \\ @
  ___) |@
 |____/ @
        @@
   __   @
  / /_  @
 | '_ \\ @
 | (_) |@
  \\___/ @
        @@
  _____ @
 |___  |@
    / / @
   / /  @
  /_/   @
        @@
   ___  @
  ( _ ) @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
   ___  @
  / _ \\ @
 | (_) |@
  \\__, |@
    /_/ @
        @@
    @
  _ @
 (_)@
  _ @
 (_)@
    @@
    @
  _ @
 (_)@
  _ @
 ( )@
 |/ @@
   __@
  / /@
 / / @
 \\ \\ @
  \\_\\@
     @@
        @
  _____ @
 |_____|@
 |_____|@
    $   @
        @@
 __  @
 \\ \\ @
  \\ \\@
  / /@
 /_/ @
     @@
  ___ @
 |__ \\@
   / /@
  |_| @
  (_) @
      @@
    ____  @
   / __ \\ @
  / / _\` |@
 | | (_| |@
  \\ \\__,_|@
   \\____/ @@
     _    @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @@
  ____  @
 | __ ) @
 |  _ \\ @
 | |_) |@
 |____/ @
        @@
   ____ @
  / ___|@
 | |    @
 | |___ @
  \\____|@
        @@
  ____  @
 |  _ \\ @
 | | | |@
 | |_| |@
 |____/ @
        @@
  _____ @
 | ____|@
 |  _|  @
 | |___ @
 |_____|@
        @@
  _____ @
 |  ___|@
 | |_   @
 |  _|  @
 |_|    @
        @@
   ____ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
  _   _ @
 | | | |@
 | |_| |@
 |  _  |@
 |_| |_|@
        @@
  ___ @
 |_ _|@
  | | @
  | | @
 |___|@
      @@
      _ @
     | |@
  _  | |@
 | |_| |@
  \\___/ @
        @@
  _  __@
 | |/ /@
 | ' / @
 | . \\ @
 |_|\\_\\@
       @@
  _     @
 | |    @
 | |    @
 | |___ @
 |_____|@
        @@
  __  __ @
 |  \\/  |@
 | |\\/| |@
 | |  | |@
 |_|  |_|@
         @@
  _   _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
  ____  @
 |  _ \\ @
 | |_) |@
 |  __/ @
 |_|    @
        @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\__\\_\\@
        @@
  ____  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
        @@
  ____  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
  _____ @
 |_   _|@
   | |  @
   | |  @
   |_|  @
        @@
  _   _ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @@
 __     __@
 \\ \\   / /@
  \\ \\ / / @
   \\ V /  @
    \\_/   @
          @@
 __        __@
 \\ \\      / /@
  \\ \\ /\\ / / @
   \\ V  V /  @
    \\_/\\_/   @
             @@
 __  __@
 \\ \\/ /@
  \\  / @
  /  \\ @
 /_/\\_\\@
       @@
 __   __@
 \\ \\ / /@
  \\ V / @
   | |  @
   |_|  @
        @@
  _____@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
  __ @
 | _|@
 | | @
 | | @
 | | @
 |__|@@
 __    @
 \\ \\   @
  \\ \\  @
   \\ \\ @
    \\_\\@
       @@
  __ @
 |_ |@
  | |@
  | |@
  | |@
 |__|@@
  /\\ @
 |/\\|@
   $ @
   $ @
   $ @
     @@
        @
        @
        @
        @
  _____ @
 |_____|@@
  _ @
 ( )@
  \\|@
  $ @
  $ @
    @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
  _     @
 | |__  @
 | '_ \\ @
 | |_) |@
 |_.__/ @
        @@
       @
   ___ @
  / __|@
 | (__ @
  \\___|@
       @@
      _ @
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
       @
   ___ @
  / _ \\@
 |  __/@
  \\___|@
       @@
   __ @
  / _|@
 | |_ @
 |  _|@
 |_|  @
      @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
  _     @
 | |__  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
  _ @
 (_)@
 | |@
 | |@
 |_|@
    @@
    _ @
   (_)@
   | |@
   | |@
  _/ |@
 |__/ @@
  _    @
 | | __@
 | |/ /@
 |   < @
 |_|\\_\\@
       @@
  _ @
 | |@
 | |@
 | |@
 |_|@
    @@
            @
  _ __ ___  @
 | '_ \` _ \\ @
 | | | | | |@
 |_| |_| |_|@
            @@
        @
  _ __  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
        @
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
        @
  _ __  @
 | '_ \\ @
 | |_) |@
 | .__/ @
 |_|    @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
     |_|@@
       @
  _ __ @
 | '__|@
 | |   @
 |_|   @
       @@
      @
  ___ @
 / __|@
 \\__ \\@
 |___/@
      @@
  _   @
 | |_ @
 | __|@
 | |_ @
  \\__|@
      @@
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
        @
 __   __@
 \\ \\ / /@
  \\ V / @
   \\_/  @
        @@
           @
 __      __@
 \\ \\ /\\ / /@
  \\ V  V / @
   \\_/\\_/  @
           @@
       @
 __  __@
 \\ \\/ /@
  >  < @
 /_/\\_\\@
       @@
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
      @
  ____@
 |_  /@
  / / @
 /___|@
      @@
    __@
   / /@
  | | @
 < <  @
  | | @
   \\_\\@@
  _ @
 | |@
 | |@
 | |@
 | |@
 |_|@@
 __   @
 \\ \\  @
  | | @
   > >@
  | | @
 /_/  @@
  /\\/|@
 |/\\/ @
   $  @
   $  @
   $  @
      @@
  _   _ @
 (_)_(_)@
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
  _   _ @
 (_)_(_)@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\___/ @
        @@
  _   _ @
 (_)_(_)@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
  _   _ @
 (_)_(_)@
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
   ___ @
  / _ \\@
 | |/ /@
 | |\\ \\@
 | ||_/@
 |_|   @@
160  NO-BREAK SPACE
 $@
 $@
 $@
 $@
 $@
 $@@
161  INVERTED EXCLAMATION MARK
  _ @
 (_)@
 | |@
 | |@
 |_|@
    @@
162  CENT SIGN
    _  @
   | | @
  / __)@
 | (__ @
  \\   )@
   |_| @@
163  POUND SIGN
    ___  @
   / ,_\\ @
 _| |_   @
  | |___ @
 (_,____|@
         @@
164  CURRENCY SIGN
 /\\___/\\@
 \\  _  /@
 | (_) |@
 / ___ \\@
 \\/   \\/@
        @@
165  YEN SIGN
  __ __ @
  \\ V / @
 |__ __|@
 |__ __|@
   |_|  @
        @@
166  BROKEN BAR
  _ @
 | |@
 |_|@
  _ @
 | |@
 |_|@@
167  SECTION SIGN
    __ @
  _/ _)@
 / \\ \\ @
 \\ \\\\ \\@
  \\ \\_/@
 (__/  @@
168  DIAERESIS
  _   _ @
 (_) (_)@
  $   $ @
  $   $ @
  $   $ @
        @@
169  COPYRIGHT SIGN
    _____   @
   / ___ \\  @
  / / __| \\ @
 | | (__   |@
  \\ \\___| / @
   \\_____/  @@
170  FEMININE ORDINAL INDICATOR
  __ _ @
 / _\` |@
 \\__,_|@
 |____|@
    $  @
       @@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
   ____@
  / / /@
 / / / @
 \\ \\ \\ @
  \\_\\_\\@
       @@
172  NOT SIGN
        @
  _____ @
 |___  |@
     |_|@
    $   @
        @@
173  SOFT HYPHEN
       @
       @
  ____ @
 |____|@
    $  @
       @@
174  REGISTERED SIGN
    _____   @
   / ___ \\  @
  / | _ \\ \\ @
 |  |   /  |@
  \\ |_|_\\ / @
   \\_____/  @@
175  MACRON
  _____ @
 |_____|@
    $   @
    $   @
    $   @
        @@
176  DEGREE SIGN
   __  @
  /  \\ @
 | () |@
  \\__/ @
    $  @
       @@
177  PLUS-MINUS SIGN
    _   @
  _| |_ @
 |_   _|@
  _|_|_ @
 |_____|@
        @@
178  SUPERSCRIPT TWO
  ___ @
 |_  )@
  / / @
 /___|@
   $  @
      @@
179  SUPERSCRIPT THREE
  ____@
 |__ /@
  |_ \\@
 |___/@
   $  @
      @@
180  ACUTE ACCENT
  __@
 /_/@
  $ @
  $ @
  $ @
    @@
181  MICRO SIGN
        @
  _   _ @
 | | | |@
 | |_| |@
 | ._,_|@
 |_|    @@
182  PILCROW SIGN
   _____ @
  /     |@
 | (| | |@
  \\__ | |@
    |_|_|@
         @@
183  MIDDLE DOT
    @
  _ @
 (_)@
  $ @
  $ @
    @@
184  CEDILLA
    @
    @
    @
    @
  _ @
 )_)@@
185  SUPERSCRIPT ONE
  _ @
 / |@
 | |@
 |_|@
  $ @
    @@
186  MASCULINE ORDINAL INDICATOR
  ___ @
 / _ \\@
 \\___/@
 |___|@
   $  @
      @@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
 ____  @
 \\ \\ \\ @
  \\ \\ \\@
  / / /@
 /_/_/ @
       @@
188  VULGAR FRACTION ONE QUARTER
  _   __    @
 / | / / _  @
 | |/ / | | @
 |_/ /|_  _|@
  /_/   |_| @
            @@
189  VULGAR FRACTION ONE HALF
  _   __   @
 / | / /__ @
 | |/ /_  )@
 |_/ / / / @
  /_/ /___|@
           @@
190  VULGAR FRACTION THREE QUARTERS
  ____  __    @
 |__ / / / _  @
  |_ \\/ / | | @
 |___/ /|_  _|@
    /_/   |_| @
              @@
191  INVERTED QUESTION MARK
   _  @
  (_) @
  | | @
 / /_ @
 \\___|@
      @@
192  LATIN CAPITAL LETTER A WITH GRAVE
   __   @
   \\_\\  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
193  LATIN CAPITAL LETTER A WITH ACUTE
    __  @
   /_/  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
195  LATIN CAPITAL LETTER A WITH TILDE
   /\\/| @
  |/\\/  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
  _   _ @
 (_)_(_)@
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
    _   @
   (o)  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
198  LATIN CAPITAL LETTER AE
     ______ @
    /  ____|@
   / _  _|  @
  / __ |___ @
 /_/ |_____|@
            @@
199  LATIN CAPITAL LETTER C WITH CEDILLA
   ____ @
  / ___|@
 | |    @
 | |___ @
  \\____|@
    )_) @@
200  LATIN CAPITAL LETTER E WITH GRAVE
   __   @
  _\\_\\_ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
201  LATIN CAPITAL LETTER E WITH ACUTE
    __  @
  _/_/_ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
 | ____|@
 |  _|_ @
 |_____|@
        @@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
  _   _ @
 (_)_(_)@
 | ____|@
 |  _|_ @
 |_____|@
        @@
204  LATIN CAPITAL LETTER I WITH GRAVE
  __  @
  \\_\\ @
 |_ _|@
  | | @
 |___|@
      @@
205  LATIN CAPITAL LETTER I WITH ACUTE
   __ @
  /_/ @
 |_ _|@
  | | @
 |___|@
      @@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
  //\\ @
 |/_\\|@
 |_ _|@
  | | @
 |___|@
      @@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
  |_ _| @
   | |  @
  |___| @
        @@
208  LATIN CAPITAL LETTER ETH
    ____  @
   |  _ \\ @
  _| |_| |@
 |__ __| |@
   |____/ @
          @@
209  LATIN CAPITAL LETTER N WITH TILDE
   /\\/|@
  |/\\/ @
 | \\| |@
 | .\` |@
 |_|\\_|@
       @@
210  LATIN CAPITAL LETTER O WITH GRAVE
   __   @
   \\_\\  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
211  LATIN CAPITAL LETTER O WITH ACUTE
    __  @
   /_/  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
213  LATIN CAPITAL LETTER O WITH TILDE
   /\\/| @
  |/\\/  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
215  MULTIPLICATION SIGN
     @
     @
 /\\/\\@
 >  <@
 \\/\\/@
     @@
216  LATIN CAPITAL LETTER O WITH STROKE
   ____ @
  / _// @
 | |// |@
 | //| |@
  //__/ @
        @@
217  LATIN CAPITAL LETTER U WITH GRAVE
   __   @
  _\\_\\_ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
218  LATIN CAPITAL LETTER U WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
 | | | |@
 | |_| |@
  \\___/ @
        @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\___/ @
        @@
221  LATIN CAPITAL LETTER Y WITH ACUTE
    __  @
 __/_/__@
 \\ \\ / /@
  \\ V / @
   |_|  @
        @@
222  LATIN CAPITAL LETTER THORN
  _     @
 | |___ @
 |  __ \\@
 |  ___/@
 |_|    @
        @@
223  LATIN SMALL LETTER SHARP S
   ___ @
  / _ \\@
 | |/ /@
 | |\\ \\@
 | ||_/@
 |_|   @@
224  LATIN SMALL LETTER A WITH GRAVE
   __   @
   \\_\\_ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
225  LATIN SMALL LETTER A WITH ACUTE
    __  @
   /_/_ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
227  LATIN SMALL LETTER A WITH TILDE
   /\\/| @
  |/\\/_ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
228  LATIN SMALL LETTER A WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
229  LATIN SMALL LETTER A WITH RING ABOVE
    __  @
   (()) @
  / _ '|@
 | (_| |@
  \\__,_|@
        @@
230  LATIN SMALL LETTER AE
           @
   __ ____ @
  / _\`  _ \\@
 | (_|  __/@
  \\__,____|@
           @@
231  LATIN SMALL LETTER C WITH CEDILLA
       @
   ___ @
  / __|@
 | (__ @
  \\___|@
   )_) @@
232  LATIN SMALL LETTER E WITH GRAVE
   __  @
   \\_\\ @
  / _ \\@
 |  __/@
  \\___|@
       @@
233  LATIN SMALL LETTER E WITH ACUTE
    __ @
   /_/ @
  / _ \\@
 |  __/@
  \\___|@
       @@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
   //\\ @
  |/_\\|@
  / _ \\@
 |  __/@
  \\___|@
       @@
235  LATIN SMALL LETTER E WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 |  __/ @
  \\___| @
        @@
236  LATIN SMALL LETTER I WITH GRAVE
 __ @
 \\_\\@
 | |@
 | |@
 |_|@
    @@
237  LATIN SMALL LETTER I WITH ACUTE
  __@
 /_/@
 | |@
 | |@
 |_|@
    @@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
  //\\ @
 |/_\\|@
  | | @
  | | @
  |_| @
      @@
239  LATIN SMALL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
   | |  @
   | |  @
   |_|  @
        @@
240  LATIN SMALL LETTER ETH
   /\\/\\ @
   >  < @
  _\\/\\ |@
 / __\` |@
 \\____/ @
        @@
241  LATIN SMALL LETTER N WITH TILDE
   /\\/| @
  |/\\/  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
242  LATIN SMALL LETTER O WITH GRAVE
   __   @
   \\_\\  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
243  LATIN SMALL LETTER O WITH ACUTE
    __  @
   /_/  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
245  LATIN SMALL LETTER O WITH TILDE
   /\\/| @
  |/\\/  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
246  LATIN SMALL LETTER O WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
247  DIVISION SIGN
        @
    _   @
  _(_)_ @
 |_____|@
   (_)  @
        @@
248  LATIN SMALL LETTER O WITH STROKE
         @
   ____  @
  / _//\\ @
 | (//) |@
  \\//__/ @
         @@
249  LATIN SMALL LETTER U WITH GRAVE
   __   @
  _\\_\\_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
250  LATIN SMALL LETTER U WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
252  LATIN SMALL LETTER U WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
253  LATIN SMALL LETTER Y WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
254  LATIN SMALL LETTER THORN
  _     @
 | |__  @
 | '_ \\ @
 | |_) |@
 | .__/ @
 |_|    @@
255  LATIN SMALL LETTER Y WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
0x0100  LATIN CAPITAL LETTER A WITH MACRON
   ____ @
  /___/ @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
0x0101  LATIN SMALL LETTER A WITH MACRON
    ___ @
   /_ _/@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0102  LATIN CAPITAL LETTER A WITH BREVE
  _   _ @
  \\\\_// @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
0x0103  LATIN SMALL LETTER A WITH BREVE
   \\_/  @
   ___  @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0104  LATIN CAPITAL LETTER A WITH OGONEK
        @
    _   @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
     (_(@@
0x0105  LATIN SMALL LETTER A WITH OGONEK
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
     (_(@@
0x0106  LATIN CAPITAL LETTER C WITH ACUTE
     __ @
   _/_/ @
  / ___|@
 | |___ @
  \\____|@
        @@
0x0107  LATIN SMALL LETTER C WITH ACUTE
    __ @
   /__/@
  / __|@
 | (__ @
  \\___|@
       @@
0x0108  LATIN CAPITAL LETTER C WITH CIRCUMFLEX
     /\\ @
   _//\\\\@
  / ___|@
 | |___ @
  \\____|@
        @@
0x0109  LATIN SMALL LETTER C WITH CIRCUMFLEX
    /\\ @
   /_\\ @
  / __|@
 | (__ @
  \\___|@
       @@
0x010A  LATIN CAPITAL LETTER C WITH DOT ABOVE
    []  @
   ____ @
  / ___|@
 | |___ @
  \\____|@
        @@
0x010B  LATIN SMALL LETTER C WITH DOT ABOVE
   []  @
   ___ @
  / __|@
 | (__ @
  \\___|@
       @@
0x010C  LATIN CAPITAL LETTER C WITH CARON
   \\\\// @
   _\\/_ @
  / ___|@
 | |___ @
  \\____|@
        @@
0x010D  LATIN SMALL LETTER C WITH CARON
   \\\\//@
   _\\/ @
  / __|@
 | (__ @
  \\___|@
       @@
0x010E  LATIN CAPITAL LETTER D WITH CARON
   \\\\// @
  __\\/  @
 |  _ \\ @
 | |_| |@
 |____/ @
        @@
0x010F  LATIN SMALL LETTER D WITH CARON
  \\/  _ @
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0110  LATIN CAPITAL LETTER D WITH STROKE
   ____   @
  |_ __ \\ @
 /| |/ | |@
 /|_|/_| |@
  |_____/ @
          @@
0x0111  LATIN SMALL LETTER D WITH STROKE
    ---|@
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0112  LATIN CAPITAL LETTER E WITH MACRON
   ____ @
  /___/ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x0113  LATIN SMALL LETTER E WITH MACRON
    ____@
   /_ _/@
  / _ \\ @
 |  __/ @
  \\___| @
        @@
0x0114  LATIN CAPITAL LETTER E WITH BREVE
  _   _ @
  \\\\_// @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x0115  LATIN SMALL LETTER E WITH BREVE
  \\\\  //@
    --  @
  / _ \\ @
 |  __/ @
  \\___| @
        @@
0x0116  LATIN CAPITAL LETTER E WITH DOT ABOVE
    []  @
  _____ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x0117  LATIN SMALL LETTER E WITH DOT ABOVE
    [] @
    __ @
  / _ \\@
 |  __/@
  \\___|@
       @@
0x0118  LATIN CAPITAL LETTER E WITH OGONEK
        @
  _____ @
 | ____|@
 |  _|_ @
 |_____|@
    (__(@@
0x0119  LATIN SMALL LETTER E WITH OGONEK
       @
   ___ @
  / _ \\@
 |  __/@
  \\___|@
    (_(@@
0x011A  LATIN CAPITAL LETTER E WITH CARON
   \\\\// @
  __\\/_ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x011B  LATIN SMALL LETTER E WITH CARON
   \\\\//@
    \\/ @
  / _ \\@
 |  __/@
  \\___|@
       @@
0x011C  LATIN CAPITAL LETTER G WITH CIRCUMFLEX
   _/\\_ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
0x011D  LATIN SMALL LETTER G WITH CIRCUMFLEX
     /\\ @
   _/_ \\@
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
0x011E  LATIN CAPITAL LETTER G WITH BREVE
   _\\/_ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
0x011F  LATIN SMALL LETTER G WITH BREVE
  \\___/ @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
0x0120  LATIN CAPITAL LETTER G WITH DOT ABOVE
   _[]_ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
0x0121  LATIN SMALL LETTER G WITH DOT ABOVE
   []   @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
0x0122  LATIN CAPITAL LETTER G WITH CEDILLA
   ____ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
   )__) @@
0x0123  LATIN SMALL LETTER G WITH CEDILLA
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |_))))@@
0x0124  LATIN CAPITAL LETTER H WITH CIRCUMFLEX
  _/ \\_ @
 | / \\ |@
 | |_| |@
 |  _  |@
 |_| |_|@
        @@
0x0125  LATIN SMALL LETTER H WITH CIRCUMFLEX
  _  /\\ @
 | |//\\ @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0126  LATIN CAPITAL LETTER H WITH STROKE
  _   _ @
 | |=| |@
 | |_| |@
 |  _  |@
 |_| |_|@
        @@
0x0127  LATIN SMALL LETTER H WITH STROKE
  _     @
 |=|__  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0128  LATIN CAPITAL LETTER I WITH TILDE
  /\\//@
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x0129  LATIN SMALL LETTER I WITH TILDE
    @
 /\\/@
 | |@
 | |@
 |_|@
    @@
0x012A  LATIN CAPITAL LETTER I WITH MACRON
 /___/@
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x012B  LATIN SMALL LETTER I WITH MACRON
  ____@
 /___/@
  | | @
  | | @
  |_| @
      @@
0x012C  LATIN CAPITAL LETTER I WITH BREVE
  \\__/@
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x012D  LATIN SMALL LETTER I WITH BREVE
    @
 \\_/@
 | |@
 | |@
 |_|@
    @@
0x012E  LATIN CAPITAL LETTER I WITH OGONEK
  ___ @
 |_ _|@
  | | @
  | | @
 |___|@
  (__(@@
0x012F  LATIN SMALL LETTER I WITH OGONEK
  _  @
 (_) @
 | | @
 | | @
 |_|_@
  (_(@@
0x0130  LATIN CAPITAL LETTER I WITH DOT ABOVE
  _[] @
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x0131  LATIN SMALL LETTER DOTLESS I
    @
  _ @
 | |@
 | |@
 |_|@
    @@
0x0132  LATIN CAPITAL LIGATURE IJ
  ___  _ @
 |_ _|| |@
  | | | |@
  | |_| |@
 |__|__/ @
         @@
0x0133  LATIN SMALL LIGATURE IJ
  _   _ @
 (_) (_)@
 | | | |@
 | | | |@
 |_|_/ |@
   |__/ @@
0x0134  LATIN CAPITAL LETTER J WITH CIRCUMFLEX
      /\\ @
     /_\\|@
  _  | | @
 | |_| | @
  \\___/  @
         @@
0x0135  LATIN SMALL LETTER J WITH CIRCUMFLEX
    /\\@
   /_\\@
   | |@
   | |@
  _/ |@
 |__/ @@
0x0136  LATIN CAPITAL LETTER K WITH CEDILLA
  _  _  @
 | |/ / @
 | ' /  @
 | . \\  @
 |_|\\_\\ @
    )__)@@
0x0137  LATIN SMALL LETTER K WITH CEDILLA
  _    @
 | | __@
 | |/ /@
 |   < @
 |_|\\_\\@
    )_)@@
0x0138  LATIN SMALL LETTER KRA
       @
  _ __ @
 | |/ \\@
 |   < @
 |_|\\_\\@
       @@
0x0139  LATIN CAPITAL LETTER L WITH ACUTE
  _   //@
 | | // @
 | |    @
 | |___ @
 |_____|@
        @@
0x013A  LATIN SMALL LETTER L WITH ACUTE
  //@
 | |@
 | |@
 | |@
 |_|@
    @@
0x013B  LATIN CAPITAL LETTER L WITH CEDILLA
  _     @
 | |    @
 | |    @
 | |___ @
 |_____|@
    )__)@@
0x013C  LATIN SMALL LETTER L WITH CEDILLA
  _   @
 | |  @
 | |  @
 | |  @
 |_|  @
   )_)@@
0x013D  LATIN CAPITAL LETTER L WITH CARON
  _ \\\\//@
 | | \\/ @
 | |    @
 | |___ @
 |_____|@
        @@
0x013E  LATIN SMALL LETTER L WITH CARON
  _ \\\\//@
 | | \\/ @
 | |    @
 | |    @
 |_|    @
        @@
0x013F  LATIN CAPITAL LETTER L WITH MIDDLE DOT
  _     @
 | |    @
 | | [] @
 | |___ @
 |_____|@
        @@
0x0140  LATIN SMALL LETTER L WITH MIDDLE DOT
  _    @
 | |   @
 | | []@
 | |   @
 |_|   @
       @@
0x0141  LATIN CAPITAL LETTER L WITH STROKE
  __    @
 | //   @
 |//|   @
 // |__ @
 |_____|@
        @@
0x0142  LATIN SMALL LETTER L WITH STROKE
  _ @
 | |@
 |//@
 //|@
 |_|@
    @@
0x0143  LATIN CAPITAL LETTER N WITH ACUTE
  _/ /_ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @@
0x0144  LATIN SMALL LETTER N WITH ACUTE
     _  @
  _ /_/ @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0145  LATIN CAPITAL LETTER N WITH CEDILLA
  _   _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
 )_)    @@
0x0146  LATIN SMALL LETTER N WITH CEDILLA
        @
  _ __  @
 | '_ \\ @
 | | | |@
 |_| |_|@
 )_)    @@
0x0147  LATIN CAPITAL LETTER N WITH CARON
  _\\/ _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @@
0x0148  LATIN SMALL LETTER N WITH CARON
  \\\\//  @
  _\\/_  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0149  LATIN SMALL LETTER N PRECEDED BY APOSTROPHE
          @
  _  __   @
 ( )| '_\\ @
 |/| | | |@
   |_| |_|@
          @@
0x014A  LATIN CAPITAL LETTER ENG
  _   _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\ |@
     )_)@@
0x014B  LATIN SMALL LETTER ENG
  _ __  @
 | '_ \\ @
 | | | |@
 |_| | |@
     | |@
    |__ @@
0x014C  LATIN CAPITAL LETTER O WITH MACRON
   ____ @
  /_ _/ @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
0x014D  LATIN SMALL LETTER O WITH MACRON
   ____ @
  /_ _/ @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
0x014E  LATIN CAPITAL LETTER O WITH BREVE
  \\   / @
   _-_  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x014F  LATIN SMALL LETTER O WITH BREVE
  \\   / @
   _-_  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x0150  LATIN CAPITAL LETTER O WITH DOUBLE ACUTE
    ___ @
   /_/_/@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x0151  LATIN SMALL LETTER O WITH DOUBLE ACUTE
    ___ @
   /_/_/@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x0152  LATIN CAPITAL LIGATURE OE
   ___  ___ @
  / _ \\| __|@
 | | | |  | @
 | |_| | |__@
  \\___/|____@
            @@
0x0153  LATIN SMALL LIGATURE OE
             @
   ___   ___ @
  / _ \\ / _ \\@
 | (_) |  __/@
  \\___/ \\___|@
             @@
0x0154  LATIN CAPITAL LETTER R WITH ACUTE
  _/_/  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
        @@
0x0155  LATIN SMALL LETTER R WITH ACUTE
     __@
  _ /_/@
 | '__|@
 | |   @
 |_|   @
       @@
0x0156  LATIN CAPITAL LETTER R WITH CEDILLA
  ____  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
 )_)    @@
0x0157  LATIN SMALL LETTER R WITH CEDILLA
       @
  _ __ @
 | '__|@
 | |   @
 |_|   @
   )_) @@
0x0158  LATIN CAPITAL LETTER R WITH CARON
  _\\_/  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
        @@
0x0159  LATIN SMALL LETTER R WITH CARON
  \\\\// @
  _\\/_ @
 | '__|@
 | |   @
 |_|   @
       @@
0x015A  LATIN CAPITAL LETTER S WITH ACUTE
  _/_/  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
0x015B  LATIN SMALL LETTER S WITH ACUTE
    __@
  _/_/@
 / __|@
 \\__ \\@
 |___/@
      @@
0x015C  LATIN CAPITAL LETTER S WITH CIRCUMFLEX
  _/\\_  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
0x015D  LATIN SMALL LETTER S WITH CIRCUMFLEX
      @
  /_\\_@
 / __|@
 \\__ \\@
 |___/@
      @@
0x015E  LATIN CAPITAL LETTER S WITH CEDILLA
  ____  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
    )__)@@
0x015F  LATIN SMALL LETTER S WITH CEDILLA
      @
  ___ @
 / __|@
 \\__ \\@
 |___/@
   )_)@@
0x0160  LATIN CAPITAL LETTER S WITH CARON
  _\\_/  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
0x0161  LATIN SMALL LETTER S WITH CARON
  \\\\//@
  _\\/ @
 / __|@
 \\__ \\@
 |___/@
      @@
0x0162  LATIN CAPITAL LETTER T WITH CEDILLA
  _____ @
 |_   _|@
   | |  @
   | |  @
   |_|  @
    )__)@@
0x0163  LATIN SMALL LETTER T WITH CEDILLA
  _   @
 | |_ @
 | __|@
 | |_ @
  \\__|@
   )_)@@
0x0164  LATIN CAPITAL LETTER T WITH CARON
  _____ @
 |_   _|@
   | |  @
   | |  @
   |_|  @
        @@
0x0165  LATIN SMALL LETTER T WITH CARON
  \\/  @
 | |_ @
 | __|@
 | |_ @
  \\__|@
      @@
0x0166  LATIN CAPITAL LETTER T WITH STROKE
  _____ @
 |_   _|@
   | |  @
  -|-|- @
   |_|  @
        @@
0x0167  LATIN SMALL LETTER T WITH STROKE
  _   @
 | |_ @
 | __|@
 |-|_ @
  \\__|@
      @@
0x0168  LATIN CAPITAL LETTER U WITH TILDE
        @
  _/\\/_ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x0169  LATIN SMALL LETTER U WITH TILDE
        @
  _/\\/_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x016A  LATIN CAPITAL LETTER U WITH MACRON
   ____ @
  /__ _/@
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x016B  LATIN SMALL LETTER U WITH MACRON
   ____ @
  / _  /@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x016C  LATIN CAPITAL LETTER U WITH BREVE
        @
   \\_/_ @
 | | | |@
 | |_| |@
  \\____|@
        @@
0x016D  LATIN SMALL LETTER U WITH BREVE
        @
   \\_/_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x016E  LATIN CAPITAL LETTER U WITH RING ABOVE
    O   @
  __  _ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x016F  LATIN SMALL LETTER U WITH RING ABOVE
    O   @
  __ __ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x0170  LATIN CAPITAL LETTER U WITH DOUBLE ACUTE
   -- --@
  /_//_/@
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x0171  LATIN SMALL LETTER U WITH DOUBLE ACUTE
    ____@
  _/_/_/@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x0172  LATIN CAPITAL LETTER U WITH OGONEK
  _   _ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
    (__(@@
0x0173  LATIN SMALL LETTER U WITH OGONEK
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
     (_(@@
0x0174  LATIN CAPITAL LETTER W WITH CIRCUMFLEX
 __    /\\  __@
 \\ \\  //\\\\/ /@
  \\ \\ /\\ / / @
   \\ V  V /  @
    \\_/\\_/   @
             @@
0x0175  LATIN SMALL LETTER W WITH CIRCUMFLEX
      /\\   @
 __  //\\\\__@
 \\ \\ /\\ / /@
  \\ V  V / @
   \\_/\\_/  @
           @@
0x0176  LATIN CAPITAL LETTER Y WITH CIRCUMFLEX
    /\\  @
 __//\\\\ @
 \\ \\ / /@
  \\ V / @
   |_|  @
        @@
0x0177  LATIN SMALL LETTER Y WITH CIRCUMFLEX
    /\\  @
   //\\\\ @
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
0x0178  LATIN CAPITAL LETTER Y WITH DIAERESIS
  []  []@
 __    _@
 \\ \\ / /@
  \\ V / @
   |_|  @
        @@
0x0179  LATIN CAPITAL LETTER Z WITH ACUTE
  __/_/@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
0x017A  LATIN SMALL LETTER Z WITH ACUTE
    _ @
  _/_/@
 |_  /@
  / / @
 /___|@
      @@
0x017B  LATIN CAPITAL LETTER Z WITH DOT ABOVE
  __[]_@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
0x017C  LATIN SMALL LETTER Z WITH DOT ABOVE
   [] @
  ____@
 |_  /@
  / / @
 /___|@
      @@
0x017D  LATIN CAPITAL LETTER Z WITH CARON
  _\\_/_@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
0x017E  LATIN SMALL LETTER Z WITH CARON
  \\\\//@
  _\\/_@
 |_  /@
  / / @
 /___|@
      @@
0x017F  LATIN SMALL LETTER LONG S
     __ @
    / _|@
 |-| |  @
 |-| |  @
   |_|  @
        @@
0x02C7  CARON
 \\\\//@
  \\/ @
    $@
    $@
    $@
    $@@
0x02D8  BREVE
 \\\\_//@
  \\_/ @
     $@
     $@
     $@
     $@@
0x02D9  DOT ABOVE
 []@
  $@
  $@
  $@
  $@
  $@@
0x02DB  OGONEK
    $@
    $@
    $@
    $@
    $@
 )_) @@
0x02DD  DOUBLE ACUTE ACCENT
  _ _ @
 /_/_/@
     $@
     $@
     $@
     $@@
0xCA0  KANNADA LETTER TTHA
   _____)@
  /_ ___/@
  / _ \\  @
 | (_) | @
 $\\___/$ @
         @@
         `,z_="/slidev-math-videos/";function j_(){return z_}const X_={class:"my-auto w-full"},J_=o_({__name:"cover",props:{background:{default:""}},setup(I){k();function C(){const d=s_.textSync("hans-green-theme",{font:"Standard"});console.log(d),console.log("🌟🌟 本PPT原作者：%cHans码数理哲","color: #16a34a; font-weight: bold; font-size: 30px;","🌟🌟")}const m=I,c=W_(()=>$_(m.background,!0)),f=`${j_()}live2d/`;function g(d,o){return new Promise((N,H)=>{let x;o==="css"?(x=document.createElement("link"),x.rel="stylesheet",x.href=d):o==="js"&&(x=document.createElement("script"),x.type="module",x.src=d),x&&(x.onload=()=>N(d),x.onerror=()=>H(d),document.head.appendChild(x))})}async function p(){const d=window.Image;window.Image=function(...o){const N=new d(...o);return N.crossOrigin="anonymous",N},window.Image.prototype=d.prototype;try{await Promise.all([g(`${f}waifu.css`,"css"),g(`${f}waifu-tips.js`,"js")])}catch(o){console.error("加载 waifu.css 和 waifu-tips.js 失败",o)}initWidget({waifuPath:`${f}waifu-tips.json`,cubism2Path:`${f}live2d.min.js`,cubism5Path:`${f}cubism5/live2dcubismcore.js`,tools:["hitokoto","asteroids","switch-model","switch-texture","photo","info","quit"],logLevel:"warn",drag:!0})}return V(()=>{s_.parseFont("Standard",K_),C(),p(),console.log(`
%cLive2D%cWidget%c
`,"padding: 8px; background: #cd3e45; font-weight: bold; font-size: large; color: white;","padding: 8px; background: #ff5450; font-size: large; color: #eee;",""),console.log(`
  く__,.ヘヽ.        /  ,ー､ 〉
          ＼ ', !-─‐-i  /  /´
          ／｀ｰ'       L/／｀ヽ､
        /   ／,   /|   ,   ,       ',
      ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i
        ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |
          !,/7 '0'     ´0iソ|    |
          |.从"    _     ,,,, / |./    |
          ﾚ'| i＞.､,,__  _,.イ /   .i   |
            ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |
              | |/i 〈|/   i  ,.ﾍ |  i  |
            .|/ /  ｉ：    ﾍ!    ＼  |
              kヽ>､ﾊ    _,.ﾍ､    /､!
              !'〈//｀Ｔ´', ＼ ｀'7'ｰr'
              ﾚ'ヽL__|___i,___,ンﾚ|ノ
                  ﾄ-,/  |___./
                  'ｰ'    !_,.:
  `)}),(d,o)=>(F(),K("div",{class:"slidev-layout cover",style:L_(c.value)},[s("div",X_,[y_(d.$slots,"default")])],4))}}),Y_={__name:"【slidev】26武汉五钓第7题-概率生成函数.md__slidev_1",setup(I){const{$clicksContext:C,$frontmatter:m}=k();return C.setup(),(c,R)=>{const f=U_,g=b_,p=F_;return F(),l_(J_,P_(w_(r_(D_)(r_(m),0))),{default:O_(()=>[j(f),j(g),j(p,{timeList:[0,48,55,69.5,53,57.5,32,39,53,45.5,23.5]}),R[0]||(R[0]=s("div",{class:"bg-gradient-to-br from-[#c8e6c9] to-[#dcf1dd] absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-4"},[s("h1",{class:"title-stroke !text-[#059669] !mb-1 font-black tracking-tighter text-center"}," 26武汉五钓单选 "),s("div",{class:"flex flex-col justify-center items-center gap-3 mb-2"},[s("h2",{class:"flex justify-center items-center font-black text-center !text-[#059669] !text-2xl md:!text-3xl"},[s("span",{class:"subtitle-stroke"},"竟能用"),s("div",{class:"mx-2 bg-[#10b98126] px-4 py-1.5 rounded-xl"},[s("span",{class:"!text-2xl md:!text-3xl text-[#059669]"},"概率生成函数")]),s("span",{class:"subtitle-stroke"},"巧解~")])]),s("div",{class:"mb-2 bordered-box p-4 border-4 border-[#059669] bg-gradient-to-br from-[#c8e6c9] to-[#dcf1dd] px-4 rounded-2xl shadow-lg flex flex-col items-center justify-center text-lg md:text-xl text-[#059669] font-serif"},[s("p",null,[i_("已知 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"X"),s("mo",null,"∼"),s("mi",null,"B"),s("mo",{stretchy:"false"},"("),s("mn",null,"20"),s("mo",{separator:"true"},","),s("mn",null,"0.5"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"X \\sim B(20,0.5)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"X"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"∼"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05017em"}},"B"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"20"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},"0.5"),s("span",{class:"mclose"},")")])])]),i_(" ，求 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"E"),s("mo",{stretchy:"false"},"("),s("msup",null,[s("mi",null,"X"),s("mn",null,"3")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"E(X^3)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"E"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"X"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"3")])])])])])])]),s("span",{class:"mclose"},")")])])])])]),s("p",{class:"text-[#059669] text-2xl md:text-3xl !mt-2 text-center"}," 其常规做法也由PGF启发得到~ "),s("p",{class:"text-[#059669] text-2xl md:text-3xl !mt-0 text-center"}," PS：高三同学别做钓鱼卷！ ")],-1))]),_:1},16)}}},ee=B_(Y_,[["__scopeId","data-v-5dc69a3e"]]);export{ee as default};
