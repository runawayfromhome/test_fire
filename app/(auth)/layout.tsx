"use client"

import type { Metadata } from "next"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Link from "next/link"
import { usePathname } from "next/navigation"
import "./styles.css"

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];



export default function AuthLayout({ children }: React.PropsWithChildren) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body >
        <div>
          <Header/>

            {navLinks.map((link) =>{
              const isActive =
              pathname === link.href || 
              (pathname.startsWith(link.href) && link.href !== "/")
              return (
                  <Link
                  className={ isActive ? "font-bold mr-4" : "text-blue-900 mr-4"} 
                  href={link.href} 
                  key={link.name}>
                    {link.name}
                  </Link>
              );
            })}

          <main >
            {children}
          </main>
            
          <Footer/>
        </div>
      </body>
    </html>
  )
}