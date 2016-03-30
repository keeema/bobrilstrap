import * as b from 'bobril';
import { createDictionary } from './bobrilHelpers';

export enum Context {
    active,
    success,
    warning,
    danger,
    info
}

export const contextStyles = createDictionary<Context, b.IBobrilStyle>();
contextStyles(Context.active, b.styleDef('active'));
contextStyles(Context.success, b.styleDef('success'));
contextStyles(Context.warning, b.styleDef('warning'));
contextStyles(Context.danger, b.styleDef('danger'));
contextStyles(Context.info, b.styleDef('info'));

export default Context;