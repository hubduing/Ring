import { places } from '../data/places.js';
import { initCommon } from '../core/page.js';
import { initEncyclopedia } from '../render/filters.js';

initCommon();
initEncyclopedia({ data: places });