import * as b from 'bobril';
import { e, p, h2, code, figure, kbd, pre as preDefault, v, samp } from '../../index';
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
        h2({ attrs: { id: 'code-inline' } }, 'Inline'),
        p({}, [`Wrap inline snippets of code with  `, code({}, 'code'), `.`]),
        e({ style: styles.bsExample }, ['For example, ', code({}, 'section'), ' should be wrapped as inline.']),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `['For example, ', code({}, 'section'), ' should be wrapped as inline.']`

        ])))
    ];
}

function userInput(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'code-user-input' } }, 'User input'),
        p({}, [`Use the  `, code({}, 'kbd'), ` to indicate input that is typically entered via keyboard.`]),
        e({ style: styles.bsExample }, [
            'To switch directories, type ', kbd({}, 'cd'), ' followed by the name of the directory.', e({ tag: 'br' }),
            'To edit settings, press ', kbd({}, 'ctrl + ,')
        ]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `[`, e({ tag: 'br' }),
            `   'To switch directories, type ', kbd({}, 'cd'), ' followed by the name of the directory.',`,
            e({ tag: 'br' }),
            `   e({ tag: 'br' }),`,
            e({ tag: 'br' }),
            `   'To edit settings, press ', kbd({}, 'ctrl + ,')`, e({ tag: 'br' }),
            `]`
        ])))
    ];
}

function basicBlock(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'code-block' } }, 'Basic block'),
        p({}, [
            `Use `, code({}, 'pre'),
            ` for multiple lines of code. Be sure to escape any angle brackets in the code for proper rendering.`
        ]),
        e({ style: styles.bsExample }, preDefault({}, '<p>Sample text here...</p>')),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `pre({}, '<p>Sample text here...</p>')`
        ])))
    ];
}

function variables(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'code-variables' } }, 'Variables'),
        p({}, [`For indicating variables use the `, code({}, 'v'), ` or `, code({}, 'variable'), ` component.`]),
        e({ style: styles.bsExample }, [v({}, 'y'), ' = ', v({}, 'mx'), ' + ', v({}, 'b')]),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `[v({}, 'y'), ' = ', v({}, 'mx'), ' + ', v({}, 'b')]`
        ])))
    ];
}

function sampleOutput(): b.IBobrilChildren {
    return [
        h2({ attrs: { id: 'code-sample-output' } }, 'Sample output'),
        p({}, [`For indicating blocks sample output from a program use the `, code({}, 'samp'), ` component.`]),
        e({ style: styles.bsExample }, samp({}, 'This text is meant to be treated as sample output from a computer program.')),
        figure({ style: styles.highlight }, pre({}, code({ style: langJs }, [
            `samp({}, 'This text is meant to be treated as sample output from a computer program.')`
        ])))
    ];
}