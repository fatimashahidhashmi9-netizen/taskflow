import { useState, useEffect } from 'react';
import api from '../api/axios';
import TaskList from '../components/TaskList';
import AddTaskForm from '../components/AddTaskForm';

function Dashboard({ onLogout }) {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    async function fetchTasks() {
      const res = await api.get('/todos?userId=1');
      setTasks(res.data);
    }
    fetchTasks();
  }, []);

  async function handleAdd(title) {
    const res = await api.post('/todos', { title, completed: false, userId: 1 });
    setTasks([...tasks, { ...res.data, id: Date.now() }]);
  }

  async function handleDelete(id) {
    await api.delete(`/todos/${id}`);
    setTasks(tasks.filter(t => t.id !== id));
  }

  const filteredTasks = filter === 'all'
    ? tasks
    : tasks.filter(t => filter === 'completed' ? t.completed : !t.completed);

  function handleLogout() {
    localStorage.removeItem('token');
    onLogout();
  }

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <div>
        <button onClick={() => setFilter('all')}>All Tasks</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
      </div>
      <AddTaskForm onAdd={handleAdd} />
      <TaskList tasks={filteredTasks} onDelete={handleDelete} />
    </div>
  );
}
export default Dashboard;