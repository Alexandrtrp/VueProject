<template>
    <div>About

        <button @click="onOpenAuth">Auth</button>
    </div>
</template>

<script>
export default {
    name: "About",
    methods:{ 
        onOpenAuth(){
            this.$modal.show('Authform', {
                title: "Форма авторизации"
            })
        }
    }
}

</script>