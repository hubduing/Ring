import { initTheme } from './theme.js';
import { markActive } from './nav.js';
import { initToTop } from './top.js';

export function initCommon() {
  initTheme();
  markActive();
  initToTop();
}