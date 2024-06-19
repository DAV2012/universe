import Link from "next/link"

const links = [
    {   name:"Home",
        href:"/"
    },
    {   name:"About",
        href:"/about"
    },
    {   name:"Contact",
        href:"/contact"
    },
    {   name:"Meteora",
        href:"/meteora"
    },
    {   name:"Galaxies",
        href:"/galaxies"
    },
    {   name:"Solar System",
        href:"/solar-system"
    },
    {   name:"Earth",
        href:"/earth"
    }
]

export default function NavLinks(){
    return(
        <nav className="flex justify-evenly my-12 font-light" id="nav-link">
            {links.map(({name,href})=>{
                return(
                    <Link
                        key={name}
                        href={href}
                        className=""
                    >
                        {name}
                    </Link>
                )
            })}

        </nav>
    )
}