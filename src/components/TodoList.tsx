import '../styles/todolist.scss'
import { useState } from 'react'

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function TodoList() {

  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');


  function createNewTask() {
    console.log({ newTaskTitle });
  }

  return (
    <section className='todo-list'>
      <div className="input-group">
        <input
          type="text"
          onChange={(e) => setNewTaskTitle(e.target.value)}
          value={newTaskTitle}
        />
        <button type="submit" data-testid="add-task-button" onClick={createNewTask} >
          add
        </button>
      </div>
    </section>
  )
}