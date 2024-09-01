/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import CartCard from './Components/Cart'
import UserContextComponent from './Utils/UserContextComponent'

export const UserContext = React.createContext()

function App() {

  return <>
    <UserContextComponent>
      <div className="container my-5">
        <CartCard/>
      </div>
    </UserContextComponent>
  </>
}

export default App