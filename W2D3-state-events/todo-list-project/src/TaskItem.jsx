function TaskItem( { id, task, complete, completeFn } ) {
  return (
    <li style={{listStyle: 'none'}}>
      <label>
        <input type="checkbox" id={id} onChange={() => completeFn(id)} checked={complete} /> {task}
      </label>
    </li>
  )
}

export default TaskItem
