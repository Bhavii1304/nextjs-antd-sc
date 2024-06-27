import { Menu as AntMenu } from 'antd'
import styled from 'styled-components'

export const Menu = styled(AntMenu)`
  &.ant-menu-light.ant-menu-root.ant-menu-inline {
    border-inline-end: 0;
    background: var(--neutral-50);
    font-size: 16px;
  }
  &.ant-menu-light.ant-menu-root.ant-menu-inline-collapsed {
    border-inline-end: 0;
    background: var(--neutral-50);
    font-size: 16px;
  }
`
