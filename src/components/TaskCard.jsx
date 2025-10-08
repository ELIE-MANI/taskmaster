import { useMutation } from "@tanstack/react-query";
import { deleteTask, toggleTask } from "../api/tasks";
import { useQueryClient } from '@tanstack/react-query';
import DeleteIcon from "./DeleteIcon";


function TaskCard({task} ) {
  const queryClient = useQueryClient();

const toggleMutation = useMutation({
  mutationFn: toggleTask,
   onSuccess: () => {
     queryClient.invalidateQueries(['tasks']);
   }
})

const deleteMutation = useMutation({
  mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks']);
    }
})


  return (  
<div className={` w-lg mx-auto my-2 p-2 bg-primary text-white rounded shadow-2xl flex justify-between items-center`}>
<h2 className={`${task.completed ? "line-through" : ""}`}>{task.title}</h2>
<div className="flex gap-4 items-center">
{task.completed ? '' :
<button onClick={() => toggleMutation.mutate(task.id)}
className="bg-white text-xs text-primary p-2 rounded w-24 my-4 cursor-pointer hover:bg-blue-500 
        ">
 {toggleMutation.isPending ? 'Loading...' : 'Mark as Done'}
</button>
}
<DeleteIcon 
 className="cursor-pointer hover:text-red-500"
 onClick={() => {
    const confirmed = window.confirm("Are you sure you want to delete this task?");
    if (confirmed) {
      deleteMutation.mutate(task.id);
    }
  }}
/>
</div>
</div>

  );
}

export default TaskCard
