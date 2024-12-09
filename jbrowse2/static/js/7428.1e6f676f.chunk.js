"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[7428],{27428:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var o=n(7552),a=n(36715),r=n(5401),l=n(68446),s=n(78781),c=n(49823),i=n(54579),u=n(14465);const m=(0,o.lazy)((()=>n.e(6999).then(n.bind(n,66999)))),d=(0,o.lazy)((()=>n.e(6746).then(n.bind(n,76746)))),p=(0,l.observer)((function({model:e,feature:t}){const{sequenceFeatureDetails:n}=e,{upDownBp:l}=n,p=(0,o.useRef)(null),[f,b]=(0,o.useState)(!1),[w,g]=(0,o.useState)(!1),{sequence:h,error:C}=(0,s.p)(e,t,l,w);return(0,o.useEffect)((()=>{n.setFeature(t)}),[n,t]),o.createElement(o.Fragment,null,o.createElement("div",null,o.createElement(u.A,{model:n}),o.createElement(i.A,{ref:p,model:n,extraItems:[{label:"Open in dialog",onClick:()=>{setTimeout((()=>{b(!0)}),1)}}]})),f?o.createElement("div",null,"Open in dialog...",o.createElement(o.Suspense,{fallback:o.createElement(c.LoadingEllipses,null)},o.createElement(d,{model:e,feature:t,handleClose:()=>{b(!1)}}))):o.createElement("div",null,"gene"===t.type?o.createElement(a.A,null,"Note: inspect subfeature sequences for protein/CDS computations"):null,C?o.createElement(c.ErrorMessage,{error:C}):h?"error"in h?o.createElement(o.Fragment,null,o.createElement(a.A,{color:"error"},h.error),o.createElement(r.A,{variant:"contained",color:"inherit",onClick:()=>{g(!0)}},"Force load")):o.createElement(o.Suspense,{fallback:o.createElement(c.LoadingEllipses,null)},o.createElement(m,{ref:p,feature:t,sequence:h,model:n})):o.createElement(c.LoadingEllipses,null)))}))},54579:(e,t,n)=>{n.d(t,{A:()=>d});var o=n(7552),a=n(68446),r=n(31409),l=n.n(r),s=n(45465),c=n(23758),i=n(17307),u=n(22168);const m=(0,o.lazy)((()=>n.e(3550).then(n.bind(n,21169)))),d=(0,a.observer)(o.forwardRef((function({model:e,extraItems:t=[]},n){if("function"==typeof n)throw new Error("needs a non function ref");const[a,r]=(0,o.useState)(!1),{showCoordinatesSetting:d,showGenomicCoordsOption:p}=e;return o.createElement(o.Fragment,null,o.createElement(c.A,{menuItems:[{label:"Copy plaintext",onClick:()=>{const e=n?.current;e&&l()(e.textContent||"",{format:"text/plain"})}},{label:"Copy HTML",onClick:()=>{const e=n?.current;e&&l()(e.outerHTML,{format:"text/html"})}},{label:"Download plaintext",onClick:()=>{const e=n?.current;e&&(0,s.saveAs)(new Blob([e.textContent||""],{type:"text/plain;charset=utf-8"}),"sequence.txt")}},{label:"Download HTML",onClick:()=>{const e=n?.current;e&&(0,s.saveAs)(new Blob([e.outerHTML||""],{type:"text/html;charset=utf-8"}),"sequence.html")}},...t,{label:"Show coordinates?",type:"subMenu",subMenu:[{label:"No coordinates",type:"radio",checked:"none"===d,onClick:()=>{e.setShowCoordinates("none")}},{label:"Coordinates relative to feature start",type:"radio",checked:"relative"===d,onClick:()=>{e.setShowCoordinates("relative")}},...p?[{label:"Coordinates relative to genome (only available for continuous genome based sequence types)",type:"radio",checked:"genomic"===d,onClick:()=>{e.setShowCoordinates("genomic")}}]:[]]},{label:"Settings",icon:u.A,onClick:()=>{r(!0)}}]},o.createElement(i.A,null)),a?o.createElement(m,{model:e,handleClose:()=>{r(!1)}}):null)})))},14465:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(7552),a=n(48171),r=n(98360),l=n(29629),s=n(68446);const c=(0,n(75785).n9)()({formControl:{margin:0,marginLeft:4}}),i=(0,s.observer)((function({model:e}){const{classes:t}=c(),{intronBp:n,upDownBp:s,mode:i,hasCDS:u,hasExonOrCDS:m}=e;return o.createElement(a.A,{className:t.formControl},o.createElement(r.A,{size:"small",value:i,onChange:t=>{e.setMode(t.target.value)}},Object.entries({...u?{cds:"CDS"}:{},...u?{protein:"Protein"}:{},...m?{cdna:"cDNA"}:{},...m?{gene:"Genomic w/ full introns"}:{},...m?{gene_updownstream:`Genomic w/ full introns +/- ${s}bp up+down stream`}:{},...m?{gene_collapsed_intron:`Genomic w/ ${n}bp intron`}:{},...m?{gene_updownstream_collapsed_intron:`Genomic w/ ${n}bp intron +/- ${s}bp up+down stream `}:{},...m?{}:{genomic:"Genomic"},...m?{}:{genomic_sequence_updownstream:`Genomic +/- ${s}bp up+down stream`}}).map((([e,t])=>o.createElement(l.A,{key:e,value:e},t)))))}))},78781:(e,t,n)=>{n.d(t,{p:()=>s});var o=n(7552),a=n(99546),r=n(68584);const l=5e5;function s(e,t,n,s){const[c,i]=(0,o.useState)(),[u,m]=(0,o.useState)();return(0,o.useEffect)((()=>{if(!e)return;const{assemblyManager:o,rpcManager:c}=(0,a.getSession)(e),u=e.view?.assemblyNames?.[0]||"";async function d(e,t,n){const a=await o.waitForAssembly(u);if(!a)throw new Error("assembly not found");const l="getSequence",s=await c.call(l,"CoreGetFeatures",{adapterConfig:(0,r.getConf)(a,["sequence","adapter"]),sessionId:l,regions:[{start:e,end:t,refName:a.getCanonicalRefName(n),assemblyName:u}]}),[i]=s;return i?.get("seq")||""}(async()=>{try{m(void 0);const{start:e,end:o,refName:a}=t;if(!s&&o-e>l)i({error:`Genomic sequence larger than ${l}bp, use "force load" button to display`});else{const t=e-n,r=o+n,l=await d(e,o,a),s=await d(Math.max(0,t),e,a),c=await d(o,r,a);i({seq:l,upstream:s,downstream:c})}}catch(e){console.error(e),m(e)}})()}),[t,e,n,s]),{sequence:c,error:u}}},22168:(e,t,n)=>{n.d(t,{A:()=>r});var o=n(74893),a=n(69500);const r=(0,o.A)((0,a.jsx)("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"}),"Settings")}}]);
//# sourceMappingURL=7428.1e6f676f.chunk.js.map