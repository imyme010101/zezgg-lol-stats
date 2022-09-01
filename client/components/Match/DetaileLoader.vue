<template>
  <div class="w-full flex flex-col justify-center items-center py-4">
    <BounceLoader
      :color="`#4e41e1`"
      :size="50"
    ></BounceLoader>
  </div>
</template>

<script>
import { BounceLoader } from '@saeris/vue-spinners'

export default {
  components: {
    BounceLoader
  }
}
</script>
