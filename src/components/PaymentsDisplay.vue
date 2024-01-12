<template>
    <v-container>
        <v-row>
            <v-col :cols="1">#</v-col>
            <v-col :cols="4">Date</v-col>
            <v-col :cols="4">Category</v-col>
            <v-col :cols="2">Value</v-col>
            <v-col :cols="1">Options</v-col>
        </v-row>
            <v-row v-for="(item, idx) in items" :key="idx">
                <v-col :cols="1">{{ item.id }}</v-col>
                <v-col :cols="4"> {{ item.date }}</v-col>
                <v-col :cols="4"> {{ item.category }}</v-col>
                <v-col :cols="2"> {{ item.value }}</v-col>
                <v-col :cols="1" @click="onClickContextItem($event,item)" class="contextevent">...</v-col>
            </v-row>
    </v-container>
</template>

<script>
export default {
    name: "PaymentsDisplay",
    props: {
        items: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        editItem(item){
            console.log(item);
        },
        onClickContextItem(event, item){
            const items = [
                {
                    text: 'Edit',
                    action:()=>{
                        this.editItem(item)
                    }
                },
                {
                    text: 'Delete',
                    action:()=>{
                        console.log(item, 'delete')
                    }
                }
            ]
            this.$context.show({event, items})
        }
    }
};
</script>
