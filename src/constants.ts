import htmlSVG from "../public/icons/html.svg?raw"
import cssSVG from "../public/icons/css.svg?raw"
import jsSVG from "../public/icons/js.svg?raw"
import tsSVG from "../public/icons/ts.svg?raw"
import reactSVG from "../public/icons/react.svg?raw"
import gitSVG from "../public/icons/git.svg?raw"
import astroSVG from "../public/icons/astro.svg?raw"
import tailwindSVG from "../public/icons/tailwind.svg?raw"
import wordpressSVG from "../public/icons/wordpress.svg?raw"
import githubSVG from "../public/icons/github.svg?raw"
import figmaSVG from "../public/icons/figma.svg?raw"

interface Tools {
    title:string,
    icon:string
}

export const tools : Tools[] = [{title:"HTML", icon: htmlSVG},{title:"CSS", icon: cssSVG},{title:"JavaScript", icon: jsSVG},{title:"TypeScript", icon: tsSVG}
,{title:"React", icon: reactSVG},{title:"Git", icon: gitSVG},{title:"Astro", icon: astroSVG},{title:"Tailwind", icon: tailwindSVG}
,{title:"WordPress", icon: wordpressSVG},{title:"GitHub", icon: githubSVG},{title:"Figma", icon: figmaSVG}
]

interface Titles {
    title:string,
    src:string
}

export const titles = [{title:"Multimedia Engineering Degree", src:"multimedia-engineering-degree"},
{title:"Master's Degree in front-end", src:"master-degree-frontend"},
{title:"Master's Degree in E-commerce", src:"master-degree-ecommerce"},
{title:"First Certificate in English", src:"first-certificate-english"},]
