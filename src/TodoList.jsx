// TodoList.jsx
import React, { useState } from 'react';

function TodoList() {
  // State to manage the list of tasks
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Function to handle the submission of a new task
  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      const newTaskObj = { id: Date.now(), text: newTask, completed: false };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
    }
  };

  // Function to toggle task completion
  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div style={styles.container}>
      <h1>To-Do List</h1>
      <form onSubmit={addTask} style={styles.form}>
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Add Task</button>
      </form>
      <ul style={styles.list}>
        {tasks.map(task => (
          <li
            key={task.id}
            style={styles.task}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span style={{
              ...styles.taskText,
              textDecoration: task.completed ? 'line-through' : 'none'
            }}>
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              style={styles.deleteButton}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Basic styling for the components
const styles = {
  container: {
    width: '300px',
    margin: 'auto',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    marginRight: '5px',
  },
  button: {
    padding: '8px 12px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  task: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px',
    borderBottom: '1px solid #ccc',
  },
  taskText: {
    flexGrow: 1,
    marginLeft: '10px',
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    padding: '5px',
    cursor: 'pointer',
  },
};

export default TodoList;
