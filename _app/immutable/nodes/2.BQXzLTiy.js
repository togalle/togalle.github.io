import{s as J,n as O,o as ee}from"../chunks/scheduler.Bmg8oFKD.js";import{S as Q,i as X,e as o,t as Y,c as r,a as p,b as Z,d,l as v,g as P,h as i,j as te,s as k,v as se,k as y,f as _,w as le,x as ne,p as ie,n as ae,y as oe}from"../chunks/index.C-lY3XIm.js";function re(m){let e,l,s;return{c(){e=o("span"),l=Y(m[0]),s=o("span"),this.h()},l(t){e=r(t,"SPAN",{id:!0,class:!0});var n=p(e);l=Z(n,m[0]),n.forEach(d),s=r(t,"SPAN",{class:!0}),p(s).forEach(d),this.h()},h(){v(e,"id","span-role"),v(e,"class","svelte-1x9jc16"),v(s,"class","blinking-cursor")},m(t,n){P(t,e,n),i(e,l),P(t,s,n)},p(t,[n]){n&1&&te(l,t[0])},i:O,o:O,d(t){t&&(d(e),d(s))}}}const ce=2e3;function ve(m,e,l){let{roles:s=["software developer 💻","digital artist 🖌️","snowboarder 🏂","pianist 🎵","gym enthusiast 💪","plant dad 🌱","baker 🍞","gamer 🎮","animation lover 🎥"]}=e,t=s.length-1,n="";function T(c){return l(0,n+=c[0]),c.length>1?new Promise(f=>setTimeout(()=>T(c.slice(1)).then(f),100)):Promise.resolve()}function C(){return l(0,n=n.slice(0,-1)),n.length>0?new Promise(c=>setTimeout(()=>C().then(c),50)):Promise.resolve()}function u(c){return C().then(()=>T(c)).then(()=>Promise.resolve())}function L(){t=(t+1)%s.length,u(s[t]).then(()=>setTimeout(L,ce))}return m.$$set=c=>{"roles"in c&&l(1,s=c.roles)},L(),[n,s]}class de extends Q{constructor(e){super(),X(this,e,ve,re,J,{roles:1})}}function U(m){let e,l="↓";return{c(){e=o("div"),e.textContent=l,this.h()},l(s){e=r(s,"DIV",{class:!0,"data-svelte-h":!0}),y(e)!=="svelte-1uriky3"&&(e.textContent=l),this.h()},h(){v(e,"class","scroll-indicator svelte-1jlztel")},m(s,t){P(s,e,t)},d(s){s&&d(e)}}}function he(m){let e,l,s,t,n,T="Hi! My name is",C,u,L="Tomas Galle",c,f,S,M,w,V,j,R=`I&#39;m a computer science student at Ghent University with a passion for minimal,
					sustainable, and effective software. <span class="mobile-invisible svelte-1jlztel">As you can see,
					</span>I&#39;m not afraid to get my hands dirty<span class="mobile-invisible svelte-1jlztel">—literally</span>! Feel free to reach out if you&#39;d like to connect.`,A,I,G='<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Icon" class="skill-icon svelte-1jlztel" title="React"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" alt="Svelte Icon" class="skill-icon svelte-1jlztel" title="Svelte"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js Icon" class="skill-icon svelte-1jlztel" title="Node.js"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg" alt="Docker Icon" class="skill-icon svelte-1jlztel" title="Docker"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg" alt="Kubernetes Icon" class="skill-icon svelte-1jlztel" title="Kubernetes"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS Icon" class="skill-icon svelte-1jlztel" title="AWS"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="Tensorflow Icon" class="skill-icon svelte-1jlztel" title="Tensorflow"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux Icon" class="skill-icon svelte-1jlztel" title="Linux"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" alt="Bash Icon" class="skill-icon svelte-1jlztel" title="Bash"/>',D,b,K='<img src="/images/viking.webp" alt="Portrait of Tomas Galle" class="squircle svelte-1jlztel" loading="lazy"/>',q,B,z,W=`<section class="half svelte-1jlztel"><h2>Testimonial</h2> <p>&quot;Tomas is very eager to learn and critically assess his learning. He aims to complete his
				tasks successfully, always meeting the expectations set for him, and often exceeding them.
				He continues to strive for self-development and is not afraid to seek help and insights from
				colleagues in the process. In addition to being a good engineer, Tomas is also a great team
				player and possesses a good set of soft skills — where he consistently demonstrates a
				willingness to keep growing.&quot;</p> <div class="author">Manu De Buck (co-founder we are)</div></section> <section class="half svelte-1jlztel"><h2>Contact info</h2> <a href="https://www.linkedin.com/in/tomas-galle-6b4baa164" class="button svelte-1jlztel"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"></path></svg> LinkedIn</a> <a href="mailto:tomasgalle2002@gmail.com" target="_blank" class="button svelte-1jlztel"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"></path></svg> Email</a> <a href="https://t.me/taykuuu" target="_blank" class="button svelte-1jlztel"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"></path></svg> Telegram</a></section>`,$;w=new de({});let a=!m[0]&&U();return{c(){e=o("div"),l=o("section"),s=o("div"),t=o("div"),n=o("span"),n.textContent=T,C=k(),u=o("h1"),u.textContent=L,c=k(),f=o("p"),S=Y("I'm a "),M=o("b"),se(w.$$.fragment),V=k(),j=o("p"),j.innerHTML=R,A=k(),I=o("p"),I.innerHTML=G,D=k(),b=o("div"),b.innerHTML=K,q=k(),a&&a.c(),B=k(),z=o("div"),z.innerHTML=W,this.h()},l(h){e=r(h,"DIV",{class:!0});var x=p(e);l=r(x,"SECTION",{class:!0});var H=p(l);s=r(H,"DIV",{class:!0});var E=p(s);t=r(E,"DIV",{class:!0});var g=p(t);n=r(g,"SPAN",{class:!0,"data-svelte-h":!0}),y(n)!=="svelte-7ypr5h"&&(n.textContent=T),C=_(g),u=r(g,"H1",{class:!0,"data-svelte-h":!0}),y(u)!=="svelte-1yo51xg"&&(u.textContent=L),c=_(g),f=r(g,"P",{});var N=p(f);S=Z(N,"I'm a "),M=r(N,"B",{});var F=p(M);le(w.$$.fragment,F),F.forEach(d),N.forEach(d),V=_(g),j=r(g,"P",{class:!0,"data-svelte-h":!0}),y(j)!=="svelte-1sbhaw3"&&(j.innerHTML=R),A=_(g),I=r(g,"P",{"data-svelte-h":!0}),y(I)!=="svelte-gg01kv"&&(I.innerHTML=G),g.forEach(d),D=_(E),b=r(E,"DIV",{class:!0,"data-svelte-h":!0}),y(b)!=="svelte-1w6vypl"&&(b.innerHTML=K),E.forEach(d),q=_(H),a&&a.l(H),H.forEach(d),B=_(x),z=r(x,"DIV",{class:!0,"data-svelte-h":!0}),y(z)!=="svelte-6pfo51"&&(z.innerHTML=W),x.forEach(d),this.h()},h(){v(n,"class","small-text svelte-1jlztel"),v(u,"class","highlight-name svelte-1jlztel"),v(j,"class","bio small-text svelte-1jlztel"),v(t,"class","center content svelte-1jlztel"),v(b,"class","image-container svelte-1jlztel"),v(s,"class","main-card svelte-1jlztel"),v(l,"class","svelte-1jlztel"),v(z,"class","flex svelte-1jlztel"),v(e,"class","home-wrapper svelte-1jlztel")},m(h,x){P(h,e,x),i(e,l),i(l,s),i(s,t),i(t,n),i(t,C),i(t,u),i(t,c),i(t,f),i(f,S),i(f,M),ne(w,M,null),i(t,V),i(t,j),i(t,A),i(t,I),i(s,D),i(s,b),i(l,q),a&&a.m(l,null),i(e,B),i(e,z),$=!0},p(h,[x]){h[0]?a&&(a.d(1),a=null):a||(a=U(),a.c(),a.m(l,null))},i(h){$||(ie(w.$$.fragment,h),$=!0)},o(h){ae(w.$$.fragment,h),$=!1},d(h){h&&d(e),oe(w),a&&a.d()}}}function me(m,e,l){let s=!1;const t=()=>{l(0,s=!0),window.removeEventListener("scroll",t)};return ee(()=>{window.addEventListener("scroll",t)}),[s]}class fe extends Q{constructor(e){super(),X(this,e,me,he,J,{})}}export{fe as component};
