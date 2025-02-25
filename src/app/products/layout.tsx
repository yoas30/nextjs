'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const pathname = usePathname()
    return (
      <>
          <ul className="flex text-sm text-red-600 gap-4">
            <Link className={pathname === '/products/food' ? 'text-red-200' : ''} prefetch={false} scroll={false} href='/products/food'>Food</Link>
            <Link className={pathname === '/products/sports' ? 'text-red-200' : ''} replace={true} href='/products/sports'>Sports</Link>
            <Link className={pathname === '/products/technology' ? 'text-red-200' : ''} href='/products/technology'>Technology</Link>
          </ul>
          {children}
      </>
    )
  }