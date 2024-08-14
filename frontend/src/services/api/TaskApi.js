import { api } from 'src/boot/axios'
import TaskListItem from 'src/models/Task/TaskListItem'
import WorkerInfoItem from 'src/models/Task/WorkerInfoItem'
import WorkerTaskListItem from 'src/models/Task/WorkerTaskListItem'

const TASKS_LIST = [
  new TaskListItem({
    id: 1,
    workTypeTitle: 'Земляные работы по разработке котлована',
    workersCount: 8,
    workersRequiredCount: 10,
    startDate: '08:00',
    startTime: '01.01.2024',
    title: 'Литер 1',
    price: 100,
    totalPrice: 1000,
    isFinished: true,
    views: 13,
    workers: [
      new WorkerInfoItem({
        id: 1,
        fullName: 'Шабданов Жангазы Маматжанович',
        phone: '+7 (912) 355 12-31',
        fact: 43,
        plan: 1000,
        reliability: 43,
      }),
      new WorkerInfoItem({
        id: 2,
        fullName: 'Шайымкулов Бердибек Райымкулович',
        phone: '+7 (912) 355 12-32',
        fact: 41,
        plan: 1000,
        reliability: 13,
      }),
      new WorkerInfoItem({
        id: 3,
        fullName: 'Шертаева Айзада Алмазбековна',
        phone: '+7 (912) 355 12-33',
        fact: 99,
        plan: 1000,
        reliability: 99,
      }),
    ],
  }),
  new TaskListItem({
    id: 2,
    workTypeTitle: 'Каменная кладка 2-го — 7-го эт.',
    workersCount: 5,
    workersRequiredCount: 14,
    startDate: '08:00',
    startTime: '01.01.2024',
    title: 'Литер 2',
    price: 100,
    totalPrice: 1000,
    isFinished: false,
    views: 13,
    workers: [
      new WorkerInfoItem({
        id: 1,
        fullName: 'Баатыров Гулжигит Амангельдиевич',
        phone: '+7 (912) 355 12-31',
        fact: 43,
        plan: 1000,
        reliability: 23,
      }),
      new WorkerInfoItem({
        id: 2,
        fullName: 'Жумабаев Садирбек Султанбекович',
        phone: '+7 (912) 355 12-32',
        fact: 41,
        plan: 1000,
        reliability: 64,
      }),
      new WorkerInfoItem({
        id: 3,
        fullName: 'Кайыров Камбарбек Каныбекович',
        phone: '+7 (912) 355 12-33',
        fact: 99,
        plan: 1000,
        reliability: 83,
      }),
      new WorkerInfoItem({
        id: 4,
        fullName: 'Ажыгожоев Максат Нурумович',
        phone: '+7 (912) 355 12-33',
        fact: 99,
        plan: 1000,
        reliability: 11,
      }),
    ],
  }),
  new TaskListItem({
    id: 3,
    workTypeTitle: 'Конструкции ж/б 1го',
    workersCount: 7,
    workersRequiredCount: 7,
    startDate: '08:00',
    startTime: '01.01.2024',
    title: 'Литер 3',
    price: 100,
    totalPrice: 1000,
    isFinished: false,
    views: 13,
    workers: [
      new WorkerInfoItem({
        id: 1,
        fullName: 'Калиев Мансур Садиралиевич',
        phone: '+7 (912) 355 12-31',
        fact: 43,
        plan: 1000,
        reliability: 92,
      }),
      new WorkerInfoItem({
        id: 2,
        fullName: 'Омурбекова Назгул Алижановна',
        phone: '+7 (912) 355 12-32',
        fact: 41,
        plan: 1000,
        reliability: 47,
      }),
    ],
  }),
]

