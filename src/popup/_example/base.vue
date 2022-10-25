<template>
  <t-space>
    <div id="container">
      <t-space>
      <t-popup  attach="#container">
        <t-button variant="outline">触发元素</t-button>
        <!-- <t-space slot="content">触发元素是指触发浮层内容显示的元素</t-space> -->
        <template #content>
          <div>触发元素是指触发浮层内容显示的元素</div>
        </template>
      </t-popup>
    </t-space>
    </div>
    <!-- 共三种方式自定义浮层内容 -->


  </t-space>
</template>

<script lang="jsx">
export default {
  methods: {
    renderPopupContent() {
      return <div>浮层内容是指浮层里面显示的全部内容，这里的浮层内容使用渲染函数定义</div>;
    },
  },
};
</script>
