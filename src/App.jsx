import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {AmountPendingCard } from './components/amountPendingCard'
import {AmountProcessingCard } from './components/amountProcessing'
import { NextPayout } from './components/nextPayout'
import { TopBar } from './components/topBar'
import { SideBar } from './components/sideBar'

function App() {

  return (
    <SideBar></SideBar>
  )
}
export default App
