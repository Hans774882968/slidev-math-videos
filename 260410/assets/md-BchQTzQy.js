import{_ as C_}from"./slidev/KaTexBlockWrapper.vue_vue_type_script_setup_true_lang-BPZg-jQf.js";import{r as U,L as K,p as N_,O as S_,f as X,o as k,i as T_,b as o_,g as _,k as L_,n as v_,t as x_,aK as y_,F as M_,d as u_,a2 as H_,z as W_,j as O_,w as s_,e as z,m as b_,v as P_,x as w_,T as n_}from"./modules/vue-D7i0zGR_.js";import{u as G,f as D_}from"./slidev/context-CtIFZ8SF.js";import{_ as F_}from"./index-BfJ3qK2O.js";import"./modules/shiki-0h5qVANN.js";const B_={__name:"MovingWatermark",props:{colorCls:{type:String,default:"bg-gradient-to-r from-[#2d644b] to-green-600 bg-clip-text text-transparent"},opacity:{type:Number,default:1},text:{type:String,default:"Hans码数理哲"}},setup(E){G();const f=U(null),h=U(null),I=U({x:0,y:0}),u=U({x:0,y:0}),R=U({width:0,height:0}),N=()=>{if(!f.value)return;const S=document.getElementById("slide-content");let p=1;if(S){const W=getComputedStyle(S).getPropertyValue("--slidev-slide-scale");W&&(p=parseFloat(W)||1)}const H=f.value.getBoundingClientRect();R.value.width=H.width/p,R.value.height=H.height/p},M=()=>{(R.value.width===0||R.value.height===0)&&N();const S=h.value?.offsetWidth||60,p=h.value?.offsetHeight||20;I.value={x:Math.random()*(R.value.width-S)+S/2,y:Math.random()*(R.value.height-p)+p/2};const H=1.2+Math.random()*.6,W=(1/12+Math.random()/3)*Math.PI;u.value={x:Math.cos(W)*H,y:Math.sin(W)*H}},D=()=>{const S=h.value?.offsetWidth||60,p=h.value?.offsetHeight||20;I.value.x+=u.value.x,I.value.y+=u.value.y,(I.value.x<=0||I.value.x>=R.value.width-S)&&(u.value.x=-u.value.x,I.value.x=Math.max(0,Math.min(R.value.width-S,I.value.x))),(I.value.y<=0||I.value.y>=R.value.height-p)&&(u.value.y=-u.value.y,I.value.y=Math.max(0,Math.min(R.value.height-p,I.value.y))),requestAnimationFrame(D)};return K(async()=>{await N_(),N(),M(),requestAnimationFrame(D),window.addEventListener("resize",N)}),S_(()=>{window.removeEventListener("resize",N)}),(S,p)=>(k(),X(M_,null,[T_(" teleport 让 position: fixed 能够重新生效 "),(k(),o_(y_,{to:"#slide-content"},[_("div",{ref_key:"containerRef",ref:f,class:"fixed inset-0 pointer-events-none overflow-hidden z-50"},[_("p",{ref_key:"textRef",ref:h,class:v_(["absolute select-none !m-0 truncate",E.colorCls]),style:L_({left:`${I.value.x}px`,top:`${I.value.y}px`,fontSize:"20px",opacity:E.opacity,userSelect:"none",pointerEvents:"none"})},x_(E.text),7)],512)]))],2112))}},U_=u_({__name:"SlidevPageRedirector",setup(E){const{$nav:f}=G();function h(I){const u=Array.isArray(I)?I[0]:I;return Number(u)}return K(()=>{const I=H_(),u=I.query.page;if(!u)return;const R=I.query.clicks,N=h(u),M=h(R);if(!Number.isInteger(N)||N<=0){console.error("页码不合法，请输入正整数");return}f.value.go(N),!(!Number.isInteger(M)||M<0)&&console.warn("拿到 clicks 参数：",M,"，但我暂未找到正确跳转到相应点击次数的方法qwq")}),(I,u)=>(k(),X("div"))}});function l_(E){return E.startsWith("/")?"/slidev-math-videos/260410/"+E.slice(1):E}function $_(E,f=!1){const h=E&&["#","rgb","hsl"].some(u=>E.indexOf(u)===0),I={background:h?E:void 0,color:E&&!h?"white":void 0,backgroundImage:h?void 0:E?f?`linear-gradient(#0005, #0008), url(${l_(E)})`:`url("${l_(E)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return I.background||delete I.background,I}const k_={FULL_WIDTH:0,FITTING:1,SMUSHING:2,CONTROLLED_SMUSHING:3};class G_{constructor(){this.comment="",this.numChars=0,this.options={}}}const j=["1Row","3-D","3D Diagonal","3D-ASCII","3x5","4Max","5 Line Oblique","AMC 3 Line","AMC 3 Liv1","AMC AAA01","AMC Neko","AMC Razor","AMC Razor2","AMC Slash","AMC Slider","AMC Thin","AMC Tubes","AMC Untitled","ANSI Compact","ANSI Regular","ANSI Shadow","ASCII 12","ASCII 9","ASCII New Roman","Acrobatic","Alligator","Alligator2","Alpha","Alphabet","Arrows","Avatar","B1FF","Babyface Lame","Babyface Leet","Banner","Banner3-D","Banner3","Banner4","Barbwire","Basic","Bear","Bell","Benjamin","Big ASCII 12","Big ASCII 9","Big Chief","Big Money-ne","Big Money-nw","Big Money-se","Big Money-sw","Big Mono 12","Big Mono 9","Big","Bigfig","Binary","Block","Blocks","Bloody","BlurVision ASCII","Bolger","Braced","Bright","Broadway KB","Broadway","Bubble","Bulbhead","Caligraphy","Caligraphy2","Calvin S","Cards","Catwalk","Chiseled","Chunky","Circle","Classy","Coder Mini","Coinstak","Cola","Colossal","Computer","Contessa","Contrast","Cosmike","Cosmike2","Crawford","Crawford2","Crazy","Cricket","Cursive","Cyberlarge","Cybermedium","Cybersmall","Cygnet","DANC4","DOS Rebel","DWhistled","Dancing Font","Decimal","Def Leppard","Delta Corps Priest 1","DiamFont","Diamond","Diet Cola","Digital","Doh","Doom","Dot Matrix","Double Shorts","Double","Dr Pepper","Efti Chess","Efti Font","Efti Italic","Efti Piti","Efti Robot","Efti Wall","Efti Water","Electronic","Elite","Emboss 2","Emboss","Epic","Fender","Filter","Fire Font-k","Fire Font-s","Flipped","Flower Power","Font Font","Four Tops","Fraktur","Fun Face","Fun Faces","Future Smooth","Future Thin","Future","Fuzzy","Georgi16","Georgia11","Ghost","Ghoulish","Glenyn","Goofy","Gothic","Graceful","Gradient","Graffiti","Greek","Heart Left","Heart Right","Henry 3D","Hex","Hieroglyphs","Hollywood","Horizontal Left","Horizontal Right","ICL-1900","Impossible","Invita","Isometric1","Isometric2","Isometric3","Isometric4","Italic","Ivrit","JS Block Letters","JS Bracket Letters","JS Capital Curves","JS Cursive","JS Stick Letters","Jacky","Jazmine","Jerusalem","Katakana","Kban","Keyboard","Knob","Konto Slant","Konto","LCD","Larry 3D 2","Larry 3D","Lean","Letter","Letters","Lil Devil","Line Blocks","Linux","Lockergnome","Madrid","Marquee","Maxfour","Merlin1","Merlin2","Mike","Mini","Mirror","Mnemonic","Modular","Mono 12","Mono 9","Morse","Morse2","Moscow","Mshebrew210","Muzzle","NScript","NT Greek","NV Script","Nancyj-Fancy","Nancyj-Improved","Nancyj-Underlined","Nancyj","Nipples","O8","OS2","Octal","Ogre","Old Banner","Pagga","Patorjk's Cheese","Patorjk-HeX","Pawp","Peaks Slant","Peaks","Pebbles","Pepper","Poison","Puffy","Puzzle","Pyramid","Rammstein","Rebel","Rectangles","Red Phoenix","Relief","Relief2","Reverse","Roman","Rot13","Rotated","Rounded","Rowan Cap","Rozzo","RubiFont","Runic","Runyc","S Blood","SL Script","Santa Clara","Script","Serifcap","Shaded Blocky","Shadow","Shimrod","Short","Slant Relief","Slant","Slide","Small ASCII 12","Small ASCII 9","Small Block","Small Braille","Small Caps","Small Isometric1","Small Keyboard","Small Mono 12","Small Mono 9","Small Poison","Small Script","Small Shadow","Small Slant","Small Tengwar","Small","Soft","Speed","Spliff","Stacey","Stampate","Stampatello","Standard","Star Strips","Star Wars","Stellar","Stforek","Stick Letters","Stop","Straight","Stronger Than All","Sub-Zero","Swamp Land","Swan","Sweet","THIS","Tanja","Tengwar","Term","Terrace","Test1","The Edge","Thick","Thin","Thorned","Three Point","Ticks Slant","Ticks","Tiles","Tinker-Toy","Tmplr","Tombstone","Train","Trek","Tsalagi","Tubular","Twisted","Two Point","USA Flag","Univers","Upside Down Text","Varsity","Wavescape","Wavy","Weird","Wet Letter","Whimsy","WideTerm","Wow","miniwi"],i_={"ANSI-Compact":"ANSI Compact"},$=E=>i_[E]?i_[E]:E;function V_(E){return/[.*+?^${}()|[\]\\]/.test(E)?"\\"+E:E}const r_=(()=>{const{FULL_WIDTH:E=0,FITTING:f,SMUSHING:h,CONTROLLED_SMUSHING:I}=k_,u={},R={font:"Standard",fontPath:"./fonts",fetchFontIfMissing:!0};function N(a,s,e){const t=V_(a.trim().slice(-1))||"@",n=s===e-1?new RegExp(t+t+"?\\s*$"):new RegExp(t+"\\s*$");return a.replace(n,"")}function M(a=-1,s=null){let e={},t,n=[[16384,"vLayout",h],[8192,"vLayout",f],[4096,"vRule5",!0],[2048,"vRule4",!0],[1024,"vRule3",!0],[512,"vRule2",!0],[256,"vRule1",!0],[128,"hLayout",h],[64,"hLayout",f],[32,"hRule6",!0],[16,"hRule5",!0],[8,"hRule4",!0],[4,"hRule3",!0],[2,"hRule2",!0],[1,"hRule1",!0]];t=s!==null?s:a;for(const[l,i,r]of n)t>=l?(t-=l,e[i]===void 0&&(e[i]=r)):i!=="vLayout"&&i!=="hLayout"&&(e[i]=!1);return typeof e.hLayout>"u"?a===0?e.hLayout=f:a===-1?e.hLayout=E:e.hRule1||e.hRule2||e.hRule3||e.hRule4||e.hRule5||e.hRule6?e.hLayout=I:e.hLayout=h:e.hLayout===h&&(e.hRule1||e.hRule2||e.hRule3||e.hRule4||e.hRule5||e.hRule6)&&(e.hLayout=I),typeof e.vLayout>"u"?e.vRule1||e.vRule2||e.vRule3||e.vRule4||e.vRule5?e.vLayout=I:e.vLayout=E:e.vLayout===h&&(e.vRule1||e.vRule2||e.vRule3||e.vRule4||e.vRule5)&&(e.vLayout=I),e}function D(a,s,e=""){return a===s&&a!==e?a:!1}function S(a,s){let e="|/\\[]{}()<>";if(a==="_"){if(e.indexOf(s)!==-1)return s}else if(s==="_"&&e.indexOf(a)!==-1)return a;return!1}function p(a,s){let e="| /\\ [] {} () <>",t=e.indexOf(a),n=e.indexOf(s);if(t!==-1&&n!==-1&&t!==n&&Math.abs(t-n)!==1){const l=Math.max(t,n),i=l+1;return e.substring(l,i)}return!1}function H(a,s){let e="[] {} ()",t=e.indexOf(a),n=e.indexOf(s);return t!==-1&&n!==-1&&Math.abs(t-n)<=1?"|":!1}function W(a,s){return{"/\\":"|","\\/":"Y","><":"X"}[a+s]||!1}function J(a,s,e=""){return a===e&&s===e?e:!1}function Y(a,s){return a===s?a:!1}function q(a,s){return S(a,s)}function Z(a,s){return p(a,s)}function Q(a,s){return a==="-"&&s==="_"||a==="_"&&s==="-"?"=":!1}function __(a,s){return a==="|"&&s==="|"?"|":!1}function b(a,s,e){return s===" "||s===""||s===e&&a!==" "?a:s}function A_(a,s,e){if(e.fittingRules&&e.fittingRules.vLayout===E)return"invalid";let t,n=Math.min(a.length,s.length),l,i,r=!1,T;if(n===0)return"invalid";for(t=0;t<n;t++)if(l=a.substring(t,t+1),i=s.substring(t,t+1),l!==" "&&i!==" "){if(e.fittingRules&&e.fittingRules.vLayout===f)return"invalid";if(e.fittingRules&&e.fittingRules.vLayout===h)return"end";if(__(l,i)){r=r||!1;continue}if(T=!1,T=e.fittingRules&&e.fittingRules.vRule1?Y(l,i):T,T=!T&&e.fittingRules&&e.fittingRules.vRule2?q(l,i):T,T=!T&&e.fittingRules&&e.fittingRules.vRule3?Z(l,i):T,T=!T&&e.fittingRules&&e.fittingRules.vRule4?Q(l,i):T,r=!0,!T)return"invalid"}return r?"end":"valid"}function c_(a,s,e){let t=a.length,n=a.length,l,i,r,T=1,o,A,L;for(;T<=t;){for(l=a.slice(Math.max(0,n-T),n),i=s.slice(0,Math.min(t,T)),r=i.length,L="",o=0;o<r;o++)if(A=A_(l[o],i[o],e),A==="end")L=A;else if(A==="invalid"){L=A;break}else L===""&&(L="valid");if(L==="invalid"){T--;break}if(L==="end")break;L==="valid"&&T++}return Math.min(t,T)}function E_(a,s,e){let t,n=Math.min(a.length,s.length),l,i,r="",T;const o=e.fittingRules||{};for(t=0;t<n;t++)l=a.substring(t,t+1),i=s.substring(t,t+1),l!==" "&&i!==" "?o.vLayout===f||o.vLayout===h?r+=b(l,i):(T=!1,T=o.vRule5?__(l,i):T,T=!T&&o.vRule1?Y(l,i):T,T=!T&&o.vRule2?q(l,i):T,T=!T&&o.vRule3?Z(l,i):T,T=!T&&o.vRule4?Q(l,i):T,r+=T):r+=b(l,i);return r}function m_(a,s,e,t){let n=a.length,l=s.length,i=a.slice(0,Math.max(0,n-e)),r=a.slice(Math.max(0,n-e),n),T=s.slice(0,Math.min(e,l)),o,A,L,c=[],m;for(A=r.length,o=0;o<A;o++)o>=l?L=r[o]:L=E_(r[o],T[o],t),c.push(L);return m=s.slice(Math.min(e,l),l),[...i,...c,...m]}function e_(a,s){const e=" ".repeat(s);return a.map(t=>t+e)}function I_(a,s,e){let t=a[0].length,n=s[0].length,l;return t>n?s=e_(s,t-n):n>t&&(a=e_(a,n-t)),l=c_(a,s,e),m_(a,s,l,e)}function h_(a,s,e){const t=e.fittingRules||{};if(t.hLayout===E)return 0;let n,l=a.length,i=s.length,r=l,T=1,o=!1,A,L,c,m;if(l===0)return 0;_:for(;T<=r;){const x=l-T;for(A=a.substring(x,x+T),L=s.substring(0,Math.min(T,i)),n=0;n<Math.min(T,i);n++)if(c=A.substring(n,n+1),m=L.substring(n,n+1),c!==" "&&m!==" "){if(t.hLayout===f){T=T-1;break _}else if(t.hLayout===h){(c===e.hardBlank||m===e.hardBlank)&&(T=T-1);break _}else if(o=!0,!(t.hRule1&&D(c,m,e.hardBlank)||t.hRule2&&S(c,m)||t.hRule3&&p(c,m)||t.hRule4&&H(c,m)||t.hRule5&&W(c,m)||t.hRule6&&J(c,m,e.hardBlank))){T=T-1;break _}}if(o)break;T++}return Math.min(r,T)}function V(a,s,e,t){let n,l,i=[],r,T,o,A,L,c,m,x;const g=t.fittingRules||{};if(typeof t.height!="number")throw new Error("height is not defined.");for(n=0;n<t.height;n++){m=a[n],x=s[n],L=m.length,c=x.length,r=L-e,T=m.slice(0,Math.max(0,r)),o="";const B=Math.max(0,L-e);let y=m.substring(B,B+e),O=x.substring(0,Math.min(e,c));for(l=0;l<e;l++){let v=l<L?y.substring(l,l+1):" ",C=l<c?O.substring(l,l+1):" ";if(v!==" "&&C!==" ")if(g.hLayout===f||g.hLayout===h)o+=b(v,C,t.hardBlank);else{const g_=g.hRule1&&D(v,C,t.hardBlank)||g.hRule2&&S(v,C)||g.hRule3&&p(v,C)||g.hRule4&&H(v,C)||g.hRule5&&W(v,C)||g.hRule6&&J(v,C,t.hardBlank)||b(v,C,t.hardBlank);o+=g_}else o+=b(v,C,t.hardBlank)}e>=c?A="":A=x.substring(e,e+Math.max(0,c-e)),i[n]=T+o+A}return i}function P(a){return new Array(a).fill("")}const F=function(a){return Math.max(...a.map(s=>s.length))};function w(a,s,e){return a.reduce(function(t,n){return V(t,n.fig,n.overlap||0,e)},P(s))}function R_(a,s,e){for(let t=a.length-1;t>0;t--){const n=w(a.slice(0,t),s,e);if(F(n)<=e.width)return{outputFigText:n,chars:a.slice(t)}}return{outputFigText:P(s),chars:a}}function f_(a,s,e){let t,n,l=0,i,r,T,o=e.height,A=[],L,c={chars:[],overlap:l},m=[],x,g,B,y,O;if(typeof o!="number")throw new Error("height is not defined.");r=P(o);const v=e.fittingRules||{};for(e.printDirection===1&&(a=a.split("").reverse().join("")),T=a.length,t=0;t<T;t++)if(x=a.substring(t,t+1),g=x.match(/\s/),n=s[x.charCodeAt(0)],y=null,n){if(v.hLayout!==E){for(l=1e4,i=0;i<o;i++)l=Math.min(l,h_(r[i],n[i],e));l=l===1e4?0:l}if(e.width>0&&(e.whitespaceBreak?(B=w(c.chars.concat([{fig:n,overlap:l}]),o,e),y=w(m.concat([{fig:B,overlap:c.overlap}]),o,e),L=F(y)):(y=V(r,n,l,e),L=F(y)),L>=e.width&&t>0&&(e.whitespaceBreak?(r=w(m.slice(0,-1),o,e),m.length>1&&(A.push(r),r=P(o)),m=[]):(A.push(r),r=P(o)))),e.width>0&&e.whitespaceBreak&&((!g||t===T-1)&&c.chars.push({fig:n,overlap:l}),g||t===T-1)){for(O=null;y=w(c.chars,o,e),L=F(y),L>=e.width;)O=R_(c.chars,o,e),c={chars:O.chars},A.push(O.outputFigText);L>0&&(O?m.push({fig:y,overlap:1}):m.push({fig:y,overlap:c.overlap})),g&&(m.push({fig:n,overlap:l}),r=P(o)),t===T-1&&(r=w(m,o,e)),c={chars:[],overlap:l};continue}r=V(r,n,l,e)}return F(r)>0&&A.push(r),e.showHardBlanks||A.forEach(function(C){for(T=C.length,i=0;i<T;i++)C[i]=C[i].replace(new RegExp("\\"+e.hardBlank,"g")," ")}),a===""&&A.length===0&&A.push(new Array(o).fill("")),A}const d_=function(a,s){let e;const t=s.fittingRules||{};if(a==="default")e={hLayout:t.hLayout,hRule1:t.hRule1,hRule2:t.hRule2,hRule3:t.hRule3,hRule4:t.hRule4,hRule5:t.hRule5,hRule6:t.hRule6};else if(a==="full")e={hLayout:E,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(a==="fitted")e={hLayout:f,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(a==="controlled smushing")e={hLayout:I,hRule1:!0,hRule2:!0,hRule3:!0,hRule4:!0,hRule5:!0,hRule6:!0};else if(a==="universal smushing")e={hLayout:h,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else return;return e},p_=function(a,s){let e={};const t=s.fittingRules||{};if(a==="default")e={vLayout:t.vLayout,vRule1:t.vRule1,vRule2:t.vRule2,vRule3:t.vRule3,vRule4:t.vRule4,vRule5:t.vRule5};else if(a==="full")e={vLayout:E,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(a==="fitted")e={vLayout:f,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(a==="controlled smushing")e={vLayout:I,vRule1:!0,vRule2:!0,vRule3:!0,vRule4:!0,vRule5:!0};else if(a==="universal smushing")e={vLayout:h,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else return;return e},t_=function(a,s,e){e=e.replace(/\r\n/g,`
`).replace(/\r/g,`
`);const t=$(a);let n=e.split(`
`),l=[],i,r,T;for(r=n.length,i=0;i<r;i++)l=l.concat(f_(n[i],u[t],s));for(r=l.length,T=l[0],i=1;i<r;i++)T=I_(T,l[i],s);return T?T.join(`
`):""};function a_(a,s){let e;if(typeof structuredClone<"u"?e=structuredClone(a):e=JSON.parse(JSON.stringify(a)),e.showHardBlanks=s.showHardBlanks||!1,e.width=s.width||-1,e.whitespaceBreak=s.whitespaceBreak||!1,s.horizontalLayout){const t=d_(s.horizontalLayout,a);t&&Object.assign(e.fittingRules,t)}if(s.verticalLayout){const t=p_(s.verticalLayout,a);t&&Object.assign(e.fittingRules,t)}return e.printDirection=s.printDirection!==null&&s.printDirection!==void 0?s.printDirection:a.printDirection,e}const d=async function(a,s,e){return d.text(a,s,e)};return d.text=async function(a,s,e){a=a+"";let t,n;typeof s=="function"?(n=s,t={font:R.font}):typeof s=="string"?(t={font:s},n=e):s?(t=s,n=e):(t={font:R.font},n=e);const l=t.font||R.font;try{const i=await d.loadFont(l),r=i?t_(l,a_(i,t),a):"";return n&&n(null,r),r}catch(i){const r=i instanceof Error?i:new Error(String(i));if(n)return n(r),"";throw r}},d.textSync=function(a,s){a=a+"",typeof s=="string"?s={font:s}:s=s||{};const e=s.font||R.font;let t=a_(d.loadFontSync(e),s);return t_(e,t,a)},d.metadata=async function(a,s){a=a+"";try{const e=await d.loadFont(a);if(!e)throw new Error("Error loading font.");const t=$(a),n=u[t]||{},l=[e,n.comment||""];return s&&s(null,e,n.comment),l}catch(e){const t=e instanceof Error?e:new Error(String(e));if(s)return s(t),null;throw t}},d.defaults=function(a){return a&&typeof a=="object"&&Object.assign(R,a),typeof structuredClone<"u"?structuredClone(R):JSON.parse(JSON.stringify(R))},d.parseFont=function(a,s,e=!0){if(u[a]&&!e)return u[a].options;s=s.replace(/\r\n/g,`
`).replace(/\r/g,`
`);const t=new G_,n=s.split(`
`),l=n.shift();if(!l)throw new Error("Invalid font file: missing header");const i=l.split(" "),r={hardBlank:i[0].substring(5,6),height:parseInt(i[1],10),baseline:parseInt(i[2],10),maxLength:parseInt(i[3],10),oldLayout:parseInt(i[4],10),numCommentLines:parseInt(i[5],10),printDirection:i[6]?parseInt(i[6],10):0,fullLayout:i[7]?parseInt(i[7],10):null,codeTagCount:i[8]?parseInt(i[8],10):null};if((r.hardBlank||"").length!==1||[r.height,r.baseline,r.maxLength,r.oldLayout,r.numCommentLines].some(A=>A==null||isNaN(A)))throw new Error("FIGlet header contains invalid values.");if(r.height==null||r.numCommentLines==null)throw new Error("FIGlet header contains invalid values.");r.fittingRules=M(r.oldLayout,r.fullLayout),t.options=r;const o=[];for(let A=32;A<=126;A++)o.push(A);if(o.push(196,214,220,228,246,252,223),n.length<r.numCommentLines+r.height*o.length)throw new Error(`FIGlet file is missing data. Line length: ${n.length}. Comment lines: ${r.numCommentLines}. Height: ${r.height}. Num chars: ${o.length}.`);for(t.comment=n.splice(0,r.numCommentLines).join(`
`),t.numChars=0;n.length>0&&t.numChars<o.length;){const A=o[t.numChars];t[A]=n.splice(0,r.height);for(let L=0;L<r.height;L++)typeof t[A][L]>"u"?t[A][L]="":t[A][L]=N(t[A][L],L,r.height);t.numChars++}for(;n.length>0;){const A=n.shift();if(!A||A.trim()==="")break;let L=A.split(" ")[0],c;if(/^-?0[xX][0-9a-fA-F]+$/.test(L))c=parseInt(L,16);else if(/^-?0[0-7]+$/.test(L))c=parseInt(L,8);else if(/^-?[0-9]+$/.test(L))c=parseInt(L,10);else throw new Error(`Error parsing data. Invalid data: ${L}`);if(c===-1||c<-2147483648||c>2147483647){const m=c===-1?"The char code -1 is not permitted.":`The char code cannot be ${c<-2147483648?"less than -2147483648":"greater than 2147483647"}.`;throw new Error(`Error parsing data. ${m}`)}t[c]=n.splice(0,r.height);for(let m=0;m<r.height;m++)typeof t[c][m]>"u"?t[c][m]="":t[c][m]=N(t[c][m],m,r.height);t.numChars++}return u[a]=t,r},d.loadedFonts=()=>Object.keys(u),d.clearLoadedFonts=()=>{Object.keys(u).forEach(a=>{delete u[a]})},d.loadFont=async function(a,s){const e=$(a);if(u[e]){const t=u[e].options;return s&&s(null,t),Promise.resolve(t)}try{if(!R.fetchFontIfMissing)throw new Error(`Font is not loaded: ${e}`);const t=await fetch(`${R.fontPath}/${e}.flf`);if(!t.ok)throw new Error(`Network response was not ok: ${t.status}`);const n=await t.text(),l=d.parseFont(e,n);return s&&s(null,l),l}catch(t){const n=t instanceof Error?t:new Error(String(t));if(s)return s(n),null;throw n}},d.loadFontSync=function(a){const s=$(a);if(u[s])return u[s].options;throw new Error("Synchronous font loading is not implemented for the browser, it will only work for fonts already loaded.")},d.preloadFonts=async function(a,s){try{for(const e of a){const t=$(e),n=await fetch(`${R.fontPath}/${t}.flf`);if(!n.ok)throw new Error(`Failed to preload fonts. Error fetching font: ${t}, status code: ${n.statusText}`);const l=await n.text();d.parseFont(t,l)}s&&s()}catch(e){const t=e instanceof Error?e:new Error(String(e));if(s){s(t);return}throw e}},d.fonts=function(a){return new Promise(function(s,e){s(j),a&&a(null,j)})},d.fontsSync=function(){return j},d.figFonts=u,d})(),z_=`flf2a$ 6 5 16 15 13 0 24463 229
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
         `,j_={class:"my-auto w-full"},K_=u_({__name:"cover",props:{background:{default:""}},setup(E){G();function f(){const u=r_.textSync("hans-green-theme",{font:"Standard"});console.log(u),console.log("🌟🌟 本PPT原作者：%cHans码数理哲","color: #16a34a; font-weight: bold; font-size: 30px;","🌟🌟")}const h=E,I=W_(()=>$_(h.background,!0));return K(()=>{r_.parseFont("Standard",z_),f()}),(u,R)=>(k(),X("div",{class:"slidev-layout cover",style:L_(I.value)},[_("div",j_,[O_(u.$slots,"default")])],4))}}),X_={class:"bg-gradient-to-br from-[#719cd4] to-[#5984bf] absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-4"},J_={class:"border-4 border-white bg-gradient-to-br from-[#719cd4] to-[#5984bf] px-4 rounded-2xl shadow-lg flex items-center justify-center text-lg md:text-xl text-white font-serif"},Y_={__name:"【slidev】26成都二诊三角换元压轴.md__slidev_1",setup(E){const{$clicksContext:f,$frontmatter:h}=G();return f.setup(),(I,u)=>{const R=U_,N=B_,M=C_;return k(),o_(K_,P_(w_(n_(D_)(n_(h),0))),{default:s_(()=>[z(R),z(N),T_(' <AutoSlide :timeList="[0, 0]" /> '),_("div",X_,[u[1]||(u[1]=_("h1",{class:"title-stroke !text-[#3468ab] !mb-1 font-black tracking-tighter text-center"}," 2026成都二诊压轴 ",-1)),u[2]||(u[2]=_("div",{class:"flex flex-col justify-center items-center gap-3 mb-2"},[_("h2",{class:"flex justify-center items-center font-black text-center !text-[#4a81c8] !text-2xl md:!text-3xl"},[_("div",{class:"mx-2 bg-white px-4 py-1.5 rounded-xl"},[_("span",{class:"!text-2xl md:!text-3xl text-[#4a81c8]"},"三角换元求通项")]),_("span",{class:"subtitle-stroke"},"+"),_("div",{class:"mx-2 bg-white px-4 py-1.5 rounded-xl"},[_("span",{class:"!text-2xl md:!text-3xl text-[#4a81c8]"},"麦克劳林展开")]),_("span",{class:"subtitle-stroke"},"+"),_("div",{class:"mx-2 bg-white px-4 py-1.5 rounded-xl"},[_("span",{class:"!text-2xl md:!text-3xl text-[#4a81c8]"},"放缩")])])],-1)),_("div",J_,[z(M,b_({},{ranges:[]}),{default:s_(()=>[...u[0]||(u[0]=[_("p",null,[_("span",{class:"katex-display"},[_("span",{class:"katex"},[_("span",{class:"katex-mathml"},[_("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[_("semantics",null,[_("mrow",null,[_("mi",null,[_("mrow",null,[_("mo",{fence:"true"},"{"),_("mtable",{rowspacing:"0.36em",columnalign:"left left",columnspacing:"1em"},[_("mtr",null,[_("mtd",null,[_("mstyle",{scriptlevel:"0",displaystyle:"false"},[_("mrow",null,[_("msub",null,[_("mi",{mathvariant:"bold-italic"},"A"),_("mi",{mathvariant:"bold-italic"},"n")]),_("mo",{stretchy:"false"},"("),_("mi",{mathvariant:"bold-italic"},"m"),_("mo",{stretchy:"false"},")"),_("mo",null,"="),_("msub",null,[_("mi",{mathvariant:"bold-italic"},"A"),_("mrow",null,[_("mi",{mathvariant:"bold-italic"},"n"),_("mo",{mathvariant:"bold-italic"},"−"),_("mn",{mathvariant:"bold"},"1")])]),_("mo",{stretchy:"false"},"("),_("mi",{mathvariant:"bold-italic"},"m"),_("mo",{stretchy:"false"},")"),_("mo",{mathvariant:"bold-italic"},"+"),_("mo",{stretchy:"false"},"("),_("mn",{mathvariant:"bold"},"2"),_("mi",{mathvariant:"bold-italic"},"n"),_("mo",{mathvariant:"bold-italic"},"−"),_("mi",{mathvariant:"bold-italic"},"m"),_("mo",{stretchy:"false"},")"),_("msub",null,[_("mi",{mathvariant:"bold-italic"},"A"),_("mrow",null,[_("mi",{mathvariant:"bold-italic"},"n"),_("mo",{mathvariant:"bold-italic"},"−"),_("mn",{mathvariant:"bold"},"1")])]),_("mo",{stretchy:"false"},"("),_("mi",{mathvariant:"bold-italic"},"m"),_("mo",{mathvariant:"bold-italic"},"−"),_("mn",{mathvariant:"bold"},"1"),_("mo",{stretchy:"false"},")")])])])]),_("mtr",null,[_("mtd",null,[_("mstyle",{scriptlevel:"0",displaystyle:"false"},[_("mrow",null,[_("mi",{mathvariant:"bold-italic"},"d"),_("mi",{mathvariant:"bold-italic"},"p"),_("mo",{stretchy:"false"},"["),_("mi",{mathvariant:"bold-italic"},"i"),_("mo",{separator:"true"},","),_("mi",{mathvariant:"bold-italic"},"j"),_("mo",{stretchy:"false"},"]"),_("mo",null,"="),_("mi",{mathvariant:"bold-italic"},"d"),_("mi",{mathvariant:"bold-italic"},"p"),_("mo",{stretchy:"false"},"["),_("mi",{mathvariant:"bold-italic"},"i"),_("mo",{mathvariant:"bold-italic"},"−"),_("mn",{mathvariant:"bold"},"1"),_("mo",{separator:"true"},","),_("mi",{mathvariant:"bold-italic"},"j"),_("mo",{stretchy:"false"},"]"),_("mo",{mathvariant:"bold-italic"},"+"),_("mo",{stretchy:"false"},"("),_("mi",{mathvariant:"bold-italic"},"n"),_("mo",{mathvariant:"bold-italic"},"−"),_("mi",{mathvariant:"bold-italic"},"j"),_("mo",{mathvariant:"bold-italic"},"+"),_("mn",{mathvariant:"bold"},"1"),_("mo",{stretchy:"false"},")"),_("mi",{mathvariant:"bold-italic"},"d"),_("mi",{mathvariant:"bold-italic"},"p"),_("mo",{stretchy:"false"},"["),_("mi",{mathvariant:"bold-italic"},"i"),_("mo",{mathvariant:"bold-italic"},"−"),_("mn",{mathvariant:"bold"},"1"),_("mo",{separator:"true"},","),_("mi",{mathvariant:"bold-italic"},"j"),_("mo",{mathvariant:"bold-italic"},"−"),_("mn",{mathvariant:"bold"},"1"),_("mo",{stretchy:"false"},"]")])])])])])])])]),_("annotation",{encoding:"application/x-tex"},"\\boldsymbol{ \\begin{cases} A_n(m) = A_{n-1}(m) + (2n-m)A_{n-1}(m-1) \\\\ dp[i,j]=dp[i-1,j]+(n-j+1)dp[i-1,j-1] \\end{cases} } ")])])]),_("span",{class:"katex-html","aria-hidden":"true"},[_("span",{class:"base"},[_("span",{class:"strut",style:{height:"3em","vertical-align":"-1.25em"}}),_("span",{class:"mord"},[_("span",{class:"mord"},[_("span",{class:"minner"},[_("span",{class:"mopen delimcenter",style:{top:"0em"}},[_("span",{class:"delimsizing size4"},"{")]),_("span",{class:"mord"},[_("span",{class:"mtable"},[_("span",{class:"col-align-l"},[_("span",{class:"vlist-t vlist-t2"},[_("span",{class:"vlist-r"},[_("span",{class:"vlist",style:{height:"1.69em"}},[_("span",{style:{top:"-3.69em"}},[_("span",{class:"pstrut",style:{height:"3.008em"}}),_("span",{class:"mord"},[_("span",{class:"mord"},[_("span",{class:"mord mathnormal"},"A"),_("span",{class:"msupsub"},[_("span",{class:"vlist-t vlist-t2"},[_("span",{class:"vlist-r"},[_("span",{class:"vlist",style:{height:"0.1514em"}},[_("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[_("span",{class:"pstrut",style:{height:"2.7em"}}),_("span",{class:"sizing reset-size6 size3 mtight"},[_("span",{class:"mord mathnormal mtight"},"n")])])]),_("span",{class:"vlist-s"},"​")]),_("span",{class:"vlist-r"},[_("span",{class:"vlist",style:{height:"0.15em"}},[_("span")])])])])]),_("span",{class:"mopen"},"("),_("span",{class:"mord mathnormal"},"m"),_("span",{class:"mclose"},")"),_("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),_("span",{class:"mrel"},"="),_("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),_("span",{class:"mord"},[_("span",{class:"mord mathnormal"},"A"),_("span",{class:"msupsub"},[_("span",{class:"vlist-t vlist-t2"},[_("span",{class:"vlist-r"},[_("span",{class:"vlist",style:{height:"0.3011em"}},[_("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[_("span",{class:"pstrut",style:{height:"2.7em"}}),_("span",{class:"sizing reset-size6 size3 mtight"},[_("span",{class:"mord mtight"},[_("span",{class:"mord mathnormal mtight"},"n"),_("span",{class:"mbin mtight"},"−"),_("span",{class:"mord mtight"},"1")])])])]),_("span",{class:"vlist-s"},"​")]),_("span",{class:"vlist-r"},[_("span",{class:"vlist",style:{height:"0.2083em"}},[_("span")])])])])]),_("span",{class:"mopen"},"("),_("span",{class:"mord mathnormal"},"m"),_("span",{class:"mclose"},")"),_("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),_("span",{class:"mbin"},"+"),_("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),_("span",{class:"mopen"},"("),_("span",{class:"mord"},"2"),_("span",{class:"mord mathnormal"},"n"),_("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),_("span",{class:"mbin"},"−"),_("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),_("span",{class:"mord mathnormal"},"m"),_("span",{class:"mclose"},")"),_("span",{class:"mord"},[_("span",{class:"mord mathnormal"},"A"),_("span",{class:"msupsub"},[_("span",{class:"vlist-t vlist-t2"},[_("span",{class:"vlist-r"},[_("span",{class:"vlist",style:{height:"0.3011em"}},[_("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[_("span",{class:"pstrut",style:{height:"2.7em"}}),_("span",{class:"sizing reset-size6 size3 mtight"},[_("span",{class:"mord mtight"},[_("span",{class:"mord mathnormal mtight"},"n"),_("span",{class:"mbin mtight"},"−"),_("span",{class:"mord mtight"},"1")])])])]),_("span",{class:"vlist-s"},"​")]),_("span",{class:"vlist-r"},[_("span",{class:"vlist",style:{height:"0.2083em"}},[_("span")])])])])]),_("span",{class:"mopen"},"("),_("span",{class:"mord mathnormal"},"m"),_("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),_("span",{class:"mbin"},"−"),_("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),_("span",{class:"mord"},"1"),_("span",{class:"mclose"},")")])]),_("span",{style:{top:"-2.25em"}},[_("span",{class:"pstrut",style:{height:"3.008em"}}),_("span",{class:"mord"},[_("span",{class:"mord mathnormal"},"d"),_("span",{class:"mord mathnormal"},"p"),_("span",{class:"mopen"},"["),_("span",{class:"mord mathnormal"},"i"),_("span",{class:"mpunct"},","),_("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),_("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j"),_("span",{class:"mclose"},"]"),_("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),_("span",{class:"mrel"},"="),_("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),_("span",{class:"mord mathnormal"},"d"),_("span",{class:"mord mathnormal"},"p"),_("span",{class:"mopen"},"["),_("span",{class:"mord mathnormal"},"i"),_("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),_("span",{class:"mbin"},"−"),_("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),_("span",{class:"mord"},"1"),_("span",{class:"mpunct"},","),_("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),_("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j"),_("span",{class:"mclose"},"]"),_("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),_("span",{class:"mbin"},"+"),_("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),_("span",{class:"mopen"},"("),_("span",{class:"mord mathnormal"},"n"),_("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),_("span",{class:"mbin"},"−"),_("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),_("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j"),_("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),_("span",{class:"mbin"},"+"),_("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),_("span",{class:"mord"},"1"),_("span",{class:"mclose"},")"),_("span",{class:"mord mathnormal"},"d"),_("span",{class:"mord mathnormal"},"p"),_("span",{class:"mopen"},"["),_("span",{class:"mord mathnormal"},"i"),_("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),_("span",{class:"mbin"},"−"),_("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),_("span",{class:"mord"},"1"),_("span",{class:"mpunct"},","),_("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),_("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j"),_("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),_("span",{class:"mbin"},"−"),_("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),_("span",{class:"mord"},"1"),_("span",{class:"mclose"},"]")])])]),_("span",{class:"vlist-s"},"​")]),_("span",{class:"vlist-r"},[_("span",{class:"vlist",style:{height:"1.19em"}},[_("span")])])])])])]),_("span",{class:"mclose nulldelimiter"})])])])])])])])],-1)])]),_:1},16)]),u[3]||(u[3]=_("p",{class:"text-white text-2xl md:text-3xl mt-6 text-center"}," 简单扩展后，还涉及欧拉公式~ ",-1))])]),_:1},16)}}},te=F_(Y_,[["__scopeId","data-v-bdb2cca1"]]);export{te as default};
