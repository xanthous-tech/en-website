<script lang="ts">
    import Section from "../components/Section.svelte";

    let budget = 15000;
    let budgetGhost = 0;

    const budgetFormatOptions = { style: "currency", currency: "USD" };
    $: budgetFormatted = new Intl.NumberFormat("en-US", budgetFormatOptions).format(budget).replace(".00", "");

    $: {
        if (budgetGhost > 50) {
            budget = 50000 + (budgetGhost - 50) * 2000;
        } else {
            budget = Math.floor((15000 + budgetGhost * 700) / 1000) * 1000;
        }
    }
</script>

<svelte:head>
    <title>About</title>
</svelte:head>

<Section>
    <div class="max-w-xl lg:max-w-2xl">
        <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
            Welcome!<br />
            Ready to get started?
        </h2>
    </div>
</Section>

<Section>
    <form class="space-y-4">
        <div class="form-group">
            <label for="budget">Budget</label>
            <input hidden name="budget" bind:value={budget} />

            <p class="text-xl">{budgetFormatted}</p>

            <div class="w-full">
                <ul class="flex justify-between">
                    <li>Small</li>
                    <li>Medium</li>
                    <li>Large</li>
                </ul>
                <input class="w-full" id="budget" type="range" min="0" max="100" step="1" bind:value={budgetGhost} />
            </div>
        </div>

        <div class="form-group">
            <label for="timeline">Timeline</label>
            <select
                name="timeline"
                id="timeline"
                class="block w-full p-3 px-2 bg-white shadow-sm rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option value="1-3 months">1-3 months</option>
                <option value="3-6 months">3-6 months</option>
                <option value="6-12 months">6-12 months</option>
                <option value="1+ year">1+ year</option>
            </select>
        </div>

        <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 space-x-0 sm:space-x-4 max-w-4xl">
            <div class="form-group flex-1">
                <label for="name">Your name</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    autocomplete="name"
                    class="p-3 focus:ring-indigo-500 focus:border-indigo-500 ring-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
            </div>

            <div class="form-group flex-1">
                <label for="email">Your email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    autocomplete="email"
                    class="p-3 focus:ring-indigo-500 focus:border-indigo-500 ring-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
            </div>
        </div>

        <div class="form-group">
            <label for="message">Message</label>
            <textarea
                rows="3"
                id="message"
                name="message"
                class="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Pitch your project"
            />
        </div>

        <div class="form-group">
            <label for="attachments">Attachments</label>

            <div class="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>

                    <div class="flex items-center text-sm text-gray-600">
                        <label
                            for="file-upload"
                            class="relative cursor-pointer px-1 bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                        </label>
                        <p class="pl-1">or drag and drop</p>
                    </div>

                    <p class="text-xs text-gray-500">Documents up to 10MB</p>
                </div>
            </div>
        </div>
    </form>
</Section>

<style>
    label {
        @apply text-lg;
        @apply font-semibold;
    }

    .form-group {
        @apply flex;
        @apply flex-col;
        @apply space-y-2;
        @apply max-w-4xl;
    }
</style>
