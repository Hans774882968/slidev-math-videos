import{L as V,f as z,o as B,r as $,p as g_,O as C_,i as p_,b as r_,g as e,k as T_,n as N_,t as S_,aK as x_,F as v_,d as o_,a2 as y_,z as M_,j as H_,w as W_,e as j,v as O_,x as P_,T as n_}from"./modules/vue-D7i0zGR_.js";import{u as k,f as w_}from"./slidev/context-B1RdBhcf.js";import{_ as D_}from"./index-CX5QTLUs.js";import"./modules/shiki-0h5qVANN.js";const b_={__name:"AutoSlide",props:{timeList:{type:Array,default:()=>[]},debug:{type:Boolean,default:!1}},setup(I){const{$nav:g}=k(),d=I,c=d.timeList,h=d.debug;function R(m){return new Promise(L=>{setTimeout(L,m)})}async function N(m,L){L>=m.length||(await R(m[L]*1e3),h&&console.log(`第${L+1}次点击，等待时长`,m[L],m,L),g.value.next(),N(m,L+1))}async function x(m,L){if(!(L>m.length)){if(Array.isArray(m[L-1])){const[C,...M]=m[L-1];typeof C=="number"&&!isNaN(C)&&(await R(C*1e3),h&&console.log("翻到页码",L+1,"等待时长",C,m,L-1,C,M),g.value.go(L+1),await N(M,0),await x(m,L+1));return}await R(m[L-1]*1e3),h&&console.log("翻到页码",L+1,"等待时长",m[L-1]),g.value.go(L+1),x(m,L+1)}}return V(()=>x(c,1).catch(console.error)),(m,L)=>(B(),z("div"))}},B_={__name:"MovingWatermark",props:{colorCls:{type:String,default:"bg-gradient-to-r from-[#2d644b] to-green-600 bg-clip-text text-transparent"},opacity:{type:Number,default:1},text:{type:String,default:"Hans码数理哲"}},setup(I){k();const g=$(null),d=$(null),c=$({x:0,y:0}),h=$({x:0,y:0}),R=$({width:0,height:0}),N=()=>{if(!g.value)return;const L=document.getElementById("slide-content");let C=1;if(L){const S=getComputedStyle(L).getPropertyValue("--slidev-slide-scale");S&&(C=parseFloat(S)||1)}const M=g.value.getBoundingClientRect();R.value.width=M.width/C,R.value.height=M.height/C},x=()=>{(R.value.width===0||R.value.height===0)&&N();const L=d.value?.offsetWidth||60,C=d.value?.offsetHeight||20;c.value={x:Math.random()*(R.value.width-L)+L/2,y:Math.random()*(R.value.height-C)+C/2};const M=1.2+Math.random()*.6,S=(1/12+Math.random()/3)*Math.PI;h.value={x:Math.cos(S)*M,y:Math.sin(S)*M}},m=()=>{const L=d.value?.offsetWidth||60,C=d.value?.offsetHeight||20;c.value.x+=h.value.x,c.value.y+=h.value.y,(c.value.x<=0||c.value.x>=R.value.width-L)&&(h.value.x=-h.value.x,c.value.x=Math.max(0,Math.min(R.value.width-L,c.value.x))),(c.value.y<=0||c.value.y>=R.value.height-C)&&(h.value.y=-h.value.y,c.value.y=Math.max(0,Math.min(R.value.height-C,c.value.y))),requestAnimationFrame(m)};return V(async()=>{await g_(),N(),x(),requestAnimationFrame(m),window.addEventListener("resize",N)}),C_(()=>{window.removeEventListener("resize",N)}),(L,C)=>(B(),z(v_,null,[p_(" teleport 让 position: fixed 能够重新生效 "),(B(),r_(x_,{to:"#slide-content"},[e("div",{ref_key:"containerRef",ref:g,class:"fixed inset-0 pointer-events-none overflow-hidden z-50"},[e("p",{ref_key:"textRef",ref:d,class:N_(["absolute select-none !m-0 truncate",I.colorCls]),style:T_({left:`${c.value.x}px`,top:`${c.value.y}px`,fontSize:"20px",opacity:I.opacity,userSelect:"none",pointerEvents:"none"})},S_(I.text),7)],512)]))],2112))}},F_=o_({__name:"SlidevPageRedirector",setup(I){const{$nav:g}=k();function d(c){const h=Array.isArray(c)?c[0]:c;return Number(h)}return V(()=>{const c=y_(),h=c.query.page;if(!h)return;const R=c.query.clicks,N=d(h),x=d(R);if(!Number.isInteger(N)||N<=0){console.error("页码不合法，请输入正整数");return}g.value.go(N),!(!Number.isInteger(x)||x<0)&&console.warn("拿到 clicks 参数：",x,"，但我暂未找到正确跳转到相应点击次数的方法qwq")}),(c,h)=>(B(),z("div"))}});function a_(I){return I.startsWith("/")?"/slidev-math-videos/260508/"+I.slice(1):I}function U_(I,g=!1){const d=I&&["#","rgb","hsl"].some(h=>I.indexOf(h)===0),c={background:d?I:void 0,color:I&&!d?"white":void 0,backgroundImage:d?void 0:I?g?`linear-gradient(#0005, #0008), url(${a_(I)})`:`url("${a_(I)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return c.background||delete c.background,c}const $_={FULL_WIDTH:0,FITTING:1,SMUSHING:2,CONTROLLED_SMUSHING:3};class G_{constructor(){this.comment="",this.numChars=0,this.options={}}}const X=["1Row","3-D","3D Diagonal","3D-ASCII","3x5","4Max","5 Line Oblique","AMC 3 Line","AMC 3 Liv1","AMC AAA01","AMC Neko","AMC Razor","AMC Razor2","AMC Slash","AMC Slider","AMC Thin","AMC Tubes","AMC Untitled","ANSI Compact","ANSI Regular","ANSI Shadow","ASCII 12","ASCII 9","ASCII New Roman","Acrobatic","Alligator","Alligator2","Alpha","Alphabet","Arrows","Avatar","B1FF","Babyface Lame","Babyface Leet","Banner","Banner3-D","Banner3","Banner4","Barbwire","Basic","Bear","Bell","Benjamin","Big ASCII 12","Big ASCII 9","Big Chief","Big Money-ne","Big Money-nw","Big Money-se","Big Money-sw","Big Mono 12","Big Mono 9","Big","Bigfig","Binary","Block","Blocks","Bloody","BlurVision ASCII","Bolger","Braced","Bright","Broadway KB","Broadway","Bubble","Bulbhead","Caligraphy","Caligraphy2","Calvin S","Cards","Catwalk","Chiseled","Chunky","Circle","Classy","Coder Mini","Coinstak","Cola","Colossal","Computer","Contessa","Contrast","Cosmike","Cosmike2","Crawford","Crawford2","Crazy","Cricket","Cursive","Cyberlarge","Cybermedium","Cybersmall","Cygnet","DANC4","DOS Rebel","DWhistled","Dancing Font","Decimal","Def Leppard","Delta Corps Priest 1","DiamFont","Diamond","Diet Cola","Digital","Doh","Doom","Dot Matrix","Double Shorts","Double","Dr Pepper","Efti Chess","Efti Font","Efti Italic","Efti Piti","Efti Robot","Efti Wall","Efti Water","Electronic","Elite","Emboss 2","Emboss","Epic","Fender","Filter","Fire Font-k","Fire Font-s","Flipped","Flower Power","Font Font","Four Tops","Fraktur","Fun Face","Fun Faces","Future Smooth","Future Thin","Future","Fuzzy","Georgi16","Georgia11","Ghost","Ghoulish","Glenyn","Goofy","Gothic","Graceful","Gradient","Graffiti","Greek","Heart Left","Heart Right","Henry 3D","Hex","Hieroglyphs","Hollywood","Horizontal Left","Horizontal Right","ICL-1900","Impossible","Invita","Isometric1","Isometric2","Isometric3","Isometric4","Italic","Ivrit","JS Block Letters","JS Bracket Letters","JS Capital Curves","JS Cursive","JS Stick Letters","Jacky","Jazmine","Jerusalem","Katakana","Kban","Keyboard","Knob","Konto Slant","Konto","LCD","Larry 3D 2","Larry 3D","Lean","Letter","Letters","Lil Devil","Line Blocks","Linux","Lockergnome","Madrid","Marquee","Maxfour","Merlin1","Merlin2","Mike","Mini","Mirror","Mnemonic","Modular","Mono 12","Mono 9","Morse","Morse2","Moscow","Mshebrew210","Muzzle","NScript","NT Greek","NV Script","Nancyj-Fancy","Nancyj-Improved","Nancyj-Underlined","Nancyj","Nipples","O8","OS2","Octal","Ogre","Old Banner","Pagga","Patorjk's Cheese","Patorjk-HeX","Pawp","Peaks Slant","Peaks","Pebbles","Pepper","Poison","Puffy","Puzzle","Pyramid","Rammstein","Rebel","Rectangles","Red Phoenix","Relief","Relief2","Reverse","Roman","Rot13","Rotated","Rounded","Rowan Cap","Rozzo","RubiFont","Runic","Runyc","S Blood","SL Script","Santa Clara","Script","Serifcap","Shaded Blocky","Shadow","Shimrod","Short","Slant Relief","Slant","Slide","Small ASCII 12","Small ASCII 9","Small Block","Small Braille","Small Caps","Small Isometric1","Small Keyboard","Small Mono 12","Small Mono 9","Small Poison","Small Script","Small Shadow","Small Slant","Small Tengwar","Small","Soft","Speed","Spliff","Stacey","Stampate","Stampatello","Standard","Star Strips","Star Wars","Stellar","Stforek","Stick Letters","Stop","Straight","Stronger Than All","Sub-Zero","Swamp Land","Swan","Sweet","THIS","Tanja","Tengwar","Term","Terrace","Test1","The Edge","Thick","Thin","Thorned","Three Point","Ticks Slant","Ticks","Tiles","Tinker-Toy","Tmplr","Tombstone","Train","Trek","Tsalagi","Tubular","Twisted","Two Point","USA Flag","Univers","Upside Down Text","Varsity","Wavescape","Wavy","Weird","Wet Letter","Whimsy","WideTerm","Wow","miniwi"],l_={"ANSI-Compact":"ANSI Compact"},G=I=>l_[I]?l_[I]:I;function k_(I){return/[.*+?^${}()|[\]\\]/.test(I)?"\\"+I:I}const i_=(()=>{const{FULL_WIDTH:I=0,FITTING:g,SMUSHING:d,CONTROLLED_SMUSHING:c}=$_,h={},R={font:"Standard",fontPath:"./fonts",fetchFontIfMissing:!0};function N(s,n,_){const t=k_(s.trim().slice(-1))||"@",a=n===_-1?new RegExp(t+t+"?\\s*$"):new RegExp(t+"\\s*$");return s.replace(a,"")}function x(s=-1,n=null){let _={},t,a=[[16384,"vLayout",d],[8192,"vLayout",g],[4096,"vRule5",!0],[2048,"vRule4",!0],[1024,"vRule3",!0],[512,"vRule2",!0],[256,"vRule1",!0],[128,"hLayout",d],[64,"hLayout",g],[32,"hRule6",!0],[16,"hRule5",!0],[8,"hRule4",!0],[4,"hRule3",!0],[2,"hRule2",!0],[1,"hRule1",!0]];t=n!==null?n:s;for(const[l,i,r]of a)t>=l?(t-=l,_[i]===void 0&&(_[i]=r)):i!=="vLayout"&&i!=="hLayout"&&(_[i]=!1);return typeof _.hLayout>"u"?s===0?_.hLayout=g:s===-1?_.hLayout=I:_.hRule1||_.hRule2||_.hRule3||_.hRule4||_.hRule5||_.hRule6?_.hLayout=c:_.hLayout=d:_.hLayout===d&&(_.hRule1||_.hRule2||_.hRule3||_.hRule4||_.hRule5||_.hRule6)&&(_.hLayout=c),typeof _.vLayout>"u"?_.vRule1||_.vRule2||_.vRule3||_.vRule4||_.vRule5?_.vLayout=c:_.vLayout=I:_.vLayout===d&&(_.vRule1||_.vRule2||_.vRule3||_.vRule4||_.vRule5)&&(_.vLayout=c),_}function m(s,n,_=""){return s===n&&s!==_?s:!1}function L(s,n){let _="|/\\[]{}()<>";if(s==="_"){if(_.indexOf(n)!==-1)return n}else if(n==="_"&&_.indexOf(s)!==-1)return s;return!1}function C(s,n){let _="| /\\ [] {} () <>",t=_.indexOf(s),a=_.indexOf(n);if(t!==-1&&a!==-1&&t!==a&&Math.abs(t-a)!==1){const l=Math.max(t,a),i=l+1;return _.substring(l,i)}return!1}function M(s,n){let _="[] {} ()",t=_.indexOf(s),a=_.indexOf(n);return t!==-1&&a!==-1&&Math.abs(t-a)<=1?"|":!1}function S(s,n){return{"/\\":"|","\\/":"Y","><":"X"}[s+n]||!1}function J(s,n,_=""){return s===_&&n===_?_:!1}function Y(s,n){return s===n?s:!1}function q(s,n){return L(s,n)}function Z(s,n){return C(s,n)}function Q(s,n){return s==="-"&&n==="_"||s==="_"&&n==="-"?"=":!1}function __(s,n){return s==="|"&&n==="|"?"|":!1}function w(s,n,_){return n===" "||n===""||n===_&&s!==" "?s:n}function L_(s,n,_){if(_.fittingRules&&_.fittingRules.vLayout===I)return"invalid";let t,a=Math.min(s.length,n.length),l,i,r=!1,T;if(a===0)return"invalid";for(t=0;t<a;t++)if(l=s.substring(t,t+1),i=n.substring(t,t+1),l!==" "&&i!==" "){if(_.fittingRules&&_.fittingRules.vLayout===g)return"invalid";if(_.fittingRules&&_.fittingRules.vLayout===d)return"end";if(__(l,i)){r=r||!1;continue}if(T=!1,T=_.fittingRules&&_.fittingRules.vRule1?Y(l,i):T,T=!T&&_.fittingRules&&_.fittingRules.vRule2?q(l,i):T,T=!T&&_.fittingRules&&_.fittingRules.vRule3?Z(l,i):T,T=!T&&_.fittingRules&&_.fittingRules.vRule4?Q(l,i):T,r=!0,!T)return"invalid"}return r?"end":"valid"}function u_(s,n,_){let t=s.length,a=s.length,l,i,r,T=1,o,A,u;for(;T<=t;){for(l=s.slice(Math.max(0,a-T),a),i=n.slice(0,Math.min(t,T)),r=i.length,u="",o=0;o<r;o++)if(A=L_(l[o],i[o],_),A==="end")u=A;else if(A==="invalid"){u=A;break}else u===""&&(u="valid");if(u==="invalid"){T--;break}if(u==="end")break;u==="valid"&&T++}return Math.min(t,T)}function A_(s,n,_){let t,a=Math.min(s.length,n.length),l,i,r="",T;const o=_.fittingRules||{};for(t=0;t<a;t++)l=s.substring(t,t+1),i=n.substring(t,t+1),l!==" "&&i!==" "?o.vLayout===g||o.vLayout===d?r+=w(l,i):(T=!1,T=o.vRule5?__(l,i):T,T=!T&&o.vRule1?Y(l,i):T,T=!T&&o.vRule2?q(l,i):T,T=!T&&o.vRule3?Z(l,i):T,T=!T&&o.vRule4?Q(l,i):T,r+=T):r+=w(l,i);return r}function E_(s,n,_,t){let a=s.length,l=n.length,i=s.slice(0,Math.max(0,a-_)),r=s.slice(Math.max(0,a-_),a),T=n.slice(0,Math.min(_,l)),o,A,u,E=[],f;for(A=r.length,o=0;o<A;o++)o>=l?u=r[o]:u=A_(r[o],T[o],t),E.push(u);return f=n.slice(Math.min(_,l),l),[...i,...E,...f]}function e_(s,n){const _=" ".repeat(n);return s.map(t=>t+_)}function I_(s,n,_){let t=s[0].length,a=n[0].length,l;return t>a?n=e_(n,t-a):a>t&&(s=e_(s,a-t)),l=u_(s,n,_),E_(s,n,l,_)}function c_(s,n,_){const t=_.fittingRules||{};if(t.hLayout===I)return 0;let a,l=s.length,i=n.length,r=l,T=1,o=!1,A,u,E,f;if(l===0)return 0;_:for(;T<=r;){const W=l-T;for(A=s.substring(W,W+T),u=n.substring(0,Math.min(T,i)),a=0;a<Math.min(T,i);a++)if(E=A.substring(a,a+1),f=u.substring(a,a+1),E!==" "&&f!==" "){if(t.hLayout===g){T=T-1;break _}else if(t.hLayout===d){(E===_.hardBlank||f===_.hardBlank)&&(T=T-1);break _}else if(o=!0,!(t.hRule1&&m(E,f,_.hardBlank)||t.hRule2&&L(E,f)||t.hRule3&&C(E,f)||t.hRule4&&M(E,f)||t.hRule5&&S(E,f)||t.hRule6&&J(E,f,_.hardBlank))){T=T-1;break _}}if(o)break;T++}return Math.min(r,T)}function K(s,n,_,t){let a,l,i=[],r,T,o,A,u,E,f,W;const v=t.fittingRules||{};if(typeof t.height!="number")throw new Error("height is not defined.");for(a=0;a<t.height;a++){f=s[a],W=n[a],u=f.length,E=W.length,r=u-_,T=f.slice(0,Math.max(0,r)),o="";const U=Math.max(0,u-_);let O=f.substring(U,U+_),P=W.substring(0,Math.min(_,E));for(l=0;l<_;l++){let H=l<u?O.substring(l,l+1):" ",y=l<E?P.substring(l,l+1):" ";if(H!==" "&&y!==" ")if(v.hLayout===g||v.hLayout===d)o+=w(H,y,t.hardBlank);else{const d_=v.hRule1&&m(H,y,t.hardBlank)||v.hRule2&&L(H,y)||v.hRule3&&C(H,y)||v.hRule4&&M(H,y)||v.hRule5&&S(H,y)||v.hRule6&&J(H,y,t.hardBlank)||w(H,y,t.hardBlank);o+=d_}else o+=w(H,y,t.hardBlank)}_>=E?A="":A=W.substring(_,_+Math.max(0,E-_)),i[a]=T+o+A}return i}function D(s){return new Array(s).fill("")}const F=function(s){return Math.max(...s.map(n=>n.length))};function b(s,n,_){return s.reduce(function(t,a){return K(t,a.fig,a.overlap||0,_)},D(n))}function h_(s,n,_){for(let t=s.length-1;t>0;t--){const a=b(s.slice(0,t),n,_);if(F(a)<=_.width)return{outputFigText:a,chars:s.slice(t)}}return{outputFigText:D(n),chars:s}}function R_(s,n,_){let t,a,l=0,i,r,T,o=_.height,A=[],u,E={chars:[],overlap:l},f=[],W,v,U,O,P;if(typeof o!="number")throw new Error("height is not defined.");r=D(o);const H=_.fittingRules||{};for(_.printDirection===1&&(s=s.split("").reverse().join("")),T=s.length,t=0;t<T;t++)if(W=s.substring(t,t+1),v=W.match(/\s/),a=n[W.charCodeAt(0)],O=null,a){if(H.hLayout!==I){for(l=1e4,i=0;i<o;i++)l=Math.min(l,c_(r[i],a[i],_));l=l===1e4?0:l}if(_.width>0&&(_.whitespaceBreak?(U=b(E.chars.concat([{fig:a,overlap:l}]),o,_),O=b(f.concat([{fig:U,overlap:E.overlap}]),o,_),u=F(O)):(O=K(r,a,l,_),u=F(O)),u>=_.width&&t>0&&(_.whitespaceBreak?(r=b(f.slice(0,-1),o,_),f.length>1&&(A.push(r),r=D(o)),f=[]):(A.push(r),r=D(o)))),_.width>0&&_.whitespaceBreak&&((!v||t===T-1)&&E.chars.push({fig:a,overlap:l}),v||t===T-1)){for(P=null;O=b(E.chars,o,_),u=F(O),u>=_.width;)P=h_(E.chars,o,_),E={chars:P.chars},A.push(P.outputFigText);u>0&&(P?f.push({fig:O,overlap:1}):f.push({fig:O,overlap:E.overlap})),v&&(f.push({fig:a,overlap:l}),r=D(o)),t===T-1&&(r=b(f,o,_)),E={chars:[],overlap:l};continue}r=K(r,a,l,_)}return F(r)>0&&A.push(r),_.showHardBlanks||A.forEach(function(y){for(T=y.length,i=0;i<T;i++)y[i]=y[i].replace(new RegExp("\\"+_.hardBlank,"g")," ")}),s===""&&A.length===0&&A.push(new Array(o).fill("")),A}const f_=function(s,n){let _;const t=n.fittingRules||{};if(s==="default")_={hLayout:t.hLayout,hRule1:t.hRule1,hRule2:t.hRule2,hRule3:t.hRule3,hRule4:t.hRule4,hRule5:t.hRule5,hRule6:t.hRule6};else if(s==="full")_={hLayout:I,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(s==="fitted")_={hLayout:g,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(s==="controlled smushing")_={hLayout:c,hRule1:!0,hRule2:!0,hRule3:!0,hRule4:!0,hRule5:!0,hRule6:!0};else if(s==="universal smushing")_={hLayout:d,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else return;return _},m_=function(s,n){let _={};const t=n.fittingRules||{};if(s==="default")_={vLayout:t.vLayout,vRule1:t.vRule1,vRule2:t.vRule2,vRule3:t.vRule3,vRule4:t.vRule4,vRule5:t.vRule5};else if(s==="full")_={vLayout:I,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(s==="fitted")_={vLayout:g,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(s==="controlled smushing")_={vLayout:c,vRule1:!0,vRule2:!0,vRule3:!0,vRule4:!0,vRule5:!0};else if(s==="universal smushing")_={vLayout:d,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else return;return _},t_=function(s,n,_){_=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`);const t=G(s);let a=_.split(`
`),l=[],i,r,T;for(r=a.length,i=0;i<r;i++)l=l.concat(R_(a[i],h[t],n));for(r=l.length,T=l[0],i=1;i<r;i++)T=I_(T,l[i],n);return T?T.join(`
`):""};function s_(s,n){let _;if(typeof structuredClone<"u"?_=structuredClone(s):_=JSON.parse(JSON.stringify(s)),_.showHardBlanks=n.showHardBlanks||!1,_.width=n.width||-1,_.whitespaceBreak=n.whitespaceBreak||!1,n.horizontalLayout){const t=f_(n.horizontalLayout,s);t&&Object.assign(_.fittingRules,t)}if(n.verticalLayout){const t=m_(n.verticalLayout,s);t&&Object.assign(_.fittingRules,t)}return _.printDirection=n.printDirection!==null&&n.printDirection!==void 0?n.printDirection:s.printDirection,_}const p=async function(s,n,_){return p.text(s,n,_)};return p.text=async function(s,n,_){s=s+"";let t,a;typeof n=="function"?(a=n,t={font:R.font}):typeof n=="string"?(t={font:n},a=_):n?(t=n,a=_):(t={font:R.font},a=_);const l=t.font||R.font;try{const i=await p.loadFont(l),r=i?t_(l,s_(i,t),s):"";return a&&a(null,r),r}catch(i){const r=i instanceof Error?i:new Error(String(i));if(a)return a(r),"";throw r}},p.textSync=function(s,n){s=s+"",typeof n=="string"?n={font:n}:n=n||{};const _=n.font||R.font;let t=s_(p.loadFontSync(_),n);return t_(_,t,s)},p.metadata=async function(s,n){s=s+"";try{const _=await p.loadFont(s);if(!_)throw new Error("Error loading font.");const t=G(s),a=h[t]||{},l=[_,a.comment||""];return n&&n(null,_,a.comment),l}catch(_){const t=_ instanceof Error?_:new Error(String(_));if(n)return n(t),null;throw t}},p.defaults=function(s){return s&&typeof s=="object"&&Object.assign(R,s),typeof structuredClone<"u"?structuredClone(R):JSON.parse(JSON.stringify(R))},p.parseFont=function(s,n,_=!0){if(h[s]&&!_)return h[s].options;n=n.replace(/\r\n/g,`
`).replace(/\r/g,`
`);const t=new G_,a=n.split(`
`),l=a.shift();if(!l)throw new Error("Invalid font file: missing header");const i=l.split(" "),r={hardBlank:i[0].substring(5,6),height:parseInt(i[1],10),baseline:parseInt(i[2],10),maxLength:parseInt(i[3],10),oldLayout:parseInt(i[4],10),numCommentLines:parseInt(i[5],10),printDirection:i[6]?parseInt(i[6],10):0,fullLayout:i[7]?parseInt(i[7],10):null,codeTagCount:i[8]?parseInt(i[8],10):null};if((r.hardBlank||"").length!==1||[r.height,r.baseline,r.maxLength,r.oldLayout,r.numCommentLines].some(A=>A==null||isNaN(A)))throw new Error("FIGlet header contains invalid values.");if(r.height==null||r.numCommentLines==null)throw new Error("FIGlet header contains invalid values.");r.fittingRules=x(r.oldLayout,r.fullLayout),t.options=r;const o=[];for(let A=32;A<=126;A++)o.push(A);if(o.push(196,214,220,228,246,252,223),a.length<r.numCommentLines+r.height*o.length)throw new Error(`FIGlet file is missing data. Line length: ${a.length}. Comment lines: ${r.numCommentLines}. Height: ${r.height}. Num chars: ${o.length}.`);for(t.comment=a.splice(0,r.numCommentLines).join(`
`),t.numChars=0;a.length>0&&t.numChars<o.length;){const A=o[t.numChars];t[A]=a.splice(0,r.height);for(let u=0;u<r.height;u++)typeof t[A][u]>"u"?t[A][u]="":t[A][u]=N(t[A][u],u,r.height);t.numChars++}for(;a.length>0;){const A=a.shift();if(!A||A.trim()==="")break;let u=A.split(" ")[0],E;if(/^-?0[xX][0-9a-fA-F]+$/.test(u))E=parseInt(u,16);else if(/^-?0[0-7]+$/.test(u))E=parseInt(u,8);else if(/^-?[0-9]+$/.test(u))E=parseInt(u,10);else throw new Error(`Error parsing data. Invalid data: ${u}`);if(E===-1||E<-2147483648||E>2147483647){const f=E===-1?"The char code -1 is not permitted.":`The char code cannot be ${E<-2147483648?"less than -2147483648":"greater than 2147483647"}.`;throw new Error(`Error parsing data. ${f}`)}t[E]=a.splice(0,r.height);for(let f=0;f<r.height;f++)typeof t[E][f]>"u"?t[E][f]="":t[E][f]=N(t[E][f],f,r.height);t.numChars++}return h[s]=t,r},p.loadedFonts=()=>Object.keys(h),p.clearLoadedFonts=()=>{Object.keys(h).forEach(s=>{delete h[s]})},p.loadFont=async function(s,n){const _=G(s);if(h[_]){const t=h[_].options;return n&&n(null,t),Promise.resolve(t)}try{if(!R.fetchFontIfMissing)throw new Error(`Font is not loaded: ${_}`);const t=await fetch(`${R.fontPath}/${_}.flf`);if(!t.ok)throw new Error(`Network response was not ok: ${t.status}`);const a=await t.text(),l=p.parseFont(_,a);return n&&n(null,l),l}catch(t){const a=t instanceof Error?t:new Error(String(t));if(n)return n(a),null;throw a}},p.loadFontSync=function(s){const n=G(s);if(h[n])return h[n].options;throw new Error("Synchronous font loading is not implemented for the browser, it will only work for fonts already loaded.")},p.preloadFonts=async function(s,n){try{for(const _ of s){const t=G(_),a=await fetch(`${R.fontPath}/${t}.flf`);if(!a.ok)throw new Error(`Failed to preload fonts. Error fetching font: ${t}, status code: ${a.statusText}`);const l=await a.text();p.parseFont(t,l)}n&&n()}catch(_){const t=_ instanceof Error?_:new Error(String(_));if(n){n(t);return}throw _}},p.fonts=function(s){return new Promise(function(n,_){n(X),s&&s(null,X)})},p.fontsSync=function(){return X},p.figFonts=h,p})(),V_=`flf2a$ 6 5 16 15 13 0 24463 229
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
         `,z_="/slidev-math-videos/";function K_(){return z_}const j_={class:"my-auto w-full"},X_=o_({__name:"cover",props:{background:{default:""}},setup(I){k();function g(){const m=i_.textSync("hans-green-theme",{font:"Standard"});console.log(m),console.log("🌟🌟 本PPT原作者：%cHans码数理哲","color: #16a34a; font-weight: bold; font-size: 30px;","🌟🌟")}const d=I,c=M_(()=>U_(d.background,!0)),R=`${K_()}live2d/`;function N(m,L){return new Promise((C,M)=>{let S;L==="css"?(S=document.createElement("link"),S.rel="stylesheet",S.href=m):L==="js"&&(S=document.createElement("script"),S.type="module",S.src=m),S&&(S.onload=()=>C(m),S.onerror=()=>M(m),document.head.appendChild(S))})}async function x(){const m=window.Image;window.Image=function(...L){const C=new m(...L);return C.crossOrigin="anonymous",C},window.Image.prototype=m.prototype;try{await Promise.all([N(`${R}waifu.css`,"css"),N(`${R}waifu-tips.js`,"js")])}catch(L){console.error("加载 waifu.css 和 waifu-tips.js 失败",L)}initWidget({waifuPath:`${R}waifu-tips.json`,cubism2Path:`${R}live2d.min.js`,cubism5Path:`${R}cubism5/live2dcubismcore.js`,tools:["hitokoto","asteroids","switch-model","switch-texture","photo","info","quit"],logLevel:"warn",drag:!0})}return V(()=>{i_.parseFont("Standard",V_),g(),x(),console.log(`
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
  `)}),(m,L)=>(B(),z("div",{class:"slidev-layout cover",style:T_(c.value)},[e("div",j_,[H_(m.$slots,"default")])],4))}}),J_={__name:"【slidev】轻松一刻-排列组合网红题.md__slidev_1",setup(I){const{$clicksContext:g,$frontmatter:d}=k();return g.setup(),(c,h)=>{const R=F_,N=B_,x=b_;return B(),r_(X_,O_(P_(n_(w_)(n_(d),0))),{default:W_(()=>[j(R),j(N),j(x,{timeList:[0,25,36,59,40.5,56.5,41.5,36,57.5,51,53.5]}),h[0]||(h[0]=e("div",{class:"bg-gradient-to-br from-[#c8e6c9] to-[#dcf1dd] absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-4"},[e("h1",{class:"title-stroke !text-[#059669] !mb-1 font-black tracking-tighter text-center"}," 排列组合网红题 "),e("div",{class:"flex flex-col justify-center items-center gap-3 mb-2"},[e("h2",{class:"flex justify-center items-center font-black text-center !text-[#059669] !text-2xl md:!text-3xl"},[e("div",{class:"mx-2 bg-[#10b98126] px-4 py-1.5 rounded-xl"},[e("span",{class:"!text-2xl md:!text-3xl text-[#059669]"},"枚举+隔板法")]),e("span",{class:"subtitle-stroke"},"+"),e("div",{class:"mx-2 bg-[#10b98126] px-4 py-1.5 rounded-xl"},[e("span",{class:"!text-2xl md:!text-3xl text-[#059669]"},"生成函数")]),e("span",{class:"subtitle-stroke"},"你都掌握了吗？")])]),e("div",{class:"mb-2 bordered-box p-4 border-4 border-[#059669] bg-gradient-to-br from-[#c8e6c9] to-[#dcf1dd] px-4 rounded-2xl shadow-lg flex flex-col items-center justify-center text-lg md:text-xl text-[#059669] font-serif"},[e("p",null,[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("msub",null,[e("mi",null,"x"),e("mn",null,"1")]),e("mo",null,"+"),e("msub",null,[e("mi",null,"x"),e("mn",null,"2")]),e("mo",null,"+"),e("msub",null,[e("mi",null,"x"),e("mn",null,"3")]),e("mo",null,"+"),e("mn",null,"2"),e("msub",null,[e("mi",null,"x"),e("mn",null,"4")]),e("mo",null,"+"),e("mn",null,"2"),e("msub",null,[e("mi",null,"x"),e("mn",null,"5")]),e("mo",null,"+"),e("mn",null,"3"),e("msub",null,[e("mi",null,"x"),e("mn",null,"6")]),e("mo",null,"="),e("mn",null,"15")]),e("annotation",{encoding:"application/x-tex"},"x_{1}+x_{2}+x_{3}+2x_{4}+2x_{5}+3x_{6}=15")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.7333em","vertical-align":"-0.15em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"x"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3011em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},[e("span",{class:"mord mtight"},"1")])])])]),e("span",{class:"vlist-s"},"​")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.7333em","vertical-align":"-0.15em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"x"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3011em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},[e("span",{class:"mord mtight"},"2")])])])]),e("span",{class:"vlist-s"},"​")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.7333em","vertical-align":"-0.15em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"x"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3011em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},[e("span",{class:"mord mtight"},"3")])])])]),e("span",{class:"vlist-s"},"​")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.7944em","vertical-align":"-0.15em"}}),e("span",{class:"mord"},"2"),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"x"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3011em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},[e("span",{class:"mord mtight"},"4")])])])]),e("span",{class:"vlist-s"},"​")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.7944em","vertical-align":"-0.15em"}}),e("span",{class:"mord"},"2"),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"x"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3011em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},[e("span",{class:"mord mtight"},"5")])])])]),e("span",{class:"vlist-s"},"​")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.7944em","vertical-align":"-0.15em"}}),e("span",{class:"mord"},"3"),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"x"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3011em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},[e("span",{class:"mord mtight"},"6")])])])]),e("span",{class:"vlist-s"},"​")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6444em"}}),e("span",{class:"mord"},"15")])])])]),e("p",null,"的正整数解有多少个？")]),e("p",{class:"text-[#059669] text-2xl md:text-3xl !mt-2 text-center"}," 快来回顾下基础~ "),e("p",{class:"text-[#059669] text-2xl md:text-3xl !mt-0 text-center"}," 顺便分享个人对枚举的理解 ")],-1))]),_:1},16)}}},_e=D_(J_,[["__scopeId","data-v-e18d6c2c"]]);export{_e as default};
