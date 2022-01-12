<script setup lang="ts">

const props = defineProps({
  path: {
    type: String,
    required: true,
  },
  viewBox: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: 'blob-mask',
  },
})

const dimension = computed(() => {
  const vboxArr = props.viewBox.split(' ') as string[]
  const dim = vboxArr.length < 4 ? vboxArr : vboxArr.slice(2, 4)
  return dim
})

const pathStyle = computed(() => {
  const [width, height] = dimension.value

  return {
    transform: `scale(calc(1 / ${width}), calc(1 / ${height}))`,
  }
})

const maskStyle = computed(() => {
  const name = props.name

  return {
    clipPath: `url(#${name})`,
  }
})

const wrapperStyle = computed(() => {
  const [width, height] = dimension.value
  const percent = Math.floor(Number(height) / Number(width) * 100)
  return {
    paddingTop: `${percent}%`,
  }
})

const attrs = useAttrs()

</script>

<script lang="ts">
export default defineComponent({
  inheritAttrs: false,
})
</script>


<template>
  <div v-bind="attrs" class="relative" :style="wrapperStyle">
    <div class="absolute inset-0" :style="maskStyle">
      <slot />
    </div>
  </div>
  <svg width="0" height="0">
    <clipPath :id="name" clipPathUnits="objectBoundingBox">
      <path :style="pathStyle" :d="path" />
    </clipPath>
  </svg>
</template>
