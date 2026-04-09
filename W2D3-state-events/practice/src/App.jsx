import { useState } from 'react'
import Button from './Button'
import './App.css'

function App() {
  const [ count, setCount ] = useState(0)
  const [ inputText, setInputText ] = useState('')
  const [ visibility, setVisibility ] = useState(false)

  return (
    <>
      {count}
      <br />
      <Button func={() => setCount(count + 1)}>Increment</Button><br />
      <Button func={() => setCount(count - 1)}>Decrement</Button><br />
      <Button func={() => setCount(0)}>Reset</Button><br />
      <br />
      <input value={inputText} onChange={(e) => setInputText(e.target.value)} /><br />
      {inputText}<br />
      <Button func={() => setVisibility(!visibility)}>{visibility ? 'Hide' : 'Show'}</Button>
      <br />
      <br />
      {
        visibility &&
          <div style={{border: '1px solid grey', width: '250px'}}>
            ipsum in eveniet repellat assumenda repellat et dolor fuga ipsum aut laborum optio deserunt dolore molestiae eveniet architecto numquam dolorum
          </div>
      }
    </>
  )
}

export default App
