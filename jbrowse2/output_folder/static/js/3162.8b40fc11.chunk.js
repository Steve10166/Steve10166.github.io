(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[3162],{25762:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});var a=s(74893),i=s(69500);const r=(0,a.A)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},45331:(e,t,s)=>{"use strict";s.d(t,{Ay:()=>b});var a=s(7552),i=s(93878),r=s(70799),o=s(23879),n=s(51148),l=s(84893),d=s(4785),u=s(3755),c=s(51584),m=s(57406),p=s(74823),h=s(2451),g=s(77999),$=s(69500);const f=(0,n.Ay)("div",{name:"MuiListItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,s.dense&&t.dense,"flex-start"===s.alignItems&&t.alignItemsFlexStart,s.divider&&t.divider,!s.disableGutters&&t.gutters,!s.disablePadding&&t.padding,s.hasSecondaryAction&&t.secondaryAction]}})((0,l.A)((({theme:e})=>({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",variants:[{props:({ownerState:e})=>!e.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:e})=>!e.disablePadding&&e.dense,style:{paddingTop:4,paddingBottom:4}},{props:({ownerState:e})=>!e.disablePadding&&!e.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:e})=>!e.disablePadding&&!!e.secondaryAction,style:{paddingRight:48}},{props:({ownerState:e})=>!!e.secondaryAction,style:{[`& > .${h.A.root}`]:{paddingRight:48}}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:e})=>e.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:e})=>e.button,style:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}}},{props:({ownerState:e})=>e.hasSecondaryAction,style:{paddingRight:48}}]})))),v=(0,n.Ay)("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),b=a.forwardRef((function(e,t){const s=(0,d.b)({props:e,name:"MuiListItem"}),{alignItems:n="center",children:l,className:h,component:b,components:y={},componentsProps:w={},ContainerComponent:A="li",ContainerProps:{className:x,...S}={},dense:I=!1,disableGutters:C=!1,disablePadding:R=!1,divider:k=!1,secondaryAction:L,slotProps:P={},slots:j={},...G}=s,M=a.useContext(m.A),z=a.useMemo((()=>({dense:I||M.dense||!1,alignItems:n,disableGutters:C})),[n,M.dense,I,C]),N=a.useRef(null),q=a.Children.toArray(l),U=q.length&&(0,u.A)(q[q.length-1],["ListItemSecondaryAction"]),_={...s,alignItems:n,dense:z.dense,disableGutters:C,disablePadding:R,divider:k,hasSecondaryAction:U},B=(e=>{const{alignItems:t,classes:s,dense:a,disableGutters:i,disablePadding:o,divider:n,hasSecondaryAction:l}=e,d={root:["root",a&&"dense",!i&&"gutters",!o&&"padding",n&&"divider","flex-start"===t&&"alignItemsFlexStart",l&&"secondaryAction"],container:["container"]};return(0,r.A)(d,p._,s)})(_),E=(0,c.A)(N,t),F=j.root||y.Root||f,O=P.root||w.root||{},T={className:(0,i.A)(B.root,O.className,h),...G};let D=b||"li";return U?(D=T.component||b?D:"div","li"===A&&("li"===D?D="div":"li"===T.component&&(T.component="div")),(0,$.jsx)(m.A.Provider,{value:z,children:(0,$.jsxs)(v,{as:A,className:(0,i.A)(B.container,x),ref:E,ownerState:_,...S,children:[(0,$.jsx)(F,{...O,...!(0,o.A)(F)&&{as:D,ownerState:{..._,...O.ownerState}},...T,children:q}),q.pop()]})})):(0,$.jsx)(m.A.Provider,{value:z,children:(0,$.jsxs)(F,{...O,as:D,ref:E,...!(0,o.A)(F)&&{ownerState:{..._,...O.ownerState}},...T,children:[q,L&&(0,$.jsx)(g.A,{children:L})]})})}))},74823:(e,t,s)=>{"use strict";s.d(t,{A:()=>o,_:()=>r});var a=s(33761),i=s(85693);function r(e){return(0,i.Ay)("MuiListItem",e)}const o=(0,a.A)("MuiListItem",["root","container","dense","alignItemsFlexStart","divider","gutters","padding","secondaryAction"])},2451:(e,t,s)=>{"use strict";s.d(t,{A:()=>o,Y:()=>r});var a=s(33761),i=s(85693);function r(e){return(0,i.Ay)("MuiListItemButton",e)}const o=(0,a.A)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"])},77999:(e,t,s)=>{"use strict";s.d(t,{A:()=>p});var a=s(7552),i=s(93878),r=s(70799),o=s(51148),n=s(4785),l=s(57406),d=s(87739),u=s(69500);const c=(0,o.Ay)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,s.disableGutters&&t.disableGutters]}})({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",variants:[{props:({ownerState:e})=>e.disableGutters,style:{right:0}}]}),m=a.forwardRef((function(e,t){const s=(0,n.b)({props:e,name:"MuiListItemSecondaryAction"}),{className:o,...m}=s,p=a.useContext(l.A),h={...s,disableGutters:p.disableGutters},g=(e=>{const{disableGutters:t,classes:s}=e,a={root:["root",t&&"disableGutters"]};return(0,r.A)(a,d.g,s)})(h);return(0,u.jsx)(c,{className:(0,i.A)(g.root,o),ownerState:h,ref:t,...m})}));m.muiName="ListItemSecondaryAction";const p=m},87739:(e,t,s)=>{"use strict";s.d(t,{A:()=>o,g:()=>r});var a=s(33761),i=s(85693);function r(e){return(0,i.Ay)("MuiListItemSecondaryAction",e)}const o=(0,a.A)("MuiListItemSecondaryAction",["root","disableGutters"])},93091:function(e){e.exports=function(){var e=[],t=[],s={},a={},i={};function r(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function o(e,t){return e===t?t:e===e.toLowerCase()?t.toLowerCase():e===e.toUpperCase()?t.toUpperCase():e[0]===e[0].toUpperCase()?t.charAt(0).toUpperCase()+t.substr(1).toLowerCase():t.toLowerCase()}function n(e,t){return e.replace(t[0],(function(s,a){var i,r,n=(i=t[1],r=arguments,i.replace(/\$(\d{1,2})/g,(function(e,t){return r[t]||""})));return o(""===s?e[a-1]:s,n)}))}function l(e,t,a){if(!e.length||s.hasOwnProperty(e))return t;for(var i=a.length;i--;){var r=a[i];if(r[0].test(t))return n(t,r)}return t}function d(e,t,s){return function(a){var i=a.toLowerCase();return t.hasOwnProperty(i)?o(a,i):e.hasOwnProperty(i)?o(a,e[i]):l(i,a,s)}}function u(e,t,s,a){return function(a){var i=a.toLowerCase();return!!t.hasOwnProperty(i)||!e.hasOwnProperty(i)&&l(i,i,s)===i}}function c(e,t,s){return(s?t+" ":"")+(1===t?c.singular(e):c.plural(e))}return c.plural=d(i,a,e),c.isPlural=u(i,a,e),c.singular=d(a,i,t),c.isSingular=u(a,i,t),c.addPluralRule=function(t,s){e.push([r(t),s])},c.addSingularRule=function(e,s){t.push([r(e),s])},c.addUncountableRule=function(e){"string"!=typeof e?(c.addPluralRule(e,"$0"),c.addSingularRule(e,"$0")):s[e.toLowerCase()]=!0},c.addIrregularRule=function(e,t){t=t.toLowerCase(),e=e.toLowerCase(),i[e]=t,a[t]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach((function(e){return c.addIrregularRule(e[0],e[1])})),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach((function(e){return c.addPluralRule(e[0],e[1])})),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach((function(e){return c.addSingularRule(e[0],e[1])})),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(c.addUncountableRule),c}()}}]);
//# sourceMappingURL=3162.8b40fc11.chunk.js.map