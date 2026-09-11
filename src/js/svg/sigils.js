import { MOTIFS } from './motifs.js';

const BY_NAME = {
  'Эльфы': 'elf', 'Люди': 'human', 'Хоббиты': 'hob', 'Гномы': 'dwarf',
  'Орки': 'orc', 'Урук-хай': 'orc', 'Энты': 'ent', 'Истари': 'mage', 'Назгулы': 'dark',
};

const BY_TAG = {
  'Хоббит': 'hob', 'Эльф': 'elf', 'Человек': 'human',
  'Гном': 'dwarf', 'Падший': 'dark', 'Зло': 'dark',
  'Майар': 'mage', 'Маг': 'mage',
};

const BY_CATEGORY = {
  'Свободные земли': 'mountain', 'Эльфийские земли': 'tree',
  'Гномьи земли': 'mountain', 'Королевства людей': 'tower', 'Оплот зла': 'dark',
  'Кольца': 'ring', 'Оружие': 'sword', 'Артефакты': 'gem',
};

export function sigilFor(entry) {
  if (entry.sigil) return entry.sigil;
  if (BY_NAME[entry.name]) return BY_NAME[entry.name];
  const tag = (entry.tags || []).find((t) => BY_TAG[t]);
  if (tag) return BY_TAG[tag];
  if (BY_CATEGORY[entry.category]) return BY_CATEGORY[entry.category];
  return 'generic';
}

export function motif(key, palette) {
  const fn = MOTIFS[key] || MOTIFS.generic;
  return fn(palette);
}