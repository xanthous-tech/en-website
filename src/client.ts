import AOS from "aos";
import * as sapper from "@sapper/app";

sapper
    .start({
        target: document.querySelector("#sapper"),
    })
    .then(() => {
        AOS.init();
    });
