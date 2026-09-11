import { characters } from '../data/characters.js';
import { initCommon } from '../core/page.js';
import { initEncyclopedia } from '../render/filters.js';

initCommon();
initEncyclopedia({ data: characters });