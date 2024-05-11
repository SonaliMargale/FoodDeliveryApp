import './App.css'
import Header from './component/Header';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import UserContext from './utils/userContext';

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
     <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
      <div className='App'>
      {/* <UserContext.Provider value={{loggedInUser:"Sonali Margale"}}> */}
      <Header/>
      {/* </UserContext.Provider> */}
      </div>
      <Outlet />
      </UserContext.Provider>
    </>
  )
}


export default App
