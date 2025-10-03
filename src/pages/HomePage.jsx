import NavBar from "../components/NavBar";
import { getTasks } from "../api/tasks";
import { useQuery } from "@tanstack/react-query";

function HomePage() {
const {data: tasks, isLoading, isError} = useQuery({
  queryKey: ['tasks'],
  queryFn: getTasks
})
console.log(tasks)
  
  return ( 
    <>
    {/*Navbar*/}
    <NavBar />
    {/*page body*/}
    <h1>My Tasks</h1>
    {isLoading && <p>Loading...</p>}
    {isError && <p>Error loading tasks</p>}
    { tasks &&  tasks.length>0 && 
     tasks.map((task) => (
      <div key={task.id}>
       <h2>{task.title}</h2>
       
      </div>
     ))  
    
    }

    </>
   );
}

export default HomePage;