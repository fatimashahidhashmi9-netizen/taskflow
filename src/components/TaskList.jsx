import TaskItem from './TaskItem';

function TaskList({ tasks, onDelete }) {
  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
}
export default TaskList;