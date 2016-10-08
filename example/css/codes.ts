import * as b from 'bobril';
import * as bs from '../../index';
import { styles } from '../bsexample/css';
import { pre,  langJs } from '../prettify/pre';
import { section } from '../common/section';

export const codes = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Code',
                id: 'code'
            },
            [
                inline(),
                userInput(),
                basicBlock(),
                variables(),
                sampleOutput()
            ]);
    }
});

function inline(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'code-inline' } }, 'Inline')),
        bs.p({}, [`Wrap inline snippets of code with  `, bs.code({}, 'bs.code'), `.`]),
        bs.e({ style: styles.bsExample }, ['For example, ', bs.code({}, 'section'), ' should be wrapped as inline.']),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `['For example, ', bs.code({}, 'section'), ' should be wrapped as inline.']`

        ])))
    ];
}

function userInput(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'code-user-input' } }, 'User input')),
        bs.p({}, [`Use the  `, bs.code({}, 'bs.kbd'), ` to indicate input that is typically entered via keyboard.`]),
        bs.e({ style: styles.bsExample }, [
            'To switch directories, type ', bs.kbd({}, 'cd'), ' followed by the name of the directory.', bs.e({ tag: 'br' }),
            'To edit settings, press ', bs.kbd({}, 'ctrl + ,')
        ]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `[`, bs.e({ tag: 'br' }),
            `   'To switch directories, type ', kbd({}, 'cd'), ' followed by the name of the directory.',`,
            bs.e({ tag: 'br' }),
            `   bs.e({ tag: 'br' }),`,
            bs.e({ tag: 'br' }),
            `   'To edit settings, press ', kbd({}, 'ctrl + ,')`, bs.e({ tag: 'br' }),
            `]`
        ])))
    ];
}

function basicBlock(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'code-block' } }, 'Basic block')),
        bs.p({}, [
            `Use `, bs.code({}, 'pre'),
            ` for multiple lines of code. Be sure to escape any angle brackets in the code for proper rendering.`
        ]),
        bs.e({ style: styles.bsExample }, bs.pre({}, '<p>Sample text here...</p>')),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `pre({}, '<p>Sample text here...</p>')`
        ])))
    ];
}

function variables(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'code-variables' } }, 'Variables')),
        bs.p({}, [`For indicating variables use the `, bs.code({}, 'bs.v'), ` or `, bs.code({}, 'bs.variable'), ` component.`]),
        bs.e({ style: styles.bsExample }, [bs.v({}, 'y'), ' = ', bs.v({}, 'mx'), ' + ', bs.v({}, 'b')]),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `[v({}, 'y'), ' = ', v({}, 'mx'), ' + ', v({}, 'b')]`
        ])))
    ];
}

function sampleOutput(): b.IBobrilChildren {
    return [
        b.anchor(bs.h2({ attrs: { id: 'code-sample-output' } }, 'Sample output')),
        bs.p({}, [`For indicating blocks sample output from a program use the `, bs.code({}, 'bs.samp'), ` component.`]),
        bs.e({ style: styles.bsExample }, bs.samp({}, 'This text is meant to be treated as sample output from a computer program.')),
        bs.figure({ style: styles.highlight }, pre({}, bs.code({ style: langJs }, [
            `bs.samp({}, 'This text is meant to be treated as sample output from a computer program.')`
        ])))
    ];
}