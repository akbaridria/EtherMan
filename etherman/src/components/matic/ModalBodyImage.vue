<template>
    <div class="container">
        <img :src="image" class="img-fluid" />
    </div>
    
</template>

<script>
export default {
    props : {
        image : {
            type : String
        }
    }
    
}
</script>

<style scoped>

</style>