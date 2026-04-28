import{r as k,L as j,p as p_,O as N_,f as X,o as G,i as T_,b as L_,g as _,k as o_,n as S_,t as x_,aJ as v_,F as M_,d as u_,a2 as H_,z as y_,j as W_,w as w_,e as s_,ad as O,v as O_,x as P_,T as a_}from"./modules/vue-t3_GRAYG.js";import{u as V,f as D_}from"./slidev/context-CG_Cpt-F.js";import{_ as b_}from"./index-BOoLqmY3.js";import"./modules/shiki-D0WX3_8A.js";const B_={__name:"MovingWatermark",props:{colorCls:{type:String,default:"bg-gradient-to-r from-[#2d644b] to-green-600 bg-clip-text text-transparent"},opacity:{type:Number,default:1},text:{type:String,default:"Hans码数理哲"}},setup(E){V();const m=k(null),f=k(null),c=k({x:0,y:0}),h=k({x:0,y:0}),R=k({width:0,height:0}),S=()=>{if(!m.value)return;const d=document.getElementById("slide-content");let C=1;if(d){const p=getComputedStyle(d).getPropertyValue("--slidev-slide-scale");p&&(C=parseFloat(p)||1)}const W=m.value.getBoundingClientRect();R.value.width=W.width/C,R.value.height=W.height/C},w=()=>{(R.value.width===0||R.value.height===0)&&S();const d=f.value?.offsetWidth||60,C=f.value?.offsetHeight||20;c.value={x:Math.random()*(R.value.width-d)+d/2,y:Math.random()*(R.value.height-C)+C/2};const W=1.2+Math.random()*.6,p=(1/12+Math.random()/3)*Math.PI;h.value={x:Math.cos(p)*W,y:Math.sin(p)*W}},N=()=>{const d=f.value?.offsetWidth||60,C=f.value?.offsetHeight||20;c.value.x+=h.value.x,c.value.y+=h.value.y,(c.value.x<=0||c.value.x>=R.value.width-d)&&(h.value.x=-h.value.x,c.value.x=Math.max(0,Math.min(R.value.width-d,c.value.x))),(c.value.y<=0||c.value.y>=R.value.height-C)&&(h.value.y=-h.value.y,c.value.y=Math.max(0,Math.min(R.value.height-C,c.value.y))),requestAnimationFrame(N)};return j(async()=>{await p_(),S(),w(),requestAnimationFrame(N),window.addEventListener("resize",S)}),N_(()=>{window.removeEventListener("resize",S)}),(d,C)=>(G(),X(M_,null,[T_(" teleport 让 position: fixed 能够重新生效 "),(G(),L_(v_,{to:"#slide-content"},[_("div",{ref_key:"containerRef",ref:m,class:"fixed inset-0 pointer-events-none overflow-hidden z-50"},[_("p",{ref_key:"textRef",ref:f,class:S_(["absolute select-none !m-0 truncate",E.colorCls]),style:o_({left:`${c.value.x}px`,top:`${c.value.y}px`,fontSize:"20px",opacity:E.opacity,userSelect:"none",pointerEvents:"none"})},x_(E.text),7)],512)]))],2112))}},F_=u_({__name:"SlidevPageRedirector",setup(E){const{$nav:m}=V();function f(c){const h=Array.isArray(c)?c[0]:c;return Number(h)}return j(()=>{const c=H_(),h=c.query.page;if(!h)return;const R=c.query.clicks,S=f(h),w=f(R);if(!Number.isInteger(S)||S<=0){console.error("页码不合法，请输入正整数");return}m.value.go(S),!(!Number.isInteger(w)||w<0)&&console.warn("拿到 clicks 参数：",w,"，但我暂未找到正确跳转到相应点击次数的方法qwq")}),(c,h)=>(G(),X("div"))}});function l_(E){return E.startsWith("/")?"/slidev-math-videos/260426/"+E.slice(1):E}function U_(E,m=!1){const f=E&&["#","rgb","hsl"].some(h=>E.indexOf(h)===0),c={background:f?E:void 0,color:E&&!f?"white":void 0,backgroundImage:f?void 0:E?m?`linear-gradient(#0005, #0008), url(${l_(E)})`:`url("${l_(E)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return c.background||delete c.background,c}const k_={FULL_WIDTH:0,FITTING:1,SMUSHING:2,CONTROLLED_SMUSHING:3};class $_{constructor(){this.comment="",this.numChars=0,this.options={}}}const K=["1Row","3-D","3D Diagonal","3D-ASCII","3x5","4Max","5 Line Oblique","AMC 3 Line","AMC 3 Liv1","AMC AAA01","AMC Neko","AMC Razor","AMC Razor2","AMC Slash","AMC Slider","AMC Thin","AMC Tubes","AMC Untitled","ANSI Compact","ANSI Regular","ANSI Shadow","ASCII 12","ASCII 9","ASCII New Roman","Acrobatic","Alligator","Alligator2","Alpha","Alphabet","Arrows","Avatar","B1FF","Babyface Lame","Babyface Leet","Banner","Banner3-D","Banner3","Banner4","Barbwire","Basic","Bear","Bell","Benjamin","Big ASCII 12","Big ASCII 9","Big Chief","Big Money-ne","Big Money-nw","Big Money-se","Big Money-sw","Big Mono 12","Big Mono 9","Big","Bigfig","Binary","Block","Blocks","Bloody","BlurVision ASCII","Bolger","Braced","Bright","Broadway KB","Broadway","Bubble","Bulbhead","Caligraphy","Caligraphy2","Calvin S","Cards","Catwalk","Chiseled","Chunky","Circle","Classy","Coder Mini","Coinstak","Cola","Colossal","Computer","Contessa","Contrast","Cosmike","Cosmike2","Crawford","Crawford2","Crazy","Cricket","Cursive","Cyberlarge","Cybermedium","Cybersmall","Cygnet","DANC4","DOS Rebel","DWhistled","Dancing Font","Decimal","Def Leppard","Delta Corps Priest 1","DiamFont","Diamond","Diet Cola","Digital","Doh","Doom","Dot Matrix","Double Shorts","Double","Dr Pepper","Efti Chess","Efti Font","Efti Italic","Efti Piti","Efti Robot","Efti Wall","Efti Water","Electronic","Elite","Emboss 2","Emboss","Epic","Fender","Filter","Fire Font-k","Fire Font-s","Flipped","Flower Power","Font Font","Four Tops","Fraktur","Fun Face","Fun Faces","Future Smooth","Future Thin","Future","Fuzzy","Georgi16","Georgia11","Ghost","Ghoulish","Glenyn","Goofy","Gothic","Graceful","Gradient","Graffiti","Greek","Heart Left","Heart Right","Henry 3D","Hex","Hieroglyphs","Hollywood","Horizontal Left","Horizontal Right","ICL-1900","Impossible","Invita","Isometric1","Isometric2","Isometric3","Isometric4","Italic","Ivrit","JS Block Letters","JS Bracket Letters","JS Capital Curves","JS Cursive","JS Stick Letters","Jacky","Jazmine","Jerusalem","Katakana","Kban","Keyboard","Knob","Konto Slant","Konto","LCD","Larry 3D 2","Larry 3D","Lean","Letter","Letters","Lil Devil","Line Blocks","Linux","Lockergnome","Madrid","Marquee","Maxfour","Merlin1","Merlin2","Mike","Mini","Mirror","Mnemonic","Modular","Mono 12","Mono 9","Morse","Morse2","Moscow","Mshebrew210","Muzzle","NScript","NT Greek","NV Script","Nancyj-Fancy","Nancyj-Improved","Nancyj-Underlined","Nancyj","Nipples","O8","OS2","Octal","Ogre","Old Banner","Pagga","Patorjk's Cheese","Patorjk-HeX","Pawp","Peaks Slant","Peaks","Pebbles","Pepper","Poison","Puffy","Puzzle","Pyramid","Rammstein","Rebel","Rectangles","Red Phoenix","Relief","Relief2","Reverse","Roman","Rot13","Rotated","Rounded","Rowan Cap","Rozzo","RubiFont","Runic","Runyc","S Blood","SL Script","Santa Clara","Script","Serifcap","Shaded Blocky","Shadow","Shimrod","Short","Slant Relief","Slant","Slide","Small ASCII 12","Small ASCII 9","Small Block","Small Braille","Small Caps","Small Isometric1","Small Keyboard","Small Mono 12","Small Mono 9","Small Poison","Small Script","Small Shadow","Small Slant","Small Tengwar","Small","Soft","Speed","Spliff","Stacey","Stampate","Stampatello","Standard","Star Strips","Star Wars","Stellar","Stforek","Stick Letters","Stop","Straight","Stronger Than All","Sub-Zero","Swamp Land","Swan","Sweet","THIS","Tanja","Tengwar","Term","Terrace","Test1","The Edge","Thick","Thin","Thorned","Three Point","Ticks Slant","Ticks","Tiles","Tinker-Toy","Tmplr","Tombstone","Train","Trek","Tsalagi","Tubular","Twisted","Two Point","USA Flag","Univers","Upside Down Text","Varsity","Wavescape","Wavy","Weird","Wet Letter","Whimsy","WideTerm","Wow","miniwi"],i_={"ANSI-Compact":"ANSI Compact"},$=E=>i_[E]?i_[E]:E;function G_(E){return/[.*+?^${}()|[\]\\]/.test(E)?"\\"+E:E}const r_=(()=>{const{FULL_WIDTH:E=0,FITTING:m,SMUSHING:f,CONTROLLED_SMUSHING:c}=k_,h={},R={font:"Standard",fontPath:"./fonts",fetchFontIfMissing:!0};function S(n,s,e){const t=G_(n.trim().slice(-1))||"@",a=s===e-1?new RegExp(t+t+"?\\s*$"):new RegExp(t+"\\s*$");return n.replace(a,"")}function w(n=-1,s=null){let e={},t,a=[[16384,"vLayout",f],[8192,"vLayout",m],[4096,"vRule5",!0],[2048,"vRule4",!0],[1024,"vRule3",!0],[512,"vRule2",!0],[256,"vRule1",!0],[128,"hLayout",f],[64,"hLayout",m],[32,"hRule6",!0],[16,"hRule5",!0],[8,"hRule4",!0],[4,"hRule3",!0],[2,"hRule2",!0],[1,"hRule1",!0]];t=s!==null?s:n;for(const[l,i,r]of a)t>=l?(t-=l,e[i]===void 0&&(e[i]=r)):i!=="vLayout"&&i!=="hLayout"&&(e[i]=!1);return typeof e.hLayout>"u"?n===0?e.hLayout=m:n===-1?e.hLayout=E:e.hRule1||e.hRule2||e.hRule3||e.hRule4||e.hRule5||e.hRule6?e.hLayout=c:e.hLayout=f:e.hLayout===f&&(e.hRule1||e.hRule2||e.hRule3||e.hRule4||e.hRule5||e.hRule6)&&(e.hLayout=c),typeof e.vLayout>"u"?e.vRule1||e.vRule2||e.vRule3||e.vRule4||e.vRule5?e.vLayout=c:e.vLayout=E:e.vLayout===f&&(e.vRule1||e.vRule2||e.vRule3||e.vRule4||e.vRule5)&&(e.vLayout=c),e}function N(n,s,e=""){return n===s&&n!==e?n:!1}function d(n,s){let e="|/\\[]{}()<>";if(n==="_"){if(e.indexOf(s)!==-1)return s}else if(s==="_"&&e.indexOf(n)!==-1)return n;return!1}function C(n,s){let e="| /\\ [] {} () <>",t=e.indexOf(n),a=e.indexOf(s);if(t!==-1&&a!==-1&&t!==a&&Math.abs(t-a)!==1){const l=Math.max(t,a),i=l+1;return e.substring(l,i)}return!1}function W(n,s){let e="[] {} ()",t=e.indexOf(n),a=e.indexOf(s);return t!==-1&&a!==-1&&Math.abs(t-a)<=1?"|":!1}function p(n,s){return{"/\\":"|","\\/":"Y","><":"X"}[n+s]||!1}function J(n,s,e=""){return n===e&&s===e?e:!1}function Y(n,s){return n===s?n:!1}function q(n,s){return d(n,s)}function Z(n,s){return C(n,s)}function Q(n,s){return n==="-"&&s==="_"||n==="_"&&s==="-"?"=":!1}function __(n,s){return n==="|"&&s==="|"?"|":!1}function D(n,s,e){return s===" "||s===""||s===e&&n!==" "?n:s}function A_(n,s,e){if(e.fittingRules&&e.fittingRules.vLayout===E)return"invalid";let t,a=Math.min(n.length,s.length),l,i,r=!1,T;if(a===0)return"invalid";for(t=0;t<a;t++)if(l=n.substring(t,t+1),i=s.substring(t,t+1),l!==" "&&i!==" "){if(e.fittingRules&&e.fittingRules.vLayout===m)return"invalid";if(e.fittingRules&&e.fittingRules.vLayout===f)return"end";if(__(l,i)){r=r||!1;continue}if(T=!1,T=e.fittingRules&&e.fittingRules.vRule1?Y(l,i):T,T=!T&&e.fittingRules&&e.fittingRules.vRule2?q(l,i):T,T=!T&&e.fittingRules&&e.fittingRules.vRule3?Z(l,i):T,T=!T&&e.fittingRules&&e.fittingRules.vRule4?Q(l,i):T,r=!0,!T)return"invalid"}return r?"end":"valid"}function E_(n,s,e){let t=n.length,a=n.length,l,i,r,T=1,L,u,o;for(;T<=t;){for(l=n.slice(Math.max(0,a-T),a),i=s.slice(0,Math.min(t,T)),r=i.length,o="",L=0;L<r;L++)if(u=A_(l[L],i[L],e),u==="end")o=u;else if(u==="invalid"){o=u;break}else o===""&&(o="valid");if(o==="invalid"){T--;break}if(o==="end")break;o==="valid"&&T++}return Math.min(t,T)}function I_(n,s,e){let t,a=Math.min(n.length,s.length),l,i,r="",T;const L=e.fittingRules||{};for(t=0;t<a;t++)l=n.substring(t,t+1),i=s.substring(t,t+1),l!==" "&&i!==" "?L.vLayout===m||L.vLayout===f?r+=D(l,i):(T=!1,T=L.vRule5?__(l,i):T,T=!T&&L.vRule1?Y(l,i):T,T=!T&&L.vRule2?q(l,i):T,T=!T&&L.vRule3?Z(l,i):T,T=!T&&L.vRule4?Q(l,i):T,r+=T):r+=D(l,i);return r}function c_(n,s,e,t){let a=n.length,l=s.length,i=n.slice(0,Math.max(0,a-e)),r=n.slice(Math.max(0,a-e),a),T=s.slice(0,Math.min(e,l)),L,u,o,A=[],I;for(u=r.length,L=0;L<u;L++)L>=l?o=r[L]:o=I_(r[L],T[L],t),A.push(o);return I=s.slice(Math.min(e,l),l),[...i,...A,...I]}function e_(n,s){const e=" ".repeat(s);return n.map(t=>t+e)}function h_(n,s,e){let t=n[0].length,a=s[0].length,l;return t>a?s=e_(s,t-a):a>t&&(n=e_(n,a-t)),l=E_(n,s,e),c_(n,s,l,e)}function R_(n,s,e){const t=e.fittingRules||{};if(t.hLayout===E)return 0;let a,l=n.length,i=s.length,r=l,T=1,L=!1,u,o,A,I;if(l===0)return 0;_:for(;T<=r;){const H=l-T;for(u=n.substring(H,H+T),o=s.substring(0,Math.min(T,i)),a=0;a<Math.min(T,i);a++)if(A=u.substring(a,a+1),I=o.substring(a,a+1),A!==" "&&I!==" "){if(t.hLayout===m){T=T-1;break _}else if(t.hLayout===f){(A===e.hardBlank||I===e.hardBlank)&&(T=T-1);break _}else if(L=!0,!(t.hRule1&&N(A,I,e.hardBlank)||t.hRule2&&d(A,I)||t.hRule3&&C(A,I)||t.hRule4&&W(A,I)||t.hRule5&&p(A,I)||t.hRule6&&J(A,I,e.hardBlank))){T=T-1;break _}}if(L)break;T++}return Math.min(r,T)}function z(n,s,e,t){let a,l,i=[],r,T,L,u,o,A,I,H;const x=t.fittingRules||{};if(typeof t.height!="number")throw new Error("height is not defined.");for(a=0;a<t.height;a++){I=n[a],H=s[a],o=I.length,A=H.length,r=o-e,T=I.slice(0,Math.max(0,r)),L="";const U=Math.max(0,o-e);let y=I.substring(U,U+e),P=H.substring(0,Math.min(e,A));for(l=0;l<e;l++){let M=l<o?y.substring(l,l+1):" ",v=l<A?P.substring(l,l+1):" ";if(M!==" "&&v!==" ")if(x.hLayout===m||x.hLayout===f)L+=D(M,v,t.hardBlank);else{const C_=x.hRule1&&N(M,v,t.hardBlank)||x.hRule2&&d(M,v)||x.hRule3&&C(M,v)||x.hRule4&&W(M,v)||x.hRule5&&p(M,v)||x.hRule6&&J(M,v,t.hardBlank)||D(M,v,t.hardBlank);L+=C_}else L+=D(M,v,t.hardBlank)}e>=A?u="":u=H.substring(e,e+Math.max(0,A-e)),i[a]=T+L+u}return i}function b(n){return new Array(n).fill("")}const F=function(n){return Math.max(...n.map(s=>s.length))};function B(n,s,e){return n.reduce(function(t,a){return z(t,a.fig,a.overlap||0,e)},b(s))}function f_(n,s,e){for(let t=n.length-1;t>0;t--){const a=B(n.slice(0,t),s,e);if(F(a)<=e.width)return{outputFigText:a,chars:n.slice(t)}}return{outputFigText:b(s),chars:n}}function m_(n,s,e){let t,a,l=0,i,r,T,L=e.height,u=[],o,A={chars:[],overlap:l},I=[],H,x,U,y,P;if(typeof L!="number")throw new Error("height is not defined.");r=b(L);const M=e.fittingRules||{};for(e.printDirection===1&&(n=n.split("").reverse().join("")),T=n.length,t=0;t<T;t++)if(H=n.substring(t,t+1),x=H.match(/\s/),a=s[H.charCodeAt(0)],y=null,a){if(M.hLayout!==E){for(l=1e4,i=0;i<L;i++)l=Math.min(l,R_(r[i],a[i],e));l=l===1e4?0:l}if(e.width>0&&(e.whitespaceBreak?(U=B(A.chars.concat([{fig:a,overlap:l}]),L,e),y=B(I.concat([{fig:U,overlap:A.overlap}]),L,e),o=F(y)):(y=z(r,a,l,e),o=F(y)),o>=e.width&&t>0&&(e.whitespaceBreak?(r=B(I.slice(0,-1),L,e),I.length>1&&(u.push(r),r=b(L)),I=[]):(u.push(r),r=b(L)))),e.width>0&&e.whitespaceBreak&&((!x||t===T-1)&&A.chars.push({fig:a,overlap:l}),x||t===T-1)){for(P=null;y=B(A.chars,L,e),o=F(y),o>=e.width;)P=f_(A.chars,L,e),A={chars:P.chars},u.push(P.outputFigText);o>0&&(P?I.push({fig:y,overlap:1}):I.push({fig:y,overlap:A.overlap})),x&&(I.push({fig:a,overlap:l}),r=b(L)),t===T-1&&(r=B(I,L,e)),A={chars:[],overlap:l};continue}r=z(r,a,l,e)}return F(r)>0&&u.push(r),e.showHardBlanks||u.forEach(function(v){for(T=v.length,i=0;i<T;i++)v[i]=v[i].replace(new RegExp("\\"+e.hardBlank,"g")," ")}),n===""&&u.length===0&&u.push(new Array(L).fill("")),u}const d_=function(n,s){let e;const t=s.fittingRules||{};if(n==="default")e={hLayout:t.hLayout,hRule1:t.hRule1,hRule2:t.hRule2,hRule3:t.hRule3,hRule4:t.hRule4,hRule5:t.hRule5,hRule6:t.hRule6};else if(n==="full")e={hLayout:E,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(n==="fitted")e={hLayout:m,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(n==="controlled smushing")e={hLayout:c,hRule1:!0,hRule2:!0,hRule3:!0,hRule4:!0,hRule5:!0,hRule6:!0};else if(n==="universal smushing")e={hLayout:f,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else return;return e},g_=function(n,s){let e={};const t=s.fittingRules||{};if(n==="default")e={vLayout:t.vLayout,vRule1:t.vRule1,vRule2:t.vRule2,vRule3:t.vRule3,vRule4:t.vRule4,vRule5:t.vRule5};else if(n==="full")e={vLayout:E,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(n==="fitted")e={vLayout:m,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(n==="controlled smushing")e={vLayout:c,vRule1:!0,vRule2:!0,vRule3:!0,vRule4:!0,vRule5:!0};else if(n==="universal smushing")e={vLayout:f,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else return;return e},t_=function(n,s,e){e=e.replace(/\r\n/g,`
`).replace(/\r/g,`
`);const t=$(n);let a=e.split(`
`),l=[],i,r,T;for(r=a.length,i=0;i<r;i++)l=l.concat(m_(a[i],h[t],s));for(r=l.length,T=l[0],i=1;i<r;i++)T=h_(T,l[i],s);return T?T.join(`
`):""};function n_(n,s){let e;if(typeof structuredClone<"u"?e=structuredClone(n):e=JSON.parse(JSON.stringify(n)),e.showHardBlanks=s.showHardBlanks||!1,e.width=s.width||-1,e.whitespaceBreak=s.whitespaceBreak||!1,s.horizontalLayout){const t=d_(s.horizontalLayout,n);t&&Object.assign(e.fittingRules,t)}if(s.verticalLayout){const t=g_(s.verticalLayout,n);t&&Object.assign(e.fittingRules,t)}return e.printDirection=s.printDirection!==null&&s.printDirection!==void 0?s.printDirection:n.printDirection,e}const g=async function(n,s,e){return g.text(n,s,e)};return g.text=async function(n,s,e){n=n+"";let t,a;typeof s=="function"?(a=s,t={font:R.font}):typeof s=="string"?(t={font:s},a=e):s?(t=s,a=e):(t={font:R.font},a=e);const l=t.font||R.font;try{const i=await g.loadFont(l),r=i?t_(l,n_(i,t),n):"";return a&&a(null,r),r}catch(i){const r=i instanceof Error?i:new Error(String(i));if(a)return a(r),"";throw r}},g.textSync=function(n,s){n=n+"",typeof s=="string"?s={font:s}:s=s||{};const e=s.font||R.font;let t=n_(g.loadFontSync(e),s);return t_(e,t,n)},g.metadata=async function(n,s){n=n+"";try{const e=await g.loadFont(n);if(!e)throw new Error("Error loading font.");const t=$(n),a=h[t]||{},l=[e,a.comment||""];return s&&s(null,e,a.comment),l}catch(e){const t=e instanceof Error?e:new Error(String(e));if(s)return s(t),null;throw t}},g.defaults=function(n){return n&&typeof n=="object"&&Object.assign(R,n),typeof structuredClone<"u"?structuredClone(R):JSON.parse(JSON.stringify(R))},g.parseFont=function(n,s,e=!0){if(h[n]&&!e)return h[n].options;s=s.replace(/\r\n/g,`
`).replace(/\r/g,`
`);const t=new $_,a=s.split(`
`),l=a.shift();if(!l)throw new Error("Invalid font file: missing header");const i=l.split(" "),r={hardBlank:i[0].substring(5,6),height:parseInt(i[1],10),baseline:parseInt(i[2],10),maxLength:parseInt(i[3],10),oldLayout:parseInt(i[4],10),numCommentLines:parseInt(i[5],10),printDirection:i[6]?parseInt(i[6],10):0,fullLayout:i[7]?parseInt(i[7],10):null,codeTagCount:i[8]?parseInt(i[8],10):null};if((r.hardBlank||"").length!==1||[r.height,r.baseline,r.maxLength,r.oldLayout,r.numCommentLines].some(u=>u==null||isNaN(u)))throw new Error("FIGlet header contains invalid values.");if(r.height==null||r.numCommentLines==null)throw new Error("FIGlet header contains invalid values.");r.fittingRules=w(r.oldLayout,r.fullLayout),t.options=r;const L=[];for(let u=32;u<=126;u++)L.push(u);if(L.push(196,214,220,228,246,252,223),a.length<r.numCommentLines+r.height*L.length)throw new Error(`FIGlet file is missing data. Line length: ${a.length}. Comment lines: ${r.numCommentLines}. Height: ${r.height}. Num chars: ${L.length}.`);for(t.comment=a.splice(0,r.numCommentLines).join(`
`),t.numChars=0;a.length>0&&t.numChars<L.length;){const u=L[t.numChars];t[u]=a.splice(0,r.height);for(let o=0;o<r.height;o++)typeof t[u][o]>"u"?t[u][o]="":t[u][o]=S(t[u][o],o,r.height);t.numChars++}for(;a.length>0;){const u=a.shift();if(!u||u.trim()==="")break;let o=u.split(" ")[0],A;if(/^-?0[xX][0-9a-fA-F]+$/.test(o))A=parseInt(o,16);else if(/^-?0[0-7]+$/.test(o))A=parseInt(o,8);else if(/^-?[0-9]+$/.test(o))A=parseInt(o,10);else throw new Error(`Error parsing data. Invalid data: ${o}`);if(A===-1||A<-2147483648||A>2147483647){const I=A===-1?"The char code -1 is not permitted.":`The char code cannot be ${A<-2147483648?"less than -2147483648":"greater than 2147483647"}.`;throw new Error(`Error parsing data. ${I}`)}t[A]=a.splice(0,r.height);for(let I=0;I<r.height;I++)typeof t[A][I]>"u"?t[A][I]="":t[A][I]=S(t[A][I],I,r.height);t.numChars++}return h[n]=t,r},g.loadedFonts=()=>Object.keys(h),g.clearLoadedFonts=()=>{Object.keys(h).forEach(n=>{delete h[n]})},g.loadFont=async function(n,s){const e=$(n);if(h[e]){const t=h[e].options;return s&&s(null,t),Promise.resolve(t)}try{if(!R.fetchFontIfMissing)throw new Error(`Font is not loaded: ${e}`);const t=await fetch(`${R.fontPath}/${e}.flf`);if(!t.ok)throw new Error(`Network response was not ok: ${t.status}`);const a=await t.text(),l=g.parseFont(e,a);return s&&s(null,l),l}catch(t){const a=t instanceof Error?t:new Error(String(t));if(s)return s(a),null;throw a}},g.loadFontSync=function(n){const s=$(n);if(h[s])return h[s].options;throw new Error("Synchronous font loading is not implemented for the browser, it will only work for fonts already loaded.")},g.preloadFonts=async function(n,s){try{for(const e of n){const t=$(e),a=await fetch(`${R.fontPath}/${t}.flf`);if(!a.ok)throw new Error(`Failed to preload fonts. Error fetching font: ${t}, status code: ${a.statusText}`);const l=await a.text();g.parseFont(t,l)}s&&s()}catch(e){const t=e instanceof Error?e:new Error(String(e));if(s){s(t);return}throw e}},g.fonts=function(n){return new Promise(function(s,e){s(K),n&&n(null,K)})},g.fontsSync=function(){return K},g.figFonts=h,g})(),V_=`flf2a$ 6 5 16 15 13 0 24463 229
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
         `,z_="/slidev-math-videos/";function K_(){return z_}const j_={class:"my-auto w-full"},X_=u_({__name:"cover",props:{background:{default:""}},setup(E){V();function m(){const N=r_.textSync("hans-green-theme",{font:"Standard"});console.log(N),console.log("🌟🌟 本PPT原作者：%cHans码数理哲","color: #16a34a; font-weight: bold; font-size: 30px;","🌟🌟")}const f=E,c=y_(()=>U_(f.background,!0)),R=`${K_()}live2d/`;function S(N,d){return new Promise((C,W)=>{let p;d==="css"?(p=document.createElement("link"),p.rel="stylesheet",p.href=N):d==="js"&&(p=document.createElement("script"),p.type="module",p.src=N),p&&(p.onload=()=>C(N),p.onerror=()=>W(N),document.head.appendChild(p))})}async function w(){const N=window.Image;window.Image=function(...d){const C=new N(...d);return C.crossOrigin="anonymous",C},window.Image.prototype=N.prototype;try{await Promise.all([S(`${R}waifu.css`,"css"),S(`${R}waifu-tips.js`,"js")])}catch(d){console.error("加载 waifu.css 和 waifu-tips.js 失败",d)}initWidget({waifuPath:`${R}waifu-tips.json`,cubism2Path:`${R}live2d.min.js`,cubism5Path:`${R}cubism5/live2dcubismcore.js`,tools:["hitokoto","asteroids","switch-model","switch-texture","photo","info","quit"],logLevel:"warn",drag:!0})}return j(()=>{r_.parseFont("Standard",V_),m(),w(),console.log(`
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
  `)}),(N,d)=>(G(),X("div",{class:"slidev-layout cover",style:o_(c.value)},[_("div",j_,[W_(N.$slots,"default")])],4))}}),J_={__name:"【slidev】26汕头高三期末T14.md__slidev_1",setup(E){const{$clicksContext:m,$frontmatter:f}=V();return m.setup(),(c,h)=>{const R=F_,S=B_;return G(),L_(X_,O_(P_(a_(D_)(a_(f),0))),{default:w_(()=>[s_(R),s_(S),T_(' <AutoSlide :timeList="[0, 0]" /> '),h[0]||(h[0]=_("div",{class:"bg-gradient-to-br from-[#c8e6c9] to-[#dcf1dd] absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-4"},[_("h1",{class:"title-stroke !text-[#059669] !mb-1 font-black tracking-tighter text-center"}," 2026汕头高三期末T14 "),_("div",{class:"flex flex-col justify-center items-center gap-3 mb-2"},[_("h2",{class:"flex justify-center items-center font-black text-center !text-[#059669] !text-2xl md:!text-3xl"},[_("div",{class:"mx-2 bg-[#10b98126] px-4 py-1.5 rounded-xl"},[_("span",{class:"!text-2xl md:!text-3xl text-[#059669]"},"质因数分解")]),_("span",{class:"subtitle-stroke"},"+"),_("div",{class:"mx-2 bg-[#10b98126] px-4 py-1.5 rounded-xl"},[_("span",{class:"!text-2xl md:!text-3xl text-[#059669]"},"正难则反")]),_("span",{class:"subtitle-stroke"},"+"),_("div",{class:"mx-2 bg-[#10b98126] px-4 py-1.5 rounded-xl"},[_("span",{class:"!text-2xl md:!text-3xl text-[#059669]"},"dfs")])])]),_("div",{class:"bordered-box p-4 border-4 border-[#059669] bg-gradient-to-br from-[#c8e6c9] to-[#dcf1dd] px-4 rounded-2xl shadow-lg flex flex-col items-center justify-center text-lg md:text-xl text-[#059669] font-serif"},[_("p",null,[O("将 "),_("span",{class:"katex"},[_("span",{class:"katex-mathml"},[_("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[_("semantics",null,[_("mrow",null,[_("mn",null,"1")]),_("annotation",{encoding:"application/x-tex"},"1")])])]),_("span",{class:"katex-html","aria-hidden":"true"},[_("span",{class:"base"},[_("span",{class:"strut",style:{height:"0.6444em"}}),_("span",{class:"mord"},"1")])])]),O(" 到 "),_("span",{class:"katex"},[_("span",{class:"katex-mathml"},[_("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[_("semantics",null,[_("mrow",null,[_("mn",null,"37")]),_("annotation",{encoding:"application/x-tex"},"37")])])]),_("span",{class:"katex-html","aria-hidden":"true"},[_("span",{class:"base"},[_("span",{class:"strut",style:{height:"0.6444em"}}),_("span",{class:"mord"},"37")])])]),O(" 排成数列 "),_("span",{class:"katex"},[_("span",{class:"katex-mathml"},[_("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[_("semantics",null,[_("mrow",null,[_("mo",{stretchy:"false"},"{"),_("msub",null,[_("mi",null,"a"),_("mi",null,"n")]),_("mo",{stretchy:"false"},"}")]),_("annotation",{encoding:"application/x-tex"},"\\{a_n\\}")])])]),_("span",{class:"katex-html","aria-hidden":"true"},[_("span",{class:"base"},[_("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),_("span",{class:"mopen"},"{"),_("span",{class:"mord"},[_("span",{class:"mord mathnormal"},"a"),_("span",{class:"msupsub"},[_("span",{class:"vlist-t vlist-t2"},[_("span",{class:"vlist-r"},[_("span",{class:"vlist",style:{height:"0.1514em"}},[_("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[_("span",{class:"pstrut",style:{height:"2.7em"}}),_("span",{class:"sizing reset-size6 size3 mtight"},[_("span",{class:"mord mathnormal mtight"},"n")])])]),_("span",{class:"vlist-s"},"​")]),_("span",{class:"vlist-r"},[_("span",{class:"vlist",style:{height:"0.15em"}},[_("span")])])])])]),_("span",{class:"mclose"},"}")])])]),O(" ，已知")]),_("p",null,[_("span",{class:"katex"},[_("span",{class:"katex-mathml"},[_("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[_("semantics",null,[_("mrow",null,[_("msub",null,[_("mi",null,"a"),_("mn",null,"1")]),_("mo",null,"="),_("mn",null,"37")]),_("annotation",{encoding:"application/x-tex"},"a_1 = 37")])])]),_("span",{class:"katex-html","aria-hidden":"true"},[_("span",{class:"base"},[_("span",{class:"strut",style:{height:"0.5806em","vertical-align":"-0.15em"}}),_("span",{class:"mord"},[_("span",{class:"mord mathnormal"},"a"),_("span",{class:"msupsub"},[_("span",{class:"vlist-t vlist-t2"},[_("span",{class:"vlist-r"},[_("span",{class:"vlist",style:{height:"0.3011em"}},[_("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[_("span",{class:"pstrut",style:{height:"2.7em"}}),_("span",{class:"sizing reset-size6 size3 mtight"},[_("span",{class:"mord mtight"},"1")])])]),_("span",{class:"vlist-s"},"​")]),_("span",{class:"vlist-r"},[_("span",{class:"vlist",style:{height:"0.15em"}},[_("span")])])])])]),_("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),_("span",{class:"mrel"},"="),_("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),_("span",{class:"base"},[_("span",{class:"strut",style:{height:"0.6444em"}}),_("span",{class:"mord"},"37")])])]),O(" ，且前 "),_("span",{class:"katex"},[_("span",{class:"katex-mathml"},[_("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[_("semantics",null,[_("mrow",null,[_("mi",null,"n")]),_("annotation",{encoding:"application/x-tex"},"n")])])]),_("span",{class:"katex-html","aria-hidden":"true"},[_("span",{class:"base"},[_("span",{class:"strut",style:{height:"0.4306em"}}),_("span",{class:"mord mathnormal"},"n")])])]),O(" 项和 "),_("span",{class:"katex"},[_("span",{class:"katex-mathml"},[_("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[_("semantics",null,[_("mrow",null,[_("msub",null,[_("mi",null,"S"),_("mi",null,"n")])]),_("annotation",{encoding:"application/x-tex"},"S_n")])])]),_("span",{class:"katex-html","aria-hidden":"true"},[_("span",{class:"base"},[_("span",{class:"strut",style:{height:"0.8333em","vertical-align":"-0.15em"}}),_("span",{class:"mord"},[_("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),_("span",{class:"msupsub"},[_("span",{class:"vlist-t vlist-t2"},[_("span",{class:"vlist-r"},[_("span",{class:"vlist",style:{height:"0.1514em"}},[_("span",{style:{top:"-2.55em","margin-left":"-0.0576em","margin-right":"0.05em"}},[_("span",{class:"pstrut",style:{height:"2.7em"}}),_("span",{class:"sizing reset-size6 size3 mtight"},[_("span",{class:"mord mathnormal mtight"},"n")])])]),_("span",{class:"vlist-s"},"​")]),_("span",{class:"vlist-r"},[_("span",{class:"vlist",style:{height:"0.15em"}},[_("span")])])])])])])])])]),_("p",null,[O("总能被下一项 "),_("span",{class:"katex"},[_("span",{class:"katex-mathml"},[_("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[_("semantics",null,[_("mrow",null,[_("msub",null,[_("mi",null,"a"),_("mrow",null,[_("mi",null,"n"),_("mo",null,"+"),_("mn",null,"1")])])]),_("annotation",{encoding:"application/x-tex"},"a_{n+1}")])])]),_("span",{class:"katex-html","aria-hidden":"true"},[_("span",{class:"base"},[_("span",{class:"strut",style:{height:"0.6389em","vertical-align":"-0.2083em"}}),_("span",{class:"mord"},[_("span",{class:"mord mathnormal"},"a"),_("span",{class:"msupsub"},[_("span",{class:"vlist-t vlist-t2"},[_("span",{class:"vlist-r"},[_("span",{class:"vlist",style:{height:"0.3011em"}},[_("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[_("span",{class:"pstrut",style:{height:"2.7em"}}),_("span",{class:"sizing reset-size6 size3 mtight"},[_("span",{class:"mord mtight"},[_("span",{class:"mord mathnormal mtight"},"n"),_("span",{class:"mbin mtight"},"+"),_("span",{class:"mord mtight"},"1")])])])]),_("span",{class:"vlist-s"},"​")]),_("span",{class:"vlist-r"},[_("span",{class:"vlist",style:{height:"0.2083em"}},[_("span")])])])])])])])]),O(" 整除。求 "),_("span",{class:"katex"},[_("span",{class:"katex-mathml"},[_("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[_("semantics",null,[_("mrow",null,[_("msub",null,[_("mi",null,"a"),_("mn",null,"37")])]),_("annotation",{encoding:"application/x-tex"},"a_{37}")])])]),_("span",{class:"katex-html","aria-hidden":"true"},[_("span",{class:"base"},[_("span",{class:"strut",style:{height:"0.5806em","vertical-align":"-0.15em"}}),_("span",{class:"mord"},[_("span",{class:"mord mathnormal"},"a"),_("span",{class:"msupsub"},[_("span",{class:"vlist-t vlist-t2"},[_("span",{class:"vlist-r"},[_("span",{class:"vlist",style:{height:"0.3011em"}},[_("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[_("span",{class:"pstrut",style:{height:"2.7em"}}),_("span",{class:"sizing reset-size6 size3 mtight"},[_("span",{class:"mord mtight"},[_("span",{class:"mord mtight"},"37")])])])]),_("span",{class:"vlist-s"},"​")]),_("span",{class:"vlist-r"},[_("span",{class:"vlist",style:{height:"0.15em"}},[_("span")])])])])])])])])])]),_("p",{class:"text-[#059669] text-2xl md:text-3xl mt-6 text-center"}," 做一个网页，搜索符合条件的所有数列~ ")],-1))]),_:1},16)}}},_e=b_(J_,[["__scopeId","data-v-19e58c55"]]);export{_e as default};
