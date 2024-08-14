<template>
  <q-card flat class="q-ma-sm bg-white br-10 overflow-hidden">
    <q-card-section class="row justify-between items-center full-width q-pr-md q-pr-md-none">
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

      <!-- Название -->
      <div class="col-12 col-md-3 q-mt-sm q-mt-md-none column">
        <span>
          {{ item.workTypeTitle }}
        </span>
        <span class="item-secondary-text">{{ item.address }}</span>
      </div>

      <!-- Количество исполнителей и ставка  -->
      <div class="col-md-3 q-mt-sm q-mt-md-none column">
        <div class="row items-center">
          <q-icon name="person" size="20px" color="primary" class="q-mr-xs" />

          <span class="item-secondary-text text-red">
            Исполнителей {{ item.workersCount }} / {{ item.workersRequiredCount }}
          </span>
        </div>

        <div class="col-md-3 q-mt-sm q-mt-md-none row items-center">
          <q-icon name="account_balance_wallet" size="20px" color="primary" class="q-mr-xs" />

          <span class="item-secondary-text">Ставка {{ toMoney(item.price) }}₽</span>
        </div>
      </div>

      <!-- Кнопка "Взять задание" -->
      <div class="col-md-3 q-mt-sm q-mt-md-none" v-if="profileStore.issetToken">
        <q-btn label="Взять задание" color="primary" no-caps rounded unelevated />
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { useProfileStore } from 'src/stores/profile'
import { toMoney } from 'src/utils/formatters'

export default {
  name: 'WorkerTaskListItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      profileStore: useProfileStore(),
    }
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
