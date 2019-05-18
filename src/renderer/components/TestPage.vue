<template>
    <div id="wrapper">
        <main>
            <h1>helo this is a test</h1>
            <button class="alt" @click="$router.push({ path: 'landing-page' })">back</button>
        </main>
    </div>
</template>

<script>
export default {
    name: 'test-page',
}
</script>

<style>

</style>
