import './App.css'
import Header from './component/Header';
import Body from './component/Body';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  )
}


export default App
