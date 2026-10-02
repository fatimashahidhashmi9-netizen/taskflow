import { useState } from 'react';

function AddTaskForm({ onAdd }) {
  const [title, setTitle] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!title) return;
    onAdd(title);
    setTitle('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="New task" />
      <button type="submit">Add</button>
    </form>
  );
}
export default AddTaskForm;