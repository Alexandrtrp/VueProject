<template>
    <div class="context" v-if="isShow" :style="styles"> 
        <div class="context__item" v-for="item, idx in items" :key="idx" @click="onClick(item)">
        {{ item.text }}</div>
    </div>
</template>

<script>
export default {
    name: "ContextMenu",
    data(){
        return{
            isShow: false,
            items: [],
            xPos: 0,
            yPos: 0
        }
    },
    methods: {
        onClick(item){
            item.action()
            this.$context.close()
        },
        onShown({items, caller}){
            this.items = items
            this.isShow = true
            this.setPosition(caller)
        },
        onClose(){
            this.items = []
            this.isShow = false
        },
        setPosition(caller){
            const pos = caller.getBoundingClientRect()
            this.xPos = pos.left,
            this.yPos = pos.top
        }
    },
    computed:{
        styles(){
            return{
                top: `${this.yPos + 10}px`,
                left: `${this.xPos + 20}px`
            }
        }
    },
    mounted(){
        this.$context.EventBus.$on('shown', this.onShown)
        this.$context.EventBus.$on('close', this.onClose)
    },
    beforeDestroy(){
        this.$context.EventBus.$off('shown', this.onShown)
        this.$context.EventBus.$off('close', this.onClose)
    }
}
</script>

<style lang="scss" scopped>
    .context {
        position: absolute;
        background: #eee;
        cursor: pointer;
    }
</style>