<script lang="ts">
    export let status: number;
    export let error: Error;

    const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
    <title>{status}</title>
</svelte:head>

<div class="flex items-center justify-center flex-1">
    <div>
        <h1 class="text-center font-black text-5xl">{status}</h1>
        <p class="text-center">{error.message}</p>
        {#if dev && error.stack}
            <pre>{error.stack}</pre>
        {/if}
    </div>
</div>