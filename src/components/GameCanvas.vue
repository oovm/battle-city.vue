<script setup lang="ts">
import {onMounted} from 'vue'
import init, {Game} from '@/wasm/battle_city'

defineProps<{
  level: number
  isLive: boolean
  multiPlayer: boolean
}>()

onMounted(async () => {
  await init()
  const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement
  const ctx = canvas.getContext('2d')!

  const game = Game.new(canvas.width, canvas.height)

  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    game.update()
    game.draw(ctx)
    requestAnimationFrame(gameLoop)
  }

  gameLoop()
})
</script>

<template>
  <canvas
    id="gameCanvas"
    width="832"
    height="832"
    class="game-canvas"
  />
</template>

<style lang="scss" scoped>
.game-canvas {
  image-rendering: pixelated;
  background: #000;
  border: 2px solid #ecf0f1;
  border-radius: 4px;
}
</style>