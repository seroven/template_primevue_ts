<template>
    <div class="sidebar">
        <div class="brand gap-3">
            <div class="logo flex-1">
                <img :src="global.utl.getFile(global.assets.LOGO_GRUPO_FLESAN)" class="h-3rem bg-cover bg-gray-100 p-2 border-round" />
            </div>
            <div class="trigger">
                <a href="#" @click="toggleSidebar">
                    <i name="menu-outline" class="pi pi-align-justify font-bold"></i>
                    <i name="chevron-back-outline" class="pi pi-chevron-left font-bold"></i>
                </a>
            </div>
        </div>
        <nav class="navbar">
            <ul>
                <SidebarItem v-for="(item, index) in items" :key="index" :item="item"></SidebarItem>
            </ul>
        </nav>

        <div class="sign-out p-2 ">
            <div class="flex-1 flex align-items-center no-wrap-container">
                <img :src="global.utl.getFile(global.assets.USER_TEMPLATE)"
                    class="sign-out-info-image w-3rem h-3rem flex-none border-round" />
                <div class="sign-out-info-name flex-auto flex flex-column justify-content-center no-wrap-container">
                    <span class="pl-2 no-wrap-container">USUARIO</span>
                    <span class="pl-2 text-md font-bold no-wrap-container">ADMINISTRADOR</span>
                </div>
            </div>
            <div class="sign-out-settings w-1rem flex">
                <i class="pi pi-cog" @click="openSettings($event)"></i>
                <ConfirmPopup>
                    <template #container>
                        <Settings />
                    </template>
                </ConfirmPopup>
            </div>

        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { SidebarItems } from "../../../shared/constants/sidebar-items";
import { useSidebarStore } from "../../../store/sidebar";
import { useConfirm } from "primevue/useconfirm";
import Settings from "../settings/Settings.vue"
import SidebarItem from "./SidebarItem.vue";
import { SidebarItemInterface } from "../../../shared/interfaces/sidebar-item.interface";
import { useGlobalStore } from "../../../store/global";

const sidebar = useSidebarStore();
const global = useGlobalStore();

const confirm = useConfirm();

const items = ref<SidebarItemInterface[]>(SidebarItems);

onMounted(() => {
    initializeSidebar();
})


const initializeSidebar = () => {
    const submenu = document.querySelectorAll(".has-child > a");

    submenu.forEach((menu) => {
        menu.addEventListener('click', function () {
            if (!this.parentNode.classList.contains("collapse")) {
                this.parentNode.classList.remove("hidden-items");
                setTimeout(() => {
                    this.parentNode.classList.add("collapse");
                }, 10);
            } else {
                this.parentNode.classList.remove("collapse");
                setTimeout(() => {
                    this.parentNode.classList.add("hidden-items");
                }, 400);
            }
        });
        createResizeEvent();
        window.onresize = () => {
            createResizeEvent();
        };
    })
}

const toggleSidebar = () => {
    var screenWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    if (screenWidth > 600) {
        sidebar.setSiteClass(sidebar.siteClass == "mininav" ? "" : "mininav");
    } else {
        sidebar.setSiteClass(sidebar.siteClass == "floatnav" ? "" : "floatnav");
    }
}

const createResizeEvent = () => {
    var screenWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    if (
        (screenWidth < 600 &&
            sidebar.siteClass == "mininav") ||
        (screenWidth > 600 &&
            sidebar.siteClass == "floatnav")
    ) {
        sidebar.setSiteClass("");
    }
}

const openSettings = (event: any) => {
    confirm.require({
        target: event.currentTarget,
        accept: () => {

        },
        reject: () => {

        }
    })
}

</script>
