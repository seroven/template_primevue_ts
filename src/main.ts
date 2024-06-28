import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'
import router from './routes/router';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';
import Ripple from 'primevue/ripple';
import setGlobalComponents from './components';
import Tooltip from 'primevue/tooltip';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(PrimeVue, { ripple: true });
app.use(ToastService);
app.use(ConfirmationService);
app.directive('ripple', Ripple);
app.directive('tooltip', Tooltip);
setGlobalComponents(app);
app.mount('#app');
