import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Person } from './components/Person'
import { Card } from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Person></Person>
      <Card
      item ="Work"
      color='#ff8a65'
      ></Card>
      <Card
      item ="Play"
      color='#55c3e5'
      ></Card>
      <Card
      item ="Study"
      color='#ff5e7c'
      ></Card>
      <Card
      item ="Exercise"
      color='#4bcf83'
      ></Card>
      <Card
      item ="Social"
      color='#7234cd'
      ></Card>
      <Card
      item ="Self Care"
      color='#f1c65a'
      ></Card>
    </div>
  )
}

export default App
