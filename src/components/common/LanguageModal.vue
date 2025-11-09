<template>
  <Modal
    :modal-id="modalId"
    :show="show"
    @update:show="$emit('update:show', $event)"
    :title="title"
  >
    <template #default>
      <div v-if="t(`${baseKey}.detail`)">
        <small class="text-muted">{{ t(`${baseKey}.detail`) }}</small>
      </div>

      <!-- features を computed の features を使って表示（空配列なら非表示） -->
      <div v-if="features.length" class="mt-3">
        <small class="text-muted d-block mb-2">
          {{ t('skills.categories.languages.featuresTitle') }}
        </small>
        <ul class="list-unstyled ps-2 mb-0">
          <li v-for="(feature, index) in features" :key="index" class="mb-2">
            <small class="text-muted" v-html="`• ${feature.replace(/\n/g, '<br>')}`"></small>
          </li>
        </ul>
      </div>
    </template>
  </Modal>
</template>

<script setup lang="ts">
import Modal from '@/components/common/Modal.vue'
import { useI18n } from 'vue-i18n'
import { defineProps, defineEmits, computed } from 'vue'

const props = defineProps({
  modalId: { type: String, required: true },
  show: { type: Boolean, required: true },
  title: { type: String, required: true },
  baseKey: { type: String, required: true },
})

const emit = defineEmits(['update:show'])
const { t, tm } = useI18n()

// features を computed にして、存在しないか空配列なら [] を返す
const features = computed(() => {
  const v = tm(`${props.baseKey}.features`) as string[] | undefined
  return Array.isArray(v) ? v : []
})
</script>
