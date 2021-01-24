import LeftAligned from "../../components/blocks/LeftAligned.svelte";
import RightAligned from "../../components/blocks/RightAligned.svelte";

const works = [
    {
        title: "Treelab",
        slug: "treelab",
        height: Math.floor(Math.random() * 200) + 400,
        cover: "/images/treelab.jpg",
        description:
            "Treelab is a productivity SaaS product that is a real-time spreadsheet database for enterprises. It focuses in the China Market. The Treelab team wanted us to build the first version of their product. We started this project from scratch and shipped a fully functional prototype in 4 months, and this MVP helped the Treelab team get 2 rounds of VC funding. Our architecture was able to help the team grow from just 5 person team to now a 40 person team supporting enterprise clients in China.",
        sections: [
            {
                component: LeftAligned,
                props: {
                    title: "Humanizing Inmate Visitation and Chat",
                    image: "/images/treelab-1.png",
                    description:
                        "We took an ethical approach to this project, doing heavy research and design work to ensure that the software was respectful of its users' complex situations.",
                },
            },
            {
                component: RightAligned,
                props: {
                    title: "The Architecture",
                    image: "/images/treelab-2.png",
                    description:
                        "We took an ethical approach to this project, doing heavy research and design work to ensure that the software was respectful of its users' complex situations.",
                },
            },
        ],
    },

    {
        title: "How to use Sapper",
        slug: "how-to-use-sapper",
        height: Math.floor(Math.random() * 200) + 400,
        cover: "/images/asu.jpg",
        description:
            "Treelab is a productivity SaaS product that is a real-time spreadsheet database for enterprises. It focuses in the China Market. The Treelab team wanted us to build the first version of their product. We started this project from scratch and shipped a fully functional prototype in 4 months, and this MVP helped the Treelab team get 2 rounds of VC funding. Our architecture was able to help the team grow from just 5 person team to now a 40 person team supporting enterprise clients in China.",
        sections: [
            {
                component: LeftAligned,
                props: {
                    title: "Humanizing Inmate Visitation and Chat",
                    image: "/images/treelab-1.png",
                    description:
                        "We took an ethical approach to this project, doing heavy research and design work to ensure that the software was respectful of its users' complex situations.",
                },
            },
            {
                component: RightAligned,
                props: {
                    title: "The Architecture",
                    image: "/images/treelab-2.png",
                    description:
                        "We took an ethical approach to this project, doing heavy research and design work to ensure that the software was respectful of its users' complex situations.",
                },
            },
        ],
    },

    {
        title: "How to use Sapper",
        slug: "how-to-use-sapper-yo",
        height: Math.floor(Math.random() * 200) + 400,
        cover: "/images/asu.jpg",
        description:
            "Treelab is a productivity SaaS product that is a real-time spreadsheet database for enterprises. It focuses in the China Market. The Treelab team wanted us to build the first version of their product. We started this project from scratch and shipped a fully functional prototype in 4 months, and this MVP helped the Treelab team get 2 rounds of VC funding. Our architecture was able to help the team grow from just 5 person team to now a 40 person team supporting enterprise clients in China.",
        sections: [
            {
                component: LeftAligned,
                props: {
                    title: "Humanizing Inmate Visitation and Chat",
                    image: "/images/treelab-1.png",
                    description:
                        "We took an ethical approach to this project, doing heavy research and design work to ensure that the software was respectful of its users' complex situations.",
                },
            },
            {
                component: RightAligned,
                props: {
                    title: "The Architecture",
                    image: "/images/treelab-2.png",
                    description:
                        "We took an ethical approach to this project, doing heavy research and design work to ensure that the software was respectful of its users' complex situations.",
                },
            },
        ],
    },

    {
        title: "Treelab",
        slug: "treelab-2",
        height: Math.floor(Math.random() * 200) + 400,
        cover: "/images/treelab.jpg",
        description:
            "Treelab is a productivity SaaS product that is a real-time spreadsheet database for enterprises. It focuses in the China Market. The Treelab team wanted us to build the first version of their product. We started this project from scratch and shipped a fully functional prototype in 4 months, and this MVP helped the Treelab team get 2 rounds of VC funding. Our architecture was able to help the team grow from just 5 person team to now a 40 person team supporting enterprise clients in China.",
        sections: [
            {
                component: LeftAligned,
                props: {
                    title: "Humanizing Inmate Visitation and Chat",
                    image: "/images/treelab-1.png",
                    description:
                        "We took an ethical approach to this project, doing heavy research and design work to ensure that the software was respectful of its users' complex situations.",
                },
            },
            {
                component: RightAligned,
                props: {
                    title: "The Architecture",
                    image: "/images/treelab-2.png",
                    description:
                        "We took an ethical approach to this project, doing heavy research and design work to ensure that the software was respectful of its users' complex situations.",
                },
            },
        ],
    },
];

export default works;
