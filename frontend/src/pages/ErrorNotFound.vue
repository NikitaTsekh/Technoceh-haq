<template>
  <div class="fullscreen bg-bg text-accent text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">404</div>

      <div class="text-h2" style="opacity: 0.4">Страница не найдена</div>

      <q-btn class="q-mt-xl" flat to="/" no-caps>
        <span class="fs-16 text-primary">Вернуться назад</span>
      </q-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorNotFound',
}
</script>
