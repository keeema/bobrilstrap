import * as b from 'bobril';
import core from 'bobrilstrap-core';
import elem from 'bobrilstrap-element';
import row from 'bobrilstrap-row';
import container from 'bobrilstrap-container';
import col, { colStyles, Size as ColSize } from 'bobrilstrap-col';
import formGroup, { Size } from 'bobrilstrap-form-group';
import inputText from 'bobrilstrap-input-text';
import label from 'bobrilstrap-label';
import ValidationState from 'bobrilstrap-validations';
import form from './index';

b.init(() => {
    return [
        core({}),
        container({}, [
            row({}, col({ size: ColSize.md, count: 6 }, [
                form({}, [
                    formGroup({size: Size.lg}, [
                        label({ controlLabel: true }),
                        inputText({ value: 'Value' })
                    ]),
                    formGroup({ validationState: ValidationState.success }, [
                        label({ controlLabel: true }),
                        inputText({ value: 'Value' })
                    ]),
                    ,
                    formGroup({ validationState: ValidationState.warning, hasFeedbeck: true, size: Size.sm }, [
                        label({ controlLabel: true }),
                        inputText({ value: 'Value' })
                        // TODO pridat glyphiconu
                    ])
                ])
            ]))
        ])
    ];
});
