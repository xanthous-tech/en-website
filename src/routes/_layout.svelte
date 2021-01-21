<script lang="ts">
    import Nav from '../components/Nav.svelte';
    import Footer from '../components/Footer.svelte';

    export let segment: string;
</script>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    body {
        position: relative;
        width: 100vw;
        height: 100vh;
    }
</style>

<svelte:head>
    <title>X-Tech</title>
</svelte:head>

<div class="flex flex-col min-h-screen bg-gray-200">
    <Nav {segment} />

    <main class="flex flex-col flex-1">
        <slot></slot>
    </main>

    <Footer />
</div>