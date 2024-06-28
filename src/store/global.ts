import { defineStore } from 'pinia';
import { Utilities } from '../shared/classes/Utilities';
import { ToastGroupEnum, ToastSeverityMessageEnum, ToastTypeMessageEnum } from '../shared/interfaces/toast-message.interface';
import { EssentialForm } from '../shared/classes/EssentialForm';
import { FormTypeRuleEnum } from '../shared/interfaces/form-rule.interface';
import { EssentialFormControl } from '../shared/classes/EssentialFormControl';
import { AssetFileEnum } from '../shared/interfaces/assets.interface';
import { ModalConfig } from '../shared/constants/modal-config';


export const useGlobalStore = defineStore('global', {
    state: () => (
        {
            utl: Utilities,
            tstType: ToastTypeMessageEnum,
            tstSeverity: ToastSeverityMessageEnum,
            tstGroup: ToastGroupEnum,
            sstRule: FormTypeRuleEnum,
            assets: AssetFileEnum,
            modalConfig: ModalConfig
        }
    ),
    actions: {
        sstForm(controls: any) {
            return new EssentialForm(controls);
        },
        sstFormControl(value: any, rules: FormTypeRuleEnum[] = []) {
            return new EssentialFormControl(value, rules);
        }
    }
})
