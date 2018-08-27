<template>
  <section>
    <!--<mt-header fixed title="成都软件测试"></mt-header>-->
    <!-- tab-container -->
    <div style="margin-top: 50px">
      <mt-tab-container >
        <template v-for="(item) in $router.options.routes" v-if="item.M">
          <mt-tab-container-item v-for="child in item.children" :index="child.path" :key="child.path">
            <i :class="child.iconCls"></i>
            <mt-cell :title=child.name />
          </mt-tab-container-item>
        </template>
      </mt-tab-container>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
    export default {
        data() {
            return {
              selected: "",
            }
        },
        methods: {
        },
        mounted() {
        }
    }

</script>

<style scoped lang="scss">

</style>
