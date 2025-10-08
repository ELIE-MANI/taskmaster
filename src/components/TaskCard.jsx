import { useMutation } from "@tanstack/react-query";
import { toggleTask } from "../api/tasks";
import { useQueryClient } from '@tanstack/react-query';


function TaskCard({task} ) {
  const queryClient = useQueryClient();

const toggleMutation = useMutation({
  mutationFn: toggleTask,
   onSuccess: () => {
     queryClient.invalidateQueries(['tasks']);
   }
})


  return (  
<div className={`${task.completed ? "line-through" : ""}  w-lg mx-auto my-2 p-2 bg-primary text-white rounded shadow-2xl flex justify-between items-center`}>
<h2>{task.title}</h2>
{task.completed ? '' :
<button onClick={() => toggleMutation.mutate(task.id)}
className="bg-white text-xs text-primary p-2 rounded w-24 my-4 cursor-pointer hover:bg-blue-500 
        ">
 {toggleMutation.isPending ? 'Loading...' : 'Mark as Done'}
</button>
}
</div>

  );
}

export default TaskCard
