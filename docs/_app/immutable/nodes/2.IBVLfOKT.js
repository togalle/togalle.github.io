import{s as z,n as L}from"../chunks/scheduler.S4wXxuDW.js";import{S as R,i as V,e as h,s as T,t as M,c as d,b,g as C,h as H,f as q,d as k,l as g,a as S,j as n,k as A}from"../chunks/index.hd8YESnd.js";function B(w){let e,t,a,u="Hi! My name is",o,i,_="Tomas Galle",j,r,s,c,x,P,m,$=`<h3 class="svelte-5ckhjp">Testimonials</h3> <p>&quot;Tomas is enorm leergierig én leerkritisch. Hij streeft ernaar om zijn taken tot een goed
			einde te brengen. Dit doet hij steeds volgens de verwachtingen die hem werden opgelegd, al
			overstijgt hij deze vaak. Hij blijft streven naar zelfontwikkeling, en is niet bang om daarbij
			hulp en inzichten te vragen bij collega&#39;s. Tomas is naast een goede ingenieur ook een goede
			team-player, en heeft een goede portie soft-skills, —waar hij toont steeds in te willen
			blijven groeien.&quot;</p> <div class="author">Manu De Buck (co-founder we are)</div>`,y,v,D='<h3 class="svelte-5ckhjp">Contact info</h3> <a href="https://www.linkedin.com/in/tomas-galle-6b4baa164">LinkedIn</a> <a href="mailto:tomasgalle2002@gmail.com" target="_blank">Email</a> <a href="tel:+32 479 81 96 29">Phone</a>';return{c(){e=h("div"),t=h("div"),a=h("h5"),a.textContent=u,o=T(),i=h("h1"),i.textContent=_,j=T(),r=h("p"),s=M("I'm a "),c=h("span"),x=M(w[0]),P=T(),m=h("div"),m.innerHTML=$,y=T(),v=h("div"),v.innerHTML=D,this.h()},l(p){e=d(p,"DIV",{class:!0});var l=b(e);t=d(l,"DIV",{class:!0});var f=b(t);a=d(f,"H5",{"data-svelte-h":!0}),C(a)!=="svelte-qcvo1h"&&(a.textContent=u),o=H(f),i=d(f,"H1",{class:!0,"data-svelte-h":!0}),C(i)!=="svelte-jnk2gn"&&(i.textContent=_),j=H(f),r=d(f,"P",{});var I=b(r);s=q(I,"I'm a "),c=d(I,"SPAN",{id:!0});var E=b(c);x=q(E,w[0]),E.forEach(k),I.forEach(k),f.forEach(k),P=H(l),m=d(l,"DIV",{class:!0,"data-svelte-h":!0}),C(m)!=="svelte-1urhgx9"&&(m.innerHTML=$),y=H(l),v=d(l,"DIV",{class:!0,"data-svelte-h":!0}),C(v)!=="svelte-1fvyqp9"&&(v.innerHTML=D),l.forEach(k),this.h()},h(){g(i,"class","svelte-5ckhjp"),g(c,"id","span-role"),g(t,"class","introduction"),g(m,"class","testimonials"),g(v,"class","contact"),g(e,"class","home-wrapper svelte-5ckhjp")},m(p,l){S(p,e,l),n(e,t),n(t,a),n(t,o),n(t,i),n(t,j),n(t,r),n(r,s),n(r,c),n(c,x),n(e,P),n(e,m),n(e,y),n(e,v)},p(p,[l]){l&1&&A(x,p[0])},i:L,o:L,d(p){p&&k(e)}}}const G=2e3;function N(w,e,t){const a=["software developer","digital artist","snowboarder","pianist","gym enthusiast","plant dad"];let u=a.length-1,o="";function i(s){return t(0,o+=s[0]),s.length>1?new Promise(c=>setTimeout(()=>i(s.slice(1)).then(c),100)):Promise.resolve()}function _(){return t(0,o=o.slice(0,-1)),o.length>0?new Promise(s=>setTimeout(()=>_().then(s),50)):Promise.resolve()}function j(s){return _().then(()=>i(s)).then(()=>Promise.resolve())}function r(){u=(u+1)%a.length,j(a[u]).then(()=>setTimeout(r,G))}return r(),[o]}class K extends R{constructor(e){super(),V(this,e,N,B,z,{})}}export{K as component};
