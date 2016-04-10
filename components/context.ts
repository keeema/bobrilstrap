import * as b from 'bobril';
import { createDictionary } from './bobrilHelpers';

export enum Context {
    Active,
    Success,
    Warning,
    Danger,
    Info
}

export const contextStyles = createDictionary<Context, b.IBobrilStyle>();
contextStyles(Context.Active, b.styleDef('active'));
contextStyles(Context.Success, b.styleDef('success'));
contextStyles(Context.Warning, b.styleDef('warning'));
contextStyles(Context.Danger, b.styleDef('danger'));
contextStyles(Context.Info, b.styleDef('info'));

export default Context;