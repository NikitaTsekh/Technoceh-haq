import { defineStore } from 'pinia'
import WorkerTaskListItem from 'src/models/Task/WorkerTaskListItem'
import TaskApi from 'src/services/api/TaskApi'

export const useWorkerTasksStore = defineStore('workerTasks', {
  state: () => ({
    items: [],
    isLoading: false,
    total: 0,
    itemsPerPage: 50,
  }),
  getters: {
    isAllItemsLoaded: state => {
      return state.items.length >= state.total
    },
  },
  actions: {
    async loadList(page) {
      return await TaskApi.index(page, this.itemsPerPage).then(response => {
        let data = response.data

        for (let item of data.items) {
          this.items.push(new TaskListItem(item))
        }

        this.total = data.total
      })
    },
    async loadListForWorker(page) {
      return await TaskApi.indexForWorker(page, this.itemsPerPage).then(response => {
        let data = response.data
        
        for (let item of data.items) {
          this.items.push(new WorkerTaskListItem(item))
        }

        this.total = data.total
      })
    },

    resetList() {
      this.items = []
      this.total = 0
    },
  },
})
