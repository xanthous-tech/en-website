import LeftAligned from "../../components/blocks/LeftAligned.svelte";
import RightAligned from "../../components/blocks/RightAligned.svelte";

const works = [
    {
        title: "Treelab",
        slug: "treelab",
        cover: "/images/treelab.jpg",
        description:
            "Treelab is a productivity SaaS product that is a real-time spreadsheet database for enterprises. It focuses in the China Market. The Treelab team wanted us to build the first version of their product.",
        sections: [
            {
                component: LeftAligned,
                props: {
                    title: "Quick Prototyping",
                    image: "/images/treelab-1.png",
                    description:
                        "We started this project from scratch and shipped a fully functional prototype in 4 months, and this MVP helped the Treelab team get 2 rounds of VC funding.",
                },
            },
            {
                component: RightAligned,
                props: {
                    background: "bg-gray-50",
                    title: "The Architecture",
                    image: "/images/treelab-2.png",
                    description:
                        "Our architecture was able to help the team grow from just 5 person team to now a 40 person team supporting enterprise clients in China.",
                },
            },
        ],
    },

    {
        title: "ASU Xplor",
        slug: "asu-xplor",
        cover: "/images/asu.jpg",
        description:
            "Arizona State University wanted us to enrich their online course experience. We started this project from scratch and shipped a fully functional website in 2 months.",
        sections: [
            {
                component: LeftAligned,
                props: {
                    title: "Data and Authentication Integration",
                    image: "/images/treelab-1.png",
                    description:
                        "ASU is a complex organization with a lot of independent systems.By integrating with existing data and user systems, we made sure that Xplor did not feel like a separate app with minimum maintanence and provided a consistent user experience when users switched between different systems.",
                },
            },
            {
                component: RightAligned,
                props: {
                    background: "bg-gray-50",
                    title: "The Architecture",
                    image: "/images/treelab-2.png",
                    description: "TODO",
                },
            },
        ],
    },

    {
        title: "Proofrock",
        slug: "proofrock",
        cover: "/images/proofrock.jpg",
        description:
            "Treelab is a productivity SaaS product that is a real-time spreadsheet database for enterprises. It focuses in the China Market. The Treelab team wanted us to build the first version of their product. We started this project from scratch and shipped a fully functional prototype in 4 months, and this MVP helped the Treelab team get 2 rounds of VC funding. Our architecture was able to help the team grow from just 5 person team to now a 40 person team supporting enterprise clients in China.",
        sections: [
            {
                component: LeftAligned,
                props: {
                    title: "Humanizing Inmate Visitation and Chat",
                    image: "/images/treelab-1.png",
                    description: "TODO",
                },
            },
            {
                component: RightAligned,
                props: {
                    background: "bg-gray-50",
                    title: "The Architecture",
                    image: "/images/treelab-2.png",
                    description: "TODO",
                },
            },
        ],
    },
];

export default works;
