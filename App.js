import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

/*import React from 'react'*/

const App = () => {

  const [tasks, setTasks] = useState([
    {   
        id: 1, 
        text: 'Philodendren',
        day: 'Sept 10th at 11am',
        reminder: true,
    },
    {   
        id: 2, 
        text: 'Spider',
        day: 'Sept 12th at 1pm',
        reminder: true,
    },
    {   
        id: 3, 
        text: 'Aloe Vera',
        day: 'Sept 14th at 3pm',
        reminder: true,
    },

])

//Delete Task
const deleteTask = (id) => {
  console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== 
  id))
}

//Toggle Reminder
const toggleReminder = (id) => {
  console.log(id)
}

  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} 
      onToggle={toggleReminder} /> ) : (
        'No Plants To Show')}
    </div>
  )
} 

/* class App extends React.Component {
  render () {
    return <h1>Hello from a class v. function</h1>
  }
} */

export default App
