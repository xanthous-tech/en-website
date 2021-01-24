<script>
    import Modal from "../modals/Image.svelte";

    export let title;
    export let image;
    export let description;
</script>

<div class="container mx-auto">
    <div class="grid gap-24 grid-cols-1 lg:grid-cols-2">
        <Modal>
            <div slot="button" class="flex flex-col justify-center items-center">
                <img src={image} alt="" class="w-full object-fit rounded-xl" />
            </div>

            <img slot="content" src={image} alt="" class="w-full object-fit rounded-xl" />
        </Modal>

        <div class="w-full flex flex-col justify-center">
            <h3 class="text-robots-lightblue text-left leading-tight font-bold">{title}</h3>
            <p class="mt-8 text-lg text-robots-slate lg:max-w-md">{description}</p>
        </div>
    </div>
</div>
