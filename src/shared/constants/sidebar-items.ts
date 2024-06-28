import { SidebarItemInterface, SidebarTypeItemEnum } from "../interfaces/sidebar-item.interface";




export const SidebarItems: SidebarItemInterface[] = [
    {
        name: 'Opciones',
        type: SidebarTypeItemEnum.TITLE
    },
    {
        name: 'Inicio',
        pathName: 'Home',
        icon: 'pi-home',
        type: SidebarTypeItemEnum.ITEM
    },
    {
        name: 'Configuración',
        icon: 'pi-cog',
        type: SidebarTypeItemEnum.DROPDOWN_ITEMS,
        children: [
            {
                name: 'Usuarios',
                pathName: 'Users',
            }
        ]
    },
]