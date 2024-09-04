/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import Cart from './Components/Cart'
import UserContextComponent from './utils/UserContextComponent'
export const UserContext = React.createContext()

function App() {

  return <>
    <UserContextComponent>
      <div className="container my-5">
        <Cart/>
      </div>
    </UserContextComponent>
  </>
}

export default App