import './App.css'
import Header from './component/Header';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import UserContext from './utils/userContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {
  const[userName, setUserName] = useState()

   useEffect(() =>
   {
    const data = {
      name:"akshay saini"
    } 
    
    setUserName(data.name)
   },[])

  return (
    <>
     <Provider store = {appStore}>
       <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
      <div className='App'>
      {/* <UserContext.Provider value={{loggedInUser:"Sonali Margale"}}> */}
      <Header/>
      {/* </UserContext.Provider> */}
      </div>
       <Outlet />
       </UserContext.Provider>
      </Provider>
    </>
  )
}


export default App
