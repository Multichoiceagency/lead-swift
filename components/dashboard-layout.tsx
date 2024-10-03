'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, LayoutDashboard, BarChart2, FileText, Users, Settings, LogOut, Package } from 'lucide-react'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
  { icon: Users, label: 'Contacts', href: '/contacts' },
  { icon: Package, label: 'Products', href: '/products' },
  { icon: FileText, label: 'Offers', href: '/offers' },
  { icon: BarChart2, label: 'Analytics', href: '/analytics' },
  { icon: Settings, label: 'Settings', href: '/settings' },
]

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [user, setUser] = useState({ name: 'Nora Watson', role: 'Sales Manager' })

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="mx-auto bg-white shadow-lg flex flex-col justify-between">
        <div>
          <div className="p-4 flex items-center">
            <h1 className="text-2xl font-bold text-gray-700">Niond</h1>
          </div>
          <nav className="mt-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className={`flex items-center px-4 py-3 text-gray-700 rounded-lg cursor-pointer transition-all ${
                    pathname === item.href ? 'bg-green-200 text-green-800 font-semibold' : 'hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <Avatar>
              <AvatarImage src="/placeholder-avatar.jpg" alt={user.name} />
              <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="ml-3">
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-gray-500">{user.role}</p>
            </div>
          </div>
          <Button variant="ghost" className="w-full mt-4" onClick={() => console.log('Logout')}>
            <LogOut className="w-4 h-4 mr-2" />
            Log Out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-gray-50">
        <header className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto py-4 px-6 flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-900">
              {navItems.find(item => item.href === pathname)?.label || 'Dashboard'}
            </h1>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5 text-gray-600" />
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder-avatar.jpg" alt={user.name} />
                <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>
        <div className="max-w-7xl mx-auto py-6 px-6">
          {/* Add the main dashboard content here */}
          {children}
        </div>
      </main>
    </div>
  )
}
