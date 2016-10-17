import * as b from 'bobril';
import * as bs from '../../index';
import { styles } from '../bsexample/css';
import { pre, langJs } from '../prettify/pre';
import { section } from '../common/section';

export const pagination = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Pagination',
                id: 'pagination',
                lead: [
                    `Provide pagination links for your site or app with the multi-page pagination component, or the simpler `,
                    b.link(bs.a({}, 'pager alternative'), 'pagination-pager'), `.`
                ]
            },
            [
                paginationDefault(),
                pager()
            ]);
    }
});

function paginationDefault(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'pagination-default' } }, 'Default pagination')),
        bs.p({}, [
            `Simple pagination inspired by Rdio, great for apps and search results. 
            The large block is hard to miss, easily scalable, and provides large click areas.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.pagination({ aria: { label: 'Page navigation' } }, [
                bs.paginationItem(
                    {},
                    bs.a(
                        { href: 'javascript: void(0);', aria: { label: 'Previous' } },
                        bs.span({ aria: { hidden: true } }, '«')
                    )
                ),
                bs.paginationItem({}, bs.a({ href: 'javascript: void(0);' }, '1')),
                bs.paginationItem({}, bs.a({ href: 'javascript: void(0);' }, '2')),
                bs.paginationItem({}, bs.a({ href: 'javascript: void(0);' }, '3')),
                bs.paginationItem({}, bs.a({ href: 'javascript: void(0);' }, '4')),
                bs.paginationItem({}, bs.a({ href: 'javascript: void(0);' }, '5')),
                bs.paginationItem(
                    {},
                    bs.a({ href: 'javascript: void(0);', aria: { label: 'Previous' } }, bs.span({ aria: { hidden: true } }, '»'))
                ),
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.pagination({ aria: { label: 'Page navigation' } }, [`, bs.e({ tag: 'br' }),
            `    bs.paginationItem(`, bs.e({ tag: 'br' }),
            `        {},`, bs.e({ tag: 'br' }),
            `        bs.a(`, bs.e({ tag: 'br' }),
            `            { href: '...;', aria: { label: 'Previous' } },`, bs.e({ tag: 'br' }),
            `            bs.span({ aria: { hidden: true } }, '«')`, bs.e({ tag: 'br' }),
            `        )`, bs.e({ tag: 'br' }),
            `    ),`, bs.e({ tag: 'br' }),
            `    bs.paginationItem({}, bs.a({ href: '...;' }, '1')),`, bs.e({ tag: 'br' }),
            `    bs.paginationItem({}, bs.a({ href: '...;' }, '2')),`, bs.e({ tag: 'br' }),
            `    bs.paginationItem({}, bs.a({ href: '...;' }, '3')),`, bs.e({ tag: 'br' }),
            `    bs.paginationItem({}, bs.a({ href: '...;' }, '4')),`, bs.e({ tag: 'br' }),
            `    bs.paginationItem({}, bs.a({ href: '...;' }, '5')),`, bs.e({ tag: 'br' }),
            `    bs.paginationItem(`, bs.e({ tag: 'br' }),
            `        {},`, bs.e({ tag: 'br' }),
            `        bs.a(`, bs.e({ tag: 'br' }),
            `            { href: '...;', aria: { label: 'Next' } },`, bs.e({ tag: 'br' }),
            `            bs.span({ aria: { hidden: true } }, '»')`, bs.e({ tag: 'br' }),
            `        )`, bs.e({ tag: 'br' }),
            `    ),`, bs.e({ tag: 'br' }),
            `])`, bs.e({ tag: 'br' })
        ]))),
        bs.e({ style: [styles.bsCallout, styles.bsCalloutInfo], attrs: { id: 'callout-pagination-label' } }, [
            bs.h4({}, [`Labelling the pagination component`]),
            bs.p({}, [
                `The pagination component is be wrapped in a `, bs.code({}, '<nav>'), ` element to identify it as a navigation section 
                to screen readers and other assistive technologies. In addition, as a page is likely to have more than one such 
                navigation section already (such as the primary navigation in the header, or a sidebar navigation), it is advisable to 
                provide a descriptive `, bs.code({}, 'aria.label'), ` for the `, bs.code({}, 'bs.pagination'), ` which reflects its 
                purpose.For example, if the pagination component is used to navigate between a set of search results, an appropriate label 
                could be `, bs.code({}, `aria: { label: 'Search results pages' }`), `.`
            ])
        ]),
        bs.h3({ id: 'disabled-and-active-states' }, 'Disabled and active states'),
        bs.p({}, [
            `Links are customizable for different circumstances. Use `, bs.code({}, 'disabled'), ` input data property for unclickable 
            links and `, bs.code({}, 'active'), ` to indicate the current page.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.pagination({ aria: { label: 'Page navigation' } }, [
                bs.paginationItem(
                    { disabled: true },
                    bs.a(
                        { href: 'javascript: void(0);', aria: { label: 'Previous' } },
                        bs.span({ aria: { hidden: true } }, '«')
                    )
                ),
                bs.paginationItem({ active: true }, bs.a({ href: 'javascript: void(0);' }, '1')),
                bs.paginationItem({}, bs.a({ href: 'javascript: void(0);' }, '2')),
                bs.paginationItem({}, bs.a({ href: 'javascript: void(0);' }, '3')),
                bs.paginationItem({}, bs.a({ href: 'javascript: void(0);' }, '4')),
                bs.paginationItem({}, bs.a({ href: 'javascript: void(0);' }, '5')),
                bs.paginationItem(
                    {},
                    bs.a({ href: 'javascript: void(0);', aria: { label: 'Next' } }, bs.span({ aria: { hidden: true } }, '»'))
                ),
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.pagination({ aria: { label: 'Page navigation' } }, [`, bs.e({ tag: 'br' }),
            `    bs.paginationItem(`, bs.e({ tag: 'br' }),
            `        { disabled: true },`, bs.e({ tag: 'br' }),
            `        bs.a(`, bs.e({ tag: 'br' }),
            `            { href: '...;', aria: { label: 'Previous' } },`, bs.e({ tag: 'br' }),
            `            bs.span({ aria: { hidden: true } }, '«')`, bs.e({ tag: 'br' }),
            `        )`, bs.e({ tag: 'br' }),
            `    ),`, bs.e({ tag: 'br' }),
            `    bs.paginationItem({ active: true }, bs.a({ href: '...;' }, '1')),`, bs.e({ tag: 'br' }),
            `    bs.paginationItem({}, bs.a({ href: '...;' }, '2')),`, bs.e({ tag: 'br' }),
            `    bs.paginationItem({}, bs.a({ href: '...;' }, '3')),`, bs.e({ tag: 'br' }),
            `    bs.paginationItem({}, bs.a({ href: '...;' }, '4')),`, bs.e({ tag: 'br' }),
            `    bs.paginationItem({}, bs.a({ href: '...;' }, '5')),`, bs.e({ tag: 'br' }),
            `    bs.paginationItem(`, bs.e({ tag: 'br' }),
            `        {},`, bs.e({ tag: 'br' }),
            `        bs.a(`, bs.e({ tag: 'br' }),
            `            { href: '...;', aria: { label: 'Next' } },`, bs.e({ tag: 'br' }),
            `            bs.span({ aria: { hidden: true } }, '»')`, bs.e({ tag: 'br' }),
            `        )`, bs.e({ tag: 'br' }),
            `    ),`, bs.e({ tag: 'br' }),
            `])`, bs.e({ tag: 'br' })
        ]))),
        bs.h3({ id: 'sizing' }, 'Sizing'),
        bs.p({}, [
            `Fancy larger or smaller pagination? Set the `, bs.code({}, 'size'), `input data property for additional sizes.`
        ]),
        bs.e({ style: styles.bsExample }, [
            bs.pagination({ size: bs.PaginationSize.Lg, aria: { label: 'Page navigation' } }, [
                bs.paginationItem(
                    bs.a(
                        { href: 'javascript: void(0);', aria: { label: 'Previous' } },
                        bs.span({ aria: { hidden: true } }, '«')
                    )
                ),
                bs.paginationItem({}, bs.a({ href: 'javascript: void(0);' }, '1')),
                bs.paginationItem({}, bs.a({ href: 'javascript: void(0);' }, '2')),
                bs.paginationItem({}, bs.a({ href: 'javascript: void(0);' }, '3')),
                bs.paginationItem({}, bs.a({ href: 'javascript: void(0);' }, '4')),
                bs.paginationItem({}, bs.a({ href: 'javascript: void(0);' }, '5')),
                bs.paginationItem(
                    {},
                    bs.a({ href: 'javascript: void(0);', aria: { label: 'Next' } }, bs.span({ aria: { hidden: true } }, '»'))
                ),
            ]),
            bs.pagination({ aria: { label: 'Page navigation' } }, [
                bs.paginationItem(
                    bs.a(
                        { href: 'javascript: void(0);', aria: { label: 'Previous' } },
                        bs.span({ aria: { hidden: true } }, '«')
                    )
                ),
                bs.paginationItem({}, bs.a({ href: 'javascript: void(0);' }, '1')),
                bs.paginationItem({}, bs.a({ href: 'javascript: void(0);' }, '2')),
                bs.paginationItem({}, bs.a({ href: 'javascript: void(0);' }, '3')),
                bs.paginationItem({}, bs.a({ href: 'javascript: void(0);' }, '4')),
                bs.paginationItem({}, bs.a({ href: 'javascript: void(0);' }, '5')),
                bs.paginationItem(
                    {},
                    bs.a({ href: 'javascript: void(0);', aria: { label: 'Next' } }, bs.span({ aria: { hidden: true } }, '»'))
                ),
            ]),
            bs.pagination({ size: bs.PaginationSize.Sm, aria: { label: 'Page navigation' } }, [
                bs.paginationItem(
                    bs.a(
                        { href: 'javascript: void(0);', aria: { label: 'Previous' } },
                        bs.span({ aria: { hidden: true } }, '«')
                    )
                ),
                bs.paginationItem({}, bs.a({ href: 'javascript: void(0);' }, '1')),
                bs.paginationItem({}, bs.a({ href: 'javascript: void(0);' }, '2')),
                bs.paginationItem({}, bs.a({ href: 'javascript: void(0);' }, '3')),
                bs.paginationItem({}, bs.a({ href: 'javascript: void(0);' }, '4')),
                bs.paginationItem({}, bs.a({ href: 'javascript: void(0);' }, '5')),
                bs.paginationItem(
                    {},
                    bs.a({ href: 'javascript: void(0);', aria: { label: 'Next' } }, bs.span({ aria: { hidden: true } }, '»'))
                ),
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.pagination({ aria: { label: '...' }, size: bs.PaginationSize.Lg }, [...])`, bs.e({ tag: 'br' }),
            `bs.pagination({ aria: { label: '...' } }, [...])`, bs.e({ tag: 'br' }),
            `bs.pagination({ aria: { label: '...' }, size: bs.PaginationSize.Sm }, [...])`, bs.e({ tag: 'br' }),
        ])))
    ];
}

function pager(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'pagination-pager' } }, 'Pager')),
        bs.p({}, [
            `Quick previous and next links for simple pagination implementations with light markup and styles. 
            It's great for simple sites like blogs or magazines.`
        ]),
        bs.h3({ id: 'default-example' }, 'Default example'),
        bs.p({}, [`By default, the pager centers links.`]),
        bs.e({ style: styles.bsExample }, [
            bs.pager({ aria: { label: '...' } }, [
                bs.pagerItem({}, bs.a({ href: 'javascript: void(0);', aria: { label: 'Previous' } }, 'Previous')), ' ',
                bs.pagerItem({}, bs.a({ href: 'javascript: void(0);', aria: { label: 'Next' } }, 'Next'))
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.pager({ aria: { label: '...' } }, [`, bs.e({ tag: 'br' }),
            `    bs.pagerItem({}, bs.a({ href: '...;', aria: { label: 'Previous' } }, 'Previous')), ' ',`,
            bs.e({ tag: 'br' }),
            `    bs.pagerItem({}, bs.a({ href: '...;', aria: { label: 'Next' } }, 'Next'))`, bs.e({ tag: 'br' }),
            `])`
        ]))),
        bs.h3({ id: 'aligned-links' }, 'Aligned links'),
        bs.p({}, [`Alternatively, you can align each link to the sides:`]),
        bs.e({ style: styles.bsExample }, [
            bs.pager({ aria: { label: '...' } }, [
                bs.pagerItem(
                    { alignment: bs.PagerItemAlignment.Previous },
                    bs.a({ href: 'javascript: void(0);' }, [bs.span({ aria: { hidden: true } }, '←'), ' Older'])
                ),
                bs.pagerItem(
                    { alignment: bs.PagerItemAlignment.Next },
                    bs.a({ href: 'javascript: void(0);' }, ['Newer ', bs.span({ aria: { hidden: true } }, ' →')])
                )
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.pager({ aria: { label: '...' } }, [`, bs.e({ tag: 'br' }),
            `    bs.pagerItem(`, bs.e({ tag: 'br' }),
            `        { alignment: bs.PagerItemAlignment.Previous }, `, bs.e({ tag: 'br' }),
            `        bs.a({ href: '...;' }, [bs.span({ aria: { hidden: true } }, '←'), 'Older '])`, bs.e({ tag: 'br' }),
            `    ), `, bs.e({ tag: 'br' }),
            `    bs.pagerItem(`, bs.e({ tag: 'br' }),
            `        { alignment: bs.PagerItemAlignment.Next }, `, bs.e({ tag: 'br' }),
            `        bs.a({ href: '...;' }, ['Newer ', bs.span({ aria: { hidden: true } }, ' →')])`, bs.e({ tag: 'br' }),
            `    ) `, bs.e({ tag: 'br' }),
            `]) `
        ]))),
        bs.h3({ id: 'optional-disabled-state' }, 'Optional disabled state'),
        bs.p({}, [`Pager links also use the `, bs.code({}, 'disabled'), ` input data property.`]),
        bs.e({ style: styles.bsExample }, [
            bs.pager({ aria: { label: '...' } }, [
                bs.pagerItem(
                    { alignment: bs.PagerItemAlignment.Previous, disabled: true },
                    bs.a({ href: 'javascript: void(0);' }, [bs.span({ aria: { hidden: true } }, '←'), ' Older'])
                ),
                bs.pagerItem(
                    { alignment: bs.PagerItemAlignment.Next },
                    bs.a({ href: 'javascript: void(0);' }, ['Newer ', bs.span({ aria: { hidden: true } }, ' →')])
                )
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.pager({ aria: { label: '...' } }, [`, bs.e({ tag: 'br' }),
            `    bs.pagerItem(`, bs.e({ tag: 'br' }),
            `        { alignment: bs.PagerItemAlignment.Previous, disabled: true }, `, bs.e({ tag: 'br' }),
            `        bs.a({ href: '...;' }, [bs.span({ aria: { hidden: true } }, '←'), 'Older '])`, bs.e({ tag: 'br' }),
            `    ), `, bs.e({ tag: 'br' }),
            `    bs.pagerItem(`, bs.e({ tag: 'br' }),
            `        { alignment: bs.PagerItemAlignment.Next }, `, bs.e({ tag: 'br' }),
            `        bs.a({ href: '...;' }, ['Newer ', bs.span({ aria: { hidden: true } }, ' →')])`, bs.e({ tag: 'br' }),
            `    ) `, bs.e({ tag: 'br' }),
            `]) `
        ])))
    ];
}