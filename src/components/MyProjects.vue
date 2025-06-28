<template>
  <section class="my-projects py-5 bg-light">
    <div class="container">
      <h2 class="h2 mb-4"><i class="bi bi-kanban me-2"></i>プロジェクト紹介（My Projects）</h2>
      <div class="card mb-3">
        <div class="card-body">
          <h3 class="h5 card-title">
            <i class="bi bi-lightbulb me-2 text-warning"></i>YouTube 字幕 × 生成 AI 語学学習アプリ
          </h3>
          <p class="card-text">YouTube 字幕と生成 AI を活用した多言語学習支援 Web アプリ</p>
          <p class="mb-1">
            <strong>概要：</strong><br />
            日本語と韓国語の字幕における相性の良さと言語的な類似性に着目し、オタクコンテンツを通じてファン同士が学習データや解説を共有・蓄積できる語学学習サイトを開発中。
          </p>
          <ul class="mb-2">
            <li>
              <i class="bi bi-cpu me-1 text-success"></i><strong>バックエンド：</strong>Python
              (Django)
            </li>
            <li>
              <i class="bi bi-window me-1 text-info"></i
              ><strong>フロントエンド：</strong>TypeScript, Vue.js
            </li>
            <li>
              <i class="bi bi-database me-1 text-primary"></i
              ><strong>データベース：</strong>PostgreSQL
            </li>
            <li>
              <i class="bi bi-box-seam me-1 text-secondary"></i><strong>その他技術：</strong>Docker,
              Nginx
            </li>
          </ul>
          <span class="badge bg-secondary"><i class="bi bi-play-btn me-1"></i>デモはGifで用意</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// ...existing code...
</script>

<style scoped>
/* ...existing code... */
</style>
