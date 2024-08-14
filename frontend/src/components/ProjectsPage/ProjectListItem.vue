<template>
  <q-item class="q-ma-sm bg-white br-10" :to="routeToProject" clickable>
    <div class="col-6 q-pa-sm">
      <p>
        <span class="fs-18">Бюджет: {{ toMoney(item.budget) }}₽</span>
        /
        <span class="fs-16 text-secondary">{{ toMoney(item.spentBudget) }}₽</span>
      </p>

      <p class="fs-16 font-semibold q-mt-sm">{{ item.title }}</p>

      <div class="column row-md items-md-center q-mt-sm">
        <div class="row items-center col-6">
          <p class="q-mr-xs font-light">Задания в работе</p>
          <p class="q-mr-xs font-light font-semibold">{{ item.tasksCount }}</p>
        </div>

        <div class="row items-center col-6">
          <p class="q-mr-xs font-light">Набрано</p>
          <p class="q-mr-xs font-light font-semibold">{{ item.workersCount }} / {{ item.workersRequiredCount }}</p>
        </div>
      </div>

      <div class="row items-center q-mt-sm">
        <q-icon name="pin_drop" size="24px" color="primary" />
        <p class="font-light">{{ item.address }}</p>
      </div>

      <div class="row items-center q-mt-sm">
        <div class="col-6">
          <q-btn
            icon="priority_high"
            flat
            rounded
            dense
            no-caps
            :label="item.attentionCount"
            color="red"
            @click.stop.prevent
          />
        </div>

        <div class="col-6">
          <q-btn flat rounded dense no-caps label="Сделать" color="red" @click.stop.prevent>
            <q-badge color="red" floating rounded transparent>{{ item.todoCount }}</q-badge>
          </q-btn>
        </div>
      </div>
    </div>
    <div class="col-6 column justify-center q-pa-sm">
      <order-progress-bar
        v-for="task in item.tasks"
        :key="task.id"
        class="q-mt-sm"
        :title="task.workTypeTitle"
        :value="task.workersCount"
        :max="task.workersRequiredCount"
      />

      <span v-if="!item.tasks.length" class="text-center text-secondary">Задания отсутствуют</span>
    </div>
  </q-item>
</template>

<script>
import { toMoney } from 'src/utils/formatters'
import OrderProgressBar from './OrderProgressBar.vue'

export default {
  name: 'ProjectListItem',
  components: {
    OrderProgressBar,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    routeToProject() {
      return { name: 'project', params: { id: this.item.id } }
    },
  },
  methods: { toMoney },
}
</script>
