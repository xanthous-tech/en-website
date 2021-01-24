<script>
    export let bg = "bg-gray-200";
    export let compact = false;
</script>

{#if compact}
    <div class="px-4 mx-auto w-full {bg}">
        <div class="max-w-6xl sm:mx-auto">
            <slot />
        </div>
    </div>
{:else}
    <div class="px-4 py-16 mx-auto w-full md:px-24 lg:px-8 lg:py-16 {bg}">
        <div class="max-w-6xl sm:mx-auto">
            <slot />
        </div>
    </div>
{/if}
