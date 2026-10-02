function TaskItem({ task, onDelete }) {
  return (
    <div>
      <input type="checkbox" checked={task.completed} readOnly />
      <span>{task.title}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}
export default TaskItem;