import * as b from 'bobril';
import * as bsCore from 'bobrilstrap-core';
import container from 'bobrilstrap-container';
import image, { Shape } from './index';

bsCore.init();

let logoPath = b.asset('images/logo.png');
let beaverPath = b.asset('images/beaver.jpg');
let imageSize = b.styleDef({ width: '200px', height: '200px' });

b.init(() => [
    container({}, [
        image({ src: logoPath, alt: 'Bobril logo' }),
        image({ src: beaverPath, alt: 'Beaver', shape: Shape.rounded, styles: imageSize })
    ])
]);
