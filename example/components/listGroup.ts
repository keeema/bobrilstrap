import * as b from 'bobril';
import * as bs from '../../index';
import { styles } from '../bsexample/css';
import { pre, langJs } from '../prettify/pre';
import { section } from '../common/section';

export const listGroup = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'List group',
                id: 'list-group',
                lead: [`List groups are a flexible and powerful component for displaying not only simple lists of elements, 
                but complex ones with custom content.`]
            },
            [
                basicExample(),
                badges(),
                links(),
                buttons(),
                disabled(),
                context(),
                customContent()
            ]);
    }
});

function basicExample(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'list-group-basic' } }, 'Basic example')),
        bs.e({ style: styles.bsExample }, [
            bs.listGroup({}, [
                bs.listGroupItem({}, 'Cras justo odio'),
                bs.listGroupItem({}, 'Dapibus ac facilisis in'),
                bs.listGroupItem({}, 'Morbi leo risus'),
                bs.listGroupItem({}, 'Porta ac consectetur ac'),
                bs.listGroupItem({}, 'Vestibulum at eros')
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.listGroup({}, [`, bs.e({ tag: 'br' }),
            `    bs.listGroupItem({}, 'Cras justo odio'),`, bs.e({ tag: 'br' }),
            `    bs.listGroupItem({}, 'Dapibus ac facilisis in'),`, bs.e({ tag: 'br' }),
            `    bs.listGroupItem({}, 'Morbi leo risus'),`, bs.e({ tag: 'br' }),
            `    bs.listGroupItem({}, 'Porta ac consectetur ac'),`, bs.e({ tag: 'br' }),
            `    bs.listGroupItem({}, 'Vestibulum at eros')`, bs.e({ tag: 'br' }),
            `])`
        ]))),
    ];
}

function badges(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'list-group-badges' } }, 'Badges')),
        bs.p({}, [
            `Add the badges component to any list group item and it will automatically be positioned on the right.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.listGroup({}, [
                bs.listGroupItem({}, [bs.badge({}, '42'), 'Cras justo odio']),
                bs.listGroupItem({}, [bs.badge({}, '2'), 'Dapibus ac facilisis in']),
                bs.listGroupItem({}, [bs.badge({}, '1'), 'Morbi leo risus'])
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.listGroup({}, [`, bs.e({ tag: 'br' }),
            `    bs.listGroupItem({}, [bs.badge({}, '42'), 'Cras justo odio']),`, bs.e({ tag: 'br' }),
            `    bs.listGroupItem({}, [bs.badge({}, '2'), 'Dapibus ac facilisis in']),`, bs.e({ tag: 'br' }),
            `    bs.listGroupItem({}, [bs.badge({}, '1'), 'Morbi leo risus'])`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function links(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'list-group-linked' } }, 'Linked items')),
        bs.p({}, [
            `Linkify list group items by using `, bs.code({}, 'bs.listGroupItemLink'), ` instead of `, bs.code({}, 'bs.listGroupItem'),
            ` (that also means a parent `, bs.code({}, 'bs.listGroup({ linkified: true }, ...)'), `).`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.listGroup({ linkified: true }, [
                bs.listGroupItemLink({ href: 'javascript:void(0)', active: true }, 'Cras justo odio'),
                bs.listGroupItemLink({ href: 'javascript:void(0)' }, 'Dapibus ac facilisis in'),
                bs.listGroupItemLink({ href: 'javascript:void(0)' }, 'Morbi leo risus'),
                bs.listGroupItemLink({ href: 'javascript:void(0)' }, 'Porta ac consectetur ac'),
                bs.listGroupItemLink({ href: 'javascript:void(0)' }, 'Vestibulum at eros')
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.listGroup({ linkified: true }, [`, bs.e({ tag: 'br' }),
            `    bs.listGroupItemLink({ href: '...', active: true }, 'Cras justo odio'),`, bs.e({ tag: 'br' }),
            `    bs.listGroupItemLink({ href: '...' }, 'Dapibus ac facilisis in'),`, bs.e({ tag: 'br' }),
            `    bs.listGroupItemLink({ href: '...' }, 'Morbi leo risus'),`, bs.e({ tag: 'br' }),
            `    bs.listGroupItemLink({ href: '...' }, 'Porta ac consectetur ac'),`, bs.e({ tag: 'br' }),
            `    bs.listGroupItemLink({ href: '...' }, 'Vestibulum at eros')`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function buttons(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'list-group-basic' } }, 'Button items')),
        bs.p({}, `List group items may be buttons instead of list items.`),
        bs.e({ style: styles.bsExample }, [
            bs.listGroup({}, [
                bs.button({ listGroupItem: true, label: 'Cras justo odio' }),
                bs.button({ listGroupItem: true, label: 'Dapibus ac facilisis in' }),
                bs.button({ listGroupItem: true, label: 'Morbi leo risus' }),
                bs.button({ listGroupItem: true, label: 'Porta ac consectetur ac' }),
                bs.button({ listGroupItem: true, label: 'Vestibulum at eros' })
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.listGroup({}, [`, bs.e({ tag: 'br' }),
            `    bs.button({ listGroupItem: true, label: 'Cras justo odio' }),`, bs.e({ tag: 'br' }),
            `    bs.button({ listGroupItem: true, label: 'Dapibus ac facilisis in' }),`, bs.e({ tag: 'br' }),
            `    bs.button({ listGroupItem: true, label: 'Morbi leo risus' }),`, bs.e({ tag: 'br' }),
            `    bs.button({ listGroupItem: true, label: 'Porta ac consectetur ac' })`, bs.e({ tag: 'br' }),
            `    bs.button({ listGroupItem: true, label: 'Vestibulum at eros' })`, bs.e({ tag: 'br' }),
            `])`
        ]))),
    ];
}

function disabled(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'list-group-disabled' } }, 'Disabled items')),
        bs.p({}, [
            `Set `, bs.code({}, 'disabled'), ` input data property to gray it out to appear disabled.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.listGroup({ linkified: true }, [
                bs.listGroupItemLink({ href: 'javascript:void(0)', disabled: true }, 'Cras justo odio'),
                bs.listGroupItemLink({ href: 'javascript:void(0)' }, 'Dapibus ac facilisis in'),
                bs.listGroupItemLink({ href: 'javascript:void(0)' }, 'Morbi leo risus'),
                bs.listGroupItemLink({ href: 'javascript:void(0)' }, 'Porta ac consectetur ac'),
                bs.listGroupItemLink({ href: 'javascript:void(0)' }, 'Vestibulum at eros')
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.listGroup({ linkified: true }, [`, bs.e({ tag: 'br' }),
            `    bs.listGroupItemLink({ href: '...', disabled: true }, 'Cras justo odio'),`, bs.e({ tag: 'br' }),
            `    bs.listGroupItemLink({ href: '...' }, 'Dapibus ac facilisis in'),`, bs.e({ tag: 'br' }),
            `    bs.listGroupItemLink({ href: '...' }, 'Morbi leo risus'),`, bs.e({ tag: 'br' }),
            `    bs.listGroupItemLink({ href: '...' }, 'Porta ac consectetur ac'),`, bs.e({ tag: 'br' }),
            `    bs.listGroupItemLink({ href: '...' }, 'Vestibulum at eros')`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function context(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'list-group-contextual-classes' } }, 'Contextual classes')),
        bs.e({ style: styles.bsExample }, [
            bs.row({}, [
                bs.col({ size: bs.Size.Sm, span: 6 }, [
                    bs.listGroup({}, [
                        bs.listGroupItem({ context: bs.ListGroupItemContext.Success }, 'Cras justo odio'),
                        bs.listGroupItem({ context: bs.ListGroupItemContext.Info }, 'Dapibus ac facilisis in'),
                        bs.listGroupItem({ context: bs.ListGroupItemContext.Warning }, 'Morbi leo risus'),
                        bs.listGroupItem({ context: bs.ListGroupItemContext.Danger }, 'Porta ac consectetur ac')
                    ]),
                ]),
                bs.col({ size: bs.Size.Sm, span: 6 }, [
                    bs.listGroup({ linkified: true }, [
                        bs.listGroupItemLink({ context: bs.ListGroupItemContext.Success, href: 'javascript:void(0)' }, 'Cras justo odio'),
                        bs.listGroupItemLink(
                            { context: bs.ListGroupItemContext.Info, href: 'javascript:void(0)' }, 'Dapibus ac facilisis in'),
                        bs.listGroupItemLink({ context: bs.ListGroupItemContext.Warning, href: 'javascript:void(0)' }, 'Morbi leo risus'),
                        bs.listGroupItemLink(
                            { context: bs.ListGroupItemContext.Danger, href: 'javascript:void(0)' }, 'Porta ac consectetur')
                    ])
                ])
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.listGroup({}, [`, bs.e({ tag: 'br' }),
            `    bs.listGroupItem({ context: bs.ListGroupItemContext.Success }, 'Cras justo odio'),`, bs.e({ tag: 'br' }),
            `    bs.listGroupItem({ context: bs.ListGroupItemContext.Info }, 'Dapibus ac facilisis in'),`, bs.e({ tag: 'br' }),
            `    bs.listGroupItem({}, 'Morbi leo risus'),`, bs.e({ tag: 'br' }),
            `    bs.listGroupItem({}, 'Porta ac consectetur ac')`, bs.e({ tag: 'br' }),
            `])`, bs.e({ tag: 'br' }),
            `bs.listGroup({ linkified: true }, [`, bs.e({ tag: 'br' }),
            `    bs.listGroupItemLink({ context: bs.ListGroupItemContext.Success, href: '...' }, 'Cras justo odio'),`,
            bs.e({ tag: 'br' }),
            `    bs.listGroupItemLink({ context: bs.ListGroupItemContext.Info, href: '...' }, 'Dapibus ac facilisis in'),`,
            bs.e({ tag: 'br' }),
            `    bs.listGroupItemLink({ context: bs.ListGroupItemContext.Warning, href: '...' }, 'Morbi leo risus'),`,
            bs.e({ tag: 'br' }),
            `    bs.listGroupItemLink({ context: bs.ListGroupItemContext.Danger, href: '...' }, 'Porta ac consectetur')`,
            bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}

function customContent(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'list-group-custom-content' } }, 'Custom content')),
        bs.e({ style: styles.bsExample }, [
            bs.listGroup({ linkified: true }, [
                bs.listGroupItemLink({ href: 'javascript:void(0)', active: true }, [
                    bs.listGroupItemHeading4({}, 'List group item heading'),
                    bs.listGroupItemText({}, `Donec id elit non mi porta gravida at eget metus. 
                    Maecenas sed diam eget risus varius blandit.`)
                ]),
                bs.listGroupItemLink({ href: 'javascript:void(0)' }, [
                    bs.listGroupItemHeading4({}, 'List group item heading'),
                    bs.listGroupItemText({}, `Donec id elit non mi porta gravida at eget metus. 
                    Maecenas sed diam eget risus varius blandit.`)
                ]),
                bs.listGroupItemLink({ href: 'javascript:void(0)' }, [
                    bs.listGroupItemHeading4({}, 'List group item heading'),
                    bs.listGroupItemText({}, `Donec id elit non mi porta gravida at eget metus. 
                    Maecenas sed diam eget risus varius blandit.`)
                ])
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.listGroup({ linkified: true }, [`, bs.e({ tag: 'br' }),
            `    bs.listGroupItemLink({ href: '...', disabled: true }, [`, bs.e({ tag: 'br' }),
            `        bs.listGroupItemHeading4({}, 'List group item heading'),`, bs.e({ tag: 'br' }),
            `        bs.listGroupItemText({}, '...')`, bs.e({ tag: 'br' }),
            `    ])`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}