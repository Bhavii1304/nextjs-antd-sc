import { Layout } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Header } from 'antd/es/layout/layout'
import styled from 'styled-components'

export const LayoutWrapper = styled(Layout)`
  height: 100vh;
  .ant-layout-sider {
    background: var(--neutral-50);
  }
  .ant-layout-content {
    background: var(--neutral-0);
    color: var(--neutral-950);
  }
`
export const Sidebar = styled(Sider)``

export const HeaderWrapper = styled(Header)`
  background: var(--primary-500);
  padding: 0 14px;
  .nav-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-logo {
      color: var(--white);
      display: flex;
      align-items: center;
      gap: 16px;
      .anticon {
        color: var(--white);
        font-size: 28px;
      }
    }
    .nav-list {
      display: flex;
      gap: 48px;
      align-items: center;
      list-style: none;
      li {
        a {
          font-size: 16px;
          font-weight: 800;
          text-decoration: none;
          color: var(--white);
        }
      }
    }
  }
`
