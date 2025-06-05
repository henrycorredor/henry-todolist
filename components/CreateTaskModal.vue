<script setup lang="ts">
import {useTasksStore} from '~/stores/tasks'
import {TaskStatus} from "~/types/enums";

const formValues = ref({
  taskTitle: "",
  taskDesc: ""
})

function updateForm(e: Event) {
  const target = e.target as HTMLInputElement
  formValues.value = {
    ...formValues.value,
    [target.id]: target.value,
  }
}

const taskStore = useTasksStore()

watch(() => taskStore.operationHandler.id, (newId) => {
  const updatedFormValues = {
    taskTitle: "",
    taskDesc: ""
  }

  if (newId) {
    const task = taskStore.tasks.find(task => task.id === newId)
    if (task) {
      updatedFormValues.taskDesc = task.desc
      updatedFormValues.taskTitle = task.title
    }
  }

  formValues.value = updatedFormValues
})

function handleSubmit() {
  const taskData = {
    title: formValues.value.taskTitle,
    desc: formValues.value.taskDesc,
  }
  if (taskStore.operationHandler.id) {
    taskStore.updateTask(taskStore.operationHandler.id, taskData)
  } else {
    taskStore.addTask({
      ...taskData,
      id: ([...taskStore.tasks].pop()?.id || 100) + 1,
      state: TaskStatus.CREATED,
      pic: null,
      createdAt: new Date().toLocaleDateString(),
    })
  }
}
</script>

<template>
  <div class="modal fade" id="createTaskModal" tabindex="-1" aria-labelledby="createTaskModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="createTaskModalLabel">Create Task</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="taskTitle" class="form-label">Title</label>
              <input type="text" class="form-control" id="taskTitle" :value="formValues.taskTitle" @input="updateForm">
            </div>
            <div class="mb-3">
              <label for="taskDesc" class="form-label">Example textarea</label>
              <textarea class="form-control" id="taskDesc" rows="3" :value="formValues.taskDesc"
                        @input="updateForm"></textarea>
            </div>
          </form>
          <p class="text-secondary">
            Upload pictures function temporary not available.
          </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="handleSubmit()">Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>