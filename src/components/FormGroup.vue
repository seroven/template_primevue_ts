<template>
    <div v-if="control?.visible == null ? true : control.visible"
        :class="`${spaceBottom ? 'mb-1' : ''} ${customClass}`">
        <div class="flex flex-column">
            <span class="font-bold">{{ label }} <span v-show="required" class="text-primary">*</span></span>
            <div class="mt-1">
            </div>

            <slot></slot>

            <span v-if="control?.existError && showErrorMessage" class="text-primary font-bold">{{
                control?.error.message
            }}</span>
        </div>
    </div>
</template>
<script lang="ts" setup>

const props = withDefaults(defineProps<{
    spaceBottom?: Boolean;
    required?: Boolean;
    showErrorMessage?: Boolean;
    customClass?: String;
    control: any;
    label: String;
}>(), {
    spaceBottom: () => true,
    required: () => true,
    showErrorMessage: () => true,
    customClass: () => ''
});


</script>