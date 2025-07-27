<template>
  <div
    class="modal fade"
    :id="modalId"
    tabindex="-1"
    :aria-labelledby="`modalLabel-${modalId}`"
    aria-hidden="true"
    ref="modalRef"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" :id="`modalLabel-${modalId}`">{{ title }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

interface Props {
  modalId: string
  title: string
  show?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  show: false,
})

const emit = defineEmits<{
  'update:show': [value: boolean]
}>()

const modalRef = ref<HTMLElement | null>(null)
const modalInstance = ref<any>(null)

const showModal = () => {
  if (modalRef.value && !modalInstance.value) {
    // @ts-ignore
    modalInstance.value = new window.bootstrap.Modal(modalRef.value)
  }
  if (modalInstance.value) {
    modalInstance.value.show()
  }
}

const hideModal = () => {
  if (modalInstance.value) {
    modalInstance.value.hide()
  }
}

const disposeModal = () => {
  if (modalInstance.value) {
    modalInstance.value.dispose()
    modalInstance.value = null
  }
}

onMounted(() => {
  if (modalRef.value) {
    modalRef.value.addEventListener('hidden.bs.modal', () => {
      emit('update:show', false)
    })
  }
})

onUnmounted(() => {
  disposeModal()
})

watch(
  () => props.show,
  (newVal) => {
    if (newVal) {
      showModal()
    } else {
      hideModal()
    }
  },
  { immediate: true },
)
</script>
