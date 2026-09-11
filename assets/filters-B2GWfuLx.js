function e(e,t,n=[`name`,`sub`,`text`]){let r=t.trim().toLowerCase();return!r||n.some(t=>(e[t]||``).toLowerCase().includes(r))}var t=[{accent:`#b0652f`,soft:`#c98a4e`},{accent:`#3f7f5a`,soft:`#5f9e77`},{accent:`#5a6d9e`,soft:`#7c8fc0`},{accent:`#8a3f57`,soft:`#a86379`},{accent:`#7a6a3f`,soft:`#99855a`},{accent:`#4e7f9e`,soft:`#6f9fc0`},{accent:`#9e5a5a`,soft:`#bc7a7a`},{accent:`#6a5a8a`,soft:`#8a7abe`},{accent:`#3f8a5a`,soft:`#63a87a`},{accent:`#9e6a2f`,soft:`#bd8f55`},{accent:`#5a8a9e`,soft:`#7caac0`},{accent:`#8a5a3f`,soft:`#ab7a57`},{accent:`#4a5a8a`,soft:`#6f80b5`},{accent:`#9e7a3f`,soft:`#bd9955`}],n=(e,t)=>{let n=0;for(let t of String(e))n=n*31+t.codePointAt(0)&4294967295;return Math.abs(n)%t};function r(e){return t[n(e,t.length)]}var i=e=>e.soft,a=e=>e.accent,o={hob:e=>`
    <ellipse cx="60" cy="108" rx="55" ry="16" fill="${i(e)}" opacity="0.4"/>
    <circle cx="60" cy="76" r="32" fill="${i(e)}" opacity="0.55" stroke="${a(e)}" stroke-width="5"/>
    <circle cx="60" cy="76" r="24" fill="none" stroke="${a(e)}" stroke-width="2" opacity="0.7"/>
    <circle cx="74" cy="68" r="7" fill="${a(e)}"/>`,elf:e=>`
    <path d="M52 24 Q55 58 52 96" fill="none" stroke="${a(e)}" stroke-width="2" opacity="0.6"/>
    <path d="M44 20 Q70 60 44 100" fill="none" stroke="${a(e)}" stroke-width="4"/>
    <path d="M30 62 L88 62" stroke="${a(e)}" stroke-width="3"/>
    <path d="M86 60 L101 52 L101 72 Z" fill="${i(e)}" opacity="0.85"/>
    <path d="M30 62 l-7 -7 M30 62 l-7 7" stroke="${a(e)}" stroke-width="3" stroke-linecap="round"/>`,human:e=>`
    <path d="M40 64 Q40 24 40 16 L80 16 Q80 44 78 58" fill="${i(e)}" opacity="0.45" stroke="${a(e)}" stroke-width="4"/>
    <rect x="46" y="38" width="28" height="6" fill="${a(e)}" opacity="0.85"/>
    <path d="M40 64 L78 58" stroke="${a(e)}" stroke-width="3"/>
    <path d="M60 16 v-11 M58 12 l4 -6" stroke="${a(e)}" stroke-width="3" stroke-linecap="round"/>`,dwarf:e=>`
    <path d="M60 100 L60 30" stroke="${a(e)}" stroke-width="5" stroke-linecap="round"/>
    <path d="M58 44 Q40 18 30 44 L38 66 L56 42 Z" fill="${i(e)}" opacity="0.6" stroke="${a(e)}" stroke-width="4"/>
    <path d="M94 88 L106 100 L94 112 L82 100 Z" fill="${a(e)}"/>
    <path d="M88 100 L100 100 M94 94 L94 106" stroke="${i(e)}" stroke-width="2" opacity="0.8"/>`,mage:e=>`
    <path d="M70 100 L70 44" stroke="${a(e)}" stroke-width="5" stroke-linecap="round"/>
    <path d="M70 14 L84 32 L70 50 L56 32 Z" fill="${a(e)}"/>
    <path d="M70 26 L76 32 L70 38 L64 32 Z" fill="${i(e)}" opacity="0.7"/>
    <path d="M50 18 l-8 -10 M90 18 l8 -10" stroke="${a(e)}" stroke-width="3" stroke-linecap="round" opacity="0.6"/>
    <path d="M62 72 l16 0 M62 86 l16 0" stroke="${a(e)}" stroke-width="3" opacity="0.55"/>`,dark:e=>`
    <path d="M60 10 L44 30 L34 96 L86 96 L76 30 Z" fill="${i(e)}" opacity="0.5" stroke="${a(e)}" stroke-width="3"/>
    <path d="M60 10 L50 34 M60 10 L70 34" stroke="${a(e)}" stroke-width="2" opacity="0.6"/>
    <circle cx="51" cy="38" r="4" fill="${a(e)}" opacity="0.95"/>
    <circle cx="69" cy="38" r="4" fill="${a(e)}" opacity="0.95"/>`,orc:e=>`
    <path d="M40 64 Q40 32 40 28 L80 28 Q80 36 80 60" fill="${i(e)}" opacity="0.5" stroke="${a(e)}" stroke-width="4"/>
    <path d="M50 28 Q34 10 24 34 M70 28 Q86 10 96 34" fill="none" stroke="${a(e)}" stroke-width="4"/>
    <path d="M38 60 L82 54 L48 42 M54 46 l10 0 M64 46 l8 -6" stroke="${a(e)}" stroke-width="4" stroke-linecap="round"/>`,ent:e=>`
    <path d="M46 40 L46 96 L74 96 L74 40 Z" fill="${i(e)}" opacity="0.55" stroke="${a(e)}" stroke-width="4"/>
    <path d="M46 52 L36 30 L36 24 M74 52 L84 30 L84 24" stroke="${a(e)}" stroke-width="4" stroke-linecap="round"/>
    <circle cx="53" cy="66" r="4" fill="${a(e)}" opacity="0.9"/>
    <circle cx="67" cy="66" r="4" fill="${a(e)}" opacity="0.9"/>
    <path d="M49 56 l-7 -6 M71 56 l7 -6" stroke="${a(e)}" stroke-width="3" stroke-linecap="round"/>
    <path d="M46 96 Q38 106 60 106 Q82 106 74 96" fill="${i(e)}" opacity="0.5"/>`,tree:e=>`
    <path d="M46 96 L46 56 L74 56 L74 96 Z" fill="${i(e)}" opacity="0.5" stroke="${a(e)}" stroke-width="4"/>
    <circle cx="44" cy="32" r="19" fill="${i(e)}" opacity="0.6"/>
    <circle cx="76" cy="32" r="19" fill="${i(e)}" opacity="0.6"/>
    <circle cx="60" cy="14" r="22" fill="${i(e)}" opacity="0.6"/>
    <path d="M44 32 Q60 14 76 32" fill="none" stroke="${a(e)}" stroke-width="3" opacity="0.6"/>
    <path d="M60 26 L60 40 M52 30 L48 42 M68 30 L72 42" stroke="${a(e)}" stroke-width="3"/>`,tower:e=>`
    <path d="M40 96 L40 36 L80 36 L80 96 Z" fill="${i(e)}" opacity="0.5" stroke="${a(e)}" stroke-width="4"/>
    <path d="M38 36 L60 6 L82 36 Z" fill="${i(e)}" opacity="0.6" stroke="${a(e)}" stroke-width="4"/>
    <rect x="57" y="48" width="10" height="16" fill="${a(e)}" opacity="0.85"/>
    <path d="M34 96 L34 104 L86 104 L86 96 Z" fill="${i(e)}" opacity="0.5" stroke="${a(e)}" stroke-width="4"/>`,mountain:e=>`
    <path d="M16 96 L44 42 L62 58 L80 42 L104 96 Z" fill="${i(e)}" opacity="0.55" stroke="${a(e)}" stroke-width="4"/>
    <path d="M62 58 l-8 -10 M74 46 l6 -8 M50 50 l8 -6" stroke="${a(e)}" stroke-width="3" stroke-linecap="round"/>`,river:e=>`
    <circle cx="60" cy="18" r="6" fill="${a(e)}"/>
    <path d="M16 44 Q24 36 32 44 Q42 52 52 44 Q62 36 72 44 Q82 52 92 44 Q102 36 108 44" fill="none" stroke="${a(e)}" stroke-width="5" stroke-linecap="round"/>
    <path d="M26 66 Q34 58 42 66 Q52 74 62 66 Q72 58 82 66 Q92 74 100 66" fill="none" stroke="${a(e)}" stroke-width="4" stroke-linecap="round" opacity="0.6"/>`,ring:e=>`
    <circle cx="60" cy="58" r="40" fill="none" stroke="${a(e)}" stroke-width="10"/>
    <circle cx="60" cy="58" r="30" fill="none" stroke="${i(e)}" stroke-width="2" opacity="0.7"/>
    <path d="M34 40 l0 -8 M42 34 l0 -8 M50 29 l0 -8 M58 26 l0 -8 M66 29 l0 -8 M74 34 l0 -8 M82 40 l0 -8" stroke="${a(e)}" stroke-width="3" opacity="0.85"/>`,sword:e=>`
    <path d="M48 34 L48 96 L72 96 L72 34 Z" fill="${i(e)}" opacity="0.5" stroke="${a(e)}" stroke-width="4"/>
    <path d="M48 34 L60 10 L72 34 Z" fill="${i(e)}" opacity="0.5" stroke="${a(e)}" stroke-width="4"/>
    <path d="M36 36 h48" stroke="${a(e)}" stroke-width="6"/>
    <path d="M54 44 h12 M54 60 h12" stroke="${a(e)}" stroke-width="3"/>
    <path d="M52 22 l-9 -5" stroke="${a(e)}" stroke-width="3" opacity="0.6"/>`,gem:e=>`
    <path d="M60 16 L98 44 L60 104 L22 44 Z" fill="${i(e)}" opacity="0.5" stroke="${a(e)}" stroke-width="5"/>
    <path d="M22 44 L98 44 M60 16 L60 60" stroke="${a(e)}" stroke-width="3" opacity="0.75"/>
    <path d="M60 16 l-7 -9 M60 16 l7 -9" stroke="${a(e)}" stroke-width="3" stroke-linecap="round" opacity="0.6"/>
    <circle cx="60" cy="34" r="4" fill="${a(e)}"/>`,generic:e=>`
    <circle cx="60" cy="60" r="34" fill="none" stroke="${a(e)}" stroke-width="5"/>
    <path d="M30 92 Q60 60 90 28" fill="none" stroke="${a(e)}" stroke-width="4" stroke-linecap="round"/>
    <path d="M60 60 l-9 -10 M60 60 l9 -14" stroke="${a(e)}" stroke-width="3" stroke-linecap="round"/>
    <circle cx="60" cy="60" r="5" fill="${a(e)}"/>`},s={Эльфы:`elf`,Люди:`human`,Хоббиты:`hob`,Гномы:`dwarf`,Орки:`orc`,"Урук-хай":`orc`,Энты:`ent`,Истари:`mage`,Назгулы:`dark`},c={Хоббит:`hob`,Эльф:`elf`,Человек:`human`,Гном:`dwarf`,Падший:`dark`,Зло:`dark`,Майар:`mage`,Маг:`mage`},l={"Свободные земли":`mountain`,"Эльфийские земли":`tree`,"Гномьи земли":`mountain`,"Королевства людей":`tower`,"Оплот зла":`dark`,Кольца:`ring`,Оружие:`sword`,Артефакты:`gem`};function u(e){if(e.sigil)return e.sigil;if(s[e.name])return s[e.name];let t=(e.tags||[]).find(e=>c[e]);return t?c[t]:l[e.category]?l[e.category]:`generic`}function d(e,t){return(o[e]||o.generic)(t)}var f=()=>`art`+Math.random().toString(36).slice(2,7);function p(e,t=f()){let n=e.palette||r(e.name);return`<svg class="art-svg" viewBox="0 0 120 120" role="img" aria-hidden="true">
  <defs>
    <linearGradient id="${t}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${n.soft}" stop-opacity="0.5"/>
      <stop offset="1" stop-color="${n.accent}" stop-opacity="0.18"/>
    </linearGradient>
  </defs>
  <rect width="120" height="120" rx="20" fill="url(#${t})"/>
  ${d(u(e),n)}
</svg>`}var m=e=>String(e||``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`);function h(e,t=0){let n=e.palette||r(e.name),i=`style="--accent:${n.accent};--accent-soft:${n.soft}"`,a=(Array.isArray(e.tags)?e.tags:[]).map(e=>`<span class="card-tag">${m(e)}</span>`).join(``);return[`<article class="card" ${i}>`,`  <div class="card-rule"></div>`,`  <div class="card-art">${p(e,`a`+t)}</div>`,`  <h3>${m(e.name)}</h3>`,e.sub?`  <div class="card-sub">${m(e.sub)}</div>`:``,`<p class="card-text">`+m(e.text)+`</p>`,a?`  <div>${a}</div>`:``,`</article>`].filter(Boolean).join(`
`)}function g(e,t=`Ничего не найдено`){return e.length?e.map((e,t)=>h(e,t)).join(``):`<p class="empty">${t}</p>`}var _=(e,t)=>{let n=t.find(e=>e.dataset.active===`true`);return{query:e?e.value:``,category:n?n.dataset.value:``}},v=(t,n,r)=>t.filter(t=>e(t,n.query,r)&&(n.category===``||t.category===n.category)),y=(e,t)=>{let n=t.dataset.active!==`true`;e.forEach(e=>{e.dataset.active=`false`,e.setAttribute(`aria-pressed`,`false`)}),n&&(t.dataset.active=`true`,t.setAttribute(`aria-pressed`,`true`))};function b({data:e,fields:t=[`name`,`sub`,`text`]}){let n=document.getElementById(`list`);if(!n)return;let r=document.getElementById(`search`),i=document.getElementById(`status`),a=Array.from(document.querySelectorAll(`.chip`)),o=()=>{let o=v(e,_(r,a),t);n.innerHTML=g(o),i&&(i.textContent=`${o.length} из ${e.length}`)};r&&r.addEventListener(`input`,o),a.forEach(e=>e.addEventListener(`click`,()=>{y(a,e),o()})),o()}export{b as t};