const WORKER_TASKS_LIST = [
  new WorkerTaskListItem({
    id: 1,
    address: 'ул. Конгрессная, 31',
    workTypeTitle: 'Земляные работы по разработке котлована',
    workersCount: 8,
    workersRequiredCount: 10,
    startDate: '08:00',
    startTime: '01.01.2024',
    title: 'Литер 1',
    price: 100,
    totalPrice: 1000,
    isFinished: true,
    views: 13,
    workers: [
      new WorkerInfoItem({
        id: 1,
        fullName: 'Шабданов Жангазы Маматжанович',
        phone: '+7 (912) 355 12-31',
        fact: 43,
        plan: 1000,
        reliability: 43,
      }),
      new WorkerInfoItem({
        id: 2,
        fullName: 'Шайымкулов Бердибек Райымкулович',
        phone: '+7 (912) 355 12-32',
        fact: 41,
        plan: 1000,
        reliability: 13,
      }),
      new WorkerInfoItem({
        id: 3,
        fullName: 'Шертаева Айзада Алмазбековна',
        phone: '+7 (912) 355 12-33',
        fact: 99,
        plan: 1000,
        reliability: 99,
      }),
    ],
  }),
  new WorkerTaskListItem({
    id: 2,
    address: 'Кирова ул., 84',
    workTypeTitle: 'Каменная кладка 2-го — 7-го эт.',
    workersCount: 5,
    workersRequiredCount: 14,
    startDate: '08:00',
    startTime: '01.01.2024',
    title: 'Литер 2',
    price: 100,
    totalPrice: 1000,
    isFinished: false,
    views: 13,
    workers: [
      new WorkerInfoItem({
        id: 1,
        fullName: 'Баатыров Гулжигит Амангельдиевич',
        phone: '+7 (912) 355 12-31',
        fact: 43,
        plan: 1000,
        reliability: 23,
      }),
      new WorkerInfoItem({
        id: 2,
        fullName: 'Жумабаев Садирбек Султанбекович',
        phone: '+7 (912) 355 12-32',
        fact: 41,
        plan: 1000,
        reliability: 64,
      }),
      new WorkerInfoItem({
        id: 3,
        fullName: 'Кайыров Камбарбек Каныбекович',
        phone: '+7 (912) 355 12-33',
        fact: 99,
        plan: 1000,
        reliability: 83,
      }),
      new WorkerInfoItem({
        id: 4,
        fullName: 'Ажыгожоев Максат Нурумович',
        phone: '+7 (912) 355 12-33',
        fact: 99,
        plan: 1000,
        reliability: 11,
      }),
    ],
  }),
  new WorkerTaskListItem({
    id: 3,
    address: 'Восточно-Кругликовская ул., 40',
    workTypeTitle: 'Конструкции ж/б 1го',
    workersCount: 7,
    workersRequiredCount: 7,
    startDate: '08:00',
    startTime: '01.01.2024',
    title: 'Литер 3',
    price: 100,
    totalPrice: 1000,
    isFinished: false,
    views: 13,
    workers: [
      new WorkerInfoItem({
        id: 1,
        fullName: 'Калиев Мансур Садиралиевич',
        phone: '+7 (912) 355 12-31',
        fact: 43,
        plan: 1000,
        reliability: 92,
      }),
      new WorkerInfoItem({
        id: 2,
        fullName: 'Омурбекова Назгул Алижановна',
        phone: '+7 (912) 355 12-32',
        fact: 41,
        plan: 1000,
        reliability: 47,
      }),
    ],
  }),
]

export default class TaskApi {
  // TODO
  static index() {
    return new Promise(resolve => {
      const result = {
        data: {
          items: TASKS_LIST,
          total: TASKS_LIST.length,
        },
      }

      setTimeout(() => resolve(result), 1000)
    })

    return api.get('tasks')
  }

  // TODO
  static indexForWorker() {
    return new Promise(resolve => {
      const result = {
        data: {
          items: WORKER_TASKS_LIST,
          total: WORKER_TASKS_LIST.length,
        },
      }

      setTimeout(() => resolve(result), 1000)
    })

    return api.get('tasks')
  }

  static store(data) {
    return new Promise(resolve => {
      const result = {
        data: {
          items: [new TaskListItem(data)],
        },
      }

      setTimeout(() => resolve(result), 1000)
    })

    return api.post('tasks')
  }
}
