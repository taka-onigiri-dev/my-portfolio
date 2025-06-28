<template>
  <section class="about-section py-5">
    <div class="container">
      <h2 class="mb-4">{{ $t('section.about') }}</h2>
      <p class="mb-2 text-dark">
        大阪生まれ大阪育ち、現在は東京都在住。<br />
        大学では理工学部情報学科に在籍し、自然言語処理研究室に所属。<br />
        Webアプリケーション開発を中心に、バックエンド・フロントエンド・バッチ処理まで幅広く経験。<br />
        学生時代から自然言語処理に関心があり、現在は YouTube
        字幕と生成AIを活用した語学学習アプリを個人開発中。
      </p>
      <p class="mb-2">
        <strong>興味分野：</strong>
        <span class="badge bg-light text-dark border me-1">自然言語処理</span>
        <span class="badge bg-light text-dark border me-1">生成AI</span>
        <span class="badge bg-light text-dark border me-1">外国語</span>
        <span class="badge bg-light text-dark border me-1">デジタルイラスト</span>
        <span class="badge bg-light text-dark border">VTuber</span>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import Section from './Section.vue'
</script>

<style scoped>
/* ...existing code... */
</style>
