<template>
    <div id="container" tabindex="0">
    </div>
</template>
<script>
export default {
    mounted() {

        this.getLocation()
    },
    methods: {
        getLocation() {
            var map = new AMap.Map('container', {
                resizeEnable: true,
                zoom: 10,
            });

        }
    }
}

</script>
<style>
#container {
    width: 100%;
    height: 100%;
}
</style>
