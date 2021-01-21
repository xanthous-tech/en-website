<script lang="ts">
    // export let segment: string;
</script>

<nav class="w-full px-4 py-5 mx-auto md:px-24 lg:px-8 bg-gray-200">
    <div class="relative flex items-center justify-between max-w-6xl mx-auto">
        <a href="/" aria-label="Company" title="Company" class="inline-flex items-center" draggable="false"
            ><svg
                viewBox="0 0 24 24"
                stroke-linejoin="round"
                stroke-width="2"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke="currentColor"
                fill="none"
                class="w-8 text-teal-accent-400"
                ><rect x="3" y="1" width="7" height="12" /> <rect x="3" y="17" width="7" height="6" /> <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" /></svg
            > <span class="ml-2 text-xl font-bold tracking-wide text-gray-900 uppercase">X-Tech</span></a
        >
        <ul class="flex items-center hidden space-x-8 lg:flex">
            <li>
                <a
                    href="/team"
                    aria-label="Our Team"
                    title="Team"
                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400">Team</a
                >
            </li>
            <li>
                <a
                    href="/portfolio"
                    aria-label="Portfolio"
                    title="Our Portfolio"
                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400">Portfolio</a
                >
            </li>
            <li>
                <a
                    href="/contact"
                    aria-label="Contact Us"
                    title="Contact Us"
                    class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-500 hover:bg-indigo-500 focus:shadow-outline focus:outline-none">
                    Contact us
                </a>
            </li>
        </ul>

        <div class="lg:hidden">
            <button
                aria-label="Open Menu"
                title="Open Menu"
                class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline">
                <svg viewBox="0 0 24 24" class="w-5 text-gray-600">
                    <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z" />
                    <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z" />
                    <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z" />
                </svg>
            </button>
        </div>
    </div>
</nav>
