<template>
  <div class="full-width row items-center justify-between">
    <p class="fs-16 font-semibold">Личный кабинет</p>

    <div>
      <p>
        <span class="font-semibold fs-16">Баланс {{ toMoney(10000) }}₽</span>
        /
        <span class="font-light">{{ toMoney(1000) }}₽</span>
      </p>
    </div>
  </div>
</template>

<script>
import { useProfileStore } from 'src/stores/profile'
import { toMoney } from 'src/utils/formatters'

export default {
  name: 'ProjectsPageToolbarContent',
  data() {
    return {
      profileStore: useProfileStore(),
    }
  },
  computed: {
    profile() {
      return this.profileStore.profile
    },
  },
  methods: { toMoney },
}
</script>
