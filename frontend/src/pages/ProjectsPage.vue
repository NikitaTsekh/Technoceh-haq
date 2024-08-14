<template>
  <q-page class="column">
    <!-- Кнопка создания проекта (когда список пуст)  -->
    <div class="row items-center justify-center flex-1" v-if="!projectsStore.items.length && !projectsStore.isLoading">
      <q-btn
        icon="construction"
        unelevated
        color="primary"
        no-caps
        rounded
        label="Создать проект"
        @click="projectsStore.showProjectModal"
      />
    </div>

    <div v-if="!projectsStore.items.length && projectsStore.isLoading">
      <project-list-item-skeleton v-for="skeletonIndex in skeletonsCount" :key="skeletonIndex" />
    </div>

    <!-- Список -->
    <q-infinite-scroll @load="onLoad">
      <project-list-item class="q-mb-sm" :item="item" v-for="item in projectsStore.items" :key="item.id" />

      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-oval color="primary" size="40px" />
        </div>
      </template>
    </q-infinite-scroll>

    <!-- Кнопка чата -->
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn round no-caps color="primary" class="q-mr-sm" @click="projectsStore.showProjectModal">
        <q-icon name="add" color="white" />
      </q-btn>

      <q-btn round no-caps color="primary">
        <q-icon name="chat" color="white" />
      </q-btn>
    </q-page-sticky>

    <!-- Модалки -->
    <project-creating-modal />
  </q-page>
</template>

<script>
import { useProjectsStore } from 'stores/projects'

import ProjectListItem from 'src/components/ProjectsPage/ProjectListItem.vue'
import ProjectListItemSkeleton from 'src/components/ProjectsPage/ProjectListItemSkeleton.vue'
import ProjectCreatingModal from 'src/components/ProjectsPage/ProjectCreatingModal.vue'

export default {
  name: 'ProjectsPage',
  components: {
    ProjectListItem,
    ProjectListItemSkeleton,
    ProjectCreatingModal,
  },
  data() {
    return {
      projectsStore: useProjectsStore(),

      skeletonsCount: 10,
    }
  },
  mounted() {
    this.projectsStore.resetList()
  },
  methods: {
    async onLoad(index, done) {
      this.projectsStore.isLoading = true

      this.projectsStore.loadList(index).then(() => {
        done(this.projectsStore.isAllItemsLoaded)

        this.projectsStore.isLoading = false
      })
    },
  },
}
</script>
