import{s as D,n as N,o as V}from"../chunks/scheduler.S4wXxuDW.js";import{S as O,i as j,e as m,t as A,c as u,a as b,b as B,d as v,l as _,g as I,h as r,j as z,s as C,m as G,k as $,f as T,n as F,o as J,p as K,q as Q,r as U}from"../chunks/index.E_QHKjXr.js";function W(c){let e,s,t;return{c(){e=m("span"),s=A(c[0]),t=m("span"),this.h()},l(n){e=u(n,"SPAN",{id:!0});var a=b(e);s=B(a,c[0]),a.forEach(v),t=u(n,"SPAN",{class:!0}),b(t).forEach(v),this.h()},h(){_(e,"id","span-role"),_(t,"class","blinking-cursor")},m(n,a){I(n,e,a),r(e,s),I(n,t,a)},p(n,[a]){a&1&&z(s,n[0])},i:N,o:N,d(n){n&&(v(e),v(t))}}}const X=2e3;function Y(c,e,s){let{roles:t=["software developer 💻","digital artist 🖌️","snowboarder 🏂","pianist 🎵","gym enthusiast 💪","plant dad 🌱","baker 🍞","gamer 🎮","animation lover 🎥"]}=e,n=t.length-1,a="";function f(o){return s(0,a+=o[0]),o.length>1?new Promise(d=>setTimeout(()=>f(o.slice(1)).then(d),100)):Promise.resolve()}function k(){return s(0,a=a.slice(0,-1)),a.length>0?new Promise(o=>setTimeout(()=>k().then(o),50)):Promise.resolve()}function y(o){return k().then(()=>f(o)).then(()=>Promise.resolve())}function h(){n=(n+1)%t.length,y(t[n]).then(()=>setTimeout(h,X))}return c.$$set=o=>{"roles"in o&&s(1,t=o.roles)},h(),[a,t]}class Z extends O{constructor(e){super(),j(this,e,Y,W,D,{roles:1})}}function R(c){let e,s="↓";return{c(){e=m("div"),e.textContent=s,this.h()},l(t){e=u(t,"DIV",{class:!0,"data-svelte-h":!0}),$(e)!=="svelte-1uriky3"&&(e.textContent=s),this.h()},h(){_(e,"class","scroll-indicator svelte-ral26f")},m(t,n){I(t,e,n)},d(t){t&&v(e)}}}function ee(c){let e,s,t,n="Hi! My name is",a,f,k="Tomas Galle",y,h,o,d,L,P,w,M=`<h2>Testimonials</h2> <p>&quot;Tomas is very eager to learn and critically assess his learning. He aims to complete his
			tasks successfully, always meeting the expectations set for him, and often exceeding them. He
			continues to strive for self-development and is not afraid to seek help and insights from
			colleagues in the process. In addition to being a good engineer, Tomas is also a great team
			player and possesses a good set of soft skills — where he consistently demonstrates a
			willingness to keep growing.&quot;</p> <div class="author">Manu De Buck (co-founder we are)</div>`,H,x,q='<h2>Contact info</h2> <a href="https://www.linkedin.com/in/tomas-galle-6b4baa164">LinkedIn</a> <a href="mailto:tomasgalle2002@gmail.com" target="_blank">Email</a>',E;d=new Z({});let l=!c[0]&&R();return{c(){e=m("div"),s=m("section"),t=m("b"),t.textContent=n,a=C(),f=m("h1"),f.textContent=k,y=C(),h=m("p"),o=A("I'm a "),G(d.$$.fragment),L=C(),l&&l.c(),P=C(),w=m("section"),w.innerHTML=M,H=C(),x=m("section"),x.innerHTML=q,this.h()},l(i){e=u(i,"DIV",{class:!0});var p=b(e);s=u(p,"SECTION",{class:!0});var g=b(s);t=u(g,"B",{"data-svelte-h":!0}),$(t)!=="svelte-3pq1xz"&&(t.textContent=n),a=T(g),f=u(g,"H1",{class:!0,"data-svelte-h":!0}),$(f)!=="svelte-jnk2gn"&&(f.textContent=k),y=T(g),h=u(g,"P",{});var S=b(h);o=B(S,"I'm a "),F(d.$$.fragment,S),S.forEach(v),L=T(g),l&&l.l(g),g.forEach(v),P=T(p),w=u(p,"SECTION",{class:!0,"data-svelte-h":!0}),$(w)!=="svelte-utfrri"&&(w.innerHTML=M),H=T(p),x=u(p,"SECTION",{class:!0,"data-svelte-h":!0}),$(x)!=="svelte-pkperh"&&(x.innerHTML=q),p.forEach(v),this.h()},h(){_(f,"class","svelte-ral26f"),_(s,"class","svelte-ral26f"),_(w,"class","svelte-ral26f"),_(x,"class","svelte-ral26f"),_(e,"class","home-wrapper svelte-ral26f")},m(i,p){I(i,e,p),r(e,s),r(s,t),r(s,a),r(s,f),r(s,y),r(s,h),r(h,o),J(d,h,null),r(s,L),l&&l.m(s,null),r(e,P),r(e,w),r(e,H),r(e,x),E=!0},p(i,[p]){i[0]?l&&(l.d(1),l=null):l||(l=R(),l.c(),l.m(s,null))},i(i){E||(K(d.$$.fragment,i),E=!0)},o(i){Q(d.$$.fragment,i),E=!1},d(i){i&&v(e),U(d),l&&l.d()}}}function te(c,e,s){let t=!1;const n=()=>{s(0,t=!0),window.removeEventListener("scroll",n)};return V(()=>{window.addEventListener("scroll",n)}),[t]}class ae extends O{constructor(e){super(),j(this,e,te,ee,D,{})}}export{ae as component};
