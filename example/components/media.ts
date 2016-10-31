import * as b from 'bobril';
import * as bs from '../../index';
import { styles } from '../bsexample/css';
import { pre, langJs } from '../prettify/pre';
import { section } from '../common/section';

const imageData = `data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1
sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0
ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGV
yanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEF
bI2hvbGRlcl8xNTgwNjU4YjE4NyB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5
zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1ODA2NThiMTg3Ij48cmVjdCB3aWR
0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxNCIgeT0iMzYuNSI+NjR4NjQ8L3RleHQ+PC9nPjwvZz48L3N2Zz4=`;

export const media = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Media',
                id: 'media',
                lead: [`Components for building various types of components (like blog comments, Tweets, etc) that feature a 
                left- or right-aligned image alongside textual content.`]
            },
            [
                defaultMedia(),
                mediaList()
            ]);
    }
});

function defaultMedia(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'media-default' } }, 'Default media')),
        bs.p({}, `The default media displays a media object (images, video, audio) to the left or right of a content block.`),
        bs.e({ style: styles.bsExample }, [
            bs.media({}, [
                bs.mediaContent({ alignment: bs.MediaContentAlignment.Left }, [
                    bs.a({ href: 'javascript:void(0)' }, bs.image({ style: bs.mediaStyles.mediaObject, src: imageData }))
                ]),
                bs.mediaContent({ alignment: bs.MediaContentAlignment.Body }, [
                    bs.mediaHeading4({}, 'Media heading'),
                    `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, 
                    vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia 
                    congue felis in faucibus.`
                ])
            ]),
            bs.media({}, [
                bs.mediaContent({ alignment: bs.MediaContentAlignment.Left }, [
                    bs.a({ href: 'javascript:void(0)' }, bs.image({ style: bs.mediaStyles.mediaObject, src: imageData }))
                ]),
                bs.mediaContent({ alignment: bs.MediaContentAlignment.Body }, [
                    bs.mediaHeading4({}, 'Media heading'),
                    `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, 
                    vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia 
                    congue felis in faucibus.`,
                    bs.media({}, [
                        bs.mediaContent({ alignment: bs.MediaContentAlignment.Left }, [
                            bs.a({ href: 'javascript:void(0)' }, bs.image({ style: bs.mediaStyles.mediaObject, src: imageData }))
                        ]),
                        bs.mediaContent({ alignment: bs.MediaContentAlignment.Body }, [
                            bs.mediaHeading4({}, 'Media heading'),
                            `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras 
                            purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate 
                            fringilla. Donec lacinia congue felis in faucibus.`
                        ])
                    ])
                ])
            ]),
            bs.media({}, [
                bs.mediaContent({ alignment: bs.MediaContentAlignment.Body }, [
                    bs.mediaHeading4({}, 'Media heading'),
                    `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, 
                    vestibulum in vulputate at, tempus viverra turpis.`
                ]),
                bs.mediaContent({ alignment: bs.MediaContentAlignment.Right }, [
                    bs.a({ href: 'javascript:void(0)' }, bs.image({ style: bs.mediaStyles.mediaObject, src: imageData }))
                ])
            ]),
            bs.media({}, [
                bs.mediaContent({ alignment: bs.MediaContentAlignment.Left }, [
                    bs.a({ href: 'javascript:void(0)' }, bs.image({
                        style: bs.mediaStyles.mediaObject,
                        src: imageData
                    }))
                ]),
                bs.mediaContent({ alignment: bs.MediaContentAlignment.Body }, [
                    bs.mediaHeading4({}, 'Media heading'),
                    `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, 
                    vestibulum in vulputate at, tempus viverra turpis.`
                ]),
                bs.mediaContent({ alignment: bs.MediaContentAlignment.Right }, [
                    bs.a({ href: 'javascript:void(0)' }, bs.image({
                        style: bs.mediaStyles.mediaObject,
                        src: imageData
                    }))
                ])
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.media({}, [`, bs.e({ tag: 'br' }),
            `    bs.mediaContent({ alignment: bs.MediaContentAlignment.Left }, [`, bs.e({ tag: 'br' }),
            `        bs.a({ href: '...' }, bs.image({`, bs.e({ tag: 'br' }),
            `            style: bs.mediaStyles.mediaObject, `, bs.e({ tag: 'br' }),
            `            src: '...'`, bs.e({ tag: 'br' }),
            `        }))`, bs.e({ tag: 'br' }),
            `    ]),`, bs.e({ tag: 'br' }),
            `    bs.mediaContent({ alignment: bs.MediaContentAlignment.Body }, [`, bs.e({ tag: 'br' }),
            `        bs.mediaHeading4({}, 'Media heading'),`, bs.e({ tag: 'br' }),
            `        ...`, bs.e({ tag: 'br' }),
            `    ]),`, bs.e({ tag: 'br' }),
            `    bs.mediaContent({ alignment: bs.MediaContentAlignment.Right }, [`, bs.e({ tag: 'br' }),
            `        bs.a({ href: '...' }, bs.image({`, bs.e({ tag: 'br' }),
            `            style: bs.mediaStyles.mediaObject,`, bs.e({ tag: 'br' }),
            `            src: '...'`, bs.e({ tag: 'br' }),
            `        }))`, bs.e({ tag: 'br' }),
            `    ])`, bs.e({ tag: 'br' }),
            `])`
        ]))),
        bs.h2({ attrs: { id: 'media-alignment' } }, 'Media alignment'),
        bs.p({}, 'The images or other media can be aligned top, middle, or bottom. The default is top aligned.'),
        bs.e({ style: styles.bsExample }, [
            bs.media({}, [
                bs.mediaContent({ alignment: bs.MediaContentAlignment.Left }, [
                    bs.a({ href: 'javascript:void(0)' }, bs.image({
                        style: bs.mediaStyles.mediaObject,
                        src: imageData
                    }))
                ]),
                bs.mediaContent({ alignment: bs.MediaContentAlignment.Body }, [
                    bs.mediaHeading4({}, 'Top aligned media'),
                    bs.p({}, `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. 
                    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. 
                    Donec lacinia congue felis in faucibus.`),
                    bs.p({}, `Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus 
                    et magnis dis parturient montes, nascetur ridiculus mus.`)
                ])
            ]),
            bs.media({}, [
                bs.mediaContent({ alignment: [bs.MediaContentAlignment.Left, bs.MediaContentAlignment.Middle] }, [
                    bs.a({ href: 'javascript:void(0)' }, bs.image({
                        style: bs.mediaStyles.mediaObject,
                        src: imageData
                    }))
                ]),
                bs.mediaContent({ alignment: bs.MediaContentAlignment.Body }, [
                    bs.mediaHeading4({}, 'Middle aligned media'),
                    bs.p({}, `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. 
                    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. 
                    Donec lacinia congue felis in faucibus.`),
                    bs.p({}, `Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus 
                    et magnis dis parturient montes, nascetur ridiculus mus.`)
                ])
            ]),
            bs.media({}, [
                bs.mediaContent({ alignment: [bs.MediaContentAlignment.Left, bs.MediaContentAlignment.Bottom] }, [
                    bs.a({ href: 'javascript:void(0)' }, bs.image({
                        style: bs.mediaStyles.mediaObject,
                        src: imageData
                    }))
                ]),
                bs.mediaContent({ alignment: bs.MediaContentAlignment.Body }, [
                    bs.mediaHeading4({}, 'Bottom aligned media'),
                    bs.p({}, `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. 
                    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. 
                    Donec lacinia congue felis in faucibus.`),
                    bs.p({}, `Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus 
                    et magnis dis parturient montes, nascetur ridiculus mus.`)
                ])
            ])
        ]),

        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.media({}, [`, bs.e({ tag: 'br' }),
            `    bs.mediaContent({ alignment: [bs.MediaContentAlignment.Left, bs.MediaContentAlignment.Middle] }, [`, bs.e({ tag: 'br' }),
            `        bs.a({ href: '...' }, bs.image({`, bs.e({ tag: 'br' }),
            `            style: bs.mediaStyles.mediaObject, `, bs.e({ tag: 'br' }),
            `            src: '...'`, bs.e({ tag: 'br' }),
            `        }))`, bs.e({ tag: 'br' }),
            `    ]),`, bs.e({ tag: 'br' }),
            `    bs.mediaContent({ alignment: bs.MediaContentAlignment.Body }, [`, bs.e({ tag: 'br' }),
            `        bs.mediaHeading4({}, 'Middle aligned media'),`, bs.e({ tag: 'br' }),
            `        ...`, bs.e({ tag: 'br' }),
            `    ])`, bs.e({ tag: 'br' }),
            `])`
        ]))),
    ];
}

