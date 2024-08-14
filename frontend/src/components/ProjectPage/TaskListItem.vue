<template>
  <q-expansion-item class="q-ma-sm bg-white br-10 overflow-hidden">
    <template v-slot:header>
      <div class="row justify-between items-center full-width q-pr-md q-pr-md-none">
        <!-- Дата начала задания -->
        <div class="col-12 col-md-2">
          <div class="row items-center">
            <q-icon name="calendar_month" size="20px" color="primary" class="q-mr-xs" />

            <span class="item-secondary-text">{{ item.startTime }}</span>
          </div>

          <div class="row items-center">
            <q-icon name="schedule" size="20px" color="primary" class="q-mr-xs" />

            <span class="item-secondary-text">{{ item.startDate }}</span>
          </div>
        </div>

        <!-- Название и тип работ -->
        <div class="col-12 col-md-3 q-mt-sm q-mt-md-none column">
          <span class="font-semibold">
            {{ item.title }}
          </span>

          <span class="item-secondary-text">{{ item.workTypeTitle }}</span>
        </div>

        <!-- Количество исполнителей и просмотров -->
        <div class="col-md-3 column q-mt-sm q-mt-md-none">
          <div class="row items-center">
            <q-icon name="person" size="20px" color="primary" class="q-mr-xs" />

            <span class="item-secondary-text text-red">
              Исполнителей {{ item.workersCount }} / {{ item.workersRequiredCount }}
            </span>
          </div>

          <div class="row items-center">
            <q-icon name="visibility" size="20px" color="primary" class="q-mr-xs" />

            <span class="item-secondary-text">Просмотров {{ item.views }}</span>
          </div>
        </div>

        <!-- Ставка и итоговая стоимость -->
        <div class="col-md-3 column q-mt-sm q-mt-md-none">
          <div class="q-mt-sm q-mt-md-none row items-center">
            <q-icon name="account_balance_wallet" size="20px" color="primary" class="q-mr-xs" />

            <span class="item-secondary-text">Ставка {{ toMoney(item.price) }}₽</span>
          </div>

          <div class="q-mt-sm q-mt-md-none row items-center">
            <q-icon name="credit_score" size="20px" color="primary" class="q-mr-xs" />

            <span class="item-secondary-text">Итоговая стоимость {{ toMoney(item.totalPrice) }}₽</span>
          </div>
        </div>
      </div>
    </template>

    <!-- Раскрывающийся список работников -->
    <workers-list :workers="item.workers" :is-task-finished="item.isFinished" />
  </q-expansion-item>
</template>

<script>
import { toMoney } from 'src/utils/formatters'
import WorkersList from './TaskListItem/WorkersList.vue'

export default {
  name: 'TaskListItem',
  components: {
    WorkersList,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: { toMoney },
}
</script>
<style lang="scss" scoped>
@import 'src/css/quasar.variables.scss';
@import 'src/css/app.scss';

.item-secondary-text {
  color: $secondary;
  font-family: $font-family-inter-light;
  font-size: 12px;
}
</style>
