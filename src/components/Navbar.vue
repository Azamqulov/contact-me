<template>
  <main>
    <div class="container text-white">
        <div class="logo">
            <img src="../assets/logo.png" alt="Logo">
            <h1></h1>
        </div>

        <FontAwesomeIcon :icon="faHouse" />
    </div>
  </main>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'
import { faTree } from '@awesome.me/kit-KIT_CODE/icons/sharp/solid'
import { faDog } from '@awesome.me/kit-KIT_CODE/icons/duotone/solid'
import { faDragon } from '@awesome.me/kit-KIT_CODE/icons/sharp-duotone/solid'
export default {
    data() {
        return {
            
        }
    },
};
</script>

<style>
</style>