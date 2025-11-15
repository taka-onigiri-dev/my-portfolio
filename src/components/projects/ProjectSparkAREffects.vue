<template>
  <div class="container py-5">
    <!-- 概要 -->
    <div class="mb-5">
      <h3 class="mb-3 fw-bold">
        <i class="bi bi-info-circle me-2"></i>{{ $t('sparkAR.sparkAREffects.overview.title') }}
      </h3>
      <div class="mx-2">
        <p>
          {{ $t('sparkAR.sparkAREffects.overview.description') }}
        </p>
      </div>
    </div>

    <hr class="my-5" />

    <!-- デモGIF -->
    <div class="mb-5 text-center">
      <img src="@/assets/spark-ar.gif" class="img-fluid" />
    </div>

    <hr class="my-5" />

    <!-- 技術スタック -->
    <div class="mb-5">
      <h3 class="mb-4 fw-bold">
        <i class="bi bi-gear me-2"></i>{{ $t('sparkAR.sparkAREffects.techStack.title') }}
      </h3>
      <div class="mx-2">
        <ul>
          <li>{{ $t('sparkAR.sparkAREffects.techStack.items.0') }}</li>
        </ul>
      </div>
    </div>

    <hr class="my-5" />

    <!-- おみくじエフェクトの詳細 -->
    <div class="mb-5">
      <h3 class="mb-3 fw-bold">
        <i class="bi bi-stars me-2"></i>{{ $t('sparkAR.sparkAREffects.omikuji.title') }}
      </h3>
      <div class="mx-2">
        <p>
          {{ $t('sparkAR.sparkAREffects.omikuji.description') }}
        </p>
        <div class="text-center mt-3">
          <img src="@/assets/spark-ar-omikuji.jpg" class="img-fluid rounded" />
        </div>
      </div>
    </div>

    <hr class="my-5" />

    <!-- Instagram Insights -->
    <div class="mb-5">
      <h3 class="mb-3 fw-bold">
        <i class="bi bi-bar-chart me-2"></i>{{ $t('sparkAR.sparkAREffects.insights.title') }}
      </h3>
      <div class="mx-2">
        <ul>
          <li>{{ $t('sparkAR.sparkAREffects.insights.items.0') }}</li>
          <li>{{ $t('sparkAR.sparkAREffects.insights.items.1') }}</li>
          <li>{{ $t('sparkAR.sparkAREffects.insights.items.2') }}</li>
        </ul>
        <div class="text-center mt-3">
          <img src="@/assets/spark-ar-insights.PNG" class="img-fluid rounded" />
        </div>
      </div>
    </div>

    <hr class="my-5" />

    <!-- コメントや反響 -->
    <div>
      <h3 class="mb-3 fw-bold">
        <i class="bi bi-chat-dots me-2"></i>{{ $t('sparkAR.sparkAREffects.reactions.title') }}
      </h3>
      <div class="mx-2">
        <p>
          {{ $t('sparkAR.sparkAREffects.reactions.description') }}
        </p>
      </div>
    </div>
  </div>
</template>
