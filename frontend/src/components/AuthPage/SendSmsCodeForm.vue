<template>
  <q-card flat class="q-pa-lg br-10 min-width-400px">
    <p class="text-center text-info fs-24">
      <span class="font-semibold text-bold">БИЛД</span>
      <span>ИТ</span>
    </p>

    <q-input
      v-model="auth.phone"
      no-error-icon
      type="tel"
      :error="v$.auth.phone.$error"
      :error-message="v$.auth.phone.$errors.at(-1)?.$message"
      label="Номер телефона"
      mask="+7 (###) ###-##-##"
      :unmasked-value="true"
    />

    <q-btn
      class="full-width q-mt-sm"
      :loading="profileStore.auth.isLoading"
      rounded
      no-caps
      color="primary"
      label="Получить код"
      @click="onSendCode"
    />
  </q-card>
</template>

<script>
import { required, numeric, minLengthPhone } from 'src/utils/validators'

import { useVuelidate } from '@vuelidate/core'
import { useProfileStore } from 'src/stores/profile'

export default {
  name: 'SendSmsCodeForm',
  data() {
    return {
      profileStore: useProfileStore(),
    }
  },
  methods: {
    onSendCode() {
      this.v$.$touch()

      if (this.v$.$error) return

      this.profileStore.sendCode()
    },
  },
  computed: {
    auth() {
      return this.profileStore.auth
    },
  },
  validations() {
    return {
      auth: {
        phone: { required, numeric, minLengthPhone },
      },
    }
  },
  setup() {
    return {
      v$: useVuelidate(),
    }
  },
}
</script>
