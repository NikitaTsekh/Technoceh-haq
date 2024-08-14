<template>
  <q-page>
    <p class="font-semibold">Profile</p>

    <q-btn rounded color="primary" label="Выйти" @click="onLogout" />
  </q-page>
</template>

<script>
import { useProfileStore } from 'src/stores/profile'

export default {
  name: 'ProfilePage',
  data() {
    return {
      profileStore: useProfileStore(),
    }
  },
  methods: {
    onLogout() {
      this.profileStore.logout()
      this.$router.push('auth')
    },
  },
}
</script>
