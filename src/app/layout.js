import './globals.css'
export const metadata = {
  title: 'Havadan',
  description: 'Simple weather web-app developed in Baku',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
