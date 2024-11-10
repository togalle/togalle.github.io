import{s as O,d as R,u as x,g as B,e as D,o as H,n as A}from"../chunks/scheduler.DT5mwt88.js";import{S as N,i as U,e as _,s as G,z as F,c as p,d as f,f as M,a as E,l as i,h as g,g as b,p as J,n as K,A as Q,t as j,b as z,k as I,B as W}from"../chunks/index.B9W27tJk.js";const X=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function P(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}const Y=!0,re=Object.freeze(Object.defineProperty({__proto__:null,prerender:Y},Symbol.toStringTag,{value:"Module"})),{document:k}=X;function S(a,e,s){const t=a.slice();return t[4]=e[s],t}function Z(a){let e,s=a[4]+"",t;return{c(){e=_("a"),t=j(s),this.h()},l(o){e=p(o,"A",{href:!0,class:!0});var u=E(e);t=z(u,s),u.forEach(f),this.h()},h(){i(e,"href",["Home"].includes(a[4])?"/":`/${a[4].toLowerCase()}`),i(e,"class","svelte-10q9u67")},m(o,u){b(o,e,u),g(e,t)},p:A,d(o){o&&f(e)}}}function ee(a){let e,s="Portfolio";return{c(){e=_("a"),e.textContent=s,this.h()},l(t){e=p(t,"A",{href:!0,target:!0,class:!0,"data-svelte-h":!0}),I(e)!=="svelte-bm3a5i"&&(e.textContent=s),this.h()},h(){i(e,"href","https://github.com/togalle?tab=repositories"),i(e,"target","_blank"),i(e,"class","svelte-10q9u67")},m(t,o){b(t,e,o)},p:A,d(t){t&&f(e)}}}function te(a){let e,s="Gallery";return{c(){e=_("a"),e.textContent=s,this.h()},l(t){e=p(t,"A",{href:!0,target:!0,class:!0,"data-svelte-h":!0}),I(e)!=="svelte-1tahorh"&&(e.textContent=s),this.h()},h(){i(e,"href","https://tayku.carrd.co/#art"),i(e,"target","_blank"),i(e,"class","svelte-10q9u67")},m(t,o){b(t,e,o)},p:A,d(t){t&&f(e)}}}function le(a){let e,s=a[4]+"",t,o,u;return{c(){e=_("a"),t=j(s),this.h()},l(l){e=p(l,"A",{href:!0,class:!0});var r=E(e);t=z(r,s),r.forEach(f),this.h()},h(){i(e,"href","/"),i(e,"class","svelte-10q9u67")},m(l,r){b(l,e,r),g(e,t),o||(u=W(e,"click",a[1]),o=!0)},p:A,d(l){l&&f(e),o=!1,u()}}}function V(a){let e,s;function t(l,r){return l[4]==="Resume"?le:l[4]==="Gallery"?te:l[4]==="Portfolio"?ee:Z}let u=t(a)(a);return{c(){e=_("li"),u.c(),s=G()},l(l){e=p(l,"LI",{});var r=E(e);u.l(r),s=M(r),r.forEach(f)},m(l,r){b(l,e,r),u.m(e,null),g(e,s)},p(l,r){u.p(l,r)},d(l){l&&f(e),u.d()}}}function ne(a){let e,s,t,o,u,l,r,v,C,w,y=P(a[0]),h=[];for(let n=0;n<y.length;n+=1)h[n]=V(S(a,y,n));const q=a[3].default,d=R(q,a,a[2],null);return{c(){e=_("meta"),s=_("meta"),t=_("meta"),o=_("meta"),u=G(),l=_("div"),r=_("nav"),v=_("ul");for(let n=0;n<h.length;n+=1)h[n].c();C=G(),d&&d.c(),this.h()},l(n){const m=F("svelte-ao31rt",k.head);e=p(m,"META",{name:!0,content:!0}),s=p(m,"META",{name:!0,content:!0}),t=p(m,"META",{name:!0,content:!0}),o=p(m,"META",{"http-equiv":!0,content:!0}),m.forEach(f),u=M(n),l=p(n,"DIV",{class:!0});var c=E(l);r=p(c,"NAV",{class:!0});var T=E(r);v=p(T,"UL",{class:!0});var L=E(v);for(let $=0;$<h.length;$+=1)h[$].l(L);L.forEach(f),T.forEach(f),C=M(c),d&&d.l(c),c.forEach(f),this.h()},h(){k.title="Tomas Galle",i(e,"name","description"),i(e,"content","The personal portfolio website of Tomas Galle, containing info about him, his experiences, his interests, and his contact information."),i(s,"name","keywords"),i(s,"content","Tomas Galle, portfolio, website, personal, blog, resume, contact, software developer, software engineer, digital art"),i(t,"name","author"),i(t,"content","Tomas Galle"),i(o,"http-equiv","Content-Language"),i(o,"content","en"),i(v,"class","navigator svelte-10q9u67"),i(r,"class","svelte-10q9u67"),i(l,"class","body-wrapper")},m(n,m){g(k.head,e),g(k.head,s),g(k.head,t),g(k.head,o),b(n,u,m),b(n,l,m),g(l,r),g(r,v);for(let c=0;c<h.length;c+=1)h[c]&&h[c].m(v,null);g(l,C),d&&d.m(l,null),w=!0},p(n,[m]){if(m&3){y=P(n[0]);let c;for(c=0;c<y.length;c+=1){const T=S(n,y,c);h[c]?h[c].p(T,m):(h[c]=V(T),h[c].c(),h[c].m(v,null))}for(;c<h.length;c+=1)h[c].d(1);h.length=y.length}d&&d.p&&(!w||m&4)&&x(d,q,n,n[2],w?D(q,n[2],m,null):B(n[2]),null)},i(n){w||(J(d,n),w=!0)},o(n){K(d,n),w=!1},d(n){n&&(f(u),f(l)),f(e),f(s),f(t),f(o),Q(h,n),d&&d.d(n)}}}function ae(a,e,s){let{$$slots:t={},$$scope:o}=e;const u=["Resume","Portfolio","Gallery"];H(()=>{document.documentElement.lang="en"});const l=()=>{window.open("/CV-eng.pdf","_blank")};return a.$$set=r=>{"$$scope"in r&&s(2,o=r.$$scope)},[u,l,o,t]}class ce extends N{constructor(e){super(),U(this,e,ae,ne,O,{})}}export{ce as component,re as universal};