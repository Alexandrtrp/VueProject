<template>
    <v-card class="text-left pa-8">
        <v-text-field v-model="date" label="Date"/>
        <v-select v-model="category" :items="options" label="Category"></v-select>
        <v-text-field v-model="value" label="Value"/>
        <v-btn @click="onSaveClick">Save</v-btn>
    </v-card>
</template>

<script>
export default {
    name: "AddPaymentForm",
    data() {
        return {
            category: '',
            date: '',
            value: 0
        }
    },
    computed: {
        getCurrentDate() {
            const today = new Date();
            const d = today.getDate();
            const m = today.getMonth() + 1;
            const y = today.getFullYear()
            return `${d}.${m}.${y}`
        },
        options(){
        return this.$store.getters.getCategoryList
    }
    },


    methods: {
        onSaveClick() {
            const data = {
                value: this.value,
                date: this.date || this.getCurrentDate,
                category: this.category
            }
            this.$store.commit('addDataToPaymentsList', data)
            this.$emit('addNewPayment', data)
        }
    },
    mounted(){
        if(!this.category?.length){
            this.$store.dispatch('fetchCategory')
        }
    }
}
</script>