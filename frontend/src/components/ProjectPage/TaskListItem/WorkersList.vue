<template>
  <q-card>
    <q-card-section>
      <div class="row items-center justify-around">
        <div
          class="text-center font-semibold"
          v-for="column in visibleColumns"
          :key="column.title"
          :class="'col-' + column.col"
        >
          {{ column.label }}
        </div>
      </div>

      <div class="row items-center justify-around worker-item" v-for="worker in workers" :key="worker.id">
        <div
          class="text-center q-pa-xs"
          v-for="column in visibleColumns"
          :key="column.title"
          :class="'col-' + column.col"
        >
          {{ worker[column.title] }} {{ column.postfix }}
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'WorkersList',
  props: {
    workers: {
      type: Array,
      required: true,
      default: () => [],
    },
    isTaskFinished: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data() {
    return {
      columns: [
        {
          label: 'ФИО',
          title: 'fullName',
          col: '3',
          postfix: null,
          isVisible: () => true,
        },
        {
          label: 'Номер телефона',
          title: 'phone',
          col: '5',
          postfix: null,
          isVisible: () => true,
        },
        {
          label: 'План',
          title: 'plan',
          col: '2',
          postfix: null,
          isVisible: () => true,
        },
        {
          label: 'Вероятность выхода',
          title: 'reliability',
          col: '2',
          postfix: '%',
          isVisible: context => !context.isTaskFinished,
        },
        {
          label: 'Факт',
          title: 'fact',
          col: '2',
          postfix: null,
          isVisible: context => context.isTaskFinished,
        },
      ],
    }
  },
  computed: {
    visibleColumns() {
      return this.columns.filter(v => v.isVisible(this))
    },
  },
}
</script>
<style lang="scss" scoped>
@import 'src/css/quasar.variables.scss';

.worker-item {
  border-radius: 10px;
  background-color: $bg-bright;
  padding: 5px;
  margin-top: 5px;
}
</style>
