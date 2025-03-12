import PageLayout from './ui/layouts/pageLayout/pageLayout';
import { Routes, Route } from 'react-router';
import { ConfigProvider } from 'antd';

//pages
import MainPage from './pages/mainPage';
import CategoryPage from './pages/categoryPage';
import _dbPage from './pages/_db_page/_dbPage';



function App() {



  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Parkinsans"
        }
      }}>
      <PageLayout>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/main' element={<MainPage />} />
          <Route path='/category/:id' element={<CategoryPage />} />

          {/* sandbox */}
          <Route path='/_db' element={<_dbPage/>}/>
        </Routes>
      </PageLayout>
    </ConfigProvider>

  )
}

export default App
