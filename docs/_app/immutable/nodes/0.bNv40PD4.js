import{s as y,d as C,u as G,g as H,e as I,n as M}from"../chunks/scheduler.S4wXxuDW.js";import{S as O,i as P,e as v,s as A,z as V,c as g,d,h as T,b as $,l as _,j as p,a as q,p as B,n as D,A as N,t as R,f as U}from"../chunks/index.hd8YESnd.js";function S(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}const F=!0,X=Object.freeze(Object.defineProperty({__proto__:null,prerender:F},Symbol.toStringTag,{value:"Module"}));function j(s,l,o){const n=s.slice();return n[3]=l[o],n}function w(s){let l,o,n=s[3]+"",c,i;return{c(){l=v("li"),o=v("a"),c=R(n),i=A(),this.h()},l(u){l=g(u,"LI",{});var f=$(l);o=g(f,"A",{href:!0});var m=$(o);c=U(m,n),m.forEach(d),i=T(f),f.forEach(d),this.h()},h(){_(o,"href",s[3]==="Home"?"/":`/${s[3].toLowerCase()}`)},m(u,f){q(u,l,f),p(l,o),p(o,c),p(l,i)},p:M,d(u){u&&d(l)}}}function J(s){let l,o,n,c,i,u,f,m=S(s[0]),a=[];for(let e=0;e<m.length;e+=1)a[e]=w(j(s,m,e));const E=s[2].default,r=C(E,s,s[1],null);return{c(){l=v("meta"),o=A(),n=v("div"),c=v("nav"),i=v("ul");for(let e=0;e<a.length;e+=1)a[e].c();u=A(),r&&r.c(),this.h()},l(e){const h=V("svelte-1uehz4n",document.head);l=g(h,"META",{name:!0,content:!0}),h.forEach(d),o=T(e),n=g(e,"DIV",{class:!0});var t=$(n);c=g(t,"NAV",{class:!0});var b=$(c);i=g(b,"UL",{class:!0});var L=$(i);for(let z=0;z<a.length;z+=1)a[z].l(L);L.forEach(d),b.forEach(d),u=T(t),r&&r.l(t),t.forEach(d),this.h()},h(){document.title="Tomas Galle",_(l,"name","description"),_(l,"content","The personal portfolio website of Tomas Galle, containing info about him, his experiences, his interests, and his contact information."),_(i,"class","navigator svelte-eqz510"),_(c,"class","svelte-eqz510"),_(n,"class","body-wrapper svelte-eqz510")},m(e,h){p(document.head,l),q(e,o,h),q(e,n,h),p(n,c),p(c,i);for(let t=0;t<a.length;t+=1)a[t]&&a[t].m(i,null);p(n,u),r&&r.m(n,null),f=!0},p(e,[h]){if(h&1){m=S(e[0]);let t;for(t=0;t<m.length;t+=1){const b=j(e,m,t);a[t]?a[t].p(b,h):(a[t]=w(b),a[t].c(),a[t].m(i,null))}for(;t<a.length;t+=1)a[t].d(1);a.length=m.length}r&&r.p&&(!f||h&2)&&G(r,E,e,e[1],f?I(E,e[1],h,null):H(e[1]),null)},i(e){f||(B(r,e),f=!0)},o(e){D(r,e),f=!1},d(e){e&&(d(o),d(n)),d(l),N(a,e),r&&r.d(e)}}}function K(s,l,o){let{$$slots:n={},$$scope:c}=l;const i=["Home","Resume","Portfolio","Blog"];return s.$$set=u=>{"$$scope"in u&&o(1,c=u.$$scope)},[i,c,n]}class Y extends O{constructor(l){super(),P(this,l,K,J,y,{})}}export{Y as component,X as universal};