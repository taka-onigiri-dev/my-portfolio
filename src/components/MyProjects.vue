<template>
  <Section>
    <template #title> プロジェクト紹介 </template>
    <p class="card-text text-dark">YouTube 字幕と生成AIを活用した多言語学習支援 Web アプリ</p>
    <p class="mb-1 text-dark">
      <strong>概要：</strong><br />
      日本語と韓国語の字幕における親和性や言語的な類似性に着目し、オタクコンテンツを通じてファン同士が学習データや解説を共有・蓄積できる語学学習サイトを開発中。
    </p>
    <ul class="mb-2">
      <li>
        <strong>バックエンド：</strong>Python（Django）<br />
        選定理由：大学時代に YouTube 字幕分析ツールで Python を使用していた経験があり、また YouTube
        関連の情報が Python で多く見つかるため。
      </li>
      <li>
        <strong>フロントエンド：</strong>TypeScript、Vue.js<br />
        選定理由：Vue.js は業務未経験だったため、個人開発での習得を目的に選定。
      </li>
      <li><strong>データベース：</strong>PostgreSQL</li>
      <li><strong>その他技術：</strong>Docker、Nginx</li>
    </ul>
    <div class="mb-3">
      <img
        src="/src/assets/demo.gif"
        alt="アプリデモGif"
        class="img-fluid rounded border w-100"
        style="height: auto"
      />
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from './Section.vue'
// ...existing code...
</script>

<style scoped>
/* ...existing code... */
</style>
