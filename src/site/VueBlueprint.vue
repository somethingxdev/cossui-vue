<script setup lang="ts">
const outer = '319.42,90 280.14,158.05 240.86,90 110,90 280.14,384.69 450.28,90'
const inner = '319.42,90 280.14,158.05 240.86,90 178.07,90 280.14,266.81 382.21,90'
const vertices: [number, number][] = [
  [110, 90],
  [178.07, 90],
  [240.86, 90],
  [319.42, 90],
  [382.21, 90],
  [450.28, 90],
  [280.14, 158.05],
  [280.14, 266.81],
  [280.14, 384.69],
]
const crosses: [number, number][] = [
  [60, 150],
  [506, 430],
  [74, 410],
]
</script>

<template>
  <svg viewBox="0 0 560 480" fill="none" aria-hidden="true" class="h-auto w-full">
    <g class="stroke-foreground/12" stroke-width="1">
      <line x1="30" y1="90" x2="530" y2="90" />
      <line x1="110" y1="50" x2="110" y2="430" />
      <line x1="450.28" y1="50" x2="450.28" y2="430" />
      <line x1="280.14" y1="30" x2="280.14" y2="460" stroke-dasharray="3 4" />
      <line x1="200" y1="384.69" x2="360" y2="384.69" />
    </g>

    <g class="stroke-muted-foreground/56 fill-muted-foreground" stroke-width="1">
      <line x1="110" y1="52" x2="450.28" y2="52" />
      <line x1="110" y1="46" x2="110" y2="58" />
      <line x1="450.28" y1="46" x2="450.28" y2="58" />
      <text x="280.14" y="44" text-anchor="middle" stroke="none" class="font-mono text-[10px]">26u</text>
      <line x1="496" y1="90" x2="496" y2="384.69" />
      <line x1="490" y1="90" x2="502" y2="90" />
      <line x1="490" y1="384.69" x2="502" y2="384.69" />
      <text x="510" y="241" stroke="none" class="font-mono text-[10px]">23u</text>
    </g>

    <polygon :points="outer" path-length="1" class="blueprint-draw stroke-foreground/72" stroke-width="1.25" stroke-linejoin="round" />
    <polygon :points="inner" path-length="1" class="blueprint-draw blueprint-draw-late stroke-brand" stroke-width="1.5" stroke-linejoin="round" />

    <circle
      v-for="([cx, cy], index) in vertices"
      :key="index"
      :cx="cx"
      :cy="cy"
      r="3.5"
      class="fill-sidebar stroke-foreground/56"
      stroke-width="1"
    />

    <g class="stroke-foreground/32" stroke-width="1">
      <g v-for="([x, y], index) in crosses" :key="index">
        <line :x1="x - 6" :y1="y" :x2="x + 6" :y2="y" />
        <line :x1="x" :y1="y - 6" :x2="x" :y2="y + 6" />
      </g>
    </g>
  </svg>
</template>

<style scoped>
.blueprint-draw {
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation: blueprint-draw 1.6s cubic-bezier(0.65, 0, 0.35, 1) 0.2s forwards;
}

.blueprint-draw-late {
  animation-delay: 0.9s;
}

@keyframes blueprint-draw {
  to {
    stroke-dashoffset: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .blueprint-draw {
    animation: none;
    stroke-dashoffset: 0;
  }
}
</style>
