import{_ as C_}from"./slidev/KaTexBlockWrapper.vue_vue_type_script_setup_true_lang-Cde5ZO_n.js";import{r as U,L as K,p as N_,O as S_,f as X,o as k,i as T_,b as o_,g as _,k as L_,n as v_,t as x_,aK as y_,F as M_,d as u_,a2 as H_,z as W_,j as b_,w as a_,e as j,m as O_,v as w_,x as P_,T as n_}from"./modules/vue-D7i0zGR_.js";import{u as G,f as D_}from"./slidev/context-D_6iEadx.js";import{_ as B_}from"./index-DNzUifCN.js";import"./modules/shiki-0h5qVANN.js";const F_={__name:"MovingWatermark",props:{colorCls:{type:String,default:"bg-gradient-to-r from-[#2d644b] to-green-600 bg-clip-text text-transparent"},opacity:{type:Number,default:1},text:{type:String,default:"Hans码数理哲"}},setup(m){G();const R=U(null),f=U(null),I=U({x:0,y:0}),A=U({x:0,y:0}),h=U({width:0,height:0}),S=()=>{if(!R.value)return;const d=document.getElementById("slide-content");let g=1;if(d){const C=getComputedStyle(d).getPropertyValue("--slidev-slide-scale");C&&(g=parseFloat(C)||1)}const b=R.value.getBoundingClientRect();h.value.width=b.width/g,h.value.height=b.height/g},M=()=>{(h.value.width===0||h.value.height===0)&&S();const d=f.value?.offsetWidth||60,g=f.value?.offsetHeight||20;I.value={x:Math.random()*(h.value.width-d)+d/2,y:Math.random()*(h.value.height-g)+g/2};const b=1.2+Math.random()*.6,C=(1/12+Math.random()/3)*Math.PI;A.value={x:Math.cos(C)*b,y:Math.sin(C)*b}},N=()=>{const d=f.value?.offsetWidth||60,g=f.value?.offsetHeight||20;I.value.x+=A.value.x,I.value.y+=A.value.y,(I.value.x<=0||I.value.x>=h.value.width-d)&&(A.value.x=-A.value.x,I.value.x=Math.max(0,Math.min(h.value.width-d,I.value.x))),(I.value.y<=0||I.value.y>=h.value.height-g)&&(A.value.y=-A.value.y,I.value.y=Math.max(0,Math.min(h.value.height-g,I.value.y))),requestAnimationFrame(N)};return K(async()=>{await N_(),S(),M(),requestAnimationFrame(N),window.addEventListener("resize",S)}),S_(()=>{window.removeEventListener("resize",S)}),(d,g)=>(k(),X(M_,null,[T_(" teleport 让 position: fixed 能够重新生效 "),(k(),o_(y_,{to:"#slide-content"},[_("div",{ref_key:"containerRef",ref:R,class:"fixed inset-0 pointer-events-none overflow-hidden z-50"},[_("p",{ref_key:"textRef",ref:f,class:v_(["absolute select-none !m-0 truncate",m.colorCls]),style:L_({left:`${I.value.x}px`,top:`${I.value.y}px`,fontSize:"20px",opacity:m.opacity,userSelect:"none",pointerEvents:"none"})},x_(m.text),7)],512)]))],2112))}},U_=u_({__name:"SlidevPageRedirector",setup(m){const{$nav:R}=G();function f(I){const A=Array.isArray(I)?I[0]:I;return Number(A)}return K(()=>{const I=H_(),A=I.query.page;if(!A)return;const h=I.query.clicks,S=f(A),M=f(h);if(!Number.isInteger(S)||S<=0){console.error("页码不合法，请输入正整数");return}R.value.go(S),!(!Number.isInteger(M)||M<0)&&console.warn("拿到 clicks 参数：",M,"，但我暂未找到正确跳转到相应点击次数的方法qwq")}),(I,A)=>(k(),X("div"))}});function l_(m){return m.startsWith("/")?"/slidev-math-videos/260410/"+m.slice(1):m}function $_(m,R=!1){const f=m&&["#","rgb","hsl"].some(A=>m.indexOf(A)===0),I={background:f?m:void 0,color:m&&!f?"white":void 0,backgroundImage:f?void 0:m?R?`linear-gradient(#0005, #0008), url(${l_(m)})`:`url("${l_(m)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return I.background||delete I.background,I}const k_={FULL_WIDTH:0,FITTING:1,SMUSHING:2,CONTROLLED_SMUSHING:3};class G_{constructor(){this.comment="",this.numChars=0,this.options={}}}const z=["1Row","3-D","3D Diagonal","3D-ASCII","3x5","4Max","5 Line Oblique","AMC 3 Line","AMC 3 Liv1","AMC AAA01","AMC Neko","AMC Razor","AMC Razor2","AMC Slash","AMC Slider","AMC Thin","AMC Tubes","AMC Untitled","ANSI Compact","ANSI Regular","ANSI Shadow","ASCII 12","ASCII 9","ASCII New Roman","Acrobatic","Alligator","Alligator2","Alpha","Alphabet","Arrows","Avatar","B1FF","Babyface Lame","Babyface Leet","Banner","Banner3-D","Banner3","Banner4","Barbwire","Basic","Bear","Bell","Benjamin","Big ASCII 12","Big ASCII 9","Big Chief","Big Money-ne","Big Money-nw","Big Money-se","Big Money-sw","Big Mono 12","Big Mono 9","Big","Bigfig","Binary","Block","Blocks","Bloody","BlurVision ASCII","Bolger","Braced","Bright","Broadway KB","Broadway","Bubble","Bulbhead","Caligraphy","Caligraphy2","Calvin S","Cards","Catwalk","Chiseled","Chunky","Circle","Classy","Coder Mini","Coinstak","Cola","Colossal","Computer","Contessa","Contrast","Cosmike","Cosmike2","Crawford","Crawford2","Crazy","Cricket","Cursive","Cyberlarge","Cybermedium","Cybersmall","Cygnet","DANC4","DOS Rebel","DWhistled","Dancing Font","Decimal","Def Leppard","Delta Corps Priest 1","DiamFont","Diamond","Diet Cola","Digital","Doh","Doom","Dot Matrix","Double Shorts","Double","Dr Pepper","Efti Chess","Efti Font","Efti Italic","Efti Piti","Efti Robot","Efti Wall","Efti Water","Electronic","Elite","Emboss 2","Emboss","Epic","Fender","Filter","Fire Font-k","Fire Font-s","Flipped","Flower Power","Font Font","Four Tops","Fraktur","Fun Face","Fun Faces","Future Smooth","Future Thin","Future","Fuzzy","Georgi16","Georgia11","Ghost","Ghoulish","Glenyn","Goofy","Gothic","Graceful","Gradient","Graffiti","Greek","Heart Left","Heart Right","Henry 3D","Hex","Hieroglyphs","Hollywood","Horizontal Left","Horizontal Right","ICL-1900","Impossible","Invita","Isometric1","Isometric2","Isometric3","Isometric4","Italic","Ivrit","JS Block Letters","JS Bracket Letters","JS Capital Curves","JS Cursive","JS Stick Letters","Jacky","Jazmine","Jerusalem","Katakana","Kban","Keyboard","Knob","Konto Slant","Konto","LCD","Larry 3D 2","Larry 3D","Lean","Letter","Letters","Lil Devil","Line Blocks","Linux","Lockergnome","Madrid","Marquee","Maxfour","Merlin1","Merlin2","Mike","Mini","Mirror","Mnemonic","Modular","Mono 12","Mono 9","Morse","Morse2","Moscow","Mshebrew210","Muzzle","NScript","NT Greek","NV Script","Nancyj-Fancy","Nancyj-Improved","Nancyj-Underlined","Nancyj","Nipples","O8","OS2","Octal","Ogre","Old Banner","Pagga","Patorjk's Cheese","Patorjk-HeX","Pawp","Peaks Slant","Peaks","Pebbles","Pepper","Poison","Puffy","Puzzle","Pyramid","Rammstein","Rebel","Rectangles","Red Phoenix","Relief","Relief2","Reverse","Roman","Rot13","Rotated","Rounded","Rowan Cap","Rozzo","RubiFont","Runic","Runyc","S Blood","SL Script","Santa Clara","Script","Serifcap","Shaded Blocky","Shadow","Shimrod","Short","Slant Relief","Slant","Slide","Small ASCII 12","Small ASCII 9","Small Block","Small Braille","Small Caps","Small Isometric1","Small Keyboard","Small Mono 12","Small Mono 9","Small Poison","Small Script","Small Shadow","Small Slant","Small Tengwar","Small","Soft","Speed","Spliff","Stacey","Stampate","Stampatello","Standard","Star Strips","Star Wars","Stellar","Stforek","Stick Letters","Stop","Straight","Stronger Than All","Sub-Zero","Swamp Land","Swan","Sweet","THIS","Tanja","Tengwar","Term","Terrace","Test1","The Edge","Thick","Thin","Thorned","Three Point","Ticks Slant","Ticks","Tiles","Tinker-Toy","Tmplr","Tombstone","Train","Trek","Tsalagi","Tubular","Twisted","Two Point","USA Flag","Univers","Upside Down Text","Varsity","Wavescape","Wavy","Weird","Wet Letter","Whimsy","WideTerm","Wow","miniwi"],i_={"ANSI-Compact":"ANSI Compact"},$=m=>i_[m]?i_[m]:m;function V_(m){return/[.*+?^${}()|[\]\\]/.test(m)?"\\"+m:m}const r_=(()=>{const{FULL_WIDTH:m=0,FITTING:R,SMUSHING:f,CONTROLLED_SMUSHING:I}=k_,A={},h={font:"Standard",fontPath:"./fonts",fetchFontIfMissing:!0};function S(s,a,e){const t=V_(s.trim().slice(-1))||"@",n=a===e-1?new RegExp(t+t+"?\\s*$"):new RegExp(t+"\\s*$");return s.replace(n,"")}function M(s=-1,a=null){let e={},t,n=[[16384,"vLayout",f],[8192,"vLayout",R],[4096,"vRule5",!0],[2048,"vRule4",!0],[1024,"vRule3",!0],[512,"vRule2",!0],[256,"vRule1",!0],[128,"hLayout",f],[64,"hLayout",R],[32,"hRule6",!0],[16,"hRule5",!0],[8,"hRule4",!0],[4,"hRule3",!0],[2,"hRule2",!0],[1,"hRule1",!0]];t=a!==null?a:s;for(const[l,i,r]of n)t>=l?(t-=l,e[i]===void 0&&(e[i]=r)):i!=="vLayout"&&i!=="hLayout"&&(e[i]=!1);return typeof e.hLayout>"u"?s===0?e.hLayout=R:s===-1?e.hLayout=m:e.hRule1||e.hRule2||e.hRule3||e.hRule4||e.hRule5||e.hRule6?e.hLayout=I:e.hLayout=f:e.hLayout===f&&(e.hRule1||e.hRule2||e.hRule3||e.hRule4||e.hRule5||e.hRule6)&&(e.hLayout=I),typeof e.vLayout>"u"?e.vRule1||e.vRule2||e.vRule3||e.vRule4||e.vRule5?e.vLayout=I:e.vLayout=m:e.vLayout===f&&(e.vRule1||e.vRule2||e.vRule3||e.vRule4||e.vRule5)&&(e.vLayout=I),e}function N(s,a,e=""){return s===a&&s!==e?s:!1}function d(s,a){let e="|/\\[]{}()<>";if(s==="_"){if(e.indexOf(a)!==-1)return a}else if(a==="_"&&e.indexOf(s)!==-1)return s;return!1}function g(s,a){let e="| /\\ [] {} () <>",t=e.indexOf(s),n=e.indexOf(a);if(t!==-1&&n!==-1&&t!==n&&Math.abs(t-n)!==1){const l=Math.max(t,n),i=l+1;return e.substring(l,i)}return!1}function b(s,a){let e="[] {} ()",t=e.indexOf(s),n=e.indexOf(a);return t!==-1&&n!==-1&&Math.abs(t-n)<=1?"|":!1}function C(s,a){return{"/\\":"|","\\/":"Y","><":"X"}[s+a]||!1}function J(s,a,e=""){return s===e&&a===e?e:!1}function Y(s,a){return s===a?s:!1}function q(s,a){return d(s,a)}function Z(s,a){return g(s,a)}function Q(s,a){return s==="-"&&a==="_"||s==="_"&&a==="-"?"=":!1}function __(s,a){return s==="|"&&a==="|"?"|":!1}function w(s,a,e){return a===" "||a===""||a===e&&s!==" "?s:a}function c_(s,a,e){if(e.fittingRules&&e.fittingRules.vLayout===m)return"invalid";let t,n=Math.min(s.length,a.length),l,i,r=!1,T;if(n===0)return"invalid";for(t=0;t<n;t++)if(l=s.substring(t,t+1),i=a.substring(t,t+1),l!==" "&&i!==" "){if(e.fittingRules&&e.fittingRules.vLayout===R)return"invalid";if(e.fittingRules&&e.fittingRules.vLayout===f)return"end";if(__(l,i)){r=r||!1;continue}if(T=!1,T=e.fittingRules&&e.fittingRules.vRule1?Y(l,i):T,T=!T&&e.fittingRules&&e.fittingRules.vRule2?q(l,i):T,T=!T&&e.fittingRules&&e.fittingRules.vRule3?Z(l,i):T,T=!T&&e.fittingRules&&e.fittingRules.vRule4?Q(l,i):T,r=!0,!T)return"invalid"}return r?"end":"valid"}function A_(s,a,e){let t=s.length,n=s.length,l,i,r,T=1,o,u,L;for(;T<=t;){for(l=s.slice(Math.max(0,n-T),n),i=a.slice(0,Math.min(t,T)),r=i.length,L="",o=0;o<r;o++)if(u=c_(l[o],i[o],e),u==="end")L=u;else if(u==="invalid"){L=u;break}else L===""&&(L="valid");if(L==="invalid"){T--;break}if(L==="end")break;L==="valid"&&T++}return Math.min(t,T)}function m_(s,a,e){let t,n=Math.min(s.length,a.length),l,i,r="",T;const o=e.fittingRules||{};for(t=0;t<n;t++)l=s.substring(t,t+1),i=a.substring(t,t+1),l!==" "&&i!==" "?o.vLayout===R||o.vLayout===f?r+=w(l,i):(T=!1,T=o.vRule5?__(l,i):T,T=!T&&o.vRule1?Y(l,i):T,T=!T&&o.vRule2?q(l,i):T,T=!T&&o.vRule3?Z(l,i):T,T=!T&&o.vRule4?Q(l,i):T,r+=T):r+=w(l,i);return r}function E_(s,a,e,t){let n=s.length,l=a.length,i=s.slice(0,Math.max(0,n-e)),r=s.slice(Math.max(0,n-e),n),T=a.slice(0,Math.min(e,l)),o,u,L,c=[],E;for(u=r.length,o=0;o<u;o++)o>=l?L=r[o]:L=m_(r[o],T[o],t),c.push(L);return E=a.slice(Math.min(e,l),l),[...i,...c,...E]}function e_(s,a){const e=" ".repeat(a);return s.map(t=>t+e)}function I_(s,a,e){let t=s[0].length,n=a[0].length,l;return t>n?a=e_(a,t-n):n>t&&(s=e_(s,n-t)),l=A_(s,a,e),E_(s,a,l,e)}function h_(s,a,e){const t=e.fittingRules||{};if(t.hLayout===m)return 0;let n,l=s.length,i=a.length,r=l,T=1,o=!1,u,L,c,E;if(l===0)return 0;_:for(;T<=r;){const H=l-T;for(u=s.substring(H,H+T),L=a.substring(0,Math.min(T,i)),n=0;n<Math.min(T,i);n++)if(c=u.substring(n,n+1),E=L.substring(n,n+1),c!==" "&&E!==" "){if(t.hLayout===R){T=T-1;break _}else if(t.hLayout===f){(c===e.hardBlank||E===e.hardBlank)&&(T=T-1);break _}else if(o=!0,!(t.hRule1&&N(c,E,e.hardBlank)||t.hRule2&&d(c,E)||t.hRule3&&g(c,E)||t.hRule4&&b(c,E)||t.hRule5&&C(c,E)||t.hRule6&&J(c,E,e.hardBlank))){T=T-1;break _}}if(o)break;T++}return Math.min(r,T)}function V(s,a,e,t){let n,l,i=[],r,T,o,u,L,c,E,H;const v=t.fittingRules||{};if(typeof t.height!="number")throw new Error("height is not defined.");for(n=0;n<t.height;n++){E=s[n],H=a[n],L=E.length,c=H.length,r=L-e,T=E.slice(0,Math.max(0,r)),o="";const F=Math.max(0,L-e);let W=E.substring(F,F+e),O=H.substring(0,Math.min(e,c));for(l=0;l<e;l++){let y=l<L?W.substring(l,l+1):" ",x=l<c?O.substring(l,l+1):" ";if(y!==" "&&x!==" ")if(v.hLayout===R||v.hLayout===f)o+=w(y,x,t.hardBlank);else{const g_=v.hRule1&&N(y,x,t.hardBlank)||v.hRule2&&d(y,x)||v.hRule3&&g(y,x)||v.hRule4&&b(y,x)||v.hRule5&&C(y,x)||v.hRule6&&J(y,x,t.hardBlank)||w(y,x,t.hardBlank);o+=g_}else o+=w(y,x,t.hardBlank)}e>=c?u="":u=H.substring(e,e+Math.max(0,c-e)),i[n]=T+o+u}return i}function P(s){return new Array(s).fill("")}const B=function(s){return Math.max(...s.map(a=>a.length))};function D(s,a,e){return s.reduce(function(t,n){return V(t,n.fig,n.overlap||0,e)},P(a))}function f_(s,a,e){for(let t=s.length-1;t>0;t--){const n=D(s.slice(0,t),a,e);if(B(n)<=e.width)return{outputFigText:n,chars:s.slice(t)}}return{outputFigText:P(a),chars:s}}function R_(s,a,e){let t,n,l=0,i,r,T,o=e.height,u=[],L,c={chars:[],overlap:l},E=[],H,v,F,W,O;if(typeof o!="number")throw new Error("height is not defined.");r=P(o);const y=e.fittingRules||{};for(e.printDirection===1&&(s=s.split("").reverse().join("")),T=s.length,t=0;t<T;t++)if(H=s.substring(t,t+1),v=H.match(/\s/),n=a[H.charCodeAt(0)],W=null,n){if(y.hLayout!==m){for(l=1e4,i=0;i<o;i++)l=Math.min(l,h_(r[i],n[i],e));l=l===1e4?0:l}if(e.width>0&&(e.whitespaceBreak?(F=D(c.chars.concat([{fig:n,overlap:l}]),o,e),W=D(E.concat([{fig:F,overlap:c.overlap}]),o,e),L=B(W)):(W=V(r,n,l,e),L=B(W)),L>=e.width&&t>0&&(e.whitespaceBreak?(r=D(E.slice(0,-1),o,e),E.length>1&&(u.push(r),r=P(o)),E=[]):(u.push(r),r=P(o)))),e.width>0&&e.whitespaceBreak&&((!v||t===T-1)&&c.chars.push({fig:n,overlap:l}),v||t===T-1)){for(O=null;W=D(c.chars,o,e),L=B(W),L>=e.width;)O=f_(c.chars,o,e),c={chars:O.chars},u.push(O.outputFigText);L>0&&(O?E.push({fig:W,overlap:1}):E.push({fig:W,overlap:c.overlap})),v&&(E.push({fig:n,overlap:l}),r=P(o)),t===T-1&&(r=D(E,o,e)),c={chars:[],overlap:l};continue}r=V(r,n,l,e)}return B(r)>0&&u.push(r),e.showHardBlanks||u.forEach(function(x){for(T=x.length,i=0;i<T;i++)x[i]=x[i].replace(new RegExp("\\"+e.hardBlank,"g")," ")}),s===""&&u.length===0&&u.push(new Array(o).fill("")),u}const d_=function(s,a){let e;const t=a.fittingRules||{};if(s==="default")e={hLayout:t.hLayout,hRule1:t.hRule1,hRule2:t.hRule2,hRule3:t.hRule3,hRule4:t.hRule4,hRule5:t.hRule5,hRule6:t.hRule6};else if(s==="full")e={hLayout:m,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(s==="fitted")e={hLayout:R,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(s==="controlled smushing")e={hLayout:I,hRule1:!0,hRule2:!0,hRule3:!0,hRule4:!0,hRule5:!0,hRule6:!0};else if(s==="universal smushing")e={hLayout:f,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else return;return e},p_=function(s,a){let e={};const t=a.fittingRules||{};if(s==="default")e={vLayout:t.vLayout,vRule1:t.vRule1,vRule2:t.vRule2,vRule3:t.vRule3,vRule4:t.vRule4,vRule5:t.vRule5};else if(s==="full")e={vLayout:m,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(s==="fitted")e={vLayout:R,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(s==="controlled smushing")e={vLayout:I,vRule1:!0,vRule2:!0,vRule3:!0,vRule4:!0,vRule5:!0};else if(s==="universal smushing")e={vLayout:f,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else return;return e},t_=function(s,a,e){e=e.replace(/\r\n/g,`
`).replace(/\r/g,`
`);const t=$(s);let n=e.split(`
`),l=[],i,r,T;for(r=n.length,i=0;i<r;i++)l=l.concat(R_(n[i],A[t],a));for(r=l.length,T=l[0],i=1;i<r;i++)T=I_(T,l[i],a);return T?T.join(`
`):""};function s_(s,a){let e;if(typeof structuredClone<"u"?e=structuredClone(s):e=JSON.parse(JSON.stringify(s)),e.showHardBlanks=a.showHardBlanks||!1,e.width=a.width||-1,e.whitespaceBreak=a.whitespaceBreak||!1,a.horizontalLayout){const t=d_(a.horizontalLayout,s);t&&Object.assign(e.fittingRules,t)}if(a.verticalLayout){const t=p_(a.verticalLayout,s);t&&Object.assign(e.fittingRules,t)}return e.printDirection=a.printDirection!==null&&a.printDirection!==void 0?a.printDirection:s.printDirection,e}const p=async function(s,a,e){return p.text(s,a,e)};return p.text=async function(s,a,e){s=s+"";let t,n;typeof a=="function"?(n=a,t={font:h.font}):typeof a=="string"?(t={font:a},n=e):a?(t=a,n=e):(t={font:h.font},n=e);const l=t.font||h.font;try{const i=await p.loadFont(l),r=i?t_(l,s_(i,t),s):"";return n&&n(null,r),r}catch(i){const r=i instanceof Error?i:new Error(String(i));if(n)return n(r),"";throw r}},p.textSync=function(s,a){s=s+"",typeof a=="string"?a={font:a}:a=a||{};const e=a.font||h.font;let t=s_(p.loadFontSync(e),a);return t_(e,t,s)},p.metadata=async function(s,a){s=s+"";try{const e=await p.loadFont(s);if(!e)throw new Error("Error loading font.");const t=$(s),n=A[t]||{},l=[e,n.comment||""];return a&&a(null,e,n.comment),l}catch(e){const t=e instanceof Error?e:new Error(String(e));if(a)return a(t),null;throw t}},p.defaults=function(s){return s&&typeof s=="object"&&Object.assign(h,s),typeof structuredClone<"u"?structuredClone(h):JSON.parse(JSON.stringify(h))},p.parseFont=function(s,a,e=!0){if(A[s]&&!e)return A[s].options;a=a.replace(/\r\n/g,`
`).replace(/\r/g,`
`);const t=new G_,n=a.split(`
`),l=n.shift();if(!l)throw new Error("Invalid font file: missing header");const i=l.split(" "),r={hardBlank:i[0].substring(5,6),height:parseInt(i[1],10),baseline:parseInt(i[2],10),maxLength:parseInt(i[3],10),oldLayout:parseInt(i[4],10),numCommentLines:parseInt(i[5],10),printDirection:i[6]?parseInt(i[6],10):0,fullLayout:i[7]?parseInt(i[7],10):null,codeTagCount:i[8]?parseInt(i[8],10):null};if((r.hardBlank||"").length!==1||[r.height,r.baseline,r.maxLength,r.oldLayout,r.numCommentLines].some(u=>u==null||isNaN(u)))throw new Error("FIGlet header contains invalid values.");if(r.height==null||r.numCommentLines==null)throw new Error("FIGlet header contains invalid values.");r.fittingRules=M(r.oldLayout,r.fullLayout),t.options=r;const o=[];for(let u=32;u<=126;u++)o.push(u);if(o.push(196,214,220,228,246,252,223),n.length<r.numCommentLines+r.height*o.length)throw new Error(`FIGlet file is missing data. Line length: ${n.length}. Comment lines: ${r.numCommentLines}. Height: ${r.height}. Num chars: ${o.length}.`);for(t.comment=n.splice(0,r.numCommentLines).join(`
`),t.numChars=0;n.length>0&&t.numChars<o.length;){const u=o[t.numChars];t[u]=n.splice(0,r.height);for(let L=0;L<r.height;L++)typeof t[u][L]>"u"?t[u][L]="":t[u][L]=S(t[u][L],L,r.height);t.numChars++}for(;n.length>0;){const u=n.shift();if(!u||u.trim()==="")break;let L=u.split(" ")[0],c;if(/^-?0[xX][0-9a-fA-F]+$/.test(L))c=parseInt(L,16);else if(/^-?0[0-7]+$/.test(L))c=parseInt(L,8);else if(/^-?[0-9]+$/.test(L))c=parseInt(L,10);else throw new Error(`Error parsing data. Invalid data: ${L}`);if(c===-1||c<-2147483648||c>2147483647){const E=c===-1?"The char code -1 is not permitted.":`The char code cannot be ${c<-2147483648?"less than -2147483648":"greater than 2147483647"}.`;throw new Error(`Error parsing data. ${E}`)}t[c]=n.splice(0,r.height);for(let E=0;E<r.height;E++)typeof t[c][E]>"u"?t[c][E]="":t[c][E]=S(t[c][E],E,r.height);t.numChars++}return A[s]=t,r},p.loadedFonts=()=>Object.keys(A),p.clearLoadedFonts=()=>{Object.keys(A).forEach(s=>{delete A[s]})},p.loadFont=async function(s,a){const e=$(s);if(A[e]){const t=A[e].options;return a&&a(null,t),Promise.resolve(t)}try{if(!h.fetchFontIfMissing)throw new Error(`Font is not loaded: ${e}`);const t=await fetch(`${h.fontPath}/${e}.flf`);if(!t.ok)throw new Error(`Network response was not ok: ${t.status}`);const n=await t.text(),l=p.parseFont(e,n);return a&&a(null,l),l}catch(t){const n=t instanceof Error?t:new Error(String(t));if(a)return a(n),null;throw n}},p.loadFontSync=function(s){const a=$(s);if(A[a])return A[a].options;throw new Error("Synchronous font loading is not implemented for the browser, it will only work for fonts already loaded.")},p.preloadFonts=async function(s,a){try{for(const e of s){const t=$(e),n=await fetch(`${h.fontPath}/${t}.flf`);if(!n.ok)throw new Error(`Failed to preload fonts. Error fetching font: ${t}, status code: ${n.statusText}`);const l=await n.text();p.parseFont(t,l)}a&&a()}catch(e){const t=e instanceof Error?e:new Error(String(e));if(a){a(t);return}throw e}},p.fonts=function(s){return new Promise(function(a,e){a(z),s&&s(null,z)})},p.fontsSync=function(){return z},p.figFonts=A,p})(),j_=`flf2a$ 6 5 16 15 13 0 24463 229
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
         `,z_="/slidev-math-videos/";function K_(){return z_}const X_={class:"my-auto w-full"},J_=u_({__name:"cover",props:{background:{default:""}},setup(m){G();function R(){const N=r_.textSync("hans-green-theme",{font:"Standard"});console.log(N),console.log("🌟🌟 本PPT原作者：%cHans码数理哲","color: #16a34a; font-weight: bold; font-size: 30px;","🌟🌟")}const f=m,I=W_(()=>$_(f.background,!0)),h=`${K_()}live2d/`;function S(N,d){return new Promise((g,b)=>{let C;d==="css"?(C=document.createElement("link"),C.rel="stylesheet",C.href=N):d==="js"&&(C=document.createElement("script"),C.type="module",C.src=N),C&&(C.onload=()=>g(N),C.onerror=()=>b(N),document.head.appendChild(C))})}async function M(){const N=window.Image;window.Image=function(...d){const g=new N(...d);return g.crossOrigin="anonymous",g},window.Image.prototype=N.prototype;try{await Promise.all([S(`${h}waifu.css`,"css"),S(`${h}waifu-tips.js`,"js")])}catch(d){console.error("加载 waifu.css 和 waifu-tips.js 失败",d)}initWidget({waifuPath:`${h}waifu-tips.json`,cubism2Path:`${h}live2d.min.js`,cubism5Path:`${h}cubism5/live2dcubismcore.js`,tools:["hitokoto","asteroids","switch-model","switch-texture","photo","info","quit"],logLevel:"warn",drag:!0})}return K(()=>{r_.parseFont("Standard",j_),R(),M(),console.log(`
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
  `)}),(N,d)=>(k(),X("div",{class:"slidev-layout cover",style:L_(I.value)},[_("div",X_,[b_(N.$slots,"default")])],4))}}),Y_={class:"bg-gradient-to-br from-[#719cd4] to-[#5984bf] absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-4"},q_={class:"border-4 border-white bg-gradient-to-br from-[#719cd4] to-[#5984bf] px-4 rounded-2xl shadow-lg flex items-center justify-center text-lg md:text-xl text-white font-serif"},Z_={__name:"【slidev】26成都二诊三角换元压轴.md__slidev_1",setup(m){const{$clicksContext:R,$frontmatter:f}=G();return R.setup(),(I,A)=>{const h=U_,S=F_,M=C_;return k(),o_(J_,w_(P_(n_(D_)(n_(f),0))),{default:a_(()=>[j(h),j(S),T_(' <AutoSlide :timeList="[0, 0]" /> '),_("div",Y_,[A[1]||(A[1]=_("h1",{class:"title-stroke !text-[#3468ab] !mb-1 font-black tracking-tighter text-center"}," 2026成都二诊压轴 ",-1)),A[2]||(A[2]=_("div",{class:"flex flex-col justify-center items-center gap-3 mb-2"},[_("h2",{class:"flex justify-center items-center font-black text-center !text-[#4a81c8] !text-2xl md:!text-3xl"},[_("div",{class:"mx-2 bg-white px-4 py-1.5 rounded-xl"},[_("span",{class:"!text-2xl md:!text-3xl text-[#4a81c8]"},"三角换元求通项")]),_("span",{class:"subtitle-stroke"},"+"),_("div",{class:"mx-2 bg-white px-4 py-1.5 rounded-xl"},[_("span",{class:"!text-2xl md:!text-3xl text-[#4a81c8]"},"麦克劳林展开")]),_("span",{class:"subtitle-stroke"},"+"),_("div",{class:"mx-2 bg-white px-4 py-1.5 rounded-xl"},[_("span",{class:"!text-2xl md:!text-3xl text-[#4a81c8]"},"放缩")])])],-1)),_("div",q_,[j(M,O_({},{ranges:[]}),{default:a_(()=>[...A[0]||(A[0]=[_("p",null,[_("span",{class:"katex-display"},[_("span",{class:"katex"},[_("span",{class:"katex-mathml"},[_("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[_("semantics",null,[_("mrow",null,[_("mi",null,[_("mrow",null,[_("mo",{fence:"true"},"{"),_("mtable",{rowspacing:"0.36em",columnalign:"left left",columnspacing:"1em"},[_("mtr",null,[_("mtd",null,[_("mstyle",{scriptlevel:"0",displaystyle:"false"},[_("mrow",null,[_("msub",null,[_("mi",{mathvariant:"bold-italic"},"A"),_("mi",{mathvariant:"bold-italic"},"n")]),_("mo",{stretchy:"false"},"("),_("mi",{mathvariant:"bold-italic"},"m"),_("mo",{stretchy:"false"},")"),_("mo",null,"="),_("msub",null,[_("mi",{mathvariant:"bold-italic"},"A"),_("mrow",null,[_("mi",{mathvariant:"bold-italic"},"n"),_("mo",{mathvariant:"bold-italic"},"−"),_("mn",{mathvariant:"bold"},"1")])]),_("mo",{stretchy:"false"},"("),_("mi",{mathvariant:"bold-italic"},"m"),_("mo",{stretchy:"false"},")"),_("mo",{mathvariant:"bold-italic"},"+"),_("mo",{stretchy:"false"},"("),_("mn",{mathvariant:"bold"},"2"),_("mi",{mathvariant:"bold-italic"},"n"),_("mo",{mathvariant:"bold-italic"},"−"),_("mi",{mathvariant:"bold-italic"},"m"),_("mo",{stretchy:"false"},")"),_("msub",null,[_("mi",{mathvariant:"bold-italic"},"A"),_("mrow",null,[_("mi",{mathvariant:"bold-italic"},"n"),_("mo",{mathvariant:"bold-italic"},"−"),_("mn",{mathvariant:"bold"},"1")])]),_("mo",{stretchy:"false"},"("),_("mi",{mathvariant:"bold-italic"},"m"),_("mo",{mathvariant:"bold-italic"},"−"),_("mn",{mathvariant:"bold"},"1"),_("mo",{stretchy:"false"},")")])])])]),_("mtr",null,[_("mtd",null,[_("mstyle",{scriptlevel:"0",displaystyle:"false"},[_("mrow",null,[_("mi",{mathvariant:"bold-italic"},"d"),_("mi",{mathvariant:"bold-italic"},"p"),_("mo",{stretchy:"false"},"["),_("mi",{mathvariant:"bold-italic"},"i"),_("mo",{separator:"true"},","),_("mi",{mathvariant:"bold-italic"},"j"),_("mo",{stretchy:"false"},"]"),_("mo",null,"="),_("mi",{mathvariant:"bold-italic"},"d"),_("mi",{mathvariant:"bold-italic"},"p"),_("mo",{stretchy:"false"},"["),_("mi",{mathvariant:"bold-italic"},"i"),_("mo",{mathvariant:"bold-italic"},"−"),_("mn",{mathvariant:"bold"},"1"),_("mo",{separator:"true"},","),_("mi",{mathvariant:"bold-italic"},"j"),_("mo",{stretchy:"false"},"]"),_("mo",{mathvariant:"bold-italic"},"+"),_("mo",{stretchy:"false"},"("),_("mi",{mathvariant:"bold-italic"},"n"),_("mo",{mathvariant:"bold-italic"},"−"),_("mi",{mathvariant:"bold-italic"},"j"),_("mo",{mathvariant:"bold-italic"},"+"),_("mn",{mathvariant:"bold"},"1"),_("mo",{stretchy:"false"},")"),_("mi",{mathvariant:"bold-italic"},"d"),_("mi",{mathvariant:"bold-italic"},"p"),_("mo",{stretchy:"false"},"["),_("mi",{mathvariant:"bold-italic"},"i"),_("mo",{mathvariant:"bold-italic"},"−"),_("mn",{mathvariant:"bold"},"1"),_("mo",{separator:"true"},","),_("mi",{mathvariant:"bold-italic"},"j"),_("mo",{mathvariant:"bold-italic"},"−"),_("mn",{mathvariant:"bold"},"1"),_("mo",{stretchy:"false"},"]")])])])])])])])]),_("annotation",{encoding:"application/x-tex"},"\\boldsymbol{ \\begin{cases} A_n(m) = A_{n-1}(m) + (2n-m)A_{n-1}(m-1) \\\\ dp[i,j]=dp[i-1,j]+(n-j+1)dp[i-1,j-1] \\end{cases} } ")])])]),_("span",{class:"katex-html","aria-hidden":"true"},[_("span",{class:"base"},[_("span",{class:"strut",style:{height:"3em","vertical-align":"-1.25em"}}),_("span",{class:"mord"},[_("span",{class:"mord"},[_("span",{class:"minner"},[_("span",{class:"mopen delimcenter",style:{top:"0em"}},[_("span",{class:"delimsizing size4"},"{")]),_("span",{class:"mord"},[_("span",{class:"mtable"},[_("span",{class:"col-align-l"},[_("span",{class:"vlist-t vlist-t2"},[_("span",{class:"vlist-r"},[_("span",{class:"vlist",style:{height:"1.69em"}},[_("span",{style:{top:"-3.69em"}},[_("span",{class:"pstrut",style:{height:"3.008em"}}),_("span",{class:"mord"},[_("span",{class:"mord"},[_("span",{class:"mord mathnormal"},"A"),_("span",{class:"msupsub"},[_("span",{class:"vlist-t vlist-t2"},[_("span",{class:"vlist-r"},[_("span",{class:"vlist",style:{height:"0.1514em"}},[_("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[_("span",{class:"pstrut",style:{height:"2.7em"}}),_("span",{class:"sizing reset-size6 size3 mtight"},[_("span",{class:"mord mathnormal mtight"},"n")])])]),_("span",{class:"vlist-s"},"​")]),_("span",{class:"vlist-r"},[_("span",{class:"vlist",style:{height:"0.15em"}},[_("span")])])])])]),_("span",{class:"mopen"},"("),_("span",{class:"mord mathnormal"},"m"),_("span",{class:"mclose"},")"),_("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),_("span",{class:"mrel"},"="),_("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),_("span",{class:"mord"},[_("span",{class:"mord mathnormal"},"A"),_("span",{class:"msupsub"},[_("span",{class:"vlist-t vlist-t2"},[_("span",{class:"vlist-r"},[_("span",{class:"vlist",style:{height:"0.3011em"}},[_("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[_("span",{class:"pstrut",style:{height:"2.7em"}}),_("span",{class:"sizing reset-size6 size3 mtight"},[_("span",{class:"mord mtight"},[_("span",{class:"mord mathnormal mtight"},"n"),_("span",{class:"mbin mtight"},"−"),_("span",{class:"mord mtight"},"1")])])])]),_("span",{class:"vlist-s"},"​")]),_("span",{class:"vlist-r"},[_("span",{class:"vlist",style:{height:"0.2083em"}},[_("span")])])])])]),_("span",{class:"mopen"},"("),_("span",{class:"mord mathnormal"},"m"),_("span",{class:"mclose"},")"),_("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),_("span",{class:"mbin"},"+"),_("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),_("span",{class:"mopen"},"("),_("span",{class:"mord"},"2"),_("span",{class:"mord mathnormal"},"n"),_("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),_("span",{class:"mbin"},"−"),_("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),_("span",{class:"mord mathnormal"},"m"),_("span",{class:"mclose"},")"),_("span",{class:"mord"},[_("span",{class:"mord mathnormal"},"A"),_("span",{class:"msupsub"},[_("span",{class:"vlist-t vlist-t2"},[_("span",{class:"vlist-r"},[_("span",{class:"vlist",style:{height:"0.3011em"}},[_("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[_("span",{class:"pstrut",style:{height:"2.7em"}}),_("span",{class:"sizing reset-size6 size3 mtight"},[_("span",{class:"mord mtight"},[_("span",{class:"mord mathnormal mtight"},"n"),_("span",{class:"mbin mtight"},"−"),_("span",{class:"mord mtight"},"1")])])])]),_("span",{class:"vlist-s"},"​")]),_("span",{class:"vlist-r"},[_("span",{class:"vlist",style:{height:"0.2083em"}},[_("span")])])])])]),_("span",{class:"mopen"},"("),_("span",{class:"mord mathnormal"},"m"),_("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),_("span",{class:"mbin"},"−"),_("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),_("span",{class:"mord"},"1"),_("span",{class:"mclose"},")")])]),_("span",{style:{top:"-2.25em"}},[_("span",{class:"pstrut",style:{height:"3.008em"}}),_("span",{class:"mord"},[_("span",{class:"mord mathnormal"},"d"),_("span",{class:"mord mathnormal"},"p"),_("span",{class:"mopen"},"["),_("span",{class:"mord mathnormal"},"i"),_("span",{class:"mpunct"},","),_("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),_("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j"),_("span",{class:"mclose"},"]"),_("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),_("span",{class:"mrel"},"="),_("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),_("span",{class:"mord mathnormal"},"d"),_("span",{class:"mord mathnormal"},"p"),_("span",{class:"mopen"},"["),_("span",{class:"mord mathnormal"},"i"),_("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),_("span",{class:"mbin"},"−"),_("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),_("span",{class:"mord"},"1"),_("span",{class:"mpunct"},","),_("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),_("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j"),_("span",{class:"mclose"},"]"),_("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),_("span",{class:"mbin"},"+"),_("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),_("span",{class:"mopen"},"("),_("span",{class:"mord mathnormal"},"n"),_("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),_("span",{class:"mbin"},"−"),_("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),_("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j"),_("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),_("span",{class:"mbin"},"+"),_("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),_("span",{class:"mord"},"1"),_("span",{class:"mclose"},")"),_("span",{class:"mord mathnormal"},"d"),_("span",{class:"mord mathnormal"},"p"),_("span",{class:"mopen"},"["),_("span",{class:"mord mathnormal"},"i"),_("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),_("span",{class:"mbin"},"−"),_("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),_("span",{class:"mord"},"1"),_("span",{class:"mpunct"},","),_("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),_("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j"),_("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),_("span",{class:"mbin"},"−"),_("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),_("span",{class:"mord"},"1"),_("span",{class:"mclose"},"]")])])]),_("span",{class:"vlist-s"},"​")]),_("span",{class:"vlist-r"},[_("span",{class:"vlist",style:{height:"1.19em"}},[_("span")])])])])])]),_("span",{class:"mclose nulldelimiter"})])])])])])])])],-1)])]),_:1},16)]),A[3]||(A[3]=_("p",{class:"text-white text-2xl md:text-3xl mt-6 text-center"}," 简单扩展后，还涉及欧拉公式~ ",-1))])]),_:1},16)}}},ae=B_(Z_,[["__scopeId","data-v-bdb2cca1"]]);export{ae as default};
