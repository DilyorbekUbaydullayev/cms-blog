"use client"
import ModeToggle from "@/components/shared/mode-toggle"
import { navLinks } from "@/constants"
import Link from "next/link"
import GlobalSearch from "./global-search"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import Mobile from "./mobile"

function Navbar() {
  const pathname = usePathname()
  

  return (
    <div className="h-[12vh] pt-1 backdrop-blur-sm border-b fixed z-40 inset-0 bg-background">
      <div className="container max-w-6xl mx-auto h-[10vh] w-full flex items-center justify-between">
        {/* logo */}
        <Link href={'/'}>
        <h1 className="text-4xl font-crete">{'< Codely / >'}</h1>
        </Link>
        {/* Nav links */}
        <div className="gap-2 hidden md:flex">
          {navLinks.map(nav=>(
            <Link key={nav.route} href={nav.route} className={cn('hover:bg-blue-400/20 py-1 px-3 font-crete cursor-pointer rounded-sm transition-colors',pathname===nav.route&&'text-blue-400')}>
            {nav.name}
            </Link>
          ))}
        </div>
        {/* Search */}
        <div className="flex items-center gap-1">
          <GlobalSearch/>
          <ModeToggle/>
          <Mobile/>
        </div>
      </div>
    </div>
  )
}

export default Navbar