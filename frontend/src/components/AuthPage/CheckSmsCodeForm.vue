<template>
  <q-card flat class="q-pa-lg br-10 min-width-400px">
    <p class="text-center text-info fs-24">
      <span class="font-semibold text-bold">БИЛД</span>
      <span>ИТ</span>
    </p>

    <q-input
      type="number"
      input-class="sms-code-input"
      placeholder="_ _ _ _ _"
      color="primary"
      v-model="auth.code"
      @keyup.enter="onCheckCode"
      :error="v$.auth.code.$error"
      :error-message="v$.auth.code.$errors.at(-1)?.$message"
    />

    <q-btn
      color="primary"
      no-caps
      rounded
      class="full-width q-mt-md q-mb-xs"
      label="Подтвердить"
      @click="onCheckCode"
    />
  </q-card>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { useProfileStore } from 'src/stores/profile'
import { minLength, maxLength, required, numeric } from 'src/utils/validators'

export default {
  name: 'CheckSmsCodeForm',
  data() {
    return {
      profileStore: useProfileStore(),
    }
  },
  methods: {
    onCheckCode() {
      this.v$.$touch()

      if (this.v$.$error) return

      this.profileStore.checkCode()
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
        code: { required, numeric, minLength: minLength(5), maxLength: maxLength(5) },
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
