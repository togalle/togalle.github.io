import{s as R,n as S}from"../chunks/scheduler.S4wXxuDW.js";import{S as j,i as O,e as h,s as k,t as q,c as d,b as y,g as E,h as H,f as N,d as T,l as g,a as D,j as s,k as A}from"../chunks/index.hd8YESnd.js";function B(x){let e,t,a,u="Hi! My name is",i,o,_="Tomas Galle",w,r,n,c,C,P,m,b=`<h3>Testimonials</h3> <p>&quot;Tomas is very eager to learn and critically assess his learning. He aims to complete his
			tasks successfully, always meeting the expectations set for him, and often exceeding them. He
			continues to strive for self-development and is not afraid to seek help and insights from
			colleagues in the process. In addition to being a good engineer, Tomas is also a great team
			player and possesses a good set of soft skills — where he consistently demonstrates a
			willingness to keep growing.&quot;</p> <div class="author">Manu De Buck (co-founder we are)</div>`,I,p,L='<h3>Contact info</h3> <a href="https://www.linkedin.com/in/tomas-galle-6b4baa164">LinkedIn</a> <a href="mailto:tomasgalle2002@gmail.com" target="_blank">Email</a> <a href="tel:+32 479 81 96 29">Phone</a>';return{c(){e=h("div"),t=h("section"),a=h("h5"),a.textContent=u,i=k(),o=h("h1"),o.textContent=_,w=k(),r=h("p"),n=q("I'm a "),c=h("span"),C=q(x[0]),P=k(),m=h("section"),m.innerHTML=b,I=k(),p=h("section"),p.innerHTML=L,this.h()},l(f){e=d(f,"DIV",{class:!0});var l=y(e);t=d(l,"SECTION",{class:!0});var v=y(t);a=d(v,"H5",{"data-svelte-h":!0}),E(a)!=="svelte-qcvo1h"&&(a.textContent=u),i=H(v),o=d(v,"H1",{class:!0,"data-svelte-h":!0}),E(o)!=="svelte-jnk2gn"&&(o.textContent=_),w=H(v),r=d(v,"P",{});var $=y(r);n=N($,"I'm a "),c=d($,"SPAN",{id:!0});var M=y(c);C=N(M,x[0]),M.forEach(T),$.forEach(T),v.forEach(T),P=H(l),m=d(l,"SECTION",{class:!0,"data-svelte-h":!0}),E(m)!=="svelte-wci1jo"&&(m.innerHTML=b),I=H(l),p=d(l,"SECTION",{class:!0,"data-svelte-h":!0}),E(p)!=="svelte-fks6do"&&(p.innerHTML=L),l.forEach(T),this.h()},h(){g(o,"class","svelte-nltpli"),g(c,"id","span-role"),g(t,"class","svelte-nltpli"),g(m,"class","svelte-nltpli"),g(p,"class","svelte-nltpli"),g(e,"class","home-wrapper svelte-nltpli")},m(f,l){D(f,e,l),s(e,t),s(t,a),s(t,i),s(t,o),s(t,w),s(t,r),s(r,n),s(r,c),s(c,C),s(e,P),s(e,m),s(e,I),s(e,p)},p(f,[l]){l&1&&A(C,f[0])},i:S,o:S,d(f){f&&T(e)}}}const G=2e3;function V(x,e,t){const a=["software developer","digital artist","snowboarder","pianist","gym enthusiast","plant dad"];let u=a.length-1,i="";function o(n){return t(0,i+=n[0]),n.length>1?new Promise(c=>setTimeout(()=>o(n.slice(1)).then(c),100)):Promise.resolve()}function _(){return t(0,i=i.slice(0,-1)),i.length>0?new Promise(n=>setTimeout(()=>_().then(n),50)):Promise.resolve()}function w(n){return _().then(()=>o(n)).then(()=>Promise.resolve())}function r(){u=(u+1)%a.length,w(a[u]).then(()=>setTimeout(r,G))}return r(),[i]}class J extends j{constructor(e){super(),O(this,e,V,B,R,{})}}export{J as component};
