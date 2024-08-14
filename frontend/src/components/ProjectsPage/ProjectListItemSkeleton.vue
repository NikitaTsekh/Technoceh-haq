<template>
  <q-item class="q-ma-sm bg-white br-10">
    <div class="col-6 q-pa-sm">
      <div class="row items-center">
        <span class="fs-18 q-mr-xs">Бюджет:</span>
        <q-skeleton type="text" width="80px" height="20px" />
        <span class="fs-18">₽ /</span>
        <q-skeleton type="text" width="60px" height="20px" />
      </div>

      <q-skeleton type="text" class="flex-1" height="24px" />

      <div class="column row-md items-md-center q-mt-sm">
        <div class="row items-center col-6">
          <p class="q-mr-xs font-light">Задания в работе</p>
          <q-skeleton type="text" width="30px" height="24px" />
        </div>

        <div class="row items-center col-6">
          <p class="q-mr-xs font-light">Набрано</p>
          <q-skeleton type="text" width="30px" height="24px" />
        </div>
      </div>

      <div class="row q-mt-sm items-center">
        <q-icon name="pin_drop" size="24px" color="primary" />
        <q-skeleton type="text" class="flex-1" height="24px" />
      </div>

      <div class="row items-center q-mt-sm">
        <div class="row items-center col-6">
          <q-icon name="priority_high" size="24px" color="red" />
          <q-skeleton type="text" width="30px" height="24px" />
        </div>

        <div class="col-6">
          <q-btn flat rounded dense no-caps label="Сделать" color="red">
            <q-badge color="red" floating rounded transparent>
              <q-skeleton type="text" width="10px" />
            </q-badge>
          </q-btn>
        </div>
      </div>
    </div>
    <div class="col-6 column justify-center q-pa-sm">
      <q-skeleton type="text" class="flex-1" />
      <q-skeleton type="text" class="flex-1" />
      <q-skeleton type="text" class="flex-1" />
      <q-skeleton type="text" class="flex-1" />
      <q-skeleton type="text" class="flex-1" />
    </div>
  </q-item>
</template>

<script>
export default {
  name: 'ProjectListItemSkeleton',
}
</script>
