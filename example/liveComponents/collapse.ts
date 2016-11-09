import * as b from 'bobril';
import * as bs from '../../index';
import { styles } from '../bsexample/css';
import { pre, langJs } from '../prettify/pre';
import { section } from '../common/section';

export const collapse = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Collapse',
                id: 'collapse',
                lead: []
            },
            [
                example(),
            ]);
    }
});

let expanded = 0;
function toggleExpandItem(item: number) {
    expanded = expanded === item ? 0 : item;
    b.invalidate();
}

function example(): b.IBobrilChildren {
    return [
        bs.e({ style: styles.bsExample }, [
            bs.panelGroup({}, [
                bs.panel({}, [
                    bs.panelHeading({}, [
                        bs.panelTitle4({}, [
                            bs.a(
                                { href: 'javascript:void(0)', onClick: () => toggleExpandItem(1) },
                                'Collapsible Group Item #1')
                        ])
                    ]),
                    bs.collapse({ collapsed: expanded !== 1 }, [
                        bs.panelCollapse({}, [
                            bs.panelBody({}, [
                                `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf 
                            moon officia aute, non cupidatat skateboard dolor brunch.Food truck quinoa nesciunt laborum eiusmod.Brunch 
                            3 wolf moon tempor, sunt aliqua put a bird on it squid single- origin coffee nulla assumenda shoreditch 
                            et.Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.Ad 
                            vegan excepteur butcher vice lomo.Leggings occaecat craft beer farm- to - table, raw denim aesthetic 
                            synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.`
                            ])
                        ])
                    ])
                ]),
                bs.panel({}, [
                    bs.panelHeading({}, [
                        bs.panelTitle4({}, [
                            bs.a(
                                { href: 'javascript:void(0)', onClick: () => toggleExpandItem(2) },
                                'Collapsible Group Item #2'
                            )
                        ])
                    ]),
                    bs.collapse({ collapsed: expanded !== 2 }, [
                        bs.panelCollapse({}, [
                            bs.panelBody({}, [
                                `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf 
                            moon officia aute, non cupidatat skateboard dolor brunch.Food truck quinoa nesciunt laborum eiusmod.Brunch 
                            3 wolf moon tempor, sunt aliqua put a bird on it squid single- origin coffee nulla assumenda shoreditch 
                            et.Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.Ad 
                            vegan excepteur butcher vice lomo.Leggings occaecat craft beer farm- to - table, raw denim aesthetic 
                            synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.`
                            ])
                        ])
                    ])
                ]),
                bs.panel({}, [
                    bs.panelHeading({}, [
                        bs.panelTitle4({}, [
                            bs.a(
                                { href: 'javascript:void(0)', onClick: () => toggleExpandItem(3) },
                                'Collapsible Group Item #3'
                            )
                        ])
                    ]),
                    bs.collapse({ collapsed: expanded !== 3 }, [
                        bs.panelCollapse({}, [
                            bs.panelBody({}, [
                                `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf 
                            moon officia aute, non cupidatat skateboard dolor brunch.Food truck quinoa nesciunt laborum eiusmod.Brunch 
                            3 wolf moon tempor, sunt aliqua put a bird on it squid single- origin coffee nulla assumenda shoreditch 
                            et.Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.Ad 
                            vegan excepteur butcher vice lomo.Leggings occaecat craft beer farm- to - table, raw denim aesthetic 
                            synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.`
                            ])
                        ])
                    ])
                ])
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `// On some not-rendered place`, bs.e({ tag: 'br' }),
            `let expanded = 0;`, bs.e({ tag: 'br' }),
            `function toggleExpandItem(item: number) {`, bs.e({ tag: 'br' }),
            `    expanded = expanded === item ? 0 : item;`, bs.e({ tag: 'br' }),
            `    b.invalidate();`, bs.e({ tag: 'br' }),
            `}`, bs.e({ tag: 'br' }),
            bs.e({ tag: 'br' }),

            `// On some rendered place`, bs.e({ tag: 'br' }),
            `    bs.panel({}, [`, bs.e({ tag: 'br' }),
            `        bs.panelHeading({}, [`, bs.e({ tag: 'br' }),
            `            bs.panelTitle4({}, [`, bs.e({ tag: 'br' }),
            `                bs.a(`, bs.e({ tag: 'br' }),
            `                    { href: 'javascript:void(0)', onClick: () => toggleExpandItem(1) }`, bs.e({ tag: 'br' }),
            `                    'Collapsible Group Item #1'`, bs.e({ tag: 'br' }),
            `                )`, bs.e({ tag: 'br' }),
            `            ])`, bs.e({ tag: 'br' }),
            `        ]),`, bs.e({ tag: 'br' }),
            `        bs.collapse({ collapsed }, [`, bs.e({ tag: 'br' }),
            `            bs.panelCollapse({}, [`, bs.e({ tag: 'br' }),
            `                bs.panelBody({}, ...)`, bs.e({ tag: 'br' }),
            `            ])`, bs.e({ tag: 'br' }),
            `        ])`, bs.e({ tag: 'br' }),
            `    ])`, bs.e({ tag: 'br' }),
        ])))
    ];
}