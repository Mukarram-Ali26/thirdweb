import Footer from "./components/Footer"
import ChakraWrapper from "./components/chakra"
import Navbar from "./components/Navbar"
import Stickey from "./components/Stickey"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ChakraWrapper>

          <Navbar />
        <Stickey/>
        {children}
        <Footer />
      </ChakraWrapper>
      </body>
    </html>
  )
}
