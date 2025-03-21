<script setup lang="ts">
import { defineProps } from 'vue'
import GameCanvas from '@/components/GameCanvas.vue'

type GameModeProps = {
  levelNum: number
  live: boolean
  multiPlayer: boolean
}

const props = defineProps<GameModeProps>()
</script>

<template>
  <div class="game-container">
    <h2>第 {{ props.levelNum }} 关</h2>
    <game-canvas 
      :level="props.levelNum"
      :is-live="props.live"
      :multi-player="props.multiPlayer"
    />
  </div>
</template>

<style lang="scss" scoped>
.game-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #2c3e50;

  h2 {
    position: absolute;
    top: 20px;
    left: 20px;
    color: #ecf0f1;
    z-index: 100;
  }
}
</style>