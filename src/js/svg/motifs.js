/* Векторные сюжеты-символы. Каждая функция получает {accent, soft} и
   возвращает внутреннюю разметку SVG (вид 120x120). */
const S = (p) => p.soft;
const A = (p) => p.accent;

export const MOTIFS = {
  hob: (p) => `
    <circle cx="60" cy="92" r="40" fill="${S(p)}" opacity="0.45"/>
    <circle cx="60" cy="92" r="26" fill="none" stroke="${A(p)}" stroke-width="5"/>
    <circle cx="60" cy="92" r="7" fill="${A(p)}"/>
    <path d="M42 34 q18 -14 36 0 q-8 18 -18 18 q-10 0 -18 -18z" fill="${S(p)}" opacity="0.8"/>
    <path d="M60 30 v10 M54 32 l6 6 m6 -6 l-6 6" stroke="${A(p)}" stroke-width="3" fill="none"/>`,

  elf: (p) => `
    <path d="M60 18 l10 20 22 3 -16 16 5 22 -21 -11 -21 11 5 -22 -16 -16 22 -3z" fill="${S(p)}" opacity="0.75" stroke="${A(p)}" stroke-width="4"/>
    <path d="M60 82 q-26 8 -28 28 q28 -6 28 -28z" fill="none" stroke="${A(p)}" stroke-width="4"/>`,

  human: (p) => `
    <path d="M60 16 L26 30 V62 C26 78 60 102 60 102 60 102 94 78 94 62 V30 Z" fill="${S(p)}" opacity="0.5" stroke="${A(p)}" stroke-width="5"/>
    <path d="M50 42 h20 M50 66 h20 M46 44 v14 q7 4 14 0 v-14 z" stroke="${A(p)}" stroke-width="5"/>`,

  dwarf: (p) => `
    <path d="M60 20 l22 14 10 28 -4 26 -28 16 -28 -16 -4 -26 10 -28z" fill="${S(p)}" opacity="0.55" stroke="${A(p)}" stroke-width="5"/>
    <path d="M44 34 l20 20 M64 34 l-20 20 M60 30 h12 M60 30 v12" stroke="${A(p)}" stroke-width="4"/>`,

  mage: (p) => `
    <path d="M48 12 H72 M60 12 V44" stroke="${A(p)}" stroke-width="7"/>
    <path d="M60 44 l7 12 14 2 -10 9 2 13 -13 -7 -13 7 2 -13 -10 -9 14 -2z" fill="${S(p)}" opacity="0.8" stroke="${A(p)}" stroke-width="3"/>`,

  dark: (p) => `
    <ellipse cx="60" cy="60" rx="34" ry="22" fill="none" stroke="${A(p)}" stroke-width="6"/>
    <circle cx="60" cy="60" r="13" fill="${A(p)}"/>
    <path d="M32 22 q28 -20 56 0" fill="none" stroke="${A(p)}" stroke-width="6"/>`,

  orc: (p) => `
    <path d="M34 92 q-4 -42 26 -52 30 10 26 52z" fill="${S(p)}" opacity="0.6" stroke="${A(p)}" stroke-width="5"/>
    <path d="M38 76 h44" stroke="${A(p)}" stroke-width="5"/>
    <path d="M44 70 l7 -10 M76 70 l-7 -10" stroke="${A(p)}" stroke-width="4"/>`,

  ent: (p) => `
    <path d="M60 92 V36" stroke="${A(p)}" stroke-width="7"/>
    <circle cx="60" cy="34" r="28" fill="${S(p)}" opacity="0.5" stroke="${A(p)}" stroke-width="5"/>
    <path d="M60 62 v-16 M50 70 v10 M70 70 v-6" stroke="${A(p)}" stroke-width="3"/>`,

  tree: (p) => `
    <path d="M34 34 L60 14 L86 34 l14 48 h-28 v-8 l8 -18h-8 l10 -14z" fill="${S(p)}" opacity="0.7" stroke="${A(p)}" stroke-width="5"/>
    <path d="M60 14 V96 M48 56 L40 96 M72 56 l8 40 M60 26 L52 52 M60 26 l8 26" stroke="${A(p)}" stroke-width="4"/>`,

  tower: (p) => `
    <rect x="42" y="52" width="36" height="44" fill="${S(p)}" opacity="0.5" stroke="${A(p)}" stroke-width="5"/>
    <path d="M38 52 L60 24 L82 52 Z" fill="none" stroke="${A(p)}" stroke-width="5"/>
    <rect x="56" y="30" width="8" height="20" fill="${A(p)}"/>
    <circle cx="60" cy="74" r="5" fill="${A(p)}"/>`,

  mountain: (p) => `
    <path d="M14 94 L44 38 L60 64 L76 46 L106 94 Z" fill="${S(p)}" opacity="0.6" stroke="${A(p)}" stroke-width="5"/>
    <path d="M60 64 l6 -4 V96" stroke="${A(p)}" stroke-width="4"/>`,

  river: (p) => `
    <circle cx="60" cy="18" r="6" fill="${A(p)}"/>
    <path d="M20 44 q20 -10 40 0 t40 0 M20 66 q20 -10 40 0 t40 0 M20 88 q20 -10 40 0 t40 0" fill="none" stroke="${A(p)}" stroke-width="6" stroke-linecap="round"/>`,

  ring: (p) => `
    <circle cx="60" cy="60" r="36" fill="none" stroke="${A(p)}" stroke-width="10"/>
    <circle cx="60" cy="60" r="18" fill="none" stroke="${S(p)}" stroke-width="4"/>
    <path d="M60 28 l8 16 16 4 -12 12 3 18 -15 -9 -15 9 3 -18 -12 -12 16 -4z" fill="${S(p)}" opacity="0.7" stroke="${A(p)}" stroke-width="3"/>`,

  sword: (p) => `
    <path d="M26 90 L90 26 L85 21 L21 85 Z" fill="${S(p)}" opacity="0.7" stroke="${A(p)}" stroke-width="4"/>
    <path d="M70 34 l12 4 M30 86 l24 10" stroke="${A(p)}" stroke-width="6"/>
    <circle cx="86" cy="38" r="5" fill="${A(p)}"/>`,

  gem: (p) => `
    <path d="M60 18 L88 46 L60 102 L32 46 Z" fill="${S(p)}" opacity="0.5" stroke="${A(p)}" stroke-width="5"/>
    <path d="M32 46 L88 46 M60 102 V46" stroke="${A(p)}" stroke-width="4"/>`,

  generic: (p) => `
    <circle cx="60" cy="60" r="34" fill="none" stroke="${A(p)}" stroke-width="5"/>
    <path d="M60 26 v68 M26 60 h68" stroke="${A(p)}" stroke-width="4" opacity="0.6"/>
    <circle cx="60" cy="60" r="5" fill="${A(p)}"/>`,
};