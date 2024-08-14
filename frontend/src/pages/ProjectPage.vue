<template>
  <q-page>
    <!-- Кнопка создания задания (когда список пуст)  -->
    <div class="row items-center justify-center flex-1" v-if="!tasksStore.items.length && !tasksStore.isLoading">
      <q-btn icon="construction" unelevated color="primary" no-caps rounded label="Создать задание" />
    </div>

    <div v-if="!tasksStore.items.length && tasksStore.isLoading">
      <task-list-item-skeleton v-for="skeletonIndex in skeletonsCount" :key="skeletonIndex" />
    </div>

    <!-- Список -->
    <q-infinite-scroll @load="onLoad">
      <task-list-item class="q-mb-sm" :item="item" v-for="item in tasksStore.items" :key="item.id" />

      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-oval color="primary" size="40px" />
        </div>
      </template>
    </q-infinite-scroll>

    <!-- Кнопка создания задания -->
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn round no-caps color="primary" @click="tasksStore.showTaskModal">
        <q-icon name="add" color="white" />
      </q-btn>
    </q-page-sticky>

    <!-- Модалки -->
    <task-creating-modal />
  </q-page>
</template>

<script>
import { useTasksStore } from 'stores/tasks'
import { useProjectsStore } from 'src/stores/projects'

import TaskListItemSkeleton from 'src/components/ProjectPage/TaskListItemSkeleton.vue'
import TaskCreatingModal from 'src/components/ProjectPage/TaskCreatingModal.vue'
import TaskListItem from 'src/components/ProjectPage/TaskListItem.vue'

export default {
  name: 'ProjectPage',
  components: {
    TaskCreatingModal,
    TaskListItem,
    TaskListItemSkeleton,
  },
  data() {
    return {
      tasksStore: useTasksStore(),
      projectsStore: useProjectsStore(),

      skeletonsCount: 15,
    }
  },
  async mounted() {
    this.tasksStore.resetList()

    if (this.projectId) {
      const project = await this.projectsStore.loadProject(this.projectId)

      this.tasksStore.selectProject(project)
    }
  },
  methods: {
    async onLoad(index, done) {
      this.tasksStore.isLoading = true

      this.tasksStore.loadList(index).then(() => {
        done(this.tasksStore.isAllItemsLoaded)

        this.tasksStore.isLoading = false
      })
    },
  },
  computed: {
    projectId() {
      return this.$route.params.id
    },
  },
}
</script>
