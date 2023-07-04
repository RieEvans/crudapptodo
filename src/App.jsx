import React from "react"
import {Routes, Route} from 'react-router-dom'
import { TodoWrapper } from "./components/TodoWrapper"
import { TodoWrapperLocalStorage } from "./components/TodoWrapperLocalStorage"

export default function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element = {<TodoWrapperLocalStorage />} />
        </Routes>
    </div>
  )
}