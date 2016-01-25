import * as b from 'bobril';
import * as bsCore from 'bobrilstrap-core';
import container from 'bobrilstrap-container';
import elem from 'bobrilstrap-element';
import typography from './index';

bsCore.init();

b.init(() => [
    container({}, [
        elem({ tag: 'h1' }, 'h1. Bootstrap heading'),
        elem({ tag: 'h2' }, 'h2. Bootstrap heading'),
        elem({ tag: 'h3' }, 'h3. Bootstrap heading'),
        elem({ tag: 'h4' }, 'h4. Bootstrap heading'),
        elem({ tag: 'h5' }, 'h5. Bootstrap heading'),
        elem({ tag: 'h6' }, 'h6. Bootstrap heading'),

        elem({ tag: 'h1' }, ['h1. Bootstrap heading', elem({ tag: 'small' }, 'Secondary text')]),
        elem({ tag: 'h2' }, ['h2. Bootstrap heading', elem({ tag: 'small' }, 'Secondary text')]),
        elem({ tag: 'h3' }, ['h3. Bootstrap heading', elem({ tag: 'small' }, 'Secondary text')]),
        elem({ tag: 'h4' }, ['h4. Bootstrap heading', elem({ tag: 'small' }, 'Secondary text')]),
        elem({ tag: 'h5' }, ['h5. Bootstrap heading', elem({ tag: 'small' }, 'Secondary text')]),
        elem({ tag: 'h6' }, ['h6. Bootstrap heading', elem({ tag: 'small' }, 'Secondary text')]),

        elem({ tag: 'p' }, 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.'),
        elem({ tag: 'p', styles: typography.lead },
             'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Duis mollis, est non commodo luctus.'
        ),

        elem({ tag: 'p' }, ['You can use the mark tag to ', elem({ tag: 'mark' }, 'highlight'), ' text.']),
        elem({ tag: 'p' }, elem({ tag: 's' }, 'This line of text is meant to be treated as no longer accurate.')),
        elem({ tag: 'p' }, elem({ tag: 'u' }, 'This line of text will render as underlined')),
        elem({ tag: 'p' }, elem({ tag: 'small' }, 'This line of text is meant to be treated as fine print.')),
        elem({ tag: 'p' }, elem({ tag: 'strong' }, 'rendered as bold text')),
        elem({ tag: 'p' }, elem({ tag: 'im' }, 'rendered as italicized text')),

        elem({ tag: 'p', styles: typography.textLeft }, 'Left aligned text.'),
        elem({ tag: 'p', styles: typography.textCenter }, 'Center aligned text.'),
        elem({ tag: 'p', styles: typography.textRight }, 'Right aligned text.'),
        elem({ tag: 'p', styles: typography.textJustify }, 'Justified text.'),
        elem({ tag: 'p', styles: typography.textNowrap }, 'No wrap text.'),

        elem({ tag: 'p', styles: typography.textLowercase }, 'Lowercased text.'),
        elem({ tag: 'p', styles: typography.textUppercase }, 'Uppercased text.'),
        elem({ tag: 'p', styles: typography.textCapitalize }, 'Capitalized text.'),

        elem({ tag: 'p' }, elem({ tag: 'abbr', attrs: { title: 'attribute' } }, 'attr')),
        elem({ tag: 'p' },
             elem({ tag: 'abbr', attrs: { title: 'attribute' }, styles: typography.initialism }, 'HyperText Markup Language')
        ),

        elem({ tag: 'address' }, [
            elem({ tag: 'strong' }, 'Twitter, Inc'), elem({ tag: 'br' }),
            '1355 Market Street, Suite 900', elem({ tag: 'br' }),
            'San Francisco, CA 94103', elem({ tag: 'br' }),
            elem({ tag: 'abbr', attrs: { title: 'Phone' } }, 'P:'), '(123) 456-7890', elem({ tag: 'br' })
        ]),
        elem({ tag: 'address' }, [
            elem({ tag: 'strong' }, 'Full Name'), elem({ tag: 'br' }),
            '1355 Market Street, Suite 900', elem({ tag: 'br' }),
            elem({ tag: 'a', attrs: { href: 'mailto:#' } }, 'first.last@example.com')
        ]),

        elem({ tag: 'blockquote' }, elem({ tag: 'p' }, `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Integer posuere erat a ante.`)),
        elem({ tag: 'blockquote' }, [
            elem({ tag: 'p' }, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'),
            elem({ tag: 'footer' }, ['Someone famous in ', elem({ tag: 'cite', attrs: { title: 'Source Title' } }, 'Source Title')])
        ]),
        elem({ tag: 'blockquote', styles: typography.blockquoteReverse },
             elem({ tag: 'p' }, `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.`)
        ),

        elem({ tag: 'ul' }, [
            elem({ tag: 'li' }, 'Lorem ipsum dolor sit amet'),
            elem({ tag: 'li' }, 'Consectetur adipiscing elit'),
            elem({ tag: 'li' }, 'Integer molestie lorem at massa'),
            elem({ tag: 'li' }, 'Facilisis in pretium nisl aliquet'),
            elem({ tag: 'li' }, [
                'Nulla volutpat aliquam velit',
                elem({ tag: 'ul' }, [
                    elem({ tag: 'li' }, 'Phasellus iaculis neque'),
                    elem({ tag: 'li' }, 'Purus sodales ultricies'),
                    elem({ tag: 'li' }, 'Vestibulum laoreet porttitor sem'),
                    elem({ tag: 'li' }, 'Ac tristique libero volutpat at'),
                ])
            ]),
            elem({ tag: 'li' }, 'Faucibus porta lacus fringilla vel'),
            elem({ tag: 'li' }, 'Aenean sit amet erat nunc'),
            elem({ tag: 'li' }, 'Eget porttitor lorem')
        ]),
        elem({ tag: 'ol' }, [
            elem({ tag: 'li' }, 'Lorem ipsum dolor sit amet'),
            elem({ tag: 'li' }, 'Consectetur adipiscing elit'),
            elem({ tag: 'li' }, 'Integer molestie lorem at massa'),
            elem({ tag: 'li' }, 'Facilisis in pretium nisl aliquet'),
            elem({ tag: 'li' }, 'Nulla volutpat aliquam velit'),
            elem({ tag: 'li' }, 'Faucibus porta lacus fringilla vel'),
            elem({ tag: 'li' }, 'Aenean sit amet erat nunc'),
            elem({ tag: 'li' }, 'Eget porttitor lorem'),
        ]),
        elem({ tag: 'ul', styles: typography.listUnstyled }, [
            elem({ tag: 'li' }, 'Lorem ipsum dolor sit amet'),
            elem({ tag: 'li' }, 'Consectetur adipiscing elit'),
            elem({ tag: 'li' }, 'Integer molestie lorem at massa'),
            elem({ tag: 'li' }, 'Facilisis in pretium nisl aliquet'),
            elem({ tag: 'li' }, [
                'Nulla volutpat aliquam velit',
                elem({ tag: 'ul' }, [
                    elem({ tag: 'li' }, 'Phasellus iaculis neque'),
                    elem({ tag: 'li' }, 'Purus sodales ultricies'),
                    elem({ tag: 'li' }, 'Vestibulum laoreet porttitor sem'),
                    elem({ tag: 'li' }, 'Ac tristique libero volutpat at'),
                ])
            ]),
            elem({ tag: 'li' }, 'Faucibus porta lacus fringilla vel'),
            elem({ tag: 'li' }, 'Aenean sit amet erat nunc'),
            elem({ tag: 'li' }, 'Eget porttitor lorem')
        ]),
        elem({ tag: 'ul', styles: typography.listInline }, [
            elem({ tag: 'li' }, 'Lorem ipsum dolor sit amet'),
            elem({ tag: 'li' }, 'Consectetur adipiscing elit'),
            elem({ tag: 'li' }, 'Integer molestie lorem at massa')
        ]),

        elem({ tag: 'dl' }, [
            elem({ tag: 'dt' }, 'Description lists'),
            elem({ tag: 'dd' }, 'A description list is perfect for defining terms.'),

            elem({ tag: 'dt' }, 'Euismod'),
            elem({ tag: 'dd' }, 'Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.'),
            elem({ tag: 'dd' }, 'Donec id elit non mi porta gravida at eget metus.'),

            elem({ tag: 'dt' }, 'Malesuada porta'),
            elem({ tag: 'dd' }, 'Etiam porta sem malesuada magna mollis euismod.')
        ]),

        elem({ tag: 'dl', styles: typography.dlHorizontal }, [
            elem({ tag: 'dt' }, 'Description lists'),
            elem({ tag: 'dd' }, 'A description list is perfect for defining terms.'),

            elem({ tag: 'dt' }, 'Euismod'),
            elem({ tag: 'dd' }, 'Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.'),
            elem({ tag: 'dd' }, 'Donec id elit non mi porta gravida at eget metus.'),

            elem({ tag: 'dt' }, 'Malesuada porta'),
            elem({ tag: 'dd' }, 'Etiam porta sem malesuada magna mollis euismod.')
        ])
    ])
]);
