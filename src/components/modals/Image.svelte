<script>
    import { fade } from "svelte/transition";
    import { clickOutside } from "../../utils/click-outside";

    export let opened = false;
</script>

<span class="cursor-pointer" on:click={() => (opened = true)}>
    <slot name="button" />
</span>

{#if opened}
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="fixed z-10 inset-0 overflow-y-auto" on:mousewheel={(e) => e.preventDefault()}>
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <!--
        Background overlay, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100"
          To: "opacity-0"
      -->
            <div class="fixed inset-0 transition-opacity" transition:fade={{ duration: 150 }} aria-hidden="true">
                <div class="absolute inset-0 bg-gray-500 opacity-75" />
            </div>

            <!-- This element is to trick the browser into centering the modal contents. -->
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
            <div
                use:clickOutside
                transition:fade={{ duration: 150 }}
                on:clickoutside={() => (opened = false)}
                class="relative inline-block align-bottom bg-white rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:align-middle max-w-2xl sm:max-w-6xl sm:w-full"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
            >
                <span
                    on:click={() => (opened = false)}
                    class="transition-all duration-150 absolute right-0 top-0 bg-gray-600 rounded-lg p-2 text-white cursor-pointer bg-opacity-40 hover:bg-opacity-100"
                    >Close</span
                >
                <slot name="content" />
            </div>
        </div>
    </div>
{/if}
