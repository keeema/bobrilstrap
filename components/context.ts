import * as b from 'bobril';

export class Context {
    static active: string = 'active';
    static success: string = 'success';
    static warning: string = 'warning';
    static danger: string = 'danger';
    static info: string = 'info';
}

export const contextStyles = {
    active: b.styleDef('active'),
    success: b.styleDef('success'),
    warning: b.styleDef('warning'),
    danger: b.styleDef('danger'),    
    info: b.styleDef('info')
};

export default Context;