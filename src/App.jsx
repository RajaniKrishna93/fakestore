import { useState } from 'react'

import './App.css'
// import Fakeproduct from './Fakestore'
import Fakestore from './Fakestore'
import { ToastContainer, toast } from 'react-toastify'

function App() {
 

  return (
    <>
     <Fakestore/>
     <ToastContainer/>
    </>
  )
}

export default App
