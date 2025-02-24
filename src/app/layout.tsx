import { Metadata } from "next"

export const metadata : Metadata = {
  title : {
    template : '%s | KC',
    default : 'Kenapa Coding App',
  },
  description: 'Generating Next JS'
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <h2>Header</h2>
        <main>{children}</main>
        <h2>Footer</h2>
      </body>
    </html>
  )
}