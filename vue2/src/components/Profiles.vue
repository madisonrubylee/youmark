<template>
    <div class="profilesContainer">
        <div class="centerProfiles">
            
        </div>
    </div>
</template>

<script lang="ts">

</script>

<style scoped>
    .profilesContainer {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        text-align: center;
        background: #FAEBFF;
        z-index: 0;
    }
    .centerProfiles {
        z-index: 100;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -moz-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -moz-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -moz-box-orient: vertical;
        -moz-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
    }
</style>