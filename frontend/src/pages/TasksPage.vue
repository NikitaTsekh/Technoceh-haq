<template>
  <q-page>
    <div v-if="!workerTasksStore.items.length && workerTasksStore.isLoading">
      <worker-task-list-item-skeleton v-for="skeletonIndex in skeletonsCount" :key="skeletonIndex" />
    </div>

    <!-- Список -->
    <q-infinite-scroll @load="onLoad">
      <worker-task-list-item class="q-mb-sm" :item="item" v-for="item in workerTasksStore.items" :key="item.id" />

      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-oval color="primary" size="40px" />
        </div>
      </template>
    </q-infinite-scroll>
  </q-page>
</template>

<script>
import { useWorkerTasksStore } from 'stores/workerTasks'

import WorkerTaskListItemSkeleton from 'src/components/TasksPage/WorkerTaskListItemSkeleton.vue'
import WorkerTaskListItem from 'src/components/TasksPage/WorkerTaskListItem.vue'
import { useProfileStore } from 'src/stores/profile'

export default {
  name: 'TasksPage',
  components: {
    WorkerTaskListItem,
    WorkerTaskListItemSkeleton,
  },
  data() {
    return {
      workerTasksStore: useWorkerTasksStore(),
      profileStore: useProfileStore(),

      skeletonsCount: 15,
    }
  },
  async mounted() {
    this.workerTasksStore.resetList()

    if (!this.profileStore.isProfileLoaded) {
      this.profileStore.loadProfile()
    }
  },
  methods: {
    async onLoad(index, done) {
      this.workerTasksStore.isLoading = true

      this.workerTasksStore.loadListForWorker(index).then(() => {
        done(this.workerTasksStore.isAllItemsLoaded)

        this.workerTasksStore.isLoading = false
      })
    },
  },
}
</script>
