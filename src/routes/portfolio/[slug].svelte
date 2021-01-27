<script context="module" lang="ts">
    import works from "./_works";

    export async function preload({ params }) {
        return {
            post: works.find((w) => w.slug === params.slug),
        };
    }
</script>

<script lang="ts">
    import Section from "../../components/Section.svelte";
    export let post: { slug: string; title: string; description: any; sections: any[] };
</script>

<svelte:head>
    <title>{post.title}</title>
</svelte:head>

<Section spacey={true}>
    <div class="rounded bg-gray-800 text-white p-28">
        <h1 class="text-4xl font-bold mb-4">{post.title}</h1>
        <p class="text-lg">{post.description}</p>
    </div>
</Section>

{#each post.sections as section}
    <Section spacey={true} bg={section.props.background}>
        <svelte:component this={section.component} {...section.props} />
    </Section>
{/each}
