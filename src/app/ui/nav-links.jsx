'use client'
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from '@/app/ui/home.module.css'

const links = [
    {   name:"Home",
        href:"/"
    },
    {   name:"Galaxies",
        href:"/galaxies"
    },
    {   name:"Meteora",
        href:"/meteora"
    },

    {   name:"About",
        href:"/about"
    }
]

export default function NavLinks(){
    const pathname  = usePathname ();

    return(
        <nav
        id="nav-links"
        className='flex justify-evenly text-xs items-center text-center p-10 font-extralight'
        
        >
            {links.map(({name,href})=>{
                return(
                    <Link
                        key={name}
                        href={href}
                        className={clsx('w-1/5',
                            {
                                'text-white/90 py-0':pathname === href,
                                [styles.selectItem]:pathname === href

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