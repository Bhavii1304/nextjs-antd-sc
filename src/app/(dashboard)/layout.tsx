'use client'
import { useState } from 'react'
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { EyeClose, EyeOpen, Hamburger } from '@/components/Icons'
import { Button, Menu, Select } from '@/components/Ant'
import { HeaderWrapper, LayoutWrapper, Sidebar } from './DashboardLayout.styled'
import Link from 'next/link'
import Image from 'next/image'
import Images from '@/config/images'
import { useTheme } from '@/context/ThemeContext'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const [collapsed, setCollapsed] = useState(false)
  const [, setTheme] = useTheme()
  return (
    <html lang="en">
      <body>
        <LayoutWrapper>
          <HeaderWrapper>
            <div className="nav-wrapper">
              <div className="nav-logo">
                <Link href={'/home'}>
                  <Image src={Images.Logo} alt="Simform" />
                </Link>
                <Button
                  type="text"
                  icon={collapsed ? <Hamburger /> : <Hamburger />}
                  onClick={() => setCollapsed(!collapsed)}
                />
              </div>
              <ul className="nav-list">
                <li>
                  <Link href={'/home'}>Home</Link>
                </li>
                <li>
                  <Link href={'/login'}>Login</Link>
                </li>
                <li>
                  <Link href={'/signup'}>Sign Up</Link>
                </li>
              </ul>
              <Select
                defaultValue="default"
                style={{ width: 120 }}
                onChange={setTheme}
                placeholder="Theme"
                options={[
                  { value: 'default', label: 'Default' },
                  { value: 'dark', label: 'Dark' }
                ]}
              />
            </div>
          </HeaderWrapper>
          <Layout>
            <Sidebar trigger={null} collapsible collapsed={collapsed}>
              <Menu
                theme="light"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                  {
                    key: '1',
                    icon: <EyeOpen />,
                    label: 'nav 1'
                  },
                  {
                    key: '2',
                    icon: <EyeClose />,
                    label: 'nav 2'
                  },
                  {
                    key: '3',
                    icon: <EyeOpen />,
                    label: 'nav 3'
                  }
                ]}
              />
            </Sidebar>
            <Content>{children}</Content>
          </Layout>
        </LayoutWrapper>
      </body>
    </html>
  )
}
