<template>
  <div id="app">
    <header>
      <router-link to="/dashboard">dashboard</router-link> /
      <router-link to="/about">about</router-link> /
      <div @click="goTopageNotFound">notfound</div>
    </header>
    <div class="content">
      <router-view />
    </div>
    <transition name="fade">
      <modal-window-add-payment-form :componentName="componentName" :settings="modalSetting"/>
    </transition>
    <transition name="fade">
      <context-menu/>
    </transition>
  </div>
</template>
<script>
import ContextMenu from './components/ContextMenu.vue';

export default {
  name: "App",
  components: {
    ModalWindowAddPaymentForm: ()=>import(/*webpackChunkName:"Modal"*/'./components/ModalWindowAddPaymentForm.vue'),
    ContextMenu
  },
  data() {
    return {
      addShowForm: false,
      modalSetting: {},
      componentName: '',
    };
  },

  methods: {
    goTopageNotFound() {
      if (this.$route.name === 'NotFound') return
      this.$router.push({
        name: "NotFound"
      })
    },
    onShown(propsData){
      const {settings, name} = propsData
      this.componentName = name
      this.modalSetting = settings
    },
    onHide(){
      this.modalSetting = {}
      this.componentName = ''
    }
  },

  mounted() {
    this.$modal.EventBus.$on('shown', this.onShown)
    this.$modal.EventBus.$on('hide', this.onHide)
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
