<script lang="ts">
    import Section from "../components/Section.svelte";

    let hovered: null | number = null;

    const works = Array(6)
        .fill(null)
        .map((_, idx) => ({
            id: idx,
            height: Math.floor(Math.random() * 200) + 400,
            title: "Random Title",
        }));
</script>

<svelte:head>
    <title>About</title>
</svelte:head>

<Section>
    <div class="max-w-xl lg:max-w-2xl">
        <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">Check out our work</h2>
        <p class="text-base text-gray-700 md:text-lg">
            We help startups in the early stages to build MVP and develop flexible systems that can easily adapt to customer feedback.
        </p>
    </div>
</Section>

<Section bg="bg-white">
    <div class="gallery" style="column-gap: 1rem">
        {#each works as work}
            <div
                on:mouseleave={() => (hovered = null)}
                on:mouseenter={() => (hovered = work.id)}
                class="overlay relative inline-block rounded bg-gray-200 w-full mb-2 transition-all duration-300 transform hover:scale-95 bg-cover cursor-pointer"
                style="height: {work.height}px; background-image: url('https://source.unsplash.com/random/{work.height}x600')"
            >
                <div class="absolute bottom-0 left-0 p-4 z-10" class:description-on={hovered === work.id} class:description-off={hovered !== work.id}>
                    <p class="text-lg text-white">{work.title}</p>
                </div>
            </div>
        {/each}
    </div>
</Section>

<style lang="postcss">
    @screen md {
        .gallery {
            columns: 2;
        }
    }

    @screen lg {
        .gallery {
            columns: 3;
        }
    }

    .description-on {
        @apply opacity-100 bottom-0 transition-all delay-200 duration-300;
    }

    .description-off {
        @apply opacity-0 -bottom-2 transition-all duration-300;
    }

    .overlay {
        position: relative;
        @apply transition-all duration-300;
    }

    .overlay:after {
        content: "\A";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0;
        @apply transition-all duration-300;
    }

    .overlay:hover:after {
        opacity: 1;
        background: rgba(0, 0, 0, 0.5);
    }
</style>
