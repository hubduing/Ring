import { races } from '../data/races.js';
import { initCommon } from '../core/page.js';
import { initEncyclopedia } from '../render/filters.js';

initCommon();
initEncyclopedia({ data: races });