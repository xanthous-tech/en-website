import LeftAligned from "../../components/blocks/LeftAligned.svelte";
import RightAligned from "../../components/blocks/RightAligned.svelte";

const works = [
    {
        title: "Treelab",
        slug: "treelab",
        height: Math.floor(Math.random() * 200) + 400,
        description:
            "Treelab is a productivity SaaS product that is a real-time spreadsheet database for enterprises. It focuses in the China Market. The Treelab team wanted us to build the first version of their product. We started this project from scratch and shipped a fully functional prototype in 4 months, and this MVP helped the Treelab team get 2 rounds of VC funding. Our architecture was able to help the team grow from just 5 person team to now a 40 person team supporting enterprise clients in China.",
        sections: [
            {
                component: LeftAligned,
                props: {
                    title: "Humanizing Inmate Visitation and Chat",
                    image: "https://agora-file-storage-prod.s3.us-west-1.amazonaws.com/profile/portfolio/attachment/3838a97daa273a383af8f56fec736bae?response-content-disposition=inline%3B%20filename%3D%222020-11-05-10-29-www.treelab.com.cn.png%22%3B%20filename%2A%3Dutf-8%27%272020-11-05-10-29-www.treelab.com.cn.png&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMSJHMEUCIQDh6%2FW9cQh2THh7Zonw326DlHRqBECDTqLlrKPLpWtpHQIgGr29of2QN%2F6pYLx7mwlrqNgSzyNNprGDMebMPGtRyFYq9AMI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw3Mzk5MzkxNzM4MTkiDI%2FHaDB2n7BKOw%2BXwyrIA4u7LcTbsxWq3gH8jUKfD5zkuC0G4En1jEYRj6c6PrTGs2PGNPfu3X5OulN3d%2Fgq0VhbDCnUbTIOZ4ZkXb0xnDTMUPHAb%2FcJ6ayzJNxYhaqz%2Fc%2BtCCSD6ooKzEXN2w21b9h7pRq%2FQLCJd7MvhU6x971t8dJcpwIze8FrdH3j8smQduvaYIzjBlR75Re7O3P%2BC3AT41o5I6XfBNasR4PXQ77rBRp54KH8p7PTRFcZbhIe6O9DGAj2KLg9IY8h5poDWIeMNGgEHU%2FAQ2aZ8GxtL17K9FzCXSIKIKlrqjke%2F5o9MCIa1EtnoCkb7qv%2B1bHocQVaxJPzVWVc%2F3nTiU6L%2F3vVAY5AFjHG0snBO6CP8Yc8PqjDoj3SXStXcfkgLIyEn6a9gZhafkUeTIMhOKmfQN3nxJPw0jtPKWcNhB5DiVCHnF65wjDg%2FKBXSTkqyQhcwi4IH66HiKcAqW0N7xuKgaS2cEyoU%2BfRqcQN73NrZ5YO%2FQ5wtM7SvWCxFoDfE8zfgY9Zy2QOmnpje4MIy1zKR2RsvQylngMPhLYzSNEUvofYKVinhPuWaVkBwx80zi2Q%2F6xzwaBwJfU4KNBEwP5uhpbBHVGLeKGhazCikbSABjrsAf1pjUstDW%2FOo7hb8EMnZ4j6%2FSJw0q%2BF2RMuv6QkTRR1%2FBpr6x%2Fwtx09iNEXy%2F5%2Brkc%2FOgb8N1hPWvVCsCmPV%2BjDVDnFi3f2ERKu1JUoS%2BrqkJsOA%2F5DAhWJFmrfkzClcqVzrI%2F05DpOibriNKjfd4gGmymQK4WX0VXjUQnC8nd0GCNLIScnpRw1xUETgZfCqUOUk847FQxPOqlHBzo4fTDXoGdCxK%2BQy1AwZ9K4eiqO45Bjlhwn6jYTNIdtQhk%2FGDUTtQ1V6f9Ty4oV%2F31WuUJ0f3K9p8llKeq8aKweZdng1MdvEGSE1gG7LktL&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210124T074338Z&X-Amz-SignedHeaders=host&X-Amz-Expires=899&X-Amz-Credential=ASIA2YR6PYW56Z2ECUG3%2F20210124%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=03255fdf6a822ef277f16ed3d5bf316c89134d462e94b6c5642c6f2a6819a9da",
                    description: "The prison system is not a friendly place for visitors or prisoners. We took an ethical approach to this project, doing heavy research and design work to ensure that the software was respectful of its users' complex situations.",
                },
            },
            {
                component: RightAligned,
                props: {
                    title: "The Architecture",
                    image: "https://agora-file-storage-prod.s3.us-west-1.amazonaws.com/profile/portfolio/attachment/86f34a28427e4d8aae29668e3956eafb?response-content-disposition=inline%3B%20filename%3D%222020-11-05-10-30-app.treelab.com.cn.png%22%3B%20filename%2A%3Dutf-8%27%272020-11-05-10-30-app.treelab.com.cn.png&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMSJIMEYCIQCFBuvIwGjznvQfj8PNFxA%2Feu0%2BigLCTb%2FO%2BG8G3ZpaQQIhAMMEORNGULFUaT0DJkvevur3zIVR1HojxsXzww51dQ%2B%2FKvQDCOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNzM5OTM5MTczODE5IgxBrnYB70JnM%2Bg%2Fqz0qyAOPypOoz9SRaV3I8mvzhUKByJpF6tOWxF9IN3Z1TbkiLF4%2Fqh9oD%2BFh6ova8fZ%2FCL%2BAhEA43pyAs2IQwWAWtMNtqTDSjMHGxF7QnFlAwz2NqNZz1ctH0vNyb1vN80cYgjmStowiEgDvW3dOTBJR%2BnRBa3HGEuIyF8F8RNOfJPv8OHONRbMjE9Efhr%2BNLfa9SoJH%2FSw%2BBSgyGAxeSX9E4TBf5PQ7cbyaMnKRaNK1GUt54zGrnZ%2FeIHwvSIBF5nhhCpW033eY%2FPpNoX8syjPX0IMRUCIvdM5SEibNfAfYm0wbTGM0W5lI0L9klO2%2BAii6Sa1r5GrVxRhdRuGmrPqDzKfmsb%2FEGX5Xq7SJutZghFSNm2l5XkG4EkVd2PnMUd8nnUQpB7cX7Q5N4Ne0Jp76vwWlQrU7QIZXRcqN5m4s12oQnGakk6fFxoyuxEegL%2BKUWSXlQdk9SadB7WImLI3VSJfjjtWVyzXeJKVOaHxpe4%2BUpPwc9h5cFvVf9OQFQ26uziOa%2FGjECx6R02gbVKt9DOd4WnYriqLZdSLrTr4aQmSPRdgDLZ7QgDh4Nx0icdmMRZZ7a%2BSyBhy%2BJlzCIvcpvnfpfWmBAZ1zHCQwgoi0gAY66wHXC5g%2Fd64wdXIMptxPP6Yah4Q%2FrOZ8y8oVQKPxLBo2nWlO%2BJ%2FGEDlUcCNRDJR4h2ap6iHFGFJ4KZfLcaEWNhL1ZqiQwgFsiCaYmhqtGtBIpHyKnxaY4%2F79YvLVv%2Fs4YS3JJCihK3mvRXq8BOmMjHVjWWU3CvHyhRndBu8T9w%2Bpk7vVBCxzcUghzxU7ZGwG%2FyWPkFSrVXCs6YDUA3l8gM52RG2a78A8fRugAzFDcCn3CpT2Hhdy0r%2B%2FJRpecq%2FBiPSIGcKJbbvRyBgvgEppMX1eejkgjnc0mNnQBw9DpMVaruDl9Px3wBraFVj4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210124T074334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=ASIA2YR6PYW53RYQ5IY7%2F20210124%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=3241ae88010e9bd6369e810f73bf91717ffdb9c94a346d5200cb80d895db2c13",
                    description: "The prison system is not a friendly place for visitors or prisoners. We took an ethical approach to this project, doing heavy research and design work to ensure that the software was respectful of its users' complex situations.",
                },
            },
        ],
    },

    {
        title: "How to use Sapper",
        slug: "how-to-use-sapper",
        height: Math.floor(Math.random() * 200) + 400,
        html: `
            <h2>Step one</h2>
            <p>Create a new project, using <a href='https://github.com/Rich-Harris/degit'>degit</a>:</p>

            <pre><code>npx degit "sveltejs/sapper-template#rollup" my-app
            cd my-app
            npm install # or yarn!
            npm run dev
            </code></pre>

            <h2>Step two</h2>
            <p>Go to <a href='http://localhost:3000'>localhost:3000</a>. Open <code>my-app</code> in your editor. Edit the files in the <code>src/routes</code> directory or add new ones.</p>

            <h2>Step three</h2>
            <p>...</p>

            <h2>Step four</h2>
            <p>Resist overdone joke formats.</p>
        `,
    },

    {
        title: "Why the name?",
        slug: "why-the-name",
        height: Math.floor(Math.random() * 200) + 400,
        html: `
            <p>In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as <em>sappers</em>.</p>

            <p>For web developers, the stakes are generally lower than those for combat engineers. But we face our own hostile environment: underpowered devices, poor network connections, and the complexity inherent in front-end engineering. Sapper, which is short for <strong>S</strong>velte <strong>app</strong> mak<strong>er</strong>, is your courageous and dutiful ally.</p>
        `,
    },

    {
        title: "How is Sapper different from Next.js?",
        slug: "how-is-sapper-different-from-next",
        height: Math.floor(Math.random() * 200) + 400,
        html: `
            <p><a href='https://github.com/zeit/next.js'>Next.js</a> is a React framework from <a href='https://vercel.com/'>Vercel</a>, and is the inspiration for Sapper. There are a few notable differences, however:</p>

            <ul>
                <li>It's powered by <a href='https://svelte.dev'>Svelte</a> instead of React, so it's faster and your apps are smaller</li>
                <li>Instead of route masking, we encode route parameters in filenames. For example, the page you're looking at right now is <code>src/routes/blog/[slug].svelte</code></li>
                <li>As well as pages (Svelte components, which render on server or client), you can create <em>server routes</em> in your <code>routes</code> directory. These are just <code>.js</code> files that export functions corresponding to HTTP methods, and receive Express <code>request</code> and <code>response</code> objects as arguments. This makes it very easy to, for example, add a JSON API such as the one <a href='blog/how-is-sapper-different-from-next.json'>powering this very page</a></li>
                <li>Links are just <code>&lt;a&gt;</code> elements, rather than framework-specific <code>&lt;Link&gt;</code> components. That means, for example, that <a href='blog/how-can-i-get-involved'>this link right here</a>, despite being inside a blob of HTML, works with the router as you'd expect.</li>
            </ul>
        `,
    },

    {
        title: "How can I get involved?",
        slug: "how-can-i-get-involved",
        height: Math.floor(Math.random() * 200) + 400,
        html: `
            <p>We're so glad you asked! Come on over to the <a href='https://github.com/sveltejs/svelte'>Svelte</a> and <a href='https://github.com/sveltejs/sapper'>Sapper</a> repos, and join us in the <a href='https://svelte.dev/chat'>Discord chatroom</a>. Everyone is welcome, especially you!</p>
        `,
    },

    {
        title: "How can I get involved?",
        slug: "how-can-get-involved",
        height: Math.floor(Math.random() * 200) + 400,
        html: `
            <p>We're so glad you asked! Come on over to the <a href='https://github.com/sveltejs/svelte'>Svelte</a> and <a href='https://github.com/sveltejs/sapper'>Sapper</a> repos, and join us in the <a href='https://svelte.dev/chat'>Discord chatroom</a>. Everyone is welcome, especially you!</p>
        `,
    },
];

export default works;
