export interface ToastMessageInterface {
    type: ToastTypeMessageEnum
    severity: ToastSeverityMessageEnum
    summary: string
    detail: string
}

export interface ToastBodyInterface {
    severity: ToastSeverityMessageEnum,
    summary: string,
    detail: string,
    life: number,
    group: string
}

export enum ToastSeverityMessageEnum {
    INFO = 'info',
    SUCCESS = 'success',
    WARN = 'warn',
    ERROR = 'error'
}

export enum ToastGroupEnum {
    TOP_RIGHT = 'tr',
    TOP_LEFT = 'tl',
}

export enum ToastTypeMessageEnum {
    REGISTER_SUCCESS = 'REGISTER_SUCCESS',
    LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
    FORM_ERROR = 'FORM_ERROR',
    SERVER_ERROR = 'SERVER_ERROR',
    UNKNOWN_ERROR = 'UNKNOWN_ERROR',
    USER_DISABLED = 'USER_DISABLED',
    USER_ENABLED = 'USER_ENABLED'
}

