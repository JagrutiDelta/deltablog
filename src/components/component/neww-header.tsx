import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { NavigationMenuLink, NavigationMenuItem, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu"

export function NewwHeader() {
  return (
    <header className="bg-white shadow-sm dark:bg-gray-900">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link className="flex items-center" href="#">
   
          <span className="ml-2 text-lg font-bold text-gray-900 dark:text-gray-50">Acme Inc</span>
        </Link>
        <div className="flex items-center gap-2 sm:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="h-10 w-10 rounded-full p-0 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                variant="ghost"
              >
                {/* <MenuIcon className="h-6 w-6" /> */}
                <span className="sr-only">Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <NavigationMenuLink
                          className="group inline-flex h-full items-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                          href="#"
                        >
                          Home
                          {/* <ChevronDownIcon className="ml-2 h-4 w-4" /> */}
                        </NavigationMenuLink>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start">
                        <DropdownMenuItem>
                          <Link href="#">Home Page</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href="#">Home About</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href="#">Home Contact</Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <NavigationMenuLink
                          className="group inline-flex h-full items-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                          href="#"
                        >
                          Portfolio
                          {/* <ChevronDownIcon className="ml-2 h-4 w-4" /> */}
                        </NavigationMenuLink>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start">
                        <DropdownMenuItem>
                          <Link href="#">Portfolio Page</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href="#">Portfolio Projects</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href="#">Portfolio About</Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <NavigationMenuLink
                          className="group inline-flex h-full items-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                          href="#"
                        >
                          About
                          {/* <ChevronDownIcon className="ml-2 h-4 w-4" /> */}
                        </NavigationMenuLink>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start">
                        <DropdownMenuItem>
                          <Link href="#">About Page</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href="#">About Team</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href="#">About History</Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <NavigationMenuLink
                          className="group inline-flex h-full items-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                          href="#"
                        >
                          Contact
                          {/* <ChevronDownIcon className="ml-2 h-4 w-4" /> */}
                        </NavigationMenuLink>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start">
                        <DropdownMenuItem>
                          <Link href="#">Contact Page</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href="#">Contact Form</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href="#">Contact Info</Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button className="inline-flex sm:hidden">Get in Touch</Button>
        </div>
        <NavigationMenu className="hidden sm:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <NavigationMenuLink
                    className="group inline-flex h-full items-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    href="#"
                  >
                    Home
                    {/* <ChevronDownIcon className="ml-2 h-4 w-4" /> */}
                  </NavigationMenuLink>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>
                    <Link href="#">Home Page</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="#">Home About</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="#">Home Contact</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <NavigationMenuLink
                    className="group inline-flex h-full items-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    href="#"
                  >
                    Portfolio
                    {/* <ChevronDownIcon className="ml-2 h-4 w-4" /> */}
                  </NavigationMenuLink>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>
                    <Link href="#">Portfolio Page</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="#">Portfolio Projects</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="#">Portfolio About</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <NavigationMenuLink
                    className="group inline-flex h-full items-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    href="#"
                  >
                    About
                    {/* <ChevronDownIcon className="ml-2 h-4 w-4" /> */}
                  </NavigationMenuLink>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>
                    <Link href="#">About Page</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="#">About Team</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="#">About History</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <NavigationMenuLink
                    className="group inline-flex h-full items-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    href="#"
                  >
                    Contact
                    {/* <ChevronDownIcon className="ml-2 h-4 w-4" /> */}
                  </NavigationMenuLink>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>
                    <Link href="#">Contact Page</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="#">Contact Form</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="#">Contact Info</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
