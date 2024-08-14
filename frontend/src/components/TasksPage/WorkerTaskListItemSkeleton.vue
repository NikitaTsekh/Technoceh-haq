<template>
  <q-expansion-item class="q-ma-sm bg-white br-10 overflow-hidden">
    <template v-slot:header>
      <div class="row justify-between items-center full-width q-pr-md q-pr-md-none">
        <!-- Дата начала задания -->
        <div class="col-12 col-md-2">
          <div class="row items-center">
            <q-icon name="calendar_month" size="20px" color="primary" class="q-mr-xs" />

            <q-skeleton type="text" width="40px" height="20px" />
          </div>

          <div class="row items-center">
            <q-icon name="schedule" size="20px" color="primary" class="q-mr-xs" />

            <q-skeleton type="text" width="40px" height="20px" />
          </div>
        </div>

        <!-- Название -->
        <div class="col-12 col-md-3 q-mt-sm q-mt-md-none">
          <q-skeleton type="text" class="flex-1" height="20px" />
        </div>

        <!-- Количество исполнителей и просмотров -->
        <div class="col-md-3 column q-mt-sm q-mt-md-none">
          <div class="row items-center">
            <q-icon name="person" size="20px" color="primary" class="q-mr-xs" />

            <div class="row items-center">
              <span class="item-secondary-text q-mr-xs">Исполнителей</span>
              <q-skeleton type="text" width="15px" height="20px" />
              <span class="item-secondary-text q-mx-xs">/</span>
              <q-skeleton type="text" width="15px" height="20px" />
            </div>
          </div>

          <div class="row items-center">
            <q-icon name="visibility" size="20px" color="primary" class="q-mr-xs" />

            <div class="row items-center">
              <span class="item-secondary-text q-mr-xs">Просмотров</span>
              <q-skeleton type="text" width="15px" height="20px" />
            </div>
          </div>
        </div>

        <!-- Ставка и итоговая стоимость -->
        <div class="col-md-3 column q-mt-sm q-mt-md-none">
          <div class="col-md-3 q-mt-sm q-mt-md-none row items-center">
            <q-icon name="account_balance_wallet" size="20px" color="primary" class="q-mr-xs" />

            <q-skeleton type="text" width="15px" height="20px" />
          </div>

          <div class="col-md-3 q-mt-sm q-mt-md-none row items-center">
            <q-icon name="credit_score" size="20px" color="primary" class="q-mr-xs" />

            <q-skeleton type="text" width="15px" height="20px" />
          </div>
        </div>
      </div>
    </template>

    <!-- Раскрывающийся список работников -->
    <div class="q-pa-md">
      <q-skeleton type="text" class="flex-1" height="20px" />
      <q-skeleton type="text" class="flex-1" height="20px" />
      <q-skeleton type="text" class="flex-1" height="20px" />
    </div>
  </q-expansion-item>
</template>

<script>
export default {
  name: 'WorkerTaskListItemSkeleton',
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
