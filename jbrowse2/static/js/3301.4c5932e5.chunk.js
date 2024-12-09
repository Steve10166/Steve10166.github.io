"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[3301],{33301:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});var a=t(7552),i=t(49823),o=t(99546),r=t(29499),l=t(33371),s=t(32808),c=t(1343),d=t(58507),g=t(5401),m=t(82727);const{parseCigar:y}=m.aF;function h(e){return Math.floor(e)}function u(e,n){let t=0,a=0;for(let i=0;i<e.length;i++){const o=+e[i],r=e[i+1],l=Math.min(o,n-t);if(t>=n)break;"I"===r?a+=o:"D"===r?t+=l:"M"!==r&&"="!==r&&"X"!==r||(a+=l,t+=l)}return[t,a]}const w=(0,t(75785).n9)()({padding:{margin:10,border:"1px solid #ccc"}});function f({model:e,feature:n,handleClose:t}){const{classes:m}=w(),f=-1===n.get("strand"),[p,b]=(0,a.useState)(f),[k,v]=(0,a.useState)("1000");return a.createElement(i.Dialog,{open:!0,title:"Launch synteny view",onClose:t},a.createElement(r.A,null,f?a.createElement(l.A,{className:m.padding,control:a.createElement(s.A,{checked:p,onChange:e=>{b(e.target.checked)}}),label:"Note: The feature is inverted in orientation on the target sequence. This will result in the lower panel having genomic coordinates decreasing left to right. Horizontally flip?"}):null,a.createElement(c.A,{label:"Add window size in bp",value:k,onChange:e=>{v(e.target.value)}})),a.createElement(d.A,null,a.createElement(g.A,{variant:"contained",onClick:()=>{(async()=>{try{await async function({feature:e,windowSize:n,model:t,horizontallyFlip:a}){const i=(0,o.getSession)(t),r=(0,o.getContainingTrack)(t),l=(0,o.getContainingView)(t).dynamicBlocks.contentBlocks[0];if(!l)throw new Error("no visible region");const s=e.get("CIGAR"),c=e.get("strand"),d=l.start,g=l.end,m=e.get("start"),w=e.get("end"),f=e.get("mate"),p=f.start,b=f.end,k=f.assemblyName,v=f.refName,S=l.assemblyName,C=l.refName;let $,E,A,L;if(s){const e=y(s),[n,t]=u(e,d-m),[a,i]=u(e,g-m),o=-1===c?-1:1;A=m+n,L=m+a,$=(-1===c?b:p)+t*o,E=(-1===c?b:p)+i*o}else A=m,L=w,$=p,E=b;const T=r.configuration.trackId,M=i.addView("LinearSyntenyView",{type:"LinearSyntenyView",views:[{id:`${Math.random()}`,type:"LinearGenomeView",hideHeader:!0},{id:`${Math.random()}`,type:"LinearGenomeView",hideHeader:!0}],tracks:[{configuration:T,type:"SyntenyTrack",displays:[{type:"LinearSyntenyDisplay",configuration:`${T}-LinearSyntenyDisplay`}]}]}),z=`${C}:${h(A-n)}-${h(L+n)}`,N=Math.min($,E),V=Math.max($,E),D=`${v}:${h(N-n)}-${h(V+n)}${a?"[rev]":""}`;await Promise.all([M.views[0].navToLocString(z,S),M.views[1].navToLocString(D,k)])}({feature:n,windowSize:+k,horizontallyFlip:p,model:e})}catch(n){console.error(n),(0,o.getSession)(e).notifyError(`${n}`,n)}})(),t()}},"Submit"),a.createElement(g.A,{variant:"contained",color:"secondary",onClick:()=>{t()}},"Cancel")))}}}]);
//# sourceMappingURL=3301.4c5932e5.chunk.js.map