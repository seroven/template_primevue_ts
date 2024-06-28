import router from "../../routes/router";
import { ConfirmationState, useConfirmationStore } from "../../store/confirmation";
import { useLoaderStore } from "../../store/loader";
import { useToastStore } from "../../store/toast";
import { Assets } from "../constants/assets";
import { ToastsMessages } from '../constants/toast-messages';
import { AssetFileEnum } from "../interfaces/assets.interface";
import { ToastBodyInterface, ToastGroupEnum, ToastSeverityMessageEnum, ToastTypeMessageEnum } from "../interfaces/toast-message.interface";

export class Utilities {
    
    // Formatear fecha
    static formatDate(date: Date) {
        const year = date.getFullYear();
        const month = ("0" + (date.getMonth() + 1)).slice(-2);
        const day = ("0" + date.getDate()).slice(-2);
        return `${day}-${month}-${year}`;
    }

    // Formatear hora
    static formatTime(date: Date) {
        const hours = ("0" + date.getHours()).slice(-2);
        const minutes = ("0" + date.getMinutes()).slice(-2);
        const seconds = ("0" + date.getSeconds()).slice(-2);
        return `${hours}:${minutes}:${seconds}`;
    }

    // Formatear dinero
    static formatMoney(number: number, currency: string, locale: string) {
        const formatNumber = new Intl.NumberFormat(locale, {
            style: "currency",
            currency: currency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
        return formatNumber.format(number);
    }

    // Esperar unos segundos
    static sleep(miliseconds: number) {
        return new Promise((res) => {
            setTimeout(() => {
                res(true);
            }, miliseconds);
        });
    }

    // Mostrar loader
    static showLoader(message: string | null = null) {
        useLoaderStore().show(message);
    }

    // Ocultar loader
    static hiddenLoader() {
        useLoaderStore().hidden();
    }

    // Mostrar modal de confirmación
    static showConfirmation(config:ConfirmationState) {
        useConfirmationStore().show(config);
    }

    // Navegar a otra ruta
    static navigate(name: string) {
        router.push({ name });
    }

    // Generar un mensaje toast
    static genToast(typeMessage: ToastTypeMessageEnum, life: number = 4500, group: ToastGroupEnum = ToastGroupEnum.TOP_RIGHT) {
        const message = ToastsMessages.find((m) => m.type == typeMessage);
        if (!message) return;
        const toastBody: ToastBodyInterface = {
            severity: message.severity,
            summary: message.summary,
            detail: message.detail,
            life,
            group
        };
        useToastStore().show(toastBody);
    }

    // Generar un mensaje personalizado toast
    static genCustomeToast(severity: ToastSeverityMessageEnum, summary: string, detail: string, life: number = 4500, group: ToastGroupEnum = ToastGroupEnum.TOP_RIGHT) {
        const toastBody: ToastBodyInterface = { severity, summary, detail, life, group };
        useToastStore().show(toastBody);
    }

    // Obtener archivo
    static getFile(fileName: AssetFileEnum) {
        return Assets.find(a => a.name == fileName)?.file;
    }

}
