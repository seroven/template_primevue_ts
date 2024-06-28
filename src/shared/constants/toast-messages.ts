import { ToastMessageInterface, ToastSeverityMessageEnum, ToastTypeMessageEnum } from "../interfaces/toast-message.interface";


export const ToastsMessages: ToastMessageInterface[] = [
  {
    type: ToastTypeMessageEnum.REGISTER_SUCCESS,
    severity: ToastSeverityMessageEnum.SUCCESS,
    summary: 'Operación Exitosa',
    detail: 'El registro ha sido guardado'
  },
  {
    type: ToastTypeMessageEnum.LOGOUT_SUCCESS,
    severity: ToastSeverityMessageEnum.SUCCESS,
    summary: 'Operación Exitosa',
    detail: 'Se ha cerrado su sesión'
  },
  {
    type: ToastTypeMessageEnum.FORM_ERROR,
    severity: ToastSeverityMessageEnum.WARN,
    summary: 'Hubo un problema',
    detail: 'Los campos no están rellenados correctamente'
  },
  {
    type: ToastTypeMessageEnum.SERVER_ERROR,
    severity: ToastSeverityMessageEnum.ERROR,
    summary: 'Hubo un problema interno',
    detail: 'Contacta con la área de sistemas'
  },
  {
    type: ToastTypeMessageEnum.UNKNOWN_ERROR,
    severity: ToastSeverityMessageEnum.ERROR,
    summary: 'Hubo un problema interno',
    detail: 'Hubo un error desconocido'
  },
  {
    type: ToastTypeMessageEnum.USER_DISABLED,
    severity: ToastSeverityMessageEnum.SUCCESS,
    summary: 'Operación Exitosa',
    detail: 'El usuario ha sido deshabilitado'
  },
  {
    type: ToastTypeMessageEnum.USER_ENABLED,
    severity: ToastSeverityMessageEnum.SUCCESS,
    summary: 'Operación Exitosa',
    detail: 'El usuario se ha habilitado'
  }
]

