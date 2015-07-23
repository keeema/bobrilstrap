import * as b from 'node_modules/bobril/index';
import * as Utils from '../utils/tags';
import { getGlyphIconsSection } from './parts/glyphicons';
import { getHeader } from './parts/header';
import { getDocs } from './containers/docs';

var tag = Utils.tag;
var a = Utils.a;

b.init(() => {
  b.invalidate();
  return [
    getHeader(),
    getDocs([
        getGlyphIconsSection()
      ],[])
  ];
});
