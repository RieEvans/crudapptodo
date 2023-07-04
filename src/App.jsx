import React from "react"
import {Routes, Route} from 'react-router-dom'
import { TodoWrapper } from "./components/TodoWrapper"

export default function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element = {<TodoWrapper />} />
        </Routes>
    </div>
  )
}