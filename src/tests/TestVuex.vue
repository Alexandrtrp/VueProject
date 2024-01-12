<template>
    <div>
        <input type="text" name="test" v-model="propComp">
        <button @click="onSave">Save</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'TestVuex',
    data () {
        return {
            propComp: ''
        }
    },
    methods: {
        ...mapActions(['addData']),
        onSave(){
            this.addData(this.propComp)
        }
    }
}
</script>