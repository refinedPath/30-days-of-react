import TaskItem from "./TaskItem";

function TaskList( { tasks, completeFn } ) {
  return (
    <ul>
      {
        tasks.length > 0 ?
          tasks.map(( { id, task, complete } ) => <TaskItem key={id} id={id} task={task} complete={complete} completeFn={completeFn} />) :
          "No tasks found. Add a new one."
      }
    </ul>
  )
}

export default TaskList
