import { useState } from 'react'
import Button from './Button'
import TaskList from './TaskList'
import './App.css'

function App() {
  const [inputText, setInputText] = useState('')
  const [tasksArr, setTasksArr] = useState([])

  function flipComplete(id) {
    const newTasksArr = tasksArr.map( task => {
      if (task.id === id) {
        return { ...task, complete: !task.complete }
      } else {
        return task
      }
    })

    setTasksArr(newTasksArr)
  }

  return (
    <>
      <div style={{width: '800px', margin: 'auto'}}>
        <h1 style={{width: '200px', margin: 'auto', padding: '10px', fontSize: '18px'}}>ToDo List</h1>
        <input id="taskInput" value={inputText} onChange={(e) => setInputText(e.target.value)} />
        <Button callback={() =>
          {
            if (inputText.trim().length > 0)
            {
              setTasksArr(
                [
                  ...tasksArr,
                  {
                    id: crypto.randomUUID(),
                    task: inputText,
                    complete: false
                  }
                ]
              );
              setInputText('')
            }
          }
        }>Add task</Button>
      </div>
      <TaskList tasks={tasksArr} completeFn={flipComplete} />
    </>
  )
}

export default App
