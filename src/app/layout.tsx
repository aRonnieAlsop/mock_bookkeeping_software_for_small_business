import './globals.css'

export const metadata = {
  title: 'Bookkeeping App',
  description: 'Track small business finances easily',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./../favicon.ico" />
      </head>
      <body className="bg-[#152238] text-white">
        <div className="min-h-screen flex items-center justify-center">
          <div
            className="
              w-full 
              max-w-full 
              sm:max-w-[90vw] 
              md:max-w-[85vw] 
              lg:max-w-[80vw] 
              xl:max-w-[75vw]
              h-full 
              max-h-full 
              sm:max-h-[95vh] 
              md:max-h-[95vh] 
              lg:max-h-[100vh] 
              xl:max-h-[100vh]
              border-4 border-white 
              flex items-center justify-center 
              transition-all duration-300
            "
          >
            {/* NEW: Full-width wrapper to let children expand */}
            <div className="w-full h-full p-4">{children}</div>
          </div>
        </div>
      </body>
    </html>
  )
}
