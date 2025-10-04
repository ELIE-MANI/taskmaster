import { createTask } from "../api/tasks";
import NavBar from "../components/NavBar";
import { useQueryClient, QueryClient, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router";


function CreatePage() {
const [title, setTitle] = useState('');

const navigate = useNavigate();
const QueryClient = useQueryClient();

const mutation = useMutation({
  mutationFn: createTask,
  onSuccess: () => {
    //invalidate and refetch
    QueryClient.invalidateQueries({ queryKey: ['tasks'] });
    setTitle('');
    navigate('/');
  }
});
 
const handleAddTask = () => {
  mutation.mutate({
    title: title,
    completed: false,
  });
}; 


  return ( 
    <>
    <NavBar />
    <h1 className="text-center mt-8 text-lg font-bold text-primary">
      Create A New Task</h1>
      <div>
        <div className="flex flex-col max-w-lg mx-auto my-4 p-4 border border-primary rounded shadow-lg">
          <label className="font-bold text-primary" htmlFor="task">Task</label>
          <input className="border border-primary rounded p-2" 
          type="text" id="task" 
          value={title} onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title" required />
            
          <button onClick={handleAddTask}
          className="bg-primary text-white p-2 rounded w-24 my-4 cursor-pointer hover:bg-blue-500 
          hover:opacity-75 transition duration-500" type="submit">
          {mutation.isLoading ? 'Saving...' : 'Add Task'}
          </button>
          </div>
      
      </div>
    </>
   );
}

export default CreatePage;