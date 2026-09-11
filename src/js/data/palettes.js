/* Курированные согласованные палитры. Каждая — { accent, soft }.
   accent — основной акцент (заголовок/правило), soft — светлый тон градиента. */
export const PALETTES = [
  { accent: '#b0652f', soft: '#c98a4e' }, // терракота
  { accent: '#3f7f5a', soft: '#5f9e77' }, // лесной зелёный
  { accent: '#5a6d9e', soft: '#7c8fc0' }, // сталь/сапфир
  { accent: '#8a3f57', soft: '#a86379' }, // винный
  { accent: '#7a6a3f', soft: '#99855a' }, // охра/олива
  { accent: '#4e7f9e', soft: '#6f9fc0' }, // лазурь
  { accent: '#9e5a5a', soft: '#bc7a7a' }, // ржавь/кирпич
  { accent: '#6a5a8a', soft: '#8a7abe' }, // вечерний пурпур
  { accent: '#3f8a5a', soft: '#63a87a' }, // изумруд
  { accent: '#9e6a2f', soft: '#bd8f55' }, // янтарь
  { accent: '#5a8a9e', soft: '#7caac0' }, // морской
  { accent: '#8a5a3f', soft: '#ab7a57' }, // корица
  { accent: '#4a5a8a', soft: '#6f80b5' }, // черничный
  { accent: '#9e7a3f', soft: '#bd9955' }, // медный
];

/* Детерминированный псевдослучайный индекс по строке (имени). */
export const hashIndex = (s, size) => {
  let h = 0;
  for (const ch of String(s)) h = (h * 31 + ch.codePointAt(0)) & 0xffffffff;
  return Math.abs(h) % size;
};

/* Возвращает палитру для имени — «как случайно», но стабильно. */
export function paletteFor(name) {
  return PALETTES[hashIndex(name, PALETTES.length)];
}