<template>
  <Section>
    <template #title> {{ $t('section.skills') }} </template>
    <div class="mb-4">
      <div class="card mb-3 bg-white border-0">
        <div class="card-body">
          <h3 class="h5 text-dark"><i class="bi bi-code-slash me-2"></i>プログラミング言語</h3>
          <ul class="list-group mb-3">
            <li class="list-group-item bg-white text-dark border-0">
              <div class="d-flex justify-content-between align-items-center">
                <span>Java（7年）</span>
                <StarLevel :level="5" />
              </div>
              <small class="text-muted"
                >Spring Boot を中心に、バックエンドやバッチ処理の経験が豊富。主に業務で使用。</small
              >
            </li>
            <li class="list-group-item bg-white text-dark border-0">
              <div class="d-flex justify-content-between align-items-center">
                <span>TypeScript（2年）</span>
                <StarLevel :level="4" />
              </div>
              <small class="text-muted"
                >業務で Vue.js を用いた管理画面の開発を担当。個人開発でも使用。</small
              >
            </li>
            <li class="list-group-item bg-white text-dark border-0">
              <div class="d-flex justify-content-between align-items-center">
                <span>Python（5年）</span>
                <StarLevel :level="4" />
              </div>
              <small class="text-muted">個人開発やスクリプト作成で幅広く活用。</small>
            </li>
            <li class="list-group-item bg-white text-dark border-0">
              <div class="d-flex justify-content-between align-items-center">
                <span>Rust（1年）</span>
                <StarLevel :level="3" />
              </div>
              <small class="text-muted">業務でのバックエンド開発に使用。現在も習得中。</small>
            </li>
          </ul>
        </div>
      </div>
      <div class="card mb-3 bg-white border-0">
        <div class="card-body">
          <h3 class="h5 text-dark"><i class="bi bi-database me-2"></i>データベース</h3>
          <ul class="list-group mb-3">
            <li class="list-group-item bg-white text-dark border-0">
              <div class="d-flex justify-content-between align-items-center">
                <span>PostgreSQL（2年）</span>
                <StarLevel :level="4" />
              </div>
              <small class="text-muted"
                >業務および個人開発で使用。基本的な SQL 操作に問題なし。</small
              >
            </li>
            <li class="list-group-item bg-white text-dark border-0">
              <div class="d-flex justify-content-between align-items-center">
                <span>Oracle / MySQL（各 3カ月）</span>
                <StarLevel :level="1" />
              </div>
              <small class="text-muted">業務で基本操作を使用した経験あり。</small>
            </li>
          </ul>
        </div>
      </div>
      <div class="card mb-3 bg-white border-0">
        <div class="card-body">
          <h3 class="h5 text-dark"><i class="bi bi-hdd-network me-2"></i>インフラ・ツール</h3>
          <ul class="list-group mb-3">
            <li class="list-group-item bg-white text-dark border-0">
              <div class="d-flex justify-content-between align-items-center">
                <span>Docker（2年）</span>
                <StarLevel :level="3" />
              </div>
              <small class="text-muted">基本的な環境構築が可能。</small>
            </li>
            <li class="list-group-item bg-white text-dark border-0">
              <div class="d-flex justify-content-between align-items-center">
                <span>AWS</span>
                <StarLevel :level="2" />
              </div>
              <small class="text-muted"
                >基本的なサービスの利用経験あり。現在、より深い知識を習得中。</small
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="card mb-3 bg-white border-0">
        <div class="card-body">
          <h3 class="h5 text-dark"><i class="bi bi-translate me-2"></i>言語能力</h3>
          <ul class="list-group mb-3">
            <li class="list-group-item bg-white text-dark border-0">
              <div class="d-flex justify-content-between align-items-center">
                <span>韓国語</span>
                <StarLevel :level="2" />
              </div>
              <div>簡単な会話や自己紹介が可能。独学で継続学習中。</div>
              <button
                class="btn btn-link p-0 text-secondary"
                style="font-size: 0.85em; text-decoration: underline dotted"
                type="button"
                @click="openDetail('ko')"
              >
                <small>{{ showDetail.ko ? '詳細を閉じる' : '詳細を見る' }}</small>
              </button>
              <div v-show="showDetail.ko">
                <small class="text-muted">
                  大学で第二外国語として韓国語を学び、社会人になってから韓国のバーチャルアイドルグループ「이세계아이돌」に興味を持ったことをきっかけに、独学を再開。日本語との文法・語彙の類似性や、字幕を活用した学習のしやすさに魅力を感じている。YouTube
                  視聴や VRChat、Maum
                  での交流を通じて学習を進めており、軽い自己紹介程度の会話が可能。ハングルの読みや発音にはある程度慣れているが、語彙は限定的で、オタク系の用語にやや偏りがある。
                </small>
              </div>
            </li>
            <li class="list-group-item bg-white text-dark border-0">
              <div class="d-flex justify-content-between align-items-center">
                <span>中国語</span>
                <StarLevel :level="2" />
              </div>
              <div>基本的な日常表現の理解あり。発音と会話は学習中。</div>
              <button
                class="btn btn-link p-0 text-secondary"
                style="font-size: 0.85em; text-decoration: underline dotted"
                type="button"
                @click="openDetail('zh')"
              >
                <small>{{ showDetail.zh ? '詳細を閉じる' : '詳細を見る' }}</small>
              </button>
              <div v-show="showDetail.zh">
                <small class="text-muted">
                  学習歴は数ヶ月。ピンインの一部を読めるようになってきたが、正確な発音には課題がある。Hello
                  Talk
                  を活用し、日本語話者の中国人友人との交流を通じて実践的に学習中。「仕事に行く」「ご飯を食べる」などの簡単な表現の理解が進んでいる。読解力は向上中だが、話す・聞く・書くのスキルは今後の課題。HSK4級レベルの語彙を中心にインプットし、会話でアウトプットする学習スタイルを取っている。
                </small>
              </div>
            </li>
            <li class="list-group-item bg-white text-dark border-0">
              <div class="d-flex justify-content-between align-items-center">
                <span>英語</span>
                <StarLevel :level="1" />
              </div>
              <div>聞き流し中心に英語環境に慣れている段階。</div>
              <button
                class="btn btn-link p-0 text-secondary"
                style="font-size: 0.85em; text-decoration: underline dotted"
                type="button"
                @click="openDetail('en')"
              >
                <small>{{ showDetail.en ? '詳細を閉じる' : '詳細を見る' }}</small>
              </button>
              <div v-show="showDetail.en">
                <small class="text-muted">
                  中学から英語を学習していたが、学生時代には本格的な勉強には取り組まず。現在は
                  NIJISANJI EN などの英語 VTuber
                  をきっかけに、リスニングを中心とした「聞き流し」スタイルで英語に触れている。体系的な学習は行っていないが、興味のあるコンテンツを通して、少しずつ英語への理解を深めることを目指している。
                </small>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import Section from './Section.vue'
import StarLevel from './StarLevel.vue'

type LangKey = 'ko' | 'zh' | 'en'
const showDetail: Record<LangKey, boolean> = reactive({ ko: false, zh: false, en: false })
function openDetail(lang: LangKey) {
  showDetail[lang] = !showDetail[lang]
}
</script>

<style scoped>
/* ...existing code... */
</style>
