"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[8965],{28965:(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});var n=s(46377),a=s(99834),r=s(99546),o=s(66885),c=s(78054);class i extends n.BaseFeatureDataAdapter{static capabilities=["getFeatures","getRefNames"];async setup(e){return this.setupP||(this.setupP=this.setupPre(e).catch((e=>{throw this.setupP=void 0,e}))),this.setupP}async setupPre(e){const t=this.getConf("assemblyNames"),s=this.pluginManager,n=(0,a.openLocation)(this.getConf("bed1Location"),s),r=(0,a.openLocation)(this.getConf("bed2Location"),s),o=(0,a.openLocation)(this.getConf("mcscanAnchorsLocation"),s),[i,u,f]=await Promise.all([n,r,o].map((t=>(0,c.TA)(t,e)))),l=(0,c.fY)(i),m=(0,c.fY)(u);return{assemblyNames:t,feats:f.split(/\n|\r\n|\r/).filter((e=>!!e&&"###"!==e)).map(((e,t)=>{const[s,n,a]=e.split("\t"),r=l.get(s),o=m.get(n);if(!r||!o)throw new Error(`feature not found, ${s} ${n} ${r} ${o}`);return[r,o,+a,t]}))}}async hasDataForRefName(){return!0}getAssemblyNames(){return this.getConf("assemblyNames")}async getRefNames(e={}){const t=e.regions?.[0].assemblyName,{feats:s}=await this.setup(e),n=this.getAssemblyNames().indexOf(t);if(-1!==n){const e=new Set;for(const t of s)e.add(0===n?t[0].refName:t[1].refName);return[...e]}return console.warn("Unable to do ref renaming on adapter"),[]}getFeatures(e,t={}){return(0,o.ObservableCreate)((async s=>{const{assemblyNames:n,feats:a}=await this.setup(t),o=n.indexOf(e.assemblyName);if(-1!==o){const t=0===o;a.forEach((a=>{const[c,i,u,f]=a,[l,m]=t?[c,i]:[i,c];l.refName===e.refName&&(0,r.doesIntersect2)(e.start,e.end,l.start,l.end)&&s.next(new r.SimpleFeature({...l,uniqueId:`${o}-${f}`,syntenyId:f,strand:l.strand*m.strand,assemblyName:n[+!t],score:u,mate:{...m,assemblyName:n[+t]}}))}))}s.complete()}))}freeResources(){}}},78054:(e,t,s)=>{s.d(t,{PX:()=>c,TA:()=>r,fY:()=>a,gJ:()=>f,qm:()=>u,xI:()=>i,yU:()=>o});var n=s(99546);function a(e){return new Map(e.split(/\n|\r\n|\r/).filter((e=>!!e||e.startsWith("#"))).map((e=>{const[t,s,n,a,r,o]=e.split("\t");return[a,{refName:t,start:+s,end:+n,score:+r,name:a,strand:"-"===o?-1:1}]})))}async function r(e,t){const s=await(0,n.fetchAndMaybeUnzip)(e,t);return new TextDecoder("utf8").decode(s)}function o(e,t){return e.map(((e,s)=>[e,t[s]]))}function c(e,t){let s=0;const n=[],a=new TextDecoder("utf8");for(;s<e.length;){const r=e.indexOf("\n",s);if(-1===r)break;const o=e.subarray(s,r),c=a.decode(o).trim();if(c){const e=t(c);e&&n.push(e)}s=r+1}return n}function i(e){const[t,,s,n,a,r,,o,c,i,u,f,...l]=e.split("\t");return{tname:r,tstart:+o,tend:+c,qname:t,qstart:+s,qend:+n,strand:"-"===a?-1:1,extra:{numMatches:+i,blockLen:+u,mappingQual:+f,...Object.fromEntries(l.map((e=>{const t=e.indexOf(":");return[e.slice(0,t),e.slice(t+3)]})))}}}function u(e){const t=[];for(let s=e.length-2;s>=0;s-=2){t.push(e[s]);const n=e[s+1];"D"===n?t.push("I"):"I"===n?t.push("D"):t.push(n)}return t}function f(e){return e.replaceAll("D","K").replaceAll("I","D").replaceAll("K","I")}}}]);
//# sourceMappingURL=8965.904b6fe3.chunk.js.map