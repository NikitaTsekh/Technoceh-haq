import { defineStore } from 'pinia'
import ProjectApi from 'src/services/api/ProjectApi'
import ProjectListItem from 'src/models/Project/ProjectListItem'
import Project from 'src/models/Project/Project'

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    items: [],
    isLoading: false,
    total: 0,
    itemsPerPage: 50,

    modals: {
      project: {
        state: false,
        isLoading: false,
        form: new Project(),
      },
    },
  }),
  getters: {
    isAllItemsLoaded: state => {
      return state.items.length >= state.total
    },
    isProjectEditing: state => {
      return state.modals.project.form.id != null
    },
    modal: state => {
      return state.modals.project
    },
  },
  actions: {
    async loadList(page) {
      // TODO
      return await ProjectApi.index(page, this.itemsPerPage).then(response => {
        let data = response.data

        for (let item of data.items) {
          this.items.push(new ProjectListItem(item))
        }

        this.total = data.total
      })
    },
    async loadProject(projectId) {
      if (!projectId) {
        return
      }

      return await ProjectApi.show(projectId)
    },
    async store() {
      this.modal.isLoading = true

      return await ProjectApi.store(this.modal.form)
        .then(response => {
          let data = response.data

          for (let item of data.items) {
            this.items.push(new ProjectListItem(item))
          }
        })
        .finally(() => {
          this.modal.isLoading = false
        })
    },

    showProjectModal() {
      this.modal.state = true
    },
    hideProjectModal() {
      this.modal.state = false
    },
    resetProjectModal() {
      this.modal.state = false
      this.modal.form = {}
    },
    resetList() {
      this.items = []
      this.total = 0
    },
  },
})