function mediaList(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'media-list' } }, 'Media List')),
        bs.p({}, `With a bit of extra code, you can use media inside list (useful for comment threads or articles lists).`),
        bs.e({ style: styles.bsExample }, [
            bs.ul({ style: bs.mediaStyles.mediaList }, [
                bs.li({ style: bs.media }, [
                    bs.mediaContent({ alignment: bs.MediaContentAlignment.Left }, [
                        bs.a({ href: 'javascript:void(0)' }, bs.image({
                            style: bs.mediaStyles.mediaObject,
                            src: imageData
                        }))
                    ]),
                    bs.mediaContent({ alignment: bs.MediaContentAlignment.Body }, [
                        bs.mediaHeading4({}, 'Media heading'),
                        bs.p({}, `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. 
                        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.`),
                        bs.media({}, [
                            bs.mediaContent({ alignment: bs.MediaContentAlignment.Left }, [
                                bs.a({ href: 'javascript:void(0)' }, bs.image({
                                    style: bs.mediaStyles.mediaObject,
                                    src: imageData
                                }))
                            ]),
                            bs.mediaContent({ alignment: bs.MediaContentAlignment.Body }, [
                                bs.mediaHeading4({}, 'Nested media heading'),
                                bs.p({}, `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin 
                                commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.`),
                                bs.media({}, [
                                    bs.mediaContent({ alignment: bs.MediaContentAlignment.Left }, [
                                        bs.a({ href: 'javascript:void(0)' }, bs.image({
                                            style: bs.mediaStyles.mediaObject,
                                            src: imageData
                                        }))
                                    ]),
                                    bs.mediaContent({ alignment: bs.MediaContentAlignment.Body }, [
                                        bs.mediaHeading4({}, 'Nested media heading'),
                                        bs.p({}, `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante 
                                        sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.`)
                                    ])
                                ])
                            ])
                        ]),
                        bs.media({}, [
                            bs.mediaContent({ alignment: bs.MediaContentAlignment.Left }, [
                                bs.a({ href: 'javascript:void(0)' }, bs.image({
                                    style: bs.mediaStyles.mediaObject,
                                    src: imageData
                                }))
                            ]),
                            bs.mediaContent({ alignment: bs.MediaContentAlignment.Body }, [
                                bs.mediaHeading4({}, 'Nested media heading'),
                                bs.p({}, `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin 
                                commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.`)
                            ])
                        ])
                    ])
                ])
            ])
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.ul({ style: bs.mediaStyles.mediaList }, [`, bs.e({ tag: 'br' }),
            `    bs.li({ style: bs.media }, [`, bs.e({ tag: 'br' }),
            `        bs.mediaContent({ alignment: bs.MediaContentAlignment.Left }, [`, bs.e({ tag: 'br' }),
            `            bs.a({ href: 'javascript:void(0)' }, bs.image({`, bs.e({ tag: 'br' }),
            `                style: bs.mediaStyles.mediaObject,`, bs.e({ tag: 'br' }),
            `                src: '...'`, bs.e({ tag: 'br' }),
            `            }))`, bs.e({ tag: 'br' }),
            `        ]),`, bs.e({ tag: 'br' }),
            `       bs.mediaContent({ alignment: bs.MediaContentAlignment.Body }, [`, bs.e({ tag: 'br' }),
            `            bs.mediaHeading4({}, 'Media heading'),`, bs.e({ tag: 'br' }),
            `            ...`, bs.e({ tag: 'br' }),
            `        ])`, bs.e({ tag: 'br' }),
            `    ])`, bs.e({ tag: 'br' }),
            `])`
        ])))
    ];
}