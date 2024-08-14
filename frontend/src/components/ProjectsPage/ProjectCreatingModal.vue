<template>
  <q-dialog v-model="modal.state" @hide="onModalHide">
    <q-card flat class="overflow-hidden">
      <q-card-section class="column row-md justify-between">
        <p class="modal-header">Создание проекта</p>
      </q-card-section>

      <q-card-section class="row items-center q-col-gutter-md">
        <!-- Название -->
        <q-input
          class="col-12"
          color="primary"
          label="Название"
          label-color="secondary"
          v-model="modal.form.title"
          :error="v$.modal.form.title.$error"
          :error-message="v$.modal.form.title.$errors[0]?.$message"
          no-error-icon
        />

        <!-- Бюджет -->
        <q-input
          type="number"
          class="col-12"
          color="primary"
          label="Бюджет"
          label-color="secondary"
          v-model.number="modal.form.budget"
          :error="v$.modal.form.budget.$error"
          :error-message="v$.modal.form.budget.$errors[0]?.$message"
          no-error-icon
        />

        <!-- Адрес -->
        <q-input
          class="col-12"
          color="primary"
          label="Адрес"
          label-color="secondary"
          v-model="modal.form.address"
          :error="v$.modal.form.address.$error"
          :error-message="v$.modal.form.address.$errors[0]?.$message"
          no-error-icon
        />
      </q-card-section>

      <q-card-section>
        <q-btn
          class="full-width"
          color="primary"
          label="Создать"
          no-caps
          rounded
          @click="onCreate"
          :loading="modal.isLoading"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, minValue, maxValue, numeric, maxLength } from 'src/utils/validators'
import { toMoney } from 'src/utils/formatters'
import { useProjectsStore } from 'src/stores/projects'

export default {
  name: 'ProjectCreatingModal',
  data() {
    return {
      projectsStore: useProjectsStore(),
    }
  },
  validations() {
    return {
      modal: {
        form: {
          title: { required, maxLength: maxLength(100) },
          budget: { required, numeric, minValue: minValue(0), maxValue: maxValue(100000) },
          address: { required, maxLength: maxLength(100) },
        },
      },
    }
  },
  methods: {
    onCreate() {
      this.v$.$touch()

      if (this.v$.$error) return

      this.projectsStore.store().then(() => {
        this.projectsStore.hideProjectModal()
      })
    },
    onModalHide() {
      this.projectsStore.resetProjectModal()
    },
    toMoney,
  },
  computed: {
    modal() {
      return this.projectsStore.modals.project
    },
  },
  setup() {
    return {
      v$: useVuelidate(),
    }
  },
}
</script>
