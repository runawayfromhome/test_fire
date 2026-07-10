
import type { Metadata } from "next"
import Footer from "@/components/footer"
import Header from "@/components/header"


export const metadata: Metadata = {
  title: "NextAuth.js Example",
  description:
    "hello world",
}


export default function MarketingLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body >
        <div>
            <div>
                <Header/>
            </div>
          
          <main >
            {children}
          </main>
          
          <div>
                <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}