import * as b from 'bobril';
import * as bs from '../../index';
import { styles } from '../bsexample/css';
import { pre, langJs } from '../prettify/pre';
import { section } from '../common/section';

export const panels = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Panels',
                id: 'panels',
                lead: [`While not always necessary, sometimes you need to put your DOM in a box. For those situations, 
                try the panel component.`]
            },
            [
                basic(),
                heading(),
                footer(),
                context(),
                tables(),
                listGroups()
            ]);
    }
});

function basic(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'panels-basic' } }, 'Basic example')),
        bs.e({ style: styles.bsExample }, [
            bs.panel({}, [
                bs.panelBody({}, 'Basic panel example')
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.panel({}, [`, bs.e({ tag: 'br' }),
            `    bs.panelBody({}, 'Basic panel example')`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function heading(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'panels-heading' } }, 'Panel with heading')),
        bs.e({ style: styles.bsExample }, [
            bs.panel({}, [
                bs.panelHeading({}, 'Panel heading without title'),
                bs.panelBody({}, 'Panel content')
            ]),
            bs.panel({}, [
                bs.panelHeading({}, bs.panelTitle3({}, 'Panel title')),
                bs.panelBody({}, 'Panel content')
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.panel({}, [`, bs.e({ tag: 'br' }),
            `    bs.panelHeading({}, 'Panel heading without title'),`, bs.e({ tag: 'br' }),
            `    bs.panelBody({}, 'Panel content')`, bs.e({ tag: 'br' }),
            `])`, bs.e({ tag: 'br' }), bs.e({ tag: 'br' }),
            `bs.panel({}, [`, bs.e({ tag: 'br' }),
            `    bs.panelHeading({}, bs.panelTitle3({}, 'Panel title')),`, bs.e({ tag: 'br' }),
            `    bs.panelBody({}, 'Panel content')`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function footer(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'panels-footer' } }, 'Panel with footer')),
        bs.p({}, [
            `Wrap buttons or secondary text in `, bs.code({}, 'bs.panelFooter'),
            `. Note that panel footers `, bs.strong({}, 'do not'), ` inherit colors and borders when using contextual 
            variations as they are not meant to be in the foreground.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.panel({}, [
                bs.panelBody({}, 'Panel content'),
                bs.panelFooter({}, 'Panel footer')
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.panel({}, [`, bs.e({ tag: 'br' }),
            `    bs.panelBody({}, 'Panel content'),`, bs.e({ tag: 'br' }),
            `    bs.panelFooter({}, 'Panel footer')`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function context(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'panels-alternatives' } }, 'Contextual alternatives')),
        bs.p({}, [
            `Like other components, easily make a panel more meaningful to a particular context by 
            setting any of the contextual types.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.panel({ context: bs.PanelContext.Primary }, [
                bs.panelHeading({}, bs.panelTitle3({}, 'Panel title')),
                bs.panelBody({}, 'Panel content')
            ]),
            bs.panel({ context: bs.PanelContext.Success }, [
                bs.panelHeading({}, bs.panelTitle3({}, 'Panel title')),
                bs.panelBody({}, 'Panel content')
            ]),
            bs.panel({ context: bs.PanelContext.Info }, [
                bs.panelHeading({}, bs.panelTitle3({}, 'Panel title')),
                bs.panelBody({}, 'Panel content')
            ]),
            bs.panel({ context: bs.PanelContext.Warning }, [
                bs.panelHeading({}, bs.panelTitle3({}, 'Panel title')),
                bs.panelBody({}, 'Panel content')
            ]),
            bs.panel({ context: bs.PanelContext.Danger }, [
                bs.panelHeading({}, bs.panelTitle3({}, 'Panel title')),
                bs.panelBody({}, 'Panel content')
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.panel({ context: bs.PanelContext.Primary }, [ ... ])`, bs.e({ tag: 'br' }),
            `bs.panel({ context: bs.PanelContext.Success }, [ ... ])`, bs.e({ tag: 'br' }),
            `bs.panel({ context: bs.PanelContext.Info }, [ ... ])`, bs.e({ tag: 'br' }),
            `bs.panel({ context: bs.PanelContext.Warning }, [ ... ])`, bs.e({ tag: 'br' }),
            `bs.panel({ context: bs.PanelContext.Danger }, [ ... ])`
        ])))
    ];
}

function tables(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'panels-tables' } }, 'With tables')),
        bs.e({ style: styles.bsExample }, [
            bs.panel({}, [
                bs.panelHeading({}, 'Panel heading'),
                bs.panelBody({}, `Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum 
                nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor 
                id nibh ultricies vehicula ut id elit.`),
                bs.table({
                    head: { row: { headers: ['#', 'First Name', 'Last Name', 'Username'] } },
                    body: {
                        rows: [
                            { columns: ['1', 'Mark', 'Otto', '@mdo'] },
                            { columns: ['2', 'Jacob', 'Thornton', '@fat'] },
                            { columns: ['3', 'Larry', 'the Bird', '@twitter'] }
                        ]
                    }
                })
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.panel({}, [`, bs.e({ tag: 'br' }),
            `    bs.panelHeading({}, 'Panel heading'),`, bs.e({ tag: 'br' }),
            `    bs.panelBody({}, '...'),`, bs.e({ tag: 'br' }),
            `    bs.table({}, ...)`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function listGroups(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'panels-list-group' } }, 'With list groups')),
        bs.e({ style: styles.bsExample }, [
            bs.panel({}, [
                bs.panelHeading({}, 'Panel heading'),
                bs.panelBody({}, `Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum 
                nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor 
                id nibh ultricies vehicula ut id elit.`),
                bs.listGroup({}, [
                    bs.listGroupItem({}, 'Cras justo odio'),
                    bs.listGroupItem({}, 'Dapibus ac facilisis in'),
                    bs.listGroupItem({}, 'Morbi leo risus'),
                    bs.listGroupItem({}, 'Porta ac consectetur ac'),
                    bs.listGroupItem({}, 'Vestibulum at eros')
                ])
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.panel({}, [`, bs.e({ tag: 'br' }),
            `    bs.panelHeading({}, 'Panel heading'),`, bs.e({ tag: 'br' }),
            `    bs.panelBody({}, '...'),`, bs.e({ tag: 'br' }),
            `    bs.listGroup({}, ...)`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}