<template>
 <div class="container">
    <slot></slot>
 </div>
</template>

<script>
export default {
 mixins: [toastAndDialog],
 mounted() {
     sayHello()
 },      
 components: {

 }
}
</script>

<style scoped lang="scss">

</style>