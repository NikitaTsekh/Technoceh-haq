<template>
  <q-page class="h-100 flex-center column">
    <transition name="fade" mode="out-in">
      <send-sms-code-form v-if="!profileStore.auth.isSmsSent" />
      <check-sms-code-form v-else-if="profileStore.auth.isSmsSent" />
    </transition>
  </q-page>
</template>

<script>
import { useProfileStore } from 'src/stores/profile'

import CheckSmsCodeForm from 'src/components/AuthPage/CheckSmsCodeForm.vue'
import SendSmsCodeForm from 'src/components/AuthPage/SendSmsCodeForm.vue'

export default {
  name: 'AuthPage',
  data() {
    return {
      profileStore: useProfileStore(),
    }
  },
  components: {
    CheckSmsCodeForm,
    SendSmsCodeForm,
  },
}
</script>

<style scoped>
.fade-enter-active {
  transition: all 0.3s ease-out;
}

.fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
