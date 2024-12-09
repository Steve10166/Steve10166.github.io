"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[8965,7706],{28965:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var r=n(46377),s=n(99834),a=n(99546),i=n(66885),o=n(78054);class l extends r.BaseFeatureDataAdapter{static capabilities=["getFeatures","getRefNames"];async setup(e){return this.setupP||(this.setupP=this.setupPre(e).catch((e=>{throw this.setupP=void 0,e}))),this.setupP}async setupPre(e){const t=this.getConf("assemblyNames"),n=this.pluginManager,r=(0,s.openLocation)(this.getConf("bed1Location"),n),a=(0,s.openLocation)(this.getConf("bed2Location"),n),i=(0,s.openLocation)(this.getConf("mcscanAnchorsLocation"),n),[l,c,h]=await Promise.all([r,a,i].map((t=>(0,o.TA)(t,e)))),f=(0,o.fY)(l),d=(0,o.fY)(c);return{assemblyNames:t,feats:h.split(/\n|\r\n|\r/).filter((e=>!!e&&"###"!==e)).map(((e,t)=>{const[n,r,s]=e.split("\t"),a=f.get(n),i=d.get(r);if(!a||!i)throw new Error(`feature not found, ${n} ${r} ${a} ${i}`);return[a,i,+s,t]}))}}async hasDataForRefName(){return!0}getAssemblyNames(){return this.getConf("assemblyNames")}async getRefNames(e={}){const t=e.regions?.[0].assemblyName,{feats:n}=await this.setup(e),r=this.getAssemblyNames().indexOf(t);if(-1!==r){const e=new Set;for(const t of n)e.add(0===r?t[0].refName:t[1].refName);return[...e]}return console.warn("Unable to do ref renaming on adapter"),[]}getFeatures(e,t={}){return(0,i.ObservableCreate)((async n=>{const{assemblyNames:r,feats:s}=await this.setup(t),i=r.indexOf(e.assemblyName);if(-1!==i){const t=0===i;s.forEach((s=>{const[o,l,c,h]=s,[f,d]=t?[o,l]:[l,o];f.refName===e.refName&&(0,a.doesIntersect2)(e.start,e.end,f.start,f.end)&&n.next(new a.SimpleFeature({...f,uniqueId:`${i}-${h}`,syntenyId:h,strand:f.strand*d.strand,assemblyName:r[+!t],score:c,mate:{...d,assemblyName:r[+t]}}))}))}n.complete()}))}freeResources(){}}},78054:(e,t,n)=>{n.d(t,{PX:()=>c,TA:()=>i,fY:()=>a,gJ:()=>d,qm:()=>f,xI:()=>h,yU:()=>o});var r=n(7706),s=n(99546);function a(e){return new Map(e.split(/\n|\r\n|\r/).filter((e=>!!e||e.startsWith("#"))).map((e=>{const[t,n,r,s,a,i]=e.split("\t");return[s,{refName:t,start:+n,end:+r,score:+a,name:s,strand:"-"===i?-1:1}]})))}async function i(e,t){const n=await e.readFile(t);return new TextDecoder("utf8",{fatal:!0}).decode((0,s.isGzip)(n)?await(0,r.unzip)(n):n)}function o(e,t){return e.map(((e,n)=>[e,t[n]]))}const l="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function c(e,t){let n=0;const r=[];for(;n<e.length;){const s=e.indexOf("\n",n);if(-1===s)break;const a=e.subarray(n,s),i=(l?.decode(a)||a.toString()).trim();i&&r.push(t(i)),n=s+1}return r}function h(e){const[t,,n,r,s,a,,i,o,l,c,h,...f]=e.split("\t");return{tname:a,tstart:+i,tend:+o,qname:t,qstart:+n,qend:+r,strand:"-"===s?-1:1,extra:{numMatches:+l,blockLen:+c,mappingQual:+h,...Object.fromEntries(f.map((e=>{const t=e.indexOf(":");return[e.slice(0,t),e.slice(t+3)]})))}}}function f(e){const t=[];for(let n=e.length-2;n>=0;n-=2){t.push(e[n]);const r=e[n+1];"D"===r?t.push("I"):"I"===r?t.push("D"):t.push(r)}return t}function d(e){return e.replaceAll("D","K").replaceAll("I","D").replaceAll("K","I")}},7706:(e,t,n)=>{n.d(t,{sG:()=>f,unzip:()=>i,i2:()=>o});var r=n(35451),s=n(45834),a=n(57864);async function i(e){try{let t,n=0,s=0;const i=[];let o,l=0;do{const r=e.subarray(n);if(o=new a.Inflate,({strm:t}=o),o.push(r,a.Z_SYNC_FLUSH),o.err)throw new Error(o.msg);n+=t.next_in,i[s]=o.result,l+=i[s].length,s+=1}while(t.avail_in);const c=new Uint8Array(l);for(let e=0,t=0;e<i.length;e++)c.set(i[e],t),t+=i[e].length;return r.hp.from(c)}catch(e){if(`${e}`.match(/incorrect header check/))throw new Error("problem decompressing block: incorrect gzip header check");throw e}}async function o(e,t){try{let n;const{minv:s,maxv:i}=t;let o=s.blockPosition,l=s.dataPosition;const c=[],h=[],f=[];let d=0,u=0;do{const t=e.subarray(o-s.blockPosition),r=new a.Inflate;if(({strm:n}=r),r.push(t,a.Z_SYNC_FLUSH),r.err)throw new Error(r.msg);const p=r.result;c.push(p);let g=p.length;h.push(o),f.push(l),1===c.length&&s.dataPosition&&(c[0]=c[0].subarray(s.dataPosition),g=c[0].length);const m=o;if(o+=n.next_in,l+=g,m>=i.blockPosition){c[u]=c[u].subarray(0,i.blockPosition===s.blockPosition?i.dataPosition-s.dataPosition+1:i.dataPosition+1),h.push(o),f.push(l),d+=c[u].length;break}d+=c[u].length,u++}while(n.avail_in);const p=new Uint8Array(d);for(let e=0,t=0;e<c.length;e++)p.set(c[e],t),t+=c[e].length;return{buffer:r.hp.from(p),cpositions:h,dpositions:f}}catch(e){if(`${e}`.match(/incorrect header check/))throw new Error("problem decompressing block: incorrect gzip header check");throw e}}var l=n(59086),c=n.n(l);class h{constructor({filehandle:e,path:t}){if(e)this.filehandle=e;else{if(!t)throw new TypeError("either filehandle or path must be defined");this.filehandle=new s.EY(t)}}_readLongWithOverflow(e,t=0,n=!0){const r=c().fromBytesLE(e.slice(t,t+8),n);if(r.greaterThan(Number.MAX_SAFE_INTEGER)||r.lessThan(Number.MIN_SAFE_INTEGER))throw new TypeError("integer overflow");return r.toNumber()}_getIndex(){return this.index||(this.index=this._readIndex()),this.index}async _readIndex(){let e=r.hp.allocUnsafe(8);await this.filehandle.read(e,0,8,0);const t=this._readLongWithOverflow(e,0,!0);if(!t)return[[0,0]];const n=new Array(t+1);n[0]=[0,0];const s=16*t;if(s>Number.MAX_SAFE_INTEGER)throw new TypeError("integer overflow");e=r.hp.allocUnsafe(s),await this.filehandle.read(e,0,s,8);for(let r=0;r<t;r+=1){const t=this._readLongWithOverflow(e,16*r),s=this._readLongWithOverflow(e,16*r+8);n[r+1]=[t,s]}return n}async getLastBlock(){const e=await this._getIndex();if(e.length)return e[e.length-1]}async getRelevantBlocksForRead(e,t){const n=t+e;if(0===e)return[];const r=await this._getIndex(),s=[],a=(e,n)=>{const r=e[1],s=n?n[1]:1/0;return r<=t&&s>t?0:r<t?-1:1};let i=0,o=r.length-1,l=Math.floor(r.length/2),c=a(r[l],r[l+1]);for(;0!==c;)c>0?o=l-1:c<0&&(i=l+1),l=Math.ceil((o-i)/2)+i,c=a(r[l],r[l+1]);s.push(r[l]);let h=l+1;for(;h<r.length&&(s.push(r[h]),!(r[h][1]>=n));h+=1);return s[s.length-1][1]<n&&s.push([]),s}}class f{constructor({filehandle:e,path:t,gziFilehandle:n,gziPath:r}){if(e)this.filehandle=e;else{if(!t)throw new TypeError("either filehandle or path must be defined");this.filehandle=new s.EY(t)}if(!n&&!r&&!t)throw new TypeError("either gziFilehandle or gziPath must be defined");this.gzi=new h({filehandle:n,path:n||r||!t?`${t}.gzi`:r})}async stat(){const e=await this.filehandle.stat();return Object.assign(e,{size:await this.getUncompressedFileSize(),blocks:void 0,blksize:void 0})}async getUncompressedFileSize(){const[,e]=await this.gzi.getLastBlock(),{size:t}=await this.filehandle.stat(),n=r.hp.allocUnsafe(4),{bytesRead:s}=await this.filehandle.read(n,0,4,t-28-4);if(4!==s)throw new Error("read error");return e+n.readUInt32LE(0)}async _readAndUncompressBlock(e,[t],[n]){let r=n;r||(r=(await this.filehandle.stat()).size);const s=r-t;return await this.filehandle.read(e,0,s,t),await i(e.slice(0,s))}async read(e,t,n,s){const a=await this.gzi.getRelevantBlocksForRead(n,s),i=r.hp.allocUnsafe(65536);let o=t,l=0;for(let t=0;t<a.length-1;t+=1){const r=await this._readAndUncompressBlock(i,a[t],a[t+1]),[,c]=a[t],h=c>=s?0:s-c,f=Math.min(s+n,c+r.length)-c;h>=0&&h<r.length&&(r.copy(e,o,h,f),o+=f-h,l+=f-h)}return{bytesRead:l,buffer:e}}}}}]);
//# sourceMappingURL=8965.8e8c5427.chunk.js.map