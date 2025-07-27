<template>
  <Section :title="t('projects.title')">
    <div>
      <div v-for="project in projects" :key="project.id" class="mb-4">
        <div
          class="card h-100 shadow-sm border-secondary-subtle project-card"
          @click="openModal(project.id)"
        >
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.intro }}</p>
            <div class="mb-2 mt-auto">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="badge bg-light text-dark border me-1"
                >{{ tag }}</span
              >
            </div>
            <div class="text-muted small mt-2">
              <i class="bi bi-arrow-right"></i> {{ t('common.detail.open') }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- モーダル -->
    <Modal
      v-for="project in projects"
      :key="project.id + '-modal'"
      :modal-id="`modal-${project.id}`"
      :title="project.title"
      :show="activeModalId === project.id"
      @update:show="handleModalClose"
    >
      <component :is="project.modalComponent" />
    </Modal>
  </Section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Section from '@/components/common/Section.vue'
import Modal from '@/components/common/Modal.vue'
import ProjectLanguageApp from '@/components/projects/ProjectLanguageApp.vue'
import ProjectTestDataTool from '@/components/projects/ProjectTestDataTool.vue'
import ProjectReviewTool from '@/components/projects/ProjectReviewTool.vue'
import ProjectChineseTool from '@/components/projects/ProjectChineseTool.vue'

const { t, tm } = useI18n()

const projectComponents = {
  languageApp: ProjectLanguageApp,
  testDataTool: ProjectTestDataTool,
  reviewTool: ProjectReviewTool,
  chineseTool: ProjectChineseTool,
}

const projects = computed(() => [
  {
    id: 'language-app',
    key: 'languageApp',
    title: t('projects.languageApp.title'),
    intro: t('projects.languageApp.intro'),
    tags: tm('projects.languageApp.techStack') as string[],
    modalComponent: projectComponents.languageApp,
  },
  {
    id: 'chinese-tool',
    key: 'chineseTool',
    title: t('projects.chineseTool.title'),
    intro: t('projects.chineseTool.intro'),
    tags: tm('projects.chineseTool.techStack') as string[],
    modalComponent: projectComponents.chineseTool,
  },
  {
    id: 'review-tool',
    key: 'reviewTool',
    title: t('projects.reviewTool.title'),
    intro: t('projects.reviewTool.intro'),
    tags: tm('projects.reviewTool.techStack') as string[],
    modalComponent: projectComponents.reviewTool,
  },
  {
    id: 'testdata-tool',
    key: 'testDataTool',
    title: t('projects.testDataTool.title'),
    intro: t('projects.testDataTool.intro'),
    tags: tm('projects.testDataTool.techStack') as string[],
    modalComponent: projectComponents.testDataTool,
  },
])

const activeModalId = ref<string | null>(null)

const openModal = (id: string) => {
  activeModalId.value = id
}

const handleModalClose = () => {
  activeModalId.value = null
}
</script>

<style scoped>
.project-card {
  cursor: pointer;
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
  border-color: #28a745 !important;
}

.project-card:hover .card-title {
  color: #28a745 !important;
}

.project-card .text-muted {
  transition: color 0.3s ease;
}

.project-card:hover .text-muted {
  color: #28a745 !important;
}
</style>
