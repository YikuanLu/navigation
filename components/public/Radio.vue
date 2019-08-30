<template>
  <div class="myRadio">
    <div v-for="item in options" :key="item.value" class="itemRadio" @click="clickRadio(item.value);">
      <span class="checkIcon" :class="{'checked':item.value === value}"></span>
      {{ item.name }}
    </div>
  </div>
</template>
<script>
export default {
  model: {
    prop: 'value', // 绑定的值，通过父组件传递
    event: 'update' // 自定义事件名
  },
  props: {
    options: {
      type: Array,
      required: true
    },
    value: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    clickRadio (val) {
      this.$emit('update', val)
    }
  }
}
</script>
<style lang="less" scoped>
.itemRadio {
  display: inline-block;
  color: #fff;
  font-size: 12px;
  margin-right: 20px;
  cursor: pointer;
  .checkIcon {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #fff;
    border-radius: 50%;
    margin-right: 6px;
  }
  span.checked {
    border:3px solid #FFB400;
  }
}
</style>
