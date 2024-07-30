import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "",  
    default:"Next.js Tutorial - CodeMentor", 
    template: "%s | CodeMentor", 
  },  
  description: "Generated by  Next.js"
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            backgroundColor: "lightblue",
            padding: "1rem"
          }}
          >
            <p>Heder</p>
            </header>
        {children}
        <footer
        style={{
          backgroundColor: "ghostwhite",
          padding: "1rem",  
        }}
        >
        
        </footer>
        <p>Footer</p>
        </body>
    </html>

  );
}
