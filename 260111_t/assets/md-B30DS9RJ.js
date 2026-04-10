import{d as V,z as $,f as S,o as p,F as o_,aj as C_,n as j,t as D,i as B,g as T,j as i_,r as __,L as T_,p as F_,O as U_,b as g_,k as N_,aJ as k_,a2 as G_,w as s_,e as G,ad as e_,v as V_,x as z_,T as E_}from"./modules/vue-8F_mAUgo.js";import{u as F,f as K_}from"./slidev/context-CRE3R9Bs.js";import{_ as n_}from"./index-CTRj8ZbY.js";import"./modules/shiki-BnEOAW2r.js";const X_={class:"scholarly-keywords"},j_=V({__name:"MyKeywords",props:{keywords:{},items:{},color:{default:"primary"}},setup(s){F();const o=s,E=$(()=>o.keywords??o.items??[]),c=$(()=>o.color??"primary");return(u,I)=>(p(),S("div",X_,[(p(!0),S(o_,null,C_(E.value,(d,N)=>(p(),S("span",{key:N,class:j(["keyword-tag",[`keyword-${c.value}`]])},D(d),3))),128))]))}}),J_=n_(j_,[["__scopeId","data-v-ba54f19b"]]),Y_=["theorem","lemma","proposition","corollary","definition","example","remark","proof","note","claim"],S_=new Set(["proof","note"]),A_=/<Theorem(?:\s[^>]*)?\/?>/gi,I_=/^[ \t]*:::theorem(?:\{([^\n]*)\})?[ \t]*$/gm,h_=/\btype\s*=\s*["']([^"']+)["']/i,q_=/(?:^|\s):?number\s*=/i,Z_=/(?:^|\s):?auto-?number\s*=\s*(?:"(?:false|0)"|'(?:false|0)'|false|0)/i,Q_=()=>({theorem:0,lemma:0,proposition:0,corollary:0,definition:0,example:0,remark:0,proof:0,note:0,claim:0}),y_=()=>typeof window>"u"?null:window,v_=s=>s?.meta?.slide?.content??s?.source?.contentRaw??s?.source?.content??s?.content??"",f_=s=>{const o=(s??"theorem").trim().toLowerCase();return Y_.includes(o)?o:"theorem"},R_=(s,o)=>!(S_.has(o)||q_.test(s)||Z_.test(s)),_e=s=>s.replace(/```[\s\S]*?```/g,"").replace(/<!--[\s\S]*?-->/g,""),ee=s=>{const o=[],E=_e(s);A_.lastIndex=0,I_.lastIndex=0;let c;for(;(c=A_.exec(E))!==null;){const u=c[0],I=f_(h_.exec(u)?.[1]);R_(u,I)&&o.push({type:I,index:c.index})}for(;(c=I_.exec(E))!==null;){const u=c[1]??"",I=f_(h_.exec(u)?.[1]);R_(u,I)&&o.push({type:I,index:c.index})}return o.sort((u,I)=>u.index-I.index),o},te=s=>{let o=2166136261;for(let E=0;E<s.length;E++)o^=s.charCodeAt(E),o=Math.imul(o,16777619);return(o>>>0).toString(36)},ne=s=>`${s.length}:${s.map(o=>{const E=v_(o);return`${E.length}-${te(E)}`}).join("|")}`,re=s=>{const o=new Map,E=Q_();for(let c=0;c<s.length;c++){const u=c+1,I=ee(v_(s[c]));if(!I.length)continue;const d=new Map;for(const N of I)E[N.type]+=1,d.has(N.type)||d.set(N.type,[]),d.get(N.type).push(E[N.type]);o.set(u,d)}return o},se=s=>{const o=y_();if(!o)return new Map;const E=ne(s);if(o.__theoremMapCache?.fingerprint===E)return o.__theoremMapCache.map;const c=re(s);return o.__theoremMapCache={fingerprint:E,map:c},c},ie=()=>{const s=y_();return s?(s.__theoremOccurrenceTracker||(s.__theoremOccurrenceTracker=new Map),s.__theoremOccurrenceTracker):new Map},ae=(s,o)=>{const E=ie(),c=`${s}-${o}`,u=E.get(c)??0;return E.set(c,u+1),u},le=(s,o,E,c)=>{if(S_.has(E)||!s?.length)return 0;const d=se(s).get(o)?.get(E);return d?.length?d[c]??d[d.length-1]??0:0},oe={key:0,class:"theorem-header"},Te={class:"theorem-type"},Le={key:0,class:"theorem-number"},ue={key:1,class:"theorem-title"},ce={class:"theorem-content"},Ee=V({__name:"MyTheorem",props:{type:{default:"theorem"},number:{},title:{},autoNumber:{type:Boolean,default:!0},compact:{type:Boolean,default:!1},showHeader:{type:Boolean,default:!0}},setup(s){const o=s,{$page:E,$slidev:c}=F(),u={zh:{theorem:"定理",lemma:"引理",proposition:"命题",corollary:"推论",definition:"定义",example:"例",remark:"注",proof:"证明",note:"注意",claim:"断言"},en:{theorem:"Theorem",lemma:"Lemma",proposition:"Proposition",corollary:"Corollary",definition:"Definition",example:"Example",remark:"Remark",proof:"Proof",note:"Note",claim:"Claim"}},I={zh:{left:"（",right:"）"},en:{left:" (",right:")"}},d=$(()=>{const v=c?.configs;return v?.lang||v?.language||"zh"}),N=$(()=>c?.configs?.theoremNumberFormat||"{number}"),b=$(()=>{const v=d.value;return I[v]||I.en}),y=$(()=>{const v=d.value,U=u[v]||u.zh;return U[o.type]||U.theorem}),C=o.type,H=["proof","note"],O=Number(E?.value??1)||1,J=typeof window<"u"&&o.autoNumber&&o.number===void 0&&!H.includes(C)?ae(O,C):-1,r_=$(()=>c?.nav?.slides||[]),Y=$(()=>{if(o.number!==void 0&&o.number!==null)return q(o.number.toString());if(o.autoNumber&&J>=0){const v=le(r_.value,O,C,J);if(v>0)return q(v.toString())}return""});function q(v){return N.value.replace("{number}",v)}return(v,U)=>(p(),S("div",{class:j(["theorem-box",`theorem-${s.type}`,{"theorem-compact":s.compact}])},[s.showHeader?(p(),S("div",oe,[T("span",Te,D(y.value),1),Y.value?(p(),S("span",Le,D(Y.value),1)):B("v-if",!0),s.title?(p(),S("span",ue,D(b.value.left)+D(s.title)+D(b.value.right),1)):B("v-if",!0)])):B("v-if",!0),T("div",ce,[i_(v.$slots,"default",{},void 0,!0)])],2))}}),Ae=n_(Ee,[["__scopeId","data-v-ba58363c"]]),Ie=V({__name:"MyHighlight",props:{type:{default:void 0},color:{default:void 0}},setup(s){F();const o=s,E=$(()=>{if(o.type)return o.type;switch(o.color){case"yellow":return"warning";case"green":return"success";case"blue":return"info";case"pink":return"danger";case"purple":return"primary";default:return"primary"}});return(c,u)=>(p(),S("span",{class:j(["scholarly-highlight",`highlight-${E.value}`])},[i_(c.$slots,"default",{},void 0,!0)],2))}}),he=n_(Ie,[["__scopeId","data-v-22ba5a07"]]),fe={key:0,class:"block-header"},Re={class:"block-title"},me={class:"block-content"},de=V({__name:"MyBlock",props:{type:{default:"default"},title:{},compact:{type:Boolean,default:!1}},setup(s){return F(),(o,E)=>(p(),S("div",{class:j(["scholarly-block",`block-${s.type}`,{"block-compact":s.compact}])},[s.title?(p(),S("div",fe,[T("span",Re,D(s.title),1)])):B("v-if",!0),T("div",me,[i_(o.$slots,"default",{},void 0,!0)])],2))}}),pe=n_(de,[["__scopeId","data-v-c4b606c0"]]),Ce={class:"scholarly-steps"},ge={class:"step-number"},Ne={class:"step-content"},Se={key:0,class:"step-title"},ye={key:1,class:"step-description"},ve={key:0,class:"step-connector"},Me=V({__name:"MySteps",props:{steps:{default:()=>[]},activeStep:{}},setup(s){F();const o=s;return(E,c)=>(p(),S("div",Ce,[(p(!0),S(o_,null,C_(o.steps,(u,I)=>(p(),S("div",{key:I,class:j(["step-item",{"step-active":o.activeStep===I+1}])},[T("div",ge,D(I+1),1),T("div",Ne,[u.title?(p(),S("div",Se,D(u.title),1)):B("v-if",!0),u.description?(p(),S("div",ye,D(u.description),1)):B("v-if",!0)]),I<o.steps.length-1?(p(),S("div",ve)):B("v-if",!0)],2))),128))]))}}),xe=n_(Me,[["__scopeId","data-v-188e4085"]]),He={__name:"MovingWatermark",props:{colorCls:{type:String,default:"bg-gradient-to-r from-[#2d644b] to-green-600 bg-clip-text text-transparent"},opacity:{type:Number,default:1},text:{type:String,default:"Hans码数理哲"}},setup(s){F();const o=__(null),E=__(null),c=__({x:0,y:0}),u=__({x:0,y:0}),I=__({width:0,height:0}),d=()=>{if(!o.value)return;const y=document.getElementById("slide-content");let C=1;if(y){const O=getComputedStyle(y).getPropertyValue("--slidev-slide-scale");O&&(C=parseFloat(O)||1)}const H=o.value.getBoundingClientRect();I.value.width=H.width/C,I.value.height=H.height/C},N=()=>{(I.value.width===0||I.value.height===0)&&d();const y=E.value?.offsetWidth||60,C=E.value?.offsetHeight||20;c.value={x:Math.random()*(I.value.width-y)+y/2,y:Math.random()*(I.value.height-C)+C/2};const H=1.2+Math.random()*.6,O=(1/12+Math.random()/3)*Math.PI;u.value={x:Math.cos(O)*H,y:Math.sin(O)*H}},b=()=>{const y=E.value?.offsetWidth||60,C=E.value?.offsetHeight||20;c.value.x+=u.value.x,c.value.y+=u.value.y,(c.value.x<=0||c.value.x>=I.value.width-y)&&(u.value.x=-u.value.x,c.value.x=Math.max(0,Math.min(I.value.width-y,c.value.x))),(c.value.y<=0||c.value.y>=I.value.height-C)&&(u.value.y=-u.value.y,c.value.y=Math.max(0,Math.min(I.value.height-C,c.value.y))),requestAnimationFrame(b)};return T_(async()=>{await F_(),d(),N(),requestAnimationFrame(b),window.addEventListener("resize",d)}),U_(()=>{window.removeEventListener("resize",d)}),(y,C)=>(p(),S(o_,null,[B(" teleport 让 position: fixed 能够重新生效 "),(p(),g_(k_,{to:"#slide-content"},[T("div",{ref_key:"containerRef",ref:o,class:"fixed inset-0 pointer-events-none overflow-hidden z-50"},[T("p",{ref_key:"textRef",ref:E,class:j(["absolute select-none !m-0 truncate",s.colorCls]),style:N_({left:`${c.value.x}px`,top:`${c.value.y}px`,fontSize:"20px",opacity:s.opacity,userSelect:"none",pointerEvents:"none"})},D(s.text),7)],512)]))],2112))}},We=V({__name:"SlidevPageRedirector",setup(s){const{$nav:o}=F();function E(c){const u=Array.isArray(c)?c[0]:c;return Number(u)}return T_(()=>{const c=G_(),u=c.query.page;if(!u)return;const I=c.query.clicks,d=E(u),N=E(I);if(!Number.isInteger(d)||d<=0){console.error("页码不合法，请输入正整数");return}o.value.go(d),!(!Number.isInteger(N)||N<0)&&console.warn("拿到 clicks 参数：",N,"，但我暂未找到正确跳转到相应点击次数的方法qwq")}),(c,u)=>(p(),S("div"))}});function m_(s){return s.startsWith("/")?"/slidev-math-videos/260111_t/"+s.slice(1):s}function Oe(s,o=!1){const E=s&&["#","rgb","hsl"].some(u=>s.indexOf(u)===0),c={background:E?s:void 0,color:s&&!E?"white":void 0,backgroundImage:E?void 0:s?o?`linear-gradient(#0005, #0008), url(${m_(s)})`:`url("${m_(s)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return c.background||delete c.background,c}const we={FULL_WIDTH:0,FITTING:1,SMUSHING:2,CONTROLLED_SMUSHING:3};class Pe{constructor(){this.comment="",this.numChars=0,this.options={}}}const l_=["1Row","3-D","3D Diagonal","3D-ASCII","3x5","4Max","5 Line Oblique","AMC 3 Line","AMC 3 Liv1","AMC AAA01","AMC Neko","AMC Razor","AMC Razor2","AMC Slash","AMC Slider","AMC Thin","AMC Tubes","AMC Untitled","ANSI Compact","ANSI Regular","ANSI Shadow","ASCII 12","ASCII 9","ASCII New Roman","Acrobatic","Alligator","Alligator2","Alpha","Alphabet","Arrows","Avatar","B1FF","Babyface Lame","Babyface Leet","Banner","Banner3-D","Banner3","Banner4","Barbwire","Basic","Bear","Bell","Benjamin","Big ASCII 12","Big ASCII 9","Big Chief","Big Money-ne","Big Money-nw","Big Money-se","Big Money-sw","Big Mono 12","Big Mono 9","Big","Bigfig","Binary","Block","Blocks","Bloody","BlurVision ASCII","Bolger","Braced","Bright","Broadway KB","Broadway","Bubble","Bulbhead","Caligraphy","Caligraphy2","Calvin S","Cards","Catwalk","Chiseled","Chunky","Circle","Classy","Coder Mini","Coinstak","Cola","Colossal","Computer","Contessa","Contrast","Cosmike","Cosmike2","Crawford","Crawford2","Crazy","Cricket","Cursive","Cyberlarge","Cybermedium","Cybersmall","Cygnet","DANC4","DOS Rebel","DWhistled","Dancing Font","Decimal","Def Leppard","Delta Corps Priest 1","DiamFont","Diamond","Diet Cola","Digital","Doh","Doom","Dot Matrix","Double Shorts","Double","Dr Pepper","Efti Chess","Efti Font","Efti Italic","Efti Piti","Efti Robot","Efti Wall","Efti Water","Electronic","Elite","Emboss 2","Emboss","Epic","Fender","Filter","Fire Font-k","Fire Font-s","Flipped","Flower Power","Font Font","Four Tops","Fraktur","Fun Face","Fun Faces","Future Smooth","Future Thin","Future","Fuzzy","Georgi16","Georgia11","Ghost","Ghoulish","Glenyn","Goofy","Gothic","Graceful","Gradient","Graffiti","Greek","Heart Left","Heart Right","Henry 3D","Hex","Hieroglyphs","Hollywood","Horizontal Left","Horizontal Right","ICL-1900","Impossible","Invita","Isometric1","Isometric2","Isometric3","Isometric4","Italic","Ivrit","JS Block Letters","JS Bracket Letters","JS Capital Curves","JS Cursive","JS Stick Letters","Jacky","Jazmine","Jerusalem","Katakana","Kban","Keyboard","Knob","Konto Slant","Konto","LCD","Larry 3D 2","Larry 3D","Lean","Letter","Letters","Lil Devil","Line Blocks","Linux","Lockergnome","Madrid","Marquee","Maxfour","Merlin1","Merlin2","Mike","Mini","Mirror","Mnemonic","Modular","Mono 12","Mono 9","Morse","Morse2","Moscow","Mshebrew210","Muzzle","NScript","NT Greek","NV Script","Nancyj-Fancy","Nancyj-Improved","Nancyj-Underlined","Nancyj","Nipples","O8","OS2","Octal","Ogre","Old Banner","Pagga","Patorjk's Cheese","Patorjk-HeX","Pawp","Peaks Slant","Peaks","Pebbles","Pepper","Poison","Puffy","Puzzle","Pyramid","Rammstein","Rebel","Rectangles","Red Phoenix","Relief","Relief2","Reverse","Roman","Rot13","Rotated","Rounded","Rowan Cap","Rozzo","RubiFont","Runic","Runyc","S Blood","SL Script","Santa Clara","Script","Serifcap","Shaded Blocky","Shadow","Shimrod","Short","Slant Relief","Slant","Slide","Small ASCII 12","Small ASCII 9","Small Block","Small Braille","Small Caps","Small Isometric1","Small Keyboard","Small Mono 12","Small Mono 9","Small Poison","Small Script","Small Shadow","Small Slant","Small Tengwar","Small","Soft","Speed","Spliff","Stacey","Stampate","Stampatello","Standard","Star Strips","Star Wars","Stellar","Stforek","Stick Letters","Stop","Straight","Stronger Than All","Sub-Zero","Swamp Land","Swan","Sweet","THIS","Tanja","Tengwar","Term","Terrace","Test1","The Edge","Thick","Thin","Thorned","Three Point","Ticks Slant","Ticks","Tiles","Tinker-Toy","Tmplr","Tombstone","Train","Trek","Tsalagi","Tubular","Twisted","Two Point","USA Flag","Univers","Upside Down Text","Varsity","Wavescape","Wavy","Weird","Wet Letter","Whimsy","WideTerm","Wow","miniwi"],d_={"ANSI-Compact":"ANSI Compact"},t_=s=>d_[s]?d_[s]:s;function De(s){return/[.*+?^${}()|[\]\\]/.test(s)?"\\"+s:s}const p_=(()=>{const{FULL_WIDTH:s=0,FITTING:o,SMUSHING:E,CONTROLLED_SMUSHING:c}=we,u={},I={font:"Standard",fontPath:"./fonts",fetchFontIfMissing:!0};function d(t,n,_){const e=De(t.trim().slice(-1))||"@",r=n===_-1?new RegExp(e+e+"?\\s*$"):new RegExp(e+"\\s*$");return t.replace(r,"")}function N(t=-1,n=null){let _={},e,r=[[16384,"vLayout",E],[8192,"vLayout",o],[4096,"vRule5",!0],[2048,"vRule4",!0],[1024,"vRule3",!0],[512,"vRule2",!0],[256,"vRule1",!0],[128,"hLayout",E],[64,"hLayout",o],[32,"hRule6",!0],[16,"hRule5",!0],[8,"hRule4",!0],[4,"hRule3",!0],[2,"hRule2",!0],[1,"hRule1",!0]];e=n!==null?n:t;for(const[i,a,l]of r)e>=i?(e-=i,_[a]===void 0&&(_[a]=l)):a!=="vLayout"&&a!=="hLayout"&&(_[a]=!1);return typeof _.hLayout>"u"?t===0?_.hLayout=o:t===-1?_.hLayout=s:_.hRule1||_.hRule2||_.hRule3||_.hRule4||_.hRule5||_.hRule6?_.hLayout=c:_.hLayout=E:_.hLayout===E&&(_.hRule1||_.hRule2||_.hRule3||_.hRule4||_.hRule5||_.hRule6)&&(_.hLayout=c),typeof _.vLayout>"u"?_.vRule1||_.vRule2||_.vRule3||_.vRule4||_.vRule5?_.vLayout=c:_.vLayout=s:_.vLayout===E&&(_.vRule1||_.vRule2||_.vRule3||_.vRule4||_.vRule5)&&(_.vLayout=c),_}function b(t,n,_=""){return t===n&&t!==_?t:!1}function y(t,n){let _="|/\\[]{}()<>";if(t==="_"){if(_.indexOf(n)!==-1)return n}else if(n==="_"&&_.indexOf(t)!==-1)return t;return!1}function C(t,n){let _="| /\\ [] {} () <>",e=_.indexOf(t),r=_.indexOf(n);if(e!==-1&&r!==-1&&e!==r&&Math.abs(e-r)!==1){const i=Math.max(e,r),a=i+1;return _.substring(i,a)}return!1}function H(t,n){let _="[] {} ()",e=_.indexOf(t),r=_.indexOf(n);return e!==-1&&r!==-1&&Math.abs(e-r)<=1?"|":!1}function O(t,n){return{"/\\":"|","\\/":"Y","><":"X"}[t+n]||!1}function J(t,n,_=""){return t===_&&n===_?_:!1}function r_(t,n){return t===n?t:!1}function Y(t,n){return y(t,n)}function q(t,n){return C(t,n)}function v(t,n){return t==="-"&&n==="_"||t==="_"&&n==="-"?"=":!1}function U(t,n){return t==="|"&&n==="|"?"|":!1}function z(t,n,_){return n===" "||n===""||n===_&&t!==" "?t:n}function M_(t,n,_){if(_.fittingRules&&_.fittingRules.vLayout===s)return"invalid";let e,r=Math.min(t.length,n.length),i,a,l=!1,L;if(r===0)return"invalid";for(e=0;e<r;e++)if(i=t.substring(e,e+1),a=n.substring(e,e+1),i!==" "&&a!==" "){if(_.fittingRules&&_.fittingRules.vLayout===o)return"invalid";if(_.fittingRules&&_.fittingRules.vLayout===E)return"end";if(U(i,a)){l=l||!1;continue}if(L=!1,L=_.fittingRules&&_.fittingRules.vRule1?r_(i,a):L,L=!L&&_.fittingRules&&_.fittingRules.vRule2?Y(i,a):L,L=!L&&_.fittingRules&&_.fittingRules.vRule3?q(i,a):L,L=!L&&_.fittingRules&&_.fittingRules.vRule4?v(i,a):L,l=!0,!L)return"invalid"}return l?"end":"valid"}function x_(t,n,_){let e=t.length,r=t.length,i,a,l,L=1,A,f,h;for(;L<=e;){for(i=t.slice(Math.max(0,r-L),r),a=n.slice(0,Math.min(e,L)),l=a.length,h="",A=0;A<l;A++)if(f=M_(i[A],a[A],_),f==="end")h=f;else if(f==="invalid"){h=f;break}else h===""&&(h="valid");if(h==="invalid"){L--;break}if(h==="end")break;h==="valid"&&L++}return Math.min(e,L)}function H_(t,n,_){let e,r=Math.min(t.length,n.length),i,a,l="",L;const A=_.fittingRules||{};for(e=0;e<r;e++)i=t.substring(e,e+1),a=n.substring(e,e+1),i!==" "&&a!==" "?A.vLayout===o||A.vLayout===E?l+=z(i,a):(L=!1,L=A.vRule5?U(i,a):L,L=!L&&A.vRule1?r_(i,a):L,L=!L&&A.vRule2?Y(i,a):L,L=!L&&A.vRule3?q(i,a):L,L=!L&&A.vRule4?v(i,a):L,l+=L):l+=z(i,a);return l}function W_(t,n,_,e){let r=t.length,i=n.length,a=t.slice(0,Math.max(0,r-_)),l=t.slice(Math.max(0,r-_),r),L=n.slice(0,Math.min(_,i)),A,f,h,R=[],m;for(f=l.length,A=0;A<f;A++)A>=i?h=l[A]:h=H_(l[A],L[A],e),R.push(h);return m=n.slice(Math.min(_,i),i),[...a,...R,...m]}function L_(t,n){const _=" ".repeat(n);return t.map(e=>e+_)}function O_(t,n,_){let e=t[0].length,r=n[0].length,i;return e>r?n=L_(n,e-r):r>e&&(t=L_(t,r-e)),i=x_(t,n,_),W_(t,n,i,_)}function w_(t,n,_){const e=_.fittingRules||{};if(e.hLayout===s)return 0;let r,i=t.length,a=n.length,l=i,L=1,A=!1,f,h,R,m;if(i===0)return 0;_:for(;L<=l;){const w=i-L;for(f=t.substring(w,w+L),h=n.substring(0,Math.min(L,a)),r=0;r<Math.min(L,a);r++)if(R=f.substring(r,r+1),m=h.substring(r,r+1),R!==" "&&m!==" "){if(e.hLayout===o){L=L-1;break _}else if(e.hLayout===E){(R===_.hardBlank||m===_.hardBlank)&&(L=L-1);break _}else if(A=!0,!(e.hRule1&&b(R,m,_.hardBlank)||e.hRule2&&y(R,m)||e.hRule3&&C(R,m)||e.hRule4&&H(R,m)||e.hRule5&&O(R,m)||e.hRule6&&J(R,m,_.hardBlank))){L=L-1;break _}}if(A)break;L++}return Math.min(l,L)}function a_(t,n,_,e){let r,i,a=[],l,L,A,f,h,R,m,w;const M=e.fittingRules||{};if(typeof e.height!="number")throw new Error("height is not defined.");for(r=0;r<e.height;r++){m=t[r],w=n[r],h=m.length,R=w.length,l=h-_,L=m.slice(0,Math.max(0,l)),A="";const Q=Math.max(0,h-_);let P=m.substring(Q,Q+_),k=w.substring(0,Math.min(_,R));for(i=0;i<_;i++){let W=i<h?P.substring(i,i+1):" ",x=i<R?k.substring(i,i+1):" ";if(W!==" "&&x!==" ")if(M.hLayout===o||M.hLayout===E)A+=z(W,x,e.hardBlank);else{const B_=M.hRule1&&b(W,x,e.hardBlank)||M.hRule2&&y(W,x)||M.hRule3&&C(W,x)||M.hRule4&&H(W,x)||M.hRule5&&O(W,x)||M.hRule6&&J(W,x,e.hardBlank)||z(W,x,e.hardBlank);A+=B_}else A+=z(W,x,e.hardBlank)}_>=R?f="":f=w.substring(_,_+Math.max(0,R-_)),a[r]=L+A+f}return a}function K(t){return new Array(t).fill("")}const Z=function(t){return Math.max(...t.map(n=>n.length))};function X(t,n,_){return t.reduce(function(e,r){return a_(e,r.fig,r.overlap||0,_)},K(n))}function P_(t,n,_){for(let e=t.length-1;e>0;e--){const r=X(t.slice(0,e),n,_);if(Z(r)<=_.width)return{outputFigText:r,chars:t.slice(e)}}return{outputFigText:K(n),chars:t}}function D_(t,n,_){let e,r,i=0,a,l,L,A=_.height,f=[],h,R={chars:[],overlap:i},m=[],w,M,Q,P,k;if(typeof A!="number")throw new Error("height is not defined.");l=K(A);const W=_.fittingRules||{};for(_.printDirection===1&&(t=t.split("").reverse().join("")),L=t.length,e=0;e<L;e++)if(w=t.substring(e,e+1),M=w.match(/\s/),r=n[w.charCodeAt(0)],P=null,r){if(W.hLayout!==s){for(i=1e4,a=0;a<A;a++)i=Math.min(i,w_(l[a],r[a],_));i=i===1e4?0:i}if(_.width>0&&(_.whitespaceBreak?(Q=X(R.chars.concat([{fig:r,overlap:i}]),A,_),P=X(m.concat([{fig:Q,overlap:R.overlap}]),A,_),h=Z(P)):(P=a_(l,r,i,_),h=Z(P)),h>=_.width&&e>0&&(_.whitespaceBreak?(l=X(m.slice(0,-1),A,_),m.length>1&&(f.push(l),l=K(A)),m=[]):(f.push(l),l=K(A)))),_.width>0&&_.whitespaceBreak&&((!M||e===L-1)&&R.chars.push({fig:r,overlap:i}),M||e===L-1)){for(k=null;P=X(R.chars,A,_),h=Z(P),h>=_.width;)k=P_(R.chars,A,_),R={chars:k.chars},f.push(k.outputFigText);h>0&&(k?m.push({fig:P,overlap:1}):m.push({fig:P,overlap:R.overlap})),M&&(m.push({fig:r,overlap:i}),l=K(A)),e===L-1&&(l=X(m,A,_)),R={chars:[],overlap:i};continue}l=a_(l,r,i,_)}return Z(l)>0&&f.push(l),_.showHardBlanks||f.forEach(function(x){for(L=x.length,a=0;a<L;a++)x[a]=x[a].replace(new RegExp("\\"+_.hardBlank,"g")," ")}),t===""&&f.length===0&&f.push(new Array(A).fill("")),f}const b_=function(t,n){let _;const e=n.fittingRules||{};if(t==="default")_={hLayout:e.hLayout,hRule1:e.hRule1,hRule2:e.hRule2,hRule3:e.hRule3,hRule4:e.hRule4,hRule5:e.hRule5,hRule6:e.hRule6};else if(t==="full")_={hLayout:s,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(t==="fitted")_={hLayout:o,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(t==="controlled smushing")_={hLayout:c,hRule1:!0,hRule2:!0,hRule3:!0,hRule4:!0,hRule5:!0,hRule6:!0};else if(t==="universal smushing")_={hLayout:E,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else return;return _},$_=function(t,n){let _={};const e=n.fittingRules||{};if(t==="default")_={vLayout:e.vLayout,vRule1:e.vRule1,vRule2:e.vRule2,vRule3:e.vRule3,vRule4:e.vRule4,vRule5:e.vRule5};else if(t==="full")_={vLayout:s,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(t==="fitted")_={vLayout:o,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(t==="controlled smushing")_={vLayout:c,vRule1:!0,vRule2:!0,vRule3:!0,vRule4:!0,vRule5:!0};else if(t==="universal smushing")_={vLayout:E,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else return;return _},u_=function(t,n,_){_=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`);const e=t_(t);let r=_.split(`
`),i=[],a,l,L;for(l=r.length,a=0;a<l;a++)i=i.concat(D_(r[a],u[e],n));for(l=i.length,L=i[0],a=1;a<l;a++)L=O_(L,i[a],n);return L?L.join(`
`):""};function c_(t,n){let _;if(typeof structuredClone<"u"?_=structuredClone(t):_=JSON.parse(JSON.stringify(t)),_.showHardBlanks=n.showHardBlanks||!1,_.width=n.width||-1,_.whitespaceBreak=n.whitespaceBreak||!1,n.horizontalLayout){const e=b_(n.horizontalLayout,t);e&&Object.assign(_.fittingRules,e)}if(n.verticalLayout){const e=$_(n.verticalLayout,t);e&&Object.assign(_.fittingRules,e)}return _.printDirection=n.printDirection!==null&&n.printDirection!==void 0?n.printDirection:t.printDirection,_}const g=async function(t,n,_){return g.text(t,n,_)};return g.text=async function(t,n,_){t=t+"";let e,r;typeof n=="function"?(r=n,e={font:I.font}):typeof n=="string"?(e={font:n},r=_):n?(e=n,r=_):(e={font:I.font},r=_);const i=e.font||I.font;try{const a=await g.loadFont(i),l=a?u_(i,c_(a,e),t):"";return r&&r(null,l),l}catch(a){const l=a instanceof Error?a:new Error(String(a));if(r)return r(l),"";throw l}},g.textSync=function(t,n){t=t+"",typeof n=="string"?n={font:n}:n=n||{};const _=n.font||I.font;let e=c_(g.loadFontSync(_),n);return u_(_,e,t)},g.metadata=async function(t,n){t=t+"";try{const _=await g.loadFont(t);if(!_)throw new Error("Error loading font.");const e=t_(t),r=u[e]||{},i=[_,r.comment||""];return n&&n(null,_,r.comment),i}catch(_){const e=_ instanceof Error?_:new Error(String(_));if(n)return n(e),null;throw e}},g.defaults=function(t){return t&&typeof t=="object"&&Object.assign(I,t),typeof structuredClone<"u"?structuredClone(I):JSON.parse(JSON.stringify(I))},g.parseFont=function(t,n,_=!0){if(u[t]&&!_)return u[t].options;n=n.replace(/\r\n/g,`
`).replace(/\r/g,`
`);const e=new Pe,r=n.split(`
`),i=r.shift();if(!i)throw new Error("Invalid font file: missing header");const a=i.split(" "),l={hardBlank:a[0].substring(5,6),height:parseInt(a[1],10),baseline:parseInt(a[2],10),maxLength:parseInt(a[3],10),oldLayout:parseInt(a[4],10),numCommentLines:parseInt(a[5],10),printDirection:a[6]?parseInt(a[6],10):0,fullLayout:a[7]?parseInt(a[7],10):null,codeTagCount:a[8]?parseInt(a[8],10):null};if((l.hardBlank||"").length!==1||[l.height,l.baseline,l.maxLength,l.oldLayout,l.numCommentLines].some(f=>f==null||isNaN(f)))throw new Error("FIGlet header contains invalid values.");if(l.height==null||l.numCommentLines==null)throw new Error("FIGlet header contains invalid values.");l.fittingRules=N(l.oldLayout,l.fullLayout),e.options=l;const A=[];for(let f=32;f<=126;f++)A.push(f);if(A.push(196,214,220,228,246,252,223),r.length<l.numCommentLines+l.height*A.length)throw new Error(`FIGlet file is missing data. Line length: ${r.length}. Comment lines: ${l.numCommentLines}. Height: ${l.height}. Num chars: ${A.length}.`);for(e.comment=r.splice(0,l.numCommentLines).join(`
`),e.numChars=0;r.length>0&&e.numChars<A.length;){const f=A[e.numChars];e[f]=r.splice(0,l.height);for(let h=0;h<l.height;h++)typeof e[f][h]>"u"?e[f][h]="":e[f][h]=d(e[f][h],h,l.height);e.numChars++}for(;r.length>0;){const f=r.shift();if(!f||f.trim()==="")break;let h=f.split(" ")[0],R;if(/^-?0[xX][0-9a-fA-F]+$/.test(h))R=parseInt(h,16);else if(/^-?0[0-7]+$/.test(h))R=parseInt(h,8);else if(/^-?[0-9]+$/.test(h))R=parseInt(h,10);else throw new Error(`Error parsing data. Invalid data: ${h}`);if(R===-1||R<-2147483648||R>2147483647){const m=R===-1?"The char code -1 is not permitted.":`The char code cannot be ${R<-2147483648?"less than -2147483648":"greater than 2147483647"}.`;throw new Error(`Error parsing data. ${m}`)}e[R]=r.splice(0,l.height);for(let m=0;m<l.height;m++)typeof e[R][m]>"u"?e[R][m]="":e[R][m]=d(e[R][m],m,l.height);e.numChars++}return u[t]=e,l},g.loadedFonts=()=>Object.keys(u),g.clearLoadedFonts=()=>{Object.keys(u).forEach(t=>{delete u[t]})},g.loadFont=async function(t,n){const _=t_(t);if(u[_]){const e=u[_].options;return n&&n(null,e),Promise.resolve(e)}try{if(!I.fetchFontIfMissing)throw new Error(`Font is not loaded: ${_}`);const e=await fetch(`${I.fontPath}/${_}.flf`);if(!e.ok)throw new Error(`Network response was not ok: ${e.status}`);const r=await e.text(),i=g.parseFont(_,r);return n&&n(null,i),i}catch(e){const r=e instanceof Error?e:new Error(String(e));if(n)return n(r),null;throw r}},g.loadFontSync=function(t){const n=t_(t);if(u[n])return u[n].options;throw new Error("Synchronous font loading is not implemented for the browser, it will only work for fonts already loaded.")},g.preloadFonts=async function(t,n){try{for(const _ of t){const e=t_(_),r=await fetch(`${I.fontPath}/${e}.flf`);if(!r.ok)throw new Error(`Failed to preload fonts. Error fetching font: ${e}, status code: ${r.statusText}`);const i=await r.text();g.parseFont(e,i)}n&&n()}catch(_){const e=_ instanceof Error?_:new Error(String(_));if(n){n(e);return}throw _}},g.fonts=function(t){return new Promise(function(n,_){n(l_),t&&t(null,l_)})},g.fontsSync=function(){return l_},g.figFonts=u,g})(),be=`flf2a$ 6 5 16 15 13 0 24463 229
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
         `,$e={class:"my-auto w-full"},Be=V({__name:"cover",props:{background:{default:""}},setup(s){F();function o(){const u=p_.textSync("hans-green-theme",{font:"Standard"});console.log(u),console.log("🌟🌟 本PPT原作者：%cHans码数理哲","color: #16a34a; font-weight: bold; font-size: 30px;","🌟🌟")}const E=s,c=$(()=>Oe(E.background,!0));return T_(()=>{p_.parseFont("Standard",be),o()}),(u,I)=>(p(),S("div",{class:"slidev-layout cover",style:N_(c.value)},[T("div",$e,[i_(u.$slots,"default")])],4))}}),Ve={__name:"【slidev】模板.md__slidev_1",setup(s){const{$clicksContext:o,$frontmatter:E}=F();return o.setup(),(c,u)=>{const I=We,d=He,N=xe,b=pe,y=he,C=Ae,H=J_;return p(),g_(Be,V_(z_(E_(K_)(E_(E),0))),{default:s_(()=>[G(I),G(d),B(' <AutoSlide :timeList="[0, 0]" /> '),G(N,{steps:[{title:"步骤 1",description:"第一步说明"},{title:"步骤 2",description:"第二步说明"}],activeStep:1}),G(b,{type:"success",title:"关键发现"},{default:s_(()=>[...u[0]||(u[0]=[T("p",null,[e_("We identified "),T("strong",null,"127 new species"),e_(" of arthropods in previously unsampled canopy microhabitats.")],-1)])]),_:1}),T("p",null,[u[2]||(u[2]=e_("这是一段",-1)),G(y,{type:"success"},{default:s_(()=>[...u[1]||(u[1]=[e_("表示强调",-1)])]),_:1}),u[3]||(u[3]=e_("的文字",-1))]),G(C,{type:"corollary",title:"推论1"},{default:s_(()=>[...u[4]||(u[4]=[T("p",null,[T("span",{class:"katex"},[T("span",{class:"katex-mathml"},[T("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[T("semantics",null,[T("mrow",null,[T("msup",null,[T("mi",null,"c"),T("mn",null,"2")]),T("mo",null,"="),T("msup",null,[T("mi",null,"a"),T("mn",null,"2")]),T("mo",null,"+"),T("msup",null,[T("mi",null,"b"),T("mn",null,"2")])]),T("annotation",{encoding:"application/x-tex"},"c^2=a^2+b^2")])])]),T("span",{class:"katex-html","aria-hidden":"true"},[T("span",{class:"base"},[T("span",{class:"strut",style:{height:"0.8141em"}}),T("span",{class:"mord"},[T("span",{class:"mord mathnormal"},"c"),T("span",{class:"msupsub"},[T("span",{class:"vlist-t"},[T("span",{class:"vlist-r"},[T("span",{class:"vlist",style:{height:"0.8141em"}},[T("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[T("span",{class:"pstrut",style:{height:"2.7em"}}),T("span",{class:"sizing reset-size6 size3 mtight"},[T("span",{class:"mord mtight"},"2")])])])])])])]),T("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),T("span",{class:"mrel"},"="),T("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),T("span",{class:"base"},[T("span",{class:"strut",style:{height:"0.8974em","vertical-align":"-0.0833em"}}),T("span",{class:"mord"},[T("span",{class:"mord mathnormal"},"a"),T("span",{class:"msupsub"},[T("span",{class:"vlist-t"},[T("span",{class:"vlist-r"},[T("span",{class:"vlist",style:{height:"0.8141em"}},[T("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[T("span",{class:"pstrut",style:{height:"2.7em"}}),T("span",{class:"sizing reset-size6 size3 mtight"},[T("span",{class:"mord mtight"},"2")])])])])])])]),T("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),T("span",{class:"mbin"},"+"),T("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),T("span",{class:"base"},[T("span",{class:"strut",style:{height:"0.8141em"}}),T("span",{class:"mord"},[T("span",{class:"mord mathnormal"},"b"),T("span",{class:"msupsub"},[T("span",{class:"vlist-t"},[T("span",{class:"vlist-r"},[T("span",{class:"vlist",style:{height:"0.8141em"}},[T("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[T("span",{class:"pstrut",style:{height:"2.7em"}}),T("span",{class:"sizing reset-size6 size3 mtight"},[T("span",{class:"mord mtight"},"2")])])])])])])])])])])],-1)])]),_:1}),G(H,{keywords:["生态系统","Biodiversity","Conservation","Tropics"],color:"green"})]),_:1},16)}}};export{Ve as default};
