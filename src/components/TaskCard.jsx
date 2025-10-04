function TaskCard({task} ) {
  return (  
<div className="w-lg mx-auto my-2 p-2 bg-primary text-white rounded shadow-2xl flex justify-between items-center">
<h2>{task.title}</h2>
<span>
  {task.completed ?"✅" :"❌ pending"}
</span>
</div>

  );
}

export default TaskCard
