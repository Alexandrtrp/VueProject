<template>
    <div class="wrp">
        <div @click="onClick(cur - 1)"> - </div>
        <div v-for="page in amountPages" @click="onClick(page)" :key="page" :class="{ active: page === cur }">
            {{ page }}
        </div>
        <div @click="onClick(cur + 1)"> + </div>
    </div>
</template>

<script>
export default {
    name: "PaginationComp",
    props: {
        length: Number,
        n: Number,
        cur: Number,
    },

    computed: {
        amountPages() {
            return Math.ceil(this.length / this.n)
        }
    },


    methods: {
        onClick(p) {
            this.$emit('paginate', p)
        }
    }
}
</script>

<style scoped lang="scss">
.wrp {
    display: flex;
    justify-content: center;

    &>div {
        padding: 10px;

        &.active {
            background-color: #ccc;
        }
    }
}
</style>