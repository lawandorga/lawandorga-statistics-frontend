<template>
  <Disclosure v-slot="{ open }" as="nav" class="bg-white shadow">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex items-center flex-shrink-0">
            <LogoLight :to="{ name: 'statistics' }" />
          </div>
          <div class="hidden sm:ml-20 sm:flex sm:space-x-8">
            <!-- Current: "border-blue-700 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
            <RouterLink
              :to="{ name: 'statistics' }"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
              active-class="!text-gray-900 !border-blue-700"
            >
              General Statistics
            </RouterLink>
            <RouterLink
              :to="{ name: 'statistics-records' }"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
              active-class="!text-gray-900 !border-blue-700"
            >
              Record Statistics
            </RouterLink>
            <RouterLink
              :to="{ name: 'statistics-error' }"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
              active-class="!text-gray-900 !border-blue-700"
            >
              Error Statistics
            </RouterLink>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <!-- Profile dropdown -->
          <Menu as="div" class="relative ml-3">
            <div>
              <MenuButton
                class="flex text-sm bg-gray-100 rounded-full focus:outline-none ring-gray-100 ring-2 hover:ring-gray-200 focus:ring-gray-200 focus:ring-2"
              >
                <span class="sr-only">Open user menu</span>
                <div class="relative overflow-hidden rounded-full h-7 w-7">
                  <UserIcon
                    class="transform scale-110 w-full h-full text-blue-700 absolute -bottom-0.5 left-0 right-0"
                  />
                </div>
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems
                class="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem v-slot="{ active }">
                  <RouterLink
                    :to="{ name: 'settings' }"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                  >
                    Settings
                  </RouterLink>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <button
                    type="button"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700 w-full text-left',
                    ]"
                    @click="logout()"
                  >
                    Logout
                  </button>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
        <div class="flex items-center -mr-2 sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block w-6 h-6" aria-hidden="true" />
            <XMarkIcon v-else class="block w-6 h-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="pt-2 pb-3 space-y-1">
        <!-- Current: "", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
        <DisclosureButton as="template">
          <RouterLink
            :to="{ name: 'statistics' }"
            class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
            active-class="!text-blue-700 !border-blue-700 !bg-blue-50"
          >
            General Statistics
          </RouterLink>
        </DisclosureButton>
        <DisclosureButton as="template">
          <RouterLink
            :to="{ name: 'statistics-records' }"
            class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
            active-class="!text-blue-700 !border-blue-700 !bg-blue-50"
          >
            Record Statistics
          </RouterLink>
        </DisclosureButton>
        <DisclosureButton as="template">
          <RouterLink
            :to="{ name: 'statistics-error' }"
            class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
            active-class="!text-blue-700 !border-blue-700 !bg-blue-50"
          >
            Error Statistics
          </RouterLink>
        </DisclosureButton>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-200">
        <div class="mt-3 space-y-1">
          <DisclosureButton as="template">
            <RouterLink
              :to="{ name: 'settings' }"
              class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
              active-class="!text-blue-700 !border-blue-700 !bg-blue-50"
            >
              Settings
            </RouterLink>
          </DisclosureButton>
          <DisclosureButton
            as="button"
            class="block w-full py-2 pl-3 pr-4 text-base font-medium text-left text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
            @click="logout()"
          >
            Logout
          </DisclosureButton>
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script lang="ts" setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { UserIcon } from "@heroicons/vue/20/solid";
import { LogoLight } from "@lawandorga/components";
import { useRouter, RouterLink } from "vue-router";
import { useUserStore } from "@/store/user";

const router = useRouter();
const userStore = useUserStore();

const logout = () => {
  userStore.logout().then(() => {
    router.push({ name: "dashboard" });
  });
};
</script>
