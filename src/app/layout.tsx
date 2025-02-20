import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/handsfree@8.5.1/build/lib/assets/handsfree.css" />
      </head>
      <body>
        {children}
        <Script 
          src="https://unpkg.com/handsfree@8.5.1/build/lib/handsfree.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  )
}