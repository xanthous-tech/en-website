<script lang="ts">
    import Nav from "../components/Nav.svelte";
    import Footer from "../components/Footer.svelte";

    export let segment: string;
</script>

<svelte:head>
    <title>X-Tech</title>
    <meta name="We're a software development team with experience in building products for companies of all sizes." />
</svelte:head>

<div class="flex flex-col min-h-screen bg-gray-200">
    <Nav {segment} />

    <main class="flex flex-col flex-1">
        <slot />
    </main>

    <Footer />
</div>

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
