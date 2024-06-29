'use client'
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"

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
    }
]

export default function NavLinks(){
    const pathname  = usePathname ();

    return(
        <nav 
        className='flex justify-evenly text-lg items-center py-12 font-extralight transition-all' id="nav-link"
        
        >
            {links.map(({name,href})=>{
                return(
                    <Link
                        key={name}
                        href={href}
                        className={clsx('text-xs transition-all',
                            {
                                'text-white/90 md:text-3xl text-sm py-0 transition-all':pathname === href,

                            }
                        )}
                    >
                        {name}
                    </Link>
                )
            })}

        </nav>
    )
}