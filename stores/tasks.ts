import {defineStore} from 'pinia'
import {TaskStatus} from '~/types/enums'

type Operations = 'set-on-progress' | 'set-done' | 'reopen' | 'remove' | 'cancel-on-progress' | null

export type TasksState = {
  loading: boolean,
  operationHandler: {
    id: number | null,
    action: Operations
  },
  tasks: {
    id: number,
    title: string,
    desc: string,
    state: TaskStatus,
    pic: string | undefined,
    createdAt: string
  }[]
}

export const useTasksStore = defineStore('tasks', {
  state: (): TasksState => ({
    loading: false,
    operationHandler: {
      id: null,
      action: null
    },
    tasks: []
  }),
  actions: {
    setTasks(taskList: TasksState["tasks"]) {
      this.tasks = taskList
    },
    setOperationHandler(id: number | null, action: Operations): void {
      this.operationHandler = {id, action}
    },
    addTask(newTask: any) {
      this.tasks.push(newTask)
    },
    removeTask(id: number) {
      const index = this.tasks.findIndex(task => task.id === id)
      if (index >= 0) {
        this.tasks.splice(index, 1)
      }
    },
    updateTask(id: number, updatedTask: any) {
      const index = this.tasks.findIndex(task => task.id === id)
      this.tasks[index] = {...this.tasks[index], ...updatedTask}
    },
    confirmOperation() {
      const {action, id} = this.operationHandler
      if (!id) return
      let state
      if (action === 'set-on-progress') {
        state = TaskStatus.ON_PROGRESS
      }
      if (action === 'set-done') {
        state = TaskStatus.COMPLETED
      }
      if (action === 'reopen' || action === 'cancel-on-progress') {
        state = TaskStatus.CREATED
      }
      if (typeof state !== 'undefined') {
        this.updateTask(id, {state})
      }
      if (action === 'remove') {
        this.removeTask(id)
      }
    }
  },
  getters: {
    getTaskById: (state) => (index: number) => state.tasks[index],
    totalTasks: (state) => state.tasks.length
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTasksStore, import.meta.hot))
}