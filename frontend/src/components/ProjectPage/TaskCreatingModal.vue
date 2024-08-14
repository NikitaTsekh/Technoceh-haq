<template>
  <q-dialog v-model="modal.state" @hide="onModalHide">
    <q-card flat class="overflow-hidden">
      <q-card-section class="column row-md justify-between">
        <p class="modal-header">Создание задания</p>

        <div>
          <p class="font-semibold">Доступный бюджет:</p>
          <p class="font-light">{{ toMoney(budget) }}₽</p>
        </div>
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

        <!-- Дата задания -->
        <q-input
          class="col-12 col-md-6"
          v-model="modal.form.startDate"
          label="Дата задания"
          placeholder="дд.мм.гггг"
          no-error-icon
          :error="v$.modal.form.startDate.$error"
          :error-message="v$.modal.form.startDate.$errors.at(-1)?.$message"
          mask="##.##.####"
          @blur="v$.modal.form.startDate.$touch"
        >
          <template #append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy v-model="startDatePicker" cover transition-show="scale" transition-hide="scale">
                <q-date
                  v-model="modal.form.startDate"
                  today-btn
                  mask="DD.MM.YYYY"
                  :locale="$config.dateLocale"
                  @update:model-value="startDatePicker = false"
                >
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Закрыть" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <!-- Время задания -->
        <q-input
          class="col-12 col-md-6"
          v-model="modal.form.startTime"
          label="Время задания"
          placeholder="чч:мм"
          no-error-icon
          :error="v$.modal.form.startTime.$error"
          :error-message="v$.modal.form.startTime.$errors.at(-1)?.$message"
          mask="##:##"
          @blur="v$.modal.form.startTime.$touch"
        >
          <template #append>
            <q-icon name="schedule" class="cursor-pointer">
              <q-popup-proxy v-model="startTimePicker" cover transition-show="scale" transition-hide="scale">
                <q-time
                  format24h
                  v-model="modal.form.startTime"
                  today-btn
                  mask="HH:mm"
                  :locale="$config.dateLocale"
                  @update:model-value="startTimePicker = false"
                >
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Закрыть" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <!-- Вид работы -->
        <q-input
          class="col-12 col-md-6"
          color="primary"
          label="Вид работы"
          label-color="secondary"
          v-model="modal.form.workTypeTitle"
          :error="v$.modal.form.workTypeTitle.$error"
          :error-message="v$.modal.form.workTypeTitle.$errors[0]?.$message"
          no-error-icon
        />

        <!-- Количество работников -->
        <q-input
          type="number"
          class="col-12 col-md-6"
          color="primary"
          label="Количество работников"
          label-color="secondary"
          v-model.number="modal.form.workersRequiredCount"
          :error="v$.modal.form.workersRequiredCount.$error"
          :error-message="v$.modal.form.workersRequiredCount.$errors[0]?.$message"
          no-error-icon
        />

        <!-- Ставка -->
        <q-input
          class="col-12 col-md-6"
          type="number"
          color="primary"
          label="Ставка"
          label-color="secondary"
          v-model.number="modal.form.price"
          :error="v$.modal.form.price.$error"
          :error-message="v$.modal.form.price.$errors[0]?.$message"
          no-error-icon
        >
          <template v-slot:append>
            <q-icon name="currency_ruble" color="secondary" size="16px" />
          </template>
        </q-input>

        <!-- Предлагаемая ставка -->
        <div class="col-12">
          <p class="font-semibold">Предлагаемая ставка:</p>
          <p class="font-light">{{ suggestedPrice }}₽</p>
        </div>
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
import { useTasksStore } from 'src/stores/tasks'
import { toMoney } from 'src/utils/formatters'

export default {
  name: 'TaskCreatingModal',
  data() {
    return {
      tasksStore: useTasksStore(),

      suggestedPrice: 123,
      budget: 1000,

      startDatePicker: false,
      startTimePicker: false,
    }
  },
  validations() {
    return {
      modal: {
        form: {
          title: { required, maxLength: maxLength(100) },
          price: { required, numeric, minValue: minValue(0), maxValue: maxValue(100000) },
          startDate: { required },
          startTime: { required },
          workTypeTitle: { required, maxLength: maxLength(100) },
          workersRequiredCount: { required, numeric },
        },
      },
    }
  },
  methods: {
    onCreate() {
      this.v$.$touch()

      if (this.v$.$error) return

      this.tasksStore.store().then(() => {
        this.tasksStore.hideTaskModal()
      })
    },
    onModalHide() {
      this.tasksStore.resetTaskModal()
    },
    toMoney,
  },
  computed: {
    modal() {
      return this.tasksStore.modals.task
    },
  },
  setup() {
    return {
      v$: useVuelidate(),
    }
  },
}
</script>
