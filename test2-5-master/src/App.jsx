import './App.css'
import { Layout } from 'antd'
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/mainPage/MainPage'
import BattleArena from './pages/battleArena/BattleArena'
import AppHeader from './components/Header'

const { Content } = Layout

function App() {
  return (
    <Layout style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
      <AppHeader />
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/battle-arena" element={<BattleArena />} />
        </Routes>
      </Content>
    </Layout>
  )
}

export default App
