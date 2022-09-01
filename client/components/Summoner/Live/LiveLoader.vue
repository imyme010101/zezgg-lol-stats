<template>
  <div class="w-full flex flex-col justify-center items-center">
    <SquareLoader></SquareLoader>
    <div class="text-base font-bold text-teal-600 py-2">로딩중입니다...</div>
  </div>
</template>

<script>
import { SquareLoader } from '@saeris/vue-spinners'

export default {
  components: {
    SquareLoader
  }
}
</script>
