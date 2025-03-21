<script setup lang="ts">
import {ref} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter()
const levelNum = ref(1)
const liveMode = ref(false)
const multiPlayer = ref(false)

const startGame = () => {
  router.push({
    name: 'Level',
    params: {level_num: levelNum.value},
    query: {
      live: liveMode.value.toString(),
      'multi-player': multiPlayer.value.toString()
    }
  })
}
</script>

<template>
  <div class="level-selector">
    <h1>坦克大战</h1>

    <div class="options">
      <label>
        关卡号：
        <input v-model.number="levelNum" type="number" min="1" max="10">
      </label>

      <label>
        <input v-model="liveMode" type="checkbox">
        实时模式
      </label>

      <label>
        <input v-model="multiPlayer" type="checkbox">
        多人模式
      </label>
    </div>

    <button @click="startGame" class="start-button">开始战斗</button>
  </div>
</template>

<style lang="scss" scoped>
.level-selector {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(45deg, #2c3e50, #3498db);
  color: #ecf0f1;

  h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  .options {
    background: rgba(255, 255, 255, 0.1);
    padding: 2rem;
    border-radius: 8px;
    margin-bottom: 2rem;

    label {
      display: block;
      margin: 1rem 0;
      font-size: 1.2rem;

      input[type="number"] {
        width: 80px;
        padding: 0.5rem;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid #ecf0f1;
        color: inherit;
        border-radius: 4px;
      }

      input[type="checkbox"] {
        margin-right: 0.5rem;
      }
    }
  }

  .start-button {
    padding: 1rem 2rem;
    font-size: 1.2rem;
    background: #e74c3c;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.95);
    }
  }
}
</style>