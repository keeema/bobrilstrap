import * as b from 'bobril';
import * as bsCore from 'bobrilstrap-core';
import elem from 'bobrilstrap-element';
import row from 'bobrilstrap-row';
import container from 'bobrilstrap-container';
import col, { colStyles, Size as ColSize } from 'bobrilstrap-col';
import formGroup, { Size } from 'bobrilstrap-form-group';
import inputText from 'bobrilstrap-input-text';
import label from 'bobrilstrap-label';
import ValidationState from 'bobrilstrap-validations';
import glyphicon, { Icon } from 'bobrilstrap-glyphicon';
import form from './index';

bsCore.init();

b.init(() => {
    return [
        container({}, [
            row({}, col({ size: ColSize.md, count: 6 }, [
                form({}, [
                    formGroup({ size: Size.lg }, [
                        label({ controlLabel: true }, 'Input'),
                        inputText({ value: 'Value' })
                    ]),
                    formGroup({ validationState: ValidationState.success }, [
                        label({ controlLabel: true }, 'Input with success'),
                        inputText({ value: 'Value' })
                    ]),
                    ,
                    formGroup({ validationState: ValidationState.warning, hasFeedbeck: true, size: Size.sm }, [
                        label({ controlLabel: true }, 'Input with warning'),
                        inputText({ value: 'Value' }),
                        glyphicon({ icon: Icon.warningSign, formControlFeedback: true })
                    ])
                ])
            ]))
        ])
    ];
});
