'use client'
import { useState } from 'react'
import { Layout } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Footer, Content } from 'antd/es/layout/layout'
import { EyeClose, EyeOpen, Hamburger } from '@/components/Icons'
import { Button, Menu } from '@/components/Ant'
import { HeaderWrapper, LayoutWrapper, Sidebar } from './DefaultLayout.styled'
import Link from 'next/link'
import Image from 'next/image'
import Images from '@/config/images'
import ThemeSwitcher from '@/components/ThemeSwitcher/ThemeSwitcher'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <html lang="en">
      <body>
        <LayoutWrapper>
          <Sidebar trigger={null} collapsible collapsed={collapsed}>
            <Link href={'/home'}>
              <Image
                src={collapsed ? Images.LogoIcon : Images.Logo}
                alt="logo"
              />
            </Link>
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
            <ThemeSwitcher />
          </Sidebar>
          <Layout>
            <HeaderWrapper>
              <Button
                type="text"
                icon={collapsed ? <Hamburger /> : <Hamburger />}
                onClick={() => setCollapsed(!collapsed)}
              />
              This is a header
            </HeaderWrapper>
            <Content>{children}</Content>
            <Footer>This is a Footer</Footer>
          </Layout>
        </LayoutWrapper>
      </body>
    </html>
  )
}
