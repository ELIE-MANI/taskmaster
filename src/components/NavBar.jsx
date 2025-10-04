import { Link } from "react-router";

function NavBar() {
  return (
    <>
   <div className=" bg-primary text-white p-4 flex items-center justify-between">
     <Link to="/" className="text-2xl font-bold">Taskmaster</Link>
     <Link to="/create" className="bg-white text-primary p-2 rounded">Create Task</Link>
   </div>
    </>
  );
}

export default NavBar;