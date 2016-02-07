import * as b from 'bobril';
import { e, p, ul, li, code, figure, pre, span } from '../../index';
import { styles } from '../bsexample/css';
import section from '../common/section';

export default b.createVirtualComponent({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: 'Grid',
                id: 'grid',
                lead: `Bootstrap includes a responsive, mobile first fluid grid system that appropriately scales up to 12 
                columns as the device or viewport size increases. It includes predefined classes for easy layout options, 
                as well as powerful mixins for generating more semantic layouts.`
            },
            [
                introduction(),

            ]);
    }
})

function introduction(): b.IBobrilChildren {
    return [
        e({ tag: 'h2', attrs: { id: 'grid-intro' } }, 'Introduction'),
        p({}, `Grid systems are used for creating page layouts through a series of rows 
        and columns that house your content. Here's how the Bootstrap grid system works:`),
        ul({}, [
            li({}, [
                'Rows must be placed within a ',
                code({}, 'container({}, ...)'), ' (fixed-width) or ',
                code({}, 'container({ fluid: true }, ...)'), '(full-width) for proper alignment and padding']),
            li({}, 'Use rows to create horizontal groups of columns.'),
            li({}, 'Content should be placed within columns, and only columns may be immediate children of rows.'),
            li({}, [
                'Predefined grid components like ', code({}, 'row({}, ...)'), ' and ', code({}, 'col({ size: Size.xs, count: 4 }, ...)'),
                ' are available for quickly making grid layouts.'
            ]),
            li({}, [
                'Columns create gutters (gaps between column content) via ', code({}, 'padding'),
                '. That padding is offset in rows for the first and last column via negative margin on ', code({}, 'row({}, ...)')
            ]),
            li({}, `The negative margin is why the examples below are outdented. It's so that content within grid columns is lined 
            up with non-grid content.`),
            li({}, [
                'Grid columns are created by specifying the number of twelve available columns you wish to span. ',
                'For example, three equal columns would use three',
                code({}, 'col({ size: Size.xs, count: 4 }, ...)')
            ]),
            li({}, `If more than 12 columns are placed within a single row, 
            each group of extra columns will, as one unit, wrap onto a new line.`),
            li({}, [
                'Grid components apply to devices with screen widths greater than or equal to the breakpoint sizes, ',
                'and override grid classes targeted at smaller devices. Therefore, e.g. applying any ',
                code({}, 'col({ size: Size.md, count: * }, ...)'),
                'component will not only affect its styling on medium devices but also on large devices if it is not defined as ',
                code({}, 'col({ cols: [{ size: Size.md, count: * }, { size: Size.lg, count: * }] }, ...)'), '.',
            ])
        ]),
        p({}, 'Look to the examples for applying these principles to your code.')
    ];
}
