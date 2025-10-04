import NavBar from "../components/NavBar";

function CreatePage() {
  return ( 
    <>
    <NavBar />
    <h1 className="text-center mt-8 text-lg font-bold text-primary">
      Create A New Task</h1>
      <form >
        <div className="flex flex-col max-w-lg mx-auto my-4 p-4 border border-primary rounded shadow-lg">
          <label className="font-bold text-primary" htmlFor="task">Task</label>
          <input className="border border-primary rounded p-2" type="text" id="task" name="task" placeholder="Task Title" required />
          <button className="bg-primary text-white p-2 rounded w-24 my-4 cursor-pointer hover:bg-blue-500 
          hover:opacity-75 transition duration-500" type="submit">Create Task</button>
          </div>
          
      </form>
    </>
   );
}

export default CreatePage;