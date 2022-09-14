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
      color='#ff8a65'
      ></Card>
      <Card
      color='#55c3e5'
      ></Card>
      <Card
      color='#ff5e7c'
      ></Card>
      <Card
      color='#4bcf83'
      ></Card>
      <Card
      color='#7234cd'
      ></Card>
      <Card
      color='#f1c65a'
      ></Card>
    </div>
  )
}

export default App
