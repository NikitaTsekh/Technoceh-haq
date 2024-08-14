<template>
  <q-layout view="hHh lpr fFf">
    <q-header class="justify-center">
      <q-toolbar>
        <project-page-toolbar-content v-if="isProjectPage" />
        <projects-page-toolbar-content v-if="isProjectsListPage" />
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
import ProjectPageToolbarContent from 'src/components/ProjectsPage/ProjectPageToolbarContent.vue'
import ProjectsPageToolbarContent from 'src/components/ProjectsPage/ProjectsPageToolbarContent.vue'

export default {
  name: 'CustomerLayout',
  components: {
    ProjectPageToolbarContent,
    ProjectsPageToolbarContent,
  },
  data() {
    return {
      tab: 'projects',

      routeButtons: [
        {
          label: 'Проекты',
          name: 'projects',
          to: { name: 'projects' },
          icon: 'format_list_bulleted',
        },
        {
          label: 'Мессенджер',
          name: 'messenger',
          to: { name: 'messenger' },
          icon: 'chat',
        },
      ],
    }
  },
  computed: {
    isProjectPage() {
      return this.$route.name == 'project'
    },
    isProjectsListPage() {
      return this.$route.name == 'projects'
    },
  },
}
</script>
