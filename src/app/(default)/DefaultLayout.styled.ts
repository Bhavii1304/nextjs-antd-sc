import { Layout } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Header } from 'antd/es/layout/layout'
import styled from 'styled-components'

export const LayoutWrapper = styled(Layout)`
  height: 100vh;
  .ant-layout-sider {
    background: var(--white);
  }
`
export const Sidebar = styled(Sider)``

export const HeaderWrapper = styled(Header)`
  background: var(--white);
  padding: 0 20px;
  color: var(--black);
`
