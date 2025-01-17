import type { Meta } from '@storybook/react'
import React, { useState } from 'react'
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Button } from 'antd'
import { Menu } from './index'

const meta: Meta<typeof Menu> = {
  title: 'Ant Design/Menu',
  tags: ['autodocs'],
  argTypes: {
    forceSubMenuRender: { control: 'boolean' },
    inlineCollapsed: { control: 'boolean' },
    mode: { control: 'radio', options: ['vertical', 'horizontal', 'inline'] },
    multiple: { control: 'boolean' },
    selectable: { control: 'boolean' },
    theme: { control: 'radio', options: ['light', 'dark'] },
    triggerSubMenuAction: { control: 'radio', options: ['hover', 'click'] }
  },
  args: {
    defaultOpenKeys: ['2'],
    inlineIndent: 3,
    forceSubMenuRender: false,
    inlineCollapsed: false,
    multiple: false,
    selectable: false
  },
  component: Menu
}

export default meta

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Option 3', '3', <ContainerOutlined />),

  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8')
  ]),

  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),

    getItem('Submenu', 'sub3', null, [
      getItem('Option 11', '11'),
      getItem('Option 12', '12')
    ])
  ])
]

export function Demo(args: Array<string>) {
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div style={{ width: 256 }}>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{ marginBottom: 16 }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu {...args} inlineCollapsed={collapsed} items={items} />
    </div>
  )
}
