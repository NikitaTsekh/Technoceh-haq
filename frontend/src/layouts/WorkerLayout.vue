<template>
  <q-layout view="hHh lpr fFf">
    <q-header>
      <q-toolbar>
        <span class="font-semibold">Личный кабинет</span>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="shadow-2">
      <q-tabs v-model="tab" indicator-color="transparent" active-color="primary" class="bg-white text-secondary">
        <q-route-tab
          v-for="routeButton in routeButtons"
          :to="routeButton.to"
          :name="routeButton.name"
          :key="routeButton.name"
          :label="routeButton.label"
          :icon="routeButton.icon"
          no-caps
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
import { useProfileStore } from 'src/stores/profile'

export default {
  name: 'WorkerLayout',
  data() {
    return {
      tab: 'tasks',

      routeButtons: [
        {
          label: 'Задания',
          name: 'tasks',
          to: { name: 'tasks' },
          icon: 'format_list_bulleted',
        },
        {
          label: 'Профиль',
          name: 'profile',
          to: { name: 'profile' },
          icon: 'person',
        },
      ],
    }
  },
}
</script>
