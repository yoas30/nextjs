import Link from "next/link"

export default function DashboardLayout({
    children
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
          <ul className="flex gap-4">
            <Link href='/product/food'>Food</Link>
            <Link href='/product/sports'>Sport</Link>
            <Link href='/product/technologi'>Technologi</Link>
          </ul>
          {children}
      </>
    )
  }