import {MdRemoveRedEye} from "react-icons/md"
import {Link} from "react-router-dom"
function UserWegetSm({user}) {
  return (
  <div className="py-2 flex items-center justify-between">
    <div className="flex items-center">
        <div className="h-10 w-10 overflow-hidden rounded-full mr-4">
        <img className="w-full h-full object-cover" src={user?.profilePic} alt="" />
        </div>
        <div className="">
            <div className="capitalize text-black">{user?.username}</div>
            <div className="text-gray-400 text-sm capitalize">{user?.email}</div>  
        </div>
    </div> 
       <Link to={{pathname:`/dashboard/user/${user._id}`,user:user}} className="flex items-center cursor-pointer bg-gray-200 py-1 px-2 rounded-lg">
          <MdRemoveRedEye/>
          <div className="text-gray-500 text-sm ml-1.5">Display</div>
       </Link>  
  </div>
  );
}

export default UserWegetSm;
