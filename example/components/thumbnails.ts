import * as b from 'bobril';
import * as bs from '../../index';
import { styles } from '../bsexample/css';
import { pre, langJs } from '../prettify/pre';
import { section } from '../common/section';

const imageData = `data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh
0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTcxIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDE3MSAxODAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjw
hLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MTgwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYyk
gMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTU3Yzc3ZGN
lNTEgdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWN
lO2ZvbnQtc2l6ZToxMHB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xNTdjNzdkY2U1MSI+PHJlY3Qgd2lkdGg9IjE3MSIgaGVpZ2h0PSIxODAiIGZpbGw9IiN
FRUVFRUUiLz48Zz48dGV4dCB4PSI2MSIgeT0iOTQuNSI+MTcxeDE4MDwvdGV4dD48L2c+PC9nPjwvc3ZnPg==`;

const imageData2 = `data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Im
h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjQyIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDI0MiAyMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPj
whLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MjAwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYy
kgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTU3Yzc3ZG
YxODMgdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYW
NlO2ZvbnQtc2l6ZToxMnB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xNTdjNzdkZjE4MyI+PHJlY3Qgd2lkdGg9IjI0MiIgaGVpZ2h0PSIyMDAiIGZpbGw9Ii
NFRUVFRUUiLz48Zz48dGV4dCB4PSI4OS44NTkzNzUiIHk9IjEwNS4xIj4yNDJ4MjAwPC90ZXh0PjwvZz48L2c+PC9zdmc+`;

export const thumbnails = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Thumbnails',
                id: 'thumbnails',
                lead: [
                    `Extend Bobrilstrap's `, b.link(bs.a({}, 'grid system'), 'grid'),
                    ` with the thumbnail component to easily display grids of images, videos, text, and more.`
                ]
            },
            [
                example()
            ]);
    }
});

function example(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'thumbnails-default' } }, 'Default example')),
        bs.p({}, `By default, Bootstrap's thumbnails are designed to showcase linked images with minimal required markup.`),
        bs.e({ style: styles.bsExample }, [
            bs.row({}, [
                bs.col({ cols: [{ size: bs.Size.Xs, span: 6 }, { size: bs.Size.Md, span: 3 }] }, [
                    bs.a({ href: 'javascript:void(0)', style: bs.helpers.thumbnail }, bs.image({ src: imageData }))
                ]),
                bs.col({ cols: [{ size: bs.Size.Xs, span: 6 }, { size: bs.Size.Md, span: 3 }] }, [
                    bs.a({ href: 'javascript:void(0)', style: bs.helpers.thumbnail }, bs.image({ src: imageData }))
                ]),
                bs.col({ cols: [{ size: bs.Size.Xs, span: 6 }, { size: bs.Size.Md, span: 3 }] }, [
                    bs.a({ href: 'javascript:void(0)', style: bs.helpers.thumbnail }, bs.image({ src: imageData }))
                ]),
                bs.col({ cols: [{ size: bs.Size.Xs, span: 6 }, { size: bs.Size.Md, span: 3 }] }, [
                    bs.a({ href: 'javascript:void(0)', style: bs.helpers.thumbnail }, bs.image({ src: imageData }))
                ])
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.row({}, [`, bs.e({ tag: 'br' }),
            `    bs.col({ cols: [{ size: bs.Size.Xs, span: 6 }, { size: bs.Size.Md, span: 3 }] }, [`, bs.e({ tag: 'br' }),
            `        bs.a({ href: '...', style: bs.helpers.thumbnail }, bs.image({ src: imageData }))`, bs.e({ tag: 'br' }),
            `    ])`, bs.e({ tag: 'br' }),
            `])`
        ]))),

        b.anchor(bs.h2({ attrs: { id: 'thumbnails-custom-content' } }, 'Custom content')),
        bs.p({}, `With a bit of extra markup, it's possible to add any kind of HTML content like headings, 
        paragraphs, or buttons into thumbnails.`),
        bs.e({ style: styles.bsExample }, [
            bs.row({}, [
                bs.col({ cols: [{ size: bs.Size.Sm, span: 6 }, { size: bs.Size.Md, span: 4 }] }, [
                    bs.e({ tag: 'div', style: bs.helpers.thumbnail }, [
                        bs.image({ src: imageData2 }),
                        bs.e({ tag: 'div', style: bs.helpers.caption }, [
                            bs.h3({}, 'Thumbnail label'),
                            bs.p({}, 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at '
                                + 'eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'),
                            bs.p({}, [
                                bs.button({ tag: bs.ButtonTag.A, option: bs.ButtonOption.Primary, label: 'Button' }), ' ',
                                bs.button({ tag: bs.ButtonTag.A, label: 'Button' })
                            ])
                        ])
                    ])
                ]),
                bs.col({ cols: [{ size: bs.Size.Sm, span: 6 }, { size: bs.Size.Md, span: 4 }] }, [
                    bs.e({ tag: 'div', style: bs.helpers.thumbnail }, [
                        bs.image({ src: imageData2 }),
                        bs.e({ tag: 'div', style: bs.helpers.caption }, [
                            bs.h3({}, 'Thumbnail label'),
                            bs.p({}, 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at '
                                + 'eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'),
                            bs.p({}, [
                                bs.button({ tag: bs.ButtonTag.A, option: bs.ButtonOption.Primary, label: 'Button' }), ' ',
                                bs.button({ tag: bs.ButtonTag.A, label: 'Button' })
                            ])
                        ])
                    ])
                ]),
                bs.col({ cols: [{ size: bs.Size.Sm, span: 6 }, { size: bs.Size.Md, span: 4 }] }, [
                    bs.e({ tag: 'div', style: bs.helpers.thumbnail }, [
                        bs.image({ src: imageData2 }),
                        bs.e({ tag: 'div', style: bs.helpers.caption }, [
                            bs.h3({}, 'Thumbnail label'),
                            bs.p({}, 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at '
                                + 'eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'),
                            bs.p({}, [
                                bs.button({ tag: bs.ButtonTag.A, option: bs.ButtonOption.Primary, label: 'Button' }), ' ',
                                bs.button({ tag: bs.ButtonTag.A, label: 'Button' })
                            ])
                        ])
                    ])
                ])
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.row({}, [`, bs.e({ tag: 'br' }),
            `    bs.col({ cols: [{ size: bs.Size.Sm, span: 6 }, { size: bs.Size.Md, span: 4 }] }, [`, bs.e({ tag: 'br' }),
            `        bs.e({ tag: 'div', style: bs.helpers.thumbnail }, [`, bs.e({ tag: 'br' }),
            `            bs.image({ src: imageData2 }),`, bs.e({ tag: 'br' }),
            `            bs.e({ tag: 'div', style: bs.helpers.caption }, [`, bs.e({ tag: 'br' }),
            `                bs.h3({}, 'Thumbnail label'),`, bs.e({ tag: 'br' }),
            `                bs.p({}, '...')`, bs.e({ tag: 'br' }),
            `                bs.p({}, [`, bs.e({ tag: 'br' }),
            `                   bs.button({ tag: bs.ButtonTag.A, option: bs.ButtonOption.Primary, label: 'Button' }),`, bs.e({ tag: 'br' }),
            `                   ' ',`, bs.e({ tag: 'br' }),
            `                   bs.button({ tag: bs.ButtonTag.A, label: 'Button' })`, bs.e({ tag: 'br' }),
            `                ])`, bs.e({ tag: 'br' }),
            `            ])`, bs.e({ tag: 'br' }),
            `        ])`, bs.e({ tag: 'br' }),
            `    ])`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}
