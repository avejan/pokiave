import React from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'

const { Header } = Layout

const AppHeader = () => {
  return (
    <Header style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <Menu theme='dark' mode="horizontal" defaultSelectedKeys={['1']} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <Menu.Item key="1">
          <Link to="/">Main Page</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/battle-arena">Battle Arena</Link>
        </Menu.Item>
      </Menu>
    </Header>
  )
}

export default AppHeader
