<template>
    <Button label="Sign in with google" icon="pi pi-google" severity="secondary" size="large" outlined @click="submit"
        class="w-full"></Button>
    <div v-ripple class="p-2 bg-primary mt-2 border-round  p-ripple text-center select-none ">
        <img :src="global.utl.getFile(global.assets.CHROME)" width="12">
        <span class="ml-2 text-sm">Sistema optimizado para navegador Google Chrome.</span>
    </div>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '../../store/global';

const global = useGlobalStore();

const submit = () => {
    global.utl.navigate('Home');
}
</script>