import { artifacts } from '../data/artifacts.js';
import { initCommon } from '../core/page.js';
import { initEncyclopedia } from '../render/filters.js';

initCommon();
initEncyclopedia({ data: artifacts });