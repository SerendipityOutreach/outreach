import {AboutContent} from "@/assets/descriptions/AboutDescription";

const NavDescriptions = [
    {
        // About Section
        section_name: "About",
        content: AboutContent,
        // just put a general color, the nav.vue component will take care of shading
        color: "red",
    },
    {
        // Our Work Section with dummy data for now
        section_name: "Work",
        content: AboutContent,
        color: "blue",
    }
]

export {NavDescriptions}