<template>
  <div class="full-width">
    <div v-if="project" class="row items-center justify-around">
      <div class="text-center">
        <p class="fs-16 font-semibold">
          {{ project.title }}
        </p>

        <div class="row items-center">
          <q-icon name="pin_drop" size="16px" color="white" class="q-mr-xs" />
          <p class="fs-12 font-light">
            {{ project.address }}
          </p>
        </div>
      </div>

      <p>
        <span class="font-semibold fs-16">Бюджет {{ toMoney(project.budget) }}₽</span>
        /
        <span class="font-light">{{ toMoney(project.spentBudget) }}₽</span>
      </p>
    </div>

    <q-skeleton v-else type="text" width="170px" height="40px" class="q-mx-auto" />
  </div>
</template>

<script>
import { useTasksStore } from 'src/stores/tasks'
import { toMoney } from 'src/utils/formatters'

export default {
  name: 'ProjectPageToolbarContent',
  data() {
    return {
      tasksStore: useTasksStore(),
    }
  },
  computed: {
    project() {
      return this.tasksStore.selectedProject
    },
  },
  methods: { toMoney },
}
</script>
