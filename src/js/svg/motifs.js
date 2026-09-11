/* Векторные сюжеты-символы. Каждая функция получает {accent, soft} и
   возвращает внутреннюю разметку SVG (вид 120x120). */
const S = (p) => p.soft;
const A = (p) => p.accent;

export const MOTIFS = {
  hob: (p) => `
    <ellipse cx="60" cy="108" rx="55" ry="16" fill="${S(p)}" opacity="0.4"/>
    <circle cx="60" cy="76" r="32" fill="${S(p)}" opacity="0.55" stroke="${A(p)}" stroke-width="5"/>
    <circle cx="60" cy="76" r="24" fill="none" stroke="${A(p)}" stroke-width="2" opacity="0.7"/>
    <circle cx="74" cy="68" r="7" fill="${A(p)}"/>`,

  elf: (p) => `
    <path d="M52 24 Q55 58 52 96" fill="none" stroke="${A(p)}" stroke-width="2" opacity="0.6"/>
    <path d="M44 20 Q70 60 44 100" fill="none" stroke="${A(p)}" stroke-width="4"/>
    <path d="M30 62 L88 62" stroke="${A(p)}" stroke-width="3"/>
    <path d="M86 60 L101 52 L101 72 Z" fill="${S(p)}" opacity="0.85"/>
    <path d="M30 62 l-7 -7 M30 62 l-7 7" stroke="${A(p)}" stroke-width="3" stroke-linecap="round"/>`,

  human: (p) => `
    <path d="M40 64 Q40 24 40 16 L80 16 Q80 44 78 58" fill="${S(p)}" opacity="0.45" stroke="${A(p)}" stroke-width="4"/>
    <rect x="46" y="38" width="28" height="6" fill="${A(p)}" opacity="0.85"/>
    <path d="M40 64 L78 58" stroke="${A(p)}" stroke-width="3"/>
    <path d="M60 16 v-11 M58 12 l4 -6" stroke="${A(p)}" stroke-width="3" stroke-linecap="round"/>`,

  dwarf: (p) => `
    <path d="M60 100 L60 30" stroke="${A(p)}" stroke-width="5" stroke-linecap="round"/>
    <path d="M58 44 Q40 18 30 44 L38 66 L56 42 Z" fill="${S(p)}" opacity="0.6" stroke="${A(p)}" stroke-width="4"/>
    <path d="M94 88 L106 100 L94 112 L82 100 Z" fill="${A(p)}"/>
    <path d="M88 100 L100 100 M94 94 L94 106" stroke="${S(p)}" stroke-width="2" opacity="0.8"/>`,

  mage: (p) => `
    <path d="M70 100 L70 44" stroke="${A(p)}" stroke-width="5" stroke-linecap="round"/>
    <path d="M70 14 L84 32 L70 50 L56 32 Z" fill="${A(p)}"/>
    <path d="M70 26 L76 32 L70 38 L64 32 Z" fill="${S(p)}" opacity="0.7"/>
    <path d="M50 18 l-8 -10 M90 18 l8 -10" stroke="${A(p)}" stroke-width="3" stroke-linecap="round" opacity="0.6"/>
    <path d="M62 72 l16 0 M62 86 l16 0" stroke="${A(p)}" stroke-width="3" opacity="0.55"/>`,

  dark: (p) => `
    <path d="M60 10 L44 30 L34 96 L86 96 L76 30 Z" fill="${S(p)}" opacity="0.5" stroke="${A(p)}" stroke-width="3"/>
    <path d="M60 10 L50 34 M60 10 L70 34" stroke="${A(p)}" stroke-width="2" opacity="0.6"/>
    <circle cx="51" cy="38" r="4" fill="${A(p)}" opacity="0.95"/>
    <circle cx="69" cy="38" r="4" fill="${A(p)}" opacity="0.95"/>`,

  orc: (p) => `
    <path d="M40 64 Q40 32 40 28 L80 28 Q80 36 80 60" fill="${S(p)}" opacity="0.5" stroke="${A(p)}" stroke-width="4"/>
    <path d="M50 28 Q34 10 24 34 M70 28 Q86 10 96 34" fill="none" stroke="${A(p)}" stroke-width="4"/>
    <path d="M38 60 L82 54 L48 42 M54 46 l10 0 M64 46 l8 -6" stroke="${A(p)}" stroke-width="4" stroke-linecap="round"/>`,

  ent: (p) => `
    <path d="M46 40 L46 96 L74 96 L74 40 Z" fill="${S(p)}" opacity="0.55" stroke="${A(p)}" stroke-width="4"/>
    <path d="M46 52 L36 30 L36 24 M74 52 L84 30 L84 24" stroke="${A(p)}" stroke-width="4" stroke-linecap="round"/>
    <circle cx="53" cy="66" r="4" fill="${A(p)}" opacity="0.9"/>
    <circle cx="67" cy="66" r="4" fill="${A(p)}" opacity="0.9"/>
    <path d="M49 56 l-7 -6 M71 56 l7 -6" stroke="${A(p)}" stroke-width="3" stroke-linecap="round"/>
    <path d="M46 96 Q38 106 60 106 Q82 106 74 96" fill="${S(p)}" opacity="0.5"/>`,

  tree: (p) => `
    <path d="M46 96 L46 56 L74 56 L74 96 Z" fill="${S(p)}" opacity="0.5" stroke="${A(p)}" stroke-width="4"/>
    <circle cx="44" cy="32" r="19" fill="${S(p)}" opacity="0.6"/>
    <circle cx="76" cy="32" r="19" fill="${S(p)}" opacity="0.6"/>
    <circle cx="60" cy="14" r="22" fill="${S(p)}" opacity="0.6"/>
    <path d="M44 32 Q60 14 76 32" fill="none" stroke="${A(p)}" stroke-width="3" opacity="0.6"/>
    <path d="M60 26 L60 40 M52 30 L48 42 M68 30 L72 42" stroke="${A(p)}" stroke-width="3"/>`,

  tower: (p) => `
    <path d="M40 96 L40 36 L80 36 L80 96 Z" fill="${S(p)}" opacity="0.5" stroke="${A(p)}" stroke-width="4"/>
    <path d="M38 36 L60 6 L82 36 Z" fill="${S(p)}" opacity="0.6" stroke="${A(p)}" stroke-width="4"/>
    <rect x="57" y="48" width="10" height="16" fill="${A(p)}" opacity="0.85"/>
    <path d="M34 96 L34 104 L86 104 L86 96 Z" fill="${S(p)}" opacity="0.5" stroke="${A(p)}" stroke-width="4"/>`,

  mountain: (p) => `
    <path d="M16 96 L44 42 L62 58 L80 42 L104 96 Z" fill="${S(p)}" opacity="0.55" stroke="${A(p)}" stroke-width="4"/>
    <path d="M62 58 l-8 -10 M74 46 l6 -8 M50 50 l8 -6" stroke="${A(p)}" stroke-width="3" stroke-linecap="round"/>`,

  river: (p) => `
    <circle cx="60" cy="18" r="6" fill="${A(p)}"/>
    <path d="M16 44 Q24 36 32 44 Q42 52 52 44 Q62 36 72 44 Q82 52 92 44 Q102 36 108 44" fill="none" stroke="${A(p)}" stroke-width="5" stroke-linecap="round"/>
    <path d="M26 66 Q34 58 42 66 Q52 74 62 66 Q72 58 82 66 Q92 74 100 66" fill="none" stroke="${A(p)}" stroke-width="4" stroke-linecap="round" opacity="0.6"/>`,

  ring: (p) => `
    <circle cx="60" cy="58" r="40" fill="none" stroke="${A(p)}" stroke-width="10"/>
    <circle cx="60" cy="58" r="30" fill="none" stroke="${S(p)}" stroke-width="2" opacity="0.7"/>
    <path d="M34 40 l0 -8 M42 34 l0 -8 M50 29 l0 -8 M58 26 l0 -8 M66 29 l0 -8 M74 34 l0 -8 M82 40 l0 -8" stroke="${A(p)}" stroke-width="3" opacity="0.85"/>`,

  sword: (p) => `
    <path d="M48 34 L48 96 L72 96 L72 34 Z" fill="${S(p)}" opacity="0.5" stroke="${A(p)}" stroke-width="4"/>
    <path d="M48 34 L60 10 L72 34 Z" fill="${S(p)}" opacity="0.5" stroke="${A(p)}" stroke-width="4"/>
    <path d="M36 36 h48" stroke="${A(p)}" stroke-width="6"/>
    <path d="M54 44 h12 M54 60 h12" stroke="${A(p)}" stroke-width="3"/>
    <path d="M52 22 l-9 -5" stroke="${A(p)}" stroke-width="3" opacity="0.6"/>`,

  gem: (p) => `
    <path d="M60 16 L98 44 L60 104 L22 44 Z" fill="${S(p)}" opacity="0.5" stroke="${A(p)}" stroke-width="5"/>
    <path d="M22 44 L98 44 M60 16 L60 60" stroke="${A(p)}" stroke-width="3" opacity="0.75"/>
    <path d="M60 16 l-7 -9 M60 16 l7 -9" stroke="${A(p)}" stroke-width="3" stroke-linecap="round" opacity="0.6"/>
    <circle cx="60" cy="34" r="4" fill="${A(p)}"/>`,

  generic: (p) => `
    <circle cx="60" cy="60" r="34" fill="none" stroke="${A(p)}" stroke-width="5"/>
    <path d="M30 92 Q60 60 90 28" fill="none" stroke="${A(p)}" stroke-width="4" stroke-linecap="round"/>
    <path d="M60 60 l-9 -10 M60 60 l9 -14" stroke="${A(p)}" stroke-width="3" stroke-linecap="round"/>
    <circle cx="60" cy="60" r="5" fill="${A(p)}"/>`,
};