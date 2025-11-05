import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState('')

  useEffect(() => {
    fetch(`${import.meta.env.VITE_HOST_URL}/connect`)
      .then(res => {
        if (!res.ok)
          throw new Error("Response failed...")
        return res.json()
      })
      .then(data => setValue(data.message))
      .catch(err => console.error(err.message))
  }, [])
  console.log(value);

  return (
    <>
      <h1> Learn GitHub and DevOps </h1>
      <h2> Home Page </h2>
      <h3> {value} </h3>
    </>
  )
}

export default App
