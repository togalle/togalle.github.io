import{s as R,d as B,u as D,g as H,e as N,o as U,n as x}from"../chunks/scheduler.S4wXxuDW.js";import{S as Y,i as F,e as p,s as M,z as J,c as _,k as S,d as f,f as P,a as k,l as u,h as g,g as w,p as K,n as Q,A as W,t as I,b as O,B as X}from"../chunks/index.mPdLo2xU.js";const Z=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function q(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}const ee=!0,ce=Object.freeze(Object.defineProperty({__proto__:null,prerender:ee},Symbol.toStringTag,{value:"Module"})),{document:y}=Z;function V(n,e,a){const t=n.slice();return t[4]=e[a],t}function te(n){let e,a=n[4]+"",t;return{c(){e=p("a"),t=I(a),this.h()},l(s){e=_(s,"A",{href:!0,class:!0});var o=k(e);t=O(o,a),o.forEach(f),this.h()},h(){u(e,"href",["Home"].includes(n[4])?"/":`/${n[4].toLowerCase()}`),u(e,"class","svelte-146dxa3")},m(s,o){w(s,e,o),g(e,t)},p:x,d(s){s&&f(e)}}}function le(n){let e,a="Portfolio";return{c(){e=p("a"),e.textContent=a,this.h()},l(t){e=_(t,"A",{href:!0,target:!0,class:!0,"data-svelte-h":!0}),S(e)!=="svelte-bm3a5i"&&(e.textContent=a),this.h()},h(){u(e,"href","https://github.com/togalle?tab=repositories"),u(e,"target","_blank"),u(e,"class","svelte-146dxa3")},m(t,s){w(t,e,s)},p:x,d(t){t&&f(e)}}}function ne(n){let e,a="Gallery";return{c(){e=p("a"),e.textContent=a,this.h()},l(t){e=_(t,"A",{href:!0,target:!0,class:!0,"data-svelte-h":!0}),S(e)!=="svelte-1tahorh"&&(e.textContent=a),this.h()},h(){u(e,"href","https://tayku.carrd.co/#art"),u(e,"target","_blank"),u(e,"class","svelte-146dxa3")},m(t,s){w(t,e,s)},p:x,d(t){t&&f(e)}}}function ae(n){let e,a=n[4]+"",t,s,o;return{c(){e=p("a"),t=I(a),this.h()},l(r){e=_(r,"A",{href:!0,class:!0});var c=k(e);t=O(c,a),c.forEach(f),this.h()},h(){u(e,"href","/"),u(e,"class","svelte-146dxa3")},m(r,c){w(r,e,c),g(e,t),s||(o=X(e,"click",n[1]),s=!0)},p:x,d(r){r&&f(e),s=!1,o()}}}function z(n){let e,a;function t(r,c){return r[4]==="Resume"?ae:r[4]==="Gallery"?ne:r[4]==="Portfolio"?le:te}let o=t(n)(n);return{c(){e=p("li"),o.c(),a=M()},l(r){e=_(r,"LI",{});var c=k(e);o.l(c),a=P(c),c.forEach(f)},m(r,c){w(r,e,c),o.m(e,null),g(e,a)},p(r,c){o.p(r,c)},d(r){r&&f(e),o.d()}}}function se(n){let e,a,t,s,o,r="@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');",c,v,C,b,$,E,T=q(n[0]),h=[];for(let l=0;l<T.length;l+=1)h[l]=z(V(n,T,l));const G=n[3].default,m=B(G,n,n[2],null);return{c(){e=p("meta"),a=p("meta"),t=p("meta"),s=p("meta"),o=p("style"),o.textContent=r,c=M(),v=p("div"),C=p("nav"),b=p("ul");for(let l=0;l<h.length;l+=1)h[l].c();$=M(),m&&m.c(),this.h()},l(l){const d=J("svelte-1d5dsdr",y.head);e=_(d,"META",{name:!0,content:!0}),a=_(d,"META",{name:!0,content:!0}),t=_(d,"META",{name:!0,content:!0}),s=_(d,"META",{"http-equiv":!0,content:!0}),o=_(d,"STYLE",{"data-svelte-h":!0}),S(o)!=="svelte-rt1j3i"&&(o.textContent=r),d.forEach(f),c=P(l),v=_(l,"DIV",{class:!0});var i=k(v);C=_(i,"NAV",{class:!0});var A=k(C);b=_(A,"UL",{class:!0});var j=k(b);for(let L=0;L<h.length;L+=1)h[L].l(j);j.forEach(f),A.forEach(f),$=P(i),m&&m.l(i),i.forEach(f),this.h()},h(){y.title="Tomas Galle",u(e,"name","description"),u(e,"content","The personal portfolio website of Tomas Galle, containing info about him, his experiences, his interests, and his contact information."),u(a,"name","keywords"),u(a,"content","Tomas Galle, portfolio, website, personal, blog, resume, contact, software developer, software engineer, digital art"),u(t,"name","author"),u(t,"content","Tomas Galle"),u(s,"http-equiv","Content-Language"),u(s,"content","en"),u(b,"class","navigator svelte-146dxa3"),u(C,"class","svelte-146dxa3"),u(v,"class","body-wrapper")},m(l,d){g(y.head,e),g(y.head,a),g(y.head,t),g(y.head,s),g(y.head,o),w(l,c,d),w(l,v,d),g(v,C),g(C,b);for(let i=0;i<h.length;i+=1)h[i]&&h[i].m(b,null);g(v,$),m&&m.m(v,null),E=!0},p(l,[d]){if(d&3){T=q(l[0]);let i;for(i=0;i<T.length;i+=1){const A=V(l,T,i);h[i]?h[i].p(A,d):(h[i]=z(A),h[i].c(),h[i].m(b,null))}for(;i<h.length;i+=1)h[i].d(1);h.length=T.length}m&&m.p&&(!E||d&4)&&D(m,G,l,l[2],E?N(G,l[2],d,null):H(l[2]),null)},i(l){E||(K(m,l),E=!0)},o(l){Q(m,l),E=!1},d(l){l&&(f(c),f(v)),f(e),f(a),f(t),f(s),f(o),W(h,l),m&&m.d(l)}}}function oe(n,e,a){let{$$slots:t={},$$scope:s}=e;const o=["Resume","Portfolio","Gallery"];U(()=>{document.documentElement.lang="en"});const r=()=>{window.open("/CV-eng.pdf","_blank")};return n.$$set=c=>{"$$scope"in c&&a(2,s=c.$$scope)},[o,r,s,t]}class ue extends Y{constructor(e){super(),F(this,e,oe,se,R,{})}}export{ue as component,ce as universal};
