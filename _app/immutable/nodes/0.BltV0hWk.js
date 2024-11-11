import{s as I,d as O,u as R,g as B,e as D,o as H,n as A}from"../chunks/scheduler.Bmg8oFKD.js";import{S as N,i as U,e as _,s as G,z as F,c as p,d as f,f as M,a as E,l as i,h as b,g as v,p as J,n as K,A as Q,t as V,b as j,k as z,B as W}from"../chunks/index.C-lY3XIm.js";const X=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function P(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}const Y=!0,re=Object.freeze(Object.defineProperty({__proto__:null,prerender:Y},Symbol.toStringTag,{value:"Module"})),{document:k}=X;function S(a,e,s){const t=a.slice();return t[4]=e[s],t}function Z(a){let e,s=a[4]+"",t;return{c(){e=_("a"),t=V(s),this.h()},l(o){e=p(o,"A",{href:!0,class:!0});var u=E(e);t=j(u,s),u.forEach(f),this.h()},h(){i(e,"href",["Home"].includes(a[4])?"/":`/${a[4].toLowerCase()}`),i(e,"class","svelte-1bxayd6")},m(o,u){v(o,e,u),b(e,t)},p:A,d(o){o&&f(e)}}}function ee(a){let e,s="Portfolio";return{c(){e=_("a"),e.textContent=s,this.h()},l(t){e=p(t,"A",{href:!0,target:!0,class:!0,"data-svelte-h":!0}),z(e)!=="svelte-bm3a5i"&&(e.textContent=s),this.h()},h(){i(e,"href","https://github.com/togalle?tab=repositories"),i(e,"target","_blank"),i(e,"class","svelte-1bxayd6")},m(t,o){v(t,e,o)},p:A,d(t){t&&f(e)}}}function te(a){let e,s="Gallery";return{c(){e=_("a"),e.textContent=s,this.h()},l(t){e=p(t,"A",{href:!0,target:!0,class:!0,"data-svelte-h":!0}),z(e)!=="svelte-1tahorh"&&(e.textContent=s),this.h()},h(){i(e,"href","https://tayku.carrd.co/#art"),i(e,"target","_blank"),i(e,"class","svelte-1bxayd6")},m(t,o){v(t,e,o)},p:A,d(t){t&&f(e)}}}function le(a){let e,s=a[4]+"",t,o,u;return{c(){e=_("a"),t=V(s),this.h()},l(l){e=p(l,"A",{href:!0,class:!0});var r=E(e);t=j(r,s),r.forEach(f),this.h()},h(){i(e,"href","/"),i(e,"class","svelte-1bxayd6")},m(l,r){v(l,e,r),b(e,t),o||(u=W(e,"click",a[1]),o=!0)},p:A,d(l){l&&f(e),o=!1,u()}}}function q(a){let e,s;function t(l,r){return l[4]==="Resume"?le:l[4]==="Gallery"?te:l[4]==="Portfolio"?ee:Z}let u=t(a)(a);return{c(){e=_("li"),u.c(),s=G()},l(l){e=p(l,"LI",{});var r=E(e);u.l(r),s=M(r),r.forEach(f)},m(l,r){v(l,e,r),u.m(e,null),b(e,s)},p(l,r){u.p(l,r)},d(l){l&&f(e),u.d()}}}function ne(a){let e,s,t,o,u,l,r,g,C,y,w=P(a[0]),h=[];for(let n=0;n<w.length;n+=1)h[n]=q(S(a,w,n));const $=a[3].default,d=O($,a,a[2],null);return{c(){e=_("meta"),s=_("meta"),t=_("meta"),o=_("meta"),u=G(),l=_("div"),r=_("nav"),g=_("ul");for(let n=0;n<h.length;n+=1)h[n].c();C=G(),d&&d.c(),this.h()},l(n){const m=F("svelte-ao31rt",k.head);e=p(m,"META",{name:!0,content:!0}),s=p(m,"META",{name:!0,content:!0}),t=p(m,"META",{name:!0,content:!0}),o=p(m,"META",{"http-equiv":!0,content:!0}),m.forEach(f),u=M(n),l=p(n,"DIV",{class:!0});var c=E(l);r=p(c,"NAV",{class:!0});var T=E(r);g=p(T,"UL",{class:!0});var L=E(g);for(let x=0;x<h.length;x+=1)h[x].l(L);L.forEach(f),T.forEach(f),C=M(c),d&&d.l(c),c.forEach(f),this.h()},h(){k.title="Tomas Galle",i(e,"name","description"),i(e,"content","The personal portfolio website of Tomas Galle, containing info about him, his experiences, his interests, and his contact information."),i(s,"name","keywords"),i(s,"content","Tomas Galle, portfolio, website, personal, blog, resume, contact, software developer, software engineer, digital art"),i(t,"name","author"),i(t,"content","Tomas Galle"),i(o,"http-equiv","Content-Language"),i(o,"content","en"),i(g,"class","navigator svelte-1bxayd6"),i(r,"class","svelte-1bxayd6"),i(l,"class","body-wrapper")},m(n,m){b(k.head,e),b(k.head,s),b(k.head,t),b(k.head,o),v(n,u,m),v(n,l,m),b(l,r),b(r,g);for(let c=0;c<h.length;c+=1)h[c]&&h[c].m(g,null);b(l,C),d&&d.m(l,null),y=!0},p(n,[m]){if(m&3){w=P(n[0]);let c;for(c=0;c<w.length;c+=1){const T=S(n,w,c);h[c]?h[c].p(T,m):(h[c]=q(T),h[c].c(),h[c].m(g,null))}for(;c<h.length;c+=1)h[c].d(1);h.length=w.length}d&&d.p&&(!y||m&4)&&R(d,$,n,n[2],y?D($,n[2],m,null):B(n[2]),null)},i(n){y||(J(d,n),y=!0)},o(n){K(d,n),y=!1},d(n){n&&(f(u),f(l)),f(e),f(s),f(t),f(o),Q(h,n),d&&d.d(n)}}}function ae(a,e,s){let{$$slots:t={},$$scope:o}=e;const u=["Resume","Portfolio","Gallery"];H(()=>{document.documentElement.lang="en"});const l=()=>{window.open("/CV-eng.pdf","_blank")};return a.$$set=r=>{"$$scope"in r&&s(2,o=r.$$scope)},[u,l,o,t]}class ce extends N{constructor(e){super(),U(this,e,ae,ne,I,{})}}export{ce as component,re as universal};