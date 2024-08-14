import { api } from 'src/boot/axios'
import ProjectListItem from 'src/models/Project/ProjectListItem'
import TaskInfoItem from 'src/models/Project/TaskInfoItem'

const PROJECTS = [
  new ProjectListItem({
    id: 1,
    title: 'ЖК Солнечный',
    address: 'Кирова ул., 84',
    tasksCount: 0,
    workersCount: 0,
    workersRequiredCount: 13,
    attentionCount: 0,
    todoCount: 0,
    budget: 100000,
    spentBudget: 0,
    tasks: [],
  }),
  new ProjectListItem({
    id: 2,
    title: 'ЖК Перспективный',
    address: 'Восточно-Кругликовская ул., 40',
    tasksCount: 10,
    workersCount: 37,
    workersRequiredCount: 40,
    attentionCount: 16,
    todoCount: 9,
    budget: 320000,
    spentBudget: 19000,
    tasks: [
      new TaskInfoItem({
        id: 1,
        workTypeTitle: 'Земляные работы по разработке котлована',
        workersCount: 8,
        workersRequiredCount: 10,
      }),
      new TaskInfoItem({
        id: 2,
        workTypeTitle: 'Каменная кладка 2-го — 7-го эт.',
        workersCount: 5,
        workersRequiredCount: 14,
      }),
      new TaskInfoItem({
        id: 3,
        workTypeTitle: 'Конструкции ж/б 1го',
        workersCount: 7,
        workersRequiredCount: 7,
      }),
    ],
  }),
  new ProjectListItem({
    id: 3,
    title: 'ЖК Достояние',
    address: 'ул. Конгрессная, 31',
    tasksCount: 3,
    workersCount: 14,
    workersRequiredCount: 18,
    attentionCount: 3,
    todoCount: 2,
    budget: 34000,
    spentBudget: 9000,
    tasks: [
      new TaskInfoItem({
        id: 1,
        workTypeTitle: 'Монолитные работы',
        workersCount: 13,
        workersRequiredCount: 13,
      }),
      new TaskInfoItem({
        id: 2,
        workTypeTitle: 'Алюминиевые конструкции',
        workersCount: 4,
        workersRequiredCount: 5,
      }),
      new TaskInfoItem({
        id: 3,
        workTypeTitle: 'Отделочные работы',
        workersCount: 1,
        workersRequiredCount: 5,
      }),
    ],
  }),
]
export default class ProjectApi {
  static index() {
    return new Promise(resolve => {
      const result = {
        data: {
          items: PROJECTS,
          total: PROJECTS.length,
        },
      }

      setTimeout(() => resolve(result), 1000)
    })

    return api.get('projects')
  }

  static show(projectId) {
    return new Promise(resolve => {
      const result = PROJECTS.find(v => v.id == projectId)

      setTimeout(() => resolve(result), 1000)
    })

    return api.get(`projects/${projectId}`)
  }

  static store(data) {
    return api.post('projects/', data)
  }
}
