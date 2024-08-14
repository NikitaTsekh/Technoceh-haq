import { defineStore } from 'pinia'
import Project from 'src/models/Project/Project'
import Task from 'src/models/Task/Task'
import TaskListItem from 'src/models/Task/TaskListItem'
import TaskApi from 'src/services/api/TaskApi'

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    items: [],
    isLoading: false,
    total: 0,
    itemsPerPage: 50,

    selectedProject: null,

    modals: {
      task: {
        state: false,
        isLoading: false,
        form: new Task(),
      },
    },
  }),
  getters: {
    isAllItemsLoaded: state => {
      return state.items.length >= state.total
    },
    isTaskEditing: state => {
      return state.modals.task.form.id != null
    },
    modal: state => {
      return state.modals.task
    },
  },
  actions: {
    async loadList(page) {
      // TODO
      return await TaskApi.index(page, this.itemsPerPage).then(response => {
        let data = response.data

        for (let item of data.items) {
          this.items.push(new TaskListItem(item))
        }

        this.total = data.total
      })
    },
    async store() {
      this.modal.isLoading = true

      return await TaskApi.store(this.modal.form)
        .then(response => {
          let data = response.data

          for (let item of data.items) {
            this.items.push(new TaskListItem(item))
          }
        })
        .finally(() => {
          this.modal.isLoading = false
        })
    },

    showTaskModal() {
      this.modal.state = true
    },
    hideTaskModal() {
      this.modal.state = false
    },
    resetTaskModal() {
      this.modal.state = false
      this.modal.form = {}
    },
    resetList() {
      this.items = []
      this.total = 0
    },
    selectProject(project) {
      this.selectedProject = project
    },
  },
})
