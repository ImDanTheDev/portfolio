import { Github, Linkedin, Mail } from "@lucide/svelte";
import type { Snippet } from "svelte";

type Link = {
    icon: Snippet,
    url: string
}

export default [{
    icon: Mail,
    url: "mailto:dmott248@gmail.com"
}, {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/m-dan/"
}, {
    icon: Github,
    url: "https://github.com/ImDanTheDev"
}] as Link[];